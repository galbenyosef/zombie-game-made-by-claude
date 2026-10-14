// assets/index-Db-AsSxU 16 — math
// Lines 6230-7487 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
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
