// assets/akane-CN21eJhw 23 — add
// Lines 7710-7979 of readable/assets/akane-CN21eJhw.pretty.js (statement-aligned).
function at(e, t = new Set()) {
  const a = new Map();
  for (const o of e.children)
    o.isMesh &&
      !t.has(o) &&
      (a.has(o.material) || a.set(o.material, []), a.get(o.material).push(o));
  for (const [o, r] of a) {
    if (r.length < 2) continue;
    const i = no(
      r.map(
        (s) => (s.updateMatrix(), s.geometry.clone().applyMatrix4(s.matrix)),
      ),
    );
    if (!i) continue;
    for (const s of r) (e.remove(s), s.geometry.dispose());
    const n = new te(i, o);
    ((n.castShadow = !0), (n.receiveShadow = !0), e.add(n));
  }
}
const rn = (18 * Math.PI) / 180;
function ln(e = {}) {
  const t = new ee();
  t.name = "pistol";
  const a = ft("study_gunmetal", { rough: 0.3 }),
    o = ye("#161719", { rough: 0.62 }),
    r = ye("#050506", { rough: 0.9 }),
    i = new Qt({ color: new Rt().setRGB(1.4, 1.4, 1.2), toneMapped: !1 }),
    n = ft("brass_aged"),
    s = (p, M, I, P, F, L, O, J, s0 = t) => {
      const $ = new te(new oo(p, M, I, 3, P), F);
      return (
        $.position.set(L, O, J),
        ($.castShadow = !0),
        ($.receiveShadow = !0),
        s0.add($),
        $
      );
    },
    u = new ee();
  ((u.name = "slide"),
    t.add(u),
    s(0.0305, 0.0385, 0.185, 0.0035, a, 0, 0.0605, 0.012, u),
    s(0.0322, 0.011, 0.02, 0.002, a, 0, 0.0525, 0.096, u));
  for (let p = 0; p < 8; p++)
    for (const M of [-1, 1])
      s(
        0.0012,
        0.028,
        0.0016,
        4e-4,
        r,
        M * 0.0154,
        0.0595,
        -0.0555 + p * 0.0034,
        u,
      );
  (s(9e-4, 0.011, 0.034, 3e-4, r, -0.0153, 0.066, 0.012, u),
    s(0.0035, 0.004, 0.006, 8e-4, a, 0, 0.0827, -0.072, u),
    s(0.0018, 0.0035, 0.0055, 4e-4, r, 0, 0.0851, -0.0745, u),
    s(0.0016, 0.0042, 0.0018, 3e-4, i, 0.0032, 0.0854, -0.0728, u),
    s(0.0016, 0.0042, 0.0018, 3e-4, i, -0.0032, 0.0854, -0.0728, u),
    s(0.0022, 0.0055, 0.0068, 6e-4, a, 0, 0.0845, 0.098, u),
    s(0.0011, 0.0011, 0.0011, 2e-4, i, 0, 0.0866, 0.1005, u),
    s(0.0272, 0.0245, 0.152, 0.003, o, 0, 0.0313, 0.0125 - 0.006, t));
  const l = new ee();
  (t.add(l),
    s(0.0245, 0.0032, 0.048, 0.0012, o, 0, 0.0055, 0.047, l),
    s(0.0245, 0.026, 0.0034, 0.0012, o, 0, 0.0185, 0.0705, l));
  const v = s(0.0068, 0.0215, 0.0048, 0.0012, a, 0, 0.0195, 0.033, t);
  ((v.rotation.x = -0.22), v.position.set(0, 0.0205, 0.0345));
  const g = new ee();
  ((g.name = "gripGroup"),
    t.add(g),
    g.position.set(0, 0.0275, -0.02),
    (g.rotation.x = rn),
    s(0.0295, 0.108, 0.0385, 0.0075, o, 0, -0.054, 0, g),
    s(0.0302, 0.014, 0.0392, 0.004, o, 0, -0.1085, 0, g));
  for (let p = 0; p < 3; p++)
    s(0.0298, 0.0028, 0.0016, 6e-4, r, 0, -0.03 - p * 0.0185, 0.0198, g);
  const m = new ee();
  ((m.name = "mag"),
    g.add(m),
    s(0.0244, 0.0035, 0.0326, 0.001, a, 0, -0.1163, 0, m),
    (s(
      0.0212,
      0.108,
      0.0296,
      0.0022,
      ye("#50545c", { rough: 0.5, metal: 0.35 }),
      0,
      -0.0605,
      4e-4,
      m,
    ).name = "magBody"),
    (s(
      0.0118,
      0.0034,
      0.0236,
      8e-4,
      ye("#c4561c", { rough: 0.5 }),
      0,
      -0.0052,
      0,
      m,
    ).name = "magFollower"));
  {
    const p = new ee();
    ((p.name = "magRound"), p.position.set(0.0023, -0.005, 0), m.add(p));
    const M = new te(new Ue(0.0048, 0.0048, 0.019, 14), n);
    ((M.rotation.x = Math.PI / 2), (M.position.z = -0.0045), p.add(M));
    const I = new te(new Jt(0.0046, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), n);
    ((I.rotation.x = Math.PI / 2),
      I.scale.set(1, 1.9, 1),
      (I.position.z = 0.005),
      p.add(I));
  }
  const y = (p) => {
      const M = ["magBody", "magFollower", "magRound"].map((I) =>
        p.getObjectByName(I),
      );
      return (I, P) => {
        ((M[0].visible = I), (M[1].visible = I && !P), (M[2].visible = I && P));
      };
    },
    k = y(m);
  k(!1, !0);
  const G = new te(new Ue(0.0064, 0.0064, 0.136, 16), a);
  ((G.rotation.x = Math.PI / 2), G.position.set(0, 0.0575, 0.0355), t.add(G));
  const d = new mt();
  (d.position.set(0, 0.0575, 0.112), t.add(d));
  const w = new mt();
  (w.position.set(-0.02, 0.066, 0), t.add(w));
  const f = new te(new Ht(0.0046, 20), r);
  (f.position.set(0, 0.0575, 0.1064), t.add(f));
  const C = new te(new Ue(0.0045, 0.0045, 0.028, 12), n);
  ((C.rotation.x = Math.PI / 2),
    C.position.set(0, 0.052, 0),
    (C.visible = !1),
    u.add(C),
    l.updateMatrix());
  for (const p of [...l.children]) (p.applyMatrix4(l.matrix), t.add(p));
  (t.remove(l),
    at(u, new Set([C])),
    at(t, new Set([v, G])),
    at(g),
    t.traverse((p) => {
      p.isMesh && (p.castShadow = !0);
    }));
  let x = 0;
  return {
    group: t,
    muzzle: d,
    eject: w,
    slide: u,
    trigger: v,
    mag: m,
    setSlide(p, M = !0) {
      ((x = p), (u.position.z = -0.032 * p), (C.visible = M && p > 0.6));
    },
    setTrigger(p) {
      ((v.rotation.x = -0.22 + 0.25 * p), (v.position.z = 0.0345 - 0.004 * p));
    },
    get slideK() {
      return x;
    },
    setMag(p, M = !0) {
      (m.position.set(0, -p, 0), k(p > 5e-4, M));
    },
    magClone() {
      const p = m.clone();
      (p.position.set(0, 0, 0), (p.visible = !0));
      const M = y(p);
      return (M(!0, !0), { group: p, show: (I) => M(!0, I) });
    },
    muzzleWorld(p, M) {
      (d.getWorldPosition(p), M.set(0, 0, 1).transformDirection(t.matrixWorld));
    },
  };
}
function cn(e, t = {}) {
  const a = t.pistol || ln(),
    o = sn(Et, {
      shadowSize: t.shadowSize ?? 2048,
      faceRes: t.faceRes ?? 2048,
      pistol: a,
    });
  (o.group.traverse((k) => {
    k.isMesh &&
      ((k.castShadow =
        !k.userData.hull && !(k.material && k.material.transparent)),
      (k.receiveShadow = !1));
  }),
    (o.drops.castShadow = !1));
  const r = new ee();
  ((r.name = "akane"), r.add(o.group, o.drops));
  const i = to(e, {
      maxLevel: 0.5,
      minLevel: 0.1,
      skinWarm: 0.4,
      skinTint: 0.16,
      ...t,
    }),
    n = new Me(),
    s = new Me(),
    u = new Me(),
    l = new Me();
  let v = !1,
    g = t.faceRes ?? 2048;
  const m = {
    root: r,
    char: o,
    rig: o.rig,
    pistol: a,
    env: null,
    forceFaceRes: 0,
    setPose: (k, G) => o.setPose(k, G),
    prepare: y,
    lightRig: null,
    dispose: () => o.dispose(),
  };
  m.dynamicBuffers = () => {
    const k = eo;
    r.traverse((G) => {
      const d = G.geometry;
      if (!(!d || !d.attributes)) {
        for (const w in d.attributes) {
          const f = d.attributes[w];
          f.isInterleavedBufferAttribute ? f.data.setUsage(k) : f.setUsage(k);
        }
        (d.index?.setUsage(k), d.dispose());
      }
    });
  };
  function y(k) {
    if (!r.visible) return;
    (r.updateMatrixWorld(!0), o.group.localToWorld(n.set(0, 1.15, 0.05)));
    const G = i.at(n);
    (o.rig.head.getWorldPosition(s), k.getWorldPosition(u));
    const d = Math.max(0.05, s.distanceTo(u)),
      w = e.post.sceneTarget.height,
      f = (0.26 / (2 * Math.tan((k.fov * Math.PI) / 360) * d)) * w,
      C = Math.max(1, Math.min(2.6, 0.7 + f / 220)) * (w / 1080);
    ((v = v ? f > 280 : f > 360),
      (g = g > 2048 ? (f > 560 ? 4096 : 2048) : f > 780 ? 4096 : 2048),
      m.forceFaceRes && (g = m.forceFaceRes));
    const x = v
      ? [s.x, s.y - 0.02, s.z]
      : o.group.localToWorld(l.set(0, 0.9, 0.05)).toArray();
    o.prepare(e.renderer, k, {
      world: G,
      height: w,
      outlinePx: C,
      shadowCenter: x,
      shadowRadius: v ? 0.32 : 1.05,
      env: m.env,
      faceRes: g,
      warp: 11,
      micClear: !1,
      shadowSoft: g > 2048,
    });
  }
  return ((m.lightRig = i), m);
}
const mn = Object.freeze(
  Object.defineProperty(
    { __proto__: null, createAkane: cn },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
