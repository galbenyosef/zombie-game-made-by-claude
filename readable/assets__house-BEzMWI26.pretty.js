import { k as Ze, H as S0 } from "./district-BhfbivMT.js";
import {
  V as j,
  i as J0,
  am as $e,
  c as y0,
  $ as Je,
  m as ge,
  M as X0,
  ab as D0,
  a9 as Ge,
  C as M0,
  x as E0,
  U as we,
  X as xe,
  al as Qe,
  Y as ye,
  aw as et,
  G as l0,
  o as Ue,
  a5 as Re,
  a6 as Ne,
  J as qe,
  h as Z0,
  p as me,
  a as Fe,
  S as Ae,
  A as Q0,
  P as Ce,
  a0 as tt,
  B as ee,
  I as g0,
  n as ot,
  D as ie,
  k as at,
  ah as st,
} from "./index-DaQlAVPp.js";
import {
  a as G,
  B as pe,
  r as L0,
  l as p0,
  m as nt,
  M as U0,
} from "./kit-CFeM0oZ2.js";
import {
  W as d0,
  O as T0,
  I as n0,
  v as $0,
  F as I0,
  a as r0,
  b as X,
  l as rt,
  S as it,
  R as Ye,
  T as m0,
  c as v0,
  m as lt,
  B as z0,
  s as Ie,
  p as Le,
  d as ct,
  e as ut,
  f as ht,
  H as dt,
  g as ft,
  P as le,
  h as mt,
  i as ce,
} from "./furniture-BraVmmRV.js";
const ve = new j(-0.47, 0.6, 0.65).normalize(),
  pt = `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;                                   // on the far plane
}`,
  vt = `
precision highp float;
varying vec3 vDir;
uniform vec3 uSun;          // unit, toward the sun (dream)
uniform vec3 uMoon;         // unit, toward the moon (ruins)
uniform float uMode;        // 0 dream .. 1 ruins
uniform float uForest;      // 0 .. 1: the night over the forest behind the church (the forest builder's; blended by index.js LOOKS)
uniform vec3 uMoonF;        // unit, toward the forest's moon (the forest look's key light comes from there)
uniform float uTime;
float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
void main() {
  vec3 d = normalize(vDir);
  float up = d.y;
  // ---- DREAM
  vec3 zen = vec3(0.045, 0.11, 0.33), mid = vec3(0.26, 0.3, 0.5), hor = vec3(1.05, 0.5, 0.2);
  float t = clamp(up, 0.0, 1.0);
  vec3 dream = mix(hor, mid, smoothstep(0.0, 0.18, t));
  dream = mix(dream, zen, smoothstep(0.12, 0.75, t));
  float sd = max(dot(d, uSun), 0.0);
  dream += vec3(1.6, 0.9, 0.45) * pow(sd, 6.0) * 0.45 + vec3(1.0, 0.7, 0.4) * pow(sd, 48.0) * 0.9;
  dream += vec3(14.0, 10.0, 6.0) * smoothstep(0.99955, 0.99985, sd);                   // the disc
  // clouds: a layer of soft cumulus lit gold from below near the sun
  if (up > 0.0) {
    vec2 cp = d.xz / (up + 0.12) * 1.4 + vec2(uTime * 0.004, uTime * 0.002);
    float c = smoothstep(0.52, 0.78, fbm(cp));
    float lit = pow(sd, 3.0);
    vec3 cc = mix(vec3(0.42, 0.34, 0.42), vec3(1.25, 0.78, 0.46), lit) * (0.8 + 0.4 * fbm(cp * 2.3));
    dream = mix(dream, cc, c * smoothstep(0.0, 0.08, up) * 0.85);
  }
  dream = mix(dream, hor * 0.75 + vec3(0.1, 0.1, 0.05), smoothstep(0.0, -0.1, up));    // below the horizon: warm haze
  // ---- RUINS
  float az = atan(d.x, d.z);                                 // 0 = south (+z)
  float glowDir = 0.55 + 0.45 * cos(az) + 0.25 * cos(az - 1.4);                          // the fires: south and east
  vec3 ruin = mix(vec3(0.075, 0.03, 0.02) * glowDir, vec3(0.006, 0.007, 0.012), smoothstep(0.0, 0.45, up));
  ruin += vec3(0.5, 0.13, 0.04) * glowDir * exp(-max(up, 0.0) * 9.0) * 0.55;
  if (up > -0.05) {
    vec2 sp = d.xz / (up + 0.25) * 1.1 + vec2(uTime * 0.012, -uTime * 0.006);
    float sm = fbm(sp) * 0.7 + fbm(sp * 2.7 + 3.0) * 0.3;
    float under = exp(-max(up, 0.0) * 5.0) * glowDir;
    vec3 smoke = mix(vec3(0.012, 0.01, 0.01), vec3(0.22, 0.07, 0.025) * under, smoothstep(0.35, 0.75, sm));
    ruin = mix(ruin, smoke, smoothstep(0.3, 0.6, sm) * 0.9);
  }
  float md = max(dot(d, uMoon), 0.0);
  ruin += vec3(0.5, 0.45, 0.4) * smoothstep(0.9993, 0.9997, md) * 0.35 + vec3(0.06, 0.05, 0.05) * pow(md, 40.0);
  vec3 col = mix(dream, ruin, uMode);
  // ---- FOREST (behind the church; the forest builder's): a clear night, deep cold blue, stars, a bright moon in the
  // south-west; to the north, low over the town, the glow of the burning city under its smoke. (Round 3: the forest's
  // exposure is high and its night dark: the sky is a little lighter than the black of the trunks, no more - it is what
  // their silhouettes stand against in the gaps of the crowns; a paler band low down, where the mist meets it.)
  if (uForest > 0.001) {
    float mf = max(dot(d, uMoonF), 0.0);
    // (round 3b: darker again - "we cant really see far away": the sky only just lighter than the trunks)
    vec3 fzen = vec3(0.0004, 0.0009, 0.0021), fmid = vec3(0.0009, 0.002, 0.0035), fhor = vec3(0.0012, 0.0017, 0.0024);
    vec3 fo = mix(fhor, fmid, smoothstep(0.04, 0.24, up));
    fo = mix(fo, fzen, smoothstep(0.15, 0.8, up));
    // the moon: a wide pale halo, a tight glow, the disc with its grey seas
    fo += vec3(0.008, 0.012, 0.017) * pow(mf, 6.0) + vec3(0.03, 0.037, 0.045) * pow(mf, 60.0) + vec3(0.2, 0.22, 0.24) * pow(mf, 900.0);
    vec3 mx = normalize(cross(uMoonF, vec3(0.0, 1.0, 0.0))), my = cross(mx, uMoonF);
    vec2 mp = vec2(dot(d, mx), dot(d, my)) / 0.0235;                                    // (-1..1 across the disc)
    float disc = 1.0 - smoothstep(0.9, 1.0, length(mp));
    float seas = fbm(mp * 1.6 + 3.0) * 0.8 + fbm(mp * 4.0) * 0.2;
    fo = mix(fo, vec3(2.3, 2.42, 2.55) * (1.0 - 0.28 * smoothstep(0.45, 0.7, seas)) * (0.9 + 0.1 * sqrt(max(0.0, 1.0 - dot(mp, mp)))), disc);
    // stars (fewer near the moon and the glow; a slow twinkle)
    if (up > 0.02) {
      vec3 sp3 = d * 330.0, si = floor(sp3), sf = fract(sp3) - 0.5;
      float sh = fract(sin(dot(si, vec3(127.1, 311.7, 74.7))) * 43758.5453);
      float big = fract(sh * 91.7);
      float star = step(0.9972, sh) * smoothstep(0.22 + big * 0.2, 0.0, length(sf - (vec3(fract(sh * 13.1), fract(sh * 7.3), fract(sh * 3.9)) - 0.5) * 0.5));
      float tw = 0.7 + 0.3 * sin(uTime * (1.3 + big * 3.0) + sh * 60.0);
      fo += vec3(0.8, 0.86, 1.0) * star * (0.25 + big * big * 1.4) * tw * smoothstep(0.02, 0.25, up) * (1.0 - smoothstep(0.96, 0.995, mf));
    }
    // thin cloud wisps, silver toward the moon
    if (up > 0.0) {
      vec2 cq = d.xz / (up + 0.18) * 0.9 + vec2(uTime * 0.0025, -uTime * 0.0015);
      float wisp = smoothstep(0.55, 0.85, fbm(cq * vec2(1.0, 2.6) + 11.0)) * smoothstep(0.0, 0.12, up) * (1.0 - smoothstep(0.55, 0.9, up));
      fo = mix(fo, vec3(0.007, 0.01, 0.014) + vec3(0.035, 0.04, 0.044) * pow(mf, 5.0), wisp * 0.5);
    }
    // the burning city to the north: a red-orange glow low down, smoke rolling over it lit from below. (Round 5: the
    // longer path's middle row runs straight at it for ~70 m - at its old strength the sky there burned orange behind
    // the trees; round 5b, the user: "i missed ur burning town" - ~40 % of it: an ember glow low under the smoke, the
    // town's roofs and spires black against it, the sky above and the forest dark)
    float north = pow(clamp(-d.z * 0.85 + 0.15, 0.0, 1.0), 1.6) * (1.0 + 0.3 * sin(az * 3.0 + 1.0));
    float low = exp(-max(up, 0.0) * 5.5) * smoothstep(-0.03, 0.07, up);            // (above the treeline, not on the horizon line: the far trunks stand dark against it)
    fo += vec3(0.12, 0.03, 0.0085) * north * low;
    fo += vec3(0.032, 0.0075, 0.0025) * north * exp(-max(up, 0.0) * 1.6);
    if (up > -0.05) {
      vec2 sq = d.xz / (up + 0.3) * 1.2 + vec2(uTime * 0.01, -uTime * 0.005);
      float smk = fbm(sq) * 0.7 + fbm(sq * 2.6 + 5.0) * 0.3;
      vec3 smC = mix(vec3(0.006, 0.006, 0.008), vec3(0.09, 0.024, 0.008) * low * 1.6, smoothstep(0.45, 0.8, smk));
      fo = mix(fo, smC, smoothstep(0.35, 0.65, smk) * north * smoothstep(0.75, 0.05, up) * 0.85);
    }
    fo = mix(fo, fhor * 0.6 + vec3(0.04, 0.01, 0.003) * north, smoothstep(0.0, -0.15, up));     // below the horizon: dark haze
    col = mix(col, fo, uForest);
  }
  gl_FragColor = vec4(col, 1.0);
}`;
function Ut() {
  const s = {
      uSun: { value: new j(-0.83, 0.27, 0.49).normalize() },
      uMoon: { value: new j(0.45, 0.42, -0.79).normalize() },
      uMode: { value: 0 },
      uForest: { value: 0 },
      uTime: { value: 0 },
      uMoonF: { value: ve.clone() },
    },
    o = new J0({
      vertexShader: pt,
      fragmentShader: vt,
      uniforms: s,
      side: $e,
      depthWrite: !1,
      fog: !1,
      toneMapped: !1,
    }),
    e = new y0(new Je(500, 48, 24), o);
  return (
    (e.name = "sky2"),
    (e.frustumCulled = !1),
    (e.renderOrder = -10),
    {
      mesh: e,
      uniforms: s,
      update(n) {
        s.uTime.value += n;
      },
    }
  );
}
const k0 = {
  uHB: { value: new E0(5.3, 1.1, 203.3, 0) },
  uHBCol: { value: new M0(0.8, 0.46, 0.22) },
  uEM: { value: new E0(3.1, 0.25, 203.4, 0) },
  uEMCol: { value: new M0(0.9, 0.22, 0.05) },
  uMB: { value: new E0(6, 0.06, 203.6, 0) },
  uMBCol: { value: new M0(0.32, 0.42, 0.68) },
};
function P(s, o = 1) {
  const e = s.onBeforeCompile,
    n = s.customProgramCacheKey?.bind(s);
  return (
    (s.onBeforeCompile = (t, u) => {
      (e && e(t, u),
        (t.uniforms.uHB = k0.uHB),
        (t.uniforms.uHBCol = k0.uHBCol),
        (t.uniforms.uEM = k0.uEM),
        (t.uniforms.uEMCol = k0.uEMCol),
        (t.uniforms.uMB = k0.uMB),
        (t.uniforms.uMBCol = k0.uMBCol),
        (t.uniforms.uHBGain = { value: o }),
        (t.vertexShader = t.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vHBW;`,
          )
          .replace(
            "#include <worldpos_vertex>",
            `#include <worldpos_vertex>
#ifdef USE_INSTANCING
  vHBW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
  vHBW = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`,
          )),
        (t.fragmentShader = t.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vHBW;
uniform vec4 uHB;
uniform vec3 uHBCol;
uniform vec4 uEM;
uniform vec3 uEMCol;
uniform vec4 uMB;
uniform vec3 uMBCol;
uniform float uHBGain;`,
          )
          .replace(
            "#include <lights_fragment_end>",
            `#include <lights_fragment_end>
      {
        float hbIn = smoothstep(${(d0.W - 0.02).toFixed(3)}, ${(d0.W + 0.06).toFixed(3)}, vHBW.x) * smoothstep(${(d0.E + 0.02).toFixed(3)}, ${(d0.E - 0.06).toFixed(3)}, vHBW.x)
                   * smoothstep(${(d0.N - 0.02).toFixed(3)}, ${(d0.N + 0.06).toFixed(3)}, vHBW.z) * smoothstep(${(d0.S + 0.02).toFixed(3)}, ${(d0.S - 0.06).toFixed(3)}, vHBW.z);
        vec3 hbL = uHB.xyz - vHBW;
        float hbD2 = dot(hbL, hbL);
        vec3 hbLv = normalize((viewMatrix * vec4(hbL, 0.0)).xyz);
        float hbWrap = 0.35 + 0.65 * max(dot(geometryNormal, hbLv), 0.0);
        float hbFall = 1.0 / (1.0 + 0.42 * hbD2);
        vec3 emL = uEM.xyz - vHBW;
        float emD2 = dot(emL, emL);
        vec3 emLv = normalize((viewMatrix * vec4(emL, 0.0)).xyz);
        float emTerm = uEM.w * (0.25 + 0.75 * max(dot(geometryNormal, emLv), 0.0)) / (0.08 + 2.2 * emD2);
        vec3 mbL = uMB.xyz - vHBW;
        vec3 mbLv = normalize((viewMatrix * vec4(mbL, 0.0)).xyz);
        float mbTerm = uMB.w * (0.3 + 0.7 * max(dot(geometryNormal, mbLv), 0.0)) / (1.0 + 0.3 * dot(mbL, mbL));
        reflectedLight.indirectDiffuse += BRDF_Lambert(diffuseColor.rgb) * hbIn * uHBGain * (uHB.w * hbWrap * hbFall * uHBCol + emTerm * uEMCol + mbTerm * uMBCol);
      }`,
          )));
    }),
    (s.customProgramCacheKey = () => (n ? n() : "") + "|hb2" + o),
    (s.needsUpdate = !0),
    s
  );
}
function bt(s) {
  const { mats: o } = s,
    e = (h) => o.has(h),
    n = ge,
    t = (h) => {
      const c = h.clone();
      return ((c.userData = { ...h.userData }), c);
    },
    u = (h) => {
      const c = t(h);
      return ((c.vertexColors = !0), c);
    },
    d = (h, c, m, g = {}) => o.get(h, { ...g, color: e(h) ? m : c }),
    a = {};
  return (
    (a.log = P(u(o.get("house_log", { uv: 1 })))),
    (a.chink = P(u(d("plaster_bare", "#b8ad98", "#e6dcc6")))),
    (a.floor = P(t(o.get("house_floor")))),
    (a.plank = P(u(o.get("house_plank")))),
    (a.plankD = P(u(o.get("house_plank", { side: n })))),
    (a.shingle = t(o.get("house_shingle"))),
    (a.stone = P(u(o.get("house_stone")))),
    (a.wood = P(t(o.get("wood_oak_pale")))),
    (a.woodV = P(u(o.get("wood_oak_pale")))),
    (a.walnut = P(t(o.get("wood_walnut")))),
    (a.iron = P(t(o.get("iron_black")))),
    (a.brass = P(t(o.get("brass_aged")))),
    (a.rust = P(t(o.get("rust_metal")))),
    (a.quilt = P(t(o.get("house_quilt", { side: n })))),
    (a.linen = P(
      t(
        e("bed_linen")
          ? o.get("bed_linen", { side: n })
          : o.get("linen_stained", { side: n }),
      ),
    )),
    (a.ticking = P(t(d("linen_stained", "#8d8470", "#c9bfa8")))),
    (a.wool = P(t(d("wool_grey", "#3e4a52", "#8aa0b0", { side: n })))),
    (a.woolRed = P(t(d("wool_grey", "#5a2420", "#c46050", { side: n })))),
    (a.woolBrown = P(t(d("wool_grey", "#4a3a2a", "#a88a66", { side: n })))),
    (a.leather = P(t(o.get("leather_brown")))),
    (a.ceramic = P(t(o.get("porcelain_cracked")))),
    (a.enamel = P(
      t(d("porcelain_cracked", "#c8cfd0", "#dfe8ea", { rough: 0.3 })),
    )),
    (a.labels = P(t(o.get("house_labels", { uv: 1 })))),
    (a.paper = P(t(o.get("paper_old")))),
    (a.rug = P(t(o.get("house_rug", { uv: 1 })))),
    (a.char = P(t(o.get("ruin_char")))),
    (a.wax = P(t(d("wax_candle", "#bfb294", "#d6c6a4")))),
    (a.misc = P(new X0({ vertexColors: !0, roughness: 0.62 }))),
    (a.food = a.misc),
    (a.paint = P(t(d("wood_painted_white", "#3e5a56", "#8fb0a6")))),
    (a.canvas = P(
      t(d("wool_grey", "#4a3e2c", "#a08a62", { side: n, rough: 0.8 })),
    )),
    (a.backing = P(t(d("linen_stained", "#bdb29a", "#e6dcc4", { side: n })))),
    (a.herb = P(new X0({ vertexColors: !0, roughness: 0.9, side: n }))),
    (a.cord = P(new X0({ color: 6969924, roughness: 0.9 }))),
    (a.dark = new X0({ color: 328707, roughness: 1 })),
    (a.glass = new D0({
      color: 13161676,
      roughness: 0.06,
      metalness: 0,
      transparent: !0,
      opacity: 0.2,
      depthWrite: !1,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      envMapIntensity: 1.6,
      side: n,
      normalMap: gt(),
      normalScale: new Ge(0.35, 0.35),
    })),
    (a.glass.emissive = new M0(1, 0.55, 0.25)),
    (a.glass.emissiveIntensity = 0),
    (a.jar = new D0({
      color: 12110008,
      roughness: 0.12,
      transparent: !0,
      opacity: 0.32,
      depthWrite: !1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      envMapIntensity: 1.8,
    })),
    P(a.jar, 0.6),
    (a.lampGlass = new D0({
      color: 14674140,
      roughness: 0.04,
      transparent: !0,
      opacity: 0.3,
      depthWrite: !1,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
      envMapIntensity: 2.2,
    })),
    (a.kerosene = new D0({
      color: 12618298,
      roughness: 0.08,
      transparent: !0,
      opacity: 0.5,
      depthWrite: !1,
      envMapIntensity: 1.5,
    })),
    (a.chimney = new D0({
      color: 15525076,
      roughness: 0.03,
      transparent: !0,
      opacity: 0.12,
      depthWrite: !1,
      clearcoat: 1,
      clearcoatRoughness: 0.03,
      envMapIntensity: 2.5,
      side: n,
      emissive: new M0(1, 0.62, 0.3),
      emissiveIntensity: 0,
    })),
    (a.woolV = P(u(d("wool_grey", "#8a8680", "#ffffff", { side: n })))),
    (a.enamelV = P(
      u(d("porcelain_cracked", "#d8d2c6", "#ffffff", { rough: 0.32 })),
    )),
    (a.water = new D0({
      color: 724239,
      roughness: 0.04,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      envMapIntensity: 1.6,
    })),
    a
  );
}
let x0 = null;
function gt() {
  if (x0) return x0;
  const s = 128,
    o = new Uint8Array(s * s * 4),
    e = (n, t) =>
      Math.sin(
        (n / s) * Math.PI * 2 * 2 + Math.sin((t / s) * Math.PI * 2 * 3) * 0.9,
      ) *
        0.6 +
      Math.sin(
        (t / s) * Math.PI * 2 * 5 + Math.cos((n / s) * Math.PI * 2) * 1.3,
      ) *
        0.4;
  for (let n = 0; n < s; n++)
    for (let t = 0; t < s; t++) {
      const u = e(t + 1, n) - e(t - 1, n),
        d = e(t, n + 1) - e(t, n - 1);
      let a = -u * 2.5,
        h = -d * 2.5,
        c = 1;
      const m = Math.hypot(a, h, c);
      ((a /= m), (h /= m), (c /= m));
      const g = (n * s + t) * 4;
      ((o[g] = (a * 0.5 + 0.5) * 255),
        (o[g + 1] = (h * 0.5 + 0.5) * 255),
        (o[g + 2] = (c * 0.5 + 0.5) * 255),
        (o[g + 3] = 255));
    }
  return (
    (x0 = new we(o, s, s, xe)),
    (x0.wrapS = x0.wrapT = Qe),
    (x0.needsUpdate = !0),
    (x0.magFilter = ye),
    (x0.minFilter = et),
    (x0.generateMipmaps = !0),
    x0
  );
}
const Te = (s) => s * s * (3 - 2 * s),
  Pe = (105 * Math.PI) / 180;
