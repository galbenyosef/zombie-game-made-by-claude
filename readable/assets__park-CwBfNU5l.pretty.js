import { C as W0, d as Jt } from "./plan3-BlRgM2iV.js";
import { m as v0, V as I, t as k0 } from "./common-BYwPbecq.js";
import {
  C as Vt,
  x as ue,
  h as $t,
  c as jt,
  M as u0,
  ae as $e,
  o as gt,
  V as a0,
  Q as C0,
  E as q0,
  b as It,
  f as da,
  g as ua,
  N as fa,
  Y as Se,
  G as P0,
  B as Q0,
  m as y0,
  a2 as Qe,
  a3 as Je,
  ah as xt,
  ak as N,
  $ as z0,
  q as j0,
  a9 as _0,
  a8 as Ie,
  d as _t,
  an as Y0,
  v as ha,
  U as pa,
  X as ma,
  aG as xa,
  aH as Ma,
  ao as Fe,
  I as H0,
  l as he,
  K as U0,
  J as pe,
  p as ge,
  i as oe,
  A as me,
  au as wa,
  av as ba,
  k as va,
  P as Oe,
  n as ya,
  ai as za,
  a6 as ga,
  a5 as ka,
} from "./index-DaQlAVPp.js";
import { a as Be } from "./BufferGeometryUtils-Qxvmd-vM.js";
import { R as Pa } from "./RoundedBoxGeometry-D0zz8qHa.js";
import {
  n as Ke,
  j as Re,
  o as Ue,
  s as Xe,
  u as Ve,
  q as Sa,
} from "./district-BhfbivMT.js";
const R0 = { x0: 424, x1: 436, z0: 196 },
  ke = 0.45,
  c0 = { x: 433, z: 150, r: 4.6, plaza: 12.5 },
  I0 = { x: 400, z: 140.5, r: 5 },
  ta = { x0: 394, x1: 417, z0: 166.5, z1: 185.5 },
  L0 = { x: 411.2, z: 124.6, r: 4.2 },
  m0 = { x0: 418, x1: 490, z0: 64, z1: 125 },
  h0 = { x: W0.pos[0], z: W0.pos[2], half: 11 },
  E0 = { x0: 443.4, x1: 450.4 },
  Ae = { x0: 419, x1: 441, z0: 186.5, z1: 196 },
  ne = { z0: 104.6, z1: 121.4, xs: [440.8, 444.6, 450.6, 454.4] },
  F0 = { x0: 458, x1: 494, z0: 158, z1: 182 },
  Z0 = { x0: 421, x1: 433.5, z0: 126.5, z1: 137.5 },
  Nt = {
    x: 449.12,
    z: 174.88,
    yaw: -2.574,
    tree: [447.6, 171.6],
    breach: [468, 204.6],
  },
  Aa = [
    {
      id: "avenue",
      kind: "asphalt",
      w: 5,
      pts: [
        [430, 195.9],
        [430.1, 189],
        [430.6, 181],
        [431.6, 173],
        [432.6, 166],
        [433.3, 160.5],
      ],
    },
    {
      id: "avenueN",
      kind: "asphalt",
      w: 5,
      pts: [
        [437.4, 140.5],
        [440.1, 134.2],
        [443.2, 128.5],
        [446.1, 123.6],
        [447.2, 120.6],
      ],
    },
    {
      id: "swPath",
      kind: "asphalt",
      w: 3.4,
      pts: [
        [421, 190.6],
        [410, 189.6],
        [397, 190.4],
        [380, 194.2],
        [364, 197],
        [349.4, 197.4],
      ],
    },
    {
      id: "sePath",
      kind: "asphalt",
      w: 3.4,
      pts: [
        [439, 190.6],
        [452, 189.4],
        [470, 190.4],
        [492, 194.4],
        [512, 196.8],
        [530.6, 197.1],
      ],
    },
    {
      id: "crossW",
      kind: "gravel",
      w: 3.6,
      pts: [
        [349.4, 151.2],
        [370, 150.6],
        [388, 151.6],
        [405, 151.4],
        [421.2, 150.5],
      ],
    },
    {
      id: "crossE",
      kind: "gravel",
      w: 3.6,
      pts: [
        [444.8, 150.2],
        [462, 149],
        [484, 147.3],
        [506, 146.7],
        [530.6, 146.9],
      ],
    },
    {
      id: "diagNW",
      kind: "gravel",
      w: 3,
      pts: [
        [424, 142],
        [417.6, 133.6],
        [413.2, 127.6],
        [404.5, 113.5],
        [393.5, 95],
        [384, 75],
        [377, 55],
        [372.5, 38],
        [371, 29.4],
      ],
    },
    {
      id: "north",
      kind: "gravel",
      w: 3,
      pts: [
        [380.6, 67.5],
        [398, 57],
        [425, 52],
        [455, 50.4],
        [485, 52.6],
        [505, 58.2],
        [511.5, 60.6],
      ],
    },
    {
      id: "east",
      kind: "gravel",
      w: 3,
      pts: [
        [484, 147.3],
        [494, 132],
        [501.5, 112],
        [506.5, 88],
        [509.2, 70],
        [511.5, 60.6],
        [514.2, 45],
        [515, 29.4],
      ],
    },
    {
      id: "bandSpur",
      kind: "gravel",
      w: 2.6,
      pts: [
        [401.6, 151.5],
        [401, 147.6],
      ],
    },
    {
      id: "statueW",
      kind: "gravel",
      w: 2.6,
      pts: [
        [407.2, 124.8],
        [396, 127.5],
        [380, 129.5],
        [362, 128.6],
        [349.4, 128.2],
      ],
    },
  ],
  _e = [
    { id: "fountain", x: c0.x, z: c0.z, r: c0.plaza, kind: "setts" },
    { id: "statue", x: L0.x, z: L0.z, r: L0.r, kind: "setts" },
    { id: "bandstand", x: I0.x, z: I0.z, r: I0.r + 2.4, kind: "gravel" },
  ],
  _a = [
    { id: "wS", x: 350, z: 197.4, axis: "x", w: 3.6 },
    { id: "w", x: 350, z: 151.2, axis: "x", w: 4.2 },
    { id: "wN", x: 350, z: 128.2, axis: "x", w: 3 },
    { id: "eS", x: 530, z: 197.1, axis: "x", w: 3.6 },
    { id: "e", x: 530, z: 146.9, axis: "x", w: 4.2 },
    { id: "nW", x: 371, z: 30, axis: "z", w: 3.6 },
    { id: "nE", x: 515, z: 30, axis: "z", w: 3.6 },
  ],
  ea = [430, 194.2],
  aa = [450.8, 93.7],
  Ta = [
    ea,
    [430.2, 186.5],
    [431, 178.5],
    [432.4, 170.5],
    [434.3, 163.4],
    [438.3, 157.4],
    [441.4, 150.6],
    [440.8, 144],
    [439, 138.4],
    [440.9, 132.6],
    [443.8, 127.3],
    [446.5, 122.2],
    [447.4, 115],
    [447.7, 107.5],
    [448.6, 100.6],
    aa,
  ];
function oa(e, a = 0.5) {
  const t = [];
  for (let r = 0; r < e.length - 1; r++) {
    const o = e[Math.max(0, r - 1)],
      n = e[r],
      i = e[r + 1],
      f = e[Math.min(e.length - 1, r + 2)],
      w = Math.hypot(i[0] - n[0], i[1] - n[1]),
      s = Math.max(1, Math.ceil(w / a));
    for (let l = 0; l < s; l++) {
      const u = l / s,
        c = u * u,
        M = c * u,
        h = (v, S, d, y) =>
          0.5 *
          (2 * S +
            (-v + d) * u +
            (2 * v - 5 * S + 4 * d - y) * c +
            (-v + 3 * S - 3 * d + y) * M);
      t.push([h(o[0], n[0], i[0], f[0]), h(o[1], n[1], i[1], f[1])]);
    }
  }
  return (t.push(e[e.length - 1].slice()), t);
}
function Ca(e, a) {
  const t = [e[0].slice()];
  let r = a;
  for (let i = 1; i < e.length; i++) {
    let f = e[i - 1][0],
      w = e[i - 1][1];
    const s = e[i][0],
      l = e[i][1];
    let u = Math.hypot(s - f, l - w);
    for (; u >= r && u > 1e-9;) {
      const c = r / u;
      ((f += (s - f) * c),
        (w += (l - w) * c),
        t.push([f, w]),
        (u -= r),
        (r = a));
    }
    r -= u;
  }
  const o = e[e.length - 1],
    n = t[t.length - 1];
  return (
    Math.hypot(o[0] - n[0], o[1] - n[1]) > a * 0.35
      ? t.push(o.slice())
      : (t[t.length - 1] = o.slice()),
    t
  );
}
const Ia = (e) => {
  let a = 0;
  for (let t = 1; t < e.length; t++)
    a += Math.hypot(e[t][0] - e[t - 1][0], e[t][1] - e[t - 1][1]);
  return a;
};
function se(e, a, t, r, o, n) {
  const i = o - t,
    f = n - r,
    w = i * i + f * f,
    s = w > 0 ? Math.max(0, Math.min(1, ((e - t) * i + (a - r) * f) / w)) : 0;
  return Math.hypot(e - (t + i * s), a - (r + f * s));
}
const N0 = oa(Ta, 0.25),
  T0 = Ca(N0, 3).map(([e, a]) => [+e.toFixed(2), +a.toFixed(2)]);
function G0(e, a) {
  let t = 1e9;
  for (let r = 1; r < N0.length; r++) {
    const o = N0[r - 1],
      n = N0[r];
    t = Math.min(t, se(e, a, o[0], o[1], n[0], n[1]));
  }
  return t;
}
const X0 = 8,
  fe = new Map(),
  na = (e, a) => e * 4096 + a,
  be = Aa.map((e) => {
    const a = oa(e.pts, 0.5);
    let t = 0;
    const r = [];
    for (let o = 1; o < a.length; o++) {
      const n = a[o - 1],
        i = a[o],
        f = Math.hypot(i[0] - n[0], i[1] - n[1]),
        w = {
          ax: n[0],
          az: n[1],
          bx: i[0],
          bz: i[1],
          hw: e.w / 2,
          kind: e.kind,
          id: e.id,
          u0: t,
          u1: t + f,
        };
      ((t += f), r.push(w));
      const s = e.w / 2 + 2,
        l = Math.floor((Math.min(n[0], i[0]) - s) / X0),
        u = Math.floor((Math.max(n[0], i[0]) + s) / X0),
        c = Math.floor((Math.min(n[1], i[1]) - s) / X0),
        M = Math.floor((Math.max(n[1], i[1]) + s) / X0);
      for (let h = l; h <= u; h++)
        for (let v = c; v <= M; v++) {
          const S = na(h, v);
          (fe.has(S) || fe.set(S, []), fe.get(S).push(w));
        }
    }
    return { ...e, line: a, segs: r, length: t };
  });
function Le(e, a) {
  let t = 1e9,
    r = "lawn",
    o = null;
  const n = fe.get(na(Math.floor(e / X0), Math.floor(a / X0)));
  if (n)
    for (const i of n) {
      const f = se(e, a, i.ax, i.az, i.bx, i.bz) - i.hw;
      f < t && ((t = f), f < 0 && ((r = i.kind), (o = i.id)));
    }
  for (const i of _e) {
    const f = Math.hypot(e - i.x, a - i.z) - i.r;
    f < t && ((t = f), f < 0 && ((r = i.kind), (o = i.id)));
  }
  {
    const i = Ae,
      f = Math.max(i.x0 - e, 0, e - i.x1),
      w = Math.max(i.z0 - a, 0, a - i.z1),
      s =
        f > 0 || w > 0
          ? Math.hypot(f, w)
          : -Math.min(e - i.x0, i.x1 - e, a - i.z0, i.z1 - a);
    s < t && ((t = s), s < 0 && ((r = "setts"), (o = "forecourt")));
  }
  return (t >= 0 && ((r = "lawn"), (o = null)), { kind: r, d: t, id: o });
}
function re(e, a) {
  const t = be.find((n) => n.id === e);
  a = Math.max(0, Math.min(t.length - 0.001, a));
  for (const n of t.segs)
    if (a <= n.u1) {
      const i = (a - n.u0) / Math.max(1e-6, n.u1 - n.u0),
        f = Math.hypot(n.bx - n.ax, n.bz - n.az) || 1;
      return {
        x: n.ax + (n.bx - n.ax) * i,
        z: n.az + (n.bz - n.az) * i,
        tx: (n.bx - n.ax) / f,
        tz: (n.bz - n.az) / f,
        u: a,
        hw: n.hw,
      };
    }
  const r = t.segs[t.segs.length - 1],
    o = Math.hypot(r.bx - r.ax, r.bz - r.az) || 1;
  return {
    x: r.bx,
    z: r.bz,
    tx: (r.bx - r.ax) / o,
    tz: (r.bz - r.az) / o,
    u: t.length,
    hw: r.hw,
  };
}
const V0 = (e, a, t = 0) =>
    e > Jt.x0 + t && e < Jt.x1 - t && a > Jt.z0 + t && a < Jt.z1 - t,
  ve = (e, a) => e > m0.x0 && e < m0.x1 && a > m0.z0 && a < m0.z1,
  Fa = (e, a) => Math.abs(e - h0.x) < h0.half && Math.abs(a - h0.z) < h0.half,
  $0 = 8,
  x0 = {
    uPT: { value: 0 },
    uPLamps: { value: Array.from({ length: $0 }, () => new ue()) },
    uPLampC: {
      value: Array.from({ length: $0 }, () => new ue(1, 0.6, 0.25, 1.5)),
    },
    uPMist: { value: new ue(0.033, 1, 0, 1) },
    uPMistCol: { value: new Vt(0.018, 0.025, 0.037) },
    uPScatter: { value: 0.11 },
  },
  Ra = `
uniform float uPT;
uniform vec4 uPLamps[${$0}];
uniform vec4 uPLampC[${$0}];
uniform vec4 uPMist;
uniform vec3 uPMistCol;
uniform float uPScatter;
varying vec3 vPW;
float phash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float pnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(phash(i), phash(i + vec2(1.0, 0.0)), f.x), mix(phash(i + vec2(0.0, 1.0)), phash(i + vec2(1.0, 1.0)), f.x), f.y); }
`,
  La = `
vec3 parkAir(vec3 col, vec3 wp, float fogDepth) {
  vec3 ro = cameraPosition, rd = wp - ro;
  float L = max(length(rd), 1e-3); rd /= L;
  float fogK = 1.0 - exp(-fogDensity * fogDensity * fogDepth * fogDepth);
  // the ground mist: d0 * exp(-(y - y0) / hs), integrated from the eye to the fragment
  float hs = uPMist.y, y0 = uPMist.z;
  float ka = exp(-max(ro.y - y0, 0.0) / hs), kb = exp(-max(wp.y - y0, 0.0) / hs);
  float od = abs(rd.y) > 1e-3 ? uPMist.x * hs * abs(ka - kb) / abs(rd.y) : uPMist.x * ka * L;
  // (patchy: banks drifting through, sampled where the ray ends and half way)
  vec2 q = wp.xz * 0.045 + vec2(uPT * 0.011, uPT * 0.007), q2 = mix(ro.xz, wp.xz, 0.5) * 0.07 - vec2(uPT * 0.009, -uPT * 0.006);
  float patchK = 0.25 + 1.6 * smoothstep(0.2, 0.85, pnoise(q) * 0.6 + pnoise(q2) * 0.4);
  float mistK = (1.0 - exp(-max(od, 0.0) * patchK)) * uPMist.w;
  // the lights in the mist
  vec3 sc = vec3(0.0);
  for (int i = 0; i < ${$0}; i++) {
    vec4 lp = uPLamps[i];
    if (lp.w <= 0.0) continue;
    vec3 oc = ro - lp.xyz;
    float b = dot(rd, oc), h2 = max(dot(oc, oc) - b * b, 0.02), hh = sqrt(h2);
    float I = (atan((L + b) / hh) - atan(b / hh)) / hh;
    sc += uPLampC[i].rgb * lp.w * I * exp(-hh / uPLampC[i].a) * smoothstep(0.5, 2.5, length(oc));
  }
  col = mix(col, fogColor, fogK);
  col = mix(col, uPMistCol, mistK);
  return col + sc * uPScatter * (0.35 + 0.65 * uPMist.w) * (1.0 - fogK * 0.6);
}
`;
function Gt(e, a, t = null) {
  const r = e.clone();
  return (
    (r.userData = { ...e.userData }),
    (r.onBeforeCompile = (o) => {
      (Object.assign(o.uniforms, x0),
        (o.vertexShader = o.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vPW;`,
          )
          .replace(
            "#include <fog_vertex>",
            `#include <fog_vertex>
      {
        vec4 pwp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          pwp = instanceMatrix * pwp;
        #endif
        vPW = (modelMatrix * pwp).xyz;
      }`,
          )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            "#include <fog_pars_fragment>",
            `#include <fog_pars_fragment>
` +
              Ra +
              `
#ifdef USE_FOG
` +
              La +
              `
#endif
`,
          )
          .replace(
            "#include <fog_fragment>",
            `#ifdef USE_FOG
  gl_FragColor.rgb = parkAir(gl_FragColor.rgb, vPW, vFogDepth);
#endif`,
          )),
        t && t(o));
    }),
    (r.customProgramCacheKey = () => "park3_" + (t ? a : "air")),
    r
  );
}
function qt(e, a, t = {}) {
  return Gt(
    new u0({
      color: a,
      roughness: t.rough ?? 0.8,
      metalness: t.metal ?? 0,
      side: t.side ?? $e,
      ...(t.props || {}),
    }),
    e,
    t.extra || null,
  );
}
function Ht(e, a, t, r = t, o = 8, n = !1) {
  const i = new a0().subVectors(a, e),
    f = i.length(),
    w = new It(r, t, f, o, 1, n).translate(0, f / 2, 0);
  return (
    w
      .applyQuaternion(
        new C0().setFromUnitVectors(new a0(0, 1, 0), i.normalize()),
      )
      .translate(e.x, e.y, e.z),
    w
  );
}
function Yt(e, a, t, r = 0, o = 0, n = 0, i = 1) {
  return new gt().compose(
    new a0(e, a, t),
    new C0().setFromEuler(new q0(o, r, n, "YXZ")),
    new a0(i, i, i),
  );
}
class Ea {
  constructor() {
    this.map = new Map();
  }
  add(a, t, r = "all") {
    if (!t) return t;
    const o = a.uuid + "|" + r;
    let n = this.map.get(o);
    return (
      n || this.map.set(o, (n = { mat: a, area: r, geos: [] })),
      t.attributes.uv ||
        t.setAttribute(
          "uv",
          new $t(new Float32Array(t.attributes.position.count * 2), 2),
        ),
      t.attributes.normal || t.computeVertexNormals(),
      n.geos.push(t),
      t
    );
  }
  addGroup(a, t = "all", r = null) {
    (a.updateMatrixWorld(!0),
      a.traverse((o) => {
        if (!o.isMesh || o.isInstancedMesh || !o.visible) return;
        const n = o.geometry.clone().applyMatrix4(o.matrixWorld),
          i = Array.isArray(o.material) ? o.material : [o.material];
        if (i.length > 1 && n.groups.length)
          for (const f of n.groups) {
            const w = [];
            for (let u = f.start; u < f.start + f.count; u++)
              w.push(n.index ? n.index.array[u] : u);
            const s = n.clone();
            (s.setIndex(w), s.clearGroups());
            const l = i[f.materialIndex];
            this.add(r ? r(l) : l, s, t);
          }
        else this.add(r ? r(i[0]) : i[0], n, t);
      }));
  }
  build(a, t = "park", { small: r = 24e3 } = {}) {
    const o = [],
      n = new Map();
    for (const f of this.map.values())
      n.set(
        f.mat,
        (n.get(f.mat) || 0) +
          f.geos.reduce((w, s) => w + s.attributes.position.count, 0),
      );
    const i = new Map();
    for (const f of this.map.values())
      if (n.get(f.mat) < r && f.area !== "all") {
        const w = f.mat.uuid + "|all";
        let s = i.get(w);
        (s || i.set(w, (s = { mat: f.mat, area: "all", geos: [] })),
          s.geos.push(...f.geos));
      } else
        i.set(
          f.mat.uuid + "|" + f.area,
          i.get(f.mat.uuid + "|" + f.area)
            ? {
                ...f,
                geos: [...i.get(f.mat.uuid + "|" + f.area).geos, ...f.geos],
              }
            : f,
        );
    for (const f of i.values()) {
      const w = Object.keys(f.geos[0].attributes),
        s = f.geos.map((c) => {
          const M = (c.index, c);
          for (const h of Object.keys(M.attributes))
            w.includes(h) || M.deleteAttribute(h);
          return M;
        });
      for (const c of w)
        for (const M of s)
          if (!M.attributes[c]) {
            const h = f.geos[0].attributes[c].itemSize;
            M.setAttribute(
              c,
              new $t(
                new Float32Array(M.attributes.position.count * h).fill(
                  c === "color" ? 1 : 0,
                ),
                h,
              ),
            );
          }
      const l = v0(s);
      if (!l) continue;
      (l.computeBoundingSphere(), l.computeBoundingBox());
      const u = new jt(l, f.mat);
      ((u.name =
        t +
        "_" +
        (f.mat.name || f.mat.userData.catalog || "mat") +
        "_" +
        f.area),
        (u.castShadow = !f.mat.userData.noCast),
        (u.receiveShadow = !0),
        f.mat.userData.renderOrder &&
          (u.renderOrder = f.mat.userData.renderOrder),
        f.mat.userData.depth && (u.customDepthMaterial = f.mat.userData.depth),
        a.add(u),
        o.push(u));
    }
    return (this.map.clear(), o);
  }
}
function ye(e, a, t, { srgb: r = !0, aniso: o = 8, mips: n = !0 } = {}) {
  const i = document.createElement("canvas");
  ((i.width = e), (i.height = a), t(i.getContext("2d"), e, a));
  const f = new da(i);
  return (
    (f.colorSpace = r ? ua : fa),
    (f.anisotropy = o),
    n || ((f.generateMipmaps = !1), (f.minFilter = Se)),
    f
  );
}
const d0 = Math.PI * 2,
  i0 = (e, a) =>
    "a" + Math.floor((e - 350) / 45) + "_" + Math.floor((a - 30) / 45),
  ee = (e, a) =>
    "c" + Math.floor((e - 350) / 45) + "_" + Math.floor((a - 30) / 45),
  t0 = {
    bareA: 0,
    bareB: 1,
    planeLeaf: 2,
    oakLeaf: 3,
    bareC: 4,
    ivy: 5,
    youngTwig: 6,
    hedge: 7,
  };
function Wa(e) {
  const a = e % 4,
    t = Math.floor(e / 4);
  return [a / 4, 1 - (t + 1) / 2, (a + 1) / 4, 1 - t / 2];
}
function Ya() {
  return ye(2048, 1024, (e) => {
    e.clearRect(0, 0, 2048, 1024);
    let a = 7741;
    const t = () => (a = (a * 16807) % 2147483647) / 2147483647,
      r = 512,
      o = (w, s) => {
        (e.save(),
          e.translate((w % 4) * r, Math.floor(w / 4) * r),
          e.beginPath(),
          e.rect(2, 2, r - 4, r - 4),
          e.clip(),
          s(),
          e.restore());
      };
    e.lineCap = "round";
    const n = (w, s, l, u, c, M, h, v = 0.9, S = 0) => {
        const y = [[w, s]];
        let m = w,
          F = s,
          C = l;
        for (let z = 0; z < 4; z++)
          ((C += (t() - 0.5) * 0.35 - S * 0.06),
            (m += (Math.cos(C) * u) / 4),
            (F += (Math.sin(C) * u) / 4),
            y.push([m, F]));
        e.strokeStyle = h;
        for (let z = 0; z < 4; z++)
          ((e.lineWidth = Math.max(0.8, c * (1 - (z / 4) * 0.6))),
            e.beginPath(),
            e.moveTo(y[z][0], y[z][1]),
            e.lineTo(y[z + 1][0], y[z + 1][1]),
            e.stroke());
        const L = [[m, F, C]];
        if (M > 0) {
          const z = 2 + (t() < 0.4 ? 1 : 0);
          for (let W = 0; W < z; W++) {
            const D = 0.35 + t() * 0.6,
              V = Math.min(3, Math.floor(D * 4)),
              A = W % 2 ? 1 : -1;
            L.push(
              ...n(
                y[V][0],
                y[V][1],
                C + A * v * (0.45 + t() * 0.5),
                u * (0.5 + t() * 0.25),
                c * 0.62,
                M - 1,
                h,
                v,
                S,
              ),
            );
          }
        }
        return L;
      },
      i = ["rgb(52,46,40)", "rgb(60,54,46)", "rgb(46,42,38)"];
    (o(t0.bareA, () => {
      for (let w = 0; w < 3; w++)
        n(
          8,
          r / 2 + (t() - 0.5) * 60,
          (t() - 0.5) * 0.4,
          r * 0.42,
          7,
          4,
          i[w % 3],
          0.85,
          1,
        );
    }),
      o(t0.bareB, () => {
        for (let w = 0; w < 4; w++)
          n(
            8,
            r / 2 + (t() - 0.5) * 90,
            (t() - 0.5) * 0.7,
            r * 0.36,
            6,
            4,
            i[(w + 1) % 3],
            1.05,
            0,
          );
      }),
      o(t0.bareC, () => {
        for (let w = 0; w < 3; w++) {
          const s = n(
            8,
            r / 2 + (t() - 0.5) * 70,
            (t() - 0.5) * 0.5,
            r * 0.3,
            7,
            3,
            i[w % 3],
            1.3,
            0,
          );
          for (const [l, u, c] of s)
            n(l, u, c + (t() - 0.5) * 1.6, 30 + t() * 30, 2, 1, i[1], 1.2);
        }
      }),
      o(t0.youngTwig, () => {
        for (let w = 0; w < 5; w++)
          n(
            8,
            r / 2 + (t() - 0.5) * 120,
            (t() - 0.5) * 0.9,
            r * 0.5,
            4,
            3,
            "rgb(64,56,46)",
            0.6,
            2,
          );
      }));
    const f = (w, s, l, u, c) => {
      (e.save(),
        e.translate(w, s),
        e.rotate(u),
        (e.fillStyle = c),
        e.beginPath());
      const M = [
        [-90, 1],
        [-35, 0.85],
        [-145, 0.85],
        [15, 0.55],
        [165, 0.55],
      ];
      for (let h = 0; h <= 40; h++) {
        const v = -Math.PI / 2 + (h / 40) * d0;
        let S = 0.4;
        for (const [m, F] of M) {
          const C = Math.atan2(
            Math.sin(v - (m * Math.PI) / 180),
            Math.cos(v - (m * Math.PI) / 180),
          );
          S = Math.max(S, F * Math.max(0, 1 - Math.abs(C) / 0.45));
        }
        const d = Math.cos(v) * S * l,
          y = Math.sin(v) * S * l;
        h ? e.lineTo(d, y) : e.moveTo(d, y);
      }
      (e.closePath(),
        e.fill(),
        (e.strokeStyle = "rgba(60,40,20,0.5)"),
        (e.lineWidth = 1.5));
      for (const [h, v] of M)
        (e.beginPath(),
          e.moveTo(0, l * 0.1),
          e.lineTo(
            Math.cos((h * Math.PI) / 180) * v * l * 0.8,
            Math.sin((h * Math.PI) / 180) * v * l * 0.8,
          ),
          e.stroke());
      e.restore();
    };
    (o(t0.planeLeaf, () => {
      const w = [];
      for (let l = 0; l < 3; l++)
        w.push(
          ...n(
            8,
            r / 2 + (t() - 0.5) * 60,
            (t() - 0.5) * 0.4,
            r * 0.4,
            6,
            3,
            i[l % 3],
            0.9,
            1,
          ),
        );
      const s = [
        "#a8823e",
        "#94702e",
        "#b8964c",
        "#7c6028",
        "#8a8a3a",
        "#6e5226",
      ];
      for (let l = 0; l < 9; l++) {
        const u = w[Math.floor(t() * w.length)];
        f(
          u[0] + (t() - 0.5) * 30,
          u[1] + 30 + t() * 30,
          34 + t() * 22,
          t() * d0,
          s[Math.floor(t() * s.length)],
        );
      }
      for (let l = 0; l < 6; l++) {
        const u = w[Math.floor(t() * w.length)],
          c = 40 + t() * 50;
        ((e.strokeStyle = "rgb(60,50,40)"),
          (e.lineWidth = 1.5),
          e.beginPath(),
          e.moveTo(u[0], u[1]),
          e.lineTo(u[0] + (t() - 0.5) * 20, u[1] + c),
          e.stroke(),
          (e.fillStyle = "rgb(84,64,38)"),
          e.beginPath(),
          e.arc(u[0] + (t() - 0.5) * 20, u[1] + c + 9, 10, 0, d0),
          e.fill());
      }
    }),
      o(t0.oakLeaf, () => {
        const w = [];
        for (let l = 0; l < 3; l++)
          w.push(
            ...n(
              8,
              r / 2 + (t() - 0.5) * 70,
              (t() - 0.5) * 0.5,
              r * 0.32,
              6,
              3,
              i[l % 3],
              1.2,
              0,
            ),
          );
        const s = ["#6a4422", "#7a5028", "#5a3a1e", "#84582c", "#4e3218"];
        for (let l = 0; l < 30; l++) {
          const u = w[Math.floor(t() * w.length)],
            c = 22 + t() * 16,
            M = u[0] + (t() - 0.5) * 50,
            h = u[1] + (t() - 0.5) * 50;
          (e.save(),
            e.translate(M, h),
            e.rotate(t() * d0),
            (e.fillStyle = s[Math.floor(t() * s.length)]),
            e.beginPath());
          for (let v = 0; v <= 32; v++) {
            const S = (v / 32) * d0,
              d = 1 + 0.25 * Math.pow(Math.abs(Math.sin(S * 4.5)), 2),
              y = Math.cos(S) * c * 0.36 * d,
              m = Math.sin(S) * c * 0.6;
            v ? e.lineTo(y, m) : e.moveTo(y, m);
          }
          (e.closePath(),
            e.fill(),
            (e.strokeStyle = "rgba(30,18,8,0.5)"),
            (e.lineWidth = 1.2),
            e.beginPath(),
            e.moveTo(0, -c * 0.6),
            e.lineTo(0, c * 0.6),
            e.stroke(),
            e.restore());
        }
      }),
      o(t0.ivy, () => {
        ((e.strokeStyle = "rgb(50,40,28)"),
          (e.lineWidth = 3),
          e.beginPath(),
          e.moveTo(10, r / 2),
          e.bezierCurveTo(r * 0.3, r * 0.3, r * 0.6, r * 0.7, r - 10, r / 2),
          e.stroke());
        for (let w = 0; w < 22; w++) {
          const s = w / 22,
            l = 10 + s * (r - 20) + (t() - 0.5) * 40,
            u = r / 2 + Math.sin(s * d0) * r * 0.12 + (t() - 0.5) * 70,
            c = 30 + t() * 22,
            M = [
              [22, 40, 20],
              [30, 50, 26],
              [18, 34, 18],
            ][Math.floor(t() * 3)];
          (e.save(),
            e.translate(l, u),
            e.rotate(t() * d0),
            (e.fillStyle = `rgb(${M[0]},${M[1]},${M[2]})`),
            e.beginPath());
          for (let h = 0; h <= 10; h++) {
            const v = (h / 10) * d0,
              S = c * (h % 2 ? 0.45 : 1);
            e.lineTo(Math.cos(v) * S * 0.6, Math.sin(v) * S * 0.6);
          }
          (e.closePath(), e.fill(), e.restore());
        }
      }),
      o(t0.hedge, () => {
        for (let w = 0; w < 340; w++) {
          const s = t() * d0,
            l = Math.pow(t(), 0.6) * r * 0.44,
            u = r / 2 + Math.cos(s) * l,
            c = r / 2 + Math.sin(s) * l * 0.8,
            M = 16 + t() * 16,
            h = [
              [20, 36, 18],
              [26, 44, 22],
              [32, 52, 26],
              [18, 30, 16],
              [40, 60, 30],
            ][Math.floor(t() * 5)],
            v = 0.8 + t() * 0.45 - (l / r) * 0.5;
          (e.save(),
            e.translate(u, c),
            e.rotate(t() * d0),
            (e.fillStyle = `rgb(${(h[0] * v) | 0},${(h[1] * v) | 0},${(h[2] * v) | 0})`),
            e.beginPath(),
            e.ellipse(0, 0, M, M * 0.42, 0, 0, d0),
            e.fill(),
            e.restore());
        }
      }));
  });
}
function Na(e) {
  const a = [],
    t = (n, i, f, w = {}) => {
      const s = w.big ?? 0.5 + e() * 0.5,
        l =
          n === "plane"
            ? { r: 0.42 + s * 0.36, H: 21 + s * 10 }
            : n === "oak"
              ? { r: 0.45 + s * 0.35, H: 15 + s * 7 }
              : { r: 0.13 + s * 0.1, H: 8 + s * 5 };
      a.push({
        kind: n,
        x: i,
        z: f,
        r: w.r ?? l.r,
        H: w.H ?? l.H,
        seed: e(),
        fixed: !!w.fixed,
        ...w.extra,
      });
    };
  for (const [n, i] of [
    [11.5, -1],
    [12.2, 1],
    [22.4, -1],
    [23, 1],
    [32.6, -1],
    [33.2, 1],
  ]) {
    const f = re("avenue", n);
    t("plane", f.x - f.tz * i * 7.2 * -1, f.z + f.tx * i * 7.2 * -1, {
      big: 0.75 + e() * 0.25,
      fixed: !0,
    });
  }
  for (const n of [36, 118, 150, -32, 205]) {
    const i = (n * Math.PI) / 180,
      f = 18.6 + e() * 1.5;
    t("plane", c0.x + Math.cos(i) * f, c0.z + Math.sin(i) * f, {
      big: 0.8 + e() * 0.2,
      fixed: !0,
    });
  }
  (t("plane", Nt.tree[0], Nt.tree[1], { big: 0.9, fixed: !0 }),
    t("oak", 389, 133, { big: 0.95, fixed: !0 }),
    t("oak", 411.8, 150 - 7.5, { big: 0.7, fixed: !0 }),
    t("oak", 391, 177, { big: 1, fixed: !0 }),
    t("plane", 414, 112, { big: 0.85, fixed: !0 }),
    t("plane", 497, 120.5, { big: 0.9, fixed: !0 }),
    t("plane", 413.5, 72, { big: 0.9, fixed: !0 }));
  const r = (n, i) => se(n, i, 430, 194, 449, 96),
    o = (n, i, f, w) => {
      if (
        !V0(n, i, 5) ||
        (n > m0.x0 - 3 && n < m0.x1 + 3 && i > m0.z0 - 3 && i < m0.z1 + 3) ||
        Le(n, i).d < 2.4 + f ||
        G0(n, i) < (i > 150 ? 13 : 6) ||
        Math.hypot(n - 430, i - 196) < 20
      )
        return !1;
      {
        const M = (Math.atan2(n - 430, 195.6 - i) * 180) / Math.PI;
        if (i > 100 && i < 185 && Math.abs(M - 11.2) < 6.5) return !1;
      }
      {
        let M = 1e9;
        for (const h of be.find((v) => v.id === "avenueN").segs)
          M = Math.min(M, se(n, i, h.ax, h.az, h.bx, h.bz));
        if (M < 11) return !1;
      }
      if (
        (i > 108 && i < 190 && r(n, i) < 4.5) ||
        Math.hypot(n - c0.x, i - c0.z) < 16 ||
        Math.hypot(n - I0.x, i - I0.z) < 10 ||
        Math.hypot(n - L0.x, i - L0.z) < 7
      )
        return !1;
      const l = ta;
      if (n > l.x0 - 2 && n < l.x1 + 2 && i > l.z0 - 2 && i < l.z1 + 2)
        return !1;
      const u = F0;
      if (n > u.x0 - 2 && n < u.x1 + 2 && i > u.z0 - 2 && i < u.z1 + 2)
        return !1;
      const c = Z0;
      if (
        (n > c.x0 - 2 && n < c.x1 + 2 && i > c.z0 - 2 && i < c.z1 + 2) ||
        (n > R0.x0 - 6 && n < R0.x1 + 6 && i > 184) ||
        Math.hypot(n - 470, i - 152) < 15 ||
        Math.hypot(n - Nt.x, i - Nt.z) < 7
      )
        return !1;
      for (const M of a)
        if (Math.hypot(M.x - n, M.z - i) < w + (M.kind === "young" ? 2 : 4))
          return !1;
      return !0;
    };
  for (let n = 0; n < 6e4 && a.length < 150; n++) {
    const i = Jt.x0 + e() * (Jt.x1 - Jt.x0),
      f = Jt.z0 + e() * (Jt.z1 - Jt.z0),
      w = f < 135 ? 1 : 0,
      s = w ? 4.8 + e() * 2.5 : 8 + e() * 6;
    if (!w && e() < 0.45) continue;
    const l = e() < (w ? 0.42 : 0.55) ? "plane" : e() < 0.82 ? "oak" : "young";
    o(i, f, 0.8, s) && t(l, i, f);
  }
  for (const n of a)
    n.crown =
      n.kind === "young"
        ? n.H * 0.28
        : n.kind === "oak"
          ? n.H * 0.55
          : n.H * 0.36;
  return a;
}
const Ga = {
  plane: {
    trunk: [0.3, 0.42],
    limbs: [4, 6],
    elev: [0.6, 1.05],
    limbLen: [0.42, 0.55],
    kids: [5, 4, 3],
    ang: [0.55, 0.62, 0.7],
    ratio: [0.62, 0.6, 0.55],
    wob: [0.2, 0.28, 0.32, 0.36],
    rise: [0.06, 0.07, 0.06, 0.05],
    leaf: 0.22,
    leafCell: t0.planeLeaf,
    bare: [t0.bareA, t0.bareB],
    cardSize: [1.5, 2.3],
    spread: 1,
  },
  oak: {
    trunk: [0.18, 0.26],
    limbs: [5, 7],
    elev: [0.22, 0.62],
    limbLen: [0.62, 0.78],
    kids: [5, 4, 3],
    ang: [0.62, 0.72, 0.8],
    ratio: [0.6, 0.6, 0.55],
    wob: [0.3, 0.44, 0.48, 0.5],
    rise: [0.02, 0, -0.01, 0],
    leaf: 0.5,
    leafCell: t0.oakLeaf,
    bare: [t0.bareC, t0.bareB],
    cardSize: [1.3, 2],
    spread: 1.25,
  },
  young: {
    trunk: [0.32, 0.4],
    limbs: [3, 5],
    elev: [0.75, 1.1],
    limbLen: [0.45, 0.55],
    kids: [4, 3],
    ang: [0.5, 0.6],
    ratio: [0.6, 0.55],
    wob: [0.18, 0.25, 0.3],
    rise: [0.08, 0.08, 0.06],
    leaf: 0.12,
    leafCell: t0.planeLeaf,
    bare: [t0.youngTwig],
    cardSize: [0.9, 1.4],
    spread: 0.8,
  },
};
function sa(e, a, t = {}) {
  const r = Ga[e.kind],
    o = [],
    n = [],
    i = r.kids.length,
    f = I(0, 1, 0),
    w = I(0, 0, 0),
    s = () => I(a() - 0.5, a() - 0.5, a() - 0.5),
    l = a(),
    u = I(e.x, e.H * 0.62, e.z),
    c = t.floorY ?? 0,
    M = (y, m, F, C, L) => {
      const z = k0(y, (A) => m + (F - m) * Math.pow(A, 0.85), C),
        W = z.attributes.position.count,
        D = new Float32Array(W * 3),
        V = z.attributes.position;
      for (let A = 0; A < W; A++)
        ((D[A * 3] = L * Math.exp(-Math.max(0, V.getY(A) - c) / 1.6)),
          (D[A * 3 + 1] = l),
          (D[A * 3 + 2] = L));
      return (z.setAttribute("aK", new $t(D, 3)), o.push(z), z);
    },
    h = (y, m, F, C, L) =>
      n.push({
        pos: y,
        along: m.clone().add(s().multiplyScalar(0.9)).normalize(),
        size: C,
        cell: F,
        out: null,
        shade: L,
      }),
    v = (y, m, F, C, L) => {
      const z = [8, 6, 4, 3, 3][L],
        W = [y.clone()],
        D = m.clone(),
        V = y.clone();
      for (let q = 0; q < z; q++)
        (D.addScaledVector(s(), r.wob[L])
          .addScaledVector(f, r.rise[L])
          .normalize(),
          V.addScaledVector(D, F / z),
          L >= 1 &&
            !t.free &&
            V.y < c + 3.2 &&
            ((V.y = c + 3.2 + (V.y - c - 3.2) * 0.2),
            D.y < 0.15 && (D.y = 0.15 + Math.abs(D.y) * 0.3),
            D.normalize()),
          W.push(V.clone()));
      const A = Math.max(0.01, C * (L === 0 ? 0.42 : 0.5));
      if (
        (L === 0 && W.unshift(y.clone().add(I(0, -0.6, 0))),
        M(W, C, A, [12, 7, 5, 3, 3][L], L === 0 ? 1 : 0.25),
        W[W.length - 1],
        L >= i)
      ) {
        const q = L === 0 ? 0 : 3 + Math.floor(a() * 2);
        for (let st = 0; st < q; st++) {
          const j = W[Math.max(1, W.length - 1 - Math.floor(a() * 3))]
              .clone()
              .add(s().multiplyScalar(0.6)),
            x =
              a() < r.leaf
                ? r.leafCell
                : r.bare[Math.floor(a() * r.bare.length)];
          h(
            j,
            D,
            x,
            (r.cardSize[0] + a() * (r.cardSize[1] - r.cardSize[0])) *
              (t.cardScale ?? 1),
            0.75 + a() * 0.3,
          );
        }
        return;
      }
      const K =
        L === 0
          ? r.limbs[0] + Math.floor(a() * (r.limbs[1] - r.limbs[0] + 1))
          : r.kids[L - 1];
      let J = a() * d0;
      for (let q = 0; q < K; q++) {
        J += 2.39996 + (a() - 0.5) * 0.5;
        let st, j;
        if (L === 0) {
          j = 0.72 + 0.28 * ((q + a() * 0.6) / K);
          const g = r.elev[0] + a() * (r.elev[1] - r.elev[0]);
          st = I(
            Math.cos(J) * Math.cos(g),
            Math.sin(g),
            Math.sin(J) * Math.cos(g),
          );
        } else {
          ((j = 0.35 + 0.65 * ((q + 0.3 + a() * 0.5) / K)),
            w.crossVectors(D, s()).normalize(),
            (st = D.clone().applyAxisAngle(
              w,
              r.ang[L - 1] * (0.7 + a() * 0.6),
            )));
          const g = I(st.x, 0, st.z);
          g.lengthSq() > 1e-4 &&
            st.addScaledVector(g.normalize(), 0.25 * r.spread).normalize();
        }
        const Y =
            W[
              Math.min(
                W.length - 1,
                Math.max(1, Math.round(j * (W.length - 1))),
              )
            ],
          x =
            L === 0
              ? e.H *
                (r.limbLen[0] + a() * (r.limbLen[1] - r.limbLen[0])) *
                (1.05 - 0.2 * j)
              : F * r.ratio[L - 1] * (0.8 + a() * 0.4) * (1.15 - 0.4 * j),
          p =
            L === 0
              ? C * (0.42 + a() * 0.16)
              : Math.max(0.012, (C + (A - C) * j) * (0.62 + a() * 0.14));
        (v(Y, st, x, p, L + 1),
          L >= 2 &&
            a() < 0.35 &&
            h(
              W[Math.max(1, Math.round(j * (W.length - 1)))].clone(),
              D,
              r.bare[0],
              r.cardSize[0] * 0.8 * (t.cardScale ?? 1),
              0.6,
            ));
      }
    },
    S = I((a() - 0.5) * 0.12, 1, (a() - 0.5) * 0.12).normalize(),
    d = e.H * (r.trunk[0] + a() * (r.trunk[1] - r.trunk[0]));
  if ((v(I(e.x, c, e.z), S, d, e.r, 0), e.kind !== "young")) {
    const y = o[0],
      m = y.attributes.position,
      F = 4 + Math.floor(a() * 3),
      C = a() * d0;
    for (let L = 0; L < m.count; L++) {
      const z = m.getY(L) - c;
      if (z > 2.2) continue;
      const W = m.getX(L) - e.x,
        D = m.getZ(L) - e.z,
        V = Math.atan2(D, W),
        K =
          1 +
          Math.exp(-Math.max(0, z) / 0.55) *
            (0.35 + 0.55 * Math.pow(Math.max(0, Math.cos(F * (V - C))), 3));
      (m.setX(L, e.x + W * K), m.setZ(L, e.z + D * K));
    }
    y.computeVertexNormals();
  }
  if (e.kind !== "young" && a() < (t.ivy ?? 0.25)) {
    const y = 2 + a() * d * 0.8,
      m = a() * d0;
    for (let F = 0.3; F < y; F += 0.3 + a() * 0.25) {
      const C = m + F * 0.3 + (a() - 0.5) * 1.4,
        L = e.r * (1 + 0.5 * Math.exp(-F / 0.55)) + 0.04,
        z = I(Math.cos(C), 0.1, Math.sin(C)).normalize();
      n.push({
        pos: I(e.x + Math.cos(C) * L, c + F, e.z + Math.sin(C) * L),
        along: I(-Math.sin(C) * 0.3, 1, Math.cos(C) * 0.3).normalize(),
        size: 0.55 + a() * 0.3,
        cell: t0.ivy,
        out: z,
        shade: 0.7,
        ivy: z,
      });
    }
  }
  for (const y of n) y.out || (y.out = y.pos.clone().sub(u).normalize());
  return { bark: o, cards: n };
}
function Ee(e, a, t) {
  const r = e.length,
    o = new Float32Array(r * 12),
    n = new Float32Array(r * 12),
    i = new Float32Array(r * 8),
    f = new Float32Array(r * 12),
    w = new Uint32Array(r * 6),
    s = I(0, 0, 0),
    l = I(0, 0, 0),
    u = I(0, 0, 0),
    c = new Vt();
  for (let h = 0; h < r; h++) {
    const v = e[h],
      S = v.size;
    (v.ivy
      ? s.crossVectors(v.ivy, v.along).normalize()
      : (s.set(-v.along.z, 0, v.along.x),
        s.lengthSq() < 1e-4 && s.set(1, 0, 0),
        s.normalize(),
        s.applyAxisAngle(v.along, (a() - 0.5) * 1.4)),
      l.crossVectors(v.along, s).normalize(),
      l.y < 0 && !v.ivy && (l.negate(), s.negate()),
      u.copy(l).lerp(v.out, 0.6).normalize());
    const [d, y, m, F] = Wa(v.cell),
      C = [
        [0, -0.5, d, y],
        [1, -0.5, m, y],
        [1, 0.5, m, F],
        [0, 0.5, d, F],
      ],
      L = v.pos.clone().addScaledVector(v.along, -S * 0.25);
    for (let z = 0; z < 4; z++) {
      const [W, D, V, A] = C[z],
        K = h * 4 + z;
      ((o[K * 3] = L.x + v.along.x * W * S + s.x * D * S),
        (o[K * 3 + 1] = L.y + v.along.y * W * S + s.y * D * S),
        (o[K * 3 + 2] = L.z + v.along.z * W * S + s.z * D * S),
        (n[K * 3] = u.x),
        (n[K * 3 + 1] = u.y),
        (n[K * 3 + 2] = u.z),
        (i[K * 2] = V),
        (i[K * 2 + 1] = A));
    }
    t(v, c);
    for (let z = 0; z < 4; z++) {
      const W = h * 4 + z;
      ((f[W * 3] = c.r), (f[W * 3 + 1] = c.g), (f[W * 3 + 2] = c.b));
    }
    w.set([h * 4, h * 4 + 1, h * 4 + 2, h * 4, h * 4 + 2, h * 4 + 3], h * 6);
  }
  const M = new Q0();
  return (
    M.setAttribute("position", new $t(o, 3)),
    M.setAttribute("normal", new $t(n, 3)),
    M.setAttribute("uv", new $t(i, 2)),
    M.setAttribute("color", new $t(f, 3)),
    M.setIndex(new $t(w, 1)),
    M
  );
}
const qe = `
      {
        // the high crown sways slowly (a dawn breeze); the trunks stay put
        vec4 swq = vec4(transformed, 1.0);
        vec3 sw = (modelMatrix * swq).xyz;
        float k = clamp((sw.y - 5.0) / 22.0, 0.0, 1.0) * 0.12;
        transformed.x += sin(uPT * 0.7 + sw.x * 0.21 + sw.z * 0.13) * k + sin(uPT * 2.3 + sw.y * 1.7) * k * 0.15;
        transformed.z += sin(uPT * 0.55 + sw.z * 0.19 - sw.x * 0.07) * k * 0.8;
      }`;
