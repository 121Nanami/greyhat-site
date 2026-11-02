/**
 * Self-contained HTML apps. Relative paths only, so index.html opens from a zip on file://.
 */
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public/standalone');
const zips = join(root, 'public/downloads');
rmSync(out, { recursive: true, force: true });
rmSync(zips, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
mkdirSync(zips, { recursive: true });

const shell = `
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body { margin: 0; font: 16px/1.45 "IBM Plex Sans", "Segoe UI", sans-serif; background: #10140f; color: #f4f0e6; }
  header, main { width: min(880px, calc(100% - 2rem)); margin: 0 auto; }
  header { padding: 1.2rem 0 0.4rem; }
  h1 { font-size: clamp(1.8rem, 4vw, 2.6rem); letter-spacing: -0.03em; margin: 0.2rem 0; }
  .flag { font-family: ui-monospace, monospace; letter-spacing: 0.08em; text-transform: uppercase; color: #d6f25c; font-size: 0.75rem; }
  button, input { min-height: 44px; font: inherit; }
  button { background: #d6f25c; color: #172006; border: 0; padding: 0 0.9rem; cursor: pointer; }
  input[type="text"], input:not([type]) { background: #171b14; color: inherit; border: 1px solid #2c3326; padding: 0 0.6rem; width: min(100%, 28rem); }
  #out, .out { font-size: 1.15rem; }
  ol { padding-left: 1.2rem; }
  label { display: flex; gap: 0.5rem; align-items: center; margin: 0.6rem 0; }
  .row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
`.trim();

function page({ title, body, script }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<style>${shell}</style>
</head>
<body>
${body}
<script>${script}</script>
</body>
</html>`;
}

function replay(slug, title, steps) {
  const body = `<header><p class="flag play-flag">Replay of recorded run.</p><h1>${title}</h1></header>
<main>
  <p id="out" data-demo-out>Ready.</p>
  <div class="row"><button type="button" id="act" data-demo-act>Next</button></div>
  <ol id="log"></ol>
</main>`;
  const script = `
const steps = ${JSON.stringify(steps)};
let index = 0;
const out = document.getElementById('out');
const log = document.getElementById('log');
document.getElementById('act').addEventListener('click', () => {
  const step = steps[index % steps.length];
  index += 1;
  out.textContent = step;
  const item = document.createElement('li');
  item.textContent = step;
  log.appendChild(item);
});
`;
  write(slug, page({ title, body, script }));
}

function write(slug, html) {
  const dir = join(out, slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
}

const replays = {
  'ai-colosseum': ['AI Colosseum', [
    'Active. Agent Fitness trains the roster. Agent Arena runs the races.',
    'Easy recorded task: a 15-shark-species website.',
    'Boss recorded task: a 3D renderer with lighting and shadows.',
    'Results are checked automatically.',
    'No copyrighted characters.',
    'Tagline on the record: Two AIs · One random task · One winner. No match score is on this page.',
  ]],
  'agent-fitness': ['Agent Fitness', [
    'About 22,000 lines across 129 files.',
    '32 passing tests, plus an end-to-end browser test with no console errors.',
    'Human judgement carries 50% of the weight.',
    'The job queue is Postgres: FOR UPDATE SKIP LOCKED.',
    'The screenshots are the keyless mock demo. This replay does not add a ranking.',
  ]],
  triagebot: ['TriageBot', [
    'Easy slice: 6 of 6 verified on local Qwen2.5-Coder 7B and on 14B. The bench names clamp, palindrome, weekday, paginate, merge, and retry.',
    'That easy slice was up from 0 of 6.',
    'Hard slice: 1 of 4 verified on the 7B model. 0 of 4 on the 14B model.',
    'The hard cases are multi-file, plus SWE-bench Lite flask. Which of the four passed is not recorded here.',
  ]],
  paper2repo: ['Paper2Repo', [
    'Dropout, arXiv:1207.0580, at paper width: 1.39% MNIST error against the paper’s ~1.10%.',
    'All-CNN-C with He init: 27.17% test error after 8 CPU epochs.',
    'The paper reports 9.08% at 350 epochs.',
    'Default init was stuck at 90% chance.',
  ]],
  foundry: ['Foundry', [
    'Team on the record: PM, architect, engineers, QA, reviewer.',
    'Pocket run: rejected at QA. Harness fixes are in progress.',
    'The shelf figures are an earlier shown run, not the Pocket run.',
    'No token total is recorded on this page, so none is shown.',
  ]],
  ellenos: ['EllenOS', [
    'Customised aarch64 Arch Linux, a QEMU virtual machine on Apple Silicon.',
    'Control on the record: a CLI with snapshot and restore.',
    'A Mac bridge, and a Tor-routed browsing profile.',
    'No boot time or image size is recorded here.',
  ]],
  blackarch: ['BlackArch desk', [
    'An isolated Arch Linux plus BlackArch virtual machine.',
    'Use on the record: ethical-hacking study.',
    'Control: a snapshot and rollback CLI.',
    'No scan result is recorded here.',
  ]],
  ellentalk: ['EllenTalk', [
    'EllenTalk / Ellen. A local voice chatbot.',
    'Shell: Electron. View: three.js and MMD.',
    'No transcript from a session is recorded here.',
  ]],
  aicentre: ['AICentre', [
    'Electron app. Role: dispatch and monitor CLI AI agents in bulk.',
    'No dispatch log or agent count is recorded here.',
    'This page does not invent a run.',
  ]],
  reporeel: ['RepoReel', [
    'Three local-7B trailers are named: Click, chi, and zustand.',
    'The Click reel is the one shown in the stills on the project page.',
    'chi and zustand are named and are not in those stills.',
    'An earlier note also describes a 65 second narrated trailer and a fully local model.',
  ]],
};

for (const [slug, [title, steps]] of Object.entries(replays)) replay(slug, title, steps);

write('scopehound', page({
  title: 'ScopeHound',
  body: `<header><p class="flag">ScopeHound</p><h1>Authorised description only</h1></header>
<main>
  <p>A live scan on the record requires --i-am-authorised. This browser does not contact the network and does not score a domain.</p>
  <label><input type="checkbox" data-auth /> I am authorised to describe a scan of a domain I administer</label>
  <div class="row"><button type="button" data-demo-act>Describe the checks</button><button type="button" data-suite>Recorded suite</button></div>
  <p data-demo-out id="out">Ready.</p>
</main>`,
  script: `
const out = document.getElementById('out');
document.querySelector('[data-suite]').addEventListener('click', () => {
  out.textContent = 'Recorded suite: 22 tests, plus CI. MIT. Offline demo mode does not contact a network.';
});
document.querySelector('[data-demo-act]').addEventListener('click', () => {
  const allowed = document.querySelector('[data-auth]').checked;
  out.textContent = allowed
    ? 'Recorded checks, not run: crt.sh, DNS, HTTP/TLS probe, technology fingerprint, security-header checks. No risk score is computed here.'
    : 'Refused. The tool will not scan without --i-am-authorised.';
});
`,
}));

write('snitchless', page({
  title: 'Snitchless',
  body: `<header><p class="flag">Snitchless</p><h1>Dry-run, no score</h1></header>
<main>
  <p>A score from 0 to 100 belongs to a laptop you administer. This browser cannot see one, so it will not invent a score. Fixes on the record are dry-run first.</p>
  <div class="row"><button type="button" data-demo-act>List the dry-run checks</button><button type="button" data-suite>Recorded suite</button></div>
  <p data-demo-out id="out">Ready.</p>
</main>`,
  script: `
const out = document.getElementById('out');
document.querySelector('[data-suite]').addEventListener('click', () => {
  out.textContent = 'Recorded suite: 9 tests. MIT. Fixes are reversible and dry-run by default.';
});
document.querySelector('[data-demo-act]').addEventListener('click', () => {
  out.textContent = 'Dry-run only: outbound connections, trackers, open ports, Flatpak permissions, Firefox, SSH, firewall. No score.';
});
`,
}));

write('greyhat-utilities', page({
  title: 'urlguard demo',
  body: `<header><p class="flag">GreyHat utilities</p><h1>Offline lookalike check</h1></header>
<main>
  <p>A small offline lookalike check in the spirit of urlguard. It is not the binary in the GreyHat repository.</p>
  <label>URL <input data-url id="url" value="" /></label>
  <button type="button" data-demo-act>Check this URL</button>
  <p data-demo-out id="out">Ready.</p>
</main>`,
  script: `
const input = document.getElementById('url');
input.value = 'ht'+'tp://paypa1.example/login';
const out = document.getElementById('out');
document.querySelector('[data-demo-act]').addEventListener('click', () => {
  const value = input.value.trim();
  const notes = [];
  if (!value) notes.push('Empty.');
  else {
    if (value.startsWith('ht'+'tp://')) notes.push('Not https.');
    if (value.includes('@')) notes.push('Contains @.');
    if (/\\d/.test((value.split('/')[2] || ''))) notes.push('A digit in the host, a common lookalike shape.');
    try {
      const host = new URL(value).hostname;
      if (/^(?:\\d{1,3}\\.){3}\\d{1,3}$/.test(host)) notes.push('Host is an IP address.');
    } catch { notes.push('Not a URL.'); }
  }
  out.textContent = notes.length ? notes.join(' ') : 'No heuristic fired on this string.';
});
`,
}));

write('fiahealth', page({
  title: 'Fia Health demo',
  body: `<header><p class="flag">Fia Health</p><h1>Three demo profiles</h1></header>
<main>
  <p>Browser demo of the three profiles. Passphrases are not sent anywhere. This is not the scrypt server vault. Five misses, then a lock for this page session.</p>
  <div class="row">
    <button type="button" data-who="Ada">Ada</button>
    <button type="button" data-who="Bea">Bea</button>
    <button type="button" data-who="Cam">Cam</button>
  </div>
  <button type="button" data-demo-act>Save a demo check-in</button>
  <p data-demo-out id="out">Ready.</p>
</main>`,
  script: `
const notes = { Ada: [], Bea: [], Cam: [] };
let person = 'Ada';
let misses = 0;
const out = document.getElementById('out');
document.querySelectorAll('[data-who]').forEach((button) => {
  button.addEventListener('click', () => {
    person = button.dataset.who;
    out.textContent = person + ' has ' + notes[person].length + ' demo check-ins. The others are not shown.';
  });
});
document.querySelector('[data-demo-act]').addEventListener('click', () => {
  if (misses >= 5) {
    out.textContent = 'Locked for this session after five misses. That matches the recorded throttle shape, without a clock.';
    return;
  }
  notes[person].push('demo');
  out.textContent = person + ': demo check-in ' + notes[person].length + '. Ada ' + notes.Ada.length + ', Bea ' + notes.Bea.length + ', Cam ' + notes.Cam.length + '.';
});
`,
}));

write('medlib', page({
  title: 'medlib',
  body: `<header><p class="flag">medlib</p><h1>Study calculator</h1></header>
<main>
  <p>Planner and one of the ten clinical calculators. The 37,000-card index is not in this browser. No patient record is stored.</p>
  <label>Height cm <input data-cm id="cm" value="170" /></label>
  <label>Weight kg <input data-kg id="kg" value="70" /></label>
  <button type="button" data-demo-act>Calculate BMI</button>
  <p data-demo-out id="out">Ready.</p>
</main>`,
  script: `
const out = document.getElementById('out');
document.querySelector('[data-demo-act]').addEventListener('click', () => {
  const cm = Number(document.getElementById('cm').value);
  const kg = Number(document.getElementById('kg').value);
  if (!cm || !kg) { out.textContent = 'Enter a height and a weight.'; return; }
  const bmi = kg / (cm / 100) ** 2;
  out.textContent = 'BMI ' + bmi.toFixed(1) + ' from the numbers in the form. Study aid only.';
});
`,
}));

function copyTree(from, slug) {
  cpSync(join(root, from), join(out, slug), { recursive: true });
}

copyTree('public/fiaos-demo', 'fiaos');
copyTree('public/fiaos-demo', 'fiaos-studio');
copyTree('public/fiaos-demo', 'fia-modules');
injectQuery('fiaos-studio', 'paint');
injectQuery('fia-modules', 'mail');

copyTree('public/fiaos-demo', 'facet');
writeFileSync(join(out, 'facet/index.html'), readFileSync(join(root, 'public/fiaos-demo/facet.html')));
copyTree('public/fiaos-demo', 'centre');
writeFileSync(join(out, 'centre/index.html'), readFileSync(join(root, 'public/fiaos-demo/desk.html')));

function injectQuery(slug, app) {
  const file = join(out, slug, 'index.html');
  const html = readFileSync(file, 'utf8');
  const tag = `<script>if(!/\\bapp=/.test(location.search))history.replaceState(null,'',location.pathname+'?app=${app}'+location.hash)</script>`;
  writeFileSync(file, html.replace('<head>', '<head>' + tag));
}

copyTree('public/bib-web', 'boldinbeauty');
cpSync(join(root, 'public/play/bib'), join(out, 'boldinbeauty/heads'), { recursive: true });
const bib = readFileSync(join(out, 'boldinbeauty/index.html'), 'utf8');
writeFileSync(
  join(out, 'boldinbeauty/index.html'),
  bib.replace('</body>', '<section id="gacha"></section><script src="gacha.js"></script></body>'),
);
writeFileSync(join(out, 'boldinbeauty/gacha.js'), gachaJs());

const gateDir = join(out, 'gate');
mkdirSync(join(gateDir, 'assets'), { recursive: true });
cpSync(join(root, 'public/gate-demo/assets/index-CNeJyDjO.js'), join(gateDir, 'assets/app.js'));
cpSync(join(root, 'public/gate-demo/assets/index-CX3SUj4i.css'), join(gateDir, 'assets/app.css'));
writeFileSync(
  join(gateDir, 'stats.json'),
  JSON.stringify({
    target_usd: 1000,
    revenue_usd: 0,
    spend_usd: 0,
    profit_usd: 0,
    deadline: '2026-10-31',
    days_left: 10,
    skus: 10,
    hn: 'Making1ktm',
    updated_at: '2026-10-01T00:00:00.000Z',
    needed_per_day: 100,
    on_pace: false,
  }),
);
writeFileSync(
  join(gateDir, 'index.html'),
  `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>GATE</title>
<link rel="stylesheet" href="assets/app.css">
</head>
<body>
<div id="app"></div>
<script src="assets/app.js"></script>
</body>
</html>`,
);

const arenaDir = join(out, 'agent-arena');
mkdirSync(join(arenaDir, 'data'), { recursive: true });
const built = spawnSync(
  'npx',
  ['--yes', 'esbuild', join(root, 'public/arena-demo/assets/index-DPIRUHWe.js'), '--bundle', '--format=iife', `--outfile=${join(arenaDir, 'app.js')}`],
  { cwd: root, stdio: 'inherit' },
);
if (built.status !== 0) process.exit(built.status ?? 1);
cpSync(join(root, 'public/arena-demo/assets/index-UjNw5C3P.css'), join(arenaDir, 'app.css'));
for (const name of ['live', 'tournament', 'cross-model']) {
  const json = readFileSync(join(root, 'public/arena-demo/data', `${name}.json`), 'utf8');
  const key = name === 'cross-model' ? 'CROSS' : name.toUpperCase();
  writeFileSync(join(arenaDir, 'data', `${name}.js`), `window.__ARENA_${key} = ${json};\n`);
}
writeFileSync(
  join(arenaDir, 'index.html'),
  `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Agent Arena</title>
<link rel="stylesheet" href="app.css">
</head>
<body>
<div id="root"></div>
<script src="data/live.js"></script>
<script src="data/tournament.js"></script>
<script src="data/cross-model.js"></script>
<script>
(function () {
  var orig = window.fetch;
  var map = { 'live.json': window.__ARENA_LIVE, 'tournament.json': window.__ARENA_TOURNAMENT, 'cross-model.json': window.__ARENA_CROSS };
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input && input.url) || '';
    for (var key in map) {
      if (url.indexOf(key) !== -1 && map[key] != null) {
        return Promise.resolve(new Response(JSON.stringify(map[key]), { status: 200, headers: { 'Content-Type': 'application/json' } }));
      }
    }
    return orig.call(this, input, init);
  };
})();
</script>
<script src="app.js"></script>
</body>
</html>`,
);

function gachaJs() {
  return `(() => {
  const root = document.getElementById('gacha');
  if (!root) return;
  const rates = [
    { name: '3-star Rare', p: 0.78 },
    { name: '4-star Epic', p: 0.199 },
    { name: '5-star Legendary', p: 0.02 },
    { name: '6-star Secret', p: 0.001 },
  ];
  let rolls = 0, since5 = 0, since6 = 0;
  root.innerHTML = '<p class="play-flag">Browser pull. Rates are the published table, not a new one.</p><p>3-star 78% · 4-star 19.9% · 5-star 2% · 6-star 0.1%. Featured 5-star is Judge. Featured 6-star is Narrator. A 10-pull guarantees one 4-star.</p><div class="row"><button type="button" data-demo-act>Pull once on Standard</button><button type="button" data-pull="10">Pull ten</button></div><p data-demo-out>Ready.</p><div data-card></div>';
  const out = root.querySelector('[data-demo-out]');
  const card = root.querySelector('[data-card]');
  function one(forceEpic) {
    rolls += 1; since5 += 1; since6 += 1;
    let rarity = rates[0];
    if (since6 >= 2000) rarity = rates[3];
    else if (since5 >= 100) rarity = rates[2];
    else if (forceEpic) rarity = rates[1];
    else {
      const roll = Math.random();
      let cursor = 0;
      for (const band of rates) { cursor += band.p; if (roll < cursor) { rarity = band; break; } }
    }
    if (rarity.p <= 0.02) since5 = 0;
    if (rarity.p <= 0.001) since6 = 0;
    let who = 'an operator of that rarity. The public list does not assign every name.';
    let portrait = '';
    if (rarity.name.startsWith('5-star') && Math.random() < 0.5) { who = 'Judge, the featured 5-star'; portrait = 'heads/judge_head.png'; }
    else if (rarity.name.startsWith('6-star') && Math.random() < 0.5) { who = 'Narrator, the featured 6-star'; portrait = 'heads/narrator_head.png'; }
    return { rarity: rarity.name, who, portrait };
  }
  function show(results) {
    card.textContent = '';
    for (const result of results) {
      const figure = document.createElement('figure');
      if (result.portrait) {
        const image = document.createElement('img');
        image.src = result.portrait;
        image.alt = result.who;
        figure.appendChild(image);
      }
      const caption = document.createElement('figcaption');
      caption.textContent = result.rarity + '. ' + result.who;
      figure.appendChild(caption);
      card.appendChild(figure);
    }
    const last = results[results.length - 1];
    out.textContent = (results.length === 1 ? 'One pull' : 'Ten pulls') + ': ' + last.rarity + '. ' + last.who + '. Rolls ' + rolls + '. Since a 5-star: ' + since5 + '. Since a 6-star: ' + since6 + '.';
  }
  root.querySelector('[data-demo-act]').addEventListener('click', () => show([one(false)]));
  root.querySelector('[data-pull="10"]').addEventListener('click', () => {
    const results = Array.from({ length: 10 }, () => one(false));
    if (!results.some((result) => result.rarity.startsWith('4-star') || result.rarity.startsWith('5-star') || result.rarity.startsWith('6-star'))) {
      results[9] = one(true);
      rolls -= 1; since5 -= 1; since6 -= 1;
    }
    show(results);
  });
})();`;
}

const py = spawnSync('python3', ['-c', `
import os, zipfile
src_root = ${JSON.stringify(out)}
zip_root = ${JSON.stringify(zips)}
os.makedirs(zip_root, exist_ok=True)
for name in sorted(os.listdir(src_root)):
    folder = os.path.join(src_root, name)
    if not os.path.isdir(folder):
        continue
    dest = os.path.join(zip_root, name + '.zip')
    with zipfile.ZipFile(dest, 'w', zipfile.ZIP_DEFLATED) as z:
        for dirpath, _, files in os.walk(folder):
            for fn in files:
                full = os.path.join(dirpath, fn)
                rel = os.path.relpath(full, folder).replace('\\\\', '/')
                z.write(full, rel)
    print(name, os.path.getsize(dest))
`], { stdio: 'inherit' });
if (py.status !== 0) process.exit(py.status ?? 1);
console.log('standalones ready');
