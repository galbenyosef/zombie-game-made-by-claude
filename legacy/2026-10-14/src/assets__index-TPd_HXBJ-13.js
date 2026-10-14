// assets__index-TPd_HXBJ 13 — add
// Lines 3968-4269 of readable/assets__index-TPd_HXBJ.pretty.js (statement-aligned).
function ya(t, e, o) {
  (t.add(
    d0(b(e - o * 0.5, 0.76, 0), b(e + o * 0.08, 0.76, 0), 0.06, 12),
    null,
    g.underG,
  ),
    t.add(
      U(
        e + o * 0.06,
        0.76 - 0.12,
        -0.15,
        e + o * 0.22,
        0.76 + 0.12,
        0.15,
        0.02,
      ),
      null,
      g.underG,
    ),
    t.add(
      d0(
        b(e + o * 0.22, 0.76 + 0.03, -0.07),
        b(e + o * 0.3, 0.76 + 0.03, -0.07),
        [0.035, 0.02],
        10,
      ),
      null,
      g.underG,
    ),
    t.add(
      U(
        e + o * 0.215,
        0.76 - 0.08,
        0.02,
        e + o * 0.225,
        0.76 + 0.1,
        0.13,
        0.004,
      ),
      null,
      g.black,
    ),
    t.add(
      U(e + o * 0.06, 0.76 + 0.12, -0.12, e + o * 0.2, 0.76 + 0.2, 0.12, 0.01),
      null,
      g.black,
    ));
}
function va(t, e) {
  t.add(
    h0(
      [-8.8, 0.93, -1.33],
      [h.HL, 0.93, -1.33],
      [h.HL, 0.93, 1.33],
      [-8.8, 0.93, 1.33],
    ),
    null,
    g.under,
    { uv: (n) => [n.x, n.z] },
  );
  const o = [
    [-4.9, -2.6, 0.42, 1.12, "inv"],
    [-2.4, -1, 0.5, 1.08, "bat"],
    [-0.8, 1.6, 0.38, 1.14, "inv"],
    [1.8, 2.9, 0.55, 1, "comp"],
    [3.1, 4.9, 0.45, 1.1, "res"],
  ];
  for (const n of [1, -1]) {
    for (const [a, l, r, p, f] of o) {
      const c = n > 0 ? 0.25 : -p,
        d = n > 0 ? p : -0.25,
        i = n > 0 ? a : -l,
        s = n > 0 ? l : -a;
      if ((t.add(U(i, r, c, s, 0.93, d, 0.02), null, g.underG), f === "res"))
        t.add(
          s0(
            i + 0.06,
            r + 0.04,
            n > 0 ? d : c - 0.006,
            s - 0.06,
            0.88,
            n > 0 ? d + 0.006 : c,
          ),
          null,
          g.slotsExt,
        );
      else
        for (const m of [i + 0.15, s - 0.15])
          t.add(
            s0(
              m - 0.01,
              r + 0.05,
              n > 0 ? d - 0.003 : c - 0.005,
              m + 0.01,
              0.9,
              n > 0 ? d + 0.005 : c + 0.003,
            ),
            null,
            g.under,
          );
    }
    t.add(
      d0(b(-4.6, 0.72, n * 0.1), b(-2.8, 0.72, n * 0.1), 0.13, 14),
      null,
      g.underG,
    );
  }
}
function wa() {
  const t = new M0("bogie"),
    e = h.wheelR,
    o = h.axle,
    n = _({ col: "#555555", rough: 0.5, metal: 0.8, kind: O.WHEEL });
  for (const [a, l] of [
    [o, 5],
    [-o, 6],
  ]) {
    for (const r of [1, -1]) {
      const p = r * 0.7175,
        f = [
          [0.1, -0.075],
          [0.3, -0.05],
          [0.36, -0.065],
          [e + 0.03, -0.06],
          [e + 0.03, -0.042],
          [e, -0.035],
          [e - 0.004, 0.065],
          [0.36, 0.06],
          [0.3, 0.035],
          [0.1, 0.07],
        ],
        c = L0(
          f.map(([d, i]) => [d, r > 0 ? i : -i]),
          24,
        );
      (c.rotateX(Math.PI / 2),
        c.translate(a, e, p),
        t.add(c, null, n, { anim: l }));
    }
    t.add(d0(b(a, e, -1.06), b(a, e, 1.06), 0.075, 8), null, g.underG, {
      anim: l,
    });
    for (const r of [1, -1]) {
      t.add(
        s0(a - 0.14, e - 0.13, r * 0.98, a + 0.14, e + 0.13, r * 1.18),
        null,
        g.underG,
      );
      for (const p of [-0.17, 0.17])
        t.add(
          s0(
            a + p - 0.05,
            e + 0.06,
            r * 0.99,
            a + p + 0.05,
            e + 0.22,
            r * 1.17,
          ),
          null,
          g.rubber,
        );
    }
  }
  for (const a of [1, -1]) {
    const l = a * 1.08,
      r = [
        [-1.42, 0.68],
        [-1.05, 0.74],
        [-0.55, 0.6],
        [0.55, 0.6],
        [1.05, 0.74],
        [1.42, 0.68],
      ];
    for (let p = 0; p < r.length - 1; p++)
      t.add(
        s0(
          r[p][0],
          Math.min(r[p][1], r[p + 1][1]) - 0.06,
          l - 0.09,
          r[p + 1][0],
          Math.max(r[p][1], r[p + 1][1]) + 0.1,
          l + 0.09,
        ),
        null,
        g.under,
      );
    (t.add(
      L0(
        [
          [0, 0],
          [0.2, 0],
          [0.24, 0.05],
          [0.22, 0.12],
          [0.2, 0.16],
          [0, 0.16],
        ],
        12,
      ).applyMatrix4(J0(0, 0.7, l)),
      null,
      g.rubber,
    ),
      t.add(s0(-0.26, 0.86, l - 0.24, 0.26, 0.9, l + 0.24), null, g.underG));
    for (const p of [-1.35, 1.35])
      (t.add(
        s0(p - 0.06, 0.38, a * 1.12, p + 0.06, 0.62, a * 1.24),
        null,
        g.under,
      ),
        t.add(
          s0(p - 0.05, 0.2, a * 1.2, p + 0.05, 0.4, a * 1.34),
          null,
          g.under,
        ),
        t.add(
          s0(p - 0.16, 0.16, a * 1.3, p + 0.16, 0.2, a * 1.52),
          null,
          g.underG,
        ));
    t.add(
      d0(b(0.4, 0.42, l + a * 0.12), b(0.4, 0.86, l + a * 0.12), 0.035, 6),
      null,
      g.underG,
    );
    for (const p of [o, -o])
      t.add(
        s0(
          p - Math.sign(p) * 0.42 - 0.06,
          e - 0.1,
          a * 0.62,
          p - Math.sign(p) * 0.42 + 0.06,
          e + 0.12,
          a * 0.84,
        ),
        null,
        g.underG,
      );
  }
  for (const a of [-0.32, 0.32])
    t.add(s0(a - 0.09, 0.5, -1, a + 0.09, 0.66, 1), null, g.under);
  for (const [a, l] of [
    [0.62, 1],
    [-0.62, -1],
  ])
    (t.add(d0(b(a, 0.42, -0.45), b(a, 0.42, 0.45), 0.23, 12), null, g.underG),
      t.add(
        s0(a + l * 0.1, 0.25, 0.2, a + l * 0.32, 0.6, 0.48),
        null,
        g.underG,
      ));
  return (t.add(d0(b(0, 0.62, 0), b(0, 0.9, 0), 0.14, 10), null, g.underG), t);
}
function ka() {
  return { sec: y0(-0.72, 1, 0.72, 3.18, 0.22, 3), folds: 9, depth: 0.05 };
}
const qt = (t, e = 0, o = 1) => (t < e ? e : t > o ? o : t),
  V0 = (t, e, o) => {
    const n = qt((o - t) / (e - t));
    return n * n * (3 - 2 * n);
  },
  kt = (t, e, o, n) => t + (e - t) * (1 - Math.exp(-o * n));
