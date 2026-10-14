// assets/index-Db-AsSxU 12 — math
// Lines 3918-4907 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
function bo() {
  const e = {
      hips: [0, 0.9, 0],
      spine: [0, 1.01, -0.01],
      chest: [0, 1.17, -0.02],
      neck: [0, 1.39, -0.035],
      head: [0, 1.505, -0.02],
      jaw: [0, 1.527, -0.004],
      headTop: [0, 1.66, -0.01],
      chin: [0, 1.44, 0.06],
      shoulderL: [0.022, 1.37, -0.028],
      upperArmL: [0.165, 1.35, -0.035],
      shoulderR: [-0.022, 1.37, -0.028],
      upperArmR: [-0.165, 1.35, -0.035],
      thighL: [0.085, 0.865, 0],
      shinL: [0.088, 0.47, 0.012],
      footL: [0.09, 0.07, -0.015],
      thighR: [-0.085, 0.865, 0],
      shinR: [-0.088, 0.47, 0.012],
      footR: [-0.09, 0.07, -0.015],
      toeL: [0.095, 0.015, 0.165],
      toeR: [-0.095, 0.015, 0.165],
      heelL: [0.09, 0.018, -0.065],
      heelR: [-0.09, 0.018, -0.065],
    },
    o = 0.29,
    n = 0.245,
    c = 0.175;
  for (const S of [1, -1]) {
    const P = z0(S),
      s0 = e["upperArm" + Re(S)];
    ((e["foreArm" + Re(S)] = G0(s0, P, o)),
      (e["hand" + Re(S)] = G0(s0, P, o + n)),
      (e["handTip" + Re(S)] = G0(s0, P, o + n + c * 0.8)));
  }
  const t = [0, 1.555, 0],
    s = { c: [0, 0.018, -0.01], r: [0.068, 0.09, 0.092] },
    i = rt({
      HC: t,
      seed: 31,
      C7: e.neck,
      cran: s,
      lowerFace: { c: [0, -0.04, 0.012], r: [0.055, 0.071, 0.07] },
      temple: [0.064, 0.02, 0.048],
      chin: [-0.113, 0.06],
      chinW: 0.014,
      jawSlope: 0.56,
      jawUnder: 0.55,
      faceZ: 0.088,
      cheek: [0.045, -0.02, 0.055],
      hollow: [0.044, -0.058, 0.046],
      hollowK: 0.02,
      brow: [0.036, 0.024, 0.077, 0.009],
      eyeX: 0.03,
      eyeY: 0,
      eyeZ: 0.063,
      eyeR: 0.0112,
      socket: [0.019, 0.015, 0.019],
      lid: 0.32,
      nose: {
        bridge: [0.012, 0.085],
        r0: 0.005,
        tip: [-0.03, 0.101],
        r1: 0.0075,
        wing: 0.0102,
      },
      mouthY: -0.066,
      mouthW: 0.021,
      mouthZ: 0.083,
      mouthGap: 0.005,
      jawHinge: [-0.034, -0.01],
      jawSideX: 0.038,
      skullBase: -0.052,
      ear: [0.066, -0.012, -0.006, 0.027, 0.017],
      neckTop: [-0.062, -0.026],
      neckR: [0.033, 0.041],
      cordR: 0.009,
      missing: [-4],
      broken: [2],
      teethScale: 0.92,
      rect: [-0.09, -0.15, 0.18, 0.24],
    }),
    r = [
      [-0.03, -0.12, 0],
      [-0.045, -0.2, 0.004],
      [-0.06, -0.16, 0],
    ].map(([S, P, s0], o0) => {
      const g0 = [S * 0.4, 0.105, 0.035 + s0],
        w0 = [S * 0.9, 0.07, 0.083],
        k0 = [S, 0.02, 0.1 + s0],
        q0 = [S - 0.003, -0.04, 0.104 + s0],
        B0 = [S - 0.006, P, 0.096 - o0 * 0.004];
      return {
        pts: [g0, w0, k0, q0, B0],
        r: [0.011, 0.012, 0.012, 0.011, 0.006],
      };
    }),
    l = (S, P, s0) => {
      const o0 = S - t[0],
        g0 = P - t[1],
        w0 = s0 - t[2];
      let k0 = b0(
        o0,
        g0,
        w0,
        s.c[0],
        s.c[1] + 0.003,
        s.c[2] - 0.002,
        s.r[0] + 0.009,
        s.r[1] + 0.008,
        s.r[2] + 0.009,
      );
      if (
        ((k0 += h(0.055, 0.025, g0) * h(0.015, 0.05, w0) * 0.05),
        (k0 += 0.003 * h(0.004, 0, Math.abs(o0)) * h(0, 0.05, w0 + 0.03)),
        g0 < 0.02)
      ) {
        const q0 = h(0, -0.3, g0),
          B0 = 0.078 + 0.058 * q0,
          P0 = 0.09 + 0.02 * q0,
          y0 = -0.012 - 0.03 * q0,
          x0 = Math.atan2(o0, w0 - y0),
          Y0 = Math.hypot(o0 / B0, (w0 - y0) / P0),
          R =
            0.004 * Math.sin(x0 * 6 + 0.7) +
            0.0025 * Math.sin(x0 * 13 + g0 * 6);
        let T = Math.abs((Y0 - 1.06) * Math.min(B0, P0)) - 0.01 - R * q0;
        const K = Math.cos(x0);
        T = f0(T, (K - 0.35) * 0.06, 0.01);
        const l0 =
          -0.3 -
          0.05 * (1 - K) * 0.5 +
          0.03 * Math.sin(x0 * 7 + 1.3) +
          0.012 * Math.sin(x0 * 19);
        ((T = f0(T, l0 - g0, 0.01)), (k0 = B(k0, T, 0.02)));
        for (const h0 of [1, -1]) {
          const C0 = _0(
            o0,
            g0,
            w0,
            h0 * 0.078,
            -0.02,
            0.006,
            0.016,
            h0 * 0.105,
            -0.24,
            0.045,
            0.011,
          );
          k0 = B(
            k0,
            f0(C0, -0.25 - g0 + 0.015 * Math.sin(o0 * 80), 0.006),
            0.012,
          );
        }
      }
      if (o0 < 0.02 && w0 > 0 && g0 > -0.25)
        for (const q0 of r) {
          const B0 = q0.pts;
          for (let P0 = 0; P0 < B0.length - 1; P0++) {
            const y0 = B0[P0],
              x0 = B0[P0 + 1],
              Y0 = (w0 - y0[2]) * 1.8 + y0[2];
            k0 = B(
              k0,
              _0(
                o0,
                g0,
                Y0,
                y0[0],
                y0[1],
                y0[2],
                q0.r[P0],
                x0[0],
                x0[1],
                x0[2],
                q0.r[P0 + 1],
              ) * 0.75,
              0.007,
            );
          }
        }
      return k0;
    },
    a = (S, P, s0, o0) => {
      const g0 = P - t[1],
        w0 = h(-0.1, -0.3, g0);
      ((o0[ye.head] += 1 - w0),
        (o0[ye.neck] += w0 * 0.55),
        (o0[ye.chest] += w0 * 0.45));
    },
    u = (S, P, s0) => {
      let o0 = b0(S, P, s0, 0, 1.2, -0.02, 0.117, 0.14, 0.084);
      ((o0 = B(o0, b0(S, P, s0, 0, 1.03, -0.002, 0.102, 0.11, 0.072), 0.05)),
        (o0 = B(o0, b0(S, P, s0, 0, 0.9, -0.006, 0.138, 0.09, 0.088), 0.05)),
        (o0 = B(
          o0,
          K0(S, P, s0, -0.148, 1.345, -0.032, 0.148, 1.345, -0.032, 0.04),
          0.06,
        )));
      for (const g0 of [-1, 1])
        ((o0 = B(
          o0,
          K0(
            S,
            P,
            s0,
            g0 * 0.025,
            1.4,
            -0.042,
            g0 * 0.14,
            1.362,
            -0.036,
            0.032,
          ),
          0.04,
        )),
          (o0 = B(
            o0,
            K0(
              S,
              P,
              s0,
              g0 * 0.02,
              1.362,
              0.036,
              g0 * 0.135,
              1.37,
              0.002,
              0.0085,
            ),
            0.01,
          )),
          (o0 = B(
            o0,
            b0(S, P, s0, g0 * 0.068, 1.26, -0.08, 0.05, 0.06, 0.02),
            0.03,
          )));
      if (s0 < -0.06)
        for (let g0 = 0; g0 < 9; g0++) {
          const w0 = 1.37 - g0 * 0.034;
          o0 = B(
            o0,
            se(S, P, s0, 0, w0, -0.098 + (1.37 - w0) * 0.02, 0.0085),
            0.008,
          );
        }
      return o0;
    },
    f = z0(1),
    d = z0(-1),
    v = e.upperArmL,
    C = e.upperArmR,
    p = e.foreArmL,
    F = e.foreArmR,
    J = e.handL,
    n0 = e.handR,
    _ = { 1: G0(v, f, 0.13), [-1]: G0(C, d, 0.13) },
    G = (S, P, s0) => {
      let o0 = u(S, P, s0) - 0.015;
      const g0 = h(0.97, 0.5, P),
        w0 = 0.16 + 0.055 * g0,
        k0 = 0.112 + 0.04 * g0;
      let q0 = (Math.hypot(S / w0, (s0 + 0.004) / k0) - 1) * Math.min(w0, k0);
      ((q0 = f0(q0, P - 1.02, 0.03)), (o0 = B(o0, q0, 0.05)));
      const B0 = Math.atan2(S, s0);
      ((o0 -=
        0.007 *
        Math.pow(0.5 + 0.5 * Math.sin(B0 * 7 + Math.sin(P * 9) * 0.8), 2) *
        g0),
        (o0 -=
          0.0025 *
          Math.pow(0.5 + 0.5 * Math.sin(B0 * 15 + P * 12), 3) *
          h(1.3, 1.15, P) *
          h(0.95, 1.05, P)));
      for (const P0 of [1, -1]) {
        const y0 = P0 > 0 ? v : C,
          x0 = _[P0];
        o0 = B(
          o0,
          _0(
            S,
            P,
            s0,
            y0[0] - P0 * 0.01,
            y0[1] + 0.008,
            y0[2],
            0.052,
            x0[0],
            x0[1],
            x0[2],
            0.058,
          ),
          0.03,
        );
      }
      return o0;
    },
    y = (S) => 0.018 + 0.05 * h(1.37, 1.22, S) * h(0.93, 1.06, S),
    E = (S, P, s0) => {
      let o0 = G(S, P, s0);
      return (
        (o0 = f0(
          o0,
          -K0(S, P, s0, 0, 1.35, 0.005, 0, 1.7, -0.02, 0.058),
          0.01,
        )),
        (o0 = f0(o0, Math.min(y(P) - Math.abs(S), -0.03 - s0), 0.004)),
        (o0 = f0(
          o0,
          0.465 + 0.012 * Math.sin(Math.atan2(S, s0) * 5 + 1) - P,
          0.005,
        )),
        o0
      );
    },
    c0 = (S, P, s0) => {
      let o0 = 1e9;
      for (const g0 of [-1, 1]) {
        const w0 = e["thigh" + Re(g0)],
          k0 = e["shin" + Re(g0)],
          q0 = e["foot" + Re(g0)];
        let B0 = _0(
          S,
          P,
          s0,
          w0[0],
          w0[1] - 0.03,
          w0[2],
          0.068,
          k0[0],
          k0[1],
          k0[2],
          0.045,
        );
        ((B0 = B(
          B0,
          _0(
            S,
            P,
            s0,
            k0[0],
            k0[1],
            k0[2],
            0.046,
            q0[0],
            q0[1] + 0.02,
            q0[2],
            0.031,
          ),
          0.02,
        )),
          (B0 = B(
            B0,
            _0(
              S,
              P,
              s0,
              k0[0],
              k0[1] - 0.07,
              k0[2] - 0.02,
              0.044,
              k0[0],
              k0[1] - 0.2,
              k0[2] - 0.012,
              0.036,
            ),
            0.03,
          )),
          (B0 = B(
            B0,
            se(S, P, s0, k0[0], k0[1] + 0.012, k0[2] + 0.034, 0.024),
            0.01,
          )),
          (o0 = Math.min(o0, B0)));
      }
      return f0(o0, P - 0.7, 0.01);
    },
    u0 = (S) => {
      const P = S > 0 ? v : C,
        s0 = S > 0 ? p : F,
        o0 = S > 0 ? J : n0,
        g0 = [P[0] - S * 0.025, P[1] + 0.01, P[2]],
        w0 = [s0[0] + S * 0.003, s0[1] - 0.003, s0[2] - 0.024];
      return (k0, q0, B0) => {
        let P0 = _0(
          k0,
          q0,
          B0,
          g0[0],
          g0[1],
          g0[2],
          0.034,
          s0[0],
          s0[1],
          s0[2],
          0.025,
        );
        return (
          (P0 = B(
            P0,
            _0(
              k0,
              q0,
              B0,
              s0[0],
              s0[1],
              s0[2],
              0.027,
              o0[0],
              o0[1],
              o0[2],
              0.018,
            ),
            0.01,
          )),
          (P0 = B(P0, se(k0, q0, B0, w0[0], w0[1], w0[2], 0.014), 0.006)),
          P0
        );
      };
    },
    q = u0(1),
    $ = u0(-1),
    x = G0(p, f, 0.035),
    e0 = G0(p, f, 0.205),
    H = (S, P, s0) => {
      let o0 = _0(
        S,
        P,
        s0,
        x[0],
        x[1],
        x[2],
        0.032,
        e0[0],
        e0[1],
        e0[2],
        0.026,
      );
      const g0 = (S - p[0]) * f[0] + (P - p[1]) * f[1],
        w0 = Math.atan2(s0 - p[2], (S - p[0]) * f[1] - (P - p[1]) * f[0]);
      return (
        (o0 -= 0.0022 * Math.pow(0.5 + 0.5 * Math.sin(g0 * 190 + w0 * 1), 2)),
        o0
      );
    },
    z = G0(p, f, 0.18);
  -f[1] * 0 - 0.766 * 0;
  const Z = [-0.766, -0.643, 0],
    p0 = [z[0] + Z[0] * 0.024, z[1] + Z[1] * 0.024, z[2] + 0.014],
    j = [
      p0,
      [
        p0[0] + f[0] * 0.03 + Z[0] * 0.02,
        p0[1] + f[1] * 0.03 + Z[1] * 0.02,
        p0[2] + 0.02,
      ],
      [
        p0[0] + f[0] * 0.1 + Z[0] * 0.035,
        p0[1] + f[1] * 0.1 + Z[1] * 0.035,
        p0[2] + 0.028,
      ],
      [
        p0[0] + f[0] * 0.2 + Z[0] * 0.03,
        p0[1] + f[1] * 0.2 + Z[1] * 0.03,
        p0[2] + 0.02,
      ],
      [
        p0[0] + f[0] * 0.3 + Z[0] * 0.015,
        p0[1] + f[1] * 0.3 + Z[1] * 0.015,
        p0[2] + 0.03,
      ],
    ],
    t0 = (S, P, s0) => {
      let o0 = 1e9;
      for (let w0 = 0; w0 < j.length - 1; w0++)
        o0 = Math.min(
          o0,
          K0(
            S,
            P,
            s0,
            j[w0][0],
            j[w0][1],
            j[w0][2],
            j[w0 + 1][0],
            j[w0 + 1][1],
            j[w0 + 1][2],
            0.0026,
          ),
        );
      const g0 = j[j.length - 1];
      return (
        (o0 = Math.min(
          o0,
          K0(
            S,
            P,
            s0,
            g0[0],
            g0[1],
            g0[2],
            g0[0] + f[0] * 0.02,
            g0[1] + f[1] * 0.02,
            g0[2],
            0.0048,
          ),
        )),
        (o0 = Math.min(
          o0,
          W0(S, P, s0, p0[0], p0[1], p0[2], 0.012, 0.012, 0.004, 0.002),
        )),
        o0
      );
    },
    A = [0, 1, 2].map((S) => Math.min(...j.map((P) => P[S])) - 0.03),
    w = [0, 1, 2].map((S) => Math.max(...j.map((P) => P[S])) + 0.03),
    Y = (S) =>
      nt({
        wrist: e["hand" + Re(S)],
        dir: z0(S),
        side: S,
        palm: [0.08, 0.07, 0.022],
        fingers: [
          [0.086, 0.0068],
          [0.094, 0.007],
          [0.088, 0.0066],
          [0.07, 0.006],
        ],
        thumb: [0.06, 0.0078],
        curl: S > 0 ? [0.3, 0.6, 0.45] : [0.7, 1, 0.7],
        bony: 1,
        seed: S > 0 ? 21 : 22,
        spread: 0.12,
      }),
    b = Y(1),
    g = Y(-1),
    N = It({
      ankle: e.footL,
      x: e.footL[0],
      len: 0.235,
      width: 0.082,
      toes: !0,
    }),
    V = It({
      ankle: e.footR,
      x: e.footR[0],
      len: 0.235,
      width: 0.082,
      toes: !0,
    }),
    O = [
      {
        name: "head",
        sdf: i.sdf,
        mat: i.mat,
        weights: i.weights,
        min: i.min,
        max: i.max,
        res: 0.0027,
      },
      {
        name: "hair",
        sdf: l,
        mat: L.HAIR,
        weights: a,
        min: [-0.16, 1.2, -0.16],
        max: [0.16, 1.69, 0.15],
        res: 0.0048,
        aoK: 0.8,
      },
      {
        name: "neck",
        sdf: i.neck.sdf,
        mat: L.SKIN,
        weights: i.weights,
        min: i.neck.min,
        max: i.neck.max,
        res: 0.0042,
      },
      {
        name: "torso",
        sdf: u,
        mat: L.SKIN,
        res: 0.0055,
        sigma: 0.025,
        min: [-0.2, 0.96, -0.14],
        max: [0.2, 1.44, 0.1],
        bones: ["hips", "spine", "chest", "neck", "shoulderL", "shoulderR"],
      },
      {
        name: "gown",
        sdf: E,
        mat: L.CLOTH_A,
        res: 0.0074,
        sigma: 0.03,
        min: [-0.34, 0.44, -0.2],
        max: [0.34, 1.45, 0.18],
        weights: (S, P, s0, o0) => i0(S, P, s0, o0),
      },
      {
        name: "legs",
        sdf: c0,
        mat: L.SKIN,
        res: 0.006,
        sigma: 0.022,
        min: [-0.2, 0.05, -0.1],
        max: [0.2, 0.72, 0.1],
        bones: ["hips", "thighL", "shinL", "footL", "thighR", "shinR", "footR"],
      },
      {
        name: "armL",
        sdf: q,
        mat: L.SKIN,
        res: 0.0042,
        sigma: 0.02,
        min: [0.1, 0.9, -0.08],
        max: [0.56, 1.4, 0.06],
        bones: ["chest", "shoulderL", "upperArmL", "foreArmL", "handL"],
      },
      {
        name: "armR",
        sdf: $,
        mat: L.SKIN,
        res: 0.0042,
        sigma: 0.02,
        min: [-0.56, 0.9, -0.08],
        max: [-0.1, 1.4, 0.06],
        bones: ["chest", "shoulderR", "upperArmR", "foreArmR", "handR"],
      },
      {
        name: "bandage",
        sdf: H,
        mat: L.CLOTH_B,
        res: 0.0035,
        min: [0.3, 1, -0.06],
        max: [0.5, 1.22, 0.06],
        bones: ["foreArmL", "handL"],
        sigma: 0.02,
      },
      {
        name: "iv",
        sdf: t0,
        mat: (S, P, s0) =>
          W0(S, P, s0, p0[0], p0[1], p0[2], 0.012, 0.012, 0.004, 0.002) < 0.0012
            ? L.SOCK
            : L.TUBE,
        min: A,
        max: w,
        res: 0.0016,
        bones: ["foreArmL"],
        sigma: 0.05,
      },
      {
        name: "handL",
        sdf: b.sdf,
        mat: (S, P, s0) => (b.nailAt(S, P, s0) ? L.NAIL : L.SKIN),
        min: b.min,
        max: b.max,
        res: 0.0026,
        bones: ["handL", "foreArmL"],
        sigma: 0.012,
      },
      {
        name: "handR",
        sdf: g.sdf,
        mat: (S, P, s0) => (g.nailAt(S, P, s0) ? L.NAIL : L.SKIN),
        min: g.min,
        max: g.max,
        res: 0.0026,
        bones: ["handR", "foreArmR"],
        sigma: 0.012,
      },
      {
        name: "footL",
        sdf: N.sdf,
        mat: L.SKIN,
        min: N.min,
        max: N.max,
        res: 0.0036,
        bones: ["footL", "shinL"],
        sigma: 0.02,
      },
      {
        name: "footR",
        sdf: V.sdf,
        mat: L.SKIN,
        min: V.min,
        max: V.max,
        res: 0.0036,
        bones: ["footR", "shinR"],
        sigma: 0.02,
      },
    ],
    i0 = (S, P, s0, o0) => {
      const g0 = h(0.98, 0.8, P),
        w0 = h(1.1, 0.95, P),
        k0 = h(1.12, 1.25, P);
      let q0 = 1 - g0;
      for (const P0 of [1, -1]) {
        const y0 = P0 > 0 ? v : C,
          x0 = P0 > 0 ? f : d,
          Y0 = (S - y0[0]) * x0[0] + (P - y0[1]) * x0[1],
          R = y0[0] + x0[0] * Y0,
          T = y0[1] + x0[1] * Y0,
          K = y0[2],
          l0 = Math.hypot(S - R, P - T, s0 - K),
          h0 = h(-0.01, 0.05, Y0) * h(0.22, 0.15, Y0) * h(0.09, 0.066, l0);
        h0 > 0 &&
          ((o0[ye["upperArm" + Re(P0)]] += h0),
          (o0[ye["shoulder" + Re(P0)]] +=
            (1 - h0) * 0.3 * h(0.08, 0.12, P0 * S)),
          (q0 *= 1 - h0));
      }
      ((o0[ye.chest] += q0 * k0 * (1 - w0)),
        (o0[ye.spine] += q0 * (1 - k0) * (1 - w0)),
        (o0[ye.hips] += q0 * w0 + g0 * 0.22));
      const B0 = h(-0.07, 0.07, S);
      ((o0[ye.thighL] += g0 * 0.78 * B0),
        (o0[ye.thighR] += g0 * 0.78 * (1 - B0)));
    };
  return {
    kind: "gown",
    height: 1.66,
    J: e,
    HC: t,
    head: i,
    parts: O,
    col: (S, P, s0, o0, g0) => {
      let w0 = 0,
        k0 = 0,
        q0 = 0,
        B0 = 0;
      const P0 = oe(S * 9, P * 9, s0 * 9, 2);
      return (
        g0 === "gown"
          ? ((k0 = 0.3 + 0.35 * P0 + 0.4 * h(0.6, 0.47, P)),
            (w0 =
              h(0.07, 0.025, Math.abs(S + 0.03 + (1.35 - P) * 0.06)) *
              h(0.95, 1.25, P) *
              h(0.02, 0.07, s0)),
            (w0 = Math.max(w0, ue(S, P, s0, 28, 0.7) * 0.95)),
            (B0 =
              h(0.03, 0.018, Math.hypot(S - 0.1, P - 0.7)) * h(0.05, 0.1, s0)))
          : g0 === "legs" || g0.startsWith("foot")
            ? ((q0 = 0.3 + 0.5 * h(0.45, 0.7, P0)),
              (B0 = 0.7),
              (k0 = 0.2 + 0.7 * h(0.2, 0.02, P)),
              (w0 =
                ue(S, P, s0, 30, 0.72) * 0.9 +
                h(0.02, 0, Math.abs(S - 0.085)) *
                  h(0.85, 0.3, P) *
                  h(0.2, 0.3, P) *
                  h(0, 0.03, s0) *
                  0.9))
            : g0 === "armL" || g0 === "armR" || g0.startsWith("hand")
              ? ((q0 = 0.3 + 0.5 * h(0.45, 0.7, P0)),
                (B0 = 0.85),
                (k0 = 0.25 + 0.3 * P0),
                (q0 = Math.max(
                  q0,
                  h(0.05, 0.02, Math.hypot(S - p[0], P - p[1])) * 0.9,
                  h(0.05, 0.02, Math.hypot(S - F[0], P - F[1])) * 0.9,
                )),
                (w0 = ue(S, P, s0, 34, 0.74) * 0.8),
                o0 === L.NAIL && ((k0 = 0.9), (w0 = 0.6)))
              : g0 === "bandage"
                ? ((k0 = 0.4 + 0.3 * P0),
                  (w0 =
                    h(0.45, 0.7, oe(S * 20, P * 20, s0 * 20, 2)) +
                    h(0.05, 0.02, Math.hypot(S - p0[0], P - p0[1])) * 0.9))
                : g0 === "torso" || g0 === "neck" || g0 === "head"
                  ? ((B0 = 0.8),
                    (q0 = 0.25 + 0.4 * h(0.5, 0.7, P0)),
                    (w0 =
                      g0 === "head"
                        ? 0
                        : h(0.66, 0.8, oe(S * 15, P * 15, s0 * 15, 2)) * 0.7),
                    (k0 = 0.15))
                  : g0 === "hair"
                    ? ((k0 = 0.2),
                      (w0 =
                        h(0.62, 0.8, oe(S * 12, P * 12, s0 * 12, 2)) *
                        0.8 *
                        h(1.45, 1.3, P)))
                    : g0 === "iv" && ((k0 = 0.3), (w0 = 0.3 * h(0.5, 0.8, P0))),
        [I0(w0), I0(k0), I0(q0), I0(B0)]
      );
    },
    segA: { hips: [0, 0.83, -0.005] },
    rad: {
      hips: 0.11,
      spine: 0.09,
      chest: 0.1,
      neck: 0.036,
      head: 0.085,
      jaw: 0.035,
      shoulderL: 0.035,
      upperArmL: 0.034,
      foreArmL: 0.028,
      handL: 0.025,
      shoulderR: 0.035,
      upperArmR: 0.034,
      foreArmR: 0.028,
      handR: 0.025,
      thighL: 0.064,
      shinL: 0.046,
      footL: 0.03,
      thighR: 0.064,
      shinR: 0.046,
      footR: 0.03,
    },
    hit: [
      ["head", [0, 1.55, 0], [0, 1.59, -0.01], 0.098, "head"],
      ["chest", [0, 1.13, -0.01], [0, 1.34, -0.025], 0.13, "body"],
      ["spine", [0, 0.87, -0.005], [0, 1.06, -0.005], 0.13, "body"],
      ["neck", e.neck, [0, 1.49, -0.02], 0.045, "body"],
      ["upperArmL", e.upperArmL, e.foreArmL, 0.045, "body"],
      ["foreArmL", e.foreArmL, e.handL, 0.04, "body"],
      ["upperArmR", e.upperArmR, e.foreArmR, 0.045, "body"],
      ["foreArmR", e.foreArmR, e.handR, 0.035, "body"],
      ["handL", e.handL, e.handTipL, 0.04, "body"],
      ["handR", e.handR, e.handTipR, 0.04, "body"],
      ["thighL", e.thighL, e.shinL, 0.075, "legs"],
      ["shinL", e.shinL, e.footL, 0.055, "legs"],
      ["thighR", e.thighR, e.shinR, 0.075, "legs"],
      ["shinR", e.shinR, e.footR, 0.055, "legs"],
      ["footL", [0.09, 0.04, -0.04], [0.095, 0.03, 0.14], 0.04, "legs"],
      ["footR", [-0.09, 0.04, -0.04], [-0.095, 0.03, 0.14], 0.04, "legs"],
    ],
    palette: {
      [L.SKIN]: {
        base: "#878c8b",
        shade: "#454b5c",
        deep: "#282b3a",
        line: "#171722",
        type: "skin",
      },
      [L.FACE]: {
        base: "#8c9290",
        shade: "#484e60",
        deep: "#2a2d3c",
        line: "#171722",
        type: "skin",
        lineW: 0.7,
      },
      [L.EYE]: {
        base: "#c8cdc6",
        shade: "#747a7b",
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
        base: "#b7ad8f",
        shade: "#5f5a4b",
        line: "#241d17",
        type: "teeth",
      },
      [L.HAIR]: {
        base: "#1b1720",
        shade: "#08070b",
        deep: "#050407",
        line: "#040305",
        type: "hair",
      },
      [L.CLOTH_A]: {
        base: "#76908b",
        shade: "#36474c",
        deep: "#1f2a2e",
        line: "#141b1e",
        type: "cloth",
        fold: 0.35,
      },
      [L.CLOTH_B]: {
        base: "#a9a088",
        shade: "#5c5747",
        deep: "#34312a",
        line: "#1f1c18",
        type: "cloth",
        fold: 0.1,
      },
      [L.SOCK]: {
        base: "#c2b9a0",
        shade: "#6b6553",
        line: "#1f1c18",
        type: "cloth",
        fold: 0,
      },
      [L.TUBE]: {
        base: "#a3b3af",
        shade: "#4d5b58",
        deep: "#2b3432",
        line: "#1a2020",
        type: "plastic",
        spec: 0.6,
      },
      [L.NAIL]: {
        base: "#5e5850",
        shade: "#2e2a27",
        line: "#171722",
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
    pattern: { [L.CLOTH_A]: [1, 26], [L.CLOTH_B]: [3, 190] },
    shade: { livorY: 0.42, livor: "#5d4b73", vein: "#39355a" },
    eyes: {
      iris: "#6a7478",
      sclera: "#cfcbb8",
      cloud: 0.85,
      gaze: [0.14, -0.1, -0.05, 0.12],
    },
    face: {
      seed: 31,
      gaunt: 1.2,
      browCol: "28,22,26",
      browW: 0.8,
      browA: 0.55,
      socketL: 1.2,
      socketR: 1.3,
      creases: 0.5,
      veins: 9,
      veinCol: "48,40,82",
      lipCol: "46,26,44",
      mouthBlood: [[2, 0.8]],
      spatter: 0.6,
      tornCorner: [-1],
      bruises: [[26, 30, 9, 6]],
    },
    style: {
      hunch: 5,
      chestHunch: 6,
      headRoll: -20,
      headPitch: 6,
      headYaw: 8,
      neckFwd: 6,
      jaw: 0.22,
      shoulderDrop: 0,
      leanR: -4,
      heldR: 82,
      armSpread: 0.05,
      elbow: 0.2,
      elbowR: 1.1,
      idleWidth: 0.07,
      idleCrouch: 0.04,
      toeIn: !0,
      twitch: 1,
      sway: 0.6,
      shamble: {
        v: 1.3,
        cadence: 2.8,
        duty: 0.58,
        lift: [0.07, 0.06],
        width: 0.075,
        crouch: 0.07,
        bob: 0.03,
        sway: 0.03,
        toeOut: 0.1,
        lean: 8,
        armSwing: 18,
        heel: 0.1,
        toeOff: 0.3,
      },
      run: {
        v: 3.2,
        cadence: 3.2,
        duty: 0.36,
        lift: [0.2, 0.2],
        width: 0.08,
        crouch: 0.12,
        bob: 0.05,
        sway: 0.03,
        lean: 32,
      },
    },
  };
}
