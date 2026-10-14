// assets__metro-xgLUk92P 16 — add
// Lines 5678-5997 of readable/assets__metro-xgLUk92P.pretty.js (statement-aligned).
function ka(c, a) {
  const { B: o, M: s, L: f, group: h } = c,
    d = [],
    l = [];
  for (let x = et.x0; x <= ht.buffer2 + 0.01; x += 1) l.push([x, V0, he]);
  const i = [
      { pts: a.pts, tag: "trk", third: 1.18 },
      { pts: l, tag: "tr2", third: -1.18 },
    ],
    t = [],
    e = [],
    n = [];
  for (const x of i) {
    for (const y of [-1, 1])
      for (const L of jt(x.pts, { off: y * Dt, step: 2, tag: x.tag + "r" }))
        (o.add(
          zt(ba, L.frames, { closed: !0, caps: !1, smooth: 0.7 }),
          s.rust,
          { chunk: L.chunk, cast: !1 },
        ),
          o.add(zt(Ma, L.frames, { closed: !1, caps: !1 }), s.railHead, {
            chunk: L.chunk,
            cast: !1,
          }));
    for (const y of jt(x.pts, { off: x.third, step: 2, tag: x.tag + "c" }))
      (o.add(
        zt(
          [
            [-0.04, -0.07],
            [0.04, -0.07],
            [0.04, 0],
            [-0.04, 0],
          ],
          y.frames,
          { closed: !0, caps: !1, smooth: 0.9 },
        ),
        s.steel,
        { chunk: y.chunk, cast: !1 },
      ),
        o.add(
          zt(
            [
              [-0.17, 0.11],
              [0.17, 0.11],
              [0.17, 0.13],
              [-0.17, 0.13],
            ],
            y.frames,
            { closed: !0, caps: !1, smooth: 0.9 },
          ),
          s.cover,
          { chunk: y.chunk, cast: !1 },
        ));
    let w = 0,
      p = 0.3,
      S = 1;
    for (let y = 1; y < x.pts.length; y++) {
      const L = x.pts[y - 1],
        v = x.pts[y],
        C = Math.hypot(v[0] - L[0], v[2] - L[2]);
      for (; p <= w + C;) {
        const k = (p - w) / C,
          R = L[0] + (v[0] - L[0]) * k,
          W = L[2] + (v[2] - L[2]) * k,
          Y = Math.atan2(-(v[2] - L[2]), v[0] - L[0]);
        if (
          (t.push(K0([R, V0 - 0.172 - 0.095, W], [0, Y, 0])),
          (R > -13 && R < 51) || R > 385)
        )
          for (const $ of [-1, 1])
            e.push(
              K0([R, V0 - 0.172, W], [0, Y, 0]).multiply(
                new rt().makeTranslation(0, 0, $ * Dt),
              ),
            );
        p += 0.65;
      }
      for (; S <= w + C;) {
        const k = (S - w) / C,
          R = L[0] + (v[0] - L[0]) * k,
          W = L[2] + (v[2] - L[2]) * k,
          Y = Math.atan2(-(v[2] - L[2]), v[0] - L[0]);
        (n.push(
          K0([R, V0 - 0.07, W], [0, Y, 0]).multiply(
            new rt().makeTranslation(0, 0, x.third),
          ),
        ),
          (S += 2.5));
      }
      w += C;
    }
  }
  const r = new co(0.26, 0.19, 2.5);
  r.translate(0, 0, 0);
  {
    const x = r.attributes.uv,
      w = r.attributes.position;
    for (let p = 0; p < x.count; p++)
      x.setXY(p, w.getZ(p) + w.getX(p), w.getY(p));
  }
  h.add(Bt(r, s.sleeper, t, { name: "track:sleepers", receive: !0 }));
  const u = q0([
    T(-0.08, -0.012, -0.17, 0.08, 0, 0.17),
    T(-0.03, 0, -0.11, 0.03, 0.03, -0.075),
    T(-0.03, 0, 0.075, 0.03, 0.03, 0.11),
  ]);
  h.add(Bt(u, s.galvDark, e, { name: "track:fastenings" }));
  const b = q0([
    new D0(0.045, 0.06, 0.14, 10).translate(0, -0.11, 0),
    T(-0.06, -0.19, -0.08, 0.06, -0.17, 0.08),
  ]);
  h.add(Bt(b, s.plasticW, n, { name: "track:insulators" }));
  const M = (x, w, p, S, y) => {
    const L = { chunk: "buf" + Math.round(x) },
      v = V0,
      C = [];
    for (const R of [-1, 1])
      (C.push(
        T(
          x - 0.15,
          v - 0.17,
          w + R * Dt - 0.08,
          x + 0.15,
          v + 0.95,
          w + R * Dt + 0.08,
          0.01,
        ),
      ),
        C.push(
          j(
            [x, v + 0.85, w + R * Dt],
            [x + p * 1.7, v - 0.1, w + R * Dt],
            0.05,
            8,
          ),
        ));
    (C.push(
      T(x - 0.18, v + 0.55, w - 1.05, x + 0.18, v + 1.05, w + 1.05, 0.02),
    ),
      o.add(q0(C), s.steel, L));
    const k = new D0(0.2, 0.2, 0.32, 20)
      .rotateZ(Math.PI / 2)
      .translate(x - p * 0.34, v + 0.8, w);
    (o.add(k, s.iron, L),
      o.add(
        T(
          x - p * 0.52 - 0.02,
          v + 0.62,
          w - 0.22,
          x - p * 0.5 + 0.02,
          v + 0.98,
          w + 0.22,
          0.01,
        ),
        s.rubber,
        L,
      ));
    for (const R of [-0.6, 0.6]) {
      const W = f.fixId();
      (o.add(
        new D0(0.08, 0.08, 0.1, 16)
          .rotateZ(Math.PI / 2)
          .translate(x - p * 0.2, v + 1.17, w + R),
        s.iron,
        L,
      ),
        o.add(
          O0(
            new U0(0.06, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2)
              .rotateZ(Math.PI / 2)
              .translate(x - p * 0.26, v + 1.17, w + R),
            W,
          ),
          s.redLamp,
          { chunk: L.chunk, cast: !1 },
        ),
        f.add({
          a: [x - p * 0.4, v + 1.17, w + R],
          col: [1, 0.12, 0.05],
          cd: 2.2,
          reach: 6,
          zone: S,
          fix: W,
          state: "on",
          box: y,
          spec: 0.7,
          point: R > 0 ? { cd: 3, dist: 6 } : void 0,
        }));
    }
  };
  return (
    M(P.bufferX, P.track, 1, "parkgate", [
      P.hallX0,
      q - 0.5,
      P.hallZ0,
      P.hallX1,
      P.ceil,
      P.hallZ1 + 0.1,
    ]),
    M(ht.buffer2, he, 1, "tunnel", [ht.x0, q - 0.5, 217, ht.x1 + 0.1, -5, 226]),
    d.push({
      x0: P.bufferX - 0.3,
      x1: P.bufferX + 1.8,
      z0: P.track - 1.1,
      z1: P.track + 1.1,
      y0: q,
      y1: V0 + 1.1,
    }),
    { colliders: d }
  );
}
const Sa = [1, 0.52, 0.12];
function re(c, a, o, s, f, h = "red", d = "tunnel", l = null) {
  const { B: i, M: t, L: e } = c,
    n = { chunk: "sig" + Math.round(a) },
    r = -1;
  (i.add(
    T(a - 0.09, o - 0.42, s - 0.17, a + 0.09, o + 0.42, s + 0.17, 0.02),
    t.black,
    n,
  ),
    i.add(j([a, o - 0.42, s], [a, o - 1.1, s], 0.04, 8), t.galvDark, n));
  const u = {};
  return (
    [
      ["red", [1, 0.1, 0.05], t.redLamp, 0.26],
      ["yellow", [1, 0.6, 0.1], t.amberLamp, 0],
      ["green", [0.15, 1, 0.4], t.greenLamp, -0.26],
    ].forEach(([b, M, x, w]) => {
      const p = e.fixId();
      (i.add(
        O0(
          new uo(0.07, 18)
            .rotateY(-Math.PI / 2)
            .translate(a + r * 0.092, o + w, s),
          p,
        ),
        x,
        { chunk: n.chunk, cast: !1 },
      ),
        i.add(
          new D0(0.095, 0.095, 0.12, 16, 1, !0, 0, Math.PI)
            .rotateZ(Math.PI / 2)
            .rotateX(Math.PI)
            .translate(a + r * 0.15, o + w + 0.02, s),
          t.black,
          n,
        ),
        (u[b] = e.add({
          a: [a + r * 0.2, o + w, s],
          col: M,
          cd: 1.6,
          reach: 5,
          zone: d,
          fix: p,
          state: b === h ? "on" : "off",
          box: l || [a - 6, q - 0.3, s - 5, a + 6, o + 3, s + 5],
          spec: 0.8,
        })));
    }),
    {
      set(b) {
        for (const [M, x] of Object.entries(u))
          x.state = M === b ? "on" : "off";
        c.audio?.play?.("metro_signal_click", { pos: [a, o, s], vol: 0.5 });
      },
      lamps: u,
    }
  );
}
function Ke(c, a, o, s, f, h) {
  const { B: d, M: l, L: i } = c,
    t = { chunk: h },
    e = i.fixId(),
    n = Math.atan2(o[0], o[2]),
    r = K0(a, [0, n, 0]);
  (d.add(
    T(-0.12, -0.09, 0, 0.12, 0.09, 0.08, 0.012).applyMatrix4(r),
    l.galvDark,
    t,
  ),
    d.add(
      O0(
        new U0(0.075, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2)
          .rotateX(Math.PI / 2)
          .scale(1.25, 0.85, 1)
          .translate(0, 0, 0.08)
          .applyMatrix4(r),
        e,
      ),
      l.sodium,
      { chunk: h, cast: !1 },
    ));
  for (let b = 0; b < 3; b++)
    d.add(
      T(
        -0.1,
        -0.004 + (b - 1) * 0.045,
        0.08,
        0.1,
        0.004 + (b - 1) * 0.045,
        0.16,
      ).applyMatrix4(r),
      l.galvDark,
      { chunk: h, cast: !1 },
    );
  const u = [a[0] + o[0] * 0.25, a[1] - 0.05, a[2] + o[2] * 0.25];
  return i.add({
    a: u,
    col: Sa,
    cd: 18,
    reach: 10,
    zone: "tunnel",
    fix: e,
    state: s,
    box: f,
    point: { cd: 26, dist: 11, below: 0 },
    weight: 0.9,
  });
}
