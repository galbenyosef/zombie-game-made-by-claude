// assets__lightrig-BOum5aAY 02 — math
// Lines 350-556 of readable/assets__lightrig-BOum5aAY.pretty.js (statement-aligned).
const rt = (e) => 0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b,
  mt = new O(),
  ht = new O(),
  yt = new O(),
  Y = new A(),
  ft = new O();
function wt(e, r, f, s) {
  if (
    (f.copy(e.color).multiplyScalar(e.intensity),
    e.getWorldPosition(mt),
    e.isDirectionalLight)
  ) {
    (e.target.getWorldPosition(ht), s.copy(mt).sub(ht).normalize());
    return;
  }
  s.copy(mt).sub(r);
  const p = Math.max(s.length(), 0.001);
  s.divideScalar(p);
  let C = 1 / Math.max(Math.pow(p, e.decay ?? 2), 0.01);
  if (e.distance > 0) {
    const c = Math.max(0, Math.min(1, 1 - Math.pow(p / e.distance, 4)));
    C *= c * c;
  }
  if (e.isSpotLight) {
    (e.target.getWorldPosition(ht), yt.copy(ht).sub(mt).normalize());
    const c = -s.dot(yt),
      M = Math.cos(e.angle),
      u = Math.cos(e.angle * (1 - e.penumbra)),
      i = Math.max(0, Math.min(1, (c - M) / Math.max(u - M, 1e-4)));
    C *= i * i * (3 - 2 * i);
  }
  f.multiplyScalar(C);
}
const Mt = new WeakMap();
function gt(e) {
  const r = e.scene,
    f = e.time ?? 0;
  let s = Mt.get(r);
  if (!s || f < s.t || f - s.t > 2) {
    const p = [];
    (r.traverse((C) => {
      C.isLight && !C.userData.noActor && p.push(C);
    }),
      (s = { t: f, lights: p }),
      Mt.set(r, s));
  }
  return s.lights;
}
function Dt(e, r = {}) {
  const f = new A(),
    s = new A(),
    p = new A(0.4, 0.5, 0.9),
    C = new A(1, 1, 1),
    c = new O(0.3, 0.8, 0.5),
    M = new A(0.02, 0.025, 0.035),
    u = {
      keyDir: c,
      keyCol: f,
      ambGain: C,
      ambCol: s,
      ambRGB: M,
      amb: 0.5,
      rimCol: p,
      rimAmt: 0.35,
      rimDir: [1, -0.2],
      comp: 1,
      skinTint: r.skinTint ?? 0.2,
      skinWarm: r.skinWarm ?? 0.22,
    },
    i = {
      keyDir: new O(),
      keyCol: new A(),
      ambCol: new A(),
      ambGain: new A(),
      rimCol: new A(),
      ambRGB: new A(),
      amb: 0.5,
    },
    S = r.exclude || null,
    b = [],
    g = new A(),
    h = new A(),
    w = new A(),
    y = new A(),
    q = new A(),
    G = new A(),
    H = new O();
  let J = -1,
    W = !1;
  const k = new Map();
  let j = 0;
  function z(I, V, N) {
    const U = gt(e);
    (w.setRGB(0, 0, 0), G.setRGB(0, 0, 0), g.setRGB(0, 0, 0));
    let R = 0,
      x = 0,
      Z = 0;
    (i.keyDir.set(0, 0, 0), j++);
    const _ = 1 - Math.exp(-30 * V),
      d = 1 - Math.exp(-2 * V);
    for (const t of U) {
      if (!t.visible || !(t.intensity > 0)) continue;
      if (t.isHemisphereLight || t.isAmbientLight) {
        ((w.r += t.color.r * t.intensity),
          (w.g += t.color.g * t.intensity),
          (w.b += t.color.b * t.intensity));
        continue;
      }
      if (
        !(t.isDirectionalLight || t.isPointLight || t.isSpotLight) ||
        (t.isSpotLight && t.userData.actorMask === !1) ||
        (S && S(t))
      )
        continue;
      (wt(t, I, Y, ft), Y.multiplyScalar(t.userData.actorGain ?? 1));
      const n = rt(Y);
      if (n < 1e-5) continue;
      let l = b[R];
      (l || (l = b[R] = { E: new A(), dir: new O(), lum: 0 }),
        l.E.copy(Y),
        l.dir.copy(ft),
        (l.lum = n),
        R++,
        G.add(Y));
      let m = k.get(t);
      (m || ((m = { s: n, dir: new O(), f: 0 }), k.set(t, m)),
        (m.s = N ? n : m.s + (n - m.s) * (n > m.s ? _ : d)),
        m.dir.copy(ft),
        (m.f = j));
    }
    for (const [t, n] of k)
      n.f !== j && ((n.s = N ? 0 : n.s * (1 - d)), n.s < 1e-5 && k.delete(t));
    for (let t = 0; t < R; t++) {
      const n = b[t],
        l = n.lum * n.lum;
      ((x += l), (g.r += n.E.r * l), (g.g += n.E.g * l), (g.b += n.E.b * l));
    }
    for (const t of k.values()) {
      const n = t.s * t.s;
      ((Z += n), i.keyDir.addScaledVector(t.dir, n));
    }
    (x > 0 && g.multiplyScalar(1 / x),
      Z > 0 && i.keyDir.lengthSq() > 1e-10
        ? i.keyDir.normalize()
        : R > 0
          ? i.keyDir.copy(b[0].dir)
          : i.keyDir.set(0.3, 0.8, 0.5).normalize());
    const $ = rt(g);
    h.setRGB(
      Math.max(0, G.r - g.r),
      Math.max(0, G.g - g.g),
      Math.max(0, G.b - g.b),
    );
    const Q = r.lightScale ?? 1,
      tt = (Math.max(0.05, $) / Math.PI) * Q;
    (y
      .copy(g)
      .multiplyScalar(1 / Math.max($, 1e-5))
      .lerp(Y.setRGB(1, 1, 1), 0.25),
      y.multiplyScalar(1 / Math.max(rt(y), 1e-4)));
    const P = Math.min(r.maxLevel ?? 1.1, Math.max(r.minLevel ?? 0.16, tt));
    i.keyCol.copy(y).multiplyScalar(P);
    const nt = r.hemiGain ?? 1;
    (q.copy(h).multiplyScalar(Q / Math.PI),
      (q.r += ((w.r * Q) / Math.PI) * nt),
      (q.g += ((w.g * Q) / Math.PI) * nt),
      (q.b += ((w.b * Q) / Math.PI) * nt));
    const a = Math.max(rt(q), 0.012);
    (i.ambRGB.copy(q),
      i.ambCol.copy(q).multiplyScalar(1 / a),
      (i.amb = Math.min(0.9, Math.max(0.18, (a / Math.max(P, 0.05)) * 1.6))),
      i.ambGain
        .setRGB(1, 1, 1)
        .multiplyScalar(Math.min(1, P / 0.5) * 0.75 + 0.25));
    const o = rt(h) + $ * 0.15;
    i.rimCol
      .copy(h)
      .add(Y.copy(g).multiplyScalar(0.15))
      .multiplyScalar(0.8 / Math.max(o, 1e-4));
  }
  function D(I) {
    const V = e.time ?? 0,
      N = r.smooth ?? 9,
      U = V - J,
      R = !W || N <= 0 || U < 0 || U > 0.5 || I.distanceToSquared(H) > 1;
    z(I, Math.max(0, U), R);
    const x = R ? 1 : 1 - Math.exp(-N * Math.max(0, U));
    return (
      (J = V),
      H.copy(I),
      (W = !0),
      x > 0 &&
        (c.lerp(i.keyDir, x),
        c.lengthSq() < 1e-6 ? c.copy(i.keyDir) : c.normalize(),
        f.lerp(i.keyCol, x),
        s.lerp(i.ambCol, x),
        C.lerp(i.ambGain, x),
        p.lerp(i.rimCol, x),
        M.lerp(i.ambRGB, x),
        (u.amb += (i.amb - u.amb) * x)),
      (u.rimAmt = r.rimAmt ?? 0.35),
      (u.comp = r.exposure ?? 1),
      u
    );
  }
  return { at: D, W: u, opts: r, raw: i };
}