function Te(e, a, t, r = null) {
  const o = e.mats.get(a, r ? { color: r } : {});
  return Gt(o, t, (n) => {
    ((n.vertexShader = n.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
attribute vec3 aK;
varying vec3 vK;
varying vec3 vBN;`,
      )
      .replace(
        "#include <uv_vertex>",
        `#include <uv_vertex>
vK = aK; vBN = normalize(mat3(modelMatrix) * normal);`,
      )),
      (n.fragmentShader = n.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec3 vK;
varying vec3 vBN;`,
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
      {
        // the foot of the trunk: rougher, darker, damp, a green bloom of algae on the north side; each tree its own tint
        float foot = vK.x, north = clamp(-vBN.z * 0.7 + 0.3, 0.0, 1.0);
        diffuseColor.rgb *= mix(vec3(1.0), vec3(1.06, 1.0, 0.92), vK.y);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.55, 0.6, 0.45), foot * 0.75);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.07, 0.03), foot * north * 0.45 + clamp(vBN.y, 0.0, 1.0) * 0.25);
      }`,
        )));
  });
}
function Da(e, a) {
  const t = Gt(
    new u0({
      map: e,
      alphaTest: 0.45,
      side: y0,
      roughness: 0.85,
      metalness: 0,
      vertexColors: !0,
    }),
    a,
    (o) => {
      o.vertexShader = o.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
uniform float uPT;`,
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
` + qe,
        );
    },
  );
  t.userData.noCast = !1;
  const r = new Qe({ depthPacking: Je, map: e, alphaTest: 0.45, side: y0 });
  return (
    (r.onBeforeCompile = (o) => {
      ((o.uniforms.uPT = x0.uPT),
        (o.vertexShader = o.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
uniform float uPT;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` + qe,
          )));
    }),
    (r.customProgramCacheKey = () => "park3_carddepth"),
    { m: t, d: r }
  );
}
let Pe = null;
function We() {
  if (!Pe) {
    const e = Ya();
    Pe = { atlas: e, ...Da(e, "cards") };
  }
  return Pe;
}
function Oa(e, a, t) {
  const r = new P0();
  r.name = "park_trees";
  const o = We(),
    n = o.atlas,
    i = Te(e, "park3_bark", "bark_plane"),
    f = Te(e, "forest_bark", "bark_oak", 10131084),
    w = { m: o.m, d: o.d },
    s = new Map(),
    l = [],
    u = (c, M) => {
      const h = c.shade;
      c.cell === t0.ivy
        ? M.setRGB(0.9 * h, 1 * h, 0.85 * h)
        : c.cell === t0.planeLeaf || c.cell === t0.oakLeaf
          ? M.setRGB(0.8 * h, 0.74 * h, 0.64 * h)
          : M.setRGB(0.6 * h, 0.58 * h, 0.56 * h);
    };
  for (const c of a) {
    const M = sa(c, t),
      h = ee(c.x, c.z);
    let v = s.get(h);
    (v || s.set(h, (v = { plane: [], oak: [], cards: [] })),
      (c.kind === "oak" ? v.oak : v.plane).push(...M.bark),
      v.cards.push(...M.cards),
      l.push({ x: c.x, z: c.z, r: c.r * 1.25 + 0.12, tree: !0 }));
  }
  for (const [c, M] of s) {
    for (const [h, v, S] of [
      ["plane", M.plane, i],
      ["oak", M.oak, f],
    ]) {
      if (!v.length) continue;
      const d = new jt(v0(v), S);
      ((d.name = "trees_" + h + "_" + c),
        (d.castShadow = !0),
        (d.receiveShadow = !0),
        r.add(d));
    }
    if (M.cards.length) {
      const h = new jt(Ee(M.cards, t, u), w.m);
      ((h.name = "trees_cards_" + c),
        (h.castShadow = !0),
        (h.receiveShadow = !0),
        (h.customDepthMaterial = w.d),
        r.add(h));
    }
  }
  return {
    group: r,
    circles: l,
    atlas: n,
    mats: { planeBark: i, oakBark: f, cards: w },
  };
}
function Ka(e, a, t, r, o, n, i, f = 0.2) {
  const s = new xt(
    t,
    o,
    r,
    Math.max(2, Math.round(t / 0.24)),
    Math.max(2, Math.round(o / 0.24)),
    Math.max(2, Math.round(r / 0.24)),
  );
  (s.deleteAttribute("uv"), s.deleteAttribute("normal"));
  const l = Be(s, 1e-4),
    u = l.attributes.position,
    c = t / 2 - f,
    M = o / 2 - f,
    h = r / 2 - f,
    v = i() * 100,
    S = Math.cos(n),
    d = Math.sin(n),
    y = (m, F, C) =>
      Math.sin(m * 2.7 + v) *
        Math.sin(C * 3.1 - v) *
        Math.sin(F * 2.3 + m * 0.7) *
        0.5 +
      Math.sin(m * 7.9 + C * 6.3 + F * 5.1 + v) * 0.25 +
      Math.sin(m * 13.7 - C * 11.9 + F * 9.3) * 0.12;
  for (let m = 0; m < u.count; m++) {
    const F = u.getX(m),
      C = u.getY(m),
      L = u.getZ(m),
      z = Math.max(-c, Math.min(c, F)),
      W = Math.max(-M, Math.min(M, C)),
      D = Math.max(-h, Math.min(h, L));
    let V = F - z,
      A = C - W,
      K = L - D;
    const J = Math.hypot(V, A, K) || 1;
    ((V /= J), (A /= J), (K /= J));
    const q = z + V * f,
      st = o / 2 + W + A * f,
      j = D + K * f,
      Y = e + q * S + j * d,
      x = a - q * d + j * S,
      p = V * S + K * d,
      g = -V * d + K * S,
      T = y(Y, st, x) * 0.08 * (C < -o / 2 + 0.05 ? 0.2 : 1);
    u.setXYZ(
      m,
      Y + p * T,
      Math.max(0, st + A * T * (A > 0.5 ? 0.6 : 1)),
      x + g * T,
    );
  }
  return (l.computeVertexNormals(), N(l));
}
function Ua(e, a, t, r, o) {
  const n = new z0(1, 22, 16);
  (n.deleteAttribute("uv"), n.deleteAttribute("normal"));
  const i = Be(n, 1e-4),
    f = i.attributes.position,
    w = o() * 100;
  for (let s = 0; s < f.count; s++) {
    const l = f.getX(s),
      u = f.getY(s),
      c = f.getZ(s),
      M = (u + 1) / 2,
      h =
        r < 3.2
          ? t * Math.pow(Math.max(0, 1 - Math.pow(M, 2.4)), 0.45)
          : t *
            Math.pow(Math.sin(Math.PI * Math.min(1, 0.1 + M * 0.92)), 0.6) *
            (1 - 0.5 * M),
      v =
        1 +
        0.14 * Math.sin(l * 5 + w) * Math.sin(c * 4 - w) * Math.sin(u * 3 + w) +
        0.07 * Math.sin(u * 11 + l * 3 + c * 4);
    f.setXYZ(s, e + l * h * v, Math.max(0, M * r - 0.15), a + c * h * v);
  }
  return (i.computeVertexNormals(), N(i));
}
function Xa(e, a) {
  const t = [],
    r = [],
    o = (d, y, m, F, C, L = 0) =>
      t.push({ cx: d, cz: y, L: m, W: F, h: C, yaw: L }),
    n = (d, y, m, F, C, L) => {
      const z = Math.hypot(m - d, F - y);
      o((d + m) / 2, (y + F) / 2, z, C, L, -Math.atan2(F - y, m - d));
    };
  for (const d of [1, -1])
    for (let y = 2.6; y < 19.5; y += 3.6) {
      const m = re("avenueN", y),
        F = re("avenueN", Math.min(y + 3.3, 21.5)),
        C = (z) => z.x + z.tz * d * 4.3,
        L = (z) => z.z - z.tx * d * 4.3;
      n(C(m), L(m), C(F), L(F), 0.85, 1.05);
    }
  {
    const d = Z0,
      y = 1.1,
      m = 2.25;
    (n(d.x0, d.z0, d.x1, d.z0, y, m),
      n(d.x0, d.z0, d.x0, d.z1, y, m),
      n(d.x1, d.z0, d.x1, d.z0 + 4.4, y, m),
      n(d.x1, d.z0 + 7.6, d.x1, d.z1, y, m),
      n(d.x0, d.z1, d.x0 + 3, d.z1, y, m),
      n(d.x0 + 6.4, d.z1, d.x1, d.z1, y, m));
    const F = (d.x0 + d.x1) / 2,
      C = (d.z0 + d.z1) / 2;
    for (const [L, z] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ])
      o(F + L * 2.9, C + z * 2.4, 3.8, 2.4, 0.55, 0);
  }
  {
    const d = F0,
      y = 1.2,
      m = 2.1,
      F = 3.4,
      C = (d.x0 + d.x1) / 2,
      L = (d.z0 + d.z1) / 2;
    (n(d.x0, d.z0, C - F / 2, d.z0, y, m),
      n(C + F / 2, d.z0, d.x1, d.z0, y, m),
      n(d.x0, d.z1, C - F / 2, d.z1, y, m),
      n(C + F / 2, d.z1, d.x1, d.z1, y, m),
      n(d.x0, d.z0, d.x0, L - F / 2, y, m),
      n(d.x0, L + F / 2, d.x0, d.z1, y, m),
      n(d.x1, d.z0, d.x1, L - F / 2, y, m),
      n(d.x1, L + F / 2, d.x1, d.z1, y, m));
    for (const [z, W] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ])
      (o(C + z * 8.6, L + W * 4.6, 13, 0.55, 0.5, 0),
        o(C + z * 8.6, L + W * 6.6, 13, 0.55, 0.5, 0),
        o(C + z * 13.8, L + W * 5.6, 0.55, 4, 0.5, 0));
  }
  (n(456.6, 129.4, 471, 129.4, 1.15, 2.05),
    n(472.6, 129.4, 486, 129.4, 1.15, 2.05));
  for (const [d, y, m, F] of [
    [405.6, 119.8, 1.9, 5.2],
    [417, 128.6, 1.6, 4.4],
    [391.6, 146.2, 2.3, 6],
    [407.6, 134.6, 1.7, 4.6],
    [415.6, 192.6, 2, 4.8],
    [445, 192.4, 1.8, 4.2],
    [380, 118, 2.6, 7],
    [372, 96, 2.2, 6],
    [398, 84, 2.4, 6.5],
    [505, 128, 2.2, 5.5],
    [520, 96, 2.6, 6.8],
    [493, 72, 2, 5.4],
    [362, 160, 2.2, 5.6],
    [372, 182, 1.8, 4.6],
    [508, 172, 2.4, 5.8],
    [490.5, 156, 1.8, 4.6],
    [440, 58, 2.2, 5.8],
    [470, 44, 2.4, 6.2],
    [421, 162.6, 2.1, 2.6],
    [419.4, 170.6, 1.9, 2.4],
    [411.6, 158.4, 2.3, 2.8],
    [453.2, 164.2, 2.2, 2.7],
    [455.4, 156.2, 1.9, 2.4],
    [455.2, 138.4, 2.1, 2.6],
    [463, 134.4, 2.3, 2.8],
  ])
    r.push({ x: d, z: y, r: m, h: F });
  const i = new P0();
  i.name = "park_hedges";
  const f = Va(e),
    w = new Map(),
    s = [],
    l = [],
    u = (d, y) => {
      (w.has(d) || w.set(d, []), w.get(d).push(y));
    };
  for (const d of t) {
    u(ee(d.cx, d.cz), Ka(d.cx, d.cz, d.L, d.W, d.h, d.yaw, a));
    const y = Math.max(1, Math.ceil(d.L / 1.4)),
      m = Math.cos(d.yaw),
      F = Math.sin(d.yaw);
    for (let C = 0; C < y; C++) {
      const L = -d.L / 2 + (C + 0.5) * (d.L / y),
        z = d.cx + L * m,
        W = d.cz - L * F,
        D = (Math.abs(m) * (d.L / y)) / 2 + (Math.abs(F) * d.W) / 2,
        V = (Math.abs(F) * (d.L / y)) / 2 + (Math.abs(m) * d.W) / 2;
      s.push({
        x0: z - D,
        x1: z + D,
        z0: W - V,
        z1: W + V,
        y0: 0,
        y1: d.h,
        hedge: !0,
      });
    }
  }
  for (const d of r)
    (u(ee(d.x, d.z), Ua(d.x, d.z, d.r, d.h, a)),
      l.push({ x: d.x, z: d.z, r: d.r * 0.72, yew: !0 }));
  for (const [d, y] of w) {
    const m = new jt(v0(y), f);
    ((m.name = "hedges_" + d),
      (m.castShadow = !0),
      (m.receiveShadow = !0),
      i.add(m));
  }
  const c = We(),
    M = new Map(),
    h = I(0, 0, 0),
    v = (d, y, m, F) => {
      (M.has(d) || M.set(d, []),
        h
          .set(a() - 0.5, a() - 0.5, a() - 0.5)
          .cross(m)
          .normalize());
      const C = h.clone().addScaledVector(m, 0.35).normalize();
      M.get(d).push({
        pos: y.addScaledVector(C, -F * 0.25),
        along: C,
        size: F,
        cell: t0.hedge,
        out: m,
        ivy: m,
        shade: 0.75 + a() * 0.35,
      });
    };
  for (const d of t) {
    const y = Math.cos(d.yaw),
      m = Math.sin(d.yaw),
      F = ee(d.cx, d.cz),
      C = d.h < 1.3 ? 7 : 3.2,
      L = Math.round(d.L * (d.h * 2 + d.W) * C);
    for (let z = 0; z < L; z++) {
      const W = (a() - 0.5) * d.L,
        D = a() * (d.h * 2 + d.W);
      let V, A, K, J, q, st;
      D < d.h
        ? ((V = W),
          (A = 0.15 + D * 0.92),
          (K = d.W / 2),
          (J = 0),
          (q = 0.15),
          (st = 1))
        : D < d.h * 2
          ? ((V = W),
            (A = 0.15 + (D - d.h) * 0.92),
            (K = -d.W / 2),
            (J = 0),
            (q = 0.15),
            (st = -1))
          : ((V = W),
            (A = d.h),
            (K = D - d.h * 2 - d.W / 2),
            (J = 0),
            (q = 1),
            (st = K * 0.8));
      const j = d.cx + V * y + K * m,
        Y = d.cz - V * m + K * y,
        x = J * y + st * m,
        p = -J * m + st * y;
      v(
        F,
        I(j + x * 0.02, A, Y + p * 0.02),
        I(x, q, p).normalize(),
        0.42 + a() * 0.3,
      );
    }
  }
  for (const d of r) {
    const y = ee(d.x, d.z),
      m = Math.round(d.r * d.h * 14);
    for (let F = 0; F < m; F++) {
      const C = a() * d0,
        L = Math.pow(a(), 0.8),
        z = L * d.h * 0.95,
        W =
          (d.h < 3.2
            ? d.r * Math.pow(Math.max(0, 1 - Math.pow(L, 2.4)), 0.45)
            : d.r *
              Math.pow(Math.sin(Math.PI * Math.min(1, 0.1 + L * 0.92)), 0.6) *
              (1 - 0.5 * L)) * 1.02;
      v(
        y,
        I(d.x + Math.cos(C) * W, Math.max(0.1, z), d.z + Math.sin(C) * W),
        I(Math.cos(C), 0.35 + L * 0.5, Math.sin(C)).normalize(),
        0.5 + a() * 0.35,
      );
    }
  }
  const S = (d, y) => y.setRGB(0.62 * d.shade, 0.7 * d.shade, 0.62 * d.shade);
  for (const [d, y] of M) {
    const m = new jt(Ee(y, a, S), c.m);
    ((m.name = "hedge_sprays_" + d),
      (m.customDepthMaterial = c.d),
      (m.castShadow = !0),
      (m.receiveShadow = !0),
      i.add(m));
  }
  return { group: i, colliders: s, circles: l, hedges: t, yews: r };
}
function Va(e) {
  return Gt(e.mats.get("park3_hedge"), "hedge", (a) => {
    ((a.vertexShader = a.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
varying float vHY;`,
      )
      .replace(
        "#include <uv_vertex>",
        `#include <uv_vertex>
vHY = (modelMatrix * vec4(position, 1.0)).y;`,
      )),
      (a.fragmentShader = a.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying float vHY;`,
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
      // (bare and brown low down where the hedge is old and nothing gets light; a little lighter on the clipped top)
      diffuseColor.rgb *= mix(0.55, 1.0, smoothstep(0.05, 0.6, vHY));
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.04, 0.025), (1.0 - smoothstep(0.0, 0.35, vHY)) * 0.5);`,
        )));
  });
}
const b0 = { x0: 349.5, z0: 29.5, w: 181, d: 176, res: 3 },
  le = (e, a) => {
    const t = Math.sin(e * 127.1 + a * 311.7) * 43758.5453;
    return t - Math.floor(t);
  },
  O0 = (e, a) => {
    const t = Math.floor(e),
      r = Math.floor(a);
    let o = e - t,
      n = a - r;
    ((o = o * o * (3 - 2 * o)), (n = n * n * (3 - 2 * n)));
    const i = le(t, r),
      f = le(t + 1, r),
      w = le(t, r + 1),
      s = le(t + 1, r + 1);
    return i + (f - i) * o + (w - i) * n + (i - f - w + s) * o * n;
  },
  te = (e, a, t) => {
    const r = Math.max(0, Math.min(1, (t - e) / (a - e)));
    return r * r * (3 - 2 * r);
  };
function qa({
  trees: e = [],
  hedges: a = [],
  wear: t = [],
  ruts: r = [],
  mud: o = [],
  paved: n = [],
} = {}) {
  const { x0: i, z0: f, w, d: s, res: l } = b0,
    u = Math.round(w * l),
    c = Math.round(s * l),
    M = new Float32Array(u * c),
    h = new Float32Array(u * c),
    v = new Float32Array(u * c),
    S = new Float32Array(u * c),
    d = (z) => i + (z + 0.5) / l,
    y = (z) => f + (z + 0.5) / l;
  for (let z = 0; z < c; z++)
    for (let W = 0; W < u; W++) {
      const D = d(W),
        V = y(z),
        A = z * u + W,
        K = Le(D, V),
        J = O0(D * 0.9, V * 0.9),
        q = O0(D * 3.1 + 7, V * 3.1);
      M[A] = te(0.12, -0.12, K.d);
      const st =
        K.id === "avenue" ||
        K.id === "avenueN" ||
        K.id === "fountain" ||
        K.id === "forecourt"
          ? 1.25
          : 1;
      if (
        (K.d > -0.3 &&
          (h[A] = Math.max(
            h[A],
            te((0.3 + 0.65 * J) * st, 0, K.d) * (0.55 + 0.45 * q),
          )),
        ve(D, V))
      ) {
        const Y = Math.min(D - m0.x0, m0.x1 - D, V - m0.z0, m0.z1 - V);
        h[A] = Math.max(h[A], (0.12 + 0.4 * J * J) * te(0, 6, Y));
      }
      const j = Math.min(D - Jt.x0, Jt.x1 - D, V - Jt.z0, Jt.z1 - V);
      h[A] = Math.max(h[A], te(1.4, 0.2, j) * 0.8);
    }
  const m = (z, W, D, V, A) => {
    const K = Math.max(0, Math.floor((W - V - i) * l)),
      J = Math.min(u - 1, Math.ceil((W + V - i) * l)),
      q = Math.max(0, Math.floor((D - V - f) * l)),
      st = Math.min(c - 1, Math.ceil((D + V - f) * l));
    for (let j = q; j <= st; j++)
      for (let Y = K; Y <= J; Y++) {
        const x = d(Y),
          p = y(j),
          g = Math.hypot(x - W, p - D) / V;
        if (g < 1) {
          const T = j * u + Y;
          z[T] = Math.max(z[T], A(g, x, p));
        }
      }
  };
  for (const z of e) {
    const W = z.crown * 1.15 + 1.5,
      D = z.x + 1.2,
      V = z.z;
    (m(v, D, V, W, (A, K, J) =>
      Math.max(
        0,
        (1 - Math.pow(A, 1.4)) *
          (z.kind === "young" ? 0.6 : 1) *
          (0.75 + 0.5 * O0(K * 0.7, J * 0.7)) -
          0.08,
      ),
    ),
      z.kind !== "young" &&
        m(h, z.x, z.z, z.r * 2.6 + 0.8, (A) => (1 - A) * 0.85));
  }
  for (const z of a) {
    const W = Math.ceil(z.L / 0.8),
      D = Math.cos(z.yaw),
      V = Math.sin(z.yaw);
    for (let A = 0; A <= W; A++) {
      const K = -z.L / 2 + A * (z.L / W),
        J = z.cx + K * D + 0.8,
        q = z.cz - K * V + 0.6;
      m(
        v,
        J,
        q,
        z.W * 0.5 + 1,
        (st, j, Y) => (1 - st) * (0.5 + 0.5 * O0(j, Y)),
      );
    }
  }
  for (const z of t)
    m(
      h,
      z[0],
      z[1],
      z[2],
      (W, D, V) => (1 - W * W) * (z[3] ?? 0.9) * (0.7 + 0.3 * O0(D * 2, V * 2)),
    );
  for (const z of o)
    m(S, z[0], z[1], z[2], (W, D, V) =>
      Math.max(
        0,
        (1 - W * W) * (z[3] ?? 0.8) * (0.5 + 0.7 * O0(D * 0.8 + 3, V * 0.8)) -
          0.05,
      ),
    );
  for (const z of n) m(M, z[0], z[1], z[2], (W) => te(1, 0.92, W));
  for (const z of r) {
    const [W, D] = z.a,
      [V, A] = z.b,
      K = Math.hypot(V - W, A - D),
      J = (V - W) / K,
      q = (A - D) / K;
    for (let st = 0; st <= K; st += 0.35)
      for (const j of [-0.78, 0.78]) {
        const Y = Math.sin(st * 0.31) * 0.25,
          x = W + J * st - q * (j + Y),
          p = D + q * st + J * (j + Y);
        (m(S, x, p, 0.42, (g) => (1 - g) * 0.95),
          m(h, x, p, 0.75, (g) => (1 - g) * 0.8));
      }
  }
  {
    const z = R0;
    for (let W = 0; W < c; W++)
      for (let D = 0; D < u; D++) {
        const V = d(D),
          A = y(W);
        if (V > z.x0 - 0.15 && V < z.x1 + 0.15 && A > z.z0 - 0.15) {
          const K = W * u + D;
          ((M[K] = 1), (h[K] = 0), (v[K] = 0), (S[K] = 0));
        }
      }
  }
  const F = new Uint8Array(u * c * 4);
  for (let z = 0; z < u * c; z++)
    ((F[z * 4] = Math.round(Math.min(1, M[z]) * 255)),
      (F[z * 4 + 1] = Math.round(Math.min(1, h[z]) * 255)),
      (F[z * 4 + 2] = Math.round(Math.min(1, v[z]) * 255)),
      (F[z * 4 + 3] = Math.round(Math.min(1, S[z]) * 255)));
  const C = new pa(F, u, c, ma, xa);
  return (
    (C.magFilter = Se),
    (C.minFilter = Se),
    (C.wrapS = C.wrapT = Ma),
    (C.needsUpdate = !0),
    {
      data: F,
      tex: C,
      W: u,
      H: c,
      at: (z, W) => {
        const D = Math.max(0, Math.min(u - 1, Math.floor((z - i) * l))),
          V = Math.max(0, Math.min(c - 1, Math.floor((W - f) * l))),
          A = (V * u + D) * 4;
        return [F[A] / 255, F[A + 1] / 255, F[A + 2] / 255, F[A + 3] / 255];
      },
    }
  );
}
const Ye = `
uniform sampler2D tMask;
uniform sampler2D tLitter;
uniform sampler2D tDirt;
uniform vec4 uMaskBox;
`;
function Ha(e, a) {
  return Gt(e.mats.get("park3_lawn"), "lawn", (t) => {
    (Object.assign(t.uniforms, a),
      (t.fragmentShader = t.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
` + Ye,
        )
        .replace(
          "#include <map_fragment>",
          `
      vec2 muv = (vPW.xz - uMaskBox.xy) * uMaskBox.zw;
      vec4 mk = texture2D(tMask, muv);
      // the lawn at two scales (breaking its repeat) and broad patches of greener, drier, darker grass
      vec3 lawnA = texture2D(map, vMapUv).rgb, lawnB = texture2D(map, vPW.xz * 0.2171 + vec2(0.31, 0.77)).rgb;
      float bn = pnoise(vPW.xz * 0.09) * 0.65 + pnoise(vPW.xz * 0.31 + 7.0) * 0.35;
      vec3 lawn = mix(lawnA, lawnB, smoothstep(0.35, 0.65, bn) * 0.65);
      float pn = pnoise(vPW.xz * 0.035 + 3.1) * 0.7 + pnoise(vPW.xz * 0.13 - 1.7) * 0.3;
      lawn *= mix(vec3(0.78, 0.84, 0.74), vec3(1.14, 1.08, 0.9), pn);
      vec3 dirt = texture2D(tDirt, vPW.xz * 0.5).rgb * vec3(0.92, 0.86, 0.8);
      vec3 litter = texture2D(tLitter, vPW.xz * 0.3846 + vec2(0.13, 0.41)).rgb;
      float gWk = smoothstep(0.08, 0.85, mk.g + (pnoise(vPW.xz * 2.1 + 3.0) - 0.5) * 0.5);
      float gLk = smoothstep(0.12, 0.8, mk.b + (pnoise(vPW.xz * 1.3) - 0.5) * 0.55);
      float gMud = smoothstep(0.05, 0.6, mk.a);
      float gPud = smoothstep(0.62, 0.78, mk.a * (0.55 + pnoise(vPW.xz * 0.7 + 9.0) * 0.8));
      vec3 c = mix(lawn, dirt, gWk);
      c = mix(c, litter, gLk * (1.0 - gWk * 0.4));
      c = mix(c, dirt * vec3(0.42, 0.4, 0.37), gMud);
      c *= 1.0 - gPud * 0.55;
      diffuseColor.rgb = c;`,
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor, 0.88, gWk);
      roughnessFactor = mix(roughnessFactor, 0.72, gLk);
      roughnessFactor = mix(roughnessFactor, 0.66, gMud);
      roughnessFactor = mix(roughnessFactor, 0.06, gPud);`,
        )
        .replace(
          "mapN.xy *= normalScale;",
          "mapN.xy *= normalScale * (1.0 - gPud) * (1.0 - gMud * 0.85) * (1.0 - gWk * 0.4);",
        )));
  });
}
function ie(e, a, t, r, o = {}) {
  return Gt(e.mats.get(t, o.tint ? { color: o.tint } : {}), r, (n) => {
    (Object.assign(n.uniforms, a),
      (n.vertexShader = n.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute float aEdge;
varying float vEdge;`,
        )
        .replace(
          "#include <uv_vertex>",
          `#include <uv_vertex>
vEdge = aEdge;`,
        )),
      (n.fragmentShader = n.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
` +
            Ye +
            "varying float vEdge;",
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
      vec2 muv = (vPW.xz - uMaskBox.xy) * uMaskBox.zw;
      vec4 mk = texture2D(tMask, muv);
      // the edge crumbles into the lawn's worn band
      float ee = abs(vEdge), nE = pnoise(vPW.xz * 2.7) * 0.6 + pnoise(vPW.xz * 9.0) * 0.4;
      if (ee > ${(o.edge ?? 0.93).toFixed(3)} + (nE - 0.5) * ${(o.rag ?? 0.12).toFixed(3)}) discard;
      vec3 dirt = texture2D(tDirt, vPW.xz * 0.5).rgb * vec3(0.92, 0.86, 0.8);
      diffuseColor.rgb = mix(diffuseColor.rgb, dirt, smoothstep(0.7, 0.98, ee + (nE - 0.5) * 0.25) * 0.55);
      // leaves blown onto it under the trees
      vec3 litter = texture2D(tLitter, vPW.xz * 0.3846 + vec2(0.13, 0.41)).rgb;
      float gLk = smoothstep(0.35, 0.9, mk.b + (pnoise(vPW.xz * 1.7) - 0.5) * 0.6) * ${(o.leaves ?? 0.85).toFixed(3)};
      diffuseColor.rgb = mix(diffuseColor.rgb, litter, gLk);
      // damp, puddles in the low spots
      float gPud = smoothstep(0.66, 0.8, pnoise(vPW.xz * 0.23 + 4.0) * 0.7 + pnoise(vPW.xz * 0.9) * 0.3) * ${(o.puddles ?? 0).toFixed(3)} * (1.0 - gLk);
      diffuseColor.rgb *= 1.0 - gPud * 0.45;`,
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
      roughnessFactor = roughnessFactor * ${(o.wet ?? 1).toFixed(3)};
      roughnessFactor = mix(roughnessFactor, 0.75, gLk);
      roughnessFactor = mix(roughnessFactor, 0.04, gPud);`,
        )
        .replace(
          "mapN.xy *= normalScale;",
          "mapN.xy *= normalScale * (1.0 - gPud);",
        )));
  });
}
function Za(e = 5) {
  const a = [],
    t = [],
    r = [],
    o = [0, 0.35, 0.7];
  for (let i = 0; i < e; i++) {
    const f = a.length / 3;
    for (const M of o) a.push(-0.5, M, 0, 0.5, M, 0);
    a.push(0, 1, 0);
    const w = (i / e) * Math.PI * 2 + i * 0.7,
      s = 0.015 + (i % 3) * 0.012,
      l = 0.18 + ((i * 7) % 5) * 0.06,
      u = 0.7 + ((i * 3) % 4) * 0.12;
    for (let M = 0; M < o.length * 2 + 1; M++) t.push(w, s, l, u);
    for (let M = 0; M < o.length - 1; M++) {
      const h = f + M * 2;
      r.push(h, h + 1, h + 2, h + 1, h + 3, h + 2);
    }
    const c = f + (o.length - 1) * 2;
    r.push(c, c + 1, c + 2);
  }
  const n = new Fe();
  return (
    n.setAttribute("position", new H0(a, 3)),
    n.setAttribute(
      "normal",
      new H0(
        new Float32Array(a.length).map((i, f) => (f % 3 === 1 ? 1 : 0)),
        3,
      ),
    ),
    n.setAttribute("aBlade", new H0(t, 4)),
    n.setIndex(r),
    n
  );
}
function ja(e, a) {
  return Gt(
    new u0({ color: 16777215, roughness: 0.75, metalness: 0, side: y0 }),
    "tufts",
    (r) => {
      (Object.assign(r.uniforms, e, a),
        (r.vertexShader = r.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
${Ye}
uniform vec2 uOrigin;
uniform vec2 uStepFar;
uniform float uPTt;
attribute vec4 aBlade;
attribute vec2 aCell;
varying float vT;
varying float vVar;
varying float vWorn;
float thash(vec2 p) { return fract(sin(dot(p, vec2(41.37, 289.13))) * 47453.5453); }
vec3 gPos; vec3 gNrm;
void tuft() {
  vec2 cell = uOrigin + aCell;
  float h1 = thash(cell), h2 = thash(cell + 17.3), h3 = thash(cell + 41.1), h4 = thash(cell - 7.7);
  vec2 root = (cell + vec2(h1, h2)) * uStepFar.x;
  vec4 mk = texture2D(tMask, (root - uMaskBox.xy) * uMaskBox.zw);
  float dens = (1.0 - smoothstep(0.02, 0.35, mk.r)) * (1.0 - smoothstep(0.35, 0.85, mk.g)) * (1.0 - smoothstep(0.1, 0.5, mk.a)) * (1.0 - mk.b * 0.55);
  float grow = step(h3, dens * 0.92);
  float dist = distance(root, cameraPosition.xz);
  float fade = 1.0 - smoothstep(uStepFar.y * 0.62, uStepFar.y, dist);
  float hgt = (0.07 + 0.15 * h4 * h4 + 0.05 * h1) * grow * fade * (1.0 - mk.g * 0.45) * (1.0 + mk.b * 0.2);
  float ang = aBlade.x + h1 * 6.2832, off = aBlade.y * (0.8 + h2 * 0.6), lean = aBlade.z, hf = aBlade.w;
  vec2 dir = vec2(cos(ang), sin(ang));
  vec3 base = vec3(root.x + dir.x * off, 0.0, root.y + dir.y * off);
  // the wind: slow gusts rolling over the lawn, each blade its own flutter
  float gust = sin(uPTt * 0.8 + root.x * 0.13 + root.y * 0.07) * 0.5 + 0.5;
  vec2 B = dir * lean + vec2(0.8, 0.45) * (0.05 + 0.18 * gust) + vec2(-dir.y, dir.x) * sin(uPTt * (2.0 + h3) + h4 * 30.0) * 0.04;
  float bl = length(B); if (bl > 0.9) B *= 0.9 / bl;
  float t = position.y, it = 1.0 - t, H = hgt * hf;
  vec3 tip = vec3(B.x, sqrt(1.0 - dot(B, B)), B.y) * H;
  vec3 ctrl = vec3(B.x * 0.2, 0.55, B.y * 0.2) * H;
  vec3 c = 2.0 * it * t * ctrl + t * t * tip;
  vec3 tang = normalize(2.0 * it * ctrl + 2.0 * t * (tip - ctrl) + vec3(0.0, 1e-4, 0.0));
  vec3 sd = vec3(-dir.y, 0.0, dir.x);
  float wd = (0.01 + 0.005 * h2) * (1.0 - pow(t, 1.6)) * step(0.001, H);
  gPos = base + c + sd * position.x * wd;
  vec3 nB = normalize(cross(sd, tang)); if (dot(nB, vec3(dir.x, 0.0, dir.y)) < 0.0) nB = -nB;
  gNrm = normalize(mix(nB, vec3(0.0, 1.0, 0.0), 0.55));
  vT = t; vVar = h4; vWorn = mk.g;
}`,
          )
          .replace(
            "#include <beginnormal_vertex>",
            `tuft();
vec3 objectNormal = gNrm;`,
          )
          .replace("#include <begin_vertex>", "vec3 transformed = gPos;")),
        (r.fragmentShader = r.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying float vT;
varying float vVar;
varying float vWorn;`,
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
      {
        vec3 rootC = vec3(0.016, 0.03, 0.01), midC = mix(vec3(0.035, 0.07, 0.016), vec3(0.06, 0.09, 0.02), vVar);
        vec3 tipC = mix(vec3(0.08, 0.13, 0.03), vec3(0.16, 0.15, 0.06), vVar * vVar);
        vec3 c = mix(rootC, midC, smoothstep(0.0, 0.45, vT));
        c = mix(c, tipC, smoothstep(0.4, 1.0, vT));
        c = mix(c, vec3(0.13, 0.11, 0.06) * (0.6 + 0.5 * vT), step(0.93, fract(vVar * 13.7)) * 0.8 + vWorn * 0.3);
        diffuseColor.rgb = c;
      }`,
          )
          .replace(
            "#include <normal_fragment_begin>",
            `#include <normal_fragment_begin>
      normal = normalize(vNormal);`,
          )));
    },
  );
}
function $a(
  e,
  {
    trees: a = [],
    hedges: t = [],
    wear: r = [],
    ruts: o = [],
    mud: n = [],
    paved: i = [],
  } = {},
) {
  const f = new P0();
  f.name = "park_ground";
  const w = qa({ trees: a, hedges: t, wear: r, ruts: o, mud: n, paved: i }),
    s = {
      tMask: { value: w.tex },
      tLitter: { value: e.mats.get("park3_litter").map },
      tDirt: { value: e.mats.get("forest_path").map },
      uMaskBox: { value: new ue(b0.x0, b0.z0, 1 / b0.w, 1 / b0.d) },
    },
    l = Ha(e, s);
  l.normalScale && l.normalScale.set(0.55, 0.55);
  {
    const p = b0.x0,
      g = b0.x0 + b0.w,
      T = b0.z0,
      G = b0.z0 + b0.d,
      Z = R0,
      tt = (at, nt, mt, Mt) =>
        new _t(
          nt - at,
          Mt - mt,
          Math.max(1, Math.round((nt - at) / 3)),
          Math.max(1, Math.round((Mt - mt) / 3)),
        )
          .rotateX(-Math.PI / 2)
          .translate((at + nt) / 2, 0, (mt + Mt) / 2),
      it = K0(
        [tt(p, Z.x0, T, G), tt(Z.x1, g, T, G), tt(Z.x0, Z.x1, T, Z.z0)].map(
          (at) => N(at),
        ),
      ),
      et = new jt(it, l);
    ((et.name = "park_lawn"),
      (et.receiveShadow = !0),
      (et.castShadow = !1),
      f.add(et));
  }
  const u = ie(e, s, "street_asphalt", "asphalt", {
      wet: 0.55,
      puddles: 0.9,
      leaves: 0.8,
      edge: 0.95,
      rag: 0.08,
    }),
    c = ie(e, s, "garden_gravel", "gravel", {
      tint: 9077880,
      wet: 0.95,
      puddles: 0.35,
      leaves: 0.9,
      edge: 0.9,
      rag: 0.16,
    }),
    M = { asphalt: [], gravel: [] },
    h = Ae,
    v = (p) => p[0] > h.x0 && p[0] < h.x1 && p[1] > h.z0 && p[1] < h.z1,
    S = (p, g) => {
      let T = 0,
        G = 1;
      const Z = v(p);
      for (let it = 0; it < 24; it++) {
        const et = (T + G) / 2,
          at = [p[0] + (g[0] - p[0]) * et, p[1] + (g[1] - p[1]) * et];
        v(at) === Z ? (T = et) : (G = et);
      }
      const tt = Z ? G : T;
      return [p[0] + (g[0] - p[0]) * tt, p[1] + (g[1] - p[1]) * tt];
    },
    d = (p) => {
      const g = [];
      let T = [];
      for (let G = 0; G < p.length; G++)
        v(p[G])
          ? T.length && (T.push(S(p[G - 1], p[G])), g.push(T), (T = []))
          : (!T.length && G > 0 && T.push(S(p[G - 1], p[G])), T.push(p[G]));
      return (T.length && g.push(T), g.filter((G) => G.length > 1));
    };
  for (const p of be)
    for (const g of d(p.line)) {
      const T = { ...p, line: g },
        G = T.line,
        Z = G.length,
        tt = T.w / 2 + 0.1,
        it = T.kind === "asphalt" ? 0.016 : 0.012,
        et = new Float32Array(Z * 2 * 3),
        at = new Float32Array(Z * 2),
        nt = new Float32Array(Z * 2 * 3),
        mt = [];
      for (let wt = 0; wt < Z; wt++) {
        const Et = G[Math.max(0, wt - 1)],
          P = G[Math.min(Z - 1, wt + 1)],
          $ = Math.hypot(P[0] - Et[0], P[1] - Et[1]) || 1,
          lt = (P[0] - Et[0]) / $,
          ft = (P[1] - Et[1]) / $;
        for (let Pt = 0; Pt < 2; Pt++) {
          const Wt = Pt ? 1 : -1,
            Dt = wt * 2 + Pt;
          ((et[Dt * 3] = G[wt][0] - ft * Wt * tt),
            (et[Dt * 3 + 1] = it),
            (et[Dt * 3 + 2] = G[wt][1] + lt * Wt * tt),
            (nt[Dt * 3 + 1] = 1),
            (at[Dt] = Wt));
        }
        if (wt < Z - 1) {
          const Pt = wt * 2;
          mt.push(Pt, Pt + 2, Pt + 1, Pt + 1, Pt + 2, Pt + 3);
        }
      }
      const Mt = new Q0();
      (Mt.setAttribute("position", new $t(et, 3)),
        Mt.setAttribute("normal", new $t(nt, 3)),
        Mt.setAttribute("aEdge", new $t(at, 1)),
        Mt.setIndex(mt),
        Mt.computeVertexNormals());
      const Ft = Mt.attributes.normal;
      if (Ft.getY(0) < 0) {
        const wt = Mt.index.array;
        for (let Et = 0; Et < wt.length; Et += 3) {
          const P = wt[Et + 1];
          ((wt[Et + 1] = wt[Et + 2]), (wt[Et + 2] = P));
        }
      }
      for (let wt = 0; wt < Ft.count; wt++) Ft.setXYZ(wt, 0, 1, 0);
      (N(Mt), M[T.kind].push(Mt));
    }
  for (const [p, g] of [
    ["asphalt", u],
    ["gravel", c],
  ]) {
    if (!M[p].length) continue;
    const T = new jt(K0(M[p]), g);
    ((T.name = "park_paths_" + p),
      (T.receiveShadow = !0),
      (T.castShadow = !1),
      f.add(T));
  }
  const y = ie(e, s, "plaza_cobble", "setts", {
    tint: 9078400,
    wet: 1,
    puddles: 0.45,
    leaves: 0.7,
    edge: 2,
    rag: 0,
  });
  y.normalScale && y.normalScale.set(0.22, 0.22);
  const m = ie(e, s, "sidewalk_tiles", "pavers", {
    tint: 9078916,
    wet: 0.7,
    puddles: 0.6,
    leaves: 0.5,
    edge: 2,
    rag: 0,
  });
  m.normalScale && m.normalScale.set(0.6, 0.6);
  const F = [],
    C = Gt(e.mats.get("church_dressed", { color: 10131086 }), "curb"),
    L = [],
    z = [],
    W = (p, g = 0) => (
      p.setAttribute(
        "aEdge",
        new $t(new Float32Array(p.attributes.position.count).fill(g), 1),
      ),
      p
    );
  for (const p of _e) {
    p.kind === "setts" &&
      L.push(
        W(N(new j0(p.r, 72).rotateX(-Math.PI / 2).translate(p.x, 0.022, p.z))),
      );
    const g = [
      new _0(p.r - 0.22, 0),
      new _0(p.r - 0.22, 0.07),
      new _0(p.r - 0.02, 0.075),
      new _0(p.r + 0.02, 0),
    ];
    z.push(N(new Ie(g, 96).translate(p.x, 0, p.z)));
  }
  {
    const p = Ae;
    F.push(
      W(
        N(
          new _t(p.x1 - p.x0, p.z1 - p.z0)
            .rotateX(-Math.PI / 2)
            .translate((p.x0 + p.x1) / 2, 0.022, (p.z0 + p.z1) / 2),
        ),
      ),
    );
    for (const [g, T, G, Z] of [
      [p.x0, p.z0, p.x0 + 0.22, p.z1],
      [p.x1 - 0.22, p.z0, p.x1, p.z1],
      [p.x0, p.z0, p.x0 + 4.4, p.z0 + 0.22],
      [p.x1 - 4.4, p.z0, p.x1, p.z0 + 0.22],
    ])
      z.push(
        N(
          new xt(G - g, 0.075, Z - T).translate(
            (g + G) / 2,
            0.037,
            (T + Z) / 2,
          ),
        ),
      );
  }
  const D = _e.find((p) => p.id === "bandstand"),
    V = N(new j0(D.r, 64).rotateX(-Math.PI / 2).translate(D.x, 0.014, D.z));
  {
    const p = new jt(K0([W(V)]), c);
    ((p.name = "park_band_apron"), (p.receiveShadow = !0), f.add(p));
  }
  {
    const p = new jt(K0(L), y);
    ((p.name = "park_setts"), (p.receiveShadow = !0), f.add(p));
  }
  {
    const p = new jt(K0(F), m);
    ((p.name = "park_pavers"), (p.receiveShadow = !0), f.add(p));
  }
  {
    const p = new jt(K0(z), C);
    ((p.name = "park_curbs"),
      (p.receiveShadow = !0),
      (p.castShadow = !1),
      f.add(p));
  }
  const A = 0.36,
    K = 16,
    J = Math.ceil((K * 2) / A),
    q = {
      uOrigin: { value: new _0() },
      uStepFar: { value: new _0(A, K) },
      uPTt: x0.uPT,
    },
    st = Za(5),
    j = new Float32Array(J * J * 2);
  for (let p = 0; p < J; p++)
    for (let g = 0; g < J; g++)
      ((j[(p * J + g) * 2] = g - J / 2), (j[(p * J + g) * 2 + 1] = p - J / 2));
  (st.setAttribute("aCell", new Y0(j, 2)),
    (st.instanceCount = J * J),
    (st.boundingSphere = new ha(new a0(), 1e5)));
  const Y = new jt(st, ja(s, q));
  ((Y.name = "park_tufts"),
    (Y.frustumCulled = !1),
    (Y.receiveShadow = !0),
    (Y.castShadow = !1),
    f.add(Y));
  function x(p) {
    const g = p.position;
    ((Y.visible = g.y < 25 && V0(g.x, g.z, -20)),
      q.uOrigin.value.set(Math.floor(g.x / A), Math.floor(g.z / A)));
  }
  return {
    group: f,
    mask: w,
    MU: s,
    update: x,
    mats: { lawnM: l, asphaltM: u, gravelM: c, settsM: y, curbM: C },
  };
}
function K0(e) {
  let a = 0,
    t = 0;
  for (const c of e)
    ((a += c.attributes.position.count),
      (t += c.index ? c.index.count : c.attributes.position.count));
  const r = e.every((c) => c.attributes.aEdge),
    o = new Float32Array(a * 3),
    n = new Float32Array(a * 3),
    i = new Float32Array(a * 2),
    f = r ? new Float32Array(a) : null,
    w = new Uint32Array(t);
  let s = 0,
    l = 0;
  for (const c of e) {
    const M = c.attributes.position.count;
    if (
      (o.set(c.attributes.position.array.subarray(0, M * 3), s * 3),
      n.set(c.attributes.normal.array.subarray(0, M * 3), s * 3),
      i.set(c.attributes.uv.array.subarray(0, M * 2), s * 2),
      f && f.set(c.attributes.aEdge.array.subarray(0, M), s),
      c.index)
    ) {
      const h = c.index.array;
      for (let v = 0; v < c.index.count; v++) w[l + v] = h[v] + s;
      l += c.index.count;
    } else {
      for (let h = 0; h < M; h++) w[l + h] = s + h;
      l += M;
    }
    s += M;
  }
  const u = new Q0();
  return (
    u.setAttribute("position", new $t(o, 3)),
    u.setAttribute("normal", new $t(n, 3)),
    u.setAttribute("uv", new $t(i, 2)),
    f && u.setAttribute("aEdge", new $t(f, 1)),
    u.setIndex(new $t(w, 1)),
    u.computeBoundingSphere(),
    u
  );
}
let ce = null,
  de = null;
