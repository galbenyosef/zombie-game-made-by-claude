// assets__akane-CN21eJhw 09 — math
// Lines 2846-3157 of readable/assets__akane-CN21eJhw.pretty.js (statement-aligned).
function kt(e, t, a, o = {}) {
  const r = o.segs ?? 32,
    i = o.radial ?? 16,
    n = 5,
    s = e.attributes.position,
    u = e.attributes.normal;
  if (!s || !u || !e.index) return !1;
  const l = o.raw ? t : ut(t, r),
    v = l.length,
    g = v + (o.capStart ? n : 0) + (o.capEnd ? n : 0);
  if (s.count !== g * (i + 1)) return !1;
  const { T: m, N: y, B: k } = Ut(l, o.up ?? [0, 0, 1]),
    G = typeof a == "function" ? a : () => a,
    d = o.scale ? o.scale[0] : 1,
    w = o.scale ? o.scale[1] : 1;
  let f = xt.get(i);
  if (!f) {
    f = new Float32Array((i + 1) * 2);
    for (let I = 0; I <= i; I++) {
      const P = (I / i) * Math.PI * 2;
      ((f[I * 2] = Math.cos(P)), (f[I * 2 + 1] = Math.sin(P)));
    }
    xt.set(i, f);
  }
  const C = s.array,
    x = u.array;
  let p = 0;
  const M = (I, P, F, L, O, J = 0) => {
    for (let s0 = 0; s0 <= i; s0++) {
      const $ = f[s0 * 2],
        r0 = f[s0 * 2 + 1];
      ((C[p] = I[0] + (P[0] * $ * d + F[0] * r0 * w) * L),
        (C[p + 1] = I[1] + (P[1] * $ * d + F[1] * r0 * w) * L),
        (C[p + 2] = I[2] + (P[2] * $ * d + F[2] * r0 * w) * L));
      let t0 = (P[0] * $) / d + (F[0] * r0) / w,
        V = (P[1] * $) / d + (F[1] * r0) / w,
        R = (P[2] * $) / d + (F[2] * r0) / w,
        H = Math.sqrt(t0 * t0 + V * V + R * R) || 1;
      if (((t0 /= H), (V /= H), (R /= H), J)) {
        const N = 1 - Math.abs(J);
        ((t0 = t0 * N + O[0] * J),
          (V = V * N + O[1] * J),
          (R = R * N + O[2] * J),
          (H = Math.sqrt(t0 * t0 + V * V + R * R) || 1),
          (t0 /= H),
          (V /= H),
          (R /= H));
      }
      ((x[p] = t0), (x[p + 1] = V), (x[p + 2] = R), (p += 3));
    }
  };
  if (o.capStart) {
    const I = G(0),
      P = Math.min(d, w);
    for (let F = 0; F < n; F++) {
      const L = ((1 - F / n) * Math.PI) / 2,
        O = Math.sin(L) * I * P;
      M(
        [l[0][0] - m[0][0] * O, l[0][1] - m[0][1] * O, l[0][2] - m[0][2] * O],
        y[0],
        k[0],
        I * Math.cos(L) + 1e-5,
        m[0],
        -Math.sin(L),
      );
    }
  }
  for (let I = 0; I < v; I++)
    M(l[I], y[I], k[I], Math.max(G(I / (v - 1)), 1e-5), m[I]);
  if (o.capEnd) {
    const I = G(1),
      P = Math.min(d, w);
    for (let F = 1; F <= n; F++) {
      const L = ((F / n) * Math.PI) / 2,
        O = Math.sin(L) * I * P;
      M(
        [
          l[v - 1][0] + m[v - 1][0] * O,
          l[v - 1][1] + m[v - 1][1] * O,
          l[v - 1][2] + m[v - 1][2] * O,
        ],
        y[v - 1],
        k[v - 1],
        I * Math.cos(L) + 1e-5,
        m[v - 1],
        Math.sin(L),
      );
    }
  }
  return (
    (s.needsUpdate = !0),
    (u.needsUpdate = !0),
    e.computeBoundingSphere(),
    !0
  );
}
function Ct(e) {
  const t = e.attributes.position.array,
    a = e.attributes.normal,
    o = a.array,
    r = e.index.array;
  o.fill(0);
  for (let i = 0; i < r.length; i += 3) {
    const n = r[i] * 3,
      s = r[i + 1] * 3,
      u = r[i + 2] * 3,
      l = t[u] - t[s],
      v = t[u + 1] - t[s + 1],
      g = t[u + 2] - t[s + 2],
      m = t[n] - t[s],
      y = t[n + 1] - t[s + 1],
      k = t[n + 2] - t[s + 2],
      G = v * k - g * y,
      d = g * m - l * k,
      w = l * y - v * m;
    ((o[n] += G),
      (o[n + 1] += d),
      (o[n + 2] += w),
      (o[s] += G),
      (o[s + 1] += d),
      (o[s + 2] += w),
      (o[u] += G),
      (o[u + 1] += d),
      (o[u + 2] += w));
  }
  for (let i = 0; i < o.length; i += 3) {
    const n =
      Math.sqrt(o[i] * o[i] + o[i + 1] * o[i + 1] + o[i + 2] * o[i + 2]) || 1;
    ((o[i] /= n), (o[i + 1] /= n), (o[i + 2] /= n));
  }
  a.needsUpdate = !0;
}
function Pt(e, t, a, o, r = {}) {
  return I0(e, t, 1, { ...r, radial: r.radial ?? 12, scale: [o, a] });
}
function lt(e, t, a) {
  const o = e(t[0], t[1], t[2]);
  if (o >= a) return t;
  const r = 0.001,
    i = [
      e(t[0] + r, t[1], t[2]) - e(t[0] - r, t[1], t[2]),
      e(t[0], t[1] + r, t[2]) - e(t[0], t[1] - r, t[2]),
      e(t[0], t[1], t[2] + r) - e(t[0], t[1], t[2] - r),
    ],
    n = Math.hypot(i[0], i[1], i[2]) || 1;
  return [
    t[0] + (i[0] / n) * (a - o),
    t[1] + (i[1] / n) * (a - o),
    t[2] + (i[2] / n) * (a - o),
  ];
}
const w0 = {
  hips: [0, 0.86, 0],
  chest: [0, 1.18, 0],
  neck: [0, 1.315, -0.012],
};
function j0(e, t, a) {
  let o = E0(e, t, a, 0, 1.06, -0.004, 0.137, 0.212, 0.09, 0.07);
  ((o = S0(o, N0(e, t, a, 0, 1.185, 0.004, 0.142, 0.118, 0.105), 0.05)),
    (o = S0(
      o,
      st(e, t, a, -0.126, 1.262, -0.014, 0.126, 1.262, -0.014, 0.052),
      0.055,
    )),
    (o = S0(o, N0(e, t, a, 0, 0.915, 0, 0.15, 0.07, 0.1), 0.04)));
  const r = E0(e, t, a, 0, 0.862, 0, 0.137, 0.03, 0.087, 0.026);
  ((o = B0(o, -(t - 0.875), 0.02)),
    (o = S0(o, r, 0.012)),
    (o = B0(o, -(t - 0.834), 0.004)),
    (o = B0(o, -st(e, t, a, 0, 1.24, -0.01, 0, 1.6, -0.014, 0.044), 0.016)));
  {
    const i = a + 0.018,
      n = Math.hypot(e, i) || 1e-6,
      s = Math.max(0, i / n),
      u = Math.max(0, -i / n),
      l = 1.308 - 0.062 * s * s,
      v = 0.029 - 0.009 * s + 0.004 * u,
      g =
        Math.hypot(e, i * (i < 0 ? 0.86 : 1.12)) -
        (0.074 + 0.004 * u - 0.006 * s),
      m = Math.hypot(g, (t - l) * 1.1) - v;
    o = S0(o, m, 0.012);
  }
  ((o = S0(o, N0(e, t, a, 0, 1.252, -0.11, 0.108, 0.078, 0.046), 0.03)),
    (o = S0(
      o,
      E0(e, t, a, 0, 0.955, 0.08, 0.095, 0.052, 0.013, 0.011),
      0.008,
    )));
  {
    const i = Math.atan2(e, a + 0.004),
      n =
        Math.max(0, Math.min(1, (1.15 - t) / 0.16)) *
        Math.max(0, Math.min(1, (t - 0.878) / 0.03)),
      s = Math.pow(
        0.5 + 0.5 * Math.sin(i * 11 + Math.sin(t * 19 + i * 2.3) * 0.9 + 0.6),
        2.6,
      );
    o -= 0.0028 * n * s;
    const u = Math.max(0, Math.min(1, a / 0.06)),
      l =
        Math.pow(Math.max(0, Math.sin((Math.abs(e) * 0.9 + (t - 1)) * 70)), 3) *
        Math.max(0, Math.min(1, (t - 0.98) / 0.05)) *
        Math.max(0, Math.min(1, (1.16 - t) / 0.04)) *
        Math.max(0, Math.min(1, (Math.abs(e) - 0.04) / 0.04));
    o -= 0.002 * l * u;
  }
  return o;
}
function Re(e, t, a, o, r) {
  const i = ze(t, a, o, r, { smooth: 1, project: 3 }),
    n = new e.BufferGeometry();
  return (
    n.setAttribute("position", new e.BufferAttribute(i.positions, 3)),
    n.setAttribute("normal", new e.BufferAttribute(i.normals, 3)),
    n.setIndex(new e.BufferAttribute(i.indices, 1)),
    n.computeBoundingSphere(),
    n
  );
}
function Co(e) {
  const a = document.createElement("canvas");
  a.width = a.height = 1024;
  const o = a.getContext("2d"),
    r = [-0.26, 0.8, 0.52, 0.56],
    i = 1024 / r[2];
  (o.setTransform(i, 0, 0, -i, -r[0] * i, (r[1] + r[3]) * i),
    (o.fillStyle = "#000"),
    o.fillRect(-1, 0, 3, 3),
    (o.globalCompositeOperation = "lighter"));
  const n = (u, l, v) => {
    ((o.strokeStyle = `rgba(255,0,0,${v})`),
      (o.lineWidth = l),
      (o.lineCap = "round"),
      (o.lineJoin = "round"),
      o.beginPath(),
      u.forEach((g, m) => (m ? o.lineTo(g[0], g[1]) : o.moveTo(g[0], g[1]))),
      o.stroke());
  };
  for (const u of [-1, 1])
    (n(
      [
        [u * 0.13, 1.2],
        [u * 0.1, 1.1],
        [u * 0.085, 1],
      ],
      0.006,
      0.9,
    ),
      n(
        [
          [u * 0.16, 1.12],
          [u * 0.14, 1],
          [u * 0.13, 0.92],
        ],
        0.005,
        0.9,
      ),
      n(
        [
          [u * 0.05, 0.905],
          [u * 0.1, 0.9],
          [u * 0.14, 0.91],
        ],
        0.004,
        0.8,
      ),
      n(
        [
          [u * 0.02, 0.89],
          [u * 0.06, 0.885],
        ],
        0.003,
        0.7,
      ));
  ((o.strokeStyle = "rgba(0,255,0,0.9)"),
    (o.lineWidth = 0.0016),
    o.setLineDash([0.006, 0.004]),
    o.beginPath(),
    o.moveTo(-0.098, 0.905),
    o.lineTo(-0.1, 0.99),
    o.quadraticCurveTo(-0.1, 1.009, -0.085, 1.01),
    o.lineTo(0.085, 1.01),
    o.quadraticCurveTo(0.1, 1.009, 0.1, 0.99),
    o.lineTo(0.098, 0.905),
    o.stroke(),
    o.setLineDash([]),
    (o.lineWidth = 0.0014),
    o.beginPath(),
    o.moveTo(-0.2, 0.885),
    o.lineTo(0.2, 0.885),
    o.stroke(),
    (o.strokeStyle = "rgba(0,255,0,0.45)"),
    (o.lineWidth = 0.0012));
  for (let u = -24; u <= 24; u++)
    (o.beginPath(),
      o.moveTo(u * 0.0072, 0.836),
      o.lineTo(u * 0.0072, 0.882),
      o.stroke());
  ((o.strokeStyle = "rgba(0,255,0,1)"), (o.lineWidth = 0.0022));
  for (const u of [-1, 1])
    (o.beginPath(),
      o.moveTo(u * 0.1, 0.99),
      o.lineTo(u * 0.085, 0.915),
      o.stroke());
  const s = new e.CanvasTexture(a);
  return (
    (s.colorSpace = e.NoColorSpace),
    (s.anisotropy = 8),
    { tex: s, rect: r }
  );
}
