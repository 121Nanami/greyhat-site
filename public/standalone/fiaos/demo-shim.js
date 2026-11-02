/* Browser stand-in for the FiaOS server. State stays in localStorage. */
(() => {
  const root = location.pathname.replace(/[^/]*$/, '');
  const KEY = 'fiaos.api.demo.v1';
  const read = () => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '{}');
    } catch {
      return {};
    }
  };
  const write = (data) => localStorage.setItem(KEY, JSON.stringify(data));
  const store = () => {
    const data = read();
    data.bookmarks ||= [{ title: 'Demo Harbour', url: 'https://example.com/demo', group: 'house' }];
    data.history ||= [];
    data.clips ||= [];
    return data;
  };
  const answer = (url, init) => {
    const parsed = new URL(url, location.origin);
    const path = parsed.pathname;
    const method = (init && init.method) || 'GET';
    let body = {};
    if (init && init.body) {
      try {
        body = JSON.parse(init.body);
      } catch {
        body = {};
      }
    }
    const data = store();
    if (path.startsWith('/api/facet/bookmark') && method === 'POST') {
      data.bookmarks.unshift({ title: body.title || 'Untitled', url: body.url || 'https://example.com', group: 'demo' });
      write(data);
      return { ok: true };
    }
    if (path.startsWith('/api/facet/history') && method === 'POST') {
      data.history.unshift({ title: body.title || 'Page', url: body.url || 'https://example.com' });
      write(data);
      return { ok: true };
    }
    if (path.startsWith('/api/facet')) {
      return { bookmarks: data.bookmarks, history: data.history, tor: '127.0.0.1:9050 (not running in this browser)' };
    }
    if (path.startsWith('/api/hub/search')) {
      const q = (parsed.searchParams.get('q') || '').toLowerCase();
      const hits = data.bookmarks
        .filter((item) => `${item.title} ${item.url}`.toLowerCase().includes(q))
        .map((item) => ({ title: item.title, kind: 'bookmark', snippet: item.url }));
      return { hits };
    }
    if (path.startsWith('/api/launcher/clipboard') && method === 'POST') {
      data.clips.unshift({ text: body.text || '' });
      write(data);
      return { ok: true };
    }
    if (path.startsWith('/api/launcher/tile')) {
      return { note: 'No window manager in this browser.', ran: '' };
    }
    if (path.startsWith('/api/launcher')) {
      return {
        stats: { hostname: 'demo-browser', load: [], cpus: 0, mem: {} },
        apps: [
          { name: 'FiaNotes', exec: 'notes' },
          { name: 'Facet', exec: 'facet' },
        ],
        clipboard: data.clips,
      };
    }
    if (path.startsWith('/api/health')) return { ok: false, xai: false, checked: true };
    return { ok: false, items: [], notes: [], products: [], episodes: [], hits: [], bookmarks: [], history: [] };
  };
  const mapUrl = (url) => {
    if (typeof url !== 'string') return url;
    if (url.startsWith('/api/') || url.startsWith('/oauth/')) return null;
    if (url.startsWith('/') && !url.startsWith(root)) return root.replace(/\/$/, '') + url;
    return url;
  };
  const orig = window.fetch;
  window.fetch = (input, init) => {
    const url = typeof input === 'string' ? input : input && input.url;
    const mapped = mapUrl(url);
    if (mapped == null) {
      return Promise.resolve(new Response(JSON.stringify(answer(url, init)), { status: 200, headers: { 'Content-Type': 'application/json' } }));
    }
    if (typeof input === 'string') return orig(mapped, init);
    return orig(input, init);
  };
  document.addEventListener(
    'click',
    (event) => {
      const link = event.target.closest && event.target.closest('a[href^="/"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href.startsWith('/api/') || href.startsWith('/oauth/')) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      location.href = root.replace(/\/$/, '') + href;
    },
    true,
  );
})();