const ae = (e, a, t, r, o = 2048, n = 2048) => [
  e / o,
  1 - (a + r) / n,
  (e + t) / o,
  1 - a / n,
];
function xe() {
  if (ce) return ce;
  const e = {};
  return (
    (ce = {
      tex: ye(2048, 2048, (t) => {
        let r = 4441;
        const o = () => (r = (r * 16807) % 2147483647) / 2147483647;
        ((t.fillStyle = "#7a7a76"), t.fillRect(0, 0, 2048, 2048));
        let n = 1e9;
        const i = (
            s,
            l,
            u,
            c,
            M,
            h = "Arial Black, Arial, sans-serif",
            v = "900",
            S = "center",
            d = n,
          ) => {
            ((t.font = `${v} ${c}px ${h}`),
              (t.fillStyle = M),
              (t.textAlign = S),
              (t.textBaseline = "middle"),
              t.fillText(s, l, u, d));
          },
          f = (s, l, u, c, M = 1) => {
            for (let v = 0; v < 40 * M; v++) {
              t.fillStyle = `rgba(30,26,20,${0.04 + o() * 0.08})`;
              const S = s + o() * u;
              t.fillRect(
                S,
                l + o() * c * 0.3,
                1 + o() * 3,
                c * (0.3 + o() * 0.7),
              );
            }
            const h = t.createLinearGradient(0, l + c * 0.6, 0, l + c);
            (h.addColorStop(0, "rgba(40,32,22,0)"),
              h.addColorStop(1, `rgba(40,32,22,${0.35 * M})`),
              (t.fillStyle = h),
              t.fillRect(s, l, u, c));
            for (let v = 0; v < 12 * M; v++)
              ((t.fillStyle = `rgba(20,16,12,${0.1 + o() * 0.2})`),
                t.beginPath(),
                t.arc(s + o() * u, l + o() * c, 2 + o() * 8, 0, 7),
                t.fill());
          },
          w = (s, l, u, c, M, h) => {
            (t.save(),
              t.beginPath(),
              t.rect(l, u, c, M),
              t.clip(),
              (n = c * 0.9),
              h(l, u, c, M),
              (n = 1e9),
              t.restore(),
              (e[s] = ae(l, u, c, M)));
          };
        (w("banner", 0, 0, 1024, 256, (s, l, u, c) => {
          ((t.fillStyle = "#a3201a"),
            t.fillRect(s, l, u, c),
            (t.fillStyle = "#f2efe6"),
            t.fillRect(s, l + 14, u, 10),
            t.fillRect(s, l + c - 24, u, 10),
            i("EVACUATION POINT", s + u / 2, l + c / 2 - 6, 104, "#f4f1e8"),
            i(
              "CITY EMERGENCY SERVICES  -  ARMY",
              s + u / 2,
              l + c - 52,
              28,
              "#f4f1e8",
              "Arial",
              "700",
            ));
          for (let M = 0; M < 6; M++)
            ((t.fillStyle = "#e8e2d2"),
              t.beginPath(),
              t.arc(s + 40 + M * 188, l + 40, 7, 0, 7),
              t.fill());
          f(s, l, u, c, 0.8);
        }),
          w("civilians", 1024, 0, 1024, 256, (s, l, u, c) => {
            ((t.fillStyle = "#e3b419"),
              t.fillRect(s, l, u, c),
              (t.strokeStyle = "#141414"),
              (t.lineWidth = 12),
              t.strokeRect(s + 12, l + 12, u - 24, c - 24),
              i(
                "CIVILIANS THIS WAY",
                s + 400,
                l + c / 2,
                82,
                "#141414",
                void 0,
                void 0,
                "center",
                700,
              ),
              (t.fillStyle = "#141414"),
              t.beginPath(),
              t.moveTo(s + 830, l + 80),
              t.lineTo(s + 930, l + 128),
              t.lineTo(s + 830, l + 176),
              t.lineTo(s + 830, l + 150),
              t.lineTo(s + 780, l + 150),
              t.lineTo(s + 780, l + 106),
              t.lineTo(s + 830, l + 106),
              t.fill(),
              f(s, l, u, c, 0.7));
          }),
          w("airRescue", 0, 256, 1024, 256, (s, l, u, c) => {
            ((t.fillStyle = "#ece8de"),
              t.fillRect(s, l, u, c),
              (t.fillStyle = "#b01e18"),
              t.fillRect(s, l, u, 30),
              t.fillRect(s, l + c - 30, u, 30),
              i(
                "AIR RESCUE ONLY",
                s + 610,
                l + c / 2,
                86,
                "#b01e18",
                void 0,
                void 0,
                "center",
                700,
              ),
              (t.fillStyle = "#1a1a1a"),
              t.fillRect(s + 60, l + 118, 120, 34),
              t.beginPath(),
              t.ellipse(s + 150, l + 135, 70, 34, 0, 0, 7),
              t.fill(),
              t.fillRect(s + 40, l + 94, 220, 6),
              t.fillRect(s + 150, l + 100, 6, 18),
              t.fillRect(s + 70, l + 172, 120, 5),
              f(s, l, u, c, 0.6));
          }),
          w("noEntry", 1024, 256, 512, 256, (s, l, u, c) => {
            ((t.fillStyle = "#efece4"),
              t.fillRect(s, l, u, c),
              (t.strokeStyle = "#b01e18"),
              (t.lineWidth = 16),
              t.strokeRect(s + 10, l + 10, u - 20, c - 20),
              i("MILITARY ZONE", s + u / 2, l + 98, 58, "#b01e18"),
              i("NO ENTRY", s + u / 2, l + 170, 66, "#1a1a1a"),
              f(s, l, u, c, 0.6));
          }),
          w("arrowUp", 1536, 256, 512, 256, (s, l, u, c) => {
            ((t.fillStyle = "#e9e5da"),
              t.fillRect(s, l, u, c),
              (t.fillStyle = "#c0261c"),
              t.fillRect(s, l, u, 22),
              t.fillRect(s, l + c - 22, u, 22),
              i(
                "EVACUATION",
                s + 190,
                l + 92,
                52,
                "#1c1c1c",
                void 0,
                void 0,
                "center",
                330,
              ),
              i(
                "POINT",
                s + 190,
                l + 158,
                60,
                "#1c1c1c",
                void 0,
                void 0,
                "center",
                330,
              ),
              (t.fillStyle = "#c0261c"),
              t.beginPath(),
              t.moveTo(s + 430, l + 44),
              t.lineTo(s + 490, l + 120),
              t.lineTo(s + 452, l + 120),
              t.lineTo(s + 452, l + 214),
              t.lineTo(s + 408, l + 214),
              t.lineTo(s + 408, l + 120),
              t.lineTo(s + 370, l + 120),
              t.fill(),
              f(s, l, u, c, 0.9));
          }),
          w("cross", 0, 512, 512, 512, (s, l, u, c) => {
            ((t.fillStyle = "#ece9e0"),
              t.fillRect(s, l, u, c),
              (t.fillStyle = "#c21d1d"),
              t.fillRect(s + 196, l + 76, 120, 360),
              t.fillRect(s + 76, l + 196, 360, 120),
              f(s, l, u, c, 0.5));
          }),
          w("map", 512, 512, 512, 512, (s, l, u, c) => {
            ((t.fillStyle = "#21352a"),
              t.fillRect(s, l, u, c),
              (t.fillStyle = "#d8d2bc"),
              t.fillRect(s + 24, l + 70, u - 48, c - 100),
              i(
                "PARKGATE PARK",
                s + u / 2,
                l + 38,
                40,
                "#e8e2cc",
                "Georgia, serif",
                "700",
              ),
              (t.fillStyle = "#9cb07a"),
              t.fillRect(s + 34, l + 80, u - 68, c - 120),
              (t.strokeStyle = "#efe8d2"),
              (t.lineWidth = 9),
              (t.lineCap = "round"),
              t.beginPath(),
              t.moveTo(s + 256, l + 380),
              t.lineTo(s + 262, l + 250),
              t.lineTo(s + 300, l + 150),
              t.stroke(),
              t.beginPath(),
              t.moveTo(s + 40, l + 250),
              t.lineTo(s + 470, l + 245),
              t.stroke(),
              t.beginPath(),
              t.moveTo(s + 230, l + 230),
              t.lineTo(s + 120, l + 110),
              t.stroke(),
              (t.fillStyle = "#7d9cb4"),
              t.beginPath(),
              t.arc(s + 260, l + 248, 22, 0, 7),
              t.fill(),
              (t.fillStyle = "#c0261c"),
              t.beginPath(),
              t.arc(s + 256, l + 384, 10, 0, 7),
              t.fill(),
              i(
                "YOU ARE HERE",
                s + 340,
                l + 384,
                18,
                "#2a2a2a",
                "Arial",
                "700",
              ),
              (t.fillStyle = "#e9e3cc"),
              t.fillRect(s + 300, l + 100, 120, 70),
              i("H", s + 360, l + 135, 40, "#c0261c"),
              i("EVACUATION", s + 360, l + 186, 16, "#2a2a2a", "Arial", "700"),
              i("BANDSTAND", s + 120, l + 290, 16, "#2a2a2a", "Arial", "700"),
              i("PLAYGROUND", s + 120, l + 360, 16, "#2a2a2a", "Arial", "700"),
              i("ROSE GARDEN", s + 400, l + 330, 16, "#2a2a2a", "Arial", "700"),
              (t.strokeStyle = "rgba(200,30,20,0.85)"),
              (t.lineWidth = 5),
              t.beginPath(),
              t.moveTo(s + 256, l + 372),
              t.quadraticCurveTo(s + 290, l + 250, s + 340, l + 175),
              t.stroke(),
              f(s, l, u, c, 0.9));
          }),
          w("ambulance", 1024, 512, 1024, 256, (s, l, u, c) => {
            ((t.fillStyle = "#f0eee8"), t.fillRect(s, l, u, c));
            for (let M = 0; M < 16; M++)
              ((t.fillStyle = M % 2 ? "#1f4fa8" : "#e8d020"),
                t.fillRect(s + M * 64, l + 150, 64, 50));
            ((t.fillStyle = "#c0201a"),
              t.fillRect(s, l + 206, u, 16),
              i("AMBULANCE", s + u / 2, l + 76, 112, "#1f4fa8"));
          }),
          w("ambFront", 1024, 768, 512, 128, (s, l, u, c) => {
            ((t.fillStyle = "#f0eee8"),
              t.fillRect(s, l, u, c),
              t.save(),
              t.translate(s + u / 2, l + c / 2),
              t.scale(-1, 1),
              i("AMBULANCE", 0, 0, 70, "#1f4fa8"),
              t.restore());
          }),
          w("triage", 1536, 768, 512, 128, (s, l, u, c) => {
            ((t.fillStyle = "#ece9e0"),
              t.fillRect(s, l, u, c),
              (t.fillStyle = "#c21d1d"),
              t.fillRect(s + 20, l + 30, 70, 20),
              t.fillRect(s + 45, l + 5, 20, 70),
              i("TRIAGE", s + 300, l + c / 2, 70, "#1a1a1a"),
              f(s, l, u, c, 0.6));
          }),
          w("plaque", 1024, 896, 1024, 128, (s, l, u, c) => {
            ((t.fillStyle = "#3e3424"),
              t.fillRect(s, l, u, c),
              (t.strokeStyle = "#7a6440"),
              (t.lineWidth = 6),
              t.strokeRect(s + 8, l + 8, u - 16, c - 16),
              i(
                "PEACE",
                s + u / 2,
                l + 44,
                46,
                "#a08a5c",
                "Georgia, serif",
                "700",
              ),
              i(
                "RAISED BY THE PEOPLE OF PARKGATE  1921",
                s + u / 2,
                l + 92,
                26,
                "#8a7650",
                "Georgia, serif",
                "700",
              ));
          }));
        for (let s = 0; s < 8; s++) {
          const l = (s % 4) * 256,
            u = 1024 + Math.floor(s / 4) * 256;
          w("paper" + s, l, u, 256, 256, (c, M, h, v) => {
            ((t.fillStyle = ["#e8e4d8", "#ddd8c8", "#ece6d0", "#d6d4cc"][
              s % 4
            ]),
              t.fillRect(c, M, h, v),
              s === 3 &&
                ((t.fillStyle = "#c0261c"),
                t.fillRect(c, M, h, 50),
                i("EVACUATE", c + h / 2, M + 26, 30, "#fff")),
              (t.fillStyle = "rgba(30,30,30,0.75)"));
            for (let S = 0; S < 14; S++) {
              const d = 60 + o() * 150;
              (t.fillRect(c + 18, M + (s === 3 ? 64 : 22) + S * 15, d, 5),
                s % 2 === 0 &&
                  S % 3 === 0 &&
                  t.fillRect(c + 190, M + 22 + S * 15, 40, 5));
            }
            if (s === 5) {
              ((t.strokeStyle = "rgba(30,30,30,0.7)"), (t.lineWidth = 2));
              for (let S = 0; S < 10; S++)
                t.strokeRect(c + 14, M + 20 + S * 22, h - 28, 22);
            }
            f(c, M, h, v, 0.5);
          });
        }
        (w("genPanel", 1024, 1024, 512, 256, (s, l, u, c) => {
          ((t.fillStyle = "#2a2c24"),
            t.fillRect(s, l, u, c),
            i(
              "DANGER  415 V",
              s + u / 2,
              l + 40,
              34,
              "#e8c020",
              "Arial",
              "900",
            ));
          for (let M = 0; M < 4; M++)
            ((t.fillStyle = "#111"),
              t.beginPath(),
              t.arc(s + 80 + M * 110, l + 140, 34, 0, 7),
              t.fill(),
              (t.strokeStyle = "#888"),
              (t.lineWidth = 3),
              t.stroke());
          ((t.fillStyle = "#6a6a60"), t.fillRect(s + 40, l + 200, u - 80, 26));
        }),
          w("crate", 1536, 1024, 512, 256, (s, l, u, c) => {
            ((t.fillStyle = "#4a5030"),
              t.fillRect(s, l, u, c),
              i(
                "RATIONS  24 x 1",
                s + u / 2,
                l + 90,
                46,
                "#d8cc90",
                "Consolas, monospace",
                "700",
              ),
              i(
                "LOT 0417  -  ARMY",
                s + u / 2,
                l + 160,
                34,
                "#d8cc90",
                "Consolas, monospace",
                "700",
              ),
              f(s, l, u, c, 0.8));
          }),
          w("keepOff", 1024, 1280, 512, 128, (s, l, u, c) => {
            ((t.fillStyle = "#1e3a2a"),
              t.fillRect(s, l, u, c),
              (t.strokeStyle = "#d8d0b0"),
              (t.lineWidth = 6),
              t.strokeRect(s + 8, l + 8, u - 16, c - 16),
              i(
                "PLEASE KEEP OFF THE GRASS",
                s + u / 2,
                l + c / 2,
                34,
                "#e0d8b8",
                "Georgia, serif",
                "700",
              ),
              f(s, l, u, c, 0.6));
          }),
          w("playSign", 1536, 1280, 512, 128, (s, l, u, c) => {
            ((t.fillStyle = "#1e3a2a"),
              t.fillRect(s, l, u, c),
              i(
                "CHILDREN’S PLAYGROUND",
                s + u / 2,
                l + 44,
                36,
                "#e0d8b8",
                "Georgia, serif",
                "700",
              ),
              i(
                "NO DOGS",
                s + u / 2,
                l + 92,
                28,
                "#e0d8b8",
                "Georgia, serif",
                "700",
              ),
              f(s, l, u, c, 0.6));
          }));
      }),
      rect: e,
    }),
    ce
  );
}
function Me() {
  if (de) return de;
  const e = {};
  return (
    (de = {
      tex: ye(
        1024,
        1024,
        (t) => {
          (t.clearRect(0, 0, 1024, 1024),
            (t.strokeStyle = "#ffffff"),
            (t.fillStyle = "#ffffff"),
            (t.lineCap = "round"));
          {
            ((t.lineWidth = 14),
              t.beginPath(),
              t.moveTo(0, 16),
              t.lineTo(1024, 16),
              t.moveTo(0, 150),
              t.lineTo(1024, 150),
              t.stroke());
            for (let n = 0; n < 8; n++) {
              const i = 64 + n * 128;
              ((t.lineWidth = 10),
                t.beginPath(),
                t.arc(i, 83, 52, 0, Math.PI * 2),
                t.stroke(),
                t.beginPath(),
                t.arc(i, 83, 22, 0, Math.PI * 2),
                t.stroke(),
                (t.lineWidth = 8),
                t.beginPath(),
                t.moveTo(i + 64, 20),
                t.quadraticCurveTo(i + 40, 83, i + 64, 146),
                t.stroke());
              for (let f = 0; f < 4; f++) {
                const w = i - 48 + f * 32;
                (t.beginPath(),
                  t.moveTo(w - 12, 150),
                  t.lineTo(w, 210),
                  t.lineTo(w + 12, 150),
                  t.fill());
              }
            }
            e.frieze = ae(0, 0, 1024, 256, 1024, 1024);
          }
          {
            ((t.lineWidth = 18),
              t.beginPath(),
              t.moveTo(0, 270),
              t.lineTo(1024, 270),
              t.moveTo(0, 496),
              t.lineTo(1024, 496),
              t.stroke());
            for (let n = 0; n < 16; n++) {
              const i = 32 + n * 64;
              ((t.lineWidth = 9),
                t.beginPath(),
                t.moveTo(i, 270),
                t.lineTo(i, 496),
                t.stroke(),
                (t.lineWidth = 7),
                t.beginPath(),
                t.arc(i, 383, 16, 0, Math.PI * 2),
                t.stroke());
            }
            e.balustrade = ae(0, 256, 1024, 256, 1024, 1024);
          }
          {
            t.lineWidth = 3;
            for (let n = 0; n <= 17; n++) {
              const i = 4 + n * 29.647058823529413;
              (t.beginPath(), t.moveTo(i, 512), t.lineTo(i, 1024), t.stroke());
            }
            for (let n = 0; n <= 25; n++) {
              const i = 516 + n * 20.16;
              (t.beginPath(), t.moveTo(0, i), t.lineTo(512, i), t.stroke());
            }
            e.mesh = ae(0, 512, 512, 512, 1024, 1024);
          }
          {
            ((t.lineWidth = 16),
              t.beginPath(),
              t.moveTo(512, 532),
              t.lineTo(1024, 532),
              t.moveTo(512, 992),
              t.lineTo(1024, 992),
              t.stroke());
            for (let n = 0; n < 8; n++) t.fillRect(536 + n * 64, 532, 14, 460);
            e.bars = ae(512, 512, 512, 512, 1024, 1024);
          }
        },
        { srgb: !0 },
      ),
      rect: e,
    }),
    de
  );
}
function Zt(e, a) {
  const t = e.attributes.uv;
  for (let r = 0; r < t.count; r++)
    t.setXY(
      r,
      a[0] + (a[2] - a[0]) * t.getX(r),
      a[1] + (a[3] - a[1]) * t.getY(r),
    );
  return e;
}
const f0 = Math.PI * 2,
  Qa = (e) => e.map(([a, t]) => new _0(a, t)),
  g0 = (e, a = 16) => new Ie(Qa(e), a),
  Xt = (e, a, t, r = 0.008, o = 1) =>
    new Pa(e, a, t, o, Math.min(r, e / 2 - 1e-4, a / 2 - 1e-4, t / 2 - 1e-4)),
  He = (e, a) => e.map((t) => t.clone().applyMatrix4(a));
