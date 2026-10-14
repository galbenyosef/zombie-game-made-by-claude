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
function Bo() {
  if (B0) return B0;
  const p = 512,
    e = document.createElement("canvas");
  e.width = e.height = p;
  const o = e.getContext("2d");
  ((o.fillStyle = "#000"), o.fillRect(0, 0, p, p));
  {
    ((o.fillStyle = "#d9d4c3"),
      o.fillRect(8, 8, 240, 120),
      (o.strokeStyle = "#2f5a35"),
      (o.lineWidth = 3),
      o.strokeRect(13, 13, 230, 110),
      (o.fillStyle = "#2c5733"),
      (o.font = 'bold 26px "Yu Gothic", "Meiryo", "MS Gothic", sans-serif'),
      (o.textAlign = "center"),
      (o.textBaseline = "middle"),
      o.fillText("山添町 せ", 8 + 240 / 2, 38),
      (o.font = 'bold 54px "Arial Narrow", Arial, sans-serif'),
      o.fillText("27-18", 8 + 240 / 2, 88));
    const b = o.createLinearGradient(0, 8, 0, 128);
    (b.addColorStop(0, "rgba(70,52,30,0)"),
      b.addColorStop(1, "rgba(70,52,30,0.55)"),
      (o.fillStyle = b),
      o.fillRect(8, 8, 240, 120));
    for (const g of [30, 226]) {
      const n = o.createLinearGradient(0, 18, 0, 68);
      (n.addColorStop(0, "rgba(110,50,15,0.8)"),
        n.addColorStop(1, "rgba(110,50,15,0)"),
        (o.fillStyle = n),
        o.fillRect(g - 3, 20, 6, 50),
        (o.fillStyle = "#3a3630"),
        o.beginPath(),
        o.arc(g, 22, 5, 0, 7),
        o.fill());
    }
  }
  {
    ((o.fillStyle = "#0b0b0c"),
      o.beginPath(),
      o.arc(384, 128, 116, 0, 7),
      o.fill(),
      (o.strokeStyle = "#d8d4c8"),
      (o.fillStyle = "#d8d4c8"),
      (o.textAlign = "center"),
      (o.textBaseline = "middle"));
    const x = Math.PI * 0.75,
      b = Math.PI * 2.25;
    for (let g = 0; g <= 140; g += 5) {
      const n = x + (b - x) * (g / 140),
        B = g % 20 === 0,
        O = B ? 116 * 0.76 : 116 * 0.84;
      ((o.lineWidth = B ? 4 : 2),
        o.beginPath(),
        o.moveTo(384 + Math.cos(n) * O, 128 + Math.sin(n) * O),
        o.lineTo(
          384 + Math.cos(n) * 116 * 0.93,
          128 + Math.sin(n) * 116 * 0.93,
        ),
        o.stroke(),
        B &&
          ((o.font = "bold 20px Arial, sans-serif"),
          o.fillText(
            String(g),
            384 + Math.cos(n) * 116 * 0.58,
            128 + Math.sin(n) * 116 * 0.58,
          )));
    }
    ((o.strokeStyle = "#b3261e"),
      (o.lineWidth = 5),
      o.beginPath(),
      o.arc(384, 128, 116 * 0.88, x + (b - x) * (110 / 140), b),
      o.stroke(),
      (o.font = "16px Arial, sans-serif"),
      o.fillText("km/h", 384, 174),
      (o.fillStyle = "#1a1a1a"),
      o.fillRect(350, 192, 68, 20),
      (o.fillStyle = "#c9c4b5"),
      (o.font = 'bold 16px "Courier New", monospace'),
      o.fillText("04718", 384, 203));
  }
  ((o.fillStyle = "#5b1015"),
    o.fillRect(8, 280, 240, 90),
    (o.strokeStyle = "#c9c2b0"),
    (o.lineWidth = 6),
    o.strokeRect(12, 284, 232, 82),
    (o.fillStyle = "#e4dcc6"),
    (o.font = 'italic bold 36px Georgia, "Times New Roman", serif'),
    (o.textAlign = "center"),
    (o.textBaseline = "middle"),
    o.fillText("Kogarashi", 8 + 240 / 2, 280 + 90 / 2 + 2),
    (o.fillStyle = "#b9ae93"),
    o.fillRect(262, 262, 244, 244),
    (o.fillStyle = "#cbbf98"),
    o.beginPath(),
    o.ellipse(384, 384, 110, 90, 0, 0, 7),
    o.fill(),
    (o.strokeStyle = "rgba(40,30,20,0.35)"),
    (o.lineWidth = 3),
    o.stroke(),
    (o.fillStyle = "#121110"),
    (o.font = 'bold 110px "Arial Black", Arial, sans-serif'),
    (o.textAlign = "center"),
    (o.textBaseline = "middle"),
    o.fillText("27", 384, 390));
  const r = o.getImageData(0, 0, p, p),
    s = r.data;
  for (let k = 0; k < p; k++)
    for (let S = 0; S < p; S++) {
      const u = (k * p + S) * 4;
      s[u + 3] =
        (S > 256 && k < 256) || (S < 256 && k > 256 && k < 380) ? 255 : 140;
    }
  o.putImageData(r, 0, 0);
  const T = new ho(e);
  return (
    (T.colorSpace = fo),
    (T.anisotropy = 8),
    (T.premultiplyAlpha = !1),
    (B0 = T),
    T
  );
}
const T0 = {
  plate: [8 / 512, 1 - 128 / 512, 248 / 512, 1 - 8 / 512],
  dial: [268 / 512, 1 - 244 / 512, 500 / 512, 1 - 12 / 512],
  badge: [8 / 512, 1 - 370 / 512, 248 / 512, 1 - 280 / 512],
  number: [274 / 512, 1 - 474 / 512, 494 / 512, 1 - 294 / 512],
};
function Co() {
  const p = new po({
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.35,
      envMapIntensity: 1,
    }),
    e = {
      uHead: { value: 0 },
      uTail: { value: 0 },
      uDirt: { value: 0.75 },
      tDecal: { value: Bo() },
      uShock: { value: new uo(0, -0.1, -0.3, 0) },
      uBounce: { value: new C0(0, 0, 0) },
      uBouncePos: { value: new O0() },
    };
  return (
    (p.userData.U = e),
    (p.onBeforeCompile = (o) => {
      (Object.assign(o.uniforms, e),
        (o.vertexShader = o.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
` + Ao,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` + Io,
          )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
` + Fo,
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
` + Lo,
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
` + Do,
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
material.clearcoatRoughness = clamp(0.28 + (1.0 - wkCoat) * 0.5, 0.0, 1.0);`,
          )
          .replace(
            "#include <lights_fragment_end>",
            `#include <lights_fragment_end>
` + Wo,
          )));
    }),
    (p.customProgramCacheKey = () => "bike_v2"),
    p
  );
}
function Vo(p) {
  return ((p.defines = { ...(p.defines || {}), USE_UV: "" }), p);
}
const P0 = Math.PI / 180,
  o0 = (p, e = 0, o = 1) => (p < e ? e : p > o ? o : p),
  Je = (p, e, o) => p + (e - p) * o,
  Fe = (p, e, o) => {
    const r = o0((o - p) / (e - p));
    return r * r * (3 - 2 * r);
  },
  Rt = 28 * P0,
  Ot = {
    d: d(0, Math.cos(Rt), -Math.sin(Rt)),
    e: d(0, Math.sin(Rt), Math.cos(Rt)),
    g0: d(0, 0, 0.825),
  },
  zt = (p, e = 0) =>
    Ot.g0.clone().addScaledVector(Ot.d, p).addScaledVector(Ot.e, e),
  m0 = d(0, 0.345, 0.7),
  Kt = d(0, 0.33, -0.7),
  z0 = m0.clone().sub(Ot.g0).dot(Ot.e),
  E0 = m0.clone().sub(Ot.g0).dot(Ot.d),
  E = {
    WB: 1.4,
    RF: 0.345,
    RR: 0.33,
    FA: m0,
    RA: Kt,
    RAKE: Rt,
    AX: Ot,
    OFF: z0,
    TAX: E0,
    SP: zt(1.075),
    SW: d(0, 0.43, -0.13),
    shockTop: d(0.105, 0.812, -0.47),
    shockBot: d(0.105, 0.39, -0.6),
    peg: d(0.2, 0.34, -0.12),
    grip: d(0.37, 1.132, 0.187),
    gripAxis: d(0.995, 0.03, -0.1).normalize(),
    seatZ: -0.22,
    seatTop: 0.868,
    paxZ: -0.72,
    paxEye: d(0.13, 1.52, -0.67),
    lens: d(0, 0.948, 0.545),
    lensR: 0.074,
    stand: d(0.118, 0.292, -0.1),
    standLen: 0.322,
    tail: d(0, 0.83, -1.03),
    fTravel: 0.15,
    rTravel: 0.15,
  },
  P = {
    paint: Re({
      col: "#5c1519",
      rough: 0.38,
      metal: 0.05,
      clear: 0.55,
      kind: 1,
      chip: 0.62,
      rust: 0.55,
      dust: 0.85,
    }),
    stripe: Re({
      col: "#c9bea2",
      rough: 0.4,
      metal: 0,
      clear: 0.5,
      kind: 1,
      chip: 0.62,
      rust: 0.55,
      dust: 0.85,
    }),
    frame: Re({
      col: "#121213",
      rough: 0.5,
      metal: 0.1,
      clear: 0.25,
      kind: 1,
      chip: 0.5,
      rust: 0.62,
      dust: 0.6,
    }),
    plastic: Re({
      col: "#b9ae93",
      rough: 0.52,
      kind: 2,
      chip: 0.6,
      dust: 0.85,
      mud: 1.15,
    }),
    chrome: Re({
      col: "#c8c8c8",
      rough: 0.14,
      metal: 1,
      kind: 3,
      rust: 0.38,
      dust: 0.3,
    }),
    steel: Re({
      col: "#8a8a88",
      rough: 0.36,
      metal: 1,
      kind: 3,
      rust: 0.55,
      dust: 0.4,
    }),
    alu: Re({ col: "#a3a19b", rough: 0.4, metal: 1, kind: 4, dust: 0.5 }),
    case: Re({
      col: "#86847d",
      rough: 0.52,
      metal: 0.85,
      kind: 4,
      dust: 0.6,
      mud: 1.2,
    }),
    black: Re({
      col: "#1a1a1b",
      rough: 0.62,
      metal: 0.05,
      kind: 1,
      chip: 0.35,
      rust: 0.4,
      dust: 0.5,
    }),
    fins: Re({
      col: "#161617",
      rough: 0.62,
      metal: 0.15,
      kind: 1,
      chip: 0.5,
      rust: 0.3,
      dust: 0.5,
    }),
    finEdge: Re({ col: "#b2b0a8", rough: 0.36, metal: 1, kind: 4, dust: 0.3 }),
    rubber: Re({ col: "#151414", rough: 0.86, kind: 5, dust: 0.4, mud: 1 }),
    tyre: Re({ col: "#141312", rough: 0.9, kind: 5, dust: 0, mud: 0 }),
    vinyl: Re({ col: "#111112", rough: 0.42, kind: 6, dust: 0.7, mud: 0.6 }),
    tape: Re({ col: "#5d5f60", rough: 0.55, kind: 0, dust: 0.5 }),
    pipe: Re({
      col: "#3b2a1f",
      rough: 0.68,
      metal: 0.55,
      kind: 7,
      rust: 0.75,
      dust: 0.3,
    }),
    shield: Re({
      col: "#1c1c1d",
      rough: 0.55,
      metal: 0.3,
      kind: 1,
      chip: 0.55,
      rust: 0.7,
      dust: 0.5,
    }),
    lens: Re({ col: "#151514", rough: 0.08, kind: 8, mud: 0.25, dust: 0 }),
    tail: Re({ col: "#4a0807", rough: 0.15, kind: 9, mud: 0.6, dust: 0 }),
    amber: Re({ col: "#6a3a08", rough: 0.15, kind: 0, mud: 0.5, dust: 0.2 }),
    decal: Re({ col: "#ffffff", rough: 0.5, kind: 10, mud: 0.4, dust: 0.3 }),
    glass: Re({ col: "#0b0c0d", rough: 0.05, kind: 11, mud: 0.3, dust: 0.4 }),
    can: Re({
      col: "#4b4c2c",
      rough: 0.55,
      metal: 0.1,
      clear: 0.15,
      kind: 12,
      chip: 0.7,
      rust: 0.55,
      dust: 0.9,
    }),
    strap: Re({ col: "#2f2e25", rough: 0.9, kind: 13, dust: 0.6 }),
    chain: Re({
      col: "#2b2621",
      rough: 0.5,
      metal: 0.8,
      kind: 14,
      rust: 0.45,
      dust: 0.2,
    }),
    mirror: Re({
      col: "#3e4142",
      rough: 0.5,
      metal: 1,
      kind: 0,
      mud: 0.1,
      dust: 0.5,
    }),
  };
