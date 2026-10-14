// assets__index-BcIwWgby 36 — math
// Lines 10957-11306 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
const Zo = (s, o) => {
  let t = (Math.imul(s, 374761393) + Math.imul(o, 668265263)) | 0;
  return (
    (t = Math.imul(t ^ (t >>> 13), 1274126177)),
    ((t ^ (t >>> 16)) >>> 0) / 4294967296
  );
};
function It(s, o) {
  const t = Math.floor(s),
    u = Math.floor(o);
  let e = s - t,
    r = o - u;
  ((e = e * e * (3 - 2 * e)), (r = r * r * (3 - 2 * r)));
  const a = Zo(t, u),
    p = Zo(t + 1, u),
    i = Zo(t, u + 1),
    d = Zo(t + 1, u + 1);
  return (a + (p - a) * e + (i - a) * r + (a - p - i + d) * e * r) * 2 - 1;
}
const $t = (s, o, t) => {
    const u = Math.max(0, Math.min(1, (t - s) / (o - s)));
    return u * u * (3 - 2 * u);
  },
  Ps = (s, o, t) => {
    const u = Math.max(t - Math.abs(s - o), 0) / t;
    return Math.min(s, o) - u * u * t * 0.25;
  },
  fe = (s, o, t, u, e, r) => {
    const a = e - t,
      p = r - u,
      i = a * a + p * p,
      d = i > 0 ? Math.max(0, Math.min(1, ((s - t) * a + (o - u) * p) / i)) : 0;
    return Math.hypot(s - t - a * d, o - u - p * d);
  },
  Hr = (s) => () => {
    s = (s + 1831565813) | 0;
    let o = Math.imul(s ^ (s >>> 15), 1 | s);
    return (
      (o = (o + Math.imul(o ^ (o >>> 7), 61 | o)) ^ o),
      ((o ^ (o >>> 14)) >>> 0) / 4294967296
    );
  },
  c0 = (s) => +s.toFixed(2);
function Gs(s, o, t = 0, u = null) {
  const e = [];
  for (let v = 0; v < s.length - 1; v++) {
    const n = s[Math.max(0, v - 1)],
      l = s[v],
      f = s[v + 1],
      h = s[Math.min(s.length - 1, v + 2)],
      c = Math.max(4, Math.ceil(Math.hypot(f[0] - l[0], f[1] - l[1]) / 0.05));
    for (let M = 0; M < c; M++) {
      const m = M / c,
        k = m * m,
        S = k * m,
        A = (b, P, _, I) =>
          0.5 *
          (2 * P +
            (-b + _) * m +
            (2 * b - 5 * P + 4 * _ - I) * k +
            (-b + 3 * P - 3 * _ + I) * S);
      e.push([A(n[0], l[0], f[0], h[0]), A(n[1], l[1], f[1], h[1])]);
    }
  }
  e.push(s[s.length - 1]);
  const r = (v, n) => {
    const l = [0];
    for (let m = 1; m < v.length; m++)
      l.push(
        l[m - 1] + Math.hypot(v[m][0] - v[m - 1][0], v[m][1] - v[m - 1][1]),
      );
    const f = l[l.length - 1],
      h = Math.ceil(f / n) + 1,
      c = [];
    let M = 0;
    for (let m = 0; m < h; m++) {
      const k = Math.min(f, m * n);
      for (; M < l.length - 2 && l[M + 1] < k;) M++;
      const S = l[M + 1] > l[M] ? (k - l[M]) / (l[M + 1] - l[M]) : 0;
      c.push([
        v[M][0] + (v[M + 1][0] - v[M][0]) * S,
        v[M][1] + (v[M + 1][1] - v[M][1]) * S,
        k,
      ]);
    }
    return { out: c, len: f };
  };
  let a = r(e, 0.25).out;
  if (t) {
    const v = a.map((f) => (u ? u(f[0], f[1]) : 1)),
      n = a.map((f) => [f[0], f[1]]),
      l = n.map((f) => f.slice());
    for (let f = 0; f < t; f++) {
      for (let h = 1; h < n.length - 1; h++) {
        const c = 0.5 * v[h];
        ((l[h][0] = n[h][0] + c * ((n[h - 1][0] + n[h + 1][0]) / 2 - n[h][0])),
          (l[h][1] =
            n[h][1] + c * ((n[h - 1][1] + n[h + 1][1]) / 2 - n[h][1])));
      }
      for (let h = 1; h < n.length - 1; h++)
        ((n[h][0] = l[h][0]), (n[h][1] = l[h][1]));
    }
    a = n;
  }
  const { out: p, len: i } = r(a, o),
    d = p.length,
    y = new Float32Array(d),
    w = new Float32Array(d),
    g = new Float32Array(d),
    z = new Float32Array(d),
    x = new Float32Array(d);
  p.forEach((v, n) => {
    ((y[n] = v[0]), (w[n] = v[1]), (g[n] = v[2]));
  });
  for (let v = 0; v < d; v++) {
    const n = Math.max(0, v - 1),
      l = Math.min(d - 1, v + 1),
      f = y[l] - y[n],
      h = w[l] - w[n],
      c = Math.hypot(f, h) || 1;
    ((z[v] = f / c), (x[v] = h / c));
  }
  return { x: y, z: w, s: g, tx: z, tz: x, n: d, len: i };
}
const U0 = { x: 2, z: 77, x0: 0.85, x1: 3.15 },
  St = { z: 77, t: 0.55, h: 1.45, xW: -8.75, xE: 8.75 },
  ie = { x: -6.1, z: 69.4 },
  b0 = { x: -3.3, z: 73.3, yaw: 2.55 },
  le = [
    [4.25, 62.2],
    [4.15, 65.4],
    [3.55, 69.2],
    [2.7, 73.2],
    [2, 77.2],
  ],
  Y0 = { x: 2.15, z: 69.7, yaw: Math.atan2(U0.x - 2.15, U0.z + 0.5 - 69.7) };
