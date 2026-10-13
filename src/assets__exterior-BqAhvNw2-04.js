// assets__exterior-BqAhvNw2 04 — flh
// Lines 689-993 of readable/assets__exterior-BqAhvNw2.pretty.js (statement-aligned).
const Se = `
attribute vec4 aOrigin;
attribute vec4 aDims;
attribute vec4 aStyle;
attribute vec4 aLight;
varying vec3 vWorld;
varying vec3 vLocal;
varying vec3 vNl;
varying vec3 vNw;
varying vec4 vDims;
varying vec4 vStyle;
varying vec4 vLight;
varying float vRot;
void main() {
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
  float c = cos(aOrigin.w), s = sin(aOrigin.w);
  vec3 rel = wp.xyz - aOrigin.xyz;
  vLocal = vec3(c * rel.x - s * rel.z, rel.y, s * rel.x + c * rel.z);
  vNl = vec3(c * n.x - s * n.z, n.y, s * n.x + c * n.z);
  vDims = aDims; vStyle = aStyle; vLight = aLight; vRot = aOrigin.w;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Pe = `
varying vec3 vWorld;
varying vec3 vLocal;
varying vec3 vNl;
varying vec3 vNw;
varying vec4 vDims;
varying vec4 vStyle;
varying vec4 vLight;
varying float vRot;
uniform float uDetail;
${c0}
${m0}
${N0}

vec3 toneColor(float tone, float s) {
  float fam = floor(tone * 4.0);
  float v = fract(tone * 4.0);
  vec3 c;
  if (fam < 0.5) c = mix(vec3(0.150, 0.060, 0.042), vec3(0.100, 0.052, 0.042), v);
  else if (fam < 1.5) c = mix(vec3(0.260, 0.215, 0.165), vec3(0.180, 0.160, 0.140), v);
  else if (fam < 2.5) c = mix(vec3(0.190, 0.185, 0.175), vec3(0.120, 0.125, 0.130), v);
  else c = mix(vec3(0.040, 0.045, 0.052), vec3(0.060, 0.058, 0.056), v);
  return c * (0.80 + 0.40 * s);
}

