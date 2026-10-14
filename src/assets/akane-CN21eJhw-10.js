// assets/akane-CN21eJhw 10 — math
// Lines 3158-3466 of readable/assets/akane-CN21eJhw.pretty.js (statement-aligned).
function Po(e) {
  const a = document.createElement("canvas");
  a.width = a.height = 1024;
  const o = a.getContext("2d"),
    r = [-0.16, 0.05, 0.32, 0.85];
  (o.setTransform(
    1024 / r[2],
    0,
    0,
    -1024 / r[3],
    (-r[0] * 1024) / r[2],
    ((r[1] + r[3]) * 1024) / r[3],
  ),
    (o.fillStyle = "#000"),
    o.fillRect(-1, -1, 3, 3),
    (o.globalCompositeOperation = "lighter"));
  const i = _t(77),
    n = (u, l, v, g) => {
      const m = [];
      for (let y = 0; y < 20; y++) {
        const k = (y / 20) * Math.PI * 2,
          G = 1 + (i() - 0.5) * 0.55;
        m.push([u + Math.cos(k) * v * G, l + Math.sin(k) * g * G]);
      }
      (o.beginPath(),
        m.forEach((y, k) => (k ? o.lineTo(y[0], y[1]) : o.moveTo(y[0], y[1]))),
        o.closePath(),
        (o.fillStyle = "rgb(0,0,255)"),
        o.fill(),
        (o.strokeStyle = "rgb(0,255,0)"),
        (o.lineWidth = 0.0018),
        o.stroke(),
        (o.lineWidth = 9e-4));
      for (let y = 0; y < 3; y++) {
        const k = l + (i() - 0.5) * g * 1.2;
        (o.beginPath(),
          o.moveTo(u - v * 1.1, k + (i() - 0.5) * 0.003),
          o.lineTo(u + v * 1.1, k + (i() - 0.5) * 0.003),
          o.stroke());
      }
    };
  (n(0.074, 0.468, 0.017, 0.012),
    n(-0.086, 0.655, 0.011, 0.019),
    n(-0.07, 0.262, 0.008, 0.012),
    n(0.092, 0.73, 0.006, 0.008));
  const s = new e.CanvasTexture(a);
  return (
    (s.colorSpace = e.NoColorSpace),
    (s.anisotropy = 8),
    { tex: s, rect: r }
  );
}
const me = { thigh: 0.39, shin: 0.3955 },
  Ao = (e) => [e * 0.078, 0.86, 0],
  ht = (e) => [e * 0.078 * 0.92, 0.47, 0.012],
  pe = (e) => [e * 0.078 * 0.85, 0.075, -0.004];
