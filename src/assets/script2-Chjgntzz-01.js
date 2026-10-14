// assets/script2-Chjgntzz 01 — createzombie
// Lines 1-298 of readable/assets/script2-Chjgntzz.pretty.js (statement-aligned).
import {
  ab as po,
  C as C0,
  V as O0,
  x as uo,
  f as ho,
  g as fo,
  o as Ae,
  Q as Ue,
  b as h0,
  a5 as N0,
  aa as V0,
  $ as oo,
  J as ao,
  q as x0,
  E as _0,
  a9 as mo,
  ah as so,
  d as f0,
  G as _t,
  n as wo,
  i as Z0,
  A as Q0,
  m as bo,
  l as go,
  c as L0,
  O as yo,
  F as ko,
  v as vo,
  u as kt,
  t as Ft,
  aP as Mo,
  aw as xo,
  az as _o,
  aQ as zo,
} from "./index-DaQlAVPp.js";
import { KINDS as $0, createZombie as Po } from "./index-Db-AsSxU.js";
import { S as So } from "./anim-B86X8yU9.js";
import {
  V as d,
  T as Z,
  S as Et,
  l as He,
  b as S0,
  m as D0,
  r as ke,
  p as t0,
  c as e0,
  a as he,
  s as Nt,
  d as Xt,
  t as ge,
  f as ut,
  e as no,
  g as To,
  i as Ro,
  j as Re,
} from "./kit-CwMQzO5T.js";
import "./lightrig-BOum5aAY.js";
import "./RoundedBoxGeometry-D0zz8qHa.js";
const Ao = `
attribute vec4 aSurf;
attribute vec4 aWear;
attribute float aAnim;
varying vec4 vSurf;
varying vec4 vWear;
varying vec3 vObj;
varying vec3 vObjN;
varying vec3 vBkW;
uniform vec4 uShock;          // x compression (m), y the spring's top (local y), z the spring's bottom at rest (local y)
`,
  Io = `
vObj = transformed; vObjN = objectNormal; vSurf = aSurf; vWear = aWear;
if (aAnim > 1.5) {
  float sk = (transformed.y - uShock.y) / (uShock.z - uShock.y);
  transformed.y = uShock.y + sk * (uShock.z + uShock.x - uShock.y);
} else if (aAnim > 0.5) transformed.y += uShock.x;
vBkW = (modelMatrix * vec4(transformed, 1.0)).xyz;      // (plain meshes only: never instanced)
`,
  Wo = `
#if defined( RE_IndirectDiffuse )
{
  vec3 toP = uBouncePos - vBkW;
  float dP = length(toP);
  vec3 nW = inverseTransformDirection(normal, viewMatrix);
  float cosP = max(dot(nW, toP / max(dP, 1e-3)), 0.0);
  reflectedLight.indirectDiffuse += uBounce * cosP / (1.0 + dP * dP * 0.08) * BRDF_Lambert(diffuseColor.rgb) * (1.0 - wkMetal * 0.8);
}
#endif
`,
  Fo = `
varying vec4 vSurf;
varying vec4 vWear;
varying vec3 vObj;
varying vec3 vObjN;
varying vec3 vBkW;
uniform vec3 uBounce;         // the headlight's pool on the ground: its colour x strength (irradiance at 1 m) ...
uniform vec3 uBouncePos;      // ... and where it is (world)
uniform float uHead;          // the headlight's glow (0 off .. 1 on)
uniform float uTail;          // the tail lamp (0 off, 1 on, 2 braking)
uniform float uDirt;          // the whole bike's grime (0..1, a dial)
uniform sampler2D tDecal;
float bkH(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float bkN(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(bkH(i), bkH(i + vec3(1.0, 0.0, 0.0)), f.x), mix(bkH(i + vec3(0.0, 1.0, 0.0)), bkH(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(bkH(i + vec3(0.0, 0.0, 1.0)), bkH(i + vec3(1.0, 0.0, 1.0)), f.x), mix(bkH(i + vec3(0.0, 1.0, 1.0)), bkH(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
float bkF(vec3 p) { return 0.5 * bkN(p) + 0.25 * bkN(p * 2.03 + 1.7) + 0.125 * bkN(p * 4.07 - 3.1) + 0.0625 * bkN(p * 8.13 + 5.3); }
float bkF2(vec3 p) { return 0.62 * bkN(p) + 0.38 * bkN(p * 2.41 + 4.2); }
// what the wear made of this fragment (set in the colour step, used by roughness / metalness / normal / clearcoat)
float wkRough = -1.0, wkMetal = -1.0, wkH = 0.0, wkCoat = 1.0, wkGlow = 0.0;
vec3 wkGlowCol = vec3(0.0);
`,
  Lo = `
{
  vec3 P = vObj;
  vec3 Nn = normalize(vObjN);
  float kind = floor(vSurf.w + 0.5);
  vec3 col = diffuseColor.rgb;
  float rough = vSurf.x, metal = vSurf.y;
  float h = 0.0;
  float chipAmt = vWear.x, rustAmt = vWear.y, mudAmt = clamp(vWear.z * (0.55 + 0.6 * uDirt), 0.0, 1.0), dustAmt = vWear.w;
  // ---- paint chips (painted steel, the can, plastic scuffs): crisp-edged flakes, a primer ring, bare metal / rust inside
  if (chipAmt > 0.0 && (kind == 1.0 || kind == 12.0 || kind == 2.0)) {
    float big = bkF(P * 9.0 + 3.7);
    float small = bkN(P * 61.0 - 1.3) * 0.55 + bkN(P * 23.0 + 7.1) * 0.45;
    float cn = max(big * 1.05 - 0.02, small * 0.88);
    float t = 1.0 - 0.36 * chipAmt;
    float ring = smoothstep(t - 0.035, t - 0.012, cn);
    float chip = smoothstep(t - 0.006, t + 0.004, cn);
    if (kind == 2.0) {
      // old plastic does not rust or chip: it scuffs - rough grey-white scrapes, a grime in them
      float sc2 = smoothstep(t - 0.01, t + 0.02, big * 1.05 - 0.02);
      col = mix(col, col * 0.78, sc2 * 0.6);
      rough = mix(rough, 0.82, sc2);
      h -= sc2 * 0.2;
    } else {
      vec3 primer = vec3(0.16, 0.155, 0.14);
      vec3 bare = vec3(0.32, 0.3, 0.28);
      float inner = bkN(P * 140.0);
      vec3 rust = mix(vec3(0.115, 0.035, 0.012), vec3(0.2, 0.075, 0.025), inner);
      vec3 under = mix(bare, rust, smoothstep(0.25, 0.65, bkN(P * 33.0 + 2.0) + 0.25 * rustAmt));
      col = mix(col, primer, ring * (1.0 - chip));
      col = mix(col, under, chip);
      metal = mix(metal, 0.35 * (1.0 - smoothstep(0.3, 0.7, rustAmt)), chip);
      rough = mix(rough, 0.82, chip);
      h -= chip * 0.6 + ring * 0.2;
      wkCoat *= 1.0 - ring;
    }
    // scratches: fine bright lines through the paint, in loose bunches
    vec3 sp = P * 38.0;
    float lines = abs(fract(dot(sp, vec3(0.83, 0.31, 0.46)) + bkN(P * 6.0) * 2.0) - 0.5);
    float sc = (1.0 - smoothstep(0.0, 0.035, lines)) * smoothstep(0.62, 0.8, bkN(P * 4.3 + 9.0)) * chipAmt;
    col = mix(col, kind == 2.0 ? col * 1.25 + 0.03 : vec3(0.26, 0.25, 0.23), sc * 0.7);
    rough = mix(rough, 0.6, sc);
  }
  // ---- rust on steel: blotches, pitting dots, streaks running down
  if (rustAmt > 0.0 && (kind == 1.0 || kind == 3.0 || kind == 7.0 || kind == 12.0 || kind == 14.0)) {
    float bl = bkF(P * vec3(7.0, 2.6, 7.0) + 11.0);
    float pit = bkN(P * 120.0 + 3.0);
    float streak = bkF2(P * vec3(26.0, 3.2, 26.0) - 4.0);
    float r = smoothstep(1.0 - 0.52 * rustAmt, 1.08 - 0.52 * rustAmt, bl + (streak - 0.5) * 0.35);
    float pits = smoothstep(0.86 - 0.12 * rustAmt, 0.9 - 0.12 * rustAmt, pit) * (kind == 3.0 ? 1.0 : 0.6);
    float k = clamp(max(r, pits), 0.0, 1.0);
    vec3 rc = mix(vec3(0.075, 0.028, 0.012), vec3(0.24, 0.095, 0.032), bkN(P * 47.0));
    col = mix(col, rc, k);
    metal = mix(metal, 0.15, k);
    rough = mix(rough, 0.9, k);
    h += k * 0.25 * bkN(P * 90.0);
    wkCoat *= 1.0 - k;
  }
  // ---- chrome: water stains and a dull bloom on the plating
  if (kind == 3.0) {
    float st = bkF(P * 14.0 + 5.0);
    rough = mix(rough, rough + 0.22, smoothstep(0.45, 0.7, st));
    col *= 1.0 - 0.18 * smoothstep(0.5, 0.75, st);
  }
  // ---- cast aluminium: white-grey oxide blooms, a darker grime in the low parts
  if (kind == 4.0) {
    float ox = bkF(P * 16.0 - 2.0);
    col = mix(col, vec3(0.42, 0.42, 0.4), smoothstep(0.55, 0.75, ox) * 0.6);
    col *= 0.86 + 0.28 * bkN(P * 70.0);
    rough = mix(rough, 0.75, smoothstep(0.5, 0.7, ox));
  }
  // ---- the exhaust: heat colours toward the head, rust everywhere, soot at the tip (vWear.x carries 0 head .. 1 tip)
  if (kind == 7.0) {
    float s = vWear.x;
    vec3 heat = mix(vec3(0.05, 0.035, 0.06), vec3(0.11, 0.075, 0.035), smoothstep(0.0, 0.35, s));
    col = mix(heat, col, smoothstep(0.15, 0.55, s));
    col = mix(col, vec3(0.012, 0.011, 0.01), smoothstep(0.92, 1.0, s) * 0.9);
  }
  // ---- rubber: the knobs' faces worn smooth, a brown dust in the grooves
  if (kind == 5.0) {
    float d = bkF(P * 30.0);
    col = mix(col, vec3(0.06, 0.052, 0.044), smoothstep(0.4, 0.75, d) * 0.6);
    rough = clamp(rough + (d - 0.5) * 0.2, 0.0, 1.0);
  }
  // ---- the seat's vinyl: crazed cracks, a shine where people sat
  if (kind == 6.0) {
    float c1 = abs(bkF(P * vec3(22.0, 6.0, 9.0)) - 0.5);
    float cr = (1.0 - smoothstep(0.0, 0.018, c1)) * smoothstep(0.35, 0.7, bkN(P * 5.0 + 1.0));
    col = mix(col, vec3(0.06, 0.05, 0.04), cr * 0.8);
    h -= cr * 0.5;
    float shine = smoothstep(0.45, 0.85, bkN(P * vec3(3.0, 1.0, 1.5) + 2.0));
    rough = mix(rough, rough - 0.2, shine * step(0.3, Nn.y));
    h += (bkN(P * 260.0) - 0.5) * 0.05;
  }
  // ---- webbing: a weave
  if (kind == 13.0) {
    float wv = abs(sin(dot(P, vec3(0.0, 0.0, 1.0)) * 1400.0)) * abs(sin(dot(P, vec3(1.0, 1.0, 0.0)) * 900.0));
    col *= 0.82 + 0.3 * wv;
    h += wv * 0.08;
  }
  // ---- the chain: oily black, rust at the side plates
  if (kind == 14.0) {
    col *= 0.7 + 0.5 * bkN(P * 200.0);
  }
  // ---- glass: smudges and grime in the corners
  if (kind == 11.0) {
    float sm = bkF(P * 40.0);
    rough = mix(0.05, 0.35, smoothstep(0.45, 0.7, sm));
  }
  // ---- decals: the plate, the speedometer's face, the badge
  if (kind == 10.0) {
    vec4 d = texture2D(tDecal, vUv);
    col = d.rgb;
    rough = mix(0.55, 0.3, d.a);
  }
  // ---- the lenses: a fluted / prismatic glass, glowing when on
  if (kind == 8.0) {
    // clear fluted glass over a chrome reflector: silvery, the flutes and a few rings faint in it, the bulb a dark dot
    float rr = length(vUv - 0.5) * 2.0;
    float flute = 0.5 + 0.5 * cos((vUv.x - 0.5) * 64.0);
    float rings = 0.5 + 0.5 * cos(rr * 30.0);
    float pat = mix(flute, rings, smoothstep(0.45, 0.75, rr));
    col = vec3(0.36, 0.36, 0.34) * (0.85 + 0.15 * pat);
    col *= 1.0 - 0.6 * (1.0 - smoothstep(0.08, 0.16, rr));
    rough = 0.12 + 0.08 * pat; metal = 0.85;
    float core = 1.0 - smoothstep(0.0, 0.42, rr);
    wkGlow = uHead * (0.45 + 0.15 * pat + 1.6 * core * core) * (1.0 - 0.25 * smoothstep(0.85, 1.0, rr));
    wkGlowCol = vec3(1.0, 0.86, 0.62) * 3.2;
    h += pat * 0.06;
  }
  if (kind == 9.0) {
    float rr = length(vUv - 0.5) * 2.0;
    float cells = 0.5 + 0.5 * cos(vUv.x * 90.0) * cos(vUv.y * 90.0);
    rough = 0.12;
    wkGlow = uTail * (0.6 + 0.4 * cells) * (1.0 - 0.5 * smoothstep(0.6, 1.0, rr));
    wkGlowCol = vec3(1.0, 0.05, 0.02) * 2.4;
    col = mix(col, vec3(0.18, 0.012, 0.008), 0.6) * (0.8 + 0.3 * cells);
  }
  // ---- dried mud: a film where it is dirty (a dusty wash, no edges), a spray of crisp droplets, crusts only where it is thick
  if (mudAmt > 0.0 && kind != 8.0 && kind != 9.0 && kind != 10.0) {
    float m1 = bkF(P * 9.0 + 21.0);
    vec3 mc = mix(vec3(0.1, 0.075, 0.05), vec3(0.19, 0.15, 0.105), bkN(P * 18.0 + 1.0) * 0.6 + (m1 - 0.5) * 0.5);
    float film = smoothstep(0.08, 0.85, mudAmt) * (0.5 + 0.5 * bkF(P * 3.5 + 7.0));
    float d1 = bkN(P * 64.0 + 3.0) * 0.62 + bkN(P * 141.0 - 2.0) * 0.38;
    float drops = smoothstep(0.81 - 0.17 * mudAmt, 0.835 - 0.17 * mudAmt, d1) * smoothstep(0.04, 0.35, mudAmt);
    float cake = smoothstep(0.6, 0.64, m1 + (mudAmt - 0.72) * 0.85);
    if (kind == 5.0) { mc *= 0.55; drops *= 0.4; film *= 0.6; }           // (on rubber: dark, caked in the tread)
    mc = mix(mc, vec3(0.05, 0.036, 0.024), smoothstep(0.75, 0.9, m1) * cake * 0.5);       // (darker where it is thick)
    col = mix(col, col * 0.62 + mc * 0.7, film * 0.55);
    float mk = clamp(max(drops, cake), 0.0, 1.0);
    col = mix(col, mc, mk);
    rough = mix(rough, 0.95, max(mk, film * 0.5)); metal = mix(metal, 0.0, max(mk, film * 0.4));
    h += mk * (0.5 + 0.5 * bkN(P * 160.0));
    wkCoat *= 1.0 - max(mk, film * 0.6);
    wkGlow *= 1.0 - mk * 0.8;
  }
  // ---- dust and ash from the burning town, settled on what faces up (not on the wheels: they turn)
  if (dustAmt > 0.0) {
    float up = smoothstep(0.15, 0.85, Nn.y);
    float df = bkF(P * 8.0 + 40.0);
    float dk = up * dustAmt * (0.45 + 0.55 * smoothstep(0.3, 0.7, df));
    col = mix(col, vec3(0.14, 0.135, 0.125), dk * 0.75);
    rough = mix(rough, 0.95, dk);
    metal = mix(metal, 0.0, dk * 0.8);
    wkCoat *= 1.0 - dk;
  }
  // ---- grime: everything low and inward is darker
  col *= 1.0 - 0.25 * uDirt * clamp(vWear.z * 1.4, 0.0, 1.0) * (1.0 - smoothstep(-0.2, 0.6, Nn.y));
  diffuseColor.rgb = col;
  wkRough = clamp(rough, 0.04, 1.0); wkMetal = clamp(metal, 0.0, 1.0); wkH = h;
}
`,
  Do = `
{
  // bump from the wear (chips sink, mud and rust stand proud): screen-space derivatives of its height
  vec3 sx = dFdx(-vViewPosition), sy = dFdy(-vViewPosition);
  vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
  float det = dot(sx, r1);
  vec2 dh = vec2(dFdx(wkH), dFdy(wkH)) * 0.0022;
  vec3 g = sign(det) * (dh.x * r1 + dh.y * r2);
  normal = normalize(abs(det) * normal - g);
}
`;
let B0 = null;
