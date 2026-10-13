// assets__index-TPd_HXBJ 08 — col
// Lines 2311-2638 of readable/assets__index-TPd_HXBJ.pretty.js (statement-aligned).
function ta(t, e, o, n, a) {
  (_0(t, e, o, n, a),
    (t.fillStyle = "#e8ecea"),
    (t.font = `bold 44px ${Wt}`),
    (t.textAlign = "left"),
    t.fillText("4 0 1 3", e + 8, o + 50),
    (t.font = `bold 22px ${x}`),
    t.fillText("METRO  -  LINE 4", e + 10, o + 100));
}
function ea(t, e, o, n, a) {
  (J(t, e, o, n, a, "#020403"),
    (t.fillStyle = "#ffb020"),
    (t.font = 'bold 22px "Courier New", monospace'),
    (t.textAlign = "left"),
    t.fillText("AUTOMATIC  OPERATION", e + 12, o + 40),
    t.fillText("NEXT: PARKGATE", e + 12, o + 78),
    t.fillText("DWELL  25 s", e + 12, o + 112),
    Mt(t, e, o, n, a, (l) => l > 80));
}
function oa(t, e, o, n, a, l) {
  _0(t, e, o, n, a);
  const r = e + n * 0.3,
    p = o + a * 0.5;
  for (let f = 0; f < 160; f++) {
    const c = (l() - 0.5) * 1.2,
      d = l() * n * 0.8,
      i = (1 - d / (n * 0.8)) * 9 * l() + 1;
    ((t.fillStyle = `rgba(80,6,6,${0.5 + l() * 0.45})`),
      t.beginPath(),
      t.ellipse(r + Math.cos(c) * d, p + Math.sin(c) * d, i * 1.8, i, c, 0, 7),
      t.fill());
  }
  ((t.fillStyle = "rgba(70,5,5,0.9)"),
    t.beginPath(),
    t.ellipse(r, p, 40, 30, 0, 0, 7),
    t.fill());
}
function na(t, e, o, n, a, l) {
  _0(t, e, o, n, a);
  for (let r = 0; r < 60; r++) {
    const p = e + l() * n,
      f = o + l() * a,
      c = 20 + l() * 80,
      d = t.createRadialGradient(p, f, 0, p, f, c);
    (d.addColorStop(0, `rgba(30,24,16,${0.15 + l() * 0.2})`),
      d.addColorStop(1, "rgba(30,24,16,0)"),
      (t.fillStyle = d),
      t.fillRect(p - c, f - c, c * 2, c * 2));
  }
}
function aa(t, e, o, n, a, l) {
  (_0(t, e, o, n, a), t.save(), t.translate(e + n / 2, o + a * 0.35));
  for (let r = 0; r < 4; r++)
    ((t.fillStyle = `rgba(88,8,6,${0.6 - r * 0.1})`),
      t.beginPath(),
      t.ellipse(-36 + r * 24, -40, 12, 30, 0, 0, 7),
      t.fill());
  ((t.fillStyle = "rgba(88,8,6,0.75)"),
    t.beginPath(),
    t.ellipse(0, 20, 50, 48, 0, 0, 7),
    t.fill());
  for (let r = 0; r < 5; r++)
    ((t.fillStyle = `rgba(88,8,6,${0.3 + l() * 0.3})`),
      t.fillRect(-40 + r * 18, 40, 8, 60 + l() * 60));
  t.restore();
}
function la(t, e, o, n, a, l) {
  (_0(t, e, o, n, a),
    (t.fillStyle = "rgba(75,6,6,0.85)"),
    t.fillRect(e + 20, o + 20, n - 40, 22));
  for (let r = 0; r < 26; r++) {
    const p = e + 30 + l() * (n - 60),
      f = 30 + l() * (a - 70),
      c = 3 + l() * 8;
    (t.fillRect(p, o + 30, c, f),
      t.beginPath(),
      t.arc(p + c / 2, o + 30 + f, c * 0.8, 0, 7),
      t.fill());
  }
}
const h = {
    HL: 8.8,
    HW: 1.4,
    FL: 1.1,
    IW: 1.3,
    CEIL: 3.32,
    END: 8.75,
    doors: [-6, 0, 6],
    DW: 1.3,
    DHEAD: 3,
    LEAF: 0.67,
    TRAVEL: 0.68,
    LZ0: 1.336,
    LZ1: 1.37,
    winY0: 1.95,
    winY1: 2.95,
    gIn: 1.372,
    gOut: 1.384,
    cabX: 7.05,
    bogieX: 6.25,
    wheelR: 0.42,
    axle: 1.05,
    seatY: 1.55,
    seatZ: 0.82,
    railY: 3.03,
    railZ: 0.8,
    cove: [
      [1.04, 3.27],
      [1.3, 3.06],
    ],
    led: [
      [0.76, 3.3],
      [1.04, 3.27],
    ],
  },
  be = [
    [-8.45, -7.42],
    [-4.6, -3.08],
    [-2.92, -1.4],
    [1.4, 2.92],
    [3.08, 4.6],
    [7.42, 8.45],
  ],
  ho = (t) =>
    t === "mid"
      ? [
          [-8.62, -6.83, 3],
          [-5.17, -0.83, 8],
          [0.83, 5.17, 8],
          [6.83, 8.62, 3],
        ]
      : [
          [-8.62, -6.83, 3],
          [-5.17, -0.83, 8],
          [0.83, 5.17, 8],
        ],
  Qe = (t) => [t, t, t],
  g = {
    side: _({ col: "#909090", rough: 0.3, metal: 1, kind: O.BAND }),
    front: _({ col: "#909090", rough: 0.3, metal: 1, kind: O.BAND, param: 2 }),
    leafOut: _({
      col: "#909090",
      rough: 0.3,
      metal: 1,
      kind: O.BAND,
      param: 1,
    }),
    steel: _({ col: "#a2a2a0", rough: 0.28, metal: 1, kind: O.STEEL }),
    steelY: _({
      col: "#a2a2a0",
      rough: 0.26,
      metal: 1,
      kind: O.STEEL,
      param: 1,
    }),
    steelZ: _({
      col: "#a2a2a0",
      rough: 0.28,
      metal: 1,
      kind: O.STEEL,
      param: 2,
    }),
    pole: _({ col: "#b4b4b2", rough: 0.18, metal: 1, kind: O.STEEL, param: 1 }),
    railS: _({
      col: "#b4b4b2",
      rough: 0.18,
      metal: 1,
      kind: O.STEEL,
      param: 0,
    }),
    roof: _({ col: "#7a7b79", rough: 0.45, metal: 0.85, kind: O.STEEL }),
    alu: _({ col: "#8c8c88", rough: 0.4, metal: 1, kind: O.PLAIN }),
    mask: _({ col: "#0a0b0c", rough: 0.2, kind: O.MASK }),
    under: _({ col: "#17181a", rough: 0.7, metal: 0.3, kind: O.UNDER }),
    underG: _({ col: "#2a2c2e", rough: 0.65, metal: 0.4, kind: O.UNDER }),
    rubber: _({ col: "#0c0c0d", rough: 0.8, kind: O.RUBBER }),
    black: _({ col: "#0e0e0f", rough: 0.5, kind: O.PAINT }),
    lining: _({ col: "#a19e92", rough: 0.42, kind: O.LINING }),
    liningG: _({ col: "#9c9a92", rough: 0.45, kind: O.LINING }),
    cabLin: _({ col: "#3c3e40", rough: 0.55, kind: O.LINING }),
    floor: _({ col: Qe(0.385), rough: 0.7, kind: O.FLOOR }),
    cabFloor: _({ col: "#232426", rough: 0.8, kind: O.PAINT }),
    fabric: _({ col: Qe(0.5), rough: 0.9, kind: O.FABRIC }),
    shell: _({ col: "#3b3e41", rough: 0.45, kind: O.PAINT }),
    kick: _({ col: "#8e8e8a", rough: 0.35, metal: 1, kind: O.STEEL }),
    grille: _({ col: "#151617", rough: 0.6, metal: 0.4, kind: O.PAINT }),
    slots: _({ col: "#b2ada0", rough: 0.45, kind: O.SLOTS, param: 0 }),
    heater: _({
      col: "#8e8e8a",
      rough: 0.4,
      metal: 1,
      kind: O.SLOTS,
      param: 0,
    }),
    slotsExt: _({
      col: "#2a2c2e",
      rough: 0.6,
      metal: 0.4,
      kind: O.SLOTS,
      param: 0,
    }),
    led: _({ col: "#b8bab6", rough: 0.35, kind: O.LED }),
    decal: _({ col: "#ffffff", rough: 0.45, kind: O.DECAL }),
    route: _({ col: "#ffffff", rough: 0.35, kind: O.ROUTE }),
    scroll: _({ col: "#ffffff", rough: 0.3, kind: O.SCROLL, param: 2.6 }),
    dispGlow: (t) => _({ col: "#ffffff", rough: 0.3, kind: O.GLOW, param: t }),
    head: _({ col: "#ffffff", rough: 0.1, kind: O.HEAD }),
    tail: _({ col: "#ffffff", rough: 0.1, kind: O.TAIL }),
    doorLamp: (t) =>
      _({ col: "#ffffff", rough: 0.1, kind: O.DOORLAMP, param: t > 0 ? 1 : 0 }),
    button: (t) =>
      _({ col: "#ffffff", rough: 0.3, kind: O.BUTTON, param: t > 0 ? 1 : 0 }),
    yellow: _({ col: "#c8a020", rough: 0.5, kind: O.PAINT }),
    red: _({ col: "#9a1a16", rough: 0.35, kind: O.PAINT }),
    seatBlack: _({ col: "#151515", rough: 0.55, kind: O.PAINT }),
    console: _({ col: "#2a2c2e", rough: 0.5, kind: O.PAINT }),
    glass: _({ col: "#2a3432", rough: 0.04, kind: 0, param: 0.12 }),
    screen: _({ col: "#3a4442", rough: 0.04, kind: 2, param: 0.05 }),
    wind: _({ col: "#1c2422", rough: 0.03, kind: 1, param: 0.16 }),
  },
  At = (t) => (t > 0 ? null : gn);
