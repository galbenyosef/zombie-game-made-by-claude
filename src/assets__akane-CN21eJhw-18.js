// assets__akane-CN21eJhw 18 — mul
// Lines 6045-6391 of readable/assets__akane-CN21eJhw.pretty.js (statement-aligned).
function Pe(e, t) {
  const [a, o, r, i] = t;
  let n = c.norm(e.thumbDir || [0.62, -0.38, 0.68]);
  n = Y0(n, c.norm([0, 0.3, 1]), -a * 0.9);
  const s = c.norm(c.cross(n, [0, -1, 0.2])),
    u = [q0.k],
    l = [];
  let v = q0.k;
  for (const g of [o, r, i])
    ((n = Y0(n, s, g)),
      (v = c.add(v, c.mul(n, q0.L[u.length - 1]))),
      u.push(v),
      l.push(c.norm(c.cross(n, s))));
  return { pts: u, ups: l };
}
const nt = (e, t) => {
  const a = e.pts[2],
    o = e.pts[3],
    r = e.ups[2];
  return { c: c.lerp(a, o, 0.62), n: c.mul(r, -1), r: t };
};
function Ae(e, t, a, o) {
  let r = e.slice(),
    i = o(r);
  const n = r.length,
    s = 5,
    u = new Array(n).fill(0);
  for (let l = 0; l < Math.pow(s, n); l++) {
    let v = l;
    const g = u.map((y, k) => {
        const G = v % s;
        return ((v = Math.floor(v / s)), t[k] + ((a[k] - t[k]) * G) / (s - 1));
      }),
      m = o(g);
    m < i && ((i = m), (r = g));
  }
  for (let l = 0.12; l > 0.004; l *= 0.5) {
    let v = !0;
    for (; v;) {
      v = !1;
      for (let g = 0; g < n; g++)
        for (const m of [-1, 1]) {
          const y = r.slice();
          y[g] = Z(y[g] + m * l, t[g], a[g]);
          const k = o(y);
          k < i - 1e-12 && ((i = k), (r = y), (v = !0));
        }
    }
  }
  return r;
}
const Lt = new Map();
function $o(e, t = 0) {
  const a = e + "|" + (+t || 0).toFixed(3);
  let o = Lt.get(a);
  return (o || ((o = Qo(e, t)), Lt.set(a, o)), o);
}
function Qo(e, t) {
  const a = Gt[e] || Gt.relaxed,
    { defs: o, map: r } = qt(t),
    i = o.length,
    n = (d) => ((i - 1) / 2 - d) * a.spread * (4 / i),
    s = o.map((d, w) => ot(d, a.c[r[w]], n(w))),
    u = q0.r * ne[3],
    l = o[0].r * F0[2];
  let v = a.thumb.slice(0, 4);
  const g = [-0.3, -0.35, -0.3, -0.3],
    m = [1.7, 1.2, 1.4, 1.4];
  let y = null,
    k = null;
  if (a.thumbTo === "pick") {
    const d = c.norm(c.add(c.norm(Zo), [1, 0, 0])),
      w = c.norm(c.sub(Bt, c.mul(d, c.dot(Bt, d)))),
      f = s[0],
      C = c.add(c.lerp(f.pts[2], f.pts[3], 0.45), c.mul(d, l + 6e-4));
    let x = -1 / 0;
    s.forEach((F, L) =>
      F.pts.slice(1).forEach((O, J) => {
        x = Math.max(x, c.dot(O, w) + o[L].r * F0[J + 1]);
      }),
    );
    const p = Math.max(0.004, x + 0.015 - 0.0165 - c.dot(C, w)),
      M = c.add(C, c.mul(w, p)),
      I = c.add(M, c.mul(w, -0.0075)),
      P = c.add(I, c.mul(d, 6e-4 + u));
    ((v = Ae(v, g, m, (F) => {
      const L = nt(Pe(a, F), u),
        O = c.sub(L.c, P);
      return c.dot(O, O) + 3e-5 * (1 - c.dot(L.n, c.mul(d, -1)));
    })),
      (y = { center: M, dir: w, across: c.norm(c.cross(w, d)), face: d }),
      (y.tip = c.add(M, c.mul(w, 0.0165))));
  }
  if (a.thumbTo === "tuck" || a.thumbTo === "fist") {
    const d = (p, M, I) =>
        c.add(
          c.lerp(p.pts[1], p.pts[2], I),
          c.mul(p.ups[1], o[M].r * F0[1] + q0.r * ne[2] * 0.92),
        ),
      w = a.thumbTo === "fist" ? 0 : 1,
      f = d(s[w], w, 0.6),
      C = d(s[w + 1], w + 1, 0.55),
      x = c.norm(c.add(s[w].ups[1], s[w + 1].ups[1]));
    v = Ae(v, g, m, (p) => {
      const M = Pe(a, p),
        I = c.sub(M.pts[2], f),
        P = c.sub(M.pts[3], C);
      return (
        c.dot(I, I) +
        c.dot(P, P) +
        3e-5 * (1 - c.dot(c.mul(M.ups[2], -1), c.mul(x, -1)))
      );
    });
  }
  if (a.thumbTo === "pen") {
    const d = s[0],
      w = nt(d, o[0].r * F0[3]),
      f = c.add(w.c, c.mul(w.n, w.r + et + 4e-4)),
      C = c.add(o[0].k, [0.013, 0.004, -0.02]),
      x = c.norm(c.sub(C, f)),
      p = c.norm(c.sub([1, 0, 0], c.mul(x, c.dot([1, 0, 0], x)))),
      M = c.add(c.add(f, c.mul(x, 0.004)), c.mul(p, et + u + 4e-4));
    v = Ae(v, g, m, (L) => {
      const O = nt(Pe(a, L), u),
        J = c.sub(O.c, M);
      return c.dot(J, J) + 2e-5 * (1 - c.dot(O.n, c.mul(p, -1)));
    });
    const I = o[1].r * F0[2],
      P = c.add(c.add(f, c.mul(x, 0.006)), c.mul(p, -(et + I + 4e-4))),
      F = Ae(
        [...a.c[1], n(1)],
        [0.2, 0.3, 0.1, -0.35],
        [1.5, 1.8, 1.2, 0.35],
        (L) => {
          const O = ot(o[1], L.slice(0, 3), L[3]),
            J = c.sub(c.lerp(O.pts[2], O.pts[3], 0.5), P);
          return c.dot(J, J);
        },
      );
    ((s[1] = ot(o[1], F.slice(0, 3), F[3])),
      (k = { tip: c.add(f, c.mul(x, -0.024)), dir: x }));
  }
  const G = Pe(a, v);
  return {
    fingers: s.map((d) => d.pts),
    ups: s.map((d) => d.ups),
    axes: s.map((d) => d.axis),
    bases: s.map((d) => d.base),
    thumb: G.pts,
    thumbUps: G.ups,
    pick: y,
    pen: k,
    phone: !!a.phone,
    n: i,
  };
}
function re(e, t, a, o) {
  const r = e[0],
    i = e[1],
    n = e[2],
    s = t[0] - r,
    u = t[1] - i,
    l = t[2] - n,
    v = 1 / Math.max(s * s + u * u + l * l, 1e-12),
    g = o - a;
  return (m, y, k) => {
    const G = m - r,
      d = y - i,
      w = k - n;
    let f = (G * s + d * u + w * l) * v;
    f = f < 0 ? 0 : f > 1 ? 1 : f;
    const C = G - s * f,
      x = d - u * f,
      p = w - l * f;
    return Math.sqrt(C * C + x * x + p * p) - (a + g * f);
  };
}
const Ro = (e, t, a, o, r) => {
  const i = Math.max(o[0] - e, 0, e - r[0]),
    n = Math.max(o[1] - t, 0, t - r[1]),
    s = Math.max(o[2] - a, 0, a - r[2]);
  return Math.sqrt(i * i + n * n + s * s);
};
function Jo(e, t) {
  const a = t.map((f) => [
      f.k[0],
      f.k[1] + 0.0022,
      f.k[2] - 0.004,
      f.r * F0[0] * 1.06,
    ]),
    o = [-0.034, -0.021, -0.046],
    r = [0.034, 0.015, 0.083],
    i = (f, C, x) => {
      const p = Ro(f, C, x, o, r);
      if (p > 0.007) return p;
      let M = E0(f, C, x, 0, -0.0015, 0.037, 0.0215, 0.0036, 0.0305, 0.0074);
      ((M = B0(
        M,
        Math.abs(f + 0.001) - 0.0305 + Math.max(0, 0.034 - x) * 0.2,
        0.006,
      )),
        (M = S0(
          M,
          N0(f, C, x, 0.0165, -0.0085, 0.027, 0.0125, 0.0085, 0.019),
          0.008,
        )),
        (M = S0(
          M,
          N0(f, C, x, -0.0185, -0.0065, 0.037, 0.0105, 0.0075, 0.024),
          0.008,
        )),
        (M = S0(
          M,
          E0(f, C, x, 0, -0.001, -0.016, 0.0165, 0.0038, 0.021, 0.0074),
          0.012,
        )));
      for (const I of a) M = S0(M, Se(f, C, x, I[0], I[1], I[2], I[3]), 0.006);
      return M;
    },
    n = (f, C, x, p = null) => {
      const M = c.mul(c.add(c.add(f[0], f[1]), c.add(f[2], f[3])), 0.25);
      let I = 0;
      for (const R of f) I = Math.max(I, c.len(c.sub(R, M)));
      I += x[0] + 0.012;
      const P = p || c.norm(c.sub(f[1], f[0])),
        F = c.sub(f[0], c.mul(P, 0.012)),
        L = c.add(f[1], c.mul(C[0], 6e-4)),
        O = c.add(f[2], c.mul(C[1], 5e-4)),
        J = re(F, f[0], x[0], x[0]),
        s0 = re(f[0], f[1], x[0], x[1]),
        $ = re(f[1], f[2], x[1] * 0.97, x[2]),
        r0 = re(f[2], f[3], x[2] * 0.97, x[3]),
        t0 = x[1] * 1.01,
        V = x[2] * 1.005;
      return (R, H, N) => {
        const Y = Se(R, H, N, M[0], M[1], M[2], I);
        if (Y > 0.006) return Y;
        let o0 = Math.min(J(R, H, N), s0(R, H, N), $(R, H, N), r0(R, H, N));
        return (
          (o0 = S0(o0, Se(R, H, N, L[0], L[1], L[2], t0), 0.003)),
          (o0 = S0(o0, Se(R, H, N, O[0], O[1], O[2], V), 0.0025)),
          o0
        );
      };
    },
    s = t.map((f) => F0.map((C) => f.r * C)),
    u = e.fingers.map((f, C) => n(f, e.ups[C], s[C], e.bases[C])),
    l = ne.map((f) => q0.r * f),
    v = n(e.thumb, e.thumbUps, l),
    g = (f, C, x) => {
      const p = S0(i(f, C, x), v(f, C, x), 0.011);
      let M = p;
      for (const I of u) M = Math.min(M, S0(p, I(f, C, x), 0.0055));
      return M;
    },
    m = (f, C, x, p, M) => {
      const I = c.norm(c.sub(x, f)),
        P = re(c.sub(f, c.mul(I, C)), x, p + oe, M + oe);
      return (F, L, O) =>
        B0(
          P(F, L, O),
          (F - x[0]) * I[0] + (L - x[1]) * I[1] + (O - x[2]) * I[2],
          6e-4,
        );
    },
    y = e.fingers.map((f, C) => {
      const x = re(
          c.sub(f[0], c.mul(e.bases[C], 0.012)),
          f[0],
          s[C][0] + oe,
          s[C][0] + oe,
        ),
        p = m(
          f[0],
          0,
          c.lerp(f[0], f[1], ct),
          s[C][0],
          n0(s[C][0], s[C][1], ct),
        );
      return (M, I, P) => Math.min(x(M, I, P), p(M, I, P));
    }),
    k = c.lerp(e.thumb[1], e.thumb[2], 0.3),
    G = m(e.thumb[0], 0.004, e.thumb[1], l[0], l[1]),
    d = m(e.thumb[1], 0.002, k, l[1], n0(l[1], l[2], 0.3));
  return {
    skin: g,
    glove: (f, C, x) => {
      let p = i(f, C, x) - oe;
      p = S0(p, Math.min(G(f, C, x), d(f, C, x)), 0.008);
      for (const M of y) p = S0(p, M(f, C, x), 0.004);
      return p;
    },
  };
}
const Ho = 8e-4;
function Tt(e, t, a = !0) {
  const o = a ? [-0.037, -0.024, -0.049] : [1 / 0, 1 / 0, 1 / 0],
    r = a ? [0.037, 0.017, 0.084] : [-1 / 0, -1 / 0, -1 / 0];
  return (
    e.forEach((i, n) => {
      const s = t[n] + 0.0045;
      for (let u = 0; u < 3; u++)
        ((o[u] = Math.min(o[u], i[u] - s)), (r[u] = Math.max(r[u], i[u] + s)));
    }),
    { lo: o, hi: r }
  );
}
function zt(e, t, a) {
  const o = ze(t, a.lo, a.hi, Ho, { smooth: 1, project: 1 }),
    r = new e.BufferGeometry();
  return (
    r.setAttribute("position", new e.BufferAttribute(o.positions, 3)),
    r.setAttribute("normal", new e.BufferAttribute(o.normals, 3)),
    r.setIndex(new e.BufferAttribute(o.indices, 1)),
    r.computeBoundingSphere(),
    r
  );
}
function Eo(e, t) {
  let a = 0,
    o = 0;
  for (const v of t)
    ((a += v.attributes.position.count),
      (o += v.index ? v.index.count : v.attributes.position.count));
  const r = new Float32Array(a * 3),
    i = new Float32Array(a * 3),
    n = new Uint32Array(o);
  let s = 0,
    u = 0;
  for (const v of t) {
    (r.set(v.attributes.position.array, s * 3),
      i.set(v.attributes.normal.array, s * 3));
    const g = v.index
      ? v.index.array
      : [...Array(v.attributes.position.count).keys()];
    for (let m = 0; m < g.length; m++) n[u + m] = g[m] + s;
    ((s += v.attributes.position.count), (u += g.length), v.dispose());
  }
  const l = new e.BufferGeometry();
  return (
    l.setAttribute("position", new e.BufferAttribute(r, 3)),
    l.setAttribute("normal", new e.BufferAttribute(i, 3)),
    l.setIndex(new e.BufferAttribute(n, 1)),
    l.computeBoundingSphere(),
    l
  );
}
