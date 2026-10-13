// assets__index-BcIwWgby 07 — math
// Lines 1578-1702 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Vn(s, o, t) {
  const u = { uSwimT: { value: 0 } },
    e = Ln(),
    r = 10,
    a = [0, 0, 1, 2, 3, 5, 0, 1, 4, 2],
    p = new Float32Array(r * 4),
    i = [];
  for (let I = 0; I < r; I++) {
    const R = (a[I] + 0.1 + t() * 0.8) / 6;
    t();
    let V, L;
    do ((V = -9 + t() * 12.5), (L = -3.8 + t() * 7.4));
    while (J0(V, L) > -0.9);
    (t(), i.push({ size: 0.42 + t() * 0.26 }), t(), p.set([R, 0, 0, 1], I * 4));
  }
  let d = 918273;
  const y = () => ((d = (d * 16807) % 2147483647), d / 2147483647),
    w = [];
  {
    const I = Yt.b[0] - Yt.a[0],
      R = Yt.b[1] - Yt.a[1],
      V = Math.hypot(I, R),
      L = -R / V,
      K = I / V;
    for (const j of [0.2, 0.5, 0.8])
      for (const O of [-1, 1])
        w.push([
          Yt.a[0] + I * j + L * O * 0.483,
          Yt.a[1] + R * j + K * O * 0.483,
          0.1,
        ]);
  }
  const g = Nn({
      sdf: J0,
      depth: dn,
      waterY: v0,
      rng: y,
      specs: i,
      posts: w,
      onRise: (I, R, V) => o.ripple(I, R, V),
    }),
    z = g.fish;
  e.setAttribute("aKoi", new M0(p, 4));
  const x = Dn(o.causU, u),
    v = new l0(e, x, r);
  ((v.name = "koi"),
    (v.frustumCulled = !1),
    v.layers.set(_e),
    (v.receiveShadow = !0));
  const n = e.clone(),
    l = new Float32Array(12);
  for (let I = 0; I < 3; I++) l.set([(I * 2 + 0.5) / 6, 0, 0, 0], I * 4);
  n.setAttribute("aKoi", new M0(l, 4));
  const f = new l0(n, x, 3);
  ((f.name = "koi_dead"), (f.visible = !1), f.layers.enable(_e));
  const h = new wt(),
    c = new w0(),
    M = new pe(),
    m = new dt(),
    k = new dt(),
    S = [
      [-6.2, -0.4, 0.7],
      [0.4, 1.5, 2.2],
      [-3.5, -1.8, 4],
    ];
  let A = null;
  const b = o.causU.uKoiA.value,
    P = o.causU.uKoiB.value;
  function _(I, R) {
    if (((u.uSwimT.value = R), !v.visible)) {
      for (const V of P) V.x = 0;
      for (let V = 0; V < 3; V++) {
        const L = S[V];
        (M.set(
          0,
          L[2] + Math.sin(R * 0.07 + V) * 0.3,
          Math.PI / 2 + 0.25,
          "YXZ",
        ),
          c.setFromEuler(M),
          k.set(
            L[0] + Math.sin(R * 0.05 + V * 2) * 0.3,
            v0 + 0.012 + Math.sin(R * 0.9 + V) * 0.004,
            L[1] + Math.cos(R * 0.04 + V) * 0.3,
          ),
          h.compose(k, c, m.setScalar(0.5 + V * 0.07)),
          f.setMatrixAt(V, h));
      }
      f.instanceMatrix.needsUpdate = !0;
      return;
    }
    g.step(Math.min(I, 0.1), R, A);
    for (const V of z)
      ((p[V.i * 4 + 1] = V.phase),
        (p[V.i * 4 + 2] = V.bend),
        (p[V.i * 4 + 3] = 0.35 + 0.65 * V.effort),
        M.set(
          -V.pitch,
          V.yaw,
          Math.sin(R * 0.8 + V.i) * 0.04 - V.bend * 0.25,
          "YXZ",
        ),
        c.setFromEuler(M),
        h.compose(k.set(V.x, V.y, V.z), c, m.setScalar(V.size)),
        v.setMatrixAt(V.i, h),
        V.i < bo &&
          (b[V.i].set(V.x, V.y, V.z, V.yaw),
          P[V.i].set(V.size, V.bend, V.phase, p[V.i * 4 + 3])));
    ((v.instanceMatrix.needsUpdate = !0), (e.attributes.aKoi.needsUpdate = !0));
  }
  return {
    school: v,
    dead: f,
    fish: z,
    update: _,
    watch(I) {
      A = I;
    },
    setWorld(I) {
      const R = I === "ruins";
      ((v.visible = !R), (f.visible = R));
    },
  };
}
const Ht = (s, o, t) => new dt(s, o, t);
