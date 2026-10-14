// assets/index-Db-AsSxU 27 — math
// Lines 11209-11553 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
const dn = `
uniform vec4 uStrange;            // PRIEST round 3: smile, eyes (rad), brows, lean (-1..1: one corner higher)
uniform vec4 uStrangeP;           // its shape: the mouth's stretch, the corners' lift (m), the brows' inner lift, their even lift (m)
uniform vec4 uStrangeQ;           // x: one eye opens wider than the other (-1..1, + = his left)
uniform vec3 uHC;
float prG(vec3 p, vec3 c, vec3 r) { vec3 q = (p - c) / r; return exp(-dot(q, q)); }
// the upper lid (and the ball under its edge) turns up about the eye's centre, by k at the lid's edge
vec3 prLid(vec3 p, float s, float k) {
  vec3 q = p - vec3(s * 0.031, 0.0, 0.063);
  float r = length(q);
  if (r > 0.0211) return vec3(0.0);
  float dx = abs(q.x);
  float phi = atan(q.y, max(q.z, 1e-4));
  float phiL = 0.33 - dx * 12.0;
  float wa = phi > phiL ? 1.0 - smoothstep(phiL + 0.15, phiL + 1.0, phi) : smoothstep(phiL - 0.75, phiL - 0.03, phi);
  float w = wa * (1.0 - smoothstep(0.0161, 0.0211, r)) * (1.0 - smoothstep(0.0085, 0.0135, dx)) * smoothstep(-0.004, 0.004, q.z);
  float th = k * w, c = cos(th), sn = sin(th);
  return vec3(0.0, q.y * c + q.z * sn - q.y, q.z * c - q.y * sn - q.z);
}
const float PR_MY = -0.084, PR_MW = 0.023;      // (the mouth line's height, its half width: makeLivingHead's mouthY / mouthW)
vec3 prFaceD(vec3 p) {
  vec3 d = vec3(0.0);
  float ax = abs(p.x);
  if (uStrange.x > 0.0 && p.y < 0.0 && ax < 0.088) {
    float sx = p.x >= 0.0 ? 1.0 : -1.0;
    float k = uStrange.x * (1.0 + uStrange.w * clamp(p.x / 0.012, -1.0, 1.0));
    float my = p.y - PR_MY, ov = max(ax - PR_MW, 0.0);
    float lw = exp(-ov * ov / 0.000121);                       // the mouth's width, then fading past the corners (11 mm)
    float u = min(ax / PR_MW, 1.0), u2 = u * u;
    // the mouth stretches wide (the middle stays), the corners go up and back into the cheeks: a long U
    float m = exp(-my * my / 0.000169) * lw * k;
    d += vec3(p.x * uStrangeP.x, uStrangeP.y * u2, -0.004 * u2) * m;
    // the lips press thin toward the line between them, most at the corners; the corners pinch shut
    float sq = exp(-my * my / 0.000049) * lw * k * (0.3 + 0.7 * u2);
    d.y -= my * 0.4 * sq;
    float cw = exp(-(ax - PR_MW) * (ax - PR_MW) / 0.000036) * k;
    d.y -= my * 0.9 * exp(-my * my / 0.0000032) * cw;
    // the cheeks bunch up and forward beside and over the corners (not up into the lower lids: the eyes do not smile)
    d += prG(p, vec3(sx * 0.037, -0.062, 0.07), vec3(0.014, 0.018, 0.03)) * vec3(sx * 0.0015, 0.004, 0.0035) * k;
    d += prG(p, vec3(sx * 0.04, -0.036, 0.068), vec3(0.018, 0.016, 0.03)) * vec3(sx * 0.001, 0.0022, 0.0022) * k;
  }
  if (uStrange.y > 0.0 && abs(p.y) < 0.0211) d += prLid(p, 1.0, uStrange.y * (1.0 + uStrangeQ.x)) + prLid(p, -1.0, uStrange.y * (1.0 - uStrangeQ.x));
  if (uStrange.z > 0.0 && p.y > -0.03) {
    for (int i = 0; i < 2; i++) {
      float s = i == 0 ? 1.0 : -1.0;
      // the inner ends of the brows lift, the whole brow a little
      d += prG(p, vec3(s * 0.017, 0.019, 0.083), vec3(0.012, 0.011, 0.03)) * vec3(-s * 0.18, 1.0, 0.18) * uStrangeP.z * uStrange.z;
      d += prG(p, vec3(s * 0.03, 0.018, 0.08), vec3(0.022, 0.012, 0.03)) * vec3(0.0, 1.0, 0.0) * uStrangeP.w * uStrange.z;
    }
    d += prG(p, vec3(0.0, 0.035, 0.08), vec3(0.028, 0.025, 0.04)) * vec3(0.0, 0.6 * uStrangeP.z + 0.5 * uStrangeP.w, 0.0) * uStrange.z;
  }
  return d;
}
`,
  fn = `
  // PRIEST round 3: the strange face (rest space, before the skinning); the normal through the field's Jacobian
  vec3 prD = vec3(0.0);
  if (uStrange.x + uStrange.y + uStrange.z > 1e-5) {
    vec3 hq = position - uHC;
    if (hq.z > 0.0 && abs(hq.x) < 0.09 && hq.y > -0.16 && hq.y < 0.1) {
      prD = prFaceD(hq);
      if (dot(prD, prD) > 1e-12) {
        vec3 ja = vec3(1.0, 0.0, 0.0) + (prFaceD(hq + vec3(0.0012, 0.0, 0.0)) - prD) / 0.0012;
        vec3 jb = vec3(0.0, 1.0, 0.0) + (prFaceD(hq + vec3(0.0, 0.0012, 0.0)) - prD) / 0.0012;
        vec3 jc = vec3(0.0, 0.0, 1.0) + (prFaceD(hq + vec3(0.0, 0.0, 0.0012)) - prD) / 0.0012;
        objectNormal = normalize(cross(jb, jc) * objectNormal.x + cross(jc, ja) * objectNormal.y + cross(ja, jb) * objectNormal.z);
      }
    }
  }
`;
function mn(e) {
  const o = (c, t, s) =>
    c.includes(t)
      ? c.replace(t, s)
      : (console.warn("[priest] vertex anchor missing: " + t.slice(0, 60)), c);
  let n = e;
  return (
    (n = o(
      n,
      `void main() {
  vAO = aAO;`,
      dn +
        `void main() {
  vAO = aAO;`,
    )),
    (n = o(
      n,
      `  #include <beginnormal_vertex>
`,
      `  #include <beginnormal_vertex>
` + fn,
    )),
    (n = o(
      n,
      `  #include <begin_vertex>
`,
      `  #include <begin_vertex>
  transformed += prD;
`,
    )),
    (n = o(
      n,
      "  vL = position;",
      `  vL = position + (abs(aMat - ${L.EYE}.0) < 0.5 ? prD : vec3(0.0));`,
    )),
    n
  );
}
function a1(e, o, n) {
  return (
    (e.onBeforeCompile = (c) => {
      ((c.uniforms.uFade = o.uFade),
        (c.uniforms.uFadeT = o.uFadeT),
        (c.vertexShader = c.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vPrRest;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
	vPrRest = position;`,
          )),
        (c.fragmentShader = c.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform float uFade;
uniform float uFadeT;
varying vec3 vPrRest;
` + Ot,
          )
          .replace(
            "#include <clipping_planes_fragment>",
            `#include <clipping_planes_fragment>
	if (prFaded(vPrRest, uFade, uFadeT)) discard;`,
          )));
    }),
    (e.customProgramCacheKey = () => n),
    e
  );
}
const un = new H0(0, -0.035, 0);
let At = null;
function pn() {
  if (At) return At;
  const e = [],
    o = [];
  for (let d = 0; d <= 10; d++) {
    const v = d / 10;
    o.push(
      new P1(
        0.032 + 0.034 * Math.pow(Math.sin(Math.PI * v), 0.8),
        -0.075 + v * 0.15,
      ),
    );
  }
  (e.push([new B1(o, 20), 1]),
    e.push([new mt(0.052, 0.062, 0.05, 18).translate(0, -0.1, 0), 0]),
    e.push([new mt(0.036, 0.052, 0.02, 18).translate(0, -0.07, 0), 0]),
    e.push([new mt(0.02, 0.062, 0.045, 18).translate(0, 0.098, 0), 0]),
    e.push([new mt(0.018, 0.02, 0.03, 12).translate(0, 0.134, 0), 0]));
  for (let d = 0; d < 4; d++) {
    const v = (d * Math.PI) / 2 + 0.4,
      C = [];
    for (let p = 0; p <= 8; p++) {
      const F = p / 8,
        J = 0.044 + 0.034 * Math.pow(Math.sin(Math.PI * F), 0.8);
      C.push(new H0(Math.cos(v) * J, -0.078 + F * 0.158, Math.sin(v) * J));
    }
    e.push([new Yt(new Gt(C), 12, 0.0028, 5, !1), 0]);
  }
  for (const d of [-0.02, 0.03])
    e.push([
      new W1(0.069, 0.0028, 5, 24).rotateX(Math.PI / 2).translate(0, d, 0),
      0,
    ]);
  const n = [];
  for (let d = 0; d <= 12; d++) {
    const v = (Math.PI * d) / 12;
    n.push(new H0(Math.cos(v) * 0.066, 0.1 + Math.sin(v) * 0.1, 0));
  }
  e.push([new Yt(new Gt(n), 16, 0.0025, 5, !1), 0]);
  let c = 0,
    t = 0;
  for (const [d] of e)
    ((c += d.attributes.position.count), (t += d.index.count));
  const s = new Float32Array(c * 3),
    i = new Float32Array(c * 3),
    r = new Float32Array(c),
    l = new Uint16Array(t);
  let a = 0,
    u = 0;
  for (const [d, v] of e) {
    (s.set(d.attributes.position.array, a * 3),
      i.set(d.attributes.normal.array, a * 3),
      r.fill(v, a, a + d.attributes.position.count));
    const C = d.index.array;
    for (let p = 0; p < C.length; p++) l[u + p] = C[p] + a;
    ((a += d.attributes.position.count), (u += C.length), d.dispose());
  }
  const f = new p1();
  return (
    f.setAttribute("position", new Ce(s, 3)),
    f.setAttribute("normal", new Ce(i, 3)),
    f.setAttribute("aPart", new Ce(r, 1)),
    f.setIndex(new Ce(l, 1)),
    f.computeBoundingSphere(),
    (At = f)
  );
}
const bn = `
#include <common>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
attribute float aPart;
varying vec3 vWp;
varying vec3 vNw;
varying vec3 vLp;
varying float vPart;
void main() {
  vLp = position;
  vPart = aPart;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWp = w.xyz;
  vNw = normalize(mat3(modelMatrix) * normal);
  vec4 mvPosition = viewMatrix * w;
  gl_Position = projectionMatrix * mvPosition;
  #include <logdepthbuf_vertex>
  #include <fog_vertex>
}
`,
  wn = `
#include <common>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
uniform vec3 uKeyDir;
uniform vec3 uKeyCol;
uniform vec3 uAmbRGB;
uniform vec3 uTorchPos;
uniform vec3 uTorchDir;
uniform vec3 uTorchCol;
uniform vec4 uTorchP;
uniform float uExposure;
uniform float uFade;
uniform float uFadeT;
uniform vec3 uFlame;
uniform vec3 uGlowCol;
uniform vec3 uLanOff;
varying vec3 vWp;
varying vec3 vNw;
varying vec3 vLp;
varying float vPart;
${Ot}
void main() {
  #include <logdepthbuf_fragment>
  // (it outlasts him a little: the lantern is the last of him to go)
  if (prFaded(vLp + uLanOff, min(1.0, uFade * 1.3 + 0.03), uFadeT)) discard;
  vec3 N = normalize(vNw);
  vec3 V = normalize(cameraPosition - vWp);
  vec3 col;
  if (vPart < 0.5) {
    // tin: dark, a dull sheen; the key and the shade side (his rig), the torch, and inside, its own flame
    vec3 alb = vec3(0.045, 0.04, 0.036);
    float ndl = dot(N, uKeyDir);
    col = alb * uKeyCol * clamp((ndl + 0.15) / 1.15, 0.0, 1.0) + alb * max(uAmbRGB, vec3(0.012, 0.014, 0.02));
    col += uKeyCol * 0.06 * pow(max(dot(N, normalize(uKeyDir + V)), 0.0), 24.0) * max(ndl, 0.0);
    if (uTorchCol.r + uTorchCol.g + uTorchCol.b > 1e-4) {
      vec3 Lt = uTorchPos - vWp;
      float dist = max(length(Lt), 1e-3);
      Lt /= dist;
      float cone = smoothstep(uTorchP.x, uTorchP.y, dot(-Lt, uTorchDir));
      vec3 Et = uTorchCol * cone / max(pow(dist, uTorchP.w), 0.01) / PI;
      Et /= 1.0 + dot(Et, vec3(0.2126, 0.7152, 0.0722)) / 2.2;
      col += alb * Et * max(dot(N, Lt), 0.0) + Et * 0.05 * pow(max(dot(N, normalize(Lt + V)), 0.0), 24.0);
    }
    vec3 Lf = uFlame - vWp;
    float d2 = dot(Lf, Lf);
    Lf *= inversesqrt(max(d2, 1e-6));
    col += (alb * 3.0 + vec3(0.015)) * uGlowCol * max(dot(N, Lf), 0.0) / (d2 * 400.0 + 0.6);
  } else {
    // the glass: amber, glowing; through it the flame's hot core, where the eye's ray passes the flame
    vec3 rd = -V;
    float tf = dot(uFlame - cameraPosition, rd);
    vec3 o = cameraPosition + rd * tf - uFlame;
    float r2 = (o.x * o.x + o.z * o.z) / (0.0062 * 0.0062) + (o.y - 0.004) * (o.y - 0.004) / (0.016 * 0.016);
    float core = exp(-r2 * 0.75), halo = exp(-r2 * 0.035);
    float ndv = abs(dot(N, V));
    vec3 g = uGlowCol * (0.05 + 0.12 * ndv * ndv + 0.55 * halo);
    g *= 1.0 - 0.6 * smoothstep(0.015, 0.072, vLp.y);
    col = g + uGlowCol * vec3(1.5, 1.15, 0.7) * core * 3.2;
    col += uKeyCol * 0.25 * pow(max(dot(N, normalize(uKeyDir + V)), 0.0), 90.0);
  }
  gl_FragColor = vec4(col * uExposure, 1.0);
  #include <fog_fragment>
}
`;
function gn(e, o) {
  const n = new l1({
    uniforms: {
      ...h1.clone(d1.fog),
      uKeyDir: e.uKeyDir,
      uKeyCol: e.uKeyCol,
      uAmbRGB: e.uAmbRGB,
      uExposure: e.uExposure,
      uTorchPos: e.uTorchPos,
      uTorchDir: e.uTorchDir,
      uTorchCol: e.uTorchCol,
      uTorchP: e.uTorchP,
      uFade: o.uFade,
      uFadeT: o.uFadeT,
      uFlame: o.uFlame,
      uGlowCol: o.uGlowCol,
      uLanOff: o.uLanOff,
    },
    vertexShader: bn,
    fragmentShader: wn,
    fog: !0,
  });
  return ((n.name = "priest_lantern"), n);
}
const xt = [1, 0.84, 0.62],
  vn = 0.14,
  Mn = new H0(0.2, 1.35, 0.45),
  Tt = [2.4, 1.2, 0.41],
  Ln = new H0(0.135 * 0.6428 - 0.03 * 0.766, -0.135 * 0.766 - 0.03 * 0.6428, 0),
  kn = new H0(0, 0, 1),
  Ct = new WeakMap();
function Rn(e, o) {
  let n = Ct.get(e);
  return n || typeof document > "u"
    ? n || null
    : ((n = new f1(yo(e))),
      (n.colorSpace = m1),
      (n.premultiplyAlpha = !0),
      (n.anisotropy = 8),
      (n.minFilter = u1),
      Ct.set(e, n),
      o &&
        o.addEventListener("dispose", () => {
          (n.dispose(), Ct.delete(e));
        }),
      n);
}
