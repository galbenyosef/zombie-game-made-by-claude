// assets__park-CwBfNU5l 04 — math
// Lines 1011-1347 of readable/assets__park-CwBfNU5l.pretty.js (statement-aligned).
function Na(e) {
  const a = [],
    t = (n, i, f, w = {}) => {
      const s = w.big ?? 0.5 + e() * 0.5,
        l =
          n === "plane"
            ? { r: 0.42 + s * 0.36, H: 21 + s * 10 }
            : n === "oak"
              ? { r: 0.45 + s * 0.35, H: 15 + s * 7 }
              : { r: 0.13 + s * 0.1, H: 8 + s * 5 };
      a.push({
        kind: n,
        x: i,
        z: f,
        r: w.r ?? l.r,
        H: w.H ?? l.H,
        seed: e(),
        fixed: !!w.fixed,
        ...w.extra,
      });
    };
  for (const [n, i] of [
    [11.5, -1],
    [12.2, 1],
    [22.4, -1],
    [23, 1],
    [32.6, -1],
    [33.2, 1],
  ]) {
    const f = re("avenue", n);
    t("plane", f.x - f.tz * i * 7.2 * -1, f.z + f.tx * i * 7.2 * -1, {
      big: 0.75 + e() * 0.25,
      fixed: !0,
    });
  }
  for (const n of [36, 118, 150, -32, 205]) {
    const i = (n * Math.PI) / 180,
      f = 18.6 + e() * 1.5;
    t("plane", c0.x + Math.cos(i) * f, c0.z + Math.sin(i) * f, {
      big: 0.8 + e() * 0.2,
      fixed: !0,
    });
  }
  (t("plane", Nt.tree[0], Nt.tree[1], { big: 0.9, fixed: !0 }),
    t("oak", 389, 133, { big: 0.95, fixed: !0 }),
    t("oak", 411.8, 150 - 7.5, { big: 0.7, fixed: !0 }),
    t("oak", 391, 177, { big: 1, fixed: !0 }),
    t("plane", 414, 112, { big: 0.85, fixed: !0 }),
    t("plane", 497, 120.5, { big: 0.9, fixed: !0 }),
    t("plane", 413.5, 72, { big: 0.9, fixed: !0 }));
  const r = (n, i) => se(n, i, 430, 194, 449, 96),
    o = (n, i, f, w) => {
      if (
        !V0(n, i, 5) ||
        (n > m0.x0 - 3 && n < m0.x1 + 3 && i > m0.z0 - 3 && i < m0.z1 + 3) ||
        Le(n, i).d < 2.4 + f ||
        G0(n, i) < (i > 150 ? 13 : 6) ||
        Math.hypot(n - 430, i - 196) < 20
      )
        return !1;
      {
        const M = (Math.atan2(n - 430, 195.6 - i) * 180) / Math.PI;
        if (i > 100 && i < 185 && Math.abs(M - 11.2) < 6.5) return !1;
      }
      {
        let M = 1e9;
        for (const h of be.find((v) => v.id === "avenueN").segs)
          M = Math.min(M, se(n, i, h.ax, h.az, h.bx, h.bz));
        if (M < 11) return !1;
      }
      if (
        (i > 108 && i < 190 && r(n, i) < 4.5) ||
        Math.hypot(n - c0.x, i - c0.z) < 16 ||
        Math.hypot(n - I0.x, i - I0.z) < 10 ||
        Math.hypot(n - L0.x, i - L0.z) < 7
      )
        return !1;
      const l = ta;
      if (n > l.x0 - 2 && n < l.x1 + 2 && i > l.z0 - 2 && i < l.z1 + 2)
        return !1;
      const u = F0;
      if (n > u.x0 - 2 && n < u.x1 + 2 && i > u.z0 - 2 && i < u.z1 + 2)
        return !1;
      const c = Z0;
      if (
        (n > c.x0 - 2 && n < c.x1 + 2 && i > c.z0 - 2 && i < c.z1 + 2) ||
        (n > R0.x0 - 6 && n < R0.x1 + 6 && i > 184) ||
        Math.hypot(n - 470, i - 152) < 15 ||
        Math.hypot(n - Nt.x, i - Nt.z) < 7
      )
        return !1;
      for (const M of a)
        if (Math.hypot(M.x - n, M.z - i) < w + (M.kind === "young" ? 2 : 4))
          return !1;
      return !0;
    };
  for (let n = 0; n < 6e4 && a.length < 150; n++) {
    const i = Jt.x0 + e() * (Jt.x1 - Jt.x0),
      f = Jt.z0 + e() * (Jt.z1 - Jt.z0),
      w = f < 135 ? 1 : 0,
      s = w ? 4.8 + e() * 2.5 : 8 + e() * 6;
    if (!w && e() < 0.45) continue;
    const l = e() < (w ? 0.42 : 0.55) ? "plane" : e() < 0.82 ? "oak" : "young";
    o(i, f, 0.8, s) && t(l, i, f);
  }
  for (const n of a)
    n.crown =
      n.kind === "young"
        ? n.H * 0.28
        : n.kind === "oak"
          ? n.H * 0.55
          : n.H * 0.36;
  return a;
}
const Ga = {
  plane: {
    trunk: [0.3, 0.42],
    limbs: [4, 6],
    elev: [0.6, 1.05],
    limbLen: [0.42, 0.55],
    kids: [5, 4, 3],
    ang: [0.55, 0.62, 0.7],
    ratio: [0.62, 0.6, 0.55],
    wob: [0.2, 0.28, 0.32, 0.36],
    rise: [0.06, 0.07, 0.06, 0.05],
    leaf: 0.22,
    leafCell: t0.planeLeaf,
    bare: [t0.bareA, t0.bareB],
    cardSize: [1.5, 2.3],
    spread: 1,
  },
  oak: {
    trunk: [0.18, 0.26],
    limbs: [5, 7],
    elev: [0.22, 0.62],
    limbLen: [0.62, 0.78],
    kids: [5, 4, 3],
    ang: [0.62, 0.72, 0.8],
    ratio: [0.6, 0.6, 0.55],
    wob: [0.3, 0.44, 0.48, 0.5],
    rise: [0.02, 0, -0.01, 0],
    leaf: 0.5,
    leafCell: t0.oakLeaf,
    bare: [t0.bareC, t0.bareB],
    cardSize: [1.3, 2],
    spread: 1.25,
  },
  young: {
    trunk: [0.32, 0.4],
    limbs: [3, 5],
    elev: [0.75, 1.1],
    limbLen: [0.45, 0.55],
    kids: [4, 3],
    ang: [0.5, 0.6],
    ratio: [0.6, 0.55],
    wob: [0.18, 0.25, 0.3],
    rise: [0.08, 0.08, 0.06],
    leaf: 0.12,
    leafCell: t0.planeLeaf,
    bare: [t0.youngTwig],
    cardSize: [0.9, 1.4],
    spread: 0.8,
  },
};
function sa(e, a, t = {}) {
  const r = Ga[e.kind],
    o = [],
    n = [],
    i = r.kids.length,
    f = I(0, 1, 0),
    w = I(0, 0, 0),
    s = () => I(a() - 0.5, a() - 0.5, a() - 0.5),
    l = a(),
    u = I(e.x, e.H * 0.62, e.z),
    c = t.floorY ?? 0,
    M = (y, m, F, C, L) => {
      const z = k0(y, (A) => m + (F - m) * Math.pow(A, 0.85), C),
        W = z.attributes.position.count,
        D = new Float32Array(W * 3),
        V = z.attributes.position;
      for (let A = 0; A < W; A++)
        ((D[A * 3] = L * Math.exp(-Math.max(0, V.getY(A) - c) / 1.6)),
          (D[A * 3 + 1] = l),
          (D[A * 3 + 2] = L));
      return (z.setAttribute("aK", new $t(D, 3)), o.push(z), z);
    },
    h = (y, m, F, C, L) =>
      n.push({
        pos: y,
        along: m.clone().add(s().multiplyScalar(0.9)).normalize(),
        size: C,
        cell: F,
        out: null,
        shade: L,
      }),
    v = (y, m, F, C, L) => {
      const z = [8, 6, 4, 3, 3][L],
        W = [y.clone()],
        D = m.clone(),
        V = y.clone();
      for (let q = 0; q < z; q++)
        (D.addScaledVector(s(), r.wob[L])
          .addScaledVector(f, r.rise[L])
          .normalize(),
          V.addScaledVector(D, F / z),
          L >= 1 &&
            !t.free &&
            V.y < c + 3.2 &&
            ((V.y = c + 3.2 + (V.y - c - 3.2) * 0.2),
            D.y < 0.15 && (D.y = 0.15 + Math.abs(D.y) * 0.3),
            D.normalize()),
          W.push(V.clone()));
      const A = Math.max(0.01, C * (L === 0 ? 0.42 : 0.5));
      if (
        (L === 0 && W.unshift(y.clone().add(I(0, -0.6, 0))),
        M(W, C, A, [12, 7, 5, 3, 3][L], L === 0 ? 1 : 0.25),
        W[W.length - 1],
        L >= i)
      ) {
        const q = L === 0 ? 0 : 3 + Math.floor(a() * 2);
        for (let st = 0; st < q; st++) {
          const j = W[Math.max(1, W.length - 1 - Math.floor(a() * 3))]
              .clone()
              .add(s().multiplyScalar(0.6)),
            x =
              a() < r.leaf
                ? r.leafCell
                : r.bare[Math.floor(a() * r.bare.length)];
          h(
            j,
            D,
            x,
            (r.cardSize[0] + a() * (r.cardSize[1] - r.cardSize[0])) *
              (t.cardScale ?? 1),
            0.75 + a() * 0.3,
          );
        }
        return;
      }
      const K =
        L === 0
          ? r.limbs[0] + Math.floor(a() * (r.limbs[1] - r.limbs[0] + 1))
          : r.kids[L - 1];
      let J = a() * d0;
      for (let q = 0; q < K; q++) {
        J += 2.39996 + (a() - 0.5) * 0.5;
        let st, j;
        if (L === 0) {
          j = 0.72 + 0.28 * ((q + a() * 0.6) / K);
          const g = r.elev[0] + a() * (r.elev[1] - r.elev[0]);
          st = I(
            Math.cos(J) * Math.cos(g),
            Math.sin(g),
            Math.sin(J) * Math.cos(g),
          );
        } else {
          ((j = 0.35 + 0.65 * ((q + 0.3 + a() * 0.5) / K)),
            w.crossVectors(D, s()).normalize(),
            (st = D.clone().applyAxisAngle(
              w,
              r.ang[L - 1] * (0.7 + a() * 0.6),
            )));
          const g = I(st.x, 0, st.z);
          g.lengthSq() > 1e-4 &&
            st.addScaledVector(g.normalize(), 0.25 * r.spread).normalize();
        }
        const Y =
            W[
              Math.min(
                W.length - 1,
                Math.max(1, Math.round(j * (W.length - 1))),
              )
            ],
          x =
            L === 0
              ? e.H *
                (r.limbLen[0] + a() * (r.limbLen[1] - r.limbLen[0])) *
                (1.05 - 0.2 * j)
              : F * r.ratio[L - 1] * (0.8 + a() * 0.4) * (1.15 - 0.4 * j),
          p =
            L === 0
              ? C * (0.42 + a() * 0.16)
              : Math.max(0.012, (C + (A - C) * j) * (0.62 + a() * 0.14));
        (v(Y, st, x, p, L + 1),
          L >= 2 &&
            a() < 0.35 &&
            h(
              W[Math.max(1, Math.round(j * (W.length - 1)))].clone(),
              D,
              r.bare[0],
              r.cardSize[0] * 0.8 * (t.cardScale ?? 1),
              0.6,
            ));
      }
    },
    S = I((a() - 0.5) * 0.12, 1, (a() - 0.5) * 0.12).normalize(),
    d = e.H * (r.trunk[0] + a() * (r.trunk[1] - r.trunk[0]));
  if ((v(I(e.x, c, e.z), S, d, e.r, 0), e.kind !== "young")) {
    const y = o[0],
      m = y.attributes.position,
      F = 4 + Math.floor(a() * 3),
      C = a() * d0;
    for (let L = 0; L < m.count; L++) {
      const z = m.getY(L) - c;
      if (z > 2.2) continue;
      const W = m.getX(L) - e.x,
        D = m.getZ(L) - e.z,
        V = Math.atan2(D, W),
        K =
          1 +
          Math.exp(-Math.max(0, z) / 0.55) *
            (0.35 + 0.55 * Math.pow(Math.max(0, Math.cos(F * (V - C))), 3));
      (m.setX(L, e.x + W * K), m.setZ(L, e.z + D * K));
    }
    y.computeVertexNormals();
  }
  if (e.kind !== "young" && a() < (t.ivy ?? 0.25)) {
    const y = 2 + a() * d * 0.8,
      m = a() * d0;
    for (let F = 0.3; F < y; F += 0.3 + a() * 0.25) {
      const C = m + F * 0.3 + (a() - 0.5) * 1.4,
        L = e.r * (1 + 0.5 * Math.exp(-F / 0.55)) + 0.04,
        z = I(Math.cos(C), 0.1, Math.sin(C)).normalize();
      n.push({
        pos: I(e.x + Math.cos(C) * L, c + F, e.z + Math.sin(C) * L),
        along: I(-Math.sin(C) * 0.3, 1, Math.cos(C) * 0.3).normalize(),
        size: 0.55 + a() * 0.3,
        cell: t0.ivy,
        out: z,
        shade: 0.7,
        ivy: z,
      });
    }
  }
  for (const y of n) y.out || (y.out = y.pos.clone().sub(u).normalize());
  return { bark: o, cards: n };
}
