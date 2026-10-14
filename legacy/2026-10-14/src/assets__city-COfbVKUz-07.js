// assets__city-COfbVKUz 07 — push
// Lines 1999-2148 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
function W0(m, e, d, { objLocal: n = !1 } = {}) {
  const h = { DETAIL: d };
  n && (h.OBJLOCAL = 1);
  const c = r0({
    vertexShader: Fe,
    fragmentShader: Ce,
    uniforms: { ...m, uBld: { value: e } },
    defines: h,
  });
  return ((c.name = "city3_facade_" + d + (n ? "_obj" : "")), c);
}
function Ne(m) {
  const e = m.length,
    d = Math.ceil((e * yt) / tt),
    n = new Float32Array(tt * Math.max(1, d) * 4);
  for (const c of m) {
    const w = c.id * yt * 4;
    n.set(
      [
        c.x,
        c.base,
        c.z,
        c.rot || 0,
        c.w,
        c.h,
        c.d,
        c.seed,
        c.flH,
        c.bay,
        c.style,
        c.tone,
        c.lit,
        c.burnF,
        c.burnN,
        c.dmg,
        c.groundH || 0,
        c.tint,
        c.faces,
        c.flags,
        0,
        0,
        0,
        0,
      ],
      w,
    );
  }
  const h = new Vt(n, tt, Math.max(1, d), se, ae);
  return (
    (h.minFilter = Tt),
    (h.magFilter = Tt),
    (h.generateMipmaps = !1),
    (h.needsUpdate = !0),
    h
  );
}
const A0 = (m, e) => m + 32768 * e;
class l0 {
  constructor() {
    ((this.pos = []), (this.nor = []), (this.part = []), (this.idx = []));
  }
  get count() {
    return this.pos.length / 3;
  }
  box(e, d, n, h, c, w, s) {
    if (h - e < 0.001 || c - d < 0.001 || w - n < 0.001) return;
    const x = this.pos,
      k = this.nor,
      P = this.part,
      _ = this.idx,
      g = (M, N, T, S, v) => {
        const a = x.length / 3;
        x.push(...M, ...N, ...T, ...S);
        for (let r = 0; r < 4; r++) (k.push(...v), P.push(s));
        _.push(a, a + 1, a + 2, a, a + 2, a + 3);
      };
    (g([h, d, w], [h, d, n], [h, c, n], [h, c, w], [1, 0, 0]),
      g([e, d, n], [e, d, w], [e, c, w], [e, c, n], [-1, 0, 0]),
      g([e, c, w], [h, c, w], [h, c, n], [e, c, n], [0, 1, 0]),
      g([e, d, n], [h, d, n], [h, d, w], [e, d, w], [0, -1, 0]),
      g([e, d, w], [h, d, w], [h, c, w], [e, c, w], [0, 0, 1]),
      g([h, d, n], [e, d, n], [e, c, n], [h, c, n], [0, 0, -1]));
  }
  obox(e, d, n, h, c, w, s, x) {
    if (!s) {
      this.box(
        e - h / 2,
        d - c / 2,
        n - w / 2,
        e + h / 2,
        d + c / 2,
        n + w / 2,
        x,
      );
      return;
    }
    const k = new kt(h, c, w);
    (k.rotateY(s), k.translate(e, d, n), this.geo(k, x), k.dispose());
  }
  geo(e, d, n = null) {
    const h = e.attributes.position,
      c = e.attributes.normal,
      w = this.pos.length / 3,
      s = new X(),
      x = new X(),
      k = n ? new ne().getNormalMatrix(n) : null;
    for (let P = 0; P < h.count; P++)
      (s.fromBufferAttribute(h, P),
        x.fromBufferAttribute(c, P),
        n && (s.applyMatrix4(n), x.applyMatrix3(k).normalize()),
        this.pos.push(s.x, s.y, s.z),
        this.nor.push(x.x, x.y, x.z),
        this.part.push(d));
    if (e.index)
      for (let P = 0; P < e.index.count; P++)
        this.idx.push(w + e.index.getX(P));
    else for (let P = 0; P < h.count; P++) this.idx.push(w + P);
  }
  build() {
    const e = new v0();
    return (
      e.setAttribute("position", new e0(this.pos, 3)),
      e.setAttribute("normal", new e0(this.nor, 3)),
      e.setAttribute("aPart", new e0(this.part, 1)),
      e.setIndex(
        this.count > 65535 ? new Pt(this.idx, 1) : new At(this.idx, 1),
      ),
      e.computeBoundingSphere(),
      e.computeBoundingBox(),
      e
    );
  }
}
const lt = new kt(1, 1, 1).translate(0, 0.5, 0),
  Te = (() => {
    const m = new l0();
    return (
      m.geo(new _0(0.5, 0.5, 1, 16, 1).translate(0, 0.5, 0), 0),
      m.geo(new jt(0.55, 0.3, 16, 1).translate(0, 1.15, 0), 0),
      m.build()
    );
  })();
function He(m) {
  let e = Math.floor(m * 1e6) | 0 || 1;
  return () => (
    (e = (e * 16807) % 2147483647),
    e <= 0 && (e += 2147483646),
    (e - 1) / 2147483646
  );
}
