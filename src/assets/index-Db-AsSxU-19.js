// assets/index-Db-AsSxU 19 — math
// Lines 7948-9151 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
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
