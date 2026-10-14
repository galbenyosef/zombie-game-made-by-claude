// assets__district-BhfbivMT 18 — mat
// Lines 5637-5959 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
function Ut(n, t, e, r) {
  const o = e.o,
    l = e.rng,
    s = e.burnt,
    c = t.wheel,
    a = new P0();
  a.name = "vehicle_" + n;
  const h = new P0();
  ((h.name = "pose"), a.add(h));
  const f = new P0();
  ((f.name = "chassis"), h.add(f));
  const y = !s && !o.flat && l() < 0.3 ? Math.floor(l() * 4) : -1,
    m = (c.R - c.rim) * 0.55,
    b = c.axles || [c.zf, c.zr],
    v = [];
  for (const K of b)
    for (const O of [1, -1]) {
      const k = v.length,
        P = c.R - (c.rim + 0.022) - (l() - 0.5) * 0.02,
        W = o.flat || k === y;
      v.push({ x: O * c.x, z: K, drop: s ? P : W ? m : 0, flat: W, burnt: s });
    }
  const p = (K) => {
      const O = v.filter(K);
      return O.reduce((k, P) => k + P.drop, 0) / Math.max(1, O.length);
    },
    d = Math.max(...b),
    i = Math.min(...b),
    u = p((K) => K.z === d),
    x = p((K) => K.z === i),
    w = p((K) => K.x > 0),
    _ = p((K) => K.x < 0),
    M = p(() => !0);
  ((f.position.y = -M),
    (f.rotation.x = Math.atan2(u - x, d - i)),
    (f.rotation.z = -Math.atan2(w - _, 2 * c.x)));
  const C = new kn();
  for (const K of v) {
    const O = c.style === "cover" && l() < 0.25;
    go(e, C, K.x, c.R - K.drop, K.z, {
      R: c.R,
      rim: c.rim,
      w: c.w,
      style: c.style,
      burnt: K.burnt,
      squash: K.flat ? m : 0,
      noCover: O,
      lugs: c.lugs,
      segs: c.segs,
      dual: c.dual && K.z < 0,
    });
  }
  h.add(dn(C, "wheels"));
  const T = { ...(o.doors || {}) };
  if (s && !o.doors && t.doors.length && l() < 0.4) {
    const K = t.doors[Math.floor(l() * t.doors.length)];
    T[K.key] = 0.35 + l() * 0.8;
  }
  for (const [K, O] of e.sinks) {
    const k = dn(O, K),
      P = t.doors.find((W) => W.key === K);
    if (P) {
      const W = T[P.key] || 0,
        q = new P0();
      if (((q.name = "door_" + P.key), P.slide)) {
        const Y = ie(W / 1.2);
        (q.position.set(P.side * 0.07 * Math.min(1, Y * 4), 0, -1.05 * Y),
          q.add(k));
      } else {
        const Y = P.hinge,
          $ = P.side * (r.xAt(Y - 0.02, t.belt(Y) - 0.25) + 0.01);
        (q.position.set($, 0, Y),
          k.position.set(-$, 0, -Y),
          q.add(k),
          (q.rotation.y = -P.side * W),
          s && W > 0.2 && (q.rotation.z = P.side * 0.03));
      }
      f.add(q);
    } else if (K === "bonnet" && t.bonnet) {
      const W = o.bonnet ?? (s && l() < 0.4 ? 0.04 + l() * 0.1 : 0),
        q = t.top(t.bonnet[0]) - 0.02,
        Y = new P0();
      ((Y.name = "bonnet"),
        Y.position.set(0, q, t.bonnet[0] + 0.02),
        k.position.set(0, -q, -(t.bonnet[0] + 0.02)),
        Y.add(k),
        (Y.rotation.x = -W),
        f.add(Y));
    } else f.add(k);
  }
  let N = s
    ? t.fire
      ? new z(...t.fire)
      : new z(
          0,
          0.72,
          t.dress.engine
            ? (t.dress.engine[0] + t.dress.engine[1]) / 2
            : (t.z0 + t.z1) / 2,
        )
    : null;
  return _o(a, h, f, t, o, N);
}
function _o(n, t, e, r, o, l) {
  if (o.side) {
    ((t.rotation.z = Math.PI / 2 - 0.05), n.updateMatrixWorld(!0));
    const f = new on().setFromObject(t);
    t.position.set(-(f.min.x + f.max.x) / 2, -f.min.y, 0);
  }
  n.updateMatrixWorld(!0);
  const s = new on().setFromObject(n);
  l &&
    (l.applyMatrix4(e.matrixWorld),
    l.applyMatrix4(new J0().copy(n.matrixWorld).invert()));
  const c = {
      l: +(s.max.z - s.min.z).toFixed(3),
      w: +(s.max.x - s.min.x).toFixed(3),
      h: +(s.max.y - s.min.y).toFixed(3),
    },
    a = (f) => [+f.x.toFixed(3), +f.y.toFixed(3), +f.z.toFixed(3)],
    h = {
      group: n,
      size: c,
      fire: l ? a(l) : null,
      box: { min: a(s.min), max: a(s.max) },
    };
  return (o.hazards && !o.burnt && (h.update = Io), h);
}
function Io(n, t) {
  const e = zn().hazard;
  e.emissiveIntensity = (t * 1.45) % 1 < 0.5 ? 5 : 0;
}
function $t(n, t, e) {
  const r = n.burnt;
  ((n.cellColor = (o) =>
    o.col && (!r || o.mat === "paint")
      ? o.col
      : r
        ? o.mat === "paint" || o.mat === "metal"
          ? e
          : [0.05, 0.045, 0.04]
        : o.mat === "paint"
          ? e
          : o.mat === "trim"
            ? k0
            : o.mat === "metal"
              ? Ze
              : [1, 1, 1]),
    (n.jambColor = (o, l) => (r ? [0.05, 0.045, 0.04] : oe(l, 0.45))),
    (n.skin = (o) =>
      r
        ? { mat: "burnt", col: [0.06, 0.05, 0.045] }
        : o.part === "bonnet" || o.part === "boot"
          ? { mat: "paint", col: oe(e, 0.55) }
          : o.jh >= 10
            ? { mat: "trim", col: n.headliner || [0.3, 0.29, 0.27] }
            : { mat: "trim", col: [0.07, 0.07, 0.075] }),
    (n.paneTile = (o) => n.tiles.get(o.id) || 0),
    (n.paneUV = (o, l, s) => {
      if (o === t.ws || o === t.rw)
        return [l.x / 1.5 + 0.5, (l.z - o.z[0]) / (o.z[1] - o.z[0])];
      const c = s < Oe ? s : ne - 1 - s;
      return [(l.z - o.z[0]) / (o.z[1] - o.z[0]), (c - 7) / 2];
    }));
}
function Zt(n, t, e = 0.1, r = 0.18) {
  if (((n.tiles = new Map()), (n.shattered = new Set()), n.burnt)) return;
  const o = n.rng;
  for (const l of t.win) {
    const s = o();
    s < e
      ? n.shattered.add(l)
      : s < e + r && n.tiles.set(l.id, [3, 6, 2, 5][Math.floor(o() * 4)]);
  }
  for (const l of [t.ws, t.rw])
    l && o() < 0.3 && n.tiles.set(l.id, [1, 4, 7, 2][Math.floor(o() * 4)]);
  for (const l of ["back", "front"])
    o() < 0.2 && n.tiles.set(l, [1, 3, 6][Math.floor(o() * 3)]);
}
function To() {
  const r = [
      [4.3, 5.22],
      [3.12, 4.2],
      [1.94, 3.02],
      [0.76, 1.84],
      [-0.42, 0.66],
      [-1.6, -0.52],
      [-2.78, -1.7],
      [-3.96, -2.88],
      [-5.12, -4.06],
    ],
    o = [
      [4.84, 5.3],
      [2.54, 3.6],
      [1.38, 2.44],
      [-1.06, -0.06],
      [-2.22, -1.16],
      [-3.38, -2.32],
      [-4.54, -3.48],
      [-5.26, -4.64],
    ],
    l = [
      [3.7, 4.74],
      [0.02, 1.28],
    ],
    s = $e({
      L: 11.2,
      W: 2.55,
      H: 3.05,
      z0: -5.6,
      z1: 5.6,
      step: 0.4,
      colors: ["#2f7a54", "#2a5f9e", "#a83a2e", "#c8801c"],
      wheel: {
        R: 0.48,
        rim: 0.29,
        w: 0.275,
        zf: 2.9,
        zr: -2.4,
        x: 1.085,
        style: "bus",
        dual: !0,
      },
      wellDepth: 0.72,
      arches: [
        { z: 2.9, r: 0.57, y: 0.48 + 0.02 },
        { z: -2.4, r: 0.57, y: 0.48 + 0.02 },
      ],
      hw: W0([
        [-5.6, 1.17],
        [-5.57, 1.235],
        [-5.5, 1.262],
        [-5.35, 1.275],
        [5.35, 1.275],
        [5.5, 1.262],
        [5.57, 1.235],
        [5.6, 1.17],
      ]),
      bot: W0([
        [-5.6, 0.42],
        [-5.3, 0.36],
        [-4.8, 0.3],
        [4.8, 0.3],
        [5.4, 0.32],
        [5.6, 0.34],
      ]),
      belt: () => 1.22,
      top: W0([
        [-5.6, 2.8],
        [-5.56, 2.87],
        [-5.45, 2.92],
        [5.45, 2.92],
        [5.56, 2.87],
        [5.6, 2.8],
      ]),
      g: () => 1,
      gin: () => 0.05,
      crown: 0.13,
      roofPow: 4,
      bow: 0.004,
      sh: 0.012,
      tuck: 0.03,
      fg: [0, 0.04, 0.42, 0.72, 1],
      win: [
        ...r.map((c) => ({ id: "R" + c[0], side: -1, z: c })),
        ...o.map((c) => ({ id: "L" + c[0], side: 1, z: c })),
      ],
      pillars: [{ z: [-5.6, 5.6], mat: "trim" }],
      cabin: [-5.6, 5.6],
      frontHoles: [rt(-1.06, 1, 1.06, 2.5, 0.12)],
      backHoles: [rt(-0.85, 2.02, 0.85, 2.6, 0.08)],
      keys: [...l.flat()],
      doorsL: l,
      fire: [0, 0.95, -1.4],
      endSt: [0, 0.03, 0.09, 0.2],
      dress: { engine: null },
    });
  return (
    (s.cls = (c, a, h, f) => {
      const y = s.livery;
      (h === 9 && (c.mat = "paint"),
        c.mat === "paint" &&
          y &&
          (c.col =
            h <= 2 ? y.lower : h === 4 ? y.stripe : h >= 10 ? y.roof : y.cream),
        f > 0 &&
          h <= 8 &&
          l.some(([m, b]) => a > m && a < b) &&
          (c.mat = null));
    }),
    s
  );
}
function Ao(n) {
  const t = To(),
    e = Xt("bus", n, t),
    r = e.rng,
    o = e.burnt,
    l = me(n.color || t.colors[Math.floor(r() * t.colors.length)]);
  ((t.livery = {
    lower: l,
    cream: me("#e4e0d3"),
    stripe: me("#d6a11c"),
    roof: me("#c4c2ba"),
  }),
    (e.paintC = l),
    (e.tyreCol = [0.03, 0.03, 0.032]),
    (e.steelCol = [0.55, 0.56, 0.58]),
    (e.seatCol = me("#34466a")),
    (e.headliner = [0.42, 0.41, 0.38]),
    $t(e, t, l),
    Zt(e, t, 0.12, 0.2),
    (e.inside = !0),
    (e.dents = o
      ? [
          { x: 0.2, y: 2.92, z: -1.5, rx: 0.9, ry: 0.3, rz: 1.6, depth: 0.08 },
          { x: -0.3, y: 2.92, z: 2.2, rx: 0.8, ry: 0.3, rz: 1.2, depth: 0.05 },
        ]
      : []),
    Lt(t, e));
  const s = Vt(t);
  return (Fo(t, e, s), Wo(t, e), Ut("bus", t, e, s));
}
