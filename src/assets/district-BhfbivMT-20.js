// assets/district-BhfbivMT 20 — back
// Lines 6377-6588 of readable/assets/district-BhfbivMT.pretty.js (statement-aligned).
function Wo(n, t) {
  const e = t.sink("interior"),
    r = t.burnt,
    o = t.rng,
    l = r ? "burnt" : "trim",
    s = r ? [0.05, 0.045, 0.04] : [0.05, 0.05, 0.055],
    c = 1.2,
    a = 0.36,
    h = 0.74,
    f = -0.55;
  (U(
    e,
    l,
    new p0(c * 2, 0.04, 5.4 - f),
    Z(0, a - 0.02, (5.4 + f) / 2),
    r ? s : [0.12, 0.12, 0.11],
  ),
    U(
      e,
      l,
      new p0(c * 2, 0.04, f + 5.45),
      Z(0, h - 0.02, (f - 5.45) / 2),
      r ? s : [0.12, 0.12, 0.11],
    ),
    U(e, l, new p0(c * 2, h - a, 0.04), Z(0, (a + h) / 2, f), s));
  const y = (v, p, d) =>
    U(
      e,
      l,
      new p0(0.04, 1.22 - a, d - p),
      Z(v * (c + 0.02), (1.22 + a) / 2, (p + d) / 2),
      r ? s : [0.2, 0.2, 0.19],
    );
  (y(-1, -5.45, 5.4), y(1, 4.74, 5.4), y(1, 1.28, 3.7), y(1, -5.45, 0.02));
  for (const [v, p] of [
    [n.wheel.zf, 0.98],
    [n.wheel.zr, 1.12],
  ])
    for (const d of [1, -1])
      U(e, l, g0(0.46, p - 0.3, 1.2, 0.08), Z(d * 0.97, (p + 0.3) / 2, v), s);
  (U(e, l, g0(2.3, 0.45, 0.4, 0.05), Z(0, 0.9, 5.32), s),
    U(
      e,
      r ? "iron" : "trim",
      new Ve(0.23, 0.02, 4, 16),
      Z(-0.72, 1.18, 4.98, 1.15),
      k0,
    ),
    qe(t, e, -0.72, 0.84, 4.25, 0.5),
    U(
      e,
      r ? "iron" : "metal",
      new p0(0.3, 0.9, 0.3),
      Z(0.2, a + 0.45, 4.62),
      r ? [1, 1, 1] : [0.35, 0.36, 0.38],
    ));
  for (const v of [3.2, 2.35, 1.5])
    qe(t, e, -0.92, a + 0.44, v, 0.45, { head: !1, back: 0.5, lite: !0 });
  for (const v of [3.3, 2.5])
    qe(t, e, 0.92, a + 0.62, v, 0.45, { head: !1, back: 0.5, lite: !0 });
  for (let v = -1.1; v > -4.6; v -= 0.8)
    for (const p of [1, -1])
      qe(t, e, p * 0.74, h + 0.44, v, 0.86, { head: !1, back: 0.5, lite: !0 });
  qe(t, e, 0, h + 0.46, -5.3, 2.2, { head: !1, back: 0.55, lite: !0 });
  const m = r ? "iron" : "metal",
    b = r ? [1, 1, 1] : me("#d9a520");
  for (const [v, p, d] of [
    [0.42, 3.55, a],
    [-0.42, 2.8, a],
    [0.42, 1.4, a],
    [-0.42, 0.3, a],
    [0.36, -0.6, a],
    [-0.36, -1.5, h],
    [0.36, -2.3, h],
    [-0.36, -3.1, h],
    [0.36, -3.9, h],
    [-0.36, -4.7, h],
  ]) {
    if (r && o() < 0.2) {
      f0(
        e,
        m,
        new z(v, d, p),
        new z(v + 0.6, d + 0.9, p + 0.3),
        0.035,
        0.035,
        new z(0, 0, 1),
        b,
      );
      continue;
    }
    f0(
      e,
      m,
      new z(v, d, p),
      new z(v, 2.25, p),
      0.035,
      0.035,
      new z(0, 0, 1),
      b,
    );
  }
  for (const v of [1, -1])
    f0(
      e,
      m,
      new z(v * 0.52, 2.25, -5.2),
      new z(v * 0.52, 2.25, 4.4),
      0.03,
      0.03,
      L0,
      r ? [1, 1, 1] : [0.6, 0.6, 0.62],
    );
  if (r)
    for (let v = 0; v < 7; v++)
      U(
        e,
        "char",
        g0(0.5 + o() * 0.6, 0.06, 0.4 + o() * 0.6, 0.02),
        Z((o() - 0.5) * 1.8, h + 0.03, -1 - o() * 4.2, 0, o() * 3),
      );
}
function Co() {
  return $e({
    L: 7,
    W: 2.42,
    H: 2.95,
    z0: 0.72,
    z1: 2.08,
    step: 0.2,
    wheel: {
      R: 0.53,
      rim: 0.3,
      w: 0.32,
      zf: 2.55,
      zr: -2.9,
      axles: [2.55, -1.6, -2.9],
      x: 0.99,
      style: "army",
      lugs: 8,
      segs: 16,
    },
    arches: [],
    hw: W0([
      [0.72, 1.07],
      [0.76, 1.095],
      [0.85, 1.105],
      [1.95, 1.105],
      [2.04, 1.095],
      [2.08, 1.075],
    ]),
    bot: () => 1.02,
    belt: () => 1.74,
    top: W0([
      [0.72, 2.37],
      [0.76, 2.42],
      [0.84, 2.45],
      [1.9, 2.45],
      [1.95, 2.44, "c"],
      [2.05, 1.76, "c"],
      [2.08, 1.745],
    ]),
    g: tt([
      [0.72, 1],
      [1.95, 1],
      [2.05, 0],
      [2.08, 0],
    ]),
    gin: () => 0.04,
    crown: 0.03,
    bow: 0,
    sh: 0.015,
    tuck: 0.012,
    beltMat: "paint",
    frameMat: "paint",
    doors: ge([{ key: "f", lo: [0.98, 1.93], up: [0.98, 1.93], hinge: 1.93 }]),
    win: ge([{ id: "f", z: [1.06, 1.87] }]),
    ws: { id: "ws", z: [1.95, 2.05], frit: [1.953, 2.047] },
    cabin: [0.72, 2.05],
    fullSkin: !0,
    backHoles: [rt(-0.5, 1.95, 0.5, 2.25, 0.03)],
    backGlass: [-0.5, 1.95, 0.5, 2.25],
    fire: [0, 1.35, 2.7],
    dress: {
      engine: null,
      cabin: { floor: 1.08, seatF: 1.1, dash: 2.05, bench: !1 },
    },
  });
}
function Yo(n) {
  const t = Co(),
    e = Xt("armytruck", n, t);
  e.rng;
  const r = e.burnt,
    o = me(n.color || "#363b2b");
  ((e.paintC = o),
    (e.tyreCol = [0.035, 0.035, 0.036]),
    (e.steelCol = oe(o, 0.8)),
    (e.seatCol = me("#3e3f2e")),
    (e.headliner = oe(o, 0.7)));
  const l = e.K;
  ((e.K = (c) => (!r && c === "paint" ? "trim" : l(c))),
    $t(e, t, o),
    Zt(e, t, 0.15, 0.25),
    (e.inside = !0),
    (e.dents = r
      ? [{ x: 0, y: 2.45, z: 1.4, rx: 0.6, ry: 0.2, rz: 0.4, depth: 0.05 }]
      : []),
    Lt(t, e));
  const s = Vt(t);
  return (Go(t, e, s, o), buildVehicleInterior(t, e), Ut("armytruck", t, e, s));
}
