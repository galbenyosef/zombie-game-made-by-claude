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
function $s(o) {
  const t = o.scene,
    i = new de();
  ((i.name = "fx"), t.add(i));
  const e = he(
      64,
      64,
      (u, m, d) => {
        const x = u.createRadialGradient(m / 2, d / 2, 0, m / 2, d / 2, m / 2);
        (x.addColorStop(0, "rgba(255,255,255,1)"),
          x.addColorStop(0.4, "rgba(255,255,255,0.5)"),
          x.addColorStop(1, "rgba(255,255,255,0)"),
          (u.fillStyle = x),
          u.fillRect(0, 0, m, d));
      },
      !1,
    ),
    s = he(
      128,
      128,
      (u, m, d) => {
        let x = 7;
        const A = () => ((x = (x * 16807) % 2147483647), x / 2147483647);
        for (let Z = 0; Z < 22; Z++) {
          const $ = A() * 6.283,
            lt = Math.sqrt(A()) * m * 0.26,
            zt = m / 2 + Math.cos($) * lt,
            ot = d / 2 + Math.sin($) * lt,
            Ft = m * (0.1 + A() * 0.16),
            p = u.createRadialGradient(zt, ot, 0, zt, ot, Ft);
          (p.addColorStop(0, "rgba(255,255,255,0.30)"),
            p.addColorStop(0.55, "rgba(255,255,255,0.12)"),
            p.addColorStop(1, "rgba(255,255,255,0)"),
            (u.fillStyle = p),
            u.fillRect(0, 0, m, d));
        }
        u.globalCompositeOperation = "destination-in";
        const q = u.createRadialGradient(m / 2, d / 2, 0, m / 2, d / 2, m / 2);
        (q.addColorStop(0, "rgba(0,0,0,1)"),
          q.addColorStop(0.6, "rgba(0,0,0,0.7)"),
          q.addColorStop(1, "rgba(0,0,0,0)"),
          (u.fillStyle = q),
          u.fillRect(0, 0, m, d));
      },
      !1,
    ),
    l = he(
      32,
      32,
      (u, m, d) => {
        ((u.fillStyle = "rgba(255,255,255,1)"),
          u.beginPath(),
          u.arc(m / 2, d / 2, m * 0.36, 0, 7),
          u.fill(),
          (u.filter = "blur(2px)"),
          u.fill());
      },
      !1,
    ),
    n = new He(700, !1, s),
    r = new He(300, !0, e),
    h = new He(500, !1, l);
  i.add(n.points, r.points, h.points);
  const a = he(
      128,
      128,
      (u, m, d) => {
        u.translate(m / 2, d / 2);
        const x = u.createRadialGradient(0, 0, 0, 0, 0, m / 2);
        (x.addColorStop(0, "rgba(255,255,255,1)"),
          x.addColorStop(0.25, "rgba(255,200,120,0.85)"),
          x.addColorStop(1, "rgba(255,120,30,0)"),
          (u.fillStyle = x),
          u.fillRect(-m / 2, -d / 2, m, d),
          (u.globalCompositeOperation = "lighter"));
        for (let A = 0; A < 7; A++) {
          (u.save(), u.rotate((A / 7) * Math.PI * 2 + 0.3));
          const q = m * (0.25 + (0.2 * ((A * 37) % 5)) / 5),
            Z = u.createLinearGradient(0, 0, q, 0);
          (Z.addColorStop(0, "rgba(255,230,180,0.9)"),
            Z.addColorStop(1, "rgba(255,140,40,0)"),
            (u.fillStyle = Z),
            u.beginPath(),
            u.moveTo(0, -3),
            u.lineTo(q, 0),
            u.lineTo(0, 3),
            u.fill(),
            u.restore());
        }
      },
      !1,
    ),
    y = new ws({
      map: a,
      color: new Me().setRGB(4, 2.6, 1.4),
      blending: ke,
      depthWrite: !1,
      transparent: !0,
      toneMapped: !1,
      fog: !1,
    }),
    g = [];
  for (let u = 0; u < 3; u++) {
    const m = new ms(y.clone());
    ((m.visible = !1), m.scale.setScalar(0.3), (m.renderOrder = 40), i.add(m));
    const d = new zs(16756832, 0, 9, 2);
    ((d.userData.noActor = !0),
      i.add(d),
      g.push({ sp: m, li: d, t: 9, dur: 0.07, k: 1 }));
  }
  let w = 0;
  const _ = new qt({ color: 11569722, metalness: 1, roughness: 0.32 }),
    c = new Ke(0.0046, 0.0046, 0.019, 8);
  c.rotateZ(Math.PI / 2);
  const k = [];
  for (let u = 0; u < 14; u++) {
    const m = new Vt(c, _);
    ((m.visible = !1),
      (m.castShadow = !0),
      i.add(m),
      k.push({
        m,
        v: new Yt(),
        w: new Yt(),
        life: 0,
        bounced: 0,
        deck: null,
        lp: new Yt(),
        floor: 0,
      }));
  }
  let K = 0;
  const Y = new ze(),
    F = new Yt(),
    X = he(128, 128, (u, m, d) => {
      u.clearRect(0, 0, m, d);
      const x = u.createRadialGradient(m / 2, d / 2, 2, m / 2, d / 2, m * 0.46);
      (x.addColorStop(0, "rgba(6,5,5,1)"),
        x.addColorStop(0.3, "rgba(10,8,7,0.95)"),
        x.addColorStop(0.55, "rgba(30,24,20,0.5)"),
        x.addColorStop(1, "rgba(30,24,20,0)"),
        (u.fillStyle = x),
        u.beginPath(),
        u.arc(m / 2, d / 2, m * 0.46, 0, 7),
        u.fill(),
        (u.strokeStyle = "rgba(20,16,14,0.5)"),
        (u.lineWidth = 1));
      for (let A = 0; A < 9; A++) {
        const q = A * 0.7 + 0.2,
          Z = 18 + ((A * 53) % 26);
        (u.beginPath(),
          u.moveTo(m / 2, d / 2),
          u.lineTo(m / 2 + Math.cos(q) * Z, d / 2 + Math.sin(q) * Z),
          u.stroke());
      }
    }),
    J = new qt({
      map: X,
      transparent: !0,
      depthWrite: !1,
      roughness: 1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    }),
    U = (u) =>
      he(256, 256, (m, d, x) => {
        m.clearRect(0, 0, d, x);
        let A = u * 9301 + 49297;
        const q = () => ((A = (A * 9301 + 49297) % 233280), A / 233280);
        for (let Z = 0; Z < 46; Z++) {
          const $ = q() * 6.283,
            lt = Math.pow(q(), 0.6) * 100,
            zt = 3 + q() * (Z < 8 ? 34 : 10) * (1 - lt / 140);
          ((m.fillStyle = `rgba(${(44 + q() * 26) | 0},${(4 + q() * 4) | 0},${(6 + q() * 6) | 0},${0.65 + q() * 0.3})`),
            m.beginPath(),
            m.arc(d / 2 + Math.cos($) * lt, x / 2 + Math.sin($) * lt, zt, 0, 7),
            m.fill());
        }
      }),
    N = [U(1), U(2), U(3)].map(
      (u) =>
        new qt({
          map: u,
          transparent: !0,
          depthWrite: !1,
          roughness: 0.28,
          metalness: 0,
          polygonOffset: !0,
          polygonOffsetFactor: -3,
          polygonOffsetUnits: -3,
          envMapIntensity: 0.8,
        }),
    ),
    T = new _s(1, 1),
    f = [];
  for (let u = 0; u < 60; u++) {
    const m = new Vt(T, J);
    ((m.visible = !1), (m.receiveShadow = !1), i.add(m), f.push(m));
  }
  let b = 0;
  const L = new ys(),
    v = new Yt(0, 0, 1);
  function R(u, m, d, x) {
    const A = f[b++ % f.length];
    return (
      (A.material = x),
      (A.visible = !0),
      A.position.copy(u).addScaledVector(m, 0.004),
      L.position.copy(A.position),
      L.quaternion.setFromUnitVectors(v, m),
      L.rotateZ(D(0, 6.28)),
      A.quaternion.copy(L.quaternion),
      A.scale.setScalar(d),
      A
    );
  }
  const W = [];
  for (let u = 0; u < 8; u++) {
    const m = new Je().setFromPoints([new Yt(), new Yt(0, 0, 1)]),
      d = new Ss(
        m,
        new Ts({
          color: new Me().setRGB(3, 2.3, 1.2),
          transparent: !0,
          opacity: 0.7,
          blending: ke,
          depthWrite: !1,
          toneMapped: !1,
          fog: !1,
        }),
      );
    ((d.visible = !1),
      (d.frustumCulled = !1),
      i.add(d),
      W.push({ ln: d, t: 9 }));
  }
  let C = 0;
  const j = {
    root: i,
    tracer(u, m) {
      const d = W[C++ % W.length],
        x = d.ln.geometry.attributes.position,
        A = new Yt().subVectors(m, u),
        q = Math.min(A.length(), 60),
        Z = u.clone().addScaledVector(A.normalize(), Math.min(0.3, q));
      (x.setXYZ(0, Z.x, Z.y, Z.z),
        x.setXYZ(
          1,
          Z.x + A.x * Math.min(q, 14),
          Z.y + A.y * Math.min(q, 14),
          Z.z + A.z * Math.min(q, 14),
        ),
        (x.needsUpdate = !0),
        (d.ln.visible = !0),
        (d.t = 0));
    },
    muzzleFlash(u, m, d = 1) {
      const x = g[w++ % g.length];
      (x.sp.position.copy(u).addScaledVector(m, 0.03),
        x.sp.scale.setScalar(D(0.22, 0.34) * d),
        (x.sp.material.rotation = D(0, 6.28)),
        (x.sp.visible = !0),
        x.li.position.copy(u).addScaledVector(m, 0.12),
        (x.li.intensity = 120 * d * (this.flashK ?? 1)),
        (x.t = 0),
        (x.dur = 0.075));
      for (let A = 0; A < 6; A++)
        r.spawn(
          [u.x + m.x * 0.05, u.y + m.y * 0.05, u.z + m.z * 0.05],
          [
            m.x * D(2, 6) + D(-1.5, 1.5),
            m.y * D(2, 6) + D(-1, 2),
            m.z * D(2, 6) + D(-1.5, 1.5),
          ],
          {
            life: D(0.08, 0.18),
            size0: 0.05,
            size1: 0.01,
            c0: [3, 1.8, 0.6, 1],
            c1: [1.6, 0.5, 0.1, 0],
            grav: 4,
          },
        );
      for (let A = 0; A < 4; A++)
        n.spawn(
          [u.x + m.x * 0.08, u.y + m.y * 0.08, u.z + m.z * 0.08],
          [
            m.x * D(0.3, 1.4) + D(-0.25, 0.25),
            m.y * D(0.3, 1.4) + D(0.15, 0.6),
            m.z * D(0.3, 1.4) + D(-0.25, 0.25),
          ],
          {
            life: D(0.9, 1.7),
            size0: 0.05,
            size1: 0.22,
            c0: [0.2, 0.2, 0.21, 0.3],
            c1: [0.14, 0.14, 0.15, 0],
            drag: 1.6,
          },
        );
    },
    casing(u, m, d = new Yt(0, 1, 0)) {
      const x = k[K++ % k.length];
      ((x.m.visible = !0),
        x.m.position.copy(u),
        x.v
          .copy(m)
          .multiplyScalar(D(1.4, 2.1))
          .addScaledVector(d, D(1.4, 2.4))
          .addScaledVector(new Yt(m.z, 0, -m.x), D(-0.4, 0.4)),
        x.w.set(D(-20, 20), D(-20, 20), D(-20, 20)),
        (x.life = 3.5),
        (x.bounced = 0),
        x.m.rotation.set(D(0, 6), D(0, 6), D(0, 6)));
      const A = o.player?.deck,
        q = o.player?.pos,
        Z = o.world?.groundAt,
        $ = Z ? Z(u.x, u.z, u.y - 1.2) : null;
      ((x.deck = null),
        (x.floor =
          ($ != null && $ < u.y
            ? $
            : q && Math.abs(q.y - u.y) < 2.5
              ? q.y
              : 0) + 0.005),
        A &&
          (F.copy(u),
          A.frame.worldToLocal(F),
          Math.abs(F.x) < 10 &&
            Math.abs(F.z) < 1.7 &&
            F.y > A.floorY - 0.5 &&
            F.y < A.floorY + 3 &&
            ((x.deck = A.frame),
            x.lp.copy(F),
            (x.floor = A.floorY + 0.005),
            x.v.applyQuaternion(
              Y.setFromRotationMatrix(A.frame.matrixWorld).invert(),
            ))));
    },
    impactWorld(u, m, d = [0.5, 0.45, 0.4]) {
      R(u, m, D(0.07, 0.1), J);
      for (let x = 0; x < 9; x++)
        n.spawn(
          [u.x, u.y, u.z],
          [
            m.x * D(0.3, 1.6) + D(-0.6, 0.6),
            m.y * D(0.3, 1.6) + D(-0.2, 0.9),
            m.z * D(0.3, 1.6) + D(-0.6, 0.6),
          ],
          {
            life: D(0.5, 1.1),
            size0: 0.03,
            size1: 0.13,
            c0: [d[0] * 0.4, d[1] * 0.4, d[2] * 0.4, 0.42],
            c1: [d[0] * 0.3, d[1] * 0.3, d[2] * 0.3, 0],
            drag: 2.2,
          },
        );
      for (let x = 0; x < 5; x++)
        r.spawn(
          [u.x, u.y, u.z],
          [
            m.x * D(1, 4) + D(-2, 2),
            m.y * D(1, 4) + D(-1, 2),
            m.z * D(1, 4) + D(-2, 2),
          ],
          {
            life: D(0.12, 0.3),
            size0: 0.022,
            size1: 0.005,
            c0: [3.2, 2.2, 1, 1],
            c1: [1.5, 0.5, 0.1, 0],
            grav: 9,
          },
        );
    },
    sparks(u, m = null, d = 8, x = 1.6) {
      for (let A = 0; A < d; A++)
        r.spawn(
          [u.x, u.y, u.z],
          [
            (m?.x || 0) + D(-x, x),
            (m?.y || 0) + D(0.2, 2.2),
            (m?.z || 0) + D(-x, x),
          ],
          {
            life: D(0.12, 0.42),
            size0: D(0.014, 0.026),
            size1: 0.004,
            c0: [3.6, 2.3, 0.9, 1],
            c1: [1.7, 0.45, 0.08, 0],
            grav: 9.8,
            drag: 0.6,
          },
        );
    },
    impactBody(u, m, d = 1) {
      const x = Math.round(22 * d);
      for (let A = 0; A < x; A++)
        h.spawn(
          [u.x, u.y, u.z],
          [
            m.x * D(0.8, 3.2) + D(-1.1, 1.1),
            m.y * D(0.3, 2.2) + D(0, 1.6),
            m.z * D(0.8, 3.2) + D(-1.1, 1.1),
          ],
          {
            life: D(0.5, 1.1),
            size0: D(0.03, 0.06),
            size1: 0.03,
            c0: [0.27, 0.02, 0.03, 0.95],
            c1: [0.16, 0.01, 0.02, 0.8],
            grav: 9.8,
            drag: 0.4,
          },
        );
      for (let A = 0; A < 4; A++)
        n.spawn(
          [u.x, u.y, u.z],
          [
            m.x * D(0.2, 0.9) + D(-0.3, 0.3),
            D(0.1, 0.5),
            m.z * D(0.2, 0.9) + D(-0.3, 0.3),
          ],
          {
            life: D(0.5, 0.9),
            size0: 0.05,
            size1: 0.2,
            c0: [0.28, 0.03, 0.04, 0.35],
            c1: [0.2, 0.02, 0.03, 0],
            drag: 2,
          },
        );
    },
    bloodPool(u, m = 0.6) {
      const d = f[b++ % f.length];
      ((d.material = N[Math.floor(Math.random() * N.length)]),
        (d.visible = !0),
        d.position.set(u.x, (u.y || 0) + 0.006, u.z),
        d.rotation.set(-Math.PI / 2, 0, D(0, 6.28)),
        d.scale.setScalar(m));
    },
    floorSplat(u, m = 0.4) {
      j.bloodPool(
        { x: u.x + D(-0.25, 0.25), z: u.z + D(-0.25, 0.25) },
        m * D(0.6, 1.2),
      );
    },
    dust(u, m = 0.5, d = 1) {
      const x = Math.round(16 * d);
      for (let A = 0; A < x; A++) {
        const q = D(0, 6.283),
          Z = Math.sqrt(Math.random()) * m,
          $ = D(0.25, 0.9);
        n.spawn(
          [u.x + Math.cos(q) * Z, u.y + D(0, 0.12), u.z + Math.sin(q) * Z],
          [Math.cos(q) * $, D(0.04, 0.4), Math.sin(q) * $],
          {
            life: D(1, 2),
            size0: D(0.1, 0.18),
            size1: D(0.4, 0.7),
            c0: [0.075, 0.07, 0.065, 0.3],
            c1: [0.06, 0.058, 0.055, 0],
            drag: 2.6,
          },
        );
      }
    },
    update(u) {
      for (const d of W)
        d.ln.visible &&
          ((d.t += u),
          (d.ln.material.opacity = Math.max(0, 0.7 - d.t * 14)),
          d.t > 0.05 && (d.ln.visible = !1));
      for (const d of g)
        if (d.t < d.dur) {
          d.t += u;
          const x = 1 - d.t / d.dur;
          ((d.li.intensity = Math.max(0, 120 * x * x)),
            (d.sp.material.opacity = Math.max(0, x)),
            d.t >= d.dur && ((d.sp.visible = !1), (d.li.intensity = 0)));
        }
      for (const d of k) {
        if (!d.m.visible) continue;
        if (((d.life -= u), d.life <= 0)) {
          d.m.visible = !1;
          continue;
        }
        const x = d.deck ? d.lp : d.m.position;
        ((d.v.y -= 9.8 * u),
          x.addScaledVector(d.v, u),
          (d.m.rotation.x += d.w.x * u),
          (d.m.rotation.y += d.w.y * u),
          (d.m.rotation.z += d.w.z * u),
          x.y < d.floor &&
            ((x.y = d.floor),
            d.bounced < 3 && Math.abs(d.v.y) > 0.5
              ? ((d.v.y *= -0.32),
                (d.v.x *= 0.5),
                (d.v.z *= 0.5),
                d.w.multiplyScalar(0.5),
                d.bounced === 0 &&
                  o.audio &&
                  (d.deck &&
                    d.m.position.copy(x).applyMatrix4(d.deck.matrixWorld),
                  o.audio.play("shell_drop", {
                    pos: [
                      d.m.position.x,
                      d.m.position.y + 0.015,
                      d.m.position.z,
                    ],
                    vol: 0.35,
                    rate: D(0.9, 1.15),
                  })),
                d.bounced++)
              : (d.v.set(0, 0, 0), d.w.set(0, 0, 0))),
          d.deck && d.m.position.copy(x).applyMatrix4(d.deck.matrixWorld));
      }
      (n.update(u), r.update(u), h.update(u));
      const m = o.post.size.y / (2 * Math.tan((o.camera.fov * Math.PI) / 360));
      n.mat.uniforms.uScale.value =
        r.mat.uniforms.uScale.value =
        h.mat.uniforms.uScale.value =
          m;
    },
  };
  return j;
}
const Qs = `
#hud { font-family: 'Georgia', 'Times New Roman', serif; color: #efe3d4; user-select: none; }
#hud .sub { position: absolute; left: 50%; bottom: 11%; transform: translateX(-50%); max-width: min(72vw, 900px); text-align: center; font-size: clamp(19px, 2.3vw, 34px);
  font-style: italic; letter-spacing: 0.02em; line-height: 1.25; padding: 0.35em 1.2em; opacity: 0; transition: opacity 0.25s ease;
  text-shadow: 0 0 14px rgba(0,0,0,0.95), 0 2px 3px rgba(0,0,0,0.9), 0 0 2px #000; }
#hud .sub.on { opacity: 1; }
#hud .sub.thought { color: #b8c2cc; font-size: clamp(17px, 2.0vw, 30px); letter-spacing: 0.05em; }
#hud .sub b { display: block; font-style: normal; font-weight: 400; font-size: 0.42em; letter-spacing: 0.42em; color: #d1394a; margin-bottom: 0.15em; text-transform: uppercase; }
#hud .prompt { position: absolute; left: 50%; top: 58%; transform: translate(-50%, 0) scale(0.9); opacity: 0; transition: opacity 0.15s ease, transform 0.15s ease; display: flex; align-items: center; gap: 12px; }
#hud .prompt.on { opacity: 1; transform: translate(-50%, 0) scale(1); }
#hud .prompt .key { width: 44px; height: 44px; border-radius: 50%; border: 2px solid #efe3d4; display: flex; align-items: center; justify-content: center; font: 700 21px 'Georgia', serif;
  background: rgba(10,6,6,0.55); box-shadow: 0 0 18px rgba(0,0,0,0.7), inset 0 0 8px rgba(255,255,255,0.1); }
#hud .prompt svg { width: 34px; height: 34px; filter: drop-shadow(0 0 6px rgba(0,0,0,0.9)); }
#hud .cross { position: absolute; left: 50%; top: 50%; width: 30px; height: 30px; margin: -15px 0 0 -15px; opacity: 0; transition: opacity 0.2s, transform 0.08s; }
#hud .cross.on { opacity: 0.85; }
#hud .cross i { position: absolute; background: #efe3d4; box-shadow: 0 0 4px #000; }
#hud .cross i:nth-child(1) { left: 14px; top: 0; width: 2px; height: 8px; } #hud .cross i:nth-child(2) { left: 14px; bottom: 0; width: 2px; height: 8px; }
#hud .cross i:nth-child(3) { top: 14px; left: 0; height: 2px; width: 8px; } #hud .cross i:nth-child(4) { top: 14px; right: 0; height: 2px; width: 8px; }
#hud .cross i:nth-child(5) { left: 14px; top: 14px; width: 2px; height: 2px; }
#hud .hitm { position: absolute; left: 50%; top: 50%; width: 26px; height: 26px; margin: -13px 0 0 -13px; opacity: 0; pointer-events: none; }
#hud .hitm i { position: absolute; left: 12px; top: 0; width: 2px; height: 9px; background: #fff; box-shadow: 0 0 4px #000; }
#hud .hitm.on { animation: hitm 0.22s ease-out; }
#hud .hitm.head i { background: #ff4a4a; }
@keyframes hitm { 0% { opacity: 1; transform: scale(0.7); } 100% { opacity: 0; transform: scale(1.35); } }
#hud .ammo { position: absolute; right: 4.5%; bottom: 6%; display: flex; gap: 5px; align-items: flex-end; opacity: 0; transition: opacity 0.4s; filter: drop-shadow(0 0 5px rgba(0,0,0,0.9)); }
#hud .ammo.on { opacity: 1; }
#hud .ammo svg { width: 11px; height: 30px; } #hud .ammo svg.spent { opacity: 0.22; }
#hud .ammo .res { font-size: 15px; letter-spacing: 0.1em; margin-left: 8px; color: #b9a99a; align-self: center; }
#hud .card { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; transition: opacity 1.6s ease; pointer-events: none; text-align: center; }
#hud .card.on { opacity: 1; }
#hud .card h2 { font-weight: 400; letter-spacing: 0.6em; margin: 0 0 0 0.6em; font-size: clamp(22px, 3.6vw, 56px); color: #d9c7b8; text-shadow: 0 0 30px #7a1010; }
#hud .card p { margin: 1.1em 0 0; letter-spacing: 0.35em; font-size: 14px; color: #8a7466; text-transform: uppercase; }
#hud .vitals { position: absolute; left: 3.2%; bottom: 5.5%; opacity: 0; transition: opacity 0.6s; pointer-events: none; font-size: 11px; letter-spacing: 0.32em; color: #b9a99a; text-shadow: 0 0 6px #000; }
#hud .vitals.on { opacity: 0.95; }
#hud .vitals div { display: flex; align-items: center; gap: 7px; margin-top: 7px; }
#hud .vitals span { width: 64px; }
#hud .vitals i { width: 11px; height: 11px; transform: rotate(45deg); border: 1.5px solid #d9c7b8; box-shadow: 0 0 5px #000; transition: background 0.25s, border-color 0.25s; }
#hud .vitals i.full { background: #b8202c; border-color: #e8c0b0; }
#hud .vitals div.crit span { color: #ff5a5a; animation: vcrit 0.7s ease-in-out infinite alternate; }
@keyframes vcrit { from { opacity: 1; } to { opacity: 0.35; } }
#hud .hint { position: absolute; left: 50%; bottom: 4%; transform: translateX(-50%); font-size: 15px; letter-spacing: 0.16em; color: #b9a99a; opacity: 0; transition: opacity 0.8s; text-shadow: 0 0 8px #000; }
#hud .hint.on { opacity: 0.9; }
#hud .fadeout { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; }
#hud .task { position: absolute; left: 50%; bottom: 7.2%; transform: translateX(-50%); width: min(34vw, 380px); opacity: 0; transition: opacity 0.5s; text-align: center; pointer-events: none; }
#hud .task.on { opacity: 1; }
#hud .task span { display: block; font-size: 13px; letter-spacing: 0.42em; color: #d1394a; text-transform: uppercase; margin-bottom: 7px; text-shadow: 0 0 8px #000, 0 0 2px #000; }
#hud .task .bar { height: 4px; background: rgba(239,227,212,0.16); box-shadow: 0 0 10px rgba(0,0,0,0.8); }
#hud .task .bar i { display: block; height: 100%; width: 0; background: #efe3d4; transition: width 0.15s linear, background 0.3s; }
#hud .task.halt .bar i { background: #d1394a; }
`,
  ns = {
    take: '<svg viewBox="0 0 32 32" fill="none" stroke="#efe3d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17V8a2 2 0 014 0v7M13 15V6a2 2 0 014 0v9M17 15V8a2 2 0 014 0v9M21 17v-4a2 2 0 014 0v8c0 5-3 8-8 8h-2c-3 0-5-1-7-4l-4-6a2 2 0 013-2l3 3"/></svg>',
    use: '<svg viewBox="0 0 32 32" fill="none" stroke="#efe3d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="4"/><path d="M16 3v5M16 24v5M3 16h5M24 16h5M7 7l3 3M22 22l3 3M25 7l-3 3M10 22l-3 3"/></svg>',
    open: '<svg viewBox="0 0 32 32" fill="none" stroke="#efe3d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 28V5l13-2v25M21 28H5M17 16h1"/></svg>',
    light:
      '<svg viewBox="0 0 32 32" fill="none" stroke="#efe3d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4h8l1 8H11zM11 12l-1 16h12l-1-16M6 7l3 2M26 7l-3 2M16 1v2"/></svg>',
  },
  rs =
    '<svg viewBox="0 0 11 30"><path d="M5.5 0c2.5 2.5 4 5 4 9v3H1.5V9c0-4 1.5-6.5 4-9z" fill="#c99b50"/><rect x="1.5" y="12" width="8" height="16" rx="1" fill="#efe3d4"/><rect x="1.5" y="26" width="8" height="3" fill="#8a6a32"/></svg>';
