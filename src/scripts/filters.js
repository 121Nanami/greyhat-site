export function mountFilters(root = document.querySelector('[data-workbench]')) {
  if (!root || root.dataset.ready === 'true') return;
  root.dataset.ready = 'true';

  const buttons = [...root.querySelectorAll('[data-filter]')];
  const search = root.querySelector('[data-search]');
  const cards = [...root.querySelectorAll('[data-card]')];
  const sections = [...root.querySelectorAll('[data-group-section]')];
  const empty = root.querySelector('[data-empty]');
  const count = root.querySelector('[data-count]');
  const known = new Set(buttons.map((button) => button.dataset.filter));

  const params = new URLSearchParams(window.location.search);
  let group = params.get('group') || 'all';
  if (!known.has(group)) group = 'all';
  let query = params.get('q') || '';
  if (search) search.value = query;

  function apply() {
    const needle = query.trim().toLowerCase();
    let shown = 0;
    for (const card of cards) {
      const groupOk = group === 'all' || card.dataset.group === group;
      const textOk = !needle || (card.dataset.search || '').includes(needle);
      const on = groupOk && textOk;
      card.hidden = !on;
      if (on) shown += 1;
    }
    for (const section of sections) {
      const any = [...section.querySelectorAll('[data-card]')].some((card) => !card.hidden);
      section.hidden = !any;
    }
    if (empty) empty.hidden = shown !== 0;
    if (count) {
      count.textContent = shown === 1 ? '1 project' : `${shown} projects`;
    }
    for (const button of buttons) {
      button.setAttribute('aria-pressed', button.dataset.filter === group ? 'true' : 'false');
    }
  }

  function writeUrl() {
    const url = new URL(window.location.href);
    if (group === 'all') url.searchParams.delete('group');
    else url.searchParams.set('group', group);
    if (!query.trim()) url.searchParams.delete('q');
    else url.searchParams.set('q', query.trim());
    window.history.replaceState(null, '', url);
  }

  for (const button of buttons) {
    button.addEventListener('click', () => {
      group = button.dataset.filter || 'all';
      apply();
      writeUrl();
    });
  }

  search?.addEventListener('input', () => {
    query = search.value;
    apply();
    writeUrl();
  });

  apply();
}
