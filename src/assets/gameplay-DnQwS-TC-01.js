// assets/gameplay-DnQwS-TC 01 — float32array
// Lines 1-216 of readable/assets/gameplay-DnQwS-TC.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-Db-AsSxU.js",
      "./index-DaQlAVPp.js",
      "./anim-B86X8yU9.js",
      "./lightrig-BOum5aAY.js",
      "./zombie_stub-3Vfgk-wH.js",
      "./script3-CjSek-Nt.js",
      "./index-TPd_HXBJ.js",
      "./RoundedBoxGeometry-D0zz8qHa.js",
      "./index-DQDjAbEY.js",
      "./kit-CwMQzO5T.js",
      "./district-BhfbivMT.js",
      "./plan3-BlRgM2iV.js",
      "./kit-CFeM0oZ2.js",
      "./hatch-Vg74Rrkt.js",
      "./furniture-BraVmmRV.js",
      "./script2-Chjgntzz.js",
      "./bot-D6vJ5k-G.js",
    ]),
) => i.map((i) => d[i]);
import {
  G as de,
  S as ws,
  A as ke,
  C as Me,
  a as ms,
  P as zs,
  M as qt,
  b as Ke,
  c as Vt,
  d as _s,
  O as ys,
  B as Je,
  V as pt,
  L as Ss,
  e as Ts,
  f as ts,
  g as gs,
  N as As,
  h as ue,
  D as We,
  i as bs,
  j as Ps,
  k as Rs,
  Q as ze,
  _ as fe,
  l as Ws,
  m as Xe,
  n as Cs,
  o as It,
  E as pe,
  p as vs,
  q as Ls,
  T as Ds,
  r as ie,
  s as wt,
  t as Ee,
  u as Ce,
  F as Is,
  v as Ks,
  W as Fs,
  w as Oe,
  R as le,
  x as Gs,
  y as Bs,
  z as Us,
  H as qs,
} from "./index-DaQlAVPp.js";
import { r as xs, N as Vs } from "./nav-DkEG8EU-.js";
import { W as Le } from "./anim-B86X8yU9.js";
import {
  b as Es,
  G as Ye,
  h as Os,
  a as Ys,
  c as Hs,
} from "./akane-CN21eJhw.js";
import "./lightrig-BOum5aAY.js";
import "./RoundedBoxGeometry-D0zz8qHa.js";
import "./BufferGeometryUtils-Qxvmd-vM.js";
const Yt = pt,
  D = (o = 0, t = 1) => o + Math.random() * (t - o);