function wt(s, o, e, n, t) {
  const a = (e - 0.02) / 5,
    h = [0.54, 0.26, 0.21],
    c = [0.98, 0.8, 0.6],
    m = (w, M, p) => (p > -0.045 * 0.5 ? c : h);
  for (let w = 0; w < 5; w++) {
    const M = -e + w * (a + 0.005),
      p = G(M, 0, -0.045, M + a, n - (w % 2) * 0.004, 0, 0.004, "y", 1);
    ($0(p, m), s.add(p, o.plank));
  }
  const g = 0.026;
  for (const w of [0.26, n - 0.3]) {
    const M = G(-e + 0.03, w - 0.065, 0, -0.03, w + 0.065, g, 0.006, "x", 1);
    (r0(M, c), s.add(M, o.plank));
  }
  {
    const w = new j(-0.1, 0.33, g / 2),
      M = new j(-e + 0.1, n - 0.3 - 0.07, g / 2),
      p = w.distanceTo(M),
      C = G(-p / 2, -0.055, -g / 2, p / 2, 0.055, g / 2, 0.006, "x", 1),
      A = Math.atan2(M.y - w.y, M.x - w.x);
    (C.applyMatrix4(new Ue().makeRotationZ(A)),
      C.translate((w.x + M.x) / 2, (w.y + M.y) / 2, w.z),
      r0(C, c),
      s.add(C, o.plank));
  }
  for (const w of [0.26, n - 0.3]) {
    const M = e * 0.62,
      p = new Re();
    (p.moveTo(0, -0.028),
      p.lineTo(-M, -0.012),
      p.quadraticCurveTo(-M - 0.03, 0, -M, 0.012),
      p.lineTo(0, 0.028),
      p.lineTo(0, -0.028));
    const C = new Ne(p, { depth: 0.005, bevelEnabled: !1 });
    (C.translate(0.005, w, g + 5e-4), s.add(C, o.iron, { cast: !1 }));
    for (let A = 0; A < 4; A++) {
      const L = -0.05 - (A * (M - 0.08)) / 3;
      s.add(
        p0(
          [
            [0, 0],
            [0.006, 0],
            [0.005, 0.003],
            [0, 0.004],
          ],
          L,
          w,
          g + 0.005,
          { segs: 8, rot: [Math.PI / 2, 0, 0] },
        ),
        o.iron,
        { cast: !1 },
      );
    }
    s.add(
      L0([0.012, w - 0.04, g * 0.5], [0.012, w + 0.04, g * 0.5], 0.012, 10),
      o.iron,
      { cast: !1 },
    );
  }
  {
    const w = new qe(0.045, 0.006, 8, 24);
    (w.translate(-e + 0.11, 1 - 0.045, -0.045 - 0.012),
      s.add(w, o.iron, { cast: !1 }),
      s.add(
        p0(
          [
            [0, 0],
            [0.018, 0],
            [0.012, 0.012],
            [0, 0.014],
          ],
          -e + 0.11,
          1,
          -0.045,
          { segs: 12, rot: [-Math.PI / 2, 0, 0] },
        ),
        o.iron,
        { cast: !1 },
      ));
    const M = G(-e + 0.07, 0.93, g, -e + 0.1, 1.13, g + 0.045, 0.01, "y", 1);
    (r0(M, c), s.add(M, o.plank));
  }
}
function De(s, o, e, n, t, u) {
  const d = e.wall === "N",
    a = d ? n0.z0 : n0.z1,
    h = d ? X.z0 : X.z1,
    c = d ? 1 : -1,
    m = new l0();
  m.name = "house_" + n;
  const g = u,
    w = 0.1,
    M = Math.min(a, h) - 0.03,
    p = Math.max(a, h) + 0.03,
    C = (k, b, N) => rt(k, b, N),
    A = [
      G(e.a - w, 0, M, e.a, e.y1 + 0.03, p, 0.012, "y"),
      G(e.b, 0, M, e.b + w, e.y1 + 0.03, p, 0.012, "y"),
      G(
        e.a - w - 0.02,
        e.y1,
        M - 0.005,
        e.b + w + 0.02,
        e.y1 + 0.16,
        p + 0.005,
        0.014,
        "x",
      ),
    ];
  for (const k of A) ($0(k, C), g.add(k, o.plank));
  {
    const k = G(
      e.a - 0.02,
      -0.02,
      M + 0.02,
      e.b + 0.02,
      I0 + 0.018,
      p - 0.02,
      0.01,
      "x",
    );
    ($0(k, (b, N, q) => {
      const O = C(b, N, q);
      return [O[0] * 0.8, O[1] * 0.78, O[2] * 0.75];
    }),
      g.add(k, o.plank));
  }
  const L = e.b - e.a - 0.02,
    U = e.y1 - 0.055,
    R = 0.045,
    I = 0.03,
    W = a - c * (0.02 + R),
    o0 = W - c * 0.002,
    D = W - c * 0.03,
    Y = Math.min(o0, D),
    e0 = Math.max(o0, D);
  for (const k of [
    G(e.a, 0.02, Y, e.a + 0.025, e.y1, e0, 0.004, "y"),
    G(e.b - 0.025, 0.02, Y, e.b, e.y1, e0, 0.004, "y"),
    G(e.a, e.y1 - 0.025, Y, e.b, e.y1, e0, 0.004, "x"),
  ])
    ($0(k, C), g.add(k, o.plank));
  const T = e.hinge === "b" ? e.b - 0.012 : e.a + 0.012,
    S = new l0();
  S.name = n + ":pivot";
  const H = a - c * 0.02;
  S.position.set(T, I0 + I, H);
  const K = d ? 0 : Math.PI,
    x = (e.hinge === "a") === d,
    v = new pe("house_" + n + "_leaf");
  wt(v, o, L, U);
  const z = new l0();
  ((z.name = n + ":leaf"),
    v.flush(z),
    x && (z.scale.x = -1),
    S.add(z),
    m.add(S));
  for (const [k] of [[T]])
    for (const b of [0.26, U - 0.3])
      g.add(
        L0(
          [
            k + (e.hinge === "b" ? 0.02 : -0.02),
            I0 + I + b - 0.05,
            a - c * 0.02,
          ],
          [
            k + (e.hinge === "b" ? 0.02 : -0.02),
            I0 + I + b + 0.06,
            a - c * 0.02,
          ],
          0.007,
          8,
        ),
        o.iron,
        { cast: !1 },
      );
  const r = e.b - e.a + 0.34,
    B = 1.21,
    y = e.hinge === "b" ? e.b + w + 0.07 : e.a - w - 0.07,
    a0 = a + c * 0.052,
    Z = new l0();
  ((Z.name = n + ":barPivot"),
    Z.position.set(y, B, a0),
    (Z.rotation.y = e.hinge === "b" ? 0 : Math.PI));
  const $ = new pe("house_" + n + "_bar");
  {
    const k = G(-r, -0.045, -0.04, 0.05, 0.045, 0.04, 0.012, "x", 2);
    (r0(k, [0.8, 0.62, 0.44]), $.add(k, o.plank, { cast: !1 }));
  }
  $.add(L0([0, 0, -0.06], [0, 0, 0.06], 0.012, 8), o.iron, { cast: !1 });
  const J = new l0();
  ((J.name = n + ":bar"), $.flush(J), Z.add(J), m.add(Z));
  const i = e.hinge === "b" ? e.a - w * 0.5 : e.b + w * 0.5,
    f = (k) => {
      const b = a + c * 0.005,
        N = a + c * 0.11,
        q = [
          G(
            k - 0.035,
            B - 0.07,
            Math.min(b, N),
            k + 0.035,
            B - 0.058,
            Math.max(b, N),
            0.003,
            "z",
          ),
        ],
        O = a + c * 0.104;
      (q.push(
        G(
          k - 0.035,
          B - 0.07,
          Math.min(O, O + c * 0.012),
          k + 0.035,
          B + 0.06,
          Math.max(O, O + c * 0.012),
          0.003,
          "y",
        ),
      ),
        q.push(
          G(
            k - 0.045,
            B - 0.1,
            Math.min(a, a + c * 0.012),
            k + 0.045,
            B + 0.1,
            Math.max(a, a + c * 0.012),
            0.003,
            "y",
          ),
        ));
      for (const t0 of q) g.add(t0, o.iron, { cast: !1 });
    };
  (f(i),
    f(e.hinge === "b" ? e.b + w * 0.35 : e.a - w * 0.35),
    g.add(
      G(
        y - 0.05,
        B - 0.08,
        Math.min(a, a + c * 0.012),
        y + 0.05,
        B + 0.08,
        Math.max(a, a + c * 0.012),
        0.004,
        "y",
      ),
      o.iron,
      { cast: !1 },
    ));
  const _ = {
      x0: e.a,
      x1: e.b,
      z0: Math.min(a, h),
      z1: Math.max(a, h),
      y0: 0,
      y1: 2.2,
      on: !0,
      door: n,
    },
    F = T,
    E = Math.sin(Pe - Math.PI / 2) * L,
    V = {
      x0: e.hinge === "b" ? F - 0.06 : F - E - 0.1,
      x1: e.hinge === "b" ? F + E + 0.1 : F + 0.06,
      z0: d ? a : a - L - 0.02,
      z1: d ? a + L + 0.02 : a,
      y0: 0,
      y1: 2,
      on: !1,
      door: n,
    },
    l = {
      k: 0,
      goal: 0,
      bolted: !1,
      barK: 0,
      slam: !1,
      kick: -1,
      shoveT: -1,
      shoveK: 0,
    };
  let f0 = 0,
    i0 = 0;
  const H0 = x ? -1 : 1,
    c0 = (k) => {
      const b = Pe * k + f0;
      ((S.rotation.y = K + H0 * b), (S.position.z = H + c * f0 * 0.12));
    },
    B0 = (k) => {
      J.rotation.z = -(Math.PI / 2) * (1 - k) - i0;
    };
  (c0(0), B0(0));
  const Y0 = (e.a + e.b) / 2,
    s0 = {
      get openK() {
        return l.k;
      },
      get bolted() {
        return l.bolted;
      },
      pos: [Y0, 1.1, d ? d0.N : d0.S],
      usePos: [Y0, 1.15, +(a + c * 0.22).toFixed(3)],
      open(k = 1, b = 0) {
        if (((k = Math.max(0, Math.min(1, k))), l.bolted && k > 0.02)) {
          s.audio?.play?.("house_door_rattle", { pos: s0.pos, vol: 0.8 });
          return;
        }
        ((l.slam = !1),
          (l.kick = -1),
          b > 0
            ? ((l.from = l.k),
              (l.goal = k),
              (l.t = 0),
              (l.secs = b),
              k > l.k + 0.05
                ? s.audio?.play?.(t.open, { pos: s0.pos, vol: 0.9 })
                : k < l.k - 0.05 && (l.closing = !0))
            : ((l.k = k), (l.goal = k), (l.secs = 0), c0(k)),
          s0._cols());
      },
      slam(k = 0.35) {
        l.bolted ||
          l.k < 0.005 ||
          ((l.from = l.k),
          (l.goal = 0),
          (l.t = 0),
          (l.secs = Math.max(0.1, k)),
          (l.slam = !0),
          (l.closing = !1),
          (l.kick = -1),
          s0._cols());
      },
      shove(k = 1) {
        ((k = Math.max(0, Math.min(1, k))),
          !(l.k > 0.05) &&
            ((l.shoveT = 0),
            (l.shoveK = k),
            s.audio?.play?.("house_door_thud", {
              pos: s0.pos,
              vol: 0.55 + 0.45 * k,
            }),
            s.audio?.play?.("house_door_rattle", {
              pos: [y, B, a0],
              vol: (l.bolted ? 0.5 : 0.25) + 0.5 * k,
            }),
            s0.onImpact?.(s0, 0.35 + 0.65 * k, "shove")));
      },
      bolt(k = !0) {
        ((k = !!k),
          k !== l.bolted &&
            ((l.bolted = k),
            (l.barFrom = l.barK),
            (l.barGoal = k ? 1 : 0),
            (l.barT = 0),
            s.audio?.play?.(k ? "house_bar_drop" : "house_bar_lift", {
              pos: [y, B, a0],
              vol: 0.9,
            })));
      },
      snap(k = 0, b = !1) {
        ((l.secs = 0),
          (l.closing = !1),
          (l.slam = !1),
          (l.kick = -1),
          (l.shoveT = -1),
          (f0 = 0),
          (i0 = 0),
          (l.k = Math.max(0, Math.min(1, k))),
          (l.goal = l.k),
          c0(l.k),
          (l.bolted = !!b),
          (l.barK = b ? 1 : 0),
          (l.barGoal = void 0),
          B0(l.barK),
          s0._cols());
      },
      _cols() {
        ((_.on = l.k < 0.3 && s0._world), (V.on = l.k >= 0.3 && s0._world));
      },
      _world: !1,
      onImpact: null,
      _frame: {
        lintel: [
          [e.a + 0.02, e.y1 - 0.004, a + c * 0.01],
          [e.b - 0.02, e.y1 - 0.004, a + c * 0.01],
        ],
        inward: [0, c],
        sides: [
          [
            [e.a, 0.3, a + c * 0.01],
            [e.a, e.y1, a + c * 0.01],
          ],
          [
            [e.b, 0.3, a + c * 0.01],
            [e.b, e.y1, a + c * 0.01],
          ],
        ],
      },
    };
  return {
    api: s0,
    group: m,
    colliders: [_, V],
    anim: (k) => {
      if (l.secs > 0 && l.t < l.secs) {
        l.t = Math.min(l.secs, l.t + k);
        const b = l.t / l.secs,
          N = l.slam ? b * b * (0.55 + 0.45 * b) : Te(b);
        ((l.k = l.from + (l.goal - l.from) * N),
          c0(l.k),
          s0._cols(),
          l.t >= l.secs &&
            ((l.secs = 0),
            l.slam
              ? ((l.slam = !1),
                (l.kick = 0),
                s.audio?.play?.("house_door_slam", { pos: s0.pos, vol: 1 }),
                s0.onImpact?.(s0, 1, "slam"))
              : l.closing &&
                ((l.closing = !1),
                s.audio?.play?.("house_door_shut", {
                  pos: s0.pos,
                  vol: 0.9,
                }))));
      } else if (l.kick >= 0) {
        l.kick += k;
        const b = l.kick,
          N =
            b < 0.13
              ? 0.028 * Math.sin((b / 0.13) * Math.PI)
              : b < 0.22
                ? 0.007 * Math.sin(((b - 0.13) / 0.09) * Math.PI)
                : 0;
        ((l.k = N), c0(l.k), b >= 0.22 && ((l.kick = -1), (l.k = 0), c0(0)));
      }
      if (l.shoveT >= 0) {
        l.shoveT += k;
        const b = l.shoveT,
          N = l.shoveK,
          q = Math.exp(-b * 7.5);
        ((f0 = Math.max(
          -0.0015,
          N *
            0.016 *
            q *
            Math.sin(
              Math.min(b * 46, Math.PI * 0.5) +
                Math.max(0, b * 46 - Math.PI * 0.5) * 1.6,
            ) *
            (l.bolted ? 1 : 1.6),
        )),
          (i0 = l.bolted ? N * 0.014 * q * Math.abs(Math.sin(b * 38)) : 0),
          b > 0.9 && ((l.shoveT = -1), (f0 = 0), (i0 = 0)),
          c0(l.k),
          B0(l.barK));
      }
      if (l.barGoal !== void 0 && l.barT < 1) {
        l.barT = Math.min(1, l.barT + k / 0.55);
        let b = l.barT;
        (l.barGoal > l.barFrom
          ? (b =
              b < 0.8
                ? Math.pow(b / 0.8, 1.8)
                : 1 - 0.06 * Math.sin(((b - 0.8) / 0.2) * Math.PI))
          : (b = Te(b)),
          (l.barK = l.barFrom + (l.barGoal - l.barFrom) * b),
          B0(l.barK));
      }
    },
    parts: { pivot: S, leaf: z, bar: J, barPivot: Z },
  };
}
function xt(s, o, e) {
  const n = De(s, o, T0.door, "frontDoor", { open: "house_door_creak" }, e),
    t = De(s, o, T0.back, "backDoor", { open: "house_door_creak_back" }, e);
  return {
    front: n,
    back: t,
    anim: [n.anim, t.anim],
    colliders: [...n.colliders, ...t.colliders],
    groups: [n.group, t.group],
  };
}
const yt = (s) => s * s * (3 - 2 * s),
  Mt = (170 * Math.PI) / 180,
  j0 = 0.026,
  R0 = 0.024,
  O0 = Ye + 0.035 + 0.02,
  ue = [0.95, 0.78, 0.58];