function Zs(o, t = document.getElementById("hud")) {
  const i = document.createElement("style");
  ((i.textContent = Qs),
    document.head.appendChild(i),
    (t.innerHTML =
      '<div class="sub"></div><div class="prompt"><div class="key">E</div><span class="ic"></span></div><div class="cross"><i></i><i></i><i></i><i></i><i></i></div><div class="hitm"><i style="transform:rotate(45deg) translateY(-6px)"></i><i style="transform:rotate(135deg) translateY(-6px)"></i><i style="transform:rotate(225deg) translateY(-6px)"></i><i style="transform:rotate(315deg) translateY(-6px)"></i></div><div class="ammo"></div><div class="hint"></div><div class="card"><h2></h2><p></p></div><div class="task"><span></span><div class="bar"><i></i></div></div><div class="vitals"><div class="v0"><span>SARA</span><i></i><i></i><i></i></div><div class="v1"><span>AKANE</span><i></i><i></i><i></i></div></div><div class="fadeout"></div>'));
  const e = (w) => t.querySelector(w),
    s = {
      hitm: e(".hitm"),
      sub: e(".sub"),
      prompt: e(".prompt"),
      ic: e(".prompt .ic"),
      cross: e(".cross"),
      ammo: e(".ammo"),
      hint: e(".hint"),
      card: e(".card"),
      h2: e(".card h2"),
      p: e(".card p"),
      fade: e(".fadeout"),
      task: e(".task"),
      taskLabel: e(".task span"),
      taskBar: e(".task .bar i"),
    };
  let l = null,
    n = null,
    r = null,
    h = "",
    a = null,
    y = "";
  const g = {
    subtitle(w, _ = 2.4, c = "", k = "") {
      (clearTimeout(l),
        s.sub.classList.toggle("thought", k === "thought"),
        (s.sub.innerHTML =
          (c && g.showSpeaker ? `<b>${c}</b>` : "") + w.replace(/</g, "&lt;")),
        requestAnimationFrame(() => s.sub.classList.add("on")),
        (l = setTimeout(() => s.sub.classList.remove("on"), _ * 1e3)));
    },
    clearSubtitle() {
      (clearTimeout(l), s.sub.classList.remove("on"));
    },
    showSpeaker: !1,
    prompt(w) {
      if (!w) {
        s.prompt.classList.remove("on");
        return;
      }
      (s.prompt.dataset.k !== w &&
        ((s.prompt.dataset.k = w), (s.ic.innerHTML = ns[w] || ns.use)),
        s.prompt.classList.add("on"));
    },
    crosshair(w, _ = !1) {
      (s.cross.classList.toggle("on", !!w),
        (s.cross.style.transform = _ ? "scale(0.55)" : "scale(1)"));
    },
    ammo(w, _, c, k = !0) {
      const K = `${w}|${_}|${c}`;
      if (K !== h) {
        h = K;
        let Y = "";
        for (let F = 0; F < _; F++)
          Y += F < w ? rs : rs.replace("<svg", '<svg class="spent"');
        ((Y += `<span class="res">${c}</span>`), (s.ammo.innerHTML = Y));
      }
      (s.ammo.classList.toggle("on", k),
        k &&
          (clearTimeout(n),
          (n = setTimeout(() => s.ammo.classList.remove("on"), 3800))));
    },
    hitmarker(w = !1) {
      (s.hitm.classList.remove("on"),
        s.hitm.offsetWidth,
        s.hitm.classList.toggle("head", !!w),
        s.hitm.classList.add("on"));
    },
    hint(w, _ = 4) {
      (clearTimeout(r),
        (s.hint.textContent = w),
        s.hint.classList.add("on"),
        (r = setTimeout(() => s.hint.classList.remove("on"), _ * 1e3)));
    },
    task(w, _ = 0, c = !1) {
      if (w == null) {
        s.task.classList.remove("on");
        return;
      }
      (s.taskLabel.textContent !== w && (s.taskLabel.textContent = w),
        (s.taskBar.style.width =
          (Math.max(0, Math.min(1, _)) * 100).toFixed(1) + "%"),
        s.task.classList.toggle("halt", !!c),
        s.task.classList.add("on"));
    },
    vitals(w, _) {
      const c = w + "|" + _;
      if (c === y) return;
      y = c;
      const k = t.querySelectorAll(".vitals div");
      [w, _].forEach((F, X) => {
        (k[X].querySelectorAll("i").forEach((U, N) =>
          U.classList.toggle("full", N < F),
        ),
          k[X].classList.toggle("crit", F <= 0),
          (k[X].style.display = F == null ? "none" : ""));
      });
      const K = w < 3 || (_ != null && _ < 3),
        Y = t.querySelector(".vitals");
      (clearTimeout(a),
        K
          ? Y.classList.add("on")
          : (a = setTimeout(() => Y.classList.remove("on"), 2200)));
    },
    card(w, _ = "", c = !0) {
      ((s.h2.textContent = w),
        (s.p.textContent = _),
        s.card.classList.toggle("on", c));
    },
    setVisible(w) {
      t.style.display = w ? "" : "none";
    },
  };
  return g;
}
const Fe = 3;
function ks({ grace: o = 0.7, delay: t = 3, step: i = 1.5 } = {}) {
  const e = { n: 0, last: -99, dead: !1, graceT: 0, healT: 0, onChange: null };
  return (
    (e.hit = (s) =>
      e.dead || e.graceT > 0
        ? !1
        : (e.n++,
          (e.last = s),
          (e.graceT = o),
          (e.healT = 0),
          e.n > Fe && (e.dead = !0),
          e.onChange && e.onChange(e.n, e.dead),
          !0)),
    (e.update = (s, l) => {
      if (
        ((e.graceT = Math.max(0, e.graceT - s)),
        e.dead || e.n === 0 || l - e.last < t)
      ) {
        e.healT = 0;
        return;
      }
      ((e.healT += s),
        e.healT >= i &&
          ((e.healT = 0), e.n--, e.onChange && e.onChange(e.n, !1)));
    }),
    (e.reset = () => {
      ((e.n = 0),
        (e.dead = !1),
        (e.graceT = 0),
        (e.healT = 0),
        (e.last = -99),
        e.onChange && e.onChange(0, !1));
    }),
    e
  );
}
const Ht = pt,
  ge = (o = 0, t = 1) => o + Math.random() * (t - o);
function Xs(o, t, i, e) {
  let s = 0,
    l = 1e9,
    n = 0,
    r = 0,
    h = 0;
  if (i.shot === !1) return 1 / 0;
  const a = i.y0 ?? -0.3,
    y = i.shotY1 ?? i.y1 ?? 3.3,
    g = [i.x0, a, i.z0],
    w = [i.x1, y, i.z1],
    _ = [o.x, o.y, o.z],
    c = [t.x, t.y, t.z];
  for (let k = 0; k < 3; k++) {
    if (Math.abs(c[k]) < 1e-9) {
      if (_[k] < g[k] || _[k] > w[k]) return 1 / 0;
      continue;
    }
    let K = (g[k] - _[k]) / c[k],
      Y = (w[k] - _[k]) / c[k],
      F = -1;
    if (K > Y) {
      const X = K;
      ((K = Y), (Y = X), (F = 1));
    }
    if (
      (K > s &&
        ((s = K),
        (n = r = h = 0),
        k === 0 ? (n = F) : k === 1 ? (r = F) : (h = F)),
      Y < l && (l = Y),
      s > l)
    )
      return 1 / 0;
  }
  return (e && e.set(n, r, h), s);
}
function Js(o, t, i, e) {
  let s = 0,
    l = 0;
  const n = (r) => {
    const h = o.y + t.y * r,
      a = e(o.x + t.x * r, o.z + t.z * r, h + 0.02);
    return a != null && h <= a && h > a - 0.75;
  };
  for (let r = 0; r < 160 && s < i; r++) {
    const h = o.y + t.y * s,
      a = e(o.x + t.x * s, o.z + t.z * s, h + 0.02);
    if (a != null && h <= a && h > a - 0.75) {
      let y = l,
        g = s;
      for (let w = 0; w < 6; w++) {
        const _ = (y + g) / 2;
        n(_) ? (g = _) : (y = _);
      }
      return g;
    }
    ((l = s),
      (s +=
        a != null && h > a
          ? Math.min(0.6, Math.max(0.04, (h - a) / -t.y))
          : 0.3));
  }
  return 1 / 0;
}
function ti(o) {
  const t = {
      hp: 100,
      maxHp: 100,
      dead: !1,
      lastHurt: -99,
      invuln: 0,
      onPlayerDeath: null,
      onPlayerHurt: null,
      godmode: !1,
    },
    i = new Ht(),
    e = new Ht();
  ((t.raycastWorld = (n, r, h = 80) => {
    let a = h,
      y = null;
    for (const g of o.world.colliders) {
      if (g.on === !1) continue;
      const w = Xs(n, r, g, i);
      w < a && w > 1e-4 && ((a = w), (y = i.clone()));
    }
    if (r.y < -1e-5) {
      const g = o.world.floorAt;
      if (g) {
        const w = Js(n, r, a, g);
        w < a && ((a = w), (y = new Ht(0, 1, 0)));
      } else {
        const w = o.world.groundAt ? o.world.groundAt(n.x, n.z, n.y - 1.6) : 0,
          _ = (w - n.y) / r.y;
        _ > 0 && _ < a && ((a = _), (y = new Ht(0, 1, 0)));
      }
    }
    if (r.y > 1e-5 && o.shell) {
      const g = (3 - n.y) / r.y;
      g > 0 && g < a && ((a = g), (y = new Ht(0, -1, 0)));
    }
    return a < h ? { t: a, normal: y } : null;
  }),
    (t.shoot = (n) => {
      const { origin: r, muzzle: h, player: a } = n,
        y = e.copy(n.dir),
        g = n.spread ?? 0.008;
      ((y.x += ge(-g, g)),
        (y.y += ge(-g, g)),
        (y.z += ge(-g, g)),
        y.normalize());
      const w = y.clone(),
        _ = o.fx,
        c = o.audio,
        k = h || r;
      _.muzzleFlash(k, n.muzzleDir || w, a ? 0.9 : 1.15);
      const K = new Ht(1, 0, 0).applyQuaternion(
        a
          ? o.camera.quaternion
          : new ze().setFromAxisAngle(new Ht(0, 1, 0), Math.atan2(w.x, w.z)),
      );
      (_.casing(
        k
          .clone()
          .addScaledVector(w, -0.07)
          .add(new Ht(0, -0.01, 0)),
        K.clone().multiplyScalar(a ? 1 : -1),
      ),
        c.play(Math.random() < 0.5 ? "gun_pistol_1" : "gun_pistol_2", {
          pos: a ? void 0 : [k.x, k.y, k.z],
          vol: a ? 1 : 0.9,
          rate: ge(0.96, 1.04),
          reverb: 0.5,
        }),
        c.duck("amb", 0.35, 0.9));
      const Y = t.raycastWorld(r, w, 70);
      let F = null,
        X = Y ? Y.t : 70;
      for (const U of o.zombies.list) {
        if (U.dead) continue;
        const N = U.kit.hitTest(r, w, X + 0.5);
        N && N.distance < X && ((X = N.distance), (F = { a: U, h: N }));
      }
      o.zombies.alertAt(k, 18, a ? "player" : "akane");
      const J = r.clone().addScaledVector(w, X);
      if ((o.fx.tracer && o.fx.tracer(k, J), F)) {
        const { a: U, h: N } = F,
          T = N.point ? N.point.clone() : J,
          f =
            (N.zone === "head" ? 3.2 : N.zone === "legs" ? 0.6 : 1) *
            (n.damage ?? 1);
        return (
          _.impactBody(
            T,
            w
              .clone()
              .multiplyScalar(0.8)
              .add(new Ht(0, 0.15, 0)),
            N.zone === "head" ? 1.6 : 1,
          ),
          c.play("zombie_hit_wet", {
            pos: [T.x, T.y, T.z],
            vol: 0.8,
            rate: ge(0.92, 1.1),
          }),
          U.hit(f, N.zone, T, w, a ? "player" : "akane"),
          a && o.hud && o.hud.hitmarker?.(N.zone === "head"),
          { hit: "zombie", zone: N.zone, point: T }
        );
      }
      if (Y) {
        const U = r.clone().addScaledVector(w, Y.t);
        return (
          _.impactWorld(
            U,
            Y.normal,
            Y.normal.y > 0.5 ? [0.35, 0.28, 0.2] : [0.55, 0.5, 0.42],
          ),
          { hit: "world", point: U }
        );
      }
      return { hit: "none" };
    }),
    (t.wounds = ks()));
  const s = () => {
    t.hp = Math.round(t.maxHp * (1 - Math.min(t.wounds.n, Fe + 1) / (Fe + 1)));
  };
  let l = null;
  return (
    (t.hurt = (n, r = null) => {
      if (!(t.dead || t.godmode || t.invuln > 0) && t.wounds.hit(o.time)) {
        (s(),
          (t.lastHurt = o.time),
          (t.invuln = 0.7),
          (o.post.hurt = Math.min(1, o.post.hurt + 0.6)),
          (o.player.shake += 0.9 + 0.3 * t.wounds.n),
          (o.player.lean += (Math.random() - 0.5) * 0.12));
        {
          const h = ["s_hurt1", "s_hurt2", "s_hurt3"].filter(
            (a) => a !== t._lastCry,
          );
          ((t._lastCry = h[Math.floor(Math.random() * h.length)]),
            o.audio.play(t._lastCry, {
              vol: 0.8 + 0.08 * t.wounds.n,
              bus: "voice",
            }));
        }
        (t.onPlayerHurt && t.onPlayerHurt(n, r),
          t.wounds.dead &&
            ((t.hp = 0),
            (t.dead = !0),
            l?.stop?.(0.3),
            (l = null),
            t.onPlayerDeath && t.onPlayerDeath()));
      }
    }),
    (t.heal = () => {
      (t.wounds.reset(),
        s(),
        (t.dead = !1),
        (t.invuln = 2),
        (o.post.hurt = 0),
        l?.stop?.(0.3),
        (l = null));
    }),
    (t.update = (n) => {
      ((t.invuln = Math.max(0, t.invuln - n)),
        t.dead || (t.wounds.update(n, o.time), s()));
      const r = [0, 0.2, 0.42, 0.72, 1][Math.min(t.wounds.n, 4)];
      o.post.hurt = Math.max(o.post.hurt - n * 0.55, r);
      const h = !t.dead && t.wounds.n >= Fe;
      h && !l
        ? (l = o.audio.play("heartbeat", { vol: 0.5, loop: !0 }))
        : !h && l && (l.stop?.(0.6), (l = null));
    }),
    t
  );
}
const Ge = pt,
  ls = new pt(),
  hs = new pt(),
  St = (o = 0, t = 1) => o + Math.random() * (t - o),
  je = (o, t, i) => (o < t ? t : o > i ? i : o),
  De = (o, t) => {
    let i = t - o;
    for (; i > Math.PI;) i -= 2 * Math.PI;
    for (; i < -Math.PI;) i += 2 * Math.PI;
    return i;
  },
  be = (o, t, i, e) => o + (t - o) * (1 - Math.exp(-i * e)),
  cs = {
    lanky: { hp: 2.2, walk: 1.05, chase: 1.7, dmg: 16, reach: 1.2, turn: 4.2 },
    brute: { hp: 6, walk: 0.8, chase: 1.25, dmg: 26, reach: 1.3, turn: 3.2 },
    gown: { hp: 2, walk: 1.3, chase: 2.7, dmg: 13, reach: 1.15, turn: 6 },
    soldier: { hp: 3.2, walk: 1, chase: 3, dmg: 20, reach: 1.2, turn: 4.5 },
    nun: { hp: 2, walk: 1.15, chase: 2.8, dmg: 12, reach: 1.1, turn: 6.5 },
  };
