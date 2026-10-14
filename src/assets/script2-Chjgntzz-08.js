// assets/script2-Chjgntzz 08 — math
// Lines 1946-2136 of readable/assets/script2-Chjgntzz.pretty.js (statement-aligned).
function jo(p) {
  const o = [],
    T = (B) => ({
      top: Je(0.985, 1.005, Fe(0, 0.35, B)) - 0.075 * Fe(0.45, 1, B),
      bot: Je(0.83, 0.79, Fe(0, 0.4, B)) + 0.04 * Fe(0.75, 1, B),
      w: (0.145 - 0.052 * Fe(0.45, 1, B)) * (0.9 + 0.1 * Fe(0, 0.18, B)),
    }),
    k = (B) => {
      const O = Je(0.325, -0.075, B),
        ee = T(B),
        le = [],
        de = (ee.top + ee.bot) / 2,
        fe = (ee.top - ee.bot) / 2;
      for (let q = 0; q < 30; q++) {
        const te = (q / 30) * Math.PI * 2,
          ne = Math.cos(te),
          we = Math.sin(te),
          _e = 2.6,
          We = Math.sign(ne) * Math.pow(Math.abs(ne), 2 / _e),
          ze = Math.sign(we) * Math.pow(Math.abs(we), 2 / _e);
        let J = We * ee.w * (we < 0 ? 0.86 + 0.14 * (1 + we) : 1),
          $ = de + ze * fe;
        (we < -0.6 &&
          ($ +=
            (0.6 + we) * -0 + 0.045 * Fe(0.75, 1, -we) * (1 - Math.abs(We))),
          le.push(d(J, $, O)));
      }
      return le;
    };
  for (let B = 0; B <= 24; B++) o.push(k(B / 24));
  for (const B of o)
    for (const O of B) {
      const ee = Math.hypot(O.z - 0.12, O.y - 0.9);
      O.x > 0.05 && (O.x -= 0.006 * Math.exp(-((ee / 0.04) ** 2)));
    }
  const S = Xt(o, { cap0: !0, cap1: !0 }),
    u = (B) => {
      const O = o0((0.325 - B.z) / 0.4),
        ee = T(O),
        le = (B.y - ee.bot) / (ee.top - ee.bot),
        de = 0.52 + 0.1 * (O - 0.5),
        fe = le - de;
      return (
        Math.abs(B.x) > 0.06 &&
        (Math.abs(fe) < 0.075 || Math.abs(fe + 0.13) < 0.014)
      );
    };
  (p.body.add(S, null, P.paint, {
    col: (B) => (u(B) ? P.stripe.col : P.paint.col),
    wear: (B, O, ee) => [
      ee[0] * (0.7 + 0.6 * Fe(0.6, 0.95, Math.abs(O.x))),
      ee[1],
      ee[2] * 0.5,
      ee[3],
    ],
  }),
    p.body.add(
      He(
        [
          [0, 0.014],
          [0.03, 0.014],
          [0.036, 0.006],
          [0.037, 0],
          [0, 0],
        ],
        24,
      ),
      Z(0, 1, 0.2, 0.05, 0, 0),
      P.chrome,
      { wear: (B, O, ee) => [0, 0.5, 0, 0.9] },
    ),
    p.body.add(he(0.012, 0.01, 0.026, 0.003), Z(0, 1.017, 0.19), P.chrome),
    p.body.add(he(0.03, 0.025, 0.02, 0.005), Z(0.06, 0.8, 0), P.alu),
    p.body.add(
      ge(
        Nt([d(0.06, 0.785, 0), d(0.04, 0.72, 0), d(0.01, 0.66, -0.04)], 10),
        0.004,
        6,
      ),
      null,
      P.rubber,
    ));
  const [x, b, g, n] = T0.badge;
  for (const B of [-1, 1]) {
    const O = new f0(0.09, 0.034);
    p.body.add(
      O,
      S0(d(B * 0.1468, 0.93, 0.125), d(0, 0, -B), d(0, 1, 0), d(B, 0, 0)),
      P.decal,
      { uv: (ee, le, de, fe) => [Je(x, g, de), Je(b, n, fe)] },
    );
  }
}
function ro(p) {
  const e = o0((0 - p) / 0.8);
  return (
    0.942 -
    0.077 * Fe(0, 0.27, e) +
    0.016 * Fe(0.45, 0.65, e) -
    0.006 * Fe(0.85, 1, e)
  );
}
function Yo(p) {
  const o = [];
  for (let S = 0; S <= 28; S++) {
    const u = S / 28,
      x = Je(0, -0.8, u),
      b = ro(x),
      g = Je(0.07, 0.122, Fe(0, 0.42, u)) - 0.02 * Fe(0.88, 1, u),
      n = Je(0.84, 0.79, Fe(0, 0.15, u)),
      B = [];
    for (let O = 0; O < 26; O++) {
      const ee = (O / 26) * Math.PI * 2,
        le = Math.cos(ee),
        de = Math.sin(ee),
        fe = 3.2,
        q = Math.sign(le) * Math.pow(Math.abs(le), 2 / fe),
        te = Math.sign(de) * Math.pow(Math.abs(de), 2 / fe),
        ne = (b + n) / 2,
        we = (b - n) / 2;
      let _e = q * g * (te > 0 ? 1 - 0.12 * te * te : 1.02),
        We = ne + te * we;
      B.push(d(_e, We, x));
    }
    if (S === 0 || S === 28)
      for (const O of B) ((O.x *= 0.92), (O.y = Je((b + n) / 2, O.y, 0.9)));
    o.push(B);
  }
  const T = Xt(o, { cap0: !0, cap1: !0 }),
    k = (S) => S.z < -0.08 && S.z > -0.16 && S.y > 0.86;
  (p.body.add(T, null, P.vinyl, {
    col: (S) => (k(S) ? P.tape.col : P.vinyl.col),
  }),
    p.body.add(
      ge(
        ut(
          [
            d(-0.128, 0.84, -0.47),
            d(-0.12, 0.9, -0.47),
            d(0.12, 0.9, -0.47),
            d(0.128, 0.84, -0.47),
          ],
          0.02,
          4,
        ),
        [0.012, 0.0025],
        8,
        { up: d(0, 0, 1) },
      ),
      null,
      P.vinyl,
    ),
    p.body.add(he(0.2, 0.012, 0.66, 0.005), Z(0, 0.795, -0.44), P.black));
}
function Xo(p) {
  const [e, o, r, s] = T0.number;
  {
    const T = no(
        [
          [0.06, -0.045],
          [-0.2, -0.06],
          [-0.27, 0.07],
          [-0.2, 0.125],
          [0.05, 0.12],
          [0.09, 0.04],
        ],
        [0.03, 0.05, 0.04, 0.03, 0.04, 0.03],
      ),
      k = t0(T, 0.008, 0.003, 10),
      S = k.attributes.position;
    for (let x = 0; x < S.count; x++)
      S.setZ(x, S.getZ(x) - 6e-4 * ((S.getX(x) + 0.1) * 30) ** 2);
    (k.computeVertexNormals(),
      k.rotateY(-Math.PI / 2),
      p.body.add(k, Z(-0.117, 0.7, -0.08), P.plastic, {
        wear: (x, b, g) => [g[0], 0, g[2] * 0.7, 0.4],
      }),
      p.body.add(k, Z(0.117, 0.7, -0.08, 0, 0, 0, -1, 1, 1), P.plastic, {
        wear: (x, b, g) => [g[0], 0, g[2] * 0.7, 0.4],
      }));
    const u = new f0(0.11, 0.09);
    p.body.add(
      u,
      S0(d(-0.1225, 0.725, -0.15), d(0, 0, 1), d(0, 1, 0), d(-1, 0, 0)),
      P.decal,
      { uv: (x, b, g, n) => [Je(e, r, g), Je(o, s, n)] },
    );
  }
  (p.body.add(he(0.2, 0.18, 0.3, 0.03), Z(0, 0.68, -0.27), P.black),
    p.body.add(he(0.08, 0.1, 0.12, 0.01), Z(0.05, 0.6, -0.08), P.black));
}
