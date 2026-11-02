/** Pure terminal session. No DOM. Used by the page and by node:test. */

export const COMMANDS = ['help', 'whoami', 'ls', 'cat', 'open', 'ethos', 'theme', 'clear'];

const GROUP_WORDS = {
  flagship: 'flagship',
  ai: 'flagship',
  security: 'security',
  sec: 'security',
  fiaos: 'fiaos',
  fia: 'fiaos',
  life: 'fiaos',
  os: 'os',
  apps: 'os',
  health: 'health',
  medtech: 'health',
};

function norm(value) {
  return String(value ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

export function findProject(token, projects) {
  const raw = String(token ?? '').trim().toLowerCase();
  if (!raw) return undefined;
  const cleaned = raw.replace(/^projects\//, '').replace(/\/$/, '');
  const folded = norm(cleaned);
  return projects.find((project) => {
    if (project.slug === cleaned) return true;
    if ((project.aliases ?? []).some((alias) => alias.toLowerCase() === cleaned)) return true;
    if (norm(project.slug) === folded) return true;
    if (norm(project.title) === folded) return true;
    return (project.aliases ?? []).some((alias) => norm(alias) === folded);
  });
}

function groupOf(token, groups) {
  if (!token) return undefined;
  const key = token.toLowerCase();
  const id = GROUP_WORDS[key];
  if (!id) return undefined;
  return groups.find((group) => group.id === id);
}

function helpBlocks() {
  return [
    { type: 'text', text: 'commands — this session stays in the browser' },
    { type: 'text', text: '  whoami              who operates GreyHat Inc' },
    { type: 'text', text: '  ethos               studio rules' },
    { type: 'text', text: '  ls projects         every project, by group' },
    { type: 'text', text: '  ls <group>          flagship, security, fiaos, os, health' },
    { type: 'text', text: '  ls game             BoldInBeauty, filed under flagship' },
    { type: 'text', text: '  cat <project>       read one (try: cat arena, cat fitness)' },
    { type: 'text', text: '  open <project>      open its report' },
    { type: 'text', text: '  theme [light|dark]' },
    { type: 'text', text: '  clear' },
    { type: 'text', text: 'unlisted words are answered. nothing is executed.' },
  ];
}

function whoami(profile) {
  return [
    { type: 'text', text: profile.person },
    { type: 'text', text: profile.role },
    { type: 'text', text: profile.place },
    { type: 'text', text: `${profile.studio}. ${profile.between}` },
    { type: 'text', text: `Focus: ${profile.focus}` },
    { type: 'text', text: profile.ethos },
  ];
}

function ethos(profile) {
  return [
    { type: 'text', text: profile.ethos },
    { type: 'text', text: `Focus: ${profile.focus}` },
    { type: 'text', text: 'Repositories that are not public yet are marked coming soon.' },
    { type: 'text', text: 'Agent Fitness is private and is not linked.' },
    { type: 'text', text: 'This page does not send analytics.' },
  ];
}

function listGroup(group, projects) {
  const rows = projects.filter((project) => project.group === group.id);
  const blocks = [{ type: 'text', text: `${group.id}/  ${group.label}` }];
  for (const project of rows) {
    blocks.push({
      type: 'entry',
      text: project.slug,
      aside: project.title,
      href: `projects/${project.slug}/`,
    });
  }
  if (rows.length === 0) blocks.push({ type: 'text', text: '  (empty)' });
  return blocks;
}

function ls(arg, ctx) {
  const token = arg.trim().toLowerCase();
  if (!token || token === 'projects' || token === 'all') {
    const blocks = [];
    for (const group of ctx.groups) blocks.push(...listGroup(group, ctx.projects));
    return blocks;
  }
  if (token === 'game' || token === 'games') {
    const project = ctx.projects.find((item) => item.slug === 'boldinbeauty');
    return [
      { type: 'text', text: 'game/  BoldInBeauty is filed under flagship' },
      {
        type: 'entry',
        text: project?.slug || 'boldinbeauty',
        aside: project?.title || 'BoldInBeauty',
        href: 'projects/boldinbeauty/',
      },
    ];
  }
  const group = groupOf(token, ctx.groups);
  if (!group) {
    return [
      {
        type: 'text',
        text: `no such group: ${arg}. try flagship, security, fiaos, os, health`,
      },
    ];
  }
  return listGroup(group, ctx.projects);
}

function projectBlocks(project) {
  const blocks = [
    { type: 'title', text: project.title },
    { type: 'text', text: project.summary },
  ];
  if (project.highlight) blocks.push({ type: 'text', text: project.highlight });
  if (project.stage) blocks.push({ type: 'kv', label: 'stage', value: project.stage });
  for (const fact of project.facts ?? []) {
    blocks.push({ type: 'kv', label: fact.label, value: fact.value });
  }
  for (const paragraph of project.paragraphs ?? []) {
    blocks.push({ type: 'text', text: paragraph });
  }
  if (project.callout) blocks.push({ type: 'text', text: project.callout });
  blocks.push({ type: 'text', text: project.repoNote || project.repo?.note || '' });
  for (const link of project.links ?? []) {
    blocks.push({ type: 'link', text: link.label, href: link.href });
  }
  blocks.push({
    type: 'link',
    text: 'open the report',
    href: `projects/${project.slug}/`,
  });
  return blocks.filter((block) => block.text !== '');
}

function cat(arg, ctx) {
  if (!arg) {
    return { blocks: [{ type: 'text', text: 'usage: cat <project>   try cat arena' }] };
  }
  const group = groupOf(arg, ctx.groups);
  if (group && !findProject(arg, ctx.projects)) {
    return { blocks: ls(arg, ctx) };
  }
  const project = findProject(arg, ctx.projects);
  if (!project) {
    return {
      blocks: [{ type: 'text', text: `cat: ${arg}: no such project. try ls projects` }],
    };
  }
  return { blocks: projectBlocks(project) };
}

function open(arg, ctx) {
  if (!arg) return { blocks: [{ type: 'text', text: 'usage: open <project>' }] };
  const project = findProject(arg, ctx.projects);
  if (!project) {
    return { blocks: [{ type: 'text', text: `open: ${arg}: no such project` }] };
  }
  return {
    navigateSlug: project.slug,
    blocks: [{ type: 'text', text: `opening ${project.slug}` }],
  };
}

/**
 * @param {string} raw
 * @param {{ profile: object, groups: {id: string, label: string}[], projects: object[] }} ctx
 */
export function runCommand(raw, ctx) {
  const input = String(raw ?? '')
    .trim()
    .replace(/\s+/g, ' ');
  if (!input) return { blocks: [] };

  const [head, ...rest] = input.split(' ');
  const cmd = head.toLowerCase();
  const arg = rest.join(' ').trim();

  if (cmd === 'clear') return { clear: true, blocks: [] };
  if (cmd === 'help' || cmd === '?') return { blocks: helpBlocks() };
  if (cmd === 'whoami') return { blocks: whoami(ctx.profile) };
  if (cmd === 'ethos') return { blocks: ethos(ctx.profile) };
  if (cmd === 'theme') {
    const mode = arg.toLowerCase();
    if (!arg) return { theme: 'toggle', blocks: [] };
    if (mode === 'light' || mode === 'dark') return { theme: mode, blocks: [] };
    return { blocks: [{ type: 'text', text: 'usage: theme [light|dark]' }] };
  }
  if (cmd === 'ls') return { blocks: ls(arg, ctx) };
  if (cmd === 'cat') return cat(arg, ctx);
  if (cmd === 'open') return open(arg, ctx);
  if (cmd === 'date') {
    const now = ctx.now ? new Date(ctx.now) : new Date();
    return { blocks: [{ type: 'text', text: `your clock ${now.toISOString()}` }] };
  }
  const egg = eggFor(cmd, ctx);
  if (egg) return { blocks: egg };

  if (!arg) {
    const project = findProject(input, ctx.projects);
    if (project) return cat(project.slug, ctx);
  }

  return {
    blocks: [
      { type: 'text', text: `${cmd}: command not found` },
      { type: 'text', text: 'try help' },
    ],
  };
}

function eggFor(cmd, ctx) {
  const person = ctx.profile?.person ?? 'Myla';
  const lines = {
    sudo: ['sudo: declined.', 'grey hat does not take root.'],
    hack: ['hack: refused.', 'the tools map and audit. they do not attack.'],
    rm: ['rm: dry run.', 'nothing here is deleted.'],
    coffee: ['long black.', 'Brisbane. the models stay on the machine.'],
    matrix: ['the rain stays outside.', 'the work is on the page.'],
    exit: ['exit: ignored.', 'this session is the site.'],
    hat: ['white hat. black hat.', 'the work sits in the grey.'],
    vim: [':q is open.', 'you are already in a buffer.'],
    ':q': ['still here.'],
    pwd: ['~/session'],
    id: [`uid=${person.toLowerCase()} gid=greyhat`],
    hello: [`${person}. Brisbane.`, 'type whoami.'],
  };
  const hit = lines[cmd];
  if (!hit) return null;
  return hit.map((text) => ({ type: 'text', text }));
}

function sharedPrefix(options) {
  if (options.length === 0) return '';
  let prefix = options[0];
  for (const option of options.slice(1)) {
    let i = 0;
    while (i < prefix.length && i < option.length && prefix[i] === option[i]) i += 1;
    prefix = prefix.slice(0, i);
  }
  return prefix;
}

function finish(full, token, pool) {
  const lower = token.toLowerCase();
  const matches = [...new Set(pool)].filter((item) => item.toLowerCase().startsWith(lower));
  if (matches.length === 0) return { text: full, options: [] };
  const at = full.lastIndexOf(token);
  const stem = full.slice(0, at);
  if (matches.length === 1) {
    return { text: `${stem}${matches[0]} `, options: [] };
  }
  const prefix = sharedPrefix(matches);
  const next = prefix.length > token.length ? `${stem}${prefix}` : full;
  return { text: next, options: matches };
}

function names(projects) {
  const out = [];
  for (const project of projects) {
    out.push(project.slug);
    for (const alias of project.aliases ?? []) out.push(alias);
  }
  return out;
}

/** Tab completion. Returns the next input value and, when ambiguous, the options. */
export function complete(input, ctx) {
  const endsSpace = /\s$/.test(input);
  const parts = input.trim().split(/\s+/).filter(Boolean);
  const projectNames = names(ctx.projects);
  const groupNames = Object.keys(GROUP_WORDS);

  if (parts.length === 0) return { text: input, options: [] };

  if (parts.length === 1 && !endsSpace) {
    return finish(input, parts[0], [...COMMANDS, ...projectNames]);
  }

  const cmd = parts[0].toLowerCase();
  if (cmd === 'ls') {
    const pool = ['projects', ...groupNames];
    if (parts.length === 1 && endsSpace) return { text: input, options: [] };
    if (parts.length === 2 && !endsSpace) return finish(input, parts[1], pool);
  }
  if (cmd === 'cat' || cmd === 'open') {
    if (parts.length === 1 && endsSpace) return { text: input, options: [] };
    if (parts.length === 2 && !endsSpace) return finish(input, parts[1], projectNames);
  }
  if (cmd === 'theme') {
    const pool = ['light', 'dark'];
    if (parts.length === 1 && endsSpace) return { text: input, options: [] };
    if (parts.length === 2 && !endsSpace) return finish(input, parts[1], pool);
  }
  return { text: input, options: [] };
}