class ei {
  constructor(t, i, e, s, l, n) {
    ((this.mgr = t),
      (this.game = t.game),
      (this.kind = i),
      (this.cfg = cs[i] || cs.lanky),
      (this.kit = e),
      (this.pos = new Ge(s, 0, l)),
      (this.yaw = n),
      (this.speed = 0),
      (this.hp = this.cfg.hp),
      (this.dead = !1),
      (this.state = "idle"),
      (this.alerted = !1),
      (this.alertT = 0),
      (this.path = null),
      (this.pathI = 0),
      (this.repath = 0),
      (this.attackCd = 0.4),
      (this.stun = 0),
      (this.t = 0),
      (this.forceTarget = null),
      (this.circle = { x: s, z: l, r: 0.3 }),
      this.game.world.circles.push(this.circle),
      (this.groanT = St(2, 6)),
      (this.attackT = 0),
      (this.target = null),
      (this.holdFn = null),
      (this.rushed = !1),
      (this.calmT = 0),
      (this.goal = null),
      (this.y = 0),
      (this.air = null),
      e.root.position.copy(this.pos),
      (e.root.rotation.y = n),
      (e.onEvent = (r, h) => {
        r === "hit" ? this.onHit() : r === "land" && this.onAirEvent(h);
      }),
      e.setState("idle"));
  }
  targetPos() {
    if (this.goal) return this.goal;
    const t = this.game,
      i = t.npc;
    if (
      this.forceTarget &&
      typeof this.forceTarget == "object" &&
      this.forceTarget.pos
    )
      return this.forceTarget.pos;
    if (this.forceTarget === "akane" && i) return i.pos;
    if (this.forceTarget === "player" || !i) return t.player.pos;
    const e = this.pos.distanceToSquared(t.player.pos);
    return this.pos.distanceToSquared(i.pos) < e * 0.36 ? i.pos : t.player.pos;
  }
  walled(t) {
    const i = ls.set(this.pos.x, this.pos.y + 1.2, this.pos.z),
      e = hs.set(t.x - this.pos.x, 0, t.z - this.pos.z),
      s = e.length();
    return s < 0.05
      ? !1
      : (e.divideScalar(s),
        !!this.game.combat.raycastWorld(i, e, Math.max(0.05, s - 0.15)));
  }
  alert(t = 0) {
    this.dead || this.alerted || ((this.alerted = !0), (this.alertT = t));
  }
  hit(t, i, e, s, l) {
    if (!this.dead) {
      if (
        ((this.hp -= t), (this.alerted = !0), (this.alertT = 0), this.hp <= 0)
      ) {
        this.die(i, s);
        return;
      }
      if (!this.air && this.state !== "grab" && t >= 0.9) {
        ((this.stun = i === "head" ? 0.6 : 0.42), (this.state = "stagger"));
        const n = s.clone().applyAxisAngle(new Ge(0, 1, 0), -this.yaw);
        (this.kit.setState(
          Math.abs(n.x) > Math.abs(n.z)
            ? n.x > 0
              ? "stagger_right"
              : "stagger_left"
            : n.z > 0
              ? "stagger_front"
              : "stagger_back",
        ),
          (this.speed *= 0.2));
      }
    }
  }
  die(t, i) {
    if (
      this.air &&
      this.air.phase !== "land" &&
      this.air.phase !== "wait" &&
      this.air.phase !== "launch"
    ) {
      this.airDie();
      return;
    }
    (this.air && this.airDone(),
      (this.dead = !0),
      (this.state = "dead"),
      (this.hp = 0));
    const e = i.clone().applyAxisAngle(new Ge(0, 1, 0), -this.yaw);
    (this.kit.setState(
      t === "head" ? "die_head" : e.z > 0 ? "die_front" : "die_back",
    ),
      this.game.audio.play("zombie_die", {
        pos: [this.pos.x, this.pos.y + 0.5, this.pos.z],
        vol: 0.8,
        rate: St(0.92, 1.06),
      }),
      (this.deadT = 0),
      this.holdFn && this.holdFn(),
      this.mgr.onKill && this.mgr.onKill(this));
  }
  onHit() {
    if (this.dead || this.state !== "attack" || this.goal) return;
    const t = this.game,
      i = this.target || this.targetPos(),
      e = Math.hypot(i.x - this.pos.x, i.z - this.pos.z),
      s = this.forceTarget;
    if (
      !(
        e >
        ((s && typeof s == "object" && i === s.pos && s.reach) ||
          this.cfg.reach) +
          0.4
      ) &&
      !this.walled(i)
    ) {
      if (
        this.forceTarget &&
        typeof this.forceTarget == "object" &&
        i === this.forceTarget.pos
      ) {
        this.forceTarget.hurt?.(this);
        return;
      }
      i === t.player.pos
        ? t.combat.hurt(this.cfg.dmg, this.pos)
        : t.npc &&
          (t.npc.hurt(), this.mgr.onAkaneHit && this.mgr.onAkaneHit(this));
    }
  }
  update(t) {
    const i = this.game,
      e = this.cfg;
    if (((this.t += t), this.air)) {
      this.updateAir(t);
      return;
    }
    if (this.dead) {
      const U = this.deadT;
      if (
        ((this.deadT += t),
        U < 0.7 &&
          this.deadT >= 0.7 &&
          !this.carried &&
          this.game.fx.bloodPool(this.pos, St(0.6, 1)),
        U < 1.6 && this.deadT >= 1.6)
      ) {
        const N = this.game.world.circles.indexOf(this.circle);
        N >= 0 && this.game.world.circles.splice(N, 1);
      }
      this.kit.update(t);
      return;
    }
    if (
      ((this.attackCd -= t),
      (this.stun -= t),
      this.alerted && this.alertT > 0 && (this.alertT -= t),
      !this.alerted)
    ) {
      const U = Math.hypot(
          i.player.pos.x - this.pos.x,
          i.player.pos.z - this.pos.z,
        ),
        N = i.npc
          ? Math.hypot(i.npc.pos.x - this.pos.x, i.npc.pos.z - this.pos.z)
          : 99;
      Math.min(U, N) < 3.4 && this.alert(St(0.2, 0.6));
    }
    const s = this.alerted && this.alertT <= 0;
    if (
      ((this.groanT -= t),
      this.groanT <= 0 &&
        ((this.groanT = this.alerted ? St(4, 9) : St(7, 12)),
        this.mgr.groan(this, this.alerted ? 1 : 0.4)),
      this.state === "grab")
    ) {
      (this.kit.update(t), this.sync());
      return;
    }
    if (this.state === "stagger") {
      ((this.speed = be(this.speed, 0, 10, t)),
        this.stun <= 0 && (this.state = s ? "chase" : "idle"),
        this.kit.update(t),
        this.move(t, 0),
        this.sync());
      return;
    }
    if (!s) {
      ((this.speed = be(this.speed, 0, 8, t)),
        this.kit.setState("idle"),
        this.kit.update(t),
        this.sync());
      return;
    }
    const l = this.targetPos(),
      n = l.x - this.pos.x,
      r = l.z - this.pos.z,
      h = Math.hypot(n, r);
    if (((this.target = l), this.state === "attack")) {
      ((this.attackT += t),
        (this.yaw +=
          je(De(this.yaw, Math.atan2(n, r)), -1, 1) * Math.min(1, t * 6)),
        (this.speed = be(this.speed, 0, 12, t)),
        this.attackT > 0.98 &&
          ((this.state = "chase"),
          (this.attackCd = St(0.6, 1.3)),
          this.kit.setState("shamble")),
        this.kit.update(t),
        this.sync());
      return;
    }
    if (((this.state = "chase"), this.goal && h < 0.35)) {
      ((this.speed = be(this.speed, 0, 8, t)),
        this.kit.setState("idle"),
        this.kit.update(t),
        this.move(t, 0),
        this.sync());
      return;
    }
    const a = Math.abs(De(this.yaw, Math.atan2(n, r))),
      y =
        (this.forceTarget &&
          typeof this.forceTarget == "object" &&
          l === this.forceTarget.pos &&
          this.forceTarget.reach) ||
        e.reach;
    if (
      h < y &&
      this.attackCd <= 0 &&
      a < 0.9 &&
      !this.goal &&
      !this.walled(l)
    ) {
      ((this.state = "attack"),
        (this.attackT = 0),
        this.kit.setState("attack"),
        this.sync());
      return;
    }
    if (((this.repath -= t), this.repath <= 0 || !this.path)) {
      this.repath = St(0.45, 0.8);
      const U = i.nav.lineFree(this.pos.x, this.pos.z, l.x, l.z);
      ((this.path = U
        ? [[l.x, l.z]]
        : i.nav.path(this.pos.x, this.pos.z, l.x, l.z)),
        (this.pathI = 0),
        this.path || (this.repath = 0.35));
    }
    let g = Math.atan2(n, r),
      w = e.chase * (this.rushed ? 1 : 0.62 + 0.38 * Math.min(1, h / 4));
    if (
      (this.path || (w = 0),
      this.calmT > 0 && ((this.calmT -= t), (w = Math.min(w, e.walk))),
      this.path && this.path.length)
    ) {
      let U = this.path[Math.min(this.pathI, this.path.length - 1)];
      for (
        ;
        this.pathI < this.path.length - 1 &&
        Math.hypot(U[0] - this.pos.x, U[1] - this.pos.z) < 0.14;
      )
        (this.pathI++, (U = this.path[this.pathI]));
      g = Math.atan2(U[0] - this.pos.x, U[1] - this.pos.z);
    }
    h < y * 0.9 && !this.goal && (w = 0);
    const _ = De(this.yaw, g);
    ((this.yaw += Math.max(-e.turn * t, Math.min(e.turn * t, _))),
      (w *= 1 - 0.8 * Math.min(1, Math.abs(_) / 1.2)));
    const c = w > e.walk * 1.45 && this.kind !== "brute",
      k = w < 0.12 ? "idle" : c ? "run" : "shamble",
      K = k === "idle" ? 1 : je(w / (k === "run" ? 3.2 : e.walk), 0.35, 1.8);
    (this.kit.setState(k, { speed: K }), this.kit.update(t, { speed: K }));
    const Y = this.kit.groundSpeed,
      F = k === "idle" ? 0 : (Y ?? w);
    this.speed = be(this.speed, F, F > this.speed ? 9 : 14, t);
    const X = this.pos.x,
      J = this.pos.z;
    if (
      (this.move(t, this.speed),
      (this.stuckT =
        (this.stuckT || 0) +
        (F > 0.3 && Math.hypot(this.pos.x - X, this.pos.z - J) < t * F * 0.25
          ? t
          : -this.stuckT || 0)),
      this.stuckT > 0.9 && this.path && this.pathI < this.path.length)
    ) {
      const U = this.path[this.pathI],
        N = (U[0] - this.pos.x) * 0.5,
        T = (U[1] - this.pos.z) * 0.5,
        f = Math.hypot(N, T);
      ((f > 0.02 &&
        !!i.combat.raycastWorld(
          ls.set(this.pos.x, this.pos.y + 0.9, this.pos.z),
          hs.set(N / f, 0, T / f),
          f + 0.3,
        )) ||
        ((this.pos.x += N), (this.pos.z += T)),
        (this.stuckT = 0),
        (this.repath = 0),
        (this.path = null));
    }
    this.sync();
  }
  move(t, i) {
    i > 0.01 &&
      ((this.pos.x += Math.sin(this.yaw) * i * t),
      (this.pos.z += Math.cos(this.yaw) * i * t));
    for (const h of this.mgr.list) {
      if (h === this || h.dead || (h.air && h.air.phase !== "land")) continue;
      const a = this.pos.x - h.pos.x,
        y = this.pos.z - h.pos.z,
        g = a * a + y * y;
      if (g < 0.25 && g > 1e-6) {
        const w = Math.sqrt(g),
          _ = (0.5 - w) * 0.5;
        ((this.pos.x += (a / w) * _), (this.pos.z += (y / w) * _));
      }
    }
    const e = this.game.player.pos,
      s = this.pos.x - e.x,
      l = this.pos.z - e.z,
      n = s * s + l * l;
    if (n < 0.3025 && n > 1e-6) {
      const h = Math.sqrt(n);
      ((this.pos.x = e.x + (s / h) * 0.55),
        (this.pos.z = e.z + (l / h) * 0.55));
    }
    (xs(this.game.world, this.pos, 0.3, this.pos.y, this.circle),
      (this.circle.x = this.pos.x),
      (this.circle.z = this.pos.z));
    const r = this.game.world.groundAt;
    if (r && !this.air) {
      const h = r(this.pos.x, this.pos.z, this.pos.y),
        a = h - this.pos.y;
      this.pos.y = Math.abs(a) > 0.6 ? h : this.pos.y + a * Math.min(1, t * 14);
    }
  }
  sync() {
    (this.kit.root.position.set(this.pos.x, this.pos.y + this.y, this.pos.z),
      (this.kit.root.rotation.y = this.yaw));
  }
  airTarget() {
    const t = this.game,
      i = this.air?.o.target;
    return i && typeof i == "object" && i.pos
      ? i.pos
      : i === "akane" && t.npc
        ? t.npc.pos
        : t.player.pos;
  }
  updateAir(t) {
    const i = this.air,
      e = this.game,
      s = i.win,
      l = this.kit,
      n = s.sill;
    if (((i.t += t), i.phase === "wait")) {
      const r = this.mgr.winQ(s);
      if (
        r.busy ||
        (s.state >= 0.999 ? r.q[0] : r.q.find((a) => a.air?.o.crash)) !== this
      )
        return;
      (r.q.splice(r.q.indexOf(this), 1),
        (r.busy = this),
        (this.yaw = s.face),
        i.o.crash
          ? (s.state <= 0 && s.smash?.(),
            (i.phase = "launch"),
            (i.t = 0),
            e.audio.play("zombie_scream", {
              pos: [n[0], n[1] + 1, n[2]],
              vol: 0.95,
              rate: St(0.9, 1.05),
              reverb: 0.5,
            }))
          : i.o.perch0
            ? ((l.root.visible = !0),
              (i.phase = "perch"),
              (i.t = 0),
              this.pos.set(n[0], 0, n[2]),
              (this.y = n[1]),
              l.setState("perch", { instant: !0 }),
              l.lookAt(i.look, 0.8),
              e.audio.play("zombie_growl", {
                pos: [n[0], n[1] + 1, n[2]],
                vol: 0.9,
                rate: St(0.9, 1.08),
                reverb: 0.45,
              }))
            : ((l.root.visible = !0),
              (i.phase = "climb"),
              (i.t = 0),
              this.pos.set(n[0], 0, n[2]),
              (this.y = n[1]),
              l.setState("climb", { instant: !0 })));
    } else if (i.phase === "launch") {
      if (i.t < 0.05) return;
      const r = Math.sin(s.face),
        h = Math.cos(s.face);
      (this.airFly(
        "crash",
        n[0] - r * 0.6,
        n[1] + 0.1,
        n[2] - h * 0.6,
        s.land[0] + r * 0.45,
        s.land[1] + h * 0.45,
        1.3,
      ),
        l.setState("fall", { crash: !0, instant: !0 }),
        (l.root.visible = !0));
    } else if (i.phase === "climb")
      i.t >= Le.climb &&
        ((i.phase = "perch"),
        (i.t = 0),
        l.setState("perch"),
        l.lookAt(i.look, 0.8),
        e.audio.play("zombie_growl", {
          pos: [n[0], n[1] + 1, n[2]],
          vol: 0.8,
          rate: St(0.9, 1.08),
          reverb: 0.45,
        }));
    else if (i.phase === "perch")
      i.t >= i.perch &&
        (this.airFly(
          "fall",
          n[0],
          n[1],
          n[2],
          s.land[0],
          s.land[1],
          i.o.vy ?? 0.5,
        ),
        l.setState("fall"));
    else if (i.phase === "fall" || i.phase === "crash" || i.phase === "drop") {
      const r = Math.min(i.t, i.T);
      ((this.pos.x = i.x0 + (i.x1 - i.x0) * (r / i.T)),
        (this.pos.z = i.z0 + (i.z1 - i.z0) * (r / i.T)),
        (this.y = Math.max(0, i.y0 + i.vy * r - 4.905 * r * r)));
      const h = this.mgr.winQ(s);
      if (
        (h.busy === this &&
          (i.phase !== "crash" || r > 0.22) &&
          (h.busy = null),
        i.t >= i.T)
      ) {
        if (((this.y = 0), i.phase === "drop")) {
          this.airLanded();
          return;
        }
        ((i.phase = "land"),
          (i.t = 0),
          (this.circle.x = this.pos.x),
          (this.circle.z = this.pos.z),
          l.lookAt(null),
          l.setState("land", { hard: i.hard }));
        const a = this.airTarget(),
          y = e.nav?.path(this.pos.x, this.pos.z, a.x, a.z),
          g = y && y.length ? y[0] : [a.x, a.z];
        i.goalYaw = Math.atan2(g[0] - this.pos.x, g[1] - this.pos.z);
      }
    } else if (i.phase === "land") {
      const r = i.hard ? Le.hard : Le.land;
      if (
        (i.t > r * 0.4 &&
          (this.yaw += je(De(this.yaw, i.goalYaw), -3 * t, 3 * t)),
        i.t >= r)
      ) {
        (this.airDone(), this.kit.update(t), this.sync());
        return;
      }
    }
    if (i.phase === "perch" || i.phase === "climb") {
      const r = this.airTarget();
      i.look.set(r.x, r === e.player.pos ? 1.55 : 1.3, r.z);
    }
    (i.phase !== "wait" && l.update(t), this.sync());
  }
  airFly(t, i, e, s, l, n, r) {
    const h = this.air;
    ((h.phase = t),
      (h.t = 0),
      (h.x0 = i),
      (h.y0 = e),
      (h.z0 = s),
      (h.x1 = l),
      (h.z1 = n),
      (h.vy = r),
      (h.T = (r + Math.sqrt(r * r + 2 * 9.81 * Math.max(0, e))) / 9.81),
      this.pos.set(i, 0, s),
      (this.y = e));
  }
  onAirEvent(t) {
    const i = this.game,
      e = this.pos.x,
      s = this.pos.z,
      l = !!this.air?.hard;
    if (t === "grip") {
      i.audio.play("zombie_climb_sill", {
        pos: [e, this.y + 0.2, s],
        vol: 0.9,
        rate: St(0.92, 1.08),
        reverb: 0.4,
      });
      return;
    }
    if (t === "impact") {
      (i.audio.play("body_fall_stone", {
        pos: [e, 0.3, s],
        vol: l ? 1 : 0.85,
        rate: St(0.92, 1.08),
        reverb: 0.45,
      }),
        i.fx?.dust?.({ x: e, y: 0.02, z: s }, 0.55, l ? 1.1 : 0.7));
      const n = Math.hypot(i.player.pos.x - e, i.player.pos.z - s);
      n < 7 && (i.player.shake += (l ? 0.4 : 0.22) * (1 - n / 7));
    } else
      t === "thud" &&
        i.audio.play("body_fall_stone", {
          pos: [e, 0.2, s],
          vol: 0.55,
          rate: St(0.8, 0.9),
          reverb: 0.4,
        });
  }
  airDone() {
    const t = this.air;
    if (!t) return;
    ((this.air = null), (this.y = 0));
    const i = this.mgr.winQ(t.win);
    i.busy === this && (i.busy = null);
    const e = i.q.indexOf(this);
    (e >= 0 && i.q.splice(e, 1),
      (this.alerted = !0),
      (this.alertT = 0),
      (this.rushed = !0),
      (this.state = "chase"),
      (this.path = null),
      (this.repath = 0),
      (this.speed = 2.2),
      t.o.target && (this.forceTarget = t.o.target),
      (this.circle.x = this.pos.x),
      (this.circle.z = this.pos.z),
      (this.kit.root.visible = !0),
      this.kit.lookAt(null),
      this.sync(),
      t.res?.(this));
  }
  airDie() {
    const t = this.air,
      i = this.game,
      e = t.win,
      s = e.sill;
    ((this.dead = !0),
      (this.state = "dead"),
      (this.hp = 0),
      i.audio.play("zombie_die", {
        pos: [this.pos.x, this.y + 0.8, this.pos.z],
        vol: 0.8,
        rate: St(0.92, 1.06),
      }));
    const l = this.mgr.winQ(e);
    if (
      (l.busy === this && (l.busy = null),
      this.holdFn && this.holdFn(),
      this.mgr.onKill && this.mgr.onKill(this),
      (t.outside = t.phase === "climb" && t.t < Le.climb * 0.45),
      t.phase === "fall" || t.phase === "crash")
    ) {
      const n = Math.min(t.t, t.T),
        r = t.vy - 9.81 * n,
        h = this.pos.x,
        a = this.pos.z,
        y = this.y,
        g = (t.T - n) / t.T;
      this.airFly(
        "drop",
        h,
        y,
        a,
        h + (t.x1 - t.x0) * g,
        a + (t.z1 - t.z0) * g,
        r,
      );
    } else {
      const n = Math.sin(e.face),
        r = Math.cos(e.face);
      t.outside
        ? this.airFly(
            "drop",
            s[0] - n * 0.55,
            Math.max(0, this.y - 0.9),
            s[2] - r * 0.55,
            e.out[0],
            e.out[1],
            0,
          )
        : this.airFly(
            "drop",
            s[0],
            s[1],
            s[2],
            e.land[0] - n * 0.15,
            e.land[1] - r * 0.15,
            0.4,
          );
    }
    (this.kit.lookAt(null),
      this.kit.setState("fall", { limp: !0, fade: 0.12 }));
  }
  airLanded() {
    const t = this.air,
      i = this.game;
    if (
      ((this.air = null),
      (this.y = 0),
      (this.deadT = 0),
      this.kit.setState("die_front", { fade: 0.08 }),
      (this.kit.anim.t = 0.9),
      (this.circle.x = this.pos.x),
      (this.circle.z = this.pos.z),
      t.outside)
    )
      this.kit.root.visible = !1;
    else {
      (i.audio.play("body_fall_stone", {
        pos: [this.pos.x, 0.3, this.pos.z],
        vol: 0.95,
        rate: St(0.85, 1),
        reverb: 0.45,
      }),
        i.fx?.dust?.({ x: this.pos.x, y: 0.02, z: this.pos.z }, 0.6, 0.9));
      const e = Math.hypot(
        i.player.pos.x - this.pos.x,
        i.player.pos.z - this.pos.z,
      );
      e < 7 && (i.player.shake += 0.25 * (1 - e / 7));
    }
    (this.sync(), t.res?.(this));
  }
}
async function si(o) {
  let t = null,
    i = !1,
    e = ["lanky", "brute", "gown"];
  try {
    const l = await fe(
      () => import("./index-Db-AsSxU.js"),
      __vite__mapDeps([0, 1, 2, 3]),
      import.meta.url,
    );
    if (l.createZombie) {
      if (
        (o.section === 2 && l.KINDS && (e = Object.keys(l.KINDS)),
        o.section === 3 &&
          l.KINDS &&
          (e = ["lanky", "brute", "gown", "soldier"].filter((r) => l.KINDS[r])),
        l.prebuildZombies)
      )
        try {
          await l.prebuildZombies(e);
        } catch (r) {
          console.warn("[zombies] prebuild failed", r.message);
        }
      const n = await fe(
        () => import("./zombie_stub-3Vfgk-wH.js"),
        __vite__mapDeps([4, 1]),
        import.meta.url,
      );
      ((t = (r, h) => {
        try {
          return l.createZombie(o.makeCtx(), { kind: r, seed: h });
        } catch (a) {
          return (
            console.warn("[zombies] the kit failed, using a stub:", a.message),
            n.createZombieStub(o.makeCtx(), { kind: r })
          );
        }
      }),
        (i = !0));
    }
  } catch {}
  if (!t) {
    const l = await fe(
      () => import("./zombie_stub-3Vfgk-wH.js"),
      __vite__mapDeps([4, 1]),
      import.meta.url,
    );
    t = (n) => l.createZombieStub(o.makeCtx(), { kind: n });
  }
  const s = {
    game: o,
    list: [],
    real: i,
    kinds: e,
    onKill: null,
    onAkaneHit: null,
    _groans: 0,
    spawn(l, n, r, h = {}) {
      const a = t(l, h.seed ?? s.list.length + 1);
      o.scene.add(a.root);
      const y = new ei(s, l, a, n, r, h.yaw ?? 0);
      return (
        o.world.groundAt &&
          ((y.pos.y = o.world.groundAt(n, r, h.y ?? o.player.pos.y)), y.sync()),
        h.state === "emerge" && ((y.alerted = !0), (y.rushed = !0)),
        h.alerted && ((y.alerted = !0), (y.alertT = h.delay ?? 0)),
        h.target && (y.forceTarget = h.target),
        s.list.push(y),
        y
      );
    },
    alertAt(l, n) {
      for (const r of s.list) {
        if (r.dead || r.alerted) continue;
        const h = Math.hypot(r.pos.x - l.x, r.pos.z - l.z);
        h < n && r.alert(St(0.25, 1.1) + h * 0.04);
      }
    },
    alertAll(l = 0.5) {
      for (const n of s.list) n.alert(l * Math.random());
    },
    groan(l, n = 1) {
      s._groans >= 2 ||
        (s._groans++,
        setTimeout(() => {
          s._groans--;
        }, 1800),
        o.audio.play("zombie_groan_" + (1 + ((Math.random() * 4) | 0)), {
          pos: [l.pos.x, l.pos.y + 1.5, l.pos.z],
          vol: 0.85 * n,
          ref: 2.5,
          rate: St(0.9, 1.08),
          reverb: 0.35,
        }));
    },
    keepWarm() {
      if (s.keeper) return s.keeper;
      const l = t("lanky", 99);
      return (
        l.root.position.set(-80, 0, -80),
        o.scene.add(l.root),
        (s.keeper = l),
        l
      );
    },
    alive() {
      return s.list.filter((l) => !l.dead);
    },
    climbIn(l, n, r = {}) {
      const h = s.spawn(l, n.out[0], n.out[1], { yaw: n.face, seed: r.seed });
      ((h.alerted = !0), (h.alertT = 0));
      const a = (h.air = {
        win: n,
        o: r,
        phase: "wait",
        t: 0,
        perch: r.perch ?? 0.4,
        hard: !!r.crash,
        look: new Ge(),
        res: null,
      });
      return (
        (h.landed = new Promise((y) => {
          a.res = y;
        })),
        (h.y = -30),
        (h.kit.root.visible = !1),
        (h.circle.x = h.circle.z = 1e4),
        h.sync(),
        s.winQ(n).q.push(h),
        h
      );
    },
    _wins: new Map(),
    winQ(l) {
      let n = s._wins.get(l);
      return (n || ((n = { q: [], busy: null }), s._wins.set(l, n)), n);
    },
    nearest(l) {
      let n = null,
        r = 1e9;
      for (const h of s.alive()) {
        const a = h.pos.distanceToSquared(l);
        a < r && ((r = a), (n = h));
      }
      return n;
    },
    update(l) {
      for (const n of s.list) n.update(l);
    },
    prepare(l) {
      for (const n of s.list) n.kit.prepare && n.kit.prepare(l);
    },
    clear(l = null) {
      const n = [];
      for (const r of s.list) {
        if (l && !l(r)) {
          n.push(r);
          continue;
        }
        (o.scene.remove(r.kit.root), r.kit.dispose && r.kit.dispose());
        const h = o.world.circles.indexOf(r.circle);
        h >= 0 && o.world.circles.splice(h, 1);
      }
      ((s.list.length = 0), s.list.push(...n));
      for (const r of s._wins.values())
        ((r.q = r.q.filter((h) => n.includes(h))),
          r.busy && !n.includes(r.busy) && (r.busy = null));
    },
  };
  return s;
}
const ii = `
varying vec3 vLocal; varying vec3 vWorld;
void main() {
  vLocal = position;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,
  oi = `
varying vec3 vLocal; varying vec3 vWorld;
uniform float uTime; uniform float uTan; uniform float uK; uniform vec3 uColor; uniform float uLen;
float h31(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h31(i), h31(i + vec3(1,0,0)), f.x), mix(h31(i + vec3(0,1,0)), h31(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h31(i + vec3(0,0,1)), h31(i + vec3(1,0,1)), f.x), mix(h31(i + vec3(0,1,1)), h31(i + vec3(1,1,1)), f.x), f.y), f.z);
}
void main() {
  float t = clamp(-vLocal.z, 0.0, 1.0);                       // 0 at the lens, 1 at the far end
  float rad = length(vLocal.xy) / max(t, 1e-4);               // 1 at the cone wall, 0 on the axis (unit cone: radius = t)
  float core = pow(1.0 - smoothstep(0.0, 1.0, rad), 1.6);
  float nearF = smoothstep(0.0, 0.05, t);
  float farF = exp(-t * uLen * 0.16);
  float dust = 0.62 + 0.55 * vnoise(vWorld * 2.6 + vec3(0.0, uTime * 0.09, uTime * 0.05)) * vnoise(vWorld * 5.5 - vec3(uTime * 0.03));
  float a = core * nearF * farF * dust * uK;
  gl_FragColor = vec4(uColor * a, a);
}`;
function ai(o, t, i = {}) {
  const e = i.length ?? 14,
    s = t.angle,
    l = new Ws(1, 1, 40, 1, !0);
  (l.translate(0, -0.5, 0), l.rotateX(Math.PI / 2));
  const n = new bs({
      vertexShader: ii,
      fragmentShader: oi,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      side: Xe,
      blending: ke,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        uTime: { value: 0 },
        uTan: { value: Math.tan(s) },
        uK: { value: i.k ?? 0.085 },
        uColor: { value: new Me(1, 0.93, 0.8) },
        uLen: { value: e },
      },
    }),
    r = new Vt(l, n);
  ((r.frustumCulled = !1), (r.renderOrder = 20), (r.name = "beam"));
  const h = Math.tan(s) * e;
  (r.scale.set(h, h, e), o.scene.add(r));
  const a = new pt(),
    y = new ze(),
    g = new pt(0, 0, -1);
  return {
    mesh: r,
    update(w) {
      ((n.uniforms.uTime.value += w),
        (r.visible = t.intensity > 0.5),
        r.visible &&
          (r.position.copy(t.position),
          a.subVectors(t.target.position, t.position).normalize(),
          y.setFromUnitVectors(g, a),
          r.quaternion.copy(y),
          (n.uniforms.uK.value = (i.k ?? 0.085) * (t.intensity / 26))));
    },
  };
}
const O = pt,
  At = ze,
  Zt = (o, t = 0, i = 1) => (o < t ? t : o > i ? i : o),
  Ne = (o, t, i) => o + (t - o) * i,
  Dt = (o, t, i, e) => o + (t - o) * (1 - Math.exp(-i * e)),
  ni = (o) => 1 - Math.pow(1 - o, 3),
  ee = (o, t, i) => {
    const e = Zt((i - o) / (t - o));
    return e * e * (3 - 2 * e);
  },
  $e = (o) => (o <= 0 ? 0 : 1.8 * Math.sin(o * 30) * Math.exp(-o * 13)),
  it = {
    cant: 0.3,
    release: 0.27,
    turn: [0.42, 0.85],
    down: [0.1, 0.46],
    up: [0.6, 0.96],
    seat: 1.08,
    back: [1.14, 1.5],
    slam: 1.3,
    ret: [1.34, 1.8],
    end: 1.8,
    retTac: [1.16, 1.58],
    endTac: 1.58,
  },
  ri = [
    ["gun_mag_out", it.release - 0.06],
    ["gun_mag_in", it.seat - 0.46],
    ["gun_slide_rack", it.slam - 0.235, !0],
  ],
  li = 0.93,
  ps = 0.113,
  hi = 0.12;
function jt(o, t = null) {
  const i = o.onBeforeCompile;
  return (
    (o.onBeforeCompile = (e, s) => {
      (i && i(e, s),
        (e.vertexShader = e.vertexShader.replace(
          "#include <project_vertex>",
          `#include <project_vertex>
 gl_Position.z *= 0.1;`,
        )),
        t !== null &&
          ((e.vertexShader = e.vertexShader
            .replace(
              "#include <common>",
              `#include <common>
