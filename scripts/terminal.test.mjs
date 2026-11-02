import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';
import { complete, runCommand } from '../src/lib/terminal.mjs';

const load = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8'));
const ctx = {
  profile: load('../src/data/site.json'),
  groups: load('../src/data/groups.json'),
  projects: load('../src/data/projects.json').map((project) => ({
    ...project,
    repoNote: project.repo.note,
  })),
};

function text(result) {
  return (result.blocks ?? [])
    .map((block) => [block.text, block.label, block.value, block.href, block.aside].filter(Boolean).join(' '))
    .join('\n');
}

test('whoami names the operator and the city', () => {
  const body = text(runCommand('whoami', ctx));
  assert.match(body, /Myla/);
  assert.match(body, /Brisbane, Australia/);
  assert.match(body, /local-first/);
});

test('ls projects lists both flagships', () => {
  const body = text(runCommand('ls projects', ctx));
  assert.match(body, /ai-colosseum/);
  assert.match(body, /agent-arena/);
  assert.match(body, /agent-fitness/);
  assert.match(body, /scopehound/);
  assert.match(body, /boldinbeauty/);
});

test('cat arena quotes the brief result and does not invent a repo url', () => {
  const result = runCommand('cat arena', ctx);
  const body = text(result);
  assert.match(body, /0% to 100%/);
  assert.match(body, /Qwen2\.5-Coder 1\.5B/);
  assert.equal(result.blocks.some((block) => String(block.href || '').startsWith('http')), false);
  assert.doesNotMatch(body, /https?:\/\//);
});

test('cat fitness stays private', () => {
  const result = runCommand('cat fitness', ctx);
  const body = text(result);
  assert.match(body, /Private repository\. Not linked\./);
  assert.match(body, /22,000/);
  assert.match(body, /32 passing/);
  assert.match(body, /FOR UPDATE SKIP LOCKED/);
  assert.equal(result.navigateSlug, undefined);
  const hrefs = result.blocks.map((block) => block.href).filter(Boolean);
  assert.deepEqual(hrefs, ['projects/agent-fitness/']);
});

test('cat colosseum is a plan, not a shipped result', () => {
  const result = runCommand('cat colosseum', ctx);
  const body = text(result);
  assert.match(body, /Coming soon/);
  assert.match(body, /shark-species gallery site/);
  assert.match(body, /3D renderer with lighting and shadows/);
  assert.match(body, /No copyrighted characters/);
  assert.match(body, /Repository coming soon/);
  assert.equal(
    result.blocks.find((block) => block.type === 'link' && block.href?.startsWith('http'))?.href,
    'https://www.youtube.com/@AIColosseumGreyHat',
  );
  assert.equal(result.navigateSlug, undefined);
  assert.doesNotMatch(body, /github\.com/);
});

test('open navigates to the local report only', () => {
  const result = runCommand('open agent-fitness', ctx);
  assert.equal(result.navigateSlug, 'agent-fitness');
});

test('easter eggs stay on the page and name Myla', () => {
  for (const command of ['sudo', 'hack', 'rm -rf /', 'coffee', 'matrix', 'hat', 'hello']) {
    const body = text(runCommand(command, ctx));
    assert.doesNotMatch(body, /https?:\/\/|github\.com/);
    assert.doesNotMatch(body, /command not found/);
  }
  assert.match(text(runCommand('hello', ctx)), /Myla/);
  assert.match(text(runCommand('id', ctx)), /uid=myla/);
});

test('unknown command does not invent a suggestion url', () => {
  const body = text(runCommand('foobar', ctx));
  assert.match(body, /command not found/);
  assert.doesNotMatch(body, /https?:\/\//);
});

test('tab completes cat arena', () => {
  const next = complete('cat aren', ctx);
  assert.equal(next.text, 'cat arena ');
});

test('every cat stays on-site', () => {
  for (const project of ctx.projects) {
    const result = runCommand(`cat ${project.slug}`, ctx);
    const body = text(result);
    assert.match(body, new RegExp(project.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    for (const block of result.blocks) {
      if (!block.href) continue;
      if (block.href.startsWith('http')) {
        assert.match(block.href, /^https:\/\/(www\.youtube\.com\/@AIColosseumGreyHat|github\.com\/121Nanami(\/(gate|gate-action|GreyHat))?|121nanami\.github\.io\/gate\/)$/);
        assert.ok(['ai-colosseum', 'gate', 'greyhat-utilities'].includes(project.slug));
      } else {
        assert.match(block.href, /^projects\/[a-z0-9-]+\/$/);
      }
    }
  }
});
