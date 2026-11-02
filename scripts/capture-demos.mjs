/** Screenshots and short H.264 clips of the standalone demos. */
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { chromium } from '@playwright/test';

const root = new URL('..', import.meta.url).pathname;
const stand = join(root, 'public/standalone');
const captures = join(root, 'public/captures');
const reel = join(root, 'public/reel');
mkdirSync(captures, { recursive: true });
mkdirSync(reel, { recursive: true });

const grey = [
  'gate',
  'greyhat-utilities',
  'fiahealth',
  'fiaos-studio',
  'fia-modules',
  'ellenos',
  'blackarch',
  'facet',
  'centre',
  'ellentalk',
  'aicentre',
];

async function settle(page, slug) {
  if (slug === 'gate') {
    await page.getByRole('link', { name: 'GATE', exact: true }).click();
    await page.locator('#intent').fill('A visitor can export the checklist');
    return;
  }
  if (slug === 'fiaos-studio') {
    await page.getByRole('heading', { name: 'FiaPaint' }).waitFor({ timeout: 20000 });
    await page.waitForTimeout(600);
    const canvas = page.locator('#st-paint');
    const box = await canvas.boundingBox().catch(() => null);
    if (box) {
      await page.mouse.move(box.x + 30, box.y + 40);
      await page.mouse.down();
      await page.mouse.move(box.x + Math.min(box.width - 10, 280), box.y + 90, { steps: 8 });
      await page.mouse.up();
    }
    return;
  }
  if (slug === 'fia-modules') {
    await page.getByText('New message').waitFor({ timeout: 20000 });
    return;
  }
  if (slug === 'facet') {
    await page.locator('#title').fill('Demo page');
    await page.locator('#url').fill('https://example.com/page');
    await page.getByRole('button', { name: 'Bookmark' }).click();
    return;
  }
  if (slug === 'centre') {
    await page.getByRole('button', { name: 'Left' }).click();
    return;
  }
  if (slug === 'greyhat-utilities' || slug === 'fiahealth' || slug === 'scopehound') {
    await page.locator('[data-demo-act]').click();
    return;
  }
  const next = page.locator('[data-demo-act]');
  if (await next.count()) {
    await next.click();
    await next.click();
  }
}

function toMp4(src, destMp4) {
  const mp4 = spawnSync('ffmpeg', [
    '-y', '-i', src, '-an', '-t', '4',
    '-vf', 'scale=960:-2',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-crf', '30',
    destMp4,
  ], { stdio: 'inherit' });
  if (mp4.status !== 0) throw new Error(`mp4 ${destMp4}`);
}

async function still(page, destWebp) {
  const png = '/tmp/cap-still.png';
  await page.screenshot({ path: png });
  const webp = spawnSync('ffmpeg', ['-y', '-i', png, '-c:v', 'libwebp', '-q:v', '72', destWebp], { stdio: 'inherit' });
  if (webp.status !== 0) throw new Error(`webp ${destWebp}`);
}

const browser = await chromium.launch();

for (const slug of grey) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: '/tmp/cap', size: { width: 1280, height: 720 } },
  });
  mkdirSync('/tmp/cap', { recursive: true });
  const page = await context.newPage();
  await page.goto(pathToFileURL(join(stand, slug, 'index.html')).href);
  await page.locator('h1, h2, h3, #app').first().waitFor({ timeout: 20000 });
  await settle(page, slug);
  await page.waitForTimeout(500);
  await still(page, join(captures, `${slug}.webp`));
  const video = page.video();
  await context.close();
  toMp4(await video.path(), join(captures, `${slug}.mp4`));
  console.log('card', slug);
}

for (const [slug, file] of [['agent-arena', 'arena'], ['fiaos', 'fiaos']]) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: '/tmp/cap', size: { width: 1280, height: 720 } },
  });
  const page = await context.newPage();
  await page.goto(pathToFileURL(join(stand, slug, 'index.html')).href);
  if (slug === 'agent-arena') {
    await page.getByRole('tab', { name: 'Overview' }).waitFor({ timeout: 20000 });
    await page.waitForTimeout(600);
    await page.getByRole('tab', { name: 'Leaderboard' }).click();
    await page.waitForTimeout(700);
  } else {
    await page.getByRole('button', { name: 'Meals & Diet' }).waitFor({ timeout: 20000 });
    await page.getByRole('button', { name: 'Meals & Diet' }).click();
    await page.waitForTimeout(800);
  }
  await still(page, join(reel, `${file}.webp`));
  const video = page.video();
  await context.close();
  toMp4(await video.path(), join(reel, `${file}.mp4`));
  console.log('reel', file);
}

await browser.close();
