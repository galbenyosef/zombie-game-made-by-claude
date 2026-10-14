// assets/index-Db-AsSxU 14 — math
// Lines 5083-6215 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
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
