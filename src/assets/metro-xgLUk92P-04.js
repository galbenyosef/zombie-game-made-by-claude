// assets/metro-xgLUk92P 04 — tag
// Lines 907-1243 of readable/assets/metro-xgLUk92P.pretty.js (statement-aligned).
function buildTunnelShell(c, a) {
  const { mats: o } = c,
    s = (d, l = {}, i = {}) => {
      const t = installMetroMaterialShader(o.get(d, l), i);
      return ((t.name = "m_" + d + (i.tag ? "_" + i.tag : "")), t);
    },
    f = (d, l = {}) => {
      const i = installMetroMaterialShader(new so(d), l);
      return ((i.name = "m_" + (l.tag || "plain")), i);
    },
    h = {
      tileCream: s(
        "metro_tile_cream",
        {},
        { tiles: [8, 16], bond: !0, grime: 1, streaks: 0.55, tag: "wall" },
      ),
      tileTeal: s(
        "metro_tile_teal",
        {},
        { tiles: [8, 16], bond: !0, grime: 1, streaks: 0.4, tag: "wall" },
      ),
      floor: s(
        "metro_floor",
        {},
        { wet: 1, wetLo: 0.47, roughAdd: -0.12, tag: "plat" },
      ),
      steel: s("metro_steel", {}, { grime: 0.5, tag: "col" }),
      ceil: s(
        "plaster_bare",
        { color: "#6e6a62", rough: 0.95 },
        { streaks: 0.25, tag: "ceil" },
      ),
      concrete: s("metro_concrete", {}, { grime: 1, streaks: 1, tag: "wall" }),
      concShaft: s(
        "metro_concrete",
        { color: "#9c9a93" },
        { grime: 1, streaks: 0.9, tag: "shaft" },
      ),
      concDark: s(
        "metro_concrete",
        { color: "#8a857a" },
        { grime: 1, streaks: 0.8, soot: 0.6, tag: "tun" },
      ),
      concFloor: s(
        "metro_concrete",
        { color: "#a49d90" },
        { wet: 1, wetLo: 0.52, tag: "flr" },
      ),
      bed: s(
        "metro_concrete",
        { color: "#7a746a" },
        { wet: 1, wetLo: 0.5, tag: "bed" },
      ),
      coping: s(
        "metro_concrete",
        { color: "#c6bfae" },
        { wet: 0.7, wetLo: 0.62, tag: "cope" },
      ),
      tactile: s(
        "tactile_paving",
        { color: "#d8c890" },
        { wet: 0.5, wetLo: 0.66, tag: "tac" },
      ),
      paintLow: s(
        "metro_paint",
        { color: "#6f7e70" },
        { grime: 1, streaks: 0.5, tag: "lo" },
      ),
      paintHigh: s(
        "metro_paint",
        { color: "#c4bea9" },
        { grime: 0.6, streaks: 0.5, tag: "hi" },
      ),
      paintLine: f({ color: "#2a2a26", roughness: 0.6 }, { tag: "line" }),
      lining: s("metro_lining", {}, { soot: 1, streaks: 0.5, tag: "tube" }),
      sleeper: s("concrete_grey", { color: "#8c887e" }, { tag: "slp" }),
      rust: s("rust_metal", {}, { tag: "rust" }),
      railHead: f(
        { color: "#a9a8a2", roughness: 0.22, metalness: 1 },
        { tag: "rail", ptSpec: !0 },
      ),
      iron: s("iron_black", {}, { tag: "iron" }),
      galv: f(
        { color: "#7f8483", roughness: 0.6, metalness: 0.75 },
        { tag: "galv" },
      ),
      galvDark: f(
        { color: "#5d6261", roughness: 0.6, metalness: 0.7 },
        { tag: "galvd" },
      ),
      housing: f(
        { color: "#bdbab0", roughness: 0.55, metalness: 0.2 },
        { tag: "housing" },
      ),
      black: f({ color: "#0d0d0c", roughness: 0.8 }, { tag: "black" }),
      rubber: f({ color: "#151514", roughness: 0.7 }, { tag: "rubber" }),
      wood: s("wood_oak_pale", { color: "#9a7a58" }, { tag: "bench" }),
      woodDark: s("wood_walnut", {}, { tag: "wd" }),
      cable: f({ color: "#1c1c1b", roughness: 0.55 }, { tag: "cable" }),
      cableR: f({ color: "#4a1a14", roughness: 0.55 }, { tag: "cabler" }),
      pipeRed: f(
        { color: "#5a1814", roughness: 0.5, metalness: 0.3 },
        { tag: "piper" },
      ),
      machine: s("metro_steel", { color: "#c8a8a0" }, { tag: "machine" }),
      yellow: f({ color: "#b8962a", roughness: 0.55 }, { tag: "yel" }),
      cover: f({ color: "#6a5c36", roughness: 0.7 }, { tag: "cover" }),
      nosing: f({ color: "#8c7428", roughness: 0.72 }, { tag: "nosing" }),
      leather: s("leather_brown", { color: "#5a3a2a" }, { tag: "lea" }),
      fabric: s("wool_grey", { color: "#4a5a6a" }, { tag: "fab" }),
      fabricR: s("wool_grey", { color: "#7a2a24" }, { tag: "fabr" }),
      sheet: s("linen_stained", { color: "#c4c4bf" }, { tag: "sheet" }),
      foil: f(
        { color: "#c9ad62", roughness: 0.22, metalness: 1 },
        { tag: "foil" },
      ),
      paper: s("paper_old", { color: "#9a958a" }, { tag: "paper" }),
      plastic: f({ color: "#2a3036", roughness: 0.45 }, { tag: "plas" }),
      plasticW: f({ color: "#c8c6be", roughness: 0.4 }, { tag: "plasw" }),
      enamel: s(
        "metro_enamel",
        {},
        { tiles: [1, 2], tileK: 0.5, grime: 0.7, streaks: 0.3, tag: "en" },
      ),
      stone: s("metro_stone", {}, { wet: 0.7, wetLo: 0.64, tag: "st" }),
      stainless: s("metro_stainless", {}, { tag: "ss", ptSpec: !0 }),
      panelDark: f(
        { color: "#262b30", roughness: 0.45, metalness: 0.3 },
        { tag: "pdark" },
      ),
      ceilPanel: f(
        { color: "#9a9a96", roughness: 0.6, metalness: 0.4 },
        { tag: "cpanel" },
      ),
      glass: f(
        {
          color: "#9fb4b4",
          roughness: 0.06,
          metalness: 0.1,
          transparent: !0,
          opacity: 0.16,
          depthWrite: !1,
        },
        { tag: "glass", ptSpec: !0 },
      ),
      asphalt: s("street_asphalt", {}, { wet: 0.8, wetLo: 0.55, tag: "asph" }),
      pavers: s("sidewalk_tiles", {}, { wet: 0.7, wetLo: 0.6, tag: "pav" }),
    };
  return (
    (h.signs = f(
      { map: a.signs.tex, roughness: 0.38, metalness: 0 },
      { tag: "signs" },
    )),
    (h.print = f(
      { map: a.signs.tex, roughness: 0.85, metalness: 0, side: Lo },
      { tag: "print" },
    )),
    (h.frieze = f(
      { map: a.frieze.tex, roughness: 0.16, metalness: 0 },
      { tag: "frieze" },
    )),
    (h.decal = f(
      {
        map: a.decals.tex,
        roughness: 0.25,
        transparent: !0,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -4,
      },
      { tag: "decal" },
    )),
    (h.decalMatt = f(
      {
        map: a.decals.tex,
        roughness: 0.85,
        transparent: !0,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -4,
      },
      { tag: "decalm" },
    )),
    (h.glowSign = st([2.2, 2.2, 2.2], {
      base: 2236962,
      emissiveMap: a.glows.tex,
      map: a.glows.tex,
      name: "m_glowsign",
      rough: 0.3,
    })),
    (h.tube = st([3.4, 3.75, 3.6], {
      name: "m_tube",
      base: 13226188,
      rough: 0.3,
    })),
    (h.diffuser = st([1.25, 1.38, 1.32], {
      name: "m_diffuser",
      base: 8159099,
      rough: 0.5,
    })),
    (h.sodium = st([5, 2.4, 0.55], {
      name: "m_sodium",
      base: 6969920,
      rough: 0.3,
    })),
    (h.redLamp = st([4, 0.5, 0.25], {
      name: "m_red",
      base: 4854288,
      rough: 0.3,
    })),
    (h.greenLamp = st([0.3, 3.2, 0.9], {
      name: "m_green",
      base: 1060890,
      rough: 0.3,
    })),
    (h.amberLamp = st([3.6, 1.8, 0.3], {
      name: "m_amber",
      base: 4204556,
      rough: 0.3,
    })),
    (h.warmBulb = st([4.2, 2.6, 1.2], {
      name: "m_bulb",
      base: 8022608,
      rough: 0.3,
    })),
    (h.led = st([3, 3.1, 3.2], { name: "m_led", base: 9079948, rough: 0.4 })),
    (h.dawn = st([0.55, 0.75, 1.15], {
      name: "m_dawn",
      base: 1054752,
      rough: 1,
    })),
    h
  );
}
const nt = 'Corbel, "Gill Sans MT", "Segoe UI", Arial, sans-serif',
  R0 = 'Bahnschrift, "DIN Alternate", "Segoe UI", Arial, sans-serif',
  ft = 'Georgia, "Times New Roman", serif';