varying float vClipZ;`,
            )
            .replace(
              "#include <begin_vertex>",
              `#include <begin_vertex>
 vClipZ = transformed.z;`,
            )),
          (e.fragmentShader = e.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
varying float vClipZ;`,
            )
            .replace(
              "void main() {",
              `void main() {
 if (vClipZ < ${t.toFixed(4)}) discard;`,
            ))));
    }),
    (o.customProgramCacheKey = () =>
      "vm" + (o.userData.pk || "") + (t !== null ? "c" + t : "")),
    o
  );
}
function ci() {
  const t = document.createElement("canvas");
  t.width = t.height = 256;
  const i = t.getContext("2d"),
    e = i.createRadialGradient(256 / 2, 256 / 2, 0, 256 / 2, 256 / 2, 256 / 2);
  (e.addColorStop(0, "#ffffff"),
    e.addColorStop(0.55, "#f1ede4"),
    e.addColorStop(0.8, "#a8a296"),
    e.addColorStop(0.93, "#4a463f"),
    e.addColorStop(1, "#000000"),
    (i.fillStyle = e),
    i.fillRect(0, 0, 256, 256),
    (i.strokeStyle = "rgba(0,0,0,0.16)"),
    (i.lineWidth = 5),
    i.beginPath(),
    i.arc(256 / 2, 256 / 2, 256 * 0.3, 0, 7),
    i.stroke(),
    (i.fillStyle = "rgba(0,0,0,0.12)"),
    i.beginPath(),
    i.arc(256 / 2 + 4, 256 / 2 - 3, 12, 0, 7),
    i.fill());
  const s = new ts(t);
  return ((s.colorSpace = gs), s);
}
function pi(o) {
  const { scene: t, camera: i, player: e } = o;
  t.add(i);
  const s = {
      has: { torch: !1, pistol: !1 },
      ammo: 12,
      mag: 12,
      reserve: 48,
      on: !0,
      aim: 0,
      state: "idle",
      stateT: 0,
      lastShot: -9,
      kick: 0,
      reloadT: 0,
      sway: new O(),
      bobK: 0,
      drawK: 0,
      cooldown: 0.17,
    },
    l = new Cs(16773336, 26, 30, 0.44, 0.62, 1.5);
  ((l.castShadow = !0),
    l.shadow.mapSize.set(1536, 1536),
    (l.shadow.camera.near = 0.12),
    (l.shadow.camera.far = 26),
    (l.shadow.bias = -35e-5),
    (l.shadow.normalBias = 0.015),
    (l.shadow.focus = 1),
    (l.map = ci()),
    (l.userData.noActor = !1),
    (l.name = "torch"),
    t.add(l, l.target));
  const n = new At().copy(i.quaternion);
  let r = 0,
    h = 0,
    a = 0;
  const y = ai(o, l),
    g = new de();
  ((g.name = "viewmodel"), i.add(g));
  const w = jt(new qt({ color: 13146748, roughness: 0.62, metalness: 0 })),
    _ = jt(new qt({ color: 1578778, roughness: 0.72, metalness: 0 })),
    c = jt(new qt({ color: 14268323, roughness: 0.3 })),
    k = jt(new qt({ color: 1777707, roughness: 0.92, metalness: 0 })),
    K = -0.004,
    Y = jt(new qt({ color: 13146748, roughness: 0.62, metalness: 0 }), K),
    F = jt(new qt({ color: 1578778, roughness: 0.72, metalness: 0 }), K),
    X = [],
    J = (z, I = 0.6) => (
      z.metalness > 0.5 && ((z.userData.vmK = I), X.push(z)),
      z
    );
  let U, N;
  const T = () => {
      const z = t.environment || null,
        I = t.environmentIntensity ?? 1;
      if (!(z === U && I === N)) {
        ((U = z), (N = I));
        for (const E of X)
          ((E.envMap = z), (E.envMapIntensity = Math.max(E.userData.vmK, I)));
      }
    },
    f = Es();
  f.group.traverse((z) => {
    if (z.isMesh) {
      ((z.castShadow = !1), (z.frustumCulled = !1));
      const I = Array.isArray(z.material) ? z.material : [z.material];
      for (let E = 0; E < I.length; E++) {
        const st = I[E].clone();
        ((st.userData.pk = "p"), jt(st), J(st), (I[E] = st));
      }
      z.material = Array.isArray(z.material) ? I : I[0];
    }
  });
  const b = new de();
  ((b.name = "gunRoot"),
    g.add(b),
    b.add(f.group),
    (f.group.rotation.y = Math.PI),
    f.group.updateMatrix(),
    f.mag.parent.updateMatrix(),
    (b.visible = !1));
  function L(z, I = [w, _, c]) {
    const E = Os(z, 0),
      st = Ys(Ds, E, 0, z + "|0.000"),
      nt = new de(),
      Pt = new Vt(st.skin, I[0]),
      vt = new Vt(st.glove, I[1]),
      rt = new Vt(st.nails, I[2]);
    for (const Lt of [Pt, vt, rt]) ((Lt.frustumCulled = !1), nt.add(Lt));
    return nt;
  }
  let v, R, W;
  {
    const z = Math.cos((18 * Math.PI) / 180),
      I = Math.sin((18 * Math.PI) / 180),
      E = L("pistol"),
      st = new It().makeBasis(new O(0, z, I), new O(-1, 0, 0), new O(0, -I, z));
    (st.setPosition(-0.026, 0.01584, -0.09423),
      (E.matrixAutoUpdate = !1),
      E.matrix.copy(st),
      f.group.add(E));
    const nt = new Vt(new Ke(0.031, 0.043, 0.9, 24, 1, !0), k);
    (nt.geometry.rotateX(Math.PI / 2),
      nt.geometry.translate(0, 0, -0.47),
      (nt.rotation.x = -0.5),
      (nt.rotation.y = 0.3),
      (nt.frustumCulled = !1),
      (nt.material.side = Xe),
      E.add(nt),
      (v = E),
      (R = nt));
  }
  const C = new de();
  ((C.name = "torchVM"), g.add(C));
  const j = new It().compose(
      new O(-0.19, -0.16, -0.37),
      new At().setFromEuler(new pe(0.03, 0.14, 0.02)),
      new O(1, 1, 1),
    ),
    u = new vs({ color: new Me().setRGB(3, 2.7, 2.2), toneMapped: !1 });
  {
    const z = J(
        jt(new qt({ color: 5659488, metalness: 1, roughness: 0.34 })),
        0.5,
      ),
      I = jt(new qt({ color: 921103, roughness: 0.85 })),
      E = (Se, Te, Ae, me, Be) => {
        const Pe = new Ke(Se, Te, Ae, 28);
        Pe.rotateX(Math.PI / 2);
        const te = new Vt(Pe, Be);
        return ((te.position.z = me), (te.frustumCulled = !1), C.add(te), te);
      };
    (E(0.0155, 0.0155, 0.12, 0, z),
      E(0.0165, 0.0165, 0.085, -0.008, I),
      E(0.0255, 0.0165, 0.045, -0.085, z),
      E(0.0262, 0.0262, 0.012, -0.11, z));
    const st = new Ls(0.0235, 28),
      nt = new Vt(st, u);
    ((nt.rotation.y = Math.PI),
      (nt.position.z = -0.1165),
      (nt.frustumCulled = !1),
      C.add(nt),
      E(0.0148, 0.0148, 0.02, 0.075, z));
    const Pt = L("torch", [Y, F, c]),
      vt = new O(0, 0, -1),
      rt = new O(0.64, -0.77, 0).normalize(),
      Lt = new O().crossVectors(vt, rt).multiplyScalar(-1),
      ne = new It().makeBasis(vt, rt, Lt);
    (ne.setPosition(
      new O(0, 0, -0.005).addScaledVector(rt, 0.022).addScaledVector(Lt, -0.06),
    ),
      (Pt.matrixAutoUpdate = !1),
      Pt.matrix.copy(ne),
      C.add(Pt));
    const Gt = new Vt(new Ke(0.045, 0.034, 0.9, 24, 1, !0), k);
    (Gt.geometry.rotateX(Math.PI / 2), Gt.geometry.translate(0, 0, 0.43));
    const Jt = new O().setFromMatrixPosition(ne),
      _e = new O(-0.32, -0.52, -0.24).applyMatrix4(j.clone().invert());
    (Gt.position.copy(Jt),
      Gt.quaternion.setFromUnitVectors(new O(0, 0, 1), _e.sub(Jt).normalize()),
      (Gt.frustumCulled = !1),
      (Gt.material.side = Xe),
      C.add(Gt),
      (W = Gt));
  }
  (C.position.set(-0.19, -0.16, -0.37),
    C.rotation.set(0.03, 0.14, 0.02),
    (C.visible = !1),
    T());
  const m = {
      hip: { p: new O(0.155, -0.175, -0.36), r: new O(0.06, -0.11, 0) },
      ads: { p: new O(0, -0.096, -0.28), r: new O(0, 0, 0) },
      drop: { p: new O(0.085, -0.035, -0.32), r: new O(0.25, 0.25, -0.6) },
      load: { p: new O(0.07, -0.04, -0.3), r: new O(0.3, 0.35, -0.8) },
      hidden: { p: new O(0.2, -0.5, -0.3), r: new O(0.9, -0.1, 0.1) },
    },
    d = { p: m.hidden.p.clone(), r: m.hidden.r.clone() },
    x = new O(),
    A = new O(),
    q = new pe(),
    Z = new O(),
    $ = {
      fetch: {
        p: new O(-0.12, -0.38, -0.2),
        q: new At().setFromEuler(new pe(-0.9, 0.3, 0.2)),
      },
      load: new O(0.05, -0.1, -0.2),
      pinch: new O(0.025, 0.012, -0.045),
      hold: [0.07, 0.118],
    },
    lt = f.magClone();
  ((lt.group.visible = !1), t.add(lt.group));
  const zt = f.magClone();
  ((zt.group.visible = !1), (zt.group.matrixAutoUpdate = !1), C.add(zt.group));
  const ot = { on: !1, t: 0, v: new O(), w: new O() },
    Ft = new It(),
    p = new It();
  {
    const z = (E) => new At().setFromEuler(new pe(E.x, E.y, E.z)),
      I = z(m.load.r)
        .multiply(new At().setFromAxisAngle(new O(0, 1, 0), Math.PI))
        .multiply(new At().setFromAxisAngle(new O(1, 0, 0), Ye));
    (Ft.compose($.pinch, z($.load).invert().multiply(I), new O(1, 1, 1)),
      p.copy(Ft).invert());
  }
  const P = new It(),
    M = new It(),
    G = new O(),
    S = (z, I) =>
      I.multiplyMatrices(b.matrix, f.group.matrix)
        .multiply(f.mag.parent.matrix)
        .multiply(M.makeTranslation(0, -z, 0)),
    V = (z, I) => {
      const E = lt.group;
      (S(ps, P)
        .premultiply(g.matrix)
        .premultiply(i.matrixWorld)
        .decompose(E.position, E.quaternion, G),
        ot.v.set(0, -1, 0).applyQuaternion(E.quaternion).multiplyScalar(z),
        e.vel && ((ot.v.x += e.vel.x), (ot.v.z += e.vel.z)),
        ot.w.set(
          4 + Math.random() * 3,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 3,
        ),
        (ot.t = 0),
        (ot.on = !0),
        lt.show(I));
    },
    B = new At(),
    tt = new O(),
    ct = (z) => {
      const I = lt.group;
      if (ot.on) {
        ((ot.t += z),
          (ot.v.y -= 9.8 * z),
          I.position.addScaledVector(ot.v, z),
          tt.copy(ot.w).multiplyScalar(z));
        const E = tt.length();
        (E > 1e-6 &&
          I.quaternion.multiply(B.setFromAxisAngle(tt.divideScalar(E), E)),
          (I.position.y < e.pos.y + 0.1 || ot.t > 1.5) && (ot.on = !1));
      }
      I.visible = ot.on && g.visible;
    },
    ut = new At().setFromRotationMatrix(v.matrix),
    mt = (z, I, E, st) => {
      const nt = I.clone()
        .applyQuaternion(z.quaternion)
        .applyQuaternion(new At().setFromRotationMatrix(E));
      return {
        mesh: z,
        axis: I,
        q0: z.quaternion.clone(),
        elbow: z.position.clone().applyMatrix4(E).addScaledVector(nt, 0.28),
        drop: st,
      };
    },
    yt = (z, I) =>
      new It().compose(
        z,
        new At().setFromEuler(new pe(I.x, I.y, I.z)),
        new O(1, 1, 1),
      ),
    Mt = mt(
      R,
      new O(0, 0, -1),
      yt(m.hip.p, m.hip.r).multiply(f.group.matrix).multiply(v.matrix),
      new O(0.05, -0.12, 0.08),
    ),
    bt = mt(W, new O(0, 0, 1), j, new O(0, 0, 0)),
    ft = new At(),
    kt = new At(),
    Rt = new At(),
    Ct = new O(),
    $t = new O(),
    Qt = new It(),
    Xt = (z, I, E, st) => {
      if (st <= 0) {
        z.mesh.quaternion.copy(z.q0);
        return;
      }
      (Ct.copy(z.mesh.position).applyMatrix4(I),
        ft.setFromUnitVectors(
          z.axis,
          $t.copy(z.elbow).addScaledVector(z.drop, st).sub(Ct).normalize(),
        ),
        z.mesh.quaternion
          .copy(z.q0)
          .slerp(kt.copy(E).invert().multiply(ft), st));
    },
    H = new O(),
    at = new O(),
    Q = new O(),
    et = new At(),
    Wt = new O(),
    gt = new At(),
    Kt = new O(),
    Et = new At(),
    oe = new At(),
    Ot = new O(),
    we = new O(),
    ae = [];
  return (
    (s.onFire = (z) => ae.push(z)),
    (s.give = (z) => {
      ((s.has[z] = !0),
        z === "torch" && (C.visible = !0),
        z === "pistol" &&
          ((s.state = "draw"),
          (s.stateT = 0),
          (b.visible = !0),
          o.audio.play("pickup_item", { vol: 0.6 })));
    }),
    (s.toggleTorch = () => {
      ((s.on = !s.on), o.audio.play("flashlight_click", { vol: 0.5 }));
    }),
    (s.canFire = () =>
      s.has.pistol &&
      s.state === "idle" &&
      s.ammo > 0 &&
      o.time - s.lastShot >= s.cooldown &&
      !e.frozen),
    (s.reload = () => {
      !s.has.pistol ||
        s.state !== "idle" ||
        s.ammo === s.mag ||
        s.reserve <= 0 ||
        ((s.state = "reload"),
        (s.stateT = 0),
        (s._empty = s.ammo === 0),
        (s._cues = 0),
        (s._seated = s._dropped = !1));
    }),
    (s.fire = () => {
      if (!s.has.pistol || e.frozen || s.state === "draw") return !1;
      if (s.ammo <= 0)
        return (
          o.time - s.lastShot > 0.25 &&
            (o.audio.play("gun_dry_fire", { vol: 0.7 }), (s.lastShot = o.time)),
          s.reload(),
          !1
        );
      if (!s.canFire()) return !1;
      (s.ammo--, (s.lastShot = o.time), (s.kick = 1), f.setSlide(1));
      const z = new O(),
        I = new O();
      (i.getWorldPosition(z), i.getWorldDirection(I));
      const E = new O(),
        st = new O();
      (f.group.updateWorldMatrix(!0, !0), f.muzzleWorld(E, st));
      const nt = Ne(0.014, 0.004, s.aim);
      for (const Pt of ae)
        Pt({
          origin: z,
          dir: I,
          muzzle: E,
          muzzleDir: st,
          spread: nt,
          player: !0,
        });
      return (
        (e.recoil.pitch += 0.016 + Math.random() * 0.006),
        (e.recoil.yaw += (Math.random() - 0.5) * 0.008),
        (e.shake += 0.3),
        s.ammo === 0 && (s._autoAt = o.time + 0.35),
        !0
      );
    }),
    (s.update = (z) => {
      const I = o.input,
        E = I.locked || o.service;
      ((s.stateT += z), T(), I.consume("KeyF") && s.toggleTorch());
      const st = Zt(e.moving / 3.4);
      (n.slerp(i.quaternion, 1 - Math.exp(-(14 - 5 * Zt(st)) * z)),
        (r = Dt(r, 0, 5, z)));
      const nt = s.has.torch && s.on && h <= 0 && !s.suppress;
      ((a = Dt(a, nt ? 1 : 0, s.suppress ? 6 : 22, z)),
        a < 0.004 && (a = 0),
        (l.visible = !0),
        (l.shadow.autoUpdate = a > 0),
        l.shadow.map || (l.shadow.needsUpdate = !0),
        (C.visible = s.has.torch),
        i.updateWorldMatrix(!0, !1),
        (l.intensity = 26 * a * (1 - 0.35 * r) * (s.torchMul ?? 1)),
        u.color.setRGB(s.on ? 3 : 0.05, s.on ? 2.7 : 0.05, s.on ? 2.2 : 0.05));
      let Pt = 0;
      (E &&
        s.has.pistol &&
        I.down("Mouse2") &&
        (s.state === "idle" || s.state === "fire") &&
        (Pt = 1),
        (s.aim = Dt(s.aim, Pt, 14, z)),
        s.state === "draw" &&
          ((s.drawK = Zt(s.stateT / 0.55)),
          s.stateT > 0.55 && ((s.state = "idle"), (s.drawK = 1))),
        s._autoAt && o.time >= s._autoAt && ((s._autoAt = 0), s.reload()),
        s.state === "reload" && !s.has.pistol && (s.state = "idle"));
      const vt = s.state === "reload",
        rt = s.stateT,
        Lt = !!s._empty;
      if (vt) {
        if (
          (ri.forEach(([xt, Tt, Bt], ye) => {
            rt >= Tt &&
              !(s._cues & (1 << ye)) &&
              (Lt || !Bt) &&
              ((s._cues |= 1 << ye), o.audio.play(xt, { vol: 0.7 }));
          }),
          rt >= it.seat && !s._seated)
        ) {
          s._seated = !0;
          const xt = Math.min(s.mag - s.ammo, s.reserve);
          ((s.ammo += xt), (s.reserve -= xt));
        }
        rt >= (Lt ? it.end : it.endTac) && (s.state = "idle");
      }
      (E &&
        (I.down("Mouse0") && s.state === "idle" && s.fire(),
        I.consume("KeyR") && s.reload()),
        (s.kick = Math.max(0, s.kick - z * 9)));
      const ne = s.has.pistol && (s.ammo === 0 || (vt && Lt && rt < it.slam));
      f.setSlide(
        Math.max(ne ? li : 0, f.slideK - z * (vt ? 30 : 10)),
        s.ammo > 0 && !ne,
      );
      const Gt = ni((s.has.pistol && s.drawK) || 0);
      (x.copy(m.hidden.p).lerp(m.hip.p, Gt),
        A.copy(m.hidden.r).lerp(m.hip.r, Gt),
        x.lerp(m.ads.p, s.aim),
        A.lerp(m.ads.r, s.aim));
      let Jt = 0;
      if (vt) {
        const xt = Lt ? it.ret : it.retTac,
          Tt = ee(it.turn[0], it.turn[1], rt);
        ((Jt = ee(0, it.cant, rt) * (1 - ee(xt[0], xt[1], rt))),
          x.lerp(H.copy(m.drop.p).lerp(m.load.p, Tt), Jt),
          A.lerp(at.copy(m.drop.r).lerp(m.load.r, Tt), Jt));
      }
      ((d.p.x = Dt(d.p.x, x.x, 18, z)),
        (d.p.y = Dt(d.p.y, x.y, 18, z)),
        (d.p.z = Dt(d.p.z, x.z, 18, z)),
        (d.r.x = Dt(d.r.x, A.x, 18, z)),
        (d.r.y = Dt(d.r.y, A.y, 18, z)),
        (d.r.z = Dt(d.r.z, A.z, 18, z)),
        (s.bobK = Dt(s.bobK, Zt(e.moving / 3.5), 6, z)));
      const _e = e.bobPhase,
        Se = Math.cos(_e) * 0.006 * s.bobK * (1 - s.aim * 0.85),
        Te = Math.abs(Math.sin(_e)) * 0.008 * s.bobK * (1 - s.aim * 0.85),
        Ae = e.lastLook || { x: 0, y: 0 };
      ((s.sway.x = Dt(s.sway.x, Zt(-Ae.x * 4e-4, -0.03, 0.03), 9, z)),
        (s.sway.y = Dt(s.sway.y, Zt(Ae.y * 4e-4, -0.03, 0.03), 9, z)));
      const me = s.kick,
        Be = 0.028 * me * (1 - 0.4 * s.aim),
        Pe = 0.012 * me;
      let te = 0,
        Ue = 0,
        qe = 0,
        Ve = 0,
        es = 0,
        Re = 0;
      if (vt) {
        const xt = $e(rt - it.release),
          Tt = $e(rt - it.seat),
          Bt = Lt ? $e(rt - it.slam) : 0;
        ((Re -= 0.03 * xt),
          (es += 0.015 * xt),
          H.set(0, Math.cos(Ye), -Math.sin(Ye))
            .applyEuler(q.set(d.r.x, d.r.y, d.r.z))
            .multiplyScalar(0.014 * Tt),
          (te += H.x),
          (Ue += H.y),
          (qe += H.z),
          (Re += 0.05 * Tt),
          (Ve += 0.03 * Tt),
          (qe -= 0.008 * Bt),
          (Ue -= 0.003 * Bt),
          (Ve -= 0.05 * Bt),
          (Re += 0.025 * Bt));
      }
      (b.position.set(
        d.p.x + Se + s.sway.x + te,
        d.p.y + Te + s.sway.y - Pe * 0.4 + Ue,
        d.p.z + Be + qe,
      ),
        b.rotation.set(
          d.r.x + 0.11 * me * (1 - 0.5 * s.aim) + s.sway.y * 1.4 + Ve,
          d.r.y + s.sway.x * 1.4 + es,
          d.r.z + Re,
        ),
        b.updateMatrix(),
        Xt(
          Mt,
          Qt.multiplyMatrices(b.matrix, f.group.matrix).multiply(v.matrix),
          Rt.copy(b.quaternion).multiply(f.group.quaternion).multiply(ut),
          Jt,
        ));
      let ss = 0,
        is = !0;
      if (vt && rt < it.seat && rt > it.release) {
        const xt = rt - it.release,
          Tt = 0.35 * xt + 4.5 * xt * xt;
        Tt < ps && !s._dropped
          ? (ss = Tt)
          : ((is = !1),
            s._dropped || ((s._dropped = !0), V(0.35 + 9 * xt, !Lt)));
      }
      ((f.mag.visible = is),
        f.setMag(ss, !(vt && Lt && rt < it.seat)),
        (zt.group.visible =
          vt && rt > (it.down[1] + it.up[0]) / 2 && rt < it.seat),
        ct(z),
        Wt.set(
          -0.19 + Se * 1.3 + s.sway.x * 0.7,
          -0.16 + Te * 1.3 + s.sway.y * 0.7 - s.aim * 0.03,
          -0.37 + s.aim * 0.02,
        ),
        gt.setFromEuler(q.set(0.03 + s.sway.y, 0.14 + s.sway.x, 0.02)),
        Q.copy(Wt),
        et.copy(gt));
      let re = 0;
      if (vt) {
        const xt = ee(it.down[0], it.down[1], rt),
          Tt = ee(it.up[0], it.up[1], rt),
          Bt = ee(it.back[0], it.back[1], rt),
          ye = Ne(
            $.hold[0],
            $.hold[1],
            ee(it.up[1] - 0.04, it.seat - 0.03, rt),
          );
        if (
          (zt.group.matrix.copy(Ft).multiply(M.makeTranslation(0, ye, 0)),
          (re = xt * (1 - Bt)),
          re > 0)
        ) {
          if ((Q.lerp($.fetch.p, xt), et.slerp($.fetch.q, xt), Tt > 0)) {
            const Ms =
              rt >= it.seat
                ? 0
                : hi *
                  (1 -
                    Math.pow(Zt((rt - it.up[1]) / (it.seat - it.up[1])), 2.2));
            (S(Ms + ye, P)
              .multiply(p)
              .decompose(Kt, Et, G),
              Q.lerp(Kt, Tt),
              et.slerp(Et, Tt));
          }
          Bt > 0 && (Q.lerp(Wt, Bt), et.slerp(gt, Bt));
        }
      }
      (C.position.copy(Q),
        C.quaternion.copy(et),
        C.updateMatrix(),
        Xt(bt, C.matrix, et, re));
      const os = Z.set(-0.19 + s.sway.x * 0.5, -0.16 + s.sway.y * 0.5, -0.53);
      if ((Ot.set(0, 0, -1), re > 0)) {
        oe.copy(gt).invert().premultiply(et);
        const xt = 2 * Math.acos(Math.min(1, Math.abs(oe.w))),
          Tt = Math.min(0.55 * re, xt > 1e-4 ? 0.28 / xt : 1);
        (Ot.applyQuaternion(Et.identity().slerp(oe, Tt)),
          os.lerp(we.set(0, 0, -0.12).applyQuaternion(et).add(Q), 0.6 * re));
      }
      (l.position.copy(os.applyMatrix4(i.matrixWorld)),
        l.target.position
          .copy(l.position)
          .addScaledVector(Ot.applyQuaternion(n), 5));
      const as = Ne((o.baseFov ?? 72) + (o.fovKick || 0), 54, s.aim);
      (Math.abs(i.fov - as) > 0.02 &&
        !o.cameraOverride &&
        !o.camCtl &&
        ((i.fov = Dt(i.fov, as, 14, z)), i.updateProjectionMatrix()),
        (e.speedMul = 1 - 0.28 * s.aim),
        y.update(z));
    }),
    (s.flickerTorch = (z = 1) => {
      r = z;
    }),
    (s.killTorch = (z = 0.4) => {
      ((h = z),
        setTimeout(() => {
          h = 0;
        }, z * 1e3));
    }),
    (s.torch = l),
    (s.pistol = f),
    (s.vm = g),
    (s.gunRoot = b),
    (s.setVisible = (z) => {
      g.visible = z;
    }),
    s
  );
}
const di = Math.PI / 180,
  ve = 180 / Math.PI,
  _t = (o, t = 0, i = 1) => (o < t ? t : o > i ? i : o),
  xe = (o, t, i) => o + (t - o) * i,
  Qe = (o, t, i) => {
    const e = _t((i - o) / (t - o));
    return e * e * (3 - 2 * e);
  },
  Nt = (o, t, i, e) => o + (t - o) * (1 - Math.exp(-i * e)),
  se = (o, t) => {
    let i = t - o;
    for (; i > Math.PI;) i -= 2 * Math.PI;
    for (; i < -Math.PI;) i += 2 * Math.PI;
    return i;
  },
  Ut = (o, t) => Math.round(o / t) * t,
  dt = pt,
  Ze = {
    neutral: {
      brows: 0,
      open: 1,
      smile: 0,
      blush: 0.22,
      sad: 0,
      anger: 0,
      tears: 0,
    },
    whisper: {
      brows: 0.3,
      open: 0.96,
      smile: 0,
      blush: 0.2,
      sad: 0.05,
      anger: 0,
      tears: 0,
    },
    scared: {
      brows: 0.9,
      open: 1.16,
      smile: -0.25,
      blush: 0.12,
      sad: 0.25,
      anger: 0,
      tears: 0.05,
    },
    relieved: {
      brows: 0.35,
      open: 0.82,
      smile: 0.5,
      blush: 0.4,
      sad: 0,
      anger: 0,
      tears: 0.1,
    },
    urgent: {
      brows: -0.3,
      open: 1.12,
      smile: -0.1,
      blush: 0.2,
      sad: 0,
      anger: 0.12,
      tears: 0,
    },
    determined: {
      brows: -0.55,
      open: 0.95,
      smile: -0.05,
      blush: 0.2,
      sad: 0,
      anger: 0.3,
      tears: 0,
    },
    pain: {
      brows: 0.8,
      open: 0.62,
      smile: -0.4,
      blush: 0.15,
      sad: 0.4,
      anger: 0,
      tears: 0.2,
    },
    annoyed: {
      brows: -0.45,
      open: 0.82,
      smile: -0.1,
      blush: 0.2,
      sad: 0,
      anger: 0.18,
      tears: 0,
    },
    scream: {
      brows: 0.8,
      open: 1.15,
      smile: -0.4,
      blush: 0.15,
      sad: 0.2,
      anger: 0.4,
      tears: 0.15,
    },
    sad: {
      brows: 0.75,
      open: 0.86,
      smile: -0.25,
      blush: 0.32,
      sad: 0.9,
      anger: 0,
      tears: 0.5,
    },
    dead: {
      brows: 0.2,
      open: 0,
      smile: -0.15,
      blush: 0.05,
      sad: 0.3,
      anger: 0,
      tears: 0,
    },
  },
  ui = {
    sad: "sad",
    gently: "sad",
    emotional: "sad",
    softly: "whisper",
    scared: "scared",
    whispering: "whisper",
    nervous: "scared",
    relieved: "relieved",
    urgent: "urgent",
    screaming: "scream",
    breathless: "urgent",
    gasps: "scared",
    annoyed: "annoyed",
    pained: "pain",
    determined: "determined",
  };
