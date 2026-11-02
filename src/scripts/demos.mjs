/** In-browser demos. Replays quote recorded facts only. */

function replay(root, steps) {
  let index = 0;
  root.innerHTML = `
    <p class="play-flag">Replay of recorded run.</p>
    <button type="button" data-demo-act>Next recorded step</button>
    <p data-demo-out>Ready.</p>
    <ol class="play-log"></ol>`;
  const out = root.querySelector('[data-demo-out]');
  const log = root.querySelector('.play-log');
  root.querySelector('[data-demo-act]').addEventListener('click', () => {
    const step = steps[index % steps.length];
    index += 1;
    out.textContent = step;
    const item = document.createElement('li');
    item.textContent = step;
    log.appendChild(item);
  });
}

function bind(root, onClick) {
  root.querySelector('[data-demo-act]').addEventListener('click', () => {
    onClick(root.querySelector('[data-demo-out]'));
  });
}

const REPLAYS = {
  'ai-colosseum': [
    'Active. Agent Fitness trains the roster. Agent Arena runs the races.',
    'Easy recorded task: a 15-shark-species website.',
    'Boss recorded task: a 3D renderer with lighting and shadows.',
    'Results are checked automatically.',
    'No copyrighted characters.',
    'Tagline on the record: Two AIs · One random task · One winner. No match score is on this page.',
  ],
  'agent-arena': [
    'Season model: local Qwen2.5-Coder 1.5B via llama.cpp.',
    'Reckless went from 0% to 100% hidden pass after a coach rewrite.',
    'Hidden tests were held out. The sandbox was bubblewrap with no network.',
    'Skill and cost are separate TrueSkill ratings, with a Pareto view.',
    'Season findings: coach edits hurt smaller players. No other player’s score is recorded here.',
  ],
  'agent-fitness': [
    'About 22,000 lines across 129 files.',
    '32 passing tests, plus an end-to-end browser test with no console errors.',
    'Human judgement carries 50% of the weight.',
    'The job queue is Postgres: FOR UPDATE SKIP LOCKED.',
    'The screenshots are the keyless mock demo. This replay does not add a ranking.',
  ],
  triagebot: [
    'Easy slice: 6 of 6 verified on local Qwen2.5-Coder 7B and on 14B. The bench names clamp, palindrome, weekday, paginate, merge, and retry.',
    'That easy slice was up from 0 of 6.',
    'Hard slice: 1 of 4 verified on the 7B model. 0 of 4 on the 14B model.',
    'The hard cases are multi-file, plus SWE-bench Lite flask. Which of the four passed is not recorded here.',
  ],
  paper2repo: [
    'Dropout, arXiv:1207.0580, at paper width: 1.39% MNIST error against the paper’s ~1.10%.',
    'All-CNN-C with He init: 27.17% test error after 8 CPU epochs.',
    'The paper reports 9.08% at 350 epochs.',
    'Default init was stuck at 90% chance.',
  ],
  foundry: [
    'Team on the record: PM, architect, engineers, QA, reviewer.',
    'Pocket run: rejected at QA. Harness fixes are in progress.',
    'The shelf figures are an earlier shown run, not the Pocket run.',
    'No token total is recorded on this page, so none is shown.',
  ],
  ellenos: [
    'Customised aarch64 Arch Linux, a QEMU virtual machine on Apple Silicon.',
    'Control on the record: a CLI with snapshot and restore.',
    'A Mac bridge, and a Tor-routed browsing profile.',
    'No boot time or image size is recorded here.',
  ],
  blackarch: [
    'An isolated Arch Linux plus BlackArch virtual machine.',
    'Use on the record: ethical-hacking study.',
    'Control: a snapshot and rollback CLI.',
    'No scan result is recorded here.',
  ],
  ellentalk: [
    'EllenTalk / Ellen. A local voice chatbot.',
    'Shell: Electron. View: three.js and MMD.',
    'No transcript from a session is recorded here.',
  ],
  aicentre: [
    'Electron app. Role: dispatch and monitor CLI AI agents in bulk.',
    'No dispatch log or agent count is recorded here.',
  ],
  reporeel: [
    'Three local-7B trailers are named: Click, chi, and zustand.',
    'The Click reel is the one shown in the stills on the project page.',
    'chi and zustand are named and are not in those stills.',
    'An earlier note also describes a 65 second narrated trailer and a fully local model.',
  ],
};

