// assets__index-Db-AsSxU 18 — math
// Lines 7500-7947 of readable/assets__index-Db-AsSxU.pretty.js (statement-aligned).
function Lo(e) {
  const o = e.HC,
    n = e.cran,
    c = e.lowerFace,
    t = e.mouthY,
    s = e.mouthW,
    i = e.mouthZ,
    r = e.jawHinge,
    l = e.chin,
    a = ot(e.seed ?? 3),
    u = [];
  for (const q of [1, -1])
    for (let $ = 0; $ < 8; $++) {
      const x = (($ + 0.5) / 8) * 2 - 1,
        e0 = x * s * 0.8,
        H = Math.abs(x) < 0.3 ? 0.0033 : 0.0028,
        z = (q > 0 ? 0.0066 : 0.0056) * (0.9 + a() * 0.2);
      u.push({
        x: e0,
        y: (q > 0 ? t + 5e-4 : t - 5e-4) + q * z * 0.5,
        z: i - 0.0068 - e0 * e0 * 13,
        w: H,
        h: z * 0.5,
        row: q,
        tilt: (a() - 0.5) * 0.15,
      });
    }
  const f = (q, $, x) => {
      let e0 = 1e9;
      for (const H of u) {
        if (Math.abs(q - H.x) > 0.012 || Math.abs($ - H.y) > 0.012) continue;
        const z = q - H.x,
          Z = $ - H.y;
        e0 = Math.min(
          e0,
          W0(z + Z * H.tilt, Z, x, 0, 0, H.z, H.w * 0.5, H.h, 0.0022, 0.0012),
        );
      }
      return e0;
    },
    d = (q, $, x) => {
      let e0 = W0(q, $, x, 0, t, i - 0.006, s * 0.97, 65e-5, 0.02, 6e-4);
      return B(
        e0,
        b0(q, $, x, 0, t - 0.003, i - 0.031, s * 0.95, 0.0115, 0.022),
        0.006,
      );
    };
  function v(q, $, x) {
    const e0 = Math.abs(q);
    let H = b0(q, $, x, n.c[0], n.c[1], n.c[2], n.r[0], n.r[1], n.r[2]);
    ((H = B(
      H,
      b0(q, $, x, c.c[0], c.c[1], c.c[2], c.r[0], c.r[1], c.r[2]),
      0.03,
    )),
      (H = B(
        H,
        b0(q, $, x, 0, -0.098, 0.018, e.jawR[0], e.jawR[1], e.jawR[2]),
        0.03,
      )));
    for (const z of [-1, 1])
      H = f0(
        H,
        -b0(
          q,
          $,
          x,
          z * e.temple[0],
          e.temple[1],
          e.temple[2],
          0.011,
          0.028,
          0.026,
        ),
        0.022,
      );
    if (
      ((H = f0(H, (e0 - e.chinW - ($ - l[0]) * e.jawSlope) * 0.8, 0.022)),
      (H = f0(H, (-($ - l[0]) + (l[1] - 0.04 - x) * e.jawUnder) * 0.85, 0.018)),
      (H = f0(H, x - e.faceZ, 0.03)),
      x > -0.01)
    ) {
      H = B(
        H,
        b0(q, $, x, 0, l[0] + 0.015, e.chinZ, 0.016, 0.012, 0.011),
        0.014,
      );
      for (const z of [-1, 1])
        ((H = B(
          H,
          b0(
            q,
            $,
            x,
            z * e.cheek[0],
            e.cheek[1],
            e.cheek[2],
            0.017,
            0.0095,
            0.016,
          ),
          0.02,
        )),
          (H = f0(
            H,
            -b0(
              q,
              $,
              x,
              z * e.hollow[0],
              e.hollow[1],
              e.hollow[2],
              0.015,
              0.022,
              0.02,
            ),
            0.03,
          )));
      if ($ > C() - 0.045 && x > 0.02) {
        H = B(
          H,
          K0(
            q,
            $,
            x,
            -e.brow[0],
            e.brow[1],
            e.brow[2],
            e.brow[0],
            e.brow[1],
            e.brow[2],
            e.brow[3],
          ),
          0.018,
        );
        for (const z of [-1, 1]) {
          const Z = z * Ve,
            p0 = q - Z;
          if (
            ((H = f0(
              H,
              -b0(
                q,
                $,
                x,
                Z,
                re + 0.002,
                Ae + 0.017,
                e.socket[0],
                e.socket[1],
                e.socket[2],
              ),
              0.0075,
            )),
            Math.abs(p0) < 0.03 && Math.abs($ - re) < 0.03)
          ) {
            let j = se(q, $, x, Z, re, Ae, je + 0.0023);
            ((j = f0(j, -($ - (re + je * v1 - Math.abs(p0) * 0.14)), 0.0016)),
              (j = f0(j, Ae - 0.004 - x, 0.002)),
              (H = B(H, j, 0.0034)));
            let t0 = se(q, $, x, Z, re, Ae, je + 0.0021);
            ((t0 = f0(t0, $ - (re + je * Mo + p0 * p0 * 26), 0.0014)),
              (t0 = f0(t0, Ae - 0.003 - x, 0.002)),
              (H = B(H, t0, 0.003)),
              (H = B(
                H,
                b0(
                  q,
                  $,
                  x,
                  Z + z * 0.003,
                  re - 0.0175,
                  Ae + 0.0042,
                  0.012,
                  0.005,
                  0.0072,
                ),
                0.005,
              )));
          }
        }
      }
      if (e0 < 0.05 && x > 0.035) {
        const z = e.nose;
        ((H = B(
          H,
          _0(
            q,
            $,
            x,
            0,
            z.bridge[0],
            z.bridge[1],
            z.r0,
            0,
            z.tip[0],
            z.tip[1],
            z.r1,
          ),
          0.011,
        )),
          (H = B(
            H,
            se(
              q,
              $,
              x,
              0,
              (z.bridge[0] + z.tip[0]) * 0.5 + 0.004,
              (z.bridge[1] + z.tip[1]) * 0.5 + 0.0045,
              z.r0 * 0.9,
            ),
            0.008,
          )));
        for (const Z of [-1, 1])
          H = B(
            H,
            b0(
              q,
              $,
              x,
              Z * z.wing * 0.92,
              z.tip[0] - 0.0035,
              z.tip[1] - 0.0135,
              0.0068,
              0.0054,
              0.0068,
            ),
            0.007,
          );
        for (const Z of [-1, 1])
          H = f0(
            H,
            -b0(
              q,
              $,
              x,
              Z * z.wing * 0.55,
              z.tip[0] - 0.0085,
              z.tip[1] - 0.006,
              0.0034,
              0.002,
              0.004,
            ),
            0.002,
          );
        if ($ < -0.03 && $ > -0.12)
          for (const Z of [-1, 1])
            H = f0(
              H,
              -K0(
                q,
                $,
                x,
                Z * 0.018,
                -0.046,
                e.foldZ[0],
                Z * 0.031,
                -0.1,
                e.foldZ[1],
                0.0011,
              ),
              0.0045,
            );
        $ < t + 0.025 &&
          $ > t - 0.03 &&
          ((H = B(
            H,
            b0(q, $, x, 0, t + 0.0038, i + 5e-4, s * 1.02, 0.0042, 0.0066),
            0.005,
          )),
          (H = B(
            H,
            b0(q, $, x, 0, t - 0.0044, i - 0.0012, s * 0.94, 0.005, 0.0068),
            0.005,
          )));
      }
    }
    if (e0 > 0.045 && x < 0.035)
      for (const z of [-1, 1]) {
        const Z = e.ear;
        let p0 = b0(q, $, x, z * Z[0], Z[1], Z[2], 0.0105, Z[3], Z[4]);
        ((p0 = f0(
          p0,
          -b0(
            q,
            $,
            x,
            z * (Z[0] + 0.007),
            Z[1] - 0.004,
            Z[2] + 0.003,
            0.006,
            Z[3] * 0.5,
            Z[4] * 0.5,
          ),
          0.003,
        )),
          (p0 = B(
            p0,
            b0(
              q,
              $,
              x,
              z * (Z[0] + 0.001),
              Z[1] - Z[3] * 0.72,
              Z[2] + 0.004,
              0.006,
              0.009,
              0.008,
            ),
            0.004,
          )),
          (H = B(H, p0, 0.006)));
      }
    if (
      (e0 < s + 0.03 &&
        Math.abs($ - t) < 0.04 &&
        x > 0 &&
        ((H = f0(H, -d(q, $, x), 0.0025)), (H = Math.min(H, f(q, $, x)))),
      x > 0.03 && Math.abs($ - re) < 0.03)
    )
      for (const z of [-1, 1]) H = Math.min(H, se(q, $, x, z * Ve, re, Ae, je));
    return H;
  }
  function C() {
    return re;
  }
  const p = [e.C7[0] - o[0], e.C7[1] - o[1], e.C7[2] - o[2]],
    F = (q, $, x) => {
      let e0 = _0(
        q,
        $,
        x,
        0,
        e.neckTop[0],
        e.neckTop[1],
        e.neckR[0],
        p[0],
        p[1] - 0.03,
        p[2] + 0.01,
        e.neckR[1],
      );
      for (const H of [-1, 1])
        e0 = B(
          e0,
          K0(
            q,
            $,
            x,
            H * 0.048,
            -0.05,
            -0.012,
            H * 0.015,
            p[1] - 0.005,
            p[2] + 0.06,
            e.cordR,
          ),
          0.014,
        );
      return B(
        e0,
        b0(q, $, x, 0, e.adam[0], e.adam[1], 0.01, 0.013, 0.011),
        0.01,
      );
    },
    J = (q, $, x) => v(q - o[0], $ - o[1], x - o[2]),
    n0 = (q, $, x) => {
      const e0 = q - o[0],
        H = $ - o[1],
        z = x - o[2];
      for (const p0 of [-1, 1])
        if (se(e0, H, z, p0 * Ve, re, Ae, je) < 5e-4) return L.EYE;
      if (f(e0, H, z) < 0.0012) return L.TEETH;
      const Z = d(e0, H, z);
      return Z > -0.0035 && Z < (z < i - 0.012 ? 0.003 : 9e-4) && z < i - 0.004
        ? L.MOUTH
        : L.FACE;
    },
    _ = (q, $, x, e0) => {
      const H = q - o[0],
        z = $ - o[1],
        Z = x - o[2],
        p0 = T0(0.0016, 0.012, h(s - 0.004, s + 0.012, Math.abs(H))),
        j = h(t + 3e-4, t - p0, z),
        t0 = h(r[1] - 0.03, r[1], Z),
        A = h(r[0] + 0.004, r[0] - 0.02, z) * h(r[1] - 0.02, r[1] + 0.005, Z);
      let w = I0(
        Math.max(j * t0, A * h(e.jawSideX, e.jawSideX + 0.03, Math.abs(H))),
      );
      f(H, z, Z) < 0.002 &&
        (w = u.some(
          (i0) =>
            i0.row < 0 &&
            Math.abs(H - i0.x) < 0.006 &&
            Math.abs(z - i0.y) < 0.008,
        )
          ? 1
          : 0);
      const Y = -(z - l[0]) + (l[1] - 0.04 - Z) * e.jawUnder,
        b = h(e.skullBase + 0.02, e.skullBase - 0.035, z),
        g = h(-0.012, 0.04, Y),
        N = h(r[1] - 0.03, r[1] + 0.02, Z),
        V = I0(T0(Math.max(b, g), g, N)),
        O = h(p[1] + 0.035, p[1] - 0.01, z);
      ((e0[d0.head] += (1 - w) * (1 - V)),
        (e0[d0.jaw] += w * (1 - V)),
        (e0[d0.neck] += V * (1 - O)),
        (e0[d0.chest] += V * O));
    },
    G = {
      eyeL: [Ve * 1e3, re * 1e3],
      eyeR: [-Ve * 1e3, re * 1e3],
      eyeRad: je * 1e3,
      mouthY: t * 1e3,
      mouthW: s * 1e3,
      noseTip: e.nose.tip[0] * 1e3,
      chinY: l[0] * 1e3,
      browY: e.brow[1] * 1e3,
    },
    y = [o[0] - 0.105, o[1] + l[0] - 0.03, o[2] - 0.13],
    E = [o[0] + 0.105, o[1] + n.c[1] + n.r[1] + 0.006, o[2] + 0.14],
    c0 = {
      L: [o[0] + Ve, o[1] + re, o[2] + Ae],
      R: [o[0] - Ve, o[1] + re, o[2] + Ae],
      r: je,
    },
    u0 = {
      sdf: (q, $, x) => F(q - o[0], $ - o[1], x - o[2]),
      min: [o[0] - 0.085, o[1] + p[1] - 0.07, o[2] - 0.1],
      max: [o[0] + 0.085, o[1] - 0.02, o[2] + 0.085],
    };
  return {
    sdf: J,
    mat: n0,
    weights: _,
    features: G,
    min: y,
    max: E,
    HC: o,
    rect: e.rect,
    carve: d,
    teeth: u,
    localSDF: v,
    neck: u0,
    eyeC: c0,
  };
}
