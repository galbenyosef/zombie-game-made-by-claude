// assets__park-CwBfNU5l 08 — replace
// Lines 2225-2309 of readable/assets__park-CwBfNU5l.pretty.js (statement-aligned).
function ja(e, a) {
  return Gt(
    new u0({ color: 16777215, roughness: 0.75, metalness: 0, side: y0 }),
    "tufts",
    (r) => {
      (Object.assign(r.uniforms, e, a),
        (r.vertexShader = r.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
${Ye}
uniform vec2 uOrigin;
uniform vec2 uStepFar;
uniform float uPTt;
attribute vec4 aBlade;
attribute vec2 aCell;
varying float vT;
varying float vVar;
varying float vWorn;
float thash(vec2 p) { return fract(sin(dot(p, vec2(41.37, 289.13))) * 47453.5453); }
vec3 gPos; vec3 gNrm;
void tuft() {
  vec2 cell = uOrigin + aCell;
  float h1 = thash(cell), h2 = thash(cell + 17.3), h3 = thash(cell + 41.1), h4 = thash(cell - 7.7);
  vec2 root = (cell + vec2(h1, h2)) * uStepFar.x;
  vec4 mk = texture2D(tMask, (root - uMaskBox.xy) * uMaskBox.zw);
  float dens = (1.0 - smoothstep(0.02, 0.35, mk.r)) * (1.0 - smoothstep(0.35, 0.85, mk.g)) * (1.0 - smoothstep(0.1, 0.5, mk.a)) * (1.0 - mk.b * 0.55);
  float grow = step(h3, dens * 0.92);
  float dist = distance(root, cameraPosition.xz);
  float fade = 1.0 - smoothstep(uStepFar.y * 0.62, uStepFar.y, dist);
  float hgt = (0.07 + 0.15 * h4 * h4 + 0.05 * h1) * grow * fade * (1.0 - mk.g * 0.45) * (1.0 + mk.b * 0.2);
  float ang = aBlade.x + h1 * 6.2832, off = aBlade.y * (0.8 + h2 * 0.6), lean = aBlade.z, hf = aBlade.w;
  vec2 dir = vec2(cos(ang), sin(ang));
  vec3 base = vec3(root.x + dir.x * off, 0.0, root.y + dir.y * off);
  // the wind: slow gusts rolling over the lawn, each blade its own flutter
  float gust = sin(uPTt * 0.8 + root.x * 0.13 + root.y * 0.07) * 0.5 + 0.5;
  vec2 B = dir * lean + vec2(0.8, 0.45) * (0.05 + 0.18 * gust) + vec2(-dir.y, dir.x) * sin(uPTt * (2.0 + h3) + h4 * 30.0) * 0.04;
  float bl = length(B); if (bl > 0.9) B *= 0.9 / bl;
  float t = position.y, it = 1.0 - t, H = hgt * hf;
  vec3 tip = vec3(B.x, sqrt(1.0 - dot(B, B)), B.y) * H;
  vec3 ctrl = vec3(B.x * 0.2, 0.55, B.y * 0.2) * H;
  vec3 c = 2.0 * it * t * ctrl + t * t * tip;
  vec3 tang = normalize(2.0 * it * ctrl + 2.0 * t * (tip - ctrl) + vec3(0.0, 1e-4, 0.0));
  vec3 sd = vec3(-dir.y, 0.0, dir.x);
  float wd = (0.01 + 0.005 * h2) * (1.0 - pow(t, 1.6)) * step(0.001, H);
  gPos = base + c + sd * position.x * wd;
  vec3 nB = normalize(cross(sd, tang)); if (dot(nB, vec3(dir.x, 0.0, dir.y)) < 0.0) nB = -nB;
  gNrm = normalize(mix(nB, vec3(0.0, 1.0, 0.0), 0.55));
  vT = t; vVar = h4; vWorn = mk.g;
}`,
          )
          .replace(
            "#include <beginnormal_vertex>",
            `tuft();
vec3 objectNormal = gNrm;`,
          )
          .replace("#include <begin_vertex>", "vec3 transformed = gPos;")),
        (r.fragmentShader = r.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying float vT;
varying float vVar;
varying float vWorn;`,
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
      {
        vec3 rootC = vec3(0.016, 0.03, 0.01), midC = mix(vec3(0.035, 0.07, 0.016), vec3(0.06, 0.09, 0.02), vVar);
        vec3 tipC = mix(vec3(0.08, 0.13, 0.03), vec3(0.16, 0.15, 0.06), vVar * vVar);
        vec3 c = mix(rootC, midC, smoothstep(0.0, 0.45, vT));
        c = mix(c, tipC, smoothstep(0.4, 1.0, vT));
        c = mix(c, vec3(0.13, 0.11, 0.06) * (0.6 + 0.5 * vT), step(0.93, fract(vVar * 13.7)) * 0.8 + vWorn * 0.3);
        diffuseColor.rgb = c;
      }`,
          )
          .replace(
            "#include <normal_fragment_begin>",
            `#include <normal_fragment_begin>
      normal = normalize(vNormal);`,
          )));
    },
  );
}
