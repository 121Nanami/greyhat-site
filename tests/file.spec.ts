import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { expect, test } from '@playwright/test';

const downloads = new URL('../public/downloads/', import.meta.url);

test.describe('offline zip', () => {
  test('every zip opens index.html from disk', async ({ browser, browserName }) => {
    test.skip(browserName !== 'chromium', 'file:// is checked in Chromium, which matches Chrome and Edge');
    test.setTimeout(180000);
    const names = readdirSync(downloads).filter((name) => name.endsWith('.zip'));
    expect(names.length).toBeGreaterThan(20);
    const page = await browser.newPage();
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    for (const name of names) {
      errors.length = 0;
      const dir = mkdtempSync(join(tmpdir(), 'gh-zip-'));
      execFileSync('python3', [
        '-c',
        'import zipfile,sys; zipfile.ZipFile(sys.argv[1]).extractall(sys.argv[2])',
        join(downloads.pathname, name),
        dir,
      ]);
      await page.goto(pathToFileURL(join(dir, 'index.html')).href);
      await expect(page.locator('h1, h2, h3, #app, #root').first()).toBeVisible({ timeout: 20000 });
      expect(errors, `${name}\n${errors.join('\n')}`).toEqual([]);
    }
    await page.close();
  });
});
