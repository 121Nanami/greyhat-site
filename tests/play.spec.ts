import { readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';

const projects = JSON.parse(readFileSync(new URL('../src/data/projects.json', import.meta.url), 'utf8')) as {
  slug: string;
  title: string;
}[];

for (const project of projects) {
  test(`${project.slug} play page responds`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    await page.goto(`/greyhat-site/play/${project.slug}/`);
    await expect(page.getByRole('heading', { level: 1, name: project.title })).toBeVisible();
    const out = page.locator('[data-demo-out]');
    const before = await out.innerText();
    await page.locator('[data-demo-act]').click();
    await expect(out).not.toHaveText(before);
    expect(errors, errors.join('\n')).toEqual([]);
  });
}
