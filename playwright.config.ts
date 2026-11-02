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
    command: `sh scripts/serve-pages.sh ${port}`,
    url: `http://127.0.0.1:${port}/greyhat-site/`,
    timeout: 300000,
    reuseExistingServer: !process.env.CI,
  },
});
