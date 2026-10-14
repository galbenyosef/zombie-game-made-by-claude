// assets/park-CwBfNU5l 12 — push
// Lines 3402-3560 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
function Ba() {
  const e = [],
    a = [];
  (e.push(
    g0(
      [
        [0.001, 0],
        [0.21, 0],
        [0.21, 0.07],
        [0.18, 0.1],
        [0.18, 0.22],
        [0.15, 0.26],
        [0.165, 0.34],
        [0.13, 0.44],
        [0.105, 0.55],
        [0.095, 0.66],
        [0.001, 0.66],
      ],
      16,
    ),
  ),
    e.push(Ja(0.078, 0.06, 0.64, 3.18, 8, 24, 6)),
    e.push(
      g0(
        [
          [0.001, 3.14],
          [0.085, 3.16],
          [0.1, 3.2],
          [0.08, 3.25],
          [0.07, 3.33],
          [0.09, 3.38],
          [0.06, 3.44],
          [0.05, 3.56],
          [0.001, 3.56],
        ],
        12,
      ),
    ),
    e.push(
      new It(0.018, 0.018, 0.66, 8).rotateZ(Math.PI / 2).translate(0, 3.3, 0),
    ));
  for (const f of [-1, 1])
    e.push(new z0(0.035, 8, 6).translate(f * 0.34, 3.3, 0));
  const t = 3.56,
    r = 4.02,
    o = 0.1,
    n = 0.19;
  e.push(new xt(0.24, 0.035, 0.24).translate(0, t, 0));
  for (const [f, w] of [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ])
    e.push(Ht(I(f * o, t, w * o), I(f * n, r, w * n), 0.012, 0.012, 4));
  (e.push(new xt(0.42, 0.03, 0.42).translate(0, r + 0.015, 0)),
    e.push(
      new he(0.3, 0.2, 4, 1).rotateY(Math.PI / 4).translate(0, r + 0.13, 0),
    ),
    e.push(new It(0.035, 0.05, 0.08, 8).translate(0, r + 0.27, 0)),
    e.push(new z0(0.04, 8, 6).translate(0, r + 0.33, 0)),
    e.push(new he(0.015, 0.1, 6).translate(0, r + 0.41, 0)),
    a.push(
      new It(n * 1.36, o * 1.36, r - t - 0.02, 4, 1, !0)
        .rotateY(Math.PI / 4)
        .translate(0, (t + r) / 2, 0),
    ));
  const i = new It(0.035, 0.035, 0.22, 8).translate(0, (t + r) / 2 + 0.02, 0);
  return { iron: e, glass: a, bulb: i, glassY: (t + r) / 2 };
}
function to() {
  const e = [],
    a = [];
  for (const t of [-0.8, 0.8]) {
    const r = (o, n) => I(t, n, o);
    (e.push(
      k0([r(0.27, 0), r(0.255, 0.22), r(0.24, 0.44)], [0.024, 0.022, 0.02], 5),
    ),
      e.push(
        k0(
          [
            r(-0.22, 0),
            r(-0.2, 0.24),
            r(-0.2, 0.44),
            r(-0.25, 0.62),
            r(-0.33, 0.86),
          ],
          [0.024, 0.022, 0.021, 0.02, 0.018],
          5,
        ),
      ),
      e.push(
        k0(
          [r(0.28, 0.43), r(0.02, 0.445), r(-0.22, 0.43)],
          [0.018, 0.018, 0.018],
          4,
        ),
      ),
      e.push(
        k0(
          [
            r(-0.25, 0.62),
            r(0, 0.645),
            r(0.21, 0.635),
            r(0.3, 0.6),
            r(0.31, 0.545),
            r(0.27, 0.52),
            r(0.245, 0.55),
          ],
          [0.018, 0.018, 0.017, 0.016, 0.015, 0.014, 0.013],
          5,
        ),
      ));
    for (const o of [0.27, -0.22])
      e.push(new It(0.035, 0.04, 0.025, 8).translate(t, 0.012, o));
  }
  for (let t = 0; t < 4; t++)
    a.push(
      Xt(1.86, 0.028, 0.078, 0.008).translate(0, 0.462, -0.165 + t * 0.122),
    );
  for (let t = 0; t < 3; t++) {
    const r = 0.56 + t * 0.12,
      o = -0.21 + (r - 0.44) * (-0.13 / 0.42) - 0.02;
    a.push(Xt(1.86, 0.075, 0.026, 0.008).rotateX(-0.3).translate(0, r, o));
  }
  return { iron: e, wood: a };
}
function eo() {
  const e = [],
    a = [];
  e.push(
    g0(
      [
        [0.001, 0],
        [0.17, 0],
        [0.17, 0.08],
        [0.2, 0.12],
        [0.2, 0.78],
        [0.225, 0.8],
        [0.225, 0.86],
        [0.19, 0.87],
        [0.19, 0.8],
      ],
      16,
    ),
  );
  for (let t = 0; t < 10; t++) {
    const r = (t / 10) * f0;
    e.push(
      new xt(0.03, 0.6, 0.02)
        .translate(Math.sin(r) * 0.206, 0.45, Math.cos(r) * 0.206)
        .rotateY(0),
    );
  }
  return (
    a.push(new It(0.188, 0.188, 0.02, 16).translate(0, 0.76, 0)),
    { iron: e, dark: a }
  );
}
