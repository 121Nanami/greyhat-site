import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{png,webp,jpg,jpeg}',
  { eager: true },
);

const byFile = new Map<string, ImageMetadata>();

for (const [key, mod] of Object.entries(modules)) {
  const marker = '/assets/';
  const at = key.lastIndexOf(marker);
  if (at === -1) continue;
  byFile.set(key.slice(at + marker.length), mod.default);
}

export function imageFor(file: string): ImageMetadata {
  const image = byFile.get(file);
  if (!image) {
    throw new Error(`Missing image ${file}. Known: ${[...byFile.keys()].sort().join(', ')}`);
  }
  return image;
}
