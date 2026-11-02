import { defineConfig } from '@playwright/test';

const port = 4491;

export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    ...(process.env.CI ? {} : { channel: 'chrome' as const }),
  },
  webServer: {
    command: `BASE_PATH=/greyhat-site/ npm run build && rm -rf /tmp/greyhat-pages && mkdir -p /tmp/greyhat-pages && ln -s /workspace/dist /tmp/greyhat-pages/greyhat-site && python3 -m http.server ${port} --directory /tmp/greyhat-pages --bind 127.0.0.1`,
    url: `http://127.0.0.1:${port}/greyhat-site/`,
    timeout: 180000,
    reuseExistingServer: false,
  },
});
