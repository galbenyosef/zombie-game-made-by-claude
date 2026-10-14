// assets/index-Db-AsSxU 10 — math
// Lines 3022-3916 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
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
