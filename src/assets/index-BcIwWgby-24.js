// assets/index-BcIwWgby 24 — math
// Lines 6938-7275 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function br(s, o, t, u, e) {
  s(
    "gilt",
    Mt(
      o - e * 0.08,
      t - e * 0.62,
      u - 0.012,
      o + e * 0.08,
      t - e * 0.05,
      u + 0.012,
      0.01,
      "y",
    ),
  );
  for (const r of [-1, 1]) {
    const a = [o + r * e * 0.06, t - e * 0.1, u],
      p = [o + r * e * 0.62, t + e * 0.02, u];
    s("gilt", ge(a, p, e * 0.035, 6));
  }
  s(
    "gilt",
    Wt(
      [
        [0, 0],
        [e * 0.07, e * 0.02],
        [e * 0.075, e * 0.1],
        [e * 0.05, e * 0.16],
        [0, e * 0.17],
      ],
      o + e * 0.03,
      t - e * 0.07,
      u,
      { segs: 10 },
    ),
  );
  for (const r of [-1, 1])
    s(
      "gilt",
      ge(
        [o + r * e * 0.04, t - e * 0.62, u],
        [o + r * e * 0.015, t - e * 1.12, u],
        e * 0.035,
        6,
      ),
    );
  s(
    "linen",
    Mt(
      o - e * 0.1,
      t - e * 0.7,
      u - 0.016,
      o + e * 0.1,
      t - e * 0.56,
      u + 0.016,
      0.006,
      "x",
    ),
    { cast: !1 },
  );
}
function zr(s, o) {
  const t = pt.z1 - 0.01,
    u = t - 0.42,
    e = -2.35,
    r = 2.35,
    a = x0,
    p = x0 + 1.45,
    i = x0 + 1.95,
    d = x0 + 4.05;
  (s("paint", Mt(e + 0.05, a, u + 0.23, r - 0.05, d + 0.4, t, 0.01, "x")),
    s("gilt", Mt(e, p, u, r, p + 0.08, t, 0.012, "x")),
    s("gilt", Mt(e, i - 0.1, u - 0.02, r, i, t, 0.012, "x")));
  for (let w = 0; w < 7; w++) {
    const g = e + 0.3 + (w * (r - e - 0.6)) / 6,
      z = (p + 0.08 + i - 0.1) / 2;
    s(
      "panel",
      Mt(
        g - 0.24,
        z - 0.17,
        u + 0.04,
        g + 0.24,
        z + 0.17,
        u + 0.06,
        0.004,
        "x",
      ),
      { cast: !1 },
    );
    const x = [];
    for (let v = 0; v <= 32; v++) {
      const n = (v / 32) * Math.PI * 2,
        l = 0.13 + 0.035 * Math.abs(Math.cos(n * 2));
      x.push([g + Math.cos(n) * l, z + Math.sin(n) * l, u + 0.035]);
    }
    s(
      "gilt",
      I0(
        [
          [-0.012, 0],
          [0.012, 0],
          [0.012, 0.018],
          [-0.012, 0.018],
        ],
        x,
        [0, 0, -1],
        { crease: 0.8 },
      ),
    );
  }
  [
    [-2.05, -1.35],
    [-1.25, -0.6],
    [-0.5, 0.5],
    [0.6, 1.25],
    [1.35, 2.05],
  ].forEach(([w, g], z) => {
    const x = z === 2,
      v = d + (x ? 0.45 : 0),
      n = g - w,
      l = (w + g) / 2;
    {
      const k = new m0(n, v - i);
      (k.rotateY(Math.PI), k.translate(l, (i + v) / 2, u + 0.2));
      const S = k.attributes.uv;
      for (let A = 0; A < S.count; A++) S.setX(A, (z + S.getX(A)) / 5);
      s("panel", k, { cast: !1 });
    }
    const f = ue(n / 2, n * 0.62),
      h = v - n * 0.62,
      c = f.pts(16).map(([k, S]) => [l + k, h + S, u + 0.06]);
    s(
      "gilt",
      I0(
        [
          [-0.03, 0],
          [0.03, 0],
          [0.03, 0.05],
          [-0.03, 0.05],
        ],
        [[w, i, u + 0.06], ...c, [g, i, u + 0.06]],
        [0, 0, -1],
        { crease: 0.8 },
      ),
    );
    const M = n * 0.75,
      m = v + 0.05;
    for (const k of [-1, 1]) {
      const S = [l + k * (n / 2 + 0.04), m, u + 0.02],
        A = [l, m + M, u + 0.02];
      s("gilt", ge(S, A, 0.022, 6));
      for (let b = 0.15; b < 0.95; b += 0.2) {
        const P = [S[0] + (A[0] - S[0]) * b, S[1] + (A[1] - S[1]) * b, S[2]];
        s(
          "gilt",
          A0(
            (_, I) =>
              0.035 * Math.sin(Math.PI * I) * (1 + 0.5 * Math.cos(_ * 3)),
            (_) => P[1] + _ * 0.07,
            8,
            4,
            P[0] + k * 0.02,
            P[2] - 0.01,
          ),
        );
      }
    }
    (s(
      "gilt",
      Wt(
        [
          [0, 0],
          [0.03, 0],
          [0.045, 0.05],
          [0.02, 0.1],
          [0.035, 0.14],
          [0, 0.22],
        ],
        l,
        m + M - 0.02,
        u + 0.02,
        { segs: 10 },
      ),
    ),
      s(
        "paint2",
        A0(
          (k, S) => (0.09 + 0.03 * Math.cos(k * 3)) * Math.min(1, S * 4),
          (k) => 0,
          24,
          2,
          0,
          0,
        )
          .applyMatrix4(new wt().makeRotationX(-Math.PI / 2))
          .translate(l, m + M * 0.4, u + 0.05),
        { cast: !1 },
      ));
  });
  for (const w of [-2.25, -1.3, -0.55, 0.55, 1.3, 2.25]) {
    const g = i - 0.1,
      z = d + 0.95 + (Math.abs(w) < 0.6 ? 0.35 : 0);
    (s(
      "gilt",
      Mt(w - 0.05, g, u - 0.03, w + 0.05, z - 0.35, u + 0.07, 0.008, "y"),
    ),
      s(
        "gilt",
        A0(
          (x, v) =>
            0.07 *
            (1 - v) *
            (1 +
              0.35 * Math.max(0, Math.cos(x * 4)) * Math.sin(Math.PI * v * 3)),
          (x) => z - 0.35 + x * 0.45,
          16,
          8,
          w,
          u + 0.02,
          Math.PI / 4,
        ),
      ),
      s(
        "gilt",
        Wt(
          [
            [0, 0],
            [0.025, 0],
            [0.03, 0.04],
            [0, 0.09],
          ],
          w,
          z + 0.1,
          u + 0.02,
          { segs: 8 },
        ),
      ));
  }
  for (let w = e + 0.1; w < r - 0.05; w += 0.14)
    Math.abs(w) < 0.6 ||
      s(
        "gilt",
        A0(
          (g, z) => 0.04 * Math.sin(Math.PI * z) * (1 + 0.6 * Math.cos(g * 3)),
          (g) => d + 0.48 + g * 0.12,
          9,
          4,
          w,
          u + 0.1,
        ),
      );
  (s("gilt", Mt(e, d + 0.4, u + 0.05, r, d + 0.48, t, 0.01, "x")),
    s(
      "gilt",
      Mt(-0.03, d + 1.3, u + 0.02, 0.03, d + 1.95, u + 0.08, 0.006, "y"),
    ),
    s(
      "gilt",
      Mt(-0.2, d + 1.66, u + 0.02, 0.2, d + 1.72, u + 0.08, 0.006, "x"),
    ));
}
const Qe = { x: [0.85, 2.95], z0: 44.7, pitch: 0.97, rows: 11, depth: 0.72 };
function Ba(s, o) {
  const t = [],
    e = new he();
  (e.moveTo(0, 0),
    e.lineTo(o, 0),
    e.lineTo(o, 0.62),
    e.quadraticCurveTo(o, 0.7, o - 0.08, 0.72),
    e.lineTo(0.2, 0.72),
    e.quadraticCurveTo(0.12, 0.74, 0.12, 0.86),
    e.lineTo(0.12, 0.98),
    e.quadraticCurveTo(0.06, 1.1, 0, 0.98),
    e.lineTo(0, 0));
  for (const r of [0, s - 0.065]) {
    const a = new te(e, {
      depth: 0.065,
      bevelEnabled: !0,
      bevelThickness: 0.006,
      bevelSize: 0.006,
      bevelSegments: 1,
      curveSegments: 6,
    });
    (a.applyMatrix4(
      new wt().set(0, 0, 1, r, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1),
    ),
      a.deleteAttribute("uv"),
      t.push(kr(a.toNonIndexed())));
    const p = Wt(
      [
        [0, 0],
        [0.045, 0],
        [0.055, 0.04],
        [0.04, 0.08],
        [0.05, 0.1],
        [0.02, 0.14],
        [0, 0.15],
      ],
      r + 0.065 / 2,
      0.96,
      0.06,
      { segs: 10, tile: 0.3 },
    );
    t.push(p);
  }
  return (
    t.push(Mt(0.065, 0.42, 0.02, s - 0.065, 0.9, 0.05, 0.006, "x")),
    t.push(Mt(0.065, 0.88, 0, s - 0.065, 0.93, 0.08, 0.01, "x")),
    t.push(Mt(0.065, 0.76, -0.16, s - 0.065, 0.785, 0.02, 0.006, "x")),
    t.push(Mt(0.065, 0.43, 0.05, s - 0.065, 0.47, 0.45, 0.008, "x")),
    t.push(Mt(0.065, 0.3, 0.42, s - 0.065, 0.43, 0.45, 0.006, "x")),
    t.push(Mt(0.065, 0.07, o - 0.24, s - 0.065, 0.13, o - 0.1, 0.008, "x")),
    t.push(Mt(0.065, 0, 0.3, s - 0.065, 0.06, 0.34, 0.004, "x")),
    us(t)
  );
}
function kr(s, o) {
  const t = s.attributes.position,
    u = s.attributes.normal,
    e = new Float32Array(t.count * 2);
  for (let r = 0; r < t.count; r++) {
    const a = t.getX(r),
      p = t.getY(r),
      i = t.getZ(r),
      d = Math.abs(u.getX(r)),
      y = Math.abs(u.getY(r)),
      w = Math.abs(u.getZ(r));
    let g, z;
    (d >= y && d >= w
      ? ((g = p), (z = i))
      : y >= w
        ? ((g = a), (z = i))
        : ((g = p), (z = a)),
      (e[r * 2] = g),
      (e[r * 2 + 1] = z));
  }
  return (s.setAttribute("uv", new vt(e, 2)), s);
}