function Or(s, o, t, u = 4) {
  let e = s[0],
    r = s[1],
    a = (o * Math.PI) / 180;
  const p = [{ x: e, z: r, k: -1 }];
  return (
    t.forEach((i, d) => {
      if (i[0] === "F" || i[0] === "Z") {
        const y = i[0] === "Z" ? (i[1] - r) / Math.cos(a) : i[1],
          w = Math.max(1, Math.round(y / u));
        for (let g = 1; g <= w; g++)
          p.push({
            x: e + (Math.sin(a) * y * g) / w,
            z: r + (Math.cos(a) * y * g) / w,
            k: d,
            t: g / w,
          });
        ((e += Math.sin(a) * y), (r += Math.cos(a) * y));
      } else {
        const y = i[1],
          w = (i[2] * Math.PI) / 180,
          g = Math.sign(w),
          z = e + Math.cos(a) * y * g,
          x = r - Math.sin(a) * y * g,
          v = Math.atan2(e - z, r - x),
          n = Math.max(2, Math.round((Math.abs(w) * y) / u));
        for (let l = 1; l <= n; l++) {
          const f = v + (w * l) / n;
          p.push({
            x: z + Math.sin(f) * y,
            z: x + Math.cos(f) * y,
            k: d,
            t: l / n,
          });
        }
        ((e = p[p.length - 1].x), (r = p[p.length - 1].z), (a += w));
      }
    }),
    p
  );
}
const q0 = { th: 45, r0: 12, r: 10.5, rb: 13, L1: 42, L3: 54, bow: 1.8 },
  jr = (() => {
    const s = (q0.th * Math.PI) / 180,
      o = Math.cos(s),
      t = Math.sin(s),
      u = q0.L1 + q0.L3 - (0.5 + 4 * q0.r * o - (q0.r0 + q0.rb) * (1 - o)) / t,
      e = Or([2, 74], 0, [
        ["F", 6.5],
        ["T", q0.r0, q0.th],
        ["F", q0.L1],
        ["T", q0.r, -180],
        ["F", u],
        ["T", q0.r, 180],
        ["F", q0.L3],
        ["T", q0.rb, -45],
        ["Z", 157],
      ]);
    for (const r of e)
      if (r.k === 2) {
        const a = q0.bow * Math.sin(Math.PI * r.t);
        ((r.x += o * a), (r.z -= t * a));
      }
    return [
      ...e.filter((r) => r.z < 156).map((r) => [r.x, r.z]),
      [2.5, 157],
      [2.5, 161],
      [2.5, 162.4],
      [2.5, 169.8],
      [2.5, 171.2],
      [2.5, 174.6],
      [1.6, 178.8],
      [-0.6, 183.2],
      [-1.6, 187.6],
      [-0.4, 191.8],
      [2.6, 195.6],
      [6, 198.7],
    ];
  })(),
  Tt = { x: 2.5, z0: 161.1, z1: 171.3 },
  Yr = [
    [-78, 172],
    [-58, 173],
    [-44, 170.8],
    [-31, 168.2],
    [-20, 169.6],
    [-9, 166.5],
    [2.5, 166.2],
    [13, 164.4],
    [24.5, 166.8],
    [36, 163.6],
    [48, 165.6],
    [62, 163.2],
    [80, 164.5],
  ],
  we = { bed: 1.3, rim: 4.35, depth: 2.35, water: -1.95 },
  R0 = { x: 6.2, z: 198.2, rx: 13.2, rz: 12.4 },
  Ee = (s, o) => {
    const t = Math.atan2(o - R0.z, s - R0.x),
      u = 1 + 0.07 * Math.sin(t * 3 + 0.6) + 0.05 * Math.sin(t * 5 + 2.1),
      e = (s - R0.x) / (R0.rx * u),
      r = (o - R0.z) / (R0.rz * u);
    return (Math.hypot(e, r) - 1) * Math.min(R0.rx, R0.rz);
  },
  Ns = (s, o) => {
    const t = Math.max(_t.x0 - s, s - _t.x1),
      u = Math.max(_t.z0 - o, o - _t.z1);
    return t > 0 && u > 0 ? Math.hypot(t, u) : Math.max(t, u);
  },
  Xr = (s, o) => {
    const t = Math.max(0, Math.min(1, (o - 79.6) / 5)),
      u =
        Math.abs(s - Tt.x) < 0.6 && o > 150 && o < 180
          ? Math.max(0, Math.min(1, Math.max(157.2 - o, o - 173.6) / 5))
          : 1;
    return Math.min(t, u);
  },
  L0 = Gs(jr, 0.25, 300, Xr),
  ps = Gs(Yr, 0.5),
  $r = (s, o) => {
    let t = 0,
      u = 1e9;
    for (let e = 0; e < L0.n; e++) {
      const r = (L0.x[e] - s) ** 2 + (L0.z[e] - o) ** 2;
      r < u && ((u = r), (t = e));
    }
    return t;
  },
  cs = (s, o) => L0.s[$r(s, o)],
  C0 = {
    gate: cs(U0.x, U0.z),
    bridgeN: cs(Tt.x, Tt.z0),
    bridgeS: cs(Tt.x, Tt.z1),
    end: L0.len,
  },
  O0 = (s) => {
    const o = Math.max(0, Math.min(L0.n - 1, Math.round(s / 0.25)));
    return { x: L0.x[o], z: L0.z[o], tx: L0.tx[o], tz: L0.tz[o], s: L0.s[o] };
  },
  Oe = (s) => 2.45 + 0.3 * It(s / 13 + 4.2, 1.7),
  Va = (s, o) => {
    const t = new Map();
    for (let u = 0; u < s.n; u += o) {
      const e = Math.floor(s.x[u] / 4) + "," + Math.floor(s.z[u] / 4);
      (t.has(e) || t.set(e, []), t.get(e).push(u));
    }
    return t;
  },
  Zr = Va(L0, 2),
  yo = (s, o, t = 1e9, u = -1e9, e = 16) => {
    let r = e * e;
    const a = Math.ceil(e / 4),
      p = Math.floor(s / 4),
      i = Math.floor(o / 4);
    for (let d = p - a; d <= p + a; d++)
      for (let y = i - a; y <= i + a; y++)
        for (const w of Zr.get(d + "," + y) || []) {
          const g = L0.s[w];
          if (g > t && g < u) continue;
          const z = (L0.x[w] - s) ** 2 + (L0.z[w] - o) ** 2;
          z < r && (r = z);
        }
    return Math.sqrt(r);
  },
  Jr = Va(ps, 1),
  Ls = (s, o, t = 12) => {
    let u = t * t;
    const e = Math.ceil(t / 4),
      r = Math.floor(s / 4),
      a = Math.floor(o / 4);
    for (let p = r - e; p <= r + e; p++)
      for (let i = a - e; i <= a + e; i++)
        for (const d of Jr.get(p + "," + i) || []) {
          const y = (ps.x[d] - s) ** 2 + (ps.z[d] - o) ** 2;
          y < u && (u = y);
        }
    return Math.sqrt(u);
  },
  pa = (s) => {
    const o = O0(s - 4),
      t = O0(s + 4),
      u = O0(s),
      e = (t.tx - o.tx) * u.tz - (t.tz - o.tz) * u.tx;
    return Math.abs(e) < 0.05 ? 0 : e > 0 ? 1 : -1;
  },
  Ko = (s, o) => [s.tz * o, -s.tx * o],
  Jo = [
    [40, 120],
    [120, 220],
  ].map(([s, o]) => {
    let t = s,
      u = 9;
    for (let e = s; e <= o; e += 0.5) {
      const r = O0(e),
        a = Math.hypot(r.tx + Math.SQRT1_2, r.tz - Math.SQRT1_2);
      a < u && ((u = a), (t = e));
    }
    return t;
  }),
  Nt = {
    tree: {
      s: 132,
      gap: 1,
      keep: [-24, 16],
      bay: { u0: -6.5, u1: 5.5, ramp: 4.5, room: 3.45 },
    },
    cart: {
      s: 199,
      gap: -1,
      keep: [-22, 14],
      bay: { u0: -4.5, u1: 4, ramp: 4.5, room: 3.45 },
    },
    log: { s: 228, keep: [-7, 7], ang: 76, r: 0.2, len: 9.2 },
  };
