// assets/house-BEzMWI26 01 — uniforms
// Lines 1-286 of readable/assets/house-BEzMWI26.pretty.js (statement-aligned).
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
