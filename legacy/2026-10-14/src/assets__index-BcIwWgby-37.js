// assets__index-BcIwWgby 37 — math
// Lines 11307-11640 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
for (const s in Nt) {
  const o = Nt[s],
    t = O0(o.s);
  Object.assign(o, {
    name: s,
    x: t.x,
    z: t.z,
    ux: t.tx,
    uz: t.tz,
    vx: t.tz,
    vz: -t.tx,
    hw: Oe(o.s),
  });
}
Nt.tree.plate = { u: 1.6, v: -(Nt.tree.hw + 1.85), r: 1.95 };
Nt.tree.tip = { u: -0.5, v: 0.05 };
const He = (s, o, t) => [s.x + s.ux * o + s.vx * t, s.z + s.uz * o + s.vz * t],
  ze = (s, o, t) => {
    const u = o - s.x,
      e = t - s.z;
    return [u * s.ux + e * s.uz, u * s.vx + e * s.vz];
  },
  ms = (s, o = 0) => {
    for (const t in Nt) {
      const u = Nt[t];
      if (s > u.s + u.keep[0] - o && s < u.s + u.keep[1] + o) return !0;
    }
    return !1;
  },
  Ds = (s, o, t = 0) => {
    const u = Nt.tree,
      [e, r] = ze(u, s, o);
    if (
      Math.abs(e) < 14 &&
      Math.abs(r) < 12 &&
      (Math.hypot(e - u.plate.u, r - u.plate.v) < 2.4 + t ||
        Math.hypot(e - u.tip.u, r - u.tip.v) < 2.9 + t ||
        fe(e, r, u.plate.u, u.plate.v, u.tip.u, u.tip.v) < 1.1 + t)
    )
      return !0;
    const a = Nt.cart,
      [p, i] = ze(a, s, o),
      d = -a.gap;
    if (
      Math.abs(p) < 10 &&
      Math.abs(i) < 10 &&
      (Math.hypot(p, i - 1.9 * d) < 1.9 + t ||
        Math.hypot(p + 1.7, i - 1.6 * d) < 1.9 + t)
    )
      return !0;
    const y = Nt.log,
      [w, g] = ze(y, s, o),
      z = (y.ang * Math.PI) / 180;
    return (
      Math.abs(w) < 8 &&
      Math.abs(g) < 8 &&
      fe(
        w,
        g,
        -Math.cos(z) * 4.6,
        -Math.sin(z) * 4.6,
        Math.cos(z) * 5.4 + 1.4,
        Math.sin(z) * 5.4,
      ) <
        0.7 + t
    );
  },
  Qr = (s, o) => {
    let t = 9;
    for (const u of [Nt.tree, Nt.cart]) {
      const [e, r] = ze(u, s, o),
        a = u.bay;
      if (e < a.u0 - a.ramp - 1 || e > a.u1 + a.ramp + 1 || r * u.gap < 0)
        continue;
      const p = $t(a.u0 - a.ramp, a.u0, e) * $t(a.u1 + a.ramp, a.u1, e);
      t = Math.min(t, Math.abs(r) - (u.hw + (0.65 + a.room - u.hw) * p));
    }
    return t;
  },
  Ts = (s, o, t, u, e) => {
    const r = O0(o),
      a = Ko(r, t);
    return {
      name: s,
      x: c0(r.x + a[0] * u),
      z: c0(r.z + a[1] * u),
      r: e,
      s: o,
    };
  },
  de = [
    Ts("lookBack", 27, 1, 1.3, 3.1),
    Ts("e1", Jo[0], pa(Jo[0]), 1.5, 3.7),
    Ts("e2", Jo[1], pa(Jo[1]), 1.7, 4.1),
    { name: "bridgeN", x: 0.2, z: 159.3, r: 3.3, s: C0.bridgeN - 2 },
    { name: "bridgeS", x: 1, z: 173.5, r: 3, s: C0.bridgeS + 2 },
  ],
  Bs = (s, o) => {
    let t = 1e9;
    for (const u of de) t = Math.min(t, Math.hypot(s - u.x, o - u.z) - u.r);
    return t;
  },
  Ka = {
    e3a: [
      [-16.95, 162.37],
      [-8.6, 161.2],
      [-3.8, 160.4],
    ],
    e3b: [
      [14.6, 158.8],
      [9, 159.2],
      [4.6, 159.9],
    ],
    e3c: [
      [-11.39, 174.57],
      [-4.2, 173.9],
      [-1.2, 173.6],
    ],
    e3d: [
      [13.6, 172.6],
      [8.6, 173.2],
      [4.2, 173.6],
    ],
    e3e: [
      [16, 175.4],
      [13.6, 172.6],
    ],
    c1: [
      [-11.13, 195.02],
      [-7.95, 198.2],
      [-5.2, 198.2],
    ],
    c2: [
      [16.2, 185.1],
      [14.23, 187.04],
      [11.85, 188.41],
    ],
    c3: [
      [-10.95, 203.59],
      [-7.46, 206.42],
      [-4.72, 206.14],
    ],
    c4: [
      [23.94, 195.09],
      [20.78, 192.8],
      [16.98, 193.4],
    ],
    c5: [
      [23.64, 203.91],
      [22.56, 199.85],
      [19.7, 198.2],
    ],
    c6: [
      [18.62, 209.99],
      [19.33, 205.55],
      [17.71, 203.32],
    ],
  },
  tc = [
    [13.5, "R", 2.2, 0.95],
    [24, "L", 2.6, 0.9],
    [35, "R", 1.8, 1.05],
    [46, "L", 2.4, 0.95],
    [55.5, "R", 2.2, 0.9],
    [68, "R", 1.7, 1.1],
    [79, "R", 2, 0.95],
    [88, "R", 2.2, 0.9],
    [93, "L", 2.8, 1],
    [101, "R", 1.6, 1.12],
    [104, "L", 2.4, 0.95],
    [150, "R", 2.4, 1],
    [151, "L", 2.3, 0.95],
    [162, "L", 2, 1],
    [170, "L", 1.8, 0.9],
    [215, "R", 1.9, 1.05],
    [237, "R", 2.5, 0.95],
    [244, "L", 2, 1],
    [252, "R", 1.8, 1.1],
    [276, "L", 2.2, 0.9],
    [284, "R", 2, 1],
  ],
  ec = (s, o, t) => {
    const u = t * 0.9;
    return [
      {
        x0: s - 0.92 * u,
        x1: s + 0.92 * u,
        z0: o - 0.38 * u,
        z1: o + 0.38 * u,
      },
      {
        x0: s - 0.38 * u,
        x1: s + 0.38 * u,
        z0: o - 0.92 * u,
        z1: o + 0.92 * u,
      },
    ];
  },
  oc = (s, o, t) => {
    const u = [o[0] - s[0], o[1] - s[1], o[2] - s[2]],
      e = Math.hypot(...u),
      r = (e - 0.35) / e;
    for (const a of t) {
      let p = 0,
        i = r,
        d = !0;
      for (const [y, w, g] of [
        [a.x0, a.x1, 0],
        [0, 3, 1],
        [a.z0, a.z1, 2],
      ]) {
        if (Math.abs(u[g]) < 1e-9) {
          if (s[g] < y || s[g] > w) {
            d = !1;
            break;
          }
          continue;
        }
        let z = (y - s[g]) / u[g],
          x = (w - s[g]) / u[g];
        if (
          (z > x && ([z, x] = [x, z]),
          (p = Math.max(p, z)),
          (i = Math.min(i, x)),
          p > i)
        ) {
          d = !1;
          break;
        }
      }
      if (d) return !0;
    }
    return !1;
  },
  sc = (s, o, t, u) => {
    for (let e = 8; e <= 25; e += 1) {
      const r = O0(s - e);
      for (const a of [-1, 0, 1]) {
        const p = [r.x + r.tz * a, 1.62, r.z - r.tx * a];
        for (const i of [0.45, 1.15, 1.7]) if (!oc(p, [o, i, t], u)) return !1;
      }
    }
    return !0;
  },
  Hs = {},
  je = [];
