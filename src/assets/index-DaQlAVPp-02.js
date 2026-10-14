// assets/index-DaQlAVPp 02 — assets/index-daqlavpp
// Lines 35432-35845 of readable/assets/index-DaQlAVPp.pretty.js (statement-aligned).
const VM = `
precision highp float;
varying vec2 vUv;
uniform sampler2D tDepth;
uniform mat4 uInvProj;
uniform mat4 uProj;
uniform vec2 uTexel;
uniform float uRadius;      // world metres
uniform float uBias;
uniform float uIntensity;
uniform float uFrame;
const int N = 14;

vec3 viewPos(vec2 uv) {
  float d = texture2D(tDepth, uv).x;
  vec4 p = uInvProj * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  return p.xyz / p.w;
}
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }

void main() {
  float d0 = texture2D(tDepth, vUv).x;
  if (d0 >= 0.99999 || d0 < 0.6) { gl_FragColor = vec4(1.0); return; }        // sky, and the view model (its depth is squashed below 0.6)
  vec3 P = viewPos(vUv);
  vec3 Pl = viewPos(vUv - vec2(uTexel.x, 0.0)), Pr = viewPos(vUv + vec2(uTexel.x, 0.0));
  vec3 Pd = viewPos(vUv - vec2(0.0, uTexel.y)), Pu = viewPos(vUv + vec2(0.0, uTexel.y));
  vec3 dx = abs(Pr.z - P.z) < abs(P.z - Pl.z) ? Pr - P : P - Pl;
  vec3 dy = abs(Pu.z - P.z) < abs(P.z - Pd.z) ? Pu - P : P - Pd;
  vec3 Nv = normalize(cross(dx, dy));
  if (dot(Nv, P) > 0.0) Nv = -Nv;
  float scale = 0.5 * uProj[1][1] / max(-P.z, 0.05);        // metres -> uv (y) at this depth
  float rad = min(uRadius * scale, 0.22);
  float ang0 = ign(gl_FragCoord.xy + uFrame * 5.588) * 6.2831853;
  float occ = 0.0;
  for (int i = 0; i < N; i++) {
    float fi = (float(i) + 0.5) / float(N);
    float a = ang0 + fi * 6.2831853 * 3.0;                   // 3 turns
    float r = rad * (0.15 + 0.85 * fi * fi * 0.5 + 0.35 * fi);
    vec2 off = vec2(cos(a), sin(a)) * r * vec2(uTexel.y / uTexel.x, 1.0);
    if (texture2D(tDepth, vUv + off).x < 0.6) continue;                    // the view model never occludes the world
    vec3 S = viewPos(vUv + off);
    vec3 V = S - P;
    float vv = dot(V, V);
    float vn = dot(V, Nv) - uBias * max(-P.z, 0.3) * 0.01;
    float range = smoothstep(0.0, 1.0, uRadius / max(abs(P.z - S.z), 1e-4));
    occ += max(vn, 0.0) / (vv + 0.02 * uRadius * uRadius) * range;
  }
  occ = occ * 2.0 * uRadius / float(N);
  float ao = clamp(1.0 - occ * uIntensity, 0.0, 1.0);
  gl_FragColor = vec4(ao, ao, ao, 1.0);
}
`,
  GM = `
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
uniform sampler2D tDepth;
uniform vec2 uDir;          // texel step
uniform mat4 uInvProj;
float lin(vec2 uv) {
  float d = texture2D(tDepth, uv).x;
  vec4 p = uInvProj * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  return -p.z / p.w;
}
void main() {
  float z0 = lin(vUv);
  float sum = 0.0, wsum = 0.0;
  for (int i = -4; i <= 4; i++) {
    vec2 uv = vUv + uDir * float(i);
    float z = lin(uv);
    float w = exp(-float(i * i) * 0.09) * exp(-abs(z - z0) * 6.0 / max(z0, 0.3));
    sum += texture2D(tSrc, uv).x * w; wsum += w;
  }
  float v = sum / max(wsum, 1e-4);
  gl_FragColor = vec4(v, v, v, 1.0);
}
`,
  HM = `
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uThreshold;
uniform float uKnee;
// (clamped: a stray negative or overflowed texel must not poison the whole blur pyramid)
vec3 fetch(vec2 uv) { vec3 c = texture2D(tSrc, uv).rgb; return (any(isnan(c)) || any(isinf(c))) ? vec3(0.0) : clamp(c, vec3(0.0), vec3(64.0)); }
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
void main() {
  vec3 a = fetch(vUv + uTexel * vec2(-1.0, -1.0)), b = fetch(vUv + uTexel * vec2(1.0, -1.0));
  vec3 c = fetch(vUv + uTexel * vec2(-1.0, 1.0)), d = fetch(vUv + uTexel * vec2(1.0, 1.0));
  // Karis average: kills fireflies from single hot texels
  float wa = 1.0 / (1.0 + luma(a)), wb = 1.0 / (1.0 + luma(b)), wc = 1.0 / (1.0 + luma(c)), wd = 1.0 / (1.0 + luma(d));
  vec3 col = (a * wa + b * wb + c * wc + d * wd) / (wa + wb + wc + wd);
  float br = max(col.r, max(col.g, col.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-4);
  float k = max(soft, br - uThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(col * k, 1.0);
}
`,
  WM = `
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
uniform vec2 uTexel;
void main() {
  vec2 t = uTexel;
  vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
  c += texture2D(tSrc, vUv + t * vec2(-1.0, -1.0)).rgb + texture2D(tSrc, vUv + t * vec2(1.0, -1.0)).rgb;
  c += texture2D(tSrc, vUv + t * vec2(-1.0, 1.0)).rgb + texture2D(tSrc, vUv + t * vec2(1.0, 1.0)).rgb;
  c *= 0.125;
  c += 0.0625 * (texture2D(tSrc, vUv + t * vec2(-2.0, 0.0)).rgb + texture2D(tSrc, vUv + t * vec2(2.0, 0.0)).rgb
               + texture2D(tSrc, vUv + t * vec2(0.0, -2.0)).rgb + texture2D(tSrc, vUv + t * vec2(0.0, 2.0)).rgb) * 0.5;
  gl_FragColor = vec4(c, 1.0);
}
`,
  XM = `
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uWeight;
void main() {
  vec2 t = uTexel * 1.0;
  vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
  c += 2.0 * (texture2D(tSrc, vUv + vec2(t.x, 0.0)).rgb + texture2D(tSrc, vUv - vec2(t.x, 0.0)).rgb
            + texture2D(tSrc, vUv + vec2(0.0, t.y)).rgb + texture2D(tSrc, vUv - vec2(0.0, t.y)).rgb);
  c += texture2D(tSrc, vUv + t).rgb + texture2D(tSrc, vUv - t).rgb
     + texture2D(tSrc, vUv + vec2(t.x, -t.y)).rgb + texture2D(tSrc, vUv + vec2(-t.x, t.y)).rgb;
  gl_FragColor = vec4(c * (1.0 / 16.0) * uWeight, 1.0);
}
`,
  qM = `
precision highp float;
varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tHist;
uniform sampler2D tDepth;
uniform vec2 uHTexel;        // history texel x the diffusion step
uniform vec2 uMotion;        // how far the picture moved on the screen since the last frame (uv): the camera turning
uniform vec3 uDecay;
uniform float uExposure;
uniform vec2 uThresh;        // where "bright" starts and is full (luma after exposure)
uniform float uFresh;        // 1: no history (it just started)
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
vec3 bright(vec2 uv) {
  if (texture2D(tDepth, uv).x < 0.6) return vec3(0.0);                // (the hands, the gun, the torch go where the eye goes: no trail)
  vec3 c = texture2D(tScene, uv).rgb;                                 // (one bilinear tap at a half-res texel's middle: a 2x2 box)
  c = (any(isnan(c)) || any(isinf(c))) ? vec3(0.0) : clamp(c, vec3(0.0), vec3(64.0));
  float l = luma(c * uExposure);
  return c * smoothstep(uThresh.x, uThresh.y, l) / (1.0 + 0.7 * l);     // (the hottest glass compressed: a soft comet, not a tracer)
}
void main() {
  // this frame's bright light where it is now, and swept back along the way it came since the last frame (a light that
  // crossed the screen in one frame leaves one continuous streak, not a string of beads)
  vec3 src = bright(vUv), cur = src;
  float sl = luma(src);
  for (int i = 1; i < 6; i++) { vec3 s = bright(vUv + uMotion * (float(i) / 5.0)); float l = luma(s); if (l > sl) { src = s; sl = l; } }
  vec3 h = vec3(0.0);
  if (uFresh < 0.5) {
    // (a centre-weighted 5 taps under a texel apart: an even blur that grows frame by frame, never a comb of copies)
    h = (texture2D(tHist, vUv).rgb * 0.36 + (texture2D(tHist, vUv + uHTexel * vec2(-1.0, -0.35)).rgb + texture2D(tHist, vUv + uHTexel * vec2(1.0, 0.35)).rgb
       + texture2D(tHist, vUv + uHTexel * vec2(0.35, -1.0)).rgb + texture2D(tHist, vUv + uHTexel * vec2(-0.35, 1.0)).rgb) * 0.16) * uDecay;
  }
  gl_FragColor = vec4(max(src, h), luma(cur));
}
`,
  YM = `
precision highp float;
varying vec2 vUv;
uniform sampler2D tSrc;
uniform vec2 uTexel;         // full-res texel
vec3 fetch(vec2 uv) { vec3 c = texture2D(tSrc, uv).rgb; return (any(isnan(c)) || any(isinf(c))) ? vec3(0.0) : clamp(c, vec3(0.0), vec3(64.0)); }
void main() {
  vec3 c = fetch(vUv + uTexel * vec2(-1.0, -1.0)) + fetch(vUv + uTexel * vec2(1.0, -1.0)) + fetch(vUv + uTexel * vec2(-1.0, 1.0)) + fetch(vUv + uTexel * vec2(1.0, 1.0));
  vec3 r = fetch(vUv + uTexel * vec2(-3.5, 0.0)) + fetch(vUv + uTexel * vec2(3.5, 0.0)) + fetch(vUv + uTexel * vec2(0.0, -3.5)) + fetch(vUv + uTexel * vec2(0.0, 3.5));
  gl_FragColor = vec4(c * 0.17 + r * 0.08, 1.0);
}
`,
  ZM = `
precision highp float;
varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform sampler2D tAO;
uniform sampler2D tDepth;
uniform vec2 uRes;
uniform mat4 uInvProj;
uniform float uTime;
uniform float uExposure;
uniform float uBloom;
uniform float uAO;
uniform float uVignette;
uniform float uGrain;
uniform float uCA;
uniform float uSharpen;
uniform float uSat;
uniform float uContrast;
uniform vec3 uLift;
uniform vec3 uGain;
uniform float uFade;         // 0 = picture, 1 = black
uniform vec3 uFadeColor;
uniform float uHurt;         // 0..1 red edges + desaturation
uniform float uLid;          // 1 = eyes open, 0 = closed
uniform float uBlur;         // 0..1 sleepy blur (radial-weighted)
uniform float uFocus;        // metres (DOF) ; 0 = off
uniform float uAperture;     // CoC per metre of defocus, in uv
uniform float uDirt;
// SARA'S FEVER (each 0 = off: a uniform branch, nothing fetched). JS shapes them (Post.render): see the class.
uniform sampler2D tTrail;    // the persistence history (half res): rgb old bright light, a = this frame's own
uniform sampler2D tSoft;     // the soft copy (quarter res)
uniform float uTrail;        // the afterimages' strength
uniform float uGhost;        // double vision
uniform vec3 uGhostXf;       // the second image: offset (uv) x, y; scale
uniform float uPulse;        // the heartbeat's envelope
uniform float uTunnel;
uniform float uWarp;
uniform vec3 uBreath;        // the breath (-1..1), the centre it swells round (uv)
uniform float uBleed;
uniform float uFxT;          // seconds (the slow drifts)
// THE TORCH IN THE MIST (post.beamFog x post.beamLight, a SpotLight): its light scattered by the air along each view ray, up
// to the first surface (the depth), thicker in the ground mist
uniform float uBeamK;
uniform vec3 uBeamPos;       // view space
uniform vec3 uBeamDir;       // view space, unit
uniform vec2 uBeamCos;       // cos of the outer edge, of the full-strength core
uniform vec3 uBeamCol;       // colour x candela x the air's density
uniform vec4 uViewY;         // the world height of a view-space point: xyz . p + w

vec3 aces(vec3 x) {
  x *= 1.0 / 0.6;                                          // same exposure convention as three's ACESFilmic
  const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 encodeSRGB(vec3 c) {
  vec3 lo = c * 12.92;
  vec3 hi = 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055;
  return mix(lo, hi, step(vec3(0.0031308), c));
}
float linDepth(vec2 uv) {
  float d = texture2D(tDepth, uv).x;
  vec4 p = uInvProj * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  return -p.z / p.w;
}
float vnoise2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x), mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y); }
float fbm3(vec2 p) { return vnoise2(p) * 0.55 + vnoise2(p * 2.03 + 7.1) * 0.3 + vnoise2(p * 4.1 - 3.3) * 0.15; }
float fbm4(vec2 p) { return vnoise2(p) * 0.5 + vnoise2(p * 2.01 + 3.7) * 0.25 + vnoise2(p * 4.03 - 1.9) * 0.15 + vnoise2(p * 8.1 + 9.2) * 0.1; }

void main() {
  vec2 sv = vUv, sc = sv - 0.5;                // the SCREEN: the vignette, the lids, tunnel vision and the ink stay put on it
  float sr2 = dot(sc, sc);
  float aspect = uRes.x / uRes.y;
  vec2 uv = vUv;                               // where the picture is fetched from
  // ---- WARP: the world breathing. The picture swells round a slowly wandering centre and sinks back, more toward the
  // edges (a lens breathing in), and the whole field sways on very long waves (never a ripple); a little zoom in so
  // nothing from beyond the frame shows. The colours split a little at the edges with it.
  float warpCA = 0.0;
  if (uWarp > 0.0) {
    vec2 c0 = uBreath.yz;
    vec2 d = (uv - c0) * vec2(aspect, 1.0);
    d *= 1.0 - uWarp * 0.042 * uBreath.x * (0.35 + dot(d, d));
    d += uWarp * 0.011 * vec2(sin(d.y * 2.3 + uFxT * 0.31), sin(d.x * 1.9 - uFxT * 0.27));
    uv = c0 + d / vec2(aspect, 1.0);
    uv = 0.5 + (uv - 0.5) * (1.0 - 0.065 * uWarp);
    warpCA = uWarp * (0.55 + 0.45 * abs(uBreath.x));
  }
  // ---- PULSE: the heartbeat throbs the picture toward you
  if (uPulse > 0.0) uv = 0.5 + (uv - 0.5) * (1.0 - 0.014 * uPulse);
  vec2 cc = uv - 0.5;
  float r2 = dot(cc, cc);
  // chromatic aberration: radial, grows toward the corners
  vec2 ca = cc * (uCA * (0.4 + 2.4 * r2) + warpCA * 0.004 * (0.15 + 3.2 * r2));
  vec3 col;
  // depth of field: gather in a spiral when a focus distance is set, else a plain chromatic fetch
  float blurR = 0.0;
  if (uFocus > 0.0) {
    float z = linDepth(uv);
    blurR = clamp(abs(z - uFocus) / max(z, 0.2) * uAperture, 0.0, 0.02);
  }
  blurR = max(blurR, uBlur * 0.012 * (0.35 + 1.6 * r2));
  if (blurR > 0.0006) {
    vec3 acc = vec3(0.0); float wsum = 0.0;
    float rot = hash12(gl_FragCoord.xy) * 6.2831853;
    for (int i = 0; i < 20; i++) {
      float fi = (float(i) + 0.5) / 20.0;
      float a = rot + float(i) * 2.399963;
      vec2 o = vec2(cos(a), sin(a)) * sqrt(fi) * blurR * vec2(uRes.y / uRes.x, 1.0);
      vec3 s = texture2D(tScene, uv + o).rgb;
      float w = 1.0 + luma(s) * 0.6;                        // bright things bloom into bokeh
      acc += s * w; wsum += w;
    }
    col = acc / wsum;
  } else {
    col.r = texture2D(tScene, uv + ca).r;
    col.g = texture2D(tScene, uv).g;
    col.b = texture2D(tScene, uv - ca).b;
  }
  // sharpen (cheap unsharp on the raw scene, kept away from very bright pixels)
  if (uSharpen > 0.0 && blurR < 0.0006) {
    vec2 t = 1.0 / uRes;
    vec3 nb = texture2D(tScene, uv + vec2(t.x, 0.0)).rgb + texture2D(tScene, uv - vec2(t.x, 0.0)).rgb
            + texture2D(tScene, uv + vec2(0.0, t.y)).rgb + texture2D(tScene, uv - vec2(0.0, t.y)).rgb;
    vec3 sh = col - nb * 0.25;
    col += sh * uSharpen * (1.0 / (1.0 + luma(col) * 0.5));
  }
  float ao = mix(1.0, texture2D(tAO, uv).x, uAO);
  col *= ao;
  vec3 bloom = texture2D(tBloom, uv).rgb;
  // ---- GHOST: double vision. A second image, offset and drifting (her eyes cannot hold it: they part, come together,
  // part again), faint over the dark, strong on whatever is bright; the glows double with it
  if (uGhost > 0.0) {
    vec2 guv = 0.5 + (uv - 0.5) * uGhostXf.z + uGhostXf.xy;
    vec3 g = texture2D(tScene, guv).rgb, gb = texture2D(tBloom, guv).rgb;
    float gk = smoothstep(0.2, 1.3, luma(g * uExposure));
    col = mix(col, g, uGhost * 0.36) + g * gk * uGhost * 0.6;
    bloom = mix(bloom, gb, uGhost * 0.4) + gb * uGhost * 0.3;
  }
  col += bloom * uBloom;
  // ---- the torch's light in the air (10 steps along the ray, jittered: the grain hides the steps)
  if (uBeamK > 0.0) {
    float dz = texture2D(tDepth, uv).x;
    vec4 vp = uInvProj * vec4(uv * 2.0 - 1.0, dz * 2.0 - 1.0, 1.0);
    vec3 P = vp.xyz / vp.w;
    float L = dz < 0.6 ? 0.45 : min(length(P), 22.0);                 // (the hands: only the air in front of them)
    vec3 rd = normalize(P);
    // (interleaved gradient noise: an even dither the grain hides, where white noise sparkled)
    float st = L / 12.0, j = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))), acc = 0.0;
    for (int i = 0; i < 12; i++) {
      vec3 p = rd * ((float(i) + j) * st);
      vec3 v = p - uBeamPos;
      float d2 = dot(v, v) + 1e-4;
      float spot = smoothstep(uBeamCos.x, uBeamCos.y, dot(v, uBeamDir) * inversesqrt(d2)); spot *= spot;   // (the core holds the light: a shaft, not a veil)
      float y = dot(uViewY.xyz, p) + uViewY.w;
      acc += spot * (1.0 + 2.4 * exp(-max(y, 0.0) / 1.1)) / (pow(d2, 0.75) + 0.35);
    }
    col += uBeamCol * acc * st * uBeamK;
  }
  // ---- TRAIL: persistence - bright light leaves a soft afterimage where it was (only what is older than this frame's own)
  if (uTrail > 0.0) {
    vec4 h = texture2D(tTrail, uv);
    col += h.rgb * clamp(1.0 - h.a / max(luma(h.rgb), 1e-5), 0.0, 1.0) * uTrail;
  }
  // ---- the edges SMEAR: the heartbeat's zoom out from the middle, tunnel vision (the soft copy, gathered along the line
  // to the centre); tunnel vision also darkens the edges and takes their colour (below)
  float tun = 0.0;
  if (uTunnel > 0.0) {
    float rr = length(sc * vec2(aspect, 1.0)) / length(vec2(aspect, 1.0) * 0.5);       // 0 the centre .. 1 a corner
    float r0 = mix(0.92, 0.2, uTunnel);
    tun = smoothstep(r0, r0 + mix(0.4, 0.62, uTunnel), rr) * uTunnel;
  }
  float smK = max(uPulse * smoothstep(0.0, 0.32, sr2 * 3.2), tun);
  if (smK > 0.002) {
    float span = uPulse * 0.075 + tun * 0.15;
    float j = hash12(gl_FragCoord.xy + 3.7);
    vec3 acc = vec3(0.0);
    for (int i = 0; i < 6; i++) acc += texture2D(tSoft, 0.5 + cc * (1.0 - span * (float(i) + j) / 6.0)).rgb;
    col = mix(col, acc / 6.0 + bloom * uBloom, min(smK, 1.0));
  }
  col *= uExposure;
  // lift / gain grade (linear), then the curve
  col = col * uGain + uLift * (1.0 - col) * 0.5 * (1.0 - clamp(luma(col) * 2.0, 0.0, 1.0));
  vec3 mapped = aces(col);
  float l = luma(mapped);
  mapped = mix(vec3(l), mapped, uSat);
  // contrast as an S-curve on the display value: 0 and 1 stay put, only the mids separate
  vec3 scv = mapped * mapped * (3.0 - 2.0 * mapped);
  mapped = mix(mapped, scv, clamp((uContrast - 1.0) * 4.0, 0.0, 1.0));
  mapped = max(mapped, 0.0);
  // ---- the colour drains: the heartbeat dips it all for a moment; tunnel vision takes it from the edges and darkens them
  if (uPulse > 0.0 || tun > 0.0) {
    mapped = mix(mapped, vec3(luma(mapped)), min(uPulse * 0.45 + tun * 0.85, 1.0));
    mapped *= (1.0 - uPulse * 0.12) * (1.0 - tun * 0.82);
  }
  // hurt: red at the edges, colour drains
  float edge = smoothstep(0.08, 0.62, sr2 * 2.6);
  mapped = mix(mapped, vec3(luma(mapped)) * vec3(1.0, 0.8, 0.8), uHurt * 0.55);
  mapped = mix(mapped, vec3(0.45, 0.0, 0.0) * (0.4 + mapped * 0.6), uHurt * edge * 0.85);
  // vignette (the heartbeat squeezes it in)
  mapped *= 1.0 - (uVignette + uPulse * 0.5) * smoothstep(0.12 - uPulse * 0.08, 0.62 - uPulse * 0.14, sr2 * 2.2);
  // ---- BLEED: the dark creeping in from the edges like ink in water - a front of slow billows (domain-warped noise,
  // drifting), a faint plum-black stain where it is thin, black where it is thick, the light only a ghost through it
  if (uBleed > 0.0) {
    vec2 p = sc * vec2(aspect, 1.0);
    float rr = length(p) / length(vec2(aspect, 1.0) * 0.5);
    float front = mix(1.3, 0.28, uBleed);
    if (rr > front - 0.5) {
      vec2 q = p * 2.3;
      vec2 w = vec2(fbm3(q * 0.7 + vec2(uFxT * 0.021, -uFxT * 0.017)), fbm3(q * 0.7 + vec2(-uFxT * 0.019, uFxT * 0.023) + 5.2));
      float n = fbm4(q + (w - 0.5) * 2.8 + vec2(uFxT * 0.012, uFxT * 0.009));
      float ink = smoothstep(front - 0.1, front + 0.24, rr + (n - 0.5) * 0.75);
      vec3 inkCol = mapped * 0.06 + vec3(0.0065, 0.0032, 0.0042) * (1.0 - smoothstep(0.25, 0.85, ink));
      mapped = mix(mapped, inkCol, ink);
    }
  }
  // eyelids: two soft curved lids closing from the top and the bottom (uLid 1 = open, 0 = shut)
  if (uLid < 0.999) {
    float half_ = uLid * 0.56;                                   // half the open gap, in uv
    float curve = 0.10 * (1.0 - cos(sc.x * 3.14159 * 1.6)) * 0.5;    // the lids bow: lower at the sides
    float soft = 0.035 + 0.06 * (1.0 - uLid);
    float top = 0.5 + half_ - curve, bot = 0.5 - half_ + curve;
    float m = smoothstep(bot - soft, bot + soft, sv.y) * (1.0 - smoothstep(top - soft, top + soft, sv.y));
    mapped *= m;
  }
  mapped = mix(mapped, uFadeColor, uFade);
  vec3 srgb = encodeSRGB(mapped);
  // grain (more in the dark) + triangular dither so dark gradients do not band
  float g = hash12(gl_FragCoord.xy + uTime * 61.7) + hash12(gl_FragCoord.yx * 1.37 + uTime * 17.3) - 1.0;
  srgb += g * (uGrain * (1.15 - l) + 1.0 / 255.0);
  gl_FragColor = vec4(srgb, 1.0);
}
`;
