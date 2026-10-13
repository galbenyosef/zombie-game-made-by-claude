// assets__city-COfbVKUz 06 — bridge
// Lines 1489-1998 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
const C = {
    facade: 0,
    trim: 1,
    wood: 2,
    iron: 3,
    metal: 4,
    concrete: 5,
    sign: 6,
    dark: 7,
    glassRail: 8,
    crane: 9,
    mast: 10,
    plywood: 11,
    container: 12,
    helipad: 13,
    steel: 14,
    bridge: 15,
    burnt: 16,
    lamp: 17,
  },
  tt = 1024,
  yt = 6,
  Fe = `
attribute float aPart;
uniform highp sampler2D uBld;
varying vec3 vWorld;
varying vec3 vLocal;
varying vec3 vNl;
varying vec3 vNw;
flat varying vec4 vB1;
flat varying vec4 vB2;
flat varying vec4 vB3;
flat varying vec4 vB4;
flat varying float vKind;
flat varying float vRot;
flat varying float vPxS;
uniform float uPx;
vec4 bfetch(int i) { return texelFetch(uBld, ivec2(i % ${tt}, i / ${tt}), 0); }
void main() {
  float kind = floor(aPart / 32768.0 + 0.001);
  int id = int(aPart - kind * 32768.0 + 0.5);
  int b = id * ${yt};
  vec4 b0 = bfetch(b);
  vB1 = bfetch(b + 1); vB2 = bfetch(b + 2); vB3 = bfetch(b + 3); vB4 = bfetch(b + 4);
  vKind = kind;
  vec4 wp = vec4(position, 1.0);
  vec3 n = normal;
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  n = mat3(instanceMatrix) * n;
#endif
  wp = modelMatrix * wp;
  n = normalize(mat3(modelMatrix) * n);
  vWorld = wp.xyz;
  vNw = n;
  float c = cos(b0.w), s = sin(b0.w);
  vec3 rel = wp.xyz - b0.xyz;
  vLocal = vec3(c * rel.x - s * rel.z, rel.y, s * rel.x + c * rel.z);
  vNl = vec3(c * n.x - s * n.z, n.y, s * n.x + c * n.z);
#ifdef OBJLOCAL
  vLocal = position; vNl = normal;                 // (a moving part: its own frame)
#endif
  vRot = b0.w;
  vPxS = 2.0 / (projectionMatrix[1][1] * 720.0 * max(uPx, 0.1));
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Ce = `
varying vec3 vWorld;
varying vec3 vLocal;
varying vec3 vNl;
varying vec3 vNw;
flat varying vec4 vB1;
flat varying vec4 vB2;
flat varying vec4 vB3;
flat varying vec4 vB4;
flat varying float vKind;
flat varying float vRot;
flat varying float vPxS;
uniform sampler2D uMirror;
uniform mat4 uMirrorMat;
uniform vec4 uMirrorPlane;
uniform float uMirrorOn;
${u0}
${g0}
${F0}
// the real reflection on the one mirror face being drawn this frame (mirror.js), or -1
vec3 c3mirror(vec3 P, vec3 N, vec3 Ng) {
  if (uMirrorOn < 0.5 || abs(dot(P, uMirrorPlane.xyz) - uMirrorPlane.w) > 0.3 || dot(N, uMirrorPlane.xyz) < 0.9) return vec3(-1.0);
  vec4 mc = uMirrorMat * vec4(P, 1.0);
  vec2 muv = mc.xy / mc.w + (Ng.xz - N.xz + Ng.yy - N.yy) * 0.12;
  return texture2D(uMirror, clamp(muv, vec2(0.002), vec2(0.998))).rgb;
}

