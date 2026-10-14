// assets__akane-CN21eJhw 11 — math
// Lines 3467-4064 of readable/assets__akane-CN21eJhw.pretty.js (statement-aligned).
function Lo(e, t, a, o = {}) {
  const r = [],
    i = [],
    n = (K, b, W) => (b.position.set(-W[0], -W[1], -W[2]), K.add(b), b),
    s = (K) => {
      const b = K.userData.mesh;
      return (r.push(b), i.push(b.geometry), K);
    },
    u = Co(e);
  i.push(u.tex);
  const l = t.toon({
      base: "#2a2733",
      shade: "#17151c",
      deep: "#0c0b10",
      deepT: -0.35,
      deepAmt: 0.6,
      rampT: 0.16,
      soft: 0.012,
      detail: u.tex,
      detailRect: u.rect,
      ink: "#4a4552",
      rim: 1.35,
      cloth: !0,
      sheen: 0.55,
      fold: 0.3,
      wetSpec: 0.6,
    }),
    v = t.toon({
      base: "#24212a",
      shade: "#0e0d12",
      rampT: 0.05,
      rim: 0.9,
      spec: 0,
      specT: 0.97,
      tartan: "#5e0b14",
      cloth: !0,
      sheen: 0.45,
      fold: 0,
      wetSpec: 0.6,
    }),
    g = Po(e);
  i.push(g.tex);
  const m = t.toon({
      base: "#27232d",
      shade: "#0f0d13",
      rampT: 0.1,
      spec: 0.18,
      specT: 0.95,
      specCol: "#8f86b0",
      rim: 1.1,
      detail: g.tex,
      detailRect: g.rect,
      ink: "#08070a",
      patch: "#f3dccd",
      patchShade: "#cf9f90",
      rest: !0,
      wetSpec: 0,
      wetMatte: 0.8,
    }),
    y = t.toon({
      base: "#2b2830",
      shade: "#0e0d11",
      deep: "#070609",
      deepT: -0.4,
      deepAmt: 0.6,
      rampT: 0.1,
      rim: 1.2,
      spec: 0.9,
      specT: 0.975,
      specCol: "#b8b4cc",
      wetSpec: 0,
      wetMatte: 0.45,
    }),
    k = t.toon({
      base: "#1a181e",
      shade: "#0a090c",
      rampT: 0.1,
      rim: 0.9,
      spec: 0.2,
      specT: 0.98,
    }),
    G = t.toon({ base: "#d0141f", shade: "#6a0a13", rampT: 0, rim: 0.6 }),
    d = t.toon({
      base: "#c1121f",
      shade: "#6a0a13",
      rampT: 0,
      spec: 0.2,
      specT: 0.97,
      rim: 0.8,
    }),
    w = t.toon({
      base: "#eceef6",
      shade: "#7d8199",
      deep: "#3b3d4d",
      deepT: -0.4,
      deepAmt: 0.7,
      rampT: 0.1,
      spec: 1.2,
      specT: 0.92,
      rim: 1.2,
    }),
    f = t.toon({ base: "#c1121f", shade: "#6a0a13", rampT: 0, rim: 0.8 }),
    C = t.toon({
      base: "#1d1a21",
      shade: "#0b0a0d",
      rampT: 0.1,
      spec: 0.5,
      specT: 0.97,
      rim: 1,
    }),
    x = t.toon({
      base: "#efdbcd",
      shade: "#d6ada1",
      rampT: 0.3,
      soft: 0.01,
      spec: 0,
      specT: 0.994,
      rim: 0.55,
      wetSpec: 0,
      neck: !0,
      jawY: 1.33,
      jawCol: "#b98676",
      skin: !0,
    });
  {
    const K = [],
      b = [
        [0, 1.255],
        [0.036, 1.255],
        [0.033, 1.285],
        [0.0292, 1.322],
        [0.0274, 1.358],
        [0.027, 1.4],
        [0, 1.42],
      ];
    for (const [T, z] of b) K.push(new e.Vector2(T, z));
    const W = new e.LatheGeometry(K, 48);
    W.translate(0, 0, -0.008);
    const X = t.withOutline(W, x, "#6e4452", { lineW: 0.9 });
    (n(a.neck, X, w0.neck), s(X));
    const S = new e.TorusGeometry(0.0306, 0.0034, 12, 64);
    (S.rotateX(Math.PI / 2), S.scale(1, 1.6, 1), S.translate(0, 1.316, -0.008));
    const h = t.withOutline(S, C, "#020203", { lineW: 0.7 });
    (n(a.neck, h, w0.neck), s(h));
    const A = new e.TorusGeometry(0.0052, 0.0011, 8, 24);
    A.translate(0, 1.3095, 0.0248);
    const D = t.withOutline(A, w, "#2a2c38", { lineW: 0.5 });
    n(a.neck, D, w0.neck);
  }
  {
    const K = Re(
        e,
        j0,
        [-0.26, 0.8, -0.2],
        [0.26, 1.38, 0.16],
        o.bodyRes ?? 0.0028,
      ),
      b = t.withOutline(K, l, "#040306", { lineW: 1.05 });
    (n(a.chest, b, w0.chest), s(b));
  }
  const p = [];
  for (const K of [1]) {
    const b = new e.Group();
    (n(a.chest, b, w0.chest), p.push({ s: K, grp: b, mesh: null, key: "" }));
  }
  {
    const K = new e.Shape();
    (K.moveTo(0, -0.017),
      K.bezierCurveTo(-0.006, -0.011, -0.019, -0.003, -0.018, 0.007),
      K.bezierCurveTo(-0.017, 0.016, -0.006, 0.019, 0, 0.01),
      K.bezierCurveTo(0.006, 0.019, 0.017, 0.016, 0.018, 0.007),
      K.bezierCurveTo(0.019, -0.003, 0.006, -0.011, 0, -0.017));
    const b = new e.ExtrudeGeometry(K, {
        depth: 0.002,
        bevelEnabled: !0,
        bevelThickness: 0.0012,
        bevelSize: 0.0012,
        bevelSegments: 2,
        curveSegments: 16,
      }),
      W = new e.Group(),
      X = t.withOutline(b, f, "#2a0306", { lineW: 0.7 });
    W.add(X);
    for (const S of [0.8, -0.8]) {
      const h = new e.BoxGeometry(0.03, 0.0032, 0.0016);
      (h.rotateZ(S),
        h.translate(0, 5e-4, 0.0038),
        W.add(t.withOutline(h, C, "#020203", { lineW: 0.4 })));
    }
    (W.position.set(0.075, 1.2 - w0.chest[1], 0.099),
      W.rotation.set(-0.35, 0.38, -0.12),
      a.chest.add(W),
      r.push(X.userData.mesh),
      i.push(b));
  }
  let M = null,
    I = null,
    P = null;
  {
    const W = [],
      X = [],
      S = [];
    for (let U = 0; U <= 22; U++) {
      const B = U / 22,
        _ = n0(0.9, 0.615, B),
        Q = n0(0.148, 0.232, Math.pow(B, 0.85)),
        q = n0(0.104, 0.19, Math.pow(B, 0.85)),
        j = n0(0.004, 0.017, B);
      for (let E = 0; E <= 144; E++) {
        const a0 = (E / 144) * Math.PI * 2,
          l0 = (E % 6) / 6,
          c0 =
            1 +
            ((l0 < 0.66 ? l0 / 0.66 : 1 - (l0 - 0.66) / 0.34) - 0.5) * j * 4.2;
        (W.push(Math.sin(a0) * Q * c0, _, Math.cos(a0) * q * c0 - 0.004),
          S.push(B, a0));
      }
    }
    for (let U = 0; U < 22; U++)
      for (let B = 0; B < 144; B++) {
        const _ = U * 145 + B,
          Q = _ + 1,
          q = _ + 144 + 1,
          j = q + 1;
        X.push(_, q, Q, Q, q, j);
      }
    const h = new e.BufferGeometry();
    (h.setAttribute("position", new e.Float32BufferAttribute(W, 3)),
      h.setIndex(X),
      h.computeVertexNormals(),
      (M = h),
      (I = Float32Array.from(W)),
      (P = Float32Array.from(S)),
      (v.side = e.DoubleSide));
    const A = t.withOutline(h, v, "#020203", { lineW: 1 });
    (n(a.hips, A, w0.hips), s(A));
    const D = [];
    for (let U = 0; U <= 12; U++) {
      const B = U / 12,
        _ = n0(-0.62, -1.95, B),
        Q = 0.845 - Math.sin(B * Math.PI) * 0.1,
        q = (0.9 - Q) / 0.285,
        j = n0(0.148, 0.232, Math.pow(q, 0.85)) * 1.1,
        E = n0(0.104, 0.19, Math.pow(q, 0.85)) * 1.12;
      D.push([Math.sin(_) * j, Q, Math.cos(_) * E]);
    }
    const T = I0(e, D, (U) => 0.0017 + 0.0013 * Math.abs(Math.sin(U * 140)), {
        segs: 160,
        radial: 8,
        capStart: !0,
        capEnd: !0,
      }),
      z = t.withOutline(T, w, "#23252f", { lineW: 0.45 });
    (n(a.hips, z, w0.hips), i.push(T));
  }
  const F = a.hips.parent,
    L = {};
  for (const K of [-1, 1]) {
    const b = K * 0.078,
      W = [
        [b, 0.86, 0],
        [b * 1.02, 0.7, 0.005],
        [b * 0.92, 0.47, 0.012],
        [b * 0.9, 0.3, -0.004],
        [b * 0.86, 0.12, -0.01],
        [b * 0.85, 0.075, -0.004],
      ],
      S = I0(
        e,
        W,
        (U) => {
          const B = [
            [0, 0.066],
            [0.22, 0.06],
            [0.44, 0.043],
            [0.58, 0.048],
            [0.8, 0.034],
            [1, 0.03],
          ];
          for (let _ = 1; _ < B.length; _++)
            if (U <= B[_][0]) {
              const Q = (U - B[_ - 1][0]) / (B[_][0] - B[_ - 1][0]);
              return n0(B[_ - 1][1], B[_][1], Q * Q * (3 - 2 * Q));
            }
          return 0.03;
        },
        { segs: 72, radial: 28, capEnd: !0, capStart: !0 },
      ),
      h = Float32Array.from(S.attributes.position.array),
      A = Float32Array.from(S.attributes.normal.array);
    (S.setAttribute("aRest", new e.BufferAttribute(Float32Array.from(h), 3)),
      S.setAttribute("aRestN", new e.BufferAttribute(Float32Array.from(A), 3)));
    const D = new Float32Array(h.length / 3);
    for (let U = 0; U < D.length; U++) D[U] = V0(0.505, 0.435, h[U * 3 + 1]);
    const T = t.withOutline(S, m, "#020203", { lineW: 1 });
    (F.add(T),
      s(T),
      (T.userData.mesh.frustumCulled = !1),
      T.userData.mesh.userData.hullMesh &&
        (T.userData.mesh.userData.hullMesh.frustumCulled = !1));
    const z = new e.Group();
    ((z.name = "foot" + K),
      F.add(z),
      (L[K] = { s: K, geo: S, P0: h, N0: A, W: D, foot: z, key: "" }));
  }
  const O = (K) => (b, W, X) => {
    const S = b - K * 0.069,
      h = X - 0.022;
    let A = E0(S, W, h, 0, 0.026, 0.004, 0.05, 0.026, 0.13, 0.014);
    const D = S0(
        N0(S, W, h, 0, 0.07, 0.045, 0.046, 0.04, 0.085),
        E0(S, W, h, 0, 0.1, -0.035, 0.043, 0.06, 0.052, 0.03),
        0.03,
      ),
      T = E0(S, W, h, 0, 0.16, -0.018, 0.043, 0.075, 0.046, 0.034);
    return (
      (A = S0(A, B0(S0(D, T, 0.03), -(W - 0.045), 0.01), 0.008)),
      (A = B0(A, -st(S, W, h, 0, 0.2, -0.02, 0, 0.3, -0.02, 0.033), 0.006)),
      A
    );
  };
  for (const K of [-1, 1]) {
    const b = pe(K),
      W = new e.Group();
    (W.position.set(-b[0], -b[1], -b[2]), L[K].foot.add(W));
    const X = Re(
        e,
        (U, B, _) => B0(O(K)(U, B, _), -(B - 0.052), 0.004),
        [K * 0.069 - 0.07, 0.03, -0.12],
        [K * 0.069 + 0.07, 0.25, 0.18],
        0.0028,
      ),
      S = t.withOutline(X, y, "#020203", { lineW: 1 });
    (W.add(S), s(S));
    const h = Re(
        e,
        (U, B, _) => B0(O(K)(U, B, _), B - 0.052, 0.004),
        [K * 0.069 - 0.07, -0.01, -0.13],
        [K * 0.069 + 0.07, 0.07, 0.18],
        0.0028,
      ),
      A = t.withOutline(h, k, "#020203", { lineW: 1 });
    (W.add(A), s(A));
    const D = [];
    for (let U = 0; U < 7; U++) {
      const B = 0.085 + U * 0.019,
        _ = 0.058 - Math.max(0, B - 0.12) * 0.25 - 0.012 * (U > 1 ? 1 : 0);
      D.push(
        [K * 0.069 + (U % 2 ? 0.02 : -0.02), B, _],
        [K * 0.069 + (U % 2 ? -0.02 : 0.02), B + 0.0095, _],
      );
    }
    const T = I0(
        e,
        D.map((U) => lt(O(K), U, 0.0022)),
        () => 0.0024,
        { raw: !0, radial: 6 },
      ),
      z = t.withOutline(T, G, "#2a0306", { lineW: 0.5 });
    (W.add(z), i.push(T));
  }
  const J = new e.Quaternion(),
    s0 = new e.Quaternion(),
    $ = new e.Vector3(),
    r0 = new e.Vector3(),
    t0 = new e.Quaternion();
  function V(K, b, W, X, S) {
    let h = [b[0] - K[0], b[1] - K[1], b[2] - K[2]],
      A = Math.sqrt(h[0] * h[0] + h[1] * h[1] + h[2] * h[2]);
    const D = X + S - 0.001;
    if (A > D) {
      const q = D / A;
      ((h = h.map((j) => j * q)),
        (A = D),
        (b = [K[0] + h[0], K[1] + h[1], K[2] + h[2]]));
    }
    const T = h.map((q) => q / A),
      z = (X * X - S * S + A * A) / (2 * A),
      U = Math.sqrt(Math.max(0, X * X - z * z)),
      B = W[0] * T[0] + W[1] * T[1] + W[2] * T[2];
    let _ = [W[0] - T[0] * B, W[1] - T[1] * B, W[2] - T[2] * B];
    const Q = Math.sqrt(_[0] * _[0] + _[1] * _[1] + _[2] * _[2]) || 1;
    return (
      (_ = _.map((q) => q / Q)),
      {
        K: [
          K[0] + T[0] * z + _[0] * U,
          K[1] + T[1] * z + _[1] * U,
          K[2] + T[2] * z + _[2] * U,
        ],
        A: b,
      }
    );
  }
  const R = { [-1]: 0, 1: 0 };
  function H(K, b) {
    a.hips.getWorldQuaternion(t0);
    for (const W of [-1, 1]) {
      const X = L[W],
        S = new e.Vector3(W * 0.078, 0, 0)
          .applyQuaternion(a.hips.quaternion)
          .add(a.hips.position),
        h = [S.x, S.y, S.z],
        A = b.legs[W],
        D = a.hips.rotation.y,
        T = [
          A.pole[0] * Math.cos(D) + A.pole[2] * Math.sin(D),
          A.pole[1],
          -A.pole[0] * Math.sin(D) + A.pole[2] * Math.cos(D),
        ],
        { K: z, A: U } = V(h, A.ankle, T, me.thigh, me.shin),
        B = Ao(W),
        _ = ht(W),
        Q = pe(W);
      (J.setFromUnitVectors(
        $.set(_[0] - B[0], _[1] - B[1], _[2] - B[2]).normalize(),
        r0.set(z[0] - h[0], z[1] - h[1], z[2] - h[2]).normalize(),
      ),
        s0.setFromUnitVectors(
          $.set(Q[0] - _[0], Q[1] - _[1], Q[2] - _[2]).normalize(),
          r0.set(U[0] - z[0], U[1] - z[1], U[2] - z[2]).normalize(),
        ),
        (R[W] = Math.atan2(z[2] - h[2], h[1] - z[1])));
      {
        const q = X.geo.attributes.position.array,
          j = X.geo.attributes.normal.array,
          { P0: E, N0: a0, W: l0 } = X;
        for (let e0 = 0; e0 < l0.length; e0++) {
          const c0 = l0[e0],
            d0 = e0 * 3;
          ($.set(
            E[d0] - B[0],
            E[d0 + 1] - B[1],
            E[d0 + 2] - B[2],
          ).applyQuaternion(J),
            r0
              .set(E[d0] - _[0], E[d0 + 1] - _[1], E[d0 + 2] - _[2])
              .applyQuaternion(s0),
            (q[d0] = (1 - c0) * ($.x + h[0]) + c0 * (r0.x + z[0])),
            (q[d0 + 1] = (1 - c0) * ($.y + h[1]) + c0 * (r0.y + z[1])),
            (q[d0 + 2] = (1 - c0) * ($.z + h[2]) + c0 * (r0.z + z[2])),
            $.set(a0[d0], a0[d0 + 1], a0[d0 + 2])
              .applyQuaternion(J)
              .multiplyScalar(1 - c0),
            r0
              .set(a0[d0], a0[d0 + 1], a0[d0 + 2])
              .applyQuaternion(s0)
              .multiplyScalar(c0),
            $.add(r0).normalize(),
            (j[d0] = $.x),
            (j[d0 + 1] = $.y),
            (j[d0 + 2] = $.z));
        }
        ((X.geo.attributes.position.needsUpdate = !0),
          (X.geo.attributes.normal.needsUpdate = !0),
          X.geo.computeBoundingSphere());
      }
      (X.foot.position.set(U[0], U[1], U[2]), X.foot.quaternion.copy(s0));
    }
  }
  let N = "",
    Y = null,
    o0 = !1;
  function i0(K = {}) {
    const W = Math.round(Math.max(0, R[-1]) / 0.004) * 0.004,
      X = Math.round(Math.max(0, R[1]) / 0.004) * 0.004,
      S = Math.round(Z(K.ride ?? 0) * 20) / 20,
      h = Math.round((K.rideSeat ?? 0.785) / 0.004) * 0.004,
      A = K.rideSeatW ?? 0.1,
      D = W + "," + X + "," + S + "," + h;
    if (D === N) return;
    N = D;
    const T = P.length / 2;
    if (!Y) {
      Y = new Float32Array(T * 2);
      for (let B = 0; B < T; B++) {
        const _ = P[B * 2],
          Q = P[B * 2 + 1],
          q = Math.sin(Q),
          j = V0(-0.25, 0.65, Math.cos(Q)),
          E = V0(0, 0.3, _) * 0.92 * j;
        ((Y[B * 2] = V0(-0.8, 0.8, -q) * E),
          (Y[B * 2 + 1] = V0(-0.8, 0.8, q) * E));
      }
    }
    if (S > 0) {
      ((o0 = !0), u0(W, X, S, h, A));
      return;
    }
    const z = M.attributes.position.array,
      U = 0.86;
    o0 && ((o0 = !1), z.set(I));
    for (let B = 0; B < T; B++) {
      const _ = Y[B * 2],
        Q = Y[B * 2 + 1];
      if (_ === 0 && Q === 0) continue;
      const q = W * _ + X * Q,
        j = B * 3,
        E = I[j],
        a0 = I[j + 1] - U,
        l0 = I[j + 2],
        e0 = Math.cos(q),
        c0 = Math.sin(q);
      if (
        ((z[j] = E),
        (z[j + 1] = a0 * e0 - l0 * c0 + U),
        (z[j + 2] = a0 * c0 + l0 * e0),
        q > 0.2)
      ) {
        const d0 = V0(0.2, 1.4, q) * 0.08 * P[B * 2];
        z[j] *= 1 + d0;
      }
    }
    ((M.attributes.position.needsUpdate = !0),
      Ct(M),
      M.computeBoundingSphere());
  }
  function u0(K, b, W, X, S) {
    const h = P.length / 2,
      A = M.attributes.position.array,
      D = 0.86;
    for (let T = 0; T < h; T++) {
      const z = Y ? Y[T * 2] : 0,
        U = Y ? Y[T * 2 + 1] : 0,
        B = T * 3;
      let _ = I[B],
        Q = I[B + 1],
        q = I[B + 2];
      const j = K * z + b * U;
      if (j !== 0) {
        const l0 = Math.cos(j),
          e0 = Math.sin(j),
          c0 = Q - D,
          d0 = c0 * l0 - q * e0 + D,
          x0 = c0 * e0 + q * l0;
        ((Q = d0),
          (q = x0),
          j > 0.2 && (_ *= 1 + V0(0.2, 1.4, j) * 0.08 * P[T * 2]));
      }
      const E = V0(S + 0.03, S - 0.01, Math.abs(_)) * V0(0.06, -0.02, q) * W,
        a0 = X + 0.006 - Q;
      (E > 0 &&
        a0 > 0 &&
        ((Q += a0 * E),
        (q -= a0 * 0.75 * E * V0(0.02, -0.06, q)),
        (_ *= 1 + a0 * 0.9 * E)),
        (A[B] = _),
        (A[B + 1] = Q),
        (A[B + 2] = q));
    }
    ((M.attributes.position.needsUpdate = !0),
      Ct(M),
      M.computeBoundingSphere());
  }
  function f0(K, b, W) {
    W && (H(K, W), i0(K));
    const X = K.hairSwing || [0, 0];
    for (const S of p) {
      const h = S.s * 0.03,
        A = 1.262,
        D = 0.085,
        T = +(X[0] * 0.012).toFixed(5),
        z = +(Math.abs(X[1]) * 0.006).toFixed(5),
        U = T + "," + z;
      if (U === S.key && S.mesh) continue;
      ((S.key = U),
        S.mesh &&
          (S.grp.remove(S.mesh), S.mesh.userData.mesh.geometry.dispose()));
      const B = S.s < 0 ? 0.13 : 0.115,
        _ = [
          [h, A, D - 0.01],
          [h + S.s * 0.004, A - 0.02, D + 0.012],
          [h + S.s * 0.006 + T * 0.4, A - B * 0.5, D + 0.018 + z],
          [h + S.s * 0.004 + T, A - B, D + 0.02 + z],
        ],
        Q = ut(_, 24).map((E) => lt(j0, E, 0.004)),
        q = I0(e, Q, (E) => (E > 0.88 ? 0.0036 : 0.0024), {
          raw: !0,
          radial: 8,
          capEnd: !0,
        }),
        j = t.withOutline(q, d, "#2a0306", { lineW: 0.55 });
      (S.grp.add(j), (S.mesh = j));
    }
  }
  return {
    casters: r,
    setPose: f0,
    legs: L,
    neckMat: x,
    cordMeshes: () =>
      p.map((K) => K.mesh && K.mesh.userData.mesh).filter(Boolean),
    dispose() {
      for (const K of i) K.dispose();
      for (const K of p) K.mesh && K.mesh.userData.mesh.geometry.dispose();
    },
  };
}
