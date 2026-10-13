// assets__park-CwBfNU5l 16 — math
// Lines 6687-6999 of readable/assets__park-CwBfNU5l.pretty.js (statement-aligned).
const co = {
  truck: { x: 427, z: 182.2, yaw: Math.PI + 0.08 },
  van: { x: 437.4, z: 170.8, yaw: -0.75 },
  taxi: { x: 444.4, z: 161.3, yaw: -2.33 },
};
function uo(e, a, t) {
  const r = [],
    o = [],
    n = {},
    i = (y, m, F) => {
      const C = co[y],
        L = Re(m, F);
      (L.group.position.set(C.x, 0, C.z),
        (L.group.rotation.y = C.yaw),
        L.group.updateMatrixWorld(!0),
        t.addGroup(L.group, i0(C.x, C.z)));
      const z = L.box || { min: [-0.9, 0, -2.3], max: [0.9, 1.5, 2.3] },
        W = Math.cos(C.yaw),
        D = Math.sin(C.yaw),
        V = (j, Y) => [C.x + j * W + Y * D, C.z - j * D + Y * W],
        A = z.min[2],
        K = z.max[2],
        J = z.min[0] + 0.04,
        q = z.max[0] - 0.04,
        st = Math.max(2, Math.ceil((K - A) / 1));
      for (let j = 0; j < st; j++) {
        const Y = A + ((K - A) * j) / st,
          x = A + ((K - A) * (j + 1)) / st,
          p = [V(J, Y), V(q, Y), V(J, x), V(q, x)],
          g = p.map((et) => et[0]),
          T = p.map((et) => et[1]),
          G = (Math.min(...g) + Math.max(...g)) / 2,
          Z = (Math.min(...T) + Math.max(...T)) / 2,
          tt = ((Math.max(...g) - Math.min(...g)) / 2) * 0.86,
          it = ((Math.max(...T) - Math.min(...T)) / 2) * 0.86;
        r.push({
          x0: G - tt,
          x1: G + tt,
          z0: Z - it,
          z1: Z + it,
          y0: 0,
          y1: z.max[1],
          cover: y,
        });
      }
      return (
        L.update && o.push(L.update),
        (n[y] = { ...C, box: z, local: V }),
        n[y]
      );
    },
    f = i("truck", "armytruck", {
      burnt: !1,
      seed: 31,
      doors: { rr: 1.3, fl: 0.7 },
    }),
    w = i("van", "van", {
      burnt: !1,
      color: "#dcdcd4",
      seed: 33,
      doors: { fl: 1, rl: 0.9 },
    }),
    s = i("taxi", "taxi", {
      burnt: !1,
      seed: 35,
      doors: { fr: 0.9 },
      hazards: !0,
    }),
    l = f.local,
    u = w.local,
    c = s.local,
    M = (y, m) => +Math.atan2(m[0] - y[0], m[1] - y[1]).toFixed(3),
    h = (y) => [+y[0].toFixed(2), +y[1].toFixed(2)],
    v = l(0, -2.75),
    S = l(0.15, -5.4),
    d = [
      {
        id: "truckbed",
        at: 191.6,
        spots: [],
        n: 0,
        call: "p3a_p_truck",
        leap: {
          sill: [+v[0].toFixed(2), 1.3, +v[1].toFixed(2)],
          land: h(S),
          out: h(l(0, -1.2)),
          face: M(v, S),
        },
      },
      {
        id: "truck",
        at: 187.4,
        spots: [
          h(l(2.4, 1)),
          h(l(2.2, 2.4)),
          h(l(2.6, 3.6)),
          h(l(2.3, -1.2)),
          h(l(2.5, -2.8)),
        ],
        leap: null,
        call: null,
        n: 2,
      },
      {
        id: "van",
        at: 177.6,
        spots: [
          h(u(1.2, -2)),
          h(u(0, -3.2)),
          h(u(1.8, -0.6)),
          h(u(-1, -3.4)),
          h(u(0.8, -4)),
          h(u(2.4, -1.8)),
        ],
        leap: null,
        call: "a3_c_right2",
        n: 2,
      },
      {
        id: "taxi",
        at: 167.6,
        spots: [
          h(c(-1.9, 1.2)),
          h(c(-2.2, -0.8)),
          h(c(-1.9, -2.4)),
          h(c(-2.6, 0.4)),
        ],
        leap: null,
        call: "a3_c_ahead3",
        n: 3,
      },
    ];
  return {
    colliders: r,
    ambush: d,
    vehicles: n,
    update(y, m) {
      for (const F of o) F(y, m);
    },
  };
}
const Ze = 96;
function fo(e = 256) {
  const a = new Float32Array(Ze).fill(1),
    t = new Fe(),
    r = new _t(1, 1);
  (t.setIndex(r.index),
    t.setAttribute("position", r.attributes.position),
    t.setAttribute("uv", r.attributes.uv));
  const o = new Float32Array(e * 3),
    n = new Float32Array(e * 3),
    i = new Float32Array(e * 3);
  (t.setAttribute("aPos", new Y0(o, 3)),
    t.setAttribute("aCol", new Y0(n, 3)),
    t.setAttribute("aSz", new Y0(i, 3)),
    (t.instanceCount = 0));
  const f = new oe({
      uniforms: { uK: { value: a }, uT: x0.uPT },
      vertexShader: `
attribute vec3 aPos;
attribute vec3 aCol;
attribute vec3 aSz;          // size (m), channel, near fade (m: 0 = the default)
uniform float uK[${Ze}];
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float k = uK[int(aSz.y + 0.5)];
  vec4 mv = viewMatrix * vec4(aPos, 1.0);
  float d = -mv.z;
  // (pulled toward the eye so the lamp's own frame does not cut it; shrunk when the eye is at it)
  mv.xyz += normalize(-mv.xyz) * min(aSz.x * 0.45, d * 0.5);
  float s = aSz.x * (aSz.z > 0.0 ? 1.0 : smoothstep(0.4, 3.0, d)) * step(0.001, k);
  k *= aSz.z > 0.0 ? smoothstep(aSz.z * 0.55, aSz.z, d) : 1.0;
  mv.xy += (uv - 0.5) * s;
  gl_Position = projectionMatrix * mv;
  vUv = uv; vCol = aCol * k;
}`,
      fragmentShader: `
varying vec2 vUv;
varying vec3 vCol;
void main() {
  float r = length(vUv - 0.5) * 2.0;
  float a = exp(-r * r * 9.0) * 0.6 + exp(-r * 16.0) * 0.55;
  a *= 1.0 - smoothstep(0.6, 1.0, r);
  gl_FragColor = vec4(vCol * a, 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: me,
      fog: !1,
      toneMapped: !1,
    }),
    w = new jt(t, f);
  ((w.name = "park_glows"), (w.frustumCulled = !1), (w.renderOrder = 40));
  let s = 0;
  return {
    mesh: w,
    K: a,
    mat: f,
    add(l, u, c, M, h = 0) {
      return s >= e
        ? -1
        : (o.set(l, s * 3),
          n.set([u.r, u.g, u.b], s * 3),
          i.set([c, M, h], s * 3),
          s++,
          (t.instanceCount = s),
          (t.attributes.aPos.needsUpdate =
            t.attributes.aCol.needsUpdate =
            t.attributes.aSz.needsUpdate =
              !0),
          s - 1);
    },
    get count() {
      return s;
    },
  };
}
function ho(e, a, t, r, o = {}) {
  const n = new a0().subVectors(a, e),
    i = o.length ?? n.length() * 1.05;
  n.normalize();
  const f = Math.tan(t) * i,
    w = new It(f, o.r0 ?? 0.25, i, 40, 12, !0).translate(0, -i / 2, 0);
  w.applyQuaternion(new C0().setFromUnitVectors(new a0(0, -1, 0), n)).translate(
    e.x,
    e.y,
    e.z,
  );
  const s = {
      uK: { value: o.k ?? 1 },
      uCol: { value: r.clone() },
      uApex: { value: e.clone() },
      uDir: { value: n.clone() },
      uLen: { value: i },
      uT: x0.uPT,
      uGround: { value: o.ground ?? 0 },
    },
    l = new oe({
      uniforms: s,
      vertexShader: `
varying vec3 vW;
varying vec3 vN;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,
      fragmentShader: `
uniform float uK, uLen, uT, uGround;
uniform vec3 uCol, uApex, uDir;
varying vec3 vW;
varying vec3 vN;
float bh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float bn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(bh(i), bh(i + vec2(1.0, 0.0)), f.x), mix(bh(i + vec2(0.0, 1.0)), bh(i + vec2(1.0, 1.0)), f.x), f.y); }
void main() {
  vec3 V = normalize(cameraPosition - vW);
  // (the air the eye's line crosses inside the cone: the chord through it is longest through its middle, ~ |V.N| on the
  // wall that faces the eye; nothing at the cone's outline - a soft edge)
  float edge = abs(dot(V, normalize(vN)));
  float t = clamp(dot(vW - uApex, uDir) / uLen, 0.0, 1.0);
  float a = pow(edge, 1.3);
  // (seen along its axis - from in front of the lamp - a beam is a glare, not a cone: the halo does that; from the side it stands in the air)
  float along = abs(dot(normalize(vW - cameraPosition), uDir));
  a *= 1.0 - smoothstep(0.55, 0.92, along);
  a *= (1.0 - smoothstep(0.45, 1.0, t)) * smoothstep(0.0, 0.06, t) * (1.0 / (0.3 + t * 2.6));
  // shafts: streaks round the axis (the lamps' facets, the dust), and the mist drifting through, thicker low down
  vec3 rel = vW - uApex, ax = rel - uDir * dot(rel, uDir);
  vec3 b1 = normalize(cross(uDir, abs(uDir.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0))), b2 = cross(uDir, b1);
  float ang = atan(dot(ax, b2), dot(ax, b1));
  float streak = bn(vec2(ang * 7.0, t * 1.5 - uT * 0.04)) * 0.65 + bn(vec2(ang * 19.0 + 3.0, t * 4.0)) * 0.35;
  float m = bn(vW.xz * 0.35 + vec2(uT * 0.05, uT * 0.03) + vW.y * 0.2) * 0.6 + bn(vW.xz * 1.1 - uT * 0.08) * 0.4;
  a *= (0.35 + 0.9 * smoothstep(0.25, 0.8, streak)) * (0.45 + 0.8 * m);
  a *= 0.6 + 0.4 * smoothstep(8.0, 0.0, vW.y - uGround);
  // (soft where it meets the ground)
  a *= smoothstep(0.0, 1.2, vW.y - uGround);
  // (and faint when the eye is inside it)
  float de = length(cameraPosition - vW); a *= smoothstep(1.0, 6.0, de);
  gl_FragColor = vec4(uCol * a * uK, 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: me,
      side: $e,
      fog: !1,
      toneMapped: !1,
    }),
    u = new jt(w, l);
  return (
    (u.name = "park_beam"),
    (u.renderOrder = 38),
    (u.castShadow = !1),
    (u.receiveShadow = !1),
    (u.userData.U = s),
    u
  );
}
const po =
    "attribute float aSeed; varying vec2 vUv; varying float vSeed; void main() { vUv = uv; vSeed = aSeed; vec4 mv = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); vec2 sc = vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz)); mv.xy += (uv - vec2(0.5, 0.0)) * sc; gl_Position = projectionMatrix * mv; }",
  mo = `
varying vec2 vUv; varying float vSeed; uniform float uT, uK;
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
void main() {
  vec2 p = vUv; float t = uT * 1.6 + vSeed * 10.0;
  float turb = n(vec2(p.x * 4.0, p.y * 3.0 - t * 1.8)) * 0.6 + n(vec2(p.x * 9.0, p.y * 7.0 - t * 3.2)) * 0.4;
  float w = (1.0 - p.y) * 0.46 * (0.7 + 0.5 * turb);
  float d = abs(p.x - 0.5 + (turb - 0.5) * 0.18 * p.y) / max(w, 1e-3);
  float core = smoothstep(1.0, 0.2, d) * smoothstep(1.0, 0.55, p.y + turb * 0.25);
  if (core <= 0.001) discard;
  vec3 c = mix(vec3(1.6, 0.35, 0.05), vec3(4.0, 2.4, 0.9), smoothstep(0.3, 0.95, core) * (1.0 - p.y));
  gl_FragColor = vec4(c * core * uK, core);
}`;