// ---- the palettes (linear albedo)
vec3 wallColor(float style, float tone, float n) {
  vec3 c;
  if (style < 0.5 || (style > 5.5)) {                                          // brick: oxblood, brown, tan, purple-brown
    float f = floor(tone * 4.0), v = fract(tone * 4.0);
    if (f < 0.5) c = mix(vec3(0.150, 0.042, 0.028), vec3(0.185, 0.060, 0.038), v);
    else if (f < 1.5) c = mix(vec3(0.105, 0.052, 0.034), vec3(0.130, 0.070, 0.046), v);
    else if (f < 2.5) c = mix(vec3(0.200, 0.135, 0.080), vec3(0.165, 0.105, 0.062), v);
    else c = mix(vec3(0.080, 0.040, 0.036), vec3(0.098, 0.052, 0.044), v);
  } else if (style < 1.5) {                                                    // stone: limestone, sandstone, granite
    float f = floor(tone * 3.0), v = fract(tone * 3.0);
    if (f < 0.5) c = mix(vec3(0.340, 0.305, 0.240), vec3(0.290, 0.262, 0.210), v);
    else if (f < 1.5) c = mix(vec3(0.290, 0.205, 0.135), vec3(0.245, 0.175, 0.115), v);
    else c = mix(vec3(0.200, 0.200, 0.195), vec3(0.160, 0.160, 0.160), v);
  } else if (style < 2.5 || (style > 3.5 && style < 4.5)) {                    // concrete
    c = mix(vec3(0.215, 0.205, 0.190), vec3(0.165, 0.165, 0.160), tone);
  } else if (style < 3.5) {                                                    // the frame of a glass wall: dark anodized metal
    c = mix(vec3(0.040, 0.043, 0.048), vec3(0.075, 0.073, 0.070), tone);
  } else {                                                                     // the fins of the finned towers: pale concrete / metal
    c = mix(vec3(0.200, 0.195, 0.185), vec3(0.150, 0.152, 0.155), tone);
  }
  return c * (0.85 + 0.30 * n);
}
vec3 trimColor(float style, float tone) {
  if (style < 0.5 || style > 5.5) return vec3(0.24, 0.215, 0.18) * (0.85 + 0.2 * tone);         // brick's stone trim
  if (style < 1.5) return wallColor(style, tone, 0.6) * 1.15;
  if (style < 2.5 || (style > 3.5 && style < 4.5)) return vec3(0.20, 0.195, 0.185);
  return vec3(0.12, 0.125, 0.13);
}
vec3 glassTint(float t) {
  if (t < 0.35) return vec3(0.55, 0.68, 0.80);       // blue-grey
  if (t < 0.6) return vec3(0.52, 0.72, 0.66);        // green
  if (t < 0.8) return vec3(0.78, 0.64, 0.48);        // bronze
  return vec3(0.42, 0.46, 0.52);                     // smoked
}

// ---- a room behind a window (interior mapping): ro = the point on the glass in the room's frame (x across the bay,
// y up the storey, z = 0 at the glass), rd = the view ray in the same frame (z into the room)
vec3 roomColor(vec3 ro, vec3 rd, vec3 dims, float h1, float h2, float h3, float office, float sharp, float tubeK, out float depthHit, out float tubes) {
  rd.z = max(rd.z, 0.03);
  if (abs(rd.x) < 1e-4) rd.x = 1e-4;
  if (abs(rd.y) < 1e-4) rd.y = 1e-4;
  vec3 tv = (step(vec3(0.0), rd) * dims - ro) / rd;
  float t = min(min(tv.x, tv.y), tv.z);
  vec3 hp = ro + rd * t;
  depthHit = hp.z;
  tubes = 0.0;
  float isBack = step(tv.z, min(tv.x, tv.y));
  float isY = (1.0 - isBack) * step(tv.y, tv.x);
  float isFloor = isY * step(rd.y, 0.0), isCeil = isY * step(0.0, rd.y), isSide = 1.0 - isBack - isY;
  vec3 paper = mix(vec3(0.34, 0.29, 0.22), vec3(0.24, 0.27, 0.28), h2) * (0.8 + 0.35 * h3);
  vec3 c = paper * (0.78 * isBack + 0.92 * isSide) + vec3(0.10, 0.075, 0.055) * isFloor + vec3(0.42, 0.40, 0.37) * isCeil;
  if (office > 0.5) {
    c = vec3(0.30, 0.30, 0.29) * (isBack + isSide) + vec3(0.07, 0.075, 0.08) * isFloor + vec3(0.36, 0.36, 0.35) * isCeil;
    // ceiling panels; desks and partitions as a dark band low on the walls
    float panel = isCeil * step(0.82, fract(hp.x / 1.2)) * sharp;
    tubes = isCeil * mix(0.12, step(0.78, fract(hp.z / 1.8 + 0.3)) * step(0.2, fract(hp.x / 1.2)) * step(fract(hp.x / 1.2), 0.75), tubeK);
    c *= 1.0 - 0.35 * panel;
    float desk = (isBack + isSide) * step(hp.y, 1.15) * step(0.85, hp.y) * sharp;
    c = mix(c, vec3(0.05), desk);
  } else {
    // a wardrobe or a shelf against the back wall, a picture, a door
    float furn = isBack * step(0.45, h3) * step(abs(hp.x - dims.x * (0.2 + 0.5 * h2)), 0.45 + 0.3 * h1) * step(hp.y, 1.9);
    float pic = isBack * step(abs(hp.x - dims.x * 0.6), 0.35) * step(abs(hp.y - 1.6), 0.25) * step(0.55, h1);
    float door = isBack * step(h3, 0.28) * step(abs(hp.x - dims.x * 0.75), 0.42) * step(hp.y, 2.05);
    c = mix(c, vec3(0.06, 0.045, 0.035), furn); c *= 1.0 - 0.5 * pic; c = mix(c, vec3(0.03), door);
  }
  return c;
}

