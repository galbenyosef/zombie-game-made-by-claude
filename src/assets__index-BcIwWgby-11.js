// assets__index-BcIwWgby 11 — replace
// Lines 2870-2960 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Gn() {
  const s = At("garden_rock"),
    o = s.clone();
  return (
    (o.userData = { ...s.userData, U: { uMoss: { value: 1 } } }),
    (o.onBeforeCompile = (t) => {
      ((t.uniforms.uMoss = o.userData.U.uMoss),
        (t.vertexShader = t.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vRW;
varying vec3 vRN;`,
          )
          .replace(
            "#include <worldpos_vertex>",
            `#include <worldpos_vertex>
#ifdef USE_INSTANCING
vRW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz; vRN = normalize(mat3(modelMatrix * instanceMatrix) * objectNormal);
#else
vRW = (modelMatrix * vec4(transformed, 1.0)).xyz; vRN = normalize(mat3(modelMatrix) * objectNormal);
#endif`,
          )),
        (t.fragmentShader = t.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vRW;
varying vec3 vRN;
uniform float uMoss;
float rH(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float rN(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(rH(i), rH(i + vec2(1, 0)), f.x), mix(rH(i + vec2(0, 1)), rH(i + vec2(1, 1)), f.x), f.y); }`,
          )
          .replace(
            "#include <map_fragment>",
            `
      {
        vec3 bw = pow(abs(vRN), vec3(4.0)); bw /= (bw.x + bw.y + bw.z);
        vec3 tx = texture2D(map, vRW.zy / 1.2).rgb, ty = texture2D(map, vRW.xz / 1.2).rgb, tz = texture2D(map, vRW.xy / 1.2).rgb;
        vec3 c = tx * bw.x + ty * bw.y + tz * bw.z;
        float patchN = rN(vRW.xz * 2.3 + vRW.y) * 0.6 + rN(vRW.xz * 7.0) * 0.4;
        float mossK = uMoss * smoothstep(0.55, 0.9, vRN.y) * smoothstep(0.45, 0.7, patchN) * smoothstep(-0.1, 0.1, vRW.y - ${(v0 + 0.05).toFixed(3)});
        c = mix(c, vec3(0.11, 0.17, 0.055) * (0.7 + 0.6 * rN(vRW.xz * 13.0)), mossK * 0.8);
        float wet = smoothstep(${(v0 + 0.08).toFixed(3)}, ${(v0 - 0.02).toFixed(3)}, vRW.y);
        c *= mix(1.0, 0.55, wet);
        diffuseColor.rgb *= c;
      }`,
          )
          .replace(
            "#include <roughnessmap_fragment>",
            `#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.2, smoothstep(` +
              (v0 + 0.08).toFixed(3) +
              ", " +
              (v0 - 0.02).toFixed(3) +
              ", vRW.y));",
          )));
    }),
    (o.customProgramCacheKey = () => "rock2"),
    (o.normalMap = null),
    (o.aoMap = null),
    o
  );
}
function Ho(s, o = 3) {
  const t = vn(new Sa(1, o).deleteAttribute("normal").deleteAttribute("uv")),
    u = t.attributes.position,
    e = new dt(),
    r = [s() * 10, s() * 10, s() * 10],
    a = (i, d, y) =>
      Math.sin(i * 1.7 + r[0]) *
      Math.sin(d * 2.1 + r[1]) *
      Math.sin(y * 1.9 + r[2]);
  for (let i = 0; i < u.count; i++) {
    e.fromBufferAttribute(u, i);
    const d =
      1 +
      0.22 * a(e.x * 1.3, e.y * 1.3, e.z * 1.3) +
      0.1 * a(e.x * 3.1 + 2, e.y * 3.1, e.z * 3.1) +
      0.05 * a(e.x * 7, e.y * 7, e.z * 7);
    (e.multiplyScalar(d),
      e.y < -0.2 && (e.y = -0.2 + (e.y + 0.2) * 0.3),
      u.setXYZ(i, e.x, e.y, e.z));
  }
  t.computeVertexNormals();
  const p = new Float32Array(u.count * 2);
  for (let i = 0; i < u.count; i++)
    ((p[i * 2] = u.getX(i) * 0.5 + u.getZ(i) * 0.3),
      (p[i * 2 + 1] = u.getY(i) * 0.5));
  return (t.setAttribute("uv", new vt(p, 2)), t);
}
