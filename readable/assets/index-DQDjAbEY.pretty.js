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
function ae(e) {
  const l = e.length,
    a = e.map((n) => n[0]),
    o = e.map((n) => n[1]),
    t = [],
    s = new Array(l).fill(0);
  for (let n = 0; n < l - 1; n++) t.push((o[n + 1] - o[n]) / (a[n + 1] - a[n]));
  ((s[0] = t[0]), (s[l - 1] = t[l - 2]));
  for (let n = 1; n < l - 1; n++)
    s[n] = t[n - 1] * t[n] <= 0 ? 0 : (t[n - 1] + t[n]) / 2;
  for (let n = 0; n < l - 1; n++) {
    if (t[n] === 0) {
      ((s[n] = 0), (s[n + 1] = 0));
      continue;
    }
    const c = s[n] / t[n],
      i = s[n + 1] / t[n],
      d = c * c + i * i;
    if (d > 9) {
      const f = 3 / Math.sqrt(d);
      ((s[n] = f * c * t[n]), (s[n + 1] = f * i * t[n]));
    }
  }
  return (n) => {
    if (n <= a[0]) return o[0];
    if (n >= a[l - 1]) return o[l - 1];
    let c = 0;
    for (; n > a[c + 1];) c++;
    const i = a[c + 1] - a[c],
      d = (n - a[c]) / i,
      f = d * d,
      p = f * d;
    return (
      (2 * p - 3 * f + 1) * o[c] +
      (p - 2 * f + d) * i * s[c] +
      (-2 * p + 3 * f) * o[c + 1] +
      (p - f) * i * s[c + 1]
    );
  };
}
const J0 = { tip: 3.28, capN: 2.98, rear: -2.92, capR: -2.3 },
  qo = ae([
    [-2.92, 2.06],
    [-2.4, 2.18],
    [-1.8, 2.24],
    [1.78, 2.24],
    [2.03, 2.21],
    [2.28, 2.12],
    [2.53, 1.96],
    [2.78, 1.75],
    [2.98, 1.55],
    [3.28, 1.3],
  ]),
  Wo = ae([
    [-2.92, 1.7],
    [-2.58, 1.44],
    [-2.18, 1.08],
    [-1.78, 0.78],
    [-1.4, 0.645],
    [-1.05, 0.62],
    [2.05, 0.62],
    [2.33, 0.645],
    [2.58, 0.71],
    [2.82, 0.83],
    [3.02, 0.97],
    [3.28, 1.1],
  ]),
  Ko = ae([
    [-2.92, 0.44],
    [-2.5, 0.66],
    [-2, 0.8],
    [-1.5, 0.84],
    [2.05, 0.84],
    [2.33, 0.82],
    [2.6, 0.775],
    [2.84, 0.7],
    [3.04, 0.62],
    [3.28, 0.52],
  ]),
  Ho = ae([
    [-2.92, 1.9],
    [-2.4, 1.62],
    [-1.8, 1.36],
    [2.05, 1.32],
    [2.68, 1.27],
    [3.28, 1.21],
  ]),
  $o = ae([
    [-2.92, 2.4],
    [-2.2, 3.3],
    [1.95, 3.3],
    [2.7, 2.7],
    [3.28, 2.3],
  ]),
  Yo = ae([
    [-2.92, 2.3],
    [-2.2, 3.8],
    [2.05, 3.8],
    [2.75, 3],
    [3.28, 2.4],
  ]),
  Ft = (e, l) => Math.pow(Math.max(0, 1 - Math.pow(m0(e), l)), 1 / l);
function bt(e, l = {}) {
  let a = 1;
  e > J0.capN
    ? (a = Ft((e - J0.capN) / (J0.tip - J0.capN), 2.1))
    : e < J0.capR && (a = Ft((J0.capR - e) / (J0.capR - J0.rear), 1.9));
  const o = Ho(e);
  return (
    (l.C = o),
    (l.W = Ko(e) * a),
    (l.T = o + (qo(e) - o) * a),
    (l.B = o - (o - Wo(e)) * a),
    (l.pT = $o(e)),
    (l.pB = Yo(e)),
    l
  );
}
const Mt = {};
function xt(e, l, a = [0, 0]) {
  const o = bt(e, Mt),
    t = Math.cos(l),
    s = Math.sin(l),
    n = s >= 0 ? o.pT : o.pB,
    c = s >= 0 ? o.T - o.C : o.C - o.B;
  return (
    (a[0] = o.W * Math.sign(t) * Math.pow(Math.abs(t), 2 / n)),
    (a[1] = o.C + c * Math.sign(s) * Math.pow(Math.abs(s), 2 / n)),
    a
  );
}
function _0(e, l) {
  const a = bt(e, Mt);
  if (a.W < 1e-4) return -1;
  const o = l >= a.C,
    t = o ? a.T - a.C : a.C - a.B,
    s = o ? a.pT : a.pB,
    n = Math.abs(l - a.C) / Math.max(t, 1e-5);
  return n > 1 ? -1 : a.W * Math.pow(1 - Math.pow(n, s), 1 / s);
}
function he(e, l, a = !0) {
  const o = bt(l, Mt),
    t = Math.abs(e) / Math.max(o.W, 1e-5);
  if (t > 1) return NaN;
  const s = a ? o.pT : o.pB,
    n = a ? o.T - o.C : o.C - o.B;
  return o.C + (a ? 1 : -1) * n * Math.pow(1 - Math.pow(t, s), 1 / s);
}
const Oe = -Math.PI / 2,
  Xo = (e) =>
    J0.rear +
    (J0.tip - J0.rear) *
      (e - (0.82 * Math.sin(2 * Math.PI * e)) / (2 * Math.PI));
let He = null;
function jo(e) {
  if (He && He.length === e) return He;
  const l = 4096,
    a = [0],
    o = [0, 0],
    t = [0, 0];
  xt(0, Oe, t);
  for (let c = 1; c <= l; c++)
    (xt(0, Oe + (c / l) * Math.PI * 2, o),
      a.push(a[c - 1] + Math.hypot(o[0] - t[0], o[1] - t[1])),
      (t[0] = o[0]),
      (t[1] = o[1]));
  const s = a[l],
    n = [];
  for (let c = 0, i = 0; c < e; c++) {
    const d = (c / e) * s;
    for (; i < l && a[i + 1] < d;) i++;
    const f = (d - a[i]) / Math.max(a[i + 1] - a[i], 1e-9);
    n.push(Oe + ((i + f) / l) * Math.PI * 2);
  }
  return ((He = n), n);
}
const st = [0, 0];
function ze(e, l, a = new H0()) {
  const o = Xo(m0(e));
  return (xt(o, l, st), a.set(st[0], st[1], o));
}
const rt = new H0(),
  Et = new H0(),
  lt = new H0(),
  Dt = new H0();
function eo(e, l, a = new H0()) {
  if (e >= 0.9999) return a.set(0, 0, 1);
  if (e <= 1e-4) return a.set(0, 0, -1);
  const o = 1e-4,
    t = 1e-4;
  return (
    ze(Math.min(1, e + o), l, rt),
    ze(Math.max(0, e - o), l, Et),
    rt.sub(Et),
    ze(e, l + t, lt),
    ze(e, l - t, Dt),
    lt.sub(Dt),
    a.crossVectors(lt, rt),
    a.lengthSq() < 1e-16 ? a.set(0, 0, e > 0.5 ? 1 : -1) : a.normalize()
  );
}
function Zo(e, l) {
  const a = jo(l),
    o = [],
    t = [],
    s = [];
  for (let n = 0; n <= e; n++) {
    const c = n / e;
    o.push(c);
    const i = [],
      d = [];
    for (let f = 0; f < l; f++) (i.push(ze(c, a[f])), d.push(eo(c, a[f])));
    (t.push(i), s.push(d));
  }
  return { pos: t, nrm: s, s: o, th: a, NS: e, NT: l };
}
const Ie = (() => {
    const t = -0.7599999999999998,
      s = 2.15 - 1.58,
      n = Math.hypot(t, s);
    let c = s / n,
      i = -t / n;
    return (
      c > 0 && ((c = -c), (i = -i)),
      { nz: c, ny: i, c: -(c * 2.84 + i * 1.58) }
    );
  })(),
  Qo = () => ["s", Ie.c, Ie.nz, Ie.ny, 0],
  Bt = (e) => ["s", e - Ie.c, -Ie.nz, -Ie.ny, 0],
  to = {
    ws: {
      k: 0.09,
      c: [
        ["f", 0.026, -1, 0, 0],
        ["f", 1.5, 0, -1, 0.22],
        Qo(),
        ["t", 2.06, 0, -1, 0.3],
      ],
    },
    chin: {
      k: 0.13,
      c: [
        ["f", 0.12, -1, 0, 0],
        ["f", -0.5, 1, 0, 0],
        ["f", 0.66, 0, -1, 0],
        ["f", -1, 0, 1, 0],
        ["s", 2.42, -1, 0, 0],
      ],
    },
    ovh: {
      k: 0.14,
      c: [
        ["t", 0.08, -1, 0, 0],
        ["t", -0.6, 1, 0, 0],
        ["t", 1.15, 0, -1, 0],
        ["t", -1.94, 0, 1, 0],
        ["s", 1.95, 0, -1, 0],
      ],
    },
    rwin: {
      k: 0.2,
      c: [
        ["s", -0.8, 1, 0, 0],
        ["s", -1.86, -1, 0, 0],
        ["s", 1.3, 0, -1, 0],
        ["s", -1.96, 0, 1, 0],
      ],
    },
    dfront: {
      k: 0.07,
      c: [
        Bt(0.075),
        ["s", -2.48, 1, 0, 0],
        ["s", 1, -1, 0, 0],
        ["s", -2.11, 0, 1, 0],
        ["s", 0.8, 0, -1, 0],
      ],
    },
    wfront: {
      k: 0.13,
      c: [
        Bt(0.115),
        ["s", -2.4, 1, 0, 0],
        ["s", 1.085, -1, 0, 0],
        ["s", -2.035, 0, 1, 0],
        ["s", 1.12, 0, -1, 0],
      ],
    },
    dslide: {
      k: 0.07,
      c: [
        ["s", -0.9, 1, 0, 0],
        ["s", -0.62, -1, 0, 0],
        ["s", -2.11, 0, 1, 0],
        ["s", 0.8, 0, -1, 0],
      ],
    },
    wslide: {
      k: 0.16,
      c: [
        ["s", -0.78, 1, 0, 0],
        ["s", -0.5, -1, 0, 0],
        ["s", -1.98, 0, 1, 0],
        ["s", 1.28, 0, -1, 0],
      ],
    },
  },
  Jo = (e, l, a) => {
    const o = Math.max(a - Math.abs(e - l), 0) / a;
    return Math.max(e, l) + o * o * a * 0.25;
  };
function C0(e, l, a, o) {
  const t = to[e],
    s = Math.abs(l);
  let n = -1e3;
  for (const c of t.c) {
    const i = c[0] === "s" ? o : s,
      d = c[0] === "s" || c[0] === "f" ? a : o;
    n = Jo(n, c[1] + c[2] * i + c[3] * d + c[4] * i * i, t.k);
  }
  return n;
}
const ea = (e, l, a) =>
    Math.min(
      C0("ws", e, l, a),
      C0("chin", e, l, a),
      C0("ovh", e, l, a),
      C0("rwin", e, l, a),
      C0("dfront", e, l, a),
      C0("dslide", e, l, a),
    ),
  oo = (e, l, a) =>
    Math.min(
      C0("ws", e, l, a),
      C0("chin", e, l, a),
      C0("ovh", e, l, a),
      C0("rwin", e, l, a),
      C0("wfront", e, l, a),
      C0("wslide", e, l, a),
    ),
  Ge = (e) => {
    const l = (+e).toFixed(5);
    return l.includes(".") ? l : l + ".0";
  };
function Pt() {
  let e = `float hSmax(float a, float b, float k) { float h = max(k - abs(a - b), 0.0) / k; return max(a, b) + h * h * k * 0.25; }
`;
  for (const [l, a] of Object.entries(to)) {
    e += `float hm_${l}(vec3 p) {
  float ax = abs(p.x); float d = -1000.0;
`;
    for (const o of a.c) {
      const t = o[0] === "s" ? "p.z" : "ax",
        s = o[0] === "t" ? "p.z" : "p.y";
      e += `  d = hSmax(d, ${Ge(o[1])} + ${Ge(o[2])} * ${t} + ${Ge(o[3])} * ${s} + ${Ge(o[4])} * ${t} * ${t}, ${Ge(a.k)});
`;
    }
    e += `  return d;
}
`;
  }
  return (
    (e += `float hmBody(vec3 p) { return min(min(min(hm_ws(p), hm_chin(p)), min(hm_ovh(p), hm_rwin(p))), min(hm_dfront(p), hm_dslide(p))); }
`),
    (e += `float hmGlass(vec3 p) { return min(min(min(hm_ws(p), hm_chin(p)), min(hm_ovh(p), hm_rwin(p))), min(hm_wfront(p), hm_wslide(p))); }
`),
    (e += `float hmDoorF(vec3 p) { return hSmax(hm_dfront(p), -hm_wfront(p), 0.02); }
`),
    (e += `float hmDoorS(vec3 p) { return hSmax(hm_dslide(p), -hm_wslide(p), 0.02); }
`),
    (e += `float hmKeep(vec3 p, float mode) {
  if (mode < 0.5) return 1.0;
  if (mode < 1.5) return hmBody(p);
  if (mode < 3.5) return -hmDoorF(p);
  if (mode < 5.5) return -hmDoorS(p);
  return -hmGlass(p);
}
`),
    e
  );
}
function ta(
  e,
  {
    s0: l = 0,
    s1: a = 1,
    th0: o = Oe,
    th1: t = Oe + Math.PI * 2,
    ns: s = 240,
    nt: n = 360,
    smoothIt: c = 2,
  } = {},
) {
  const i = new Float64Array((s + 1) * (n + 1)),
    d = (y, M) => y * (n + 1) + M,
    f = (y) => l + (a - l) * (y / s),
    p = (y) => o + (t - o) * (y / n),
    m = new H0();
  for (let y = 0; y <= s; y++)
    for (let M = 0; M <= n; M++)
      (ze(f(y), p(M), m), (i[d(y, M)] = e(m.x, m.y, m.z)));
  const x = new Map(),
    w = new Map(),
    v = (y, M, F) => (y * (n + 1) + M) * 2 + F,
    u = (y, M, F) => {
      const A = v(y, M, F);
      if (!x.has(A)) {
        const W = i[d(y, M)],
          N = F ? i[d(y, M + 1)] : i[d(y + 1, M)],
          D = W / (W - N);
        x.set(A, F ? { s: f(y), th: p(M + D) } : { s: f(y + D), th: p(M) });
      }
      return A;
    },
    g = (y, M) => {
      ((w.get(y) || w.set(y, []).get(y)).push(M),
        (w.get(M) || w.set(M, []).get(M)).push(y));
    };
  for (let y = 0; y < s; y++)
    for (let M = 0; M < n; M++) {
      const F = i[d(y, M)] < 0,
        A = i[d(y + 1, M)] < 0,
        W = i[d(y + 1, M + 1)] < 0,
        N = i[d(y, M + 1)] < 0,
        D = (F ? 1 : 0) | (A ? 2 : 0) | (W ? 4 : 0) | (N ? 8 : 0);
      if (D === 0 || D === 15) continue;
      const $ = [
          () => u(y, M, 0),
          () => u(y + 1, M, 1),
          () => u(y, M + 1, 0),
          () => u(y, M, 1),
        ],
        u0 = {
          1: [[0, 3]],
          2: [[0, 1]],
          3: [[1, 3]],
          4: [[1, 2]],
          5: [
            [0, 1],
            [2, 3],
          ],
          6: [[0, 2]],
          7: [[2, 3]],
          8: [[2, 3]],
          9: [[0, 2]],
          10: [
            [0, 3],
            [1, 2],
          ],
          11: [[1, 2]],
          12: [[1, 3]],
          13: [[0, 1]],
          14: [[0, 3]],
        }[D];
      for (const [L, T] of u0) g($[L](), $[T]());
    }
  const P = new Set(),
    k = [];
  for (const y of w.keys()) {
    if (P.has(y)) continue;
    let M = y;
    {
      const D = new Set([M]);
      let $ = null,
        u0 = M;
      for (;;) {
        const L = (w.get(u0) || []).filter((T) => T !== $ && !D.has(T));
        if (!L.length) break;
        if ((($ = u0), (u0 = L[0]), D.add(u0), (w.get(u0) || []).length < 2)) {
          M = u0;
          break;
        }
      }
    }
    const F = [M];
    P.add(M);
    let A = null,
      W = M;
    for (;;) {
      const D = (w.get(W) || []).filter(($) => $ !== A && !P.has($));
      if (!D.length) break;
      ((A = W), (W = D[0]), P.add(W), F.push(W));
    }
    const N = (w.get(W) || []).includes(M) && F.length > 2;
    k.push({ closed: N, pts: F.map((D) => ({ ...x.get(D) })) });
  }
  for (const y of k) {
    for (let M = 0; M < c; M++) {
      const F = y.pts,
        A = F.length,
        W = [];
      if (y.closed)
        for (let N = 0; N < A; N++) {
          const D = F[N],
            $ = F[(N + 1) % A];
          W.push(
            { s: D.s * 0.75 + $.s * 0.25, th: D.th * 0.75 + $.th * 0.25 },
            { s: D.s * 0.25 + $.s * 0.75, th: D.th * 0.25 + $.th * 0.75 },
          );
        }
      else {
        W.push(F[0]);
        for (let N = 0; N < A - 1; N++) {
          const D = F[N],
            $ = F[N + 1];
          W.push(
            { s: D.s * 0.75 + $.s * 0.25, th: D.th * 0.75 + $.th * 0.25 },
            { s: D.s * 0.25 + $.s * 0.75, th: D.th * 0.25 + $.th * 0.75 },
          );
        }
        W.push(F[A - 1]);
      }
      y.pts = W;
    }
    ((y.pos = y.pts.map((M) => ze(M.s, M.th))),
      (y.nrm = y.pts.map((M) => eo(M.s, M.th))));
  }
  return k;
}
function Gt(e, l, a, o = !0) {
  const t = e.length,
    s = o ? t : t - 1,
    n = [0];
  for (let p = 0; p < s; p++) n.push(n[p] + e[p].distanceTo(e[(p + 1) % t]));
  const c = n[s],
    i = Math.max(o ? 3 : 2, Math.round(c / a)),
    d = [],
    f = [];
  for (let p = 0; p < (o ? i : i + 1); p++) {
    const m = (p / i) * c;
    let x = 0;
    for (; x < s - 1 && n[x + 1] < m;) x++;
    const w = (m - n[x]) / Math.max(n[x + 1] - n[x], 1e-9),
      v = e[x],
      u = e[(x + 1) % t];
    (d.push(v.clone().lerp(u, m0(w))),
      f.push(
        l[x]
          .clone()
          .lerp(l[(x + 1) % t], m0(w))
          .normalize(),
      ));
  }
  return { pos: d, nrm: f, len: c };
}
const it = { z0: -2.78, z1: 1.04 },
  oa = ae([
    [-2.78, 0.3],
    [-2.55, 0.42],
    [-2.1, 0.55],
    [-1.2, 0.6],
    [-0.3, 0.58],
    [0.4, 0.52],
    [0.8, 0.42],
    [1.04, 0.3],
  ]),
  aa = ae([
    [-2.78, 2.42],
    [-2.5, 2.6],
    [-2.05, 2.78],
    [-1, 2.83],
    [-0.35, 2.85],
    [0.2, 2.88],
    [0.62, 2.8],
    [0.9, 2.62],
    [1.04, 2.4],
  ]);
function Ut(e) {
  return { W: oa(e), T: aa(e), B: 2.02, p: 2.9 };
}
const O0 = { z0: -2, z1: -6.92, brk: -5.56 },
  na = ae([
    [-6.92, 2.06],
    [-5, 2.02],
    [-3.3, 1.97],
    [-2.6, 1.9],
    [-2, 1.8],
  ]),
  sa = ae([
    [-6.92, 0.135],
    [-5, 0.17],
    [-3.4, 0.24],
    [-2.8, 0.34],
    [-2.3, 0.46],
    [-2, 0.52],
  ]),
  ra = ae([
    [-6.92, 0.15],
    [-5, 0.185],
    [-3.4, 0.25],
    [-2.8, 0.36],
    [-2.3, 0.5],
    [-2, 0.56],
  ]);
