// assets__city-COfbVKUz 18 — tofixed
// Lines 5916-6082 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
function So(m, e, d = null) {
  const n = [];
  for (let v = m.t0; v <= m.t1 + 1e-6; v += 0.1) {
    const a = m.pos(v);
    n.push([
      +a[0].toFixed(3),
      +a[1].toFixed(3),
      +a[2].toFixed(3),
      +v.toFixed(2),
    ]);
  }
  const h = m.pos(m.t1);
  n[n.length - 1][3] < m.t1 - 0.001 &&
    n.push([
      +h[0].toFixed(3),
      +h[1].toFixed(3),
      +h[2].toFixed(3),
      +m.t1.toFixed(2),
    ]);
  const c = ut.map(([v, a, r, y]) => ({ t: a, name: v, dur: r, note: y })),
    w = m.t1,
    s = m.pos(w),
    x = {
      t: +w.toFixed(2),
      at: s.map((v) => +v.toFixed(2)),
      heading: +m.heading(w).toFixed(3),
      clipT: 69.55,
      street: "the old street (x 1256), at its crossing with z -756",
    },
    k = (v, a = [0, 0, 0]) => {
      const r = zt;
      if (v <= r[0][3])
        return ((a[0] = r[0][0]), (a[1] = r[0][1]), (a[2] = r[0][2]), a);
      for (let b = 1; b < r.length; b++)
        if (v <= r[b][3]) {
          const p = r[b - 1],
            i = r[b],
            t = (v - p[3]) / (i[3] - p[3]);
          return (
            (a[0] = p[0] + (i[0] - p[0]) * t),
            (a[1] = p[1] + (i[1] - p[1]) * t),
            (a[2] = p[2] + (i[2] - p[2]) * t),
            a
          );
        }
      const y = r[r.length - 1];
      return ((a[0] = y[0]), (a[1] = y[1]), (a[2] = y[2]), a);
    },
    P = (v, a) => {
      const r = ut.find((y) => y[0] === v);
      return r
        ? r[2] > 0
          ? Math.max(0, Math.min(1, (a - r[1]) / r[2]))
          : a >= r[1]
            ? 1
            : 0
        : 0;
    };
  let _ = null,
    g = !1;
  const M = new Map(),
    N = [0, 0, 0],
    T = (v) => {
      const a = d;
      if (!a || !a.ctx) return;
      if (!g) {
        g = !0;
        for (const b of new Set([
          ...pt.map((p) => p[1]),
          ...mt.map((p) => p[2]),
        ]))
          a.buffer(b);
      }
      const r = _ != null && v > _ && v - _ < 0.5;
      if (r)
        for (const [b, p, i, t, u] of pt)
          b > _ &&
            b <= v &&
            a.play(
              p,
              i
                ? { pos: i, vol: t, ref: u, rolloff: 1, reverb: 0.2 }
                : { vol: t, reverb: 0.1 },
            );
      const y = a.ctx.currentTime;
      for (const b of mt) {
        const [p, i, t, u, o, l] = b;
        let f = M.get(b);
        const z = r && v >= p && v < i;
        if (
          (z &&
            !f &&
            a.buffers.get(t) &&
            ((f = a.play(t, {
              loop: !0,
              vol: 0,
              pos: u === "heli2" ? k(v, N) : u,
              ref: l,
              rolloff: 1,
              reverb: 0.15,
            })),
            f && M.set(b, f)),
          !f)
        )
          continue;
        if (!z) {
          (f.stop(0.4), M.delete(b));
          continue;
        }
        u === "heli2" &&
          f.panner &&
          (k(v, N),
          f.panner.positionX.setTargetAtTime(N[0], y, 0.05),
          f.panner.positionY.setTargetAtTime(N[1], y, 0.05),
          f.panner.positionZ.setTargetAtTime(N[2], y, 0.05));
        const A = f.gain.gain,
          F = f.source.buffer?._norm ?? 1;
        (A.cancelScheduledValues(y),
          A.setTargetAtTime(o * F, y, 0.15),
          A.setTargetAtTime(0, y + 0.5, 0.3));
      }
    },
    S = (v, a = {}) => {
      for (const r of [
        "birds",
        "crane",
        "glass",
        "tank",
        "impact",
        "wires",
        "clip",
      ])
        e[r]?.set(P(r, v));
      (e.heli2fx?.set(v, k), a.sound !== !1 && T(v), (_ = v));
    };
  return {
    line: n,
    events: c,
    heli2: zt.map((v) => v.slice()),
    crash: x,
    FRAME: $t,
    PARKED_YAW: Xt,
    moments: Me,
    duration: +m.t1.toFixed(2),
    at: (v, a) => m.pos(v, a),
    attitude: (v, a) => m.attitude(v, a),
    points: (v) => Yt(m, v),
    heli2At: k,
    kOf: P,
    drive: S,
    schedule: ut,
    sounds: pt,
    loops: mt,
  };
}
const Fo = (m, e) => m + 32768 * e;
function $0(m, e, d, n, h, c, w) {
  const s = (n + h) / 2,
    x = (e + d) / 2,
    k = w ? (d - e) / 2 : (h - n) / 2,
    P = (g, M) => (w ? [J.road, g - x, M, k + 4] : [J.road, M - s, g, k + 4]);
  m.p.push(e, c, h, d, c, h, d, c, n, e, c, n);
  for (let g = 0; g < 4; g++) m.n.push(0, 1, 0);
  m.g.push(...P(e, h), ...P(d, h), ...P(d, n), ...P(e, n));
  const _ = m.p.length / 3 - 4;
  m.i.push(_, _ + 1, _ + 2, _, _ + 2, _ + 3);
}
