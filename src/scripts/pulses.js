export function mountPulses(root = document) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  const nodes = [...root.querySelectorAll('[data-pulse]')];
  for (const node of nodes) {
    const target = Number(node.dataset.count);
    if (!Number.isFinite(target) || target <= 0) continue;
    const prefix = node.dataset.prefix || '';
    const suffix = node.dataset.suffix || '';
    const finalText = node.dataset.text || node.textContent || '';
    const start = performance.now();
    const duration = 720;
    const frame = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      node.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (t < 1) requestAnimationFrame(frame);
      else node.textContent = finalText;
    };
    requestAnimationFrame(frame);
  }
}
