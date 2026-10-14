// assets/metro-xgLUk92P 11 — math
// Lines 3748-4055 of readable/assets/metro-xgLUk92P.pretty.js (statement-aligned).
const Mt = (c, a, o, s = 0, f = 0, h = 0) => K0([c, a, o], [f, s, h]),
  v0 = (c, a, o, s, f) => (a.applyMatrix4(s), c.add(a, o, f), a);
function me(c, a, o, s, f, h, d, l, i) {
  const t = Math.cos(o),
    e = Math.sin(o),
    n = [],
    r = [];
  for (const [u, b] of [
    [s, h],
    [f, h],
    [f, d],
    [s, d],
  ])
    (n.push(c + u * t + b * e), r.push(a - u * e + b * t));
  return {
    x0: Math.min(...n),
    x1: Math.max(...n),
    z0: Math.min(...r),
    z1: Math.max(...r),
    y0: l,
    y1: i,
  };
}
function Qe(c, a, o, s, f = 0, { len: h = 1.8, chunk: d = "" } = {}) {
  const { B: l, M: i } = c,
    t = Mt(a, o, s, f),
    e = { chunk: d };
  for (const n of [-h / 2 + 0.12, h / 2 - 0.12])
    (v0(l, T(n - 0.025, 0, 0.05, n + 0.025, 0.42, 0.09, 0.006), i.steel, t, e),
      v0(
        l,
        T(n - 0.025, 0, -0.32, n + 0.025, 0.86, -0.28, 0.006),
        i.steel,
        t,
        e,
      ),
      v0(
        l,
        T(n - 0.02, 0.38, -0.32, n + 0.02, 0.42, 0.09, 0.005),
        i.steel,
        t,
        e,
      ),
      v0(
        l,
        T(n - 0.02, 0.02, -0.32, n + 0.02, 0.05, 0.09, 0.005),
        i.steel,
        t,
        e,
      ));
  for (let n = 0; n < 3; n++)
    v0(
      l,
      T(-h / 2, 0.42, -0.27 + n * 0.125, h / 2, 0.45, -0.17 + n * 0.125, 0.008),
      i.wood,
      t,
      e,
    );
  for (let n = 0; n < 2; n++)
    v0(
      l,
      T(-h / 2, 0.55 + n * 0.16, -0.32, h / 2, 0.66 + n * 0.16, -0.29, 0.008),
      i.wood,
      t,
      e,
    );
  return [me(a, s, f, -h / 2, h / 2, -0.33, 0.1, o, o + 0.9)];
}
function To(c, a, o, s, { chunk: f = "", spill: h = 1, rng: d } = {}) {
  const { B: l, M: i } = c,
    t = { chunk: f },
    e = new D0(0.19, 0.17, 0.72, 20, 1, !0);
  (e.translate(a, o + 0.36, s), it(e), l.add(e, i.galvDark, t));
  const n = new Ot(0.19, 0.012, 6, 24)
    .rotateX(Math.PI / 2)
    .translate(a, o + 0.72, s);
  l.add(n, i.galvDark, t);
  const r = new uo(0.17, 16).rotateX(-Math.PI / 2).translate(a, o + 0.02, s);
  l.add(r, i.black, t);
  const u = new D0(0.2, 0.18, 0.08, 16).translate(a, o + 0.72, s);
  l.add(u, i.plastic, t);
  const b = d || Math.random;
  for (let M = 0; M < 6 * h; M++)
    xe(c, a + (b() - 0.5) * 1.2, o, s + (b() - 0.5) * 1, b, f);
  return [
    { x0: a - 0.2, x1: a + 0.2, z0: s - 0.2, z1: s + 0.2, y0: o, y1: o + 0.75 },
  ];
}
function xe(c, a, o, s, f, h = "") {
  const d = 0.03 + f() * 0.04,
    l = new Ho(d, 0),
    i = l.attributes.position;
  for (let t = 0; t < i.count; t++)
    i.setXYZ(
      t,
      i.getX(t) * (0.8 + f() * 0.5),
      i.getY(t) * (0.6 + f() * 0.4),
      i.getZ(t) * (0.8 + f() * 0.5),
    );
  (l.computeVertexNormals(),
    l.translate(a, o + d * 0.6, s),
    it(l, 4),
    c.B.add(l, f() < 0.5 ? c.M.paper : c.M.plasticW, { chunk: h, cast: !1 }));
}
function $t(
  c,
  a,
  o,
  s,
  f,
  {
    w: h = 0.42,
    l: d = 0.58,
    lift: l = 0.02,
    chunk: i = "",
    kind: t = null,
  } = {},
) {
  const e = ["news1", "news2", "leaflet", "news1", "news2"],
    n =
      t ||
      e[
        Math.floor(
          Math.abs(Math.sin(a * 12.9898 + s * 78.233) * 43758.5453) % e.length,
        )
      ];
  n === "leaflet"
    ? ((h = Math.min(h, 0.21)), (d = h * 1.42))
    : ((h = Math.max(h, 0.3)), (d = h * 1.39));
  const r = new ho(h, d, 2, 2).rotateX(-Math.PI / 2),
    u = r.attributes.position;
  for (let x = 0; x < u.count; x++) {
    const w = u.getX(x);
    u.setY(x, Math.abs(w) < 0.01 ? l : l * 0.2);
  }
  r.computeVertexNormals();
  const b = c.A.signs.rect(n),
    M = r.attributes.uv;
  for (let x = 0; x < M.count; x++)
    M.setXY(
      x,
      b[0] + (b[2] - b[0]) * M.getX(x),
      b[1] + (b[3] - b[1]) * M.getY(x),
    );
  v0(c.B, r, c.M.print, Mt(a, o + 0.004, s, f), { chunk: i, cast: !1 });
}
function ia(c, a, o, s, f, { chunk: h = "", rng: d } = {}) {
  const { B: l, M: i } = c,
    t = Mt(a, o, s, f),
    e = { chunk: h },
    n = d || Math.random,
    r = 0.68,
    u = 0.44,
    b = 0.12;
  v0(l, T(-r / 2, 0, -u / 2, r / 2, 0.02, u / 2, 0.01), i.leather, t, e);
  for (const [x, w, p, S] of [
    [-r / 2, -u / 2, r / 2, -u / 2 + 0.02],
    [-r / 2, u / 2 - 0.02, r / 2, u / 2],
    [-r / 2, -u / 2, -r / 2 + 0.02, u / 2],
    [r / 2 - 0.02, -u / 2, r / 2, u / 2],
  ])
    v0(l, T(x, 0, w, p, b, S, 0.006), i.leather, t, e);
  const M = K0([0, 0, -u / 2], [-2.6, 0, 0]);
  (v0(
    l,
    T(-r / 2, -0.02, 0, r / 2, 0, u, 0.01).applyMatrix4(M),
    i.leather,
    t,
    e,
  ),
    v0(
      l,
      T(-0.1, b, u / 2 - 0.01, 0.1, b + 0.04, u / 2 + 0.03, 0.01),
      i.black,
      t,
      e,
    ));
  for (let x = 0; x < 5; x++) {
    const w = new U0(0.1 + n() * 0.08, 10, 6);
    (w.scale(1.4 + n(), 0.28, 1 + n() * 0.6),
      w.translate(
        (n() - 0.5) * (x < 3 ? 0.4 : 1.2),
        0.04 + (x < 3 ? 0.06 : 0),
        x < 3 ? 0 : 0.35 + n() * 0.4,
      ),
      it(w, 3),
      v0(l, w, [i.fabric, i.fabricR, i.sheet, i.fabric, i.sheet][x], t, {
        chunk: h,
        cast: !1,
      }));
  }
  return [me(a, s, f, -r / 2, r / 2, -u / 2 - 0.4, u / 2, o, o + 0.2)];
}
function da(c, a, o, s, f, { chunk: h = "", tipped: d = !1 } = {}) {
  const { B: l, M: i } = c,
    t = { chunk: h },
    e = Mt(a, o, s, f, 0, d ? 1.45 : 0).premultiply(
      new rt().makeTranslation(0, d ? 0.24 : 0, 0),
    ),
    n = [];
  for (const M of [-0.22, 0.22])
    n.push(
      j([M, 0.12, 0.3], [M, 0.62, -0.08], 0.011, 8),
      j([M, 0.12, -0.25], [M, 0.62, -0.08], 0.011, 8),
      j([M, 0.62, -0.08], [M, 1, -0.38], 0.012, 8),
    );
  n.push(j([-0.23, 1, -0.38], [0.23, 1, -0.38], 0.016, 10));
  for (const M of n) v0(l, M, i.galv, e, t);
  for (const [M, x] of [
    [-0.24, 0.3],
    [0.24, 0.3],
    [-0.24, -0.25],
    [0.24, -0.25],
  ])
    v0(
      l,
      new D0(0.1, 0.1, 0.04, 16).rotateZ(Math.PI / 2).translate(M, 0.1, x),
      i.rubber,
      e,
      t,
    );
  const r = new D0(0.24, 0.24, 0.42, 14, 1, !0, Math.PI * 0.55, Math.PI * 0.9)
    .rotateZ(Math.PI / 2)
    .scale(1, 0.9, 1.3)
    .translate(0, 0.62, 0);
  (it(r, 3), v0(l, r, i.fabricR, e, t));
  const u = new U0(0.26, 14, 8, 0, Math.PI, 0, Math.PI / 2)
    .rotateY(Math.PI / 2)
    .scale(0.9, 0.8, 1)
    .translate(0, 0.74, -0.15);
  (it(u, 3),
    v0(l, u, i.fabricR, e, t),
    v0(l, T(-0.18, 0.3, 0.2, 0.18, 0.33, 0.34, 0.01), i.plastic, e, t));
  const b = new U0(0.18, 10, 6)
    .scale(1.2, 0.3, 1.3)
    .translate(0.05, 0.62, 0.08);
  return (
    it(b, 3),
    v0(l, b, i.sheet, e, { chunk: h, cast: !1 }),
    [me(a, s, f, -0.3, 0.3, -0.45, 0.4, o, o + 1)]
  );
}
function fa(c, a, o, s, f, { chunk: h = "" } = {}) {
  const { B: d, M: l } = c,
    i = Mt(a, o + 0.045, s, f, 0, Math.PI / 2 - 0.15),
    t = new D0(0.045, 0.05, 0.16, 12).translate(0, 0.08, 0);
  it(t, 3);
  const e = new U0(0.05, 12, 8).scale(1, 0.7, 1.9).translate(0, 0.01, 0.05);
  (it(e, 3),
    v0(d, t, l.yellow, i, { chunk: h }),
    v0(d, e, l.yellow, i, { chunk: h }));
}
function ua(c, a, o, s, f, { chunk: h = "" } = {}) {
  const { B: d, M: l } = c,
    i = Mt(a, o + 0.03, s, f, Math.PI / 2, 0);
  (v0(d, new D0(0.03, 0.006, 0.78, 10).translate(0, 0.39, 0), l.black, i, {
    chunk: h,
  }),
    v0(
      d,
      ko([0, -0.06, 0.04], 0.04, 0.008, "x", Math.PI * 1.1, 6, 12),
      l.woodDark,
      i,
      { chunk: h },
    ));
}
function Ft(c, a, o, s, f, { chunk: h = "", down: d = 0 } = {}) {
  const { B: l, M: i } = c,
    t = Mt(a, o, s, f, d ? -1.48 * d : 0, 0).premultiply(
      new rt().makeTranslation(0, d ? 0.03 : 0, 0),
    ),
    e = [];
  (e.push(
    j([-1.1, 0.1, 0], [1.1, 0.1, 0], 0.016, 8),
    j([-1.1, 1.08, 0], [1.1, 1.08, 0], 0.016, 8),
  ),
    e.push(
      j([-1.1, 0.1, 0], [-1.1, 1.08, 0], 0.016, 8),
      j([1.1, 0.1, 0], [1.1, 1.08, 0], 0.016, 8),
    ));
  for (let n = 1; n < 14; n++)
    e.push(
      j(
        [-1.1 + (n * 2.2) / 14, 0.1, 0],
        [-1.1 + (n * 2.2) / 14, 1.08, 0],
        0.007,
        5,
      ),
    );
  for (const n of [-0.95, 0.95])
    e.push(
      j([n, 0, -0.3], [n, 0.1, 0], 0.012, 6),
      j([n, 0, 0.3], [n, 0.1, 0], 0.012, 6),
      j([n, 0, -0.3], [n, 0, 0.3], 0.012, 6),
    );
  for (const n of e) v0(l, n, i.galv, t, { chunk: h });
  return d ? [] : [me(a, s, f, -1.12, 1.12, -0.3, 0.3, o, o + 1.1)];
}
function Je(c, a, o, s, f, { chunk: h = "" } = {}) {
  const { B: d, M: l } = c,
    i = Mt(a, o + 0.03, s, f, -Math.PI / 2 + 0.06, 0),
    t = new D0(0.9, 0.9, 1, 16, 1, !0, -0.32, 0.64).translate(0, 0, -0.9);
  (it(t, 2),
    v0(d, t, l.glass, i, { chunk: h, cast: !1 }),
    v0(d, T(-0.05, -0.45, -0.03, 0.05, 0.45, -0, 0.01), l.black, i, {
      chunk: h,
    }));
}
