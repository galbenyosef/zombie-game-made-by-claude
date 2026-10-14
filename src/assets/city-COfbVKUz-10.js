// assets/city-COfbVKUz 10 — flat
// Lines 2840-3145 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
function Ke(m, e, d) {
  const n = new T0();
  n.name = "city3_ground";
  const h = r0({ vertexShader: Le, fragmentShader: Ie, uniforms: { ...e } });
  h.name = "city3_ground";
  const { ns: c, ew: w } = d.streets,
    s = new Map(),
    x = (a, r) => {
      const y = Math.floor(a / 480) + "," + Math.floor(r / 480);
      return s.get(y) || s.set(y, new Lt()).get(y);
    },
    k = 0.15,
    P = (a) =>
      w
        .filter(
          (r) =>
            a.x >= r.x0 - a.hw &&
            a.x <= r.x1 + a.hw &&
            r.z >= a.z0 - r.hw &&
            r.z <= a.z1 + r.hw,
        )
        .sort((r, y) => r.z - y.z),
    _ = new Set();
  for (const a of c) {
    const r = P(a),
      y = a.hw > 15 ? 5.5 : V0;
    let b = a.z0;
    const p = [];
    for (const i of r) {
      const t = i.z - i.hw,
        u = i.z + i.hw;
      (t > b + 0.5 && p.push([b, t]), (b = Math.max(b, u)));
    }
    a.z1 > b + 0.5 && p.push([b, a.z1]);
    for (const [i, t] of p)
      for (let u = i; u < t - 0.01; u += 120) {
        const o = Math.min(t, u + 120),
          l = x(a.x, (u + o) / 2);
        (l.flat(a.x - a.hw + y, u, a.x + a.hw - y, o, 0, (f, z) => [
          J.road,
          f - a.x,
          z,
          a.hw,
        ]),
          l.flat(a.x - a.hw, u, a.x - a.hw + y, o, k, (f, z) => [
            J.walk,
            f - (a.x - a.hw),
            z,
            y,
          ]),
          l.flat(a.x + a.hw - y, u, a.x + a.hw, o, k, (f, z) => [
            J.walk,
            a.x + a.hw - f,
            z,
            y,
          ]),
          l.wallZ(u, o, a.x - a.hw + y, 0, k, 1, (f, z) => [J.curb, f, z, 0]),
          l.wallZ(u, o, a.x + a.hw - y, 0, k, -1, (f, z) => [J.curb, f, z, 0]));
      }
    for (const i of r) {
      const t = a.x + "," + i.z;
      if (_.has(t)) continue;
      _.add(t);
      const u = x(a.x, i.z),
        o = a.hw * 1e3 + i.hw,
        l = a.x > h0.x0 && a.x < h0.x1,
        f = i.hw > 15 ? 5.5 : V0,
        z = l && a.z0 > i.z - i.hw - 0.5,
        A = l && a.z1 < i.z + i.hw + 0.5;
      let F = i.z - i.hw,
        E = i.z + i.hw;
      if (z) {
        const L = F;
        (u.flat(a.x - a.hw, L, a.x + a.hw, L + f, k, (q, R) => [
          J.walk,
          R - L,
          q,
          f,
        ]),
          u.wallX(a.x - a.hw, a.x + a.hw, L + f, 0, k, 1, (q, R) => [
            J.curb,
            q,
            R,
            0,
          ]),
          (F += f));
      }
      if (A) {
        const L = E;
        (u.flat(a.x - a.hw, L - f, a.x + a.hw, L, k, (q, R) => [
          J.walk,
          L - R,
          q,
          f,
        ]),
          u.wallX(a.x - a.hw, a.x + a.hw, L - f, 0, k, -1, (q, R) => [
            J.curb,
            q,
            R,
            0,
          ]),
          (E -= f));
      }
      const K = J.cross + (z ? 0.2 : A ? 0.4 : 0);
      u.flat(a.x - a.hw, F, a.x + a.hw, E, 0, (L, q) => [
        K,
        L - a.x,
        q - i.z,
        o,
      ]);
    }
  }
  for (const a of w) {
    const r = c
        .filter(
          (i) =>
            i.x >= a.x0 - i.hw &&
            i.x <= a.x1 + i.hw &&
            a.z >= i.z0 - a.hw &&
            a.z <= i.z1 + a.hw,
        )
        .sort((i, t) => i.x - t.x),
      y = a.kind === "quay" ? 4 : a.hw > 15 ? 5.5 : V0;
    let b = a.x0;
    const p = [];
    for (const i of r) {
      const t = i.x - i.hw,
        u = i.x + i.hw;
      (t > b + 0.5 && p.push([b, t]), (b = Math.max(b, u)));
    }
    a.x1 > b + 0.5 && p.push([b, a.x1]);
    for (const [i, t] of p)
      for (let u = i; u < t - 0.01; u += 120) {
        const o = Math.min(t, u + 120),
          l = x((u + o) / 2, a.z);
        (l.flat(u, a.z - a.hw + y, o, a.z + a.hw - y, 0, (f, z) => [
          J.road,
          z - a.z,
          f,
          a.hw,
        ]),
          l.flat(u, a.z - a.hw, o, a.z - a.hw + y, k, (f, z) => [
            a.kind === "quay" && a.z < -480 && a.z > -500 ? J.cobble : J.walk,
            z - (a.z - a.hw),
            f,
            y,
          ]),
          l.flat(u, a.z + a.hw - y, o, a.z + a.hw, k, (f, z) => [
            J.walk,
            a.z + a.hw - z,
            f,
            y,
          ]),
          l.wallX(u, o, a.z - a.hw + y, 0, k, 1, (f, z) => [J.curb, f, z, 0]),
          l.wallX(u, o, a.z + a.hw - y, 0, k, -1, (f, z) => [J.curb, f, z, 0]));
      }
  }
  for (const a of d.blocks) {
    const r = x((a.x0 + a.x1) / 2, (a.z0 + a.z1) / 2),
      y = a.ground === "dirt" ? J.dirt : a.superName ? J.plaza : J.block;
    r.flat(a.x0, a.z0, a.x1, a.z1, k, (b, p) => [y, b, p, 0]);
  }
  for (const a of d.roofs.filter((r) => r.type === "lot"))
    x(a.x, a.z).flat(
      a.x - a.w / 2 + 0.5,
      a.z - a.d / 2 + 0.5,
      a.x + a.w / 2 - 0.5,
      a.z + a.d / 2 - 0.5,
      k + 0.01,
      (y, b) => [J.dirt, y, b, 0],
    );
  const g = $;
  for (let a = Q.x0; a < Q.x1; a += 120) {
    const r = Math.min(Q.x1, a + 120),
      y = x(a + 60, -555);
    (y.wallX(a, r, g.z1, g.bed, g.top, -1, (b, p) => [J.quay, b, p, 0]),
      y.wallX(a, r, g.z0, g.bed, g.top, 1, (b, p) => [J.quay, b, p, 0]));
  }
  const M = Ot.map((a) => [a.x - a.w / 2 - 0.5, a.x + a.w / 2 + 0.5]);
  for (const [a, r] of [
    [g.z1, 1],
    [g.z0, -1],
  ]) {
    let y = [[Q.x0, Q.x1]];
    for (const [b, p] of M)
      y = y.flatMap(([i, t]) =>
        p <= i || b >= t
          ? [[i, t]]
          : [
              [i, b],
              [p, t],
            ].filter(([u, o]) => o - u > 1),
      );
    for (const [b, p] of y)
      for (let i = b; i < p - 0.01; i += 120) {
        const t = Math.min(p, i + 120),
          u = x(i + 60, a),
          o = a + r * 0.45;
        (u.flat(i, Math.min(a, o), t, Math.max(a, o), g.parapet, (l, f) => [
          J.quay,
          l,
          f,
          0,
        ]),
          u.wallX(i, t, a, k, g.parapet, -r, (l, f) => [J.quay, l, f, 0]),
          u.wallX(i, t, o, k, g.parapet, r, (l, f) => [J.quay, l, f, 0]));
      }
  }
  const N = [];
  for (const [a, r] of s) {
    const y = new s0(r.build(), h);
    ((y.name = "city3_ground_" + a), n.add(y), N.push(y));
  }
  {
    const a = new Lt(Ut),
      r = 9e3;
    a.flat(-r, -r, r, g.z0, -0.08, (b, p) => [J.far, b, p, 0]);
    for (const b of gt([-r, g.z1, r, r], d0))
      a.flat(b[0], b[1], b[2], b[3], -0.08, (p, i) => [J.far, p, i, 0]);
    a.flat(d0.x0, d0.z0, d0.x1, d0.z1, -0.08, (b, p) => [J.wood, b, p, 0]);
    const y = new s0(a.build(), h);
    ((y.name = "city3_plain"), (y.renderOrder = -5), n.add(y), N.push(y));
  }
  const T = r0({
    vertexShader: Ee,
    fragmentShader: qe,
    uniforms: { ...e, uWaterY: { value: g.water } },
  });
  T.name = "city3_water";
  const S = new et(Q.x1 - Q.x0 + 2e3, g.z1 - g.z0, 1, 1)
      .rotateX(-Math.PI / 2)
      .translate((Q.x0 + Q.x1) / 2, g.water, (g.z0 + g.z1) / 2),
    v = new s0(S, T);
  return (
    (v.name = "city3_river"),
    n.add(v),
    N.push(v),
    { group: n, water: v, meshes: N, mat: h, wmat: T }
  );
}
const Ve = `
attribute vec4 aCol;      // rgb, size (px at 720p)
attribute vec4 aMode;     // kind (0 steady, 1 warning blink, 2 flicker, 3 police, 4 failing), phase, rate, extra
varying vec3 vCol;
uniform float uPx;
${u0}
${g0}
uniform float uHazeK;
float hazeV(vec3 P, float dist) { float low = 1.0 - smoothstep(0.0, 60.0, P.y); return 1.0 - exp(-dist * uHazeK * (1.0 + 0.9 * low)); }
void main() {
  vec3 P = position;
  float kind = aMode.x, ph = aMode.y, rate = aMode.z;
  float k = 1.0;
  if (kind > 0.5 && kind < 1.5) { float c = fract(uTime * rate + ph); k = smoothstep(0.0, 0.06, c) * (1.0 - smoothstep(0.42, 0.5, c)); }
  else if (kind > 1.5 && kind < 2.5) k = 0.65 + 0.35 * c3n(vec2(uTime * rate, ph * 17.0));
  else if (kind > 2.5 && kind < 3.5) { float c = fract(uTime * rate + ph + aMode.w * 0.5); k = step(c, 0.25) * (0.6 + 0.4 * step(fract(uTime * rate * 4.0), 0.5)); }
  else if (kind > 3.5) k = 0.15 + 0.85 * step(0.32, c3n(vec2(uTime * rate, ph * 9.0)));
  vec3 D = P - cameraPosition;
  float dist = length(D);
  vec3 Pp = P - D / max(dist, 1e-3) * min(2.5, dist * 0.02);         // (pulled toward the eye: never inside its wall)
  gl_Position = projectionMatrix * viewMatrix * vec4(Pp, 1.0);
  vCol = aCol.rgb * k * (1.0 - 0.9 * hazeV(P, dist));
  // a lamp head reads its real size up close: 0.5 m across
  float px = 0.5 / max(dist, 0.5) * projectionMatrix[1][1] * 360.0 * uPx;
  gl_PointSize = clamp(max(aCol.a * uPx, px), 1.0, 48.0) * 2.5;
  if (k < 0.002) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  je = `
varying vec3 vCol;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q) * 2.5;
  float a = exp(-r * r * 2.2) + exp(-r * 1.6) * 0.16;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Ge(m, e, d) {
  const n = e.length,
    h = new Float32Array(n * 3),
    c = new Float32Array(n * 4),
    w = new Float32Array(n * 4);
  e.forEach((P, _) => {
    (h.set(P.p, _ * 3),
      c.set([P.c[0], P.c[1], P.c[2], P.s], _ * 4),
      w.set(P.m || [0, 0, 0, 0], _ * 4));
  });
  const s = new v0();
  (s.setAttribute("position", new q0(h, 3)),
    s.setAttribute("aCol", new q0(c, 4)),
    s.setAttribute("aMode", new q0(w, 4)),
    s.computeBoundingSphere());
  const x = r0({
      vertexShader: Ve,
      fragmentShader: je,
      uniforms: { ...m },
      transparent: !0,
      depthWrite: !1,
      blending: rt,
    }),
    k = new _t(s, x);
  return ((k.name = d), (k.frustumCulled = !1), (k.renderOrder = 5), k);
}
