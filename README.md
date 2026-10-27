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
- `readable/` — prettified derived layer (pinned prettier 3.9.6) that **mirrors
  the served paths**: the 44 chunks under `readable/assets/<chunk>.pretty.js`
  plus the entry document's inline `<style>` twin
  (`readable/index-inline-1.pretty.css`) and `readable/index-inline-map.json`
- `src/` + `split-spec.json` — 416 statement-aligned slices of the 42 app
  chunks in the same served-path structure (`src/assets/<chunk>-NN.js`), the
  sequence re-cut through the recorded rename map, with the derivation spec
- `rename-map.json` + `tools/names.json` — the identifier rename campaign: the
  recovered word-boundary record over the slices and the reviewed worklist with
  per-name evidence
- `legacy/2026-10-14/` — the superseded derived layer (the previous 416-slice
  `src/` with `__`-flattened names + its `split-spec.json`), kept as the
  rollback copy
- `tools/derive.mjs` — rebuild `readable/` + `src/` + `split-spec.json`
  (re-applies the recorded rename map on every re-cut)
- `tools/update.mjs` — read-only drift probe against the embed host
- `tools/verify.mjs` — re-hash the capture against the manifest
- `tools/audit.js` — integrity gate for the derived layers and the rename map
  (`AUDIT PASS`)
- `tools/check-exports.mjs` — the fleet's shared public-export-name gate for
  the derived layer
- `tools/check-links.mjs` — link gate: every module of the derived layer
  exports only names the layer declares
- `tools/apply-names.mjs` — apply the reviewed renames (`tools/names.json`) to
  one chunk or all
