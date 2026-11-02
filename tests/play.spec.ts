import { readFileSync } from 'node:fs';
import { expect, test, type Page } from '@playwright/test';

const projects = JSON.parse(readFileSync(new URL('../src/data/projects.json', import.meta.url), 'utf8')) as {
  slug: string;
}[];

const replaySteps: Record<string, string[]> = {
  'ai-colosseum': ['Agent Fitness trains', '15-shark-species', '3D renderer'],
  'agent-fitness': ['22,000 lines', '32 passing tests', '50% of the weight'],
  triagebot: ['6 of 6', '0 of 6', '1 of 4'],
  paper2repo: ['1.39%', '27.17%', '9.08%'],
  foundry: ['Team on the record', 'rejected at QA', 'earlier shown run'],
  ellenos: ['QEMU', 'snapshot and restore', 'Tor-routed'],
  blackarch: ['BlackArch', 'ethical-hacking study', 'rollback'],
  ellentalk: ['local voice chatbot', 'three.js and MMD', 'No transcript'],
  aicentre: ['CLI AI agents in bulk', 'No dispatch log'],
  reporeel: ['Click, chi, and zustand', 'Click reel', 'not in those stills'],
};

function watch(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  return errors;
}

async function open(page: Page, slug: string) {
  const errors = watch(page);
  await page.goto(`/greyhat-site/play/${slug}/`);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  return errors;
}

for (const [slug, steps] of Object.entries(replaySteps)) {
  test.describe(slug, () => {
    test('steps through three recorded facts', async ({ page }) => {
      const errors = await open(page, slug);
      await expect(page.locator('.play-flag')).toContainText('Replay of recorded run.');
      const out = page.locator('[data-demo-out]');
      for (const step of steps) {
        await page.locator('[data-demo-act]').click();
        await expect(out).toContainText(step);
      }
      expect(errors, errors.join('\n')).toEqual([]);
    });
  });
}

