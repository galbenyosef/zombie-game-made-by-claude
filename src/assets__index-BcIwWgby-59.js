// assets__index-BcIwWgby 59 — math
// Lines 17900-18199 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function wa(s, o) {
  const t = [],
    u = [],
    e = [],
    r = [],
    a = [];
  for (const i of s) {
    const d = i[0].length,
      y = t.length / 3,
      w = o();
    for (let l = 0; l < i.length; l++)
      for (let f = 0; f < d; f++) {
        const [h, c, M, m, k] = i[l][f],
          S = l === i.length - 1 ? 0.8 : 0.35,
          A = Math.hypot(m, S, k);
        (t.push(h, c, M), u.push(m / A, S / A, k / A), e.push(go[0], go[1]));
        const b = w * (0.8 + (0.4 * ((l * 7 + f * 3) % 5)) / 5);
        r.push(0.8 * b, 0.9 * b, 0.85 * b);
      }
    for (let l = 0; l < i.length - 1; l++)
      for (let f = 0; f < d; f++) {
        const h = y + l * d + f,
          c = y + l * d + ((f + 1) % d),
          M = h + d,
          m = c + d;
        a.push(h, M, c, c, M, m);
      }
    const g = t.length / 3,
      z = i[0];
    let x = 0,
      v = 0,
      n = 0;
    for (const l of z) ((x += l[0]), (v += l[1]), (n += l[2]));
    (t.push(x / d, v / d + 0.3, n / d),
      u.push(0, -1, 0),
      e.push(go[0], go[1]),
      r.push(0.3, 0.34, 0.32));
    for (let l = 0; l < d; l++) a.push(y + l, y + ((l + 1) % d), g);
  }
  const p = new Rt();
  return (
    p.setAttribute("position", new xt(t, 3)),
    p.setAttribute("normal", new xt(u, 3)),
    p.setAttribute("uv", new xt(e, 2)),
    p.setAttribute("color", new xt(r, 3)),
    p.setAttribute("aFlex", new xt(new Float32Array(t.length / 3).fill(-1), 1)),
    p.setIndex(a),
    p
  );
}
const Jt = Math.PI * 2,
  eo = (s) => ((s = (s + Math.PI) % Jt), s < 0 && (s += Jt), s - Math.PI),
  Qo = (s, o, t) => {
    const u = Math.max(0, Math.min(1, (t - s) / (o - s)));
    return u * u * (3 - 2 * u);
  },
  ts = 0.42,
  gs = (s, o) => [
    0.45 * Math.exp(-Math.max(0, s) / 1.1),
    2 + Math.min(0.97, Math.max(0, o)),
    0.45 * Math.exp(-Math.max(0, s) / 6),
  ];