function ie(e) {
  return { C: na(e), rx: sa(e), ry: ra(e) };
}
const Xe = 24,
  _ = {
    DOOR_FL: 1,
    DOOR_FR: 2,
    DOOR_RL: 3,
    DOOR_RR: 4,
    ROTOR: 5,
    TROTOR: 6,
    CYC_L: 7,
    CYC_R: 8,
    COL_L: 9,
    COL_R: 10,
    PED_LL: 11,
    PED_LR: 12,
    PED_RL: 13,
    PED_RR: 14,
    SL_PAN: 15,
    SL_TILT: 16,
    THR_1: 17,
    THR_2: 18,
    HOOK: 19,
    BRK_BODY: 20,
    BRK_TAIL: 21,
    CABLES: 22,
  },
  Rt = 12,
  f0 = {
    NAV_L: 0,
    NAV_R: 1,
    NAV_TAIL: 2,
    BCN_TOP: 3,
    BCN_BELLY: 4,
    STROBE_L: 5,
    STROBE_R: 6,
    SEARCH: 7,
    LANDING: 8,
    CABIN: 9,
  },
  Ce = 14,
  la = `
attribute vec4 aSurf;
attribute vec4 aWear;
attribute vec3 aTag;
attribute float aAO;
varying float vAO;
uniform mat4 uPart[${Xe}];
uniform vec4 uRotor;          // x droop at the tip (m, at rest), y coning at the tip (m), z R (m), w the blades' fade (1 shown)
uniform float uTRotorA;       // the tail rotor's blades shown (1) .. faded (0)
varying vec4 vSurf;
varying vec4 vWear;
varying vec3 vRest;
varying vec3 vRestN;
varying float vMode;
`,
  ia = `
int hpI = int(aTag.x + 0.5);
mat4 hpM = uPart[hpI];
vSurf = aSurf; vWear = aWear; vMode = aTag.y; vAO = aAO;
vRest = position - normal * aTag.z;
vRestN = normal;
objectNormal = mat3(hpM) * objectNormal;
`,
  ca = `
if (hpI == ${fa()}) {
  float hr = length(position.xz);
  float hu = clamp((hr - 0.5) / (uRotor.z - 0.5), 0.0, 1.0);
  transformed.y += -uRotor.x * hu * hu + uRotor.y * hu;
  if (aSurf.w > 11.5 && aSurf.w < 12.5 && uRotor.w < 0.004) transformed = vec3(0.0);
}
if (hpI == ${ha()} && aSurf.w > 11.5 && aSurf.w < 12.5 && uTRotorA < 0.004) transformed = vec3(0.0);
transformed = (hpM * vec4(transformed, 1.0)).xyz;
`;
function fa() {
  return 5;
}
function ha() {
  return 6;
}
const da = `
float hpH(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float hpN(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hpH(i), hpH(i + vec3(1.0, 0.0, 0.0)), f.x), mix(hpH(i + vec3(0.0, 1.0, 0.0)), hpH(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(hpH(i + vec3(0.0, 0.0, 1.0)), hpH(i + vec3(1.0, 0.0, 1.0)), f.x), mix(hpH(i + vec3(0.0, 1.0, 1.0)), hpH(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
float hpF(vec3 p) { return 0.5 * hpN(p) + 0.25 * hpN(p * 2.03 + 1.7) + 0.125 * hpN(p * 4.07 - 3.1) + 0.0625 * hpN(p * 8.13 + 5.3); }
float hpF2(vec3 p) { return 0.62 * hpN(p) + 0.38 * hpN(p * 2.41 + 4.2); }
// a line of width w (m) at distance d, anti-aliased by the pixel's footprint fw
float hpLine(float d, float w, float fw) { return 1.0 - smoothstep(w * 0.5, w * 0.5 + fw, abs(d)); }
`,
  ua = `
varying vec4 vSurf;
varying vec4 vWear;
varying vec3 vRest;
varying vec3 vRestN;
varying float vMode;
varying float vAO;
uniform float uLivery;        // 0 the rescue livery, 1 the army's olive drab
uniform float uDirt;          // the whole machine's grime (a dial)
uniform float uBurn;          // scorching on the engine deck (the fire)
uniform vec4 uRotor;
uniform float uTRotorA;
uniform vec4 uLamp[${Rt}];  // each lamp's glow (linear rgb x strength); a: the lens's tint strength
uniform vec4 uDecP[${Ce}];   // the lettering: side-view rect (z0, y0, z1, y1)
uniform vec4 uDecU[${Ce}];   // its atlas rect (u0, v0, u1, v1)
uniform vec4 uDecS[${Ce}];   // x: the side (1 left, -1 right, 0 both), y: on (1)
uniform sampler2D tAtlas;     // the lettering (top half) and the cockpit's placards and legends (bottom half)
uniform mat4 uViewToRest;     // the camera's view space -> the machine's own (rest) frame (index.js, every frame)
uniform vec4 uDoorsOpen;      // the doors' openness (front L, front R, slide L, slide R)
uniform float uPanelLight;    // the panels' backlighting (the legends glow with the power on)
${da}
${Pt()}
// INSIDE, A LAMP OUTSIDE SHINES IN ONLY THROUGH THE GLASS (or an open door): the ray from this point toward the lamp leaves the
// hull (a superquadric close to it) somewhere; the windows' masks there say whether that is glass. (Shadow maps would do it,
// but the floodlights and the city's fires do not all cast; without this the cabin's walls were lit as if transparent.)
float hpHullF(vec3 p) { vec3 q = vec3(p.x / 0.86, (p.y - 1.43) / 0.83, (p.z - 0.2) / 3.05); q = q * q; q = q * q; return q.x + q.y + q.z - 1.0; }
float hpLightVis(vec3 lightView) {
  if (vAO > 0.999) return 1.0;
  vec3 L = (uViewToRest * vec4(lightView, 1.0)).xyz;
  if (hpHullF(L) < 0.0) return 1.0;
  vec3 a = vRest;
  if (hpHullF(a) > 0.0) return 1.0;
  vec3 b = a + normalize(L - a) * min(length(L - a), 7.0);
  for (int i = 0; i < 8; i++) { vec3 m = (a + b) * 0.5; if (hpHullF(m) < 0.0) a = m; else b = m; }
  vec3 e = (a + b) * 0.5;
  float g = smoothstep(0.04, -0.04, hmGlass(e));
  float dF = smoothstep(0.04, -0.04, hm_dfront(e)) * (e.x > 0.0 ? uDoorsOpen.x : uDoorsOpen.y);
  float dS = smoothstep(0.04, -0.04, hm_dslide(e)) * (e.x > 0.0 ? uDoorsOpen.z : uDoorsOpen.w);
  return max(g, max(dF, dS));
}
float wkRough = -1.0, wkMetal = -1.0, wkH = 0.0, wkCoat = 1.0, wkGlow = 0.0, wkSheen = 0.0;
vec3 wkGlowCol = vec3(0.0);
`,
  pa = `
float hpKeep = hmKeep(vRest, vMode);
// (round each door a 3 mm gap on both sides of its outline: the door and the body never quite touch)
if (hpKeep < ((vMode > 0.5 && vMode < 5.5) ? 0.003 : 0.0)) discard;
{
  float kd = floor(vSurf.w + 0.5);
  if (kd == 12.0) {
    float fa = vWear.y > 0.5 ? uTRotorA : uRotor.w;
    if (fa < 0.999) { float dz = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))); if (dz > fa) discard; }
  }
}
`,
  ma = `
{
  vec3 P = vRest;
  vec3 Nn = normalize(vRestN);
  float kind = floor(vSurf.w + 0.5);
  vec3 col = diffuseColor.rgb;
  float rough = vSurf.x, metal = vSurf.y;
  float h = 0.0;
  float grime = vWear.x * uDirt, scuff = vWear.y, soot = vWear.z, dust = vWear.w;
  float fwP = length(fwidth(P)) * 0.7 + 1e-5;
  // ================================================================ THE SKIN (the painted fuselage, the deck, the boom, fins)
  if (kind == 1.0) {
    float zz = P.z, yy = P.y, ax = abs(P.x);
    if (uLivery < 0.5) {
      // white over a red belly; the red's edge runs low along the cabin and sweeps up into the all-red tail; a thin yellow line
      // rides 3 cm over it
      float edge = 0.96 + 0.06 * smoothstep(3.3, 2.5, zz) + 2.0 * smoothstep(-1.2, -2.75, zz) + 0.01 * sin(zz * 1.7);
      float red = smoothstep(0.003, -0.003, yy - edge);
      float yl = hpLine(yy - (edge + 0.038), 0.024, fwP) * (1.0 - smoothstep(-2.0, -2.45, zz));
      vec3 white = vec3(0.79, 0.785, 0.76), crimson = vec3(0.42, 0.018, 0.022), yellow = vec3(0.86, 0.56, 0.035);
      col = mix(white, crimson, red);
      col = mix(col, yellow, yl);
      // the tail's red ends at the fin's top in a white cap; the stabiliser white with red tips
      // (a fin cap and the stabiliser's tips: by height / span)
      if (zz < -5.9) col = mix(col, white, smoothstep(3.22, 3.24, yy));
      if (yy > 1.8 && yy < 2.2 && zz < -4.6 && zz > -5.6 && ax > 0.3) col = mix(white, crimson, smoothstep(1.0, 1.02, ax));
    } else {
      // olive drab, a little mottled and sun-faded on top; black lettering
      vec3 od = vec3(0.065, 0.075, 0.042);
      float mott = hpF(P * 1.3 + 7.0);
      col = od * (0.82 + 0.36 * mott);
      col = mix(col, col * 1.25 + vec3(0.01, 0.01, 0.0), smoothstep(0.3, 0.9, Nn.y) * 0.5);
      rough = 0.72; wkCoat = 0.15;
    }
    // ---- lettering (atlas, projected from the side): read on both sides (u runs nose -> tail on the left, tail -> nose on the right)
    {
      vec2 duv = vec2(-1.0); float dk = 0.0;
      for (int i = 0; i < ${Ce}; i++) {
        vec4 r = uDecP[i];
        if (uDecS[i].y < 0.5) continue;
        if (zz < r.x || zz > r.z || yy < r.y || yy > r.w) continue;
        if (uDecS[i].x * P.x < -0.0001) continue;
        if (ax < 0.02 && abs(Nn.x) < 0.3) continue;
        float fu = (zz - r.x) / (r.z - r.x);
        if (P.x > 0.0) fu = 1.0 - fu;
        float fv = (yy - r.y) / (r.w - r.y);
        duv = mix(uDecU[i].xy, uDecU[i].zw, vec2(fu, fv));
        dk = smoothstep(0.15, 0.45, abs(Nn.x));
      }
      if (dk > 0.0) {
        vec4 d = texture2D(tAtlas, duv);
        col = mix(col, d.rgb, d.a * dk);
        rough = mix(rough, 0.45, d.a * dk);
      }
    }
    // ---- panel lines and rivets (the pod's frames, the doors' gaps, the boom's rings, the cowlings' joints)
    {
      float seam = 0.0, riv = 0.0;
      // the pod: frames at these stations, joints along the belly and the roof
      float st[7]; st[0] = 2.66; st[1] = 0.97; st[2] = -0.70; st[3] = -1.92; st[4] = -2.30; st[5] = 1.62; st[6] = 0.12;
      if (zz > -2.6 && yy < 2.3) {
        for (int i = 0; i < 5; i++) seam = max(seam, hpLine(zz - st[i], 0.0022, fwP) * step(yy, 2.2) * step(0.66, yy));
        seam = max(seam, hpLine(yy - 0.78, 0.0022, fwP) * step(ax, 0.84));
        seam = max(seam, hpLine(yy - 2.16, 0.0022, fwP) * step(zz, 2.3) * step(-2.3, zz));
        // rivets: rows beside the joints
        float rz = 0.0;
        for (int i = 0; i < 5; i++) rz = max(rz, hpLine(zz - st[i] - 0.016, 0.0001, 0.0005));
        float along = fract(yy / 0.032);
        riv = max(riv, rz * (1.0 - smoothstep(0.18, 0.32, abs(along - 0.5))) * step(0.66, yy) * step(yy, 2.2));
        float ry = hpLine(yy - 0.795, 0.0001, 0.0005) + hpLine(yy - 2.145, 0.0001, 0.0005);
        riv = max(riv, ry * (1.0 - smoothstep(0.18, 0.32, abs(fract(zz / 0.032) - 0.5))));
        // the nose's avionics bay doors
        float bay = max(abs(zz - 2.86) - 0.2, abs(yy - 1.33) - 0.11);
        seam = max(seam, hpLine(bay, 0.0022, fwP) * step(2.5, zz));
      }
      // the boom: rings of rivets every 0.6 m, a joint along its top and bottom
      if (zz < -2.4 && zz > -6.9 && yy > 1.55 && yy < 2.35 && ax < 0.5) {
        float ringz = abs(fract((zz + 2.4) / 0.6 + 0.5) - 0.5) * 0.6;
        seam = max(seam, hpLine(ringz, 0.0018, fwP));
        riv = max(riv, hpLine(ringz - 0.014, 0.0001, 0.0005) * (1.0 - smoothstep(0.18, 0.32, abs(fract(atan(P.x, P.y - 2.0) * 0.18 / 0.03) - 0.5))));
      }
      // the deck: the cowlings' joints and their hinge line
      if (yy > 2.25 && zz > -2.7 && zz < 1.05) {
        seam = max(seam, hpLine(zz + 0.38, 0.0022, fwP));
        seam = max(seam, hpLine(zz + 2.18, 0.0022, fwP));
        seam = max(seam, hpLine(yy - 2.44, 0.0022, fwP) * step(0.35, ax) * step(zz, -0.38));
        // latches along the hinge line
        float lt = max(abs(fract((zz + 0.38) / 0.45) - 0.5) * 0.45 - 0.03, abs(yy - 2.38) - 0.012);
        seam = max(seam, (1.0 - smoothstep(0.0, fwP, lt)) * 0.7 * step(0.35, ax) * step(zz, -0.45) * step(-2.15, zz));
      }
      // the door gaps (the cut's own edge: hpKeep is the distance to it)
      float gap = (vMode > 0.5 && vMode < 5.5) ? (1.0 - smoothstep(0.003, 0.003 + fwP * 1.5, hpKeep)) : 0.0;
      col *= 1.0 - 0.55 * seam - 0.25 * riv - 0.7 * gap;
      h -= seam * 0.5 + gap * 0.6;
      h += riv * 0.35;
    }
    // ---- grime: running down from the joints and the windows, swept back by the air on the boom; dirt low down
    {
      float streak = hpF2(vec3(P.z * 9.0, P.y * 0.9, P.x * 3.0) + 3.0);
      float run = smoothstep(0.55, 0.85, streak) * (0.4 + 0.6 * hpN(P * 2.0));
      float low = 1.0 - smoothstep(0.62, 1.15, yy);
      float aft = smoothstep(-1.5, -2.6, zz) * hpF2(vec3(P.z * 0.6, P.y * 14.0, P.x * 14.0));
      float under = smoothstep(0.2, -0.6, Nn.y);
      float g = clamp(grime * (run * 0.35 + low * 0.45 + aft * 0.5 + under * 0.35) * (0.6 + 0.6 * hpF(P * 3.1)), 0.0, 1.0);
      col = mix(col, col * vec3(0.55, 0.52, 0.47) + vec3(0.012, 0.01, 0.008), g);
      rough = mix(rough, 0.75, g * 0.8);
      wkCoat *= 1.0 - g * 0.7;
    }
    // ---- exhaust soot: from both outlets back over the deck's tail and along the boom's top and sides
    {
      float behind = clamp(-2.2 - zz, 0.0, 6.0);
      float spread = 0.1 + behind * 0.09;
      float lat = min(abs(P.x - 0.33), abs(P.x + 0.33));
      float sootK = exp(-lat * lat / (spread * spread)) * smoothstep(-2.05, -2.35, zz) * exp(-behind * 0.32) * smoothstep(1.85, 2.3, yy + Nn.y * 0.2);
      sootK += smoothstep(-2.0, -2.3, zz) * smoothstep(0.55, 0.0, lat) * exp(-behind * 0.7) * 0.6 * step(2.3, yy);
      sootK *= (0.55 + 0.6 * hpF(vec3(P.z * 2.0, P.y * 8.0, P.x * 8.0)));
      sootK = clamp(sootK * (0.7 + soot) + uBurn * smoothstep(-0.2, -1.2, zz) * smoothstep(2.3, 2.6, yy) * hpF(P * 5.0) * 1.5, 0.0, 1.0);
      col = mix(col, vec3(0.018, 0.016, 0.015), sootK * 0.92);
      rough = mix(rough, 0.92, sootK);
      wkCoat *= 1.0 - sootK;
    }
    // ---- scuffs: boots on the door sills and the belly corners (dark rubber smears, here and there bare metal), hands round
    // the handles
    {
      float sill = (1.0 - smoothstep(0.74, 0.9, yy)) * smoothstep(-0.7, -0.5, zz) * (1.0 - smoothstep(2.3, 2.5, zz));
      float n1 = hpF(P * vec3(10.0, 22.0, 10.0) + 2.0), n2 = hpN(P * 70.0);
      float mark = clamp((sill * 0.9 + scuff * 0.5) * smoothstep(0.6, 0.78, n1 * 0.85 + n2 * 0.25), 0.0, 1.0);
      float bare = mark * smoothstep(0.82, 0.9, hpN(P * 140.0 + 3.0));
      col = mix(col, col * 0.42 + vec3(0.01), mark * 0.7);
      col = mix(col, uLivery < 0.5 ? vec3(0.3, 0.3, 0.29) : vec3(0.06, 0.06, 0.05), bare);
      rough = mix(rough, 0.7, mark);
      h -= bare * 0.4;
      wkCoat *= 1.0 - mark * 0.8;
    }
    // ---- a film of ash on what faces up
    {
      float up = smoothstep(0.25, 0.9, Nn.y);
      float dk = up * dust * (0.4 + 0.6 * smoothstep(0.3, 0.75, hpF(P * 4.0 + 9.0)));
      col = mix(col, vec3(0.2, 0.19, 0.18), dk * 0.5);
      rough = mix(rough, 0.9, dk);
      wkCoat *= 1.0 - dk * 0.8;
    }
    // (the paint's own fine orange-peel)
    h += (hpN(P * 220.0) - 0.5) * 0.04;
  }
  // ================================================================ PAINTED parts (skids, hoist, struts ...): chips, scrapes
  else if (kind == 2.0) {
    float n1 = hpF(P * 11.0 + 3.7), n2 = hpN(P * 55.0 - 1.3);
    float t = 1.0 - 0.38 * scuff;
    float chip = smoothstep(t - 0.006, t + 0.004, max(n1 * 1.05 - 0.02, n2 * 0.9));
    float ring = smoothstep(t - 0.035, t - 0.01, max(n1 * 1.05 - 0.02, n2 * 0.9)) * (1.0 - chip);
    col = mix(col, vec3(0.16, 0.155, 0.14), ring);
    col = mix(col, vec3(0.34, 0.33, 0.31), chip);
    metal = mix(metal, 0.8, chip); rough = mix(rough, 0.45, chip);
    h -= chip * 0.5 + ring * 0.15;
    wkCoat *= 1.0 - ring;
    float g = grime * (0.5 + 0.5 * hpF(P * 4.0)) * (0.5 + 0.5 * smoothstep(0.3, -0.5, Nn.y));
    col = mix(col, col * 0.55, g);
  }
  // ================================================================ METAL (hub, mast, rods, rails): machining, oil, grime
  else if (kind == 3.0) {
    float st = hpF(P * 24.0 + 5.0);
    col *= 0.82 + 0.3 * st;
    rough = clamp(rough + (hpN(P * 90.0) - 0.5) * 0.12, 0.05, 1.0);
    float oil = grime * smoothstep(0.45, 0.8, hpF(vec3(P.x * 30.0, P.y * 5.0, P.z * 30.0)));
    col = mix(col, vec3(0.02, 0.018, 0.015), oil * 0.8);
    rough = mix(rough, 0.25, oil);
  }
  // ================================================================ RUBBER (seals, boots): dull, a faint grain, dust in the folds
  else if (kind == 4.0) {
    col *= 0.85 + 0.25 * hpN(P * 160.0);
    rough = clamp(rough + (hpN(P * 40.0) - 0.5) * 0.15, 0.4, 1.0);
  }
  // ================================================================ PLASTIC (the panel, the consoles): a moulded grain, worn edges
  else if (kind == 5.0) {
    float grain = hpN(P * 520.0) * 0.6 + hpN(P * 190.0) * 0.4;
    h += (grain - 0.5) * 0.18;
    rough = clamp(rough + (grain - 0.5) * 0.12, 0.2, 1.0);
    float wear = scuff * smoothstep(0.6, 0.85, hpF(P * 30.0));
    col = mix(col, col * 1.5 + 0.02, wear);
    rough = mix(rough, rough - 0.2, wear);
    col *= 1.0 - grime * 0.35 * hpF(P * 6.0);
  }
  // ================================================================ TRIM (the cabin's lining): vinyl panels, their joints, scuffs low
  else if (kind == 6.0) {
    float zz = P.z, yy = P.y;
    col *= mix(1.0, 0.62, smoothstep(0.8, 1.05, zz));
    float seam = hpLine(yy - 1.30, 0.004, fwP) + hpLine(yy - 2.12, 0.004, fwP);
    float pz = abs(fract((zz + 0.31) / 0.62) - 0.5) * 0.62;
    seam += hpLine(pz, 0.004, fwP) * step(0.8, yy) * step(yy, 2.1);
    // the headliner: a quilted pad
    float hl = smoothstep(2.04, 2.1, yy);
    float q = hpLine(abs(fract(P.x / 0.11) - 0.5) * 0.11, 0.003, fwP) + hpLine(abs(fract(zz / 0.11) - 0.5) * 0.11, 0.003, fwP);
    seam += q * hl * 0.6;
    col *= 1.0 - 0.35 * clamp(seam, 0.0, 1.0);
    col = mix(col, col * 1.08, hl);
    h -= clamp(seam, 0.0, 1.0) * 0.5;
    h += (hpN(P * 300.0) - 0.5) * 0.08;
    float low = 1.0 - smoothstep(0.7, 1.15, yy);
    float sc = clamp(grime * (low * 0.8 + 0.25) * smoothstep(0.45, 0.85, hpF(P * 7.0)), 0.0, 1.0);
    col = mix(col, col * 0.5, sc);
  }
  // ================================================================ FABRIC / LEATHER (the seats): creases, wear on the bolsters
  else if (kind == 7.0) {
    float cr = abs(hpF2(P * vec3(9.0, 16.0, 9.0)) - 0.5);
    float crease = (1.0 - smoothstep(0.0, 0.022, cr)) * smoothstep(0.55, 0.8, hpN(P * 4.0 + 1.0));
    col = mix(col, col * 0.7, crease * 0.5);
    h -= crease * 0.25;
    float shine = smoothstep(0.5, 0.85, hpN(P * vec3(4.0, 2.0, 4.0) + 2.0));
    rough = mix(rough, rough - 0.18, shine);
    h += (hpN(P * 420.0) - 0.5) * 0.12;
    float worn = scuff * smoothstep(0.55, 0.8, hpF(P * 14.0));
    col = mix(col, col * 1.6 + 0.015, worn);
  }
  // ================================================================ WEBBING (the harnesses): a weave
  else if (kind == 8.0) {
    float wv = abs(sin(vUv.y * 1400.0)) * abs(sin(vUv.x * 900.0));
    col *= 0.8 + 0.32 * wv;
    h += wv * 0.08;
  }
  // ================================================================ FLOOR: ribbed rubber, dirt, worn bare where feet go
  else if (kind == 9.0) {
    float rib = abs(fract(P.x / 0.012) - 0.5);
    float rb = smoothstep(0.18, 0.32, rib);
    col *= 0.8 + 0.25 * rb;
    h += rb * 0.2;
    float d = clamp(grime * smoothstep(0.35, 0.75, hpF(P * 3.0 + 2.0)), 0.0, 1.0);
    col = mix(col, vec3(0.045, 0.038, 0.03), d * 0.8);
    rough = mix(rough, 0.95, d);
  }
  // ================================================================ DECALS / PLACARDS / LEGENDS (the atlas, by uv)
  else if (kind == 10.0) {
    vec4 d = texture2D(tAtlas, vUv);
    col = mix(col, d.rgb, d.a);
    rough = mix(rough, 0.4, d.a);
    // (backlit legends: the light parts of a panel's face glow softly with the power on; vWear.x = 1 marks a lit panel)
    float lum = dot(d.rgb, vec3(0.3333));
    wkGlow = uPanelLight * vWear.x * smoothstep(0.45, 0.85, lum) * d.a;
    wkGlowCol = vec3(1.0, 0.88, 0.7) * 0.32;
  }
  // ================================================================ LAMPS: the lens, lit from inside (uLamp[id])
  else if (kind == 11.0) {
    int li = int(vWear.x + 0.5);
    vec4 L = vec4(0.0);
    for (int i = 0; i < ${Rt}; i++) if (i == li) L = uLamp[i];
    float fres = hpN(P * 400.0);
    col = mix(col, col * 0.5 + 0.05, 0.3 * fres);
    rough = 0.08;
    wkGlow = 1.0; wkGlowCol = L.rgb;
    h += (fres - 0.5) * 0.1;
  }
  // ================================================================ BLADES: the paint, the tip bands, the leading edge's strip
  else if (kind == 12.0) {
    float r = vUv.x, ch = vUv.y;
    if (vWear.y < 0.5) {
      col = mix(col, vec3(0.75, 0.48, 0.02), smoothstep(uRotor.z - 0.33, uRotor.z - 0.325, r));
      col = mix(col, vec3(0.62, 0.62, 0.6), (1.0 - smoothstep(0.035, 0.05, ch)) * 0.8);
      metal = mix(metal, 0.9, 1.0 - smoothstep(0.035, 0.05, ch));
    } else {
      float band = fract((r - 0.5) / 0.16);
      col = mix(col, r > 0.5 ? (band < 0.5 ? vec3(0.55, 0.02, 0.02) : vec3(0.78, 0.78, 0.76)) : col, step(0.5, r));
    }
    col *= 0.85 + 0.25 * hpN(vec3(r * 3.0, ch * 8.0, 1.0));
  }
  // ================================================================ NET (cargo nets): a diamond mesh, the holes cut away
  else if (kind == 13.0) {
    vec2 q = vUv / 0.075;
    vec2 dq = vec2(q.x + q.y, q.x - q.y);
    vec2 g = abs(fract(dq) - 0.5);
    float strand = 1.0 - smoothstep(0.06, 0.1, min(g.x, g.y));
    if (strand < 0.5) discard;
    col *= 0.8 + 0.3 * hpN(vec3(q * 9.0, 1.0));
  }
  // ================================================================ DARK GLASS (the army's windows; the dead screens)
  else if (kind == 14.0) {
    float sm = hpF(P * 30.0);
    rough = mix(0.04, 0.22, smoothstep(0.5, 0.75, sm));
    metal = 0.0;
  }
  // ================================================================ GRILLE (the intakes' screens): a woven wire mesh
  else if (kind == 15.0) {
    vec2 q = vec2(P.z, P.y) / 0.006;
    float w = max(1.0 - smoothstep(0.1, 0.3, abs(fract(q.x) - 0.5)), 1.0 - smoothstep(0.1, 0.3, abs(fract(q.y) - 0.5)));
    col = mix(vec3(0.004), col, w);
    h += w * 0.3;
    rough = mix(0.9, 0.5, w);
  }
  // ---- (any kind) a dial of general grime on what is low and faces down (not the lamps, decals or glass)
  if (kind != 1.0 && kind != 10.0 && kind != 11.0 && kind != 14.0) col *= 1.0 - 0.18 * uDirt * vWear.x * (1.0 - smoothstep(-0.3, 0.6, Nn.y));
  diffuseColor.rgb = col;
  wkRough = clamp(rough, 0.04, 1.0); wkMetal = clamp(metal, 0.0, 1.0); wkH = h;
}
`,
  va = `
{
  vec3 sx = dFdx(-vViewPosition), sy = dFdy(-vViewPosition);
  vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
  float det = dot(sx, r1);
  vec2 dh = vec2(dFdx(wkH), dFdy(wkH)) * 0.0022;
  vec3 g = sign(det) * (dh.x * r1 + dh.y * r2);
  normal = normalize(abs(det) * normal - g);
}
`;
let ct = null;
const Fe = {};
function ao() {
  if (ct) return ct;
  const e = 2048,
    l = document.createElement("canvas");
  l.width = l.height = e;
  const a = l.getContext("2d");
  a.clearRect(0, 0, e, e);
  const o = (n, c, i, d, f) => (
      (Fe[n] = [c / e, 1 - (i + f) / e, (c + d) / e, 1 - i / e]),
      { px: c, py: i, w: d, h: f }
    ),
    t = (
      n,
      c,
      i,
      d,
      {
        stroke: f = null,
        sw: p = 0,
        align: m = "center",
        dy: x = 0,
        spacing: w = 0,
      } = {},
    ) => {
      (a.save(),
        (a.font = i),
        (a.textAlign = m),
        (a.textBaseline = "middle"),
        w && (a.letterSpacing = w + "px"));
      const v =
          m === "center"
            ? n.px + n.w / 2
            : m === "left"
              ? n.px + 6
              : n.px + n.w - 6,
        u = n.py + n.h / 2 + x;
      (f &&
        ((a.lineWidth = p),
        (a.strokeStyle = f),
        (a.lineJoin = "round"),
        a.strokeText(c, v, u)),
        (a.fillStyle = d),
        a.fillText(c, v, u),
        a.restore());
    };
  {
    const n = o("airrescue", 0, 0, 2048, 200);
    t(
      n,
      "AIR RESCUE",
      'bold 178px "Arial Black", Arial, sans-serif',
      "#f2f0ea",
      { spacing: 6 },
    );
  }
  {
    const n = o("callsign", 0, 210, 1024, 150);
    t(
      n,
      "RESCUE 07",
      'bold 120px "Arial Narrow", Arial, sans-serif',
      "#f2f0ea",
      { spacing: 4 },
    );
  }
  {
    const n = o("reg", 1024, 210, 1024, 150);
    t(n, "JA21AR", "bold 128px Arial, sans-serif", "#141414", { spacing: 10 });
  }
  {
    const n = o("danger", 0, 370, 1024, 110);
    (t(n, "DANGER  -  TAIL ROTOR", "bold 64px Arial, sans-serif", "#f2f0ea", {
      spacing: 3,
    }),
      (a.strokeStyle = "#f2f0ea"),
      (a.lineWidth = 5),
      a.strokeRect(n.px + 30, n.py + 12, n.w - 60, n.h - 24));
  }
  {
    const n = o("emergency", 1024, 370, 1024, 110);
    t(
      n,
      "EMERGENCY MEDICAL SERVICE",
      'bold 58px "Arial Narrow", Arial, sans-serif',
      "#c41a1e",
      { spacing: 2 },
    );
  }
  {
    const n = o("crest", 0, 490, 400, 420),
      c = n.px + 200,
      i = n.py + 200;
    (a.save(),
      a.beginPath(),
      a.moveTo(c - 150, i - 170),
      a.lineTo(c + 150, i - 170),
      a.lineTo(c + 150, i + 10),
      a.quadraticCurveTo(c + 150, i + 150, c, i + 205),
      a.quadraticCurveTo(c - 150, i + 150, c - 150, i + 10),
      a.closePath(),
      (a.fillStyle = "#f2f0ea"),
      a.fill(),
      (a.lineWidth = 12),
      (a.strokeStyle = "#d9a514"),
      a.stroke(),
      a.clip(),
      (a.fillStyle = "#b5161b"),
      a.fillRect(c - 160, i - 40, 320, 70),
      (a.fillStyle = "#f2f0ea"),
      (a.font = 'bold 54px "Arial Black", Arial, sans-serif'),
      (a.textAlign = "center"),
      (a.textBaseline = "middle"),
      a.fillText("AR", c, i - 4),
      (a.fillStyle = "#b5161b"));
    for (let d = 0; d < 5; d++)
      (a.beginPath(),
        a.ellipse(
          c - 20 - d * 18,
          i - 100 + d * 6,
          70 - d * 9,
          14,
          -0.35,
          0,
          Math.PI * 2,
        ),
        a.fill());
    (a.restore(),
      (a.font = "bold 40px Arial, sans-serif"),
      (a.fillStyle = "#f2f0ea"),
      (a.textAlign = "center"),
      a.fillText("CITY AIR RESCUE", c, n.py + 408 - 10));
  }
  {
    const n = o("cut", 420, 490, 300, 300);
    ((a.strokeStyle = "#e0b020"),
      (a.lineWidth = 22),
      a.beginPath(),
      a.moveTo(n.px + 30, n.py + 260),
      a.lineTo(n.px + 30, n.py + 30),
      a.lineTo(n.px + 260, n.py + 30),
      a.stroke(),
      t(
        { px: n.px + 50, py: n.py + 60, w: 240, h: 80 },
        "CUT",
        "bold 64px Arial, sans-serif",
        "#e0b020",
      ),
      t(
        { px: n.px + 50, py: n.py + 140, w: 240, h: 80 },
        "HERE",
        "bold 64px Arial, sans-serif",
        "#e0b020",
      ));
  }
  {
    const n = o("nostep", 740, 490, 400, 100);
    t(n, "NO STEP", "bold 70px Arial, sans-serif", "#1a1a1a", { spacing: 4 });
  }
  {
    const n = o("nostepW", 740, 600, 400, 100);
    t(n, "NO STEP", "bold 70px Arial, sans-serif", "#f2f0ea", { spacing: 4 });
  }
  {
    const n = o("fuel", 1150, 490, 400, 100);
    t(n, "JET A-1", "bold 66px Arial, sans-serif", "#1a1a1a");
  }
  {
    const n = o("push", 1150, 600, 400, 100);
    t(n, "PUSH  >", "bold 66px Arial, sans-serif", "#1a1a1a");
  }
  {
    const n = o("exit", 1560, 490, 480, 100);
    ((a.fillStyle = "#c41a1e"),
      a.fillRect(n.px + 10, n.py + 10, n.w - 20, n.h - 20),
      t(n, "EMERGENCY EXIT", "bold 50px Arial, sans-serif", "#f2f0ea"));
  }
  {
    const n = o("rescueArrow", 1560, 600, 480, 100);
    t(n, "<  RESCUE  >", "bold 60px Arial, sans-serif", "#e0b020");
  }
  {
    const n = o("army", 0, 920, 1400, 180);
    t(n, "ARMY", 'bold 160px "Arial Black", Arial, sans-serif', "#0c0c0a", {
      spacing: 24,
    });
  }
  {
    const n = o("armynum", 1400, 920, 648, 180);
    t(n, "21178", 'bold 140px "Arial Narrow", Arial, sans-serif', "#0c0c0a", {
      spacing: 6,
    });
  }
  {
    const n = o("star", 0, 1110, 300, 300),
      c = n.px + 150,
      i = n.py + 150;
    ((a.strokeStyle = "#0c0c0a"),
      (a.lineWidth = 14),
      a.beginPath(),
      a.arc(c, i, 120, 0, Math.PI * 2),
      a.stroke(),
      a.beginPath());
    for (let d = 0; d < 10; d++) {
      const f = -Math.PI / 2 + (d * Math.PI) / 5,
        p = d % 2 ? 44 : 112;
      a.lineTo(c + Math.cos(f) * p, i + Math.sin(f) * p);
    }
    (a.closePath(), (a.lineWidth = 12), a.stroke());
  }
  (ga(a, o), xa(a, o));
  const s = new Yt(l);
  return (
    (s.colorSpace = Po),
    (s.anisotropy = 8),
    (s.premultiplyAlpha = !1),
    (s.generateMipmaps = !0),
    (s.minFilter = Xt),
    (ct = s),
    s
  );
}
function ga(e, l) {
  const a = (
    o,
    t,
    {
      size: s = 22,
      col: n = "#e8e6df",
      bg: c = null,
      font: i = "bold",
      align: d = "center",
    } = {},
  ) => {
    (c && ((e.fillStyle = c), e.fillRect(o.px, o.py, o.w, o.h)),
      (e.fillStyle = n),
      (e.font = `${i} ${s}px Arial, sans-serif`),
      (e.textAlign = d),
      (e.textBaseline = "middle"));
    const f = t.length;
    t.forEach((p, m) =>
      e.fillText(
        p,
        d === "center" ? o.px + o.w / 2 : o.px + 8,
        o.py + (o.h * (m + 0.5)) / f,
      ),
    );
  };
  {
    const o = l("ovhPanel", 0, 1430, 1024, 600);
    ((e.fillStyle = "#1b1d20"),
      e.fillRect(o.px, o.py, o.w, o.h),
      (e.strokeStyle = "#8a8c90"),
      (e.lineWidth = 3),
      [
        ["BAT MSTR", "GEN 1", "GEN 2", "AVIONICS", "EMER BUS", "INV"],
        ["FUEL P1", "FUEL P2", "XFEED", "ENG 1 START", "ENG 2 START", "IGN"],
        ["NAV LT", "ANTI COLL", "STROBE", "LDG LT", "SRCH LT", "CABIN LT"],
        ["PITOT HT", "HYD 1", "HYD 2", "FIRE EXT 1", "FIRE EXT 2", "TEST"],
      ].forEach((s, n) =>
        s.forEach((c, i) => {
          const d = o.px + 20 + i * 164,
            f = o.py + 26 + n * 146;
          (e.strokeRect(d, f, 148, 128),
            a({ px: d, py: f + 4, w: 148, h: 30 }, [c], { size: 19 }),
            a({ px: d, py: f + 96, w: 148, h: 28 }, ["OFF"], {
              size: 16,
              col: "#b9b7b0",
              font: "normal",
            }),
            a({ px: d, py: f + 34, w: 148, h: 26 }, ["ON"], {
              size: 16,
              col: "#b9b7b0",
              font: "normal",
            }));
        }),
      ));
  }
  {
    const o = l("pedestal", 1030, 1430, 1018, 600);
    ((e.fillStyle = "#1b1d20"), e.fillRect(o.px, o.py, o.w, o.h));
    const t = (n, c, i) => {
      ((e.strokeStyle = "#55575b"),
        (e.lineWidth = 4),
        e.strokeRect(o.px + 10, o.py + n, o.w - 20, c),
        a({ px: o.px + 20, py: o.py + n + 6, w: 260, h: 30 }, [i], {
          size: 22,
          align: "left",
        }));
    };
    (t(10, 140, "COM 1   NAV 1"),
      t(160, 140, "COM 2   NAV 2"),
      t(310, 120, "XPDR"),
      t(440, 150, "AUDIO"),
      ["COM1", "COM2", "NAV1", "NAV2", "ICS", "PA", "MKR", "DME"].forEach(
        (n, c) => {
          const i = o.px + 30 + c * 122;
          ((e.fillStyle = "#2c2e32"),
            e.fillRect(i, o.py + 500, 100, 70),
            a({ px: i, py: o.py + 500, w: 100, h: 70 }, [n], { size: 20 }));
        },
      ));
  }
  {
    const o = l("placard1", 0, 2030, 600, 18);
    a(o, ["NO SMOKING  -  FASTEN SEAT BELTS"], {
      size: 14,
      col: "#d8d6cf",
      bg: "#26282b",
    });
  }
  {
    const o = l("compass", 620, 2030, 200, 18);
    a(o, ["N  3  6  E  12  15  S"], { size: 13, col: "#e8e6df", bg: "#111" });
  }
}
function xa(e, l) {
  const a = (t, s, n, c) => {
      const i = l(t, s, n, 128, 128),
        d = s + 64,
        f = n + 64;
      return (
        e.save(),
        e.beginPath(),
        e.arc(d, f, 62, 0, Math.PI * 2),
        e.clip(),
        c(d, f),
        e.restore(),
        i
      );
    },
    o = (t, s, n, c, i, d, f, p = 2) => {
      ((e.strokeStyle = "#e8e6df"), (e.lineWidth = p));
      for (let m = 0; m <= n; m++) {
        const x = d + ((f - d) * m) / n;
        (e.beginPath(),
          e.moveTo(t + Math.cos(x) * c, s + Math.sin(x) * c),
          e.lineTo(t + Math.cos(x) * i, s + Math.sin(x) * i),
          e.stroke());
      }
    };
  (a("dialAtt", 340, 1110, (t, s) => {
    ((e.fillStyle = "#1c5aa8"),
      e.fillRect(t - 64, s - 64, 128, 64),
      (e.fillStyle = "#6a3c14"),
      e.fillRect(t - 64, s, 128, 64),
      (e.fillStyle = "#e8e6df"),
      e.fillRect(t - 64, s - 1, 128, 3));
    for (const n of [-20, -10, 10, 20])
      e.fillRect(
        t - (Math.abs(n) > 10 ? 18 : 10),
        s - n * 1.4,
        Math.abs(n) > 10 ? 36 : 20,
        2,
      );
    ((e.fillStyle = "#e0a020"),
      e.fillRect(t - 34, s - 2, 22, 5),
      e.fillRect(t + 12, s - 2, 22, 5),
      e.beginPath(),
      e.arc(t, s, 3, 0, 7),
      e.fill(),
      o(t, s, 6, 52, 60, -Math.PI * 0.83, -Math.PI * 0.17));
  }),
    a("dialAsi", 480, 1110, (t, s) => {
      ((e.fillStyle = "#0d0d0e"),
        e.fillRect(t - 64, s - 64, 128, 128),
        (e.strokeStyle = "#2a9a3a"),
        (e.lineWidth = 6),
        e.beginPath(),
        e.arc(t, s, 52, -Math.PI * 0.6, Math.PI * 0.55),
        e.stroke(),
        o(t, s, 16, 48, 58, -Math.PI * 1.25, Math.PI * 0.25),
        (e.fillStyle = "#e8e6df"),
        (e.font = "bold 15px Arial"),
        (e.textAlign = "center"),
        e.fillText("KNOTS", t, s + 30),
        e.fillText("40", t - 30, s + 8),
        e.fillText("80", t, s - 32),
        e.fillText("120", t + 32, s + 8));
    }),
    a("dialAlt", 620, 1110, (t, s) => {
      ((e.fillStyle = "#0d0d0e"),
        e.fillRect(t - 64, s - 64, 128, 128),
        o(t, s, 50, 54, 60, 0, Math.PI * 2, 1.5),
        o(t, s, 10, 48, 60, 0, Math.PI * 2, 3),
        (e.fillStyle = "#e8e6df"),
        (e.font = "bold 16px Arial"),
        (e.textAlign = "center"),
        (e.textBaseline = "middle"));
      for (let n = 0; n < 10; n++) {
        const c = -Math.PI / 2 + (n * Math.PI) / 5;
        e.fillText(String(n), t + Math.cos(c) * 38, s + Math.sin(c) * 38);
      }
      ((e.font = "11px Arial"),
        e.fillText("ALT", t, s + 18),
        (e.fillStyle = "#222"),
        e.fillRect(t + 10, s - 8, 30, 14),
        (e.fillStyle = "#ddd"),
        (e.font = "bold 11px monospace"),
        e.fillText("1013", t + 25, s));
    }),
    a("clock", 760, 1110, (t, s) => {
      ((e.fillStyle = "#0d0d0e"),
        e.fillRect(t - 64, s - 64, 128, 128),
        o(t, s, 60, 55, 60, 0, Math.PI * 2, 1),
        o(t, s, 12, 46, 60, 0, Math.PI * 2, 4),
        (e.fillStyle = "#e8e6df"),
        (e.font = "bold 12px Arial"),
        (e.textAlign = "center"),
        e.fillText("CLOCK", t, s + 26));
    }));
  {
    l("manifest", 900, 1110, 300, 310);
    const t = 900,
      s = 1110;
    ((e.fillStyle = "#d9d3c2"), e.fillRect(t, s, 300, 310));
    const n = e.createLinearGradient(t, s, t + 300, s + 310);
    (n.addColorStop(0, "rgba(120,100,70,0.0)"),
      n.addColorStop(1, "rgba(120,100,70,0.25)"),
      (e.fillStyle = n),
      e.fillRect(t, s, 300, 310),
      (e.fillStyle = "#222"),
      (e.font = "bold 15px Arial"),
      (e.textAlign = "left"),
      e.fillText("EVACUATION MANIFEST - PT. 4", t + 14, s + 26),
      (e.font = "10px Arial"),
      e.fillText("AIR RESCUE 07   /   ST. AGNES HOSPITAL", t + 14, s + 42),
      (e.strokeStyle = "#555"),
      (e.lineWidth = 1));
    for (let i = 0; i < 12; i++) {
      const d = s + 60 + i * 19;
      (e.beginPath(), e.moveTo(t + 12, d), e.lineTo(t + 288, d), e.stroke());
    }
    const c = [
      "K. Mori",
      "A. Fujii  (child)",
      "H. Wells",
      "T. Nakano",
      "R. Ortega",
      "S. Ito",
      "M. Becker",
      "Y. Sato",
      "J. Okafor",
      "E. Tanaka",
    ];
    ((e.font = 'italic 14px "Segoe Print", "Comic Sans MS", cursive'),
      (e.fillStyle = "#1d2a6a"),
      c.forEach((i, d) => {
        const f = s + 74 + d * 19;
        (e.fillText(i, t + 22, f),
          d % 3 !== 1 &&
            ((e.strokeStyle = "#1d2a6a"),
            (e.lineWidth = 1.6),
            e.beginPath(),
            e.moveTo(t + 18, f - 4),
            e.lineTo(t + 22 + e.measureText(i).width + 6, f - 6),
            e.stroke()));
      }),
      (e.fillStyle = "rgba(110,8,8,0.75)"),
      e.beginPath(),
      e.ellipse(t + 230, s + 250, 26, 18, 0.4, 0, 7),
      e.fill(),
      (e.fillStyle = "rgba(110,8,8,0.5)"));
    for (let i = 0; i < 9; i++)
      (e.beginPath(),
        e.arc(
          t + 205 + ((i * 37) % 60),
          s + 222 + ((i * 23) % 50),
          2 + (i % 3),
          0,
          7,
        ),
        e.fill());
  }
}
function ya({ livery: e = "rescue" } = {}) {
  const l = new jt({
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.3,
      envMapIntensity: 1,
    }),
    a = [];
  for (let i = 0; i < Xe; i++) a.push(new b0());
  const o = [];
  for (let i = 0; i < Rt; i++) o.push(new I0(0, 0, 0, 0));
  const t = [],
    s = [],
    n = [];
  for (let i = 0; i < Ce; i++)
    (t.push(new I0()), s.push(new I0()), n.push(new I0()));
  const c = {
    uPart: { value: a },
    uRotor: { value: new I0(0.3, 0, 5.5, 1) },
    uTRotorA: { value: 1 },
    uLivery: { value: e === "army" ? 1 : 0 },
    uDirt: { value: 0.8 },
    uBurn: { value: 0 },
    uLamp: { value: o },
    uDecP: { value: t },
    uDecU: { value: s },
    uDecS: { value: n },
    tAtlas: { value: ao() },
    uViewToRest: { value: new b0() },
    uDoorsOpen: { value: new I0() },
    uPanelLight: { value: 0 },
  };
  return (
    (l.userData.U = c),
    (l.onBeforeCompile = (i) => {
      (Object.assign(i.uniforms, c),
        (i.vertexShader = i.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
` + la,
          )
          .replace(
            "#include <beginnormal_vertex>",
            `#include <beginnormal_vertex>
` + ia,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` + ca,
          )),
        (i.fragmentShader = i.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
` + ua,
          )
          .replace(
            "#include <clipping_planes_fragment>",
            `#include <clipping_planes_fragment>
` + pa,
          )
          .replace(
            "#include <lights_fragment_begin>",
            Ro.lights_fragment_begin
              .replace(
                "getPointLightInfo( pointLight, geometryPosition, directLight );",
                "getPointLightInfo( pointLight, geometryPosition, directLight ); if (vAO < 0.999 && max(directLight.color.r, max(directLight.color.g, directLight.color.b)) > 1e-5) directLight.color *= hpLightVis( pointLight.position );",
              )
              .replace(
                "getSpotLightInfo( spotLight, geometryPosition, directLight );",
                "getSpotLightInfo( spotLight, geometryPosition, directLight ); if (vAO < 0.999 && max(directLight.color.r, max(directLight.color.g, directLight.color.b)) > 1e-5) directLight.color *= hpLightVis( spotLight.position );",
              ),
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
` + ma,
          )
          .replace(
            "#include <roughnessmap_fragment>",
            `#include <roughnessmap_fragment>
roughnessFactor = wkRough;`,
          )
          .replace(
            "#include <metalnessmap_fragment>",
            `#include <metalnessmap_fragment>
metalnessFactor = wkMetal;`,
          )
          .replace(
            "#include <normal_fragment_maps>",
            `#include <normal_fragment_maps>
` + va,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
totalEmissiveRadiance += wkGlowCol * wkGlow;`,
          )
          .replace(
            "#include <lights_physical_fragment>",
            `#include <lights_physical_fragment>
material.clearcoat = vSurf.z * wkCoat;
material.clearcoatRoughness = clamp(0.22 + (1.0 - wkCoat) * 0.5, 0.0, 1.0);`,
          )
          .replace(
            "#include <aomap_fragment>",
            `#include <aomap_fragment>
reflectedLight.indirectDiffuse *= vAO; reflectedLight.indirectSpecular *= vAO;`,
          )));
    }),
    (l.customProgramCacheKey = () => "heli_v1"),
    (l.defines = { ...(l.defines || {}), USE_UV: "" }),
    (l.userData.depth = Vt(c, !1)),
    (l.userData.distance = Vt(c, !0)),
    l
  );
}
const wa = `
attribute vec4 aSurf;
attribute vec3 aTag;
uniform mat4 uPart[${Xe}];
uniform vec4 uRotor;
uniform float uTRotorA;
varying vec3 vRest;
varying float vMode;
varying float vKind;
`,
  ba = `
int hpI = int(aTag.x + 0.5);
vRest = position - normal * aTag.z; vMode = aTag.y; vKind = aSurf.w;
if (hpI == 5) {
  float hr = length(position.xz);
  float hu = clamp((hr - 0.5) / (uRotor.z - 0.5), 0.0, 1.0);
  transformed.y += -uRotor.x * hu * hu + uRotor.y * hu;
  if (aSurf.w > 11.5 && aSurf.w < 12.5 && uRotor.w < 0.5) transformed = vec3(0.0);
}
if (hpI == 6 && aSurf.w > 11.5 && aSurf.w < 12.5 && uTRotorA < 0.5) transformed = vec3(0.0);
transformed = (uPart[hpI] * vec4(transformed, 1.0)).xyz;
`;
function Vt(e, l) {
  const a = l ? new ko() : new zo({ depthPacking: So });
  return (
    (a.onBeforeCompile = (o) => {
      (Object.assign(o.uniforms, {
        uPart: e.uPart,
        uRotor: e.uRotor,
        uTRotorA: e.uTRotorA,
      }),
        (o.vertexShader = o.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
` + wa,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` + ba,
          )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vRest;
varying float vMode;
varying float vKind;
` + Pt(),
          )
          .replace(
            "#include <clipping_planes_fragment>",
            `#include <clipping_planes_fragment>
if (hmKeep(vRest, vMode) < 0.0) discard;
if (vKind > 12.5 && vKind < 13.5) discard;`,
          )));
    }),
    (a.customProgramCacheKey = () => (l ? "heli_dist_v1" : "heli_depth_v1")),
    a
  );
}
const je = Math.PI / 180,
  S0 = 0.035,
  X = {
    mast: h(0, 3.22, 0),
    R: 5.5,
    chord: 0.32,
    tr: h(0.315, 2.72, -6.64),
    trR: 0.98,
    trChord: 0.18,
    skidX: 1.18,
    skidR: 0.045,
    slMount: h(0, 0.66, 2.62),
    slPivot: h(0, 0.435, 2.62),
    landing: h(-0.3, 0.655, 2.12),
    hook: h(-1.15, 2.08, 0.05),
    hingeFL: [
      h(_0(2.455, 0.95) + 0.01, 0.95, 2.455),
      h(_0(2.455, 1.65) + 0.01, 1.65, 2.455),
    ],
    slideOut: 0.045,
    slideBack: 1.42,
  },
  S = {
    skin: Z({
      col: "#e8e6df",
      rough: 0.34,
      clear: 0.65,
      kind: Q.SKIN,
      grime: 0.7,
      scuff: 0.06,
      soot: 0.2,
      dust: 0.45,
    }),
    lining: Z({ col: "#7d7a73", rough: 0.72, kind: Q.TRIM, grime: 0.45 }),
    rubber: Z({ col: "#0d0d0e", rough: 0.85, kind: Q.RUBBER }),
    reveal: Z({ col: "#151517", rough: 0.7, kind: Q.PLASTIC, grime: 0.2 }),
    frame: Z({
      col: "#232427",
      rough: 0.62,
      kind: Q.PLASTIC,
      grime: 0.25,
      scuff: 0.25,
    }),
    jamb: Z({
      col: "#55534e",
      rough: 0.6,
      kind: Q.PAINT,
      scuff: 0.3,
      grime: 0.6,
    }),
    edge: Z({
      col: "#d8d6cf",
      rough: 0.4,
      clear: 0.4,
      kind: Q.PAINT,
      scuff: 0.25,
      grime: 0.4,
    }),
    steel: Z({
      col: "#8b8d8f",
      rough: 0.32,
      metal: 1,
      kind: Q.METAL,
      grime: 0.6,
    }),
    dark: Z({
      col: "#1c1d1f",
      rough: 0.5,
      metal: 0.4,
      kind: Q.METAL,
      grime: 0.5,
    }),
    alu: Z({ col: "#a7a8a6", rough: 0.4, metal: 1, kind: Q.METAL, grime: 0.5 }),
    greyPaint: Z({
      col: "#5d5f61",
      rough: 0.45,
      clear: 0.3,
      kind: Q.PAINT,
      scuff: 0.5,
      grime: 0.7,
    }),
    blackPaint: Z({
      col: "#151617",
      rough: 0.45,
      clear: 0.2,
      kind: Q.PAINT,
      scuff: 0.35,
      grime: 0.5,
    }),
    whitePaint: Z({
      col: "#d9d7d0",
      rough: 0.38,
      clear: 0.5,
      kind: Q.PAINT,
      scuff: 0.3,
      grime: 0.6,
    }),
    redPaint: Z({
      col: "#6b0a0d",
      rough: 0.38,
      clear: 0.5,
      kind: Q.PAINT,
      scuff: 0.3,
      grime: 0.6,
    }),
    odPaint: Z({
      col: "#1a1d10",
      rough: 0.7,
      clear: 0.1,
      kind: Q.PAINT,
      scuff: 0.35,
      grime: 0.6,
    }),
    blade: Z({
      col: "#2b2d30",
      rough: 0.42,
      clear: 0.2,
      kind: Q.BLADE,
      grime: 0,
      dust: 0,
    }),
    grille: Z({ col: "#3c3d3f", rough: 0.5, metal: 0.8, kind: Q.GRILLE }),
    sootInside: Z({ col: "#0a0908", rough: 0.95, kind: Q.PLAIN }),
    lens: Z({ col: "#9a9a96", rough: 0.08, kind: Q.LAMP }),
    darkglass: Z({ col: "#06080a", rough: 0.05, clear: 1, kind: Q.DARKGLASS }),
    chrome: Z({
      col: "#c9c9c7",
      rough: 0.12,
      metal: 1,
      kind: Q.METAL,
      grime: 0.1,
    }),
  };
