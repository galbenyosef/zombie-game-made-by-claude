// assets/index-BcIwWgby 14 — push
// Lines 3605-3901 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function $n(s, o) {
  const t = [],
    u = [],
    e = [],
    r = { side: 0.55, front: 0.7, back: 0.55 },
    a = [
      [s.z0, 0],
      [s.z1, 0],
      [s.z1, W0],
      [s.z0, W0],
    ],
    p = () => fs.map((b) => Yn(b));
  (t.push(Ne(a, p(), r.side, jo(s.x0 + r.side))),
    u.push(Ne(a, p(), 0.8 - r.side, jo(pt.x0))),
    t.push(Ne(a, p(), r.side, jo(s.x1))),
    u.push(Ne(a, p(), 0.8 - r.side, jo(s.x1 - r.side))));
  const i = [
      [pt.x0, 0],
      [Ue.x0, 0],
      [Ue.x0, po],
      [Ue.x1, po],
      [Ue.x1, 0],
      [pt.x1, 0],
      [pt.x1, W0],
      [pt.x0, W0],
    ],
    d = () => {
      const b = new Lo();
      return (b.absarc(0, G0.y, G0.r, 0, Math.PI * 2, !0), b);
    };
  (t.push(Ne(i, [d()], r.front, Yo(s.z0))),
    u.push(Ne(i, [d()], 1 - r.front, Yo(s.z0 + r.front))));
  const y = Xn(),
    w = [[pt.x0, 0], ...y, [pt.x1, 0], [pt.x1, W0], [pt.x0, W0]];
  (u.push(Ne(w, [ra()], 0.8 - r.back, Yo(pt.z1))),
    t.push(Ne(w, [ra()], r.back, Yo(pt.z1 + 0.8 - r.back))));
  for (const [b, P] of [
    [s.z0, 1],
    [pt.z1, 0.8],
  ]) {
    const _ = new he();
    (_.moveTo(s.x0, 0), _.lineTo(s.x1, 0), _.lineTo(0, 6.5), _.lineTo(s.x0, 0));
    const I = new te(_, { depth: P, bevelEnabled: !1 });
    (I.translate(0, W0, b), I.deleteAttribute("uv"), t.push(Ct(Ke(I))));
  }
  const g = (b, P, _, I, R = 8.6) => {
    const j = (O, J, tt) => {
      const st = new qt(I ? 0.95 : O, tt - J, I ? O : 0.95);
      (st.translate(b + (_ * O) / 2, (J + tt) / 2, P + (I * O) / 2),
        t.push(Ct(Ke(st))));
      const G = new he();
      (G.moveTo(0, 0), G.lineTo(O, 0), G.lineTo(0, O * 0.9), G.lineTo(0, 0));
      const q = new te(G, { depth: 0.95, bevelEnabled: !1 });
      q.translate(0, 0, -0.475);
      const U = new wt();
      (I === 0
        ? U.makeRotationY(_ > 0 ? 0 : Math.PI)
        : U.makeRotationY(I > 0 ? -Math.PI / 2 : Math.PI / 2),
        q.applyMatrix4(U),
        q.translate(b, tt, P),
        q.deleteAttribute("uv"),
        t.push(Ct(Ke(q))));
    };
    (j(1.25, 0, 4.2), j(0.8, 4.2, R));
  };
  for (const b of [44, 49, 54, 59]) (g(s.x0, b, -1, 0), g(s.x1, b, 1, 0));
  for (const b of [s.x1]) g(b - 0.48, s.z0, 0, -1, 9.5);
  (g(s.x0 + 0.48, s.z1, 0, 1, 9.5), g(s.x1 - 0.48, s.z1, 0, 1, 9.5));
  const z = (b, P, _, I) =>
    Ct(
      Ke(
        I0(
          b,
          P.map(([R, V]) => _(R, V)),
          I,
          { crease: 0.7 },
        ),
      ),
    );
  {
    const b = Ue.x1 - Ue.x0 + 0.5,
      P = po + 0.1,
      _ = po + 2.4,
      I = [
        [-0.14, 0],
        [0.14, 0],
        [0.14, 0.08],
        [0.08, 0.16],
        [0, 0.2],
        [-0.08, 0.16],
        [-0.14, 0.08],
      ];
    for (const K of [0, 1, 2]) {
      const j = b / 2 + K * 0.26,
        O = ue(j, _ - P + K * 0.3),
        J = [[-j, 0], ...O.pts(18).map(([tt, st]) => [tt, P + st]), [j, 0]];
      t.push(z(I, J, (tt, st) => [tt, st, s.z0 - K * 0.1], [0, 0, -1]));
    }
    const R = ue(b / 2, _ - P),
      V = [[-R.a, po], ...R.pts(16).map(([K, j]) => [K, P + j]), [R.a, po]],
      L = new te(qs(V), { depth: 0.12, bevelEnabled: !1 });
    (L.translate(0, 0, s.z0 - 0.1), L.deleteAttribute("uv"), t.push(Ct(Ke(L))));
  }
  const x = [
      [-0.07, 0],
      [0.07, 0],
      [0.07, 0.06],
      [0.02, 0.11],
      [-0.07, 0.09],
    ],
    v = (b, P, _, I = 0.14) => {
      const R = ue(b / 2 + I, _ - P + I);
      return [
        [-b / 2 - I - 0.18, P],
        [-b / 2 - I, P],
        ...R.pts(14).map(([V, L]) => [V, P + L]),
        [b / 2 + I, P],
        [b / 2 + I + 0.18, P],
      ];
    };
  for (const b of fs) {
    const P = v(e0.w, e0.apex - e0.w * 0.866, e0.apex);
    (t.push(z(x, P, (_, I) => [s.x0, I, b - _], [-1, 0, 0])),
      t.push(z(x, P, (_, I) => [s.x1, I, b + _], [1, 0, 0])));
  }
  t.push(
    z(
      x,
      v(z0.w, z0.apex - z0.rise, z0.apex),
      (b, P) => [-b, P, s.z1],
      [0, 0, 1],
    ),
  );
  {
    const b = [];
    for (let P = 0; P <= 72; P++) {
      const _ = (P / 72) * Math.PI * 2;
      b.push([Math.cos(_) * (G0.r + 0.12), G0.y + Math.sin(_) * (G0.r + 0.12)]);
    }
    t.push(
      z(
        [
          [-0.16, 0],
          [0.16, 0],
          [0.16, 0.08],
          [0.08, 0.16],
          [-0.06, 0.18],
          [-0.16, 0.1],
        ],
        b,
        (P, _) => [P, _, s.z0],
        [0, 0, -1],
      ),
    );
  }
  const n = s.tower;
  {
    const b = new qt(n.x1 - n.x0, 22, n.z1 - n.z0).translate(
      (n.x0 + n.x1) / 2,
      11,
      (n.z0 + n.z1) / 2,
    );
    t.push(Ct(Ke(b)));
  }
  const l = (s.x1 - s.x0) / 2 + 0.5,
    f = 6.5,
    h = Math.atan2(f, l),
    c = Math.hypot(l, f),
    M = (b) => [-l + Math.cos(h) * b, W0 + Math.sin(h) * b],
    m = (b, P, _, I) => {
      const R = new dt(...b),
        V = new dt(...P),
        L = R.distanceTo(V),
        K = new qt(_, I, L),
        j = new wt().lookAt(V, R, new dt(0, 1, 0));
      return (
        K.applyMatrix4(j),
        K.translate((R.x + V.x) / 2, (R.y + V.y) / 2, (R.z + V.z) / 2),
        K
      );
    };
  for (let b = 46.9; b < 55; b += 0.6) {
    const P = b > 48.05 && b < 53.45,
      _ = P ? [0.6 + o() * 1.8, c - 0.8 - o() * 2.4] : [0, c],
      I = P
        ? [
            [0.25, _[0]],
            [_[1], c - 0.2],
          ]
        : [[0.25, c - 0.2]];
    for (const [R, V] of I) {
      if (V - R < 0.2) continue;
      const [L, K] = M(R),
        [j, O] = M(V),
        J = 0.16;
      e.push(
        m(
          [L + Math.sin(h) * J, K - Math.cos(h) * J, b],
          [j + Math.sin(h) * J, O - Math.cos(h) * J, b],
          0.09,
          0.16,
        ),
      );
    }
  }
  for (const [b, P] of [
    [0.36, 0],
    [0.7, 1],
  ]) {
    const [_, I] = M(c * b),
      R = 0.32,
      V = _ + Math.sin(h) * R,
      L = I - Math.cos(h) * R;
    if (!P) {
      e.push(
        m([V, L, 46.6], [V, L, 48.6], 0.18, 0.24),
        m([V, L, 53], [V, L, 55.2], 0.18, 0.24),
      );
      continue;
    }
    e.push(
      m([V, L, 46.6], [V, L, 49.3], 0.18, 0.24),
      m([V, L, 52.8], [V, L, 55.2], 0.18, 0.24),
    );
  }
  const k = { top: [-3.2, 14.6, 49.2], bot: [-2.1, 6.3, 51.4] };
  (e.push(m(k.top, k.bot, 0.2, 0.26)),
    e.push(m([-2.9, 12.2, 49.9], [-2.2, 10.9, 50.6], 0.05, 0.28)));
  const S = [];
  for (let b = 46.7; b < 55; b += 0.3) {
    const P = b > 48.2 && b < 53.3,
      _ = P ? 0.3 + o() * 1.2 : c,
      I = P ? c - 0.4 - o() * 2 : c;
    for (const [R, V] of P
      ? [
          [0.1, _],
          [I, c - 0.1],
        ]
      : [[0.1, c - 0.1]]) {
      if (V - R < 0.1) continue;
      const [L, K] = M(R),
        [j, O] = M(V),
        J = 0.1;
      S.push(
        m(
          [L + Math.sin(h) * J, K - Math.cos(h) * J, b + 0.15],
          [j + Math.sin(h) * J, O - Math.cos(h) * J, b + 0.15],
          0.29,
          0.025,
        ),
      );
    }
  }
  for (const b of S) e.push(b);
  const A = e.map((b) => (b.deleteAttribute("uv"), Ct(Ke(b))));
  return { outer: t, inner: u, char: A, hang: k, slope: c, ang: h, half: l };
}
function Zn(s) {
  const o = s.tower,
    t = co,
    u = { x0: s.x0, x1: s.x0 + 0.8 };
  return [
    { ...u, z0: s.z0, z1: s.z1, y0: 0, y1: t.sill },
    { ...u, z0: s.z0, z1: t.z0, y0: t.sill, y1: W0 },
    { ...u, z0: t.z1, z1: s.z1, y0: t.sill, y1: W0 },
    { ...u, z0: t.z0, z1: t.z1, y0: t.spring, y1: W0 },
    { x0: s.x1 - 0.8, x1: s.x1, z0: s.z0, z1: s.z1, y0: 0, y1: W0 },
    { x0: s.x0, x1: Qt.x0, z0: pt.z1, z1: s.z1, y0: 0, y1: W0 },
    { x0: Qt.x1, x1: s.x1, z0: pt.z1, z1: s.z1, y0: 0, y1: W0 },
    { x0: s.x0, x1: Ue.x0, z0: s.z0, z1: s.z0 + 1, y0: 0, y1: W0 },
    { x0: Ue.x1, x1: s.x1, z0: s.z0, z1: s.z0 + 1, y0: 0, y1: W0 },
    { x0: o.x0, x1: o.x1, z0: o.z0, z1: o.z1, y0: 0, y1: 22 },
  ];
}
const so = 40,
  _0 = {
    pos: Array.from({ length: so }, () => new H0(0, -50, 0, 0)),
    col: Array.from({ length: so }, () => new H0(1, 0.45, 0.14, 4)),
    gain: { value: 1 },
    used: 0,
  },
  Ce = 2,
  Ge = {
    mat: Array.from({ length: Ce }, () => new wt()),
    pos: Array.from({ length: Ce }, () => new H0(0, -50, 0, 0)),
    info: Array.from({ length: Ce }, () => new H0(0, 0, 0.56, 0.96)),
    tex: { value: null },
  },
  Je = {
    uVL: { value: _0.pos },
    uVC: { value: _0.col },
    uVGain: _0.gain,
    uPJm: { value: Ge.mat },
    uPJp: { value: Ge.pos },
    uPJi: { value: Ge.info },
    uPJtex: Ge.tex,
  };
