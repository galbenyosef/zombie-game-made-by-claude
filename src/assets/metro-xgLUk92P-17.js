// assets/metro-xgLUk92P 17 — math
// Lines 5998-6345 of readable/assets/metro-xgLUk92P.pretty.js (statement-aligned).
function Ta(c, a) {
  const { B: o, M: s, rng: f } = c,
    h = [],
    d = {},
    l = d0.roof,
    i = (v, C, k, R, W = []) => {
      for (let Y = v; Y < C - 1e-6; Y += 50) {
        const $ = Math.min(C, Y + 50),
          Z = k + Math.round(Y),
          H = { chunk: Z };
        (o.add(T0(Y, d0.z0, $, d0.z1, q, !0), s.bed, H),
          o.add(T0(Y, d0.z0, $, d0.z1, l, !1), s.concDark, H));
        for (const [V, I, E] of [
          ["+z", d0.z0, -1],
          ["-z", d0.z1, 1],
        ]) {
          const N = W.filter(
            ([K, s0]) => s0 === E && K - 0.6 >= Y && K + 0.6 <= $,
          )
            .map(([K]) => K)
            .sort((K, s0) => K - s0);
          let Q = Y;
          for (const K of N) {
            (o.add(r0(V, I, Q, K - 0.6, q, l), s.concDark, H),
              o.add(r0(V, I, K - 0.6, K + 0.6, q + 2, l), s.concDark, H));
            const s0 = I + E * 0.6;
            (o.add(r0(V, s0, K - 0.6, K + 0.6, q, q + 2), s.paintHigh, H),
              o.add(
                r0("+x", K - 0.6, Math.min(I, s0), Math.max(I, s0), q, q + 2),
                s.paintHigh,
                H,
              ),
              o.add(
                r0("-x", K + 0.6, Math.min(I, s0), Math.max(I, s0), q, q + 2),
                s.paintHigh,
                H,
              ),
              o.add(
                T0(
                  K - 0.6,
                  Math.min(I, s0),
                  K + 0.6,
                  Math.max(I, s0),
                  q + 2,
                  !1,
                ),
                s.paintHigh,
                H,
              ),
              o.add(
                T0(K - 0.6, Math.min(I, s0), K + 0.6, Math.max(I, s0), q, !0),
                s.bed,
                H,
              ),
              (Q = K + 0.6));
          }
          o.add(r0(V, I, Q, $, q, l), s.concDark, H);
        }
        for (const [V, I] of [
          [d0.z0, 1],
          [d0.z1, -1],
        ]) {
          for (const E of [q + 2.75, q + 3.25]) {
            (o.add(
              T(
                Y,
                E,
                Math.min(V, V + I * 0.32),
                $,
                E + 0.012,
                Math.max(V, V + I * 0.32),
              ),
              s.galvDark,
              H,
            ),
              o.add(
                T(
                  Y,
                  E,
                  Math.min(V + I * 0.31, V + I * 0.32),
                  $,
                  E + 0.06,
                  Math.max(V + I * 0.31, V + I * 0.32),
                ),
                s.galvDark,
                H,
              ));
            for (let N = 0; N < 4; N++)
              o.add(
                j(
                  [Y, E + 0.03, V + I * (0.05 + N * 0.065)],
                  [$, E + 0.03, V + I * (0.05 + N * 0.065)],
                  0.016 + (N % 2) * 0.006,
                  6,
                ),
                N === 1 ? s.cableR : s.cable,
                { chunk: Z, cast: !1 },
              );
          }
          for (let E = Y + 0.75; E < $; E += 1.5) {
            o.add(
              T(
                E - 0.02,
                q + 2.6,
                Math.min(V, V + I * 0.04),
                E + 0.02,
                q + 3.4,
                Math.max(V, V + I * 0.04),
              ),
              s.galvDark,
              H,
            );
            for (const N of [q + 2.75, q + 3.25])
              o.add(
                T(
                  E - 0.015,
                  N - 0.035,
                  Math.min(V, V + I * 0.33),
                  E + 0.015,
                  N,
                  Math.max(V, V + I * 0.33),
                ),
                s.galvDark,
                H,
              );
          }
        }
      }
      for (const [Y, $, Z] of R) {
        const H = $ < 0 ? d0.z0 : d0.z1;
        Ke(
          c,
          [Y, q + 2.35, H],
          [0, 0, -$],
          Z,
          [Y - 13, q - 0.3, d0.z0 - 0.05, Y + 13, l + 0.05, d0.z1 + 0.05],
          k + Math.round(Math.floor((Y - v) / 50) * 50 + v),
        );
      }
    },
    t = [];
  for (let v = 0; ; v++) {
    const C = m.x0 - 12 - v * 25;
    if (C < et.x0 + 8) break;
    t.push([
      C,
      v % 2 ? 1 : -1,
      [3, 6].includes(v) ? "off" : v === 4 ? "dying" : "on",
    ]);
  }
  const e = [];
  for (let v = 0; ; v++) {
    const C = m.x0 - 37 - v * 50;
    if (C < et.x0 + 6) break;
    e.push([C, v % 2 ? 1 : -1]);
  }
  (i(et.x0, et.x1, "wbox", t, e),
    o.add(r0("+x", et.x0, d0.z0, d0.z1, q, l), s.concDark, {
      chunk: "wbox" + et.x0,
    }),
    i(ht.x0, ht.x1, "ebox", [[ht.x0 + 13, -1, "on"]]));
  {
    const v = V0 + W0.cy,
      C = new po();
    (C.moveTo(d0.z0, q),
      C.lineTo(d0.z1, q),
      C.lineTo(d0.z1, l),
      C.lineTo(d0.z0, l),
      C.lineTo(d0.z0, q));
    const k = new xo(),
      R = Math.asin((q - v) / W0.r);
    k.moveTo(ct + W0.r * Math.cos(R), q);
    for (let H = 0; H <= 40; H++) {
      const V = R + (Math.PI - 2 * R) * (H / 40);
      k.lineTo(ct + W0.r * Math.cos(V), v + W0.r * Math.sin(V));
    }
    (k.lineTo(ct + W0.r * Math.cos(R), q), C.holes.push(k));
    const W = new mo(C, 8),
      Y = W.attributes.position;
    for (let H = 0; H < Y.count; H++) {
      const V = Y.getX(H),
        I = Y.getY(H);
      Y.setXYZ(H, ht.x1, I, V);
    }
    W.computeVertexNormals();
    const $ = W.attributes.normal;
    for (let H = 0; H < $.count; H++) $.setXYZ(H, -1, 0, 0);
    const Z = W.attributes.uv;
    for (let H = 0; H < Z.count; H++) Z.setXY(H, Y.getZ(H), Y.getY(H));
    (pe(W), o.add(W, s.concDark, { chunk: "ebox" + ht.x0 }));
  }
  ((d.east = re(c, m.x1 + 0.4, q + 3.1, d0.z0 + 0.22, "-x", "red", "ashwood")),
    (d.west = re(c, m.x0 - 0.6, q + 3.1, d0.z0 + 0.22, "-x", "red", "ashwood")),
    (d.tube = re(c, ht.x1 - 0.5, q + 3.1, d0.z0 + 0.22, "-x", "green")));
  const n = W0.cy,
    r = W0.r,
    u = Math.asin((-0.3 - n) / r),
    b = [];
  for (let v = 0; v <= 40; v++) {
    const C = Math.PI - u - (Math.PI - 2 * u) * (v / 40);
    b.push([r * Math.cos(C), n + r * Math.sin(C)]);
  }
  const M = r * Math.cos(u),
    x = a.sAtX(W0.x0),
    w = a.sAtX(W0.x1);
  for (const v of jt(a.pts, {
    step: 1.5,
    from: x,
    to: w,
    chunkLen: 50,
    tag: "tube",
  }))
    (o.add(zt(b, v.frames, { closed: !1, caps: !1, smooth: 0.9 }), s.lining, {
      chunk: v.chunk,
    }),
      o.add(
        zt(
          [
            [M, -0.3],
            [-M, -0.3],
          ],
          v.frames,
          { closed: !1, caps: !1 },
        ),
        s.bed,
        { chunk: v.chunk },
      ));
  const p = (v, C, k) => {
    const R = [];
    for (let W = 0; W < 6; W++) {
      const Y = (W / 6) * Math.PI * 2;
      R.push([v + k * Math.cos(Y), C + k * Math.sin(Y)]);
    }
    return R;
  };
  for (let v = 0; v < 4; v++) {
    const C = 1.25 + v * 0.16,
      k = -Math.sqrt(r * r - (C - n) ** 2) + 0.09;
    for (const R of jt(a.pts, {
      step: 3,
      from: x,
      to: w,
      chunkLen: 50,
      tag: "tube",
    }))
      o.add(
        zt(p(k, C, 0.022 + (v % 2) * 0.008), R.frames, {
          closed: !0,
          caps: !1,
          smooth: 0.5,
        }),
        v === 2 ? s.cableR : s.cable,
        { chunk: R.chunk, cast: !1 },
      );
  }
  const S = [];
  for (let v = x + 0.5; v < w; v += 1.5) {
    const C = ce(a, v),
      k = Fe(C),
      R = Math.atan2(-k.tz, k.tx);
    for (let W = 0; W < 4; W++) {
      const Y = 1.25 + W * 0.16,
        $ = -Math.sqrt(r * r - (Y - n) ** 2);
      S.push(
        K0(
          [C + k.nx * ($ + 0.05), V0 + Y - 0.03, k.z + k.nz * ($ + 0.05)],
          [0, R, 0],
        ),
      );
    }
  }
  const y = T(-0.01, -0.012, -0.05, 0.01, 0.012, 0.06);
  c.group.add(Bt(y, s.galvDark, S, { name: "tube:hooks" }));
  let L = 0;
  for (let v = x + 8; v < w - 6; v += 25, L++) {
    const C = ce(a, v),
      k = Fe(C),
      R = 2.25,
      W = -Math.sqrt(r * r - (R - n) ** 2) + 0.02,
      Y = [C + k.nx * W, V0 + R, k.z + k.nz * W],
      $ = [2, 7].includes(L)
        ? "off"
        : L === 5
          ? "flicker"
          : L === 9
            ? "dying"
            : "on",
      Z = [C - 14, q - 0.4, k.z - 4, C + 14, V0 + n + r + 0.1, k.z + 4];
    Ke(c, Y, [k.nx, 0, k.nz], $, Z, "tube" + Math.floor((v - x) / 50));
  }
  {
    const C = Math.sqrt(r * r - (0.65 - n) ** 2);
    for (const k of jt(a.pts, {
      step: 2,
      from: x,
      to: w,
      chunkLen: 50,
      tag: "tube",
    }))
      (o.add(
        zt(
          [
            [C, 0.65],
            [1.5, 0.65],
            [1.5, -0.3],
          ],
          k.frames,
          { closed: !1, caps: !1, smooth: 0.2 },
        ),
        s.concDark,
        { chunk: k.chunk },
      ),
        o.add(
          zt(
            [
              [1.62, 0.65 + 0.003],
              [1.5, 0.65 + 0.003],
            ],
            k.frames,
            { closed: !1, caps: !1 },
          ),
          s.cover,
          { chunk: k.chunk, cast: !1 },
        ));
  }
  return (
    (d.pg = re(
      c,
      ce(a, w - 14),
      V0 + 2.5,
      pt(ce(a, w - 14)) - (r - 0.45),
      "-x",
      "yellow",
    )),
    h.push(
      { x0: et.x0, x1: et.x1, z0: d0.z0 - 0.3, z1: d0.z0, y0: q, y1: l },
      { x0: et.x0, x1: et.x1, z0: d0.z1, z1: d0.z1 + 0.3, y0: q, y1: l },
    ),
    c.sounds.drips.push(
      [-40, q + 0.02, 220],
      [-110, q + 0.02, 224],
      [64, q + 0.02, 222],
      [160, q + 0.02, pt(160)],
      [250, q + 0.02, pt(250)],
    ),
    { colliders: h, signals: d }
  );
}
