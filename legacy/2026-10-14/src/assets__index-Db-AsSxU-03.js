// assets__index-Db-AsSxU 03 — math
// Lines 667-1198 of readable/assets__index-Db-AsSxU.pretty.js (statement-aligned).
function rt(e) {
  const o = e.HC,
    n = e.cran,
    c = e.lowerFace,
    t = e.eyeX,
    s = e.eyeY ?? 0,
    i = e.eyeZ,
    r = e.eyeR ?? 0.0118,
    l = e.mouthY,
    a = e.mouthW,
    u = e.mouthZ,
    f = e.mouthGap ?? 0.004,
    d = e.jawHinge,
    v = e.chin,
    C = ot(e.seed ?? 3),
    p = [];
  for (const j of [1, -1]) {
    const t0 = e.teethN ?? 8;
    for (let A = 0; A < t0; A++) {
      const w = ((A + 0.5) / t0) * 2 - 1;
      if ((e.missing || []).includes(j * (A + 1))) continue;
      const Y = w * a * 0.82,
        b = (Math.abs(w) < 0.3 ? 0.0034 : 0.0029) * (e.teethScale ?? 1),
        g =
          (j > 0 ? 0.0068 : 0.0058) * (0.85 + C() * 0.3) * (e.teethScale ?? 1),
        N = u - 0.004 - Y * Y * (e.arch ?? 14),
        V = j > 0 ? l + f * 0.5 + 0.0015 : l - f * 0.5 - 0.0015,
        O = (e.broken || []).includes(j * (A + 1)) ? 0.5 : 1;
      p.push({
        x: Y,
        y: V - j * g * 0.5 * O,
        z: N,
        w: b,
        h: g * 0.5 * O,
        row: j,
        tilt: (C() - 0.5) * 0.25,
      });
    }
  }
  const F = (j, t0, A) => {
      let w = 1e9;
      for (const Y of p) {
        if (Math.abs(j - Y.x) > 0.012 || Math.abs(t0 - Y.y) > 0.012) continue;
        const b = j - Y.x,
          g = t0 - Y.y,
          N = b + g * Y.tilt;
        w = Math.min(w, W0(N, g, A, 0, 0, Y.z, Y.w * 0.5, Y.h, 0.0022, 0.0012));
      }
      return w;
    },
    J = (j, t0, A) => {
      let w = W0(
        j,
        t0,
        A,
        0,
        l,
        u - 0.02,
        a,
        f * 0.5,
        0.03,
        Math.min(f * 0.45, 0.0025),
      );
      return (
        (w = B(
          w,
          b0(j, t0, A, 0, l - 0.004, u - 0.03, a * 1.05, 0.016 + f * 0.3, 0.03),
          0.01,
        )),
        w
      );
    },
    n0 = e.hair
      ? (j, t0, A) => {
          const w = e.hair,
            Y = h(
              w.front - 0.008,
              w.front + 0.008,
              t0 + (A > 0 ? 0 : 1) * 0.2 - Math.abs(j) * (w.recede ?? 0.3),
            ),
            b =
              h(w.side - 0.008, w.side + 0.008, t0) *
                h(-0.01, 0.02, -A + 0.01) +
              Y,
            g = h(w.nape - 0.01, w.nape + 0.01, t0) * h(0, -0.03, A);
          return I0(Math.max(Y, Math.min(1, b), g));
        }
      : null;
  function _(j, t0, A) {
    let w = b0(j, t0, A, n.c[0], n.c[1], n.c[2], n.r[0], n.r[1], n.r[2]);
    if (
      ((w = B(
        w,
        b0(j, t0, A, c.c[0], c.c[1], c.c[2], c.r[0], c.r[1], c.r[2]),
        e.faceK ?? 0.025,
      )),
      e.temple)
    )
      for (const b of [-1, 1])
        w = f0(
          w,
          -b0(
            j,
            t0,
            A,
            b * e.temple[0],
            e.temple[1],
            e.temple[2],
            0.012,
            0.03,
            0.028,
          ),
          0.02,
        );
    const Y = Math.abs(j);
    if (
      ((w = f0(w, (Y - e.chinW - (t0 - v[0]) * e.jawSlope) * 0.8, 0.02)),
      (w = f0(
        w,
        (-(t0 - v[0]) + (v[1] - 0.04 - A) * (e.jawUnder ?? 0.55)) * 0.85,
        0.016,
      )),
      (w = f0(w, A - e.faceZ, 0.035)),
      A > -0.01)
    ) {
      for (const b of [-1, 1])
        ((w = B(
          w,
          b0(
            j,
            t0,
            A,
            b * e.cheek[0],
            e.cheek[1],
            e.cheek[2],
            0.019 * (e.cheekS ?? 1),
            0.012 * (e.cheekS ?? 1),
            0.02 * (e.cheekS ?? 1),
          ),
          0.012 * (e.cheekK ?? 1),
        )),
          e.hollow &&
            (w = f0(
              w,
              -b0(
                j,
                t0,
                A,
                b * e.hollow[0],
                e.hollow[1],
                e.hollow[2],
                0.018,
                0.028,
                0.024,
              ),
              e.hollowK ?? 0.02,
            )),
          e.jowl &&
            (w = B(
              w,
              b0(
                j,
                t0,
                A,
                b * e.jowl[0],
                e.jowl[1],
                e.jowl[2],
                e.jowl[3],
                e.jowl[4],
                e.jowl[5],
              ),
              e.jowlK ?? 0.02,
            )));
      if (t0 > s - 0.045 && A > 0.02) {
        w = B(
          w,
          K0(
            j,
            t0,
            A,
            -e.brow[0],
            e.brow[1],
            e.brow[2],
            e.brow[0],
            e.brow[1],
            e.brow[2],
            e.brow[3],
          ),
          0.016,
        );
        for (const b of [-1, 1])
          if (
            ((w = f0(
              w,
              -b0(
                j,
                t0,
                A,
                b * t,
                s + 0.002,
                i + 0.017,
                e.socket[0],
                e.socket[1],
                e.socket[2],
              ),
              0.008,
            )),
            e.lid)
          ) {
            let g = se(j, t0, A, b * t, s, i, r + 0.0022);
            ((g = f0(
              g,
              -(t0 - (s + r * e.lid - Math.abs(j - b * t) * 0.12)),
              0.0015,
            )),
              (g = f0(g, i - 0.004 - A, 0.002)),
              (w = B(w, g, 0.0025)));
          }
      }
      if (Math.abs(j) < 0.05 && A > 0.035) {
        const b = e.nose;
        w = B(
          w,
          _0(
            j,
            t0,
            A,
            b.bx ?? 0,
            b.bridge[0],
            b.bridge[1],
            b.r0,
            b.tx ?? 0,
            b.tip[0],
            b.tip[1],
            b.r1,
          ),
          0.012,
        );
        for (const g of [-1, 1])
          w = B(
            w,
            b0(
              j,
              t0,
              A,
              g * b.wing,
              b.tip[0] - 0.004,
              b.tip[1] - 0.011,
              0.0085,
              0.0065,
              0.008,
            ),
            0.006,
          );
        for (const g of [-1, 1])
          w = f0(
            w,
            -b0(
              j,
              t0,
              A,
              g * b.wing * 0.55,
              b.tip[0] - 0.008,
              b.tip[1] - 0.006,
              0.0035,
              0.0022,
              0.004,
            ),
            0.002,
          );
        t0 < l + 0.03 &&
          t0 > l - 0.035 &&
          ((w = B(
            w,
            b0(
              j,
              t0,
              A,
              0,
              l + 0.006 + f * 0.5,
              u + 0.002,
              a * 1.02,
              0.0055,
              0.008,
            ),
            0.006,
          )),
          (w = B(
            w,
            b0(
              j,
              t0,
              A,
              0,
              l - 0.006 - f * 0.5,
              u + 0,
              a * 0.95,
              0.0065,
              0.0085,
            ),
            0.006,
          )));
      }
    }
    if (Math.abs(j) > 0.045 && A < 0.035)
      for (const b of [-1, 1]) {
        const g = e.ear;
        let N = b0(j, t0, A, b * g[0], g[1], g[2], 0.011, g[3], g[4]);
        ((N = f0(
          N,
          -b0(
            j,
            t0,
            A,
            b * (g[0] + 0.007),
            g[1] - 0.004,
            g[2] + 0.003,
            0.006,
            g[3] * 0.45,
            g[4] * 0.45,
          ),
          0.003,
        )),
          (w = B(w, N, 0.006)));
      }
    if (
      (e.extra && (w = e.extra(j, t0, A, w)),
      Math.abs(j) < a + 0.03 &&
        Math.abs(t0 - l) < 0.04 &&
        A > 0 &&
        ((w = f0(w, -J(j, t0, A), 0.003)), (w = Math.min(w, F(j, t0, A)))),
      A > 0.03 && Math.abs(t0 - s) < 0.03)
    )
      for (const b of [-1, 1]) w = Math.min(w, se(j, t0, A, b * t, s, i, r));
    return w;
  }
  const G = j0.sub(e.C7, o),
    y = (j, t0, A) => {
      let w = _0(
        j,
        t0,
        A,
        0,
        e.neckTop[0],
        e.neckTop[1],
        e.neckR[0],
        G[0],
        G[1] - 0.03,
        G[2] + 0.01,
        e.neckR[1],
      );
      for (const Y of [-1, 1])
        w = B(
          w,
          K0(
            j,
            t0,
            A,
            Y * 0.05,
            -0.05,
            -0.012,
            Y * 0.015,
            G[1] - 0.005,
            G[2] + 0.06,
            e.cordR ?? 0.011,
          ),
          0.014,
        );
      return (
        e.adam &&
          (w = B(
            w,
            b0(j, t0, A, 0, e.adam[0], e.adam[1], 0.011, 0.014, 0.012),
            0.01,
          )),
        e.neckExtra && (w = e.neckExtra(j, t0, A, w)),
        w
      );
    },
    E = (j, t0, A) => _(j - o[0], t0 - o[1], A - o[2]),
    u0 = n0
      ? {
          sdf: (j, t0, A) => {
            const w = j - o[0],
              Y = t0 - o[1],
              b = A - o[2],
              g = n0(w, Y, b),
              N = Math.atan2(w, b),
              V =
                (Math.sin(N * 7 + Y * 14 + Math.sin(Y * 30 + N * 2) * 1.1) *
                  0.6 +
                  Math.sin(N * 17 - Y * 9 + 1.7) * 0.3) *
                e.hair.clump,
              O = e.hair.th + V;
            let i0 =
              b0(
                w,
                Y,
                b,
                n.c[0],
                n.c[1] + 0.002,
                n.c[2],
                n.r[0] + O,
                n.r[1] + O,
                n.r[2] + O,
              ) +
              (1 - g) * 0.03;
            for (const m0 of e.hair.strands || []) {
              const S = m0.pts;
              for (let P = 0; P < S.length - 1; P++)
                i0 = B(
                  i0,
                  _0(
                    w,
                    Y,
                    b,
                    S[P][0],
                    S[P][1],
                    S[P][2],
                    m0.r * (1 - (P / S.length) * 0.6),
                    S[P + 1][0],
                    S[P + 1][1],
                    S[P + 1][2],
                    m0.r * (1 - ((P + 1) / S.length) * 0.6),
                  ),
                  0.004,
                );
            }
            return i0;
          },
          min: [
            o[0] + n.c[0] - n.r[0] - 0.03,
            o[1] + (e.hair.nape ?? -0.06) - 0.05,
            o[2] + n.c[2] - n.r[2] - 0.03,
          ],
          max: [
            o[0] + n.c[0] + n.r[0] + 0.03,
            o[1] + n.c[1] + n.r[1] + 0.03,
            o[2] + n.c[2] + n.r[2] + 0.03,
          ],
        }
      : null,
    q = {
      sdf: (j, t0, A) => y(j - o[0], t0 - o[1], A - o[2]),
      min: [o[0] - 0.085, o[1] + G[1] - 0.07, o[2] - 0.1],
      max: [o[0] + 0.085, o[1] - 0.02, o[2] + 0.085],
    },
    $ = (j, t0, A) => {
      const w = j - o[0],
        Y = t0 - o[1],
        b = A - o[2];
      for (const N of [-1, 1])
        if (se(w, Y, b, N * t, s, i, r) < 0.0012) return L.EYE;
      if (F(w, Y, b) < 0.0012) return L.TEETH;
      const g = J(w, Y, b);
      if (g > -0.0035 && g < 0.003 && b < u - 0.002) return L.MOUTH;
      if (e.matExtra) {
        const N = e.matExtra(w, Y, b);
        if (N != null) return N;
      }
      return L.FACE;
    },
    x = (j, t0, A, w) => {
      const Y = j - o[0],
        b = t0 - o[1],
        g = A - o[2],
        N = h(l - 0.001, l - 0.007 - f * 0.5, b),
        V = h(d[1] - 0.03, d[1] + 0, g),
        O = h(d[0] + 0.004, d[0] - 0.02, b) * h(d[1] - 0.02, d[1] + 0.005, g);
      let i0 = I0(
        Math.max(
          N * V,
          O * h(e.jawSideX ?? 0.04, (e.jawSideX ?? 0.04) + 0.03, Math.abs(Y)),
        ),
      );
      F(Y, b, g) < 0.002 &&
        (i0 = p.some(
          (w0) =>
            w0.row < 0 &&
            Math.abs(Y - w0.x) < 0.006 &&
            Math.abs(b - w0.y) < 0.008,
        )
          ? 1
          : 0);
      const m0 = -(b - v[0]) + (v[1] - 0.04 - g) * (e.jawUnder ?? 0.55),
        S = h(e.skullBase + 0.02, e.skullBase - 0.035, b),
        P = h(-0.012, 0.04, m0),
        s0 = h(d[1] - 0.03, d[1] + 0.02, g),
        o0 = I0(T0(Math.max(S, P), P, s0)),
        g0 = h(G[1] + 0.035, G[1] - 0.01, b);
      ((w[d0.head] += (1 - i0) * (1 - o0)),
        (w[d0.jaw] += i0 * (1 - o0)),
        (w[d0.neck] += o0 * (1 - g0)),
        (w[d0.chest] += o0 * g0));
    },
    e0 = {
      eyeL: [t * 1e3, s * 1e3],
      eyeR: [-t * 1e3, s * 1e3],
      eyeRad: r * 1e3,
      mouthY: l * 1e3,
      mouthW: a * 1e3,
      noseTip: H(e.nose.tip[0]),
      chinY: v[0] * 1e3,
      browY: e.brow[1] * 1e3,
    };
  function H(j) {
    return j * 1e3;
  }
  const z = [o[0] - 0.105, o[1] + v[0] - 0.03, o[2] - 0.13],
    Z = [o[0] + 0.105, o[1] + n.c[1] + n.r[1] + 0.006, o[2] + 0.14],
    p0 = {
      L: [o[0] + t, o[1] + s, o[2] + i],
      R: [o[0] - t, o[1] + s, o[2] + i],
      r,
    };
  return {
    sdf: E,
    mat: $,
    weights: x,
    features: e0,
    min: z,
    max: Z,
    HC: o,
    rect: e.rect,
    carve: J,
    teeth: p,
    localSDF: _,
    neck: q,
    eyeC: p0,
    hair: u0,
  };
}
