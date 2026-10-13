// assets__city-COfbVKUz 03 — math
// Lines 668-990 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
const $t = {
    eye: [0.5, 0.9, 0],
    rotorUp: 2.75,
    rotorR: 5.5,
    skidDown: 0.65,
    tailBack: 7.5,
    tailUp: 0.9,
    tailR: 0.85,
    noseFwd: 3.1,
    bodyR: 1,
  },
  Xt = -Math.PI / 2,
  nt = [
    [0, 452, 0.65, 92],
    [1.2, 452, 0.95, 92],
    [2.4, 451.9, 3.2, 91.4],
    [3.6, 451.1, 7.4, 88.6],
    [4.8, 449.4, 12.4, 82],
    [6, 446.8, 17.6, 70.5],
    [7.2, 443.8, 22.4, 53.5],
    [8.4, 441.4, 26.4, 31.5],
    [9.6, 440.2, 29.5, 4.5],
    [10.8, 440, 32, -26],
    [12, 440, 34.5, -59],
    [13.2, 440, 36.8, -93],
    [14, 440, 37.49, -115],
    [14.84, 440.01, 37.89, -137.01],
    [15.71, 441.29, 37.26, -158.96],
    [16.58, 447.23, 36, -180.06],
    [17.45, 459.32, 35.24, -198.33],
    [18.32, 476.46, 35, -211.98],
    [19.17, 496.98, 35, -219.67],
    [19.96, 518.83, 35, -221.91],
    [20.71, 540.83, 35, -222],
    [21.41, 562.83, 35, -222],
    [22.09, 584.83, 35, -222],
    [22.75, 606.83, 35, -222],
    [23.39, 628.83, 35, -222],
    [24.03, 650.83, 35, -222],
    [24.66, 672.83, 35, -222],
    [25.29, 694.83, 35, -222],
    [25.92, 716.83, 35, -222],
    [26.55, 738.83, 35, -222],
    [27.81, 783, 35.2, -222],
    [29.01, 825, 35.6, -222],
    [30.18, 866, 36.6, -222],
    [31.18, 897, 39, -222],
    [32.18, 921, 43.6, -222],
    [33.18, 938, 51.5, -222],
    [34.18, 947, 63.5, -222],
    [35.18, 950.4, 77.5, -222],
    [36.18, 952.2, 91, -222],
    [37, 956.6, 99.5, -222],
    [37.6, 962, 104.5, -222],
    [39.34, 982, 107.4, -222],
    [40.74, 1001.99, 107.04, -222.41],
    [41.95, 1021.44, 104.2, -226.68],
    [43.07, 1037.8, 98.87, -237.94],
    [44.14, 1048.2, 91.06, -254.85],
    [45.16, 1051.75, 81.91, -274.46],
    [46.09, 1052, 71.99, -294.48],
    [46.93, 1052, 61.99, -314.48],
    [47.69, 1052, 52.44, -334.48],
    [48.41, 1052, 42.94, -354.48],
    [49.11, 1052, 34.79, -374.48],
    [49.8, 1052, 26.79, -394.48],
    [50.49, 1052, 19.82, -414.48],
    [51.18, 1052, 13.55, -434.48],
    [51.87, 1052, 8.6, -454.48],
    [52.69, 1052, 4.8, -476.48],
    [53.56, 1052, 4, -498.48],
    [54.52, 1052.71, 1.5, -520.46],
    [55.54, 1058.23, -2.5, -541.64],
    [56.54, 1071.18, -5.3, -559.26],
    [57.53, 1089.88, -6.9, -570.58],
    [58.49, 1111.43, -7.3, -574.58],
    [59.4, 1133.43, -7.3, -574.89],
    [60.34, 1155.43, -7.3, -574.89],
    [61.34, 1177.43, -6.42, -574.89],
    [62.36, 1199.42, -4.73, -575.4],
    [63.37, 1220.78, -1.46, -580.24],
    [64.38, 1238.88, 3.36, -592.5],
    [65.38, 1250.91, 6.71, -610.75],
    [66.34, 1255.54, 9.08, -632.16],
    [67.27, 1256, 11.19, -654.16],
    [68.2, 1256, 13.24, -676.16],
    [69.12, 1256, 15.6, -698],
    [69.96, 1256.3, 17.6, -716],
    [70.76, 1257.2, 18.6, -730],
    [71.56, 1258.6, 17, -740.5],
    [72.36, 1259.8, 12.5, -748],
    [73.16, 1260.6, 6.2, -752.5],
    [73.86, 1261, 0.65, -755],
  ],
  Me = {
    park: 8.4,
    birds: 10.9,
    crane: 17,
    glass: 22.4,
    gap: 24.9,
    smokeIn: 29.6,
    smokeOut: 31,
    climb: 33,
    crest: 37.6,
    tank: 47.3,
    heli2: 50,
    highway: 52.9,
    bridge: 60,
    quay: 65.4,
    wires: 68,
    clip: 69.6,
    crash: 73.86,
  };
