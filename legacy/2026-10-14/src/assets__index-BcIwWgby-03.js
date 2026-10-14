// assets__index-BcIwWgby 03 — uniforms
// Lines 503-747 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Ca(s, o, { shadows: t = !0, strength: u = 1 } = {}) {
  const e = s.onBeforeCompile,
    r = v0.toFixed(3);
  s.onBeforeCompile = (p, i) => {
    (e && e(p, i),
      (p.uniforms.uCausT = o.uCausT),
      (p.uniforms.uCaus = o.uCaus),
      (p.uniforms.uCausCol = o.uCausCol),
      (p.uniforms.uCausOn = o.uCausOn),
      (p.uniforms.uKoiSun = o.uKoiSun),
      (p.uniforms.uSunBent = o.uSunBent),
      t && ((p.uniforms.uKoiA = o.uKoiA), (p.uniforms.uKoiB = o.uKoiB)),
      p.vertexShader.includes("vCausSh") ||
        (p.vertexShader = p.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vCausW;
varying vec4 vCausSh;
uniform vec3 uKoiSun;`,
          )
          .replace(
            "#include <worldpos_vertex>",
            `#include <worldpos_vertex>
      vCausW = (modelMatrix * vec4(transformed, 1.0)).xyz;
      #ifdef USE_INSTANCING
      vCausW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
      #endif
      vCausSh = vec4(0.0);
      #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
      {
        // (where the bent ray from here to the sun comes out of the water: the sun's shadow is looked up there)
        float cd = max(${r} - vCausW.y, 0.0);
        vCausSh = directionalShadowMatrix[0] * vec4(vCausW.x + uKoiSun.x * cd, ${r} + 0.03, vCausW.z + uKoiSun.y * cd, 1.0);
      }
      #endif`,
          )),
      (p.fragmentShader = p.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec3 vCausW;
varying vec4 vCausSh;
uniform float uCausT, uCaus, uCausOn;
uniform vec3 uCausCol, uKoiSun;
uniform vec4 uSunBent;
${An}
${t ? Tn : ""}`,
        )
        .replace(
          "#include <lights_fragment_end>",
          `#include <lights_fragment_end>
      {
        float dep = ${r} - vCausW.y;
        float under = clamp(dep * 12.0, 0.0, 1.0);
        if (uCausOn > 0.5 && uKoiSun.z > 0.0 && under > 0.0) {
          float visP = 1.0, visE = 1.0;
          #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
          if (receiveShadow) {
            DirectionalLightShadow ds = directionalLightShadows[0];
            visP = getShadow(directionalShadowMap[0], ds.shadowMapSize, ds.shadowIntensity, ds.shadowBias, ds.shadowRadius, vDirectionalShadowCoord[0]);
            visE = getShadow(directionalShadowMap[0], ds.shadowMapSize, ds.shadowIntensity, ds.shadowBias, ds.shadowRadius, vCausSh);
          }
          #endif
          float shade = ${t ? "koiShade(vCausW) * under" : "0.0"};
          float lit = visE * (1.0 - shade);
          // (directionalLights[0] and its shadow map [0]: the sun, the garden's only directional light that casts shadows;
          // three puts shadow casters first)
          #if NUM_DIR_LIGHTS > 0
          if (uSunBent.w > 0.0) {
            IncidentLight bl; bl.visible = true;
            bl.direction = directionalLights[0].direction; bl.color = -directionalLights[0].color * (visP * under);
            RE_Direct(bl, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
            bl.direction = normalize((viewMatrix * vec4(uSunBent.xyz, 0.0)).xyz);
            bl.color = directionalLights[0].color * (uSunBent.w * lit * under) * exp(-vec3(0.3, 0.08, 0.1) * dep / uSunBent.y);
            RE_Direct(bl, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
          }
          #endif
          reflectedLight.indirectDiffuse *= (1.0 - 0.15 * under) * (1.0 - 0.45 * shade);   // (the sky, dimmer under the water; a fish over it hides some)
          // the caustics (in the sun only; the net of light falls from above: on a fish's back, not on its flanks or belly)
          float facing = smoothstep(-0.15, 0.65, dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz)));
          float c = causticAt(vCausW.xz * 1.3, uCausT * 0.55) * 0.6 + causticAt(vCausW.xz * 2.1 + 3.7, uCausT * 0.7) * 0.4;
          reflectedLight.directDiffuse += diffuseColor.rgb * uCausCol * c * (uCaus * ${u.toFixed(3)}) * under * facing * lit * exp(-dep * 1.6);
        }
      }`,
        )));
  };
  const a = s.customProgramCacheKey ? s.customProgramCacheKey() : "";
  s.customProgramCacheKey = () => a + "|caus2" + (t ? "s" : "") + u;
}
function Cn(s = 512) {
  const o = new Float32Array(s * s),
    t = (a, p, i) => {
      let d = (a * 374761393 + p * 668265263 + i * 1442695041) | 0;
      return (
        (d = Math.imul(d ^ (d >>> 13), 1274126177)),
        ((d ^ (d >>> 16)) >>> 0) / 4294967296
      );
    },
    u = (a, p, i, d) => {
      const y = a * i,
        w = p * i,
        g = Math.floor(y),
        z = Math.floor(w),
        x = y - g,
        v = w - z,
        n = t(g % i, z % i, d),
        l = t((g + 1) % i, z % i, d),
        f = t(g % i, (z + 1) % i, d),
        h = t((g + 1) % i, (z + 1) % i, d),
        c = x * x * (3 - 2 * x),
        M = v * v * (3 - 2 * v);
      return n + (l - n) * c + (f - n) * M + (n - l - f + h) * c * M;
    };
  for (let a = 0; a < s; a++)
    for (let p = 0; p < s; p++) {
      const i = p / s,
        d = a / s;
      let y = 0,
        w = 1;
      for (const [g, z] of [
        [4, 1],
        [8, 2],
        [16, 3],
        [32, 4],
        [64, 5],
      ])
        ((y += u(i, d, g, z) * w), (w *= 0.5));
      o[a * s + p] = y;
    }
  const e = new Uint8Array(s * s * 4);
  for (let a = 0; a < s; a++)
    for (let p = 0; p < s; p++) {
      const i = o[a * s + ((p + 1) % s)] - o[a * s + ((p - 1 + s) % s)],
        d = o[((a + 1) % s) * s + p] - o[((a - 1 + s) % s) * s + p],
        y = -i * 2.2,
        w = -d * 2.2,
        g = Math.hypot(y, w, 1),
        z = (a * s + p) * 4;
      ((e[z] = ((y / g) * 0.5 + 0.5) * 255),
        (e[z + 1] = ((w / g) * 0.5 + 0.5) * 255),
        (e[z + 2] = ((1 / g) * 0.5 + 0.5) * 255),
        (e[z + 3] = 255));
    }
  const r = new ga(e, s, s, Ga);
  return (
    (r.wrapS = r.wrapT = Ha),
    (r.generateMipmaps = !0),
    (r.minFilter = vs),
    (r.magFilter = _s),
    (r.needsUpdate = !0),
    r
  );
}
const In = `
uniform mat4 uReflMat;
varying vec3 vW;
varying vec4 vReflUv;
varying float vViewZ;
#include <fog_pars_vertex>
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vReflUv = uReflMat * w;
  vec4 mvPosition = viewMatrix * w;
  vViewZ = -mvPosition.z;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,
  _n = `
precision highp float;
uniform sampler2D tRefr, tRefrD, tRefl, tNorm;
uniform vec2 uScreen;
uniform float uTime, uNear, uFar, uReflK, uGlint, uWave, uFilm, uAsh, uDebug, uRefrK;
uniform vec2 uProjK;
uniform vec3 uSunDir, uSunCol, uDeep, uAbsorb;
uniform vec4 uRip[16];
varying vec3 vW;
varying vec4 vReflUv;
varying float vViewZ;
#include <fog_pars_fragment>
float viewDepth(float d) { return (uNear * uFar) / ((uFar - uNear) * d - uFar) * -1.0; }
float hsh(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  vec2 suv = gl_FragCoord.xy / uScreen;
  vec2 p = vW.xz;
  // the small waves: three layers of the normal map drifting different ways (the broad swell, the fine ripples)
  vec2 gA = (texture2D(tNorm, p * 0.21 + vec2(uTime * 0.011, uTime * 0.007)).xy * 2.0 - 1.0) * 0.55
          + (texture2D(tNorm, p * 0.57 - vec2(uTime * 0.018, -uTime * 0.012)).xy * 2.0 - 1.0) * 0.35;
  vec2 gB = (texture2D(tNorm, p * 1.6 + vec2(-uTime * 0.032, uTime * 0.027)).xy * 2.0 - 1.0) * 0.2;
  // rings from koi rising and petals landing
  vec2 gR = vec2(0.0);
  for (int i = 0; i < 16; i++) {
    vec4 r = uRip[i];
    float age = uTime - r.z;
    if (r.w <= 0.0 || age < 0.0 || age > 5.0) continue;
    vec2 d = p - r.xy; float dist = length(d) + 1e-4;
    float x = dist - age * 0.32;
    float wv = sin(x * 38.0) * exp(-x * x * 55.0) * r.w * exp(-age * 0.8) / (1.0 + dist * 5.0);
    gR += d / dist * wv * 2.2;
  }
  vec2 g = (gA + gB) * uWave + gR;
  vec3 N = normalize(vec3(-g.x * 0.22, 1.0, -g.y * 0.22));
  vec3 V = normalize(cameraPosition - vW);
  float cosT = max(dot(N, V), 0.0);
  float F = 0.02 + 0.98 * pow(1.0 - cosT, 5.0);
  // what is under the surface, seen through the swell and the rings (the finest ripples would only scramble it): the
  // deeper a thing lies the further it shifts, so a fish just under the surface stays whole while the pebbles swim; never
  // bent onto something in FRONT of the water
  float surf = vViewZ;
  float d0 = viewDepth(texture2D(tRefrD, suv).r);
  float th0 = clamp(d0 - surf, 0.0, 1.5);
  vec2 gr = gA * uWave + gR;
  vec2 dv = (viewMatrix * vec4(gr.x, 0.0, gr.y, 0.0)).xy * (0.22 * uRefrK * th0);
  vec2 ruv = suv + dv * uProjK * 0.5 / (surf + th0);
  float dz = viewDepth(texture2D(tRefrD, ruv).r);
  if (dz < surf) { ruv = suv; dz = d0; }
  // the water the light crosses: along the ray, not the lens axis (the pond keeps its colour when the head turns)
  float thick = max(dz - surf, 0.0) * length(cameraPosition - vW) / surf;
  vec3 refr = texture2D(tRefr, ruv).rgb;
  vec3 T = exp(-uAbsorb * thick);
  vec3 under = refr * T + uDeep * (1.0 - T);
  // ash drifting on an oily film (the ruins): soft round flecks, one in a few dozen cells
  vec2 ap = p * 30.0 + vec2(uTime * 0.05, uTime * 0.03);
  vec2 ac = floor(ap);
  vec2 ao = vec2(hsh(ac + 17.0), hsh(ac + 43.0)) * 0.5 + 0.25;
  float ash = step(0.975, hsh(ac)) * (1.0 - smoothstep(0.1, 0.26, length(fract(ap) - ao))) * uAsh;
  // the garden in the surface
  vec4 rc = vReflUv; rc.xy += N.xz * 0.05 * rc.w;
  vec3 refl = min(texture2DProj(tRefl, rc).rgb, vec3(3.0));
  vec3 film = 0.5 + 0.5 * cos(6.2831 * (vec3(0.0, 0.33, 0.67) + cosT * 1.7 + g.x * 0.6));
  refl = mix(refl, refl * film * 1.4, uFilm * 0.5);
  vec3 col = mix(under, refl, clamp(F * uReflK, 0.0, 1.0));
  // the sun on the ripples
  vec3 Hs = normalize(uSunDir + V);
  float sp = pow(max(dot(N, Hs), 0.0), 1200.0) * 6.0 + pow(max(dot(N, Hs), 0.0), 90.0) * 0.12;
  col += uSunCol * sp * uGlint;
  col = mix(col, vec3(0.05, 0.048, 0.045), ash * 0.9);
  // the very edge: a film of water over the pebbles, nothing to reflect yet
  float edge = smoothstep(0.0, 0.035, thick * max(cosT, 0.2));
  col = mix(refr, col, edge);
  if (uDebug > 0.5) col = uDebug < 1.5 ? refr : uDebug < 2.5 ? refl : uDebug < 3.5 ? vec3(thick * 0.5) : vec3(dz * 0.05, surf * 0.05, 0.0);
  gl_FragColor = vec4(col, 1.0);
  #include <fog_fragment>
}`;
