// assets__index-DQDjAbEY 15 — add
// Lines 4344-4579 of readable/assets__index-DQDjAbEY.pretty.js (statement-aligned).
function Va(e) {
  for (const [l, a] of [
    [1, _.DOOR_FL],
    [-1, _.DOOR_FR],
  ]) {
    const n = [];
    for (let p = 0; p <= 8; p++) {
      const m = x0(1.15, 2.1, p / 8);
      n.push(h(l * (_0(m, 1.06) - S0 - 0.03), 1.06, m));
    }
    e.add(
      v0(n, [0.03, 0.022], 10, { cap0: !0, cap1: !0 }),
      null,
      R.plasticGrey,
      { part: a },
    );
    const c = 1.25,
      i = l * (_0(c, 1) - S0 - 0.035);
    e.add(G(0.02, 0.025, 0.12, 0.006, 1), z(i, 1, c), R.chrome, { part: a });
    const d = 1.7,
      f = l * (_0(d, 0.9) - S0 - 0.02);
    e.add(G(0.03, 0.14, 0.32, 0.012, 1), z(f, 0.9, d), R.fabric, { part: a });
  }
  for (const [l, a] of [
    [1, _.DOOR_RL],
    [-1, _.DOOR_RR],
  ]) {
    const s = l * (_0(0.6, 1.15) - S0 - 0.03);
    e.add(
      v0(
        [
          h(s, 1.15 - 0.1, 0.6),
          h(s - l * 0.025, 1.15 - 0.1, 0.6),
          h(s - l * 0.025, 1.15 + 0.1, 0.6),
          h(s, 1.15 + 0.1, 0.6),
        ],
        0.01,
        8,
      ),
      null,
      R.chrome,
      { part: a },
    );
  }
  for (const l of [1, -1]) {
    const o = l * (_0(0.96, 1.6) - S0 - 0.03);
    e.add(
      v0(
        fe(
          [
            h(o, 1.35, 0.96),
            h(o - l * 0.04, 1.38, 0.96),
            h(o - l * 0.04, 1.75, 0.96),
            h(o, 1.78, 0.96),
          ],
          0.03,
          3,
        ),
        0.012,
        8,
      ),
      null,
      R.plastic,
    );
  }
}
function qa(e) {
  const l = Z({
      col: "#2c3524",
      rough: 0.55,
      clear: 0.2,
      kind: Q.PAINT,
      scuff: 0.4,
    }),
    a = 0.93,
    o = 1.83,
    t = _0(a, o) - S0 - 0.035;
  e.add(
    v0(
      fe(
        [h(t + 0.03, o, a), h(t - 0.01, o, a), h(t - 0.01, o + 0.025, a)],
        0.01,
        3,
      ),
      0.004,
      6,
    ),
    null,
    R.steel,
  );
  const s = h(t - 0.02, o - 0.005, a),
    n = new Z0(0.085, 0.009, 8, 22, Math.PI);
  e.add(
    n,
    z(s.x - 0.004, s.y - 0.085, s.z, 0, Math.PI / 2 + 0.25, 0),
    R.plastic,
  );
  for (const p of [1, -1]) {
    const m = h(s.x - 0.012, s.y - 0.17, s.z + p * 0.083);
    (e.add(
      W0(
        [
          [0, -0.028],
          [0.045, -0.028],
          [0.05, -0.012],
          [0.05, 0.012],
          [0.044, 0.028],
          [0, 0.028],
        ],
        18,
      ),
      z(m.x, m.y, m.z, Math.PI / 2, 0, 0.2),
      l,
    ),
      e.add(
        new Z0(0.038, 0.011, 8, 18),
        z(m.x, m.y, m.z - p * 0.03, 0, 0, 0.2),
        R.leather,
      ));
  }
  (e.add(
    v0(
      we(
        [
          h(s.x - 0.012, s.y - 0.17, s.z + 0.083),
          h(s.x - 0.03, s.y - 0.2, s.z + 0.15),
          h(s.x - 0.06, s.y - 0.16, s.z + 0.19),
        ],
        10,
      ),
      0.004,
      5,
    ),
    null,
    R.dark,
  ),
    e.add(
      new ue(0.013, 10, 8),
      z(s.x - 0.06, s.y - 0.16, s.z + 0.195),
      R.fabric,
    ),
    e.add(
      v0(
        we(
          [
            h(s.x - 0.012, s.y - 0.2, s.z - 0.083),
            h(s.x - 0.02, s.y - 0.45, s.z - 0.1),
            h(s.x - 0.05, s.y - 0.6, s.z - 0.02),
            h(s.x - 0.08, s.y - 0.68, s.z + 0.08),
          ],
          18,
        ),
        0.0035,
        5,
      ),
      null,
      R.dark,
    ));
  const c = -0.4,
    i = 2.58,
    d =
      1.535 - 0.04 * ((i - 2.322) / 0.6) - 0.03 * (c / t0.panel.x) ** 2 + 0.006;
  e.add(
    G(0.23, 0.006, 0.31, 0.003, 1),
    z(c, d, i, -0.06, 0.35, 0),
    R.plasticGrey,
  );
  const f = Fe.manifest || [0, 0, 1, 1];
  (e.add(
    new de(0.21, 0.27),
    z(c, d + 0.0045, i + 0.012, -Math.PI / 2 - 0.06, 0, -0.35 + Math.PI),
    R.paper,
    { uv: (p, m, x, w) => [x0(f[0], f[2], x), x0(f[1], f[3], w)] },
  ),
    e.add(
      G(0.12, 0.012, 0.03, 0.003, 1),
      z(c + 0.03, d + 0.008, i - 0.13, -0.06, 0.35, 0),
      R.chrome,
    ),
    e.add(
      g0(
        h(c - 0.05, d + 0.008, i - 0.02),
        h(c + 0.07, d + 0.008, i + 0.06),
        0.004,
        6,
        !0,
      ),
      null,
      R.dark,
    ));
}
function Wa(e) {
  for (const a of [-1.5, -0.4, 0.6]) {
    const o = he(0, a) - S0;
    (e.add(
      W0(
        [
          [0.07, 0],
          [0.068, -0.012],
          [0, -0.016],
        ],
        20,
      ),
      z(0, o - 0.002, a),
      R.plastic,
    ),
      e.add(
        new ue(0.055, 18, 6, 0, Math.PI * 2, Math.PI * 0.65, Math.PI * 0.35),
        z(0, o + 0.03, a),
        R.lens,
        { wear: () => [f0.CABIN, 0, 0, 0] },
      ));
  }
  const l = he(0.2, -0.8) - S0 - 0.03;
  e.add(G(0.03, 0.02, 2.2, 0.004, 1), z(0.2, l, -0.85), R.alu);
  for (const a of [-1.7, -1.1, -0.3])
    e.add(
      new Z0(0.018, 0.004, 6, 14, Math.PI * 1.4),
      z(0.2, l - 0.03, a, 0, Math.PI / 2, Math.PI * 0.8),
      R.chrome,
    );
  for (const [a, o] of [
    [0.3, 1],
    [-0.3, 1],
    [0.4, -1.2],
    [-0.4, -1.2],
  ]) {
    const t = he(a, o) - S0;
    (e.add(new ue(0.02, 12, 8), z(a, t - 0.012, o), R.chrome),
      e.add(
        new Z0(0.024, 0.006, 6, 16),
        z(a, t - 0.006, o, Math.PI / 2),
        R.plastic,
      ));
  }
}
