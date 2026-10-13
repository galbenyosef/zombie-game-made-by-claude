// assets__district-BhfbivMT 11 — math
// Lines 3051-3380 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
function Mo(n, t, e) {
  const r = e / 2,
    o = n - t;
  return [
    [t + 0.004, -r * 0.8],
    [t + o * 0.15, -r * 0.99],
    [t + o * 0.55, -r * 1.03],
    [n - 0.018, -r * 0.88],
    [n, -r * 0.45],
    [n, r * 0.45],
    [n - 0.018, r * 0.88],
    [t + o * 0.55, r * 1.03],
    [t + o * 0.15, r * 0.99],
    [t + 0.004, r * 0.8],
  ];
}
function go(n, t, e, r, o, l) {
  const s = e >= 0 ? 1 : -1,
    c = l.R,
    a = l.rim,
    h = l.w,
    f = h / 2,
    y = l.segs ?? 14,
    m = Math.max(10, y - 2),
    b = new J0().makeRotationZ(-Math.PI / 2),
    v = (w = 0) =>
      new J0().makeRotationY(s > 0 ? 0 : Math.PI).setPosition(e + s * w, r, o),
    p = (w, _ = m) =>
      new Ht(
        w.map(([M, C]) => new ye(M, C)),
        _,
      ).applyMatrix4(b);
  if (!l.burnt)
    for (const w of l.dual ? [0, -(h + 0.03)] : [0]) {
      const _ = p(Mo(c, a, h), y),
        M = _.attributes.position;
      for (let C = 0; C < M.count; C++) {
        const T = M.getX(C),
          N = M.getY(C),
          K = M.getZ(C),
          O = Math.hypot(N, K);
        if (l.lugs && O > c - 0.004 && Math.abs(T) < f * 0.8) {
          const k = Math.atan2(N, K) + (T > 0 ? 0.2 : 0),
            P = Math.cos(k * l.lugs) > 0 ? 1 : 0.94;
          (M.setY(C, N * P), M.setZ(C, K * P));
        }
        if (l.squash) {
          const k = -(c - l.squash),
            P = M.getY(C);
          if (P < k + 0.06) {
            const W = ie((k + 0.06 - P) / (l.squash + 0.06));
            (M.setY(C, Math.max(P, k)), M.setX(C, T * (1 + W * 0.3)));
          }
        }
      }
      (U(t, n.K("tyre"), _, v(w), n.tyreCol), _.dispose());
    }
  const d = a + 0.016,
    i = l.burnt
      ? [0.2, 0.18, 0.16]
      : l.style === "alloy" || l.style === "cover"
        ? [0.55, 0.56, 0.58]
        : n.steelCol,
    u = p([
      [d, f * 0.84],
      [a + 0.002, f * 0.92],
      [a - 0.006, f * 0.8],
      [a - 0.012, f * 0.45],
      [a - 0.014, -f * 0.7],
    ]);
  (U(t, l.burnt ? n.K("burntRim") : n.K("rim"), u, v(), i), u.dispose());
  const x = !l.burnt && l.style === "cover" && !l.noCover;
  if ((l.style !== "alloy" || l.burnt) && !x) {
    const w = p([
      [a - 0.012, f * 0.45],
      [a * 0.78, f * 0.3],
      [a * 0.52, f * 0.42],
      [a * 0.3, f * 0.44],
      [0.001, f * 0.46],
    ]);
    (U(t, l.burnt ? n.K("burntRim") : n.K("rim"), w, v(), i), w.dispose());
  }
  if (!l.burnt && l.style === "cover" && !l.noCover) {
    const w = p([
      [d - 0.004, f * 0.9],
      [a * 0.9, f * 1],
      [a * 0.74, f * 0.95],
      [a * 0.5, f * 1.03],
      [a * 0.25, f * 0.98],
      [0.001, f * 1.05],
    ]);
    (U(t, n.K("chrome"), w, v(), [0.62, 0.63, 0.66]), w.dispose());
  } else if (!l.burnt && l.style === "alloy") {
    const w = p([
      [a - 0.012, f * 0.2],
      [a * 0.55, f * 0.1],
      [0.001, f * 0.12],
    ]);
    (U(t, "trim", w, v(), [0.02, 0.02, 0.02]), w.dispose());
    for (let M = 0; M < 5; M++) {
      const C = (M / 5) * Math.PI * 2 + 0.3,
        T = Math.cos(C),
        N = Math.sin(C),
        K = 0.05,
        O = a - 0.01;
      f0(
        t,
        n.K("chrome"),
        new z(e + s * f * 0.62, r + N * K, o + T * K),
        new z(e + s * f * 0.5, r + N * O, o + T * O),
        0.045,
        0.028,
        new z(s, 0, 0),
        [0.6, 0.61, 0.63],
      );
    }
    const _ = p(
      [
        [0.065, f * 0.55],
        [0.05, f * 0.68],
        [0.001, f * 0.7],
      ],
      10,
    );
    (U(t, n.K("chrome"), _, v(), [0.6, 0.61, 0.63]), _.dispose());
  } else if (!l.burnt) {
    const w = l.style === "army" || l.style === "bus" ? 6 : 4,
      _ = w > 4 ? a * 0.5 : 0.055;
    for (let M = 0; M < w; M++) {
      const C = (M / w) * Math.PI * 2,
        T = new b0(0.013, 0.013, 0.03, 5, 1, !0).rotateZ(Math.PI / 2);
      (U(
        t,
        n.K("chrome"),
        T,
        Z(e + s * f * 0.46, r + Math.sin(C) * _, o + Math.cos(C) * _),
        [0.35, 0.35, 0.36],
      ),
        T.dispose());
    }
  }
  if (l.burnt) {
    const w = new Ve(c * 0.9, 0.005, 3, 22);
    (U(
      t,
      n.K("iron"),
      w,
      Z(e + s * 0.02, r - 0.02, o, 0, Math.PI / 2, 0, 1, 0.92, 1),
    ),
      w.dispose());
  }
}
function Xt(n, t, e) {
  const r = !!t.burnt,
    o = Ot((t.seed ?? 1) * 7919 + n.length * 131),
    l = new Map();
  return {
    kind: n,
    o: t,
    burnt: r,
    rng: o,
    spec: e,
    sink(c) {
      let a = l.get(c);
      return (a || l.set(c, (a = new kn())), a);
    },
    sinks: l,
    K(c) {
      return r
        ? ({
            paint: "burnt",
            trim: "burnt",
            metal: "burnt",
            chrome: "burnt",
            lamp: "iron",
            hazard: "iron",
            glass: "burnt",
            rim: "burnt",
            burntRim: "burnt",
            tyre: "char",
            interior: "char",
            decal: "decal",
            tarp: "tarp",
            iron: "iron",
            char: "char",
          }[c] ?? c)
        : ({
            tyre: "trim",
            rim: "metal",
            chrome: "metal",
            iron: "iron",
            burntRim: "burnt",
            interior: "trim",
            char: "char",
          }[c] ?? c);
    },
  };
}
function T0(n, t, e, r, o = {}) {
  const l = o.nu ?? 6,
    s = o.nv ?? 3,
    c = o.off ?? 0.005,
    a = o.bulge ?? 0.006,
    h = o.rim ?? 0.01,
    f = typeof o.col == "function" ? o.col : () => o.col || [1, 1, 1],
    y = [];
  for (let p = 0; p <= s; p++) {
    const d = [];
    for (let i = 0; i <= l; i++) {
      const u = i / l,
        x = p / s,
        w = A0(A0(r[0][0], r[1][0], u), A0(r[3][0], r[2][0], u), x),
        _ = A0(A0(r[0][1], r[1][1], u), A0(r[3][1], r[2][1], u), x),
        M = e(w, _),
        C = Math.sqrt(
          Math.max(0, Math.sin(Math.PI * u) * Math.sin(Math.PI * x)),
        );
      d.push({
        top: M.p.clone().addScaledVector(M.n, c + a * C),
        bot: M.p.clone().addScaledVector(M.n, -h),
        n: M.n,
        uv: o.uv ? o.uv(u, x) : [w, _],
        col: f(u, x, C),
      });
    }
    y.push(d);
  }
  const m = y[s >> 1][l >> 1],
    v =
      new z()
        .subVectors(y[0][l].top, y[0][0].top)
        .cross(new z().subVectors(y[s][0].top, y[0][0].top))
        .dot(m.n) < 0;
  for (let p = 0; p < s; p++)
    for (let d = 0; d < l; d++) {
      const i = y[p][d],
        u = y[p][d + 1],
        x = y[p + 1][d + 1],
        w = y[p + 1][d];
      v
        ? n.quad(
            t,
            i.top,
            w.top,
            x.top,
            u.top,
            i.uv,
            w.uv,
            x.uv,
            u.uv,
            i.col,
            w.col,
            x.col,
            u.col,
          )
        : n.quad(
            t,
            i.top,
            u.top,
            x.top,
            w.top,
            i.uv,
            u.uv,
            x.uv,
            w.uv,
            i.col,
            u.col,
            x.col,
            w.col,
          );
    }
  if (h > 0.0025 || c > 0.0025) {
    const p = [];
    for (let u = 0; u <= l; u++) p.push(y[0][u]);
    for (let u = 1; u <= s; u++) p.push(y[u][l]);
    for (let u = l - 1; u >= 0; u--) p.push(y[s][u]);
    for (let u = s - 1; u >= 1; u--) p.push(y[u][0]);
    const d = m.top,
      i = o.rimKey || t;
    for (let u = 0; u < p.length; u++) {
      const x = p[u],
        w = p[(u + 1) % p.length],
        _ = o.rimCol || x.col,
        M = new z()
          .subVectors(x.bot, x.top)
          .cross(new z().subVectors(w.bot, x.top)),
        C = new z().addVectors(x.top, w.top).multiplyScalar(0.5).sub(d);
      M.dot(C) >= 0
        ? n.quad(i, x.top, x.bot, w.bot, w.top, x.uv, x.uv, w.uv, w.uv, _)
        : n.quad(i, x.top, w.top, w.bot, x.bot, x.uv, w.uv, w.uv, x.uv, _);
    }
  }
  return y;
}
const zo = (() => {
  const n = new p0(1, 1, 1);
  return (n.setIndex(Array.from(n.index.array).slice(12)), n);
})();
function f0(n, t, e, r, o, l, s, c) {
  const a = new z().subVectors(r, e),
    h = a.length();
  if (h < 1e-4) return;
  const f = a.clone().normalize(),
    y = s.clone().addScaledVector(f, -s.dot(f));
  (y.lengthSq() < 1e-8 && y.set(0, 1, 0), y.normalize());
  const m = new z().crossVectors(f, y),
    b = new J0()
      .makeBasis(f.multiplyScalar(h), y.multiplyScalar(l), m.multiplyScalar(o))
      .setPosition(e.clone().add(r).multiplyScalar(0.5));
  U(n, t, zo, b, c);
}
const U0 = (n, t, e, r, o, l, s, c, a, h = 0.01) =>
    U(
      n,
      t,
      g0(l - e, s - r, c - o, h),
      Z((e + l) / 2, (r + s) / 2, (o + c) / 2),
      a,
    ),
  L0 = new z(0, 1, 0),
  st = {
    head: (n, t, e) => ft([0.3, 0.31, 0.33], [0.78, 0.79, 0.8], e),
    tail: (n, t, e) => ft([0.3, 0.012, 0.01], [0.62, 0.03, 0.02], e),
    amber: (n, t, e) => ft([0.5, 0.2, 0.015], [0.85, 0.4, 0.03], e),
    white: (n, t, e) => ft([0.45, 0.45, 0.46], [0.8, 0.8, 0.8], e),
    round: (n, t, e) => ft([0.3, 0.31, 0.33], [0.85, 0.85, 0.86], e * e),
  },
  k0 = [0.025, 0.025, 0.027],
  hn = [0.09, 0.09, 0.095],
  Ze = [0.8, 0.81, 0.83];
