// assets/furniture-BraVmmRV 06 — add
// Lines 1951-2283 of readable/assets/furniture-BraVmmRV.pretty.js (statement-aligned).
function fo(z, t, k, o, d) {
  const i = new R0();
  i.name = "house_table";
  const f = k,
    Y = C0(31),
    n = z.rng(515),
    { cx: s, cz: c, hx: r, hz: y, top: l } = so,
    N = (2 * y - 0.006) / 3;
  for (let W = 0; W < 3; W++) {
    const R = c - y + W * (N + 0.003);
    f.add(
      Z(
        s - r,
        l - 0.042,
        R,
        s + r,
        l - (W === 1 ? 0.001 : 0),
        R + N,
        0.008,
        "x",
        2,
      ),
      t.wood,
    );
  }
  for (const W of [-1, 1])
    for (const R of [-1, 1])
      f.add(
        Z(
          s + W * (r - 0.1) - 0.03,
          0,
          c + R * (y - 0.08) - 0.03,
          s + W * (r - 0.1) + 0.03,
          l - 0.04,
          c + R * (y - 0.08) + 0.03,
          0.006,
          "y",
        ),
        t.wood,
      );
  for (const W of [-1, 1])
    f.add(
      Z(
        s - r + 0.1,
        l - 0.14,
        c + W * (y - 0.08) - 0.011,
        s + r - 0.1,
        l - 0.042,
        c + W * (y - 0.08) + 0.011,
        0.004,
        "x",
      ),
      t.wood,
    );
  for (const W of [-1, 1])
    f.add(
      Z(
        s + W * (r - 0.1) - 0.011,
        l - 0.14,
        c - y + 0.08,
        s + W * (r - 0.1) + 0.011,
        l - 0.042,
        c + y - 0.08,
        0.004,
        "z",
      ),
      t.wood,
    );
  const b = [s - 0.3, c - y - 0.22, 0.04],
    A = [s + 0.34, c + y + 0.4, Math.PI + 0.42];
  (pt(f, t, b[0], b[1], b[2]),
    pt(f, t, A[0], A[1], A[2]),
    pt(f, t, xt.x, xt.z, xt.yaw));
  const P = l,
    w = [5, 203.14];
  o.add(
    H(
      [
        [0, 0],
        [0.06, 0],
        [0.075, 0.004],
        [0.11, 0.012],
        [0.118, 0.018],
        [0.112, 0.019],
        [0.07, 0.01],
        [0, 0.009],
      ],
      w[0],
      P,
      w[1],
      { segs: 36 },
    ),
    t.enamelV,
  );
  {
    const W = Q0(0, 0, 0, 0.07, 18, 12, [1.25, 0.62, 0.9]),
      R = W.attributes.position;
    for (let h = 0; h < R.count; h++)
      (R.getX(h) > 0.035 && R.setX(h, 0.035 + (R.getX(h) - 0.035) * 0.1),
        R.getY(h) < -0.01 && R.setY(h, -0.01));
    (W.computeVertexNormals(),
      T(W, (h, g, M, u) => (u > 0.8 ? [0.9, 0.78, 0.55] : [0.55, 0.3, 0.13])),
      W.rotateY(0.6),
      W.translate(w[0] - 0.01, P + 0.03, w[1] + 0.01),
      o.add(W, t.food));
    for (let h = 0; h < 7; h++) {
      const g = Q0(
        w[0] + (n() - 0.5) * 0.2,
        P + 0.013,
        w[1] + (n() - 0.5) * 0.18,
        0.004 + n() * 0.003,
        5,
        4,
      );
      (Q(g, [0.6, 0.4, 0.2]), o.add(g, t.food, { cast: !1 }));
    }
    new R0();
    const a = Z(0, -0.0012, -0.011, 0.13, 0.0012, 0.011, 0.001, "x");
    o.add(
      a.applyMatrix4(
        p0([w[0] + 0.02, P + 0.02, w[1] - 0.07], [0, -0.35, 0.05]),
      ),
      t.iron,
      { cast: !1 },
    );
    const e = Z(-0.09, -0.008, -0.012, 0, 0.008, 0.012, 0.005, "x");
    (Q(e, [0.3, 0.2, 0.13]),
      o.add(
        e.applyMatrix4(
          p0([w[0] + 0.02, P + 0.02, w[1] - 0.07], [0, -0.35, 0.05]),
        ),
        t.misc,
        { cast: !1 },
      ));
  }
  const E = [4.8, 203.46];
  o.add(
    H(
      [
        [0, 0],
        [0.035, 0],
        [0.04, 0.006],
        [0.07, 0.035],
        [0.078, 0.06],
        [0.074, 0.062],
        [0.066, 0.038],
        [0.034, 0.012],
        [0, 0.011],
      ],
      E[0],
      P,
      E[1],
      { segs: 32 },
    ).applyMatrix4(new F0()),
    t.enamelV,
  );
  {
    const W = H(
      [
        [0, 0.03],
        [0.05, 0.03],
        [0.062, 0.036],
        [0, 0.036],
      ],
      E[0],
      P,
      E[1],
      { segs: 24 },
    );
    (T(W, (R, a, e) =>
      Y.n2(R * 90, e * 90) > 0.3 ? [0.62, 0.45, 0.22] : [0.34, 0.18, 0.08],
    ),
      o.add(W, t.food, { cast: !1 }));
  }
  {
    new R0();
    const W = new $t(0.022, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    (W.scale(1, 0.35, 1.4), W.rotateX(Math.PI));
    const R = p0([E[0] + 0.02, P + 0.045, E[1] - 0.01], [0.5, 0.9, 0.35]);
    (o.add(W.applyMatrix4(R), t.iron, { cast: !1 }),
      o.add(
        d0(
          [E[0] + 0.02, P + 0.045, E[1] - 0.01],
          [E[0] + 0.1, P + 0.13, E[1] - 0.09],
          0.004,
          6,
        ),
        t.iron,
        { cast: !1 },
      ));
  }
  const X = [5.32, 203.56];
  {
    const W = H(
        [
          [0, 0],
          [0.036, 0],
          [0.04, 0.004],
          [0.04, 0.09],
          [0.042, 0.094],
          [0.038, 0.094],
          [0.036, 0.004],
          [0, 0.004],
        ],
        0,
        0,
        0,
        { segs: 24 },
      ),
      R = new L0(0.028, 0.005, 6, 16, Math.PI * 1.1);
    (R.rotateZ(-Math.PI / 2 - 0.15), R.translate(0.04, 0.05, 0));
    const a = p0([X[0], P + 0.042, X[1]], [0, 0.9, Math.PI / 2 + 0.05]);
    (Q(W, [0.86, 0.9, 0.92]),
      Q(R, [0.86, 0.9, 0.92]),
      o.add(W.applyMatrix4(a), t.enamelV, { cast: !1 }),
      o.add(R.applyMatrix4(a), t.enamelV, { cast: !1 }));
  }
  {
    d.push(
      H(
        [
          [0, 0],
          [0.042, 0],
          [0.046, 0.01],
          [0.046, 0.1],
          [0.036, 0.116],
          [0.034, 0.128],
          [0.036, 0.132],
          [0, 0.132],
        ],
        4.88,
        P,
        203.02,
        { segs: 24 },
      ),
    );
    const a = H(
      [
        [0, 0.004],
        [0.043, 0.004],
        [0.043, 0.085],
        [0, 0.085],
      ],
      4.88,
      P,
      203.02,
      { segs: 20 },
    );
    (Q(a, [0.42, 0.06, 0.05]), o.add(a, t.food, { cast: !1 }));
    const e = H(
      [
        [0, 0.142],
        [0.03, 0.14],
        [0.042, 0.13],
        [0.047, 0.11],
        [0.049, 0.1],
        [0.046, 0.098],
      ],
      4.88,
      P,
      203.02,
      { segs: 20 },
    );
    {
      const h = e.attributes.position;
      for (let g = 0; g < h.count; g++) {
        const M = Math.atan2(h.getZ(g) - 203.02, h.getX(g) - 4.88);
        h.setY(
          g,
          h.getY(g) -
            0.012 *
              Math.max(0, Math.sin(M * 5)) *
              (0.142 - (h.getY(g) - P)) *
              20,
        );
      }
      e.computeVertexNormals();
    }
    (Q(e, [0.78, 0.24, 0.2]), o.add(e, t.woolV, { cast: !1 }));
  }
  const v = [
    { x0: s - r, x1: s + r, z0: c - y, z1: c + y, y0: 0, y1: l + 0.02 },
    {
      x0: b[0] - 0.23,
      x1: b[0] + 0.23,
      z0: b[1] - 0.24,
      z1: b[1] + 0.22,
      y0: 0,
      y1: 0.5,
    },
    {
      x0: A[0] - 0.25,
      x1: A[0] + 0.25,
      z0: A[1] - 0.25,
      z1: A[1] + 0.25,
      y0: 0,
      y1: 0.5,
    },
  ];
  return { group: i, colliders: v, cup: X, plate: w, bowl: E };
}
const O0 = {
    calendar: [0, 0.42, 0.36, 1],
    photo: [0.38, 0.72, 0.6, 1],
    cartridges: [0.38, 0.42, 0.6, 0.6],
    jar: [
      [0.62, 0.86, 0.81, 1],
      [0.81, 0.86, 1, 1],
      [0.62, 0.72, 0.81, 0.86],
      [0.81, 0.72, 1, 0.86],
    ],
    tin: [
      [0, 0, 0.5, 0.1],
      [0.5, 0, 1, 0.1],
      [0, 0.1, 0.5, 0.2],
      [0.5, 0.1, 1, 0.2],
      [0, 0.2, 0.5, 0.3],
      [0.5, 0.2, 1, 0.3],
      [0, 0.3, 0.5, 0.4],
      [0.5, 0.3, 1, 0.4],
    ],
  },
  i0 = (z, t) => Q(z, t);
function $0(z, t) {
  const k = z.attributes.uv;
  for (let o = 0; o < k.count; o++)
    k.setXY(
      o,
      t[0] + (t[2] - t[0]) * k.getX(o),
      t[1] + (t[3] - t[1]) * k.getY(o),
    );
  return z;
}
