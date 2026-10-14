// assets/index-DQDjAbEY 01 — push
// Lines 1-339 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
import {
  h as yo,
  V as h,
  t as v0,
  f as fe,
  s as we,
  l as W0,
  T as z,
  r as g0,
  a as G,
} from "./kit-CwMQzO5T.js";
import {
  ai as wo,
  B as K0,
  I as L0,
  h as Q0,
  aK as bo,
  aL as Mo,
  V as H0,
  o as b0,
  f as Yt,
  g as Po,
  aw as Xt,
  ab as jt,
  x as I0,
  aC as Ro,
  a4 as ko,
  a2 as zo,
  a3 as So,
  d as de,
  $ as ue,
  J as Z0,
  q as Ne,
  b as V0,
  a5 as Lt,
  a6 as at,
  E as Zt,
  ah as pt,
  aO as mt,
  aN as vt,
  aM as Qt,
  m as wt,
  U as Ao,
  X as To,
  N as Jt,
  Y as Ot,
  aH as _o,
  i as ke,
  a9 as Lo,
  aj as Oo,
  C as ee,
  M as Io,
  c as le,
  G as $e,
  au as Co,
  av as No,
  A as Te,
  D as gt,
  k as Fo,
  l as Eo,
  ao as Do,
  an as Bo,
  n as It,
  P as Ct,
  Q as nt,
  O as Go,
} from "./index-DaQlAVPp.js";
const m0 = (e, l = 0, a = 1) => (e < l ? l : e > a ? a : e),
  x0 = (e, l, a) => e + (l - e) * a,
  j0 = (e, l, a) => {
    const o = m0((a - e) / (l - e));
    return o * o * (3 - 2 * o);
  },
  Q = {
    PLAIN: 0,
    SKIN: 1,
    PAINT: 2,
    METAL: 3,
    RUBBER: 4,
    PLASTIC: 5,
    TRIM: 6,
    FABRIC: 7,
    WEB: 8,
    FLOOR: 9,
    DECAL: 10,
    LAMP: 11,
    BLADE: 12,
    NET: 13,
    DARKGLASS: 14,
    GRILLE: 15,
  },
  Re = { BODY: 1, DOOR_FL: 2, DOOR_FR: 3, DOOR_RL: 4, DOOR_RR: 5, GLASS: 6 };
function Z(e) {
  return {
    rough: 0.6,
    metal: 0,
    clear: 0,
    kind: 0,
    grime: 0.3,
    scuff: 0,
    soot: 0,
    dust: 0.25,
    ...e,
    col: typeof e.col == "string" ? yo(e.col) : e.col || [0.5, 0.5, 0.5],
  };
}
const ge = new H0(),
  se = new H0(),
  Nt = new wo();