function Os(s, o) {
  const t = s.attributes.position,
    u = new Float32Array(t.count * 3);
  for (let e = 0; e < t.count; e++)
    u.set(o(t.getX(e), t.getY(e), t.getZ(e), e), e * 3);
  return (s.setAttribute("aK", new vt(u, 3)), s);
}
function Xc(s, o, t, u) {
  const e = s.r,
    r = 8.5 + t() * 6.5,
    a = 0.32 + t() * 0.22,
    p = (0.2 + t() * 0.2) * (t() < 0.5 ? -1 : 1),
    i = 9 + Math.floor(t() * 6),
    d = 0.1 + t() * 0.07,
    y = 0.5 + t() * 0.4,
    w = t() * Jt,
    g = [0.07 + t() * 0.1, t() * Jt, 0.04 + t() * 0.06, t() * Jt],
    z = Math.atan2(s.toPath[1], s.toPath[0]) + (t() - 0.5) * 1,
    x = 0.04 + t() * 0.05,
    v = t() * Jt,
    n = 0.3 + t() * 0.5,
    l = t() * Jt,
    f = 0.15 + t() * 0.3,
    h = (T) => {
      const D = Math.min(1, Math.max(0, T) / r),
        N = Math.sin(Math.PI * D) * n,
        H = Math.sin(Jt * D) * f;
      return [
        Math.cos(z) * x * T + Math.cos(v) * N + Math.cos(l) * H,
        Math.sin(z) * x * T + Math.sin(v) * N + Math.sin(l) * H,
      ];
    },
    c = h(Math.max(0, Math.min(r, 1.5 - o))),
    M = (T) => {
      const D = h(T);
      return [s.x + D[0] - c[0], o + T, s.z + D[1] - c[1]];
    },
    m = 5 + Math.floor(t() * 3),
    k = [];
  for (let T = 0, D = t() * Jt; T < m; T++) {
    let N = D + (T / m) * Jt + (t() - 0.5) * 0.6;
    for (const H of u)
      Math.abs(eo(N - H)) < 0.55 && (N = H + Math.sign(eo(N - H) || 1) * 0.55);
    k.push({ a: N, A: 0.28 + t() * 0.45, L: 0.7 + t() * 0.8 });
  }
  const S = [];
  for (let T = 0, D = 3 + Math.floor(t() * 3); T < D; T++)
    S.push({
      a: t() * Jt,
      w: 0.05 + t() * 0.07,
      d: 0.18 + t() * 0.2,
      y0: -0.5 + t() * 2.5,
      y1: 3 + t() * (r + 2),
    });
  const A = [];
  for (let T = 0, D = 2 + Math.floor(t() * 4); T < D; T++)
    A.push({
      a: t() * Jt,
      y: 0.8 + t() * (r - 2),
      s: 0.25 + t() * 0.45,
      h: 0.08 + t() * 0.14,
    });
  const b =
    t() < 0.85
      ? {
          a: Math.atan2(s.toPath[1], s.toPath[0]) + (t() - 0.5) * 2,
          y: 0.5 + t() * 1.8,
          w: 0.2 + t() * 0.16,
          h: 0.35 + t() * 0.45,
          d: 0.5 + t() * 0.25,
        }
      : null;
  if (b) for (const T of u) Math.abs(eo(b.a - T)) < 0.7 && (b.a = T + Math.PI);
  const P = [];
  for (let T = 0, D = 4 + Math.floor(t() * 3), N = t() * Jt; T < D; T++)
    P.push({
      a: N + (T / D) * Jt + (t() - 0.5) * 0.7,
      h: T === 0 ? 1 + t() * 1.3 : 0.2 + t() * 0.85,
      w: T === 0 ? 0.5 + t() * 0.35 : 0.2 + t() * 0.35,
    });
  const _ = Array.from({ length: 13 }, () => (t() - 0.5) * 0.3),
    I = (T) => {
      let D = 0;
      for (const W of P)
        D = Math.max(
          D,
          W.h * Math.pow(Math.max(0, 1 - Math.abs(eo(T - W.a)) / W.w), 0.75),
        );
      const N = ((((T % Jt) + Jt) % Jt) / Jt) * 13,
        H = Math.floor(N),
        Q = N - H;
      return r + D + _[H % 13] * (1 - Q) + _[(H + 1) % 13] * Q;
    },
    R = (T) =>
      (e *
        (1.04 - 0.3 * Math.min(1, Math.max(0, T) / r)) *
        (1 + a * Math.exp(-Math.max(0, T) / 0.75))) /
      (1 + a * Math.exp(-1.5 / 0.75)),
    V = (T, D) => {
      const N = D - p * T;
      let H =
        1 +
        g[0] * Math.cos(2 * (N - g[1])) +
        g[2] * Math.cos(3 * (D - g[3]) + T * 0.2);
      H +=
        d *
        (Math.pow(
          Math.abs(Math.sin(i * 0.5 * N + w + 0.4 * Math.sin(N * 2 + T * 0.3))),
          y,
        ) -
          0.6) *
        (0.6 + 0.4 * Math.sin(T * 0.7 + N));
      for (const W of k)
        H +=
          W.A *
          Math.pow(Math.max(0, Math.cos(D - W.a)), 10) *
          Math.exp(-Math.max(0, T) / W.L) *
          1.6;
      for (const W of S) {
        const B = eo(N - W.a) / W.w;
        Math.abs(B) < 1 &&
          (H -=
            W.d *
            (1 - B * B) *
            (1 - B * B) *
            Qo(W.y0, W.y0 + 0.6, T) *
            (1 - Qo(W.y1 - 0.8, W.y1, T)));
      }
      for (const W of A) {
        const B = eo(D - W.a) * R(W.y),
          F = T - W.y,
          E = (B * B + F * F) / (W.s * W.s);
        E < 4 && (H += W.h * Math.exp(-E * 1.5));
      }
      H +=
        0.035 * It(N * 2.1 + s.seed * 7, T * 1.3) +
        0.02 * It(N * 6.3, T * 4.1 + s.seed);
      let Q = 0;
      if (b) {
        const W = eo(D - b.a) / b.w,
          B = (T - b.y) / b.h,
          F = W * W + B * B;
        if (F < 1) {
          const E = Math.pow(1 - F, 0.55);
          ((H -= b.d * E), (Q = Math.min(1, E * 1.6)));
        } else F < 1.9 && (H += 0.07 * Math.sin(((F - 1) / 0.9) * Math.PI));
      }
      return [R(T) * Math.max(0.12, H), Q];
    },
    L = [];
  for (let T = -0.6; T < 1.2; T += 0.13) L.push(T);
  for (let T = 1.2; T < 4; T += 0.26) L.push(T);
  for (let T = 4; T < r - 0.2; T += 0.5) L.push(T);
  for (const T of [0, 0.22, 0.5, 0.85, 1.3, 1.85, 2.5, 3.2]) L.push(r + T);
  L.push(r - 0.4);
  const K = 44,
    j = L.length,
    O = new Float32Array(j * (K + 1) * 3),
    J = new Float32Array(j * (K + 1) * 2),
    tt = new Float32Array(j * (K + 1) * 3),
    st = Math.max(1, Math.round(Jt * e * ts)) / (Jt * ts);
  for (let T = 0; T < j; T++) {
    const D = L[T],
      N = T === j - 1;
    for (let H = 0; H <= K; H++) {
      const Q = (H / K) * Jt,
        W = T * (K + 1) + H;
      let B,
        F,
        E = D;
      if (N)
        ((B = R(r) * 0.05), (F = 0.85), (E = r - 0.4 + _[(H % K) % 13] * 0.5));
      else if (D < r) [B, F] = V(D, Q);
      else {
        const et = I(Q),
          [nt, it] = V(r, Q);
        D <= et
          ? ((B = nt * (1 - 0.1 * (D - r)) * (1 - 0.25 * Qo(et - 0.6, et, D))),
            (F = it * 0.5 + 0.25 * Qo(et - 0.5, et, D)))
          : ((B = nt * (0.5 + 0.08 * Math.sin(Q * 7 + s.seed))),
            (E = et - 0.05),
            (F = 0.65));
      }
      const Y = M(E);
      ((O[W * 3] = Y[0] + Math.cos(Q) * B),
        (O[W * 3 + 1] = Y[1]),
        (O[W * 3 + 2] = Y[2] + Math.sin(Q) * B),
        (J[W * 2] = (Q - p * E) * st * ts),
        (J[W * 2 + 1] = E * ts),
        tt.set(gs(E, F), W * 3));
    }
  }
  const G = new Float32Array(O.length),
    q = new dt(),
    U = new dt(),
    Z = new dt(),
    ot = (T, D) => {
      const N = T * (K + 1) + ((D + K) % K);
      return [O[N * 3], O[N * 3 + 1], O[N * 3 + 2]];
    };
  for (let T = 0; T < j; T++)
    for (let D = 0; D <= K; D++) {
      const N = ot(T, D + 1),
        H = ot(T, D - 1),
        Q = ot(Math.min(j - 1, T + 1), D),
        W = ot(Math.max(0, T - 1), D);
      (q.set(N[0] - H[0], N[1] - H[1], N[2] - H[2]),
        U.set(Q[0] - W[0], Q[1] - W[1], Q[2] - W[2]),
        Z.crossVectors(U, q),
        Z.lengthSq() < 1e-12 && Z.set(0, 1, 0),
        Z.normalize());
      const B = T * (K + 1) + D,
        F = M(L[T]);
      (T < j - 1 &&
        L[T] < r &&
        (O[B * 3] - F[0]) * Z.x + (O[B * 3 + 2] - F[2]) * Z.z < 0 &&
        Z.negate(),
        (G[B * 3] = Z.x),
        (G[B * 3 + 1] = Z.y),
        (G[B * 3 + 2] = Z.z));
    }
  const $ = [];
  for (let T = 0; T < j - 1; T++)
    for (let D = 0; D < K; D++) {
      const N = T * (K + 1) + D,
        H = N + K + 1;
      $.push(N, H, N + 1, N + 1, H, H + 1);
    }
  const C = new Rt();
  return (
    C.setAttribute("position", new vt(O, 3)),
    C.setAttribute("normal", new vt(G, 3)),
    C.setAttribute("uv", new vt(J, 2)),
    C.setAttribute("aK", new vt(tt, 3)),
    C.setIndex($),
    { geo: C, axis: M, rad: V, H: r, B: k, r0: e }
  );
}