function Ve(s) {
  const o = T0[s];
  return o.wall === "N"
    ? { es: [1, 0, 0], en: [0, 0, 1], base: [0, 0, d0.N], sOf: (e) => e }
    : o.wall === "S"
      ? { es: [-1, 0, 0], en: [0, 0, -1], base: [0, 0, d0.S], sOf: (e) => -e }
      : { es: [0, 0, 1], en: [-1, 0, 0], base: [d0.E, 0, 0], sOf: (e) => e };
}
const Xe = (s, o, e, n) => [
  s.base[0] + o * s.es[0] + n * s.en[0],
  e,
  s.base[2] + o * s.es[2] + n * s.en[2],
];
function kt(s) {
  if ((s.scale(-1, 1, 1), s.index)) {
    const o = s.index.array;
    for (let e = 0; e < o.length; e += 3) {
      const n = o[e + 1];
      ((o[e + 1] = o[e + 2]), (o[e + 2] = n));
    }
    s.index.needsUpdate = !0;
  } else
    for (const o of Object.values(s.attributes)) {
      const e = o.array,
        n = o.itemSize;
      for (let t = 0; t + 2 < o.count; t += 3)
        for (let u = 0; u < n; u++) {
          const d = (t + 1) * n + u,
            a = (t + 2) * n + u,
            h = e[d];
          ((e[d] = e[a]), (e[a] = h));
        }
      o.needsUpdate = !0;
    }
  return s;
}
function Oe(s, o, e) {
  let n = [[s, o]];
  for (const [t, u] of e) {
    const d = [];
    for (const [a, h] of n) {
      if (u <= a || t >= h) {
        d.push([a, h]);
        continue;
      }
      (t > a && d.push([a, t]), u < h && d.push([u, h]));
    }
    n = d;
  }
  return n.filter(([t, u]) => u - t > 0.03);
}
function he(s, o, e, n) {
  const t = T0[n],
    u = it[n],
    d = Ve(n),
    a = d.sOf(u.hinge === "a" ? t.a : t.b),
    h = d.sOf(u.hinge === "a" ? t.b : t.a),
    c = Math.sign(h - a),
    m = Math.abs(t.b - t.a) + 2 * u.over,
    g = u.h,
    w = u.y0,
    M = a - c * u.over,
    p = new l0();
  ((p.name = "shutter:" + n),
    p.position.set(d.base[0], 0, d.base[2]),
    p.quaternion.setFromRotationMatrix(
      new Ue().makeBasis(new j(...d.es), new j(0, 1, 0), new j(...d.en)),
    ));
  const C = new l0();
  ((C.name = n + ":pivot"), C.position.set(M, w, O0 + j0), p.add(C));
  const A = new pe("house_shutter_" + n),
    L = (i, f, _) => A.add(c < 0 ? kt(i) : i, f, _),
    R = [0, ...u.cracks.map(([i, f]) => [i - f / 2, i + f / 2]).flat(), m];
  for (let i = 0; i < 4; i++) {
    const f = R[i * 2],
      _ = R[i * 2 + 1],
      F = g - (i % 2) * 0.008 - (i === 3 ? 0.004 : 0),
      E = i === 2 ? 0.006 : 0,
      V =
        u.slot && u.slot[0] === i
          ? [
              [E, g * u.slot[1] - u.slot[2] / 2],
              [g * u.slot[1] + u.slot[2] / 2, F],
            ]
          : [[E, F]];
    for (const [l, f0] of V) {
      const i0 = G(f, l, -j0, _, f0, 0, 0.004, "y", 1);
      (r0(i0, ue), L(i0, o.plank));
    }
  }
  const I = [0.13, g - 0.14];
  for (const i of I) {
    const f = G(0.04, i - 0.05, 0, m - 0.04, i + 0.05, R0, 0.005, "x", 1);
    (r0(f, ue), L(f, o.plank));
  }
  const W = { ax: 0.09, ay: 0.2, bx: m - 0.09, by: g - 0.2, hw: 0.045 };
  if (u.brace !== !1) {
    const i = Math.hypot(W.bx - W.ax, W.by - W.ay),
      f = G(-i / 2, -0.045, -0.012, i / 2, W.hw, 0.012, 0.005, "x", 1);
    (f.rotateZ(Math.atan2(W.by - W.ay, W.bx - W.ax)),
      f.translate((W.ax + W.bx) / 2, (W.ay + W.by) / 2, R0 / 2),
      r0(f, ue),
      L(f, o.plank));
  }
  const o0 = [0.11, 0.1, 0.095];
  for (const i of I)
    for (const f of [
      G(0.02, i - 0.018, R0, m * 0.55, i + 0.018, R0 + 0.005, 0.002, "x", 1),
      G(-0.006, i - 0.018, 0.002, 0.03, i + 0.018, R0 + 0.005, 0.002, "x", 1),
      L0([-0.003, i - 0.04, 0.006], [-0.003, i + 0.04, 0.006], 0.01, 8),
    ])
      (r0(f, o0), L(f, o.plank));
  {
    const i = G(
      m - 0.085,
      g * 0.5 - 0.07,
      0,
      m - 0.055,
      g * 0.5 + 0.07,
      0.042,
      0.008,
      "y",
      1,
    );
    (r0(i, [0.8, 0.62, 0.44]), L(i, o.plank));
  }
  const D = new l0();
  ((D.name = n + ":leaf"), A.flush(D), C.add(D));
  const Y = (i, f, _) => Xe(d, i, f, _);
  for (const i of I) {
    const f = M - c * 0.003,
      _ = O0 + j0 + 0.006;
    e.add(
      L0(Y(f, w + i - 0.058, _), Y(f, w + i + 0.052, _), 0.005, 8),
      o.iron,
      { cast: !1 },
    );
    const F = Y(f - c * 0.012, w + i - 0.056, O0 - 0.008),
      E = Y(f + c * 0.012, w + i - 0.043, _ + 0.01);
    e.add(
      G(
        Math.min(F[0], E[0]),
        F[1],
        Math.min(F[2], E[2]),
        Math.max(F[0], E[0]),
        E[1],
        Math.max(F[2], E[2]),
        0.002,
        "x",
      ),
      o.iron,
      { cast: !1 },
    );
  }
  {
    const i = Y(M + c * (m + 0.014), w + g * 0.5, O0 + 0.02);
    e.add(
      G(
        i[0] - 0.008,
        i[1] - 0.008,
        i[2] - 0.008,
        i[0] + 0.008,
        i[1] + 0.008,
        i[2] + 0.008,
        0.003,
      ),
      o.iron,
      { cast: !1 },
    );
  }
  const e0 = (d.sOf(t.a) + d.sOf(t.b)) / 2,
    T = (t.y0 + t.y1) / 2 + 0.01,
    S = Math.min(d.sOf(t.a), d.sOf(t.b)) + 0.046,
    H = Math.max(d.sOf(t.a), d.sOf(t.b)) - 0.046,
    K = t.y0 + 0.062,
    x = t.y1 - 0.047,
    v = (i) => W.ay + ((i - W.ax) * (W.by - W.ay)) / (W.bx - W.ax),
    z = W.hw * Math.hypot(1, (W.by - W.ay) / (W.bx - W.ax)),
    r = O0 + j0,
    B = [];
  for (const [i, f] of u.cracks) {
    const _ = M + c * i;
    if (_ < S || _ > H) continue;
    const F = [
      [0, w + I[0] + 0.05],
      [w + I[1] - 0.05, 9],
      [T - 0.016, T + 0.016],
    ];
    u.brace !== !1 && F.push([w + v(i) - z, w + v(i) + z]);
    for (const [E, V] of Oe(K, x, F))
      B.push({ win: n, kind: "v", a: Y(_, E, r), b: Y(_, V, r), w: f });
  }
  if (u.slot) {
    const i = R[u.slot[0] * 2],
      f = R[u.slot[0] * 2 + 1],
      _ = w + g * u.slot[1],
      F = M + c * i,
      E = M + c * f,
      V = W.ax + ((g * u.slot[1] - W.ay) * (W.bx - W.ax)) / (W.by - W.ay),
      l = M + c * V,
      f0 = W.hw * 1.6,
      i0 = [[e0 - 0.016, e0 + 0.016]];
    if ((u.brace !== !1 && i0.push([l - f0, l + f0]), _ > K && _ < x))
      for (const [H0, c0] of Oe(
        Math.max(Math.min(F, E), S),
        Math.min(Math.max(F, E), H),
        i0,
      ))
        B.push({
          win: n,
          kind: "h",
          a: Y(H0, _, r),
          b: Y(c0, _, r),
          w: u.slot[2],
        });
  }
  const y = { k: 0, from: 0, goal: 0, t: 0, secs: 0, slam: !1, bounce: -1 },
    a0 = -c * Mt,
    Z = (i) => {
      C.rotation.y = a0 * (1 - i);
    };
  Z(0);
  const $ = {
    id: n,
    pos: Y(e0, (t.y0 + t.y1) / 2, O0 + 0.09).map((i) => +i.toFixed(3)),
    standAt: null,
    get closeK() {
      return y.k;
    },
    close(i = 1, f = 0) {
      ((i = Math.max(0, Math.min(1, i))),
        f > 0
          ? ((y.from = y.k),
            (y.goal = i),
            (y.t = 0),
            (y.secs = f),
            (y.bounce = -1),
            (y.slam = i > y.k && f < 0.4),
            y.slam ||
              s.audio?.play?.(
                i > y.k ? "house_shutter_close" : "house_shutter_open",
                { pos: $.pos, vol: 0.8 },
              ))
          : ((y.k = i), (y.goal = i), (y.secs = 0), (y.bounce = -1), Z(i)));
    },
    onImpact: null,
  };
  return {
    api: $,
    frame: p,
    anim: (i) => {
      if (y.secs > 0) {
        y.t = Math.min(y.secs, y.t + i);
        const f = y.t / y.secs,
          _ = y.slam ? f * f * (0.6 + 0.4 * f) : yt(f);
        ((y.k = y.from + (y.goal - y.from) * _),
          Z(y.k),
          y.t >= y.secs &&
            ((y.secs = 0),
            y.slam &&
              ((y.slam = !1),
              (y.bounce = 0),
              s.audio?.play?.("house_shutter_close", { pos: $.pos, vol: 1.35 }),
              $.onImpact?.($, 1))));
      } else if (y.bounce >= 0) {
        y.bounce += i;
        const f = y.bounce,
          _ =
            f < 0.16
              ? 0.05 * Math.sin((f / 0.16) * Math.PI)
              : f < 0.27
                ? 0.012 * Math.sin(((f - 0.16) / 0.11) * Math.PI)
                : 0;
        ((y.k = y.goal - _),
          Z(y.k),
          f >= 0.27 && ((y.bounce = -1), (y.k = y.goal), Z(y.k)));
      }
    },
    slits: B,
    F: d,
    dir: c,
    sH: M,
    w: m,
    h: g,
    y0: w,
    parts: { pivot: C, leaf: D },
  };
}
function zt(s, o, e) {
  const n = {
      W1: he(s, o, e, "W1"),
      W2: he(s, o, e, "W2"),
      W3: he(s, o, e, "W3"),
    },
    t = ["W1", "W2", "W3"];
  return {
    one: n,
    list: t.map((u) => n[u].api),
    groups: t.map((u) => n[u].frame),
    anim: t.map((u) => n[u].anim),
    slits: t.flatMap((u) => n[u].slits),
    closeK: (u) => n[u].api.closeK,
  };
}
const W0 = { x: m0.cx + 0.42, z: m0.cz - 0.04, y: m0.top },
  q0 = W0.y + 0.255;