function Ma(e, { army: l = !1, rng: a = Math.random } = {}) {
  const { body: o, tail: t, glass: s } = e,
    n = l ? { ...S.skin, rough: 0.7, clear: 0.12 } : S.skin,
    c = { parts: {} },
    i = (d, f) => {
      const p = o.tris + t.tris + s.tris;
      (f(), (c.parts[d] = o.tris + t.tris + s.tris - p));
    };
  return (
    i("pod", () => Pa(e, n, l, c)),
    i("deck", () => Ra(o, n, l)),
    i("boom", () => ka(o, t, n)),
    i("tailSurfaces", () => za(o, t, n)),
    i("tailRotor", () => Sa(t)),
    i("mainRotor", () => Aa(o)),
    i("skids", () => Ta(o, l)),
    i("searchlight", () => _a(o, l)),
    i("lamps", () => La(o, t)),
    i("details", () => Oa(o, t, l)),
    i("breakBits", () => Ia(o, t, a)),
    c
  );
}
function Pa(e, l, a, o) {
  const { body: t, glass: s } = e,
    n = 98,
    c = 88,
    i = Zo(n, c),
    d = (L, T) => L * c + ((T + c) % c),
    f = (n + 1) * c,
    p = new Float32Array(f),
    m = new Float32Array(f),
    x = new Float32Array(f),
    w = new Float32Array(f);
  for (let L = 0; L <= n; L++)
    for (let T = 0; T < c; T++) {
      const O = i.pos[L][T],
        q = d(L, T);
      ((p[q] = ea(O.x, O.y, O.z)),
        (m[q] = C0("dfront", O.x, O.y, O.z)),
        (x[q] = C0("dslide", O.x, O.y, O.z)),
        (w[q] = oo(O.x, O.y, O.z)));
    }
  const v = {
    body: [],
    inner: [],
    FL: [],
    FR: [],
    RL: [],
    RR: [],
    glassS: [],
    glassFL: [],
    glassFR: [],
    glassRL: [],
    glassRR: [],
  };
  for (let L = 0; L < n; L++)
    for (let T = 0; T < c; T++) {
      const O = [d(L, T), d(L + 1, T), d(L + 1, T + 1), d(L, T + 1)],
        q = (o0, n0) => O.some((U) => n0(o0[U])),
        j = (i.pos[L][T].x + i.pos[L + 1][(T + 1) % c].x) / 2,
        E = j > 0,
        l0 = [L, T];
      if (
        (q(p, (o0) => o0 > -0.03) && v.body.push(l0),
        Math.max(...O.map((o0) => i.pos[Math.floor(o0 / c)][o0 % c].y)) >
          0.66 && v.inner.push(l0),
        q(m, (o0) => o0 < 0.03) && v[E ? "FL" : "FR"].push(l0),
        q(x, (o0) => o0 < 0.03) && v[E ? "RL" : "RR"].push(l0),
        q(w, (o0) => o0 < 0.03))
      ) {
        const o0 = (i.pos[L][T].z + i.pos[L + 1][T].z) / 2,
          n0 = (i.pos[L][T].y + i.pos[L][(T + 1) % c].y) / 2,
          U = C0("dfront", j, n0, o0) < 0.02,
          e0 = C0("dslide", j, n0, o0) < 0.02;
        v[
          U
            ? E
              ? "glassFL"
              : "glassFR"
            : e0
              ? E
                ? "glassRL"
                : "glassRR"
              : "glassS"
        ].push(l0);
      }
    }
  const u = (L, T, O, q, { offset: j = 0, inward: E = !1 } = {}) => {
      const l0 = new Map(),
        y0 = [],
        o0 = [],
        n0 = [],
        U = (e0, a0) => {
          const r0 = d(e0, a0);
          if (l0.has(r0)) return l0.get(r0);
          const i0 = i.pos[e0][(a0 + c) % c],
            V = i.nrm[e0][(a0 + c) % c];
          return (
            y0.push(i0.x - V.x * j, i0.y - V.y * j, i0.z - V.z * j),
            E ? o0.push(-V.x, -V.y, -V.z) : o0.push(V.x, V.y, V.z),
            l0.set(r0, y0.length / 3 - 1),
            y0.length / 3 - 1
          );
        };
      for (const [e0, a0] of T) {
        const r0 = U(e0, a0),
          i0 = U(e0 + 1, a0),
          V = U(e0 + 1, a0 + 1),
          p0 = U(e0, a0 + 1);
        E ? n0.push(r0, V, p0, r0, i0, V) : n0.push(r0, p0, V, r0, V, i0);
      }
      n0.length && L.addRaw(y0, o0, n0, O, { ...q, inner: j });
    },
    g = t.tris + s.tris;
  (u(t, v.body, l, { mask: Re.BODY }),
    a ||
      u(t, v.inner, S.lining, { mask: Re.BODY }, { offset: S0, inward: !0 }));
  for (const [L, T, O] of [
    ["FL", _.DOOR_FL, Re.DOOR_FL],
    ["FR", _.DOOR_FR, Re.DOOR_FR],
    ["RL", _.DOOR_RL, Re.DOOR_RL],
    ["RR", _.DOOR_RR, Re.DOOR_RR],
  ])
    (u(t, v[L], l, { part: T, mask: O }),
      a ||
        u(t, v[L], S.lining, { part: T, mask: O }, { offset: S0, inward: !0 }));
  const P = 0.012;
  for (const [L, T] of [
    ["glassS", 0],
    ["glassFL", _.DOOR_FL],
    ["glassFR", _.DOOR_FR],
    ["glassRL", _.DOOR_RL],
    ["glassRR", _.DOOR_RR],
  ])
    a
      ? u(t, v[L], S.darkglass, { part: T, mask: Re.GLASS }, { offset: P })
      : u(s, v[L], S.darkglass, { part: T, mask: Re.GLASS }, { offset: P });
  o.parts.skins = t.tris + s.tris - g;
  const k = t.tris,
    y = (L) => {
      let T = 0,
        O = 1;
      for (let q = 0; q < 40; q++) {
        const j = (T + O) / 2;
        M(j) < L ? (T = j) : (O = j);
      }
      return (T + O) / 2;
    },
    M = (L) => ze(L, 0).z,
    F = (L, T) => ({
      s0: m0(y(L) - 0.01),
      s1: m0(y(T) + 0.01),
      th0: Oe - 0.001,
      th1: Math.PI / 2 + 0.25,
    }),
    A = (L, T, O) =>
      ta((q, j, E) => C0(L, q, j, E), { ...F(T, O), ns: 150, nt: 260 }).filter(
        (q) => q.closed && q.pos.length > 12,
      ),
    W = (L, T, { part: O = 0, r: q = 0.011, name: j = null } = {}) => {
      const E = Gt(L, T, 0.03, !0),
        l0 = E.pos.map((C, J) => C.clone().addScaledVector(E.nrm[J], -0.002));
      if ((t.add(v0([...l0, l0[0]], q, 4), null, S.rubber, { part: O }), a))
        return;
      const y0 = E.pos.map((C, J) =>
          C.clone().addScaledVector(E.nrm[J], -0.004),
        ),
        o0 = E.pos.map((C, J) =>
          C.clone().addScaledVector(E.nrm[J], -S0 - 0.006),
        );
      if (
        (t.add(Ae(y0, o0, !0), null, S.reveal, { part: O, both: S.reveal }), !j)
      )
        return;
      const n0 = E.pos.length,
        U = E.pos.map((C, J) => {
          const Y = E.pos[(J + 1) % n0],
            B = E.pos[(J - 1 + n0) % n0];
          return Y.clone().sub(B).normalize().cross(E.nrm[J]).normalize();
        }),
        e0 = E.pos[0].clone().addScaledVector(U[0], 0.02),
        a0 = C0(j, e0.x, e0.y, e0.z) < 0 ? -1 : 1,
        r0 = j === "chin" ? 0.03 : 0.05,
        i0 = E.pos.map((C, J) =>
          C.clone().addScaledVector(E.nrm[J], -S0 - 0.012),
        ),
        V = E.pos.map((C, J) =>
          C.clone()
            .addScaledVector(E.nrm[J], -S0 - 0.012)
            .addScaledVector(U[J], a0 * r0),
        ),
        p0 = E.pos.map((C, J) =>
          C.clone()
            .addScaledVector(E.nrm[J], -S0 + 0.002)
            .addScaledVector(U[J], a0 * (r0 + 0.008)),
        );
      (t.add(Ae(o0, i0, !0), null, S.frame, { part: O, both: S.frame }),
        t.add(Ae(i0, V, !0), null, S.frame, { part: O, both: S.frame }),
        t.add(Ae(V, p0, !0), null, S.frame, { part: O, both: S.frame }));
    },
    N = (L) => L.map((T) => h(-T.x, T.y, T.z)),
    D = (L) => L.map((T) => h(-T.x, T.y, T.z)),
    $ = (L, T) => {
      (T(L.pos, L.nrm, 1), T(N(L.pos), D(L.nrm), -1));
    };
  for (const [L, T, O] of [
    ["ws", 2, 3.2],
    ["chin", 2.3, 3.2],
    ["ovh", 1.05, 2.1],
    ["rwin", -1.95, -0.7],
  ])
    for (const q of A(L, T, O)) $(q, (j, E) => W(j, E, { name: L }));
  for (const L of A("wfront", 1, 2.5))
    $(L, (T, O, q) =>
      W(T, O, { part: q > 0 ? _.DOOR_FL : _.DOOR_FR, name: "wfront" }),
    );
  for (const L of A("wslide", -0.6, 0.9))
    $(L, (T, O, q) =>
      W(T, O, { part: q > 0 ? _.DOOR_RL : _.DOOR_RR, name: "wslide" }),
    );
  const u0 = (L, T, O, q, j) => {
    for (const E of A(L, T, O))
      $(E, (l0, y0, o0) => {
        const n0 = Gt(l0, y0, 0.032, !0),
          U = o0 > 0 ? q : j,
          e0 = (Y, B, k0) => Y.clone().addScaledVector(B, -k0),
          a0 = n0.pos.map((Y, B) => {
            const k0 = n0.pos[(B + 1) % n0.pos.length],
              r = n0.pos[(B - 1 + n0.pos.length) % n0.pos.length];
            return k0.clone().sub(r).normalize().cross(n0.nrm[B]).normalize();
          }),
          r0 = (() => {
            const Y = n0.pos[0].clone().addScaledVector(a0[0], 0.02);
            return C0(L, Y.x, Y.y, Y.z) < 0 ? 1 : -1;
          })(),
          i0 = n0.pos.map((Y, B) =>
            e0(Y, n0.nrm[B], 0.001).addScaledVector(a0[B], 0.0035 * r0),
          ),
          V = n0.pos.map((Y, B) =>
            e0(Y, n0.nrm[B], S0 + 0.004).addScaledVector(a0[B], 0.0035 * r0),
          );
        if ((t.add(Ae(i0, V, !0), null, S.edge, { part: U, both: S.edge }), a))
          return;
        const p0 = n0.pos.map((Y, B) =>
            e0(Y, n0.nrm[B], 0.0015).addScaledVector(a0[B], -0.0035 * r0),
          ),
          C = n0.pos.map((Y, B) =>
            e0(Y, n0.nrm[B], S0 + 0.004).addScaledVector(a0[B], -0.0035 * r0),
          );
        t.add(Ae(p0, C, !0), null, S.jamb, { both: S.jamb });
        const J = n0.pos.map((Y, B) =>
          e0(Y, n0.nrm[B], S0 * 0.55).addScaledVector(a0[B], -0.006 * r0),
        );
        t.add(v0([...J, J[0]], 0.007, 4), null, S.rubber);
      });
  };
  (u0("dfront", 0.9, 2.6, _.DOOR_FL, _.DOOR_FR),
    u0("dslide", -0.7, 1, _.DOOR_RL, _.DOOR_RR),
    (o.parts.openings = t.tris - k),
    (o.grid = i));
}
function Ra(e, l, a) {
  const s = [],
    n = [],
    c = [];
  for (let f = 0; f <= 46; f++) {
    const p = f / 46;
    c.push(
      x0(it.z0, it.z1, p - (0.12 * Math.sin(2 * Math.PI * p)) / (2 * Math.PI)),
    );
  }
  const i = (f, p) => {
    const m = Ut(f);
    let x = m.W,
      w = m.T - m.B;
    if (f > 0.86) {
      const F = m0((f - 0.86) / (it.z1 - 0.86)),
        A = Math.pow(Math.max(0, 1 - Math.pow(F, 2.2)), 1 / 2.2);
      ((x *= Math.max(A, 0.02)), (w *= Math.max(A, 0.05)));
    }
    const v = Math.cos(p),
      u = Math.sin(p),
      g = x * Math.sign(v) * Math.pow(Math.abs(v), 2 / m.p),
      P = he(Math.min(Math.abs(g), 0.8), f),
      k = Number.isFinite(P) ? Math.max(P - 0.012, 2) : 2.12,
      y = m.B + w,
      M = k + (y - k) * Math.pow(Math.abs(u), 2 / m.p);
    return h(g, M, f);
  };
  for (let f = 0; f <= 46; f++)
    for (let p = 0; p <= 34; p++) {
      const m = i(c[f], (p / 34) * Math.PI);
      s.push(m.x, m.y, m.z);
    }
  for (let f = 0; f < 46; f++)
    for (let p = 0; p < 34; p++) {
      const m = f * 35 + p,
        x = m + 34 + 1;
      n.push(m, m + 1, x, m + 1, x + 1, x);
    }
  const d = new K0();
  (d.setAttribute("position", new L0(s, 3)),
    d.setIndex(n),
    d.computeVertexNormals(),
    e.add(d, null, l));
  for (const f of [1, -1]) {
    const v = Ut(-0.6).W,
      u = new de(-0.22 - -0.92, 2.62 - 2.3, 4, 3),
      g = new b0()
        .makeRotationY((f * Math.PI) / 2)
        .setPosition(f * (v - 0.004), (2.3 + 2.62) / 2, (-0.92 + -0.22) / 2);
    e.add(u, g, S.grille);
    const P = [
      h(f * v, 2.3, -0.92),
      h(f * v, 2.3, -0.22),
      h(f * v, 2.62, -0.22),
      h(f * v, 2.62, -0.92),
    ];
    e.add(
      v0(fe([...P, P[0], P[1]], 0.04, 4), 0.012, 6),
      null,
      a ? S.odPaint : S.whitePaint,
    );
  }
  for (const f of [1, -1]) {
    const p = we(
        [
          h(f * 0.26, 2.62, -1.78),
          h(f * 0.31, 2.74, -1.98),
          h(f * 0.37, 2.86, -2.2),
          h(f * 0.41, 2.93, -2.34),
        ],
        10,
      ),
      m = v0(p, (k) => [0.12 - 0.01 * k, 0.09], 18, { up: h(0, 1, 0) });
    e.add(m, null, S.dark, { both: S.sootInside, wear: () => [0.6, 0, 1, 0] });
    const x = [],
      w = p[p.length - 1],
      v = w
        .clone()
        .sub(p[p.length - 2])
        .normalize(),
      u = h(0, 1, 0),
      g = u.clone().cross(v).normalize(),
      P = v.clone().cross(g).normalize();
    for (let k = 0; k <= 24; k++) {
      const y = (k / 24) * Math.PI * 2;
      x.push(
        w
          .clone()
          .addScaledVector(g, Math.cos(y) * 0.11)
          .addScaledVector(P, Math.sin(y) * 0.09),
      );
    }
    e.add(v0(x, 0.012, 6), null, S.dark, { wear: () => [0.5, 0, 1, 0] });
  }
  (e.add(
    W0(
      [
        [0.33, 2.78],
        [0.31, 2.86],
        [0.25, 2.93],
        [0.17, 2.98],
        [0.12, 3],
        [0, 3],
      ],
      40,
    ),
    z(0, 0, 0.02),
    l,
  ),
    e.add(
      new de(0.42, 0.34, 2, 2),
      z(0, 2.885, -0.62, -Math.PI / 2),
      S.grille,
    ));
}
function ka(e, l, a, o) {
  const s = (i) => {
      const d = ie(i),
        f = [];
      for (let p = 0; p < 28; p++) {
        const m = (p / 28) * Math.PI * 2;
        f.push(h(Math.cos(m) * d.rx, d.C + Math.sin(m) * d.ry, i));
      }
      return f;
    },
    n = (i, d, f, p, m) => {
      const x = [],
        w = [];
      for (let u = 0; u <= p; u++) {
        const g = x0(d, f, u / p);
        for (const P of s(g)) x.push(P.x, P.y, P.z);
      }
      for (let u = 0; u < p; u++)
        for (let g = 0; g < 28; g++) {
          const P = u * 28 + g,
            k = u * 28 + ((g + 1) % 28),
            y = P + 28,
            M = k + 28;
          w.push(P, y, k, k, y, M);
        }
      const v = new K0();
      (v.setAttribute("position", new L0(x, 3)),
        v.setIndex(w),
        v.computeVertexNormals(),
        i.add(v, null, a, m));
    };
  (n(e, O0.z0 + 0.05, O0.brk + 0.6, 22, {}),
    n(e, O0.brk + 0.6, O0.brk, 6, { both: S.sootInside }),
    n(l, O0.brk, O0.brk - 0.6, 6, { both: S.sootInside }),
    n(l, O0.brk - 0.6, O0.z1, 8, {}));
  {
    const i = ie(O0.z1);
    l.add(
      new ue(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2),
      z(0, i.C, O0.z1, -Math.PI / 2, 0, 0, i.rx, 0.1, i.ry),
      a,
    );
  }
  const c = (i, d, f) => {
    const p = [];
    for (let m = 0; m <= 12; m++) {
      const x = x0(d, f, m / 12),
        w = ie(x);
      p.push(h(0, w.C + w.ry - 0.012, x));
    }
    i.add(v0(p, [0.075, 0.05], 14, { up: h(1, 0, 0) }), null, a);
  };
  (c(e, -2.55, O0.brk), c(l, O0.brk, -6.2));
  {
    const i = [];
    for (let d = 0; d <= 10; d++) {
      const f = x0(-3.2, -2.3, d / 10),
        p = ie(f);
      i.push(h(0, p.C + 0.01, f));
    }
    e.add(
      v0(
        i,
        (d) => {
          const f = ie(x0(-3.2, -2.3, d));
          return [f.rx * (1 + 0.06 * d), f.ry * (1 + 0.06 * d)];
        },
        28,
        { up: h(1, 0, 0) },
      ),
      null,
      a,
    );
  }
}
function za(e, l, a) {
  e.add(
    Le(
      [
        {
          o: h(-1.2, 1.985, -4.76 - 0.03),
          c: 0.47,
          t: 0.12,
          chord: h(0, 0, -1),
          up: h(0, 1, 0),
        },
        {
          o: h(0, 1.985, -4.76),
          c: 0.54,
          t: 0.12,
          chord: h(0, 0, -1),
          up: h(0, 1, 0),
        },
        {
          o: h(1.2, 1.985, -4.76 - 0.03),
          c: 0.47,
          t: 0.12,
          chord: h(0, 0, -1),
          up: h(0, 1, 0),
        },
      ],
      12,
    ),
    null,
    a,
  );
  for (const n of [1, -1]) {
    const c = 3 * je * n,
      i = h(-Math.sin(c), 0, -Math.cos(c)),
      d = h(n, 0, 0);
    e.add(
      Le(
        [
          {
            o: h(n * (1.2 + 0.012), 1.76, -4.76 + 0.06),
            c: 0.36,
            t: 0.1,
            chord: i,
            up: d,
          },
          {
            o: h(n * (1.2 + 0.012), 2, -4.76 + 0.01),
            c: 0.46,
            t: 0.1,
            chord: i,
            up: d,
          },
          {
            o: h(n * (1.2 + 0.03), 2.3, -4.76 - 0.07),
            c: 0.36,
            t: 0.1,
            chord: i,
            up: d,
          },
        ],
        10,
      ),
      null,
      a,
    );
  }
  (l.add(
    Le(
      [
        {
          o: h(0, 1.98, -6.1),
          c: 0.98,
          t: 0.11,
          chord: h(0, 0, -1),
          up: h(1, 0, 0),
        },
        {
          o: h(0, 2.6, -6.4),
          c: 0.74,
          t: 0.11,
          chord: h(0, 0, -1),
          up: h(1, 0, 0),
        },
        {
          o: h(0, 3.24, -6.74),
          c: 0.52,
          t: 0.11,
          chord: h(0, 0, -1),
          up: h(1, 0, 0),
        },
      ],
      12,
    ),
    null,
    a,
  ),
    l.add(new ue(1, 16, 8), z(0, 3.24, -7, 0, 0, 0, 0.03, 0.04, 0.27), a),
    l.add(
      Le(
        [
          {
            o: h(0, 2.02, -6.48),
            c: 0.5,
            t: 0.12,
            chord: h(0, 0, -1),
            up: h(1, 0, 0),
          },
          {
            o: h(0, 1.55, -6.66),
            c: 0.34,
            t: 0.12,
            chord: h(0, 0, -1),
            up: h(1, 0, 0),
          },
        ],
        10,
      ),
      null,
      a,
    ),
    l.add(
      v0(
        fe(
          [
            h(0, 1.58, -6.7),
            h(0, 1.42, -6.86),
            h(0, 1.42, -7.08),
            h(0, 1.5, -7.2),
          ],
          0.06,
          5,
        ),
        0.016,
        8,
        { cap0: !0, cap1: !0 },
      ),
      null,
      S.steel,
    ));
}
function Sa(e) {
  const l = X.tr;
  (e.add(
    new ue(1, 20, 12),
    z(0.12, l.y, l.z + 0.03, 0, 0, 0, 0.11, 0.13, 0.2),
    S.skin,
  ),
    e.add(
      g0(h(0.18, l.y, l.z), h(l.x + 0.02, l.y, l.z), 0.035, 14),
      null,
      S.steel,
      { part: _.TROTOR },
    ),
    e.add(
      W0(
        [
          [0, -0.05],
          [0.06, -0.05],
          [0.07, -0.02],
          [0.07, 0.02],
          [0.05, 0.05],
          [0, 0.06],
        ],
        20,
      ),
      z(l.x + 0.02, l.y, l.z, 0, 0, -Math.PI / 2),
      S.dark,
      { part: _.TROTOR },
    ));
  for (const a of [1, -1]) {
    const o = [],
      t = h(0, a, 0);
    for (let s = 0; s <= 8; s++) {
      const n = x0(0.1, X.trR, s / 8),
        c = x0(0.17, X.trChord, s / 8),
        i = (8 - (5 * s) / 8) * je,
        d = h(0, 0, -a).applyAxisAngle(t, i),
        f = h(1, 0, 0).applyAxisAngle(t, i);
      o.push({
        o: h(l.x + 0.035, l.y + a * n, l.z).addScaledVector(d, -c * 0.25),
        c,
        t: 0.11,
        chord: d,
        up: f,
      });
    }
    e.add(Le(o, 8), null, S.blade, {
      part: _.TROTOR,
      uv: (s) => [Math.hypot(s.y - l.y, s.z - l.z), 0.5],
      wear: () => [0, 1, 0, 0],
    });
  }
}
function Aa(e) {
  const l = X.mast;
  (e.add(g0(h(0, 2.82, 0), h(0, l.y - 0.02, 0), 0.075, 20), null, S.steel, {
    part: _.ROTOR,
  }),
    e.add(
      W0(
        [
          [0, -0.03],
          [0.25, -0.03],
          [0.26, 0],
          [0.25, 0.03],
          [0.12, 0.05],
          [0, 0.05],
        ],
        36,
      ),
      z(0, 2.96, 0),
      S.alu,
      { part: _.ROTOR },
    ),
    e.add(
      W0(
        [
          [0, -0.07],
          [0.2, -0.07],
          [0.22, -0.04],
          [0.22, 0.04],
          [0.19, 0.07],
          [0, 0.07],
        ],
        36,
      ),
      z(0, l.y, 0),
      S.dark,
      { part: _.ROTOR },
    ),
    e.add(
      W0(
        [
          [0.15, 0],
          [0.145, 0.04],
          [0.11, 0.09],
          [0.05, 0.115],
          [0, 0.12],
        ],
        30,
      ),
      z(0, l.y + 0.06, 0),
      S.chrome,
      { part: _.ROTOR },
    ));
  for (let a = 0; a < 4; a++) {
    const o = (a * Math.PI) / 2,
      t = h(Math.sin(o), 0, Math.cos(o)),
      s = h(Math.cos(o), 0, -Math.sin(o)),
      n = (f, p = 0, m = 0) => h(t.x * f + s.x * m, l.y + p, t.z * f + s.z * m),
      c = new b0().makeRotationY(o);
    (e.add(
      G(0.12, 0.07, 0.42, 0.012, 2),
      new b0().copy(c).setPosition(n(0.36)),
      S.dark,
      { part: _.ROTOR },
    ),
      e.add(g0(n(0.45), n(0.78), [0.06, 0.045], 16), null, S.dark, {
        part: _.ROTOR,
      }),
      e.add(g0(n(0.5, 0, 0), n(0.5, -0.02, 0.13), 0.018, 8), null, S.steel, {
        part: _.ROTOR,
      }),
      e.add(
        g0(
          n(0.5, -0.02, 0.13),
          h(t.x * 0.24 + s.x * 0.13, 2.98, t.z * 0.24 + s.z * 0.13),
          0.011,
          8,
        ),
        null,
        S.steel,
        { part: _.ROTOR },
      ));
    const i = [],
      d = 22;
    for (let f = 0; f <= d; f++) {
      const p = x0(0.62, X.R, f / d),
        m = j0(X.R - 0.4, X.R, p),
        x =
          x0(X.chord, X.chord * 0.62, m) *
          (p < 0.95 ? x0(0.8, 1, (p - 0.62) / 0.33) : 1),
        w = x0(7, -3, (p - 0.6) / (X.R - 0.6)) * je,
        v = s
          .clone()
          .multiplyScalar(-Math.cos(w))
          .add(h(0, -Math.sin(w), 0))
          .normalize(),
        u = h(0, 1, 0).applyAxisAngle(t, w),
        g = m * m * 0.1,
        P = n(p, 0, x * 0.25 - g);
      i.push({ o: P, c: x, t: p < 0.95 ? 0.16 : 0.12, chord: v, up: u });
    }
    e.add(Le(i, 9), null, S.blade, {
      part: _.ROTOR,
      uv: (f) => {
        const p = Math.hypot(f.x, f.z),
          x = h(f.x, 0, f.z).dot(s);
        return [p, m0(0.25 - x / X.chord)];
      },
      wear: () => [0, 0, 0, 0],
    });
  }
}
function Ta(e, l) {
  const a = l ? S.odPaint : S.greyPaint;
  for (const o of [1, -1]) {
    const t = o * X.skidX,
      s = X.skidR,
      n = fe(
        [
          h(t, 0.11, -2.06),
          h(t, s, -1.86),
          h(t, s, 1.55),
          h(t, 0.11, 1.98),
          h(t, 0.36, 2.2),
        ],
        [0.25, 0.32, 0.18],
        8,
      );
    e.add(v0(n, s, 11, { cap0: !0, cap1: !0 }), null, a, {
      wear: () => [0.8, 0.9, 0, 0.3],
    });
    for (const [c, i] of [
      [-1.55, -0.6],
      [0.55, 1.4],
    ])
      e.add(
        G(0.05, 0.012, i - c, 0.004, 1),
        z(t, 0.006, (c + i) / 2),
        S.steel,
        { wear: () => [0.9, 0.5, 0, 0.3] },
      );
    e.add(G(0.26, 0.018, 0.13, 0.005, 2), z(o * 0.93, 0.55, 1), S.alu, {
      wear: () => [0.7, 0.8, 0, 0.5],
    });
  }
  for (const o of [1, -1.08]) {
    const t = [
        h(X.skidX, 0.045, o),
        h(X.skidX - 0.02, 0.32, o),
        h(1, 0.54, o),
        h(0.74, 0.6, o),
        h(0, 0.6, o),
      ],
      s = [
        ...t,
        ...t
          .slice(0, -1)
          .reverse()
          .map((n) => h(-n.x, n.y, n.z)),
      ];
    e.add(v0(we(s, 30), 0.05, 11), null, a, { wear: () => [0.7, 0.6, 0, 0.3] });
    for (const n of [1, -1])
      e.add(
        new ue(1, 14, 8),
        z(n * 0.7, 0.64, o, 0, 0, 0, 0.1, 0.07, 0.14),
        l ? S.odPaint : S.skin,
      );
  }
}
function _a(e, l) {
  const a = X.slMount,
    o = X.slPivot;
  if ((e.add(G(0.22, 0.09, 0.26, 0.02, 2), z(a.x, a.y - 0.02, a.z), S.dark), l))
    return;
  e.add(
    W0(
      [
        [0.06, 0],
        [0.06, 0.04],
        [0.05, 0.06],
        [0, 0.06],
      ],
      20,
    ),
    z(a.x, a.y - 0.12, a.z),
    S.dark,
    { part: _.SL_PAN },
  );
  const t = fe(
    [
      h(0.2, o.y, o.z),
      h(0.2, a.y - 0.09, o.z),
      h(-0.2, a.y - 0.09, o.z),
      h(-0.2, o.y, o.z),
    ],
    0.05,
    5,
  );
  e.add(v0(t, [0.022, 0.03], 10, { up: h(0, 0, 1) }), null, S.dark, {
    part: _.SL_PAN,
  });
  const s = (n) => h(o.x, o.y, o.z + n);
  (e.add(g0(s(-0.2), s(0.16), 0.14, 28), null, S.blackPaint, {
    part: _.SL_TILT,
  }),
    e.add(new Z0(0.15, 0.022, 10, 36), z(o.x, o.y, o.z + 0.16), S.chrome, {
      part: _.SL_TILT,
    }),
    e.add(new Ne(0.135, 36), z(o.x, o.y, o.z + 0.165), S.lens, {
      part: _.SL_TILT,
      wear: () => [f0.SEARCH, 0, 0, 0],
    }));
  for (let n = 0; n < 6; n++)
    e.add(
      new Z0(0.135, 0.006, 4, 22),
      z(o.x, o.y, o.z - 0.17 + n * 0.022),
      S.dark,
      { part: _.SL_TILT },
    );
  for (const n of [1, -1])
    e.add(
      g0(h(n * 0.2, o.y, o.z), h(n * 0.145, o.y, o.z), 0.03, 12),
      null,
      S.steel,
      { part: _.SL_TILT },
    );
}
function La(e, l, a) {
  const o = (t, s, n, c, i, d = null, f = !0) => {
    const p = f
        ? new ue(n, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2)
        : new Ne(n, 20),
      m = new b0();
    (d && m.makeRotationFromEuler(new Zt(d[0], d[1], d[2])),
      m.setPosition(s),
      t.add(p, m, { ...S.lens, col: i }, { wear: () => [c, 0, 0, 0] }));
  };
  (o(
    e,
    h(1.236, 2.02, -4.98),
    0.03,
    f0.NAV_L,
    [0.5, 0.05, 0.04],
    [0, 0, -Math.PI / 2],
  ),
    o(
      e,
      h(-1.236, 2.02, -4.98),
      0.03,
      f0.NAV_R,
      [0.05, 0.4, 0.12],
      [0, 0, Math.PI / 2],
    ),
    o(
      e,
      h(1.236, 2.3, -5.02),
      0.025,
      f0.STROBE_L,
      [0.6, 0.6, 0.62],
      [0, 0, -Math.PI / 2],
    ),
    o(
      e,
      h(-1.236, 2.3, -5.02),
      0.025,
      f0.STROBE_R,
      [0.6, 0.6, 0.62],
      [0, 0, Math.PI / 2],
    ),
    o(
      l,
      h(0, 2.05, O0.z1 - 0.012),
      0.028,
      f0.NAV_TAIL,
      [0.62, 0.6, 0.55],
      [-Math.PI / 2, 0, 0],
    ),
    e.add(
      W0(
        [
          [0.075, 0],
          [0.075, 0.025],
          [0, 0.025],
        ],
        20,
      ),
      z(0, 2.83, -1.55),
      S.dark,
    ),
    o(e, h(0, 2.855, -1.55), 0.06, f0.BCN_TOP, [0.5, 0.04, 0.03]),
    e.add(
      W0(
        [
          [0.075, 0],
          [0.075, 0.025],
          [0, 0.025],
        ],
        20,
      ),
      z(0, 0.64, -0.45, Math.PI),
      S.dark,
    ),
    o(
      e,
      h(0, 0.615, -0.45),
      0.06,
      f0.BCN_BELLY,
      [0.5, 0.04, 0.03],
      [Math.PI, 0, 0],
    ));
  {
    const t = X.landing,
      s = -28 * je;
    (e.add(
      new V0(0.1, 0.1, 0.05, 24, 1, !0),
      z(t.x, t.y + 0.01, t.z, Math.PI / 2 - s),
      S.chrome,
    ),
      o(e, t, 0.09, f0.LANDING, [0.55, 0.55, 0.52], [-s, 0, 0], !1));
  }
}
function Oa(e, l, a) {
  e.add(
    g0(h(0, 2.2, -3.25), h(0, 2.92, -3.62), [0.008, 0.004], 6),
    null,
    S.dark,
  );
  const o = (t, s, n = !1) => {
    const c = new Lt();
    (c.moveTo(0, 0),
      c.lineTo(0.18, 0),
      c.quadraticCurveTo(0.05, s * 0.4, -0.04, s),
      c.lineTo(-0.07, s),
      c.quadraticCurveTo(-0.03, s * 0.3, -0.06, 0),
      c.closePath());
    const i = new at(c, {
      depth: 0.012,
      bevelEnabled: !0,
      bevelThickness: 0.003,
      bevelSize: 0.003,
      bevelSegments: 1,
    });
    (i.translate(0, 0, -0.006),
      e.add(
        i,
        z(t.x, t.y, t.z, 0, -Math.PI / 2, n ? Math.PI : 0),
        S.blackPaint,
      ));
  };
  (o(h(0, 2.86, -1.15), 0.16),
    o(h(0, 0.615, 0.55), 0.14, !0),
    o(h(0, 0.64, -1.5), 0.12, !0));
  for (const t of [-3.55, -3.9])
    e.add(
      G(0.12, 0.02, 0.16, 0.005, 1),
      z(0, ie(t).C - ie(t).ry + 0.005, t),
      S.blackPaint,
    );
  for (const t of [1, -1]) {
    const c = _0(2.86, 1.38) * t;
    e.add(
      v0(
        fe(
          [
            h(c, 1.38, 2.86),
            h(c + t * 0.09, 1.38, 2.86),
            h(c + t * 0.09, 1.38, 2.86 + 0.16),
          ],
          0.02,
          4,
        ),
        0.008,
        8,
        { cap1: !0 },
      ),
      null,
      S.chrome,
    );
  }
  {
    const t = new Lt();
    (t.moveTo(0, 0),
      t.lineTo(0.55, 0),
      t.lineTo(0.62, 0.34),
      t.lineTo(0.5, 0.36));
    for (let c = 0; c < 6; c++)
      (t.lineTo(0.45 - c * 0.07, 0.3 - c * 0.045),
        t.lineTo(0.42 - c * 0.07, 0.25 - c * 0.045));
    t.closePath();
    const s = new at(t, { depth: 0.008, bevelEnabled: !1 });
    (s.translate(0, 0, -0.004),
      e.add(
        s,
        z(0, he(0, 1.55) - 0.02, 1.3, 0, -Math.PI / 2, 0),
        a ? S.odPaint : S.blackPaint,
      ));
    const n = new at(t, { depth: 0.008, bevelEnabled: !1 });
    (n.translate(0, 0, -0.004),
      e.add(
        n,
        z(0, 0.8, 2.86, 0, -Math.PI / 2, Math.PI + 0.35),
        a ? S.odPaint : S.blackPaint,
      ));
  }
  if (!a) {
    const t = h(-0.62, 2.2, 0.05),
      s = h(-1.12, 2.31, 0.05);
    (e.add(
      v0(fe([h(-0.4, 2.24, 0.05), t, s], 0.08, 4), [0.05, 0.065], 12, {
        up: h(0, 0, 1),
      }),
      null,
      S.greyPaint,
    ),
      e.add(
        g0(h(-1.16, 2.22, -0.24), h(-1.16, 2.22, 0.3), 0.11, 22),
        null,
        S.whitePaint,
      ));
    for (const n of [-0.24, 0.3])
      e.add(
        new V0(0.115, 0.115, 0.02, 22),
        z(-1.16, 2.22, n, Math.PI / 2),
        S.dark,
      );
    (e.add(
      g0(h(-1.16, 2.12, 0.05), h(-1.16, 2.08, 0.05), 0.004, 6),
      null,
      S.steel,
      { part: _.HOOK },
    ),
      e.add(G(0.05, 0.08, 0.04, 0.008, 2), z(-1.16, 2.04, 0.05), S.dark, {
        part: _.HOOK,
      }),
      e.add(
        new Z0(0.032, 0.008, 8, 18, Math.PI * 1.5),
        z(-1.16, 1.975, 0.05, 0, Math.PI / 2, Math.PI * 0.75),
        S.steel,
        { part: _.HOOK },
      ));
  }
  {
    const t = h(_0(2.72, 1), 1, 2.72),
      s = h(0.9, 0.93, 2.94);
    (e.add(v0(fe([t, h(0.84, 1, 2.8), s], 0.05, 4), 0.012, 8), null, S.dark),
      e.add(
        new ue(0.08, 18, 10, 0, Math.PI * 2, 0, 0.6),
        z(s.x, s.y, s.z + 0.02, -Math.PI / 2 - 0.4, 0.5, 0),
        S.chrome,
      ),
      e.add(
        new Z0(0.045, 0.008, 6, 20),
        z(s.x, s.y, s.z + 0.06, -0.4, 0.5, 0, 1.6, 1.6, 1),
        S.dark,
      ));
  }
  for (const t of [1, -1]) {
    let c = 2.6;
    for (let p = 3.2; p > 2.4; p -= 0.004)
      if (he(0.5, p) >= 1.575) {
        c = p;
        break;
      }
    const i = h(t * 0.5, 1.575, c + 0.012);
    e.add(
      new V0(0.018, 0.022, 0.03, 12),
      z(i.x, i.y, i.z + 0.01, -0.9, 0, 0),
      S.dark,
    );
    const d = [];
    for (let p = 0; p <= 8; p++) {
      const m = x0(0.5, 0.08, p / 8),
        x = 1.5 + 0.22 * m * m + 0.035;
      let w = 2.6;
      for (let v = 3.25; v > 2.4; v -= 0.004)
        if (he(m, v) >= x) {
          w = v;
          break;
        }
      d.push(h(t * m, x, w + 0.016));
    }
    e.add(v0(d, [0.006, 0.004], 6, { cap0: !0, cap1: !0 }), null, S.dark);
    const f = d.map((p) => p.clone().add(h(0, 0.006, 0.004)));
    e.add(v0(f.slice(1), 0.004, 4, { cap0: !0, cap1: !0 }), null, S.rubber);
  }
  for (const t of [1, -1]) {
    let s = -2.6;
    for (let n = -2.92; n < -2.3; n += 0.005)
      if (_0(n, 1.45) >= 0.09) {
        s = n;
        break;
      }
    e.add(
      G(0.03, 0.12, 0.025, 0.008, 1),
      z(t * 0.09, 1.45, s - 0.01, 0, t * 0.5, 0),
      S.chrome,
    );
    for (const n of [1.15, 1.8]) {
      let c = -2.5;
      for (let i = -2.92; i < -2.2; i += 0.005)
        if (_0(i, n) >= 0.5) {
          c = i;
          break;
        }
      e.add(
        G(0.05, 0.06, 0.04, 0.008, 1),
        z(t * (_0(c, n) - 0.005), n, c - 0.02),
        S.steel,
      );
    }
  }
  for (const t of [1, -1])
    for (const s of X.hingeFL)
      e.add(
        G(0.03, 0.07, 0.05, 0.008, 1),
        z(t * (s.x - 0.008), s.y, s.z + 0.012),
        S.steel,
      );
  for (const t of [1, -1]) {
    const c = _0(1.2, 1) * t;
    e.add(G(0.02, 0.03, 0.15, 0.008, 2), z(c + t * 0.006, 1, 1.2), S.chrome, {
      part: t > 0 ? _.DOOR_FL : _.DOOR_FR,
    });
    const i = -0.75,
      d = _0(i, 1.2) * t;
    e.add(
      v0(
        fe(
          [
            h(d, 1, i),
            h(d + t * 0.05, 1.02, i),
            h(d + t * 0.05, 1.4, i),
            h(d, 1.42, i),
          ],
          0.03,
          3,
        ),
        0.011,
        8,
      ),
      null,
      S.chrome,
    );
    const f = -0.55,
      p = 1.02,
      m = _0(f, p) * t;
    e.add(
      G(0.018, 0.03, 0.14, 0.008, 2),
      z(m + t * 0.006, p, f - 0.2),
      S.chrome,
      { part: t > 0 ? _.DOOR_RL : _.DOOR_RR },
    );
    for (const x of [2.13, 0.79]) {
      const w = [];
      for (let v = 0; v <= 10; v++) {
        const u = x0(-2.15, 0.85, v / 10),
          g = _0(u, x);
        g > 0 && w.push(h(t * (g + 0.015), x, u));
      }
      w.length > 2 &&
        e.add(v0(w, 0.012, 6, { cap0: !0, cap1: !0 }), null, S.alu);
    }
  }
  if (!a) {
    const n = -_0(-1.65, 1.05);
    e.add(
      new V0(0.045, 0.045, 0.012, 20),
      z(n - 0.004, 1.05, -1.65, 0, 0, Math.PI / 2),
      S.chrome,
    );
  }
}
function Ia(e, l, a) {
  const o = O0.brk,
    t = ie(o),
    s = (n, c, i) => {
      for (let f = 0; f < 26; f++) {
        const p = (f / 26) * Math.PI * 2,
          m = ((f + 1) / 26) * Math.PI * 2,
          x = (p + m) / 2,
          w = 0.04 + a() * 0.14,
          v = a() < 0.3 ? 0.4 + a() * 0.5 : a() * 0.15,
          u = h(Math.cos(p) * t.rx, t.C + Math.sin(p) * t.ry, o),
          g = h(Math.cos(m) * t.rx, t.C + Math.sin(m) * t.ry, o),
          P = h(Math.cos(x), Math.sin(x), 0),
          k = h(
            Math.cos(x) * t.rx,
            t.C + Math.sin(x) * t.ry,
            o + i * w,
          ).addScaledVector(P, v * w),
          y = new K0();
        (y.setAttribute(
          "position",
          new L0([u.x, u.y, u.z, g.x, g.y, g.z, k.x, k.y, k.z], 3),
        ),
          y.setIndex(i > 0 ? [0, 1, 2] : [0, 2, 1]),
          y.computeVertexNormals(),
          n.add(y, null, S.skin, { part: c, both: S.sootInside }));
      }
      for (let f = 0; f < 7; f++) {
        const p = a() * Math.PI * 2,
          m = h(Math.cos(p) * t.rx * 0.92, t.C + Math.sin(p) * t.ry * 0.92, o),
          x = m
            .clone()
            .add(
              h((a() - 0.5) * 0.12, (a() - 0.5) * 0.12, i * (0.06 + a() * 0.2)),
            );
        n.add(g0(m, x, 0.008, 4), null, S.alu, { part: c });
      }
      n.add(
        g0(
          h(0, t.C + t.ry - 0.03, o),
          h(0, t.C + t.ry - 0.03 + (a() - 0.5) * 0.04, o + i * 0.18),
          0.022,
          8,
        ),
        null,
        S.steel,
        { part: c },
      );
    };
  (s(e, _.BRK_BODY, -1), s(l, _.BRK_TAIL, 1));
  for (let n = 0; n < 4; n++) {
    const c = -Math.PI / 2 + (a() - 0.5) * 1.6,
      i = h(Math.cos(c) * t.rx * 0.7, t.C + Math.sin(c) * t.ry * 0.7, o),
      d = [i];
    let f = i.clone();
    const p = 0.5 + a() * 0.9,
      m = 8;
    for (let x = 1; x <= m; x++) {
      const w = x / m;
      ((f = i
        .clone()
        .add(h((a() - 0.5) * 0.06 * w, -p * w * w * 0.8, -p * w * 0.6))),
        d.push(f));
    }
    e.add(
      v0(we(d, 24), 0.006 + a() * 0.004, 5),
      null,
      n % 2 ? S.dark : S.redPaint,
      { part: _.CABLES },
    );
  }
}
function qt(e, l) {
  const a = e.nv,
    o = new Float32Array(a).fill(1),
    t = l,
    s = t.NT,
    n = [],
    c = 4;
  for (let x = 0; x < t.NS; x += c)
    for (let w = 0; w < s; w += c) {
      const v = t.pos[x][w],
        u = t.pos[x + 1][(w + 1) % s],
        g = (v.x + u.x) / 2,
        P = (v.y + u.y) / 2,
        k = (v.z + u.z) / 2;
      if (oo(g, P, k) > -0.01) continue;
      const y = t.pos[x + 1][w].clone().sub(v),
        M = t.pos[x][(w + 1) % s].clone().sub(v),
        F = y.cross(M).length() * c * c,
        A = t.nrm[x][w];
      n.push([g, P, k, A.x, A.y, A.z, F]);
    }
  const i = [-0.78, 0.78, 1, 1.56, 2.28, 3.2],
    d = (x, w, v, u, g, P, k) => {
      let y = 0,
        M = k;
      for (const [F, A, W, N] of [
        [x, u, i[0], i[1]],
        [w, g, i[2], i[3]],
        [v, P, i[4], i[5]],
      ]) {
        if (Math.abs(A) < 1e-9) {
          if (F < W || F > N) return !1;
          continue;
        }
        let D = (W - F) / A,
          $ = (N - F) / A;
        if (D > $) {
          const u0 = D;
          ((D = $), ($ = u0));
        }
        if (((y = Math.max(y, D)), (M = Math.min(M, $)), y > M)) return !1;
      }
      return !0;
    },
    f = e.P,
    p = e.N,
    m = e.S;
  e.G;
  for (let x = 0; x < a; x++) {
    const w = f[x * 3],
      v = f[x * 3 + 1],
      u = f[x * 3 + 2],
      g = m[x * 4 + 3];
    if (
      g === 1 ||
      g === 14 ||
      g === 11 ||
      u < -2.66 ||
      u > 3.38 ||
      v < 0.6 ||
      v > 2.3
    )
      continue;
    const P = _0(u, v);
    if (!(P > 0) || Math.abs(w) > P - 0.006) continue;
    const k = p[x * 3],
      y = p[x * 3 + 1],
      M = p[x * 3 + 2];
    let F = 0;
    for (const A of n) {
      let W = A[0] - w,
        N = A[1] - v,
        D = A[2] - u;
      const $ = W * W + N * N + D * D,
        u0 = Math.sqrt($);
      ((W /= u0), (N /= u0), (D /= u0));
      const L = k * W + y * N + M * D;
      if (L <= 0) continue;
      const T = A[3] * W + A[4] * N + A[5] * D;
      T <= 0 ||
        d(w, v, u, W, N, D, u0 - 0.03) ||
        (F += (L * T * A[6]) / (Math.PI * ($ + 0.02)));
    }
    o[x] = Math.min(1, 0.15 + 1.1 * F);
  }
  e.O = Array.from(o);
}
const Ye = Math.PI / 180,
  t0 = {
    floorY: 0.7,
    seatX: 0.38,
    seatZ: 1.4,
    seatTop: 1.075,
    eye: h(0.38, 1.9, 1.5),
    cycBase: 1.88,
    cycTop: 1.2,
    colPivot: h(0.27, 0.82, 1.14),
    pedZ: 2.36,
    pedY: 0.84,
    panel: { y0: 1.19, z0: 2.29, h: 0.33, tilt: 11.6 * Ye, x: 0.76 },
  },
  R = {
    plastic: Z({
      col: "#17181a",
      rough: 0.62,
      kind: Q.PLASTIC,
      grime: 0.3,
      scuff: 0.3,
    }),
    plasticGrey: Z({
      col: "#3a3c3f",
      rough: 0.55,
      kind: Q.PLASTIC,
      grime: 0.35,
      scuff: 0.35,
    }),
    panelPaint: Z({
      col: "#232528",
      rough: 0.58,
      kind: Q.PLASTIC,
      grime: 0.3,
      scuff: 0.45,
    }),
    glareTop: Z({
      col: "#0b0b0c",
      rough: 0.92,
      kind: Q.PLASTIC,
      grime: 0.2,
      dust: 0.4,
    }),
    bezel: Z({
      col: "#1d1e21",
      rough: 0.45,
      kind: Q.PLASTIC,
      grime: 0.2,
      scuff: 0.25,
    }),
    button: Z({ col: "#2b2d31", rough: 0.5, kind: Q.PLASTIC, scuff: 0.6 }),
    knob: Z({ col: "#111214", rough: 0.4, kind: Q.PLASTIC, scuff: 0.5 }),
    alu: Z({
      col: "#9fa1a0",
      rough: 0.38,
      metal: 1,
      kind: Q.METAL,
      grime: 0.5,
    }),
    steel: Z({
      col: "#8a8b8c",
      rough: 0.3,
      metal: 1,
      kind: Q.METAL,
      grime: 0.4,
    }),
    chrome: Z({
      col: "#c4c4c2",
      rough: 0.15,
      metal: 1,
      kind: Q.METAL,
      grime: 0.2,
    }),
    dark: Z({
      col: "#1a1b1d",
      rough: 0.5,
      metal: 0.5,
      kind: Q.METAL,
      grime: 0.4,
    }),
    leather: Z({
      col: "#1a1513",
      rough: 0.55,
      clear: 0.15,
      kind: Q.FABRIC,
      scuff: 0.5,
    }),
    fabric: Z({ col: "#22262c", rough: 0.85, kind: Q.FABRIC, scuff: 0.3 }),
    web: Z({ col: "#1e2124", rough: 0.85, kind: Q.WEB }),
    webRed: Z({ col: "#5a0d10", rough: 0.85, kind: Q.WEB }),
    floor: Z({ col: "#1c1c1d", rough: 0.88, kind: Q.FLOOR, grime: 0.8 }),
    rubber: Z({ col: "#0e0e0f", rough: 0.85, kind: Q.RUBBER }),
    trim: Z({ col: "#7d7a73", rough: 0.72, kind: Q.TRIM, grime: 0.45 }),
    decal: Z({ col: "#1b1d20", rough: 0.55, kind: Q.DECAL, grime: 1 }),
    paper: Z({ col: "#c8c2b0", rough: 0.85, kind: Q.DECAL, grime: 0 }),
    red: Z({
      col: "#6e0b0e",
      rough: 0.45,
      clear: 0.3,
      kind: Q.PAINT,
      scuff: 0.4,
    }),
    orange: Z({ col: "#8a2a06", rough: 0.7, kind: Q.FABRIC, scuff: 0.3 }),
    redBag: Z({ col: "#5c0a0c", rough: 0.75, kind: Q.FABRIC, scuff: 0.35 }),
    mattress: Z({
      col: "#0f2238",
      rough: 0.45,
      clear: 0.2,
      kind: Q.FABRIC,
      scuff: 0.2,
    }),
    white: Z({ col: "#c9c7c0", rough: 0.5, kind: Q.PAINT, scuff: 0.2 }),
    green: Z({
      col: "#173a1f",
      rough: 0.45,
      clear: 0.3,
      kind: Q.PAINT,
      scuff: 0.4,
    }),
    yellow: Z({ col: "#8a6a08", rough: 0.5, kind: Q.PAINT, scuff: 0.5 }),
    net: Z({ col: "#2a2c2e", rough: 0.9, kind: Q.NET }),
    lens: Z({ col: "#a8a8a2", rough: 0.1, kind: Q.LAMP }),
    blood: Z({ col: "#1e0203", rough: 0.25, clear: 0.6, kind: Q.PLAIN }),
    gauze: Z({ col: "#b8b4aa", rough: 0.9, kind: Q.FABRIC }),
  };