function ct(m, e) {
  const d = m.length,
    n = new Float64Array(d - 1),
    h = new Float64Array(d),
    c = new Float64Array(d),
    w = new Float64Array(d),
    s = new Float64Array(d),
    x = new Float64Array(d),
    k = new Float64Array(d),
    P = new Float64Array(d);
  for (let g = 0; g < d - 1; g++) n[g] = m[g + 1] - m[g];
  for (let g = 1; g < d - 1; g++)
    h[g] = (3 / n[g]) * (e[g + 1] - e[g]) - (3 / n[g - 1]) * (e[g] - e[g - 1]);
  c[0] = 1;
  for (let g = 1; g < d - 1; g++)
    ((c[g] = 2 * (m[g + 1] - m[g - 1]) - n[g - 1] * w[g - 1]),
      (w[g] = n[g] / c[g]),
      (s[g] = (h[g] - n[g - 1] * s[g - 1]) / c[g]));
  c[d - 1] = 1;
  for (let g = d - 2; g >= 0; g--)
    ((k[g] = s[g] - w[g] * k[g + 1]),
      (x[g] = (e[g + 1] - e[g]) / n[g] - (n[g] * (k[g + 1] + 2 * k[g])) / 3),
      (P[g] = (k[g + 1] - k[g]) / (3 * n[g])));
  const _ = (g) => {
    if (g <= m[0]) return 0;
    if (g >= m[d - 1]) return d - 2;
    let M = 0,
      N = d - 2;
    for (; M < N;) {
      const T = (M + N + 1) >> 1;
      m[T] <= g ? (M = T) : (N = T - 1);
    }
    return M;
  };
  return {
    at(g) {
      const M = _(g),
        N = g - m[M];
      return e[M] + x[M] * N + k[M] * N * N + P[M] * N * N * N;
    },
    vel(g) {
      const M = _(g),
        N = g - m[M];
      return x[M] + 2 * k[M] * N + 3 * P[M] * N * N;
    },
    acc(g) {
      const M = _(g),
        N = g - m[M];
      return 2 * k[M] + 6 * P[M] * N;
    },
  };
}
const ke = 9.81;
function Pe() {
  const m = nt.map((i) => i[0]),
    e = ct(
      m,
      nt.map((i) => i[1]),
    ),
    d = ct(
      m,
      nt.map((i) => i[2]),
    ),
    n = ct(
      m,
      nt.map((i) => i[3]),
    ),
    h = m[0],
    c = m[m.length - 1],
    w = (i) => (i < h ? h : i > c ? c : i),
    s = (i, t = [0, 0, 0]) => (
      (i = w(i)),
      (t[0] = e.at(i)),
      (t[1] = d.at(i)),
      (t[2] = n.at(i)),
      t
    ),
    x = (i, t = [0, 0, 0]) => (
      (i = w(i)),
      (t[0] = e.vel(i)),
      (t[1] = d.vel(i)),
      (t[2] = n.vel(i)),
      t
    ),
    k = (i, t = [0, 0, 0]) => (
      (i = w(i)),
      (t[0] = e.acc(i)),
      (t[1] = d.acc(i)),
      (t[2] = n.acc(i)),
      t
    ),
    P = 0.05,
    _ = Math.ceil((c - h) / P) + 1,
    g = new Float64Array(_);
  let M = Xt;
  for (let i = 0; i < _; i++) {
    const t = h + i * P,
      u = e.vel(t),
      o = n.vel(t),
      l = Math.hypot(u, o);
    let f = l > 0.4 ? Math.atan2(u, o) : M;
    for (; f - M > Math.PI;) f -= 2 * Math.PI;
    for (; f - M < -Math.PI;) f += 2 * Math.PI;
    const z = Math.min(1, Math.max(0, (l - 0.4) / 5));
    g[i] = M = M + (f - M) * (i === 0 ? 0 : z);
  }
  const N = (i, t) => {
      const u = new Float64Array(i.length);
      for (let o = 0; o < i.length; o++) {
        let l = 0,
          f = 0;
        for (let z = -t; z <= t; z++) {
          const A = Math.min(i.length - 1, Math.max(0, o + z));
          ((l += i[A]), f++);
        }
        u[o] = l / f;
      }
      return u;
    },
    T = N(N(g, 4), 4),
    S = (i, t) => {
      const u = (w(t) - h) / P,
        o = Math.min(_ - 2, Math.floor(u)),
        l = u - o;
      return i[o] + (i[o + 1] - i[o]) * l;
    },
    v = (i) => S(T, i),
    a = [0, 0, 0],
    r = [0, 0, 0],
    y = (i) => {
      a[0] = a[1] = a[2] = 0;
      for (const t of [-0.3, -0.15, 0, 0.15, 0.3])
        (k(i + t, r),
          (a[0] += r[0] / 5),
          (a[1] += r[1] / 5),
          (a[2] += r[2] / 5));
      return a;
    },
    b = (i, t = {}) => {
      const u = x(i),
        o = y(i),
        l = Math.hypot(u[0], u[2]),
        f = v(i),
        z = Math.sin(f),
        A = Math.cos(f),
        F = o[0] * z + o[2] * A,
        E = o[0] * -A + o[2] * z,
        K = Math.max(6.5, ke + o[1]);
      return (
        (t.heading = f),
        (t.bank = Math.max(-0.9, Math.min(0.9, Math.atan2(E, K)))),
        (t.pitch = Math.max(
          -0.5,
          Math.min(0.5, -Math.atan2(F, K) - Math.min(l, 40) * 0.0035),
        )),
        t
      );
    },
    p = [];
  for (let i = h; i <= c + 1e-9; i += 0.05) {
    const t = s(i);
    p.push({ t: i, x: t[0], y: t[1], z: t[2] });
  }
  return {
    T: m,
    t0: h,
    t1: c,
    pos: s,
    vel: x,
    acc: k,
    heading: v,
    attitude: b,
    samples: p,
    FRAME: $t,
  };
}
function Yt(m, e, d = m.attitude(e)) {
  const n = m.pos(e),
    h = m.FRAME,
    c = Math.cos(d.heading),
    w = Math.sin(d.heading),
    s = Math.cos(d.bank),
    x = Math.sin(d.bank),
    k = Math.cos(d.pitch),
    P = Math.sin(d.pitch),
    _ = [w, 0, c],
    g = [c, 0, -w],
    M = [0, 1, 0],
    N = [_[0] * k + M[0] * P, _[1] * k + M[1] * P, _[2] * k + M[2] * P],
    T = [M[0] * k - _[0] * P, M[1] * k - _[1] * P, M[2] * k - _[2] * P],
    S = [T[0] * s - g[0] * x, T[1] * s - g[1] * x, T[2] * s - g[2] * x],
    v = [g[0] * s + T[0] * x, g[1] * s + T[1] * x, g[2] * s + T[2] * x],
    a = (r, y, b) => [
      n[0] + N[0] * r + v[0] * y + S[0] * b,
      n[1] + N[1] * r + v[1] * y + S[1] * b,
      n[2] + N[2] * r + v[2] * y + S[2] * b,
    ];
  return {
    p: n,
    f: N,
    l: v,
    u: S,
    rotor: a(0, 0, h.rotorUp),
    tail: a(-h.tailBack, 0, h.tailUp),
    nose: a(h.noseFwd, 0, 0.4),
    skid: a(0, 0, -h.skidDown),
    eye: a(h.eye[2], h.eye[0], h.eye[1]),
    at: a,
  };
}