function _t(s, o, e, { near: n = () => !0, S: t } = {}) {
  const u = nt(909),
    d = new l0();
  d.name = "house_lamp";
  const a = t,
    { x: h, z: c, y: m } = W0;
  a.add(
    p0(
      [
        [0, 0],
        [0.058, 0],
        [0.061, 0.004],
        [0.058, 0.011],
        [0.045, 0.016],
        [0.03, 0.024],
        [0.022, 0.034],
        [0.02, 0.046],
        [0.026, 0.052],
        [0.02, 0.058],
        [0, 0.058],
      ],
      h,
      m,
      c,
      { segs: 32, tile: 0.4 },
    ),
    o.brass,
    { cast: !1 },
  );
  const w = p0(
    [
      [0, 0.056],
      [0.03, 0.058],
      [0.052, 0.07],
      [0.064, 0.09],
      [0.066, 0.108],
      [0.06, 0.128],
      [0.045, 0.145],
      [0.03, 0.156],
      [0.024, 0.162],
      [0, 0.162],
    ],
    h,
    m,
    c,
    { segs: 36 },
  );
  {
    const i = w.attributes.position;
    for (let f = 0; f < i.count; f++) {
      const _ = i.getX(f) - h,
        F = i.getZ(f) - c;
      if (Math.hypot(_, F) < 1e-4) continue;
      const V = Math.atan2(F, _),
        l = 1 + 0.035 * Math.abs(Math.cos(V * 6));
      (i.setX(f, h + _ * l), i.setZ(f, c + F * l));
    }
    w.computeVertexNormals();
  }
  const M = new y0(w, o.lampGlass);
  ((M.name = "lamp:font"),
    (M.renderOrder = 3),
    (M.receiveShadow = !0),
    d.add(M));
  const p = p0(
      [
        [0, 0.06],
        [0.028, 0.061],
        [0.049, 0.072],
        [0.06, 0.09],
        [0.061, 0.1],
        [0, 0.1],
      ],
      h,
      m,
      c,
      { segs: 28 },
    ),
    C = new y0(p, o.kerosene);
  ((C.name = "lamp:oil"),
    (C.renderOrder = 2),
    (C.receiveShadow = !0),
    d.add(C),
    a.add(
      p0(
        [
          [0, 0.158],
          [0.027, 0.158],
          [0.029, 0.166],
          [0.026, 0.176],
          [0.03, 0.184],
          [0.03, 0.19],
          [0.022, 0.194],
          [0.02, 0.2],
          [0.034, 0.203],
          [0.036, 0.212],
          [0.033, 0.214],
          [0.03, 0.205],
          [0, 0.205],
        ],
        h,
        m,
        c,
        { segs: 28, tile: 0.3 },
      ),
      o.brass,
      { cast: !0 },
    ));
  for (let i = 0; i < 8; i++) {
    const f = (i / 8) * Math.PI * 2;
    a.add(
      G(
        h + Math.cos(f) * 0.031 - 0.002,
        m + 0.203,
        c + Math.sin(f) * 0.031 - 0.002,
        h + Math.cos(f) * 0.031 + 0.002,
        m + 0.222,
        c + Math.sin(f) * 0.031 + 0.002,
        0.001,
      ),
      o.brass,
      { cast: !1 },
    );
  }
  (a.add(
    L0([h, m + 0.19, c], [h + 0.052, m + 0.19, c + 0.004], 0.0022, 6),
    o.brass,
    { cast: !1 },
  ),
    a.add(
      p0(
        [
          [0, -0.004],
          [0.011, -0.004],
          [0.012, 0],
          [0.011, 0.004],
          [0, 0.004],
        ],
        h + 0.054,
        m + 0.19,
        c + 0.004,
        { segs: 16, rot: [0, 0, Math.PI / 2] },
      ),
      o.brass,
      { cast: !1 },
    ),
    a.add(
      G(h - 0.011, m + 0.2, c - 0.0015, h + 0.011, m + 0.216, c + 0.0015, 8e-4),
      o.char,
      { cast: !1 },
    ));
  const A = p0(
      [
        [0.029, 0.206],
        [0.031, 0.214],
        [0.043, 0.235],
        [0.05, 0.262],
        [0.047, 0.29],
        [0.034, 0.315],
        [0.026, 0.335],
        [0.025, 0.4],
        [0.027, 0.425],
        [0.029, 0.428],
      ],
      h,
      m,
      c,
      { segs: 36 },
    ),
    L = new y0(A, o.chimney);
  ((L.name = "lamp:chimney"),
    (L.renderOrder = 4),
    (L.receiveShadow = !0),
    d.add(L));
  const U = p0(
    [
      [0, 0],
      [0.004, 0.002],
      [0.0075, 0.007],
      [0.0088, 0.014],
      [0.008, 0.022],
      [0.0058, 0.032],
      [0.0028, 0.041],
      [0, 0.047],
    ],
    0,
    0,
    0,
    { segs: 16 },
  );
  U.scale(1.55, 1, 0.42);
  const R = new Float32Array(U.attributes.position.count * 3);
  for (let i = 0; i < U.attributes.position.count; i++) {
    const f = U.attributes.position.getY(i) / 0.047;
    let _;
    if (f < 0.1) _ = [0.3, 0.42, 1.2];
    else if (f < 0.45) {
      const F = (f - 0.1) / 0.35;
      _ = [0.3 + F * 5.2, 0.42 + F * 2.9, 1.2 - F * 0.62];
    } else {
      const F = (f - 0.45) / 0.55;
      _ = [5.5 - F * 2.4, 3.3 - F * 2.1, 0.58 - F * 0.45];
    }
    ((R[i * 3] = _[0]), (R[i * 3 + 1] = _[1]), (R[i * 3 + 2] = _[2]));
  }
  U.setAttribute("color", new Z0(R, 3));
  const I = new me({
      vertexColors: !0,
      toneMapped: !1,
      transparent: !0,
      opacity: 0.96,
      depthWrite: !1,
      fog: !1,
    }),
    W = new y0(U, I);
  ((W.name = "lamp:flame"),
    (W.renderOrder = 5),
    (W.frustumCulled = !1),
    W.position.set(h, m + 0.214, c),
    (W.rotation.y = 0.35),
    d.add(W));
  const o0 = new Fe(
    new Ae({
      map: Ee(),
      color: new M0(0.85, 0.42, 0.14),
      transparent: !0,
      depthWrite: !1,
      blending: Q0,
      toneMapped: !1,
      fog: !1,
      opacity: 0,
    }),
  );
  ((o0.name = "lamp:halo"),
    o0.scale.set(0.34, 0.34, 1),
    o0.position.set(h, m + 0.245, c),
    (o0.renderOrder = 6),
    d.add(o0));
  const D = new Ce(16756848, 0, 11, 2);
  ((D.name = "house_lamp"),
    D.position.set(h, q0, c),
    (D.castShadow = !0),
    D.shadow.mapSize.set(1024, 1024),
    (D.shadow.bias = -0.0015),
    (D.shadow.normalBias = 0.025),
    (D.shadow.radius = 3),
    (D.shadow.camera.near = 0.01),
    (D.shadow.camera.far = 11),
    (D.shadow.autoUpdate = !1),
    e.add(D));
  const Y = t,
    e0 = (v0.box.back + v0.front) / 2 + 0.02,
    T = (v0.box.z0 + v0.box.z1) / 2,
    S = s.rng(733);
  {
    const i = p0(
      [
        [0, 0.07],
        [0.28, 0.07],
        [0.33, 0.075],
        [0.3, 0.09],
        [0.18, 0.105],
        [0, 0.11],
      ],
      e0,
      0,
      T,
      { segs: 20, scale: [0.95, 1, 1.2] },
    );
    (r0(i, [0.35, 0.33, 0.31]), Y.add(i, o.stone, { cast: !1 }));
  }
  for (let i = 0; i < 3; i++) {
    const f = 0.5 + i * 0.9 + S() * 0.3,
      _ = 0.3 + S() * 0.12,
      F = [
        e0 - (Math.cos(f) * _) / 2,
        0.12 + i * 0.02,
        T - (Math.sin(f) * _) / 2,
      ],
      E = [
        e0 + (Math.cos(f) * _) / 2,
        0.11 + S() * 0.03,
        T + (Math.sin(f) * _) / 2,
      ];
    Y.add(L0(F, E, 0.035 - i * 0.004, 8), o.char, { cast: !1 });
  }
  const H = [];
  for (let i = 0; i < 16; i++) {
    const f = new tt(0.018 + S() * 0.018, 0),
      _ = f.attributes.position;
    for (let E = 0; E < _.count; E++) _.setY(E, _.getY(E) * 0.6);
    f.translate(
      e0 + (S() - 0.5) * 0.36,
      0.1 + S() * 0.03,
      T + (S() - 0.5) * 0.46,
    );
    const F = 0.4 + S() * 0.6;
    (r0(f, [2.2 * F, 0.5 * F, 0.08 * F]), H.push(f));
  }
  const K = new me({ vertexColors: !0, toneMapped: !1, fog: !1 }),
    x = new y0(St(H), K);
  ((x.name = "house:coals"), d.add(x));
  const v = new Ce(16734754, 0, 3.2, 2);
  ((v.name = "house_embers"),
    v.position.set(e0 + 0.05, 0.2, T),
    (v.castShadow = !1),
    e.add(v));
  const z = new Fe(
    new Ae({
      map: Ee(),
      color: new M0(1.6, 0.42, 0.08),
      transparent: !0,
      depthWrite: !1,
      blending: Q0,
      toneMapped: !1,
      fog: !1,
      opacity: 0,
    }),
  );
  ((z.name = "lamp:wick"),
    z.scale.set(0.022, 0.016, 1),
    z.position.set(h, m + 0.214, c),
    (z.renderOrder = 6),
    (z.visible = !1),
    d.add(z));
  const r = {
      on: !1,
      level: 0,
      goal: 0,
      ignite: -1,
      ember: 0.75,
      dying: -1,
      dyFrom: 1,
      wick: 0,
      shakeT: -1,
      shakeK: 0,
    },
    B = { lamp: 17, embers: 0.45 },
    y = new j(h, m + 0.214, c),
    a0 = (i, f, _ = 1) => {
      ((D.intensity = B.lamp * i * f), k0.uHB.value.set(h, q0, c, i * f));
      const F = i > 0.001 ? 0.55 + 0.45 * Math.min(1, i * 1.2) : 0;
      (W.scale.set(F * (0.94 + 0.08 * (1 - f)), F * (0.9 + 0.2 * f) * _, F),
        (W.visible = F > 0),
        (o0.material.opacity = Math.min(1, i) * (0.75 + 0.25 * f)),
        (o.chimney.emissiveIntensity = 0.5 * i * f),
        (o.glass.emissiveIntensity = 0.04 * i));
    };
  return (
    a0(0, 1),
    {
      group: d,
      anim: (i, f) => {
        if (r.ignite >= 0) {
          r.ignite += i;
          const l = r.ignite;
          ((r.goal =
            l < 0.15
              ? 0.25 + l * 3
              : l < 0.4
                ? 0.55 - (l - 0.15) * 0.6
                : Math.min(1, 0.4 + (l - 0.4) * 0.5)),
            l > 1.6 && ((r.ignite = -1), (r.goal = 1)));
        }
        let _ =
            1 +
            0.035 * Math.sin(f * 7.3) * Math.sin(f * 1.9 + 0.4) +
            0.03 * u.n2(f * 4.7, 1.1) +
            0.018 * Math.sin(f * 17.3 + u.n2(f, 3) * 2),
          F = 1,
          E = 0.05 * u.n2(f * 1.3, 7);
        if (r.dying >= 0) {
          r.dying += i;
          const l = Math.min(1, r.dying / 0.55);
          ((r.level =
            r.dyFrom *
            Math.pow(1 - l, 1.6) *
            (0.8 + 0.2 * Math.sin(r.dying * 57) * Math.sin(r.dying * 23 + 1))),
            (F = Math.max(0.15, 1 - l * 1.1)),
            (E +=
              0.45 *
              Math.sin(Math.min(1, l * 2.5) * Math.PI * 0.5) *
              (1 - l * 0.4)),
            (_ *= 0.85 + 0.15 * Math.sin(r.dying * 41)),
            l >= 1 &&
              ((r.dying = -1), (r.level = 0), (r.goal = 0), (r.wick = 1)));
        } else
          ((r.level +=
            (r.goal - r.level) * Math.min(1, i * (r.goal > r.level ? 7 : 5))),
            r.level < 0.002 && r.goal === 0 && (r.level = 0));
        if (r.shakeT >= 0) {
          r.shakeT += i;
          const l = r.shakeK * Math.exp(-r.shakeT * 5.5);
          ((E += 0.3 * l * Math.sin(r.shakeT * 37)),
            (_ *= 1 - 0.3 * l * Math.abs(Math.sin(r.shakeT * 29 + 0.5))),
            W.position.set(
              y.x + 0.003 * l * Math.sin(r.shakeT * 53),
              y.y,
              y.z + 0.003 * l * Math.cos(r.shakeT * 47),
            ),
            r.shakeT > 1.2 && ((r.shakeT = -1), W.position.copy(y)));
        }
        (a0(r.level, _, F),
          (W.rotation.z = E),
          r.wick > 0 &&
            ((r.wick = Math.max(0, r.wick - i / 3.2)),
            (z.material.opacity =
              Math.pow(r.wick, 1.5) * (0.85 + 0.15 * u.n2(f * 6, 2))),
            (z.visible = r.wick > 0)));
        const V =
          r.ember * (0.82 + 0.12 * Math.sin(f * 0.9) + 0.08 * u.n2(f * 0.7, 5));
        ((v.intensity = B.embers * V),
          K.color.setRGB(V, V, V),
          k0.uEM.value.set(v.position.x, v.position.y, v.position.z, V * 0.22),
          (r.frame = (r.frame || 0) + 1),
          n() && r.level > 0.01 && r.frame & 1 && (D.shadow.needsUpdate = !0));
      },
      lamp: {
        light: D,
        flame: W,
        group: d,
        get on() {
          return r.on;
        },
        get level() {
          return r.level;
        },
        light(i = !0) {
          ((i = !!i),
            i !== r.on &&
              ((r.on = i),
              i
                ? ((r.dying = -1),
                  (r.wick = 0),
                  (z.visible = !1),
                  (r.ignite = 0),
                  s.audio?.play?.("house_lamp_light", {
                    pos: [h, m + 0.2, c],
                    vol: 0.8,
                  }))
                : ((r.ignite = -1),
                  (r.goal = 0),
                  (r.dyFrom = Math.max(0.05, r.level)),
                  (r.dying = r.level > 0.02 ? 0 : -1),
                  s.audio?.play?.("house_lamp_out", {
                    pos: [h, m + 0.2, c],
                    vol: 0.6,
                  }))));
        },
        set(i) {
          ((r.on = !!i),
            (r.ignite = -1),
            (r.dying = -1),
            (r.wick = 0),
            (z.visible = !1),
            (r.goal = r.level = i ? 1 : 0));
        },
        shake(i = 1) {
          const f = r.shakeT >= 0 ? r.shakeK * Math.exp(-r.shakeT * 5.5) : 0;
          ((r.shakeT = 0),
            (r.shakeK = Math.min(1, Math.max(f, i))),
            r.level > 0.05 &&
              i > 0.3 &&
              s.audio?.play?.("house_lamp_rattle", {
                pos: [h, m + 0.25, c],
                vol: 0.35 * i,
              }));
        },
        pos: [h, q0, c],
      },
      embers: {
        light: v,
        set(i) {
          r.ember = i;
        },
        get level() {
          return r.ember;
        },
      },
      lights: { lamp: D, embers: v },
    }
  );
}
function St(s) {
  const o = [],
    e = [],
    n = [];
  for (const u of s) {
    const d = u.index ? u.toNonIndexed() : u;
    d.computeVertexNormals();
    const a = d.attributes.position,
      h = d.attributes.color,
      c = d.attributes.normal;
    for (let m = 0; m < a.count; m++)
      (o.push(a.getX(m), a.getY(m), a.getZ(m)),
        e.push(h.getX(m), h.getY(m), h.getZ(m)),
        n.push(c.getX(m), c.getY(m), c.getZ(m)));
  }
  const t = new ee();
  return (
    t.setAttribute("position", new g0(o, 3)),
    t.setAttribute("color", new g0(e, 3)),
    t.setAttribute("normal", new g0(n, 3)),
    t
  );
}
let A0 = null;
function Ee() {
  if (A0) return A0;
  const s = 64,
    o = new Uint8Array(s * s * 4);
  for (let e = 0; e < s; e++)
    for (let n = 0; n < s; n++) {
      const t = Math.hypot((n + 0.5) / s - 0.5, (e + 0.5) / s - 0.5) * 2,
        u = Math.max(0, 1 - t),
        d = Math.round(255 * (0.5 * u * u * u + 0.5 * Math.pow(u, 10))),
        a = (e * s + n) * 4;
      ((o[a] = o[a + 1] = o[a + 2] = 255), (o[a + 3] = d));
    }
  return (
    (A0 = new we(o, s, s, xe)),
    (A0.needsUpdate = !0),
    (A0.magFilter = A0.minFilter = ye),
    A0
  );
}
const He = ["W2"],
  be = 24,
  N0 = (s, o, e) => {
    const n = Math.max(0, Math.min(1, (e - s) / (o - s)));
    return n * n * (3 - 2 * n);
  };