void main() {
  vec3 P = vWorld;
  vec3 V = normalize(P - cameraPosition);
  vec3 N = normalize(vNw);
  vec3 Nl = normalize(vNl);
  float seed = abs(vDims.w);
  float kind = vStyle.w;
  vec3 alb = vec3(0.1);
  vec3 emit = vec3(0.0);
  float wetK = 0.18;
  float rough = 0.6;

  if (kind < 0.5 && abs(Nl.y) < 0.5) {
    // ============================================================== a facade with windows
    vec3 Fn = abs(Nl.z) > abs(Nl.x) ? vec3(0.0, 0.0, sign(Nl.z)) : vec3(sign(Nl.x), 0.0, 0.0);
    vec3 T = cross(vec3(0.0, 1.0, 0.0), Fn);
    float W = abs(Fn.z) > 0.5 ? vDims.x : vDims.z;
    float u = dot(vLocal, T) + 0.5 * W;
    float v = vLocal.y;
    float faceId = Fn.x + 2.0 * Fn.z + 3.0;
    bool blank = vDims.w < 0.0 && abs(Fn.x) > 0.5;
    float flH = vStyle.x;
    float fam = floor(vStyle.z * 4.0);
    float gH = flH * 1.3;
    float topV = vDims.y - 1.25;
    float nb = max(1.0, floor(W / vStyle.y + 0.5));
    float bw = W / nb;
    float ci = floor(u / bw);
    float fu = u - ci * bw;
    float fy = v - gH;
    float fi = fy < 0.0 ? 0.0 : floor(fy / flH) + 1.0;
    float yIn = fy < 0.0 ? v : fy - (fi - 1.0) * flH;
    float thisH = fy < 0.0 ? gH : flH;
    float glassy = step(2.5, fam);
    float ww = bw * mix(0.40 + 0.22 * exHash12(vec2(seed, 3.1)), 0.90, glassy);
    float wx0 = 0.5 * (bw - ww);
    float wy0 = fi < 0.5 ? 0.30 : mix(0.85, 0.28, glassy);
    float wy1 = thisH - (fi < 0.5 ? 0.80 : mix(0.45, 0.18, glassy));
    float wh = wy1 - wy0;
    vec2 fw = max(vec2(length(vec2(dFdx(u), dFdy(u))), length(vec2(dFdx(v), dFdy(v)))), vec2(1e-4));
    float inX = smoothstep(wx0 - fw.x, wx0 + fw.x, fu) - smoothstep(wx0 + ww - fw.x, wx0 + ww + fw.x, fu);
    float inY = smoothstep(wy0 - fw.y, wy0 + fw.y, yIn) - smoothstep(wy1 - fw.y, wy1 + fw.y, yIn);
    float onFace = step(0.2, v) * (1.0 - smoothstep(topV - fw.y, topV + fw.y, v));
    float winM = clamp(inX, 0.0, 1.0) * clamp(inY, 0.0, 1.0) * onFace * (blank ? 0.0 : 1.0);
    float cov = (ww / bw) * (wh / thisH);
    float lod = smoothstep(0.35, 0.95, max(fw.x / ww, fw.y / wh));

    // ---- what is behind this window
    float h1 = exHash13(vec3(ci + 0.37, fi + 0.71, faceId * 7.13 + seed * 17.31));
    float h2 = fract(h1 * 91.7 + 0.33);
    float h3 = fract(h1 * 53.1 + 0.71);
    float burnRow = step(0.5, vLight.z) * step(vLight.y - 0.01, fi) * step(fi, vLight.y + vLight.z - 0.99);
    float nearBurn = step(0.5, vLight.z) * step(vLight.y - 1.01, fi) * step(fi, vLight.y + vLight.z + 0.01);
    vec3 R = reflect(V, N);
    R.y = abs(R.y) * 0.6 + 0.02;
    float fres = 0.05 + 0.95 * pow(1.0 - clamp(dot(-V, N), 0.0, 1.0), 5.0);
    vec3 glassRefl = skyBase(normalize(R)) * fres * (0.5 + 1.0 * h3);
    vec3 wEmit = vec3(0.0025, 0.0028, 0.0035);
    float lit = step(h1, vLight.x) * (1.0 - burnRow);
    float broken = step(h3, vLight.w) * (1.0 - lit);
    if (burnRow > 0.5) {
      // a burning storey: some windows roar, some glow through smoke, some are black
      if (h2 < 0.36) {
        float n = exFbm3(vec2(u * 1.4, v * 0.8 - uTime * 2.3) + seed * 3.0);
        float fl = n * 1.35 - (yIn - wy0) / wh * 0.55 + 0.22;
        wEmit = mix(vec3(1.0, 0.14, 0.02), vec3(2.8, 0.85, 0.16), smoothstep(0.45, 0.95, fl)) * smoothstep(0.08, 0.5, fl) + vec3(0.16, 0.02, 0.004);
      } else if (h2 < 0.72) {
        wEmit = vec3(0.30, 0.040, 0.008) * (0.55 + 0.45 * exNoise(vec2(uTime * 1.7, h1 * 30.0))) * (0.6 + 0.4 * smoothstep(wy1, wy0, yIn));
      } else wEmit = vec3(0.002);
      glassRefl = vec3(0.0);
    } else if (lit > 0.5) {
      vec3 lc = h2 < 0.64 ? vec3(1.0, 0.50, 0.19) : h2 < 0.86 ? vec3(1.0, 0.34, 0.09) * 0.5 : vec3(0.42, 0.56, 1.0) * 0.7;
      float fl = 1.0;
      if (h2 >= 0.86) fl = 0.45 + 0.55 * exNoise(vec2(uTime * 7.0, h1 * 50.0));
      else if (h2 >= 0.64) fl = 0.78 + 0.22 * exNoise(vec2(uTime * 3.0, h1 * 40.0));
      else if (h3 < 0.14) fl = 0.15 + 0.85 * step(0.28, exNoise(vec2(uTime * 8.0, h1 * 70.0)));
      float lum = (0.30 + 0.70 * h3) * fl * 0.85;
      wEmit = lc * lum * (0.55 + 0.45 * smoothstep(wy0, wy1, yIn));
      if (uDetail > 0.5 && ww / fw.x > 7.0 && glassy < 0.5) {
        // the room behind the glass (interior mapping): back wall, floor, ceiling, side walls, lit by one lamp
        vec3 Vl = vec3(cos(vRot) * V.x - sin(vRot) * V.z, V.y, sin(vRot) * V.x + cos(vRot) * V.z);
        vec3 rd = vec3(dot(Vl, T), Vl.y, -dot(Vl, Fn));
        rd.z = max(rd.z, 0.02);
        vec3 ro = vec3(fu, yIn, 0.0);
        float depth = 3.2 + 3.0 * h3;
        vec3 t1 = (vec3(0.0, 0.0, 0.0) - ro) / rd;
        vec3 t2 = (vec3(bw, thisH, depth) - ro) / rd;
        vec3 tf = max(t1, t2);
        float t = min(min(tf.x, tf.y), tf.z);
        vec3 hp = ro + rd * t;
        vec3 lampP = vec3(bw * (0.3 + 0.4 * h2), thisH - 0.4, depth * 0.5);
        vec3 dl = hp - lampP;
        float fall = 1.0 / (1.0 + dot(dl, dl) * 0.30);
        vec3 surf;
        if (t == tf.z) {
          surf = mix(vec3(0.55, 0.44, 0.34), vec3(0.42, 0.25, 0.20), h2);
          float furn = step(hp.y, 0.9 + 0.8 * h1) * step(abs(hp.x - bw * (0.2 + 0.6 * h3)), 0.6 + 0.6 * h2);
          surf *= 1.0 - 0.75 * furn;
          float pic = step(abs(hp.x - bw * 0.5), 0.35) * step(abs(hp.y - 1.75), 0.25);
          surf *= 1.0 - 0.5 * pic * step(0.5, h2);
        } else if (t == tf.y) surf = rd.y > 0.0 ? vec3(0.62, 0.57, 0.50) : vec3(0.16, 0.10, 0.065);
        else surf = vec3(0.45, 0.38, 0.31);
        wEmit = lc * lum * surf * fall * 2.6;
        // curtains drawn part-way (lit from behind)
        float cs = h2 > 0.5 ? (fu - wx0) : (wx0 + ww - fu);
        float cw = ww * (0.12 + 0.34 * h3);
        float curt = 1.0 - smoothstep(cw - 0.04, cw + 0.04, cs + 0.05 * sin(yIn * 11.0 + h1 * 20.0));
        wEmit = mix(wEmit, lc * lum * vec3(0.95, 0.42, 0.28) * 0.40 * (0.7 + 0.3 * sin(fu * 40.0 + h1 * 9.0)), curt * step(0.25, h1 * 3.1 - floor(h1 * 3.1)));
      }
      glassRefl *= 0.25;
    } else if (broken > 0.5) {
      float sh = step(0.62, exNoise(vec2(fu, yIn) * 9.0 + h1 * 30.0));
      float edge = 1.0 - smoothstep(0.0, 0.18, min(min(fu - wx0, wx0 + ww - fu), min(yIn - wy0, wy1 - yIn)));
      glassRefl *= sh * edge * 1.5;
      wEmit = vec3(0.0008);
    } else {
      wEmit += vec3(0.010, 0.006, 0.0035) * step(0.82, h3) * step(0.5, h2);
    }
    // ---- the wall around it
    vec3 wall = toneColor(vStyle.z, exNoise(vec2(u * 0.13, v * 0.11) + seed * 7.0));
    if (glassy > 0.5) wall = mix(wall, vec3(0.020, 0.022, 0.026), 0.6);
    float streak = exNoise(vec2(u * 1.6, v * 0.07) + seed * 5.0);
    float grime = smoothstep(0.45, 0.85, streak) * 0.30;
    float under = step(yIn, wy0) * (1.0 - smoothstep(0.0, 1.4, wy0 - yIn)) * (1.0 - smoothstep(ww * 0.25, ww * 0.6, abs(fu - bw * 0.5)));
    float base = 1.0 - smoothstep(0.0, gH * 1.2, v);
    // storey lines + a painted cornice band when there is no real one
    float band = (1.0 - smoothstep(0.0, 0.10 + fw.y, abs(yIn - thisH + 0.12))) * 0.20 * (1.0 - glassy);
    float capBand = smoothstep(topV - 0.25, topV, v) * (1.0 - step(topV + 0.9, v)) * 0.25;
    wall *= (1.0 - grime - under * 0.28 - base * 0.25) * (1.0 + band + capBand);
    // soot above burning and burnt windows
    float sootCol = 1.0 - smoothstep(ww * 0.2, ww * 0.9 + (yIn - wy1) * 0.4, abs(fu - bw * 0.5));
    float soot = nearBurn * sootCol * smoothstep(wy0, wy1 + 0.5, yIn + 0.5) ;
    wall *= 1.0 - 0.85 * clamp(soot, 0.0, 1.0);
    // shutters on some shop fronts
    if (fi < 0.5) {
      float shut = step(0.55, h2);
      wEmit = mix(wEmit, vec3(0.0), shut * 0.9);
      glassRefl *= 1.0 - shut;
      wall = mix(wall, vec3(0.09, 0.09, 0.095) * (0.8 + 0.2 * step(0.5, fract(yIn * 6.0))), shut * winM);
    }
    // LOD: a window smaller than a pixel becomes its average
    vec3 winAvg = vec3(0.0035) + skyBase(normalize(R)) * fres * 0.9 + vec3(1.0, 0.48, 0.18) * vLight.x * 0.35 * uDetail;
    vec3 wEm = mix(wEmit + glassRefl, winAvg, lod);
    float wM = mix(winM, cov * onFace * (blank ? 0.0 : 1.0), lod);
    alb = wall * (1.0 - wM);
    emit = wEm * wM;
    // the glow of a burning storey on the wall around it
    if (vLight.z > 0.5) {
      float fb = vLight.y * flH + gH - flH;
      float ft = fb + vLight.z * flH;
      float d = max(max(fb - v, v - ft), 0.0);
      float flick = 0.75 + 0.25 * exNoise(vec2(uTime * 5.0, seed));
      float colMask = 0.55 + 0.45 * smoothstep(bw * 0.5, 0.0, abs(fu - bw * 0.5));
      emit += alb * vec3(2.4, 0.55, 0.12) * exp(-d / 1.3) * flick * colMask * (1.0 - wM);
    }
    wetK = 0.06;
    rough = 0.5;
  } else if (Nl.y > 0.5) {
    // ============================================================== roofs: tar and gravel, puddles, a coping at the edge
    vec2 rp = P.xz;
    float n = exFbm3(rp * 0.21 + seed * 3.0);
    alb = vec3(0.060, 0.056, 0.054) * (0.65 + 0.7 * n);
    if (kind > 1.5 && kind < 2.5) alb = vec3(0.085, 0.060, 0.045);
    if (kind > 2.5) alb = vec3(0.030, 0.030, 0.032);
    vec2 hd = vec2(vDims.x, vDims.z) * 0.5;
    float edge = min(hd.x - abs(vLocal.x), hd.y - abs(vLocal.z));
    float cope = 1.0 - smoothstep(0.15, 0.45, edge);
    alb = mix(alb, toneColor(vStyle.z, 0.5) * 1.1, cope * step(kind, 0.5));
    float puddle = smoothstep(0.52, 0.72, exNoise(rp * 0.28 + seed * 9.0));
    wetK = (0.20 + 0.75 * puddle * (1.0 - cope)) * (uDetail > 0.9 ? 1.0 : 0.5);
    rough = mix(0.5, 0.06, puddle);
    if (kind > 3.5 && kind < 4.5) {
      // paving slabs, 0.6 m, dark joints, wet
      vec2 sl = rp / 0.6; vec2 f = abs(fract(sl) - 0.5);
      float joint = smoothstep(0.44, 0.5, max(f.x, f.y));
      alb = vec3(0.105, 0.100, 0.094) * (0.75 + 0.5 * exHash12(floor(sl))) * (1.0 - joint * 0.55) * (0.8 + 0.4 * n);
      puddle = smoothstep(0.58, 0.78, exNoise(rp * 0.5 + 4.0));
      wetK = 0.25 + 0.6 * puddle; rough = mix(0.3, 0.05, puddle);
    } else if (kind > 4.5) {
      float leaf = step(0.55, exNoise(rp * 3.1));
      alb = mix(vec3(0.050, 0.038, 0.026), vec3(0.085, 0.052, 0.024), leaf) * (0.7 + 0.6 * n); wetK = 0.15; rough = 0.6;
    }
  } else {
    // ============================================================== plain parts: cornices, bulkheads, tanks, iron
    float n = exNoise(P.xz * 0.9 + P.y * 0.7 + seed);
    if (kind < 1.5) {
      alb = toneColor(vStyle.z, n) * 0.95;
      float streak = exNoise(vec2(dot(P.xz, vec2(0.7, 0.7)) * 1.5, P.y * 0.12) + seed);
      alb *= 1.0 - 0.3 * smoothstep(0.5, 0.9, streak);
    } else if (kind < 2.5) {
      float around = atan(vLocal.x, vLocal.z) * 11.0;
      float stave = 0.8 + 0.2 * step(0.12, fract(around));
      float hoop = 1.0 - 0.6 * step(0.93, fract(vLocal.y * 1.4));
      alb = vec3(0.090, 0.058, 0.040) * stave * hoop * (0.8 + 0.4 * n);
    } else if (kind < 3.5) {
      alb = vec3(0.026, 0.025, 0.026) * (0.8 + 0.4 * n);
      wetK = 0.35; rough = 0.3;
    } else {
      alb = vec3(0.13, 0.125, 0.12) * (0.8 + 0.4 * n);
      wetK = 0.2; rough = 0.4;
    }
  }

  vec3 L = exLight(P, N);
  vec3 col = alb * L + emit + wetReflect(V, N, rough) * wetK;
  if (uDetail > 0.9 && N.y > 0.5) col += exSpec(P, N, V, mix(40.0, 600.0, 1.0 - rough)) * wetK * 0.3;
  col = applyHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function S0(t, i) {
  return n0({
    vertexShader: Se,
    fragmentShader: Pe,
    uniforms: { ...t, uDetail: { value: i } },
  });
}
function H0(t) {
  const i = t.flH ?? 3.3,
    a = t.storeys ?? 6,
    e = t.h ?? i * 1.3 + (a - 1) * i + 1.25;
  return {
    rot: 0,
    bay: 3.2,
    tone: 0.1,
    seed: 1,
    lit: 0.06,
    burnF: 0,
    burnN: 0,
    dmg: 0.05,
    blank: !1,
    ...t,
    flH: i,
    h: e,
  };
}
function F0(t, i, a, e) {
  return (
    Math.min(
      t0(t - a / 2, i - e / 2),
      t0(t + a / 2, i - e / 2),
      t0(t - a / 2, i + e / 2),
      t0(t + a / 2, i + e / 2),
    ) - 0.6
  );
}
