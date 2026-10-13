// assets__index-Db-AsSxU 28 — copy
// Lines 11554-11874 of readable/assets__index-Db-AsSxU.pretty.js (statement-aligned).
function yn(e, o, n, c) {
  const t = e.anim,
    s = e.root,
    i = e.def,
    r = ae(t);
  n.uniforms.uGaze = { value: new Fe(0, 0, 0, 0) };
  const l = n.uniforms.uGaze.value,
    a = ot((e.seed * 977 + 13) >>> 0),
    u = new Je(),
    f = new H0();
  let d = !1;
  ((t.pointPt = new H0()), (t.pointOn = !1));
  const v = i.J.head,
    C = new H0(
      i.head.eyeC.L[0] - v[0],
      i.head.eyeC.L[1] - v[1],
      i.head.eyeC.L[2] - v[2],
    ),
    p = new H0(
      i.head.eyeC.R[0] - v[0],
      i.head.eyeC.R[1] - v[1],
      i.head.eyeC.R[2] - v[2],
    ),
    F = new H0(),
    J = new Ht(),
    n0 = { lx: 0, ly: 0, rx: 0, ry: 0 },
    _ = { x: 0, y: 0, t: 0.6 };
  let G = 1.2 + a() * 2,
    y = -1,
    E = !1,
    c0 = -1,
    u0 = 0;
  const q = (y0, x0) => {
      (F.copy(y0).applyQuaternion(t.wq[d0.head]).add(t.wp[d0.head]),
        F.subVectors(r.eyeT, F).applyQuaternion(
          J.copy(t.wq[d0.head]).invert(),
        ));
      const Y0 = Math.max(F.z, 0.05 * F.length());
      return (
        (x0[0] = I0(F.x / Y0, -0.55, 0.55)),
        (x0[1] = I0(F.y / Y0, -0.42, 0.36)),
        x0
      );
    },
    $ = [0, 0],
    x = {
      uFade: { value: 1 },
      uFadeT: { value: 0 },
      uSelfPos: { value: new H0() },
      uSelfCol: { value: new H0() },
      uSelfShield: { value: 0 },
      uFlame: { value: new H0() },
      uGlowCol: { value: new H0() },
      uLanOff: { value: new H0(0.25, 1.38, 0.2) },
    };
  for (const y0 of ["uFade", "uFadeT", "uSelfPos", "uSelfCol", "uSelfShield"])
    n.uniforms[y0] = x[y0];
  n.fragmentShader = hn(n.fragmentShader);
  const e0 = (n.uniforms.uStrange = { value: new Fe() }),
    H = (n.uniforms.uStrangeP = { value: new Fe() }),
    z = (n.uniforms.uStrangeQ = { value: new Fe() }),
    Z = (n.uniforms.uAliveP = { value: n.uniforms.uAliveP.value.clone() }),
    p0 = Z.value.y;
  ((n.uniforms.uFaceTex2 = { value: Rn(i, n.uniforms.uFaceTex?.value) }),
    (e.strangeCfg = he),
    (n.vertexShader = mn(n.vertexShader)));
  const j = [0, 0, 0],
    t0 = [0, 0, 0];
  let A = -1,
    w = !1;
  const Y = c || [e.body],
    b = a1(new _1(), x, "priestFadeDepth"),
    g = a1(new q1(), x, "priestFadeDist");
  for (const y0 of Y)
    ((y0.customDepthMaterial = b), (y0.customDistanceMaterial = g));
  const N = new O1(pn(), gn(o, x));
  ((N.name = "priest_lantern"),
    (N.visible = !1),
    (N.castShadow = !1),
    (N.receiveShadow = !1),
    s.add(N));
  let V = !1,
    O = 0,
    i0 = !1,
    m0 = 0,
    S = 1;
  const P = new H0(),
    s0 = new H0(),
    o0 = { c: new H0(), v: new H0(), on: !1 },
    g0 = new H0(),
    w0 = new H0(),
    k0 = new H0(),
    q0 = new H0(),
    B0 = new Je();
  function P0(y0) {
    (g0.copy(Ln).applyQuaternion(t.wq[d0.handL]).add(t.wp[d0.handL]),
      !o0.on || !(y0 > 0) || y0 > 0.2
        ? (o0.c.set(g0.x, g0.y - 0.2, g0.z), o0.v.set(0, 0, 0), (o0.on = !0))
        : ((o0.v.x += ((g0.x - o0.c.x) * 49 - o0.v.x * 3.2) * y0),
          (o0.v.y += ((g0.y - 0.2 - o0.c.y) * 49 - o0.v.y * 3.2) * y0),
          (o0.v.z += ((g0.z - o0.c.z) * 49 - o0.v.z * 3.2) * y0),
          o0.c.addScaledVector(o0.v, y0)),
      k0.copy(g0).sub(o0.c),
      k0.lengthSq() < 1e-6 && k0.set(0, 1, 0),
      k0.normalize(),
      o0.c.copy(g0).addScaledVector(k0, -0.2),
      w0.copy(kn).applyQuaternion(t.wq[d0.handL]),
      w0.addScaledVector(k0, -w0.dot(k0)),
      w0.lengthSq() < 1e-4 && w0.set(1, 0, 0).addScaledVector(k0, -k0.x),
      w0.normalize(),
      q0.crossVectors(w0, k0),
      N.quaternion.setFromRotationMatrix(B0.makeBasis(w0, k0, q0)),
      N.position.copy(o0.c));
  }
  return {
    pointAt(y0) {
      y0 ? (f.copy(y0), (d = !0)) : (d = !1);
    },
    riseTurn() {
      return u0;
    },
    setFade(y0) {
      x.uFade.value = I0(+y0 || 0);
    },
    get fade() {
      return x.uFade.value;
    },
    flame(y0) {
      return y0.copy(s0);
    },
    holdLantern(y0) {
      ((V = !!y0), (o0.on = !1));
    },
    selfLight(y0, x0) {
      ((O = I0(+y0 || 0)),
        (i0 = !!x0),
        x0 && (Array.isArray(x0) ? P.set(x0[0], x0[1], x0[2]) : P.copy(x0)));
    },
    pre() {
      (d &&
        (s.updateWorldMatrix(!0, !1),
        u.copy(s.matrixWorld).invert(),
        t.pointPt.copy(f).applyMatrix4(u)),
        (t.pointOn = d));
    },
    prep() {
      const y0 = x.uFade.value,
        x0 = y0 <= 0.001;
      if (x0) for (const K of Y) K.visible = !1;
      ((N.visible = V && !x0), s0.copy(un).applyMatrix4(N.matrixWorld));
      const Y0 = i0 ? 0 : V ? 1 : 2;
      (Y0 === 0
        ? x.uSelfPos.value.copy(P)
        : Y0 === 1
          ? x.uSelfPos.value.copy(s0)
          : x.uSelfPos.value.copy(Mn).applyMatrix4(s.matrixWorld),
        (x.uSelfShield.value = Y0 === 1 ? 1 : 0));
      const R = O * vn * (Y0 === 1 ? S * R0(0, 0.4, y0) : 1);
      (x.uSelfCol.value.set(xt[0] * R, xt[1] * R, xt[2] * R),
        x.uFlame.value.copy(s0));
      const T = V ? S * R0(0, 0.4, y0) : 0;
      x.uGlowCol.value.set(Tt[0] * T, Tt[1] * T, Tt[2] * T);
    },
    dispose() {
      (b.dispose(), g.dispose(), N.material.dispose(), N.removeFromParent());
    },
    post(y0) {
      const x0 = t.state;
      (x0 === "rise" ? (u0 = y1(t.t)) : x0 === "pray" && (u0 = 0),
        (m0 += Math.max(y0, 0)),
        (x.uFadeT.value = m0),
        (S =
          0.9 +
          0.055 * Math.sin(m0 * 7.3 + 1.7) +
          0.035 * Math.sin(m0 * 13.1 + 3.1) * Math.sin(m0 * 2.3 + 1) +
          0.02 * Math.sin(m0 * 23 + 5.3)),
        V && P0(y0));
      const Y0 = x0 === "strange";
      (w &&
        !Y0 &&
        ((t0[0] = j[0]),
        (t0[1] = j[1]),
        (t0[2] = j[2]),
        (A = 0),
        G > 0.12 && y < 0 && (G = 0.12)),
        (w = Y0));
      let R = 0;
      (A >= 0 &&
        ((A += Math.max(y0, 0)),
        (R = 1 - R0(0, he.out, A)),
        R <= 0 && ((A = -1), (R = 0))),
        Y0 ? nn(t.t, j) : (j[0] = j[1] = j[2] = 0));
      for (let D0 = 0; D0 < 3; D0++) j[D0] = Math.max(j[D0], t0[D0] * R);
      (e0.value.set(j[0], j[1] * he.eyes, j[2], he.lean),
        H.value.set(he.stretch, he.lift, he.browIn, he.browUp),
        z.value.set(he.lidLean, 0, 0, 0),
        (Z.value.y = T0(p0, he.pupil, j[1])),
        (_.t -= y0),
        _.t <= 0 &&
          ((_.t = 0.5 + a() * 1.4),
          (_.x = (a() - 0.5) * 0.06),
          (_.y = (a() - 0.5) * 0.04)),
        Y0 && ((_.x *= 1 - j[1]), (_.y *= 1 - j[1])));
      let T, K, l0, h0;
      r.eyeOn && x0 !== "pray"
        ? (q(C, $), (T = $[0]), (K = $[1]), q(p, $), (l0 = $[0]), (h0 = $[1]))
        : ((T = l0 = 0),
          (K = h0 = x0 === "pray" || x0 === "still" ? -0.25 : -0.03));
      const C0 = y0 > 0 ? 1 - Math.exp(-y0 * 22) : 1;
      ((n0.lx += (T + _.x - n0.lx) * C0),
        (n0.ly += (K + _.y - n0.ly) * C0),
        (n0.rx += (l0 + _.x - n0.rx) * C0),
        (n0.ry += (h0 + _.y - n0.ry) * C0),
        l.set(n0.lx, n0.ly, n0.rx, n0.ry),
        (G -= y0),
        x0 === "taken" && t.t > 2.1 && (G = Math.max(G, 0.5)),
        Y0 && ((G = Math.max(G, 0.5)), (E = !1)),
        G <= 0 && y < 0 && ((y = 0), (E = a() < 0.2), (G = 3 + a() * 2)));
      let S0 = 0;
      y >= 0 &&
        ((y += y0),
        (S0 = y < 0.07 ? R0(0, 0.07, y) : y < 0.1 ? 1 : 1 - R0(0.1, 0.21, y)),
        y > 0.21 && (E ? ((E = !1), (y = 0)) : (y = -1)));
      let F0 = x0 === "pray" ? 1 : x0 === "still" ? 1 - R0(0.25, 0.5, t.t) : 0;
      (x0 === "pray_stand"
        ? (F0 = 1)
        : x0 === "flinch"
          ? (F0 = R0(0, 0.05, t.t) * (1 - R0(0.3, 0.55, t.t)) * 0.95)
          : x0 === "taken" && (F0 = R0(2.22, 2.6, t.t) * 0.88),
        c0 < 0 && (c0 = F0),
        (c0 += (F0 - c0) * (y0 > 0 ? 1 - Math.exp(-y0 * 12) : 1)));
      const E0 = I0(-(n0.ly + n0.ry) * 0.5 * 0.9, 0, 0.3);
      o.uBlink.value = I0(Math.max(S0, c0, E0));
    },
  };
}
const ht = { lanky: uo, brute: po, gown: bo };
ht.soldier = go;
ht.nun = vo;
ht.priest = ko;
Z1(x1);
const it = new Map();
function T1(e) {
  if (it.has(e)) return it.get(e);
  const o = ht[e];
  if (!o) throw new Error("unknown zombie kind " + e);
  const n = performance.now(),
    c = o(),
    t = (F) => {
      const J = new p1();
      return (
        J.setAttribute("position", new Ce(F.position, 3)),
        J.setAttribute("normal", new Ce(F.normal, 3)),
        J.setAttribute("skinIndex", new Y1(F.skinIndex, 4)),
        J.setAttribute("skinWeight", new G1(F.skinWeight, 4)),
        J.setAttribute("aMat", new Ce(F.aMat, 1)),
        J.setAttribute("aCol", new Ce(F.aCol, 4)),
        J.setAttribute("aAO", new Ce(F.aAO, 1)),
        J.setIndex(new Ce(F.index, 1)),
        (J.boundingSphere = new Ft(new H0(0, 0.9, 0), 2.3)),
        (J.boundingBox = new U1(
          new H0(-2.3, -0.2, -2.3),
          new H0(2.3, 2.3, 2.3),
        )),
        J
      );
    },
    s = $t(c),
    i = t(s),
    r = (F) =>
      t($t({ ...c, parts: c.parts.map((J) => ({ ...J, res: J.res * F })) })),
    l = r(1.7),
    a = r(2.8);
  let u = null;
  if (typeof document < "u") {
    const F = c.paintFace ? c.paintFace(c) : mo(c);
    ((u = new f1(F)),
      (u.colorSpace = m1),
      (u.premultiplyAlpha = !0),
      (u.anisotropy = 8),
      (u.minFilter = u1));
  }
  const f = ro(c, u),
    d = g1(b1, c.J),
    v = new w1();
  (v.add(d[0]), v.updateMatrixWorld(!0));
  const C = d.map((F) => new Je().copy(F.matrixWorld).invert()),
    p = {
      kind: e,
      def: c,
      geo: i,
      geoMid: l,
      geoLo: a,
      kindU: f,
      inv: C,
      faceTex: u,
      stats: s.stats,
      buildMs: Math.round(performance.now() - n),
    };
  return (it.set(e, p), p);
}
async function Fn(e = Object.keys(ht)) {
  for (const o of e) (T1(o), await new Promise((n) => setTimeout(n, 0)));
}
function En() {
  for (const e of it.values())
    (e.geo.dispose(), e.faceTex && e.faceTex.dispose());
  it.clear();
}
const C1 = (e) => e.weapons?.torch || null;
function Sn(e) {
  return Q1(e, {
    maxLevel: 0.7,
    minLevel: 0.04,
    rimAmt: 0.4,
    exclude: (o) => o === C1(e),
  });
}
const i1 = new H0(),
  r1 = new H0(),
  c1 = new H0();