- `tools/recover-scoped-map.mjs` — record the achieved map into `rename-map.json`
- `tools/verify-rename.mjs`, `tools/check-chunk.mjs`, `tools/refcheck.mjs`,
  `tools/engine/rename-layer.mjs` — the rename gates and the shared
  tokenizer/scope layer (acorn 8.14.1 from gitignored `tools/.deps`, installed
  on first use by `tools/lib-acorn.mjs`, authoring-time only)
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
node tools/verify.mjs                 # re-hash the capture against the manifest
node tools/audit.js                   # derived-layer + rename-map gate (AUDIT PASS)
node tools/verify-rename.mjs --all    # per-slice reproduction + references/bindings
node tools/check-chunk.mjs --all      # cross-slice calls resolve after renames
node tools/check-exports.mjs          # the derived layer still exports every public name
node tools/check-links.mjs            # every module of the derived layer exports only names the layer declares
node tools/derive.mjs --check          # the derived layer is current? (compares a fresh rebuild; writes NOTHING)
```

`check-links.mjs` guards the one class the export-name gate cannot see: a
module whose export statement names a binding the layer never declares is a
hard SyntaxError at link time, and the file cannot be imported at all. This
mirror's layer carries no export statement of its own — every **app** chunk's
export table lives in a **skipped tail** the layer does not carry as a file,
and the record of that tail is the *served* chunk's own export statement, in
the capture's spelling. (The two three.js addon chunks are carried whole and
never sliced, so they have no tail; see the coverage note below.) The gate
therefore rewrites each recorded tail into the layer's spelling with the
mirror's own rename map (`rename-map.json`): the local name of a specifier
becomes the name the layer gives that binding, the exported name is never
touched, and a renamed shorthand becomes `TARGET as ORIGINAL`. It then
reassembles each module from the layer's own bytes and asks the engine. A name
declared by a sibling part is reported as a fragment (the module is whole); a
name that exists in no part of the module is a real break, and the gate names
it.

### Export-name coverage

`node tools/check-exports.mjs` reaches **42 of the capture's 44 ES export
tables** — the 42 app chunks' final export statements, each compared with its
recorded captured tail text. The two it reports as **NOT covered** (unchecked,
not proven intact) are the three.js examples/jsm addon chunks,
`assets/BufferGeometryUtils-Qxvmd-vM.js` (exports `a`, `m`, `t`) and
`assets/RoundedBoxGeometry-D0zz8qHa.js` (exports `R`). Both are load-bearing:
the entry chunk's `__vite__mapDeps` table names both, and bare
`import "./<chunk>.js"` statements appear in 13 chunks (BufferGeometryUtils)
and 24 chunks (RoundedBoxGeometry) respectively. They stay uncovered by the
mirror's own **vendor rule**, not by a missing record: the rule carries each
chunk whole in `readable/` and never slices or renames it, so the only derived
artifact is `readable/assets/<chunk>.pretty.js` — which is already the
`sourceFile` the gate reads as the pristine, leaving no second text to
compare. No public name can be lost on that path: vendor identifiers and export
tables are never renamed, and `tools/audit.js` re-renders every pretty
byte-exact from its capture (45/45). The paired reading-copy section other
mirrors use cannot be recorded here under this mirror's own gate shapes
(`audit.js` requires one wholeFile section per vendor file with the exact
`-vendor.js` name and contiguous per-source tiling; `derive-check.mjs` rejects
an edited copy of the section `derive.mjs` emits), and both tools are read-only
for this lane. The full record is `split-spec.json` → `coverageNote`.


The rename gates need acorn (authoring-time only): it installs into the
gitignored `tools/.deps/` on first use (`npm install --prefix tools/.deps
acorn@8.14.1`) and is never needed by `derive.mjs`, the capture or the served
app.

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

> **Superseded in part 2026-10-14** by the structure pass + rename campaign
> below: `readable/` and `src/` were re-rooted onto the served paths
> (`readable/assets/…`, `src/assets/…` — the flat `assets__*` names are gone)
> and the identifier rename task recorded here as open is closed. The counts
> and gate tails below are the first-cut (2026-10-13) record, kept as such.

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
  rename campaign (PLAN §5) was open as of this note and is **closed
  2026-10-14** (see the structure + rename section below); any prettier-version
  bump remains open (the pinned 3.9.6 is required to re-derive byte-exact).
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

### 2026-10-14 structure pass + identifier rename campaign (the open task, closed)

Mission of this pass: converge the derived layers on the real project shape and
run the PLAN §5 identifier rename campaign. The capture was **not** touched —
`node tools/verify.mjs` still re-hashes all 910 files (0 problems) — so this
section is entirely about `readable/`, `src/`, `split-spec.json`,
`rename-map.json` and `tools/`.

- **Inventory (source maps + module boundaries) — both negative, recorded**:
  - *Source maps*: zero `sourceMappingURL` occurrences across the capture
    (html/js/css) and no `.map` file in it, so no original tree can be
    reconstructed from maps; the derivation stays a prettier/slice pass.
  - *Module boundaries*: the 42 app chunks are **flat Vite ES modules** — the
    entry opens with the `__vite__mapDeps` chunk table + modulepreload polyfill
    + preload helper, every chunk is a single top-level statement list ending in
    a plain `export {…}` table, and there is no webpack/Turbopack factory
    (`push([...])`) family to split on. The factory-family module-extraction
    precedents (spawn-dust-2-dm / mindfall / kettuvellam / futbol-island) are
    therefore **not applicable**; the evidence-based stillwater / taipei
    precedent applies — the statement-aligned slice is the true boundary this
    bundle exposes, and the chunk names the build preserved (`bedroom`,
    `hall`, `metro`, `gameplay`, …) are the capture's own module names.
- **Structure — `readable/` and `src/` now mirror the served paths** (PLAN §5:
  "the served path is the truth" — the capture is the embed directory root, so
  a captured file at `assets/gameplay-DnQwS-TC.js` derives to
  `readable/assets/gameplay-DnQwS-TC.pretty.js` and
  `src/assets/gameplay-DnQwS-TC-NN.js`; the `__`-flattening is gone). The entry
  document's inline twin and map stay at the `readable/` root
  (`readable/index-inline-1.pretty.css`, `readable/index-inline-map.json`).
  Slice headers carry the served tag (`// assets/gameplay-DnQwS-TC 07 — …`);
  `split-spec.json`'s `file`/`sourceFile`/`defaultFile` all use the new paths.
  Before/after counts: `readable/` 45 flat files → 44 under `readable/assets/`
  + the inline twin/map at the root (bytes unchanged, path-only re-rooting);
  `src/` 416 flat slices → 416 under `src/assets/`; the 47 index-only section
  names (5 wholeFile, 42 skipped) now read as served paths
  (`assets/index-DaQlAVPp-machinery.js`, `assets/index-DaQlAVPp-three-vendor.js`,
  `assets/<chunk>-tail-export.js`, `index-inline-1.css`). The superseded layer
  (previous 416-slice `src/` + its `split-spec.json`) is archived at
  `legacy/2026-10-14/`.