function gacha(root) {
  const base = document.documentElement.dataset.base || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  const rates = [
    { name: '3-star Rare', p: 0.78 },
    { name: '4-star Epic', p: 0.199 },
    { name: '5-star Legendary', p: 0.02 },
    { name: '6-star Secret', p: 0.001 },
  ];
  let rolls = 0;
  let since5 = 0;
  let since6 = 0;
  root.innerHTML = `
    <p class="play-flag">Browser pull. Rates are the published table, not a new one.</p>
    <p>3-star 78% · 4-star 19.9% · 5-star 2% · 6-star 0.1%. Featured 5-star is Judge. Featured 6-star is Narrator. A 10-pull guarantees one 4-star.</p>
    <div class="play-row">
      <button type="button" data-demo-act>Pull once on Standard</button>
      <button type="button" data-pull="10">Pull ten</button>
      <label>Extra still <input type="file" accept="image/*,video/*" data-drop /></label>
    </div>
    <p data-demo-out>Ready.</p>
    <div class="play-pull" data-card></div>
    <img alt="" data-preview hidden />`;
  const out = root.querySelector('[data-demo-out]');
  const card = root.querySelector('[data-card]');
  const preview = root.querySelector('[data-preview]');
  root.querySelector('[data-drop]').addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    preview.hidden = false;
    preview.alt = `Local preview of ${file.name}. Not uploaded.`;
    preview.src = URL.createObjectURL(file);
    out.textContent = `Holding ${file.name} in this browser only.`;
  });
  function one(forceEpic) {
    rolls += 1;
    since5 += 1;
    since6 += 1;
    let rarity = rates[0];
    if (since6 >= 2000) rarity = rates[3];
    else if (since5 >= 100) rarity = rates[2];
    else if (forceEpic) rarity = rates[1];
    else {
      const roll = Math.random();
      let cursor = 0;
      for (const band of rates) {
        cursor += band.p;
        if (roll < cursor) {
          rarity = band;
          break;
        }
      }
    }
    if (rarity.p <= 0.02) since5 = 0;
    if (rarity.p <= 0.001) since6 = 0;
    let who = 'an operator of that rarity. The public list does not assign every name.';
    let portrait = '';
    if (rarity.name.startsWith('5-star') && Math.random() < 0.5) {
      who = 'Judge, the featured 5-star';
      portrait = `${prefix}play/bib/judge_head.png`;
    } else if (rarity.name.startsWith('6-star') && Math.random() < 0.5) {
      who = 'Narrator, the featured 6-star';
      portrait = `${prefix}play/bib/narrator_head.png`;
    }
    return { rarity: rarity.name, who, portrait };
  }
  function show(results) {
    card.replaceChildren();
    for (const result of results) {
      const figure = document.createElement('figure');
      if (result.portrait) {
        const image = document.createElement('img');
        image.src = result.portrait;
        image.alt = result.who;
        figure.appendChild(image);
      }
      const caption = document.createElement('figcaption');
      caption.textContent = `${result.rarity}. ${result.who}`;
      figure.appendChild(caption);
      card.appendChild(figure);
    }
    const last = results[results.length - 1];
    out.textContent = `${results.length === 1 ? 'One pull' : 'Ten pulls'}: ${last.rarity}. ${last.who}. Rolls ${rolls}. Since a 5-star: ${since5}. Since a 6-star: ${since6}.`;
  }
  root.querySelector('[data-demo-act]').addEventListener('click', () => show([one(false)]));
  root.querySelector('[data-pull="10"]').addEventListener('click', () => {
    const results = Array.from({ length: 10 }, () => one(false));
    if (!results.some((result) => result.rarity.startsWith('4-star') || result.rarity.startsWith('5-star') || result.rarity.startsWith('6-star'))) {
      results[9] = one(true);
      rolls -= 1;
      since5 -= 1;
      since6 -= 1;
    }
    show(results);
  });
}

