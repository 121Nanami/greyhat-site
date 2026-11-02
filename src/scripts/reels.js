const videos = document.querySelectorAll('video[data-reel]');
if (videos.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const video = entry.target;
        if (!video.getAttribute('src')) {
          video.src = video.dataset.reel;
          video.play().catch(() => {});
        }
        io.unobserve(video);
      }
    },
    { rootMargin: '240px' },
  );
  videos.forEach((video) => io.observe(video));
}
