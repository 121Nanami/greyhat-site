import { defineConfig, devices } from '@playwright/test';

const port = 4491;
const desktop = { width: 1440, height: 900 };

export default defineConfig({
  testDir: 'tests',
  timeout: 45000,
  use: {
    baseURL: `http://127.0.0.1:${port}`,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'], viewport: desktop } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'], viewport: desktop } },
    { name: 'webkit', use: { ...devices['Desktop Safari'], viewport: desktop } },
  ],
  webServer: {
    command: `sh scripts/serve-pages.sh ${port}`,
    url: `http://127.0.0.1:${port}/greyhat-site/`,
    timeout: 300000,
    reuseExistingServer: !process.env.CI,
  },
});
