// assets/city-COfbVKUz 12 — math
// Lines 3428-3731 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
function to(m, e, d, n) {
  const h = new T0();
  h.name = "city3_fx";
  const c = (S, v) => S + (v - S) * n(),
    w = [],
    s = [],
    x = [],
    k = [],
    P = (S, v) => d.corridor.dist(S, S, v, v, 900);
  for (const S of d.blds) {
    if (!S.burnN) continue;
    const v = S.tier === "far" ? 900 : P(S.x, S.z),
      a = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
    v < 700 &&
      a.forEach(([p, i], t) => {
        if (!(S.faces & (1 << t))) return;
        const u = i ? S.w : S.d,
          o = Math.max(1, Math.floor(u / S.bay + 0.5));
        for (let l = S.burnF; l < S.burnF + S.burnN; l++)
          for (let f = 0; f < o; f++) {
            const z = n();
            if (z < (S.engulfed ? 0.25 : 0.55)) continue;
            const A = It(S, p, i, f, l, 0.3),
              F = z > 0.88,
              E = c(0.7, 1.15) * (F ? 1.5 : 1);
            w.push({
              p: [A.x, A.y - S.flH * 0.32, A.z],
              w: S.bay * 0.8 * E,
              h: S.flH * c(0.9, 1.6) * E,
              i: c(0.7, 1.15),
              seed: n() * 50,
              lean: c(-0.4, 0.4),
            });
          }
      });
    const r = S.groundH || S.flH * 1.3,
      y = S.base + r + (S.burnF - 1 + S.burnN) * S.flH,
      b = S.engulfed ? 2.2 : S.burnN > 2 ? 1.4 : 1;
    if (
      (v < 1400 &&
        (n() < 0.6 || S.engulfed) &&
        s.push({
          p: [S.x, Math.min(y, S.base + S.h) + 1, S.z],
          h: c(90, 170) * b,
          w0: c(10, 18) * b,
          w1: c(55, 95) * b,
          dx: c(70, 130) * b,
          dz: -c(15, 55) * b,
          seed: n() * 20,
          dens: 1,
          fire: 1,
          speed: c(0.8, 1.3),
        }),
      S.engulfed)
    )
      for (let p = 0; p < 10; p++)
        w.push({
          p: [
            S.x + c(-S.w, S.w) * 0.42,
            S.base + S.h - 1.5,
            S.z + c(-S.d, S.d) * 0.42,
          ],
          w: c(7, 12),
          h: c(10, 18),
          i: c(0.9, 1.3),
          seed: n() * 50,
          lean: c(-0.3, 0.6),
        });
    v < 260 &&
      k.push({
        p: [S.x, y, S.z],
        n: 18,
        rise: 2.4,
        life: 6,
        spread: Math.max(S.w, S.d) * 0.6,
      });
  }
  const _ = [
    [900, -1500],
    [500, -1250],
    [1300, -1350],
    [-650, -200],
    [-500, 350],
    [700, 1050],
    [250, 900],
    [-300, 750],
    [1700, -1150],
    [2100, 600],
  ];
  for (const [S, v] of _) {
    s.push({
      p: [S + c(-60, 60), 20, v + c(-60, 60)],
      h: c(260, 420),
      w0: c(40, 70),
      w1: c(160, 260),
      dx: c(160, 280),
      dz: -c(40, 140),
      seed: n() * 20,
      dens: c(0.7, 0.95),
      fire: 1,
      speed: c(0.6, 1),
    });
    for (let a = 0; a < 14; a++)
      x.push({
        p: [S + c(-120, 120), c(3, 30), v + c(-120, 120)],
        c: [3, 1, 0.25],
        s: c(1.5, 3),
        m: [2, n(), c(2, 6), 0],
      });
  }
  for (const S of d.lamps)
    S.on &&
      x.push({
        p: [S.x + S.ax * 1.4, S.y, S.z + S.az * 1.4],
        c: [1.6, 0.68, 0.17],
        s: 1,
        m: [S.flick ? 4 : 0, n(), 7, 0],
      });
  for (const S of d.blds) {
    if (S.tier === "near" || S.burnN || S.lit < 0.005) continue;
    const v = Math.max(
      1,
      Math.floor((S.h - (S.groundH || S.flH * 1.3) - 1.2) / S.flH) + 1,
    );
    [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ].forEach(([a, r], y) => {
      if (!(S.faces & (1 << y))) return;
      const b = r ? S.w : S.d,
        p = Math.max(1, Math.floor(b / S.bay + 0.5)),
        i = Math.round(p * v * S.lit * 0.6 + n() - 0.5);
      for (let t = 0; t < i; t++) {
        const u = It(S, a, r, Math.floor(n() * p), Math.floor(n() * v), 0.25),
          o = n() < 0.85,
          l = c(0.3, 0.9);
        x.push({
          p: [u.x, u.y, u.z],
          c: o ? [1 * l, 0.5 * l, 0.19 * l] : [0.45 * l, 0.6 * l, 1 * l],
          s: c(0.8, 1.2),
          m: [n() < 0.05 ? 2 : 0, n(), 2, 0],
        });
      }
    });
  }
  const g = d.blds
    .filter((S) => S.h > 75)
    .sort((S, v) => v.h - S.h)
    .slice(0, 40);
  for (const S of g) {
    const v = S.base + S.h + 1.6,
      a = n();
    for (const [r, y] of [
      [-1, -1],
      [1, 1],
      [1, -1],
    ])
      x.push({
        p: [S.x + r * S.w * 0.45, v, S.z + y * S.d * 0.45],
        c: [4, 0.16, 0.05],
        s: 1.5,
        m: [1, a, 0.55, 0],
      });
  }
  for (const S of d.extraPoints || [])
    x.push({ p: S, c: [4, 0.16, 0.05], s: 1.6, m: [1, n(), 0.5, 0] });
  for (const S of d.extraPts || []) x.push(S);
  for (const S of d.extraFlames || []) w.push(S);
  const M = Z0(e, w),
    N = Ue(e, s),
    T = Ge(e, x, "city3_points");
  return (
    h.add(M, N, T),
    k.length && h.add(Qe(e, k, n)),
    {
      group: h,
      flames: M,
      plumes: N,
      points: T,
      counts: {
        flames: w.length,
        plumes: s.length,
        points: x.length,
        embers: k.length,
      },
    }
  );
}
const eo = new X(0, 1, 0),
  Et = new S0(),
  qt = new G0(),
  oo = new X(),
  so = new X(),
  ft = new X(),
  ao = new kt(1, 1, 1),
  no = new _0(0.5, 0.5, 1, 6, 1);
