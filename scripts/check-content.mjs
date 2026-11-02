import { readFileSync, existsSync } from 'node:fs';
import { DEMO_KIND } from '../src/scripts/play-meta.mjs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => JSON.parse(readFileSync(join(root, path), 'utf8'));

const site = read('src/data/site.json');
const groups = read('src/data/groups.json');
const projects = read('src/data/projects.json');
const errors = [];
const fail = (message) => errors.push(message);

const COMMANDS = new Set(['help', 'whoami', 'ls', 'cat', 'open', 'ethos', 'theme', 'clear']);
const GROUP_IDS = ['flagship', 'security', 'fiaos', 'os', 'health'];
const ALLOWED_URLS = new Set([
  'https://www.youtube.com/channel/UCXJBK9fvqBnTByYkYo5eYyA',
  'https://github.com/121Nanami',
  'https://github.com/121Nanami/gate',
  'https://github.com/121Nanami/gate-action',
  'https://github.com/121Nanami/GreyHat',
  'https://github.com/121Nanami/agent-arena',
  'https://github.com/121Nanami/agent-fitness',
  'https://github.com/121Nanami/boldinbeauty',
  'https://github.com/121Nanami/fiaos',
  'https://121nanami.github.io/gate/',
]);
const PRIVATE_SLUGS = new Set(['fiahealth']);

function walkStrings(value, path, visit) {
  if (typeof value === 'string') visit(value, path);
  else if (Array.isArray(value)) value.forEach((item, index) => walkStrings(item, `${path}[${index}]`, visit));
  else if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) walkStrings(item, `${path}.${key}`, visit);
  }
}

for (const [label, data] of [
  ['site', site],
  ['groups', groups],
  ['projects', projects],
]) {
  walkStrings(data, label, (value, path) => {
    let stripped = value;
    for (const url of ALLOWED_URLS) stripped = stripped.split(url).join('');
    if (/https?:\/\//i.test(stripped) || /mailto:/i.test(stripped) || /github\.com/i.test(stripped)) {
      fail(`${path} contains a link or external host: ${value.slice(0, 160)}`);
    }
  });
}

if (groups.map((group) => group.id).join() !== GROUP_IDS.join()) {
  fail(`groups must be ${GROUP_IDS.join(', ')} in that order`);
}

const slugs = new Set();
const keys = new Map();

for (const project of projects) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) fail(`bad slug ${project.slug}`);
  if (slugs.has(project.slug)) fail(`duplicate slug ${project.slug}`);
  slugs.add(project.slug);
  if (!GROUP_IDS.includes(project.group)) fail(`${project.slug} has unknown group`);
  for (const field of ['title', 'summary', 'highlight']) {
    if (!project[field] || typeof project[field] !== 'string') fail(`${project.slug} missing ${field}`);
  }
  if (!Array.isArray(project.paragraphs) || project.paragraphs.length === 0) fail(`${project.slug} needs paragraphs`);
  if (!Array.isArray(project.facts)) fail(`${project.slug} needs facts`);
  if (!project.repo || !['coming-soon', 'private', 'public'].includes(project.repo.state)) fail(`${project.slug} repo state`);
  if (!project.repo.note) fail(`${project.slug} repo note`);
  if ('url' in project.repo) fail(`${project.slug} must not have a repo url`);
  if (project.repo.state === 'private' && !PRIVATE_SLUGS.has(project.slug)) {
    fail(`${project.slug} is private but not on the private list`);
  }
  if (project.repo.state === 'private' && (project.links ?? []).length) {
    fail(`${project.slug} is private and must not have links`);
  }
  for (const link of project.links ?? []) {
    if (!ALLOWED_URLS.has(link.href)) fail(`${project.slug} has an unapproved link ${link.href}`);
  }
  for (const token of [project.slug, ...(project.aliases ?? [])]) {
    if (COMMANDS.has(token)) fail(`${project.slug} alias collides with command ${token}`);
    const previous = keys.get(token);
    if (previous && previous !== project.slug) fail(`alias ${token} used by ${previous} and ${project.slug}`);
    keys.set(token, project.slug);
  }
  if (!Array.isArray(project.shots)) fail(`${project.slug} shots`);
  for (const shot of project.shots) {
    if (!shot.alt || !shot.caption || !shot.file) fail(`${project.slug} shot missing alt, caption, or file`);
    const disk = join(root, 'src/assets', shot.file);
    if (!existsSync(disk)) fail(`missing file ${shot.file}`);
  }
  if (project.placeholder && project.shots.length > 0) fail(`${project.slug} placeholder should not have shots`);
  if (project.schematic && project.shots.length > 0) fail(`${project.slug} schematic should not pretend to be a screenshot`);
}