class fi {
  constructor(t, i, e, s = {}) {
    ((this.game = t),
      (this.akane = i),
      (this.nav = e),
      (this.pos = new dt()),
      (this.yaw = 0),
      (this.speed = 0),
      (this.moveSpeed = 1.3),
      (this.turnRate = 0),
      (this.phase = 0),
      (this.t = 0),
      (this.circle = { x: 0, z: 0, r: 0.27 }),
      t.world.circles.push(this.circle),
      (this.path = null),
      (this.pathIdx = 0),
      (this.arrive = null),
      (this.arriveDist = 0.25),
      (this.wantYaw = null),
      (this.gun = {
        mode: "none",
        raise: 0,
        recoil: 0,
        aim: null,
        slide: 0,
        hands: 2,
      }),
      (this.arms = "down"),
      (this.touchAt = null),
      (this.kneelK = 0),
      (this.kneelGoal = 0),
      (this.pointK = 0),
      (this.sitK = 0),
      (this.sitGoal = 0),
      (this.seatY = 0.46),
      (this.lookGoal = null),
      (this.lookYaw = 0),
      (this.lookPitch = 0),
      (this.glance = { t: 2, yaw: 0, pitch: 0 }),
      (this.emo = { ...Ze.neutral }),
      (this.emoGoal = "neutral"),
      (this.blinkT = 3),
      (this.blink = 0),
      (this.speaking = !1),
      (this.mouth = { open: 0, shape: "M" }),
      (this._sayTok = 0),
      (this._voice = null),
      (this._sayPrev = null),
      (this.flinch = 0),
      (this.handsUp = 0),
      (this.busy = null),
      (this.hits = ks()),
      (this.dead = !1),
      (this.deadK = 0),
      (this.onDeath = null),
      (this.onWound = null),
      (this.workCue = null),
      (this._wk = {
        crouch: 0,
        lean: 0,
        hop: 0,
        k: 0,
        L: new dt(),
        R: new dt(),
        back: 1,
      }),
      (this.root = i.root),
      (this.visible = !0),
      (this.pistol = i.pistol),
      (this.pistolLight = null),
      (this._v = new dt()),
      (this._w = new dt()),
      (this.onFire = null),
      (this.onStep = null),
      (this.turnBias = 0),
      (this.faceHold = 0),
      (this.voiceUntil = 0),
      (this.wounds = 1),
      (this.bike = null),
      (this.rideK = 0),
      (this._mount = null),
      (this._dismount = null),
      (this._rb = null));
  }
  place(t, i, e = this.yaw, s) {
    (this.bike || this._dismount) && this.ride(null, { now: !0 });
    const l = this.game.world.groundAt;
    (this.pos.set(t, s ?? (l ? l(t, i, this.pos.y) : 0), i),
      (this.yaw = e),
      (this.circle.x = t),
      (this.circle.z = i),
      (this.path = null),
      (this.speed = 0),
      this.apply());
  }
  get x() {
    return this.pos.x;
  }
  get z() {
    return this.pos.z;
  }
  headWorld(t = new dt()) {
    return (this.akane.char.rig.head.getWorldPosition(t), t);
  }
  chestWorld(t = new dt()) {
    return (this.akane.char.rig.chest.getWorldPosition(t), t);
  }
  distTo(t, i) {
    return Math.hypot(this.pos.x - t, this.pos.z - i);
  }
  walkTo(t, i, { speed: e = 1.3, arrive: s = 0.25 } = {}) {
    (this.arrive && this.arrive(!1), ([t, i] = this.nav.snap(t, i, !0)));
    const l = this.nav.path(this.pos.x, this.pos.z, t, i, { avoidSealed: !0 });
    return l
      ? ((this.path = l),
        (this.pathIdx = 0),
        (this.moveSpeed = e),
        (this.arriveDist = s),
        (this.goal = [t, i]),
        (this.walkDeadline =
          this.t + 3 + (Math.hypot(t - this.pos.x, i - this.pos.z) / e) * 2.5),
        new Promise((n) => {
          this.arrive = n;
        }))
      : (console.warn("[akane] no route to", t.toFixed(2), i.toFixed(2)),
        Promise.resolve(!1));
  }
  stop() {
    if (((this.path = null), this.arrive)) {
      const t = this.arrive;
      ((this.arrive = null), t(!1));
    }
  }
  followSpot(t, i) {
    const e = this.nav,
      s = this.game.roomAt || ie,
      l = s(t.x, t.z),
      [n, r] = e.snap(t.x, t.z, !0);
    let h = null,
      a = 1e9;
    for (const y of [1.4, 1.9, 2.5]) {
      for (const g of [150, -150, 115, -115, 180, 80, -80, 30, -30, 0]) {
        const w = i + g * di,
          _ = n - Math.sin(w) * y,
          c = r - Math.cos(w) * y;
        if (
          !e.walkable(_, c, !0) ||
          (l && s(_, c) !== l) ||
          !e.lineFree(_, c, n, r, !0)
        )
          continue;
        const k = Math.abs(g) < 60 ? 1.8 : 0,
          K =
            Math.hypot(_ - this.pos.x, c - this.pos.z) +
            Math.abs(180 - Math.abs(g)) * 0.004 +
            k;
        K < a && ((a = K), (h = [_, c]));
      }
      if (h) break;
    }
    return h;
  }
  keepNear(t, i, { near: e = 2.7, speed: s = 1.6 } = {}) {
    const l = this.distTo(t.x, t.z),
      n = this.goal,
      r = this.path && n && Math.hypot(n[0] - t.x, n[1] - t.z) < 2.4;
    if (l <= e || r || (this._followT && this.t - this._followT < 0.5))
      return !1;
    this._followT = this.t;
    const h = this.followSpot(t, i);
    return (
      h
        ? this.walkTo(h[0], h[1], { speed: s, arrive: 0.35 })
        : this.walkTo(t.x, t.z, { speed: s, arrive: 1.3 }),
      !0
    );
  }
  turnTo(t, i) {
    return (
      (this.wantYaw = Math.atan2(t - this.pos.x, i - this.pos.z)),
      new Promise((e) => {
        this._turnRes = e;
      })
    );
  }
  faceYaw(t) {
    this.wantYaw = t;
  }
  lookAt(t) {
    this.lookGoal = t;
  }
  set attend(t) {
    ((this._attend = !!t),
      !t &&
        this._attendTurn &&
        ((this._attendTurn = !1), (this.wantYaw = null)));
  }
  get attend() {
    return !!this._attend;
  }
  emote(t, i = 0) {
    ((this.emoGoal = t), (this.faceHold = i));
  }
  setGun(t, i = 2) {
    ((this.gun.mode = t), (this.gun.hands = i));
  }
  aimAt(t) {
    ((this.gun.aim = t), this.setGun("aim"));
  }
  lowReady() {
    ((this.gun.aim = null), this.setGun("low"));
  }
  holster() {
    ((this.gun.aim = null), this.setGun("none"));
  }
  kneelAt(t) {
    ((this.kneelGoal = 1), (this.touchWorld = t), (this.arms = "touch"));
  }
  standUp() {
    ((this.kneelGoal = 0),
      (this.sitGoal = 0),
      (this.touchWorld = null),
      this.arms === "touch" && (this.arms = "down"));
  }
  sitDown(t = 0.46) {
    ((this.sitGoal = 1), (this.seatY = t));
  }
  work(t) {
    this.workCue = t;
  }
  gesturePoint(t = 1.4) {
    this.pointK = t;
  }
  scare(t = 1.2) {
    this.handsUp = t;
  }
  hurt() {
    ((this.flinch = 1),
      !(this.dead || !this.hits.hit(this.game.time)) &&
        (this.hits.dead
          ? ((this.dead = !0), this.onDeath && this.onDeath())
          : this.onWound && this.onWound(this.hits.n)));
  }
  revive() {
    ((this.dead = !1),
      this.hits.reset(),
      (this.kneelGoal = 0),
      (this.sitGoal = 0),
      (this.sitK = 0),
      (this.deadK = 0));
  }
  ride(t, { now: i = !1 } = {}) {
    if (((t = t || null), t === this.bike && !this._dismount)) return;
    const e = new dt();
    if (t) {
      (this.bike && this.bike !== t && this.ride(null, { now: !0 }),
        this._dismount && this._finishDismount(),
        this.stop(),
        (this.workCue = null),
        (this.kneelGoal = 0),
        (this.sitGoal = 0),
        (this.touchWorld = null),
        (this.arms = "down"),
        this.setGun("none"));
      const s = t.rider ? t.rider.root : t.seats.driver;
      (t.root.updateMatrixWorld(!0),
        (this._rootParent = this.root.parent),
        this.root.getWorldPosition(e));
      const l = s.worldToLocal(e.clone()),
        n = new dt(0, 0, 1).transformDirection(
          (t.rider?.root || t.root).matrixWorld,
        ),
        r = Math.atan2(n.x, n.z);
      (s.add(this.root),
        (this._mount = i ? null : { from: l, yaw: se(r, this.yaw) }),
        this.root.position.copy(i ? e.set(0, 0, 0) : l),
        this.root.rotation.set(0, i ? 0 : this._mount.yaw, 0),
        (this.bike = t),
        (t.load = 1),
        (this.rideK = i ? 1 : 0),
        (this.circle.on = !1),
        (this._rb = null));
    } else if (this.bike) {
      const s = this.bike;
      s.root.updateMatrixWorld(!0);
      const l = s.rider
        ? new dt().fromArray(s.rider.exit || [0, 0, 0])
        : s.seats.driver.worldToLocal(
            s.root.localToWorld(new dt(0.62, 0, -0.12)),
          );
      ((this._dismount = { bike: s, to: l }),
        (this.bike = null),
        i && ((this.rideK = 0), this._finishDismount()));
    } else this._dismount && i && ((this.rideK = 0), this._finishDismount());
  }
  get riding() {
    return !!(this.bike || this._dismount);
  }
  _finishDismount() {
    const t = this._dismount;
    if (!t) return;
    t.bike.root.updateMatrixWorld(!0);
    const i = (
        t.bike.rider ? t.bike.rider.root : t.bike.seats.driver
      ).localToWorld(t.to.clone()),
      e = new dt(0, 0, 1).transformDirection(
        (t.bike.rider?.root || t.bike.root).matrixWorld,
      );
    ((this._rootParent || this.game.scene).add(this.root),
      this.root.rotation.set(0, 0, 0),
      (t.bike.load = 0),
      (this._dismount = null),
      (this.rideK = 0),
      (this._mount = null),
      (this.circle.on = !0),
      this.place(i.x, i.z, Math.atan2(e.x, e.z), t.bike.rider ? i.y : void 0));
  }
  rideStep(t) {
    const i = this.bike || this._dismount?.bike;
    if (!i) return;
    this.rideK = Math.min(
      1,
      Math.max(0, this.rideK + ((this.bike ? 1 : -1) * t) / 0.75),
    );
    const e = this.rideK * this.rideK * (3 - 2 * this.rideK);
    if (this.bike && this._mount) {
      const y = this._mount;
      (this.root.position.copy(y.from).multiplyScalar(1 - e),
        this.root.rotation.set(0, y.yaw * (1 - e), 0),
        this.rideK >= 1 &&
          ((this._mount = null),
          this.root.position.set(0, 0, 0),
          this.root.rotation.set(0, 0, 0)));
    }
    if (
      this._dismount &&
      (this.root.position.copy(this._dismount.to).multiplyScalar(1 - e),
      this.root.rotation.set(0, 0, 0),
      this.rideK <= 0)
    ) {
      this._finishDismount();
      return;
    }
    this.root.updateMatrixWorld(!0);
    const s = this._v;
    (this.root.getWorldPosition(s),
      this.pos.set(s.x, i.rider ? s.y : 0, s.z),
      (this.circle.x = s.x),
      (this.circle.z = s.z));
    const l = this._w
      .set(0, 0, 1)
      .transformDirection((i.rider?.root || i.root).matrixWorld);
    ((this.yaw = Math.atan2(l.x, l.z)),
      (this.speed = 0),
      (this.turnRate = 0),
      (this.path = null));
    const n = i.state || {},
      r =
        this._rb ||
        (this._rb = {
          y: n.chassisY || 0,
          v: 0,
          ly: n.lean || 0,
          sw: 0,
          swV: 0,
        }),
      h = n.chassisY || 0;
    ((r.v += ((h - r.y) * 140 - r.v * 13) * t), (r.y += r.v * t));
    const a = t > 0 ? ((n.lean || 0) - r.ly) / t : 0;
    ((r.ly = n.lean || 0),
      (r.swV += ((-a * 0.06 - r.sw) * 90 - r.swV * 11) * t),
      (r.sw += r.swV * t));
  }
  fire() {
    if (this.gun.mode !== "aim") return !1;
    this.gun.recoil = 1;
    const t = new dt(),
      i = new dt();
    return (
      this.akane.pistol.muzzleWorld(t, i),
      this.onFire && this.onFire(t, i),
      !0
    );
  }
  async say(t, { emote: i, hold: e = 0.5, subtitle: s = !0 } = {}) {
    const l = this.game,
      n = l.audio.manifest[t],
      r = ++this._sayTok;
    if (
      l.playerSpeaking &&
      (await l.sched.until(() => !l.playerSpeaking, 4), r !== this._sayTok)
    )
      return;
    if (this.speaking && this._voice)
      try {
        this._voice.stop(0.12);
      } catch {}
    const h = n?.text || "",
      a = ((h.match(/^\[([^\]]+)\]/) || [])[1] || "").split(/[ ,]+/)[0],
      y = i || ui[a] || "neutral",
      g = this._sayPrev && this.speaking ? this._sayPrev : this.emoGoal;
    ((this._sayPrev = g), this.emote(y, 9), (this.speaking = !0));
    const w = this.headWorld();
    s &&
      l.hud &&
      l.hud.subtitle(
        h.replace(/^\[[^\]]*\]\s*/, ""),
        (n?.dur ?? 2) + 0.3,
        "AKANE",
      );
    const _ =
      a === "whispering"
        ? 0.7
        : a === "screaming"
          ? 1.12
          : a === "scared" || a === "nervous"
            ? 0.86
            : 1;
    ((this._voice = null),
      await l.audio.voice(t, {
        pos: [w.x, w.y, w.z],
        ref: 2.2,
        rolloff: 0.8,
        reverb: 0.3,
        vol: _,
        bus: "akane",
        onHandle: (k) => {
          r === this._sayTok && (this._voice = k);
        },
      }),
      r === this._sayTok &&
        ((this.speaking = !1),
        (this._voice = null),
        (this._sayPrev = null),
        (this.faceHold = e),
        this.emoGoal === y &&
          (this.emoGoal =
            y === "scream" || y === "urgent"
              ? "scared"
              : g === y
                ? "neutral"
                : g)));
  }
  update(t) {
    ((this.t += t),
      (this.dt = t),
      this.bike || this._dismount ? this.rideStep(t) : this.locomote(t),
      this.timers(t),
      this.apply());
    const i = this.speaking && this._voice?.panner;
    if (i) {
      const e = this.headWorld(this._vh || (this._vh = new dt()));
      ((i.positionX.value = e.x),
        (i.positionY.value = e.y),
        (i.positionZ.value = e.z));
    }
  }
  locomote(t) {
    let i = 0,
      e = null;
    if (
      this.path &&
      this.walkDeadline &&
      this.t > this.walkDeadline &&
      ((this.path = null), (this.walkDeadline = 0), this.arrive)
    ) {
      const y = this.arrive;
      ((this.arrive = null), y(!1));
    }
    if (this.path && this.pathIdx < this.path.length) {
      const y = this.path[this.pathIdx],
        g = y[0] - this.pos.x,
        w = y[1] - this.pos.z,
        _ = Math.hypot(g, w),
        c = this.pathIdx === this.path.length - 1;
      if (_ < (c ? this.arriveDist : 0.2)) {
        if (
          (this.pathIdx++,
          this.pathIdx >= this.path.length && ((this.path = null), this.arrive))
        ) {
          const k = this.arrive;
          ((this.arrive = null), k(!0));
        }
      } else
        ((e = Math.atan2(g, w)),
          (i = this.moveSpeed * (c ? _t(0.35 + _ / 1.1, 0, 1) : 1)),
          (i *= 1 - 0.85 * Qe(0.5, 1.6, Math.abs(se(this.yaw, e)))));
    }
    const s = this.workCue;
    let l = !1;
    if (s && s.pos && !this.path && !this.grabbed) {
      l = !0;
      const y = s.pos[0] - this.pos.x,
        g = s.pos[1] - this.pos.z,
        w = 1 - Math.exp(-12 * t),
        _ = 2.6 * t;
      let c = y * w,
        k = g * w;
      const K = Math.hypot(c, k);
      (K > _ && ((c *= _ / K), (k *= _ / K)),
        (this.pos.x += c),
        (this.pos.z += k),
        (i = Math.hypot(c, k) / Math.max(t, 1e-4)),
        i > 0.05 &&
          (this._wk.back =
            Math.sin(this.yaw) * c + Math.cos(this.yaw) * k < 0 ? -1 : 1),
        s.yaw != null && (this.wantYaw = s.yaw));
    }
    if (this.gun.mode === "aim" && this.gun.aim) {
      const y =
        typeof this.gun.aim == "function" ? this.gun.aim() : this.gun.aim;
      y &&
        !this.path &&
        (this.wantYaw = Math.atan2(y.x - this.pos.x, y.z - this.pos.z));
    }
    if (
      this._attend &&
      !this.path &&
      !s &&
      this.gun.mode !== "aim" &&
      this.kneelK < 0.3 &&
      this.sitK < 0.3 &&
      !this.dead &&
      !this.calmHead &&
      this.lookGoal &&
      (this.wantYaw == null || this._attendTurn)
    ) {
      const y =
          typeof this.lookGoal == "function" ? this.lookGoal() : this.lookGoal,
        g = Math.atan2(y.x - this.pos.x, y.z - this.pos.z),
        w = Math.abs(se(this.yaw, g));
      (this._attendTurn ? w > 0.05 : w > 0.85) &&
        ((this.wantYaw = g), (this._attendTurn = !0));
    }
    let n = e ?? this.wantYaw,
      r = null;
    if (
      e != null &&
      this.strafe > 0 &&
      this.gun.mode === "aim" &&
      this.gun.aim
    ) {
      const y =
        typeof this.gun.aim == "function" ? this.gun.aim() : this.gun.aim;
      y &&
        ((r = e),
        (n =
          e +
          _t(
            se(e, Math.atan2(y.x - this.pos.x, y.z - this.pos.z)),
            -this.strafe,
            this.strafe,
          )));
    }
    let h = 0;
    if (n != null) {
      const y = se(this.yaw, n),
        g = this.gun.mode === "aim" ? 9 : this._attendTurn ? 2.6 : 6;
      if (
        ((h = _t(y * 10, -g, g)),
        (this.yaw += h * t),
        Math.abs(y) < 0.11 && this._turnRes)
      ) {
        const w = this._turnRes;
        ((this._turnRes = null), w(!0));
      }
      e == null &&
        Math.abs(y) < 0.02 &&
        ((this.wantYaw = null), (this._attendTurn = !1));
    }
    if (
      ((this.turnRate = Nt(this.turnRate, Math.abs(h), 12, t)),
      (this.speed = l
        ? Nt(this.speed, i, 14, t)
        : Nt(this.speed, i, i > this.speed ? 5 : 8, t)),
      this.speed > 0.005 && !l)
    ) {
      const y = this.pos.x,
        g = this.pos.z,
        w = r ?? this.yaw;
      if (
        ((this.pos.x += Math.sin(w) * this.speed * t),
        (this.pos.z += Math.cos(w) * this.speed * t),
        this.sideT > 0)
      ) {
        this.sideT -= t;
        const c = this.sideDir;
        ((this.pos.x += Math.cos(this.yaw) * c * 0.9 * t),
          (this.pos.z -= Math.sin(this.yaw) * c * 0.9 * t));
      }
      xs(this.game.world, this.pos, 0.27, this.pos.y, this.circle);
      const _ = Math.hypot(this.pos.x - y, this.pos.z - g);
      ((this.pinT =
        this.path && i > 0.4 && _ < this.speed * t * 0.25
          ? (this.pinT || 0) + t
          : 0),
        this.pinT > 0.6 &&
          ((this.pinT = 0),
          (this.sideT = 0.5),
          (this.sideDir = Math.random() < 0.5 ? -1 : 1)));
    }
    ((this.circle.x = this.pos.x), (this.circle.z = this.pos.z));
    const a = this.game.world.groundAt;
    if (a && !this.noGround) {
      const y = a(this.pos.x, this.pos.z, this.pos.y),
        g = y - this.pos.y;
      this.pos.y = Math.abs(g) > 0.6 ? y : this.pos.y + g * Math.min(1, t * 14);
    }
  }
  timers(t) {
    ((this.gun.raise = Nt(
      this.gun.raise,
      this.gun.mode === "aim" ? 1 : (this.gun.mode === "low", 0),
      11,
      t,
    )),
      this.gun.mode === "aim" &&
        (this.gun.raise = Math.min(1, this.gun.raise + t * 3.5)),
      (this.gun.recoil = Math.max(0, this.gun.recoil - t * 7)),
      (this.kneelK = Nt(this.kneelK, this.kneelGoal, 3.2, t)),
      (this.sitK = Nt(this.sitK, this.sitGoal, 2.4, t)),
      (this.pointK = Math.max(0, this.pointK - t)),
      (this.handsUp = Math.max(0, this.handsUp - t)),
      (this.flinch = Math.max(0, this.flinch - t * 4)),
      this.dead || this.hits.update(t, this.game.time),
      (this.deadK = this.dead ? Math.min(1, this.deadK + t * 1.6) : 0),
      this.faceHold > 0 &&
        !this.speaking &&
        ((this.faceHold -= t),
        this.faceHold <= 0 &&
          !this.forceEmo &&
          (this.emoGoal =
            this.emoGoal === "scream"
              ? "scared"
              : this.emoGoal === "relieved" || this.emoGoal === "urgent"
                ? "neutral"
                : this.emoGoal)));
  }
  apply() {
    const t = this.t,
      i = this.game,
      e = this.dt || 1 / 60,
      s = this.bike || this._dismount?.bike || null;
    s ||
      (this.root.position.set(
        this.pos.x,
        this.pos.y + (this.yOff || 0),
        this.pos.z,
      ),
      (this.root.rotation.y = this.yaw));
    const l = Math.max(
        this.speed,
        this.turnRate * 0.22 * (this.gun.mode === "aim" ? 0.6 : 1),
      ),
      n = Qe(1.75, 2.8, this.speed),
      r = xe(0.3, 0.4, n),
      h = xe(0.6, 0.46, n),
      a = {
        guitar: 0,
        breathe: t * 0.24,
        arms: this.arms,
        wounds: this.wounds,
        hairBudget: 18,
      };
    if (
      ((a.walkAmp = l > 0.06 ? _t(l / 1.15) : 0),
      (a.walk = this.phase),
      (a.walkStride = r),
      (a.walkLift = xe(0.085, 0.17, n)),
      (a.walkDuty = h),
      (a.lean = n * 9 + this.flinch * -6),
      (a.kneel = this.kneelK),
      this.sitK > 0.002 &&
        ((a.sit = this.sitK),
        (a.seat = this.seatY),
        (a.walkAmp *= 1 - this.sitK)),
      this.deadK > 0)
    ) {
      const v = this.deadK * this.deadK * (3 - 2 * this.deadK);
      ((a.kneel = Math.max(a.kneel, v)), (a.lean += 38 * v));
    }
    const y = this.workCue,
      g = this._wk,
      w = 1 - Math.exp(-9 * e);
    ((g.crouch += ((y?.crouch ?? 0) - g.crouch) * w),
      (g.lean += ((y?.lean ?? 0) - g.lean) * w),
      (g.hop += ((y?.hop ?? 0) - g.hop) * (1 - Math.exp(-20 * e))));
    const _ = !!(y && y.hold && y.L && y.R && !this.grabbed);
    (_ && (g.L.fromArray(y.L), g.R.fromArray(y.R)),
      (g.k += ((_ ? 1 : 0) - g.k) * (1 - Math.exp(-(_ ? 16 : 10) * e))),
      g.crouch > 0.005 && (a.kneel = Math.max(a.kneel, g.crouch)),
      (a.lean += g.lean),
      g.hop > 0.005 && (a.jump = g.hop));
    let c = null;
    if (s && s.rider && this.rideK > 0.001) {
      const v = s.rider,
        R = this.rideK * this.rideK * (3 - 2 * this.rideK);
      ((a.walkAmp = 0),
        (a.kneel = 0),
        v.pose === "seat" && ((a.sit = R), (a.seat = v.seat ?? 0.46)),
        (a.lean =
          (v.lean ?? 0) * R + this.flinch * -7 + (v.leanFn ? v.leanFn() : 0)),
        (this._rideSway =
          (v.sway ? v.sway() : 0) + this.flinch * 4 * Math.sin(t * 40)),
        (this._rideDrop = 0),
        (c = { b: s, k: R, generic: !0 }));
    } else if (s && this.rideK > 0.001) {
      const v = s,
        R = v.state,
        W = this._rb || { y: 0, sw: 0 },
        C = this.rideK * this.rideK * (3 - 2 * this.rideK),
        j = this.root,
        u = (zt, ot) => j.worldToLocal(zt.getWorldPosition(ot));
      j.updateMatrixWorld(!0);
      const m = v.seatTopAt ? v.seatTopAt(v.G.seatZ) : 0.865,
        d = Math.max(-0.03, Math.min(0.03, W.y - (R.chassisY || 0))),
        x = m + 0.058;
      ((a.ride = C),
        (a.walkAmp = 0),
        (a.kneel = 0),
        (a.sit = 0),
        (a.rideSwing = this._mount
          ? this.rideK
          : this._dismount
            ? 1 - this.rideK
            : 0),
        (a.rideHips = [0, x, -0.005]));
      const A = u(v.pegs.L, (this._rk1 ||= new dt())),
        q = u(v.pegs.R, (this._rk2 ||= new dt()));
      ((a.ridePegs = { 1: [A.x, A.y, A.z], [-1]: [q.x, q.y, q.z] }),
        (a.rideSeat = 0.86 + (m - x)),
        (a.rideSeatW = 0.1));
      const Z = Math.abs(R.speed || 0);
      ((a.lean =
        C * (26 + 4 * _t(Z / 10)) +
        this.flinch * -9 -
        d * 160 +
        (R.brake || 0) * 3),
        (this._rideDrop = d * 0.7),
        (a.rideRoll = 0),
        (this._rideSway =
          C * (-(R.lean || 0) * 57.3 * 0.22 + W.sw * 57.3) +
          this.flinch * 4 * Math.sin(t * 40)),
        (c = { b: v, k: C }));
      const $ = (this._rk3 ||= new dt());
      $.set(0, 0, 1).transformDirection(v.root.matrixWorld);
      const lt = _t(Z / 9) * 0.105;
      ((a.windW = [-$.x * lt, 0.025 * _t(Z / 9) - $.y * lt, -$.z * lt]),
        (a.hairFlutter = _t(Z / 8, 0, 1.4)));
    }
    const k = this.headWorld(this._w);
    let K = null;
    (this.lookGoal &&
      (K =
        typeof this.lookGoal == "function" ? this.lookGoal() : this.lookGoal),
      y && y.look && (K = (this._lk ||= new dt()).fromArray(y.look)),
      this.gun.mode === "aim" &&
        this.gun.aim &&
        (K =
          typeof this.gun.aim == "function" ? this.gun.aim() : this.gun.aim));
    let Y = 0,
      F = 0;
    if (c) {
      const v = this.root,
        R = v.worldToLocal((this._rk4 ||= new dt()).copy(k)),
        W = (this._rk5 ||= new dt());
      K
        ? v.worldToLocal(W.copy(K))
        : W.set((c.b.state?.steer || 0) * 4.5, 0.9, 10);
      const C = W.x - R.x,
        j = W.z - R.z,
        u = W.y - R.y;
      ((Y = Math.atan2(C, j)),
        Math.abs(Y) > 1.9 && (Y = 1.42 + 0.05 * Math.sin(t * 0.7)),
        (F = -Math.atan2(u, Math.hypot(C, j))));
    } else if (K) {
      const v = K.x - k.x,
        R = K.z - k.z,
        W = K.y - k.y;
      ((Y = se(this.yaw, Math.atan2(v, R))),
        (F = -Math.atan2(W, Math.hypot(v, R))));
    }
    const X = c ? 1.45 : 1.25;
    if (
      ((this.lookYaw = Nt(this.lookYaw, _t(Y, -X, X), 9, e)),
      (this.lookPitch = Nt(this.lookPitch, _t(F, -0.6, 0.6), 9, e)),
      (a.yaw = this.lookYaw * ve),
      (a.pitch =
        this.lookPitch * ve + 4 + (this.deadK > 0 ? 40 * this.deadK : 0)),
      this.gun.mode !== "none"
        ? (a.bodyYaw = 0.15 * this.lookYaw * ve)
        : (a.bodyYaw = 0.5 * this.lookYaw * ve),
      c && (a.bodyYaw = 0.3 * this.lookYaw * ve * c.k + a.bodyYaw * (1 - c.k)),
      c &&
        c.generic &&
        this.rideK > 0.55 &&
        !(this.handsUp > 0) &&
        this.gun.mode === "none")
    ) {
      const v = c.b.rider.hands || {},
        R = this.root,
        W = v.R
          ? R.worldToLocal(v.R.getWorldPosition((this._rk1 ||= new dt())))
          : null,
        C = v.L
          ? R.worldToLocal(v.L.getWorldPosition((this._rk2 ||= new dt())))
          : null;
      (W || C) &&
        ((a.arms = "grab"),
        (a.grabR = W ? [W.x, W.y, W.z] : [-0.23, 0.84, 0.05]),
        (a.grabL = C ? [C.x, C.y, C.z] : [0.23, 0.84, 0.05]));
    } else if (c && !c.generic && this.rideK > 0.55 && !(this.handsUp > 0)) {
      const v = c.b,
        R = this.root,
        W = R.worldToLocal(v.grips.L.getWorldPosition(this._rk1)),
        C = R.worldToLocal(v.grips.R.getWorldPosition(this._rk2)),
        j = (this._rk6 ||= new dt())
          .set(1, 0, 0)
          .transformDirection(v.grips.L.matrixWorld),
        u = (this._rk7 ||= new dt())
          .set(1, 0, 0)
          .transformDirection(v.grips.R.matrixWorld),
        m = (this._rkM ||= new It()).copy(R.matrixWorld).invert();
      (j.transformDirection(m),
        u.transformDirection(m),
        (a.arms = "bars"),
        (a.barL = [W.x, W.y, W.z]),
        (a.barR = [C.x, C.y, C.z]),
        (a.barAxisL = [j.x, j.y, j.z]),
        (a.barAxisR = [u.x, u.y, u.z]));
      const d = this.rideReach;
      if (
        ((this._rrK = Nt(this._rrK || 0, d?.on ? 1 : 0, d?.on ? 11 : 8, e)),
        d && this._rrK > 0.002)
      ) {
        const x = R.worldToLocal((this._rk8 ||= new dt()).copy(d.to()));
        ((a.barReachR = [x.x, x.y, x.z]), (a.barReachK = this._rrK));
      } else ((a.barReachR = null), (a.barReachK = 0));
    } else if (this.gun.mode !== "none" && !this.handsUp) {
      ((a.arms = "gun"),
        (a.gunRaise = this.gun.raise),
        (a.gunHands = this.gun.hands),
        (a.gunRecoil = this.gun.recoil));
      let v = [0, 0.02, 1];
      if (this.gun.aim) {
        const R =
            typeof this.gun.aim == "function" ? this.gun.aim() : this.gun.aim,
          W = this.chestWorld(this._v),
          C = R.x - W.x,
          j = R.z - W.z,
          u = R.y - W.y,
          m = Math.hypot(C, j),
          d = _t(se(this.yaw, Math.atan2(C, j)), -0.5, 0.5),
          x = Math.atan2(u, Math.max(m, 0.3));
        v = [Math.sin(d), Math.sin(x), Math.cos(x) * Math.cos(d)];
      }
      ((a.gunAim = v),
        this.gun.mode === "low" &&
          (a.gunAim = this.sitK > 0.5 ? [0, -0.55, 0.84] : [0, -0.02, 1]));
    } else if (this.handsUp > 0) a.arms = "hands_up";
    else if (g.k > 0.04) {
      const v = Math.cos(this.yaw),
        R = Math.sin(this.yaw),
        W = (C, j) => {
          const u = C.x - this.pos.x,
            m = C.z - this.pos.z;
          return [u * v - m * R, C.y, u * R + m * v].map(
            (x, A) => j[A] + (x - j[A]) * g.k,
          );
        };
      ((a.arms = "grab"),
        (a.grabL = W(g.L, [0.25, 0.8, 0.05])),
        (a.grabR = W(g.R, [-0.25, 0.8, 0.05])));
    } else if (this.arms === "touch" && this.touchWorld) {
      const v = Math.cos(this.yaw),
        R = Math.sin(this.yaw),
        W = this.touchWorld[0] - this.pos.x,
        C = this.touchWorld[2] - this.pos.z,
        j = Math.sin(t * 17) * 0.004 + Math.sin(t * 9.3) * 0.003;
      ((a.touchAt = [
        W * v - C * R + j,
        this.touchWorld[1] + Math.sin(t * 13) * 0.003,
        W * R + C * v + j * 0.5,
      ]),
        (a.arms = this.kneelK > 0.6 ? "touch" : "down"),
        (a.pitch = 24 * this.kneelK));
    } else
      this.pointK > 0
        ? ((a.arms = "point"), (a.pointAt = !1), (a.pointUp = 0.25))
        : a.arms === "guitar" && (a.arms = "down");
    ((a.walkArm = this.gun.mode !== "none" ? 0.2 : 1),
      (a.weight =
        0.25 *
        Math.sin(t * 0.31) *
        (1 - _t(l)) *
        (this.kneelK > 0.5 || this.sitK > 0.5 ? 0 : 1)),
      (a.sway = 0.6 * Math.sin(t * 0.47) * (1 - _t(l))),
      (a.shoulders = 0.004 * Math.sin(t * 1.3) + (this.handsUp > 0 ? 0.02 : 0)),
      c &&
        ((a.weight = 0),
        (a.sway = this._rideSway || 0),
        (a.shoulders += this._rideDrop || 0)),
      this.emo.tears > 0.02 && (a.tears = Ut(this.emo.tears, 0.05)),
      this.eyeReflect != null && (a.eyeReflect = this.eyeReflect));
    const J = Ze[this.emoGoal] || Ze.neutral,
      U = 1 - Math.exp(-7 * e);
    for (const v of [
      "brows",
      "open",
      "smile",
      "blush",
      "sad",
      "anger",
      "tears",
    ])
      this.emo[v] += (J[v] - this.emo[v]) * U;
    ((this.blinkT -= e),
      this.blinkT <= 0 &&
        ((this.blinkT = 2.2 + (Math.sin(t * 12.9) + 1) * 1.6),
        this.noBlink || (this.blink = 0.14)),
      (this.blink = Math.max(0, this.blink - e)));
    const N = this.blink > 0 ? 0.05 : this.emo.open;
    a.eyes = {
      open: Ut(N, 0.1),
      gaze: [
        Ut(_t(this.lookYaw * 0.5, -0.6, 0.6), 0.1),
        Ut(_t(0.05 + this.lookPitch * 0.45, -0.35, 0.35), 0.1),
      ],
      iris: 0.95 + 0.1 * Ut(this.emo.brows, 0.1),
    };
    const T = Ut(this.emo.brows, 0.1);
    ((a.brows = { l: T, r: T }),
      (a.blush = Ut(this.emo.blush, 0.05)),
      (a.sad = Ut(this.emo.sad, 0.1)),
      (a.anger = Ut(this.emo.anger, 0.1)));
    const f = i.audio;
    let b = 0,
      L = "M";
    if (this.speaking) {
      b = _t(f.voiceLevel * 2.7, 0, 1);
      const v = f.voiceFlux;
      ((L =
        v < 0.16 ? "O" : v < 0.22 ? "U" : v < 0.3 ? "A" : v < 0.4 ? "E" : "I"),
        b < 0.12 && ((L = "M"), (b = 0)));
    }
    (this.speaking && !this.calmHead && (a.pitch += f.voiceLevel * 5),
      (a.mouth = {
        open: Ut(b, 0.125),
        shape: L,
        smile: Ut(this.emo.smile, 0.1),
        teeth: b > 0.35 ? 0.25 : 0,
      }),
      this.freezeMouth && this._mouth
        ? (a.mouth = this._mouth)
        : (this._mouth = a.mouth),
      !this.speaking &&
        this.emo.open > 1.1 &&
        this.emoGoal === "scared" &&
        (a.mouth = { open: 0.12, shape: "O", smile: -0.2, teeth: 0 }),
      (this._lastPose = a),
      this.akane.setPose(a, t),
      this.pistol.setSlide(_t(this.gun.recoil * 1.4)));
  }
  stepPhase(t) {
    const i = Math.max(
      this.speed,
      this.turnRate * 0.22 * (this.gun.mode === "aim" ? 0.6 : 1),
    );
    if (i > 0.05) {
      const e = Qe(1.75, 2.8, this.speed),
        s = xe(0.3, 0.4, e),
        l = xe(0.6, 0.46, e),
        n = Math.floor(this.phase * 2);
      ((this.phase +=
        ((i * l) / (2 * s)) * t * (this.workCue ? this._wk.back : 1)),
        Math.floor(this.phase * 2) !== n &&
          this.onStep &&
          this.kneelK < 0.5 &&
          this.onStep(i));
    }
  }
  tick(t) {
    (this.stepPhase(t), this.update(t));
  }
}
const ht = pt,
  ce = Math.PI / 180,
  ds = (o = 0, t = 1) => o + Math.random() * (t - o),
  us = (o, t) => {
    let i = t - o;
    for (; i > Math.PI;) i -= 2 * Math.PI;
    for (; i < -Math.PI;) i += 2 * Math.PI;
    return i;
  };