function de(s, o, e) {
  const n = T0[s],
    t = Ve(s),
    u = Math.min(t.sOf(n.a), t.sOf(n.b)) - e,
    d = Math.max(t.sOf(n.a), t.sOf(n.b)) + e;
  return [
    [u, n.y0 - e],
    [d, n.y0 - e],
    [d, n.y1 + e],
    [u, n.y1 + e],
  ].map(([a, h]) => new j(...Xe(t, a, h, o)));
}
function Ke(s, o) {
  let e = 99;
  (o.y < 0 && (e = Math.min(e, (s.y - I0 - 0.004) / -o.y)),
    o.x < 0
      ? (e = Math.min(e, (s.x - n0.x0) / -o.x))
      : o.x > 0 && (e = Math.min(e, (n0.x1 - s.x) / o.x)),
    o.z > 0
      ? (e = Math.min(e, (n0.z1 - s.z) / o.z))
      : o.z < 0 && (e = Math.min(e, (s.z - n0.z0) / -o.z)));
  const n = [
    [n0.x0, 3.34, 0, 200.41, 1.98, 201.55],
    [n0.x0, v0.front, 0, v0.z0, 2.6, v0.z1],
    [m0.cx - m0.hx, m0.cx + m0.hx, 0, m0.cz - m0.hz, m0.top, m0.cz + m0.hz],
    [z0.x0, z0.x1, 0, z0.z0, 0.66, z0.z1],
  ];
  for (const [t, u, d, a, h, c] of n) {
    let m = 0,
      g = e;
    for (const [w, M, p, C] of [
      [s.x, o.x, t, u],
      [s.y, o.y, d, h],
      [s.z, o.z, a, c],
    ]) {
      if (Math.abs(M) < 1e-6) {
        if (w < p || w > C) {
          m = 1e9;
          break;
        }
        continue;
      }
      let A = (p - w) / M,
        L = (C - w) / M;
      (A > L && ([A, L] = [L, A]), (m = Math.max(m, A)), (g = Math.min(g, L)));
    }
    m < g && m > 0.02 && (e = Math.min(e, m));
  }
  return e;
}
let C0 = null;
function Wt() {
  if (C0) return C0;
  const s = 128,
    o = 64,
    e = new Uint8Array(s * o * 4);
  let n = 7;
  const t = () => ((n = (n * 16807) % 2147483647), n / 2147483647),
    u = new Float32Array(s * o);
  for (let d = 0; d < s * o; d++) u[d] = t();
  for (let d = 0; d < 2; d++)
    for (let a = 0; a < o; a++)
      for (let h = 1; h < s; h++)
        u[a * s + h] = u[a * s + h] * 0.35 + u[a * s + h - 1] * 0.65;
  for (let d = 0; d < o; d++)
    for (let a = 0; a < s; a++) {
      const h = a / (s - 1),
        c = d / (o - 1),
        m =
          Math.pow(1 - h, 1.9) *
          Math.min(1, c / 0.1) *
          Math.min(1, (1 - c) / 0.1) *
          (0.66 + 0.34 * u[d * s + a]),
        g = (d * s + a) * 4;
      ((e[g] = e[g + 1] = e[g + 2] = 255), (e[g + 3] = Math.round(255 * m)));
    }
  return (
    (C0 = new we(e, s, o, xe)),
    (C0.needsUpdate = !0),
    (C0.magFilter = C0.minFilter = ye),
    C0
  );
}
const Bt = `
attribute float aSlit;
attribute float aWin;
attribute float aBright;
uniform vec3 uBlk[${be}];
uniform vec3 uWin;
varying vec2 vUv;
varying vec3 vBlk;
varying float vK;
varying float vFace;
void main() {
  vUv = uv;
  vBlk = uBlk[int(aSlit + 0.5)];
  float w = aWin < 0.5 ? uWin.x : (aWin < 1.5 ? uWin.y : uWin.z);
  vK = w * aBright;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 nrm = normalize(mat3(modelMatrix) * normal);
  vFace = abs(dot(nrm, normalize(cameraPosition - wp.xyz)));
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,
  Ft = `