function xe(e, l, a = 0) {
  const o = t0.panel,
    t = h(0, Math.cos(o.tilt), Math.sin(o.tilt)),
    s = h(0, Math.sin(o.tilt), -Math.cos(o.tilt));
  return h(e, o.y0, o.z0).addScaledVector(t, l).addScaledVector(s, a);
}
const D0 = (e, l, a = 0) => {
  const o = t0.panel,
    t = new b0().makeRotationX(o.tilt);
  return (t.setPosition(xe(e, l, a)), t);
};
function Ca(e, l, { rng: a = Math.random } = {}) {
  const o = {},
    t = (s, n) => {
      const c = e.tris;
      (n(), (o[s] = e.tris - c));
    };
  return (
    t("floor", () => Na(e)),
    t("panel", () => Fa(e, l)),
    t("pedestal", () => Ea(e, l)),
    t("overhead", () => Da(e, l)),
    t("post", () => Ba(e)),
    t("seats", () => {
      for (const s of [1, -1]) Ga(e, s);
    }),
    t("controls", () => Ua(e)),
    t("doorsInside", () => Va(e)),
    t("rearCabin", () => Ka(e, l, a)),
    t("ceiling", () => Wa(e)),
    t("loose", () => qa(e)),
    { parts: o }
  );
}
function Na(e) {
  const l = t0.floorY,
    a = [],
    o = [],
    t = [],
    s = -2.25,
    n = 2.41,
    c = (d) => Math.max(0.05, _0(d, l + 0.02) - S0 - 0.008),
    i = 60;
  for (let d = 0; d <= i; d++) {
    const f = x0(s, n, d / i),
      p = c(f);
    (a.push(-p, l, f, p, l, f), o.push(0, 1, 0, 0, 1, 0));
  }
  for (let d = 0; d < i; d++) {
    const f = d * 2;
    t.push(f, f + 2, f + 1, f + 1, f + 2, f + 3);
  }
  e.addRaw(a, o, t, R.floor, {
    uvs: a.flatMap((d, f) => (f % 3 === 0 ? [a[f], a[f + 2]] : [])),
  });
  for (const d of [t0.seatX, -0.38])
    for (const f of [-0.17, 0.17])
      e.add(
        G(0.035, 0.012, 0.75, 0.003, 1),
        z(d + f, l + 0.006, t0.seatZ - 0.02),
        R.alu,
      );
  for (const d of [0.14, 0.58])
    e.add(G(0.04, 0.014, 2.1, 0.003, 1), z(d, l + 0.007, -0.95), R.alu);
  for (const [d, f] of [
    [-0.55, -1.9],
    [-0.55, -0.6],
    [0, -2.05],
    [-0.1, 0.4],
  ])
    e.add(
      new Z0(0.025, 0.006, 6, 16),
      z(d, l + 0.012, f, Math.PI / 2),
      R.steel,
    );
  e.add(
    g0(h(-0.62, l + 0.03, 2.405), h(0.62, l + 0.03, 2.405), 0.022, 12),
    null,
    R.alu,
  );
  for (const d of [-0.62, 0.62, -0.12, 0.12])
    e.add(G(0.05, 0.06, 0.05, 0.008, 1), z(d, l + 0.02, 2.405), R.dark);
}
function Fa(e, l) {
  const a = t0.panel;
  (e.add(G(a.x * 2, a.h, 0.16, 0.018, 2), D0(0, a.h / 2, -0.08), R.panelPaint),
    e.add(G(0.5, 0.2, 0.16, 0.018, 2), D0(0, -0.06, -0.08), R.panelPaint));
  const o = 26,
    t = 9,
    s = [],
    n = [],
    c = (u) => {
      const g = 1.49 + 0.2 * u * u;
      for (let P = 2.3; P < 3.3; P += 0.005)
        if (!(he(u, P) - S0 - 0.02 > g)) return P;
      return 3.2;
    };
  for (let u = 0; u <= o; u++) {
    const g = x0(-0.74, a.x - 0.02, u / o),
      P = c(g);
    for (let k = 0; k <= t; k++) {
      const y = k / t,
        M = x0(2.322, P, y),
        F = 1.548 - 0.04 * y - 0.03 * (g / a.x) ** 2;
      s.push(g, F, M);
    }
  }
  for (let u = 0; u < o; u++)
    for (let g = 0; g < t; g++) {
      const P = u * (t + 1) + g,
        k = P + t + 1;
      n.push(P, P + 1, k, P + 1, k + 1, k);
    }
  const i = new K0();
  (i.setAttribute("position", new L0(s, 3)),
    i.setIndex(n),
    i.computeVertexNormals(),
    e.add(i, null, R.glareTop));
  const d = (u) => 1.535 - 0.03 * (u / a.x) ** 2,
    f = [];
  for (let u = 0; u <= 30; u++) {
    const g = x0(-0.74, a.x - 0.02, u / 30);
    f.push(h(g, d(g), 2.322));
  }
  (e.add(v0(f, 0.011, 8, { cap0: !0, cap1: !0 }), null, R.glareTop),
    e.add(
      Ae(
        f.map((u) => h(u.x, u.y - 0.008, u.z - 0.001)),
        f.map((u) => h(u.x, u.y - 0.07, u.z + 0.012)),
        !1,
      ),
      null,
      R.plastic,
      { both: R.plastic },
    ));
  const p = [
    [0.4, 0],
    [0.135, 1],
    [-0.135, 2],
    [-0.4, 3],
  ];
  for (const [u, g] of p) {
    e.add(
      G(0.205, 0.262 - 0.012, 0.026, 0.008, 1),
      D0(u, (0.012 + 0.262) / 2, 0.013),
      R.bezel,
    );
    for (const W of [-1, 1])
      for (let N = 0; N < 5; N++)
        e.add(
          new pt(0.012, 0.016, 0.008),
          D0(u + W * (0.205 / 2 - 0.011), 0.012 + 0.045 + N * 0.042, 0.029),
          R.button,
        );
    for (let W = 0; W < 4; W++)
      e.add(
        new pt(0.022, 0.009, 0.008),
        D0(u - 0.06 + W * 0.04, 0.012 + 0.012, 0.029),
        R.button,
      );
    for (const W of [-1, 1])
      e.add(
        new V0(0.009, 0.01, 0.014, 14),
        new b0().multiplyMatrices(
          D0(u + W * (0.205 / 2 - 0.012), 0.262 - 0.014, 0.033),
          new b0().makeRotationX(Math.PI / 2),
        ),
        R.knob,
      );
    const M = 0.0175,
      F = 0.012 + 0.024,
      A = 0.262 - 0.018;
    l.quad(
      [
        xe(u + 0.205 / 2 - M, F, 0.0265),
        xe(u - 0.205 / 2 + M, F, 0.0265),
        xe(u - 0.205 / 2 + M, A, 0.0265),
        xe(u + 0.205 / 2 - M, A, 0.0265),
      ],
      g,
    );
  }
  (e.add(
    G(0.46 + 0.02, 0.312 - 0.27 + 0.012, 0.016, 0.004, 1),
    D0(0, (0.27 + 0.312) / 2, 0.008),
    R.bezel,
  ),
    l.quad(
      [
        xe(0.46 / 2, 0.27, 0.0165),
        xe(-0.46 / 2, 0.27, 0.0165),
        xe(-0.46 / 2, 0.312, 0.0165),
        xe(0.46 / 2, 0.312, 0.0165),
      ],
      4,
    ));
  const m = (u, g, P, k) => {
    const y = d(u) - 0.06,
      M = 2.324;
    (e.add(
      G(g + 0.012, P + 0.012, 0.012, 0.003, 1),
      z(u, y + P / 2, M + 0.004),
      R.bezel,
    ),
      l.quad(
        [
          h(u + g / 2, y, M - 0.0025),
          h(u - g / 2, y, M - 0.0025),
          h(u - g / 2, y + P, M - 0.0025),
          h(u + g / 2, y + P, M - 0.0025),
        ],
        k,
      ));
  };
  (m(0.27, 0.05, 0.032, 5), m(-0.27, 0.05, 0.032, 5), m(0, 0.1, 0.034, 6));
  const x = (u, g, P) => D0(u, g, P).multiply(new b0().makeRotationY(Math.PI)),
    w = (u) => {
      const g = Fe[u] || [0, 0, 1, 1];
      return (P, k, y, M) => [x0(g[0], g[2], y), x0(g[1], g[3], M)];
    },
    v = (u, g, P, k = 0.028) => {
      (e.add(
        new V0(k + 0.006, k + 0.008, 0.02, 28).rotateX(Math.PI / 2),
        D0(u, g, 0.004),
        R.bezel,
      ),
        e.add(new Ne(k, 28), x(u, g, 0.0145), R.decal, { uv: w(P) }),
        e.add(new Z0(k + 0.003, 0.004, 6, 28), D0(u, g, 0.0145), R.chrome),
        e.add(
          G(0.0025, k * 0.75, 0.002, 5e-4, 1),
          new b0().multiplyMatrices(
            D0(u, g, 0.0165),
            new b0()
              .makeRotationZ(u * 20 + 1)
              .multiply(new b0().makeTranslation(0, k * 0.32, 0)),
          ),
          R.white,
        ));
    };
  (v(-0.08, -0.07, "dialAsi"),
    v(0, -0.07, "dialAtt"),
    v(0.08, -0.07, "dialAlt"));
  for (const u of [1, -1]) {
    const g = u * 0.63;
    (e.add(new Z0(0.03, 0.008, 8, 24), D0(g, 0.21, 0.006), R.plastic),
      e.add(new ue(0.026, 16, 10), D0(g, 0.21, 0.004), R.plasticGrey),
      e.add(
        new Ne(0.014, 16),
        x(g, 0.21, 0.031),
        Z({ col: "#050505", rough: 0.9 }),
      ));
  }
  v(0.62, 0.08, "clock", 0.03);
  for (let u = 0; u < 4; u++) {
    const g = -0.56 - u * 0.04;
    (e.add(
      new V0(0.006, 0.006, 0.004, 10).rotateX(Math.PI / 2),
      D0(g, 0.1, 0.004),
      R.chrome,
    ),
      e.add(
        g0(h(0, 0, 0), h(0, 0.004, -0.014), [0.0026, 0.0018], 6),
        D0(g, 0.1, 0.006),
        R.knob,
      ));
  }
  e.add(new de(0.17, 0.008), x(-0.62, 0.135, 0.0015), R.decal, {
    uv: w("placard1"),
  });
  for (let u = 0; u < 7; u++)
    for (const g of [1, -1]) {
      const P = g * (0.27 + u * 0.06);
      Math.abs(P) > a.x - 0.04 ||
        (e.add(G(0.012, 0.012, 0.01, 0.002, 1), D0(P, 0.012, 0.004), R.chrome),
        e.add(
          g0(h(0, 0, 0), h(0, 0.002, -0.018), 0.0025, 6),
          D0(P, 0.012, 0.006),
          R.chrome,
        ));
    }
}
function Ea(e, l) {
  const a = h(0, 1.06, 2.26),
    o = h(0, 0.93, 1.74),
    t = a.distanceTo(o),
    s = Math.atan2(a.y - o.y, a.z - o.z),
    n = a.clone().add(o).multiplyScalar(0.5),
    c = new b0().makeRotationX(-s).setPosition(n.x, n.y - 0.12, n.z);
  (e.add(G(0.26, 0.24, t, 0.012, 1), c, R.panelPaint),
    e.add(
      G(0.26, 0.33, 0.12, 0.012, 1),
      z(0, t0.floorY + 0.165, 1.78),
      R.panelPaint,
    ),
    e.add(
      G(0.24, 0.26, 0.5, 0.012, 1),
      z(0, t0.floorY + 0.13, 2.05),
      R.panelPaint,
    ));
  const i = new de(0.235, t - 0.03),
    d = new b0()
      .makeRotationX(-Math.PI / 2 - s)
      .setPosition(n.x, n.y + 0.0015, n.z),
    f = Fe.pedestal || [0, 0, 1, 1];
  e.add(i, d, R.decal, {
    uv: (m, x, w, v) => [x0(f[0], f[2], 1 - w), x0(f[1], f[3], 1 - v)],
  });
  const p = (m, x, w = 0.002) =>
    a
      .clone()
      .lerp(o, m)
      .add(h(x, w, 0));
  (o.clone().sub(a).normalize(), h(0, 1, 0).applyAxisAngle(h(1, 0, 0), -s + 0));
  for (const [m, x] of [
    [0.06, 0.14],
    [0.3, 0.38],
  ]) {
    const w = p(m, -0.09, 0.003),
      v = p(m, 0.07, 0.003),
      u = p(x, 0.07, 0.003),
      g = p(x, -0.09, 0.003);
    l.quad([u, g, w, v], 7);
  }
  for (const m of [0.1, 0.34, 0.55, 0.75])
    for (const x of [0.085, -0.1]) {
      const w = p(m, x, 0.004);
      (e.add(
        new V0(0.014, 0.015, 0.016, 16),
        new b0().makeRotationX(-s).setPosition(w.x, w.y + 0.008, w.z),
        R.knob,
      ),
        e.add(
          new V0(0.009, 0.009, 0.026, 12),
          new b0().makeRotationX(-s).setPosition(w.x, w.y + 0.012, w.z),
          R.knob,
        ));
    }
}
function Da(e, l) {
  const n = (v) => he(0, v) - S0,
    i = 0.8600000000000001,
    d = Math.atan2(2.06 - 2.035, i),
    f = n(1.65) - (2.035 + 2.06) / 2 + 0.03;
  e.add(
    G(0.25, f, i, 0.015, 1),
    new b0().makeRotationX(d).setPosition(0, (2.035 + 2.06) / 2 + f / 2, 1.65),
    R.panelPaint,
  );
  const p = new de(0.235, i - 0.12),
    m = new b0()
      .makeRotationX(Math.PI / 2 + d)
      .setPosition(0, (2.035 + 2.06) / 2 - 0.0015, 1.65 + 0.04),
    x = Fe.ovhPanel || [0, 0, 1, 1];
  e.add(p, m, R.decal, {
    uv: (v, u, g, P) => [x0(x[0], x[2], g), x0(x[1], x[3], 1 - P)],
  });
  const w = (v) => x0(2.035, 2.06, (v - 1.22) / i) - 0.002;
  for (let v = 0; v < 4; v++)
    for (let u = 0; u < 6; u++) {
      const g = (u - 2.5) * 0.038,
        P = 2.08 - 0.12 - v * 0.165 * 0.82 - 0.03,
        k = w(P),
        y = v === 1 && (u === 3 || u === 4);
      (e.add(new V0(0.006, 0.006, 0.004, 10), z(g, k - 0.002, P), R.chrome),
        e.add(
          g0(
            h(g, k - 0.003, P),
            h(g, k - 0.013, P + (v === 0 && u === 0 ? -0.004 : 0.004)),
            [0.0018, 0.0026],
            6,
            !0,
          ),
          null,
          R.knob,
        ),
        y && e.add(G(0.02, 0.016, 0.03, 0.002, 1), z(g, k - 0.012, P), R.red));
    }
  {
    const u = w(1.795) - 0.0012;
    l.quad(
      [
        h(0.115, u, 1.795 - 0.012),
        h(-0.115, u, 1.795 - 0.012),
        h(-0.115, u, 1.795 + 0.012),
        h(0.115, u, 1.795 + 0.012),
      ],
      9,
    );
  }
  for (const [v, u] of [
    [0.045, _.THR_1],
    [-0.045, _.THR_2],
  ]) {
    const g = 1.3399999999999999,
      P = w(g);
    (e.add(G(0.012, 0.004, 0.16, 0.001, 1), z(v, P - 0.0015, g + 0.02), R.dark),
      e.add(
        g0(h(v, P, g), h(v, P - 0.06, g - 0.01), 0.005, 8),
        null,
        R.chrome,
        { part: u },
      ),
      e.add(
        G(0.05, 0.018, 0.022, 0.006, 1),
        z(v, P - 0.068, g - 0.012),
        (v > 0, R.yellow),
        { part: u },
      ));
  }
  for (const v of [0.06, -0.06]) {
    const u = 2.0500000000000003,
      g = w(u);
    (e.add(g0(h(v, g, u), h(v, g - 0.03, u), 0.004, 6), null, R.chrome),
      e.add(G(0.04, 0.012, 0.016, 0.004, 1), z(v, g - 0.035, u), R.red));
  }
}
function Ba(e) {
  const l = [];
  for (let o = 0; o <= 10; o++) {
    const t = x0(2.08, 2.95, o / 10),
      s = he(0, t) - S0 - 0.012;
    s > 1.52 && l.push(h(0, s, t));
  }
  l.length > 2 &&
    e.add(
      v0(l, [0.026, 0.03], 10, { up: h(1, 0, 0), cap0: !0, cap1: !0 }),
      null,
      R.plastic,
    );
  const a = l[Math.min(2, l.length - 1)] || h(0, 2.1, 2.25);
  (e.add(
    G(0.07, 0.06, 0.06, 0.012, 1),
    z(0, a.y - 0.06, a.z - 0.02),
    R.plastic,
  ),
    e.add(
      new Ne(0.022, 20),
      z(0, a.y - 0.06, a.z - 0.051, 0, Math.PI),
      R.decal,
    ),
    e.add(
      g0(h(0, a.y - 0.03, a.z - 0.02), h(0, a.y, a.z), 0.006, 6),
      null,
      R.dark,
    ));
}
function Ga(e, l, a) {
  const o = l * t0.seatX,
    t = t0.seatZ,
    s = t0.seatTop,
    n = t0.floorY;
  for (const m of [-0.2, 0.2])
    (e.add(
      g0(h(o + m, n + 0.01, t + 0.2), h(o + m, s - 0.08, t + 0.2), 0.016, 10),
      null,
      R.alu,
    ),
      e.add(
        g0(
          h(o + m, n + 0.01, t - 0.18),
          h(o + m, s - 0.08, t - 0.16),
          0.016,
          10,
        ),
        null,
        R.alu,
      ),
      e.add(G(0.03, 0.045, 0.5, 0.008, 1), z(o + m, s - 0.08, t + 0.02), R.alu),
      e.add(
        g0(
          h(o + m * 0.8, s - 0.05, t - 0.26),
          h(o + m * 0.8, 1.85, t - 0.43),
          0.022,
          12,
        ),
        null,
        R.dark,
      ));
  (e.add(G(0.47, 0.05, 0.5, 0.02, 1), z(o, s - 0.07, t + 0.02), R.plasticGrey),
    e.add(
      G(0.3, 0.07, 0.46, 0.03, 2),
      z(o, s - 0.035, t + 0.04, -3 * Ye),
      R.leather,
      { wear: () => [0.3, 0.6, 0, 0.1] },
    ));
  for (const m of [-0.19, 0.19])
    e.add(
      G(0.09, 0.1, 0.47, 0.04, 2),
      z(o + m, s - 0.02, t + 0.04, -3 * Ye),
      R.leather,
      { wear: () => [0.3, 0.8, 0, 0.1] },
    );
  const c = 14 * Ye,
    i = h(o, s + 0.02, t - 0.2),
    d = (m, x = 0, w = 0) =>
      z(
        o + w,
        i.y + Math.cos(c) * m + Math.sin(c) * x,
        i.z - Math.sin(c) * m + Math.cos(c) * x,
        -c,
      );
  e.add(G(0.3, 0.66, 0.08, 0.03, 2), d(0.33), R.leather, {
    wear: () => [0.3, 0.5, 0, 0.1],
  });
  for (const m of [-0.19, 0.19])
    e.add(G(0.09, 0.62, 0.12, 0.04, 2), d(0.33, 0.02, m), R.leather, {
      wear: () => [0.3, 0.7, 0, 0.1],
    });
  (e.add(G(0.46, 0.68, 0.04, 0.012, 1), d(0.34, -0.07), R.plasticGrey),
    e.add(G(0.26, 0.16, 0.09, 0.04, 2), d(0.79, 0), R.leather));
  for (const m of [-0.07, 0.07])
    e.add(g0(h(0, 0, 0), h(0, 0.08, 0), 0.007, 6), d(0.68, 0, m), R.chrome);
  const f = (m) => h(o + m, i.y + Math.cos(c) * 0.68, i.z - Math.sin(c) * 0.68),
    p = (m, x, w = 0.045) => {
      const v = x.clone().sub(m),
        u = v.length(),
        g = new pt(w, 0.003, u),
        P = new b0().lookAt(m, x, h(0, 1, 0));
      return (P.setPosition(m.clone().add(x).multiplyScalar(0.5)), [g, P]);
    };
  for (const m of [-0.075, 0.075]) {
    const x = f(m).add(h(0, 0.01, -0.06)),
      w = f(m).add(h(0, 0.015, 0.05)),
      v = h(o + m * 1.4, s + 0.3, t - 0.12),
      u = h(o + m * 2.6, s + 0.04, t + 0.08),
      g = h(o + m * 3.3, s - 0.18, t + 0.12),
      P = we([x, w, v, u, g], 16);
    for (let k = 0; k < P.length - 1; k++) {
      const [y, M] = p(P[k], P[k + 1]);
      e.add(y, M, R.web, { uv: (F, A, W, N) => [W * 0.05, N * 0.2] });
    }
  }
  for (const m of [-0.25, 0.25]) {
    const x = we(
      [
        h(o + m, s - 0.06, t - 0.15),
        h(o + m * 1.04, s + 0.01, t + 0),
        h(o + m * 1.08, s - 0.1, t + 0.12),
        h(o + m * 1.1, s - 0.28, t + 0.1),
      ],
      10,
    );
    for (let w = 0; w < x.length - 1; w++) {
      const [v, u] = p(x[w], x[w + 1], 0.048);
      e.add(v, u, R.web);
    }
  }
  e.add(
    new V0(0.035, 0.035, 0.018, 20),
    z(o - l * 0.17, s + 0.012, t + 0.18, 0.3, 0, 0.2),
    R.chrome,
  );
}
const re = {};
function Ua(e) {
  for (const [l, a, o, t, s] of [
    [1, _.CYC_L, _.COL_L, _.PED_LL, _.PED_LR],
    [-1, _.CYC_R, _.COL_R, _.PED_RL, _.PED_RR],
  ]) {
    const n = l * t0.seatX,
      c = h(n, t0.floorY + 0.03, t0.cycBase),
      i = h(n, t0.cycTop - 0.08, t0.cycBase + 0.05),
      d = h(n, t0.cycTop + 0.07, t0.cycBase + 0.085);
    (e.add(
      W0(
        [
          [0.06, 0],
          [0.058, 0.02],
          [0.045, 0.05],
          [0.03, 0.09],
          [0.022, 0.12],
          [0, 0.12],
        ],
        20,
      ),
      z(c.x, t0.floorY, c.z),
      R.rubber,
      { part: a },
    ),
      e.add(
        v0(we([c, h(n, 0.95, t0.cycBase + 0.01), i], 10), 0.0115, 10),
        null,
        R.dark,
        { part: a },
      ),
      e.add(
        v0(
          we([i, h(n, t0.cycTop, t0.cycBase + 0.07), d], 8),
          (w) => 0.019 + 0.006 * Math.sin(w * Math.PI),
          14,
          { cap1: !0 },
        ),
        null,
        R.plastic,
        { part: a },
      ),
      e.add(
        G(0.018, 0.01, 0.018, 0.004, 1),
        z(n, d.y + 0.008, d.z + 0.01),
        R.button,
        { part: a },
      ),
      e.add(
        G(0.012, 0.02, 0.01, 0.003, 1),
        z(n, d.y - 0.04, d.z + 0.018),
        R.button,
        { part: a },
      ),
      (re["cyc" + l] = {
        part: a,
        pivot: c.clone().setY(t0.floorY + 0.06),
        grip: h(n, t0.cycTop, t0.cycBase + 0.07),
      }));
    const f = n + 0.27,
      p = h(f, t0.colPivot.y, t0.colPivot.z),
      m = h(f, 0.9, 1.62),
      x = h(f, 0.925, 1.78);
    (e.add(G(0.07, 0.07, 0.12, 0.01, 1), z(f, p.y - 0.03, p.z), R.dark),
      e.add(v0([p, m], 0.016, 10, { cap0: !0 }), null, R.dark, { part: o }),
      e.add(v0([m, x], 0.022, 14), null, R.plastic, { part: o }),
      e.add(
        G(0.06, 0.05, 0.08, 0.008, 1),
        z(f, x.y + 0.01, x.z + 0.045),
        R.plastic,
        { part: o },
      ));
    for (let w = 0; w < 3; w++)
      e.add(
        G(0.008, 0.008, 0.008, 0.002, 1),
        z(f - 0.016 + w * 0.016, x.y + 0.038, x.z + 0.05),
        R.button,
        { part: o },
      );
    re["col" + l] = {
      part: o,
      pivot: p.clone(),
      grip: m.clone().lerp(x, 0.55),
    };
    for (const [w, v] of [
      [0.12, t],
      [-0.12, s],
    ]) {
      const u = n + w,
        g = h(u, t0.floorY + 0.03, 2.4),
        P = h(u, t0.pedY, t0.pedZ);
      (e.add(v0([g, P], 0.012, 8, { cap1: !0 }), null, R.alu, { part: v }),
        e.add(
          G(0.085, 0.14, 0.016, 0.006, 1),
          z(u, t0.pedY + 0.02, t0.pedZ + 0.005, -0.55),
          R.alu,
          { part: v },
        ));
      for (let k = 0; k < 4; k++)
        e.add(
          G(0.07, 0.006, 0.006, 0.002, 1),
          z(u, t0.pedY - 0.03 + k * 0.03, t0.pedZ - 0.02 + k * 0.016, -0.55),
          R.rubber,
          { part: v },
        );
      re["ped" + l + (w > 0 ? "L" : "R")] = {
        part: v,
        pos: h(u, t0.pedY + 0.03, t0.pedZ - 0.01),
      };
    }
  }
}
function Va(e) {
  for (const [l, a] of [
    [1, _.DOOR_FL],
    [-1, _.DOOR_FR],
  ]) {
    const n = [];
    for (let p = 0; p <= 8; p++) {
      const m = x0(1.15, 2.1, p / 8);
      n.push(h(l * (_0(m, 1.06) - S0 - 0.03), 1.06, m));
    }
    e.add(
      v0(n, [0.03, 0.022], 10, { cap0: !0, cap1: !0 }),
      null,
      R.plasticGrey,
      { part: a },
    );
    const c = 1.25,
      i = l * (_0(c, 1) - S0 - 0.035);
    e.add(G(0.02, 0.025, 0.12, 0.006, 1), z(i, 1, c), R.chrome, { part: a });
    const d = 1.7,
      f = l * (_0(d, 0.9) - S0 - 0.02);
    e.add(G(0.03, 0.14, 0.32, 0.012, 1), z(f, 0.9, d), R.fabric, { part: a });
  }
  for (const [l, a] of [
    [1, _.DOOR_RL],
    [-1, _.DOOR_RR],
  ]) {
    const s = l * (_0(0.6, 1.15) - S0 - 0.03);
    e.add(
      v0(
        [
          h(s, 1.15 - 0.1, 0.6),
          h(s - l * 0.025, 1.15 - 0.1, 0.6),
          h(s - l * 0.025, 1.15 + 0.1, 0.6),
          h(s, 1.15 + 0.1, 0.6),
        ],
        0.01,
        8,
      ),
      null,
      R.chrome,
      { part: a },
    );
  }
  for (const l of [1, -1]) {
    const o = l * (_0(0.96, 1.6) - S0 - 0.03);
    e.add(
      v0(
        fe(
          [
            h(o, 1.35, 0.96),
            h(o - l * 0.04, 1.38, 0.96),
            h(o - l * 0.04, 1.75, 0.96),
            h(o, 1.78, 0.96),
          ],
          0.03,
          3,
        ),
        0.012,
        8,
      ),
      null,
      R.plastic,
    );
  }
}
function qa(e) {
  const l = Z({
      col: "#2c3524",
      rough: 0.55,
      clear: 0.2,
      kind: Q.PAINT,
      scuff: 0.4,
    }),
    a = 0.93,
    o = 1.83,
    t = _0(a, o) - S0 - 0.035;
  e.add(
    v0(
      fe(
        [h(t + 0.03, o, a), h(t - 0.01, o, a), h(t - 0.01, o + 0.025, a)],
        0.01,
        3,
      ),
      0.004,
      6,
    ),
    null,
    R.steel,
  );
  const s = h(t - 0.02, o - 0.005, a),
    n = new Z0(0.085, 0.009, 8, 22, Math.PI);
  e.add(
    n,
    z(s.x - 0.004, s.y - 0.085, s.z, 0, Math.PI / 2 + 0.25, 0),
    R.plastic,
  );
  for (const p of [1, -1]) {
    const m = h(s.x - 0.012, s.y - 0.17, s.z + p * 0.083);
    (e.add(
      W0(
        [
          [0, -0.028],
          [0.045, -0.028],
          [0.05, -0.012],
          [0.05, 0.012],
          [0.044, 0.028],
          [0, 0.028],
        ],
        18,
      ),
      z(m.x, m.y, m.z, Math.PI / 2, 0, 0.2),
      l,
    ),
      e.add(
        new Z0(0.038, 0.011, 8, 18),
        z(m.x, m.y, m.z - p * 0.03, 0, 0, 0.2),
        R.leather,
      ));
  }
  (e.add(
    v0(
      we(
        [
          h(s.x - 0.012, s.y - 0.17, s.z + 0.083),
          h(s.x - 0.03, s.y - 0.2, s.z + 0.15),
          h(s.x - 0.06, s.y - 0.16, s.z + 0.19),
        ],
        10,
      ),
      0.004,
      5,
    ),
    null,
    R.dark,
  ),
    e.add(
      new ue(0.013, 10, 8),
      z(s.x - 0.06, s.y - 0.16, s.z + 0.195),
      R.fabric,
    ),
    e.add(
      v0(
        we(
          [
            h(s.x - 0.012, s.y - 0.2, s.z - 0.083),
            h(s.x - 0.02, s.y - 0.45, s.z - 0.1),
            h(s.x - 0.05, s.y - 0.6, s.z - 0.02),
            h(s.x - 0.08, s.y - 0.68, s.z + 0.08),
          ],
          18,
        ),
        0.0035,
        5,
      ),
      null,
      R.dark,
    ));
  const c = -0.4,
    i = 2.58,
    d =
      1.535 - 0.04 * ((i - 2.322) / 0.6) - 0.03 * (c / t0.panel.x) ** 2 + 0.006;
  e.add(
    G(0.23, 0.006, 0.31, 0.003, 1),
    z(c, d, i, -0.06, 0.35, 0),
    R.plasticGrey,
  );
  const f = Fe.manifest || [0, 0, 1, 1];
  (e.add(
    new de(0.21, 0.27),
    z(c, d + 0.0045, i + 0.012, -Math.PI / 2 - 0.06, 0, -0.35 + Math.PI),
    R.paper,
    { uv: (p, m, x, w) => [x0(f[0], f[2], x), x0(f[1], f[3], w)] },
  ),
    e.add(
      G(0.12, 0.012, 0.03, 0.003, 1),
      z(c + 0.03, d + 0.008, i - 0.13, -0.06, 0.35, 0),
      R.chrome,
    ),
    e.add(
      g0(
        h(c - 0.05, d + 0.008, i - 0.02),
        h(c + 0.07, d + 0.008, i + 0.06),
        0.004,
        6,
        !0,
      ),
      null,
      R.dark,
    ));
}
function Wa(e) {
  for (const a of [-1.5, -0.4, 0.6]) {
    const o = he(0, a) - S0;
    (e.add(
      W0(
        [
          [0.07, 0],
          [0.068, -0.012],
          [0, -0.016],
        ],
        20,
      ),
      z(0, o - 0.002, a),
      R.plastic,
    ),
      e.add(
        new ue(0.055, 18, 6, 0, Math.PI * 2, Math.PI * 0.65, Math.PI * 0.35),
        z(0, o + 0.03, a),
        R.lens,
        { wear: () => [f0.CABIN, 0, 0, 0] },
      ));
  }
  const l = he(0.2, -0.8) - S0 - 0.03;
  e.add(G(0.03, 0.02, 2.2, 0.004, 1), z(0.2, l, -0.85), R.alu);
  for (const a of [-1.7, -1.1, -0.3])
    e.add(
      new Z0(0.018, 0.004, 6, 14, Math.PI * 1.4),
      z(0.2, l - 0.03, a, 0, Math.PI / 2, Math.PI * 0.8),
      R.chrome,
    );
  for (const [a, o] of [
    [0.3, 1],
    [-0.3, 1],
    [0.4, -1.2],
    [-0.4, -1.2],
  ]) {
    const t = he(a, o) - S0;
    (e.add(new ue(0.02, 12, 8), z(a, t - 0.012, o), R.chrome),
      e.add(
        new Z0(0.024, 0.006, 6, 16),
        z(a, t - 0.006, o, Math.PI / 2),
        R.plastic,
      ));
  }
}
function Ka(e, l, a) {
  const o = t0.floorY;
  (e.add(G(0.56, 0.12, 2, 0.02, 1), z(0.36, o + 0.09, -0.95), R.alu),
    e.add(G(0.52, 0.07, 1.4, 0.03, 2), z(0.36, o + 0.185, -1.25), R.mattress, {
      wear: () => [0.2, 0.4, 0, 0.1],
    }),
    e.add(
      G(0.52, 0.07, 0.6, 0.03, 2),
      z(0.36, o + 0.32, -0.27, 0.48),
      R.mattress,
      { wear: () => [0.2, 0.4, 0, 0.1] },
    ));
  for (const t of [-1.7, -1.05])
    e.add(G(0.6, 0.004, 0.05, 0.001, 1), z(0.36, o + 0.222, t), R.web);
  (e.add(
    G(0.6, 0.004, 0.05, 0.001, 1),
    z(0.36, o + 0.38, -0.3, 0.48),
    R.webRed,
  ),
    e.add(
      new Ne(0.14, 20),
      z(0.33, o + 0.222, -1.35, -Math.PI / 2, 0, 0, 1.3, 0.8, 1),
      R.blood,
    ));
  for (const t of [1, -1])
    e.add(
      g0(
        h(0.36 + t * 0.28, o + 0.2, -1.95),
        h(0.36 + t * 0.28, o + 0.2, 0),
        0.012,
        8,
      ),
      null,
      R.alu,
    );
  (e.add(
    G(0.34, 0.5, 0.22, 0.07, 2),
    z(-0.45, o + 0.25, -1.95, 0.08, 0.3, 0),
    R.redBag,
    { wear: () => [0.4, 0.5, 0, 0.2] },
  ),
    e.add(
      G(0.28, 0.18, 0.06, 0.04, 1),
      z(-0.45, o + 0.24, -1.82, 0.08, 0.3, 0),
      R.redBag,
    ),
    e.add(
      G(0.5, 0.2, 0.3, 0.06, 2),
      z(-0.25, o + 0.1, -0.45, 0, 0.6, 0),
      R.orange,
      { wear: () => [0.5, 0.5, 0, 0.2] },
    ));
  for (let t = 0; t < 6; t++) {
    const s = a() * Math.PI * 2,
      n = 0.2 + a() * 0.35;
    e.add(
      new V0(0.03, 0.03, 0.06, 12),
      z(
        -0.25 + Math.cos(s) * n,
        o + 0.03,
        -0.45 + Math.sin(s) * n,
        Math.PI / 2,
        s,
        0,
      ),
      R.gauze,
    );
  }
  for (let t = 0; t < 3; t++)
    e.add(
      new V0(0.008, 0.008, 0.05, 8),
      z(-0.05 + t * 0.07, o + 0.008, -0.2 + t * 0.03, Math.PI / 2, a() * 3, 0),
      R.white,
    );
  {
    (e.add(G(0.34, 0.24, 0.14, 0.02, 1), z(-0.3, 1.5, -2.02), R.plasticGrey),
      e.add(
        G(0.3, 0.035, 0.03, 0.01, 1),
        z(-0.3, 1.5 + 0.14, -2.02 + 0.02),
        R.plastic,
      ),
      e.add(
        G(0.06, 0.12, 0.08, 0.01, 1),
        z(-0.3, 1.5 - 0.17, -2.02 - 0.03),
        R.alu,
      ),
      l.quad(
        [
          h(-0.3 - 0.14, 1.5 - 0.09, -2.02 + 0.0715),
          h(-0.3 + 0.11, 1.5 - 0.09, -2.02 + 0.0715),
          h(-0.3 + 0.11, 1.5 + 0.1, -2.02 + 0.0715),
          h(-0.3 - 0.14, 1.5 + 0.1, -2.02 + 0.0715),
        ],
        8,
      ));
    for (let c = 0; c < 4; c++)
      e.add(
        new V0(0.008, 0.008, 0.01, 10),
        z(-0.3 + 0.135, 1.5 + 0.07 - c * 0.045, -2.02 + 0.072, Math.PI / 2),
        R.button,
      );
  }
  for (const t of [-0.55, -0.68]) {
    (e.add(
      W0(
        [
          [0, 0],
          [0.07, 0],
          [0.072, 0.02],
          [0.072, 0.6],
          [0.06, 0.66],
          [0.025, 0.69],
          [0.02, 0.72],
          [0, 0.72],
        ],
        20,
      ),
      z(t, o + 0.02, -2.06),
      R.white,
      { wear: () => [0.4, 0.4, 0, 0.3] },
    ),
      e.add(
        g0(h(t, o + 0.74, -2.06), h(t, o + 0.8, -2.06), 0.012, 8),
        null,
        R.chrome,
      ));
    for (const s of [0.2, 0.5])
      e.add(
        new Z0(0.075, 0.008, 6, 20),
        z(t, o + s, -2.06, Math.PI / 2),
        R.web,
      );
  }
  {
    const n = o + 0.42;
    (e.add(
      G(0.42, 0.06, 0.4, 0.025, 2),
      z(-0.52, n, -1, 0, Math.PI / 2, 0),
      R.fabric,
      { wear: () => [0.3, 0.4, 0, 0.1] },
    ),
      e.add(
        G(0.42, 0.5, 0.06, 0.025, 2),
        z(-0.52 - 0.2, n + 0.3, -1, -0.1, Math.PI / 2, 0),
        R.fabric,
        { wear: () => [0.3, 0.4, 0, 0.1] },
      ));
    for (const c of [-0.17, 0.17])
      e.add(
        g0(
          h(-0.52 + 0.15, o, -1 + c),
          h(-0.52 + 0.15, n - 0.03, -1 + c),
          0.014,
          8,
        ),
        null,
        R.alu,
      );
    for (const c of [-0.17, 0.17])
      e.add(
        g0(
          h(-0.52 - 0.15, o, -1 + c),
          h(-0.52 - 0.15, n - 0.03, -1 + c),
          0.014,
          8,
        ),
        null,
        R.alu,
      );
  }
  {
    const i = -(_0(-1.6, 1.3) - S0 - 0.035),
      d = new de(-1.35 - -1.95, 1.62 - 0.95, 1, 1);
    e.add(
      d,
      z(i, (0.95 + 1.62) / 2, (-1.95 + -1.35) / 2, 0, Math.PI / 2, 0),
      R.net,
      { uv: (f) => [f.z, f.y] },
    );
    for (const [f, p] of [
      [h(i, 0.95, -1.95), h(i, 0.95, -1.35)],
      [h(i, 1.62, -1.95), h(i, 1.62, -1.35)],
      [h(i, 0.95, -1.95), h(i, 1.62, -1.95)],
      [h(i, 0.95, -1.35), h(i, 1.62, -1.35)],
    ])
      e.add(g0(f, p, 0.006, 5), null, R.web);
  }
  (e.add(
    W0(
      [
        [0, 0],
        [0.055, 0],
        [0.057, 0.3],
        [0.04, 0.34],
        [0, 0.35],
      ],
      18,
    ),
    z(-0.62, o + 0.02, 0.9),
    R.red,
  ),
    e.add(G(0.06, 0.08, 0.05, 0.01, 1), z(-0.62, o + 0.42, 0.9), R.dark),
    e.add(G(0.36, 0.22, 0.1, 0.02, 1), z(0.62, 1.55, -1.95, 0, 0, 0), R.white),
    e.add(G(0.12, 0.12, 0.004, 0.002, 1), z(0.62, 1.55, -1.899), R.red));
}
const T0 = { x0: -0.85, x1: 0.85, y0: 1.35, y1: 2.3 },
  Ha = `
attribute vec3 aTag;
uniform mat4 uPart[${Xe}];
varying vec3 vRest;
varying vec3 vRestN;
`,
  $a = `
int hpI = int(aTag.x + 0.5);
mat4 hpM = uPart[hpI];
vRest = position - normal * aTag.z;
vRestN = normal;
objectNormal = mat3(hpM) * objectNormal;
`,
  Ya = `
transformed = (hpM * vec4(transformed, 1.0)).xyz;
`,
  Xa = `
varying vec3 vRest;
varying vec3 vRestN;
uniform sampler2D tCrack;
uniform float uCrack;
uniform float uDirtG;
uniform vec4 uSmear[6];       // blood smears on the glass: xyz (rest frame), w size (0 = none)
uniform float uFog;
uniform float uReflBoost;     // (the scene's environment intensity is the look's: the glass reflects more than paint)
uniform vec3 uCamRest;        // the eye, in the machine's rest frame (the screens' reflections in the glass)
uniform vec4 uPanel;          // the panel's face: y0, z0, tilt (rad), the screens' brightness (0 = dark)
uniform vec4 uScrRefl;        // x the warning lamps' red, y the master caution's amber, z the PFDs' bank (rad), w strength
vec3 gaRefl = vec3(0.0);
float gaOut = 0.0;            // 1: seen from outside (the outer face)
float glH(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float glN(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(glH(i), glH(i + vec3(1.0, 0.0, 0.0)), f.x), mix(glH(i + vec3(0.0, 1.0, 0.0)), glH(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(glH(i + vec3(0.0, 0.0, 1.0)), glH(i + vec3(1.0, 0.0, 1.0)), f.x), mix(glH(i + vec3(0.0, 1.0, 1.0)), glH(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
float glF(vec3 p) { return 0.5 * glN(p) + 0.25 * glN(p * 2.03 + 1.7) + 0.125 * glN(p * 4.07 - 3.1) + 0.125 * glN(p * 8.1 + 2.2); }
${Pt()}
float gaCrack = 0.0, gaShard = 0.0;
vec3 gaTilt = vec3(0.0);
`,
  ja = `
if (hmKeep(vRest, 6.0) < 0.0) discard;
`,
  Za = `
{
  vec3 P = vRest;
  gaOut = step(dot(normalize(P - uCamRest), normalize(vRestN)), 0.0);
  float ovh = step(hm_ovh(P), 0.0);
  float wsk = step(hm_ws(P), 0.0);
  vec3 tint = mix(vec3(0.02, 0.025, 0.025), vec3(0.01, 0.05, 0.035), ovh);
  float a = mix(0.06, 0.34, ovh);
  // smudges (wiped arcs), dust settled toward the frame, a film of ash
  float sm = glF(P * 9.0 + 3.0);
  float edgeD = -hmGlass(P);
  float nearEdge = 1.0 - smoothstep(0.0, 0.12, edgeD);
  float dirt = clamp(uDirtG * (smoothstep(0.55, 0.85, sm) * 0.5 + nearEdge * 0.6 * glF(P * 30.0)), 0.0, 1.0);
  a += dirt * 0.22;
  tint = mix(tint, vec3(0.16, 0.15, 0.14), dirt);
  // the cracks (the windscreen only)
  if (wsk > 0.5 && uCrack > 0.0) {
    vec2 cu = vec2((P.x - ${T0.x0.toFixed(3)}) / ${(T0.x1 - T0.x0).toFixed(3)}, (P.y - ${T0.y0.toFixed(3)}) / ${(T0.y1 - T0.y0).toFixed(3)});
    vec4 c = texture2D(tCrack, cu);
    float th = c.g / max(c.r, 0.004);
    float line = c.r * smoothstep(th, th + 0.04, uCrack);
    float shard = step(0.001, c.b) * smoothstep(c.a, c.a + 0.05, uCrack);
    gaCrack = line; gaShard = shard;
    float h1 = fract(c.b * 113.7), h2 = fract(c.b * 57.3 + 0.3);
    gaTilt = vec3(h1 - 0.5, h2 - 0.5, 0.0) * 0.16 * shard;
    tint = mix(tint, vec3(0.55, 0.58, 0.6), line);
    a = mix(a, 0.75, line);
    a = mix(a, a + 0.07, shard);
  }
  // blood: smears where the dead slapped the glass (dark, thick at the middle, dragged down)
  for (int i = 0; i < 6; i++) {
    vec4 s = uSmear[i];
    if (s.w <= 0.0) continue;
    vec3 d = P - s.xyz;
    float drag = clamp(-d.y / (s.w * 2.2), 0.0, 1.0);
    vec2 q = vec2(length(d.xz), d.y + drag * s.w * 1.2) / s.w;
    float n = glF(P * 40.0 + float(i) * 7.0);
    float blob = smoothstep(1.0, 0.55, length(q) + (n - 0.5) * 0.7);
    float streaks = smoothstep(0.62, 0.8, glN(vec3(P.x * 90.0, P.y * 6.0, P.z * 90.0) + float(i))) * smoothstep(0.0, 0.3, -d.y) * smoothstep(s.w * 3.0, 0.0, -d.y) * step(length(d.xz), s.w * 0.9);
    float b = clamp(max(blob, streaks * 0.8), 0.0, 1.0);
    tint = mix(tint, vec3(0.09, 0.004, 0.003), b);
    a = mix(a, 0.93, b * (0.75 + 0.25 * n));
  }
  // the cockpit's screens mirrored in the glass (seen from inside): the eye's ray reflected off this pane, onto the panel's
  // face - where it lands on a display, a dim, soft copy of that display's light
  if (uPanel.w > 0.001) {
    vec3 Vd = normalize(P - uCamRest);
    vec3 Nr = normalize(vRestN);
    if (dot(Vd, Nr) > 0.0) {                                 // (the eye inside: it sees the pane's inner face)
      vec3 R = reflect(Vd, -Nr);
      vec3 PU = vec3(0.0, cos(uPanel.z), sin(uPanel.z)), PN = vec3(0.0, sin(uPanel.z), -cos(uPanel.z));
      vec3 PO = vec3(0.0, uPanel.x, uPanel.y);
      float den = dot(R, PN);
      if (den < -0.02) {
        float tt = dot(PO - P, PN) / den;
        if (tt > 0.0) {
          vec3 Hh = P + R * tt;
          float sx = Hh.x, ss = dot(Hh - PO, PU);
          vec3 rc = vec3(0.0);
          for (int i = 0; i < 4; i++) {
            float xc = i == 0 ? 0.40 : i == 1 ? 0.135 : i == 2 ? -0.135 : -0.40;
            float m = (1.0 - smoothstep(0.075, 0.1, abs(sx - xc))) * (1.0 - smoothstep(0.1, 0.13, abs(ss - 0.137)));
            vec3 c;
            if (i == 0 || i == 3) {
              // a PFD: sky over ground, the line tilted with the bank
              float hz = (ss - 0.14) + (sx - xc) * tan(uScrRefl.z);
              c = hz > 0.0 ? vec3(0.06, 0.2, 0.55) : vec3(0.32, 0.17, 0.05);
            } else c = i == 1 ? vec3(0.05, 0.09, 0.14) : vec3(0.07, 0.08, 0.09);
            rc += c * m;
          }
          // the warning panel above the centre screens, the master caution lamps
          rc += vec3(1.0, 0.06, 0.03) * uScrRefl.x * (1.0 - smoothstep(0.2, 0.25, abs(sx))) * (1.0 - smoothstep(0.02, 0.035, abs(ss - 0.29)));
          rc += vec3(1.0, 0.55, 0.05) * uScrRefl.y * (1.0 - smoothstep(0.02, 0.04, abs(abs(sx) - 0.27))) * (1.0 - smoothstep(0.02, 0.04, abs(ss - 0.335)));
          float fres = 0.04 + 0.96 * pow(1.0 - clamp(dot(-Vd, -Nr), 0.0, 1.0), 5.0);
          gaRefl = rc * uPanel.w * uScrRefl.w * (fres * 0.5 + 0.012);
        }
      }
    }
  }
  diffuseColor.rgb = tint;
  diffuseColor.a = clamp(a, 0.0, 1.0);
}
`,
  Qa = `
normal = normalize(normal + gaTilt);
`,
  Ja = `
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
gl_FragColor = vec4(totalDiffuse * diffuseColor.a + totalSpecular * (1.0 + gaShard * 0.6) + totalEmissiveRadiance + gaRefl, diffuseColor.a);
`;
function en(e) {
  const l = new jt({
    color: 16777215,
    roughness: 0.035,
    metalness: 0,
    transparent: !0,
    depthWrite: !1,
    side: wt,
    blending: Qt,
    blendSrc: vt,
    blendDst: mt,
    blendSrcAlpha: vt,
    blendDstAlpha: mt,
    envMapIntensity: 1.2,
  });
  l.forceSinglePass = !0;
  const a = [];
  for (let t = 0; t < 6; t++) a.push(new I0(0, 0, 0, 0));
  const o = {
    uPart: e.uPart,
    tCrack: { value: tn() },
    uCrack: { value: 0 },
    uDirtG: { value: 0.7 },
    uSmear: { value: a },
    uFog: { value: 0 },
    uReflBoost: { value: 3.2 },
    uCamRest: { value: new H0() },
    uPanel: { value: new I0(1.19, 2.29, 0.2025, 0) },
    uScrRefl: { value: new I0(0, 0, 0, 1) },
  };
  return (
    (l.userData.U = o),
    (l.onBeforeCompile = (t) => {
      (Object.assign(t.uniforms, o),
        (t.vertexShader = t.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
` + Ha,
          )
          .replace(
            "#include <beginnormal_vertex>",
            `#include <beginnormal_vertex>
` + $a,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` + Ya,
          )),
        (t.fragmentShader = t.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
` + Xa,
          )
          .replace(
            "#include <clipping_planes_fragment>",
            `#include <clipping_planes_fragment>
` + ja,
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
` + Za,
          )
          .replace(
            "#include <normal_fragment_maps>",
            `#include <normal_fragment_maps>
` + Qa,
          )
          .replace(
            "#include <lights_fragment_end>",
            `#include <lights_fragment_end>
reflectedLight.indirectSpecular *= uReflBoost * (1.0 + gaOut * 0.8); reflectedLight.directSpecular *= gaOut;`,
          )
          .replace("#include <opaque_fragment>", Ja)));
    }),
    (l.customProgramCacheKey = () => "heli_glass_v1"),
    l
  );
}
let ft = null;
function tn() {
  if (ft) return ft;
  const e = 1024,
    l = 576,
    a = new Float32Array(e * l),
    o = new Float32Array(e * l).fill(9),
    t = new Float32Array(e * l),
    s = new Float32Array(e * l).fill(9);
  let n = 917;
  const c = () => ((n = (n * 16807) % 2147483647), n / 2147483647),
    i = (v, u) => [
      ((v - T0.x0) / (T0.x1 - T0.x0)) * e,
      ((u - T0.y0) / (T0.y1 - T0.y0)) * l,
    ],
    d = (T0.x1 - T0.x0) / e,
    f = (v, u, g, P, k, y, M) => {
      const [F, A] = i(v, u),
        [W, N] = i(g, P),
        D = Math.max(0, Math.floor(Math.min(F, W) - y - 1)),
        $ = Math.min(e - 1, Math.ceil(Math.max(F, W) + y + 1)),
        u0 = Math.max(0, Math.floor(Math.min(A, N) - y - 1)),
        L = Math.min(l - 1, Math.ceil(Math.max(A, N) + y + 1)),
        T = W - F,
        O = N - A,
        q = T * T + O * O || 1;
      for (let j = u0; j <= L; j++)
        for (let E = D; E <= $; E++) {
          const l0 = T0.x0 + (E + 0.5) * d;
          if (M > 0 ? l0 < 0.03 : l0 > -0.03) continue;
          const y0 = Math.max(
              0,
              Math.min(1, ((E + 0.5 - F) * T + (j + 0.5 - A) * O) / q),
            ),
            o0 = F + T * y0 - E - 0.5,
            n0 = A + O * y0 - j - 0.5,
            U = Math.hypot(o0, n0),
            e0 = Math.max(0, Math.min(1, y - U + 0.5));
          if (e0 <= 0) continue;
          const a0 = j * e + E;
          ((a[a0] = Math.max(a[a0], e0)),
            e0 > 0.25 && (o[a0] = Math.min(o[a0], k)));
        }
    },
    p = (v, u, g, P, k, y, M, F, A = 0, W = null) => {
      let N = v,
        D = u,
        $ = 0;
      const u0 = 0.012 + c() * 0.01,
        L = [[N, D, k]];
      for (; $ < P;) {
        g += (c() - 0.5) * 0.5;
        const T = u0 * (0.7 + c() * 0.6),
          O = N + Math.cos(g) * T,
          q = D + Math.sin(g) * T;
        if (
          (F > 0 ? O < 0.03 : O > -0.03) ||
          q < T0.y0 ||
          q > T0.y1 ||
          Math.abs(O) > 0.84
        )
          break;
        $ += T;
        const j = k + (y - k) * Math.pow($ / P, 0.85);
        (f(N, D, O, q, j, M * (1 - (0.5 * $) / P), F),
          L.push([O, q, j]),
          A < 2 &&
            c() < 0.05 &&
            p(
              O,
              q,
              g + (c() < 0.5 ? -1 : 1) * (0.4 + c() * 0.6),
              P * (0.2 + c() * 0.35),
              j,
              Math.min(1, j + (y - k) * 0.5),
              M * 0.75,
              F,
              A + 1,
            ),
          (N = O),
          (D = q));
      }
      return (W && W.push(L), L);
    },
    m = (v, u, g, P, k, y, M, F, A) => {
      const W = [],
        N = [];
      for (let O = 0; O < P; O++) {
        const q = A + (O / P) * Math.PI * 2 + (c() - 0.5) * 0.45;
        N.push(q);
        const j = k * (0.35 + c() * 0.65);
        W.push(p(v, u, q, j, y + 0.01 * c(), y + M, 1.3, g));
      }
      const D = F.map((O) => O * (0.85 + c() * 0.3));
      D.forEach((O, q) => {
        const j = y + M * (0.18 + q * 0.2);
        for (let E = 0; E < P; E++) {
          if (c() < 0.18 + q * 0.08) continue;
          const l0 = N[E],
            y0 = N[(E + 1) % P] + (E === P - 1 ? Math.PI * 2 : 0),
            o0 = 5;
          let n0 = v + Math.cos(l0) * O,
            U = u + Math.sin(l0) * O;
          for (let e0 = 1; e0 <= o0; e0++) {
            const a0 = l0 + (y0 - l0) * (e0 / o0),
              r0 = O * (1 + (c() - 0.5) * 0.16),
              i0 = v + Math.cos(a0) * r0,
              V = u + Math.sin(a0) * r0;
            (f(n0, U, i0, V, j, 1, g), (n0 = i0), (U = V));
          }
        }
      });
      const $ = D[D.length - 1] * 1.05,
        [u0, L] = i(v, u),
        T = $ / d;
      for (
        let O = Math.max(0, Math.floor(L - T));
        O <= Math.min(l - 1, Math.ceil(L + T));
        O++
      )
        for (
          let q = Math.max(0, Math.floor(u0 - T));
          q <= Math.min(e - 1, Math.ceil(u0 + T));
          q++
        ) {
          const j = T0.x0 + (q + 0.5) * d,
            E = T0.y0 + ((O + 0.5) / l) * (T0.y1 - T0.y0);
          if (g > 0 ? j < 0.03 : j > -0.03) continue;
          const l0 = j - v,
            y0 = E - u,
            o0 = Math.hypot(l0, y0);
          if (o0 > $) continue;
          let n0 = Math.atan2(y0, l0);
          for (; n0 < N[0];) n0 += Math.PI * 2;
          let U = 0;
          for (let r0 = 0; r0 < P; r0++) {
            const i0 = N[r0] + (N[r0] < N[0] ? Math.PI * 2 : 0);
            n0 >= i0 && (U = r0);
          }
          let e0 = D.findIndex((r0) => o0 < r0);
          e0 < 0 && (e0 = D.length);
          const a0 = O * e + q;
          ((t[a0] =
            0.05 +
            ((0.95 *
              (((Math.sin((U + 1) * 12.9898 + (e0 + 1) * 78.233 + g * 3.1) *
                43758.5453) %
                1) +
                1)) %
              1)),
            (s[a0] = Math.min(s[a0], y + M * (0.2 + e0 * 0.2))));
        }
      for (let O = 0; O < 40; O++) {
        const q = c() * Math.PI * 2,
          j = 0.004 + c() * 0.022;
        f(v, u, v + Math.cos(q) * j, u + Math.sin(q) * j, y, 1.6, g);
      }
    };
  (m(0.36, 1.86, 1, 13, 0.75, 0, 0.8, [0.035, 0.075, 0.13, 0.21, 0.31], 0.3),
    m(-0.42, 1.66, -1, 9, 0.5, 0.55, 0.42, [0.03, 0.07, 0.12, 0.19], 1.1),
    p(0.82, 1.5, 2.6, 0.8, 0.45, 0.9, 1.1, 1));
  const x = new Uint8Array(e * l * 4);
  for (let v = 0; v < e * l; v++) {
    const u = a[v],
      g = o[v] < 2 ? o[v] : 1;
    ((x[v * 4] = Math.round(u * 255)),
      (x[v * 4 + 1] = Math.round(Math.min(1, g * u) * 255)),
      (x[v * 4 + 2] = Math.round(t[v] * 255)),
      (x[v * 4 + 3] = Math.round((s[v] < 2 ? s[v] : 1) * 255)));
  }
  const w = new Ao(x, e, l, To);
  return (
    (w.colorSpace = Jt),
    (w.flipY = !1),
    (w.minFilter = Ot),
    (w.magFilter = Ot),
    (w.generateMipmaps = !1),
    (w.wrapS = w.wrapT = _o),
    (w.needsUpdate = !0),
    (ft = w),
    w
  );
}
const yt = [
    "MASTER CAUTION",
    "ENG 1 FIRE",
    "ENG 2 FIRE",
    "TAIL ROTOR",
    "LOW ROTOR RPM",
    "XMSN OIL",
    "XMSN CHIP",
    "HYD 1",
    "GEN 1",
    "FUEL LOW",
    "ENG 1 OUT",
    "ROTOR BRAKE",
  ],
  ce = 2048,
  ye = 1024,
  te = { x: 1024, y: 0, w: 64, h: 96 },
  no = {},
  Ze = [
    ...yt,
    "IAS",
    "ALT",
    "HDG",
    "VS",
    "NR",
    "N1",
    "TQ",
    "TOT",
    "FUEL",
    "OAT",
    "ATT  HDG  ALT",
    "RA",
    "SELF TEST",
    "AIR RESCUE  AVIONICS",
    "N",
    "0.5",
    "HR",
    "SpO2",
    "NIBP",
    "NO SIGNAL",
    "ENG 1",
    "ENG 2",
    "MASTER",
    "CAUTION",
    "FIRE",
    "GS",
    "TRK",
  ],
  R0 = (e) => {
    const l = Ze.indexOf(e);
    if (l < 0) throw new Error("screens: no caption " + e);
    return l;
  };
