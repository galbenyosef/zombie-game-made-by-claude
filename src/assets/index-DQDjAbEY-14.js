// assets/index-DQDjAbEY 14 — add
// Lines 4016-4343 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
function Da(e, l) {
  const n = (v) => he(0, v) - S0,
    i = 0.8600000000000001,
    d = Math.atan2(2.06 - 2.035, i),
    f = n(1.65) - (2.035 + 2.06) / 2 + 0.03;
  e.add(
    G(0.25, f, i, 0.015, 1),
    new b0().makeRotationX(d).setPosition(0, (2.035 + 2.06) / 2 + f / 2, 1.65),
    R.panelPaint,
  );
  const p = new de(0.235, i - 0.12),
    m = new b0()
      .makeRotationX(Math.PI / 2 + d)
      .setPosition(0, (2.035 + 2.06) / 2 - 0.0015, 1.65 + 0.04),
    x = Fe.ovhPanel || [0, 0, 1, 1];
  e.add(p, m, R.decal, {
    uv: (v, u, g, P) => [x0(x[0], x[2], g), x0(x[1], x[3], 1 - P)],
  });
  const w = (v) => x0(2.035, 2.06, (v - 1.22) / i) - 0.002;
  for (let v = 0; v < 4; v++)
    for (let u = 0; u < 6; u++) {
      const g = (u - 2.5) * 0.038,
        P = 2.08 - 0.12 - v * 0.165 * 0.82 - 0.03,
        k = w(P),
        y = v === 1 && (u === 3 || u === 4);
      (e.add(new V0(0.006, 0.006, 0.004, 10), z(g, k - 0.002, P), R.chrome),
        e.add(
          g0(
            h(g, k - 0.003, P),
            h(g, k - 0.013, P + (v === 0 && u === 0 ? -0.004 : 0.004)),
            [0.0018, 0.0026],
            6,
            !0,
          ),
          null,
          R.knob,
        ),
        y && e.add(G(0.02, 0.016, 0.03, 0.002, 1), z(g, k - 0.012, P), R.red));
    }
  {
    const u = w(1.795) - 0.0012;
    l.quad(
      [
        h(0.115, u, 1.795 - 0.012),
        h(-0.115, u, 1.795 - 0.012),
        h(-0.115, u, 1.795 + 0.012),
        h(0.115, u, 1.795 + 0.012),
      ],
      9,
    );
  }
  for (const [v, u] of [
    [0.045, _.THR_1],
    [-0.045, _.THR_2],
  ]) {
    const g = 1.3399999999999999,
      P = w(g);
    (e.add(G(0.012, 0.004, 0.16, 0.001, 1), z(v, P - 0.0015, g + 0.02), R.dark),
      e.add(
        g0(h(v, P, g), h(v, P - 0.06, g - 0.01), 0.005, 8),
        null,
        R.chrome,
        { part: u },
      ),
      e.add(
        G(0.05, 0.018, 0.022, 0.006, 1),
        z(v, P - 0.068, g - 0.012),
        (v > 0, R.yellow),
        { part: u },
      ));
  }
  for (const v of [0.06, -0.06]) {
    const u = 2.0500000000000003,
      g = w(u);
    (e.add(g0(h(v, g, u), h(v, g - 0.03, u), 0.004, 6), null, R.chrome),
      e.add(G(0.04, 0.012, 0.016, 0.004, 1), z(v, g - 0.035, u), R.red));
  }
}
function Ba(e) {
  const l = [];
  for (let o = 0; o <= 10; o++) {
    const t = x0(2.08, 2.95, o / 10),
      s = he(0, t) - S0 - 0.012;
    s > 1.52 && l.push(h(0, s, t));
  }
  l.length > 2 &&
    e.add(
      v0(l, [0.026, 0.03], 10, { up: h(1, 0, 0), cap0: !0, cap1: !0 }),
      null,
      R.plastic,
    );
  const a = l[Math.min(2, l.length - 1)] || h(0, 2.1, 2.25);
  (e.add(
    G(0.07, 0.06, 0.06, 0.012, 1),
    z(0, a.y - 0.06, a.z - 0.02),
    R.plastic,
  ),
    e.add(
      new Ne(0.022, 20),
      z(0, a.y - 0.06, a.z - 0.051, 0, Math.PI),
      R.decal,
    ),
    e.add(
      g0(h(0, a.y - 0.03, a.z - 0.02), h(0, a.y, a.z), 0.006, 6),
      null,
      R.dark,
    ));
}
function Ga(e, l, a) {
  const o = l * t0.seatX,
    t = t0.seatZ,
    s = t0.seatTop,
    n = t0.floorY;
  for (const m of [-0.2, 0.2])
    (e.add(
      g0(h(o + m, n + 0.01, t + 0.2), h(o + m, s - 0.08, t + 0.2), 0.016, 10),
      null,
      R.alu,
    ),
      e.add(
        g0(
          h(o + m, n + 0.01, t - 0.18),
          h(o + m, s - 0.08, t - 0.16),
          0.016,
          10,
        ),
        null,
        R.alu,
      ),
      e.add(G(0.03, 0.045, 0.5, 0.008, 1), z(o + m, s - 0.08, t + 0.02), R.alu),
      e.add(
        g0(
          h(o + m * 0.8, s - 0.05, t - 0.26),
          h(o + m * 0.8, 1.85, t - 0.43),
          0.022,
          12,
        ),
        null,
        R.dark,
      ));
  (e.add(G(0.47, 0.05, 0.5, 0.02, 1), z(o, s - 0.07, t + 0.02), R.plasticGrey),
    e.add(
      G(0.3, 0.07, 0.46, 0.03, 2),
      z(o, s - 0.035, t + 0.04, -3 * Ye),
      R.leather,
      { wear: () => [0.3, 0.6, 0, 0.1] },
    ));
  for (const m of [-0.19, 0.19])
    e.add(
      G(0.09, 0.1, 0.47, 0.04, 2),
      z(o + m, s - 0.02, t + 0.04, -3 * Ye),
      R.leather,
      { wear: () => [0.3, 0.8, 0, 0.1] },
    );
  const c = 14 * Ye,
    i = h(o, s + 0.02, t - 0.2),
    d = (m, x = 0, w = 0) =>
      z(
        o + w,
        i.y + Math.cos(c) * m + Math.sin(c) * x,
        i.z - Math.sin(c) * m + Math.cos(c) * x,
        -c,
      );
  e.add(G(0.3, 0.66, 0.08, 0.03, 2), d(0.33), R.leather, {
    wear: () => [0.3, 0.5, 0, 0.1],
  });
  for (const m of [-0.19, 0.19])
    e.add(G(0.09, 0.62, 0.12, 0.04, 2), d(0.33, 0.02, m), R.leather, {
      wear: () => [0.3, 0.7, 0, 0.1],
    });
  (e.add(G(0.46, 0.68, 0.04, 0.012, 1), d(0.34, -0.07), R.plasticGrey),
    e.add(G(0.26, 0.16, 0.09, 0.04, 2), d(0.79, 0), R.leather));
  for (const m of [-0.07, 0.07])
    e.add(g0(h(0, 0, 0), h(0, 0.08, 0), 0.007, 6), d(0.68, 0, m), R.chrome);
  const f = (m) => h(o + m, i.y + Math.cos(c) * 0.68, i.z - Math.sin(c) * 0.68),
    p = (m, x, w = 0.045) => {
      const v = x.clone().sub(m),
        u = v.length(),
        g = new pt(w, 0.003, u),
        P = new b0().lookAt(m, x, h(0, 1, 0));
      return (P.setPosition(m.clone().add(x).multiplyScalar(0.5)), [g, P]);
    };
  for (const m of [-0.075, 0.075]) {
    const x = f(m).add(h(0, 0.01, -0.06)),
      w = f(m).add(h(0, 0.015, 0.05)),
      v = h(o + m * 1.4, s + 0.3, t - 0.12),
      u = h(o + m * 2.6, s + 0.04, t + 0.08),
      g = h(o + m * 3.3, s - 0.18, t + 0.12),
      P = we([x, w, v, u, g], 16);
    for (let k = 0; k < P.length - 1; k++) {
      const [y, M] = p(P[k], P[k + 1]);
      e.add(y, M, R.web, { uv: (F, A, W, N) => [W * 0.05, N * 0.2] });
    }
  }
  for (const m of [-0.25, 0.25]) {
    const x = we(
      [
        h(o + m, s - 0.06, t - 0.15),
        h(o + m * 1.04, s + 0.01, t + 0),
        h(o + m * 1.08, s - 0.1, t + 0.12),
        h(o + m * 1.1, s - 0.28, t + 0.1),
      ],
      10,
    );
    for (let w = 0; w < x.length - 1; w++) {
      const [v, u] = p(x[w], x[w + 1], 0.048);
      e.add(v, u, R.web);
    }
  }
  e.add(
    new V0(0.035, 0.035, 0.018, 20),
    z(o - l * 0.17, s + 0.012, t + 0.18, 0.3, 0, 0.2),
    R.chrome,
  );
}
const re = {};
function Ua(e) {
  for (const [l, a, o, t, s] of [
    [1, _.CYC_L, _.COL_L, _.PED_LL, _.PED_LR],
    [-1, _.CYC_R, _.COL_R, _.PED_RL, _.PED_RR],
  ]) {
    const n = l * t0.seatX,
      c = h(n, t0.floorY + 0.03, t0.cycBase),
      i = h(n, t0.cycTop - 0.08, t0.cycBase + 0.05),
      d = h(n, t0.cycTop + 0.07, t0.cycBase + 0.085);
    (e.add(
      W0(
        [
          [0.06, 0],
          [0.058, 0.02],
          [0.045, 0.05],
          [0.03, 0.09],
          [0.022, 0.12],
          [0, 0.12],
        ],
        20,
      ),
      z(c.x, t0.floorY, c.z),
      R.rubber,
      { part: a },
    ),
      e.add(
        v0(we([c, h(n, 0.95, t0.cycBase + 0.01), i], 10), 0.0115, 10),
        null,
        R.dark,
        { part: a },
      ),
      e.add(
        v0(
          we([i, h(n, t0.cycTop, t0.cycBase + 0.07), d], 8),
          (w) => 0.019 + 0.006 * Math.sin(w * Math.PI),
          14,
          { cap1: !0 },
        ),
        null,
        R.plastic,
        { part: a },
      ),
      e.add(
        G(0.018, 0.01, 0.018, 0.004, 1),
        z(n, d.y + 0.008, d.z + 0.01),
        R.button,
        { part: a },
      ),
      e.add(
        G(0.012, 0.02, 0.01, 0.003, 1),
        z(n, d.y - 0.04, d.z + 0.018),
        R.button,
        { part: a },
      ),
      (re["cyc" + l] = {
        part: a,
        pivot: c.clone().setY(t0.floorY + 0.06),
        grip: h(n, t0.cycTop, t0.cycBase + 0.07),
      }));
    const f = n + 0.27,
      p = h(f, t0.colPivot.y, t0.colPivot.z),
      m = h(f, 0.9, 1.62),
      x = h(f, 0.925, 1.78);
    (e.add(G(0.07, 0.07, 0.12, 0.01, 1), z(f, p.y - 0.03, p.z), R.dark),
      e.add(v0([p, m], 0.016, 10, { cap0: !0 }), null, R.dark, { part: o }),
      e.add(v0([m, x], 0.022, 14), null, R.plastic, { part: o }),
      e.add(
        G(0.06, 0.05, 0.08, 0.008, 1),
        z(f, x.y + 0.01, x.z + 0.045),
        R.plastic,
        { part: o },
      ));
    for (let w = 0; w < 3; w++)
      e.add(
        G(0.008, 0.008, 0.008, 0.002, 1),
        z(f - 0.016 + w * 0.016, x.y + 0.038, x.z + 0.05),
        R.button,
        { part: o },
      );
    re["col" + l] = {
      part: o,
      pivot: p.clone(),
      grip: m.clone().lerp(x, 0.55),
    };
    for (const [w, v] of [
      [0.12, t],
      [-0.12, s],
    ]) {
      const u = n + w,
        g = h(u, t0.floorY + 0.03, 2.4),
        P = h(u, t0.pedY, t0.pedZ);
      (e.add(v0([g, P], 0.012, 8, { cap1: !0 }), null, R.alu, { part: v }),
        e.add(
          G(0.085, 0.14, 0.016, 0.006, 1),
          z(u, t0.pedY + 0.02, t0.pedZ + 0.005, -0.55),
          R.alu,
          { part: v },
        ));
      for (let k = 0; k < 4; k++)
        e.add(
          G(0.07, 0.006, 0.006, 0.002, 1),
          z(u, t0.pedY - 0.03 + k * 0.03, t0.pedZ - 0.02 + k * 0.016, -0.55),
          R.rubber,
          { part: v },
        );
      re["ped" + l + (w > 0 ? "L" : "R")] = {
        part: v,
        pos: h(u, t0.pedY + 0.03, t0.pedZ - 0.01),
      };
    }
  }
}