const REAL = {
  gate(root) {
    const items = ['Path heuristics reviewed', 'PR checklist complete', 'Hot-zone extras left for a license'];
    root.innerHTML = `
      <p>Free path on the record: path heuristics and a PR checklist. Hot, Warm, and Cold are the Action’s trust-zone comments. This page does not invent a path rule.</p>
      <button type="button" data-demo-act>Tick the free checklist</button>
      <p data-demo-out>Ready.</p>
      <ul class="play-log"></ul>`;
    let step = 0;
    const list = root.querySelector('.play-log');
    bind(root, (out) => {
      const item = items[Math.min(step, items.length - 1)];
      step += 1;
      out.textContent = item;
      const row = document.createElement('li');
      row.textContent = item;
      list.appendChild(row);
    });
  },
  scopehound(root) {
    root.innerHTML = `
      <p>A live scan on the record requires --i-am-authorised. This browser does not contact the network and does not score a domain.</p>
      <label><input type="checkbox" data-auth /> I am authorised to describe a scan of a domain I administer</label>
      <button type="button" data-demo-act>Describe the checks</button>
      <p data-demo-out>Ready.</p>`;
    bind(root, (out) => {
      const allowed = root.querySelector('[data-auth]').checked;
      out.textContent = allowed
        ? 'Recorded checks, not run: crt.sh, DNS, HTTP/TLS probe, technology fingerprint, security-header checks. No risk score is computed here. 22 tests and CI are the recorded suite size.'
        : 'Refused. The tool will not scan without --i-am-authorised.';
    });
  },
  snitchless(root) {
    root.innerHTML = `
      <p>A score from 0 to 100 belongs to a laptop you administer. This browser cannot see one, so it will not invent a score. Fixes on the record are dry-run first.</p>
      <button type="button" data-demo-act>List the dry-run checks</button>
      <p data-demo-out>Ready.</p>`;
    bind(root, (out) => {
      out.textContent = 'Dry-run only: outbound connections, trackers, open ports, Flatpak permissions, Firefox, SSH, firewall. No score. 9 tests and MIT are the recorded project facts.';
    });
  },
  'greyhat-utilities'(root) {
    root.innerHTML = `
      <p>A small offline lookalike check in the spirit of urlguard. It is not the binary in the GreyHat repository.</p>
      <label>URL <input data-url value="http://paypa1.example/login" /></label>
      <button type="button" data-demo-act>Check this URL</button>
      <p data-demo-out>Ready.</p>`;
    bind(root, (out) => {
      const value = root.querySelector('[data-url]').value.trim();
      const notes = [];
      if (!value) notes.push('Empty.');
      else {
        if (value.startsWith('http://')) notes.push('Not https.');
        if (/@/.test(value)) notes.push('Contains @.');
        if (/\d/.test(value.split('/')[2] || '')) notes.push('A digit in the host, a common lookalike shape.');
        try {
          const host = new URL(value).hostname;
          if (/^(?:\d{1,3}\.){3}\d{1,3}$/.test(host)) notes.push('Host is an IP address.');
        } catch {
          notes.push('Not a URL.');
        }
      }
      out.textContent = notes.length ? notes.join(' ') : 'No heuristic fired on this string.';
    });
  },
  facet(root) {
    const themes = [
      ['Facet-Piastri', '#d6f25c'],
      ['PitWall81', '#e2a35a'],
      ['CasaAzul', '#7eb6d6'],
    ];
    let index = 0;
    root.innerHTML = `
      <p>The three named themes. This is a swatch, not the Electron browser.</p>
      <button type="button" data-demo-act>Next theme</button>
      <p data-demo-out>Ready.</p>
      <div class="play-swatch" data-swatch></div>`;
    const swatch = root.querySelector('[data-swatch]');
    bind(root, (out) => {
      const [name, color] = themes[index % themes.length];
      index += 1;
      swatch.style.background = color;
      swatch.textContent = name;
      out.textContent = name;
    });
  },
  centre(root) {
    root.innerHTML = `
      <p>Six slots, as on the record. None of them opens a VNC session from this page.</p>
      <div class="play-slots">${[1, 2, 3, 4, 5, 6].map((n) => `<button type="button" data-slot="${n}">Slot ${n}</button>`).join('')}</div>
      <button type="button" data-demo-act>Select slot 1</button>
      <p data-demo-out>Ready.</p>`;
    root.querySelectorAll('[data-slot]').forEach((button) => {
      button.addEventListener('click', () => {
        root.querySelector('[data-demo-out]').textContent = `Slot ${button.dataset.slot} selected. No VNC session is connected.`;
      });
    });
    bind(root, (out) => {
      out.textContent = 'Slot 1 selected. No VNC session is connected.';
    });
  },
  fiaos(root) {
    const people = ['Ada', 'Bea', 'Cam'];
    const chores = { Ada: false, Bea: false, Cam: true };
    let person = 'Ada';
    root.innerHTML = `
      <p class="play-flag">Demo data. Profiles Ada, Bea, and Cam. Not a real household.</p>
      <div class="play-row" data-people></div>
      <p data-chore></p>
      <button type="button" data-demo-act>Tick today’s chore</button>
      <p data-demo-out>Ready.</p>`;
    const row = root.querySelector('[data-people]');
    const chore = root.querySelector('[data-chore]');
    function draw() {
      row.replaceChildren();
      for (const name of people) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = name;
        if (name === person) button.setAttribute('aria-pressed', 'true');
        button.addEventListener('click', () => {
          person = name;
          draw();
        });
        row.appendChild(button);
      }
      chore.textContent = `${person}: ${chores[person] ? 'chore ticked' : 'chore open'}. Demo rent is still the placeholder $1,200 split three ways.`;
    }
    draw();
    bind(root, (out) => {
      chores[person] = !chores[person];
      draw();
      out.textContent = `${person} chore is now ${chores[person] ? 'ticked' : 'open'}.`;
    });
  },
  fiahealth(root) {
    const notes = { Ada: [], Bea: [], Cam: [] };
    let person = 'Ada';
    let misses = 0;
    root.innerHTML = `
      <p>Browser demo of the three profiles. Passphrases are not sent anywhere. This is not the scrypt server vault. Five misses, then a lock for this page session.</p>
      <div class="play-row">
        <button type="button" data-who="Ada">Ada</button>
        <button type="button" data-who="Bea">Bea</button>
        <button type="button" data-who="Cam">Cam</button>
      </div>
      <button type="button" data-demo-act>Save a demo check-in</button>
      <p data-demo-out>Ready.</p>`;
    root.querySelectorAll('[data-who]').forEach((button) => {
      button.addEventListener('click', () => {
        person = button.dataset.who;
        root.querySelector('[data-demo-out]').textContent = `${person} has ${notes[person].length} demo check-ins. The others are not shown.`;
      });
    });
    bind(root, (out) => {
      if (misses >= 5) {
        out.textContent = 'Locked for this session after five misses. That matches the recorded throttle shape, without a clock.';
        return;
      }
      notes[person].push('demo');
      out.textContent = `${person}: demo check-in ${notes[person].length}. Ada ${notes.Ada.length}, Bea ${notes.Bea.length}, Cam ${notes.Cam.length}.`;
    });
  },
  'fiaos-studio'(root) {
    root.innerHTML = `
      <p>Eight named apps, reduced to one gesture each. Open formats stay on this device.</p>
      <label>Two numbers <input data-a value="2" /> <input data-b value="2" /></label>
      <button type="button" data-demo-act>Sum them in the sheet</button>
      <p data-demo-out>Ready.</p>
      <canvas width="240" height="80" data-paint></canvas>`;
    bind(root, (out) => {
      const a = Number(root.querySelector('[data-a]').value);
      const b = Number(root.querySelector('[data-b]').value);
      const sum = a + b;
      const canvas = root.querySelector('[data-paint]');
      const context = canvas.getContext('2d');
      context.fillStyle = '#d6f25c';
      context.fillRect(8, 20, Math.min(220, Math.abs(sum) * 8), 24);
      out.textContent = `FiaSheets: ${a} + ${b} = ${sum}. FiaDocs, Slides, Paint, Draw, Clip, Photo, and Layout are the other seven names.`;
    });
  },
  'fia-modules'(root) {
    const events = [];
    root.innerHTML = `
      <p>Mail, calendar, desk, media, local transcription, and chat. Nothing leaves this page.</p>
      <button type="button" data-demo-act>Add a demo calendar block</button>
      <p data-demo-out>Ready.</p>
      <ul class="play-log"></ul>`;
    const list = root.querySelector('.play-log');
    bind(root, (out) => {
      events.push('Demo block');
      const item = document.createElement('li');
      item.textContent = `Calendar: Demo block ${events.length}`;
      list.appendChild(item);
      out.textContent = `Calendar has ${events.length} demo block${events.length === 1 ? '' : 's'}.`;
    });
  },
  medlib(root) {
    root.innerHTML = `
      <p>Planner and one of the ten clinical calculators. The 37,000-card index is not in this browser. No patient record is stored.</p>
      <label>Height cm <input data-cm value="170" /></label>
      <label>Weight kg <input data-kg value="70" /></label>
      <button type="button" data-demo-act>Calculate BMI</button>
      <p data-demo-out>Ready.</p>`;
    bind(root, (out) => {
      const cm = Number(root.querySelector('[data-cm]').value);
      const kg = Number(root.querySelector('[data-kg]').value);
      if (!cm || !kg) {
        out.textContent = 'Enter a height and a weight.';
        return;
      }
      const bmi = kg / (cm / 100) ** 2;
      out.textContent = `BMI ${bmi.toFixed(1)} from the numbers in the form. Study aid only.`;
    });
  },
};