let ht = null;
function on() {
  if (ht) return ht;
  const e = document.createElement("canvas");
  ((e.width = ce), (e.height = ye));
  const l = e.getContext("2d");
  (l.clearRect(0, 0, ce, ye),
    an(l),
    (l.fillStyle = "#ffffff"),
    (l.textAlign = "center"),
    (l.textBaseline = "middle"),
    (l.font = 'bold 84px "Consolas", "Courier New", monospace'),
    "0123456789-. "
      .split("")
      .forEach((n, c) =>
        l.fillText(n, te.x + c * te.w + te.w / 2, te.y + te.h / 2 + 4),
      ));
  const a = Ze;
  let o = 1024,
    t = 110;
  ((l.font = "bold 40px Arial, sans-serif"),
    (l.textAlign = "left"),
    (l.textBaseline = "middle"));
  for (const n of a) {
    const c = Math.ceil(l.measureText(n).width) + 12;
    (o + c > ce - 4 && ((o = 1024), (t += 52)),
      l.fillText(n, o + 6, t + 26),
      (no[n] = [o / ce, 1 - (t + 50) / ye, (o + c) / ce, 1 - t / ye]),
      (o += c + 4));
  }
  const s = new Yt(e);
  return (
    (s.colorSpace = Jt),
    (s.anisotropy = 4),
    (s.generateMipmaps = !0),
    (s.minFilter = Xt),
    (s.flipY = !0),
    (ht = s),
    s
  );
}
const oe = { cx: 900, cz: 0, half: 1100 };
function an(e) {
  const a = 1024 / (oe.half * 2),
    o = (i) => (i - (oe.cx - oe.half)) * a,
    t = (i) => (i - (oe.cz - oe.half)) * a;
  ((e.fillStyle = "#060a12"), e.fillRect(0, 0, 1024, 1024));
  let s = 7;
  const n = () => ((s = (s * 16807) % 2147483647), s / 2147483647);
  ((e.strokeStyle = "#1c2533"), (e.lineWidth = 2));
  for (let i = -20; i <= 60; i++)
    (e.beginPath(),
      e.moveTo(o(-300 + i * 60), 0),
      e.lineTo(o(-300 + i * 60 + 140), 1024),
      e.stroke(),
      e.beginPath(),
      e.moveTo(0, t(-1200 + i * 55)),
      e.lineTo(1024, t(-1200 + i * 55 - 60)),
      e.stroke());
  ((e.strokeStyle = "#4a4434"), (e.lineWidth = 5));
  for (const i of [
    [-300, -1100, 2100, 1300],
    [200, -1100, 900, 1200],
    [-300, 400, 2100, 250],
    [1300, -1100, 1500, 1200],
  ])
    (e.beginPath(),
      e.moveTo(o(i[0]), t(i[1])),
      e.lineTo(o(i[2]), t(i[3])),
      e.stroke());
  ((e.strokeStyle = "#123050"),
    (e.lineWidth = 30),
    (e.lineCap = "round"),
    e.beginPath(),
    e.moveTo(o(-200), t(-900)),
    e.bezierCurveTo(o(500), t(-500), o(700), t(-320), o(1200), t(-420)),
    e.bezierCurveTo(o(1600), t(-500), o(1800), t(-250), o(2100), t(-300)),
    e.stroke(),
    (e.strokeStyle = "#3a3c44"),
    (e.lineWidth = 6));
  for (const i of [
    [640, -470, 610, -330],
    [1150, -480, 1160, -350],
    [1700, -420, 1690, -290],
  ])
    (e.beginPath(),
      e.moveTo(o(i[0]), t(i[1])),
      e.lineTo(o(i[2]), t(i[3])),
      e.stroke());
  ((e.fillStyle = "#0f2a17"),
    e.fillRect(o(350), t(30), 180 * a, 175 * a),
    (e.strokeStyle = "#2e6b3e"),
    (e.lineWidth = 2),
    e.strokeRect(o(350), t(30), 180 * a, 175 * a));
  for (let i = 0; i < 260; i++) {
    const d = -280 + n() * 2350,
      f = -1050 + n() * 2150;
    if (d > 330 && d < 550 && f > 10 && f < 225) continue;
    const p = 14 + n() * 40,
      m = 14 + n() * 40;
    ((e.fillStyle = n() < 0.12 ? "#3a1a0c" : "#111a26"),
      e.fillRect(o(d), t(f), p * a, m * a));
  }
  ((e.strokeStyle = "#7a5aa8"),
    (e.lineWidth = 4),
    e.setLineDash([10, 6]),
    e.beginPath(),
    e.moveTo(o(-150), t(380)),
    e.lineTo(o(6), t(219)),
    e.lineTo(o(452), t(219)),
    e.lineTo(o(1e3), t(600)),
    e.stroke(),
    e.setLineDash([]));
  const c = (i, d, f) => {
    ((e.fillStyle = "#c8b8e8"),
      e.beginPath(),
      e.arc(o(i), t(d), 6, 0, 7),
      e.fill(),
      (e.font = "bold 15px Arial"),
      (e.fillStyle = "#b8a8d8"),
      (e.textAlign = "left"),
      e.fillText(f, o(i) + 9, t(d) + 5));
  };
  (c(10, 219, "ASHWOOD"),
    c(420, 222, "PARKGATE"),
    c(-140, 372, "MILLBANK"),
    c(980, 588, "ST. AGNES"),
    (e.strokeStyle = "#38c0e0"),
    (e.lineWidth = 3),
    e.beginPath(),
    e.arc(o(1520), t(-760), 11, 0, 7),
    e.stroke(),
    (e.font = "bold 16px Arial"),
    (e.fillStyle = "#38c0e0"),
    (e.textAlign = "center"),
    e.fillText("H", o(1520), t(-760) + 6),
    e.fillText("ST. AGNES HOSP", o(1520), t(-760) - 18),
    (e.fillStyle = "#e0a020"),
    e.fillRect(o(452) - 4, t(92) - 4, 8, 8),
    (e.font = "bold 13px Arial"),
    e.fillText("EVAC PT", o(452), t(92) - 10),
    (e.strokeStyle = "#d040c0"),
    (e.lineWidth = 3),
    e.beginPath(),
    e.moveTo(o(452), t(92)),
    e.lineTo(o(900), t(-300)),
    e.lineTo(o(1520), t(-760)),
    e.stroke());
}
const nn = `
attribute float aScr;
varying vec2 vUv;
varying float vScr;
void main() { vUv = uv; vScr = aScr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  sn = `
precision highp float;
varying vec2 vUv;
varying float vScr;
uniform sampler2D tAtlas;
uniform float uTime;
uniform float uPower;          // 0 dark .. 1 on
uniform float uBoot;           // seconds since the power came on
uniform vec4 uAtt;             // pitch, roll (rad, + nose up, + right wing down), heading (rad), turn rate
uniform vec4 uAir;             // IAS kt, ALT ft, VS ft/min, radar alt ft
uniform vec4 uEng;             // NR %, N2 %, TQ1 %, TQ2 %
uniform vec4 uEng2;            // N1-1 %, N1-2 %, TOT1 C, TOT2 C
uniform vec4 uMisc;            // fuel kg, OAT, glitch, brightness
uniform vec4 uMap;             // x, z (world m), heading (rad), range (m, the outer ring)
uniform float uWarn[12];       // each lamp's light (0..1, flashing already in)
uniform float uMC;             // the master caution lamps
uniform vec2 uFire;            // FIRE 1 / FIRE 2 lamps
uniform vec4 uSmall;           // small amber lamps (overhead)
uniform vec4 uCapU[${Ze.length}];        // caption rects: [u0, v0, u1, v1]
vec2 gDx, gDy;                 // the screen uv's footprint (texture lods)
float aspect;

