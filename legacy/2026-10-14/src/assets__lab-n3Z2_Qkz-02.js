// assets__lab-n3Z2_Qkz 02 — attributes
// Lines 348-585 of readable/assets__lab-n3Z2_Qkz.pretty.js (statement-aligned).
function ve(i, s) {
  const { mats: e } = i,
    x = new de();
  ((x.name = "train_lab_set"), s.add(x));
  const a = (n, l, C, z = !1) => {
      const k = new J(n, l);
      return (
        (k.name = C),
        (k.receiveShadow = !0),
        (k.castShadow = z),
        x.add(k),
        k
      );
    },
    r = (n, l, C, z, k, I) => {
      const O = new ne(z - n, k - l, I - C);
      return (O.translate((n + z) / 2, (l + k) / 2, (C + I) / 2), Me(O));
    },
    c = (n) => _e(n),
    h = e.get("concrete_grey"),
    y = e.get("sidewalk_tiles"),
    o = e.get("tactile_paving"),
    u = new Z({ color: new F("#b8ae94"), roughness: 0.35 }),
    m = new Z({ color: new F("#1f4f55"), roughness: 0.35 }),
    p = new Z({ color: new F("#1a1b1c"), roughness: 0.8 }),
    q = new Z({ color: new F("#8a8a86"), roughness: 0.35, metalness: 1 }),
    S = b - T,
    d = E - 0.22,
    v = g + 4.2;
  (a(c([r(-12, g - 1.3, 213, 50, g, S - 0.6)]), y, "lab_platform"),
    a(c([r(-12, g - 1.3, S - 0.6, 50, g, S)]), o, "lab_platform_edge"),
    a(c([r(-12, d, S - 0.25, 50, g - 0.06, S)]), h, "lab_platform_face"),
    a(
      c([r(-12, g, 212.6, 50, v, 213), r(-12, g, 223.6, 50, v, 224)]),
      u,
      "lab_walls",
    ),
    a(
      c([
        r(-12, g + 2.1, 212.98, 50, g + 2.5, 213.02),
        r(-12, g + 2.1, 223.58, 50, g + 2.5, 223.62),
      ]),
      m,
      "lab_band",
    ),
    a(c([r(-12, v, 212.6, 50, v + 0.3, 224)]), p, "lab_ceiling"),
    a(c([r(-12, d - 0.3, S, 50, d, 224)]), h, "lab_trackbed"));
  const V = [];
  for (let n = -8; n < 50; n += 4.5)
    V.push(r(n - 0.7, v - 0.1, 215.4, n + 0.7, v - 0.05, 215.6));
  const H = new Z({
    color: 0,
    emissive: new F(2.2, 2.5, 2.35),
    toneMapped: !1,
  });
  a(c(V), H, "lab_tubes");
  for (const n of [-4, 10, 24, 38]) {
    const l = new re(14675688, 34, 15, 2);
    (l.position.set(n, v - 0.4, 215.8),
      (l.userData.noShadowBudget = !0),
      x.add(l));
  }
  const M = b - 2.3,
    D = b + 2.3,
    G = d + 4.9,
    K = (n, l) => [
      r(n, d - 0.3, M, l, d, D),
      r(n, d, M - 0.4, l, G, M),
      r(n, d, D, l, G, D + 0.4),
      r(n, G, M - 0.4, l, G + 0.4, D + 0.4),
    ];
  (a(c([...K(-262, -12), ...K(50, 470)]), h, "lab_tunnels", !1),
    a(
      c([
        r(-12.4, d, 212.6, -12, v + 0.3, M - 0.4),
        r(-12.4, G + 0.4, M - 0.4, -12, v + 0.3, 224),
        r(-12.4, d, D + 0.4, -12, v + 0.3, 224),
        r(50, d, 212.6, 50.4, v + 0.3, M - 0.4),
        r(50, G + 0.4, M - 0.4, 50.4, v + 0.3, 224),
        r(50, d, D + 0.4, 50.4, v + 0.3, 224),
      ]),
      u,
      "lab_mouths",
    ));
  const Q = [],
    $ = [],
    t = [];
  for (const [n, l] of [
    [-262, -12],
    [50, 470],
  ]) {
    Q.push(
      r(n, d + 2.6, M, l, d + 2.66, M + 0.25),
      r(n, d + 3.1, D - 0.25, l, d + 3.16, D),
    );
    for (let C = n + 12; C < l; C += 25)
      ($.push(r(C - 0.14, d + 3.4, M, C + 0.14, d + 3.6, M + 0.12)),
        t.push(new j(C, d + 3.3, M + 0.4)));
  }
  (a(c(Q), p, "lab_trays"),
    a(
      c($),
      new Z({ color: 0, emissive: new F(3.2, 1.5, 0.35), toneMapped: !1 }),
      "lab_worklights",
    ));
  const w = [0, 1].map((n) => {
      const l = new re(16752704, 0, 9, 2);
      return (
        (l.name = "lab_worklight_" + n),
        (l.userData.noShadowBudget = !0),
        x.add(l),
        l
      );
    }),
    f = [];
  for (const n of [b - 0.7525, b + 0.7525])
    f.push(r(U, E - 0.17, n - 0.035, ee, E, n + 0.035));
  (f.push(r(U, E - 0.06, b + 1.43, ee, E + 0.04, b + 1.5)),
    a(c(f), q, "lab_rails"));
  const A = new ne(0.24, 0.1, 2.5);
  A.translate(0, E - 0.22, b);
  const _ = new he(A, h, Math.ceil((ee - U) / 0.65)),
    X = new we();
  for (let n = 0; n < _.count; n++)
    (X.makeTranslation(U + n * 0.65, 0, 0), _.setMatrixAt(n, X));
  ((_.name = "lab_sleepers"), (_.receiveShadow = !0), x.add(_));
  const R = le().pts,
    Y = [];
  for (let n = 0; n < R.length - 1; n++) {
    const l = R[n],
      C = R[n + 1],
      z = C[0] - l[0],
      k = C[2] - l[2],
      I = Math.hypot(z, k),
      O = -k / I,
      L = z / I;
    for (const P of [-0.7525, 0.7525]) {
      const ae = new ne(I + 0.02, 0.17, 0.07);
      (ae.rotateY(Math.atan2(-k, z)),
        ae.translate(
          (l[0] + C[0]) / 2 + O * P,
          E - 0.085,
          (l[2] + C[2]) / 2 + L * P,
        ),
        Y.push(ae));
    }
  }
  a(c(Y), q, "lab_curve_rails");
  const te = new ge(700, 700);
  (te.rotateX(-Math.PI / 2),
    te.translate(150, d, 800),
    a(te, h, "lab_curve_ground"));
  const oe = new re(14675688, 5e3, 120, 2);
  return (
    oe.position.set(140, E + 18, 862),
    (oe.userData.noShadowBudget = !0),
    x.add(oe),
    {
      update(n, l) {
        const C = l.position;
        let z = -1,
          k = -1,
          I = 1e9,
          O = 1e9;
        for (let L = 0; L < t.length; L++) {
          const P = Math.abs(t[L].x - C.x);
          P < I
            ? ((O = I), (k = z), (I = P), (z = L))
            : P < O && ((O = P), (k = L));
        }
        [z, k].forEach((L, P) => {
          L >= 0
            ? (w[P].position.copy(t[L]), (w[P].intensity = 7))
            : (w[P].intensity = 0);
        });
      },
    }
  );
}
function Me(i) {
  const s = i.attributes.position,
    e = i.attributes.normal,
    x = new Float32Array(s.count * 2);
  for (let a = 0; a < s.count; a++) {
    const r = s.getX(a),
      c = s.getY(a),
      h = s.getZ(a),
      y = Math.abs(e.getX(a)),
      o = Math.abs(e.getY(a)),
      u = Math.abs(e.getZ(a));
    let m, p;
    (o >= y && o >= u
      ? ((m = r), (p = h))
      : y >= u
        ? ((m = h), (p = c))
        : ((m = r), (p = c)),
      (x[a * 2] = m),
      (x[a * 2 + 1] = p));
  }
  return (i.setAttribute("uv", new N(x, 2)), i);
}
function _e(i) {
  let s = 0,
    e = 0;
  for (const u of i)
    ((s += u.attributes.position.count),
      (e += u.index ? u.index.count : u.attributes.position.count));
  const x = new Float32Array(s * 3),
    a = new Float32Array(s * 3),
    r = new Float32Array(s * 2),
    c = new Uint32Array(e);
  let h = 0,
    y = 0;
  for (const u of i) {
    const m = u.attributes.position.count;
    if (
      (x.set(u.attributes.position.array, h * 3),
      a.set(u.attributes.normal.array, h * 3),
      u.attributes.uv && r.set(u.attributes.uv.array, h * 2),
      u.index)
    ) {
      for (let p = 0; p < u.index.count; p++) c[y + p] = u.index.array[p] + h;
      y += u.index.count;
    } else {
      for (let p = 0; p < m; p++) c[y + p] = h + p;
      y += m;
    }
    h += m;
  }
  const o = new xe();
  return (
    o.setAttribute("position", new N(x, 3)),
    o.setAttribute("normal", new N(a, 3)),
    o.setAttribute("uv", new N(r, 2)),
    o.setIndex(new N(c, 1)),
    o
  );
}