function embedFia(root, slug) {
  const base = document.documentElement.dataset.base || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  const query = slug === 'fiaos-studio' ? '?app=paint' : slug === 'fia-modules' ? '?app=mail' : '';
  root.innerHTML = `
    <p class="play-flag">Public FiaOS client. Demo profiles Ada, Bea, and Cam. Fia Health’s vault is not in this copy.</p>
    <button type="button" data-demo-act>Show the household</button>
    <p data-demo-out>Ready.</p>
    <iframe title="FiaOS demo" src="${prefix}fiaos-demo/${query}"></iframe>`;
  bind(root, (out) => {
    const frame = root.querySelector('iframe');
    try {
      const win = frame.contentWindow;
      if (win && win.view) {
        win.view.person = 'Household';
        if (!query) win.view.tab = 'Stage';
        win.render?.();
      }
    } catch {
      /* the client still paints on its own */
    }
    out.textContent = query ? 'The public FiaOS client is open on that app.' : 'Household stage is open in the public FiaOS client.';
  });
}

export function mount(root) {
  if (!root) return;
  const slug = root.dataset.slug;
  if (slug === 'fiaos' || slug === 'fiaos-studio' || slug === 'fia-modules') {
    embedFia(root, slug);
    return;
  }
  if (REPLAYS[slug]) {
    replay(root, REPLAYS[slug]);
    return;
  }
  if (slug === 'boldinbeauty') {
    gacha(root);
    return;
  }
  const real = REAL[slug];
  if (real) real(root);
}
