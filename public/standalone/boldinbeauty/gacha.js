(() => {
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
})();