function Eo(p) {
  const e = {
    body: new Et("body"),
    steer: new Et("steer"),
    slider: new Et("slider"),
    fwheel: new Et("fwheel"),
    swing: new Et("swing"),
    rwheel: new Et("rwheel"),
    shock: new Et("shock"),
    stand: new Et("stand"),
  };
  (J0(
    e.fwheel,
    m0,
    {
      R: 0.345,
      rim: 0.2667,
      w: 0.078,
      hubR: 0.058,
      hubW: 0.072,
      flange: 0.042,
      rows: "front",
    },
    p,
  ),
    J0(
      e.rwheel,
      Kt,
      {
        R: 0.33,
        rim: 0.2286,
        w: 0.1,
        hubR: 0.075,
        hubW: 0.1,
        flange: 0.05,
        rows: "rear",
        sprocket: !0,
      },
      p,
    ),
    Oo(e),
    No(e),
    Ho(e),
    Go(e),
    qo(e),
    Uo(e),
    jo(e),
    Yo(e),
    Xo(e),
    Zo(e),
    Qo(e),
    $o(e),
    Jo(e));
  const o = new Ae().compose(
      E.SP,
      new Ue().setFromAxisAngle(d(1, 0, 0), -Rt),
      d(1, 1, 1),
    ),
    r = o.clone().setPosition(m0),
    s = d(0, E.shockTop.y, E.shockTop.z),
    T = d(0, E.shockBot.y, E.shockBot.z),
    k = Math.atan2(-(T.z - s.z), -(T.y - s.y)),
    S = new Ae().compose(
      s,
      new Ue().setFromAxisAngle(d(1, 0, 0), k),
      d(1, 1, 1),
    ),
    u = w0(!0),
    x = new Ae().compose(
      E.stand,
      new Ue().setFromUnitVectors(d(0, -1, 0), u),
      d(1, 1, 1),
    ),
    b = {
      body: null,
      steer: o,
      slider: o,
      fwheel: r,
      swing: Z(E.SW.x, E.SW.y, E.SW.z),
      rwheel: Z(Kt.x, Kt.y, Kt.z),
      shock: S,
      stand: x,
    };
  return {
    K: e,
    rest: b,
    shockRx: k,
    shockLen: s.distanceTo(T),
    standDown: u,
    standUp: w0(!1),
  };
}
function w0(p) {
  return p
    ? d(0.17, -0.245, 0.085).normalize()
    : d(0.025, 0.055, -0.998).normalize();
}
function J0(p, e, o, r) {
  const s = new Ae().makeRotationZ(-Math.PI / 2),
    T = (J) => new Ae().makeTranslation(e.x, e.y, e.z).multiply(J),
    k = (J) => Math.hypot(J.y - e.y, J.z - e.z),
    S = (J, $, ve) => {
      const Pe = k(J);
      return [0, 0, 0.15 + 0.35 * Fe(o.R - 0.06, o.R - 0.015, Pe), 0];
    },
    u = (J, $, ve) => [0, ve[1], 0.2 + 0.25 * Math.abs($.x), 0],
    x = o.R - 0.012,
    b = o.w / 2,
    g = (o.rim + 0.004 + x) / 2,
    n = (x - (o.rim + 0.004)) / 2,
    B = [];
  for (let J = 0; J <= 16; J++) {
    const $ = -Math.PI * 0.62 + (J / 16) * Math.PI * 2.24;
    B.push([
      g + n * Math.sin($) * 1,
      -b * Math.cos($) * (Math.sin($) > 0 ? 1 : 0.92),
    ]);
  }
  p.add(He(B, 48).applyMatrix4(s), T(new Ae()), P.tyre, { wear: S });
  const O =
      o.rows === "front"
        ? [
            { th: 0, w: 0.026, l: 0.017, alt: 0.006 },
            { th: 0.62, w: 0.017, l: 0.018, alt: 0 },
            { th: -0.62, w: 0.017, l: 0.018, alt: 0, ph: 0.5 },
            { th: 1.05, w: 0.013, l: 0.016, alt: 0, ph: 0.25 },
            { th: -1.05, w: 0.013, l: 0.016, alt: 0, ph: 0.75 },
          ]
        : [
            { th: 0.22, w: 0.024, l: 0.018, alt: 0 },
            { th: -0.22, w: 0.024, l: 0.018, alt: 0, ph: 0.5 },
            { th: 0.68, w: 0.02, l: 0.019, alt: 0, ph: 0.25 },
            { th: -0.68, w: 0.02, l: 0.019, alt: 0, ph: 0.75 },
            { th: 1.08, w: 0.016, l: 0.017, alt: 0 },
            { th: -1.08, w: 0.016, l: 0.017, alt: 0, ph: 0.5 },
          ],
    ee = 0.012,
    le = 0.043,
    de = (J, $) => {
      const ve = new so(J, ee, $),
        Pe = ve.attributes.position;
      for (let Ie = 0; Ie < Pe.count; Ie++)
        Pe.getY(Ie) > 0 &&
          (Pe.setX(Ie, Pe.getX(Ie) * 0.82), Pe.setZ(Ie, Pe.getZ(Ie) * 0.8));
      return (
        ve.translate(0, ee / 2 - 0.002, 0),
        ve.setIndex(
          Array.from(ve.index.array).filter(
            (Ie, Se) => Math.floor(Se / 6) !== 3,
          ),
        ),
        ve.toNonIndexed()
      );
    },
    fe = [];
  for (const J of O) {
    const $ = Math.PI / 2 - J.th,
      ve = g + n * Math.sin($),
      Pe = -b * Math.cos($) * (Math.sin($) > 0 ? 1 : 0.92),
      Ie = Math.sin($) / n,
      Se = -Math.cos($) / b,
      je = Math.hypot(Ie, Se),
      Ye = Math.round((Math.PI * 2 * ve) / le),
      Xe = de(J.w, J.l);
    for (let nt = 0; nt < Ye; nt++) {
      const rt = ((nt + (J.ph || 0)) / Ye) * Math.PI * 2,
        ae = Math.cos(rt),
        At = Math.sin(rt),
        it = d(0, At, ae),
        Oe = d(Se / je, 0, 0)
          .addScaledVector(it, Ie / je)
          .normalize(),
        Dt = d(1, 0, 0).sub(Oe.clone().multiplyScalar(Oe.x)).normalize(),
        Ht = d().crossVectors(Dt, Oe),
        tt = Pe + (J.alt ? (nt % 2 ? J.alt : -J.alt) : 0),
        Ze = d(e.x + tt, e.y + At * ve, e.z + ae * ve),
        _ = S0(Ze, Dt, Oe, Ht).multiply(
          new Ae().makeRotationY((r() - 0.5) * 0.12),
        );
      fe.push(Xe.clone().applyMatrix4(_));
    }
    Xe.dispose();
  }
  p.add(D0(fe), null, P.tyre, {
    wear: (J, $, ve) => [0, 0, 0.18 + 0.3 * Fe(0.4, 0.7, Math.abs($.x)), 0],
  });
  const q = b * 0.62,
    te = o.rim;
  p.add(
    He(
      [
        [te + 0.012, q + 0.004],
        [te + 0.013, q - 0.001],
        [te + 0.003, q - 0.003],
        [te - 0.006, q * 0.55],
        [te - 0.012, q * 0.25],
        [te - 0.012, -q * 0.25],
        [te - 0.006, -q * 0.55],
        [te + 0.003, -q + 0.003],
        [te + 0.013, -q + 0.001],
        [te + 0.012, -q - 0.004],
        [te + 0.002, -q - 0.004],
        [te - 0.013, -q * 0.6],
        [te - 0.016, 0],
        [te - 0.013, q * 0.6],
        [te + 0.002, q + 0.004],
        [te + 0.012, q + 0.004],
      ].map(([J, $]) => [J, $]),
      48,
    ).applyMatrix4(s),
    T(new Ae()),
    P.chrome,
    { wear: u },
  );
  const ne = o.hubW / 2,
    we = o.hubR;
  (p.add(
    He(
      [
        [0.012, -ne - 0.012],
        [0.02, -ne - 0.012],
        [0.022, -ne],
        [we * 0.72, -ne + 0.002],
        [o.flange + 0.004, -ne + 0.01],
        [o.flange + 0.004, -ne + 0.016],
        [we * 0.68, -ne + 0.02],
        [we * 0.62, 0],
        [we, ne * 0.3],
        [we + 0.004, ne * 0.4],
        [we + 0.004, ne - 0.004],
        [we - 0.004, ne],
        [0.02, ne + 0.002],
        [0.012, ne + 0.002],
      ],
      24,
    ).applyMatrix4(s),
    T(new Ae()),
    P.alu,
    { wear: u },
  ),
    p.add(
      He(
        [
          [o.flange + 0.004, ne - 0.004],
          [o.flange + 0.004, ne - 0.012],
          [we - 0.002, ne - 0.014],
        ],
        24,
      ).applyMatrix4(s),
      T(new Ae()),
      P.alu,
    ),
    p.add(
      ke(
        d(e.x - ne - 0.03, e.y, e.z),
        d(e.x + ne + 0.03, e.y, e.z),
        0.0085,
        10,
      ),
      null,
      P.steel,
    ));
  for (const J of [-1, 1]) {
    const $ = new h0(0.014, 0.014, 0.012, 6);
    ($.rotateZ(Math.PI / 2),
      p.add($, Z(e.x + J * (ne + 0.026), e.y, e.z), P.steel));
  }
  const _e = te - 0.015,
    We = [],
    ze = [];
  for (const J of [1, -1])
    for (let $ = 0; $ < 18; $++) {
      const ve = ($ * 20 + (J > 0 ? 0 : 10)) * P0,
        Pe = $ % 2 ? 1 : -1,
        Ie = ve + Pe * 60 * P0,
        Se = J * (J > 0 ? ne - 0.008 : ne - 0.01),
        je = J * 0.005,
        Ye = d(
          e.x + Se,
          e.y + Math.sin(ve) * o.flange,
          e.z + Math.cos(ve) * o.flange,
        ),
        Xe = d(e.x + je, e.y + Math.sin(Ie) * _e, e.z + Math.cos(Ie) * _e);
      We.push(ke(Ye, Xe, 0.0019, 5, !1));
      const nt = Xe.clone().sub(Ye).normalize();
      ze.push(
        ke(
          Xe.clone().addScaledVector(nt, -0.012),
          Xe.clone().addScaledVector(nt, 0.006),
          0.0033,
          5,
          !1,
        ),
      );
    }
  if (
    (p.add(D0(We), null, P.steel, { wear: (J, $, ve) => [0, 0.6, 0.15, 0] }),
    p.add(D0(ze), null, P.chrome, { wear: (J, $, ve) => [0, 0.5, 0.2, 0] }),
    o.sprocket)
  ) {
    const ve = new N0();
    for (let Se = 0; Se <= 132; Se++) {
      const je = Se / 132,
        Ye = je * Math.PI * 2,
        Xe = (je * 44) % 1,
        nt =
          Xe < 0.3
            ? 0.112 + 0.006 * Math.sin((Xe / 0.3) * Math.PI)
            : 0.112 -
              0.004 +
              0.004 * Math.cos(((Xe - 0.3) / 0.7) * Math.PI * 2),
        rt = Math.cos(Ye) * nt,
        ae = Math.sin(Ye) * nt;
      Se ? ve.lineTo(rt, ae) : ve.moveTo(rt, ae);
    }
    for (let Se = 0; Se < 5; Se++) {
      const je = new V0(),
        Ye = (Se / 5) * Math.PI * 2;
      (je.absarc(
        Math.cos(Ye) * 0.072,
        Math.sin(Ye) * 0.072,
        0.017,
        0,
        Math.PI * 2,
        !0,
      ),
        ve.holes.push(je));
    }
    const Pe = new V0();
    (Pe.absarc(0, 0, 0.04, 0, Math.PI * 2, !0), ve.holes.push(Pe));
    const Ie = t0(ve, 0.005, 8e-4, 6, 1);
    p.add(Ie, Z(e.x + 0.058, e.y, e.z, 0, Math.PI / 2, 0), P.chain, {
      wear: (Se, je, Ye) => [0, 0.55, 0.4, 0],
    });
  }
}
function Oo(p) {
  const e = (o) => zt(o, z0);
  for (const o of [-1, 1]) {
    const r = o * 0.088,
      s = (T) => e(T).add(d(r, 0, 0));
    (p.steer.add(ke(s(0.66), s(1.205), 0.0175, 18, !1), null, P.chrome, {
      wear: (T, k, S) => [0, 0.45, S[2] * 0.4, 0.15],
    }),
      p.steer.add(
        He(
          [
            [0, 0.012],
            [0.012, 0.012],
            [0.016, 0.006],
            [0.016, -0.004],
            [0.0175, -0.006],
            [0, -0.006],
          ],
          6,
        ),
        e0(s(1.2), s(1.24)),
        P.chrome,
      ),
      p.slider.add(
        ke(s(E0 - 0.035), s(0.69), [0.0245, 0.0225], 18, !0),
        null,
        P.case,
        { wear: (T, k, S) => [0, 0, Math.min(1, S[2] * 1.3 + 0.2), 0.3] },
      ),
      p.slider.add(ke(s(0.685), s(0.705), 0.0215, 16, !0), null, P.rubber),
      p.slider.add(
        he(0.05, 0.04, 0.06, 0.008),
        new Ae().compose(
          s(E0),
          new Ue().setFromAxisAngle(d(1, 0, 0), -Rt),
          d(1, 1, 1),
        ),
        P.case,
      ));
  }
  for (const [o, r] of [
    [0.985, 0.032],
    [1.17, 0.026],
  ]) {
    const s = new N0(),
      T = 0.03;
    (s.absarc(-0.088, 0, T, Math.PI / 2, Math.PI * 1.5, !1),
      s.absarc(0.088, 0, T, -Math.PI / 2, Math.PI / 2, !1));
    const k = t0(s, r, 0.004, 8, 1);
    k.rotateX(Math.PI / 2);
    const S = new Ae().compose(
      zt(o, z0 * 0.5),
      new Ue().setFromAxisAngle(d(1, 0, 0), -Rt),
      d(1, 1, 1),
    );
    p.steer.add(k, S, o > 1 ? P.alu : P.black);
  }
  p.steer.add(
    He(
      [
        [0, 0.012],
        [0.018, 0.012],
        [0.02, 0],
        [0, 0],
      ],
      6,
    ),
    new Ae().compose(
      zt(1.185),
      new Ue().setFromAxisAngle(d(1, 0, 0), -Rt),
      d(1, 1, 1),
    ),
    P.chrome,
  );
  {
    const o = Nt(
        [
          d(0, 0.835, 0.33),
          d(0, 0.862, 0.45),
          d(0, 0.874, 0.6),
          d(0, 0.862, 0.76),
          d(0, 0.826, 0.9),
          d(0, 0.77, 1),
        ],
        18,
      ),
      r = o.map((s, T) => {
        const k = T / (o.length - 1),
          S =
            0.062 * (1 - 0.22 * Fe(0.7, 1, k)) * (0.86 + 0.14 * Fe(0, 0.15, k)),
          u = 0.05 * (1 - 0.3 * Fe(0.75, 1, k)),
          x = [];
        for (let b = 0; b <= 10; b++) {
          const g = b / 10,
            n = Math.PI * (1 - g);
          x.push(
            d(Math.cos(n) * S, s.y - (1 - Math.sin(n)) * u * 0.9 - 0.004, s.z),
          );
        }
        for (let b = 10; b >= 0; b--) {
          const g = b / 10,
            n = Math.PI * (1 - g);
          x.push(
            d(
              Math.cos(n) * (S - 0.003),
              s.y - (1 - Math.sin(n)) * u * 0.9 - 0.008,
              s.z,
            ),
          );
        }
        return x;
      });
    (p.steer.add(
      Xt(r.reverse(), { flipW: !1, cap0: !0, cap1: !0 }),
      null,
      P.plastic,
      {
        wear: (s, T, k) => [k[0], 0, Math.min(1, k[2] + 0.35 * o0(-T.y)), 0.9],
      },
    ),
      p.steer.add(
        he(0.1, 0.02, 0.07, 0.006),
        new Ae().compose(
          zt(0.95, z0 * 0.6),
          new Ue().setFromAxisAngle(d(1, 0, 0), -Rt),
          d(1, 1, 1),
        ),
        P.black,
      ));
  }
}
function No(p) {
  const e = (r) => [
      d(0, 1.072, 0.298),
      d(r * 0.09, 1.076, 0.298),
      d(r * 0.17, 1.096, 0.276),
      d(r * 0.24, 1.122, 0.226),
      d(r * 0.31, 1.131, 0.196),
      d(r * 0.435, 1.134, 0.18),
    ],
    o = [...e(-1).reverse(), ...e(1).slice(1)];
  (p.steer.add(
    ge(ut(o, 0.05, 5), 0.0112, 12, { cap0: !0, cap1: !0 }),
    null,
    P.chrome,
    { wear: (r, s, T) => [0, 0.5, 0.05, 0.3] },
  ),
    p.steer.add(
      ge([d(-0.17, 1.125, 0.268), d(0.17, 1.125, 0.268)], 0.008, 10, {
        cap0: !0,
        cap1: !0,
      }),
      null,
      P.chrome,
      { wear: (r, s, T) => [0, 0.5, 0, 0.3] },
    ),
    p.steer.add(he(0.075, 0.03, 0.036, 0.006), Z(0, 1.074, 0.298), P.alu));
  for (const r of [-1, 1])
    p.steer.add(
      ke(d(r * 0.03, 1.03, 0.284), d(r * 0.03, 1.064, 0.296), 0.011, 10),
      null,
      P.alu,
    );
  (p.steer.add(he(0.04, 0.028, 0.03, 0.004), Z(-0.15, 1.125, 0.268), P.alu),
    p.steer.add(he(0.04, 0.028, 0.03, 0.004), Z(0.15, 1.125, 0.268), P.alu));
  for (const r of [-1, 1]) {
    const s = d(r * 0.31, 1.131, 0.196),
      T = d(r * 0.43, 1.134, 0.18),
      k = [];
    for (let b = 0; b <= 18; b++) k.push(s.clone().lerp(T, b / 18));
    (p.steer.add(
      ge(
        k,
        (b, g) => 0.0158 + (g % 2 ? 0.0012 : 0) + 0.0015 * Fe(0.85, 1, b),
        12,
        { cap1: !0 },
      ),
      null,
      P.rubber,
      { wear: (b, g, n) => [0, 0, 0.15, 0.2] },
    ),
      p.steer.add(
        ke(
          s.clone().addScaledVector(T.clone().sub(s).normalize(), -0.004),
          s.clone().addScaledVector(T.clone().sub(s).normalize(), 0.006),
          0.021,
          16,
        ),
        null,
        P.rubber,
      ));
    const S = d(r * 0.29, 1.131, 0.2);
    p.steer.add(he(0.026, 0.034, 0.034, 0.006), Z(S.x, S.y, S.z), P.alu);
    const u = [
      d(r * 0.292, 1.138, 0.225),
      d(r * 0.31, 1.142, 0.262),
      d(r * 0.38, 1.14, 0.258),
      d(r * 0.455, 1.135, 0.236),
    ];
    (p.steer.add(
      ge(ut(u, 0.02, 4), (b) => 0.0055 - 0.0012 * b, 8, { cap1: !0 }),
      null,
      P.alu,
    ),
      p.steer.add(new oo(0.0072, 10, 8), Z(u[3].x, u[3].y, u[3].z), P.alu),
      p.steer.add(
        he(0.032, 0.04, 0.036, 0.008),
        Z(r * 0.322, 1.13, 0.194),
        P.black,
      ),
      r > 0 &&
        p.steer.add(
          ke(d(0.322, 1.142, 0.212), d(0.322, 1.152, 0.214), 0.004, 8),
          null,
          P.tail,
        ));
    const x = Nt(
      [
        d(r * 0.29, 1.14, 0.215),
        d(r * 0.25, 1.2, 0.3),
        d(r * 0.12, 1.12, 0.42),
        d(r * 0.05, 0.98, 0.43),
        d(r * 0.035, 0.9, 0.38),
      ],
      24,
    );
    p.steer.add(ge(x, 0.0035, 6), null, P.black, {
      wear: (b, g, n) => [0, 0, n[2] * 0.4, 0.4],
    });
  }
  {
    const r = d(0, 1.105, 0.375),
      s = new Ue().setFromAxisAngle(d(1, 0, 0), -0.8),
      T = new Ae().compose(r, s, d(1, 1, 1));
    (p.steer.add(
      He(
        [
          [0, -0.05],
          [0.04, -0.05],
          [0.047, -0.03],
          [0.047, 0],
          [0, 0],
        ],
        24,
      ),
      T,
      P.black,
    ),
      p.steer.add(
        new ao(0.046, 0.0045, 8, 32).rotateX(Math.PI / 2),
        T.clone().multiply(Z(0, 0, 0)),
        P.chrome,
      ));
    const k = new x0(0.042, 32).rotateX(-Math.PI / 2),
      [S, u, x, b] = T0.dial;
    (p.steer.add(k, T.clone().multiply(Z(0, -0.004, 0)), P.decal, {
      uv: (g, n, B, O) => [Je(S, x, B), Je(u, b, O)],
    }),
      p.steer.add(
        new x0(0.043, 32).rotateX(-Math.PI / 2),
        T.clone().multiply(Z(0, 0.0015, 0)),
        P.glass,
        { wear: (g, n, B) => [0, 0, 0.1, 0.8] },
      ),
      p.steer.add(
        he(0.032, 0.0015, 0.003, 6e-4),
        T.clone().multiply(Z(-0.012, -0.002, 0.012, 0, -0.75, 0)),
        P.tail,
      ),
      p.steer.add(
        ke(d(0, 1.05, 0.33), d(0, 1.09, 0.36), 0.008, 8),
        null,
        P.black,
      ));
  }
  {
    const r = Nt(
      [
        d(-0.295, 1.148, 0.205),
        d(-0.31, 1.22, 0.205),
        d(-0.33, 1.3, 0.2),
        d(-0.345, 1.35, 0.195),
      ],
      12,
    );
    p.steer.add(ge(r, 0.0045, 8, { cap1: !0 }), null, P.chrome);
    const s = d(-0.355, 1.395, 0.19),
      T = new Ue().setFromEuler(new _0(0.14, 0.5, 0, "YXZ")),
      k = new Ae().compose(s, T, d(1, 1, 1));
    (p.steer.add(
      He(
        [
          [0, -0.006],
          [0.039, -0.006],
          [0.043, -0.002],
          [0.042, 0.006],
          [0.03, 0.012],
          [0, 0.014],
        ],
        24,
      ).rotateX(Math.PI / 2),
      k,
      P.chrome,
    ),
      p.steer.add(
        new x0(0.038, 24).rotateY(Math.PI),
        k.clone().multiply(Z(0, 0, -0.0068)),
        P.mirror,
      ),
      p.steer.add(
        ge([d(0.295, 1.148, 0.205), d(0.298, 1.18, 0.205)], 0.0045, 8, {
          cap1: !0,
        }),
        null,
        P.chrome,
      ));
  }
}
function Ho(p) {
  const e = E.lens,
    o = E.lensR,
    r = new Ue().setFromAxisAngle(d(1, 0, 0), -0.06),
    s = new Ae().compose(e, r, d(1, 1, 1));
  (p.steer.add(
    He(
      [
        [0, -0.11],
        [0.045, -0.11],
        [0.068, -0.085],
        [0.08, -0.05],
        [0.082, -0.012],
        [0, -0.012],
      ],
      20,
    ).rotateX(Math.PI / 2),
    s,
    P.black,
  ),
    p.steer.add(
      He(
        [
          [o - 0.002, 0.004],
          [o + 0.004, 0.006],
          [o + 0.01, 0],
          [o + 0.011, -0.012],
          [o + 0.004, -0.012],
        ],
        40,
      ).rotateX(Math.PI / 2),
      s,
      P.chrome,
      { wear: (T, k, S) => [0, 0.45, 0.25, 0.3] },
    ));
  {
    const T = new x0(o, 40),
      k = T.attributes.position,
      S = T.attributes.uv;
    for (let u = 0; u < k.count; u++) {
      const x = Math.hypot(k.getX(u), k.getY(u)) / o;
      (k.setZ(u, 0.008 * (1 - x * x)),
        S.setXY(u, 0.5 + k.getX(u) / (2 * o), 0.5 + k.getY(u) / (2 * o)));
    }
    (T.computeVertexNormals(),
      p.steer.add(T, s, P.lens, { wear: (u, x, b) => [0, 0, 0.18, 0] }));
  }
  {
    const u = (n, B, O = 0) => {
        const ee = [],
          le = (de, fe, q) => {
            for (let te = 0; te <= 4; te++) {
              const ne = q + ((te / 4) * Math.PI) / 2;
              ee.push([de + Math.cos(ne) * 0.04, fe + Math.sin(ne) * 0.04]);
            }
          };
        return (
          le(0.064, 0.07799999999999999, 0),
          le(-0.064, 0.07799999999999999, Math.PI / 2),
          le(-0.064, -0.054, Math.PI),
          le(0.064, -0.054, Math.PI * 1.5),
          ee.map(([de, fe]) =>
            d(
              de * n,
              fe * n,
              B + (fe > 0.0649 ? O * Fe(0.0649, 0.118, fe) : 0),
            ),
          )
        );
      },
      x = [
        u(1, 0.004, 0.026),
        u(1, -0.004, 0.012),
        u(0.97, -0.03),
        u(0.9, -0.07),
        u(0.78, -0.1),
      ];
    p.steer.add(Xt(x, {}), s, P.plastic, {
      both: !0,
      wear: (n, B, O) => [O[0] * 0.8, 0, O[2] * 0.5, 0.9],
    });
    const b = new N0(u(1, 0).map((n) => new mo(n.x, n.y))),
      g = new V0();
    (g.absarc(0, 0, o + 0.006, 0, Math.PI * 2, !0),
      b.holes.push(g),
      p.steer.add(
        t0(b, 0.005, 0.0015, 6, 1),
        s.clone().multiply(Z(0, 0, 0)),
        P.plastic,
        { wear: (n, B, O) => [O[0] * 0.9, 0, O[2] * 0.5, 0.9] },
      ));
    for (const n of [-1, 1])
      p.steer.add(
        he(0.012, 0.05, 0.07, 0.004),
        s.clone().multiply(Z(n * 0.098, -0.01, -0.1)),
        P.black,
      );
  }
  for (const T of [-1, 1]) {
    const k = d(T * 0.1, 0.94, 0.47),
      S = d(T * 0.17, 0.95, 0.5);
    (p.steer.add(ke(k, S, 0.006, 8), null, P.black),
      p.steer.add(
        He(
          [
            [0, 0],
            [0.02, 0],
            [0.024, -0.02],
            [0.016, -0.04],
            [0, -0.045],
          ],
          14,
        ).rotateX(-Math.PI / 2),
        Z(S.x, S.y, S.z + 0.005),
        P.black,
      ),
      p.steer.add(
        new oo(0.02, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(
          Math.PI / 2,
        ),
        Z(S.x, S.y, S.z + 0.02, 0, 0, 0, 1, 1, 0.8),
        P.amber,
      ));
  }
}
function Go(p) {
  const e = P.frame,
    o = (S, u, x) => [x[0], x[1] * (0.6 + 0.6 * o0(1 - S.y)), x[2], x[3] * 0.7],
    r = zt(1),
    s = zt(1.16);
  p.body.add(ke(zt(0.99), zt(1.16), 0.026, 18), null, e, { wear: o });
  for (const S of [0.99, 1.16])
    p.body.add(
      He(
        [
          [0.024, -0.006],
          [0.031, -0.006],
          [0.031, 0.006],
          [0.024, 0.006],
        ],
        18,
      ),
      e0(zt(S - 0.006), zt(S + 0.006)),
      P.black,
    );
  const T = ut(
    [
      s.clone().add(d(0, -0.012, -0.01)),
      d(0, 0.955, 0.16),
      d(0, 0.86, -0.1),
      d(0, 0.815, -0.16),
    ],
    [0.12, 0.1],
    8,
  );
  (p.body.add(ge(T, 0.022, 12), null, e, { wear: o }),
    p.body.add(
      ge(
        ut(
          [r.clone().add(d(0, 0.01, -0.02)), d(0, 0.9, 0.22), d(0, 0.93, 0.18)],
          0.04,
          4,
        ),
        0.012,
        8,
      ),
      null,
      e,
    ));
  const k = ut(
    [r.clone().add(d(0, -0.005, 0.012)), d(0, 0.5, 0.293), d(0, 0.27, 0.25)],
    0.1,
    8,
  );
  p.body.add(ge(k, 0.021, 12, { cap1: !0 }), null, e, { wear: o });
  for (const S of [-1, 1]) {
    const u = ut(
      [
        d(0, 0.3, 0.255),
        d(S * 0.06, 0.215, 0.205),
        d(S * 0.068, 0.19, 0.05),
        d(S * 0.072, 0.21, -0.07),
        d(S * 0.078, 0.36, -0.15),
        d(S * 0.075, 0.6, -0.17),
        d(S * 0.07, 0.808, -0.16),
      ],
      [0.05, 0.08, 0.06, 0.08, 0.06],
      6,
    );
    (p.body.add(ge(u, 0.0165, 9), null, e, { wear: o }),
      p.body.add(
        ge(
          ut(
            [
              d(S * 0.07, 0.812, -0.15),
              d(S * 0.078, 0.805, -0.45),
              d(S * 0.08, 0.81, -0.72),
              d(S * 0.07, 0.835, -0.86),
            ],
            0.06,
            4,
          ),
          0.0125,
          8,
        ),
        null,
        e,
        { wear: o },
      ),
      p.body.add(
        ge([d(S * 0.082, 0.47, -0.19), d(S * 0.098, 0.8, -0.462)], 0.0135, 8),
        null,
        e,
        { wear: o },
      ));
    const x = no(
        [
          [0.08, 0.36],
          [-0.03, 0.4],
          [-0.07, 0.6],
          [-0.05, 0.66],
          [0.03, 0.56],
          [0.1, 0.5],
          [0.13, 0.42],
        ],
        0.015,
      ),
      b = t0(x, 0.006, 0.0015, 6);
    (b.rotateY(Math.PI / 2),
      p.body.add(b, Z(S * 0.088, 0, -0.15), e, { wear: o }));
    const g = d(S * E.peg.x, E.peg.y, E.peg.z);
    (p.body.add(
      he(0.06, 0.03, 0.04, 0.005),
      Z(S * 0.115, 0.335, E.peg.z + 0.002),
      P.black,
    ),
      p.body.add(
        ge([d(S * 0.08, 0.36, -0.15), d(S * 0.1, 0.34, E.peg.z)], 0.01, 8),
        null,
        e,
      ));
    const n = he(0.085, 0.022, 0.034, 0.004);
    p.body.add(n, Z(g.x, g.y, g.z), P.steel, {
      wear: (B, O, ee) => [0, 0.6, 0.6, 0.2],
    });
    for (let B = 0; B < 6; B++) {
      const O = new so(0.004, 0.006, 0.034);
      p.body.add(
        O,
        Z(g.x - S * 0.035 + S * B * 0.014, g.y + 0.013, g.z),
        P.steel,
        { wear: (ee, le, de) => [0, 0.7, 0.7, 0] },
      );
    }
    p.body.add(
      he(0.012, 0.045, 0.04, 0.004),
      Z(S * (E.shockTop.x + 0), E.shockTop.y, E.shockTop.z),
      e,
    );
  }
  (p.body.add(
    ke(d(-0.078, 0.806, -0.44), d(0.078, 0.806, -0.44), 0.011, 8),
    null,
    e,
  ),
    p.body.add(
      ke(d(-0.082, 0.81, -0.7), d(0.082, 0.81, -0.7), 0.011, 8),
      null,
      e,
    ));
  {
    const S = [];
    for (let u = 0; u <= 10; u++) {
      const x = u / 10,
        b = Je(0.29, -0.06, x),
        g = Je(0.24, 0.165, Fe(0, 0.3, x)) + 0.004 * Math.sin(x * 19);
      S.push([
        d(-0.085, g + 0.03, b),
        d(-0.075, g, b),
        d(0.075, g, b),
        d(0.085, g + 0.03, b),
        d(0.083, g + 0.034, b),
        d(0.072, g + 0.004, b),
        d(-0.072, g + 0.004, b),
        d(-0.083, g + 0.034, b),
      ]);
    }
    p.body.add(Xt(S), null, P.alu, {
      both: !0,
      wear: (u, x, b) => [0, 0, Math.min(1, b[2] + 0.4), 0.3],
    });
  }
}
function qo(p) {
  p.body.add(
    he(0.19, 0.22, 0.34, 0.06, 3),
    Z(0, 0.38, 0.06, 0.08, 0, 0),
    P.case,
    { wear: (x, b, g) => [0, 0, Math.min(1, g[2] + 0.25), 0.5] },
  );
  const e = (x, b, g, n) => {
    const B = He(
      [
        [0, n],
        [g * 0.55, n],
        [g * 0.85, n * 0.75],
        [g, n * 0.35],
        [g * 1.02, 0],
        [0, 0],
      ],
      22,
    ).rotateZ(x > 0 ? -Math.PI / 2 : Math.PI / 2);
    p.body.add(B, Z(b.x, b.y, b.z), P.case, {
      wear: (O, ee, le) => [0, 0, Math.min(1, le[2] + 0.2), 0.4],
    });
    for (let O = 0; O < 7; O++) {
      const ee = (O / 7) * Math.PI * 2,
        le = new h0(0.0055, 0.0055, 0.006, 6);
      (le.rotateZ(Math.PI / 2),
        p.body.add(
          le,
          Z(
            b.x + x * n * 0.6,
            b.y + Math.sin(ee) * g * 0.82,
            b.z + Math.cos(ee) * g * 0.82,
          ),
          P.steel,
          { wear: (de, fe, q) => [0, 0.7, q[2], 0] },
        ));
    }
  };
  (e(1, d(0.092, 0.37, -0), 0.085, 0.045),
    e(-1, d(-0.092, 0.4, 0.07), 0.1, 0.05));
  const o = 15 * P0,
    r = d(0, 0.48, 0.11),
    s = d(0, Math.cos(o), Math.sin(o)),
    T = (x) => r.clone().addScaledVector(s, x),
    k = new Ue().setFromAxisAngle(d(1, 0, 0), o);
  p.body.add(ke(T(-0.02), T(0.27), 0.043, 14), null, P.fins);
  const S = d(0, Math.cos(o), Math.sin(o)),
    u = (x, b) => (Math.abs(b.dot(S)) > 0.7 ? P.fins : P.finEdge);
  for (let x = 0; x < 14; x++) {
    const b = 0.01 + x * 0.0172,
      g = x >= 8,
      O = t0(
        To(g ? 0.178 : 0.16, g ? 0.158 : 0.14, 0.028),
        0.004,
        0.0012,
        3,
        1,
      );
    (O.rotateX(Math.PI / 2),
      p.body.add(O, new Ae().compose(T(b), k, d(1, 1, 1)), P.fins, {
        pick: u,
        wear: (ee, le, de) => [0.7, 0.25, de[2], 0.6],
      }));
  }
  p.body.add(
    he(0.12, 0.05, 0.1, 0.02),
    new Ae().compose(T(0.285), k, d(1, 1, 1)),
    P.case,
  );
  for (const x of [-1, 1])
    p.body.add(
      He(
        [
          [0, 0.018],
          [0.025, 0.018],
          [0.028, 0],
          [0, 0],
        ],
        16,
      ).rotateZ((x * Math.PI) / 2),
      new Ae().compose(T(0.27).add(d(x * 0.055, 0, 0)), k, d(1, 1, 1)),
      P.case,
    );
  (p.body.add(
    ge(
      Nt(
        [
          T(0.2).add(d(0.075, 0, 0.02)),
          d(0.11, 0.73, 0.1),
          d(0.06, 0.8, 0),
          d(0.03, 0.82, -0.08),
        ],
        12,
      ),
      0.0045,
      6,
    ),
    null,
    P.black,
  ),
    p.body.add(
      ke(
        T(0.2).add(d(0.06, 0, 0.02)),
        T(0.2).add(d(0.085, 0, 0.02)),
        0.009,
        10,
      ),
      null,
      P.tail,
    ),
    p.body.add(ke(d(0, 0.6, 0.03), d(0, 0.62, -0.1), 0.026, 14), null, P.alu),
    p.body.add(
      ke(d(0, 0.55, -0.04), d(0, 0.595, -0.04), 0.022, 12),
      null,
      P.case,
    ),
    p.body.add(
      ke(d(0, 0.625, -0.1), d(0, 0.64, -0.17), [0.03, 0.034], 14),
      null,
      P.rubber,
    ),
    p.body.add(
      ge(
        ut(
          [d(-0.145, 0.36, 0), d(-0.15, 0.4, -0.12), d(-0.16, 0.47, -0.2)],
          0.03,
          4,
        ),
        0.009,
        8,
        { cap1: !0 },
      ),
      null,
      P.chrome,
    ),
    p.body.add(he(0.04, 0.02, 0.03, 0.004), Z(-0.165, 0.47, -0.205), P.rubber),
    p.body.add(
      ge(
        ut(
          [d(0.13, 0.33, 0.06), d(0.155, 0.35, 0.02), d(0.17, 0.37, -0.03)],
          0.02,
          4,
        ),
        0.0075,
        8,
        { cap1: !0 },
      ),
      null,
      P.chrome,
    ),
    p.body.add(
      ke(d(0.16, 0.37, -0.035), d(0.205, 0.37, -0.035), 0.009, 10),
      null,
      P.rubber,
    ),
    p.body.add(
      ge(
        ut(
          [
            d(-0.135, 0.31, -0.13),
            d(-0.16, 0.32, -0.07),
            d(-0.18, 0.345, -0.03),
          ],
          0.02,
          4,
        ),
        0.008,
        8,
      ),
      null,
      P.black,
    ),
    p.body.add(he(0.05, 0.012, 0.03, 0.004), Z(-0.19, 0.35, -0.025), P.steel),
    p.body.add(
      ge(
        Nt(
          [
            d(0.05, 0.3, 0.2),
            d(0.03, 0.5, 0.29),
            d(0.02, 0.75, 0.33),
            d(0.025, 0.86, 0.3),
          ],
          16,
        ),
        0.005,
        6,
      ),
      null,
      P.black,
    ),
    p.body.add(he(0.02, 0.09, 0.1, 0.012), Z(0.095, 0.37, -0.06), P.case));
}
function Uo(p) {
  const e = [
      d(-0.01, 0.66, 0.265),
      d(-0.035, 0.62, 0.325),
      d(-0.095, 0.535, 0.315),
      d(-0.128, 0.5, 0.22),
      d(-0.134, 0.53, 0),
      d(-0.136, 0.6, -0.2),
      d(-0.14, 0.66, -0.36),
      d(-0.14, 0.7, -0.44),
    ],
    o = Nt(e, 48);
  let r = 0;
  const s = [0];
  for (let x = 1; x < o.length; x++)
    ((r += o[x].distanceTo(o[x - 1])), s.push(r));
  const T = (x) => {
    let b = 0,
      g = 1e9;
    for (let n = 0; n < o.length; n++) {
      const B = o[n].distanceToSquared(x);
      B < g && ((g = B), (b = n));
    }
    return s[b] / r;
  };
  p.body.add(ge(o, 0.0185, 10), null, P.pipe, {
    wear: (x, b, g) => [T(x) * 0.85, g[1], g[2], 0.2],
  });
  {
    const g = [];
    for (let n = 22; n <= 41; n++) {
      const B = o[n],
        O = o[Math.min(o.length - 1, n + 1)]
          .clone()
          .sub(o[Math.max(0, n - 1)])
          .normalize(),
        ee = d(-1, 0.25, 0).normalize(),
        le = d().crossVectors(O, ee).normalize(),
        de = d().crossVectors(le, O).normalize(),
        fe = [];
      for (let q = 0; q <= 9; q++) {
        const te = ((-0.95 + 1.9 * (q / 9)) * Math.PI) / 2;
        fe.push(
          B.clone()
            .addScaledVector(de, Math.cos(te) * 0.029)
            .addScaledVector(le, Math.sin(te) * 0.029),
        );
      }
      for (let q = 9; q >= 0; q--) {
        const te = ((-0.95 + 1.9 * (q / 9)) * Math.PI) / 2;
        fe.push(
          B.clone()
            .addScaledVector(de, Math.cos(te) * 0.026)
            .addScaledVector(le, Math.sin(te) * 0.026),
        );
      }
      g.push(fe);
    }
    p.body.add(Xt(g, { cap0: !0, cap1: !0 }), null, P.shield, {
      both: !0,
      wear: (n, B, O) => [0.65, 0.7, O[2], 0.4],
    });
    for (const n of [24, 31, 39])
      p.body.add(
        new ao(0.03, 0.003, 6, 20),
        e0(o[n - 1], o[n + 1]).multiply(new Ae().makeRotationX(Math.PI / 2)),
        P.steel,
      );
  }
  const k = d(-0.14, 0.695, -0.43),
    u = d(-0.14, 0.775, -0.86).clone().sub(k).normalize();
  (p.body.add(
    He(
      [
        [0.02, 0],
        [0.05, 0.04],
        [0.054, 0.08],
        [0.054, 0.36],
        [0.05, 0.4],
        [0.046, 0.43],
        [0, 0.43],
      ],
      24,
    ),
    e0(k, k.clone().addScaledVector(u, 0.43)).multiply(Z(0, -0.215, 0)),
    P.pipe,
    {
      wear: (x, b, g) => [0.75 + 0.25 * Fe(-0.5, -0.86, x.z), g[1], g[2], 0.3],
    },
  ),
    p.body.add(
      ke(
        k.clone().addScaledVector(u, 0.41),
        k.clone().addScaledVector(u, 0.47),
        0.016,
        12,
      ),
      null,
      P.pipe,
      { wear: (x, b, g) => [1, 0.9, g[2], 0] },
    ),
    p.body.add(
      ge(
        [d(-0.14, 0.76, -0.66), d(-0.1, 0.795, -0.66), d(-0.082, 0.806, -0.66)],
        0.006,
        6,
      ),
      null,
      P.steel,
    ));
}
function jo(p) {
  const o = [],
    T = (B) => ({
      top: Je(0.985, 1.005, Fe(0, 0.35, B)) - 0.075 * Fe(0.45, 1, B),
      bot: Je(0.83, 0.79, Fe(0, 0.4, B)) + 0.04 * Fe(0.75, 1, B),
      w: (0.145 - 0.052 * Fe(0.45, 1, B)) * (0.9 + 0.1 * Fe(0, 0.18, B)),
    }),
    k = (B) => {
      const O = Je(0.325, -0.075, B),
        ee = T(B),
        le = [],
        de = (ee.top + ee.bot) / 2,
        fe = (ee.top - ee.bot) / 2;
      for (let q = 0; q < 30; q++) {
        const te = (q / 30) * Math.PI * 2,
          ne = Math.cos(te),
          we = Math.sin(te),
          _e = 2.6,
          We = Math.sign(ne) * Math.pow(Math.abs(ne), 2 / _e),
          ze = Math.sign(we) * Math.pow(Math.abs(we), 2 / _e);
        let J = We * ee.w * (we < 0 ? 0.86 + 0.14 * (1 + we) : 1),
          $ = de + ze * fe;
        (we < -0.6 &&
          ($ +=
            (0.6 + we) * -0 + 0.045 * Fe(0.75, 1, -we) * (1 - Math.abs(We))),
          le.push(d(J, $, O)));
      }
      return le;
    };
  for (let B = 0; B <= 24; B++) o.push(k(B / 24));
  for (const B of o)
    for (const O of B) {
      const ee = Math.hypot(O.z - 0.12, O.y - 0.9);
      O.x > 0.05 && (O.x -= 0.006 * Math.exp(-((ee / 0.04) ** 2)));
    }
  const S = Xt(o, { cap0: !0, cap1: !0 }),
    u = (B) => {
      const O = o0((0.325 - B.z) / 0.4),
        ee = T(O),
        le = (B.y - ee.bot) / (ee.top - ee.bot),
        de = 0.52 + 0.1 * (O - 0.5),
        fe = le - de;
      return (
        Math.abs(B.x) > 0.06 &&
        (Math.abs(fe) < 0.075 || Math.abs(fe + 0.13) < 0.014)
      );
    };
  (p.body.add(S, null, P.paint, {
    col: (B) => (u(B) ? P.stripe.col : P.paint.col),
    wear: (B, O, ee) => [
      ee[0] * (0.7 + 0.6 * Fe(0.6, 0.95, Math.abs(O.x))),
      ee[1],
      ee[2] * 0.5,
      ee[3],
    ],
  }),
    p.body.add(
      He(
        [
          [0, 0.014],
          [0.03, 0.014],
          [0.036, 0.006],
          [0.037, 0],
          [0, 0],
        ],
        24,
      ),
      Z(0, 1, 0.2, 0.05, 0, 0),
      P.chrome,
      { wear: (B, O, ee) => [0, 0.5, 0, 0.9] },
    ),
    p.body.add(he(0.012, 0.01, 0.026, 0.003), Z(0, 1.017, 0.19), P.chrome),
    p.body.add(he(0.03, 0.025, 0.02, 0.005), Z(0.06, 0.8, 0), P.alu),
    p.body.add(
      ge(
        Nt([d(0.06, 0.785, 0), d(0.04, 0.72, 0), d(0.01, 0.66, -0.04)], 10),
        0.004,
        6,
      ),
      null,
      P.rubber,
    ));
  const [x, b, g, n] = T0.badge;
  for (const B of [-1, 1]) {
    const O = new f0(0.09, 0.034);
    p.body.add(
      O,
      S0(d(B * 0.1468, 0.93, 0.125), d(0, 0, -B), d(0, 1, 0), d(B, 0, 0)),
      P.decal,
      { uv: (ee, le, de, fe) => [Je(x, g, de), Je(b, n, fe)] },
    );
  }
}
function ro(p) {
  const e = o0((0 - p) / 0.8);
  return (
    0.942 -
    0.077 * Fe(0, 0.27, e) +
    0.016 * Fe(0.45, 0.65, e) -
    0.006 * Fe(0.85, 1, e)
  );
}
function Yo(p) {
  const o = [];
  for (let S = 0; S <= 28; S++) {
    const u = S / 28,
      x = Je(0, -0.8, u),
      b = ro(x),
      g = Je(0.07, 0.122, Fe(0, 0.42, u)) - 0.02 * Fe(0.88, 1, u),
      n = Je(0.84, 0.79, Fe(0, 0.15, u)),
      B = [];
    for (let O = 0; O < 26; O++) {
      const ee = (O / 26) * Math.PI * 2,
        le = Math.cos(ee),
        de = Math.sin(ee),
        fe = 3.2,
        q = Math.sign(le) * Math.pow(Math.abs(le), 2 / fe),
        te = Math.sign(de) * Math.pow(Math.abs(de), 2 / fe),
        ne = (b + n) / 2,
        we = (b - n) / 2;
      let _e = q * g * (te > 0 ? 1 - 0.12 * te * te : 1.02),
        We = ne + te * we;
      B.push(d(_e, We, x));
    }
    if (S === 0 || S === 28)
      for (const O of B) ((O.x *= 0.92), (O.y = Je((b + n) / 2, O.y, 0.9)));
    o.push(B);
  }
  const T = Xt(o, { cap0: !0, cap1: !0 }),
    k = (S) => S.z < -0.08 && S.z > -0.16 && S.y > 0.86;
  (p.body.add(T, null, P.vinyl, {
    col: (S) => (k(S) ? P.tape.col : P.vinyl.col),
  }),
    p.body.add(
      ge(
        ut(
          [
            d(-0.128, 0.84, -0.47),
            d(-0.12, 0.9, -0.47),
            d(0.12, 0.9, -0.47),
            d(0.128, 0.84, -0.47),
          ],
          0.02,
          4,
        ),
        [0.012, 0.0025],
        8,
        { up: d(0, 0, 1) },
      ),
      null,
      P.vinyl,
    ),
    p.body.add(he(0.2, 0.012, 0.66, 0.005), Z(0, 0.795, -0.44), P.black));
}
function Xo(p) {
  const [e, o, r, s] = T0.number;
  {
    const T = no(
        [
          [0.06, -0.045],
          [-0.2, -0.06],
          [-0.27, 0.07],
          [-0.2, 0.125],
          [0.05, 0.12],
          [0.09, 0.04],
        ],
        [0.03, 0.05, 0.04, 0.03, 0.04, 0.03],
      ),
      k = t0(T, 0.008, 0.003, 10),
      S = k.attributes.position;
    for (let x = 0; x < S.count; x++)
      S.setZ(x, S.getZ(x) - 6e-4 * ((S.getX(x) + 0.1) * 30) ** 2);
    (k.computeVertexNormals(),
      k.rotateY(-Math.PI / 2),
      p.body.add(k, Z(-0.117, 0.7, -0.08), P.plastic, {
        wear: (x, b, g) => [g[0], 0, g[2] * 0.7, 0.4],
      }),
      p.body.add(k, Z(0.117, 0.7, -0.08, 0, 0, 0, -1, 1, 1), P.plastic, {
        wear: (x, b, g) => [g[0], 0, g[2] * 0.7, 0.4],
      }));
    const u = new f0(0.11, 0.09);
    p.body.add(
      u,
      S0(d(-0.1225, 0.725, -0.15), d(0, 0, 1), d(0, 1, 0), d(-1, 0, 0)),
      P.decal,
      { uv: (x, b, g, n) => [Je(e, r, g), Je(o, s, n)] },
    );
  }
  (p.body.add(he(0.2, 0.18, 0.3, 0.03), Z(0, 0.68, -0.27), P.black),
    p.body.add(he(0.08, 0.1, 0.12, 0.01), Z(0.05, 0.6, -0.08), P.black));
}
function Zo(p, e) {
  {
    const o = Nt(
        [
          d(0, 0.79, -0.42),
          d(0, 0.79, -0.62),
          d(0, 0.8, -0.85),
          d(0, 0.825, -1.05),
          d(0, 0.86, -1.17),
        ],
        16,
      ),
      r = o.map((s, T) => {
        const k = T / (o.length - 1),
          S = 0.07 - 0.012 * Fe(0.7, 1, k),
          u = 0.028,
          x = [];
        for (let b = 0; b <= 10; b++) {
          const g = Math.PI * (1 - b / 10);
          x.push(d(Math.cos(g) * S, s.y - (1 - Math.sin(g)) * u - 0.004, s.z));
        }
        for (let b = 10; b >= 0; b--) {
          const g = Math.PI * (1 - b / 10);
          x.push(
            d(
              Math.cos(g) * (S - 0.003),
              s.y - (1 - Math.sin(g)) * u - 0.008,
              s.z,
            ),
          );
        }
        return x;
      });
    p.body.add(Xt(r.reverse(), { cap0: !0, cap1: !0 }), null, P.plastic, {
      wear: (s, T, k) => [k[0], 0, Math.min(1, k[2] + 0.4 * o0(-T.y)), 0.8],
    });
  }
  {
    const r = [
      d(-0.095, 0.905, -0.7),
      d(-0.095, 0.905, -1),
      d(-0.06, 0.905, -1.06),
      d(0.06, 0.905, -1.06),
      d(0.095, 0.905, -1),
      d(0.095, 0.905, -0.7),
    ];
    p.body.add(
      ge(ut(r, 0.035, 5), 0.0095, 10, { cap0: !0, cap1: !0 }),
      null,
      P.frame,
      { wear: (s, T, k) => [0.75, 0.75, k[2], 0.8] },
    );
    for (const s of [-0.8, -0.92])
      p.body.add(
        ke(d(-0.095, 0.905, s), d(0.095, 0.905, s), 0.0075, 8),
        null,
        P.frame,
        { wear: (T, k, S) => [0.7, 0.75, S[2], 0.8] },
      );
    for (const s of [-1, 1])
      (p.body.add(
        ge([d(s * 0.095, 0.905, -0.7), d(s * 0.08, 0.815, -0.66)], 0.0085, 8),
        null,
        P.frame,
      ),
        p.body.add(
          ge(
            [d(s * 0.09, 0.905, -0.98), d(s * 0.072, 0.835, -0.86)],
            0.0085,
            8,
          ),
          null,
          P.frame,
        ));
  }
  {
    const o = d(0, 0.9740000000000001, -0.86),
      r = 0.2,
      s = 0.115,
      T = 0.3,
      k = he(r, s, T, 0.014, 3),
      S = k.attributes.position;
    for (let u = 0; u < S.count; u++) {
      const x = S.getX(u),
        b = S.getY(u),
        g = S.getZ(u);
      if (Math.abs(b) > s / 2 - 0.003) {
        const n = x / (r / 2),
          B = g / (T / 2),
          O = Math.min(Math.abs(n - B * (r / T) * (T / r)), Math.abs(n + B));
        Math.abs(n) < 0.8 &&
          Math.abs(B) < 0.82 &&
          S.setY(
            u,
            b + Math.sign(b) * (0.004 * Math.exp(-((O / 0.12) ** 2)) - 0.0015),
          );
      }
    }
    (k.computeVertexNormals(),
      p.body.add(k, Z(o.x, o.y, o.z, 0, 0.04, 0), P.can));
    for (const u of [-0.055, 0, 0.055])
      p.body.add(
        ge(
          ut(
            [
              d(u, o.y + 0.03, o.z + T / 2 - 0.01),
              d(u, o.y + 0.03, o.z + T / 2 + 0.02),
              d(u, o.y - 0.03, o.z + T / 2 + 0.02),
              d(u, o.y - 0.03, o.z + T / 2 - 0.01),
            ],
            0.01,
            3,
          ),
          0.0055,
          6,
        ),
        null,
        P.can,
      );
    (p.body.add(
      ke(
        d(0.06, o.y + 0.03, o.z - T / 2 + 0.01),
        d(0.06, o.y + 0.03, o.z - T / 2 - 0.03),
        0.017,
        14,
      ),
      null,
      P.can,
      { wear: (u, x, b) => [0.8, 0.6, b[2], 0.6] },
    ),
      p.body.add(
        he(0.03, 0.02, 0.012, 0.004),
        Z(0.06, o.y + 0.03, o.z - T / 2 - 0.035),
        P.black,
      ));
    for (const u of [o.z + 0.07, o.z - 0.085]) {
      const x = ut(
        [
          d(-0.1, 0.9, u),
          d(-0.105, o.y + s / 2 + 0.003, u),
          d(0.105, o.y + s / 2 + 0.003, u),
          d(0.1, 0.9, u),
        ],
        0.012,
        3,
      );
      (p.body.add(ge(x, [0.013, 0.0015], 6, { up: d(0, 0, 1) }), null, P.strap),
        p.body.add(
          he(0.024, 0.006, 0.03, 0.002),
          Z(0.045, o.y + s / 2 + 0.006, u),
          P.steel,
        ));
    }
  }
  {
    const o = E.tail;
    p.body.add(he(0.11, 0.06, 0.07, 0.015), Z(o.x, o.y, o.z + 0.015), P.black);
    const r = new f0(0.096, 0.046, 1, 1);
    (p.body.add(r, Z(o.x, o.y, o.z - 0.0215, 0, Math.PI, 0), P.tail, {
      uv: (u, x, b, g) => [b, g],
    }),
      p.body.add(he(0.1, 0.05, 0.012, 0.01), Z(o.x, o.y, o.z - 0.016), P.tail, {
        wear: (u, x, b) => [0, 0, b[2] * 0.8, 0],
      }));
    const [s, T, k, S] = T0.plate;
    (p.body.add(
      he(0.21, 0.11, 0.006, 0.004),
      Z(0, 0.735, -1.025, -0.12, 0, 0),
      P.black,
    ),
      p.body.add(
        new f0(0.2, 0.1),
        Z(0, 0.735, -1.0285, -0.12, Math.PI, 0),
        P.decal,
        { uv: (u, x, b, g) => [Je(s, k, b), Je(T, S, g)] },
      ),
      p.body.add(he(0.03, 0.05, 0.02, 0.004), Z(0, 0.79, -1.02), P.black));
  }
}
function Qo(p) {
  const e = E.SW,
    o = Kt;
  for (const r of [-1, 1]) {
    const s = d(r * 0.09, e.y, e.z),
      T = d(r * 0.086, o.y + 0.005, o.z - 0.015),
      k = s.distanceTo(T),
      S = e0(s, T);
    (p.swing.add(he(0.026, k, 0.042, 0.007), S, P.frame, {
      wear: (x, b, g) => [g[0], g[1], Math.min(1, g[2] + 0.2), g[3]],
    }),
      p.swing.add(
        he(0.03, 0.05, 0.044, 0.004),
        Z(r * 0.088, o.y, o.z + 0.02),
        P.alu,
      ));
    const u = d(r * E.shockBot.x, E.shockBot.y, E.shockBot.z);
    p.swing.add(
      he(0.014, 0.05, 0.045, 0.005),
      Z(r * 0.1, u.y - 0.012, u.z),
      P.frame,
    );
  }
  (p.swing.add(
    ke(d(-0.105, e.y, e.z), d(0.105, e.y, e.z), 0.02, 14),
    null,
    P.frame,
  ),
    p.swing.add(
      ke(d(-0.125, e.y, e.z), d(0.125, e.y, e.z), 0.009, 8),
      null,
      P.steel,
    ),
    p.swing.add(
      ke(d(-0.088, 0.415, -0.3), d(0.088, 0.415, -0.3), 0.014, 10),
      null,
      P.frame,
    ),
    p.swing.add(
      He(
        [
          [0, 0.012],
          [0.07, 0.012],
          [0.082, 0.004],
          [0.084, -0.008],
          [0, -0.008],
        ],
        28,
      ).rotateZ(Math.PI / 2),
      Z(-0.07, o.y, o.z),
      P.case,
    ),
    p.swing.add(
      ge(
        [d(-0.085, o.y + 0.02, o.z + 0.04), d(-0.095, 0.385, -0.42)],
        0.0055,
        6,
      ),
      null,
      P.black,
    ),
    p.swing.add(
      he(0.012, 0.09, 0.02, 0.004),
      Z(-0.085, o.y + 0.06, o.z - 0.01, -0.5, 0, 0),
      P.alu,
    ));
  {
    const r = d(0.072, 0.37, -0.06),
      s = d(0.072, o.y, o.z),
      T = 0.04,
      k = 0.112,
      S = s.clone().sub(r),
      u = S.length();
    S.divideScalar(u);
    const x = Math.asin((k - T) / u),
      b = d(0, S.z, -S.y),
      g = b
        .clone()
        .multiplyScalar(Math.cos(x))
        .addScaledVector(S, -Math.sin(x)),
      n = b
        .clone()
        .multiplyScalar(-Math.cos(x))
        .addScaledVector(S, -Math.sin(x)),
      B = [],
      O = Math.atan2(n.y, n.z);
    let le = Math.atan2(g.y, g.z) - O;
    le < 0 && (le += Math.PI * 2);
    for (let _e = 0; _e <= 12; _e++) {
      const We = O + le * (_e / 12);
      B.push(d(r.x, r.y + Math.sin(We) * T, r.z + Math.cos(We) * T));
    }
    const de = Math.atan2(g.y, g.z);
    let q = Math.atan2(n.y, n.z) - de;
    q > 0 && (q -= Math.PI * 2);
    const te = (_e, We, ze) => {
      for (let J = 1; J < ze; J++) B.push(_e.clone().lerp(We, J / ze));
    };
    te(
      d(r.x, r.y + g.y * T, r.z + g.z * T),
      d(s.x, s.y + g.y * k, s.z + g.z * k),
      16,
    );
    for (let _e = 0; _e <= 24; _e++) {
      const We = de + q * (_e / 24);
      B.push(d(s.x, s.y + Math.sin(We) * k, s.z + Math.cos(We) * k));
    }
    (te(
      d(s.x, s.y + n.y * k, s.z + n.z * k),
      d(r.x, r.y + n.y * T, r.z + n.z * T),
      16,
    ),
      B.push(B[0].clone()),
      p.swing.add(
        ge(B, [0.0045, 0.0075], 6, { up: d(1, 0, 0) }),
        null,
        P.chain,
        { wear: (_e, We, ze) => [0, ze[1], 0.3, 0] },
      ));
    const ne = d(0.085, r.y + g.y * T + 0.03, -0.12),
      we = d(0.085, s.y + g.y * k + 0.035, -0.62);
    p.swing.add(
      he(0.006, ne.distanceTo(we), 0.035, 0.002),
      e0(ne, we),
      P.black,
      { wear: (_e, We, ze) => [0.4, 0.3, ze[2], 0.3] },
    );
  }
}
function $o(p) {
  const e = d(0, E.shockTop.y, E.shockTop.z),
    o = d(0, E.shockBot.y, E.shockBot.z),
    r = e.distanceTo(o),
    s = Math.atan2(-(o.z - e.z), -(o.y - e.y)),
    T = new Ae().compose(
      e,
      new Ue().setFromAxisAngle(d(1, 0, 0), s),
      d(1, 1, 1),
    );
  for (const k of [-1, 1]) {
    const S = k * E.shockTop.x,
      u = (b) => d(S, b, 0),
      x = (b, g, n, B) =>
        p.shock.add(b, T.clone().multiply(g || new Ae()), n, B);
    (x(
      new h0(0.016, 0.016, 0.024, 14).rotateZ(Math.PI / 2),
      Z(S, 0, 0),
      P.black,
    ),
      x(ke(u(-0.01), u(-0.2), 0.022, 16), null, P.chrome, {
        wear: (b, g, n) => [0, 0.5, n[2] * 0.6, 0.2],
      }),
      x(
        He(
          [
            [0.022, 0],
            [0.038, 0],
            [0.038, -0.008],
            [0.022, -0.008],
          ],
          18,
        ),
        Z(S, -0.045, 0),
        P.alu,
      ),
      x(ke(u(-0.19), u(-r + 0.05), 0.0085, 10), null, P.chrome, { anim: 1 }),
      x(
        He(
          [
            [0.012, 0],
            [0.038, 0],
            [0.038, -0.008],
            [0.012, -0.008],
          ],
          18,
        ),
        Z(S, -r + 0.07, 0),
        P.alu,
        { anim: 1 },
      ),
      x(ke(u(-r + 0.07), u(-r + 0.012), 0.014, 12), null, P.black, { anim: 1 }),
      x(
        new h0(0.016, 0.016, 0.024, 14).rotateZ(Math.PI / 2),
        Z(S, -r, 0),
        P.black,
        { anim: 1 },
      ),
      x(
        Ro(0.031, 0.0048, 7.5, -0.049, -r + 0.073, 5, 11).translate(S, 0, 0),
        null,
        P.chrome,
        { anim: 2, wear: (b, g, n) => [0, 0.55, n[2] * 0.5, 0] },
      ));
  }
  return { top: -0.049, bot: -r + 0.073 };
}
const K0 = (() => {
  const p = d(0, E.shockTop.y, E.shockTop.z),
    e = d(0, E.shockBot.y, E.shockBot.z),
    o = p.distanceTo(e);
  return { top: -0.049, bot: -o + 0.073, L: o };
})();
function Jo(p) {
  const e = E.stand,
    o = w0(!0),
    r = e.clone().addScaledVector(o, E.standLen),
    s = d(1, 0, 0).sub(o.clone().multiplyScalar(o.x)).normalize();
  (p.stand.add(
    ge(
      [e.clone(), e.clone().lerp(r, 0.5), r.clone().addScaledVector(o, -0.02)],
      (u) => 0.011 - 0.003 * u,
      10,
      { cap1: !0 },
    ),
    null,
    P.frame,
    { wear: (u, x, b) => [0.7, 0.7, Math.min(1, b[2] + 0.4), 0.3] },
  ),
    p.stand.add(
      new h0(0.016, 0.016, 0.03, 12).rotateZ(Math.PI / 2),
      Z(e.x, e.y, e.z),
      P.frame,
    ));
  const T = he(0.05, 0.008, 0.035, 0.003),
    k = o.clone().negate(),
    S = d().crossVectors(s, k).normalize();
  (p.stand.add(T, S0(r, s, k, S), P.frame, {
    wear: (u, x, b) => [0.8, 0.8, 1, 0],
  }),
    p.stand.add(
      ke(
        e.clone().addScaledVector(o, 0.08),
        e
          .clone()
          .addScaledVector(o, 0.08)
          .add(d(0.012, 0, 0)),
        0.004,
        6,
      ),
      null,
      P.steel,
    ));
}
const qe = O0,
  pt = (p, e = 0, o = 1) => (p < e ? e : p > o ? o : p),
  vt = (p, e, o, r) => p + (e - p) * (1 - Math.exp(-o * r)),
  Yt = (p, e, o) => {
    const r = pt((o - p) / (e - p));
    return r * r * (3 - 2 * r);
  },
  eo = (p) => {
    const e = Math.sin(p * 127.1 + 311.7) * 43758.5453;
    return e - Math.floor(e);
  },
  to = (p) => {
    const e = Math.floor(p),
      o = p - e,
      r = o * o * (3 - 2 * o);
    return eo(e) * (1 - r) + eo(e + 1) * r;
  },
  Ko = `
varying vec3 vLocal; varying vec3 vWorld;
void main() { vLocal = position; vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
  ea = `
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
  float core = pow(1.0 - smoothstep(0.0, 1.0, rad), 1.8);
  float cutK = smoothstep(0.35, -0.1, q.y);                            // (the low beam's cut-off: little goes up)
  float nearF = smoothstep(0.0, 0.06, t);
  float farF = exp(-t * uLen * 0.17);
  float dust = 0.55 + 0.6 * bn(vWorld * 2.2 + vec3(0.0, uTime * 0.08, uTime * 0.05)) * bn(vWorld * 5.0 - vec3(uTime * 0.04));
  float a = core * cutK * nearF * farF * dust * uK;
  gl_FragColor = vec4(uColor * a, a);
}`,
  ta = `
