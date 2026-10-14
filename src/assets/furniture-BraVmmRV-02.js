// assets/furniture-BraVmmRV 02 — math
// Lines 312-556 of readable/assets/furniture-BraVmmRV.pretty.js (statement-aligned).
const S0 = 0.15,
  Vt = 0.27,
  q = { W: 2.65, E: 9.35, N: 200.15, S: 206.85 },
  $ = { x0: 2.5, x1: 9.5, z0: 200, z1: 207 },
  K = { x0: 2.8, x1: 9.2, z0: 200.3, z1: 206.7 },
  x0 = 0.11,
  ot = 0.02,
  ht = (z) => 0.17 + z * Vt,
  gt = (z) => 0.305 + z * Vt,
  nt = [0, 8],
  et = [-1, 8],
  v0 = 0.3,
  q0 = (40 * Math.PI) / 180,
  Bt = Math.tan(q0),
  U = 6,
  Tt = 2.755,
  e0 = (z) => Tt + (U - Math.abs(z - U) - q.W) * Bt,
  Pt = e0(U),
  t0 = { z0: 199.7, z1: 207.3, x0: 2, x1: 10, T: 0.13 },
  ft = 0.07,
  to = [199.93, 200.7, 201.5, 202.3, 203.1, 203.9, 204.7, 205.5, 206.3, 207.07],
  Et = [201.5, 203.1, 204.7, 206.3],
  Xt = 2.49,
  jt = 0.11,
  l0 = {
    z0: 198.35,
    z1: 200,
    x0: 2.35,
    x1: 9.65,
    y: 0.022,
    posts: [
      [2.72, 198.56],
      [9.28, 198.56],
    ],
    postR: 0.115,
    beamZ: 198.56,
    roof: {
      z0: 198.18,
      x0: 2.18,
      x1: 9.82,
      yWall: 2.98,
      slope: Math.tan((20 * Math.PI) / 180),
      T: 0.11,
    },
  },
  G0 = (z) => l0.roof.yWall - ($.z0 - z) * l0.roof.slope,
  bt = {
    door: { wall: "N", a: 5.52, b: 6.48, y0: 0, y1: 1.97, hinge: "b" },
    back: { wall: "S", a: 5.52, b: 6.48, y0: 0, y1: 1.97, hinge: "a" },
    W1: {
      wall: "N",
      a: 3.52,
      b: 4.28,
      y0: 0.9,
      y1: 1.74,
      win: !0,
      shutters: !0,
    },
    W2: { wall: "E", a: 202.36, b: 203.12, y0: 0.99, y1: 1.76, win: !0 },
    W3: {
      wall: "S",
      a: 3.42,
      b: 4.18,
      y0: 0.9,
      y1: 1.74,
      win: !0,
      shutters: !0,
    },
  },
  O = {
    z0: 202.6,
    z1: 204.2,
    front: 3.36,
    mantelY: 1.32,
    breast: [2.8, 3.26, 202.78, 204.02],
    box: { z0: 203, z1: 203.8, y1: 0.84, back: 2.62 },
    stack: { x0: 1.93, z0: 202.9, z1: 203.9, top: 6.05 },
    base: { x0: 1.78, z0: 202.62, z1: 204.18, top: 1.9 },
    hearth: { x1: 3.98, z0: 202.46, z1: 204.34 },
  },
  oo = { x0: 7.84, x1: 9.18, z0: 204.52, z1: 206.68, top: 0.6 },
  so = { cx: 5.3, cz: 203.3, hx: 0.64, hz: 0.4, top: 0.76 },
  xt = { x: 7.92, z: 203.24, yaw: -0.6 },
  mo = {
    W1: {
      hinge: "b",
      over: 0.04,
      y0: 0.8,
      h: 1.06,
      cracks: [
        [0.2, 0.014],
        [0.5, 0.019],
        [0.66, 0.012],
      ],
      slot: [2, 0.62, 0.014],
    },
    W2: {
      hinge: "a",
      over: 0.07,
      y0: 0.89,
      h: 0.97,
      cracks: [
        [0.24, 0.023],
        [0.55, 0.021],
        [0.73, 0.024],
      ],
      slot: [1, 0.54, 0.02],
      brace: !1,
    },
    W3: {
      hinge: "b",
      over: 0.04,
      y0: 0.865,
      h: 0.995,
      cracks: [
        [0.27, 0.017],
        [0.53, 0.012],
        [0.7, 0.015],
      ],
      slot: [1, 0.4, 0.012],
    },
  },
  Nt = { az: 76, el: 19 },
  zo = () => {
    const z = (Nt.az * Math.PI) / 180,
      t = (Nt.el * Math.PI) / 180;
    return [Math.cos(t) * Math.sin(z), Math.sin(t), -Math.cos(t) * Math.cos(z)];
  },
  Mo = {
    ring: [
      [0.9, 198.05],
      [3.4, 197.85],
      [6, 197.75],
      [8.6, 197.85],
      [10.7, 198.3],
      [11.05, 200.6],
      [11.1, 202.8],
      [11.05, 205],
      [10.7, 207.55],
      [8.5, 208.5],
      [6, 208.65],
      [3.5, 208.5],
      [1.25, 208.1],
      [0.3, 206],
      [0.2, 203.6],
      [0.2, 201.35],
      [0.35, 199.4],
    ],
    windows: {
      W1: [3.9, 199.22, 0],
      W2: [9.86, 202.66, -Math.PI / 2],
      W3: [3.8, 207.75, Math.PI],
    },
    door: [6, 199.2, 0],
    back: [6, 207.75, Math.PI],
  },
  mt = (z, t) => Math.min(z - q.W, q.E - z, t - q.N, q.S - t);