for (const [s, o, t, u] of tc) {
  const e = o === "L" ? 1 : -1;
  let r = null;
  for (const h of [0, 1, -1, 2, -2, 3])
    for (const c of [0, 0.5, -0.3, 1]) {
      if (r) break;
      const M = s + h,
        m = O0(M),
        k = Ko(m, e),
        S = Oe(M) + t + c + u;
      if (ms(M) || ms(Math.min(C0.end - 6, M + 4.2))) continue;
      const A = m.x + k[0] * S,
        b = m.z + k[1] * S,
        P = ec(A, b, u);
      if (
        Bs(A, b) < u + 1.2 ||
        Ee(A, b) < u + 2 ||
        Ls(A, b) < we.rim + u + 0.8 ||
        Ds(A, b, u + 1.5)
      )
        continue;
      let _ = 0,
        I = 0;
      for (let V = 8; V <= 25; V += 1) {
        const L = O0(M - V),
          K = Math.hypot(A - L.x, b - L.z);
        ((_ += (A - L.x) / K), (I += (b - L.z) / K));
      }
      const R = Math.hypot(_, I);
      ((_ /= R), (I /= R));
      for (const V of [0, 0.15, -0.15, 0.3, -0.3])
        for (const L of [1.15, 1.3, 1, 1.5]) {
          const K = Math.cos(V),
            j = Math.sin(V),
            O = _ * K - I * j,
            J = _ * j + I * K,
            tt = A + O * (u * 1.12 + L * 0.85),
            st = b + J * (u * 1.12 + L * 0.85);
          if (
            !(
              yo(tt, st) < Oe(M) + 0.6 ||
              yo(tt, st, M - 30, M + 30) < 12 ||
              Ls(tt, st) < we.rim + 1.2
            ) &&
            !(Math.abs(tt) > 43.4 || Ee(tt, st) < 1.5 || Bs(tt, st) < 0.8) &&
            sc(M, tt, st, P)
          ) {
            r = { s: M, x: A, z: b, sx: tt, sz: st, boxes: P };
            break;
          }
        }
    }
  if (!r) continue;
  const { s: a, x: p, z: i, sx: d, sz: y } = r,
    w = "g" + String(Math.round(a)).padStart(3, "0") + o,
    g = Math.min(C0.end - 6, a + 4.2),
    z = O0(g),
    x = Ko(z, e),
    v = Oe(g),
    n = [z.x + x[0] * (v - 0.9), z.z + x[1] * (v - 0.9)],
    l = u * 1.12 + 0.75;
  let f = [d + (n[0] - d) * 0.3, y + (n[1] - y) * 0.3];
  {
    const h = Math.hypot(f[0] - p, f[1] - i);
    h < l && (f = [p + ((f[0] - p) / h) * l, i + ((f[1] - i) / h) * l]);
  }
  ((Hs[w] = [
    [c0(d), c0(y)],
    [c0(f[0]), c0(f[1])],
    [c0(n[0]), c0(n[1])],
  ]),
    je.push({ name: w, s: +a.toFixed(1), side: o, x: c0(p), z: c0(i), r: u }));
}
const ys = {};
{
  const s = Nt.tree,
    o = [s.plate.u, s.plate.v],
    t = [s.tip.u, s.tip.v],
    u = Math.hypot(t[0] - o[0], t[1] - o[1]),
    e = [(t[0] - o[0]) / u, (t[1] - o[1]) / u],
    r = [e[1], -e[0]],
    a = [o[0] + r[0] * s.plate.r, o[1] + r[1] * s.plate.r],
    p = [o[0] - e[0] * 1.3, o[1] - e[1] * 1.3],
    i = [a[0] + r[0] * 0.6 - e[0] * 1.6, a[1] + r[1] * 0.6 - e[1] * 1.6],
    d = [o[0] + 3.6, -(s.hw - 0.9)];
  ys.gRoot = [p, i, d].map(([y, w]) => He(s, y, w).map(c0));
}
const is = {};