function Ht(t, e) {
  if (!e) return t;
  const o = t.index.array;
  for (let n = 0; n < o.length; n += 3) {
    const a = o[n + 1];
    ((o[n + 1] = o[n + 2]), (o[n + 2] = a));
  }
  return t;
}
function X(t, e, o, n, a, l, r, p, f = {}) {
  const c = (i, s) => [
      e.x + o.x * i + n.x * s,
      e.y + o.y * i + n.y * s,
      e.z + o.z * i + n.z * s,
    ],
    d = h0(
      c(-a / 2, -l / 2),
      c(a / 2, -l / 2),
      c(a / 2, l / 2),
      c(-a / 2, l / 2),
    );
  t.add(d, null, p, { uv: ct(r), ...f });
}
const mo = [
    [0, 0.93],
    [1.33, 0.93],
    [1.36, 0.935],
    [1.4, 0.97],
  ],
  go = [
    [1.4, 3.1],
    [1.395, 3.2],
    [1.376, 3.29],
    [1.337, 3.37],
    [1.272, 3.445],
    [1.18, 3.51],
    [1.06, 3.556],
    [0.9, 3.592],
    [0.7, 3.612],
    [0.4, 3.62],
    [0, 3.62],
  ],
  ra = [
    [0, 3.32],
    [0.76, 3.32],
    [0.76, 3.3],
  ];