let A0 = null;
function we(e) {
  if (A0) return A0;
  const a = Gt(
      e.mats.get("church_dressed", { color: 11052186 }),
      "stone",
      (r) => {
        ((r.vertexShader = r.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vSW;
varying vec3 vSN;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vSW = (modelMatrix * vec4(position, 1.0)).xyz; vSN = normalize(mat3(modelMatrix) * normal);`,
          )),
          (r.fragmentShader = r.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vSW;
varying vec3 vSN;`,
            )
            .replace(
              "#include <map_fragment>",
              `#include <map_fragment>
      // (green-black grime rising from the ground, streaks down from the ledges, moss on what faces the sky)
      float gr = 1.0 - smoothstep(0.0, 0.9, vSW.y);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.07, 0.08, 0.05), gr * 0.65);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.1, 0.13, 0.06), smoothstep(0.6, 0.95, vSN.y) * 0.45);
      diffuseColor.rgb *= 0.82 + 0.18 * sin(vSW.x * 3.1 + vSW.z * 2.3) * sin(vSW.y * 9.0);`,
            )));
      },
    ),
    t = Gt(
      new u0({ color: 4877920, roughness: 0.48, metalness: 0.55 }),
      "bronze",
      (r) => {
        ((r.vertexShader = r.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vBN2;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vBN2 = normalize(mat3(modelMatrix) * normal);`,
          )),
          (r.fragmentShader = r.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vBN2;`,
            )
            .replace(
              "#include <map_fragment>",
              `#include <map_fragment>
      // verdigris pale on top, the bronze dark brown where the rain does not reach
      diffuseColor.rgb = mix(vec3(0.09, 0.07, 0.045), vec3(0.32, 0.5, 0.42), smoothstep(-0.4, 0.7, vBN2.y));`,
            )));
      },
    );
  return (
    (A0 = {
      iron: Gt(e.mats.get("iron_black", { color: 6978672 }), "iron"),
      wood: Gt(e.mats.get("wood_oak_pale", { color: 9208436 }), "benchwood"),
      stone: a,
      bronze: t,
      brick: Gt(e.mats.get("ext_brick", { color: 11572356 }), "brick"),
      zinc: qt("zinc", 3160124, { rough: 0.5, metal: 0.7, side: y0 }),
      boards: Gt(e.mats.get("house_plank", { color: 8022616 }), "boards"),
      glassDead: qt("glassdead", 724238, { rough: 0.1, metal: 0.3 }),
      red: qt("playred", 6954006, { rough: 0.55, metal: 0.2 }),
      blue: qt("playblue", 1716312, { rough: 0.55, metal: 0.2 }),
      yellow: qt("playyel", 9071126, { rough: 0.6 }),
      steel: qt("steel", 9343638, { rough: 0.3, metal: 0.9 }),
      rubber: qt("rubber", 789516, { rough: 0.9 }),
      safety: qt("safety", 2758162, { rough: 0.95 }),
      sand: Gt(e.mats.get("garden_gravel", { color: 13152392 }), "sand"),
      cloth: qt("cloth", 2763312, { rough: 0.95 }),
      cloth2: qt("cloth2", 4864554, { rough: 0.95 }),
      blanket: qt("blanket", 4868676, { rough: 1 }),
      paper: Gt(new u0({ map: xe().tex, roughness: 0.85, side: y0 }), "paper"),
      sign: Gt(new u0({ map: xe().tex, roughness: 0.55 }), "sign"),
      lace: (() => {
        const r = Gt(
          new u0({
            map: Me().tex,
            alphaTest: 0.5,
            side: y0,
            color: 5662812,
            roughness: 0.5,
            metalness: 0.6,
          }),
          "lace",
        );
        return (
          (r.userData.depth = new Qe({
            depthPacking: Je,
            map: Me().tex,
            alphaTest: 0.5,
            side: y0,
          })),
          r
        );
      })(),
      blood: Gt(e.mats.get("blood_dark", { color: 5900808 }), "blood", null),
      sheet: Gt(e.mats.get("linen_stained", { color: 10131084 }), "sheet"),
      wool: Gt(e.mats.get("wool_grey", { color: 6974052 }), "wool"),
      woolOlive: Gt(e.mats.get("wool_grey", { color: 6974536 }), "woololive"),
    }),
    (A0.blood.polygonOffset = !0),
    (A0.blood.polygonOffsetFactor = -4),
    (A0.blood.polygonOffsetUnits = -4),
    (A0.blood.userData.noCast = !0),
    (A0.paper.userData.noCast = !0),
    A0
  );
}
function ra(e, { bloodAt: a = 0.3 } = {}) {
  const i = new _t(1.95, 0.86, 40, 18).rotateX(-Math.PI / 2),
    f = i.attributes.position,
    w = (m, F, C) => {
      const L = Math.max(0, Math.min(1, (C - m) / (F - m)));
      return L * L * (3 - 2 * L);
    },
    s = (m, F) => {
      const C =
          0.17 * Math.max(0, 1 - ((m - 0.07) / 0.07) ** 2 - (F / 0.11) ** 2),
        L =
          (m > 0.14 && m < 0.58 ? 1 : 0) *
          0.21 *
          Math.max(0, 1 - (F / (0.23 - 0.05 * w(0.4, 0.58, m))) ** 2) *
          w(0.12, 0.2, m) *
          (1 - 0.25 * w(0.4, 0.55, m)),
        z =
          (m > 0.5 ? 1 : 0) *
          Math.max(0, 1 - ((Math.abs(F) - 0.1) / 0.085) ** 2) *
          (0.13 - 0.05 * w(0.55, 0.92, m)),
        W =
          Math.max(
            0,
            1 - ((m - 0.95) / 0.035) ** 2 - ((Math.abs(F) - 0.11) / 0.06) ** 2,
          ) * 0.2,
        D =
          (m > 0.18 && m < 0.52 ? 1 : 0) *
          Math.max(0, 1 - ((Math.abs(F) - 0.29) / 0.05) ** 2) *
          0.08;
      return Math.max(C, L, z, W, D);
    },
    l = e() * 10;
  for (let m = 0; m < f.count; m++) {
    const F = f.getX(m),
      C = f.getZ(m),
      L = (F + 1.95 / 2) / 1.95;
    let z = 0;
    for (let V = -2; V <= 2; V++)
      z = Math.max(z, s(L, C + V * 0.04) - Math.abs(V) * 0.02);
    const W = w(0.5, 0.36, Math.abs(C)) * w(0, 0.05, L) * w(1, 0.97, L),
      D =
        0.012 * Math.sin(F * 14 + l) * Math.sin(C * 11 - l) +
        0.008 * Math.sin(F * 31 + C * 7);
    f.setY(
      m,
      Math.max(0.012, z * 1.02 + 0.02) * (0.3 + 0.7 * W) + D * W + 0.008,
    );
  }
  i.computeVertexNormals();
  const u = -1.95 / 2 + 1.95 * a,
    c = (e() - 0.5) * 0.15,
    M = 0.22 + e() * 0.12,
    h = i.index.array,
    v = [],
    S = i.attributes.normal;
  for (let m = 0; m < h.length; m += 3) {
    let F = !0;
    for (let C = 0; C < 3; C++) {
      const L = h[m + C],
        z = f.getX(L) - u,
        W = f.getZ(L) - c;
      Math.hypot(z, W * 1.3) >
        M * (0.8 + 0.4 * Math.sin(Math.atan2(W, z) * 5 + l)) && (F = !1);
    }
    F && v.push(h[m], h[m + 1], h[m + 2]);
  }
  const d = i.clone();
  d.setIndex(v);
  const y = d.attributes.position;
  for (let m = 0; m < y.count; m++)
    y.setY(m, y.getY(m) + 0.003 + S.getY(m) * 0.001);
  return { cloth: N(i), blood: v.length ? d : null };
}
function Ja(e, a, t, r, o, n = 32, i = 8) {
  const f = [],
    w = [];
  for (let l = 0; l <= i; l++) {
    const u = l / i,
      c = t + (r - t) * u,
      M = e + (a - e) * u;
    for (let h = 0; h <= n; h++) {
      const v = (h / n) * f0,
        S = M * (1 - 0.09 * Math.pow(Math.max(0, Math.cos(o * v)), 2));
      f.push(Math.sin(v) * S, c, Math.cos(v) * S);
    }
  }
  for (let l = 0; l < i; l++)
    for (let u = 0; u < n; u++) {
      const c = l * (n + 1) + u,
        M = c + n + 1;
      w.push(c, M, c + 1, c + 1, M, M + 1);
    }
  const s = new Q0();
  return (
    s.setAttribute("position", new H0(f, 3)),
    s.setIndex(w),
    s.computeVertexNormals(),
    s
  );
}
function Ba() {
  const e = [],
    a = [];
  (e.push(
    g0(
      [
        [0.001, 0],
        [0.21, 0],
        [0.21, 0.07],
        [0.18, 0.1],
        [0.18, 0.22],
        [0.15, 0.26],
        [0.165, 0.34],
        [0.13, 0.44],
        [0.105, 0.55],
        [0.095, 0.66],
        [0.001, 0.66],
      ],
      16,
    ),
  ),
    e.push(Ja(0.078, 0.06, 0.64, 3.18, 8, 24, 6)),
    e.push(
      g0(
        [
          [0.001, 3.14],
          [0.085, 3.16],
          [0.1, 3.2],
          [0.08, 3.25],
          [0.07, 3.33],
          [0.09, 3.38],
          [0.06, 3.44],
          [0.05, 3.56],
          [0.001, 3.56],
        ],
        12,
      ),
    ),
    e.push(
      new It(0.018, 0.018, 0.66, 8).rotateZ(Math.PI / 2).translate(0, 3.3, 0),
    ));
  for (const f of [-1, 1])
    e.push(new z0(0.035, 8, 6).translate(f * 0.34, 3.3, 0));
  const t = 3.56,
    r = 4.02,
    o = 0.1,
    n = 0.19;
  e.push(new xt(0.24, 0.035, 0.24).translate(0, t, 0));
  for (const [f, w] of [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ])
    e.push(Ht(I(f * o, t, w * o), I(f * n, r, w * n), 0.012, 0.012, 4));
  (e.push(new xt(0.42, 0.03, 0.42).translate(0, r + 0.015, 0)),
    e.push(
      new he(0.3, 0.2, 4, 1).rotateY(Math.PI / 4).translate(0, r + 0.13, 0),
    ),
    e.push(new It(0.035, 0.05, 0.08, 8).translate(0, r + 0.27, 0)),
    e.push(new z0(0.04, 8, 6).translate(0, r + 0.33, 0)),
    e.push(new he(0.015, 0.1, 6).translate(0, r + 0.41, 0)),
    a.push(
      new It(n * 1.36, o * 1.36, r - t - 0.02, 4, 1, !0)
        .rotateY(Math.PI / 4)
        .translate(0, (t + r) / 2, 0),
    ));
  const i = new It(0.035, 0.035, 0.22, 8).translate(0, (t + r) / 2 + 0.02, 0);
  return { iron: e, glass: a, bulb: i, glassY: (t + r) / 2 };
}
function to() {
  const e = [],
    a = [];
  for (const t of [-0.8, 0.8]) {
    const r = (o, n) => I(t, n, o);
    (e.push(
      k0([r(0.27, 0), r(0.255, 0.22), r(0.24, 0.44)], [0.024, 0.022, 0.02], 5),
    ),
      e.push(
        k0(
          [
            r(-0.22, 0),
            r(-0.2, 0.24),
            r(-0.2, 0.44),
            r(-0.25, 0.62),
            r(-0.33, 0.86),
          ],
          [0.024, 0.022, 0.021, 0.02, 0.018],
          5,
        ),
      ),
      e.push(
        k0(
          [r(0.28, 0.43), r(0.02, 0.445), r(-0.22, 0.43)],
          [0.018, 0.018, 0.018],
          4,
        ),
      ),
      e.push(
        k0(
          [
            r(-0.25, 0.62),
            r(0, 0.645),
            r(0.21, 0.635),
            r(0.3, 0.6),
            r(0.31, 0.545),
            r(0.27, 0.52),
            r(0.245, 0.55),
          ],
          [0.018, 0.018, 0.017, 0.016, 0.015, 0.014, 0.013],
          5,
        ),
      ));
    for (const o of [0.27, -0.22])
      e.push(new It(0.035, 0.04, 0.025, 8).translate(t, 0.012, o));
  }
  for (let t = 0; t < 4; t++)
    a.push(
      Xt(1.86, 0.028, 0.078, 0.008).translate(0, 0.462, -0.165 + t * 0.122),
    );
  for (let t = 0; t < 3; t++) {
    const r = 0.56 + t * 0.12,
      o = -0.21 + (r - 0.44) * (-0.13 / 0.42) - 0.02;
    a.push(Xt(1.86, 0.075, 0.026, 0.008).rotateX(-0.3).translate(0, r, o));
  }
  return { iron: e, wood: a };
}
function eo() {
  const e = [],
    a = [];
  e.push(
    g0(
      [
        [0.001, 0],
        [0.17, 0],
        [0.17, 0.08],
        [0.2, 0.12],
        [0.2, 0.78],
        [0.225, 0.8],
        [0.225, 0.86],
        [0.19, 0.87],
        [0.19, 0.8],
      ],
      16,
    ),
  );
  for (let t = 0; t < 10; t++) {
    const r = (t / 10) * f0;
    e.push(
      new xt(0.03, 0.6, 0.02)
        .translate(Math.sin(r) * 0.206, 0.45, Math.cos(r) * 0.206)
        .rotateY(0),
    );
  }
  return (
    a.push(new It(0.188, 0.188, 0.02, 16).translate(0, 0.76, 0)),
    { iron: e, dark: a }
  );
}
function ao(e, a, t, r) {
  const o = we(e),
    n = xe(),
    i = Me(),
    f = new P0();
  f.name = "park_furniture";
  const w = [],
    s = [],
    l = [],
    u = [],
    c = [],
    M = (x, p, g, T, G = 1.2, Z = 0, tt = {}) =>
      w.push({ x0: x, x1: p, z0: g, z1: T, y0: Z, y1: G, ...tt }),
    h = (x, p, g, T, G, Z = 1.2) => {
      const tt = Math.abs(Math.cos(G)),
        it = Math.abs(Math.sin(G)),
        et = tt * g + it * T,
        at = it * g + tt * T;
      M(x - et, x + et, p - at, p + at, Z);
    },
    v = (x, p, g, T) => {
      for (const G of He(p, g)) t.add(x, G, T);
    },
    S = Ba(),
    d = [],
    y = (x, p, g = !1, T = {}) => {
      d.push({
        x,
        z: p,
        lit: g,
        dying: !!T.dying,
        yaw: T.yaw ?? a() * f0,
        lean: T.lean ?? 0,
      });
    },
    m = (x, p, g, T = 6, G = 1e9, Z = 0) => {
      const tt = be.find((et) => et.id === x);
      let it = Z ? -1 : 1;
      for (let et = T; et < Math.min(tt.length - 4, G); et += p) {
        const at = re(x, et),
          nt = at.x - at.tz * it * (at.hw + g),
          mt = at.z + at.tx * it * (at.hw + g);
        ((it = -it),
          !(G0(nt, mt) < 2.2) &&
            (d.some((Mt) => Math.hypot(Mt.x - nt, Mt.z - mt) < 9) ||
              ve(nt, mt) ||
              (nt > R0.x0 - 1 && nt < R0.x1 + 1 && mt > 195) ||
              y(nt, mt)));
      }
    };
  (y(439.6, 188.4, !0),
    y(420.4, 188.6, !1),
    y(434.4, 180.2, !0),
    y(427.6, 171, !1),
    y(436.4, 165.4, !1));
  for (const [x, p] of [
    [45, !1],
    [135, !1],
    [-42, !0],
    [-135, !1],
  ]) {
    const g = (x * Math.PI) / 180;
    y(c0.x + Math.cos(g) * 13.4, c0.z + Math.sin(g) * 13.4, p);
  }
  (y(445.4, 134.8, !1),
    y(438.2, 127.8, !0),
    y(406.6, 147.8, !0),
    y(418.6, 183.4, !1, { dying: !0 }),
    y(415.8, 120.6, !0),
    y(470, 152.2, !0),
    y(384, 154.2, !1),
    y(455.4, 186.4, !1),
    y(398.2, 193.4, !0),
    m("crossW", 24, 0.7, 6),
    m("crossE", 24, 0.7, 14, 1e9, 1),
    m("swPath", 24, 0.7, 30),
    m("sePath", 24, 0.7, 26),
    m("diagNW", 26, 0.7, 30),
    m("north", 26, 0.7, 8),
    m("east", 26, 0.7, 26),
    m("statueW", 24, 0.7, 14));
  const F = new u0({
      color: 1313798,
      emissive: new Vt(1, 0.52, 0.16),
      emissiveIntensity: 5.5,
      roughness: 0.25,
      fog: !1,
    }),
    C = new Float32Array(64).fill(1);
  ((F.onBeforeCompile = (x) => {
    ((x.uniforms.uLampK = { value: C }),
      (x.vertexShader = x.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute float aLamp;
varying float vLamp;`,
        )
        .replace(
          "#include <uv_vertex>",
          `#include <uv_vertex>
vLamp = aLamp;`,
        )),
      (x.fragmentShader = x.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
uniform float uLampK[64];
varying float vLamp;`,
        )
        .replace(
          "#include <emissivemap_fragment>",
          `#include <emissivemap_fragment>
totalEmissiveRadiance *= uLampK[int(vLamp + 0.5)];`,
        )));
  }),
    (F.customProgramCacheKey = () => "park3_lampglass"));
  const L = [],
    z = [],
    W = new Vt(1, 0.56, 0.2);
  let D = 0;
  for (const x of d) {
    const p = Yt(x.x, 0, x.z, x.yaw, x.lean, 0),
      g = i0(x.x, x.z);
    if ((v(o.iron, S.iron, p, g), x.lit || x.dying)) {
      const T = D++;
      x.chan = T;
      for (const tt of [...S.glass, S.bulb]) {
        const it = tt.clone().applyMatrix4(p);
        (it.setAttribute(
          "aLamp",
          new $t(new Float32Array(it.attributes.position.count).fill(T), 1),
        ),
          N(it),
          L.push(it));
      }
      const G = new a0(0, S.glassY, 0).applyMatrix4(p);
      ((x.glow = r.add(
        [G.x, G.y, G.z],
        W.clone().multiplyScalar(1.1),
        1.7,
        1 + T,
      )),
        (x.pos = G));
      const Z = x.dying
        ? (tt) => {
            const it = (tt * 0.11) % 1;
            return it < 0.62
              ? 1
              : it < 0.7
                ? 1 - ((it - 0.62) / 0.08) * 0.92
                : it < 0.9
                  ? 0.08 + 0.04 * Math.sin(tt * 9)
                  : Math.min(1, 0.08 + ((it - 0.9) / 0.1) * 1.6) *
                    (0.75 + 0.25 * Math.sin(tt * 40));
          }
        : () => 1;
      ((x.k = Z),
        l.push({
          pos: G.clone().add(I(0, -0.1, 0)),
          color: new Vt(1, 0.6, 0.26),
          cd: 58,
          range: 13,
          k: (tt) => C[T] * (x.on === !1 ? 0 : 1),
          air: 1.6,
          airK: 1,
          kind: "lamp",
          lamp: x,
        }),
        u.push([x.x, x.z, 0.9, 0.6]));
    } else for (const T of S.glass) z.push(N(T.clone().applyMatrix4(p)));
    s.push({ x: x.x, z: x.z, r: 0.2, lamp: !0 });
  }
  if (L.length) {
    const x = new jt(v0(L), F);
    ((x.name = "park_lamps_lit"), (x.castShadow = !1), f.add(x));
  }
  if (z.length) for (const x of z) t.add(o.glassDead, x, "all");
  c.push((x, p) => {
    for (const g of d)
      if (g.chan != null) {
        const T = g.on === !1 ? 0 : g.k(p);
        ((C[g.chan] = T), (r.K[1 + g.chan] = T));
      }
  });
  const V = to(),
    A = eo(),
    K = [],
    J = (x, p, g, T = {}) => {
      K.push({ x, z: p, yaw: g, ...T });
    },
    q = (x, p, g, T = 1.25, G = {}) => {
      const Z = re(x, p),
        tt = -Z.tz * g,
        it = Z.tx * g,
        et = Z.x + tt * (Z.hw + T),
        at = Z.z + it * (Z.hw + T);
      J(et, at, Math.atan2(-tt, -it), G);
    };
  (q("avenue", 8.5, -1),
    q("avenue", 18.5, 1, 1.25, { bin: !0 }),
    q("avenue", 28.5, -1, 1.25, { fallen: !0 }));
  for (const x of [20, 70, 110, 160, 200, 250, 290, 340]) {
    if (x === 340 || x === 20) continue;
    const p = (x * Math.PI) / 180,
      g = 11.4,
      T = c0.x + Math.cos(p) * g,
      G = c0.z + Math.sin(p) * g;
    G0(T, G) < 2.5 ||
      J(T, G, Math.atan2(c0.x - T, c0.z - G), { bin: x === 160 });
  }
  (q("avenueN", 6, 1, 0.5),
    q("crossW", 30, -1, 1.2, { bin: !0 }),
    q("crossW", 54, 1),
    q("crossE", 24, 1, 1.2, { bin: !0 }),
    q("crossE", 52, -1, 1.2, { fallen: !0 }),
    q("swPath", 18, -1, 1.2, { bin: !0 }),
    q("swPath", 44, 1),
    q("sePath", 22, 1, 1.2, { bin: !0 }),
    q("sePath", 50, -1),
    q("sePath", 74, 1),
    q("diagNW", 40, 1),
    q("diagNW", 70, -1, 1.2, { bin: !0 }),
    q("statueW", 30, 1),
    q("north", 50, 1),
    q("east", 50, -1),
    J(415.6, 172, -Math.PI / 2, { bin: !0 }),
    J(415.6, 179, -Math.PI / 2),
    J(Z0.x0 + 2, (Z0.z0 + Z0.z1) / 2, Math.PI / 2),
    J((F0.x0 + F0.x1) / 2, F0.z0 + 2, 0),
    J((F0.x0 + F0.x1) / 2, F0.z1 - 2, Math.PI));
  for (const x of K) {
    if (G0(x.x, x.z) < 2) continue;
    const p = i0(x.x, x.z),
      g = x.fallen
        ? Yt(x.x, 0.32, x.z, x.yaw + 0.2, -Math.PI / 2 + 0.05, 0.08).multiply(
            new gt().makeTranslation(0, 0, -0.1),
          )
        : Yt(x.x, 0, x.z, x.yaw);
    if (
      (v(o.iron, V.iron, g, p),
      v(o.wood, V.wood, g, p),
      h(x.x, x.z, 0.95, 0.35, x.yaw, x.fallen ? 0.6 : 0.9),
      u.push([
        x.x + Math.sin(x.yaw) * 0.8,
        x.z + Math.cos(x.yaw) * 0.8,
        1.3,
        0.75,
      ]),
      x.bin)
    ) {
      const G = x.x + Math.cos(x.yaw) * 1.35,
        Z = x.z - Math.sin(x.yaw) * 1.35,
        tt = a() < 0.35,
        it = tt
          ? Yt(G, 0.22, Z, a() * f0, Math.PI / 2, 0)
          : Yt(G, 0, Z, a() * f0);
      (v(o.iron, A.iron, it, p),
        v(o.rubber, A.dark, it, p),
        tt || s.push({ x: G, z: Z, r: 0.26, bin: !0 }));
      for (let et = 0; et < (tt ? 7 : 2); et++) {
        const at = a() * f0,
          nt = 0.3 + a() * (tt ? 1.6 : 0.6);
        st(G + Math.cos(at) * nt, Z + Math.sin(at) * nt, p);
      }
    }
  }
  function st(x, p, g, T = 0.21 + a() * 0.08) {
    const G = new _t(T, T * 1.3)
      .rotateX(-Math.PI / 2 + (a() - 0.5) * 0.25)
      .rotateY(a() * f0);
    Zt(G, n.rect["paper" + Math.floor(a() * 8)]);
    const Z = G.attributes.position;
    for (let tt = 0; tt < Z.count; tt++)
      Z.setY(
        tt,
        Z.getY(tt) + 0.012 + Math.abs(Z.getX(tt) * Z.getZ(tt)) * 1.5 * a(),
      );
    t.add(o.paper, G.translate(x, 0.004, p), g);
  }
  {
    const x = Jt,
      p = [],
      g = (P, $, lt) => P.push([$, lt]),
      T = [],
      G = [],
      Z = [],
      tt = [];
    (g(T, x.x0, R0.x0 - 0.45),
      g(T, R0.x1 + 0.45, Nt.breach[0] - 2.4),
      g(T, Nt.breach[0] + 2.4, x.x1));
    const it = _a,
      et = (P, $, lt) => {
        const ft = [];
        let Pt = P;
        for (const Wt of lt.sort((Dt, e0) => Dt.at - e0.at))
          (ft.push([Pt, Wt.at - Wt.w / 2]), (Pt = Wt.at + Wt.w / 2));
        return (ft.push([Pt, $]), ft);
      };
    (G.push(
      ...et(
        x.x0,
        x.x1,
        it.filter((P) => P.axis === "z").map((P) => ({ at: P.x, w: P.w })),
      ),
    ),
      Z.push(
        ...et(
          x.z0,
          x.z1,
          it
            .filter((P) => P.axis === "x" && P.x === x.x0)
            .map((P) => ({ at: P.z, w: P.w })),
        ),
      ),
      tt.push(
        ...et(
          x.z0,
          x.z1,
          it
            .filter((P) => P.axis === "x" && P.x === x.x1)
            .map((P) => ({ at: P.z, w: P.w })),
        ),
      ));
    for (const [P, $] of T) p.push({ x0: P, z0: x.z1, x1: $, z1: x.z1 });
    for (const [P, $] of G) p.push({ x0: P, z0: x.z0, x1: $, z1: x.z0 });
    for (const [P, $] of Z) p.push({ x0: x.x0, z0: P, x1: x.x0, z1: $ });
    for (const [P, $] of tt) p.push({ x0: x.x1, z0: P, x1: x.x1, z1: $ });
    const at = v0(
        [
          new It(0.012, 0.012, 1.42, 4, 1, !0)
            .rotateY(Math.PI / 4)
            .translate(0, 0.32 + 0.71, 0),
          new he(0.03, 0.12, 3).translate(0, 1.74 + 0.06, 0),
        ].map(
          (P) => (
            P.deleteAttribute("uv"),
            P.setAttribute(
              "uv",
              new $t(new Float32Array(P.attributes.position.count * 2), 2),
            ),
            P
          ),
        ),
      ),
      nt = [];
    for (const P of p) {
      const $ = Math.hypot(P.x1 - P.x0, P.z1 - P.z0);
      if ($ < 0.3) continue;
      const lt = (P.x1 - P.x0) / $,
        ft = (P.z1 - P.z0) / $,
        Pt = Math.floor($ / 0.125);
      for (let O = 1; O < Pt; O++)
        nt.push([P.x0 + lt * O * 0.125, P.z0 + ft * O * 0.125]);
      const Wt = (P.x0 + P.x1) / 2,
        Dt = (P.z0 + P.z1) / 2,
        e0 = Math.atan2(ft, lt),
        n0 = i0(Wt, Dt);
      (t.add(
        o.stone,
        N(new xt($, 0.32, 0.4).rotateY(-e0).translate(Wt, 0.16, Dt)),
        n0,
      ),
        t.add(
          o.stone,
          N(new xt($, 0.05, 0.48).rotateY(-e0).translate(Wt, 0.345, Dt)),
          n0,
        ));
      for (const O of [0.5, 1.58])
        t.add(
          o.iron,
          N(new xt($, 0.045, 0.014).rotateY(-e0).translate(Wt, O, Dt)),
          n0,
        );
      const s0 = Math.max(1, Math.round($ / 22));
      for (let O = 0; O <= s0; O++) {
        const ht = O / s0,
          U = P.x0 + (P.x1 - P.x0) * ht,
          vt = P.z0 + (P.z1 - P.z0) * ht;
        for (const ct of [
          new xt(0.56, 1.9, 0.56).translate(U, 0.95, vt),
          new xt(0.68, 0.12, 0.68).translate(U, 1.96, vt),
          new xt(0.42, 0.14, 0.42).translate(U, 2.08, vt),
        ])
          t.add(o.stone, N(ct), i0(U, vt));
      }
      const k = 0.22;
      M(
        Math.min(P.x0, P.x1) - k,
        Math.max(P.x0, P.x1) + k,
        Math.min(P.z0, P.z1) - k,
        Math.max(P.z0, P.z1) + k,
        1.9,
        0,
        { rail: !0 },
      );
    }
    const mt = new U0(at, o.iron, nt.length);
    mt.name = "park_railing_bars";
    const Mt = new gt(),
      Ft = new C0(),
      wt = new a0(1, 1, 1),
      Et = new a0();
    (nt.forEach(([P, $], lt) => {
      const ft = a() < 0.03 ? (a() - 0.5) * 0.12 : 0;
      (Ft.setFromEuler(new q0(ft, a() * 0.4, ft * 0.6)),
        mt.setMatrixAt(lt, Mt.compose(Et.set(P, 0, $), Ft, wt)));
    }),
      (mt.castShadow = !1),
      (mt.receiveShadow = !0),
      (mt.frustumCulled = !1),
      f.add(mt));
    for (const P of it) {
      const $ = P.axis === "z";
      for (const lt of [-1, 1]) {
        const ft = $ ? P.x + lt * (P.w / 2 + 0.38) : P.x,
          Pt = $ ? P.z : P.z + lt * (P.w / 2 + 0.38);
        for (const Rt of [
          new xt(0.76, 2.4, 0.76).translate(ft, 1.2, Pt),
          new xt(0.9, 0.14, 0.9).translate(ft, 2.47, Pt),
          new z0(0.26, 14, 10).translate(ft, 2.8, Pt),
        ])
          t.add(o.stone, N(Rt), i0(ft, Pt));
        M(ft - 0.4, ft + 0.4, Pt - 0.4, Pt + 0.4, 2.4);
        const Wt = $ ? P.x + (lt * P.w) / 2 : P.x,
          Dt = $ ? P.z : P.z + (lt * P.w) / 2,
          e0 = $ ? (P.z < 100 ? 1 : -1) : P.x < 400 ? 1 : -1,
          n0 = P.w / 2 - 0.05,
          s0 = [];
        for (const Rt of [0.15, 0.95, 1.85])
          s0.push(new xt(n0, 0.05, 0.03).translate(-n0 / 2, Rt, 0));
        for (let Rt = 0; Rt <= Math.floor(n0 / 0.12); Rt++)
          (s0.push(new xt(0.02, 1.8, 0.02).translate(-Rt * 0.12 - 0.03, 1, 0)),
            s0.push(
              new he(0.03, 0.12, 4).translate(-Rt * 0.12 - 0.03, 1.96, 0),
            ));
        const k = $ ? -lt : 0,
          O = $ ? 0 : -lt,
          ht = $ ? 0 : e0,
          U = $ ? e0 : 0,
          vt = ((95 + a() * 25) * Math.PI) / 180,
          ct = k * Math.cos(vt) + ht * Math.sin(vt),
          pt = O * Math.cos(vt) + U * Math.sin(vt),
          bt = a() < 0.4 ? 0.1 : 0,
          Ot = Yt(Wt, 0, Dt, Math.atan2(pt, -ct), 0, bt);
        for (const Rt of s0) t.add(o.iron, N(Rt.applyMatrix4(Ot)), i0(Wt, Dt));
      }
    }
    {
      const [P, $] = Nt.breach;
      for (let lt = 0; lt < 9; lt++) {
        const ft = at.clone();
        (ft.applyMatrix4(
          Yt(
            P + (a() - 0.5) * 4,
            0.05,
            $ - 0.6 - a() * 2.5,
            a() * f0,
            (Math.PI / 2) * (0.7 + a() * 0.3),
            (a() - 0.5) * 0.6,
          ),
        ),
          t.add(o.iron, ft, "se"));
      }
      for (let lt = 0; lt < 7; lt++)
        t.add(
          o.stone,
          N(
            Xt(0.3 + a() * 0.4, 0.15 + a() * 0.2, 0.25 + a() * 0.3, 0.04)
              .rotateY(a() * f0)
              .translate(P + (a() - 0.5) * 4.5, 0.1, $ - 0.2 - a() * 1.5),
          ),
          "se",
        );
    }
  }
  {
    const { x, z: p, r: g } = c0,
      T = i0(x, p);
    (t.add(
      o.stone,
      N(
        g0(
          [
            [g - 0.05, 0],
            [g, 0.04],
            [g, 0.42],
            [g + 0.08, 0.46],
            [g + 0.08, 0.56],
            [g - 0.02, 0.62],
            [g - 0.36, 0.62],
            [g - 0.44, 0.56],
            [g - 0.42, 0.5],
            [g - 0.42, 0.14],
            [g - 0.5, 0.12],
            [0.001, 0.12],
          ],
          80,
        ).translate(x, 0, p),
      ),
      T,
    ),
      t.add(
        o.stone,
        N(
          g0(
            [
              [0.001, 0.12],
              [1.05, 0.12],
              [1.05, 0.36],
              [0.9, 0.44],
              [0.62, 0.52],
              [0.44, 0.64],
              [0.37, 0.9],
              [0.33, 1.14],
              [0.5, 1.24],
              [1.5, 1.36],
              [1.95, 1.48],
              [2.02, 1.58],
              [1.94, 1.64],
              [1.42, 1.58],
              [0.52, 1.5],
              [0.27, 1.6],
              [0.23, 1.9],
              [0.21, 2.18],
              [0.3, 2.28],
              [0.86, 2.4],
              [0.96, 2.48],
              [0.9, 2.54],
              [0.3, 2.5],
              [0.17, 2.58],
              [0.15, 2.78],
              [0.21, 2.9],
              [0.23, 3.04],
              [0.16, 3.2],
              [0.07, 3.32],
              [0.001, 3.38],
            ],
            44,
          ).translate(x, 0, p),
        ),
        T,
      ));
    for (let tt = 0; tt < 4; tt++) {
      const it = (tt * Math.PI) / 2 + Math.PI / 4;
      t.add(
        o.stone,
        N(
          new z0(0.16, 10, 8)
            .scale(1, 1.1, 0.8)
            .translate(x + Math.cos(it) * 0.98, 0.62, p + Math.sin(it) * 0.98),
        ),
        T,
      );
    }
    const G = new j0(g - 0.46, 64).rotateX(-Math.PI / 2).translate(x, 0.125, p),
      Z = qt("fountainwater", 329223, { rough: 0.04, metal: 0 });
    ((Z.userData.noCast = !0), t.add(Z, N(G), T));
    for (let tt = 0; tt < 40; tt++) {
      const it = a() * f0,
        et = 1.2 + a() * (g - 1.8);
      st(x + Math.cos(it) * et, p + Math.sin(it) * et, T, 0.12 + a() * 0.08);
    }
    s.push({ x, z: p, r: g + 0.12, fountain: !0 });
  }
  {
    const { x, z: p, r: g } = I0,
      T = i0(x, p),
      G = 0.95,
      Z = Math.PI / 8;
    (t.add(
      o.brick,
      N(
        new It(g, g + 0.04, G - 0.12, 8)
          .rotateY(Z)
          .translate(x, (G - 0.12) / 2, p),
      ),
      T,
    ),
      t.add(
        o.stone,
        N(
          new It(g + 0.14, g + 0.14, 0.12, 8)
            .rotateY(Z)
            .translate(x, G - 0.06, p),
        ),
        T,
      ),
      t.add(
        o.stone,
        N(new It(g + 0.1, g + 0.12, 0.14, 8).rotateY(Z).translate(x, 0.07, p)),
        T,
      ),
      t.add(
        o.boards,
        N(
          new It(g - 0.02, g - 0.02, 0.02, 8)
            .rotateY(Z)
            .translate(x, G + 0.01, p),
        ),
        T,
      ));
    const tt = g * Math.cos(Z);
    for (let et = 0; et < 4; et++)
      t.add(
        o.stone,
        N(
          new xt(2.6, 0.24 * (et + 1) - 0.01, 0.32).translate(
            x,
            (0.24 * (et + 1)) / 2,
            p + tt + 0.16 + (3 - et) * 0.32,
          ),
        ),
        T,
      );
    for (const et of [-1, 1])
      t.add(
        o.stone,
        N(new xt(0.3, 1.05, 1.45).translate(x + et * 1.45, 0.52, p + tt + 0.7)),
        T,
      );
    const it = (et) => {
      const at = (et * f0) / 8 + Z;
      return [x + Math.sin(at) * (g - 0.28), p + Math.cos(at) * (g - 0.28)];
    };
    for (let et = 0; et < 8; et++) {
      const [at, nt] = it(et);
      t.add(
        o.iron,
        N(
          g0(
            [
              [0.001, 0],
              [0.12, 0],
              [0.12, 0.08],
              [0.085, 0.14],
              [0.07, 0.3],
              [0.062, 2.5],
              [0.09, 2.6],
              [0.13, 2.72],
              [0.13, 2.78],
              [0.001, 2.78],
            ],
            12,
          ).translate(at, G, nt),
        ),
        T,
      );
      const [mt, Mt] = it(et + 1),
        Ft = (at + mt) / 2,
        wt = (nt + Mt) / 2,
        Et = Math.hypot(mt - at, Mt - nt),
        P = Math.atan2(Mt - nt, mt - at),
        $ = Zt(new _t(Et - 0.1, 0.5), i.rect.frieze);
      if (
        (t.add(o.lace, $.rotateY(-P).translate(Ft, G + 2.45, wt), T),
        !(Math.cos(Math.atan2(wt - p, Ft - x) - Math.PI / 2) > 0.95))
      ) {
        const ft = Zt(new _t(Et - 0.12, 0.92), i.rect.balustrade);
        (t.add(o.lace, ft.rotateY(-P).translate(Ft, G + 0.47, wt), T),
          t.add(
            o.iron,
            N(
              new xt(Et - 0.1, 0.05, 0.07)
                .rotateY(-P)
                .translate(Ft, G + 0.95, wt),
            ),
            T,
          ));
      }
    }
    (t.add(
      o.zinc,
      N(
        g0(
          [
            [g + 0.42, G + 2.78],
            [g + 0.3, G + 2.88],
            [g * 0.86, G + 3.14],
            [g * 0.62, G + 3.6],
            [g * 0.4, G + 4.2],
            [g * 0.2, G + 4.75],
            [0.18, G + 5.1],
            [0.001, G + 5.2],
          ],
          8,
        )
          .rotateY(Z)
          .translate(x, 0, p),
      ),
      T,
    ),
      t.add(
        o.boards,
        N(
          new It(g + 0.42, g + 0.42, 0.22, 8, 1, !0)
            .rotateY(Z)
            .translate(x, G + 2.68, p),
        ),
        T,
      ),
      t.add(
        o.boards,
        N(
          new j0(g + 0.4, 8)
            .rotateX(Math.PI / 2)
            .rotateY(Z)
            .translate(x, G + 2.79, p),
        ),
        T,
      ),
      t.add(
        o.iron,
        N(
          g0(
            [
              [0.001, 0],
              [0.08, 0],
              [0.05, 0.2],
              [0.09, 0.32],
              [0.04, 0.45],
              [0.012, 0.9],
              [0.001, 0.92],
            ],
            10,
          ).translate(x, G + 5.15, p),
        ),
        T,
      ));
    for (let et = 0; et < 3; et++) {
      const at = a() * f0,
        nt = a() * 3;
      t.add(
        o.iron,
        Ht(
          I(x + Math.cos(at) * nt, G + 0.03, p + Math.sin(at) * nt),
          I(
            x + Math.cos(at) * nt + 1 * Math.cos(at + 1),
            G + 0.06,
            p + Math.sin(at) * nt + 1 * Math.sin(at + 1),
          ),
          0.012,
          0.01,
          5,
        ),
        T,
      );
    }
    for (let et = 0; et < 12; et++) {
      const at = a() * f0,
        nt = a() * (g - 0.6),
        mt = new _t(0.22, 0.3).rotateX(-Math.PI / 2).rotateY(a() * f0);
      (Zt(mt, n.rect["paper" + (et % 8)]),
        t.add(
          o.paper,
          mt.translate(x + Math.cos(at) * nt, G + 0.025, p + Math.sin(at) * nt),
          T,
        ));
    }
    (s.push({ x, z: p, r: g * 0.96, bandstand: !0 }),
      M(x - 1.6, x + 1.6, p + tt, p + tt + 1.5, 0.9));
  }
  {
    const { x, z: p } = L0,
      g = i0(x, p),
      T = Math.atan2(c0.x - x, c0.z - p),
      G = Yt(x, 0, p, T),
      Z = [
        Xt(2.7, 0.32, 2.7, 0.03).translate(0, 0.16, 0),
        Xt(2.2, 0.3, 2.2, 0.03).translate(0, 0.47, 0),
        Xt(1.5, 0.22, 1.5, 0.03).translate(0, 0.73, 0),
        Xt(1.26, 1.5, 1.26, 0.02).translate(0, 1.58, 0),
        Xt(1.5, 0.18, 1.5, 0.03).translate(0, 2.42, 0),
        Xt(1.2, 0.2, 1.2, 0.03).translate(0, 2.6, 0),
      ];
    for (const nt of He(Z, G)) t.add(o.stone, N(nt), g);
    {
      const nt = Zt(new _t(1, 0.125), n.rect.plaque);
      (nt.scale(1, 1, 1),
        t.add(
          o.sign,
          nt.applyMatrix4(
            G.clone().multiply(new gt().makeTranslation(0, 1.72, 0.632)),
          ),
          g,
        ));
    }
    const tt = [],
      it = 1.3,
      et = 2.7,
      at = g0(
        [
          [0.001, 0],
          [0.44, 0],
          [0.46, 0.06],
          [0.4, 0.4],
          [0.33, 0.8],
          [0.27, 0.98],
          [0.25, 1.1],
          [0.27, 1.22],
          [0.28, 1.32],
          [0.22, 1.42],
          [0.09, 1.47],
          [0.07, 1.53],
          [0.001, 1.53],
        ],
        28,
      );
    {
      const nt = at.attributes.position;
      for (let mt = 0; mt < nt.count; mt++) {
        const Mt = nt.getX(mt),
          Ft = nt.getZ(mt),
          wt = nt.getY(mt),
          Et = Math.atan2(Ft, Mt),
          P = 1 + 0.07 * Math.sin(Et * 9 + wt * 2) * Math.max(0, 1 - wt / 1.1);
        (nt.setX(mt, Mt * P), nt.setZ(mt, Ft * P * 0.86));
      }
      at.computeVertexNormals();
    }
    (tt.push(at),
      tt.push(
        new z0(0.115, 16, 12).scale(1, 1.15, 1.05).translate(0, 1.66, 0.01),
      ),
      tt.push(new z0(0.075, 10, 8).translate(0, 1.72, -0.09)),
      tt.push(
        k0(
          [
            I(0.2, 1.4, 0),
            I(0.3, 1.62, 0.03),
            I(0.32, 1.86, 0.05),
            I(0.31, 2.06, 0.06),
          ],
          [0.06, 0.05, 0.045, 0.04],
          8,
        ),
      ),
      tt.push(new It(0.035, 0.045, 0.36, 10).translate(0.31, 2.2, 0.06)),
      tt.push(
        g0(
          [
            [0.001, 0],
            [0.09, 0.02],
            [0.12, 0.1],
            [0.08, 0.2],
            [0.04, 0.32],
            [0.001, 0.38],
          ],
          10,
        ).translate(0.31, 2.36, 0.06),
      ),
      tt.push(
        k0(
          [I(-0.2, 1.4, 0), I(-0.29, 1.15, 0.08), I(-0.24, 0.94, 0.2)],
          [0.055, 0.047, 0.04],
          8,
        ),
      ),
      tt.push(
        new pe(0.17, 0.035, 8, 20)
          .rotateX(Math.PI / 2 - 0.4)
          .translate(-0.24, 0.84, 0.3),
      ));
    for (const nt of tt)
      t.add(
        o.bronze,
        N(
          nt
            .applyMatrix4(new gt().makeScale(it, it, it))
            .applyMatrix4(
              G.clone().multiply(new gt().makeTranslation(0, et, 0)),
            ),
        ),
        g,
      );
    s.push({ x, z: p, r: 1.45, statue: !0 });
  }
  let j = null;
  {
    const x = ta,
      p = "sw",
      g = (P, $, lt = 0.035, ft = o.red) =>
        t.add(ft, N(Ht(P, $, lt, lt, 10)), p);
    (t.add(
      o.safety,
      N(new _t(6.6, 6.2).rotateX(-Math.PI / 2).translate(405, 0.03, 170.6)),
      p,
    ),
      t.add(
        o.safety,
        N(new _t(6.2, 4.2).rotateX(-Math.PI / 2).translate(400.6, 0.03, 181.2)),
        p,
      ));
    for (const [P, $, lt, ft] of [
      [403.2, 179.6, 408.6, 179.8],
      [403.2, 183.6, 408.6, 183.8],
      [403.2, 179.6, 403.4, 183.8],
      [408.4, 179.6, 408.6, 183.8],
    ])
      t.add(
        o.wood,
        N(
          new xt(lt - P, 0.28, ft - $).translate(
            (P + lt) / 2,
            0.14,
            ($ + ft) / 2,
          ),
        ),
        p,
      );
    (t.add(
      o.sand,
      N(new _t(5, 3.8).rotateX(-Math.PI / 2).translate(405.9, 0.16, 181.7)),
      p,
    ),
      M(403.2, 408.6, 179.6, 183.8, 0.28));
    const T = 402.4,
      G = 407.6,
      Z = 170.6,
      tt = 2.45;
    for (const P of [T, G])
      for (const $ of [-1, 1]) g(I(P, 0, Z + $ * 1.1), I(P, tt, Z), 0.045);
    g(I(T - 0.1, tt, Z), I(G + 0.1, tt, Z), 0.05);
    for (const P of [T, G]) M(P - 0.15, P + 0.15, Z - 1.2, Z + 1.2, 2.4);
    const it = (P) => {
      const $ = [];
      for (const lt of [-0.24, 0.24])
        $.push(Ht(I(P + lt, 0, 0), I(P + lt, -1.92, 0), 0.008, 0.008, 5));
      return ($.push(Xt(0.5, 0.04, 0.2, 0.015).translate(P, -1.94, 0)), $);
    };
    {
      const P = v0(it(403.8).map(($) => N($.translate(0, tt, Z))));
      t.add(o.steel, P, p);
    }
    const et = v0(it(0).map((P) => N(P))),
      at = new jt(et, o.steel);
    ((at.name = "park_swing"),
      (at.castShadow = !0),
      (at.receiveShadow = !0),
      at.position.set(406.2, tt, Z),
      (at.rotation.order = "XYZ"),
      f.add(at),
      (j = {
        mesh: at,
        amp: 0.55,
        target: 0.55,
        ph: 0,
        creakT: 0,
        pos: [406.2, 1, Z],
        dir: 1,
      }));
    const nt = 398.8,
      mt = 181.2,
      Mt = 1.45;
    for (const [P, $] of [
      [-0.45, -0.45],
      [0.45, -0.45],
      [-0.45, 0.45],
      [0.45, 0.45],
    ])
      g(I(nt + P, 0, mt + $), I(nt + P, Mt + 0.9, mt + $), 0.04, o.blue);
    t.add(o.yellow, N(new xt(0.98, 0.06, 0.98).translate(nt, Mt, mt)), p);
    for (const P of [-0.45, 0.45])
      g(
        I(nt - 0.45, Mt + 0.9, mt + P),
        I(nt + 0.45, Mt + 0.9, mt + P),
        0.03,
        o.blue,
      );
    for (let P = 0; P < 5; P++)
      g(
        I(nt - 0.45, 0.3 + P * 0.28, mt - 0.3),
        I(nt - 0.45, 0.3 + P * 0.28, mt + 0.3),
        0.02,
        o.steel,
      );
    {
      const P = [];
      for (let lt = 0; lt <= 10; lt++) {
        const ft = lt / 10,
          Pt = nt + 0.5 + ft * 3,
          Wt = Mt - Math.pow(ft, 1.2) * (Mt - 0.3) + (ft > 0.9, 0);
        P.push([Pt, Wt]);
      }
      for (let lt = 0; lt < 10; lt++) {
        const [ft, Pt] = P[lt],
          [Wt, Dt] = P[lt + 1],
          e0 = Math.hypot(Wt - ft, Dt - Pt),
          n0 = Math.atan2(Dt - Pt, Wt - ft);
        t.add(
          o.steel,
          N(
            new xt(e0, 0.02, 0.5)
              .rotateZ(n0)
              .translate((ft + Wt) / 2, (Pt + Dt) / 2, mt),
          ),
          p,
        );
        for (const s0 of [-1, 1])
          t.add(
            o.steel,
            N(
              new xt(e0, 0.14, 0.02)
                .rotateZ(n0)
                .translate((ft + Wt) / 2, (Pt + Dt) / 2 + 0.07, mt + s0 * 0.25),
            ),
            p,
          );
      }
    }
    M(nt - 0.6, nt + 3.6, mt - 0.6, mt + 0.6, 1.4);
    const Ft = 412.4,
      wt = 181.2;
    for (const P of [-1, 0, 1])
      for (const $ of [-1, 0, 1])
        g(I(Ft + P, 0, wt + $), I(Ft + P, 2, wt + $), 0.025, o.blue);
    for (const P of [0.7, 1.35, 2])
      for (const $ of [-1, 0, 1])
        (g(I(Ft - 1, P, wt + $), I(Ft + 1, P, wt + $), 0.022, o.blue),
          g(I(Ft + $, P, wt - 1), I(Ft + $, P, wt + 1), 0.022, o.blue));
    (M(Ft - 1.1, Ft + 1.1, wt - 1.1, wt + 1.1, 2),
      t.add(o.red, N(new xt(0.3, 0.4, 0.3).translate(398.6, 0.2, 175.6)), p),
      t.add(
        o.wood,
        N(Xt(3.4, 0.07, 0.26, 0.02).rotateZ(0.2).translate(398.6, 0.45, 175.6)),
        p,
      ));
    for (const P of [-1, 1])
      t.add(
        o.steel,
        N(
          Ht(
            I(398.6 + P * 1.4, 0.45 + P * 0.29 + 0.05, 175.45),
            I(398.6 + P * 1.4, 0.45 + P * 0.29 + 0.3, 175.75),
            0.015,
            0.015,
            6,
          ),
        ),
        p,
      );
    (M(396.9, 400.3, 175.4, 175.8, 0.5),
      t.add(o.steel, N(new It(1, 1, 0.06, 28).translate(412.6, 0.3, 174.4)), p),
      g(I(412.6, 0.33, 174.4), I(412.6, 0.92, 174.4), 0.05, o.yellow));
    for (let P = 0; P < 4; P++) {
      const $ = (P * Math.PI) / 2 + 0.3,
        lt = Math.cos($),
        ft = Math.sin($);
      t.add(
        o.yellow,
        k0(
          [
            I(412.6 + lt * 0.06, 0.88, 174.4 + ft * 0.06),
            I(412.6 + lt * 0.55, 0.86, 174.4 + ft * 0.55),
            I(412.6 + lt * 0.86, 0.72, 174.4 + ft * 0.86),
            I(412.6 + lt * 0.9, 0.36, 174.4 + ft * 0.9),
          ],
          [0.022, 0.022, 0.022, 0.022],
          6,
        ),
        p,
      );
    }
    s.push({ x: 412.6, z: 174.4, r: 1.05 });
    const Et = (P, $, lt, ft) => {
      const Pt = Math.hypot(lt - P, ft - $),
        Wt = Math.max(1, Math.round(Pt / 2)),
        Dt = (lt - P) / Pt,
        e0 = (ft - $) / Pt,
        n0 = Math.atan2(e0, Dt);
      for (let s0 = 0; s0 < Wt; s0++) {
        const k = (s0 * Pt) / Wt,
          O = ((s0 + 1) * Pt) / Wt,
          ht = P + (Dt * (k + O)) / 2,
          U = $ + (e0 * (k + O)) / 2,
          vt = Zt(new _t(O - k, 1), i.rect.bars);
        (t.add(o.lace, vt.rotateY(-n0).translate(ht, 0.5, U), p),
          t.add(
            o.iron,
            N(new xt(0.05, 1.08, 0.05).translate(P + Dt * k, 0.54, $ + e0 * k)),
            p,
          ));
      }
      M(
        Math.min(P, lt) - 0.06,
        Math.max(P, lt) + 0.06,
        Math.min($, ft) - 0.06,
        Math.max($, ft) + 0.06,
        1,
      );
    };
    (Et(x.x0, x.z0, x.x1, x.z0),
      Et(x.x0, x.z0, x.x0, x.z1),
      Et(x.x1, x.z0, x.x1, 174),
      Et(x.x1, 177, x.x1, x.z1),
      Et(x.x0, x.z1, 404, x.z1),
      Et(406.8, x.z1, x.x1, x.z1),
      t.add(
        o.lace,
        Zt(new _t(1.5, 1), i.rect.bars)
          .rotateY(-Math.PI / 2 - 1.1)
          .translate(x.x1 + 0.6, 0.5, 174.4),
        p,
      ),
      u.push(
        [405, 176, 2.2, 0.9],
        [416.6, 175.5, 1.6, 0.8],
        [405.4, 185.6, 1.4, 0.8],
      ));
  }
  {
    const x = (T, G, Z, tt, it, et, at, nt = !0) => {
      const mt = i0(T, G),
        Mt = Yt(T, 0, G, Z);
      if (
        (t.add(
          o.sign,
          Zt(new _t(it, et), tt).applyMatrix4(
            Mt.clone().multiply(new gt().makeTranslation(0, at, 0.026)),
          ),
          mt,
        ),
        t.add(
          o.iron,
          N(
            new xt(it + 0.06, et + 0.06, 0.05).applyMatrix4(
              Mt.clone().multiply(new gt().makeTranslation(0, at, 0)),
            ),
          ),
          mt,
        ),
        nt)
      )
        for (const Ft of [-1, 1])
          t.add(
            o.iron,
            N(
              new xt(0.06, at + et / 2, 0.06).applyMatrix4(
                Mt.clone().multiply(
                  new gt().makeTranslation(
                    Ft * (it / 2 - 0.08),
                    (at + et / 2) / 2,
                    -0.03,
                  ),
                ),
              ),
            ),
            mt,
          );
      h(T, G, it / 2 + 0.05, 0.12, Z, at + et / 2);
    };
    x(439.4, 193.6, -0.9, n.rect.map, 1.15, 1.15, 1.35);
    const p = (T, G, Z) => {
      const tt = i0(T, G),
        it = Yt(T, 0, G, Z);
      for (const et of [-1, 1]) {
        const at = et * 0.2,
          nt = it
            .clone()
            .multiply(new gt().makeTranslation(0, 0, et * 0.18))
            .multiply(new gt().makeRotationX(-at));
        (t.add(
          o.sign,
          Zt(new _t(1, 0.5), n.rect.arrowUp).applyMatrix4(
            nt
              .clone()
              .multiply(new gt().makeTranslation(0, 0.72, 0.012 * et))
              .multiply(new gt().makeRotationY(et > 0 ? 0 : Math.PI)),
          ),
          tt,
        ),
          t.add(
            o.wood,
            N(
              new xt(1.04, 1, 0.02).applyMatrix4(
                nt.clone().multiply(new gt().makeTranslation(0, 0.5, 0)),
              ),
            ),
            tt,
          ));
      }
      h(T, G, 0.55, 0.3, Z, 1);
    };
    (p(434.6, 190.8, 0.15),
      p(437.4, 164.2, -0.45),
      p(436.8, 143, -0.35),
      p(441.6, 136.4, -0.4));
    const g = (T, G, Z, tt) => {
      x(T, G, Z, tt, 0.8, 0.2, 0.75);
    };
    (g(424.6, 183.2, 1.2, n.rect.keepOff),
      g(458.6, 152.6, -2.2, n.rect.keepOff),
      g(419.2, 177, 1.57, n.rect.playSign));
  }
  function Y(x, p, g) {
    for (const T of c) T(x, p);
    if (j) {
      const T = j;
      ((T.ph += x * 2.15),
        !T.manual &&
          Math.floor(p / 7.3) !== T.lastPush &&
          ((T.lastPush = Math.floor(p / 7.3)),
          (T.target = 0.32 + 0.38 * (0.5 + 0.5 * Math.sin(p * 0.37)))),
        (T.amp += (T.target - T.amp) * Math.min(1, x * 0.4)));
      const G = Math.sin(T.ph) * T.amp;
      ((T.mesh.rotation.x = G),
        Math.cos(T.ph) * T.dir < 0 &&
          ((T.dir = -T.dir),
          T.amp > 0.05 &&
            (g.position.x - T.pos[0]) ** 2 + (g.position.z - T.pos[2]) ** 2 <
              576 &&
            e.audio?.play?.("p3_swing", {
              pos: T.pos,
              vol: 0.3 * Math.min(1, T.amp * 2),
              dur: 0.5,
              rate: 0.95 + 0.1 * Math.random(),
            })));
    }
  }
  return {
    group: f,
    colliders: w,
    circles: s,
    lamps: d,
    swing: j,
    sources: l,
    wear: u,
    update: Y,
    LK: C,
  };
}
const M0 = Math.PI * 2,
  B = "camp";
