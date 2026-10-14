// assets/exterior-BqAhvNw2 05 — math
// Lines 994-1292 of readable/assets/exterior-BqAhvNw2.pretty.js (statement-aligned).
function buildBackdrop(t) {
  const i = [],
    a = [],
    e = [],
    s = [],
    l = (y, H) => y + (H - y) * t(),
    d = (y) => y[Math.floor(t() * y.length)],
    v = (y) => (y + 0.05 + t() * 0.9) / 4,
    x = (y) => (y === 3 ? 3.7 : y === 2 ? 3.1 + t() * 0.3 : 3.25 + t() * 0.5),
    n = C.zN,
    k = -66,
    m = [
      [-206.5, -178, 8, 0, 0.1],
      [-178, -150, 11, 1, 0.06],
      [-150, -126, 6, 0, 0.12],
      [-126, -104.5, 9, 2, 0.05],
      [-88.5, -52, 8, 0, 0.1],
      [-52, -26, 18, 1, 0.13, { tall: !0, open: !0 }],
      [-26, 13.5, 3, 0, 0.16, { tank: !0 }],
      [29.5, 52, 9, 0, 0.08, { burn: [6, 1] }],
      [52, 77, 12, 2, 0.06],
      [77, 101, 6, 0, 0.11],
      [101, 131.5, 10, 1, 0.07],
      [147.5, 180, 8, 0, 0.09],
      [180, 212, 14, 2, 0.05],
      [212, 249.5, 7, 1, 0.08],
    ];
  for (const [y, H, c, w, h, g = {}] of m) {
    const M = H - y,
      R = n - k,
      A = (y + H) / 2,
      _ = (n + k) / 2,
      D = x(w);
    i.push(
      H0({
        x: A,
        z: _,
        w: M,
        d: R,
        base: F0(A, _, M, R),
        storeys: c,
        flH: D,
        bay: w === 1 ? 3.6 : 3.1,
        tone: v(w),
        seed: (g.open ? 1 : -1) * (1 + i.length * 7.3),
        lit: h,
        dmg: 0.1,
        burnF: g.burn ? g.burn[0] : 0,
        burnN: g.burn ? g.burn[1] : 0,
        ex: g,
      }),
    );
  }
  const p = [
    [-206.5, -170, 7, 1, 0.06],
    [-170, -135, 10, 0, 0.08],
    [-135, -104.5, 6, 2, 0.05],
    [-88.5, -60, 6, 0, 0.09],
    [-60, -30, 10, 1, 0.06],
    [-30, -0.2, 8, 0, 0.08],
    [29.5, 60, 3, 0, 0.1],
    [60, 95, 4, 1, 0.08],
    [95, 131.5, 6, 0, 0.09],
    [147.5, 190, 11, 2, 0.05],
    [190, 249.5, 8, 0, 0.08],
  ];
  for (const [y, H, c, w, h] of p) {
    const g = H - y,
      M = 24,
      R = (y + H) / 2,
      A = C.zS + M / 2;
    i.push(
      H0({
        x: R,
        z: A,
        w: g,
        d: M,
        base: F0(R, A, g, M),
        storeys: c,
        flH: x(w),
        bay: 3.2,
        tone: v(w),
        seed: -(3 + i.length * 5.1),
        lit: h,
        dmg: 0.08,
      }),
    );
  }
  const b = { x: 60, z: -1130, r: 300 },
    N = new E0(3, 2),
    o = [];
  for (let y = 0; y < 17; y++) o.push([-142 - 76 * y, -82 - 76 * y]);
  const u = [
      [76, 136],
      [152, 212],
      [228, 288],
      [304, 364],
    ],
    z = [
      [k, n, "nrow"],
      [C.zS, 24, "srow"],
      [24, 60, "sback"],
    ],
    f = [];
  for (let y = -12; y <= 11; y++)
    f.push([Y.x1 + y0.dx * y, Y.x0 + y0.dx * (y + 1)]);
  const L = (y, H, c, w, h) => {
    const g = w - c > 40 ? 2 : 1;
    for (let M = 0; M < g; M++) {
      const R = c + ((w - c) * M) / g,
        A = c + ((w - c) * (M + 1)) / g;
      let _ = y;
      for (; _ < H - 6;) {
        let D = l(12, 30);
        H - (_ + D) < 12 && (D = H - _);
        const j = _ + D / 2,
          U = (R + A) / 2;
        _ += D;
        const K = Math.hypot(j - N.x, U - N.y);
        if (K > 1380 || t() < 0.05) continue;
        const E = l(0.3, 1.8),
          Q = D - E * 2,
          G = A - R - E * 2,
          i0 = Math.hypot(j - b.x, U - b.z);
        let r0 = d([0, 0, 0, 1, 1, 2, 2]),
          J;
        const v0 = -U;
        if (i0 < b.r) {
          const r = 1 - i0 / b.r;
          ((J = Math.round(l(8, 22) + r * r * l(10, 45))),
            (r0 = t() < 0.45 * r + 0.1 ? 3 : d([1, 2, 2])));
        } else
          v0 > 0 && v0 < 290
            ? (J = Math.round(l(2, 5.6)))
            : K < 450
              ? (J = Math.round(l(3, 8) + (t() < 0.04 ? l(4, 12) : 0)))
              : (J = Math.round(l(3, 11) + (t() < 0.05 ? l(8, 20) : 0)));
        h === "south" && (J = Math.round(l(3, 8)));
        const u0 = x(r0),
          q = H0({
            x: j,
            z: U + l(-0.8, 0.8),
            w: Q,
            d: G,
            base: F0(j, U, Q, G),
            storeys: J,
            flH: u0,
            bay: r0 === 3 ? 2.4 : l(2.8, 3.8),
            tone: v(r0),
            seed: 1 + t() * 97,
            lit: r0 === 3 ? l(0.01, 0.06) : l(0.015, 0.12),
            dmg: l(0.03, 0.18),
          });
        if (((K < 470 ? a : e).push(q), K < 520 && r0 !== 3)) {
          const r = q.base + q.h;
          if (
            (t() < 0.55 &&
              s.push({
                type: "box",
                x: j + l(-Q, Q) * 0.25,
                z: q.z + l(-G, G) * 0.25,
                w: l(2.5, 4.5),
                d: l(2.5, 4),
                h: l(2.4, 3.4),
                y: r,
                tone: q.tone,
                seed: q.seed,
              }),
            t() < 0.3 &&
              s.push({
                type: "tank",
                x: j + l(-Q, Q) * 0.3,
                z: q.z + l(-G, G) * 0.3,
                r: l(1.6, 2.4),
                h: l(3.2, 4.5),
                legs: l(3, 5),
                y: r,
                seed: q.seed,
              }),
            t() < 0.35)
          )
            for (let S = 0; S < 1 + Math.floor(t() * 3); S++)
              s.push({
                type: "box",
                x: j + l(-Q, Q) * 0.35,
                z: q.z + l(-G, G) * 0.35,
                w: l(1.2, 2.2),
                d: l(0.9, 1.6),
                h: l(0.9, 1.5),
                y: r,
                tone: 0.6,
                seed: q.seed,
              });
        }
      }
    }
  };
  for (const [y, H] of f) {
    for (const [c, w] of o) L(y, H, c, w, "north");
    for (const [c, w] of u)
      Math.abs((y + H) / 2) < 700 && L(y, H, c, w, "south");
    if (H < -206.5 || y > 249.5)
      for (const [c, w] of z) L(y, H, c, w, c > 0 ? "south" : "north");
    else L(y, H, 24, 60, "south");
  }
  const P = H0({
    x: 96,
    z: -238,
    w: 24,
    d: 22,
    storeys: 22,
    flH: 3.4,
    bay: 3,
    tone: 0.3,
    seed: 51,
    lit: 0,
    dmg: 0.35,
    burnF: 15,
    burnN: 5,
  });
  P.base = F0(P.x, P.z, P.w, P.d);
  const F = (y) => {
    for (let H = y.length - 1; H >= 0; H--) {
      const c = y[H];
      Math.abs(c.x - P.x) < (c.w + P.w) / 2 + 2 &&
        Math.abs(c.z - P.z) < (c.d + P.d) / 2 + 2 &&
        y.splice(H, 1);
    }
  };
  (F(a), F(e));
  for (let y = s.length - 1; y >= 0; y--)
    Math.abs(s[y].x - P.x) < 16 &&
      Math.abs(s[y].z - P.z) < 16 &&
      s.splice(y, 1);
  a.push(P);
  const I = [],
    T = (y, H, c, w, h, g) => {
      let M = 0;
      for (let R = 0; R < 800 && M < H; R++) {
        const A = y[Math.floor(t() * y.length)];
        if (!A || A.burnN) continue;
        const _ = Math.atan2(A.x - 2.75, -(A.z - 2.4)),
          D = Math.hypot(A.x - 2.75, A.z - 2.4);
        if (Math.abs(_ - c) > w || D < h || D > g) continue;
        const j = Math.max(2, Math.round((A.h - A.flH * 1.3 - 1.25) / A.flH));
        ((A.burnF = 1 + Math.floor(t() * Math.max(1, j - 2))),
          (A.burnN = 1 + Math.floor(t() * 3)),
          (A.dmg = 0.3),
          I.push(A),
          M++);
      }
    };
  return (
    T(a, 5, 0.3, 0.35, 120, 460),
    T(a, 3, -0.45, 0.3, 120, 460),
    T(e, 10, 0.35, 0.4, 470, 1300),
    T(e, 6, -0.45, 0.35, 470, 1300),
    T(e, 5, 1.5, 0.45, 300, 1300),
    T(a, 3, 1.5, 0.45, 100, 460),
    { near: i, mid: a, far: e, tops: s, tower: P, fires: I }
  );
}
function M0(t, i, a, e, s) {
  const l = i.length,
    d = new W0(t, a, l),
    v = {
      aOrigin: new Float32Array(l * 4),
      aDims: new Float32Array(l * 4),
      aStyle: new Float32Array(l * 4),
      aLight: new Float32Array(l * 4),
    },
    x = new a0();
  i.forEach((n, k) => {
    (e(n, x), d.setMatrixAt(k, x));
    const m = s(n);
    for (const p of Object.keys(v)) v[p].set(m[p], k * 4);
  });
  for (const n of Object.keys(v)) t.setAttribute(n, new f0(v[n], 4));
  return (
    (d.instanceMatrix.needsUpdate = !0),
    d.computeBoundingSphere(),
    (d.frustumCulled = !1),
    d
  );
}
const O0 = (t, i = 0) => ({
    aOrigin: [t.x, t.base, t.z, t.rot],
    aDims: [t.w, t.h, t.d, t.blank ? -Math.abs(t.seed) : t.seed],
    aStyle: [t.flH, t.bay, t.tone, i],
    aLight: [t.lit, t.burnF, t.burnN, t.dmg],
  }),
  U0 = (t, i) => {
    const a = new s0().setFromAxisAngle(new B(0, 1, 0), t.rot);
    return i.compose(
      new B(t.x, t.base + t.h / 2, t.z),
      a,
      new B(t.w, t.h, t.d),
    );
  };