function wi(o) {
  const t = o,
    i = o.player,
    e = () => o.npc,
    s = () => o.rooms,
    l = o.sched,
    n = { beat: null, run: 0, flags: {}, running: !1 },
    r = (p) => {
      (t.trace ||= []).push(t.time.toFixed(1) + "s " + p);
    },
    h = (p, P) => t.npc.say(p, P),
    a = (p) => l.wait(p),
    y = (p, P) => l.until(p, P),
    g = (p, P) => t.audio.play(p, P),
    w = (p) => t.shell.doors[p],
    _ = (p, P, M) => new ht(p, P, M),
    c = (p) => p !== n.run,
    k = (p, P = 15, M = 3.4) => {
      const G = t.weapons;
      if (!G.has.torch || !G.on) return !1;
      const S = G.torch.position,
        V = new ht().subVectors(G.torch.target.position, S).normalize(),
        B = new ht().subVectors(p, S),
        tt = B.length();
      return tt > M ? !1 : V.dot(B.divideScalar(tt)) > Math.cos(P * ce);
    },
    K = (p, P = 9) => {
      if (t.time - (n.lastCall ?? -99) < P || t.npc.speaking) return;
      n.lastCall = t.time;
      const M = i.forward(new ht());
      ((M.y = 0), M.normalize());
      const G = new ht().subVectors(p, i.pos);
      ((G.y = 0), G.normalize());
      const S = Math.atan2(M.x * G.z - M.z * G.x, M.x * G.x + M.z * G.z),
        V = Math.abs(S) > 2.1;
      h(
        V
          ? Math.random() < 0.5
            ? "v_behind"
            : "v_behind2"
          : S > 0
            ? "v_right"
            : "v_left",
      );
    },
    Y = new ht(),
    F = () => t.camera.getWorldPosition(Y);
  async function X(p, { rate: P = 1, vol: M = 0.95 } = {}) {
    const G = t.audio.manifest[p],
      S = (G?.text || "").replace(/^\[[^\]]*\]\s*/, "");
    (S && t.hud.subtitle(S, (G?.dur ?? 2) / P + 0.3, "", "thought"),
      (t.playerSpeaking = !0));
    try {
      await t.audio.voice(p, { vol: M, rate: P, reverb: 0.04 });
    } finally {
      t.playerSpeaking = !1;
    }
  }
  const J = new Is(),
    U = new It(),
    N = new Ks(),
    T = new ht(),
    f = new ht(),
    b = (p, P) => {
      const M = t.camera;
      (M.updateMatrixWorld(),
        U.multiplyMatrices(M.projectionMatrix, M.matrixWorldInverse),
        J.setFromProjectionMatrix(U),
        M.getWorldPosition(T));
      for (const G of [0.45, 1.15, 1.7]) {
        if ((N.center.set(p, G, P), (N.radius = 0.5), !J.intersectsSphere(N)))
          continue;
        f.set(p, G, P).sub(T);
        const S = f.length();
        if (
          (f.divideScalar(S),
          !t.combat.raycastWorld(T, f, Math.max(0.05, S - 0.35)))
        )
          return !0;
      }
      return !1;
    };
  async function L(p, P, M = {}, G, S = 20) {
    const V = t.time;
    for (;;) {
      if (G != null && c(G)) return null;
      const B =
        P.find((tt) => !b(tt[0], tt[1])) ||
        (t.time - V > S ? P[P.length - 1] : null);
      if (B)
        return t.zombies.spawn(p, B[0], B[1], {
          ...M,
          yaw: B[2] ?? M.yaw ?? 0,
        });
      await a(0.15);
    }
  }
  async function v(
    p,
    P,
    { dist: M = 1.1, fov: G = 34, into: S = 0.9, back: V = 0.9 } = {},
  ) {
    const B = t.camera,
      tt = t.weapons,
      ct = B.position.clone(),
      ut = B.quaternion.clone(),
      mt = B.fov,
      yt = new ht(),
      Mt = new ht(),
      bt = new ze(),
      ft = new It(),
      kt = new ht(0, 1, 0),
      Rt = new ht();
    ((i.frozen = !0), tt.setVisible(!1), (tt.suppress = !0));
    let Ct = "in",
      $t = 0;
    t.camCtl = (Xt) => {
      (($t += Xt), e().headWorld(yt));
      const H = i.pos.x - yt.x,
        at = i.pos.z - yt.z,
        Q = Math.hypot(H, at) || 1;
      (Rt.set(-at / Q, 0, H / Q).multiplyScalar(0.15),
        Mt.set(
          yt.x + (H / Q) * M + Rt.x,
          yt.y + 0.02,
          yt.z + (at / Q) * M + Rt.z,
        ),
        ft.lookAt(Mt, yt.set(yt.x, yt.y - 0.005, yt.z), kt),
        bt.setFromRotationMatrix(ft));
      const et =
        Ct === "in"
          ? Ce.smooth(Math.min(1, $t / S))
          : Ct === "hold"
            ? 1
            : 1 - Ce.smooth(Math.min(1, $t / V));
      (B.position.lerpVectors(ct, Mt, et), B.quaternion.copy(ut).slerp(bt, et));
      const Wt = mt + (G - mt) * et;
      Math.abs(B.fov - Wt) > 0.01 && ((B.fov = Wt), B.updateProjectionMatrix());
    };
    const Qt = () => {
      ((t.camCtl = null),
        tt.setVisible(!0),
        (tt.suppress = !1),
        B.position.copy(ct),
        B.quaternion.copy(ut),
        (B.fov = mt),
        B.updateProjectionMatrix(),
        (i.frozen = !1),
        i.sync());
    };
    if ((await a(S * 0.7), c(p))) {
      Qt();
      return;
    }
    if (((Ct = "hold"), await h(P, { hold: 0.9 }), c(p))) {
      Qt();
      return;
    }
    ((Ct = "back"), ($t = 0), await a(V), Qt());
  }
  async function R(p, { speed: P = 1.5, wait: M = 4.2, run: G } = {}) {
    for (const S of p) {
      if (c(G)) return;
      const V = e().walkTo(S[0], S[1], { speed: P, arrive: 0.3 });
      let B = !1;
      for (
        V.then(() => {
          B = !0;
        });
        !B && !c(G);
      ) {
        await a(0.12);
        const tt = e().distTo(i.pos.x, i.pos.z),
          ct =
            Math.hypot(i.pos.x - S[0], i.pos.z - S[1]) >
            Math.hypot(e().pos.x - S[0], e().pos.z - S[1]);
        if (tt > M && ct) {
          if (
            (e().stop(),
            e().lookAt(F),
            await y(() => e().distTo(i.pos.x, i.pos.z) < M - 1.2 || c(G), 60),
            c(G))
          )
            return;
          e()
            .walkTo(S[0], S[1], { speed: P, arrive: 0.3 })
            .then(() => {
              B = !0;
            });
        }
      }
    }
  }
  const W = async (p, P = 1.3) => {
    ((w(p).locked = !1), w(p).open(1), await a(P), t.nav.rebuild());
  };
  let C = null;
  const j = () => {
    if (C) return C;
    const p = document.createElement("canvas");
    p.width = p.height = 64;
    const P = p.getContext("2d"),
      M = P.createRadialGradient(32, 32, 0, 32, 32, 32);
    return (
      M.addColorStop(0, "rgba(255,255,255,1)"),
      M.addColorStop(0.25, "rgba(255,220,160,0.6)"),
      M.addColorStop(1, "rgba(255,200,120,0)"),
      (P.fillStyle = M),
      P.fillRect(0, 0, 64, 64),
      (P.strokeStyle = "rgba(255,240,210,0.8)"),
      (P.lineWidth = 1.5),
      P.beginPath(),
      P.moveTo(32, 6),
      P.lineTo(32, 58),
      P.moveTo(6, 32),
      P.lineTo(58, 32),
      P.stroke(),
      (C = new ts(p)),
      C
    );
  };
  async function u(p) {
    n.beat = "intro";
    const M = (s().bedroom?.points || {}).pillow || [0.55, 0.78, 2.4];
    (t.hud.setVisible(!0),
      (i.frozen = !0),
      e().place(wt.akaneStart[0], wt.akaneStart[1], 0),
      e().lookAt(() => _(2.4, 1.1, 2.6)),
      e().emote("scared", 99),
      (t.post.fade = 1),
      (t.post.lid = 0),
      (t.post.blur = 1),
      (t.post.focus = 0),
      t.audio.loop("amb_bedroom", { vol: 0.55 }),
      t.audio.loop("amb_wind_rain", { vol: 0.3 }),
      n.heart?.stop?.(0.2),
      (n.heart = t.audio.play("heartbeat", { vol: 0.5, loop: !0 })),
      new ht(...M));
    const G = Ee(
      t,
      [
        { t: 0, p: [M[0], M[1], M[2]], yaw: -90, pitch: 68, fov: 78 },
        {
          t: 3.2,
          p: [M[0] + 0.01, M[1] + 0.005, M[2]],
          yaw: -84,
          pitch: 60,
          fov: 78,
        },
        {
          t: 6.4,
          p: [M[0] + 0.02, M[1] + 0.01, M[2] - 0.05],
          yaw: -28,
          pitch: 26,
          fov: 76,
        },
        {
          t: 9.2,
          p: [M[0] + 0.03, M[1] + 0.02, M[2] - 0.06],
          yaw: -47,
          pitch: 4,
          fov: 74,
        },
        {
          t: 12,
          p: [M[0] + 0.03, M[1] + 0.02, M[2] - 0.06],
          yaw: -49,
          pitch: 3,
          fov: 74,
        },
      ],
      { ease: "smooth" },
    );
    if (
      ((async () => (
        await a(0.6),
        await l.tween(t.post, "fade", 0, 1.4, "out")
      ))(),
      (async () => (
        await a(1.2),
        await l.during(1.2, (V) => {
          ((t.post.lid = 0.55 * Ce.smooth(V)), (t.post.blur = 1 - 0.25 * V));
        }),
        await l.during(0.35, (V) => {
          t.post.lid = 0.55 * (1 - V * 0.9);
        }),
        await a(0.25),
        await l.during(1.6, (V) => {
          ((t.post.lid = 0.05 + 0.95 * Ce.smooth(V)),
            (t.post.blur = 0.75 - 0.5 * V));
        }),
        await l.tween(t.post, "blur", 0.08, 4.5, "smooth")
      ))(),
      (async () => (
        await a(1.6),
        g("piano_low_note", { pos: [3, 1, 4.4], vol: 0.8, reverb: 0.6 }),
        s().bedroom?.props?.piano?.pressKeys?.([9], 0.2)
      ))(),
      await a(5.2),
      c(p) ||
        (await X("v_intro_1"), c(p)) ||
        (e().scare(0.35), await a(0.25), c(p)))
    )
      return;
    e().lookAt(F);
    {
      const V = F();
      e().turnTo(V.x, V.z);
    }
    (await a(0.8),
      !(
        c(p) ||
        (await h("v_intro_2"), c(p)) ||
        (await G, c(p)) ||
        ((t.post.lid = 1),
        await l.tween(t.post, "blur", 0, 1.5, "out"),
        await Ee(
          t,
          [
            {
              t: 0,
              p: [M[0] + 0.03, M[1] + 0.02, M[2] - 0.06],
              yaw: -49,
              pitch: 3,
              fov: 74,
            },
            { t: 1.4, p: [1.2, 1.22, 2.35], yaw: -62, pitch: 6, fov: 74 },
            {
              t: 3,
              p: [wt.bedside[0], 1.62, wt.bedside[1]],
              yaw: -48,
              pitch: 0,
              fov: 72,
            },
          ],
          { ease: "smooth" },
        ),
        c(p))
      ) &&
        (n.heart?.stop?.(5),
        (t.camCtl = null),
        i.place(wt.bedside[0], wt.bedside[1], -48 * ce, 0, 1.62),
        (i.frozen = !1),
        e().lookAt(F),
        await m(p)));
  }
  async function m(p) {
    n.beat = "bedroom";
    const P = s().bedroom || {},
      M = P.props || {};
    (t.hud.setVisible(!0),
      t.audio.loop("amb_bedroom", { vol: 0.55 }),
      (t.storyFlags = n.flags),
      (n.flags.torch = !1));
    const G = M.flashlight;
    (t.events.on("use", function V(B) {
      B !== "flashlight" ||
        n.flags.torch ||
        ((n.flags.torch = !0),
        G && (G.visible = !1),
        t.weapons.give("torch"),
        g("flashlight_click", { vol: 0.6 }),
        t.events.off("use", V));
    }),
      e().lookAt(F),
      !(await y(() => n.flags.torch || c(p), 9)) &&
        !c(p) &&
        (e().gesturePoint(1.8),
        h("v_flash"),
        await y(() => n.flags.torch || c(p), 60)),
      !c(p) && (await a(1), await d(p)));
  }
  async function d(p) {
    n.beat = "lock";
    const P = s().bedroom || {},
      M = P.props || {},
      G = w("D1"),
      S = G.lockPos || [5.25, 1, 4.21];
    if (!n.flags.torch) {
      ((n.flags.torch = !0), t.weapons.give("torch"));
      const kt = M.flashlight;
      kt && (kt.visible = !1);
    }
    if (
      (e().lookAt(null),
      await e().walkTo(wt.lockSpot[0], wt.lockSpot[1] - 0.15, {
        speed: 1.25,
        arrive: 0.25,
      }),
      c(p) ||
        (e().turnTo(S[0], S[2]),
        await a(0.7),
        g("door_locked_rattle", { pos: [5.25, 1, 4.2], vol: 0.9 }),
        G.rattle?.(),
        await a(0.9),
        g("door_locked_rattle", { pos: [5.25, 1, 4.2], vol: 0.8 }),
        G.rattle?.(),
        await a(0.9),
        c(p)) ||
        (e().stop(),
        e().lookAt(new ht(3, 1, 4.4)),
        e().scare(0.8),
        g("piano_lullaby", { pos: [3, 1, 4.4], vol: 0.9, reverb: 0.7 }),
        M.piano?.pressKeys?.([21, 24, 28, 26, 21, 19], 0.55),
        P.lights?.candles?.forEach?.((kt) => {
          const Rt = kt.intensity;
          ((kt.intensity = Rt * 0.55),
            setTimeout(() => {
              kt.intensity = Rt;
            }, 900));
        }),
        (t.post.grain += 0),
        (i.shake += 0.15),
        await a(1.4),
        await h("v_piano"),
        c(p)))
    )
      return;
    (await a(0.6),
      e().lookAt(null),
      e().turnTo(S[0], S[2]),
      await a(0.4),
      h("v_lock"),
      await a(1.2),
      e().kneelAt(S));
    const V = new ws({
        map: j(),
        color: new Me().setRGB(2.2, 1.5, 0.7),
        blending: ke,
        depthWrite: !1,
        transparent: !0,
        toneMapped: !1,
        fog: !1,
        opacity: 0,
      }),
      B = new ms(V);
    (B.position.set(S[0] - 0.05, S[1], S[2]),
      B.scale.setScalar(0.18),
      (B.renderOrder = 45),
      t.scene.add(B));
    const tt = (kt, Rt) => {
      V.opacity = B.visible
        ? (0.25 + 0.3 * Math.sin(Rt * 5.5)) * B.userData.k
        : 0;
    };
    ((B.userData.k = 1), t.updaters.push(tt), M.dolls?.setActive?.(!0));
    let ct = 0,
      ut = 4.6,
      mt = !1,
      yt = !1,
      Mt = t.time + 7,
      bt = 0,
      ft = null;
    for (t.time; ct < ut && !c(p);) {
      await a(0.05);
      const kt = 0.05,
        Rt = i.pos.distanceTo(new ht(S[0], 0, S[2])) < 3.6,
        Ct = k(new ht(S[0], S[1], S[2]), 16, 3.8) && Rt;
      if (((B.userData.k = Ct ? 0 : 1), bt > 0)) {
        bt -= kt;
        continue;
      }
      (Ct
        ? ((ct += kt),
          mt ||
            ((mt = !0),
            (ft = g("lock_pick", { pos: [5.2, 1, 4.2], vol: 0.85 }))),
          (Mt = t.time + 7),
          t.weapons.flickerTorch?.(0))
        : ((ct = Math.max(0, ct - kt * 0.35)),
          mt && ((mt = !1), ft?.stop?.(0.15)),
          t.time > Mt &&
            !e().speaking &&
            ((Mt = t.time + 12), h("v_lock_nudge"), (e().faceHold = 0))),
        ct > 1.7 &&
          !yt &&
          ((yt = !0),
          (bt = 1.6),
          (mt = !1),
          ft?.stop?.(0.1),
          M.wardrobe?.knock?.(3),
          g("wardrobe_thump", { pos: [1.1, 1, 4.5], vol: 1, reverb: 0.5 }),
          (i.shake += 0.5),
          e().scare(0.6),
          await a(0.9),
          h("v_wardrobe"),
          await a(0.7)));
    }
    t.scene.remove(B);
    {
      const kt = t.updaters.indexOf(tt);
      kt >= 0 && t.updaters.splice(kt, 1);
    }
    c(p) ||
      (ft?.stop?.(0.2),
      M.dolls?.setActive?.(!1),
      g("door_creak_open", { pos: [5.2, 1, 3.9], vol: 0.9, reverb: 0.4 }),
      e().standUp(),
      await a(0.5),
      h("v_lock_done"),
      t.audio.loop("amb_hall", { vol: 0.5 }),
      await W("D1", 1.4),
      s().bedroom?.props?.curtains?.gust?.(1.2),
      s().bedroom?.props?.candles?.setLit?.(!0),
      await x(p));
  }
  async function x(p) {
    n.beat = "hall";
    const P = s().hall || {},
      M = P.props || {};
    (t.audio.loop("amb_hall", { vol: 0.55 }),
      e().lookAt(null),
      await e().walkTo(wt.hallStart[0], wt.hallStart[1], { speed: 1.5 }),
      !c(p) &&
        (h("v_hall_go"),
        M.ceilingLight?.setFlicker?.(0.35),
        await R([[wt.hallStart[0], 8.3]], { run: p }),
        !c(p) &&
          (e().stop(),
          e().lookAt(F),
          await y(() => e().distTo(i.pos.x, i.pos.z) < 2.8 || c(p), 12),
          !c(p) &&
            (e().turnTo(5.3, 9.9),
            e().lookAt(null),
            g("door_locked_rattle", { pos: [5.3, 1, 10], vol: 0.9 }),
            w("D3").rattle?.(),
            M.scratch3?.(),
            g("zombie_groan_2", {
              pos: [4.6, 1.2, 10],
              vol: 0.55,
              reverb: 0.7,
              rate: 0.9,
            }),
            M.ceilingLight?.snap?.(),
            await a(0.8),
            e().scare(0.5),
            await a(0.35),
            e().lookAt(F),
            await Promise.race([e().turnTo(i.pos.x, i.pos.z), a(1.3)]),
            !c(p) &&
              (await v(p, "v_d3"),
              e().lookAt(null),
              await a(0.3),
              !c(p) &&
                (await R(
                  [
                    [wt.hallStart[0], 7.5],
                    [wt.studyDoor[0] - 0.1, wt.studyDoor[1] + 0.2],
                  ],
                  { run: p, speed: 1.6 },
                ),
                !c(p) &&
                  ((w("D4").locked = !1),
                  e().turnTo(7, 6.65),
                  await a(0.4),
                  g("door_creak_open", {
                    pos: [6.9, 1, 6.65],
                    vol: 0.85,
                    reverb: 0.3,
                  }),
                  await W("D4", 1.3),
                  await A(p))))))));
  }
  async function A(p) {
    n.beat = "study";
    const P = s().study || {},
      M = P.props || {},
      G = P.points || {};
    (t.audio.loop("amb_hall", { vol: 0.35 }),
      (n.flags.pistol = !1),
      (n.flags.pistolNpc = !1));
    const S = G.studyInside || [7.45, 0, 6.65];
    G.deskFront;
    const V = G.deskFrontWoman || [8.8, 0, 7.12],
      B = G.pistolBSpot || [9.56, 0.82, 6.38];
    (t.events.on("use", function ct(ut) {
      ut !== "pistol" ||
        n.flags.pistol ||
        ((n.flags.pistol = !0),
        M.pistolA && (M.pistolA.visible = !1),
        t.weapons.give("pistol"),
        t.events.off("use", ct));
    }),
      r("study: walking in"),
      await e().walkTo(S[0] + 0.3, S[2] - 0.5, { speed: 1.5 }),
      !(
        c(p) ||
        (r("study: arrived inside"),
        e().lookAt(null),
        e().turnTo(B[0], B[2]),
        await y(() => t.player.pos.x > 7.5 || c(p), 30),
        c(p)) ||
        (r("study: player inside"), await a(0.4), await h("v_guns"), c(p)) ||
        (r("study: v_guns done"),
        e().lookAt(F),
        !(await y(() => n.flags.pistol || c(p), 12)) &&
          !c(p) &&
          (e().gesturePoint(1.6), await y(() => n.flags.pistol || c(p), 60)),
        c(p))
      ) &&
        (r("study: player took the pistol"),
        await a(0.4),
        await e().walkTo(V[0], V[2], { speed: 1.4, arrive: 0.2 }),
        !c(p) &&
          (r("study: she is at the desk"),
          e().lookAt(new ht(B[0], B[1], B[2])),
          e().turnTo(B[0], B[2]),
          await a(0.5),
          (e().arms = "touch"),
          (e().touchWorld = [B[0] - 0.12, B[1] + 0.12, B[2]]),
          (e().kneelGoal = 0),
          await a(0.9),
          M.pistolB && (M.pistolB.visible = !1),
          g("pickup_item", { pos: [B[0], B[1], B[2]], vol: 0.6 }),
          await a(0.25),
          (e().arms = "down"),
          (e().touchWorld = null),
          e().lowReady(),
          g("gun_slide_rack", { pos: [V[0], 1.2, V[2]], vol: 0.8 }),
          (n.flags.pistolNpc = !0),
          await a(0.9),
          await h("v_guns2"),
          !c(p) && (await q(p)))));
  }
  async function q(p) {
    ((n.beat = "firstdead"),
      t.audio.loop("amb_living", { vol: 0.05 }).fadeTo(0.5, 6),
      t.audio.loop("amb_hall", { vol: 0.3 }),
      e().lowReady(),
      e().lookAt(null),
      t.nav.rebuild());
    const P = n.flags.z1
      ? Promise.resolve(n.flags.z1)
      : L(
          "lanky",
          [
            [wt.zombieFirst[0], wt.zombieFirst[1], 0],
            [3.4, 18.6, 0.2],
          ],
          { yaw: 0 },
          p,
          40,
        ).then((V) => (n.flags.z1 = V));
    if (
      (await e().walkTo(wt.studyDoor[0], wt.studyDoor[1], { speed: 1.2 }),
      c(p) ||
        (await R(
          [
            [6.1, 11],
            [6.1, 13.2],
            [4.85, 14.5],
          ],
          { run: p, speed: 1.35 },
        ),
        c(p)))
    )
      return;
    const M = await P;
    if (!M || c(p)) return;
    (e().stop(), t.hud.hint("Right mouse: aim   Left mouse: fire", 6));
    const G = () => M.kit.chestWorld(new ht());
    if (
      (e().aimAt(G),
      await a(0.5),
      h("v_first"),
      !(await y(() => M.dead || M.alerted || c(p), 10)) &&
        !c(p) &&
        (h("v_first_nudge"),
        await y(() => M.dead || M.alerted || c(p), 5),
        !M.dead &&
          !M.alerted &&
          !c(p) &&
          (e().fire(), await a(0.4), e().fire())),
      !c(p))
    ) {
      if ((await y(() => M.dead || c(p), 7), !M.dead && !c(p)))
        for (let V = 0; V < 4 && !M.dead; V++) (e().fire(), await a(0.35));
      (await a(0.6),
        !c(p) &&
          (await y(() => !e().speaking || c(p), 3),
          !c(p) &&
            (h("v_heard"),
            t.zombies.alertAll(2),
            g("zombie_groan_1", { pos: [1, 1.4, 12], vol: 0.8, reverb: 0.8 }),
            g("distant_gunfire", { vol: 0.5 }),
            await a(1.6),
            await Z(p))));
    }
  }
  async function Z(p) {
    ((n.beat = "fight"), t.hud.hint("R: reload", 3), e().lookAt(null));
    const P = s().living?.props || {};
    ((n.flags.kills = 0),
      (t.zombies.onKill = () => {
        (n.flags.kills++,
          Math.random() < 0.35 &&
            !e().speaking &&
            t.time - (n.lastGot ?? -99) > 16 &&
            ((n.lastGot = t.time), h("v_gotone")));
      }),
      (async () => {
        let tt = 0;
        const ct = (ut) => {
          const mt = e(),
            yt = mt.headWorld(new ht()),
            Mt = ut.kit.chestWorld(new ht()),
            bt = Mt.clone().sub(yt),
            ft = bt.length();
          return (bt.divideScalar(ft), !t.combat.raycastWorld(yt, bt, ft));
        };
        for (; !c(p) && n.beat === "fight";) {
          (await a(0.12), (tt -= 0.12));
          const ut = e();
          if (ut.grabbed) continue;
          let mt = null,
            yt = 1e9;
          for (const bt of t.zombies.alive()) {
            const ft = bt.pos.distanceTo(ut.pos);
            ft < 12 && ft < yt && ct(bt) && ((yt = ft), (mt = bt));
          }
          const Mt = ut.distTo(i.pos.x, i.pos.z);
          if (
            ((!mt || Mt > 6) &&
              ut.keepNear(i.pos, i.yaw, { speed: Mt > 5 ? 2.3 : 1.6 }),
            mt)
          ) {
            ut.aimAt(() => mt.kit.chestWorld(new ht()));
            const bt =
              Math.abs(
                us(
                  ut.yaw,
                  Math.atan2(mt.pos.x - ut.pos.x, mt.pos.z - ut.pos.z),
                ),
              ) < 0.28;
            tt <= 0 &&
              bt &&
              ut.gun.raise > 0.85 &&
              !ut.path &&
              (ut.fire(), (tt = ds(0.55, 0.95)));
          } else ut.lowReady();
        }
      })(),
      (t.zombies.onAkaneHit = null));
    const M = w("D5");
    for (const tt of ["D5", "D3"]) {
      const ct = w(tt);
      (ct.angle > 0.01 || ct.target > 0) &&
        (ct.open(0, !0), (ct.locked = !0), (ct.speed = 3));
    }
    if (
      (t.nav.rebuild(),
      await a(0.6),
      c(p) ||
        (await L(
          "gown",
          [
            [2.05, 12.85, 0],
            [1.2, 12, 0.3],
          ],
          { state: "emerge" },
          p,
          10,
        ),
        c(p)) ||
        (g("door_pound", { pos: [2.05, 1.2, 13.4], vol: 0.85, reverb: 0.4 }),
        M.rattle?.(0.07),
        await a(0.9),
        c(p)) ||
        (g("door_burst", { pos: [2, 1.2, 13.5], vol: 1, reverb: 0.5 }),
        (M.locked = !1),
        (M.speed = 9),
        M.open(1),
        await a(0.4),
        t.nav.rebuild(),
        await a(0.3),
        K(new ht(2, 0, 14)),
        await y(() => t.zombies.alive().length === 0 || c(p), 40),
        c(p)))
    )
      return;
    (await a(1.4),
      (i.shake += 0.3),
      g("door_pound", { pos: [12.3, 1.3, 17], vol: 0.9, reverb: 0.4 }),
      P.barricade?.pound?.(0.6));
    const G = await L(
      "lanky",
      [
        [1.3, 12.2, 0.3],
        [0.8, 11, 0.5],
        [3.8, 11.2, -0.4],
      ],
      { state: "emerge", target: "akane" },
      p,
      10,
    );
    if (c(p) || (await a(0.6), K(new ht(2, 0, 14), 0), await a(1.6), c(p)))
      return;
    const S = w("D3"),
      V = await L(
        "brute",
        [
          [4.3, 10.4, Math.PI / 2],
          [3.6, 9.3, Math.PI / 2],
        ],
        { state: "emerge" },
        p,
        10,
      );
    if (!V || c(p)) return;
    (g("door_burst", { pos: [5.3, 1.2, 10.15], vol: 1, reverb: 0.6 }),
      (S.locked = !1),
      (S.speed = 9),
      S.open(1),
      s().hall?.props?.ceilingLight?.swing?.(1),
      await a(0.4),
      t.nav.rebuild(),
      (async () => (
        await y(() => V.dead || V.pos.z > 12.2 || c(p), 15),
        !V.dead && !c(p) && ((n.lastCall = -99), K(V.pos, 0))
      ))());
    const B = await y(
      () => (G && G.dead) || (G && G.pos.distanceTo(e().pos) < 1) || c(p),
      30,
    );
    c(p) ||
      (B && G && !G.dead && (await $(G, p)),
      await y(() => t.zombies.alive().length === 0 || c(p), 60),
      !c(p) && (await a(1.2), await lt(p)));
  }
  async function $(p, P, { hold: M = 7.5, lethal: G = !1 } = {}) {
    const S = e();
    ((S.grabbed = !0), (p.state = "grab"), p.kit.setState("grab_hold"));
    const V = new ht(p.pos.x - S.pos.x, 0, p.pos.z - S.pos.z).normalize();
    (p.pos.set(S.pos.x + V.x * 0.62, 0, S.pos.z + V.z * 0.62),
      (p.yaw = Math.atan2(-V.x, -V.z)),
      S.faceYaw(Math.atan2(V.x, V.z)),
      S.setGun("none"),
      (S.handsUp = 99),
      S.emote("scream", 99),
      h("v_grab"));
    let B = !1;
    ((p.holdFn = () => {
      B = !0;
    }),
      S.hurt());
    let tt = t.time;
    if (
      (await y(
        () => (
          !B && !p.dead && t.time - tt > 2.5 && ((tt = t.time), S.hurt()),
          B || p.dead || S.dead || c(P)
        ),
        M,
      ),
      c(P) || S.dead)
    ) {
      S.grabbed = !1;
      return;
    }
    ((S.handsUp = 0),
      (S.grabbed = !1),
      p.dead ||
        ((p.state = "chase"),
        S.setGun("aim"),
        S.hurt(),
        await a(0.25),
        S.fire(),
        S.fire(),
        G &&
          !p.dead &&
          p.hit(9, "head", p.kit.headWorld(new ht()), V.clone(), "akane"),
        await a(0.4)),
      S.emote("scared", 3),
      S.lowReady(),
      await a(0.4),
      h("v_saved"));
  }
  async function lt(p) {
    n.beat = "finale";
    const P = s().living || {},
      M = P.props || {},
      G = M.barricade?.work;
    (e().lowReady(), e().lookAt(null));
    const S = G?.steps || [];
    (G?.reset(), G?.begin(), t.nav.rebuild());
    {
      const H = w("D6");
      (H.angle > 0.01 || H.target > 0) && H.open(0, !0);
    }
    if (
      (S.length &&
        (await e().walkTo(S[0].at[0], S[0].at[1], { speed: 2.4, arrive: 0.2 }),
        c(p))) ||
      (e().holster(),
      e().lookAt(F),
      await Promise.race([e().turnTo(i.pos.x, i.pos.z), a(0.7)]),
      c(p))
    )
      return;
    const V = h("v_cover");
    t.hud.hint("Keep them off her", 5);
    const B = t.time,
      tt = [
        [6.1, 10.4, 0],
        [6.1, 8.6, 0],
        [4.3, 10.4, Math.PI / 2],
      ],
      ct = [
        [1.3, 12.2, 0.3],
        [0.8, 11, 0.5],
        [3.8, 11.2, -0.4],
      ],
      ut = [
        [0.8, "lanky", tt],
        [2.8, "gown", ct],
        [5.4, "lanky", ct],
        [7.6, "gown", tt],
      ],
      mt = new Set();
    if (
      ((async () => {
        for (const [H, at, Q] of ut) {
          if (
            (await y(() => t.time - B >= H || c(p), 60),
            c(p) || n.flags.cleared)
          )
            return;
          L(at, Q, { state: "emerge", target: "akane" }, p, 8);
        }
      })(),
      await a(1.1),
      c(p))
    )
      return;
    e().lookAt(null);
    const yt = S.reduce((H, at) => H + at.dur, 0),
      Mt = {};
    let bt = 0,
      ft = !1,
      kt = !1;
    const Rt = () => {
      let H = null,
        at = 99;
      for (const Q of t.zombies.alive()) {
        if (Q.state === "grab") continue;
        const et = Math.hypot(Q.pos.x - e().pos.x, Q.pos.z - e().pos.z);
        et < at && ((at = et), (H = Q));
      }
      return [H, at];
    };
    for (const H of S) {
      H === S[S.length - 1] &&
        L("lanky", tt, { state: "emerge", target: "akane" }, p, 8);
      const at = [...(H.via || []), [H.at[0], H.at[1]]],
        Q = [e().pos.x, e().pos.z];
      let et = 0,
        Wt = t.time,
        gt = 0,
        Kt = Math.hypot(e().pos.x - H.at[0], e().pos.z - H.at[1]) > 0.3;
      const Et = new Set();
      if (
        (await y(() => {
          if (c(p)) return !0;
          const oe = Math.min(0.1, t.time - Wt);
          Wt = t.time;
          const [Ot, we] = Rt();
          for (const I of t.zombies.alive())
            !mt.has(I) && I.pos.z > 13.9 && (mt.add(I), K(I.pos, 2.5));
          (Ot && we < 3.6 && !kt && !e().speaking && ((kt = !0), h("v_cover2")),
            Ot &&
              we < 1.05 &&
              !ft &&
              !e().grabbed &&
              ((ft = !0),
              e().work(null),
              $(Ot, p, { hold: 5, lethal: !0 }).then(() => {
                ((ft = !1), e().holster());
              })));
          const ae = ft || e().grabbed || (Ot && we < 1.7);
          if (Kt) {
            if (!ae) {
              let st = 2.3 * oe;
              for (; st > 0 && gt < at.length;) {
                const nt = at[gt][0] - Q[0],
                  Pt = at[gt][1] - Q[1],
                  vt = Math.hypot(nt, Pt);
                vt <= st
                  ? ((Q[0] = at[gt][0]), (Q[1] = at[gt][1]), (st -= vt), gt++)
                  : ((Q[0] += (nt / vt) * st),
                    (Q[1] += (Pt / vt) * st),
                    (st = 0));
              }
            }
            const I = at[Math.min(gt, at.length - 1)],
              E = Math.atan2(I[0] - e().pos.x, I[1] - e().pos.z);
            return (
              ft || e().grabbed
                ? e().work(null)
                : e().work({
                    pos: Q.slice(),
                    yaw:
                      Math.hypot(I[0] - e().pos.x, I[1] - e().pos.z) > 0.15
                        ? E
                        : H.at[2],
                    hold: !1,
                    crouch: 0,
                    lean: 5,
                  }),
              t.hud.task("Cover her", bt / yt, ae),
              (Kt =
                gt < at.length ||
                Math.hypot(e().pos.x - H.at[0], e().pos.z - H.at[1]) > 0.1),
              !1
            );
          }
          const z = ae && (Mt.hold || et < 0.05);
          (z || (et = Math.min(1, et + oe / H.dur)), G.pose(H, et, Mt));
          for (const [I, E, st, nt] of H.sounds || [])
            et >= I &&
              !Et.has("s" + I + E) &&
              (Et.add("s" + I + E),
              g(E, {
                pos: H.piece.group.position.toArray(),
                vol: st,
                rate: nt ?? 1,
                reverb: 0.3,
              }));
          for (const [I, E, st, nt, Pt, vt] of H.dust || [])
            if (et >= I && !Et.has("d" + I)) {
              (Et.add("d" + I), t.fx.dust({ x: E, y: st, z: nt }, Pt, vt));
              const rt = Math.hypot(i.pos.x - E, i.pos.z - nt);
              vt > 1 && (i.shake += 0.35 * Math.max(0, 1 - rt / 8));
            }
          return (
            H.voice &&
              et >= H.voice[0] &&
              !Et.has("v") &&
              !e().speaking &&
              (Et.add("v"), h(H.voice[1])),
            ft || e().grabbed
              ? e().work(null)
              : z
                ? (e().work({
                    ...Mt,
                    hold: !1,
                    lean: -8,
                    crouch: 0.1,
                    look: Ot ? Ot.kit.chestWorld(new ht()).toArray() : Mt.look,
                  }),
                  e().handsUp || e().scare(0.4))
                : e().work(Mt),
            t.hud.task("Cover her", (bt + et * H.dur) / yt, z),
            et >= 1
          );
        }, 1 / 0),
        c(p))
      )
        return;
      ((bt += H.dur), t.nav.rebuild());
    }
    if ((await y(() => (!ft && !e().grabbed) || c(p), 12), c(p))) return;
    (await V,
      (n.flags.cleared = !0),
      t.hud.task("Cover her", 1, !1),
      e().work(null),
      (n.lastGot = t.time + 600));
    const Ct = t.audio.loop("horde_moan", { vol: 0, bus: "sfx" });
    if (
      (Ct.fadeTo(0.5, 3),
      g("zombie_groan_1", { pos: [6.1, 1.4, 10.5], vol: 0.9, reverb: 0.7 }),
      g("zombie_groan_3", {
        pos: [1.5, 1.4, 12],
        vol: 0.8,
        reverb: 0.7,
        delay: 0.6,
      }),
      (async () => {
        const H = t.time;
        for (const [at, Q, et] of [
          [0.2, "lanky", tt],
          [0.9, "gown", ct],
          [1.7, "lanky", ct],
          [2.6, "brute", tt],
        ]) {
          if (
            (await y(() => t.time - H >= at || c(p) || n.flags.exit, 30),
            c(p) || n.flags.exit)
          )
            return;
          L(Q, et, { state: "emerge", target: "player" }, p, 6);
        }
        for (let at = 0; at < 6; at++) {
          if ((await a(3.2), c(p) || n.flags.exit)) return;
          t.zombies.alive().length < 5 &&
            L(
              at % 2 ? "gown" : "lanky",
              at % 2 ? ct : tt,
              { state: "emerge", target: "player" },
              p,
              6,
            );
        }
      })(),
      await e().walkTo(11, 17.2, { speed: 1.6, arrive: 0.15 }),
      c(p) ||
        (t.hud.task(null),
        e().turnTo(12.3, 16.95),
        h("v_clear"),
        t.audio.duck("amb", 0.3, 2),
        g("door_creak_open", {
          pos: [12.3, 1.1, 16.95],
          vol: 0.9,
          reverb: 0.4,
        }),
        await W("D6", 0.9),
        c(p)) ||
        (e().lowReady(),
        (n.flags.exitOpen = !0),
        await Promise.race([
          e().walkTo(11.75, 17.35, { speed: 2.6, arrive: 0.12 }),
          a(2.5),
        ]),
        c(p)))
    )
      return;
    (e().lookAt(F),
      e().turnTo(i.pos.x, i.pos.z),
      (async () => {
        let H = 0.6;
        const at = (Q) => {
          const et = e().headWorld(new ht()),
            Wt = Q.kit.chestWorld(new ht()),
            gt = Wt.clone().sub(et),
            Kt = gt.length();
          return (gt.divideScalar(Kt), !t.combat.raycastWorld(et, gt, Kt));
        };
        for (; !c(p) && !n.flags.exit;) {
          (await a(0.12), (H -= 0.12));
          const Q = e();
          if (Q.grabbed || Q.dead || Q.path) continue;
          let et = null,
            Wt = 1e9;
          for (const gt of t.zombies.alive()) {
            const Kt = gt.pos.distanceTo(Q.pos);
            Kt < 11 && Kt < Wt && at(gt) && ((Wt = Kt), (et = gt));
          }
          if (et) {
            Q.aimAt(() => et.kit.chestWorld(new ht()));
            const gt =
              Math.abs(
                us(Q.yaw, Math.atan2(et.pos.x - Q.pos.x, et.pos.z - Q.pos.z)),
              ) < 0.3;
            H <= 0 && gt && Q.gun.raise > 0.85 && (Q.fire(), (H = ds(1, 1.5)));
          } else (Q.lowReady(), Q.lookAt(F));
        }
      })());
    const $t = () => i.pos.x > 11.45 && i.pos.z > 16.3 && i.pos.z < 17.2;
    let Qt = t.time + 1.6,
      Xt = 0;
    if (
      (await y(
        () =>
          c(p) || $t()
            ? !0
            : (t.time > Qt &&
                !e().speaking &&
                (h(Xt % 2 ? "v_clear" : "v_door"), Xt++, (Qt = t.time + 6.5)),
              !1),
        1 / 0,
      ),
      !c(p))
    ) {
      ((n.flags.exit = !0),
        (t.combat.invuln = 60),
        e().lookAt(null),
        e().lowReady(),
        e().walkTo(12.3, 16.95, { speed: 2.6 }),
        e().path?.push([13.1, 16.95]),
        (i.frozen = !0));
      {
        const H = new pe().setFromQuaternion(t.camera.quaternion, "YXZ");
        Ee(
          t,
          [
            {
              t: 0,
              p: t.camera.position.toArray(),
              yaw: H.y / ce,
              pitch: H.x / ce,
              fov: t.camera.fov,
            },
            {
              t: 1.6,
              p: [Math.max(11.65, t.camera.position.x), 1.62, 16.95],
              yaw: -90,
              pitch: 1,
              fov: t.camera.fov,
            },
          ],
          { ease: "inout" },
        );
      }
      (t.post.fadeColor.setRGB(1, 0.96, 0.9),
        t.audio.duck("amb", 0, 8),
        Ct.stop(2.6),
        await a(0.3),
        await l.tween(t.post, "fade", 1, 2.2, "in"),
        await a(1),
        !(c(p) || t.service) &&
          (location.href = location.pathname + "?section=2"));
    }
  }
  const zt = {
      intro() {},
      bedroom() {
        (i.place(wt.bedside[0], wt.bedside[1], -48 * ce, 0),
          e().place(wt.akaneStart[0], 1, 0));
      },
      lock() {
        (i.place(3.6, 3.2, -70 * ce, -0.05), e().place(4.2, 3.8, Math.PI / 2));
      },
      hall() {
        (w("D1").open(1, !0),
          t.nav.rebuild(),
          i.place(6.1, 3.9, Math.PI, 0),
          e().place(6.1, 5, 0));
      },
      study() {
        (w("D1").open(1, !0),
          w("D4").open(1, !0),
          t.nav.rebuild(),
          i.place(6.1, 6.7, -Math.PI / 2, 0),
          e().place(6.1, 7.6, 0));
      },
      guns() {
        (w("D1").open(1, !0),
          w("D4").open(1, !0),
          t.nav.rebuild(),
          i.place(8, 6.5, -Math.PI / 2, -0.15),
          e().place(7.7, 6.1, Math.PI / 2));
      },
      firstdead() {
        (w("D1").open(1, !0),
          w("D4").open(1, !0),
          t.nav.rebuild(),
          i.place(6.1, 11.4, Math.PI, 0),
          e().place(6.1, 12.3, 0),
          e().lowReady());
      },
      fight() {
        (w("D1").open(1, !0),
          w("D4").open(1, !0),
          t.nav.rebuild(),
          i.place(6.1, 15.6, Math.PI, 0),
          e().place(6.6, 15, 0),
          e().lowReady());
      },
      finale() {
        (w("D1").open(1, !0), w("D4").open(1, !0));
        for (const p of ["D5", "D3"]) {
          const P = w(p);
          ((P.locked = !1), P.open(1, !0));
        }
        (t.nav.rebuild(),
          i.place(9.6, 16.9, -Math.PI / 2, 0),
          e().place(10.6, 17.4, Math.PI / 2),
          e().lowReady());
      },
    },
    ot = {
      intro: [],
      bedroom: [],
      lock: ["torch"],
      hall: ["torch"],
      study: ["torch"],
      guns: ["torch"],
      firstdead: ["torch", "pistol"],
      fight: ["torch", "pistol"],
      finale: ["torch", "pistol"],
    },
    Ft = {
      intro: u,
      bedroom: m,
      lock: d,
      hall: x,
      study: A,
      guns: A,
      firstdead: q,
      fight: Z,
      finale: lt,
    };
  return (
    (n.goto = async function (P, { silent: M = !1 } = {}) {
      n.run++;
      const G = n.run;
      (n.heart?.stop?.(0.3),
        (n.heart = null),
        (t.playerSpeaking = !1),
        t.audio.loops.get("horde_moan")?.stop?.(0.3),
        (n.lastGot = null),
        l.clear(),
        t.zombies.clear(),
        t.hud.clearSubtitle(),
        t.hud.task?.(null),
        t.npc.revive?.(),
        t.npc.stop(),
        t.npc.work?.(null),
        (t.npc.grabbed = !1),
        t.npc.lowReady?.(),
        t.npc.holster(),
        t.npc.standUp(),
        t.npc.emote("neutral"),
        (t.post.fade = 0),
        (t.post.lid = 1),
        (t.post.blur = 0),
        (t.camCtl = null),
        (i.frozen = !1),
        t.hud.card("", "", !1),
        (n.beat = P),
        (n.flags = { kills: 0 }),
        t.combat.heal(),
        (t.weapons.ammo = t.weapons.mag),
        (t.weapons.reserve = 48));
      for (const S of ot[P] || []) t.weapons.give(S);
      (ot[P]?.includes("pistol") ||
        ((t.weapons.has.pistol = !1), (t.weapons.gunRoot.visible = !1)),
        ot[P]?.includes("torch") || (t.weapons.has.torch = !1),
        (zt[P] || (() => {}))(),
        t.audio.unlock?.(),
        (n.running = !0));
      try {
        await (Ft[P] || u)(G);
      } catch (S) {
        console.error("[script]", S);
      }
      n.running = !1;
    }),
    (n.enter = async function (P) {
      (n.run++,
        l.clear(),
        t.zombies.clear(),
        t.hud.clearSubtitle(),
        t.hud.task?.(null),
        t.npc.revive?.(),
        t.npc.stop(),
        t.npc.work?.(null),
        (t.npc.grabbed = !1),
        t.npc.holster(),
        t.npc.standUp(),
        (t.post.fade = 0),
        (t.post.lid = 1),
        (t.post.blur = 0),
        (t.camCtl = null),
        (i.frozen = !1),
        (n.beat = P),
        (n.flags = { kills: 0 }),
        t.combat.heal());
      for (const M of ot[P] || []) t.weapons.give(M);
      (ot[P]?.includes("pistol") ||
        ((t.weapons.has.pistol = !1), (t.weapons.gunRoot.visible = !1)),
        ot[P]?.includes("torch") || (t.weapons.has.torch = !1),
        ot[P]?.includes("pistol") &&
          ((t.weapons.drawK = 1), (t.weapons.state = "idle")),
        (zt[P] || (() => {}))(),
        (P === "firstdead" || P === "fight") &&
          P === "firstdead" &&
          (n.flags.z1 = t.zombies.spawn(
            "lanky",
            wt.zombieFirst[0],
            wt.zombieFirst[1],
            { yaw: 0 },
          )));
      for (let M = 0; M < 6; M++) t.step(1 / 30);
    }),
    (n.start = () =>
      n.goto(new URLSearchParams(location.search).get("beat") || "intro")),
    (n.restartBeat = () => n.goto(n.beat === "guns" ? "study" : n.beat)),
    (n.grabScene = $),
    (n.seenAt = b),
    n
  );
}
const fs = 5;
function mi(o, { exclude: t = [] } = {}) {
  const i = o.scene,
    e = o.renderer,
    s = o.camera.layers.mask;
  i.updateMatrixWorld(!0);
  const l = new Set(t.filter(Boolean)),
    n = (T) => {
      for (let f = T; f; f = f.parent) if (l.has(f)) return !0;
      return !1;
    },
    r = (T) => {
      for (let f = T; f; f = f.parent) if (!f.visible) return !1;
      return !0;
    },
    h = (T) => {
      let f = T;
      for (; f.parent && f.parent !== i;) f = f.parent;
      return f;
    },
    a = (T) =>
      T &&
      T.visible !== !1 &&
      !T.wireframe &&
      !T.alphaToCoverage &&
      !(T.alphaTest > 0 && (T.map || T.alphaMap)) &&
      !(T.displacementMap && T.displacementScale !== 0) &&
      !(T.clippingPlanes && T.clippingPlanes.length),
    y = new Map(),
    g = new pt();
  i.traverse((T) => {
    if (
      !T.isMesh ||
      !T.castShadow ||
      T.isSkinnedMesh ||
      T.isInstancedMesh ||
      T.isBatchedMesh ||
      !(T.layers.mask & s) ||
      n(T) ||
      !r(T) ||
      T.customDepthMaterial ||
      T.customDistanceMaterial ||
      T.onBeforeShadow !== ys.prototype.onBeforeShadow
    )
      return;
    const f = T.geometry;
    if (
      !f ||
      !f.attributes.position ||
      f.morphAttributes.position ||
      f.drawRange.start !== 0 ||
      f.drawRange.count !== 1 / 0
    )
      return;
    const b = Array.isArray(T.material) ? T.material : [T.material];
    if (!b.every(a)) return;
    const L = b[0].side,
      v = b[0].shadowSide ?? null;
    if (!b.every((C) => C.side === L && (C.shadowSide ?? null) === v)) return;
    (f.boundingSphere || f.computeBoundingSphere(),
      g.copy(f.boundingSphere.center).applyMatrix4(T.matrixWorld));
    const R = `${h(T).uuid}|${L}|${v}|${Math.floor(g.x / fs)},${Math.floor(g.z / fs)}`;
    let W = y.get(R);
    (W || y.set(R, (W = { side: L, ss: v, src: [] })), W.src.push(T));
  });
  const w = new de();
  ((w.name = "shadowProxies"), (w.matrixAutoUpdate = !1), (w.visible = !1));
  const _ = [];
  for (const T of y.values()) {
    if (T.src.length < 2) continue;
    let f = 0,
      b = 0;
    for (const d of T.src) {
      const x = d.geometry;
      ((f += x.attributes.position.count),
        (b += x.index ? x.index.count : x.attributes.position.count));
    }
    const L = new Float32Array(f * 3),
      v = f > 65535 ? new Uint32Array(b) : new Uint16Array(b);
    let R = 0,
      W = 0;
    const C = [];
    for (const d of T.src) {
      const x = d.geometry,
        A = x.attributes.position,
        q = d.matrixWorld.elements;
      for (let $ = 0; $ < A.count; $++) {
        const lt = A.getX($),
          zt = A.getY($),
          ot = A.getZ($),
          Ft = (R + $) * 3;
        ((L[Ft] = q[0] * lt + q[4] * zt + q[8] * ot + q[12]),
          (L[Ft + 1] = q[1] * lt + q[5] * zt + q[9] * ot + q[13]),
          (L[Ft + 2] = q[2] * lt + q[6] * zt + q[10] * ot + q[14]));
      }
      const Z = d.matrixWorld.determinant() < 0;
      if (x.index) {
        const $ = x.index.array;
        for (let lt = 0; lt < $.length; lt += 3)
          ((v[W++] = $[lt] + R),
            (v[W++] = $[lt + (Z ? 2 : 1)] + R),
            (v[W++] = $[lt + (Z ? 1 : 2)] + R));
      } else
        for (let $ = 0; $ + 2 < A.count; $ += 3)
          ((v[W++] = R + $),
            (v[W++] = R + $ + (Z ? 2 : 1)),
            (v[W++] = R + $ + (Z ? 1 : 2)));
      (C.push({
        o: d,
        start: R,
        count: A.count,
        m: Float64Array.from(q),
        geo: x,
        mat: d.material,
        mats: Array.isArray(d.material) ? d.material.slice() : null,
      }),
        (R += A.count));
    }
    const j = new Je();
    (j.setAttribute("position", new ue(L, 3)),
      j.setIndex(new ue(v.subarray(0, W), 1)),
      j.computeBoundingSphere());
    const u = new vs({ side: T.side, colorWrite: !1, depthWrite: !1 });
    u.shadowSide = T.ss;
    const m = new Vt(j, u);
    ((m.name = "shadowProxy"),
      (m.castShadow = !0),
      (m.receiveShadow = !1),
      (m.matrixAutoUpdate = !1),
      w.add(m));
    for (const d of C) ((d.mesh = m), (d.o.castShadow = !1), _.push(d));
  }
  (i.add(w), w.updateMatrixWorld(!0));
  const c = e.shadowMap,
    k = c.render;
  c.render = function (...T) {
    w.visible = !0;
    try {
      return k.apply(this, T);
    } finally {
      w.visible = !1;
    }
  };
  let K = 0;
  const Y = (T) => {
    const f = T.mesh.geometry.attributes.position,
      b = f.array,
      L = T.start * 3,
      v = (T.start + T.count) * 3,
      R = b[L],
      W = b[L + 1],
      C = b[L + 2];
    for (let j = L; j < v; j += 3) ((b[j] = R), (b[j + 1] = W), (b[j + 2] = C));
    (f.addUpdateRange(L, v - L),
      (f.needsUpdate = !0),
      (T.o.castShadow = !0),
      K++);
  };
  let F = -1;
  function X() {
    if (o.frameNo === F) return;
    F = o.frameNo;
    let T = 0;
    for (let f = 0; f < _.length; f++) {
      const b = _[f],
        L = b.o,
        v = L.matrixWorld.elements,
        R = b.m;
      let W = L.geometry !== b.geo || L.material !== b.mat;
      if (!W && b.mats) {
        for (let C = 0; C < b.mats.length; C++)
          if (L.material[C] !== b.mats[C]) {
            W = !0;
            break;
          }
      }
      if (!W) {
        for (let C = 0; C < 16; C++)
          if (v[C] !== R[C]) {
            W = !0;
            break;
          }
      }
      (W || (W = !r(L)), W ? Y(b) : (_[T++] = b));
    }
    _.length = T;
  }
  const J = i.onBeforeRender;
  i.onBeforeRender = function (...T) {
    return (X(), J.apply(this, T));
  };
  let U = !0;
  const N = (T) => {
    if (T !== U) {
      U = T;
      for (const f of _) f.o.castShadow = !T;
      for (const f of w.children) f.castShadow = T;
    }
  };
  return {
    holder: w,
    get merged() {
      return _.length;
    },
    get evicted() {
      return K;
    },
    proxies: w.children.length,
    check: X,
    setEnabled: N,
  };
}
const Ie = 0.25;
function yi(o, { exclude: t = [] } = {}) {
  const i = o.scene;
  i.updateMatrixWorld(!0);
  const e = [];
  for (const f of Fs)
    for (const b of f.openings) {
      if (b.type !== "door" && b.type !== "arch") continue;
      const L = f.x1 - f.x0 < f.z1 - f.z0,
        v = L
          ? new Oe(
              new pt(f.x0, b.sill, f.z0 + b.at),
              new pt(f.x1, b.head, f.z0 + b.at + b.w),
            )
          : new Oe(
              new pt(f.x0 + b.at, b.sill, f.z0),
              new pt(f.x0 + b.at + b.w, b.head, f.z1),
            ),
        R = v.getCenter(new pt()),
        W = L ? ie(f.x0 - 0.3, R.z) : ie(R.x, f.z0 - 0.3),
        C = L ? ie(f.x1 + 0.3, R.z) : ie(R.x, f.z1 + 0.3);
      if (!W || !C || W === C) continue;
      const j = [];
      for (const u of [v.min.x, v.max.x])
        for (const m of [v.min.y, v.max.y])
          for (const d of [v.min.z, v.max.z]) j.push(new pt(u, m, d));
      e.push({ id: b.id, a: W, b: C, corners: j });
    }
  const s = {};
  for (const f of Object.keys(le))
    s[f] = e.filter((b) => b.a === f || b.b === f);
  const l = new Set(t.filter(Boolean)),
    n = (f) => {
      for (let b = f; b; b = b.parent) if (l.has(b)) return !0;
      return !1;
    },
    r = Object.entries(le).map(([f, b]) => [
      f,
      b.x0 - Ie,
      b.x1 + Ie,
      b.z0 - Ie,
      b.z1 + Ie,
    ]),
    h = {};
  for (const f of Object.keys(le)) h[f] = [];
  const a = new Oe();
  let y = 0;
  i.traverse((f) => {
    if (
      !(f.isMesh || f.isLine || f.isPoints || f.isSprite) ||
      f.isSkinnedMesh ||
      f.isInstancedMesh ||
      !f.geometry ||
      n(f)
    )
      return;
    const b = f.geometry;
    if (
      (b.boundingBox || b.computeBoundingBox(),
      !b.boundingBox || b.boundingBox.isEmpty())
    )
      return;
    a.copy(b.boundingBox).applyMatrix4(f.matrixWorld);
    const L = r.filter(
      ([, W, C, j, u]) =>
        a.min.x >= W && a.max.x <= C && a.min.z >= j && a.max.z <= u,
    );
    if (L.length !== 1) return;
    const v = L[0][0],
      R = f.matrixWorld.elements;
    (h[v].push({ o: f, mask: 0, parent: f.parent, p: [R[12], R[13], R[14]] }),
      y++);
  });
  const g = new It(),
    w = new Gs(),
    _ = new pt(),
    c = new Set(),
    k = [-1, -1, 1, 1],
    K = (f, b) => {
      let L = 1 / 0,
        v = 1 / 0,
        R = -1 / 0,
        W = -1 / 0,
        C = 0;
      for (const j of f.corners) {
        if ((w.set(j.x, j.y, j.z, 1).applyMatrix4(g), w.w < 0.05)) {
          C++;
          continue;
        }
        const u = w.x / w.w,
          m = w.y / w.w;
        (u < L && (L = u),
          u > R && (R = u),
          m < v && (v = m),
          m > W && (W = m));
      }
      return C === f.corners.length
        ? null
        : (C > 0 && ((L = -1), (v = -1), (R = 1), (W = 1)),
          (L = Math.max(L, b[0])),
          (v = Math.max(v, b[1])),
          (R = Math.min(R, b[2])),
          (W = Math.min(W, b[3])),
          L < R && v < W ? [L, v, R, W] : null);
    },
    Y = new Set(),
    F = new Set(),
    X = (f, b, L) => {
      if ((Y.add(f), !(L > 7)))
        for (const v of s[f]) {
          const R = v.a === f ? v.b : v.a;
          if (F.has(R)) continue;
          const W = K(v, b);
          W && (F.add(R), X(R, W, L + 1), F.delete(R));
        }
    },
    J = (f) => {
      const b = f.o.matrixWorld.elements;
      return (
        f.o.parent === f.parent &&
        Math.abs(b[12] - f.p[0]) +
          Math.abs(b[13] - f.p[1]) +
          Math.abs(b[14] - f.p[2]) <
          0.5
      );
    },
    U = (f) => {
      for (const b of h[f]) b.o && (b.o.layers.mask = b.mask);
      c.delete(f);
    },
    N = (f) => {
      for (const b of h[f])
        if (b.o) {
          if (!J(b)) {
            b.o = null;
            continue;
          }
          ((b.mask = b.o.layers.mask), (b.o.layers.mask = 0));
        }
      c.add(f);
    };
  function T(f) {
    (f.updateMatrixWorld(), f.getWorldPosition(_));
    const b =
      o.flags.has("nocull") || o.flags.has("noceil") ? null : ie(_.x, _.z);
    if ((Y.clear(), b && _.y > -0.2 && _.y < le[b].h + 0.2))
      (g.multiplyMatrices(f.projectionMatrix, f.matrixWorldInverse),
        F.clear(),
        F.add(b),
        X(b, k, 0));
    else for (const L of Object.keys(le)) Y.add(L);
    for (const L of Object.keys(le))
      Y.has(L) ? c.has(L) && U(L) : c.has(L) || N(L);
    for (const L of c)
      for (const v of h[L])
        v.o && !J(v) && ((v.o.layers.mask = v.mask), (v.o = null));
  }
  return {
    update: T,
    portals: e,
    get culled() {
      return [...c];
    },
    objects: y,
    content: h,
  };
}
const gi = () => new Promise((o) => setTimeout(o, 40));
async function Li(o, t = () => {}) {
  (t(0.4, "systems"),
    (o.nav = new Vs(o.world, 0.3, o.navPlan || null)),
    (o.roomAt ||= ie),
    (o.fx = $s(o)),
    (o.hud = Zs()),
    (o.combat = ti(o)),
    (o.zombies = await si(o)),
    o.loadMark?.("zombies"),
    (o.weapons = pi(o)),
    o.weapons.onFire((r) => o.combat.shoot(r)),
    t(0.55, "akane"),
    await gi());
  const i = Hs(o, {});
  (o.scene.add(i.root),
    (o.npc = new fi(o, i, o.nav)),
    o.loadMark?.("akane"),
    (o.npc.onFire = (r, h) =>
      o.combat.shoot({
        origin: r.clone(),
        dir: h.clone(),
        muzzle: r.clone(),
        muzzleDir: h.clone(),
        spread: 0.012,
        player: !1,
      })),
    i.setPose({ guitar: 0, arms: "gun", gunRaise: 1, gunHands: 2 }, 0),
    i.setPose({ guitar: 0, arms: "hands_up" }, 0),
    i.setPose({ guitar: 0, arms: "touch", touchAt: [0.3, 0.55, 0.45] }, 0),
    i.setPose({ guitar: 0, arms: "point", pointUp: 0.25 }, 0),
    i.setPose(
      { guitar: 0, arms: "grab", grabL: [0.2, 1, 0.4], grabR: [-0.2, 1, 0.4] },
      0,
    ),
    i.setPose({ guitar: 0, arms: "down" }, 0),
    t(0.85, "script"),
    o.updaters.push((r) => o.weapons.update(r)),
    o.updaters.push((r) => o.npc.tick(r)),
    o.updaters.push((r) => o.zombies.update(r)),
    o.updaters.push((r) => o.combat.update(r)),
    o.updaters.push((r) => o.fx.update(r)),
    o.updaters.push(() => bi(o)),
    o.prepares.push((r) => i.prepare(r)),
    o.prepares.push((r) => o.zombies.prepare(r)),
    (o.combat.onPlayerDeath = () => xi(o)),
    (o.npc.onDeath = () => vi(o)));
  let e = null;
  const s = () => {
    const r = ["a_hurt1", "a_hurt2", "a_hurt3"].filter((h) => h !== e);
    return ((e = r[Math.floor(Math.random() * r.length)]), e);
  };
  o.npc.onWound = (r) => {
    const h = o.npc;
    (r >= 2 || !h.speaking) &&
      h.say(r >= 3 ? "v_hurt3" : r === 2 ? "v_hurt2" : s());
  };
  const l = {
      wood: ["step_wood_", 0.28, 0.4, 1],
      grass: ["step_grass_", 0.07, 0.09, 1],
      gravel: ["step_gravel_", 0.14, 0.16, 1],
      stone: ["step_stone_", 0.2, 0.26, 1],
      tile: ["step_stone_", 0.22, 0.26, 1.08],
      ash: ["step_gravel_", 0.08, 0.1, 0.8],
      leaves: ["step_leaves_", 0.12, 0.14, 1],
      dirt: ["step_dirt_", 0.12, 0.14, 1],
      concrete: ["step_stone_", 0.2, 0.25, 0.94],
      metal: ["step_metal_", 0.2, 0.24, 1],
      asphalt: ["step_stone_", 0.18, 0.22, 0.9],
    },
    n = (r, h) => l[o.surfaceAt ? o.surfaceAt(r, h) : "wood"] || l.wood;
  if (
    ((o.player.onStep = (r, h) => {
      const a =
        (o.player.deck?.surface && l[o.player.deck.surface]) ||
        n(o.player.pos.x, o.player.pos.z);
      o.audio.play(a[0] + (1 + ((Math.random() * 4) | 0)), {
        vol: a[1] + a[2] * h,
        rate: a[3] * (0.94 + Math.random() * 0.12),
      });
    }),
    (o.npc.onStep = (r) => {
      const h = o.npc.pos,
        a = n(h.x, h.z);
      o.audio.play(a[0] + (1 + ((Math.random() * 4) | 0)), {
        pos: [h.x, 0.05, h.z],
        vol: a[1] * 0.8 + a[2] * 0.4 * Math.min(1, r / 2),
        rate: a[3] * (0.9 + Math.random() * 0.16),
        ref: 1.5,
      });
    }),
    o.lighting?.moon && o.lighting?.fire)
  ) {
    const r = o.lighting;
    let h = 0;
    for (const a of [r.moon, r.fire])
      ((a.shadow.autoUpdate = !1), (a.shadow.needsUpdate = !0));
    o.updaters.push(() => {
      const a = h++ % 4;
      a === 1
        ? (r.moon.shadow.needsUpdate = !0)
        : a === 3 && (r.fire.shadow.needsUpdate = !0);
    });
  }
  ((o.script =
    o.section === 3
      ? (
          await fe(
            async () => {
              const { createScript3: r } =
                await import("./script3-CjSek-Nt.js");
              return { createScript3: r };
            },
            __vite__mapDeps([5, 1, 0, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
            import.meta.url,
          )
        ).createScript3(o)
      : o.section === 2
        ? (
            await fe(
              async () => {
                const { createScript2: r } =
                  await import("./script2-Chjgntzz.js");
                return { createScript2: r };
              },
              __vite__mapDeps([15, 1, 0, 2, 3, 9, 7]),
              import.meta.url,
            )
          ).createScript2(o)
        : wi(o)),
    (o.beats = {
      goto: (r) =>
        r.startsWith("run:")
          ? (o.script.goto(r.slice(4)), null)
          : o.script.enter(r),
    }),
    o.loadMark?.("script"),
    ki(o),
    Mi(o),
    await _i(o),
    o.loadMark?.("warmUp"),
    (o.shadowProxies = mi(o, { exclude: [i.root, o.camera] })),
    zi(o),
    o.loadMark?.("shadow proxies"),
    o.shell &&
      ((o.roomCull = yi(o, {
        exclude: [
          i.root,
          o.camera,
          o.shadowProxies.holder,
          o.scene.getObjectByName("fx"),
          o.scene.getObjectByName("exterior"),
        ],
      })),
      o.prepares.unshift((r) => o.roomCull.update(r))),
    (o.gameplay = !0),
    (o.enableBot = async () => {
      const r = await fe(
        () => import("./bot-D6vJ5k-G.js"),
        __vite__mapDeps([16, 1]),
        import.meta.url,
      );
      return (
        (o.bot = r.createBot(o)),
        o.updaters.push((h) => o.bot.tick(h)),
        o.bot
      );
    }),
    new URLSearchParams(location.search).get("bot") === "1" &&
      (await o.enableBot()));
}
function bi(o) {
  const { hud: t, weapons: i, interact: e } = o,
    s = e.current;
  (t.prompt(s && !o.player.frozen ? s.prompt : null),
    t.crosshair(i.has.pistol && !o.player.frozen, i.aim > 0.5));
  const l =
    o.time - i.lastShot < 2.5 ||
    i.state === "reload" ||
    i.state === "draw" ||
    i.aim > 0.3 ||
    o.time < (i.showUntil || 0);
  t.ammo(i.ammo, i.mag, i.reserve, i.has.pistol && l);
  const n = o.npc,
    r = (h) => Math.max(0, 3 - h.n);
  t.vitals(r(o.combat.wounds), n && n.root.visible ? r(n.hits) : null);
}
async function vi(o) {
  const { player: t, post: i, npc: e } = o;
  o.combat.dead ||
    o.over ||
    ((o.over = !0),
    e.stop(),
    e.work?.(null),
    e.holster(),
    (e.grabbed = !1),
    (e.handsUp = 0),
    e.emote("dead", 99),
    e.lookAt(null),
    o.audio.play("sub_hit", { vol: 0.8 }),
    o.audio.voice("v_akane_dead", { vol: 1, reverb: 0.05 }),
    o.hud.subtitle(
      (o.audio.manifest.v_akane_dead?.text || "Akane!").replace(
        /^\[[^\]]*\]\s*/,
        "",
      ),
      2.6,
      "",
      "thought",
    ),
    await o.sched.wait(1.3),
    (t.frozen = !0),
    o.audio.duck("amb", 0.1, 4),
    i.fadeColor.setRGB(0.12, 0, 0),
    await o.sched.tween(i, "fade", 1, 1.6, "in"),
    o.hud.card("AKANE IS DEAD", "protect her"),
    await o.sched.wait(2.4),
    o.hud.card("", "", !1),
    i.fadeColor.setRGB(0, 0, 0),
    (o.over = !1),
    o.script.restartBeat());
}
async function xi(o) {
  const { player: t, post: i } = o;
  o.over ||
    ((o.over = !0),
    (t.frozen = !0),
    o.npc.stop(),
    o.audio.play("sub_hit", { vol: 0.9 }),
    o.audio.duck("amb", 0.1, 4),
    i.fadeColor.setRGB(0.12, 0, 0),
    await o.sched.tween(i, "fade", 1, 1.6, "in"),
    await o.sched.wait(1.6),
    i.fadeColor.setRGB(0, 0, 0),
    (o.over = !1),
    o.script.restartBeat());
}
function ki(o) {
  const e = new Set(
      [
        o.lighting?.moon,
        o.lighting?.fire,
        o.lighting?.sun,
        o.weapons.torch,
      ].filter(Boolean),
    ),
    s = o.roomAt,
    l = { spot: [], point: [] };
  o.scene.traverse((k) => {
    !k.isLight ||
      e.has(k) ||
      k.userData.noShadowBudget ||
      (k.isSpotLight && k.castShadow
        ? l.spot.push(k)
        : k.isPointLight && k.castShadow && l.point.push(k));
  });
  const n = new Map(),
    r = new pt();
  for (const k of [...l.spot, ...l.point])
    (k.getWorldPosition(r),
      n.set(k, s(r.x, r.z) || (r.z > 21 ? "living" : "outside")));
  const h = (k, K, Y, F) => {
      const X = s(Y.x, Y.z),
        J = (U) => (
          U.getWorldPosition(r),
          Math.hypot(r.x - Y.x, r.z - Y.z) +
            (n.get(U) === X ? 0 : 60) -
            (F.has(U) ? 1.6 : 0)
        );
      return new Set(
        k
          .map((U) => [J(U), U])
          .sort((U, N) => U[0] - N[0])
          .slice(0, K)
          .map((U) => U[1]),
      );
    },
    a = { spot: new Set(), point: new Set() },
    y = [...l.spot, ...l.point],
    g = new Set(y.filter((k) => k.shadow.autoUpdate === !1));
  for (const k of y) g.has(k) || (k.shadow.autoUpdate = !1);
  const w = () => {
    const k = o.player.pos;
    for (const [K, Y] of [
      ["spot", 2],
      ["point", 1],
    ]) {
      const F = h(l[K], Y, k, a[K]);
      for (const X of l[K]) {
        const J = F.has(X);
        X.castShadow !== J &&
          ((X.castShadow = J), J && (X.shadow.needsUpdate = !0));
      }
      a[K] = F;
    }
  };
  w();
  let _ = 0,
    c = 0;
  (o.updaters.push((k) => {
    ((_ += k), _ > 0.35 && ((_ = 0), w()), c++);
    const K = o.player.pos,
      Y = s(K.x, K.z),
      F = [o.npc.pos];
    for (const J of o.zombies.list) J.dead || F.push(J.pos);
    let X = 0;
    for (const J of y) {
      if (!J.castShadow || g.has(J) || J.intensity <= 0.01) continue;
      J.getWorldPosition(r);
      const U = Math.min(J.distance || 8, 8),
        N = (b) => {
          const L = (b.y ?? 0) - r.y;
          return Math.abs(L) > 3 ? L * L : 0;
        },
        f =
          n.get(J) === Y ||
          (r.x - K.x) ** 2 + (r.z - K.z) ** 2 + N(K) < 4.5 * 4.5 ||
          F.some((b) => (r.x - b.x) ** 2 + (r.z - b.z) ** 2 + N(b) < U * U)
            ? 2
            : 30;
      ((c + X * 7) % f === 0 && (J.shadow.needsUpdate = !0), X++);
    }
  }),
    (o.shadowBudget = { apply: w, cands: l }));
}
function Mi(o) {
  (o.camera.layers.enable(1), o.weapons.torch.shadow.camera.layers.enable(1));
  const i = o.npc.akane.root;
  o.scene.updateMatrixWorld(!0);
  let e = 0;
  (o.scene.traverse((s) => {
    if (
      !s.isMesh ||
      !s.castShadow ||
      s.isSkinnedMesh ||
      s.isInstancedMesh ||
      !s.geometry
    )
      return;
    let l = !1;
    for (let h = s; h; h = h.parent)
      if (h === i) {
        l = !0;
        break;
      }
    const n = s.geometry;
    (n.boundingSphere || n.computeBoundingSphere(),
      (n.boundingSphere
        ? n.boundingSphere.radius * s.matrixWorld.getMaxScaleOnAxis()
        : 0) < (l ? 0.1 : 0.2) && (s.layers.set(1), e++));
  }),
    (o.shadowLayers = { small: 1, moved: e }));
}
function zi(o) {
  try {
    const t = o.renderer,
      i = o.shadowProxies.holder,
      e = new Bs(),
      s = new Us(),
      l = new qs(4, 4),
      n = i.children.map((a) => a.frustumCulled),
      r = t.shadowMap.autoUpdate,
      h = t.getRenderTarget();
    (i.children.forEach((a) => {
      a.frustumCulled = !1;
    }),
      o.scene.remove(i),
      e.add(i),
      (i.visible = !0),
      (t.shadowMap.autoUpdate = !1),
      t.setRenderTarget(l),
      t.render(e, s),
      t.setRenderTarget(h),
      (t.shadowMap.autoUpdate = r),
      e.remove(i),
      o.scene.add(i),
      (i.visible = !1),
      i.children.forEach((a, y) => {
        a.frustumCulled = n[y];
      }),
      l.dispose());
  } catch (t) {
    console.warn("[warmShadowProxies]", t);
  }
}
async function _i(o) {
  try {
    const i = o.zombies.kinds
        .filter((c) => c !== "priest")
        .map((c, k) => o.zombies.spawn(c, -60 - k * 3, -60, {})),
      e = o.zombies.keepWarm?.(),
      s = o.script?.priest,
      l = s ? s.z.root.visible : !1;
    (s &&
      (s.z.root.position.set(-60 - i.length * 3 - 3, 0, -60),
      (s.z.root.visible = !0),
      s.z.setFade?.(0.5),
      s.z.holdLantern?.(!0),
      s.z.selfLight?.(0.5)),
      o.player.place(6, 2, 0, 0),
      o.fx.muzzleFlash(new pt(0, 1, -50), new pt(0, 0, -1), 0.01),
      o.fx.impactBody(new pt(0, 1, -50), new pt(0, 0, -1), 0.1),
      o.fx.impactWorld(new pt(0, 1, -50), new pt(0, 0, 1)),
      o.fx.tracer(new pt(0, 1, -50), new pt(0, 1, -51)),
      o.step(1 / 60));
    const n = o.renderer,
      r = new Set(),
      h = (c) => {
        if (c && c.isTexture && !r.has(c)) {
          r.add(c);
          try {
            n.initTexture(c);
          } catch {}
        }
      };
    (o.scene.traverse((c) => {
      if (c.material)
        for (const k of Array.isArray(c.material) ? c.material : [c.material]) {
          for (const K in k) h(k[K]);
          if (k.uniforms) for (const K in k.uniforms) h(k.uniforms[K].value);
        }
    }),
      n.setRenderTarget(o.post.rt.scene),
      n.compile(o.scene, o.camera),
      n.setRenderTarget(null));
    const a = o.lighting,
      y = o.shadowBudget.cands,
      g = [];
    o.scene.traverse((c) => {
      c.isLight && c.castShadow && c.shadow && g.push(c);
    });
    const w = [
        ...new Set(
          [
            a?.moon,
            a?.fire,
            a?.sun,
            o.weapons.torch,
            ...y.spot,
            ...y.point,
            ...g,
          ].filter(Boolean),
        ),
      ],
      _ = w.map((c) => c.castShadow);
    (w.forEach((c) => {
      ((c.castShadow = !0), (c.shadow.needsUpdate = !0));
    }),
      n.shadowMap.render(w, o.scene, o.camera),
      w.forEach((c, k) => {
        c.castShadow = _[k];
      }));
    for (const c of Object.values(o.rooms)) c.props?.warmUp?.();
    (o.render(),
      o.npc?.akane?.char?.parts?.head?.warm?.(4096, n),
      e && (e.root.visible = !1),
      s &&
        ((s.z.root.visible = l),
        s.z.setFade?.(1),
        s.z.holdLantern?.(!1),
        s.z.selfLight?.(0)),
      o.zombies.clear(),
      o.fx.update(0.5));
  } catch (i) {
    console.warn("[warmUp]", i);
  }
  const t = o.startPoint || [wt.bedside[0], wt.bedside[1], 0];
  o.player.place(t[0], t[1], t[2] ?? 0, 0);
}
export { Li as installGameplay };