function he(o, t, i, e = !0) {
  const s = document.createElement("canvas");
  ((s.width = o), (s.height = t), i(s.getContext("2d"), o, t));
  const l = new ts(s);
  return ((l.colorSpace = e ? gs : As), (l.anisotropy = 4), l);
}
const js = `
attribute float aSize; attribute vec4 aCol; attribute float aRot;
varying vec4 vCol; varying float vRot;
uniform float uScale;
void main() {
  vCol = aCol; vRot = aRot;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uScale / max(0.05, -mv.z);
}`,
  Ns = `
varying vec4 vCol; varying float vRot;
uniform sampler2D uTex;
void main() {
  vec2 q = gl_PointCoord - 0.5; float cr = cos(vRot), sr = sin(vRot);
  vec4 t = texture2D(uTex, vec2(cr * q.x - sr * q.y, sr * q.x + cr * q.y) + 0.5);
  gl_FragColor = vec4(vCol.rgb, vCol.a * t.a);
  if (gl_FragColor.a < 0.004) discard;
}`;
class He {
  constructor(t, i, e) {
    ((this.max = t),
      (this.n = 0),
      (this.pos = new Float32Array(t * 3)),
      (this.vel = new Float32Array(t * 3)),
      (this.age = new Float32Array(t)),
      (this.life = new Float32Array(t)),
      (this.size0 = new Float32Array(t)),
      (this.size1 = new Float32Array(t)),
      (this.grav = new Float32Array(t)),
      (this.drag = new Float32Array(t)),
      (this.col0 = new Float32Array(t * 4)),
      (this.col1 = new Float32Array(t * 4)),
      (this.aSize = new Float32Array(t)),
      (this.aCol = new Float32Array(t * 4)),
      (this.rot0 = new Float32Array(t)),
      (this.aRot = new Float32Array(t)));
    const s = new Je();
    (s.setAttribute("position", new ue(this.pos, 3).setUsage(We)),
      s.setAttribute("aSize", new ue(this.aSize, 1).setUsage(We)),
      s.setAttribute("aCol", new ue(this.aCol, 4).setUsage(We)),
      s.setAttribute("aRot", new ue(this.aRot, 1).setUsage(We)),
      s.setDrawRange(0, 0),
      (this.mat = new bs({
        vertexShader: js,
        fragmentShader: Ns,
        transparent: !0,
        depthWrite: !1,
        fog: !1,
        toneMapped: !1,
        blending: i ? ke : Ps,
        uniforms: { uTex: { value: e }, uScale: { value: 900 } },
      })),
      (this.points = new Rs(s, this.mat)),
      (this.points.frustumCulled = !1),
      (this.points.renderOrder = i ? 30 : 25),
      (this.geo = s));
  }
  spawn(t, i, e) {
    const s =
      this.n < this.max
        ? this.n++
        : (this._ring = ((this._ring ?? -1) + 1) % this.max);
    (this.pos.set(t, s * 3),
      this.vel.set(i, s * 3),
      (this.age[s] = 0),
      (this.life[s] = e.life),
      (this.size0[s] = e.size0),
      (this.size1[s] = e.size1 ?? e.size0),
      (this.grav[s] = e.grav ?? 0),
      (this.drag[s] = e.drag ?? 0),
      (this.rot0[s] = e.rot ?? Math.random() * 6.283),
      this.col0.set(e.c0, s * 4),
      this.col1.set(e.c1 ?? [e.c0[0], e.c0[1], e.c0[2], 0], s * 4));
  }
  update(t, i = 0) {
    let e = 0;
    for (let s = 0; s < this.n; s++) {
      const l = (this.age[s] += t);
      if (l >= this.life[s]) continue;
      const n = l / this.life[s],
        r = s * 3,
        h = s * 4,
        a = Math.exp(-this.drag[s] * t);
      ((this.vel[r] *= a),
        (this.vel[r + 1] = this.vel[r + 1] * a - this.grav[s] * t),
        (this.vel[r + 2] *= a),
        (this.pos[r] += this.vel[r] * t),
        (this.pos[r + 1] += this.vel[r + 1] * t),
        (this.pos[r + 2] += this.vel[r + 2] * t),
        this.grav[s] > 0 &&
          this.pos[r + 1] < i + 0.01 &&
          ((this.pos[r + 1] = i + 0.01),
          (this.vel[r] *= 0.2),
          (this.vel[r + 1] = 0),
          (this.vel[r + 2] *= 0.2)),
        e !== s &&
          (this.pos.copyWithin(e * 3, r, r + 3),
          this.vel.copyWithin(e * 3, r, r + 3),
          (this.age[e] = this.age[s]),
          (this.life[e] = this.life[s]),
          (this.size0[e] = this.size0[s]),
          (this.size1[e] = this.size1[s]),
          (this.grav[e] = this.grav[s]),
          (this.drag[e] = this.drag[s]),
          (this.rot0[e] = this.rot0[s]),
          this.col0.copyWithin(e * 4, h, h + 4),
          this.col1.copyWithin(e * 4, h, h + 4)),
        (this.aSize[e] = this.size0[e] + (this.size1[e] - this.size0[e]) * n),
        (this.aRot[e] = this.rot0[e] + n * 0.7));
      for (let y = 0; y < 4; y++)
        this.aCol[e * 4 + y] =
          this.col0[e * 4 + y] +
          (this.col1[e * 4 + y] - this.col0[e * 4 + y]) * n;
      e++;
    }
    ((this.n = e),
      this.geo.setDrawRange(0, e),
      (this.geo.attributes.position.needsUpdate = !0),
      (this.geo.attributes.aSize.needsUpdate = !0),
      (this.geo.attributes.aCol.needsUpdate = !0),
      (this.geo.attributes.aRot.needsUpdate = !0));
  }
}
