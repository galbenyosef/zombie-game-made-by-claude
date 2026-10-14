import { m as K } from "./labkit-ElMHH8EU.js";
import { b as N, L as G } from "./park-CwBfNU5l.js";
import { l as q, a as O, b as E } from "./looks-DR2oSjqf.js";
import { C as P, d as p } from "./plan3-BlRgM2iV.js";
import {
  i as F,
  am as L,
  c as T,
  $ as S,
  y as R,
  ah as M,
  B as j,
  h as _,
  M as z,
  G as V,
  a1 as U,
  b as I,
  p as X,
  C as H,
} from "./index-DaQlAVPp.js";
import "./common-BYwPbecq.js";
import "./BufferGeometryUtils-Qxvmd-vM.js";
import "./RoundedBoxGeometry-D0zz8qHa.js";
import "./district-BhfbivMT.js";
import "./kit-CFeM0oZ2.js";
const Y =
    "varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",
  $ = `
varying vec3 vD;
uniform float uT;
float sh(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 d = normalize(vD);
  float h = d.y, east = max(d.x, 0.0), az = atan(d.z, d.x);
  vec3 zen = vec3(0.0042, 0.0103, 0.027);
  vec3 hor = mix(vec3(0.03, 0.036, 0.05), vec3(0.11, 0.13, 0.17), pow(east, 1.6));
  vec3 c = mix(hor, zen, pow(clamp(h, 0.0, 1.0), 0.42));
  c += vec3(0.32, 0.16, 0.07) * exp(-max(h, 0.0) * 28.0) * pow(east, 3.0) * 0.55;
  float fire = (1.0 - pow(east, 1.5)) * exp(-max(h, 0.0) * 10.0) * (0.55 + 0.45 * sin(az * 5.0 + 1.0) * sin(az * 11.0 + 2.0));
  c += vec3(0.34, 0.1, 0.025) * fire * 0.55;
  vec2 sp = vec2(az * 60.0, h * 60.0); vec2 si = floor(sp);
  float st = step(0.996, sh(si)) * smoothstep(0.2, 0.0, length(fract(sp) - 0.5)) * smoothstep(0.05, 0.4, h) * (1.0 - east * 0.8);
  c += vec3(0.6, 0.65, 0.8) * st * (0.6 + 0.4 * sin(uT * 3.0 + si.x));
  c = h < 0.0 ? mix(hor * 0.6, vec3(0.006, 0.006, 0.008), clamp(-h * 6.0, 0.0, 1.0)) : c;
  gl_FragColor = vec4(c, 1.0);
}`;
function J(i, o) {
  const f = new F({
      vertexShader: Y,
      fragmentShader: $,
      uniforms: { uT: { value: 0 } },
      side: L,
      depthWrite: !1,
      depthTest: !0,
      fog: !1,
    }),
    t = new T(new S(1e3, 48, 24), f);
  ((t.name = "lab_sky"),
    (t.frustumCulled = !1),
    (t.renderOrder = -1e3),
    o.group.add(t));
  const u = new R(),
    s = f.clone();
  return (
    (s.vertexShader =
      "varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }"),
    u.add(new T(new S(100, 32, 16), s)),
    o.rig.makeEnv("sky", u, 0.04),
    { dome: t, mat: f }
  );
}
function Q(i) {
  let o = 77;
  const f = () => (o = (o * 16807) % 2147483647) / 2147483647,
    t = [],
    u = (a, e, l, d, m, h, D) => {
      let k = m ? a : l;
      const A = m ? e : d;
      for (; k < A;) {
        const W = 10 + f() * 14,
          B = h + f() * (D - h);
        (t.push(
          m
            ? [k, Math.min(A, k + W), l, d, B]
            : [a, e, k, Math.min(A, k + W), B],
        ),
          (k += W + 0.5));
      }
    };
  (u(p.x0 - 40, p.x1 + 40, p.z0 - 40, p.z0 - 18, !0, 14, 40),
    u(p.x0 - 40, p.x1 + 40, p.z1 + 18, p.z1 + 40, !0, 14, 36),
    u(p.x0 - 40, p.x0 - 18, p.z0 - 18, p.z1 + 18, !1, 14, 38),
    u(p.x1 + 18, p.x1 + 40, p.z0 - 18, p.z1 + 18, !1, 14, 42));
  for (let a = 0; a < 14; a++) {
    const e = f() * Math.PI * 2,
      l = 220 + f() * 260,
      d = 440 + Math.cos(e) * l,
      m = 117 + Math.sin(e) * l,
      h = 20 + f() * 25;
    t.push([d - h / 2, d + h / 2, m - h / 2, m + h / 2, 60 + f() * 120]);
  }
  const s = [];
  for (const [a, e, l, d, m] of t)
    s.push(new M(e - a, m, d - l).translate((a + e) / 2, m / 2, (l + d) / 2));
  const r = new j();
  let w = 0,
    n = 0;
  for (const a of s) ((w += a.attributes.position.count), (n += a.index.count));
  const c = new Float32Array(w * 3),
    g = new Float32Array(w * 3),
    b = new Uint32Array(n);
  let y = 0,
    v = 0;
  for (const a of s) {
    (c.set(a.attributes.position.array, y * 3),
      g.set(a.attributes.normal.array, y * 3));
    for (let e = 0; e < a.index.count; e++) b[v + e] = a.index.array[e] + y;
    ((y += a.attributes.position.count), (v += a.index.count));
  }
  (r.setAttribute("position", new _(c, 3)),
    r.setAttribute("normal", new _(g, 3)),
    r.setIndex(new _(b, 1)));
  const C = new z({ color: 790034, roughness: 0.9 });
  C.onBeforeCompile = (a) => {
    ((a.vertexShader = a.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
varying vec3 vCW; varying vec3 vCN;`,
      )
      .replace(
        "#include <worldpos_vertex>",
        `#include <worldpos_vertex>
vCW = (modelMatrix * vec4(transformed, 1.0)).xyz; vCN = normal;`,
      )),
      (a.fragmentShader = a.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec3 vCW; varying vec3 vCN;
float ch(vec2 p){ return fract(sin(dot(p, vec2(12.99, 78.23))) * 43758.55); }`,
        )
        .replace(
          "#include <emissivemap_fragment>",
          `#include <emissivemap_fragment>
      {
        vec2 q = abs(vCN.x) > 0.5 ? vec2(vCW.z, vCW.y) : vec2(vCW.x, vCW.y);
        vec2 cell = floor(q / vec2(2.6, 3.4)), f = fract(q / vec2(2.6, 3.4));
        float win = step(0.18, f.x) * step(f.x, 0.82) * step(0.25, f.y) * step(f.y, 0.8) * step(0.5, abs(vCN.y) < 0.5 ? 1.0 : 0.0);
        float lit = step(0.93, ch(cell + floor(vCW.xz / 50.0)));
        float burn = step(0.985, ch(cell * 0.37 + 3.0)) + step(0.9, ch(vec2(floor(vCW.y / 3.4), floor(vCW.x / 40.0 + vCW.z / 40.0)))) * step(40.0, vCW.y) * 0.6;
        totalEmissiveRadiance += win * (lit * vec3(0.6, 0.42, 0.22) * 0.5 + burn * vec3(2.4, 0.7, 0.15));
      }`,
        )));
  };
  const x = new T(r, C);
  return (
    (x.name = "lab_city"),
    (x.castShadow = !1),
    (x.receiveShadow = !0),
    x
  );
}
function Z() {
  const i = new V();
  i.name = "lab_heli";
  const o = new z({ color: 14211284, roughness: 0.4, metalness: 0.2 }),
    f = new z({ color: 10099222, roughness: 0.45 }),
    t = new z({ color: 1382170, roughness: 0.3, metalness: 0.4 }),
    u = new z({ color: 659480, roughness: 0.05, metalness: 0.6 }),
    s = (n, c, g = 0, b = 0, y = 0) => {
      const v = new T(n, c);
      return (
        v.position.set(g, b, y),
        (v.castShadow = !0),
        (v.receiveShadow = !0),
        i.add(v),
        v
      );
    };
  (s(
    new U(0.95, 3.2, 8, 20).rotateX(Math.PI / 2).scale(0.92, 1, 1),
    o,
    0,
    1.55,
    0.6,
  ),
    s(
      new U(0.97, 0.7, 6, 20).rotateX(Math.PI / 2).scale(0.93, 0.35, 1),
      f,
      0,
      1.15,
      0.4,
    ),
    s(
      new S(0.9, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2)
        .rotateX(Math.PI / 2 - 0.3)
        .scale(0.9, 0.85, 0.9),
      u,
      0,
      1.75,
      2.35,
    ),
    s(new I(0.22, 0.38, 5.4, 12).rotateX(Math.PI / 2), o, 0, 2, -3.6),
    s(new M(0.12, 1.4, 0.9), o, 0, 2.6, -6.2),
    s(new M(1.8, 0.06, 0.4), o, 0, 1.95, -5.6),
    s(new M(1, 0.45, 2.4), o, 0, 2.6, -0.2));
  for (let n = 0; n < 4; n++) {
    const c = s(new M(0.28, 0.04, 5.4).translate(0, 0, 2.7), t, 0, 3, -0.1);
    ((c.rotation.y = (n * Math.PI) / 2 + 0.4), (c.rotation.x = -0.035));
  }
  for (let n = 0; n < 2; n++) {
    const c = s(new M(0.08, 1.4, 0.16), t, 0.2, 2.6, -6.4);
    c.rotation.x = (n * Math.PI) / 2;
  }
  for (const n of [-1, 1]) {
    s(new I(0.05, 0.05, 3.6, 8).rotateX(Math.PI / 2), t, n * 1.05, 0.05, 0.6);
    for (const c of [-0.4, 1.6]) {
      const g = s(new I(0.04, 0.04, 0.85, 6), t, n * 0.85, 0.45, c);
      g.rotation.z = n * 0.4;
    }
  }
  const r = new X({ color: new H(6, 0.3, 0.2), toneMapped: !1 }),
    w = s(new S(0.07, 10, 8), r, 0, 2.95, -1.4);
  return (
    s(new S(0.07, 10, 8), r, 0, 0.62, 0.4),
    i.position.set(P.pos[0], P.pos[1], P.pos[2]),
    (i.rotation.y = P.yaw),
    {
      group: i,
      update(n) {
        const c = n % 1.1 < 0.12;
        (r.color.setRGB(c ? 9 : 0.05, c ? 0.4 : 0, c ? 0.25 : 0),
          (w.visible = !0));
      },
    }
  );
}
async function pe(i) {
  const o = (e, l = {}) => ({ cam: e, fov: 70, ...l }),
    f = {
      exit: o([430, 1.62, 195.6, -7, 1.5]),
      exitT: o([430, 1.62, 195.6, -7, 1.5], { torch: !0 }),
      r25: o([432.4, 1.62, 170.4, -12, 1]),
      fountain: o([438.6, 1.62, 156.6, -16, 1]),
      r75: o([443.6, 1.62, 127.6, -8, 2]),
      camp: o([447.4, 1.62, 113.5, -6, 2]),
      pad: o([448.8, 1.62, 100.5, -18, -2]),
      door: o([450.8, 1.62, 93.7, 180, 0]),
      lift: o([452, 30, 106, 0, -52]),
      over: o([440, 70, 236, 0, -24], { fov: 60 }),
      west: o([402, 1.62, 160, -40, 2]),
      play: o([421, 1.62, 186, 50, 0]),
      band: o([414, 1.62, 152, 70, 3]),
      benchT: o([432, 1.62, 177.2, 75, -18], { torch: !0, fov: 60 }),
      fountainT: o([440.2, 1.62, 154.4, 50, -10], { torch: !0, fov: 60 }),
      bandT: o([401.6, 1.62, 153.4, 0, 8], { torch: !0, fov: 60 }),
      statueT: o([416, 1.62, 129, 40, 12], { torch: !0, fov: 60 }),
      playT: o([419.6, 1.62, 175, 80, -4], { torch: !0, fov: 60 }),
      tentT: o([437.6, 1.62, 110.6, 75, -4], { torch: !0, fov: 60 }),
      medT: o([459.6, 1.62, 110, -75, 0], { torch: !0, fov: 60 }),
      gateT: o([446.6, 1.62, 131.6, 0, -2], { torch: !0, fov: 60 }),
      bodyT: o([426.6, 1.62, 168.6, 42, -32], { torch: !0, fov: 60 }),
      carT: o([443.6, 1.62, 178.6, -60, -6], { torch: !1, fov: 60 }),
      ambT: o([440.6, 1.62, 97.6, 60, -2], { torch: !1, fov: 60 }),
      lampT: o([433, 1.62, 183.6, -35, 22], { torch: !1, fov: 60 }),
    },
    t = K(i, { name: "park", look: G, torch: !1, views: f }),
    u = J(i, t);
  t.group.add(Q());
  const s = Z();
  t.group.add(s.group);
  const r = await N(i, { rng: i.rng(5305) });
  t.group.add(r.group);
  const w = Object.fromEntries(
      Object.entries(r.looks).map(([e, l]) => [e, q(l)]),
    ),
    n = O(q(G), w.park),
    c = () => {
      const e = i.game.camera.position;
      return w[r.zoneAt(e.x, e.z, e.y - 1.6) || "park"] || w.park;
    },
    g = [
      ...t.anim,
      ...r.anim,
      (e, l) => {
        (u.dome.position.copy(i.game.camera.position),
          (u.mat.uniforms.uT.value = l),
          s.update(l),
          E(n, c(), e > 0 ? 1 - Math.exp(-e * 2.2) : 1),
          t.rig.apply(n, !0),
          v());
      },
    ],
    b = i.game.flags,
    y = r.props.air,
    v = () => {
      const e = i.game.flags || b;
      (e.has("day") &&
        ((t.rig.key.intensity = 9),
        (t.rig.hemi.intensity = 5),
        (i.scene.fog.density = 0),
        (i.game.post.exposure = 1.4)),
        e.has("nofog") && (i.scene.fog.density = 0),
        y &&
          (y.uPMist.value.w =
            e.has("day") || e.has("nomist") ? 0 : (r.props.mistK ?? 1)));
    };
  t.rig.key.shadow.autoUpdate = !1;
  const C = r.props.lights.spots.map((e) => e.s);
  for (const e of C) e.shadow.autoUpdate = !1;
  let x = 0;
  g.push(() => {
    (x++, x % 30 === 1 && (t.rig.key.shadow.needsUpdate = !0));
    const e = i.game.camera.position;
    C.slice()
      .sort(
        (d, m) =>
          d.position.distanceToSquared(e) - m.position.distanceToSquared(e),
      )
      .forEach((d, m) => {
        const h = m < 2;
        (d.castShadow !== h &&
          ((d.castShadow = h), (d.shadow.needsUpdate = !0)),
          h && (x % 2 === 0 || x < 3) && (d.shadow.needsUpdate = !0));
      });
  });
  const a = i.game.beats.goto;
  return (
    (i.game.beats.goto = async (e) => {
      (await a(e), O(n, c()), t.rig.apply(n, !0), v());
    }),
    {
      group: t.group,
      colliders: r.colliders,
      circles: r.circles,
      anim: g,
      points: r.points,
      props: { ...r.props, park: r, lab: t },
      start: [430, 194],
      navPlan: r.navPlans.park,
      roomAt: r.zoneAt,
      surfaceAt: r.surfaceAt,
    }
  );
}
export { pe as build };