function z0(z, t, k) {
  const o = r0(-0.07, 0.07, mt(z, k)),
    d = 1 - 0.32 * r0(1.9, 5, t),
    i = 0.76 + 0.24 * r0(0, 0.9, t);
  return [
    Y0(0.74 * i, 0.97 * d, o),
    Y0(0.73 * i, 0.83 * d, o),
    Y0(0.7 * i, 0.67 * d, o),
  ];
}
const no = (z, t, k) => {
    const o = r0(-0.05, 0.05, mt(z, k)),
      d = 1 - 0.25 * r0(1.8, 2.6, t);
    return [Y0(0.66, 0.98 * d, o), Y0(0.66, 0.92 * d, o), Y0(0.64, 0.8 * d, o)];
  },
  _0 = (z, t, k) => {
    const o = r0(-0.04, 0.04, mt(z, k)),
      d = 1 - 0.38 * r0(2.6, 5.2, t);
    return [
      Y0(0.72, 0.93 * d, o),
      Y0(0.71, 0.79 * d, o),
      Y0(0.68, 0.63 * d, o),
    ];
  };
function Yt(z) {
  const t = [];
  for (const k of Object.values(bt))
    k.wall === z && t.push({ a: k.a, b: k.b, y0: k.y0, y1: k.y1 });
  return (z === "W" && t.push({ a: O.z0, b: O.z1, y0: -1, y1: 2 }), t);
}
const Rt = (z, t) => z - S0 * 0.9 < t.y1 && z + S0 * 0.9 > t.y0;
function eo(z) {
  const t = [];
  if (z.wall === "N" || z.wall === "S")
    for (let d = nt[0]; d <= nt[1]; d++) t.push(ht(d));
  else for (let d = et[0]; d <= et[1]; d++) t.push(gt(d));
  let k = 9,
    o = -9;
  for (const d of t)
    Rt(d, z) ||
      (d > (z.y0 + z.y1) / 2
        ? (k = Math.min(k, d - S0))
        : (o = Math.max(o, d + S0)));
  return { top: k, bot: o };
}
function ao(z, t, k, o) {
  let d = [[z, t]];
  for (const i of o) {
    if (!Rt(k, i)) continue;
    const f = [];
    for (const [Y, n] of d) {
      if (i.b <= Y || i.a >= n) {
        f.push([Y, n]);
        continue;
      }
      (i.a > Y && f.push([Y, i.a]), i.b < n && f.push([i.b, n]));
    }
    d = f;
  }
  return d.filter(([i, f]) => f - i > 0.05);
}
function co(z, t, k, o, d) {
  const i = new Set([z, t]);
  for (const n of d)
    (n.a > z && n.a < t && i.add(n.a), n.b > z && n.b < t && i.add(n.b));
  const f = [...i].sort((n, s) => n - s),
    Y = [];
  for (let n = 0; n < f.length - 1; n++) {
    const s = f[n],
      c = f[n + 1],
      r = (s + c) / 2;
    let y = [[k, o]];
    for (const l of d) {
      if (!(r > l.a && r < l.b)) continue;
      const N = [];
      for (const [b, A] of y) {
        if (l.y1 <= b || l.y0 >= A) {
          N.push([b, A]);
          continue;
        }
        (l.y0 > b && N.push([b, l.y0]), l.y1 < A && N.push([l.y1, A]));
      }
      y = N;
    }
    for (const [l, N] of y) N - l > 0.01 && Y.push([s, c, l, N]);
  }
  return Y;
}