uniform vec3 uPos; uniform float uSize; varying vec2 vUv;
void main() { vUv = uv; vec4 mv = viewMatrix * vec4(uPos, 1.0); mv.xyz += normalize(-mv.xyz) * 0.06; mv.xy += position.xy * uSize; gl_Position = projectionMatrix * mv; }`,
  oa = `
uniform float uK; uniform vec3 uColor; varying vec2 vUv;
void main() {
  vec2 p = vUv * 2.0 - 1.0; float r = length(p);
  float glow = exp(-r * r * 14.0) * 1.4 + exp(-r * 4.0) * 0.22;
  float streak = exp(-abs(p.y) * 55.0) * exp(-abs(p.x) * 2.2) * 0.55;
  float a = (glow + streak) * uK * smoothstep(1.0, 0.7, r);
  gl_FragColor = vec4(uColor * a, a);
}`;
function aa(p, e = {}) {
  const o = p.game || p,
    r = p.scene || o.scene,
    s =
      e.rng ||
      (() => {
        let R = 7;
        return () => ((R = (R * 16807) % 2147483647), R / 2147483647);
      })(),
    T = performance.now(),
    { K: k, rest: S, shockLen: u } = Eo(s),
    x = Vo(Co()),
    b = x.userData.U;
  b.uShock.value.set(0, K0.top, K0.bot, 0);
  const g = new _t();
  g.name = e.name || "motorcycle";
  const n = new _t();
  ((n.name = "moto_lean"), g.add(n));
  const B = new _t();
  ((B.name = "moto_chassis"), n.add(B));
  const O = new _t();
  ((O.name = "moto_steerFrame"),
    B.add(O),
    S.steer.decompose(O.position, O.quaternion, O.scale));
  const ee = new _t();
  ((ee.name = "moto_steer"), O.add(ee));
  const le = new _t();
  ((le.name = "moto_slider"), ee.add(le));
  const de = new _t();
  ((de.name = "moto_fwheel"), le.add(de));
  const fe = E.FA.clone().applyMatrix4(S.steer.clone().invert());
  de.position.copy(fe);
  const q = new _t();
  ((q.name = "moto_swing"), q.position.copy(E.SW), B.add(q));
  const te = new _t();
  ((te.name = "moto_rwheel"), te.position.copy(E.RA).sub(E.SW), q.add(te));
  const ne = new _t();
  ((ne.name = "moto_shocks"),
    B.add(ne),
    S.shock.decompose(ne.position, ne.quaternion, ne.scale));
  const we = new _t();
  ((we.name = "moto_stand"), we.position.copy(E.stand), B.add(we));
  const _e = new Ue().setFromUnitVectors(new qe(0, -1, 0), w0(!0)),
    We = new Ue().setFromUnitVectors(new qe(0, -1, 0), w0(!1));
  we.quaternion.copy(_e);
  const ze = [],
    J = (R, V, j, xe, Be = !0) => {
      const Ve = R.build(j),
        be = new L0(Ve, x);
      return (
        (be.name = xe),
        (be.castShadow = Be),
        (be.receiveShadow = !0),
        (be.onBeforeShadow = () => {}),
        V.add(be),
        ze.push(be),
        be
      );
    },
    $ = (R) => (R ? R.clone().invert() : null);
  (J(k.body, B, null, "moto_body"),
    J(k.steer, ee, $(S.steer), "moto_bars"),
    J(k.slider, le, $(S.steer), "moto_forklegs"),
    J(k.fwheel, de, $(S.fwheel), "moto_fwheel_mesh"),
    J(k.swing, q, $(S.swing), "moto_swingarm"),
    J(k.rwheel, te, $(S.rwheel), "moto_rwheel_mesh"),
    J(k.shock, ne, $(S.shock), "moto_shock_mesh", !1),
    J(k.stand, we, $(S.stand), "moto_stand_mesh"));
  const ve = Object.values(k).reduce((R, V) => R + V.tris, 0),
    Pe = (R, V, j) => {
      const xe = new yo();
      return ((xe.name = V), xe.position.copy(j), R.add(xe), xe);
    },
    Ie = (R) => R.clone().applyMatrix4($(S.steer)),
    Se = {
      driver: Pe(B, "moto_seat_driver", new qe(0, 0, E.seatZ)),
      passenger: Pe(B, "moto_seat_passenger", E.paxEye),
    },
    je = {
      L: Pe(ee, "moto_grip_L", Ie(E.grip)),
      R: Pe(ee, "moto_grip_R", Ie(new qe(-E.grip.x, E.grip.y, E.grip.z))),
    };
  for (const [R, V] of [
    ["L", 1],
    ["R", -1],
  ]) {
    const j = new qe(V * E.gripAxis.x, E.gripAxis.y, E.gripAxis.z)
      .transformDirection($(S.steer))
      .normalize();
    je[R].quaternion.setFromUnitVectors(new qe(1, 0, 0), j);
  }
  const Ye = {
      L: Pe(B, "moto_peg_L", new qe(E.peg.x, E.peg.y + 0.011, E.peg.z)),
      R: Pe(B, "moto_peg_R", new qe(-E.peg.x, E.peg.y + 0.011, E.peg.z)),
    },
    Xe = Pe(ee, "moto_lens", Ie(E.lens)),
    nt = new qe(0, -Math.sin(0.058), Math.cos(0.058)).transformDirection(
      $(S.steer),
    ),
    rt = Pe(B, "moto_tail", E.tail),
    ae = new wo(16769204, 0, 32, 0.64, 0.72, 2);
  ((ae.name = "moto_headlight"),
    (ae.castShadow = !1),
    (ae.userData.noShadowBudget = !0),
    ae.shadow.mapSize.set(1024, 1024),
    (ae.shadow.camera.near = 0.3),
    (ae.shadow.camera.far = 25),
    (ae.shadow.bias = -0.0012),
    (ae.shadow.normalBias = 0.045),
    (ae.shadow.focus = 1),
    (ae.shadow.autoUpdate = !1),
    (ae.shadow.needsUpdate = !0),
    (ae.userData.actorGain = 1),
    r.add(ae, ae.target));
  const At = new Z0({
      vertexShader: Ko,
      fragmentShader: ea,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      side: bo,
      blending: Q0,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        uTime: { value: 0 },
        uK: { value: 0 },
        uColor: { value: new C0(1, 0.9, 0.74) },
        uLen: { value: 16 },
      },
    }),
    it = new go(1, 1, 48, 1, !0);
  (it.translate(0, -0.5, 0), it.rotateX(Math.PI / 2));
  const Oe = new L0(it, At);
  ((Oe.name = "moto_beam"),
    (Oe.frustumCulled = !1),
    (Oe.renderOrder = 21),
    (Oe.visible = !1));
  const Dt = 16,
    Ht = Math.tan(ae.angle * 0.92) * Dt;
  (Oe.scale.set(Ht * 1.15, Ht * 0.62, Dt), r.add(Oe));
  const tt = new Z0({
      vertexShader: ta,
      fragmentShader: oa,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      blending: Q0,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        uPos: { value: new qe() },
        uSize: { value: 0.55 },
        uK: { value: 0 },
        uColor: { value: new C0(1, 0.86, 0.66) },
      },
    }),
    Ze = new L0(new f0(1, 1), tt);
  ((Ze.name = "moto_flare"),
    (Ze.frustumCulled = !1),
    (Ze.renderOrder = 22),
    (Ze.visible = !1),
    r.add(Ze),
    e.parent !== null && (e.parent || r).add(g));
  const _ = {
      on: !1,
      onK: 0,
      rpm: 0,
      speed: 0,
      lastSpeed: 0,
      accel: 0,
      lean: 0,
      steer: 0,
      wheelF: 0,
      wheelR: 0,
      s: 0,
      standGoal: 1,
      standK: 1,
      standV: 0,
      yf: 0,
      vf: 0,
      yr: 0,
      vr: 0,
      rfPrev: 0,
      rrPrev: 0,
      bumps: [],
      brake: 0,
      load: 0,
      loadK: 0,
      head: { y: 0, v: 0 },
      t: 0,
      shadowT: 0,
    },
    re = {
      root: g,
      meshes: ze,
      headlight: ae,
      beam: Oe,
      flare: Ze,
      seats: Se,
      grips: je,
      pegs: Ye,
      tail: rt,
      material: x,
      tris: ve,
      G: E,
      seatTopAt: ro,
      get load() {
        return _.load;
      },
      set load(R) {
        _.load = pt(+R || 0);
      },
      parkLean: -0.165,
      paxEye: E.paxEye.clone(),
      headIntensity: 1100,
      engineVol: 1,
      beamK: 0.05,
      bounceK: 0.0011,
      state: {
        lean: 0,
        steer: 0,
        speed: 0,
        front: 0,
        rear: 0,
        wheel: 0,
        on: !1,
        stand: !0,
      },
    },
    ie = o.audio,
    Le = { pos: [0, 0, 0] },
    Pt = (R, V = 0.8, j = {}) => {
      if (e.sound !== !1 && ie?.play)
        try {
          ie.play(R, {
            ...(re.onboard ? {} : { pos: Le.pos, ref: 2 }),
            vol: V,
            ...j,
          });
        } catch {}
    };
  ((re.onboard = !1),
    (re.mix = {
      level: 0.55,
      idle: 0.6,
      cruise: 0.72,
      duck: 0.5,
      dip: -4,
      top: 6500,
    }),
    (re.cruiseId = "moto_cruise_b"));
  const Ke = { id: "moto_start", crank: 0.6, hand: 2.3, fade: 0.7 },
    v = {
      nodes: null,
      building: !1,
      rpm: 0,
      duck: 0,
      ob: 0,
      load: 0.5,
      startK: 1,
      handAt: 0,
      startH: null,
    };
  re._engine = v;
  const wt = (R) => {
      const V = R.getChannelData(0),
        j = V.length,
        xe = R.sampleRate;
      let Be = 0;
      for (; Be < j && Math.abs(V[Be]) < 0.001;) Be++;
      const Ve = Math.round(xe * 0.03),
        be = Math.min(j - 1, Be + Math.round(xe * 0.04)),
        Me = Math.round(xe * 0.02);
      let Ne = 0;
      for (let ye = 0; ye < Me; ye++) Ne += V[be + ye] * V[be + ye];
      let Ee = -2,
        Ce = j - Me - 1;
      for (
        let ye = Math.max(be + Me * 4, j - Math.round(xe * 0.6));
        ye < j - Me - 1;
        ye += 2
      ) {
        let Qe = 0,
          Mt = 0;
        for (let at = 0; at < Me; at += 2)
          ((Qe += V[be + at] * V[ye + at]), (Mt += V[ye + at] * V[ye + at]));
        const et = Qe / Math.sqrt(Ne * Mt * 0.5 + 1e-12);
        et > Ee && ((Ee = et), (Ce = ye));
      }
      const ot = new AudioBuffer({
        length: j,
        numberOfChannels: R.numberOfChannels,
        sampleRate: xe,
      });
      for (let ye = 0; ye < R.numberOfChannels; ye++) {
        const Qe = R.getChannelData(ye),
          Mt = ot.getChannelData(ye);
        Mt.set(Qe);
        for (let et = 0; et < Ve; et++) {
          const at = Math.sin((((et + 0.5) / Ve) * Math.PI) / 2) ** 2;
          Mt[Ce - Ve + et] =
            Qe[Ce - Ve + et] * (1 - at) + Qe[be - Ve + et] * at;
        }
      }
      return { buf: ot, start: be / xe, end: Ce / xe };
    },
    a0 = async () => {
      if (!(
        v.nodes ||
        v.building ||
        e.sound === !1 ||
        !ie?.ctx ||
        !ie.buffer
      )) {
        v.building = !0;
        try {
          const R = ie.ctx,
            V = await ie.buffer(re.cruiseId || "moto_cruise_b"),
            j = R.createGain();
          j.gain.value = 0;
          const Be = {
              eng: ((Ce) => {
                if (!Ce) return null;
                const ot = Ce._seam || (Ce._seam = wt(Ce)),
                  ye = R.createBufferSource();
                ((ye.buffer = ot.buf),
                  (ye.loop = !0),
                  (ye.loopStart = ot.start),
                  (ye.loopEnd = ot.end));
                const Qe = R.createGain();
                return (
                  (Qe.gain.value = 0),
                  ye.connect(Qe),
                  Qe.connect(j),
                  ye.start(
                    R.currentTime + 0.02,
                    ot.start + Math.random() * (ot.end - ot.start),
                  ),
                  { s: ye, g: Qe, norm: Ce._norm ?? 1 }
                );
              })(V),
            },
            Ve = R.createBiquadFilter();
          ((Ve.type = "peaking"),
            (Ve.frequency.value = 1700),
            (Ve.Q.value = 0.8),
            (Ve.gain.value = re.mix.dip));
          const be = R.createBiquadFilter();
          ((be.type = "lowpass"),
            (be.frequency.value = re.mix.top),
            (be.Q.value = 0.6),
            j.connect(Ve),
            Ve.connect(be));
          const Me = R.createPanner();
          ((Me.panningModel = "HRTF"),
            (Me.distanceModel = "inverse"),
            (Me.refDistance = 2),
            (Me.rolloffFactor = 1.1),
            (Me.maxDistance = 60));
          const Ne = R.createGain(),
            Ee = R.createGain();
          ((Ne.gain.value = 1),
            (Ee.gain.value = 0),
            be.connect(Ne),
            Ne.connect(Me),
            Me.connect(ie.bus.sfx),
            be.connect(Ee),
            Ee.connect(ie.bus.sfx),
            (v.nodes = {
              c: R,
              L: Be,
              mix: j,
              top: be,
              pan: Me,
              gP: Ne,
              gD: Ee,
            }));
        } catch {
          v.nodes = null;
        }
        ((v.building = !1), _.on || K(0.05));
      }
    },
    K = (R = 0.5) => {
      const V = v.nodes;
      if (V) {
        v.nodes = null;
        try {
          const j = V.c.currentTime;
          (V.mix.gain.cancelScheduledValues(j),
            V.mix.gain.setTargetAtTime(0, j, R / 3));
          for (const xe of Object.values(V.L)) xe?.s.stop(j + R * 1.6);
        } catch {}
        setTimeout(
          () => {
            try {
              (V.gP.disconnect(), V.gD.disconnect(), V.pan.disconnect());
            } catch {}
          },
          R * 1600 + 200,
        );
      }
    },
    s0 = (R, V) => {
      _.on && !v.nodes && !v.building && ie?.ctx && a0();
      const j = v.nodes;
      if (!j) return;
      const xe = Math.abs(V);
      ((v.rpm = vt(
        v.rpm,
        _.on ? Yt(1.5, 10, xe) + (_.rev || 0) * 0.5 : 0,
        2.5,
        R,
      )),
        (v.load = vt(
          v.load,
          _.accel > 0.4 ? 1 : _.accel < -0.6 ? 0.15 : 0.5,
          4,
          R,
        )));
      const Be = ie.speaking ? 1 : 0;
      ((v.duck = vt(v.duck, Be, Be ? 10 : 2.2, R)),
        (v.ob = vt(v.ob, re.onboard ? 1 : 0, 6, R)));
      const Ve = Yt(0.35, 2.4, xe),
        be = j.c.currentTime,
        Me = (ot, ye, Qe = 0.04) => {
          try {
            ot.setTargetAtTime(ye, be, Qe);
          } catch {}
        },
        Ne = re.mix,
        Ee = j.L;
      if (v.handAt && be >= v.handAt) {
        v.handAt = 0;
        try {
          (v.startH?.gain.gain.setTargetAtTime(0, be, Ke.fade / 3),
            v.startH?.source.stop(be + Ke.fade * 2));
        } catch {}
        v.startH = null;
      }
      ((v.startK = vt(
        v.startK,
        v.handAt ? 0 : 1,
        v.handAt ? 30 : 1 / (Ke.fade / 3),
        R,
      )),
        Ee.eng &&
          (Me(
            Ee.eng.g.gain,
            Ee.eng.norm *
              (Ne.idle * (1 - Ve) + Ne.cruise * Ve * (0.84 + 0.24 * v.load)),
          ),
          Me(
            Ee.eng.s.playbackRate,
            0.8 + 0.3 * v.rpm + 0.03 * (v.load - 0.5),
            0.12,
          )),
        Me(
          j.mix.gain,
          Ne.level *
            _.onK *
            v.startK *
            (re.engineVol ?? 1) *
            (1 - Ne.duck * v.duck),
          0.06,
        ),
        Me(j.top.frequency, Ne.top, 0.1),
        Me(j.gP.gain, 1 - v.ob, 0.08),
        Me(j.gD.gain, v.ob, 0.08));
      const Ce = j.pan;
      ((Ce.positionX.value = Le.pos[0]),
        (Ce.positionY.value = Le.pos[1]),
        (Ce.positionZ.value = Le.pos[2]));
    };
  (Object.defineProperty(re, "on", { get: () => _.on }),
    (re.setOn = (R, { quiet: V = !1 } = {}) => {
      if (((R = !!R), R !== _.on))
        if (((_.on = R), R))
          ((_.crank = V ? 0 : Ke.crank),
            (v.startK = V ? 1 : 0),
            (v.handAt = 0),
            (v.startH = null),
            !V &&
              e.sound !== !1 &&
              ie?.ctx &&
              ie.buffer &&
              (ie.buffer(Ke.id).then((j) => {
                !_.on ||
                  !j ||
                  !ie.ctx ||
                  ((v.startH = ie.play(Ke.id, {
                    ...(re.onboard ? {} : { pos: Le.pos, ref: 2 }),
                    vol: 0.9,
                  })),
                  (v.handAt = ie.ctx.currentTime + Ke.hand));
              }),
              (v.handAt = 1e9)),
            a0());
        else {
          ((_.crank = 0), (v.handAt = 0));
          try {
            v.startH?.stop(0.15);
          } catch {}
          ((v.startH = null),
            V || Pt(_.speed > 2 ? "moto_stop" : "moto_off", 0.85),
            K(V ? 0.2 : 0.35));
        }
    }),
    (re.kickstand = (R) => {
      const V = R ? 1 : 0;
      V !== _.standGoal && ((_.standGoal = V), Pt("moto_stand", 0.6));
    }),
    (re.rev = (R = 1) => {
      _.rev = Math.max(_.rev || 0, R);
    }),
    (re.takeShadow = (R) =>
      _.lent || !R || !R.castShadow || ae.castShadow
        ? !1
        : ((R.castShadow = !1),
          (ae.castShadow = !0),
          (ae.shadow.needsUpdate = !0),
          (_.lent = R),
          !0)),
    (re.returnShadow = () => {
      _.lent &&
        ((ae.castShadow = !1),
        (_.lent.castShadow = !0),
        (_.lent.shadow.needsUpdate = !0),
        (_.lent = null));
    }));
  const ht = new qe(),
    ft = new qe(),
    Gt = new Ue(),
    n0 = new Ae(),
    r0 = new qe(),
    qt = E.WB;
  re.update = (R, V = {}) => {
    ((R = Math.min(Math.max(R || 0, 0), 0.1)), (_.t += R));
    const j = V.speed ?? 0;
    ((_.accel = vt(_.accel, R > 0 ? (j - _.lastSpeed) / R : 0, 6, R)),
      (_.lastSpeed = j),
      (_.speed = j));
    let xe = V.steer,
      Be = V.lean;
    if (V.yawRate != null) {
      const Te = Math.max(Math.abs(j), 0.6);
      (xe == null && (xe = Math.atan((qt * V.yawRate) / Te)),
        Be == null && (Be = -Math.atan((j * V.yawRate) / 9.81)));
    }
    ((xe = pt(xe ?? 0, -0.75, 0.75)),
      (Be = pt(Be ?? 0, -0.75, 0.75)),
      (_.steer = vt(_.steer, xe, 18, R)),
      (_.standV += ((_.standGoal - _.standK) * 260 - _.standV * 22) * R),
      (_.standK = pt(_.standK + _.standV * R, -0.05, 1.05)));
    const Ve = Yt(0.2, 0.8, _.loadK),
      be = Yt(0.6, 1, _.standK) * (1 - Ve) * (1 - Yt(0.3, 1.2, Math.abs(j)));
    ((_.lean = vt(_.lean, Be + re.parkLean * be, 10, R)),
      (_.loadK = vt(_.loadK, _.load, 3.5, R)),
      (_.s += j * R),
      V.bump > 0.01 &&
        (_.bumps.push({ s: _.s + 0.05, h: 0.085 * pt(V.bump), w: 0.45 }),
        _.bumps.length > 6 && _.bumps.shift(),
        V.bump > 0.55 &&
          _.t - (_.bumpT ?? -9) > 0.6 &&
          ((_.bumpT = _.t), Pt("moto_bump", 0.2 + 0.3 * V.bump))));
    const Me = 0.006 + 0.01 * Yt(1, 9, Math.abs(j)),
      Ne = (Te) => {
        let st =
          (to(Te * 1.7) - 0.5) * Me + (to(Te * 4.1 + 9) - 0.5) * Me * 0.5;
        for (const bt of _.bumps) {
          const It = (Te - bt.s) / bt.w;
          It > -1 &&
            It < 1 &&
            (st += bt.h * 0.5 * (1 + Math.cos(Math.PI * It)));
        }
        return st;
      };
    for (; _.bumps.length && _.s - _.bumps[0].s > qt + 1;) _.bumps.shift();
    const Ee = Ne(_.s),
      Ce = Ne(_.s - qt),
      ot = R > 0 ? (Ee - _.rfPrev) / R : 0,
      ye = R > 0 ? (Ce - _.rrPrev) / R : 0;
    ((_.rfPrev = Ee), (_.rrPrev = Ce));
    const Qe = pt(V.brake ?? (_.accel < -1.5 ? Yt(1.5, 5, -_.accel) : 0));
    _.brake = vt(_.brake, Qe, 8, R);
    const Mt = pt(-_.accel * 0.006, -0.025, 0.035) + _.brake * 0.012,
      et = 2 * Math.PI * 1.7,
      at = 2 * Math.PI * 1.5,
      g0 = 0.42,
      i0 = 0.48,
      St = Math.max(1, Math.ceil(R / (1 / 120))),
      xt = R / St;
    for (let Te = 0; Te < St; Te++)
      ((_.vf += (et * et * (Ee - Mt - _.yf) + 2 * g0 * et * (ot - _.vf)) * xt),
        (_.yf += _.vf * xt),
        (_.vr +=
          (at * at * (Ce + Mt * 0.6 - _.yr) + 2 * i0 * at * (ye - _.vr)) * xt),
        (_.yr += _.vr * xt));
    const R0 = (1 - _.loadK) * -0.032,
      U = (1 - _.loadK) * -0.042,
      l0 = pt(Ee - _.yf + R0, -0.06, E.fTravel),
      Tt = pt(Ce - _.yr + U, -0.07, E.rTravel),
      y = Ee - l0 * Math.cos(E.RAKE),
      Ut = Ce - Tt;
    ((_.onK = vt(_.onK, _.on ? 1 : 0, _.on ? 4 : 5, R)),
      (_.rpm = vt(
        _.rpm,
        _.on ? pt(0.25 + Math.abs(j) / 14 + (_.rev || 0) * 0.5) : 0,
        5,
        R,
      )),
      (_.rev = Math.max(0, (_.rev || 0) - R * 1.6)));
    const c0 =
      _.onK *
      (9e-4 * Math.sin(_.t * 2 * Math.PI * (17 + 30 * _.rpm)) +
        5e-4 * Math.sin(_.t * 2 * Math.PI * (23 + 41 * _.rpm)));
    (B.position.set(0, (y + Ut) / 2 + c0, 0),
      B.rotation.set(-(y - Ut) / qt, 0, c0 * 0.4),
      (n.rotation.z = _.lean),
      (ee.rotation.y = _.steer),
      le.position.set(0, l0, 0),
      (_.wheelF += (j * R) / E.RF),
      (_.wheelR += (j * R) / E.RR),
      (de.rotation.x = _.wheelF % (Math.PI * 2)));
    {
      const Te = E.RA.clone().sub(E.SW),
        st = Math.hypot(Te.y, Te.z),
        bt = Math.asin(Te.y / st),
        It = pt((Te.y + Tt) / st, -0.99, 0.99);
      ((q.rotation.x = Math.asin(It) - bt),
        (te.rotation.x = _.wheelR % (Math.PI * 2)),
        ht
          .set(0, E.shockBot.y, E.shockBot.z)
          .sub(E.SW)
          .applyAxisAngle(new qe(1, 0, 0), q.rotation.x)
          .add(E.SW),
        ft.set(0, E.shockTop.y, E.shockTop.z));
      const Qt = ht.sub(ft),
        I0 = Qt.length();
      (ne.rotation.set(Math.atan2(-Qt.z, -Qt.y), 0, 0),
        (b.uShock.value.x = u - I0));
    }
    (Gt.copy(_e).slerp(We, pt(1 - _.standK)), we.quaternion.copy(Gt));
    {
      const Te = _.head,
        st = (y + Ut) / 2;
      ((Te.v += ((st - Te.y) * 160 - Te.v * 16) * R),
        (Te.y += Te.v * R),
        Se.passenger.position.set(
          re.paxEye.x,
          re.paxEye.y + (Te.y - st) * 0.6,
          re.paxEye.z,
        ),
        Se.passenger.rotation.set(
          -B.rotation.x * 0.6,
          0,
          -_.lean * 0.25,
          "YXZ",
        ));
    }
    _.crank > 0 && (_.crank = Math.max(0, _.crank - R));
    const A0 =
        _.crank > 0 ? 0.42 + 0.18 * Math.sin(_.t * 47) * Math.sin(_.t * 13) : 1,
      Bt =
        _.onK *
        A0 *
        (0.74 + 0.26 * _.rpm) *
        (1 - 0.04 * _.onK * (1 - _.rpm) * (0.5 + 0.5 * Math.sin(_.t * 31)));
    ((b.uHead.value = Bt),
      (b.uTail.value = _.onK * (0.55 + 0.9 * _.brake)),
      (ae.intensity = re.headIntensity * Bt),
      g.updateMatrixWorld(!0),
      Xe.getWorldPosition(ht),
      ae.position.copy(ht),
      ft.copy(nt).transformDirection(Xe.parent.matrixWorld),
      ae.position.addScaledVector(ft, -0.035),
      ae.target.position.copy(ae.position).addScaledVector(ft, 10),
      ae.updateMatrixWorld(),
      ae.target.updateMatrixWorld());
    {
      const Te = g.position.y,
        st = Math.max(0.2, ht.y - Te),
        bt = Math.min(7, ft.y < -0.03 ? st / -ft.y : 7) * 0.75;
      (b.uBouncePos.value.copy(ht).addScaledVector(ft, bt),
        (b.uBouncePos.value.y = Te + 0.05),
        b.uBounce.value
          .copy(ae.color)
          .multiplyScalar(ae.intensity * re.bounceK));
    }
    if (
      (ae.intensity > 0.5 &&
        ae.castShadow &&
        ((_.shadowT -= R),
        (Math.abs(j) > 0.05 ||
          Math.abs(_.steer - (_.lastSteer ?? 0)) > 0.001 ||
          _.shadowT <= 0 ||
          !ae.shadow.map) &&
          ((ae.shadow.needsUpdate = !0), (_.shadowT = 0.5))),
      (_.lastSteer = _.steer),
      (Oe.visible = ae.intensity > 1),
      Oe.visible &&
        (Oe.position.copy(ht),
        Gt.setFromUnitVectors(new qe(0, 0, -1), ft),
        Oe.quaternion.copy(Gt),
        Oe.rotateZ(-_.lean),
        (At.uniforms.uTime.value += R),
        (At.uniforms.uK.value = re.beamK * Bt)),
      (Ze.visible = ae.intensity > 1),
      Ze.visible)
    ) {
      (tt.uniforms.uPos.value.copy(ht).addScaledVector(ft, 0.012),
        o.camera.getWorldPosition(r0));
      const st = r0.sub(ht).normalize(),
        bt = pt(st.dot(ft));
      tt.uniforms.uK.value =
        Bt * (Math.pow(bt, 6) * 1.6 + Math.pow(bt, 2) * 0.12);
    }
    ((Le.pos[0] = (ht.x + g.position.x) / 2),
      (Le.pos[1] = g.position.y + 0.45),
      (Le.pos[2] = (ht.z + g.position.z) / 2),
      s0(R, j));
    const lt = re.state;
    ((lt.lean = _.lean),
      (lt.steer = _.steer),
      (lt.speed = j),
      (lt.front = l0),
      (lt.rear = Tt),
      (lt.wheel = _.wheelR),
      (lt.on = _.on),
      (lt.stand = _.standK > 0.5),
      (lt.chassisY = B.position.y),
      (lt.pitch = B.rotation.x),
      (lt.rpm = _.rpm),
      (lt.brake = _.brake));
  };
  const Zt = new Ue(),
    b0 = new Ue();
  return (
    (re.carryCamera = (R, V = 0, j = 0) => {
      (g.updateMatrixWorld(!0),
        Se.passenger.getWorldPosition(R.position),
        Se.passenger.getWorldQuaternion(R.quaternion),
        Zt.setFromAxisAngle(new qe(0, 1, 0), Math.PI + V),
        b0.setFromAxisAngle(new qe(1, 0, 0), j),
        R.quaternion.multiply(Zt).multiply(b0),
        R.updateMatrixWorld());
    }),
    (re.toBike = (R, V = new qe()) => (
      g.updateMatrixWorld(!0),
      n0.copy(B.matrixWorld).invert(),
      V.copy(R).applyMatrix4(n0)
    )),
    (re.dispose = () => {
      for (const R of ze) R.geometry.dispose();
      (K(0.05),
        x.dispose(),
        At.dispose(),
        it.dispose(),
        tt.dispose(),
        Ze.geometry.dispose(),
        r.remove(ae, ae.target, Oe, Ze),
        g.parent?.remove(g));
    }),
    (re.buildMs = Math.round(performance.now() - T)),
    re.update(0, { speed: 0 }),
    re
  );
}
const Y = O0,
  v0 = Math.PI / 180,
  M0 = (p = 0, e = 1) => p + Math.random() * (e - p),
  Lt = (p, e) => {
    let o = e - p;
    for (; o > Math.PI;) o -= 2 * Math.PI;
    for (; o < -Math.PI;) o += 2 * Math.PI;
    return o;
  };
function da(p) {
  const e = p,
    o = p.player,
    r = () => p.npc,
    s = { beat: null, run: 0, flags: {}, running: !1 };
  e.lookMul = {};
  const T = p.sched,
    k = () => e.rooms.garden?.props,
    S = () => e.rooms.garden?.points || {},
    u = (t) => T.wait(t),
    x = (t, a) => T.until(t, a),
    b = (t, a) => e.audio.play(t, a),
    g = (t, a) => r().say(t, a),
    n = (t) => t !== s.run,
    B = new Y(),
    O = () => e.camera.getWorldPosition(B),
    ee = (t) => r().distTo(o.pos.x, o.pos.z) < t,
    le = new Map(),
    de = (t, { cool: a = 22, gap: l = 2.5, emote: i, over: c = !1 } = {}) => {
      if (
        r().speaking ||
        e.time - (s.lastBark ?? -99) < l ||
        (!c && (e.playerSpeaking || s.priest?.talking))
      )
        return !1;
      let h = [],
        m = 1 / 0;
      for (const z of t) {
        if (!e.audio.manifest?.[z]) continue;
        const w = le.get(z) ?? -1e9;
        e.time - w < a ||
          (w < m - 1e-6
            ? ((m = w), (h = [z]))
            : Math.abs(w - m) < 1e-6 && h.push(z));
      }
      if (!h.length) return !1;
      const f = h[Math.floor(Math.random() * h.length)];
      return (
        le.set(f, e.time),
        (s.lastBark = e.time),
        g(f, i ? { emote: i } : void 0),
        !0
      );
    },
    fe = {
      behind: [
        "a3_behind",
        "a3_behind3",
        "v_behind",
        "v_behind2",
        "a3_c_behind4",
        "a3_c_behind5",
      ],
      left: ["a3_left3", "v_left", "a3_c_left2", "a3_c_left3"],
      right: ["a3_right3", "v_right", "a3_c_right2", "a3_c_right3"],
      cover: ["v_cover2", "a3_c_cover3", "a3_c_cover4", "a3_c_cover5"],
      lag: ["a2_stayclose", "a2_keepmoving", "a3_c_lag1", "a3_c_lag2"],
      out: ["a3_what", "a3_backdoor", "a3_c_out1", "a3_c_out2"],
    };
  async function q(t, { thought: a = !1, vol: l = 0.95 } = {}) {
    const i = e.audio.manifest[t],
      c = (i?.text || "").replace(/^\[[^\]]*\]\s*/, "");
    (c && e.hud.subtitle(c, (i?.dur ?? 2) + 0.3, "", a ? "thought" : ""),
      (e.playerSpeaking = !0));
    try {
      await e.audio.voice(t, { vol: l, reverb: 0.04 });
    } finally {
      e.playerSpeaking = !1;
    }
  }
  const te = new ko(),
    ne = new Ae(),
    we = new vo(),
    _e = new Y(),
    We = new Y(),
    ze = (t, a) => {
      const l = e.camera;
      (l.updateMatrixWorld(),
        ne.multiplyMatrices(l.projectionMatrix, l.matrixWorldInverse),
        te.setFromProjectionMatrix(ne),
        l.getWorldPosition(_e));
      for (const i of [0.45, 1.15, 1.7]) {
        if (
          (we.center.set(t, i, a), (we.radius = 0.5), !te.intersectsSphere(we))
        )
          continue;
        We.set(t, i, a).sub(_e);
        const c = We.length();
        if (
          (We.divideScalar(c),
          !e.combat.raycastWorld(_e, We, Math.max(0.05, c - 0.35)))
        )
          return !0;
      }
      return !1;
    },
    J = 7.5;
  async function $(t, a, l = {}, i, c = 12, h = null) {
    const m = e.time,
      f = (w) => Math.hypot(w[0] - o.pos.x, w[1] - o.pos.z),
      z = (w) =>
        e.nav.walkable(w[0], w[1]) &&
        !!e.nav.path(w[0], w[1], o.pos.x, o.pos.z);
    for (;;) {
      if ((i != null && n(i)) || (h && !h())) return null;
      const w = l.minD ?? J;
      let L = a.find((F) => f(F) >= w && !ze(F[0], F[1]) && z(F));
      if (!L && e.time - m > c) {
        const F = a.slice().sort((G, oe) => f(oe) - f(G));
        if (
          ((L =
            F.find((G) => f(G) >= 6 && !ze(G[0], G[1]) && z(G)) ||
            F.find((G) => f(G) >= 12 && z(G)) ||
            null),
          !L && e.time - m > c * 3)
        )
          return null;
      }
      if (L) {
        const F = e.zombies.spawn(t, L[0], L[1], {
          ...l,
          yaw: L[2] ?? l.yaw ?? 0,
        });
        return (ve(F), F);
      }
      await u(0.15);
    }
  }
  const ve = (t) => {
      const a = o.forward(new Y());
      ((a.y = 0), a.normalize());
      const l = t.pos.x - o.pos.x,
        i = t.pos.z - o.pos.z,
        c = Math.hypot(l, i);
      c > 12 ||
        (e.zombies.groan(t, 1.2),
        (a.x * l + a.z * i) / Math.max(c, 0.001) < -0.2 &&
          ((t.alertT = 1.1), (t.rushed = !1), (t.calmT = 2)));
    },
    Pe = (t, a = 6) => {
      if (e.time - (s.lastCall ?? -99) < a || r().speaking) return;
      const l = o.forward(new Y());
      ((l.y = 0), l.normalize());
      const i = new Y().subVectors(t, o.pos);
      ((i.y = 0), i.normalize());
      const c = Math.atan2(l.x * i.z - l.z * i.x, l.x * i.x + l.z * i.z);
      de(Math.abs(c) > 2.1 ? fe.behind : c > 0 ? fe.right : fe.left, {
        cool: 18,
      }) && (s.lastCall = e.time);
    },
    Ie = (t) => {
      const a = e.weapons;
      t
        ? (a.give("torch"), a.give("pistol"), (a.on = !0), a.setVisible(!0))
        : ((a.has.torch = !1), (a.has.pistol = !1), (a.gunRoot.visible = !1));
    };
  function Se() {
    const t = e.renderer,
      a = r();
    ((s._cubeRT ||= new Mo(256, {
      type: _o,
      generateMipmaps: !0,
      minFilter: xo,
    })),
      (s._cubeCam ||= new zo(0.12, 400, s._cubeRT)),
      a.headWorld(s._cubeCam.position));
    const l = a.root.visible;
    a.root.visible = !1;
    const i = t.getRenderTarget();
    return (
      s._cubeCam.update(t, e.scene),
      t.setRenderTarget(i),
      (a.root.visible = l),
      s._cubeRT.texture
    );
  }
  async function je(t) {
    const a = e.camera,
      l = e.weapons,
      i = e.post,
      c = a.position.clone(),
      h = a.quaternion.clone(),
      m = a.fov;
    ((o.frozen = !0), l.setVisible(!1));
    const f = r(),
      z = f.akane.char.rig.head;
    (f.lookAt(c.clone()), f.emote("sad", 99));
    const w = new Y(0.0285, -0.0055, 0.064),
      L = new Y(0.017, 8e-4, 0.064),
      F = new Y(),
      G = new Y(),
      oe = new Y(),
      X = new Y(),
      se = new Y(),
      ue = new Y(),
      Q = new Y(),
      pe = new Y(),
      A = new Ue(),
      N = new Ae(),
      I = new Y(),
      W = new Y(),
      M = new Y(),
      D = new Y(0.004, -0.012, 0.05);
    let H = "in",
      C = 0,
      ce = 0,
      me = !1;
    const $e = 3.4,
      jt = 3.6,
      d0 = 15,
      y0 = 0.28,
      Ct = 0.21,
      p0 = 9,
      Jt = i.vignette,
      ct = i.ao;
    let Vt = Jt;
    ((f.akane.env = { cube: s._cubeRT ? s._cubeRT.texture : Se(), gain: 0.32 }),
      (f.eyeReflect = 1.1),
      (f.calmHead = !0),
      (f.noBlink = !0),
      (f.akane.forceFaceRes = 4096),
      (e.postOwned = !0),
      (e.camCtl = (yt) => {
        ((C += yt), (ce += yt), z.updateWorldMatrix(!0, !1));
        const dt = z.matrixWorld.elements;
        (F.copy(L).applyMatrix4(z.matrixWorld),
          G.copy(w).applyMatrix4(z.matrixWorld),
          W.copy(D).applyMatrix4(z.matrixWorld),
          oe.set(dt[8], dt[9], dt[10]).normalize(),
          X.set(dt[4], dt[5], dt[6]).normalize(),
          me || (se.copy(F), ue.copy(oe), Q.copy(X), M.copy(W), (me = !0)));
        const u0 = 1 - Math.exp(-yt * 14);
        (se.lerp(F, u0),
          ue.lerp(oe, u0).normalize(),
          Q.lerp(X, u0).normalize(),
          M.lerp(W, u0));
        const De = kt.smooth(Math.min(1, ce / p0)),
          mt = y0 + (Ct - y0) * De;
        (pe
          .copy(se)
          .addScaledVector(ue, mt)
          .addScaledVector(Q, Math.sin(ce * 0.9) * 0.0012),
          I.copy(se).addScaledVector(Q, Math.sin(ce * 0.9) * 8e-4),
          N.lookAt(pe, I, Q),
          A.setFromRotationMatrix(N));
        let Ge, Wt;
        if (H !== "out")
          ((Ge = kt.slow(Math.min(1, C / $e))),
            a.position.lerpVectors(c, pe, Ge),
            a.quaternion.slerpQuaternions(h, A, Ge),
            (Wt = m + (d0 - m) * Ge));
        else {
          const Y0 = Math.min(1, C / jt),
            F0 = kt.smooth(Math.min(1, Y0 / 0.55)),
            k0 = kt.smooth(Math.max(0, (Y0 - 0.3) / 0.7)),
            co = mt + (0.95 - mt) * F0;
          (I.lerpVectors(se, M, F0),
            pe.copy(I).addScaledVector(ue, co),
            N.lookAt(pe, I, Q),
            A.setFromRotationMatrix(N),
            a.position.lerpVectors(pe, c, k0),
            a.quaternion.slerpQuaternions(A, h, k0));
          const X0 = d0 + (38 - d0) * F0;
          ((Wt = X0 + (m - X0) * k0), (Ge = 1 - k0));
        }
        (Math.abs(a.fov - Wt) > 0.01 &&
          ((a.fov = Wt), a.updateProjectionMatrix()),
          (i.focus = Math.max(0.05, a.position.distanceTo(G))),
          (i.aperture = 0.004 + 0.018 * Ge * Ge),
          (i.vignette = Vt + 0.22 * Ge),
          (i.ao = ct * (1 - Ge)));
      }));
    const gt = () => {
      ((e.camCtl = null),
        (e.postOwned = !1),
        a.position.copy(c),
        a.quaternion.copy(h),
        (a.fov = m),
        a.updateProjectionMatrix(),
        (i.focus = 0),
        (i.aperture = 0.9),
        (i.vignette = Vt),
        (i.ao = ct),
        (f.akane.env = null),
        (f.eyeReflect = null),
        (f.calmHead = !1),
        (f.freezeMouth = !1),
        (f.noBlink = !1),
        (f.akane.forceFaceRes = 0),
        (o.frozen = !1),
        o.sync(),
        l.setVisible(!0));
    };
    return (
      e.audio.duck("amb", 0.35, 6),
      await u($e * 0.85),
      n(t) ||
      ((H = "hold"),
      (f.freezeMouth = !0),
      await g("a2_nogarden", { emote: "sad", hold: 3 }),
      n(t)) ||
      (f.emote("sad", 99), await u(0.9), n(t)) ||
      (await T.tween(i, "lid", 0, 0.24, "in"),
      e.audio.loops.get("amb_garden")?.stop?.(0.3),
      e.audio.loops.get("garden_theme")?.stop?.(0.3),
      k().setWorld("ruins"),
      (Vt = i.vignette),
      b("reveal_sting", { vol: 1 }),
      e.audio.loop("amb_ruins", { vol: 0 }).fadeTo(0.65, 2.5),
      (s.heart = e.audio.play("heartbeat", { vol: 0.55, loop: !0 })),
      f.emote("scared", 99),
      await u(0.12),
      n(t)) ||
      ((f.akane.env = { cube: Se(), gain: 0.45 }), await u(0.9), n(t)) ||
      (await T.tween(i, "lid", 1, 0.9, "out"), await u(0.8), n(t)) ||
      ((H = "out"), (C = 0), q("s2_what2", { thought: !0 }), await u(jt), n(t))
        ? (gt(), !1)
        : (gt(), !0)
    );
  }
  async function Ye(t) {
    if (
      ((s.beat = "garden"),
      S(),
      k()?.setWorld("dream"),
      Ie(!1),
      e.hud.setVisible(!0),
      (o.speedMul = 0.7),
      r().holster(),
      r().emote("neutral"),
      r().lookAt(new Y(0.2, -0.1, 0.4)),
      e.audio.loop("amb_garden", { vol: 0.62 }),
      e.post.fadeColor.setRGB(1, 0.96, 0.9),
      (e.post.fade = 1),
      (e.post.lid = 0.2),
      (e.post.blur = 0.6),
      (async () => (
        await u(0.1),
        n(t) || Se(),
        await T.tween(e.post, "fade", 0, 3.1, "out"),
        e.post.fadeColor.setRGB(0, 0, 0)
      ))(),
      (async () => (
        await u(0.6),
        await T.during(2.4, (i) => {
          ((e.post.lid = 0.2 + 0.8 * kt.smooth(i)),
            (e.post.blur = 0.6 * (1 - i)));
        })
      ))(),
      await u(3.4),
      n(t) ||
        (await q("s2_madeit"), n(t)) ||
        (await u(0.8), n(t)) ||
        (await g("a2_fornow"), n(t)))
    )
      return;
    (r().lookAt(O), (r().attend = !0));
    let a = await x(() => ee(2.5) || n(t), 16);
    if (n(t)) return;
    if (!a) {
      g("a2_comehere");
      const [i, c] = e.nav.snap(o.pos.x, o.pos.z, !0);
      if (
        (r().walkTo(i, c, { speed: 1.1, arrive: 1.8 }),
        (a = await x(() => ee(2.5) || n(t), 25)),
        n(t))
      )
        return;
    }
    if (
      (r().stop(),
      (o.speedMul = 0),
      r().turnTo(o.pos.x, o.pos.z),
      r().lookAt(O),
      e.audio.loop("garden_theme", { vol: 0 }).fadeTo(0.32, 5),
      await u(0.6),
      n(t) ||
        (await q("s2_what"), n(t)) ||
        (await u(0.35),
        r().emote("sad", 30),
        await g("a2_started", { emote: "sad", hold: 1 }),
        n(t)) ||
        (await u(0.6), await q("s2_nomemory"), n(t)) ||
        (await u(0.4), await g("a2_head", { emote: "sad", hold: 1 }), n(t)) ||
        (await u(0.7), await q("s2_stayed"), n(t)) ||
        (await u(0.5), await g("a2_couldnt", { emote: "sad", hold: 2 }), n(t)))
    )
      return;
    (await u(1.2), r().emote("sad", 99));
    {
      const i = r().pos;
      k()?.water?.ripple(i.x - 0.9, i.z + 0.6, 0.9);
    }
    (await u(1.4),
      !(
        n(t) ||
        ((r().akane.forceFaceRes = 4096), await q("s2_garden"), n(t)) ||
        (await u(0.4), n(t)) ||
        !(await je(t)) ||
        n(t)
      ) && (await Xe(t, !0)));
  }
  async function Xe(t, a = !1) {
    if (
      ((s.beat = "ruins"),
      (r().attend = !1),
      a || (k()?.setWorld("ruins"), e.audio.loop("amb_ruins", { vol: 0.65 })),
      (o.speedMul = 1),
      Ie(!0),
      e.hud.hint("F: light", 4),
      r().emote("scared", 4),
      r().lowReady(),
      r().lookAt(null),
      await u(a ? 1.6 : 0.8),
      n(t))
    )
      return;
    const l = [
        [-15.2, 3.6, Math.PI / 2],
        [-15.4, 2.2, Math.PI / 2],
        [-15, 5, Math.PI / 2],
      ],
      i = [
        [15.2, -1, -Math.PI / 2],
        [15.4, -2.4, -Math.PI / 2],
        [15, 0.4, -Math.PI / 2],
      ],
      c = [
        $("lanky", l, { state: "emerge" }, t, 6),
        $("gown", i, { state: "emerge" }, t, 6),
      ];
    ((async () => (
      await u(5.5),
      n(t) || $("gown", l, { state: "emerge" }, t, 6)
    ))(),
      b("zombie_groan_2", { pos: [-13.5, 1.3, 3.5], vol: 0.9, reverb: 0.5 }),
      await u(0.9),
      !n(t) &&
        (s.heart?.stop?.(4),
        r().aimAt(() => {
          const h = e.zombies.nearest(r().pos);
          return h
            ? h.kit.chestWorld(new Y())
            : new Y(r().pos.x, 1.2, r().pos.z + 3);
        }),
        await g("a2_church"),
        !n(t) && (await Promise.all(c), await Dt(t))));
  }
  const nt = () => {
      for (const t of s.crateRecs || []) t.remove();
      s.crateRecs = (k()?.outside?.crates || []).map((t, a) =>
        e.interact.add({
          id: "ammo_crate" + a,
          pos: t.pos,
          radius: 1.9,
          cone: 0.55,
          prompt: "take",
          enabled: () => !t.taken && e.weapons.has.pistol,
          onUse: () => {
            t.taken ||
              (t.take(),
              (e.weapons.reserve += 30),
              (e.weapons.showUntil = e.time + 4),
              b("pickup_item", { vol: 0.9 }),
              b("gun_mag_in", { vol: 0.5 }),
              e.hud.hint("+30 rounds", 2.5));
          },
        }),
      );
    },
    rt = (t, a, l = 6) =>
      (k()?.outside?.crates || []).find(
        (i) => !i.taken && Math.hypot(i.pos[0] - t, i.pos[2] - a) < l,
      );
  async function ae(
    t,
    {
      speed: a = 2.1,
      waitDist: l = 5.5,
      run: i,
      onPoint: c,
      holdAt: h = new Set(),
      holdMin: m = 1.5,
    } = {},
  ) {
    const f = (z) =>
      e.zombies
        .alive()
        .some(
          (w) =>
            w.alerted &&
            (Math.hypot(w.pos.x - r().pos.x, w.pos.z - r().pos.z) < z ||
              Math.hypot(w.pos.x - o.pos.x, w.pos.z - o.pos.z) < z),
        );
    for (let z = 0; z < t.length; z++) {
      const w = t[z];
      if (n(i)) return;
      let L = !1,
        F = !1,
        G = 0;
      const oe = () => {
          const se = ++G;
          r()
            .walkTo(w[0], w[1], { speed: a, arrive: 0.4 })
            .then((ue) => {
              se === G && (ue ? (L = !0) : (F = !0));
            });
        },
        X = () => {
          (G++, r().stop());
        };
      for (oe(); !L && !n(i);) {
        if ((await u(0.12), F)) {
          if (((F = !1), r().distTo(w[0], w[1]) < 1)) {
            L = !0;
            break;
          }
          (await u(0.35), oe());
          continue;
        }
        if (f(4.2)) {
          X();
          let Q = 0;
          if (
            (await x(() => ((Q = f(5.5) ? 0 : Q + 0.1), Q > 0.8 || n(i)), 30),
            n(i))
          )
            return;
          oe();
          continue;
        }
        const se = r().distTo(o.pos.x, o.pos.z),
          ue =
            Math.hypot(o.pos.x - w[0], o.pos.z - w[1]) >
            Math.hypot(r().pos.x - w[0], r().pos.z - w[1]);
        if (se > l && ue) {
          if (
            (X(),
            r().lookAt(O),
            e.time - (s.lastNag ?? -99) > 7 &&
              de(fe.lag, { cool: 16 }) &&
              (s.lastNag = e.time),
            await x(() => r().distTo(o.pos.x, o.pos.z) < l - 1.5 || n(i), 60),
            n(i))
          )
            return;
          (r().lookAt(null), oe());
        }
      }
      if (n(i)) return;
      if ((c && c(z), h.has(z))) {
        const se = e.time;
        let ue = 0;
        if (
          (await x(
            () => (
              (ue = f(10) ? 0 : ue + 0.1),
              (ue > 1.2 && e.time - se > m) || e.time - se > 20 || n(i)
            ),
            30,
          ),
          n(i))
        )
          return;
      }
    }
  }
  const At = [
      [2.4, 5.2],
      [0.2, 10.3],
      [8, 14],
      [15.2, 14],
      [22, 13.9],
      [29.6, 14.6],
      [33.6, 16.2],
      [34.6, 22.6],
      [37.5, 27.2],
      [40.3, 27.2],
      [42.4, 29.9],
      [43.9, 30.6],
      [45.5, 26],
      [48, 26],
      [48, 40.9],
      [41, 41.1],
      [35, 41.3],
      [31.6, 37.9],
      [23, 38.8],
      [14.5, 37.7],
      [0, 39.25],
    ],
    it = { street: 6, backalley: 12, lane: 17 },
    Oe = new Set([3, 5, 7, 12, 14, 17]);
  async function Dt(t, a = 0) {
    ((s.beat =
      a >= it.lane
        ? "lane"
        : a >= it.backalley
          ? "backalley"
          : a >= it.street
            ? "street"
            : "ruins"),
      nt(),
      e.audio.loop("vending_hum", { pos: [18.2, 1, 13.4], vol: 0.5 }),
      e.audio.loop("neon_buzz", { pos: [38.9, 3.3, 28.3], vol: 0.45 }));
    const l = k().outside.district.spots,
      i = k().outside.district.burstDoor;
    (k().outside,
      (async () => {
        let w = 0;
        const L = (F) => {
          const G = r().headWorld(new Y()),
            oe = F.kit.chestWorld(new Y()),
            X = oe.clone().sub(G),
            se = X.length();
          return (X.divideScalar(se), !e.combat.raycastWorld(G, X, se));
        };
        for (; !n(t) && s.beat !== "church_in";) {
          (await u(0.12), (w -= 0.12));
          const F = r();
          if (F.grabbed || F.dead || F.workCue) continue;
          let G = null,
            oe = 1e9;
          for (const X of e.zombies.alive()) {
            const se = X.pos.distanceTo(F.pos);
            se < 12 && se < oe && L(X) && ((oe = se), (G = X));
          }
          if (G) {
            F.aimAt(() => G.kit.chestWorld(new Y()));
            const X =
              Math.abs(
                Lt(F.yaw, Math.atan2(G.pos.x - F.pos.x, G.pos.z - F.pos.z)),
              ) < 0.3;
            w <= 0 &&
              X &&
              F.gun.raise > 0.85 &&
              (!F.path || oe < 3.5) &&
              (F.path && oe < 3.5 && F.stop(), F.fire(), (w = M0(0.6, 1)));
          } else s.beat !== "church" && F.lowReady();
        }
      })(),
      (e.zombies.onAkaneHit = null));
    const c = new Set();
    (async () => {
      for (; !n(t) && s.beat !== "church_in";) {
        await u(0.3);
        for (const w of e.zombies.alive())
          !c.has(w) && w.pos.distanceTo(o.pos) < 9 && (c.add(w), Pe(w.pos, 4));
      }
    })();
    const h = (w, L) => {
        (async () => (await u(w), n(t) || L()))();
      },
      m = (w, L = 5) => {
        (async () => (
          await x(() => !r().speaking || n(t), L),
          !n(t) && !r().dead && g(w)
        ))();
      },
      f = (w, L, F = {}) => $(w, L, { state: "emerge", ...F }, t, 8),
      z = new Set();
    (await ae(At.slice(a), {
      run: t,
      speed: 2.15,
      waitDist: 6,
      holdAt: new Set([...Oe].filter((w) => w >= a).map((w) => w - a)),
      onPoint: (w) => {
        const L = w + a;
        if (!z.has(L))
          switch (
            (z.add(L),
            L === it.street && (s.beat = "street"),
            L === it.backalley && (s.beat = "backalley"),
            L === it.lane && (s.beat = "lane"),
            L)
          ) {
            case 1:
              (m("a2_blocked"),
                f("gown", l.alleyAhead),
                h(2.2, () => f("lanky", l.forecourtW)));
              break;
            case 4:
              (h(0.4, () => {
                (i.open(),
                  b("door_burst", { pos: i.pos, vol: 1, reverb: 0.4 }),
                  (e.player.shake += 0.25),
                  e.zombies.spawn("lanky", i.spot[0], i.spot[1], {
                    state: "emerge",
                    yaw: Math.PI,
                  }));
              }),
                h(0.9, () => e.nav.rebuild()),
                h(1.6, () => f("gown", l.alleyDump)));
              break;
            case 6:
              (f("lanky", l.streetBus),
                h(1, () => f("gown", l.streetBus)),
                h(2.4, () => f("lanky", l.streetBus)),
                h(4, () => f("gown", l.streetN)));
              break;
            case 8:
              (m("a2_bus"),
                e.zombies.spawn("gown", l.kitchen[0][0], l.kitchen[0][1], {
                  yaw: l.kitchen[0][2],
                }));
              break;
            case 9:
              m("a2_dark");
              break;
            case 11:
              rt(44, 28) && m("a2_ammo", 3);
              break;
            case 12:
              (rt(44, 28) &&
                h(2.5, () => {
                  rt(44, 28) &&
                    r().distTo(o.pos.x, o.pos.z) < 7 &&
                    m("a2_ammo", 3);
                }),
                h(0.8, () => m("a2_backdoor")));
              break;
            case 13:
              (f("lanky", l.backS),
                h(1.3, () => f("gown", l.backS)),
                h(3.2, () => f("gown", l.backN)));
              break;
            case 14:
              h(1, () => f("lanky", l.passageW));
              break;
            case 15:
              (f("brute", l.streetS),
                h(1.2, () => f("gown", l.streetS)),
                h(2.6, () => f("lanky", l.streetS)));
              break;
            case 16:
              rt(38.35, 43.9) && h(0.5, () => m("a2_ammo", 3));
              break;
            case 17:
              (m("a2_lane"), h(2, () => f("lanky", l.laneE)));
              break;
          }
      },
    }),
      !n(t) && (await Ht(t)));
  }
  async function Ht(t) {
    s.beat = "church";
    const a = k().church,
      l = k().outside.district.spots;
    if (
      (r().lowReady(),
      r().lookAt(null),
      await r().walkTo(0, 39.3, { speed: 1.9, arrive: 0.2 }),
      n(t) || (r().holster(), r().turnTo(0, 41), await u(0.35), n(t)))
    )
      return;
    b("door_pound", { pos: [0, 1.5, 40], vol: 0.9, reverb: 0.6 });
    const i = g("a2_stuck");
    (e.hud.hint("Cover her", 4),
      (async () => (
        await i,
        await u(0.2),
        !n(t) &&
          (await q("s2_cover"),
          await u(0.8),
          !n(t) &&
            rt(4.3, 37.9, 2) &&
            (await x(() => !r().speaking || n(t), 4),
            !n(t) && rt(4.3, 37.9, 2) && g("a2_ammo")))
      ))());
    const c = e.time,
      h = [
        [0.6, "gown", l.squareLane],
        [2, "lanky", l.squareW],
        [3.8, "lanky", l.squareBand],
        [5.4, "gown", l.squareLane],
        [6.8, "brute", l.squareW],
        [8.2, "gown", l.squareBand],
        [9.6, "lanky", l.squareLane],
        [11, "gown", l.squareW],
        [12.4, "lanky", l.squareBand],
      ];
    (async () => {
      for (const [A, N, I] of h) {
        if (
          (await x(() => e.time - c >= A || n(t), 60),
          n(t) ||
            s.flags.doorOpen ||
            (await x(
              () => e.zombies.alive().length < 12 || n(t) || s.flags.doorOpen,
              20,
            ),
            n(t) || s.flags.doorOpen))
        )
          return;
        $(
          N,
          I,
          { state: "emerge", target: "akane" },
          t,
          6,
          () => !s.flags.doorOpen,
        );
      }
    })();
    const m = 14,
      f = 1.3;
    let z = 0,
      w = e.time,
      L = 0,
      F = 0,
      G = !1,
      oe = !1;
    const X = {
        pos: [0, 39.32],
        yaw: 0,
        hold: !0,
        L: [0.3, 1.25, 39.92],
        R: [-0.3, 1.25, 39.92],
        crouch: 0.05,
        lean: 10,
        hop: 0,
      },
      se = () => {
        let A = 99;
        for (const N of e.zombies.alive())
          A = Math.min(A, Math.hypot(N.pos.x - r().pos.x, N.pos.z - r().pos.z));
        return A;
      };
    if (
      (await x(() => {
        if (n(t) || r().dead) return !0;
        const A = Math.min(0.1, e.time - w);
        w = e.time;
        const N = se(),
          I = N < 1.9;
        (N < 4 && !G && de(fe.cover, { cool: 16 }) && (G = !0),
          z > 0.5 && !oe && !r().speaking && ((oe = !0), q("s2_hurry")),
          I || (z = Math.min(1, z + A / m)),
          (F += I ? 0 : A));
        const W = (F % 1.8) / 1.8,
          M = W < 0.22 ? Math.sin((W / 0.22) * Math.PI) : 0;
        !I &&
          W < 0.02 + A / 1.8 &&
          F > 0.5 &&
          ((L = Math.min(0.1, L + 0.01)),
          a.open(L),
          b(Math.random() < 0.5 ? "door_pound" : "bookcase_thud", {
            pos: [0, 1.5, 40],
            vol: 0.8,
            rate: 0.85 + Math.random() * 0.2,
            reverb: 0.6,
          }),
          Math.random() < 0.6 &&
            b("furniture_scrape", {
              pos: [0, 0.3, 40.3],
              vol: 0.45,
              rate: 0.7,
              reverb: 0.5,
            }),
          e.fx.dust({ x: 0, y: 3.2, z: 39.95 }, 1.2, 0.5));
        const D = (f - 0.3) * Math.sin(L * 1.7);
        return (
          (X.L[2] = 39.92 + D),
          (X.R[2] = 39.92 + D),
          (X.pos[1] = 39.32 + D * 0.8),
          (X.lean = 10 + M * 12),
          (X.hop = M * 0.22),
          (X.crouch = 0.05 + M * 0.08),
          I
            ? r().work({ ...X, hold: !1, lean: -6, crouch: 0.1, hop: 0 })
            : r().work(X),
          e.hud.task("Cover her", z, I),
          z >= 1
        );
      }, 90),
      n(t) ||
        r().dead ||
        ((s.flags.doorOpen = !0),
        r().work(null),
        e.hud.task(null),
        b("church_doors", { pos: [0, 2, 40], vol: 1, reverb: 0.6 }),
        await T.during(1.1, (A) => a.open(L + (1 - L) * kt.inout(A))),
        n(t)))
    )
      return;
    (e.nav.rebuild(), (s.beat = "church_in"), g("a2_run"));
    const ue = e.audio.loop?.("horde_moan", { vol: 0 });
    (ue?.fadeTo?.(0.9, 1.5),
      r().lowReady(),
      r().walkTo(0, 45.5, { speed: 2.6, arrive: 0.4 }));
    const Q = [...l.squareLane, ...l.squareW, ...l.squareBand];
    if (
      ((async () => {
        for (let A = 0; A < 12; A++) {
          if (n(t) || s.flags.inside) return;
          ($(
            A % 3 === 0 ? "lanky" : "gown",
            [
              Q[(A * 5) % Q.length],
              Q[(A * 5 + 2) % Q.length],
              Q[(A * 5 + 4) % Q.length],
            ],
            { state: "emerge" },
            t,
            1.2,
            () => !s.flags.inside,
          ),
            await u(0.3));
        }
      })(),
      await x(() => o.pos.z > 41.4 || n(t), 120),
      n(t))
    )
      return;
    ((s.flags.inside = !0), (o.frozen = !0), (e.combat.invuln = 60));
    {
      const A = e.camera,
        N = new _0().setFromQuaternion(A.quaternion, "YXZ"),
        I = A.position.clone(),
        W = Math.max(I.z, 43.4);
      Ft(
        e,
        [
          { t: 0, p: I.toArray(), yaw: N.y / v0, pitch: N.x / v0, fov: A.fov },
          { t: 1.1, p: [I.x * 0.5, I.y, W], look: [0, 1.85, 40], fov: A.fov },
          { t: 6, p: [I.x * 0.4, I.y, W + 1], look: [0, 1.85, 40], fov: A.fov },
        ],
        { ease: "inout" },
      );
    }
    for (const A of e.zombies.alive()) {
      const N = A.pos.z > 40.3,
        I = A.pos.z > 38.4 && Math.abs(A.pos.x) < 1.6;
      if (!(!N && !I)) {
        if (N && ze(A.pos.x, A.pos.z)) {
          (r().aimAt(() => A.kit.chestWorld(new Y())),
            r().fire(),
            A.hit(
              99,
              "chest",
              A.kit.chestWorld(new Y()),
              new Y(0, 0, -1),
              "akane",
            ));
          continue;
        }
        (A.pos.set(Math.max(-1.2, Math.min(1.2, A.pos.x)), 0, 38.3),
          (A.circle.x = A.pos.x),
          (A.circle.z = A.pos.z),
          (A.alertT = 1.3),
          (A.path = null),
          A.sync());
      }
    }
    for (const A of e.zombies.alive()) {
      const N = A.pos.z > 38.2 ? A.pos.z : 38.2 - Math.random() * 0.5;
      ((A.goal = new Y(
        Math.max(-2.4, Math.min(2.4, A.pos.x)) + (Math.random() - 0.5) * 0.5,
        0,
        N,
      )),
        (A.path = null),
        (A.repath = 0));
    }
    (e.audio.duck("amb", 0.2, 6),
      await u(0.45),
      await T.during(0.75, (A) => a.open(1 - kt.inout(A))),
      b("door_slam", { pos: [0, 2, 40], vol: 1, reverb: 0.8 }),
      (e.player.shake += 0.4),
      e.zombies.clear((A) => A.pos.z < 40.2),
      ue?.fadeTo?.(0.25, 1.2));
    const pe = async (A) => {
      (b("door_pound", {
        pos: [0, 1.5, 40],
        vol: A,
        rate: 0.9 + Math.random() * 0.2,
        reverb: 0.7,
      }),
        a.open(-0.04 * A),
        e.fx.dust(
          { x: (Math.random() - 0.5) * 1.8, y: 4.15, z: 40.95 },
          0.9,
          0.5 * A,
        ),
        await u(0.07),
        a.open(-0.015 * A),
        await u(0.07),
        a.open(0));
    };
    for (let A = 0; A < 5; A++) {
      if ((await u(A ? 0.42 + Math.random() * 0.35 : 0.3), n(t))) return;
      await pe(1 - A * 0.12);
    }
    (e.audio.loops.get("amb_ruins")?.stop?.(2),
      ue?.stop?.(3),
      await u(0.5),
      await q("s2_end"),
      !n(t) && (await qt(t, !0)));
  }
  const tt = () => k()?.churchIn,
    Ze = () => k()?.forest,
    _ = () => k()?.house,
    re = () => tt()?.points || {},
    ie = (...t) => t.find((a) => $0[a]) || "lanky",
    Le = (t, a, l) => {
      (async () => (await u(a), n(t) || l()))();
    },
    Pt = () => {
      const t = e.camera,
        a = new _0().setFromQuaternion(t.quaternion, "YXZ");
      ((e.camCtl = null),
        o.place(t.position.x, t.position.z, a.y, a.x, o.eye, 0),
        (o.frozen = !1));
    },
    Ke = () => {
      const t = e.camera,
        a = new _0().setFromQuaternion(t.quaternion, "YXZ");
      return {
        t: 0,
        p: t.position.toArray(),
        yaw: a.y / v0,
        pitch: a.x / v0,
        fov: t.fov,
      };
    },
    v = (() => {
      if (!$0.priest) return null;
      let t = null;
      try {
        t = Po(e.makeCtx(), { kind: "priest", seed: 5 });
      } catch (i) {
        return (console.warn("[script2] no priest:", i.message), null);
      }
      ((t.root.visible = !1), (t.root.name = "priest"), e.scene.add(t.root));
      const a = { z: t, talking: !1, look: null, yawTw: null, walk: null };
      ((a.setLook = (i) => {
        ((a.look = i), i || t.lookAt?.(null));
      }),
        (a.place = (i, c, h) => {
          (t.root.position.set(i, 0, c),
            (t.root.rotation.y = h),
            (a.walk = null),
            (a.yawTw = null),
            (a.rising = !1));
        }),
        (a.kneelAt = (i, c, h) =>
          a.place(i + Math.sin(h) * 0.38, c + Math.cos(h) * 0.38, h)),
        (a.rise = () => {
          ((a.riseYaw0 = t.root.rotation.y),
            (a.rising = !0),
            (a.yawTw = null),
            t.setState("rise"));
        }),
        (a.head = (i = new Y()) =>
          t.headWorld
            ? t.headWorld(i)
            : i.set(t.root.position.x, 1.6, t.root.position.z)),
        (a.turn = (i, c, h) => {
          a.yawTw = {
            from: t.root.rotation.y,
            to: i,
            t0: e.time + c,
            t1: e.time + h,
          };
        }),
        (a.walkTo = (i, c) =>
          new Promise((h) => {
            (t.setState("walk"), (a.walk = { to: [i, c], done: h }));
          })),
        (a.solid = (i) => {
          const c = e.world.circles;
          if (
            (i &&
              !a.circle &&
              ((a.circle = {
                x: t.root.position.x,
                z: t.root.position.z,
                r: 0.32,
              }),
              c.push(a.circle)),
            !i && a.circle)
          ) {
            const h = c.indexOf(a.circle);
            (h >= 0 && c.splice(h, 1), (a.circle = null));
          }
        }));
      const l = new Y();
      return (
        e.updaters.push((i) => {
          if (t.root.visible) {
            if (
              (t.setMouth?.(
                a.talking ? Math.min(1, e.audio.voiceLevel * 2.7) : 0,
              ),
              a.look &&
                t.lookAt?.(typeof a.look == "function" ? a.look(l) : a.look),
              a.yawTw)
            ) {
              const c = a.yawTw,
                h = Math.min(
                  1,
                  Math.max(0, (e.time - c.t0) / Math.max(0.001, c.t1 - c.t0)),
                );
              ((t.root.rotation.y = c.from + Lt(c.from, c.to) * kt.smooth(h)),
                h >= 1 && (a.yawTw = null));
            }
            if (a.walk) {
              const c = t.root,
                h = a.walk.to[0] - c.position.x,
                m = a.walk.to[1] - c.position.z,
                f = Math.hypot(h, m);
              if (f < 0.06) {
                const z = a.walk.done;
                ((a.walk = null), t.setState("stand"), z());
              } else {
                c.rotation.y +=
                  Lt(c.rotation.y, Math.atan2(h, m)) * Math.min(1, i * 7);
                const z = Math.min(
                  f / Math.max(i, 0.001),
                  t.groundSpeed || 1.05,
                );
                ((c.position.x += Math.sin(c.rotation.y) * z * i),
                  (c.position.z += Math.cos(c.rotation.y) * z * i));
              }
            }
            (t.update(i, { speed: 1 }),
              a.circle &&
                ((a.circle.x = t.root.position.x),
                (a.circle.z = t.root.position.z)),
              a.rising &&
                ((t.root.rotation.y = a.riseYaw0 + (t.riseTurn || 0)),
                t.state !== "rise" &&
                  ((a.rising = !1),
                  (t.root.rotation.y = a.riseYaw0 - Math.PI))));
          }
        }),
        e.prepares.push((i) => {
          t.root.visible && t.prepare(i);
        }),
        (t.onEvent = (i) => {
          const c = t.root.position;
          i === "thud"
            ? b("body_fall_stone", {
                pos: [c.x, 0.3, c.z],
                vol: 0.9,
                reverb: 0.4,
              })
            : i === "step" &&
              (t.state === "walk" || t.state === "flinch") &&
              b("step_stone_" + (1 + Math.floor(Math.random() * 4)), {
                pos: [c.x, 0.05, c.z],
                vol: 0.35,
                ref: 1.5,
              });
        }),
        a
      );
    })();
  async function wt(t, { hold: a = 0.25, vol: l } = {}) {
    const i = e.audio.manifest[t],
      c = (i?.text || "").replace(/^\[[^\]]*\]\s*/, "");
    c && e.hud.subtitle(c, (i?.dur ?? 2.5) + 0.3, "PRIEST");
    const h = v ? v.head() : new Y(0, 1.6, 57);
    v && (v.talking = !0);
    try {
      await e.audio.voice(t, {
        pos: [h.x, h.y, h.z],
        ref: 2.4,
        rolloff: 0.8,
        reverb: 0.45,
        vol: l ?? 1,
        onHandle: (m) => {
          s.prVoice = m;
        },
      });
    } finally {
      (v && (v.talking = !1), (s.prVoice = null));
    }
    await u(a);
  }
  const a0 = (t = 0.06) => {
      (s.prVoice?.stop?.(t), (s.prVoice = null), v && (v.talking = !1));
    },
    K = { k: 0, want: 0, t: 0, was: !1, spike: 0, beatT: 0 },
    s0 = { t0: null },
    ht = (t) => {
      const a = t.getChannelData(0),
        l = Math.floor(t.sampleRate * 0.01),
        i = [];
      for (let h = 0; h + l < a.length; h += l) {
        let m = 0;
        for (let f = 0; f < l; f += 2) m += a[h + f] * a[h + f];
        i.push(m);
      }
      let c = 0;
      for (const h of i) c = Math.max(c, h);
      for (let h = 1; h < i.length; h++) if (i[h] > c * 0.3) return h * 0.01;
      return 0;
    },
    ft = (t) => {
      const a = e.audio,
        l = a.ctx,
        i = a.buffers.get("heartbeat_sick");
      if (!l || !i) {
        i === void 0 && l && a.buffer("heartbeat_sick");
        return;
      }
      s0.t0 == null && (s0.t0 = ht(i));
      const c = l.createBufferSource();
      c.buffer = i;
      const h = l.createGain(),
        m = t * (i._norm ?? 1),
        f = l.currentTime,
        z = 0.55;
      (h.gain.setValueAtTime(m, f),
        h.gain.setValueAtTime(m, f + z - 0.12),
        h.gain.linearRampToValueAtTime(0, f + z),
        c.connect(h),
        h.connect(a.bus.sfx),
        c.start(f, Math.max(0, s0.t0 - 0.03), z),
        (c.onended = () => {
          try {
            h.disconnect();
          } catch {}
        }));
    };
  e.updaters.push((t) => {
    if (
      ((K.k += (K.want - K.k) * Math.min(1, t * 0.35)),
      K.k < 0.01 && K.want === 0)
    ) {
      K.was &&
        ((K.was = !1),
        (e.post.blur = 0),
        (e.post.ca = 0.0016),
        (o.lean -= K.lean || 0),
        (K.lean = 0));
      return;
    }
    ((K.was = !0), (K.t += t));
    const a = 0.5 + 0.5 * Math.sin(K.t * 0.83) * Math.sin(K.t * 0.31 + 1.3),
      l = a * a;
    (e.camCtl || (e.post.blur = K.k * (0.05 + 0.2 * l)),
      (e.post.ca = 0.0016 + K.k * 0.0045 * a));
    const i = o.frozen ? 0 : K.k * 0.035 * Math.sin(K.t * 0.57);
    ((o.lean += i - (K.lean || 0)),
      (K.lean = i),
      o.frozen || (o.yaw += Math.sin(K.t * 0.71) * K.k * 9e-4));
    const c = St.want,
      h = (c.bpm || 62 + 44 * K.k) + 42 * K.spike;
    ((K.beatT -= t),
      K.beatT <= 0 &&
        ((K.beatT = 60 / h),
        ft(0.1 + 0.42 * K.k * (0.6 + 0.4 * a) + 0.25 * K.spike),
        typeof e.post.pulse == "number" &&
          (e.post.pulse = Math.max(
            e.post.pulse,
            Math.min(1, (c.beat || 0.2 + 0.55 * K.k * K.k) + 0.45 * K.spike),
          ))));
  });
  {
    let t = 0;
    e.updaters.push((a) => {
      if (((t -= a), t > 0)) return;
      t = 1;
      const l = e.zombies.list.filter((c) => c.dead && c.deadT > 5);
      if (l.length <= 10) return;
      l.sort((c, h) => h.deadT - c.deadT);
      const i = new Set(
        l.slice(0, l.length - 10).filter((c) => !ze(c.pos.x, c.pos.z)),
      );
      i.size && e.zombies.clear((c) => i.has(c));
    });
  }
  function Gt(t, a, { stopFor: l = 3.5, range: i = 12 } = {}) {
    (async () => {
      let c = 0;
      const h = (m) => {
        const f = r().headWorld(new Y()),
          z = m.kit.chestWorld(new Y()),
          w = z.clone().sub(f),
          L = w.length();
        return (w.divideScalar(L), !e.combat.raycastWorld(f, w, L));
      };
      for (; !n(t) && a();) {
        (await u(0.12), (c -= 0.12));
        const m = r();
        if (m.grabbed || m.dead || m.workCue) continue;
        let f = null,
          z = 1e9;
        for (const w of e.zombies.alive()) {
          const L = w.pos.distanceTo(m.pos);
          L < i && L < z && h(w) && ((z = L), (f = w));
        }
        if (f) {
          m.aimAt(() => f.kit.chestWorld(new Y()));
          const w =
            Math.abs(
              Lt(m.yaw, Math.atan2(f.pos.x - m.pos.x, f.pos.z - m.pos.z)),
            ) < 0.3;
          c <= 0 &&
            w &&
            m.gun.raise > 0.85 &&
            (!m.path || z < l) &&
            (m.path && z < l && m.stop(), m.fire(), (c = M0(0.6, 1)));
        } else m.lowReady();
      }
    })();
  }
  function n0(t) {
    const a = k().church,
      l = { on: !0, jolt: 0, heat: 0, pause: !1 },
      i = async (c) => {
        (b("door_pound", {
          pos: [0, 1.5, 40],
          vol: c,
          rate: 0.85 + Math.random() * 0.25,
          reverb: 0.75,
        }),
          Math.random() < 0.35 &&
            b(Math.random() < 0.5 ? "zombie_groan_1" : "zombie_groan_3", {
              pos: [(Math.random() - 0.5) * 3, 1.5, 38.5],
              vol: 0.35 * c,
              reverb: 0.5,
            }),
          a.open(-0.04 * c),
          e.fx.dust(
            { x: (Math.random() - 0.5) * 1.8, y: 4.15, z: 40.95 },
            0.9,
            0.5 * c,
          ),
          (l.jolt = Math.max(l.jolt, c)),
          await u(0.07),
          l.on && a.open(-0.015 * c),
          await u(0.07),
          l.on && a.open(0));
      };
    return (
      (async () => {
        for (; l.on && !n(t);) {
          if (
            (await u(
              Math.max(0.7, 3 - l.heat * 2.2) * (0.6 + Math.random() * 0.8),
            ),
            !l.on || n(t))
          )
            return;
          if (l.pause) continue;
          const c = Math.random() < 0.35 ? 3 : Math.random() < 0.5 ? 2 : 1;
          for (let h = 0; h < c && l.on && !l.pause; h++)
            (await i(Math.min(1.1, 0.5 + Math.random() * 0.3 + l.heat * 0.35)),
              await u(0.22 + Math.random() * 0.2));
        }
      })(),
      (l.stop = () => {
        l.on = !1;
      }),
      l
    );
  }
  function r0(t, a) {
    const l = re().akaneHold || [0, 41.45, Math.PI],
      i = l[2] ?? Math.PI,
      c = Math.sin(i),
      h = Math.cos(i),
      m = -h,
      f = c,
      z = (L, F) => [
        l[0] + c * 0.55 + m * L * 0.3,
        F,
        l[1] + h * 0.55 + f * L * 0.3,
      ],
      w = {
        pos: [l[0], l[1]],
        yaw: i,
        hold: !0,
        L: z(-1, 1.32),
        R: z(1, 1.08),
        crouch: 0.1,
        lean: 16,
        hop: 0,
      };
    (r().holster(),
      r().lookAt(null),
      r().work(w),
      (async () => {
        let L = e.time;
        await x(() => {
          if (!a.on || n(t)) return !0;
          const F = Math.min(0.1, e.time - L);
          return (
            (L = e.time),
            (a.jolt = Math.max(0, a.jolt - F * 3.2)),
            (w.lean = 16 - 12 * a.jolt),
            (w.crouch = 0.1 + 0.07 * a.jolt),
            !1
          );
        }, 3600);
      })());
  }
  async function qt(t, a = !1) {
    s.beat = "nave";
    const l = re(),
      i = l.priest || [0, 57.3, 0],
      c = l.approach || [0, 52.6];
    l.reveal;
    const h = l.akaneHold || [0, 41.45, Math.PI];
    (e.audio.loop("amb_church", { vol: 0 }).fadeTo(0.55, 3),
      e.audio
        .loop("horde_moan", { pos: [0, 1.5, 35.5], vol: 0 })
        ?.fadeTo?.(0.28, 2));
    const m = e.weapons;
    ((m.has.pistol = !1),
      (m.gunRoot.visible = !1),
      (m.on = !0),
      (o.speedMul = 0.72));
    const f = n0(t);
    if (
      ((s.siege = f),
      v &&
        (v.kneelAt(i[0], i[1], i[2] ?? 0),
        (v.z.root.visible = !0),
        v.z.setState("pray", { instant: !0 }),
        v.setLook(null)),
      (s.murmur = e.audio.loop("priest_murmur", {
        pos: [i[0], 0.95, i[1]],
        vol: 0,
      })),
      s.murmur?.fadeTo?.(0.85, 2),
      (a &&
        (Pt(),
        await r().walkTo(h[0], h[1] + 0.3, { speed: 2.4, arrive: 0.2 }),
        n(t))) ||
        (r0(t, f), await u(0.4), n(t)))
    )
      return;
    g("a3_hold2", { emote: "scared" });
    const z = e.audio.loop("heartbeat", { vol: 0 });
    s.naveHeart = z;
    const w = () => Math.hypot(o.pos.x - i[0], o.pos.z - i[1]),
      L = Math.max(3.2, Math.hypot(c[0] - i[0], c[1] - i[1]));
    let F = e.time;
    (await x(() => {
      if (n(t)) return !0;
      const G = w();
      return (
        z?.fadeTo?.(Math.max(0, Math.min(1, (15 - G) / 10)) * 0.7, 0.4),
        (f.heat = Math.min(0.6, f.heat + 0.0015)),
        e.time - F > 24 &&
          G > 9 &&
          !r().speaking &&
          ((F = e.time), g("a3_go2", { emote: "scared" })),
        G < L || o.pos.z > c[1]
      );
    }, 3600),
      !n(t) && (await b0(t)));
  }
  const Zt = { sat: 0.78 / 1.05, exposure: 1.08 / 1.28 };
  async function b0(t) {
    const a = re(),
      l = a.priest || [0, 57.3, 0],
      i = a.reveal || [0.15, 55.9],
      c = s.siege;
    ((o.frozen = !0),
      (e.combat.invuln = 120),
      (e.post.aoRadius = 0.22),
      (e.lookMul.sat ??= 1),
      (e.lookMul.exposure ??= 1),
      T.tween(e.lookMul, "sat", Zt.sat, 3.5, "inout"),
      T.tween(e.lookMul, "exposure", Zt.exposure, 3.5, "inout"));
    const h = [l[0], 1.02, l[1]],
      m = Ke();
    if (
      (Ft(
        e,
        [
          m,
          {
            t: 4.8,
            p: [i[0], 1.6, i[1]],
            look: [h[0] + 0.05, h[1] - 0.05, h[2]],
            fov: m.fov - 8,
          },
        ],
        { ease: "inout" },
      ),
      s.naveHeart?.fadeTo?.(0.85, 1.5),
      await u(2.6),
      n(t) ||
        (c && (c.pause = !0), await u(0.9), n(t)) ||
        (s.murmur?.fadeTo?.(0, 0.35),
        v?.z.setState("still"),
        await u(2.2),
        n(t)) ||
        (v &&
          (v.setLook((z) => z.copy(e.camera.position)),
          v.z.setState("look_back")),
        await u(0.85),
        n(t)) ||
        (b("piano_low_note", { vol: 0.55, reverb: 0.8 }),
        s.naveHeart?.fadeTo?.(0.3, 2.5),
        await u(0.9),
        n(t)) ||
        (await wt("p_easy"), n(t)))
    )
      return;
    v &&
      (v.rise(),
      b("cassock_rustle_rise", { pos: [l[0], 0.8, l[1]], vol: 0.7 }));
    {
      const z = Ke();
      Ft(
        e,
        [
          z,
          {
            t: 2.4,
            p: [i[0], 1.6, i[1] - 0.45],
            look: [l[0], 1.5, l[1] + 0.38],
            fov: z.fov + 4,
          },
        ],
        { ease: "inout" },
      );
    }
    if (
      (await u(2.5),
      n(t) ||
        (v &&
          (v.z.setState("talk"), v.setLook((z) => z.copy(e.camera.position))),
        s.naveHeart?.stop?.(2),
        (s.naveHeart = null),
        Pt(),
        (o.speedMul = 0),
        (e.combat.invuln = 120),
        c && ((c.pause = !1), (c.heat = Math.max(c.heat, 0.5))),
        await u(0.25),
        n(t)) ||
        (await q("s3_out"), n(t)) ||
        (v && v.setLook(new Y(4.25, 1.5, 61)),
        await wt("p_back2", { hold: 0.3 }),
        n(t)) ||
        (v && v.setLook((z) => z.copy(e.camera.position)),
        await q("s3_move"),
        n(t)) ||
        (c && (c.heat = Math.max(c.heat, 0.85)), await u(0.4), n(t)) ||
        (await wt("p_save", { hold: 0.7 }), n(t)) ||
        (await q("s3_name"), n(t)) ||
        (c && (c.pause = !0), await u(0.35), n(t)))
    )
      return;
    let f = !1;
    if (v) {
      v.setLook((w) => w.copy(e.camera.position));
      const z = v.z.onEvent;
      ((v.z.onEvent = (w, L) => {
        (w === "strange" && L === "held" && (f = !0), z?.(w, L));
      }),
        R("strange", "still"),
        Le(t, 4, () => {
          v.z.onEvent !== z && (v.z.onEvent = z);
        }));
    }
    {
      const z = Ke(),
        w = v ? v.head() : new Y(0, 1.6, 57.3),
        L = z.p[0] - w.x,
        F = z.p[2] - w.z,
        G = Math.hypot(L, F) || 1;
      Ft(
        e,
        [
          z,
          {
            t: 3,
            p: [w.x + (L / G) * 1, w.y + 0.02, w.z + (F / G) * 1],
            look: [w.x, w.y - 0.02, w.z],
            fov: 40,
          },
        ],
        { ease: "inout" },
      );
    }
    ((e.weapons.torchMul ??= 1),
      T.tween(e.weapons, "torchMul", 0.12, 1.6, "inout"),
      (e.lookMul.sat ??= 1),
      T.tween(e.lookMul, "sat", Zt.sat * 0.85, 2.2, "inout"),
      b("piano_low_note", { vol: 0.45, reverb: 0.85, rate: 0.8 }),
      Le(t, 1.2, () =>
        b("whisper_creepy", {
          pos: v ? v.head().toArray() : [0, 1.6, 57],
          vol: 0.22,
        }),
      ),
      await x(() => n(t) || f, 3.4),
      !n(t) &&
        (await u(0.7),
        !n(t) &&
          (T.tween(e.lookMul, "sat", 1, 1.2, "out"),
          T.tween(e.lookMul, "exposure", 1, 1.2, "out"),
          T.tween(e.weapons, "torchMul", 1, 0.5, "out"),
          await Ne(t, !0))));
  }
  const R = (t, a = "stand", l) => {
      v && v.z.setState(So.includes(t) ? t : a, l);
    },
    V = {
      pos: v ? v.z.root.position : new Y(0, 0, 57.3),
      hurt: (t) => s.onPriestHit?.(t),
    },
    j = () => !!s.pr?.down,
    xe = [
      [-3, 38.3, 0.45],
      [3, 38.3, -0.45],
      [-2.3, 37.3, 0.3],
      [2.3, 37.3, -0.3],
      [0, 36.6, 0],
      [-1.3, 36.2, 0.15],
      [1.3, 36.2, -0.15],
      [-3.6, 36.9, 0.6],
      [3.6, 36.9, -0.6],
    ],
    Be = () => {
      const t = xe.slice();
      for (let a = t.length - 1; a > 0; a--) {
        const l = Math.floor(Math.random() * (a + 1));
        [t[a], t[l]] = [t[l], t[a]];
      }
      return t;
    },
    Ve = {
      west: [
        [-2.6, 41.9],
        [-3.9, 42.8],
        [-4.75, 45.2],
        [-5, 48],
      ],
      centre: [
        [0, 43.6],
        [0, 46.8],
      ],
      east: [
        [2.1, 42.5],
        [4.5, 43.2],
        [4.75, 45.4],
        [4.8, 48.2],
      ],
    },
    be = (t) => {
      const a = Math.random();
      return t === "akane"
        ? a < 0.7
          ? "east"
          : "centre"
        : t && typeof t == "object"
          ? a < 0.38
            ? "west"
            : a < 0.72
              ? "centre"
              : "east"
          : a < 0.34
            ? "west"
            : a < 0.66
              ? "east"
              : "centre";
    },
    Me = (t, a) => {
      if (!t || t.dead) return t;
      if (
        ((t._route = Ve[be(a)].map((l) => [
          l[0] + (Math.random() - 0.5) * 0.4,
          l[1] + (Math.random() - 0.5) * 0.3,
        ])),
        (t._routeTgt = a ?? t.forceTarget),
        (t.goal = new Y(t._route[0][0], 0, t._route[0][1])),
        (t.path = null),
        (t.repath = 0),
        s._aisles !== s.run)
      ) {
        const l = s.run;
        ((s._aisles = l),
          (async () => {
            for (; !n(l) && !s.flags.out;) {
              await u(0.2);
              for (const i of e.zombies.alive()) {
                if (!i._route || i.air) continue;
                const c = i._route[0];
                if (!(Math.hypot(c[0] - i.pos.x, c[1] - i.pos.z) > 1))
                  if ((i._route.shift(), i._route.length))
                    (i.goal.set(i._route[0][0], 0, i._route[0][1]),
                      (i.path = null),
                      (i.repath = 0));
                  else {
                    const h =
                      i._routeTgt === V && j()
                        ? Math.random() < 0.7
                          ? "player"
                          : "akane"
                        : i._routeTgt;
                    ((i._route = null),
                      (i.goal = null),
                      h && (i.forceTarget = h),
                      (i.path = null),
                      (i.repath = 0));
                  }
              }
            }
            s._aisles === l && (s._aisles = null);
          })());
      }
      return t;
    };
  async function Ne(t, a = !1) {
    s.beat = "burst";
    const l = k().church,
      i = tt();
    re().priest;
    let h = s.siege;
    if (
      !a &&
      (e.audio.loop("amb_church", { vol: 0.5 }),
      e.audio.loop("horde_moan", { pos: [0, 1.5, 35.5], vol: 0.3 }),
      (h = n0(t)),
      (s.siege = h),
      (h.heat = 0.8),
      r0(t, h),
      v &&
        ((v.z.root.visible = !0),
        v.z.setState("talk"),
        v.setLook((f) => f.copy(e.camera.position))),
      (e.weapons.has.pistol = !1),
      (e.weapons.gunRoot.visible = !1),
      (o.speedMul = 0),
      await u(1.6),
      n(t))
    )
      return;
    (i?.barricade?.reset?.(),
      i?.window?.reset?.(),
      (s.flags.window = !1),
      h?.stop());
    {
      const f = re().akaneHold || [0, 41.45, Math.PI];
      if (
        (b("door_pound", {
          pos: [0, 1.5, 40],
          vol: 1.15,
          rate: 0.8,
          reverb: 0.8,
        }),
        l.open(-0.08),
        e.fx.dust({ x: 0, y: 4.1, z: 40.95 }, 1.2, 0.8),
        r().work({
          pos: [f[0] + 0.5, f[1] + 1.6],
          yaw: f[2] ?? Math.PI,
          hold: !1,
          lean: -14,
          crouch: 0.2,
          hop: 0,
        }),
        r().scare(0.9),
        await u(0.42),
        n(t))
      )
        return;
      (l.open(0), r().work(null));
    }
    (b("church_doors_burst", { pos: [0, 2, 40.5], vol: 1.1, reverb: 0.8 }),
      b("wood_break", { pos: [0, 1.5, 40.5], vol: 0.9, reverb: 0.6 }),
      (e.player.shake += 0.55),
      i?.candles?.gust?.(1),
      (async () => (
        await T.during(0.6, (f) => (l.burst ? l.burst(f) : l.open(kt.out(f)))),
        e.nav.rebuild()
      ))(),
      e.fx.dust({ x: 0, y: 3.8, z: 41.2 }, 2.2, 1),
      e.audio
        .loop("horde_moan", { pos: [0, 1.5, 38], vol: 0.3 })
        ?.fadeTo?.(0.95, 1.2),
      r().scare(1.1),
      r().emote("scream", 3));
    {
      const f = Ke();
      Ft(e, [f, { t: 0.5, p: f.p, look: [0, 1.8, 42.5], fov: 72 }], {
        ease: "out",
      });
    }
    ((e.combat.invuln = 0),
      (async () => {
        await u(0.3);
        const f = [ie("nun", "gown"), "lanky", ie("nun", "gown"), "gown"],
          z = [V, "player", "player", "akane"];
        for (let w = 0; w < f.length; w++) {
          if (n(t)) return;
          const L = await $(f[w], Be(), { alerted: !0, target: z[w] }, t, 1);
          (L && ((L.calmT = 1.8), (L.rushed = !1), Me(L, z[w])),
            await u(0.35 + Math.random() * 0.2));
        }
      })(),
      g("a3_in", { emote: "scream" }),
      Gt(t, () => s.beat === "burst" && !r().workCue && !s.flags.backOpen, {
        stopFor: 1.6,
      }),
      v && (v.setLook(null), v.z.setState("face"), v.turn(Math.PI, 0, 0.8)),
      await u(1.5),
      !n(t) &&
        (Pt(),
        e.weapons.give("pistol"),
        (o.speedMul = 1),
        (e.post.aoRadius = 0.55),
        (e.weapons.ammo = e.weapons.mag),
        (e.weapons.reserve = Math.max(e.weapons.reserve, 156)),
        await ye(t)));
  }
  function Ee(t) {
    const a = (s.pr = { hits: 0, last: -9, down: !1 });
    return (
      (s.flags.lights = !1),
      (s.onPriestHit = (l) => {
        if (a.down || e.time - a.last < 0.5) return;
        if (((a.last = e.time), a.hits++, a.hits >= 3)) {
          Ce(t, l);
          return;
        }
        R("flinch", "face", { side: Math.random() < 0.5 ? -1 : 1 });
        const i = [V.pos.x, 1.5, V.pos.z];
        a.hits === 1
          ? v?.talking
            ? b("priest_gasp", { pos: i, vol: 0.9 })
            : wt("p_cry", { hold: 0 })
          : (v?.talking
              ? b("priest_gasp", { pos: i, vol: 1 })
              : wt("p_getback", { hold: 0 }),
            Le(t, 0.45, () => q("s3_father")));
      }),
      a
    );
  }
  function Ce(t, a) {
    const l = s.pr;
    if (
      !l ||
      l.down ||
      ((l.down = !0), (s.flags.priestDown = !0), (s.onPriestHit = null), !v)
    )
      return;
    const i = v.z.root.position.clone(),
      c = new Y(i.x, 0, Math.min(i.z, 57.25));
    (v.solid(!1),
      v.setLook(null),
      (v.walk = null),
      a0(0.12),
      (s.flags.pleading = !1),
      R("grabbed", "face"));
    const h =
      c.z > 56.4
        ? Math.PI / 2
        : Math.abs(c.x) < 1.3
          ? Math.PI
          : v.z.root.rotation.y;
    (v.turn(h, 0, 0.7),
      T.during(0.7, (w) => v.z.root.position.lerpVectors(i, c, kt.inout(w))),
      b("priest_struggle", { pos: [c.x, 1.4, c.z], vol: 1, reverb: 0.4 }));
    const m = [
        [0.95, -0.5],
        [0.9, -1.35],
        [-0.6, 0.1],
      ].map(([w, L]) => [
        w * Math.cos(h) + L * Math.sin(h),
        -w * Math.sin(h) + L * Math.cos(h),
      ]),
      f = e.zombies
        .alive()
        .filter((w) => w !== a && w.pos.distanceTo(c) < 3.2)
        .sort((w, L) => w.pos.distanceTo(c) - L.pos.distanceTo(c)),
      z = [...(a && !a.dead ? [a] : []), ...f].slice(0, 3);
    for (const w of e.zombies.alive())
      !z.includes(w) &&
        w.forceTarget === V &&
        ((w.forceTarget = Math.random() < 0.7 ? "player" : "akane"),
        (w.path = null),
        (w.repath = 0));
    (z.forEach((w, L) => {
      ((w.forceTarget = null),
        (w._feed = new Y(c.x + m[L][0], 0, c.z + m[L][1])),
        (w.goal = w._feed.clone()),
        (w.path = null),
        (w.repath = 0),
        (w.calmT = 0));
    }),
      (async () => {
        for (; !n(t) && !s.flags.out;) {
          for (const w of z)
            w.dead ||
              !w._feed ||
              (w.state !== "grab" &&
                Math.hypot(w._feed.x - w.pos.x, w._feed.z - w.pos.z) < 0.45 &&
                ((w.state = "grab"),
                (w.goal = null),
                (w.path = null),
                (w.yaw = Math.atan2(
                  c.x - 0.6 * Math.sin(h) - w.pos.x,
                  c.z - 0.6 * Math.cos(h) - w.pos.z,
                )),
                w.sync()),
              w.state === "grab" && w.kit.setState("attack"));
          await u(0.85);
        }
      })(),
      Le(t, 1.1, () => {
        (R("taken", "face"),
          Le(t, 0.9, () =>
            b("crowd_pile", { pos: [c.x, 0.8, c.z], vol: 1, reverb: 0.5 }),
          ),
          s.flags.out || q("s3_no"),
          Le(t, 3.2, () => {
            s.flags.out || ((s.flags.lights = !0), wt("p_last", { hold: 0 }));
          }));
      }));
  }
  async function ot(t) {
    if (((s.flags.pleading = !0), await q("s3_come"), n(t) || j())) {
      s.flags.pleading = !1;
      return;
    }
    if (
      (v && (R("refuse", "stand"), v.setLook((a) => a.copy(e.camera.position))),
      await wt("p_home", { hold: 0.25 }),
      n(t) || j())
    ) {
      s.flags.pleading = !1;
      return;
    }
    (v && (v.setLook(null), v.turn(Math.PI, 0, 0.4), R("shield", "face")),
      (s.flags.lights = !0),
      await wt("p_go", { hold: 0 }),
      (s.flags.pleading = !1));
  }
  async function ye(t) {
    s.beat = "burst";
    const a = tt(),
      l = a?.barricade,
      i = re(),
      c = i.priest || [0, 57.3, 0],
      h = i.backIn || [4.25, 59.8];
    if (!l) {
      console.warn("[script2] no barricade");
      return;
    }
    const m = [c[0], c[1] + 0.05];
    v &&
      (Math.hypot(v.z.root.position.x - m[0], v.z.root.position.z - m[1]) >
        0.5 && v.place(m[0], m[1], Math.PI),
      v.solid(!0));
    const f = Ee(t);
    (R("pray_stand", "face"),
      e.hud.hint("Protect the priest", 5),
      e.audio.loop("choir_dread", { vol: 0 })?.fadeTo?.(0.42, 6),
      (async () => {
        r().lowReady();
        const me = l.cue(0);
        (await r().walkTo(Math.min(5.2, h[0] + 0.6), 52.5, {
          speed: 3.8,
          arrive: 0.5,
        }),
          !n(t) &&
            (await r().walkTo(me.pos[0], me.pos[1], {
              speed: 3.4,
              arrive: 0.25,
            }),
            !n(t) && (s.flags.atBarricade = !0)));
      })(),
      Le(t, 2.2, () => {
        f.down || q("s3_stay");
      }));
    const z = [
        ie("nun", "gown"),
        "lanky",
        "gown",
        ie("soldier", "lanky"),
        ie("nun", "gown"),
        "lanky",
        "gown",
        ie("nun", "gown"),
        "brute",
        ie("soldier", "lanky"),
        "gown",
        ie("nun", "gown"),
        "lanky",
        ie("soldier", "lanky"),
        "gown",
        ie("nun", "gown"),
        "lanky",
        "gown",
        ie("nun", "gown"),
        ie("soldier", "lanky"),
        "lanky",
        "gown",
      ],
      w = [
        V,
        "player",
        V,
        "player",
        V,
        "akane",
        V,
        "player",
        V,
        "player",
        V,
        "akane",
      ];
    let L = 0,
      F = e.time + 3.2;
    const G = [0, 0.22, 0.5, 0.67, 0.84, 1],
      oe = 25;
    let X = 0,
      se = e.time,
      ue = 0,
      Q = -1,
      pe = new Set(),
      A = 0,
      N = -9,
      I = 0,
      W = !1;
    const M = (me) => {
      for (let $e = 0; $e < 5; $e++) if (me < G[$e + 1]) return $e;
      return 4;
    };
    let D = null;
    const H = () => {
        let me = 99;
        D = null;
        for (const $e of e.zombies.alive()) {
          const jt = Math.hypot($e.pos.x - r().pos.x, $e.pos.z - r().pos.z);
          jt < me && ((me = jt), (D = $e));
        }
        return me;
      },
      C = [
        ["p_pray1", 5],
        ["p_pray2", 17],
        ["p_pray3", 29],
      ],
      ce = e.time;
    if (
      (await x(() => {
        if (n(t) || r().dead) return !0;
        const me = Math.min(0.1, e.time - se);
        se = e.time;
        const $e = f.down ? "Cover Akane" : "Protect the priest",
          jt = e.zombies.alive().length,
          d0 = X < 0.3 ? 6 : X < 0.7 ? 7 : 8;
        if (e.time >= F && jt < d0 && L < z.length) {
          const De = z[L],
            mt = f.down ? (L % 3 === 2 ? "akane" : "player") : w[L % w.length];
          (L++,
            $(De, Be(), { alerted: !0, target: mt }, t, 1.5).then((Wt) => {
              (Wt &&
                Math.random() < 0.4 &&
                ((Wt.calmT = 1.2), (Wt.rushed = !1)),
                Me(Wt, mt));
            }));
          const Ge = pe.has("window") ? 1 : 1.25;
          F =
            e.time +
            (X < 0.3 ? 2.6 : X < 0.7 ? 2 : 1.6) *
              (0.8 + Math.random() * 0.4) *
              Ge;
        }
        if (v && !f.down) {
          const De = e.zombies
              .alive()
              .some((Ge) => Ge.pos.distanceTo(V.pos) < 1.6),
            mt = v.z.state;
          (De && mt === "pray_stand" && R("shield", "face"),
            !De && mt === "shield" && R("pray_stand", "face"));
          for (const Ge of C)
            !pe.has(Ge[0]) &&
              e.time - ce > Ge[1] &&
              !v.talking &&
              (pe.add(Ge[0]), wt(Ge[0], { hold: 0 }));
        }
        if (!s.flags.atBarricade) return (e.hud.task($e, 0, !1), !1);
        pe.has("blocked") ||
          (pe.add("blocked"),
          g("a3_blocked", { emote: "scream" }),
          le.set("v_cover2", e.time));
        const y0 = H(),
          Ct = y0 < 2.3;
        if (
          (Ct && e.time - N > 6 && de(fe.cover, { cool: 16 }) && (N = e.time),
          Ct && D)
        ) {
          const De = D;
          (r().work(null),
            r().aimAt(() => De.kit.chestWorld(new Y())),
            (W = !0));
          const mt =
            Math.abs(
              Lt(
                r().yaw,
                Math.atan2(De.pos.x - r().pos.x, De.pos.z - r().pos.z),
              ),
            ) < 0.35;
          return (
            e.time > I &&
              mt &&
              r().gun.raise > 0.85 &&
              (r().fire(), (I = e.time + M0(0.55, 0.8))),
            e.hud.task($e, X, !0),
            !1
          );
        }
        (W && ((W = !1), r().holster()), (ue += Ct ? 0 : me));
        const p0 = (ue % 1.6) / 1.6,
          Jt = p0 < 0.26 ? Math.sin((p0 / 0.26) * Math.PI) : 0;
        Ct || (X = Math.min(1, X + (me * (0.32 + 2.2 * Jt)) / oe));
        const ct = M(X),
          Vt = Math.min(1, (X - G[ct]) / (G[ct + 1] - G[ct]));
        if (ct !== Q) {
          for (let De = 0; De < ct; De++) l.pieces[De].set(1);
          (Q >= 0 && (e.nav.rebuild(), Mt(l.pieces[Q], Q)), (Q = ct));
        }
        l.pieces[ct].set(Vt);
        const gt = l.pieces[ct],
          yt = l.cue(ct),
          dt = gt.kind;
        if (dt === "rip" && Vt > 0.58)
          r().work({
            pos: yt.pos,
            yaw: yt.yaw,
            hold: !1,
            lean: -2,
            crouch: 0.1,
            hop: 0,
          });
        else {
          const De = (yt.L[1] + yt.R[1]) / 2,
            mt =
              dt === "drag"
                ? 0.32 + 0.06 * Jt
                : dt === "rip"
                  ? De < 0.8
                    ? 0.45
                    : De < 1.4
                      ? 0.12
                      : 0
                  : 0.12;
          r().work({
            pos: yt.pos,
            yaw: yt.yaw,
            hold: !0,
            L: yt.L,
            R: yt.R,
            crouch: mt,
            lean: (dt === "drag" ? -10 : -7) - 12 * Jt,
            hop: 0.1 * Jt,
          });
        }
        if (((A -= me), !Ct && p0 < 0.05 && A <= 0)) {
          A = 1.2;
          const De = gt.at([0, 0.5, 0]).toArray();
          (dt === "drag"
            ? b(Math.random() < 0.5 ? "chest_drag" : "furniture_scrape", {
                pos: De,
                vol: 0.8,
                rate: 0.9 + Math.random() * 0.2,
                reverb: 0.5,
              })
            : dt === "haul"
              ? b(Math.random() < 0.5 ? "furniture_scrape" : "bookcase_thud", {
                  pos: De,
                  vol: 0.8,
                  rate: 0.85 + Math.random() * 0.2,
                  reverb: 0.5,
                })
              : Vt < 0.55 &&
                b("nail_pry", {
                  pos: De,
                  vol: 0.85,
                  rate: 0.9 + Math.random() * 0.2,
                  reverb: 0.4,
                }),
            e.fx.dust({ x: De[0], y: 1.4, z: De[2] }, 0.6, 0.35));
        }
        return (
          dt === "rip" &&
            Vt >= 0.55 &&
            !pe.has("rip" + ct) &&
            (pe.add("rip" + ct),
            b("plank_rip", {
              pos: gt.at([0, 0, 0]).toArray(),
              vol: 0.9,
              reverb: 0.4,
            })),
          X >= 0.7 &&
            !pe.has("almost") &&
            !r().speaking &&
            (pe.add("almost"), g("a3_almost", { emote: "scared" })),
          X >= 0.74 &&
            !pe.has("window") &&
            (pe.add("window"), Qe(t) && (F = e.time + 5)),
          X >= 0.78 &&
            !f.down &&
            !pe.has("plea") &&
            !r().speaking &&
            !v?.talking &&
            (pe.add("plea"), ot(t)),
          X >= 0.86 &&
            !pe.has("one") &&
            !r().speaking &&
            f.down &&
            (pe.add("one"), g("a3_one", { emote: "scared" })),
          e.hud.task($e, X, Ct),
          X >= 1
        );
      }, 400),
      !(n(t) || r().dead) &&
        (await x(() => n(t) || !(s.flags.pleading && v?.talking && !f.down), 4),
        !n(t)))
    ) {
      for (const me of l.pieces) me.set(1);
      (Mt(l.pieces[4], 4),
        e.nav.rebuild(),
        e.hud.task(null),
        r().work(null),
        await et(t));
    }
  }
  function Qe(t) {
    const a = tt()?.window;
    if (!a?.smash || !e.zombies.climbIn) return !1;
    s.flags.window = !0;
    const l = (c) =>
        j() ? (c % 3 === 2 ? "akane" : "player") : c === 3 ? "player" : V,
      i = (c) => (
        c?.landed?.then?.(() => {
          !c.dead &&
            j() &&
            c.forceTarget === V &&
            ((c.forceTarget = "player"), (c.path = null), (c.repath = 0));
        }),
        c
      );
    return (
      (async () => {
        (i(
          e.zombies.climbIn(ie("nun", "gown"), a, { crash: !0, target: l(0) }),
        ),
          (e.player.shake += 0.35),
          tt()?.candles?.gust?.(0.75),
          (async () => {
            const h = Ke(),
              m = a.sill,
              f = [m[0] + 0.3, m[1] + 1.35, m[2]],
              z = [a.land[0] - 0.3, 1.1, a.land[1]];
            ((e.combat.invuln = Math.max(e.combat.invuln, 2.3)),
              (o.frozen = !0),
              Ft(
                e,
                [
                  h,
                  { t: 0.3, p: h.p, look: f, fov: 54 },
                  { t: 1.15, p: h.p, look: z, fov: 46 },
                  { t: 1.55, p: h.p, look: z, fov: h.fov },
                ],
                { ease: "inout" },
              ),
              await u(1.6),
              !n(t) && (e.camCtl ? Pt() : (o.frozen = !1)));
          })(),
          (async () => (
            await x(() => n(t) || !r().speaking, 1.6),
            !n(t) &&
              !s.flags.backOpen &&
              (g("a3_window", { emote: "scream" }), (s.lastBark = e.time))
          ))());
        const c = ["lanky", "gown", ie("soldier", "lanky"), ie("nun", "gown")];
        for (let h = 0; h < c.length; h++) {
          if (
            (await u(1 + Math.random() * 0.6),
            n(t) ||
              s.flags.out ||
              (await x(
                () => n(t) || s.flags.out || e.zombies.alive().length < 9,
                6,
              ),
              n(t) || s.flags.out))
          )
            return;
          i(e.zombies.climbIn(c[h], a, { target: l(h + 1) }));
        }
      })(),
      !0
    );
  }
  const Mt = (t, a) => {
    const l = t.at([0, 0.2, 0]).toArray();
    a === 0
      ? b("furniture_scrape", { pos: l, vol: 0.6, rate: 0.8, reverb: 0.5 })
      : a === 1
        ? (b("pew_topple", { pos: l, vol: 1, reverb: 0.7 }),
          e.fx.dust({ x: l[0], y: 0.3, z: l[2] }, 1.4, 0.8))
        : b("plank_drop", { pos: l, vol: 0.9, reverb: 0.5 });
  };
  async function et(t) {
    const a = tt(),
      l = re(),
      i = l.backIn || [4.25, 59.8],
      c = l.backOut || [4.25, 63.2];
    if ((await T.during(0.5, (z) => a?.backDoor?.open?.(kt.out(z))), n(t)))
      return;
    (e.nav.rebuild(),
      (s.flags.backOpen = !0),
      b("church_backdoor_open", { pos: [i[0], 1.2, i[1] + 1.2], vol: 0.6 }),
      r().work(null),
      r().lowReady(),
      g("a3_open2", { emote: "scream" }),
      (s.lastBark = e.time),
      e.audio.loops.get("choir_dread")?.fadeTo?.(0.6, 2));
    const h = [c[0] + 1.2, 62.85];
    (r()
      .walkTo(h[0], h[1], { speed: 3.8, arrive: 0.25 })
      .then(() => {
        !n(t) && !s.flags.out && r().turnTo(i[0], i[1] - 2.5);
      }),
      Gt(
        t,
        () => !s.flags.yardTalk && (s.beat === "burst" || s.beat === "yard"),
        { stopFor: 3, range: 14 },
      ));
    const m = () => {
      const z = Math.random();
      return z < 0.4
        ? "lanky"
        : z < 0.7
          ? ie("nun", "gown")
          : z < 0.85
            ? "gown"
            : ie("soldier", "lanky");
    };
    ((async () => {
      for (let w = 0; w < 8; w++) {
        if (n(t) || s.flags.out) return;
        {
          const L = !j() && w % 4 !== 3 ? V : "player";
          $(m(), Be(), { state: "emerge", target: L }, t, 0.8).then((F) =>
            Me(F, L),
          );
        }
        await u(0.3 + Math.random() * 0.2);
      }
      const z = e.time;
      for (; !n(t) && !s.flags.out;) {
        const w = Math.min(1, (e.time - z) / 20);
        if (
          (await u((1.5 - 0.9 * w) * (0.8 + Math.random() * 0.4)),
          !s.flags.out && e.zombies.alive().length < 9 + 4 * w)
        ) {
          const L = !j() && Math.random() < 0.6 + 0.3 * w ? V : "player";
          $(m(), Be(), { state: "emerge", target: L }, t, 0.8).then((F) =>
            Me(F, L),
          );
        }
      }
    })(),
      e.audio.loops.get("horde_moan")?.fadeTo?.(1, 1.5),
      (async () => {
        if (
          (await u(2.6),
          n(t) ||
            s.flags.out ||
            j() ||
            !v ||
            (await x(() => n(t) || !v.talking, 4), n(t) || s.flags.out || j()))
        )
          return;
        const z = v.z.root.position,
          w = [Math.max(-0.5, Math.min(0.5, z.x)), 54.3];
        (v.setLook(null),
          await v.walkTo(w[0], w[1]),
          !(n(t) || j()) && (v.turn(Math.PI, 0, 0.4), R("shield", "face")));
      })());
    let f = e.time + 5.5;
    (await x(
      () =>
        n(t) || o.pos.z > 62.45
          ? !0
          : (e.time > f &&
              o.pos.z < 61 &&
              de(fe.out, { cool: 12, emote: "scream" }) &&
              (f = e.time + 6.5),
            !1),
      900,
    ),
      !n(t) && (await at(t)));
  }
  async function at(t) {
    const a = tt(),
      l = re(),
      i = l.backIn || [4.25, 59.8];
    ((s.flags.out = !0), (s.beat = "yard"), e.hud.task(null));
    const c = !!v && !j();
    if (
      ((s.onPriestHit = null),
      r().stop(),
      r().holster(),
      r().work({
        pos: [i[0] + 0.3, 62.35],
        yaw: Math.PI,
        hold: !0,
        L: [i[0] - 0.42, 1.05, 61.36],
        R: [i[0] - 0.2, 1.1, 61.36],
        crouch: 0.1,
        lean: 12,
        hop: 0,
      }),
      await u(0.3),
      !n(t) &&
        (await T.during(0.4, (h) => a?.backDoor?.open?.(1 - kt.in(h))), !n(t)))
    ) {
      ((s.flags.shut = !0), a0(0.05));
      for (const h of e.zombies.alive())
        h.pos.z > 60.3 &&
          h.pos.z < 62.7 &&
          Math.abs(h.pos.x - i[0]) < 1.2 &&
          ((h.pos.z = 60.3), h.sync());
      if (
        ((e.player.shake += 0.4),
        e.nav.rebuild(),
        e.audio.loops.get("choir_dread")?.stop?.(2.5),
        e.audio.loops.get("amb_church")?.stop?.(1.5),
        e.audio.loops.get("horde_moan")?.fadeTo?.(0.3, 1.2),
        await u(0.4),
        !n(t))
      ) {
        if (
          (b("door_wedge", {
            pos: [i[0] - 0.4, 1.1, 61.4],
            vol: 1,
            reverb: 0.4,
          }),
          e.zombies.clear((h) => h.pos.z < 61.6),
          (async () => {
            for (let h = 0; h < 6; h++) {
              if ((await u(h ? 0.6 + Math.random() * 0.8 : 0.7), n(t))) return;
              (b("door_pound", {
                pos: [i[0], 1.3, i[1] + 0.7],
                vol: 1 - h * 0.13,
                rate: 0.95 + Math.random() * 0.1,
                reverb: 0.4,
              }),
                a?.backDoor?.open?.(-0.02),
                await u(0.08),
                a?.backDoor?.open?.(0));
            }
            e.audio.loops.get("horde_moan")?.stop?.(5);
          })(),
          c)
        ) {
          if (
            (await u(0.7),
            n(t) ||
              (wt("p_getback", { hold: 0, vol: 0.55 }),
              b("priest_struggle", {
                pos: [i[0] - 1.6, 1.4, i[1] - 1.2],
                vol: 0.6,
                reverb: 0.6,
              }),
              Le(t, 1.4, () =>
                b("crowd_pile", {
                  pos: [i[0] - 1.6, 0.8, i[1] - 1.2],
                  vol: 0.6,
                  reverb: 0.6,
                }),
              ),
              await u(1.6),
              n(t)) ||
              (await q("s3_no"), n(t)))
          )
            return;
        } else if ((await u(1), n(t))) return;
        (v && ((v.z.root.visible = !1), v.setLook(null), v.solid(!1)),
          r().work(null),
          await x(() => n(t) || !e.zombies.alive().length, 15),
          !n(t) && (await g0(t)));
      }
    }
  }
  async function g0(t) {
    ((s.beat = "yard"),
      (s.flags.yardTalk = !0),
      e.camCtl && Pt(),
      (e.combat.invuln = 0),
      (o.speedMul = 1),
      (e.weapons.on = !0));
    const a = Tt();
    if (!a || !U) {
      console.warn("[script2] no ride");
      return;
    }
    if (
      (U.park(a.bike[0], a.bike[1], a.bike[2]),
      r().work(null),
      r().holster(),
      r().emote("scared", 4),
      r().lookAt(new Y(a.bike[0], 0.9, a.bike[1])),
      await u(0.5),
      n(t))
    )
      return;
    g("a3_moto", { emote: "scream" });
    const l = [
      a.bike[0] + Math.cos(a.bike[2]) * 0.75,
      a.bike[1] - Math.sin(a.bike[2]) * 0.75,
    ];
    if (
      (await r().walkTo(l[0], l[1], { speed: 3.4, arrive: 0.25 }),
      n(t) ||
        (r().lookAt(null), Bt(!0), await u(0.85), n(t)) ||
        (U.kickstand?.(!1), await u(0.3), n(t)))
    )
      return;
    U.setOn(!0);
    const i = () => {
      const m = U.seats.passenger.getWorldPosition(new Y());
      return [m.x, 1, m.z];
    };
    let c = !1;
    ((s.bikeRec = e.interact.add({
      id: "bike",
      pos: i,
      radius: 2,
      cone: 0.8,
      prompt: "get on",
      enabled: () => !c,
      onUse: () => {
        c = !0;
      },
    })),
      e.hud.hint("E: get on", 4));
    let h = e.time + 6;
    if (
      (await x(() => {
        if (n(t)) return !0;
        const m = i();
        return (
          Math.hypot(o.pos.x - m[0], o.pos.z - m[2]) < 1.1 && (c = !0),
          e.time > h &&
            de(["a3_c_lag1", "a2_keepmoving"], { cool: 12 }) &&
            (h = e.time + 8),
          c
        );
      }, 600),
      s.bikeRec?.remove?.(),
      (s.bikeRec = null),
      !n(t))
    ) {
      {
        const m = Ke(),
          f = U.seats.passenger.getWorldPosition(new Y()),
          z = a.bike[2];
        Ft(
          e,
          [
            m,
            {
              t: 0.9,
              p: [f.x, f.y, f.z],
              look: [f.x + Math.sin(z) * 6, f.y - 0.25, f.z + Math.cos(z) * 6],
              fov: m.fov,
            },
          ],
          { ease: "inout" },
        );
      }
      (b("cassock_rustle_rise", { vol: 0.35 }),
        await u(0.95),
        !n(t) && (await It(t, { chat: !0 })));
    }
  }
  const i0 = {
      off: {
        trail: 0,
        ghost: 0,
        tunnel: 0,
        warp: 0,
        bleed: 0,
        bpm: 0,
        beat: 0,
        muffle: 0,
      },
      mild: {
        trail: 0,
        ghost: 0,
        tunnel: 0,
        warp: 0.03,
        bleed: 0.08,
        bpm: 74,
        beat: 0.06,
        muffle: 0,
      },
      peak: {
        trail: 0,
        ghost: 0,
        tunnel: 0,
        warp: 0.04,
        bleed: 0.16,
        bpm: 122,
        beat: 0.12,
        muffle: 0.2,
      },
    },
    St = { want: { ...i0.off }, secs: 2, name: "off" },
    xt = (t, a = 2) => {
      const l = i0[t] || i0.off;
      ((l.muffle ?? 0) !== (St.want.muffle ?? 0) &&
        e.audio.muffle?.(l.muffle ?? 0, Math.max(0.5, a)),
        (St.want = { ...l }),
        (St.secs = a),
        (St.name = t));
    };
  e.updaters.push((t) => {
    const a = e.post;
    for (const l of ["trail", "ghost", "tunnel", "warp", "bleed"]) {
      if (typeof a[l] != "number") continue;
      const i = St.want[l] ?? 0,
        c = a[l];
      if (Math.abs(i - c) < 1e-4) {
        a[l] = i;
        continue;
      }
      a[l] = c + (i - c) * Math.min(1, (t * 2.5) / Math.max(0.1, St.secs));
    }
  });
  function R0(t, a) {
    (async () => {
      let l = 0;
      const i = (c) => {
        const h = r().headWorld(new Y()),
          m = c.kit.chestWorld(new Y()),
          f = m.clone().sub(h),
          z = f.length();
        return (f.divideScalar(z), !e.combat.raycastWorld(h, f, z));
      };
      for (; !n(t) && a();) {
        (await u(0.1), (l -= 0.1));
        const c = r();
        if (c.grabbed || c.dead || c.workCue) continue;
        let h = null,
          m = 1e9;
        for (const w of e.zombies.alive()) {
          const L = w.pos.distanceTo(c.pos),
            F = w.pos.distanceTo(o.pos);
          if (L > 15) continue;
          const G = Math.min(L, F * 0.85);
          G < m && i(w) && ((m = G), (h = w));
        }
        if (!h) {
          c.lowReady();
          continue;
        }
        c.aimAt(() => h.kit.chestWorld(new Y()));
        const f =
            Math.abs(
              Lt(c.yaw, Math.atan2(h.pos.x - c.pos.x, h.pos.z - c.pos.z)),
            ) < 0.3,
          z = h.pos.distanceTo(c.pos) < 5 || h.pos.distanceTo(o.pos) < 4.5;
        l <= 0 &&
          f &&
          c.gun.raise > 0.85 &&
          (!c.path || z) &&
          (c.path && z && c.stop(), c.fire(), (l = M0(0.75, 1.25)));
      }
    })();
  }
  const U = (() => {
      try {
        const t = aa(e.makeCtx(), {});
        return (
          (t.park = (a, l, i) => {
            (t.root.position.set(a, 0, l),
              t.root.rotation.set(0, i, 0),
              t.kickstand?.(!0),
              t.update?.(0, { speed: 0, steer: 0.3, lean: 0, bump: 0 }));
          }),
          (t.away = () => {
            (t.returnShadow?.(),
              t.setOn?.(!1, { quiet: !0 }),
              t.root.position.set(-70, -40, -70),
              t.update?.(0, { speed: 0 }));
          }),
          t.away(),
          t
        );
      } catch (t) {
        return (console.warn("[script2] no motorcycle:", t.message), null);
      }
    })(),
    l0 = () => e.scene.getObjectByName("house_moon"),
    Tt = () => {
      const t = Ze();
      if (!t?.plan) return null;
      if (s._rideD?.fo === t) return s._rideD;
      const a = t.ride || {},
        l = a.bike || [5.3, 66.4, Math.atan2(2 - 5.3, 77.2 - 66.4)];
      let i = a.line?.length ? a.line.map((M) => [M[0], M[1]]) : null;
      if (!i) {
        i = [[l[0], l[1]]];
        const M = t.plan.yardPath,
          D = t.plan.path;
        for (let C = 0; C < M.n; C += 2)
          M.z[C] > l[1] + 2 && i.push([M.x[C], M.z[C]]);
        for (let C = 0; C < D.n; C += 2)
          D.z[C] > 77.6 && i.push([D.x[C], D.z[C]]);
        let H = 0;
        for (; i.length > 2 && H < 7;) {
          const C = i[i.length - 1],
            ce = i[i.length - 2];
          ((H += Math.hypot(C[0] - ce[0], C[1] - ce[1])), i.pop());
        }
      }
      const c = [0];
      for (let M = 1; M < i.length; M++)
        c.push(
          c[M - 1] + Math.hypot(i[M][0] - i[M - 1][0], i[M][1] - i[M - 1][1]),
        );
      const h = c[c.length - 1],
        m = Math.max(2, Math.ceil(h / 0.5) + 1),
        f = [];
      for (let M = 0, D = 0; M < m; M++) {
        const H = Math.min(h, M * 0.5);
        for (; D < c.length - 2 && c[D + 1] < H;) D++;
        const C = c[D + 1] > c[D] ? (H - c[D]) / (c[D + 1] - c[D]) : 0;
        f.push({
          x: i[D][0] + (i[D + 1][0] - i[D][0]) * C,
          z: i[D][1] + (i[D + 1][1] - i[D][1]) * C,
          s: H,
          yaw: 0,
          k: 0,
        });
      }
      for (let M = 0; M < m; M++) {
        const D = f[Math.max(0, M - 3)],
          H = f[Math.min(m - 1, M + 3)];
        f[M].yaw = Math.atan2(H.x - D.x, H.z - D.z);
      }
      for (let M = 0; M < m; M++) {
        const D = f[Math.max(0, M - 6)],
          H = f[Math.min(m - 1, M + 6)];
        f[M].k = Lt(D.yaw, H.yaw) / Math.max(0.5, H.s - D.s);
      }
      const z = a.slow?.length
          ? a.slow
          : (() => {
              const M = [];
              let D = null,
                H = null,
                C = null;
              for (const ce of f) {
                D == null && ce.z > 75.5 && (D = ce.s);
                const me =
                  Math.abs(ce.x - 2.5) < 2 && ce.z > 159.4 && ce.z < 172.8;
                (me && H == null && (H = ce.s), me && (C = ce.s));
              }
              return (
                D != null && M.push([D - 1, D + 3, 3.5]),
                H != null && M.push([H - 1, C + 1, 3]),
                M.push([h - 14, h, 2.5]),
                M
              );
            })(),
        w = (a.dodge || []).map((M) => ({
          ...M,
          ease: Math.max(2, M.ease || 6),
        })),
        L = (a.jump || []).slice().sort((M, D) => M.s - D.s),
        F = (M) => (M <= 0 ? 0 : M >= 1 ? 1 : M * M * (3 - 2 * M)),
        G = (M) => {
          let D = 0;
          for (const H of w)
            M > H.s0 &&
              M < H.s1 &&
              (D += H.off * F((M - H.s0) / H.ease) * F((H.s1 - M) / H.ease));
          return D;
        },
        oe = 4,
        X = Math.sqrt(oe / 2.6),
        se = 5,
        ue = (M) => (M >= 4.5 ? M * X : M >= 2.9 && M <= 3.1 ? 3.8 : M),
        Q = new Float32Array(m);
      for (let M = 1; M < m - 1; M++)
        w.length &&
          (Q[M] =
            Math.abs(G(f[M].s + 0.5) - 2 * G(f[M].s) + G(f[M].s - 0.5)) / 0.25);
      const pe = (M) => {
          const D = new Float32Array(m);
          for (let C = 0; C < m; C++) {
            ((D[C] = Math.min(
              M,
              Math.sqrt(oe / Math.max(Math.abs(f[C].k), 1e-4)),
            )),
              Q[C] > 1e-4 && (D[C] = Math.min(D[C], Math.sqrt(se / Q[C]))));
            for (const [ce, me, $e] of z)
              f[C].s >= ce && f[C].s <= me && (D[C] = Math.min(D[C], ue($e)));
          }
          ((D[0] = 0.8), (D[m - 1] = 0));
          for (let C = 1; C < m; C++)
            D[C] = Math.min(D[C], Math.sqrt(D[C - 1] ** 2 + 6 * 0.5));
          for (let C = m - 2; C >= 0; C--)
            D[C] = Math.min(D[C], Math.sqrt(D[C + 1] ** 2 + 2 * 4.5 * 0.5));
          let H = 0;
          for (let C = 1; C < m; C++)
            H += 0.5 / Math.max(0.3, (D[C] + D[C - 1]) / 2);
          return { v: D, T: H };
        },
        A = h * 0.142;
      let N = 6.5,
        I = pe(N);
      for (let M = 0; M < 10; M++)
        ((N = Math.max(4.2, Math.min(10, (N * I.T) / A))), (I = pe(N)));
      const W = {
        fo: t,
        pts: f,
        len: h,
        v: I.v,
        T: I.T,
        VMAX: N,
        bike: l,
        stop: a.stop || [f[m - 1].x, f[m - 1].z, f[m - 1].yaw],
        dodge: w,
        jump: L,
        offAt: G,
      };
      return (
        (W.at = (M) => {
          const D = Math.max(0, Math.min(m - 1.001, M / 0.5)),
            H = Math.floor(D),
            C = D - H,
            ce = f[H],
            me = f[H + 1];
          return {
            x: ce.x + (me.x - ce.x) * C,
            z: ce.z + (me.z - ce.z) * C,
            s: ce.s + 0.5 * C,
            yaw: ce.yaw + Lt(ce.yaw, me.yaw) * C,
            k: ce.k + (me.k - ce.k) * C,
            v: W.v[H] + (W.v[H + 1] - W.v[H]) * C,
          };
        }),
        (W.sOf = (M, D) => {
          let H = 0,
            C = 1e9;
          for (let ce = 0; ce < m; ce += 2) {
            const me = (f[ce].x - M) ** 2 + (f[ce].z - D) ** 2;
            me < C && ((C = me), (H = f[ce].s));
          }
          return H;
        }),
        (s._rideD = W),
        W
      );
    },
    y = {
      on: !1,
      s: 0,
      v: 0,
      yaw: 0,
      lean: 0,
      steer: 0,
      bump: 0,
      cap: null,
      D: null,
      eng: null,
      mount: null,
      braked: !1,
      torch: 1,
      ev: new Set(),
      hop: null,
      peek: 0,
    },
    Ut = { side: -0.06, up: 0.16 };
  ((s._ride = y), (s._bike = U), (s._rideEye = Ut));
  const c0 = new Y(),
    A0 = new Y(),
    Bt = (t, a = !1) => {
      const l = r();
      if (U) {
        if (l.ride) {
          l.ride(t ? U : null, { now: a });
          return;
        }
        if (t) {
          (l.stop(), l.holster());
          const i = U.seats.driver.getWorldPosition(new Y());
          (l.place(i.x, i.z, U.root.rotation.y), l.sitDown(0.86));
        } else l.standUp();
      }
    };
  (e.updaters.push((t) => {
    U &&
      !y.on &&
      (U.on || U.headlight.intensity > 0.3) &&
      U.update(t, { speed: 0, steer: 0.3, lean: 0 });
  }),
    e.updaters.unshift((t) => {
      if (!y.on || !U || !y.D) return;
      const a = y.D;
      let l = a.at(y.s).v;
      (y.cap != null && (l = Math.min(l, y.cap)),
        y.s < a.len - 0.02 && (l = Math.max(l, 0.6)));
      const i = l > y.v ? 3 : 4.6,
        c = l < y.v - 0.4 ? Math.min(1, (y.v - l) / 2) : 0;
      ((y.v += Math.max(-i * t, Math.min(i * t, l - y.v))),
        (y.s = Math.min(a.len, y.s + y.v * t)),
        y.s >= a.len - 0.02 && ((y.s = a.len), (y.v = 0)));
      const h = a.at(y.s),
        m = a.offAt(y.s),
        f = a.offAt(y.s + 0.4),
        z = a.offAt(y.s - 0.4),
        w = (f - z) / 0.8,
        L = h.k + (f - 2 * m + z) / 0.16;
      y.yaw +=
        Lt(y.yaw, h.yaw + Math.atan(w)) * Math.min(1, t * (m || w ? 10 : 7));
      const F = Math.max(
        -0.5,
        Math.min(0.5, Math.atan((-L * y.v * y.v) / 9.81)),
      );
      ((y.lean += (F - y.lean) * Math.min(1, t * (m || w ? 5 : 3.2))),
        (y.steer = Math.max(
          -0.5,
          Math.min(0.5, Math.atan(1.4 * L) * (0.6 + 0.4 / (1 + y.v))),
        )));
      const G =
        Math.sin(y.s * 2.7) *
        Math.sin(y.s * 1.31 + 0.7) *
        Math.sin(y.s * 0.53 + 2.1);
      let oe = 0;
      (G > 0.6 && y.bumpArm !== !1
        ? ((oe = Math.min(1, (G - 0.5) * 2.4 * Math.min(1, y.v / 4))),
          (y.bumpArm = !1))
        : G < 0.4 && (y.bumpArm = !0),
        y.bump > 0.5 && ((oe = Math.max(oe, y.bump)), (y.bump = 0)));
      let X = 0;
      if (!y.hop)
        for (const Q of a.jump)
          !y.ev.has(Q) &&
            y.s >= Q.s - 0.1 &&
            y.s < Q.s + 1.5 &&
            y.v > 1.5 &&
            (y.ev.add(Q),
            (y.hop = { t: 0, vy: Math.min(2.7, 1 + 0.24 * y.v), y: 0 }),
            U.rev?.(0.5),
            b("log_thump", {
              vol: 1,
              ...(y.mount ? {} : { pos: [h.x, 0.4, h.z] }),
            }));
      if (y.hop) {
        const Q = y.hop;
        ((Q.t += t),
          (Q.vy -= 9.81 * t),
          (Q.y += Q.vy * t),
          Q.y <= 0 &&
            Q.t > 0.1 &&
            ((X = 1),
            (y.hop = null),
            (y.v *= 0.9),
            (o.shake += 0.5),
            b("moto_land", {
              vol: 1,
              ...(y.mount ? {} : { pos: [h.x, 0.4, h.z] }),
            }),
            Math.random() < 0.5 && r().scare?.(0.6)));
      }
      const se = y.hop ? Math.max(0, y.hop.y) : 0,
        ue = y.hop
          ? -0.16 * Math.max(0, 1 - y.hop.t / 0.42) +
            0.06 * Math.max(0, Math.min(1, (y.hop.t - 0.25) / 0.2))
          : 0;
      if (
        (U.root.position.set(
          h.x + Math.cos(h.yaw) * m,
          se,
          h.z - Math.sin(h.yaw) * m,
        ),
        U.root.rotation.set(ue, y.yaw, 0, "YXZ"),
        U.update(t, {
          speed: y.v,
          steer: y.steer,
          lean: y.lean,
          bump: Math.max(y.hop ? 0 : oe, X),
          brake: c,
        }),
        lt(a, h, t),
        (e.fovKick =
          (e.fovKick || 0) +
          (6 * Math.max(0, Math.min(1, (y.v - 4) / 6)) - (e.fovKick || 0)) *
            Math.min(1, t * 2)),
        y.mount && o.mount === y.mount && o._ride(0),
        !r().ride)
      ) {
        const Q = U.seats.driver.getWorldPosition(c0);
        r().place(Q.x, Q.z, y.yaw);
      }
      if (y.mount && o.mount === y.mount) {
        const Q = U.seats.driver.getWorldPosition(c0);
        Q.y += 0.5;
        const pe = e.camera,
          A = Q.x - pe.position.x,
          N = Q.y - pe.position.y,
          I = Q.z - pe.position.z,
          W = Math.hypot(A, N, I) || 1,
          M = o.forward(A0),
          D = (M.x * A + M.y * N + M.z * I) / W,
          H =
            W < 1.4 ? 1 - 0.85 * Math.max(0, Math.min(1, (D - 0.8) / 0.15)) : 1;
        ((y.torch += (H - y.torch) * Math.min(1, t * 10)),
          (e.weapons.torchMul = y.torch));
      }
      Te();
    }));
  const lt = (t, a, l) => {
      const i = !!y.mount,
        c = (m) => (i ? {} : { pos: m });
      let h = 0;
      for (const m of t.dodge) {
        const f = m.at ? t.sOf(m.at[0], m.at[1]) : (m.s0 + m.s1) / 2;
        m.off > 0 && y.s > m.s0 - 18 && y.s < f + 1.5 && (h = 0.22);
      }
      ((y.peek += (h - y.peek) * Math.min(1, l * 4)),
        t.dodge.forEach((m, f) => {
          const z = "d" + f;
          (!y.ev.has(z + "s") &&
            y.s > m.s0 - 12 &&
            y.s < m.s1 &&
            (y.ev.add(z + "s"),
            g(m.kind === "cart" ? "a3_r_look" : "a3_r_watch", {
              emote: "scream",
            }),
            (s.lastBark = e.time)),
            !y.ev.has(z + "k") &&
              y.s > m.s0 + m.ease * 0.25 &&
              (y.ev.add(z + "k"),
              b("moto_skid", { vol: 0.75, ...c([a.x, 0.3, a.z]) }),
              (o.shake += 0.12)));
          const w = m.at ? t.sOf(m.at[0], m.at[1]) : (m.s0 + m.s1) / 2;
          !y.ev.has(z + "w") &&
            y.s > w - 1.2 &&
            (y.ev.add(z + "w"),
            m.kind === "tree"
              ? (b("branch_whip", { vol: 0.95, ...c([a.x, 1.4, a.z]) }),
                (o.shake += 0.22))
              : b("moto_bump", { vol: 0.5, ...c([a.x, 0.4, a.z]) }));
        }),
        t.jump.forEach((m, f) => {
          const z = "j" + f;
          !y.ev.has(z) &&
            y.s > m.s - 15 &&
            y.s < m.s &&
            (y.ev.add(z),
            g("a3_r_hold", { emote: "scream" }),
            (s.lastBark = e.time));
        }));
    },
    Te = () => {
      const t = U.root.position.x,
        a = U.root.position.z,
        l = Math.sin(y.yaw),
        i = Math.cos(y.yaw);
      for (const c of e.zombies.alive()) {
        const h = c.pos.x - t,
          m = c.pos.z - a,
          f = Math.hypot(h, m);
        if (f > 2.2 || e.time < (c._bikeT ?? 0)) continue;
        const z = h * l + m * i,
          w = Math.abs(h * i - m * l);
        y.v > 1.6 && z > -0.6 && z < 1.15 && w < 0.6
          ? ((c._bikeT = e.time + 5),
            b("moto_hit", { pos: [c.pos.x, 0.9, c.pos.z], vol: 1 }),
            c.die("body", new Y(l, 0, i)),
            (y.v *= 0.55),
            (y.bump = 1),
            (y.lean += (Math.random() - 0.5) * 0.3),
            (o.shake += 0.25),
            Math.random() < 0.5 && st("akane"))
          : f < 1.35 &&
            c.alerted &&
            !(c.stun > 0) &&
            c.state !== "attack" &&
            ((c._bikeT = e.time + 1.4),
            (c.state = "attack"),
            (c.attackT = 0),
            c.kit.setState("attack"),
            e.zombies.groan(c, 1),
            st(
              z > 0.6
                ? "akane"
                : z < -0.2 || Math.random() < 0.55
                  ? "sara"
                  : "akane",
              c,
            ));
      }
    },
    st = (t, a) => {
      t === "akane"
        ? ((r().hits?.n ?? 0) < 2 && r().hurt(),
          r().dead || de(["a3_r_hit"], { cool: 6, gap: 0.5, over: !0 }),
          (y.lean += 0.12 * (Math.random() < 0.5 ? -1 : 1)))
        : e.combat.hurt(14, a ? a.pos : U.root.position);
    };
  function bt(t) {
    const a = y.D,
      l = Ze(),
      i = [
        ...(l?.sideSpawns || [])
          .filter((F) => !/^g/.test(F.name || ""))
          .map((F) => [F.x, F.z]),
        ...(l?.lurks || []).map((F) => [F.x, F.z]),
      ].map((F) => ({ x: F[0], z: F[1], s: a.sOf(F[0], F[1]) })),
      c = () => {
        const F = Math.random();
        return F < 0.4
          ? ie("soldier", "lanky")
          : F < 0.7
            ? "lanky"
            : F < 0.88
              ? "gown"
              : ie("nun", "gown");
      },
      h = (F) =>
        a.dodge.some((G) => F > G.s0 - 4 && F < G.s1 + 2) ||
        a.jump.some((G) => Math.abs(F - G.s) < 5),
      m = (() => {
        const F = a.dodge.find((X) => X.kind === "cart"),
          G = a.jump[0];
        let oe =
          F && G && G.s - F.s1 > 34 ? (F.s1 + G.s) / 2 + 6 : a.len * 0.62;
        for (let X = 0; X < 40 && h(oe); X++) oe += 2;
        return oe;
      })();
    let f = e.time + 0.3,
      z = 0,
      w = !0,
      L = !1;
    (async () => {
      for (; !n(t) && y.on && y.s < a.len - 28;) {
        await u(0.2);
        const F = U.root.position,
          G = Math.sin(y.yaw),
          oe = Math.cos(y.yaw),
          X =
            a.dodge.some((A) => A.s0 - 12 - y.s > 0 && A.s0 - 12 - y.s < 14) ||
            a.jump.some((A) => A.s - 15 - y.s > 0 && A.s - 15 - y.s < 14);
        for (const A of e.zombies.alive()) {
          if (X) break;
          if (A._called || A.pos.distanceTo(F) > 22) continue;
          const N = A.pos.x - F.x,
            I = A.pos.z - F.z,
            W = Math.atan2(G * I - oe * N, G * N + oe * I);
          if (w) {
            if (r().speaking) continue;
            ((w = !1),
              (A._called = !0),
              g("a3_r_shoot1", { emote: "scream" }),
              le.set("a3_r_shoot1", e.time),
              (s.lastBark = e.time));
            continue;
          }
          const M = Math.abs(W) > 2.2;
          if (M && A.pos.distanceTo(F) > 9) continue;
          const D =
            Math.abs(W) < 0.4
              ? ["a3_r_shoot3", "a3_r_shoot2", "a3_ahead"]
              : M
                ? ["a3_r_behind", "a3_behind"]
                : W > 0
                  ? ["a3_r_right", "a3_right3", "v_right"]
                  : ["a3_r_left", "a3_left3", "v_left"];
          de(D, {
            cool: M ? 30 : 28,
            gap: M ? 7 : 2.6,
            emote: "scream",
            over: !0,
          }) && (A._called = !0);
        }
        if (!L && y.s > m - 31 && y.s < m - 12) {
          L = !0;
          for (const [A, N] of [
            [0, -1.25],
            [0.8, 1.3],
            [5.5, 0.1],
          ]) {
            const I = a.at(m + A),
              W = I.x + Math.cos(I.yaw) * N,
              M = I.z - Math.sin(I.yaw) * N;
            if (!e.nav.walkable(W, M)) continue;
            const D = e.zombies.spawn(c(), W, M, {
              state: "emerge",
              target: "player",
              yaw: I.yaw + Math.PI,
            });
            D.calmT = 0.6;
          }
          f = e.time + 2.4;
          continue;
        }
        if (
          (Math.floor(e.time * 5) % 5 === 0 &&
            e.zombies.clear(
              (A) =>
                a.sOf(A.pos.x, A.pos.z) < y.s - (A.dead ? 30 : 24) &&
                !ze(A.pos.x, A.pos.z),
            ),
          e.time < f || e.zombies.alive().length >= 8)
        )
          continue;
        let se = null,
          ue = "";
        if (z % 3 !== 2) {
          const A = [];
          for (const N of i) {
            const I = N.s - y.s;
            if (I < 8 || I > 40 || Math.hypot(N.x - F.x, N.z - F.z) < 10)
              continue;
            const W = a.at(N.s),
              D = Math.hypot(N.x - W.x, N.z - W.z) / 2.8 + 0.4,
              H = I / Math.max(2.5, (y.v + W.v) / 2);
            H - D < -0.3 ||
              H - D > 1.8 ||
              ze(N.x, N.z) ||
              !e.nav.walkable(N.x, N.z) ||
              A.push(N);
          }
          if (A.length) {
            const N = A[Math.floor(Math.random() * A.length)];
            ((se = [N.x, N.z]), (ue = "side"));
          }
        }
        for (let A = 0; A < 6 && !se; A++) {
          const N = a.at(y.s + 30 + Math.random() * 12),
            I = (Math.random() - 0.5) * 1.6,
            W = N.x + Math.cos(N.yaw) * I,
            M = N.z - Math.sin(N.yaw) * I;
          N.s < a.len - 22 &&
            !h(N.s) &&
            Math.abs(N.s - m) > 10 &&
            e.nav.walkable(W, M) &&
            ((se = [W, M]), (ue = "path"));
        }
        if (!se) {
          f = e.time + 0.5;
          continue;
        }
        const Q =
            ue === "side"
              ? Math.random() < 0.5
                ? ie("soldier", "gown")
                : Math.random() < 0.5
                  ? "gown"
                  : ie("nun", "gown")
              : c(),
          pe = e.zombies.spawn(Q, se[0], se[1], {
            state: "emerge",
            target: "player",
            yaw: Math.atan2(F.x - se[0], F.z - se[1]),
          });
        ((pe.calmT = ue === "path" ? 0.8 : 0.3),
          z++,
          (f = e.time + 1 + Math.random() * 0.7));
      }
    })();
  }
  async function It(t, { chat: a = !0, from: l = 0 } = {}) {
    const i = Tt();
    if (!i || !U) {
      console.warn("[script2] no ride");
      return;
    }
    s.beat = a ? "forest" : "bridge";
    const c = i.at(l);
    ((y.D = i),
      (y.s = l),
      (y.v = l ? Math.min(3, c.v) : 0),
      (y.yaw = c.yaw),
      (y.lean = 0),
      (y.cap = null),
      (y.braked = !1),
      (y.ev = new Set()),
      (y.hop = null),
      (y.peek = 0),
      i.dodge.forEach((m, f) => {
        if (l > m.s0 - 12) for (const z of "skw") y.ev.add("d" + f + z);
      }),
      i.jump.forEach((m, f) => {
        l > m.s - 15 && (y.ev.add("j" + f), y.ev.add(m));
      }),
      U.root.position.set(c.x, 0, c.z),
      U.root.rotation.set(0, y.yaw, 0),
      r().riding !== U && Bt(!0, !0),
      U.kickstand?.(!1),
      U.setOn(!0, { quiet: !!U.state?.on }),
      (U.engineVol = 1),
      U.takeShadow?.(l0()),
      (e.beamLight = U.headlight),
      (e.beamFogK = 0.12),
      (y.on = !0),
      (y.mount = {
        eye: (m) => {
          U.seats.passenger.getWorldPosition(m);
          const f = Math.cos(y.yaw),
            z = Math.sin(y.yaw),
            w = Ut.side + y.peek;
          return (
            (m.x -= f * w),
            (m.z += z * w),
            (m.y += Ut.up + Math.abs(y.peek) * 0.2),
            m
          );
        },
        yaw: () => y.yaw + Math.PI,
        roll: () => -y.lean * 0.75,
      }),
      (e.camCtl = null),
      (o.frozen = !1),
      (o.mount = y.mount),
      (o._mountYaw = null),
      (o.yaw = y.yaw + Math.PI),
      (o.pitch = -0.06),
      o._ride(0),
      (U.onboard = !0),
      (e.combat.invuln = 0),
      (o.speedMul = 1),
      (e.weapons.on = !0),
      (e.weapons.reserve = Math.max(e.weapons.reserve, 60)),
      (K.want = 0.22),
      xt("mild", 3),
      e.audio.loop("amb_forest", { vol: 0 }).fadeTo(0.3, 4),
      U.rev?.(0.8));
    const h = { rec: null, want: 0 };
    if (
      ((s.hordeLoop = h),
      (async () => {
        for (; !n(t);) {
          (await u(0.2),
            !h.rec &&
              h.want > 0 &&
              (h.rec = e.audio.loop("horde_forest", {
                pos: [o.pos.x, 1.5, o.pos.z],
                vol: 0,
              })));
          const m = h.rec;
          if (!m) continue;
          m.vol !== h.want && m.fadeTo(h.want, 2);
          const f = m.handle?.panner;
          if (f) {
            const z = i.at(Math.max(0, (y.on ? y.s : i.len) - 25));
            ((f.positionX.value = z.x),
              (f.positionY.value = 1.4),
              (f.positionZ.value = z.z));
          }
        }
      })(),
      a)
    ) {
      const m = (f) => {
        U && T.tween(U, "engineVol", f ? 0.8 : 1, 0.6, "inout");
      };
      if (
        (await u(1.3),
        n(t) ||
          (m(!0), await q("s3_failed"), n(t)) ||
          (await u(0.25),
          r().lookAt(O),
          await g("a3_who2", { emote: "sad" }),
          n(t)) ||
          (r().lookAt(null), await q("s3_priest2"), n(t)) ||
          ((y.cap = 4.2), await u(0.5), n(t)) ||
          ((e.lookMul.sat ??= 1),
          T.tween(e.lookMul, "sat", 0.62, 3, "inout"),
          b("piano_low_note", { vol: 0.45, reverb: 0.8 }),
          r().lookAt(O),
          await g("a3_nopriest2", { emote: "sad", hold: 0.35 }),
          n(t)) ||
          (await g("a3_unwell2", { emote: "sad", hold: 0.3 }), n(t)) ||
          (r().lookAt(null),
          T.tween(e.lookMul, "sat", 1, 2.5, "inout"),
          (y.cap = null),
          m(!1),
          U.rev?.(0.7),
          await u(0.4),
          n(t)))
      )
        return;
    }
    ((s.beat = "bridge"),
      (s.flags.rideZ = !0),
      bt(t),
      await x(() => n(t) || y.s > i.len - 30, 300),
      !n(t) &&
        (await x(() => n(t) || !r().speaking, 2.5),
        !n(t) &&
          (g("a3_r_house", { emote: "scream" }),
          (s.lastBark = e.time),
          (h.want = 0.85),
          xt("peak", 3),
          (s.hordeSpots = () => {
            const m = [];
            for (let f = 34; f <= 62; f += 4) {
              const z = i.at((y.on ? y.s : i.len) - f);
              m.push([z.x, z.z, z.yaw]);
            }
            return m;
          }),
          H0(t),
          await x(() => n(t) || (y.s >= i.len - 0.05 && y.v < 0.25), 90),
          !n(t) &&
            ((y.on = !1),
            U.update(0, { speed: 0 }),
            g("a3_r_off", { emote: "scream" }),
            (r().rideReach = { to: Qt, on: !0 }),
            r().lookAt(Qt()),
            await u(0.4),
            !n(t) &&
              (b("moto_key", { vol: 0.85 }),
              U.setOn(!1),
              await u(0.3),
              !n(t) &&
                (r().rideReach && (r().rideReach.on = !1),
                r().lookAt(null),
                Le(t, 0.7, () => {
                  r().rideReach = null;
                }),
                await I0(t),
                !n(t) &&
                  (await q0(t, {
                    route: Ze()?.route,
                    hordeLoop: h,
                    fromRide: !0,
                  }))))))));
  }
  const Qt = () => {
    const t = U.grips.L.getWorldPosition(new Y()),
      a = U.grips.R.getWorldPosition(new Y()),
      l = new Y(0, 0, 1).transformDirection(U.root.matrixWorld);
    return t
      .add(a)
      .multiplyScalar(0.5)
      .addScaledVector(l, 0.07)
      .add(new Y(0, -0.05, 0));
  };
  async function I0(t) {
    const a = U.root.position,
      l = y.yaw,
      i = _()?.points?.porch || [6, 199.3],
      c = a.x + Math.cos(l) * 0.85 - Math.sin(l) * 0.35,
      h = a.z - Math.sin(l) * 0.85 - Math.cos(l) * 0.35;
    ((o.mount = null),
      (y.mount = null),
      (e.weapons.torchMul = 1),
      (y.torch = 1),
      (U.onboard = !1),
      (e.fovKick = 0),
      U.returnShadow?.(),
      (e.beamLight = null));
    const m = Ke();
    (Ft(
      e,
      [m, { t: 0.5, p: [c, 1.62, h], look: [i[0], 1.3, i[1]], fov: m.fov }],
      { ease: "inout" },
    ),
      Bt(!1),
      Le(t, 0.8, () => {
        (U.kickstand?.(!0),
          U.update?.(0, { speed: 0, steer: 0.3, lean: 0, bump: 0 }));
      }),
      await u(0.55),
      !n(t) && (Pt(), await x(() => n(t) || !r().riding, 2)));
  }
  function H0(t) {
    s._horde !== t &&
      ((s._horde = t),
      (async () => {
        let a = 0;
        for (
          ;
          !n(t) &&
          !s.flags.hShut &&
          (await u(0.75 + Math.random() * 0.6), !(n(t) || s.flags.hShut));
        ) {
          if (e.zombies.alive().length >= 11) continue;
          const l = s.hordeSpots?.() || [];
          if (!l.length) continue;
          const i =
            a % 5 === 4
              ? ie("soldier", "lanky")
              : a % 3 === 2
                ? "gown"
                : a % 4 === 1
                  ? ie("nun", "gown")
                  : "lanky";
          (a++,
            $(
              i,
              l,
              { state: "emerge", minD: 12 },
              t,
              1.2,
              () => !s.flags.hShut,
            ).then((c) => {
              c && (c.calmT = 0.5);
            }));
        }
        s._horde === t && (s._horde = null);
      })());
  }
  function G0(t, a) {
    if (((s.flags.pounding = !0), s._pounding === t)) return;
    s._pounding = t;
    const l = {
        pos: new Y(6, 0, 199.95),
        reach: 0.75,
        hurt: () => {
          s.flags.pounding &&
            (a?.shove?.(0.45 + Math.random() * 0.4), (e.player.shake += 0.03));
        },
      },
      i = (f, z) => ({
        pos: new Y(f, 0, z),
        reach: 0.75,
        hurt: () => {
          s.flags.pounding &&
            b("window_knock", {
              pos: [f, 1.35, z],
              vol: 0.85,
              rate: 0.9 + Math.random() * 0.2,
              reverb: 0.2,
            });
        },
      }),
      c = [l, l, i(3.9, 199.95), l, i(3.8, 207.05), i(9.55, 202.74)],
      h = (f) =>
        f.pos.x > 2.8 && f.pos.x < 9.2 && f.pos.z > 200.45 && f.pos.z < 206.7;
    let m = 0;
    (async () => {
      for (; !n(t) && s.flags.pounding;) {
        for (const f of e.zombies.alive())
          f._pound ||
            f._ring ||
            f.goal ||
            h(f) ||
            ((f._pound = c[m++ % c.length]),
            (f.forceTarget = f._pound),
            (f.alerted = !0),
            (f.path = null),
            (f.repath = 0));
        await u(0.4);
      }
      s._pounding === t && (s._pounding = null);
    })();
  }
  async function q0(t, a = {}) {
    s.beat = "house";
    const l = _(),
      i = l?.points || {},
      c = Ze(),
      h = i.porch || [6, 199.3],
      m = i.inside || [6, 201.2],
      f = l?.frontDoor,
      z = l?.backDoor,
      w = f?.pos?.[2] ?? 200;
    (xt("peak", 2),
      (K.want = Math.max(K.want, 0.45)),
      (o.speedMul = 0.95),
      e.audio.loop("heartbeat_fast", { vol: 0 })?.fadeTo?.(0.35, 2));
    const L = a.route || c?.route || [];
    a.hordeLoop && (a.hordeLoop.want = 0.9);
    const F = () => {
        const W = [],
          M = o.pos.z;
        for (let D = L.length - 1; D >= 0; D--) {
          const H = L[D];
          H[1] < M - 14 &&
            H[1] > M - 34 &&
            W.push([
              H[0] + (Math.random() - 0.5),
              H[1],
              Math.atan2(o.pos.x - H[0], o.pos.z - H[1]),
            ]);
        }
        return W;
      },
      G = [
        [-4.6, 194.5],
        [16.4, 194.6],
        [-5.4, 202.6],
        [17.6, 203.4],
        [12.9, 188.6],
        [-1.8, 189.4],
      ].map(([W, M]) => [W, M, Math.atan2(6 - W, 200 - M)]);
    R0(t, () => s.beat === "house" && !s.flags.siege);
    const oe = (W, M) => Math.hypot(W - h[0], M - h[1]);
    if (
      ((s.hordeSpots = () => {
        const W = oe(o.pos.x, o.pos.z);
        return [...F(), ...G.filter((M) => oe(M[0], M[1]) > W + 3)];
      }),
      H0(t),
      !a.fromRide && !r().speaking && g("a3_house2", { emote: "scream" }),
      await r().walkTo(h[0] + 0.3, h[1], { speed: 3.4, arrive: 0.3 }),
      n(t) ||
        (r().turnTo(h[0], h[1] + 2),
        f?.open?.(1, 0.55),
        await u(0.6),
        e.nav.rebuild(),
        n(t)))
    )
      return;
    const X = i.akaneDoor || [m[0] + 1, m[1] + 0.5];
    if (
      (await r().walkTo(X[0], X[1], { speed: 3, arrive: 0.25 }),
      n(t) ||
        (r().turnTo(h[0], h[1] - 3),
        await x(
          () =>
            n(t) ||
            (e.roomAt(o.pos.x, o.pos.z) === "house" && o.pos.z > w + 0.45),
          120,
        ),
        n(t)))
    )
      return;
    (e.audio.loops.get("amb_forest")?.fadeTo?.(0.15, 3),
      e.audio.loops.get("stream_loop")?.stop?.(2),
      g("a3_door", { emote: "scream" }));
    const se = [],
      ue = (W) => {
        const M = e.interact.add(W);
        return (se.push(M), M);
      };
    s.houseRecs = se;
    const Q = f?.usePos || [6, 1.2, w + 0.4],
      pe = () => {
        if (!s.flags.hShut) {
          s.flags.hShut = !0;
          {
            const M = w + 0.13,
              D = o.pos.x - 6.47,
              H = o.pos.z - M,
              C = Math.hypot(D, H);
            if (o.pos.z > w && C < 1.15) {
              const ce = 1.15 / Math.max(C, 0.05);
              ((o.pos.x = 6.47 + D * ce),
                (o.pos.z = M + Math.max(0.3, H * ce)),
                o.resolve?.());
            }
          }
          (f?.slam ? f.slam(0.35) : f?.open?.(0, 0.35),
            (e.player.shake += 0.2),
            Le(t, 0.45, () => e.nav.rebuild()));
          for (const W of e.zombies.alive())
            W.pos.z > w - 0.4 &&
              W.pos.z < w + 0.6 &&
              Math.abs(W.pos.x - 6) < 1 &&
              ((W.pos.z = w - 0.9), W.sync());
          (G0(t, f),
            Le(t, 0.5, () => {
              s.flags.hBar ||
                (g("a3_bar", { emote: "scream" }),
                e.hud.hint("E: drop the bar", 3));
            }));
        }
      },
      A = () => {
        s.flags.hBar ||
          !s.flags.hShut ||
          ((s.flags.hBar = !0),
          f?.bolt?.(!0),
          Le(t, 0.7, () => {
            (g("a3_windows", { emote: "scared" }),
              e.hud.hint("E: close the shutters", 4));
          }));
      };
    (ue({
      id: "h_door",
      pos: Q,
      radius: 2.2,
      cone: 0.6,
      prompt: "shut",
      enabled: () => !s.flags.hShut,
      onUse: pe,
    }),
      ue({
        id: "h_bar",
        pos: Q,
        radius: 2.2,
        cone: 0.6,
        prompt: "bar",
        enabled: () => s.flags.hShut && !s.flags.hBar,
        onUse: A,
      }),
      e.hud.hint("E: shut the door", 4));
    const N =
        l?.shutters?.list?.length && l.shutters.list[0].close
          ? l.shutters.list
          : l?.shutters
            ? [
                {
                  id: "W2",
                  pos: [9.2, 1.35, 202.74],
                  standAt: i.shutter || [8.62, 202.45, Math.PI / 2],
                  close: (W, M) => l.shutters.close(W, M),
                  get closeK() {
                    return l.shutters.closeK ?? 0;
                  },
                },
              ]
            : [],
      I = (W, M = 0.35) => {
        W._closing ||
          (W.closeK ?? 0) > 0.9 ||
          ((W._closing = !0), W.close(1, M));
      };
    for (const W of N)
      ue({
        id: "h_" + W.id,
        pos: W.pos,
        radius: 2,
        cone: 0.6,
        prompt: "close",
        enabled: () => s.flags.hBar && !W._closing,
        onUse: () => I(W),
      });
    if (
      ((async () => {
        if ((await x(() => n(t) || s.flags.hShut, 3.5), n(t))) return;
        const W = i.frontUse || [Q[0] + 0.5, Q[2] + 0.3, Math.PI];
        if (!s.flags.hShut) {
          if (
            (await r().walkTo(W[0], W[1], { speed: 2.6, arrive: 0.25 }), n(t))
          )
            return;
          (r().faceYaw(W[2] ?? Math.PI), pe(), await u(0.5));
        }
        if ((await x(() => n(t) || s.flags.hBar, 4), n(t))) return;
        s.flags.hBar ||
          (await r().walkTo(W[0], W[1], { speed: 2.4, arrive: 0.25 }),
          r().faceYaw(W[2] ?? Math.PI),
          A(),
          await u(0.6));
        const M = i.backUse || i.backDoor || [5.95, 206.14, 0];
        if (
          (await r().walkTo(M[0], M[1], { speed: 3.2, arrive: 0.2 }), !n(t))
        ) {
          (r().faceYaw(M[2] ?? 0),
            await u(0.25),
            z?.bolt?.(!0),
            g("a3_gotback"),
            await u(0.35));
          for (const D of N) {
            if (D._closing || n(t)) continue;
            const H = D.standAt || [D.pos[0], D.pos[2], 0];
            if ((await r().walkTo(H[0], H[1], { speed: 3, arrive: 0.2 }), n(t)))
              return;
            (H[2] != null && r().faceYaw(H[2]),
              await u(0.2),
              I(D, 0.4),
              await u(0.35));
          }
          s.flags.akaneDone = !0;
        }
      })(),
      await x(
        () =>
          n(t) ||
          (s.flags.hBar && N.every((W) => W._closing) && s.flags.akaneDone),
        90,
      ),
      !n(t) &&
        (await x(
          () =>
            n(t) ||
            !e.zombies
              .alive()
              .some(
                (W) =>
                  e.roomAt(W.pos.x, W.pos.z) === "house" && W.pos.z > w + 0.3,
              ),
          20,
        ),
        !n(t)))
    ) {
      for (const W of se) W.remove();
      ((s.houseRecs = null), await io(t, a));
    }
  }
  async function io(t, a = {}) {
    const l = _(),
      i = l?.points || {},
      c = l?.frontDoor;
    ((s.flags.siege = !0),
      r().lowReady(),
      (e.houseSealed = !0),
      U?.state?.on && U.setOn(!1));
    {
      const I = new Set(
        e.zombies
          .alive()
          .sort((W, M) => W.pos.distanceTo(o.pos) - M.pos.distanceTo(o.pos))
          .slice(0, 6),
      );
      e.zombies.clear((W) => !I.has(W) && !ze(W.pos.x, W.pos.z));
    }
    const h = l?.outside || {},
      m = h.ring?.length
        ? h.ring.map((I) => I.slice())
        : [
            [1.1, 198.6],
            [6, 197.9],
            [10.9, 198.6],
            [11, 203.5],
            [10.6, 208.4],
            [6, 208.9],
            [1.3, 208.3],
            [0.9, 203.5],
          ],
      f = h.windows || {};
    if (f.W2) {
      const I = m.findIndex((W) => W[0] > 10.5 && W[1] > 201.5 && W[1] < 204.2);
      I >= 0 &&
        m.splice(I, 1, [f.W2[0] + 0.08, 201.7], [f.W2[0] + 0.08, 203.6]);
    }
    const z = h.door || [6, 199, 0];
    (a.hordeLoop && (a.hordeLoop.want = 0.25),
      e.audio.loops.get("heartbeat_fast")?.fadeTo?.(0.18, 3),
      e.audio.loop("tension_drone", { vol: 0 })?.fadeTo?.(0.4, 4));
    {
      const I = e.zombies.alive().length,
        W = ["lanky", ie("soldier", "lanky"), "gown", ie("nun", "gown")],
        M = m.slice().sort(() => Math.random() - 0.5);
      for (let D = I, H = 0; D < 4 && H < M.length; H++) {
        const C = M[H];
        ze(C[0], C[1]) ||
          (e.zombies.spawn(W[D % W.length], C[0], C[1], {
            alerted: !0,
            yaw: Math.atan2(6 - C[0], 203.5 - C[1]),
          }),
          D++);
      }
    }
    G0(t, c);
    const w = (I, W) => {
        let M = 0,
          D = 1e9;
        m.forEach((C, ce) => {
          const me = Math.hypot(C[0] - I.pos.x, C[1] - I.pos.z);
          me < D && ((D = me), (M = ce));
        });
        const H = W % 2 ? 1 : -1;
        ((I.calmT = 999),
          (I.rushed = !1),
          (I._ring = { k: M, dir: H, i: W }),
          (I.goal = new Y(m[M][0], 0, m[M][1])),
          (I.path = null),
          (I.repath = 0));
      },
      L = { on: !0 };
    (async () => {
      for (; L.on && !n(t);) {
        await u(0.25);
        for (const I of e.zombies.alive())
          !I._ring ||
            I._hold ||
            (I.goal &&
              Math.hypot(I.goal.x - I.pos.x, I.goal.z - I.pos.z) < 0.6 &&
              ((I._ring.k = (I._ring.k + I._ring.dir + m.length) % m.length),
              I.goal.set(m[I._ring.k][0], 0, m[I._ring.k][1]),
              (I.path = null),
              (I.repath = 0)));
      }
    })();
    const F = (I) =>
        e.zombies
          .alive()
          .slice()
          .sort(
            (W, M) =>
              Math.hypot(W.pos.x - I[0], W.pos.z - I[1]) -
              Math.hypot(M.pos.x - I[0], M.pos.z - I[1]),
          )[0],
      G = (I, W) => {
        const M = F(I);
        return M
          ? ((M._hold = !0),
            (M.goal = new Y(I[0], 0, I[1])),
            (M.path = null),
            (M.repath = 0),
            Le(t, W, () => {
              M._hold = !1;
            }),
            M)
          : null;
      };
    if (
      (await u(0.6),
      n(t) ||
        (g("a3_lightoff"),
        e.hud.hint("F: light off", 4),
        await x(() => n(t) || !e.weapons.on, 4),
        n(t)))
    )
      return;
    (e.weapons.on && (b("flashlight_click", { vol: 0.6 }), (e.weapons.on = !1)),
      (o.speedMul = 0.32),
      (s.flags.pounding = !1));
    for (const I of e.zombies.alive())
      I._pound && ((I.forceTarget = null), (I._pound = null), (I.path = null));
    (e.zombies.alive().forEach(w), xt("off", 3), (K.want = 0.3));
    const oe = [7.25, 201.55, Math.atan2(6 - 7.25, 200 - 201.55)];
    (async () => (
      await r().walkTo(oe[0], oe[1], { speed: 1, arrive: 0.15 }),
      !n(t) &&
        (r().faceYaw(oe[2] ?? Math.PI),
        r().work({
          pos: [oe[0], oe[1]],
          yaw: oe[2] ?? Math.PI,
          hold: !1,
          crouch: 0.48,
          lean: 6,
          hop: 0,
        }),
        r().lowReady())
    ))();
    const X = (I) => u(I);
    if (
      (G(z, 4),
      b("porch_steps", { pos: [z[0], 0.4, z[1]], vol: 0.8, reverb: 0.2 }),
      f.W2 && G(f.W2, 3),
      await x(() => n(t) || !r().speaking, 3),
      n(t) ||
        (await g("a3_shh", { emote: "scared" }), n(t)) ||
        (c?.shove?.(1),
        c?.shove || b("house_door_rattle", { pos: [6, 1.2, 200], vol: 1.1 }),
        (e.player.shake += 0.2),
        (K.spike = 1),
        typeof e.post.pulse == "number" && (e.post.pulse = 1),
        await X(0.8),
        n(t)))
    )
      return;
    ((K.spike = 0), (L.on = !1));
    const se = [
      [-6, 190],
      [18, 192],
      [6, 186],
      [-4, 206],
      [16, 206],
    ];
    if (
      (e.zombies.alive().forEach((I, W) => {
        const M = se[W % se.length];
        ((I._ring = null),
          (I.goal = new Y(
            M[0] + Math.random() * 2,
            0,
            M[1] + Math.random() * 2,
          )),
          (I.path = null),
          (I.repath = 0));
      }),
      a.hordeLoop && (a.hordeLoop.want = 0),
      e.audio.loops.get("horde_forest")?.stop?.(3),
      await X(1.8),
      n(t) ||
        (e.zombies.clear((I) => !ze(I.pos.x, I.pos.z)),
        e.audio.loops.get("tension_drone")?.fadeTo?.(0.15, 4),
        await g("a3_w_gone", { emote: "sad" }),
        n(t)) ||
        (await X(1.2), n(t)) ||
        (e.zombies.clear(), await q("s3_w_real", { vol: 0.8 }), n(t)) ||
        (await X(0.6), n(t)))
    )
      return;
    (r().work(null), r().standUp());
    const ue = i.lamp || [5.2, 203.2, 0];
    if (
      (g("a3_w_lamp", { emote: "sad" }),
      await r().walkTo(ue[0], ue[1], { speed: 1, arrive: 0.2 }),
      n(t) ||
        (ue[2] != null && r().faceYaw(ue[2]),
        r().holster(),
        await u(0.6),
        n(t)) ||
        (_()?.lamp?.light?.(!0),
        e.audio.loops.get("tension_drone")?.stop?.(4),
        e.audio.loop("amb_house", { vol: 0 }).fadeTo(0.4, 3),
        e.audio.loops.get("heartbeat_fast")?.stop?.(3),
        await u(1.2),
        n(t)) ||
        ((K.want = 0.6),
        xt("mild", 5),
        await r().walkTo(
          o.pos.x + (r().pos.x - o.pos.x) * 0.3,
          o.pos.z + (r().pos.z - o.pos.z) * 0.3,
          { speed: 1, arrive: 1.1 },
        ),
        n(t)) ||
        (r().turnTo(o.pos.x, o.pos.z),
        r().lookAt(O),
        r().emote("sad", 30),
        await u(0.5),
        n(t)) ||
        (await g("a3_w_sleep", { emote: "sad", hold: 1 }), n(t)) ||
        (await u(0.3), await q("s3_w_minute", { vol: 0.8 }), n(t)))
    )
      return;
    const Q = i.bedSide || [7.38, 205.45],
      pe = l?.bed || {},
      A = pe.pos || [8.5, 0.6, 205.6];
    (s.bedRec?.remove?.(),
      (s.bedRec = e.interact.add({
        id: "bed",
        pos: [A[0], Math.max(0.5, A[1]), A[2]],
        radius: 2,
        cone: 0.7,
        prompt: "use",
        enabled: () => s.flags.bedOk && !s.flags.lying,
        onUse: () => {
          s.flags.lying = !0;
        },
      })),
      (s.flags.bedOk = !0),
      (o.speedMul = 0.7),
      e.hud.hint("E: lie down", 6),
      r().lookAt(null));
    const N = i.watch || [7.92, 203.24, -0.6];
    ((async () => (
      await r().walkTo(N[0], N[1], { speed: 1.1, arrive: 0.12 }),
      !n(t) &&
        (N[2] != null && r().faceYaw(N[2]),
        await u(0.5),
        r().sitDown(0.46),
        r().lowReady())
    ))(),
      await x(() => n(t) || s.flags.lying, 3600),
      !n(t) && (await lo(t, Q, pe)));
  }
  async function lo(t, a, l) {
    ((o.frozen = !0),
      (e.combat.invuln = 999),
      s.bedRec?.remove?.(),
      (s.bedRec = null));
    const i = _()?.points || {},
      c = l.eye || i.bedEye || [8.5, 0.88, 206.12],
      h = i.watch || [7.92, 203.24, -0.6],
      m = l.look || [h[0], 1.2, h[1]];
    (e.weapons.setVisible(!1), (e.weapons.suppress = !0));
    const f = Ke();
    (b("bed_creak", { pos: [c[0], 0.5, c[2]], vol: 0.8 }),
      Ft(
        e,
        [
          f,
          { t: 1.1, p: [a[0], 1.3, a[1]], look: [c[0], 0.6, c[2]], fov: 66 },
          { t: 2.6, p: c, look: [c[0] - 0.7, 2.6, c[2] - 0.9], fov: 60 },
          { t: 6, p: c, look: [c[0] - 0.8, 2.5, c[2] - 1.1], fov: 60 },
          { t: 8.5, p: [c[0], c[1] + 0.02, c[2]], look: m, fov: 58, roll: -10 },
        ],
        { ease: "inout" },
      ),
      (K.want = 0.6),
      await u(3),
      !n(t) &&
        (b("lullaby_soft", { vol: 0.4 }),
        await u(3.4),
        !n(t) &&
          (await g("a3_w_here", { emote: "sad" }),
          !n(t) &&
            (await T.tween(e.post, "lid", 0.35, 1.6, "inout"),
            await u(0.5),
            await T.tween(e.post, "lid", 0.8, 0.9, "out"),
            await u(1.2),
            await T.tween(e.post, "lid", 0.2, 1.8, "inout"),
            await u(0.4),
            await T.tween(e.post, "lid", 0.45, 0.8, "out"),
            await u(0.6),
            e.audio.duck("amb", 0, 12),
            await T.tween(e.post, "lid", 0, 2.4, "in"),
            !n(t) &&
              ((e.post.fade = 1),
              await u(2),
              !(n(t) || e.service) &&
                (location.href = location.pathname + "?section=3"))))));
  }
  const $t = {
      garden() {
        k()?.setWorld("dream");
        const t = S().start;
        o.place(t[0], t[1], t[2], 0);
        const a = S().akane;
        r().place(a[0], a[1], 3.9);
      },
      ruins() {
        k()?.setWorld("ruins");
        const t = S().talk;
        o.place(t[0], t[1], 2.2, 0);
        const a = S().akane;
        (r().place(a[0], a[1], 0.9), e.nav.rebuild());
      },
      street() {
        (k()?.setWorld("ruins"),
          e.nav.rebuild(),
          o.place(31, 14.2, -Math.PI / 2, 0),
          r().place(32.4, 14.9, 0.4));
      },
      backalley() {
        (k()?.setWorld("ruins"),
          e.nav.rebuild(),
          o.place(44.4, 27.4, -2.2, 0),
          r().place(45.4, 26.2, 1.4));
      },
      lane() {
        (k()?.setWorld("ruins"),
          e.nav.rebuild(),
          o.place(35.6, 42.2, Math.PI * 0.75, 0),
          r().place(34.2, 40.9, -0.9));
      },
      church() {
        (k()?.setWorld("ruins"),
          e.nav.rebuild(),
          o.place(3, 36.2, Math.PI * 0.8, 0),
          r().place(1.4, 37.4, Math.PI));
      },
      church_in() {
        (k()?.setWorld("ruins"), e.nav.rebuild());
        const t = k()?.churchIn?.points || {},
          a = t.akaneHold || [0, 41.45, Math.PI];
        (o.place(0.4, 43.2, Math.PI, 0),
          r().place(a[0], a[1], a[2] ?? Math.PI));
      },
      forest() {
        (k()?.setWorld("ruins"),
          k()?.churchIn?.backDoor?.open?.(0),
          e.nav.rebuild());
        const t = k()?.forest?.route || [
          [4.25, 64.5],
          [3, 76],
        ];
        (o.place(4.25, 63.2, Math.PI, 0),
          r().place(t[1]?.[0] ?? t[0][0], t[1]?.[1] ?? t[0][1], 0));
        const a = Tt();
        a && U && U.park(a.bike[0], a.bike[1], a.bike[2]);
      },
      house() {
        (k()?.setWorld("ruins"), e.nav.rebuild());
        const t = k()?.house?.points || {},
          a = t.porch || [6, 198.9];
        (o.place(a[0] - 0.4, a[1] - 1.6, Math.PI, 0),
          r().place(a[0] + 0.3, a[1], Math.PI));
        const l = Tt();
        l && U && U.park(l.stop[0], l.stop[1], l.stop[2]);
      },
      nave() {
        $t.church_in();
      },
      burst() {
        $t.church_in();
        const t = k()?.churchIn?.points || {},
          a = t.priest || [0, 57.3, 0],
          l = t.reveal || [0.15, 55.9];
        if ((o.place(l[0], l[1] - 0.45, Math.PI, 0), v)) {
          const i = a[2] ?? 0;
          (v.place(
            a[0] + Math.sin(i) * 0.38,
            a[1] + Math.cos(i) * 0.38,
            i + Math.PI,
          ),
            (v.z.root.visible = !0),
            v.z.setState("stand", { instant: !0 }));
        }
      },
      take() {
        $t.burst();
      },
      yard() {
        (k()?.setWorld("ruins"),
          k()?.churchIn?.backDoor?.open?.(0),
          k()?.churchIn?.barricade?.clearAll?.(),
          e.nav.rebuild());
        const t = k()?.churchIn?.points || {},
          a = t.backOut || [4.25, 63.2];
        (o.place(a[0] - 0.6, a[1] + 1.9, Math.PI * 0.92, 0),
          r().place(a[0] + 0.55, a[1] - 0.2, Math.PI));
        const l = Tt();
        l && U && U.park(l.bike[0], l.bike[1], l.bike[2]);
      },
      bridge() {
        $t.forest();
      },
    },
    W0 = (t) => async (a) => {
      (e.audio.loop("amb_ruins", { vol: 0.65 }),
        (o.speedMul = 1),
        r().lowReady(),
        r().emote("scared", 3),
        await u(0.6),
        !n(a) && (await Dt(a, it[t])));
    },
    U0 = {
      garden: Ye,
      ruins: (t) => Xe(t, !1),
      street: W0("street"),
      backalley: W0("backalley"),
      lane: W0("lane"),
      church: async (t) => {
        (e.audio.loop("amb_ruins", { vol: 0.65 }), await Ht(t));
      },
      nave: (t) => qt(t, !1),
      burst: (t) => Ne(t, !1),
      yard: (t) => g0(t),
      take: async (t) => {
        const a = tt(),
          l = re();
        (k()?.church?.burst?.(1),
          a?.barricade?.clearAll?.(),
          e.nav.rebuild(),
          (s.beat = "burst"),
          e.weapons.give("pistol"),
          e.audio.loop("amb_church", { vol: 0.5 }),
          e.audio.loop("choir_dread", { vol: 0.5 }),
          e.audio.loop("horde_moan", { pos: [0, 1.5, 38], vol: 0.6 }));
        const i = l.backIn || [4.25, 59.8];
        (r().place(i[0] - 0.2, i[1] - 0.3, Math.PI),
          r().lowReady(),
          v &&
            (v.place(0, 57.35, Math.PI),
            (v.z.root.visible = !0),
            v.solid(!0),
            R("shield", "face")),
          Ee(t));
        for (let c = 0; c < 4; c++)
          e.zombies.spawn(
            c % 2 ? "lanky" : ie("nun", "gown"),
            -1.5 + c * 1,
            50 + (c % 2) * 1.2,
            { alerted: !0, target: c % 2 ? "player" : V },
          );
        (await u(0.6), !n(t) && (await et(t)));
      },
      forest: (t) => It(t, { chat: !0 }),
      bridge: (t) => {
        const a = Tt(),
          l = a?.dodge?.[0];
        return It(t, {
          chat: !1,
          from: a ? Math.round(l ? Math.max(20, l.s0 - 25) : a.len * 0.36) : 0,
        });
      },
      house: (t) => ((K.want = 0.45), (K.k = 0.4), q0(t)),
    },
    j0 = (t) => {
      (s.run++,
        T.clear(),
        e.zombies.clear(),
        e.hud.clearSubtitle(),
        e.hud.task?.(null),
        e.hud.card("", "", !1),
        e.npc.revive?.(),
        e.npc.stop(),
        e.npc.work?.(null),
        (e.npc.grabbed = !1),
        e.npc.holster(),
        e.npc.standUp(),
        e.npc.emote("neutral"),
        (e.npc.calmHead = !1),
        (e.npc.freezeMouth = !1),
        (e.npc.noBlink = !1),
        (e.npc.eyeReflect = null),
        (e.npc.attend = !1),
        e.npc.akane &&
          ((e.npc.akane.forceFaceRes = 0), (e.npc.akane.env = null)),
        s.heart?.stop?.(0.3),
        (s.heart = null),
        (e.playerSpeaking = !1),
        (e.post.fade = 0),
        (e.post.lid = 1),
        (e.post.blur = 0),
        e.post.fadeColor.setRGB(0, 0, 0),
        (e.post.aoRadius = 0.55),
        (e.camCtl = null),
        (o.frozen = !1),
        (o.speedMul = 1),
        (s.beat = t),
        (s.flags = {}),
        e.combat.heal(),
        (e.weapons.ammo = e.weapons.mag),
        (e.weapons.reserve = 60),
        k()?.church?.open(0),
        k()?.outside?.district?.reset?.());
      for (const a of s.crateRecs || []) a.remove();
      ((s.crateRecs = null), (e.weapons.showUntil = 0));
      for (const a of [
        "horde_moan",
        "vending_hum",
        "neon_buzz",
        "amb_church",
        "amb_forest",
        "amb_house",
        "stream_loop",
        "priest_murmur",
        "heartbeat",
        "choir_dread",
        "horde_forest",
        "fever_drone",
        "heartbeat_fast",
        "tension_drone",
      ])
        e.audio.loops.get(a)?.stop?.(0.3);
      ((o.mount = null),
        (y.on = !1),
        (y.mount = null),
        (y.eng = null),
        (y.hop = null),
        s.bikeRec?.remove?.(),
        (s.bikeRec = null),
        e.npc.ride?.(null, { now: !0 }),
        (e.npc.rideReach = null),
        U?.away?.(),
        (e.weapons.torchMul = 1),
        (e.beamLight = null),
        U && ((U.engineVol = 1), (U.onboard = !1)));
      for (const a of s.houseRecs || []) a.remove();
      ((s.houseRecs = null), e.audio.muffle?.(0, 0.1), xt("off", 0.1));
      for (const a of ["trail", "ghost", "tunnel", "warp", "bleed"])
        typeof e.post[a] == "number" && (e.post[a] = 0);
      (typeof e.post.pulse == "number" && (e.post.pulse = 0),
        (s.onPriestHit = null),
        (s.pr = null),
        (s.hordeSpots = null),
        (e.lookMul = {}),
        (e.postOwned = !1),
        (e.fovKick = 0),
        (e.houseSealed = !1),
        k()?.churchIn?.barricade?.reset?.(),
        k()?.churchIn?.window?.reset?.(),
        s.siege?.stop?.(),
        (s.siege = null),
        (s.murmur = null),
        (s.naveHeart = null),
        v &&
          ((v.z.root.visible = !1),
          (v.walk = null),
          (v.yawTw = null),
          (v.talking = !1),
          v.setLook(null),
          v.solid(!1),
          v.z.setFade?.(1),
          v.z.holdLantern?.(!1),
          v.z.selfLight?.(0)),
        k()?.churchIn?.backDoor?.open?.(0),
        k()?.house?.reset?.(),
        (e.weapons.suppress = !1),
        k()?.forest?.lanterns?.reset?.(),
        k()?.forest?.fireflies?.reset?.(),
        s.bedRec?.remove?.(),
        (s.bedRec = null),
        s.backRec?.remove?.(),
        (s.backRec = null),
        (K.want = 0),
        (K.k = 0),
        (K.spike = 0),
        (o.lean -= K.lean || 0),
        (K.lean = 0),
        (e.post.ca = 0.0016),
        ($t[t] || $t.garden)(),
        k()?.snapLook?.(),
        Ie(t !== "garden"));
    };
  return (
    (s.goto = async function (a) {
      j0(a);
      const l = s.run;
      (e.audio.unlock?.(), (s.running = !0));
      try {
        await (U0[a] || Ye)(l);
      } catch (i) {
        console.error("[script2]", i);
      }
      s.running = !1;
    }),
    (s.enter = async function (a) {
      j0(a);
      for (let l = 0; l < 6; l++) e.step(1 / 30);
    }),
    (s.start = () =>
      s.goto(new URLSearchParams(location.search).get("beat") || "garden")),
    (s.restartBeat = () =>
      s.goto(
        s.beat === "church_in" ? "church" : U0[s.beat] ? s.beat : "ruins",
      )),
    (s.priest = v),
    (s.sick = K),
    (s.seenAt = ze),
    (s.eyeShot = je),
    s
  );
}
export { da as createScript2 };