function oo() {
  return ye(2048, 2048, (e, a, t) => {
    let r = 911;
    const o = () => (r = (r * 16807) % 2147483647) / 2147483647,
      n = a / 22;
    ((e.fillStyle = "#2a2e2a"), e.fillRect(0, 0, a, t));
    for (let s = 0; s < 22; s++)
      for (let l = 0; l < 22; l++) {
        const u = l * n,
          c = s * n,
          M = 0.88 + o() * 0.18,
          h = o() < 0.3 ? 1 : 0;
        ((e.fillStyle = `rgb(${((62 + h * 6) * M) | 0},${((68 + h * 6) * M) | 0},${((62 - h * 6) * M) | 0})`),
          e.fillRect(u + 2, c + 2, n - 4, n - 4));
        for (let v = 0; v < 9; v++)
          for (let S = 0; S < 9; S++) {
            const d = u + ((S + 0.5) * n) / 9,
              y = c + ((v + 0.5) * n) / 9,
              m = (S + v) % 2 ? 1 : -1;
            ((e.strokeStyle = "rgba(20,22,20,0.55)"),
              (e.lineWidth = 2.2),
              e.beginPath(),
              e.moveTo(d - 3, y - 3 * m),
              e.lineTo(d + 3, y + 3 * m),
              e.stroke(),
              (e.strokeStyle = "rgba(150,156,148,0.16)"),
              (e.lineWidth = 1),
              e.beginPath(),
              e.moveTo(d - 3, y - 3 * m - 1.5),
              e.lineTo(d + 3, y + 3 * m - 1.5),
              e.stroke());
          }
        ((e.strokeStyle = "rgba(10,12,10,0.95)"),
          (e.lineWidth = 2),
          e.beginPath());
        for (let v = 0; v <= 10; v++) {
          const S = v / 10;
          e.lineTo(u + S * n, c + (v % 2 ? 4 : 0));
        }
        (e.stroke(), e.beginPath());
        for (let v = 0; v <= 10; v++) {
          const S = v / 10;
          e.lineTo(u + (v % 2 ? 4 : 0), c + S * n);
        }
        e.stroke();
      }
    ((e.globalAlpha = 0.92),
      (e.strokeStyle = "#d8d6cc"),
      (e.lineWidth = 0.45 * n),
      e.beginPath(),
      e.arc(a / 2, t / 2, 8.2 * n, 0, M0),
      e.stroke(),
      (e.fillStyle = "#d8d6cc"));
    const i = 1.9 * n,
      f = 3.2 * n,
      w = 0.7 * n;
    (e.fillRect(a / 2 - i, t / 2 - f, w, f * 2),
      e.fillRect(a / 2 + i - w, t / 2 - f, w, f * 2),
      e.fillRect(a / 2 - i, t / 2 - w / 2, i * 2, w),
      (e.strokeStyle = "#c8a420"),
      (e.lineWidth = 0.3 * n),
      e.strokeRect(0.25 * n, 0.25 * n, a - 0.5 * n, t - 0.5 * n),
      (e.globalAlpha = 1));
    for (let s = 0; s < 2600; s++) {
      e.fillStyle = `rgba(${30 + o() * 30},${26 + o() * 20},18,${0.1 + o() * 0.25})`;
      const l = o() * a,
        u = o() * t;
      e.fillRect(l, u, 2 + o() * 14, 1 + o() * 4);
    }
    for (let s = 0; s < 90; s++)
      ((e.fillStyle = `rgba(36,30,20,${0.15 + o() * 0.25})`),
        e.beginPath(),
        e.ellipse(
          o() * a,
          o() * t,
          10 + o() * 40,
          6 + o() * 20,
          o() * 3,
          0,
          M0,
        ),
        e.fill());
    ((e.strokeStyle = "rgba(20,18,14,0.35)"), (e.lineWidth = 9));
    for (const s of [-1.2, 1.2])
      (e.beginPath(),
        e.moveTo(a / 2 + s * n - 2 * n, t / 2 - 1.6 * n),
        e.lineTo(a / 2 + s * n + 2.6 * n, t / 2 - 1.4 * n),
        e.stroke());
  });
}
function no(e, a, t, r, { collapse: o = 0, door: n = !0 } = {}) {
  const i = [],
    f = e / 2,
    w = a / 2,
    s = (M, h, v, S) => {
      const d = Math.abs(Math.sin(Math.PI * ((M + f) / (e / 3)))),
        y = (S ? 0.09 : 0.035) * d;
      let m = v - y;
      if (o > 0) {
        const F = o * Math.max(0, Math.min(1, ((M + f) / e) * 1.6 - 0.2));
        m = m * (1 - F * 0.82) + Math.sin(M * 2.1 + h * 1.7) * 0.05 * F;
      }
      return m;
    },
    l = (M, h, v, S, d = null) => {
      const y = [],
        m = [];
      for (let C = 0; C <= v; C++)
        for (let L = 0; L <= h; L++) {
          const [z, W, D] = M(L / h, C / v);
          y.push(z, s(z, D, W, S), D);
        }
      for (let C = 0; C < v; C++)
        for (let L = 0; L < h; L++) {
          if (d && d(L / h + 0.5 / h, C / v + 0.5 / v)) continue;
          const z = C * (h + 1) + L,
            W = z + h + 1;
          m.push(z, W, z + 1, z + 1, W, W + 1);
        }
      const F = new Q0();
      (F.setAttribute("position", new H0(y, 3)),
        F.setIndex(m),
        F.computeVertexNormals(),
        i.push(F));
    },
    u = Math.round(e / 0.3),
    c = Math.round(a / 0.3);
  for (const M of [-1, 1])
    l(
      (h, v) => [-f + h * e, v * t, M * w * (1 + 0.012 * Math.sin(h * 9))],
      u,
      6,
      !1,
    );
  for (const M of [-1, 1])
    l((h, v) => [-f + h * e, t + v * (r - t), M * w * (1 - v)], u, 8, !0);
  for (const M of [-1, 1])
    l(
      (h, v) => [-f - 0.12 + h * (e + 0.24), t - v * 0.07, M * (w + v * 0.2)],
      u,
      1,
      !0,
    );
  for (const M of [-1, 1])
    l(
      (h, v) => [
        -f - 0.12 + h * (e + 0.24),
        t - 0.07 - v * 0.22,
        M * (w + 0.2),
      ],
      u,
      1,
      !1,
    );
  for (const M of [-1, 1])
    l(
      (h, v) => {
        const S = -w + h * a,
          d = t + (r - t) * (1 - Math.abs(S) / w);
        return [M * f, v * d, S];
      },
      c,
      9,
      !1,
      M > 0 && n ? (h, v) => Math.abs(h - 0.5) < 0.17 && v < 0.72 : null,
    );
  return i;
}
function so() {
  const e = [],
    a = (r, o, n) => e.push(Ht(r, o, n, n, 6));
  (a(I(-1.15, 0.12, 0), I(1.15, 0.12, 0), 0.02),
    a(I(-1.15, 1.08, 0), I(1.15, 1.08, 0), 0.022));
  for (const r of [-1.15, 1.15]) a(I(r, 0.12, 0), I(r, 1.08, 0), 0.022);
  for (let r = 1; r < 18; r++)
    a(I(-1.15 + r * 0.128, 0.12, 0), I(-1.15 + r * 0.128, 1.08, 0), 0.007);
  for (const r of [-0.98, 0.98])
    (e.push(new xt(0.05, 0.012, 0.62).translate(r, 0.006, 0)),
      a(I(r, 0.012, 0), I(r, 0.12, 0), 0.015));
  return v0(
    e.map(
      (r) => (
        r.deleteAttribute("uv"),
        r.setAttribute(
          "uv",
          new $t(new Float32Array(r.attributes.position.count * 2), 2),
        ),
        r
      ),
    ),
  );
}
function ro() {
  const e = [];
  for (const [o, n] of [
    [I(-3.45 / 2, 0.1, 0), I(3.45 / 2, 0.1, 0)],
    [I(-3.45 / 2, 2, 0), I(3.45 / 2, 2, 0)],
    [I(-3.45 / 2, 0.1, 0), I(-3.45 / 2, 2, 0)],
    [I(3.45 / 2, 0.1, 0), I(3.45 / 2, 2, 0)],
  ])
    e.push(Ht(o, n, 0.021, 0.021, 6));
  for (const o of [-3.45 / 2, 3.45 / 2])
    e.push(new It(0.016, 0.016, 0.2, 6).translate(o, 0.05, 0));
  return v0(
    e.map(
      (o) => (
        o.deleteAttribute("uv"),
        o.setAttribute(
          "uv",
          new $t(new Float32Array(o.attributes.position.count * 2), 2),
        ),
        o
      ),
    ),
  );
}
function lo() {
  const e = new z0(1, 12, 6);
  e.deleteAttribute("uv");
  const a = e.attributes.position;
  for (let t = 0; t < a.count; t++) {
    const r = a.getX(t),
      o = a.getY(t),
      n = a.getZ(t),
      i = 1 - 0.25 * Math.pow(Math.abs(r), 6);
    a.setXYZ(
      t,
      r * 0.27,
      Math.sign(o) * Math.pow(Math.abs(o), 0.55) * 0.075 * i,
      Math.sign(n) * Math.pow(Math.abs(n), 0.7) * 0.16 * i,
    );
  }
  return (e.computeVertexNormals(), N(e));
}
function io(e, a, t, r) {
  const o = we(e),
    n = xe(),
    i = Me(),
    f = new P0();
  f.name = "park_camp";
  const w = [],
    s = [],
    l = [],
    u = [],
    c = [],
    M = [],
    h = [],
    v = [],
    S = (b, _, R, E, X = 1.5, H = 0, rt = {}) =>
      w.push({ x0: b, x1: _, z0: R, z1: E, y0: H, y1: X, ...rt }),
    d = (b, _, R, E, X, H = 1.5) => {
      const rt = Math.abs(Math.cos(X)),
        ut = Math.abs(Math.sin(X)),
        dt = rt * R + ut * E,
        Ct = ut * R + rt * E;
      S(b - dt, b + dt, _ - Ct, _ + Ct, H);
    },
    [y, , m] = W0.pos,
    F = W0.clear,
    C = (b, _, R = 0) => Math.hypot(b - y, _ - m) > F + R,
    L = Gt(
      e.mats.get("park3_canvas", { color: 10132100 }),
      "tentcanvas",
      (b) => {
        ((b.vertexShader = b.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying float vTY;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vTY = (modelMatrix * vec4(position, 1.0)).y;`,
          )),
          (b.fragmentShader = b.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
varying float vTY;`,
            )
            .replace(
              "#include <map_fragment>",
              `#include <map_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.06, 0.045, 0.03), (1.0 - smoothstep(0.0, 0.55, vTY)) * 0.75);`,
            )));
      },
    );
  L.side = y0;
  const z = Gt(
    e.mats.get("park3_canvas", { color: 14210248 }),
    "medcanvas",
    (b) => {
      ((b.uniforms.uGlowK = { value: 1 }),
        (b.vertexShader = b.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying float vTY;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vTY = (modelMatrix * vec4(position, 1.0)).y;`,
          )),
        (b.fragmentShader = b.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying float vTY;
uniform float uGlowK;`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.07, 0.055, 0.04), (1.0 - smoothstep(0.0, 0.5, vTY)) * 0.7);`,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
      totalEmissiveRadiance += vec3(1.0, 0.8, 0.55) * 0.42 * uGlowK * (0.55 + 0.45 * smoothstep(0.2, 2.2, vTY)) * (0.75 + diffuseColor.g * 0.8);`,
          )),
        (z.userData.glow = b.uniforms.uGlowK));
    },
  );
  z.side = y0;
  const W = qt("tentfloor", 1315854, { rough: 0.9 }),
    D = qt("tentpole", 3816496, { rough: 0.6, metal: 0.5 }),
    V = qt("galv", 9080460, { rough: 0.42, metal: 0.85 }),
    A = qt("olive", 4080680, { rough: 0.7, metal: 0.2 }),
    K = Gt(e.mats.get("park3_canvas", { color: 14206106 }), "sandbag"),
    J = Gt(
      new u0({
        map: n.tex,
        emissiveMap: n.tex,
        emissive: new Vt(1, 0.85, 0.65),
        emissiveIntensity: 0.55,
        roughness: 0.7,
        side: y0,
      }),
      "signglow",
    ),
    q = qt("rope", 6972496, { rough: 0.9 }),
    st = qt("seam", 1842452, { rough: 0.95 }),
    j = qt("seammed", 9077880, { rough: 0.95 }),
    Y = qt("tabletop", 7236706, { rough: 0.6 }),
    x = qt("white", 14210766, { rough: 0.5 }),
    p = qt("bodybag", 921612, { rough: 0.45 }),
    g = qt("bodybag2", 2501148, { rough: 0.6 }),
    T = Gt(e.mats.get("ruin_char"), "char"),
    G = Gt(e.mats.get("rust_metal"), "rust"),
    Z = new u0({
      color: 3146756,
      emissive: new Vt(1, 0.04, 0.03),
      emissiveIntensity: 0,
      roughness: 0.3,
      fog: !1,
    });
  Z.userData.noCast = !0;
  const tt = new u0({
    color: 264752,
    emissive: new Vt(0.06, 0.18, 1),
    emissiveIntensity: 0,
    roughness: 0.3,
    fog: !1,
  });
  tt.userData.noCast = !0;
  const it = [];
  {
    const b = oo();
    b.anisotropy = 8;
    const _ = Gt(new u0({ map: b, roughness: 0.62, metalness: 0.12 }), "pad");
    _.userData.noCast = !0;
    const R = h0.half,
      E = new xt(R * 2, 0.04, R * 2).translate(h0.x, 0.02, h0.z),
      X = E.attributes.uv,
      H = E.attributes.position,
      rt = E.attributes.normal;
    for (let Q = 0; Q < X.count; Q++)
      rt.getY(Q) > 0.5
        ? X.setXY(
            Q,
            (H.getX(Q) - (h0.x - R)) / (R * 2),
            1 - (H.getZ(Q) - (h0.z - R)) / (R * 2),
          )
        : X.setXY(Q, 0.01, 0.01);
    const ut = new jt(E, _);
    ((ut.name = "camp_pad"), (ut.receiveShadow = !0), f.add(ut));
    const dt = [],
      Ct = new Vt(0.25, 1.6, 0.5);
    for (let Q = 0; Q < 32; Q++) {
      const yt = Math.floor(Q / 8),
        Tt = (Q % 8) / 8,
        kt = R - 0.35,
        [ot, At] = [
          [-kt + Tt * 2 * kt, -kt],
          [kt, -kt + Tt * 2 * kt],
          [kt - Tt * 2 * kt, kt],
          [-kt, kt - Tt * 2 * kt],
        ][yt],
        Ut = h0.x + ot,
        Bt = h0.z + At,
        zt = (Q * 7) % 11 === 3;
      (dt.push(new It(0.06, 0.08, 0.12, 8).translate(Ut, 0.06, Bt)),
        zt || r.add([Ut, 0.16, Bt], Ct, 0.55, 0),
        t.add(
          zt ? o.glassDead : et(),
          N(new It(0.045, 0.045, 0.05, 8).translate(Ut, 0.14, Bt)),
          B,
        ));
    }
    for (const Q of dt) t.add(o.steel, N(Q), B);
  }
  function et() {
    return (et.m ||= (() => {
      const b = new ge({ color: new Vt(0.4, 2.4, 0.8), fog: !1 });
      return ((b.userData.noCast = !0), b);
    })());
  }
  const at = V,
    nt = [];
  {
    const { z0: b, z1: _, xs: R } = ne;
    for (const Q of R) {
      const yt = Math.round((_ - b) / 2.4);
      for (let Tt = 0; Tt < yt; Tt++) {
        const kt = b + ((Tt + 0.5) * (_ - b)) / yt,
          ot = Q === R[1] || Q === R[2],
          At = a();
        At < (ot ? 0.25 : 0.3)
          ? nt.push({
              x: Q + (ot ? (Q < 447 ? -1 : 1) : a() - 0.5) * 0.6,
              z: kt,
              yaw: Math.PI / 2 + (a() - 0.5) * 0.8,
              down: !0,
            })
          : At < 0.5
            ? nt.push({
                x: Q + (a() - 0.5) * 0.5,
                z: kt + (a() - 0.5) * 0.4,
                yaw: Math.PI / 2 + (a() - 0.5) * 0.35,
              })
            : nt.push({ x: Q, z: kt, yaw: Math.PI / 2 + (a() - 0.5) * 0.06 });
      }
    }
    for (const [Q, yt, Tt, kt] of [
      [441, 124.4, 0.3, !0],
      [452.8, 123.8, -0.5, !1],
      [455.4, 125.6, 0.2, !0],
      [438.6, 122.6, 1.1, !1],
    ])
      nt.push({ x: Q, z: yt, yaw: Tt, down: kt });
    const E = so(),
      X = new U0(E, at, nt.length);
    X.name = "camp_barriers";
    const H = new gt(),
      rt = new C0(),
      ut = new q0(),
      dt = new a0(1, 1, 1),
      Ct = new a0();
    (nt.forEach((Q, yt) => {
      Q.down
        ? (ut.set(0, Q.yaw, Math.PI / 2 - 0.06, "YXZ"),
          rt.setFromEuler(ut),
          X.setMatrixAt(yt, H.compose(Ct.set(Q.x, 0.03, Q.z), rt, dt)))
        : (ut.set(0, Q.yaw, (a() - 0.5) * 0.03, "YXZ"),
          rt.setFromEuler(ut),
          X.setMatrixAt(yt, H.compose(Ct.set(Q.x, 0, Q.z), rt, dt)),
          d(Q.x, Q.z, 1.18, 0.12, Q.yaw, 1.1));
    }),
      (X.castShadow = !0),
      (X.receiveShadow = !0),
      f.add(X));
    for (let Q = ne.z1 + 1.2; Q > ne.z0 - 0.4; Q -= 1.25) {
      const yt = 447.5 + (a() - 0.5) * 0.25,
        Tt = (a() - 0.5) * 0.08,
        kt = Yt(yt, 0, Q, Tt);
      for (let ot = 0; ot < 5; ot++)
        t.add(
          o.boards,
          N(
            new xt(1.18, 0.022, 0.1).applyMatrix4(
              kt
                .clone()
                .multiply(new gt().makeTranslation(0, 0.11, -0.5 + ot * 0.25)),
            ),
          ),
          B,
        );
      for (const ot of [-0.5, 0, 0.5])
        t.add(
          o.boards,
          N(
            new xt(0.1, 0.09, 1.2).applyMatrix4(
              kt.clone().multiply(new gt().makeTranslation(ot, 0.05, 0)),
            ),
          ),
          B,
        );
    }
    v.push(
      [447.5, 113, 4.2, 0.9],
      [447, 122.5, 4.5, 1],
      [447.5, 106, 3.6, 0.8],
    );
    {
      const Tt = Yt(442.4, 0, 103, 0.4);
      t.add(
        Y,
        N(
          new xt(1.8, 0.75, 0.04).applyMatrix4(
            Tt.clone().multiply(new gt().makeTranslation(0, 0.375, 0)),
          ),
        ),
        B,
      );
      for (const kt of [-0.8, 0.8])
        for (const ot of [0.1, 0.65])
          t.add(
            o.steel,
            Ht(
              I(kt, ot, 0.02).applyMatrix4(Tt),
              I(kt, ot, 0.72).applyMatrix4(Tt),
              0.014,
              0.014,
              6,
            ),
            B,
          );
      d(442.4, 103, 0.95, 0.45, 0.4, 0.8);
      for (let kt = 0; kt < 26; kt++) {
        const ot = a() * M0,
          At = 0.4 + a() * 3.2;
        mt(442.4 + Math.cos(ot) * At + 1, 103 + Math.sin(ot) * At - 0.5);
      }
      Mt(440.6, 104.6, 1.2, !0);
    }
  }
  function mt(b, _, R = 0.21 + a() * 0.08) {
    const E = new _t(R, R * 1.3)
      .rotateX(-Math.PI / 2 + (a() - 0.5) * 0.25)
      .rotateY(a() * M0);
    (Zt(E, n.rect["paper" + Math.floor(a() * 8)]),
      t.add(o.paper, E.translate(b, 0.006 + a() * 0.004, _), B));
  }
  function Mt(b, _, R, E = !1) {
    const X = E ? Yt(b, 0.22, _, R, Math.PI / 2 - 0.1, 0) : Yt(b, 0, _, R),
      H = [
        new xt(0.44, 0.03, 0.42).translate(0, 0.45, 0),
        new xt(0.44, 0.36, 0.03).translate(0, 0.66, -0.2),
      ];
    for (const [rt, ut] of [
      [-0.2, -0.19],
      [0.2, -0.19],
      [-0.2, 0.19],
      [0.2, 0.19],
    ])
      H.push(new It(0.012, 0.012, 0.45, 6).translate(rt, 0.225, ut));
    for (const rt of H) t.add(A, N(rt.applyMatrix4(X)), B);
    E || s.push({ x: b, z: _, r: 0.3 });
  }
  {
    const b = m0,
      _ = 3.5,
      R = [],
      E = (ot, At, Ut, Bt, zt = () => !1) => {
        const Lt = Math.hypot(Ut - ot, Bt - At),
          l0 = Math.round(Lt / _),
          o0 = (Ut - ot) / Lt,
          p0 = (Bt - At) / Lt,
          D0 = -Math.atan2(p0, o0);
        for (let ze = 0; ze < l0; ze++) {
          const Ne = ((ze + 0.5) * Lt) / l0,
            Ge = ot + o0 * Ne,
            De = At + p0 * Ne;
          zt(Ge, De) || R.push({ x: Ge, z: De, yaw: D0, w: Lt / l0 });
        }
      };
    (E(b.x0, b.z1, E0.x0, b.z1),
      E(E0.x1, b.z1, b.x1, b.z1),
      E(b.x0, b.z0, b.x1, b.z0),
      E(b.x0, b.z0, b.x0, b.z1),
      E(b.x1, b.z0, b.x1, b.z1));
    const X = ro(),
      H = Zt(new _t(3.45, 1.9).translate(0, 1.05, 0), i.rect.mesh),
      rt = [];
    for (const ot of R) {
      const At = a(),
        Ut = Math.abs(ot.z - b.z1) < 1 && Math.abs(ot.x - 447) < 12;
      ((ot.state =
        (Ut && At < 0.45) || At < 0.1
          ? "down"
          : At < 0.22
            ? "lean"
            : At < 0.27
              ? "gone"
              : "up"),
        ((Math.abs(ot.x - b.x0) < 0.5 && Math.abs(ot.z - 96) < 4) ||
          (Math.abs(ot.x - b.x1) < 0.5 && Math.abs(ot.z - 88) < 4) ||
          (Math.abs(ot.z - b.z0) < 0.5 && Math.abs(ot.x - 480) < 4)) &&
          (ot.state = "down"),
        ot.state !== "gone" && rt.push(ot));
    }
    const ut = new U0(X, V, rt.length),
      dt = new U0(H, new u0(), rt.length);
    ((dt.material = o.lace.clone()),
      (dt.material.color = new Vt(10133148)),
      (dt.material.metalness = 0.8),
      (dt.material.roughness = 0.4),
      (dt.material.onBeforeCompile = o.lace.onBeforeCompile),
      (dt.material.customProgramCacheKey = () => "park3_fencemesh"),
      (dt.customDepthMaterial = o.lace.userData.depth),
      (ut.name = "camp_fence_frames"),
      (dt.name = "camp_fence_mesh"));
    const Ct = new gt(),
      Q = new C0(),
      yt = new q0(),
      Tt = new a0(1, 1, 1),
      kt = new a0();
    rt.forEach((ot, At) => {
      let Ut = 0,
        Bt = 0,
        zt = 0,
        Lt = 0,
        l0 = 0;
      if (ot.state === "down") {
        ((Bt = -Math.PI / 2 + 0.04), (Ut = 0.05));
        const o0 = Math.abs(ot.z - b.z1) < 1 ? 1 : -1;
        ((Lt = Math.sin(ot.yaw) * 0.9 * o0),
          (l0 = Math.cos(ot.yaw) * 0.9 * o0),
          Math.abs(ot.z - b.z1) < 1 && (Bt = Math.PI / 2 - 0.04));
      } else
        ot.state === "lean"
          ? (Bt = (a() < 0.5 ? -1 : 1) * (0.2 + a() * 0.25))
          : (zt = (a() - 0.5) * 0.04);
      if (
        (yt.set(Bt, ot.yaw, zt, "YXZ"),
        Q.setFromEuler(yt),
        Ct.compose(
          kt.set(ot.x + Lt, Ut, ot.z + l0),
          Q,
          Tt.set(ot.w / 3.45, 1, 1),
        ),
        ut.setMatrixAt(At, Ct),
        dt.setMatrixAt(At, Ct),
        ot.state !== "down")
      ) {
        d(ot.x, ot.z, ot.w / 2, 0.08, ot.yaw, 2);
        for (const o0 of [-1, 1])
          t.add(
            o.stone,
            N(
              new xt(0.62, 0.14, 0.22)
                .translate(0, 0.07, 0)
                .applyMatrix4(
                  Yt(
                    ot.x + (Math.cos(ot.yaw) * o0 * ot.w) / 2,
                    0,
                    ot.z - (Math.sin(ot.yaw) * o0 * ot.w) / 2,
                    ot.yaw,
                  ),
                ),
            ),
            B,
          );
      }
    });
    for (const ot of [ut, dt])
      ((ot.castShadow = !0), (ot.receiveShadow = !0), f.add(ot));
    {
      const ot = (E0.x0 + E0.x1) / 2,
        At = b.z1 + 0.3,
        Ut = Yt(ot, 0, At, 0),
        Bt = E0.x1 - E0.x0 + 0.6;
      for (const zt of [-1, 1])
        (t.add(
          o.steel,
          N(
            new It(0.045, 0.045, 4.3, 10)
              .translate((zt * Bt) / 2, 2.15, 0)
              .applyMatrix4(Ut),
          ),
          B,
        ),
          t.add(
            o.steel,
            N(
              new xt(0.5, 0.06, 0.5)
                .translate((zt * Bt) / 2, 0.03, 0)
                .applyMatrix4(Ut),
            ),
            B,
          ),
          d(ot + (zt * Bt) / 2, At, 0.18, 0.18, 0, 4.3));
      (t.add(
        o.steel,
        N(
          new It(0.04, 0.04, Bt, 10)
            .rotateZ(Math.PI / 2)
            .translate(0, 4.22, 0)
            .applyMatrix4(Ut),
        ),
        B,
      ),
        t.add(
          o.sign,
          Zt(new _t(6.4, 1.6), n.rect.banner).applyMatrix4(
            Ut.clone().multiply(new gt().makeTranslation(0, 3.35, 0.02)),
          ),
          B,
        ),
        t.add(
          o.sign,
          Zt(new _t(6.4, 1.6), n.rect.banner).applyMatrix4(
            Ut.clone()
              .multiply(new gt().makeTranslation(0, 3.35, -0.02))
              .multiply(new gt().makeRotationY(Math.PI)),
          ),
          B,
        ));
      for (const zt of [-1, 1])
        for (const Lt of [2.55, 4.15])
          t.add(
            q,
            Ht(
              I(ot + zt * 3.2, Lt, At),
              I(ot + zt * (Bt / 2), Lt + (Lt > 3 ? 0.05 : -0.1), At),
              0.008,
              0.008,
              4,
            ),
            B,
          );
    }
    for (const [ot, At, Ut] of [
      [b.x0 - 0.05, 110, -Math.PI / 2],
      [b.x1 + 0.05, 110, Math.PI / 2],
      [470, b.z1 + 0.05, 0],
      [430, b.z0 - 0.05, Math.PI],
    ])
      t.add(
        o.sign,
        Zt(new _t(0.9, 0.45), n.rect.noEntry).applyMatrix4(Yt(ot, 1.3, At, Ut)),
        B,
      );
    {
      const ot = E0.x1 + 0.6,
        At = b.z1 + 0.8;
      (t.add(o.red, N(new xt(0.3, 1.1, 0.3).translate(ot, 0.55, At)), B),
        S(ot - 0.18, ot + 0.18, At - 0.18, At + 0.18, 1.1));
      const Ut = new P0(),
        Bt = (zt) => (zt % 2 ? x : o.red);
      for (let zt = 0; zt < 6; zt++) {
        const Lt = new jt(
          new xt(0.5, 0.09, 0.07).translate(-0.25 - zt * 0.5, 0, 0),
          Bt(zt),
        );
        Ut.add(Lt);
      }
      (Ut.position.set(ot, 1.05, At),
        Ut.rotation.set(0, 0, 0.95),
        t.addGroup(Ut, B));
    }
  }
  const Ft = [],
    wt = (b, _, R, E = {}) => {
      const X = E.L ?? 6,
        H = E.W ?? 4.6,
        rt = E.wallH ?? 1.75,
        ut = E.ridgeH ?? 2.95,
        dt = Yt(b, 0, _, R),
        Ct = E.med ? z : E.burnt ? T : L;
      if (E.burnt)
        for (let zt = 0; zt < 9; zt++) {
          const Lt = a(),
            l0 = new _t(0.6 + a() * 1.2, 0.4 + a() * 0.9);
          (l0
            .rotateY(a() * M0)
            .rotateX((a() - 0.5) * 0.8)
            .translate(-X / 2 + Lt * X, 0.4 + a() * 1.6, (a() - 0.5) * H),
            t.add(T, N(l0.applyMatrix4(dt)), B));
        }
      else
        for (const zt of no(X, H, rt, ut, { collapse: E.collapse ?? 0 }))
          t.add(Ct, N(zt.applyMatrix4(dt)), B);
      const Q = X / 2,
        yt = H / 2,
        Tt = [];
      for (const zt of [-1, 1])
        for (const Lt of [-1, 1])
          Tt.push(
            Ht(I(zt * Q, 0, Lt * yt), I(zt * Q, rt, Lt * yt), 0.025, 0.025, 6),
          );
      for (const zt of [-1, 0, 1])
        Tt.push(Ht(I(zt * Q, 0, 0), I(zt * Q, ut, 0), 0.03, 0.03, 6));
      Tt.push(Ht(I(-Q, ut, 0), I(Q, ut, 0), 0.028, 0.028, 6));
      for (const zt of [-1, -1 / 3, 1 / 3, 1])
        for (const Lt of [-1, 1])
          Tt.push(
            Ht(I(zt * Q, rt, Lt * yt), I(zt * Q, ut, 0), 0.022, 0.022, 5),
          );
      if (!E.collapse)
        for (const zt of Tt) t.add(E.burnt ? T : D, N(zt.applyMatrix4(dt)), B);
      if (!E.burnt && !E.collapse) {
        const zt = E.med ? j : st,
          Lt = Math.hypot(yt, ut - rt);
        for (const l0 of [-1 / 3, 1 / 3])
          for (const o0 of [-1, 1]) {
            const p0 = new xt(0.1, 0.014, Lt)
              .translate(0, 0, -Lt / 2)
              .rotateX(-Math.atan2(ut - rt, yt));
            (o0 < 0 && p0.rotateY(Math.PI),
              p0.translate(l0 * Q, ut + 0.014, 0),
              t.add(zt, N(p0.applyMatrix4(dt)), B));
          }
        t.add(
          zt,
          N(new xt(X, 0.03, 0.14).translate(0, ut + 0.005, 0).applyMatrix4(dt)),
          B,
        );
      }
      if (!E.burnt) {
        t.add(
          W,
          N(
            new _t(X - 0.1, H - 0.1)
              .rotateX(-Math.PI / 2)
              .translate(0, 0.02, 0)
              .applyMatrix4(dt),
          ),
          B,
        );
        for (const zt of [-1, 1])
          for (let Lt = 0; Lt < 2; Lt++) {
            const l0 = -Q + 1.3 + Lt * 2.2,
              o0 = zt * (yt - 0.7);
            t.add(
              E.med ? x : A,
              N(
                new xt(1.9, 0.08, 0.7).translate(l0, 0.42, o0).applyMatrix4(dt),
              ),
              B,
            );
            for (const p0 of [-0.85, 0.85])
              t.add(
                o.steel,
                N(
                  new xt(0.04, 0.4, 0.66)
                    .translate(l0 + p0, 0.2, o0)
                    .applyMatrix4(dt),
                ),
                B,
              );
          }
      }
      if (!E.collapse && !E.burnt)
        for (const zt of [-1, -1 / 3, 1 / 3, 1])
          for (const Lt of [-1, 1]) {
            const l0 = I(zt * Q, rt, Lt * yt).applyMatrix4(dt),
              o0 = I(zt * Q * 1.04, 0.02, Lt * (yt + 1.3)).applyMatrix4(dt);
            (t.add(q, Ht(l0, o0, 0.006, 0.006, 3), B),
              t.add(
                o.steel,
                N(new It(0.012, 0.012, 0.22, 4).translate(o0.x, 0.06, o0.z)),
                B,
              ));
          }
      const kt = 0.12,
        ot = 0.8,
        At = (zt, Lt, l0, o0) => {
          const p0 = I(zt, 0, Lt).applyMatrix4(dt),
            D0 = I(l0, 0, o0).applyMatrix4(dt);
          S(
            Math.min(p0.x, D0.x) - kt,
            Math.max(p0.x, D0.x) + kt,
            Math.min(p0.z, D0.z) - kt,
            Math.max(p0.z, D0.z) + kt,
            2,
          );
        };
      !E.burnt && !(E.collapse > 0.5)
        ? (At(-Q, -yt, Q, -yt),
          At(-Q, yt, Q, yt),
          At(-Q, -yt, -Q, yt),
          At(Q, -yt, Q, -ot),
          At(Q, ot, Q, yt))
        : d(b, _, Q * 0.8, yt * 0.8, R, 1);
      const Ut = I(Q + 0.9, 0, 0).applyMatrix4(dt),
        Bt = I(Q - 1.4, 0, 0).applyMatrix4(dt);
      return (
        Ft.push({
          x: b,
          z: _,
          yaw: R,
          L: X,
          W: H,
          med: !!E.med,
          door: [Ut.x, Ut.z],
          inside: [Bt.x, Bt.z],
          M4: dt,
          wallH: rt,
          ridgeH: ut,
          burnt: !!E.burnt,
          collapse: E.collapse ?? 0,
        }),
        h.push([Ut.x, Ut.z, 1.8, 0.9]),
        Ft[Ft.length - 1]
      );
    };
  (wt(430.6, 116.2, 0),
    wt(430.6, 104.8, 0),
    wt(422.8, 110.6, 0, { L: 5, W: 4.2, ridgeH: 2.7 }),
    wt(481.4, 119.4, -Math.PI / 2, { L: 5, W: 4.2, ridgeH: 2.7 }),
    wt(430.2, 70.8, -Math.PI / 2),
    wt(480.2, 71.2, -Math.PI / 2, { L: 5, W: 4.2, ridgeH: 2.7 }));
  const Et = wt(471, 108.4, Math.PI, { med: !0, L: 8, W: 5, ridgeH: 3.1 });
  wt(472.6, 119.6, Math.PI);
  const P = wt(467, 71.2, -Math.PI / 2, { L: 6, W: 4.6 });
  (wt(426, 88.6, 0.1, { collapse: 0.9 }),
    wt(482.4, 90.4, Math.PI + 0.1, { burnt: !0 }));
  {
    const b = Et,
      _ = b.M4;
    for (const E of [-1, 1])
      t.add(
        J,
        Zt(new _t(1.4, 1.4), n.rect.cross).applyMatrix4(
          _.clone()
            .multiply(new gt().makeTranslation(0, 2.4, E * (b.W / 4 + 0.02)))
            .multiply(new gt().makeRotationX(E * -1.03)),
        ),
        B,
      );
    (t.add(
      J,
      Zt(new _t(1.1, 1.1), n.rect.cross).applyMatrix4(
        _.clone()
          .multiply(new gt().makeTranslation(b.L / 2 + 0.03, 2.25, 0))
          .multiply(new gt().makeRotationY(Math.PI / 2)),
      ),
      B,
    ),
      t.add(
        o.sign,
        Zt(new _t(1.4, 0.35), n.rect.triage).applyMatrix4(
          _.clone()
            .multiply(new gt().makeTranslation(b.L / 2 + 0.05, 1.75, 0))
            .multiply(new gt().makeRotationY(Math.PI / 2)),
        ),
        B,
      ));
    const R = I(b.L / 2 - 1.2, 1.9, 0).applyMatrix4(_);
    (l.push({
      pos: R,
      color: new Vt(1, 0.82, 0.6),
      cd: 30,
      range: 9,
      k: () => ($ ? 1 : 0),
      air: 1.2,
      airK: 0.35,
      kind: "tent",
    }),
      r.add(
        [
          I(b.L / 2 + 0.2, 1.2, 0).applyMatrix4(_).x,
          1.3,
          I(b.L / 2 + 0.2, 1.2, 0).applyMatrix4(_).z,
        ],
        new Vt(1, 0.8, 0.55).multiplyScalar(0.7),
        2.6,
        0,
      ));
  }
  let $ = !0;
  const lt = [
      { pos: [436.6, 108.6], aim: [447, 0, 101] },
      { pos: [465.8, 117.6], aim: [452, 0, 112] },
      { pos: [458.2, 71.4], aim: [451, 0, 88] },
    ],
    ft = { pos: [476.4, 82.6], yaw: 2.4 },
    Pt = (b) => {
      const _ = [],
        R = [];
      for (let X = 0; X < 3; X++) {
        const H = (X * M0) / 3 + 0.3;
        _.push(
          Ht(
            I(Math.cos(H) * 1.35, 0, Math.sin(H) * 1.35),
            I(Math.cos(H) * 0.08, 1.7, Math.sin(H) * 0.08),
            0.028,
            0.024,
            6,
          ),
        );
      }
      (_.push(Ht(I(0, 0.4, 0), I(0, 2.8, 0), 0.06, 0.06, 10)),
        _.push(Ht(I(0, 2.7, 0), I(0, 4.8, 0), 0.048, 0.048, 10)),
        _.push(Ht(I(0, 4.7, 0), I(0, 6.6, 0), 0.036, 0.036, 10)),
        _.push(new It(0.08, 0.08, 0.12, 10).translate(0, 2.75, 0)),
        _.push(new It(0.065, 0.065, 0.1, 10).translate(0, 4.75, 0)),
        _.push(new xt(1.5, 0.06, 0.06).translate(0, 6.6, 0)));
      for (const X of [-0.55, -0.18, 0.18, 0.55]) {
        const H = new gt()
          .makeTranslation(X, 6.72, 0)
          .multiply(new gt().makeRotationX(0.55));
        _.push(new xt(0.34, 0.3, 0.16).applyMatrix4(H));
        for (let rt = 0; rt < 4; rt++)
          _.push(
            new xt(0.34, 0.012, 0.06)
              .translate(0, -0.13 + rt * 0.08, -0.1)
              .applyMatrix4(H),
          );
        R.push(
          new _t(0.28, 0.24).translate(0, 0, b ? 0.082 : 0.081).applyMatrix4(H),
        );
      }
      return { iron: _, lens: R, H: 6.6 };
    },
    Wt = new Float32Array(4).fill(1),
    Dt = new ge({ color: new Vt(7, 7.6, 8.4), fog: !1 });
  ((Dt.onBeforeCompile = (b) => {
    ((b.uniforms.uFK = { value: Wt }),
      (b.vertexShader = b.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute float aFl;
varying float vFl;`,
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
vFl = aFl;`,
        )),
      (b.fragmentShader = b.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
uniform float uFK[4];
varying float vFl;`,
        )
        .replace(
          "#include <opaque_fragment>",
          `outgoingLight = mix(vec3(0.02, 0.022, 0.025), outgoingLight, uFK[int(vFl + 0.5)]);
#include <opaque_fragment>`,
        )));
  }),
    (Dt.customProgramCacheKey = () => "park3_floodlens"),
    (Dt.userData.noCast = !0));
  const e0 = [],
    n0 = [];
  lt.forEach((b, _) => {
    const [R, E] = b.pos,
      X = I(...b.aim),
      H = Math.atan2(X.x - R, X.z - E),
      rt = Pt(!0),
      ut = Yt(R, 0, E, H);
    for (const Ct of rt.iron) t.add(A, N(Ct.applyMatrix4(ut)), B);
    for (const Ct of rt.lens)
      (Ct.applyMatrix4(ut),
        Ct.setAttribute(
          "aFl",
          new $t(new Float32Array(Ct.attributes.position.count).fill(_), 1),
        ),
        n0.push(Ct));
    const dt = I(0, rt.H + 0.12, 0.2).applyMatrix4(ut);
    (e0.push({
      pos: dt,
      aim: X,
      cd: 650,
      range: 48,
      angle: 0.84,
      penumbra: 0.75,
      air: 3.4,
      airK: 0.8,
      i: _,
      shadowFar: 40,
    }),
      r.add(
        [dt.x, dt.y, dt.z],
        new Vt(0.9, 0.95, 1).multiplyScalar(1.6),
        3.2,
        60 + _,
      ),
      r.add([dt.x, dt.y - 0.5, dt.z], new Vt(0.3, 0.33, 0.38), 18, 60 + _, 34));
    for (let Ct = 0; Ct < 3; Ct++) {
      const Q = (Ct * M0) / 3 + 0.3;
      s.push({ x: R + Math.cos(Q) * 1.2, z: E + Math.sin(Q) * 1.2, r: 0.12 });
    }
    s.push({ x: R, z: E, r: 0.2 });
  });
  for (const [b, _, R, E] of [
    [437, 6.5, 104, 30],
    [452, 7.5, 97, 36],
    [467, 6.5, 104, 30],
  ])
    r.add([b, _, R], new Vt(0.075, 0.085, 0.105), E, 63, 44);
  {
    const b = Pt(!1),
      _ = Yt(ft.pos[0], 0.2, ft.pos[1], ft.yaw, Math.PI / 2 - 0.08, 0);
    for (const R of b.iron) t.add(A, N(R.applyMatrix4(_)), B);
    for (const R of b.lens) t.add(o.glassDead, R.applyMatrix4(_), B);
  }
  {
    const b = v0(n0),
      _ = new jt(b, Dt);
    ((_.name = "camp_flood_lenses"), f.add(_));
  }
  const s0 = [444.6, 72.4];
  {
    const [b, _] = s0,
      R = Yt(b, 0, _, Math.PI / 2 + 0.05),
      E = [
        Xt(2.3, 1.15, 1.1, 0.05).translate(0, 0.98, 0),
        Xt(2, 0.08, 1.2, 0.02).translate(0, 0.38, 0),
      ];
    for (const H of [-1, 1])
      E.push(
        new It(0.3, 0.3, 0.16, 16)
          .rotateX(Math.PI / 2)
          .translate(0.2, 0.3, H * 0.68),
      );
    E.push(Ht(I(1.15, 0.42, 0), I(2.1, 0.32, 0), 0.04, 0.04, 6));
    for (const H of E) t.add(A, N(H.applyMatrix4(R)), B);
    t.add(
      o.steel,
      N(
        Ht(I(-0.7, 1.55, 0.3), I(-0.7, 2.05, 0.3), 0.05, 0.05, 8).applyMatrix4(
          R,
        ),
      ),
      B,
    );
    for (let H = 0; H < 6; H++)
      t.add(
        o.rubber,
        N(
          new xt(0.5, 0.03, 0.01)
            .translate(0.6, 0.65 + H * 0.08, 0.556)
            .applyMatrix4(R),
        ),
        B,
      );
    (t.add(
      o.sign,
      Zt(new _t(0.62, 0.31), n.rect.genPanel)
        .translate(-0.55, 1.05, 0.556)
        .applyMatrix4(R),
      B,
    ),
      d(b, _, 0.65, 1.25, Math.PI / 2 + 0.05, 1.6));
    const X = I(-0.2, 1.3, 0.56).applyMatrix4(R);
    r.add([X.x, X.y, X.z], new Vt(1.6, 0.9, 0.2), 0.35, 0);
    for (const H of lt) {
      const [rt, ut] = H.pos,
        dt = [];
      for (let Q = 0; Q <= 12; Q++) {
        const yt = Q / 12,
          Tt = b + (rt - b) * yt + Math.sin(yt * Math.PI * 2 + rt) * 0.8,
          kt = _ + (ut - _) * yt + Math.cos(yt * Math.PI * 3) * 0.6;
        dt.push(I(Tt, 0.025, kt));
      }
      const Ct = dt.map((Q) => {
        const yt = Q.x - y,
          Tt = Q.z - m,
          kt = Math.hypot(yt, Tt);
        return kt < 12 ? I(y + (yt / kt) * 12, Q.y, m + (Tt / kt) * 12) : Q;
      });
      t.add(
        o.rubber,
        k0(Ct, () => 0.022, 5),
        B,
      );
    }
    (k(442, 70, 447.6, 70, 2), k(441.6, 70.2, 441.6, 74.6, 2));
  }
  function k(b, _, R, E, X = 3) {
    const H = Math.hypot(R - b, E - _),
      rt = Math.max(1, Math.round(H / 0.56)),
      ut = (R - b) / H,
      dt = (E - _) / H,
      Ct = -Math.atan2(dt, ut);
    for (let Q = 0; Q < X; Q++)
      for (let yt = 0; yt < rt - (Q % 2); yt++) {
        const Tt = (yt + 0.5 + (Q % 2) * 0.5) * (H / rt) + (a() - 0.5) * 0.04;
        for (const kt of [-0.17, 0.17])
          it.push([
            b + ut * Tt - dt * kt,
            0.075 + Q * 0.14,
            _ + dt * Tt + ut * kt,
            Ct + (a() - 0.5) * 0.12,
          ]);
      }
    S(
      Math.min(b, R) - 0.2,
      Math.max(b, R) + 0.2,
      Math.min(_, E) - 0.2,
      Math.max(_, E) + 0.2,
      0.15 * X + 0.1,
    );
  }
  (k(434.6, 127.6, 439.4, 127.6, 5),
    k(434.6, 127.6, 434.6, 130.6, 5),
    k(439.4, 127.6, 439.4, 129.4, 4),
    k(447, 79, 456, 79, 3),
    k(461.4, 76, 463.8, 76, 3));
  const O = (b, _, R, E, X) => {
      const H = Re(b, _);
      return (
        H.group.position.set(R, 0, E),
        (H.group.rotation.y = X),
        H.group.updateMatrixWorld(!0),
        t.addGroup(H.group, B),
        H
      );
    },
    ht = O(
      "armytruck",
      { burnt: !1, seed: 4, doors: { rr: 1.3 } },
      484.6,
      103.6,
      Math.PI + 0.06,
    );
  (d(484.6, 103.6, 1.3, 4, Math.PI + 0.06, 3), ht.update && c.push(ht.update));
  const U = { x: 432.4, z: 92, yaw: 0.08 },
    vt = O(
      "van",
      { burnt: !1, color: "#f2f0ea", seed: 9, doors: { fl: 0.9 } },
      U.x,
      U.z,
      U.yaw,
    );
  (d(U.x, U.z, 0.95, 2.45, U.yaw, 2), vt.update && c.push(vt.update));
  const ct = Yt(U.x, 0, U.z, U.yaw);
  {
    let b = 0.86;
    vt.group.updateMatrixWorld(!0);
    {
      const R = new gt().copy(vt.group.matrixWorld).invert(),
        E = new a0();
      vt.group.traverse((X) => {
        if (!X.isMesh) return;
        const H = X.geometry.attributes.position,
          rt = X.matrixWorld;
        for (let ut = 0; ut < H.count; ut += 3)
          (E.fromBufferAttribute(H, ut).applyMatrix4(rt).applyMatrix4(R),
            Math.abs(E.y - 1.25) < 0.1 &&
              E.z > -1.9 &&
              E.z < 0.4 &&
              (b = Math.max(b, Math.abs(E.x))));
      });
    }
    for (const R of [-1, 1]) {
      const E = Zt(new _t(2.6, 0.62), n.rect.ambulance)
        .rotateY((R * Math.PI) / 2)
        .translate(R * (b + 0.008), 1.22, -0.7);
      t.add(o.sign, E.applyMatrix4(ct), B);
    }
    (t.add(
      o.sign,
      Zt(new _t(1.1, 0.28), n.rect.ambFront)
        .translate(0, 1, 2.36)
        .applyMatrix4(ct),
      B,
    ),
      t.add(
        J,
        Zt(new _t(0.9, 0.9), n.rect.cross)
          .rotateX(-Math.PI / 2)
          .translate(0, 2, -0.9)
          .applyMatrix4(ct),
        B,
      ),
      t.add(
        o.steel,
        N(new xt(1.36, 0.06, 0.3).translate(0, 2.02, 0.95).applyMatrix4(ct)),
        B,
      ));
    for (const R of [-1, 1])
      for (let E = 0; E < 2; E++)
        t.add(
          R > 0 ? Z : tt,
          N(
            new xt(0.28, 0.1, 0.24)
              .translate(R * (0.18 + E * 0.32), 2.1, 0.95)
              .applyMatrix4(ct),
          ),
          B,
        );
    const _ = I(1.6, 0, -1.2).applyMatrix4(ct);
    w0(_.x, _.z, U.yaw + Math.PI / 2 + 0.3, !0);
  }
  const pt = I(0, 2.4, 0.95).applyMatrix4(ct);
  (r.add(
    [
      I(0.35, 2.12, 1.1).applyMatrix4(ct).x,
      2.12,
      I(0.35, 2.12, 1.1).applyMatrix4(ct).z,
    ],
    new Vt(2.4, 0.15, 0.1),
    1.6,
    70,
  ),
    r.add(
      [
        I(-0.35, 2.12, 1.1).applyMatrix4(ct).x,
        2.12,
        I(-0.35, 2.12, 1.1).applyMatrix4(ct).z,
      ],
      new Vt(0.15, 0.4, 2.6),
      1.6,
      71,
    ));
  let bt = !0;
  const Ot = (b) => {
      const _ = (b * 1.45) % 1,
        R = (H) => (H % 0.25 < 0.09 ? 1 : 0),
        E = _ < 0.5 ? R(_) : 0,
        X = _ >= 0.5 ? R(_ - 0.5) : 0;
      return { red: bt ? E : 0, blue: bt ? X : 0 };
    },
    Rt = new Vt(),
    Kt = {
      pos: pt,
      cd: 16,
      airK: 1.4,
      air: 2.2,
      k: 0,
      state: (b) => {
        const _ = Ot(b);
        return (
          Rt.setRGB(_.red * 1 + _.blue * 0.12, 0.05, _.blue * 1 + _.red * 0.05),
          { k: Math.max(_.red, _.blue), color: Rt }
        );
      },
    },
    r0 = [],
    St = Gt(new u0({ map: n.tex, roughness: 0.75 }), "crate"),
    Qt = (b, _, R, E = 0, X = [0.9, 0.5, 0.6]) => {
      const H = Yt(b, E, _, R);
      (t.add(
        A,
        N(
          Xt(X[0], X[1], X[2], 0.02)
            .translate(0, X[1] / 2, 0)
            .applyMatrix4(H),
        ),
        B,
      ),
        t.add(
          St,
          Zt(new _t(X[0] * 0.8, X[1] * 0.6), n.rect.crate)
            .translate(0, X[1] / 2, X[2] / 2 + 0.004)
            .applyMatrix4(H),
          B,
        ),
        E === 0 && d(b, _, X[0] / 2, X[2] / 2, R, X[1]));
    };
  for (const [b, _, R, E] of [
    [485.6, 109.4, 0.1, 0],
    [484.4, 109.6, -0.1, 0],
    [485, 109.5, 0.05, 0.5],
    [486.6, 110.8, 0.6, 0],
    [462.6, 73.6, 0.2, 0],
    [462.4, 73.6, 0.25, 0.5],
    [463.6, 69, 1.4, 0],
  ])
    Qt(b, _, R, E);
  {
    const b = Ke(483, 110.6, 0.4, w);
    (t.addGroup(b.statics, B), f.add(b.group), r0.push(b));
    const _ = Ke(461.2, 70, -0.6, w);
    (t.addGroup(_.statics, B), f.add(_.group), r0.push(_));
  }
  for (let b = 0; b < 6; b++)
    t.add(
      qt("water", 6982304, { rough: 0.2, metal: 0.1 }),
      N(
        Xt(0.38, 0.26, 0.26, 0.03).translate(
          477.4 + (b % 3) * 0.4,
          0.27 + Math.floor(b / 3) * 0.27,
          116.2,
        ),
      ),
      B,
    );
  (t.add(o.boards, N(new xt(1.2, 0.14, 0.8).translate(477.8, 0.07, 116.2)), B),
    S(477.2, 478.4, 115.8, 116.6, 0.7));
  function w0(b, _, R, E = !1) {
    const X = Yt(b, 0, _, R);
    for (const H of [-1, 1])
      t.add(
        o.steel,
        N(
          Ht(
            I(-1.1, 0.2, H * 0.27),
            I(1.1, 0.2, H * 0.27),
            0.016,
            0.016,
            6,
          ).applyMatrix4(X),
        ),
        B,
      );
    for (const H of [-0.85, 0.85])
      for (const rt of [-1, 1])
        t.add(
          o.steel,
          N(
            Ht(
              I(H, 0, rt * 0.27),
              I(H, 0.2, rt * 0.27),
              0.012,
              0.012,
              5,
            ).applyMatrix4(X),
          ),
          B,
        );
    (t.add(
      K,
      N(new xt(1.9, 0.015, 0.52).translate(0, 0.2, 0).applyMatrix4(X)),
      B,
    ),
      E && S0(X.clone().multiply(new gt().makeTranslation(0, 0.21, 0)), o.wool),
      d(b, _, 1.15, 0.32, R, 0.5));
  }
  function S0(b, _) {
    const R = ra(a, { bloodAt: 0.25 });
    (t.add(_, R.cloth.applyMatrix4(b), B),
      R.blood &&
        _ !== p &&
        _ !== g &&
        t.add(o.blood, R.blood.applyMatrix4(b), B));
  }
  (w0(467.4, 112.4, 0.05, !0), w0(465, 104.6, -0.3), w0(476, 101.6, 1.4, !0));
  for (let b = 0; b < 5; b++) {
    const _ = Yt(467 + b * 1, 0, 113.4, Math.PI / 2 + (a() - 0.5) * 0.15);
    (S0(_, b % 2 ? g : p), S(466.5 + b, 467.5 + b, 112.4, 114.4, 0.35));
  }
  {
    const [b, _] = [P.door[0] + 0.4, P.door[1] + 0.6],
      R = Yt(b, 0, _, 0.2);
    t.add(
      Y,
      N(new xt(1.4, 0.035, 0.7).translate(0, 0.74, 0).applyMatrix4(R)),
      B,
    );
    for (const [X, H] of [
      [-0.62, -0.3],
      [0.62, -0.3],
      [-0.62, 0.3],
      [0.62, 0.3],
    ])
      t.add(
        o.steel,
        N(new It(0.014, 0.014, 0.74, 6).translate(X, 0.37, H).applyMatrix4(R)),
        B,
      );
    (t.add(
      A,
      N(Xt(0.44, 0.26, 0.3, 0.02).translate(-0.2, 0.89, 0).applyMatrix4(R)),
      B,
    ),
      t.add(
        o.rubber,
        N(
          Xt(0.22, 0.06, 0.08, 0.02)
            .translate(0.18, 0.79, 0.1)
            .rotateY(0.4)
            .applyMatrix4(R),
        ),
        B,
      ),
      t.add(
        o.steel,
        Ht(
          I(-0.36, 1, -0.1).applyMatrix4(R),
          I(-0.42, 2.1, -0.16).applyMatrix4(R),
          0.004,
          0.003,
          4,
        ),
        B,
      ));
    for (let X = 0; X < 5; X++) {
      const H = new _t(0.21, 0.28).rotateX(-Math.PI / 2).rotateY(a() * M0);
      (Zt(H, n.rect["paper" + X]),
        t.add(
          o.paper,
          H.translate(0, 0.76 + X * 0.002, 0).applyMatrix4(
            R.clone().multiply(
              new gt().makeTranslation(
                0.25 + (a() - 0.5) * 0.4,
                0,
                (a() - 0.5) * 0.3,
              ),
            ),
          ),
          B,
        ));
    }
    (d(b, _, 0.72, 0.38, 0.2, 0.8), Mt(b - 0.2, _ + 0.9, Math.PI + 0.4));
    const E = I(-0.2, 0.92, 0.155).applyMatrix4(R);
    (r.add([E.x, E.y, E.z], new Vt(0.3, 2.2, 0.4), 0.22, 0),
      (M.radio = [b, 0.9, _]));
  }
  const J0 = [439.2, 113.6];
  {
    const [b, _] = J0;
    (t.add(G, N(new It(0.29, 0.29, 0.88, 18, 1, !0).translate(b, 0.44, _)), B),
      t.add(o.rubber, N(new It(0.28, 0.28, 0.02, 18).translate(b, 0.7, _)), B),
      s.push({ x: b, z: _, r: 0.36 }),
      u.push({
        x: b,
        y: 0.72,
        z: _,
        s: 0.55,
        k: 1,
        smoke: 0.8,
        kind: "brazier",
      }),
      Mt(437.8, 112.4, 0.9),
      Mt(440.4, 112.6, -1.2, !0));
  }
  u.push({
    x: 482,
    y: 0.05,
    z: 90,
    s: 0.45,
    k: 0.8,
    wide: 2.2,
    smoke: 1.4,
    kind: "tent",
  });
  const la = [
    [443.2, 117],
    [446, 109.8],
    [451.8, 113],
    [453, 106],
    [441.4, 108],
    [455.6, 101],
    [440.4, 98],
    [462.6, 101.4],
    [458.6, 82],
    [445.6, 121.6],
    [449.8, 118.6],
  ];
  for (const [b, _] of la) {
    if (!C(b, _, 0.6)) continue;
    const R = a(),
      E = a() * M0,
      X = Yt(b, 0, _, E);
    (R < 0.4
      ? t.add(
          o.cloth,
          N(Xt(0.66, 0.24, 0.45, 0.05).translate(0, 0.12, 0).applyMatrix4(X)),
          B,
        )
      : R < 0.7
        ? t.add(
            [o.cloth, o.cloth2, o.blue][Math.floor(a() * 3)],
            N(Xt(0.5, 0.3, 0.3, 0.1, 2).translate(0, 0.15, 0).applyMatrix4(X)),
            B,
          )
        : t.add(
            o.cloth2,
            N(
              Xt(0.45, 0.66, 0.24, 0.04)
                .rotateX(Math.PI / 2)
                .translate(0, 0.12, 0)
                .applyMatrix4(X),
            ),
            B,
          ),
      mt(b + 0.6, _ + 0.3));
  }
  {
    const b = qt("loo", 1985146, { rough: 0.55 }),
      _ = qt("looroof", 13159624, { rough: 0.5 });
    for (let R = 0; R < 4; R++) {
      const E = 420.8 + R * 1.32,
        X = 66.8,
        H = Yt(E, 0, X, Math.PI);
      (t.add(
        b,
        N(Xt(1.18, 2.2, 1.18, 0.04).translate(0, 1.12, 0).applyMatrix4(H)),
        B,
      ),
        t.add(
          _,
          N(Xt(1.24, 0.12, 1.24, 0.03).translate(0, 2.26, 0).applyMatrix4(H)),
          B,
        ));
      const rt = R === 2;
      t.add(
        b,
        N(
          new xt(0.86, 1.9, 0.04)
            .translate(rt ? 0.43 : 0, 1.02, 0)
            .applyMatrix4(
              H.clone()
                .multiply(new gt().makeTranslation(rt ? -0.43 : 0, 0, 0.6))
                .multiply(new gt().makeRotationY(rt ? 1.6 : 0)),
            ),
        ),
        B,
      );
    }
    S(420.1, 425.2, 66.1, 67.5, 2.3);
  }
  {
    const R = Yt(436.6, 0, 76.6, 0.25);
    t.add(
      A,
      N(
        new It(0.62, 0.62, 2.4, 18)
          .rotateZ(Math.PI / 2)
          .translate(0, 1.15, 0)
          .applyMatrix4(R),
      ),
      B,
    );
    for (const E of [-1, 1])
      (t.add(
        o.rubber,
        N(
          new It(0.34, 0.34, 0.22, 14)
            .rotateX(Math.PI / 2)
            .translate(0, 0.34, E * 0.72)
            .applyMatrix4(R),
        ),
        B,
      ),
        t.add(
          A,
          N(
            new z0(0.62, 14, 10, 0, M0, 0, Math.PI / 2)
              .rotateZ((E * Math.PI) / 2)
              .translate(E * 1.2, 1.15, 0)
              .applyMatrix4(R),
          ),
          B,
        ));
    (t.add(
      A,
      Ht(
        I(1.2, 0.45, 0).applyMatrix4(R),
        I(2.3, 0.3, 0).applyMatrix4(R),
        0.04,
        0.04,
        6,
      ),
      B,
    ),
      t.add(
        o.steel,
        N(
          new It(0.03, 0.03, 0.3, 6)
            .rotateX(Math.PI / 2)
            .translate(-0.6, 0.62, 0.62)
            .applyMatrix4(R),
        ),
        B,
      ),
      d(436.6, 76.6, 1.85, 0.75, 0.25, 1.8));
  }
  (O(
    "keitruck",
    { burnt: !1, color: "#3e4428", seed: 21, doors: { fl: 1.1, fr: 0.9 } },
    472.6,
    95.6,
    0.4,
  ),
    d(472.6, 95.6, 0.85, 1.75, 0.4, 1.8));
  {
    const b = Yt(462.8, 0.28, 110.6, 0.8, 0, Math.PI / 2 - 0.2);
    for (const _ of [-1, 1])
      (t.add(
        o.steel,
        new pe(0.3, 0.018, 6, 22)
          .rotateY(Math.PI / 2)
          .translate(_ * 0.3, 0.3, 0)
          .applyMatrix4(b),
        B,
      ),
        t.add(
          o.rubber,
          new pe(0.3, 0.012, 6, 22)
            .rotateY(Math.PI / 2)
            .translate(_ * 0.31, 0.3, 0)
            .applyMatrix4(b),
          B,
        ));
    (t.add(
      o.cloth,
      N(new xt(0.56, 0.04, 0.44).translate(0, 0.5, 0.05).applyMatrix4(b)),
      B,
    ),
      t.add(
        o.cloth,
        N(new xt(0.56, 0.44, 0.04).translate(0, 0.74, -0.18).applyMatrix4(b)),
        B,
      ));
  }
  for (let b = 0; b < 34; b++) {
    const _ = 438 + a() * 22,
      R = 100 + a() * 26;
    if (!C(_, R, 1.2) || Math.abs(_ - 447.6) < 1.1) continue;
    const E = a() * M0,
      X = Yt(_, 0, R, E),
      H = a();
    if (H < 0.3)
      t.add(
        [o.cloth, o.cloth2, o.blue][b % 3],
        N(
          Xt(0.5 + a() * 0.2, 0.22, 0.34, 0.06, 1)
            .translate(0, 0.11, 0)
            .applyMatrix4(X),
        ),
        B,
      );
    else if (H < 0.5)
      t.add(
        o.cloth2,
        N(Xt(0.45, 0.24, 0.66, 0.04).translate(0, 0.12, 0).applyMatrix4(X)),
        B,
      );
    else if (H < 0.75) {
      const rt = new _t(0.9, 0.6, 6, 4),
        ut = rt.attributes.position;
      for (let dt = 0; dt < ut.count; dt++)
        ut.setZ(
          dt,
          Math.sin(ut.getX(dt) * 9 + b) * 0.03 +
            Math.sin(ut.getY(dt) * 11) * 0.02 +
            0.03,
        );
      (rt.rotateX(-Math.PI / 2),
        rt.computeVertexNormals(),
        t.add(b % 2 ? o.blanket : o.cloth, N(rt.applyMatrix4(X)), B));
    } else mt(_, R);
  }
  {
    const b = (_, R, E, X, H, rt) => {
      const ut = Yt(_, 0, R, E);
      (t.add(
        o.sign,
        Zt(new _t(H, rt), X).translate(0, 1.6, 0.03).applyMatrix4(ut),
        B,
      ),
        t.add(
          o.steel,
          N(
            new xt(H + 0.05, rt + 0.05, 0.04)
              .translate(0, 1.6, 0)
              .applyMatrix4(ut),
          ),
          B,
        ));
      for (const dt of [-1, 1])
        t.add(
          o.steel,
          N(
            new xt(0.05, 1.6 + rt / 2, 0.05)
              .translate(dt * (H / 2 - 0.1), (1.6 + rt / 2) / 2, -0.03)
              .applyMatrix4(ut),
          ),
          B,
        );
      d(_, R, H / 2 + 0.05, 0.15, E, 2);
    };
    (b(441, 122.4, 0, n.rect.civilians, 1.8, 0.45),
      b(456, 104.4, -0.25, n.rect.airRescue, 1.8, 0.45));
  }
  const B0 = new P0();
  {
    const [b, _] = [466.4, 84];
    (t.add(x, N(Ht(I(b, 0, _), I(b, 5.2, _), 0.05, 0.035, 8)), B),
      s.push({ x: b, z: _, r: 0.12 }));
    const R = new It(0.28, 0.12, 1.6, 12, 4, !0)
        .rotateZ(Math.PI / 2)
        .translate(0.8, 0, 0),
      E = [],
      X = R.attributes.position;
    for (let ut = 0; ut < X.count; ut++) {
      const dt = X.getX(ut) / 1.6,
        Ct = Math.floor(dt * 5) % 2;
      E.push(Ct ? 0.9 : 1, Ct ? 0.88 : 0.36, Ct ? 0.84 : 0.08);
    }
    R.setAttribute("color", new H0(E, 3));
    const H = new jt(
      R,
      Gt(new u0({ vertexColors: !0, roughness: 0.8, side: y0 }), "sock"),
    );
    ((H.castShadow = !0), B0.add(H), B0.position.set(b, 5.05, _), f.add(B0));
    const rt = new jt(
      new z0(0.06, 8, 6),
      new ge({ color: new Vt(5, 0.3, 0.2), fog: !1 }),
    );
    (rt.position.set(b, 5.28, _),
      f.add(rt),
      r.add([b, 5.28, _], new Vt(1.8, 0.1, 0.05), 0.9, 0));
  }
  const ia = (b, _, R, E, X) => {
    const H = new j0(0.5, 14),
      rt = H.attributes.position;
    for (let ut = 1; ut < rt.count; ut++) {
      const dt = 0.6 + a() * 0.6;
      rt.setXY(ut, rt.getX(ut) * dt, rt.getY(ut) * dt);
    }
    (H.rotateX(-Math.PI / 2)
      .scale(R, 1, E)
      .rotateY(X)
      .translate(b, 0.035, _),
      t.add(o.blood, N(H), B));
  };
  for (const [b, _, R, E] of [
    [445.6, 119.4, 1.6, 0.9],
    [449.4, 110.2, 1, 0.7],
    [442.4, 101.6, 2.2, 0.8],
    [466.8, 110.4, 1.4, 1],
    [458.4, 96.2, 1.2, 0.8],
    [436.4, 99.4, 1.6, 0.6],
    [474.6, 98.4, 0.9, 0.7],
    [452, 123.6, 3, 0.5],
  ])
    ia(b, _, R, E, a() * M0);
  function ca(b, _) {
    for (const E of c) E(b, _);
    const R = Ot(_);
    ((Z.emissiveIntensity = 0.3 + R.red * 9),
      (tt.emissiveIntensity = 0.3 + R.blue * 9),
      (r.K[70] = R.red),
      (r.K[71] = R.blue),
      (B0.rotation.y =
        2.3 + Math.sin(_ * 0.13) * 0.5 + Math.sin(_ * 0.71) * 0.12),
      (B0.children[0].rotation.z =
        -0.35 + 0.25 * Math.sin(_ * 0.37) - 0.1 * Math.sin(_ * 1.7)),
      z.userData.glow && (z.userData.glow.value = $ ? 1 : 0));
  }
  {
    const b = lo(),
      _ = new U0(b, K, it.length);
    _.name = "camp_sandbags";
    const R = new gt(),
      E = new C0(),
      X = new q0(),
      H = new a0(),
      rt = new a0();
    (it.forEach(([ut, dt, Ct, Q], yt) => {
      (X.set((a() - 0.5) * 0.08, Q, (a() - 0.5) * 0.08, "YXZ"),
        E.setFromEuler(X));
      const Tt = 0.92 + a() * 0.16;
      _.setMatrixAt(
        yt,
        R.compose(rt.set(ut, dt, Ct), E, H.set(Tt, 0.9 + a() * 0.2, Tt)),
      );
    }),
      (_.castShadow = !0),
      (_.receiveShadow = !0),
      f.add(_));
  }
  for (const b of Ft) !b.burnt && b.collapse < 0.5 && M.push(b.inside, b.door);
  return {
    group: f,
    colliders: w,
    circles: s,
    sources: l,
    floods: e0,
    ambulance: Kt,
    fires: u,
    update: ca,
    tents: Ft,
    barriers: nt,
    crates: r0,
    spots: M,
    wear: h,
    mud: v,
    gen: s0,
    brazier: J0,
    lensK: Wt,
    setAmbulance(b) {
      bt = !!b;
    },
    setMedical(b) {
      $ = !!b;
    },
    get barMats() {
      return [Z, tt];
    },
  };
}
const co = {
  truck: { x: 427, z: 182.2, yaw: Math.PI + 0.08 },
  van: { x: 437.4, z: 170.8, yaw: -0.75 },
  taxi: { x: 444.4, z: 161.3, yaw: -2.33 },
};
function uo(e, a, t) {
  const r = [],
    o = [],
    n = {},
    i = (y, m, F) => {
      const C = co[y],
        L = Re(m, F);
      (L.group.position.set(C.x, 0, C.z),
        (L.group.rotation.y = C.yaw),
        L.group.updateMatrixWorld(!0),
        t.addGroup(L.group, i0(C.x, C.z)));
      const z = L.box || { min: [-0.9, 0, -2.3], max: [0.9, 1.5, 2.3] },
        W = Math.cos(C.yaw),
        D = Math.sin(C.yaw),
        V = (j, Y) => [C.x + j * W + Y * D, C.z - j * D + Y * W],
        A = z.min[2],
        K = z.max[2],
        J = z.min[0] + 0.04,
        q = z.max[0] - 0.04,
        st = Math.max(2, Math.ceil((K - A) / 1));
      for (let j = 0; j < st; j++) {
        const Y = A + ((K - A) * j) / st,
          x = A + ((K - A) * (j + 1)) / st,
          p = [V(J, Y), V(q, Y), V(J, x), V(q, x)],
          g = p.map((et) => et[0]),
          T = p.map((et) => et[1]),
          G = (Math.min(...g) + Math.max(...g)) / 2,
          Z = (Math.min(...T) + Math.max(...T)) / 2,
          tt = ((Math.max(...g) - Math.min(...g)) / 2) * 0.86,
          it = ((Math.max(...T) - Math.min(...T)) / 2) * 0.86;
        r.push({
          x0: G - tt,
          x1: G + tt,
          z0: Z - it,
          z1: Z + it,
          y0: 0,
          y1: z.max[1],
          cover: y,
        });
      }
      return (
        L.update && o.push(L.update),
        (n[y] = { ...C, box: z, local: V }),
        n[y]
      );
    },
    f = i("truck", "armytruck", {
      burnt: !1,
      seed: 31,
      doors: { rr: 1.3, fl: 0.7 },
    }),
    w = i("van", "van", {
      burnt: !1,
      color: "#dcdcd4",
      seed: 33,
      doors: { fl: 1, rl: 0.9 },
    }),
    s = i("taxi", "taxi", {
      burnt: !1,
      seed: 35,
      doors: { fr: 0.9 },
      hazards: !0,
    }),
    l = f.local,
    u = w.local,
    c = s.local,
    M = (y, m) => +Math.atan2(m[0] - y[0], m[1] - y[1]).toFixed(3),
    h = (y) => [+y[0].toFixed(2), +y[1].toFixed(2)],
    v = l(0, -2.75),
    S = l(0.15, -5.4),
    d = [
      {
        id: "truckbed",
        at: 191.6,
        spots: [],
        n: 0,
        call: "p3a_p_truck",
        leap: {
          sill: [+v[0].toFixed(2), 1.3, +v[1].toFixed(2)],
          land: h(S),
          out: h(l(0, -1.2)),
          face: M(v, S),
        },
      },
      {
        id: "truck",
        at: 187.4,
        spots: [
          h(l(2.4, 1)),
          h(l(2.2, 2.4)),
          h(l(2.6, 3.6)),
          h(l(2.3, -1.2)),
          h(l(2.5, -2.8)),
        ],
        leap: null,
        call: null,
        n: 2,
      },
      {
        id: "van",
        at: 177.6,
        spots: [
          h(u(1.2, -2)),
          h(u(0, -3.2)),
          h(u(1.8, -0.6)),
          h(u(-1, -3.4)),
          h(u(0.8, -4)),
          h(u(2.4, -1.8)),
        ],
        leap: null,
        call: "a3_c_right2",
        n: 2,
      },
      {
        id: "taxi",
        at: 167.6,
        spots: [
          h(c(-1.9, 1.2)),
          h(c(-2.2, -0.8)),
          h(c(-1.9, -2.4)),
          h(c(-2.6, 0.4)),
        ],
        leap: null,
        call: "a3_c_ahead3",
        n: 3,
      },
    ];
  return {
    colliders: r,
    ambush: d,
    vehicles: n,
    update(y, m) {
      for (const F of o) F(y, m);
    },
  };
}
const Ze = 96;
function fo(e = 256) {
  const a = new Float32Array(Ze).fill(1),
    t = new Fe(),
    r = new _t(1, 1);
  (t.setIndex(r.index),
    t.setAttribute("position", r.attributes.position),
    t.setAttribute("uv", r.attributes.uv));
  const o = new Float32Array(e * 3),
    n = new Float32Array(e * 3),
    i = new Float32Array(e * 3);
  (t.setAttribute("aPos", new Y0(o, 3)),
    t.setAttribute("aCol", new Y0(n, 3)),
    t.setAttribute("aSz", new Y0(i, 3)),
    (t.instanceCount = 0));
  const f = new oe({
      uniforms: { uK: { value: a }, uT: x0.uPT },
      vertexShader: `
attribute vec3 aPos;
attribute vec3 aCol;
attribute vec3 aSz;          // size (m), channel, near fade (m: 0 = the default)
uniform float uK[${Ze}];
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float k = uK[int(aSz.y + 0.5)];
  vec4 mv = viewMatrix * vec4(aPos, 1.0);
  float d = -mv.z;
  // (pulled toward the eye so the lamp's own frame does not cut it; shrunk when the eye is at it)
  mv.xyz += normalize(-mv.xyz) * min(aSz.x * 0.45, d * 0.5);
  float s = aSz.x * (aSz.z > 0.0 ? 1.0 : smoothstep(0.4, 3.0, d)) * step(0.001, k);
  k *= aSz.z > 0.0 ? smoothstep(aSz.z * 0.55, aSz.z, d) : 1.0;
  mv.xy += (uv - 0.5) * s;
  gl_Position = projectionMatrix * mv;
  vUv = uv; vCol = aCol * k;
}`,
      fragmentShader: `
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float r = length(vUv - 0.5) * 2.0;
  float a = exp(-r * r * 9.0) * 0.6 + exp(-r * 16.0) * 0.55;
  a *= 1.0 - smoothstep(0.6, 1.0, r);
  gl_FragColor = vec4(vCol * a, 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: me,
      fog: !1,
      toneMapped: !1,
    }),
    w = new jt(t, f);
  ((w.name = "park_glows"), (w.frustumCulled = !1), (w.renderOrder = 40));
  let s = 0;
  return {
    mesh: w,
    K: a,
    mat: f,
    add(l, u, c, M, h = 0) {
      return s >= e
        ? -1
        : (o.set(l, s * 3),
          n.set([u.r, u.g, u.b], s * 3),
          i.set([c, M, h], s * 3),
          s++,
          (t.instanceCount = s),
          (t.attributes.aPos.needsUpdate =
            t.attributes.aCol.needsUpdate =
            t.attributes.aSz.needsUpdate =
              !0),
          s - 1);
    },
    get count() {
      return s;
    },
  };
}
function ho(e, a, t, r, o = {}) {
  const n = new a0().subVectors(a, e),
    i = o.length ?? n.length() * 1.05;
  n.normalize();
  const f = Math.tan(t) * i,
    w = new It(f, o.r0 ?? 0.25, i, 40, 12, !0).translate(0, -i / 2, 0);
  w.applyQuaternion(new C0().setFromUnitVectors(new a0(0, -1, 0), n)).translate(
    e.x,
    e.y,
    e.z,
  );
  const s = {
      uK: { value: o.k ?? 1 },
      uCol: { value: r.clone() },
      uApex: { value: e.clone() },
      uDir: { value: n.clone() },
      uLen: { value: i },
      uT: x0.uPT,
      uGround: { value: o.ground ?? 0 },
    },
    l = new oe({
      uniforms: s,
      vertexShader: `
varying vec3 vW;
varying vec3 vN;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,
      fragmentShader: `
uniform float uK, uLen, uT, uGround;
uniform vec3 uCol, uApex, uDir;
varying vec3 vW;
varying vec3 vN;
float bh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float bn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(bh(i), bh(i + vec2(1.0, 0.0)), f.x), mix(bh(i + vec2(0.0, 1.0)), bh(i + vec2(1.0, 1.0)), f.x), f.y); }
void main() {
  vec3 V = normalize(cameraPosition - vW);
  // (the air the eye's line crosses inside the cone: the chord through it is longest through its middle, ~ |V.N| on the
  // wall that faces the eye; nothing at the cone's outline - a soft edge)
  float edge = abs(dot(V, normalize(vN)));
  float t = clamp(dot(vW - uApex, uDir) / uLen, 0.0, 1.0);
  float a = pow(edge, 1.3);
  // (seen along its axis - from in front of the lamp - a beam is a glare, not a cone: the halo does that; from the side it stands in the air)
  float along = abs(dot(normalize(vW - cameraPosition), uDir));
  a *= 1.0 - smoothstep(0.55, 0.92, along);
  a *= (1.0 - smoothstep(0.45, 1.0, t)) * smoothstep(0.0, 0.06, t) * (1.0 / (0.3 + t * 2.6));
  // shafts: streaks round the axis (the lamps' facets, the dust), and the mist drifting through, thicker low down
  vec3 rel = vW - uApex, ax = rel - uDir * dot(rel, uDir);
  vec3 b1 = normalize(cross(uDir, abs(uDir.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0))), b2 = cross(uDir, b1);
  float ang = atan(dot(ax, b2), dot(ax, b1));
  float streak = bn(vec2(ang * 7.0, t * 1.5 - uT * 0.04)) * 0.65 + bn(vec2(ang * 19.0 + 3.0, t * 4.0)) * 0.35;
  float m = bn(vW.xz * 0.35 + vec2(uT * 0.05, uT * 0.03) + vW.y * 0.2) * 0.6 + bn(vW.xz * 1.1 - uT * 0.08) * 0.4;
  a *= (0.35 + 0.9 * smoothstep(0.25, 0.8, streak)) * (0.45 + 0.8 * m);
  a *= 0.6 + 0.4 * smoothstep(8.0, 0.0, vW.y - uGround);
  // (soft where it meets the ground)
  a *= smoothstep(0.0, 1.2, vW.y - uGround);
  // (and faint when the eye is inside it)
  float de = length(cameraPosition - vW); a *= smoothstep(1.0, 6.0, de);
  gl_FragColor = vec4(uCol * a * uK, 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: me,
      side: $e,
      fog: !1,
      toneMapped: !1,
    }),
    u = new jt(w, l);
  return (
    (u.name = "park_beam"),
    (u.renderOrder = 38),
    (u.castShadow = !1),
    (u.receiveShadow = !1),
    (u.userData.U = s),
    u
  );
}
const po =
    "attribute float aSeed; varying vec2 vUv; varying float vSeed; void main() { vUv = uv; vSeed = aSeed; vec4 mv = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); vec2 sc = vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz)); mv.xy += (uv - vec2(0.5, 0.0)) * sc; gl_Position = projectionMatrix * mv; }",
  mo = `
varying vec2 vUv; varying float vSeed; uniform float uT, uK;
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
void main() {
  vec2 p = vUv; float t = uT * 1.6 + vSeed * 10.0;
  float turb = n(vec2(p.x * 4.0, p.y * 3.0 - t * 1.8)) * 0.6 + n(vec2(p.x * 9.0, p.y * 7.0 - t * 3.2)) * 0.4;
  float w = (1.0 - p.y) * 0.46 * (0.7 + 0.5 * turb);
  float d = abs(p.x - 0.5 + (turb - 0.5) * 0.18 * p.y) / max(w, 1e-3);
  float core = smoothstep(1.0, 0.2, d) * smoothstep(1.0, 0.55, p.y + turb * 0.25);
  if (core <= 0.001) discard;
  vec3 c = mix(vec3(1.6, 0.35, 0.05), vec3(4.0, 2.4, 0.9), smoothstep(0.3, 0.95, core) * (1.0 - p.y));
  gl_FragColor = vec4(c * core * uK, core);
}`;
function xo(e, a) {
  const t = new P0();
  t.name = "park_fires";
  const r = { uT: x0.uPT, uK: { value: 1 } },
    o = new oe({
      uniforms: r,
      vertexShader: po,
      fragmentShader: mo,
      transparent: !0,
      depthWrite: !1,
      blending: me,
      fog: !1,
      toneMapped: !1,
    }),
    n = new _t(1, 1),
    i = 5,
    f = new U0(n, o, e.length * i);
  ((f.name = "park_flames"), (f.renderOrder = 36), (f.frustumCulled = !1));
  const w = new Float32Array(e.length * i),
    s = new gt(),
    l = new C0(),
    u = new a0(),
    c = new a0(),
    M = [];
  (e.forEach((q, st) => {
    for (let j = 0; j < i; j++) {
      w[st * i + j] = a() * 10 + j;
      const Y = q.s * (0.6 + a() * 0.6) * (q.wide || 1),
        x = q.s * (1 + a() * 1.1),
        p = q.x + (a() - 0.5) * q.s * 0.9 * (q.wide || 1),
        g = q.z + (a() - 0.5) * q.s * 0.9 * (q.wide || 1);
      (M.push([p, q.y, g, Y, x]),
        f.setMatrixAt(
          st * i + j,
          s.compose(u.set(p, q.y, g), l, c.set(Y, x, 1)),
        ));
    }
  }),
    n.setAttribute("aSeed", new Y0(w, 1)),
    t.add(f));
  const h = 9,
    v = e.length,
    S = new Fe(),
    d = new _t(1, 1);
  (S.setIndex(d.index),
    S.setAttribute("position", d.attributes.position),
    S.setAttribute("uv", d.attributes.uv));
  const y = new Float32Array(v * h * 4),
    m = new Float32Array(v * h * 2);
  for (let q = 0; q < v; q++)
    for (let st = 0; st < h; st++) {
      const j = e[q],
        Y = q * h + st;
      (y.set([j.x, j.y + j.s * 0.9, j.z, j.s * (j.smoke ?? 1)], Y * 4),
        m.set([st / h + a() * 0.08, a()], Y * 2));
    }
  (S.setAttribute("aBase", new Y0(y, 4)),
    S.setAttribute("aSeed", new Y0(m, 2)),
    (S.instanceCount = v * h));
  const F = new oe({
    uniforms: wa.merge([ba.fog, { uT: { value: 0 } }]),
    vertexShader: `
attribute vec4 aBase;
attribute vec2 aSeed;
uniform float uT;
varying vec2 vUv;
varying float vAge, vSeed;
#include <fog_pars_vertex>
void main() {
  float life = 8.0 + aSeed.y * 3.0, age = fract(uT / life + aSeed.x);
  float sz = aBase.w;
  vec3 c = aBase.xyz + vec3(age * age * 4.0 + sin(uT * 0.3 + aSeed.y * 9.0) * 0.3 * age, age * (5.5 + sz * 3.0), -age * 1.6 + cos(uT * 0.4 + aSeed.y * 7.0) * 0.25 * age);
  float size = sz * (0.9 + age * 4.5);
  vec4 mvPosition = modelViewMatrix * vec4(c, 1.0);
  float r = aSeed.y * 6.28 + uT * (0.15 + aSeed.y * 0.1) * (aSeed.y > 0.5 ? 1.0 : -1.0);
  vec2 q = (uv - 0.5) * size; q = mat2(cos(r), sin(r), -sin(r), cos(r)) * q;
  mvPosition.xy += q;
  gl_Position = projectionMatrix * mvPosition;
  vUv = uv; vAge = age; vSeed = aSeed.y;
  #include <fog_vertex>
}`,
    fragmentShader: `
uniform float uT;
varying vec2 vUv;
varying float vAge, vSeed;
#include <fog_pars_fragment>
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
void main() {
  vec2 c = vUv - 0.5;
  float cloud = n(vUv * 3.0 + vSeed * 17.0) * 0.55 + n(vUv * 7.0 - vSeed * 9.0 + uT * 0.05) * 0.3 + n(vUv * 15.0 + vSeed * 3.0) * 0.15;
  float a = smoothstep(0.5, 0.12, length(c) + (cloud - 0.5) * 0.35);
  a *= smoothstep(0.0, 0.08, vAge) * (1.0 - smoothstep(0.45, 1.0, vAge)) * 0.5;
  if (a < 0.004) discard;
  vec3 col = mix(vec3(0.9, 0.3, 0.07) * (1.2 - vAge * 3.0), vec3(0.035, 0.034, 0.036), smoothstep(0.0, 0.22, vAge));
  col *= 0.8 + 0.4 * cloud;
  gl_FragColor = vec4(col, a);
  #include <fog_fragment>
}`,
    transparent: !0,
    depthWrite: !1,
    fog: !0,
  });
  F.uniforms.uT = x0.uPT;
  const C = new jt(S, F);
  ((C.name = "park_smoke"),
    (C.frustumCulled = !1),
    (C.renderOrder = 37),
    t.add(C));
  const L = 12,
    z = new Q0(),
    W = new Float32Array(v * L * 3),
    D = new Float32Array(v * L * 2);
  for (let q = 0; q < v; q++)
    for (let st = 0; st < L; st++) {
      const j = e[q],
        Y = q * L + st;
      (W.set(
        [
          j.x + (a() - 0.5) * j.s * (j.wide || 1),
          j.y + j.s * 0.3,
          j.z + (a() - 0.5) * j.s * (j.wide || 1),
        ],
        Y * 3,
      ),
        D.set([a(), a() * 0.8 + j.s * 0.3], Y * 2));
    }
  (z.setAttribute("position", new $t(W, 3)),
    z.setAttribute("aSeed", new $t(D, 2)));
  const V = new oe({
      uniforms: { uT: x0.uPT, uScale: { value: 600 } },
      vertexShader: `
attribute vec2 aSeed;
uniform float uT, uScale;
varying float vK;
void main() {
  float life = 1.6 + aSeed.x * 1.8, age = fract(uT / life + aSeed.x * 7.3);
  float s = aSeed.x * 6.28, up = aSeed.y;
  vec3 p = position + vec3(sin(s + uT * 2.1) * 0.35 * age + cos(s) * 0.3 * age + age * 0.8, (1.0 - (1.0 - age) * (1.0 - age)) * (2.0 + up * 2.6), cos(s * 1.3 + uT * 1.7) * 0.35 * age + sin(s) * 0.3 * age);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vK = (1.0 - age) * (0.55 + 0.45 * sin(uT * 23.0 + s * 5.0));
  gl_PointSize = max(1.0, 0.05 * uScale / -mv.z);
}`,
      fragmentShader: `
varying float vK;
void main() {
  float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
  gl_FragColor = vec4(vec3(4.0, 1.5, 0.35) * vK * smoothstep(0.5, 0.0, d), 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: me,
      fog: !1,
      toneMapped: !1,
    }),
    A = new va(z, V);
  ((A.name = "park_sparks"),
    (A.frustumCulled = !1),
    (A.renderOrder = 38),
    t.add(A));
  const K = e.map((q) => q.k ?? 1);
  function J(q, st) {
    K[q] = st;
    for (let j = 0; j < i; j++) {
      const Y = M[q * i + j];
      f.setMatrixAt(
        q * i + j,
        s.compose(
          u.set(Y[0], Y[1], Y[2]),
          l,
          c.set(Y[3] * Math.max(0.001, st), Y[4] * Math.max(0.001, st), 1),
        ),
      );
    }
    f.instanceMatrix.needsUpdate = !0;
  }
  return (
    e.forEach((q, st) => {
      (q.k ?? 1) !== 1 && J(st, q.k);
    }),
    { group: t, set: J, k: K, flames: f, plume: C, sparks: A }
  );
}
const je = 5;
function Mo(
  e,
  a,
  { sources: t = [], floods: r = [], ambulance: o = null } = {},
) {
  const n = [],
    i = [];
  for (let A = 0; A < je; A++) {
    const K = new Oe(16752704, 0, 10, 2);
    ((K.name = "park_pool_" + A),
      (K.castShadow = !1),
      a.add(K),
      n.push(K),
      i.push({ l: K, src: -1, next: -1, k: 0 }));
  }
  const f = t.length,
    w = new Float64Array(f),
    s = Array.from({ length: f }, (A, K) => K),
    l = [],
    u = new Float32Array(f);
  let c = 0,
    M = 0,
    h = 0;
  const v = (A, K) => w[A] - w[K],
    S = (A, K) => {
      for (let J = 0; J < A.length; J++) if (A[J] === K) return !0;
      return !1;
    },
    d = () => {
      l.length = 0;
      for (let A = 0; A < f && l.length < je; A++) {
        const K = s[A];
        t[K].pool !== !1 && w[K] < 1e11 && l.push(K);
      }
      for (const A of i) {
        const K = A.next >= 0 ? A.next : A.src;
        if (!(K >= 0 && S(l, K)))
          for (const J of l) {
            let q = !1;
            for (const st of i)
              (st.next >= 0 ? st.next : st.src) === J && (q = !0);
            if (!q) {
              A.next = J;
              break;
            }
          }
      }
    },
    y = r.map((A, K) => {
      const J = new ya(
        15266047,
        0,
        A.range ?? 75,
        A.angle ?? 0.62,
        A.penumbra ?? 0.55,
        2,
      );
      return (
        (J.name = "park_flood_" + K),
        J.position.copy(A.pos),
        J.target.position.copy(A.aim),
        (J.castShadow = !0),
        J.shadow.mapSize.set(1024, 1024),
        (J.shadow.bias = -4e-4),
        (J.shadow.normalBias = 0.03),
        (J.shadow.camera.near = 0.6),
        (J.shadow.camera.far = A.shadowFar ?? 38),
        a.add(J, J.target),
        n.push(J),
        { s: J, f: A, on: A.on !== !1, k: A.on !== !1 ? 1 : 0 }
      );
    });
  let m = null;
  if (o) {
    const A = new Oe(16719904, 0, 14, 2);
    ((A.name = "park_ambulance"),
      A.position.copy(o.pos),
      (A.castShadow = !1),
      a.add(A),
      n.push(A),
      (m = { l: A, ...o }));
  }
  const F = new Float64Array(f + y.length + 1),
    C = [];
  for (let A = 0; A < f + y.length + (m ? 1 : 0); A++) C.push(A);
  const L = (A) =>
      A < f ? t[A].pos : A < f + y.length ? y[A - f].f.pos : m.pos,
    z = (A) => (A < f ? u[A] : A < f + y.length ? y[A - f].k : m.k),
    W = (A, K) => F[A] - F[K],
    D = new Vt();
  function V(A, K, J) {
    ((c = J.position.x), (M = J.position.z));
    for (let Y = 0; Y < f; Y++) {
      const x = t[Y];
      ((u[Y] = x.k ? x.k(K) : 1),
        (w[Y] =
          (x.pos.x - c) ** 2 + (x.pos.z - M) ** 2 + (u[Y] > 0.03 ? 0 : 1e12)));
    }
    (s.sort(v), (h -= A), h <= 0 && ((h = 0.25), d()));
    for (const Y of i) {
      if (
        (Y.next >= 0 && Y.next !== Y.src
          ? ((Y.k = Math.max(0, Y.k - A * 3.5)),
            Y.k === 0 && ((Y.src = Y.next), (Y.next = -1)))
          : ((Y.next = -1), (Y.k = Math.min(1, Y.k + A * 2.5))),
        Y.src < 0)
      ) {
        Y.l.intensity = 0;
        continue;
      }
      const x = t[Y.src];
      (Y.l.position.copy(x.pos),
        Y.l.color.copy(x.color),
        (Y.l.distance = x.range),
        (Y.l.intensity = Y.k * u[Y.src] * x.cd));
    }
    for (const Y of y)
      ((Y.k += ((Y.on ? 1 : 0) - Y.k) * Math.min(1, A * 8)),
        (Y.s.intensity =
          Y.k * (Y.f.cd ?? 1800) * (Y.f.flicker ? Y.f.flicker(K) : 1)));
    if (m) {
      const Y = m.state(K);
      ((m.k = Y.k), (m.l.intensity = Y.k * m.cd), m.l.color.copy(Y.color));
    }
    const q = C.length;
    for (let Y = 0; Y < q; Y++) {
      const x = L(Y),
        p = z(Y);
      F[Y] =
        (x.x - c) ** 2 +
        (x.z - M) ** 2 -
        (Y >= f && Y < f + y.length ? 8e3 : 0) +
        (p > 0.03 ? 0 : 1e12);
    }
    C.sort(W);
    const st = x0.uPLamps.value,
      j = x0.uPLampC.value;
    for (let Y = 0; Y < $0; Y++) {
      if (Y >= q || F[C[Y]] > 1e11) {
        st[Y].w = 0;
        continue;
      }
      const x = C[Y],
        p = L(x);
      if (x < f) {
        const g = t[x];
        (st[Y].set(p.x, p.y, p.z, u[x] * (g.airK ?? 1)),
          j[Y].set(g.color.r, g.color.g, g.color.b, g.air ?? 1.5));
      } else if (x < f + y.length) {
        const g = y[x - f];
        (st[Y].set(p.x, p.y, p.z, g.k * (g.f.airK ?? 3)),
          j[Y].set(0.8, 0.88, 1, g.f.air ?? 5));
      } else
        (D.copy(m.l.color),
          st[Y].set(p.x, p.y, p.z, m.k * (m.airK ?? 1.2)),
          j[Y].set(D.r, D.g, D.b, m.air ?? 2));
    }
  }
  return {
    lights: n,
    pool: i,
    spots: y,
    amb: m,
    update: V,
    setFlood(A, K) {
      y[A] && (y[A].on = !!K);
    },
  };
}
const Ce = {
    post: {
      exposure: 1,
      bloom: 0.32,
      bloomThreshold: 1,
      vignette: 0.6,
      sat: 0.94,
      contrast: 1.14,
    },
    key: [11124194, 0.15],
    keyDir: [0.62, 0.42, -0.35],
    fill: [16747082, 0.03],
    fillDir: [-0.45, 0.25, 0.6],
    hemi: [3426410, 1446414, 0.19],
    env: 0.14,
    envName: "sky",
    fog: [659480, 0.0105],
    keyBox: 40,
  },
  wo = { ...Ce, post: { ...Ce.post, exposure: 0.94, bloom: 0.34 }, keyBox: 32 },
  bo = [
    "park3_lawn",
    "park3_litter",
    "park3_bark",
    "park3_hedge",
    "park3_canvas",
    "forest_bark",
    "forest_path",
    "street_asphalt",
    "garden_gravel",
    "plaza_cobble",
    "church_dressed",
    "church_stone",
    "forest_stone",
    "iron_black",
    "rust_metal",
    "concrete_grey",
    "wood_oak_pale",
    "boards_barricade",
    "car_burnt",
    "blood_dark",
    "sidewalk_tiles",
    "ruin_char",
    "paper_old",
    "house_plank",
    "ext_brick",
    "linen_stained",
    "wool_grey",
  ],
  vo = (e, a) => Gt(e.mats.get(a), "air_" + a),
  yo = (e, a) => k0(e, () => a, 5),
  zo = (e, a) => Ht(e, a, 0.012, 0.012, 6),
  go = (e, a) =>
    0.82 +
    0.1 * Math.sin(e * 9.1 + a * 1.7) +
    0.06 * Math.sin(e * 17.3 + a * 3.1) * Math.sin(e * 2.9 + a) +
    0.04 * Math.sin(e * 31 + a * 5.3);
async function Io(e, { rng: a } = {}) {
  a = a || e.rng(5305);
  const t = {};
  let o = performance.now();
  const n = (k) => {
    const O = performance.now();
    ((t[k] = Math.round(O - o)), (o = O));
  };
  (await e.mats.ensure(bo), n("textures"));
  const i = new P0();
  i.name = "park";
  const f = [],
    w = [],
    s = [],
    l = new Ea(),
    u = fo(320);
  i.add(u.mesh);
  const c = Na(a),
    M = Oa(e, c, a);
  (i.add(M.group), w.push(...M.circles), n("trees"));
  const h = { root: [468.4, 140.6], dir: [0.34, 0.94], H: 23, r: 0.62 };
  {
    const k = { kind: "plane", x: 0, z: 0, r: h.r, H: h.H },
      O = sa(k, a, { free: !0, ivy: 0.6 }),
      ht = Math.atan2(h.dir[0], h.dir[1]),
      U = new gt()
        .makeTranslation(h.root[0], h.r * 0.8, h.root[1])
        .multiply(new gt().makeRotationY(ht))
        .multiply(new gt().makeRotationX(Math.PI / 2 - 0.05)),
      vt = v0(O.bark.map((St) => St.applyMatrix4(U)));
    {
      const St = vt.attributes.position;
      for (let Qt = 0; Qt < St.count; Qt++)
        St.getY(Qt) < 0.05 && St.setY(Qt, 0.05 + Math.abs(St.getY(Qt)) * 0.02);
      vt.computeVertexNormals();
    }
    const ct = new jt(vt, Te(e, "park3_bark", "bark_plane"));
    ((ct.name = "fallen_tree"),
      (ct.castShadow = !0),
      (ct.receiveShadow = !0),
      i.add(ct));
    const pt = new za().getNormalMatrix(U);
    for (const St of O.cards)
      (St.pos.applyMatrix4(U),
        St.along.applyMatrix3(pt).normalize(),
        St.out.applyMatrix3(pt).normalize(),
        St.ivy && St.ivy.applyMatrix3(pt).normalize(),
        St.pos.y < 0.15 && (St.pos.y = 0.15));
    const bt = We(),
      Ot = new jt(
        Ee(O.cards, a, (St, Qt) =>
          Qt.setRGB(0.55 * St.shade, 0.52 * St.shade, 0.5 * St.shade),
        ),
        bt.m,
      );
    ((Ot.name = "fallen_tree_cards"),
      (Ot.customDepthMaterial = bt.d),
      (Ot.castShadow = !0),
      i.add(Ot));
    const Rt = we(e),
      Kt = vo(e, "forest_path"),
      r0 = new ga(
        new ka(
          Array.from({ length: 18 }, (St, Qt) => {
            const w0 = (Qt / 18) * Math.PI * 2,
              S0 = 2.1 * (0.75 + 0.4 * Math.abs(Math.sin(Qt * 2.3)));
            return new _0(Math.cos(w0) * S0, Math.sin(w0) * S0 * 0.8 + 0.4);
          }),
        ),
        {
          depth: 0.55,
          bevelEnabled: !0,
          bevelSize: 0.25,
          bevelThickness: 0.25,
          bevelSegments: 2,
          curveSegments: 4,
        },
      );
    (r0.applyMatrix4(
      new gt()
        .makeTranslation(h.root[0], 1.2, h.root[1])
        .multiply(new gt().makeRotationY(ht))
        .multiply(new gt().makeTranslation(0, 0, -0.9)),
    ),
      l.add(Kt, r0, i0(h.root[0], h.root[1])));
    for (let St = 0; St < 10; St++) {
      const Qt = a() * Math.PI * 2,
        w0 = 0.6 + a() * 1.6,
        S0 = I(
          h.root[0] - h.dir[0] * 0.9 + Math.cos(Qt) * w0 * 0.4,
          1.2 + Math.sin(Qt) * w0 * 0.8,
          h.root[1] - h.dir[1] * 0.9 + Math.cos(Qt) * w0 * 0.3,
        ),
        J0 = S0.clone().add(
          I((a() - 0.5) * 1.6, -0.3 - a() * 0.6, -0.94 * (0.4 + a())),
        );
      l.add(
        Rt.boards,
        yo(
          [
            S0,
            S0.clone()
              .lerp(J0, 0.5)
              .add(I(0, 0.2, 0)),
            J0,
          ],
          0.06,
        ),
        i0(h.root[0], h.root[1]),
      );
    }
    for (let St = -0.5; St < 12; St += 0.9)
      w.push({
        x: h.root[0] + h.dir[0] * St,
        z: h.root[1] + h.dir[1] * St,
        r: h.r * (1.25 - St * 0.03) + 0.1,
        fallen: !0,
      });
    w.push({
      x: h.root[0] - h.dir[0] * 0.8,
      z: h.root[1] - h.dir[1] * 0.8,
      r: 1.8,
      fallen: !0,
    });
  }
  n("fallen");
  const v = Xa(e, a);
  (i.add(v.group), f.push(...v.colliders), w.push(...v.circles), n("hedges"));
  const S = ao(e, a, l, u);
  (i.add(S.group),
    f.push(...S.colliders),
    w.push(...S.circles),
    n("furniture"));
  const d = io(e, a, l, u);
  (i.add(d.group), f.push(...d.colliders), w.push(...d.circles), n("camp"));
  const y = uo(e, a, l);
  (f.push(...y.colliders), n("cover"));
  const m = we(e),
    F = Re("sedan", { burnt: !0, seed: 17, bonnet: 0.5 });
  (F.group.position.set(Nt.x, 0, Nt.z),
    F.group.rotation.set(0, Nt.yaw, 0.02),
    F.group.updateMatrixWorld(!0),
    l.addGroup(F.group, i0(Nt.x, Nt.z)));
  {
    const k = Math.cos(Nt.yaw),
      O = Math.sin(Nt.yaw);
    for (let ht = 0; ht < 3; ht++) {
      const U = -1.55 + ht * 1.55,
        vt = Nt.x + O * U,
        ct = Nt.z + k * U;
      f.push({
        x0: vt - 0.95,
        x1: vt + 0.95,
        z0: ct - 0.95,
        z1: ct + 0.95,
        y0: 0,
        y1: 1.4,
        car: !0,
      });
    }
  }
  const C = F.fire
    ? new a0(...F.fire).applyMatrix4(F.group.matrixWorld)
    : I(Nt.x - Math.sin(Nt.yaw) * -1.6, 0.8, Nt.z);
  {
    const k = (ct, pt, bt, Ot) => l.add(ct, pt, i0(bt, Ot)),
      O = (ct, pt, bt, Ot, Rt = 0, Kt = 0) =>
        new gt().compose(
          I(ct, pt, bt),
          new C0().setFromEuler(new q0(Rt, Ot, Kt, "YXZ")),
          I(1, 1, 1),
        ),
      ht = (ct, pt, bt) => {
        const Ot = a() * Math.PI * 2,
          Rt = O(ct, 0, pt, Ot),
          Kt =
            bt === 0
              ? Xt(0.66, 0.26, 0.44, 0.05).translate(0, 0.13, 0)
              : bt === 1
                ? Xt(0.48, 0.3, 0.3, 0.1, 2).translate(0, 0.15, 0)
                : Xt(0.45, 0.24, 0.66, 0.04).translate(0, 0.12, 0);
        k([m.cloth, m.cloth2, m.blue][bt % 3], Kt.applyMatrix4(Rt), ct, pt);
      };
    for (const [ct, pt, bt] of [
      [428.2, 184.4, 0],
      [433.6, 187.2, 1],
      [427.4, 161.8, 2],
      [439.8, 160.6, 0],
      [444.6, 146, 1],
      [428, 147.6, 2],
      [436, 139, 0],
      [446.8, 130.4, 1],
      [422, 192.4, 2],
      [418.6, 150, 0],
      [462, 149.6, 1],
      [404, 152.6, 2],
    ])
      G0(ct, pt) > 1.3 && ht(ct, pt, bt);
    {
      const bt = O(427.9, 0.36, 175.8, 0.6, 0, Math.PI / 2 - 0.12),
        Ot = m.pram || (m.pram = qt("pram", 1712694, { rough: 0.6 })),
        Rt = new Ie(
          [
            [0.001, 0],
            [0.16, 0],
            [0.2, 0.05],
            [0.21, 0.3],
            [0.205, 0.34],
            [0.19, 0.34],
          ].map(([Kt, r0]) => new _0(Kt, r0)),
          16,
        );
      (Rt.scale(2, 1, 1.05).translate(0, 0.42, 0),
        k(Ot, Rt.applyMatrix4(bt), 427.9, 175.8));
      {
        const Kt = new z0(0.21, 14, 6, Math.PI / 2, Math.PI, 0, Math.PI * 0.55);
        (Kt.scale(1, 1.05, 1).translate(-0.24, 0.74, 0),
          Kt.index &&
            Kt.setIndex([...Kt.index.array, ...[...Kt.index.array].reverse()]),
          k(Ot, Kt.applyMatrix4(bt), 427.9, 175.8));
      }
      for (const [Kt, r0, St] of [
        [-0.3, -0.25, 0.17],
        [0.3, -0.25, 0.13],
        [-0.3, 0.25, 0.17],
        [0.3, 0.25, 0.13],
      ]) {
        k(
          m.rubber,
          new pe(St, 0.02, 6, 18).translate(Kt, St, r0).applyMatrix4(bt),
          427.9,
          175.8,
        );
        for (let Qt = 0; Qt < 6; Qt++)
          k(
            m.steel,
            new It(0.004, 0.004, St * 2, 4)
              .rotateZ((Qt * Math.PI) / 6)
              .translate(Kt, St, r0)
              .applyMatrix4(bt),
            427.9,
            175.8,
          );
      }
      for (const [Kt, r0] of [
        [
          [-0.3, 0.17, -0.25],
          [0.3, 0.13, -0.25],
        ],
        [
          [-0.3, 0.17, 0.25],
          [0.3, 0.13, 0.25],
        ],
        [
          [-0.15, 0.17, -0.25],
          [-0.1, 0.42, -0.2],
        ],
        [
          [0.15, 0.15, 0.25],
          [0.1, 0.42, 0.2],
        ],
        [
          [0.36, 0.5, -0.2],
          [0.62, 0.98, -0.2],
        ],
        [
          [0.36, 0.5, 0.2],
          [0.62, 0.98, 0.2],
        ],
        [
          [0.62, 0.98, -0.21],
          [0.62, 0.98, 0.21],
        ],
      ])
        k(m.steel, zo(I(...Kt), I(...r0)).applyMatrix4(bt), 427.9, 175.8);
      f.push({
        x0: 427.9 - 0.55,
        x1: 427.9 + 0.55,
        z0: 175.8 - 0.55,
        z1: 175.8 + 0.55,
        y0: 0,
        y1: 0.7,
      });
    }
    {
      const ct = (pt, bt, Ot, Rt) => {
        (pt.position.set(bt, pt.position.y, Ot),
          (pt.rotation.y = Rt),
          l.addGroup(pt, i0(bt, Ot)));
      };
      (ct(Ue({ fallen: !0, color: 3807770 }).group, 422.4, 189.4, 0.6),
        ct(Ue({ fallen: !0, color: 1718826 }).group, 425.2, 156.6, 2.2),
        ct(Xe({ open: !0 }).group, 437, 170.2, 0.9),
        ct(Xe().group, 445, 141, 1.9),
        ct(Ve().group, 428.6, 186, 1.2),
        ct(Ve().group, 444.2, 158.6, -0.6));
      for (const [pt, bt] of [
        [432.9, 181.6],
        [436.8, 160.6],
        [441.9, 139.6],
      ])
        G0(pt, bt) > 0.9 && ct(Sa().group, pt, bt, a() * 6.3);
    }
    const U = (ct, pt, bt, Ot) => {
        const Rt = ra(a, { bloodAt: 0.2 + a() * 0.25 }),
          Kt = O(ct, 0, pt, bt);
        (k(Ot, Rt.cloth.applyMatrix4(Kt), ct, pt),
          Rt.blood && k(m.blood, Rt.blood.applyMatrix4(Kt), ct, pt),
          k(
            m.rubber,
            Xt(0.26, 0.1, 0.1, 0.03)
              .rotateY(0.3)
              .translate(1.02, 0.05, 0.12)
              .applyMatrix4(Kt),
            ct,
            pt,
          ),
          vt(ct - Math.cos(bt) * 0.5, pt + Math.sin(bt) * 0.5, 1.2, 0.8, bt));
      },
      vt = (ct, pt, bt, Ot, Rt) => {
        const Kt = new j0(0.5, 14),
          r0 = Kt.attributes.position;
        for (let St = 1; St < r0.count; St++) {
          const Qt = 0.6 + a() * 0.6;
          r0.setXY(St, r0.getX(St) * Qt, r0.getY(St) * Qt);
        }
        (Kt.rotateX(-Math.PI / 2)
          .scale(bt, 1, Ot)
          .rotateY(Rt)
          .translate(ct, 0.03, pt),
          k(m.blood, Kt, ct, pt));
      };
    (U(424.6, 166.4, 0.4, m.sheet),
      U(447.6, 156, 2, m.wool),
      U(409, 168.4, -1.2, m.woolOlive),
      U(452.6, 140.6, 0.9, m.sheet));
    for (const [ct, pt, bt, Ot] of [
      [431.4, 183.8, 1.2, 0.5],
      [435.6, 158.4, 1.8, 0.6],
      [442.4, 147, 0.9, 0.7],
      [438.8, 132, 2.4, 0.4],
      [444, 125.6, 1, 0.8],
      [429, 190.2, 0.8, 0.6],
    ])
      vt(ct, pt, bt, Ot, a() * Math.PI);
  }
  const L = [
      {
        a: Nt.breach,
        b: [Nt.x - Math.sin(Nt.yaw) * 1.2, Nt.z - Math.cos(Nt.yaw) * 1.2],
      },
    ],
    z = [
      [447, 124, 7, 0.9],
      [436, 120, 5, 0.5],
      [470, 118, 5, 0.5],
      [446, 79, 6, 0.6],
      [430, 96, 5, 0.6],
      ...d.mud,
    ],
    W = [[h0.x, h0.z, h0.half * 1.42]];
  n("litter");
  const D = $a(e, {
    trees: c,
    hedges: v.hedges,
    wear: [...S.wear, ...d.wear],
    ruts: L,
    mud: z,
    paved: W,
  });
  (i.add(D.group), n("ground"));
  const V = [
      { x: C.x, y: Math.max(0.6, C.y), z: C.z, s: 1.05, kind: "car" },
      {
        x: Nt.x - Math.sin(Nt.yaw) * 0.3,
        y: 0.85,
        z: Nt.z - Math.cos(Nt.yaw) * 0.3,
        s: 0.75,
        wide: 1.4,
        smoke: 1.3,
        kind: "car",
      },
      ...d.fires,
    ],
    A = xo(V, a);
  i.add(A.group);
  const K = V.map((k, O) => ({
      pos: I(k.x, k.y + 0.6 + k.s * 0.4, k.z),
      color: new Vt(1, 0.48, 0.16),
      cd:
        (k.kind === "car" ? 38 : k.kind === "brazier" ? 26 : 14) *
        (O === 1 ? 0.6 : 1),
      range: k.kind === "car" ? 14 : 10,
      k: (ht) => A.k[O] * go(ht, O),
      air: 1.9,
      airK: k.kind === "car" ? 1.3 : 0.9,
      kind: "fire",
    })),
    J = d.floods.map((k) => {
      const O = ho(k.pos, k.aim, k.angle * 0.78, new Vt(0.05, 0.055, 0.064), {
        length: k.pos.distanceTo(k.aim) * 1.12,
      });
      return (i.add(O), O);
    }),
    q = new P0();
  ((q.name = "park_lights"), i.add(q));
  const st = [...S.sources, ...d.sources, ...K],
    j = Mo(e, q, { sources: st, floods: d.floods, ambulance: d.ambulance });
  (l.build(i, "park"), n("bake"));
  const Y = [
      { id: "p3_generator", pos: [d.gen[0], 0.9, d.gen[1]], vol: 0.55 },
      { id: "p3_radio", pos: d.spots.radio || [467, 0.9, 75], vol: 0.45 },
      {
        id: "p3_flood_hum",
        pos: [d.floods[0].pos.x, d.floods[0].pos.y, d.floods[0].pos.z],
        vol: 0.3,
      },
      { id: "p3_fire_car", pos: [C.x, 1, C.z], vol: 0.6 },
      { id: "p3_brazier", pos: [d.brazier[0], 0.8, d.brazier[1]], vol: 0.4 },
      ...S.lamps
        .filter((k) => k.dying)
        .map((k) => ({ id: "p3_lamp_buzz", pos: [k.x, 3.8, k.z], vol: 0.3 })),
    ],
    x = {
      auto: !0,
      on: !1,
      loops: [],
      start() {
        const k = e.audio;
        !k?.ctx ||
          this.on ||
          ((this.on = !0),
          (this.loops = Y.map((O) =>
            k.loop(O.id, { pos: O.pos, vol: O.vol, bus: "sfx", fade: 2 }),
          )));
      },
      stop(k = 1.5) {
        for (const O of this.loops) O?.stop?.(k);
        ((this.loops = []), (this.on = !1));
      },
    };
  let p = 4;
  const g = e.game.camera;
  s.push((k, O) => {
    ((x0.uPT.value = O),
      D.update(g),
      S.update(k, O, g),
      d.update(k, O),
      y.update(k, O),
      j.update(k, O, g));
    for (let U = 0; U < J.length; U++) J[U].userData.U.uK.value = j.spots[U].k;
    let ht = 0;
    for (let U = 0; U < j.spots.length; U++)
      ((d.lensK[U] = j.spots[U].k),
        (u.K[60 + U] = j.spots[U].k),
        (ht += j.spots[U].k / j.spots.length));
    ((u.K[63] = ht),
      (p -= k),
      p <= 0 &&
        ((p = 5 + 4 * (0.5 + 0.5 * Math.sin(O * 0.7))),
        T &&
          (g.position.x - d.ambulance.pos.x) ** 2 +
            (g.position.z - d.ambulance.pos.z) ** 2 <
            4900 &&
          e.audio?.play?.("p3_siren_chirp", {
            pos: d.ambulance.pos.toArray(),
            vol: 0.5,
          })),
      x.auto &&
        !x.on &&
        e.audio?.ctx &&
        g.position.y > -2 &&
        V0(g.position.x, g.position.z, -10) &&
        x.start());
  });
  let T = !0;
  const G = (k, O, ht = 0) =>
      ht > -1 && V0(k, O) ? (ve(k, O) ? "camp" : "park") : null,
    Z = (k, O, ht = 0) => (ht > -3 && V0(k, O) ? 0 : null),
    tt = (k, O, ht = 0) => {
      if (!(ht > -1 && V0(k, O))) return null;
      if (Fa(k, O)) return "metal";
      if (Math.abs(k - 447.5) < 0.62 && O > ne.z0 - 0.4 && O < ne.z1 + 1.8)
        return "wood";
      const U = Le(k, O);
      return U.kind === "asphalt" || U.kind === "setts"
        ? "stone"
        : U.kind === "gravel"
          ? "gravel"
          : "grass";
    },
    it = (k, O) =>
      k > Jt.x0 + ke && k < Jt.x1 - ke && O > Jt.z0 + ke && O < Jt.z1 - 0.2,
    et = new Map(),
    at = 4;
  for (const k of w) {
    const O = Math.floor((k.x - k.r - 0.4) / at),
      ht = Math.floor((k.x + k.r + 0.4) / at),
      U = Math.floor((k.z - k.r - 0.4) / at),
      vt = Math.floor((k.z + k.r + 0.4) / at);
    for (let ct = O; ct <= ht; ct++)
      for (let pt = U; pt <= vt; pt++) {
        const bt = ct * 4096 + pt;
        (et.has(bt) || et.set(bt, []), et.get(bt).push(k));
      }
  }
  const nt = (k, O) => {
      const ht = et.get(Math.floor(k / at) * 4096 + Math.floor(O / at));
      if (!ht) return !1;
      for (const U of ht)
        if ((k - U.x) ** 2 + (O - U.z) ** 2 < (U.r + 0.3) ** 2) return !0;
      return !1;
    },
    mt = {
      park: {
        x0: Jt.x0,
        x1: Jt.x1,
        z0: Jt.z0,
        z1: Jt.z1,
        cell: 0.2,
        inArea: it,
        blocked: nt,
      },
    },
    Mt = (k, O, ht = 0.45) => {
      if (nt(k, O)) return !0;
      for (const U of f)
        if (
          U.on !== !1 &&
          (U.y1 === void 0 || U.y1 > 0.3) &&
          k > U.x0 - ht &&
          k < U.x1 + ht &&
          O > U.z0 - ht &&
          O < U.z1 + ht
        )
          return !0;
      return !1;
    },
    Ft = (k, O) => {
      let ht = null,
        U = 1e9;
      for (const vt of T0) {
        const ct = (vt[0] - k) ** 2 + (vt[1] - O) ** 2;
        ct < U && ((U = ct), (ht = vt));
      }
      return Math.atan2(ht[0] - k, ht[1] - O);
    },
    Et = [
      [414.4, 176.6],
      [452.2, 180.4],
      [408.2, 151.2],
      [456, 161.4],
      [419.6, 141],
      [468.8, 149.8],
      [457.4, 137.2],
      [424.4, 119.6],
      [470.6, 133.6],
      [404.2, 172.8],
      [468.4, 170.4],
      [409.2, 131.4],
      [402.6, 187.2],
      [436.6, 99.8],
      [459.4, 101.8],
      [459.4, 115.8],
      [437.8, 121.2],
    ]
      .filter(([k, O]) => !Mt(k, O))
      .map(([k, O], ht) => [
        k,
        O,
        +(Ft(k, O) + ((ht % 3) - 1) * 0.6).toFixed(2),
      ]);
  n("misc");
  const P = ko(a, {
    solid: Mt,
    hedges: v.hedges,
    yews: v.yews,
    trees: c,
    tents: d.tents,
  });
  n("sides");
  const $ = [];
  for (const k of d.tents)
    !k.burnt &&
      k.collapse < 0.5 &&
      !Mt(k.inside[0], k.inside[1], 0.32) &&
      $.push([+k.inside[0].toFixed(2), +k.inside[1].toFixed(2)]);
  for (const [k, O] of [
    [426.4, 92.6],
    [479.4, 99.6],
    [488, 110.6],
    [436.2, 86.8],
    [460.4, 66.8],
    [427, 99.4],
  ])
    $.length < 8 && !Mt(k, O, 0.35) && $.push([k, O]);
  $.length = Math.min($.length, 8);
  const lt = Z0,
    ft = (k, O) => {
      const ht = d.tents.find((U) => Math.hypot(U.x - k, U.z - O) < 0.6);
      return ht && !ht.burnt && ht.collapse < 0.5 ? ht.inside : null;
    },
    Pt = [
      ft(472.6, 119.6),
      ft(430.6, 104.8),
      ft(471, 108.4),
      ft(422.8, 110.6),
      ft(430.6, 116.2),
    ]
      .filter((k) => k && !Mt(k[0], k[1], 0.32))
      .map(([k, O]) => [+k.toFixed(2), +O.toFixed(2)]),
    Wt = [
      [430, 90.8],
      [470.6, 95.4],
      [430.2, 94],
      [470.2, 98.8],
      [426.8, 92.4],
      [466.8, 99.6],
    ].filter(([k, O]) => !Mt(k, O, 0.35)),
    Dt = [
      ...y.ambush,
      {
        id: "hedges",
        at: 146.5,
        spots: [
          [lt.x1 - 1.1, lt.z0 + 1.5],
          [lt.x1 - 1.1, lt.z1 - 1.1],
          [(lt.x0 + lt.x1) / 2, lt.z0 + 2.4],
          [(lt.x0 + lt.x1) / 2, lt.z1 - 2.2],
          [lt.x0 + 2, (lt.z0 + lt.z1) / 2],
        ].filter(([k, O]) => !Mt(k, O, 0.35)),
        leap: null,
        call: "a3_c_left3",
        n: 3,
      },
      {
        id: "tents",
        at: 128.5,
        spots: $.slice(),
        leap: null,
        call: "a3_more",
        n: 4,
      },
      { id: "queue", at: 119, spots: Pt, leap: null, call: "a3_c_more2", n: 3 },
      { id: "pad", at: 108, spots: Wt, leap: null, call: "a3_c_ahead2", n: 2 },
    ],
    e0 = {
      route: T0,
      chopperDoor: aa,
      exitOut: ea,
      dead: Et,
      sides: P,
      camp: $,
      ambush: Dt,
      radio: d.spots.radio,
      generator: d.gen,
      ambulance: d.ambulance.pos.toArray(),
      brazier: d.brazier,
    },
    n0 = {
      floods: {
        count: j.spots.length,
        set(k, O) {
          (j.setFlood(k, O),
            O ||
              e.audio?.play?.("p3_flood_off", {
                pos: j.spots[k]?.f.pos.toArray(),
                vol: 0.6,
              }));
        },
      },
      ambulance: {
        pos: d.ambulance.pos.toArray(),
        set(k) {
          ((T = !!k), d.setAmbulance(k));
        },
        chirp() {
          e.audio?.play?.("p3_siren_chirp", {
            pos: d.ambulance.pos.toArray(),
            vol: 0.7,
          });
        },
      },
      swing: {
        pos: S.swing?.pos,
        set(k) {
          S.swing && ((S.swing.manual = !0), (S.swing.target = k));
        },
        auto() {
          S.swing && (S.swing.manual = !1);
        },
        get k() {
          return S.swing ? S.swing.amp : 0;
        },
      },
      mist(k) {
        ((x0.uPMist.value.w = k), (n0.mistK = k));
      },
      lamps: {
        list: S.lamps
          .filter((k) => k.chan != null)
          .map((k) => ({
            x: +k.x.toFixed(1),
            z: +k.z.toFixed(1),
            dying: k.dying,
          })),
        set(k, O) {
          const ht = S.lamps.filter((U) => U.chan != null)[k];
          ht && (ht.on = !!O);
        },
      },
      fires: {
        list: V.map((k) => ({
          x: +k.x.toFixed(1),
          z: +k.z.toFixed(1),
          kind: k.kind,
        })),
        set(k, O) {
          A.set(k, O);
        },
      },
      medical: {
        set(k) {
          d.setMedical(k);
        },
      },
      sounds: x,
      crates: d.crates,
      trees: c,
      mask: D.mask,
      air: x0,
      mistK: 1,
      lights: j,
      glows: u,
      timing: t,
    };
  return {
    group: i,
    colliders: f,
    circles: w,
    anim: s,
    points: e0,
    props: n0,
    zoneAt: G,
    groundAt: Z,
    surfaceAt: tt,
    navPlans: mt,
    check: () => {
      const k = {
        routeLen: +Ia(T0).toFixed(1),
        routePts: T0.length,
        minClear: 1e9,
        at: null,
        deadOk: 0,
        sidesOk: 0,
        campOk: 0,
        chopper: [],
      };
      for (let U = 1; U < N0.length; U += 1) {
        const [vt, ct] = N0[U];
        for (const pt of f) {
          if (pt.on === !1 || (pt.y1 !== void 0 && pt.y1 < 0.3)) continue;
          const bt = Math.max(pt.x0 - vt, 0, vt - pt.x1),
            Ot = Math.max(pt.z0 - ct, 0, ct - pt.z1),
            Rt = Math.hypot(bt, Ot);
          Rt < k.minClear &&
            ((k.minClear = +Rt.toFixed(2)),
            (k.at = [
              +vt.toFixed(1),
              +ct.toFixed(1),
              "box",
              pt.x0.toFixed(1),
              pt.z0.toFixed(1),
            ]));
        }
        for (const pt of w) {
          const bt = Math.hypot(vt - pt.x, ct - pt.z) - pt.r;
          bt < k.minClear &&
            ((k.minClear = +bt.toFixed(2)),
            (k.at = [
              +vt.toFixed(1),
              +ct.toFixed(1),
              "circle",
              pt.x.toFixed(1),
              pt.z.toFixed(1),
            ]));
        }
      }
      const [O, , ht] = W0.pos;
      for (const U of f) {
        const vt = Math.max(U.x0 - O, 0, O - U.x1),
          ct = Math.max(U.z0 - ht, 0, ht - U.z1);
        Math.hypot(vt, ct) < W0.clear &&
          k.chopper.push(["box", U.x0, U.z0, U.x1, U.z1]);
      }
      for (const U of w)
        Math.hypot(U.x - O, U.z - ht) - U.r < W0.clear &&
          k.chopper.push(["circle", U.x, U.z, U.r]);
      return (
        (k.deadOk = Et.filter(([U, vt]) => !Mt(U, vt, 0.3)).length),
        (k.sidesOk = P.filter(([U, vt]) => !Mt(U, vt, 0.3)).length),
        (k.campOk = $.filter(([U, vt]) => !Mt(U, vt, 0.3)).length),
        (k.counts = {
          dead: Et.length,
          sides: P.length,
          camp: $.length,
          colliders: f.length,
          circles: w.length,
          lights: j.lights.length,
          glows: u.count,
        }),
        k
      );
    },
    looks: { park: Ce, camp: wo },
    warmUp() {},
  };
}
function ko(e, { solid: a, hedges: t, yews: r, trees: o, tents: n }) {
  const i = [];
  for (const c of t)
    c.h > 1.75 &&
      i.push({
        type: "seg",
        cx: c.cx,
        cz: c.cz,
        c: Math.cos(c.yaw),
        s: Math.sin(c.yaw),
        hl: c.L / 2,
        hw: c.W / 2,
      });
  for (const c of r) i.push({ type: "circle", x: c.x, z: c.z, r: c.r * 0.8 });
  for (const c of o)
    c.kind !== "young" &&
      i.push({ type: "circle", x: c.x, z: c.z, r: c.r * 1.15 });
  for (const c of n)
    i.push({
      type: "seg",
      cx: c.x,
      cz: c.z,
      c: Math.cos(c.yaw),
      s: Math.sin(c.yaw),
      hl: c.L / 2,
      hw: c.W / 2,
    });
  (i.push(
    { type: "circle", x: I0.x, z: I0.z, r: I0.r },
    { type: "circle", x: L0.x, z: L0.z, r: 1.3 },
  ),
    i.push({
      type: "seg",
      cx: Nt.x,
      cz: Nt.z,
      c: Math.cos(Nt.yaw + Math.PI / 2),
      s: Math.sin(Nt.yaw + Math.PI / 2),
      hl: 2.3,
      hw: 0.9,
    }));
  const f = (c, M, h, v, S) => {
      const d = (D, V) => (D - S.cx) * S.c - (V - S.cz) * S.s,
        y = (D, V) => (D - S.cx) * S.s + (V - S.cz) * S.c,
        m = d(c, M),
        F = y(c, M),
        C = d(h, v),
        L = y(h, v);
      let z = 0,
        W = 1;
      for (const [D, V, A] of [
        [m, C - m, S.hl],
        [F, L - F, S.hw],
      ]) {
        if (Math.abs(V) < 1e-9) {
          if (Math.abs(D) > A) return !1;
          continue;
        }
        let K = (-A - D) / V,
          J = (A - D) / V;
        if (
          (K > J && ([K, J] = [J, K]),
          (z = Math.max(z, K)),
          (W = Math.min(W, J)),
          z > W)
        )
          return !1;
      }
      return W > 0.02 && z < 0.98;
    },
    w = (c, M, h, v, S) =>
      se(S.x, S.z, c, M, h, v) < S.r &&
      Math.hypot(h - S.x, v - S.z) > S.r * 0.9,
    s = (c, M) => {
      let h = 0,
        v = 0;
      for (const S of N0.filter((d, y) => y % 6 === 0)) {
        if (Math.hypot(S[0] - c, S[1] - M) > 38) continue;
        v++;
        let y = !1;
        for (const m of i)
          if (
            m.type === "circle"
              ? w(S[0], S[1], c, M, m)
              : f(S[0], S[1], c, M, m)
          ) {
            y = !0;
            break;
          }
        y || h++;
      }
      return v > 0 ? 1 - h / v : 0;
    },
    l = [];
  for (let c = 32; c < 203; c += 1.5)
    for (let M = 352; M < 528; M += 1.5) {
      const h = G0(M, c);
      if (h < 12 || h > 30 || (ve(M, c) && !(c > 110)) || a(M, c, 0.5))
        continue;
      const v = s(M, c);
      if (v < 0.62) continue;
      let S = 0,
        d = 1e9;
      T0.forEach((C, L) => {
        const z = (C[0] - M) ** 2 + (C[1] - c) ** 2;
        z < d && ((d = z), (S = L));
      });
      const y = T0[Math.max(0, S - 1)],
        m = T0[Math.min(T0.length - 1, S + 1)],
        F = Math.sign((m[0] - y[0]) * (c - y[1]) - (m[1] - y[1]) * (M - y[0]));
      l.push({ x: M, z: c, h: v, bi: S, side: F });
    }
  const u = [];
  for (let c = 0; c < 2 && u.length < 26; c++)
    for (let M = c; M < T0.length && u.length < 26; M += 2)
      for (const h of [-1, 1]) {
        const v = l.filter(
          (d) =>
            Math.abs(d.bi - M) <= 2 &&
            d.side === h &&
            u.every((y) => Math.hypot(y[0] - d.x, y[1] - d.z) > 7),
        );
        if (!v.length) continue;
        v.sort((d, y) => y.h - d.h || d.x - y.x);
        const S = v[Math.floor(e() * Math.min(2, v.length))];
        if ((u.push([+S.x.toFixed(1), +S.z.toFixed(1)]), u.length >= 26)) break;
      }
  return u;
}
export { Ce as L, Io as b };
