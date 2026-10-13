// assets__script2-Chjgntzz 04 — math
// Lines 793-1031 of readable/assets__script2-Chjgntzz.pretty.js (statement-aligned).
function J0(p, e, o, r) {
  const s = new Ae().makeRotationZ(-Math.PI / 2),
    T = (J) => new Ae().makeTranslation(e.x, e.y, e.z).multiply(J),
    k = (J) => Math.hypot(J.y - e.y, J.z - e.z),
    S = (J, $, ve) => {
      const Pe = k(J);
      return [0, 0, 0.15 + 0.35 * Fe(o.R - 0.06, o.R - 0.015, Pe), 0];
    },
    u = (J, $, ve) => [0, ve[1], 0.2 + 0.25 * Math.abs($.x), 0],
    x = o.R - 0.012,
    b = o.w / 2,
    g = (o.rim + 0.004 + x) / 2,
    n = (x - (o.rim + 0.004)) / 2,
    B = [];
  for (let J = 0; J <= 16; J++) {
    const $ = -Math.PI * 0.62 + (J / 16) * Math.PI * 2.24;
    B.push([
      g + n * Math.sin($) * 1,
      -b * Math.cos($) * (Math.sin($) > 0 ? 1 : 0.92),
    ]);
  }
  p.add(He(B, 48).applyMatrix4(s), T(new Ae()), P.tyre, { wear: S });
  const O =
      o.rows === "front"
        ? [
            { th: 0, w: 0.026, l: 0.017, alt: 0.006 },
            { th: 0.62, w: 0.017, l: 0.018, alt: 0 },
            { th: -0.62, w: 0.017, l: 0.018, alt: 0, ph: 0.5 },
            { th: 1.05, w: 0.013, l: 0.016, alt: 0, ph: 0.25 },
            { th: -1.05, w: 0.013, l: 0.016, alt: 0, ph: 0.75 },
          ]
        : [
            { th: 0.22, w: 0.024, l: 0.018, alt: 0 },
            { th: -0.22, w: 0.024, l: 0.018, alt: 0, ph: 0.5 },
            { th: 0.68, w: 0.02, l: 0.019, alt: 0, ph: 0.25 },
            { th: -0.68, w: 0.02, l: 0.019, alt: 0, ph: 0.75 },
            { th: 1.08, w: 0.016, l: 0.017, alt: 0 },
            { th: -1.08, w: 0.016, l: 0.017, alt: 0, ph: 0.5 },
          ],
    ee = 0.012,
    le = 0.043,
    de = (J, $) => {
      const ve = new so(J, ee, $),
        Pe = ve.attributes.position;
      for (let Ie = 0; Ie < Pe.count; Ie++)
        Pe.getY(Ie) > 0 &&
          (Pe.setX(Ie, Pe.getX(Ie) * 0.82), Pe.setZ(Ie, Pe.getZ(Ie) * 0.8));
      return (
        ve.translate(0, ee / 2 - 0.002, 0),
        ve.setIndex(
          Array.from(ve.index.array).filter(
            (Ie, Se) => Math.floor(Se / 6) !== 3,
          ),
        ),
        ve.toNonIndexed()
      );
    },
    fe = [];
  for (const J of O) {
    const $ = Math.PI / 2 - J.th,
      ve = g + n * Math.sin($),
      Pe = -b * Math.cos($) * (Math.sin($) > 0 ? 1 : 0.92),
      Ie = Math.sin($) / n,
      Se = -Math.cos($) / b,
      je = Math.hypot(Ie, Se),
      Ye = Math.round((Math.PI * 2 * ve) / le),
      Xe = de(J.w, J.l);
    for (let nt = 0; nt < Ye; nt++) {
      const rt = ((nt + (J.ph || 0)) / Ye) * Math.PI * 2,
        ae = Math.cos(rt),
        At = Math.sin(rt),
        it = d(0, At, ae),
        Oe = d(Se / je, 0, 0)
          .addScaledVector(it, Ie / je)
          .normalize(),
        Dt = d(1, 0, 0).sub(Oe.clone().multiplyScalar(Oe.x)).normalize(),
        Ht = d().crossVectors(Dt, Oe),
        tt = Pe + (J.alt ? (nt % 2 ? J.alt : -J.alt) : 0),
        Ze = d(e.x + tt, e.y + At * ve, e.z + ae * ve),
        _ = S0(Ze, Dt, Oe, Ht).multiply(
          new Ae().makeRotationY((r() - 0.5) * 0.12),
        );
      fe.push(Xe.clone().applyMatrix4(_));
    }
    Xe.dispose();
  }
  p.add(D0(fe), null, P.tyre, {
    wear: (J, $, ve) => [0, 0, 0.18 + 0.3 * Fe(0.4, 0.7, Math.abs($.x)), 0],
  });
  const q = b * 0.62,
    te = o.rim;
  p.add(
    He(
      [
        [te + 0.012, q + 0.004],
        [te + 0.013, q - 0.001],
        [te + 0.003, q - 0.003],
        [te - 0.006, q * 0.55],
        [te - 0.012, q * 0.25],
        [te - 0.012, -q * 0.25],
        [te - 0.006, -q * 0.55],
        [te + 0.003, -q + 0.003],
        [te + 0.013, -q + 0.001],
        [te + 0.012, -q - 0.004],
        [te + 0.002, -q - 0.004],
        [te - 0.013, -q * 0.6],
        [te - 0.016, 0],
        [te - 0.013, q * 0.6],
        [te + 0.002, q + 0.004],
        [te + 0.012, q + 0.004],
      ].map(([J, $]) => [J, $]),
      48,
    ).applyMatrix4(s),
    T(new Ae()),
    P.chrome,
    { wear: u },
  );
  const ne = o.hubW / 2,
    we = o.hubR;
  (p.add(
    He(
      [
        [0.012, -ne - 0.012],
        [0.02, -ne - 0.012],
        [0.022, -ne],
        [we * 0.72, -ne + 0.002],
        [o.flange + 0.004, -ne + 0.01],
        [o.flange + 0.004, -ne + 0.016],
        [we * 0.68, -ne + 0.02],
        [we * 0.62, 0],
        [we, ne * 0.3],
        [we + 0.004, ne * 0.4],
        [we + 0.004, ne - 0.004],
        [we - 0.004, ne],
        [0.02, ne + 0.002],
        [0.012, ne + 0.002],
      ],
      24,
    ).applyMatrix4(s),
    T(new Ae()),
    P.alu,
    { wear: u },
  ),
    p.add(
      He(
        [
          [o.flange + 0.004, ne - 0.004],
          [o.flange + 0.004, ne - 0.012],
          [we - 0.002, ne - 0.014],
        ],
        24,
      ).applyMatrix4(s),
      T(new Ae()),
      P.alu,
    ),
    p.add(
      ke(
        d(e.x - ne - 0.03, e.y, e.z),
        d(e.x + ne + 0.03, e.y, e.z),
        0.0085,
        10,
      ),
      null,
      P.steel,
    ));
  for (const J of [-1, 1]) {
    const $ = new h0(0.014, 0.014, 0.012, 6);
    ($.rotateZ(Math.PI / 2),
      p.add($, Z(e.x + J * (ne + 0.026), e.y, e.z), P.steel));
  }
  const _e = te - 0.015,
    We = [],
    ze = [];
  for (const J of [1, -1])
    for (let $ = 0; $ < 18; $++) {
      const ve = ($ * 20 + (J > 0 ? 0 : 10)) * P0,
        Pe = $ % 2 ? 1 : -1,
        Ie = ve + Pe * 60 * P0,
        Se = J * (J > 0 ? ne - 0.008 : ne - 0.01),
        je = J * 0.005,
        Ye = d(
          e.x + Se,
          e.y + Math.sin(ve) * o.flange,
          e.z + Math.cos(ve) * o.flange,
        ),
        Xe = d(e.x + je, e.y + Math.sin(Ie) * _e, e.z + Math.cos(Ie) * _e);
      We.push(ke(Ye, Xe, 0.0019, 5, !1));
      const nt = Xe.clone().sub(Ye).normalize();
      ze.push(
        ke(
          Xe.clone().addScaledVector(nt, -0.012),
          Xe.clone().addScaledVector(nt, 0.006),
          0.0033,
          5,
          !1,
        ),
      );
    }
  if (
    (p.add(D0(We), null, P.steel, { wear: (J, $, ve) => [0, 0.6, 0.15, 0] }),
    p.add(D0(ze), null, P.chrome, { wear: (J, $, ve) => [0, 0.5, 0.2, 0] }),
    o.sprocket)
  ) {
    const ve = new N0();
    for (let Se = 0; Se <= 132; Se++) {
      const je = Se / 132,
        Ye = je * Math.PI * 2,
        Xe = (je * 44) % 1,
        nt =
          Xe < 0.3
            ? 0.112 + 0.006 * Math.sin((Xe / 0.3) * Math.PI)
            : 0.112 -
              0.004 +
              0.004 * Math.cos(((Xe - 0.3) / 0.7) * Math.PI * 2),
        rt = Math.cos(Ye) * nt,
        ae = Math.sin(Ye) * nt;
      Se ? ve.lineTo(rt, ae) : ve.moveTo(rt, ae);
    }
    for (let Se = 0; Se < 5; Se++) {
      const je = new V0(),
        Ye = (Se / 5) * Math.PI * 2;
      (je.absarc(
        Math.cos(Ye) * 0.072,
        Math.sin(Ye) * 0.072,
        0.017,
        0,
        Math.PI * 2,
        !0,
      ),
        ve.holes.push(je));
    }
    const Pe = new V0();
    (Pe.absarc(0, 0, 0.04, 0, Math.PI * 2, !0), ve.holes.push(Pe));
    const Ie = t0(ve, 0.005, 8e-4, 6, 1);
    p.add(Ie, Z(e.x + 0.058, e.y, e.z, 0, Math.PI / 2, 0), P.chain, {
      wear: (Se, je, Ye) => [0, 0.55, 0.4, 0],
    });
  }
}
