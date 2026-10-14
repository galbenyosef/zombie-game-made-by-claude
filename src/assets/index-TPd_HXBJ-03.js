// assets/index-TPd_HXBJ 03 — band
// Lines 576-1041 of readable/assets/index-TPd_HXBJ.pretty.js (statement-aligned).
const ct = (t) => (e, o, n, a) => [
    t[0] + (t[2] - t[0]) * n,
    t[1] + (t[3] - t[1]) * a,
  ],
  O = {
    PLAIN: 0,
    STEEL: 1,
    PAINT: 2,
    RUBBER: 3,
    FLOOR: 4,
    FABRIC: 5,
    LINING: 6,
    LED: 7,
    DECAL: 8,
    GLOW: 9,
    HEAD: 10,
    TAIL: 11,
    DOORLAMP: 12,
    MASK: 13,
    UNDER: 14,
    WHEEL: 15,
    ROUTE: 16,
    SCROLL: 17,
    BUTTON: 18,
    BAND: 19,
    FOAM: 20,
    SMEAR: 21,
    SLOTS: 23,
  },
  yn = `
attribute vec4 aSurf;
attribute float aAnim;
varying vec4 trSurf;
varying vec3 trObj;
varying vec3 trObjN;
uniform vec4 uDoor;          // x the car's left doors open (m of a leaf's travel), y the right's
uniform float uWheel;        // the wheels' angle (rad)
uniform float uKnock;        // car 2's rear gangway door: how far it is jolted along x (m) - something banging on it
uniform float uKnockF;       // its front gangway door's (anim 8), into the car along -x
uniform vec2 uGang;          // car 2's gangway doors slid open across the opening (m): x the rear (anim 7), y the front (anim 8)
`,
  vn = `
#ifdef TR_WHEELS
if (aAnim > 4.5 && aAnim < 6.5) { float trCs = cos(uWheel), trSn = sin(uWheel); objectNormal.xy = vec2(objectNormal.x * trCs - objectNormal.y * trSn, objectNormal.x * trSn + objectNormal.y * trCs); }
#endif
`,
  wn = `
trObjN = objectNormal; trSurf = aSurf;
if (aAnim > 0.5 && aAnim < 4.5) {
  float trOpen = aAnim < 2.5 ? uDoor.x : uDoor.y;
  float trDir = (aAnim < 1.5 || (aAnim > 2.5 && aAnim < 3.5)) ? -1.0 : 1.0;
  transformed.x += trDir * trOpen;
}
if (aAnim > 6.5 && aAnim < 7.5) { transformed.x += uKnock; transformed.z += uGang.x; }
if (aAnim > 7.5 && aAnim < 8.5) { transformed.x -= uKnockF; transformed.z -= uGang.y; }
#ifdef TR_WHEELS
if (aAnim > 4.5 && aAnim < 6.5) {
  vec2 trC = vec2(aAnim < 5.5 ? 1.05 : -1.05, 0.42);
  vec2 trQ = transformed.xy - trC; float trCs = cos(uWheel), trSn = sin(uWheel);
  transformed.xy = trC + vec2(trQ.x * trCs - trQ.y * trSn, trQ.x * trSn + trQ.y * trCs);
}
#endif
trObj = transformed;
`,
  kn = `
varying vec4 trSurf;
varying vec3 trObj;
varying vec3 trObjN;
uniform sampler2D tDecal;
uniform float uTime;
uniform vec4 uDoor;          // x, y the doors open (m); z, w the red lamps over them (0..1)
uniform vec3 uZone;          // the light of the car's three zones (front, middle, rear of the car's own frame)
uniform float uLight;        // the car's light, all in all (the reflections and the fill follow it)
uniform float uPower;        // the train's power (displays, buttons)
uniform float uHead;         // headlights 0..1
uniform float uTail;         // tail lamps 0..1
uniform vec4 uLamps;         // the route map's four station lamps (0 dark .. 1 lit)
uniform vec4 uCar;           // x grime, y blood / darkness (car 3), z the car's seed, w the doors' buttons lit
uniform vec2 uBtn;           // the door buttons lit, left / right
#ifdef TR_WHEELS
uniform float uWheelF;       // (the wheels' angle, for their marks)
#endif
#ifdef TR_INT
uniform sampler2D tMoq;
uniform sampler2D tMoqN;
uniform sampler2D tFloor;
uniform sampler2D tFloorN;
uniform sampler2D tFloorO;
uniform mat3 uToCar;         // world -> the car's frame (its rotation)
uniform vec3 uBoxMin;        // the inner box the interior was captured in (car frame) ...
uniform vec3 uBoxMax;
uniform vec3 uBoxEye;        // ... and the point it was captured from
uniform float uEnvK;         // the captured interior's strength (follows the lights)
uniform float uEnvD;         // ... its share as fill (diffuse)
uniform vec3 uCarPos;        // the car's origin (world)
uniform float uCab;          // 1: a cab car (its cab at +x, behind the partition at x 7.05)
uniform float uStripK;       // the LED strips' light (cd per metre of strip, roughly)
float trBand(float x, float a, float b) { return smoothstep(a - 0.015, a + 0.015, x) * (1.0 - smoothstep(b - 0.015, b + 0.015, x)); }
/** THE CAR'S BODY IN THE WAY of a light (point / spot, its position in view space): 1 for a light inside the car (its own,
 *  a torch carried in), else how much of it comes in through the windows and the doors on the way from this fragment to
 *  it (the station's lamps draw the windows on the seats; the tunnel's lamps slide through the car as it passes them) */
float trOcc(vec3 lv) {
  vec3 lw = (vec4(lv - viewMatrix[3].xyz, 0.0) * viewMatrix).xyz;
  vec3 lc = uToCar * (lw - uCarPos);
  vec3 f = trObj;
  // (a cab car's cab is its own room: the passengers' lights reach it only through its door's window)
  if (uCab > 0.5 && (f.x > 7.07) != (lc.x > 7.07) && abs(lc.z) < 1.36 && abs(lc.x) < 8.78) return 0.05;
  // (the car's own lights stand in for its LED strips, which face down: what is above them gets little of their light)
  if (abs(lc.z) < 1.36 && lc.y > 0.95 && lc.y < 3.5 && abs(lc.x) < 8.78) return lc.y > 2.9 ? mix(1.0, 0.1, smoothstep(lc.y - 0.25, lc.y + 0.05, f.y)) : 1.0;
  if (abs(lc.z) < 1.36) return 0.02;
  float sz = lc.z > 0.0 ? 1.0 : -1.0;
  float t = (1.36 * sz - f.z) / (lc.z - f.z);
  vec3 q = f + (lc - f) * clamp(t, 0.0, 1.0);
  float ax = abs(q.x);
  float win = trBand(q.y, 1.95, 2.95) * (trBand(ax, 1.4, 2.92) + trBand(ax, 3.08, 4.6) + trBand(ax, 7.42, 8.45)) * 0.85;
  float open = sz > 0.0 ? uDoor.y : uDoor.x, gap = min(0.65, open), door = 0.0;
  for (int i = 0; i < 3; i++) {
    float dx = abs(q.x - (float(i) - 1.0) * 6.0);
    door += (1.0 - smoothstep(gap - 0.02, gap + 0.02, dx)) * step(0.01, gap) * trBand(q.y, 1.1, 3.0);
    door += trBand(dx - open, 0.1, 0.54) * trBand(q.y, 1.96, 2.9) * 0.85 * (1.0 - smoothstep(0.63, 0.67, dx));
  }
  return max(0.02, clamp(win + door, 0.0, 1.0) * step(abs(q.x), 8.8));
}
#endif
uniform vec2 uEnvBoost;      // the outside: the scene's environment x (specular, diffuse) - steel in a dark station
uniform float uDirRough;     // the lamps' highlights (direct light) are never sharper than this: the train's long LED strips
                             // are point lights here, and their true reflections come from the captured interior
float trHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float trN(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(trHash(i), trHash(i + vec3(1.0, 0.0, 0.0)), f.x), mix(trHash(i + vec3(0.0, 1.0, 0.0)), trHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(trHash(i + vec3(0.0, 0.0, 1.0)), trHash(i + vec3(1.0, 0.0, 1.0)), f.x), mix(trHash(i + vec3(0.0, 1.0, 1.0)), trHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
float trF(vec3 p) { return 0.5 * trN(p) + 0.25 * trN(p * 2.03 + 1.7) + 0.125 * trN(p * 4.07 - 3.1) + 0.0625 * trN(p * 8.13 + 5.3); }
// what the surface step made of this fragment (used by the roughness / metalness / normal / emissive steps)
float trRough = 0.5, trMetal = 0.0, trH = 0.0, trSheen = 0.0, trAlpha = 1.0, trReflF = 1.0;
vec3 trGlow = vec3(0.0);
vec3 trTN = vec3(0.0, 0.0, 1.0); float trUseTN = 0.0; vec2 trTUV = vec2(0.0);
// a tangent frame from the screen derivatives (no tangents on the geometry)
vec3 trPerturb(vec3 n, vec3 mapN, vec2 uvv) {
  vec3 q0 = dFdx(-vViewPosition), q1 = dFdy(-vViewPosition);
  vec2 st0 = dFdx(uvv), st1 = dFdy(uvv);
  vec3 q1p = cross(q1, n), q0p = cross(n, q0);
  vec3 Tt = q1p * st0.x + q0p * st1.x, Bt = q1p * st0.y + q0p * st1.y;
  float det = max(dot(Tt, Tt), dot(Bt, Bt)); float sc = det == 0.0 ? 0.0 : inversesqrt(det);
  return normalize(Tt * (mapN.x * sc) + Bt * (mapN.y * sc) + n * mapN.z);
}
`,
  Sn = `
#ifdef USE_ENVMAP
vec3 trBox(vec3 dirW) {
  vec3 d = normalize(uToCar * dirW);
  vec3 p = clamp(trObj, uBoxMin + 0.01, uBoxMax - 0.01);
  vec3 dd = d + vec3(1e-5);
  vec3 t1 = (uBoxMax - p) / dd, t2 = (uBoxMin - p) / dd;
  vec3 tf = max(t1, t2);
  float t = min(min(tf.x, tf.y), tf.z);
  return normalize(p + d * t - uBoxEye);
}
float trCabEnv() { return (uCab > 0.5 && trObj.x > 7.07) ? 0.06 : 1.0; }      // (the cab is dark: its own light is off)
vec3 getIBLIrradiance( const in vec3 normal ) {
  vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
  vec4 envMapColor = textureCubeUV( envMap, trBox( worldNormal ), 1.0 );
  return PI * envMapColor.rgb * envMapIntensity * uEnvK * uEnvD * trCabEnv();
}
vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
  vec3 reflectVec = reflect( - viewDir, normal );
  reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
  reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
  vec4 envMapColor = textureCubeUV( envMap, trBox( reflectVec ), roughness );
  return envMapColor.rgb * envMapIntensity * uEnvK * trCabEnv();
}
#endif
`,
  Mn = `
{
  vec3 P = trObj;
  vec3 Nn = normalize(trObjN);
  float kind = floor(trSurf.z + 0.5), prm = trSurf.w;
  vec3 col = diffuseColor.rgb;
  float rough = trSurf.x, metal = trSurf.y, h = 0.0;
  float seed = uCar.z;
  // ---- the body's side (stainless, fluted below the windows, the painted bands; prm 1 = a door leaf: flat)
  if (kind == 19.0) {
    float y = P.y;
    vec3 steel = vec3(0.6, 0.6, 0.59);
    col = steel; rough = 0.36; metal = 0.86;
    float fl = (y > 1.0 && y < 1.68 && prm < 0.5) ? 1.0 : 0.0;
    if (fl > 0.5) {
      float fw = fwidth(y) / 0.042;
      h += 0.0017 * (0.5 - 0.5 * cos(y * 6.2831853 / 0.042)) * (1.0 - smoothstep(0.25, 0.6, fw));
    }
    // the bands (painted): the sill, the oxblood line, the teal band, the black window band
    float sill = 1.0 - step(1.0, y);
    float ox = step(1.68, y) * (1.0 - step(1.71, y));
    float teal = step(1.71, y) * (1.0 - step(1.905, y));
    float win = step(1.95, y) * (1.0 - step(2.97, y));
    vec3 pc = vec3(0.0); float pk = 0.0;
    if (sill > 0.5) { pc = vec3(0.035, 0.036, 0.038); pk = 1.0; }
    if (ox > 0.5) { pc = vec3(0.16, 0.022, 0.03); pk = 1.0; }
    if (teal > 0.5) { pc = vec3(0.022, 0.13, 0.135); pk = 1.0; }
    if (win > 0.5 && prm < 0.5) { pc = vec3(0.012, 0.013, 0.014); pk = 1.0; }
    // (the cab's front, prm 2: the black mask from the band up, round the windscreen)
    if (prm > 1.5 && y > 1.905) { pc = vec3(0.01, 0.011, 0.012); pk = 2.0; }
    if (pk > 0.5) { col = pc; metal = 0.0; rough = pk > 1.5 ? 0.18 : 0.32; }
    kind = 1.0;                                       // (the steel's own wear below)
    prm = pk > 0.5 ? -1.0 : 0.0;
  }
  // ---- stainless steel: brushed (fine streaks along the grain: prm 0 = x, 1 = y, 2 = z), water marks, grime
  if (kind == 1.0 && prm > -0.5) {
    vec3 gs = prm < 0.5 ? vec3(1.5, 260.0, 260.0) : prm < 1.5 ? vec3(260.0, 1.5, 260.0) : vec3(260.0, 260.0, 1.5);
    float fwb = length(fwidth(P * gs)) * 0.5;
    float amp = 1.0 - smoothstep(0.35, 1.2, fwb);
    float br = trN(P * gs) * 0.6 + trN(P * gs * 0.37 + 3.1) * 0.4;
    col *= 1.0 + (br - 0.5) * 0.14 * amp;
    rough = clamp(rough + (br - 0.5) * 0.08 * amp, 0.05, 1.0);
    float wm = trF(P * vec3(3.0, 6.0, 3.0) + seed);
    rough += smoothstep(0.5, 0.75, wm) * 0.12;
    col *= 1.0 - smoothstep(0.55, 0.8, wm) * 0.12;
  }
  // ---- the front mask: glossy black GRP, a faint orange peel
  if (kind == 13.0) {
    rough = 0.2 + 0.05 * trN(P * 60.0);
    h += (trN(P * 140.0) - 0.5) * 0.00012;
  }
  // ---- painted metal / GRP: a little chipping on edges is too fine to see; a mottle of wear
  if (kind == 2.0) {
    float m = trF(P * 4.0 + seed * 3.0);
    col *= 0.92 + 0.16 * m;
    rough = clamp(rough + (m - 0.5) * 0.12, 0.05, 1.0);
  }
  // ---- underframe and bogies: dark paint under brake dust (red-brown), grime, a rust spot
  if (kind == 14.0) {
    float d = trF(P * vec3(3.0, 5.0, 3.0) + 7.0);
    vec3 dust = vec3(0.075, 0.042, 0.028);
    col = mix(col, dust, smoothstep(0.35, 0.8, d) * 0.75);
    float rs = smoothstep(0.7, 0.78, trF(P * 9.0 + 2.0));
    col = mix(col, vec3(0.1, 0.035, 0.015), rs * 0.6);
    rough = clamp(0.7 + d * 0.25, 0.0, 1.0); metal = mix(metal, 0.0, d);
    h += (trN(P * 90.0) - 0.5) * 0.0003;
  }
  // ---- the wheels: the bright tread, the web brown with brake dust
  if (kind == 15.0) {
    float ax = P.x > 0.0 ? 1.05 : -1.05;
    vec2 q = P.xy - vec2(ax, 0.42);
    float r = length(q);
#ifdef TR_WHEELS
    // (back into the wheel's own frame: the marks turn with it)
    float wc = cos(-uWheelF), ws = sin(-uWheelF); q = vec2(q.x * wc - q.y * ws, q.x * ws + q.y * wc);
#endif
    float ang = atan(q.y, q.x);
    float tread = smoothstep(0.405, 0.412, r) * (1.0 - smoothstep(0.43, 0.44, r));
    vec3 web = mix(vec3(0.06, 0.04, 0.03), vec3(0.11, 0.055, 0.03), trN(vec3(q * 30.0, P.z * 30.0)));
    col = mix(web, vec3(0.62, 0.61, 0.6), tread);
    // the hub's six bolts (dark dots) and a painted index line on the web: they show it turning
    float bk = floor(ang / 1.0471976 + 0.5) * 1.0471976;
    float bolts = 1.0 - smoothstep(0.016, 0.022, length(q - 0.2 * vec2(cos(bk), sin(bk))));
    col = mix(col, vec3(0.012), bolts * 0.85);
    float line = (1.0 - smoothstep(0.012, 0.02, abs(q.y))) * step(0.0, q.x) * smoothstep(0.12, 0.14, r) * (1.0 - smoothstep(0.34, 0.36, r));
    col = mix(col, vec3(0.5, 0.48, 0.42), line * 0.8);
    rough = mix(0.75, 0.22, tread); metal = mix(0.3, 1.0, tread);
  }
  // ---- rubber: a dusty black
  if (kind == 3.0) {
    float d = trF(P * 7.0);
    col = mix(col, col * 1.6 + 0.01, smoothstep(0.55, 0.8, d) * 0.6);
    rough = clamp(0.75 + d * 0.2, 0.0, 1.0);
  }
  // ---- the inside's lining (GRP panels, ivory): grime low down and round the doors, scuffs, hand marks
  if (kind == 6.0) {
    float low = 1.0 - smoothstep(1.1, 1.55, P.y);
    float g = trF(P * vec3(2.0, 4.0, 2.0) + seed);
    col *= 1.0 - low * (0.25 + 0.25 * g) * uCar.x;
    float sc = smoothstep(0.72, 0.8, trN(P * vec3(40.0, 4.0, 40.0) + 1.3)) * low;
    col *= 1.0 - sc * 0.3;
    float dx = abs(fract((P.x + 6.0 + 3.0) / 6.0) * 6.0 - 3.0);           // (distance to the nearest door's middle)
    float hand = (1.0 - smoothstep(0.6, 1.1, dx)) * smoothstep(1.4, 1.8, P.y) * (1.0 - smoothstep(2.4, 2.8, P.y)) * smoothstep(0.55, 0.7, trF(P * 9.0 + 4.0));
    col *= 1.0 - hand * 0.18 * uCar.x;
    rough = clamp(rough + g * 0.1 + hand * 0.15, 0.0, 1.0);
  }
  // ---- a grille: dark slots every 3.5 cm across x (prm 0) or z (prm 1), anti-aliased
  if (kind == 23.0) {
    float cc = (prm < 0.5 ? P.x : P.z) / 0.035;
    float f = fract(cc), w = fwidth(cc) * 1.2;
    float slot = smoothstep(0.38 - w, 0.38 + w, f) * (1.0 - smoothstep(0.78 - w, 0.78 + w, f));
    slot = mix(slot, 0.4, smoothstep(0.3, 0.7, w));
    col = mix(col, vec3(0.008), slot * 0.92); rough = mix(rough, 0.9, slot); metal = mix(metal, 0.0, slot);
  }
  // ---- seat foam (a torn seat)
  if (kind == 20.0) {
    float c = trF(P * 40.0);
    col = mix(vec3(0.3, 0.25, 0.14), vec3(0.5, 0.43, 0.27), c);
    rough = 0.95; h += (c - 0.5) * 0.004;
  }
#ifdef TR_INT
  // ---- the floor: the speckled rubber (its map), the worn path down the aisle, dirt along the walls, scuffs, gum
  if (kind == 4.0) {
    vec2 fu = vec2(P.x, P.z) / 1.2;
    vec3 fa = texture2D(tFloor, fu).rgb;
    col = fa * col * 2.6;
    vec3 fo = texture2D(tFloorO, fu).rgb;
    rough = fo.g;
    trTN = texture2D(tFloorN, fu).xyz * 2.0 - 1.0; trTN.xy *= 0.6; trUseTN = 1.0; trTUV = fu;
    float az = abs(P.z);
    float wall = smoothstep(0.85, 1.28, az);
    float g = trF(vec3(P.x * 1.5, 0.0, P.z * 3.0) + seed);
    col *= 1.0 - wall * (0.3 + 0.3 * g) * uCar.x;
    float path = (1.0 - smoothstep(0.25, 0.7, az)) * (0.6 + 0.4 * g);
    rough = mix(rough, rough * 0.72, path);
    col *= 1.0 + path * 0.06;
    float sk = smoothstep(0.83, 0.86, trN(vec3(P.x * 7.0, 0.0, P.z * 22.0) + 3.0)) * (0.4 + 0.6 * smoothstep(0.4, 0.8, g));
    col *= 1.0 - sk * 0.55;
    float gum = smoothstep(0.93, 0.95, trN(vec3(P.x * 23.0, 1.0, P.z * 23.0)));
    col = mix(col, vec3(0.02), gum * 0.9);
    // the door vestibules: a grey-blue field (footfall: dirtier)
    float dx = abs(fract((P.x + 9.0) / 6.0) * 6.0 - 3.0);
    float vest = (1.0 - smoothstep(0.62, 0.66, dx));
    col *= 1.0 - vest * 0.12 * (0.6 + g) * uCar.x;
  }
  // ---- the moquette (its map), worn lighter and flatter where people sat, a velvet sheen at grazing angles
  if (kind == 5.0) {
    vec2 mu = vUv / 0.36;
    vec3 ma = texture2D(tMoq, mu).rgb;
    col = ma * (col / 0.5);
    trTN = texture2D(tMoqN, mu).xyz * 2.0 - 1.0; trTN.xy *= 1.0; trUseTN = 1.0; trTUV = mu;
    float w = smoothstep(0.5, 0.85, trF(P * vec3(3.0, 6.0, 6.0) + seed));
    col = mix(col, col * 1.18 + vec3(0.01), w * 0.35);
    rough = 0.9; trSheen = 0.55;
  }
#endif
  // ---- the LED strips: a milky diffuser, lit by its zone (the car's own frame: front x > 3, middle, rear x < -3)
  if (kind == 7.0) {
    float zl = P.x > 3.0 ? uZone.x : (P.x < -3.0 ? uZone.z : uZone.y);
    float across = vUv.y;
    float core = 0.65 + 0.35 * sin(clamp(across, 0.0, 1.0) * 3.14159);
    col = vec3(0.7, 0.72, 0.7); rough = 0.35;
    trGlow = vec3(0.96, 1.0, 0.95) * 2.5 * zl * core;
  }
  // ---- pictures from the atlas: plain, and glowing ones (displays, the console, screens: alpha = what lights up)
  if (kind == 8.0 || kind == 9.0 || kind == 16.0 || kind == 17.0 || kind == 18.0) {
    vec4 tx;
    if (kind == 17.0) {
      // the next-stop display: a window onto the strip, scrolling (the strip's uv runs on: no seam)
      float su = vUv.x * 0.22 + uTime * 0.035;
      vec2 cuv = vec2(mix(0.0, 1.0, su), vUv.y);
      tx = textureGrad(tDecal, vec2(fract(cuv.x), cuv.y), dFdx(cuv), dFdy(cuv));
    } else tx = texture2D(tDecal, vUv);
    col = tx.rgb;
    float gm = smoothstep(0.62, 0.95, tx.a);
    if (kind == 9.0 || kind == 17.0) trGlow = tx.rgb * gm * prm * uPower;
    if (kind == 18.0) trGlow = tx.rgb * gm * 2.2 * uPower * (prm < 0.5 ? uBtn.x : uBtn.y);
    if (kind == 16.0) {
      // the route map's four station lamps (atlas.js ROUTE: the route rect is the atlas's top-left 1024 x 128 px)
      vec2 lc = vec2(vUv.x / 0.5, (vUv.y - 0.9375) / 0.0625);
      float lit = 0.0;
      for (int i = 0; i < 4; i++) {
        float lu = i == 0 ? 0.16 : (i == 1 ? 0.39 : (i == 2 ? 0.62 : 0.85));
        float st = i == 0 ? uLamps.x : (i == 1 ? uLamps.y : (i == 2 ? uLamps.z : uLamps.w));
        float d = length(vec2((lc.x - lu) * 1024.0, (lc.y - 0.53) * 128.0));
        lit += st * (1.0 - smoothstep(10.0, 13.5, d));
      }
      col = mix(col, vec3(0.5, 0.08, 0.03), clamp(lit, 0.0, 1.0));
      trGlow = vec3(1.0, 0.16, 0.04) * lit * 3.2 * uPower;
    }
    rough = kind == 8.0 ? 0.45 : 0.3;
    metal = 0.0;
  }
  // ---- lamps: the headlights (a reflector behind clear glass), the tail lamps, the red lamps over the doors
  if (kind == 10.0 || kind == 11.0 || kind == 12.0) {
    vec2 q = vUv * 2.0 - 1.0; float r = length(q);
    float rings = 0.5 + 0.5 * cos(r * 26.0);
    rough = 0.1; metal = 0.0;
    if (kind == 10.0) { col = vec3(0.32, 0.32, 0.3) * (0.8 + 0.2 * rings); metal = 0.8; trGlow = vec3(1.0, 0.9, 0.72) * uHead * (3.6 + 6.0 * (1.0 - smoothstep(0.0, 0.5, r))); }
    if (kind == 11.0) { col = vec3(0.16, 0.012, 0.01) * (0.8 + 0.3 * rings); trGlow = vec3(1.0, 0.04, 0.02) * uTail * (2.8 + 2.0 * (1.0 - smoothstep(0.0, 0.6, r))); }
    if (kind == 12.0) { col = vec3(0.2, 0.015, 0.01); trGlow = vec3(1.0, 0.06, 0.02) * 3.4 * (prm < 0.5 ? uDoor.z : uDoor.w); }
  }
  // ---- grime on the outside: dark toward the bottom, streaks running down (a factor on the albedo)
#ifndef TR_INT
  if (kind == 1.0 || kind == 2.0 || kind == 13.0 || kind == 19.0) {
    float low = 1.0 - smoothstep(0.95, 1.9, P.y);
    float st = trF(P * vec3(7.0, 0.7, 7.0) + seed);
    float g = clamp(low * 0.55 + smoothstep(0.55, 0.85, st) * 0.35, 0.0, 1.0) * uCar.x;
    col *= 1.0 - g * 0.45;
    col = mix(col, vec3(0.06, 0.04, 0.03), g * 0.25 * (1.0 - low * 0.3));
    rough = clamp(rough + g * 0.3, 0.0, 1.0);
    float roof = smoothstep(3.3, 3.55, P.y);
    col = mix(col, vec3(0.05, 0.05, 0.048), roof * 0.6); rough = mix(rough, 0.75, roof);
  }
#endif
  diffuseColor.rgb = col;
  trRough = clamp(rough, 0.04, 1.0); trMetal = clamp(metal, 0.0, 1.0); trH = h;
}
`,
  An = `
{
  if (trUseTN > 0.5) normal = trPerturb(normal, trTN, trTUV);
  // the bump from the surface step's height (metres): screen-space derivatives
  vec3 sx = dFdx(-vViewPosition), sy = dFdy(-vViewPosition);
  vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
  float det = dot(sx, r1) * faceDirection;
  vec2 dh = vec2(dFdx(trH), dFdy(trH));
  vec3 grad = sign(det) * (dh.x * r1 + dh.y * r2);
  normal = normalize(abs(det) * normal - grad);
}
`,
  Tn = `
if (trSheen > 0.0) { float nv = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0); diffuseColor.rgb *= 1.0 + trSheen * pow(1.0 - nv, 3.0) * 1.6; }
totalEmissiveRadiance += trGlow;
`,
  Ln = `
#ifdef TR_INT
{
  vec3 nC = normalize(uToCar * inverseTransformDirection(normal, viewMatrix));
  vec3 P = trObj;
  float cabK = (uCab > 0.5 && P.x > 7.07) ? 0.0 : 1.0;
  float xe = uCab > 0.5 ? 7.0 : 8.6;
  float ends = smoothstep(-8.75, -8.1, P.x) * (1.0 - smoothstep(xe - 0.6, xe + 0.05, P.x));
  float zl = P.x > 3.0 ? uZone.x : (P.x < -3.0 ? uZone.z : uZone.y);
  float sum = 0.0;
  for (int i = 0; i < 2; i++) {
    float sd = i == 0 ? 1.0 : -1.0;
    vec2 d2 = vec2(0.9 * sd, 3.282) - P.zy;
    float dist = length(d2);
    vec3 l = vec3(0.0, d2.y, d2.x) / max(dist, 1e-3);
    float ndl = max(dot(nC, l), 0.0);
    float emit = max(dot(-l, normalize(vec3(0.0, -1.0, -0.25 * sd))), 0.0);
    sum += ndl * (0.25 + 0.75 * emit) / max(dist, 0.34);
  }
  reflectedLight.directDiffuse += sum * uStripK * zl * cabK * ends * BRDF_Lambert(material.diffuseColor) * vec3(0.95, 1.0, 0.96);
}
#endif
`,
  Pn = `
{
  vec3 P = trObj;
  float kind = floor(trSurf.z + 0.5), prm = trSurf.w;
  float sm = trF(P * vec3(9.0, 9.0, 9.0) + uCar.z);
  float rough = mix(0.03, 0.16, smoothstep(0.55, 0.8, sm));
  float a = prm;
  if (kind == 1.0) { a = mix(a, a + 0.35, smoothstep(2.9, 3.2, P.y)); }       // (the windscreen's tinted top)
  if (kind == 2.0) trReflF = 0.35;                                                // (a draft screen: a plain pane, not a night window)
  if (kind == 3.0) {
    // a layer of scratches over a pane: only the scratches show (no second reflection)
    vec4 sc = texture2D(tDecal, vUv);
    rough = 0.6; a = sc.a * 0.4; diffuseColor.rgb = vec3(0.55); trReflF = 0.0;
  }
  diffuseColor.a = a;
  trRough = rough; trMetal = 0.0; trH = 0.0;
}
`,
  In = `
{
  vec3 spec = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
  vec3 diff = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
  gl_FragColor = vec4((reflectedLight.directSpecular + reflectedLight.indirectSpecular * uReflK) * trReflF + diff * diffuseColor.a, diffuseColor.a);
}
`,
  zn = `
{
  vec4 tx = texture2D(tDecal, vUv);
  diffuseColor.rgb = tx.rgb * diffuseColor.rgb * 2.0;
  diffuseColor.a = tx.a * trSurf.w;
  trRough = trSurf.x; trMetal = 0.0; trH = 0.0;
  if (diffuseColor.a < 0.01) discard;
}
`;