const featured = projects.filter((project) => project.featured).map((project) => project.slug);
if (featured.join() !== 'boldinbeauty,ai-colosseum,agent-arena,agent-fitness') {
  fail(`featured must be boldinbeauty, ai-colosseum, agent-arena, agent-fitness, got ${featured.join()}`);
}
const beauty = projects.find((project) => project.slug === 'boldinbeauty');
if (!beauty || beauty.group !== 'flagship' || !beauty.featured || beauty.repo.state !== 'public') {
  fail('boldinbeauty must lead flagship and be public');
}
if (beauty?.links?.[0]?.href !== 'https://github.com/121Nanami/boldinbeauty') {
  fail('boldinbeauty must link its public repository');
}
if ((beauty?.shots.length ?? 0) < 6) fail('boldinbeauty needs the public screenshots');
if (projects[0]?.slug !== 'boldinbeauty') fail('boldinbeauty must be the first project');
const fiaosProject = projects.find((project) => project.slug === 'fiaos');
if (!fiaosProject || fiaosProject.schematic || fiaosProject.shots.length < 4) {
  fail('fiaos needs four demo screenshots and must not use the schematic');
}
if (fiaosProject?.shots.some((shot) => !/demo data/i.test(shot.caption))) {
  fail('fiaos captions must say demo data');
}

const colosseum = projects.find((project) => project.slug === 'ai-colosseum');
if (!colosseum || colosseum.comingSoon || !colosseum.hero || colosseum.shots.length < 2) {
  fail('ai-colosseum must be an active hero with the brand stills');
}
if (colosseum?.highlight !== 'Two AIs · One random task · One winner') {
  fail('ai-colosseum tagline');
}
if (colosseum?.links?.[0]?.href !== 'https://www.youtube.com/channel/UCXJBK9fvqBnTByYkYo5eYyA') {
  fail('ai-colosseum must link the YouTube channel');
}
if (/coming soon/i.test(JSON.stringify({ site, groups, projects }))) {
  fail('coming soon wording remains in content');
}
const gate = projects.find((project) => project.slug === 'gate');
if (!gate || gate.repo.state !== 'public') fail('gate must be the public GATE / Shipgate project');
if (!site.socials?.some((link) => link.href === 'https://github.com/121Nanami')) {
  fail('site socials must include the GitHub profile');
}
if (colosseum && /copyrighted character/i.test(JSON.stringify(colosseum)) === false) {
  fail('ai-colosseum must say it uses no copyrighted characters');
}

for (const [slug, href] of [
  ['agent-arena', 'https://github.com/121Nanami/agent-arena'],
  ['agent-fitness', 'https://github.com/121Nanami/agent-fitness'],
  ['fiaos', 'https://github.com/121Nanami/fiaos'],
  ['fiaos-studio', 'https://github.com/121Nanami/fiaos'],
  ['fia-modules', 'https://github.com/121Nanami/fiaos'],
]) {
  const project = projects.find((item) => item.slug === slug);
  if (!project || project.repo.state !== 'public' || project.links?.[0]?.href !== href) {
    fail(`${slug} must be public and link ${href}`);
  }
}

for (const id of GROUP_IDS) {
  if (!projects.some((project) => project.group === id)) fail(`group ${id} is empty`);
}

if (!site.person || !site.studio || !site.ethos) fail('site profile is incomplete');

for (const project of projects) {
  const kind = DEMO_KIND[project.slug];
  if (!kind || !['real', 'replay', 'gallery'].includes(kind)) fail(`${project.slug} needs a play demo kind`);
}
if (Object.keys(DEMO_KIND).length !== projects.length) fail('play demo list does not match projects');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`content ok: ${projects.length} projects, ${projects.reduce((n, p) => n + p.shots.length, 0)} shots`);
