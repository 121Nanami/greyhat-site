import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const root = dist.pathname;
const baseRaw = process.env.BASE_PATH || '/';
const basePrefix = baseRaw === '/' ? '' : `/${baseRaw.replace(/^\/+|\/+$/g, '')}`;
const knownBases = ['/greyhat-site'];

function sitePath(urlPath) {
  let pathOnly = urlPath.split('#')[0].split('?')[0];
  const prefixes = [];
  if (basePrefix) prefixes.push(basePrefix);
  for (const known of knownBases) {
    if (!prefixes.includes(known)) prefixes.push(known);
  }
  for (const prefix of prefixes) {
    if (pathOnly === prefix || pathOnly.startsWith(`${prefix}/`)) {
      pathOnly = pathOnly.slice(prefix.length) || '/';
      break;
    }
  }
  return pathOnly;
}

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) out.push(...walk(path));
    else out.push(path);
  }
  return out;
}

const files = walk(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const texts = htmlFiles.map((file) => readFileSync(file, 'utf8'));
const home = texts.find((html) => html.includes('See flagship work'));
const errors = [];
const fail = (message) => errors.push(message);

if (!home) fail('home page missing');

for (const needle of [
  'Myla',
  'GreyHat Inc',
  'Agent Arena',
  'Agent Fitness',
  'AI Colosseum',
  '6/6 · 1/4',
  'zustand',
  '27.17%',
  'AI Colosseum on YouTube',
  'https://www.youtube.com/channel/UCXJBK9fvqBnTByYkYo5eYyA',
  'https://github.com/121Nanami',
  'GATE / Shipgate',
  'ScopeHound',
  'Snitchless',
  'FiaOS',
  'medlib',
  'BoldInBeauty',
  'Private repository. Not linked.',
  'No public repository.',
  'Two AIs · One random task · One winner',
]) {
  if (!home?.includes(needle)) fail(`home missing ${needle}`);
}

const fitnessPage = texts.find((html) => html.includes('FOR UPDATE SKIP LOCKED'));
if (!fitnessPage) fail('agent fitness report missing');
if (fitnessPage && /github\.com\/121Nanami\/fiahealth/i.test(fitnessPage)) {
  fail('fia health repository is linked');
}

const banned = [
  'googletagmanager',
  'google-analytics',
  'fonts.googleapis',
  'fonts.gstatic',
  'cdn.jsdelivr',
  'unpkg.com',
  'cdnjs.cloudflare',
];

for (const html of texts) {
  for (const host of banned) {
    if (html.includes(host)) fail(`built html references ${host}`);
  }
  const urls = html.match(/https?:\/\/[^"'\\\s<]+/g) ?? [];
  for (const url of urls) {
    const allowed = [
      'https://schema.org',
      'http://www.w3.org/2000/svg',
      'https://www.w3.org/2000/svg',
      'https://www.youtube.com/channel/UCXJBK9fvqBnTByYkYo5eYyA',
      'https://github.com/121Nanami',
      'https://github.com/121Nanami/agent-arena',
      'https://github.com/121Nanami/agent-fitness',
      'https://github.com/121Nanami/boldinbeauty',
      'https://github.com/121Nanami/fiaos',
      'https://121nanami.github.io/gate/',
    ];
    const folded = url.toLowerCase();
    const ok = allowed.some((prefix) => folded === prefix.toLowerCase() || folded.startsWith(prefix.toLowerCase()));
    if (!ok) fail(`unexpected external url ${url}`);
  }
}

const projectPages = htmlFiles.filter((file) => file.includes(`${join('projects')}`));
if (projectPages.length < 22) fail(`expected project pages plus index, saw ${projectPages.length}`);

const htmlByPath = new Map(htmlFiles.map((file, index) => [file, texts[index]]));
for (const [file, html] of htmlByPath) {
  const hrefs = [...(html.match(/href="([^"]+)"/g) ?? []), ...(html.match(/src="([^"]+)"/g) ?? [])];
  for (const raw of hrefs) {
    const href = raw.slice(raw.indexOf('"') + 1, -1);
      if (/^(https?:|mailto:|tel:|javascript:)/i.test(href)) {
      const allowedHrefs = new Set([
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
      const ok = href.startsWith('https://schema.org') || allowedHrefs.has(href);
      if (!ok) fail(`${file} has external href ${href}`);
      continue;
    }
    const pathOnly = sitePath(href);
    if (!pathOnly.startsWith('/')) continue;
    const rel = pathOnly.replace(/^\//, '');
    const asFile = join(root, rel);
    const asIndex = join(root, rel, 'index.html');
    if (!existsSync(asFile) && !existsSync(asIndex)) fail(`${file} links to missing ${href}`);
  }
}

for (const [slug, href] of [
  ['agent-fitness', 'https://github.com/121Nanami/agent-fitness'],
  ['agent-arena', 'https://github.com/121Nanami/agent-arena'],
  ['boldinbeauty', 'https://github.com/121Nanami/boldinbeauty'],
  ['fiaos', 'https://github.com/121Nanami/fiaos'],
  ['fiaos-studio', 'https://github.com/121Nanami/fiaos'],
  ['fia-modules', 'https://github.com/121Nanami/fiaos'],
]) {
  const page = htmlByPath.get(join(root, 'projects', slug, 'index.html')) || '';
  if (!page.includes(href)) fail(`${slug} page missing ${href}`);
}
for (const slug of ['fiahealth']) {
  const page = htmlByPath.get(join(root, 'projects', slug, 'index.html')) || '';
  if (!page) fail(`missing page ${slug}`);
  if (/github\.com\/121Nanami\/fiahealth/i.test(page)) fail(`${slug} links a repository`);
}

const images = files.filter((file) => /\.(webp|avif|png|jpe?g)$/i.test(file));
if (images.length < 20) fail(`expected optimized images, saw ${images.length}`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`dist ok: ${htmlFiles.length} html files, ${images.length} images`);
