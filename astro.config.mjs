// @ts-check
import { defineConfig } from 'astro/config';

const raw = process.env.BASE_PATH || '/';
const base = raw === '/' ? '/' : `/${raw.replace(/^\/+|\/+$/g, '')}`;

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  base,
  server: {
    host: true,
    port: 4471,
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
