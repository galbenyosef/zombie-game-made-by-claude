// assets/index-DQDjAbEY 21 — replace
// Lines 5964-6160 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
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
