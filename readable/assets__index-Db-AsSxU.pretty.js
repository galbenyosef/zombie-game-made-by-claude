import {
  x as Fe,
  V as H0,
  C as ze,
  i as l1,
  au as h1,
  av as d1,
  o as Je,
  a2 as _1,
  a4 as q1,
  c as O1,
  f as f1,
  N as m1,
  aw as u1,
  a9 as P1,
  a8 as B1,
  b as mt,
  af as Yt,
  a7 as Gt,
  J as W1,
  B as p1,
  h as Ce,
  Q as Ht,
  E as j1,
  T as b1,
  G as w1,
  aR as K1,
  aS as Ut,
  v as Ft,
  aL as Y1,
  I as G1,
  w as U1,
} from "./index-DaQlAVPp.js";
import {
  B as bt,
  a as $1,
  b as d0,
  N as _t,
  c as g1,
  A as V1,
  d as Z1,
} from "./anim-B86X8yU9.js";
import { S as Hn } from "./anim-B86X8yU9.js";
import {
  s as J1,
  e as b0,
  a as B,
  r as _0,
  b as f0,
  c as K0,
  d as se,
  f as W0,
  g as Q1,
} from "./lightrig-BOum5aAY.js";
const I0 = (e, o = 0, n = 1) => (e < o ? o : e > n ? n : e),
  T0 = (e, o, n) => e + (o - e) * n,
  h = (e, o, n) => {
    const c = I0((n - e) / (o - e));
    return c * c * (3 - 2 * c);
  };
function ot(e = 1) {
  let o = e >>> 0 || 2654435769;
  return function () {
    o = (o + 1831565813) | 0;
    let n = Math.imul(o ^ (o >>> 15), 1 | o);
    return (
      (n = (n + Math.imul(n ^ (n >>> 7), 61 | n)) ^ n),
      ((n ^ (n >>> 14)) >>> 0) / 4294967296
    );
  };
}
function Be(e, o, n) {
  let c = (e * 374761393 + o * 668265263 + n * 1274126177) | 0;
  return (
    (c = Math.imul(c ^ (c >>> 13), 1274126177)),
    (c ^= c >>> 16),
    (c >>> 0) / 4294967296
  );
}
function me(e, o, n) {
  const c = Math.floor(e),
    t = Math.floor(o),
    s = Math.floor(n);
  let i = e - c,
    r = o - t,
    l = n - s;
  ((i = i * i * i * (i * (i * 6 - 15) + 10)),
    (r = r * r * r * (r * (r * 6 - 15) + 10)),
    (l = l * l * l * (l * (l * 6 - 15) + 10)));
  const a = Be(c, t, s),
    u = Be(c + 1, t, s),
    f = Be(c, t + 1, s),
    d = Be(c + 1, t + 1, s),
    v = Be(c, t, s + 1),
    C = Be(c + 1, t, s + 1),
    p = Be(c, t + 1, s + 1),
    F = Be(c + 1, t + 1, s + 1),
    J = a + (u - a) * i,
    n0 = f + (d - f) * i,
    _ = v + (C - v) * i,
    G = p + (F - p) * i,
    y = J + (n0 - J) * r,
    E = _ + (G - _) * r;
  return y + (E - y) * l;
}
function oe(e, o, n, c = 3) {
  let t = 0,
    s = 0.5,
    i = 0;
  for (let r = 0; r < c; r++)
    ((t += me(e, o, n) * s),
      (i += s),
      (e = e * 2.03 + 17.1),
      (o = o * 2.03 + 3.7),
      (n = n * 2.03 + 9.3),
      (s *= 0.5));
  return t / i;
}
const j0 = {
  add: (e, o) => [e[0] + o[0], e[1] + o[1], e[2] + o[2]],
  sub: (e, o) => [e[0] - o[0], e[1] - o[1], e[2] - o[2]],
  mul: (e, o) => [e[0] * o, e[1] * o, e[2] * o],
  dot: (e, o) => e[0] * o[0] + e[1] * o[1] + e[2] * o[2],
  cross: (e, o) => [
    e[1] * o[2] - e[2] * o[1],
    e[2] * o[0] - e[0] * o[2],
    e[0] * o[1] - e[1] * o[0],
  ],
  len: (e) => Math.hypot(e[0], e[1], e[2]),
  norm: (e) => {
    const o = Math.hypot(e[0], e[1], e[2]) || 1;
    return [e[0] / o, e[1] / o, e[2] / o];
  },
  lerp: (e, o, n) => [
    e[0] + (o[0] - e[0]) * n,
    e[1] + (o[1] - e[1]) * n,
    e[2] + (o[2] - e[2]) * n,
  ],
};
function X1(e, o, n, c, t, s, i, r, l) {
  const a = i - c,
    u = r - t,
    f = l - s,
    d = a * a + u * u + f * f;
  let v = d > 0 ? ((e - c) * a + (o - t) * u + (n - s) * f) / d : 0;
  v = v < 0 ? 0 : v > 1 ? 1 : v;
  const C = e - c - a * v,
    p = o - t - u * v,
    F = n - s - f * v;
  return Math.sqrt(C * C + p * p + F * F);
}
function z1(e, o, n) {
  const c = j0.norm(o);
  let t = j0.sub(n, j0.mul(c, j0.dot(n, c)));
  t = j0.norm(t);
  const s = j0.cross(t, c);
  return {
    o: e,
    U: c,
    V: s,
    W: t,
    lx: (i, r, l) => (i - e[0]) * c[0] + (r - e[1]) * c[1] + (l - e[2]) * c[2],
    ly: (i, r, l) => (i - e[0]) * s[0] + (r - e[1]) * s[1] + (l - e[2]) * s[2],
    lz: (i, r, l) => (i - e[0]) * t[0] + (r - e[1]) * t[1] + (l - e[2]) * t[2],
    world: (i, r, l) => [
      e[0] + c[0] * i + s[0] * r + t[0] * l,
      e[1] + c[1] * i + s[1] * r + t[1] * l,
      e[2] + c[2] * i + s[2] * r + t[2] * l,
    ],
  };
}
const ut = () => (typeof performance < "u" ? performance.now() : Date.now()),
  eo = [0.005, 0.012, 0.024, 0.042],
  to = [0.3, 0.3, 0.25, 0.15],
  oo = bt.map((e) => (/L$/.test(e) ? 1 : /R$/.test(e) ? -1 : 0));
function $t(e) {
  const o = bt.map((n0) => [e.segA?.[n0] ?? e.J[n0], e.J[$1[n0]]]),
    n = bt.map((n0) => e.rad[n0] ?? 0.04),
    c = [];
  let t = 0,
    s = 0;
  const i = { parts: {}, ms: 0 },
    r = ut(),
    l = new Float32Array(_t);
  for (const n0 of e.parts) {
    const _ = ut(),
      G = J1(n0.sdf, n0.min, n0.max, n0.res, {
        smooth: n0.smooth ?? 1,
        project: n0.project ?? 0,
      }),
      y = G.positions.length / 3,
      E = new Uint16Array(y * 4),
      c0 = new Float32Array(y * 4),
      u0 = new Float32Array(y),
      q = new Float32Array(y * 4),
      $ = new Float32Array(y),
      x = (n0.bones || []).map((Z) => d0[Z]),
      e0 = n0.sigma ?? 0.022,
      H = G.positions,
      z = G.normals;
    for (let Z = 0; Z < y; Z++) {
      const p0 = H[Z * 3],
        j = H[Z * 3 + 1],
        t0 = H[Z * 3 + 2],
        A = z[Z * 3],
        w = z[Z * 3 + 1],
        Y = z[Z * 3 + 2],
        b = typeof n0.mat == "function" ? n0.mat(p0, j, t0, A, w, Y) : n0.mat;
      ((u0[Z] = b),
        l.fill(0),
        n0.weights ? n0.weights(p0, j, t0, l) : Et(p0, j, t0, x, o, n, e0, l),
        no(l, E, c0, Z * 4));
      {
        let N = 0;
        for (let V = 0; V < 4; V++) {
          const O = eo[V],
            i0 = n0.sdf(p0 + A * O, j + w * O, t0 + Y * O);
          N += (Math.max(0, O - i0) / O) * to[V];
        }
        $[Z] = Math.max(0, Math.min(1, 1 - N * (n0.aoK ?? 1.1)));
      }
      const g = e.col ? e.col(p0, j, t0, b, n0.name, A, w, Y) : null;
      g &&
        ((q[Z * 4] = g[0]),
        (q[Z * 4 + 1] = g[1]),
        (q[Z * 4 + 2] = g[2]),
        (q[Z * 4 + 3] = g[3]));
    }
    (c.push({
      m: G,
      skinIndex: E,
      skinWeight: c0,
      mat: u0,
      col: q,
      ao: $,
      base: t,
    }),
      (t += y),
      (s += G.indices.length),
      (i.parts[n0.name] = {
        verts: y,
        tris: G.indices.length / 3,
        ms: Math.round(ut() - _),
      }));
  }
  const a = new Float32Array(t * 3),
    u = new Float32Array(t * 3),
    f = new Uint16Array(t * 4),
    d = new Float32Array(t * 4),
    v = new Float32Array(t),
    C = new Float32Array(t * 4),
    p = new Float32Array(t),
    F = t > 65535 ? new Uint32Array(s) : new Uint16Array(s);
  let J = 0;
  for (const n0 of c) {
    (a.set(n0.m.positions, n0.base * 3),
      u.set(n0.m.normals, n0.base * 3),
      f.set(n0.skinIndex, n0.base * 4),
      d.set(n0.skinWeight, n0.base * 4),
      v.set(n0.mat, n0.base),
      C.set(n0.col, n0.base * 4),
      p.set(n0.ao, n0.base));
    const _ = n0.m.indices;
    for (let G = 0; G < _.length; G++) F[J + G] = _[G] + n0.base;
    J += _.length;
  }
  return (
    (i.verts = t),
    (i.tris = s / 3),
    (i.ms = Math.round(ut() - r)),
    {
      position: a,
      normal: u,
      index: F,
      skinIndex: f,
      skinWeight: d,
      aMat: v,
      aCol: C,
      aAO: p,
      stats: i,
    }
  );
}
function Et(e, o, n, c, t, s, i, r) {
  let l = 1e9;
  const a = Et._d || (Et._d = new Float32Array(_t));
  for (const u of c) {
    const [f, d] = t[u];
    let v = X1(e, o, n, f[0], f[1], f[2], d[0], d[1], d[2]) - s[u];
    const C = oo[u];
    (C !== 0 && C * e < 0.012 && (v += (0.012 - C * e) * 6),
      (a[u] = v),
      v < l && (l = v));
  }
  for (const u of c) {
    const f = (a[u] - l) / i;
    r[u] = f > 3 ? 0 : Math.exp(-f * f);
  }
}
function no(e, o, n, c) {
  let t = 0;
  for (let s = 0; s < 4; s++) {
    let i = 0,
      r = -1;
    for (let l = 0; l < _t; l++) e[l] > r && ((r = e[l]), (i = l));
    if (r <= 0) {
      ((o[c + s] = 0), (n[c + s] = 0));
      continue;
    }
    ((o[c + s] = i), (n[c + s] = r), (t += r), (e[i] = -1));
  }
  if (t <= 0) {
    n[c] = 1;
    return;
  }
  for (let s = 0; s < 4; s++) n[c + s] /= t;
}
const L = {
    SKIN: 0,
    FACE: 1,
    EYE: 2,
    MOUTH: 3,
    TEETH: 4,
    HAIR: 5,
    CLOTH_A: 6,
    CLOTH_B: 7,
    CLOTH_C: 8,
    SHOE: 9,
    NAIL: 10,
    SOCK: 11,
    BELT: 12,
    WOUND: 13,
    TUBE: 14,
  },
  He = 16,
  Vt = (40 * Math.PI) / 180,
  z0 = (e) => [e * Math.sin(Vt), -Math.cos(Vt), 0],
  G0 = (e, o, n) => [e[0] + o[0] * n, e[1] + o[1] * n, e[2] + o[2] * n];
function nt(e) {
  const o = e.side,
    n = z1(e.wrist, e.dir, [0, 0, 1]),
    c = o,
    [t, s, i] = e.palm,
    r = e.curl ?? [0.5, 0.75, 0.45],
    l = ot(e.seed ?? 5),
    a = [],
    u = [s * 0.36, s * 0.12, -s * 0.12, -s * 0.36];
  for (let x = 0; x < 4; x++) {
    const [e0, H] = e.fingers[x],
      z = e0 * 0.45,
      Z = e0 * 0.3,
      p0 = e0 * 0.25,
      j = u[x],
      t0 = (e.spread ?? 0.08) * (1.5 - x),
      A = (l() - 0.5) * 0.25,
      w = r[0] + A + (x === 3 ? 0.15 : 0),
      Y = r[1] + (l() - 0.5) * 0.3,
      b = r[2] + (l() - 0.5) * 0.3,
      g = [t * (x === 0 || x === 3 ? 0.93 : 1), i * 0.05, j],
      N = (o0) => [Math.cos(o0), -Math.sin(o0), 0],
      V = g;
    let O = N(w);
    O[2] = t0 * 0.35;
    const i0 = [V[0] + O[0] * z, V[1] + O[1] * z, V[2] + O[2] * z];
    ((O = N(w + Y)), (O[2] = t0 * 0.2));
    const m0 = [i0[0] + O[0] * Z, i0[1] + O[1] * Z, i0[2] + O[2] * Z];
    O = N(w + Y + b);
    const S = [m0[0] + O[0] * p0, m0[1] + O[1] * p0, m0[2] + O[2] * p0],
      P = [(V[0] + S[0]) / 2, (V[1] + S[1]) / 2, (V[2] + S[2]) / 2],
      s0 =
        Math.max(
          j0.len(j0.sub(V, P)),
          j0.len(j0.sub(i0, P)),
          j0.len(j0.sub(m0, P)),
          j0.len(j0.sub(S, P)),
        ) +
        H * 1.4;
    a.push({ p0: V, p1: i0, p2: m0, p3: S, r: H, tipDir: O, bc: P, br: s0 });
  }
  const [f, d] = e.thumb,
    v = [t * 0.18, -i * 0.2, s * 0.45],
    C = [v[0] + f * 0.4, v[1] - f * 0.2, v[2] + f * 0.3],
    p = [C[0] + f * 0.35, C[1] - f * 0.3, C[2] + f * 0.02],
    F = [p[0] + f * 0.25, p[1] - f * 0.22, p[2] - f * 0.1],
    J = e.bony ?? 0.5,
    n0 = (x, e0, H, z, Z, p0, j) =>
      _0(x, e0, H, z[0], z[1], z[2], p0, Z[0], Z[1], Z[2], j);
  function _(x, e0, H) {
    return [n.lx(x, e0, H), c * n.ly(x, e0, H), n.lz(x, e0, H)];
  }
  function G(x, e0, H) {
    let z = W0(x, e0, H, t * 0.5, 0, 0, t * 0.5, i * 0.5, s * 0.5, i * 0.45);
    ((z = B(
      z,
      b0(x, e0, H, t * 0.3, -i * 0.25, s * 0.2, t * 0.35, i * 0.45, s * 0.4),
      0.01,
    )),
      (z = B(z, K0(x, e0, H, -0.03, 0, 0, t * 0.15, 0, 0, i * 0.62), 0.02)));
    for (let p0 = 0; p0 < 4; p0++) {
      const j = a[p0],
        t0 = j.r,
        A = x - j.bc[0],
        w = e0 - j.bc[1],
        Y = H - j.bc[2];
      if (Math.sqrt(A * A + w * w + Y * Y) - j.br > z + 0.01) continue;
      let b = n0(x, e0, H, j.p0, j.p1, t0 * 1.05, t0 * 0.95);
      ((b = Math.min(b, n0(x, e0, H, j.p1, j.p2, t0 * 0.97, t0 * 0.85))),
        (b = Math.min(b, n0(x, e0, H, j.p2, j.p3, t0 * 0.87, t0 * 0.62))),
        (b = B(
          b,
          se(
            x,
            e0,
            H,
            j.p1[0],
            j.p1[1] + t0 * 0.25,
            j.p1[2],
            t0 * (0.9 + 0.25 * J),
          ),
          0.004,
        )),
        (b = B(
          b,
          se(x, e0, H, j.p0[0], j.p0[1] + i * 0.2, j.p0[2], t0 * (1 + 0.3 * J)),
          0.006,
        )),
        (z = B(z, b, 0.007)));
    }
    let Z = n0(x, e0, H, v, C, d * 1.25, d * 1);
    ((Z = Math.min(Z, n0(x, e0, H, C, p, d * 1, d * 0.9))),
      (Z = Math.min(Z, n0(x, e0, H, p, F, d * 0.9, d * 0.65))),
      (z = B(z, Z, 0.012)));
    for (let p0 = 0; p0 < 4; p0++) {
      const j = a[p0];
      z = B(
        z,
        K0(
          x,
          e0,
          H,
          t * 0.1,
          i * 0.42,
          j.p0[2] * 0.6,
          j.p0[0],
          i * 0.35,
          j.p0[2],
          0.0028 + 0.002 * J,
        ),
        0.004,
      );
    }
    return z;
  }
  const y = (x, e0, H) => {
      const z = n.lx(x, e0, H),
        Z = c * n.ly(x, e0, H),
        p0 = n.lz(x, e0, H);
      return G(z, Z, p0);
    },
    E = (x, e0, H) => {
      const z = n.lx(x, e0, H),
        Z = c * n.ly(x, e0, H),
        p0 = n.lz(x, e0, H);
      for (let j = 0; j < 4; j++) {
        const t0 = a[j],
          A = [z - t0.p2[0], Z - t0.p2[1], p0 - t0.p2[2]],
          w = [t0.p3[0] - t0.p2[0], t0.p3[1] - t0.p2[1], t0.p3[2] - t0.p2[2]],
          Y = j0.len(w),
          b = j0.dot(A, w) / (Y * Y);
        if (b < 0.25 || b > 1.25) continue;
        const g = [-w[1] / Y, w[0] / Y, 0];
        if (
          j0.dot(A, g) > t0.r * 0.25 &&
          Math.abs(p0 - (t0.p2[2] + w[2] * b)) < t0.r * 0.85
        )
          return !0;
      }
      {
        const j = [z - p[0], Z - p[1], p0 - p[2]],
          t0 = j0.sub(F, p),
          A = j0.len(t0),
          w = j0.dot(j, t0) / (A * A);
        if (w > 0.3 && w < 1.3 && Z - (p[1] + t0[1] * w) > d * 0.2) return !0;
      }
      return !1;
    },
    c0 = [
      [-0.05, -i * 1.2, -s * 0.8],
      [t + Math.max(...e.fingers.map((x) => x[0])) + 0.01, i * 1.3, s * 0.95],
    ],
    u0 = [];
  for (const x of [c0[0][0], c0[1][0]])
    for (const e0 of [c0[0][1], c0[1][1]])
      for (const H of [c0[0][2], c0[1][2] + 0.03]) {
        const z = n.world(x, c * e0, H);
        u0.push(z);
      }
  const q = [0, 1, 2].map((x) => Math.min(...u0.map((e0) => e0[x])) - 0.01),
    $ = [0, 1, 2].map((x) => Math.max(...u0.map((e0) => e0[x])) + 0.01);
  return { sdf: y, nailAt: E, min: q, max: $, frame: n, local: _ };
}
function It(e) {
  const o = e.x,
    n = e.ankle,
    c = e.len,
    t = e.width,
    s = n[2] - 0.055,
    i = s + c * 0.72,
    r = s + c,
    l = -Math.sign(o) || 1;
  return {
    sdf: (u, f, d) => {
      let v = _0(
        u,
        f,
        d,
        o,
        0.034,
        s + 0.01,
        0.032,
        o + l * 0.005,
        0.026,
        i,
        0.028,
      );
      if (
        ((v = B(
          v,
          b0(u, f, d, o + l * 0.004, 0.028, i - 0.01, t * 0.5, 0.026, 0.05),
          0.02,
        )),
        (v = B(
          v,
          K0(
            u,
            f,
            d,
            n[0],
            n[1] + 0.07,
            n[2],
            n[0],
            n[1] - 0.01,
            n[2] - 0.005,
            0.034,
          ),
          0.03,
        )),
        (v = B(v, se(u, f, d, n[0] - l * 0.03, n[1], n[2], 0.012), 0.012)),
        (v = B(
          v,
          se(u, f, d, n[0] + l * 0.028, n[1] + 0.008, n[2] - 0.005, 0.012),
          0.012,
        )),
        e.toes)
      )
        for (let C = 0; C < 5; C++) {
          const p = o + l * (0.028 - C * 0.0135) * (t / 0.09),
            F = C === 0 ? 0.034 : 0.03 - C * 0.003,
            J = C === 0 ? 0.0115 : 0.0085 - C * 6e-4,
            n0 = i + 0.015 - C * 0.004;
          v = B(
            v,
            K0(
              u,
              f,
              d,
              p,
              0.022,
              n0,
              p - l * C * 0.002,
              0.012 + (C === 0 ? 0.002 : 0),
              n0 + F,
              J,
            ),
            0.006,
          );
        }
      else
        v = B(
          v,
          b0(u, f, d, o + l * 0.006, 0.021, r - 0.035, t * 0.44, 0.02, 0.04),
          0.02,
        );
      return Math.max(v, -f + 0.001);
    },
    min: [o - 0.075, -0.005, s - 0.05],
    max: [o + 0.075, n[1] + 0.11, r + 0.03],
    heelZ: s,
    toeZ: r,
  };
}
function gt(e) {
  const o = e.x,
    n = e.ankle,
    c = e.len,
    t = e.width,
    s = n[2] - 0.065,
    i = s + c,
    r = -Math.sign(o) || 1,
    l = e.kind !== "slipper",
    a = (f, d, v) => {
      let C = _0(
        f,
        d,
        v,
        o,
        0.05,
        s + 0.03,
        0.04,
        o + r * 0.006,
        0.035,
        i - 0.05,
        0.036,
      );
      return (
        (C = B(
          C,
          b0(f, d, v, o + r * 0.006, 0.03, i - 0.045, t * 0.52, 0.032, 0.05),
          0.02,
        )),
        l
          ? (C = B(
              C,
              W0(f, d, v, o, 0.012, (s + i) / 2, t * 0.5, 0.012, c * 0.5, 0.01),
              0.004,
            ))
          : (C = B(
              C,
              W0(f, d, v, o, 0.01, (s + i) / 2, t * 0.5, 0.01, c * 0.5, 0.009),
              0.01,
            )),
        (C = f0(
          C,
          d - (l ? 0.085 : 0.055) - (v - s) * (l ? -0.25 : -0.35),
          0.01,
        )),
        l &&
          (C = B(
            C,
            K0(
              f,
              d,
              v,
              n[0],
              n[1] + 0.06,
              n[2],
              n[0],
              n[1] - 0.005,
              n[2],
              0.035,
            ),
            0.012,
          )),
        Math.max(C, -d)
      );
    },
    u = (f, d, v) => d < 0.02;
  return {
    sdf: a,
    min: [o - 0.08, -0.005, s - 0.03],
    max: [o + 0.08, n[1] + 0.1, i + 0.03],
    soleY: u,
    heelZ: s,
    toeZ: i,
  };
}
function rt(e) {
  const o = e.HC,
    n = e.cran,
    c = e.lowerFace,
    t = e.eyeX,
    s = e.eyeY ?? 0,
    i = e.eyeZ,
    r = e.eyeR ?? 0.0118,
    l = e.mouthY,
    a = e.mouthW,
    u = e.mouthZ,
    f = e.mouthGap ?? 0.004,
    d = e.jawHinge,
    v = e.chin,
    C = ot(e.seed ?? 3),
    p = [];
  for (const j of [1, -1]) {
    const t0 = e.teethN ?? 8;
    for (let A = 0; A < t0; A++) {
      const w = ((A + 0.5) / t0) * 2 - 1;
      if ((e.missing || []).includes(j * (A + 1))) continue;
      const Y = w * a * 0.82,
        b = (Math.abs(w) < 0.3 ? 0.0034 : 0.0029) * (e.teethScale ?? 1),
        g =
          (j > 0 ? 0.0068 : 0.0058) * (0.85 + C() * 0.3) * (e.teethScale ?? 1),
        N = u - 0.004 - Y * Y * (e.arch ?? 14),
        V = j > 0 ? l + f * 0.5 + 0.0015 : l - f * 0.5 - 0.0015,
        O = (e.broken || []).includes(j * (A + 1)) ? 0.5 : 1;
      p.push({
        x: Y,
        y: V - j * g * 0.5 * O,
        z: N,
        w: b,
        h: g * 0.5 * O,
        row: j,
        tilt: (C() - 0.5) * 0.25,
      });
    }
  }
  const F = (j, t0, A) => {
      let w = 1e9;
      for (const Y of p) {
        if (Math.abs(j - Y.x) > 0.012 || Math.abs(t0 - Y.y) > 0.012) continue;
        const b = j - Y.x,
          g = t0 - Y.y,
          N = b + g * Y.tilt;
        w = Math.min(w, W0(N, g, A, 0, 0, Y.z, Y.w * 0.5, Y.h, 0.0022, 0.0012));
      }
      return w;
    },
    J = (j, t0, A) => {
      let w = W0(
        j,
        t0,
        A,
        0,
        l,
        u - 0.02,
        a,
        f * 0.5,
        0.03,
        Math.min(f * 0.45, 0.0025),
      );
      return (
        (w = B(
          w,
          b0(j, t0, A, 0, l - 0.004, u - 0.03, a * 1.05, 0.016 + f * 0.3, 0.03),
          0.01,
        )),
        w
      );
    },
    n0 = e.hair
      ? (j, t0, A) => {
          const w = e.hair,
            Y = h(
              w.front - 0.008,
              w.front + 0.008,
              t0 + (A > 0 ? 0 : 1) * 0.2 - Math.abs(j) * (w.recede ?? 0.3),
            ),
            b =
              h(w.side - 0.008, w.side + 0.008, t0) *
                h(-0.01, 0.02, -A + 0.01) +
              Y,
            g = h(w.nape - 0.01, w.nape + 0.01, t0) * h(0, -0.03, A);
          return I0(Math.max(Y, Math.min(1, b), g));
        }
      : null;
  function _(j, t0, A) {
    let w = b0(j, t0, A, n.c[0], n.c[1], n.c[2], n.r[0], n.r[1], n.r[2]);
    if (
      ((w = B(
        w,
        b0(j, t0, A, c.c[0], c.c[1], c.c[2], c.r[0], c.r[1], c.r[2]),
        e.faceK ?? 0.025,
      )),
      e.temple)
    )
      for (const b of [-1, 1])
        w = f0(
          w,
          -b0(
            j,
            t0,
            A,
            b * e.temple[0],
            e.temple[1],
            e.temple[2],
            0.012,
            0.03,
            0.028,
          ),
          0.02,
        );
    const Y = Math.abs(j);
    if (
      ((w = f0(w, (Y - e.chinW - (t0 - v[0]) * e.jawSlope) * 0.8, 0.02)),
      (w = f0(
        w,
        (-(t0 - v[0]) + (v[1] - 0.04 - A) * (e.jawUnder ?? 0.55)) * 0.85,
        0.016,
      )),
      (w = f0(w, A - e.faceZ, 0.035)),
      A > -0.01)
    ) {
      for (const b of [-1, 1])
        ((w = B(
          w,
          b0(
            j,
            t0,
            A,
            b * e.cheek[0],
            e.cheek[1],
            e.cheek[2],
            0.019 * (e.cheekS ?? 1),
            0.012 * (e.cheekS ?? 1),
            0.02 * (e.cheekS ?? 1),
          ),
          0.012 * (e.cheekK ?? 1),
        )),
          e.hollow &&
            (w = f0(
              w,
              -b0(
                j,
                t0,
                A,
                b * e.hollow[0],
                e.hollow[1],
                e.hollow[2],
                0.018,
                0.028,
                0.024,
              ),
              e.hollowK ?? 0.02,
            )),
          e.jowl &&
            (w = B(
              w,
              b0(
                j,
                t0,
                A,
                b * e.jowl[0],
                e.jowl[1],
                e.jowl[2],
                e.jowl[3],
                e.jowl[4],
                e.jowl[5],
              ),
              e.jowlK ?? 0.02,
            )));
      if (t0 > s - 0.045 && A > 0.02) {
        w = B(
          w,
          K0(
            j,
            t0,
            A,
            -e.brow[0],
            e.brow[1],
            e.brow[2],
            e.brow[0],
            e.brow[1],
            e.brow[2],
            e.brow[3],
          ),
          0.016,
        );
        for (const b of [-1, 1])
          if (
            ((w = f0(
              w,
              -b0(
                j,
                t0,
                A,
                b * t,
                s + 0.002,
                i + 0.017,
                e.socket[0],
                e.socket[1],
                e.socket[2],
              ),
              0.008,
            )),
            e.lid)
          ) {
            let g = se(j, t0, A, b * t, s, i, r + 0.0022);
            ((g = f0(
              g,
              -(t0 - (s + r * e.lid - Math.abs(j - b * t) * 0.12)),
              0.0015,
            )),
              (g = f0(g, i - 0.004 - A, 0.002)),
              (w = B(w, g, 0.0025)));
          }
      }
      if (Math.abs(j) < 0.05 && A > 0.035) {
        const b = e.nose;
        w = B(
          w,
          _0(
            j,
            t0,
            A,
            b.bx ?? 0,
            b.bridge[0],
            b.bridge[1],
            b.r0,
            b.tx ?? 0,
            b.tip[0],
            b.tip[1],
            b.r1,
          ),
          0.012,
        );
        for (const g of [-1, 1])
          w = B(
            w,
            b0(
              j,
              t0,
              A,
              g * b.wing,
              b.tip[0] - 0.004,
              b.tip[1] - 0.011,
              0.0085,
              0.0065,
              0.008,
            ),
            0.006,
          );
        for (const g of [-1, 1])
          w = f0(
            w,
            -b0(
              j,
              t0,
              A,
              g * b.wing * 0.55,
              b.tip[0] - 0.008,
              b.tip[1] - 0.006,
              0.0035,
              0.0022,
              0.004,
            ),
            0.002,
          );
        t0 < l + 0.03 &&
          t0 > l - 0.035 &&
          ((w = B(
            w,
            b0(
              j,
              t0,
              A,
              0,
              l + 0.006 + f * 0.5,
              u + 0.002,
              a * 1.02,
              0.0055,
              0.008,
            ),
            0.006,
          )),
          (w = B(
            w,
            b0(
              j,
              t0,
              A,
              0,
              l - 0.006 - f * 0.5,
              u + 0,
              a * 0.95,
              0.0065,
              0.0085,
            ),
            0.006,
          )));
      }
    }
    if (Math.abs(j) > 0.045 && A < 0.035)
      for (const b of [-1, 1]) {
        const g = e.ear;
        let N = b0(j, t0, A, b * g[0], g[1], g[2], 0.011, g[3], g[4]);
        ((N = f0(
          N,
          -b0(
            j,
            t0,
            A,
            b * (g[0] + 0.007),
            g[1] - 0.004,
            g[2] + 0.003,
            0.006,
            g[3] * 0.45,
            g[4] * 0.45,
          ),
          0.003,
        )),
          (w = B(w, N, 0.006)));
      }
    if (
      (e.extra && (w = e.extra(j, t0, A, w)),
      Math.abs(j) < a + 0.03 &&
        Math.abs(t0 - l) < 0.04 &&
        A > 0 &&
        ((w = f0(w, -J(j, t0, A), 0.003)), (w = Math.min(w, F(j, t0, A)))),
      A > 0.03 && Math.abs(t0 - s) < 0.03)
    )
      for (const b of [-1, 1]) w = Math.min(w, se(j, t0, A, b * t, s, i, r));
    return w;
  }
  const G = j0.sub(e.C7, o),
    y = (j, t0, A) => {
      let w = _0(
        j,
        t0,
        A,
        0,
        e.neckTop[0],
        e.neckTop[1],
        e.neckR[0],
        G[0],
        G[1] - 0.03,
        G[2] + 0.01,
        e.neckR[1],
      );
      for (const Y of [-1, 1])
        w = B(
          w,
          K0(
            j,
            t0,
            A,
            Y * 0.05,
            -0.05,
            -0.012,
            Y * 0.015,
            G[1] - 0.005,
            G[2] + 0.06,
            e.cordR ?? 0.011,
          ),
          0.014,
        );
      return (
        e.adam &&
          (w = B(
            w,
            b0(j, t0, A, 0, e.adam[0], e.adam[1], 0.011, 0.014, 0.012),
            0.01,
          )),
        e.neckExtra && (w = e.neckExtra(j, t0, A, w)),
        w
      );
    },
    E = (j, t0, A) => _(j - o[0], t0 - o[1], A - o[2]),
    u0 = n0
      ? {
          sdf: (j, t0, A) => {
            const w = j - o[0],
              Y = t0 - o[1],
              b = A - o[2],
              g = n0(w, Y, b),
              N = Math.atan2(w, b),
              V =
                (Math.sin(N * 7 + Y * 14 + Math.sin(Y * 30 + N * 2) * 1.1) *
                  0.6 +
                  Math.sin(N * 17 - Y * 9 + 1.7) * 0.3) *
                e.hair.clump,
              O = e.hair.th + V;
            let i0 =
              b0(
                w,
                Y,
                b,
                n.c[0],
                n.c[1] + 0.002,
                n.c[2],
                n.r[0] + O,
                n.r[1] + O,
                n.r[2] + O,
              ) +
              (1 - g) * 0.03;
            for (const m0 of e.hair.strands || []) {
              const S = m0.pts;
              for (let P = 0; P < S.length - 1; P++)
                i0 = B(
                  i0,
                  _0(
                    w,
                    Y,
                    b,
                    S[P][0],
                    S[P][1],
                    S[P][2],
                    m0.r * (1 - (P / S.length) * 0.6),
                    S[P + 1][0],
                    S[P + 1][1],
                    S[P + 1][2],
                    m0.r * (1 - ((P + 1) / S.length) * 0.6),
                  ),
                  0.004,
                );
            }
            return i0;
          },
          min: [
            o[0] + n.c[0] - n.r[0] - 0.03,
            o[1] + (e.hair.nape ?? -0.06) - 0.05,
            o[2] + n.c[2] - n.r[2] - 0.03,
          ],
          max: [
            o[0] + n.c[0] + n.r[0] + 0.03,
            o[1] + n.c[1] + n.r[1] + 0.03,
            o[2] + n.c[2] + n.r[2] + 0.03,
          ],
        }
      : null,
    q = {
      sdf: (j, t0, A) => y(j - o[0], t0 - o[1], A - o[2]),
      min: [o[0] - 0.085, o[1] + G[1] - 0.07, o[2] - 0.1],
      max: [o[0] + 0.085, o[1] - 0.02, o[2] + 0.085],
    },
    $ = (j, t0, A) => {
      const w = j - o[0],
        Y = t0 - o[1],
        b = A - o[2];
      for (const N of [-1, 1])
        if (se(w, Y, b, N * t, s, i, r) < 0.0012) return L.EYE;
      if (F(w, Y, b) < 0.0012) return L.TEETH;
      const g = J(w, Y, b);
      if (g > -0.0035 && g < 0.003 && b < u - 0.002) return L.MOUTH;
      if (e.matExtra) {
        const N = e.matExtra(w, Y, b);
        if (N != null) return N;
      }
      return L.FACE;
    },
    x = (j, t0, A, w) => {
      const Y = j - o[0],
        b = t0 - o[1],
        g = A - o[2],
        N = h(l - 0.001, l - 0.007 - f * 0.5, b),
        V = h(d[1] - 0.03, d[1] + 0, g),
        O = h(d[0] + 0.004, d[0] - 0.02, b) * h(d[1] - 0.02, d[1] + 0.005, g);
      let i0 = I0(
        Math.max(
          N * V,
          O * h(e.jawSideX ?? 0.04, (e.jawSideX ?? 0.04) + 0.03, Math.abs(Y)),
        ),
      );
      F(Y, b, g) < 0.002 &&
        (i0 = p.some(
          (w0) =>
            w0.row < 0 &&
            Math.abs(Y - w0.x) < 0.006 &&
            Math.abs(b - w0.y) < 0.008,
        )
          ? 1
          : 0);
      const m0 = -(b - v[0]) + (v[1] - 0.04 - g) * (e.jawUnder ?? 0.55),
        S = h(e.skullBase + 0.02, e.skullBase - 0.035, b),
        P = h(-0.012, 0.04, m0),
        s0 = h(d[1] - 0.03, d[1] + 0.02, g),
        o0 = I0(T0(Math.max(S, P), P, s0)),
        g0 = h(G[1] + 0.035, G[1] - 0.01, b);
      ((w[d0.head] += (1 - i0) * (1 - o0)),
        (w[d0.jaw] += i0 * (1 - o0)),
        (w[d0.neck] += o0 * (1 - g0)),
        (w[d0.chest] += o0 * g0));
    },
    e0 = {
      eyeL: [t * 1e3, s * 1e3],
      eyeR: [-t * 1e3, s * 1e3],
      eyeRad: r * 1e3,
      mouthY: l * 1e3,
      mouthW: a * 1e3,
      noseTip: H(e.nose.tip[0]),
      chinY: v[0] * 1e3,
      browY: e.brow[1] * 1e3,
    };
  function H(j) {
    return j * 1e3;
  }
  const z = [o[0] - 0.105, o[1] + v[0] - 0.03, o[2] - 0.13],
    Z = [o[0] + 0.105, o[1] + n.c[1] + n.r[1] + 0.006, o[2] + 0.14],
    p0 = {
      L: [o[0] + t, o[1] + s, o[2] + i],
      R: [o[0] - t, o[1] + s, o[2] + i],
      r,
    };
  return {
    sdf: E,
    mat: $,
    weights: x,
    features: e0,
    min: z,
    max: Z,
    HC: o,
    rect: e.rect,
    carve: J,
    teeth: p,
    localSDF: _,
    neck: q,
    eyeC: p0,
    hair: u0,
  };
}
function ue(e, o, n, c = 28, t = 0.72) {
  return (
    h(t, t + 0.07, me(e * c + 3.1, o * c, n * c + 7.7)) *
    h(0.42, 0.62, oe(e * 3 + 1, o * 3, n * 3, 2))
  );
}
const so = {
    skin: 0,
    cloth: 1,
    hair: 2,
    eye: 3,
    mouth: 4,
    teeth: 5,
    leather: 6,
    wound: 7,
    plastic: 8,
  },
  ao = `
#include <common>
#include <skinning_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
attribute float aMat;
attribute vec4 aCol;
attribute float aAO;
varying vec3 vW;
varying vec3 vN;
varying vec3 vL;
varying vec3 vLN;
varying vec4 vCol;
flat varying float vMat;          // FLAT: an interpolated id passes through every id in between (skin 0 -> mouth 3 drew a thin band of eyeball 2: white dots on every lip, lid and wound edge)
varying float vAO;
void main() {
  vAO = aAO;
  #include <skinbase_vertex>
  #include <beginnormal_vertex>
  #include <skinnormal_vertex>
  #include <begin_vertex>
  #include <skinning_vertex>
  vec4 w = modelMatrix * vec4(transformed, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * objectNormal);
  vL = position;
  vLN = normal;
  vCol = aCol;
  vMat = aMat;
  vec4 mvPosition = viewMatrix * w;
  gl_Position = projectionMatrix * mvPosition;
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
}
`,
  io = `
#include <common>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
uniform vec3 uKeyDir;
uniform vec3 uKeyCol;
uniform vec3 uRimDir;
uniform vec3 uRimCol;
uniform float uRimAmt;
uniform vec3 uAmbCol;
uniform float uAmb;
uniform vec3 uAmbGain;
uniform vec3 uAmbRGB;              // the shade side's light (linear, like uKeyCol)
uniform vec3 uTorchPos;            // the flashlight, lit per pixel
uniform vec3 uTorchDir;
uniform vec3 uTorchCol;            // colour * intensity; 0 = off
uniform vec4 uTorchP;              // cos(outer), cos(inner), cutoff distance, decay
uniform float uExposure;
uniform vec3 uBaseP[NMAT];
uniform vec3 uShadeP[NMAT];
uniform vec3 uDeepP[NMAT];
uniform vec4 uMatP[NMAT];          // x = type, y = spec, z = fold, w = rim
uniform vec4 uMatQ[NMAT];          // x = pattern (0 none, 1 print, 2 ribbing, 3 wrap), y = pattern frequency (1/m)
varying float vAO;
uniform vec3 uBlood;
uniform vec3 uBloodShade;
uniform vec3 uDirt;
uniform vec3 uBruise;
uniform vec3 uVein;
uniform vec3 uLivor;
uniform float uLivorY;
uniform float uSeed;
uniform float uSil;
uniform sampler2D uFaceTex;
uniform vec4 uFaceRect;            // head-local metres: x0, y0, w, h
uniform vec3 uHC;                  // head centre (rest, root space)
uniform float uFaceOn;
uniform vec4 uEyeL;
uniform vec4 uEyeR;
uniform vec4 uGaze;
uniform vec3 uIrisCol;
uniform vec3 uScleraCol;
uniform float uCloud;
uniform vec4 uAliveP;              // PRIEST: x = alive (0 = the dead: nothing below changes), y = cos of the pupil's edge, z = the upper lid's edge (eye-local), w = catchlight
uniform float uBlink;              // PRIEST: 0 open .. 1 the upper lid shut (per instance)
varying vec3 vW;
varying vec3 vN;
varying vec3 vL;
varying vec3 vLN;
varying vec4 vCol;
flat varying float vMat;

float lumi(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float h13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vn3(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = h13(i), b = h13(i + vec3(1.0, 0.0, 0.0)), c = h13(i + vec3(0.0, 1.0, 0.0)), d = h13(i + vec3(1.0, 1.0, 0.0));
  float e = h13(i + vec3(0.0, 0.0, 1.0)), g = h13(i + vec3(1.0, 0.0, 1.0)), h = h13(i + vec3(0.0, 1.0, 1.0)), k = h13(i + vec3(1.0, 1.0, 1.0));
  return mix(mix(mix(a, b, f.x), mix(c, d, f.x), f.y), mix(mix(e, g, f.x), mix(h, k, f.x), f.y), f.z);
}
float fbm(vec3 p) { return vn3(p) * 0.55 + vn3(p * 2.07 + 11.3) * 0.3 + vn3(p * 4.3 + 3.1) * 0.15; }
vec3 dec(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
vec3 ambTint() {
  float m = max(max(uAmbCol.r, uAmbCol.g), max(uAmbCol.b, 1e-4));
  return mix(vec3(1.0), uAmbCol / m, uAmb * 0.6) * uAmbGain;
}
float rimMask(vec3 N, vec3 V, float width) {
  float fres = 1.0 - clamp(dot(N, V), 0.0, 1.0);
  float side = dot(N, uRimDir);
  float f = fres * smoothstep(-0.1, 0.45, side);
  float w = max(fwidth(f), 1e-4);
  return smoothstep(width - w, width + w, f);
}
// a crisp painterly edge: the interpolated mask m thresholded against noise (anti-aliased by the noise's screen rate)
float paintEdge(float m, float n, float soft) {
  float v = m * 1.3 - 0.15 + (n - 0.5) * 0.7;
  float w = max(fwidth(v) * 0.8, soft);
  return smoothstep(0.5 - w, 0.5 + w, v);
}

void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  int mi = int(vMat + 0.5);
  vec4 mp = uMatP[mi];
  int ty = int(mp.x + 0.5);
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(cameraPosition - vW);
  vec3 L = uKeyDir;
  vec3 base = uBaseP[mi], shade = uShadeP[mi], deepC = uDeepP[mi];
  vec3 P = vL + vec3(uSeed * 1.37, uSeed * 0.71, uSeed * 2.13);
  bool isSkin = ty == 0;
  bool isCloth = ty == 1;
  // ---- cloth patterns (rest space): 1 = a faded diamond print, 2 = knit ribbing (bent normal), 3 = bandage wrap
  vec4 mq = uMatQ[mi];
  int pt = int(mq.x + 0.5);
  float patDark = 0.0;
  if (pt > 0) {
    vec2 pu = abs(vLN.x) > abs(vLN.z) ? vec2(vL.z, vL.y) : vec2(vL.x, vL.y);
    if (pt == 1) {
      vec2 q = pu * mq.y;
      vec2 r = vec2(q.x + q.y, q.x - q.y) * 0.7071;
      vec2 f = abs(fract(r) - 0.5);
      float dm = f.x + f.y;
      float aa = max(fwidth(dm), 1e-3);
      float mark = 1.0 - smoothstep(0.22 - aa, 0.22 + aa, dm);
      float dotm = 1.0 - smoothstep(0.08 - aa, 0.08 + aa, length(fract(q + 0.5) - 0.5));
      patDark = max(mark * 0.55, dotm * 0.4) * (0.6 + 0.4 * vn3(vL * 20.0));
      base = mix(base, base * vec3(0.72, 0.82, 0.92), patDark);
      shade = mix(shade, shade * vec3(0.8, 0.88, 0.96), patDark * 0.7);
    } else if (pt == 2) {
      float u = pu.x * mq.y;
      vec3 T1 = normalize(cross(N, vec3(0.0, 1.0, 0.0)) + 1e-4);
      float fw = fwidth(u);
      float k = 1.0 - smoothstep(0.3, 0.8, fw);
      N = normalize(N + T1 * cos(u * 6.2831853) * 0.35 * k);
      patDark = (0.5 + 0.5 * sin(u * 6.2831853)) * 0.18 * k;
      base *= 1.0 - patDark; shade *= 1.0 - patDark * 0.6;
    } else if (pt == 3) {
      float u = (pu.x * 0.4 + pu.y) * mq.y;
      float g = abs(fract(u) - 0.5);
      float aa = max(fwidth(u), 1e-3);
      patDark = (1.0 - smoothstep(0.06 - aa, 0.06 + aa, g)) * 0.5;
      base *= 1.0 - patDark; shade *= 1.0 - patDark * 0.7;
    } else if (pt == 4) {
      // SOLDIER: a painted woodland camouflage, three tones: blotches in rest space (they ride on the cloth), crisp edges
      vec3 q = vL * mq.y;
      float c1 = fbm(q + vec3(2.3, 7.1, 4.4)), c2 = fbm(q * 1.7 + vec3(9.7, 1.3, 5.9));
      float w1 = max(fwidth(c1), 0.004), w2 = max(fwidth(c2), 0.004);
      float mb = smoothstep(0.55 - w1, 0.55 + w1, c1);
      float mk = smoothstep(0.6 - w2, 0.6 + w2, c2) * (1.0 - mb * 0.4);
      base = mix(base, base * vec3(1.16, 0.94, 0.72), mb * 0.75);
      base = mix(base, base * vec3(0.46, 0.5, 0.44), mk * 0.8);
      shade = mix(shade, shade * vec3(1.1, 0.94, 0.78), mb * 0.6);
      shade = mix(shade, shade * 0.6, mk * 0.7);
    }
  }
  // ---- cloth: fine folds bent into the normal + a weave grain (rest space so it never swims)
  if (isCloth && mp.z > 0.0) {
    vec2 fp = vec2(vL.x * 36.0 + sin(vL.y * 9.0 + vL.z * 7.0) * 0.9, vL.y * 5.0 + vL.z * 3.0);
    float e = 0.02;
    float f0 = vn3(vec3(fp, 0.5)), fx = vn3(vec3(fp + vec2(e, 0.0), 0.5)), fy = vn3(vec3(fp + vec2(0.0, e), 0.5));
    vec3 g = vec3((fx - f0) / e, (fy - f0) / e * 0.25, 0.0);
    vec3 T1 = normalize(cross(N, vec3(0.0, 1.0, 0.0)) + 1e-4), T2 = cross(N, T1);
    N = normalize(N + (T1 * g.x + T2 * g.y) * mp.z);
  }
  // ---- skin: painterly mottling (grey-green <-> violet-grey), lividity pooled low, veins, bruises
  float nA = fbm(P * 7.0);
  if (isSkin) {
    float mott = smoothstep(0.35, 0.75, fbm(P * 4.5 + 7.0));
    base = mix(base, base * vec3(0.93, 0.9, 1.02), mott * 0.6);
    shade = mix(shade, shade * vec3(1.02, 0.92, 1.06), mott * 0.6);
    float liv = smoothstep(uLivorY, uLivorY - 0.45, vL.y) * (0.55 + 0.45 * nA);
    base = mix(base, uLivor, liv * 0.55);
    shade = mix(shade, uLivor * 0.55, liv * 0.45);
    float br = paintEdge(vCol.z, fbm(P * 13.0), 0.08);
    base = mix(base, uBruise, br * 0.75);
    shade = mix(shade, uBruise * 0.5, br * 0.6);
    // veins: thin dark branching lines (ridged, domain-warped noise), where the mask asks for them
    if (vCol.w > 0.01) {
      vec3 q = P * 26.0 + vec3(fbm(P * 9.0), fbm(P * 9.0 + 5.2), 0.0) * 1.6;
      float r1 = abs(vn3(q) - 0.5), r2 = abs(vn3(q * 2.1 + 3.3) - 0.5);
      float vw = max(fwidth(r1) * 1.2, 0.004);
      float vein = (1.0 - smoothstep(0.018, 0.018 + vw, r1)) * 0.8 + (1.0 - smoothstep(0.012, 0.012 + vw, r2)) * 0.45;
      vein *= vCol.w * smoothstep(0.3, 0.6, fbm(P * 3.0 + 1.0));
      base = mix(base, uVein, clamp(vein, 0.0, 1.0) * 0.7);
      shade = mix(shade, uVein * 0.6, clamp(vein, 0.0, 1.0) * 0.5);
    }
  }
  // PRIEST: living skin: a warm ruddy mottling over the dead's violet one
  if (isSkin && uAliveP.x > 0.5) {
    float m2 = smoothstep(0.3, 0.75, fbm(P * 5.3 + 3.0));
    base = mix(base, base * vec3(1.07, 0.95, 0.9), m2 * 0.6);
    shade = mix(shade, shade * vec3(1.08, 0.94, 0.9), m2 * 0.5);
  }
  // ---- cloth rips: skin through the hole (extra mask), a dark frayed rim
  float rip = 0.0;
  if (isCloth && vCol.w > 0.01) {
    float v = vCol.w * 1.3 - 0.15 + (fbm(P * 30.0) - 0.5) * 0.9;
    float w = max(fwidth(v), 0.02);
    rip = smoothstep(0.5 - w, 0.5 + w, v);
    float rim = smoothstep(0.35 - w, 0.35 + w, v) * (1.0 - rip);
    base = mix(base, uBaseP[0] * 0.92, rip); shade = mix(shade, uShadeP[0], rip);
    base = mix(base, base * 0.35, rim); shade = mix(shade, shade * 0.4, rim);
  }
  // ---- dirt (browns and darkens, blotchy)
  float dm = vCol.y * (0.55 + 0.45 * fbm(P * 11.0 + 3.0));
  base = mix(base, base * uDirt, clamp(dm, 0.0, 1.0));
  shade = mix(shade, shade * mix(vec3(1.0), uDirt, 0.6), clamp(dm, 0.0, 1.0));
  // ---- face paint (head materials): premultiplied sRGB paint over the base, only on front-facing rest normals
  float paintA = 0.0;
  if (uFaceOn > 0.5 && (mi == ${L.FACE} || mi == ${L.MOUTH} || mi == ${L.TEETH})) {
    vec2 uv = ((vL.xy - uHC.xy) - uFaceRect.xy) / uFaceRect.zw;
    float front = smoothstep(0.0, 0.3, vLN.z + (vL.z - uHC.z - 0.05) * 4.0) * step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    vec4 t = texture2D(uFaceTex, uv);
    paintA = t.a * front;
    if (paintA > 0.001) {
      vec3 pc = dec(clamp(t.rgb / max(t.a, 1e-4), 0.0, 1.0));
      vec3 ratio = shade / max(base, vec3(1e-3));
      base = mix(base, pc, paintA);
      shade = mix(shade, pc * clamp(ratio, 0.0, 1.2), paintA);
    }
  }
  // ---- the eyes: procedural on the eyeball (rest space): yellowed veined sclera, a milky clouded iris, a pinprick pupil
  if (mi == ${L.EYE}) {
    bool left = vL.x > uHC.x;
    vec4 E = left ? uEyeL : uEyeR;
    vec2 g = left ? uGaze.xy : uGaze.zw;
    vec3 q = normalize(vL - E.xyz);
    vec3 fw = normalize(vec3(g, 1.0));
    float ca = dot(q, fw);
    float aa = max(fwidth(ca) * 1.2, 0.0015);
    float iris = smoothstep(0.875 - aa, 0.875 + aa, ca);
    float ring = iris * (1.0 - smoothstep(0.885, 0.91, ca));
    float pupil = smoothstep(0.9968 - aa, 0.9968 + aa, ca);
    vec3 sc = uScleraCol;
    float vr = 1.0 - smoothstep(0.015, 0.04, abs(vn3(q * 16.0 + uSeed) - 0.5));
    sc = mix(sc, vec3(0.3, 0.02, 0.025), vr * 0.6 * (1.0 - smoothstep(0.55, 0.85, ca)));
    sc *= 0.75 + 0.25 * smoothstep(0.2, 0.7, ca);
    vec3 ic = mix(uIrisCol, uIrisCol * 0.35, ring);
    ic = mix(ic, uScleraCol * 1.08, uCloud * (0.45 + 0.55 * smoothstep(0.88, 0.99, ca)));
    vec3 ec = mix(sc, ic, iris);
    ec = mix(ec, vec3(0.012, 0.01, 0.012), pupil * 0.92);
    base = ec; shade = ec * 0.42; deepC = ec * 0.3;
  }
  // PRIEST: a living eye: a clear ivory sclera (pink at the corners: he has been crying), a warm fibrous iris with a dark
  // limbal ring, a real pupil; when he blinks the upper lid is painted down over the ball (skin, a dark lash edge)
  float lidPx = 0.0;
  if (mi == ${L.EYE} && uAliveP.x > 0.5) {
    bool leftE = vL.x > uHC.x;
    vec4 E = leftE ? uEyeL : uEyeR;
    vec2 g = leftE ? uGaze.xy : uGaze.zw;
    vec3 q = normalize(vL - E.xyz);
    vec3 fw = normalize(vec3(g, 1.0));
    float ca = dot(q, fw);
    float aa = max(fwidth(ca) * 1.2, 0.0015);
    float iris = smoothstep(0.866 - aa, 0.866 + aa, ca);
    float ring = iris * (1.0 - smoothstep(0.874, 0.9, ca));
    float pupil = smoothstep(uAliveP.y - aa, uAliveP.y + aa, ca);
    vec3 t1 = normalize(cross(vec3(0.0, 1.0, 0.0), fw)), t2 = cross(fw, t1);
    float ang = atan(dot(q, t2), dot(q, t1));
    float fib = 0.5 + 0.5 * sin(ang * 29.0 + vn3(q * 22.0 + uSeed) * 5.0);
    vec3 ic = uIrisCol * (0.72 + 0.4 * fib);
    ic = mix(ic, uIrisCol * vec3(1.55, 1.45, 1.1), smoothstep(0.93, 0.972, ca) * 0.55);
    ic = mix(ic, uIrisCol * 0.22, ring);
    vec3 sc = uScleraCol * (0.78 + 0.22 * smoothstep(0.15, 0.75, ca));
    float vr = 1.0 - smoothstep(0.012, 0.032, abs(vn3(q * 13.0 + uSeed) - 0.5));
    sc = mix(sc, vec3(0.62, 0.16, 0.14), vr * 0.4 * (1.0 - smoothstep(0.4, 0.8, ca)));
    sc = mix(sc, sc * vec3(1.0, 0.78, 0.76), (1.0 - smoothstep(0.25, 0.65, ca)) * 0.55);
    vec3 ec = mix(sc, ic, iris);
    ec = mix(ec, vec3(0.012, 0.009, 0.009), pupil);
    base = ec; shade = ec * 0.45; deepC = ec * 0.3;
    float edge = q.y - (mix(uAliveP.z, -0.46, uBlink) - abs(q.x) * 0.22);
    float lw = max(fwidth(edge) * 1.2, 0.006);
    float on = smoothstep(0.0, 0.04, uBlink);
    lidPx = smoothstep(-lw, lw, edge) * on;
    float lash = (1.0 - smoothstep(0.0, 0.045 + lw, abs(edge))) * on;
    base = mix(base, uBaseP[${L.FACE}] * vec3(1.18, 1.0, 0.96), lidPx);
    shade = mix(shade, uShadeP[${L.FACE}], lidPx); deepC = mix(deepC, uDeepP[${L.FACE}], lidPx);
    base = mix(base, vec3(0.09, 0.06, 0.055), lash * 0.7); shade = mix(shade, vec3(0.03, 0.02, 0.02), lash * 0.7);
  }
  // ---- blood (dried oxblood, wetter where thick)
  float bl = paintEdge(vCol.x, fbm(P * 24.0 + 1.7), 0.03);
  if (ty == 7) bl = 0.0;
  base = mix(base, uBlood * vec3(0.8, 0.85, 0.85), bl * 0.92);
  shade = mix(shade, uBloodShade, bl * 0.92);
  // ---- relief: a fine bump on skin (wrinkles, lumps) and cloth (weave), faded out before it is smaller than a pixel
  float bumpS = isSkin ? 0.0011 : (isCloth ? 0.0005 : 0.0);
  if (bumpS > 0.0) {
    vec3 Pb = P * (isSkin ? 46.0 : 140.0);
    float fade = 1.0 - smoothstep(0.35, 0.9, length(fwidth(Pb)));
    if (fade > 0.01) {
      float hgt = (isSkin ? vn3(Pb) * 0.65 + vn3(Pb * 2.3 + 4.1) * 0.35 : vn3(Pb)) * bumpS * fade;
      vec3 dpx = dFdx(vW), dpy = dFdy(vW);
      vec3 r1 = cross(dpy, N), r2 = cross(N, dpx);
      float det = dot(dpx, r1);
      vec3 grad = sign(det) * (dFdx(hgt) * r1 + dFdy(hgt) * r2);
      N = normalize(abs(det) * N - grad);
    }
  }
  // albedo for real light: the palette was tuned for a cel ramp (its "base" was the lit tone), so real light made them read as
  // pale mannequins. Dead skin darker and greyer (a little yellow-green), cloth dulled, and grime over everything
  vec3 albedo = base;
  float grime = 0.72 + 0.28 * fbm(P * 3.1 + 2.0);
  if (isSkin) albedo = mix(albedo, vec3(lumi(albedo)) * vec3(0.97, 1.0, 0.88), 0.35) * 0.6;
  else if (isCloth) albedo = mix(albedo, vec3(lumi(albedo)), 0.25) * 0.78;
  if (isSkin && uAliveP.x > 0.5) albedo = base * 0.7;                     // PRIEST: living skin keeps its warmth
  albedo *= (ty == 3) ? 0.85 : grime;
  // the shade palette tone tints the unlit side a little (cool, bruised), never a hard band
  vec3 coolT = clamp(shade / max(base, vec3(1e-3)), 0.0, 1.5);
  coolT = coolT / max(max(coolT.r, max(coolT.g, coolT.b)), 1e-3);
  float wrap = isSkin ? 0.35 : (isCloth ? 0.2 : 0.12);
  float ao = clamp(vAO, 0.0, 1.0);
  // material response: shininess and reflectance at normal incidence
  float shin = 10.0, F0 = 0.02;
  if (isSkin) { shin = 14.0; F0 = 0.026; }
  if (ty == 2) { shin = 30.0; F0 = 0.03; }
  if (ty == 3) { shin = 260.0; F0 = 0.025; }
  if (ty == 4 || ty == 7) { shin = 90.0; F0 = 0.025; }
  if (ty == 5) { shin = 28.0; F0 = 0.025; }
  if (ty == 6) { shin = 40.0; F0 = 0.035; }
  if (ty == 8) { shin = 70.0; F0 = 0.04; }
  if (bl > 0.5) { shin = max(shin, 70.0); F0 = max(F0, 0.025); }
  if (lidPx > 0.5) { shin = 14.0; F0 = 0.026; }                            // PRIEST (the blinking lid is skin)
  float nrm = (shin + 8.0) / (8.0 * PI);
  float NdV = clamp(dot(N, V), 0.0, 1.0);
  // key: the room's lights blended (lightrig.js)
  vec3 col = vec3(0.0);
  {
    vec3 Lk = uKeyDir;
    float ndl = dot(N, Lk);
    float d = clamp((ndl + wrap) / (1.0 + wrap), 0.0, 1.0);
    col += albedo * uKeyCol * d * mix(1.0, ao, 0.35);
    if (isSkin) col += albedo * uKeyCol * vec3(0.15, 0.06, 0.1) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));
    if (isSkin && uAliveP.x > 0.5) col += albedo * uKeyCol * vec3(0.12, 0.02, -0.07) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));   // PRIEST: living blood under the skin
    vec3 H = normalize(Lk + V);
    float fr = F0 + (1.0 - F0) * pow(1.0 - clamp(dot(V, H), 0.0, 1.0), 5.0);
    col += min(uKeyCol * nrm * pow(max(dot(N, H), 0.0), shin) * fr * max(ndl, 0.0), vec3(0.5));
    // PRIEST: the catchlight: the key mirrored in the wet cornea (a crisp spot, readable even in candle light)
    if (mi == ${L.EYE} && uAliveP.x > 0.5) col += (uKeyCol * 1.6 + vec3(0.05, 0.04, 0.035)) * uAliveP.w * smoothstep(0.9925, 0.9965, dot(N, H)) * (1.0 - lidPx);
  }
  // the flashlight, per pixel: the cone with its soft edge, the inverse-distance fall-off
  if (uTorchCol.r + uTorchCol.g + uTorchCol.b > 1e-4) {
    vec3 Lt = uTorchPos - vW;
    float dist = max(length(Lt), 1e-3);
    Lt /= dist;
    float cone = smoothstep(uTorchP.x, uTorchP.y, dot(-Lt, uTorchDir));
    float fall = 1.0 / max(pow(dist, uTorchP.w), 0.01);
    float cut = clamp(1.0 - pow(dist / uTorchP.z, 4.0), 0.0, 1.0);
    vec3 Et = uTorchCol * cone * fall * cut * cut / PI;
    Et /= 1.0 + lumi(Et) / 2.2;
    float ndl = dot(N, Lt);
    float d = clamp((ndl + wrap) / (1.0 + wrap), 0.0, 1.0);
    col += albedo * Et * d * mix(1.0, ao, 0.35);
    if (isSkin) col += albedo * Et * vec3(0.15, 0.06, 0.1) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));
    if (isSkin && uAliveP.x > 0.5) col += albedo * Et * vec3(0.12, 0.02, -0.07) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));      // PRIEST
    vec3 H = normalize(Lt + V);
    float fr = F0 + (1.0 - F0) * pow(1.0 - clamp(dot(V, H), 0.0, 1.0), 5.0);
    col += min(Et * nrm * pow(max(dot(N, H), 0.0), shin) * fr * max(ndl, 0.0), vec3(0.6));
    if (mi == ${L.EYE} && uAliveP.x > 0.5) col += Et * 1.4 * uAliveP.w * smoothstep(0.9925, 0.9965, dot(N, H)) * (1.0 - lidPx);   // PRIEST: the torch in his eyes
  }
  // the shade side: the rest of the room + the sky, a little more from above than from the floor, the cavities darkest
  vec3 amb = max(uAmbRGB, vec3(0.012, 0.014, 0.02)) * (0.8 + 0.2 * N.y);
  col += albedo * mix(vec3(1.0), coolT, 0.35) * amb * ao * ao;
  // a faint sheen at grazing angles (the room reflected in wet, waxy skin): keeps the silhouette in the dark
  col += (amb * 1.4 + uRimCol * uRimAmt * 0.04) * pow(1.0 - NdV, 4.0) * F0 * 12.0 * mp.w * ao;
  // PRIEST: the living eye area is lifted a little (the post's screen-space AO digs the sockets into the dead's dark rings)
  if (uAliveP.x > 0.5 && (mi == ${L.FACE} || lidPx > 0.5)) {
    vec2 dl = vec2(abs(vL.x - uHC.x) - abs(uEyeL.x - uHC.x) + 0.004, vL.y - uEyeL.y + 0.002) / vec2(0.023, 0.016);
    col *= 1.0 + 0.38 * (1.0 - smoothstep(0.5, 1.0, length(dl))) * step(uHC.z + 0.035, vL.z);
  }
  col = min(col, vec3(64.0));
  if (!gl_FrontFacing) col *= 0.5;
  if (uSil > 0.5) col = vec3(0.0);
  gl_FragColor = vec4(col * uExposure, 1.0);
  #include <fog_fragment>
}
`;
function be(e) {
  const o = String(e).replace("#", ""),
    n = parseInt(o, 16),
    c = (t) => (
      (t /= 255),
      t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)
    );
  return [c((n >> 16) & 255), c((n >> 8) & 255), c(n & 255)];
}
function ro(e, o) {
  const n = new Float32Array(He * 3),
    c = new Float32Array(He * 3),
    t = new Float32Array(He * 3),
    s = new Float32Array(He * 4),
    i = new Float32Array(He * 4),
    r = new Float32Array(He * 3),
    l = new Float32Array(He);
  for (const [u, f] of Object.entries(e.pattern || {}))
    i.set([f[0], f[1], 0, 0], +u * 4);
  for (let u = 0; u < He; u++) {
    const f = e.palette[u] || e.palette[L.SKIN];
    (n.set(be(f.base), u * 3),
      c.set(be(f.shade), u * 3),
      t.set(be(f.deep ?? f.shade), u * 3),
      r.set(be(f.line ?? "#1a1620"), u * 3));
    const d = so[f.type] ?? 1,
      v = f.spec ?? (d === 6 ? 0.35 : d === 5 ? 0.25 : d === 3 ? 1.2 : 0),
      C = f.fold ?? (d === 1 ? 0.3 : 0);
    (s.set([d, v, C, f.rim ?? 1], u * 4),
      (l[u] =
        f.lineW ?? (d === 3 || d === 4 || d === 5 ? 0 : d === 2 ? 0.8 : 1)));
  }
  const a = e.shade || {};
  return {
    uBaseP: { value: n },
    uShadeP: { value: c },
    uDeepP: { value: t },
    uMatP: { value: s },
    uMatQ: { value: i },
    uLineP: { value: r },
    uLineW: { value: l },
    uBlood: { value: new H0(...be(a.blood ?? "#4b0e12")) },
    uBloodShade: { value: new H0(...be(a.bloodShade ?? "#1f0508")) },
    uDirt: { value: new H0(...be(a.dirt ?? "#b5a48d")) },
    uBruise: { value: new H0(...be(a.bruise ?? "#6b5578")) },
    uVein: { value: new H0(...be(a.vein ?? "#3e3a55")) },
    uLivor: { value: new H0(...be(a.livor ?? "#6a5a78")) },
    uLivorY: { value: a.livorY ?? 0.5 },
    uFaceTex: { value: o },
    uFaceRect: { value: new Fe(...e.head.rect) },
    uHC: { value: new H0(...e.HC) },
    uFaceOn: { value: o ? 1 : 0 },
    uEyeL: { value: new Fe(...e.head.eyeC.L, e.head.eyeC.r) },
    uEyeR: { value: new Fe(...e.head.eyeC.R, e.head.eyeC.r) },
    uGaze: { value: new Fe(...(e.eyes?.gaze ?? [0.05, 0.02, -0.06, -0.08])) },
    uIrisCol: { value: new H0(...be(e.eyes?.iris ?? "#6f7f7a")) },
    uScleraCol: { value: new H0(...be(e.eyes?.sclera ?? "#c9c2a4")) },
    uCloud: { value: e.eyes?.cloud ?? 0.65 },
    uAliveP: {
      value: new Fe(
        e.alive ? 1 : 0,
        e.alive?.pupil ?? 0.9968,
        e.alive?.lid ?? 0.3,
        e.alive?.catch ?? 0,
      ),
    },
  };
}
function co() {
  return {
    uKeyDir: { value: new H0(0.3, 0.8, 0.5).normalize() },
    uKeyCol: { value: new ze(0.6, 0.6, 0.6) },
    uRimDir: { value: new H0(1, 0.2, -0.3).normalize() },
    uRimCol: { value: new ze(0.4, 0.5, 0.9) },
    uRimAmt: { value: 0.35 },
    uAmbCol: { value: new ze(0.2, 0.3, 0.6) },
    uAmb: { value: 0.4 },
    uAmbGain: { value: new ze(1, 1, 1) },
    uAmbRGB: { value: new ze(0.02, 0.025, 0.035) },
    uTorchPos: { value: new H0() },
    uTorchDir: { value: new H0(0, 0, -1) },
    uTorchCol: { value: new ze(0, 0, 0) },
    uTorchP: { value: new Fe(0.9, 0.97, 30, 1) },
    uExposure: { value: 1 },
    uPx: { value: 1.6 },
    uPxToView: { value: 0.001 },
    uW: { value: 1 },
    uSeed: { value: 0 },
    uSil: { value: 0 },
    uBlink: { value: 0 },
  };
}
const lo = { NMAT: String(He) },
  ho = () => h1.clone(d1.fog);
function fo(e, o) {
  const n = new l1({
    defines: lo,
    uniforms: { ...ho(), ...e, ...o },
    vertexShader: ao,
    fragmentShader: io,
    fog: !0,
    clipping: !0,
  });
  return ((n.name = "zombie_body"), n);
}
const tt = Math.PI * 2;
function ie(e, o, n) {
  const c = o.length;
  if (c < 2) return;
  const t = [],
    s = [];
  for (let i = 0; i < c; i++) {
    const r = o[Math.max(0, i - 1)],
      l = o[Math.min(c - 1, i + 1)];
    let a = l[0] - r[0],
      u = l[1] - r[1];
    const f = Math.hypot(a, u) || 1;
    ((a /= f), (u /= f));
    const d = (typeof n == "function" ? n(i / (c - 1)) : n) * 0.5;
    (t.push([o[i][0] - u * d, o[i][1] + a * d]),
      s.push([o[i][0] + u * d, o[i][1] - a * d]));
  }
  (e.beginPath(), e.moveTo(t[0][0], t[0][1]));
  for (let i = 1; i < c; i++) e.lineTo(t[i][0], t[i][1]);
  for (let i = c - 1; i >= 0; i--) e.lineTo(s[i][0], s[i][1]);
  (e.closePath(), e.fill());
}
const Ie = (e, o, n, c, t = 16) => {
  const s = [];
  for (let i = 0; i <= t; i++) {
    const r = i / t,
      l = 1 - r;
    s.push([
      l * l * l * e[0] +
        3 * l * l * r * o[0] +
        3 * l * r * r * n[0] +
        r * r * r * c[0],
      l * l * l * e[1] +
        3 * l * l * r * o[1] +
        3 * l * r * r * n[1] +
        r * r * r * c[1],
    ]);
  }
  return s;
};
function we(e, o, n, c, t, s, i, r = 0, l = 0) {
  (e.save(), e.translate(o, n), e.rotate(r), e.scale(1, t / c));
  const a = e.createRadialGradient(0, 0, 0, 0, 0, c);
  (a.addColorStop(0, `rgba(${s},${i})`),
    a.addColorStop(Math.max(0.01, l), `rgba(${s},${i})`),
    a.addColorStop(1, `rgba(${s},0)`),
    (e.fillStyle = a),
    e.beginPath(),
    e.arc(0, 0, c, 0, tt),
    e.fill(),
    e.restore());
}
function pt(e, o, n, c, t, s, i, r, l, a = 2) {
  const u = [[n, c]];
  let f = n,
    d = c,
    v = t;
  const C = Math.max(4, Math.round(s / 1.6));
  for (let p = 0; p < C; p++)
    ((v += (o() - 0.5) * 0.7),
      (f += (Math.cos(v) * s) / C),
      (d += (Math.sin(v) * s) / C),
      u.push([f, d]),
      a > 0 &&
        p > 1 &&
        o() < 0.22 &&
        pt(
          e,
          o,
          f,
          d,
          v + (o() < 0.5 ? -1 : 1) * (0.5 + o() * 0.6),
          s * (0.35 + o() * 0.3),
          i * 0.6,
          r,
          l * 0.85,
          a - 1,
        ));
  ((e.fillStyle = `rgba(${r},${l})`), ie(e, u, (p) => i * (1 - p * 0.7)));
}
function Lt(e, o, n, c, t, s, i, r) {
  e.fillStyle = `rgba(${i},${r})`;
  const l = 18;
  e.beginPath();
  for (let a = 0; a <= l; a++) {
    const u = a / l,
      f = n - t / 2 + t * u,
      d = s * (0.25 + 0.75 * Math.pow(o(), 1.6)) * Math.sin(Math.PI * u) ** 0.4;
    a === 0 ? e.moveTo(f, c + 1) : e.lineTo(f, c - d);
  }
  e.lineTo(n + t / 2, c + 1.5);
  for (let a = l; a >= 0; a--)
    e.lineTo(n - t / 2 + (t * a) / l, c + 1.5 + o() * 1.2);
  (e.closePath(), e.fill());
  for (let a = 0; a < 4; a++) {
    const u = n + (o() - 0.5) * t * 0.8,
      f = c - s * (0.5 + o() * 0.6);
    (e.beginPath(),
      e.ellipse(u, f, 0.9 + o() * 0.8, 1.3 + o(), 0, 0, tt),
      e.fill(),
      ie(
        e,
        [
          [u, f],
          [u + (o() - 0.5) * 0.6, c - 1],
        ],
        0.9,
      ));
  }
}
function Zt(e, o, n, c, t, s, i, r) {
  e.fillStyle = `rgba(${i},${r})`;
  for (let l = 0; l < s; l++) {
    const a = o() * tt,
      u = t * Math.sqrt(o()),
      f = 0.25 + o() * o() * 1.8;
    (e.beginPath(),
      e.ellipse(
        n + Math.cos(a) * u,
        c + Math.sin(a) * u,
        f,
        f * (0.7 + o() * 0.6),
        o() * 3,
        0,
        tt,
      ),
      e.fill());
  }
}
function mo(e, o) {
  const [n, c, t, s] = e.head.rect,
    i = 1024,
    r = Math.round((i * s) / t),
    l = Object.assign(document.createElement("canvas"), {
      width: i,
      height: r,
    }),
    a = l.getContext("2d"),
    u = i / (t * 1e3);
  (a.setTransform(u, 0, 0, -u, -n * 1e3 * u, (c + s) * 1e3 * u),
    a.clearRect(n * 1e3, c * 1e3, t * 1e3, s * 1e3));
  const f = e.head.features,
    d = e.face || {},
    v = ot(d.seed ?? 7),
    C = [
      [f.eyeL[0], f.eyeL[1], 1],
      [f.eyeR[0], f.eyeR[1], -1],
    ],
    p = f.mouthY,
    F = f.mouthW,
    J = d.shadow ?? "46,26,44";
  for (const [y, E, c0] of C)
    (we(a, c0 * 58, 18, 22, 30, J, 0.28 * (d.gaunt ?? 1)),
      we(a, c0 * 44, p + 4, 16, 24, J, 0.32 * (d.gaunt ?? 1)));
  for (const [y, E, c0] of C) {
    const u0 = c0 > 0 ? (d.socketL ?? 1) : (d.socketR ?? 1);
    (we(a, y, E - 2, 22, 18, J, 0.55 * u0, 0, 0.2),
      we(
        a,
        y + c0 * 3,
        E - 9,
        17,
        9,
        d.bags ?? "60,30,48",
        0.6 * u0,
        c0 * -0.15,
        0.25,
      ),
      we(a, y, E + 1, 15, 11, "20,10,16", 0.7 * u0, 0, 0.35),
      (a.fillStyle = `rgba(${d.lidRed ?? "120,32,40"},${0.85 * u0})`),
      ie(
        a,
        Ie(
          [y - c0 * 12, E - 5],
          [y - c0 * 5, E - 10.5],
          [y + c0 * 6, E - 10.5],
          [y + c0 * 13, E - 6.5],
        ).map((q) => [q[0], q[1]]),
        (q) => Math.sin(q * Math.PI) * 2.6 + 0.3,
      ),
      (a.fillStyle = `rgba(20,12,16,${0.8 * u0})`),
      ie(
        a,
        Ie(
          [y - c0 * 13, E + 1],
          [y - c0 * 6, E + 9],
          [y + c0 * 6, E + 9],
          [y + c0 * 14, E + 1],
        ),
        (q) => Math.sin(q * Math.PI) * 1.4 + 0.2,
      ),
      (a.fillStyle = `rgba(${J},${0.6 * u0})`),
      ie(
        a,
        Ie(
          [y - c0 * 12, E + 7],
          [y - c0 * 5, E + 15],
          [y + c0 * 7, E + 15],
          [y + c0 * 15, E + 6],
        ),
        (q) => Math.sin(q * Math.PI) * 1,
      ));
  }
  if (d.brows !== !1) {
    const y = d.browCol ?? "34,26,24";
    for (const [E, c0, u0] of C) {
      const q = u0 > 0 ? (d.browDropL ?? 0) : (d.browDropR ?? 0),
        $ = Ie(
          [E - u0 * 15, c0 + 15 - q],
          [E - u0 * 6, c0 + 19 - q * 0.5],
          [E + u0 * 7, c0 + 19],
          [E + u0 * 18, c0 + 13],
        );
      ((a.fillStyle = `rgba(${y},${d.browA ?? 0.75})`),
        ie(
          a,
          $,
          (x) => (x < 0.2 ? 1.5 + x * 8 : 3.1 * (1 - x) + 0.4) * (d.browW ?? 1),
        ),
        (a.fillStyle = `rgba(${y},0.5)`));
      for (let x = 0; x < 14; x++) {
        const e0 = v(),
          H = $[Math.floor(e0 * ($.length - 1))];
        ie(
          a,
          [
            [H[0], H[1] - 1],
            [H[0] + u0 * (1.5 + v() * 2), H[1] + 1.2 + v()],
          ],
          0.35,
        );
      }
    }
  }
  a.fillStyle = `rgba(${J},${0.45 * (d.creases ?? 1)})`;
  for (let y = 0; y < 3; y++) {
    const E = 42 + y * 7 + (v() - 0.5) * 2;
    ie(
      a,
      Ie([-26, E - 1], [-10, E + 1.5], [10, E + 1.5], [26, E - 1.5]),
      (c0) => Math.sin(c0 * Math.PI) * 0.9,
    );
  }
  for (const y of [1, -1])
    ie(
      a,
      Ie(
        [y * 13, f.noseTip - 2],
        [y * 20, p + 4],
        [y * 23, p - 4],
        [y * 24, p - 16],
      ),
      (E) => Math.sin(E * Math.PI) * 1.6 * (d.creases ?? 1),
    );
  we(a, 0, f.noseTip - 8, 11, 4, "30,14,20", 0.6);
  for (const y of [1, -1])
    we(a, y * 6, f.noseTip - 6.5, 2.8, 1.8, "12,4,6", 0.9, 0, 0.4);
  d.noseBlood &&
    Lt(a, v, -4, f.noseTip - 7, 7, 10, d.blood ?? "70,10,14", 0.85);
  const n0 = d.veinCol ?? "52,40,76";
  for (let y = 0; y < (d.veins ?? 6); y++) {
    const E = y % 2 ? 1 : -1,
      c0 = E * (40 + v() * 20),
      u0 = 10 + v() * 30;
    pt(
      a,
      v,
      c0,
      u0,
      (E > 0 ? Math.PI : 0) + (v() - 0.5) * 1.6,
      18 + v() * 16,
      1.2,
      n0,
      0.55,
    );
  }
  for (const y of [1, -1])
    pt(a, v, y * 30, p - 6, -Math.PI / 2 + y * 0.4, 20, 1, n0, 0.45);
  for (const y of d.bruises || [])
    (we(a, y[0], y[1], y[2], y[3], "88,52,96", 0.55, y[4] ?? 0, 0.2),
      we(
        a,
        y[0] + y[2] * 0.3,
        y[1] - y[3] * 0.2,
        y[2] * 1.3,
        y[3] * 1.2,
        "120,120,60",
        0.25,
        0,
        0.1,
      ));
  if (d.stubble) {
    a.fillStyle = `rgba(${d.stubbleCol ?? "40,34,34"},0.5)`;
    for (let y = 0; y < 2600; y++) {
      const E = (v() - 0.5) * 100,
        c0 = p + 12 - v() * 60;
      Math.hypot(E / 50, (c0 - p + 5) / 40) > 1 ||
        (Math.abs(E) < F + 3 && Math.abs(c0 - p) < 7) ||
        (c0 > f.noseTip - 5 && Math.abs(E) < 16) ||
        (a.beginPath(), a.arc(E, c0, 0.28 + v() * 0.25, 0, tt), a.fill());
    }
  }
  const _ = d.lipCol ?? "62,30,44";
  ((a.fillStyle = `rgba(${_},0.92)`),
    ie(
      a,
      Ie(
        [-F - 2, p + 1],
        [-F * 0.4, p + 7.5],
        [F * 0.4, p + 7.5],
        [F + 2, p + 1],
      ),
      (y) => Math.sin(y * Math.PI) * 5 + 1,
    ),
    ie(
      a,
      Ie([-F - 1, p - 1], [-F * 0.4, p - 9], [F * 0.4, p - 9], [F + 1, p - 1]),
      (y) => Math.sin(y * Math.PI) * 6 + 1,
    ),
    (a.fillStyle = "rgba(20,6,10,0.8)"));
  for (let y = 0; y < 12; y++) {
    const E = (v() - 0.5) * F * 1.7,
      c0 = v() < 0.5,
      u0 = c0 ? p + 4 + v() * 3 : p - 5 - v() * 4;
    ie(
      a,
      [
        [E, u0],
        [E + (v() - 0.5) * 1.5, u0 + (c0 ? 2.5 : -3)],
      ],
      0.45,
    );
  }
  for (const y of d.tornCorner || []) {
    const E = y;
    ((a.fillStyle = "rgba(96,14,22,0.95)"),
      a.beginPath(),
      a.moveTo(E * (F - 1), p + 2),
      a.lineTo(E * (F + 12), p + 5 + v() * 2),
      a.lineTo(E * (F + 14), p - 1),
      a.lineTo(E * (F + 9), p - 5),
      a.lineTo(E * (F - 1), p - 3),
      a.closePath(),
      a.fill(),
      (a.fillStyle = "rgba(40,6,10,0.9)"),
      ie(
        a,
        [
          [E * F, p - 0.5],
          [E * (F + 12), p + 1.5],
        ],
        1.4,
      ),
      (a.fillStyle = "rgba(180,160,120,0.9)"));
    for (let c0 = 0; c0 < 3; c0++) {
      const u0 = E * (F + 2 + c0 * 3);
      a.fillRect(Math.min(u0, u0 + E * 2), p - 0.5, 2, 2.5);
    }
  }
  const G = d.blood ?? "70,10,14";
  for (const y of d.mouthBlood || [[0, 1]]) {
    const [E, c0] = y;
    Lt(a, v, E, p - 6, F * 1.4 * c0, (f.mouthY - f.chinY + 20) * c0, G, 0.9);
  }
  (Zt(a, v, 0, p - 10, 30, 40 * (d.spatter ?? 1), G, 0.8),
    we(a, 0, p - 2, F + 8, 9, G, 0.35));
  for (const y of d.wounds || []) {
    const [E, c0, u0, q] = y;
    (we(a, E, c0, u0 * 2.2, u0 * 1.6, G, 0.7, q),
      (a.fillStyle = "rgba(110,16,26,1)"),
      a.beginPath());
    for (let $ = 0; $ <= 14; $++) {
      const x = ($ / 14) * tt,
        e0 = u0 * (0.75 + v() * 0.45),
        H = E + Math.cos(x) * e0 * 1.4,
        z = c0 + Math.sin(x) * e0 * 0.7;
      $ ? a.lineTo(H, z) : a.moveTo(H, z);
    }
    (a.closePath(),
      a.fill(),
      (a.fillStyle = "rgba(40,4,8,0.95)"),
      ie(
        a,
        [
          [E - u0 * 1.1, c0],
          [E + u0 * 1.1, c0 + (v() - 0.5)],
        ],
        u0 * 0.5,
      ),
      (a.fillStyle = "rgba(200,150,140,0.5)"),
      ie(
        a,
        [
          [E - u0 * 0.9, c0 + u0 * 0.35],
          [E + u0 * 0.8, c0 + u0 * 0.4],
        ],
        0.6,
      ));
  }
  return (
    d.extra &&
      d.extra(a, {
        R: v,
        blob: we,
        vstroke: ie,
        bez: Ie,
        vein: pt,
        bloodRun: Lt,
        spatter: Zt,
        F: f,
      }),
    l
  );
}
const We = (e) => (e > 0 ? "L" : "R");
function uo() {
  const e = {
      hips: [0, 1.03, 0],
      spine: [0, 1.17, -0.012],
      chest: [0, 1.34, -0.02],
      neck: [0, 1.6, -0.035],
      head: [0, 1.745, -0.022],
      jaw: [0, 1.768, -0.004],
      headTop: [0, 1.92, -0.01],
      chin: [0, 1.678, 0.068],
      shoulderL: [0.03, 1.555, -0.028],
      upperArmL: [0.195, 1.535, -0.035],
      shoulderR: [-0.03, 1.555, -0.028],
      upperArmR: [-0.195, 1.535, -0.035],
      thighL: [0.095, 0.99, 0],
      shinL: [0.1, 0.53, 0.015],
      footL: [0.105, 0.085, -0.02],
      thighR: [-0.095, 0.99, 0],
      shinR: [-0.1, 0.53, 0.015],
      footR: [-0.105, 0.085, -0.02],
      toeL: [0.11, 0.018, 0.2],
      toeR: [-0.11, 0.018, 0.2],
      heelL: [0.105, 0.02, -0.075],
      heelR: [-0.105, 0.02, -0.075],
    },
    o = 0.36,
    n = 0.3,
    c = 0.2;
  for (const A of [1, -1]) {
    const w = z0(A),
      Y = e["upperArm" + We(A)];
    ((e["foreArm" + We(A)] = G0(Y, w, o)),
      (e["hand" + We(A)] = G0(Y, w, o + n)),
      (e["handTip" + We(A)] = G0(Y, w, o + n + c * 0.8)));
  }
  const t = [0, 1.805, 0],
    s = rt({
      HC: t,
      seed: 11,
      C7: e.neck,
      cran: { c: [0, 0.018, -0.012], r: [0.073, 0.1, 0.1] },
      lowerFace: { c: [0, -0.05, 0.012], r: [0.06, 0.08, 0.078] },
      temple: [0.07, 0.022, 0.052],
      chin: [-0.127, 0.066],
      chinW: 0.017,
      jawSlope: 0.6,
      jawUnder: 0.5,
      faceZ: 0.095,
      cheek: [0.05, -0.022, 0.06],
      hollow: [0.049, -0.068, 0.05],
      hollowK: 0.022,
      brow: [0.041, 0.027, 0.082, 0.0118],
      eyeX: 0.032,
      eyeY: 0,
      eyeZ: 0.066,
      eyeR: 0.0118,
      socket: [0.021, 0.016, 0.021],
      lid: 0.02,
      nose: {
        bridge: [0.014, 0.092],
        r0: 0.0062,
        tip: [-0.037, 0.117],
        r1: 0.0095,
        wing: 0.0125,
        tx: -0.002,
      },
      mouthY: -0.075,
      mouthW: 0.025,
      mouthZ: 0.091,
      mouthGap: 0.006,
      jawHinge: [-0.038, -0.012],
      jawSideX: 0.042,
      skullBase: -0.058,
      ear: [0.073, -0.014, -0.008, 0.033, 0.021],
      neckTop: [-0.07, -0.03],
      neckR: [0.041, 0.054],
      cordR: 0.0105,
      adam: [-0.148, 0.036],
      hair: {
        front: 0.066,
        side: 0.024,
        nape: -0.05,
        th: 0.0055,
        clump: 0.003,
        recede: 0.42,
        strands: [
          {
            pts: [
              [-0.01, 0.1, 0.06],
              [-0.022, 0.078, 0.086],
              [-0.03, 0.05, 0.1],
              [-0.034, 0.028, 0.102],
            ],
            r: 0.0042,
          },
          {
            pts: [
              [0.004, 0.102, 0.058],
              [-0.004, 0.082, 0.086],
              [-0.01, 0.058, 0.099],
              [-0.008, 0.04, 0.101],
            ],
            r: 0.0036,
          },
          {
            pts: [
              [0.03, 0.098, 0.05],
              [0.042, 0.076, 0.075],
              [0.05, 0.052, 0.084],
            ],
            r: 0.0034,
          },
        ],
      },
      missing: [3, -6],
      broken: [5, -2],
      teethScale: 1.05,
      rect: [-0.1, -0.165, 0.2, 0.27],
    }),
    i = (A, w, Y) => {
      let b = b0(A, w, Y, 0, 1.39, -0.016, 0.134, 0.17, 0.096);
      ((b = B(b, b0(A, w, Y, 0, 1.17, -0.004, 0.117, 0.15, 0.085), 0.06)),
        (b = B(b, b0(A, w, Y, 0, 1.03, -0.006, 0.148, 0.1, 0.098), 0.05)),
        (b = B(
          b,
          K0(A, w, Y, -0.168, 1.533, -0.036, 0.168, 1.533, -0.036, 0.048),
          0.07,
        )));
      for (const g of [-1, 1])
        ((b = B(
          b,
          K0(A, w, Y, g * 0.03, 1.6, -0.046, g * 0.16, 1.552, -0.04, 0.04),
          0.05,
        )),
          (b = B(
            b,
            b0(A, w, Y, g * 0.075, 1.45, -0.087, 0.058, 0.07, 0.024),
            0.03,
          )));
      return b;
    },
    r = z0(1),
    l = z0(-1),
    a = e.upperArmL,
    u = e.upperArmR,
    f = e.foreArmL,
    d = e.foreArmR,
    v = e.handL,
    C = e.handR,
    p = (A, w, Y) => {
      const b = i(A, w, Y);
      let g = b - 0.0095;
      const N = Math.atan2(A, Y),
        V = h(1.22, 1.04, w) * h(0.99, 1.02, w);
      ((g -=
        0.0045 * V * (0.5 + 0.5 * Math.sin(N * 9 + Math.sin(w * 31) * 1.3))),
        (g -=
          0.0022 *
          h(1.5, 1.3, w) *
          h(1.02, 1.2, w) *
          Math.pow(0.5 + 0.5 * Math.sin(N * 13 + w * 7), 3)));
      let O = _0(
        A,
        w,
        Y,
        a[0] - 0.01,
        a[1] + 0.004,
        a[2],
        0.056,
        f[0],
        f[1],
        f[2],
        0.047,
      );
      O = B(
        O,
        _0(
          A,
          w,
          Y,
          f[0],
          f[1],
          f[2],
          0.047,
          v[0] - r[0] * 0.02,
          v[1] - r[1] * 0.02,
          v[2],
          0.043,
        ),
        0.012,
      );
      {
        const i0 = (A - a[0]) * r[0] + (w - a[1]) * r[1],
          m0 =
            Math.pow(0.5 + 0.5 * Math.sin(i0 * 95), 2) *
            h(0.22, 0.3, i0) *
            h(0.47, 0.38, i0);
        ((O -= 0.004 * m0), (O = f0(O, i0 - (0.36 + 0.3 - 0.012), 0.004)));
      }
      g = B(g, O, 0.035);
      {
        let i0 = _0(
          A,
          w,
          Y,
          u[0] + 0.012,
          u[1] + 0.004,
          u[2],
          0.057,
          u[0] + l[0] * 0.14,
          u[1] + l[1] * 0.14,
          u[2],
          0.052,
        );
        const m0 = (A - u[0]) * l[0] + (w - u[1]) * l[1],
          S = Math.atan2(Y - u[2], (A - u[0]) * l[1] - (w - u[1]) * l[0]),
          P =
            0.085 +
            0.018 * Math.sin(S * 5 + 1.3) +
            0.012 * Math.sin(S * 11) +
            0.02 * (me(S * 2, 0, 3) - 0.5);
        ((i0 = f0(i0, m0 - P, 0.003)), (g = B(g, i0, 0.03)));
      }
      ((g = f0(g, -K0(A, w, Y, 0, 1.54, -0.022, 0, 1.8, -0.03, 0.056), 0.008)),
        (g = f0(
          g,
          Math.min(0.012 + (w - 1.46) * 0.42 - Math.abs(A + 0.004), Y - 0.02),
          0.006,
        )));
      {
        const i0 = Math.hypot(A, (Y + 0.022) * 1.08) - 0.066,
          m0 = 1.588 - 0.026 * Math.max(0, (Y + 0.02) / 0.08);
        let S = W0(i0, w, 0, 0, m0, 0, 0.0045, 0.019, 1, 0.004);
        ((S = f0(S, Math.min(0.03 - Math.abs(A), Y - 0.02), 0.004)),
          (g = B(g, S, 0.006)));
      }
      {
        const m0 = W0(A, w, Y, -0.004, 1.26, 0.09, 0.011, 0.26, 0.03, 0.004);
        g = B(g, f0(m0, -(b - 0.0125), 0.003), 0.002);
        for (let S = 0; S < 5; S++) {
          const P = 1.08 + S * 0.085;
          P > 1.46 ||
            Math.abs(w - P) > 0.012 ||
            (g = B(
              g,
              f0(se(A, w, Y, -0.004, P, 0 + 0.1, 0.0075), -(b - 0.0145), 0.002),
              0.002,
            ));
        }
      }
      return ((g = f0(g, 0.985 - w, 0.01)), g);
    },
    F = [
      [0.003, 1.505, 0.078],
      [0.009, 1.43, 0.093],
      [0.02, 1.33, 0.097],
      [0.034, 1.23, 0.092],
      [0.044, 1.14, 0.1],
    ],
    J = [0.017, 0.023, 0.03, 0.036, 0.038],
    n0 = (A, w, Y) => {
      let b = 1e9;
      for (let g = 0; g < F.length - 1; g++) {
        const N = F[g],
          V = F[g + 1],
          O = V[0] - N[0],
          i0 = V[1] - N[1],
          m0 = V[2] - N[2],
          S = Math.hypot(O, i0, m0),
          P = I0(
            ((A - N[0]) * O + (w - N[1]) * i0 + (Y - N[2]) * m0) / (S * S),
          ),
          s0 = N[0] + O * P;
        N[1] + i0 * P;
        const o0 = N[2] + m0 * P,
          g0 = J[g] + (J[g + 1] - J[g]) * P,
          w0 = A - s0,
          k0 = Y - o0,
          q0 = ((A - N[0]) * O + (w - N[1]) * i0 + (Y - N[2]) * m0) / S - P * S;
        b = Math.min(
          b,
          W0(
            w0,
            q0,
            k0,
            0,
            0,
            0,
            g0,
            5e-4 + (g === F.length - 2 ? 0 : 0.012),
            0.0035,
            0.003,
          ),
        );
      }
      return (
        (b = B(
          b,
          b0(A, w, Y, 0.003, 1.505, 0.076, 0.019, 0.022, 0.014),
          0.006,
        )),
        (b = f0(b, 1.1 - w + Math.abs(A - 0.046) * 1, 0.004)),
        b
      );
    },
    _ = (A, w, Y) => {
      const b = Math.hypot(A / 0.16, (Y + 0.004) / 0.112) - 1;
      return W0(b * 0.13, w, 0, 0, 1.08, 0, 0.0055, 0.018, 1, 0.003);
    },
    G = (A, w, Y) => {
      let b = b0(A, w, Y, 0, 1.035, -0.006, 0.157, 0.11, 0.108);
      b = B(b, W0(A, w, Y, 0, 1.075, -0.005, 0.148, 0.03, 0.098, 0.05), 0.02);
      for (const g of [-1, 1]) {
        const N = e["thigh" + We(g)],
          V = e["shin" + We(g)],
          O = e["foot" + We(g)];
        let i0 = _0(
          A,
          w,
          Y,
          N[0],
          N[1] - 0.02,
          N[2],
          0.088,
          V[0],
          V[1],
          V[2] + 0.004,
          0.064,
        );
        i0 = B(
          i0,
          _0(
            A,
            w,
            Y,
            V[0],
            V[1],
            V[2] + 0.004,
            0.064,
            O[0],
            0.05,
            O[2] + 0.01,
            0.058,
          ),
          0.03,
        );
        const m0 = h(V[1] + 0.09, V[1], w) * h(V[1] - 0.1, V[1], w);
        ((i0 -=
          0.004 * m0 * Math.pow(0.5 + 0.5 * Math.sin(w * 140 + A * 30), 2)),
          (i0 -=
            0.003 *
            h(0.25, 0.08, w) *
            Math.pow(
              0.5 + 0.5 * Math.sin(w * 120 + Math.atan2(A - O[0], Y) * 3),
              2,
            )),
          (b = B(b, i0, 0.05)));
      }
      return (
        (b = f0(b, w - 1.105, 0.008)),
        (b = f0(b, 0.058 - w, 0.004)),
        (b = Math.min(b, _(A, w, Y))),
        (b = B(
          b,
          W0(A, w, Y, 0, 1.08, 0.112, 0.022, 0.017, 0.006, 0.003),
          0.002,
        )),
        b
      );
    },
    y = G0(d, l, 0.13),
    E = [y[0] + 0, y[1] + 0, y[2] + 0.03],
    c0 = G0(u, l, 0.1),
    u0 = G0(u, l, 0.26),
    q = G0(d, l, 0.02),
    $ = G0(d, l, 0.12),
    x = (A, w, Y) => {
      let b = _0(
        A,
        w,
        Y,
        u[0] + 0.03,
        u[1] + 0.012,
        u[2],
        0.045,
        d[0],
        d[1],
        d[2],
        0.03,
      );
      return (
        (b = B(
          b,
          _0(A, w, Y, c0[0], c0[1], c0[2], 0.041, u0[0], u0[1], u0[2], 0.036),
          0.02,
        )),
        (b = B(
          b,
          _0(A, w, Y, d[0], d[1], d[2], 0.033, C[0], C[1], C[2], 0.022),
          0.012,
        )),
        (b = B(
          b,
          _0(A, w, Y, q[0], q[1], q[2], 0.037, $[0], $[1], $[2], 0.03),
          0.015,
        )),
        (b = B(
          b,
          se(A, w, Y, d[0] + 0.004, d[1] - 0.004, d[2] - 0.03, 0.017),
          0.008,
        )),
        (b = f0(b, -b0(A, w, Y, E[0], E[1], E[2], 0.022, 0.018, 0.012), 0.004)),
        b
      );
    },
    e0 = (A) =>
      nt({
        wrist: e["hand" + We(A)],
        dir: z0(A),
        side: A,
        palm: [0.094, 0.082, 0.026],
        fingers: [
          [0.1, 0.0079],
          [0.11, 0.0081],
          [0.102, 0.0077],
          [0.083, 0.0068],
        ],
        thumb: [0.07, 0.0093],
        curl: A > 0 ? [0.4, 0.75, 0.5] : [0.25, 0.55, 0.35],
        bony: 0.9,
        seed: A > 0 ? 3 : 4,
        spread: 0.1,
      }),
    H = e0(1),
    z = e0(-1),
    Z = gt({
      ankle: e.footL,
      x: e.footL[0],
      len: 0.3,
      width: 0.1,
      kind: "dress",
    }),
    p0 = It({
      ankle: e.footR,
      x: e.footR[0],
      len: 0.275,
      width: 0.094,
      toes: !1,
    }),
    j = [
      {
        name: "head",
        sdf: s.sdf,
        mat: s.mat,
        weights: s.weights,
        min: s.min,
        max: s.max,
        res: 0.0028,
      },
      {
        name: "hair",
        sdf: s.hair.sdf,
        mat: L.HAIR,
        weights: s.weights,
        min: s.hair.min,
        max: s.hair.max,
        res: 0.0038,
        aoK: 0.6,
      },
      {
        name: "neck",
        sdf: s.neck.sdf,
        mat: L.SKIN,
        weights: s.weights,
        min: s.neck.min,
        max: s.neck.max,
        res: 0.0045,
      },
      {
        name: "shirt",
        sdf: p,
        mat: L.CLOTH_A,
        res: 0.0072,
        sigma: 0.026,
        min: [-0.34, 0.97, -0.16],
        max: [0.66, 1.67, 0.15],
        bones: [
          "hips",
          "spine",
          "chest",
          "neck",
          "shoulderL",
          "upperArmL",
          "foreArmL",
          "shoulderR",
          "upperArmR",
        ],
      },
      {
        name: "chest",
        sdf: i,
        mat: L.SKIN,
        res: 0.005,
        min: [-0.09, 1.42, -0.02],
        max: [0.09, 1.64, 0.13],
        bones: ["chest", "neck", "spine"],
        sigma: 0.04,
      },
      {
        name: "tie",
        sdf: n0,
        mat: L.CLOTH_C,
        res: 0.0028,
        min: [-0.04, 1.08, 0.05],
        max: [0.1, 1.54, 0.125],
        bones: ["chest", "spine", "neck"],
        sigma: 0.05,
      },
      {
        name: "trousers",
        sdf: G,
        res: 0.0078,
        sigma: 0.024,
        mat: (A, w, Y) =>
          _(A, w, Y) < 0.0016 ||
          (Math.abs(A) < 0.03 && w > 1.055 && w < 1.1 && Y > 0.1)
            ? L.BELT
            : L.CLOTH_B,
        min: [-0.27, 0.04, -0.15],
        max: [0.27, 1.12, 0.14],
        bones: [
          "hips",
          "spine",
          "thighL",
          "shinL",
          "thighR",
          "shinR",
          "footL",
          "footR",
        ],
      },
      {
        name: "armR",
        sdf: x,
        res: 0.0048,
        sigma: 0.022,
        mat: (A, w, Y) =>
          b0(A, w, Y, E[0], E[1], E[2], 0.026, 0.022, 0.016) < 0.002
            ? L.WOUND
            : L.SKIN,
        min: [-0.66, 0.97, -0.1],
        max: [-0.12, 1.6, 0.06],
        bones: ["chest", "shoulderR", "upperArmR", "foreArmR", "handR"],
      },
      {
        name: "handL",
        sdf: H.sdf,
        mat: (A, w, Y) => (H.nailAt(A, w, Y) ? L.NAIL : L.SKIN),
        min: H.min,
        max: H.max,
        res: 0.0028,
        bones: ["handL", "foreArmL"],
        sigma: 0.015,
      },
      {
        name: "handR",
        sdf: z.sdf,
        mat: (A, w, Y) => (z.nailAt(A, w, Y) ? L.NAIL : L.SKIN),
        min: z.min,
        max: z.max,
        res: 0.0028,
        bones: ["handR", "foreArmR"],
        sigma: 0.015,
      },
      {
        name: "shoeL",
        sdf: Z.sdf,
        mat: (A, w, Y) => (w > 0.075 ? L.SOCK : L.SHOE),
        min: Z.min,
        max: Z.max,
        res: 0.004,
        bones: ["footL", "shinL"],
        sigma: 0.02,
      },
      {
        name: "sockR",
        sdf: p0.sdf,
        mat: L.SOCK,
        min: p0.min,
        max: p0.max,
        res: 0.004,
        bones: ["footR", "shinR"],
        sigma: 0.02,
      },
    ];
  return {
    kind: "lanky",
    height: 1.92,
    J: e,
    HC: t,
    head: s,
    parts: j,
    col: (A, w, Y, b, g) => {
      let N = 0,
        V = 0,
        O = 0,
        i0 = 0;
      const m0 = oe(A * 9, w * 9, Y * 9, 3);
      if (g === "shirt") {
        const S = -0.012 + (w - 1.5) * 0.05,
          P = 0.07 * h(1.2, 1.5, w) + 0.02;
        N = h(P, P * 0.4, Math.abs(A - S)) * h(1.2, 1.36, w) * h(0, 0.05, Y);
        const s0 =
          h(0.55, 0.8, me(A * 90, 3.1, 1.7)) *
          h(1.05, 1.3, w) *
          h(0.1, 0.05, Math.abs(A - S)) *
          h(0, 0.05, Y);
        ((N = Math.max(N, s0)),
          (N = Math.max(N, ue(A, w, Y, 30, 0.7) * 0.9)),
          A < -0.17 && (N = Math.max(N, 0.8 * h(1.45, 1.55, w))),
          (V = 0.25 + 0.5 * h(1.2, 1, w) + 0.3 * m0),
          (i0 = Math.max(
            h(0.62, 0.7, oe(A * 7 + 11, w * 5, Y * 7, 2)) *
              h(0.08, 0.12, A) *
              h(1.12, 1.18, w) *
              h(1.36, 1.3, w),
            h(0.03, 0.02, Math.hypot(A + 0.05, w - 1.28)) * h(-0.05, -0.08, Y),
          )));
      } else if (g === "trousers")
        ((V =
          0.25 +
          0.55 * h(0.35, 0.06, w) +
          0.5 * h(0.06, 0.03, Math.abs(w - 0.53)) * h(0, 0.05, Y) +
          0.2 * m0),
          (N = ue(A, w, Y, 26, 0.72) * h(0.9, 0.5, w) * 0.9));
      else if (g === "armR" || g === "handR" || g === "handL") {
        const S = Math.hypot(A - E[0], w - E[1], Y - E[2]);
        ((N =
          h(0.07, 0.025, S) +
          h(0.7, 0.85, oe(A * 16, w * 16, Y * 16, 2)) * 0.6),
          (N = Math.max(
            N,
            h(0.03, 0, Math.abs(Y - E[2] + 0.005)) *
              h(E[1] + 0.01, E[1] - 0.12, w) *
              h(E[1] - 0.26, E[1] - 0.12, w) *
              (g === "armR" ? 1 : 0),
          )),
          (O =
            h(0.45, 0.7, oe(A * 6, w * 6, Y * 6, 2)) * 0.8 +
            h(0.09, 0.03, S) * 0.6),
          (i0 = 0.7),
          (V = 0.3 + 0.4 * m0 + (g !== "armR" ? 0.3 : 0)),
          b === L.NAIL && (V = 0.8));
      } else if (g === "head" || g === "neck" || g === "chest") {
        ((i0 = 0.6), (O = 0.3 * h(0.5, 0.7, m0)));
        const S = Math.hypot(A - 0.035, w - 1.655, Y - 0.02);
        ((N =
          h(0.035, 0.015, S) +
          h(0.012, 0, Math.abs(A + 0.004)) *
            h(1.71, 1.6, w) *
            h(1.56, 1.6, w) *
            h(0.02, 0.05, Y) *
            0.9),
          (O = Math.max(O, h(0.05, 0.02, S))),
          (V = 0.2 * m0));
      } else
        g === "tie"
          ? ((N = h(0.5, 0.7, oe(A * 20, w * 20, Y * 20, 2)) * h(1.2, 1.4, w)),
            (V = 0.3))
          : g === "shoeL"
            ? (V = 0.4 + 0.4 * m0)
            : g === "sockR" &&
              ((V = 0.6 + 0.4 * h(0.05, 0, w) + 0.3 * m0),
              (N = 0.4 * h(0.6, 0.8, oe(A * 20, w * 20, Y * 20, 2))));
      return [I0(N), I0(V), I0(O), I0(i0)];
    },
    segA: { hips: [0, 0.94, -0.005] },
    rad: {
      hips: 0.12,
      spine: 0.11,
      chest: 0.12,
      neck: 0.045,
      head: 0.09,
      jaw: 0.04,
      shoulderL: 0.045,
      upperArmL: 0.046,
      foreArmL: 0.038,
      handL: 0.03,
      shoulderR: 0.045,
      upperArmR: 0.046,
      foreArmR: 0.038,
      handR: 0.03,
      thighL: 0.078,
      shinL: 0.058,
      footL: 0.035,
      thighR: 0.078,
      shinR: 0.058,
      footR: 0.035,
    },
    hit: [
      ["head", [0, 1.79, 0], [0, 1.83, -0.01], 0.105, "head"],
      ["chest", [0, 1.28, -0.01], [0, 1.52, -0.02], 0.15, "body"],
      ["spine", [0, 1.05, -0.005], [0, 1.25, -0.005], 0.14, "body"],
      ["neck", e.neck, [0, 1.72, -0.02], 0.055, "body"],
      ["upperArmL", e.upperArmL, e.foreArmL, 0.055, "body"],
      ["foreArmL", e.foreArmL, e.handL, 0.048, "body"],
      ["upperArmR", e.upperArmR, e.foreArmR, 0.045, "body"],
      ["foreArmR", e.foreArmR, e.handR, 0.04, "body"],
      ["handL", e.handL, e.handTipL, 0.045, "body"],
      ["handR", e.handR, e.handTipR, 0.045, "body"],
      ["thighL", e.thighL, e.shinL, 0.09, "legs"],
      ["shinL", e.shinL, e.footL, 0.068, "legs"],
      ["thighR", e.thighR, e.shinR, 0.09, "legs"],
      ["shinR", e.shinR, e.footR, 0.068, "legs"],
      ["footL", [0.105, 0.05, -0.04], [0.11, 0.04, 0.17], 0.05, "legs"],
      ["footR", [-0.105, 0.05, -0.04], [-0.11, 0.04, 0.16], 0.045, "legs"],
    ],
    palette: {
      [L.SKIN]: {
        base: "#878d7f",
        shade: "#4b4c5c",
        deep: "#2f2b39",
        line: "#1b1720",
        type: "skin",
      },
      [L.FACE]: {
        base: "#8b9284",
        shade: "#4e4f60",
        deep: "#312c3a",
        line: "#1b1720",
        type: "skin",
        lineW: 0.7,
      },
      [L.EYE]: {
        base: "#cdd2c3",
        shade: "#7f8483",
        deep: "#4a4c52",
        line: "#1b1720",
        type: "eye",
      },
      [L.MOUTH]: {
        base: "#1c0609",
        shade: "#090203",
        deep: "#050102",
        line: "#0f0406",
        type: "mouth",
      },
      [L.TEETH]: {
        base: "#c2b58f",
        shade: "#6e6653",
        deep: "#3a3429",
        line: "#241d17",
        type: "teeth",
      },
      [L.HAIR]: {
        base: "#3a312b",
        shade: "#171314",
        deep: "#0a0809",
        line: "#0a0809",
        type: "hair",
        lineW: 0.5,
      },
      [L.CLOTH_A]: {
        base: "#98927f",
        shade: "#54565f",
        deep: "#41404a",
        line: "#26232b",
        type: "cloth",
      },
      [L.CLOTH_B]: {
        base: "#3b3b41",
        shade: "#1c1c23",
        deep: "#101016",
        line: "#0c0b10",
        type: "cloth",
      },
      [L.CLOTH_C]: {
        base: "#6a1d26",
        shade: "#2f0c12",
        deep: "#1a0609",
        line: "#12050a",
        type: "cloth",
      },
      [L.SHOE]: {
        base: "#231f20",
        shade: "#0d0b0d",
        deep: "#060506",
        line: "#060506",
        type: "leather",
      },
      [L.NAIL]: {
        base: "#8a8470",
        shade: "#46423b",
        deep: "#2a2724",
        line: "#1b1720",
        type: "teeth",
      },
      [L.SOCK]: {
        base: "#4a4745",
        shade: "#232123",
        deep: "#141214",
        line: "#0f0d10",
        type: "cloth",
      },
      [L.BELT]: {
        base: "#2a201b",
        shade: "#110c0b",
        deep: "#080606",
        line: "#080606",
        type: "leather",
      },
      [L.WOUND]: {
        base: "#6e1219",
        shade: "#2d0509",
        deep: "#1a0305",
        line: "#12030a",
        type: "wound",
      },
    },
    eyes: {
      iris: "#77837f",
      sclera: "#c6bf9f",
      cloud: 0.7,
      gaze: [0.12, 0.06, -0.07, -0.1],
    },
    shade: { livorY: 0.55 },
    face: {
      seed: 11,
      gaunt: 1.3,
      browCol: "40,30,28",
      browW: 0.9,
      socketL: 1.15,
      socketR: 1,
      creases: 1,
      veins: 7,
      mouthBlood: [
        [0, 1.2],
        [8, 0.7],
      ],
      spatter: 1,
      lipCol: "58,28,42",
      bruises: [[-40, -22, 10, 8]],
    },
    style: {
      hunch: 15,
      chestHunch: 8,
      headRoll: 34,
      headPitch: 14,
      headYaw: -6,
      jaw: 0.3,
      shoulderDrop: 0.3,
      leanR: 6,
      dropArmR: 5,
      armSpread: 0.14,
      elbow: 0.25,
      dangle: 1.2,
      shamble: {
        v: 1,
        cadence: 2,
        duty: 0.6,
        lift: [0.075, 0.012],
        width: 0.1,
        crouch: 0.04,
        toeOff: 0.34,
        bob: 0.028,
        sway: 0.03,
        drag: "R",
        dip: 0.04,
        toeOut: 0.12,
        lean: 6,
      },
      run: {
        v: 3.2,
        cadence: 2.75,
        duty: 0.37,
        lift: [0.2, 0.12],
        width: 0.11,
        crouch: 0.12,
        bob: 0.05,
        sway: 0.03,
        lean: 30,
        dip: 0.05,
      },
      twitch: 0.25,
      sway: 1,
    },
  };
}
const ve = (e) => (e > 0 ? "L" : "R");
function po() {
  const e = {
      hips: [0, 0.97, 0.02],
      spine: [0, 1.1, 0.01],
      chest: [0, 1.28, -0.02],
      neck: [0, 1.5, -0.06],
      head: [0, 1.62, -0.035],
      jaw: [0, 1.648, -0.004],
      headTop: [0, 1.82, -0.02],
      chin: [0, 1.555, 0.085],
      shoulderL: [0.045, 1.46, -0.04],
      upperArmL: [0.245, 1.425, -0.05],
      shoulderR: [-0.045, 1.46, -0.04],
      upperArmR: [-0.245, 1.425, -0.05],
      thighL: [0.12, 0.93, 0.025],
      shinL: [0.128, 0.5, 0.03],
      footL: [0.135, 0.085, 0],
      thighR: [-0.12, 0.93, 0.025],
      shinR: [-0.128, 0.5, 0.03],
      footR: [-0.135, 0.085, 0],
      toeL: [0.145, 0.018, 0.215],
      toeR: [-0.145, 0.018, 0.215],
      heelL: [0.135, 0.02, -0.08],
      heelR: [-0.135, 0.02, -0.08],
    },
    o = 0.315,
    n = 0.275,
    c = 0.21;
  for (const b of [1, -1]) {
    const g = z0(b),
      N = e["upperArm" + ve(b)];
    ((e["foreArm" + ve(b)] = G0(N, g, o)),
      (e["hand" + ve(b)] = G0(N, g, o + n)),
      (e["handTip" + ve(b)] = G0(N, g, o + n + c * 0.75)));
  }
  const t = [0, 1.69, 0.01],
    s = [0.018, 0.122, 0.035],
    i = [0.058, 0.098, -0.03],
    r = rt({
      HC: t,
      seed: 23,
      C7: e.neck,
      cran: { c: [0, 0.022, -0.012], r: [0.084, 0.108, 0.104] },
      lowerFace: { c: [0, -0.048, 0.016], r: [0.075, 0.088, 0.084] },
      faceK: 0.055,
      cheekS: 0.8,
      cheekK: 2.2,
      jowlK: 0.045,
      chin: [-0.134, 0.084],
      chinW: 0.03,
      jawSlope: 0.36,
      jawUnder: 0.28,
      faceZ: 0.2,
      cheek: [0.054, -0.026, 0.07],
      jowl: [0.05, -0.09, 0.04, 0.026, 0.028, 0.028],
      brow: [0.046, 0.031, 0.094, 0.0165],
      eyeX: 0.034,
      eyeY: 0,
      eyeZ: 0.074,
      eyeR: 0.0112,
      socket: [0.018, 0.012, 0.019],
      lid: -0.12,
      nose: {
        bridge: [0.012, 0.102],
        r0: 0.0095,
        tip: [-0.042, 0.128],
        r1: 0.0145,
        wing: 0.0175,
        tx: 0.006,
      },
      mouthY: -0.081,
      mouthW: 0.029,
      mouthZ: 0.098,
      mouthGap: 0.004,
      jawHinge: [-0.042, -0.008],
      jawSideX: 0.05,
      skullBase: -0.066,
      ear: [0.084, -0.012, -0.006, 0.027, 0.017],
      neckTop: [-0.07, -0.028],
      neckR: [0.07, 0.092],
      cordR: 0.021,
      neckK: 0.03,
      missing: [2, 4, -3, -5, -7],
      broken: [1, -1, 6],
      teethScale: 1.1,
      arch: 11,
      extra: (b, g, N, V) => (
        g > 0.06 &&
          b > -0.02 &&
          ((V = B(
            V,
            K0(
              b,
              g,
              N,
              s[0],
              s[1] - 0.004,
              s[2],
              i[0],
              i[1] - 0.004,
              i[2],
              0.011,
            ),
            0.012,
          )),
          (V = f0(
            V,
            -K0(
              b,
              g,
              N,
              s[0],
              s[1] + 0.004,
              s[2],
              i[0],
              i[1] + 0.004,
              i[2],
              0.0045,
            ),
            0.002,
          ))),
        V
      ),
      matExtra: (b, g, N) =>
        g > 0.06 &&
        K0(
          b,
          g,
          N,
          s[0],
          s[1] + 0.004,
          s[2],
          i[0],
          i[1] + 0.004,
          i[2],
          0.0045,
        ) < 0.004
          ? L.WOUND
          : null,
      neckExtra: (b, g, N, V) =>
        B(V, b0(b, g, N, 0, -0.1, -0.06, 0.07, 0.035, 0.035), 0.03),
      rect: [-0.105, -0.17, 0.21, 0.29],
    }),
    l = (b, g, N) => {
      let V = b0(b, g, N, 0, 1.31, -0.025, 0.2, 0.165, 0.125);
      ((V = B(V, b0(b, g, N, 0, 1.3, -0.1, 0.19, 0.18, 0.08), 0.06)),
        (V = B(V, b0(b, g, N, 0, 1.1, 0.07, 0.185, 0.175, 0.185), 0.07)),
        (V = B(V, b0(b, g, N, 0, 1, 0.1, 0.16, 0.09, 0.14), 0.05)),
        (V = B(V, b0(b, g, N, 0, 0.98, 0, 0.19, 0.11, 0.13), 0.06)),
        (V = B(
          V,
          K0(b, g, N, -0.22, 1.43, -0.05, 0.22, 1.43, -0.05, 0.078),
          0.07,
        )));
      for (const O of [-1, 1])
        ((V = B(
          V,
          K0(b, g, N, O * 0.06, 1.53, -0.07, O * 0.21, 1.46, -0.06, 0.066),
          0.05,
        )),
          (V = B(
            V,
            b0(b, g, N, O * 0.085, 1.31, 0.075, 0.085, 0.07, 0.055),
            0.04,
          )),
          (V = B(V, b0(b, g, N, O * 0.16, 1.08, 0, 0.06, 0.08, 0.1), 0.05)));
      return V;
    },
    a = z0(1),
    u = z0(-1),
    f = e.upperArmL,
    d = e.upperArmR,
    v = e.foreArmL,
    C = e.foreArmR,
    p = e.handL,
    F = e.handR,
    J = (b) => 0.995 + 0.07 * h(-0.05, 0.22, b),
    n0 = (b, g, N) => {
      let V = l(b, g, N) - 0.007;
      ((V = f0(V, -b0(b, g, N, 0, 1.52, 0.1, 0.1, 0.09, 0.12), 0.012)),
        (V = f0(V, -K0(b, g, N, 0, 1.46, -0.07, 0, 1.8, -0.08, 0.075), 0.01)));
      for (const O of [-1, 1])
        V = f0(
          V,
          -K0(b, g, N, O * 0.26, 1.34, -0.04, O * 0.36, 1.5, -0.04, 0.08),
          0.01,
        );
      return (
        (V = f0(V, J(N) - g, 0.008)),
        (V -=
          0.0018 *
          Math.pow(0.5 + 0.5 * Math.sin(Math.atan2(b, N) * 34), 2) *
          h(1.25, 1.1, g)),
        V
      );
    },
    _ = l,
    G = (b) => 0.075 + 0.06 * h(1.4, 1.05, b),
    y = (b, g, N) => {
      const V = l(b, g, N);
      let O = V - 0.02;
      O -= 0.012 * h(1.25, 1, g) * h(0, 0.15, N);
      let i0 = _0(
        b,
        g,
        N,
        f[0] - 0.02,
        f[1] + 0.01,
        f[2],
        0.088,
        v[0],
        v[1],
        v[2],
        0.078,
      );
      i0 = B(
        i0,
        _0(
          b,
          g,
          N,
          v[0],
          v[1],
          v[2],
          0.078,
          p[0] - a[0] * 0.015,
          p[1] - a[1] * 0.015,
          p[2],
          0.068,
        ),
        0.02,
      );
      {
        const S = (b - f[0]) * a[0] + (g - f[1]) * a[1];
        ((i0 -=
          0.006 *
          Math.pow(0.5 + 0.5 * Math.sin(S * 80), 2) *
          h(0.2, 0.28, S) *
          h(0.42, 0.34, S)),
          (i0 = f0(i0, S - (o + n - 0.012), 0.004)));
      }
      let m0 = _0(
        b,
        g,
        N,
        d[0] + 0.02,
        d[1] + 0.01,
        d[2],
        0.088,
        C[0],
        C[1],
        C[2],
        0.08,
      );
      {
        const S = (b - d[0]) * u[0] + (g - d[1]) * u[1],
          P = Math.atan2(N - d[2], (b - d[0]) * u[1] - (g - d[1]) * u[0]);
        m0 = f0(
          m0,
          S -
            (o - 0.02 + 0.02 * Math.sin(P * 4 + 0.7) + 0.012 * Math.sin(P * 9)),
          0.003,
        );
      }
      O = B(O, Math.min(i0, m0), 0.04);
      {
        const S = Math.atan2(b, N + 0.06),
          P = Math.hypot(b, (N + 0.06) * 0.95) - 0.1,
          s0 =
            Math.hypot(
              P,
              (g -
                1.49 +
                0.07 * h(0.2, 1.4, Math.abs(S) < 1.6 ? 1.6 - Math.abs(S) : 0)) *
                1.2,
            ) - 0.028;
        O = B(O, s0, 0.015);
      }
      if (
        ((O = f0(O, Math.min(G(g) - Math.abs(b), N + 0.02), 0.008)),
        (O = f0(O, -K0(b, g, N, 0, 1.47, -0.06, 0, 1.8, -0.07, 0.085), 0.01)),
        g > 0.93 && g < 1.11 && N > 0)
      )
        for (const S of [-1, 1])
          O = B(
            O,
            f0(
              W0(b, g, N, S * 0.17, 1.02, 0.14, 0.05, 0.06, 0.12, 0.012),
              -(V - 0.028),
              0.004,
            ),
            0.003,
          );
      return (
        (O = f0(O, 0.87 + 0.015 * Math.sin(b * 40 + N * 20) - g, 0.008)),
        O
      );
    },
    E = (b) => 1.05 - 0.09 * h(-0.05, 0.2, b),
    c0 = (b, g, N) => {
      let V = b0(b, g, N, 0, 0.97, 0.01, 0.2, 0.12, 0.14);
      for (const O of [-1, 1]) {
        const i0 = e["thigh" + ve(O)],
          m0 = e["shin" + ve(O)],
          S = e["foot" + ve(O)];
        let P = _0(
          b,
          g,
          N,
          i0[0],
          i0[1] - 0.02,
          i0[2],
          0.108,
          m0[0],
          m0[1],
          m0[2] + 0.004,
          0.08,
        );
        ((P = B(
          P,
          _0(
            b,
            g,
            N,
            m0[0],
            m0[1],
            m0[2] + 0.004,
            0.08,
            S[0],
            0.07,
            S[2] + 0.01,
            0.07,
          ),
          0.03,
        )),
          (P -=
            0.004 *
            Math.pow(0.5 + 0.5 * Math.sin(g * 110 + b * 20), 2) *
            h(m0[1] + 0.12, m0[1], g) *
            h(m0[1] - 0.12, m0[1], g)),
          (P -=
            0.004 *
            h(0.3, 0.1, g) *
            Math.pow(
              0.5 + 0.5 * Math.sin(g * 100 + Math.atan2(b - S[0], N) * 3),
              2,
            )),
          (V = B(V, P, 0.06)));
      }
      return (
        (V = f0(V, g - E(N), 0.008)),
        (V = f0(V, 0.07 - g, 0.004)),
        (V = B(
          V,
          f0(
            b0(b, g, N, 0, 1, 0.01, 0.205, 0.12, 0.145) - 0.004,
            Math.abs(g - E(N) + 0.015) - 0.016,
            0.004,
          ),
          0.004,
        )),
        V
      );
    },
    u0 = G0(C, u, 0.12),
    q = [u0[0], u0[1], u0[2] + 0.045],
    $ = G0(C, u, 0.03),
    x = G0(C, u, 0.13),
    e0 = (b, g, N) => {
      let V = _0(
        b,
        g,
        N,
        C[0] + u[0] * -0.04,
        C[1] - u[1] * 0.04,
        C[2],
        0.056,
        F[0],
        F[1],
        F[2],
        0.037,
      );
      return (
        (V = B(
          V,
          _0(b, g, N, $[0], $[1], $[2], 0.058, x[0], x[1], x[2], 0.048),
          0.02,
        )),
        (V = f0(V, -b0(b, g, N, q[0], q[1], q[2], 0.024, 0.02, 0.013), 0.004)),
        V
      );
    },
    H = (b) =>
      nt({
        wrist: e["hand" + ve(b)],
        dir: z0(b),
        side: b,
        palm: [0.106, 0.1, 0.035],
        fingers: [
          [0.088, 0.0108],
          [0.094, 0.0112],
          [0.09, 0.0108],
          [0.074, 0.0098],
        ],
        thumb: [0.07, 0.0125],
        curl: b > 0 ? [0.55, 0.9, 0.6] : [0.45, 0.8, 0.5],
        bony: 0.25,
        seed: b > 0 ? 13 : 14,
        spread: 0.06,
      }),
    z = H(1),
    Z = H(-1),
    p0 = (b) =>
      gt({
        ankle: e["foot" + ve(b)],
        x: e["foot" + ve(b)][0],
        len: 0.3,
        width: 0.115,
        kind: "slipper",
      }),
    j = p0(1),
    t0 = p0(-1),
    A = (b, g, N) => {
      let V = 1e9;
      for (const O of [-1, 1]) {
        const i0 = e["foot" + ve(O)];
        V = Math.min(
          V,
          _0(
            b,
            g,
            N,
            i0[0],
            0.2,
            i0[2] + 0.01,
            0.058,
            i0[0],
            0.06,
            i0[2] - 0.005,
            0.045,
          ),
        );
      }
      return V;
    },
    w = [
      {
        name: "head",
        sdf: r.sdf,
        mat: r.mat,
        weights: r.weights,
        min: r.min,
        max: r.max,
        res: 0.0031,
      },
      {
        name: "neck",
        sdf: r.neck.sdf,
        mat: L.SKIN,
        weights: r.weights,
        min: r.neck.min,
        max: r.neck.max,
        res: 0.005,
      },
      {
        name: "vest",
        sdf: n0,
        mat: L.CLOTH_A,
        res: 0.0085,
        sigma: 0.03,
        min: [-0.3, 0.97, -0.2],
        max: [0.3, 1.62, 0.3],
        bones: [
          "hips",
          "spine",
          "chest",
          "neck",
          "shoulderL",
          "shoulderR",
          "upperArmL",
          "upperArmR",
        ],
      },
      {
        name: "belly",
        sdf: _,
        mat: L.SKIN,
        res: 0.007,
        sigma: 0.03,
        min: [-0.24, 0.94, -0.06],
        max: [0.24, 1.1, 0.3],
        bones: ["hips", "spine", "chest"],
      },
      {
        name: "cardigan",
        sdf: y,
        mat: L.CLOTH_C,
        res: 0.009,
        sigma: 0.03,
        min: [-0.52, 0.84, -0.22],
        max: [0.66, 1.62, 0.3],
        bones: [
          "hips",
          "spine",
          "chest",
          "neck",
          "shoulderL",
          "upperArmL",
          "foreArmL",
          "shoulderR",
          "upperArmR",
        ],
      },
      {
        name: "trousers",
        sdf: c0,
        mat: L.CLOTH_B,
        res: 0.009,
        sigma: 0.028,
        min: [-0.34, 0.05, -0.18],
        max: [0.34, 1.08, 0.22],
        bones: [
          "hips",
          "spine",
          "thighL",
          "shinL",
          "thighR",
          "shinR",
          "footL",
          "footR",
        ],
      },
      {
        name: "armR",
        sdf: e0,
        res: 0.0048,
        sigma: 0.022,
        mat: (b, g, N) =>
          b0(b, g, N, q[0], q[1], q[2], 0.028, 0.024, 0.017) < 0.002
            ? L.WOUND
            : L.SKIN,
        min: [-0.64, 0.95, -0.12],
        max: [-0.36, 1.26, 0.1],
        bones: ["upperArmR", "foreArmR", "handR"],
      },
      {
        name: "handL",
        sdf: z.sdf,
        mat: (b, g, N) => (z.nailAt(b, g, N) ? L.NAIL : L.SKIN),
        min: z.min,
        max: z.max,
        res: 0.0032,
        bones: ["handL", "foreArmL"],
        sigma: 0.015,
      },
      {
        name: "handR",
        sdf: Z.sdf,
        mat: (b, g, N) => (Z.nailAt(b, g, N) ? L.NAIL : L.SKIN),
        min: Z.min,
        max: Z.max,
        res: 0.0032,
        bones: ["handR", "foreArmR"],
        sigma: 0.015,
      },
      {
        name: "ankles",
        sdf: A,
        mat: L.SKIN,
        res: 0.006,
        min: [-0.22, 0.02, -0.09],
        max: [0.22, 0.28, 0.1],
        bones: ["shinL", "footL", "shinR", "footR"],
        sigma: 0.02,
      },
      {
        name: "slipL",
        sdf: j.sdf,
        mat: L.SHOE,
        min: j.min,
        max: j.max,
        res: 0.0045,
        bones: ["footL", "shinL"],
        sigma: 0.02,
      },
      {
        name: "slipR",
        sdf: t0.sdf,
        mat: L.SHOE,
        min: t0.min,
        max: t0.max,
        res: 0.0045,
        bones: ["footR", "shinR"],
        sigma: 0.02,
      },
    ];
  return {
    kind: "brute",
    height: 1.82,
    J: e,
    HC: t,
    head: r,
    parts: w,
    col: (b, g, N, V, O) => {
      let i0 = 0,
        m0 = 0,
        S = 0,
        P = 0;
      const s0 = oe(b * 9, g * 9, N * 9, 2);
      if (O === "vest")
        ((m0 = 0.45 + 0.35 * s0 + 0.3 * h(1.2, 1.05, g)),
          (i0 =
            h(0.1, 0.03, Math.abs(b + 0.02 + (1.45 - g) * 0.1)) *
            h(1.12, 1.3, g) *
            h(0.02, 0.08, N)),
          (i0 = Math.max(i0, ue(b, g, N, 28, 0.7) * h(0, 0.1, N))),
          (P =
            h(0.028, 0.018, Math.hypot(b - 0.09, g - 1.2)) * h(0.1, 0.15, N)));
      else if (O === "cardigan") {
        ((m0 = 0.4 + 0.4 * s0), (i0 = ue(b, g, N, 24, 0.72) * 0.9));
        const o0 = Math.hypot(b - v[0], g - v[1], N - v[2] + 0.07);
        P = Math.max(
          h(0.05, 0.03, o0),
          h(0.045, 0.03, Math.hypot(b + 0.1, g - 1.22)) * h(-0.1, -0.14, N),
        );
      } else if (O === "trousers")
        ((m0 =
          0.35 +
          0.5 * h(0.4, 0.07, g) +
          0.2 * s0 +
          0.4 * h(0.06, 0.02, Math.abs(g - 0.5)) * h(0.02, 0.08, N)),
          (i0 = ue(b, g, N, 26, 0.74) * h(1, 0.6, g)),
          (S = 0));
      else if (O === "belly")
        ((S = 0.12 * h(0.5, 0.7, s0)),
          (P = 0.9),
          (m0 = 0.3),
          (i0 = h(0.6, 0.8, oe(b * 15, g * 15, N * 15, 2)) * 0.8));
      else if (O === "armR" || O === "handR" || O === "handL") {
        const o0 = Math.hypot(b - q[0], g - q[1], N - q[2]);
        ((i0 =
          h(0.08, 0.028, o0) +
          (O === "armR"
            ? h(0.035, 0, Math.abs(N - q[2] + 0.01)) *
              h(q[1] + 0.01, q[1] - 0.1, g) *
              h(q[1] - 0.22, q[1] - 0.1, g)
            : 0)),
          (i0 = Math.max(
            i0,
            h(0.72, 0.85, oe(b * 16, g * 16, N * 16, 2)) * 0.7,
          )),
          (S = h(0.4, 0.7, s0) * 0.9 + h(0.1, 0.03, o0) * 0.6),
          (P = 0.8),
          (m0 = 0.35 + 0.3 * s0),
          V === L.NAIL && (m0 = 0.9));
      } else if (O === "head" || O === "neck") {
        ((P = 0.5), (S = 0.35 * h(0.45, 0.7, s0)));
        const o0 = K0(
          b - t[0],
          g - t[1],
          N - t[2],
          s[0],
          s[1],
          s[2],
          i[0],
          i[1],
          i[2],
          0.005,
        );
        ((i0 =
          h(0.03, 0.005, o0) +
          h(0.012, 0, Math.abs(b - 0.06 - (g - 1.78) * 0.2)) *
            h(1.8, 1.66, g) *
            h(1.64, 1.68, g) *
            h(-0.02, 0.03, N - 0.02)),
          (i0 +=
            h(0.03, 0, Math.abs(b + 0.01)) *
            h(1.58, 1.45, g) *
            h(1.43, 1.47, g) *
            h(0.03, 0.07, N)),
          (m0 = 0.2 * s0));
      } else
        O === "ankles"
          ? ((S = 0.6), (P = 0.6), (m0 = 0.4))
          : O.startsWith("slip") && (m0 = 0.5 + 0.4 * s0);
      return [I0(i0), I0(m0), I0(S), I0(P)];
    },
    segA: { hips: [0, 0.9, 0] },
    rad: {
      hips: 0.16,
      spine: 0.17,
      chest: 0.17,
      neck: 0.075,
      head: 0.1,
      jaw: 0.045,
      shoulderL: 0.065,
      upperArmL: 0.075,
      foreArmL: 0.06,
      handL: 0.04,
      shoulderR: 0.065,
      upperArmR: 0.075,
      foreArmR: 0.06,
      handR: 0.04,
      thighL: 0.1,
      shinL: 0.075,
      footL: 0.04,
      thighR: 0.1,
      shinR: 0.075,
      footR: 0.04,
    },
    hit: [
      ["head", [0, 1.68, 0.01], [0, 1.73, -0.01], 0.118, "head"],
      ["chest", [0, 1.24, -0.01], [0, 1.44, -0.03], 0.21, "body"],
      ["spine", [0, 0.98, 0.04], [0, 1.16, 0.06], 0.22, "body"],
      ["neck", e.neck, [0, 1.6, -0.03], 0.085, "body"],
      ["upperArmL", e.upperArmL, e.foreArmL, 0.09, "body"],
      ["foreArmL", e.foreArmL, e.handL, 0.075, "body"],
      ["upperArmR", e.upperArmR, e.foreArmR, 0.09, "body"],
      ["foreArmR", e.foreArmR, e.handR, 0.06, "body"],
      ["handL", e.handL, e.handTipL, 0.055, "body"],
      ["handR", e.handR, e.handTipR, 0.055, "body"],
      ["thighL", e.thighL, e.shinL, 0.11, "legs"],
      ["shinL", e.shinL, e.footL, 0.085, "legs"],
      ["thighR", e.thighR, e.shinR, 0.11, "legs"],
      ["shinR", e.shinR, e.footR, 0.085, "legs"],
      ["footL", [0.135, 0.05, -0.04], [0.14, 0.04, 0.17], 0.055, "legs"],
      ["footR", [-0.135, 0.05, -0.04], [-0.14, 0.04, 0.17], 0.055, "legs"],
    ],
    palette: {
      [L.SKIN]: {
        base: "#7c7467",
        shade: "#423947",
        deep: "#27202c",
        line: "#191419",
        type: "skin",
      },
      [L.FACE]: {
        base: "#7b7568",
        shade: "#433b49",
        deep: "#29212d",
        line: "#191419",
        type: "skin",
        lineW: 0.6,
      },
      [L.EYE]: {
        base: "#c4c2ae",
        shade: "#6f6c66",
        line: "#191419",
        type: "eye",
      },
      [L.MOUTH]: {
        base: "#1c0609",
        shade: "#090203",
        deep: "#050102",
        line: "#0e0305",
        type: "mouth",
      },
      [L.TEETH]: {
        base: "#a89a72",
        shade: "#5c533f",
        line: "#241d17",
        type: "teeth",
      },
      [L.HAIR]: {
        base: "#3a3434",
        shade: "#1a1616",
        line: "#0a0809",
        type: "hair",
      },
      [L.CLOTH_A]: {
        base: "#8f8873",
        shade: "#524f46",
        deep: "#302e2a",
        line: "#1f1c1a",
        type: "cloth",
      },
      [L.CLOTH_B]: {
        base: "#3b3a31",
        shade: "#1a1a16",
        deep: "#0f0f0c",
        line: "#0b0a09",
        type: "cloth",
      },
      [L.CLOTH_C]: {
        base: "#5c402c",
        shade: "#2a1c14",
        deep: "#170f0b",
        line: "#120b08",
        type: "cloth",
        fold: 0.45,
      },
      [L.SHOE]: {
        base: "#4c2428",
        shade: "#1f0c0f",
        deep: "#120608",
        line: "#0c0405",
        type: "cloth",
      },
      [L.NAIL]: {
        base: "#7a715c",
        shade: "#3d382f",
        line: "#191419",
        type: "teeth",
      },
      [L.WOUND]: {
        base: "#6e1219",
        shade: "#2d0509",
        deep: "#1a0305",
        line: "#12030a",
        type: "wound",
      },
    },
    pattern: { [L.CLOTH_C]: [2, 90], [L.CLOTH_A]: [2, 160] },
    shade: { livorY: 0.62, livor: "#5f5360", bruise: "#5e5064" },
    eyes: {
      iris: "#6d6a58",
      sclera: "#bdb593",
      cloud: 0.75,
      gaze: [0.02, -0.06, -0.1, -0.02],
    },
    face: {
      seed: 23,
      gaunt: 0.35,
      brows: !0,
      browCol: "60,52,48",
      browW: 1.5,
      browA: 0.6,
      browDropL: 3,
      stubble: !0,
      stubbleCol: "46,40,42",
      socketL: 1.25,
      socketR: 0.9,
      bruises: [
        [34, -22, 16, 11, 0.3],
        [-20, 36, 12, 8],
      ],
      creases: 0.55,
      veins: 3,
      mouthBlood: [
        [0, 1],
        [-10, 0.6],
      ],
      spatter: 1.2,
      noseBlood: !0,
      lipCol: "70,34,46",
      wounds: [[-38, -46, 5, -0.4]],
    },
    style: {
      hunch: 8,
      chestHunch: 12,
      headRoll: -7,
      headPitch: 20,
      headYaw: 4,
      neckFwd: 16,
      jaw: 0.14,
      shoulderDrop: 0.05,
      leanR: -3,
      armSpread: 0.32,
      elbow: 0.35,
      elbowR: 0.3,
      idleWidth: 0.16,
      idleCrouch: 0.05,
      sway: 1.4,
      twitch: 0.08,
      shamble: {
        v: 0.8,
        cadence: 1.6,
        duty: 0.62,
        lift: [0.05, 0.05],
        width: 0.16,
        crouch: 0.06,
        bob: 0.018,
        sway: 0.08,
        roll: 8,
        yaw: 4,
        toeOut: 0.22,
        lean: 3,
        armSwing: 10,
        heel: 0.08,
        toeOff: 0.15,
      },
      run: {
        v: 2.4,
        cadence: 2.3,
        duty: 0.42,
        lift: [0.14, 0.14],
        width: 0.16,
        crouch: 0.1,
        bob: 0.04,
        sway: 0.06,
        lean: 22,
      },
    },
  };
}
const Re = (e) => (e > 0 ? "L" : "R");
function bo() {
  const e = {
      hips: [0, 0.9, 0],
      spine: [0, 1.01, -0.01],
      chest: [0, 1.17, -0.02],
      neck: [0, 1.39, -0.035],
      head: [0, 1.505, -0.02],
      jaw: [0, 1.527, -0.004],
      headTop: [0, 1.66, -0.01],
      chin: [0, 1.44, 0.06],
      shoulderL: [0.022, 1.37, -0.028],
      upperArmL: [0.165, 1.35, -0.035],
      shoulderR: [-0.022, 1.37, -0.028],
      upperArmR: [-0.165, 1.35, -0.035],
      thighL: [0.085, 0.865, 0],
      shinL: [0.088, 0.47, 0.012],
      footL: [0.09, 0.07, -0.015],
      thighR: [-0.085, 0.865, 0],
      shinR: [-0.088, 0.47, 0.012],
      footR: [-0.09, 0.07, -0.015],
      toeL: [0.095, 0.015, 0.165],
      toeR: [-0.095, 0.015, 0.165],
      heelL: [0.09, 0.018, -0.065],
      heelR: [-0.09, 0.018, -0.065],
    },
    o = 0.29,
    n = 0.245,
    c = 0.175;
  for (const S of [1, -1]) {
    const P = z0(S),
      s0 = e["upperArm" + Re(S)];
    ((e["foreArm" + Re(S)] = G0(s0, P, o)),
      (e["hand" + Re(S)] = G0(s0, P, o + n)),
      (e["handTip" + Re(S)] = G0(s0, P, o + n + c * 0.8)));
  }
  const t = [0, 1.555, 0],
    s = { c: [0, 0.018, -0.01], r: [0.068, 0.09, 0.092] },
    i = rt({
      HC: t,
      seed: 31,
      C7: e.neck,
      cran: s,
      lowerFace: { c: [0, -0.04, 0.012], r: [0.055, 0.071, 0.07] },
      temple: [0.064, 0.02, 0.048],
      chin: [-0.113, 0.06],
      chinW: 0.014,
      jawSlope: 0.56,
      jawUnder: 0.55,
      faceZ: 0.088,
      cheek: [0.045, -0.02, 0.055],
      hollow: [0.044, -0.058, 0.046],
      hollowK: 0.02,
      brow: [0.036, 0.024, 0.077, 0.009],
      eyeX: 0.03,
      eyeY: 0,
      eyeZ: 0.063,
      eyeR: 0.0112,
      socket: [0.019, 0.015, 0.019],
      lid: 0.32,
      nose: {
        bridge: [0.012, 0.085],
        r0: 0.005,
        tip: [-0.03, 0.101],
        r1: 0.0075,
        wing: 0.0102,
      },
      mouthY: -0.066,
      mouthW: 0.021,
      mouthZ: 0.083,
      mouthGap: 0.005,
      jawHinge: [-0.034, -0.01],
      jawSideX: 0.038,
      skullBase: -0.052,
      ear: [0.066, -0.012, -0.006, 0.027, 0.017],
      neckTop: [-0.062, -0.026],
      neckR: [0.033, 0.041],
      cordR: 0.009,
      missing: [-4],
      broken: [2],
      teethScale: 0.92,
      rect: [-0.09, -0.15, 0.18, 0.24],
    }),
    r = [
      [-0.03, -0.12, 0],
      [-0.045, -0.2, 0.004],
      [-0.06, -0.16, 0],
    ].map(([S, P, s0], o0) => {
      const g0 = [S * 0.4, 0.105, 0.035 + s0],
        w0 = [S * 0.9, 0.07, 0.083],
        k0 = [S, 0.02, 0.1 + s0],
        q0 = [S - 0.003, -0.04, 0.104 + s0],
        B0 = [S - 0.006, P, 0.096 - o0 * 0.004];
      return {
        pts: [g0, w0, k0, q0, B0],
        r: [0.011, 0.012, 0.012, 0.011, 0.006],
      };
    }),
    l = (S, P, s0) => {
      const o0 = S - t[0],
        g0 = P - t[1],
        w0 = s0 - t[2];
      let k0 = b0(
        o0,
        g0,
        w0,
        s.c[0],
        s.c[1] + 0.003,
        s.c[2] - 0.002,
        s.r[0] + 0.009,
        s.r[1] + 0.008,
        s.r[2] + 0.009,
      );
      if (
        ((k0 += h(0.055, 0.025, g0) * h(0.015, 0.05, w0) * 0.05),
        (k0 += 0.003 * h(0.004, 0, Math.abs(o0)) * h(0, 0.05, w0 + 0.03)),
        g0 < 0.02)
      ) {
        const q0 = h(0, -0.3, g0),
          B0 = 0.078 + 0.058 * q0,
          P0 = 0.09 + 0.02 * q0,
          y0 = -0.012 - 0.03 * q0,
          x0 = Math.atan2(o0, w0 - y0),
          Y0 = Math.hypot(o0 / B0, (w0 - y0) / P0),
          R =
            0.004 * Math.sin(x0 * 6 + 0.7) +
            0.0025 * Math.sin(x0 * 13 + g0 * 6);
        let T = Math.abs((Y0 - 1.06) * Math.min(B0, P0)) - 0.01 - R * q0;
        const K = Math.cos(x0);
        T = f0(T, (K - 0.35) * 0.06, 0.01);
        const l0 =
          -0.3 -
          0.05 * (1 - K) * 0.5 +
          0.03 * Math.sin(x0 * 7 + 1.3) +
          0.012 * Math.sin(x0 * 19);
        ((T = f0(T, l0 - g0, 0.01)), (k0 = B(k0, T, 0.02)));
        for (const h0 of [1, -1]) {
          const C0 = _0(
            o0,
            g0,
            w0,
            h0 * 0.078,
            -0.02,
            0.006,
            0.016,
            h0 * 0.105,
            -0.24,
            0.045,
            0.011,
          );
          k0 = B(
            k0,
            f0(C0, -0.25 - g0 + 0.015 * Math.sin(o0 * 80), 0.006),
            0.012,
          );
        }
      }
      if (o0 < 0.02 && w0 > 0 && g0 > -0.25)
        for (const q0 of r) {
          const B0 = q0.pts;
          for (let P0 = 0; P0 < B0.length - 1; P0++) {
            const y0 = B0[P0],
              x0 = B0[P0 + 1],
              Y0 = (w0 - y0[2]) * 1.8 + y0[2];
            k0 = B(
              k0,
              _0(
                o0,
                g0,
                Y0,
                y0[0],
                y0[1],
                y0[2],
                q0.r[P0],
                x0[0],
                x0[1],
                x0[2],
                q0.r[P0 + 1],
              ) * 0.75,
              0.007,
            );
          }
        }
      return k0;
    },
    a = (S, P, s0, o0) => {
      const g0 = P - t[1],
        w0 = h(-0.1, -0.3, g0);
      ((o0[ye.head] += 1 - w0),
        (o0[ye.neck] += w0 * 0.55),
        (o0[ye.chest] += w0 * 0.45));
    },
    u = (S, P, s0) => {
      let o0 = b0(S, P, s0, 0, 1.2, -0.02, 0.117, 0.14, 0.084);
      ((o0 = B(o0, b0(S, P, s0, 0, 1.03, -0.002, 0.102, 0.11, 0.072), 0.05)),
        (o0 = B(o0, b0(S, P, s0, 0, 0.9, -0.006, 0.138, 0.09, 0.088), 0.05)),
        (o0 = B(
          o0,
          K0(S, P, s0, -0.148, 1.345, -0.032, 0.148, 1.345, -0.032, 0.04),
          0.06,
        )));
      for (const g0 of [-1, 1])
        ((o0 = B(
          o0,
          K0(
            S,
            P,
            s0,
            g0 * 0.025,
            1.4,
            -0.042,
            g0 * 0.14,
            1.362,
            -0.036,
            0.032,
          ),
          0.04,
        )),
          (o0 = B(
            o0,
            K0(
              S,
              P,
              s0,
              g0 * 0.02,
              1.362,
              0.036,
              g0 * 0.135,
              1.37,
              0.002,
              0.0085,
            ),
            0.01,
          )),
          (o0 = B(
            o0,
            b0(S, P, s0, g0 * 0.068, 1.26, -0.08, 0.05, 0.06, 0.02),
            0.03,
          )));
      if (s0 < -0.06)
        for (let g0 = 0; g0 < 9; g0++) {
          const w0 = 1.37 - g0 * 0.034;
          o0 = B(
            o0,
            se(S, P, s0, 0, w0, -0.098 + (1.37 - w0) * 0.02, 0.0085),
            0.008,
          );
        }
      return o0;
    },
    f = z0(1),
    d = z0(-1),
    v = e.upperArmL,
    C = e.upperArmR,
    p = e.foreArmL,
    F = e.foreArmR,
    J = e.handL,
    n0 = e.handR,
    _ = { 1: G0(v, f, 0.13), [-1]: G0(C, d, 0.13) },
    G = (S, P, s0) => {
      let o0 = u(S, P, s0) - 0.015;
      const g0 = h(0.97, 0.5, P),
        w0 = 0.16 + 0.055 * g0,
        k0 = 0.112 + 0.04 * g0;
      let q0 = (Math.hypot(S / w0, (s0 + 0.004) / k0) - 1) * Math.min(w0, k0);
      ((q0 = f0(q0, P - 1.02, 0.03)), (o0 = B(o0, q0, 0.05)));
      const B0 = Math.atan2(S, s0);
      ((o0 -=
        0.007 *
        Math.pow(0.5 + 0.5 * Math.sin(B0 * 7 + Math.sin(P * 9) * 0.8), 2) *
        g0),
        (o0 -=
          0.0025 *
          Math.pow(0.5 + 0.5 * Math.sin(B0 * 15 + P * 12), 3) *
          h(1.3, 1.15, P) *
          h(0.95, 1.05, P)));
      for (const P0 of [1, -1]) {
        const y0 = P0 > 0 ? v : C,
          x0 = _[P0];
        o0 = B(
          o0,
          _0(
            S,
            P,
            s0,
            y0[0] - P0 * 0.01,
            y0[1] + 0.008,
            y0[2],
            0.052,
            x0[0],
            x0[1],
            x0[2],
            0.058,
          ),
          0.03,
        );
      }
      return o0;
    },
    y = (S) => 0.018 + 0.05 * h(1.37, 1.22, S) * h(0.93, 1.06, S),
    E = (S, P, s0) => {
      let o0 = G(S, P, s0);
      return (
        (o0 = f0(
          o0,
          -K0(S, P, s0, 0, 1.35, 0.005, 0, 1.7, -0.02, 0.058),
          0.01,
        )),
        (o0 = f0(o0, Math.min(y(P) - Math.abs(S), -0.03 - s0), 0.004)),
        (o0 = f0(
          o0,
          0.465 + 0.012 * Math.sin(Math.atan2(S, s0) * 5 + 1) - P,
          0.005,
        )),
        o0
      );
    },
    c0 = (S, P, s0) => {
      let o0 = 1e9;
      for (const g0 of [-1, 1]) {
        const w0 = e["thigh" + Re(g0)],
          k0 = e["shin" + Re(g0)],
          q0 = e["foot" + Re(g0)];
        let B0 = _0(
          S,
          P,
          s0,
          w0[0],
          w0[1] - 0.03,
          w0[2],
          0.068,
          k0[0],
          k0[1],
          k0[2],
          0.045,
        );
        ((B0 = B(
          B0,
          _0(
            S,
            P,
            s0,
            k0[0],
            k0[1],
            k0[2],
            0.046,
            q0[0],
            q0[1] + 0.02,
            q0[2],
            0.031,
          ),
          0.02,
        )),
          (B0 = B(
            B0,
            _0(
              S,
              P,
              s0,
              k0[0],
              k0[1] - 0.07,
              k0[2] - 0.02,
              0.044,
              k0[0],
              k0[1] - 0.2,
              k0[2] - 0.012,
              0.036,
            ),
            0.03,
          )),
          (B0 = B(
            B0,
            se(S, P, s0, k0[0], k0[1] + 0.012, k0[2] + 0.034, 0.024),
            0.01,
          )),
          (o0 = Math.min(o0, B0)));
      }
      return f0(o0, P - 0.7, 0.01);
    },
    u0 = (S) => {
      const P = S > 0 ? v : C,
        s0 = S > 0 ? p : F,
        o0 = S > 0 ? J : n0,
        g0 = [P[0] - S * 0.025, P[1] + 0.01, P[2]],
        w0 = [s0[0] + S * 0.003, s0[1] - 0.003, s0[2] - 0.024];
      return (k0, q0, B0) => {
        let P0 = _0(
          k0,
          q0,
          B0,
          g0[0],
          g0[1],
          g0[2],
          0.034,
          s0[0],
          s0[1],
          s0[2],
          0.025,
        );
        return (
          (P0 = B(
            P0,
            _0(
              k0,
              q0,
              B0,
              s0[0],
              s0[1],
              s0[2],
              0.027,
              o0[0],
              o0[1],
              o0[2],
              0.018,
            ),
            0.01,
          )),
          (P0 = B(P0, se(k0, q0, B0, w0[0], w0[1], w0[2], 0.014), 0.006)),
          P0
        );
      };
    },
    q = u0(1),
    $ = u0(-1),
    x = G0(p, f, 0.035),
    e0 = G0(p, f, 0.205),
    H = (S, P, s0) => {
      let o0 = _0(
        S,
        P,
        s0,
        x[0],
        x[1],
        x[2],
        0.032,
        e0[0],
        e0[1],
        e0[2],
        0.026,
      );
      const g0 = (S - p[0]) * f[0] + (P - p[1]) * f[1],
        w0 = Math.atan2(s0 - p[2], (S - p[0]) * f[1] - (P - p[1]) * f[0]);
      return (
        (o0 -= 0.0022 * Math.pow(0.5 + 0.5 * Math.sin(g0 * 190 + w0 * 1), 2)),
        o0
      );
    },
    z = G0(p, f, 0.18);
  -f[1] * 0 - 0.766 * 0;
  const Z = [-0.766, -0.643, 0],
    p0 = [z[0] + Z[0] * 0.024, z[1] + Z[1] * 0.024, z[2] + 0.014],
    j = [
      p0,
      [
        p0[0] + f[0] * 0.03 + Z[0] * 0.02,
        p0[1] + f[1] * 0.03 + Z[1] * 0.02,
        p0[2] + 0.02,
      ],
      [
        p0[0] + f[0] * 0.1 + Z[0] * 0.035,
        p0[1] + f[1] * 0.1 + Z[1] * 0.035,
        p0[2] + 0.028,
      ],
      [
        p0[0] + f[0] * 0.2 + Z[0] * 0.03,
        p0[1] + f[1] * 0.2 + Z[1] * 0.03,
        p0[2] + 0.02,
      ],
      [
        p0[0] + f[0] * 0.3 + Z[0] * 0.015,
        p0[1] + f[1] * 0.3 + Z[1] * 0.015,
        p0[2] + 0.03,
      ],
    ],
    t0 = (S, P, s0) => {
      let o0 = 1e9;
      for (let w0 = 0; w0 < j.length - 1; w0++)
        o0 = Math.min(
          o0,
          K0(
            S,
            P,
            s0,
            j[w0][0],
            j[w0][1],
            j[w0][2],
            j[w0 + 1][0],
            j[w0 + 1][1],
            j[w0 + 1][2],
            0.0026,
          ),
        );
      const g0 = j[j.length - 1];
      return (
        (o0 = Math.min(
          o0,
          K0(
            S,
            P,
            s0,
            g0[0],
            g0[1],
            g0[2],
            g0[0] + f[0] * 0.02,
            g0[1] + f[1] * 0.02,
            g0[2],
            0.0048,
          ),
        )),
        (o0 = Math.min(
          o0,
          W0(S, P, s0, p0[0], p0[1], p0[2], 0.012, 0.012, 0.004, 0.002),
        )),
        o0
      );
    },
    A = [0, 1, 2].map((S) => Math.min(...j.map((P) => P[S])) - 0.03),
    w = [0, 1, 2].map((S) => Math.max(...j.map((P) => P[S])) + 0.03),
    Y = (S) =>
      nt({
        wrist: e["hand" + Re(S)],
        dir: z0(S),
        side: S,
        palm: [0.08, 0.07, 0.022],
        fingers: [
          [0.086, 0.0068],
          [0.094, 0.007],
          [0.088, 0.0066],
          [0.07, 0.006],
        ],
        thumb: [0.06, 0.0078],
        curl: S > 0 ? [0.3, 0.6, 0.45] : [0.7, 1, 0.7],
        bony: 1,
        seed: S > 0 ? 21 : 22,
        spread: 0.12,
      }),
    b = Y(1),
    g = Y(-1),
    N = It({
      ankle: e.footL,
      x: e.footL[0],
      len: 0.235,
      width: 0.082,
      toes: !0,
    }),
    V = It({
      ankle: e.footR,
      x: e.footR[0],
      len: 0.235,
      width: 0.082,
      toes: !0,
    }),
    O = [
      {
        name: "head",
        sdf: i.sdf,
        mat: i.mat,
        weights: i.weights,
        min: i.min,
        max: i.max,
        res: 0.0027,
      },
      {
        name: "hair",
        sdf: l,
        mat: L.HAIR,
        weights: a,
        min: [-0.16, 1.2, -0.16],
        max: [0.16, 1.69, 0.15],
        res: 0.0048,
        aoK: 0.8,
      },
      {
        name: "neck",
        sdf: i.neck.sdf,
        mat: L.SKIN,
        weights: i.weights,
        min: i.neck.min,
        max: i.neck.max,
        res: 0.0042,
      },
      {
        name: "torso",
        sdf: u,
        mat: L.SKIN,
        res: 0.0055,
        sigma: 0.025,
        min: [-0.2, 0.96, -0.14],
        max: [0.2, 1.44, 0.1],
        bones: ["hips", "spine", "chest", "neck", "shoulderL", "shoulderR"],
      },
      {
        name: "gown",
        sdf: E,
        mat: L.CLOTH_A,
        res: 0.0074,
        sigma: 0.03,
        min: [-0.34, 0.44, -0.2],
        max: [0.34, 1.45, 0.18],
        weights: (S, P, s0, o0) => i0(S, P, s0, o0),
      },
      {
        name: "legs",
        sdf: c0,
        mat: L.SKIN,
        res: 0.006,
        sigma: 0.022,
        min: [-0.2, 0.05, -0.1],
        max: [0.2, 0.72, 0.1],
        bones: ["hips", "thighL", "shinL", "footL", "thighR", "shinR", "footR"],
      },
      {
        name: "armL",
        sdf: q,
        mat: L.SKIN,
        res: 0.0042,
        sigma: 0.02,
        min: [0.1, 0.9, -0.08],
        max: [0.56, 1.4, 0.06],
        bones: ["chest", "shoulderL", "upperArmL", "foreArmL", "handL"],
      },
      {
        name: "armR",
        sdf: $,
        mat: L.SKIN,
        res: 0.0042,
        sigma: 0.02,
        min: [-0.56, 0.9, -0.08],
        max: [-0.1, 1.4, 0.06],
        bones: ["chest", "shoulderR", "upperArmR", "foreArmR", "handR"],
      },
      {
        name: "bandage",
        sdf: H,
        mat: L.CLOTH_B,
        res: 0.0035,
        min: [0.3, 1, -0.06],
        max: [0.5, 1.22, 0.06],
        bones: ["foreArmL", "handL"],
        sigma: 0.02,
      },
      {
        name: "iv",
        sdf: t0,
        mat: (S, P, s0) =>
          W0(S, P, s0, p0[0], p0[1], p0[2], 0.012, 0.012, 0.004, 0.002) < 0.0012
            ? L.SOCK
            : L.TUBE,
        min: A,
        max: w,
        res: 0.0016,
        bones: ["foreArmL"],
        sigma: 0.05,
      },
      {
        name: "handL",
        sdf: b.sdf,
        mat: (S, P, s0) => (b.nailAt(S, P, s0) ? L.NAIL : L.SKIN),
        min: b.min,
        max: b.max,
        res: 0.0026,
        bones: ["handL", "foreArmL"],
        sigma: 0.012,
      },
      {
        name: "handR",
        sdf: g.sdf,
        mat: (S, P, s0) => (g.nailAt(S, P, s0) ? L.NAIL : L.SKIN),
        min: g.min,
        max: g.max,
        res: 0.0026,
        bones: ["handR", "foreArmR"],
        sigma: 0.012,
      },
      {
        name: "footL",
        sdf: N.sdf,
        mat: L.SKIN,
        min: N.min,
        max: N.max,
        res: 0.0036,
        bones: ["footL", "shinL"],
        sigma: 0.02,
      },
      {
        name: "footR",
        sdf: V.sdf,
        mat: L.SKIN,
        min: V.min,
        max: V.max,
        res: 0.0036,
        bones: ["footR", "shinR"],
        sigma: 0.02,
      },
    ],
    i0 = (S, P, s0, o0) => {
      const g0 = h(0.98, 0.8, P),
        w0 = h(1.1, 0.95, P),
        k0 = h(1.12, 1.25, P);
      let q0 = 1 - g0;
      for (const P0 of [1, -1]) {
        const y0 = P0 > 0 ? v : C,
          x0 = P0 > 0 ? f : d,
          Y0 = (S - y0[0]) * x0[0] + (P - y0[1]) * x0[1],
          R = y0[0] + x0[0] * Y0,
          T = y0[1] + x0[1] * Y0,
          K = y0[2],
          l0 = Math.hypot(S - R, P - T, s0 - K),
          h0 = h(-0.01, 0.05, Y0) * h(0.22, 0.15, Y0) * h(0.09, 0.066, l0);
        h0 > 0 &&
          ((o0[ye["upperArm" + Re(P0)]] += h0),
          (o0[ye["shoulder" + Re(P0)]] +=
            (1 - h0) * 0.3 * h(0.08, 0.12, P0 * S)),
          (q0 *= 1 - h0));
      }
      ((o0[ye.chest] += q0 * k0 * (1 - w0)),
        (o0[ye.spine] += q0 * (1 - k0) * (1 - w0)),
        (o0[ye.hips] += q0 * w0 + g0 * 0.22));
      const B0 = h(-0.07, 0.07, S);
      ((o0[ye.thighL] += g0 * 0.78 * B0),
        (o0[ye.thighR] += g0 * 0.78 * (1 - B0)));
    };
  return {
    kind: "gown",
    height: 1.66,
    J: e,
    HC: t,
    head: i,
    parts: O,
    col: (S, P, s0, o0, g0) => {
      let w0 = 0,
        k0 = 0,
        q0 = 0,
        B0 = 0;
      const P0 = oe(S * 9, P * 9, s0 * 9, 2);
      return (
        g0 === "gown"
          ? ((k0 = 0.3 + 0.35 * P0 + 0.4 * h(0.6, 0.47, P)),
            (w0 =
              h(0.07, 0.025, Math.abs(S + 0.03 + (1.35 - P) * 0.06)) *
              h(0.95, 1.25, P) *
              h(0.02, 0.07, s0)),
            (w0 = Math.max(w0, ue(S, P, s0, 28, 0.7) * 0.95)),
            (B0 =
              h(0.03, 0.018, Math.hypot(S - 0.1, P - 0.7)) * h(0.05, 0.1, s0)))
          : g0 === "legs" || g0.startsWith("foot")
            ? ((q0 = 0.3 + 0.5 * h(0.45, 0.7, P0)),
              (B0 = 0.7),
              (k0 = 0.2 + 0.7 * h(0.2, 0.02, P)),
              (w0 =
                ue(S, P, s0, 30, 0.72) * 0.9 +
                h(0.02, 0, Math.abs(S - 0.085)) *
                  h(0.85, 0.3, P) *
                  h(0.2, 0.3, P) *
                  h(0, 0.03, s0) *
                  0.9))
            : g0 === "armL" || g0 === "armR" || g0.startsWith("hand")
              ? ((q0 = 0.3 + 0.5 * h(0.45, 0.7, P0)),
                (B0 = 0.85),
                (k0 = 0.25 + 0.3 * P0),
                (q0 = Math.max(
                  q0,
                  h(0.05, 0.02, Math.hypot(S - p[0], P - p[1])) * 0.9,
                  h(0.05, 0.02, Math.hypot(S - F[0], P - F[1])) * 0.9,
                )),
                (w0 = ue(S, P, s0, 34, 0.74) * 0.8),
                o0 === L.NAIL && ((k0 = 0.9), (w0 = 0.6)))
              : g0 === "bandage"
                ? ((k0 = 0.4 + 0.3 * P0),
                  (w0 =
                    h(0.45, 0.7, oe(S * 20, P * 20, s0 * 20, 2)) +
                    h(0.05, 0.02, Math.hypot(S - p0[0], P - p0[1])) * 0.9))
                : g0 === "torso" || g0 === "neck" || g0 === "head"
                  ? ((B0 = 0.8),
                    (q0 = 0.25 + 0.4 * h(0.5, 0.7, P0)),
                    (w0 =
                      g0 === "head"
                        ? 0
                        : h(0.66, 0.8, oe(S * 15, P * 15, s0 * 15, 2)) * 0.7),
                    (k0 = 0.15))
                  : g0 === "hair"
                    ? ((k0 = 0.2),
                      (w0 =
                        h(0.62, 0.8, oe(S * 12, P * 12, s0 * 12, 2)) *
                        0.8 *
                        h(1.45, 1.3, P)))
                    : g0 === "iv" && ((k0 = 0.3), (w0 = 0.3 * h(0.5, 0.8, P0))),
        [I0(w0), I0(k0), I0(q0), I0(B0)]
      );
    },
    segA: { hips: [0, 0.83, -0.005] },
    rad: {
      hips: 0.11,
      spine: 0.09,
      chest: 0.1,
      neck: 0.036,
      head: 0.085,
      jaw: 0.035,
      shoulderL: 0.035,
      upperArmL: 0.034,
      foreArmL: 0.028,
      handL: 0.025,
      shoulderR: 0.035,
      upperArmR: 0.034,
      foreArmR: 0.028,
      handR: 0.025,
      thighL: 0.064,
      shinL: 0.046,
      footL: 0.03,
      thighR: 0.064,
      shinR: 0.046,
      footR: 0.03,
    },
    hit: [
      ["head", [0, 1.55, 0], [0, 1.59, -0.01], 0.098, "head"],
      ["chest", [0, 1.13, -0.01], [0, 1.34, -0.025], 0.13, "body"],
      ["spine", [0, 0.87, -0.005], [0, 1.06, -0.005], 0.13, "body"],
      ["neck", e.neck, [0, 1.49, -0.02], 0.045, "body"],
      ["upperArmL", e.upperArmL, e.foreArmL, 0.045, "body"],
      ["foreArmL", e.foreArmL, e.handL, 0.04, "body"],
      ["upperArmR", e.upperArmR, e.foreArmR, 0.045, "body"],
      ["foreArmR", e.foreArmR, e.handR, 0.035, "body"],
      ["handL", e.handL, e.handTipL, 0.04, "body"],
      ["handR", e.handR, e.handTipR, 0.04, "body"],
      ["thighL", e.thighL, e.shinL, 0.075, "legs"],
      ["shinL", e.shinL, e.footL, 0.055, "legs"],
      ["thighR", e.thighR, e.shinR, 0.075, "legs"],
      ["shinR", e.shinR, e.footR, 0.055, "legs"],
      ["footL", [0.09, 0.04, -0.04], [0.095, 0.03, 0.14], 0.04, "legs"],
      ["footR", [-0.09, 0.04, -0.04], [-0.095, 0.03, 0.14], 0.04, "legs"],
    ],
    palette: {
      [L.SKIN]: {
        base: "#878c8b",
        shade: "#454b5c",
        deep: "#282b3a",
        line: "#171722",
        type: "skin",
      },
      [L.FACE]: {
        base: "#8c9290",
        shade: "#484e60",
        deep: "#2a2d3c",
        line: "#171722",
        type: "skin",
        lineW: 0.7,
      },
      [L.EYE]: {
        base: "#c8cdc6",
        shade: "#747a7b",
        line: "#171722",
        type: "eye",
      },
      [L.MOUTH]: {
        base: "#1c0609",
        shade: "#090203",
        deep: "#050102",
        line: "#0b0204",
        type: "mouth",
      },
      [L.TEETH]: {
        base: "#b7ad8f",
        shade: "#5f5a4b",
        line: "#241d17",
        type: "teeth",
      },
      [L.HAIR]: {
        base: "#1b1720",
        shade: "#08070b",
        deep: "#050407",
        line: "#040305",
        type: "hair",
      },
      [L.CLOTH_A]: {
        base: "#76908b",
        shade: "#36474c",
        deep: "#1f2a2e",
        line: "#141b1e",
        type: "cloth",
        fold: 0.35,
      },
      [L.CLOTH_B]: {
        base: "#a9a088",
        shade: "#5c5747",
        deep: "#34312a",
        line: "#1f1c18",
        type: "cloth",
        fold: 0.1,
      },
      [L.SOCK]: {
        base: "#c2b9a0",
        shade: "#6b6553",
        line: "#1f1c18",
        type: "cloth",
        fold: 0,
      },
      [L.TUBE]: {
        base: "#a3b3af",
        shade: "#4d5b58",
        deep: "#2b3432",
        line: "#1a2020",
        type: "plastic",
        spec: 0.6,
      },
      [L.NAIL]: {
        base: "#5e5850",
        shade: "#2e2a27",
        line: "#171722",
        type: "teeth",
      },
      [L.WOUND]: {
        base: "#6e1219",
        shade: "#2d0509",
        deep: "#1a0305",
        line: "#12030a",
        type: "wound",
      },
    },
    pattern: { [L.CLOTH_A]: [1, 26], [L.CLOTH_B]: [3, 190] },
    shade: { livorY: 0.42, livor: "#5d4b73", vein: "#39355a" },
    eyes: {
      iris: "#6a7478",
      sclera: "#cfcbb8",
      cloud: 0.85,
      gaze: [0.14, -0.1, -0.05, 0.12],
    },
    face: {
      seed: 31,
      gaunt: 1.2,
      browCol: "28,22,26",
      browW: 0.8,
      browA: 0.55,
      socketL: 1.2,
      socketR: 1.3,
      creases: 0.5,
      veins: 9,
      veinCol: "48,40,82",
      lipCol: "46,26,44",
      mouthBlood: [[2, 0.8]],
      spatter: 0.6,
      tornCorner: [-1],
      bruises: [[26, 30, 9, 6]],
    },
    style: {
      hunch: 5,
      chestHunch: 6,
      headRoll: -20,
      headPitch: 6,
      headYaw: 8,
      neckFwd: 6,
      jaw: 0.22,
      shoulderDrop: 0,
      leanR: -4,
      heldR: 82,
      armSpread: 0.05,
      elbow: 0.2,
      elbowR: 1.1,
      idleWidth: 0.07,
      idleCrouch: 0.04,
      toeIn: !0,
      twitch: 1,
      sway: 0.6,
      shamble: {
        v: 1.3,
        cadence: 2.8,
        duty: 0.58,
        lift: [0.07, 0.06],
        width: 0.075,
        crouch: 0.07,
        bob: 0.03,
        sway: 0.03,
        toeOut: 0.1,
        lean: 8,
        armSwing: 18,
        heel: 0.1,
        toeOff: 0.3,
      },
      run: {
        v: 3.2,
        cadence: 3.2,
        duty: 0.36,
        lift: [0.2, 0.2],
        width: 0.08,
        crouch: 0.12,
        bob: 0.05,
        sway: 0.03,
        lean: 32,
      },
    },
  };
}
const ye = {
    hips: 0,
    spine: 1,
    chest: 2,
    neck: 3,
    head: 4,
    jaw: 5,
    shoulderL: 6,
    upperArmL: 7,
    foreArmL: 8,
    handL: 9,
    shoulderR: 10,
    upperArmR: 11,
    foreArmR: 12,
    handR: 13,
    thighL: 14,
    shinL: 15,
    footL: 16,
    thighR: 17,
    shinR: 18,
    footR: 19,
  },
  Se = (e) => (e > 0 ? "L" : "R"),
  kt = 15;
function Rt(e, o, n, c) {
  const t = [];
  for (let u = 0; u < e.length - 1; u++) {
    const f = e[u],
      d = e[u + 1],
      v = j0.norm(j0.sub(d, f)),
      C = j0.len(j0.sub(d, f)),
      p = c(u, f, d),
      F = j0.norm(j0.sub(p, j0.mul(v, j0.dot(p, v))));
    t.push({ a: f, U: v, N: F, W: j0.cross(v, F), hl: C / 2 });
  }
  const s = Math.min(o, n) * 0.9,
    i = (u, f, d) => {
      let v = 1e9;
      for (const C of t) {
        const p = u - C.a[0],
          F = f - C.a[1],
          J = d - C.a[2],
          n0 = p * C.U[0] + F * C.U[1] + J * C.U[2] - C.hl,
          _ = p * C.W[0] + F * C.W[1] + J * C.W[2],
          G = p * C.N[0] + F * C.N[1] + J * C.N[2];
        v = B(v, W0(n0, _, G, 0, 0, 0, C.hl + n, o, n, s), n);
      }
      return v;
    },
    r = o + n + 0.01,
    l = [0, 1, 2].map((u) => Math.min(...e.map((f) => f[u])) - r),
    a = [0, 1, 2].map((u) => Math.max(...e.map((f) => f[u])) + r);
  return { sdf: i, min: l, max: a };
}
const wo = (...e) => ({
  min: [0, 1, 2].map((o) => Math.min(...e.map((n) => n.min[o]))),
  max: [0, 1, 2].map((o) => Math.max(...e.map((n) => n.max[o]))),
});
function Jt(e) {
  const o = e.x,
    n = e.ankle,
    c = e.len,
    t = e.width,
    s = e.top,
    i = n[2] - 0.078,
    r = i + c,
    l = -Math.sign(o) || 1,
    a = o + l * 0.004,
    u = n[2] + 0.052,
    f = (C, p, F) => {
      let J = _0(C, p, F, o, 0.078, i + 0.05, 0.05, a, 0.06, r - 0.07, 0.046);
      if (
        ((J = B(
          J,
          b0(C, p, F, a, 0.054, r - 0.056, t * 0.53, 0.048, 0.066),
          0.024,
        )),
        (J = B(
          J,
          W0(
            C,
            p,
            F,
            a,
            0.018,
            (i + r) / 2 + 0.002,
            t * 0.57,
            0.018,
            c * 0.5,
            0.01,
          ),
          0.008,
        )),
        (J -= 0.0022 * h(0.03, 0.036, p) * h(0.042, 0.036, p)),
        (J = B(
          J,
          _0(
            C,
            p,
            F,
            n[0],
            n[1] - 0.012,
            n[2] - 0.006,
            0.057,
            n[0],
            s - 0.012,
            n[2] + 0.006,
            0.058,
          ),
          0.035,
        )),
        (J = B(
          J,
          Math.hypot(
            Math.hypot(C - n[0], F - n[2] - 0.006) - 0.057,
            p - s + 0.013,
          ) - 0.0095,
          0.006,
        )),
        (J = f0(J, p - s, 0.006)),
        F > n[2] + 0.02 && Math.abs(C - o) < 0.035 && p > 0.06)
      ) {
        const n0 = p < 0.13 ? d(p) : u + (p - 0.13) * 0.04;
        J = B(
          J,
          W0(
            C,
            p,
            F,
            o,
            (0.085 + s) / 2,
            n0,
            0.014,
            (s - 0.085) / 2,
            0.012,
            0.006,
          ),
          0.012,
        );
        const _ = Math.round((p - 0.09) / 0.021);
        if (_ >= 0 && _ <= Math.floor((s - 0.1) / 0.021)) {
          const G = 0.09 + _ * 0.021,
            y = (G < 0.13 ? d(G) : u + (G - 0.13) * 0.04) + 0.011;
          J = B(
            J,
            K0(
              C,
              p,
              F,
              o - 0.02,
              G - 0.004,
              y - 0.004,
              o + 0.02,
              G + 0.004,
              y - 0.004,
              0.0032,
            ),
            0.003,
          );
        }
      }
      return Math.max(J, -p);
    };
  function d(C) {
    const p = I0((C - 0.085) / 0.045);
    return r - 0.14 + (u - (r - 0.14)) * p;
  }
  return {
    sdf: f,
    lace: (C, p, F) =>
      F > n[2] + 0.045 && Math.abs(C - o) < 0.024 && p > 0.07 && p < s - 0.006,
    min: [o - 0.085, -0.005, i - 0.03],
    max: [o + 0.085, s + 0.02, r + 0.03],
  };
}
function go() {
  const e = {
      hips: [0, 0.985, 0],
      spine: [0, 1.11, -0.012],
      chest: [0, 1.28, -0.02],
      neck: [0, 1.5, -0.035],
      head: [0, 1.632, -0.022],
      jaw: [0, 1.655, -0.004],
      headTop: [0, 1.81, -0.01],
      chin: [0, 1.566, 0.074],
      shoulderL: [0.035, 1.46, -0.03],
      upperArmL: [0.21, 1.438, -0.036],
      shoulderR: [-0.035, 1.46, -0.03],
      upperArmR: [-0.21, 1.438, -0.036],
      thighL: [0.098, 0.945, 0],
      shinL: [0.103, 0.51, 0.018],
      footL: [0.108, 0.1, -0.022],
      thighR: [-0.098, 0.945, 0],
      shinR: [-0.103, 0.51, 0.018],
      footR: [-0.108, 0.1, -0.022],
      toeL: [0.114, 0.02, 0.214],
      toeR: [-0.114, 0.02, 0.214],
      heelL: [0.108, 0.022, -0.09],
      heelR: [-0.108, 0.022, -0.09],
    },
    o = 0.315,
    n = 0.27,
    c = 0.195;
  for (const R of [1, -1]) {
    const T = z0(R),
      K = e["upperArm" + Se(R)];
    ((e["foreArm" + Se(R)] = G0(K, T, o)),
      (e["hand" + Se(R)] = G0(K, T, o + n)),
      (e["handTip" + Se(R)] = G0(K, T, o + n + c * 0.8)));
  }
  const t = [0, 1.69, 0],
    s = [-0.042, -0.118, 0.003],
    i = (R, T, K) =>
      b0(R, T, K, s[0], s[1], s[2], 0.025, 0.021, 0.024) +
      (me(R * 190, T * 190, K * 190) - 0.5) * 0.008,
    r = rt({
      HC: t,
      seed: 41,
      C7: e.neck,
      cran: { c: [0, 0.016, -0.012], r: [0.074, 0.096, 0.1] },
      lowerFace: { c: [0, -0.05, 0.014], r: [0.066, 0.083, 0.08] },
      faceK: 0.035,
      chin: [-0.124, 0.074],
      chinW: 0.025,
      jawSlope: 0.44,
      jawUnder: 0.42,
      faceZ: 0.1,
      cheek: [0.05, -0.024, 0.062],
      hollow: [0.051, -0.068, 0.05],
      hollowK: 0.012,
      brow: [0.042, 0.028, 0.086, 0.0135],
      eyeX: 0.032,
      eyeY: 0,
      eyeZ: 0.068,
      eyeR: 0.0116,
      socket: [0.02, 0.0155, 0.02],
      lid: 0,
      nose: {
        bridge: [0.014, 0.094],
        r0: 0.0068,
        tip: [-0.036, 0.118],
        r1: 0.0105,
        wing: 0.0135,
        tx: 0.002,
      },
      mouthY: -0.078,
      mouthW: 0.025,
      mouthZ: 0.094,
      mouthGap: 0.0035,
      jawHinge: [-0.04, -0.01],
      jawSideX: 0.046,
      skullBase: -0.06,
      ear: [0.075, -0.014, -0.008, 0.031, 0.02],
      neckTop: [-0.07, -0.028],
      neckR: [0.05, 0.062],
      cordR: 0.0135,
      adam: [-0.146, 0.042],
      missing: [-3],
      broken: [2, -6],
      teethScale: 1,
      arch: 13,
      neckExtra: (R, T, K, l0) =>
        Math.abs(T - s[1]) > 0.05 || R > 0
          ? l0
          : ((l0 = B(
              l0,
              b0(
                R,
                T,
                K,
                s[0] - 0.003,
                s[1],
                s[2] + 0.002,
                0.035,
                0.03,
                0.033,
              ) - 0.001,
              0.012,
            )),
            f0(l0, -i(R, T, K), 0.0025)),
      rect: [-0.1, -0.165, 0.2, 0.27],
    }),
    l = [0, 0.02, -0.014],
    a = [0.106, 0.116, 0.128],
    u = (R, T) => 0.031 - 0.086 * (1 - R) * 0.5 - 0.022 * T,
    f = (R, T, K) => {
      const l0 = Math.atan2(R, K - l[2]),
        h0 = Math.cos(l0),
        C0 = 1 - h0 * h0,
        S0 = u(h0, C0),
        F0 = (0.005 + 0.017 * (1 - h0) * 0.5) * h(S0 + 0.045, S0, T);
      let E0 = b0(R, T, K, l[0], l[1], l[2], a[0] + F0, a[1], a[2] + F0);
      E0 = f0(E0, S0 - T, 0.004);
      const D0 = S0 + 0.034 + 0.01 * h0,
        $0 = f0(
          b0(
            R,
            T,
            K,
            l[0],
            l[1],
            l[2],
            a[0] + 0.0045,
            a[1] + 0.0045,
            a[2] + 0.0045,
          ),
          Math.abs(T - D0) - 0.0095,
          0.002,
        );
      return ((E0 = B(E0, $0, 0.002)), E0);
    },
    d = (R, T, K) => f(R - t[0], T - t[1], K - t[2]),
    v = (R, T, K) => {
      const l0 = R - t[0],
        h0 = T - t[1],
        C0 = K - t[2],
        S0 = Math.atan2(l0, C0 - l[2]),
        F0 = Math.cos(S0),
        D0 = u(F0, 1 - F0 * F0) + 0.034 + 0.01 * F0;
      return Math.abs(h0 - D0) < 0.0105 &&
        b0(
          l0,
          h0,
          C0,
          l[0],
          l[1],
          l[2],
          a[0] + 0.002,
          a[1] + 0.002,
          a[2] + 0.002,
        ) > 0
        ? L.BELT
        : L.HAIR;
    },
    C = (R, T) => [
      [R * 0.1, -0.026, 0.02],
      [R * 0.094, -0.07, 0.034],
      [R * 0.085, -0.108 - T, 0.04],
    ],
    p = (R) => [R[0] + t[0], R[1] + t[1], R[2] + t[2]],
    F = Rt(C(1, 0).map(p), 0.0085, 0.0022, () => [1, 0, 0.15]),
    J = Rt(C(-1, 0.035).map(p), 0.0085, 0.0022, () => [-1, 0, 0.15]),
    n0 = p([-0.084, -0.146, 0.041]),
    _ = (R, T, K) =>
      Math.min(
        F.sdf(R, T, K),
        J.sdf(R, T, K),
        W0(R, T, K, n0[0], n0[1], n0[2], 0.004, 0.013, 0.0085, 0.002),
      ),
    G = wo(F, J),
    y = (R, T, K) => {
      let l0 = b0(R, T, K, 0, 1.3, -0.02, 0.152, 0.17, 0.1);
      ((l0 = B(l0, b0(R, T, K, 0, 1.13, -0.006, 0.128, 0.14, 0.088), 0.06)),
        (l0 = B(l0, b0(R, T, K, 0, 0.995, -0.006, 0.155, 0.1, 0.1), 0.05)),
        (l0 = B(
          l0,
          K0(R, T, K, -0.19, 1.43, -0.036, 0.19, 1.43, -0.036, 0.056),
          0.07,
        )));
      for (const h0 of [-1, 1])
        ((l0 = B(
          l0,
          K0(R, T, K, h0 * 0.035, 1.5, -0.046, h0 * 0.175, 1.452, -0.04, 0.047),
          0.05,
        )),
          (l0 = B(
            l0,
            b0(R, T, K, h0 * 0.07, 1.33, 0.05, 0.075, 0.06, 0.045),
            0.04,
          )),
          (l0 = B(
            l0,
            b0(R, T, K, h0 * 0.078, 1.36, -0.09, 0.062, 0.078, 0.028),
            0.03,
          )),
          (l0 = B(
            l0,
            b0(R, T, K, h0 * 0.2, 1.405, -0.032, 0.058, 0.068, 0.058),
            0.04,
          )));
      return l0;
    },
    E = z0(1),
    c0 = z0(-1),
    u0 = e.upperArmL,
    q = e.upperArmR,
    $ = e.foreArmL,
    x = e.foreArmR,
    e0 = e.handL,
    H = e.handR,
    z = {};
  for (const R of [1, -1]) {
    const T = R > 0 ? u0 : q,
      K = R > 0 ? E : c0,
      l0 = [
        R * Math.cos((40 * Math.PI) / 180) * 0.94,
        Math.sin((40 * Math.PI) / 180) * 0.94,
        0.34,
      ],
      h0 = j0.add(G0(T, K, 0.12), j0.mul(j0.norm(l0), 0.058));
    z[R] = { c: h0, U: K, N: j0.norm(l0) };
  }
  const Z = (R, T, K) => {
      let h0 = y(R, T, K) - 0.011;
      const C0 = Math.atan2(R, K);
      h0 -=
        0.003 *
        h(1.12, 1.04, T) *
        h(0.99, 1.03, T) *
        (0.5 + 0.5 * Math.sin(C0 * 9 + Math.sin(T * 31) * 1.3));
      for (const S0 of [1, -1]) {
        const F0 = S0 > 0 ? u0 : q,
          E0 = S0 > 0 ? $ : x,
          D0 = S0 > 0 ? e0 : H,
          $0 = S0 > 0 ? E : c0;
        let V0 = _0(
          R,
          T,
          K,
          F0[0] - S0 * 0.012,
          F0[1] + 0.006,
          F0[2],
          0.063,
          E0[0],
          E0[1],
          E0[2],
          0.052,
        );
        V0 = B(
          V0,
          _0(
            R,
            T,
            K,
            E0[0],
            E0[1],
            E0[2],
            0.052,
            D0[0] - $0[0] * 0.02,
            D0[1] - $0[1] * 0.02,
            D0[2],
            0.044,
          ),
          0.014,
        );
        const Q0 = (R - F0[0]) * $0[0] + (T - F0[1]) * $0[1];
        ((V0 -=
          0.0035 *
          Math.pow(0.5 + 0.5 * Math.sin(Q0 * 90 + (K - F0[2]) * 20), 2) *
          h(0.24, 0.3, Q0) *
          h(0.4, 0.33, Q0)),
          (V0 -=
            0.0025 *
            Math.pow(0.5 + 0.5 * Math.sin(Q0 * 60 + 1.2), 3) *
            h(0.42, 0.5, Q0)),
          (V0 = f0(V0, Q0 - (o + n - 0.018), 0.004)));
        const X0 = z[S0],
          k = R - X0.c[0],
          W = T - X0.c[1],
          X = K - X0.c[2],
          r0 = k * X0.U[0] + W * X0.U[1] + X * X0.U[2],
          L0 = k * X0.N[0] + W * X0.N[1] + X * X0.N[2];
        if (Math.abs(r0) < 0.08 && L0 > -0.03) {
          const M0 = j0.cross(X0.U, X0.N),
            m = k * M0[0] + W * M0[1] + X * M0[2];
          let M = W0(r0, m, L0, 0.005, 0, 0, 0.05, 0.036, 0.007, 0.005);
          ((M = B(
            M,
            W0(r0, m, L0, -0.036, 0, 0.0035, 0.014, 0.039, 0.006, 0.004),
            0.002,
          )),
            (V0 = B(V0, M, 0.006)));
        }
        h0 = B(h0, V0, 0.035);
      }
      h0 = f0(h0, -K0(R, T, K, 0, 1.45, -0.03, 0, 1.8, -0.035, 0.064), 0.008);
      {
        const S0 = Math.hypot(R, (K + 0.032) * 1.05) - 0.072;
        let F0 = W0(S0, T, 0, 0, 1.5, 0, 0.0055, 0.03, 1, 0.004);
        ((F0 = f0(F0, Math.min(0.018 - Math.abs(R), K - 0.01), 0.003)),
          (h0 = B(h0, F0, 0.008)));
      }
      return (
        (h0 = f0(
          h0,
          Math.min(0.018 - Math.abs(R) + (1.46 - T) * 0.3, K - 0.02),
          0.004,
        )),
        (h0 = f0(h0, 1 - T, 0.01)),
        h0
      );
    },
    p0 = (R) => 0.107 - 0.9 * R * R,
    j = (R) => -0.132 + 0.9 * R * R,
    t0 = [-0.078, 0, 0.078],
    A = {};
  for (const R of [1, -1])
    A[R] = Rt(
      [
        [R * 0.098, 1.425, 0.13],
        [R * 0.107, 1.506, 0.083],
        [R * 0.117, 1.548, -0.012],
        [R * 0.111, 1.52, -0.11],
        [R * 0.1, 1.44, -0.16],
      ],
      0.026,
      0.0085,
      (T, K, l0) => {
        const h0 = j0.mul(j0.add(K, l0), 0.5);
        return j0.norm([h0[0] * 0.6, h0[1] - 1.3, h0[2] + 0.03]);
      },
    );
  const w = (R, T, K) => {
      let h0 = y(R, T, K) - 0.03;
      ((h0 = f0(h0, T - 1.33, 0.012)), (h0 = f0(h0, 1.07 - T, 0.008)));
      let C0 = W0(R, T, K - p0(R), 0, 1.275, 0, 0.138, 0.175, 0.029, 0.02);
      C0 = f0(C0, -b0(R, T, K, 0, 1.475, 0.11, 0.08, 0.05, 0.1), 0.012);
      let S0 = W0(R, T, K - j(R), 0, 1.285, 0, 0.14, 0.175, 0.028, 0.02);
      if (
        ((S0 = f0(S0, -b0(R, T, K, 0, 1.49, -0.14, 0.075, 0.04, 0.1), 0.012)),
        (h0 = B(h0, Math.min(C0, S0), 0.02)),
        Math.abs(R) < 0.14 &&
          (K > 0.06 || K < -0.1) &&
          T > 1.13 &&
          T < 1.43 &&
          (h0 -=
            0.0016 *
            (0.5 + 0.5 * Math.cos(((T - 1.1) * 2 * Math.PI) / 0.026)) *
            h(1.13, 1.16, T) *
            h(1.43, 1.4, T)),
        (h0 = B(h0, Math.min(A[1].sdf(R, T, K), A[-1].sdf(R, T, K)), 0.012)),
        K > 0.08 && T < 1.23)
      ) {
        for (const F0 of t0) {
          const E0 = p0(F0) + 0.029 + 0.022;
          let D0 = W0(R, T, K, F0, 1.13, E0, 0.034, 0.062, 0.023, 0.008);
          ((D0 = f0(
            D0,
            -W0(R, T, K, F0, 1.19, E0 + 0.001, 0.025, 0.06, 0.0145, 0.004),
            0.003,
          )),
            (h0 = B(h0, D0, 0.005)));
        }
        h0 = B(
          h0,
          W0(
            R,
            T,
            K,
            0,
            1.176,
            p0(0) + 0.029 + 0.049,
            0.03,
            0.022,
            0.0045,
            0.003,
          ),
          0.004,
        );
      }
      return h0;
    },
    Y = (R, T, K) =>
      Math.min(A[1].sdf(R, T, K), A[-1].sdf(R, T, K)) < 0.002 && T > 1.43
        ? L.BELT
        : L.CLOTH_B,
    b = 1.022,
    g = (R, T, K) => {
      const l0 = Math.hypot(R / 0.163, (K + 0.004) / 0.113) - 1;
      return W0(l0 * 0.135, T, 0, 0, b, 0, 0.0065, 0.021, 1, 0.003);
    },
    N = (R, T, K) => W0(R, T, K, 0, b, 0.118, 0.032, 0.024, 0.008, 0.004),
    V = (R) => {
      const T = e["shin" + Se(R)];
      return [T[0] + R * 0.004, T[1] + 0.01, T[2] + 0.075];
    },
    O = (R, T, K) => {
      let l0 = b0(R, T, K, 0, 0.99, -0.004, 0.158, 0.11, 0.108);
      l0 = B(l0, W0(R, T, K, 0, 1.02, -0.004, 0.15, 0.03, 0.1, 0.05), 0.02);
      for (const h0 of [-1, 1]) {
        const C0 = e["thigh" + Se(h0)],
          S0 = e["shin" + Se(h0)],
          F0 = e["foot" + Se(h0)];
        let E0 = _0(
          R,
          T,
          K,
          C0[0],
          C0[1] - 0.02,
          C0[2],
          0.09,
          S0[0],
          S0[1],
          S0[2] + 0.004,
          0.066,
        );
        ((E0 = B(
          E0,
          _0(
            R,
            T,
            K,
            S0[0],
            S0[1],
            S0[2] + 0.004,
            0.066,
            F0[0],
            0.27,
            F0[2] + 0.014,
            0.06,
          ),
          0.03,
        )),
          (E0 -= 0.011 * h(0.345, 0.29, T) * h(0.25, 0.275, T)),
          (E0 -=
            0.0035 *
            h(S0[1] + 0.1, S0[1], T) *
            h(S0[1] - 0.1, S0[1], T) *
            Math.pow(0.5 + 0.5 * Math.sin(T * 130 + R * 25), 2) *
            h(0.02, -0.03, K - S0[2])));
        const D0 = h0 * 0.172,
          $0 = 0.735;
        if (Math.abs(T - $0) < 0.1 && h0 * R > 0.12) {
          let X0 = W0(R, T, K, D0, $0, 0.012, 0.016, 0.068, 0.056, 0.012);
          ((X0 = B(
            X0,
            W0(
              R,
              T,
              K,
              D0 + h0 * 0.005,
              $0 + 0.06,
              0.012,
              0.014,
              0.014,
              0.06,
              0.006,
            ),
            0.003,
          )),
            (E0 = B(E0, X0, 0.01)));
        }
        l0 = B(l0, E0, 0.05);
        const V0 = V(h0);
        let Q0 = b0(R, T, K, V0[0], V0[1], V0[2] - 0.01, 0.056, 0.074, 0.034);
        ((Q0 = f0(Q0, V0[2] - 0.035 - K, 0.01)), (l0 = B(l0, Q0, 0.006)));
        for (const X0 of [S0[1] + 0.085, S0[1] - 0.07]) {
          if (Math.abs(T - X0) > 0.02) continue;
          const k = Math.hypot(R - S0[0], K - S0[2] - 0.006) - 0.07;
          l0 = B(l0, W0(k, T, 0, 0, X0, 0, 0.0045, 0.0095, 1, 0.003), 0.003);
        }
      }
      return (
        (l0 = f0(l0, T - 1.045, 0.008)),
        (l0 = f0(l0, 0.25 - T, 0.004)),
        (l0 = Math.min(l0, g(R, T, K))),
        (l0 = B(l0, N(R, T, K), 0.002)),
        l0
      );
    },
    i0 = (R, T, K) => {
      if (N(R, T, K) < 0.0015) return kt;
      if (g(R, T, K) < 0.0016) return L.BELT;
      for (const l0 of [-1, 1]) {
        const h0 = V(l0),
          C0 = e["shin" + Se(l0)];
        if (
          T > C0[1] - 0.09 &&
          T < C0[1] + 0.11 &&
          Math.abs(R - h0[0]) < 0.075
        ) {
          if (
            f0(
              b0(R, T, K, h0[0], h0[1], h0[2] - 0.01, 0.056, 0.074, 0.034),
              h0[2] - 0.035 - K,
              0.01,
            ) < 0.0018
          )
            return L.TUBE;
          for (const F0 of [C0[1] + 0.085, C0[1] - 0.07])
            if (
              Math.abs(T - F0) < 0.011 &&
              Math.hypot(R - C0[0], K - C0[2] - 0.006) > 0.068
            )
              return L.BELT;
        }
      }
      return L.CLOTH_A;
    },
    m0 = [
      [0, 1.53, -0.1],
      [0.05, 1.52, -0.075],
      [0.07, 1.495, -0.02],
      [0.062, 1.47, 0.045],
      [0.034, 1.44, 0.118],
      [0.006, 1.418, 0.142],
    ],
    S = [
      ...m0
        .slice()
        .reverse()
        .map((R) => [-R[0] - 0.012, R[1], R[2]]),
      ...m0.slice(1),
    ],
    P = [0, 1.393, 0.147],
    s0 = [0.009, 1.387, 0.151],
    o0 = (R, T, K) => {
      let l0 = 1e9;
      for (let h0 = 0; h0 < S.length - 1; h0++) {
        const C0 = S[h0],
          S0 = S[h0 + 1];
        l0 = Math.min(
          l0,
          K0(R, T, K, C0[0], C0[1], C0[2], S0[0], S0[1], S0[2], 0.0019),
        );
      }
      return (
        (l0 = Math.min(
          l0,
          W0(R, T, K, P[0], P[1], P[2], 0.0125, 0.021, 0.0016, 0.0015),
        )),
        (l0 = Math.min(
          l0,
          W0(
            R - (T - s0[1]) * 0.25,
            T,
            K,
            s0[0],
            s0[1],
            s0[2],
            0.0125,
            0.021,
            0.0016,
            0.0015,
          ),
        )),
        l0
      );
    },
    g0 = (R) => ({
      wrist: e["hand" + Se(R)],
      dir: z0(R),
      side: R,
      palm: [0.1, 0.088, 0.03],
      fingers: [
        [0.096, 0.0088],
        [0.104, 0.009],
        [0.098, 0.0086],
        [0.08, 0.0078],
      ],
      thumb: [0.07, 0.0102],
      curl: R > 0 ? [0.45, 0.8, 0.55] : [0.32, 0.62, 0.42],
      bony: 0.45,
      seed: R > 0 ? 43 : 44,
      spread: 0.07,
    }),
    w0 = {};
  for (const R of [1, -1]) {
    const T = g0(R),
      K = nt(T),
      l0 = T.palm[0],
      h0 = T.palm[1],
      C0 = K.frame,
      S0 = (E0, D0) =>
        D0 > h0 * 0.42 && E0 > l0 * 0.38
          ? h(l0 * 0.62, l0 * 0.5, E0)
          : h(l0 + 0.016, l0 + 0.008, E0),
      F0 = (E0, D0, $0) => S0(C0.lx(E0, D0, $0), C0.lz(E0, D0, $0));
    w0[R] = {
      sdf: (E0, D0, $0) => {
        const V0 = C0.lx(E0, D0, $0);
        return (
          K.sdf(E0, D0, $0) -
          0.0014 * S0(V0, C0.lz(E0, D0, $0)) -
          0.0026 * h(-0.012, -0.004, V0) * h(0.03, 0.022, V0)
        );
      },
      mat: (E0, D0, $0) =>
        K.nailAt(E0, D0, $0) ? L.NAIL : F0(E0, D0, $0) > 0.5 ? L.SOCK : L.SKIN,
      min: K.min,
      max: K.max,
    };
  }
  const k0 = {
      1: Jt({
        ankle: e.footL,
        x: e.footL[0],
        len: 0.3,
        width: 0.112,
        top: 0.272,
      }),
      [-1]: Jt({
        ankle: e.footR,
        x: e.footR[0],
        len: 0.3,
        width: 0.112,
        top: 0.272,
      }),
    },
    q0 = (R, T, K, l0) => {
      l0[d0.head] += 1;
    },
    B0 = (R, T, K, l0) => {
      const h0 = h(-0.06, 0.02, K);
      ((l0[d0.neck] += 1 - h0), (l0[d0.chest] += h0));
    },
    P0 = (R, T, K) =>
      i(R - t[0], T - t[1], K - t[2]) < 0.0035 ? L.WOUND : L.SKIN,
    y0 = [
      {
        name: "head",
        sdf: r.sdf,
        mat: r.mat,
        weights: r.weights,
        min: r.min,
        max: r.max,
        res: 0.003,
      },
      {
        name: "neck",
        sdf: r.neck.sdf,
        mat: P0,
        weights: r.weights,
        min: r.neck.min,
        max: r.neck.max,
        res: 0.0042,
      },
      {
        name: "helmet",
        sdf: d,
        mat: v,
        weights: q0,
        min: [t[0] - 0.14, t[1] - 0.085, t[2] - 0.175],
        max: [t[0] + 0.14, t[1] + 0.15, t[2] + 0.14],
        res: 0.0042,
        aoK: 0.7,
      },
      {
        name: "straps",
        sdf: _,
        mat: (R, T, K) =>
          W0(R, T, K, n0[0], n0[1], n0[2], 0.0045, 0.0135, 0.009, 0.002) < 0.001
            ? L.TUBE
            : L.BELT,
        weights: q0,
        min: G.min,
        max: G.max,
        res: 0.0022,
      },
      {
        name: "shirt",
        sdf: Z,
        mat: L.CLOTH_A,
        res: 0.0082,
        sigma: 0.026,
        min: [-0.66, 0.95, -0.17],
        max: [0.66, 1.58, 0.16],
        bones: [
          "hips",
          "spine",
          "chest",
          "neck",
          "shoulderL",
          "upperArmL",
          "foreArmL",
          "shoulderR",
          "upperArmR",
          "foreArmR",
        ],
      },
      {
        name: "vest",
        sdf: w,
        mat: Y,
        res: 0.0072,
        sigma: 0.034,
        min: [-0.25, 1.04, -0.2],
        max: [0.25, 1.58, 0.22],
        bones: ["hips", "spine", "chest", "shoulderL", "shoulderR"],
      },
      {
        name: "tags",
        sdf: o0,
        mat: kt,
        weights: B0,
        min: [-0.085, 1.365, -0.105],
        max: [0.085, 1.54, 0.16],
        res: 0.0019,
        aoK: 0.4,
      },
      {
        name: "trousers",
        sdf: O,
        mat: i0,
        res: 0.0084,
        sigma: 0.024,
        min: [-0.27, 0.23, -0.16],
        max: [0.27, 1.07, 0.15],
        bones: ["hips", "spine", "thighL", "shinL", "thighR", "shinR"],
      },
      {
        name: "handL",
        sdf: w0[1].sdf,
        mat: w0[1].mat,
        min: w0[1].min,
        max: w0[1].max,
        res: 0.0031,
        bones: ["handL", "foreArmL"],
        sigma: 0.015,
      },
      {
        name: "handR",
        sdf: w0[-1].sdf,
        mat: w0[-1].mat,
        min: w0[-1].min,
        max: w0[-1].max,
        res: 0.0031,
        bones: ["handR", "foreArmR"],
        sigma: 0.015,
      },
      {
        name: "bootL",
        sdf: k0[1].sdf,
        mat: (R, T, K) => (k0[1].lace(R, T, K) ? L.BELT : L.SHOE),
        min: k0[1].min,
        max: k0[1].max,
        res: 0.0048,
        bones: ["footL", "shinL"],
        sigma: 0.02,
      },
      {
        name: "bootR",
        sdf: k0[-1].sdf,
        mat: (R, T, K) => (k0[-1].lace(R, T, K) ? L.BELT : L.SHOE),
        min: k0[-1].min,
        max: k0[-1].max,
        res: 0.0048,
        bones: ["footR", "shinR"],
        sigma: 0.02,
      },
    ],
    x0 = [s[0] + t[0], s[1] + t[1], s[2] + t[2]];
  return {
    kind: "soldier",
    height: 1.8,
    J: e,
    HC: t,
    head: r,
    parts: y0,
    col: (R, T, K, l0, h0) => {
      let C0 = 0,
        S0 = 0,
        F0 = 0,
        E0 = 0;
      const D0 = oe(R * 9, T * 9, K * 9, 3),
        $0 = -0.06 - (1.5 - T) * 0.12,
        V0 = h(0.5, 0.75, me(R * 70, 3.3, K * 30)),
        Q0 =
          (h(0.045, 0.012, Math.abs(R - $0)) * (0.55 + 0.45 * V0) +
            V0 * h(0.08, 0.04, Math.abs(R - $0)) * 0.6) *
          h(1.2, 1.44, T) *
          h(0, 0.05, K),
        X0 =
          h(1.43, 1.47, T) *
          h(0.01, -0.05, R) *
          h(-0.13, -0.06, R) *
          (0.7 + 0.5 * D0);
      if (h0 === "shirt")
        ((S0 = 0.3 + 0.35 * D0 + 0.25 * h(1.15, 1, T)),
          (C0 = Math.max(Q0 * 0.9, X0, ue(R, T, K, 30, 0.72) * 0.85)),
          (E0 = Math.max(
            h(0.045, 0.03, Math.hypot(R - x[0], T - x[1], K - x[2] + 0.05)),
            h(0.64, 0.7, oe(R * 8 + 5, T * 8, K * 8, 2)) *
              h(0.44, 0.47, R) *
              h(0.58, 0.55, R),
          )));
      else if (h0 === "vest")
        ((S0 = 0.35 + 0.4 * D0 + 0.2 * h(1.2, 1.07, T)),
          (C0 = Math.max(Q0 * 0.85, X0 * 0.8, ue(R, T, K, 26, 0.7) * 0.9)));
      else if (h0 === "trousers")
        ((S0 =
          0.35 +
          0.35 * D0 +
          0.55 * h(0.45, 0.26, T) +
          0.5 * h(0.07, 0.02, Math.abs(T - 0.5)) * h(0.03, 0.08, K)),
          (C0 = ue(R, T, K, 26, 0.73) * h(1, 0.55, T) * 0.9),
          (E0 =
            h(0.028, 0.018, Math.hypot(R - 0.06, T - 0.64)) *
            h(0.04, 0.08, K)));
      else if (h0 === "handL" || h0 === "handR")
        ((E0 = 0.6),
          (S0 = 0.5 + 0.3 * D0),
          (F0 = 0.35 * h(0.4, 0.7, D0)),
          (C0 = h(0.6, 0.78, oe(R * 18, T * 18, K * 18, 2)) * 0.9),
          l0 === L.NAIL && ((S0 = 0.9), (C0 = 0.5)));
      else if (h0 === "head" || h0 === "neck") {
        ((E0 = 0.55), (F0 = 0.22 * h(0.5, 0.72, D0)), (S0 = 0.12 + 0.2 * D0));
        const k = Math.hypot(R - x0[0], T - x0[1], K - x0[2]);
        ((C0 =
          h(0.05, 0.02, k) +
          h(0.02, 0, Math.abs(R - x0[0] + 0.006)) *
            h(x0[1], x0[1] - 0.04, T) *
            0.9),
          (F0 = Math.max(F0, h(0.065, 0.03, k) * 0.85)),
          h0 === "head" &&
            (C0 = Math.max(
              C0,
              ue(R, T, K, 34, 0.74) * 0.6 * h(0, 0.05, K - t[2]),
            )));
      } else
        h0 === "helmet"
          ? ((S0 = 0.35 + 0.45 * D0),
            (C0 = ue(R, T, K, 22, 0.74) * 0.8 * h(0, -0.06, R)))
          : h0 === "bootL" || h0 === "bootR"
            ? (S0 = 0.5 + 0.45 * h(0.12, 0.02, T) + 0.3 * D0)
            : h0 === "straps"
              ? (S0 = 0.4)
              : h0 === "tags" &&
                ((S0 = 0.3 + 0.3 * D0), (C0 = 0.35 * h(0.5, 0.7, D0)));
      return [I0(C0), I0(S0), I0(F0), I0(E0)];
    },
    segA: { hips: [0, 0.93, -0.005] },
    rad: {
      hips: 0.13,
      spine: 0.13,
      chest: 0.14,
      neck: 0.055,
      head: 0.09,
      jaw: 0.04,
      shoulderL: 0.05,
      upperArmL: 0.056,
      foreArmL: 0.046,
      handL: 0.032,
      shoulderR: 0.05,
      upperArmR: 0.056,
      foreArmR: 0.046,
      handR: 0.032,
      thighL: 0.085,
      shinL: 0.063,
      footL: 0.04,
      thighR: 0.085,
      shinR: 0.063,
      footR: 0.04,
    },
    hit: [
      ["head", [0, 1.695, -0.004], [0, 1.73, -0.014], 0.13, "head"],
      ["chest", [0, 1.24, -0.012], [0, 1.44, -0.022], 0.2, "body"],
      ["spine", [0, 1, -0.005], [0, 1.17, 0], 0.16, "body"],
      ["spine", [0, 1.1, 0.1], [0, 1.16, 0.1], 0.1, "body"],
      ["neck", e.neck, [0, 1.62, -0.02], 0.062, "body"],
      ["upperArmL", e.upperArmL, e.foreArmL, 0.066, "body"],
      ["foreArmL", e.foreArmL, e.handL, 0.056, "body"],
      ["upperArmR", e.upperArmR, e.foreArmR, 0.066, "body"],
      ["foreArmR", e.foreArmR, e.handR, 0.056, "body"],
      ["handL", e.handL, e.handTipL, 0.05, "body"],
      ["handR", e.handR, e.handTipR, 0.05, "body"],
      ["thighL", e.thighL, e.shinL, 0.097, "legs"],
      ["shinL", e.shinL, e.footL, 0.076, "legs"],
      ["thighR", e.thighR, e.shinR, 0.097, "legs"],
      ["shinR", e.shinR, e.footR, 0.076, "legs"],
      ["footL", [0.108, 0.062, -0.055], [0.114, 0.052, 0.18], 0.06, "legs"],
      ["footR", [-0.108, 0.062, -0.055], [-0.114, 0.052, 0.18], 0.06, "legs"],
    ],
    palette: {
      [L.SKIN]: {
        base: "#8a8e89",
        shade: "#4a4c5a",
        deep: "#2d2b37",
        line: "#1a1720",
        type: "skin",
      },
      [L.FACE]: {
        base: "#8e928c",
        shade: "#4c4e5d",
        deep: "#2f2d39",
        line: "#1a1720",
        type: "skin",
      },
      [L.EYE]: {
        base: "#cacdc2",
        shade: "#7c8082",
        line: "#1a1720",
        type: "eye",
      },
      [L.MOUTH]: {
        base: "#1c0609",
        shade: "#090203",
        deep: "#050102",
        line: "#0f0406",
        type: "mouth",
      },
      [L.TEETH]: {
        base: "#c6bb98",
        shade: "#6d6653",
        line: "#241d17",
        type: "teeth",
      },
      [L.HAIR]: {
        base: "#434638",
        shade: "#1d1f18",
        deep: "#10110d",
        line: "#0d0e0a",
        type: "leather",
      },
      [L.CLOTH_A]: {
        base: "#4b5040",
        shade: "#22261d",
        deep: "#14170f",
        line: "#101209",
        type: "cloth",
        fold: 0.3,
      },
      [L.CLOTH_B]: {
        base: "#5f5647",
        shade: "#2b251d",
        deep: "#18140f",
        line: "#140f0b",
        type: "cloth",
        fold: 0.12,
      },
      [L.CLOTH_C]: {
        base: "#5a5f49",
        shade: "#282c22",
        deep: "#171a14",
        line: "#101209",
        type: "cloth",
      },
      [L.SHOE]: {
        base: "#2c2622",
        shade: "#0f0c0b",
        deep: "#070606",
        line: "#060505",
        type: "leather",
      },
      [L.NAIL]: {
        base: "#857f6d",
        shade: "#43403a",
        line: "#1a1720",
        type: "teeth",
      },
      [L.SOCK]: {
        base: "#2a2a2c",
        shade: "#0f0f11",
        deep: "#08080a",
        line: "#070708",
        type: "leather",
      },
      [L.BELT]: {
        base: "#3b3c30",
        shade: "#171812",
        deep: "#0c0d0a",
        line: "#0a0a08",
        type: "cloth",
        fold: 0,
      },
      [L.WOUND]: {
        base: "#6e1219",
        shade: "#2d0509",
        deep: "#1a0305",
        line: "#12030a",
        type: "wound",
      },
      [L.TUBE]: {
        base: "#1f2022",
        shade: "#0b0b0c",
        deep: "#060607",
        line: "#050506",
        type: "plastic",
      },
      [kt]: {
        base: "#56544e",
        shade: "#262522",
        deep: "#141311",
        line: "#121210",
        type: "leather",
      },
    },
    pattern: { [L.CLOTH_A]: [4, 7.5] },
    shade: {
      livorY: 0.62,
      livor: "#5d5570",
      bruise: "#5d4e66",
      vein: "#393752",
    },
    eyes: {
      iris: "#6d7c84",
      sclera: "#cec8b2",
      cloud: 0.8,
      gaze: [0.05, -0.05, -0.05, -0.07],
    },
    face: {
      seed: 41,
      gaunt: 0.55,
      brows: !0,
      browCol: "36,30,28",
      browW: 1.3,
      browA: 0.8,
      socketL: 1.2,
      socketR: 1.1,
      creases: 0.28,
      veins: 6,
      stubble: !0,
      stubbleCol: "46,42,42",
      lipCol: "66,34,46",
      mouthBlood: [[-7, 0.45]],
      spatter: 0.7,
      bruises: [[-40, -12, 9, 7, 0.4]],
      extra: (R, T) => {
        const { R: K, vstroke: l0, bez: h0, bloodRun: C0, blob: S0, F: F0 } = T,
          E0 = F0.mouthY;
        (S0(R, 7, E0 - 5, 7, 4, "120,40,52", 0.55),
          (R.fillStyle = "rgba(40,4,8,0.95)"),
          l0(
            R,
            [
              [6.2, E0 - 1],
              [7.4, E0 - 5],
              [6.6, E0 - 9.5],
            ],
            (D0) => 1.3 * Math.sin(D0 * Math.PI) + 0.3,
          ),
          (R.fillStyle = "rgba(120,18,26,0.9)"),
          l0(
            R,
            [
              [5.2, E0 - 1.5],
              [6.2, E0 - 5],
              [5.8, E0 - 8.5],
            ],
            0.5,
          ),
          C0(R, K, 7, E0 - 9, 4, 14, "70,10,14", 0.85),
          (R.fillStyle = "rgba(110,40,44,0.5)"));
        for (let D0 = 0; D0 < 16; D0++) {
          const $0 = -14 + K() * 18,
            V0 = F0.chinY + 10 + K() * 6;
          l0(
            R,
            [
              [$0, V0],
              [$0 + 3 + K() * 2, V0 + 0.6],
            ],
            0.45,
          );
        }
        ((R.fillStyle = "rgba(60,6,10,0.9)"),
          l0(
            R,
            h0(
              [-40, F0.browY - 2],
              [-35, F0.browY + 1],
              [-29, F0.browY + 1.5],
              [-24, F0.browY],
            ),
            (D0) => Math.sin(D0 * Math.PI) * 1.6 + 0.3,
          ),
          C0(R, K, -33, F0.browY - 3, 6, 18, "70,10,14", 0.7));
      },
    },
    style: {
      hunch: 6,
      chestHunch: 5,
      headRoll: 12,
      headPitch: 20,
      headYaw: -5,
      neckFwd: 12,
      jaw: 0.16,
      shoulderDrop: 0.08,
      leanR: 3,
      armSpread: 0.22,
      elbow: 0.12,
      elbowR: 0.18,
      idleWidth: 0.15,
      idleCrouch: 0.03,
      sway: 0.55,
      twitch: 0.06,
      shamble: {
        v: 1,
        cadence: 2.3,
        duty: 0.56,
        lift: [0.05, 0.045],
        width: 0.12,
        crouch: 0.02,
        bob: 0.032,
        sway: 0.03,
        roll: 4,
        yaw: 4,
        toeOut: 0.12,
        lean: 8,
        armSwing: 8,
        heel: 0.16,
        toeOff: 0.2,
      },
      run: {
        v: 3.2,
        cadence: 3.2,
        duty: 0.3,
        lift: [0.19, 0.17],
        width: 0.1,
        crouch: 0.05,
        bob: 0.05,
        sway: 0.03,
        lean: 22,
      },
      runArms: "pump",
    },
  };
}
const Ne = (e) => (e > 0 ? "L" : "R"),
  Qt = 15;
function Xt(e) {
  return (o, n) => {
    let c = 0;
    for (; c < e.length - 2 && o < e[c + 1][0];) c++;
    const t = e[c],
      s = e[c + 1],
      i = I0((o - t[0]) / (s[0] - t[0])),
      r = i * i * (3 - 2 * i);
    for (let l = 1; l < t.length; l++) n[l - 1] = t[l] + (s[l] - t[l]) * r;
    return n;
  };
}
function vo() {
  const e = {
      hips: [0, 0.855, 0],
      spine: [0, 0.96, -0.01],
      chest: [0, 1.11, -0.02],
      neck: [0, 1.325, -0.035],
      head: [0, 1.435, -0.02],
      jaw: [0, 1.458, -0.004],
      headTop: [0, 1.6, -0.01],
      chin: [0, 1.382, 0.056],
      shoulderL: [0.02, 1.305, -0.028],
      upperArmL: [0.152, 1.287, -0.034],
      shoulderR: [-0.02, 1.305, -0.028],
      upperArmR: [-0.152, 1.287, -0.034],
      thighL: [0.08, 0.822, 0],
      shinL: [0.083, 0.45, 0.012],
      footL: [0.086, 0.078, -0.016],
      thighR: [-0.08, 0.822, 0],
      shinR: [-0.083, 0.45, 0.012],
      footR: [-0.086, 0.078, -0.016],
      toeL: [0.09, 0.016, 0.17],
      toeR: [-0.09, 0.016, 0.17],
      heelL: [0.086, 0.018, -0.07],
      heelR: [-0.086, 0.018, -0.07],
    },
    o = 0.275,
    n = 0.232,
    c = 0.17;
  for (const k of [1, -1]) {
    const W = z0(k),
      X = e["upperArm" + Ne(k)];
    ((e["foreArm" + Ne(k)] = G0(X, W, o)),
      (e["hand" + Ne(k)] = G0(X, W, o + n)),
      (e["handTip" + Ne(k)] = G0(X, W, o + n + c * 0.8)));
  }
  const t = [0, 1.492, 0],
    s = { c: [0, 0.016, -0.01], r: [0.067, 0.088, 0.09] },
    i = -0.068,
    r = 0.08,
    l = (k, W, X) =>
      K0(
        k,
        W,
        X,
        0.0105,
        i - 0.001,
        r + 0.006,
        0.0125,
        i - 0.016,
        r + 0.001,
        0.0034,
      ),
    a = rt({
      HC: t,
      seed: 53,
      C7: e.neck,
      cran: s,
      lowerFace: { c: [0, -0.042, 0.01], r: [0.054, 0.072, 0.07] },
      temple: [0.063, 0.02, 0.046],
      chin: [-0.112, 0.058],
      chinW: 0.012,
      jawSlope: 0.58,
      jawUnder: 0.5,
      faceZ: 0.086,
      cheek: [0.044, -0.018, 0.054],
      cheekS: 0.9,
      hollow: [0.043, -0.056, 0.044],
      hollowK: 0.022,
      jowl: [0.041, -0.086, 0.031, 0.016, 0.019, 0.017],
      jowlK: 0.014,
      brow: [0.035, 0.024, 0.075, 0.0095],
      eyeX: 0.029,
      eyeY: 0,
      eyeZ: 0.06,
      eyeR: 0.0106,
      socket: [0.019, 0.015, 0.019],
      lid: 0.1,
      nose: {
        bridge: [0.012, 0.083],
        r0: 0.0055,
        tip: [-0.034, 0.103],
        r1: 0.0078,
        wing: 0.0105,
        tx: -0.001,
      },
      mouthY: i,
      mouthW: 0.02,
      mouthZ: r,
      mouthGap: 0.004,
      jawHinge: [-0.034, -0.01],
      jawSideX: 0.038,
      skullBase: -0.052,
      ear: [0.066, -0.012, -0.006, 0.028, 0.018],
      neckTop: [-0.062, -0.026],
      neckR: [0.034, 0.042],
      cordR: 0.0095,
      missing: [2, -1, -5, 6],
      broken: [3, -3],
      teethScale: 0.9,
      extra: (k, W, X, r0) => (
        Math.abs(W - i + 0.008) < 0.02 &&
          k > 0 &&
          k < 0.025 &&
          X > 0.06 &&
          (r0 = f0(r0, -l(k, W, X), 0.0015)),
        r0
      ),
      matExtra: (k, W, X) =>
        k > 0 && k < 0.025 && X > 0.06 && l(k, W, X) < 0.0022 ? L.WOUND : null,
      rect: [-0.085, -0.15, 0.17, 0.235],
    }),
    u = [0.037, -0.135, 0.016],
    f = (k, W, X) =>
      b0(k, W, X, u[0], u[1], u[2], 0.021, 0.024, 0.03) +
      (me(k * 150, W * 150, X * 60) - 0.5) * 0.012,
    d = (k, W) => (Math.hypot(k / 0.05, (W + 0.036) / 0.086) - 1) * 0.05,
    v = (k, W, X) =>
      B(
        b0(k, W, X, s.c[0], s.c[1], s.c[2], s.r[0], s.r[1], s.r[2]),
        b0(k, W, X, 0, -0.042, 0.01, 0.054, 0.072, 0.07),
        0.025,
      ),
    C = (k, W, X) => {
      let r0 = v(k, W, X) - 0.011;
      r0 = B(
        r0,
        _0(k, W, X, 0, -0.1, -0.015, 0.05, 0, -0.22, -0.03, 0.058),
        0.03,
      );
      const L0 = Math.atan2(k, X + 0.02);
      return (
        (r0 -=
          0.0022 *
          h(-0.08, -0.13, W) *
          Math.pow(0.5 + 0.5 * Math.sin(L0 * 11 + W * 30), 2)),
        (r0 = f0(r0, -Math.max(d(k, W), 0.012 - X), 0.003)),
        k > 0 && W < -0.09 && (r0 = f0(r0, -f(k, W, X), 0.003)),
        r0
      );
    },
    p = (k, W, X) => C(k - t[0], W - t[1], X - t[2]),
    F = Xt([
      [0.13, 0.09, 0.106, -0.014, 0.085],
      [0.04, 0.097, 0.108, -0.016, 0.056],
      [-0.02, 0.102, 0.105, -0.022, 0.004],
      [-0.09, 0.112, 0.1, -0.032, -0.034],
      [-0.19, 0.155, 0.1, -0.066, -0.058],
      [-0.3, 0.18, 0.092, -0.074, -0.066],
      [-0.47, 0.182, 0.082, -0.072, -0.07],
    ]),
    J = new Float32Array(4),
    n0 = (k, W, X) => {
      let r0 = b0(k, W, X, 0, 0.019, -0.014, 0.092, 0.107, 0.108);
      if (W < 0.06) {
        F(W, J);
        const [L0, M0, m] = J,
          M = Math.hypot(k / L0, (X - m) / M0),
          D = Math.atan2(k, -(X - m)),
          I = 0.0035 * Math.sin(D * 7 + 0.6 + W * 4) * h(-0.05, -0.3, W);
        r0 = B(r0, (M - 1) * Math.min(L0, M0) - I, 0.02);
      }
      return (
        F(I0(W, -0.46, 0.13), J),
        (r0 = f0(
          r0,
          X - J[3] - 0.006 * Math.cos(Math.atan2(k, 0.05) * 2),
          0.006,
        )),
        (r0 = f0(
          r0,
          -0.45 - 0.025 * Math.cos(k * 9) + 0.006 * Math.sin(k * 60) - W,
          0.008,
        )),
        r0
      );
    },
    _ = (k, W, X) => n0(k - t[0], W - t[1], X - t[2]),
    G = (k, W, X) => {
      let r0 = b0(k, W, X, 0, 1.15, -0.02, 0.112, 0.135, 0.078);
      ((r0 = B(r0, b0(k, W, X, 0, 0.99, -0.006, 0.098, 0.105, 0.07), 0.05)),
        (r0 = B(r0, b0(k, W, X, 0, 0.865, -0.008, 0.132, 0.09, 0.088), 0.05)),
        (r0 = B(
          r0,
          K0(k, W, X, -0.138, 1.284, -0.03, 0.138, 1.284, -0.03, 0.036),
          0.06,
        )));
      for (const L0 of [-1, 1])
        r0 = B(
          r0,
          K0(k, W, X, L0 * 0.022, 1.335, -0.042, L0 * 0.13, 1.3, -0.036, 0.029),
          0.04,
        );
      return (
        (r0 = B(r0, b0(k, W, X, 0, 1.285, -0.062, 0.068, 0.058, 0.048), 0.04)),
        r0
      );
    },
    y = z0(1),
    E = z0(-1),
    c0 = e.upperArmL,
    u0 = e.upperArmR,
    q = e.foreArmL,
    $ = e.foreArmR,
    x = e.handL,
    e0 = e.handR,
    H = (k, W, X) => {
      let r0 = G(k, W, X) - 0.013;
      for (const L0 of [1, -1]) {
        const M0 = L0 > 0 ? c0 : u0,
          m = L0 > 0 ? q : $,
          M = L0 > 0 ? x : e0,
          D = L0 > 0 ? y : E;
        let I = _0(
          k,
          W,
          X,
          M0[0] - L0 * 0.01,
          M0[1] + 0.004,
          M0[2],
          0.047,
          m[0],
          m[1],
          m[2],
          0.05,
        );
        I = B(
          I,
          _0(
            k,
            W,
            X,
            m[0],
            m[1],
            m[2],
            0.05,
            M[0] - D[0] * 0.01,
            M[1] - D[1] * 0.01,
            M[2],
            0.066,
          ),
          0.02,
        );
        const U = (k - M0[0]) * D[0] + (W - M0[1]) * D[1],
          Q = Math.atan2(X - M0[2], (k - M0[0]) * D[1] - (W - M0[1]) * D[0]);
        ((I -=
          0.004 *
          Math.pow(0.5 + 0.5 * Math.sin(Q * 5 + U * 12), 2) *
          h(0.3, 0.46, U)),
          (I -=
            0.003 *
            Math.pow(0.5 + 0.5 * Math.sin(U * 80), 2) *
            h(0.22, 0.27, U) *
            h(0.33, 0.29, U)),
          (I = f0(I, U - (o + n - 0.014), 0.004)),
          (r0 = B(r0, I, 0.03)));
      }
      return (
        (r0 = f0(
          r0,
          -K0(k, W, X, 0, 1.3, -0.025, 0, 1.6, -0.035, 0.046),
          0.01,
        )),
        (r0 = f0(r0, 0.88 - W, 0.01)),
        r0
      );
    },
    z = Xt([
      [0.99, 0.112, 0.086, -0.012],
      [0.87, 0.152, 0.112, -0.008],
      [0.55, 0.198, 0.148, 0],
      [0.08, 0.248, 0.19, 0.006],
    ]),
    Z = new Float32Array(3),
    p0 = (k) =>
      0.088 + 0.008 * Math.sin(k * 5 + 0.7) + 0.005 * Math.sin(k * 13),
    j = (k, W, X) => {
      z(W, Z);
      const [r0, L0, M0] = Z,
        m = Math.atan2(k, X - M0),
        M = h(0.9, 0.12, W);
      let D = (Math.hypot(k / r0, (X - M0) / L0) - 1) * Math.min(r0, L0);
      return (
        (D -=
          0.011 *
          M *
          Math.pow(0.5 + 0.5 * Math.sin(m * 8 + Math.sin(W * 6) * 0.5), 2)),
        (D -=
          0.004 * M * Math.pow(0.5 + 0.5 * Math.sin(m * 19 + 1.3 + W * 3), 3)),
        (D = f0(D, W - 0.995, 0.02)),
        (D = f0(D, p0(m) - W, 0.005)),
        D
      );
    },
    t0 = 0.955,
    A = (k, W, X) => {
      z(t0, Z);
      const r0 =
        (Math.hypot(k / (Z[0] + 0.006), (X - Z[2]) / (Z[1] + 0.006)) - 1) *
        (Z[1] + 0.006);
      return Math.hypot(r0, W - t0) - 0.0065;
    },
    w = (k, W, X) => {
      z(W, Z);
      const [r0, L0, M0] = Z,
        m = Math.sin(k),
        M = Math.cos(k),
        D = 1 / Math.hypot(m / r0, M / L0);
      return [m * (D + X), W, M0 + M * (D + X)];
    },
    Y = [];
  {
    for (const [W, X] of [
      [0.52, 0.66],
      [0.8, 0.66],
    ])
      for (let r0 = 0; r0 < 26; r0++) {
        const L0 = r0 / 25,
          M0 = T0(t0 - 0.012, 0.7, Math.pow(L0, 0.9)),
          m = T0(W, X, L0 * L0);
        Y.push({ p: w(m, M0, 0.016), r: 0.0046 });
      }
    for (let W = 0; W < 5; W++)
      Y.push({
        p: w(0.66, 0.686 - W * 0.017, 0.017),
        r: W === 0 ? 0.0056 : 0.0048,
      });
  }
  const b = w(0.66, 0.588, 0.018);
  Y.push({ p: j0.add(b, [0, 0.026, 0]), r: 0.0022 });
  const g = j0.norm([Math.sin(0.66), 0, Math.cos(0.66)]),
    N = [0, 1, 0],
    V = j0.cross(N, g),
    O = (k, W, X) => {
      const r0 = k - b[0],
        L0 = W - b[1],
        M0 = X - b[2],
        m = L0,
        M = r0 * V[0] + M0 * V[2],
        D = r0 * g[0] + M0 * g[2],
        I = W0(M, m, D, 0, 0, 0, 0.0042, 0.024, 0.0032, 0.0015),
        U = W0(M, m, D, 0, 0.008, 0, 0.0145, 0.0042, 0.0032, 0.0015);
      return Math.min(I, U);
    },
    i0 = [];
  for (let k = 0; k < Y.length - 1; k++)
    k !== 25 && i0.push([Y[k].p, Y[k + 1].p]);
  const m0 = 0.53,
    S = 46,
    P = Array.from({ length: S }, () => []),
    s0 = Array.from({ length: S }, () => []),
    o0 = (k) => Math.max(0, Math.min(S - 1, Math.floor((k - m0) / 0.01)));
  for (const k of Y)
    for (let W = o0(k.p[1] - 0.014); W <= o0(k.p[1] + 0.014); W++) P[W].push(k);
  for (const k of i0)
    for (
      let W = o0(Math.min(k[0][1], k[1][1]) - 0.006);
      W <= o0(Math.max(k[0][1], k[1][1]) + 0.006);
      W++
    )
      s0[W].push(k);
  const g0 = (k, W, X) => {
      let r0 = O(k, W, X);
      const L0 = o0(W);
      for (const M0 of P[L0])
        r0 = Math.min(r0, se(k, W, X, M0.p[0], M0.p[1], M0.p[2], M0.r));
      for (const [M0, m] of s0[L0])
        r0 = Math.min(
          r0,
          K0(k, W, X, M0[0], M0[1], M0[2], m[0], m[1], m[2], 0.0011),
        );
      return r0;
    },
    w0 = [
      ...Y.map((k) => k.p),
      j0.add(b, [0, -0.026, 0]),
      j0.add(b, [0, 0.03, 0]),
    ],
    k0 = {
      min: [0, 1, 2].map((k) => Math.min(...w0.map((W) => W[k])) - 0.02),
      max: [0, 1, 2].map((k) => Math.max(...w0.map((W) => W[k])) + 0.02),
    },
    q0 = (k, W, X) => {
      let r0 = G(k, W, X) - 0.026;
      const L0 = Math.atan2(k, X + 0.03),
        M0 = Math.sin(L0);
      return (
        (r0 = f0(
          r0,
          1.13 + 0.11 * M0 * M0 + 0.006 * Math.sin(L0 * 9) - W,
          0.006,
        )),
        (r0 = f0(
          r0,
          -K0(k, W, X, 0, 1.32, -0.025, 0, 1.6, -0.035, 0.05),
          0.01,
        )),
        k > 0 &&
          k < 0.1 &&
          W > 1.26 &&
          X > -0.01 &&
          (r0 = f0(
            r0,
            -(
              b0(k, W, X, 0.05, 1.325, 0.045, 0.027, 0.034, 0.05) +
              (me(k * 120, W * 120, X * 60) - 0.5) * 0.016
            ),
            0.003,
          )),
        r0
      );
    },
    B0 = (k, W, X) => {
      let r0 = 1e9;
      for (const L0 of [-1, 1]) {
        const M0 = e["shin" + Ne(L0)],
          m = e["foot" + Ne(L0)];
        let M = _0(
          k,
          W,
          X,
          M0[0],
          M0[1] + 0.06,
          M0[2],
          0.042,
          M0[0],
          M0[1],
          M0[2],
          0.038,
        );
        ((M = B(
          M,
          _0(
            k,
            W,
            X,
            M0[0],
            M0[1],
            M0[2],
            0.038,
            m[0],
            m[1] + 0.03,
            m[2],
            0.027,
          ),
          0.02,
        )),
          (M = B(
            M,
            _0(
              k,
              W,
              X,
              M0[0],
              M0[1] - 0.07,
              M0[2] - 0.016,
              0.037,
              M0[0],
              M0[1] - 0.2,
              M0[2] - 0.012,
              0.03,
            ),
            0.03,
          )),
          (r0 = Math.min(r0, M)));
      }
      return f0(r0, W - 0.53, 0.01);
    },
    P0 = (k, W, X) => {
      let r0 = 1e9;
      for (const L0 of [1, -1]) {
        const M0 = L0 > 0 ? x : e0,
          m = L0 > 0 ? y : E;
        r0 = Math.min(
          r0,
          _0(
            k,
            W,
            X,
            M0[0] - m[0] * 0.06,
            M0[1] - m[1] * 0.06,
            M0[2],
            0.021,
            M0[0],
            M0[1],
            M0[2],
            0.018,
          ),
        );
      }
      return r0;
    },
    y0 = (k) =>
      nt({
        wrist: e["hand" + Ne(k)],
        dir: z0(k),
        side: k,
        palm: [0.078, 0.069, 0.021],
        fingers: [
          [0.088, 0.0064],
          [0.096, 0.0066],
          [0.09, 0.0062],
          [0.072, 0.0056],
        ],
        thumb: [0.058, 0.0076],
        curl: k > 0 ? [0.72, 1.05, 0.75] : [0.62, 0.95, 0.82],
        bony: 1,
        seed: k > 0 ? 55 : 56,
        spread: 0.11,
      }),
    x0 = y0(1),
    Y0 = y0(-1),
    R = (k) =>
      gt({
        ankle: e["foot" + Ne(k)],
        x: e["foot" + Ne(k)][0],
        len: 0.245,
        width: 0.086,
        kind: "dress",
      }),
    T = R(1),
    K = R(-1),
    l0 = (k, W, X) => {
      k[d0[W]] += X;
    },
    h0 = (k, W, X, r0) => a.weights(k, W, X, r0),
    C0 = (k, W, X, r0) => {
      const L0 = h(-0.07, -0.24, W - t[1]);
      (l0(r0, "head", 1 - L0),
        l0(r0, "neck", L0 * 0.35),
        l0(r0, "chest", L0 * 0.65));
    },
    S0 = (k, W, X, r0) => {
      const L0 = h(0.9, 0.62, W) * 0.62,
        M0 = h(0.46, 0.16, W) * (0.3 + 0.45 * h(0.03, -0.1, X)),
        m = h(-0.1, 0.1, k);
      (l0(r0, "hips", 1 - L0),
        l0(r0, "spine", 0),
        l0(r0, "thighL", L0 * (1 - M0) * m),
        l0(r0, "thighR", L0 * (1 - M0) * (1 - m)),
        l0(r0, "shinL", L0 * M0 * m),
        l0(r0, "shinR", L0 * M0 * (1 - m)));
    },
    F0 = (k, W, X, r0) => {
      const L0 = h(1.3, 1.36, W);
      (l0(r0, "chest", 1 - L0 * 0.5), l0(r0, "neck", L0 * 0.5));
    },
    E0 = {
      min: [t[0] + 0, t[1] - 0.18, t[2] - 0.03],
      max: [t[0] + 0.07, t[1] - 0.09, t[2] + 0.06],
    },
    D0 = (k, W, X) =>
      b0(
        k - t[0],
        W - t[1],
        X - t[2],
        u[0] - 0.004,
        u[1],
        u[2] - 0.006,
        0.013,
        0.015,
        0.016,
      ) < 0.002
        ? L.WOUND
        : L.SKIN,
    $0 = (k, W, X) => {
      let r0 = a.neck.sdf(k, W, X);
      const L0 = k - t[0],
        M0 = W - t[1],
        m = X - t[2];
      return (
        (r0 = f0(
          r0,
          -(
            b0(
              L0,
              M0,
              m,
              u[0] - 0.004,
              u[1],
              u[2] - 0.006,
              0.011,
              0.013,
              0.012,
            ) +
            (me(L0 * 200, M0 * 200, m * 200) - 0.5) * 0.004
          ),
          0.002,
        )),
        r0
      );
    },
    V0 = [
      {
        name: "head",
        sdf: (k, W, X) =>
          Math.max(
            a.sdf(k, W, X),
            W - t[1] - 0.075,
            -(X - t[2] + 0.035),
            Math.abs(k - t[0]) - 0.064,
          ),
        mat: a.mat,
        weights: a.weights,
        min: a.min,
        max: [a.max[0], t[1] + 0.085, a.max[2]],
        res: 0.0028,
      },
      {
        name: "neck",
        sdf: $0,
        mat: D0,
        weights: h0,
        min: E0.min,
        max: E0.max,
        res: 0.003,
      },
      {
        name: "coif",
        sdf: p,
        mat: L.CLOTH_B,
        weights: h0,
        min: [t[0] - 0.1, t[1] - 0.25, t[2] - 0.13],
        max: [t[0] + 0.1, t[1] + 0.12, t[2] + 0.11],
        res: 0.0033,
        aoK: 0.8,
      },
      {
        name: "veil",
        sdf: _,
        mat: L.CLOTH_A,
        weights: C0,
        min: [t[0] - 0.205, t[1] - 0.49, t[2] - 0.185],
        max: [t[0] + 0.205, t[1] + 0.14, t[2] + 0.1],
        res: 0.0055,
        aoK: 0.7,
      },
      {
        name: "collar",
        sdf: q0,
        mat: L.CLOTH_B,
        weights: F0,
        min: [-0.2, 1.1, -0.14],
        max: [0.2, 1.4, 0.12],
        res: 0.005,
      },
      {
        name: "bodice",
        sdf: H,
        mat: L.CLOTH_C,
        res: 0.0074,
        sigma: 0.026,
        min: [-0.52, 0.86, -0.14],
        max: [0.52, 1.37, 0.12],
        bones: [
          "hips",
          "spine",
          "chest",
          "neck",
          "shoulderL",
          "upperArmL",
          "foreArmL",
          "shoulderR",
          "upperArmR",
          "foreArmR",
        ],
      },
      {
        name: "skirt",
        sdf: j,
        mat: L.CLOTH_C,
        weights: S0,
        min: [-0.28, 0.07, -0.21],
        max: [0.28, 1.01, 0.22],
        res: 0.0076,
      },
      {
        name: "cord",
        sdf: A,
        mat: L.BELT,
        weights: S0,
        min: [-0.14, t0 - 0.012, -0.12],
        max: [0.14, t0 + 0.012, 0.11],
        res: 0.0028,
      },
      {
        name: "rosary",
        sdf: g0,
        mat: (k, W, X) => (O(k, W, X) < 0.0012 ? Qt : L.BELT),
        weights: S0,
        min: k0.min,
        max: k0.max,
        res: 0.0018,
        aoK: 0.4,
      },
      {
        name: "legs",
        sdf: B0,
        mat: L.SOCK,
        res: 0.006,
        sigma: 0.022,
        min: [-0.14, 0.05, -0.07],
        max: [0.14, 0.55, 0.07],
        bones: ["thighL", "shinL", "footL", "thighR", "shinR", "footR"],
      },
      {
        name: "wrists",
        sdf: P0,
        mat: L.SKIN,
        res: 0.0035,
        sigma: 0.02,
        min: [-0.53, 0.94, -0.06],
        max: [0.53, 1.1, 0.03],
        bones: ["foreArmL", "handL", "foreArmR", "handR"],
      },
      {
        name: "handL",
        sdf: x0.sdf,
        mat: (k, W, X) => (x0.nailAt(k, W, X) ? L.NAIL : L.SKIN),
        min: x0.min,
        max: x0.max,
        res: 0.0026,
        bones: ["handL", "foreArmL"],
        sigma: 0.012,
      },
      {
        name: "handR",
        sdf: Y0.sdf,
        mat: (k, W, X) => (Y0.nailAt(k, W, X) ? L.NAIL : L.SKIN),
        min: Y0.min,
        max: Y0.max,
        res: 0.0026,
        bones: ["handR", "foreArmR"],
        sigma: 0.012,
      },
      {
        name: "shoeL",
        sdf: T.sdf,
        mat: L.SHOE,
        min: T.min,
        max: T.max,
        res: 0.0042,
        bones: ["footL", "shinL"],
        sigma: 0.02,
      },
      {
        name: "shoeR",
        sdf: K.sdf,
        mat: L.SHOE,
        min: K.min,
        max: K.max,
        res: 0.0042,
        bones: ["footR", "shinR"],
        sigma: 0.02,
      },
    ],
    Q0 = [u[0] + t[0], u[1] + t[1], u[2] + t[2]];
  return {
    kind: "nun",
    height: 1.6,
    J: e,
    HC: t,
    head: a,
    parts: V0,
    col: (k, W, X, r0, L0) => {
      let M0 = 0,
        m = 0,
        M = 0,
        D = 0;
      const I = oe(k * 9, W * 9, X * 9, 3),
        U = Math.hypot(k - Q0[0], W - Q0[1], X - Q0[2]);
      if (L0 === "coif" || L0 === "collar") {
        m = 0.3 + 0.35 * I + 0.25 * h(1.4, 1.3, W);
        const Q = h(Q0[1] + 0.01, Q0[1] - 0.03, W),
          a0 = h(1.13 + 0.05 * me(k * 40, 3.3, X * 40), 1.27, W);
        let v0 = 0;
        for (let O0 = 0; O0 < 2; O0++) {
          const A0 =
              Q0[0] -
              0.008 +
              O0 * 0.026 +
              (O0 ? 0.1 : -0.12) * (Q0[1] - W) +
              0.004 * Math.sin(W * (41 + O0 * 17) + O0 * 2.1),
            U0 = (O0 ? 0.0075 : 0.0095) * (1.15 - 0.45 * h(1.3, 1.16, W));
          v0 = Math.max(
            v0,
            h(U0, U0 * 0.35, Math.abs(k - A0)) *
              h(
                1.15 + O0 * 0.05 + 0.03 * me(O0 * 7.1, W * 5, 1),
                1.21 + O0 * 0.05,
                W,
              ),
          );
        }
        const N0 = h(0.06, 0.02, U) * (0.7 + 0.4 * I);
        ((M0 = Math.max(N0, v0 * Q * (0.7 + 0.3 * a0) * h(0, 0.03, X))),
          L0 === "collar" &&
            (M0 = Math.max(
              M0,
              h(0.04, 0.012, Math.hypot(k - 0.05, W - 1.325)) *
                h(0, 0.03, X) *
                (0.6 + 0.5 * I),
            )),
          (M0 = Math.max(M0, ue(k, W, X, 34, 0.75) * 0.75 * h(1.25, 1.38, W))),
          (M0 = Math.max(
            M0,
            h(0.03, 0.01, Math.abs(k - 0.008)) *
              h(t[1] - 0.1, t[1] - 0.13, W) *
              h(t[1] - 0.2, t[1] - 0.14, W) *
              h(0.04, 0.07, X) *
              0.85,
          )));
      } else
        L0 === "veil" || L0 === "bodice" || L0 === "skirt"
          ? ((m = 0.3 + 0.4 * I + 0.45 * h(0.3, 0.09, W)),
            L0 === "bodice" &&
              (M0 =
                h(0.6, 0.8, oe(k * 14, W * 14, X * 14, 2)) *
                h(0.5, 0.56, Math.abs(k)) *
                0.8))
          : L0 === "handL" || L0 === "handR" || L0 === "wrists"
            ? ((D = 0.75),
              (M = 0.4 + 0.45 * h(0.45, 0.7, I)),
              (m = 0.35 + 0.3 * I),
              (M0 = h(0.62, 0.78, oe(k * 18, W * 18, X * 18, 2)) * 0.9),
              r0 === L.NAIL && ((m = 0.9), (M0 = 0.7)))
            : L0 === "head" || L0 === "neck"
              ? ((D = 0.75),
                (M = 0.3 + 0.35 * h(0.5, 0.7, I)),
                (m = 0.12),
                L0 === "neck" && ((M0 = h(0.03, 0.01, U) + 0.4), (M = 0.8)))
              : L0 === "legs"
                ? (m = 0.5)
                : L0.startsWith("shoe")
                  ? (m = 0.5 + 0.4 * I)
                  : L0 === "rosary"
                    ? (m = 0.3)
                    : L0 === "cord" && (m = 0.4 + 0.3 * I);
      return [I0(M0), I0(m), I0(M), I0(D)];
    },
    segA: { hips: [0, 0.8, -0.005] },
    rad: {
      hips: 0.11,
      spine: 0.09,
      chest: 0.1,
      neck: 0.036,
      head: 0.085,
      jaw: 0.035,
      shoulderL: 0.034,
      upperArmL: 0.034,
      foreArmL: 0.028,
      handL: 0.024,
      shoulderR: 0.034,
      upperArmR: 0.034,
      foreArmR: 0.028,
      handR: 0.024,
      thighL: 0.062,
      shinL: 0.044,
      footL: 0.03,
      thighR: 0.062,
      shinR: 0.044,
      footR: 0.03,
    },
    hit: [
      ["head", [0, 1.49, -0.005], [0, 1.53, -0.02], 0.105, "head"],
      ["chest", [0, 1.08, -0.02], [0, 1.28, -0.03], 0.135, "body"],
      ["spine", [0, 0.84, -0.005], [0, 1.02, -0.005], 0.14, "body"],
      ["neck", e.neck, [0, 1.42, -0.02], 0.05, "body"],
      ["upperArmL", e.upperArmL, e.foreArmL, 0.05, "body"],
      ["foreArmL", e.foreArmL, e.handL, 0.055, "body"],
      ["upperArmR", e.upperArmR, e.foreArmR, 0.05, "body"],
      ["foreArmR", e.foreArmR, e.handR, 0.055, "body"],
      ["handL", e.handL, e.handTipL, 0.04, "body"],
      ["handR", e.handR, e.handTipR, 0.04, "body"],
      ["thighL", e.thighL, e.shinL, 0.1, "legs"],
      ["shinL", e.shinL, e.footL, 0.1, "legs"],
      ["thighR", e.thighR, e.shinR, 0.1, "legs"],
      ["shinR", e.shinR, e.footR, 0.1, "legs"],
      ["footL", [0.086, 0.04, -0.04], [0.09, 0.03, 0.15], 0.04, "legs"],
      ["footR", [-0.086, 0.04, -0.04], [-0.09, 0.03, 0.15], 0.04, "legs"],
    ],
    palette: {
      [L.SKIN]: {
        base: "#878a82",
        shade: "#46475a",
        deep: "#2a2937",
        line: "#171722",
        type: "skin",
      },
      [L.FACE]: {
        base: "#8a8d84",
        shade: "#48495b",
        deep: "#2b2a38",
        line: "#171722",
        type: "skin",
      },
      [L.EYE]: {
        base: "#d0d1c8",
        shade: "#7b7f80",
        line: "#171722",
        type: "eye",
      },
      [L.MOUTH]: {
        base: "#1c0609",
        shade: "#090203",
        deep: "#050102",
        line: "#0b0204",
        type: "mouth",
      },
      [L.TEETH]: {
        base: "#b3a47e",
        shade: "#5c5443",
        line: "#241d17",
        type: "teeth",
      },
      [L.CLOTH_A]: {
        base: "#1f1e23",
        shade: "#0b0b0e",
        deep: "#060608",
        line: "#040405",
        type: "cloth",
        fold: 0.35,
        rim: 0.3,
      },
      [L.CLOTH_B]: {
        base: "#cbc5b2",
        shade: "#6d6a62",
        deep: "#3f3d39",
        line: "#1c1b18",
        type: "cloth",
        fold: 0.12,
      },
      [L.CLOTH_C]: {
        base: "#26242a",
        shade: "#0e0d11",
        deep: "#07070a",
        line: "#050506",
        type: "cloth",
        fold: 0.3,
        rim: 0.3,
      },
      [L.SHOE]: {
        base: "#1d1a1a",
        shade: "#0a0909",
        deep: "#050404",
        line: "#040303",
        type: "leather",
      },
      [L.NAIL]: {
        base: "#6e6658",
        shade: "#37332c",
        line: "#171722",
        type: "teeth",
      },
      [L.SOCK]: {
        base: "#1c1b20",
        shade: "#0a0a0c",
        deep: "#050506",
        line: "#040405",
        type: "cloth",
        fold: 0,
      },
      [L.BELT]: {
        base: "#3a2c22",
        shade: "#150f0b",
        deep: "#0a0706",
        line: "#070504",
        type: "leather",
      },
      [L.WOUND]: {
        base: "#7d1a22",
        shade: "#3a080d",
        deep: "#1a0305",
        line: "#12030a",
        type: "wound",
      },
      [Qt]: {
        base: "#7a715e",
        shade: "#35302a",
        deep: "#1a1714",
        line: "#100e0c",
        type: "plastic",
      },
    },
    shade: {
      livorY: 0.5,
      livor: "#5e5070",
      bruise: "#5f5068",
      vein: "#3a3657",
    },
    eyes: {
      iris: "#a4aba9",
      sclera: "#d3cfbd",
      cloud: 0.96,
      gaze: [0.08, 0.16, -0.03, 0.18],
    },
    face: {
      seed: 53,
      gaunt: 1.15,
      brows: !0,
      browCol: "120,112,104",
      browW: 0.7,
      browA: 0.55,
      browDropL: 2,
      socketL: 1.25,
      socketR: 1.15,
      creases: 1.05,
      veins: 8,
      veinCol: "56,46,84",
      lipCol: "84,56,68",
      mouthBlood: [[2, 0.5]],
      spatter: 0.45,
      bags: "74,46,60",
      bruises: [[30, -30, 8, 6, 0.3]],
      extra: (k, W) => {
        const { R: X, vstroke: r0, bez: L0, blob: M0, bloodRun: m, F: M } = W,
          D = (Q, a0) => {
            k.fillStyle = `rgba(${Q},${a0})`;
          };
        {
          (k.save(), k.translate(0, -36), k.scale(1, 86 / 50));
          const Q = k.createRadialGradient(0, 0, 0, 0, 0, 52);
          (Q.addColorStop(0, "rgba(26,16,24,0)"),
            Q.addColorStop(0.7, "rgba(26,16,24,0)"),
            Q.addColorStop(0.92, "rgba(26,16,24,0.3)"),
            Q.addColorStop(1, "rgba(18,10,16,0.5)"),
            (k.fillStyle = Q),
            k.beginPath(),
            k.arc(0, 0, 60, 0, Math.PI * 2),
            k.fill(),
            k.restore());
        }
        for (let Q = 0; Q < 10; Q++) {
          const a0 = (X() - 0.5) * 80,
            v0 = -100 + X() * 130;
          M0(
            k,
            a0,
            v0,
            3 + X() * 5,
            3 + X() * 4,
            X() < 0.5 ? "84,64,92" : "112,112,72",
            0.08 + X() * 0.1,
            X() * 3,
            0.1,
          );
        }
        for (const [Q, a0] of [
          [M.eyeL[0], M.eyeL[1]],
          [M.eyeR[0], M.eyeR[1]],
        ])
          (M0(k, Q, a0 - 1, 19, 15, "22,12,20", 0.5, 0, 0.35),
            M0(k, Q, a0 + 6, 16, 7, "30,16,26", 0.4, 0, 0.3));
        for (const [Q, a0, v0] of [
          [M.eyeL[0], M.eyeL[1], 1],
          [M.eyeR[0], M.eyeR[1], -1],
        ]) {
          D("40,24,34", 0.5);
          for (let N0 = 0; N0 < 5; N0++) {
            const O0 = -0.55 + N0 * 0.28 + (X() - 0.5) * 0.12,
              A0 = 7 + X() * 7,
              U0 = Q + v0 * 14,
              ne = a0 - 1 + N0 * 0.8;
            r0(
              k,
              L0(
                [U0, ne],
                [
                  U0 + v0 * A0 * 0.35 * Math.cos(O0),
                  ne + A0 * 0.35 * Math.sin(O0) + 0.6,
                ],
                [
                  U0 + v0 * A0 * 0.7 * Math.cos(O0),
                  ne + A0 * 0.7 * Math.sin(O0),
                ],
                [U0 + v0 * A0 * Math.cos(O0), ne + A0 * Math.sin(O0) - 0.5],
              ),
              (ke) => Math.sin(ke * Math.PI) * 0.75 + 0.1,
            );
          }
          for (let N0 = 0; N0 < 3; N0++) {
            const O0 = a0 - 13 - N0 * 4.2;
            (D("44,26,36", 0.42 - N0 * 0.08),
              r0(
                k,
                L0(
                  [Q - v0 * 11, O0 + 3],
                  [Q - v0 * 3, O0 - 2],
                  [Q + v0 * 6, O0 - 2],
                  [Q + v0 * 14, O0 + 2.5],
                ),
                (A0) => Math.sin(A0 * Math.PI) * 0.9,
              ));
          }
          (D("44,26,36", 0.35),
            r0(
              k,
              L0(
                [Q + v0 * 6, a0 - 26],
                [Q + v0 * 9, a0 - 36],
                [Q + v0 * 7, a0 - 48],
                [Q + v0 * 3, a0 - 58],
              ),
              (N0) => Math.sin(N0 * Math.PI) * 1,
            ),
            D("190,184,170", 0.12),
            r0(
              k,
              L0(
                [Q + v0 * 4, a0 - 25],
                [Q + v0 * 7, a0 - 35],
                [Q + v0 * 5, a0 - 47],
                [Q + v0 * 1, a0 - 57],
              ),
              (N0) => Math.sin(N0 * Math.PI) * 1.2,
            ));
        }
        const I = M.mouthY,
          U = M.mouthW;
        D("50,28,40", 0.45);
        for (let Q = 0; Q < 14; Q++) {
          const a0 = (X() - 0.5) * U * 1.9,
            v0 = Q % 2 === 0,
            N0 = v0 ? I + 6.5 + X() * 1.5 : I - 8 - X() * 1.5;
          r0(
            k,
            [
              [a0, N0],
              [
                a0 + (X() - 0.5) * 0.8,
                N0 + (v0 ? 3.5 + X() * 3 : -(3 + X() * 3)),
              ],
            ],
            0.4,
          );
        }
        for (const Q of [1, -1])
          r0(
            k,
            L0(
              [Q * (U + 2), I - 1],
              [Q * (U + 4), I - 8],
              [Q * (U + 3), I - 16],
              [Q * (U + 1), I - 24],
            ),
            (a0) => Math.sin(a0 * Math.PI) * 1.2,
          );
        r0(
          k,
          L0(
            [-9, M.chinY + 17],
            [-3, M.chinY + 15],
            [3, M.chinY + 15],
            [9, M.chinY + 17],
          ),
          (Q) => Math.sin(Q * Math.PI) * 1,
        );
        for (let Q = 0; Q < 9; Q++) {
          const a0 = Q % 2 ? 1 : -1,
            v0 = a0 * (26 + X() * 22),
            N0 = -10 + X() * 34;
          M0(
            k,
            v0,
            N0,
            1.2 + X() * 2.2,
            1 + X() * 1.8,
            "96,74,54",
            0.35 + X() * 0.2,
            X() * 3,
            0.3,
          );
        }
        (M0(k, 12, I - 6, 8, 6, "120,24,32", 0.6),
          (k.fillStyle = "rgba(92,10,18,0.95)"),
          k.beginPath(),
          k.moveTo(8.5, I - 1),
          k.lineTo(15.5, I - 1.5),
          k.lineTo(14.5, I - 6),
          k.lineTo(16, I - 10.5),
          k.lineTo(12.5, I - 16),
          k.lineTo(10.5, I - 11),
          k.lineTo(8, I - 7.5),
          k.closePath(),
          k.fill(),
          (k.fillStyle = "rgba(30,4,8,0.9)"),
          r0(
            k,
            [
              [9.5, I - 2],
              [12, I - 7],
              [12.5, I - 13],
            ],
            (Q) => 1.6 * Math.sin(Q * Math.PI) + 0.3,
          ),
          m(k, X, 12.5, I - 14, 6, 22, "70,10,14", 0.88));
      },
    },
    style: {
      hunch: 21,
      chestHunch: 14,
      headRoll: 24,
      headPitch: 12,
      headYaw: -12,
      neckFwd: 16,
      jaw: 0.17,
      shoulderDrop: 0,
      leanR: -3,
      armSpread: 0.08,
      elbow: 0.3,
      idleWidth: 0.075,
      idleCrouch: 0.06,
      sway: 0.45,
      twitch: 0.62,
      toeIn: !0,
      claws: { out: 0.13, fwd: 0.3, elbow: 104, droop: 62, asym: -10 },
      shamble: {
        v: 1.15,
        cadence: 3.4,
        duty: 0.6,
        lift: [0.035, 0.03],
        width: 0.062,
        crouch: 0.06,
        bob: 0.006,
        sway: 0.012,
        roll: 2,
        yaw: 3,
        toeOut: 0.05,
        lean: 12,
        armSwing: 0,
        heel: 0.06,
        toeOff: 0.12,
      },
      run: {
        v: 3.4,
        cadence: 3.9,
        duty: 0.37,
        lift: [0.1, 0.1],
        width: 0.07,
        crouch: 0.1,
        bob: 0.02,
        sway: 0.02,
        lean: 28,
        burst: [1.25, 0.62],
      },
      emerge: {
        v: 1.9,
        cadence: 3.4,
        duty: 0.45,
        lift: [0.05, 0.05],
        width: 0.07,
        crouch: 0.05,
        bob: 0.012,
        sway: 0.02,
        lean: 30,
      },
    },
  };
}
const De = (e) => (e > 0 ? "L" : "R"),
  zt = 15,
  yt = L.WOUND,
  St = L.SOCK,
  e1 = L.TUBE,
  _e = -0.38,
  Ve = 0.031,
  re = 0,
  Ae = 0.063,
  je = 0.0116,
  v1 = 0.32,
  Mo = -0.46;
function Lo(e) {
  const o = e.HC,
    n = e.cran,
    c = e.lowerFace,
    t = e.mouthY,
    s = e.mouthW,
    i = e.mouthZ,
    r = e.jawHinge,
    l = e.chin,
    a = ot(e.seed ?? 3),
    u = [];
  for (const q of [1, -1])
    for (let $ = 0; $ < 8; $++) {
      const x = (($ + 0.5) / 8) * 2 - 1,
        e0 = x * s * 0.8,
        H = Math.abs(x) < 0.3 ? 0.0033 : 0.0028,
        z = (q > 0 ? 0.0066 : 0.0056) * (0.9 + a() * 0.2);
      u.push({
        x: e0,
        y: (q > 0 ? t + 5e-4 : t - 5e-4) + q * z * 0.5,
        z: i - 0.0068 - e0 * e0 * 13,
        w: H,
        h: z * 0.5,
        row: q,
        tilt: (a() - 0.5) * 0.15,
      });
    }
  const f = (q, $, x) => {
      let e0 = 1e9;
      for (const H of u) {
        if (Math.abs(q - H.x) > 0.012 || Math.abs($ - H.y) > 0.012) continue;
        const z = q - H.x,
          Z = $ - H.y;
        e0 = Math.min(
          e0,
          W0(z + Z * H.tilt, Z, x, 0, 0, H.z, H.w * 0.5, H.h, 0.0022, 0.0012),
        );
      }
      return e0;
    },
    d = (q, $, x) => {
      let e0 = W0(q, $, x, 0, t, i - 0.006, s * 0.97, 65e-5, 0.02, 6e-4);
      return B(
        e0,
        b0(q, $, x, 0, t - 0.003, i - 0.031, s * 0.95, 0.0115, 0.022),
        0.006,
      );
    };
  function v(q, $, x) {
    const e0 = Math.abs(q);
    let H = b0(q, $, x, n.c[0], n.c[1], n.c[2], n.r[0], n.r[1], n.r[2]);
    ((H = B(
      H,
      b0(q, $, x, c.c[0], c.c[1], c.c[2], c.r[0], c.r[1], c.r[2]),
      0.03,
    )),
      (H = B(
        H,
        b0(q, $, x, 0, -0.098, 0.018, e.jawR[0], e.jawR[1], e.jawR[2]),
        0.03,
      )));
    for (const z of [-1, 1])
      H = f0(
        H,
        -b0(
          q,
          $,
          x,
          z * e.temple[0],
          e.temple[1],
          e.temple[2],
          0.011,
          0.028,
          0.026,
        ),
        0.022,
      );
    if (
      ((H = f0(H, (e0 - e.chinW - ($ - l[0]) * e.jawSlope) * 0.8, 0.022)),
      (H = f0(H, (-($ - l[0]) + (l[1] - 0.04 - x) * e.jawUnder) * 0.85, 0.018)),
      (H = f0(H, x - e.faceZ, 0.03)),
      x > -0.01)
    ) {
      H = B(
        H,
        b0(q, $, x, 0, l[0] + 0.015, e.chinZ, 0.016, 0.012, 0.011),
        0.014,
      );
      for (const z of [-1, 1])
        ((H = B(
          H,
          b0(
            q,
            $,
            x,
            z * e.cheek[0],
            e.cheek[1],
            e.cheek[2],
            0.017,
            0.0095,
            0.016,
          ),
          0.02,
        )),
          (H = f0(
            H,
            -b0(
              q,
              $,
              x,
              z * e.hollow[0],
              e.hollow[1],
              e.hollow[2],
              0.015,
              0.022,
              0.02,
            ),
            0.03,
          )));
      if ($ > C() - 0.045 && x > 0.02) {
        H = B(
          H,
          K0(
            q,
            $,
            x,
            -e.brow[0],
            e.brow[1],
            e.brow[2],
            e.brow[0],
            e.brow[1],
            e.brow[2],
            e.brow[3],
          ),
          0.018,
        );
        for (const z of [-1, 1]) {
          const Z = z * Ve,
            p0 = q - Z;
          if (
            ((H = f0(
              H,
              -b0(
                q,
                $,
                x,
                Z,
                re + 0.002,
                Ae + 0.017,
                e.socket[0],
                e.socket[1],
                e.socket[2],
              ),
              0.0075,
            )),
            Math.abs(p0) < 0.03 && Math.abs($ - re) < 0.03)
          ) {
            let j = se(q, $, x, Z, re, Ae, je + 0.0023);
            ((j = f0(j, -($ - (re + je * v1 - Math.abs(p0) * 0.14)), 0.0016)),
              (j = f0(j, Ae - 0.004 - x, 0.002)),
              (H = B(H, j, 0.0034)));
            let t0 = se(q, $, x, Z, re, Ae, je + 0.0021);
            ((t0 = f0(t0, $ - (re + je * Mo + p0 * p0 * 26), 0.0014)),
              (t0 = f0(t0, Ae - 0.003 - x, 0.002)),
              (H = B(H, t0, 0.003)),
              (H = B(
                H,
                b0(
                  q,
                  $,
                  x,
                  Z + z * 0.003,
                  re - 0.0175,
                  Ae + 0.0042,
                  0.012,
                  0.005,
                  0.0072,
                ),
                0.005,
              )));
          }
        }
      }
      if (e0 < 0.05 && x > 0.035) {
        const z = e.nose;
        ((H = B(
          H,
          _0(
            q,
            $,
            x,
            0,
            z.bridge[0],
            z.bridge[1],
            z.r0,
            0,
            z.tip[0],
            z.tip[1],
            z.r1,
          ),
          0.011,
        )),
          (H = B(
            H,
            se(
              q,
              $,
              x,
              0,
              (z.bridge[0] + z.tip[0]) * 0.5 + 0.004,
              (z.bridge[1] + z.tip[1]) * 0.5 + 0.0045,
              z.r0 * 0.9,
            ),
            0.008,
          )));
        for (const Z of [-1, 1])
          H = B(
            H,
            b0(
              q,
              $,
              x,
              Z * z.wing * 0.92,
              z.tip[0] - 0.0035,
              z.tip[1] - 0.0135,
              0.0068,
              0.0054,
              0.0068,
            ),
            0.007,
          );
        for (const Z of [-1, 1])
          H = f0(
            H,
            -b0(
              q,
              $,
              x,
              Z * z.wing * 0.55,
              z.tip[0] - 0.0085,
              z.tip[1] - 0.006,
              0.0034,
              0.002,
              0.004,
            ),
            0.002,
          );
        if ($ < -0.03 && $ > -0.12)
          for (const Z of [-1, 1])
            H = f0(
              H,
              -K0(
                q,
                $,
                x,
                Z * 0.018,
                -0.046,
                e.foldZ[0],
                Z * 0.031,
                -0.1,
                e.foldZ[1],
                0.0011,
              ),
              0.0045,
            );
        $ < t + 0.025 &&
          $ > t - 0.03 &&
          ((H = B(
            H,
            b0(q, $, x, 0, t + 0.0038, i + 5e-4, s * 1.02, 0.0042, 0.0066),
            0.005,
          )),
          (H = B(
            H,
            b0(q, $, x, 0, t - 0.0044, i - 0.0012, s * 0.94, 0.005, 0.0068),
            0.005,
          )));
      }
    }
    if (e0 > 0.045 && x < 0.035)
      for (const z of [-1, 1]) {
        const Z = e.ear;
        let p0 = b0(q, $, x, z * Z[0], Z[1], Z[2], 0.0105, Z[3], Z[4]);
        ((p0 = f0(
          p0,
          -b0(
            q,
            $,
            x,
            z * (Z[0] + 0.007),
            Z[1] - 0.004,
            Z[2] + 0.003,
            0.006,
            Z[3] * 0.5,
            Z[4] * 0.5,
          ),
          0.003,
        )),
          (p0 = B(
            p0,
            b0(
              q,
              $,
              x,
              z * (Z[0] + 0.001),
              Z[1] - Z[3] * 0.72,
              Z[2] + 0.004,
              0.006,
              0.009,
              0.008,
            ),
            0.004,
          )),
          (H = B(H, p0, 0.006)));
      }
    if (
      (e0 < s + 0.03 &&
        Math.abs($ - t) < 0.04 &&
        x > 0 &&
        ((H = f0(H, -d(q, $, x), 0.0025)), (H = Math.min(H, f(q, $, x)))),
      x > 0.03 && Math.abs($ - re) < 0.03)
    )
      for (const z of [-1, 1]) H = Math.min(H, se(q, $, x, z * Ve, re, Ae, je));
    return H;
  }
  function C() {
    return re;
  }
  const p = [e.C7[0] - o[0], e.C7[1] - o[1], e.C7[2] - o[2]],
    F = (q, $, x) => {
      let e0 = _0(
        q,
        $,
        x,
        0,
        e.neckTop[0],
        e.neckTop[1],
        e.neckR[0],
        p[0],
        p[1] - 0.03,
        p[2] + 0.01,
        e.neckR[1],
      );
      for (const H of [-1, 1])
        e0 = B(
          e0,
          K0(
            q,
            $,
            x,
            H * 0.048,
            -0.05,
            -0.012,
            H * 0.015,
            p[1] - 0.005,
            p[2] + 0.06,
            e.cordR,
          ),
          0.014,
        );
      return B(
        e0,
        b0(q, $, x, 0, e.adam[0], e.adam[1], 0.01, 0.013, 0.011),
        0.01,
      );
    },
    J = (q, $, x) => v(q - o[0], $ - o[1], x - o[2]),
    n0 = (q, $, x) => {
      const e0 = q - o[0],
        H = $ - o[1],
        z = x - o[2];
      for (const p0 of [-1, 1])
        if (se(e0, H, z, p0 * Ve, re, Ae, je) < 5e-4) return L.EYE;
      if (f(e0, H, z) < 0.0012) return L.TEETH;
      const Z = d(e0, H, z);
      return Z > -0.0035 && Z < (z < i - 0.012 ? 0.003 : 9e-4) && z < i - 0.004
        ? L.MOUTH
        : L.FACE;
    },
    _ = (q, $, x, e0) => {
      const H = q - o[0],
        z = $ - o[1],
        Z = x - o[2],
        p0 = T0(0.0016, 0.012, h(s - 0.004, s + 0.012, Math.abs(H))),
        j = h(t + 3e-4, t - p0, z),
        t0 = h(r[1] - 0.03, r[1], Z),
        A = h(r[0] + 0.004, r[0] - 0.02, z) * h(r[1] - 0.02, r[1] + 0.005, Z);
      let w = I0(
        Math.max(j * t0, A * h(e.jawSideX, e.jawSideX + 0.03, Math.abs(H))),
      );
      f(H, z, Z) < 0.002 &&
        (w = u.some(
          (i0) =>
            i0.row < 0 &&
            Math.abs(H - i0.x) < 0.006 &&
            Math.abs(z - i0.y) < 0.008,
        )
          ? 1
          : 0);
      const Y = -(z - l[0]) + (l[1] - 0.04 - Z) * e.jawUnder,
        b = h(e.skullBase + 0.02, e.skullBase - 0.035, z),
        g = h(-0.012, 0.04, Y),
        N = h(r[1] - 0.03, r[1] + 0.02, Z),
        V = I0(T0(Math.max(b, g), g, N)),
        O = h(p[1] + 0.035, p[1] - 0.01, z);
      ((e0[d0.head] += (1 - w) * (1 - V)),
        (e0[d0.jaw] += w * (1 - V)),
        (e0[d0.neck] += V * (1 - O)),
        (e0[d0.chest] += V * O));
    },
    G = {
      eyeL: [Ve * 1e3, re * 1e3],
      eyeR: [-Ve * 1e3, re * 1e3],
      eyeRad: je * 1e3,
      mouthY: t * 1e3,
      mouthW: s * 1e3,
      noseTip: e.nose.tip[0] * 1e3,
      chinY: l[0] * 1e3,
      browY: e.brow[1] * 1e3,
    },
    y = [o[0] - 0.105, o[1] + l[0] - 0.03, o[2] - 0.13],
    E = [o[0] + 0.105, o[1] + n.c[1] + n.r[1] + 0.006, o[2] + 0.14],
    c0 = {
      L: [o[0] + Ve, o[1] + re, o[2] + Ae],
      R: [o[0] - Ve, o[1] + re, o[2] + Ae],
      r: je,
    },
    u0 = {
      sdf: (q, $, x) => F(q - o[0], $ - o[1], x - o[2]),
      min: [o[0] - 0.085, o[1] + p[1] - 0.07, o[2] - 0.1],
      max: [o[0] + 0.085, o[1] - 0.02, o[2] + 0.085],
    };
  return {
    sdf: J,
    mat: n0,
    weights: _,
    features: G,
    min: y,
    max: E,
    HC: o,
    rect: e.rect,
    carve: d,
    teeth: u,
    localSDF: v,
    neck: u0,
    eyeC: c0,
  };
}
function ko() {
  const e = {
      hips: [0, 0.93, 0],
      spine: [0, 1.06, -0.012],
      chest: [0, 1.215, -0.02],
      neck: [0, 1.435, -0.035],
      head: [0, 1.562, -0.022],
      jaw: [0, 1.587, -0.006],
      headTop: [0, 1.745, -0.012],
      chin: [0, 1.488, 0.07],
      shoulderL: [0.026, 1.395, -0.028],
      upperArmL: [0.178, 1.378, -0.035],
      shoulderR: [-0.026, 1.395, -0.028],
      upperArmR: [-0.178, 1.378, -0.035],
      thighL: [0.088, 0.89, 0],
      shinL: [0.092, 0.48, 0.015],
      footL: [0.095, 0.08, -0.02],
      thighR: [-0.088, 0.89, 0],
      shinR: [-0.092, 0.48, 0.015],
      footR: [-0.095, 0.08, -0.02],
      toeL: [0.1, 0.018, 0.19],
      toeR: [-0.1, 0.018, 0.19],
      heelL: [0.095, 0.02, -0.07],
      heelR: [-0.095, 0.02, -0.07],
    },
    o = 0.305,
    n = 0.26,
    c = 0.19;
  for (const m of [1, -1]) {
    const M = z0(m),
      D = e["upperArm" + De(m)];
    ((e["foreArm" + De(m)] = G0(D, M, o)),
      (e["hand" + De(m)] = G0(D, M, o + n)),
      (e["handTip" + De(m)] = G0(D, M, o + n + c * 0.8)));
  }
  const t = [0, 1.625, 0.004],
    s = { c: [0, 0.018, -0.012], r: [0.072, 0.095, 0.1] },
    i = Lo({
      HC: t,
      seed: 41,
      C7: e.neck,
      cran: s,
      lowerFace: { c: [0, -0.05, 0.022], r: [0.06, 0.07, 0.075] },
      jawR: [0.05, 0.042, 0.074],
      temple: [0.07, 0.022, 0.05],
      chin: [-0.134, 0.066],
      chinZ: 0.083,
      chinW: 0.023,
      jawSlope: 0.42,
      jawUnder: 0.5,
      faceZ: 0.1,
      cheek: [0.047, -0.02, 0.06],
      hollow: [0.05, -0.066, 0.05],
      brow: [0.037, 0.026, 0.0745, 0.0104],
      socket: [0.018, 0.0145, 0.018],
      nose: {
        bridge: [0.016, 0.086],
        r0: 0.0058,
        tip: [-0.04, 0.112],
        r1: 0.0092,
        wing: 0.012,
      },
      mouthY: -0.084,
      mouthW: 0.023,
      mouthZ: 0.089,
      foldZ: [0.09, 0.079],
      jawHinge: [-0.038, -0.012],
      jawSideX: 0.042,
      skullBase: -0.058,
      ear: [0.069, -0.012, -0.008, 0.034, 0.02],
      neckTop: [-0.07, -0.03],
      neckR: [0.038, 0.049],
      cordR: 0.0102,
      adam: [-0.122, 0.026],
      rect: [-0.1, -0.175, 0.2, 0.29],
    }),
    r = (m, M, D) => {
      const I = m - t[0],
        U = M - t[1],
        Q = D - t[2];
      if (U < -0.085 || U > 0.13) return 0.03;
      const a0 = Math.atan2(I, Q - s.c[2]),
        v0 = Math.abs(a0),
        N0 = T0(0.05, 0.084, h(1.25, 2.4, v0)) + 0.004 * Math.sin(a0 * 5 + 1.1),
        O0 =
          v0 < 1.18
            ? -0.014
            : v0 < 1.85
              ? T0(-0.014, 0.03, h(1.18, 1.3, v0))
              : T0(0.03, -0.066, h(1.85, 2.35, v0)),
        A0 = h(1.12, 1.3, v0),
        U0 = h(N0 + 0.016, N0 - 0.012, U) * h(O0 - 0.006, O0 + 0.012, U) * A0,
        ne =
          (Math.sin(a0 * 34 + U * 70) * 0.55 +
            Math.sin(a0 * 13 - U * 45 + 2.1) * 0.45) *
          9e-4 *
          U0,
        ke = 0.0056 * U0 - 0.0085 * (1 - U0),
        dt =
          b0(
            I,
            U,
            Q,
            s.c[0],
            s.c[1],
            s.c[2],
            s.r[0] + ke,
            s.r[1] + ke,
            s.r[2] + ke,
          ) + ne,
        ft = b0(
          I,
          U,
          Q,
          s.c[0],
          s.c[1],
          s.c[2],
          s.r[0] - 0.006,
          s.r[1] - 0.006,
          s.r[2] - 0.006,
        );
      return f0(dt, -ft, 0.002);
    },
    l = {
      min: [t[0] - 0.085, t[1] - 0.09, t[2] - 0.125],
      max: [t[0] + 0.085, t[1] + 0.105, t[2] + 0.07],
    },
    a = (m, M) => {
      let D = 0,
        I = 0.14;
      for (let U = 0; U < 26; U++) {
        const Q = (D + I) / 2;
        i.localSDF(m, M, Q) < 0 ? (D = Q) : (I = Q);
      }
      return (D + I) / 2;
    },
    u = [];
  for (const m of [1, -1]) {
    const M = [
      [0.011, 0.0192],
      [0.02, 0.0206],
      [0.03, 0.0204],
      [0.04, 0.0178],
      [0.049, 0.0118],
    ].map(([D, I]) => {
      const U = a(m * D, I) - 0.0014;
      return [t[0] + m * D, t[1] + I, t[2] + U];
    });
    u.push({ s: m, pts: M, r: [0.0043, 0.0046, 0.0041, 0.0033, 0.0022] });
  }
  const f = (m, M, D) => {
      let I = 1e9;
      for (const U of u) {
        const Q = U.pts;
        if (!(Math.abs(m - Q[2][0]) > 0.04))
          for (let a0 = 0; a0 < Q.length - 1; a0++)
            I = B(
              I,
              _0(
                m,
                M,
                D,
                Q[a0][0],
                Q[a0][1],
                Q[a0][2],
                U.r[a0],
                Q[a0 + 1][0],
                Q[a0 + 1][1],
                Q[a0 + 1][2],
                U.r[a0 + 1],
              ),
              0.002,
            );
      }
      return (
        I -
        (7e-4 * Math.sin(m * 900 + M * 520) +
          6e-4 * Math.sin(m * 1500 - M * 800 + 1.3)) *
          h(-0.004, 0, -I) -
        9e-4 * (me(m * 300, M * 300, D * 300) - 0.5)
      );
    },
    d = (m, M, D) => {
      let I = b0(m, M, D, 0, 1.26, -0.018, 0.127, 0.158, 0.09);
      ((I = B(I, b0(m, M, D, 0, 1.06, -0.004, 0.11, 0.14, 0.084), 0.06)),
        (I = B(I, b0(m, M, D, 0, 0.935, -0.006, 0.14, 0.095, 0.097), 0.05)),
        (I = B(
          I,
          K0(m, M, D, -0.156, 1.378, -0.034, 0.156, 1.378, -0.034, 0.045),
          0.07,
        )));
      for (const U of [-1, 1])
        ((I = B(
          I,
          K0(m, M, D, U * 0.03, 1.44, -0.044, U * 0.148, 1.396, -0.038, 0.037),
          0.05,
        )),
          (I = B(
            I,
            b0(m, M, D, U * 0.07, 1.3, -0.083, 0.054, 0.064, 0.024),
            0.03,
          )));
      return I;
    },
    v = z0(1),
    C = z0(-1),
    p = e.upperArmL,
    F = e.upperArmR,
    J = e.foreArmL,
    n0 = e.foreArmR,
    _ = e.handL,
    G = e.handR,
    y = { 1: o + n - 0.034, [-1]: o + n - 0.012 },
    E = (m, M, D) => {
      const I = d(m, M, D);
      let U = I - 0.011;
      for (const Q of [1, -1]) {
        if (Q * m < 0.08) continue;
        const a0 = Q > 0 ? p : F,
          v0 = Q > 0 ? J : n0,
          N0 = Q > 0 ? _ : G,
          O0 = Q > 0 ? v : C;
        let A0 = _0(
          m,
          M,
          D,
          a0[0] - Q * 0.012,
          a0[1] + 0.006,
          a0[2],
          0.059,
          v0[0],
          v0[1],
          v0[2],
          0.051,
        );
        A0 = B(
          A0,
          _0(
            m,
            M,
            D,
            v0[0],
            v0[1],
            v0[2],
            0.051,
            N0[0] - O0[0] * 0.01,
            N0[1] - O0[1] * 0.01,
            N0[2],
            0.046,
          ),
          0.014,
        );
        const U0 = (m - a0[0]) * O0[0] + (M - a0[1]) * O0[1];
        A0 -=
          0.0035 *
          Math.pow(0.5 + 0.5 * Math.sin(U0 * 92 + D * 30), 2) *
          h(0.22, 0.29, U0) *
          h(0.44, 0.35, U0);
        const ne = y[Q];
        ((A0 -= 0.0035 * h(ne - 0.062, ne - 0.055, U0)),
          (A0 = f0(A0, U0 - ne, 0.004)),
          (U = B(U, A0, 0.03)));
      }
      return (
        (U = B(
          U,
          f0(
            W0(m, M, D, 0, 1.18, 0.08, 0.0105, 0.255, 0.05, 0.004),
            -(I - 0.0132),
            0.003,
          ),
          0.002,
        )),
        (U = f0(U, -K0(m, M, D, 0, 1.4, -0.02, 0, 1.7, -0.026, 0.05), 0.008)),
        D < -0.03 &&
          M < 1.12 &&
          (U -=
            0.0022 *
            Math.pow(0.5 + 0.5 * Math.sin(Math.atan2(m, -D) * 22), 2) *
            h(1.12, 1, M)),
        f0(U, 0.955 - M, 0.01)
      );
    },
    c0 = (m, M, D) => {
      const I = Math.hypot(m, (D + 0.02) * 1.05) - 0.0535;
      let U = W0(I, M, 0, 0, 1.4625, 0, 0.0042, 0.0185, 1, 0.0028);
      return ((U = f0(U, M - 1.4825 + 0.006 * h(0, 0.05, D), 0.002)), U);
    },
    u0 = (m, M, D) =>
      Math.abs(m) < 0.0115 && D > 0.02 && M > 1.449 && M < 1.4815
        ? L.CLOTH_C
        : L.CLOTH_A,
    q = (m) => T0(0.128, 0.158, h(1, 0.87, m)) + 0.056 * h(0.87, 0.1, m),
    $ = (m) => T0(0.1, 0.118, h(1, 0.87, m)) + 0.062 * h(0.87, 0.1, m),
    x = (m) => -0.006 - 0.016 * h(0.9, 0.1, m),
    e0 = (m, M, D) => {
      const I = q(M),
        U = $(M),
        Q = x(M);
      return (Math.hypot(m / I, (D - Q) / U) - 1) * Math.min(I, U);
    },
    H = (m, M, D) => {
      const I = e0(m, M, D);
      if (I > 0.06) return I;
      const U = x(M),
        Q = Math.atan2(m, D - U),
        a0 = h(0.95, 0.25, M);
      let v0 =
        I -
        0.012 *
          a0 *
          Math.pow(
            0.5 + 0.5 * Math.sin(Q * 7 + 0.4 + Math.sin(M * 4.5) * 0.5),
            2,
          ) -
        0.004 * a0 * Math.pow(0.5 + 0.5 * Math.sin(Q * 15 + 1.7 + M * 3), 3);
      return (
        (v0 = f0(v0, 0.074 + 0.005 * Math.sin(Q * 5 + 1) - M, 0.005)),
        (v0 = f0(v0, M - 1, 0.01)),
        (v0 = f0(v0, -Math.max(I + 0.03, M - 0.5), 0.008)),
        v0
      );
    },
    z = (m, M, D) => (Math.hypot(m / 0.129, (D + 0.005) / 0.101) - 1) * 0.101,
    Z = (m, M, D) =>
      W0(z(m, M, D), M, 0, 0.004, 1.016, 0, 0.0048, 0.042, 1, 0.0032),
    p0 = (m, M, D) => Math.min(E(m, M, D), H(m, M, D), Z(m, M, D)),
    j = (m, M) => {
      const I = [
          m(M[0] + 0.001, M[1], M[2]) - m(M[0] - 0.001, M[1], M[2]),
          m(M[0], M[1] + 0.001, M[2]) - m(M[0], M[1] - 0.001, M[2]),
          m(M[0], M[1], M[2] + 0.001) - m(M[0], M[1], M[2] - 0.001),
        ],
        U = Math.hypot(I[0], I[1], I[2]) || 1;
      return [I[0] / U, I[1] / U, I[2] / U];
    },
    t0 = (m, M) => {
      let D = [...m];
      for (let U = 0; U < 12; U++) {
        const Q = p0(D[0], D[1], D[2]),
          a0 = j(p0, D);
        D = [D[0] - a0[0] * Q, D[1] - a0[1] * Q, D[2] - a0[2] * Q];
      }
      const I = j(p0, D);
      return [[D[0] + I[0] * M, D[1] + I[1] * M, D[2] + I[2] * M], I];
    },
    A = (m, M, D, I, U = null) => {
      const Q = [];
      for (let a0 = 0; a0 < m.length - 1; a0++) {
        const v0 = m[a0],
          N0 = m[a0 + 1],
          O0 = U ? U(v0) : D,
          A0 = U ? U(N0) : D,
          U0 = [N0[0] - v0[0], N0[1] - v0[1], N0[2] - v0[2]],
          ne = Math.hypot(U0[0], U0[1], U0[2]);
        ((U0[0] /= ne), (U0[1] /= ne), (U0[2] /= ne));
        const ke = [
          (v0[0] + N0[0]) / 2,
          (v0[1] + N0[1]) / 2,
          (v0[2] + N0[2]) / 2,
        ];
        Q.push({
          a: v0,
          t: U0,
          L: ne,
          na: M[a0],
          nb: M[a0 + 1],
          c: ke,
          R: ne / 2 + Math.max(O0, A0) + 0.02,
          wa: O0,
          wb: A0,
        });
      }
      return (a0, v0, N0) => {
        let O0 = 1e9;
        for (const A0 of Q) {
          const U0 = a0 - A0.c[0],
            ne = v0 - A0.c[1],
            ke = N0 - A0.c[2];
          if (U0 * U0 + ne * ne + ke * ke > A0.R * A0.R) continue;
          const dt = a0 - A0.a[0],
            ft = v0 - A0.a[1],
            Pt = N0 - A0.a[2],
            Bt = dt * A0.t[0] + ft * A0.t[1] + Pt * A0.t[2],
            Pe = I0(Bt / A0.L);
          let Ge = T0(A0.na[0], A0.nb[0], Pe),
            Ue = T0(A0.na[1], A0.nb[1], Pe),
            $e = T0(A0.na[2], A0.nb[2], Pe);
          const vt = Ge * A0.t[0] + Ue * A0.t[1] + $e * A0.t[2];
          ((Ge -= A0.t[0] * vt), (Ue -= A0.t[1] * vt), ($e -= A0.t[2] * vt));
          const Mt = Math.hypot(Ge, Ue, $e) || 1;
          ((Ge /= Mt), (Ue /= Mt), ($e /= Mt));
          const F1 = A0.t[1] * $e - A0.t[2] * Ue,
            E1 = A0.t[2] * Ge - A0.t[0] * $e,
            I1 = A0.t[0] * Ue - A0.t[1] * Ge,
            Wt = dt - A0.t[0] * Pe * A0.L,
            jt = ft - A0.t[1] * Pe * A0.L,
            Kt = Pt - A0.t[2] * Pe * A0.L,
            N1 = Wt * F1 + jt * E1 + Kt * I1,
            D1 = Wt * Ge + jt * Ue + Kt * $e,
            H1 = Bt - Pe * A0.L;
          O0 = Math.min(
            O0,
            W0(
              H1,
              N1,
              D1,
              0,
              0,
              0,
              0.003,
              T0(A0.wa, A0.wb, Pe),
              I,
              Math.min(I * 0.9, 0.0025),
            ),
          );
        }
        return O0;
      };
    },
    w = 0.0044,
    Y = 0.0275,
    b = (m, M, D) => {
      let I = 0,
        U = 0.35;
      for (let v0 = 0; v0 < 26; v0++) {
        const N0 = (I + U) / 2;
        p0(m, M, N0) < 0 ? (I = N0) : (U = N0);
      }
      const Q = [m, M, (I + U) / 2],
        a0 = j(p0, Q);
      return [[Q[0] + a0[0] * D, Q[1] + a0[1] * D, Q[2] + a0[2] * D], a0];
    },
    g = (m, M, D) => {
      let I = 1.62;
      for (; I > 1.3 && p0(m, I, M) > 0;) I -= 0.002;
      let U = I,
        Q = I + 0.002;
      for (let N0 = 0; N0 < 20; N0++) {
        const O0 = (U + Q) / 2;
        p0(m, O0, M) < 0 ? (U = O0) : (Q = O0);
      }
      const a0 = [m, (U + Q) / 2, M],
        v0 = j(p0, a0);
      return [[a0[0] + v0[0] * D, a0[1] + v0[1] * D, a0[2] + v0[2] * D], v0];
    },
    N = w + 0.0034;
  let V = [
    ...[0.52, 0.64, 0.77, 0.9, 1.02, 1.13, 1.23, 1.31, 1.37, 1.415].map(
      (m, M) => b(0.07 + M * 6e-4, m, N),
    ),
    ...[
      [0.077, 0.045],
      [0.082, 0.018],
      [0.084, -0.012],
    ].map(([m, M]) => g(m, M, N)),
    ...[100, 122, 146, 164, 180].map((m) => {
      const D = Math.cos((m * Math.PI) / 180),
        I = Math.sin((m * Math.PI) / 180),
        U = g(0.075 * I, -0.024 + 0.075 * D, N),
        Q = [I, 0.55, D],
        a0 = Math.hypot(Q[0], Q[1], Q[2]);
      return [
        [U[0][0], Math.max(U[0][1], 1.468), U[0][2]],
        Q.map((v0) => v0 / a0),
      ];
    }),
  ];
  for (let m = 0; m < 2; m++)
    V = V.map((M, D) => {
      if (D === 0 || D === V.length - 1) return M;
      const I = V[D - 1],
        U = V[D + 1],
        Q = [0, 1, 2].map(
          (N0) => M[0][N0] * 0.5 + (I[0][N0] + U[0][N0]) * 0.25,
        ),
        a0 = [0, 1, 2].map(
          (N0) => M[1][N0] * 0.5 + (I[1][N0] + U[1][N0]) * 0.25,
        ),
        v0 = Math.hypot(a0[0], a0[1], a0[2]);
      return [Q, a0.map((N0) => N0 / v0)];
    });
  const O = [
      ...V.map((m) => m[0]),
      ...V.slice(0, -1)
        .reverse()
        .map((m) => [-m[0][0], m[0][1], m[0][2]]),
    ],
    i0 = [
      ...V.map((m) => m[1]),
      ...V.slice(0, -1)
        .reverse()
        .map((m) => [-m[1][0], m[1][1], m[1][2]]),
    ],
    m0 = A(O, i0, Y, w, (m) =>
      T0(Y, 0.017, h(1.4, 1.47, m[1]) * h(0.02, -0.04, m[2])),
    ),
    S = [1, -1].map((m) => {
      const M = m > 0 ? O[0] : O[O.length - 1],
        D = m > 0 ? O[1] : O[O.length - 2],
        I = m > 0 ? i0[0] : i0[i0.length - 1],
        U = [T0(M[0], D[0], 0.6), T0(M[1], D[1], 0.6), T0(M[2], D[2], 0.6)];
      return { s: m, c: [U[0] + I[0] * w, U[1], U[2] + I[2] * w], n: I };
    }),
    P = (m, M, D) => {
      let I = 1e9;
      for (const U of S) {
        const Q = m - U.c[0],
          a0 = M - U.c[1],
          v0 = D - U.c[2];
        Q * Q + a0 * a0 + v0 * v0 > 0.0016 ||
          (I = Math.min(
            I,
            W0(Q, a0, v0, 0, 0, 0, 0.0034, 0.02, 0.0016, 0.0012),
            W0(Q, a0, v0, 0, 0.007, 0, 0.0125, 0.0034, 0.0016, 0.0012),
          ));
      }
      return I;
    },
    s0 = (m, M, D) => Math.min(m0(m, M, D), P(m, M, D)),
    o0 = (m, M, D) => (P(m, M, D) < 9e-4 ? zt : L.CLOTH_B),
    g0 = {
      min: [
        Math.min(...O.map((m) => m[0])) - 0.05,
        Math.min(...O.map((m) => m[1])) - 0.03,
        Math.min(...O.map((m) => m[2])) - 0.03,
      ],
      max: [
        Math.max(...O.map((m) => m[0])) + 0.05,
        Math.max(...O.map((m) => m[1])) + 0.03,
        Math.max(...O.map((m) => m[2])) + 0.03,
      ],
    },
    w0 = [
      [0.105, 0.99, 0.1],
      [0.118, 0.9, 0.1],
      [0.13, 0.8, 0.1],
      [0.138, 0.71, 0.1],
      [0.143, 0.64, 0.1],
    ].map((m) => t0(m, 0.0048)),
    k0 = [
      [0.13, 0.985, 0.05],
      [0.146, 0.89, 0.05],
      [0.156, 0.8, 0.05],
      [0.162, 0.72, 0.05],
    ].map((m) => t0(m, 0.0092)),
    q0 = A(
      w0.map((m) => m[0]),
      w0.map((m) => m[1]),
      0.033,
      0.004,
    ),
    B0 = A(
      k0.map((m) => m[0]),
      k0.map((m) => m[1]),
      0.029,
      0.004,
    ),
    P0 = (m, M, D) => {
      let I = Z(m, M, D);
      if (m > 0.05 && D > -0.05 && M < 1.08) {
        let U = Math.min(q0(m, M, D), B0(m, M, D));
        ((U += 0.0012 * h(0.7, 0.66, M) * Math.sin(m * 700 + D * 300)),
          (I = B(I, U, 0.004)));
      }
      return I;
    },
    y0 = [];
  for (let m = 0; m < 36; m++) {
    const M = 1.43 - m * 0.0325;
    if (M < 0.33) break;
    if (M > 0.955 && M < 1.078) continue;
    let D = 0,
      I = 0.35;
    for (let U = 0; U < 26; U++) {
      const Q = (D + I) / 2;
      p0(0, M, Q) < 0 ? (D = Q) : (I = Q);
    }
    y0.push([0, M, (D + I) / 2 + 0.0012]);
  }
  const x0 = (m, M, D) => {
      let I = 1e9;
      for (const U of y0)
        Math.abs(M - U[1]) > 0.012 ||
          (I = Math.min(
            I,
            b0(m, M, D, U[0], U[1], U[2], 0.0047, 0.0047, 0.0027),
          ));
      return I;
    },
    Y0 = (m) =>
      nt({
        wrist: e["hand" + De(m)],
        dir: z0(m),
        side: m,
        palm: [0.088, 0.078, 0.024],
        fingers: [
          [0.092, 0.0073],
          [0.1, 0.0076],
          [0.094, 0.0072],
          [0.076, 0.0063],
        ],
        thumb: [0.066, 0.0086],
        curl: m > 0 ? [0.22, 0.34, 0.26] : [0.12, 0.22, 0.16],
        bony: 0.8,
        seed: m > 0 ? 43 : 44,
        spread: 0.012,
      }),
    R = Y0(1),
    T = Y0(-1),
    K = G0(J, v, n - 0.078),
    l0 = G0(J, v, n + 0.006),
    h0 = (m, M, D) => {
      let I = _0(
        m,
        M,
        D,
        K[0],
        K[1],
        K[2],
        0.0305,
        l0[0],
        l0[1],
        l0[2],
        0.0262,
      );
      const U = (m - J[0]) * v[0] + (M - J[1]) * v[1],
        Q = Math.atan2(D - J[2], (m - J[0]) * v[1] - (M - J[1]) * v[0]);
      return (
        (I -= 0.0016 * Math.pow(0.5 + 0.5 * Math.sin(U * 170 + Q * 1), 2)),
        f0(I, U - (n + 0.006) - 0.004 * Math.sin(Q * 3 + 1), 0.002)
      );
    },
    C0 = [];
  {
    const m = R.frame,
      M = 0.024,
      D = 0.078;
    for (let U = 0; U < 17; U++) {
      const Q = (U / 17) * Math.PI * 2,
        a0 = Math.cos(Q) * (M * 0.5 + 0.0052),
        v0 = Math.sin(Q) * (D * 0.5 + 0.0045);
      C0.push(m.world(0.03 + Math.sin(Q * 2) * 0.004, a0, v0));
    }
    let I = m.world(0.034, -M * 0.2, -D * 0.5 - 0.006);
    for (let U = 0; U < 5; U++)
      ((I = [I[0] + 0.004, I[1] - 0.0098, I[2] + 0.0015]), C0.push(I));
  }
  const S0 = C0[C0.length - 1],
    F0 = [S0[0] + 0.003, S0[1] - 0.019, S0[2] + 0.002],
    E0 = (m, M, D) => {
      let I = 1e9;
      for (const U of C0) {
        const Q = m - U[0],
          a0 = M - U[1],
          v0 = D - U[2];
        Q * Q + a0 * a0 + v0 * v0 < 2e-4 &&
          (I = Math.min(I, Math.sqrt(Q * Q + a0 * a0 + v0 * v0) - 0.0043));
      }
      return (
        (I = Math.min(
          I,
          W0(m, M, D, F0[0], F0[1], F0[2], 0.0028, 0.0125, 0.0022, 0.001),
          W0(
            m,
            M,
            D,
            F0[0],
            F0[1] + 0.005,
            F0[2],
            0.0085,
            0.0026,
            0.0022,
            0.001,
          ),
        )),
        I
      );
    },
    D0 = {
      min: [0, 1, 2].map(
        (m) => Math.min(...C0.map((M) => M[m]), F0[m] - 0.015) - 0.012,
      ),
      max: [0, 1, 2].map(
        (m) => Math.max(...C0.map((M) => M[m]), F0[m] + 0.015) + 0.012,
      ),
    },
    $0 = (m) =>
      gt({
        ankle: e["foot" + De(m)],
        x: e["foot" + De(m)][0],
        len: 0.285,
        width: 0.1,
        kind: "dress",
      }),
    V0 = $0(1),
    Q0 = $0(-1),
    X0 = (m, M, D) => {
      let I = 1e9;
      for (const U of [-1, 1]) {
        const Q = e["shin" + De(U)],
          a0 = e["foot" + De(U)];
        I = Math.min(
          I,
          _0(
            m,
            M,
            D,
            Q[0],
            Q[1] - 0.03,
            Q[2],
            0.05,
            a0[0],
            a0[1] + 0.045,
            a0[2],
            0.041,
          ),
        );
      }
      return I;
    },
    k = (m, M, D, I) => {
      const U = h(-0.06, 0.06, m),
        Q = h(0.99, 0.8, M) * T0(0.88, 0.5, h(0, -0.1, D)),
        a0 = h(0.57, 0.36, M) * 0.5;
      ((I[d0.hips] += 1 - Q),
        (I[d0.thighL] += Q * U * (1 - a0)),
        (I[d0.shinL] += Q * U * a0),
        (I[d0.thighR] += Q * (1 - U) * (1 - a0)),
        (I[d0.shinR] += Q * (1 - U) * a0));
    },
    W = (m, M, D, I) => {
      if (M < 0.99) {
        k(m, M, D, I);
        return;
      }
      const U = h(1.43, 1.5, M) * 0.3,
        Q = h(1.08, 1.2, M),
        a0 = h(1.06, 0.99, M);
      ((I[d0.neck] += U),
        (I[d0.chest] += (1 - U) * Q),
        (I[d0.spine] += (1 - U) * (1 - Q) * (1 - a0)),
        (I[d0.hips] += (1 - U) * (1 - Q) * a0));
    },
    X = (m, M, D, I) => {
      const U = h(1.448, 1.482, M) * 0.5;
      ((I[d0.chest] += 1 - U), (I[d0.neck] += U));
    },
    r0 = (m, M, D, I) => {
      M < 0.975 ? k(m, M, D, I) : (I[d0.hips] += 1);
    },
    L0 = [
      {
        name: "head",
        sdf: i.sdf,
        mat: i.mat,
        weights: i.weights,
        min: i.min,
        max: i.max,
        res: 0.0026,
        aoK: 0.28,
      },
      {
        name: "hair",
        sdf: r,
        mat: L.HAIR,
        weights: i.weights,
        min: l.min,
        max: l.max,
        res: 0.0034,
        aoK: 0.5,
      },
      {
        name: "brows",
        sdf: f,
        mat: L.HAIR,
        weights: i.weights,
        res: 0.0017,
        aoK: 0.4,
        min: [t[0] - 0.062, t[1] + 0, t[2] + 0.058],
        max: [t[0] + 0.062, t[1] + 0.032, t[2] + 0.105],
      },
      {
        name: "neck",
        sdf: i.neck.sdf,
        mat: L.SKIN,
        weights: i.weights,
        min: i.neck.min,
        max: i.neck.max,
        res: 0.005,
      },
      {
        name: "collar",
        sdf: c0,
        mat: u0,
        weights: X,
        min: [-0.07, 1.435, -0.09],
        max: [0.07, 1.49, 0.05],
        res: 0.003,
      },
      {
        name: "bodice",
        sdf: E,
        mat: L.CLOTH_A,
        res: 0.0078,
        sigma: 0.026,
        min: [-0.6, 0.93, -0.14],
        max: [0.6, 1.5, 0.15],
        bones: [
          "hips",
          "spine",
          "chest",
          "neck",
          "shoulderL",
          "upperArmL",
          "foreArmL",
          "shoulderR",
          "upperArmR",
          "foreArmR",
        ],
      },
      {
        name: "skirt",
        sdf: H,
        mat: (m, M, D) => (e0(m, M, D) < -0.016 ? yt : L.CLOTH_A),
        weights: k,
        res: 0.0092,
        min: [-0.27, 0.06, -0.24],
        max: [0.27, 1.02, 0.22],
      },
      {
        name: "sash",
        sdf: P0,
        mat: L.BELT,
        weights: r0,
        res: 0.005,
        min: [-0.16, 0.6, -0.13],
        max: [0.2, 1.07, 0.13],
      },
      {
        name: "buttons",
        sdf: x0,
        mat: L.BELT,
        weights: W,
        res: 0.0022,
        min: [-0.008, 0.31, 0.06],
        max: [0.008, 1.45, 0.22],
        project: 2,
      },
      {
        name: "stole",
        sdf: s0,
        mat: o0,
        weights: W,
        res: 0.0045,
        min: g0.min,
        max: g0.max,
      },
      {
        name: "handL",
        sdf: R.sdf,
        mat: (m, M, D) => (R.nailAt(m, M, D) ? L.NAIL : L.SKIN),
        min: R.min,
        max: R.max,
        res: 0.003,
        bones: ["handL", "foreArmL"],
        sigma: 0.015,
      },
      {
        name: "handR",
        sdf: T.sdf,
        mat: (m, M, D) => (T.nailAt(m, M, D) ? L.NAIL : L.SKIN),
        min: T.min,
        max: T.max,
        res: 0.003,
        bones: ["handR", "foreArmR"],
        sigma: 0.015,
      },
      {
        name: "bandage",
        sdf: h0,
        mat: St,
        res: 0.0034,
        min: [0.4, 0.9, -0.08],
        max: [0.6, 1.08, 0.01],
        bones: ["foreArmL", "handL"],
        sigma: 0.02,
      },
      {
        name: "rosary",
        sdf: E0,
        mat: e1,
        res: 0.0019,
        min: D0.min,
        max: D0.max,
        bones: ["handL"],
        sigma: 0.05,
        project: 2,
      },
      {
        name: "legs",
        sdf: X0,
        mat: yt,
        res: 0.009,
        min: [-0.17, 0.08, -0.08],
        max: [0.17, 0.5, 0.08],
        bones: ["shinL", "footL", "shinR", "footR"],
        sigma: 0.02,
      },
      {
        name: "shoeL",
        sdf: V0.sdf,
        mat: L.SHOE,
        min: V0.min,
        max: V0.max,
        res: 0.005,
        bones: ["footL", "shinL"],
        sigma: 0.02,
      },
      {
        name: "shoeR",
        sdf: Q0.sdf,
        mat: L.SHOE,
        min: Q0.min,
        max: Q0.max,
        res: 0.005,
        bones: ["footR", "shinR"],
        sigma: 0.02,
      },
    ];
  return {
    kind: "priest",
    height: 1.74,
    J: e,
    HC: t,
    head: i,
    parts: L0,
    col: (m, M, D, I, U) => {
      let Q = 0,
        a0 = 0,
        v0 = 0,
        N0 = 0;
      const O0 = oe(m * 9, M * 9, D * 9, 2);
      if (U === "handL" || U === "handR") {
        const U0 = (U === "handL" ? R : T).local(m, M, D);
        ((N0 =
          0.75 *
          h(0, 0.008, U0[1]) *
          h(-0.02, 0.02, U0[0]) *
          h(0.1, 0.07, U0[0])),
          (v0 =
            h(0.8, 0.86, me(m * 160, M * 160, D * 160)) *
            h(0.004, 0.01, U0[1]) *
            0.7),
          (a0 = 0.12 + 0.1 * O0),
          I === L.NAIL && (a0 = 0.35));
      } else if (U === "head" || U === "neck")
        ((v0 =
          h(0.82, 0.88, me(m * 90, M * 90, D * 90)) * h(1.66, 1.7, M) * 0.5),
          (a0 = 0.04 * O0));
      else if (U === "skirt")
        a0 =
          0.12 +
          0.35 * h(0.3, 0.08, M) +
          0.3 * h(0.06, 0.02, Math.abs(M - 0.48)) * h(0.04, 0.12, D) +
          0.15 * O0;
      else if (U === "bodice" || U === "collar")
        ((a0 = 0.08 + 0.1 * O0), I === L.CLOTH_C && (a0 = 0.25 + 0.2 * O0));
      else if (U === "bandage") {
        a0 = 0.5 + 0.3 * O0;
        const A0 = G0(J, v, n - 0.02);
        Q =
          h(
            0.016,
            0.006,
            Math.hypot(m - A0[0] + 0.004, M - A0[1] - 0.004, D - A0[2] - 0.026),
          ) * 0.85;
      } else
        U === "stole"
          ? (a0 = 0.08 + 0.1 * O0)
          : (U === "legs" || U.startsWith("shoe")) && (a0 = 0.25 + 0.3 * O0);
      return [I0(Q), I0(a0), I0(v0), I0(N0)];
    },
    alive: { pupil: 0.965, lid: v1, catch: 1 },
    paintFace: Ro,
    segA: { hips: [0, 0.85, -0.005] },
    rad: {
      hips: 0.12,
      spine: 0.105,
      chest: 0.115,
      neck: 0.043,
      head: 0.088,
      jaw: 0.038,
      shoulderL: 0.042,
      upperArmL: 0.046,
      foreArmL: 0.04,
      handL: 0.028,
      shoulderR: 0.042,
      upperArmR: 0.046,
      foreArmR: 0.04,
      handR: 0.028,
      thighL: 0.075,
      shinL: 0.055,
      footL: 0.034,
      thighR: 0.075,
      shinR: 0.055,
      footR: 0.034,
    },
    hit: [
      ["head", [0, 1.62, 0.005], [0, 1.66, -0.01], 0.1, "head"],
      ["chest", [0, 1.17, -0.01], [0, 1.38, -0.02], 0.14, "body"],
      ["spine", [0, 0.95, -0.005], [0, 1.14, -0.005], 0.135, "body"],
      ["neck", e.neck, [0, 1.55, -0.02], 0.05, "body"],
      ["upperArmL", e.upperArmL, e.foreArmL, 0.058, "body"],
      ["foreArmL", e.foreArmL, e.handL, 0.05, "body"],
      ["upperArmR", e.upperArmR, e.foreArmR, 0.058, "body"],
      ["foreArmR", e.foreArmR, e.handR, 0.05, "body"],
      ["handL", e.handL, e.handTipL, 0.04, "body"],
      ["handR", e.handR, e.handTipR, 0.04, "body"],
      ["thighL", e.thighL, e.shinL, 0.075, "legs"],
      ["shinL", e.shinL, e.footL, 0.05, "legs"],
      ["thighR", e.thighR, e.shinR, 0.075, "legs"],
      ["shinR", e.shinR, e.footR, 0.05, "legs"],
      ["footL", [0.095, 0.05, -0.04], [0.1, 0.04, 0.17], 0.04, "legs"],
      ["footR", [-0.095, 0.05, -0.04], [-0.1, 0.04, 0.17], 0.04, "legs"],
    ],
    palette: {
      [L.SKIN]: {
        base: "#bd9a8a",
        shade: "#77544f",
        deep: "#4a3232",
        line: "#2a1614",
        type: "skin",
        rim: 0.45,
      },
      [L.FACE]: {
        base: "#c29d8c",
        shade: "#7b5752",
        deep: "#4c3333",
        line: "#2a1614",
        type: "skin",
        rim: 0.45,
      },
      [L.EYE]: {
        base: "#e6ddd0",
        shade: "#8a8078",
        line: "#2a1614",
        type: "eye",
      },
      [L.MOUTH]: {
        base: "#2c1616",
        shade: "#120808",
        deep: "#080404",
        line: "#0a0505",
        type: "mouth",
      },
      [L.TEETH]: {
        base: "#d6c9a8",
        shade: "#7a6f58",
        line: "#2a2218",
        type: "teeth",
      },
      [L.HAIR]: {
        base: "#aaa6a0",
        shade: "#66625d",
        deep: "#3a3835",
        line: "#1f1d1b",
        type: "hair",
      },
      [L.CLOTH_A]: {
        base: "#1f1d22",
        shade: "#0d0c10",
        deep: "#07070a",
        line: "#050507",
        type: "cloth",
        fold: 0.3,
        rim: 0.3,
      },
      [L.CLOTH_B]: {
        base: "#5e2f86",
        shade: "#27123a",
        deep: "#150a20",
        line: "#0d0613",
        type: "cloth",
        fold: 0.12,
      },
      [L.CLOTH_C]: {
        base: "#ece6d6",
        shade: "#8f887a",
        deep: "#57524a",
        line: "#2a2824",
        type: "cloth",
        fold: 0,
      },
      [L.SHOE]: {
        base: "#1d1a1b",
        shade: "#080707",
        deep: "#040303",
        line: "#040303",
        type: "leather",
      },
      [L.NAIL]: {
        base: "#caa596",
        shade: "#6e524a",
        line: "#2a1614",
        type: "teeth",
      },
      [St]: {
        base: "#cfc4a6",
        shade: "#6f6754",
        deep: "#3a362c",
        line: "#1f1c18",
        type: "cloth",
        fold: 0.1,
      },
      [L.BELT]: {
        base: "#1b191e",
        shade: "#09080b",
        deep: "#050407",
        line: "#040305",
        type: "leather",
      },
      [yt]: {
        base: "#141316",
        shade: "#070608",
        deep: "#040405",
        line: "#030304",
        type: "cloth",
      },
      [e1]: {
        base: "#6b4527",
        shade: "#2e1c10",
        deep: "#170e08",
        line: "#120a06",
        type: "plastic",
        spec: 0.5,
      },
      [zt]: {
        base: "#b8913e",
        shade: "#5a4219",
        deep: "#2e210c",
        line: "#1a1307",
        type: "plastic",
        spec: 0.8,
      },
    },
    pattern: { [St]: [3, 190] },
    shade: {
      livorY: -3,
      vein: "#6a7690",
      bruise: "#9a6e52",
      blood: "#5a3322",
      bloodShade: "#2a160f",
      dirt: "#b7a996",
    },
    eyes: { iris: "#6e5033", sclera: "#ddd2c3", cloud: 0, gaze: [0, 0, 0, 0] },
    style: {
      hunch: 6,
      chestHunch: 5,
      headRoll: 0,
      headPitch: 3,
      headYaw: 0,
      neckFwd: 12,
      jaw: 0,
      shoulderDrop: 0,
      leanR: 0,
      armSpread: 0.1,
      elbow: 0.25,
      idleWidth: 0.1,
      idleCrouch: 0.022,
      sway: 0.4,
      twitch: 0,
      comp: 0.55,
      shamble: {
        v: 0.9,
        cadence: 1.85,
        duty: 0.62,
        lift: [0.042, 0.042],
        width: 0.095,
        crouch: 0.035,
        bob: 0.012,
        sway: 0.018,
        roll: 2.5,
        yaw: 3,
        toeOut: 0.1,
        lean: 4,
        armSwing: 8,
        heel: 0.1,
        toeOff: 0.1,
      },
      run: {
        v: 2.3,
        cadence: 2.5,
        duty: 0.42,
        lift: [0.12, 0.12],
        width: 0.1,
        crouch: 0.08,
        bob: 0.03,
        sway: 0.03,
        lean: 14,
      },
    },
  };
}
function Z0(e, o, n) {
  const c = o.length;
  if (c < 2) return;
  const t = [],
    s = [];
  for (let i = 0; i < c; i++) {
    const r = o[Math.max(0, i - 1)],
      l = o[Math.min(c - 1, i + 1)];
    let a = l[0] - r[0],
      u = l[1] - r[1];
    const f = Math.hypot(a, u) || 1;
    ((a /= f), (u /= f));
    const d = (typeof n == "function" ? n(i / (c - 1)) : n) * 0.5;
    (t.push([o[i][0] - u * d, o[i][1] + a * d]),
      s.push([o[i][0] + u * d, o[i][1] - a * d]));
  }
  (e.beginPath(), e.moveTo(t[0][0], t[0][1]));
  for (let i = 1; i < c; i++) e.lineTo(t[i][0], t[i][1]);
  for (let i = c - 1; i >= 0; i--) e.lineTo(s[i][0], s[i][1]);
  (e.closePath(), e.fill());
}
const J0 = (e, o, n, c, t = 18) => {
  const s = [];
  for (let i = 0; i <= t; i++) {
    const r = i / t,
      l = 1 - r;
    s.push([
      l * l * l * e[0] +
        3 * l * l * r * o[0] +
        3 * l * r * r * n[0] +
        r * r * r * c[0],
      l * l * l * e[1] +
        3 * l * l * r * o[1] +
        3 * l * r * r * n[1] +
        r * r * r * c[1],
    ]);
  }
  return s;
};
function fe(e, o, n, c, t, s, i, r = 0, l = 0) {
  (e.save(), e.translate(o, n), e.rotate(r), e.scale(1, t / c));
  const a = e.createRadialGradient(0, 0, 0, 0, 0, c);
  (a.addColorStop(0, `rgba(${s},${i})`),
    a.addColorStop(Math.max(0.01, l), `rgba(${s},${i})`),
    a.addColorStop(1, `rgba(${s},0)`),
    (e.fillStyle = a),
    e.beginPath(),
    e.arc(0, 0, c, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
function Ro(e, o) {
  const [n, c, t, s] = e.head.rect,
    i = 1024,
    r = Math.round((i * s) / t),
    l = o
      ? o(i, r)
      : Object.assign(document.createElement("canvas"), {
          width: i,
          height: r,
        }),
    a = l.getContext("2d"),
    u = i / (t * 1e3);
  (a.setTransform(u, 0, 0, -u, -n * 1e3 * u, (c + s) * 1e3 * u),
    a.clearRect(n * 1e3, c * 1e3, t * 1e3, s * 1e3));
  const f = e.head.features,
    d = ot(57),
    v = [
      [f.eyeL[0], f.eyeL[1], 1],
      [f.eyeR[0], f.eyeR[1], -1],
    ],
    C = f.mouthY,
    p = f.mouthW,
    F = f.noseTip,
    J = "128,78,68",
    n0 = "98,56,50";
  for (const [_, G, y] of v)
    (fe(a, y * 40, -40, 20, 15, "196,120,108", 0.15),
      fe(a, y * 57, 16, 16, 26, "150,104,92", 0.18),
      fe(a, _, G - 2, 17, 12, "214,130,120", 0.15));
  (fe(a, 0, F + 4, 11, 9, "200,110,100", 0.22),
    fe(a, 0, 62, 42, 22, "222,178,150", 0.12));
  for (const [_, G, y] of v) {
    (fe(a, _, G + 5, 14, 5, "214,168,148", 0.28),
      fe(a, _ + y * 2, G - 14, 13, 5.5, "150,100,92", 0.14, y * -0.1),
      (a.fillStyle = `rgba(${J},0.3)`),
      Z0(
        a,
        J0(
          [_ - y * 11, G - 17],
          [_ - y * 4, G - 21.5],
          [_ + y * 6, G - 21.5],
          [_ + y * 14, G - 16],
        ),
        (E) => Math.sin(E * Math.PI) * 1.1 + 0.15,
      ),
      (a.fillStyle = "rgba(232,190,166,0.22)"),
      Z0(
        a,
        J0(
          [_ - y * 10, G - 20],
          [_ - y * 3, G - 24.5],
          [_ + y * 6, G - 24.5],
          [_ + y * 13, G - 19],
        ),
        (E) => Math.sin(E * Math.PI) * 1.6,
      ),
      (a.fillStyle = `rgba(${J},0.5)`),
      Z0(
        a,
        J0(
          [_ - y * 12, G + 2.2],
          [_ - y * 6, G + 8.8],
          [_ + y * 6, G + 8.8],
          [_ + y * 14, G + 1.4],
        ),
        (E) => Math.sin(E * Math.PI) * 1.1 + 0.2,
      ),
      (a.fillStyle = "rgba(70,46,42,0.6)"),
      Z0(
        a,
        J0(
          [_ - y * 10.5, G - 0.4],
          [_ - y * 4, G + 2.4],
          [_ + y * 5, G + 2.4],
          [_ + y * 11.5, G - 1],
        ),
        (E) => Math.sin(E * Math.PI) * 0.9 + 0.25,
      ),
      (a.fillStyle = "rgba(214,112,112,0.62)"),
      Z0(
        a,
        J0(
          [_ - y * 10, G - 2.4],
          [_ - y * 4, G - 5.2],
          [_ + y * 5, G - 5.2],
          [_ + y * 11, G - 1.8],
        ),
        (E) => Math.sin(E * Math.PI) * 1.2 + 0.25,
      ),
      (a.fillStyle = "rgba(120,80,72,0.22)"),
      Z0(
        a,
        J0(
          [_ - y * 9, G - 4.8],
          [_ - y * 3, G - 7.2],
          [_ + y * 5, G - 7.2],
          [_ + y * 11, G - 3.6],
        ),
        (E) => Math.sin(E * Math.PI) * 0.7,
      ),
      fe(a, _ - y * 11.2, G - 0.6, 2.4, 2, "222,120,122", 0.75, 0, 0.35),
      (a.fillStyle = `rgba(${J},0.38)`));
    for (let E = 0; E < 3; E++) {
      const c0 = G + 3 - E * 4.2;
      Z0(
        a,
        J0(
          [_ + y * 15, c0],
          [_ + y * 19, c0 + (1 - E) * 0.8],
          [_ + y * 22, c0 + (1 - E) * 1.8],
          [_ + y * 26, c0 + (1 - E) * 3.2],
        ),
        (u0) => Math.sin(u0 * Math.PI) * 0.8,
      );
    }
  }
  for (const [_, G, y] of v) {
    const E = J0([y * 10, 16], [y * 20, 20.5], [y * 36, 20], [y * 50, 11]);
    ((a.fillStyle = "rgba(120,114,108,0.55)"),
      Z0(a, E, (c0) => (c0 < 0.15 ? 3 + c0 * 16 : 5.5 * (1 - c0) + 1.2)));
    for (let c0 = 0; c0 < 70; c0++) {
      const u0 = d(),
        q = E[Math.floor(u0 * (E.length - 1))],
        $ = q[0] + (d() - 0.5) * 3,
        x = q[1] + (d() - 0.6) * 4 * (1 - u0 * 0.5),
        e0 = 3 + d() * 5,
        H = (y > 0 ? 0.25 : Math.PI - 0.25) + (d() - 0.5) * 0.7 - y * u0 * 0.5;
      ((a.fillStyle =
        d() < 0.6 ? "rgba(214,210,202,0.75)" : "rgba(88,82,78,0.65)"),
        Z0(
          a,
          [
            [$, x],
            [$ + Math.cos(H) * e0 * 0.5, x + Math.sin(H) * e0 * 0.5 + 0.4],
            [$ + Math.cos(H) * e0, x + Math.sin(H) * e0],
          ],
          (z) => 0.42 * (1 - z * 0.7),
        ));
    }
  }
  a.fillStyle = `rgba(${J},0.4)`;
  for (let _ = 0; _ < 4; _++) {
    const G = 44 + _ * 7.5 + (d() - 0.5) * 1.5,
      y = 30 - _ * 2;
    Z0(
      a,
      J0([-y, G - 1.5], [-y * 0.35, G + 1.8], [y * 0.35, G + 1.2], [y, G - 2]),
      (E) => Math.sin(E * Math.PI) * (0.9 + (d() - 0.5) * 0.3),
    );
  }
  for (const _ of [1, -1])
    ((a.fillStyle = `rgba(${J},0.45)`),
      Z0(
        a,
        J0([_ * 5, 14], [_ * 5.5, 20], [_ * 5, 25], [_ * 6.5, 30]),
        (G) => Math.sin(G * Math.PI) * 1,
      ),
      (a.fillStyle = `rgba(${n0},0.22)`),
      Z0(
        a,
        J0([_ * 16, F + 2], [_ * 23, F - 16], [_ * 27, C + 6], [_ * 29, C - 8]),
        (G) => Math.sin(G * Math.PI) * 1.6 + 0.2,
      ),
      (a.fillStyle = "rgba(236,190,164,0.1)"),
      Z0(
        a,
        J0([_ * 19, F + 1], [_ * 26, F - 16], [_ * 30, C + 6], [_ * 32, C - 6]),
        (G) => Math.sin(G * Math.PI) * 2.2,
      ),
      (a.fillStyle = `rgba(${J},0.18)`),
      Z0(
        a,
        J0(
          [_ * (p + 1.5), C - 2],
          [_ * (p + 3), C - 9],
          [_ * (p + 4), C - 16],
          [_ * (p + 6), C - 25],
        ),
        (G) => Math.sin(G * Math.PI) * 1.2,
      ),
      Z0(
        a,
        J0([_ * 38, -32], [_ * 40, -45], [_ * 40, -58], [_ * 38, -70]),
        (G) => Math.sin(G * Math.PI) * 0.9,
      ));
  ((a.fillStyle = `rgba(${J},0.28)`),
    Z0(
      a,
      J0([-11, -111], [-4, -108], [4, -108], [11, -111]),
      (_) => Math.sin(_ * Math.PI) * 1.4,
    ),
    fe(a, 0, F - 7, 10, 3.8, "110,62,56", 0.55));
  for (const _ of [1, -1])
    (fe(a, _ * 5.6, F - 6, 2.7, 1.7, "40,18,18", 0.9, 0, 0.45),
      (a.fillStyle = `rgba(${J},0.4)`),
      Z0(
        a,
        J0(
          [_ * 10, F + 5],
          [_ * 13.5, F + 1],
          [_ * 13.5, F - 4],
          [_ * 10, F - 7],
        ),
        (G) => Math.sin(G * Math.PI) * 1,
      ));
  for (let _ = 0; _ < 5200; _++) {
    const G = (d() - 0.5) * 104,
      y = C + 34 - d() * 72,
      E = Math.hypot(G / 52, (y - C + 8) / 44);
    if (
      E > 1 ||
      d() > 1.25 - E * 1.1 ||
      (Math.abs(G) < p + 2.5 && Math.abs(y - C) < 5.5) ||
      (y > F - 9 && Math.abs(G) < 17) ||
      (y > F + 4 - Math.abs(G) * 0.35 && Math.abs(G) > 17)
    )
      continue;
    const c0 = d() < 0.4,
      u0 = y > C && Math.abs(G) < p + 4 ? 0.55 : 1;
    ((a.fillStyle = c0
      ? `rgba(196,192,186,${0.42 * u0})`
      : `rgba(92,84,80,${0.42 * u0})`),
      a.beginPath(),
      a.arc(G, y, 0.24 + d() * 0.22, 0, Math.PI * 2),
      a.fill());
  }
  ((a.fillStyle = "rgba(168,98,92,0.6)"),
    Z0(
      a,
      J0(
        [-p - 1, C + 0.2],
        [-p * 0.4, C + 4.8],
        [p * 0.4, C + 4.8],
        [p + 1, C + 0.2],
      ),
      (_) => Math.sin(_ * Math.PI) * 3.2 + 0.5,
    ),
    (a.fillStyle = "rgba(178,108,102,0.58)"),
    Z0(
      a,
      J0([-p, C - 0.8], [-p * 0.4, C - 7], [p * 0.4, C - 7], [p, C - 0.8]),
      (_) => Math.sin(_ * Math.PI) * 4.2 + 0.5,
    ),
    (a.fillStyle = "rgba(84,40,40,0.8)"),
    Z0(
      a,
      J0(
        [-p - 1.5, C - 1.4],
        [-p * 0.4, C + 0.6],
        [p * 0.4, C + 0.6],
        [p + 1.5, C - 1.4],
      ),
      (_) => 0.5 + Math.sin(_ * Math.PI) * 0.7,
    ),
    fe(a, 0, C + 9, 4, 5, "150,96,84", 0.2));
  for (let _ = 0; _ < 7; _++) {
    const G = _ % 2 ? 1 : -1;
    fe(
      a,
      G * (30 + d() * 28),
      20 + d() * 45,
      1.6 + d() * 2.2,
      1.4 + d() * 1.8,
      "150,100,70",
      0.28,
      d() * 3,
      0.3,
    );
  }
  for (const [_, G, y] of v)
    ((a.fillStyle = "rgba(232,168,158,0.2)"),
      Z0(
        a,
        J0(
          [_ - y * 3, G - 8],
          [_ - y * 4, G - 20],
          [_ - y * 2, G - 32],
          [_ - y * 4, G - 44],
        ),
        (E) => 1.4 * (1 - E * 0.6),
      ));
  return l;
}
function yo(e, o) {
  const [n, c, t, s] = e.head.rect,
    i = 1024,
    r = Math.round((i * s) / t),
    l = o
      ? o(i, r)
      : Object.assign(document.createElement("canvas"), {
          width: i,
          height: r,
        }),
    a = l.getContext("2d"),
    u = i / (t * 1e3);
  (a.setTransform(u, 0, 0, -u, -n * 1e3 * u, (c + s) * 1e3 * u),
    a.clearRect(n * 1e3, c * 1e3, t * 1e3, s * 1e3));
  const f = e.head.features,
    d = f.mouthY,
    v = f.mouthW,
    C = f.noseTip;
  ((a.fillStyle = "rgba(206,160,146,0.45)"),
    Z0(
      a,
      J0(
        [-v - 1, d + 0.4],
        [-v * 0.4, d + 4.6],
        [v * 0.4, d + 4.6],
        [v + 1, d + 0.4],
      ),
      (p) => Math.sin(p * Math.PI) * 3.2 + 0.4,
    ),
    Z0(
      a,
      J0([-v, d - 0.9], [-v * 0.4, d - 6.6], [v * 0.4, d - 6.6], [v, d - 0.9]),
      (p) => Math.sin(p * Math.PI) * 4 + 0.4,
    ),
    (a.fillStyle = "rgba(48,20,20,0.95)"),
    Z0(
      a,
      J0(
        [-v - 1.8, d - 0.9],
        [-v * 0.4, d + 0.3],
        [v * 0.4, d + 0.3],
        [v + 1.8, d - 0.9],
      ),
      (p) => 0.85 + Math.pow(Math.abs(p - 0.5) * 2, 2) * 1.1,
    ));
  for (const p of [1, -1])
    ((a.fillStyle = "rgba(54,24,22,0.88)"),
      Z0(
        a,
        J0(
          [p * (v + 1.2), d - 0.8],
          [p * (v + 3.2), d + 0.2],
          [p * (v + 4.6), d + 2.6],
          [p * (v + 5.4), d + 5.6],
        ),
        (F) => 1.8 * (1 - F) + 0.15,
      ),
      (a.fillStyle = "rgba(96,52,46,0.35)"),
      Z0(
        a,
        J0(
          [p * (v + 0.5), d - 2.4],
          [p * (v + 3.5), d - 2.2],
          [p * (v + 5.5), d + 0.5],
          [p * (v + 7), d + 4],
        ),
        (F) => Math.sin(F * Math.PI) * 2.4,
      ),
      (a.fillStyle = "rgba(78,40,36,0.55)"),
      Z0(
        a,
        J0(
          [p * 15.5, C + 1],
          [p * 22, C - 15],
          [p * 27, d + 8],
          [p * 28.5, d - 9],
        ),
        (F) => Math.sin(Math.pow(F, 0.8) * Math.PI) * 1.7 + 0.25,
      ),
      (a.fillStyle = "rgba(244,206,184,0.3)"),
      Z0(
        a,
        J0([p * 19, C - 1], [p * 26, C - 16], [p * 31, d + 7], [p * 32, d - 6]),
        (F) => Math.sin(F * Math.PI) * 3.2,
      ),
      fe(a, p * 36, -50, 10, 7, "246,212,192", 0.22, p * 0.5),
      fe(a, p * 33, d - 6, 8, 5, "120,70,62", 0.16, p * -0.4));
  return l;
}
const te = Math.PI / 180,
  R0 = (e, o, n) => {
    const c = I0((n - e) / (o - e));
    return c * c * (3 - 2 * c);
  },
  So = (e) => e - Math.floor(e),
  de = (e, o) =>
    Math.sin(e * 1.31 + o) * 0.5 +
    Math.sin(e * 2.27 + o * 2.1) * 0.3 +
    Math.sin(e * 0.53 + o * 3.7) * 0.2,
  wt = (e, o) => (e <= 0 ? 0 : (e / o) * Math.exp(1 - e / o)),
  qe = (e, o) => So(Math.sin(e * 12.9898 + o * 78.233) * 43758.5453),
  Ke = new H0(0, 1, 0),
  Ao = new H0(1, 0, 0),
  at = 0.056,
  pe = { 1: [0.1, 0.012, 0.1], [-1]: [-0.1, -0.018, -0.1] },
  M1 = {
    1: [d0.upperArmL, d0.foreArmL, d0.handL],
    [-1]: [d0.upperArmR, d0.foreArmR, d0.handR],
  };
function ae(e) {
  if (e._pr) return e._pr;
  const o = () => new H0(),
    n = () => new Ht();
  return (e._pr = {
    lw: 0,
    look: o(),
    lookOn: !1,
    eyeT: o(),
    eyeOn: !1,
    lb: o(),
    a: o(),
    b: o(),
    c: o(),
    d: o(),
    e: o(),
    f: o(),
    g: o(),
    h: o(),
    k: o(),
    h0: o(),
    h1: o(),
    h2: o(),
    h3: o(),
    h4: o(),
    h5: o(),
    q0: n(),
    q1: n(),
    q2: n(),
    q3: n(),
    m0: new Je(),
    m1: new Je(),
    snap: { 1: [n(), n(), n()], [-1]: [n(), n(), n()] },
    fq: { 1: n(), [-1]: n() },
  });
}
function st(e, o, n, c, t, s, i, r, l) {
  const a = ae(e),
    u = n > 0 ? d0.foreArmL : d0.foreArmR,
    f = n > 0 ? d0.handL : d0.handR;
  e.fkTo(o, u);
  const d = a.h0.set(n * 0.6428, -0.766, 0),
    v = a.h1.set(n * 0.766, 0.6428, 0),
    C = a.h2.crossVectors(d, v),
    p = a.h3.set(c, t, s).normalize(),
    F = a.h4.set(i, r, l);
  F.addScaledVector(p, -F.dot(p)).normalize();
  const J = a.h5.crossVectors(p, F);
  (a.m0.makeBasis(p, F, J),
    a.m1.makeBasis(d, v, C).transpose(),
    a.m0.multiply(a.m1),
    o.q[f].copy(e.wq[u]).invert().multiply(a.q0.setFromRotationMatrix(a.m0)));
}
function Oe(e, o, n, c, t, s, i, r, l, a, u, f, d, v, C, p) {
  const F = ae(e);
  e.fkTo(o, c);
  const J = F.q1.copy(e.wq[c]),
    n0 = F.a.set(t, s, i).applyQuaternion(J).add(e.wp[c]),
    _ = F.b.set(v, C, p).applyQuaternion(J);
  e.armIK(o, n, n0.x, n0.y, n0.z, _.x, _.y, _.z);
  const G = F.c.set(r, l, a).applyQuaternion(J),
    y = F.d.set(u, f, d).applyQuaternion(J);
  st(e, o, n, G.x, G.y, G.z, y.x, y.y, y.z);
}
function Me(e, o, n) {
  const c = M1[n],
    t = ae(e).snap[n];
  for (let s = 0; s < 3; s++) t[s].copy(o.q[c[s]]);
}
const t1 = new Ht();
function Le(e, o, n, c) {
  const t = M1[n],
    s = ae(e).snap[n];
  for (let i = 0; i < 3; i++)
    (t1.copy(o.q[t[i]]), o.q[t[i]].copy(s[i]).slerp(t1, c));
}
function Ee(e, o, n, c, t) {
  const s = e.st,
    i = e.seed,
    r = ae(e),
    l = Math.sin(n * 1.45 + i) * (t.breath ?? 1),
    a = 1 - (t.still ?? 0),
    u = (s.sway ?? 0.4) * a,
    f = de(n * 0.4, i) * 1.2 * u,
    d = de(n * 0.3, i + 4) * 1.6 * u,
    v = s.hunch + (t.lean ?? 0),
    C = s.chestHunch,
    p = v * 0.55 + (t.sp ?? 0),
    F = C + v * 0.45 + l * 0.9 + (t.cp ?? 0);
  let J = d * 0.4 + (t.syaw ?? 0),
    n0 = d * 0.6 + (t.cyaw ?? 0);
  const _ = f * 0.5 + (t.sr ?? 0),
    G = f * 0.5 + (t.cr ?? 0),
    y = t.target || null,
    E = !y && e.look && (t.look ?? 1) > 0 ? e.look : null,
    c0 = y
      ? (t.targetW ?? 1)
      : E
        ? Math.min(1, (e.lookW ?? 0.85) / 0.85) * (t.look ?? 1)
        : 0;
  (y || c <= 0
    ? (r.lw = y ? c0 : r.lw)
    : (r.lw += (c0 - r.lw) * (1 - Math.exp(-c * 5))),
    !y && c <= 0 && E && (r.lw = c0));
  const u0 = y || E;
  u0 &&
    (!r.lookOn || y || c <= 0
      ? r.look.copy(u0)
      : r.look.lerp(u0, 1 - Math.exp(-c * 7)),
    (r.lookOn = !0));
  const q = r.look,
    $ = r.lookOn ? r.lw : 0;
  if (
    ((r.eyeOn = $ > 0.3),
    r.eyeOn && r.eyeT.copy(q),
    $ > 0.002 && (t.torso ?? 1) > 0)
  ) {
    e.fkTo(o, d0.hips);
    const Z = r.e
      .copy(q)
      .sub(e.wp[0])
      .applyQuaternion(r.q2.copy(e.wq[0]).invert());
    let p0 = Math.atan2(Z.x, Z.z) / te;
    t.right && p0 > 100 && (p0 -= 360);
    const j = Math.sign(p0) * I0(Math.abs(p0) - 40, 0, 120),
      t0 = I0(j * 0.6, -58, 58) * $ * (t.torso ?? 1);
    ((J += t0 * 0.4), (n0 += t0 * 0.6));
  }
  (e.qe(o.q[d0.spine], p, J, _), e.qe(o.q[d0.chest], F, n0, G));
  let x =
      s.headPitch -
      (v + C) * (t.comp ?? s.comp ?? 0.55) +
      (t.hp ?? 0) -
      l * 0.4,
    e0 = (t.hy ?? 0) + de(n * 0.23, i + 2) * 2.2 * a,
    H = (t.hr ?? 0) + de(n * 0.19, i + 7) * 1.6 * a;
  if ($ > 0.002) {
    e.fkTo(o, d0.neck);
    const Z = r.e
      .copy(q)
      .sub(e.wp[d0.neck])
      .applyQuaternion(r.q2.copy(e.wq[d0.chest]).invert());
    Z.y -= 0.17;
    let p0 = Math.atan2(Z.x, Z.z) / te;
    const j = Math.atan2(-Z.y, Math.hypot(Z.x, Z.z)) / te;
    t.right && p0 > 100 && (p0 -= 360);
    const t0 = t.maxYaw ?? 76;
    ((x = T0(x, I0(j, -30, 42) + (t.hp ?? 0) * 0.3, $)),
      (e0 = T0(e0, I0(p0, -t0, t0) + (t.hy ?? 0) * 0.3, $)),
      (H *= 1 - 0.6 * $));
  }
  ((x += t.hp2 ?? 0), (e0 += t.hy2 ?? 0), (H += t.hr2 ?? 0));
  const z = s.neckFwd ?? 10;
  return (
    e.qe(o.q[d0.neck], x * 0.4 + z, e0 * 0.45, H * 0.45),
    e.qe(o.q[d0.head], x * 0.6 - z * 0.85, e0 * 0.55, H * 0.55),
    e.qe(o.q[d0.jaw], I0(I0(e.mouth ?? 0) * 9 + (t.jaw ?? 0), 0, 16), 0, 0),
    e.qe(o.q[d0.shoulderL], 0, -3, -4 + (t.shrugL ?? 0)),
    e.qe(o.q[d0.shoulderR], 0, 3, 4 - (t.shrugR ?? 0)),
    l
  );
}
function qt(e, o, n) {
  const c = e.J,
    t = ae(e),
    s = e.legs[1].l1,
    i = (n.lean ?? 0) * te,
    r = t.f.set(n.dx ?? 0, at + s * Math.cos(i), _e + s * Math.sin(i));
  (e.qe(o.q[d0.hips], n.pitch ?? 0, n.yaw ?? 0, n.roll ?? 0),
    o.hp.copy(
      t.g
        .set(0, c.hips[1] - c.thighL[1], c.hips[2] - c.thighL[2])
        .applyQuaternion(o.q[d0.hips])
        .add(r),
    ));
  for (const l of [1, -1]) k1(e, o, l, l * 0.098, _e);
}
function L1(e, o) {
  return (o.setFromEuler(xo.set(168 * te, e * 9 * te, 0, "YXZ")), o);
}
const xo = new j1();
function k1(e, o, n, c, t) {
  const s = ae(e),
    i = e.legs[n];
  e.fkTo(o, i.b1);
  const r = s.h.set(c, at, t),
    l = s.k.set(c + n * 0.012, 0.047, t - i.l2 * 0.995),
    a = s.e.copy(r).sub(e.wp[i.b1]);
  (e.ik(o, i, l, a), Nt(e, o, n, L1(n, s.q3)));
}
function Nt(e, o, n, c) {
  const t = e.legs[n];
  (e.fkTo(o, t.b2),
    o.q[n > 0 ? d0.footL : d0.footR].copy(e.wq[t.b2]).invert().multiply(c));
}
const o1 = new H0();
function n1(e, o, n) {
  let c = 0;
  for (const s of [e.heel[o], e.toe[o]])
    c = Math.min(c, o1.copy(s).applyQuaternion(n).y);
  const t = o > 0 ? d0.footL : d0.footR;
  for (const s of e.vols)
    if (s.bone === t)
      for (const i of [s.a, s.b])
        c = Math.min(c, o1.copy(i).applyQuaternion(n).y - s.r * 0.72);
  return -c + 0.004;
}
function ct(e, o, n = 0, c = 0) {
  for (const t of [1, -1])
    Oe(
      e,
      o,
      t,
      d0.chest,
      t * 0.0125,
      0.15 + n,
      0.225 + c,
      0,
      0.86,
      0.5,
      t,
      0,
      0,
      t * 0.9,
      -0.5,
      -0.25,
    );
}
function Qe(e, o) {
  (Oe(
    e,
    o,
    1,
    d0.hips,
    0.052,
    0.07,
    0.172,
    -0.82,
    -0.5,
    0.2,
    0.08,
    0.1,
    1,
    0.9,
    -0.2,
    -0.5,
  ),
    Oe(
      e,
      o,
      -1,
      d0.hips,
      -0.046,
      0.085,
      0.188,
      0.85,
      -0.42,
      0.22,
      -0.05,
      0.3,
      1,
      -0.9,
      -0.2,
      -0.5,
    ));
}
function To(e, o) {
  const c = Math.floor(o / 4.3),
    t = c * 4.3 + qe(c, e.seed) * 1.8,
    s = wt(o - t, 0.07) * (o > t ? Math.exp(-(o - t) * 3) * 2.2 : 0);
  return { k: I0(s), side: qe(c + 7, e.seed) > 0.5 ? 1 : -1 };
}
function Xe(e, o, n, c, t = {}) {
  const s = e.J,
    i = e.seed,
    r = 1 - (t.still ?? 0),
    l = de(n * 0.16, i + 1) * 0.018 * (t.shift ?? 1),
    a = Math.sin(n * 1.45 + i) * r;
  (o.hp.set(
    l,
    s.hips[1] - 0.022 - Math.abs(l) * 0.2 + a * 0.0015,
    s.hips[2] + 0.005,
  ),
    e.qe(o.q[d0.hips], 1.5, de(n * 0.14, i + 3) * 2 * r, -l * 90),
    Ee(e, o, n, c, { lean: 2, ...t }));
  for (const u of [1, -1]) {
    const f = pe[u];
    e.leg(o, u, f[0], e.ankleFor(u, 0), f[1], 0, f[2]);
  }
}
function Co(e, o, n, c) {
  const t = this,
    s = t.seed,
    i = Math.sin(n * 2 * Math.PI * 0.4),
    r = de(n * 0.35, s + 3),
    l = To(t, n);
  (qt(t, e, {
    lean: -4 + i * 4.5,
    pitch: 10 + i * 3,
    roll: -2 + r * 2.2,
    yaw: r * 2,
  }),
    Ee(t, e, n, c, {
      sp: 14 + i * 4 + l.k * 2,
      cp: 12 + i * 3,
      sr: -3 + r * 2,
      cr: -4 + r * 2 + l.k * 4 * l.side,
      hp: 34 + i * 4 - l.k * 5,
      hr: 24 + r * 4 + l.k * 7 * l.side,
      hy: 6,
      comp: 0,
      look: 0,
      breath: 0.5,
      jaw:
        Math.max(0, Math.sin(n * 7.3) * Math.sin(n * 1.9 + 1)) *
        5 *
        (t.mouth ? 0 : 1),
      shrugL: 3 + (l.side > 0 ? l.k * 12 : 0),
      shrugR: -3 + (l.side < 0 ? l.k * 12 : 0),
    }),
    ct(t, e));
}
function Fo(e, o, n, c) {
  const t = this,
    s = R0(0.12, 1.2, o),
    i = R0(0.3, 1.2, o);
  (qt(t, e, { lean: T0(-4, 1.5, s), pitch: T0(10, 3, s), roll: T0(-2, 0, s) }),
    Ee(t, e, n, c, {
      sp: T0(14, 3, s),
      cp: T0(12, 2, s),
      sr: T0(-3, 0, s),
      cr: T0(-4, 0, s),
      hp: T0(34, 3, i),
      hr: T0(24, 3, s),
      hy: T0(6, 0, s),
      comp: i * 0.6,
      look: 0,
      breath: T0(0.5, 0.25, s),
      shrugL: T0(3, 0, s),
      shrugR: T0(-3, 0, s),
    }),
    ct(t, e, T0(0, -0.07, s), T0(0, -0.04, s)));
}
const R1 = (e) => e.set(0.05, 1.6, _e - 1.45);
function Eo(e, o, n, c) {
  const t = this,
    s = ae(t),
    i = R0(0.22, 1.3, o);
  (qt(t, e, { lean: 1.5, pitch: 3, yaw: -9 * R0(0.4, 1.4, o), dx: -0.01 * i }),
    t.look && t.look.z < _e + 0.1 ? s.lb.copy(t.look) : R1(s.lb),
    Ee(t, e, n, c, {
      sp: 3,
      cp: 2,
      hp: 3,
      hr: 3 * (1 - i),
      comp: 0.6,
      target: s.lb,
      targetW: i,
      right: !0,
      torso: R0(0.3, 1.45, o),
      maxYaw: 84,
      breath: 0.35,
    }),
    ct(t, e, -0.07, -0.04));
}
const Dt = { dur: 2.4, t0: 0.8, t1: 2.05 };
function y1(e) {
  return -Math.PI * R0(Dt.t0, Dt.t1, e);
}
const xe = { 1: [0.11, _e - 0.4], [-1]: [-0.11, _e - 0.4] },
  ee = [0.05, 0.5, pe[-1][0], pe[-1][1], pe[-1][2]],
  Te = [0.98, 1.28, -Math.PI / 2],
  ge = [1.3, 1.64, -pe[-1][0], -pe[-1][1], pe[-1][2] - Math.PI],
  ce = [0.8, 1.28, -0.03, 0.15, -Math.PI / 2],
  le = [1.62, 1.96, -pe[1][0], -pe[1][1], pe[1][2] - Math.PI],
  Io = 0.68,
  et = 0.05;
function No(e, o, n, c) {
  const t = this,
    s = ae(t),
    i = t.J;
  t.seed;
  const r = y1(o),
    l =
      s.rf ||
      (s.rf = { x: 0, z: 0, yaw: 0, pitch: 0, lift: 0, flat: 0, mode: "" }),
    a =
      s.lf ||
      (s.lf = { x: 0, z: 0, yaw: 0, pitch: 0, lift: 0, flat: 0, mode: "" }),
    u = (O, i0, m0, S, P, s0, o0, g0, w0, k0, q0 = 0.16, B0 = 0) => {
      const P0 = I0((o - i0) / (m0 - i0)),
        y0 = R0(q0, 0.86, P0);
      ((O.x = T0(S, o0, y0) + B0 * Math.sin(Math.PI * y0)),
        (O.z = T0(P, g0, y0)),
        (O.yaw = T0(s0, w0, R0(0.1, 0.9, P0))),
        (O.lift = Math.pow(Math.sin(Math.PI * P0), 0.75) * k0),
        (O.pitch = 0),
        (O.mode = "fly"));
    },
    f = (O, i0, m0, S) => {
      ((O.x = i0),
        (O.z = m0),
        (O.yaw = S),
        (O.pitch = 0),
        (O.lift = 0),
        (O.flat = 0),
        (O.mode = "plant"));
    },
    d = s.a.set(ee[2] - et * Math.sin(ee[4]), 0, ee[3] - et * Math.cos(ee[4])),
    v = d.x + et * Math.sin(Te[2]),
    C = d.z + et * Math.cos(Te[2]);
  if (o < ee[0])
    ((l.x = xe[-1][0]),
      (l.z = xe[-1][1]),
      (l.yaw = 0),
      (l.flat = 1),
      (l.lift = 0),
      (l.mode = "kneel"));
  else if (o < ee[1])
    (u(
      l,
      ee[0],
      ee[1],
      xe[-1][0],
      xe[-1][1],
      ee[4],
      ee[2],
      ee[3],
      ee[4],
      0.17,
      0.3,
    ),
      (l.flat = 1 - R0(ee[0], ee[0] + 0.3, o)));
  else if (o < Te[0]) f(l, ee[2], ee[3], ee[4]);
  else if (o < ge[0]) {
    const O = R0(Te[0], Te[1], o),
      i0 = 0.3 * Math.sin(Math.PI * I0((o - Te[0]) / (Te[1] - Te[0]))),
      m0 = T0(ee[4], Te[2], O),
      S = t.ankleShift(-1, i0);
    (f(l, d.x + (et + S) * Math.sin(m0), d.z + (et + S) * Math.cos(m0), m0),
      (l.pitch = i0));
  } else
    o < ge[1]
      ? u(l, ge[0], ge[1], v, C, Te[2], ge[2], ge[3], ge[4], 0.07, 0.16)
      : f(l, ge[2], ge[3], ge[4]);
  o < Io
    ? ((a.x = xe[1][0]),
      (a.z = xe[1][1]),
      (a.yaw = 0),
      (a.flat = 1),
      (a.lift = 0),
      (a.mode = "kneel"))
    : o < ce[0]
      ? ((a.x = xe[1][0]),
        (a.z = xe[1][1]),
        (a.yaw = 0),
        (a.flat = 1),
        (a.lift = 0),
        (a.mode = "fly"))
      : o < ce[1]
        ? (u(
            a,
            ce[0],
            ce[1],
            xe[1][0],
            xe[1][1],
            0,
            ce[2],
            ce[3],
            ce[4],
            0.14,
            0.2,
          ),
          (a.flat = 1 - R0(ce[0], ce[0] + 0.25, o)))
        : o < le[0]
          ? f(a, ce[2], ce[3], ce[4])
          : o < le[1]
            ? (u(
                a,
                le[0],
                le[1],
                ce[2],
                ce[3],
                ce[4],
                le[2],
                le[3],
                le[4],
                0.07,
                0.16,
                -0.04,
              ),
              (a.z +=
                Math.sin(Math.PI * I0((o - le[0]) / (le[1] - le[0]))) * 0.04))
            : f(a, le[2], le[3], le[4]);
  const p = l.x,
    F = l.z,
    J = l.yaw,
    n0 = a.x,
    _ = a.z,
    G = a.yaw,
    y = -0.012,
    E = at + t.legs[1].l1 * Math.cos(-6 * te) + (i.hips[1] - i.thighL[1]),
    c0 = _e + t.legs[1].l1 * Math.sin(-6 * te),
    u0 = R0(0.5, 1.3, o),
    q =
      T0(E, i.hips[1] - 0.022, u0) +
      Math.sin(Math.PI * R0(0.45, 0.85, o)) * -0.03,
    $ = (p + n0) * 0.5,
    x = (F + _) * 0.5,
    e0 = R0(0.4, 0.8, o) * (1 - R0(1.05, 1.32, o));
  let H = T0(y, $, R0(0.45, 1.3, o)),
    z = T0(c0, x, R0(0.45, 1.3, o));
  ((H = T0(H, p * 0.8, e0 * 0.6)), (z = T0(z, F, e0 * 0.55)));
  const Z = Math.sin(Math.PI * R0(ge[0], ge[1], o)),
    p0 = Math.sin(Math.PI * R0(le[0], le[1], o));
  ((H = T0(H, n0, Z * 0.35)),
    (z = T0(z, _, Z * 0.35)),
    (H = T0(H, p, p0 * 0.35)),
    (z = T0(z, F, p0 * 0.35)));
  const j = R0(1.92, 2.35, o);
  ((H = T0(H, 0, j)), (z = T0(z, i.hips[2] * -1 - 0.005, j)));
  const t0 = T0(T0(J * 0.5 + G * 0.5, 0, R0(1.1, 0.8, o)), -Math.PI, j),
    A = 10 * R0(0.35, 0.75, o) * (1 - R0(1, 1.3, o)) + T0(3, 1.5, u0);
  (e.hp.set(H, q, z),
    t.qe(e.q[d0.hips], A, t0 / te - 9 * (1 - R0(0.4, 0.9, o)), 0),
    t.look ? s.lb.copy(t.look).applyAxisAngle(Ke, r) : R1(s.lb));
  const w = Math.sin(Math.PI * R0(0.4, 1.3, o));
  Ee(t, e, n, c, {
    sp: 3 + w * 16,
    cp: 2 + w * 12,
    lean: 0,
    hp: 3 + w * 4,
    comp: 0.6,
    target: s.lb,
    targetW: 1 - w * 0.18,
    right: !0,
    torso: 1.15,
    breath: 0.4,
  });
  for (const O of [1, -1]) {
    const i0 = t.legs[O],
      m0 = O > 0 ? a : l;
    if (m0.mode === "kneel") {
      k1(t, e, O, O * 0.098, _e);
      continue;
    }
    if (m0.mode === "plant") {
      t.leg(e, O, m0.x, t.ankleFor(O, m0.pitch), m0.z, m0.pitch, m0.yaw);
      continue;
    }
    const S = s.fq[O];
    (L1(O, s.q2), S.setFromAxisAngle(Ke, m0.yaw), S.slerp(s.q2, m0.flat));
    const P = Math.max(
        T0(t.ankleFor(O, 0), 0.047, m0.flat) + m0.lift,
        n1(t, O, S) + m0.lift * 0.3,
      ),
      s0 = s.k.set(m0.x + (m0.flat > 0.5 ? O * 0.012 : 0), P, m0.z),
      o0 = s.e
        .set(0, O < 0 || m0.flat <= 0.5 ? 0.6 : -0.6, 1)
        .applyAxisAngle(Ke, m0.yaw * (1 - m0.flat))
        .normalize();
    if (O < 0 && o < ee[1]) {
      const g0 = I0((o - ee[0]) / (ee[1] - ee[0]));
      t.fkTo(e, i0.b1);
      const w0 = t.wp[i0.b1],
        k0 = Math.atan2(_e - w0.z, w0.y - at),
        q0 = k0 + Math.atan2(i0.l2 * 0.995, at - 0.047),
        B0 = T0(k0, 1.3, Math.pow(R0(0, 0.8, g0), 0.8)),
        P0 =
          T0(q0, 1.7, R0(0.3, 1, g0)) +
          0.55 * Math.sin(Math.PI * R0(0, 0.85, g0)),
        y0 = w0.x - 0.01,
        x0 = w0.y - i0.l1 * Math.cos(B0),
        Y0 = w0.z + i0.l1 * Math.sin(B0),
        R = R0(0.55, 1, g0);
      (s0.set(
        T0(y0, s0.x, R),
        T0(x0 - i0.l2 * Math.cos(B0 - P0), t.ankleFor(O, 0), R),
        T0(Y0 + i0.l2 * Math.sin(B0 - P0), s0.z, R),
      ),
        o0.set(y0 - w0.x, x0 - w0.y, Y0 - w0.z).normalize());
      const T = T0(1.36, 0, R0(0.15, 0.6, g0)),
        K = R0(0.75, 1, g0);
      for (let l0 = 0; l0 < 2; l0++) {
        (t.ik(e, i0, s0, o0),
          t.fkTo(e, i0.b2),
          S.copy(t.wq[i0.b2]).multiply(s.q2.setFromAxisAngle(Ao, T)),
          S.slerp(s.q3.setFromAxisAngle(Ke, m0.yaw), K));
        const h0 =
          n1(t, O, S) + (0.006 + 0.03 * Math.sin(Math.PI * g0)) * (1 - K);
        if ((t.fkTo(e, i0.b2 + 1), l0 === 0 && t.wp[i0.b2 + 1].y < h0))
          s0.y += h0 - t.wp[i0.b2 + 1].y;
        else break;
      }
      Nt(t, e, O, S);
      continue;
    }
    (t.ik(e, i0, s0, o0), Nt(t, e, O, S));
  }
  ct(t, e, -0.07, -0.04);
  for (const O of [1, -1]) Me(t, e, O);
  t.fkTo(e, d0.shinR);
  const Y = s.h.copy(t.wp[d0.shinR]);
  t.fkTo(e, d0.thighR);
  const b = s.g.copy(t.wp[d0.shinR]).sub(t.wp[d0.thighR]).normalize(),
    g = s.f
      .copy(Y)
      .addScaledVector(b, -0.07)
      .add(s.e.set(0, 0.06, 0));
  (t.armIK(e, -1, g.x, g.y, g.z, -0.9, 0.2, -0.3),
    st(t, e, -1, b.x * 0.6, -0.8, b.z * 0.6 + 0.2, 0, 1, 0));
  const N = R0(0.22, 0.55, o);
  if (
    (Le(t, e, -1, N),
    Me(t, e, -1),
    t.dangle(e, 1, 12 * w, 14, 18 + w * 10),
    t.hand(e, 1, 8, 0, 0),
    Le(t, e, 1, R0(0.25, 0.6, o)),
    Me(t, e, 1),
    o > 1.05 &&
      (t.dangle(e, -1, 6, 10, 16),
      t.hand(e, -1, 8, 0, 0),
      Le(t, e, -1, R0(1.05, 1.4, o)),
      Me(t, e, -1)),
    o > 1.7)
  ) {
    Qe(t, e);
    for (const O of [1, -1]) Le(t, e, O, R0(1.7, 2.35, o));
  }
  const V = s.q3.setFromAxisAngle(Ke, -r);
  (e.hp.applyQuaternion(V),
    e.q[d0.hips].premultiply(V),
    s.eyeOn && s.eyeT.applyAxisAngle(Ke, -r));
}
function Do(e, o, n, c) {
  (Xe(this, e, n, c), Qe(this, e));
}
function Ho(e, o, n, c) {
  const t = this,
    s = t.seed,
    i = 3.1,
    r = Math.floor(n / i),
    l = n - r * i - qe(r, s) * 0.7,
    a =
      R0(0, 0.45, l) * (1 - R0(1.45, 2.05, l)) * (qe(r + 3, s) > 0.15 ? 1 : 0),
    u = t.mouth ?? 0;
  if (
    (Xe(t, e, n, c, {
      hp2: Math.sin(n * 3.3) * 1.6 * (0.3 + u) + a * 2.5,
      hy2: de(n * 0.5, s + 11) * 2.5,
      hr2: de(n * 0.4, s + 13) * 2.4 + a * 2,
    }),
    Qe(t, e),
    a > 0.001)
  ) {
    Me(t, e, -1);
    const f = Math.sin(I0(l / 1.6) * Math.PI) * 0.05,
      d = Math.sin(l * 7.5) * 0.012 * u;
    (Oe(
      t,
      e,
      -1,
      d0.chest,
      -0.13 - f,
      0.02 + d,
      0.31,
      -0.35,
      0.12,
      1,
      0.15,
      -1,
      0.25,
      -0.9,
      -0.45,
      -0.3,
    ),
      Le(t, e, -1, a));
  }
}
const _o = new H0(-1.6, 1.3, 1.2);
function qo(e, o, n, c) {
  const t = this,
    s = ae(t),
    i = R0(0.06, 0.8, o),
    r = t.pointOn ? t.pointPt : _o,
    l = Math.atan2(r.x - e.hp.x, r.z - e.hp.z) / te,
    a = I0(l, -80, 80) * i;
  (Xe(t, e, n, c, {
    syaw: a * 0.12,
    cyaw: a * 0.22,
    ...(t.look ? {} : { target: r, targetW: i * 0.9 }),
  }),
    Qe(t, e),
    Me(t, e, -1),
    t.fkTo(e, d0.upperArmR));
  const u = s.a.copy(r).sub(t.wp[d0.upperArmR]).normalize();
  (u.y < -0.4 && ((u.y = -0.4), u.normalize()),
    t.armDir(e, -1, u.x, u.y, u.z, 0, -1, 0, 9, 0),
    st(t, e, -1, u.x, u.y - 0.1, u.z, 0.25, 1, 0),
    Le(t, e, -1, i));
}
function Oo(e, o, n, c) {
  const t = this,
    s = R0(0.12, 0.35, o) * (1 - R0(1, 1.42, o)),
    i = Math.sin((o - 0.18) * 2 * Math.PI * 1.3) * 16 * s;
  (Xe(t, e, n, c, { hy2: i, hp2: 5 * s, hr2: -2 * s }),
    Qe(t, e),
    Me(t, e, -1),
    Oe(
      t,
      e,
      -1,
      d0.chest,
      -0.11,
      0.03,
      0.3,
      0.06,
      1,
      0.12,
      0.05,
      0.12,
      -1,
      -0.9,
      -0.45,
      -0.2,
    ),
    Le(t, e, -1, R0(0.04, 0.38, o) * (1 - R0(1.05, 1.5, o))));
}
function Po(e, o, n, c) {
  const t = this,
    s = t.st,
    i = s.shamble;
  t.gait(e, i, t.speed, n);
  const r = t.cyc;
  (Ee(t, e, n, c, {
    lean: i.lean ?? 3,
    cr: Math.sin(2 * Math.PI * (r - 0.25)) * 1.5,
  }),
    t.tq.setFromAxisAngle(
      Ke,
      (i.yaw ?? 3) * Math.cos(2 * Math.PI * r) * t.speed * 1.4 * te,
    ),
    e.q[d0.chest].premultiply(t.tq));
  const l = (i.armSwing ?? 9) * t.speed;
  for (const a of [1, -1]) {
    const u = Math.sin(2 * Math.PI * (r + (a > 0 ? 0.5 : 0))) * l;
    (t.dangle(e, a, 4 + u, 7, 14 + Math.max(0, u) * 0.6),
      t.hand(e, a, 10, 0, 0));
  }
}
function Bo(e, o, n, c) {
  const t = this;
  Xe(t, e, n, c, { lean: -4, hp2: -7, breath: 1.4, shift: 0.5 });
  for (const s of [1, -1]) {
    (t.dangle(e, s, 5, 17, 12), t.fkTo(e, s > 0 ? d0.foreArmL : d0.foreArmR));
    const i = ae(t),
      r = i.a.set(s * 0.25, -1, 0.08);
    st(t, e, s, r.x, r.y, r.z, s * 0.5, 0.1, -1);
  }
}
const S1 = { 1: [0.165, 0.045, 0.24], [-1]: [-0.17, -0.065, -0.26] },
  Ye = { 1: [0.135, 0.075, 0.2], [-1]: [-0.145, -0.135, -0.24] },
  Wo = (e) => (e === "shield" ? S1 : e === "grabbed" ? Ye : pe),
  Ze = (e, o) =>
    Math.sin(e * 61 + o * 1.7) * 0.45 +
    Math.sin(e * 47.3 + o * 4.1) * 0.35 +
    Math.sin(e * 73.9 + o * 2.9) * 0.2,
  jo = (e) => (e.look && e.look.z > 0.25 ? 1 : 0);
function lt(e, o, n, c = 0, t = 0, s = 0, i = 0, r = 0) {
  for (const l of [1, -1]) {
    const a = n[l],
      u = l === c;
    e.leg(
      o,
      l,
      a[0] + (u ? t : 0),
      e.ankleFor(l, u ? r : 0) + (u ? i : 0),
      a[1] + (u ? s : 0),
      u ? r : 0,
      a[2],
    );
  }
}
function Ko(e, o) {
  const n = ae(e);
  return (
    (n.vt = (e.mouth ?? 0) > 0.02 ? 0 : (n.vt ?? 9) + Math.max(o, 0)),
    R0(0.5, 1.2, n.vt)
  );
}
function Yo(e, o, n, c) {
  const t = this,
    s = t.seed,
    i = t.J,
    r = de(n * 0.3, s + 3),
    l = de(n * 0.22, s + 8),
    a = Math.sin(n * 1.25 + s),
    u = 5.8,
    f = Math.floor(n / u),
    d = n - f * u - qe(f, s) * 1.6,
    v = R0(0, 0.6, d) * (1 - R0(1.5, 2.2, d)) * (qe(f + 5, s) > 0.25 ? 1 : 0),
    C =
      Math.max(
        0,
        Math.sin(n * 6.1) * Math.sin(n * 1.7 + 1) +
          0.3 * Math.sin(n * 11.3 + 2),
      ) *
      7 *
      Ko(t, c);
  if (
    (e.hp.set(r * 0.012, i.hips[1] - 0.018 + a * 0.002, i.hips[2] + 0.004),
    t.qe(e.q[d0.hips], 1, l * 2, -r * 1.2),
    Ee(t, e, n, c, {
      lean: -4,
      sp: -1.5 + l * 0.8,
      cp: -3 + a * 1.6 - v * 2,
      sr: r * 1.2,
      cr: r * 1.6,
      hp: -9 - v * 5,
      hr: 2 + r * 3,
      hy: l * 3,
      comp: 0.5,
      look: 0,
      breath: 0.4,
      jaw: C,
      shrugL: v * 3 + a * 1.2,
      shrugR: v * 3 + a * 1.2,
    }),
    lt(t, e, pe),
    ct(t, e, -0.01, -0.01),
    v > 0.001)
  ) {
    for (const p of [1, -1]) Me(t, e, p);
    for (const p of [1, -1])
      Oe(
        t,
        e,
        p,
        d0.chest,
        p * 0.075,
        0.115,
        0.27,
        p * 0.12,
        0.5,
        0.86,
        p * 0.55,
        -0.82,
        0.12,
        p * 0.9,
        -0.5,
        -0.25,
      );
    for (const p of [1, -1]) Le(t, e, p, v);
  }
}
function Go(e, o, n, c) {
  const t = this,
    s = t.seed,
    i = t.J,
    r = Math.sin(n * 2.7 + s),
    l = 0.5 + 0.5 * r,
    a = de(n * 0.5, s + 1) * 0.012;
  (e.hp.set(a, i.hips[1] - 0.062 + l * 0.006, i.hips[2] - 0.012),
    t.qe(e.q[d0.hips], 3, de(n * 0.3, s + 3) * 3, -a * 90));
  const u = Ze(n, 1);
  (Ee(t, e, n, c, {
    lean: 10,
    sp: 3,
    cp: 4 - l * 6,
    hp: -13 + u * 0.6,
    hr: u * 0.5,
    hy: de(n * 0.6, s + 5) * 4,
    comp: 0.8,
    breath: 0,
    look: jo(t),
    torso: 0,
    maxYaw: 55,
    jaw: 1 + l * 3.5,
    shrugL: 13 + l * 5 + u * 0.8,
    shrugR: 13 + l * 5 - u * 0.8,
  }),
    lt(t, e, S1));
  for (const f of [1, -1]) {
    const d = (41 + Ze(n, 3 + f) * 1.3 + l * 2) * te,
      v = (27 + Ze(n, 5 + f) * 1.2) * te;
    (t.armDir(
      e,
      f,
      f * Math.sin(d),
      -Math.cos(d) * Math.cos(v),
      Math.cos(d) * Math.sin(v),
      0,
      0.3,
      1,
      22 + Ze(n, 7 + f) * 2,
    ),
      st(t, e, f, f * 0.55, -0.8, 0.28, f * 0.25, 0.12, -1));
  }
}
const Uo = 0.8;
function $o(e, o, n, c) {
  const t = this,
    s = ae(t);
  ((s.flT == null || o < s.flT) &&
    ((s.flN = (s.flN ?? 0) + 1),
    (s.flSide = t.opts?.side ?? (s.flN % 2 ? -1 : 1))),
    (s.flT = o));
  const i = s.flSide,
    r = -i,
    l = x1[t.prevLoop];
  l && l.loop && !l.gait
    ? l.fn.call(t, e, o, n, c)
    : (Xe(t, e, n, c), Qe(t, e));
  const a = R0(0, 0.1, o) * (1 - R0(0.38, 0.8, o)),
    u = wt(o, 0.06),
    f = R0(0.03, 0.25, o),
    d = R0(0.42, 0.68, o),
    v = f - d,
    C =
      (o < 0.25 ? Math.sin(Math.PI * I0((o - 0.03) / 0.22)) * 0.055 : 0) +
      (o > 0.42 && o < 0.68
        ? Math.sin((Math.PI * (o - 0.42)) / 0.26) * 0.035
        : 0);
  if (c > 0)
    for (const _ of [0.25, 0.68])
      o >= _ && o - c < _ && t.events.push(["step", i > 0 ? "L" : "R"]);
  ((e.hp.x += i * 0.035 * v),
    (e.hp.y -= 0.03 * a + 0.012 * u),
    (e.hp.z -= 0.075 * v + 0.03 * u),
    e.q[d0.hips].premultiply(s.q0.setFromAxisAngle(Ke, i * 18 * a * te)));
  const p = (_, G, y, E) => e.q[_].multiply(t.qe(s.q1, G, y, E));
  (p(d0.spine, -8 * a - 5 * u, i * 12 * a, -i * 3 * a),
    p(d0.chest, -5 * a - 4 * u, i * 16 * a, 0));
  const F = 14 * a - 10 * u,
    J = i * 32 * a,
    n0 = -i * 8 * a;
  (p(d0.neck, F * 0.4, J * 0.45, n0 * 0.45),
    p(d0.head, F * 0.6, J * 0.55, n0 * 0.55),
    p(d0.jaw, 9 * a, 0, 0),
    p(d0.shoulderL, 0, 0, 10 * a),
    p(d0.shoulderR, 0, 0, -10 * a),
    lt(t, e, Wo(t.prevLoop), i, i * 0.02 * v, -0.24 * v, C, -0.16 * v),
    Me(t, e, r),
    Oe(
      t,
      e,
      r,
      d0.chest,
      -r * 0.07,
      0.32,
      0.22,
      -r * 0.75,
      0.55,
      0.2,
      0.05,
      0.15,
      1,
      r * 0.8,
      -0.4,
      0.5,
    ),
    Le(t, e, r, R0(0, 0.09, o) * (1 - R0(0.42, 0.78, o))),
    Me(t, e, i),
    t.dangle(e, i, -16, 28, 30),
    t.hand(e, i, 14, 0, 0),
    Le(t, e, i, a * 0.8));
}
function Vo(e, o, n, c) {
  const t = this,
    s = t.seed,
    i = t.J,
    r = Math.floor(n / 0.85),
    l = n - r * 0.85,
    a = wt(l, 0.07) * (qe(r + 3, s) > 0.3 ? 1 : 0),
    u = qe(r, s) > 0.45 ? 1 : -1,
    f =
      Math.sin(n * 4.4 + s) * 0.5 +
      Math.sin(n * 6.9 + 1.3) * 0.25 +
      u * a * 0.9,
    d =
      Math.sin(n * 3.3 + 2.1) * 0.55 +
      Math.sin(n * 5.7) * 0.25 +
      (qe(r + 7, s) - 0.5) * a * 1.4,
    v = Math.max(0, Math.sin(n * 1.6 + 0.4)),
    C = Math.tanh(de(n * 0.22, s + 12) * 3),
    p = Ze(n, 2),
    F =
      Math.sin(n * 4.4 + s - 0.9) * 0.5 +
      Math.sin(n * 6.9 + 0.5) * 0.25 +
      u * wt(l - 0.05, 0.08) * 0.9;
  (e.hp.set(
    d * 0.045,
    i.hips[1] - 0.05 - v * 0.05,
    i.hips[2] + f * 0.07 - 0.01,
  ),
    t.qe(e.q[d0.hips], 5 + f * 6 + v * 5, d * 7, -d * 5),
    Ee(t, e, n, c, {
      lean: 3,
      sp: 2 + f * 8,
      cp: 1 + f * 12,
      sr: -d * 5,
      cr: -d * 8,
      syaw: d * 6 - C * 4,
      cyaw: d * 7 - C * 6,
      hy: C * 42,
      hp: -14 - F * 9 + p,
      hr: C * 9 + d * 4 + p * 0.6,
      comp: 0.6,
      look: 0,
      breath: 0,
      jaw: 7 + Math.abs(f) * 5,
      shrugL: 13 + f * 5,
      shrugR: 13 + f * 5,
      maxYaw: 80,
    }),
    lt(t, e, Ye));
  for (const J of [1, -1]) {
    const n0 = Math.sin(n * 5.2 + J * 1.3) * 0.025 - f * 0.035;
    Oe(
      t,
      e,
      J,
      d0.chest,
      J * 0.17,
      0.13 + p * 0.003,
      0.26 + n0,
      -J * 0.12,
      0.28,
      1,
      J * 0.85,
      0.45,
      -0.05,
      J * 0.85,
      -0.6,
      -0.1,
    );
  }
}
const Zo = {
    dur: 2.6,
    events: [
      [1.1, "thud"],
      [1.42, "thud"],
      [2.6, "down"],
    ],
    extent: {
      box: { x: [-0.65, 0.51], z: [-1.48, 0.3] },
      height: 0.38,
      head: [0.07, 0.1, -1.38],
      bands: [
        [-0.06, 0.18, -1.48, -1.25],
        [-0.65, 0.51, -1.25, -0.5],
        [-0.15, 0.51, -0.5, 0.3],
      ],
    },
  },
  A1 = {
    hx: 0,
    hy: -0.05,
    hz: -0.01,
    hp: 5,
    hyaw: 0,
    hr: 0,
    sp: 4,
    syaw: 0,
    sr: 0,
    cp: 5,
    cyaw: 0,
    cr: 0,
    np: 12,
    nyaw: 22,
    nr: 0,
    dp: -10,
    dyaw: 18,
    dr: 6,
    jaw: 8,
    lx: Ye[1][0],
    lz: Ye[1][1],
    lp: 0,
    lyw: Ye[1][2] / te,
    rx: Ye[-1][0],
    rz: Ye[-1][1],
    rp: 0,
    ryw: Ye[-1][2] / te,
    alf: 55,
    ala: 25,
    alt: 0,
    el: 105,
    arf: 55,
    ara: 25,
    art: 0,
    er: 105,
    hL: 0,
    hR: 0,
    kr: 0,
  },
  Jo = Object.keys(A1);
function Qo(e) {
  const o = [];
  let n = { ...A1 };
  for (const [c, t, s] of e) ((n = { ...n, ...s, t: c, e: t }), o.push(n));
  return o;
}
const Xo = Qo([
  [0, "io", {}],
  [
    0.28,
    "io",
    {
      hy: -0.21,
      hz: -0.04,
      hp: 14,
      sp: 12,
      cp: 9,
      np: 20,
      dp: -4,
      nyaw: 18,
      dyaw: 22,
      jaw: 13,
      alf: 50,
      ala: 30,
      el: 90,
      arf: 45,
      ara: 32,
      er: 85,
    },
  ],
  [
    0.55,
    "io",
    {
      hy: -0.31,
      hz: -0.1,
      hx: 0.03,
      hp: 8,
      hyaw: -22,
      hr: 6,
      sp: 6,
      syaw: -14,
      cp: 2,
      cyaw: -16,
      np: 12,
      dp: 0,
      nyaw: 24,
      dyaw: 24,
      rx: -0.17,
      rz: -0.24,
      ryw: -24,
      alf: 62,
      ala: 34,
      el: 60,
      arf: -20,
      ara: 38,
      er: 25,
    },
  ],
  [
    0.88,
    "in",
    {
      hy: -0.6,
      hz: -0.3,
      hx: 0.035,
      hp: -16,
      hyaw: -26,
      hr: 4,
      sp: -10,
      syaw: -10,
      cp: -6,
      cyaw: -10,
      np: 24,
      dp: 10,
      nyaw: 10,
      dyaw: 8,
      jaw: 15,
      lx: 0.12,
      lz: 0.03,
      rx: -0.17,
      rz: -0.18,
      alf: 45,
      ala: 50,
      el: 35,
      arf: -45,
      ara: 35,
      er: 15,
    },
  ],
  [
    1.1,
    "in",
    {
      hy: -0.79,
      hz: -0.46,
      hx: 0.04,
      hp: -40,
      hyaw: -18,
      hr: 3,
      sp: -8,
      syaw: -6,
      cp: -6,
      cyaw: -6,
      np: 26,
      dp: 8,
      nyaw: 6,
      dyaw: 6,
      lx: 0.13,
      lz: 0.15,
      lp: 10,
      rx: -0.16,
      rz: 0.04,
      rp: 6,
      alf: 30,
      ala: 60,
      el: 30,
      arf: -55,
      ara: 45,
      er: 20,
    },
  ],
  [
    1.42,
    "in",
    {
      hy: -0.82,
      hz: -0.6,
      hx: 0.05,
      hp: -86,
      hyaw: -8,
      hr: 4,
      sp: -2,
      syaw: -3,
      cp: 0,
      cyaw: -3,
      np: 28,
      dp: 12,
      nyaw: 10,
      dyaw: 10,
      jaw: 16,
      lx: 0.15,
      lz: 0.08,
      lp: 14,
      lyw: 14,
      rx: -0.15,
      rz: 0.04,
      rp: 10,
      ryw: -12,
      alf: 18,
      ala: 70,
      el: 30,
      arf: -5,
      ara: 60,
      er: 20,
    },
  ],
  [1.62, "out", { hz: -0.67, np: 6, dp: -2, nyaw: 14, dyaw: 12, jaw: 10 }],
  [
    1.95,
    "io",
    {
      lx: 0.2,
      lz: 0.03,
      lp: 6,
      lyw: 26,
      rx: -0.07,
      rz: 0.08,
      rp: 4,
      ryw: 4,
      kr: 34,
      hr: 7,
      alf: 8,
      ala: 30,
      el: 22,
    },
  ],
  [
    2.6,
    "io",
    {
      np: 2,
      dp: -6,
      nyaw: 14,
      dyaw: 18,
      jaw: 7,
      arf: 4,
      ara: 50,
      er: 7,
      el: 10,
      hL: 15,
      hR: 22,
    },
  ],
]);
function zo(e, o, n) {
  let c = 0;
  for (; c < e.length - 1 && e[c + 1].t <= o;) c++;
  const t = e[c],
    s = e[Math.min(c + 1, e.length - 1)],
    i = s.t > t.t ? I0((o - t.t) / (s.t - t.t)) : 1,
    r =
      s.e === "in"
        ? i * i
        : s.e === "out"
          ? 1 - (1 - i) * (1 - i)
          : i * i * (3 - 2 * i);
  for (const l of Jo) n[l] = t[l] + (s[l] - t[l]) * r;
  return n;
}
function s1(e, o, n, c, t, s, i) {
  const r = e.arms[n],
    l = ae(e),
    a = c * te,
    u = t * te,
    f = l.g
      .set(
        n * Math.sin(u),
        -Math.cos(u) * Math.cos(a),
        Math.cos(u) * Math.sin(a),
      )
      .normalize();
  (o.q[r.b1].setFromUnitVectors(r.r1, f),
    o.q[r.b1].premultiply(l.q3.setFromAxisAngle(f, s * te * n)),
    o.q[r.b2].setFromAxisAngle(r.h, i * te));
}
function en(e, o, n, c, t, s, i, r, l) {
  const a = ae(e),
    u = e.legs[n];
  (e.ik(o, u, a.k.set(c, t, s), l),
    e.fkTo(o, u.b2),
    e.qe(a.q3, -i, r, 0),
    o.q[n > 0 ? d0.footL : d0.footR].copy(e.wq[u.b2]).invert().multiply(a.q3));
}
function tn(e, o, n, c) {
  const t = this,
    s = ae(t),
    i = t.J,
    r = s.tk || (s.tk = {});
  if ((zo(Xo, o, r), c > 0))
    for (const [F, J] of Zo.events)
      o >= F && o - c < F && t.events.push([J, "taken"]);
  const l = R0(1.62, 2.05, o),
    a = I0((o - 2.2) / 0.32),
    u = l * (1 - a * a),
    f = R0(1.62, 1.95, o) * (1 - R0(2.18, 2.5, o)),
    d = o < 2.5 ? Ze(n, 4) : 0;
  (e.hp.set(i.hips[0] + r.hx, i.hips[1] + r.hy, i.hips[2] + r.hz),
    t.qe(e.q[d0.hips], r.hp, r.hyaw, r.hr),
    t.qe(e.q[d0.spine], r.sp, r.syaw, r.sr),
    t.qe(e.q[d0.chest], r.cp + f * 7, r.cyaw, r.cr));
  const v = r.nyaw * (1 - f),
    C = r.dyaw * (1 - f);
  (t.qe(e.q[d0.neck], r.np + f * 26, v + C * 0.45, r.nr),
    t.qe(e.q[d0.head], r.dp + f * 4, C * 0.55, r.dr),
    t.qe(e.q[d0.jaw], I0(r.jaw + (t.mouth ?? 0) * 9, 0, 18), 0, 0),
    t.qe(e.q[d0.shoulderL], 0, -3, -4),
    t.qe(e.q[d0.shoulderR], 0, 3, 4 - u * 6),
    t.clampFloor(e, R0(0.95, 1.1, o), t.torso),
    t.fkTo(e, d0.hips));
  for (const F of [1, -1]) {
    const J = F > 0,
      n0 = J ? r.lp : r.rp,
      _ = s.e.set(F * 0.22, 0, 1).applyQuaternion(t.wq[0]);
    ((_.x += Math.sin(r.kr * te) * 1.6),
      _.normalize(),
      en(
        t,
        e,
        F,
        J ? r.lx : r.rx,
        t.ankleFor(F, n0 * te),
        J ? r.lz : r.rz,
        n0,
        J ? r.lyw : r.ryw,
        _,
      ));
  }
  if (
    (s1(t, e, 1, r.alf, r.ala, r.alt, r.el),
    t.hand(e, 1, r.hL, 0, 0),
    s1(t, e, -1, r.arf, r.ara, r.art, r.er),
    t.hand(e, -1, r.hR, 0, 0),
    t.look ? s.lb.copy(t.look) : s.lb.set(0, 1.6, 3.2),
    u > 0.001)
  ) {
    (Me(t, e, -1), t.fkTo(e, d0.upperArmR));
    const F = s.f.copy(s.lb).sub(t.wp[d0.upperArmR]);
    ((F.y = 0),
      F.normalize().multiplyScalar(0.5),
      (F.y = 0.86),
      (F.x -= 0.1),
      F.normalize(),
      (F.x += d * 0.012),
      (F.y += Ze(n, 6) * 0.012),
      F.normalize(),
      t.armDir(e, -1, F.x, F.y, F.z, 0.3, 0.4, 1, 14 + d * 2),
      st(t, e, -1, F.x, F.y + 0.15, F.z, -1, 0, 0),
      Le(t, e, -1, u));
  }
  ((s.eyeOn = u > 0.25), s.eyeOn && s.eyeT.copy(s.lb));
  const p = R0(1.1, 1.5, o);
  if (p > 0)
    for (let F = 0; F < 2; F++)
      (t.settleChain(e, t.chains[0], p),
        u < 0.001 &&
          t.settleChain(e, t.chains[1], p * (o < 2 ? 1 : R0(2.42, 2.6, o))),
        t.settleChain(e, t.chains[4], p * (1 - f)));
  t.clampFloor(e, 0, null);
}
function on(e, o, n, c) {
  const t = this,
    s = t.J,
    i = Math.sin(n * 0.8);
  (e.hp.set(0, s.hips[1] - 0.012 + i * 8e-4, s.hips[2] + 0.004),
    t.qe(e.q[d0.hips], 0.5, 0, 0),
    Ee(t, e, n, c, {
      lean: -5,
      sp: -1,
      cp: -2,
      hp: -2,
      hr2: 7,
      comp: 0.6,
      breath: 0.15,
      look: 1,
      torso: 0,
      maxYaw: 55,
    }),
    lt(t, e, pe),
    t.dangle(e, -1, 2, 7, 12),
    t.hand(e, -1, 10, 0, 0),
    Oe(
      t,
      e,
      1,
      d0.chest,
      0.33,
      0.37,
      0.16,
      0.06,
      0.02,
      1,
      0.35,
      1,
      0.05,
      1,
      -0.75,
      -0.25,
    ));
}
const he = {
  dur: 2.6,
  out: 0.5,
  tilt: 13,
  fwd: 7,
  eyes: 0.28,
  lean: 0.12,
  stretch: 0.44,
  lift: 0.013,
  browIn: 0.0012,
  browUp: 0.0012,
  lidLean: 0.2,
  pupil: 0.95,
  jaw: 1.2,
};
function nn(e, o) {
  return (
    (o[0] =
      R0(0.25, 1.1, e) * 0.42 + R0(1, 2.6, e) * 0.5 + R0(2.6, 7, e) * 0.08),
    (o[1] = R0(0.15, 2, e)),
    (o[2] = R0(0.9, 2.5, e)),
    o
  );
}
function sn(e, o, n, c) {
  const t = this,
    s = R0(0, 0.9, o),
    i = R0(0.35, 2.7, o) + 0.15 * R0(2.7, 7, o);
  (c > 0 && o >= he.dur && o - c < he.dur && t.events.push(["strange", "held"]),
    Xe(t, e, n, c, {
      shift: 1 - s,
      still: s,
      breath: T0(1, 0.15, s),
      hr2: he.tilt * i,
      hp2: he.fwd * i,
      look: 1,
      jaw: he.jaw * R0(1.9, 3.4, o),
    }),
    Qe(t, e));
}
const x1 = {
    pray: { fn: Co, loop: !0, fade: 0.5 },
    still: { fn: Fo, fade: 0.45 },
    look_back: { fn: Eo, fade: 0.3 },
    rise: { fn: No, fade: 0.25, dur: Dt.dur, next: "stand", nextFade: 0.3 },
    stand: { fn: Do, loop: !0, fade: 0.4 },
    talk: { fn: Ho, loop: !0, fade: 0.4 },
    point: { fn: qo, fade: 0.3 },
    refuse: { fn: Oo, fade: 0.25, dur: 1.5, next: "prev", nextFade: 0.35 },
    walk: { fn: Po, loop: !0, gait: "shamble", fade: 0.35 },
    face: { fn: Bo, loop: !0, fade: 0.5 },
    pray_stand: { fn: Yo, loop: !0, fade: 0.5 },
    shield: { fn: Go, loop: !0, fade: 0.35 },
    flinch: { fn: $o, fade: 0.08, dur: Uo, next: "prev", nextFade: 0.3 },
    grabbed: { fn: Vo, loop: !0, fade: 0.15 },
    taken: { fn: tn, fade: 0.15 },
    lantern: { fn: on, loop: !0, fade: 0.5 },
    strange: { fn: sn, loop: !0, fade: 0.7 },
  },
  Ot = `
float prH3(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float prVN(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(prH3(i), prH3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(prH3(i + vec3(0.0, 1.0, 0.0)), prH3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(prH3(i + vec3(0.0, 0.0, 1.0)), prH3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(prH3(i + vec3(0.0, 1.0, 1.0)), prH3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
// the dissolve value of a rest-space point: smoke-like wisps (taller than wide, drifting slowly up while he goes), a finer
// layer, a little grain on the edges; it rises from the ground (the feet go first, the face and the lantern last)
float prFadeN(vec3 rp, float t) {
  vec3 q = rp + vec3(13.7, 7.3 - t * 0.12, 21.1);                 // (away from the lattice's origin: the hash is 0 there)
  float n = prVN(q * vec3(5.5, 3.2, 5.5)) * 0.62 + prVN(q * vec3(14.0, 9.0, 14.0) + 7.1) * 0.28 + prH3(floor(rp * 150.0) + vec3(311.5, 173.5, 97.5)) * 0.1;
  vec3 hd = rp - vec3(0.0, 1.62, 0.02);                              // (his face lingers: with the lantern, the last of him)
  return n + (0.9 - rp.y) * 0.2 - 0.22 * exp(-dot(hd, hd) * 28.0);
}
// k = the share of him still there (the threshold is the noise's measured distribution, inverted: a logit)
bool prFaded(vec3 rp, float k, float t) {
  if (k >= 0.999) return false;
  if (k <= 0.001) return true;
  return prFadeN(rp, t) > 0.504 + (k < 0.5 ? 0.095 : 0.115) * log(k / (1.0 - k));
}
`,
  an = `
uniform float uFade;              // PRIEST round 2: 1 solid .. 0 gone
uniform float uFadeT;             // (the dissolve's drift)
uniform vec3 uSelfPos;            // the faked lantern light (world); his materials only
uniform vec3 uSelfCol;            // its colour * strength (0 = off)
uniform float uSelfShield;        // 1: the lantern's cap and fount shade what is straight above and below the flame
uniform vec4 uStrange;            // PRIEST round 3: the strange face (x: the smile, which fades its paint in)
uniform sampler2D uFaceTex2;      // its paint (paintStrangeFace)
`,
  rn = `
  if (uFaceOn > 0.5 && uStrange.x > 0.002 && mi == ${L.FACE}) {
    vec2 uv2 = ((vL.xy - uHC.xy) - uFaceRect.xy) / uFaceRect.zw;
    float fr2 = smoothstep(0.0, 0.3, vLN.z + (vL.z - uHC.z - 0.05) * 4.0) * step(0.0, uv2.x) * step(uv2.x, 1.0) * step(0.0, uv2.y) * step(uv2.y, 1.0);
    vec4 t2 = texture2D(uFaceTex2, uv2);
    float a2 = t2.a * fr2 * clamp(uStrange.x, 0.0, 1.0);
    if (a2 > 0.001) {
      vec3 pc2 = dec(clamp(t2.rgb / max(t2.a, 1e-4), 0.0, 1.0));
      vec3 ratio2 = shade / max(base, vec3(1e-3));
      base = mix(base, pc2, a2);
      shade = mix(shade, pc2 * clamp(ratio2, 0.0, 1.2), a2);
    }
  }
`,
  cn = `
  if (isSkin && uAliveP.x > 0.5) {
    vec3 kcW = uKeyCol + uSelfCol * 6.0;
    float kmW = max(max(kcW.r, kcW.g), max(kcW.b, 1e-4));
    float warmW = clamp((kcW.r - kcW.b) / kmW * 1.4, 0.0, 1.0);
    albedo *= mix(vec3(1.0), vec3(0.8, 1.0, 1.1), warmW * 0.85);
  }
`,
  ln = `
  // PRIEST: the lantern's light, faked (his materials only: no light is ever added to the scene)
  if (uSelfCol.r + uSelfCol.g + uSelfCol.b > 1e-5) {
    vec3 Ls = uSelfPos - vW;
    float d2 = dot(Ls, Ls);
    Ls *= inversesqrt(max(d2, 1e-6));
    vec3 Es = uSelfCol / (d2 + 0.012);
    Es *= mix(1.0, 0.12 + 0.88 * (1.0 - smoothstep(0.74, 0.9, abs(Ls.y))), uSelfShield);
    Es /= 1.0 + lumi(Es) / 2.6;
    float ndl = dot(N, Ls);
    float dS = clamp((ndl + wrap) / (1.0 + wrap), 0.0, 1.0);
    col += albedo * Es * dS * mix(1.0, ao, 0.5);
    if (isSkin) col += albedo * Es * vec3(0.15, 0.06, 0.1) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));
    if (isSkin && uAliveP.x > 0.5) col += albedo * Es * vec3(0.12, 0.02, -0.07) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));
    vec3 Hs = normalize(Ls + V);
    float frS = F0 + (1.0 - F0) * pow(1.0 - clamp(dot(V, Hs), 0.0, 1.0), 5.0);
    col += min(Es * nrm * pow(max(dot(N, Hs), 0.0), shin) * frS * max(ndl, 0.0), vec3(0.6));
    if (mi == ${L.EYE} && uAliveP.x > 0.5) col += Es * 1.3 * uAliveP.w * smoothstep(0.9925, 0.9965, dot(N, Hs)) * (1.0 - lidPx);
  }
`;
function hn(e) {
  const o = (c, t, s) =>
    c.includes(t)
      ? c.replace(t, s)
      : (console.warn("[priest] shader anchor missing: " + t.slice(0, 60)), c);
  let n = e;
  return (
    (n = o(
      n,
      `void main() {
  #include <clipping_planes_fragment>`,
      an +
        Ot +
        `void main() {
  #include <clipping_planes_fragment>
  if (prFaded(vL, uFade, uFadeT)) discard;`,
    )),
    (n = o(
      n,
      "  albedo *= (ty == 3) ? 0.85 : grime;",
      cn + "  albedo *= (ty == 3) ? 0.85 : grime;",
    )),
    (n = o(
      n,
      "  // the shade side: the rest of the room + the sky",
      ln + "  // the shade side: the rest of the room + the sky",
    )),
    (n = o(
      n,
      "  // ---- the eyes: procedural on the eyeball",
      rn + "  // ---- the eyes: procedural on the eyeball",
    )),
    n
  );
}
const dn = `
uniform vec4 uStrange;            // PRIEST round 3: smile, eyes (rad), brows, lean (-1..1: one corner higher)
uniform vec4 uStrangeP;           // its shape: the mouth's stretch, the corners' lift (m), the brows' inner lift, their even lift (m)
uniform vec4 uStrangeQ;           // x: one eye opens wider than the other (-1..1, + = his left)
uniform vec3 uHC;
float prG(vec3 p, vec3 c, vec3 r) { vec3 q = (p - c) / r; return exp(-dot(q, q)); }
// the upper lid (and the ball under its edge) turns up about the eye's centre, by k at the lid's edge
vec3 prLid(vec3 p, float s, float k) {
  vec3 q = p - vec3(s * 0.031, 0.0, 0.063);
  float r = length(q);
  if (r > 0.0211) return vec3(0.0);
  float dx = abs(q.x);
  float phi = atan(q.y, max(q.z, 1e-4));
  float phiL = 0.33 - dx * 12.0;
  float wa = phi > phiL ? 1.0 - smoothstep(phiL + 0.15, phiL + 1.0, phi) : smoothstep(phiL - 0.75, phiL - 0.03, phi);
  float w = wa * (1.0 - smoothstep(0.0161, 0.0211, r)) * (1.0 - smoothstep(0.0085, 0.0135, dx)) * smoothstep(-0.004, 0.004, q.z);
  float th = k * w, c = cos(th), sn = sin(th);
  return vec3(0.0, q.y * c + q.z * sn - q.y, q.z * c - q.y * sn - q.z);
}
const float PR_MY = -0.084, PR_MW = 0.023;      // (the mouth line's height, its half width: makeLivingHead's mouthY / mouthW)
vec3 prFaceD(vec3 p) {
  vec3 d = vec3(0.0);
  float ax = abs(p.x);
  if (uStrange.x > 0.0 && p.y < 0.0 && ax < 0.088) {
    float sx = p.x >= 0.0 ? 1.0 : -1.0;
    float k = uStrange.x * (1.0 + uStrange.w * clamp(p.x / 0.012, -1.0, 1.0));
    float my = p.y - PR_MY, ov = max(ax - PR_MW, 0.0);
    float lw = exp(-ov * ov / 0.000121);                       // the mouth's width, then fading past the corners (11 mm)
    float u = min(ax / PR_MW, 1.0), u2 = u * u;
    // the mouth stretches wide (the middle stays), the corners go up and back into the cheeks: a long U
    float m = exp(-my * my / 0.000169) * lw * k;
    d += vec3(p.x * uStrangeP.x, uStrangeP.y * u2, -0.004 * u2) * m;
    // the lips press thin toward the line between them, most at the corners; the corners pinch shut
    float sq = exp(-my * my / 0.000049) * lw * k * (0.3 + 0.7 * u2);
    d.y -= my * 0.4 * sq;
    float cw = exp(-(ax - PR_MW) * (ax - PR_MW) / 0.000036) * k;
    d.y -= my * 0.9 * exp(-my * my / 0.0000032) * cw;
    // the cheeks bunch up and forward beside and over the corners (not up into the lower lids: the eyes do not smile)
    d += prG(p, vec3(sx * 0.037, -0.062, 0.07), vec3(0.014, 0.018, 0.03)) * vec3(sx * 0.0015, 0.004, 0.0035) * k;
    d += prG(p, vec3(sx * 0.04, -0.036, 0.068), vec3(0.018, 0.016, 0.03)) * vec3(sx * 0.001, 0.0022, 0.0022) * k;
  }
  if (uStrange.y > 0.0 && abs(p.y) < 0.0211) d += prLid(p, 1.0, uStrange.y * (1.0 + uStrangeQ.x)) + prLid(p, -1.0, uStrange.y * (1.0 - uStrangeQ.x));
  if (uStrange.z > 0.0 && p.y > -0.03) {
    for (int i = 0; i < 2; i++) {
      float s = i == 0 ? 1.0 : -1.0;
      // the inner ends of the brows lift, the whole brow a little
      d += prG(p, vec3(s * 0.017, 0.019, 0.083), vec3(0.012, 0.011, 0.03)) * vec3(-s * 0.18, 1.0, 0.18) * uStrangeP.z * uStrange.z;
      d += prG(p, vec3(s * 0.03, 0.018, 0.08), vec3(0.022, 0.012, 0.03)) * vec3(0.0, 1.0, 0.0) * uStrangeP.w * uStrange.z;
    }
    d += prG(p, vec3(0.0, 0.035, 0.08), vec3(0.028, 0.025, 0.04)) * vec3(0.0, 0.6 * uStrangeP.z + 0.5 * uStrangeP.w, 0.0) * uStrange.z;
  }
  return d;
}
`,
  fn = `
  // PRIEST round 3: the strange face (rest space, before the skinning); the normal through the field's Jacobian
  vec3 prD = vec3(0.0);
  if (uStrange.x + uStrange.y + uStrange.z > 1e-5) {
    vec3 hq = position - uHC;
    if (hq.z > 0.0 && abs(hq.x) < 0.09 && hq.y > -0.16 && hq.y < 0.1) {
      prD = prFaceD(hq);
      if (dot(prD, prD) > 1e-12) {
        vec3 ja = vec3(1.0, 0.0, 0.0) + (prFaceD(hq + vec3(0.0012, 0.0, 0.0)) - prD) / 0.0012;
        vec3 jb = vec3(0.0, 1.0, 0.0) + (prFaceD(hq + vec3(0.0, 0.0012, 0.0)) - prD) / 0.0012;
        vec3 jc = vec3(0.0, 0.0, 1.0) + (prFaceD(hq + vec3(0.0, 0.0, 0.0012)) - prD) / 0.0012;
        objectNormal = normalize(cross(jb, jc) * objectNormal.x + cross(jc, ja) * objectNormal.y + cross(ja, jb) * objectNormal.z);
      }
    }
  }
`;
function mn(e) {
  const o = (c, t, s) =>
    c.includes(t)
      ? c.replace(t, s)
      : (console.warn("[priest] vertex anchor missing: " + t.slice(0, 60)), c);
  let n = e;
  return (
    (n = o(
      n,
      `void main() {
  vAO = aAO;`,
      dn +
        `void main() {
  vAO = aAO;`,
    )),
    (n = o(
      n,
      `  #include <beginnormal_vertex>
`,
      `  #include <beginnormal_vertex>
` + fn,
    )),
    (n = o(
      n,
      `  #include <begin_vertex>
`,
      `  #include <begin_vertex>
  transformed += prD;
`,
    )),
    (n = o(
      n,
      "  vL = position;",
      `  vL = position + (abs(aMat - ${L.EYE}.0) < 0.5 ? prD : vec3(0.0));`,
    )),
    n
  );
}
function a1(e, o, n) {
  return (
    (e.onBeforeCompile = (c) => {
      ((c.uniforms.uFade = o.uFade),
        (c.uniforms.uFadeT = o.uFadeT),
        (c.vertexShader = c.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vPrRest;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
	vPrRest = position;`,
          )),
        (c.fragmentShader = c.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform float uFade;
uniform float uFadeT;
varying vec3 vPrRest;
` + Ot,
          )
          .replace(
            "#include <clipping_planes_fragment>",
            `#include <clipping_planes_fragment>
	if (prFaded(vPrRest, uFade, uFadeT)) discard;`,
          )));
    }),
    (e.customProgramCacheKey = () => n),
    e
  );
}
const un = new H0(0, -0.035, 0);
let At = null;
function pn() {
  if (At) return At;
  const e = [],
    o = [];
  for (let d = 0; d <= 10; d++) {
    const v = d / 10;
    o.push(
      new P1(
        0.032 + 0.034 * Math.pow(Math.sin(Math.PI * v), 0.8),
        -0.075 + v * 0.15,
      ),
    );
  }
  (e.push([new B1(o, 20), 1]),
    e.push([new mt(0.052, 0.062, 0.05, 18).translate(0, -0.1, 0), 0]),
    e.push([new mt(0.036, 0.052, 0.02, 18).translate(0, -0.07, 0), 0]),
    e.push([new mt(0.02, 0.062, 0.045, 18).translate(0, 0.098, 0), 0]),
    e.push([new mt(0.018, 0.02, 0.03, 12).translate(0, 0.134, 0), 0]));
  for (let d = 0; d < 4; d++) {
    const v = (d * Math.PI) / 2 + 0.4,
      C = [];
    for (let p = 0; p <= 8; p++) {
      const F = p / 8,
        J = 0.044 + 0.034 * Math.pow(Math.sin(Math.PI * F), 0.8);
      C.push(new H0(Math.cos(v) * J, -0.078 + F * 0.158, Math.sin(v) * J));
    }
    e.push([new Yt(new Gt(C), 12, 0.0028, 5, !1), 0]);
  }
  for (const d of [-0.02, 0.03])
    e.push([
      new W1(0.069, 0.0028, 5, 24).rotateX(Math.PI / 2).translate(0, d, 0),
      0,
    ]);
  const n = [];
  for (let d = 0; d <= 12; d++) {
    const v = (Math.PI * d) / 12;
    n.push(new H0(Math.cos(v) * 0.066, 0.1 + Math.sin(v) * 0.1, 0));
  }
  e.push([new Yt(new Gt(n), 16, 0.0025, 5, !1), 0]);
  let c = 0,
    t = 0;
  for (const [d] of e)
    ((c += d.attributes.position.count), (t += d.index.count));
  const s = new Float32Array(c * 3),
    i = new Float32Array(c * 3),
    r = new Float32Array(c),
    l = new Uint16Array(t);
  let a = 0,
    u = 0;
  for (const [d, v] of e) {
    (s.set(d.attributes.position.array, a * 3),
      i.set(d.attributes.normal.array, a * 3),
      r.fill(v, a, a + d.attributes.position.count));
    const C = d.index.array;
    for (let p = 0; p < C.length; p++) l[u + p] = C[p] + a;
    ((a += d.attributes.position.count), (u += C.length), d.dispose());
  }
  const f = new p1();
  return (
    f.setAttribute("position", new Ce(s, 3)),
    f.setAttribute("normal", new Ce(i, 3)),
    f.setAttribute("aPart", new Ce(r, 1)),
    f.setIndex(new Ce(l, 1)),
    f.computeBoundingSphere(),
    (At = f)
  );
}
const bn = `
#include <common>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
attribute float aPart;
varying vec3 vWp;
varying vec3 vNw;
varying vec3 vLp;
varying float vPart;
void main() {
  vLp = position;
  vPart = aPart;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWp = w.xyz;
  vNw = normalize(mat3(modelMatrix) * normal);
  vec4 mvPosition = viewMatrix * w;
  gl_Position = projectionMatrix * mvPosition;
  #include <logdepthbuf_vertex>
  #include <fog_vertex>
}
`,
  wn = `
#include <common>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
uniform vec3 uKeyDir;
uniform vec3 uKeyCol;
uniform vec3 uAmbRGB;
uniform vec3 uTorchPos;
uniform vec3 uTorchDir;
uniform vec3 uTorchCol;
uniform vec4 uTorchP;
uniform float uExposure;
uniform float uFade;
uniform float uFadeT;
uniform vec3 uFlame;
uniform vec3 uGlowCol;
uniform vec3 uLanOff;
varying vec3 vWp;
varying vec3 vNw;
varying vec3 vLp;
varying float vPart;
${Ot}
void main() {
  #include <logdepthbuf_fragment>
  // (it outlasts him a little: the lantern is the last of him to go)
  if (prFaded(vLp + uLanOff, min(1.0, uFade * 1.3 + 0.03), uFadeT)) discard;
  vec3 N = normalize(vNw);
  vec3 V = normalize(cameraPosition - vWp);
  vec3 col;
  if (vPart < 0.5) {
    // tin: dark, a dull sheen; the key and the shade side (his rig), the torch, and inside, its own flame
    vec3 alb = vec3(0.045, 0.04, 0.036);
    float ndl = dot(N, uKeyDir);
    col = alb * uKeyCol * clamp((ndl + 0.15) / 1.15, 0.0, 1.0) + alb * max(uAmbRGB, vec3(0.012, 0.014, 0.02));
    col += uKeyCol * 0.06 * pow(max(dot(N, normalize(uKeyDir + V)), 0.0), 24.0) * max(ndl, 0.0);
    if (uTorchCol.r + uTorchCol.g + uTorchCol.b > 1e-4) {
      vec3 Lt = uTorchPos - vWp;
      float dist = max(length(Lt), 1e-3);
      Lt /= dist;
      float cone = smoothstep(uTorchP.x, uTorchP.y, dot(-Lt, uTorchDir));
      vec3 Et = uTorchCol * cone / max(pow(dist, uTorchP.w), 0.01) / PI;
      Et /= 1.0 + dot(Et, vec3(0.2126, 0.7152, 0.0722)) / 2.2;
      col += alb * Et * max(dot(N, Lt), 0.0) + Et * 0.05 * pow(max(dot(N, normalize(Lt + V)), 0.0), 24.0);
    }
    vec3 Lf = uFlame - vWp;
    float d2 = dot(Lf, Lf);
    Lf *= inversesqrt(max(d2, 1e-6));
    col += (alb * 3.0 + vec3(0.015)) * uGlowCol * max(dot(N, Lf), 0.0) / (d2 * 400.0 + 0.6);
  } else {
    // the glass: amber, glowing; through it the flame's hot core, where the eye's ray passes the flame
    vec3 rd = -V;
    float tf = dot(uFlame - cameraPosition, rd);
    vec3 o = cameraPosition + rd * tf - uFlame;
    float r2 = (o.x * o.x + o.z * o.z) / (0.0062 * 0.0062) + (o.y - 0.004) * (o.y - 0.004) / (0.016 * 0.016);
    float core = exp(-r2 * 0.75), halo = exp(-r2 * 0.035);
    float ndv = abs(dot(N, V));
    vec3 g = uGlowCol * (0.05 + 0.12 * ndv * ndv + 0.55 * halo);
    g *= 1.0 - 0.6 * smoothstep(0.015, 0.072, vLp.y);
    col = g + uGlowCol * vec3(1.5, 1.15, 0.7) * core * 3.2;
    col += uKeyCol * 0.25 * pow(max(dot(N, normalize(uKeyDir + V)), 0.0), 90.0);
  }
  gl_FragColor = vec4(col * uExposure, 1.0);
  #include <fog_fragment>
}
`;
function gn(e, o) {
  const n = new l1({
    uniforms: {
      ...h1.clone(d1.fog),
      uKeyDir: e.uKeyDir,
      uKeyCol: e.uKeyCol,
      uAmbRGB: e.uAmbRGB,
      uExposure: e.uExposure,
      uTorchPos: e.uTorchPos,
      uTorchDir: e.uTorchDir,
      uTorchCol: e.uTorchCol,
      uTorchP: e.uTorchP,
      uFade: o.uFade,
      uFadeT: o.uFadeT,
      uFlame: o.uFlame,
      uGlowCol: o.uGlowCol,
      uLanOff: o.uLanOff,
    },
    vertexShader: bn,
    fragmentShader: wn,
    fog: !0,
  });
  return ((n.name = "priest_lantern"), n);
}
const xt = [1, 0.84, 0.62],
  vn = 0.14,
  Mn = new H0(0.2, 1.35, 0.45),
  Tt = [2.4, 1.2, 0.41],
  Ln = new H0(0.135 * 0.6428 - 0.03 * 0.766, -0.135 * 0.766 - 0.03 * 0.6428, 0),
  kn = new H0(0, 0, 1),
  Ct = new WeakMap();
function Rn(e, o) {
  let n = Ct.get(e);
  return n || typeof document > "u"
    ? n || null
    : ((n = new f1(yo(e))),
      (n.colorSpace = m1),
      (n.premultiplyAlpha = !0),
      (n.anisotropy = 8),
      (n.minFilter = u1),
      Ct.set(e, n),
      o &&
        o.addEventListener("dispose", () => {
          (n.dispose(), Ct.delete(e));
        }),
      n);
}
function yn(e, o, n, c) {
  const t = e.anim,
    s = e.root,
    i = e.def,
    r = ae(t);
  n.uniforms.uGaze = { value: new Fe(0, 0, 0, 0) };
  const l = n.uniforms.uGaze.value,
    a = ot((e.seed * 977 + 13) >>> 0),
    u = new Je(),
    f = new H0();
  let d = !1;
  ((t.pointPt = new H0()), (t.pointOn = !1));
  const v = i.J.head,
    C = new H0(
      i.head.eyeC.L[0] - v[0],
      i.head.eyeC.L[1] - v[1],
      i.head.eyeC.L[2] - v[2],
    ),
    p = new H0(
      i.head.eyeC.R[0] - v[0],
      i.head.eyeC.R[1] - v[1],
      i.head.eyeC.R[2] - v[2],
    ),
    F = new H0(),
    J = new Ht(),
    n0 = { lx: 0, ly: 0, rx: 0, ry: 0 },
    _ = { x: 0, y: 0, t: 0.6 };
  let G = 1.2 + a() * 2,
    y = -1,
    E = !1,
    c0 = -1,
    u0 = 0;
  const q = (y0, x0) => {
      (F.copy(y0).applyQuaternion(t.wq[d0.head]).add(t.wp[d0.head]),
        F.subVectors(r.eyeT, F).applyQuaternion(
          J.copy(t.wq[d0.head]).invert(),
        ));
      const Y0 = Math.max(F.z, 0.05 * F.length());
      return (
        (x0[0] = I0(F.x / Y0, -0.55, 0.55)),
        (x0[1] = I0(F.y / Y0, -0.42, 0.36)),
        x0
      );
    },
    $ = [0, 0],
    x = {
      uFade: { value: 1 },
      uFadeT: { value: 0 },
      uSelfPos: { value: new H0() },
      uSelfCol: { value: new H0() },
      uSelfShield: { value: 0 },
      uFlame: { value: new H0() },
      uGlowCol: { value: new H0() },
      uLanOff: { value: new H0(0.25, 1.38, 0.2) },
    };
  for (const y0 of ["uFade", "uFadeT", "uSelfPos", "uSelfCol", "uSelfShield"])
    n.uniforms[y0] = x[y0];
  n.fragmentShader = hn(n.fragmentShader);
  const e0 = (n.uniforms.uStrange = { value: new Fe() }),
    H = (n.uniforms.uStrangeP = { value: new Fe() }),
    z = (n.uniforms.uStrangeQ = { value: new Fe() }),
    Z = (n.uniforms.uAliveP = { value: n.uniforms.uAliveP.value.clone() }),
    p0 = Z.value.y;
  ((n.uniforms.uFaceTex2 = { value: Rn(i, n.uniforms.uFaceTex?.value) }),
    (e.strangeCfg = he),
    (n.vertexShader = mn(n.vertexShader)));
  const j = [0, 0, 0],
    t0 = [0, 0, 0];
  let A = -1,
    w = !1;
  const Y = c || [e.body],
    b = a1(new _1(), x, "priestFadeDepth"),
    g = a1(new q1(), x, "priestFadeDist");
  for (const y0 of Y)
    ((y0.customDepthMaterial = b), (y0.customDistanceMaterial = g));
  const N = new O1(pn(), gn(o, x));
  ((N.name = "priest_lantern"),
    (N.visible = !1),
    (N.castShadow = !1),
    (N.receiveShadow = !1),
    s.add(N));
  let V = !1,
    O = 0,
    i0 = !1,
    m0 = 0,
    S = 1;
  const P = new H0(),
    s0 = new H0(),
    o0 = { c: new H0(), v: new H0(), on: !1 },
    g0 = new H0(),
    w0 = new H0(),
    k0 = new H0(),
    q0 = new H0(),
    B0 = new Je();
  function P0(y0) {
    (g0.copy(Ln).applyQuaternion(t.wq[d0.handL]).add(t.wp[d0.handL]),
      !o0.on || !(y0 > 0) || y0 > 0.2
        ? (o0.c.set(g0.x, g0.y - 0.2, g0.z), o0.v.set(0, 0, 0), (o0.on = !0))
        : ((o0.v.x += ((g0.x - o0.c.x) * 49 - o0.v.x * 3.2) * y0),
          (o0.v.y += ((g0.y - 0.2 - o0.c.y) * 49 - o0.v.y * 3.2) * y0),
          (o0.v.z += ((g0.z - o0.c.z) * 49 - o0.v.z * 3.2) * y0),
          o0.c.addScaledVector(o0.v, y0)),
      k0.copy(g0).sub(o0.c),
      k0.lengthSq() < 1e-6 && k0.set(0, 1, 0),
      k0.normalize(),
      o0.c.copy(g0).addScaledVector(k0, -0.2),
      w0.copy(kn).applyQuaternion(t.wq[d0.handL]),
      w0.addScaledVector(k0, -w0.dot(k0)),
      w0.lengthSq() < 1e-4 && w0.set(1, 0, 0).addScaledVector(k0, -k0.x),
      w0.normalize(),
      q0.crossVectors(w0, k0),
      N.quaternion.setFromRotationMatrix(B0.makeBasis(w0, k0, q0)),
      N.position.copy(o0.c));
  }
  return {
    pointAt(y0) {
      y0 ? (f.copy(y0), (d = !0)) : (d = !1);
    },
    riseTurn() {
      return u0;
    },
    setFade(y0) {
      x.uFade.value = I0(+y0 || 0);
    },
    get fade() {
      return x.uFade.value;
    },
    flame(y0) {
      return y0.copy(s0);
    },
    holdLantern(y0) {
      ((V = !!y0), (o0.on = !1));
    },
    selfLight(y0, x0) {
      ((O = I0(+y0 || 0)),
        (i0 = !!x0),
        x0 && (Array.isArray(x0) ? P.set(x0[0], x0[1], x0[2]) : P.copy(x0)));
    },
    pre() {
      (d &&
        (s.updateWorldMatrix(!0, !1),
        u.copy(s.matrixWorld).invert(),
        t.pointPt.copy(f).applyMatrix4(u)),
        (t.pointOn = d));
    },
    prep() {
      const y0 = x.uFade.value,
        x0 = y0 <= 0.001;
      if (x0) for (const K of Y) K.visible = !1;
      ((N.visible = V && !x0), s0.copy(un).applyMatrix4(N.matrixWorld));
      const Y0 = i0 ? 0 : V ? 1 : 2;
      (Y0 === 0
        ? x.uSelfPos.value.copy(P)
        : Y0 === 1
          ? x.uSelfPos.value.copy(s0)
          : x.uSelfPos.value.copy(Mn).applyMatrix4(s.matrixWorld),
        (x.uSelfShield.value = Y0 === 1 ? 1 : 0));
      const R = O * vn * (Y0 === 1 ? S * R0(0, 0.4, y0) : 1);
      (x.uSelfCol.value.set(xt[0] * R, xt[1] * R, xt[2] * R),
        x.uFlame.value.copy(s0));
      const T = V ? S * R0(0, 0.4, y0) : 0;
      x.uGlowCol.value.set(Tt[0] * T, Tt[1] * T, Tt[2] * T);
    },
    dispose() {
      (b.dispose(), g.dispose(), N.material.dispose(), N.removeFromParent());
    },
    post(y0) {
      const x0 = t.state;
      (x0 === "rise" ? (u0 = y1(t.t)) : x0 === "pray" && (u0 = 0),
        (m0 += Math.max(y0, 0)),
        (x.uFadeT.value = m0),
        (S =
          0.9 +
          0.055 * Math.sin(m0 * 7.3 + 1.7) +
          0.035 * Math.sin(m0 * 13.1 + 3.1) * Math.sin(m0 * 2.3 + 1) +
          0.02 * Math.sin(m0 * 23 + 5.3)),
        V && P0(y0));
      const Y0 = x0 === "strange";
      (w &&
        !Y0 &&
        ((t0[0] = j[0]),
        (t0[1] = j[1]),
        (t0[2] = j[2]),
        (A = 0),
        G > 0.12 && y < 0 && (G = 0.12)),
        (w = Y0));
      let R = 0;
      (A >= 0 &&
        ((A += Math.max(y0, 0)),
        (R = 1 - R0(0, he.out, A)),
        R <= 0 && ((A = -1), (R = 0))),
        Y0 ? nn(t.t, j) : (j[0] = j[1] = j[2] = 0));
      for (let D0 = 0; D0 < 3; D0++) j[D0] = Math.max(j[D0], t0[D0] * R);
      (e0.value.set(j[0], j[1] * he.eyes, j[2], he.lean),
        H.value.set(he.stretch, he.lift, he.browIn, he.browUp),
        z.value.set(he.lidLean, 0, 0, 0),
        (Z.value.y = T0(p0, he.pupil, j[1])),
        (_.t -= y0),
        _.t <= 0 &&
          ((_.t = 0.5 + a() * 1.4),
          (_.x = (a() - 0.5) * 0.06),
          (_.y = (a() - 0.5) * 0.04)),
        Y0 && ((_.x *= 1 - j[1]), (_.y *= 1 - j[1])));
      let T, K, l0, h0;
      r.eyeOn && x0 !== "pray"
        ? (q(C, $), (T = $[0]), (K = $[1]), q(p, $), (l0 = $[0]), (h0 = $[1]))
        : ((T = l0 = 0),
          (K = h0 = x0 === "pray" || x0 === "still" ? -0.25 : -0.03));
      const C0 = y0 > 0 ? 1 - Math.exp(-y0 * 22) : 1;
      ((n0.lx += (T + _.x - n0.lx) * C0),
        (n0.ly += (K + _.y - n0.ly) * C0),
        (n0.rx += (l0 + _.x - n0.rx) * C0),
        (n0.ry += (h0 + _.y - n0.ry) * C0),
        l.set(n0.lx, n0.ly, n0.rx, n0.ry),
        (G -= y0),
        x0 === "taken" && t.t > 2.1 && (G = Math.max(G, 0.5)),
        Y0 && ((G = Math.max(G, 0.5)), (E = !1)),
        G <= 0 && y < 0 && ((y = 0), (E = a() < 0.2), (G = 3 + a() * 2)));
      let S0 = 0;
      y >= 0 &&
        ((y += y0),
        (S0 = y < 0.07 ? R0(0, 0.07, y) : y < 0.1 ? 1 : 1 - R0(0.1, 0.21, y)),
        y > 0.21 && (E ? ((E = !1), (y = 0)) : (y = -1)));
      let F0 = x0 === "pray" ? 1 : x0 === "still" ? 1 - R0(0.25, 0.5, t.t) : 0;
      (x0 === "pray_stand"
        ? (F0 = 1)
        : x0 === "flinch"
          ? (F0 = R0(0, 0.05, t.t) * (1 - R0(0.3, 0.55, t.t)) * 0.95)
          : x0 === "taken" && (F0 = R0(2.22, 2.6, t.t) * 0.88),
        c0 < 0 && (c0 = F0),
        (c0 += (F0 - c0) * (y0 > 0 ? 1 - Math.exp(-y0 * 12) : 1)));
      const E0 = I0(-(n0.ly + n0.ry) * 0.5 * 0.9, 0, 0.3);
      o.uBlink.value = I0(Math.max(S0, c0, E0));
    },
  };
}
const ht = { lanky: uo, brute: po, gown: bo };
ht.soldier = go;
ht.nun = vo;
ht.priest = ko;
Z1(x1);
const it = new Map();
function T1(e) {
  if (it.has(e)) return it.get(e);
  const o = ht[e];
  if (!o) throw new Error("unknown zombie kind " + e);
  const n = performance.now(),
    c = o(),
    t = (F) => {
      const J = new p1();
      return (
        J.setAttribute("position", new Ce(F.position, 3)),
        J.setAttribute("normal", new Ce(F.normal, 3)),
        J.setAttribute("skinIndex", new Y1(F.skinIndex, 4)),
        J.setAttribute("skinWeight", new G1(F.skinWeight, 4)),
        J.setAttribute("aMat", new Ce(F.aMat, 1)),
        J.setAttribute("aCol", new Ce(F.aCol, 4)),
        J.setAttribute("aAO", new Ce(F.aAO, 1)),
        J.setIndex(new Ce(F.index, 1)),
        (J.boundingSphere = new Ft(new H0(0, 0.9, 0), 2.3)),
        (J.boundingBox = new U1(
          new H0(-2.3, -0.2, -2.3),
          new H0(2.3, 2.3, 2.3),
        )),
        J
      );
    },
    s = $t(c),
    i = t(s),
    r = (F) =>
      t($t({ ...c, parts: c.parts.map((J) => ({ ...J, res: J.res * F })) })),
    l = r(1.7),
    a = r(2.8);
  let u = null;
  if (typeof document < "u") {
    const F = c.paintFace ? c.paintFace(c) : mo(c);
    ((u = new f1(F)),
      (u.colorSpace = m1),
      (u.premultiplyAlpha = !0),
      (u.anisotropy = 8),
      (u.minFilter = u1));
  }
  const f = ro(c, u),
    d = g1(b1, c.J),
    v = new w1();
  (v.add(d[0]), v.updateMatrixWorld(!0));
  const C = d.map((F) => new Je().copy(F.matrixWorld).invert()),
    p = {
      kind: e,
      def: c,
      geo: i,
      geoMid: l,
      geoLo: a,
      kindU: f,
      inv: C,
      faceTex: u,
      stats: s.stats,
      buildMs: Math.round(performance.now() - n),
    };
  return (it.set(e, p), p);
}
async function Fn(e = Object.keys(ht)) {
  for (const o of e) (T1(o), await new Promise((n) => setTimeout(n, 0)));
}
function En() {
  for (const e of it.values())
    (e.geo.dispose(), e.faceTex && e.faceTex.dispose());
  it.clear();
}
const C1 = (e) => e.weapons?.torch || null;
function Sn(e) {
  return Q1(e, {
    maxLevel: 0.7,
    minLevel: 0.04,
    rimAmt: 0.4,
    exclude: (o) => o === C1(e),
  });
}
const i1 = new H0(),
  r1 = new H0(),
  c1 = new H0();
function In(e, o = {}) {
  const n = e.game || e,
    c = o.kind || "lanky",
    t = o.seed ?? 1,
    s = T1(c),
    i = performance.now(),
    r = s.def,
    l = new w1();
  l.name = "zombie_" + c;
  const a = g1(b1, r.J);
  (l.add(a[0]), l.updateMatrixWorld(!0));
  const u = new K1(
      a,
      s.inv.map((q) => q.clone()),
    ),
    f = co();
  f.uSeed.value = ((t * 7.31) % 13) + 0.5;
  const d = new Ut(s.geo, fo(s.kindU, f));
  ((d.name = "body"), l.add(d));
  const v = new Je();
  (d.bind(u, v),
    (d.boundingSphere = new Ft(new H0(0, 0.9, 0), 2.3)),
    (d.castShadow = !0),
    (d.receiveShadow = !1));
  const C = [d];
  for (const [q, $] of [
    [s.geoMid, "body_mid"],
    [s.geoLo, "body_lo"],
  ]) {
    const x = new Ut(q, d.material);
    ((x.name = $),
      l.add(x),
      x.bind(u, v),
      (x.boundingSphere = new Ft(new H0(0, 0.9, 0), 2.3)),
      (x.castShadow = !1),
      (x.receiveShadow = !1),
      (x.visible = !1),
      C.push(x));
  }
  const p = new V1(r, t);
  p.apply(a);
  const F = Sn(n),
    J = new H0(),
    n0 = new H0();
  let _ = o.speed ?? 1,
    G = null;
  const y = new Je();
  let E = null;
  function c0(q, $, x) {
    const e0 = a[q.bone].matrixWorld;
    ($.copy(q.a).applyMatrix4(e0), x.copy(q.b).applyMatrix4(e0));
  }
  const u0 = {
    root: l,
    kind: c,
    seed: t,
    bones: a,
    skeleton: u,
    body: d,
    anim: p,
    def: r,
    height: r.height,
    onEvent: null,
    buildMs: s.buildMs,
    get state() {
      return p.state;
    },
    get time() {
      return p.t;
    },
    get dead() {
      return p.dead;
    },
    get down() {
      return p.down;
    },
    get groundSpeed() {
      return p.groundSpeed;
    },
    get speed() {
      return _;
    },
    setState(q, $ = {}) {
      ($.speed != null && (_ = $.speed),
        p.setState(q, $, !!$.instant),
        $.instant && p.apply(a));
    },
    lookAt(q, $ = 0.85) {
      ((G = q || null), (p.lookW = $), q || (p.look = null));
    },
    update(q, $) {
      ($ && $.speed != null && (_ = $.speed),
        G &&
          (l.updateWorldMatrix(!0, !1),
          y.copy(l.matrixWorld).invert(),
          p.lookPt.copy(G).applyMatrix4(y),
          (p.look = p.lookPt)),
        E && E.pre(q),
        p.update(q, _),
        p.apply(a),
        E && E.post(q));
      const x = p.events;
      if (x.length) {
        for (let e0 = 0; e0 < x.length; e0++)
          u0.onEvent && u0.onEvent(x[e0][0], x[e0][1]);
        x.length = 0;
      }
    },
    hitTest(q, $, x = 100) {
      l.updateWorldMatrix(!0, !0);
      let e0 = null,
        H = x;
      for (const z of p.vols) {
        c0(z, r1, c1);
        const Z = An(q, $, r1, c1, z.r * l.scale.x);
        Z >= 0 && Z < H && ((H = Z), (e0 = z));
      }
      return e0
        ? {
            zone: e0.zone,
            point: q.clone().addScaledVector($, H),
            distance: H,
            bone: bt[e0.bone],
          }
        : null;
    },
    headWorld(q = new H0()) {
      return (
        l.updateWorldMatrix(!0, !0),
        q.set(0, 0.07, 0.02).applyMatrix4(a[d0.head].matrixWorld)
      );
    },
    chestWorld(q = new H0()) {
      return (
        l.updateWorldMatrix(!0, !0),
        q.set(0, 0.08, 0.04).applyMatrix4(a[d0.chest].matrixWorld)
      );
    },
    prepare(q) {
      if (!l.visible) return;
      l.updateWorldMatrix(!0, !0);
      {
        const H = q.position.distanceToSquared(l.position),
          z = H < 12.25 ? 0 : H < 100 ? 1 : 2;
        for (let Z = 0; Z < 3; Z++)
          ((C[Z].visible = Z === z), (C[Z].castShadow = Z === z && H < 81));
      }
      u0.chestWorld(i1);
      const $ = F.at(i1);
      (f.uKeyDir.value.copy($.keyDir),
        f.uKeyCol.value.copy($.keyCol),
        f.uAmbGain.value.copy($.ambGain),
        f.uAmbCol.value.copy($.ambCol),
        f.uAmbRGB.value.copy($.ambRGB),
        (f.uAmb.value = $.amb),
        f.uRimCol.value.copy($.rimCol),
        (f.uRimAmt.value = $.rimAmt));
      const x = $.rimDir || [1, -0.2];
      (f.uRimDir.value
        .set(x[0], -x[1], -0.35)
        .normalize()
        .applyQuaternion(q.quaternion),
        (f.uExposure.value = $.comp ?? 1));
      const e0 = C1(n);
      (e0 && e0.visible && e0.intensity > 0
        ? (e0.getWorldPosition(J),
          e0.target.getWorldPosition(n0),
          f.uTorchPos.value.copy(J),
          f.uTorchDir.value.copy(n0).sub(J).normalize(),
          f.uTorchCol.value.copy(e0.color).multiplyScalar(e0.intensity),
          f.uTorchP.value.set(
            Math.cos(e0.angle),
            Math.cos(e0.angle * (1 - e0.penumbra)),
            e0.distance || 1e4,
            e0.decay ?? 2,
          ))
        : f.uTorchCol.value.setRGB(0, 0, 0),
        E && E.prep(q));
    },
    setSilhouette(q) {
      f.uSil.value = q ? 1 : 0;
    },
    dispose() {
      (l.removeFromParent(),
        d.material.dispose(),
        u.dispose(),
        E && E.dispose());
    },
  };
  return (
    (u0.setMouth = (q) => {
      p.mouth = q;
    }),
    (u0.pointAt = (q) => {
      E && E.pointAt(q);
    }),
    Object.defineProperty(u0, "riseTurn", {
      get: () => (E ? E.riseTurn() : 0),
    }),
    (u0.setFade = (q) => {
      E && E.setFade(q);
    }),
    (u0.holdLantern = (q) => {
      E && E.holdLantern(q);
    }),
    (u0.selfLight = (q, $) => {
      E && E.selfLight(q, $);
    }),
    (u0.lanternWorld = (q = new H0()) => (E ? E.flame(q) : null)),
    Object.defineProperty(u0, "fade", { get: () => (E ? E.fade : 1) }),
    r.alive && (E = yn(u0, f, d.material, C)),
    (u0.createMs = performance.now() - i),
    u0
  );
}
function An(e, o, n, c, t) {
  const s = c.x - n.x,
    i = c.y - n.y,
    r = c.z - n.z,
    l = e.x - n.x,
    a = e.y - n.y,
    u = e.z - n.z,
    f = s * s + i * i + r * r,
    d = s * o.x + i * o.y + r * o.z,
    v = s * l + i * a + r * u,
    C = o.x * l + o.y * a + o.z * u,
    p = l * l + a * a + u * u,
    F = f - d * d;
  let J = f * C - v * d,
    n0 = f * p - v * v - t * t * f,
    _ = J * J - F * n0;
  if (F > 1e-9 && _ >= 0) {
    const y = (-J - Math.sqrt(_)) / F,
      E = v + y * d;
    if (E > 0 && E < f && y >= 0) return y;
  }
  let G = -1;
  for (const y of [n, c]) {
    const E = e.x - y.x,
      c0 = e.y - y.y,
      u0 = e.z - y.z;
    if (
      ((J = o.x * E + o.y * c0 + o.z * u0),
      (n0 = E * E + c0 * c0 + u0 * u0 - t * t),
      (_ = J * J - n0),
      _ >= 0)
    ) {
      const q = -J - Math.sqrt(_);
      q >= 0 && (G < 0 || q < G) && (G = q);
    }
  }
  return G;
}
export {
  ht as KINDS,
  Zo as PRIEST_TAKEN,
  Hn as STATES,
  In as createZombie,
  En as disposeKits,
  T1 as getKit,
  Fn as prebuildZombies,
};
