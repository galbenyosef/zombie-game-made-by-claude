// assets__park-CwBfNU5l 02 — math
// Lines 337-681 of readable/assets__park-CwBfNU5l.pretty.js (statement-aligned).
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