function Y(m, e, d, n, h, c = !1) {
  ft.set(d[0] - e[0], d[1] - e[1], d[2] - e[2]);
  const w = ft.length();
  w < 1e-4 ||
    (qt.setFromUnitVectors(eo, ft.multiplyScalar(1 / w)),
    Et.compose(
      oo.set((e[0] + d[0]) / 2, (e[1] + d[1]) / 2, (e[2] + d[2]) / 2),
      qt,
      so.set(n, w, n),
    ),
    m.geo(c ? no : ao, h, Et));
}
function J0(m, e, d, n, h, c, w, s) {
  const x = Math.hypot(d[0] - e[0], d[1] - e[1], d[2] - e[2]),
    k = Math.max(1, Math.round(x / c)),
    P = (_, g, M) => [
      _[0] + (g[0] - _[0]) * M,
      _[1] + (g[1] - _[1]) * M,
      _[2] + (g[2] - _[2]) * M,
    ];
  for (let _ = 0; _ < k; _++) {
    const g = _ / k,
      M = (_ + 1) / k;
    (Y(m, P(e, d, g), P(n, h, (g + M) / 2), w, s),
      Y(m, P(n, h, (g + M) / 2), P(e, d, M), w, s));
  }
}
function L0(m, e, d, n, h, c, w = 10) {
  let s = e;
  for (let x = 1; x <= w; x++) {
    const k = x / w,
      P = [
        e[0] + (d[0] - e[0]) * k,
        e[1] + (d[1] - e[1]) * k - n * 4 * k * (1 - k),
        e[2] + (d[2] - e[2]) * k,
      ];
    (Y(m, s, P, h, c, !0), (s = P));
  }
}
const z0 = (m, e) => m + 32768 * e,
  io = [
    { name: "site", x0: 457, x1: 531, z0: -206, z1: -152, ground: "dirt" },
    { name: "glass", x0: 554, x1: 633, z0: -292, z1: -238 },
    { name: "tankB", x0: 1068, x1: 1143, z0: -372, z1: -312 },
    { name: "impactB", x0: 961, x1: 1036, z0: -474, z1: -392 },
    { name: "heli2B", x0: 1068, x1: 1143, z0: -474, z1: -392 },
    { name: "mastB", x0: 1164, x1: 1246, z0: -748, z1: -688 },
    { name: "anchorB", x0: 1266, x1: 1346, z0: -748, z1: -688 },
  ],
  f0 = {
    x: 494,
    z: -179,
    mastH: 42.5,
    jibY: 43.6,
    jibLen: 55,
    headH: 9.5,
    sw: 2,
    th0: -2.95,
    th1: -1.92,
  },
  i0 = {
    x0: 668,
    x1: 727,
    n: { z0: -282, z1: -229.5, h: 140 },
    s: { z0: -214.5, z1: -160, h: 126 },
  },
  I0 = {
    x: 875,
    z: -220.5,
    yaw: Math.PI / 2 - 0.35,
    col: { x: 873, z: -221, lean: 0.24, r0: 7, k: 0.42 },
  },
  y0 = {
    x0: 961,
    x1: 1022,
    z0: -254,
    z1: -190,
    h: 88,
    pad: { x: 991.5, z: -222, y: 90.2, s: 21 },
  },
  Zt = {
    x: 1071.5,
    z: -349,
    roof: 58,
    legs: 4.2,
    r: 2.1,
    h: 4.6,
    vx: -11,
    vy: 3,
    spin: 2.6,
  },
  M0 = { x: 1036, y: 24, z: -431 },
  ro = { z: -667, xw: 1247.6, xe: 1264.4, ys: [12, 11.4, 10.8], sag: 0.35 },
  Jt = {
    x: 1239.5,
    z: -703.5,
    roof: 21,
    h: 30,
    guyY: 22.5,
    anchor: [1266.4, 8.8, -701],
  };
