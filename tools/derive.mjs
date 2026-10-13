// derive.mjs — rebuild the derived layers (readable/ + src/ + split-spec.json)
// from the ZOMBIE GAME MADE BY CLAUDE capture (PLAN §3/§5). The game is the
// itch.io HTML5 embed "LULLABY" served from html-classic.itch.zone/html/19679752/.
// Capture-class: a Vite-style production build; §0.4 fork-over-mirror was
// checked on 2026-10-13 — no public upstream repo exists (the itch page and the
// game bundle carry no repo link; a GitHub search finds nothing for the game or
// the author slug heromouteut-ai), so the mirror stands. The capture is
// untouched; every source file is re-hashed against .upstream/manifest.json
// before it is rendered, so a drifted capture fails loudly instead of being
// silently re-derived.
//
// Pipeline:
//   each capture assets/*.js -> pinned prettier 3.9.6 (module API — the CLI
//                        respects .gitignore and can silently echo its input),
//                        rendered to fixpoint (format until the output stops changing, max 5 passes) -> readable/<tag>.pretty.js
//                        (capture-root-relative name, dirs flattened with __)
//   the entry chunk      -> build machinery (the __vite__mapDeps chunk table and
//                        the modulepreload polyfill) and the bundled three.js
//                        r185 region are wholeFile sections (machinery/vendor
//                        rule); the remaining app statements are sliced
//   app chunks           -> statement-aligned slices src/<tag>-NN.js at
//                        top-level declaration boundaries, ~250-350 line
//                        windows (oversized single declarations stay whole),
//                        exact 2-line provenance header; every slice is
//                        parse-checked with `node --input-type=module --check -`
//                        and round-trips byte-exact to its readable line range
//   entry document       -> inline <script>/<style> scan (byte ranges + sha256):
//                        index.html's inline <style> block gets a readable twin
//                        (readable/index-inline-1.pretty.css) recorded in
//                        readable/index-inline-map.json; its external scripts
//                        (the app chunk and the itch chrome script) are not
//                        derived
//
// Non-standalone parts are indexed but never sliced (skipped sections): every
// chunk's final `export {…}` table (the bindings live in the earlier slices).
//
// The bundled three.js region inside the entry chunk is content-anchored and
// asserted (a missing anchor fails the run): the region opens on the
// `Three.js Authors` license comment + the r185 constants table (`DOLLY_PAN`)
// and closes on the module namespace object (`Symbol.toStringTag,{value:"Module"}`)
// right before the app's renderer factory (`new WebGLRenderer({… powerPreference:"high-performance" …})`).
//
// Identifiers in src/ are the bundle's own minified names — the rename
// campaign (PLAN §5) is recorded as an open task in README.md. usage:
//   node tools/derive.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const PINNED = "3.9.6";
const MIN_WINDOW = 250;
const MAX_WINDOW = 350;
const TODAY = "2026-10-13";
const ROOT = ""; // capture sits at the repo root (the embed directory root)

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const readLines = (abs) => {
  const t = fs.readFileSync(abs, "utf8");
  const l = t.split("\n");
  if (l.length && l[l.length - 1] === "") l.pop();
  return l;
};
const linesOf = (text) => text.replace(/\n$/, "").split("\n");
const lineOf = (text, offset) => text.slice(0, offset).split("\n").length;

// capture-relative name -> readable twin name (dirs flattened with __)
const tagOf = (capRel) => {
  const rel = capRel.startsWith(ROOT) ? capRel.slice(ROOT.length) : capRel;
  return rel.replace(/\.(js|css)$/i, "").split("/").join("__");
};
const prettyRelFor = (capRel) =>
  "readable/" + tagOf(capRel) + (/\.css$/i.test(capRel) ? ".pretty.css" : ".pretty.js");

// ── pinned prettier (module API, exactly 3.9.6) ─────────────────────────
async function loadPrettier() {
  const candidates = [
    process.env.PRETTIER_MJS,
    path.join(proj, "node_modules", "prettier", "index.mjs"),
    "D:/repos/mirrors/metropolygonia/node_modules/prettier/index.mjs",
  ].filter(Boolean);
  for (const c of candidates) {
    if (!fs.existsSync(c)) continue;
    try {
      const pkg = JSON.parse(fs.readFileSync(path.join(path.dirname(c), "package.json"), "utf8"));
      if (pkg.version !== PINNED) continue;
      const mod = (await import(pathToFileURL(c).href)).default;
      if (mod.version === PINNED) return { mod, at: c };
    } catch {
      /* try next */
    }
  }
  throw new Error(`pinned prettier ${PINNED} not found (set PRETTIER_MJS to its index.mjs)`);
}