function ge() {
  const t = [...mo.slice(1), ...go.slice(0, -1)],
    e = t
      .slice()
      .reverse()
      .map(([o, n]) => [-o, n]);
  return [[-1.33, 0.93], ...t, [0, 3.62], ...e];
}
function jt(t = 0, e = 0) {
  const o = [
    [1.3, 3.06],
    [1.04, 3.27],
    [0.76, 3.3],
    [0.76, 3.32],
    [-0.76, 3.32],
    [-0.76, 3.3],
    [-1.04, 3.27],
    [-1.3, 3.06],
  ];
  return [
    ...(t > 0
      ? [
          [-1.3, 1.1],
          [-t, 1.1],
          [-t, e],
          [t, e],
          [t, 1.1],
          [1.3, 1.1],
        ]
      : [
          [-1.3, 1.1],
          [1.3, 1.1],
        ]),
    ...o,
  ];
}
function Je(t, e, o) {
  const n = new M0("ext"),
    a = new M0("int"),
    l = new M0("gIn"),
    r = new M0("gOut"),
    p = new M0("dec"),
    f = {
      type: t,
      lod: e,
      hi: e === "hi",
      rng: o,
      x0: -8.75,
      x1: t === "cab" ? h.cabX : h.END,
    };
  for (const c of [1, -1]) (sa(n, a, l, r, c, f), ia(n, a, l, r, c));
  return (
    ca(n),
    da(a, l, r, p, f),
    fa(n, a, l, r, f),
    t === "cab" && ba(n, a, l, r),
    va(n),
    { ext: n, int: a, gIn: l, gOut: r, dec: p, info: f }
  );
}
