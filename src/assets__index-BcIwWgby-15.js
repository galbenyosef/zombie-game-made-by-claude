// assets__index-BcIwWgby 15 — uniforms
// Lines 3902-4028 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function wo(s, o = {}) {
  const t = s.clone();
  ((t.userData = { ...s.userData, churchLit: !0 }),
    o.name && (t.name = o.name));
  const u = (p) => Object.prototype.hasOwnProperty.call(s, p),
    e = u("onBeforeCompile") ? s.onBeforeCompile : null,
    r = u("customProgramCacheKey") ? s.customProgramCacheKey : null,
    a = o.patch || null;
  return (
    (t.onBeforeCompile = (p, i) => {
      (e && e.call(t, p, i),
        (p.uniforms.uVL = Je.uVL),
        (p.uniforms.uVC = Je.uVC),
        (p.uniforms.uVGain = Je.uVGain),
        (p.uniforms.uPJm = Je.uPJm),
        (p.uniforms.uPJp = Je.uPJp),
        (p.uniforms.uPJi = Je.uPJi),
        (p.uniforms.uPJtex = Je.uPJtex),
        (p.vertexShader = p.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vChW;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
      {
        vec4 chW = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          chW = instanceMatrix * chW;
        #endif
        vChW = (modelMatrix * chW).xyz;
      }`,
          )),
        (p.fragmentShader = p.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform vec4 uVL[${so}];
uniform vec4 uVC[${so}];
uniform float uVGain;
uniform mat4 uPJm[${Ce}];
uniform vec4 uPJp[${Ce}];
uniform vec4 uPJi[${Ce}];
uniform sampler2D uPJtex;
varying vec3 vChW;`,
          )
          .replace(
            "#include <lights_fragment_end>",
            `
      {
        // the candles (virtual point lights): inverse square with a soft near limit and a smooth end at their reach
        for (int i = 0; i < ${so}; i++) {
          vec4 vl = uVL[i];
          if (vl.w <= 0.0) continue;
          vec3 lv = (viewMatrix * vec4(vl.xyz, 1.0)).xyz - geometryPosition;
          float d2 = dot(lv, lv), reach = uVC[i].w;
          if (d2 > reach * reach) continue;
          float d = sqrt(d2);
          float win = 1.0 - d2 * d2 / (reach * reach * reach * reach);
          directLight.direction = lv / d;
          directLight.color = uVC[i].rgb * (vl.w * uVGain * win * win / (d2 + 0.12));
          directLight.visible = true;
          RE_Direct(directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
        }
        // the glass thrown down by the fire behind it (a soft image of the window, its colours pushed)
        for (int k = 0; k < ${Ce}; k++) {
          vec4 pp = uPJp[k];
          if (pp.w <= 0.0) continue;
          vec4 pc = uPJm[k] * vec4(vChW, 1.0);
          if (pc.w <= 0.0) continue;
          vec2 q = pc.xy / pc.w;
          float cone = 1.0 - smoothstep(0.7, 1.0, length(q));
          vec4 inf = uPJi[k];
          vec2 wuv = vec2(q.x * 0.5 / inf.z + 0.5, q.y * 0.5 / inf.w + 0.5);
          if (cone <= 0.0 || wuv.x < 0.0 || wuv.x > 1.0 || wuv.y < 0.0 || wuv.y > 1.0) continue;
          if (inf.y > 0.5) wuv.x = 1.0 - wuv.x;
          vec3 g = textureLod(uPJtex, vec2((inf.x + wuv.x) * 0.25, wuv.y), 3.3).rgb * 0.7 + textureLod(uPJtex, vec2((inf.x + wuv.x) * 0.25, wuv.y), 2.0).rgb * 0.3;
          float lg = dot(g, vec3(0.2126, 0.7152, 0.0722));
          g = max(mix(vec3(lg), g, 1.6), 0.0);
          vec3 lv = (viewMatrix * vec4(pp.xyz, 1.0)).xyz - geometryPosition;
          float pd2 = dot(lv, lv);
          float ndl = max(dot(geometryNormal, lv * inversesqrt(pd2)), 0.0);
          reflectedLight.directDiffuse += BRDF_Lambert(material.diffuseColor) * g * (pp.w * ndl * cone / pd2);
        }
      }
      #include <lights_fragment_end>`,
          )),
        a && a(p));
    }),
    (t.customProgramCacheKey = () =>
      "churchLit" + so + "p" + Ce + (o.key || "") + (r ? r.call(s) : "")),
    (t.needsUpdate = !0),
    t
  );
}
function ca(s, o, t, u, e, r = [1, 0.45, 0.14], a = 4) {
  (_0.pos[s].set(o, t, u, e),
    _0.col[s].set(r[0], r[1], r[2], a),
    (_0.used = Math.max(_0.used, s + 1)));
}
function Jn(s) {
  return new P0({
    uniforms: { uT: s.uFireT },
    vertexShader:
      "attribute float aSeed; varying vec2 vUv; varying float vSeed; void main() { vUv = uv; vSeed = aSeed; vec4 mv = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); vec2 sc = vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz)); mv.xy += (uv - vec2(0.5, 0.0)) * sc; gl_Position = projectionMatrix * mv; }",
    fragmentShader: `precision highp float; varying vec2 vUv; varying float vSeed; uniform float uT; float uSeed;
      float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
      void main() {
        uSeed = vSeed;
        vec2 p = vUv; float t = uT * 1.6 + uSeed * 10.0;
        float turb = n(vec2(p.x * 4.0, p.y * 3.0 - t * 1.8)) * 0.6 + n(vec2(p.x * 9.0, p.y * 7.0 - t * 3.2)) * 0.4;
        float w = (1.0 - p.y) * 0.46 * (0.7 + 0.5 * turb);
        float d = abs(p.x - 0.5 + (turb - 0.5) * 0.18 * p.y) / max(w, 1e-3);
        float core = smoothstep(1.0, 0.2, d) * smoothstep(1.0, 0.55, p.y + turb * 0.25);
        if (core <= 0.001) discard;
        vec3 c = mix(vec3(1.6, 0.35, 0.05), vec3(4.0, 2.4, 0.9), smoothstep(0.3, 0.95, core) * (1.0 - p.y));
        gl_FragColor = vec4(c * core, core);
      }`,
    transparent: !0,
    depthWrite: !1,
    blending: ye,
    fog: !1,
  });
}