uniform sampler2D uTex;
uniform vec3 uCol;
varying vec2 vUv;
varying vec3 vBlk;
varying float vK;
varying float vFace;
void main() {
  float a = texture2D(uTex, vUv).a * vK;
  // (a body outside in the light's way: that part of the crack is dark, and so is its sheet)
  float blk = vBlk.z * smoothstep(vBlk.x - 0.04, vBlk.x + 0.02, vUv.y) * (1.0 - smoothstep(vBlk.y - 0.02, vBlk.y + 0.04, vUv.y));
  a *= 1.0 - blk;
  // (a sheet of lit dust as thin as the crack: faint seen across it, a bright thread seen along it)
  a *= clamp(0.3 / max(vFace, 0.06), 0.3, 4.0);
  if (a < 0.002) discard;
  gl_FragColor = vec4(uCol * a, 1.0);
}`,
  At = `
attribute float aWin;
uniform vec3 uK;
varying float vK;
varying float vY;
varying float vSide;
void main() {
  vK = aWin < 0.5 ? uK.x : (aWin < 1.5 ? uK.y : uK.z);
  vSide = aWin;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vY = wp.y;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,
  Ct = `
uniform vec3 uCol;
uniform vec3 uGain;
varying float vK;
varying float vY;
varying float vSide;
void main() {
  if (vK < 0.002) discard;
  float g = vSide < 0.5 ? uGain.x : (vSide < 1.5 ? uGain.y : uGain.z);
  // (the night outside: the sky bright above, the moonlit clearing dimmer below)
  float sky = mix(0.38, 1.0, smoothstep(-0.2, 2.8, vY));
  gl_FragColor = vec4(uCol * g * sky, vK);
}`;
function It(s, o, { slits: e, shutK: n, doorK: t, near: u, dead: d }) {
  const a = new l0();
  a.name = "house_moonlight";
  const h = new j(...lt()),
    c = h.clone().negate(),
    g = ((b) => {
      const N = de(b, 0, 0);
      return N[0].clone().add(N[2]).multiplyScalar(0.5);
    })("W2"),
    w = 14,
    M = g.clone().addScaledVector(h, w),
    p = new ot(10139391, 0, 0, 0.3, 0.02, 0);
  ((p.name = "house_moon"),
    p.position.copy(M),
    p.target.position.copy(g),
    o.add(p, p.target),
    p.updateMatrixWorld(!0),
    p.target.updateMatrixWorld(!0));
  const C = g.clone().sub(M).normalize(),
    A = Ye + 0.035;
  let L = 0,
    U = 1e9,
    R = 0;
  const I = He.flatMap((b) => [de(b, -A, 0.03), de(b, A, 0.03)]);
  for (const b of I)
    for (const N of b) {
      const q = N.clone().sub(M),
        O = q.length(),
        t0 = q.dot(C);
      ((L = Math.max(L, Math.acos(Math.min(1, t0 / O)))),
        (U = Math.min(U, t0)),
        (R = Math.max(R, t0)));
    }
  ((p.angle = L + 0.01),
    (p.castShadow = !0),
    p.shadow.mapSize.set(1536, 1536),
    (p.shadow.camera.near = U - 3.2),
    (p.shadow.camera.far = R + 8),
    (p.shadow.bias = -4e-4),
    (p.shadow.normalBias = 0.02),
    (p.shadow.radius = 9),
    (p.shadow.autoUpdate = !1),
    (p.userData.noShadowBudget = !0),
    (p.shadow.needsUpdate = !0),
    (p.userData.actorGain = 0.35));
  const W = e.filter((b) => He.includes(b.win)).slice(0, be),
    o0 = { W1: 0, W2: 1, W3: 2 },
    D = [],
    Y = [],
    e0 = [],
    T = [],
    S = [],
    H = [],
    K = [],
    x = new j(),
    v = new j();
  W.forEach((b, N) => {
    const q = new j(...b.a),
      O = new j(...b.b),
      t0 = Ke(q, c),
      Q = Ke(O, c),
      w0 = v.copy(O).addScaledVector(c, Q).clone(),
      b0 = x.copy(q).addScaledVector(c, t0).clone(),
      u0 = O.clone().sub(q).cross(c).normalize(),
      _0 = D.length / 3;
    for (const [F0, te, oe] of [
      [q, 0, 0],
      [O, 0, 1],
      [w0, 1, 1],
      [b0, 1, 0],
    ])
      (D.push(F0.x, F0.y, F0.z),
        Y.push(te, oe),
        e0.push(u0.x, u0.y, u0.z),
        T.push(N),
        S.push(o0[b.win]),
        H.push(Math.min(1.5, b.w / 0.014) * (b.kind === "h" ? 0.8 : 1)));
    (K.push(_0, _0 + 1, _0 + 2, _0, _0 + 2, _0 + 3),
      (b.beam = { si: N, ta: t0, tb: Q }));
  });
  const z = new ee();
  (z.setAttribute("position", new g0(D, 3)),
    z.setAttribute("uv", new g0(Y, 2)),
    z.setAttribute("normal", new g0(e0, 3)),
    z.setAttribute("aSlit", new g0(T, 1)),
    z.setAttribute("aWin", new g0(S, 1)),
    z.setAttribute("aBright", new g0(H, 1)),
    z.setIndex(K),
    z.computeBoundingSphere());
  const r = Array.from({ length: be }, () => new j(0, 0, 0)),
    B = new J0({
      vertexShader: Bt,
      fragmentShader: Ft,
      uniforms: {
        uTex: { value: Wt() },
        uCol: { value: new M0(0.3, 0.4, 0.68) },
        uBlk: { value: r },
        uWin: { value: new j() },
      },
      transparent: !0,
      depthWrite: !1,
      blending: Q0,
      side: ge,
      toneMapped: !1,
      fog: !1,
    }),
    y = new y0(z, B);
  ((y.name = "house:moonbeams"),
    (y.renderOrder = 7),
    (y.frustumCulled = !1),
    a.add(y));
  const a0 = [],
    Z = [],
    $ = [],
    J = (b, N, q, O, t0) => {
      const Q = a0.length / 3;
      for (const w0 of [N, q, O, t0]) (a0.push(...w0), Z.push(b));
      $.push(Q, Q + 1, Q + 2, Q, Q + 2, Q + 3);
    },
    i = 3,
    f = -0.6,
    _ = 3.8;
  (J(
    0,
    [1.2, f, X.z0 - i],
    [8.8, f, X.z0 - i],
    [8.8, _, X.z0 - i],
    [1.2, _, X.z0 - i],
  ),
    J(
      1,
      [X.x1 + i, f, 200.2],
      [X.x1 + i, f, 205.3],
      [X.x1 + i, _, 205.3],
      [X.x1 + i, _, 200.2],
    ),
    J(
      2,
      [8.8, f, X.z1 + i],
      [1.2, f, X.z1 + i],
      [1.2, _, X.z1 + i],
      [8.8, _, X.z1 + i],
    ));
  const F = new ee();
  (F.setAttribute("position", new g0(a0, 3)),
    F.setAttribute("aWin", new g0(Z, 1)),
    F.setIndex($),
    F.computeVertexNormals(),
    F.computeBoundingSphere());
  const E = new J0({
      vertexShader: At,
      fragmentShader: Ct,
      uniforms: {
        uK: { value: new j() },
        uCol: { value: new M0(0.5, 0.66, 1) },
        uGain: { value: new j(0.72, 1.3, 0.32) },
      },
      transparent: !0,
      depthWrite: !1,
      toneMapped: !1,
      fog: !1,
    }),
    V = new y0(F, E);
  ((V.name = "house:nightCards"),
    (V.renderOrder = 1),
    (V.visible = !1),
    a.add(V));
  const l = { moon: 1, frame: 0 },
    f0 = 28,
    i0 = s.game?.camera,
    H0 = (b) =>
      b.x > n0.x0 - 0.05 &&
      b.x < n0.x1 + 0.05 &&
      b.z > n0.z0 - 0.05 &&
      b.z < n0.z1 + 0.05 &&
      b.y < 3.2,
    c0 = (b) => N0(0.86, 0.985, b),
    B0 = (b) => 1 - N0(0.004, 0.03, b),
    Y0 = (b, N, q) => {
      let O = 1,
        t0 = 0,
        Q = 0;
      const w0 = b.a[0],
        b0 = b.a[1],
        u0 = b.a[2],
        _0 = b.b[0],
        F0 = b.b[1],
        te = b.b[2],
        oe = h.x * h.x + h.z * h.z;
      for (const V0 of N) {
        const ae = V0.pos.x,
          se = V0.pos.z;
        if ((ae - w0) ** 2 + (se - u0) ** 2 > 36) continue;
        const ke = V0.dead ? 0.35 : (V0.kit?.height || 1.8) * 0.96,
          K0 = 0.23;
        for (let ne = 0; ne <= 6; ne++) {
          const G0 = ne / 6,
            ze = w0 + (_0 - w0) * G0,
            je = b0 + (F0 - b0) * G0,
            _e = u0 + (te - u0) * G0,
            P0 = ((ae - ze) * h.x + (se - _e) * h.z) / oe;
          if (P0 < 0.15) continue;
          const re = Math.hypot(ae - ze - P0 * h.x, se - _e - P0 * h.z);
          if (re > K0) continue;
          const Se = je + P0 * h.y;
          if (b.kind === "v") {
            const We = (0.1 - P0 * h.y - b0) / (F0 - b0),
              Be = (ke - P0 * h.y - b0) / (F0 - b0);
            Be > 0 &&
              We < 1 &&
              ((O = Math.min(O, Math.max(0, We))),
              (t0 = Math.max(t0, Math.min(1, Be))),
              (Q = Math.max(Q, N0(K0, K0 * 0.55, re))));
            break;
          }
          Se > 0.1 &&
            Se < ke &&
            ((O = Math.min(O, G0 - 1 / 12)),
            (t0 = Math.max(t0, G0 + 1 / 12)),
            (Q = Math.max(Q, N0(K0, K0 * 0.55, re))));
        }
      }
      return (Q > 0 ? q.set(O, t0, Q) : q.set(0, 0, 0), Q > 0);
    },
    s0 = (b) =>
      b.y > 3.2
        ? 0
        : N0(
            -0.25,
            0.35,
            Math.min(b.x - n0.x0, n0.x1 - b.x, b.z - n0.z0, n0.z1 - b.z),
          ),
    Me = (b, N) => {
      const q = i0 ? s0(i0.position) : 1;
      p.intensity = f0 * l.moon * q;
      const O = [c0(n("W1")), c0(n("W2")), c0(n("W3"))];
      (B.uniforms.uWin.value
        .set(O[0], O[1], O[2])
        .multiplyScalar(0.05 * l.moon * q * (0.93 + 0.07 * Math.sin(N * 0.37))),
        (y.visible = q > 0 && l.moon > 0 && O[0] + O[1] + O[2] > 0.001));
      const t0 = d();
      for (let u0 = 0; u0 < W.length; u0++)
        t0.length ? Y0(W[u0], t0, r[u0]) : r[u0].set(0, 0, 0);
      k0.uMB.value.w = l.moon * q * (0.7 + 0.9 * (1 - n("W2")));
      const Q = O[0] * B0(t.front()),
        w0 = O[1],
        b0 = O[2] * B0(t.back());
      (E.uniforms.uK.value.set(Q, w0, b0).multiplyScalar(l.moon > 0 ? 1 : 0),
        (V.visible = !!i0 && H0(i0.position) && Q + w0 + b0 > 0.002),
        l.frame++,
        u() &&
          l.moon > 0 &&
          q > 0 &&
          l.frame & 1 &&
          (p.shadow.needsUpdate = !0));
    },
    k = {
      light: p,
      set(b) {
        l.moon = b;
      },
      get level() {
        return l.moon;
      },
      beams: y,
      cards: V,
      dir: h.toArray(),
    };
  return { group: a, anim: Me, moon: k, light: p, beamMat: B, cardMat: E };
}
const h0 = 420,
  Lt = `
attribute float aSize;
attribute float aA;
uniform float uScale;
uniform vec4 uLamp;
uniform vec4 uGlow[2];
uniform vec3 uTorchPos;
uniform vec3 uTorchDir;
uniform vec3 uTorchCol;
uniform vec2 uTorchCone;
varying vec3 vCol;
varying float vA;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(aSize * uScale / max(-mv.z, 0.05), 1.0, 64.0);
  vec3 L = vec3(0.045, 0.05, 0.06);
  vec3 dl = uLamp.xyz - wp.xyz;
  L += vec3(1.0, 0.6, 0.28) * uLamp.w * 1.6 / (0.25 + dot(dl, dl));
  for (int i = 0; i < 2; i++) { vec3 dg = wp.xyz - uGlow[i].xyz; dg.y *= 0.45; L += vec3(0.35, 0.46, 0.75) * uGlow[i].w / (0.06 + 6.0 * dot(dg, dg)); }
  vec3 dt = wp.xyz - uTorchPos;
  float dd = length(dt);
  float c = dot(dt / max(dd, 0.001), uTorchDir);
  L += uTorchCol * smoothstep(uTorchCone.x, uTorchCone.y, c) / (0.5 + dd * dd);
  vCol = L * vec3(0.92, 0.85, 0.74);
  vA = aA;
}`,
  Tt = `
varying vec3 vCol;
varying float vA;
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float r = dot(q, q) * 4.0;
  if (r > 1.0) discard;
  float a = vA * (1.0 - r) * (1.0 - r);
  gl_FragColor = vec4(vCol * a, 1.0);
}`;
function Pt(s, { lampAt: o, glowAt: e = null }) {
  const n = new Float32Array(h0 * 3),
    t = new Float32Array(h0 * 3),
    u = new Float32Array(h0),
    d = new Float32Array(h0),
    a = new Float32Array(h0),
    h = new Float32Array(h0),
    c = new Float32Array(h0),
    m = new Float32Array(h0),
    g = new Float32Array(h0),
    w = new Float32Array(h0),
    M = new Float32Array(h0),
    p = new ee();
  (p.setAttribute("position", new Z0(n, 3).setUsage(ie)),
    p.setAttribute("aSize", new Z0(w, 1).setUsage(ie)),
    p.setAttribute("aA", new Z0(M, 1).setUsage(ie)),
    p.setDrawRange(0, 0));
  const C = new J0({
      vertexShader: Lt,
      fragmentShader: Tt,
      transparent: !0,
      depthWrite: !1,
      blending: Q0,
      toneMapped: !1,
      fog: !1,
      uniforms: {
        uScale: { value: 800 },
        uLamp: { value: new E0() },
        uGlow: { value: [new E0(), new E0()] },
        uTorchPos: { value: new j() },
        uTorchDir: { value: new j(0, 0, -1) },
        uTorchCol: { value: new M0(0, 0, 0) },
        uTorchCone: { value: new Ge(0.9, 0.95) },
      },
    }),
    A = new at(p, C);
  ((A.name = "house:dust"),
    (A.frustumCulled = !1),
    (A.renderOrder = 8),
    (A.visible = !1));
  let L = 0,
    U = 0,
    R = 90210;
  const I = () => ((R = (R * 16807) % 2147483647), R / 2147483647),
    W = (T, S, H, K, x, v, z) => {
      const r = L < h0 ? L++ : (U = (U + 1) % h0);
      ((n[r * 3] = T),
        (n[r * 3 + 1] = S),
        (n[r * 3 + 2] = H),
        (t[r * 3] = K),
        (t[r * 3 + 1] = x),
        (t[r * 3 + 2] = v),
        (u[r] = 0),
        (d[r] = z.life),
        (a[r] = z.s0),
        (h[r] = z.s1 ?? z.s0),
        (c[r] = z.a),
        (m[r] = z.g ?? 0.4),
        (g[r] = z.drag ?? 1.6),
        (A.visible = !0));
    },
    o0 = {
      points: A,
      burst(T, S, H, K = 1, { puff: x = !1, sides: v = null } = {}) {
        const z = Math.round(40 + 110 * K);
        for (let r = 0; r < z; r++) {
          const B = I(),
            y = T[0] + (S[0] - T[0]) * B,
            a0 = T[1] + (S[1] - T[1]) * B - I() * 0.02,
            Z = T[2] + (S[2] - T[2]) * B,
            $ = 0.03 + 0.12 * I() * K,
            J = 0.02 + 0.06 * I();
          W(
            y + H[0] * 0.02,
            a0,
            Z + H[1] * 0.02,
            (I() - 0.5) * $ + H[0] * J,
            -I() * 0.12 * K,
            (I() - 0.5) * $ + H[1] * J,
            {
              life: 2.2 + 2.6 * I(),
              s0: 0.006 + 0.008 * I(),
              a: 0.6 + 0.4 * I(),
              g: 0.22 + 0.3 * I(),
              drag: 1.4 + I(),
            },
          );
        }
        for (let r = 0; r < Math.round(4 + 8 * K); r++) {
          const B = I();
          W(
            T[0] + (S[0] - T[0]) * B,
            T[1] + (S[1] - T[1]) * B,
            T[2] + (S[2] - T[2]) * B,
            H[0] * 0.05,
            -0.2,
            H[1] * 0.05,
            {
              life: 1.2 + I(),
              s0: 0.009 + 0.006 * I(),
              a: 0.8,
              g: 3.5,
              drag: 0.6,
            },
          );
        }
        if (x)
          for (let r = 0; r < Math.round(10 + 12 * K); r++) {
            const B = v && I() < 0.6 ? v[r & 1] : [T, S],
              y = I(),
              a0 = B[0][0] + (B[1][0] - B[0][0]) * y,
              Z = B[0][1] + (B[1][1] - B[0][1]) * y,
              $ = B[0][2] + (B[1][2] - B[0][2]) * y,
              J = 0.25 + 0.3 * I();
            W(
              a0,
              Z,
              $,
              H[0] * J + (I() - 0.5) * 0.2,
              (I() - 0.4) * 0.15,
              H[1] * J + (I() - 0.5) * 0.2,
              {
                life: 1 + 0.9 * I(),
                s0: 0.05 + 0.04 * I(),
                s1: 0.22 + 0.12 * I(),
                a: 0.09 + 0.06 * I(),
                g: 0,
                drag: 2.6,
              },
            );
          }
      },
      clear() {
        ((L = 0), p.setDrawRange(0, 0), (A.visible = !1));
      },
    },
    D = new j(),
    Y = new j();
  return {
    api: o0,
    anim: (T) => {
      if (!A.visible) return;
      let S = 0;
      for (let v = 0; v < L; v++) {
        const z = (u[v] += T);
        if (z >= d[v]) continue;
        const r = v * 3,
          B = Math.exp(-g[v] * T);
        ((t[r] *= B),
          (t[r + 1] = t[r + 1] * B - m[v] * T),
          (t[r + 2] *= B),
          (n[r] += t[r] * T),
          (n[r + 1] += t[r + 1] * T),
          (n[r + 2] += t[r + 2] * T),
          n[r + 1] < I0 + 0.003 &&
            ((n[r + 1] = I0 + 0.003), (t[r] = t[r + 1] = t[r + 2] = 0)));
        const y = z / d[v];
        (S !== v &&
          ((n[S * 3] = n[r]),
          (n[S * 3 + 1] = n[r + 1]),
          (n[S * 3 + 2] = n[r + 2]),
          (t[S * 3] = t[r]),
          (t[S * 3 + 1] = t[r + 1]),
          (t[S * 3 + 2] = t[r + 2]),
          (u[S] = u[v]),
          (d[S] = d[v]),
          (a[S] = a[v]),
          (h[S] = h[v]),
          (c[S] = c[v]),
          (m[S] = m[v]),
          (g[S] = g[v])),
          (w[S] = a[S] + (h[S] - a[S]) * y),
          (M[S] = c[S] * Math.min(1, z / 0.08) * (1 - y * y)),
          S++);
      }
      if (((L = S), (U = 0), p.setDrawRange(0, L), !L)) {
        A.visible = !1;
        return;
      }
      ((p.attributes.position.needsUpdate = !0),
        (p.attributes.aSize.needsUpdate = !0),
        (p.attributes.aA.needsUpdate = !0));
      const H = s.game,
        K = C.uniforms;
      (o(K.uLamp.value), e && e(K.uGlow.value));
      const x = H?.weapons?.torch;
      (x && x.visible && x.intensity > 0
        ? (x.getWorldPosition(D),
          x.target.getWorldPosition(Y),
          K.uTorchPos.value.copy(D),
          K.uTorchDir.value.copy(Y).sub(D).normalize(),
          K.uTorchCol.value.copy(x.color).multiplyScalar(x.intensity * 0.22),
          K.uTorchCone.value.set(
            Math.cos(x.angle),
            Math.cos(x.angle * (1 - x.penumbra)),
          ))
        : K.uTorchCol.value.setRGB(0, 0, 0),
        H?.post?.size &&
          H.camera &&
          (K.uScale.value =
            H.post.size.y / (2 * Math.tan((H.camera.fov * Math.PI) / 360))));
    },
    points: A,
  };
}
const fe = [0.78, 0.76, 0.72];
function Dt(s, o, e, n) {
  const t = new l0();
  t.name = "house_yard";
  const u = n,
    d = [];
  {
    const h = X.x0 - 0.04,
      c = v0.base.z1 + 0.2,
      m = X.z1 - 0.1,
      g = 1.28,
      w = h - 1.62;
    let M = 1;
    for (let p = 0.02, C = 0; p < g; C++) {
      let A = c + 0.03 + (C % 2) * 0.05,
        L = 0;
      for (; A < m - 0.06;) {
        const U = 0.055 + e() * 0.035,
          R = Ie(w * (0.92 + e() * 0.12), U, e, M++);
        (R.applyMatrix4(
          U0(
            [(1.62 + h) / 2 + (e() - 0.5) * 0.06, p + U * 0.9, A + U],
            [e() * 6.28, 0, (e() - 0.5) * 0.08],
          ),
        ),
          r0(R, [0.8 + e() * 0.1, 0.74 + e() * 0.08, 0.66]),
          u.add(R, o.log),
          (A += U * 2 + 0.005),
          (L = Math.max(L, U)));
      }
      if (((p += L * 1.62), C > 12)) break;
    }
    for (const p of [c - 0.04, m + 0.02])
      u.add(
        Le([1.62 + 0.1, -0.1, p], [1.62 + 0.08, g + 0.1, p], 0.04, {
          radial: 8,
          tint: () => fe,
        }),
        o.log,
      );
    {
      const p = G(
        1.57,
        g + 0.1,
        c - 0.1,
        h + 0.02,
        g + 0.13,
        m + 0.08,
        0.005,
        "z",
      );
      (r0(p, [0.66, 0.64, 0.6]), u.add(p, o.plank));
    }
    d.push({
      x0: 1.62 - 0.05,
      x1: X.x0,
      z0: c - 0.1,
      z1: m + 0.08,
      y0: 0,
      y1: g,
    });
  }
  {
    u.add(
      ct({
        axis: "x",
        a: -0.22,
        b: 0.22,
        c: 0,
        y: 0,
        r: 0.27,
        seed: 77,
        taper: 0,
        radial: 22,
        segLen: 0.15,
        tint: () => fe,
      }).applyMatrix4(U0([1.05, 0.22, 201.35], [0, 0, Math.PI / 2])),
      o.log,
    );
    const c = new Re();
    (c.moveTo(0, -0.025),
      c.lineTo(0.13, -0.05),
      c.quadraticCurveTo(0.16, 0, 0.13, 0.05),
      c.lineTo(0, 0.025),
      c.lineTo(-0.035, 0.022),
      c.lineTo(-0.035, -0.022),
      c.lineTo(0, -0.025));
    const m = new Ne(c, {
      depth: 0.022,
      bevelEnabled: !0,
      bevelThickness: 0.004,
      bevelSize: 0.004,
      bevelSegments: 1,
    });
    m.translate(-0.05, 0, -0.011);
    const g = U0([1.05 + 0.02, 0.46, 201.35 - 0.02], [0.4, 0.6, -1.35]);
    (u.add(m.applyMatrix4(g), o.iron),
      u.add(
        Le(
          [1.05 + 0.02 - Math.cos(0.6) * 0.02, 0.47, 201.35 - 0.02],
          [
            1.05 + 0.02 + Math.cos(0.6 + 1.57) * 0.1 - 0.02,
            1.08,
            201.35 + 0.52,
          ],
          0.018,
          { radial: 8, tint: () => [1, 0.86, 0.66] },
        ),
        o.log,
      ));
    for (let w = 0; w < 26; w++) {
      const M = e() * 6.28,
        p = 0.32 + e() * 0.55,
        C = G(
          -0.03 - e() * 0.03,
          0,
          -0.012,
          0.03 + e() * 0.03,
          0.008,
          0.012,
          0.002,
          "x",
        );
      (C.applyMatrix4(
        U0(
          [1.05 + Math.cos(M) * p, 0.004, 201.35 + Math.sin(M) * p],
          [0, e() * 6.28, (e() - 0.5) * 0.2],
        ),
      ),
        r0(C, [0.95, 0.85, 0.7]),
        u.add(C, o.log, { cast: !1 }));
    }
    for (let w = 0; w < 3; w++) {
      const M = Ie(0.4, 0.07 + e() * 0.02, e, 40 + w);
      (M.applyMatrix4(
        U0(
          [1.05 + 0.5 + w * 0.12, 0.05, 201.35 + 0.35 - w * 0.2],
          [0.2 * w, e() * 3, 0],
        ),
      ),
        r0(M, [0.85, 0.78, 0.66]),
        u.add(M, o.log));
    }
    d.push({
      x0: 1.05 - 0.3,
      x1: 1.05 + 0.3,
      z0: 201.35 - 0.3,
      z1: 201.35 + 0.3,
      y0: 0,
      y1: 0.46,
    });
  }
  {
    const a = X.x1 + 0.42,
      h = X.z0 + 0.62,
      c = p0(
        [
          [0, 0],
          [0.25, 0],
          [0.265, 0.03],
          [0.3, 0.42],
          [0.265, 0.82],
          [0.255, 0.85],
          [0.235, 0.85],
          [0.245, 0.82],
          [0.28, 0.42],
          [0.245, 0.05],
          [0, 0.05],
        ],
        a,
        0,
        h,
        { segs: 28 },
      ),
      m = c.attributes.uv,
      g = c.attributes.position;
    for (let p = 0; p < m.count; p++) m.setXY(p, g.getY(p), m.getX(p) * 0.6);
    (r0(c, fe), u.add(c, o.plank));
    for (const [p, C] of [
      [0.1, 0.275],
      [0.42, 0.302],
      [0.74, 0.277],
    ]) {
      const A = new qe(C, 0.01, 6, 36);
      (A.rotateX(Math.PI / 2), A.translate(a, p, h), u.add(A, o.iron));
    }
    const w = p0(
        [
          [0, 0.72],
          [0.262, 0.72],
          [0, 0.72],
        ],
        a,
        0,
        h,
        { segs: 28 },
      ),
      M = new y0(w, o.water);
    ((M.name = "house:barrelWater"),
      t.add(M),
      d.push({
        x0: a - 0.32,
        x1: a + 0.32,
        z0: h - 0.32,
        z1: h + 0.32,
        y0: 0,
        y1: 0.86,
      }));
  }
  return { group: t, colliders: d };
}
function Ot(s, o, e) {
  const n = new me({ side: ge, colorWrite: !1, depthWrite: !1 });
  n.name = "house_shadow";
  const t = new y0(e, n);
  ((t.name = "house:shadowProxy"), (t.castShadow = !0), (t.receiveShadow = !1));
  const u = new l0();
  ((u.name = "house_shadowProxy"), (u.visible = !1), u.add(t), o.add(u));
  let d = !1;
  const a = s.shadowMap,
    h = a.render;
  return (
    (a.render = function (...c) {
      u.visible = d;
      try {
        return h.apply(this, c);
      } finally {
        u.visible = !1;
      }
    }),
    {
      holder: u,
      mesh: t,
      setActive(c) {
        d = !!c;
      },
      get active() {
        return d;
      },
      tris: e.index.count / 3,
    }
  );
}
function Rt(s, { rng: o }) {
  let e = "dream";
  const n = new l0();
  n.name = "house";
  const t = new l0();
  ((t.name = "house_body"), (t.visible = !1), n.add(t));
  const u = bt(s),
    d = [],
    a = [],
    h = new dt("house"),
    c = ut(s, u, o, h);
  (t.add(c.group), a.push(...c.colliders));
  const m = xt(s, u, h);
  (t.add(...m.groups), a.push(...m.colliders), d.push(...m.anim));
  const g = zt(s, u, h);
  (t.add(...g.groups), d.push(...g.anim));
  const w = () => {
      const x = s.game.player.pos;
      return (
        e === "ruins" &&
        x.x > S0.x0 - 12 &&
        x.x < S0.x1 + 12 &&
        x.z > S0.z0 - 14 &&
        x.z < S0.z1 + 10
      );
    },
    M = _t(s, u, n, { near: w, S: h });
  (t.add(M.group),
    d.push(M.anim),
    d.push(() => {
      u.glass.emissiveIntensity *=
        1 - 0.28 * (g.closeK("W1") + g.closeK("W2") + g.closeK("W3"));
    }));
  const p = It(s, n, {
    slits: g.slits,
    shutK: g.closeK,
    near: w,
    doorK: { front: () => m.front.api.openK, back: () => m.back.api.openK },
    dead: () => s.game.zombies?.list || [],
  });
  (t.add(p.group), d.push(p.anim));
  const C = Pt(s, {
    lampAt: (x) => x.set(W0.x, q0, W0.z, M.lamp.level),
    glowAt: (x) => {
      const v = p.cardMat.uniforms.uK.value;
      (x[0].set(6, 1, X.z0 + 0.42, v.x * 0.9),
        x[1].set(6, 1, X.z1 - 0.42, v.z * 0.9));
    },
  });
  (t.add(C.points), d.push(C.anim));
  const A = ht(s, u, o, h);
  (t.add(A.group), a.push(...A.colliders));
  const L = Dt(s, u, o, h);
  (t.add(L.group), a.push(...L.colliders));
  {
    const x = T0.W3,
      v = new st(x.b - x.a + 0.08, x.y1 - x.y0 + 0.08, 0.03);
    (v.translate((x.a + x.b) / 2, (x.y0 + x.y1) / 2, X.z1 - 0.06),
      h.casters.push(v));
  }
  const U = Ot(s.renderer, n, ft([...h.casters, ...A.detailBucket.casters]));
  ((h.casters = []), (A.detailBucket.casters = []));
  const R = new l0();
  ((R.name = "house_static"),
    t.add(R),
    h.flush(R),
    A.detailBucket.flush(A.detail));
  const I = (x, v, z) => {
    M.lamp.shake(z === "shove" ? 0.6 * v : 0.9 * v);
    const r = x._frame;
    C.api.burst(r.lintel[0], r.lintel[1], r.inward, v, {
      puff: z === "slam",
      sides: r.sides,
    });
  };
  ((m.front.api.onImpact = I), (m.back.api.onImpact = I));
  for (const x of ["W1", "W2", "W3"]) {
    const v = g.one[x],
      z = v.F,
      r = v.y0 + v.h + 0.01,
      B = 0.29,
      y = ($) => [
        z.base[0] + $ * z.es[0] + B * z.en[0],
        r,
        z.base[2] + $ * z.es[2] + B * z.en[2],
      ],
      a0 = y(v.sH),
      Z = y(v.sH + v.dir * v.w);
    v.api.onImpact = ($, J) => {
      (M.lamp.shake(0.35 * J), C.api.burst(a0, Z, [z.en[0], z.en[2]], 0.4 * J));
    };
  }
  Ze.house = (x, v) =>
    x > le.x0 && x < le.x1 && v > le.z0 - 0.05 && v < X.z1 - 0.02;
  const W = {
      post: {
        exposure: 0.94,
        bloom: 0.3,
        bloomThreshold: 1.05,
        vignette: 0.5,
        sat: 1,
        contrast: 1.08,
      },
      key: [10335968, 1.1],
      keyDir: ve.clone(),
      fill: [5662346, 0.025],
      fillDir: ve.clone(),
      hemi: [4215918, 1841172, 0.32],
      env: 0.06,
      envName: "forest",
      sky: { forest: 1 },
      fog: [658965, 0.018],
    },
    o0 = () => {
      const x = e === "ruins";
      for (const v of a) v.door || (v.on = x);
      for (const v of [m.front.api, m.back.api]) ((v._world = x), v._cols());
    };
  o0();
  const D = {
    W1: [3.62, 201.25, 2.88],
    W2: [8.45, 203.35, 2.17],
    W3: [3.45, 205.75, 0.39],
  };
  for (const x of g.list) x.standAt = D[x.id];
  const Y = {
      porch: [6, 199.3, 0],
      inside: [6, 201.2],
      boltFront: [6.05, 200.86, Math.PI],
      backDoor: [5.95, 206.14, 0],
      lamp: [W0.x + 0.58, W0.z + 0.02, -Math.PI / 2],
      shutter: D.W2,
      bedSide: [7.38, 205.45],
      watch: [ce.x, ce.z, ce.yaw],
      bedEye: [8.5, 0.88, 206.12],
      hide: [5.4, 205.9, -0.26],
      akaneHide: [6.5, 205, Math.PI],
      frontUse: [6.05, 200.95, Math.PI],
      backUse: [5.95, 206.1, 0],
    },
    e0 = {
      pos: [(z0.x0 + z0.x1) / 2, z0.top, (z0.z0 + z0.z1) / 2],
      eye: Y.bedEye,
      look: [7.95, 1.38, 203.2],
      lamp: [W0.x, q0, W0.z],
    },
    T = (x, v) =>
      x > v0.front - 0.05 &&
      x < v0.hearth.x1 &&
      v > v0.hearth.z0 &&
      v < v0.hearth.z1
        ? "stone"
        : "wood";
  d.push(() => {
    const x = s.game.player.pos,
      v =
        e === "ruins" &&
        x.x > S0.x0 - 14 &&
        x.x < S0.x1 + 14 &&
        x.z > S0.z0 - 16 &&
        x.z < S0.z1 + 12;
    A.detail.visible !== v && (A.detail.visible = v);
  });
  const S = g.one.W2.api,
    H = {
      list: g.list,
      get: (x) => g.one[x]?.api,
      close: (x, v) => S.close(x, v),
      get closeK() {
        return S.closeK;
      },
      snapAll(x) {
        for (const v of g.list) v.close(x);
      },
    },
    K = {
      group: n,
      colliders: a,
      anim: d,
      look: W,
      points: Y,
      bed: e0,
      outside: mt,
      frontDoor: m.front.api,
      backDoor: m.back.api,
      shutters: H,
      lamp: M.lamp,
      embers: M.embers,
      moon: p.moon,
      lights: { ...M.lights, moon: p.light },
      dust: C.api,
      props: {
        furniture: A.props,
        shutterLeaf: g.one.W2.parts.leaf,
        shutterLeaves: {
          W1: g.one.W1.parts.leaf,
          W2: g.one.W2.parts.leaf,
          W3: g.one.W3.parts.leaf,
        },
        bars: { front: m.front.parts.bar, back: m.back.parts.bar },
      },
      surfaceAt: T,
      setWorld(x) {
        e = x;
        const v = x === "ruins";
        ((t.visible = v),
          U.setActive(v),
          v && (A.detail.visible = !0),
          K.reset(),
          M.embers.set(v ? 0.75 : 0),
          p.moon.set(v ? 1 : 0),
          v || M.lamp.set(!1),
          o0());
      },
      reset() {
        (m.front.api.snap(0, !1),
          m.back.api.snap(0, !1),
          H.snapAll(0),
          M.lamp.set(!1),
          C.api.clear());
      },
      warmUp() {
        const x = s.game,
          v = s.renderer,
          z = [A.detail, M.lamp.flame, p.moon.cards, p.moon.beams, C.points],
          r = [t.visible, ...z.map((B) => B.visible)];
        t.visible = !0;
        for (const B of z) B.visible = !0;
        try {
          (v.setRenderTarget(x.post?.rt?.scene || null),
            v.compile(n, x.camera, s.scene));
        } catch (B) {
          console.warn("[house warmUp]", B);
        }
        (v.setRenderTarget(null),
          (t.visible = r[0]),
          z.forEach((B, y) => {
            B.visible = r[y + 1];
          }));
      },
      windows: c.winFrames,
      openings: T0,
      inside: n0,
      shadowProxy: U,
    };
  return K;
}
export { ve as F, Rt as a, Ut as b };