// Render to fixpoint: format until the output stops changing (max 5 passes).
// The babel parser is idempotent in one pass for almost every chunk, but a few
// minified constructs (comment placement, parenthesized expressions inside
// templates) need a second pass — rendering to the fixpoint makes the recorded
// method deterministic, and audit re-renders with the same method.
async function formatFixpoint(prettier, text, parser) {
  let cur = text;
  for (let pass = 1; pass <= 5; pass++) {
    const next = await prettier.format(cur, { parser });
    if (next === cur) return { out: next, passes: pass };
    cur = next;
  }
  throw new Error(`prettier ${parser} did not reach a fixpoint in 5 passes`);
}

// ── parse check: the exact standalone gate (ESM stdin) ──────────────────
function parses(text) {
  const r = spawnSync(process.execPath, ["--input-type=module", "--check", "-"], {
    input: text,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  return { ok: r.status === 0, why: (r.stderr || "").trim().split("\n").slice(-3).join(" | ") };
}

// ── markers for titles (top tokens, lowercase; fleet convention) ────────
const STOP = new Set(
  ("function return typeof undefined object string number boolean prototype length value default " +
    "exports import this that with from then else case break continue delete instanceof constructor " +
    "arguments void null true false call apply name type text target window document globalthis self " +
    "require module async await yield static class const let var new for while switch throw try catch " +
    "finally extends super using debugger of in do if has own hasown get set")
    .split(" ")
    .filter(Boolean),
);
function markers(text, n = 2) {
  // URLs/identifiers living inside string literals (import paths, asset names)
  // are not code tokens — strip quoted strings before counting
  const code = text.replace(/`[^`]*`|"[^"\n]*"|'[^'\n]*'/g, " ");
  const counts = new Map();
  for (const m of code.matchAll(/[A-Za-z][A-Za-z0-9_]{2,}/g)) {
    const w = m[0].toLowerCase();
    if (STOP.has(w)) continue;
    counts.set(w, (counts.get(w) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n);
}
const markerText = (ms) => ms.map(([w, c]) => `${w}(${c})`).join(", ");

// ── windowize: cut only at statement starts; ≤350 lines, a single ───────
// ── oversized declaration is a window of its own ────────────────────────
function windowize(stmts) {
  const out = [];
  let cur = null;
  for (const s of stmts) {
    if (!cur) {
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
      continue;
    }
    const projected = s.endLine - cur.startLine + 1;
    if (projected > MAX_WINDOW) {
      out.push(cur);
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
    } else {
      cur.last = s;
      cur.count++;
      cur.endLine = s.endLine;
    }
  }
  if (cur) out.push(cur);
  return out;
}

// ── inline block scan (byte-exact, over the raw entry buffer) ───────────
function scanBlocks(buf) {
  const blocks = [];
  for (const [open, close, kind] of [
    ["<script", "</script", "script"],
    ["<style", "</style", "style"],
  ]) {
    let p = 0;
    let n = 0;
    while (true) {
      const i = buf.indexOf(open, p);
      if (i < 0) break;
      const after = buf[i + open.length];
      const boundary =
        after === 0x3e || after === 0x2f || after === 0x20 || after === 0x09 || after === 0x0a || after === 0x0d;
      if (!boundary) {
        p = i + open.length;
        continue;
      }
      const tagEnd = buf.indexOf(">", i);
      if (tagEnd < 0) break;
      const j = buf.indexOf(close, tagEnd + 1);
      if (j < 0) throw new Error(`unterminated <${kind}> opened at byte ${i}`);
      const tag = buf.subarray(i, tagEnd + 1).toString("utf8");
      const external = /\bsrc\s*=\s*["']/i.test(tag);
      if (external) {
        blocks.push({ kind, external: true, tag, openStart: i, contentStart: tagEnd + 1, contentEnd: j });
      } else {
        n++;
        const content = buf.subarray(tagEnd + 1, j);
        blocks.push({
          kind: /\btype\s*=\s*["']importmap["']/i.test(tag) ? "importmap" : kind,
          external: false,
          block: n,
          tag,
          openStart: i,
          contentStart: tagEnd + 1,
          contentEnd: j,
          bytes: content.length,
          sha256: sha256(content),
          text: content.toString("utf8"),
        });
      }
      p = j + close.length;
    }
  }
  return blocks.sort((a, b) => a.openStart - b.openStart);
}

// ── content-anchored guards for the entry chunk's machinery/vendor parts ─
const MAPDEPS_GUARD = (t) => /__vite__mapDeps/.test(t) && /\.js"/.test(t);
const POLYFILL_GUARD = (t) => /modulepreload/.test(t) && /MutationObserver/.test(t);
const PRELOAD_HELPER_GUARD = (t) => /modulepreload/.test(t) && /new URL\(r, e\)\.href/.test(t);
const MACHINERY_GUARD = (t) => MAPDEPS_GUARD(t) && POLYFILL_GUARD(t);
const VENDOR_GUARD = (t) =>
  /Copyright 2010-\d{4} Three\.js Authors/.test(t) &&
  /const Wo = "185"/.test(t) &&
  /DOLLY_PAN: 2/.test(t) &&
  /WebGLRenderer/.test(t);
const VENDOR_START_GUARD = (t) => /const Wo = "185"/.test(t) && /DOLLY_PAN: 2/.test(t) && /LEFT: 0, MIDDLE: 1, RIGHT: 2/.test(t);
const VENDOR_END_GUARD = (t) => /ACESFilmicToneMapping/.test(t) && /Symbol\.toStringTag,\s*\{\s*value:\s*"Module"\s*\}/.test(t);
const APP_RESUME_GUARD = (t) => /antialias: !1/.test(t) && /powerPreference: "high-performance"/.test(t);

// three.js example addons the build ships as their own chunks — third-party
// engine code, indexed whole-file and never sliced (vendor rule)
const WHOLE_FILE = {
  "assets__RoundedBoxGeometry-D0zz8qHa": {
    title: "assets__RoundedBoxGeometry-D0zz8qHa — three.js examples/jsm addon (vendor, whole-file, never sliced)",
    desc:
      "the three.js examples/jsm RoundedBoxGeometry addon (a BoxGeometry subclass with rounded corner/edge geometry, " +
      "`this.type = \"RoundedBoxGeometry\"`) — third-party engine code the build ships as its own lazy chunk. Vendor rule — " +
      "indexed whole-file in readable/, never sliced or rewritten.",
    guard: (t) => t.includes("RoundedBoxGeometry") && t.includes("toNonIndexed"),
    what: "three.js RoundedBoxGeometry addon",
  },
  "assets__BufferGeometryUtils-Qxvmd-vM": {
    title: "assets__BufferGeometryUtils-Qxvmd-vM — three.js examples/jsm addon (vendor, whole-file, never sliced)",
    desc:
      "the three.js examples/jsm BufferGeometryUtils addon (mergeGeometries/mergeVertices/mergeAttributes and the " +
      "`THREE.BufferGeometryUtils:` error strings) — third-party engine code the build ships as its own lazy chunk. " +
      "Vendor rule — indexed whole-file in readable/, never sliced or rewritten.",
    guard: (t) => t.includes("THREE.BufferGeometryUtils:") && t.includes("mergeGeometries"),
    what: "three.js BufferGeometryUtils addon",
  },
};

async function main() {
  const { mod: prettier, at } = await loadPrettier();
  console.log(`pinned prettier ${PINNED} (${at})`);

  const manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));
  const captured = Object.keys(manifest.files).map((r) => r.split(path.sep).join("/")).sort();
  const captureBytes = (rel) => {
    const abs = path.join(proj, rel);
    if (!fs.existsSync(abs)) throw new Error(`capture file missing: ${rel}`);
    const buf = fs.readFileSync(abs);
    if (sha256(buf) !== manifest.files[rel].sha256)
      throw new Error(`${rel} on disk does not match .upstream/manifest.json — re-verify the capture first`);
    return buf;
  };

  const readableDir = path.join(proj, "readable");
  const srcDir = path.join(proj, "src");
  fs.mkdirSync(readableDir, { recursive: true });
  fs.mkdirSync(srcDir, { recursive: true });
  const written = { readable: new Set(), src: new Set() };

  const sources = [];
  const sections = [];
  const notRendered = [];
  const inlineFiles = [];
  let slicedTotal = 0;
  let skippedTotal = 0;

  const jsRelsAll = captured.filter((r) => /\.js$/i.test(r));
  const cssRels = captured.filter((r) => /\.css$/i.test(r));
  const htmlRels = captured.filter((r) => /\.html$/i.test(r));
  // entry chunk first (it is the game's entry point), then the module chunks
  const RANK_ENTRY = "assets/index-DaQlAVPp.js";
  const rank = (rel) => (rel === RANK_ENTRY ? 0 : 1);
  const jsRels = jsRelsAll.slice().sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));

  // ── 1) JS: entry machinery/vendor -> wholeFile; app statements -> slices ─
  for (const rel of jsRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    if (!Buffer.from(text, "utf8").equals(buf)) throw new Error(`${rel} does not round-trip through utf8`);
    const { out: pretty, passes: prettyPasses } = await formatFixpoint(prettier, text, "babel");
    if (pretty === text)
      throw new Error(`${rel}: prettier output is byte-identical to the capture — nothing to derive`);
    const sourceFile = prettyRelFor(rel);
    fs.writeFileSync(path.join(proj, sourceFile), pretty);
    written.readable.add(path.basename(sourceFile));
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    const cls = WHOLE_FILE[tag];

    if (cls) {
      if (cls.guard && !cls.guard(pretty))
        throw new Error(`${rel}: whole-file guard failed — readable changed shape`);
      sections.push({
        file: `${tag}-vendor.js`,
        wholeFile: true,
        title: cls.title,
        desc: `Lines 1-${lines.length} of ${sourceFile}: ${cls.desc}`,
        note: "whole-file (vendor rule): indexed in readable/, never sliced",
        startLine: 1,
        endLine: lines.length,
        sourceFile,
      });
      sources.push({
        sourceFile,
        capture: rel,
        captureKind: "file",
        captureSha256: manifest.files[rel].sha256,
        captureBytes: buf.length,
        prettyLines: lines.length,
        prettyBytes: Buffer.byteLength(pretty, "utf8"),
        prettyPasses,
        fixpoint: true,
        tag,
        slices: 0,
        derived: "readable only (vendor bundle, wholeFile)",
        what: cls.what,
      });
      console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile vendor)`);
      continue;
    }

    // ── app chunk: statement-aligned slicing ────────────────────────────
    const dbg = await prettier.__debug.parse(pretty, { parser: "babel" });
    const top = (dbg.ast.program || dbg.ast).body;
    const stmts = top.map((n) => ({
      node: n,
      startLine: lineOf(pretty, n.start),
      endLine: lineOf(pretty, n.end),
      text: pretty.slice(n.start, n.end),
    }));
    for (let i = 1; i < stmts.length; i++)
      if (stmts[i].startLine <= stmts[i - 1].endLine)
        throw new Error(`${rel}: statements ${i - 1}/${i} share a line — cannot slice at line boundaries`);

    const specials = [];
    const covered = new Array(stmts.length).fill(false);
    const claim = (a, b, block) => {
      if (a < 0 || b < a || b >= stmts.length) throw new Error(`${rel}: bad ${block.file} range ${a}-${b}`);
      for (let i = a; i <= b; i++) {
        if (covered[i]) throw new Error(`${rel}: ${block.file} overlaps another block at statement ${i}`);
        covered[i] = true;
      }
      specials.push({ ...block, A: stmts[a].startLine, B: stmts[b].endLine });
    };

    if (rel === RANK_ENTRY) {
      // the chunk opens with the Vite build machinery: the __vite__mapDeps
      // chunk-dependency table, the modulepreload polyfill IIFE and the
      // dynamic-import preload helper
      if (!MAPDEPS_GUARD(stmts[0].text) || !POLYFILL_GUARD(stmts[1].text) || !PRELOAD_HELPER_GUARD(stmts[2].text))
        throw new Error(`${rel}: first statements are not the Vite mapDeps table + modulepreload polyfill + preload helper`);
      claim(0, 2, {
        kind: "whole",
        file: `${tag}-machinery.js`,
        title: `${tag} — Vite build machinery (mapDeps chunk table + modulepreload polyfill + preload helper, whole-file, never sliced)`,
        body:
          "the Vite-generated build machinery at the head of the entry chunk — the `__vite__mapDeps` chunk-dependency table (the " +
          "name list of every lazy chunk the app can import), the modulepreload polyfill IIFE (`link[rel=modulepreload]` " +
          "relList.supports check + MutationObserver fetch warm-up) and the dynamic-import preload helper — build machinery, not " +
          "app code; indexed whole-file in readable/, never sliced.",
      });
      // the bundled three.js r185 region (license comment + constants to the
      // module namespace object, right before the app's renderer factory)
      const vs = 3;
      if (!VENDOR_START_GUARD(stmts[vs].text))
        throw new Error(`${rel}: three.js region start anchor not found at statement ${vs}`);
      let ve = -1;
      for (let i = stmts.length - 1; i > vs; i--)
        if (VENDOR_END_GUARD(stmts[i].text)) {
          ve = i;
          break;
        }
      if (ve < 0) throw new Error(`${rel}: three.js region end anchor (module namespace object) not found`);
      if (!VENDOR_GUARD(lines.slice(stmts[vs].startLine - 1, stmts[ve].endLine).join("\n")))
        throw new Error(`${rel}: three.js region guard failed — readable changed shape`);
      const app = stmts[ve + 1];
      if (!app || !APP_RESUME_GUARD(app.text))
        throw new Error(`${rel}: app resume anchor (renderer factory) not found after the vendor region`);
      claim(vs, ve, {
        kind: "whole",
        file: `${tag}-three-vendor.js`,
        title: `${tag} — bundled three.js r185 (vendor region, whole-file, never sliced)`,
        body:
          "the bundled three.js r185 engine (the `const Wo=\"185\"` revision table, math, constants, colour management, textures, " +
          "geometries, materials, objects, the WebGL renderer/attributes/state/program/textures machinery, `window.__THREE__` " +
          "revision registration, and the ES-module namespace object) — vendor, not app code. Vendor rule — indexed whole-file in " +
          "readable/, never sliced or rewritten.",
      });
    }

    let exportSkip = null;
    const lastStmt = stmts[stmts.length - 1];
    if (
      lastStmt &&
      lastStmt.node.type === "ExportNamedDeclaration" &&
      !covered[stmts.length - 1] &&
      /^export\s*\{[\s\S]*\}\s*;?$/.test(lastStmt.text.trim()) &&
      !/\bfrom\b/.test(lastStmt.text)
    ) {
      claim(stmts.length - 1, stmts.length - 1, {
        kind: "skip",
        file: `${tag}-tail-export.js`,
        title: `${tag} — final export table (not sliced)`,
        desc: `Lines ${lastStmt.startLine}-${lastStmt.endLine}. The chunk's final export {…} table — the exported bindings live in the earlier slices; a standalone tail carries no new statements, so it is indexed only.`,
      });
    }

    // runs of uncovered statements -> windows
    const runs = [];
    for (let i = 0; i < stmts.length; i++) {
      if (covered[i]) continue;
      const run = [stmts[i]];
      while (i + 1 < stmts.length && !covered[i + 1]) run.push(stmts[++i]);
      runs.push(run);
    }
    const slices = [];
    for (const run of runs) for (const w of windowize(run)) slices.push(w);

    // blocks in line order, then re-tile so every line of the pretty is owned
    const blocks = [...specials, ...slices.map((w) => ({ kind: "slice", A: w.startLine, B: w.endLine, count: w.count }))];
    blocks.sort((a, b) => a.A - b.A);
    for (let i = 0; i < blocks.length; i++) {
      if (i === 0) blocks[i].A = 1;
      if (i + 1 < blocks.length) blocks[i].B = blocks[i + 1].A - 1;
      else blocks[i].B = lines.length;
    }

    let nn = 0;
    let perFileSkipped = 0;
    let perFileVendor = 0;
    for (const b of blocks) {
      if (b.kind === "slice") {
        nn++;
        const num = String(nn).padStart(2, "0");
        const body = lines.slice(b.A - 1, b.B).join("\n") + "\n";
        const ms = markers(body);
        const topWord = ms.length ? ms[0][0] : /^\s*import\b/.test(body) ? "imports" : tag.toLowerCase();
        const oversized = b.count === 1 && b.B - b.A + 1 > MAX_WINDOW;
        const file = `${tag}-${num}.js`;
        const sliceText =
          `// ${tag} ${num} — ${topWord}\n` +
          `// Lines ${b.A}-${b.B} of ${sourceFile} (statement-aligned).\n` +
          body;
        const chk = parses(sliceText);
        if (!chk.ok) throw new Error(`generated src/${file} does not parse standalone: ${chk.why}`);
        fs.writeFileSync(path.join(srcDir, file), sliceText);
        written.src.add(file);
        sections.push({
          file,
          title: `${tag} ${num} — ${topWord}`,
          desc: `${oversized ? "Oversized single declaration (kept whole). " : ""}Lines ${b.A}-${b.B}. Markers: ${markerText(ms)}.`,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else if (b.kind === "whole") {
        perFileVendor++;
        sections.push({
          file: b.file,
          wholeFile: true,
          title: b.title,
          desc: `Lines ${b.A}-${b.B} of ${sourceFile}: ${b.body}`,
          note: "whole-file region (build machinery/vendor rule): indexed in readable/, never sliced",
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else {
        perFileSkipped++;
        sections.push({
          file: b.file,
          skipped: true,
          title: b.title,
          desc: b.desc,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
          firstLine: lines[b.A - 1],
          lastLine: lines[b.B - 1],
        });
      }
    }
    slicedTotal += nn;
    skippedTotal += perFileSkipped;
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses,
      fixpoint: true,
      tag,
      slices: nn,
      derived:
        `readable + ${nn} statement-aligned slice(s)` +
        (perFileVendor ? ` + ${perFileVendor} wholeFile region(s)` : "") +
        (perFileSkipped ? ` + ${perFileSkipped} skipped section(s)` : ""),
    });
    console.log(
      `derive: ${rel} -> ${sourceFile} (${lines.length} lines, ${nn} slices, ${perFileVendor} wholeFile, ${perFileSkipped} skipped)`,
    );
  }

  // ── 2) CSS: readable pretty, wholeFile section (stylesheet rule) ────────
  for (const rel of cssRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    const { out: pretty, passes: prettyPasses } = await formatFixpoint(prettier, text, "css");
    if (pretty === text) throw new Error(`${rel}: prettier output is byte-identical to the capture`);
    const sourceFile = prettyRelFor(rel);
    fs.writeFileSync(path.join(proj, sourceFile), pretty);
    written.readable.add(path.basename(sourceFile));
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    sections.push({
      file: `${tag}.css`,
      wholeFile: true,
      title: `${tag} — stylesheet (whole-file, never sliced)`,
      desc: `Lines 1-${lines.length} of ${sourceFile}. Whole-file (stylesheet rule): the capture stylesheet is indexed whole in readable/, never sliced.`,
      note: "whole-file (stylesheet, not sliced): CSS is indexed whole in readable/",
      startLine: 1,
      endLine: lines.length,
      sourceFile,
    });
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses,
      fixpoint: true,
      tag,
      slices: 0,
      derived: "readable only (stylesheet, wholeFile)",
    });
    console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile stylesheet)`);
  }

  // ── 3) HTML entry document: inline <script>/<style> scan + twins + map ──
  const inlineMap = {
    note:
      "Content blocks of every inline <script>/<style> in the captured HTML documents. byteStart/byteEnd are content offsets (tags excluded, end exclusive) into the source document; sha256 is over those exact bytes. Blocks that are real JS/CSS were rendered to a readable twin with pinned prettier 3.9.6 (module API, rendered to fixpoint); typed data blocks (JSON-LD / application/json / importmap) would be recorded with their range + hash and never rendered — they are data, not code.",
    sources: [],
  };
  for (const rel of htmlRels) {
    const buf = captureBytes(rel);
    const blocks = scanBlocks(buf);
    const inline = blocks.filter((b) => !b.external);
    const external = blocks.filter((b) => b.external);
    inlineFiles.push(rel);
    for (const b of external)
      console.log(`derive: ${rel}: external ${b.kind} (not derived): ${b.tag.slice(0, 90)}`);
    const entryRec = {
      source: rel,
      sourceBytes: buf.length,
      sourceSha256: manifest.files[rel].sha256,
      scripts: inline.filter((b) => b.kind === "script").length,
      styles: inline.filter((b) => b.kind === "style").length,
      dataBlocks: 0,
      blocks: [],
    };
    if (!inline.length) {
      console.log(`derive: ${rel}: no inline <script>/<style> content blocks — no inline twins`);
    } else {
      const entryTag = rel.replace(/\.html$/i, "").split("/").join("__");
      for (const b of inline) {
        const isImportmap = b.kind === "importmap";
        const parser = isImportmap ? "json" : b.kind === "style" ? "css" : b.kind;
        const DATA_TYPES = new Set(["application/ld+json", "application/json", "importmap", "speculationrules"]);
        const type = (/\btype\s*=\s*["']?([^"'\s>]+)/i.exec(b.tag)?.[1] ?? "").toLowerCase();
        if (parser === "script" && DATA_TYPES.has(type)) {
          entryRec.dataBlocks++;
          notRendered.push({
            capture: rel,
            kind: "inline-data",
            type,
            byteStart: b.contentStart,
            byteEnd: b.contentEnd,
            bytes: b.bytes,
            sha256: b.sha256,
            rendered: false,
            reason: `typed data block (<script type="${type}">) — data, not JS/CSS; recorded with range + sha256, no pretty pass`,
          });
          continue;
        }
        const tag = `${entryTag}-inline-${b.block}`;
        const twinExt = isImportmap ? "json" : b.kind === "style" ? "css" : "js";
        const prettyFile = `${tag}.pretty.${twinExt}`;
        const { out: pretty, passes: prettyPasses } = await formatFixpoint(prettier, b.text, parser);
        if (pretty === b.text)
          throw new Error(`readable/${prettyFile} would be byte-identical to its capture source`);
        fs.writeFileSync(path.join(readableDir, prettyFile), pretty);
        written.readable.add(prettyFile);
        const lines = linesOf(pretty);
        const prettyBuf = Buffer.from(pretty, "utf8");
        entryRec.blocks.push({
          kind: b.kind === "style" ? "style" : "code",
          tagOpen: b.tag.split(">")[0] + ">",
          byteStart: b.contentStart,
          byteEnd: b.contentEnd,
          bytes: b.bytes,
          sha256: b.sha256,
          file: `readable/${prettyFile}`,
          parsedAs: parser,
          prettyPasses,
          prettyLines: lines.length,
          prettyBytes: prettyBuf.length,
          prettySha256: sha256(prettyBuf),
          note: `${lines.length} lines prettified from ${b.bytes} B of inline ${b.kind} #${b.block} (capture bytes ${b.contentStart}-${b.contentEnd} of ${rel})`,
        });
        sections.push({
          file: `${tag}.${twinExt}`,
          wholeFile: true,
          title: `${tag} — inline ${b.kind} block (whole-file, never sliced)`,
          desc: `Lines 1-${lines.length} of readable/${prettyFile}. Whole-file: the entry document's inline ${b.kind} block (${b.bytes} B at bytes ${b.contentStart}-${b.contentEnd} of ${rel}) is indexed whole and never sliced.`,
          note: `whole-file (entry inline ${b.kind} block, not sliced)`,
          startLine: 1,
          endLine: lines.length,
          sourceFile: `readable/${prettyFile}`,
        });
        sources.push({
          sourceFile: `readable/${prettyFile}`,
          capture: rel,
          captureKind: `inline-${b.kind}`,
          captureByteStart: b.contentStart,
          captureByteEnd: b.contentEnd,
          captureSha256: b.sha256,
          captureBytes: b.bytes,
          prettyLines: lines.length,
          prettyBytes: prettyBuf.length,
          prettySha256: sha256(prettyBuf),
          tag,
          slices: 0,
          derived: "readable only (inline block, wholeFile)",
        });
      }
    }
    if (entryRec.blocks.length) inlineMap.sources.push(entryRec);
  }
  fs.writeFileSync(path.join(readableDir, "index-inline-map.json"), JSON.stringify(inlineMap, null, 2) + "\n");

  // ── 4) prune orphan derived files (capture untouched) ──────────────────
  let pruned = 0;
  for (const [dir, keep, exts] of [
    [readableDir, written.readable, /\.(pretty\.js|pretty\.css)$/],
    [srcDir, written.src, /\.js$/],
  ]) {
    for (const f of fs.readdirSync(dir)) {
      if (exts.test(f) && !keep.has(f)) {
        fs.rmSync(path.join(dir, f));
        pruned++;
        console.log(`derive: pruned orphan derived file ${path.join(path.basename(dir), f)}`);
      }
    }
  }

  // ── 5) split-spec.json (2-space indent + trailing newline) ─────────────
  const appJs = sources.filter((s) => s.derived.startsWith("readable +"));
  const vendorJsS = sources.filter((s) => /wholeFile\)$/.test(s.derived) && s.capture.endsWith(".js"));
  const cssSources = sources.filter((s) => s.sourceFile.endsWith(".pretty.css"));
  const spec = {
    project: "zombie-game-made-by-claude",
    kind: "statement-aligned-slices",
    defaultFile: `src/${sections.find((s) => !s.wholeFile && !s.skipped).file}`,
    note:
      "ZOMBIE GAME MADE BY CLAUDE (\"LULLABY\") is capture-class: the itch.io HTML5 embed served from " +
      "https://html-classic.itch.zone/html/19679752/ (entry index.html -> assets/index-DaQlAVPp.js, a Vite-style ES-module " +
      "build with ~40 lazy chunks and runtime tex/ + audio/ asset banks). §0.4 fork-over-mirror was checked on " + TODAY +
      " — no public upstream repo exists (the itch page and the game bundle carry no repo link; GitHub search finds nothing " +
      "for the game or the author slug heromouteut-ai), so the mirror stands. Derived pipeline: capture → pinned prettier " +
      "3.9.6 (module API, default options, rendered to fixpoint (format until the output stops changing, max 5 passes) — never the CLI: it respects .gitignore and can " +
      "silently echo its input) → readable/<tag>.pretty.js per captured JS file (capture-root-relative name, dirs flattened " +
      "with __; every pretty provably NOT byte-identical to its capture source) → statement-aligned slices " +
      "src/<tag>-NN.js of every APP chunk (top-level declaration boundaries only, ~250-350 line windows; oversized single " +
      "declarations stay whole) with an exact 2-line provenance header. Every slice parses standalone under " +
      "`node --input-type=module --check -` and round-trips byte-exact to its recorded readable line range. Machinery rule " +
      "— the Vite build machinery at the head of the entry chunk (the __vite__mapDeps chunk table + the modulepreload " +
      "polyfill IIFE) is wholeFile. Vendor rule — the bundled three.js r185 region inside assets/index-DaQlAVPp.js " +
      "(constants/revision table through the WebGL renderer and the module namespace object) is wholeFile, content-anchored " +
      "between the license comment and the app's renderer factory and asserted. Non-standalone parts are skipped sections, " +
      "indexed but never sliced: every chunk's final export {…} table (the bindings live in the earlier slices). Inline " +
      "<script>/<style> scan: index.html carries one inline <style> content block (its readable twin " +
      "readable/index-inline-1.pretty.css is recorded in readable/index-inline-map.json with byte range + sha256); its " +
      "external scripts (the app chunk and itch's chrome script) are not derived. Identifiers in src/ are the bundle's own " +
      "minified names — the rename campaign (PLAN §5) is recorded as an open task in README.md, not claimed here. Capture " +
      "bytes are untouched by everything above; re-cut with `node tools/derive.mjs` after any capture refresh. " +
      "`node tools/audit.js` is the gate.",
    renderOptions: {
      _default:
        "prettier 3.9.6, module API, default options, rendered to fixpoint (format until the output stops changing, max 5 passes; most chunks 2) — never the CLI: it respects .gitignore and can silently echo its input",
      js: "parser babel, no plugins",
      passes: "format until fixpoint, max 5 (recorded per source as prettyPasses)",
      css: "parser css, no plugins",
      json: "parser json, no plugins (inline importmap blocks, if any)",
    },
    source:
      `readable/: ${sources.filter((s) => s.sourceFile?.endsWith(".pretty.js")).length} JS pretties ` +
      `(${appJs.length} chunk(s) sliced, ${vendorJsS.length} vendor wholeFile) + ` +
      `${cssSources.length} CSS pretties; ` +
      `src/: ${appJs.reduce((n, s) => n + s.slices, 0)} statement-aligned slices across ${appJs.length} chunk(s); ` +
      `${sections.filter((s) => s.skipped).length} skipped section(s); ` +
      `${sections.filter((s) => s.wholeFile).length} wholeFile section(s); ` +
      `capture: ${captured.length} files under .upstream/manifest.json; inline scan: ${inlineFiles.join(", ")} ` +
      `(${inlineMap.sources.reduce((n, s) => n + s.blocks.length, 0)} inline content block(s)); ` +
      `derived ${TODAY}.`,
    inline: {
      scanned: inlineFiles,
      contentBlocks: inlineMap.sources.reduce((n, s) => n + s.blocks.length, 0),
      notRendered: notRendered.length,
      note:
        "the captured entry document's only inline content block is the <style> block; its scripts are external " +
        "(./assets/index-DaQlAVPp.js module + https://static.itch.io/htmlgame.js itch chrome) — the style twin is " +
        "readable/index-inline-1.pretty.css recorded in readable/index-inline-map.json",
    },
    sources,
    sections,
    notRendered,
  };
  fs.writeFileSync(path.join(proj, "split-spec.json"), JSON.stringify(spec, null, 2) + "\n");

  // ── 6) self-check (tools/audit.js is the authoritative gate) ────────────
  let bad = 0;
  const bySource = new Map();
  for (const s of sections) {
    if (!bySource.has(s.sourceFile)) bySource.set(s.sourceFile, []);
    bySource.get(s.sourceFile).push(s);
  }
  for (const [sourceFile, list] of bySource) {
    const lines = readLines(path.join(proj, sourceFile));
    const sorted = [...list].sort((a, b) => a.startLine - b.startLine);
    if (sorted[0].startLine !== 1) {
      console.error(`TILING FAIL ${sourceFile}: starts at line ${sorted[0].startLine}`);
      bad++;
    }
    for (let i = 1; i < sorted.length; i++)
      if (sorted[i].startLine !== sorted[i - 1].endLine + 1) {
        console.error(`TILING FAIL ${sourceFile}: gap/overlap at ${sorted[i].file}`);
        bad++;
      }
    if (sorted[sorted.length - 1].endLine !== lines.length) {
      console.error(`TILING FAIL ${sourceFile}: does not reach EOF (${lines.length})`);
      bad++;
    }
  }
  let parsed = 0;
  let ranged = 0;
  let roundOK = 0;
  for (const s of sections) {
    if (s.wholeFile || s.skipped) continue;
    ranged++;
    const abs = path.join(srcDir, s.file);
    const text = fs.readFileSync(abs, "utf8");
    const nl2 = text.indexOf("\n", text.indexOf("\n") + 1);
    const body = text.slice(nl2 + 1);
    const expected = readLines(path.join(proj, s.sourceFile)).slice(s.startLine - 1, s.endLine).join("\n") + "\n";
    if (body !== expected) {
      console.error(`ROUND-TRIP FAIL ${s.file}`);
      bad++;
    } else roundOK++;
    if (!parses(text).ok) {
      console.error(`PARSE FAIL src/${s.file}`);
      bad++;
    } else parsed++;
  }
  let prettyParsed = 0;
  for (const s of sources) {
    if (!s.sourceFile?.endsWith(".pretty.js")) continue;
    if (!parses(fs.readFileSync(path.join(proj, s.sourceFile), "utf8")).ok) {
      console.error(`PARSE FAIL ${s.sourceFile}`);
      bad++;
    } else prettyParsed++;
  }
  console.log(
    `derive: ${written.readable.size} readable file(s), ${written.src.size} src slices ` +
      `(${parsed}/${ranged} parse standalone, ${roundOK}/${ranged} round-trip byte-exact), ` +
      `${skippedTotal} skipped, ${sections.filter((s) => s.wholeFile).length} wholeFile, ` +
      `${prettyParsed} pretty js parse clean, ${notRendered.length} notRendered, ${pruned} orphan(s) pruned — ` +
      `self-check ${bad ? bad + " FAILURE(S)" : "clean"}`,
  );
  if (bad) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
