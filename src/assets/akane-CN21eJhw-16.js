// assets/akane-CN21eJhw 16 — math
// Lines 5384-5702 of readable/assets/akane-CN21eJhw.pretty.js (statement-aligned).
function jo(e, t) {
  const a = [],
    o = (i) => e[Math.max(0, Math.min(e.length - 1, i))],
    r = e.length - 1;
  for (let i = 0; i <= t; i++) {
    const n = (i / t) * r,
      s = Math.min(r - 1, Math.floor(n)),
      u = n - s,
      l = o(s - 1),
      v = o(s),
      g = o(s + 1),
      m = o(s + 2),
      y = u * u,
      k = y * u;
    a.push(
      [0, 1, 2].map(
        (G) =>
          0.5 *
          (2 * v[G] +
            (-l[G] + g[G]) * u +
            (2 * l[G] - 5 * v[G] + 4 * g[G] - m[G]) * y +
            (-l[G] + 3 * v[G] - 3 * g[G] + m[G]) * k),
      ),
    );
  }
  return a;
}
const Uo = (e, t) => new e.Color().setStyle(t, e.SRGBColorSpace);
function dt(e, t) {
  if (t)
    return {
      stand: t.toon({
        base: "#2a2830",
        shade: "#0c0b10",
        deep: "#050507",
        deepT: -0.3,
        deepAmt: 0.7,
        rampT: 0.15,
        spec: 1.1,
        specT: 0.96,
        specCol: "#c9cde0",
        rim: 1.2,
        wetSpec: 1,
      }),
      chrome: t.toon({
        base: "#c9ccd8",
        shade: "#3e4152",
        deep: "#1c1d26",
        deepT: -0.2,
        deepAmt: 0.8,
        rampT: 0.45,
        spec: 1.4,
        specT: 0.9,
        rim: 1.4,
      }),
      grille: t.toon({
        base: "#9ea3b5",
        shade: "#34374a",
        rampT: 0.3,
        spec: 1.2,
        specT: 0.93,
        rim: 1.2,
      }),
      body: t.toon({
        base: "#1e1c23",
        shade: "#09080b",
        rampT: 0.1,
        spec: 0.8,
        specT: 0.97,
        rim: 1,
        wetSpec: 1,
      }),
      cable: t.toon({
        base: "#1a181e",
        shade: "#070608",
        rampT: 0.1,
        spec: 0.5,
        specT: 0.96,
        rim: 0.9,
        wetSpec: 1,
      }),
      red: t.toon({ base: "#c1121f", shade: "#6a0a13", rampT: 0, rim: 0.8 }),
      line: "#020203",
    };
  const a = (o, r, i) =>
    new e.MeshStandardMaterial({ color: Uo(e, o), roughness: r, metalness: i });
  return {
    stand: a("#1f1d24", 0.45, 0.6),
    chrome: a("#c9ccd8", 0.25, 1),
    grille: a("#8d92a3", 0.5, 1),
    body: a("#18161c", 0.4, 0.3),
    cable: a("#131116", 0.5, 0),
    red: a("#c1121f", 0.5, 0),
    line: null,
  };
}
function M0(e, t, a, o, r, i, n = 0.8) {
  let s;
  return (
    t && a.line
      ? ((s = t.withOutline(r, i, a.line, { lineW: n })),
        (s.userData.mesh.castShadow = !0))
      : ((s = new e.Mesh(r, i)), (s.castShadow = !0), (s.receiveShadow = !0)),
    o.add(s),
    s
  );
}
function Xo(e, t = {}) {
  const a = t.kit || null,
    o = dt(e, a),
    r = new e.Group();
  r.name = "micStand";
  const i = t.height ?? 1.36,
    n = !!t.boom,
    s = (t.side ?? 1) >= 0 ? 1 : -1,
    u = ((t.tilt ?? (n ? 52 : 22)) * Math.PI) / 180,
    l = t.reach ?? 0.2,
    v = (L) => {
      const O = Math.hypot(L[0], L[1], L[2]) || 1;
      return [L[0] / O, L[1] / O, L[2] / O];
    },
    g = (L, O, J) => [L[0] + O[0] * J, L[1] + O[1] * J, L[2] + O[2] * J],
    m = n
      ? v([-s * (t.skew ?? 0.34), Math.sin(u), Math.cos(u)])
      : [0, Math.sin(u), Math.cos(u)],
    y = [0, i, l],
    k = g(y, m, -0.024),
    G = g(y, m, -0.2),
    d = g(y, m, -0.13),
    w = n ? [s * (t.out ?? 0.46), 0, t.baseZ ?? 0.36] : [0, 0, 0],
    f = 0.26;
  {
    const L = n ? (s > 0 ? Math.PI / 2 : -Math.PI / 2) : Math.PI / 6;
    for (let J = 0; J < 3; J++) {
      const s0 = (J / 3) * Math.PI * 2 + L,
        $ = [w[0] + Math.sin(s0) * 0.3, 0.012, w[2] + Math.cos(s0) * 0.3],
        r0 = [w[0] + Math.sin(s0) * 0.15, f * 0.45, w[2] + Math.cos(s0) * 0.15];
      M0(
        e,
        a,
        o,
        r,
        I0(e, [[w[0], f, w[2]], r0, $], 0.0075, {
          segs: 16,
          radial: 10,
          capEnd: !0,
        }),
        o.stand,
        0.7,
      );
      const t0 = new e.SphereGeometry(0.011, 12, 8);
      (t0.scale(1, 0.6, 1),
        t0.translate($[0], 0.008, $[2]),
        M0(e, a, o, r, t0, o.body, 0.5));
    }
    const O = new e.CylinderGeometry(0.02, 0.024, 0.07, 16);
    (O.translate(w[0], f, w[2]), M0(e, a, o, r, O, o.stand, 0.8));
  }
  let C;
  if (n) {
    const L = [w[0], t.pivotH ?? i - 0.2, w[2]],
      O = Math.min(f + 0.62, L[1] - 0.18),
      J = new e.CylinderGeometry(0.0125, 0.0125, O - f, 16);
    (J.translate(w[0], (f + O) / 2, w[2]), M0(e, a, o, r, J, o.stand, 0.8));
    const s0 = new e.CylinderGeometry(0.019, 0.019, 0.045, 16);
    (s0.translate(w[0], O, w[2]), M0(e, a, o, r, s0, o.stand, 0.7));
    const $ = new e.CylinderGeometry(0.0085, 0.0085, L[1] - O, 12);
    ($.translate(w[0], (L[1] + O) / 2, w[2]), M0(e, a, o, r, $, o.chrome, 0.7));
    const r0 = new e.CylinderGeometry(0.02, 0.02, 0.04, 16);
    (r0.rotateX(Math.PI / 2),
      r0.translate(L[0], L[1], L[2]),
      M0(e, a, o, r, r0, o.stand, 0.7));
    const t0 = new e.BoxGeometry(0.008, 0.045, 0.012);
    (t0.translate(L[0] + s * 0.024, L[1], L[2]),
      M0(e, a, o, r, t0, o.chrome, 0.5));
    const V = g(d, m, -0.012),
      R = v([V[0] - L[0], V[1] - L[1], V[2] - L[2]]),
      H = g(L, R, -0.16);
    M0(
      e,
      a,
      o,
      r,
      I0(e, [H, L, V], 0.0082, {
        segs: 16,
        radial: 10,
        capEnd: !0,
        capStart: !0,
      }),
      o.stand,
      0.7,
    );
    const N = new e.CylinderGeometry(0.02, 0.02, 0.06, 14);
    N.applyMatrix4(
      new e.Matrix4().makeRotationFromQuaternion(
        new e.Quaternion().setFromUnitVectors(
          new e.Vector3(0, 1, 0),
          new e.Vector3(R[0], R[1], R[2]),
        ),
      ),
    );
    const Y = g(H, R, 0.02);
    (N.translate(Y[0], Y[1], Y[2]), M0(e, a, o, r, N, o.body, 0.6));
    const o0 = g(L, R, 0.05),
      i0 = g(V, R, -0.08);
    C = [
      G,
      [G[0] + s * 0.02, G[1] - 0.04, G[2] - 0.02],
      [i0[0], i0[1] - 0.02, i0[2]],
      [o0[0], o0[1] - 0.03, o0[2]],
      [w[0] + s * 0.02, L[1] - 0.1, w[2] - 0.02],
      [w[0] + s * 0.025, f + 0.2, w[2] - 0.025],
      [w[0] + s * 0.05, f, w[2] - 0.03],
      [w[0] + s * 0.12, 0.012, w[2] - 0.08],
      [w[0] + s * 0.2, 0.01, w[2] + 0.15],
      [w[0] + s * 0.1, 0.01, w[2] + 0.5],
      [w[0] + s * 0.4, 0.01, w[2] + 1],
      [w[0] + s * 0.9, 0.01, w[2] + 1.4],
    ];
  } else {
    const L = [0, d[1] - 0.06, 0],
      O = new e.CylinderGeometry(0.0125, 0.0125, 0.72, 16);
    (O.translate(0, f + 0.36, 0), M0(e, a, o, r, O, o.stand, 0.8));
    const J = new e.CylinderGeometry(0.019, 0.019, 0.045, 16);
    (J.translate(0, f + 0.72, 0), M0(e, a, o, r, J, o.stand, 0.7));
    const s0 = new e.CylinderGeometry(0.006, 0.006, 0.03, 8);
    (s0.rotateZ(Math.PI / 2),
      s0.translate(0.03, f + 0.72, 0),
      M0(e, a, o, r, s0, o.chrome, 0.5));
    const $ = I0(
      e,
      [
        [0, f + 0.7, 0],
        [0, L[1] - 0.02, 0],
        [0, L[1] + 0.02, 0.01],
        [d[0], d[1] - 0.012, d[2] - 0.03],
      ],
      0.0078,
      { segs: 24, radial: 10, capEnd: !0 },
    );
    (M0(e, a, o, r, $, o.chrome, 0.7),
      (C = [
        G,
        [G[0] + 0.01, G[1] - 0.06, G[2] - 0.05],
        [0.03, L[1] - 0.2, -0.02],
        [0.035, f + 0.3, -0.02],
        [0.05, f, -0.03],
        [0.12, 0.012, -0.06],
        [0.28, 0.01, -0.02],
        [0.34, 0.01, -0.22],
        [0.2, 0.01, -0.45],
        [0.35, 0.01, -0.9],
        [0.8, 0.01, -1.4],
      ]));
  }
  const x = new e.CylinderGeometry(0.017, 0.017, 0.035, 14, 1, !0);
  (x.applyMatrix4(
    new e.Matrix4().makeRotationFromQuaternion(
      new e.Quaternion().setFromUnitVectors(
        new e.Vector3(0, 1, 0),
        new e.Vector3(m[0], m[1], m[2]),
      ),
    ),
  ),
    x.translate(d[0], d[1], d[2]),
    M0(e, a, o, r, x, o.body, 0.7));
  const p = [];
  for (let L = 0; L <= 8; L++) {
    const O = L / 8;
    p.push([
      G[0] + (k[0] - G[0]) * O,
      G[1] + (k[1] - G[1]) * O,
      G[2] + (k[2] - G[2]) * O,
    ]);
  }
  M0(
    e,
    a,
    o,
    r,
    I0(e, p, (L) => 0.0125 + 0.008 * Math.pow(L, 1.6), {
      segs: 24,
      radial: 16,
      capStart: !0,
    }),
    o.body,
    0.8,
  );
  const M = new e.TorusGeometry(0.0205, 0.0022, 8, 24);
  M.lookAt(new e.Vector3(m[0], m[1], m[2]));
  const I = g(k, m, -0.014);
  (M.translate(I[0], I[1], I[2]), M0(e, a, o, r, M, o.chrome, 0.5));
  const P = new e.SphereGeometry(0.026, 24, 16);
  (P.translate(k[0], k[1], k[2]),
    M0(e, a, o, r, P, o.grille, 0.8),
    t.cable !== !1 &&
      M0(
        e,
        a,
        o,
        r,
        I0(e, C, 0.0042, { segs: 120, radial: 8, capEnd: !0 }),
        o.cable,
        0.6,
      ));
  const F = n ? g(y, m, -(t.grip ?? 0.13)) : g(d, m, -0.01);
  return {
    group: r,
    grip: F,
    axis: m,
    mouth: y,
    tail: G,
    height: i,
    boom: n,
    dispose() {
      r.traverse((L) => L.geometry && L.geometry.dispose());
    },
  };
}
