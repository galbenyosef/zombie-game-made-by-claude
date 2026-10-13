// assets__exterior-BqAhvNw2 06 — astyle
// Lines 1293-1573 of readable/assets__exterior-BqAhvNw2.pretty.js (statement-aligned).
function Ne(t, i, a) {
  const e = new b0();
  e.name = "city";
  const s = S0(i, 1),
    l = S0(i, 0.6),
    d = S0(i, 0),
    v = (f, L) => Math.hypot(f.x - 3, f.z - 2) - Math.hypot(L.x - 3, L.z - 2);
  (a.mid.sort(v), a.far.sort(v));
  const x = M0(new $(1, 1, 1), a.mid, l, U0, (f) => O0(f));
  x.name = "city_mid";
  const n = M0(new $(1, 1, 1), a.far, d, U0, (f) => O0(f));
  ((n.name = "city_far"), e.add(x, n));
  const k = a.tops.filter((f) => f.type === "box"),
    m = a.tops.filter((f) => f.type === "tank"),
    p = M0(
      new $(1, 1, 1),
      k,
      l,
      (f, L) =>
        L.compose(
          new B(f.x, f.y + f.h / 2, f.z),
          new s0(),
          new B(f.w, f.h, f.d),
        ),
      (f) => ({
        aOrigin: [f.x, f.y, f.z, 0],
        aDims: [f.w, f.h, f.d, f.seed],
        aStyle: [3, 3, f.tone, 1],
        aLight: [0, 0, 0, 0],
      }),
    ),
    b = X0([
      new d0(0.5, 0.5, 1, 18, 1, !1).translate(0, 0.5, 0),
      new ee(0.56, 0.32, 18, 1).translate(0, 1.16, 0),
    ]),
    N = M0(
      b,
      m,
      l,
      (f, L) =>
        L.compose(
          new B(f.x, f.y + f.legs, f.z),
          new s0(),
          new B(f.r * 2, f.h, f.r * 2),
        ),
      (f) => ({
        aOrigin: [f.x, f.y + f.legs, f.z, 0],
        aDims: [f.r * 2, f.h, f.r * 2, f.seed],
        aStyle: [3, 3, 0.1, 2],
        aLight: [0, 0, 0, 0],
      }),
    ),
    o = X0(
      [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ]
        .map(([f, L]) =>
          new $(0.06, 1, 0.06).translate(f * 0.36, 0.5, L * 0.36),
        )
        .concat([
          new $(0.8, 0.05, 0.05).translate(0, 0.55, -0.36),
          new $(0.8, 0.05, 0.05).translate(0, 0.55, 0.36),
        ]),
    ),
    u = M0(
      o,
      m,
      l,
      (f, L) =>
        L.compose(
          new B(f.x, f.y, f.z),
          new s0(),
          new B(f.r * 2, f.legs, f.r * 2),
        ),
      (f) => ({
        aOrigin: [f.x, f.y, f.z, 0],
        aDims: [f.r * 2, f.legs, f.r * 2, f.seed],
        aStyle: [3, 3, 0.1, 3],
        aLight: [0, 0, 0, 0],
      }),
    );
  ((p.name = "city_roofboxes"),
    (N.name = "city_tanks"),
    (u.name = "city_tanklegs"),
    e.add(p, N, u));
  const z = Le(a.near, s);
  return (
    e.add(z),
    { group: e, mats: [s, l, d], meshes: { mid: x, far: n, near: z } }
  );
}
function X0(t) {
  const i = new p0({});
  for (const a of t) i.add(a, new a0(), {});
  return i.build();
}
function Le(t, i) {
  const a = new p0({ aOrigin: 4, aDims: 4, aStyle: 4, aLight: 4 }),
    e = new a0(),
    s = new s0(),
    l = new B(),
    d = new B(),
    v = (n, k, m, p, b, N, o) => {
      (e.compose(
        d.set((n + p) / 2, (k + b) / 2, (m + N) / 2),
        s.identity(),
        l.set(p - n, b - k, N - m),
      ),
        a.add(He, e, o));
    };
  for (const n of t) {
    const k = O0(n, 0),
      m = n.x - n.w / 2,
      p = n.x + n.w / 2,
      b = n.z - n.d / 2,
      N = n.z + n.d / 2,
      o = n.base + n.h;
    v(m, n.base, b, p, o, N, k);
    const u = { ...k, aStyle: [n.flH, n.bay, n.tone, 1] },
      z = n.z < C.zN + 1,
      f = z ? N : b,
      L = z ? 1 : -1,
      P = (I, T, y) =>
        v(
          m - 0.02,
          I,
          L > 0 ? f - 0.02 : f - T,
          p + 0.02,
          I + y,
          L > 0 ? f + T : f + 0.02,
          u,
        ),
      F = o - 1.25;
    if (
      (P(F - 0.45, 0.22, 0.18),
      P(F - 0.27, 0.42, 0.14),
      P(F - 0.13, 0.62, 0.16),
      v(m - 0.05, o - 0.02, b - 0.05, p + 0.05, o + 0.12, N + 0.05, u),
      P(n.base + n.flH * 1.3 - 0.25 + (n.base < -27.5, 0), 0.18, 0.22),
      v(m, o - 0.02, b, p, o + 0.9, b + 0.3, u),
      v(m, o - 0.02, N - 0.3, p, o + 0.9, N, u),
      v(m, o - 0.02, b, m + 0.3, o + 0.9, N, u),
      v(p - 0.3, o - 0.02, b, p, o + 0.9, N, u),
      v(
        n.x - 2 + n.w * 0.18,
        o,
        n.z - 1.5,
        n.x + 1.2 + n.w * 0.18,
        o + 3,
        n.z + 1.8,
        u,
      ),
      n.ex && n.ex.tank)
    ) {
      const I = n.x + n.w * 0.4,
        T = n.z + 3;
      n.lantern = [I - 2.6, o + 1.1, T + 2.3];
      const y = {
        ...k,
        aOrigin: [I, o, T, 0],
        aDims: [4.2, 2.9 + 1.25, 3.2, 31.7],
        aStyle: [2.9 / 1.3, 2.1, 0.62, 0],
        aLight: [1, 0, 0, 0],
      };
      (v(I - 2.1, o, T - 1.6, I + 2.1, o + 2.9, T + 1.6, y),
        v(I - 2.3, o + 2.9, T - 1.8, I + 2.3, o + 3.05, T + 1.8, {
          ...k,
          aStyle: [3, 3, 0.62, 3],
        }));
      const H = n.x - n.w * 0.3,
        c = n.z - 2,
        w = 4.5,
        h = 2.3,
        g = 4.6,
        M = o + 0.9,
        R = {
          ...k,
          aOrigin: [H, M + w, c, 0],
          aDims: [h * 2, g, h * 2, n.seed],
          aStyle: [3, 3, 0.1, 2],
        };
      (e.compose(d.set(H, M + w, c), s.identity(), l.set(h * 2, g, h * 2)),
        a.add(Y0, e, R));
      const A = { ...k, aStyle: [3, 3, 0.1, 3] };
      for (const [_, D] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ])
        v(
          H + _ * h * 0.7 - 0.09,
          M,
          c + D * h * 0.7 - 0.09,
          H + _ * h * 0.7 + 0.09,
          M + w + 0.1,
          c + D * h * 0.7 + 0.09,
          A,
        );
      for (const _ of [M + 1.5, M + 3.2])
        (v(
          H - h * 0.7,
          _,
          c - h * 0.7 - 0.05,
          H + h * 0.7,
          _ + 0.1,
          c - h * 0.7 + 0.05,
          A,
        ),
          v(
            H - h * 0.7,
            _,
            c + h * 0.7 - 0.05,
            H + h * 0.7,
            _ + 0.1,
            c + h * 0.7 + 0.05,
            A,
          ));
      v(
        H - h * 0.75,
        M + w - 0.1,
        c - h * 0.75,
        H + h * 0.75,
        M + w + 0.05,
        c + h * 0.75,
        A,
      );
    }
    if (n.ex && n.ex.tall) {
      const I = m + 3,
        T = p - 3,
        y = b + 3,
        H = N - 3,
        c = o + n.flH * 3,
        w = {
          ...k,
          aOrigin: [n.x, o, n.z, 0],
          aDims: [T - I, c - o, H - y, -Math.abs(n.seed) - 11],
        };
      v(I, o, y, T, c, H, w);
      const h = { ...w, aStyle: [n.flH, n.bay, n.tone, 1] };
      v(I - 0.3, c - 0.1, y - 0.3, T + 0.3, c + 0.25, H + 0.3, h);
      const g = n.x - 3,
        M = n.z,
        R = 3.5,
        A = 2,
        _ = 4.2,
        D = c + 0.25,
        j = {
          ...k,
          aOrigin: [g, D + R, M, 0],
          aDims: [A * 2, _, A * 2, n.seed],
          aStyle: [3, 3, 0.1, 2],
        };
      (e.compose(d.set(g, D + R, M), s.identity(), l.set(A * 2, _, A * 2)),
        a.add(Y0, e, j));
      const U = { ...k, aStyle: [3, 3, 0.1, 3] };
      for (const [K, E] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ])
        v(
          g + K * A * 0.7 - 0.08,
          D,
          M + E * A * 0.7 - 0.08,
          g + K * A * 0.7 + 0.08,
          D + R + 0.1,
          M + E * A * 0.7 + 0.08,
          U,
        );
      v(n.x + 4, c, n.z + 2, n.x + 4.15, c + 9, n.z + 2.15, U);
    }
  }
  const x = new e0(a.build(), i);
  return ((x.name = "city_near"), x);
}
