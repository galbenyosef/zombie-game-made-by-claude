# ZOMBIE GAME MADE BY CLAUDE — offline mirror

Full mirror of **Zombie game made by Claude** ("LULLABY") — the playable HTML5
embed on its itch.io page.

Source: https://heromouteut-ai.itch.io/zombie-game-made-by-claude

![ZOMBIE GAME](docs/cover.png)

## Stack

- **Vite-style ES-module build** — the itch embed frame (`html-classic.itch.zone/html/19679752/index.html`)
  loads one hashed entry chunk `assets/index-DaQlAVPp.js` which dynamically
  imports ~40 sibling chunks (rooms, city, park, metro, NPCs, weapons)
- **three.js r18x bundled into the chunks** — the renderer, GLTF/KTX2 loaders and
  post-processing live inside the hashed assets; no off-origin vendor URLs
- **Asset banks** — `tex/manifest.json` (108 materials × albedo/normal/orm WebP,
  `?v=<baked-stamp>` cache-busting, byte-fetched without the query) and
  `audio/manifest.json` (545 MP3 voice/sfx cues) fetched by the app at boot
- **Everything is runtime-fetched** — textures, audio and the room chunks are
  document-relative (`./tex/…`, `./audio/…`, `./assets/…`), which is why the
  mirror serves the embed directory root as the repo root

## What this is

Zombie game made by Claude (heromouteut-ai.itch.io/zombie-game-made-by-claude) —
"Zombie game made by Claude!": the itch page's title, while the game itself is
titled **LULLABY** (the frame document's title). A first-person horror zombie
prototype: you wake in a dark house with a flashlight, use it on locks, follow
an NPC companion, pick up weapons and move through house / hall / city / park /
metro areas over an interleaved scripted story.

External at runtime: `https://static.itch.io/htmlgame.js` (itch's own embed
chrome, loaded by the frame document — deliberately NOT captured, per the fleet
rule that site chrome is not part of the game; the game runs without it).
No other off-origin requests.

## Layout

- `index.html` + `assets/`, `audio/`, `tex/`, `art/` — the embed directory root,
  served as the itch iframe serves it
- `.upstream/manifest.json` — sha256 for every captured file
- `readable/` — prettified derived layer (pinned prettier 3.9.6)
- `src/` + `split-spec.json` — statement-aligned slices of the app chunks
- `tools/derive.mjs` — rebuild `readable/` + `src/` + `split-spec.json`
- `tools/update.mjs` — read-only drift probe against the embed host
- `tools/verify.mjs` — re-hash the capture against the manifest
- `tools/audit.js` — integrity gate for the derived layers (`AUDIT PASS`)

## Assets

- **textures** — 313 file(s): `tex/` (108 materials × albedo/normal/orm WebP)
- **audio** — 545 file(s): `audio/voice/`, `audio/sfx/` (MP3)
- **art** — 1 file(s): `art/` (painting_crying_girl.png)
- **code** — 44 file(s): `assets/` (hashed JS chunks)

## Run

Open `index.html` through any static file server **at the directory root** (the
embed is document-relative; no build step):

```
npx serve .
```

## Verify

```
node tools/verify.mjs     # re-hash the capture against the manifest
```

## Updating from upstream

```
node tools/update.mjs     # read-only drift probe: what changed upstream
```

The probe never rewrites the capture — a mirror is a point-in-time snapshot.
It probes `https://html-classic.itch.zone/html/19679752/<rel>`, the embed
directory the itch page's iframe points at. **Versioned-embed caveat:** the
iframe src is `…/html/19679752/index.html?v=1791661986`; if the author
re-uploads the game, the numeric build directory (and the `?v=` stamp) rotates
and every probe 404s — that is a new build, not corruption; re-extract the
iframe src from the itch page and re-capture.

## Mirror conventions

- **Capture layer** — the captured files are byte-exact copies of what the
  embed host served (query strings excluded; they are cache-busting only).
- **Readable layer** — `readable/` is derived (prettified) and never shipped
  to a browser; it exists so the bundle can actually be read.
- **Provenance** — `.upstream/manifest.json` records sha256 for each captured
  artifact, and `tools/verify.mjs` re-checks it.
- **Drift** — `tools/update.mjs` is read-only: it reports what changed upstream
  and never rewrites the capture.

## Fleet status

<!-- mirror-status:start — feeds _standard/REPO-INDEX.md. Update ONLY your own mirror's block; never edit the shared index (PLAN §8). Rebuild: node _standard/build-index.mjs -->
<!-- cols: cls=classification · ver=verify 0 problems · upd=drift probe · man=manifest · rdbl=readable re-derived · src=reversed src · boot=boot test · top=offline-mirror topic · tag=backup tag · staged=staged not committed -->
| # | repo | cls | ver | upd | man | rdbl | src | boot | top | tag | staged |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | zombie-game-made-by-claude | mirror | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
<!-- mirror-status:end -->