- **Rename campaign (PLAN §5) — applied and gated**: `tools/names.json` is the
  reviewed worklist — **35 chunks, 182 rules (166 curated semantic rules with
  per-name evidence read out of the code's own strings/identifiers + 16
  evidence-driven proposals from own export tables / semantic imports)**,
  applied by `tools/apply-names.mjs` as **182 names / 517 identifier splices,
  0 refused**, recovered into `rename-map.json` (**314 word-boundary records
  over 161 slices**) by `tools/recover-scoped-map.mjs`, and re-applied by
  `tools/derive.mjs` on every re-cut. Highlights: the entry chunk
  (`GameApp`/`Player`/`Input`/`PostFX`/`Scheduler`/`EventBus`/`AudioEngine`/
  `Interactables`/`RoomEnvironment`/`createRenderer`, the texture bank
  (`texManifest`/`loadTextureSet`/`applyTextureSet`/`initTextureBank`),
  `HOUSE_PLAN`/`ROOM_HEIGHT`/`ROOM_LOADERS`, `MATERIAL_SPECS`, the veil
  elements, the QA service bridge); `gameplay` (`installGameplay`,
  `installHud`, `spawnZombies`, `AkaneCompanion`, `runStoryScript`,
  `installWeaponViewmodel`, `ZombieAnimator`, `collectShadowProxies`); the
  rooms (`buildBedroom` + `buildNightstand`/`buildWardrobe`/`buildCandles`,
  `buildHall`/`buildHallSconces`/`buildHallProps`, `buildStudy`/`buildDesk`/
  `buildBookcases`, `buildLiving`/`buildTvUnit`/`buildBarricade`,
  `buildHouseDoor`/`buildHouseMoonlight`/`buildDreamRuins`,
  `buildExterior`/`buildCitySkyline`/`buildCityCorpses`); the districts
  (`buildAshwoodStation`/`buildParkgateConcourse`/`buildMetroShaft`,
  `buildParkPaths`/`buildEvacCamp`/`buildArmyTruck`, `buildBus`/`buildTaxi`/
  `buildBusStop`/`buildWreckedCar`, `buildGarden`/`buildRuinWalls`/
  `buildArmyCheckpoint`, `buildTrain`, `buildHelicopter` +
  `bakeHelicopterDecals`); the systems (`NavigationGrid`/`resolveCollisions`,
  `PoseAnimator`, `buildLightRig`/`installSceneLights`, `buildMotorcycle`,
  `createZombie`/`KINDS`/`STATES`/`prebuildZombies` (zombie kit),
  `buildFloorHatch`); the lab scenes (`buildLabStudio`, `buildLabScene`,
  `buildZombieLab`, `buildTrainLab`, `buildCityLab`, `buildMetroLab`,
  `buildParkLab`, `buildAkaneLab`, `buildLabFlashlight`) and the QA bot
  (`createBot`). The 42 skipped export tables keep their documented semantics
  and are **re-read by the reconstruction gates through
  `split-spec.sources[].renameBindings`** (182 fired binding rules recorded):
  the campaign renames their *local* side; the public names are the capture's
  own API and never change.
- **What the campaign deliberately does not rename** (honest scope):
  - **public API names** — the aliased side of every `export { local as
    Public }` (importers in other chunks use them) and, for chunks whose tables
    are unaliased (`export { n, t }`), the exported locals themselves;
  - names in shorthand positions (`{x}`, `const {x} = …`, `import {x}`) —
    the key shares the token text, so a splice would rewrite a property name;
  - **locals inside function bodies** — the campaign renames top-level
    bindings and import aliases only;
  - **vendor identifiers** — the three.js r185 region, the RoundedBoxGeometry
    and BufferGeometryUtils addons and the Vite build machinery are wholeFile
    and never renamed;
  - the **7 app chunks with no recorded renames** (`akane` — its 111
    minified top-level bindings export as `G/a/b/c/d/h` with no semantic
    evidence in the table, `common`, `frames`, `furniture`, `kit-CFeM0oZ2`,
    `kit-CwMQzO5T`, `plan3`) keep the bundle's own minified top-level names —
    the tooling is in place for further batches; 35 of the 42 app chunks
    carry the layer;
  - the map holds **word-boundary records only** (no token-index records were
    needed: every renamed name reached one target and covered every occurrence
    in its slice, which recovery proves mechanically — the token streams of a
    slice and its readable range must be identical in every non-identifier
    position, or nothing is written).