float sAtl(vec2 a, vec2 scale) { return textureGrad(tAtlas, a, gDx * scale, gDy * scale).a; }
vec4 sAtlC(vec2 a, vec2 scale) { return textureGrad(tAtlas, a, gDx * scale, gDy * scale); }
// a digit d (0..12) in a cell: q 0..1
float glyph(vec2 q, float d, vec2 cellUv) {
  if (q.x < 0.0 || q.x > 1.0 || q.y < 0.0 || q.y > 1.0) return 0.0;
  vec2 a = vec2((${te.x.toFixed(1)} + (d + q.x) * ${te.w.toFixed(1)}) / ${ce.toFixed(1)}, 1.0 - (${te.y.toFixed(1)} + (1.0 - q.y) * ${te.h.toFixed(1)}) / ${ye.toFixed(1)});
  return sAtl(a, vec2(${te.w.toFixed(1)} / ${ce.toFixed(1)}, ${te.h.toFixed(1)} / ${ye.toFixed(1)}) / cellUv);
}
// a whole number, right aligned in nd cells from org (p space), cell size cs; lead: show leading zeros
float num(vec2 p, vec2 org, vec2 cs, float value, float nd, float lead) {
  vec2 q = (p - org) / cs;
  if (q.x < 0.0 || q.y < 0.0 || q.y > 1.0 || q.x >= nd) return 0.0;
  float i = floor(q.x), place = nd - 1.0 - i;
  float v = floor(abs(value) / pow(10.0, place) + 1e-4);
  if (lead < 0.5 && v < 1.0 && place > 0.0) return 0.0;
  return glyph(vec2(fract(q.x), q.y), mod(v, 10.0), cs);
}
// a caption (index into uCapU) stretched over the box org..org+size (p space), keeping its aspect by height
float cap(vec2 p, vec2 org, float h, int id) {
  vec4 r = uCapU[id];
  float w = h * (r.z - r.x) / (r.w - r.y) * ${(ce / ye).toFixed(4)};
  vec2 q = (p - org) / vec2(w, h);
  if (q.x < 0.0 || q.x > 1.0 || q.y < 0.0 || q.y > 1.0) return 0.0;
  return sAtl(mix(r.xy, r.zw, q), (r.zw - r.xy) / vec2(w, h));
}
float capC(vec2 p, vec2 ctr, float h, int id) { vec4 r = uCapU[id]; float w = h * (r.z - r.x) / (r.w - r.y) * ${(ce / ye).toFixed(4)}; return cap(p, ctr - vec2(w * 0.5, h * 0.5), h, id); }
// centred, as big as fits in maxW x maxH
float capFit(vec2 p, vec2 ctr, float maxW, float maxH, int id) { vec4 r = uCapU[id]; float asp = (r.z - r.x) / (r.w - r.y) * ${(ce / ye).toFixed(4)}; float h = min(maxH, maxW / asp); return capC(p, ctr, h, id); }
float box(vec2 p, vec2 c, vec2 hs) { vec2 d = abs(p - c) - hs; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
float stroke(float d, float w) { float f = fwidth(d) + 1e-5; return 1.0 - smoothstep(w * 0.5 - f, w * 0.5 + f, abs(d)); }
float fill(float d) { float f = fwidth(d) + 1e-5; return 1.0 - smoothstep(-f, f, d); }
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, s, -s, c); }

// ---------------------------------------------------------------------------------------------- PFD
vec3 pfd(vec2 p) {
  float pitch = uAtt.x, roll = uAtt.y, hdg = uAtt.z;
  const float PS = 0.0115 * 57.2958;            // units per radian of pitch
  vec2 q = rot(roll) * (p - vec2(0.0, 0.05));
  float hz = q.y + pitch * PS;
  vec3 sky = mix(vec3(0.08, 0.34, 0.85), vec3(0.03, 0.14, 0.48), clamp(hz * 2.0, 0.0, 1.0));
  vec3 gnd = mix(vec3(0.46, 0.25, 0.08), vec3(0.24, 0.12, 0.035), clamp(-hz * 2.0, 0.0, 1.0));
  vec3 col = hz > 0.0 ? sky : gnd;
  col = mix(col, vec3(1.0), stroke(hz, 0.006));
  // the pitch ladder (every 5 degrees; numbers on the 10s)
  float win = step(abs(p.x), 0.26) * step(abs(p.y - 0.06), 0.24);
  for (int i = -6; i <= 6; i++) {
    if (i == 0) continue;
    float deg = float(i) * 5.0;
    float ly = (deg / 57.2958 - pitch) * PS;                 // the line's height in q
    bool ten = (i / 2) * 2 == i;
    float hw = ten ? 0.085 : 0.04;
    float l = stroke(q.y - ly, 0.005) * step(abs(q.x), hw) * win;
    col = mix(col, vec3(1.0), l);
    if (ten) col = mix(col, vec3(1.0), (num(q, vec2(hw + 0.01, ly - 0.013), vec2(0.016, 0.026), abs(deg), 2.0, 0.0) + num(q, vec2(-hw - 0.042, ly - 0.013), vec2(0.016, 0.026), abs(deg), 2.0, 0.0)) * win);
  }
  // the roll scale (fixed) and the pointer (with the sky)
  vec2 rc = p - vec2(0.0, 0.05);
  float rr = length(rc), ra = atan(rc.x, rc.y);
  float arc = stroke(rr - 0.3, 0.005) * step(abs(ra), 1.06);
  float ticks = 0.0;
  for (int i = -3; i <= 3; i++) { float a = float(i) * 0.1745; ticks = max(ticks, stroke(ra - a, 0.012) * step(0.3, rr) * step(rr, 0.33)); }
  for (int s = -1; s <= 1; s += 2) { float a = float(s) * 0.785; ticks = max(ticks, stroke(ra - a, 0.012) * step(0.3, rr) * step(rr, 0.325)); a = float(s) * 1.047; ticks = max(ticks, stroke(ra - a, 0.012) * step(0.3, rr) * step(rr, 0.335)); }
  col = mix(col, vec3(1.0), max(arc, ticks));
  vec2 pr = rot(-roll) * rc;
  float tri = fill(max(abs(pr.x) * 1.6 + (pr.y - 0.29), 0.27 - pr.y));
  col = mix(col, vec3(1.0, 0.95, 0.6), tri);
  // the aircraft's symbol (fixed): two bars and a square
  vec2 a = p - vec2(0.0, 0.05);
  float sym = fill(box(a, vec2(-0.11, 0.0), vec2(0.05, 0.007))) + fill(box(a, vec2(0.11, 0.0), vec2(0.05, 0.007)));
  sym += fill(box(a, vec2(-0.065, -0.015), vec2(0.007, 0.022))) + fill(box(a, vec2(0.065, -0.015), vec2(0.007, 0.022)));
  sym += fill(box(a, vec2(0.0), vec2(0.009)));
  col = mix(col, vec3(1.0, 0.85, 0.1), clamp(sym, 0.0, 1.0));
  // the speed tape (left) and the altitude tape (right): dark strips, ticks scrolling, readout boxes
  float ias = uAir.x, alt = uAir.y;
  if (p.x < -0.27) {
    col = mix(col, vec3(0.06, 0.07, 0.09), 0.72);
    float ty = p.y - 0.05;
    float v = ias + ty / 0.0045;
    float t10 = abs(fract(v / 10.0 + 0.5) - 0.5) * 10.0 * 0.0045;
    col = mix(col, vec3(1.0), stroke(t10, 0.004) * step(-0.3, p.x) * step(v, 400.0) * step(-1.0, v));
    float vr = floor(v / 20.0 + 0.5) * 20.0, yr = (vr - ias) * 0.0045 + 0.05;
    if (vr >= 0.0) col = mix(col, vec3(1.0), num(p, vec2(-0.395, yr - 0.013), vec2(0.016, 0.026), vr, 3.0, 0.0));
    float bx = box(p, vec2(-0.335, 0.05), vec2(0.06, 0.028));
    col = mix(col, vec3(0.0), fill(bx)); col = mix(col, vec3(1.0), stroke(bx, 0.004));
    col = mix(col, vec3(1.0), num(p, vec2(-0.385, 0.05 - 0.02), vec2(0.024, 0.04), ias, 3.0, 0.0));
    col = mix(col, vec3(0.7, 0.9, 1.0), capC(p, vec2(-0.335, 0.39), 0.03, ${R0("IAS")}));
  }
  if (p.x > 0.27) {
    col = mix(col, vec3(0.06, 0.07, 0.09), 0.72);
    float ty = p.y - 0.05;
    float h = alt + ty / 0.00045;
    float t100 = abs(fract(h / 100.0 + 0.5) - 0.5) * 100.0 * 0.00045;
    col = mix(col, vec3(1.0), stroke(t100, 0.004) * step(p.x, 0.3));
    float hr = floor(h / 200.0 + 0.5) * 200.0, yr = (hr - alt) * 0.00045 + 0.05;
    if (hr >= 0.0) col = mix(col, vec3(1.0), num(p, vec2(0.305, yr - 0.012), vec2(0.0145, 0.024), hr, 4.0, 0.0));
    float bx = box(p, vec2(0.345, 0.05), vec2(0.062, 0.028));
    col = mix(col, vec3(0.0), fill(bx)); col = mix(col, vec3(1.0), stroke(bx, 0.004));
    col = mix(col, vec3(1.0), num(p, vec2(0.287, 0.05 - 0.018), vec2(0.0225, 0.036), alt, 5.0, 0.0));
    col = mix(col, vec3(0.7, 0.9, 1.0), capC(p, vec2(0.345, 0.39), 0.03, ${R0("ALT")}));
    // the vertical speed: a pointer on the edge
    float vs = clamp(uAir.z / 2000.0, -1.0, 1.0);
    col = mix(col, vec3(1.0), fill(box(p, vec2(0.398, 0.05 + vs * 0.2), vec2(0.006, 0.006))));
  }
  // the heading: a strip at the bottom
  if (p.y < -0.33) {
    col = mix(col, vec3(0.05, 0.06, 0.08), 0.8);
    float hd = hdg * 57.2958 + p.x / 0.0042;
    float t5 = abs(fract(hd / 5.0 + 0.5) - 0.5) * 5.0 * 0.0042;
    float big = step(abs(fract(hd / 10.0 + 0.5) - 0.5), 0.26);
    col = mix(col, vec3(1.0), stroke(t5, 0.0035) * step(-0.38 - big * 0.02, p.y) * step(p.y, -0.345));
    float hr = floor(hd / 30.0 + 0.5) * 30.0, xr = (hr - hdg * 57.2958) * 0.0042;
    float hn = mod(hr, 360.0); if (hn < 0.0) hn += 360.0;
    col = mix(col, vec3(1.0), num(p, vec2(xr - 0.021, -0.44), vec2(0.014, 0.026), hn / 10.0, 2.0, 1.0));
    float bx = box(p, vec2(0.0, -0.37), vec2(0.045, 0.024));
    col = mix(col, vec3(0.0), fill(bx)); col = mix(col, vec3(1.0), stroke(bx, 0.004));
    float hh = mod(hdg * 57.2958, 360.0); if (hh < 0.0) hh += 360.0;
    col = mix(col, vec3(1.0), num(p, vec2(-0.03, -0.385), vec2(0.02, 0.03), hh, 3.0, 1.0));
  }
  // the modes (green) and the radar altitude
  col = mix(col, vec3(0.2, 0.95, 0.35), capC(p, vec2(0.0, 0.445), 0.034, ${R0("ATT  HDG  ALT")}));
  col = mix(col, vec3(0.2, 0.95, 0.35), num(p, vec2(0.12, -0.29), vec2(0.015, 0.026), uAir.w, 4.0, 0.0) * step(uAir.w, 2500.0));
  return col;
}

// ---------------------------------------------------------------------------------------------- MAP
vec3 mapPage(vec2 p) {
  vec2 c = p - vec2(0.0, -0.2);
  float range = uMap.w;
  // heading up: the world turns under the symbol
  vec2 w = rot(-uMap.z) * (c * vec2(1.0, 1.0)) * (range / 0.5);
  vec2 world = uMap.xy + vec2(w.x, -w.y);
  vec2 mu = (world - vec2(${(oe.cx - oe.half).toFixed(1)}, ${(oe.cz - oe.half).toFixed(1)})) / ${(oe.half * 2).toFixed(1)};
  vec3 col = vec3(0.01, 0.015, 0.03);
  if (mu.x > 0.0 && mu.x < 1.0 && mu.y > 0.0 && mu.y < 1.0) {
    vec2 a = vec2(mu.x * 0.5, 1.0 - mu.y);
    col = sAtlC(a, vec2(0.5, 1.0) * (range / 0.5) / ${(oe.half * 2).toFixed(1)}).rgb;
  }
  // range rings, the track line, the symbol
  float r = length(c);
  col = mix(col, vec3(0.75), stroke(r - 0.25, 0.004) * 0.6 + stroke(r - 0.5, 0.004) * 0.6);
  col = mix(col, vec3(0.75), capC(p, vec2(0.2, -0.2 + 0.2), 0.026, ${R0("0.5")}));
  col = mix(col, vec3(0.9), stroke(c.x, 0.004) * step(0.02, c.y) * step(c.y, 0.55) * 0.5);
  float heli = fill(box(c, vec2(0.0, 0.0), vec2(0.006, 0.035))) + fill(box(c, vec2(0.0, 0.012), vec2(0.03, 0.006))) + fill(box(c, vec2(0.0, -0.03), vec2(0.014, 0.005)));
  col = mix(col, vec3(1.0, 0.95, 0.85), clamp(heli, 0.0, 1.0));
  // the top: heading readout and a north pointer on the ring
  float hh = mod(uMap.z * 57.2958, 360.0); if (hh < 0.0) hh += 360.0;
  col = mix(col, vec3(0.0), fill(box(p, vec2(0.0, 0.43), vec2(0.08, 0.035))));
  col = mix(col, vec3(1.0), num(p, vec2(-0.04, 0.41), vec2(0.026, 0.04), hh, 3.0, 1.0));
  vec2 np = vec2(0.0, -0.2) + vec2(sin(uMap.z), cos(uMap.z)) * 0.5;
  col = mix(col, vec3(0.4, 0.85, 1.0), capC(p, np, 0.04, ${R0("N")}));
  col = mix(col, vec3(0.2, 0.95, 0.35), capC(p, vec2(-0.3, 0.44), 0.03, ${R0("GS")}));
  col = mix(col, vec3(0.2, 0.95, 0.35), num(p, vec2(-0.24, 0.425), vec2(0.016, 0.03), uAir.x * 0.98, 3.0, 0.0));
  return col;
}

// ---------------------------------------------------------------------------------------------- ENGINE
vec3 engPage(vec2 p) {
  vec3 col = vec3(0.012, 0.014, 0.02);
  float t = uTime;
  // the triple tach (top): an arc 30 .. 120 %, green 97 .. 104, red at 106; needles NR (white) and N2 (amber)
  vec2 c = p - vec2(0.0, 0.17);
  float r = length(c), a = atan(c.x, c.y);
  float gA = -2.3 + 4.6 * (97.0 - 30.0) / 90.0, gB = -2.3 + 4.6 * (104.0 - 30.0) / 90.0, rd = -2.3 + 4.6 * (106.0 - 30.0) / 90.0;
  float ring = step(abs(r - 0.2), 0.012) * step(-2.3, a) * step(a, 2.3);
  col = mix(col, vec3(0.45), ring * 0.5);
  col = mix(col, vec3(0.1, 0.85, 0.25), ring * step(gA, a) * step(a, gB));
  col = mix(col, vec3(0.95, 0.1, 0.05), step(abs(r - 0.2), 0.02) * stroke(a - rd, 0.03));
  for (int i = 0; i <= 9; i++) { float ta = -2.3 + 4.6 * float(i) / 9.0; col = mix(col, vec3(0.85), stroke(a - ta, 0.022) * step(0.17, r) * step(r, 0.185)); }
  float nr = clamp(uEng.x, 0.0, 125.0), n2 = clamp(uEng.y, 0.0, 125.0);
  float an = -2.3 + 4.6 * (nr - 30.0) / 90.0, a2 = -2.3 + 4.6 * (n2 - 30.0) / 90.0;
  vec2 d1 = rot(an) * c, d2 = rot(a2) * c;
  float needle1 = fill(box(d1, vec2(0.0, 0.1), vec2(0.006, 0.1)));
  float needle2 = fill(box(d2, vec2(0.0, 0.095), vec2(0.004, 0.08)));
  bool lowRpm = uEng.x < 95.0 && uEng.x > 5.0;
  col = mix(col, vec3(1.0, 0.75, 0.15), needle2);
  col = mix(col, lowRpm ? vec3(1.0, 0.15, 0.08) : vec3(1.0), needle1);
  col = mix(col, vec3(0.5), fill(r - 0.018));
  float blink = step(0.5, fract(t * 2.0));
  vec3 nrc = lowRpm ? mix(vec3(1.0, 0.15, 0.08), vec3(0.3, 0.02, 0.0), blink) : vec3(1.0);
  col = mix(col, nrc, num(p, vec2(-0.075, 0.05), vec2(0.04, 0.06), nr, 3.0, 0.0));
  col = mix(col, vec3(0.8), capC(p, vec2(0.13, 0.08), 0.03, ${R0("NR")}));
  // torque and temperature bars, engine 1 and 2
  for (int e = 0; e < 2; e++) {
    float x0 = e == 0 ? -0.28 : 0.04;
    float tq = e == 0 ? uEng.z : uEng.w;
    float tot = e == 0 ? uEng2.z : uEng2.w;
    float n1 = e == 0 ? uEng2.x : uEng2.y;
    // TQ bar
    float bx = box(p, vec2(x0 + 0.05, -0.12), vec2(0.03, 0.12));
    col = mix(col, vec3(0.5), stroke(bx, 0.003));
    float fillH = clamp(tq / 120.0, 0.0, 1.0);
    float inb = step(p.y, -0.24 + fillH * 0.24) * fill(box(p, vec2(x0 + 0.05, -0.12), vec2(0.026, 0.118)));
    col = mix(col, tq > 100.0 ? vec3(1.0, 0.7, 0.1) : vec3(0.15, 0.85, 0.3), inb);
    col = mix(col, vec3(1.0), num(p, vec2(x0 + 0.005, 0.015), vec2(0.022, 0.035), tq, 3.0, 0.0));
    // TOT bar
    float bt = box(p, vec2(x0 + 0.17, -0.12), vec2(0.03, 0.12));
    col = mix(col, vec3(0.5), stroke(bt, 0.003));
    float fh = clamp(tot / 1000.0, 0.0, 1.0);
    col = mix(col, tot > 850.0 ? vec3(1.0, 0.15, 0.05) : vec3(0.15, 0.85, 0.3), step(p.y, -0.24 + fh * 0.24) * fill(box(p, vec2(x0 + 0.17, -0.12), vec2(0.026, 0.118))));
    col = mix(col, vec3(1.0), num(p, vec2(x0 + 0.115, 0.015), vec2(0.02, 0.035), tot, 3.0, 0.0));
    col = mix(col, vec3(0.7, 0.9, 1.0), num(p, vec2(x0 + 0.02, -0.31), vec2(0.022, 0.035), n1, 3.0, 0.0));
    col = mix(col, vec3(0.7), capC(p, vec2(x0 + 0.11, -0.36), 0.026, e == 0 ? ${R0("ENG 1")} : ${R0("ENG 2")}));
  }
  col = mix(col, vec3(0.7), capC(p, vec2(-0.23, 0.11), 0.022, ${R0("TQ")}) + capC(p, vec2(-0.11, 0.11), 0.022, ${R0("TOT")}) + capC(p, vec2(0.09, 0.11), 0.022, ${R0("TQ")}) + capC(p, vec2(0.21, 0.11), 0.022, ${R0("TOT")}));
  // fuel and OAT
  col = mix(col, vec3(0.7), capC(p, vec2(-0.26, -0.43), 0.026, ${R0("FUEL")}));
  col = mix(col, vec3(1.0), num(p, vec2(-0.2, -0.445), vec2(0.02, 0.032), uMisc.x, 3.0, 0.0));
  col = mix(col, vec3(0.7), capC(p, vec2(0.12, -0.43), 0.026, ${R0("OAT")}));
  col = mix(col, vec3(1.0), num(p, vec2(0.17, -0.445), vec2(0.02, 0.032), uMisc.y, 2.0, 0.0));
  // alerts across the top: ENG 1 FIRE (red box, flashing), LOW ROTOR RPM
  if (uWarn[1] > 0.0 || uWarn[4] > 0.0) {
    float f = uWarn[1] > 0.0 ? 1.0 : 4.0;
    float bxA = box(p, vec2(0.0, 0.44), vec2(0.3, 0.04));
    col = mix(col, mix(vec3(0.7, 0.03, 0.02), vec3(0.15, 0.0, 0.0), blink), fill(bxA));
    col = mix(col, vec3(1.0), capFit(p, vec2(0.0, 0.44), 0.56, 0.05, int(f)));
  }
  return col;
}

// ---------------------------------------------------------------------------------------------- the warning panel: 6 x 2 lamps
vec3 warnPanel(vec2 uv) {
  vec2 g = uv * vec2(6.0, 2.0);
  vec2 cell = floor(g), f = fract(g);
  int i = int(cell.x + (1.0 - cell.y) * 6.0);
  float on = 0.0; for (int k = 0; k < 12; k++) if (k == i) on = uWarn[k];
  bool red = i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 10;
  vec3 lit = red ? vec3(3.2, 0.12, 0.05) : vec3(3.0, 1.6, 0.12);
  vec3 dim = red ? vec3(0.05, 0.004, 0.003) : vec3(0.05, 0.03, 0.004);
  float frame = step(0.06, f.x) * step(f.x, 0.94) * step(0.1, f.y) * step(f.y, 0.9);
  vec3 col = vec3(0.01) + frame * mix(dim, lit * 0.35, on);
  // the caption: dark text on a lit lamp, faint grey on an unlit one
  vec2 lp = (f - 0.5) * vec2(2.4, 1.0);
  float tx = capFit(lp, vec2(0.0), 2.05, 0.42, i) * frame;
  col = mix(col, on > 0.5 ? lit * 1.1 : vec3(0.12, 0.12, 0.11), tx);
  return col;
}

void main() {
  gDx = dFdx(vUv); gDy = dFdy(vUv);
  int id = int(vScr + 0.5);
  vec3 col = vec3(0.0);
  float powerK = uPower;
  float bright = uMisc.w;
  // ---- the displays: boot (a self test), then the pages
  if (id <= 3) {
    aspect = 0.81;
    vec2 p = (vUv - 0.5) * vec2(aspect, 1.0);
    if (id == 0 || id == 3) col = pfd(p);
    else if (id == 1) col = mapPage(p);
    else col = engPage(p);
    float boot = clamp((uBoot - 0.6 - float(id) * 0.25) / 1.2, 0.0, 1.0);
    vec3 test = vec3(0.02, 0.03, 0.06) + vec3(0.5, 0.8, 1.0) * capFit(p, vec2(0.0, 0.03), 0.6, 0.04, ${R0("SELF TEST")}) + vec3(0.6) * capFit(p, vec2(0.0, -0.05), 0.62, 0.026, ${R0("AIR RESCUE  AVIONICS")});
    test += vec3(0.08) * step(fract((vUv.y + uBoot * 0.7) * 3.0), 0.5) * (1.0 - boot) * step(uBoot, 0.9);
    col = mix(test, col, smoothstep(0.0, 1.0, boot));
    // damage: the picture tears and rolls now and then
    float gl = uMisc.z;
    if (gl > 0.0) {
      float band = step(0.97 - gl * 0.2, fract(sin(floor(vUv.y * 30.0 + uTime * 13.0) * 91.7 + float(id)) * 437.5));
      col = mix(col, col.gbr * 1.4 + vec3(0.1, 0.1, 0.12), band * gl);
      col *= 1.0 - gl * 0.4 * step(0.8, fract(uTime * 7.3 + float(id) * 0.37));
    }
    // the screen itself: a slight vignette, a pixel grid you see close up
    float vg = smoothstep(0.75, 0.35, length((vUv - 0.5) * vec2(0.9, 1.0)));
    col *= 0.72 + 0.28 * vg;
    vec2 px = fract(vUv * vec2(480.0, 640.0));
    col *= 0.9 + 0.1 * step(0.12, px.x) * step(0.12, px.y);
    col *= bright * powerK;
    col += vec3(0.006, 0.008, 0.012) * powerK;           // (the backlight bleeding through black)
  } else if (id == 4) {
    col = warnPanel(vUv) * (0.25 + 0.75 * powerK);
  } else if (id == 5) {
    vec2 f = vUv;
    float frame = step(0.08, f.x) * step(f.x, 0.92) * step(0.08, f.y) * step(f.y, 0.92);
    vec3 lit = vec3(3.4, 1.8, 0.15);
    col = vec3(0.02) + frame * mix(vec3(0.07, 0.045, 0.005), lit * 0.3, uMC);
    float tx = capFit(f, vec2(0.5, 0.66), 0.8, 0.22, ${R0("MASTER")}) + capFit(f, vec2(0.5, 0.36), 0.8, 0.22, ${R0("CAUTION")});
    col = mix(col, uMC > 0.5 ? lit : vec3(0.2, 0.15, 0.06), tx * frame);
  } else if (id == 6) {
    float which = step(0.5, vUv.x);
    vec2 f = vec2(fract(vUv.x * 2.0), vUv.y);
    float on = which < 0.5 ? uFire.x : uFire.y;
    float frame = step(0.1, f.x) * step(f.x, 0.9) * step(0.1, f.y) * step(f.y, 0.9);
    vec3 lit = vec3(3.6, 0.15, 0.06);
    col = vec3(0.02) + frame * mix(vec3(0.08, 0.008, 0.005), lit * 0.3, on);
    float tx = capFit(f, vec2(0.5, 0.66), 0.7, 0.24, ${R0("FIRE")}) + capFit(f, vec2(0.5, 0.36), 0.75, 0.22, which < 0.5 ? ${R0("ENG 1")} : ${R0("ENG 2")});
    col = mix(col, on > 0.5 ? lit : vec3(0.25, 0.06, 0.05), tx * frame);
  } else if (id == 7) {
    // a radio's window: two frequencies in amber seven-segment-ish digits
    vec2 f = vUv;
    col = vec3(0.012, 0.006, 0.0);
    float d = num(f, vec2(0.04, 0.22), vec2(0.075, 0.56), 1215.0, 4.0, 1.0) + num(f, vec2(0.54, 0.22), vec2(0.075, 0.56), 1187.0, 4.0, 1.0);
    d += fill(box(f, vec2(0.268, 0.25), vec2(0.008, 0.03))) + fill(box(f, vec2(0.768, 0.25), vec2(0.008, 0.03)));
    col = mix(col, vec3(2.4, 0.9, 0.06), d * powerK);
    col += vec3(0.04, 0.012, 0.0) * powerK;
  } else if (id == 8) {
    // the patient monitor: a dead trace, dashes for every reading
    vec2 f = vUv;
    col = vec3(0.004, 0.008, 0.006);
    float x = fract(f.x - uTime * 0.12);
    float tr = stroke(f.y - 0.62 - 0.004 * sin(x * 80.0 + uTime * 3.0) * step(0.85, fract(uTime * 0.4)), 0.012) * step(0.04, f.x) * step(f.x, 0.7);
    col = mix(col, vec3(0.2, 1.6, 0.4), tr);
    col = mix(col, vec3(0.2, 1.4, 0.4), capFit(f, vec2(0.86, 0.78), 0.2, 0.1, ${R0("HR")}) + capFit(f, vec2(0.86, 0.5), 0.2, 0.1, ${R0("SpO2")}));
    col = mix(col, vec3(1.6, 0.25, 0.15), capFit(f, vec2(0.36, 0.25), 0.6, 0.12, ${R0("NO SIGNAL")}) * step(0.5, fract(uTime * 0.7)));
    col = mix(col, vec3(0.3, 0.8, 1.6), capFit(f, vec2(0.86, 0.25), 0.2, 0.09, ${R0("NIBP")}));
    col *= powerK;
  } else if (id == 9) {
    float which = floor(vUv.x * 4.0);
    float on = which < 0.5 ? uSmall.x : which < 1.5 ? uSmall.y : which < 2.5 ? uSmall.z : uSmall.w;
    vec2 f = vec2(fract(vUv.x * 4.0), vUv.y);
    float dot1 = fill(length(f - 0.5) - 0.32);
    col = mix(vec3(0.02), mix(vec3(0.08, 0.05, 0.005), vec3(3.0, 1.5, 0.12), on), dot1);
  }
  gl_FragColor = vec4(col, 1.0);
}`;
function rn() {
  const e = on(),
    l = Ze.map((t) => {
      const s = no[t] || [0, 0, 0, 0];
      return new I0(s[0], s[1], s[2], s[3]);
    }),
    a = {
      tAtlas: { value: e },
      uTime: { value: 0 },
      uPower: { value: 0 },
      uBoot: { value: 0 },
      uAtt: { value: new I0() },
      uAir: { value: new I0(0, 0, 0, 0) },
      uEng: { value: new I0() },
      uEng2: { value: new I0() },
      uMisc: { value: new I0(410, 9, 0, 1) },
      uMap: { value: new I0(452, 92, -Math.PI / 2, 900) },
      uWarn: { value: new Array(12).fill(0) },
      uMC: { value: 0 },
      uFire: { value: new Lo() },
      uSmall: { value: new I0() },
      uCapU: { value: l },
    },
    o = new ke({
      vertexShader: nn,
      fragmentShader: sn,
      uniforms: a,
      toneMapped: !1,
      fog: !1,
    });
  return ((o.userData.U = a), o);
}
function ln(e, l) {
  const a = new K0();
  return (
    a.setAttribute(
      "position",
      new L0(
        e.flatMap((o) => [o.x, o.y, o.z]),
        3,
      ),
    ),
    a.setAttribute("uv", new L0([0, 0, 1, 0, 1, 1, 0, 1], 2)),
    a.setAttribute("aScr", new L0([l, l, l, l], 1)),
    a.setIndex([0, 1, 2, 0, 2, 3]),
    a
  );
}
const cn = `
uniform vec4 uDroop;          // x droop at the tip (m), y coning at the tip (m), z R, w r0
varying vec2 vPol;            // (r, theta)
`,
  Wt = `
{
  float hr = length(position.xz);
  float hu = clamp((hr - uDroop.w) / (uDroop.z - uDroop.w), 0.0, 1.0);
  transformed.y += -uDroop.x * hu * hu + uDroop.y * hu;
  vPol = vec2(hr, atan(position.x, position.z));
}
`,
  fn = `
varying vec2 vPol;
vec3 hdLit = vec3(0.0);
uniform float uPhase;         // the visible phase of blade 0 (rad)
uniform float uSweep;         // the blur's length behind each ghost (rad)
uniform float uGhost;         // the ghosts' strength
uniform float uDisc;          // the even disc's strength
uniform float uAlpha;         // the whole disc
uniform float uNB;            // blades
uniform vec4 uBlade;          // x chord (m), y R, z the tip band's inner radius, w the tip's chord factor
uniform vec3 uTipCol;         // the tip band's colour (linear)
uniform vec3 uBladeCol;
uniform float uStripes;       // 1: the tail rotor's red / white bands toward the tips
uniform vec3 uLit;            // light from under the disc (the top beacon's red flash, a strobe): added on the blades
`,
  hn = `
{
  float r = vPol.x, th = vPol.y;
  float tipK = smoothstep(uBlade.y - 0.4, uBlade.y, r);
  float chordR = uBlade.x * mix(1.0, uBlade.w, tipK);
  float w = 0.5 * chordR / max(r, 0.05);
  float per = 6.2831853 / uNB;
  float ghost = 0.0;
  for (int k = 0; k < 4; k++) {
    if (float(k) >= uNB) break;
    float d = mod(th - uPhase - float(k) * per + 3.1415927, 6.2831853) - 3.1415927;
    float bladeK = 1.0 - smoothstep(w * 0.7, w * 1.15, abs(d));
    float behind = -d - w;                                  // (> 0: behind the blade, in the turn's wake)
    float trail = behind > 0.0 ? exp(-behind / max(uSweep, 0.002) * 2.2) * step(behind, uSweep * 2.5) : 0.0;
    ghost = max(ghost, max(bladeK, trail * 0.8));
  }
  // the time-average: what a disc really looks like (nB x chord over the circumference), denser near the hub
  float avg = clamp(uNB * chordR / (6.2831853 * max(r, 0.2)), 0.0, 1.0);
  float a = uGhost * ghost + uDisc * avg * 1.7;
  // the disc's edges: the hub (the blades' roots) and the tips fade softly
  a *= smoothstep(uBlade.y + 0.02, uBlade.y - 0.06, r);
  vec3 col = uBladeCol;
  float band = smoothstep(uBlade.z - 0.01, uBlade.z + 0.01, r);
  if (uStripes > 0.5) { float st = step(0.5, fract((r - uBlade.z) / 0.16)); col = mix(col, mix(vec3(0.55, 0.02, 0.02), vec3(0.75, 0.75, 0.72), st), band); }
  else col = mix(col, uTipCol, band);
  diffuseColor.rgb = col;
  diffuseColor.a = clamp(a, 0.0, 0.92) * uAlpha;
  hdLit = uLit * 0.55 / (0.12 + r * r);                  // (a lamp just under the hub: by the inverse square)
  if (diffuseColor.a < 0.002) discard;
}
`;
function Kt({
  R: e,
  r0: l,
  chord: a,
  tipChord: o = 0.62,
  nb: t,
  tipBand: s,
  tipCol: n = [0.75, 0.48, 0.02],
  bladeCol: c = [0.085, 0.088, 0.093],
  stripes: i = !1,
  axis: d = "y",
  name: f = "heli_disc",
}) {
  const p = new Oo(l, e + 0.03, 128, 24);
  d === "y" && p.rotateX(-Math.PI / 2);
  const m = {
      uDroop: { value: new I0(0, 0, e, l) },
      uPhase: { value: 0 },
      uSweep: { value: 0.1 },
      uGhost: { value: 1 },
      uDisc: { value: 0 },
      uAlpha: { value: 0 },
      uNB: { value: t },
      uBlade: { value: new I0(a, e, s, o) },
      uTipCol: { value: new ee(...n) },
      uBladeCol: { value: new ee(...c) },
      uStripes: { value: i ? 1 : 0 },
      uLit: { value: new ee(0, 0, 0) },
    },
    x = new Io({
      color: 16777215,
      roughness: 0.55,
      metalness: 0.1,
      transparent: !0,
      depthWrite: !1,
      side: wt,
    });
  ((x.forceSinglePass = !0),
    (x.onBeforeCompile = (g) => {
      (Object.assign(g.uniforms, m),
        (g.vertexShader = g.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
` + cn,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` +
              (d === "y"
                ? Wt
                : Wt.replace("length(position.xz)", "length(position.xy)")
                    .replace(
                      "atan(position.x, position.z)",
                      "atan(-position.x, position.y)",
                    )
                    .replace("transformed.y +=", "transformed.z +=")),
          )),
        (g.fragmentShader = g.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
` + fn,
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
` + hn,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
totalEmissiveRadiance += hdLit * (diffuseColor.rgb * 3.0 + 0.02);`,
          )));
    }),
    (x.customProgramCacheKey = () => "heli_disc_" + d));
  const w = new le(p, x);
  ((w.name = f),
    (w.castShadow = !1),
    (w.receiveShadow = !1),
    (w.renderOrder = 5));
  const v = { ghostPhase: 0 };
  return {
    mesh: w,
    U: m,
    step: (g, P, k, y, M = -0.9) => {
      const F = Math.abs(P),
        A = F / y,
        W = 1 - dt(0.12, 0.27, A),
        N = dt(0.26, 0.6, A);
      return (
        N <= 0
          ? (v.ghostPhase = k)
          : (v.ghostPhase += g * (P * (1 - N) + M * N)),
        (m.uPhase.value = v.ghostPhase),
        (m.uSweep.value =
          Math.min(1.2, F * (1 / 60) * 2.4) * (1 - N) + 0.85 * N),
        (m.uGhost.value = (1 - N) * 1 + N * 0.22),
        (m.uDisc.value = N),
        (m.uAlpha.value = dt(0.08, 0.2, A)),
        (w.visible = m.uAlpha.value > 0.002),
        W
      );
    },
    material: x,
  };
}
function dn(e, l, a) {
  const o = Math.max(0, Math.min(1, (a - e) / (l - e)));
  return o * o * (3 - 2 * o);
}
const dt = dn,
  _e = H0,
  un = () => new de(1, 1);
