// assets__district-BhfbivMT 17 — plates
// Lines 5343-5636 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
function Po(n, t) {
  const e = t.sink("bed"),
    r = t.burnt,
    o = r ? "burnt" : "paint",
    l = t.paintC,
    s = -1.6975,
    c = 0.9,
    a = 0.705,
    h = 0.66,
    f = 0.29;
  U0(e, o, -a, h - 0.035, s, a, h, c, l, 0.005);
  for (let i = -3; i <= 3; i++)
    U0(
      e,
      o,
      i * 0.19 - 0.018,
      h,
      s + 0.05,
      i * 0.19 + 0.018,
      h + 0.012,
      c - 0.05,
      oe(l, 0.95),
      0.004,
    );
  const y = (i, u, x, w, _, M) => {
    U0(e, o, i, u, x, w, _, M, l, 0.008);
  };
  for (const i of [1, -1]) {
    y(
      i > 0 ? a - 0.03 : -a,
      h,
      s + 0.02,
      i > 0 ? a : -a + 0.03,
      h + f,
      c - 0.02,
    );
    for (const u of [h + 0.09, h + 0.19])
      U0(
        e,
        o,
        i > 0 ? a : -a - 0.008,
        u - 0.012,
        s + 0.06,
        i > 0 ? a + 0.008 : -a,
        u + 0.012,
        c - 0.06,
        oe(l, 0.92),
        0.004,
      );
    for (const u of [s + 0.62, s + 1.28, s + 1.94])
      U0(
        e,
        "iron",
        i * a - 0.012,
        h + f - 0.03,
        u - 0.015,
        i * a + 0.012,
        h + f + 0.005,
        u + 0.015,
        [1, 1, 1],
        0.004,
      );
  }
  const m = t.o.doors?.rr
    ? ie(t.o.doors.rr, 0, 1.6)
    : r && t.rng() < 0.4
      ? 1.5
      : 0;
  {
    const i = Z(0, h, s, m);
    U(
      e,
      o,
      g0(a * 2, f, 0.03, 0.008),
      i.clone().multiply(Z(0, f / 2, 0.015)),
      l,
    );
    for (const u of [0.09, 0.19])
      U(
        e,
        o,
        g0(a * 2 - 0.1, 0.024, 0.008, 0.003),
        i.clone().multiply(Z(0, u, -0.002)),
        oe(l, 0.92),
      );
  }
  const b = 1.74,
    v = c - 0.02,
    p = r ? "iron" : "paint";
  for (const i of [1, -1])
    f0(
      e,
      p,
      new z(i * (a - 0.03), h, v),
      new z(i * (a - 0.03), b, v),
      0.035,
      0.035,
      new z(0, 0, 1),
      l,
    );
  f0(e, p, new z(-a + 0.03, b, v), new z(a - 0.03, b, v), 0.035, 0.035, L0, l);
  for (let i = 1; i < 9; i++) {
    const u = -a + 0.03 + (i * ((a - 0.03) * 2)) / 9;
    f0(
      e,
      p,
      new z(u, h + f, v),
      new z(u, b, v),
      0.014,
      0.014,
      new z(0, 0, 1),
      l,
    );
  }
  f0(
    e,
    p,
    new z(-a + 0.03, h + f, v),
    new z(a - 0.03, h + f, v),
    0.03,
    0.02,
    L0,
    l,
  );
  for (const i of [1, -1])
    U0(
      e,
      "iron",
      i * 0.36 - 0.03,
      0.4,
      s + 0.1,
      i * 0.36 + 0.03,
      0.5,
      1.3,
      [1, 1, 1],
      0.005,
    );
  U0(e, "iron", -0.62, 0.44, s + 0.02, 0.62, 0.5, s + 0.08, [1, 1, 1], 0.005);
  for (const i of [1, -1]) {
    const u = s + 0.018,
      x = (w, _) => ({ p: new z(w, _, u), n: new z(0, 0, -1) });
    if (r) {
      T0(
        e,
        "char",
        x,
        [
          [i * 0.5, 0.43],
          [i * 0.64, 0.43],
          [i * 0.64, 0.51],
          [i * 0.5, 0.51],
        ],
        { nu: 2, nv: 1, off: 0.02, bulge: 0, rim: 0.02 },
      );
      continue;
    }
    (T0(
      e,
      "lamp",
      x,
      [
        [i * 0.5, 0.43],
        [i * 0.64, 0.43],
        [i * 0.64, 0.51],
        [i * 0.5, 0.51],
      ],
      {
        nu: 2,
        nv: 1,
        off: 0.03,
        bulge: 0.005,
        rim: 0.03,
        col: st.tail,
        rimCol: k0,
      },
    ),
      T0(
        e,
        t.o.hazards ? "hazard" : "lamp",
        x,
        [
          [i * 0.4, 0.43],
          [i * 0.49, 0.43],
          [i * 0.49, 0.51],
          [i * 0.4, 0.51],
        ],
        {
          nu: 1,
          nv: 1,
          off: 0.03,
          bulge: 0.004,
          rim: 0.03,
          col: st.amber,
          rimCol: k0,
        },
      ),
      U(e, "trim", g0(0.22, 0.2, 0.006, 0.003), Z(i * 0.6, 0.18, -0.95), k0));
  }
  const d = t.plateRear;
  if (d) {
    const i = le(new z(0, 0.5, s - 0.02), new z(0, 0, -1));
    (U(
      e,
      r ? "char" : "trim",
      g0(0.35, 0.18, 0.012, 0.006),
      i.clone().multiply(Z(0, 0, 0.006)),
      k0,
    ),
      j0(e, "decal", i, 0.33, 0.165, 0.0125, (u, x) =>
        ze(r ? "plate_burnt" : d, u, x),
      ));
  }
}
function Ro(n, t) {
  const e = Sn[n](),
    r = Xt(n, t, e),
    o = r.rng,
    l = r.burnt,
    s = e.dress,
    c = me(t.color || e.colors[Math.floor(o() * e.colors.length)]);
  ((r.paintC = c),
    (r.tyreCol = [0.032, 0.032, 0.034]),
    (r.steelCol =
      n === "van" || n === "keitruck"
        ? [0.52, 0.53, 0.55]
        : [0.16, 0.16, 0.17]),
    (r.seatCol = me(
      ["#3a3c40", "#4a4540", "#2c3038", "#5a5448"][Math.floor(o() * 4)],
    )),
    $t(r, e, c),
    Zt(r, e),
    (r.dents = []));
  const a = [e.z0 + 0.35, e.z1 - 0.35];
  if (!l)
    for (let f = Math.floor(o() * 3); f > 0; f--) {
      const y = o() < 0.5 ? 1 : -1,
        m = A0(a[0], a[1], o());
      r.dents.push({
        x: y * e.hw(m),
        y: 0.4 + o() * 0.4,
        z: m,
        rx: 0.12,
        ry: 0.1 + o() * 0.12,
        rz: 0.15 + o() * 0.2,
        depth: 0.012 + o() * 0.025,
      });
    }
  if (l) {
    if (e.bonnet)
      for (let y = 0; y < 4; y++) {
        const m = A0(e.bonnet[0] + 0.15, e.bonnet[1] - 0.1, o());
        r.dents.push({
          x: (o() - 0.5) * 0.8,
          y: e.top(m),
          z: m,
          rx: 0.2 + o() * 0.15,
          ry: 0.12,
          rz: 0.15 + o() * 0.2,
          depth: (o() - 0.65) * 0.07,
        });
      }
    const f =
      e.ws && e.rw ? (e.ws.z[0] + e.rw.z[1]) / 2 : e.ws ? e.ws.z[0] - 0.6 : 0;
    r.dents.push({
      x: (o() - 0.5) * 0.2,
      y: e.top(f),
      z: f,
      rx: 0.55,
      ry: 0.25,
      rz: 0.5 + o() * 0.3,
      depth: 0.03 + o() * 0.05,
    });
  }
  r.inside =
    l ||
    !!t.interior ||
    r.shattered.size > 0 ||
    Object.values(t.doors || {}).some((f) => f > 0.01);
  const h = Vt(e);
  return (
    (r.plateRear =
      s.plates && !s.plates.back && s.plates.type
        ? s.plates.type === "plate_k"
          ? "plate_k0"
          : s.plates.type + "0"
        : null),
    Lt(e, r),
    ko(e, r, h),
    r.inside && Pn(e, r),
    So(e, r),
    s.bed && Po(e, r),
    Ut(n, e, r, h)
  );
}
