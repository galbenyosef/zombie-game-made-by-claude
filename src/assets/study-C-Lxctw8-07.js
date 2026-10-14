// assets/study-C-Lxctw8 07 — math
// Lines 1957-2069 of readable/assets/study-C-Lxctw8.pretty.js (statement-aligned).
function Eo(I, L, u) {
  const c = L("wood_ebony"),
    b = L("wood_oak_pale", { color: "#c49a4a" }),
    e = L("linen_stained", { color: "#d8cdb2", side: F0 }),
    a = L("iron_black"),
    n = L("wood_walnut");
  I.box(n, 0.36, 0.022, 0.1, [0, 0.011, 0], { r: 0.004 });
  for (const P of [-0.1, 0.1])
    I.box(n, 0.018, 0.05, 0.06, [P, 0.045, 0], { r: 0.003 });
  const t = [],
    h = 16,
    s = 0.46;
  for (let P = 0; P <= 20; P++) {
    const i = P / 20,
      v = -s / 2 + i * s,
      G =
        0.05 * Math.pow(Math.sin(Math.PI * Math.min(1, 0.08 + i * 0.95)), 0.6),
      S =
        0.055 *
        Math.pow(Math.sin(Math.PI * Math.min(1, 0.05 + i * 0.95)), 0.35),
      l =
        0.012 * Math.pow(2 * i - 1, 2) + (i < 0.15 ? 0.02 * (1 - i / 0.15) : 0),
      m = [];
    for (let r = 0; r < h; r++) {
      const f = (r / h) * Math.PI * 2,
        w = Math.sin(f),
        x = Math.cos(f),
        _ = w > 0 ? 0.075 + l : 0.075 - Math.pow(-w, 0.8) * S;
      m.push(
        y(
          v,
          _ + 0.02,
          x *
            Math.max(0.004, G) *
            (w > 0 ? 1 : Math.pow(1 - Math.pow(-w, 3) * 0.2, 1)),
        ),
      );
    }
    t.push(m.reverse());
  }
  (I.add(Q0(t, { capStart: !0, capEnd: !0 }), c, { uv: "keep" }),
    I.box(b, s * 0.86, 0.006, 0.101, [0, 0.092, 0], { r: 0.002, grain: null }),
    I.add(
      x0(
        new m0([y(s / 2 - 0.02, 0.11, 0), y(s / 2 + 0.12, 0.15, 0)]),
        (P) => 0.004 - P * 0.002,
        6,
        6,
      ),
      c,
      { uv: "keep" },
    ));
  const M = [
    [-0.13, 0.3],
    [0, 0.36],
    [0.12, 0.3],
  ];
  for (const [P, i] of M) {
    I.add(new j(0.0028, 0.004, i, 8), c, {
      m: d([P, 0.1 + i / 2, 0]),
      uv: "keep",
    });
    for (const [v, G] of [
      [0.1 + i * 0.42, 0.16],
      [0.1 + i * 0.68, 0.13],
      [0.1 + i * 0.88, 0.09],
    ]) {
      I.add(new j(0.002, 0.002, G, 6), c, {
        m: d([P, v, 0], [Math.PI / 2, 0, 0]),
        uv: "keep",
      });
      const S = i * 0.22,
        l = new So(G * 0.92, S, 6, 4),
        m = l.attributes.position;
      for (let r = 0; r < m.count; r++) {
        const f = m.getX(r) / (G * 0.46),
          w = (m.getY(r) + S / 2) / S;
        m.setZ(r, (1 - f * f) * 0.018 * Math.sin(Math.PI * (0.2 + w * 0.8)));
      }
      (l.computeVertexNormals(),
        I.add(l, e, {
          m: d([P + 0.004, v - S / 2 - 0.004, 0], [0, Math.PI / 2, 0]),
          uv: "world",
        }));
    }
  }
  const k = (P) => y(M[P][0], 0.1 + M[P][1], 0);
  for (const [P, i] of [
    [k(0), y(-s / 2 + 0.01, 0.12, 0)],
    [k(0), k(1)],
    [k(1), k(2)],
    [k(2), y(s / 2 + 0.11, 0.15, 0)],
    [k(1), y(0.04, 0.1, 0.05)],
    [k(1), y(0.04, 0.1, -0.05)],
  ]) {
    const v = P.distanceTo(i),
      G = P.clone().add(i).multiplyScalar(0.5),
      S = new U0().setFromUnitVectors(y(0, 1, 0), i.clone().sub(P).normalize());
    I.add(new j(6e-4, 6e-4, v, 4), a, {
      m: new N0().compose(G, S, y(1, 1, 1)),
      uv: "keep",
      shadow: !1,
    });
  }
}
function fo(I) {
  const L = I.attributes.uv;
  for (let u = 0; u < L.count; u++) {
    const c = L.getX(u);
    L.setXY(u, -L.getY(u), c);
  }
  return I;
}
