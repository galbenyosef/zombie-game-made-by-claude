// assets/park-CwBfNU5l 06 — math
// Lines 1641-1916 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
function Xa(e, a) {
  const t = [],
    r = [],
    o = (d, y, m, F, C, L = 0) =>
      t.push({ cx: d, cz: y, L: m, W: F, h: C, yaw: L }),
    n = (d, y, m, F, C, L) => {
      const z = Math.hypot(m - d, F - y);
      o((d + m) / 2, (y + F) / 2, z, C, L, -Math.atan2(F - y, m - d));
    };
  for (const d of [1, -1])
    for (let y = 2.6; y < 19.5; y += 3.6) {
      const m = re("avenueN", y),
        F = re("avenueN", Math.min(y + 3.3, 21.5)),
        C = (z) => z.x + z.tz * d * 4.3,
        L = (z) => z.z - z.tx * d * 4.3;
      n(C(m), L(m), C(F), L(F), 0.85, 1.05);
    }
  {
    const d = Z0,
      y = 1.1,
      m = 2.25;
    (n(d.x0, d.z0, d.x1, d.z0, y, m),
      n(d.x0, d.z0, d.x0, d.z1, y, m),
      n(d.x1, d.z0, d.x1, d.z0 + 4.4, y, m),
      n(d.x1, d.z0 + 7.6, d.x1, d.z1, y, m),
      n(d.x0, d.z1, d.x0 + 3, d.z1, y, m),
      n(d.x0 + 6.4, d.z1, d.x1, d.z1, y, m));
    const F = (d.x0 + d.x1) / 2,
      C = (d.z0 + d.z1) / 2;
    for (const [L, z] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ])
      o(F + L * 2.9, C + z * 2.4, 3.8, 2.4, 0.55, 0);
  }
  {
    const d = F0,
      y = 1.2,
      m = 2.1,
      F = 3.4,
      C = (d.x0 + d.x1) / 2,
      L = (d.z0 + d.z1) / 2;
    (n(d.x0, d.z0, C - F / 2, d.z0, y, m),
      n(C + F / 2, d.z0, d.x1, d.z0, y, m),
      n(d.x0, d.z1, C - F / 2, d.z1, y, m),
      n(C + F / 2, d.z1, d.x1, d.z1, y, m),
      n(d.x0, d.z0, d.x0, L - F / 2, y, m),
      n(d.x0, L + F / 2, d.x0, d.z1, y, m),
      n(d.x1, d.z0, d.x1, L - F / 2, y, m),
      n(d.x1, L + F / 2, d.x1, d.z1, y, m));
    for (const [z, W] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ])
      (o(C + z * 8.6, L + W * 4.6, 13, 0.55, 0.5, 0),
        o(C + z * 8.6, L + W * 6.6, 13, 0.55, 0.5, 0),
        o(C + z * 13.8, L + W * 5.6, 0.55, 4, 0.5, 0));
  }
  (n(456.6, 129.4, 471, 129.4, 1.15, 2.05),
    n(472.6, 129.4, 486, 129.4, 1.15, 2.05));
  for (const [d, y, m, F] of [
    [405.6, 119.8, 1.9, 5.2],
    [417, 128.6, 1.6, 4.4],
    [391.6, 146.2, 2.3, 6],
    [407.6, 134.6, 1.7, 4.6],
    [415.6, 192.6, 2, 4.8],
    [445, 192.4, 1.8, 4.2],
    [380, 118, 2.6, 7],
    [372, 96, 2.2, 6],
    [398, 84, 2.4, 6.5],
    [505, 128, 2.2, 5.5],
    [520, 96, 2.6, 6.8],
    [493, 72, 2, 5.4],
    [362, 160, 2.2, 5.6],
    [372, 182, 1.8, 4.6],
    [508, 172, 2.4, 5.8],
    [490.5, 156, 1.8, 4.6],
    [440, 58, 2.2, 5.8],
    [470, 44, 2.4, 6.2],
    [421, 162.6, 2.1, 2.6],
    [419.4, 170.6, 1.9, 2.4],
    [411.6, 158.4, 2.3, 2.8],
    [453.2, 164.2, 2.2, 2.7],
    [455.4, 156.2, 1.9, 2.4],
    [455.2, 138.4, 2.1, 2.6],
    [463, 134.4, 2.3, 2.8],
  ])
    r.push({ x: d, z: y, r: m, h: F });
  const i = new P0();
  i.name = "park_hedges";
  const f = Va(e),
    w = new Map(),
    s = [],
    l = [],
    u = (d, y) => {
      (w.has(d) || w.set(d, []), w.get(d).push(y));
    };
  for (const d of t) {
    u(ee(d.cx, d.cz), Ka(d.cx, d.cz, d.L, d.W, d.h, d.yaw, a));
    const y = Math.max(1, Math.ceil(d.L / 1.4)),
      m = Math.cos(d.yaw),
      F = Math.sin(d.yaw);
    for (let C = 0; C < y; C++) {
      const L = -d.L / 2 + (C + 0.5) * (d.L / y),
        z = d.cx + L * m,
        W = d.cz - L * F,
        D = (Math.abs(m) * (d.L / y)) / 2 + (Math.abs(F) * d.W) / 2,
        V = (Math.abs(F) * (d.L / y)) / 2 + (Math.abs(m) * d.W) / 2;
      s.push({
        x0: z - D,
        x1: z + D,
        z0: W - V,
        z1: W + V,
        y0: 0,
        y1: d.h,
        hedge: !0,
      });
    }
  }
  for (const d of r)
    (u(ee(d.x, d.z), Ua(d.x, d.z, d.r, d.h, a)),
      l.push({ x: d.x, z: d.z, r: d.r * 0.72, yew: !0 }));
  for (const [d, y] of w) {
    const m = new jt(v0(y), f);
    ((m.name = "hedges_" + d),
      (m.castShadow = !0),
      (m.receiveShadow = !0),
      i.add(m));
  }
  const c = We(),
    M = new Map(),
    h = I(0, 0, 0),
    v = (d, y, m, F) => {
      (M.has(d) || M.set(d, []),
        h
          .set(a() - 0.5, a() - 0.5, a() - 0.5)
          .cross(m)
          .normalize());
      const C = h.clone().addScaledVector(m, 0.35).normalize();
      M.get(d).push({
        pos: y.addScaledVector(C, -F * 0.25),
        along: C,
        size: F,
        cell: t0.hedge,
        out: m,
        ivy: m,
        shade: 0.75 + a() * 0.35,
      });
    };
  for (const d of t) {
    const y = Math.cos(d.yaw),
      m = Math.sin(d.yaw),
      F = ee(d.cx, d.cz),
      C = d.h < 1.3 ? 7 : 3.2,
      L = Math.round(d.L * (d.h * 2 + d.W) * C);
    for (let z = 0; z < L; z++) {
      const W = (a() - 0.5) * d.L,
        D = a() * (d.h * 2 + d.W);
      let V, A, K, J, q, st;
      D < d.h
        ? ((V = W),
          (A = 0.15 + D * 0.92),
          (K = d.W / 2),
          (J = 0),
          (q = 0.15),
          (st = 1))
        : D < d.h * 2
          ? ((V = W),
            (A = 0.15 + (D - d.h) * 0.92),
            (K = -d.W / 2),
            (J = 0),
            (q = 0.15),
            (st = -1))
          : ((V = W),
            (A = d.h),
            (K = D - d.h * 2 - d.W / 2),
            (J = 0),
            (q = 1),
            (st = K * 0.8));
      const j = d.cx + V * y + K * m,
        Y = d.cz - V * m + K * y,
        x = J * y + st * m,
        p = -J * m + st * y;
      v(
        F,
        I(j + x * 0.02, A, Y + p * 0.02),
        I(x, q, p).normalize(),
        0.42 + a() * 0.3,
      );
    }
  }
  for (const d of r) {
    const y = ee(d.x, d.z),
      m = Math.round(d.r * d.h * 14);
    for (let F = 0; F < m; F++) {
      const C = a() * d0,
        L = Math.pow(a(), 0.8),
        z = L * d.h * 0.95,
        W =
          (d.h < 3.2
            ? d.r * Math.pow(Math.max(0, 1 - Math.pow(L, 2.4)), 0.45)
            : d.r *
              Math.pow(Math.sin(Math.PI * Math.min(1, 0.1 + L * 0.92)), 0.6) *
              (1 - 0.5 * L)) * 1.02;
      v(
        y,
        I(d.x + Math.cos(C) * W, Math.max(0.1, z), d.z + Math.sin(C) * W),
        I(Math.cos(C), 0.35 + L * 0.5, Math.sin(C)).normalize(),
        0.5 + a() * 0.35,
      );
    }
  }
  const S = (d, y) => y.setRGB(0.62 * d.shade, 0.7 * d.shade, 0.62 * d.shade);
  for (const [d, y] of M) {
    const m = new jt(Ee(y, a, S), c.m);
    ((m.name = "hedge_sprays_" + d),
      (m.customDepthMaterial = c.d),
      (m.castShadow = !0),
      (m.receiveShadow = !0),
      i.add(m));
  }
  return { group: i, colliders: s, circles: l, hedges: t, yews: r };
}
function Va(e) {
  return Gt(e.mats.get("park3_hedge"), "hedge", (a) => {
    ((a.vertexShader = a.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
varying float vHY;`,
      )
      .replace(
        "#include <uv_vertex>",
        `#include <uv_vertex>
vHY = (modelMatrix * vec4(position, 1.0)).y;`,
      )),
      (a.fragmentShader = a.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying float vHY;`,
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
      // (bare and brown low down where the hedge is old and nothing gets light; a little lighter on the clipped top)
      diffuseColor.rgb *= mix(0.55, 1.0, smoothstep(0.05, 0.6, vHY));
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.04, 0.025), (1.0 - smoothstep(0.0, 0.35, vHY)) * 0.5);`,
        )));
  });
}
const b0 = { x0: 349.5, z0: 29.5, w: 181, d: 176, res: 3 },
  le = (e, a) => {
    const t = Math.sin(e * 127.1 + a * 311.7) * 43758.5453;
    return t - Math.floor(t);
  },
  O0 = (e, a) => {
    const t = Math.floor(e),
      r = Math.floor(a);
    let o = e - t,
      n = a - r;
    ((o = o * o * (3 - 2 * o)), (n = n * n * (3 - 2 * n)));
    const i = le(t, r),
      f = le(t + 1, r),
      w = le(t, r + 1),
      s = le(t + 1, r + 1);
    return i + (f - i) * o + (w - i) * n + (i - f - w + s) * o * n;
  },
  te = (e, a, t) => {
    const r = Math.max(0, Math.min(1, (t - e) / (a - e)));
    return r * r * (3 - 2 * r);
  };