function ut(e, l) {
  const a = un(),
    o = new Do();
  ((o.index = a.index),
    o.setAttribute("position", a.attributes.position),
    o.setAttribute("uv", a.attributes.uv));
  const t = {};
  for (const [s, n] of Object.entries(l)) {
    const c = new Bo(new Float32Array(e * n), n);
    (c.setUsage(gt), o.setAttribute(s, c), (t[s] = c));
  }
  return ((o.instanceCount = 0), { g: o, a: t });
}
const pn = `
#ifdef USE_FOG
varying float vFogDepth;
#endif
`,
  mn = `
#ifdef USE_FOG
uniform vec3 fogColor;
varying float vFogDepth;
#ifdef FOG_EXP2
uniform float fogDensity;
#else
uniform float fogNear;
uniform float fogFar;
#endif
float hfFog() {
#ifdef FOG_EXP2
  return 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
#else
  return smoothstep(fogNear, fogFar, vFogDepth);
#endif
}
#else
float hfFog() { return 0.0; }
#endif
`,
  so = `
float fxH(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float fxN(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(fxH(i), fxH(i + vec2(1.0, 0.0)), f.x), mix(fxH(i + vec2(0.0, 1.0)), fxH(i + vec2(1.0, 1.0)), f.x), f.y); }
float fxF(vec2 p) { return fxN(p) * 0.5 + fxN(p * 2.03 + 7.1) * 0.3 + fxN(p * 4.1 - 3.3) * 0.2; }
`,
  vn = `
attribute vec4 iPos;    // world xyz, size (m)
attribute vec4 iDat;    // life 0..1, seed, opacity, heat
varying vec2 vUv;
varying vec4 vDat;
${pn}
void main() {
  vUv = uv; vDat = iDat;
  vec4 mv = viewMatrix * vec4(iPos.xyz, 1.0);
  float rot = iDat.y * 6.2831853 + iDat.x * (iDat.y - 0.5) * 3.0;
  vec2 c = position.xy;
  c = vec2(c.x * cos(rot) - c.y * sin(rot), c.x * sin(rot) + c.y * cos(rot));
  mv.xy += c * iPos.w;
#ifdef USE_FOG
  vFogDepth = -mv.z;
#endif
  gl_Position = projectionMatrix * mv;
}`,
  gn = `
uniform vec3 uCol;
uniform vec3 uLit;
uniform vec3 uGlow;
varying vec2 vUv;
varying vec4 vDat;
${mn}
${so}
void main() {
  vec2 q = vUv * 2.0 - 1.0;
  float r = length(q);
  float n = fxF(q * 1.8 + vDat.y * 37.0 + vec2(0.0, vDat.x * 2.0));
  float a = smoothstep(1.0, 0.2, r + (n - 0.5) * 0.75) * vDat.z;
  float life = vDat.x;
  a *= smoothstep(0.0, 0.06, life) * (1.0 - smoothstep(0.45, 1.0, life));
  if (a < 0.003) discard;
  // lit a little from above (the sky), darker in its heart; the fire's glow in it while it is young
  vec3 col = uCol * (0.55 + 0.7 * n) + uLit * (0.35 + 0.35 * q.y) * (0.6 + 0.4 * n);
  col += uGlow * vDat.w * (1.0 - smoothstep(0.0, 0.07, life)) * (0.6 - 0.4 * q.y);
  col = mix(col, fogColorOr(col), hfFog());
  gl_FragColor = vec4(col * a, a);
}`.replace("fogColorOr(col)", "_FOGC_"),
  xn = () =>
    gn.replace(
      "_FOGC_",
      `
#ifdef USE_FOG
fogColor
#else
col
#endif
`,
    ),
  yn = `
attribute vec4 iPos;    // world xyz, width (m)
attribute vec4 iVel;    // velocity xyz, life 0..1
uniform float uStreak;  // seconds of travel the streak shows
varying vec2 vUv;
varying float vLife;
void main() {
  vUv = uv; vLife = iVel.w;
  vec4 a = viewMatrix * vec4(iPos.xyz, 1.0);
  vec4 b = viewMatrix * vec4(iPos.xyz - iVel.xyz * uStreak, 1.0);
  vec2 d = a.xy - b.xy; float L = length(d); vec2 dir = L > 1e-5 ? d / L : vec2(1.0, 0.0);
  vec2 nrm = vec2(-dir.y, dir.x);
  vec4 mv = mix(b, a, position.x + 0.5);
  mv.xy += nrm * position.y * iPos.w;
  gl_Position = projectionMatrix * mv;
}`,
  wn = `
varying vec2 vUv;
varying float vLife;
void main() {
  float y = abs(vUv.y - 0.5) * 2.0;
  float a = (1.0 - y * y) * smoothstep(0.0, 0.35, vUv.x) * (1.0 - smoothstep(0.75, 1.0, vLife));
  vec3 hot = mix(vec3(6.0, 4.6, 2.6), vec3(3.6, 0.9, 0.18), smoothstep(0.0, 0.6, vLife));
  gl_FragColor = vec4(hot * a, 0.0);
}`,
  bn = `
attribute vec4 iPos;    // world xyz, size
attribute vec4 iDat;    // life 0..1, seed, strength, stretch
varying vec2 vUv;
varying vec4 vDat;
void main() {
  vUv = uv; vDat = iDat;
  vec4 mv = viewMatrix * vec4(iPos.xyz, 1.0);
  vec2 c = position.xy * vec2(1.0, 1.0 + iDat.w);
  c.y += 0.5 * iDat.w;
  mv.xy += c * iPos.w;
  gl_Position = projectionMatrix * mv;
}`,
  Mn = `
uniform float uTime;
varying vec2 vUv;
varying vec4 vDat;
${so}
void main() {
  vec2 q = vUv * 2.0 - 1.0;
  float n = fxF(vec2(q.x * 2.0, q.y * 1.4 - uTime * 3.2) + vDat.y * 19.0);
  float shape = 1.0 - smoothstep(0.0, 1.0, length(vec2(q.x * (1.3 + 0.6 * (q.y + 1.0)), (q.y + 0.2) * 0.85)) + (n - 0.5) * 0.9);
  float life = vDat.x;
  float a = shape * smoothstep(0.0, 0.12, life) * (1.0 - smoothstep(0.5, 1.0, life)) * vDat.z;
  if (a < 0.003) discard;
  float hot = smoothstep(0.25, 0.9, shape) * (1.0 - life);
  vec3 col = mix(vec3(2.4, 0.42, 0.05), vec3(5.0, 2.8, 0.9), hot);
  gl_FragColor = vec4(col * a, 0.0);
}`,
  Pn = `
attribute vec4 aCol;    // linear colour x strength, a: size (m-ish)
attribute float aStar;
uniform float uPx;
varying vec3 vCol;
varying float vStar;
void main() {
  vCol = aCol.rgb; vStar = aStar;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float d = max(-mv.z, 0.1);
  float k = max(max(aCol.r, aCol.g), aCol.b);
  gl_PointSize = k > 0.001 ? clamp(aCol.a * uPx / d, 3.0, 34.0) * (0.75 + 0.25 * min(k, 3.0) / 3.0) : 0.0;
  if (k < 0.001) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}`,
  Rn = `
varying vec3 vCol;
varying float vStar;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q);
  float a = exp(-r * r * 9.0) * 1.2 + exp(-r * 3.2) * 0.25;
  a += vStar * (exp(-abs(q.x) * 28.0) + exp(-abs(q.y) * 28.0)) * exp(-r * 2.2) * 0.5;
  a *= smoothstep(1.0, 0.75, r);
  if (a < 0.003) discard;
  gl_FragColor = vec4(vCol * a, 0.0);
}`,
  kn = `
varying vec3 vLocal; varying vec3 vWorld;
void main() { vLocal = position; vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
  zn = `
