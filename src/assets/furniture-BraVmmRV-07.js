// assets/furniture-BraVmmRV 07 — add
// Lines 2284-2384 of readable/assets/furniture-BraVmmRV.pretty.js (statement-aligned).
function X0(z, t, k, o, d, i, f, Y, n = [0.55, 0.5, 0.42]) {
  const s = new St(i, i, f * 0.84, 24, 1, !0);
  (s.translate(0, f * 0.5, 0),
    $0(s, Y),
    s.translate(k, o, d),
    z.add(s, t.labels));
  const c = H(
      [
        [i * 0.98, 0],
        [i * 1.03, 0.004],
        [i * 1.02, f * 0.08],
        [i, f * 0.085],
      ],
      k,
      o,
      d,
      { segs: 24 },
    ),
    r = H(
      [
        [i, f * 0.915],
        [i * 1.02, f * 0.92],
        [i * 1.03, f - 0.004],
        [i * 0.94, f],
        [0, f - 0.002],
      ],
      k,
      o,
      d,
      { segs: 24 },
    );
  (Q(c, n), Q(r, n), z.add(c, t.misc), z.add(r, t.misc));
}
function H0(z, t, k, o, d, i, f, Y, n, s, c, r = "tin") {
  k.push(
    H(
      [
        [0, 0],
        [f * 0.92, 0],
        [f, f * 0.25],
        [f, Y * 0.82],
        [f * 0.8, Y * 0.9],
        [f * 0.78, Y],
        [0, Y],
      ],
      o,
      d,
      i,
      { segs: 24 },
    ),
  );
  const y = H(
    [
      [0, 0.004],
      [f * 0.93, 0.004],
      [f * 0.95, Y * 0.82 * s],
      [0, Y * 0.82 * s],
    ],
    o,
    d,
    i,
    { segs: 18 },
  );
  if ((Q(y, n), z.add(y, t.misc, { cast: !1 }), c)) {
    const l = new St(f * 1.01, f * 1.01, Y * 0.34, 18, 1, !0, -0.9, 1.8);
    (l.translate(0, Y * 0.45, 0),
      $0(l, c),
      l.translate(o, d, i),
      z.add(l, t.labels, { cast: !1 }));
  }
  if (r === "tin") {
    const l = H(
      [
        [0, Y + 0.012],
        [f * 0.84, Y + 0.012],
        [f * 0.86, Y - 0.012],
        [f * 0.83, Y - 0.012],
      ],
      o,
      d,
      i,
      { segs: 18 },
    );
    (Q(l, [0.5, 0.46, 0.38]), z.add(l, t.misc));
  } else {
    const l = H(
      [
        [0, Y + 0.012],
        [f * 0.7, Y + 0.008],
        [f * 0.92, Y - 0.01],
        [f * 0.95, Y - 0.03],
        [f * 0.9, Y - 0.032],
      ],
      o,
      d,
      i,
      { segs: 18 },
    );
    (Q(l, r), z.add(l, t.woolV, { cast: !1 }));
  }
}
