# GreyHat Inc

Portfolio of Myla, ethical hacker and AI engineer, Brisbane. Studio: GreyHat Inc.

The site is a static Astro build. Copy lives in data files. Screenshots are the approved set shipped in `src/assets`. There is no analytics and no third-party runtime request: fonts are vendored, images are optimized at build time.

## Run

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:4471](http://127.0.0.1:4471)

```bash
npm test          # terminal command tests
npm run check     # content rules (no invented links, images exist)
npm run build     # static site in dist/ plus a dist check
npm run preview   # serve dist/ on port 4471
```

Needs Node 22.

## Add a project

1. Put approved screenshots in `src/assets/<group>/`. Do not hotlink them.
2. Add an object to `src/data/projects.json`. Required fields:

| Field | What to put |
| --- | --- |
| `slug` | lowercase, hyphenated. Becomes `/projects/<slug>/` |
| `title`, `summary`, `highlight` | One honest line each. `highlight` is the metric or status a reader should see on the card. |
| `group` | `flagship`, `security`, `fiaos`, `os`, or `health`. BoldInBeauty lives in `flagship`. |
| `aliases` | Short names for the terminal (`cat arena`). Must not collide with another project or with `help`, `whoami`, `ls`, `cat`, `open`, `ethos`, `theme`, `clear`. |
| `repo.state` | `coming-soon` or `private` |
| `repo.note` | The sentence shown on the card. Private work, including Agent Arena and Agent Fitness, is `Private repository. Not linked.` |
| `facts` | Label/value pairs you can defend from the source notes. |
| `paragraphs` | Prose. Same rule. |
| `shots` | `{ "file", "alt", "caption" }`. `file` is relative to `src/assets`. Alt text describes the image. Caption says what the reader is allowed to conclude. |
| `stack`, `stage`, `callout` | Optional. |
| `placeholder` | `true` when there are no assets yet. Leave `shots` empty. |
| `schematic` | `true` only for a named diagram that is explicitly not a screenshot. |
| `featured` | BoldInBeauty first, then AI Colosseum, Agent Arena, and Agent Fitness. |
| `links` | Optional outbound links. Approved: the GitHub profile, GATE, Shipgate, the GreyHat utilities repo, its Pages site, and the AI Colosseum YouTube channel. |
| `pulse` | Optional recorded figure for the home rail. Use a number you can defend. |

3. Do not add a testimonial or a number that is not in the source notes. `npm run check` allows only the public 121Nanami links listed above, plus the AI Colosseum YouTube channel. Private repos stay unlinked.
4. Run `npm test && npm run check && npm run build`.

New groups need an entry in `src/data/groups.json` and in the allow-list inside `scripts/check-content.mjs`.

## Terminal

On the session page, visitors can type:

- `whoami`, `ethos`
- `ls projects`, `ls flagship` (also `security`, `fiaos`, `os`, `health`). `ls game` opens BoldInBeauty, which is filed under flagship.
- `cat arena`, `cat fitness`, or any slug or alias
- `open <project>`
- `theme light`, `theme dark`
- `clear`

Tab completes. Up and down walk the history. The same facts are in the HTML, so the page still reads with JavaScript off. The prompt itself needs JavaScript.

## Go live on GitHub Pages

The public site is a project site at `https://121nanami.github.io/greyhat-site/`.

1. Push `main` to `https://github.com/121Nanami/greyhat-site`.
2. In that repository, set Settings → Pages → Source to **GitHub Actions**.
3. `.github/workflows/pages.yml` runs on every push to `main` and builds with `BASE_PATH=/greyhat-site/`.

`.github/workflows/ci.yml` runs tests and a root-path production build. It does not deploy.

`dist/` is also a static folder any host can serve. A local check is `npm run build && npm run preview`.

## What this page will not do

- No analytics, no cookie banner, no CDN, no remote fonts.
- No repo link for Agent Arena, Agent Fitness, FiaOS, or BoldInBeauty. Those repositories are private.
- BoldInBeauty has no public screenshot. The page says so.
- Screenshots that are demo or synthetic data are captioned that way. On-screen demo scores are not restated as results.

## Light theme

The default is dark. The header control (and the `theme` command) switches to a paper theme and remembers the choice in `localStorage` on this device.
