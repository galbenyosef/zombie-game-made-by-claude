// assets__index-BcIwWgby 19 — math
// Lines 5316-5536 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function cr(s, { circles: o = [], trees: t = [], U: u = null } = {}) {
  const e = new Kt();
  e.name = "lawn";
  let r = 7771;
  const a = () => (r = (r * 16807) % 2147483647) / 2147483647,
    p = {
      uWindT: u?.uWindT || { value: 0 },
      uWind: u?.uWind || { value: 1 },
      uBurn: { value: 0 },
      uWindDir: { value: new dt(0.82, 0, 0.57).normalize() },
      uPush0: { value: new H0(0, 0, 0.55, 0) },
      uPush1: { value: new H0(0, 0, 0.5, 0) },
    },
    i = sr(p),
    d = [Yt.a, Yt.b],
    y = (M, m) => {
      for (const k of o) {
        const S = M - k.x,
          A = m - k.z;
        if (S * S + A * A < (k.r + 0.04) ** 2) return !0;
      }
      for (const k of d) if (Math.hypot(M - k[0], m - k[1]) < 0.75) return !0;
      return !1;
    },
    w = (M, m) => {
      let k = 0;
      for (const S of t) {
        const A = Math.hypot(M - S.x, m - S.z);
        k = Math.max(
          k,
          1 - Math.min(1, Math.max(0, (A - S.r * 0.35) / (S.r * 0.75))),
        );
      }
      return k;
    };
  function g(M, m) {
    if (
      M < V0.x0 + 0.32 ||
      M > V0.x1 - 0.32 ||
      m < V0.z0 + 0.32 ||
      m > V0.z1 - 0.32
    )
      return null;
    const k = J0(M, m);
    if (k < 0.22) return null;
    const S = Bo(M, m);
    if (S < 0.5 || y(M, m)) return null;
    const A = Fo(M * 0.45 + 11, m * 0.45 - 3),
      b = Fo(M * 1.7, m * 1.7);
    let P = 0.72 + 0.28 * A,
      _ = 0.06 + 0.17 * A * A + 0.04 * b;
    const I = Math.min(1, (S - 0.5) / 0.4);
    ((P *= 0.25 + 0.75 * I), (_ *= 0.55 + 0.45 * I));
    const R = w(M, m);
    ((P *= 1 - 0.6 * R), (_ *= 1 - 0.35 * R));
    const V = 1 - Math.min(1, (k - 0.22) / 0.9);
    return (
      (_ *= 1 + 1.5 * V * V),
      (P *= 1 - 0.25 * V),
      { dens: P, h: _, shore: V }
    );
  }
  const z = 1 / Math.sqrt(er),
    x = [],
    v = or();
  let n = 0;
  for (let M = V0.z0; M < V0.z1; M += ce)
    for (let m = V0.x0; m < V0.x1; m += ce) {
      const k = [];
      for (let R = M + z * 0.5; R < Math.min(M + ce, V0.z1); R += z)
        for (let V = m + z * 0.5; V < Math.min(m + ce, V0.x1); V += z) {
          const L = V + (a() - 0.5) * z * 0.95,
            K = R + (a() - 0.5) * z * 0.95,
            j = g(L, K);
          if (!j || a() > j.dens) continue;
          const O = j.h * (0.66 + 0.6 * a() * a() + 0.16 * a()),
            J = 0.014 + 0.012 * a() + 0.004 * j.shore,
            tt = 0.18 + 0.4 * a() + 0.2 * j.shore;
          k.push([L, Me(L, K) - 0.01, K, a() * Math.PI * 2, O, J, tt]);
        }
      if (!k.length) continue;
      for (let R = k.length - 1; R > 0; R--) {
        const V = Math.floor(a() * (R + 1));
        [k[R], k[V]] = [k[V], k[R]];
      }
      const S = k.length,
        A = new Float32Array(S * 4),
        b = new Float32Array(S * 4);
      for (let R = 0; R < S; R++) {
        const V = k[R];
        (A.set([V[0], V[1], V[2], V[3]], R * 4),
          b.set([V[4], V[5], V[6], (R + 0.5) / S], R * 4));
      }
      const P = new Po();
      ((P.index = v.index),
        (P.attributes.position = v.attributes.position),
        (P.attributes.normal = v.attributes.normal),
        P.setAttribute("aRoot", new M0(A, 4)),
        P.setAttribute("aShape", new M0(b, 4)),
        (P.instanceCount = S));
      const _ = new dt(m + ce / 2, 0.3, M + ce / 2);
      ((P.boundingSphere = new hs(_, ce * 0.75 + 0.9)),
        (P.boundingBox = new ba(
          new dt(m - 0.6, -0.3, M - 0.6),
          new dt(m + ce + 0.6, 1.2, M + ce + 0.6),
        )));
      const I = new bt(P, i);
      ((I.name = "lawn_chunk"),
        (I.receiveShadow = !0),
        (I.castShadow = !1),
        I.layers.set(2),
        e.add(I),
        x.push({ mesh: I, g: P, n: S, x0: m, z0: M }),
        (n += S));
    }
  s.game.camera.layers.enable(2);
  const l = [];
  for (let M = V0.z0 + 0.4; M < V0.z1 - 0.4; M += 0.16)
    for (let m = V0.x0 + 0.4; m < V0.x1 - 0.4; m += 0.16) {
      const k = m + (a() - 0.5) * 0.15,
        S = M + (a() - 0.5) * 0.15,
        A = g(k, S);
      if (!A || A.shore > 0.6 || Bo(k, S) < 0.85) continue;
      const b = w(k, S),
        P = Fo(k * 0.38 + 40, S * 0.38),
        _ = Fo(k * 0.33 - 17, S * 0.33 + 9),
        I = Fo(k * 0.5 + 3, S * 0.5 - 30);
      let R = -1,
        V = 0;
      if (
        (b > 0.35
          ? ((R = 2), (V = 0.2 * b))
          : P > 0.6
            ? ((R = 0), (V = (P - 0.6) * 2.2))
            : _ > 0.64
              ? ((R = 1), (V = (_ - 0.64) * 2))
              : I > 0.66 && ((R = 3), (V = (I - 0.66) * 1.4)),
        R < 0 || a() > V)
      )
        continue;
      const L =
          R === 1
            ? 0.2 + a() * 0.16
            : R === 2
              ? 0.06 + a() * 0.05
              : R === 3
                ? 0.08 + a() * 0.06
                : 0.1 + a() * 0.12,
        K =
          R === 1
            ? 0.036 + a() * 0.012
            : R === 2
              ? 0.034 + a() * 0.01
              : R === 3
                ? 0.03 + a() * 0.008
                : 0.046 + a() * 0.016;
      l.push([
        k,
        Me(k, S) - 0.01,
        S,
        a() * Math.PI * 2,
        Math.max(L, A.h * 0.9 + 0.02),
        K,
        0.1 + a() * 0.25,
        R + a() * 0.98,
      ]);
    }
  let f = null;
  if (l.length) {
    const M = l.length,
      m = new Float32Array(M * 4),
      k = new Float32Array(M * 4);
    l.forEach((A, b) => {
      (m.set(A.slice(0, 4), b * 4), k.set(A.slice(4, 8), b * 4));
    });
    const S = nr();
    (S.setAttribute("aRoot", new M0(m, 4)),
      S.setAttribute("aShape", new M0(k, 4)),
      (S.instanceCount = M),
      (S.boundingSphere = new hs(new dt(0, 0.2, 0), 20)),
      (f = new bt(S, rr(p, ar()))),
      (f.name = "lawn_flowers"),
      (f.receiveShadow = !0),
      f.layers.set(2),
      e.add(f));
  }
  let h = n;
  function c(M, m, k, S = []) {
    const A = k.position.x,
      b = k.position.z;
    h = 0;
    for (const _ of x) {
      const I = Math.max(_.x0 - A, 0, A - (_.x0 + ce)),
        R = Math.max(_.z0 - b, 0, b - (_.z0 + ce)),
        V = Math.hypot(I, R),
        L = 1.1 - Math.min(0.78, Math.max(0, (V - 7) / 16));
      ((_.g.instanceCount = Math.min(_.n, Math.ceil(_.n * L) + 8)),
        (_.mesh.visible = V < 40),
        _.mesh.visible && (h += _.g.instanceCount));
    }
    const P = [p.uPush0.value, p.uPush1.value];
    for (let _ = 0; _ < 2; _++) {
      const I = S[_];
      I ? P[_].set(I.x, I.z, I.r ?? 0.5, I.k ?? 0.75) : (P[_].w = 0);
    }
  }
  return {
    group: e,
    U: p,
    update: c,
    chunks: x,
    get stats() {
      return { blades: n, drawn: h, chunks: x.length, flowers: l.length };
    },
    setWorld(M) {
      ((p.uBurn.value = M === "ruins" ? 1 : 0),
        f && (f.visible = M !== "ruins"));
    },
  };
}
const oo = Ia - Z0;