void main() {
  vec3 P = vWorld;
  vec3 D = P - cameraPosition;
  float dist = length(D);
  vec3 V = D / dist;
  vec3 N = normalize(vNw);
  vec3 Nl = normalize(vNl);
  float W0 = vB1.x, H0 = vB1.y, D0 = vB1.z, seed = vB1.w;
  float flH = vB2.x, bay = vB2.y, style = vB2.z, tone = vB2.w;
  float litF = vB3.x, burnF = vB3.y, burnN = vB3.z, dmg = vB3.w;
  float groundH = vB4.x, tint = vB4.y, faces = vB4.z, flags = vB4.w;
  float kind = vKind;
  vec3 alb = vec3(0.1);
  vec3 emit = vec3(0.0);
  vec3 refl = vec3(0.0);
  float shin = 0.0, gloss = 0.0;
  float wetK = 0.0, rough = 0.6;
  vec3 Nshade = N;

  if (kind < 0.5 && abs(Nl.y) < 0.5) {
    // ===================================================================================== a facade
    vec3 Fn = abs(Nl.z) > abs(Nl.x) ? vec3(0.0, 0.0, sign(Nl.z)) : vec3(sign(Nl.x), 0.0, 0.0);
    vec3 Tt = cross(vec3(0.0, 1.0, 0.0), Fn);
    float W = abs(Fn.z) > 0.5 ? W0 : D0;
    float u = dot(vLocal, Tt) + 0.5 * W;
    float v = vLocal.y;
    float bit = Fn.x > 0.5 ? 1.0 : Fn.x < -0.5 ? 2.0 : Fn.z > 0.5 ? 4.0 : 8.0;
    float hasWin = step(0.5, mod(floor(faces / bit), 2.0));
    float faceId = Fn.x + 2.0 * Fn.z + 3.0;
    float gH = groundH > 0.1 ? groundH : flH * 1.3;
    float topV = H0 - 1.2;
    float nb = max(1.0, floor(W / bay + 0.5));
    float bw = W / nb;
    float ci = floor(u / bw);
    float fu = u - ci * bw;
    float fy = v - gH;
    float fi = fy < 0.0 ? 0.0 : floor(fy / flH) + 1.0;
    float yIn = fy < 0.0 ? v : fy - (fi - 1.0) * flH;
    float thisH = fy < 0.0 ? gH : flH;
    float glassy = step(2.5, style) * step(style, 3.5) + step(4.5, style) * step(style, 5.5);
    // the window per style: [wx0, wx0 + ww] x [wy0, wy1] in the bay, the reveal's depth
    float ww, wy0, wy1, rev;
    if (style < 0.5) { ww = bw * 0.44; wy0 = 0.85; wy1 = thisH - 0.55; rev = 0.24; }
    else if (style < 1.5) { ww = bw * 0.46; wy0 = 0.75; wy1 = thisH - 0.48; rev = 0.32; }
    else if (style < 2.5) { ww = bw * 0.94; wy0 = 0.95; wy1 = thisH - 0.38; rev = 0.14; }
    else if (style < 3.5) { ww = bw - 0.10; wy0 = 0.05; wy1 = thisH - 0.95; rev = 0.0; }
    else if (style < 4.5) { ww = bw * 0.58; wy0 = 0.08; wy1 = thisH - 0.55; rev = 0.18; }
    else if (style < 5.5) { ww = bw * 0.78; wy0 = 0.05; wy1 = thisH - 0.70; rev = 0.0; }
    else { ww = bw * 0.62; wy0 = thisH * 0.42; wy1 = thisH - 0.45; rev = 0.20; }
    float shop = fi < 0.5 ? step(0.5, mod(floor(flags / 2.0), 2.0)) : 0.0;
    if (shop > 0.5) { ww = bw * 0.86; wy0 = 0.35; wy1 = gH - 1.05; rev = 0.25; }
    else if (fi < 0.5) { wy0 = max(wy0, 1.1); wy1 = gH - 0.7; }
    float wx0 = 0.5 * (bw - ww);
    float wh = wy1 - wy0;
    vec2 fw = max(vec2(length(vec2(dFdx(u), dFdy(u))), length(vec2(dFdx(v), dFdy(v)))), vec2(1e-4));
    // (a smooth estimate of the same, for the fades that steer rays and patterns: the derivatives jump from one 2x2
    // block of pixels to the next, and a fade that follows them turns to noise)
    float pxF = dist * vPxS / max(abs(dot(V, N)), 0.15), pxV = dist * vPxS;
    float onFace = step(0.25, v) * (1.0 - smoothstep(topV - fw.y, topV + fw.y, v)) * hasWin;
    float inX = smoothstep(wx0 - fw.x, wx0 + fw.x, fu) - smoothstep(wx0 + ww - fw.x, wx0 + ww + fw.x, fu);
    float inY = smoothstep(wy0 - fw.y, wy0 + fw.y, yIn) - smoothstep(wy1 - fw.y, wy1 + fw.y, yIn);
    float winM = clamp(inX, 0.0, 1.0) * clamp(inY, 0.0, 1.0) * onFace;
    float cov = (ww / bw) * (wh / thisH);
    float lod = smoothstep(0.14, 0.42, max(pxF / max(ww, 0.3), pxV / max(wh, 0.3)));
    // ---- this window's fate
    float h1 = c3h13(vec3(ci + 0.37, fi + 0.71, faceId * 7.13 + seed * 17.31));
    float h2 = fract(h1 * 91.7 + 0.33), h3 = fract(h1 * 53.1 + 0.71), h4 = fract(h1 * 17.3 + 0.19);
    float burnRow = step(0.5, burnN) * step(burnF - 0.01, fi) * step(fi, burnF + burnN - 0.99);
    float nearBurn = step(0.5, burnN) * step(burnF - 1.01, fi) * step(fi, burnF + burnN + 0.01);
    float burning = burnRow * step(0.22, h2);
    float burnt = (1.0 - burning) * step(h3, dmg * 0.55 + burnRow * 0.7);
    float lit = (1.0 - burnRow) * (1.0 - burnt) * step(h1, litF);
    float broken = (1.0 - lit) * (1.0 - burning) * (1.0 - burnt) * step(h4, dmg);
    // ---- the wall
    float wn = c3n(vec2(u * 0.11, v * 0.09) + seed * 7.0);
    vec3 wall = wallColor(style, tone, wn);
    if (hasWin < 0.5 && style < 2.5) wall = wallColor(0.0, fract(tone + 0.37), wn) * 0.92;      // a party wall: plain brick
#if DETAIL > 1
    // brick coursing and stone joints up close
    float fwm = pxF;
    if ((style < 0.5 || style > 5.5 || hasWin < 0.5) && fwm < 0.008) {
      float cy = v / 0.075, row = floor(cy);
      float cx = (u + 0.11 * mod(row, 2.0)) / 0.225;
      float mort = max(smoothstep(0.82, 0.95, fract(cy)), smoothstep(0.90, 0.97, fract(cx)));
      float bh = c3h12(vec2(floor(cx), row) + seed);
      vec3 bc = wall * (0.90 + 0.20 * bh);
      bc = mix(bc, wall * 1.25 + vec3(0.02), mort * 0.45);
      wall = mix(bc, wall, smoothstep(0.003, 0.0075, fwm));
    } else if (style > 0.5 && style < 1.5 && fwm < 0.02) {
      float jy = smoothstep(0.92, 0.985, fract(v / 0.62));
      float jx = smoothstep(0.95, 0.99, fract((u + 0.4 * mod(floor(v / 0.62), 2.0)) / 1.2));
      float bh = c3h12(vec2(floor(u / 1.2), floor(v / 0.62)) + seed);
      vec3 bc = wall * (0.93 + 0.14 * bh) * (1.0 - 0.25 * max(jx, jy));
      wall = mix(bc, wall, smoothstep(0.008, 0.02, fwm));
    }
#endif
    // streaks of grime from the sills down, dirt low down, the storey bands, soot over the burnt and burning windows
    float streak = mix(0.5, c3n(vec2(u * 1.7, v * 0.06) + seed * 5.0), 1.0 - smoothstep(0.12, 0.35, fw.x * 1.7));   // (band-limited: no shimmer at grazing angles)
    // (the patterns that repeat every bay fade to their average where a pixel spans a good part of a bay: no shimmer)
    float lodU = smoothstep(0.10, 0.30, pxF / bw), lodV = smoothstep(0.10, 0.30, pxV / thisH);
    float under = mix(step(yIn, wy0) * (1.0 - smoothstep(0.0, 1.6, wy0 - yIn)) * (1.0 - smoothstep(ww * 0.3, ww * 0.62, abs(fu - bw * 0.5))), 0.12, max(lodU, lodV)) * hasWin;
    float base = 1.0 - smoothstep(0.0, gH * 1.1, v);
    float band = mix(1.0 - smoothstep(0.0, 0.10 + fw.y, abs(yIn - thisH + 0.10)), 0.05, lodV) * (0.22 - 0.22 * glassy) * step(0.5, hasWin);
    float capBand = smoothstep(topV - 0.35, topV - 0.05, v) * 0.25;
    wall *= (1.0 - smoothstep(0.45, 0.85, streak) * 0.28 - under * 0.30 - base * 0.22) * (1.0 + band + capBand);
    float sootCol = mix(1.0 - smoothstep(ww * 0.25, ww * 0.95 + max(yIn - wy1, 0.0) * 0.45, abs(fu - bw * 0.5)), 0.5, lodU);
    float sootK = (nearBurn + burnt * 0.6) * sootCol * smoothstep(wy0, wy1 + 0.8, yIn + 0.4) * hasWin;
    float sootBelow = 0.0;
    {   // (the soot from the window under this one, up into this storey)
      float hB = c3h13(vec3(ci + 0.37, fi - 1.0 + 0.71, faceId * 7.13 + seed * 17.31));
      float burntB = step(fract(hB * 53.1 + 0.71), dmg * 0.55);
      sootBelow = burntB * sootCol * (1.0 - smoothstep(0.0, wy0 + 0.6, yIn)) * step(1.0, fi) * hasWin;
    }
    // (per window: averaged where the windows are smaller than a pixel, or it shimmers)
    wall *= 1.0 - 0.85 * mix(clamp(sootK + sootBelow * 0.7, 0.0, 1.0), (dmg * 0.25 + nearBurn * 0.35) * hasWin, lod);
    // the shopfront: a fascia (the sign band) over the windows, shutters down on many
    float fascia = 0.0, shut = 0.0;
    if (shop > 0.5) {
      fascia = step(gH - 1.0, yIn) * step(yIn, gH - 0.25);
      wall = mix(wall, mix(vec3(0.02, 0.02, 0.022), vec3(0.10, 0.03, 0.025), step(0.6, h4)), fascia * 0.85);
      shut = step(0.45, h2) * (1.0 - burning);
    }
    // ---- what the window shows
    vec3 wEmit = vec3(0.0);
    vec3 wCol = vec3(0.0);           // the lit-by-the-world colour of what is seen through the window (multiplied by the light later)
    vec3 wRefl = vec3(0.0);
    float revK = 0.0;
    vec3 Lw = vec3(0.0);
    float inWin = winM;
    // the glass, tilted a hair per pane (the reflections break up)
    vec3 Ng = N;
    if (glassy > 0.5 || shop > 0.5) {
      vec2 jit = (c3h22(vec2(ci, fi) + seed) - 0.5) * 0.035;
      Ng = normalize(N + Tt * jit.x + vec3(0.0, jit.y, 0.0));
    }
    float glassKeep = (1.0 - broken) * (1.0 - burnt) * (1.0 - step(0.6, burning * h4));
    if (inWin > 0.001) {
      vec3 R = reflect(V, Ng);
      float fres = 0.05 + 0.95 * pow(1.0 - clamp(dot(-V, Ng), 0.0, 1.0), 5.0);
      float f0 = glassy > 0.5 ? 0.22 : shop > 0.5 ? 0.10 : 0.07;
      fres = f0 + (1.0 - f0) * pow(1.0 - clamp(dot(-V, Ng), 0.0, 1.0), 5.0);
      vec3 gTint = glassy > 0.5 ? glassTint(tint) : vec3(1.0);
      wRefl = c3reflect(R) * fres * 1.25 * gTint;
#if DETAIL > 1
      { vec3 mr = c3mirror(P, N, Ng); if (mr.r >= 0.0) wRefl = mr * fres * 1.5 * uMirrorOn * gTint; }
#endif
      float lo = 1.0 - lod;
#if DETAIL > 0
      if (lo > 0.01 && ww / fw.x > 5.0) {
        // the reveal: a ray into the wall from this point of the opening; it meets a side of the recess or the glass
        float fineK = 1.0 - smoothstep(0.025, 0.06, pxF);                   // (reveals, curtains, bars: only where they hold)
        rev *= fineK;
        float cr = cos(vRot), sr = sin(vRot);
        vec3 Vl = vec3(cr * V.x - sr * V.z, V.y, sr * V.x + cr * V.z);
        vec3 rd = vec3(dot(Vl, Tt), Vl.y, -dot(Vl, Fn));
        rd.z = max(rd.z, 0.02);
        float tg = rev / rd.z;
        float tu = rd.x > 0.0 ? (wx0 + ww - fu) / rd.x : (wx0 - fu) / min(rd.x, -1e-4);
        float tvv = rd.y > 0.0 ? (wy1 - yIn) / rd.y : (wy0 - yIn) / min(rd.y, -1e-4);
        float tside = min(tu, tvv);
        if (rev > 0.05 && tside < tg) {
          revK = 1.0;
          float sill = step(tvv, tu) * step(rd.y, 0.0);
          wCol = wall * mix(0.45, 0.85, sill);
        } else {
          vec2 gp = vec2(fu + rd.x * tg, yIn + rd.y * tg);
          // the room behind
          float office = step(2.5, style) * step(style, 5.5) * (1.0 - step(3.5, style) * step(style, 4.5));
          float roomW = office > 0.5 ? bw * 2.0 : bw;
          vec3 ro = vec3(gp.x - wx0 + (office > 0.5 ? mod(ci, 2.0) * bw : 0.0), gp.y - (fi < 0.5 ? 0.0 : 0.0), 0.0);
          ro.x = clamp(ro.x, 0.01, roomW - 0.01);
          float dims_z = 3.2 + 3.5 * h3;
          float dHit, tubes;
          float sharpK = (1.0 - smoothstep(0.012, 0.035, pxF / max(bw * 0.5, 0.2))) * smoothstep(0.08, 0.3, rd.z);
          float tubeK = (1.0 - smoothstep(0.012, 0.03, pxF)) * smoothstep(0.15, 0.4, rd.z);
          vec3 rc = roomColor(ro, rd, vec3(roomW, thisH, dims_z), h1, h2, h3, office, sharpK, tubeK, dHit, tubes);
          rc = mix(vec3(0.16, 0.14, 0.12), rc, sharpK);
          float deep = mix(0.45, exp(-dHit * 0.28), sharpK);
          wCol = rc * deep * 0.55;
          if (office > 0.5 && burning < 0.5 && burnt < 0.5) {
            // an office floor with its lights on (some still are: cold tubes, a flicker), the rest dark
            float floorOn = step(c3h12(vec2(fi * 1.7 + seed, faceId)), 0.10 + litF * 2.0);
            float fl = 0.82 + 0.18 * step(0.08, c3n(vec2(uTime * 9.0, fi + seed)));
            wEmit += floorOn * (vec3(0.55, 0.64, 0.68) * rc * deep + vec3(1.6, 1.75, 1.85) * tubes) * fl;
            // (the exit signs: a green spot on some back walls, dark floors or not)
            wEmit += vec3(0.05, 0.55, 0.18) * step(0.93, h4) * step(abs(ro.x - roomW * 0.5), 0.25) * step(abs(gp.y - 2.4), 0.12) * sharpK * 0.0;
          }
          if (lit > 0.5) {
            vec3 lc = h2 < 0.6 ? vec3(1.0, 0.52, 0.20) : h2 < 0.85 ? vec3(1.0, 0.36, 0.10) * 0.6 : vec3(0.45, 0.60, 1.0) * 0.6;
            float fl = h2 > 0.85 ? 0.5 + 0.5 * c3n(vec2(uTime * 7.0, h1 * 50.0)) : 1.0;
            wEmit = lc * rc * (0.10 + 0.35 * h3) * fl * deep * 1.6;
          }
          if (burning > 0.5) {
            float lowK = 1.0 - clamp(gp.y / thisH, 0.0, 1.0);
            float n = c3fbm3(vec2(gp.x * 1.3 + h1 * 9.0, gp.y * 0.9 - uTime * 2.4));
            float flame = smoothstep(0.35, 0.9, n * 1.35 - gp.y / thisH * 0.65 + 0.25);
            vec3 fc = mix(vec3(1.2, 0.18, 0.03), vec3(3.2, 1.0, 0.22), flame);
            wEmit = rc * vec3(1.4, 0.45, 0.11) * (0.45 + 0.55 * lowK) * (0.7 + 0.3 * sin(uTime * 9.0 + h1 * 40.0)) + fc * flame * (0.6 + 0.5 * lowK);
            wEmit *= 1.0 - 0.6 * smoothstep(thisH * 0.7, thisH, gp.y) * (1.0 - flame);
            wCol *= 0.2;
          }
          if (burnt > 0.5) { wCol *= 0.12; wEmit *= 0.0; }
          // shutters down over the shop window
          if (shut > 0.5) { wCol = vec3(0.10, 0.10, 0.105) * (0.75 + 0.25 * step(0.5, fract(gp.y * 5.0))); wEmit *= 0.0; }
          // a curtain drawn part-way in some rooms (lit from behind when the lamp is on)
          float cs = h2 > 0.5 ? (gp.x - wx0) : (wx0 + ww - gp.x);
          float curt = (1.0 - smoothstep(ww * (0.14 + 0.3 * h3) - 0.04 - pxF, ww * (0.14 + 0.3 * h3) + 0.04 + pxF, cs)) * step(0.55, h4) * (1.0 - office) * (1.0 - burnt) * (1.0 - shut) * mix(0.35, 1.0, fineK);
          wCol = mix(wCol, mix(vec3(0.40, 0.33, 0.26), vec3(0.30, 0.10, 0.08), step(0.7, h1)) * 0.45, curt);
          wEmit = mix(wEmit, lit * vec3(0.9, 0.4, 0.15) * 0.18, curt);
          // mullions of the curtain wall / the sash bars of the old windows
          float mull = 0.0;
          if (glassy > 0.5) { float dm = min(fract(gp.x / (bw * 0.5)), 1.0 - fract(gp.x / (bw * 0.5))) * bw * 0.5; mull = clamp(0.06 / max(fw.x * 2.0, 0.06), 0.0, 1.0) * (1.0 - smoothstep(0.03, 0.03 + fw.x * 1.5, dm)); }
          else if (style < 1.5 || style > 5.5) mull = 1.0 - smoothstep(0.025, 0.025 + fw.x, abs(gp.x - (wx0 + ww * 0.5)));
          mull = max(mull, (1.0 - smoothstep(0.03, 0.03 + fw.y, abs(gp.y - (wy0 + wh * 0.62)))) * step(style, 1.5));
          mull *= fineK;
          wCol = mix(wCol, vec3(0.035), mull * 0.9);
          wRefl *= 1.0 - mull;
        }
      }
#endif
      // the average (a window too small to read)
      vec3 avgCol = glassy > 0.5 ? vec3(0.012, 0.014, 0.017) : vec3(0.02, 0.018, 0.016);
      vec3 avgEmit = vec3(1.0, 0.50, 0.19) * litF * 0.22 + vec3(1.6, 0.42, 0.08) * burnRow * 0.45;
      wCol = mix(avgCol, wCol, lo);
      wEmit = mix(avgEmit, wEmit, lo);
      float gk = mix(glassKeep * (1.0 - revK), 0.8 - 0.6 * dmg - burnRow * 0.7, lod);
      wRefl *= max(gk, 0.0) * (1.0 - shut * lo);
      // a crack across some kept panes
      gloss = gk;
    }
    // the wall's glow round a burning storey (the fire light on the masonry)
    vec3 burnGlow = vec3(0.0);
    if (burnN > 0.5) {
      float fb = burnF * flH + gH - flH, ft = fb + burnN * flH;
      float dB = max(max(fb - v, v - ft), 0.0);
      float flick = 0.75 + 0.25 * c3n(vec2(uTime * 5.0, seed));
      burnGlow = vec3(1.6, 0.42, 0.09) * exp(-dB / 1.3) * flick * (0.45 + 0.55 * smoothstep(bw * 0.5, 0.0, abs(fu - bw * 0.5)));
    }
    float wM = mix(inWin, cov * onFace, lod);
    alb = wall * (1.0 - wM) + wCol * wM;
    emit = wEmit * wM + alb * burnGlow * (1.0 - wM);
    refl = wRefl * wM;
    if (glassy > 0.5 && hasWin > 0.5) {
      // the spandrels between the floors: dark back-painted glass, a mirror like the rest (the floor lines read in it)
      vec3 Rs = reflect(V, N);
      float fs = 0.18 + 0.82 * pow(1.0 - clamp(dot(-V, N), 0.0, 1.0), 5.0);
      vec3 rs = c3reflect(Rs);
#if DETAIL > 1
      { vec3 mr = c3mirror(P, N, N); if (mr.r >= 0.0) rs = mr; }
#endif
      refl += rs * fs * (1.0 - wM) * 0.9 * (1.0 - 0.7 * nearBurn);
      alb = mix(alb, alb * 0.6, 1.0 - wM);
    }
    shin = mix(60.0, 900.0, gloss) ;
    gloss *= wM;
    wetK = 0.04;
    rough = 0.5;
  } else if (kind < 0.5 && Nl.y > 0.5) {
    // ===================================================================================== a roof
    vec2 rp = P.xz;
    float n = c3fbm3(rp * 0.21 + seed * 3.0);
    alb = vec3(0.055, 0.052, 0.050) * (0.65 + 0.7 * n);
    vec2 hd = vec2(W0, D0) * 0.5;
    float edge = min(hd.x - abs(vLocal.x), hd.y - abs(vLocal.z));
    float cope = 1.0 - smoothstep(0.25, 0.55, edge);
    alb = mix(alb, trimColor(style, tone) * 0.9, cope);
    float puddle = smoothstep(0.55, 0.75, c3n(rp * 0.27 + seed * 9.0)) * (1.0 - cope);
    wetK = 0.12 + 0.8 * puddle;
    rough = mix(0.55, 0.05, puddle);
    gloss = puddle;
    shin = 300.0;
    alb *= 1.0 - 0.5 * puddle;
  } else if (kind < 0.5) {
    alb = vec3(0.03);                                                     // (a soffit)
  } else {
    // ===================================================================================== the parts
    float n = c3n(P.xz * 0.9 + P.y * 0.7 + seed);
    if (kind < 1.5) {                                                     // trim: cornices, sills, parapets, bands
      alb = trimColor(style, tone) * (0.85 + 0.25 * n);
      float streak = c3n(vec2(dot(P.xz, vec2(0.7, 0.7)) * 1.5, P.y * 0.12) + seed);
      alb *= 1.0 - 0.3 * smoothstep(0.5, 0.9, streak);
      if (Nl.y > 0.5) alb *= 0.8;
      if (Nl.y < -0.5) alb *= 0.45;
    } else if (kind < 2.5) {                                              // wood: the water tanks' staves and hoops
      float around = atan(vLocal.x, vLocal.z) * 11.0;
      alb = vec3(0.085, 0.056, 0.038) * (0.8 + 0.2 * step(0.12, fract(around))) * (1.0 - 0.6 * step(0.93, fract(P.y * 1.4))) * (0.8 + 0.4 * n);
    } else if (kind < 3.5) {                                              // iron: fire escapes, rails, legs, masts
      alb = vec3(0.028, 0.026, 0.027) * (0.8 + 0.4 * n);
      wetK = 0.25; rough = 0.35; gloss = 0.3; shin = 60.0;
    } else if (kind < 4.5) {                                              // metal: AC units, ducts, vents
      alb = vec3(0.16, 0.165, 0.17) * (0.75 + 0.35 * n);
      wetK = 0.15; rough = 0.4;
    } else if (kind < 5.5) {                                              // concrete: balcony slabs, podiums, stair huts
      alb = vec3(0.19, 0.185, 0.175) * (0.8 + 0.3 * n);
      if (Nl.y < -0.5) alb *= 0.5;
    } else if (kind < 6.5) {                                              // a sign / billboard face (dark, worn)
      alb = mix(vec3(0.12, 0.10, 0.08), vec3(0.05, 0.06, 0.08), step(0.5, fract(seed * 3.7))) * (0.7 + 0.5 * n);
    } else if (kind < 7.5) {
      alb = vec3(0.012);
    } else if (kind < 8.5) {
      alb = vec3(0.02, 0.025, 0.03);
      gloss = 0.6; shin = 200.0;
    } else if (kind < 9.5) {                                              // a crane's yellow paint, grimy
      alb = vec3(0.50, 0.33, 0.035) * (0.65 + 0.45 * n);
      wetK = 0.12; rough = 0.45; gloss = 0.25; shin = 50.0;
    } else if (kind < 10.5) {                                             // a mast's red and white bands
      float band = step(0.5, fract(vLocal.y / 6.0));
      alb = mix(vec3(0.30, 0.03, 0.02), vec3(0.42, 0.42, 0.40), band) * (0.7 + 0.4 * n);
    } else if (kind < 11.5) {                                             // plywood (hoardings), weathered
      alb = vec3(0.17, 0.125, 0.08) * (0.7 + 0.5 * c3n(vec2(dot(P.xz, vec2(0.7, 0.7)) * 3.0, P.y * 0.4)));
    } else if (kind < 12.5) {                                             // a container / site cabin, corrugated, faded
      float hue = fract(seed * 0.618);
      vec3 cc = hue < 0.25 ? vec3(0.06, 0.10, 0.20) : hue < 0.5 ? vec3(0.22, 0.05, 0.03) : hue < 0.75 ? vec3(0.07, 0.13, 0.07) : vec3(0.18, 0.17, 0.15);
      alb = cc * (0.75 + 0.3 * step(0.5, fract(dot(P.xz, vec2(1.0)) * 3.3))) * (0.75 + 0.4 * n);
    } else if (kind < 13.5) {                                             // a helipad's deck: the circle, the H, the edge
      vec2 q = vLocal.xz;
      float r = length(q);
      float ring = (1.0 - smoothstep(0.25, 0.35, abs(r - 9.0)));
      float hH = step(abs(q.x), 2.6) * step(abs(q.y), 3.6) * (step(1.9, abs(q.x)) + step(abs(q.y), 0.45));
      alb = vec3(0.05, 0.055, 0.06) * (0.8 + 0.4 * n);
      alb = mix(alb, vec3(0.40, 0.38, 0.30), clamp(ring + hH, 0.0, 1.0) * 0.8);
      wetK = 0.4; rough = 0.25; gloss = 0.4; shin = 200.0;
    } else if (kind < 14.5) {                                             // bare steel (the tanker's tank, ducts)
      alb = vec3(0.24, 0.24, 0.25) * (0.7 + 0.4 * n);
      wetK = 0.3; rough = 0.3; gloss = 0.5; shin = 120.0;
    } else if (kind < 15.5) {                                             // a bridge's painted steel (grey-green, rust)
      alb = mix(vec3(0.075, 0.085, 0.08), vec3(0.085, 0.055, 0.04), smoothstep(0.6, 0.9, c3n(vec2(dot(P.xz, vec2(0.71)) * 2.2, P.y * 0.35)))) * (0.8 + 0.3 * n);
      wetK = 0.12; rough = 0.45;
    } else if (kind < 16.5) {                                             // burnt: char and ash
      alb = vec3(0.022, 0.019, 0.017) * (0.6 + 0.8 * n);
    } else {
      alb = vec3(0.05);                                                   // a lamp's housing
    }
  }

  vec3 L = cityLight(P, N);
  vec3 col = alb * L + emit;
  col += refl;
  col += c3skyRefl(V, N, rough) * wetK;
  if (gloss > 0.01 && dist < 420.0) col += citySpec(P, N, V, max(shin, 20.0)) * gloss * 0.6;
  col = cityHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
