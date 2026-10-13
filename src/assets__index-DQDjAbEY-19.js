// assets__index-DQDjAbEY 19 — assets__index-dqdjabey
// Lines 5389-5729 of readable/assets__index-DQDjAbEY.pretty.js (statement-aligned).
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
