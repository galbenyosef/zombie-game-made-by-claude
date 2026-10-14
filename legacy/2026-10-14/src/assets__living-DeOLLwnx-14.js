// assets__living-DeOLLwnx 14 — part
// Lines 4308-4533 of readable/assets__living-DeOLLwnx.pretty.js (statement-aligned).
function ve(a, t, r, e, o) {
  const [s, , n] = o,
    l = 0.27,
    p = F(s + l / 2, 0, n, e0 / 2);
  r.frame(p);
  const d = "wood_walnut";
  (r.part(
    _(0.56, 0.38, l + 0.04, { r: 0.008 }).translate(0, 0.19 + 0.04, 0),
    d,
    { grain: "y" },
  ),
    r.part(_(0.6, 0.05, l + 0.07, { r: 0.01 }).translate(0, 0.025, 0), d, {
      grain: "x",
    }),
    r.part(_(0.58, 0.04, l + 0.06, { r: 0.008 }).translate(0, 0.44, 0), d, {
      grain: "x",
    }));
  for (const v of [-1, 1])
    r.part(
      _(0.022, 1.02, l - 0.02, { r: 0.004 }).translate(
        v * 0.209,
        0.46 + 0.51,
        -0.01,
      ),
      d,
      { grain: "y" },
    );
  r.part(
    _(0.44, 1.02, 0.015, { r: 0.003 }).translate(0, 0.46 + 0.51, -l / 2 + 0.01),
    a0(a, "#140e0a"),
    { grain: "y", cast: !1 },
  );
  const c = z0(0.34, 0.84, 0.01, 0, 0.97),
    u = new kt();
  (u.moveTo(-0.11, 0.62),
    u.lineTo(0.11, 0.62),
    u.lineTo(0.11, 1.2),
    u.absarc(0, 1.2, 0.11, 0, e0, !1),
    u.lineTo(-0.11, 0.62),
    c.holes.push(u),
    r.part(G0(c, 0.02, 0.004, 12).translate(0, 0, l / 2 - 0.02), d, {
      grain: "y",
    }),
    r.part(_(0.54, 0.05, l + 0.05, { r: 0.008 }).translate(0, 1.5, 0), d, {
      grain: "x",
    }),
    r.part(_(0.5, 0.5, l + 0.02, { r: 0.008 }).translate(0, 1.78, 0), d, {
      grain: "y",
    }));
  for (const v of [-1, 1])
    r.part(
      j(
        [
          [0.018, 0],
          [0.02, 0.02],
          [0.014, 0.05],
          [0.014, 0.4],
          [0.02, 0.43],
          [0.018, 0.46],
        ],
        12,
      ).translate(v * 0.22, 1.54, l / 2 + 0.02),
      "brass_aged",
      { grain: "y", cast: !1 },
    );
  r.part(_(0.56, 0.06, l + 0.05, { r: 0.008 }).translate(0, 2.06, 0), d, {
    grain: "x",
  });
  for (const v of [-1, 1]) {
    const T = _(0.24, 0.05, l + 0.04, { r: 0.008 });
    (r.part(T, d, { grain: "x", local: F(v * 0.15, 2.14, 0, 0, 0, -v * 0.45) }),
      r.part(
        new D0(0.03, 12, 8).translate(v * 0.25, 2.12, 0.05),
        "brass_aged",
        { cast: !1 },
      ));
  }
  r.part(
    j(
      [
        [0.02, 0],
        [0.03, 0.03],
        [0.02, 0.06],
        [0, 0.08],
      ],
      12,
    ).translate(0, 2.13, 0.05),
    "brass_aged",
    { cast: !1 },
  );
  const b = new u0(new pt(0.165, 40), new C0({ map: te(), roughness: 0.6 }));
  (b.position.set(0, 1.78, l / 2 + 0.012),
    b.applyMatrix4(p),
    (b.name = "clock_dial"),
    t.add(b));
  const k = new at(0.17, 0.012, 8, 40).translate(0, 1.78, l / 2 + 0.016);
  r.part(k, "brass_aged", { cast: !1 });
  const S = a0(a, "#15110d"),
    h = (v, T) => {
      const I = new $0();
      return (
        I.moveTo(-T, -0.02),
        I.lineTo(T, -0.02),
        I.lineTo(T * 0.6, v * 0.8),
        I.lineTo(0, v),
        I.lineTo(-T * 0.6, v * 0.8),
        I.lineTo(-T, -0.02),
        new u0(new jt(I), S)
      );
    },
    y = new y0();
  (y.position.set(0, 1.78, l / 2 + 0.016), y.applyMatrix4(p), t.add(y));
  const C = h(0.09, 0.008),
    z = h(0.135, 0.006);
  ((z.position.z = 0.002), y.add(C, z));
  const w = new y0();
  (w.position.set(0, 1.42, l / 2 - 0.06), w.applyMatrix4(p), t.add(w));
  const f = new r.constructor(a.mats, e);
  (f.frame(new b0()),
    f.part(new X0(0.008, 0.62, 0.004).translate(0, -0.31, 0), "brass_aged", {
      cast: !1,
    }),
    f.part(
      j(
        [
          [0, -0.012],
          [0.055, -0.008],
          [0.06, 0],
          [0.055, 0.008],
          [0, 0.012],
        ],
        24,
      )
        .rotateX(e0 / 2)
        .translate(0, -0.64, 0),
      "brass_aged",
      { cast: !1 },
    ),
    f.flush(w, "pendulum"),
    r.frame(p).part(new _0(0.23, 0.72).translate(0, 0.97, l / 2 - 0.01), ot(), {
      uv: "keep",
      cast: !1,
    }));
  const i = { h: 3, m: 7, running: !0, phase: 0, t: 0 },
    m = () => {
      ((z.rotation.z = -(i.m / 60) * e0 * 2),
        (C.rotation.z = -((i.h % 12) / 12 + i.m / 720) * e0 * 2));
    };
  return (
    m(),
    {
      group: y.parent,
      hub: y,
      pendulum: w,
      pos: [s + 0.3, 1.2, n],
      setTime(v, T) {
        ((i.h = v), (i.m = T), m());
      },
      setRunning(v) {
        i.running = !!v;
      },
      get running() {
        return i.running;
      },
      anim: (v) => {
        i.running &&
          ((i.phase += v * e0),
          w.rotation.set(0, e0 / 2, Math.sin(i.phase) * 0.07),
          (i.t += v),
          i.t >= 60 &&
            ((i.t -= 60),
            (i.m = (i.m + 1) % 60),
            i.m === 0 && (i.h = (i.h % 12) + 1),
            m()));
      },
    }
  );
}
const j0 = Math.PI,
  V0 = 20.4,
  Mt = [
    { id: "W4", x0: 2.4, x1: 4.4 },
    { id: "W5", x0: 7.6, x1: 9.6 },
  ];