function Sa(t) {
  const e = t.getChannelData(0),
    o = e.length,
    n = t.sampleRate;
  let a = 0;
  for (; a < o && Math.abs(e[a]) < 0.001;) a++;
  const l = Math.round(n * 0.03),
    r = Math.min(o - 1, a + Math.round(n * 0.04)),
    p = Math.round(n * 0.02);
  let f = 0;
  for (let s = 0; s < p; s++) f += e[r + s] * e[r + s];
  let c = -2,
    d = o - p - 1;
  for (
    let s = Math.max(r + p * 4, o - Math.round(n * 0.6));
    s < o - p - 1;
    s += 2
  ) {
    let m = 0,
      v = 0;
    for (let w = 0; w < p; w += 2)
      ((m += e[r + w] * e[s + w]), (v += e[s + w] * e[s + w]));
    const y = m / Math.sqrt(f * v * 0.5 + 1e-12);
    y > c && ((c = y), (d = s));
  }
  const i = new AudioBuffer({
    length: o,
    numberOfChannels: t.numberOfChannels,
    sampleRate: n,
  });
  for (let s = 0; s < t.numberOfChannels; s++) {
    const m = t.getChannelData(s),
      v = i.getChannelData(s);
    v.set(m);
    for (let y = 0; y < l; y++) {
      const w = Math.sin((((y + 0.5) / l) * Math.PI) / 2) ** 2;
      v[d - l + y] = m[d - l + y] * (1 - w) + m[r - l + y] * w;
    }
  }
  return { buf: i, start: r / n, end: d / n };
}
const Ma = ["train_run", "train_motor", "train_hum", "train_flange"];