function Ve(c) {
  let a = c | 0;
  return () => {
    a = (a + 1831565813) | 0;
    let o = Math.imul(a ^ (a >>> 15), 1 | a);
    return (
      (o = (o + Math.imul(o ^ (o >>> 7), 61 | o)) ^ o),
      ((o ^ (o >>> 14)) >>> 0) / 4294967296
    );
  };
}
class ne {
  constructor(a, o, { alpha: s = !1, bg: f = "#000" } = {}) {
    ((this.W = a),
      (this.H = o),
      (this.cv = document.createElement("canvas")),
      (this.cv.width = a),
      (this.cv.height = o),
      (this.g = this.cv.getContext("2d")),
      (this.rects = {}),
      (this.items = []),
      s || ((this.g.fillStyle = f), this.g.fillRect(0, 0, a, o)));
  }
  put(a, o, s, f) {
    this.items.push({ name: a, w: o, h: s, draw: f });
  }
  pack() {
    const a = this.g;
    let o = 0,
      s = 0,
      f = 0;
    for (const h of [...this.items].sort((d, l) => l.h - d.h || l.w - d.w)) {
      if (
        (o + h.w > this.W && ((o = 0), (s += f + 4), (f = 0)), s + h.h > this.H)
      ) {
        console.warn("[metro signs] atlas full at " + h.name);
        continue;
      }
      (a.save(),
        a.translate(o, s),
        a.beginPath(),
        a.rect(0, 0, h.w, h.h),
        a.clip(),
        h.draw(a, h.w, h.h),
        a.restore(),
        (this.rects[h.name] = [
          (o + 0.5) / this.W,
          1 - (s + h.h - 0.5) / this.H,
          (o + h.w - 0.5) / this.W,
          1 - (s + 0.5) / this.H,
        ]),
        (o += h.w + 4),
        (f = Math.max(f, h.h)));
    }
    return ((this.items.length = 0), this);
  }
  texture(a = !0) {
    const o = new lo(this.cv);
    return (
      (o.colorSpace = a ? ro : Bo),
      (o.anisotropy = 8),
      (o.minFilter = Oo),
      (o.generateMipmaps = !0),
      o
    );
  }
}
function P0(c, a, o, s, f = 1, h = "40,32,24") {
  for (let l = 0; l < 18 * f; l++) {
    const i = s() * a,
      t = s() * o,
      e = (0.1 + s() * 0.35) * Math.max(a, o),
      n = c.createRadialGradient(i, t, 0, i, t, e);
    (n.addColorStop(0, `rgba(${h},${(0.05 + s() * 0.08) * f})`),
      n.addColorStop(1, `rgba(${h},0)`),
      (c.fillStyle = n),
      c.fillRect(0, 0, a, o));
  }
  const d = c.createLinearGradient(0, 0, 0, o);
  (d.addColorStop(0, `rgba(${h},${0.12 * f})`),
    d.addColorStop(0.15, `rgba(${h},0)`),
    d.addColorStop(0.85, `rgba(${h},0)`),
    d.addColorStop(1, `rgba(${h},${0.2 * f})`),
    (c.fillStyle = d),
    c.fillRect(0, 0, a, o));
  for (let l = 0; l < 260 * f; l++)
    ((c.fillStyle = `rgba(${h},${0.1 + s() * 0.25})`),
      c.fillRect(s() * a, s() * o, 1 + s() * 2, 1 + s() * 2));
  ((c.strokeStyle = `rgba(255,255,255,${0.05 * f})`), (c.lineWidth = 1));
  for (let l = 0; l < 14 * f; l++) {
    const i = s() * a,
      t = s() * o;
    (c.beginPath(),
      c.moveTo(i, t),
      c.lineTo(i + (s() - 0.5) * a * 0.3, t + (s() - 0.5) * o * 0.1),
      c.stroke());
  }
}