function Se(a) {
  const e = new _0(1, 1, 44, 64),
    o = e.attributes.position,
    s = e.attributes.uv,
    n = a.rng,
    l = n() * 6.28,
    p = n() * 6.28,
    d = [];
  for (let c = 0; c <= 44; c++) d.push(a.ragged ? n() * a.ragged : 0);
  for (let c = 0; c < o.count; c++) {
    const u = o.getX(c) + 0.5,
      b = 0.5 - o.getY(c),
      k = Math.round(u * 44),
      S = a.top ? a.top(u) : a.yTop,
      h = a.length - (a.shorten ? a.shorten(u) : 0) - d[k] * (b > 0.98 ? 1 : 0);
    let y = S - b * h,
      C;
    if (a.tieV != null) {
      const M = a.tieV;
      if (b < M) {
        const v = b / M;
        C = a.wTop + (a.wTie - a.wTop) * (v * v * (3 - 2 * v));
      } else {
        const v = (b - M) / (1 - M);
        C = a.wTie + (a.wBot - a.wTie) * Math.sqrt(v);
      }
    } else C = a.wTop + (a.wBot - a.wTop) * b;
    const z = a.xOut + a.dir * u * C,
      w = Math.sqrt(a.wTop / Math.max(C, 0.05)),
      f = a.tieV != null ? 1 - 0.6 * Math.exp(-((b - a.tieV) ** 2) / 0.002) : 1,
      i =
        Math.sin(u * a.folds * j0 * 2 + l + b * 1.3) * 0.7 +
        Math.sin(u * a.folds * j0 * 4.3 + p) * 0.3;
    let m = a.z - a.amp * w * f * (0.55 + 0.45 * i) * (0.6 + 0.4 * b);
    if (y < 0.012) {
      const M = 0.012 - y;
      ((y = 0.012 + Math.min(M, 0.03) * 0.4), (m -= Math.min(M, 0.3) * 0.8));
    }
    (o.setXYZ(c, z, y, m), s.setXY(c, u * a.wTop * 1.6, (S - b * h) * 1));
  }
  return (e.computeVertexNormals(), e);
}
