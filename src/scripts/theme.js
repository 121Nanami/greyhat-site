function apply(theme) {
  const next = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem('gh-theme', next);
  } catch {
    /* private mode */
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', next === 'light' ? '#e7e1d4' : '#10120e');
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (!target.closest('[data-theme-toggle]')) return;
  apply(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
});

window.addEventListener('greyhat-theme', (event) => {
  const mode = event.detail;
  if (mode === 'toggle') {
    apply(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
    return;
  }
  apply(mode);
});
