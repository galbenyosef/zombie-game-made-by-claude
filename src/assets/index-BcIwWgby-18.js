// assets/index-BcIwWgby 18 — math
// Lines 4981-5315 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function sr(s) {
  const o = new n0({
    color: 16777215,
    roughness: 0.62,
    metalness: 0,
    side: p0,
  });
  return (
    (o.onBeforeCompile = (t) => {
      (Object.assign(t.uniforms, s),
        (t.vertexShader = t.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute vec4 aRoot;          // x, y, z, yaw
attribute vec4 aShape;         // height, width, arch, rank (0..1, shuffled within the chunk: the LOD order)
varying float vT;
varying float vVar;
varying float vSide;
varying vec3 vGW;
${Rs}
${Na}
vec3 gPos; vec3 gNrm;
void lawnBlade() {
  vec3 root = aRoot.xyz;
  float yaw = aRoot.w, h = aShape.x, w = aShape.y, arch = aShape.z, rank = aShape.w;
  float var = fract(rank * 97.13 + root.x * 3.17 + root.z * 1.31);
  float t = position.y;
  vT = t; vVar = var; vSide = position.x;
  // far away: the blades past this chunk's cut fade out, the rest widen (the same cover from fewer blades)
  float dCam = distance(cameraPosition.xz, root.xz);
  float far = clamp((dCam - 7.0) / 16.0, 0.0, 0.78);
  float cut = 1.1 - far;
  float keep = smoothstep(cut, cut - 0.1, rank);
  h *= mix(1.0, 0.13 + 0.12 * var, uBurn) * keep;
  float wMul = (1.0 + far * 1.5) * mix(1.0, 1.5, uBurn) * mix(0.35, 1.0, keep);
  vec3 f = vec3(sin(yaw), 0.0, cos(yaw)), sd = vec3(cos(yaw), 0.0, -sin(yaw));
  vec2 B = lawnBend(root, yaw, arch, var, 1.0);
  float bl = length(B);
  vec3 tip = vec3(B.x, sqrt(1.0 - bl * bl), B.y) * h;
  vec3 ctrl = vec3(B.x * 0.18, 0.56, B.y * 0.18) * h;
  float it = 1.0 - t;
  vec3 c = 2.0 * it * t * ctrl + t * t * tip;
  vec3 tang = normalize(2.0 * it * ctrl + 2.0 * t * (tip - ctrl) + vec3(0.0, 1e-4, 0.0));
  float wProf = w * wMul * (1.0 - pow(t, 1.7)) * (0.8 + 0.2 * it);
  gPos = root + c + sd * position.x * wProf;
  // the normal: off the blade's face, turned toward the edge it is on (a rounded blade), then half way to the sky (a lawn
  // reads as one soft surface, not a field of lit cards)
  vec3 nB = normalize(cross(sd, tang)); if (dot(nB, f) < 0.0) nB = -nB;
  nB = normalize(nB + sd * position.x * 0.9);
  gNrm = normalize(mix(nB, vec3(0.0, 1.0, 0.0), 0.5));
  vGW = gPos;
}`,
          )
          .replace(
            "#include <beginnormal_vertex>",
            `lawnBlade();
vec3 objectNormal = gNrm;`,
          )
          .replace("#include <begin_vertex>", "vec3 transformed = gPos;")),
        (t.fragmentShader = t.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform float uBurn;
varying float vT;
varying float vVar;
varying float vSide;
varying vec3 vGW;
${Rs}`,
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
      {
        // colour: a dark root, green up the blade, sun-bleached tips; each blade its own; broad patches of lighter and
        // deeper grass, a few dry straw blades
        float patchN = gn(vGW.xz * 0.31) * 0.65 + gn(vGW.xz * 1.3) * 0.35;
        vec3 rootC = vec3(0.02, 0.046, 0.01);
        vec3 midC = mix(vec3(0.04, 0.11, 0.017), vec3(0.066, 0.14, 0.02), patchN);
        vec3 tipC = mix(vec3(0.1, 0.22, 0.036), vec3(0.17, 0.25, 0.045), patchN * 0.8 + vVar * 0.2);
        float up = vT;
        vec3 c = mix(rootC, midC, smoothstep(0.0, 0.45, up));
        c = mix(c, tipC, smoothstep(0.35, 1.0, up));
        c *= 0.8 + 0.4 * vVar;
        float dry = step(0.955, fract(vVar * 7.31));
        c = mix(c, vec3(0.26, 0.21, 0.09) * (0.6 + 0.6 * up), dry * 0.7);
        // (the ruins: charcoal stubble, grey ash at the tips)
        c = mix(c, mix(vec3(0.008, 0.007, 0.006), vec3(0.06, 0.056, 0.052), up * up), uBurn);
        diffuseColor.rgb = c;
      }`,
          )
          .replace(
            "#include <normal_fragment_begin>",
            `#include <normal_fragment_begin>
      normal = normalize(vNormal);                                           // (both faces share one normal)`,
          )
          .replace(
            "#include <lights_fragment_begin>",
            La("vT * (1.0 - uBurn)"),
          )));
    }),
    (o.customProgramCacheKey = () => "lawn1"),
    o
  );
}
function ar() {
  const o = document.createElement("canvas");
  o.width = o.height = 256 * 2;
  const t = o.getContext("2d"),
    u = (p, i) => {
      (t.save(),
        t.translate((p % 2) * 256 + 256 / 2, Math.floor(p / 2) * 256 + 256 / 2),
        i(),
        t.restore());
    };
  let e = 5;
  const r = () => ((e = (e * 16807) % 2147483647), e / 2147483647);
  (u(0, () => {
    for (let i = 0; i < 21; i++) {
      (t.save(), t.rotate((i / 21) * Math.PI * 2 + r() * 0.1));
      const d = t.createLinearGradient(0, -20, 0, -118);
      (d.addColorStop(0, "#f4f1ea"),
        d.addColorStop(0.8, "#ffffff"),
        d.addColorStop(1, "#f6d6de"),
        (t.fillStyle = d),
        t.beginPath(),
        t.ellipse(0, -68, 10.5, 50, 0, 0, Math.PI * 2),
        t.fill(),
        t.restore());
    }
    const p = t.createRadialGradient(-6, -6, 2, 0, 0, 30);
    (p.addColorStop(0, "#ffe35a"),
      p.addColorStop(1, "#d99a12"),
      (t.fillStyle = p),
      t.beginPath(),
      t.arc(0, 0, 28, 0, Math.PI * 2),
      t.fill(),
      (t.fillStyle = "rgba(150,90,10,0.35)"));
    for (let i = 0; i < 40; i++) {
      const d = r() * 6.28,
        y = Math.sqrt(r()) * 24;
      (t.beginPath(),
        t.arc(Math.cos(d) * y, Math.sin(d) * y, 1.8, 0, 7),
        t.fill());
    }
  }),
    u(1, () => {
      for (let p = 0; p < 5; p++) {
        (t.save(), t.rotate((p / 5) * Math.PI * 2));
        const i = t.createRadialGradient(0, -30, 4, 0, -52, 62);
        (i.addColorStop(0, "#fff27a"),
          i.addColorStop(0.6, "#ffd21a"),
          i.addColorStop(1, "#e7a60a"),
          (t.fillStyle = i),
          t.beginPath(),
          t.ellipse(0, -56, 44, 54, 0, 0, Math.PI * 2),
          t.fill(),
          (t.fillStyle = "rgba(255,255,230,0.55)"),
          t.beginPath(),
          t.ellipse(-10, -70, 10, 18, -0.3, 0, Math.PI * 2),
          t.fill(),
          t.restore());
      }
      ((t.fillStyle = "#a8a01a"),
        t.beginPath(),
        t.arc(0, 0, 20, 0, Math.PI * 2),
        t.fill(),
        (t.fillStyle = "#f0d040"));
      for (let p = 0; p < 14; p++) {
        const i = (p / 14) * 6.28;
        (t.beginPath(),
          t.arc(Math.cos(i) * 17, Math.sin(i) * 17, 4, 0, 7),
          t.fill());
      }
    }),
    u(2, () => {
      const p = (i, d, y, w, g, z) => {
        (t.save(), t.rotate(i));
        const x = t.createRadialGradient(0, 0, 4, 0, w, y * 1.4);
        (x.addColorStop(0, g),
          x.addColorStop(1, z),
          (t.fillStyle = x),
          t.beginPath(),
          t.ellipse(0, w, d, y, 0, 0, Math.PI * 2),
          t.fill(),
          t.restore());
      };
      (p(-0.55, 38, 58, -58, "#8a6ad8", "#5a3aa8"),
        p(0.55, 38, 58, -58, "#8a6ad8", "#5a3aa8"),
        p(-1.75, 34, 50, -50, "#9a7ae0", "#6a48b8"),
        p(1.75, 34, 50, -50, "#9a7ae0", "#6a48b8"),
        p(Math.PI, 48, 60, -56, "#a88ae8", "#6040b0"),
        (t.strokeStyle = "rgba(40,10,80,0.6)"),
        (t.lineWidth = 2.5));
      for (let i = -2; i <= 2; i++)
        (t.beginPath(), t.moveTo(0, 12), t.lineTo(i * 9, 70), t.stroke());
      ((t.fillStyle = "#ffffff"),
        t.beginPath(),
        t.arc(0, 4, 11, 0, 7),
        t.fill(),
        (t.fillStyle = "#ffd040"),
        t.beginPath(),
        t.arc(0, 4, 5, 0, 7),
        t.fill());
    }),
    u(3, () => {
      for (let p = 0; p < 150; p++) {
        const i = r() * 6.28,
          d = Math.pow(r(), 0.7) * 92;
        ((t.fillStyle =
          d > 60
            ? r() < 0.5
              ? "#f3c8d8"
              : "#e9aac4"
            : r() < 0.5
              ? "#fbf3f0"
              : "#f6dbe4"),
          t.save(),
          t.translate(Math.cos(i) * d, Math.sin(i) * d),
          t.rotate(i),
          t.beginPath(),
          t.ellipse(0, 0, 6, 15, 0, 0, Math.PI * 2),
          t.fill(),
          t.restore());
      }
    }));
  const a = new io(o);
  return ((a.colorSpace = lo), (a.anisotropy = 4), a);
}
function nr() {
  const s = [
      -0.5, 0, 0, 0.5, 0, 0, -0.5, 0.5, 0, 0.5, 0.5, 0, 0, 1, 0, -0.5, -0.5, 1,
      0.5, -0.5, 1, -0.5, 0.5, 1, 0.5, 0.5, 1,
    ],
    o = [0, 1, 2, 1, 3, 2, 2, 3, 4, 5, 6, 7, 6, 8, 7],
    t = new Po();
  return (
    t.setAttribute("position", new xt(s, 3)),
    t.setAttribute(
      "normal",
      new xt(
        new Float32Array(s.length).map((u, e) => (e % 3 === 1 ? 1 : 0)),
        3,
      ),
    ),
    t.setIndex(o),
    t
  );
}
function rr(s, o) {
  const t = new n0({ color: 16777215, roughness: 0.55, side: p0 });
  return (
    (t.onBeforeCompile = (u) => {
      (Object.assign(u.uniforms, s, { tFlower: { value: o } }),
        (u.vertexShader = u.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute vec4 aRoot;          // x, y, z, yaw
attribute vec4 aShape;         // stem height, head size, arch, kind (0..3) + a random fraction
varying float vHead;
varying vec2 vFUv;
varying float vKind;
varying float vT;
${Rs}
${Na}
vec3 gPos; vec3 gNrm;
void flower() {
  vec3 root = aRoot.xyz;
  float yaw = aRoot.w, h = aShape.x * (1.0 - uBurn), size = aShape.y * (1.0 - uBurn), arch = aShape.z;
  float kind = floor(aShape.w), var = fract(aShape.w);
  vKind = kind; vHead = position.z;
  vec2 B = lawnBend(root, yaw, arch, var, 0.8);
  float bl = length(B);
  vec3 tip = vec3(B.x, sqrt(1.0 - bl * bl), B.y) * h;
  vec3 ctrl = vec3(B.x * 0.2, 0.55, B.y * 0.2) * h;
  vec3 sd = vec3(cos(yaw), 0.0, -sin(yaw));
  if (position.z < 0.5) {
    float t = position.y, it = 1.0 - t;
    vec3 tang = normalize(2.0 * it * ctrl + 2.0 * t * (tip - ctrl) + vec3(0.0, 1e-4, 0.0));
    gPos = root + 2.0 * it * t * ctrl + t * t * tip + sd * position.x * 0.0045 * (1.0 - 0.5 * t);
    gNrm = normalize(mix(normalize(cross(sd, tang)), vec3(0.0, 1.0, 0.0), 0.5));
    vT = t; vFUv = vec2(0.0);
  } else {
    // the head: across the stem's top, tipped with it
    vec3 up = normalize(normalize(tip - ctrl) + vec3(0.0, 1.2, 0.0));
    vec3 ax = normalize(cross(up, vec3(sin(yaw * 3.1), 0.0, cos(yaw * 3.1))));
    vec3 az = cross(ax, up);
    gPos = root + tip + (ax * position.x + az * position.y) * size + up * 0.004;
    gNrm = up;
    vT = 1.0; vFUv = position.xy + 0.5;
  }
}`,
          )
          .replace(
            "#include <beginnormal_vertex>",
            `flower();
vec3 objectNormal = gNrm;`,
          )
          .replace("#include <begin_vertex>", "vec3 transformed = gPos;")),
        (u.fragmentShader = u.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform sampler2D tFlower;
uniform float uBurn;
varying float vHead;
varying vec2 vFUv;
varying float vKind;
varying float vT;`,
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
      if (vHead > 0.5) {
        vec2 cellUv = (vFUv + vec2(mod(vKind, 2.0), 1.0 - floor(vKind / 2.0))) * 0.5;
        vec4 fc = texture2D(tFlower, cellUv);
        if (fc.a < 0.5) discard;
        diffuseColor.rgb = fc.rgb;
      } else {
        diffuseColor.rgb = mix(vec3(0.02, 0.05, 0.01), vec3(0.09, 0.17, 0.03), vT);
      }`,
          )
          .replace(
            "#include <normal_fragment_begin>",
            `#include <normal_fragment_begin>
      normal = normalize(vNormal);`,
          )
          .replace("#include <lights_fragment_begin>", La("0.8"))));
    }),
    (t.customProgramCacheKey = () => "lawnflower1"),
    t
  );
}