test.describe('gate', () => {
  test('workspace, intent, and a hot file', async ({ page }) => {
    const errors = await open(page, 'gate');
    const frame = page.frameLocator('iframe');
    await expect(frame.locator('#intent')).toBeVisible();
    await frame.locator('#intent').fill('A visitor can export the checklist');
    await frame.locator('#failure').fill('The export is empty');
    await expect(frame.locator('#export')).toContainText('A visitor can export the checklist');
    await frame.locator('#add-file').click();
    await expect(frame.locator('.file-row')).toHaveCount(3);
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('agent-arena', () => {
  test('overview, leaderboard, and findings', async ({ page }) => {
    const errors = await open(page, 'agent-arena');
    const frame = page.frameLocator('iframe');
    await expect(frame.getByRole('tab', { name: 'Overview' })).toBeVisible({ timeout: 20000 });
    await frame.getByRole('tab', { name: 'Leaderboard' }).click();
    await expect(frame.getByRole('tab', { name: 'Leaderboard' })).toHaveAttribute('data-state', 'active');
    await frame.getByRole('tab', { name: 'Findings' }).click();
    await expect(frame.getByRole('tab', { name: 'Findings' })).toHaveAttribute('data-state', 'active');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('boldinbeauty', () => {
  test('roster site, a pull, and a ten-pull', async ({ page }) => {
    const errors = await open(page, 'boldinbeauty');
    const frame = page.frameLocator('iframe');
    await expect(frame.getByRole('link', { name: 'Meet the operators' })).toBeVisible();
    await frame.locator('#operators').scrollIntoViewIfNeeded();
    await expect(frame.locator('#operators')).toContainText('Luna');
    await page.setViewportSize({ width: 390, height: 844 });
    const menu = frame.getByRole('button', { name: 'Menu' });
    await expect(menu).toBeVisible();
    await menu.click();
    await expect(frame.locator('.nav')).toHaveClass(/open/);
    await expect(frame.locator('.nav-links').getByRole('link', { name: 'Operators' })).toBeVisible();
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.locator('[data-demo-act]').click();
    await expect(page.locator('[data-demo-out]')).toContainText('One pull');
    await page.locator('[data-pull="10"]').click();
    await expect(page.locator('[data-demo-out]')).toContainText('Ten pulls');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('fiaos', () => {
  test('stage, meals, and another profile', async ({ page }) => {
    const errors = await open(page, 'fiaos');
    const frame = page.frameLocator('iframe');
    await expect(frame.getByRole('button', { name: 'Meals & Diet' })).toBeVisible({ timeout: 20000 });
    await expect(frame.getByText('EXAMPLE DATA')).toBeVisible();
    await frame.getByRole('button', { name: 'Meals & Diet' }).click();
    await expect(frame.getByText(/meal plan/i).first()).toBeVisible();
    await frame.locator('#people button', { hasText: 'Bea' }).click();
    await expect(frame.locator('#people button[aria-pressed="true"], #people button.on')).toContainText('Bea');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('fiaos-studio', () => {
  test('a pointer drag leaves paint on the canvas', async ({ page }) => {
    const errors = await open(page, 'fiaos-studio');
    const frame = page.frameLocator('iframe');
    const canvas = frame.locator('#st-paint');
    await expect(canvas).toBeVisible({ timeout: 20000 });
    await expect.poll(async () => canvas.evaluate((node) => (node as HTMLCanvasElement).dataset.on || '').catch(() => '')).toBe('1');
    await canvas.scrollIntoViewIfNeeded();
    const light = () =>
      canvas.evaluate((node) => {
        const view = node as HTMLCanvasElement;
        const data = view.getContext('2d')?.getImageData(0, 0, view.width, view.height).data;
        if (!data) return 0;
        let count = 0;
        for (let i = 0; i < data.length; i += 16) {
          if (data[i] > 180 && data[i + 1] > 180 && data[i + 2] > 180) count += 1;
        }
        return count;
      });
    const before = await light();
    const box = await canvas.boundingBox();
    if (!box) throw new Error('paint canvas has no box');
    await page.mouse.move(box.x + box.width * 0.2, box.y + box.height * 0.45);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.78, box.y + box.height * 0.62, { steps: 14 });
    await page.mouse.up();
    await expect.poll(light).toBeGreaterThan(before);
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('fia-modules', () => {
  test('opens mail from the public client', async ({ page }) => {
    const errors = await open(page, 'fia-modules');
    const frame = page.frameLocator('iframe');
    await expect(frame.getByRole('button', { name: 'Mail' })).toBeVisible({ timeout: 20000 });
    await expect(frame.getByText('New message')).toBeVisible();
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('facet', () => {
  test('search, bookmark, and history', async ({ page }) => {
    const errors = await open(page, 'facet');
    const frame = page.frameLocator('iframe');
    await expect(frame.getByRole('heading', { name: 'Facet' })).toBeVisible();
    await expect(frame.getByText('Demo Harbour')).toBeVisible();
    await frame.locator('#q').fill('harbour');
    await frame.getByRole('button', { name: 'Search' }).click();
    await expect(frame.locator('#hits')).toContainText('Demo Harbour');
    await frame.locator('#title').fill('Demo page');
    await frame.locator('#url').fill('https://example.com/page');
    await frame.getByRole('button', { name: 'Bookmark' }).click();
    await expect(frame.locator('#marks')).toContainText('Demo page');
    await frame.getByRole('button', { name: 'Add to history' }).click();
    await expect(frame.locator('#hist')).toContainText('Demo page');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('centre', () => {
  test('launcher, clipboard, and a tile note', async ({ page }) => {
    const errors = await open(page, 'centre');
    const frame = page.frameLocator('iframe');
    await expect(frame.getByRole('heading', { name: 'Fia Desk' })).toBeVisible();
    await expect(frame.locator('#apps')).toContainText('FiaNotes');
    await frame.locator('#t').fill('demo clip');
    await frame.getByRole('button', { name: 'Keep' }).click();
    await expect(frame.locator('#clips')).toContainText('demo clip');
    await frame.getByRole('button', { name: 'Left' }).click();
    await expect(frame.locator('#tile')).toContainText('Left tile');
    await expect(frame.locator('#stage')).toHaveAttribute('data-layout', 'left');
    await frame.getByRole('button', { name: 'Fullscreen' }).click();
    await expect(frame.locator('#stage')).toHaveAttribute('data-layout', 'focus');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('scopehound', () => {
  test('refuses, then lists checks, then the suite', async ({ page }) => {
    const errors = await open(page, 'scopehound');
    await page.locator('[data-demo-act]').click();
    await expect(page.locator('[data-demo-out]')).toContainText('Refused');
    await page.locator('[data-auth]').check();
    await page.locator('[data-demo-act]').click();
    await expect(page.locator('[data-demo-out]')).toContainText('crt.sh');
    await page.locator('[data-suite]').click();
    await expect(page.locator('[data-demo-out]')).toContainText('22 tests');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('snitchless', () => {
  test('dry-run list and the recorded suite', async ({ page }) => {
    const errors = await open(page, 'snitchless');
    await page.locator('[data-demo-act]').click();
    await expect(page.locator('[data-demo-out]')).toContainText('Dry-run only');
    await page.locator('[data-suite]').click();
    await expect(page.locator('[data-demo-out]')).toContainText('9 tests');
    await page.locator('[data-demo-act]').click();
    await expect(page.locator('[data-demo-out]')).toContainText('No score');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('greyhat-utilities', () => {
  test('three different URL shapes', async ({ page }) => {
    const errors = await open(page, 'greyhat-utilities');
    const out = page.locator('[data-demo-out]');
    await page.locator('[data-demo-act]').click();
    await expect(out).toContainText('digit');
    await page.locator('[data-url]').fill('https://example.com/ok');
    await page.locator('[data-demo-act]').click();
    await expect(out).toContainText('No heuristic fired');
    await page.locator('[data-url]').fill('http://user@203.0.113.5/login');
    await page.locator('[data-demo-act]').click();
    await expect(out).toContainText('IP address');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('fiahealth', () => {
  test('isolated check-ins for three profiles', async ({ page }) => {
    const errors = await open(page, 'fiahealth');
    const out = page.locator('[data-demo-out]');
    await page.locator('[data-demo-act]').click();
    await expect(out).toContainText('Ada: demo check-in 1');
    await page.locator('[data-who="Bea"]').click();
    await page.locator('[data-demo-act]').click();
    await expect(out).toContainText('Bea: demo check-in 1');
    await expect(out).toContainText('Ada 1');
    await page.locator('[data-who="Cam"]').click();
    await expect(out).toContainText('Cam has 0');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test.describe('medlib', () => {
  test('bmi responds to both inputs and to an empty form', async ({ page }) => {
    const errors = await open(page, 'medlib');
    const out = page.locator('[data-demo-out]');
    await page.locator('[data-demo-act]').click();
    await expect(out).toContainText('BMI 24.2');
    await page.locator('[data-kg]').fill('80');
    await page.locator('[data-demo-act]').click();
    await expect(out).toContainText('BMI 27.7');
    await page.locator('[data-cm]').fill('');
    await page.locator('[data-demo-act]').click();
    await expect(out).toContainText('Enter a height');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});

test('home sells the three flagships and a play control on every card', async ({ page }, testInfo) => {
  const errors = watch(page);
  await page.goto('/greyhat-site/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Myla — AI Engineer, GreyHat Inc');
  await expect(page.getByRole('link', { name: 'See flagship work' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Open live demo' })).toHaveCount(3);
  await expect(page.getByRole('button', { name: 'Windows build coming soon' })).toBeDisabled();
  await expect(page.locator('a.play-btn', { hasText: /^Play$/ })).toHaveCount(projects.length);
  for (const slug of ['fiaos-studio', 'facet', 'centre']) {
    await expect(page.locator(`a.play-btn[href$="/play/${slug}/"]`)).toBeVisible();
  }
  if (testInfo.project.name === 'chromium') {
    await page.screenshot({ path: '/cursor/stores/self/home-desktop.png', fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: '/cursor/stores/self/home-mobile.png', fullPage: true });
  }
  expect(errors, errors.join('\n')).toEqual([]);
});

test('every project slug has a play test group', () => {
  const covered = new Set([
    ...Object.keys(replaySteps),
    'gate',
    'agent-arena',
    'boldinbeauty',
    'fiaos',
    'fiaos-studio',
    'fia-modules',
    'facet',
    'centre',
    'scopehound',
    'snitchless',
    'greyhat-utilities',
    'fiahealth',
    'medlib',
  ]);
  for (const project of projects) expect(covered.has(project.slug), project.slug).toBe(true);
});
