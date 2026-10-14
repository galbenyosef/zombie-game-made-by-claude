// assets/index-Db-AsSxU 29 — copy
// Lines 11875-12127 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
function createZombie(e, o = {}) {
  const n = e.game || e,
    c = o.kind || "lanky",
    t = o.seed ?? 1,
    s = getKit(c),
    i = performance.now(),
    r = s.def,
    l = new w1();
  l.name = "zombie_" + c;
  const a = g1(b1, r.J);
  (l.add(a[0]), l.updateMatrixWorld(!0));
  const u = new K1(
      a,
      s.inv.map((q) => q.clone()),
    ),
    f = co();
  f.uSeed.value = ((t * 7.31) % 13) + 0.5;
  const d = new Ut(s.geo, fo(s.kindU, f));
  ((d.name = "body"), l.add(d));
  const v = new Je();
  (d.bind(u, v),
    (d.boundingSphere = new Ft(new H0(0, 0.9, 0), 2.3)),
    (d.castShadow = !0),
    (d.receiveShadow = !1));
  const C = [d];
  for (const [q, $] of [
    [s.geoMid, "body_mid"],
    [s.geoLo, "body_lo"],
  ]) {
    const x = new Ut(q, d.material);
    ((x.name = $),
      l.add(x),
      x.bind(u, v),
      (x.boundingSphere = new Ft(new H0(0, 0.9, 0), 2.3)),
      (x.castShadow = !1),
      (x.receiveShadow = !1),
      (x.visible = !1),
      C.push(x));
  }
  const p = new V1(r, t);
  p.apply(a);
  const F = Sn(n),
    J = new H0(),
    n0 = new H0();
  let _ = o.speed ?? 1,
    G = null;
  const y = new Je();
  let E = null;
  function c0(q, $, x) {
    const e0 = a[q.bone].matrixWorld;
    ($.copy(q.a).applyMatrix4(e0), x.copy(q.b).applyMatrix4(e0));
  }
  const u0 = {
    root: l,
    kind: c,
    seed: t,
    bones: a,
    skeleton: u,
    body: d,
    anim: p,
    def: r,
    height: r.height,
    onEvent: null,
    buildMs: s.buildMs,
    get state() {
      return p.state;
    },
    get time() {
      return p.t;
    },
    get dead() {
      return p.dead;
    },
    get down() {
      return p.down;
    },
    get groundSpeed() {
      return p.groundSpeed;
    },
    get speed() {
      return _;
    },
    setState(q, $ = {}) {
      ($.speed != null && (_ = $.speed),
        p.setState(q, $, !!$.instant),
        $.instant && p.apply(a));
    },
    lookAt(q, $ = 0.85) {
      ((G = q || null), (p.lookW = $), q || (p.look = null));
    },
    update(q, $) {
      ($ && $.speed != null && (_ = $.speed),
        G &&
          (l.updateWorldMatrix(!0, !1),
          y.copy(l.matrixWorld).invert(),
          p.lookPt.copy(G).applyMatrix4(y),
          (p.look = p.lookPt)),
        E && E.pre(q),
        p.update(q, _),
        p.apply(a),
        E && E.post(q));
      const x = p.events;
      if (x.length) {
        for (let e0 = 0; e0 < x.length; e0++)
          u0.onEvent && u0.onEvent(x[e0][0], x[e0][1]);
        x.length = 0;
      }
    },
    hitTest(q, $, x = 100) {
      l.updateWorldMatrix(!0, !0);
      let e0 = null,
        H = x;
      for (const z of p.vols) {
        c0(z, r1, c1);
        const Z = An(q, $, r1, c1, z.r * l.scale.x);
        Z >= 0 && Z < H && ((H = Z), (e0 = z));
      }
      return e0
        ? {
            zone: e0.zone,
            point: q.clone().addScaledVector($, H),
            distance: H,
            bone: bt[e0.bone],
          }
        : null;
    },
    headWorld(q = new H0()) {
      return (
        l.updateWorldMatrix(!0, !0),
        q.set(0, 0.07, 0.02).applyMatrix4(a[d0.head].matrixWorld)
      );
    },
    chestWorld(q = new H0()) {
      return (
        l.updateWorldMatrix(!0, !0),
        q.set(0, 0.08, 0.04).applyMatrix4(a[d0.chest].matrixWorld)
      );
    },
    prepare(q) {
      if (!l.visible) return;
      l.updateWorldMatrix(!0, !0);
      {
        const H = q.position.distanceToSquared(l.position),
          z = H < 12.25 ? 0 : H < 100 ? 1 : 2;
        for (let Z = 0; Z < 3; Z++)
          ((C[Z].visible = Z === z), (C[Z].castShadow = Z === z && H < 81));
      }
      u0.chestWorld(i1);
      const $ = F.at(i1);
      (f.uKeyDir.value.copy($.keyDir),
        f.uKeyCol.value.copy($.keyCol),
        f.uAmbGain.value.copy($.ambGain),
        f.uAmbCol.value.copy($.ambCol),
        f.uAmbRGB.value.copy($.ambRGB),
        (f.uAmb.value = $.amb),
        f.uRimCol.value.copy($.rimCol),
        (f.uRimAmt.value = $.rimAmt));
      const x = $.rimDir || [1, -0.2];
      (f.uRimDir.value
        .set(x[0], -x[1], -0.35)
        .normalize()
        .applyQuaternion(q.quaternion),
        (f.uExposure.value = $.comp ?? 1));
      const e0 = C1(n);
      (e0 && e0.visible && e0.intensity > 0
        ? (e0.getWorldPosition(J),
          e0.target.getWorldPosition(n0),
          f.uTorchPos.value.copy(J),
          f.uTorchDir.value.copy(n0).sub(J).normalize(),
          f.uTorchCol.value.copy(e0.color).multiplyScalar(e0.intensity),
          f.uTorchP.value.set(
            Math.cos(e0.angle),
            Math.cos(e0.angle * (1 - e0.penumbra)),
            e0.distance || 1e4,
            e0.decay ?? 2,
          ))
        : f.uTorchCol.value.setRGB(0, 0, 0),
        E && E.prep(q));
    },
    setSilhouette(q) {
      f.uSil.value = q ? 1 : 0;
    },
    dispose() {
      (l.removeFromParent(),
        d.material.dispose(),
        u.dispose(),
        E && E.dispose());
    },
  };
  return (
    (u0.setMouth = (q) => {
      p.mouth = q;
    }),
    (u0.pointAt = (q) => {
      E && E.pointAt(q);
    }),
    Object.defineProperty(u0, "riseTurn", {
      get: () => (E ? E.riseTurn() : 0),
    }),
    (u0.setFade = (q) => {
      E && E.setFade(q);
    }),
    (u0.holdLantern = (q) => {
      E && E.holdLantern(q);
    }),
    (u0.selfLight = (q, $) => {
      E && E.selfLight(q, $);
    }),
    (u0.lanternWorld = (q = new H0()) => (E ? E.flame(q) : null)),
    Object.defineProperty(u0, "fade", { get: () => (E ? E.fade : 1) }),
    r.alive && (E = yn(u0, f, d.material, C)),
    (u0.createMs = performance.now() - i),
    u0
  );
}
function An(e, o, n, c, t) {
  const s = c.x - n.x,
    i = c.y - n.y,
    r = c.z - n.z,
    l = e.x - n.x,
    a = e.y - n.y,
    u = e.z - n.z,
    f = s * s + i * i + r * r,
    d = s * o.x + i * o.y + r * o.z,
    v = s * l + i * a + r * u,
    C = o.x * l + o.y * a + o.z * u,
    p = l * l + a * a + u * u,
    F = f - d * d;
  let J = f * C - v * d,
    n0 = f * p - v * v - t * t * f,
    _ = J * J - F * n0;
  if (F > 1e-9 && _ >= 0) {
    const y = (-J - Math.sqrt(_)) / F,
      E = v + y * d;
    if (E > 0 && E < f && y >= 0) return y;
  }
  let G = -1;
  for (const y of [n, c]) {
    const E = e.x - y.x,
      c0 = e.y - y.y,
      u0 = e.z - y.z;
    if (
      ((J = o.x * E + o.y * c0 + o.z * u0),
      (n0 = E * E + c0 * c0 + u0 * u0 - t * t),
      (_ = J * J - n0),
      _ >= 0)
    ) {
      const q = -J - Math.sqrt(_);
      q >= 0 && (G < 0 || q < G) && (G = q);
    }
  }
  return G;
}