- **One real engine defect found and fixed** by the gates during the campaign:
  `tools/recover-scoped-map.mjs` aligned against a body with whole-line `//`
  comments stripped by a line-based tracker that can misclassify a `//` line
  that is GLSL/template payload (the district paint shader), corrupting that
  template's atomic literal token. The tokenizer already drops real comments,
  so recovery now aligns against the RAW committed body — exactly the bytes
  `tools/verify-rename.mjs` compares.
- **Gates (verbatim tails, 2026-10-14)**:
  - `node tools/verify.mjs` → `910 files checked, 0 problems`
  - `node tools/update.mjs` → `up to date: 910 captured files identical upstream`
  - `node tools/audit.js` → `AUDIT PASS — 463 spec sections (416/416
    src↔pretty round-trips byte-exact through the recorded rename map, 161
    renamed slice(s), 45/45 pretty sources tiled contiguously, 42/42 skipped
    export-table sections re-verified textually, 416/416 src slices + 44/44
    readable/*.pretty.js parse standalone (node --input-type=module --check -),
    45/45 pretties provably distinct from their capture source, 47 index-only
    wholeFile/skipped sections carry no src file, 1 inline content block(s)
    with twins + index-inline-map.json, 192/192 imports resolve inside the
    capture (0 whitelisted machinery), rename map: 314 record(s) over 161
    slice(s), 0 scoped slice(s) token-validated, no foreign position, 45/45
    pretties re-render byte-exact under pinned prettier 3.9.6 (fixpoint
    method), capture manifest free of derived layers)`
  - `node tools/verify-rename.mjs --all` → `verify-rename: 416/416 slice(s)
    reproduce byte-exact, 161 renamed slice(s) (0 indexed occurrence(s)), 42/42
    chunk(s) references+bindings YES`
  - `node tools/check-chunk.mjs --all` → `check-chunk: 42 chunk(s), 416 slice
    body(ies) substituted — all cross-slice calls resolve`
  - `node tools/derive.mjs` self-check tail → `derive: 45 readable file(s),
    416 src slices (416/416 parse standalone, 416/416 round-trip byte-exact
    through the recorded map, 161 renamed slice(s)), 42 skipped, 5 wholeFile,
    44 pretty js parse clean, 0 notRendered, 0 orphan(s) pruned — self-check
    clean`; full-pipeline re-run (`derive.mjs && apply-names.mjs --all &&
    recover-scoped-map.mjs`) reproduces **all 464 derived entries
    byte-identical** (readable + src + split-spec.json + rename-map.json).
  - serve probe — mirror root served on loopback (`tools/serve.mjs`, port
    8093): `/` (2,738 B), `/assets/index-DaQlAVPp.js` (832,859 B),
    `/assets/bedroom-Se-_w21f.js` (76,324 B), `/tex/manifest.json` (25,703 B),
    `/audio/manifest.json` (55,097 B), `/art/painting_crying_girl.png`
    (2,024,442 B), a texture albedo (255,778 B) and a sound cue (65,245 B) all
    HTTP 200; a missing path answers an honest 404; the listener was killed and
    the port verified closed (`netstat`: no LISTENING socket on 8093;
    connection refused).
- **Boot evidence** stays the 2026-10-13 shots (`docs/boot-2026-10-13.png`,
  `docs/cover.png`) — the capture and therefore the served bytes are unchanged
  by this pass, so the game on disk is byte-for-byte the one already booted and
  played; the 2026-10-14 serve probe re-confirms the mirror serves it.
- **Still open**: any prettier-version bump (the pinned 3.9.6 is required to
  re-derive byte-exact) and the seven unrenamed app chunks listed above (their
  tooling exists; further batches would extend `tools/names.json`).

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
| 302 | zombie-game-made-by-claude | mirror | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
<!-- mirror-status:end -->
