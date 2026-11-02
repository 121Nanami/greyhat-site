import { complete, runCommand } from '../lib/terminal.mjs';

function basePath() {
  const base = document.documentElement.dataset.base || '/';
  return base.endsWith('/') ? base : `${base}/`;
}

function href(path) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${basePath()}${String(path).replace(/^\//, '')}`;
}

function renderBlock(block) {
  if (block.type === 'entry' || block.type === 'link') {
    const p = document.createElement('p');
    p.className = 'term-line';
    const a = document.createElement('a');
    a.href = href(block.href);
    a.textContent = block.text;
    p.append(a);
    if (block.aside) {
      const aside = document.createElement('span');
      aside.className = 'term-aside';
      aside.textContent = `  ${block.aside}`;
      p.append(aside);
    }
    return p;
  }
  if (block.type === 'kv') {
    const p = document.createElement('p');
    p.className = 'term-line term-kv';
    const dt = document.createElement('span');
    dt.textContent = block.label;
    const dd = document.createElement('span');
    dd.textContent = block.value;
    p.append(dt, dd);
    return p;
  }
  const p = document.createElement('p');
  p.className = block.type === 'cmd' ? 'term-line term-cmd' : 'term-line';
  if (block.type === 'title') p.classList.add('term-title');
  p.textContent = block.text;
  return p;
}

export function mountTerminal(root = document.querySelector('[data-terminal]')) {
  if (!root || root.dataset.ready === 'true') return;
  root.dataset.ready = 'true';

  const catalog = JSON.parse(root.querySelector('[data-catalog]').textContent);
  const log = root.querySelector('[data-log]');
  const form = root.querySelector('[data-form]');
  const input = root.querySelector('[data-input]');
  const history = [];
  let cursor = 0;

  function append(blocks) {
    const fragment = document.createDocumentFragment();
    for (const block of blocks) fragment.append(renderBlock(block));
    log.append(fragment);
    log.scrollTop = log.scrollHeight;
  }

  function run(raw) {
    const line = String(raw ?? '');
    const trimmed = line.trim();
    if (!trimmed) return;
    history.push(trimmed);
    cursor = history.length;
    const result = runCommand(trimmed, catalog);
    if (result.clear) {
      log.replaceChildren();
      return;
    }
    const blocks = [{ type: 'cmd', text: trimmed }, ...(result.blocks ?? [])];
    if (result.theme) {
      window.dispatchEvent(new CustomEvent('greyhat-theme', { detail: result.theme }));
      const theme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
      blocks.push({ type: 'text', text: `theme set to ${theme}` });
    }
    append(blocks);
    if (result.navigateSlug) {
      window.location.assign(href(`projects/${result.navigateSlug}/`));
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    run(input.value);
    input.value = '';
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (cursor > 0) {
        cursor -= 1;
        input.value = history[cursor] ?? '';
      }
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (cursor < history.length) {
        cursor += 1;
        input.value = history[cursor] ?? '';
      }
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'l') {
      event.preventDefault();
      log.replaceChildren();
      return;
    }
    if (event.key === 'Tab') {
      event.preventDefault();
      const next = complete(input.value, catalog);
      input.value = next.text;
      if (next.options?.length) {
        append([{ type: 'text', text: next.options.join('  ') }]);
      }
    }
  });

  root.addEventListener('click', (event) => {
    const runButton = event.target.closest('[data-run]');
    if (runButton) {
      run(runButton.dataset.run);
      input.focus();
      return;
    }
    if (event.target.closest('a, button, input, label')) return;
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) return;
    input.focus();
  });

  const clock = root.querySelector('[data-clock]');
  const paintClock = () => {
    if (!clock) return;
    const now = new Date();
    clock.dateTime = now.toISOString();
    clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  paintClock();
  window.setInterval(paintClock, 30000);
}
