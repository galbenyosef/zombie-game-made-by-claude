// assets__akane-CN21eJhw 13 — math
// Lines 4411-4785 of readable/assets__akane-CN21eJhw.pretty.js (statement-aligned).
function No(e, t, a = {}) {
  const o = new e.Group();
  o.name = "hair";
  const r = To(),
    i = 36,
    n = 12,
    s = Array.from({ length: n }, (S, h) => Math.cos((h / n) * Math.PI * 2)),
    u = Array.from({ length: n }, (S, h) => Math.sin((h / n) * Math.PI * 2)),
    l = t.hair({});
  ((l.stencilWrite = !0),
    (l.stencilRef = 1),
    (l.stencilFunc = e.AlwaysStencilFunc),
    (l.stencilZPass = e.ReplaceStencilOp));
  const v = "#050407",
    g = (i + 1) * n,
    m = r.length * g,
    y = new Float32Array(m * 3),
    k = new Float32Array(m * 3),
    G = new Float32Array(m * 3),
    d = new Float32Array(m * 3),
    w = new Float32Array(m * 4),
    f = new Float32Array(m * 2),
    C = [];
  r.forEach((S, h) => {
    const A = h * g;
    for (let D = 0; D < i; D++)
      for (let T = 0; T < n; T++) {
        const z = A + D * n + T,
          U = A + D * n + ((T + 1) % n),
          B = A + (D + 1) * n + T,
          _ = A + (D + 1) * n + ((T + 1) % n);
        C.push(z, B, U, U, B, _);
      }
  });
  const x = new e.BufferGeometry();
  (x.setAttribute("position", new e.BufferAttribute(y, 3)),
    x.setAttribute("normal", new e.BufferAttribute(k, 3)),
    x.setAttribute("aOutN", new e.BufferAttribute(G, 3)),
    x.setAttribute("aTan", new e.BufferAttribute(d, 3)),
    x.setAttribute("aHair", new e.BufferAttribute(w, 4)),
    x.setAttribute("aCol", new e.BufferAttribute(f, 2)),
    r.forEach((S) => {
      for (let h = S.id * g; h < (S.id + 1) * g; h++)
        ((f[h * 2] = S.col), (f[h * 2 + 1] = S.tip));
    }),
    x.setIndex(C));
  const p = t.withOutline(x, l, v, { lineW: 0.9 }),
    M = p.userData.mesh;
  ((M.onBeforeRender = () => {
    o0 = !1;
  }),
    (M.renderOrder = 5),
    M.userData.hullMesh && (M.userData.hullMesh.renderOrder = 5),
    o.add(p));
  const P = ze(
      (S, h, A) => {
        let D = N0(
          S,
          h,
          A,
          de[0],
          de[1] + 0.002,
          de[2] - 0.002,
          fe[0] + 0.0085,
          fe[1] + 0.009,
          fe[2] + 0.0095,
        );
        D = S0(D, N0(S, h, A, 0, -0.035, -0.04, 0.066, 0.062, 0.056), 0.02);
        let T = N0(S, h, A, 0, -0.02, -0.022, 0.084, 0.1, 0.082);
        ((T = B0(T, -(h + 0.108), 0.01)),
          (T = B0(T, A - 0 + (h + 0.02) * 0.1, 0.02)),
          (D = S0(D, T, 0.015)));
        const z = Math.abs(((S * 70 + 100.5) % 1) - 0.5) * 2,
          U = Math.max(-(A - 0.012), h - (0.036 + 0.014 * z));
        D = B0(D, -U, 0.012);
        const B = Math.max(-(A + 0.035), h + 0.02);
        return ((D = B0(D, -B, 0.012)), D);
      },
      [-0.1, -0.12, -0.12],
      [0.1, 0.13, 0.1],
      0.002,
      { smooth: 1, project: 2 },
    ),
    F = new e.BufferGeometry();
  (F.setAttribute("position", new e.BufferAttribute(P.positions, 3)),
    F.setAttribute("normal", new e.BufferAttribute(P.normals, 3)),
    F.setAttribute("aOutN", new e.BufferAttribute(P.normals, 3)));
  {
    const S = P.positions.length / 3,
      h = new Float32Array(S * 3),
      A = new Float32Array(S * 4),
      D = [0, 0.115, -0.03];
    for (let z = 0; z < S; z++) {
      const U = [
          P.positions[z * 3],
          P.positions[z * 3 + 1],
          P.positions[z * 3 + 2],
        ],
        B = [P.normals[z * 3], P.normals[z * 3 + 1], P.normals[z * 3 + 2]];
      let _ = Ce(U, D);
      ((_ = he(Ce(_, ie(B, Je(_, B))))),
        h.set(_, z * 3),
        A.set(
          [
            0.25,
            Math.sin(U[0] * 300 + U[2] * 200),
            X0(Math.round(U[0] * 400), Math.round(U[2] * 400)),
            0.45,
          ],
          z * 4,
        ));
    }
    (F.setAttribute("aTan", new e.BufferAttribute(h, 3)),
      F.setAttribute("aHair", new e.BufferAttribute(A, 4)));
    const T = new Float32Array(S * 2);
    for (let z = 0; z < S; z++)
      T[z * 2] =
        P.positions[z * 3 + 1] < -0.045 && P.positions[z * 3 + 2] < 0 ? 1 : 0;
    F.setAttribute("aCol", new e.BufferAttribute(T, 2));
  }
  F.setIndex(new e.BufferAttribute(P.indices, 1));
  const L = t.withOutline(F, l, v, { lineW: 0.9 });
  ((L.userData.mesh.renderOrder = 5), o.add(L));
  const O = t.toon({
      base: "#e9ebf3",
      shade: "#7d8199",
      rampT: 0.1,
      spec: 1.2,
      specT: 0.92,
      rim: 1.2,
    }),
    J = new e.Group();
  {
    const A = I0(
        e,
        [
          [0, 0, 0],
          [0.034, 0, 0],
        ],
        0.0011,
        { segs: 2, radial: 8, raw: !0 },
      ),
      D = I0(
        e,
        [
          [0.004, 0.0045, 0],
          [0.034 - 0.002, 0.0038, 0],
        ],
        0.0011,
        { segs: 2, radial: 8, raw: !0 },
      ),
      T = new e.TorusGeometry(0.0028, 0.0011, 8, 16);
    T.translate(0, 0.0023, 0);
    const z = new e.BoxGeometry(0.0075, 0.0068, 0.0032);
    z.translate(0.034 + 0.001, 0.0022, 0);
    for (const U of [A, D, T, z])
      J.add(t.withOutline(U, O, "#2a2c38", { lineW: 0.5 }));
  }
  const s0 = h0(58, 36, 0.016);
  (J.position.set(...s0),
    J.lookAt(s0[0] * 3, s0[1] * 3 - 0.05, s0[2] * 3),
    J.rotateZ(1.15),
    o.add(J));
  const $ = new e.Quaternion(),
    r0 = new e.Vector3(),
    t0 = new e.Matrix4(),
    V = ["position", "normal", "aOutN", "aTan", "aHair"];
  let R = "",
    H = null,
    N = 0,
    Y = 0,
    o0 = !1;
  function i0(S, h) {
    x.attributes.position.updateRanges.length > 8 && (o0 = !0);
    const A =
      S + h <= r.length
        ? [[S, h]]
        : [
            [S, r.length - S],
            [0, S + h - r.length],
          ];
    for (const D of V) {
      const T = x.attributes[D];
      if (o0) T.clearUpdateRanges();
      else
        for (const [z, U] of A)
          T.addUpdateRange(z * g * T.itemSize, U * g * T.itemSize);
      T.needsUpdate = !0;
    }
  }
  function u0(S, h, A) {
    const D = Z(S.wet);
    (A.head.getWorldQuaternion($).invert(),
      r0.set(0, -1, 0).applyQuaternion($));
    const T = [r0.x, r0.y, r0.z],
      z = S.hairSwing || [0, 0],
      U = S.wind || [0, 0],
      B = new e.Vector3(
        z[0] * 0.035 + U[0] * 0.03,
        -z[1] * 0.03 - U[1] * 0.02,
        0,
      );
    (S.windW && ((B.x += S.windW[0]), (B.y += S.windW[1]), (B.z += S.windW[2])),
      B.applyQuaternion($));
    const _ = T.map((e0) => +e0.toFixed(2)),
      Q = B.toArray().map((e0) => +e0.toFixed(3)),
      q = +D.toFixed(2);
    let j = null;
    if ((S.ride ?? 0) > 0.5) {
      t0.copy(A.chest.matrixWorld).invert().multiply(A.head.matrixWorld);
      const e0 = t0.elements;
      j = [
        e0[0],
        e0[1],
        e0[2],
        e0[4],
        e0[5],
        e0[6],
        e0[8],
        e0[9],
        e0[10],
        e0[12],
        e0[13] + w0.chest[1],
        e0[14],
      ].map((c0, d0) => +c0.toFixed(d0 < 9 ? 2 : 3));
    }
    const E = JSON.stringify([_, Q, q, j]);
    if (E !== R) {
      if (
        ((R = E),
        (H = { gDelta: [_[0], _[1] + 1, _[2]], sR: Q, wR: q, hb: null }),
        j)
      ) {
        const e0 = new e.Matrix4().set(
          j[0],
          j[3],
          j[6],
          j[9],
          j[1],
          j[4],
          j[7],
          j[10],
          j[2],
          j[5],
          j[8],
          j[11],
          0,
          0,
          0,
          1,
        );
        H.hb = { mHR: e0, mRH: e0.clone().invert() };
      }
      N = r.length;
    }
    if (!N) return;
    const a0 = S.hairBudget > 0 ? Math.min(N, Math.ceil(S.hairBudget)) : N;
    if (a0 >= r.length) {
      for (const e0 of r) b(e0, H.gDelta, H.sR, H.wR, H.hb);
      for (const e0 of V)
        (x.attributes[e0].clearUpdateRanges(),
          (x.attributes[e0].needsUpdate = !0));
      ((N = 0), (Y = 0), x.computeBoundingSphere());
      return;
    }
    const l0 = Y;
    for (let e0 = 0; e0 < a0; e0++)
      (b(r[Y], H.gDelta, H.sR, H.wR, H.hb), (Y = (Y + 1) % r.length));
    ((N -= a0), i0(l0, a0), N || x.computeBoundingSphere());
  }
  const f0 = new e.Vector3();
  function K(S, h) {
    f0.set(S[0], S[1], S[2]).applyMatrix4(h.mHR);
    const A = [f0.x, f0.y, f0.z],
      D = lt(j0, A, 0.008);
    return D === A
      ? S
      : (f0.set(D[0], D[1], D[2]).applyMatrix4(h.mRH), [f0.x, f0.y, f0.z]);
  }
  function b(S, h, A, D, T = null) {
    const z = S.pts.length,
      U = S.pts.map((j, E) => {
        const a0 = E / (z - 1),
          l0 = S.hang * a0 * a0,
          e0 = 0.12 * l0;
        let c0 = De(j, ie(h, e0 * 0.9));
        return (
          (c0 = De(c0, ie(A, l0 * (1 + S.rnd * 0.4)))),
          D > 0 && (c0 = De(c0, [0, -D * 0.012 * l0, 0])),
          E === 0 ? j : c0
        );
      });
    let B = zo(U, i);
    ((B = B.map((j, E) => (E < 2 ? j : _o(j, 0.0035 + S.layer * -0.001)))),
      T && (B = B.map((j, E) => (E < 6 ? j : K(j, T)))),
      (S.tipNow = B[i]));
    const _ = S.id * g,
      Q = 1 - D * 0.38;
    let q = null;
    for (let j = 0; j <= i; j++) {
      const E = j / i,
        a0 = B[j],
        l0 = he(Ce(B[Math.min(i, j + 1)], B[Math.max(0, j - 1)]));
      let e0 = Wt(a0);
      e0 = he(Ce(e0, ie(l0, Je(e0, l0))));
      let c0 = he(At(l0, e0));
      (q && Je(c0, q) < 0 && (c0 = ie(c0, -1)), (q = c0), (e0 = At(c0, l0)));
      const d0 =
          Math.pow(Math.max(0, 1 - Math.pow(E, S.tipPow)), 0.7) *
          (1 + S.bulge * Math.sin(Math.PI * Math.min(1, E * 1.4))),
        x0 = S.w * d0 * Q * (1 - D * 0.25 * E),
        P0 =
          S.th *
          Math.pow(Math.max(0, 1 - Math.pow(E, 2.2)), 0.6) *
          (1 - D * 0.25),
        A0 = Wt(a0),
        z0 = 1 / Math.max(x0 * 0.5, 1e-4),
        _0 = 1 / Math.max(P0 * 0.5, 1e-4);
      for (let G0 = 0; G0 < n; G0++) {
        const p0 = s[G0],
          v0 = u[G0],
          m0 = v0 > 0 ? v0 : v0 * 0.45,
          g0 = _ + j * n + G0,
          D0 = p0 * x0 * 0.5,
          T0 = m0 * P0 * 0.5;
        ((y[g0 * 3] = a0[0] + c0[0] * D0 + e0[0] * T0),
          (y[g0 * 3 + 1] = a0[1] + c0[1] * D0 + e0[1] * T0),
          (y[g0 * 3 + 2] = a0[2] + c0[2] * D0 + e0[2] * T0));
        const K0 = p0 * z0,
          ae = (v0 > 0 ? v0 : v0 / 0.45) * _0;
        let Z0 = c0[0] * K0 + e0[0] * ae,
          $0 = c0[1] * K0 + e0[1] * ae,
          ge = c0[2] * K0 + e0[2] * ae,
          Ne = Math.sqrt(Z0 * Z0 + $0 * $0 + ge * ge) || 1;
        ((Z0 /= Ne),
          ($0 /= Ne),
          (ge /= Ne),
          (G[g0 * 3] = Z0),
          (G[g0 * 3 + 1] = $0),
          (G[g0 * 3 + 2] = ge));
        const Oe = 0.55 + (v0 > 0 ? 0.15 : -0.6);
        let Fe = A0[0] * Oe + Z0 * 0.45,
          Ke = A0[1] * Oe + $0 * 0.45,
          Ve = A0[2] * Oe + ge * 0.45;
        const je = Math.sqrt(Fe * Fe + Ke * Ke + Ve * Ve) || 1;
        ((k[g0 * 3] = Fe / je),
          (k[g0 * 3 + 1] = Ke / je),
          (k[g0 * 3 + 2] = Ve / je),
          (d[g0 * 3] = l0[0]),
          (d[g0 * 3 + 1] = l0[1]),
          (d[g0 * 3 + 2] = l0[2]),
          (w[g0 * 4] = E),
          (w[g0 * 4 + 1] = p0),
          (w[g0 * 4 + 2] = S.rnd),
          (w[g0 * 4 + 3] = S.layer + (v0 > 0 ? 0 : 0.35)));
      }
    }
  }
  const W = r.filter((S) => S.hang >= 0.75).map((S) => S.id),
    X = () => W.map((S) => r[S].tipNow).filter(Boolean);
  return {
    group: o,
    casters: [M, L.userData.mesh],
    setPose: u0,
    tips: X,
    stats: () => ({
      clumps: r.length,
      verts: m,
      capVerts: P.positions.length / 3,
    }),
    dispose() {
      (x.dispose(), F.dispose());
    },
  };
}
