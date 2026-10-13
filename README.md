# ZOMBIE GAME MADE BY CLAUDE — offline mirror

Full mirror of **Zombie game made by Claude** — the playable HTML5 embed on its
itch.io page. The game itself is titled **LULLABY** (the frame document's
`<title>` and the loading veil's headline).

Source: https://heromouteut-ai.itch.io/zombie-game-made-by-claude

![ZOMBIE GAME](docs/cover.png)

## Stack

- **The game is the itch HTML5 embed, not the itch page** — the store page's
  `#game_drop` iframe points at `https://html-classic.itch.zone/html/19679752/index.html?v=1791661986`;
  the mirror is that upload directory as served (capture root = the embed
  directory root, so the repo root serves the game exactly as the iframe does)
- **Vite-style ES-module build** — the entry `assets/index-DaQlAVPp.js` (832,859 B)
  opens with the `__vite__mapDeps` chunk table naming 42 lazy chunks (rooms:
  `bedroom`, `hall`, `study`, `living`, `lab*`, `exterior`; districts: `city`,
  `park`, `metro`, `house`, `district`; systems: `gameplay`, `anim`, `nav`,
  `frames`, `lightrig`, `akane*`, `zombie_stub`) and pulls them with
  `import()` + a preload helper; hashed names as built
- **three.js r185 bundled inside the entry chunk** — one contiguous vendor
  region (`Copyright 2010-2026 Three.js Authors`, `const Wo = "185"`, the
  `DOLLY_PAN` constants table through the `WebGLRenderer` and the frozen ES
  module namespace object); the two examples-jsm addons the build ships are
  their own chunks (`RoundedBoxGeometry`, `BufferGeometryUtils`). No off-host
  vendor URLs
- **Runtime asset banks** — `tex/manifest.json` (108 materials ×
  albedo/normal/orm, 317 map files: 312 WebP + 5 PNG, fetched as
  `./tex/<name>/<map>.<ext>?v=<baked-stamp>`) and `audio/manifest.json`
  (545 MP3 cues fetched as `./audio/<file>`, 263 `voice/` + 282 `sfx/`)
- **itch's HTML5 harness stays external** — the frame document's last line is
  `<script defer src="https://static.itch.io/htmlgame.js">`, the only off-host
  reference anywhere in the capture; it is itch platform plumbing
  (resize/fullscreen), left pointing at itch rather than vendored, and the game
  boots and plays without it

## What this is

Zombie game made by Claude (heromouteut-ai.itch.io/zombie-game-made-by-claude) —
the itch page's copy is just "Zombie game made by Claude!", tagged *free*,
*HTML5*, *prototypes*, *zombies*, AI-assisted (code/graphics/audio/text). The
game inside is **LULLABY**: a first-person horror prototype — you wake in a
dark bedroom above a burning city, take the flashlight off the nightstand, use
its beam on a locked door, follow an NPC companion ("Akane") through house,
hall, city, park and metro sets, pick up a weapon and read subtitled voice
lines. The description above the fold is one line; everything else here was
read out of the served build.

The capture is the whole runtime closure of the embed: **910 files,
230,801,051 bytes (220.1 MiB)** — the entry document, the 44 JS chunks
(3.2 MiB, the entry chunk carrying three.js r185), 317 texture maps
(183.0 MiB), 545 MP3 cues (31.9 MiB), `audio/manifest.json`,
`tex/manifest.json` and `art/painting_crying_girl.png` (1.9 MiB — the in-game
painting texture). Closure was iterated to fixpoint from the served HTML/JS
(every literal path, `import()`/`from` specifier, `new URL(…)`, `url()` and
asset-directory string, plus the two manifest banks expanded to their file
lists) and cross-checked two ways while the game actually ran: a live browser
network capture of the itch embed during play (885 request entries; every
on-host path is in the capture; the only off-host requests are
`static.itch.io/htmlgame.js` and the `itch.io/html-callback` beacon) and the
mirror's own loopback server log (zero 404s across the whole session).

External at runtime: itch chrome only — `https://static.itch.io/htmlgame.js`
(on the frame document) and the `itch.io/html-callback` beacon. No other
off-origin request exists in the capture.

Gaps: none in the game closure — every path the served code and both manifests
name answers 200 on the embed host. Capturing the itch store page itself was
deliberately out of scope (platform chrome around the game, per the fleet rule
that site chrome is not the game).

## Layout

- `index.html` + `assets/`, `audio/`, `tex/`, `art/` — the embed directory root
  (`html/19679752/`) as served, byte-exact; the itch page's iframe target is
  `index.html` here
- `.upstream/manifest.json` — sha256 for every captured file
- `readable/` — prettified derived layer (pinned prettier 3.9.6) for the 44
  chunks plus the entry document's inline `<style>` twin
  (`readable/index-inline-1.pretty.css`) and `readable/index-inline-map.json`
- `src/` + `split-spec.json` — 416 statement-aligned slices of the 42 app
  chunks with the recorded derivation spec
- `tools/derive.mjs` — rebuild `readable/` + `src/` + `split-spec.json`
- `tools/update.mjs` — read-only drift probe against the embed host
- `tools/verify.mjs` — re-hash the capture against the manifest
- `tools/audit.js` — integrity gate for the derived layers (`AUDIT PASS`)
- `tools/serve.mjs` — loopback static server used for the boot test

## Assets

- **textures** — 317 file(s): `tex/` (108 materials × albedo/normal/orm; 312
  `.webp` + 5 `.png`) plus `tex/manifest.json`
- **audio** — 545 file(s): `audio/voice/` (263 MP3 voice cues),
  `audio/sfx/` (282 MP3 effects/ambience) plus `audio/manifest.json`
- **art** — 1 file(s): `art/` (painting_crying_girl.png — the in-game painting)
- **code** — 44 file(s): `assets/` (hashed JS chunks incl. the three.js r185
  build and the two jsm addons)
- no fonts, models or video payloads — geometry is procedural code, text is DOM

## Run

Open `index.html` through any static file server, serving the repo root as the
site root (the embed is document-relative; no build step):

```
node tools/serve.mjs          # http://127.0.0.1:8093/
# or: npx serve .
```

Click the veil to begin (the game wants pointer lock for mouse-look; keys
`WASD` / `Shift` / `E` / `F` / `R` work without it).

## Verify

```
node tools/verify.mjs     # re-hash the capture against the manifest
node tools/audit.js       # derived-layer integrity gate (AUDIT PASS)
```

## Updating from upstream

```
node tools/update.mjs     # read-only drift probe: what changed upstream
```

The probe never rewrites the capture — a mirror is a point-in-time snapshot.
It probes `https://html-classic.itch.zone/html/19679752/<rel>` (the embed
directory the itch page's iframe points at) for every captured file.

**Versioned-embed caveat:** the iframe src carries a build stamp
(`…/html/19679752/index.html?v=1791661986`) and the numeric build directory is
itself the version. If the author re-uploads the game, that path — and the
`?v=` stamp — rotate, and every probe 404s against the new embed: that is a NEW
BUILD, not corruption. Refresh means re-extracting the iframe src from the itch
page, capturing the new `/html/<id>/` directory into a clean tree, re-cutting
the manifest and re-deriving `readable/` + `src/` from the new chunks (never
carry the old derived layer over). A refresh also copies every replaced file
into `legacy/<date>/` first, so nothing is lost.

### 2026-10-13 derivation

Both derived layers were cut from the recorded capture (capture bytes
untouched — `tools/verify.mjs` re-hashes all 910 files; `tools/audit.js` gates
the derived trees):

- `readable/` — pinned prettier 3.9.6 (module API, default options, rendered to
  fixpoint = format until the output stops changing, max 5 passes; most chunks
  2 — never the CLI, it respects `.gitignore` and can silently echo its input)
  rendered all 44 chunks to `assets__*.pretty.js` (45 files counting the inline
  style twin; 5.2 MiB total). Every pretty is provably not a byte copy of its
  capture source and re-renders byte-exact under the recorded method (45/45).
  The entry document's single inline `<style>` block (1,888 B at bytes
  194–2,082 of `index.html`) is `readable/index-inline-1.pretty.css`, recorded
  in `readable/index-inline-map.json` (byte range + sha256); the document's two
  scripts are external references (the app chunk and itch chrome), so it is the
  only inline twin.
- `src/` — 416 statement-aligned slices (`src/<tag>-NN.js`, exact 2-line
  provenance header `// <tag> NN — <marker>` + `// Lines A-B of <pretty>
  (statement-aligned).`) recorded in `split-spec.json` (463 sections across 45
  originals): 416/416 parse standalone under `node --input-type=module --check -`
  and round-trip byte-exact to their readable line ranges, cuts land only on
  top-level declaration boundaries in ~250–350 line windows (oversized single
  declarations stay whole, e.g. the entry chunk's 15 slice windows cover the
  whole app half after the vendor region). Independent spot check of three
  slices (`assets__index-DaQlAVPp-01`, `assets__city-COfbVKUz-01`,
  `assets__zombie_stub-3Vfgk-wH-01`) reproduces the bodies byte-for-byte, LF.
- Vendor rule — wholeFile sections, never sliced: the bundled **three.js r185**
  region inside the entry chunk (`assets__index-DaQlAVPp-three-vendor.js`,
  content-anchored between the `Three.js Authors` license comment + the r185
  constants table and the frozen module namespace object, immediately before
  the app's renderer factory — guarded and asserted), the **RoundedBoxGeometry**
  and **BufferGeometryUtils** jsm addon chunks, and the entry document's
  **inline stylesheet**. Machinery rule — the Vite build machinery opening the
  entry chunk (`__vite__mapDeps` table + modulepreload polyfill + preload
  helper) is wholeFile. Non-standalone parts are indexed, not sliced (42 skipped
  sections): every chunk's final `export {…}` table.
- Identification is the bundle's own minified names (the app half of the entry
  chunk slices as `shadowmap`, `pixelate`, `hud`, … markers) — the identifier
  rename campaign (PLAN §5) remains an open task, as does any prettier-version
  bump (the pinned 3.9.6 is required to re-derive byte-exact).
- Gates: `node tools/verify.mjs` → `910 files checked, 0 problems`;
  `node tools/audit.js` → `AUDIT PASS` (416/416 round-trips, 45/45 pretties
  re-render byte-exact, 45/45 tiled contiguously, 192/192 imports resolve,
  capture manifest free of derived layers); `node tools/update.mjs` → all 910
  captured files identical upstream; serve probe — mirror root served on
  loopback (`tools/serve.mjs`), game booted and played, listener killed, port
  closed (netstat). Rebuild with `node tools/derive.mjs`.
- §0.4 fork-over-mirror checked 2026-10-13: no public upstream repo exists —
  the itch page carries no repo/website links, the author profile
  (heromouteut-ai.itch.io) lists only other itch games, the served bundle
  contains no GitHub reference, and a GitHub search for the game name and the
  author slug finds nothing. The mirror stands.
- Boot evidence: `docs/boot-2026-10-13.png` (first in-game scene after "click
  to begin" — bedroom, NPC, burning city through the window) and the cover
  `docs/cover.png` (actual gameplay: flashlight on, lit wallpaper and painting,
  arm with the flashlight in frame), both shot on the loopback mirror.

## Mirror conventions

- **Capture layer** — the captured files are byte-exact copies of what the
  embed host served; the `?v=<stamp>` query strings the game appends to texture
  URLs are cache-busting only and are not part of the disk names, so a byte
  match is the identity check.
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