class Ke {
  constructor(l) {
    ((this.name = l),
      (this.P = []),
      (this.N = []),
      (this.UV = []),
      (this.C = []),
      (this.S = []),
      (this.W = []),
      (this.G = []),
      (this.O = null),
      (this.I = []),
      (this.nv = 0));
  }
  add(l, a, o, t = {}) {
    let s = l;
    (t.flat &&
      ((s = s.index ? s.toNonIndexed() : s.clone()), s.computeVertexNormals()),
      s.attributes.normal || s.computeVertexNormals());
    const n = s.attributes.position,
      c = s.attributes.normal,
      i = s.attributes.uv;
    a && Nt.getNormalMatrix(a);
    const d = a ? a.determinant() < 0 : !1,
      f = this.nv,
      p = t.part || 0,
      m = t.mask || 0,
      x = t.inner || 0,
      w = (v, u) => {
        for (let g = 0; g < n.count; g++) {
          (ge.fromBufferAttribute(n, g),
            se.fromBufferAttribute(c, g),
            a && (ge.applyMatrix4(a), se.applyMatrix3(Nt).normalize()),
            u && se.negate(),
            this.P.push(ge.x, ge.y, ge.z),
            this.N.push(se.x, se.y, se.z));
          let P = i ? i.getX(g) : 0,
            k = i ? i.getY(g) : 0;
          (t.uv && ([P, k] = t.uv(ge, se, P, k)), this.UV.push(P, k));
          const y = u ? v : t.pick ? t.pick(ge, se) : v,
            M = !u && t.col ? t.col(ge, se) : y.col;
          (this.C.push(M[0], M[1], M[2]),
            this.S.push(y.rough, y.metal, y.clear, y.kind));
          let F = [y.grime, y.scuff, y.soot, y.dust];
          (t.wear && (F = t.wear(ge, se, F, y)),
            this.W.push(F[0], F[1], F[2], F[3]),
            this.G.push(p, m, x));
        }
      };
    if ((w(o, !1), s.index)) {
      const v = s.index.array;
      for (let u = 0; u < v.length; u += 3)
        this.I.push(f + v[u], f + v[u + (d ? 2 : 1)], f + v[u + (d ? 1 : 2)]);
    } else
      for (let v = 0; v + 2 < n.count; v += 3)
        this.I.push(f + v, f + v + (d ? 2 : 1), f + v + (d ? 1 : 2));
    if (((this.nv += n.count), t.both)) {
      const v = this.nv;
      if ((w(t.both === !0 ? o : t.both, !0), s.index)) {
        const u = s.index.array;
        for (let g = 0; g < u.length; g += 3)
          this.I.push(v + u[g], v + u[g + (d ? 1 : 2)], v + u[g + (d ? 2 : 1)]);
      } else
        for (let u = 0; u + 2 < n.count; u += 3)
          this.I.push(v + u, v + u + (d ? 1 : 2), v + u + (d ? 2 : 1));
      this.nv += n.count;
    }
    return (s !== l && s.dispose(), this);
  }
  addRaw(l, a, o, t, s = {}) {
    const n = new K0();
    return (
      n.setAttribute("position", new L0(l, 3)),
      n.setAttribute("normal", new L0(a, 3)),
      s.uvs && n.setAttribute("uv", new L0(s.uvs, 2)),
      n.setIndex(o),
      this.add(n, null, t, s),
      n.dispose(),
      this
    );
  }
  build() {
    const l = new K0();
    return (
      l.setAttribute("position", new Q0(new Float32Array(this.P), 3)),
      l.setAttribute("normal", new Q0(new Float32Array(this.N), 3)),
      l.setAttribute("uv", new Q0(new Float32Array(this.UV), 2)),
      l.setAttribute("color", new Q0(new Float32Array(this.C), 3)),
      l.setAttribute("aSurf", new Q0(new Float32Array(this.S), 4)),
      l.setAttribute("aWear", new Q0(new Float32Array(this.W), 4)),
      l.setAttribute("aTag", new Q0(new Float32Array(this.G), 3)),
      l.setAttribute(
        "aAO",
        new Q0(
          this.O
            ? Float32Array.from(this.O)
            : new Float32Array(this.nv).fill(1),
          1,
        ),
      ),
      l.setIndex(this.nv > 65535 ? new bo(this.I, 1) : new Mo(this.I, 1)),
      l.computeBoundingSphere(),
      l.computeBoundingBox(),
      l
    );
  }
  get tris() {
    return this.I.length / 3;
  }
}
new b0().makeScale(-1, 1, 1);
function Uo(e, l, a = 10) {
  const o = [],
    t = [];
  for (let s = 0; s <= a; s++) {
    const n = (1 - Math.cos((s / a) * Math.PI)) / 2,
      c =
        5 *
        l *
        (0.2969 * Math.sqrt(n) -
          0.126 * n -
          0.3516 * n * n +
          0.2843 * n ** 3 -
          0.1036 * n ** 4);
    (o.push([n * e, c * e]), t.push([n * e, -c * e]));
  }
  return [...o.reverse(), ...t.slice(1, -1)];
}
function Le(e, l = 10, a = !0) {
  const o = e.map((d) =>
      Uo(d.c, d.t, l).map(([f, p]) =>
        d.o.clone().addScaledVector(d.chord, f).addScaledVector(d.up, p),
      ),
    ),
    t = o[0].length,
    s = [],
    n = [];
  for (const d of o) for (const f of d) s.push(f.x, f.y, f.z);
  for (let d = 0; d < o.length - 1; d++)
    for (let f = 0; f < t; f++) {
      const p = d * t + f,
        m = d * t + ((f + 1) % t),
        x = p + t,
        w = m + t;
      n.push(p, x, m, m, x, w);
    }
  const c = new K0();
  if (
    (c.setAttribute("position", new L0(s, 3)),
    c.setIndex(n),
    c.computeVertexNormals(),
    !a)
  )
    return c;
  const i = [c];
  for (const [d, f] of [
    [0, -1],
    [o.length - 1, 1],
  ]) {
    const p = o[d],
      m = new K0(),
      x = [],
      w = [],
      v = new H0();
    for (const u of p) v.add(u);
    (v.divideScalar(p.length), x.push(v.x, v.y, v.z));
    for (const u of p) x.push(u.x, u.y, u.z);
    for (let u = 0; u < t; u++)
      f > 0
        ? w.push(0, 1 + u, 1 + ((u + 1) % t))
        : w.push(0, 1 + ((u + 1) % t), 1 + u);
    (m.setAttribute("position", new L0(x, 3)),
      m.setIndex(w),
      m.computeVertexNormals(),
      i.push(m));
  }
  return Vo(i);
}
function Vo(e) {
  const l = [],
    a = [],
    o = [],
    t = [];
  let s = 0;
  for (const c of e) {
    c.attributes.normal || c.computeVertexNormals();
    const i = c.attributes.position,
      d = c.attributes.normal,
      f = c.attributes.uv;
    for (let p = 0; p < i.count; p++)
      (l.push(i.getX(p), i.getY(p), i.getZ(p)),
        a.push(d.getX(p), d.getY(p), d.getZ(p)),
        o.push(f ? f.getX(p) : 0, f ? f.getY(p) : 0));
    if (c.index) for (const p of c.index.array) t.push(p + s);
    else for (let p = 0; p < i.count; p++) t.push(p + s);
    s += i.count;
  }
  const n = new K0();
  return (
    n.setAttribute("position", new L0(l, 3)),
    n.setAttribute("normal", new L0(a, 3)),
    n.setAttribute("uv", new L0(o, 2)),
    n.setIndex(t),
    n
  );
}
function Ae(e, l, a = !1) {
  const o = e.length,
    t = [],
    s = [],
    n = [];
  let c = 0;
  for (let f = 0; f < o; f++)
    (f > 0 && (c += e[f].distanceTo(e[f - 1])),
      t.push(e[f].x, e[f].y, e[f].z, l[f].x, l[f].y, l[f].z),
      n.push(c, 0, c, 1));
  const i = a ? o : o - 1;
  for (let f = 0; f < i; f++) {
    const p = (f + 1) % o;
    s.push(f * 2, p * 2, f * 2 + 1, f * 2 + 1, p * 2, p * 2 + 1);
  }
  const d = new K0();
  return (
    d.setAttribute("position", new L0(t, 3)),
    d.setAttribute("uv", new L0(n, 2)),
    d.setIndex(s),
    d.computeVertexNormals(),
    d
  );
}