function Wo(e) {
  const t = Z(e.sit ?? 0),
    a = Z(e.kneel ?? 0),
    o = Z(e.stomp ?? 0),
    r = 1 - Math.max(t, a, o),
    i = Math.max(Z(e.jump ?? 0), Z(e.hop ?? 0) * r),
    n = Z(e.bounce ?? 0, -0.03, 0.14) * r,
    s = Z(e.weight ?? 0, -1, 1) * r,
    u = Z(e.stamp ?? 0) * r,
    l = (e.stampSide ?? 1) >= 0 ? 1 : -1,
    v = e.seat ?? 0.46,
    g = e.block ?? 0.45,
    m = (e.stompSide ?? 1) >= 0 ? 1 : -1;
  let y = 0.86 + t * (v + 0.075 - 0.86) + a * (0.47 - 0.86) - o * 0.02;
  const k = i * 0.34;
  y += k - n - 0.012 * u - 0.006 * Math.abs(s);
  const G = t * -0.02 + a * 0.02 - 0.25 * n,
    d = -m * 0.018 * o + 0.034 * s - l * 0.022 * u,
    w = {};
  for (const x of [-1, 1]) {
    let p = pe(x).slice();
    const M = [x * 0.1, 0.075, 0.3],
      I = [x * 0.1, 0.19, -0.33];
    if (
      ((p = [
        p[0] + (M[0] - p[0]) * t + (I[0] - p[0]) * a,
        p[1] + (M[1] - p[1]) * t + (I[1] - p[1]) * a,
        p[2] + (M[2] - p[2]) * t + (I[2] - p[2]) * a,
      ]),
      x === m && o > 0)
    ) {
      const L = [x * 0.12, g + 0.075, 0.3];
      p = [n0(p[0], L[0], o), n0(p[1], L[1], o), n0(p[2], L[2], o)];
    }
    const P = Math.max(0, -x * s);
    ((p = [p[0] - x * 0.008 * P, p[1] + 0.022 * P, p[2] + 0.012 * P]),
      x === l &&
        u > 0 &&
        (p = [p[0] + x * 0.012 * u, p[1] + 0.2 * u, p[2] + 0.07 * u]),
      (p = [p[0], p[1] + k - i * 0.62 * 0 + i * 0.12, p[2] - i * 0.1]));
    const F = [x * 0.12, a * -0.6 + o * (x === m ? 0.3 : 0), 1];
    w[x] = { ankle: p, pole: F };
  }
  const f = {
    hipsY: y,
    hipsZ: G,
    hipsX: d,
    legs: w,
    sit: t,
    kneel: a,
    stomp: o,
    jump: i,
    stand: r,
    bounce: n,
    weight: s,
    stamp: u,
  };
  a > 0 && Go(e, f);
  const C = Z(e.walkAmp ?? 0) * r;
  if (C > 0.001) {
    const x = e.walk ?? 0,
      p = (e.walkStride ?? 0.3) * C,
      M = (e.walkLift ?? 0.085) * C,
      I = (me.thigh + me.shin) * 0.988;
    let P = 9;
    const F = {};
    for (const L of [-1, 1]) {
      const O = (((x + (L > 0 ? 0 : 0.5)) % 1) + 1) % 1;
      let J, s0;
      const $ = e.walkDuty ?? 0.6;
      if (O < $) ((J = p * (1 - 2 * (O / $))), (s0 = 0));
      else {
        const N = (O - $) / (1 - $),
          Y = N * N * (3 - 2 * N);
        ((J = -p + 2 * p * Y), (s0 = M * Math.sin(Math.PI * N)));
      }
      const r0 = pe(L),
        t0 = [r0[0] * (1 - 0.1 * C), r0[1] + s0, r0[2] + J + 0.02 * C];
      F[L] = t0;
      const V = t0[0] - L * 0.078,
        R = t0[2],
        H = Math.sqrt(Math.max(0.04, I * I - V * V - R * R));
      P = Math.min(P, t0[1] + H);
    }
    ((f.hipsY = Math.min(y, n0(y, P, C)) - 0.006 * C),
      (f.hipsX = 0.024 * C * Math.sin(x * Math.PI * 2 + 0.4)),
      (f.hipsZ = 0));
    for (const L of [-1, 1]) f.legs[L] = { ankle: F[L], pole: [L * 0.1, 0, 1] };
    f.walking = C;
  }
  return ((e.ride ?? 0) > 0 && Bo(e, f), f);
}
const Ge = [];
{
  for (const e of [-0.09, -0.03, 0.03, 0.09, 0.142]) Ge.push([0, 0, e]);
  for (let e = 1; e <= 3; e++) {
    const t = ((e / 4) * Math.PI) / 2;
    Ge.push(
      [0, 0.014 - 0.014 * Math.cos(t), 0.142 + 0.014 * Math.sin(t)],
      [0, 0.014 - 0.014 * Math.cos(t), -0.09 - 0.014 * Math.sin(t)],
    );
  }
  Ge.push(
    [0, 0.026, 0.156],
    [0, 0.04, 0.154],
    [0, 0.07, 0.152],
    [0, 0.1, 0.12],
  );
}
const Io = 0.046;
function Xt(e, t, a) {
  const o = me.thigh,
    r = me.shin;
  let i = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
    n = Math.sqrt(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]);
  const s = o + r - 0.001;
  if (n > s) {
    const k = s / n;
    ((i = i.map((G) => G * k)),
      (n = s),
      (t = [e[0] + i[0], e[1] + i[1], e[2] + i[2]]));
  }
  const u = i.map((k) => k / n),
    l = (o * o - r * r + n * n) / (2 * n),
    v = Math.sqrt(Math.max(0, o * o - l * l)),
    g = a[0] * u[0] + a[1] * u[1] + a[2] * u[2];
  let m = [a[0] - u[0] * g, a[1] - u[1] * g, a[2] - u[2] * g];
  const y = Math.sqrt(m[0] * m[0] + m[1] * m[1] + m[2] * m[2]) || 1;
  return (
    (m = m.map((k) => k / y)),
    {
      K: [
        e[0] + u[0] * l + m[0] * v,
        e[1] + u[1] * l + m[1] * v,
        e[2] + u[2] * l + m[2] * v,
      ],
      A: t,
    }
  );
}
function Yt(e, t, a) {
  const o = e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
    r = [
      e[1] * t[2] - e[2] * t[1],
      e[2] * t[0] - e[0] * t[2],
      e[0] * t[1] - e[1] * t[0],
    ];
  if (r[0] * r[0] + r[1] * r[1] + r[2] * r[2] < 1e-12) return a.slice();
  const n = 1 / (1 + o),
    s = r[0] * a[0] + r[1] * a[1] + r[2] * a[2],
    u = [
      r[1] * a[2] - r[2] * a[1],
      r[2] * a[0] - r[0] * a[2],
      r[0] * a[1] - r[1] * a[0],
    ];
  return [
    a[0] * o + u[0] + r[0] * s * n,
    a[1] * o + u[1] + r[1] * s * n,
    a[2] * o + u[2] + r[2] * s * n,
  ];
}
const Le = (e) => {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]) || 1;
  return [e[0] / t, e[1] / t, e[2] / t];
};
function Go(e, t) {
  const a = Math.PI / 180,
    o = (e.bodyYaw == null ? 0.6 * (e.yaw || 0) : e.bodyYaw) * a * 0.5,
    r = (Z(e.sway ?? 0, -15, 15) * t.stand + 3.5 * t.weight) * a,
    i = Math.cos(o),
    n = Math.sin(o),
    s = Z(t.kneel / 0.1),
    u = (l, v) => {
      const g = l * 0.078 * Math.cos(r),
        m = [
          t.hipsX + g * i,
          t.hipsY + l * 0.078 * Math.sin(r),
          t.hipsZ - g * n,
        ],
        y = t.legs[l].pole,
        k = [y[0] * i + y[2] * n, y[1], -y[0] * n + y[2] * i],
        { K: G, A: d } = Xt(m, v, k),
        w = ht(l),
        f = pe(l),
        C = Le([f[0] - w[0], f[1] - w[1], f[2] - w[2]]),
        x = Le([d[0] - G[0], d[1] - G[1], d[2] - G[2]]);
      let p = 9;
      for (const M of Ge) {
        const I = Yt(C, x, [l * 0.069 + M[0] - f[0], M[1] - f[1], M[2] - f[2]]);
        p = Math.min(p, d[1] + I[1]);
      }
      return { boot: p, knee: G[1] - Io };
    };
  for (const l of [-1, 1])
    for (let v = 0; v < 3; v++) {
      const g = u(l, t.legs[l].ankle);
      if (Math.abs(g.boot) < 5e-4) break;
      t.legs[l].ankle = [
        t.legs[l].ankle[0],
        t.legs[l].ankle[1] - g.boot * s,
        t.legs[l].ankle[2],
      ];
    }
}
const Do = [0, -0.075, 0.084];
function Bo(e, t) {
  const a = Z(e.ride),
    o = e.rideHips || [0, 0.94, 0],
    r = e.ridePegs || { 1: [0.2, 0.35, 0.05], [-1]: [-0.2, 0.35, 0.05] },
    i = Z(e.rideSwing ?? 0),
    n = Math.PI / 180;
  ((t.hipsX = n0(t.hipsX, o[0], a)),
    (t.hipsY = n0(t.hipsY, o[1], a)),
    (t.hipsZ = n0(t.hipsZ, o[2], a)));
  const s = (e.rideRoll ?? 0) * n;
  for (const u of [-1, 1]) {
    const l = r[u],
      v = [
        t.hipsX + u * 0.078 * Math.cos(s),
        t.hipsY + u * 0.078 * Math.sin(s),
        t.hipsZ,
      ],
      g = [u * 0.22, 0.02, 1];
    let m = [l[0] + u * 0.004, l[1] + 0.112, l[2] - 0.045];
    for (let k = 0; k < 3; k++) {
      const { K: G, A: d } = Xt(v, m, g),
        w = ht(u),
        f = pe(u),
        C = Yt(
          Le([f[0] - w[0], f[1] - w[1], f[2] - w[2]]),
          Le([d[0] - G[0], d[1] - G[1], d[2] - G[2]]),
          Do,
        );
      m = [l[0] - C[0], l[1] - C[1], l[2] - C[2]];
    }
    if (u < 0 && i > 0) {
      const k = Math.sin(Math.PI * i);
      m = [m[0] - 0.05 * k, m[1] + 0.5 * k, m[2] - 0.22 * k];
    }
    const y = t.legs[u];
    ((y.ankle = [
      n0(y.ankle[0], m[0], a),
      n0(y.ankle[1], m[1], a),
      n0(y.ankle[2], m[2], a),
    ]),
      (y.pole = [
        n0(y.pole[0], g[0], a),
        n0(y.pole[1], g[1], a),
        n0(y.pole[2], g[2], a),
      ]));
  }
  ((t.ride = a), (t.stand *= 1 - a));
}