varying vec3 vLocal; varying vec3 vWorld;
uniform float uTime; uniform float uK; uniform vec3 uColor; uniform float uLen;
float bh(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float bn(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(bh(i), bh(i + vec3(1,0,0)), f.x), mix(bh(i + vec3(0,1,0)), bh(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(bh(i + vec3(0,0,1)), bh(i + vec3(1,0,1)), f.x), mix(bh(i + vec3(0,1,1)), bh(i + vec3(1,1,1)), f.x), f.y), f.z); }
void main() {
  float t = clamp(-vLocal.z, 0.0, 1.0);
  vec2 q = vLocal.xy / max(t, 1e-4);
  float rad = length(q);
  float core = pow(1.0 - smoothstep(0.0, 1.0, rad), 1.6);
  float nearF = smoothstep(0.0, 0.03, t);
  float farF = exp(-t * uLen * 0.045);
  float dust = 0.6 + 0.55 * bn(vWorld * 0.7 + vec3(0.0, uTime * 0.12, uTime * 0.07)) * bn(vWorld * 2.1 - vec3(uTime * 0.05));
  float a = core * nearF * farF * dust * uK;
  gl_FragColor = vec4(uColor * a, a);
}`,
  Sn = `
uniform vec3 uPos; uniform float uSize; varying vec2 vUv;
void main() { vUv = uv; vec4 mv = viewMatrix * vec4(uPos, 1.0); mv.xyz += normalize(-mv.xyz) * 0.1; mv.xy += position.xy * uSize; gl_Position = projectionMatrix * mv; }`,
  An = `
uniform float uK; uniform vec3 uColor; varying vec2 vUv;
void main() {
  vec2 p = vUv * 2.0 - 1.0; float r = length(p);
  float glow = exp(-r * r * 18.0) * 1.6 + exp(-r * 4.5) * 0.25;
  float streak = exp(-abs(p.y) * 60.0) * exp(-abs(p.x) * 1.6) * 0.6;
  float a = (glow + streak) * uK * smoothstep(1.0, 0.7, r);
  gl_FragColor = vec4(uColor * a, a);
}`;
function Tn(
  e,
  {
    name: l = "heli_fx",
    smokeN: a = 220,
    sparkN: o = 120,
    fireN: t = 14,
    haloN: s = 10,
    seed: n = 77,
  } = {},
) {
  let c = n >>> 0 || 1;
  const i = () => ((c = (c * 16807) % 2147483647), c / 2147483647),
    d = new $e();
  ((d.name = l), e.add(d));
  const f = ut(a, { iPos: 4, iDat: 4 }),
    p = {
      uCol: { value: new ee(0.012, 0.011, 0.011) },
      uLit: { value: new ee(0.03, 0.035, 0.05) },
      uGlow: { value: new ee(1.6, 0.45, 0.08) },
    },
    m = new ke({
      vertexShader: vn,
      fragmentShader: xn(),
      uniforms: Co.merge([No.fog, p]),
      transparent: !0,
      depthWrite: !1,
      fog: !0,
      blending: Qt,
      blendSrc: vt,
      blendDst: mt,
    });
  ((m.uniforms.uCol = p.uCol),
    (m.uniforms.uLit = p.uLit),
    (m.uniforms.uGlow = p.uGlow));
  const x = new le(f.g, m);
  ((x.name = l + "_smoke"),
    (x.frustumCulled = !1),
    (x.renderOrder = 8),
    d.add(x));
  const w = [];
  for (let U = 0; U < a; U++)
    w.push({
      on: !1,
      p: new _e(),
      v: new _e(),
      age: 0,
      life: 1,
      size: 1,
      grow: 1,
      seed: i(),
      op: 1,
      heat: 0,
    });
  const v = ut(o, { iPos: 4, iVel: 4 }),
    u = new ke({
      vertexShader: yn,
      fragmentShader: wn,
      uniforms: { uStreak: { value: 0.035 } },
      transparent: !0,
      depthWrite: !1,
      blending: Te,
      toneMapped: !1,
    }),
    g = new le(v.g, u);
  ((g.name = l + "_sparks"),
    (g.frustumCulled = !1),
    (g.renderOrder = 9),
    d.add(g));
  const P = [];
  for (let U = 0; U < o; U++)
    P.push({ on: !1, p: new _e(), v: new _e(), age: 0, life: 1, w: 0.01 });
  const k = ut(t, { iPos: 4, iDat: 4 }),
    y = { uTime: { value: 0 } },
    M = new ke({
      vertexShader: bn,
      fragmentShader: Mn,
      uniforms: y,
      transparent: !0,
      depthWrite: !1,
      blending: Te,
      toneMapped: !1,
    }),
    F = new le(k.g, M);
  ((F.name = l + "_fire"),
    (F.frustumCulled = !1),
    (F.renderOrder = 9),
    d.add(F));
  const A = [];
  for (let U = 0; U < t; U++)
    A.push({
      age: U / t,
      life: 0.5 + (U % 5) * 0.08,
      seed: (U * 0.618) % 1,
      off: new _e(),
    });
  const W = new K0(),
    N = new Q0(new Float32Array(s * 3), 3),
    D = new Q0(new Float32Array(s * 4), 4),
    $ = new Q0(new Float32Array(s), 1);
  (N.setUsage(gt),
    D.setUsage(gt),
    W.setAttribute("position", N),
    W.setAttribute("aCol", D),
    W.setAttribute("aStar", $));
  const u0 = { uPx: { value: 600 } },
    L = new ke({
      vertexShader: Pn,
      fragmentShader: Rn,
      uniforms: u0,
      transparent: !0,
      depthWrite: !1,
      blending: Te,
      toneMapped: !1,
    }),
    T = new Fo(W, L);
  ((T.name = l + "_halos"),
    (T.frustumCulled = !1),
    (T.renderOrder = 10),
    d.add(T));
  const O = new ke({
      vertexShader: kn,
      fragmentShader: zn,
      transparent: !0,
      depthWrite: !1,
      side: wt,
      blending: Te,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        uTime: { value: 0 },
        uK: { value: 0 },
        uColor: { value: new ee(0.85, 0.92, 1) },
        uLen: { value: 40 },
      },
    }),
    q = new Eo(1, 1, 48, 1, !0);
  (q.translate(0, -0.5, 0), q.rotateX(Math.PI / 2));
  const j = new le(q, O);
  ((j.name = l + "_beam"),
    (j.frustumCulled = !1),
    (j.renderOrder = 7),
    (j.visible = !1),
    d.add(j));
  const E = new ke({
      vertexShader: Sn,
      fragmentShader: An,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      blending: Te,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        uPos: { value: new _e() },
        uSize: { value: 1.6 },
        uK: { value: 0 },
        uColor: { value: new ee(0.9, 0.95, 1) },
      },
    }),
    l0 = new le(new de(1, 1), E);
  ((l0.name = l + "_flare"),
    (l0.frustumCulled = !1),
    (l0.renderOrder = 11),
    (l0.visible = !1),
    d.add(l0));
  const y0 = new ke({
      vertexShader:
        "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader:
        "varying vec2 vUv; uniform vec3 uColor; uniform float uK; void main(){ vec2 q = vUv * 2.0 - 1.0; float r = length(q); float a = (1.0 / (1.0 + r * r * 16.0) - 0.0588) * smoothstep(1.0, 0.6, r) * uK; gl_FragColor = vec4(uColor * a, 0.0); }",
      uniforms: { uColor: { value: new ee(1, 0.06, 0.03) }, uK: { value: 0 } },
      transparent: !0,
      depthWrite: !1,
      blending: Te,
      toneMapped: !1,
      fog: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    }),
    o0 = new le(new de(1, 1).rotateX(-Math.PI / 2), y0);
  return (
    (o0.name = l + "_pool"),
    (o0.frustumCulled = !1),
    (o0.renderOrder = 3),
    (o0.visible = !1),
    d.add(o0),
    {
      group: d,
      smokeMesh: x,
      sparkMesh: g,
      fireMesh: F,
      halos: T,
      beam: j,
      flare: l0,
      beamMat: O,
      flareMat: E,
      pool: o0,
      poolMat: y0,
      puff(
        U,
        e0,
        {
          size: a0 = 0.45,
          grow: r0 = 1.6,
          life: i0 = 3,
          op: V = 0.85,
          heat: p0 = 0,
        } = {},
      ) {
        let C = null;
        for (const J of w) {
          if (!J.on) {
            C = J;
            break;
          }
          (!C || J.age / J.life > C.age / C.life) && (C = J);
        }
        ((C.on = !0),
          C.p.copy(U),
          C.v.copy(e0),
          (C.age = 0),
          (C.life = i0 * (0.8 + 0.4 * i())),
          (C.size = a0),
          (C.grow = r0),
          (C.seed = i()),
          (C.op = V),
          (C.heat = p0));
      },
      burst(U, e0 = 40, a0 = null, r0 = 7) {
        let i0 = 0;
        for (const V of P) {
          if (V.on && i0 < P.length - e0) continue;
          ((V.on = !0),
            V.p.copy(U),
            (V.age = 0),
            (V.life = 0.35 + i() * 0.7),
            (V.w = 0.006 + i() * 0.01));
          const p0 = i() * 2 - 1,
            C = i() * Math.PI * 2,
            J = Math.sqrt(1 - p0 * p0);
          if (
            (V.v.set(J * Math.cos(C), p0, J * Math.sin(C)),
            a0 && (V.v.multiplyScalar(0.55).add(a0), V.v.normalize()),
            V.v.multiplyScalar(r0 * (0.35 + i() * 0.9)),
            ++i0 >= e0)
          )
            break;
        }
      },
      sparksLive() {
        return P.some((U) => U.on);
      },
      update(
        U,
        e0,
        {
          fireAt: a0 = null,
          fireK: r0 = 0,
          fireWind: i0 = null,
          time: V = 0,
          rendererH: p0 = 900,
        } = {},
      ) {
        let C = 0;
        const J = f.a.iPos.array,
          Y = f.a.iDat.array;
        for (const r of w) {
          if (!r.on) continue;
          if (((r.age += U), r.age >= r.life)) {
            r.on = !1;
            continue;
          }
          (r.v.multiplyScalar(Math.exp(-U * 0.9)),
            (r.v.y += U * 0.35),
            r.p.addScaledVector(r.v, U));
          const c0 = r.age / r.life,
            F0 = r.size * (1 + r.grow * Math.sqrt(c0) * 3);
          ((J[C * 4] = r.p.x),
            (J[C * 4 + 1] = r.p.y),
            (J[C * 4 + 2] = r.p.z),
            (J[C * 4 + 3] = F0),
            (Y[C * 4] = c0),
            (Y[C * 4 + 1] = r.seed),
            (Y[C * 4 + 2] = r.op),
            (Y[C * 4 + 3] = r.heat),
            C++);
        }
        ((f.g.instanceCount = C),
          (f.a.iPos.needsUpdate = C > 0),
          (f.a.iDat.needsUpdate = C > 0),
          (x.visible = C > 0),
          (C = 0));
        const B = v.a.iPos.array,
          k0 = v.a.iVel.array;
        for (const r of P)
          if (r.on) {
            if (((r.age += U), r.age >= r.life)) {
              r.on = !1;
              continue;
            }
            ((r.v.y -= 9.8 * U),
              r.v.multiplyScalar(Math.exp(-U * 1.2)),
              r.p.addScaledVector(r.v, U),
              (B[C * 4] = r.p.x),
              (B[C * 4 + 1] = r.p.y),
              (B[C * 4 + 2] = r.p.z),
              (B[C * 4 + 3] = r.w),
              (k0[C * 4] = r.v.x),
              (k0[C * 4 + 1] = r.v.y),
              (k0[C * 4 + 2] = r.v.z),
              (k0[C * 4 + 3] = r.age / r.life),
              C++);
          }
        if (
          ((v.g.instanceCount = C),
          (v.a.iPos.needsUpdate = C > 0),
          (v.a.iVel.needsUpdate = C > 0),
          (g.visible = C > 0),
          (C = 0),
          r0 > 0.01 && a0)
        ) {
          y.uTime.value = V;
          const r = k.a.iPos.array,
            c0 = k.a.iDat.array;
          for (const F0 of A) {
            ((F0.age += U / F0.life),
              F0.age >= 1 &&
                ((F0.age -= 1),
                (F0.seed = i()),
                F0.off.set((i() - 0.5) * 0.3, i() * 0.1, (i() - 0.5) * 0.3)));
            const z0 = F0.age;
            ((r[C * 4] = a0.x + F0.off.x + (i0 ? i0.x * z0 * 0.05 : 0)),
              (r[C * 4 + 1] =
                a0.y + F0.off.y + z0 * 0.5 + (i0 ? i0.y * z0 * 0.05 : 0)),
              (r[C * 4 + 2] = a0.z + F0.off.z + (i0 ? i0.z * z0 * 0.05 : 0)),
              (r[C * 4 + 3] = (0.25 + 0.35 * r0) * (1 - 0.4 * z0)),
              (c0[C * 4] = z0),
              (c0[C * 4 + 1] = F0.seed),
              (c0[C * 4 + 2] = r0),
              (c0[C * 4 + 3] =
                0.6 + (i0 ? Math.min(2, i0.length() * 0.05) : 0)),
              C++);
          }
          ((k.a.iPos.needsUpdate = !0), (k.a.iDat.needsUpdate = !0));
        }
        ((k.g.instanceCount = C),
          (F.visible = C > 0),
          (u0.uPx.value =
            p0 / (2 * Math.tan(((e0.fov || 60) * Math.PI) / 360))),
          (O.uniforms.uTime.value = V));
      },
      setHalo(U, e0, a0, r0, i0, V = 0.12, p0 = 0) {
        ((N.array[U * 3] = e0.x),
          (N.array[U * 3 + 1] = e0.y),
          (N.array[U * 3 + 2] = e0.z),
          (D.array[U * 4] = a0),
          (D.array[U * 4 + 1] = r0),
          (D.array[U * 4 + 2] = i0),
          (D.array[U * 4 + 3] = V),
          ($.array[U] = p0),
          (N.needsUpdate = !0),
          (D.needsUpdate = !0),
          ($.needsUpdate = !0));
      },
      dispose() {
        for (const U of [x, g, F, T, j, l0, o0])
          (U.geometry.dispose(), U.material.dispose());
        d.parent?.remove(d);
      },
    }
  );
}
const _n = (e, l, a, o) => e + (l - e) * (1 - Math.exp(-8 * o));
function Ln(e, l, { enabled: a = !0 } = {}) {
  const o = e.audio,
    t = {},
    s = { building: !1, built: !1, c: null, ob: 0, mix: null, pos: [0, 0, 0] },
    n = ["heli_rotor_out", "heli_turbine_out"],
    c = ["heli_rotor_in", "heli_turbine_in"],
    i = async () => {
      if (!(s.built || s.building || !a || !o?.ctx || !o.buffer)) {
        s.building = !0;
        try {
          const f = o.ctx;
          s.c = f;
          const p = async (m, x) => {
            const w = await o.buffer(m);
            if (!w) return;
            const v = f.createBufferSource();
            ((v.buffer = w), (v.loop = !0));
            const u = f.createGain();
            ((u.gain.value = 0), v.connect(u));
            let g = u,
              P = null;
            (x &&
              ((P = f.createPanner()),
              (P.panningModel = "HRTF"),
              (P.distanceModel = "inverse"),
              (P.refDistance = 6),
              (P.rolloffFactor = 0.9),
              (P.maxDistance = 400),
              u.connect(P),
              (g = P)),
              g.connect(o.bus.sfx),
              v.start(f.currentTime + 0.02, Math.random() * w.duration * 0.9),
              (t[m] = { s: v, g: u, pan: P, norm: w._norm ?? 1 }));
          };
          (await Promise.all([
            ...n.map((m) => p(m, !0)),
            ...c.map((m) => p(m, !1)),
            p("heli_wind", !1),
            p("heli_lowrpm_horn", !1),
            p("heli_fire_bell", !1),
            p("heli_tail_grind", !0),
          ]),
            (s.built = !0));
        } catch {}
        s.building = !1;
      }
    },
    d = (f, p, m = 0.06) => {
      try {
        f.setTargetAtTime(p, s.c.currentTime, m);
      } catch {}
    };
  return {
    play(f, p = 0.8, m = {}) {
      if (!a || !o?.play) return null;
      try {
        return o.play(f, {
          ...(l.onboard && !m.outside
            ? {}
            : { pos: m.pos || s.pos, ref: m.ref ?? 4 }),
          vol: p,
          ...m.extra,
        });
      } catch {
        return null;
      }
    },
    update(
      f,
      {
        rpm: p,
        n1: m,
        wind: x,
        horn: w,
        bell: v,
        grind: u,
        pos: g,
        vol: P = 1,
      },
    ) {
      if (((s.pos[0] = g.x), (s.pos[1] = g.y), (s.pos[2] = g.z), !s.built)) {
        (p > 0.001 || m > 0.001 || w || v) && o?.ctx && i();
        return;
      }
      s.ob = _n(s.ob, l.onboard ? 1 : 0, 8, f);
      const k = o.speaking ? 0.62 : 1,
        y = P * (l.engineVol ?? 1) * k,
        M = Math.pow(Math.min(1, p), 0.8),
        F = Math.min(1, m * 1.2),
        A = (W) => t[W];
      (A("heli_rotor_in") &&
        (d(
          A("heli_rotor_in").g.gain,
          A("heli_rotor_in").norm * M * 0.85 * s.ob * y,
        ),
        d(
          A("heli_rotor_in").s.playbackRate,
          0.45 + 0.55 * Math.min(1.08, p),
          0.12,
        )),
        A("heli_turbine_in") &&
          (d(
            A("heli_turbine_in").g.gain,
            A("heli_turbine_in").norm * F * 0.5 * s.ob * y,
          ),
          d(A("heli_turbine_in").s.playbackRate, 0.5 + 0.5 * m, 0.15)),
        A("heli_rotor_out") &&
          (d(
            A("heli_rotor_out").g.gain,
            A("heli_rotor_out").norm * M * 1 * (1 - s.ob) * y,
          ),
          d(
            A("heli_rotor_out").s.playbackRate,
            0.45 + 0.55 * Math.min(1.08, p),
            0.12,
          )),
        A("heli_turbine_out") &&
          (d(
            A("heli_turbine_out").g.gain,
            A("heli_turbine_out").norm * F * 0.6 * (1 - s.ob) * y,
          ),
          d(A("heli_turbine_out").s.playbackRate, 0.5 + 0.5 * m, 0.15)),
        A("heli_wind") &&
          (d(A("heli_wind").g.gain, A("heli_wind").norm * x * 0.8 * s.ob),
          d(A("heli_wind").s.playbackRate, 0.8 + 0.3 * x, 0.3)),
        A("heli_lowrpm_horn") &&
          d(
            A("heli_lowrpm_horn").g.gain,
            A("heli_lowrpm_horn").norm * (w ? 0.55 : 0),
            0.02,
          ),
        A("heli_fire_bell") &&
          d(
            A("heli_fire_bell").g.gain,
            A("heli_fire_bell").norm * (v ? 0.5 : 0),
            0.02,
          ),
        A("heli_tail_grind") &&
          d(
            A("heli_tail_grind").g.gain,
            A("heli_tail_grind").norm * u * 0.9 * y,
            0.05,
          ));
      for (const W of [...n, "heli_tail_grind"]) {
        const N = A(W);
        N?.pan &&
          ((N.pan.positionX.value = g.x),
          (N.pan.positionY.value = g.y),
          (N.pan.positionZ.value = g.z));
      }
    },
    dispose() {
      for (const f of Object.values(t))
        try {
          (f.s.stop(), f.g.disconnect(), f.pan?.disconnect());
        } catch {}
    },
  };
}
const Y0 = H0,
  U0 = Math.PI / 180,
  X0 = (e, l, a, o) => e + (l - e) * (1 - Math.exp(-a * o)),
  Ht = 2 * Math.PI * 6.4,
  $t = 2 * Math.PI * 36;
function Fn(e, l = {}) {
  const a = e.game || e,
    o = e.scene || a.scene,
    t = l.livery === "army";
  let s = 5304;
  const n = l.rng || (() => ((s = (s * 16807) % 2147483647), s / 2147483647)),
    c = performance.now();
  ao();
  const i = {
      body: new Ke("body"),
      tail: new Ke("tail"),
      glass: new Ke("glass"),
      cabin: new Ke("cabin"),
    },
    d = Ma(i, { army: t, rng: n }),
    f = [],
    p = { quad: (b, K) => f.push(ln(b, K)) },
    m = t ? { parts: {} } : Ca(i.cabin, p, { rng: n }),
    x = performance.now();
  t || (qt(i.body, d.grid), qt(i.cabin, d.grid));
  const w = Math.round(performance.now() - x),
    v = ya({ livery: t ? "army" : "rescue" }),
    u = v.userData.U;
  On(u, t);
  const g = t ? null : en(u),
    P = t ? null : rn(),
    k = P?.userData.U,
    y = new $e();
  y.name = l.name || (t ? "heli_army" : "heli");
  const M = new $e();
  ((M.name = y.name + "_body"), y.add(M));
  const F = (b, K, H, N0 = !0) => {
      const E0 = new le(b, K);
      return (
        (E0.name = H),
        (E0.castShadow = N0),
        (E0.receiveShadow = !0),
        (E0.customDepthMaterial = v.userData.depth),
        (E0.customDistanceMaterial = v.userData.distance),
        (E0.onBeforeShadow = () => {}),
        E0
      );
    },
    A = i.body.build(),
    W = i.tail.build();
  A.boundingSphere.radius += 1.5;
  const N = F(A, v, y.name + "_mesh");
  M.add(N);
  let D = null;
  if (!t) {
    const b = i.cabin.build();
    ((b.boundingSphere.radius += 0.6),
      (D = F(b, v, y.name + "_cabin", !1)),
      M.add(D));
  }
  const $ = new $e();
  (($.name = y.name + "_tail"), M.add($));
  const u0 = F(W, v, y.name + "_tailmesh");
  $.add(u0);
  let L = null,
    T = null;
  if (!t) {
    const b = i.glass.build();
    ((b.boundingSphere.radius += 1.5),
      (L = new le(b, g)),
      (L.name = y.name + "_glass"),
      (L.renderOrder = 6),
      (L.castShadow = !1),
      (L.receiveShadow = !1),
      M.add(L));
    const K = In(f);
    ((K.boundingSphere.radius += 1.2),
      (T = new le(K, P)),
      (T.name = y.name + "_screens"),
      (T.castShadow = !1),
      M.add(T));
  }
  const O = Kt({
    R: X.R,
    r0: 0.6,
    chord: X.chord,
    nb: 4,
    tipBand: X.R - 0.33,
    name: y.name + "_disc",
  });
  (O.mesh.position.copy(X.mast), M.add(O.mesh));
  const q = Kt({
    R: X.trR,
    r0: 0.12,
    chord: X.trChord,
    tipChord: 1,
    nb: 2,
    tipBand: 0.5,
    stripes: !0,
    axis: "x",
    name: y.name + "_tdisc",
  });
  (q.mesh.position.set(X.tr.x + 0.04, X.tr.y, X.tr.z),
    (q.mesh.rotation.y = Math.PI / 2),
    $.add(q.mesh));
  const j =
      i.body.tris + i.cabin.tris + i.tail.tris + i.glass.tris + f.length * 2,
    E = (b, K, H) => {
      const N0 = new Go();
      return ((N0.name = K), H && N0.position.copy(H), b.add(N0), N0);
    },
    l0 = {
      copilot: E(M, "heli_eye_copilot", t0.eye),
      pilot: E(M, "heli_seat_pilot", h(-0.38, t0.floorY, t0.seatZ)),
      rear: E(M, "heli_seat_rear", h(-0.1, t0.floorY, -1.05)),
    },
    y0 = { R: E(M, "heli_hand_R"), L: E(M, "heli_hand_L") },
    o0 = { L: E(M, "heli_foot_L"), R: E(M, "heli_foot_R") },
    n0 = {
      root: l0.pilot,
      pose: "seat",
      seat: +(t0.seatTop - t0.floorY).toFixed(3),
      hands: y0,
      feet: o0,
      lean: 5,
    },
    U = {
      [f0.NAV_L]: E(M, "lamp_nav_l", h(1.27, 2.02, -4.98)),
      [f0.NAV_R]: E(M, "lamp_nav_r", h(-1.27, 2.02, -4.98)),
      [f0.NAV_TAIL]: E($, "lamp_tail", h(0, 2.05, O0.z1 - 0.05)),
      [f0.BCN_TOP]: E(M, "lamp_bcn_top", h(0, 2.9, -1.55)),
      [f0.BCN_BELLY]: E(M, "lamp_bcn_belly", h(0, 0.57, -0.45)),
      [f0.STROBE_L]: E(M, "lamp_strobe_l", h(1.27, 2.3, -5.02)),
      [f0.STROBE_R]: E(M, "lamp_strobe_r", h(-1.27, 2.3, -5.02)),
      [f0.LANDING]: E(
        M,
        "lamp_landing",
        h(X.landing.x, X.landing.y - 0.04, X.landing.z + 0.06),
      ),
    },
    e0 = E(M, "heli_exhaust_1", h(0.42, 2.95, -2.36)),
    a0 = E(M, "heli_fire_at", h(0.45, 2.7, -1.6)),
    r0 = E(M, "heli_glow_at", h(0, 1.36, 2.12)),
    i0 = {};
  let V = null,
    p0 = null,
    C = null;
  t ||
    ((V = new It(15002879, 0, 95, 0.22, 0.85, 2)),
    (V.name = y.name + "_searchlight"),
    (V.castShadow = !0),
    V.shadow.mapSize.set(1024, 1024),
    (V.shadow.camera.near = 0.8),
    (V.shadow.camera.far = 95),
    (V.shadow.bias = -6e-4),
    (V.shadow.normalBias = 0.04),
    (V.userData.actorGain = 1),
    (p0 = new It(16773596, 0, 55, 0.36, 0.5, 2)),
    (p0.name = y.name + "_landing"),
    (p0.castShadow = !1),
    (p0.userData.noShadowBudget = !0),
    (C = new Ct(10275071, 0, 2.3, 2)),
    (C.name = y.name + "_glow"),
    (C.castShadow = !1),
    o.add(V, V.target, p0, p0.target, C),
    Object.assign(i0, { searchlight: V, landing: p0, glow: C }));
  const J = new Ct(16722458, 0, 9, 2);
  ((J.name = y.name + "_fxlight"), (J.castShadow = !1), o.add(J), (i0.fx = J));
  const Y = Tn(o, { name: y.name + "_fx", haloN: 8, seed: t ? 91 : 77 }),
    B = {},
    k0 = Ln(a, B, { enabled: l.sound !== !1 });
  l.parent !== null && (l.parent || o).add(y);
  const r = {
      t: 0,
      rpm: 0,
      phase: 0,
      phaseT: 0.7,
      omegaT: 0,
      n1: [0, 0],
      eng: [0, 0],
      startT: [-9, -9],
      collective: 0,
      cyc: [0, 0],
      pedal: 0,
      speed: 0,
      damage: 0,
      power: 0,
      powerOn: !1,
      bootT: 0,
      beacon: !1,
      strobe: !1,
      doorK: [0, 0, 0, 0],
      doorGoal: [0, 0, 0, 0],
      doorRate: [1, 1, 1, 1],
      pan: 0,
      tilt: 8 * U0,
      aim: null,
      searchK: 0,
      landingK: 0,
      crack: 0,
      crackGoal: 0,
      smoke: 0,
      fire: 0,
      warn: new Set(),
      warnT: new Map(),
      shake: 0,
      kick: 0,
      kickDecay: 0.5,
      broken: !1,
      brokeT: 0,
      grind: 0,
      sparkT: -9,
      sparkPos: new Y0(),
      hookV: [0, 0],
      hook: [0, 0],
      lastPos: new Y0(),
      vel: new Y0(),
      velInit: !1,
      emitAcc: 0,
      smears: 0,
      eyeV: new Y0(),
      eyeO: new Y0(),
      thr: [0, 0],
      throttleGoal: null,
    },
    c0 = u.uPart.value;
  for (const b of c0) b.identity();
  const F0 = new b0().makeScale(0, 0, 0);
  (c0[_.BRK_BODY].copy(F0), c0[_.BRK_TAIL].copy(F0), c0[_.CABLES].copy(F0));
  const z0 = new b0(),
    ro = new b0(),
    lo = new b0(),
    kt = new b0(),
    Ee = new nt(),
    h0 = new Y0(),
    w0 = new Y0(),
    q0 = new Y0(),
    Qe = new Y0(),
    be = new Zt(),
    Ue = new b0(),
    pe = (b, K, H) =>
      b
        .makeTranslation(K.x, K.y, K.z)
        .multiply(H)
        .multiply(lo.makeTranslation(-K.x, -K.y, -K.z)),
    De = {
      1: [X.hingeFL[0].clone(), X.hingeFL[1].clone()],
      [-1]: [
        h(-X.hingeFL[0].x, X.hingeFL[0].y, X.hingeFL[0].z),
        h(-X.hingeFL[1].x, X.hingeFL[1].y, X.hingeFL[1].z),
      ],
    },
    io = {
      1: De[1][1].clone().sub(De[1][0]).normalize(),
      [-1]: De[-1][1].clone().sub(De[-1][0]).normalize(),
    };
  (Object.assign(B, {
    root: y,
    body: M,
    seats: l0,
    rider: n0,
    hands: y0,
    feet: o0,
    mast: X.mast.clone(),
    tail: $,
    lights: i0,
    searchlight: V,
    landing: p0,
    glow: C,
    fx: Y,
    material: v,
    glassMaterial: g,
    screensMaterial: P,
    triParts: { ...d.parts, ...m.parts },
    aoMs: w,
    meshes: {
      body: N,
      cabin: D,
      tail: u0,
      glass: L,
      screens: T,
      disc: O.mesh,
      tdisc: q.mesh,
    },
    tris: j,
    onboard: !1,
    engineVol: 1,
    searchIntensity: 26e3,
    landingIntensity: 6e3,
    glowIntensity: 0.9,
    beamK: 0,
    state: r,
  }),
    Object.defineProperties(B, {
      searchK: {
        get: () => r.searchK,
        set: (b) => {
          r.searchK = m0(+b || 0);
        },
        enumerable: !0,
      },
      landingK: {
        get: () => r.landingK,
        set: (b) => {
          r.landingK = m0(+b || 0);
        },
        enumerable: !0,
      },
      rpm: { get: () => r.rpm, enumerable: !0 },
      broken: { get: () => r.broken, enumerable: !0 },
    }),
    (B.placeMast = (b, K) => {
      (y.quaternion.copy(K),
        h0.copy(X.mast).applyQuaternion(K),
        y.position.copy(b).sub(h0));
    }),
    (B.power = (b = !0, { instant: K = !1 } = {}) => {
      if (((b = !!b), K)) {
        ((r.powerOn = b), (r.power = b ? 1 : 0), (r.bootT = b ? 10 : 0));
        return;
      }
      b !== r.powerOn &&
        ((r.powerOn = b),
        (r.bootT = 0),
        k0.play(b ? "heli_battery" : "heli_switch", b ? 0.8 : 0.6));
    }),
    (B.start = (b = 1) => {
      const K = b === 2 ? 1 : 0;
      r.eng[K] ||
        (r.powerOn || B.power(!0),
        (r.eng[K] = 1),
        (r.startT[K] = r.t),
        k0.play("heli_switch", 0.6),
        k0.play("heli_starter", 0.85, { extra: { delay: 0.15 } }),
        k0.play("heli_lightoff", 0.9, { extra: { delay: 2.4 } }));
    }),
    (B.stop = (b = !1) => {
      ((r.eng[0] = 0),
        (r.eng[1] = 0),
        (r.startT[0] = r.startT[1] = -9),
        b &&
          ((r.n1[0] = r.n1[1] = 0),
          (r.rpm = 0),
          (r.thr[0] = r.thr[1] = 0),
          (r.throttleGoal = null)));
    }),
    (B.throttle = (b) => {
      r.throttleGoal = b == null ? null : m0(b);
    }),
    (B.beacon = (b = !0) => {
      ((r.beacon = !!b), (r.strobe = !!b));
    }),
    (B.aim = (b) => {
      b
        ? ((r.aim = r.aim || new Y0()),
          b.isVector3 ? r.aim.copy(b) : r.aim.fromArray(b))
        : (r.aim = null);
    }),
    (B.crack = (b) => {
      const K = m0(b);
      (K > r.crackGoal + 0.04 &&
        k0.play("heli_glass_crack", 0.6 + 0.4 * (K - r.crackGoal)),
        (r.crackGoal = K));
    }),
    (B.smoke = (b) => {
      r.smoke = m0(b);
    }),
    (B.fire = (b) => {
      r.fire = m0(b);
    }),
    (B.shake = (b, K) => {
      K
        ? ((r.kick = Math.max(r.kick, b)), (r.kickDecay = K))
        : (r.shake = Math.max(0, b));
    }),
    (B.warn = (b = []) => {
      const K = new Set((b || []).filter((N0) => yt.includes(N0)));
      let H = !1;
      for (const N0 of K) r.warn.has(N0) || ((H = !0), r.warnT.set(N0, r.t));
      (K.size && !K.has("MASTER CAUTION") && K.add("MASTER CAUTION"),
        (r.warn = K),
        H && k0.play("heli_caution", 0.75));
    }),
    (B.sparks = (b, K = 50) => {
      const H = b.isVector3 ? h0.copy(b) : h0.fromArray(b);
      (Y.burst(H, K, null, 8),
        (r.sparkT = r.t),
        r.sparkPos.copy(H),
        k0.play("heli_sparks", 0.8, { pos: [H.x, H.y, H.z], outside: !0 }));
    }),
    (B.bang = (b) => {
      const K = b.isVector3 ? h0.copy(b) : h0.fromArray(b);
      if (
        (k0.play("heli_glass_bang", 0.9, { pos: [K.x, K.y, K.z], outside: !0 }),
        (r.kick = Math.max(r.kick, 0.35)),
        (r.kickDecay = 0.35),
        g)
      ) {
        (y.updateMatrixWorld(!0), Ue.copy(M.matrixWorld).invert());
        const H = w0.copy(K).applyMatrix4(Ue);
        (g.userData.U.uSmear.value[r.smears % 6].set(
          H.x,
          H.y,
          H.z,
          0.05 + 0.03 * n(),
        ),
          r.smears++);
      }
    }),
    (B.breakTail = () => {
      if (r.broken) return $;
      ((r.broken = !0),
        (r.brokeT = r.t),
        (r.grind = 1),
        y.updateMatrixWorld(!0),
        o.attach($),
        c0[_.BRK_BODY].identity(),
        c0[_.BRK_TAIL].identity(),
        h0.set(0, ie(O0.brk).C, O0.brk).applyMatrix4(M.matrixWorld),
        Y.burst(h0, 80, null, 10),
        (r.sparkT = r.t),
        r.sparkPos.copy(h0),
        k0.play("heli_tail_bang", 1));
      const b = new Set(r.warn);
      return (
        b.add("TAIL ROTOR"),
        B.warn([...b]),
        (r.kick = 1),
        (r.kickDecay = 0.9),
        $
      );
    }));
  const Ve = (b, K) => ({
    name: K,
    get k() {
      return r.doorK[b];
    },
    open(H = 1, N0 = 1.2) {
      const E0 = m0(H);
      (E0 !== r.doorGoal[b] && E0 > r.doorK[b]
        ? k0.play(b < 2 ? "heli_door_latch" : "heli_door_slide", 0.75)
        : E0 !== r.doorGoal[b] && b >= 2 && k0.play("heli_door_slide", 0.75),
        (r.doorGoal[b] = E0),
        (r.doorRate[b] = 1 / Math.max(0.05, N0)));
    },
  });
  B.doors = {
    left: Ve(0, "left"),
    right: Ve(1, "right"),
    rearL: Ve(2, "rearL"),
    rearR: Ve(3, "rearR"),
  };
  const zt = [
      { name: "pod", box: [-0.92, 0.92, 0, 2.95, -2.75, 3.5] },
      { name: "tail", box: [-0.48, 0.48, 0, 3.6, -7.3, -2.75] },
      { name: "stab", box: [-1.3, 1.3, 1.5, 2.45, -5.35, -4.7] },
    ],
    St = zt.map((b) => ({
      x0: 0,
      x1: 0,
      z0: 0,
      z1: 0,
      y0: 0,
      y1: 0,
      on: !1,
      name: "heli_" + b.name,
    }));
  B.colliders = (b = !0) => (
    y.updateMatrixWorld(!0),
    zt.forEach((K, H) => {
      const [N0, E0, qe, We, Je, et] = K.box,
        A0 = St[H];
      ((A0.x0 = A0.z0 = A0.y0 = 1 / 0), (A0.x1 = A0.z1 = A0.y1 = -1 / 0));
      for (const Se of [N0, E0])
        for (const me of [qe, We])
          for (const tt of [Je, et])
            (h0.set(Se, me, tt).applyMatrix4(y.matrixWorld),
              (A0.x0 = Math.min(A0.x0, h0.x)),
              (A0.x1 = Math.max(A0.x1, h0.x)),
              (A0.z0 = Math.min(A0.z0, h0.z)),
              (A0.z1 = Math.max(A0.z1, h0.z)),
              (A0.y0 = Math.min(A0.y0, h0.y)),
              (A0.y1 = Math.max(A0.y1, h0.y)));
      A0.on = !!b;
    }),
    St
  );
  const At = new nt(),
    Tt = new nt(),
    co = new Y0(0, 1, 0),
    fo = new Y0(1, 0, 0);
  B.carryCamera = (b, K = 0, H = 0) => {
    (y.updateMatrixWorld(!0),
      l0.copilot.getWorldPosition(b.position),
      l0.copilot.getWorldQuaternion(b.quaternion),
      At.setFromAxisAngle(co, Math.PI + K),
      Tt.setFromAxisAngle(fo, H),
      b.quaternion.multiply(At).multiply(Tt),
      b.updateMatrixWorld());
  };
  const ne = u.uLamp.value,
    ho = new ee(10275071),
    uo = new ee(1, 0.12, 0.06),
    po = () => {
      for (let b = y; b; b = b.parent) if (!b.visible) return !1;
      return !0;
    };
  ((B.update = (b, K = {}) => {
    ((b = Math.min(Math.max(b || 0, 0), 0.1)), (r.t += b));
    const H = r.t,
      N0 = po();
    ((Y.group.visible = N0),
      (r.collective = X0(
        r.collective,
        m0(K.collective ?? r.collective),
        10,
        b,
      )),
      K.cyclic &&
        ((r.cyc[0] = X0(r.cyc[0], m0(K.cyclic[0], -1, 1), 12, b)),
        (r.cyc[1] = X0(r.cyc[1], m0(K.cyclic[1], -1, 1), 12, b))),
      (r.pedal = X0(r.pedal, m0(K.pedal ?? r.pedal, -1, 1), 12, b)),
      (r.speed = K.speed ?? r.speed),
      (r.damage = X0(r.damage, m0(K.damage ?? r.damage), 4, b)));
    for (let I = 0; I < 2; I++) {
      const d0 = H - r.startT[I],
        s0 = r.eng[I]
          ? d0 < 2.2
            ? 0.22 * j0(0, 2, d0)
            : 0.68 +
              0.3 *
                (r.throttleGoal ?? (r.rpm > 0.6 ? 1 : 0.5)) *
                (0.6 + 0.4 * r.collective)
          : 0;
      r.n1[I] = X0(r.n1[I], s0, d0 < 2.2 ? 4 : 1.4, b);
    }
    if (
      ((r.thr[0] = X0(r.thr[0], r.throttleGoal ?? (r.eng[0] ? 1 : 0), 6, b)),
      (r.thr[1] = X0(r.thr[1], r.throttleGoal ?? (r.eng[1] ? 1 : 0), 6, b)),
      K.rpm != null)
    )
      r.rpm = m0(K.rpm, 0, 1.15);
    else {
      const I = Math.max(r.n1[0], r.n1[1]),
        d0 = I > 0.3 ? m0((I - 0.3) / 0.55) : 0,
        s0 =
          d0 > r.rpm
            ? Math.min(0.2 * b, (d0 - r.rpm) * (1 - Math.exp(-b * 1.5)))
            : (d0 - r.rpm) * (1 - Math.exp(-b * 0.15));
      r.rpm = m0(r.rpm + s0, 0, 1.15);
    }
    const E0 = r.rpm * Ht;
    ((r.phase = (r.phase + E0 * b) % (Math.PI * 2e3)),
      (r.omegaT = r.broken ? X0(r.omegaT, 0, 0.35, b) : r.rpm * $t),
      (r.phaseT = (r.phaseT + r.omegaT * b) % (Math.PI * 2e3)));
    const qe = 0.32 * (1 - j0(0.05, 0.75, r.rpm)),
      We = r.rpm * r.rpm * (0.04 + 0.16 * r.collective);
    O.U.uDroop.value.set(qe, We, X.R, 0.6);
    const Je = O.step(b, E0, r.phase, Ht, -0.85);
    (u.uRotor.value.set(qe, We, X.R, Je),
      (u.uTRotorA.value = q.step(b, r.omegaT, r.phaseT, $t, 1.3)));
    const et =
        (r.cyc[1] * 3.5 + Math.min(r.speed, 60) * 0.06) *
        U0 *
        j0(0.3, 0.9, r.rpm),
      A0 = -r.cyc[0] * 3 * U0 * j0(0.3, 0.9, r.rpm);
    (be.set(et, 0, A0),
      Ee.setFromEuler(be),
      O.mesh.quaternion.copy(Ee),
      z0.makeRotationFromQuaternion(Ee).multiply(ro.makeRotationY(r.phase)),
      pe(c0[_.ROTOR], X.mast, z0),
      pe(c0[_.TROTOR], X.tr, z0.makeRotationX(r.phaseT)));
    for (const [I, d0, s0, M0, B0] of [
      [1, _.CYC_L, _.COL_L, _.PED_LL, _.PED_LR],
      [-1, _.CYC_R, _.COL_R, _.PED_RL, _.PED_RR],
    ]) {
      const P0 = re["cyc" + I],
        Me = re["col" + I];
      P0 &&
        (be.set(r.cyc[1] * 11 * U0, 0, r.cyc[0] * 9 * U0, "XZY"),
        z0.makeRotationFromEuler(be),
        pe(c0[d0], P0.pivot, z0),
        pe(c0[s0], Me.pivot, z0.makeRotationX(-r.collective * 13 * U0)),
        c0[M0].makeTranslation(0, 0, -r.pedal * 0.045),
        c0[B0].makeTranslation(0, 0, r.pedal * 0.045));
    }
    (c0[_.THR_1].makeTranslation(0, 0, r.thr[0] * 0.11),
      c0[_.THR_2].makeTranslation(0, 0, r.thr[1] * 0.11),
      re["cyc-1"] &&
        (y0.R.position.copy(re["cyc-1"].grip).applyMatrix4(c0[_.CYC_R]),
        y0.R.quaternion.setFromRotationMatrix(c0[_.CYC_R]),
        y0.L.position.copy(re["col-1"].grip).applyMatrix4(c0[_.COL_R]),
        y0.L.quaternion.setFromRotationMatrix(c0[_.COL_R]),
        o0.L.position.copy(re["ped-1L"].pos).applyMatrix4(c0[_.PED_RL]),
        o0.R.position.copy(re["ped-1R"].pos).applyMatrix4(c0[_.PED_RR])));
    for (let I = 0; I < 4; I++) {
      const d0 = r.doorGoal[I],
        s0 = r.doorK[I],
        M0 =
          s0 +
          Math.sign(d0 - s0) * Math.min(Math.abs(d0 - s0), b * r.doorRate[I]);
      (I < 2 &&
        s0 > 0.02 &&
        M0 <= 0.02 &&
        d0 < s0 &&
        k0.play("heli_door_latch", 0.6),
        (r.doorK[I] = M0));
    }
    for (const [I, d0, s0] of [
      [0, 1, _.DOOR_FL],
      [1, -1, _.DOOR_FR],
    ]) {
      const M0 = r.doorK[I] * r.doorK[I] * (3 - 2 * r.doorK[I]);
      (z0.makeRotationAxis(io[d0], -d0 * M0 * 78 * U0),
        pe(c0[s0], De[d0][0], z0));
    }
    for (const [I, d0, s0] of [
      [2, 1, _.DOOR_RL],
      [3, -1, _.DOOR_RR],
    ]) {
      const M0 = r.doorK[I],
        B0 = j0(0, 0.15, M0) * X.slideOut,
        P0 = j0(0.08, 1, M0) * X.slideBack;
      c0[s0].makeTranslation(d0 * B0, 0, -P0);
    }
    {
      const I =
          -r.cyc[1] * 0.3 -
          Math.min(r.speed, 50) * 0.008 +
          Math.sin(H * 2.1) * 0.03 * r.rpm,
        d0 = r.cyc[0] * 0.2 + Math.sin(H * 1.7) * 0.03 * r.rpm;
      ((r.hookV[0] += ((I - r.hook[0]) * 22 - r.hookV[0] * 1.5) * b),
        (r.hook[0] += r.hookV[0] * b),
        (r.hookV[1] += ((d0 - r.hook[1]) * 22 - r.hookV[1] * 1.5) * b),
        (r.hook[1] += r.hookV[1] * b),
        be.set(r.hook[0], 0, r.hook[1]),
        z0.makeRotationFromEuler(be),
        pe(c0[_.HOOK], Qe.set(X.hook.x, 2.12, X.hook.z), z0));
    }
    r.broken &&
      (be.set(Math.sin(H * 5.3) * 0.25 + 0.2, 0, Math.sin(H * 4.1) * 0.3),
      z0.makeRotationFromEuler(be),
      pe(c0[_.CABLES], Qe.set(0, ie(O0.brk).C, O0.brk), z0),
      (r.grind = X0(r.grind, 0.7, 0.5, b)));
    {
      r.kick *= Math.exp(-b / Math.max(0.05, r.kickDecay));
      const I = r.shake + r.kick + r.damage * 0.25,
        d0 = 7e-4 * r.rpm * (1 + 2 * r.damage),
        s0 = (M0, B0) =>
          Math.sin(H * M0 + B0) * 0.6 +
          Math.sin(H * M0 * 2.31 + B0 * 1.7) * 0.4;
      (M.rotation.set(
        I * 0.012 * s0(23, 0.3) + d0 * Math.sin(H * 103),
        I * 0.006 * s0(17, 1.3),
        I * 0.016 * s0(19, 2.1) + d0 * Math.sin(H * 97),
      ),
        M.position.set(
          I * 0.008 * s0(29, 4.1),
          I * 0.012 * s0(31, 0.7) + d0 * Math.sin(H * 101),
          I * 0.006 * s0(27, 2.2),
        ),
        h0.set(
          I * 0.012 * s0(13, 5),
          I * 0.016 * s0(11, 3),
          I * 0.01 * s0(9, 1),
        ),
        r.eyeV.addScaledVector(
          h0.sub(r.eyeO).multiplyScalar(140).addScaledVector(r.eyeV, -14),
          b,
        ),
        r.eyeO.addScaledVector(r.eyeV, b),
        l0.copilot.position.copy(t0.eye).add(r.eyeO));
    }
    (y.updateMatrixWorld(!0),
      M.getWorldPosition(h0),
      r.velInit || (r.lastPos.copy(h0), (r.velInit = !0)),
      b > 0 &&
        (w0.copy(h0).sub(r.lastPos).divideScalar(b),
        r.vel.lerp(w0, 1 - Math.exp(-b * 6))),
      r.lastPos.copy(h0));
    const Se = Qe.copy(h0);
    {
      let I = 0,
        d0 = 8 * U0;
      r.aim &&
        (Ue.copy(M.matrixWorld).invert(),
        w0.copy(r.aim).applyMatrix4(Ue).sub(X.slPivot),
        (I = m0(Math.atan2(w0.x, w0.z), -110 * U0, 110 * U0)),
        (d0 = m0(
          Math.atan2(-w0.y, Math.hypot(w0.x, w0.z)),
          -10 * U0,
          85 * U0,
        )));
      const s0 = 1.6 * b;
      if (
        ((r.pan += m0(I - r.pan, -s0, s0)),
        (r.tilt += m0(d0 - r.tilt, -s0, s0)),
        pe(c0[_.SL_PAN], X.slMount, z0.makeRotationY(r.pan)),
        pe(kt, X.slPivot, z0.makeRotationX(r.tilt)),
        c0[_.SL_TILT].multiplyMatrices(c0[_.SL_PAN], kt),
        V)
      ) {
        if (
          (w0
            .set(X.slPivot.x, X.slPivot.y, X.slPivot.z + 0.12)
            .applyMatrix4(c0[_.SL_TILT])
            .applyMatrix4(M.matrixWorld),
          q0
            .set(0, 0, 1)
            .transformDirection(c0[_.SL_TILT])
            .transformDirection(M.matrixWorld),
          V.position.copy(w0),
          V.target.position.copy(w0).addScaledVector(q0, 20),
          (V.intensity = B.searchIntensity * r.searchK * (r.powerOn ? 1 : 0)),
          V.updateMatrixWorld(),
          V.target.updateMatrixWorld(),
          (Y.beam.visible = B.beamK > 0 && V.intensity > 1),
          Y.beam.visible)
        ) {
          (Y.beam.position.copy(w0),
            Ee.setFromUnitVectors(h0.set(0, 0, -1), q0),
            Y.beam.quaternion.copy(Ee));
          const B0 = 45,
            P0 = Math.tan(V.angle * 0.9) * B0;
          (Y.beam.scale.set(P0, P0, B0),
            (Y.beamMat.uniforms.uK.value = B.beamK * r.searchK));
        }
        a.camera.getWorldPosition(h0);
        const M0 = m0(h0.sub(w0).normalize().dot(q0));
        ((Y.flare.visible = V.intensity > 1 && M0 > 0.3),
          Y.flareMat.uniforms.uPos.value.copy(w0).addScaledVector(q0, 0.06),
          (Y.flareMat.uniforms.uK.value =
            r.searchK * (Math.pow(M0, 8) * 2.2 + Math.pow(M0, 3) * 0.15)),
          w0.copy(X.landing).applyMatrix4(M.matrixWorld),
          q0
            .set(0, -Math.sin(28 * U0), Math.cos(28 * U0))
            .transformDirection(M.matrixWorld),
          p0.position.copy(w0),
          p0.target.position.copy(w0).addScaledVector(q0, 10),
          (p0.intensity =
            B.landingIntensity * r.landingK * (r.powerOn ? 1 : 0)),
          p0.updateMatrixWorld(),
          p0.target.updateMatrixWorld());
      } else ((Y.beam.visible = !1), (Y.flare.visible = !1));
    }
    ((r.power = X0(r.power, r.powerOn ? 1 : 0, r.powerOn ? 6 : 10, b)),
      r.powerOn && (r.bootT += b));
    const me = r.power;
    {
      const I = me * (t ? 0.6 : 1);
      (ne[f0.NAV_L].set(4 * I, 0.12 * I, 0.06 * I, 0),
        ne[f0.NAV_R].set(0.1 * I, 3.4 * I, 0.9 * I, 0),
        ne[f0.NAV_TAIL].set(3 * I, 2.9 * I, 2.6 * I, 0));
      const d0 = (Pe) => {
          const G0 = (H * 1.25 + Pe) % 1;
          return r.beacon
            ? Math.pow(Math.max(0, Math.sin(G0 * Math.PI)), 6)
            : 0;
        },
        s0 = d0(0),
        M0 = d0(0.5);
      (ne[f0.BCN_TOP].set(6 * s0, 0.25 * s0, 0.1 * s0, 0),
        ne[f0.BCN_BELLY].set(6 * M0, 0.25 * M0, 0.1 * M0, 0));
      const B0 = H % 1.3,
        P0 =
          r.strobe && r.rpm > 0.3 && (B0 < 0.04 || (B0 > 0.12 && B0 < 0.16))
            ? 1
            : 0;
      (ne[f0.STROBE_L].set(9 * P0, 9 * P0, 9.5 * P0, 0),
        ne[f0.STROBE_R].set(9 * P0, 9 * P0, 9.5 * P0, 0),
        O.U.uLit.value.setRGB(
          0.9 * s0 + 0.5 * P0,
          0.03 * s0 + 0.5 * P0,
          0.02 * s0 + 0.55 * P0,
        ));
      const Me = V ? V.intensity / B.searchIntensity : 0;
      ne[f0.SEARCH].set(6 * Me, 6.3 * Me, 7 * Me, 0);
      const ve = p0 ? p0.intensity / B.landingIntensity : 0;
      (ne[f0.LANDING].set(5 * ve, 4.8 * ve, 4.4 * ve, 0),
        ne[f0.CABIN].set(0.25 * me, 0.02 * me, 0.015 * me, 0));
      const $0 = (Pe, G0, ot, mo, vo, go, xo = 0) => {
        (U[G0].getWorldPosition(h0), Y.setHalo(Pe, h0, ot, mo, vo, go, xo));
      };
      ($0(0, f0.NAV_L, 2.2 * I, 0.06 * I, 0.03 * I, 0.22),
        $0(1, f0.NAV_R, 0.05 * I, 1.8 * I, 0.5 * I, 0.22),
        $0(2, f0.NAV_TAIL, 1.5 * I, 1.45 * I, 1.3 * I, 0.2),
        $0(3, f0.BCN_TOP, 4 * s0, 0.15 * s0, 0.06 * s0, 0.5),
        $0(4, f0.BCN_BELLY, 4 * M0, 0.15 * M0, 0.06 * M0, 0.5),
        $0(5, f0.STROBE_L, 6 * P0, 6 * P0, 6.5 * P0, 0.8, 1),
        $0(6, f0.STROBE_R, 6 * P0, 6 * P0, 6.5 * P0, 0.8, 1),
        $0(7, f0.LANDING, 3 * ve, 2.9 * ve, 2.7 * ve, 0.6, 1));
      const Be = Math.max(0, 1 - (H - r.sparkT) / 0.35);
      Be > 0.01
        ? (J.position.copy(r.sparkPos),
          J.color.setRGB(1, 0.62, 0.3),
          (J.intensity = 60 * Be * Be),
          (J.distance = 12))
        : r.fire > 0.01
          ? (a0.getWorldPosition(J.position),
            J.color.setRGB(1, 0.42, 0.12),
            (J.intensity =
              30 *
              r.fire *
              (0.75 + 0.25 * Math.sin(H * 23) * Math.sin(H * 7.3))),
            (J.distance = 14))
          : (J.intensity = 0);
      {
        r.groundY == null && (r.groundY = y.position.y);
        const Pe = y.position.y - (B.groundY ?? r.groundY),
          G0 = M0 * (1 - j0(0.3, 2.5, Pe));
        ((Y.pool.visible = G0 > 0.003),
          Y.pool.visible &&
            (U[f0.BCN_BELLY].getWorldPosition(Y.pool.position),
            (Y.pool.position.y = (B.groundY ?? r.groundY) + 0.03),
            Y.pool.scale.set(9, 1, 9),
            (Y.poolMat.uniforms.uK.value = 1.6 * G0)));
      }
    }
    if (k) {
      ((k.uTime.value = H), (k.uPower.value = me), (k.uBoot.value = r.bootT));
      const I = M.matrixWorld.elements,
        d0 = Math.hypot(I[8], I[9], I[10]) || 1,
        s0 = Math.hypot(I[0], I[1], I[2]) || 1,
        M0 = Math.asin(m0(I[9] / d0, -1, 1)),
        B0 = Math.asin(m0(I[1] / s0, -1, 1)),
        P0 = Math.atan2(I[8], -I[10]);
      (k.uAtt.value.set(M0, B0, P0, 0),
        k.uAir.value.set(
          Math.max(
            0,
            Math.hypot(r.vel.x, r.vel.z) * 1.944 +
              (r.rpm > 0.5 ? 2 * Math.sin(H * 1.3) : 0),
          ),
          (Se.y + 32) * 3.281,
          r.vel.y * 196.85,
          Math.max(0, Se.y * 3.281),
        ));
      const Me =
          r.rpm * 100 * (1 + 0.004 * Math.sin(H * 3.1)) +
          r.damage * 3 * Math.sin(H * 9),
        ve = (12 + 72 * r.collective) * j0(0.5, 1, r.rpm),
        $0 = r.warn.has("ENG 1 FIRE");
      (k.uEng.value.set(
        Me,
        Me * 0.995,
        ve * (r.n1[0] > 0.5 ? 1 : 0) + ($0 ? 8 * Math.sin(H * 7) : 0),
        ve * (r.n1[1] > 0.5 ? 1 : 0),
      ),
        k.uEng2.value.set(
          r.n1[0] * 100,
          r.n1[1] * 100,
          r.n1[0] > 0.05
            ? 380 + 420 * r.n1[0] + 120 * r.collective + ($0 ? 260 : 0)
            : 22,
          r.n1[1] > 0.05 ? 380 + 420 * r.n1[1] + 120 * r.collective : 22,
        ),
        k.uMisc.value.set(
          Math.max(0, 410 - H * 0.6),
          9,
          r.damage > 0.5 ? (r.damage - 0.5) * 2 : 0,
          1,
        ),
        k.uMap.value.set(Se.x, Se.z, P0, 900));
      const Be = (G0) =>
          r.warn.has(G0)
            ? H - (r.warnT.get(G0) ?? 0) < 4
              ? Math.sin(H * 12) > -0.3
                ? 1
                : 0.15
              : 1
            : 0,
        Pe = r.warn.size ? (Math.sin(H * 9) > 0 ? 1 : 0.1) : 0;
      if (
        (yt.forEach((G0, ot) => {
          k.uWarn.value[ot] = G0 === "MASTER CAUTION" ? Pe : Be(G0);
        }),
        (k.uMC.value = Pe),
        k.uFire.value.set(
          $0 ? (Math.sin(H * 10) > -0.2 ? 1 : 0.1) : 0,
          r.warn.has("ENG 2 FIRE") ? 1 : 0,
        ),
        k.uSmall.value.set(
          H - r.startT[0] < 6 && r.eng[0] ? 1 : 0,
          H - r.startT[1] < 6 && r.eng[1] ? 1 : 0,
          0,
          0,
        ),
        C)
      ) {
        r0.getWorldPosition(C.position);
        const G0 = r.warn.size ? (0.5 + 0.5 * Math.sin(H * 9)) * 0.6 : 0;
        (C.color.copy(ho).lerp(uo, G0 * 0.7),
          (C.intensity =
            B.glowIntensity *
            me *
            j0(0.8, 2.2, r.bootT) *
            (1 + G0 * 0.6) *
            (r.damage > 0.5 ? 0.85 + 0.15 * Math.sin(H * 31) : 1)));
      }
    }
    if (
      ((u.uPanelLight.value =
        me *
        j0(0.3, 1.2, r.bootT) *
        (r.damage > 0.6 ? 0.8 + 0.2 * Math.sin(H * 37) : 1)),
      g)
    ) {
      const I = g.userData.U;
      ((r.crack = X0(r.crack, r.crackGoal, 5, b)),
        (I.uCrack.value = r.crack),
        (I.uPanel.value.w = k ? k.uPower.value * j0(0.8, 2.2, r.bootT) : 0),
        I.uScrRefl.value.set(
          r.warn.size ? 0.6 : 0,
          k ? k.uMC.value : 0,
          k ? k.uAtt.value.y : 0,
          I.uScrRefl.value.w,
        ));
    }
    {
      const I = Math.max(r.smoke, r.fire * 0.8);
      if (I > 0.01)
        for (
          r.emitAcc += b * (8 + 40 * I),
            e0.getWorldPosition(w0),
            q0.set(0.25, 0.9, -0.4).transformDirection(M.matrixWorld);
          r.emitAcc >= 1;
        )
          ((r.emitAcc -= 1),
            h0
              .copy(q0)
              .multiplyScalar(2.5 + n() * 1.5)
              .addScaledVector(r.vel, 0.25),
            (h0.y -= 4 * r.rpm),
            (h0.x += (n() - 0.5) * 0.8),
            (h0.z += (n() - 0.5) * 0.8),
            Y.puff(w0, h0, {
              size: 0.35 + 0.25 * I,
              grow: 1.3 + 0.8 * I,
              life: 2.2 + 1.6 * I,
              op: 0.55 + 0.4 * I,
              heat: r.fire,
            }));
      else r.emitAcc = 0;
      (a0.getWorldPosition(w0),
        q0.copy(r.vel).multiplyScalar(-1),
        Y.update(b, a.camera, {
          fireAt: w0,
          fireK: r.fire,
          fireWind: q0,
          time: H,
          rendererH: a.renderer?.domElement?.height || 900,
        }),
        (u.uBurn.value = Math.max(u.uBurn.value, r.fire * 0.8)));
    }
    if (
      (a.camera.getWorldPosition(h0),
      O.mesh.getWorldPosition(w0),
      q0.set(0, 1, 0).transformDirection(M.matrixWorld),
      (O.mesh.renderOrder = h0.sub(w0).dot(q0) > 0 ? 7 : 4),
      !N0)
    )
      for (const I of Object.values(i0)) I.intensity = 0;
    (w0.copy(Se), (w0.y += 2.2));
    const tt =
      Math.max(r.doorK[0], r.doorK[1], r.doorK[2] * 0.8, r.doorK[3] * 0.8) *
      m0(0.15 + r.speed / 35) *
      (r.rpm > 0.2 ? 1 : 0.2);
    k0.update(b, {
      rpm: r.rpm,
      n1: Math.max(r.n1[0], r.n1[1]),
      wind: tt,
      horn: r.warn.has("LOW ROTOR RPM"),
      bell: r.warn.has("ENG 1 FIRE") || r.warn.has("ENG 2 FIRE"),
      grind: r.broken ? r.grind : 0,
      pos: w0,
    });
  }),
    (B.warm = () => {
      Y.group.visible = !0;
      for (const b of [
        O.mesh,
        q.mesh,
        Y.smokeMesh,
        Y.sparkMesh,
        Y.fireMesh,
        Y.beam,
        Y.flare,
        Y.pool,
        Y.halos,
      ])
        b.visible = !0;
    }));
  const _t = u.uViewToRest.value;
  return (
    (N.onBeforeRender = (b, K, H) => {
      (_t.copy(M.matrixWorld).invert().multiply(H.matrixWorld),
        g && g.userData.U.uCamRest.value.setFromMatrixPosition(_t),
        u.uDoorsOpen.value.set(
          Math.min(1, r.doorK[0] * 4),
          Math.min(1, r.doorK[1] * 4),
          Math.min(1, r.doorK[2] * 3),
          Math.min(1, r.doorK[3] * 3),
        ));
    }),
    D && (D.onBeforeRender = N.onBeforeRender),
    L &&
      (L.onBeforeRender = (b, K, H) => {
        (z0.copy(M.matrixWorld).invert().multiply(H.matrixWorld),
          g.userData.U.uCamRest.value.setFromMatrixPosition(z0));
      }),
    (B.dispose = () => {
      for (const b of [N, D, u0, L, T, O.mesh, q.mesh])
        b && (b.geometry.dispose(), b.material.dispose());
      (v.userData.depth.dispose(),
        v.userData.distance.dispose(),
        Y.dispose(),
        k0.dispose());
      for (const b of Object.values(i0))
        (o.remove(b), b.target && o.remove(b.target));
      (y.parent?.remove(y), $.parent?.remove($));
    }),
    (B.buildMs = Math.round(performance.now() - c)),
    B.update(0, {}),
    B
  );
}
function On(e, l) {
  const a = l
    ? [
        ["army", [-4.4, 1.86, -3, 2.08], 0],
        ["armynum", [-7.05, 2.55, -6.45, 2.8], -1],
        ["star", [0.35, 1.25, 0.8, 1.7], 0],
        ["star", [-1.75, 1.32, -1.3, 1.77], 0],
        ["danger", [-6.1, 1.88, -5.62, 2.02], 0],
      ]
    : [
        ["airrescue", [-4.55, 1.86, -2.62, 2.07], 0],
        ["callsign", [-7.04, 2.5, -6.52, 2.66], 0],
        ["reg", [-2.02, 2.3, -1.12, 2.43], 0],
        ["crest", [1.42, 0.86, 1.68, 1.12], 0],
        ["emergency", [-0.48, 1.17, 0.78, 1.255], 0],
        ["danger", [-6.12, 1.88, -5.64, 2], 0],
        ["cut", [-1.98, 1.96, -1.84, 2.1], 0],
        ["nostep", [-1.6, 2.44, -1.25, 2.52], 0],
        ["rescueArrow", [-1.85, 1.16, -1.05, 1.24], 0],
      ];
  for (let o = 0; o < Ce; o++) {
    const t = a[o];
    if (!t) {
      e.uDecS.value[o].set(0, 0, 0, 0);
      continue;
    }
    const s = Fe[t[0]] || [0, 0, 0, 0];
    (e.uDecP.value[o].set(t[1][0], t[1][1], t[1][2], t[1][3]),
      e.uDecU.value[o].set(s[0], s[1], s[2], s[3]),
      e.uDecS.value[o].set(t[2], 1, 0, 0));
  }
}
function In(e) {
  const l = [],
    a = [],
    o = [],
    t = [];
  let s = 0;
  for (const c of e) {
    const i = c.attributes.position,
      d = c.attributes.uv,
      f = c.attributes.aScr;
    for (let p = 0; p < i.count; p++)
      (l.push(i.getX(p), i.getY(p), i.getZ(p)),
        a.push(d.getX(p), d.getY(p)),
        o.push(f.getX(p)));
    for (const p of c.index.array) t.push(p + s);
    ((s += i.count), c.dispose());
  }
  const n = new K0();
  return (
    n.setAttribute("position", new L0(l, 3)),
    n.setAttribute("uv", new L0(a, 2)),
    n.setAttribute("aScr", new L0(o, 1)),
    n.setIndex(t),
    n.computeBoundingSphere(),
    n
  );
}
export { Fn as c };
