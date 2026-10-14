// assets/index-DaQlAVPp 10 — position
// Lines 38071-38321 of readable/assets/index-DaQlAVPp.pretty.js (statement-aligned).
function kd(r) {
  let e = 0;
  const t = r.map((l) => (l.index ? l.toNonIndexed() : l));
  for (const l of t) e += l.attributes.position.count;
  const n = new Float32Array(e * 3),
    i = new Float32Array(e * 3),
    s = new Float32Array(e * 2);
  let a = 0;
  for (const l of t) {
    const c = l.attributes.position.count;
    (n.set(l.attributes.position.array, a * 3),
      i.set(l.attributes.normal.array, a * 3),
      l.attributes.uv && s.set(l.attributes.uv.array, a * 2),
      (a += c));
  }
  const o = new Je();
  return (
    o.setAttribute("position", new ot(n, 3)),
    o.setAttribute("normal", new ot(i, 3)),
    o.setAttribute("uv", new ot(s, 2)),
    o.computeBoundingSphere(),
    o.computeBoundingBox(),
    o
  );
}
function gS(r) {
  return () => {
    ((r |= 0), (r = (r + 1831565813) | 0));
    let e = Math.imul(r ^ (r >>> 15), 1 | r);
    return (
      (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
class RoomEnvironment extends Vr {
  constructor() {
    (super(), (this.name = "RoomEnvironment"), (this.position.y = -3.5));
    const e = new Zt();
    e.deleteAttribute("uv");
    const t = new ss({ side: Wt }),
      n = new ss(),
      i = new Oh(16777215, 900, 28, 2);
    (i.position.set(0.418, 16.199, 0.3), this.add(i));
    const s = new rt(e, t);
    (s.position.set(-0.757, 13.219, 0.717),
      s.scale.set(31.713, 28.305, 28.591),
      this.add(s));
    const a = new _h(e, n, 6),
      o = new lt();
    (o.position.set(-10.906, 2.009, 1.846),
      o.rotation.set(0, -0.195, 0),
      o.scale.set(2.328, 7.905, 4.651),
      o.updateMatrix(),
      a.setMatrixAt(0, o.matrix),
      o.position.set(-5.607, -0.754, -0.758),
      o.rotation.set(0, 0.994, 0),
      o.scale.set(1.97, 1.534, 3.955),
      o.updateMatrix(),
      a.setMatrixAt(1, o.matrix),
      o.position.set(6.167, 0.857, 7.803),
      o.rotation.set(0, 0.561, 0),
      o.scale.set(3.927, 6.285, 3.687),
      o.updateMatrix(),
      a.setMatrixAt(2, o.matrix),
      o.position.set(-2.017, 0.018, 6.124),
      o.rotation.set(0, 0.333, 0),
      o.scale.set(2.002, 4.566, 2.064),
      o.updateMatrix(),
      a.setMatrixAt(3, o.matrix),
      o.position.set(2.291, -0.756, -2.621),
      o.rotation.set(0, -0.286, 0),
      o.scale.set(1.546, 1.552, 1.496),
      o.updateMatrix(),
      a.setMatrixAt(4, o.matrix),
      o.position.set(-2.193, -0.369, -5.547),
      o.rotation.set(0, 0.516, 0),
      o.scale.set(3.875, 3.487, 2.986),
      o.updateMatrix(),
      a.setMatrixAt(5, o.matrix),
      this.add(a));
    const l = new rt(e, Is(50));
    (l.position.set(-16.116, 14.37, 8.208),
      l.scale.set(0.1, 2.428, 2.739),
      this.add(l));
    const c = new rt(e, Is(50));
    (c.position.set(-16.109, 18.021, -8.207),
      c.scale.set(0.1, 2.425, 2.751),
      this.add(c));
    const h = new rt(e, Is(17));
    (h.position.set(14.904, 12.198, -1.832),
      h.scale.set(0.15, 4.265, 6.331),
      this.add(h));
    const d = new rt(e, Is(43));
    (d.position.set(-0.462, 8.89, 14.52),
      d.scale.set(4.38, 5.441, 0.088),
      this.add(d));
    const u = new rt(e, Is(20));
    (u.position.set(3.235, 11.486, -12.541),
      u.scale.set(2.5, 2, 0.1),
      this.add(u));
    const f = new rt(e, Is(100));
    (f.position.set(0, 20, 0), f.scale.set(1, 0.1, 1), this.add(f));
  }
  dispose() {
    const e = new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (const t of e) t.dispose();
  }
}
function Is(r) {
  return new Ch({ color: 0, emissive: 16777215, emissiveIntensity: r });
}
function xS(r) {
  const { scene: e, renderer: t } = r;
  ((e.background = new ye(197639)), (e.fog = new zr(461070, 0.032)));
  const n = new ko(12372963, 0.6);
  (n.position.set(15.04, 12.65, -32.52),
    n.target.position.set(6, 1, 10),
    (n.castShadow = !0),
    n.shadow.mapSize.set(4096, 4096));
  const i = n.shadow.camera;
  ((i.left = -16),
    (i.right = 16),
    (i.top = 14),
    (i.bottom = -14),
    (i.near = 1),
    (i.far = 80),
    (n.shadow.bias = -4e-4),
    (n.shadow.normalBias = 0.02),
    (n.name = "moon"),
    (n.userData.noActor = !1),
    e.add(n, n.target));
  const s = new ko(16738858, 0.5);
  (s.position.set(24.2, 5.7, -30.9),
    s.target.position.set(6, 1, 10),
    (s.name = "fire"),
    (s.castShadow = !0),
    s.shadow.mapSize.set(2048, 2048));
  {
    const c = s.shadow.camera;
    ((c.left = -16),
      (c.right = 16),
      (c.top = 14),
      (c.bottom = -14),
      (c.near = 1),
      (c.far = 80));
  }
  ((s.shadow.bias = -5e-4), (s.shadow.normalBias = 0.02), e.add(s, s.target));
  const a = new Nh(1712691, 722693, 0.08);
  ((a.name = "hemi"), e.add(a));
  const o = new zo(t),
    l = o.fromScene(new RoomEnvironment(), 0.04).texture;
  return (
    (e.environment = l),
    (e.environmentIntensity = 0.045),
    o.dispose(),
    { moon: n, fire: s, hemi: a, env: l }
  );
}
const ROOM_LOADERS = {
    bedroom: () =>
      Gt(
        () => import("./bedroom-Se-_w21f.js"),
        __vite__mapDeps([0, 1, 2]),
        import.meta.url,
      ),
    hall: () =>
      Gt(
        () => import("./hall-C7P9MLkg.js"),
        __vite__mapDeps([3, 4, 2, 5]),
        import.meta.url,
      ),
    study: () =>
      Gt(
        () => import("./study-C-Lxctw8.js"),
        __vite__mapDeps([6, 4, 2, 5]),
        import.meta.url,
      ),
    living: () =>
      Gt(
        () => import("./living-DeOLLwnx.js"),
        __vite__mapDeps([7, 5]),
        import.meta.url,
      ),
    exterior: () =>
      Gt(() => import("./exterior-BqAhvNw2.js"), [], import.meta.url),
    lab: () => Gt(() => import("./lab-C35YMKXq.js"), [], import.meta.url),
    zombies: () =>
      Gt(
        () => import("./lab-DIaoglYu.js"),
        __vite__mapDeps([8, 9, 10, 11]),
        import.meta.url,
      ),
    akane: () =>
      Gt(
        () => import("./akane_lab-C9tKDZYg.js"),
        __vite__mapDeps([12, 13, 11, 2, 5]),
        import.meta.url,
      ),
    garden: () =>
      Gt(
        () => import("./index-BcIwWgby.js"),
        __vite__mapDeps([14, 15, 16, 1, 2, 17, 5, 18]),
        import.meta.url,
      ),
    part3: () =>
      Gt(
        () => import("./index-U-kV3K8W.js"),
        __vite__mapDeps([
          19, 15, 16, 1, 2, 17, 20, 21, 22, 23, 24, 18, 5, 25, 26,
        ]),
        import.meta.url,
      ),
    metro: () =>
      Gt(
        () => import("./lab_metro-lF7do2Pb.js"),
        __vite__mapDeps([27, 28, 20, 21, 22, 1, 2, 23, 17]),
        import.meta.url,
      ),
    park: () =>
      Gt(
        () => import("./lab_park-Qy6dpCC3.js"),
        __vite__mapDeps([29, 28, 20, 24, 22, 1, 2, 18, 5, 16]),
        import.meta.url,
      ),
    city: () =>
      Gt(
        () => import("./lab_city-Bdm3u4EP.js"),
        __vite__mapDeps([30, 28, 20, 25, 22, 1, 2, 23, 17]),
        import.meta.url,
      ),
    train: () =>
      Gt(
        () => import("./lab-n3Z2_Qkz.js"),
        __vite__mapDeps([31, 28, 20, 32, 2, 22, 1]),
        import.meta.url,
      ),
    heli: () =>
      Gt(
        () => import("./lab-Cas1v10u.js"),
        __vite__mapDeps([33, 28, 20, 22, 1, 2, 34, 35]),
        import.meta.url,
      ),
  },
  vS = ["exterior", "bedroom", "hall", "study", "living"],
  Vd = { 1: vS, 2: ["garden"], 3: ["part3"] },
  Cc = 1.12,
  Gd = "./";
