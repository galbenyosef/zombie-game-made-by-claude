// assets__index-Db-AsSxU 08 — math
// Lines 2133-3020 of readable/assets__index-Db-AsSxU.pretty.js (statement-aligned).
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
