import {
  G as Kt,
  at as At,
  c as bt,
  ah as qt,
  ak as Ct,
  B as Rt,
  I as xt,
  o as wt,
  b as Pt,
  au as ko,
  av as So,
  V as dt,
  C as Xt,
  a9 as re,
  x as H0,
  i as P0,
  d as m0,
  z as Is,
  U as ga,
  X as Ga,
  al as Ha,
  aw as vs,
  Y as _s,
  F as Oa,
  w as ba,
  ax as ja,
  H as Ya,
  ay as Xa,
  az as $a,
  aA as Za,
  an as M0,
  K as l0,
  E as pe,
  $ as t0,
  M as n0,
  m as p0,
  Q as w0,
  q as Ms,
  f as io,
  g as lo,
  a2 as za,
  a3 as ka,
  a7 as ws,
  h as vt,
  P as No,
  ab as Ja,
  af as Es,
  a0 as Sa,
  aa as Lo,
  a5 as he,
  aB as Aa,
  a6 as te,
  J as s0,
  l as no,
  ao as Po,
  A as ye,
  k as Do,
  v as hs,
  aC as Pa,
  aD as Qa,
  aE as tn,
  D as en,
  a8 as ro,
  aF as on,
  aG as sn,
  aH as an,
  ag as js,
  aj as nn,
  a1 as Ys,
  aq as Xs,
  ar as rn,
  y as cn,
  aI as ln,
  as as $s,
} from "./index-DaQlAVPp.js";
import { F as To, b as hn, a as un } from "./house-BEzMWI26.js";
import {
  G as Co,
  a as V0,
  m as X0,
  b as u0,
  P as fn,
  W as v0,
  p as J0,
  B as Yt,
  c as dn,
  S as Ie,
  d as Bo,
  g as Me,
  C as r0,
  e as zs,
  f as pn,
  h as Mo,
  i as Zs,
  j as Ta,
  z as Ve,
  H as _t,
  k as Js,
  l as mn,
  N as xn,
} from "./district-BhfbivMT.js";
import { a as vn } from "./BufferGeometryUtils-Qxvmd-vM.js";
import {
  g as Mn,
  a as Mt,
  l as Wt,
  d as Qs,
  x as wn,
  t as Q0,
  r as ge,
  M as f0,
  h as us,
  B as yn,
} from "./kit-CFeM0oZ2.js";
import {
  V as at,
  t as Vt,
  f as i0,
  m as a0,
  k as d0,
  c as gn,
  F as K0,
  A as bn,
} from "./common-BYwPbecq.js";
import { R as Zt } from "./RoundedBoxGeometry-D0zz8qHa.js";
import "./furniture-BraVmmRV.js";
const We = 0.46,
  T0 = 0.4,
  uo = 0.45,
  ns = 2.45,
  zn = 0.2;
function fo(s, o, t, u, e, r) {
  const a = new qt(u - s, e - o, r - t);
  return (a.translate((s + u) / 2, (o + e) / 2, (t + r) / 2), Ct(a));
}
function ta(s, o, t, u, e = ns) {
  const r = T0 / 2 + zn,
    a = 0.3,
    p = o - s,
    i = new Rt(),
    d = [],
    y = [],
    w = [],
    g = (n, l, f, h, c, M, m, k) => {
      const S = d.length / 3;
      (d.push(...n, ...l, ...f, ...h),
        y.push(c, M, m, M, m, k, c, k),
        w.push(S, S + 1, S + 2, S, S + 2, S + 3));
    },
    z = Math.hypot(r, a);
  (g([0, e, -r], [p, e, -r], [p, e + a, 0], [0, e + a, 0], 0, 0, p, z),
    g([p, e, r], [0, e, r], [0, e + a, 0], [p, e + a, 0], 0, 0, p, z),
    g(
      [0, e - 0.06, -r],
      [0, e - 0.06, r],
      [p, e - 0.06, r],
      [p, e - 0.06, -r],
      0,
      0,
      1,
      1,
    ),
    i.setAttribute("position", new xt(d, 3)),
    i.setAttribute("uv", new xt(y, 2)),
    i.setIndex(w),
    i.computeVertexNormals());
  const x = u
    ? new wt().makeTranslation(s, 0, t)
    : new wt().makeRotationY(-Math.PI / 2).setPosition(t, 0, s);
  i.applyMatrix4(x);
  const v = new Pt(0.075, 0.075, p, 8, 1, !1, 0, Math.PI).rotateZ(Math.PI / 2);
  (v.translate(p / 2, e + a - 0.01, 0), v.applyMatrix4(x));
  {
    const n = v.attributes.uv;
    for (let l = 0; l < n.count; l++)
      n.setXY(l, n.getX(l) * p, n.getY(l) * 0.3);
  }
  return [i, v];
}
function kn(s, o) {
  const t = new Kt();
  t.name = "walls";
  const u = [],
    e = V0,
    r = { plinth: [], body: [], roof: [] },
    a = [],
    p = (q, U, Z, ot, $) => {
      if (U - q < 0.05) return;
      const [C, T, D, N] = ot
          ? [q, U, Z - T0 / 2, Z + T0 / 2]
          : [Z - T0 / 2, Z + T0 / 2, q, U],
        [H, Q, W, B] = ot
          ? [q, U, Z - We / 2, Z + We / 2]
          : [Z - We / 2, Z + We / 2, q, U];
      return (
        $.plinth.push(fo(H, 0, W, Q, uo, B)),
        $.body.push(fo(C, uo, D, T, ns, N)),
        $.roof.push(...ta(q, U, Z, ot)),
        u.push({ x0: H, x1: Q, z0: W, z1: B, y0: 0, y1: 2.8, wall: !0 }),
        u[u.length - 1]
      );
    },
    i = e.z0 - T0 / 2,
    d = e.z1 + T0 / 2,
    y = e.x0 - T0 / 2,
    w = e.x1 + T0 / 2;
  (p(e.x0 - T0, e.x1 + T0, i, !0, r),
    p(e.x0 - T0, u0.x0 - 0.12, d, !0, r),
    p(u0.x1 + 0.12, e.x1 + T0, d, !0, r));
  const g = [];
  for (const q of ["west", "east"]) {
    const U = Co.find(($) => $.side === q),
      Z = q === "west" ? y : w;
    (p(e.z0, U.a, Z, !1, r), p(U.b, e.z1, Z, !1, r));
    const ot = { plinth: [], body: [], roof: [] };
    (g.push(p(U.a, U.b, Z, !1, ot)),
      a.push({ side: q, part: ot, c: Z, a: U.a, b: U.b }));
  }
  const z = {
      plinth: At("garden_rock"),
      body: Sn(At("garden_wall")),
      roof: At("garden_roof"),
    },
    x = (q, U) => {
      const Z = new Kt();
      Z.name = U;
      for (const ot of ["plinth", "body", "roof"]) {
        if (!q[ot].length) continue;
        const $ = new bt(X0(q[ot]), z[ot]);
        (($.castShadow = !0), ($.receiveShadow = !0), Z.add($));
      }
      return Z;
    },
    v = [],
    n = (q, U, Z, ot, $) => {
      const C = Math.max(1, Math.round((U - q) / 2.8));
      for (let T = 0; T <= C; T++) {
        const D = q + ((U - q) * T) / C,
          N = Z + $ * (T0 / 2 + 0.07);
        v.push(
          ot
            ? fo(D - 0.08, 0, N - 0.07, D + 0.08, ns + 0.02, N + 0.07)
            : fo(N - 0.07, 0, D - 0.08, N + 0.07, ns + 0.02, D + 0.08),
        );
      }
    };
  (n(e.x0 + 0.2, e.x1 - 0.2, i, !0, 1),
    n(e.x0 + 0.2, u0.x0 - 0.3, d, !0, -1),
    n(u0.x1 + 0.3, e.x1 - 0.2, d, !0, -1),
    n(e.z0 + 0.2, Co[0].a - 0.2, y, !1, 1),
    n(Co[0].b + 0.2, e.z1 - 0.2, y, !1, 1),
    n(e.z0 + 0.2, Co[1].a - 0.2, w, !1, -1),
    n(Co[1].b + 0.2, e.z1 - 0.2, w, !1, -1));
  const l = new bt(X0(v), At("wood_ebony"));
  ((l.castShadow = !0),
    (l.receiveShadow = !0),
    (l.name = "wall_posts"),
    t.add(x(r, "walls_standing"), l));
  const f = new Kt();
  f.name = "walls_gaps_whole";
  for (const q of a) f.add(x(q.part, "gap_" + q.side));
  t.add(f);
  const h = new Kt();
  ((h.name = "walls_broken"), (h.visible = !1));
  const c = { plinth: [], body: [], roof: [] },
    M = [],
    m = [];
  for (const q of a) {
    const U = q.b - q.a;
    for (const [Z, ot, $] of [
      [q.a, q.a + 0.55, 1.6],
      [q.b - 0.7, q.b, 1.1],
    ]) {
      c.plinth.push(fo(q.c - We / 2, 0, Z, q.c + We / 2, uo, ot));
      const C = 4;
      for (let T = 0; T < C; T++) {
        const D = Z + ((ot - Z) * T) / C,
          N = Z + ((ot - Z) * (T + 1)) / C,
          H =
            uo +
            ($ - uo) *
              (0.55 + 0.45 * o()) *
              (Z === q.a ? 1 - (T / C) * 0.6 : 0.4 + (T / C) * 0.6);
        c.body.push(
          fo(
            q.c - T0 / 2 + (o() - 0.5) * 0.04,
            uo,
            D,
            q.c + T0 / 2 + (o() - 0.5) * 0.04,
            H,
            N,
          ),
        );
      }
      m.push({
        x0: q.c - We / 2,
        x1: q.c + We / 2,
        z0: Z,
        z1: ot,
        y0: 0,
        y1: 1.6,
        on: !1,
      });
    }
    for (let Z = 0; Z < 46; Z++) {
      const ot = q.a + 0.4 + o() * (U - 0.8),
        $ = (o() - 0.5) * 2.4,
        C = 0.12 + o() * 0.32,
        T = Math.max(0, 0.35 * (1 - Math.abs($) / 1.3)) * o(),
        D = new qt(C * (0.7 + o()), C * (0.4 + o() * 0.5), C * (0.7 + o()));
      (D.rotateX(o() * 0.8)
        .rotateY(o() * 3)
        .rotateZ(o() * 0.8)
        .translate(q.c + $, T + C * 0.2, ot),
        M.push({
          g: Ct(D),
          k: o() < 0.55 ? "body" : o() < 0.6 ? "plinth" : "roof",
        }));
    }
  }
  const k = { plinth: [], body: [], roof: [] };
  for (const q of M) k[q.k].push(q.g);
  (h.add(x(c, "stubs"), x(k, "rubble")), t.add(h));
  for (const q of m) u.push(q);
  const S = new Kt();
  S.name = "gate";
  const A = At("wood_ebony"),
    b = At("door_wood"),
    P = (q) => {
      const U = new bt(Ct(new qt(0.24, 3.1, 0.24).translate(q, 1.55, d)), A);
      return ((U.castShadow = !0), U);
    };
  S.add(P(u0.x0 - 0.12), P(u0.x1 + 0.12));
  const _ = new bt(
    Ct(new qt(u0.x1 - u0.x0 + 0.9, 0.2, 0.26).translate(0, 2.9, d)),
    A,
  );
  ((_.castShadow = !0), S.add(_));
  const [I, R] = ta(u0.x0 - 0.75, u0.x1 + 0.75, d, !0, 3),
    V = new bt(X0([I, R]), z.roof);
  ((V.castShadow = !0), S.add(V));
  const L = (q) => {
      const U = [];
      for (let Z = 0; Z < 5; Z++)
        U.push(
          Ct(
            new qt(q / 5 - 0.008, 2.5, 0.06).translate(
              -q / 2 + ((Z + 0.5) * q) / 5,
              1.3,
              0,
            ),
          ),
        );
      for (const Z of [0.45, 1.3, 2.2])
        U.push(Ct(new qt(q * 0.94, 0.12, 0.05).translate(0, Z, -0.05)));
      return X0(U);
    },
    K = (u0.x1 - u0.x0) / 2,
    j = new Kt(),
    O = new Kt(),
    J = new bt(L(K), b);
  ((J.position.x = K / 2),
    (J.castShadow = !0),
    j.add(J),
    j.position.set(u0.x0, 0, d));
  const tt = new bt(L(K), b);
  ((tt.position.x = -K / 2),
    (tt.castShadow = !0),
    O.add(tt),
    O.position.set(u0.x1, 0, d),
    S.add(j, O));
  const st = {
    x0: u0.x0,
    x1: u0.x1,
    z0: d - 0.1,
    z1: d + 0.1,
    y0: 0,
    y1: 2.6,
    on: !0,
  };
  (u.push(st), t.add(S));
  const G = z.body.userData.U;
  return {
    group: t,
    colliders: u,
    setWorld(q) {
      const U = q === "ruins";
      ((f.visible = !U), (h.visible = U));
      for (const Z of g) Z.on = !U;
      for (const Z of m) Z.on = U;
      ((G.uSoot.value = U ? 1 : 0),
        (st.on = !U),
        U
          ? (j.position.set(u0.x0 - 0.2, 0.03, d + 1.25),
            j.rotation.set(-Math.PI / 2 + 0.06, 0.35, 0),
            O.position.set(u0.x1, 0, d),
            O.rotation.set(0.05, 1.9, 0.22))
          : (j.position.set(u0.x0, 0, d),
            j.rotation.set(0, 0, 0),
            O.position.set(u0.x1, 0, d),
            O.rotation.set(0, 0, 0)));
    },
  };
}
function Sn(s) {
  const o = s.clone();
  return (
    (o.userData = { ...s.userData, U: { uSoot: { value: 0 } } }),
    (o.onBeforeCompile = (t) => {
      ((t.uniforms.uSoot = o.userData.U.uSoot),
        (t.vertexShader = t.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vSootW;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
vSootW = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
          )),
        (t.fragmentShader = t.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vSootW;
uniform float uSoot;`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      {
        float n = fract(sin(dot(floor(vSootW.xz * 3.0 + vSootW.y * 0.7), vec2(12.9898, 78.233))) * 43758.5453);
        float s = uSoot * clamp(1.15 - vSootW.y * 0.32 + (n - 0.5) * 0.35 + 0.25 * sin(vSootW.x * 1.7 + vSootW.z * 2.3), 0.0, 1.0);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.16, 0.14, 0.13), s);
      }`,
          )));
    }),
    (o.customProgramCacheKey = () => "soot2"),
    o
  );
}
const _e = 3,
  ea = 5,
  An = `
vec2 causH(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }
float causticAt(vec2 p, float t) {
  float c = 0.0;
  vec2 q = p;
  for (int k = 0; k < 2; k++) {
    vec2 w = q + vec2(sin(q.y * 1.3 + t * 0.9), cos(q.x * 1.1 - t * 0.7)) * 0.3;
    vec2 i = floor(w), f = fract(w);
    float d1 = 8.0, d2 = 8.0;
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = 0.5 + 0.5 * sin(t * 0.6 + 6.2831 * causH(i + g));
      float d = length(g + o - f);
      if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) { d2 = d; }
    }
    c += pow(clamp(1.0 - (d2 - d1) * 2.4, 0.0, 1.0), 5.0);
    q = q * 1.73 + 3.1;
  }
  return c * 0.65;
}`,
  bo = 10,
  Pn = 2.6,
  Tn = `
uniform vec4 uKoiA[${bo}], uKoiB[${bo}];
float koiShade(vec3 P) {
  float sh = 0.0;
  float sl = length(uKoiSun.xy);
  vec2 sd = uKoiSun.xy / max(sl, 1e-4);
  for (int i = 0; i < ${bo}; i++) {
    vec4 a = uKoiA[i], b = uKoiB[i];
    float h = a.y - P.y;                                          // the fish's height over this point
    if (b.x <= 0.0 || h < 0.02) continue;
    vec2 q = P.xz + uKoiSun.xy * h - a.xz;                        // up the bent sun ray to the fish's level
    float L = b.x, blur = 0.008 + 0.05 * h;
    float r = 0.64 * L + blur;
    if (dot(q, q) > r * r) continue;
    float cy = cos(a.w), sy = sin(a.w);
    vec2 l = vec2(q.x * cy - q.y * sy, q.x * sy + q.y * cy) / L;  // in the fish's frame, body lengths: across, along (nose +0.5)
    // (the body's own depth throws a wider shadow across the sun's way)
    vec2 sl2 = vec2(sd.x * cy - sd.y * sy, sd.x * sy + sd.y * cy);
    l -= sl2 * clamp(dot(l - vec2(0.0, 0.1), sl2), -0.1 * sl, 0.1 * sl);
    // the same curl and tail wave the body swims with
    float s = clamp((0.5 - l.y) / 1.02, 0.0, 1.0);
    l.x -= b.y * (l.y - 0.1) * (l.y - 0.1) * 1.2 + sin(b.z - s * 4.2) * b.w * (0.012 + 0.11 * s * s);
    // the body's outline (its lofted profile), a narrow tail fin behind the wrist
    float sb = clamp((0.5 - l.y) / 0.78, 0.0, 1.0);
    float w = 0.105 * pow(sin(3.14159 * clamp(pow(sb, 0.62) * 0.98 + 0.02, 0.0, 1.0)), 0.75) * (1.0 - 0.55 * sb * sb) + 0.008;
    if (l.y < -0.25) w = max(w, 0.018 + 0.05 * smoothstep(-0.36, -0.5, l.y));
    float d = max(abs(l.x) - w, max(l.y - 0.505, -0.52 - l.y)) * L;
    float o = 1.0 - smoothstep(-blur, blur, d);
    // the pectoral fans: thin, a paler shade
    float dp = max(abs(l.x) - 0.18, abs(l.y - 0.23) - 0.06) * L;
    o = max(o, 0.35 * (1.0 - smoothstep(-blur, blur, dp)));
    sh = max(sh, o * exp(-h * 0.6));                              // (the water's own glow fills a high fish's shadow)
  }
  return sh * uKoiSun.z;
}`;
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
function Fn(s) {
  const { game: o, renderer: t, scene: u } = s,
    e = fn,
    r = ko.merge([
      So.fog,
      {
        tRefr: { value: null },
        tRefrD: { value: null },
        tRefl: { value: null },
        tNorm: { value: Cn() },
        uScreen: { value: new re(1, 1) },
        uTime: { value: 0 },
        uNear: { value: 0.05 },
        uFar: { value: 1500 },
        uReflK: { value: 1 },
        uGlint: { value: 1 },
        uDebug: { value: 0 },
        uWave: { value: 1 },
        uFilm: { value: 0 },
        uAsh: { value: 0 },
        uRefrK: { value: 0.3 },
        uProjK: { value: new re(1, 1) },
        uSunDir: { value: new dt(-0.83, 0.27, 0.49).normalize() },
        uSunCol: { value: new Xt(1, 0.8, 0.55) },
        uDeep: { value: new Xt(0.012, 0.034, 0.029) },
        uAbsorb: { value: new dt(1.5, 0.72, 0.92) },
        uRip: { value: Array.from({ length: 16 }, () => new H0(0, 0, -99, 0)) },
        uReflMat: { value: new wt() },
      },
    ]),
    a = new P0({ vertexShader: In, fragmentShader: _n, uniforms: r, fog: !0 }),
    p = new m0(e.x1 - e.x0, e.z1 - e.z0, 1, 1)
      .rotateX(-Math.PI / 2)
      .translate((e.x0 + e.x1) / 2, v0, (e.z0 + e.z1) / 2),
    i = new bt(p, a);
  ((i.name = "pond_water"), i.layers.set(ea), o.camera.layers.enable(ea));
  const d = { refr: 1, refl: 0.5, samples: 4, reflSamples: 4 };
  let y = null,
    w = null;
  const g = (O, J) =>
    new Ya(2, 2, {
      type: $a,
      depthBuffer: !0,
      samples: O,
      ...(J ? { depthTexture: new Xa(2, 2, Za) } : { resolveDepthBuffer: !1 }),
    });
  function z() {
    (y?.dispose(),
      w?.dispose(),
      (y = g(d.samples, !0)),
      (w = g(d.reflSamples, !1)),
      (r.tRefr.value = y.texture),
      (r.tRefrD.value = y.depthTexture),
      (r.tRefl.value = w.texture));
  }
  z();
  const x = new Is(),
    v = new Is();
  (x.layers.set(_e), v.layers.set(0), v.layers.enable(1));
  const n = new ja(),
    l = new H0(),
    f = new H0(),
    h = new ba(new dt(e.x0, v0 - 1, e.z0), new dt(e.x1, v0 + 0.2, e.z1)),
    c = new Oa(),
    M = new wt(),
    m = new dt(),
    k = new dt(),
    S = new dt(),
    A = new wt(),
    b = new dt(0, 1, 0),
    P = new dt(0, v0, 0);
  let _ = !1;
  function I(O) {
    if (
      !i.visible ||
      (O.updateMatrixWorld(),
      M.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse),
      c.setFromProjectionMatrix(M),
      !c.intersectsBox(h))
    )
      return;
    _ ||
      (u.traverse(($) => {
        $.isLight && $.layers.enable(_e);
      }),
      (_ = !0));
    const J = o.post.size,
      tt = Math.max(2, Math.floor(J.x * d.refr)),
      st = Math.max(2, Math.floor(J.y * d.refr)),
      G = Math.max(2, Math.floor(J.x * d.refl)),
      q = Math.max(2, Math.floor(J.y * d.refl));
    ((y.width !== tt || y.height !== st) && y.setSize(tt, st),
      (w.width !== G || w.height !== q) && w.setSize(G, q),
      r.uScreen.value.set(J.x, J.y),
      (r.uNear.value = O.near),
      (r.uFar.value = O.far),
      r.uProjK.value.set(
        O.projectionMatrix.elements[0],
        O.projectionMatrix.elements[5],
      ));
    const U = t.getRenderTarget(),
      Z = t.shadowMap.autoUpdate,
      ot = t.autoClear;
    if (
      ((t.shadowMap.autoUpdate = !1),
      (t.autoClear = !0),
      x.copy(O, !1),
      x.layers.set(_e),
      x.matrixWorld.copy(O.matrixWorld),
      x.matrixWorldInverse.copy(O.matrixWorldInverse),
      x.projectionMatrix.copy(O.projectionMatrix),
      x.projectionMatrixInverse.copy(O.projectionMatrixInverse),
      (x.matrixAutoUpdate = !1),
      (L.uCausOn.value = 1),
      t.setRenderTarget(y),
      t.render(u, x),
      (L.uCausOn.value = 0),
      m.setFromMatrixPosition(O.matrixWorld),
      m.y > v0 + 0.01)
    ) {
      const $ = new dt()
        .subVectors(P.set(m.x, v0, m.z), m)
        .reflect(b)
        .negate()
        .add(P);
      (A.extractRotation(O.matrixWorld),
        k.set(0, 0, -1).applyMatrix4(A).add(m),
        S.subVectors(P, k).reflect(b).negate().add(P),
        v.position.copy($),
        v.up.set(0, 1, 0).applyMatrix4(A).reflect(b),
        v.lookAt(S),
        (v.far = O.far),
        (v.near = O.near),
        (v.fov = O.fov),
        (v.aspect = O.aspect),
        v.updateMatrixWorld(),
        v.projectionMatrix.copy(O.projectionMatrix),
        r.uReflMat.value
          .set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1)
          .multiply(v.projectionMatrix)
          .multiply(v.matrixWorldInverse),
        n
          .setFromNormalAndCoplanarPoint(b, P)
          .applyMatrix4(v.matrixWorldInverse),
        l.set(n.normal.x, n.normal.y, n.normal.z, n.constant));
      const C = v.projectionMatrix.elements;
      (f.set(
        (Math.sign(l.x) + C[8]) / C[0],
        (Math.sign(l.y) + C[9]) / C[5],
        -1,
        (1 + C[10]) / C[14],
      ),
        l.multiplyScalar(2 / l.dot(f)),
        (C[2] = l.x),
        (C[6] = l.y),
        (C[10] = l.z + 1 - 0.003),
        (C[14] = l.w),
        v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),
        t.setRenderTarget(w),
        t.render(u, v));
    }
    (t.setRenderTarget(U), (t.shadowMap.autoUpdate = Z), (t.autoClear = ot));
  }
  let R = 0;
  const V = (O, J, tt = 1) => {
      r.uRip.value[R++ % 16].set(O, J, r.uTime.value, tt);
    },
    L = {
      uCausT: { value: 0 },
      uCaus: { value: 1 },
      uCausCol: { value: new Xt(1, 0.85, 0.6).multiplyScalar(1.6) },
      uCausOn: { value: 0 },
      uKoiA: { value: Array.from({ length: bo }, () => new H0()) },
      uKoiB: { value: Array.from({ length: bo }, () => new H0()) },
      uKoiSun: { value: new dt() },
      uSunBent: { value: new H0() },
    },
    K = (O) => {
      const J = r.uSunDir.value.clone().normalize(),
        tt = Math.hypot(J.x, J.z),
        st = J.y,
        G = tt / 1.333,
        q = Math.sqrt(1 - G * G);
      L.uKoiSun.value.set(
        ((J.x / tt) * G) / q,
        ((J.z / tt) * G) / q,
        O ? 1 : 0,
      );
      const U = (st - 1.333 * q) / (st + 1.333 * q),
        Z = (1.333 * st - q) / (1.333 * st + q),
        ot = 1 - (U * U + Z * Z) / 2;
      L.uSunBent.value.set(
        (J.x / tt) * G,
        q,
        (J.z / tt) * G,
        O ? ((st * ot) / q) * Pn : 0,
      );
    };
  K(!0);
  let j = !1;
  return {
    mesh: i,
    uniforms: r,
    causU: L,
    prepare: I,
    ripple: V,
    setQuality(O) {
      const J = d.samples,
        tt = d.reflSamples;
      (Object.assign(d, O), (d.samples !== J || d.reflSamples !== tt) && z());
    },
    get quality() {
      return { ...d };
    },
    update(O) {
      (j || (o.prepares.push((J) => I(J)), (j = !0)),
        (r.uTime.value += O),
        (L.uCausT.value += O));
    },
    setWorld(O) {
      const J = O === "ruins";
      (r.uDeep.value.set(
        ...(J ? [0.006, 0.005, 0.004] : [0.012, 0.034, 0.029]),
      ),
        r.uAbsorb.value.set(...(J ? [9, 10, 11] : [1.5, 0.72, 0.92])),
        r.uSunDir.value
          .set(...(J ? [0.35, 0.18, 0.92] : [-0.83, 0.27, 0.49]))
          .normalize(),
        r.uSunCol.value.set(...(J ? [0.55, 0.16, 0.05] : [1, 0.8, 0.55])),
        (r.uGlint.value = J ? 0.35 : 1),
        (r.uWave.value = J ? 0.35 : 1),
        (r.uFilm.value = J ? 1 : 0),
        (r.uAsh.value = J ? 1 : 0),
        (r.uReflK.value = J ? 0.85 : 1),
        (L.uCaus.value = J ? 0 : 1),
        K(!J));
    },
  };
}
const Re = (s, o, t) => (s < o ? o : s > t ? t : s),
  oa = (s, o) => {
    let t = o - s;
    for (; t > Math.PI;) t -= 2 * Math.PI;
    for (; t < -Math.PI;) t += 2 * Math.PI;
    return t;
  },
  Wn = { x: -5, z: -0.8 },
  Rn = { x: 0.7, z: 1 },
  ks = [
    [-3.6, -0.05],
    [-2.9, 0.42],
    [-2.25, 0.3],
    [-1.6, 0.5],
    [-0.95, 0.75],
    [-0.5, 1.2],
  ],
  Go = { p: [-2.25, 0.3], d: [1, 0.3] };
function Nn({
  sdf: s,
  depth: o,
  waterY: t,
  rng: u,
  specs: e,
  posts: r = [],
  onRise: a = null,
}) {
  const p = (n, l) => {
      let f = s(n, l);
      for (const h of r)
        f = Math.max(
          f,
          h[2] - Math.sqrt((n - h[0]) * (n - h[0]) + (l - h[1]) * (l - h[1])),
        );
      return f;
    },
    i = (n, l) => {
      const h = (p(n + 0.05, l) - p(n - 0.05, l)) / 0.1,
        c = (p(n, l + 0.05) - p(n, l - 0.05)) / (2 * 0.05),
        M = Math.sqrt(h * h + c * c) || 1;
      return [h / M, c / M];
    },
    d = (n, l) =>
      (n - Go.p[0]) * Go.d[0] + (l - Go.p[1]) * Go.d[1] > 0 ? "B" : "A",
    y = (n, l = 0.9) => {
      const f = n === "A" ? Wn : Rn,
        h = n === "A" ? 3.4 : 2.7;
      for (let c = 0; c < 60; c++) {
        const M = f.x + (u() - 0.5) * h * 2,
          m = f.z + (u() - 0.5) * h * 1.6;
        if (p(M, m) < -l && d(M, m) === n) return [M, m];
      }
      return [f.x, f.z];
    },
    w = (n, l, f) => {
      let h = n,
        c = l;
      for (let M = 0; M < 40; M++) {
        const m = p(h, c);
        if (m < -f) break;
        const [k, S] = i(h, c),
          A = Math.max(0.04, Math.min(0.5, m + f + 0.02));
        ((h -= k * A), (c -= S * A));
      }
      return [h, c];
    },
    g = e.map((n, l) => {
      const f = l % 3 === 2 ? "B" : "A",
        [h, c] = y(f, 1);
      return {
        i: l,
        x: h,
        z: c,
        y: t - 0.3,
        yaw: u() * Math.PI * 2,
        pitch: 0,
        speed: 0.12,
        size: n.size,
        omega: 0,
        wander: 0,
        avoidDir: 0,
        avoidT: 0,
        bend: 0,
        beat: 0.9,
        mode: "cruise",
        modeT: 2 + u() * 6,
        cruise: 0.15 + u() * 0.07,
        kickPh: u() * 6.28,
        kickRate: 0.35 + u() * 0.25,
        route: null,
        goal: null,
        visitCd: 3 + u() * 6,
        rise: 4 + u() * 10,
        rising: 0,
        rang: !1,
        depthK: u(),
        leader: -1,
        lobe: f,
        phase: u() * 6.28,
        effort: 0.3,
      };
    });
  (g.length > 5 && ((g[3].leader = 0), (g[5].leader = 1)),
    g.length > 8 && (g[8].leader = 4));
  const z = (n, l, f) => {
    const h = d(n.x, n.z),
      c = d(l, f);
    if (h === c) {
      n.route = [[l, f]];
      return;
    }
    const M = h === "A" ? ks.slice() : ks.slice().reverse();
    n.route = [...M, [l, f]];
  };
  let x = 2;
  function v(n, l, f) {
    if (n <= 0) return;
    let h = null;
    if (f) {
      ((h = w(f[0], f[1], 0.62)), (x -= n));
      const c = g.filter((M) => M.mode === "visit").length;
      if (x <= 0 && c < 3) {
        x = 2.2 + u() * 3.5;
        let M = null,
          m = 1e9;
        for (const k of g) {
          if (k.mode === "visit" || k.visitCd > 0 || k.mode === "transit")
            continue;
          const S =
            Math.sqrt(
              (k.x - h[0]) * (k.x - h[0]) + (k.z - h[1]) * (k.z - h[1]),
            ) +
            u() * 2;
          S < m && ((m = S), (M = k));
        }
        if (M) {
          ((M.mode = "visit"), (M.modeT = 16));
          const [k, S] = w(
            h[0] + (u() - 0.5) * 1.2,
            h[1] + (u() - 0.5) * 1.2,
            0.6,
          );
          ((M.goal = [k, S]), z(M, k, S));
        }
      }
    } else x = Math.min(x, 1.5);
    for (const c of g) {
      ((c.modeT -= n), (c.visitCd -= n));
      const M = c.size;
      let m = null,
        k =
          c.cruise *
          (0.8 +
            0.35 * Math.max(0, Math.sin(l * c.kickRate * 6.28 + c.kickPh)));
      if (c.mode === "cruise" && c.modeT <= 0) {
        const U = u();
        if (U < 0.2) ((c.mode = "hover"), (c.modeT = 2.5 + u() * 4));
        else if (U < 0.33) {
          c.mode = "transit";
          const Z = d(c.x, c.z) === "A" ? "B" : "A";
          ((c.goal = y(Z, 0.9)), z(c, c.goal[0], c.goal[1]), (c.modeT = 40));
        } else c.modeT = 4 + u() * 8;
      }
      if (
        (c.mode === "hover" &&
          ((k = 0.035),
          c.modeT <= 0 && ((c.mode = "cruise"), (c.modeT = 4 + u() * 7))),
        (c.mode === "transit" || c.mode === "visit") && c.route)
      ) {
        let U = c.route[0];
        const Z = c.route.length === 1,
          ot = Math.sqrt(
            (U[0] - c.x) * (U[0] - c.x) + (U[1] - c.z) * (U[1] - c.z),
          );
        (ot < (Z ? 0.45 : 0.32) &&
          (c.route.shift(),
          c.route.length
            ? (U = c.route[0])
            : ((c.route = null),
              c.mode === "visit"
                ? ((c.mode = "pass"),
                  (c.modeT = 2.2 + u() * 2),
                  (c.visitCd = 10 + u() * 10),
                  u() < 0.65 && (c.rise = 0.4))
                : ((c.mode = "cruise"), (c.modeT = 3 + u() * 6)))),
          c.route &&
            ((m = Math.atan2(U[0] - c.x, U[1] - c.z)),
            c.mode === "visit" && c.route.length === 1
              ? (k = Math.min(
                  c.cruise * 1.25,
                  0.08 + 0.18 * Math.min(1, ot / 1.5),
                ))
              : (k = c.cruise * 1.15)),
          c.modeT <= 0 &&
            ((c.mode = "cruise"), (c.route = null), (c.modeT = 3 + u() * 5)));
      }
      if (
        (c.mode === "pass" &&
          ((k = 0.07),
          c.modeT <= 0 &&
            ((c.mode = "cruise"),
            (c.modeT = 3 + u() * 5),
            (c.omega += (u() < 0.5 ? -1 : 1) * 0.6))),
        c.leader >= 0 && c.mode === "cruise")
      ) {
        const U = g[c.leader];
        if (d(U.x, U.z) === d(c.x, c.z)) {
          const Z =
              U.x - Math.sin(U.yaw) * (0.35 + M * 0.6) + Math.cos(U.yaw) * 0.18,
            ot =
              U.z - Math.cos(U.yaw) * (0.35 + M * 0.6) - Math.sin(U.yaw) * 0.18,
            $ = Math.sqrt((Z - c.x) * (Z - c.x) + (ot - c.z) * (ot - c.z));
          ($ > 0.12 && (m = Math.atan2(Z - c.x, ot - c.z)),
            (k = Re(U.speed + ($ - 0.2) * 0.35, 0.03, 0.34)));
        }
      }
      const S = 0.3 + c.speed * 2.2 + M * 0.7,
        A =
          c.mode === "cruise" || c.mode === "hover"
            ? 0.42 + M * 0.45
            : c.mode === "transit"
              ? 0.1 + M * 0.12
              : 0.2 + M * 0.25,
        b = [];
      for (const U of [-0.9, -0.45, 0, 0.45, 0.9]) {
        const Z = S * (1 - 0.28 * Math.abs(U));
        b.push(
          -p(c.x + Math.sin(c.yaw + U) * Z, c.z + Math.cos(c.yaw + U) * Z),
        );
      }
      const P = -p(c.x, c.z),
        _ = Math.min(b[1], b[2], b[3]),
        I = Re((A - _) / A, 0, 1);
      let R = 0;
      if (I > 0) {
        const U = b[3] + b[4] * 0.7,
          Z = b[1] + b[0] * 0.7;
        ((c.avoidT <= 0 || Math.abs(U - Z) > 0.35) &&
          ((c.avoidDir = U >= Z ? 1 : -1), (c.avoidT = 0.8)),
          (R = c.avoidDir * (0.6 + 2.2 * I)));
      }
      if (((c.avoidT -= n), P < A * 0.7)) {
        const [U, Z] = i(c.x, c.z),
          ot = Math.atan2(-U, -Z);
        R += Re(oa(c.yaw, ot), -1.2, 1.2) * (1 - P / (A * 0.7)) * 1.5;
      }
      let V = 0,
        L = 1;
      for (const U of g) {
        if (U === c) continue;
        const Z = U.x - c.x,
          ot = U.z - c.z,
          $ = Math.sqrt(Z * Z + ot * ot),
          C = (M + U.size) * 0.62;
        if ($ > C || $ < 1e-4 || Math.abs(U.y - c.y) > 0.16) continue;
        const T = (Z * Math.sin(c.yaw) + ot * Math.cos(c.yaw)) / $;
        if (T < -0.2) continue;
        const D = Math.sin(c.yaw) * ot - Math.cos(c.yaw) * Z;
        ((V += (D > 0 ? 1 : -1) * (1 - $ / C) * 1.4),
          T > 0.5 &&
            c.leader !== U.i &&
            (L = Math.min(L, 0.55 + (0.45 * $) / C)));
      }
      ((c.wander += (-c.wander * 0.7 + (u() - 0.5) * 2.6) * n),
        (c.wander = Re(c.wander, -0.7, 0.7)));
      let K;
      (m != null
        ? (K = Re(oa(c.yaw, m) * 1.8, -1.3, 1.3) * (1 - I * 0.85))
        : (K = c.wander * (c.mode === "hover" ? 0.3 : 1) * (1 - I)),
        (K += R + V),
        (K = Re(K, -2.6, 2.6)),
        (c.omega += (K - c.omega) * Math.min(1, n * 4.5)),
        (c.yaw += c.omega * n));
      const j = Math.min(1, Math.abs(c.omega) / 2.2),
        O = k * L * (1 - 0.45 * I) * (1 - 0.35 * j);
      ((c.speed += (O - c.speed) * Math.min(1, n * (O > c.speed ? 1.6 : 2.4))),
        (c.x += Math.sin(c.yaw) * c.speed * n),
        (c.z += Math.cos(c.yaw) * c.speed * n));
      const J = p(c.x, c.z);
      if (J > -0.1) {
        const [U, Z] = i(c.x, c.z);
        ((c.x -= U * (J + 0.1)), (c.z -= Z * (J + 0.1)));
        const ot = Math.sin(c.yaw),
          $ = Math.cos(c.yaw),
          C = ot * U + $ * Z;
        (C > 0 && (c.yaw = Math.atan2(ot - U * C * 1.05, $ - Z * C * 1.05)),
          (c.pushes = (c.pushes || 0) + 1));
      }
      {
        const U = c.x + Math.sin(c.yaw) * M * 0.45,
          Z = c.z + Math.cos(c.yaw) * M * 0.45,
          ot = p(U, Z);
        if (ot > -0.04) {
          const [$, C] = i(U, Z),
            T = Math.sin(c.yaw),
            D = Math.cos(c.yaw),
            N = T * $ + D * C;
          (N > 0 && (c.yaw = Math.atan2(T - $ * N * 1.05, D - C * N * 1.05)),
            (c.x -= $ * (ot + 0.04)),
            (c.z -= C * (ot + 0.04)),
            (c.pushes = (c.pushes || 0) + 1));
        }
      }
      for (const U of g) {
        if (U.i <= c.i) continue;
        const Z = c.x - U.x,
          ot = c.z - U.z,
          $ = Math.sqrt(Z * Z + ot * ot),
          C = (M + U.size) * 0.3;
        if ($ < C && $ > 1e-5 && Math.abs(U.y - c.y) < 0.12) {
          const T = ((C - $) * 0.5) / $;
          ((c.x += Z * T), (c.z += ot * T), (U.x -= Z * T), (U.z -= ot * T));
        }
      }
      c.rise -= n;
      const tt = t - Math.max(0.1, o(c.x, c.z)),
        st = t - 0.07 - M * 0.06;
      let G = Math.max(
        tt + 0.06 + M * 0.1,
        Math.min(
          st,
          t - 0.16 - 0.32 * c.depthK - 0.06 * Math.sin(l * 0.23 + c.i * 1.7),
        ),
      );
      ((c.mode === "visit" || c.mode === "pass") && (G = Math.max(G, t - 0.14)),
        c.rise < 0 &&
          ((G = t - 0.035),
          c.rise < -1.3
            ? ((c.rise = 7 + u() * 14), (c.rang = !1))
            : !c.rang &&
              c.y > t - 0.075 &&
              ((c.rang = !0),
              a &&
                a(
                  c.x + Math.sin(c.yaw) * M * 0.45,
                  c.z + Math.cos(c.yaw) * M * 0.45,
                  0.8,
                ))));
      const q = (G - c.y) * Math.min(1, n * 1.1);
      ((c.y += q),
        (c.pitch +=
          (Re(
            (q / Math.max(n, 0.001) / Math.max(0.05, c.speed + 0.05)) * 0.8,
            -0.5,
            0.5,
          ) -
            c.pitch) *
          Math.min(1, n * 3)),
        (c.bend +=
          (Re(c.omega * 0.32, -0.55, 0.55) - c.bend) * Math.min(1, n * 5)),
        (c.beat = 0.5 + c.speed * 4.2 + Math.abs(c.omega) * 0.35),
        (c.phase = (c.phase + c.beat * Math.PI * 2 * n) % (Math.PI * 200)),
        (c.effort = Math.min(1, c.speed / 0.3 + Math.abs(c.omega) * 0.25)));
    }
  }
  return { fish: g, step: v, wsdf: p, lobeOf: d, waterNear: w, LANE: ks };
}
function Ln() {
  const s = [],
    o = [],
    t = [],
    u = [],
    a = (g) => {
      const z =
        0.105 *
          Math.pow(
            Math.sin(Math.PI * Math.min(1, Math.pow(g, 0.62) * 0.98 + 0.02)),
            0.75,
          ) *
          (1 - 0.55 * g * g) +
        0.004;
      return [z, z * 1.12];
    },
    p = s.length / 3;
  for (let g = 0; g <= 28; g++) {
    const z = g / 28,
      x = 0.5 - z * 0.78,
      [v, n] = a(z);
    for (let l = 0; l <= 18; l++) {
      const f = (l / 18) * Math.PI * 2,
        h = Math.cos(f),
        c = Math.sin(f),
        M = c * n * (c < 0 ? 0.82 : 1);
      (s.push(h * v, M, x), o.push(h, c * 0.9, 0.12 * (1 - z)), t.push(0));
    }
  }
  for (let g = 0; g < 28; g++)
    for (let z = 0; z < 18; z++) {
      const x = p + g * 19 + z,
        v = x + 18 + 1;
      u.push(x, x + 1, v, x + 1, v + 1, v);
    }
  {
    const g = s.length / 3;
    (s.push(0, 0, 0.505), o.push(0, 0, 1), t.push(0));
    for (let z = 0; z < 18; z++) u.push(g, p + z + 1, p + z);
  }
  for (const g of [-1, 1]) {
    const z = new t0(0.016, 8, 6);
    z.translate(g * 0.068, 0.028, 0.43);
    const x = s.length / 3,
      v = z.attributes.position,
      n = z.attributes.normal;
    for (let l = 0; l < v.count; l++)
      (s.push(v.getX(l), v.getY(l), v.getZ(l)),
        o.push(n.getX(l), n.getY(l), n.getZ(l)),
        t.push(2));
    for (let l = 0; l < z.index.count; l++) u.push(x + z.index.array[l]);
  }
  const i = u.length,
    d = (g, z = 1, x = [1, 0, 0]) => {
      const v = s.length / 3;
      for (const n of g) (s.push(...n), o.push(...x), t.push(z));
      for (let n = 1; n < g.length - 1; n++) u.push(v, v + n, v + n + 1);
    };
  (d([
    [0, 0, -0.26],
    [0, 0.03, -0.3],
    [0, 0.13, -0.47],
    [0, 0.11, -0.52],
    [0, 0.02, -0.44],
    [0, 0, -0.43],
    [0, -0.02, -0.44],
    [0, -0.11, -0.52],
    [0, -0.13, -0.47],
    [0, -0.03, -0.3],
  ]),
    d([
      [0, 0.1, 0.12],
      [0, 0.13, 0.08],
      [0, 0.155, -0.02],
      [0, 0.14, -0.12],
      [0, 0.085, -0.2],
      [0, 0.07, -0.14],
      [0, 0.1, 0],
    ]));
  for (const g of [-1, 1])
    d(
      [
        [g * 0.08, -0.05, 0.3],
        [g * 0.17, -0.1, 0.25],
        [g * 0.19, -0.11, 0.18],
        [g * 0.15, -0.09, 0.14],
        [g * 0.085, -0.06, 0.22],
      ],
      1,
      [0, 1, 0],
    );
  const y = new Rt();
  (y.setAttribute("position", new xt(s, 3)),
    y.setAttribute("normal", new xt(o, 3)),
    y.setAttribute("aPart", new xt(t, 1)),
    y.setIndex(u),
    y.computeVertexNormals());
  const w = y.attributes.normal;
  for (let g = 0; g <= 28; g++) {
    const z = p + g * 19,
      x = z + 18,
      v = w.getX(z) + w.getX(x),
      n = w.getY(z) + w.getY(x),
      l = w.getZ(z) + w.getZ(x),
      f = Math.hypot(v, n, l) || 1;
    (w.setXYZ(z, v / f, n / f, l / f), w.setXYZ(x, v / f, n / f, l / f));
  }
  return (y.addGroup(0, i, 0), y.addGroup(i, u.length - i, 1), y);
}
function Dn(s, o) {
  const t = new n0({
      color: 16777215,
      roughness: 0.36,
      metalness: 0,
      side: p0,
    }),
    u = new n0({
      color: 16777215,
      roughness: 0.5,
      metalness: 0,
      side: p0,
      transparent: !0,
    });
  for (const [e, r] of [
    [t, !1],
    [u, !0],
  ])
    ((e.onBeforeCompile = (a) => Bn(a, o, r)),
      (e.customProgramCacheKey = () => (r ? "koifin2" : "koi2")),
      Ca(e, s, { shadows: !1, strength: 0.45 }));
  return [t, u];
}
function Bn(s, o, t) {
  ((s.uniforms.uSwimT = o.uSwimT),
    (s.vertexShader = s.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
attribute float aPart;
attribute vec4 aKoi;        // seed, tail phase (radians, integrated on the CPU), curl into the turn, flex (0 = dead, rigid)
uniform float uSwimT;
varying vec3 vKL;
varying float vPart;
varying vec4 vKoi;`,
      )
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
    vKL = position; vPart = aPart; vKoi = aKoi;
    {
      float s = clamp((0.5 - position.z) / 1.02, 0.0, 1.0);                // 0 nose .. 1 tail tip
      float ph = aKoi.y - s * 4.2;
      float amp = aKoi.w * (0.012 + 0.11 * s * s);
      transformed.x += sin(ph) * amp;
      // the curl: the whole body bends along the arc it swims (nose and tail both toward the inside of the turn)
      float zc = position.z - 0.1;
      transformed.x += aKoi.z * zc * zc * 1.2;
      // the fins trail and flutter a little behind the body's own swing
      if (aPart > 0.5 && aPart < 1.5) transformed.x += sin(ph - 1.1) * 0.02 * aKoi.w * (0.3 + s);
    }`,
      )),
    (s.fragmentShader = s.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
varying vec3 vKL;
varying float vPart;
varying vec4 vKoi;
float kh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float kn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(kh(i), kh(i + vec2(1, 0)), f.x), mix(kh(i + vec2(0, 1)), kh(i + vec2(1, 1)), f.x), f.y); }
float kf(vec2 p) { return kn(p) * 0.6 + kn(p * 2.3 + 7.0) * 0.3 + kn(p * 5.1 + 3.0) * 0.1; }`,
      )
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
    float kRough = 0.36, kMetal = 0.0, kEnv = 0.3;
    {
      float seed = vKoi.x, kind = floor(seed * 6.0);
      float ang = atan(vKL.x, vKL.y + 1e-5);                      // round the body from the ridge of the back (the seam: under the belly)
      vec2 q = vec2(vKL.z * 6.0, ang * 0.9) + seed * 37.0;
      float top = smoothstep(-0.02, 0.05, vKL.y);                 // the back (the patterns sit on it)
      // (linear albedos: an ivory white, a deep orange-red, ink black; the old near-1.0 white glowed under the caustics)
      vec3 white = vec3(0.7, 0.66, 0.58), red = vec3(0.62, 0.08, 0.02), black = vec3(0.013, 0.012, 0.013);
      vec3 gold = vec3(0.8, 0.5, 0.13), bronze = vec3(0.3, 0.16, 0.06);
      float p1 = smoothstep(0.52, 0.58, kf(q * 1.1)) * top;
      float p2 = smoothstep(0.62, 0.66, kf(q * 2.4 + 11.0));
      vec3 c = white;
      float net = 0.14;                                                                              // (how dark the scales' rims)
      if (kind < 1.0) c = mix(white, red, p1);                                                       // kohaku
      else if (kind < 2.0) c = mix(mix(white, red, p1), black, p2 * top * 0.95);                      // sanke
      else if (kind < 3.0) c = mix(mix(black, red, p1), white, smoothstep(0.6, 0.66, kf(q * 1.7 + 5.0)) * 0.9);   // showa
      else if (kind < 4.0) { c = gold * (0.85 + 0.3 * kf(q * 3.0)); kMetal = 0.55; kRough = 0.3; kEnv = 0.6; net = 0.3; }   // ogon: metallic
      else if (kind < 5.0) { c = bronze * (0.8 + 0.4 * kf(q * 2.0)); net = 0.5; }                    // chagoi: the net of its scales
      else c = mix(white, red, smoothstep(0.075, 0.06, length(vec2(vKL.x, vKL.z - 0.36))) * top);     // tancho: one red crown
      // the scales: a net of small diamonds from the gills to the tail (the rims darker, rougher), gone where too fine to see
      vec2 sc = vec2(-vKL.z * 44.0, ang * 4.8);
      float sa = sc.x + sc.y, sb = sc.x - sc.y, sw = max(fwidth(sa), fwidth(sb));
      float dl = min(0.5 - abs(fract(sa) - 0.5), 0.5 - abs(fract(sb) - 0.5));
      float rim = (1.0 - smoothstep(0.02, 0.02 + max(0.12, sw), dl)) * (1.0 - smoothstep(0.2, 0.45, sw))
                * smoothstep(0.34, 0.29, vKL.z) * smoothstep(-0.3, -0.25, vKL.z) * step(vPart, 0.5);
      c *= 1.0 - net * rim;
      kRough += 0.16 * rim;
      c *= mix(0.86, 1.0, top);                                                                      // (a shade darker down the flanks)
      if (vPart > 0.5 && vPart < 1.5) {
        // the fins: pale, thin, their rays fanning from the root (the tail from the wrist, the pectorals from behind the gills)
        float ra = vKL.z < -0.24 ? atan(vKL.y, -(vKL.z + 0.27)) * 26.0 : abs(vKL.x) > 0.06 ? atan(vKL.z - 0.3, abs(vKL.x) - 0.075) * 22.0 : (vKL.z + vKL.y * 0.7) * 170.0;
        float ray = sin(ra) * (1.0 - smoothstep(0.8, 2.2, fwidth(ra)));
        c = mix(c, white * 0.95, 0.55) * (1.0 + 0.1 * ray);
        kRough = 0.45;
        ${t ? "diffuseColor.a = 0.52 + 0.16 * ray;" : ""}
      }
      if (vPart > 1.5) { c = vec3(0.008); kRough = 0.12; kEnv = 1.0; }                               // the eyes: black and wet
      if (vKoi.w < 0.01) { c = mix(c, vec3(0.7, 0.68, 0.62), 0.55); kEnv = 1.0; kMetal = 0.0; }        // (the dead: washed out, wet, half out of the water)
      diffuseColor.rgb = c;
    }`,
      )
      .replace(
        "#include <metalnessmap_fragment>",
        `#include <metalnessmap_fragment>
    roughnessFactor = kRough; metalnessFactor = kMetal;`,
      )
      .replace(
        "#include <lights_fragment_end>",
        `#ifdef RE_IndirectSpecular
    radiance *= kEnv;
    #endif
    #include <lights_fragment_end>`,
      )
      .replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
    if (vPart > 0.5 && vPart < 1.5) totalEmissiveRadiance += diffuseColor.rgb * 0.03;          // (a little light through the membrane)`,
      )));
}
function Vn(s, o, t) {
  const u = { uSwimT: { value: 0 } },
    e = Ln(),
    r = 10,
    a = [0, 0, 1, 2, 3, 5, 0, 1, 4, 2],
    p = new Float32Array(r * 4),
    i = [];
  for (let I = 0; I < r; I++) {
    const R = (a[I] + 0.1 + t() * 0.8) / 6;
    t();
    let V, L;
    do ((V = -9 + t() * 12.5), (L = -3.8 + t() * 7.4));
    while (J0(V, L) > -0.9);
    (t(), i.push({ size: 0.42 + t() * 0.26 }), t(), p.set([R, 0, 0, 1], I * 4));
  }
  let d = 918273;
  const y = () => ((d = (d * 16807) % 2147483647), d / 2147483647),
    w = [];
  {
    const I = Yt.b[0] - Yt.a[0],
      R = Yt.b[1] - Yt.a[1],
      V = Math.hypot(I, R),
      L = -R / V,
      K = I / V;
    for (const j of [0.2, 0.5, 0.8])
      for (const O of [-1, 1])
        w.push([
          Yt.a[0] + I * j + L * O * 0.483,
          Yt.a[1] + R * j + K * O * 0.483,
          0.1,
        ]);
  }
  const g = Nn({
      sdf: J0,
      depth: dn,
      waterY: v0,
      rng: y,
      specs: i,
      posts: w,
      onRise: (I, R, V) => o.ripple(I, R, V),
    }),
    z = g.fish;
  e.setAttribute("aKoi", new M0(p, 4));
  const x = Dn(o.causU, u),
    v = new l0(e, x, r);
  ((v.name = "koi"),
    (v.frustumCulled = !1),
    v.layers.set(_e),
    (v.receiveShadow = !0));
  const n = e.clone(),
    l = new Float32Array(12);
  for (let I = 0; I < 3; I++) l.set([(I * 2 + 0.5) / 6, 0, 0, 0], I * 4);
  n.setAttribute("aKoi", new M0(l, 4));
  const f = new l0(n, x, 3);
  ((f.name = "koi_dead"), (f.visible = !1), f.layers.enable(_e));
  const h = new wt(),
    c = new w0(),
    M = new pe(),
    m = new dt(),
    k = new dt(),
    S = [
      [-6.2, -0.4, 0.7],
      [0.4, 1.5, 2.2],
      [-3.5, -1.8, 4],
    ];
  let A = null;
  const b = o.causU.uKoiA.value,
    P = o.causU.uKoiB.value;
  function _(I, R) {
    if (((u.uSwimT.value = R), !v.visible)) {
      for (const V of P) V.x = 0;
      for (let V = 0; V < 3; V++) {
        const L = S[V];
        (M.set(
          0,
          L[2] + Math.sin(R * 0.07 + V) * 0.3,
          Math.PI / 2 + 0.25,
          "YXZ",
        ),
          c.setFromEuler(M),
          k.set(
            L[0] + Math.sin(R * 0.05 + V * 2) * 0.3,
            v0 + 0.012 + Math.sin(R * 0.9 + V) * 0.004,
            L[1] + Math.cos(R * 0.04 + V) * 0.3,
          ),
          h.compose(k, c, m.setScalar(0.5 + V * 0.07)),
          f.setMatrixAt(V, h));
      }
      f.instanceMatrix.needsUpdate = !0;
      return;
    }
    g.step(Math.min(I, 0.1), R, A);
    for (const V of z)
      ((p[V.i * 4 + 1] = V.phase),
        (p[V.i * 4 + 2] = V.bend),
        (p[V.i * 4 + 3] = 0.35 + 0.65 * V.effort),
        M.set(
          -V.pitch,
          V.yaw,
          Math.sin(R * 0.8 + V.i) * 0.04 - V.bend * 0.25,
          "YXZ",
        ),
        c.setFromEuler(M),
        h.compose(k.set(V.x, V.y, V.z), c, m.setScalar(V.size)),
        v.setMatrixAt(V.i, h),
        V.i < bo &&
          (b[V.i].set(V.x, V.y, V.z, V.yaw),
          P[V.i].set(V.size, V.bend, V.phase, p[V.i * 4 + 3])));
    ((v.instanceMatrix.needsUpdate = !0), (e.attributes.aKoi.needsUpdate = !0));
  }
  return {
    school: v,
    dead: f,
    fish: z,
    update: _,
    watch(I) {
      A = I;
    },
    setWorld(I) {
      const R = I === "ruins";
      ((v.visible = !R), (f.visible = R));
    },
  };
}
const Ht = (s, o, t) => new dt(s, o, t);
function Kn() {
  const u = document.createElement("canvas");
  ((u.width = 2048), (u.height = 1024));
  const e = u.getContext("2d");
  e.clearRect(0, 0, 2048, 1024);
  let r = 11;
  const a = () => ((r = (r * 16807) % 2147483647), r / 2147483647),
    p = (y, w) => {
      (e.save(),
        e.translate((y % 4) * 512, Math.floor(y / 4) * 512),
        e.beginPath(),
        e.rect(0, 0, 512, 512),
        e.clip(),
        w(),
        e.restore());
    },
    i = (y, w, g, z, x) => {
      (e.save(),
        e.translate(y, w),
        e.rotate(z),
        (e.fillStyle = x),
        e.beginPath());
      const v = 7;
      for (let n = 0; n <= v * 2; n++) {
        const l = -Math.PI / 2 + (n / (v * 2) - 0.5) * Math.PI * 1.75,
          f = n % 2 === 0,
          h =
            g *
            (f
              ? n === v
                ? 1
                : 0.62 + 0.38 * Math.sin((n / (v * 2)) * Math.PI)
              : 0.3),
          c = Math.cos(l) * h,
          M = Math.sin(l) * h;
        n === 0 ? e.moveTo(c, M) : e.lineTo(c, M);
      }
      (e.closePath(),
        e.fill(),
        (e.strokeStyle = "rgba(80,30,20,0.3)"),
        (e.lineWidth = 1.2));
      for (let n = 0; n < v; n++) {
        const l = -Math.PI / 2 + ((n + 0.5) / v - 0.5) * Math.PI * 1.75;
        (e.beginPath(),
          e.moveTo(0, 0),
          e.lineTo(Math.cos(l) * g * 0.8, Math.sin(l) * g * 0.8),
          e.stroke());
      }
      e.restore();
    };
  (p(0, () => {
    ((e.strokeStyle = "rgba(120,50,40,0.9)"), (e.lineWidth = 3));
    for (let y = 0; y < 16; y++) {
      const w = 512 * (0.14 + a() * 0.72),
        g = 512 * (0.14 + a() * 0.72),
        z = 512 * (0.075 + a() * 0.05);
      (e.beginPath(),
        e.moveTo(512 * 0.5, 512 * 0.52),
        e.lineTo(w, g),
        e.stroke());
      const x = 0.82 + a() * 0.18;
      i(
        w,
        g,
        z,
        a() * 6.28,
        `rgb(${Math.round(242 * x)},${Math.round(220 * x)},${Math.round(206 * x)})`,
      );
    }
  }),
    p(1, () => {
      for (let y = 0; y < 6; y++)
        ((e.fillStyle = `rgba(${90 + a() * 30},${120 + a() * 30},60,1)`),
          e.save(),
          e.translate(512 * (0.2 + a() * 0.6), 512 * (0.2 + a() * 0.6)),
          e.rotate(a() * 6.28),
          e.beginPath(),
          e.ellipse(0, 0, 512 * 0.06, 512 * 0.022, 0, 0, 7),
          e.fill(),
          e.restore());
      for (let y = 0; y < 16; y++) {
        const w = 512 * (0.12 + a() * 0.76),
          g = 512 * (0.12 + a() * 0.76),
          z = 512 * (0.05 + a() * 0.035),
          x = a() * 6.28;
        for (let v = 0; v < 5; v++) {
          const n = x + (v * Math.PI * 2) / 5;
          ((e.fillStyle = `rgb(250,${212 + a() * 24},${226 + a() * 16})`),
            e.beginPath(),
            e.ellipse(
              w + Math.cos(n) * z * 0.55,
              g + Math.sin(n) * z * 0.55,
              z * 0.56,
              z * 0.4,
              n,
              0,
              7,
            ),
            e.fill());
        }
        ((e.fillStyle = "#dc6a94"),
          e.beginPath(),
          e.arc(w, g, z * 0.22, 0, 7),
          e.fill(),
          (e.fillStyle = "#f7e37a"));
        for (let v = 0; v < 6; v++) {
          const n = v * 1.05;
          (e.beginPath(),
            e.arc(
              w + Math.cos(n) * z * 0.26,
              g + Math.sin(n) * z * 0.26,
              2,
              0,
              7,
            ),
            e.fill());
        }
      }
      for (let y = 0; y < 6; y++)
        ((e.fillStyle = "#e88aa8"),
          e.beginPath(),
          e.ellipse(
            512 * (0.15 + a() * 0.7),
            512 * (0.15 + a() * 0.7),
            512 * 0.018,
            512 * 0.026,
            a() * 6,
            0,
            7,
          ),
          e.fill());
    }),
    p(2, () => {
      for (let y = 0; y < 16; y++)
        (e.save(),
          e.translate(512 * (0.15 + a() * 0.7), 512 * (0.15 + a() * 0.7)),
          e.rotate(a() * 6.28),
          (e.fillStyle = `rgb(${50 + a() * 30},${95 + a() * 40},${35 + a() * 20})`),
          e.beginPath(),
          e.ellipse(0, 0, 512 * 0.085, 512 * 0.036, 0, 0, 7),
          e.fill(),
          (e.strokeStyle = "rgba(200,230,150,0.35)"),
          (e.lineWidth = 2),
          e.beginPath(),
          e.moveTo(-512 * 0.08, 0),
          e.lineTo(512 * 0.08, 0),
          e.stroke(),
          e.restore());
    }),
    p(3, () => {
      for (let y = 0; y < 6; y++) {
        const w = 512 * (0.2 + a() * 0.6),
          g = 512 * (0.2 + a() * 0.6),
          z = 512 * (0.1 + a() * 0.04),
          x = a() * 6.28;
        for (let v = 0; v < 5; v++) {
          const n = x + (v * Math.PI * 2) / 5;
          ((e.fillStyle = "#f6eef0"),
            e.beginPath(),
            e.ellipse(
              w + Math.cos(n) * z * 0.5,
              g + Math.sin(n) * z * 0.5,
              z * 0.55,
              z * 0.42,
              n,
              0,
              7,
            ),
            e.fill());
        }
        e.fillStyle = "rgba(160,60,90,0.6)";
        for (let v = 0; v < 8; v++)
          (e.beginPath(),
            e.arc(w + (a() - 0.5) * z * 0.5, g - a() * z * 0.4, 2, 0, 7),
            e.fill());
      }
    }),
    p(4, () => {
      for (let g = 0; g < 11; g++) {
        const z = -0.1 - g * 0.13 + a() * 0.08,
          x = 512 * (0.48 + a() * 0.26);
        (e.save(),
          e.translate(92.16, 419.84),
          e.rotate(z),
          (e.fillStyle = `rgb(${70 + a() * 30},${120 + a() * 30},${45 + a() * 15})`),
          e.beginPath(),
          e.moveTo(0, 0),
          e.quadraticCurveTo(x * 0.5, -512 * 0.05, x, 0),
          e.quadraticCurveTo(x * 0.5, 512 * 0.05, 0, 0),
          e.fill(),
          e.restore());
      }
    }),
    p(5, () => {
      for (let g = 0; g < 140; g++) {
        const z = a() * 6.28,
          x = 512 * (0.2 + a() * 0.24);
        ((e.strokeStyle = `rgb(${30 + a() * 25},${60 + a() * 30},${30 + a() * 15})`),
          (e.lineWidth = 3),
          e.beginPath(),
          e.moveTo(256, 281.6),
          e.lineTo(256 + Math.cos(z) * x, 281.6 + Math.sin(z) * x * 0.6),
          e.stroke());
      }
    }),
    p(6, () => {
      ((e.strokeStyle = "#4a6a28"),
        (e.lineWidth = 4),
        e.beginPath(),
        e.moveTo(512 * 0.5, 512 * 0.98),
        e.quadraticCurveTo(512 * 0.46, 512 * 0.5, 512 * 0.52, 512 * 0.04),
        e.stroke());
      for (let y = 0; y < 22; y++) {
        const w = y / 22,
          g = 512 * (0.95 - w * 0.9),
          z = 512 * (0.5 - 0.03 * Math.sin(w * 3)),
          x =
            512 * 0.36 * Math.sin(Math.PI * (0.15 + w * 0.85)) * (1 - w * 0.4);
        for (const v of [-1, 1])
          ((e.fillStyle = `rgb(${60 + a() * 25},${110 + a() * 30},35)`),
            e.save(),
            e.translate(z, g),
            e.rotate(v * (1.2 - w * 0.3)),
            e.beginPath(),
            e.ellipse(x * 0.5, 0, x * 0.5, 512 * 0.018, 0, 0, 7),
            e.fill(),
            e.restore());
      }
    }),
    p(7, () => {
      const y = e.createLinearGradient(0, 512, 0, 0);
      (y.addColorStop(0, "#fbeef0"),
        y.addColorStop(0.7, "#f5b8c8"),
        y.addColorStop(1, "#e0708f"),
        (e.fillStyle = y),
        e.beginPath(),
        e.moveTo(512 * 0.5, 512 * 0.97),
        e.bezierCurveTo(
          512 * 0.05,
          512 * 0.7,
          512 * 0.2,
          512 * 0.12,
          512 * 0.5,
          512 * 0.03,
        ),
        e.bezierCurveTo(
          512 * 0.8,
          512 * 0.12,
          512 * 0.95,
          512 * 0.7,
          512 * 0.5,
          512 * 0.97,
        ),
        e.fill(),
        (e.strokeStyle = "rgba(200,110,140,0.35)"),
        (e.lineWidth = 2));
      for (let w = -3; w <= 3; w++)
        (e.beginPath(),
          e.moveTo(512 * 0.5, 512 * 0.95),
          e.quadraticCurveTo(
            512 * (0.5 + w * 0.05),
            512 * 0.5,
            512 * (0.5 + w * 0.07),
            512 * 0.1,
          ),
          e.stroke());
    }));
  const d = new io(u);
  return (
    (d.colorSpace = lo),
    (d.anisotropy = 8),
    (d.generateMipmaps = !0),
    (d.minFilter = vs),
    d
  );
}
function Un(s, o) {
  const t = new n0({
      map: s,
      alphaTest: 0.45,
      side: p0,
      roughness: 0.65,
      metalness: 0,
    }),
    u = (r, a) => {
      ((r.uniforms.uWindT = o.uWindT),
        (r.uniforms.uWind = o.uWind),
        (r.uniforms.uSunDirF = o.uSunDirF),
        (r.uniforms.uSunColF = o.uSunColF),
        (r.vertexShader = r.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute vec4 aCard;
attribute vec4 aShade;       // the crown's outward direction (world) + how far out in the crown the card sits (0 deep .. 1 out)
uniform float uWindT, uWind;
varying float vBack;
varying vec3 vShadeN;
varying float vOcc;
vec3 windAt(vec3 wp, float flex, float ph) {
  float gust = 0.55 + 0.45 * sin(uWindT * 0.35 + wp.x * 0.12 - wp.z * 0.08);
  float a = sin(uWindT * 1.7 + ph + wp.x * 0.6) * 0.6 + sin(uWindT * 3.1 + ph * 1.7 + wp.z * 0.9) * 0.4;
  return vec3(a * 0.7 + gust * 0.5, sin(uWindT * 2.3 + ph) * 0.25, a * 0.45) * flex * uWind * gust * 0.06;
}`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
      #ifdef USE_MAP
      vMapUv = vec2((mod(aCard.x, 4.0) + uv.x) * 0.25, (1.0 - floor(aCard.x / 4.0)) * 0.5 + uv.y * 0.5);
      #endif
      vBack = aCard.w; vShadeN = normalize(mat3(viewMatrix) * aShade.xyz); vOcc = aShade.w;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
      {
        vec3 wp0 = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        vec3 wdisp = windAt(wp0, aCard.y, aCard.z) * (1.0 + uv.y);
        transformed += (inverse(mat3(modelMatrix * instanceMatrix)) * wdisp);
      }`,
          )),
        a ||
          ((r.fragmentShader = r.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
uniform vec3 uSunDirF, uSunColF;
varying float vBack;
varying vec3 vShadeN;
varying float vOcc;`,
            )
            .replace(
              "#include <normal_fragment_begin>",
              `#include <normal_fragment_begin>
        normal = normalize(mix(normal, vShadeN, 0.72));                  // (the crown shaded as one round mass, not as flat cards)`,
            )
            .replace(
              "#include <color_fragment>",
              `#include <color_fragment>
        diffuseColor.rgb *= mix(0.42, 1.0, vOcc);`,
            )
            .replace(
              "#include <emissivemap_fragment>",
              `#include <emissivemap_fragment>
        {
          // the low sun through the leaves: bright where you look toward the sun
          vec3 Vw = normalize(cameraPosition - vWorldPosF);
          float thru = pow(max(dot(-Vw, uSunDirF), 0.0), 5.0);
          totalEmissiveRadiance += diffuseColor.rgb * uSunColF * thru * vBack * 0.55;
        }`,
            )
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vWorldPosF;`,
            )),
          (r.vertexShader = r.vertexShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vWorldPosF;`,
            )
            .replace(
              "#include <worldpos_vertex>",
              `#include <worldpos_vertex>
vWorldPosF = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`,
            ))));
    };
  ((t.onBeforeCompile = (r) => u(r, !1)),
    (t.customProgramCacheKey = () => "card2"));
  const e = new za({ depthPacking: ka, map: s, alphaTest: 0.45, side: p0 });
  return (
    (e.onBeforeCompile = (r) => u(r, !0)),
    (e.customProgramCacheKey = () => "card2d"),
    { m: t, d: e }
  );
}
function Fs(s, o, t) {
  const u = [],
    e = [],
    r = [],
    a = [],
    p = new ws(s),
    i = Math.max(2, (s.length - 1) * 3),
    d = p.computeFrenetFrames(i, !1);
  let y = 0;
  const w = new dt();
  for (let z = 0; z <= i; z++) {
    const x = z / i,
      v = p.getPointAt(x),
      n = o[0] + (o[1] - o[0]) * Math.pow(x, 0.8);
    (z > 0 && (y += v.distanceTo(w)), w.copy(v));
    const l = d.normals[z],
      f = d.binormals[z];
    for (let h = 0; h <= t; h++) {
      const c = (h / t) * Math.PI * 2,
        M = Math.cos(c),
        m = Math.sin(c),
        k = M * l.x + m * f.x,
        S = M * l.y + m * f.y,
        A = M * l.z + m * f.z;
      (u.push(v.x + k * n, v.y + S * n, v.z + A * n),
        e.push(k, S, A),
        r.push((h / t) * Math.PI * 2 * Math.max(n, 0.04), y));
    }
  }
  for (let z = 0; z < i; z++)
    for (let x = 0; x < t; x++) {
      const v = z * (t + 1) + x,
        n = v + t + 1;
      a.push(v, n, v + 1, v + 1, n, n + 1);
    }
  const g = new Rt();
  return (
    g.setAttribute("position", new xt(u, 3)),
    g.setAttribute("normal", new xt(e, 3)),
    g.setAttribute("uv", new xt(r, 2)),
    g.setIndex(a),
    g
  );
}
function Ws(s) {
  let o = 0,
    t = 0;
  for (const y of s) ((o += y.attributes.position.count), (t += y.index.count));
  const u = new Float32Array(o * 3),
    e = new Float32Array(o * 3),
    r = new Float32Array(o * 2),
    a = new Uint32Array(t);
  let p = 0,
    i = 0;
  for (const y of s) {
    (u.set(y.attributes.position.array, p * 3),
      e.set(y.attributes.normal.array, p * 3),
      r.set(y.attributes.uv.array, p * 2));
    for (let w = 0; w < y.index.count; w++) a[i + w] = y.index.array[w] + p;
    ((p += y.attributes.position.count), (i += y.index.count));
  }
  const d = new Rt();
  return (
    d.setAttribute("position", new vt(u, 3)),
    d.setAttribute("normal", new vt(e, 3)),
    d.setAttribute("uv", new vt(r, 2)),
    d.setIndex(new vt(a, 1)),
    d
  );
}
function En(s, o) {
  const t = [],
    u = [],
    e = Ht(0, 1, 0),
    r = new dt(),
    a = new dt(),
    p = () => Ht(s() - 0.5, s() - 0.5, s() - 0.5);
  function i(w, g, z, x, v) {
    const n = [w.clone()],
      l = g.clone(),
      f = w.clone(),
      h = v === 0 ? 7 : 5;
    for (let m = 0; m < h; m++)
      (l
        .addScaledVector(p(), o.wobble ?? 0.35)
        .addScaledVector(e, (o.rise ?? 0.08) - (o.droop ?? 0) * v * 0.08)
        .normalize(),
        f.addScaledVector(l, z / h),
        n.push(f.clone()));
    const c = Math.max(0.012, x * (o.taper ?? 0.55));
    if (
      (t.push(Fs(n, [x, c], v === 0 ? 10 : v === 1 ? 7 : 5)), v >= o.levels)
    ) {
      u.push({ p: f.clone(), d: l.clone(), pts: n });
      return;
    }
    const M = o.kids[v];
    for (let m = 0; m < M; m++) {
      const k =
          (o.from ?? 0.35) +
          (1 - (o.from ?? 0.35)) * ((m + 0.3 + s() * 0.5) / M),
        S = n[Math.min(n.length - 1, Math.round(k * (n.length - 1)))];
      a.crossVectors(l, p()).normalize();
      const A = l
        .clone()
        .applyAxisAngle(a, (o.angle ?? 0.7) * (0.7 + s() * 0.6));
      (r.copy(A),
        (r.y = 0),
        r.lengthSq() > 1e-4 &&
          o.spreadOut &&
          A.addScaledVector(r.normalize(), o.spreadOut).normalize(),
        i(
          S,
          A,
          z * (o.lenRatio ?? 0.62) * (0.8 + s() * 0.4),
          Math.max(0.015, c * (0.8 + 0.4 * (1 - k))),
          v + 1,
        ));
    }
  }
  const d = Ht(o.at[0], Me(o.at[0], o.at[1]) - 0.05, o.at[1]),
    y = Ht(o.lean?.[0] ?? 0, 1, o.lean?.[1] ?? 0).normalize();
  return (i(d, y, o.height * 0.42, o.r0, 0), { geo: Ws(t), tips: u });
}
function qn(s, o, t) {
  const u = new Kt();
  u.name = "flora";
  const e = {
      uWindT: { value: 0 },
      uWind: { value: 1 },
      uSunDirF: { value: new dt(-0.83, 0.27, 0.49).normalize() },
      uSunColF: { value: new Xt(1, 0.75, 0.45) },
    },
    r = Kn(),
    a = Un(r, e),
    p = At("garden_bark"),
    i = At("ruin_char"),
    d = [],
    y = [],
    w = [],
    g = [],
    z = new w0(),
    x = new pe(),
    v = new wt(),
    n = new dt(),
    l = new dt();
  let f = null;
  const h = (N) => {
      if (!f) return [0, 1, 0, 1];
      const H = N.clone().sub(f.c),
        Q = H.length() || 1;
      return [
        H.x / Q,
        H.y / Q + 0.25,
        H.z / Q,
        Math.min(1, Math.max(0, (Q / f.r - 0.35) / 0.65)),
      ];
    },
    c = (N, H, Q, W, B = 1, F = 1, E = null) => {
      (E
        ? z.setFromUnitVectors(Ht(0, 0, 1), E)
        : (x.set(t() * Math.PI * 2, t() * Math.PI * 2, t() * Math.PI * 2),
          z.setFromEuler(x)),
        v.compose(N, z, n.set(H, H, H)),
        g.push({
          m: v.clone(),
          cell: Q,
          flex: B,
          ph: t() * 6.28,
          back: F,
          c: W,
          sh: h(N),
        }));
    },
    M = (N, H = 0.12) => {
      const Q = Array.isArray(N) ? N[Math.floor(t() * N.length)] : N,
        W = new Xt(Q),
        B = 1 + (t() - 0.5) * H * 2;
      return W.multiplyScalar(B);
    },
    m = [
      {
        name: "cherry",
        at: Ie.cherry,
        height: 5.6,
        lean: [0.12, 0.42],
        r0: 0.21,
        levels: 3,
        kids: [5, 4, 3],
        angle: 0.75,
        lenRatio: 0.66,
        droop: 0.55,
        spreadOut: 0.5,
        wobble: 0.3,
        cardsPerTip: 22,
        cell: 1,
        size: [0.34, 0.5],
        color: [["#fff6f8", "#ffeef3", "#fde4ec"], 0.05],
        cluster: 0.62,
        back: 1.2,
      },
      {
        name: "mapleA",
        at: [5.2, -6.4],
        height: 4.6,
        lean: [-0.05, 0.08],
        r0: 0.14,
        levels: 3,
        kids: [4, 4, 3],
        angle: 0.8,
        lenRatio: 0.62,
        spreadOut: 0.7,
        wobble: 0.28,
        cardsPerTip: 20,
        cell: 0,
        size: [0.3, 0.44],
        color: [["#c8281a", "#d8421c", "#b01e14", "#e05a1e", "#9c1a12"], 0.15],
        cluster: 0.46,
        back: 1.6,
      },
      {
        name: "mapleB",
        at: [-9.8, 5.3],
        height: 4,
        lean: [0.1, -0.1],
        r0: 0.12,
        levels: 3,
        kids: [4, 3, 3],
        angle: 0.8,
        lenRatio: 0.62,
        spreadOut: 0.7,
        wobble: 0.3,
        cardsPerTip: 20,
        cell: 0,
        size: [0.3, 0.42],
        color: [["#e0601a", "#d24a16", "#f07a22", "#c83c14"], 0.15],
        cluster: 0.44,
        back: 1.6,
      },
      {
        name: "mapleC",
        at: [7.6, 6.2],
        height: 3.2,
        lean: [0, 0],
        r0: 0.09,
        levels: 3,
        kids: [3, 3, 3],
        angle: 0.85,
        lenRatio: 0.6,
        spreadOut: 0.6,
        wobble: 0.3,
        cardsPerTip: 18,
        cell: 0,
        size: [0.28, 0.4],
        color: [["#f0a020", "#e8b030", "#d88a18", "#f4c040"], 0.15],
        cluster: 0.42,
        back: 1.6,
      },
      {
        name: "pine",
        at: [-9.2, -7.6],
        height: 3.6,
        lean: [0.35, 0.15],
        r0: 0.16,
        levels: 2,
        kids: [5, 3],
        angle: 1.15,
        lenRatio: 0.7,
        spreadOut: 0.9,
        wobble: 0.22,
        rise: -0.02,
        cardsPerTip: 40,
        cell: 5,
        size: [0.22, 0.34],
        color: ["#7e9a6a", 0.12],
        cluster: 0.5,
        flat: !0,
        back: 0.6,
      },
    ];
  for (const N of m) {
    const H = En(t, N),
      Q = new bt(H.geo, p);
    ((Q.castShadow = !0),
      (Q.receiveShadow = !0),
      (Q.name = N.name),
      u.add(Q),
      d.push(Q),
      y.push({ x: N.at[0], z: N.at[1], r: N.r0 + 0.15 }));
    {
      const W = Ht(0, 0, 0);
      for (const F of H.tips) W.add(F.p);
      W.divideScalar(Math.max(1, H.tips.length));
      let B = 0.5;
      for (const F of H.tips) B = Math.max(B, F.p.distanceTo(W));
      f = { c: W, r: B + N.cluster };
    }
    w.push({ x: f.c.x, z: f.c.z, r: f.r });
    for (const W of H.tips)
      for (let B = 0; B < N.cardsPerTip; B++) {
        const F = W.pts[Math.max(0, W.pts.length - 1 - Math.floor(t() * 3))],
          E = N.cluster * Math.cbrt(t()),
          Y = (t() - 0.5) * 2,
          et = (t() - 0.5) * (N.flat ? 0.45 : 1.4),
          nt = (t() - 0.5) * 2;
        l.set(F.x + Y * E, F.y + et * E + (N.flat ? 0.08 : 0), F.z + nt * E);
        const it = N.size[0] + t() * (N.size[1] - N.size[0]);
        (c(
          l.clone(),
          it,
          N.cell,
          M(N.color[0], N.color[1]),
          1,
          N.back,
          N.flat
            ? Ht((t() - 0.5) * 0.4, 1, (t() - 0.5) * 0.4).normalize()
            : null,
        ),
          N.cell === 1 &&
            t() < 0.12 &&
            c(
              l.clone().add(Ht(0.05, -0.03, 0.04)),
              it * 0.6,
              2,
              M("#b8d890", 0.1),
              1,
              1,
            ));
      }
    f = null;
  }
  const k = [],
    S = new n0({ color: 8362570, roughness: 0.45 });
  for (let N = 0; N < 40; N++) {
    const H = -12.6 + t() * 1.7,
      Q = -9.9 + t() * 9.9,
      W = 5.8 + t() * 2.8,
      B = 0.045 + t() * 0.03,
      F = Ht((t() - 0.3) * 0.12, 1, (t() - 0.5) * 0.12).normalize(),
      E = [];
    for (let et = 0; et <= 6; et++)
      E.push(
        Ht(H, 0, Q)
          .addScaledVector(F, (W * et) / 6)
          .add(Ht(0, 0, 0).addScaledVector(Ht(0.1, 0, 0), (et / 6) ** 2 * 0.3)),
      );
    const Y = Fs(E, [B, B * 0.8], 7);
    (k.push({ g: Y, x: H, z: Q, h: W, r: B, lean: F, pts: E }),
      y.push({ x: H, z: Q, r: B + 0.08 }));
    for (let et = 0; et < 34; et++) {
      const nt = 0.4 + Math.sqrt(t()) * 0.6,
        it = Ht(H, 0, Q).addScaledVector(F, W * nt);
      c(
        it.add(Ht((t() - 0.5) * 1.1, (t() - 0.5) * 0.5, (t() - 0.5) * 1.1)),
        0.7 + t() * 0.35,
        4,
        M(["#dfe8c0", "#c8d8a0", "#e8ecc8"], 0.1),
        1.4,
        1.3,
      );
    }
  }
  const A = Ws(k.map((N) => N.g));
  ((S.onBeforeCompile = (N) => {
    ((N.vertexShader = N.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
varying vec2 vBUv;`,
      )
      .replace(
        "#include <uv_vertex>",
        `#include <uv_vertex>
vBUv = uv;`,
      )),
      (N.fragmentShader = N.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec2 vBUv;`,
        )
        .replace(
          "#include <color_fragment>",
          `#include <color_fragment>
      float node = smoothstep(0.02, 0.0, abs(fract(vBUv.y / 0.32) - 0.5) - 0.47);
      diffuseColor.rgb *= 0.85 + 0.25 * sin(vBUv.y * 3.1 + vBUv.x * 2.0) * 0.2;
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.75, 0.8, 0.55), node);`,
        )));
  }),
    (S.customProgramCacheKey = () => "bamboo2"));
  const b = new bt(A, S);
  ((b.name = "bamboo"), (b.castShadow = !0), (b.receiveShadow = !0), u.add(b));
  const P = new bt(
    Ws(
      k.map((N) => {
        const H = 0.4 + t() * 1.6,
          Q = [
            Ht(N.x, 0, N.z),
            Ht(N.x, 0, N.z).addScaledVector(N.lean, H * 0.5),
            Ht(N.x, 0, N.z).addScaledVector(N.lean, H),
          ];
        return Fs(Q, [N.r, N.r * 0.9], 7);
      }),
    ),
    i,
  );
  ((P.name = "bamboo_burnt"), (P.visible = !1), (P.castShadow = !0), u.add(P));
  const _ = [],
    I = [
      [9.8, -9.2],
      [11.6, -6.8],
      [11.8, -2.4],
      [11.2, 3.4],
      [9.6, 8.6],
      [5.2, 9.4],
      [-4.8, 9.6],
      [-7.8, 8.8],
      [-11.4, 8.2],
      [-6.2, -9.4],
      [0.8, -9.6],
      [3.2, -8.6],
      [-10.6, -4],
      [6.8, -1.2],
      [-8.6, 2.6],
    ],
    R = ["#f26a9a", "#e8327a", "#fbe8ee", "#f58c6c", "#d94a8a"];
  for (const [N, H] of I) {
    const Q = 0.55 + t() * 0.45,
      W = 0.4 + t() * 0.25,
      B = R[Math.floor(t() * R.length)];
    (y.push({ x: N, z: H, r: Q * 0.8 }),
      _.push([N, H, Q, W]),
      (f = { c: Ht(N, 0.05, H), r: Math.max(Q, W) }));
    for (let F = 0; F < 160; F++) {
      const E = t() * Math.PI * 2,
        Y = Math.sqrt(t()),
        et = Math.sqrt(1 - Y * Y) * W * (0.7 + 0.3 * t()),
        nt = Ht(N + Math.cos(E) * Y * Q, et + 0.05, H + Math.sin(E) * Y * Q),
        it = Ht(Math.cos(E) * Y, et / W + 0.3, Math.sin(E) * Y).normalize(),
        lt = t() < 0.42;
      c(
        nt,
        lt ? 0.2 + t() * 0.08 : 0.22 + t() * 0.1,
        lt ? 3 : 2,
        lt ? M(B, 0.08) : M("#ffffff", 0.15),
        0.35,
        lt ? 0.9 : 1.1,
        it.lerp(Ht(t() - 0.5, t() - 0.5, t() - 0.5), 0.5).normalize(),
      );
    }
  }
  f = null;
  const V = [
    [-10.8, -1.2],
    [-11.4, 0.6],
    [-9.2, -2.8],
    [-6.6, -4.4],
    [-2.2, -4.9],
    [-0.6, 3.9],
    [2.4, 3.6],
    [-7.8, 3.2],
    [-11.8, -6.2],
    [-12.2, 7.2],
  ];
  for (const [N, H] of V) {
    const Q = 7 + Math.floor(t() * 5);
    for (let W = 0; W < Q; W++) {
      const B = (W / Q) * Math.PI * 2 + t() * 0.4,
        F = 0.55 + t() * 0.3,
        E = Ht(
          N + Math.cos(B) * F * 0.35,
          0.28 + t() * 0.1,
          H + Math.sin(B) * F * 0.35,
        ),
        Y = Ht(Math.cos(B), 0.9 + t() * 0.4, Math.sin(B)).normalize(),
        et = Ht(-Math.sin(B), 0.35, Math.cos(B)).normalize();
      (z.setFromRotationMatrix(
        new wt().makeBasis(et.clone().cross(Y).normalize(), Y, et),
      ),
        v.compose(E, z, n.set(F, F, F)),
        g.push({
          m: v.clone(),
          cell: 6,
          flex: 0.8,
          ph: t() * 6.28,
          back: 1.2,
          c: M("#ffffff", 0.12),
        }));
    }
  }
  const L = [
    [-8.9, -1.9],
    [-8.4, 1.4],
    [-6.4, 2.4],
    [-1.2, 3.3],
    [1.9, 3.1],
    [3, 1.2],
    [-5.6, -3.4],
    [-9.3, 0.2],
  ];
  for (const [N, H] of L) {
    for (let Q = 0; Q < 9; Q++) {
      const W = Ht(
          N + (t() - 0.5) * 0.5,
          0.3 + t() * 0.12,
          H + (t() - 0.5) * 0.5,
        ),
        B = t() * 6.28;
      (z.setFromEuler(x.set((t() - 0.5) * 0.3, B, (t() - 0.5) * 0.3)),
        v.compose(W, z, n.set(0.16, 0.75, 0.16)),
        g.push({
          m: v.clone(),
          cell: 4,
          flex: 0.6,
          ph: t() * 6.28,
          back: 1.2,
          c: M("#e8f0c8", 0.1),
        }));
    }
    for (let Q = 0; Q < 3; Q++)
      c(
        Ht(N + (t() - 0.5) * 0.4, 0.62 + t() * 0.15, H + (t() - 0.5) * 0.4),
        0.16,
        3,
        M("#6a3fb8", 0.1),
        0.6,
        0.8,
      );
  }
  const K = [];
  {
    const N = new Ms(0.5, 28, 0.18, Math.PI * 2 - 0.36).rotateX(-Math.PI / 2),
      H = document.createElement("canvas");
    H.width = H.height = 256;
    const Q = H.getContext("2d"),
      W = Q.createRadialGradient(128, 128, 10, 128, 128, 128);
    (W.addColorStop(0, "#5f8a2e"),
      W.addColorStop(0.85, "#3f6a22"),
      W.addColorStop(1, "#6b3a28"),
      (Q.fillStyle = W),
      Q.fillRect(0, 0, 256, 256),
      (Q.strokeStyle = "rgba(170,210,110,0.35)"),
      (Q.lineWidth = 2));
    for (let nt = 0; nt < 18; nt++) {
      const it = (nt / 18) * 6.28;
      (Q.beginPath(),
        Q.moveTo(128, 128),
        Q.lineTo(128 + Math.cos(it) * 124, 128 + Math.sin(it) * 124),
        Q.stroke());
    }
    const B = new io(H);
    B.colorSpace = lo;
    const F = new n0({ map: B, roughness: 0.35, side: p0 }),
      E = 26,
      Y = new l0(N, F, E);
    ((Y.name = "lilypads"), (Y.receiveShadow = !0));
    let et = 0;
    for (let nt = 0; nt < 400 && et < E; nt++) {
      const it = -8.8 + t() * 6,
        lt = -3.2 + t() * 5.2;
      if (
        J0(it, lt) > -0.35 ||
        K.some((yt) => Math.hypot(yt.x - it, yt.z - lt) < 0.55)
      )
        continue;
      const ht = 0.28 + t() * 0.3;
      (K.push({ x: it, z: lt, s: ht, rot: t() * 6.28, ph: t() * 6.28 }), et++);
    }
    ((Y.count = K.length), u.add(Y), (K.mesh = Y));
  }
  for (let N = 0; N < 3; N++) {
    const H = K[(N * 5) % K.length];
    if (!H) break;
    for (let Q = 0; Q < 9; Q++) {
      const W = (Q / 9) * Math.PI * 2,
        B = 0.55 + (Q % 2) * 0.25,
        F = Ht(Math.cos(W) * B, 1, Math.sin(W) * B).normalize(),
        E = Ht(
          H.x + Math.cos(W) * 0.05,
          v0 + 0.07,
          H.z + Math.sin(W) * 0.05,
        ).addScaledVector(F, 0.05),
        Y = Ht(-Math.sin(W), 0, Math.cos(W));
      (z.setFromRotationMatrix(
        new wt().makeBasis(Y, F, Y.clone().cross(F).normalize()),
      ),
        v.compose(E, z, n.set(0.14, 0.14, 0.14)),
        g.push({
          m: v.clone(),
          cell: 7,
          flex: 0.1,
          ph: 0,
          back: 1.4,
          c: M("#ffffff", 0.05),
        }));
    }
  }
  const j = [];
  (() => {
    const N = [],
      H = [],
      Q = [];
    for (let F = 0; F <= 4; F++) {
      const E = F / 4,
        Y = 0.012 * (1 - E * 0.9);
      (N.push(-Y, E, 0, Y, E, 0), Q.push(0, E, 1, E));
    }
    for (let F = 0; F < 4; F++) {
      const E = F * 2;
      H.push(E, E + 1, E + 2, E + 1, E + 3, E + 2);
    }
    const B = new Rt();
    return (
      B.setAttribute("position", new xt(N, 3)),
      B.setAttribute("uv", new xt(Q, 2)),
      B.setIndex(H),
      B.computeVertexNormals(),
      B
    );
  })();
  for (let N = 0; N < 420; N++) {
    let H,
      Q,
      W = !1;
    for (let E = 0; E < 20 && !W; E++) {
      ((H = -12.6 + t() * 25.2), (Q = -10.6 + t() * 21.2));
      const Y = J0(H, Q),
        et = Bo(H, Q);
      W =
        Y > 0.25 &&
        et > 0.5 &&
        (Y < 1.4 ||
          (et > 0.55 && et < 1.1) ||
          Math.abs(H) > 11.6 ||
          Math.abs(Q) > 9.6 ||
          t() < 0.15);
    }
    if (!W) continue;
    const B = 8 + Math.floor(t() * 10),
      F = Me(H, Q);
    for (let E = 0; E < B; E++)
      j.push([
        H + (t() - 0.5) * 0.22,
        F,
        Q + (t() - 0.5) * 0.22,
        t() * 6.28,
        0.18 + t() * 0.24,
        (t() - 0.5) * 0.7,
      ]);
  }
  for (let N = 0; N < j.length; N++) (t(), t());
  const O = new m0(1, 1).translate(0, 0.35, 0),
    J = new Float32Array(g.length * 4),
    tt = new Float32Array(g.length * 4),
    st = new l0(O, a.m, g.length);
  ((st.name = "leaves"),
    (st.customDepthMaterial = a.d),
    (st.castShadow = !0),
    (st.receiveShadow = !0));
  for (let N = 0; N < g.length; N++) {
    const H = g[N];
    (st.setMatrixAt(N, H.m),
      st.setColorAt(N, H.c),
      J.set([H.cell, H.flex, H.ph, H.back], N * 4),
      tt.set(H.sh || [0, 1, 0, 1], N * 4));
  }
  (O.setAttribute("aCard", new M0(J, 4)),
    O.setAttribute("aShade", new M0(tt, 4)));
  const G = new l0(
    new t0(1, 14, 10),
    new n0({ color: 1714704, roughness: 0.9 }),
    _.length,
  );
  (_.forEach(([N, H, Q, W], B) => {
    (v.compose(
      l.set(N, 0.02, H),
      z.identity(),
      n.set(Q * 0.72, W * 0.8, Q * 0.72),
    ),
      G.setMatrixAt(B, v));
  }),
    (G.castShadow = !0),
    (G.receiveShadow = !0),
    (G.name = "shrub_cores"),
    u.add(G),
    u.add(st));
  const q = 70,
    U = new m0(0.035, 0.028),
    Z = new n0({
      color: 16769514,
      roughness: 0.6,
      side: p0,
      emissive: 3809832,
    }),
    ot = new l0(U, Z, q);
  ((ot.name = "petals"), (ot.frustumCulled = !1));
  const $ = [],
    C = (N, H) => {
      const Q = t() * 6.28,
        W = Math.sqrt(t()) * 2.6;
      ((N.x = Ie.cherry[0] + 0.5 + Math.cos(Q) * W),
        (N.z = Ie.cherry[1] + 1.8 + Math.sin(Q) * W),
        (N.y = H ? 0.3 + t() * 4 : 3.2 + t() * 1.4),
        (N.vy = -(0.25 + t() * 0.2)),
        (N.ph = t() * 6.28),
        (N.spin = 1 + t() * 3),
        (N.state = 0),
        (N.t = 0),
        (N.rx = t() * 6),
        (N.rz = t() * 6));
    };
  for (let N = 0; N < q; N++) {
    const H = {};
    (C(H, !0), $.push(H));
  }
  u.add(ot);
  const T = (N) => {
    const H = N === "ruins";
    ((st.visible = !H),
      (G.visible = !H),
      (ot.visible = !H),
      (K.mesh.visible = !H),
      (b.visible = !H),
      (P.visible = H));
    for (const Q of d) Q.material = H ? i : p;
    e.uWind.value = H ? 0 : 1;
  };
  function D(N, H) {
    if (((e.uWindT.value = H), !ot.visible)) return;
    const Q = 0.25 + 0.2 * Math.sin(H * 0.35);
    for (let W = 0; W < q; W++) {
      const B = $[W];
      if (B.state === 0) {
        ((B.x += (Q + Math.sin(H * 1.3 + B.ph) * 0.25) * N),
          (B.z += Math.cos(H * 1.1 + B.ph) * 0.2 * N),
          (B.y += B.vy * N * (0.7 + 0.5 * Math.sin(H * 3 + B.ph))),
          (B.rx += B.spin * N),
          (B.rz += B.spin * 0.7 * N));
        const F = J0(B.x, B.z) < 0 ? v0 + 0.004 : Me(B.x, B.z) + 0.01;
        B.y <= F &&
          ((B.y = F),
          (B.state = J0(B.x, B.z) < 0 ? 1 : 2),
          (B.t = 0),
          (B.rx = -Math.PI / 2),
          (B.rz = 0),
          B.state === 1 && o.ripple(B.x, B.z, 0.35));
      } else
        ((B.t += N),
          B.state === 1 &&
            ((B.x += 0.03 * N), (B.z += Math.sin(H * 0.2 + B.ph) * 0.02 * N)),
          B.t > (B.state === 1 ? 25 : 12) && C(B, !1));
      (z.setFromEuler(x.set(B.rx, B.ph, B.rz)),
        v.compose(
          l.set(B.x, B.y, B.z),
          z,
          n.setScalar(
            B.state && B.t > (B.state === 1 ? 23 : 10)
              ? Math.max(0.01, 1 - (B.t - (B.state === 1 ? 23 : 10)) / 2)
              : 1,
          ),
        ),
        ot.setMatrixAt(W, v));
    }
    ot.instanceMatrix.needsUpdate = !0;
    for (let W = 0; W < K.length; W++) {
      const B = K[W];
      (z.setFromEuler(
        x.set(
          Math.sin(H * 0.7 + B.ph) * 0.03,
          B.rot + Math.sin(H * 0.1 + B.ph) * 0.1,
          Math.cos(H * 0.6 + B.ph) * 0.03,
        ),
      ),
        v.compose(l.set(B.x, v0 + 0.006, B.z), z, n.set(B.s, 1, B.s)),
        K.mesh.setMatrixAt(W, v));
    }
    K.mesh.instanceMatrix.needsUpdate = !0;
  }
  return {
    group: u,
    circles: y,
    trees: w,
    update: D,
    setWorld: T,
    U: e,
    leaves: st,
    bamboo: b,
  };
}
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
function Hn(s, o) {
  const t = new Kt();
  t.name = "props";
  const u = [],
    e = Gn(),
    r = [],
    a = (st, G, q) => {
      let U = 0;
      for (; U < 8 && J0(st + Math.cos(q) * U, G + Math.sin(q) * U) < 0;)
        U += 0.03;
      return [st + Math.cos(q) * U, G + Math.sin(q) * U];
    };
  for (const [st, G, q] of [
    [-5, -0.8, 22],
    [0.7, 1, 16],
  ])
    for (let U = 0; U < q; U++) {
      const Z = (U / q) * Math.PI * 2 + o() * 0.2,
        [ot, $] = a(st, G, Z);
      if (
        J0(ot, $) > 0.3 ||
        Math.hypot(ot - Yt.a[0], $ - Yt.a[1]) < 1 ||
        Math.hypot(ot - Yt.b[0], $ - Yt.b[1]) < 1 ||
        Math.hypot(ot - Ie.akane[0], $ - Ie.akane[1]) < 1.1 ||
        Bo(ot, $) < 0.7
      )
        continue;
      const C = 0.22 + o() * 0.32;
      r.push({
        x: ot + (o() - 0.5) * 0.15,
        y: v0 + C * 0.15,
        z: $ + (o() - 0.5) * 0.15,
        s: [C * (1 + o() * 0.6), C * (0.55 + o() * 0.35), C * (1 + o() * 0.5)],
        rot: o() * 6.28,
        wet: !0,
      });
    }
  for (const [st, G, q] of [
    [6.2, -1.6, 0.7],
    [-10.2, -6, 0.9],
    [9.6, 4.4, 0.6],
    [-4.2, 6.6, 0.75],
    [1.5, 7.4, 0.5],
    [-11.8, 3, 0.55],
    [10.4, -4.6, 0.5],
    [-1.6, -7.6, 0.6],
  ])
    (r.push({
      x: st,
      y: Me(st, G) + q * 0.1,
      z: G,
      s: [q * 1.2, q * 0.7, q],
      rot: o() * 6.28,
    }),
      u.push({ x: st, z: G, r: q * 0.95 }));
  const p = r.map((st) => ({
      x: st.x,
      z: st.z,
      r: Math.max(st.s[0], st.s[2]) * 0.92,
    })),
    i = [Ho(o, 3), Ho(o, 3), Ho(o, 3)],
    d = new wt(),
    y = new w0(),
    w = new pe(),
    g = new dt(),
    z = new dt();
  i.map((st, G) => {
    const q = r.filter((Z, ot) => ot % 3 === G),
      U = new l0(st, e, q.length);
    return (
      q.forEach((Z, ot) => {
        (y.setFromEuler(w.set((o() - 0.5) * 0.3, Z.rot, (o() - 0.5) * 0.3)),
          d.compose(z.set(Z.x, Z.y, Z.z), y, g.set(...Z.s)),
          U.setMatrixAt(ot, d));
      }),
      (U.castShadow = !0),
      (U.receiveShadow = !0),
      U.layers.enable(_e),
      (U.name = "rocks" + G),
      t.add(U),
      U
    );
  });
  {
    const st = Ho(o, 2),
      G = [
        [7.8, -8.6],
        [7.1, -9.3],
        [6.3, -9.9],
        [-6.2, 6],
        [-7, 6.9],
        [-7.9, 7.6],
      ];
    for (const [U, Z] of G) p.push({ x: U, z: Z, r: 0.3 });
    const q = new l0(st, e, G.length);
    ((q.name = "steps"),
      (q.receiveShadow = !0),
      G.forEach(([U, Z], ot) => {
        (y.setFromEuler(w.set(0, o() * 6, 0)),
          d.compose(z.set(U, Me(U, Z) - 0.02, Z), y, g.set(0.28, 0.06, 0.24)),
          q.setMatrixAt(ot, d));
      }),
      t.add(q));
  }
  const x = new Kt();
  x.name = "lantern";
  const v = Ie.lantern[0],
    n = Ie.lantern[1],
    l = Me(v, n);
  new n0({ color: 9078396, roughness: 0.9 });
  const f = [
      [new Pt(0.34, 0.4, 0.2, 6), 0.1],
      [new Pt(0.1, 0.13, 0.8, 12), 0.6],
      [new Pt(0.3, 0.24, 0.14, 6), 1.07],
      [new Pt(0.22, 0.22, 0.32, 6, 1, !0), 1.3],
      [new Pt(0.05, 0.4, 0.3, 6), 1.6],
      [new t0(0.075, 12, 8), 1.78],
    ],
    h = new n0({ color: 9210240, roughness: 0.92 });
  ((h.onBeforeCompile = (st) => {
    ((st.vertexShader = st.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
varying vec3 vLW;`,
      )
      .replace(
        "#include <worldpos_vertex>",
        `#include <worldpos_vertex>
vLW = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
      )),
      (st.fragmentShader = st.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec3 vLW;
float gH(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }`,
        )
        .replace(
          "#include <color_fragment>",
          `#include <color_fragment>
diffuseColor.rgb *= 0.8 + 0.3 * gH(floor(vLW * 260.0)) * 0.6 + 0.15 * sin(vLW.y * 9.0 + vLW.x * 5.0);`,
        )));
  }),
    (h.customProgramCacheKey = () => "granite2"));
  const c = f.map(([st, G]) => {
    const q = new bt(st, h);
    return (
      (q.position.y = G),
      (q.castShadow = !0),
      (q.receiveShadow = !0),
      x.add(q),
      q
    );
  });
  ((c[3].material = h.clone()), (c[3].material.side = p0));
  const M = new bt(
    new Pt(0.17, 0.17, 0.26, 6),
    new n0({
      color: 2759180,
      emissive: 16757850,
      emissiveIntensity: 0.9,
      roughness: 1,
    }),
  );
  ((M.position.y = 1.3), x.add(M));
  const m = new No(16754768, 0.35, 3, 2);
  (m.position.set(0, 1.46, 0),
    (m.userData.noActor = !0),
    x.add(m),
    x.position.set(v, l, n),
    t.add(x),
    u.push({ x: v, z: n, r: 0.42 }));
  const k = new Kt();
  k.name = "bridge";
  const S = new dt(Yt.a[0], Me(...Yt.a), Yt.a[1]),
    A = new dt(Yt.b[0], Me(...Yt.b), Yt.b[1]),
    b = S.distanceTo(A),
    P = A.clone().sub(S).normalize(),
    _ = new dt(-P.z, 0, P.x),
    I = (st) =>
      S.clone()
        .lerp(A, st)
        .add(new dt(0, Yt.rise * Math.sin(Math.PI * st), 0)),
    R = new Ja({
      color: 10231314,
      roughness: 0.42,
      clearcoat: 0.6,
      clearcoatRoughness: 0.35,
    }),
    V = At("wood_oak_pale"),
    L = [],
    K = 26;
  for (let st = 0; st < K; st++) {
    const G = (st + 0.5) / K,
      q = I(G),
      U = I(G + 0.01),
      Z = U.clone().sub(q).normalize(),
      ot = new qt(Yt.w, 0.05, (b / K) * 0.94),
      $ = new bt(ot, V);
    ($.position.copy(q),
      $.quaternion.setFromRotationMatrix(
        new wt().makeBasis(_, Z.clone().cross(_).negate().normalize(), Z),
      ),
      ($.castShadow = !0),
      ($.receiveShadow = !0),
      $.layers.enable(_e),
      k.add($),
      L.push($));
  }
  const j = (st, G) => {
    const q = [];
    for (let U = 0; U <= 16; U++) {
      const Z = U / 16;
      q.push(
        I(Z)
          .addScaledVector(_, st)
          .add(new dt(0, G, 0)),
      );
    }
    return q;
  };
  for (const st of [-1, 1]) {
    for (const G of [0.82, 0.45]) {
      const q = new ws(j(st * Yt.w * 0.5, G)),
        U = new bt(new Es(q, 40, G > 0.6 ? 0.045 : 0.03, 8), R);
      ((U.castShadow = !0), k.add(U));
    }
    for (let G = 0; G <= 8; G++) {
      const q = I(G / 8).addScaledVector(_, st * Yt.w * 0.5),
        U = new bt(new Pt(0.05, 0.055, 0.95, 8), R);
      (U.position.copy(q).add(new dt(0, 0.44, 0)),
        (U.castShadow = !0),
        U.layers.enable(_e),
        k.add(U));
    }
  }
  for (const st of [0.2, 0.5, 0.8])
    for (const G of [-1, 1]) {
      const q = I(st).addScaledVector(_, G * Yt.w * 0.42),
        U = q.y - (v0 - 0.6),
        Z = new bt(new Pt(0.06, 0.06, U, 8), R);
      (Z.position.set(q.x, q.y - U / 2, q.z), Z.layers.enable(_e), k.add(Z));
    }
  (k.traverse((st) => {
    st.isMesh && (st.userData.m0 = st.material);
  }),
    t.add(k),
    u.push({ x: S.x, z: S.z, r: 0.75 }, { x: A.x, z: A.z, r: 0.75 }));
  const O = { p: x.position.clone(), r: x.rotation.clone() },
    J = At("ruin_char");
  return {
    group: t,
    circles: u,
    holes: p,
    setWorld: (st) => {
      const G = st === "ruins";
      ((e.userData.U.uMoss.value = G ? 0.25 : 1),
        G
          ? (x.position.set(v + 0.5, l + 0.22, n - 0.2),
            x.rotation.set(0, 0.6, Math.PI / 2 - 0.12),
            c[4].position.set(0.3, 1.3, 0.8),
            (c[5].visible = !1))
          : (x.position.copy(O.p),
            x.rotation.copy(O.r),
            c[4].position.set(0, 1.6, 0),
            (c[5].visible = !0)),
        (M.visible = !G),
        (m.intensity = G ? 0 : 0.35),
        k.traverse((q) => {
          q.isMesh && (q.material = G ? J : q.userData.m0);
        }),
        L.forEach((q, U) => {
          q.visible = !G || U < 8 || U > 17;
        }));
    },
    lantern: x,
    bridge: k,
    candle: m,
  };
}
const pt = { x0: -6.2, x1: 6.2, z0: 41, z1: 61.2 },
  W0 = 12,
  S0 = 3.4,
  sa = [44, 49, 54, 59],
  Te = [41, 44, 49, 54, 59, 61.2],
  Oo = [-6.2, -S0, S0, 6.2],
  Z0 = 7.2,
  Ia = 11.2,
  fs = [46.5, 51.5, 56.5],
  e0 = { w: 1.7, sill: 3.3, apex: 10.25 },
  G0 = { y: 8.3, r: 1.85 },
  z0 = { w: 3, sill: 5.75, apex: 10.75, rise: 2 },
  jt = {
    steps: [57.9, 58.25, 58.6],
    rise: 0.15,
    x0: -3.05,
    x1: 3.05,
    z1: 61.2,
    y: 0.45,
  },
  Qt = { ...r0.back, spring: 1.8 },
  Ue = r0.door,
  po = 4.3,
  _a = (s, o) => {
    const t = (s * s + o * o) / (2 * s);
    return { R: t, c: t - s };
  },
  aa = (s, o, t, u, e = 14) => {
    const r = (o - s) / 2,
      { R: a, c: p } = _a(r, u),
      i = Math.acos(Math.max(-1, Math.min(1, p / a))),
      d = [];
    for (let y = 0; y <= e; y++) {
      const w = (i * y) / e;
      d.push([s + a - a * Math.cos(w), t + a * Math.sin(w)]);
    }
    for (let y = e - 1; y >= 0; y--) {
      const w = (i * y) / e;
      d.push([o - a + a * Math.cos(w), t + a * Math.sin(w)]);
    }
    return d;
  };
function Fa(s, o, t, u, e = 2, r = 0.12, a = 0.1, p = 0.35) {
  const i = t - u,
    d = s / 2 - r / 2,
    y = _a(s / 2, u),
    w = y.R - r / 2,
    g = i + Math.sqrt(Math.max(0, (w - p) ** 2 - y.c ** 2 - 0)),
    z = (2 * d) / e,
    x = [],
    v = z * 0.866;
  let n;
  if (e % 2 === 0) {
    const h = z;
    n = g - Math.sqrt(Math.max(0, (z + p) ** 2 - h * h));
  } else n = g - p - a * 0.6 - v;
  for (let h = 0; h < e; h++) {
    const c = -d + h * z,
      M = c + z;
    x.push({ x0: c, x1: M, spring: n, apex: n + v, pts: aa(c, M, n, v) });
  }
  const l = aa(-d, d, i, w - y.c > 0 ? Math.sqrt(w * w - y.c * y.c) : u, 20);
  (l.unshift([-d, o + r / 2]), l.push([d, o + r / 2]));
  const f = [];
  for (let h = 1; h < e; h++) f.push([-d + h * z, o + r / 2, n]);
  return {
    w: s,
    sill: o,
    apex: t,
    spring: i,
    fb: r,
    bar: a,
    hw: d,
    frame: l,
    lights: x,
    mullions: f,
    circle: { cx: 0, cy: g, r: p },
    lw: z,
  };
}
const Wa = Fa(e0.w, e0.sill, e0.apex, e0.w * 0.866, 2, 0.12, 0.1, 0.35),
  co = (() => {
    const s = Wa,
      o = fs[2],
      t = s.lights[0],
      u = o - t.x1 + s.bar / 2,
      e = o - t.x0 - s.fb / 2;
    return {
      zc: o,
      u: (t.x0 + t.x1) / 2,
      z0: u,
      z1: e,
      zm: (u + e) / 2,
      half: (e - u) / 2,
      sill: e0.sill,
      spring: t.spring,
      xg: pt.x0 - 0.45,
    };
  })(),
  On = Fa(z0.w, z0.sill, z0.apex, z0.rise, 3, 0.14, 0.11, 0.5),
  jn = {
    r: G0.r,
    hub: 0.36,
    mid: 1.1,
    petal: 1.62,
    frame: G0.r - 0.07,
    spokes: 12,
    bar: 0.085,
  };
function ds(s, o) {
  const a = Math.atan2((o - 51.4) / 2.05, (s - -3) / 2.55),
    p = Math.hypot((s - -3) / 2.55, (o - 51.4) / 2.05);
  return (
    1 +
    (0.12 * Math.sin(a * 5 + 1.3) +
      0.07 * Math.sin(a * 11 + 0.4) +
      0.05 * Math.sin(a * 23 + 2.1) +
      0.03 * Math.sin(a * 41)) -
    p
  );
}
function ue(s, o) {
  const t = (s * s + o * o) / (2 * s),
    u = t - s,
    e = Math.acos(Math.max(-1, Math.min(1, u / t)));
  return {
    a: s,
    rise: o,
    R: t,
    h: (r) => {
      const a = Math.abs(r) + u;
      return Math.sqrt(Math.max(0, t * t - a * a));
    },
    inv: (r) => {
      const a = Math.max(0, Math.min(o, r));
      return t - Math.sqrt(Math.max(0, t * t - a * a));
    },
    dh: (r) => {
      const a = Math.abs(r) + u,
        p = Math.sqrt(Math.max(1e-6, t * t - a * a));
      return ((r < 0 ? 1 : -1) * a) / p;
    },
    pts(r = 16) {
      const a = [];
      for (let p = 0; p <= r; p++) {
        const i = (e * p) / r;
        a.push([-s + t - t * Math.cos(i), t * Math.sin(i)]);
      }
      for (let p = r - 1; p >= 0; p--) {
        const i = (e * p) / r;
        a.push([s - t + t * Math.cos(i), t * Math.sin(i)]);
      }
      return a;
    },
    inward(r, a) {
      const i = (r < 0 ? u : -u) - r,
        d = -a,
        y = Math.hypot(i, d) || 1;
      return [i / y, d / y];
    },
  };
}
function Uo(s, o, t, u, e = 14) {
  const r = ue(s / 2, u - t),
    a = [[-s / 2, o]];
  for (const [p, i] of r.pts(e)) a.push([p, t + i]);
  return (a.push([s / 2, o]), a);
}
function Ra(s, o = new Lo()) {
  o.moveTo(s[0][0], s[0][1]);
  for (let t = 1; t < s.length; t++) o.lineTo(s[t][0], s[t][1]);
  return (o.closePath(), o);
}
function qs(s) {
  return Ra(s, new he());
}
const se = new dt(),
  Io = new dt(),
  na = new dt(),
  _o = new dt();
function I0(s, o, t, { closed: u = !0, caps: e = !0, crease: r = 0.5 } = {}) {
  const a = o.length,
    p = s.length,
    i = [],
    d = [],
    y = [];
  for (let k = 0; k < a; k++) {
    const S = o[Math.max(0, k - 1)],
      A = o[Math.min(a - 1, k + 1)];
    Io.set(A[0] - S[0], A[1] - S[1], A[2] - S[2]).normalize();
    const b = Array.isArray(t[0]) ? t[k] : t;
    (_o.set(b[0], b[1], b[2]),
      _o.addScaledVector(Io, -Io.dot(_o)).normalize(),
      na.crossVectors(Io, _o).normalize(),
      i.push(Io.clone()),
      d.push(na.clone()),
      y.push(_o.clone()));
  }
  let w = 0;
  for (let k = 0; k < p; k++) {
    const S = s[k],
      A = s[(k + 1) % p];
    w += S[0] * A[1] - A[0] * S[1];
  }
  const g = w >= 0 ? 1 : -1,
    z = u ? p : p - 1,
    x = [];
  for (let k = 0; k < z; k++) {
    const S = s[k],
      A = s[(k + 1) % p],
      b = A[0] - S[0],
      P = A[1] - S[1],
      _ = Math.hypot(b, P) || 1;
    x.push([(g * P) / _, (-g * b) / _]);
  }
  const v = (k, S) => {
      const A = x[k],
        b = S ? (u ? (k + 1) % z : k + 1) : u ? (k - 1 + z) % z : k - 1;
      if (b < 0 || b >= z) return A;
      const P = x[b];
      if (A[0] * P[0] + A[1] * P[1] < Math.cos(r)) return A;
      const I = A[0] + P[0],
        R = A[1] + P[1],
        V = Math.hypot(I, R) || 1;
      return [I / V, R / V];
    },
    n = [],
    l = [],
    f = [],
    h = [],
    c = [0];
  for (let k = 1; k < a; k++)
    c.push(
      c[k - 1] +
        Math.hypot(
          o[k][0] - o[k - 1][0],
          o[k][1] - o[k - 1][1],
          o[k][2] - o[k - 1][2],
        ),
    );
  let M = 0;
  for (let k = 0; k < z; k++) {
    const S = s[k],
      A = s[(k + 1) % p],
      b = v(k, 0),
      P = v(k, 1),
      _ = Math.hypot(A[0] - S[0], A[1] - S[1]),
      I = n.length / 3;
    for (let R = 0; R < a; R++)
      for (const [V, L, K] of [
        [S, b, M],
        [A, P, M + _],
      ])
        (se
          .set(o[R][0], o[R][1], o[R][2])
          .addScaledVector(d[R], V[0])
          .addScaledVector(y[R], V[1]),
          n.push(se.x, se.y, se.z),
          se
            .set(0, 0, 0)
            .addScaledVector(d[R], L[0])
            .addScaledVector(y[R], L[1])
            .normalize(),
          l.push(se.x, se.y, se.z),
          f.push(c[R], K));
    for (let R = 0; R < a - 1; R++) {
      const V = I + R * 2;
      h.push(V, V + 1, V + 2, V + 1, V + 3, V + 2);
    }
    M += _;
  }
  if (e && u) {
    const k = Aa.triangulateShape(
      s.map(([S, A]) => new re(S, A)),
      [],
    );
    for (const S of [0, a - 1]) {
      const A = n.length / 3,
        b = i[S].clone().multiplyScalar(S ? 1 : -1);
      for (const P of s)
        (se
          .set(o[S][0], o[S][1], o[S][2])
          .addScaledVector(d[S], P[0])
          .addScaledVector(y[S], P[1]),
          n.push(se.x, se.y, se.z),
          l.push(b.x, b.y, b.z),
          f.push(P[0], P[1]));
      for (const P of k) h.push(A + P[0], A + P[1], A + P[2]);
    }
  }
  const m = new Rt();
  return (
    m.setAttribute("position", new xt(n, 3)),
    m.setAttribute("normal", new xt(l, 3)),
    m.setAttribute("uv", new xt(f, 2)),
    m.setIndex(h),
    Mn(m)
  );
}
function A0(s, o, t, u, e = 0, r = 0, a = 0) {
  const p = [],
    i = [],
    d = [];
  for (let x = 0; x <= u; x++) {
    const v = x / u,
      n = o(v);
    for (let l = 0; l <= t; l++) {
      const f = a + (l / t) * Math.PI * 2,
        h = s(f, v);
      (p.push(e + Math.cos(f) * h, n, r + Math.sin(f) * h),
        i.push((l / t) * 2, n));
    }
  }
  for (let x = 0; x < u; x++)
    for (let v = 0; v < t; v++) {
      const n = x * (t + 1) + v,
        l = n + 1,
        f = n + t + 1,
        h = f + 1;
      d.push(n, f, l, l, f, h);
    }
  const y = new Rt();
  (y.setAttribute("position", new xt(p, 3)),
    y.setAttribute("uv", new xt(i, 2)),
    y.setIndex(d),
    y.computeVertexNormals());
  const w = y.attributes.normal,
    g = y.attributes.position;
  let z = 0;
  for (let x = 0; x < t; x++)
    z += (g.getX(x) - e) * w.getX(x) + (g.getZ(x) - r) * w.getZ(x);
  if (z < 0) {
    const x = y.index.array;
    for (let v = 0; v < x.length; v += 3) {
      const n = x[v + 1];
      ((x[v + 1] = x[v + 2]), (x[v + 2] = n));
    }
    y.computeVertexNormals();
  }
  return y;
}
const Ke = (s) => (s.index ? s.toNonIndexed() : s),
  Yn = (s) => {
    const o = e0.w * 0.866;
    return Uo(e0.w, e0.sill, e0.apex - o, e0.apex, 12).map(([t, u]) => [
      t + s,
      u,
    ]);
  },
  ra = () => Uo(z0.w, z0.sill, z0.apex - z0.rise, z0.apex, 14),
  Xn = () =>
    Uo(Qt.x1 - Qt.x0, 0, Qt.spring, Qt.h, 8).map(([s, o]) => [
      s + (Qt.x0 + Qt.x1) / 2,
      o,
    ]);
function Ne(s, o, t, u) {
  const e = qs(s);
  for (const a of o) e.holes.push(a instanceof Lo ? a : Ra(a));
  const r = new te(e, { depth: t, bevelEnabled: !1, curveSegments: 40 });
  return (r.applyMatrix4(u), r.deleteAttribute("uv"), Ct(Ke(r)));
}
const jo = (s) => new wt().set(0, 0, -1, s, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1),
  Yo = (s) => new wt().set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, s, 0, 0, 0, 1);
function $n(s, o) {
  const t = [],
    u = [],
    e = [],
    r = { side: 0.55, front: 0.7, back: 0.55 },
    a = [
      [s.z0, 0],
      [s.z1, 0],
      [s.z1, W0],
      [s.z0, W0],
    ],
    p = () => fs.map((b) => Yn(b));
  (t.push(Ne(a, p(), r.side, jo(s.x0 + r.side))),
    u.push(Ne(a, p(), 0.8 - r.side, jo(pt.x0))),
    t.push(Ne(a, p(), r.side, jo(s.x1))),
    u.push(Ne(a, p(), 0.8 - r.side, jo(s.x1 - r.side))));
  const i = [
      [pt.x0, 0],
      [Ue.x0, 0],
      [Ue.x0, po],
      [Ue.x1, po],
      [Ue.x1, 0],
      [pt.x1, 0],
      [pt.x1, W0],
      [pt.x0, W0],
    ],
    d = () => {
      const b = new Lo();
      return (b.absarc(0, G0.y, G0.r, 0, Math.PI * 2, !0), b);
    };
  (t.push(Ne(i, [d()], r.front, Yo(s.z0))),
    u.push(Ne(i, [d()], 1 - r.front, Yo(s.z0 + r.front))));
  const y = Xn(),
    w = [[pt.x0, 0], ...y, [pt.x1, 0], [pt.x1, W0], [pt.x0, W0]];
  (u.push(Ne(w, [ra()], 0.8 - r.back, Yo(pt.z1))),
    t.push(Ne(w, [ra()], r.back, Yo(pt.z1 + 0.8 - r.back))));
  for (const [b, P] of [
    [s.z0, 1],
    [pt.z1, 0.8],
  ]) {
    const _ = new he();
    (_.moveTo(s.x0, 0), _.lineTo(s.x1, 0), _.lineTo(0, 6.5), _.lineTo(s.x0, 0));
    const I = new te(_, { depth: P, bevelEnabled: !1 });
    (I.translate(0, W0, b), I.deleteAttribute("uv"), t.push(Ct(Ke(I))));
  }
  const g = (b, P, _, I, R = 8.6) => {
    const j = (O, J, tt) => {
      const st = new qt(I ? 0.95 : O, tt - J, I ? O : 0.95);
      (st.translate(b + (_ * O) / 2, (J + tt) / 2, P + (I * O) / 2),
        t.push(Ct(Ke(st))));
      const G = new he();
      (G.moveTo(0, 0), G.lineTo(O, 0), G.lineTo(0, O * 0.9), G.lineTo(0, 0));
      const q = new te(G, { depth: 0.95, bevelEnabled: !1 });
      q.translate(0, 0, -0.475);
      const U = new wt();
      (I === 0
        ? U.makeRotationY(_ > 0 ? 0 : Math.PI)
        : U.makeRotationY(I > 0 ? -Math.PI / 2 : Math.PI / 2),
        q.applyMatrix4(U),
        q.translate(b, tt, P),
        q.deleteAttribute("uv"),
        t.push(Ct(Ke(q))));
    };
    (j(1.25, 0, 4.2), j(0.8, 4.2, R));
  };
  for (const b of [44, 49, 54, 59]) (g(s.x0, b, -1, 0), g(s.x1, b, 1, 0));
  for (const b of [s.x1]) g(b - 0.48, s.z0, 0, -1, 9.5);
  (g(s.x0 + 0.48, s.z1, 0, 1, 9.5), g(s.x1 - 0.48, s.z1, 0, 1, 9.5));
  const z = (b, P, _, I) =>
    Ct(
      Ke(
        I0(
          b,
          P.map(([R, V]) => _(R, V)),
          I,
          { crease: 0.7 },
        ),
      ),
    );
  {
    const b = Ue.x1 - Ue.x0 + 0.5,
      P = po + 0.1,
      _ = po + 2.4,
      I = [
        [-0.14, 0],
        [0.14, 0],
        [0.14, 0.08],
        [0.08, 0.16],
        [0, 0.2],
        [-0.08, 0.16],
        [-0.14, 0.08],
      ];
    for (const K of [0, 1, 2]) {
      const j = b / 2 + K * 0.26,
        O = ue(j, _ - P + K * 0.3),
        J = [[-j, 0], ...O.pts(18).map(([tt, st]) => [tt, P + st]), [j, 0]];
      t.push(z(I, J, (tt, st) => [tt, st, s.z0 - K * 0.1], [0, 0, -1]));
    }
    const R = ue(b / 2, _ - P),
      V = [[-R.a, po], ...R.pts(16).map(([K, j]) => [K, P + j]), [R.a, po]],
      L = new te(qs(V), { depth: 0.12, bevelEnabled: !1 });
    (L.translate(0, 0, s.z0 - 0.1), L.deleteAttribute("uv"), t.push(Ct(Ke(L))));
  }
  const x = [
      [-0.07, 0],
      [0.07, 0],
      [0.07, 0.06],
      [0.02, 0.11],
      [-0.07, 0.09],
    ],
    v = (b, P, _, I = 0.14) => {
      const R = ue(b / 2 + I, _ - P + I);
      return [
        [-b / 2 - I - 0.18, P],
        [-b / 2 - I, P],
        ...R.pts(14).map(([V, L]) => [V, P + L]),
        [b / 2 + I, P],
        [b / 2 + I + 0.18, P],
      ];
    };
  for (const b of fs) {
    const P = v(e0.w, e0.apex - e0.w * 0.866, e0.apex);
    (t.push(z(x, P, (_, I) => [s.x0, I, b - _], [-1, 0, 0])),
      t.push(z(x, P, (_, I) => [s.x1, I, b + _], [1, 0, 0])));
  }
  t.push(
    z(
      x,
      v(z0.w, z0.apex - z0.rise, z0.apex),
      (b, P) => [-b, P, s.z1],
      [0, 0, 1],
    ),
  );
  {
    const b = [];
    for (let P = 0; P <= 72; P++) {
      const _ = (P / 72) * Math.PI * 2;
      b.push([Math.cos(_) * (G0.r + 0.12), G0.y + Math.sin(_) * (G0.r + 0.12)]);
    }
    t.push(
      z(
        [
          [-0.16, 0],
          [0.16, 0],
          [0.16, 0.08],
          [0.08, 0.16],
          [-0.06, 0.18],
          [-0.16, 0.1],
        ],
        b,
        (P, _) => [P, _, s.z0],
        [0, 0, -1],
      ),
    );
  }
  const n = s.tower;
  {
    const b = new qt(n.x1 - n.x0, 22, n.z1 - n.z0).translate(
      (n.x0 + n.x1) / 2,
      11,
      (n.z0 + n.z1) / 2,
    );
    t.push(Ct(Ke(b)));
  }
  const l = (s.x1 - s.x0) / 2 + 0.5,
    f = 6.5,
    h = Math.atan2(f, l),
    c = Math.hypot(l, f),
    M = (b) => [-l + Math.cos(h) * b, W0 + Math.sin(h) * b],
    m = (b, P, _, I) => {
      const R = new dt(...b),
        V = new dt(...P),
        L = R.distanceTo(V),
        K = new qt(_, I, L),
        j = new wt().lookAt(V, R, new dt(0, 1, 0));
      return (
        K.applyMatrix4(j),
        K.translate((R.x + V.x) / 2, (R.y + V.y) / 2, (R.z + V.z) / 2),
        K
      );
    };
  for (let b = 46.9; b < 55; b += 0.6) {
    const P = b > 48.05 && b < 53.45,
      _ = P ? [0.6 + o() * 1.8, c - 0.8 - o() * 2.4] : [0, c],
      I = P
        ? [
            [0.25, _[0]],
            [_[1], c - 0.2],
          ]
        : [[0.25, c - 0.2]];
    for (const [R, V] of I) {
      if (V - R < 0.2) continue;
      const [L, K] = M(R),
        [j, O] = M(V),
        J = 0.16;
      e.push(
        m(
          [L + Math.sin(h) * J, K - Math.cos(h) * J, b],
          [j + Math.sin(h) * J, O - Math.cos(h) * J, b],
          0.09,
          0.16,
        ),
      );
    }
  }
  for (const [b, P] of [
    [0.36, 0],
    [0.7, 1],
  ]) {
    const [_, I] = M(c * b),
      R = 0.32,
      V = _ + Math.sin(h) * R,
      L = I - Math.cos(h) * R;
    if (!P) {
      e.push(
        m([V, L, 46.6], [V, L, 48.6], 0.18, 0.24),
        m([V, L, 53], [V, L, 55.2], 0.18, 0.24),
      );
      continue;
    }
    e.push(
      m([V, L, 46.6], [V, L, 49.3], 0.18, 0.24),
      m([V, L, 52.8], [V, L, 55.2], 0.18, 0.24),
    );
  }
  const k = { top: [-3.2, 14.6, 49.2], bot: [-2.1, 6.3, 51.4] };
  (e.push(m(k.top, k.bot, 0.2, 0.26)),
    e.push(m([-2.9, 12.2, 49.9], [-2.2, 10.9, 50.6], 0.05, 0.28)));
  const S = [];
  for (let b = 46.7; b < 55; b += 0.3) {
    const P = b > 48.2 && b < 53.3,
      _ = P ? 0.3 + o() * 1.2 : c,
      I = P ? c - 0.4 - o() * 2 : c;
    for (const [R, V] of P
      ? [
          [0.1, _],
          [I, c - 0.1],
        ]
      : [[0.1, c - 0.1]]) {
      if (V - R < 0.1) continue;
      const [L, K] = M(R),
        [j, O] = M(V),
        J = 0.1;
      S.push(
        m(
          [L + Math.sin(h) * J, K - Math.cos(h) * J, b + 0.15],
          [j + Math.sin(h) * J, O - Math.cos(h) * J, b + 0.15],
          0.29,
          0.025,
        ),
      );
    }
  }
  for (const b of S) e.push(b);
  const A = e.map((b) => (b.deleteAttribute("uv"), Ct(Ke(b))));
  return { outer: t, inner: u, char: A, hang: k, slope: c, ang: h, half: l };
}
function Zn(s) {
  const o = s.tower,
    t = co,
    u = { x0: s.x0, x1: s.x0 + 0.8 };
  return [
    { ...u, z0: s.z0, z1: s.z1, y0: 0, y1: t.sill },
    { ...u, z0: s.z0, z1: t.z0, y0: t.sill, y1: W0 },
    { ...u, z0: t.z1, z1: s.z1, y0: t.sill, y1: W0 },
    { ...u, z0: t.z0, z1: t.z1, y0: t.spring, y1: W0 },
    { x0: s.x1 - 0.8, x1: s.x1, z0: s.z0, z1: s.z1, y0: 0, y1: W0 },
    { x0: s.x0, x1: Qt.x0, z0: pt.z1, z1: s.z1, y0: 0, y1: W0 },
    { x0: Qt.x1, x1: s.x1, z0: pt.z1, z1: s.z1, y0: 0, y1: W0 },
    { x0: s.x0, x1: Ue.x0, z0: s.z0, z1: s.z0 + 1, y0: 0, y1: W0 },
    { x0: Ue.x1, x1: s.x1, z0: s.z0, z1: s.z0 + 1, y0: 0, y1: W0 },
    { x0: o.x0, x1: o.x1, z0: o.z0, z1: o.z1, y0: 0, y1: 22 },
  ];
}
const so = 40,
  _0 = {
    pos: Array.from({ length: so }, () => new H0(0, -50, 0, 0)),
    col: Array.from({ length: so }, () => new H0(1, 0.45, 0.14, 4)),
    gain: { value: 1 },
    used: 0,
  },
  Ce = 2,
  Ge = {
    mat: Array.from({ length: Ce }, () => new wt()),
    pos: Array.from({ length: Ce }, () => new H0(0, -50, 0, 0)),
    info: Array.from({ length: Ce }, () => new H0(0, 0, 0.56, 0.96)),
    tex: { value: null },
  },
  Je = {
    uVL: { value: _0.pos },
    uVC: { value: _0.col },
    uVGain: _0.gain,
    uPJm: { value: Ge.mat },
    uPJp: { value: Ge.pos },
    uPJi: { value: Ge.info },
    uPJtex: Ge.tex,
  };
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
function Qn(s, o) {
  const t = new Kt();
  ((t.name = "outside"), (t.visible = !1));
  const u = new Map(),
    e = (ft) => {
      (ft.updateMatrixWorld(!0),
        ft.traverse((X) => {
          if (X.isMesh && !X.isInstancedMesh) {
            const rt = X.geometry.clone().applyMatrix4(X.matrixWorld);
            (rt.attributes.uv ||
              rt.setAttribute(
                "uv",
                new vt(new Float32Array(rt.attributes.position.count * 2), 2),
              ),
              u.has(X.material) || u.set(X.material, []),
              u.get(X.material).push(rt));
          }
        }));
    },
    r = [],
    a = { uFireT: { value: 0 } },
    p = zs(At("ext_brick"), a),
    i = zs(At("concrete_grey"), a),
    d = zs(At("plaster_bare"), a),
    y = () => [p, i, d][Math.floor(o() * 3)],
    w = [],
    g = (ft, X, rt, ct, ut, mt, gt, kt = !0) => {
      let zt = ut ? ft : rt;
      const Et = ut ? X : ct;
      for (; zt < Et - 2;) {
        const o0 = Math.min(Et - zt, 6 + o() * 6),
          E0 = o() < 0.2 ? 2 + o() * 3 : 0.15,
          oe = mt + o() * (gt - mt),
          Pe = ut
            ? Zs(zt, zt + o0, rt, ct, oe, o)
            : Zs(ft, X, zt, zt + o0, oe, o),
          qo = y();
        (kt &&
          (w.push({ g: Pe, m: qo }),
          ut
            ? r.push({ x0: zt, x1: zt + o0, z0: rt, z1: ct, y0: 0, y1: oe })
            : r.push({ x0: ft, x1: X, z0: zt, z1: zt + o0, y0: 0, y1: oe })),
          (zt += o0 + E0));
      }
    };
  (g(-30, -16.6, 11.6, 39.5, !1, 9, 17),
    g(16.6, 30, 11.6, 39.5, !1, 9, 17, !1),
    g(-34, 34, -34, -20, !0, 12, 26),
    g(-34, -18, -18, 11, !1, 8, 16),
    g(18, 34, -18, 11, !1, 8, 16, !1),
    g(-34, -9, 62, 76, !0, 10, 18),
    g(9, 34, 62, 76, !0, 10, 18),
    g(-30, -13, 40, 60, !1, 9, 15),
    g(13, 30, 40, 60, !1, 9, 15, !1));
  const z = new Map();
  for (const ft of w) (z.has(ft.m) || z.set(ft.m, []), z.get(ft.m).push(ft.g));
  for (const [ft, X] of z) {
    const rt = new bt(X0(X), ft);
    ((rt.castShadow = !0), (rt.receiveShadow = !0), t.add(rt));
  }
  const x = At("concrete_grey"),
    v = At("ruin_ash"),
    n = (ft, X, rt, ct) => {
      const ut = new t0(1, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
        mt = ut.attributes.position;
      for (let gt = 0; gt < mt.count; gt++) {
        const kt = 1 + (o() - 0.5) * 0.35;
        mt.setXYZ(
          gt,
          mt.getX(gt) * rt * kt,
          mt.getY(gt) * ct * (0.8 + o() * 0.4),
          mt.getZ(gt) * rt * kt,
        );
      }
      return (ut.computeVertexNormals(), ut.translate(ft, -0.05, X), Ct(ut));
    },
    l = [
      [-9.5, 17.5, 2.2, 0.9],
      [11.2, 21.5, 2.6, 1.1],
      [-12.5, 30.5, 2, 0.8],
      [8.5, 33.5, 1.7, 0.7],
      [-5.5, 14.8, 1.3, 0.5],
    ],
    f = l.map(
      ([ft, X, rt, ct]) => (
        r.push({
          x0: ft - rt * 0.75,
          x1: ft + rt * 0.75,
          z0: X - rt * 0.75,
          z1: X + rt * 0.75,
          y0: 0,
          y1: ct,
        }),
        n(ft, X, rt, ct)
      ),
    ),
    h = new bt(X0(f), v);
  ((h.receiveShadow = !0), (h.castShadow = !0), t.add(h));
  const c = [];
  for (let ft = 0; ft < 160; ft++) {
    const X = l[ft % l.length],
      rt = o() * 6.28,
      ct = X[2] * (0.4 + o() * 1.1),
      ut = 0.12 + o() * 0.4,
      mt = new qt(ut * (0.6 + o()), ut * (0.3 + o() * 0.5), ut * (0.6 + o()));
    (mt
      .rotateX(o() * 0.8)
      .rotateY(o() * 3)
      .rotateZ(o() * 0.8)
      .translate(
        X[0] + Math.cos(rt) * ct,
        ut * 0.15 + Math.max(0, X[3] * (1 - ct / X[2])) * 0.8,
        X[1] + Math.sin(rt) * ct,
      ),
      c.push(Ct(mt)));
  }
  const M = new bt(X0(c), x);
  ((M.castShadow = !0),
    (M.receiveShadow = !0),
    t.add(M),
    At("ruin_char"),
    At("rust_metal"));
  const m = (ft, X, rt, ct = !1, ut = "sedan", mt = 1) => {
    const gt = Ta(ut, { burnt: !0, side: ct, seed: mt, doors: {} });
    (gt.group.position.set(ft, 0, X),
      (gt.group.rotation.y = rt),
      gt.group.updateMatrixWorld(!0),
      e(gt.group));
    const kt = Math.abs(Math.sin(rt)),
      zt = Math.abs(Math.cos(rt)),
      Et = (gt.size.w * zt + gt.size.l * kt) / 2,
      o0 = (gt.size.w * kt + gt.size.l * zt) / 2;
    return (
      r.push({
        x0: ft - Et,
        x1: ft + Et,
        z0: X - o0,
        z1: X + o0,
        y0: 0,
        y1: 1.5,
      }),
      gt
    );
  };
  (m(-6.5, 21, 0.4, !1, "sedan", 3),
    m(7.2, 27.5, -1.2, !1, "taxi", 4),
    m(-10.8, 35.5, 1.9, !0, "kei", 5),
    m(4.6, 17.2, 1.5, !1, "van", 6));
  {
    const ft = At("church_stone"),
      X = new bt(
        Ct(
          new s0(2.2, 0.28, 10, 40).rotateX(Math.PI / 2).translate(0, 0.35, 24),
        ),
        ft,
      ),
      rt = new bt(
        Ct(new Ms(2.1, 40).rotateX(-Math.PI / 2).translate(0, 0.12, 24)),
        v,
      ),
      ct = new bt(Ct(new Pt(0.3, 0.42, 1.6, 12).translate(0, 0.8, 24)), ft),
      ut = new bt(Ct(new Pt(0.9, 0.35, 0.35, 16).translate(0, 1.7, 24)), ft);
    for (const mt of [X, rt, ct, ut])
      ((mt.castShadow = !0), (mt.receiveShadow = !0), t.add(mt));
    r.push({ x0: -2.5, x1: 2.5, z0: 21.5, z1: 26.5, y0: 0, y1: 0.7 });
  }
  {
    const ft = At("iron_black"),
      X = [
        new dt(-2.6, 0, 14.6),
        new dt(-2.6, 2.2, 14.6),
        new dt(-3, 3.3, 15),
        new dt(-4, 3.6, 15.8),
      ],
      rt = new bt(new Es(new ws(X), 16, 0.07, 8), ft);
    ((rt.castShadow = !0),
      t.add(rt),
      r.push({ x0: -2.8, x1: -2.4, z0: 14.4, z1: 14.8, y0: 0, y1: 3 }));
  }
  const k = tr(o, r, e);
  t.add(k.group);
  const S = pn(s, a);
  (t.add(S.group), r.push(...S.colliders));
  const A = new Kt();
  A.name = "church";
  const b = At("church_stone"),
    P = At("garden_roof"),
    _ = At("door_wood"),
    I = r0,
    R = 12,
    V = $n(I, o),
    L = new bt(X0(V.outer), b);
  ((L.castShadow = !0),
    (L.receiveShadow = !0),
    (L.name = "church_shell"),
    A.add(L));
  const K = new bt(
    X0(V.inner),
    wo(At("church_ashlar"), { name: "church_ashlar_lit" }),
  );
  ((K.castShadow = !0),
    (K.receiveShadow = !0),
    (K.name = "church_inner"),
    A.add(K));
  const j = new bt(
    X0(V.char),
    wo(At("ruin_char"), { name: "church_char_lit" }),
  );
  ((j.castShadow = !0),
    (j.receiveShadow = !0),
    (j.name = "church_timbers"),
    A.add(j));
  const O = I.tower,
    J = new bt(
      Ct(
        new no(3.4, 10, 4)
          .rotateY(Math.PI / 4)
          .translate((O.x0 + O.x1) / 2, 27, (O.z0 + O.z1) / 2),
      ),
      P,
    );
  ((J.castShadow = !0), A.add(J));
  {
    I.z1 - I.z0 + 0.6;
    const ft = (I.x1 - I.x0) / 2 + 0.5,
      X = 6.5,
      rt = Math.hypot(ft, X),
      ct = Math.atan2(X, ft);
    for (const ut of [-1, 1]) {
      const mt =
        ut < 0
          ? [
              [I.z0 - 0.3, 48],
              [53.5, I.z1 + 0.3],
            ]
          : [[I.z0 - 0.3, I.z1 + 0.3]];
      for (const [gt, kt] of mt) {
        const zt = Ct(new qt(rt, 0.18, kt - gt)),
          Et = new bt(zt, P);
        (Et.position.set((ut * ft) / 2, R + X / 2, (gt + kt) / 2),
          (Et.rotation.z = -ut * ct),
          (Et.castShadow = !0),
          (Et.receiveShadow = !0),
          A.add(Et));
      }
    }
  }
  const tt = new Kt(),
    st = new Kt(),
    G = (ft) => {
      const X = new Kt();
      for (let rt = 0; rt < 4; rt++) {
        const ct = new bt(
          Ct(
            new qt(ft / 4 - 0.01, 4.2, 0.12).translate(
              -ft / 2 + ((rt + 0.5) * ft) / 4,
              2.1,
              0,
            ),
          ),
          _,
        );
        ((ct.castShadow = !0), X.add(ct));
      }
      for (const rt of [0.8, 2.1, 3.4])
        for (const ct of [-1, 1]) {
          const ut = new bt(new qt(ft * 0.95, 0.1, 0.03), At("iron_black"));
          (ut.position.set(0, rt, ct * 0.075), X.add(ut));
        }
      return X;
    },
    q = (I.door.x1 - I.door.x0) / 2,
    U = G(q);
  ((U.position.x = q / 2), tt.add(U), tt.position.set(I.door.x0, 0, I.z0));
  const Z = G(q);
  ((Z.position.x = -q / 2),
    st.add(Z),
    st.position.set(I.door.x1, 0, I.z0),
    A.add(tt, st));
  const ot = new No(16751176, 0, 9, 2);
  (ot.position.set(0, 2.5, I.z0 + 4),
    (ot.userData.noActor = !1),
    A.add(ot),
    t.add(A),
    r.push(...Zn(I)));
  const $ = {
    x0: I.door.x0,
    x1: I.door.x1,
    z0: I.z0 - 0.1,
    z1: I.z0 + 0.2,
    y0: 0,
    y1: 4.3,
    on: !0,
  };
  r.push($);
  const C = (ft, X, rt) => {
      const ct = Math.max(0, Math.min(1, (rt - ft) / (X - ft)));
      return ct * ct * (3 - 2 * ct);
    },
    T = {
      group: A,
      inside: ot,
      doorCol: $,
      openK: 0,
      burstU: 0,
      spill: 0,
      open(ft = 1) {
        (ft === 0 && this.burstU > 0 && this.onReset?.(),
          (this.openK = ft),
          (this.burstU = 0),
          (tt.position.z = st.position.z = I.z0),
          U.rotation.set(0, 0, 0),
          Z.rotation.set(0, 0, 0),
          U.position.set(q / 2, 0, 0),
          Z.position.set(-q / 2, 0, 0),
          (tt.rotation.y = ft * 1.7),
          (st.rotation.y = -ft * 1.7),
          ($.on = ft < 0.3),
          (this.spill = Math.max(0, ft)));
      },
      burst(ft = 1) {
        ((this.burstU = ft), (this.openK = 1), ($.on = !1), (this.spill = 1));
        const X = I.z0 + 0.95 * C(0, 0.28, ft);
        tt.position.z = st.position.z = X;
        const rt = C(0, 0.3, ft),
          ct = C(0.3, 0.52, ft),
          ut = C(0.52, 1, ft),
          mt = Math.sin(ft * 26) * 0.06 * (1 - ut) * ct,
          gt = -(2.28 * rt - 0.5 * ct + 0.2 * ut) + mt,
          kt = 2.2 * rt - 0.42 * ct + 0.12 * ut - mt * 0.7;
        ((tt.rotation.y = gt), (st.rotation.y = kt));
        const zt = C(0.22, 0.6, ft);
        (Z.rotation.set(0.06 * zt, 0.05 * zt, -0.3 * zt),
          Z.position.set(
            -q / 2 + (q / 2) * (1 - Math.cos(0.3 * zt)) + 0.04 * zt,
            -0.22 * zt,
            0.05 * zt,
          ),
          U.rotation.set(0, 0, 0.015 * zt),
          U.position.set(q / 2, 0, 0));
      },
    },
    D = Jn(a),
    N = [],
    H = [
      [-6.5, 21, 1.6, 1.3],
      [-9.5, 17.5, 1.1, 0.9],
      [Mo.a.truck[0] - 0.4, Mo.a.truck[1], 1.5, 2],
      [-11.5, 3.5, 1.2, 0.3],
      [12.2, -1, 1, 0.3],
      [-5.5, 14.8, 0.9, 0.5],
      [Mo.b.gap[1] + 0.55, Mo.b.z - 0.35, 0.75, 0.95],
    ],
    Q = H.length;
  H.push(...S.fireSpots);
  const W = new m0(1, 1),
    B = new l0(W, D, H.length * 4);
  ((B.name = "flames"), (B.renderOrder = 30), (B.frustumCulled = !1));
  const F = new Float32Array(H.length * 4);
  {
    const ft = new wt(),
      X = new dt(),
      rt = new w0(),
      ct = new dt();
    for (let ut = 0; ut < H.length; ut++) {
      const [mt, gt, kt, zt] = H[ut];
      for (let Et = 0; Et < 4; Et++) {
        const o0 = () => (ut < Q ? o() : 0.5);
        ((F[ut * 4 + Et] = (ut < Q ? o() : Math.random()) + Et),
          ct.set(kt * (0.7 + o0() * 0.6), kt * (1.1 + o0() * 0.9), 1),
          X.set(mt + (o0() - 0.5) * kt * 0.8, zt, gt + (o0() - 0.5) * kt * 0.8),
          B.setMatrixAt(ut * 4 + Et, ft.compose(X, rt, ct)));
      }
      N.push({
        light: null,
        x: mt,
        z: gt,
        y: zt + kt * 0.8,
        base: 6 + kt * 5,
        ph: ut < Q ? o() * 10 : ut * 1.7,
        want: 0,
      });
    }
  }
  (W.setAttribute("aSeed", new M0(F, 1)), t.add(B));
  const E = [];
  for (let ft = 0; ft < 5; ft++) {
    const X = new No(16742954, 0, 12, 2);
    ((X.userData.fire = !0),
      t.add(X),
      E.push({ l: X, fire: null, k: 0, next: null }));
  }
  let Y = 0;
  const et = (ft, X) => {
      const rt = N.map((ut) => [ut, (ut.x - ft) ** 2 + (ut.z - X) ** 2])
          .sort((ut, mt) => ut[1] - mt[1])
          .slice(0, E.length)
          .map((ut) => ut[0]),
        ct = new Set(
          E.map((ut) => ut.next || ut.fire).filter((ut) => rt.includes(ut)),
        );
      for (const ut of E) {
        const mt = ut.next || ut.fire;
        if (mt && rt.includes(mt)) continue;
        const gt = rt.find((kt) => !ct.has(kt));
        gt && (ct.add(gt), (ut.next = gt));
      }
    },
    nt = 7,
    it = 9,
    lt = H.length,
    ht = new Po(),
    yt = new m0(1, 1);
  (ht.setIndex(yt.index),
    ht.setAttribute("position", yt.attributes.position),
    ht.setAttribute("uv", yt.attributes.uv));
  const Ft = new Float32Array(lt * nt * 4),
    Ut = new Float32Array(lt * nt * 2);
  for (let ft = 0; ft < lt; ft++)
    for (let X = 0; X < nt; X++) {
      const [rt, ct, ut, mt] = H[ft],
        gt = ft * nt + X;
      (Ft.set([rt, mt + ut * 0.9, ct, ut], gt * 4),
        Ut.set([X / nt + Math.random() * 0.08, Math.random()], gt * 2));
    }
  (ht.setAttribute("aBase", new M0(Ft, 4)),
    ht.setAttribute("aSeed", new M0(Ut, 2)),
    (ht.instanceCount = lt * nt));
  const Lt = new P0({
      uniforms: ko.merge([So.fog, { uT: { value: 0 } }]),
      vertexShader: `
attribute vec4 aBase;
attribute vec2 aSeed;
uniform float uT;
varying vec2 vUv;
varying float vAge, vSeed;
#include <fog_pars_vertex>
void main() {
  float life = 7.0 + aSeed.y * 3.0, age = fract(uT / life + aSeed.x);
  float sz = aBase.w;
  vec3 c = aBase.xyz + vec3(age * age * 3.2 + sin(uT * 0.3 + aSeed.y * 9.0) * 0.25 * age, age * (4.5 + sz * 2.5), age * 1.1 + cos(uT * 0.4 + aSeed.y * 7.0) * 0.2 * age);
  float size = sz * (0.9 + age * 4.2);
  vec4 mvPosition = modelViewMatrix * vec4(c, 1.0);
  float r = aSeed.y * 6.28 + uT * (0.15 + aSeed.y * 0.1) * (aSeed.y > 0.5 ? 1.0 : -1.0);
  vec2 q = (uv - 0.5) * size; q = mat2(cos(r), sin(r), -sin(r), cos(r)) * q;
  mvPosition.xy += q;
  gl_Position = projectionMatrix * mvPosition;
  vUv = uv; vAge = age; vSeed = aSeed.y;
  #include <fog_vertex>
}`,
      fragmentShader: `
precision highp float;
uniform float uT;
varying vec2 vUv;
varying float vAge, vSeed;
#include <fog_pars_fragment>
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
void main() {
  vec2 c = vUv - 0.5;
  float cloud = n(vUv * 3.0 + vSeed * 17.0) * 0.55 + n(vUv * 7.0 - vSeed * 9.0 + uT * 0.05) * 0.3 + n(vUv * 15.0 + vSeed * 3.0) * 0.15;
  float a = smoothstep(0.5, 0.12, length(c) + (cloud - 0.5) * 0.35);
  a *= smoothstep(0.0, 0.08, vAge) * (1.0 - smoothstep(0.45, 1.0, vAge)) * 0.5;
  if (a < 0.004) discard;
  // lit by the fire under it while young, then just dark smoke against the glow of the sky
  vec3 col = mix(vec3(0.8, 0.26, 0.06) * (1.1 - vAge * 3.0), vec3(0.06, 0.052, 0.047), smoothstep(0.0, 0.2, vAge));
  col *= 0.8 + 0.4 * cloud;
  gl_FragColor = vec4(col, a);
  #include <fog_fragment>
}`,
      transparent: !0,
      depthWrite: !1,
      fog: !0,
    }),
    h0 = new bt(ht, Lt);
  ((h0.name = "smoke"),
    (h0.frustumCulled = !1),
    (h0.renderOrder = 31),
    t.add(h0));
  const D0 = new Rt(),
    ee = new Float32Array(lt * it * 3),
    Ye = new Float32Array(lt * it * 2);
  for (let ft = 0; ft < lt; ft++)
    for (let X = 0; X < it; X++) {
      const [rt, ct, ut, mt] = H[ft],
        gt = ft * it + X;
      (ee.set([rt, mt + ut * 0.3, ct], gt * 3),
        Ye.set([Math.random(), Math.random() * 0.8 + ut * 0.3], gt * 2));
    }
  (D0.setAttribute("position", new vt(ee, 3)),
    D0.setAttribute("aSeed", new vt(Ye, 2)));
  const Se = new P0({
      uniforms: { uT: Lt.uniforms.uT, uScale: { value: 600 } },
      vertexShader: `
attribute vec2 aSeed;
uniform float uT, uScale;
varying float vK;
void main() {
  float life = 1.6 + aSeed.x * 1.8, age = fract(uT / life + aSeed.x * 7.3);
  float s = aSeed.x * 6.28, up = aSeed.y;
  vec3 p = position + vec3(sin(s + uT * 2.1) * 0.35 * age + cos(s) * 0.3 * age, (1.0 - (1.0 - age) * (1.0 - age)) * (1.8 + up * 2.2), cos(s * 1.3 + uT * 1.7) * 0.35 * age + sin(s) * 0.3 * age);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vK = (1.0 - age) * (0.55 + 0.45 * sin(uT * 23.0 + s * 5.0));
  gl_PointSize = max(1.0, 0.045 * uScale / -mv.z);
}`,
      fragmentShader: `
precision highp float;
varying float vK;
void main() {
  float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
  gl_FragColor = vec4(vec3(4.0, 1.5, 0.35) * vK * smoothstep(0.5, 0.0, d), 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
    }),
    Ae = new Do(D0, Se);
  ((Ae.name = "sparks"),
    (Ae.frustumCulled = !1),
    (Ae.renderOrder = 32),
    t.add(Ae));
  const Xe = 1100,
    $e = new Rt(),
    y0 = new Float32Array(Xe * 3),
    Eo = new Float32Array(Xe);
  for (let ft = 0; ft < Xe; ft++)
    ((y0[ft * 3] = (o() - 0.5) * 24),
      (y0[ft * 3 + 1] = o() * 10),
      (y0[ft * 3 + 2] = (o() - 0.5) * 24),
      (Eo[ft] = ft % 11 === 0 ? 1 : 0));
  ($e.setAttribute("position", new vt(y0, 3)),
    $e.setAttribute("aHot", new vt(Eo, 1)));
  const ho = new P0({
    uniforms: ko.merge([
      So.fog,
      { uT: Lt.uniforms.uT, uScale: { value: 600 } },
    ]),
    vertexShader: `
attribute float aHot;
uniform float uT, uScale;
varying float vHot, vSpin;
#include <fog_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = max(1.0, (aHot > 0.5 ? 0.03 : 0.045) * uScale / -mvPosition.z);
  vHot = aHot * (0.5 + 0.5 * sin(uT * 3.0 + position.x * 7.0 + position.z * 3.0));
  vSpin = sin(uT * 2.0 + position.y * 5.0 + position.x);
  #include <fog_vertex>
}`,
    fragmentShader: `
precision highp float;
varying float vHot, vSpin;
#include <fog_pars_fragment>
void main() {
  vec2 c = gl_PointCoord - 0.5;
  c.x *= 1.0 + 0.8 * abs(vSpin);                                             // (a flake turning: thin, then broad)
  float d = length(c); if (d > 0.5) discard;
  vec3 col = mix(vec3(0.17, 0.16, 0.15), vec3(3.5, 1.2, 0.3), vHot);
  gl_FragColor = vec4(col, smoothstep(0.5, 0.2, d) * mix(0.75, 1.0, vHot));
  #include <fog_fragment>
}`,
    transparent: !0,
    depthWrite: !1,
    fog: !0,
  });
  ho.uniforms.uT = Lt.uniforms.uT;
  const Ze = new Do($e, ho);
  ((Ze.frustumCulled = !1), (Ze.name = "ash"), t.add(Ze));
  const Fe = s.game.camera;
  function bs(ft, X) {
    if (!t.visible) return;
    ((a.uFireT.value = X),
      (Y -= ft),
      Y <= 0 && ((Y = 0.35), et(Fe.position.x, Fe.position.z)));
    for (const ct of E) {
      ct.next && ct.next !== ct.fire
        ? ((ct.k = Math.max(0, ct.k - ft * 3)),
          ct.k === 0 && ((ct.fire = ct.next), (ct.next = null)))
        : ((ct.next = null), (ct.k = Math.min(1, ct.k + ft * 2)));
      const ut = ct.fire;
      if (!ut) {
        ct.l.intensity = 0;
        continue;
      }
      (ct.l.position.set(ut.x, ut.y, ut.z),
        (ct.l.intensity =
          ct.k *
          ut.base *
          (0.75 +
            0.25 * Math.sin(X * 13 + ut.ph) * Math.sin(X * 7.3 + ut.ph * 2) +
            0.1 * Math.sin(X * 31 + ut.ph))));
    }
    (S.update(ft, X),
      (Lt.uniforms.uT.value = X),
      Ze.position.set(Fe.position.x, 0, Fe.position.z));
    for (let ct = 0; ct < Xe; ct++)
      ((y0[ct * 3 + 1] -= ft * (0.35 + (ct % 7) * 0.04)),
        (y0[ct * 3] += ft * (0.25 + Math.sin(X * 0.7 + ct) * 0.2)),
        (y0[ct * 3 + 2] += ft * Math.cos(X * 0.5 + ct) * 0.15),
        y0[ct * 3 + 1] < 0 &&
          ((y0[ct * 3 + 1] = 10),
          (y0[ct * 3] = (o() - 0.5) * 24),
          (y0[ct * 3 + 2] = (o() - 0.5) * 24)),
        y0[ct * 3] > 12 && (y0[ct * 3] -= 24));
    $e.attributes.position.needsUpdate = !0;
    const rt = s.game.post.size.y / (2 * Math.tan((Fe.fov * Math.PI) / 360));
    ((Se.uniforms.uScale.value = rt), (ho.uniforms.uScale.value = rt));
  }
  for (const [ft, X] of u) {
    const rt = new bt(X0(X), ft);
    ((rt.castShadow = !0),
      (rt.receiveShadow = !0),
      (rt.name = "outside_baked"),
      t.add(rt));
  }
  for (const ft of r) ft.on = !1;
  return {
    group: t,
    colliders: r,
    church: T,
    fires: N,
    update: bs,
    district: S,
    crates: S.crates,
    setWorld(ft) {
      const X = ft === "ruins";
      t.visible = X;
      for (const rt of r) rt.on = X && (rt !== $ || T.openK < 0.3);
      for (const rt of E)
        ((rt.l.intensity = 0), (rt.k = 0), (rt.fire = null), (rt.next = null));
      X || (T.open(0), ($.on = !1));
    },
  };
}
function tr(s, o, t) {
  const u = new Kt();
  u.name = "checkpoint";
  const e = Mo.a,
    r = Mo.b,
    a = At("concrete_grey").clone();
  a.vertexColors = !0;
  const p = new he();
  (p.moveTo(-0.6, 0),
    p.lineTo(0.6, 0),
    p.lineTo(0.6, 0.32),
    p.lineTo(0.17, 0.55),
    p.lineTo(0.11, 3.55),
    p.lineTo(-0.11, 3.55),
    p.lineTo(-0.17, 0.55),
    p.lineTo(-0.6, 0.32),
    p.lineTo(-0.6, 0));
  const i = [],
    d = 1.52;
  for (let l = e.x0 + d / 2, f = 0; l < e.x1 + 0.01; l += d, f++) {
    const h = new te(p, {
      depth: d - 0.09,
      bevelEnabled: !0,
      bevelThickness: 0.025,
      bevelSize: 0.025,
      bevelSegments: 2,
    });
    (h.translate(0, 0, -1.43 / 2),
      h.scale(1, 0.96 + s() * 0.07, 1),
      h.rotateY(Math.PI / 2));
    const c = f === 5 ? 0.14 : (s() - 0.5) * 0.03;
    (h.rotateX(c),
      h.rotateY((s() - 0.5) * 0.04),
      h.translate(Math.min(l, e.x1 - d / 2), 0, e.z + (s() - 0.5) * 0.08));
    const M = h.attributes.position,
      m = new Float32Array(M.count * 3),
      k = 0.8 + s() * 0.25;
    for (let S = 0; S < M.count; S++) {
      const A = M.getY(S),
        b = 0.35 + 0.65 * Math.min(1, A / 2.2);
      for (let P = 0; P < 3; P++) m[S * 3 + P] = b * k;
    }
    (h.setAttribute("color", new vt(m, 3)), i.push(Ct(h)));
  }
  const y = new bt(X0(i), a);
  ((y.castShadow = !0),
    (y.receiveShadow = !0),
    (y.name = "blast_walls"),
    u.add(y));
  {
    const l = (c, M, m) => {
        const k = document.createElement("canvas");
        ((k.width = Math.round(c * 200)), (k.height = Math.round(M * 200)));
        const S = k.getContext("2d");
        m(S, k.width, k.height);
        const A = new io(k);
        ((A.colorSpace = lo), (A.anisotropy = 4));
        const b = new n0({
          map: A,
          transparent: !0,
          roughness: 0.9,
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          depthWrite: !1,
        });
        return new bt(new m0(c, M), b);
      },
      f = (c, M) => {
        (c.save(),
          (c.shadowColor = c.strokeStyle),
          (c.shadowBlur = 10),
          M(),
          c.restore());
      };
    for (const [c, M] of [
      [-12.2, "14"],
      [-7.6, "17"],
      [-3.1, "20"],
      [1.5, "23"],
    ]) {
      const m = l(0.9, 0.5, (k, S, A) => {
        ((k.fillStyle = "rgba(210,200,160,0.85)"),
          (k.font = `bold ${Math.round(A * 0.8)}px monospace`),
          (k.textAlign = "center"),
          (k.textBaseline = "middle"),
          k.fillText("B" + M, S / 2, A / 2));
      });
      (m.position.set(c, 2.7, e.z - 0.132), (m.rotation.y = Math.PI), u.add(m));
    }
    const h = l(3, 1.1, (c, M, m) => {
      ((c.strokeStyle = "rgba(190,24,16,0.95)"),
        (c.fillStyle = "rgba(190,24,16,0.95)"),
        (c.lineWidth = 16),
        (c.lineCap = "round"),
        (c.lineJoin = "round"),
        f(c, () => {
          ((c.font = `bold ${Math.round(m * 0.42)}px Impact, Arial Black, sans-serif`),
            (c.textAlign = "left"),
            (c.textBaseline = "top"),
            c.fillText("CHURCH", M * 0.06, m * 0.05),
            c.beginPath(),
            c.moveTo(M * 0.94, m * 0.72),
            c.lineTo(M * 0.08, m * 0.72),
            c.stroke(),
            c.beginPath(),
            c.moveTo(M * 0.2, m * 0.52),
            c.lineTo(M * 0.07, m * 0.72),
            c.lineTo(M * 0.2, m * 0.92),
            c.stroke());
          for (let k = 0; k < 9; k++) {
            const S = M * (0.1 + k * 0.1);
            c.fillRect(S, m * 0.72, 3, m * (0.08 + Math.random() * 0.2));
          }
        }));
    });
    (h.position.set(0.9, 1.75, e.z - 0.15), (h.rotation.y = Math.PI), u.add(h));
  }
  (o.push({
    x0: e.x0,
    x1: e.x1,
    z0: e.z - 0.62,
    z1: e.z + 0.62,
    y0: 0,
    y1: 3.55,
  }),
    At("ruin_char"));
  const w = At("rust_metal");
  {
    const l = Ta("armytruck", { burnt: !0, seed: 7 }).group;
    (l.position.set(e.truck[0], 0, e.truck[1]),
      (l.rotation.y = Math.PI / 2 + 0.06),
      (l.rotation.z = 0.04),
      l.updateMatrixWorld(!0),
      t(l),
      o.push({
        x0: e.gap[1] + 0.05,
        x1: 16.2,
        z0: e.truck[1] - 1.25,
        z1: e.truck[1] + 1.25,
        y0: 0,
        y1: 3,
      }));
  }
  const g = new t0(0.5, 10, 6);
  g.scale(0.58, 0.19, 0.34);
  const z = new n0({ color: 5984576, roughness: 0.97 }),
    x = [],
    v = (l, f, h, c) => {
      for (let M = 0; M < c; M++)
        for (let m = l + (M % 2 ? 0.29 : 0.05); m < f - 0.2; m += 0.56)
          x.push([
            m + (s() - 0.5) * 0.04,
            0.1 + M * 0.17,
            h + (s() - 0.5) * 0.05,
            (s() - 0.5) * 0.12,
          ]);
    };
  (v(r.bags0, r.x1, r.z - 0.17, 7),
    v(r.bags0, r.x1, r.z + 0.17, 7),
    v(r.west[0], r.west[1], r.z - 0.17, 7),
    v(r.west[0], r.west[1], r.z + 0.17, 7));
  const n = new l0(g, z, x.length);
  ((n.name = "sandbags"), (n.castShadow = !0), (n.receiveShadow = !0));
  {
    const l = new wt(),
      f = new w0(),
      h = new pe(),
      c = new dt(1, 1, 1),
      M = new dt();
    x.forEach(([m, k, S, A], b) => {
      (f.setFromEuler(h.set((s() - 0.5) * 0.08, A, (s() - 0.5) * 0.08)),
        c.set(1, 0.85 + s() * 0.3, 1),
        n.setMatrixAt(b, l.compose(M.set(m, k, S), f, c)));
    });
  }
  (u.add(n),
    o.push({
      x0: r.bags0,
      x1: r.x1,
      z0: r.z - 0.45,
      z1: r.z + 0.45,
      y0: 0,
      y1: 1.3,
    }),
    o.push({
      x0: r.x0,
      x1: r.bags0,
      z0: r.z - 0.65,
      z1: r.z + 0.65,
      y0: 0,
      y1: 1,
    }),
    o.push({
      x0: r.west[0] - 0.2,
      x1: r.west[1],
      z0: r.z - 0.45,
      z1: r.z + 0.45,
      y0: 0,
      y1: 1.3,
    }));
  {
    const l = At("iron_black"),
      f = (c, M) => {
        const m = [],
          k = M - c,
          S = Math.round(k / 0.24) * 10;
        for (let A = 0; A <= S; A++) {
          const b = A / S,
            P = b * (k / 0.24) * Math.PI * 2;
          m.push(
            new dt(
              c + b * k,
              1.52 + Math.cos(P) * 0.3,
              r.z + Math.sin(P) * 0.3,
            ),
          );
        }
        return new Es(new ws(m), S, 0.006, 4);
      },
      h = new bt(
        X0([f(r.bags0 + 0.3, r.x1 - 0.2), f(r.west[0], r.west[1] - 0.2)]),
        l,
      );
    ((h.name = "razor_wire"), u.add(h));
  }
  {
    const l = new Pt(0.29, 0.29, 0.88, 16);
    for (const [f, h] of [
      [0.55, -0.35],
      [0.9, 0.3],
      [1.35, -0.3],
    ]) {
      const c = new bt(Ct(l.clone().translate(r.gap[1] + f, 0.44, r.z + h)), w);
      ((c.castShadow = !0), (c.receiveShadow = !0), u.add(c));
    }
  }
  return { group: u };
}
const ce = 3.2,
  er = 720,
  Xo = (s, o) => {
    const t = Math.sin(s * 127.1 + o * 311.7) * 43758.5453;
    return t - Math.floor(t);
  },
  Fo = (s, o) => {
    const t = Math.floor(s),
      u = Math.floor(o);
    let e = s - t,
      r = o - u;
    ((e = e * e * (3 - 2 * e)), (r = r * r * (3 - 2 * r)));
    const a = Xo(t, u),
      p = Xo(t + 1, u),
      i = Xo(t, u + 1),
      d = Xo(t + 1, u + 1);
    return a + (p - a) * e + (i - a) * r + (a - p - i + d) * e * r;
  };
function or() {
  const s = [0, 0.28, 0.52, 0.76],
    o = [],
    t = [];
  for (const r of s) o.push(-0.5, r, 0, 0.5, r, 0);
  o.push(0, 1, 0);
  for (let r = 0; r < s.length - 1; r++) {
    const a = r * 2;
    t.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  const u = (s.length - 1) * 2;
  t.push(u, u + 1, u + 2);
  const e = new Po();
  return (
    e.setAttribute("position", new xt(o, 3)),
    e.setAttribute(
      "normal",
      new xt(
        new Float32Array(o.length).fill(0).map((r, a) => (a % 3 === 1 ? 1 : 0)),
        3,
      ),
    ),
    e.setIndex(t),
    e
  );
}
const Rs = `
float gh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float gn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(gh(i), gh(i + vec2(1.0, 0.0)), f.x), mix(gh(i + vec2(0.0, 1.0)), gh(i + vec2(1.0, 1.0)), f.x), f.y); }
`,
  Na = `
uniform float uWindT, uWind, uBurn;
uniform vec3 uWindDir;
uniform vec4 uPush0, uPush1;   // x, z, radius, strength
vec2 lawnBend(vec3 root, float yaw, float arch, float var, float stiff) {
  vec2 f = vec2(sin(yaw), cos(yaw)), sd = vec2(cos(yaw), -sin(yaw));
  vec2 wd = uWindDir.xz;
  float gust = gn(root.xz * 0.21 - wd * uWindT * 1.15) * 0.7 + gn(root.xz * 0.83 - wd * uWindT * 2.4) * 0.3;
  float flutter = sin(uWindT * (2.3 + var * 1.7) + var * 40.0 + root.x * 0.6 + root.z * 0.4);
  vec2 B = f * arch + (wd * (0.06 + 0.62 * gust * gust) + sd * flutter * 0.05) * uWind * (1.0 - uBurn) * stiff;
  for (int k = 0; k < 2; k++) {
    vec4 pu = k == 0 ? uPush0 : uPush1;
    vec2 dp = root.xz - pu.xy; float dl = length(dp);
    float pk = (1.0 - smoothstep(pu.z * 0.35, pu.z, dl)) * pu.w;
    B += (dl > 1e-3 ? dp / dl : vec2(0.0)) * pk;
  }
  float bl = length(B); if (bl > 0.93) B *= 0.93 / bl;
  return B;
}
`,
  La = (s) =>
    Pa.lights_fragment_begin.replace(
      /(getDirectionalLightInfo\( directionalLight, directLight \);[\s\S]*?)(RE_Direct\( directLight)/,
      `$1{
    float back = pow(max(-dot(geometryViewDir, directLight.direction), 0.0), 3.0);
    float thru = max(-dot(geometryNormal, directLight.direction), 0.0);
    reflectedLight.directDiffuse += directLight.color * material.diffuseColor * (back * 0.8 + thru * 0.22) * ${s};
  }
  $2`,
    );
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
function cr(s, { circles: o = [], trees: t = [], U: u = null } = {}) {
  const e = new Kt();
  e.name = "lawn";
  let r = 7771;
  const a = () => (r = (r * 16807) % 2147483647) / 2147483647,
    p = {
      uWindT: u?.uWindT || { value: 0 },
      uWind: u?.uWind || { value: 1 },
      uBurn: { value: 0 },
      uWindDir: { value: new dt(0.82, 0, 0.57).normalize() },
      uPush0: { value: new H0(0, 0, 0.55, 0) },
      uPush1: { value: new H0(0, 0, 0.5, 0) },
    },
    i = sr(p),
    d = [Yt.a, Yt.b],
    y = (M, m) => {
      for (const k of o) {
        const S = M - k.x,
          A = m - k.z;
        if (S * S + A * A < (k.r + 0.04) ** 2) return !0;
      }
      for (const k of d) if (Math.hypot(M - k[0], m - k[1]) < 0.75) return !0;
      return !1;
    },
    w = (M, m) => {
      let k = 0;
      for (const S of t) {
        const A = Math.hypot(M - S.x, m - S.z);
        k = Math.max(
          k,
          1 - Math.min(1, Math.max(0, (A - S.r * 0.35) / (S.r * 0.75))),
        );
      }
      return k;
    };
  function g(M, m) {
    if (
      M < V0.x0 + 0.32 ||
      M > V0.x1 - 0.32 ||
      m < V0.z0 + 0.32 ||
      m > V0.z1 - 0.32
    )
      return null;
    const k = J0(M, m);
    if (k < 0.22) return null;
    const S = Bo(M, m);
    if (S < 0.5 || y(M, m)) return null;
    const A = Fo(M * 0.45 + 11, m * 0.45 - 3),
      b = Fo(M * 1.7, m * 1.7);
    let P = 0.72 + 0.28 * A,
      _ = 0.06 + 0.17 * A * A + 0.04 * b;
    const I = Math.min(1, (S - 0.5) / 0.4);
    ((P *= 0.25 + 0.75 * I), (_ *= 0.55 + 0.45 * I));
    const R = w(M, m);
    ((P *= 1 - 0.6 * R), (_ *= 1 - 0.35 * R));
    const V = 1 - Math.min(1, (k - 0.22) / 0.9);
    return (
      (_ *= 1 + 1.5 * V * V),
      (P *= 1 - 0.25 * V),
      { dens: P, h: _, shore: V }
    );
  }
  const z = 1 / Math.sqrt(er),
    x = [],
    v = or();
  let n = 0;
  for (let M = V0.z0; M < V0.z1; M += ce)
    for (let m = V0.x0; m < V0.x1; m += ce) {
      const k = [];
      for (let R = M + z * 0.5; R < Math.min(M + ce, V0.z1); R += z)
        for (let V = m + z * 0.5; V < Math.min(m + ce, V0.x1); V += z) {
          const L = V + (a() - 0.5) * z * 0.95,
            K = R + (a() - 0.5) * z * 0.95,
            j = g(L, K);
          if (!j || a() > j.dens) continue;
          const O = j.h * (0.66 + 0.6 * a() * a() + 0.16 * a()),
            J = 0.014 + 0.012 * a() + 0.004 * j.shore,
            tt = 0.18 + 0.4 * a() + 0.2 * j.shore;
          k.push([L, Me(L, K) - 0.01, K, a() * Math.PI * 2, O, J, tt]);
        }
      if (!k.length) continue;
      for (let R = k.length - 1; R > 0; R--) {
        const V = Math.floor(a() * (R + 1));
        [k[R], k[V]] = [k[V], k[R]];
      }
      const S = k.length,
        A = new Float32Array(S * 4),
        b = new Float32Array(S * 4);
      for (let R = 0; R < S; R++) {
        const V = k[R];
        (A.set([V[0], V[1], V[2], V[3]], R * 4),
          b.set([V[4], V[5], V[6], (R + 0.5) / S], R * 4));
      }
      const P = new Po();
      ((P.index = v.index),
        (P.attributes.position = v.attributes.position),
        (P.attributes.normal = v.attributes.normal),
        P.setAttribute("aRoot", new M0(A, 4)),
        P.setAttribute("aShape", new M0(b, 4)),
        (P.instanceCount = S));
      const _ = new dt(m + ce / 2, 0.3, M + ce / 2);
      ((P.boundingSphere = new hs(_, ce * 0.75 + 0.9)),
        (P.boundingBox = new ba(
          new dt(m - 0.6, -0.3, M - 0.6),
          new dt(m + ce + 0.6, 1.2, M + ce + 0.6),
        )));
      const I = new bt(P, i);
      ((I.name = "lawn_chunk"),
        (I.receiveShadow = !0),
        (I.castShadow = !1),
        I.layers.set(2),
        e.add(I),
        x.push({ mesh: I, g: P, n: S, x0: m, z0: M }),
        (n += S));
    }
  s.game.camera.layers.enable(2);
  const l = [];
  for (let M = V0.z0 + 0.4; M < V0.z1 - 0.4; M += 0.16)
    for (let m = V0.x0 + 0.4; m < V0.x1 - 0.4; m += 0.16) {
      const k = m + (a() - 0.5) * 0.15,
        S = M + (a() - 0.5) * 0.15,
        A = g(k, S);
      if (!A || A.shore > 0.6 || Bo(k, S) < 0.85) continue;
      const b = w(k, S),
        P = Fo(k * 0.38 + 40, S * 0.38),
        _ = Fo(k * 0.33 - 17, S * 0.33 + 9),
        I = Fo(k * 0.5 + 3, S * 0.5 - 30);
      let R = -1,
        V = 0;
      if (
        (b > 0.35
          ? ((R = 2), (V = 0.2 * b))
          : P > 0.6
            ? ((R = 0), (V = (P - 0.6) * 2.2))
            : _ > 0.64
              ? ((R = 1), (V = (_ - 0.64) * 2))
              : I > 0.66 && ((R = 3), (V = (I - 0.66) * 1.4)),
        R < 0 || a() > V)
      )
        continue;
      const L =
          R === 1
            ? 0.2 + a() * 0.16
            : R === 2
              ? 0.06 + a() * 0.05
              : R === 3
                ? 0.08 + a() * 0.06
                : 0.1 + a() * 0.12,
        K =
          R === 1
            ? 0.036 + a() * 0.012
            : R === 2
              ? 0.034 + a() * 0.01
              : R === 3
                ? 0.03 + a() * 0.008
                : 0.046 + a() * 0.016;
      l.push([
        k,
        Me(k, S) - 0.01,
        S,
        a() * Math.PI * 2,
        Math.max(L, A.h * 0.9 + 0.02),
        K,
        0.1 + a() * 0.25,
        R + a() * 0.98,
      ]);
    }
  let f = null;
  if (l.length) {
    const M = l.length,
      m = new Float32Array(M * 4),
      k = new Float32Array(M * 4);
    l.forEach((A, b) => {
      (m.set(A.slice(0, 4), b * 4), k.set(A.slice(4, 8), b * 4));
    });
    const S = nr();
    (S.setAttribute("aRoot", new M0(m, 4)),
      S.setAttribute("aShape", new M0(k, 4)),
      (S.instanceCount = M),
      (S.boundingSphere = new hs(new dt(0, 0.2, 0), 20)),
      (f = new bt(S, rr(p, ar()))),
      (f.name = "lawn_flowers"),
      (f.receiveShadow = !0),
      f.layers.set(2),
      e.add(f));
  }
  let h = n;
  function c(M, m, k, S = []) {
    const A = k.position.x,
      b = k.position.z;
    h = 0;
    for (const _ of x) {
      const I = Math.max(_.x0 - A, 0, A - (_.x0 + ce)),
        R = Math.max(_.z0 - b, 0, b - (_.z0 + ce)),
        V = Math.hypot(I, R),
        L = 1.1 - Math.min(0.78, Math.max(0, (V - 7) / 16));
      ((_.g.instanceCount = Math.min(_.n, Math.ceil(_.n * L) + 8)),
        (_.mesh.visible = V < 40),
        _.mesh.visible && (h += _.g.instanceCount));
    }
    const P = [p.uPush0.value, p.uPush1.value];
    for (let _ = 0; _ < 2; _++) {
      const I = S[_];
      I ? P[_].set(I.x, I.z, I.r ?? 0.5, I.k ?? 0.75) : (P[_].w = 0);
    }
  }
  return {
    group: e,
    U: p,
    update: c,
    chunks: x,
    get stats() {
      return { blades: n, drawn: h, chunks: x.length, flowers: l.length };
    },
    setWorld(M) {
      ((p.uBurn.value = M === "ruins" ? 1 : 0),
        f && (f.visible = M !== "ruins"));
    },
  };
}
const oo = Ia - Z0;
function Wo(s, o, t, { stop: u = 0, small: e = !1, rng: r }) {
  const a = u || 0.62,
    p = Z0 - 0.68,
    i = e ? 0.17 : 0.3,
    d = e ? 0.1 : 0.13,
    y = e ? 0 : 0.075,
    w = (f, h, c, M) => {
      const m = new Pt(c, c, p - a, M, 1, !0);
      m.translate(o + f, (a + p) / 2, t + h);
      const k = m.attributes.uv,
        S = m.attributes.position,
        A = Math.max(1, Math.round((2 * Math.PI * c) / 0.5)) * 0.5,
        b = (o * 3.1 + t * 1.7) % 2;
      for (let P = 0; P < k.count; P++)
        k.setXY(P, k.getX(P) * A + b, S.getY(P));
      s("stone", m);
    };
  w(0, 0, i, 20);
  for (let f = 0; f < 4; f++) {
    const h = (f * Math.PI) / 2;
    w(Math.cos(h) * i, Math.sin(h) * i, d, 14);
  }
  if (y)
    for (let f = 0; f < 4; f++) {
      const h = Math.PI / 4 + (f * Math.PI) / 2;
      w(Math.cos(h) * (i + 0.04), Math.sin(h) * (i + 0.04), y, 10);
    }
  const g = i + d;
  if (u)
    (s(
      "stone",
      Wt(
        [
          [0, u - 0.75],
          [0.06, u - 0.74],
          [g * 0.45, u - 0.55],
          [g * 0.8, u - 0.3],
          [g + 0.08, u - 0.12],
          [g + 0.1, u - 0.04],
          [g + 0.04, u],
          [0, u],
        ],
        o,
        0,
        t,
        { segs: 24, tile: 1 },
      ),
    ),
      s(
        "stone",
        A0(
          (f, h) =>
            g * (0.35 + 0.6 * h) +
            0.05 *
              Math.pow(Math.max(0, Math.cos(f * 4 + 0.4)), 0.6) *
              Math.sin(Math.PI * h),
          (f) => u - 0.7 + f * 0.55,
          32,
          6,
          o,
          t,
        ),
      ));
  else {
    const f = new Pt(g + 0.19, g + 0.21, 0.32, 8, 1);
    (f.rotateY(Math.PI / 8),
      f.translate(o, 0.16, t),
      s("stone", f),
      s(
        "stone",
        Wt(
          [
            [0, 0.32],
            [g + 0.16, 0.32],
            [g + 0.17, 0.35],
            [g + 0.16, 0.39],
            [g + 0.12, 0.41],
            [g + 0.07, 0.44],
            [g + 0.06, 0.47],
            [g + 0.09, 0.5],
            [g + 0.1, 0.53],
            [g + 0.08, 0.56],
            [g + 0.03, 0.59],
            [g, 0.62],
            [0, 0.62],
          ],
          o,
          0,
          t,
          { segs: 32, tile: 1 },
        ),
      ));
  }
  const z = p;
  s(
    "stone",
    Wt(
      [
        [g + 0.005, z - 0.01],
        [g + 0.035, z + 0.01],
        [g + 0.04, z + 0.035],
        [g + 0.01, z + 0.06],
        [0, z + 0.06],
      ],
      o,
      0,
      t,
      { segs: 28, tile: 1 },
    ),
  );
  const x = e ? 6 : 10,
    v = r() * 6;
  s(
    "stone",
    A0(
      (f, h) => {
        const c = g - 0.02 + 0.2 * h * h,
          M = Math.pow(Math.max(0, Math.cos(f * x + v)), 0.7),
          m = Math.pow(Math.max(0, Math.cos(f * x + v + Math.PI)), 0.9),
          k = h > 0.62 ? Math.sin(((h - 0.62) / 0.38) * Math.PI) : 0;
        return (
          c +
          0.035 * M * Math.sin(Math.PI * Math.min(1, h * 1.3)) +
          0.09 * M * k +
          0.03 * m * Math.sin(Math.PI * h)
        );
      },
      (f) => z + 0.06 + f * 0.4,
      e ? 36 : 60,
      10,
      o,
      t,
    ),
  );
  const n = new Pt(g + 0.24, g + 0.2, 0.2, 8, 1);
  (n.rotateY(Math.PI / 8), n.translate(o, Z0 - 0.1, t), s("stone", n));
  const l = new Pt(g + 0.2, g + 0.14, 0.06, 8, 1);
  (l.rotateY(Math.PI / 8), l.translate(o, Z0 - 0.23, t), s("stone", l));
}
const ir = [
    [-0.1, -0.06],
    [-0.1, 0.06],
    [-0.055, 0.13],
    [-0.055, 0.17],
    [-0.02, 0.24],
    [0.02, 0.24],
    [0.055, 0.17],
    [0.055, 0.13],
    [0.1, 0.06],
    [0.1, -0.06],
  ],
  lr = [
    [-0.15, -0.06],
    [-0.15, 0.08],
    [-0.1, 0.14],
    [-0.1, 0.22],
    [-0.05, 0.28],
    [-0.05, 0.33],
    [0.05, 0.33],
    [0.05, 0.28],
    [0.1, 0.22],
    [0.1, 0.14],
    [0.15, 0.08],
    [0.15, -0.06],
  ],
  hr = [
    [-0.24, -0.06],
    [-0.24, 0.1],
    [-0.18, 0.16],
    [-0.18, 0.28],
    [-0.11, 0.34],
    [-0.11, 0.44],
    [0.11, 0.44],
    [0.11, 0.34],
    [0.18, 0.28],
    [0.18, 0.16],
    [0.24, 0.1],
    [0.24, -0.06],
  ],
  ia = [
    [-0.12, -0.06],
    [-0.12, 0.05],
    [-0.07, 0.1],
    [0.07, 0.1],
    [0.12, 0.05],
    [0.12, -0.06],
  ];
function ur(s, o, t, u, e = 14, r = 7) {
  const a = ue((o - s) / 2, oo),
    p = ue((u - t) / 2, oo),
    i = (s + o) / 2,
    d = (t + u) / 2,
    y = Math.acos((p.R - p.a) / p.R),
    w = [];
  for (let l = 0; l <= e; l++) w.push(p.R * Math.sin((y * l) / e));
  w[e] = oo;
  const g = (l) => p.R * Math.asin(Math.min(1, l / p.R)),
    z = (l) => a.R * Math.asin(Math.min(1, l / a.R)),
    x = [];
  for (let l = 0; l <= e; l++) x.push([l, 1]);
  for (let l = e - 1; l >= 0; l--) x.push([l, -1]);
  const v = [];
  for (const l of [-1, 1]) {
    const f = [],
      h = [];
    for (const [c, M] of x) {
      const m = w[c],
        k = M > 0 ? t + p.inv(m) : u - p.inv(m),
        S = a.inv(m),
        A = M > 0 ? g(m) : 2 * g(oo) - g(m);
      for (let b = 0; b <= r; b++) {
        const P = b / r,
          _ = l < 0 ? s + P * S : o - P * S;
        (f.push([_, Z0 + m, k]), h.push([_, A]));
      }
    }
    v.push({ P: f, UV: h, cols: r + 1, rows: x.length });
  }
  for (const l of [-1, 1]) {
    const f = [],
      h = [];
    for (const [c, M] of x) {
      const m = w[c],
        k = M > 0 ? s + a.inv(m) : o - a.inv(m),
        S = p.inv(m),
        A = M > 0 ? z(m) : 2 * z(oo) - z(m);
      for (let b = 0; b <= r; b++) {
        const P = b / r,
          _ = l < 0 ? t + P * S : u - P * S;
        (f.push([k, Z0 + m, _]), h.push([_, A]));
      }
    }
    v.push({ P: f, UV: h, cols: r + 1, rows: x.length });
  }
  const n = [];
  for (const [l, f] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ]) {
    const h = [];
    for (let c = 0; c <= e; c++) {
      const M = w[c];
      h.push([
        l < 0 ? s + a.inv(M) : o - a.inv(M),
        Z0 + M,
        f < 0 ? t + p.inv(M) : u - p.inv(M),
      ]);
    }
    n.push(h);
  }
  return { A: a, B: p, xc: i, zc: d, webs: v, groins: n };
}
function fr(s, o) {
  const t = [],
    u = [],
    e = new Map(),
    r = [],
    a = (x, v, n) => x.base + v * x.cols + n;
  for (const x of s) {
    x.base = t.length / 3;
    for (let v = 0; v < x.P.length; v++)
      (t.push(...x.P[v]), u.push(x.UV[v][0], x.UV[v][1]));
    for (let v = 0; v < x.rows - 1; v++)
      for (let n = 0; n < x.cols - 1; n++) {
        const l = a(x, v, n),
          f = a(x, v, n + 1),
          h = a(x, v + 1, n),
          c = a(x, v + 1, n + 1);
        for (const M of [
          [l, f, h],
          [f, c, h],
        ]) {
          const m = (t[M[0] * 3] + t[M[1] * 3] + t[M[2] * 3]) / 3,
            k = (t[M[0] * 3 + 2] + t[M[1] * 3 + 2] + t[M[2] * 3 + 2]) / 3;
          (o && ds(m, k) > 0) || r.push(M);
        }
      }
  }
  const p = new Rt();
  (p.setAttribute("position", new xt(t, 3)),
    p.setAttribute("uv", new xt(u, 2)),
    p.setIndex(r.flat()),
    p.computeVertexNormals());
  const i = p.attributes.normal;
  let d = 0;
  for (let x = 0; x < i.count; x++) d += i.getY(x);
  if (d > 0) {
    const x = p.index.array;
    for (let v = 0; v < x.length; v += 3) {
      const n = x[v + 1];
      ((x[v + 1] = x[v + 2]), (x[v + 2] = n));
    }
    p.computeVertexNormals();
  }
  if (!o) return [p];
  for (const x of r)
    for (let v = 0; v < 3; v++) {
      const n = x[v],
        l = x[(v + 1) % 3],
        f = n < l ? n + "_" + l : l + "_" + n;
      e.set(f, (e.get(f) || 0) + 1);
    }
  const y = [],
    w = [],
    g = (x) => new dt(t[x * 3], t[x * 3 + 1], t[x * 3 + 2]);
  for (const x of r)
    for (let v = 0; v < 3; v++) {
      const n = x[v],
        l = x[(v + 1) % 3],
        f = n < l ? n + "_" + l : l + "_" + n;
      if (e.get(f) !== 1) continue;
      const h = g(n),
        c = g(l),
        M = (h.x + c.x) / 2,
        m = (h.z + c.z) / 2;
      if (ds(M, m) < -0.3) continue;
      const k = new dt(i.getX(n), i.getY(n), i.getZ(n)),
        S = new dt(i.getX(l), i.getY(l), i.getZ(l)),
        A = 0.22 + 0.08 * Math.sin(M * 13.1 + m * 7.3),
        b = h.clone().addScaledVector(k, -A),
        P = c.clone().addScaledVector(S, -A),
        _ = g(x[(v + 2) % 3]),
        I = new dt()
          .subVectors(h.clone().add(c).multiplyScalar(0.5), _)
          .normalize();
      let R = [h, c, P, h, P, b];
      new dt().subVectors(c, h).cross(new dt().subVectors(P, h)).dot(I) < 0 &&
        (R = [h, P, c, h, b, P]);
      for (const L of R) (y.push(L.x, L.y, L.z), w.push(I.x, I.y, I.z));
    }
  const z = new Rt();
  return (
    z.setAttribute("position", new xt(y, 3)),
    z.setAttribute("normal", new xt(w, 3)),
    [p, Ct(z)]
  );
}
function Ss(s, o, t, u, { cut: e = !1, mat: r = "rib" } = {}) {
  const a = t.map((y, w) => u(y, w));
  let p = [],
    i = [];
  const d = () => {
    (p.length >= 2 && s(r, I0(o, p, i, { crease: 0.6 })), (p = []), (i = []));
  };
  for (let y = 0; y < t.length; y++) {
    if (e && ds(t[y][0], t[y][2]) > -0.05) {
      d();
      continue;
    }
    (p.push(t[y]), i.push(a[y]));
  }
  d();
}
function dr(s, o = 0.12) {
  const t = [s[0]];
  for (let u = 1; u < s.length; u++) {
    const e = s[u - 1],
      r = s[u],
      a = Math.hypot(r[0] - e[0], r[1] - e[1], r[2] - e[2]),
      p = Math.max(1, Math.ceil(a / o));
    for (let i = 1; i <= p; i++)
      t.push([
        e[0] + ((r[0] - e[0]) * i) / p,
        e[1] + ((r[1] - e[1]) * i) / p,
        e[2] + ((r[2] - e[2]) * i) / p,
      ]);
  }
  return t;
}
function pr(s, o) {
  const t = [];
  for (const i of sa)
    for (const d of [-S0, S0])
      (Wo(s, d, i, { rng: o }),
        t.push({
          x0: d - 0.44,
          x1: d + 0.44,
          z0: i - 0.44,
          z1: i + 0.44,
          y0: 0,
          y1: Z0,
        }));
  for (const i of sa)
    for (const d of [pt.x0, pt.x1])
      (Wo(s, d, i, { rng: o }),
        t.push({
          x0: d < 0 ? d : d - 0.44,
          x1: d < 0 ? d + 0.44 : d,
          z0: i - 0.44,
          z1: i + 0.44,
          y0: 0,
          y1: Z0,
        }));
  for (const i of [-S0, S0])
    (Wo(s, i, pt.z0, { rng: o }),
      t.push({
        x0: i - 0.44,
        x1: i + 0.44,
        z0: pt.z0,
        z1: pt.z0 + 0.44,
        y0: 0,
        y1: Z0,
      }));
  for (const i of [-S0, S0]) Wo(s, i, pt.z1, { rng: o, stop: 5.6 });
  for (const i of [pt.x0, pt.x1])
    for (const d of [pt.z0, pt.z1])
      Wo(s, i, d, { rng: o, small: !0, stop: d > 60 && i > 0 ? 3.2 : 0 });
  const u = [];
  for (let i = 0; i < Te.length - 1; i++)
    for (let d = 0; d < 3; d++)
      u.push({ i: d, j: i, ...ur(Oo[d], Oo[d + 1], Te[i], Te[i + 1]) });
  const e = [];
  for (const i of u) {
    const d = i.j === 2 && i.i < 2,
      [y, w] = fr(i.webs, d);
    (e.push(y), w && s("web", w), (i.cut = d));
  }
  for (const i of e) s("web", i, { cast: !0 });
  for (const i of u) {
    for (const d of i.groins) {
      const y = dr(d, 0.1);
      Ss(
        s,
        ir,
        y,
        (w) => {
          const g = w[0] - i.xc,
            z = w[2] - i.zc,
            x = i.A.dh(g),
            v = i.B.dh(z),
            n = new dt(x, -1, 0).normalize(),
            l = new dt(0, -1, v).normalize(),
            f = n.add(l);
          return (
            f.lengthSq() < 1e-6 && f.set(0, -1, 0),
            f.normalize().toArray()
          );
        },
        { cut: i.cut },
      );
    }
    i.cut ||
      s(
        "rib",
        A0(
          (d, y) =>
            (0.2 * Math.sin(Math.PI * (0.08 + 0.92 * y)) + 0.03) *
            (1 +
              0.18 *
                Math.pow(Math.max(0, Math.cos(d * 6)), 0.5) *
                Math.sin(Math.PI * y)),
          (d) => Ia - 0.34 + d * 0.4,
          36,
          8,
          i.xc,
          i.zc,
        ),
      );
  }
  const r = (i, d, y, w) =>
      i
        .pts(40)
        .map(([g, z]) => (y === "x" ? [w + g, Z0 + z, d] : [d, Z0 + z, w + g])),
    a = (i, d, y) => (w) => {
      const g = (y === "x" ? w[0] : w[2]) - d,
        z = w[1] - Z0,
        [x, v] = i.inward(g, z);
      return y === "x" ? [x, v, 0] : [0, v, x];
    };
  for (let i = 0; i < Te.length; i++)
    for (let d = 0; d < 3; d++) {
      const y = Oo[d],
        w = Oo[d + 1],
        g = ue((w - y) / 2, oo),
        z = (y + w) / 2,
        x = i === 0 || i === Te.length - 1,
        v = Te[i] + (i === 0 ? 0.02 : x ? -0.02 : 0);
      Ss(s, x ? ia : lr, r(g, v, "x", z), a(g, z, "x"));
    }
  for (let i = 0; i < Te.length - 1; i++)
    for (const d of [pt.x0 + 0.02, -S0, S0, pt.x1 - 0.02]) {
      const y = Te[i],
        w = Te[i + 1],
        g = ue((w - y) / 2, oo),
        z = (y + w) / 2,
        x = Math.abs(d) > 6;
      Ss(s, x ? ia : hr, r(g, d, "z", z), a(g, z, "z"));
    }
  const p = new m0(pt.x1 - pt.x0, pt.z1 - pt.z0 + 0.1, 1, 1)
    .rotateX(-Math.PI / 2)
    .translate(0, 0, (pt.z0 + pt.z1) / 2 - 0.05);
  s("floor", Ct(p), { cast: !1 });
  for (let i = 0; i < 3; i++) {
    const d = jt.steps[i],
      y = jt.rise * (i + 1);
    s(
      "floor",
      Mt(
        jt.x0 + i * 0.001,
        y - jt.rise - 0.02,
        d,
        jt.x1 - i * 0.001,
        y,
        jt.z1 - 0.01,
        0.018,
        "x",
        2,
      ),
      { cast: !1 },
    );
  }
  return (
    t.push({
      x0: jt.x0 - 0.05,
      x1: -1.6,
      z0: jt.steps[1],
      z1: pt.z1,
      y0: 0,
      y1: 1,
    }),
    t.push({
      x0: -1.6,
      x1: jt.x1 + 0.05,
      z0: jt.steps[0],
      z1: pt.z1,
      y0: 0,
      y1: 1,
    }),
    { colliders: t, cells: u }
  );
}
const xo = (s) => s.toFixed(4),
  Vo = { uSmash: { value: 0 } },
  mr = `
attribute vec4 aBack;
attribute vec4 aInfo;
varying vec2 vUv;
varying vec4 vBack;
varying vec4 vInfo;
varying vec3 vW;
#include <common>
#include <fog_pars_vertex>
void main() {
  vUv = uv; vBack = aBack; vInfo = aInfo;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vW = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,
  Da = `
float gh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float gn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(gh(i), gh(i + vec2(1, 0)), f.x), mix(gh(i + vec2(0, 1)), gh(i + vec2(1, 1)), f.x), f.y); }
// the broken lancet: a jagged hole low in its left light (window-local u, v)
bool broken(vec4 info) {
  if (info.x < 0.5) return false;
  vec2 q = info.yz;
  float n = gn(q * vec2(9.0, 34.0)) * 0.5 + gn(q * vec2(31.0, 97.0)) * 0.3 + gn(q * vec2(80.0, 260.0)) * 0.2;
  float d = length((q - vec2(0.3, 0.33)) * vec2(1.0, 2.9)) + (n - 0.5) * 0.3;
  float d2 = length((q - vec2(0.7, 0.2)) * vec2(1.2, 4.0)) + (n - 0.5) * 0.25;
  return d < 0.3 || d2 < 0.12;
}
// the light that gives (info.w = 1): q = metres in that light (x across from its middle, y up from the sill). The hole: an
// upright oval from the sill up ~2.7 m, wider than the light (so its sides go, but for jagged bits at the corners), its rim
// cut into eleven teeth of glass of random depth with a ragged noise on top; it grows from where it was struck (1 m up)
uniform float uSmash;
vec2 smashQ(vec4 info) { return vec2((info.y - 0.5) * ${xo(e0.w)} - (${xo(co.u)}), info.z * ${xo(e0.apex - e0.sill)}); }
float smashK() { float s = clamp(uSmash, 0.0, 1.0); return 1.0 - (1.0 - s) * (1.0 - s) * (1.0 - s); }
float smashD(vec2 q, float k) {
  vec2 d = (q - mix(vec2(0.0, 1.1), vec2(0.0, 1.75), k)) / vec2(0.55, 1.95);
  float r = length(d), a = atan(d.y, d.x);
  float s = a * 1.7507 + 5.5;
  float i = floor(s), f = fract(s);
  float tooth = (0.05 + 0.27 * gh(vec2(i, 4.1))) * pow(1.0 - abs(2.0 * f - 1.0), 1.6);
  float rag = (gn(q * vec2(21.0, 15.0)) - 0.5) * 0.09 + (gn(q * vec2(57.0, 43.0)) - 0.5) * 0.04;
  return r - k * (1.0 - tooth + rag);
}
// (round 5b, the user: "make the window break a bit more visual": the hole runs ~3.7 m up the struck light, and the light
// beside it goes too - a little lower, the debris through it: smashQ2 is that light's own q, its hole a size smaller)
vec2 smashQ2(vec2 q) { return vec2(q.x - ${xo(-2 * co.u)}, (q.y - 0.15) * 1.18); }
bool smashed(vec4 info) {
  if (info.w < 0.5 || uSmash <= 0.0) return false;
  vec2 q = smashQ(info);
  if (q.x > ${xo(-co.u)}) return smashD(smashQ2(q), smashK()) < 0.0;
  return smashD(q, smashK()) < 0.0;
}`,
  xr = `
uniform sampler2D map;
uniform float uT;
uniform float uGain;
uniform float uOut;
varying vec2 vUv;
varying vec4 vBack;
varying vec4 vInfo;
varying vec3 vW;
#include <common>
#include <fog_pars_fragment>
${Da}
void main() {
  if (broken(vInfo) || smashed(vInfo)) discard;
  vec3 g = texture2D(map, vUv).rgb;
  // the fire behind the glass: slow uneven drifts, a flicker, brighter low down (the glow of the burning streets)
  float t = uT + vBack.w * 7.0;
  float drift = gn(vW.xz * 0.45 + vec2(vW.y * 0.3 + t * 0.21, -t * 0.13)) * 0.6 + gn(vW.zx * 1.3 + vec2(t * 0.5, vW.y)) * 0.4;
  float flick = 1.0 + 0.07 * sin(t * 2.3) * sin(t * 3.1 + 1.7) + 0.04 * sin(t * 7.7);
  float low = mix(1.18, 0.78, clamp(vInfo.z, 0.0, 1.0));
  vec3 col = g * vBack.rgb * (0.72 + 0.5 * drift) * flick * low * uGain;
  // what is left of the light that gave: cracks running out from the hole, its broken edge bright with the fire
  if (vInfo.w > 0.5 && uSmash > 0.0) {
    vec2 q = smashQ(vInfo);
    if (q.x > ${xo(-co.u)}) q = smashQ2(q);
    {
      float k = smashK(), dd = smashD(q, k);
      vec2 d = (q - vec2(0.0, 1.75)) / vec2(0.55, 1.95);
      float cr = abs(fract(atan(d.y, d.x) * 2.07 + gn(q * 5.0) * 0.7) - 0.5);
      float crack = (1.0 - smoothstep(0.0, 0.018 / max(length(d), 0.4), cr)) * (1.0 - smoothstep(0.04, 0.55, dd)) * k;
      col *= 1.0 - 0.8 * crack;
      col *= 1.0 + 1.6 * k * (1.0 - smoothstep(0.0, 0.05, dd));
    }
  }
  if (!gl_FrontFacing) col = g * vec3(1.0, 0.5, 0.2) * uOut * (0.8 + 0.3 * drift);
  gl_FragColor = vec4(col, 1.0);
  #include <fog_fragment>
}`;
function vr(s, o, t, u, e) {
  const r = { uT: { value: 0 }, uGain: { value: 1.4 }, uOut: { value: 0.35 } },
    a = (M) =>
      new P0({
        uniforms: { ...ko.merge([So.fog]), map: { value: M } },
        vertexShader: mr,
        fragmentShader: xr,
        side: p0,
        fog: !0,
      }),
    p = u.get("church_glass").map,
    i = u.get("church_glass2").map,
    d = a(p),
    y = a(i);
  for (const M of [d, y])
    ((M.uniforms.uT = r.uT),
      (M.uniforms.uGain = r.uGain),
      (M.uniforms.uOut = r.uOut),
      (M.uniforms.uSmash = Vo.uSmash),
      (M.name = "church_glass"));
  const w = { L: [], G: [] },
    g = (M, m) => [
      [-M / 2, -m * 0.55],
      [-M * 0.3, -m],
      [M * 0.3, -m],
      [M / 2, -m * 0.55],
      [M / 2, m * 0.55],
      [M * 0.3, m],
      [-M * 0.3, m],
      [-M / 2, m * 0.55],
    ],
    z = (M, m, k, S, A, b = {}) => {
      const P = b.depth ?? 0.11,
        _ = (L) => L.map(([K, j]) => m(K, j, 0));
      t("tracery", I0(g(M.fb, P + 0.03), _(M.frame), k, { crease: 0.7 }));
      for (const [L, K, j] of M.mullions)
        t(
          "tracery",
          I0(
            g(M.bar, P),
            _([
              [L, K],
              [L, j],
            ]),
            k,
            { crease: 0.7 },
          ),
        );
      for (const L of M.lights)
        t("tracery", I0(g(M.bar, P), _(L.pts), k, { crease: 0.7 }));
      const I = [];
      for (let L = 0; L <= 40; L++) {
        const K = (L / 40) * Math.PI * 2;
        I.push([
          M.circle.cx + Math.cos(K) * M.circle.r,
          M.circle.cy + Math.sin(K) * M.circle.r,
        ]);
      }
      t("tracery", I0(g(M.bar, P), _(I), k, { crease: 0.7 }));
      const R = 0.03,
        V = Uo(M.w + 2 * R, M.sill - R, M.spring, M.apex + R, 18);
      x(
        V,
        M.sill,
        M.apex,
        M.w,
        m,
        S,
        A,
        b.broken ? 1 : 0,
        w[b.atlas || "L"],
        b.smash ? 1 : 0,
      );
    },
    x = (M, m, k, S, A, b, P, _, I, R = 0) => {
      const V = Aa.triangulateShape(
          M.map(([st, G]) => new re(st, G)),
          [],
        ),
        L = [],
        K = [],
        j = [],
        O = [],
        J = e() * 10;
      for (const [st, G] of M) {
        const q = A(st, G, 0);
        L.push(q[0], q[1], q[2]);
        const U = b(st, G);
        (K.push(U[0], U[1]),
          j.push(P[0], P[1], P[2], J),
          O.push(_, st / S + 0.5, (G - m) / (k - m), R));
      }
      const tt = new Rt();
      (tt.setAttribute("position", new xt(L, 3)),
        tt.setAttribute("uv", new xt(K, 2)),
        tt.setAttribute("aBack", new xt(j, 4)),
        tt.setAttribute("aInfo", new xt(O, 4)),
        tt.setIndex(V.flat()),
        tt.computeVertexNormals(),
        I.push(tt));
    },
    v = 0.45,
    n = [2.3, 1.45, 0.75],
    l = [2, 1.05, 0.55],
    f = [];
  fs.forEach((M, m) => {
    for (const k of [-1, 1]) {
      const S = k > 0,
        A = S ? [0, 1, 2][m] : [3, 1, 2][m],
        b = !S,
        P = !S && m === 0,
        _ = !S && M === co.zc,
        I = S ? pt.x1 + v : pt.x0 - v,
        R = (L, K, j) => [I - k * j, K, M + (S ? L : -L)],
        V = (L, K) => {
          let j = L / e0.w + 0.5;
          return (
            b && (j = 1 - j),
            [(A + j) / 4, (K - e0.sill) / (e0.apex - e0.sill)]
          );
        };
      (z(Wa, R, [-k, 0, 0], V, S ? n : l, { broken: P, smash: _ }),
        f.push({
          zc: M,
          east: S,
          slot: A,
          mirror: b,
          broken: P,
          smash: _,
          x: I,
          place: R,
          uvOf: V,
        }));
    }
  });
  {
    const M = pt.z1 + 0.4,
      m = (b, P, _) => [-b, P, M - _],
      k = z0.apex - z0.sill,
      S = ((k / z0.w) * 1024) / 2048;
    z(
      On,
      m,
      [0, 0, -1],
      (b, P) => [(b / z0.w + 0.5) * 0.5, 1 - S + ((P - z0.sill) / k) * S],
      [1.25, 1.45, 2.1],
      { atlas: "G", depth: 0.13 },
    );
  }
  {
    const M = pt.z0 - 0.5,
      m = jn,
      k = (_, I, R) => [_, I, M + R],
      S = (_, I) => [0.75 + (_ / m.r) * 0.25, 0.75 + ((I - G0.y) / m.r) * 0.25],
      A = (_) => _.map(([I, R]) => k(I, R, 0)),
      b = (_, I = 72) => {
        const R = [];
        for (let V = 0; V <= I; V++) {
          const L = (V / I) * Math.PI * 2;
          R.push([Math.cos(L) * _, G0.y + Math.sin(L) * _]);
        }
        return R;
      };
    (t("tracery", I0(g(0.14, 0.14), A(b(m.frame)), [0, 0, 1], { crease: 0.7 })),
      t(
        "tracery",
        I0(g(m.bar, 0.11), A(b(m.hub, 40)), [0, 0, 1], { crease: 0.7 }),
      ),
      t(
        "tracery",
        I0(g(m.bar, 0.11), A(b(m.mid, 60)), [0, 0, 1], { crease: 0.7 }),
      ));
    for (let _ = 0; _ < m.spokes; _++) {
      const I = (_ / m.spokes) * Math.PI * 2 + Math.PI / 2,
        R = Math.cos(I),
        V = Math.sin(I);
      t(
        "tracery",
        I0(
          g(m.bar, 0.11),
          A([
            [R * m.hub, G0.y + V * m.hub],
            [R * m.frame, G0.y + V * m.frame],
          ]),
          [0, 0, 1],
          { crease: 0.7 },
        ),
      );
      const L = I + (Math.PI * 2) / m.spokes,
        K = [];
      for (let j = 0; j <= 12; j++) {
        const O = j / 12,
          J = I + (L - I) * O,
          tt =
            m.petal -
            0.2 +
            0.2 * Math.sin(Math.PI * O) +
            0.08 * (1 - Math.abs(O - 0.5) * 2) ** 3;
        K.push([Math.cos(J) * tt, G0.y + Math.sin(J) * tt]);
      }
      t("tracery", I0(g(m.bar * 0.8, 0.1), A(K), [0, 0, 1], { crease: 0.7 }));
    }
    const P = b(m.r + 0.02, 72).slice(0, 72);
    x(P, G0.y - m.r, G0.y + m.r, m.r * 2, k, S, [2.4, 1.5, 0.8], 0, w.G);
  }
  const h = (M, m, k) => {
      const S = Mr(M),
        A = new bt(S, m);
      return (
        (A.name = k),
        (A.castShadow = !0),
        (A.receiveShadow = !1),
        (A.customDepthMaterial = wr()),
        o.add(A),
        A
      );
    },
    c = [h(w.L, d, "church_lancets"), h(w.G, y, "church_great_rose")];
  return { U: r, SMU: Vo, meshes: c, lancets: f, tex1: p, tex2: i };
}
function Mr(s) {
  let o = 0,
    t = 0;
  for (const p of s) ((o += p.attributes.position.count), (t += p.index.count));
  const u = new Rt(),
    e = new Uint32Array(t);
  for (const [p, i] of [
    ["position", 3],
    ["normal", 3],
    ["uv", 2],
    ["aBack", 4],
    ["aInfo", 4],
  ]) {
    const d = new Float32Array(o * i);
    let y = 0;
    for (const w of s)
      (d.set(w.attributes[p].array, y * i), (y += w.attributes.position.count));
    u.setAttribute(p, new vt(d, i));
  }
  let r = 0,
    a = 0;
  for (const p of s) {
    const i = p.index.array;
    for (let d = 0; d < i.length; d++) e[a + d] = i[d] + r;
    ((a += i.length), (r += p.attributes.position.count));
  }
  return (u.setIndex(new vt(e, 1)), u.computeBoundingSphere(), u);
}
let As = null;
function wr() {
  if (As) return As;
  const s = new za({ depthPacking: ka });
  return (
    (s.onBeforeCompile = (o) => {
      ((o.uniforms.uSmash = Vo.uSmash),
        (o.vertexShader = o.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute vec4 aInfo;
varying vec4 vInfo;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
vInfo = aInfo;`,
          )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec4 vInfo;
` + Da,
          )
          .replace(
            "void main() {",
            `void main() {
  if (broken(vInfo) || smashed(vInfo)) discard;`,
          )));
    }),
    (s.customProgramCacheKey = () => "churchGlassDepth3"),
    (As = s),
    s
  );
}
const x0 = jt.y,
  N0 = (s, o, t, u, e, r, a, p = {}) => {
    const i = {
      x: o,
      y: t,
      z: u,
      h: e,
      r,
      lit: p.lit ?? !0,
      votive: !!p.votive,
      cl: a,
    };
    return (s.push(i), i);
  };
function yr(
  s,
  o,
  t,
  u,
  e,
  r,
  a,
  { h: p = 0.34, r: i = 0.019, rng: d, mat: y = "brass" } = {},
) {
  const w = r / 0.55;
  return (
    s(
      y,
      Wt(
        [
          [0, 0],
          [0.085 * w, 0],
          [0.09 * w, 0.012 * w],
          [0.07 * w, 0.03 * w],
          [0.03 * w, 0.07 * w],
          [0.022 * w, 0.1 * w],
          [0.035 * w, 0.12 * w],
          [0.02 * w, 0.14 * w],
          [0.016 * w, 0.3 * w],
          [0.03 * w, 0.33 * w],
          [0.018 * w, 0.36 * w],
          [0.017 * w, 0.49 * w],
          [0.05 * w, 0.51 * w],
          [0.055 * w, 0.525 * w],
          [0.03, r - 0.005],
          [0.024, r],
          [0, r],
        ].map(([g, z]) => [g, z]),
        t,
        u,
        e,
        { segs: 20, tile: 0.3 },
      ),
    ),
    N0(o, t, u + r, e, p * (0.75 + (d ? d() * 0.3 : 0.15)), i, a)
  );
}
function gr(s, o, t, u) {
  const e = [],
    d = x0 + 1;
  (s(
    "marble",
    Mt(-1.2 + 0.05, x0, 59.7 + 0.05, 1.2 - 0.05, d - 0.08, 60.62, 0.01, "x"),
  ),
    s(
      "marble",
      Mt(
        -1.2 - 0.02,
        x0,
        59.7 - 0.02,
        1.2 + 0.02,
        x0 + 0.1,
        60.62 + 0.02,
        0.012,
        "x",
      ),
    ),
    s(
      "marble",
      Mt(
        -1.2 - 0.04,
        d - 0.08,
        59.7 - 0.05,
        1.2 + 0.04,
        d,
        60.62 + 0.02,
        0.012,
        "x",
      ),
    ));
  for (let n = 0; n < 5; n++) {
    const l = -1.15 + ((n + 0.5) * 2.3) / 5,
      f = (1.2 - -1.2 - 0.1) / 10 - 0.03,
      h = ue(f, f * 1.4),
      c = [
        [-f, 0.12],
        ...h.pts(8).map(([M, m]) => [M, 0.62 + m]),
        [f, 0.12],
      ].map(([M, m]) => [l + M, x0 + m, 59.7 + 0.035]);
    s(
      "marble",
      I0(
        [
          [-0.018, 0],
          [0.018, 0],
          [0.018, 0.02],
          [-0.018, 0.02],
        ],
        c,
        [0, 0, -1],
        { crease: 0.7 },
      ),
    );
  }
  (s(
    "marble",
    Mt(-1.2 + 0.05, d, 60.62 - 0.3, 1.2 - 0.05, d + 0.16, 60.62, 0.01, "x"),
  ),
    s(
      "velvet",
      Qs({
        x0: -1.2 - 0.01,
        x1: 1.2 + 0.01,
        z0: 59.7 - 0.052,
        z1: 59.7 - 0.05,
        top: () => d - 0.01,
        hang: { n: 0.72, s: 0, w: 0, e: 0 },
        r: 0.015,
        res: 0.05,
        fold: (n, l, f) =>
          n === "n" ? 0.012 * Math.sin(l * 14) * Math.min(1, f * 3) : 0,
        floor: x0 + 0.02,
      }),
      { cast: !1 },
    ),
    s(
      "linen",
      Qs({
        x0: -1.2 - 0.03,
        x1: 1.2 + 0.03,
        z0: 59.7 - 0.06,
        z1: 60.62 - 0.3,
        top: () => d + 0.004,
        hang: { n: 0.2, s: 0, w: 0.75, e: 0.75 },
        r: 0.012,
        res: 0.03,
        fold: (n, l, f) =>
          n === "w" || n === "e"
            ? 0.02 * Math.sin(l * 22 + (n === "w" ? 1 : 0)) * Math.min(1, f * 2)
            : 0.004 * Math.sin(l * 30),
        hem: (n, l) => (n === "n" ? 1 + 0.08 * Math.sin(l * 9) : 1),
        floor: x0 + 0.04,
      }),
      { cast: !1 },
    ),
    s(
      "gilt",
      Mt(-0.2, d + 0.16, 60.62 - 0.29, 0.2, d + 0.54, 60.62 - 0.02, 0.01, "x"),
    ),
    s(
      "gilt",
      A0(
        (n, l) =>
          0.2 * Math.cos((l * Math.PI) / 2) * (1 + 0.04 * Math.cos(n * 8)) +
          0.004,
        (n) => d + 0.54 + n * 0.22,
        32,
        8,
        0,
        60.62 - 0.155,
      ),
    ),
    s(
      "gilt",
      Wt(
        [
          [0, 0],
          [0.025, 0],
          [0.012, 0.04],
          [0.004, 0.14],
          [0, 0.14],
        ],
        0,
        d + 0.76,
        60.62 - 0.155,
        { segs: 10 },
      ),
    ),
    s(
      "velvet",
      Mt(-0.1, d + 0.24, 60.62 - 0.3, 0.1, d + 0.46, 60.62 - 0.285, 0.004, "y"),
    ),
    s(
      "gilt",
      Mt(
        -0.014,
        d + 0.2,
        60.62 - 0.12,
        0.014,
        d + 1.25,
        60.62 - 0.09,
        0.004,
        "y",
      ),
    ),
    s(
      "gilt",
      Mt(-0.2, d + 0.98, 60.62 - 0.12, 0.2, d + 1.01, 60.62 - 0.09, 0.004, "x"),
    ),
    s(
      "gilt",
      Wt(
        [
          [0, 0],
          [0.09, 0],
          [0.07, 0.03],
          [0.03, 0.06],
          [0.02, 0.2],
          [0, 0.2],
        ],
        0,
        d + 0.16,
        60.62 - 0.105,
        { segs: 16 },
      ),
    ),
    br(s, 0, d + 0.93, 60.62 - 0.125, 0.3));
  for (const [n, l] of [
    [-1.02, 0.5],
    [-0.78, 0.56],
    [-0.52, 0.62],
    [0.52, 0.62],
    [0.78, 0.56],
    [1.02, 0.5],
  ])
    yr(s, o, n, d + 0.16, 60.62 - 0.15, l, u.altar, {
      h: 0.42,
      r: 0.02,
      rng: t,
    });
  for (const [n, l, f] of [
    [-1.05, 59.8, 0.16],
    [-0.92, 59.86, 0.09],
    [1, 59.82, 0.13],
    [1.1, 59.9, 0.07],
    [0.72, 59.85, 0.1],
  ])
    N0(o, n, d + 0.004, l, f, 0.024, u.altar);
  (e.push({
    x0: -1.2 - 0.1,
    x1: 1.2 + 0.1,
    z0: 59.7 - 0.1,
    z1: 60.62,
    y0: 0,
    y1: 1.6,
  }),
    zr(s));
  for (const n of [-1.75, 1.75]) {
    const l = n,
      f = 59.25;
    (s(
      "brass",
      Wt(
        [
          [0, 0],
          [0.2, 0],
          [0.21, 0.03],
          [0.17, 0.06],
          [0.08, 0.12],
          [0.05, 0.2],
          [0.075, 0.25],
          [0.04, 0.3],
          [0.03, 0.8],
          [0.055, 0.84],
          [0.035, 0.88],
          [0.032, 1.3],
          [0.08, 1.34],
          [0.085, 1.37],
          [0.045, 1.4],
          [0, 1.4],
        ],
        l,
        x0,
        f,
        { segs: 24, tile: 0.4 },
      ),
    ),
      N0(o, l, x0 + 1.4, f, 0.55, 0.035, u.altar));
  }
  const y = jt.steps[2] + 0.13,
    w = x0,
    g = x0 + 0.78;
  for (const [n, l] of [
    [jt.x0 + 0.02, -0.55],
    [0.55, jt.x1 - 0.02],
  ]) {
    (s("oak", Mt(n, g - 0.07, y - 0.08, l, g, y + 0.08, 0.02, "x")),
      s("oak", Mt(n, w, y - 0.06, l, w + 0.08, y + 0.06, 0.01, "x")));
    const f = Math.round((l - n) / 0.16);
    for (let h = 0; h <= f; h++) {
      const c = n + 0.04 + (h * (l - n - 0.08)) / f;
      s(
        "oak",
        Wt(
          [
            [0, 0],
            [0.032, 0],
            [0.032, 0.05],
            [0.02, 0.07],
            [0.028, 0.16],
            [0.036, 0.26],
            [0.03, 0.34],
            [0.018, 0.42],
            [0.022, 0.5],
            [0.03, 0.56],
            [0.03, 0.62],
            [0, 0.62],
          ],
          c,
          w + 0.08,
          y,
          { segs: 10, tile: 0.4 },
        ),
      );
    }
    for (const h of [n + 0.02, l - 0.02])
      s(
        "oak",
        Mt(h - 0.055, w, y - 0.055, h + 0.055, g + 0.06, y + 0.055, 0.01, "y"),
      );
  }
  for (const n of [-1, 1]) {
    const l = n * 0.55,
      f = 0.5,
      h = n * 1.2,
      c = [
        Mt(0, 0.1, -0.03, f, 0.16, 0.03, 0.01, "x"),
        Mt(0, 0.66, -0.035, f, 0.72, 0.035, 0.01, "x"),
      ];
    for (let M = 0; M < 4; M++)
      c.push(
        Mt(
          0.05 + M * 0.13,
          0.16,
          -0.015,
          0.075 + M * 0.13,
          0.66,
          0.015,
          0.004,
          "y",
        ),
      );
    for (const M of c)
      (wn(M, [0, 0, 0], [0, n > 0 ? Math.PI : 0, 0]),
        M.rotateY(h),
        M.translate(l, w, y),
        s("oak", M));
  }
  for (const n of [jt.x0 + 0.02, jt.x1 - 0.02])
    (s(
      "oak",
      Mt(n - 0.05, x0, 59.5, n + 0.05, x0 + 0.85, pt.z1 - 0.02, 0.01, "z"),
    ),
      s(
        "oak",
        Mt(
          n - 0.07,
          x0 + 0.85,
          59.45,
          n + 0.07,
          x0 + 0.92,
          pt.z1 - 0.02,
          0.015,
          "z",
        ),
      ));
  const z = (n, l, f, h, c, M, m) => {
    for (let k = 0; k < h; k++) {
      const S = c + ((k + 0.5) * (M - c)) / h + (t() - 0.5) * 0.08;
      if (Math.abs(S) < m) continue;
      const A = l + 0.05 + t() * (f - l - 0.1),
        b = 0.05 + t() * t() * 0.28,
        P = 0.016 + t() * 0.018;
      N0(o, S, n, A, b, P, S < -1 ? u.stepsW : S > 1 ? u.stepsE : u.stepsM, {
        lit: t() > 0.06,
      });
    }
  };
  (z(jt.rise, jt.steps[0], jt.steps[1], 26, jt.x0 + 0.1, jt.x1 - 0.1, 0.28),
    z(
      jt.rise * 2,
      jt.steps[1],
      jt.steps[2],
      22,
      jt.x0 + 0.15,
      jt.x1 - 0.15,
      0.2,
    ));
  for (const n of [-1, 1])
    for (let l = 0; l < 22; l++) {
      const f = n * (2.25 + t() * 0.75),
        h = 57.15 + t() * 0.7,
        c = (h - 57.1) / 0.8;
      N0(
        o,
        f,
        0,
        h,
        0.05 + c * 0.25 * t() + t() * 0.06,
        0.017 + t() * 0.02,
        n < 0 ? u.bankW : u.bankE,
        { lit: t() > 0.05 },
      );
    }
  const x = { x: 1.95, y: 3.05, z: 59.5 };
  (s(
    "brass",
    Wt(
      [
        [0, -0.1],
        [0.05, -0.1],
        [0.09, -0.06],
        [0.11, 0],
        [0.105, 0.02],
        [0.08, 0.025],
        [0, 0.025],
      ],
      x.x,
      x.y,
      x.z,
      { segs: 20 },
    ),
  ),
    s(
      "brass",
      Wt(
        [
          [0, -0.16],
          [0.012, -0.16],
          [0.01, -0.1],
          [0, -0.1],
        ],
        x.x,
        x.y,
        x.z,
        { segs: 8 },
      ),
    ));
  for (let n = 0; n < 3; n++) {
    const l = n * 2.094;
    s(
      "iron",
      Q0(
        [
          [x.x + Math.cos(l) * 0.1, x.y + 0.02, x.z + Math.sin(l) * 0.1],
          [x.x, x.y + 0.42, x.z],
        ],
        0.004,
        4,
        4,
      ),
      { cast: !1 },
    );
  }
  s(
    "iron",
    Q0(
      [
        [x.x, x.y + 0.42, x.z],
        [x.x, 10.3, x.z],
      ],
      0.007,
      8,
      5,
    ),
    { cast: !1 },
  );
  const v = N0(o, x.x, x.y - 0.03, x.z, 0.05, 0.02, u.lamp, { votive: !0 });
  return (
    (v.scale = 1.9),
    e.push({
      x0: jt.x0 - 0.05,
      x1: jt.x1 + 0.05,
      z0: y - 0.1,
      z1: y + 0.1,
      y0: 0,
      y1: 1.2,
    }),
    { colliders: e, lamp: x }
  );
}
function br(s, o, t, u, e) {
  s(
    "gilt",
    Mt(
      o - e * 0.08,
      t - e * 0.62,
      u - 0.012,
      o + e * 0.08,
      t - e * 0.05,
      u + 0.012,
      0.01,
      "y",
    ),
  );
  for (const r of [-1, 1]) {
    const a = [o + r * e * 0.06, t - e * 0.1, u],
      p = [o + r * e * 0.62, t + e * 0.02, u];
    s("gilt", ge(a, p, e * 0.035, 6));
  }
  s(
    "gilt",
    Wt(
      [
        [0, 0],
        [e * 0.07, e * 0.02],
        [e * 0.075, e * 0.1],
        [e * 0.05, e * 0.16],
        [0, e * 0.17],
      ],
      o + e * 0.03,
      t - e * 0.07,
      u,
      { segs: 10 },
    ),
  );
  for (const r of [-1, 1])
    s(
      "gilt",
      ge(
        [o + r * e * 0.04, t - e * 0.62, u],
        [o + r * e * 0.015, t - e * 1.12, u],
        e * 0.035,
        6,
      ),
    );
  s(
    "linen",
    Mt(
      o - e * 0.1,
      t - e * 0.7,
      u - 0.016,
      o + e * 0.1,
      t - e * 0.56,
      u + 0.016,
      0.006,
      "x",
    ),
    { cast: !1 },
  );
}
function zr(s, o) {
  const t = pt.z1 - 0.01,
    u = t - 0.42,
    e = -2.35,
    r = 2.35,
    a = x0,
    p = x0 + 1.45,
    i = x0 + 1.95,
    d = x0 + 4.05;
  (s("paint", Mt(e + 0.05, a, u + 0.23, r - 0.05, d + 0.4, t, 0.01, "x")),
    s("gilt", Mt(e, p, u, r, p + 0.08, t, 0.012, "x")),
    s("gilt", Mt(e, i - 0.1, u - 0.02, r, i, t, 0.012, "x")));
  for (let w = 0; w < 7; w++) {
    const g = e + 0.3 + (w * (r - e - 0.6)) / 6,
      z = (p + 0.08 + i - 0.1) / 2;
    s(
      "panel",
      Mt(
        g - 0.24,
        z - 0.17,
        u + 0.04,
        g + 0.24,
        z + 0.17,
        u + 0.06,
        0.004,
        "x",
      ),
      { cast: !1 },
    );
    const x = [];
    for (let v = 0; v <= 32; v++) {
      const n = (v / 32) * Math.PI * 2,
        l = 0.13 + 0.035 * Math.abs(Math.cos(n * 2));
      x.push([g + Math.cos(n) * l, z + Math.sin(n) * l, u + 0.035]);
    }
    s(
      "gilt",
      I0(
        [
          [-0.012, 0],
          [0.012, 0],
          [0.012, 0.018],
          [-0.012, 0.018],
        ],
        x,
        [0, 0, -1],
        { crease: 0.8 },
      ),
    );
  }
  [
    [-2.05, -1.35],
    [-1.25, -0.6],
    [-0.5, 0.5],
    [0.6, 1.25],
    [1.35, 2.05],
  ].forEach(([w, g], z) => {
    const x = z === 2,
      v = d + (x ? 0.45 : 0),
      n = g - w,
      l = (w + g) / 2;
    {
      const k = new m0(n, v - i);
      (k.rotateY(Math.PI), k.translate(l, (i + v) / 2, u + 0.2));
      const S = k.attributes.uv;
      for (let A = 0; A < S.count; A++) S.setX(A, (z + S.getX(A)) / 5);
      s("panel", k, { cast: !1 });
    }
    const f = ue(n / 2, n * 0.62),
      h = v - n * 0.62,
      c = f.pts(16).map(([k, S]) => [l + k, h + S, u + 0.06]);
    s(
      "gilt",
      I0(
        [
          [-0.03, 0],
          [0.03, 0],
          [0.03, 0.05],
          [-0.03, 0.05],
        ],
        [[w, i, u + 0.06], ...c, [g, i, u + 0.06]],
        [0, 0, -1],
        { crease: 0.8 },
      ),
    );
    const M = n * 0.75,
      m = v + 0.05;
    for (const k of [-1, 1]) {
      const S = [l + k * (n / 2 + 0.04), m, u + 0.02],
        A = [l, m + M, u + 0.02];
      s("gilt", ge(S, A, 0.022, 6));
      for (let b = 0.15; b < 0.95; b += 0.2) {
        const P = [S[0] + (A[0] - S[0]) * b, S[1] + (A[1] - S[1]) * b, S[2]];
        s(
          "gilt",
          A0(
            (_, I) =>
              0.035 * Math.sin(Math.PI * I) * (1 + 0.5 * Math.cos(_ * 3)),
            (_) => P[1] + _ * 0.07,
            8,
            4,
            P[0] + k * 0.02,
            P[2] - 0.01,
          ),
        );
      }
    }
    (s(
      "gilt",
      Wt(
        [
          [0, 0],
          [0.03, 0],
          [0.045, 0.05],
          [0.02, 0.1],
          [0.035, 0.14],
          [0, 0.22],
        ],
        l,
        m + M - 0.02,
        u + 0.02,
        { segs: 10 },
      ),
    ),
      s(
        "paint2",
        A0(
          (k, S) => (0.09 + 0.03 * Math.cos(k * 3)) * Math.min(1, S * 4),
          (k) => 0,
          24,
          2,
          0,
          0,
        )
          .applyMatrix4(new wt().makeRotationX(-Math.PI / 2))
          .translate(l, m + M * 0.4, u + 0.05),
        { cast: !1 },
      ));
  });
  for (const w of [-2.25, -1.3, -0.55, 0.55, 1.3, 2.25]) {
    const g = i - 0.1,
      z = d + 0.95 + (Math.abs(w) < 0.6 ? 0.35 : 0);
    (s(
      "gilt",
      Mt(w - 0.05, g, u - 0.03, w + 0.05, z - 0.35, u + 0.07, 0.008, "y"),
    ),
      s(
        "gilt",
        A0(
          (x, v) =>
            0.07 *
            (1 - v) *
            (1 +
              0.35 * Math.max(0, Math.cos(x * 4)) * Math.sin(Math.PI * v * 3)),
          (x) => z - 0.35 + x * 0.45,
          16,
          8,
          w,
          u + 0.02,
          Math.PI / 4,
        ),
      ),
      s(
        "gilt",
        Wt(
          [
            [0, 0],
            [0.025, 0],
            [0.03, 0.04],
            [0, 0.09],
          ],
          w,
          z + 0.1,
          u + 0.02,
          { segs: 8 },
        ),
      ));
  }
  for (let w = e + 0.1; w < r - 0.05; w += 0.14)
    Math.abs(w) < 0.6 ||
      s(
        "gilt",
        A0(
          (g, z) => 0.04 * Math.sin(Math.PI * z) * (1 + 0.6 * Math.cos(g * 3)),
          (g) => d + 0.48 + g * 0.12,
          9,
          4,
          w,
          u + 0.1,
        ),
      );
  (s("gilt", Mt(e, d + 0.4, u + 0.05, r, d + 0.48, t, 0.01, "x")),
    s(
      "gilt",
      Mt(-0.03, d + 1.3, u + 0.02, 0.03, d + 1.95, u + 0.08, 0.006, "y"),
    ),
    s(
      "gilt",
      Mt(-0.2, d + 1.66, u + 0.02, 0.2, d + 1.72, u + 0.08, 0.006, "x"),
    ));
}
const Qe = { x: [0.85, 2.95], z0: 44.7, pitch: 0.97, rows: 11, depth: 0.72 };
function Ba(s, o) {
  const t = [],
    e = new he();
  (e.moveTo(0, 0),
    e.lineTo(o, 0),
    e.lineTo(o, 0.62),
    e.quadraticCurveTo(o, 0.7, o - 0.08, 0.72),
    e.lineTo(0.2, 0.72),
    e.quadraticCurveTo(0.12, 0.74, 0.12, 0.86),
    e.lineTo(0.12, 0.98),
    e.quadraticCurveTo(0.06, 1.1, 0, 0.98),
    e.lineTo(0, 0));
  for (const r of [0, s - 0.065]) {
    const a = new te(e, {
      depth: 0.065,
      bevelEnabled: !0,
      bevelThickness: 0.006,
      bevelSize: 0.006,
      bevelSegments: 1,
      curveSegments: 6,
    });
    (a.applyMatrix4(
      new wt().set(0, 0, 1, r, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1),
    ),
      a.deleteAttribute("uv"),
      t.push(kr(a.toNonIndexed())));
    const p = Wt(
      [
        [0, 0],
        [0.045, 0],
        [0.055, 0.04],
        [0.04, 0.08],
        [0.05, 0.1],
        [0.02, 0.14],
        [0, 0.15],
      ],
      r + 0.065 / 2,
      0.96,
      0.06,
      { segs: 10, tile: 0.3 },
    );
    t.push(p);
  }
  return (
    t.push(Mt(0.065, 0.42, 0.02, s - 0.065, 0.9, 0.05, 0.006, "x")),
    t.push(Mt(0.065, 0.88, 0, s - 0.065, 0.93, 0.08, 0.01, "x")),
    t.push(Mt(0.065, 0.76, -0.16, s - 0.065, 0.785, 0.02, 0.006, "x")),
    t.push(Mt(0.065, 0.43, 0.05, s - 0.065, 0.47, 0.45, 0.008, "x")),
    t.push(Mt(0.065, 0.3, 0.42, s - 0.065, 0.43, 0.45, 0.006, "x")),
    t.push(Mt(0.065, 0.07, o - 0.24, s - 0.065, 0.13, o - 0.1, 0.008, "x")),
    t.push(Mt(0.065, 0, 0.3, s - 0.065, 0.06, 0.34, 0.004, "x")),
    us(t)
  );
}
function kr(s, o) {
  const t = s.attributes.position,
    u = s.attributes.normal,
    e = new Float32Array(t.count * 2);
  for (let r = 0; r < t.count; r++) {
    const a = t.getX(r),
      p = t.getY(r),
      i = t.getZ(r),
      d = Math.abs(u.getX(r)),
      y = Math.abs(u.getY(r)),
      w = Math.abs(u.getZ(r));
    let g, z;
    (d >= y && d >= w
      ? ((g = p), (z = i))
      : y >= w
        ? ((g = a), (z = i))
        : ((g = p), (z = a)),
      (e[r * 2] = g),
      (e[r * 2 + 1] = z));
  }
  return (s.setAttribute("uv", new vt(e, 2)), s);
}
function Sr(s, o, t, u, e, r, a) {
  const p = [],
    i = Qe.x[1] - Qe.x[0],
    d = Qe.depth,
    y = Ba(i, d),
    w = [];
  for (let h = 0; h < Qe.rows; h++)
    for (const c of [-1, 1]) {
      const M = Qe.z0 + h * Qe.pitch;
      let m = c < 0 ? -2.95 : Qe.x[0],
        k = 0,
        S = 0,
        A = 0;
      (c < 0 && (h === 5 || h === 6)
        ? (A = h === 5 ? 1 : 2)
        : c < 0 && (h === 4 || h === 7)
          ? ((k = h === 4 ? 0.12 : -0.18), (S = h === 4 ? -0.12 : 0.2))
          : c > 0 && h === 9
            ? ((k = -0.07), (S = 0.08))
            : c > 0 && h === 2 && (k = 0.04),
        w.push({ x0: m, z: M + S, yaw: k, tip: A, side: c, r: h }));
    }
  const g = new l0(y, u.oak, w.length);
  ((g.name = "church_pews"), (g.castShadow = !0), (g.receiveShadow = !0));
  const z = new wt();
  (w.forEach((h, c) => {
    let M;
    (h.tip === 1
      ? (M = f0([h.x0 + 0.1, 0.36, h.z + 0.25], [-1.35, 0.25, 0.08]))
      : h.tip === 2
        ? (M = f0([h.x0 - 0.2, 0, h.z + 0.1], [0, -0.5, 0]).multiply(
            f0([0, 0.02, 0], [0, 0, -0.35]),
          ))
        : (M = f0([h.x0 + i / 2, 0, h.z + d / 2], [0, h.yaw, 0]).multiply(
            f0([-i / 2, 0, -d / 2]),
          )),
      g.setMatrixAt(c, z.copy(M)),
      (h.m = M.clone()));
  }),
    o.add(g));
  const x = new dt();
  for (const h of w) {
    let c = 1e9,
      M = -1e9,
      m = 1e9,
      k = -1e9;
    for (const [S, A, b] of [
      [0, 0, -0.16],
      [i, 0, -0.16],
      [0, 0, d],
      [i, 0, d],
      [0, 1, -0.16],
      [i, 1, d],
    ])
      (x.set(S, A, b).applyMatrix4(h.m),
        (c = Math.min(c, x.x)),
        (M = Math.max(M, x.x)),
        (m = Math.min(m, x.z)),
        (k = Math.max(k, x.z)));
    p.push({
      x0: Math.max(c, -S0 + 0.46),
      x1: Math.min(M, S0 - 0.46),
      z0: m,
      z1: k,
      y0: 0,
      y1: 0.95,
    });
  }
  for (const h of w) {
    if (h.tip) continue;
    const c = h.side < 0 ? i - 0.0325 : 0.0325,
      M = r() < 0.3 ? 2 : 1;
    for (let m = 0; m < M; m++) {
      const k = new dt(
        c + (m && h.side < 0 ? -0 : 0),
        0.72,
        0.36 + m * 0.17,
      ).applyMatrix4(h.m);
      N0(
        e,
        k.x,
        k.y,
        k.z,
        0.07 + r() * 0.16,
        0.017 + r() * 0.008,
        h.r < 4 ? a.pewsA : h.r < 8 ? a.pewsB : a.pewsC,
        { lit: r() > 0.07 },
      );
    }
  }
  const v = Mt(-0.075, 0, -0.1, 0.075, 0.028, 0.1, 0.004, "x"),
    n = [];
  for (const h of w) {
    if (h.tip) continue;
    const c = 1 + Math.floor(r() * 3);
    for (let M = 0; M < c; M++)
      n.push(
        new wt().multiplyMatrices(
          h.m,
          f0([0.3 + r() * (i - 0.6), 0.785, -0.07], [0, (r() - 0.5) * 0.4, 0]),
        ),
      );
  }
  for (let h = 0; h < 14; h++) {
    const c = -2.9 + r() * 2,
      M = 48.5 + r() * 6.5;
    n.push(
      f0([c, 0.014, M], [r() < 0.3 ? 0.3 : 0, r() * 6.28, r() < 0.2 ? 0.2 : 0]),
    );
  }
  for (let h = 0; h < 6; h++)
    n.push(f0([1.2 + r() * 1.6, 0.014, 45 + r() * 9], [0, r() * 6.28, 0]));
  const l = new l0(v, u.leather, n.length);
  ((l.name = "church_hymnals"),
    (l.castShadow = !1),
    (l.receiveShadow = !0),
    n.forEach((h, c) => l.setMatrixAt(c, h)),
    o.add(l));
  {
    const S = [],
      A = [],
      b = [];
    for (let R = 0; R <= 120; R++)
      for (let V = 0; V <= 6; V++) {
        const L = 41.35 + (15.699999999999996 * R) / 120,
          K = -1.1 / 2 + (1.1 * V) / 6,
          j =
            Math.exp(-(((L - 42.6) / 0.22) ** 2)) *
              0.035 *
              (0.7 + 0.3 * Math.sin(K * 3)) +
            Math.exp(-(((L - 43.2) / 0.15) ** 2)) * 0.015;
        (S.push(K + Math.sin(L * 0.9) * 0.01, 0.006 + j, L),
          A.push(((K + 1.1 / 2) * 0.8) / 1.1, L));
      }
    for (let R = 0; R < 120; R++)
      for (let V = 0; V < 6; V++) {
        const L = R * 7 + V,
          K = L + 1,
          j = L + 6 + 1,
          O = j + 1;
        b.push(L, j, K, K, j, O);
      }
    const P = new Rt();
    (P.setAttribute("position", new xt(S, 3)),
      P.setAttribute("uv", new xt(A, 2)),
      P.setIndex(b),
      P.computeVertexNormals());
    const _ = P.attributes.normal;
    let I = 0;
    for (let R = 0; R < _.count; R++) I += _.getY(R);
    if (I < 0) {
      const R = P.index.array;
      for (let V = 0; V < R.length; V += 3) {
        const L = R[V + 1];
        ((R[V + 1] = R[V + 2]), (R[V + 2] = L));
      }
      P.computeVertexNormals();
    }
    t("runner", P, { cast: !1 });
  }
  for (const h of [44, 49, 54])
    for (const c of [-1, 1]) {
      const M = c * S0,
        m = a["pier" + (c < 0 ? "W" : "E") + h],
        k = 4 + Math.floor(r() * 4);
      for (let S = 0; S < k; S++) {
        const A = (c < 0 ? 0 : Math.PI) + (r() - 0.5) * 2.2,
          b = r() < 0.6,
          P = b ? 0.5 + r() * 0.08 : 0.72 + r() * 0.25;
        N0(
          e,
          M + Math.cos(A) * P,
          b ? 0.32 : 0,
          h + Math.sin(A) * P,
          0.06 + r() * 0.22,
          0.016 + r() * 0.018,
          m,
          { lit: r() > 0.08 },
        );
      }
    }
  for (const h of [-1, 1]) {
    const c = h * 2.35,
      M = 56.35,
      m = 1.62;
    for (let S = 0; S < 3; S++) {
      const A = S * 2.094 + 0.3;
      t(
        "iron",
        Q0(
          [
            [c + Math.cos(A) * 0.3, 0, M + Math.sin(A) * 0.3],
            [c + Math.cos(A) * 0.2, 0.08, M + Math.sin(A) * 0.2],
            [c, 0.22, M],
          ],
          0.012,
          8,
          5,
        ),
      );
    }
    t(
      "iron",
      Wt(
        [
          [0, 0.2],
          [0.03, 0.2],
          [0.02, 0.3],
          [0.014, m - 0.3],
          [0.03, m - 0.26],
          [0.016, m - 0.22],
          [0.014, m - 0.02],
          [0, m - 0.02],
        ],
        c,
        0,
        M,
        { segs: 10 },
      ),
    );
    const k = [];
    for (let S = 0; S <= 28; S++) {
      const A = (S / 28) * Math.PI * 2;
      k.push([c + Math.cos(A) * 0.3, m, M + Math.sin(A) * 0.3]);
    }
    t("iron", Q0(k, 0.01, 28, 5, !0));
    for (let S = 0; S < 7; S++) {
      const A = (S / 7) * Math.PI * 2,
        b = c + Math.cos(A) * 0.3,
        P = M + Math.sin(A) * 0.3;
      (t("iron", ge([c, m - 0.18, M], [b, m, P], 0.007, 5)),
        t(
          "iron",
          Wt(
            [
              [0, 0],
              [0.035, 0],
              [0.038, 0.012],
              [0.02, 0.02],
              [0.02, 0.06],
              [0, 0.06],
            ],
            b,
            m,
            P,
            { segs: 10 },
          ),
        ),
        N0(
          e,
          b,
          m + 0.06,
          P,
          0.18 + r() * 0.2,
          0.017,
          h < 0 ? a.candW : a.candE,
        ));
    }
    p.push({
      x0: c - 0.32,
      x1: c + 0.32,
      z0: M - 0.32,
      z1: M + 0.32,
      y0: 0,
      y1: 1.9,
    });
  }
  for (const h of [44, 49, 54])
    for (const c of [-1, 1]) {
      const M = c * 6.2 - c * 0.43,
        m = 2.25,
        k = a["sc" + (c < 0 ? "W" : "E") + h];
      (t(
        "iron",
        Mt(
          M - 0.03 * c - 0.015,
          m - 0.2,
          h - 0.07,
          M - 0.03 * c + 0.015,
          m + 0.12,
          h + 0.07,
          0.004,
          "y",
        ),
      ),
        t(
          "iron",
          Q0(
            [
              [M, m - 0.1, h],
              [M - c * 0.16, m - 0.16, h],
              [M - c * 0.3, m - 0.08, h],
              [M - c * 0.34, m, h],
            ],
            0.012,
            12,
            6,
          ),
        ),
        t(
          "iron",
          Q0(
            [
              [M - c * 0.12, m - 0.13, h],
              [M - c * 0.1, m - 0.24, h],
              [M - c * 0.05, m - 0.26, h],
              [M - c * 0.03, m - 0.2, h],
            ],
            0.007,
            8,
            5,
          ),
        ));
      const S = M - c * 0.34;
      t(
        "iron",
        Wt(
          [
            [0, 0],
            [0.13, 0],
            [0.14, 0.02],
            [0.12, 0.025],
            [0, 0.015],
          ],
          S,
          m,
          h,
          { segs: 16 },
        ),
      );
      for (let A = 0; A < 3; A++) {
        const b = A * 2.09 + 0.4;
        N0(
          e,
          S + Math.cos(b) * 0.07,
          m + 0.015,
          h + Math.sin(b) * 0.07,
          0.12 + r() * 0.16,
          0.02,
          k,
          { lit: r() > 0.1 },
        );
      }
      for (let A = 0; A < 7; A++) {
        const b = (c < 0 ? 0 : Math.PI) + (r() - 0.5) * 2.4,
          P = 0.66 + r() * 0.3;
        N0(
          e,
          c * 6.2 + Math.cos(b) * P,
          0,
          h + Math.sin(b) * P,
          0.06 + r() * 0.2,
          0.017 + r() * 0.016,
          k,
          { lit: r() > 0.1 },
        );
      }
    }
  const f = (h, c, M, m, k = 3, S = 9) => {
    const A = S * 0.085 + 0.1,
      b = Math.cos(M),
      P = Math.sin(M),
      _ = (L, K, j) => [h + L * b + j * P, K, c - L * P + j * b],
      I = [];
    for (let L = 0; L < k; L++) {
      const K = 0.7 + L * 0.13,
        j = L * 0.13;
      I.push(Mt(-A / 2, K - 0.02, j - 0.05, A / 2, K, j + 0.05, 0.004, "x"));
      for (let O = 0; O < S; O++) {
        const J = -A / 2 + 0.09 + O * 0.085,
          tt = _(J, K, j);
        N0(e, tt[0], tt[1] + 0.006, tt[2], 0.035, 0.028, m, {
          votive: !0,
          lit: r() > 0.1,
        });
      }
    }
    for (const L of [-A / 2 + 0.02, A / 2 - 0.02])
      (I.push(Mt(L - 0.012, 0, -0.1, L + 0.012, 0.72, -0.076, 0.003, "y")),
        I.push(Mt(L - 0.012, 0, 0.28, L + 0.012, 1.02, 0.304, 0.003, "y")),
        I.push(Mt(L - 0.01, 0.62, -0.1, L + 0.01, 0.64, 0.3, 0.003, "z")));
    I.push(Mt(-A / 2, 0.66, -0.2, A / 2, 0.7, -0.08, 0.004, "x"));
    for (const L of I)
      (L.applyMatrix4(new wt().makeRotationY(M)),
        L.translate(h, 0, c),
        t("iron", L));
    for (let L = 0; L < 5; L++) {
      const K = _(-A / 2 + 0.1 + r() * (A - 0.2), 0.7, -0.14 + r() * 0.04);
      N0(e, K[0], K[1], K[2], 0.12 + r() * 0.12, 0.007, m, { lit: r() > 0.3 });
    }
    const R = A / 2 + 0.05,
      V = 0.35;
    p.push({
      x0: h - Math.abs(b * R) - Math.abs(P * V),
      x1: h + Math.abs(b * R) + Math.abs(P * V),
      z0: c - Math.abs(P * R) - Math.abs(b * V),
      z1: c + Math.abs(P * R) + Math.abs(b * V),
      y0: 0,
      y1: 1.1,
    });
  };
  return (
    f(-4.95, 59.7, Math.PI, a.lady, 3, 11),
    f(5.72, 47.7, Math.PI / 2, a.joseph, 3, 7),
    { colliders: p, pews: g, place: w }
  );
}
const Ar = `
attribute vec4 aFlame;          // x: lit 0..1, y: seed, z: size (m), w: how much it moves
uniform float uT;
uniform float uGust;
uniform vec3 uGustFrom;
varying vec2 vUv;
varying float vLit;
varying float vHot;
float fh(float n) { return fract(sin(n) * 43758.5453); }
float fn(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(fh(i), fh(i + 1.0), f); }
void main() {
  vec3 base = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  float sd = aFlame.y * 97.0, t = uT * (0.85 + aFlame.y * 0.3);
  float flick = 1.0 + 0.09 * sin(t * 12.7 + sd) + 0.05 * sin(t * 23.3 + sd * 1.7) + 0.16 * (fn(t * 2.3 + sd) - 0.5);
  // the gust: toward the flames from the doors, stronger the nearer; it flattens and stretches them
  vec3 away = base - uGustFrom; away.y = 0.0; float dist = length(away); away /= max(dist, 0.01);
  float g = uGust * aFlame.w * clamp(1.6 - dist * 0.06, 0.25, 1.4) * (0.7 + 0.6 * fn(uT * 9.0 + sd));
  float s = aFlame.z;
  float h = s * (2.7 * flick * (1.0 - 0.35 * min(g, 1.0))) * mix(0.3, 1.0, aFlame.x);
  float w = s * (0.95 + 0.08 * sin(t * 6.1 + sd));
  vec3 lean = vec3(sin(t * 1.3 + sd) + 0.6 * sin(t * 3.1 + sd * 2.0), 0.0, cos(t * 1.1 + sd * 1.3)) * 0.07 * aFlame.w + away * g * 1.4;
  vec3 up = normalize(vec3(0.0, 1.0, 0.0) + lean);
  vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 side = normalize(camR - up * dot(camR, up));
  // the quad: 4.5 flame-widths across and 2.2 flame-heights tall, the wick a little above its foot
  vec3 p = base + side * (uv.x - 0.5) * w * 4.5 + up * (uv.y * 2.2 - 0.32) * h;
  vUv = vec2((uv.x - 0.5) * 4.5, uv.y * 2.2 - 0.32);   // x: flame-widths from the axis, y: flame-heights above the wick
  vLit = aFlame.x * (1.0 - 0.45 * min(g, 1.0));
  vHot = flick;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,
  Pr = `
uniform float uHalo;
varying vec2 vUv;
varying float vLit;
varying float vHot;
void main() {
  if (vLit < 0.004) discard;
  float x = vUv.x, y = vUv.y;
  // the teardrop: widest a third of the way up, a rounded foot, a pointed tip
  float yy = clamp(y, 0.0, 1.0);
  float wdt = 0.5 * pow(max(sin(clamp(yy * 1.05 + 0.04, 0.0, 1.0) * 3.14159), 0.0), 0.7) * (1.0 - 0.45 * yy);
  float d = abs(x) / max(wdt, 0.02);
  float inY = smoothstep(-0.06, 0.06, y) * (1.0 - smoothstep(0.82, 1.0, y));
  float flame = (1.0 - smoothstep(0.72, 1.0, d)) * inY;
  vec3 blue = vec3(0.35, 0.45, 1.6), core = vec3(5.0, 3.4, 1.6), mid = vec3(3.6, 1.45, 0.38), tip = vec3(1.6, 0.4, 0.06);
  vec3 c = mix(mid, core, (1.0 - smoothstep(0.1, 0.65, d)) * (1.0 - smoothstep(0.1, 0.55, y)));
  c = mix(c, tip, smoothstep(0.45, 0.95, y));
  c = mix(blue, c, smoothstep(0.02, 0.2, y));
  // the halo: smoke and dust round the flame catching its light
  float r = length(vec2(x * 0.55, (y - 0.35) * 0.9));
  float halo = exp(-r * r * 2.2) * 0.3 + exp(-r * 1.4) * 0.12;
  vec3 col = c * flame * vHot + vec3(1.0, 0.42, 0.12) * halo * uHalo;
  gl_FragColor = vec4(col * vLit, 1.0);
}`;
function Tr(s, o, t, u, e, { gustFrom: r = [0, 1, 40.5] } = {}) {
  const a = t.length,
    p = (() => {
      const L = Wt(
          [
            [0, 0],
            [1.02, 0],
            [1, 0.03],
            [1, 0.93],
            [0.99, 0.975],
            [0.93, 1],
            [0.84, 0.99],
            [0.62, 0.965],
            [0.3, 0.955],
            [0, 0.955],
          ],
          0,
          0,
          0,
          { segs: 14, tile: 1 },
        ),
        K = [];
      for (const [O, J] of [
        [0.4, 0.55],
        [1.1, 0.3],
        [3.6, 0.42],
      ]) {
        const tt = [];
        for (let G = 0; G <= 5; G++) {
          const q = G / 5;
          tt.push([Math.cos(O) * 1.03, 0.99 - q * J, Math.sin(O) * 1.03]);
        }
        const st = Q0(tt, 0.1, 6, 5);
        (st.scale(1, 1, 1), K.push(st));
      }
      const j = us([L, ...K]);
      return (
        j.deleteAttribute("uv"),
        j.setAttribute(
          "uv",
          new vt(new Float32Array(j.attributes.position.count * 2), 2),
        ),
        j
      );
    })(),
    i = u.wax,
    d = new l0(p, i, a);
  ((d.name = "church_candles"), (d.castShadow = !1), (d.receiveShadow = !0));
  const y = new Float32Array(a * 2),
    w = new wt(),
    g = new w0(),
    z = new pe(),
    x = new dt(),
    v = new dt();
  (t.forEach((L, K) => {
    (z.set((e() - 0.5) * 0.04, e() * 6.283, (e() - 0.5) * 0.04),
      g.setFromEuler(z),
      d.setMatrixAt(
        K,
        w.compose(v.set(L.x, L.y, L.z), g, x.set(L.r, L.h, L.r)),
      ),
      (y[K * 2] = L.lit ? 1 : 0),
      (y[K * 2 + 1] = L.h));
  }),
    p.setAttribute("aWax", new M0(y, 2)));
  const n = new Xt();
  (t.forEach((L, K) => {
    const j = e();
    (j < 0.05
      ? n.setRGB(0.75, 0.16, 0.12)
      : j < 0.3
        ? n.setRGB(1, 0.9, 0.7)
        : j < 0.45
          ? n.setRGB(1.05, 1.03, 1)
          : n.setRGB(0.97, 0.93, 0.84),
      d.setColorAt(K, n));
  }),
    o.add(d));
  const l = t.filter((L) => L.votive);
  let f = null;
  if (l.length) {
    const L = Wt(
        [
          [0, 0],
          [0.034, 0],
          [0.036, 0.004],
          [0.035, 0.06],
          [0.037, 0.075],
          [0.033, 0.077],
          [0.03, 0.066],
          [0.03, 0.006],
          [0, 0.006],
        ],
        0,
        0,
        0,
        { segs: 16, tile: 1 },
      ),
      K = new P0({
        uniforms: { uT: { value: 0 } },
        vertexShader: `attribute vec2 aV; varying float vY; varying float vLit; varying vec3 vN; varying vec3 vV;
        void main() { vY = position.y / 0.077; vLit = aV.x; vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix * instanceMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,
        fragmentShader: `uniform float uT; varying float vY; varying float vLit; varying vec3 vN; varying vec3 vV;
        void main() { float rim = pow(1.0 - abs(dot(normalize(vN), vV)), 2.0);
          float band = smoothstep(0.05, 0.35, vY) * (1.0 - smoothstep(0.75, 1.0, vY));
          vec3 lit = vec3(2.6, 0.22, 0.08) * (0.55 + 0.45 * band) * (0.8 + 0.6 * rim);
          vec3 dark = vec3(0.09, 0.012, 0.01) * (0.4 + rim);
          gl_FragColor = vec4(mix(dark, lit, vLit), 1.0); }`,
      });
    ((f = new l0(L, K, l.length)), (f.name = "church_votives"));
    const j = new Float32Array(l.length * 2);
    (l.forEach((O, J) => {
      const tt = O.scale || 1;
      (f.setMatrixAt(
        J,
        w.compose(
          v.set(O.x, O.y - 0.006 * tt, O.z),
          g.identity(),
          x.set(tt, tt, tt),
        ),
      ),
        (j[J * 2] = O.lit ? 1 : 0),
        (O.vk = J));
    }),
      L.setAttribute("aV", new M0(j, 2)),
      o.add(f));
  }
  const h = t.filter((L) => L.lit),
    c = new m0(1, 1, 1, 1);
  c.translate(0.5, 0.5, 0);
  const M = {
      uT: { value: 0 },
      uGust: { value: 0 },
      uGustFrom: { value: new dt(...r) },
      uHalo: { value: 1 },
    },
    m = new P0({
      uniforms: M,
      vertexShader: Ar,
      fragmentShader: Pr,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
    });
  m.name = "church_flames";
  const k = new l0(c, m, h.length);
  ((k.name = "church_flames"), (k.frustumCulled = !1), (k.renderOrder = 20));
  const S = new Float32Array(h.length * 4);
  (h.forEach((L, K) => {
    const j = L.votive ? 0.011 : Math.min(0.018, 0.0105 + L.r * 0.17);
    (k.setMatrixAt(
      K,
      w.compose(
        v.set(L.x, L.y + L.h * 0.955 + (L.votive ? 0.006 : 0.004), L.z),
        g.identity(),
        x.set(1, 1, 1),
      ),
    ),
      S.set([1, e(), j, L.votive ? 0.4 : 1], K * 4),
      (L.fk = K),
      (L.level = 1));
  }),
    c.setAttribute("aFlame", new M0(S, 4)),
    o.add(k));
  const A = { level: 0, out: [], outT: 0 },
    b = c.attributes.aFlame,
    P = p.attributes.aWax,
    _ = f ? f.geometry.attributes.aV : null,
    I = (L = 1) => {
      A.level = Math.max(A.level, L);
      const K = M.uGustFrom.value;
      for (const j of h) {
        if (j.level < 1) continue;
        const O = Math.hypot(j.x - K.x, j.z - K.z),
          J = L * (j.votive ? 0.05 : 0.5) * Math.max(0.04, 1 - O / 16);
        e() < J && ((j.dying = 0.25 + e() * 0.9), A.out.push(j));
      }
    },
    R = () => {
      ((A.level = 0), (A.out.length = 0));
      for (const L of h)
        ((L.level = 1),
          (L.dying = 0),
          (b.array[L.fk * 4] = 1),
          (P.array[t.indexOf(L) * 2] = 1),
          _ && L.votive && (_.array[L.vk * 2] = 1));
      ((b.needsUpdate = !0), (P.needsUpdate = !0), _ && (_.needsUpdate = !0));
    };
  for (const L of t) L.idx = t.indexOf(L);
  return {
    list: t,
    lit: h,
    flames: k,
    wax: d,
    votMesh: f,
    update: (L, K) => {
      if (
        ((M.uT.value = K),
        A.level > 0 &&
          ((A.level = Math.max(0, A.level - L / 2.5)),
          (M.uGust.value = A.level * A.level * (3 - 2 * A.level))),
        A.out.length)
      ) {
        let j = !1;
        for (const O of A.out) {
          if (O.dying > 0) {
            ((O.dying -= L), (j = !0));
            continue;
          }
          O.level > 0 &&
            ((O.level = Math.max(0, O.level - L * 3)),
            (j = !0),
            (b.array[O.fk * 4] = O.level),
            (P.array[O.idx * 2] = O.level),
            _ && O.votive && (_.array[O.vk * 2] = O.level));
        }
        ((b.needsUpdate = !0),
          (P.needsUpdate = !0),
          _ && (_.needsUpdate = !0),
          j || (A.out.length = 0));
      }
    },
    gust: I,
    reset: R,
    U: M,
    G: A,
  };
}
function Cr(s) {
  const o = s.onBeforeCompile,
    t = s.customProgramCacheKey;
  return (
    (s.onBeforeCompile = (u, e) => {
      (o.call(s, u, e),
        (u.vertexShader = u.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute vec2 aWax;
varying vec2 vWax;
varying float vWaxY;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
vWax = aWax; vWaxY = position.y;`,
          )),
        (u.fragmentShader = u.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec2 vWax;
varying float vWaxY;`,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
      {
        float below = (1.0 - vWaxY) * vWax.y;                          // metres under the rim
        float glow = exp(-below * 60.0) * 1.1 + exp(-below * 14.0) * 0.12;
        totalEmissiveRadiance += vec3(1.0, 0.42, 0.12) * glow * vWax.x;
      }`,
          )));
    }),
    (s.customProgramCacheKey = () => "churchWax" + t.call(s)),
    (s.needsUpdate = !0),
    s
  );
}
const la = `
float ah(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float an(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(ah(i), ah(i + vec2(1, 0)), f.x), mix(ah(i + vec2(0, 1)), ah(i + vec2(1, 1)), f.x), f.y); }`;
function Ir(s = 48) {
  const r = [];
  for (let a = 0; a < s; a++) {
    const p = (a / s) * Math.PI * 2;
    let i = 0.2;
    for (
      ;
      i < 2 &&
      ds(-3 + Math.cos(p) * 2.55 * i, 51.4 + Math.sin(p) * 2.05 * i) > 0;
    )
      i += 0.01;
    r.push([-3 + Math.cos(p) * 2.55 * i, 51.4 + Math.sin(p) * 2.05 * i]);
  }
  return r;
}
function _r(s, o, { keyDir: t, rng: u, glows: e = [], wisps: r = [] }) {
  const a = { uT: { value: 0 }, uScale: { value: 600 } },
    i = t.clone().normalize().clone().multiplyScalar(-1),
    d = 10.6,
    y = Ir(48).map(([b, P]) => [b * 0.94 + -3 * 0.06, P * 0.94 + 51.4 * 0.06]),
    w = d / -i.y,
    g = [],
    z = [],
    x = [],
    v = y.length,
    n = 6;
  for (let b = 0; b <= n; b++) {
    const P = b / n,
      _ = d * (1 - P);
    for (let I = 0; I < v; I++) {
      const [R, V] = y[I],
        L = w * P;
      g.push(R + i.x * L, _, V + i.z * L);
      const [K, j] = y[(I + 1) % v],
        [O, J] = y[(I - 1 + v) % v],
        tt = K - O,
        st = j - J,
        G = Math.hypot(tt, st) || 1;
      z.push(st / G, 0, -tt / G);
    }
  }
  for (let b = 0; b < n; b++)
    for (let P = 0; P < v; P++) {
      const _ = b * v + P,
        I = b * v + ((P + 1) % v),
        R = _ + v,
        V = I + v;
      x.push(_, R, I, I, R, V);
    }
  const l = new Rt();
  (l.setAttribute("position", new xt(g, 3)),
    l.setAttribute("normal", new xt(z, 3)),
    l.setIndex(x));
  const f = new P0({
      uniforms: {
        uT: a.uT,
        uI: { value: 0.042 },
        uCol: { value: new Xt(0.62, 0.74, 1) },
        uTop: { value: d },
      },
      vertexShader: `varying vec3 vW; varying vec3 vN;
      void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: `uniform float uT; uniform float uI; uniform vec3 uCol; uniform float uTop; varying vec3 vW; varying vec3 vN;
      ${la}
      void main() {
        vec3 V = normalize(cameraPosition - vW);
        float soft = pow(abs(dot(normalize(vN), V)), 2.4);
        float h = clamp(vW.y / uTop, 0.0, 1.0);
        float fade = smoothstep(0.0, 0.1, h) * (1.0 - smoothstep(0.82, 1.0, h));
        vec2 q = vW.xz * 1.1 + vec2(vW.y * 0.35, -vW.y * 0.2);
        float n = an(q + vec2(uT * 0.03, uT * 0.05)) * 0.55 + an(q * 3.1 - vec2(uT * 0.07, 0.0)) * 0.3 + an(q * 9.0 + uT * 0.1) * 0.15;
        float near = smoothstep(1.0, 4.0, length(cameraPosition - vW));
        gl_FragColor = vec4(uCol * uI * soft * fade * (0.2 + 1.5 * n * n * n) * near, 1.0);
      }`,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
      side: p0,
    }),
    h = new bt(l, f);
  ((h.name = "church_moonshaft"), (h.renderOrder = 25), o.add(h));
  const c = `
    uniform vec3 uDown; uniform vec2 uHole; uniform vec2 uHoleR;
    float inShaft(vec3 p) {
      // back along the light to the vault's height: inside the hole's ellipse there?
      float s = (${d.toFixed(2)} - p.y) / -uDown.y;
      vec2 q = p.xz - uDown.xz * s;
      vec2 d = (q - uHole) / uHoleR;
      return 1.0 - smoothstep(0.75, 1.0, length(d));
    }`,
    M = (b, P) => {
      const _ = new Rt(),
        I = new Float32Array(b * 3),
        R = new Float32Array(b * 2);
      for (let K = 0; K < b; K++) {
        const [j, O] = y[Math.floor(u() * y.length)],
          J = Math.sqrt(u()),
          tt = -3 + (j + 3) * J * 0.95,
          st = 51.4 + (O - 51.4) * J * 0.95,
          G = u() * d,
          q = (d - G) / -i.y;
        (I.set([tt + i.x * q, G, st + i.z * q], K * 3),
          R.set([u(), u()], K * 2));
      }
      (_.setAttribute("position", new vt(I, 3)),
        _.setAttribute("aSeed", new vt(R, 2)));
      const V = new P0({
          uniforms: {
            uT: a.uT,
            uScale: a.uScale,
            uDown: { value: i.clone() },
            uHole: { value: new re(-3, 51.4) },
            uHoleR: { value: new re(2.4, 1.95) },
          },
          vertexShader: `attribute vec2 aSeed; uniform float uT; uniform float uScale; varying float vLit; varying float vHot; varying float vA;
        ${c}
        void main() {
          // falling (ash) or drifting (motes): the column wraps top to bottom
          float fall = ${P.fall.toFixed(3)} * (0.6 + aSeed.x * 0.8);
          float y = mod(position.y - uT * fall + aSeed.y * 3.0, ${d.toFixed(2)});
          float s = (position.y - y) / -uDown.y;
          vec3 p = vec3(position.x + uDown.x * s, y, position.z + uDown.z * s);
          p.x += sin(uT * (0.3 + aSeed.x * 0.4) + aSeed.y * 30.0) * ${P.wander.toFixed(3)};
          p.z += cos(uT * (0.25 + aSeed.y * 0.3) + aSeed.x * 20.0) * ${P.wander.toFixed(3)};
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          vLit = inShaft(p);
          vHot = step(${P.hot.toFixed(3)}, aSeed.x) * (0.5 + 0.5 * sin(uT * 3.0 + aSeed.y * 40.0));
          vA = smoothstep(0.0, 0.6, y) * (1.0 - smoothstep(${(d - 0.8).toFixed(2)}, ${d.toFixed(2)}, y)) * (1.0 - smoothstep(${(P.near * 0.6).toFixed(2)}, ${P.near.toFixed(2)}, -mv.z));
          gl_PointSize = max(1.0, ${P.size.toFixed(4)} * uScale / -mv.z);
        }`,
          fragmentShader: `varying float vLit; varying float vHot; varying float vA;
        void main() {
          vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard;
          vec3 col = mix(vec3(${P.dark}), vec3(${P.lit}), vLit) + vec3(3.2, 1.1, 0.25) * vHot;
          gl_FragColor = vec4(col * smoothstep(0.5, 0.15, d) * vA, 1.0);
        }`,
          transparent: !0,
          depthWrite: !1,
          blending: ye,
        }),
        L = new Do(_, V);
      return ((L.frustumCulled = !1), (L.renderOrder = 26), L);
    },
    m = M(420, {
      fall: 0.32,
      wander: 0.35,
      size: 0.028,
      near: 30,
      hot: 0.95,
      dark: "0.002, 0.002, 0.0025",
      lit: "0.07, 0.08, 0.1",
    });
  m.name = "church_ash";
  const k = M(380, {
    fall: 0.02,
    wander: 0.5,
    size: 0.006,
    hot: 2,
    dark: "0.0, 0.0, 0.0",
    lit: "0.5, 0.56, 0.72",
    near: 7,
  });
  ((k.name = "church_motes"), o.add(m, k));
  const S = new P0({
    uniforms: { uT: a.uT },
    vertexShader: `attribute vec4 aG; attribute vec3 aC; varying vec2 vUv; varying vec3 vC; varying float vK;
      uniform float uT;
      void main() {
        vec3 c = aG.xyz; float r = aG.w;
        vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), camU = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        vec3 p = c + (camR * (uv.x - 0.5) + camU * (uv.y - 0.5)) * r * 2.0;
        vUv = uv - 0.5; vC = aC;
        float dc = length(cameraPosition - c);
        vK = smoothstep(r * 0.4, r * 1.6, dc) * (0.9 + 0.1 * sin(uT * 2.3 + c.x * 3.0));
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: `varying vec2 vUv; varying vec3 vC; varying float vK;
      void main() { float d = length(vUv) * 2.0; float a = exp(-d * d * 3.5) * (1.0 - smoothstep(0.8, 1.0, d)); gl_FragColor = vec4(vC * a * vK, 1.0); }`,
    transparent: !0,
    depthWrite: !1,
    blending: ye,
  });
  if (e.length) {
    const b = new m0(1, 1);
    b.translate(0.5, 0.5, 0);
    const P = new Po();
    ((P.index = b.index),
      P.setAttribute("position", b.attributes.position),
      P.setAttribute("uv", b.attributes.uv));
    const _ = new Float32Array(e.length * 4),
      I = new Float32Array(e.length * 3);
    (e.forEach((V, L) => {
      (_.set([V.x, V.y, V.z, V.r], L * 4), I.set(V.c, L * 3));
    }),
      P.setAttribute("aG", new M0(_, 4)),
      P.setAttribute("aC", new M0(I, 3)),
      (P.instanceCount = e.length));
    const R = new bt(P, S);
    ((R.frustumCulled = !1),
      (R.renderOrder = 24),
      (R.name = "church_haze"),
      o.add(R));
  }
  if (r.length) {
    const P = [],
      _ = [],
      I = [],
      R = [];
    r.forEach((j, O) => {
      const J = P.length / 3;
      for (let tt = 0; tt <= 24; tt++)
        for (const st of [0, 1])
          (P.push(j.x, j.y, j.z),
            _.push(O * 7.3, st, j.h),
            R.push(st, tt / 24));
      for (let tt = 0; tt < 24; tt++) {
        const st = J + tt * 2;
        I.push(st, st + 1, st + 2, st + 1, st + 3, st + 2);
      }
    });
    const V = new Rt();
    (V.setAttribute("position", new xt(P, 3)),
      V.setAttribute("aS", new xt(_, 3)),
      V.setAttribute("uv", new xt(R, 2)),
      V.setIndex(I));
    const L = new P0({
        uniforms: { uT: a.uT },
        vertexShader: `attribute vec3 aS; uniform float uT; varying vec2 vUv; varying float vSeed;
        void main() {
          float t = uv.y, sd = aS.x, hgt = aS.z;
          float wv = uT * 0.9 + sd;
          vec3 p = position + vec3(sin(t * 5.0 - wv * 1.3) * 0.05 * t + sin(t * 11.0 - wv * 2.1) * 0.02 * t, t * hgt, cos(t * 4.0 - wv) * 0.04 * t);
          vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
          p += camR * (aS.y - 0.5) * (0.006 + 0.07 * t * t);
          vUv = vec2(aS.y, t); vSeed = sd;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
        }`,
        fragmentShader: `uniform float uT; varying vec2 vUv; varying float vSeed;
        ${la}
        void main() {
          float across = 1.0 - abs(vUv.x - 0.5) * 2.0;
          float n = an(vec2(vUv.x * 3.0 + vSeed, vUv.y * 6.0 - uT * 0.8));
          float a = across * across * smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.35, 1.0, vUv.y)) * (0.4 + n);
          vec3 c = mix(vec3(0.5, 0.26, 0.1), vec3(0.12, 0.11, 0.1), smoothstep(0.0, 0.5, vUv.y));
          gl_FragColor = vec4(c * a * 0.22, 1.0);
        }`,
        transparent: !0,
        depthWrite: !1,
        blending: ye,
        side: p0,
      }),
      K = new bt(V, L);
    ((K.frustumCulled = !1),
      (K.renderOrder = 23),
      (K.name = "church_smoke"),
      o.add(K));
  }
  return {
    update: (b, P) => {
      a.uT.value = P;
      const _ = s.game;
      _?.post?.size &&
        _.camera &&
        (a.uScale.value =
          _.post.size.y / (2 * Math.tan((_.camera.fov * Math.PI) / 360)));
    },
    shaft: h,
    U: a,
  };
}
function Fr(s, o, t, u = null, e = {}, r = Math.random) {
  const a = Qt.x1 - Qt.x0,
    p = pt.z1 + 0.05,
    i = 0.075,
    d = new Kt();
  ((d.name = "church_backdoor"), d.position.set(Qt.x1 - 0.02, 0, p));
  const y = Uo(a - 0.03, 0.012, Qt.spring, Qt.h - 0.012, 10).map(([h, c]) => [
      h - a / 2 + 0.005,
      c,
    ]),
    w = new te(qs(y), {
      depth: i,
      bevelEnabled: !0,
      bevelThickness: 0.006,
      bevelSize: 0.006,
      bevelSegments: 1,
      curveSegments: 4,
    });
  (w.translate(0, 0, -i / 2), w.deleteAttribute("uv"));
  const g = new bt(Wr(w.toNonIndexed()), o.door);
  ((g.castShadow = !0), (g.receiveShadow = !0), d.add(g));
  const z = [];
  for (let h = 1; h < 6; h++)
    for (const c of [-1, 1])
      z.push(
        Mt(
          -a + (h * a) / 6 - 0.004,
          0.02,
          c * (i / 2 + 0.001) - 0.002,
          -a + (h * a) / 6 + 0.004,
          Qt.spring + 0.3,
          c * (i / 2 + 0.001) + 0.002,
          0.001,
          "y",
        ),
      );
  for (const h of [0.35, 1.2, 1.95]) {
    z.push(
      Mt(
        -a * 0.82,
        h - 0.035,
        -i / 2 - 0.012,
        0.02,
        h + 0.035,
        -i / 2,
        0.004,
        "x",
      ),
    );
    const c = -a * 0.82;
    z.push(
      Q0(
        [
          [c, h, -i / 2 - 0.006],
          [c - 0.08, h + 0.05, -i / 2 - 0.006],
          [c - 0.12, h, -i / 2 - 0.006],
          [c - 0.08, h - 0.045, -i / 2 - 0.006],
          [c - 0.05, h - 0.01, -i / 2 - 0.006],
        ],
        0.008,
        12,
        5,
      ),
    );
    for (let M = 0; M < 6; M++)
      z.push(
        Wt(
          [
            [0, 0],
            [0.01, 0],
            [0.008, 0.006],
            [0, 0.008],
          ],
          -a * 0.75 + M * a * 0.14,
          h,
          -i / 2 - 0.012,
          { segs: 6, rot: [-Math.PI / 2, 0, 0] },
        ),
      );
    z.push(new Pt(0.02, 0.02, 0.12, 8).translate(0.02, h, -i / 2));
  }
  for (const h of [-1, 1]) {
    z.push(
      Mt(
        -a + 0.12,
        0.98,
        (h * i) / 2 - 0.004,
        -a + 0.26,
        1.18,
        (h * i) / 2 + 0.004,
        0.003,
        "y",
      ),
    );
    const c = [];
    for (let M = 0; M <= 20; M++) {
      const m = (M / 20) * Math.PI * 2;
      c.push([
        -a + 0.19 + Math.cos(m) * 0.06,
        1 + Math.sin(m) * 0.06,
        h * (i / 2 + 0.018),
      ]);
    }
    z.push(Q0(c, 0.007, 20, 5, !0));
  }
  const x = Rr(z),
    v = new bt(x, o.iron);
  if (
    ((v.castShadow = !0),
    (v.receiveShadow = !0),
    d.add(v),
    s.add(d),
    t(
      "stone",
      Mt(
        Qt.x0 + 0.01,
        -0.03,
        pt.z1 + 0.005,
        Qt.x1 - 0.01,
        0.02,
        pt.z1 + 0.8,
        0.012,
        "x",
      ),
      { cast: !1 },
    ),
    t(
      "stone",
      Mt(
        Qt.x0 - 0.18,
        -0.06,
        pt.z1 + 0.8,
        Qt.x1 + 0.18,
        0.07,
        pt.z1 + 1.25,
        0.02,
        "x",
      ),
      { cast: !1 },
    ),
    u)
  ) {
    (t(
      "iron",
      Wt(
        [
          [0, 0],
          [0.22, 0],
          [0.22, 0.03],
          [0.05, 0.08],
          [0.025, 0.12],
          [0.02, 1.2],
          [0.04, 1.24],
          [0, 1.24],
        ],
        5.62,
        0,
        60.55,
        { segs: 10 },
      ),
    ),
      t(
        "iron",
        Wt(
          [
            [0, 0],
            [0.3, 0],
            [0.32, 0.025],
            [0.28, 0.035],
            [0, 0.03],
          ],
          5.62,
          1.24,
          60.55,
          { segs: 18 },
        ),
      ));
    for (let M = 0; M < 6; M++) {
      const m = (M / 6) * Math.PI * 2;
      u.push({
        x: 5.62 + Math.cos(m) * 0.2,
        y: 1.27,
        z: 60.55 + Math.sin(m) * 0.2,
        h: 0.14 + r() * 0.22,
        r: 0.02,
        lit: !0,
        cl: e.back,
      });
    }
    u.push({
      x: 5.62,
      y: 1.27,
      z: 60.55,
      h: 0.4,
      r: 0.03,
      lit: !0,
      cl: e.back,
    });
    for (let M = 0; M < 14; M++)
      u.push({
        x: 3.25 + r() * 0.35,
        y: 0,
        z: 59.7 + r() * 1.3,
        h: 0.05 + r() * 0.2,
        r: 0.017 + r() * 0.015,
        lit: r() > 0.08,
        cl: e.back,
      });
  }
  const n = {
      x0: Qt.x0,
      x1: Qt.x1,
      z0: pt.z1,
      z1: pt.z1 + 0.8,
      y0: 0,
      y1: Qt.h,
      on: !0,
    },
    l = { x0: 5.38, x1: 5.86, z0: 60.31, z1: 60.79, y0: 0, y1: 1.6 };
  return {
    api: {
      openK: 0,
      pos: [(Qt.x0 + Qt.x1) / 2, 1.2, pt.z1 + 0.8],
      collider: n,
      open(h = 1) {
        (this.audio &&
          h > 0.02 &&
          this.openK <= 0.02 &&
          this.audio.play?.("church_backdoor_open", {
            pos: this.pos,
            vol: 0.9,
          }),
          this.audio &&
            h <= 0.01 &&
            this.openK > 0.06 &&
            this.audio.play?.("church_backdoor_shut", {
              pos: this.pos,
              vol: 1,
            }),
          (this.openK = h),
          (d.rotation.y = -Math.max(-0.05, Math.min(1.05, h)) * 1.75),
          (n.on = h < 0.3));
      },
    },
    colliders: u ? [n, l] : [n],
    pivot: d,
  };
}
function Wr(s) {
  const o = s.attributes.position,
    t = s.attributes.normal,
    u = new Float32Array(o.count * 2);
  for (let e = 0; e < o.count; e++) {
    const r = Math.abs(t.getX(e)),
      a = Math.abs(t.getZ(e));
    ((u[e * 2] = (a > r, o.getY(e))),
      (u[e * 2 + 1] = a > r ? o.getX(e) : o.getZ(e)));
  }
  return (s.setAttribute("uv", new vt(u, 2)), s);
}
function Rr(s) {
  const o = s.map((e) => {
    const r = e.index ? e.toNonIndexed() : e;
    return (
      r.attributes.uv ||
        r.setAttribute(
          "uv",
          new vt(new Float32Array(r.attributes.position.count * 2), 2),
        ),
      r.attributes.normal || r.computeVertexNormals(),
      r
    );
  });
  let t = 0;
  for (const e of o) t += e.attributes.position.count;
  const u = new Rt();
  for (const [e, r] of [
    ["position", 3],
    ["normal", 3],
    ["uv", 2],
  ]) {
    const a = new Float32Array(t * r);
    let p = 0;
    for (const i of o)
      (a.set(i.attributes[e].array, p), (p += i.attributes[e].array.length));
    u.setAttribute(e, new vt(a, r));
  }
  return u;
}
const me = dt,
  Ro = w0;
function Nr(s, o, t = Math.random) {
  const u = new Kt();
  ((u.name = "church_barricade"), s.add(u));
  const e = pt.z1 - 0.02,
    r = (Qt.x0 + Qt.x1) / 2,
    a = [],
    p = [],
    i = (z, x, v) => {
      const n = new bt(z, x);
      return (
        (n.name = v),
        (n.castShadow = !0),
        (n.receiveShadow = !0),
        (n.matrixAutoUpdate = !1),
        n
      );
    },
    d = () => {
      const z = { x0: 0, x1: 0, z0: 0, z1: 0, y0: 0, y1: 1.2, on: !0 };
      return (a.push(z), z);
    },
    y = (z, x, v, n, l = {}) => {
      const f = l.noCollider ? null : d(),
        h = {
          name: z,
          obj: x,
          keys: v,
          foot: n,
          col: f,
          u: -1,
          hold: l.hold,
          stand: l.stand,
          kind: l.kind,
        },
        c = new me(),
        M = new Ro(),
        m = new me(1, 1, 1),
        k = new me();
      return (
        (h.set = (S) => {
          if (((S = Math.max(0, Math.min(1, S))), S === h.u)) return;
          h.u = S;
          let A = v[0],
            b = v[v.length - 1];
          for (let I = 0; I < v.length - 1; I++)
            if (S >= v[I].u && S <= v[I + 1].u) {
              ((A = v[I]), (b = v[I + 1]));
              break;
            }
          const P = b.u > A.u ? (S - A.u) / (b.u - A.u) : 1,
            _ = b.ease ? b.ease(P) : P * P * (3 - 2 * P);
          if (
            (c.set(
              A.p[0] + (b.p[0] - A.p[0]) * _,
              A.p[1] + (b.p[1] - A.p[1]) * _,
              A.p[2] + (b.p[2] - A.p[2]) * _,
            ),
            M.slerpQuaternions(A.q, b.q, _),
            x.matrix.compose(c, M, m),
            (x.matrixWorldNeedsUpdate = !0),
            f)
          ) {
            let I = 1e9,
              R = -1e9,
              V = 1e9,
              L = -1e9;
            for (const K of n)
              (k.set(K[0], K[1], K[2]).applyMatrix4(x.matrix),
                (I = Math.min(I, k.x)),
                (R = Math.max(R, k.x)),
                (V = Math.min(V, k.z)),
                (L = Math.max(L, k.z)));
            ((f.x0 = I), (f.x1 = R), (f.z0 = V), (f.z1 = L));
          }
        }),
        (h.at = (S, A = new me()) =>
          A.set(S[0], S[1], S[2]).applyMatrix4(x.matrix)),
        p.push(h),
        u.add(x),
        h
      );
    },
    w = (z, x, v) => new Ro().setFromEuler(new pe(z, x, v, "YXZ"));
  {
    const n = [],
      l = [];
    (n.push(
      Mt(-1.1 / 2, 0.04, -0.55 / 2, 1.1 / 2, 0.62 - 0.07, 0.55 / 2, 0.01, "x"),
    ),
      n.push(
        Mt(
          -1.1 / 2 - 0.012,
          0.62 - 0.09,
          -0.55 / 2 - 0.012,
          1.1 / 2 + 0.012,
          0.62,
          0.55 / 2 + 0.012,
          0.012,
          "x",
        ),
      ));
    for (const c of [-1.1 / 2 + 0.08, 1.1 / 2 - 0.08])
      n.push(
        Mt(
          c - 0.05,
          0,
          -0.55 / 2 + 0.02,
          c + 0.05,
          0.05,
          0.55 / 2 - 0.02,
          0.006,
          "z",
        ),
      );
    for (const c of [-1.1 / 2 + 0.2, 0, 1.1 / 2 - 0.2])
      l.push(
        Mt(
          c - 0.025,
          0.035,
          -0.55 / 2 - 0.016,
          c + 0.025,
          0.62 + 0.004,
          0.55 / 2 + 0.016,
          0.003,
          "y",
        ),
      );
    for (const c of [-1, 1])
      l.push(
        Mt(
          (c * 1.1) / 2 - 0.03,
          0.62 * 0.5,
          -0.08,
          (c * 1.1) / 2 + 0.03,
          0.62 * 0.5 + 0.06,
          0.08,
          0.004,
          "y",
        ),
      );
    l.push(
      Mt(
        -0.06,
        0.62 - 0.2,
        -0.55 / 2 - 0.02,
        0.06,
        0.62 - 0.06,
        -0.55 / 2 + 0.002,
        0.004,
        "y",
      ),
    );
    const f = new Kt();
    ((f.matrixAutoUpdate = !1),
      f.add(
        i(us(n), o.oak, "church_chest"),
        i(us(l), o.iron, "church_chest_iron"),
      ));
    const h = e - 0.62 - 0.6 - 0.55 / 2 + 0.02;
    y(
      "chest",
      f,
      [
        { u: 0, p: [r + 0.02, 0, h], q: w(0, 0.04, 0) },
        { u: 0.45, p: [r + 0.25, 0, h - 0.95], q: w(0, 0.18, 0) },
        { u: 1, p: [5.5, 0, 57.95], q: w(0, 0.06, 0) },
      ],
      [
        [-1.1 / 2, 0, -0.55 / 2],
        [1.1 / 2, 0, -0.55 / 2],
        [-1.1 / 2, 0, 0.55 / 2],
        [1.1 / 2, 0, 0.55 / 2],
      ],
      {
        kind: "drag",
        hold: [
          [-0.3, 0.5, -0.55 / 2 - 0.02],
          [0.3, 0.5, -0.55 / 2 - 0.02],
        ],
        stand: [
          [0, r + 0.02, h - 0.55 / 2 - 0.62],
          [0.45, r + 0.2, h - 0.95 - 0.55 / 2 - 0.62],
          [1, 5.48, 57.95 - 0.55 / 2 - 0.62],
        ],
      },
    );
  }
  {
    const v = Ba(1.5, 0.72),
      n = i(v, o.oak, "church_barricade_pew"),
      l = new wt().makeBasis(
        new me(0, 1, 0),
        new me(1, 0, 0),
        new me(0, 0, -1),
      ),
      f = 0.2,
      h = new Ro().setFromRotationMatrix(new wt().makeRotationX(f).multiply(l)),
      c = e - 0.02 - 0.16 - 1.5 * Math.sin(f),
      M = new Ro().setFromRotationMatrix(
        new wt().makeBasis(new me(0, 0, -1), new me(-1, 0, 0), new me(0, 1, 0)),
      ),
      m = new Ro().setFromRotationMatrix(
        new wt().makeRotationX(-0.5).multiply(l),
      );
    y(
      "pew",
      n,
      [
        { u: 0, p: [r - 0.55, 0, c], q: h },
        { u: 0.3, p: [r - 0.5, 0, c - 0.45], q: m },
        { u: 1, p: [5.72, 0.17, 57.45], q: M },
      ],
      [
        [0, 0, 0],
        [1.5, 0, 0],
        [0, 1, 0],
        [1.5, 1, 0],
        [0, 0, 0.72],
        [1.5, 0, 0.72],
        [0, 1, 0.72],
        [1.5, 1, 0.72],
      ],
      {
        kind: "haul",
        hold: [
          [1.05, 0.95, 0.45],
          [0.95, 0.25, 0.45],
        ],
        stand: [
          [0, r, c - 1.05],
          [0.3, r, c - 1.5],
          [1, 4.45, 56.5],
        ],
      },
    );
  }
  {
    const z = [1.86, 1.22, 0.58],
      x = [0.07, -0.05, 0.04],
      v = Mt(-0.82, -0.085, -0.018, 0.82, 0.085, 0.018, 0.004, "x");
    z.forEach((n, l) => {
      const f = i(v, o.door, "church_plank"),
        h = e - 0.03,
        c = r - 0.35 + l * 0.32,
        M = e - 0.75 - l * 0.28,
        m = (t() - 0.5) * 0.8;
      y(
        "plank" + l,
        f,
        [
          { u: 0, p: [r, n, h], q: w(0, 0, x[l]) },
          {
            u: 0.55,
            p: [r - 0.12, n - 0.05, h - 0.42],
            q: w(0, -0.55, x[l] * 2),
          },
          {
            u: 1,
            p: [c, 0.02, M],
            q: w(Math.PI / 2, m, 0),
            ease: (k) => k * k,
          },
        ],
        [],
        {
          kind: "rip",
          noCollider: !0,
          hold: [
            [0.62, 0, -0.04],
            [0.3, 0, -0.04],
          ],
          stand: [[0, r + 0.22, e - 0.72]],
        },
      );
    });
  }
  const g = {
    pieces: p,
    reset() {
      for (const z of p) ((z.u = -1), z.set(0));
    },
    clearAll() {
      for (const z of p) ((z.u = -1), z.set(1));
    },
    get blocked() {
      return p.some((z) => z.u < 1);
    },
    cue(z, x = {}) {
      const v = p[z],
        n = v.at(v.hold[0]),
        l = v.at(v.hold[1]),
        f = v.stand,
        h = Math.max(0, v.u);
      let c = f[0],
        M = f[f.length - 1];
      for (let b = 0; b < f.length - 1; b++)
        if (h >= f[b][0] && h <= f[b + 1][0]) {
          ((c = f[b]), (M = f[b + 1]));
          break;
        }
      const m = M[0] > c[0] ? (h - c[0]) / (M[0] - c[0]) : 1,
        k = c[1] + (M[1] - c[1]) * m,
        S = c[2] + (M[2] - c[2]) * m,
        A = n.clone().add(l).multiplyScalar(0.5);
      return (
        (x.pos = [k, S]),
        (x.yaw = Math.atan2(A.x - k, A.z - S)),
        (x.L = n.toArray()),
        (x.R = l.toArray()),
        x
      );
    },
  };
  return (g.reset(), { api: g, colliders: a, root: u });
}
function Lr(s, o, t, u) {
  Ge.tex.value = t.tex1 || null;
  const e = [];
  u.forEach((a, p) => {
    if (p >= Ce) return;
    const i = t.lancets.find((z) => z.east === a.east && z.zc === a.zc);
    if (!i) return;
    const d = i.east ? pt.x1 - 0.3 : pt.x0 + 0.3,
      y = a.y ?? 6.6,
      w = new Is(Qa.radToDeg(a.angle ?? 0.25) * 2, 1, 0.3, 18);
    (w.position.set(d, y, i.zc),
      w.lookAt(a.target[0], a.target[1], a.target[2]),
      w.updateMatrixWorld(!0),
      Ge.mat[p].multiplyMatrices(w.projectionMatrix, w.matrixWorldInverse));
    const g = Math.min(0.9, 0.96 * (e0.w / (e0.apex - e0.sill)) * 2.4);
    (Ge.info[p].set(i.slot, i.mirror ? 1 : 0, g, 0.96),
      e.push({
        k: p,
        base: a.intensity ?? 900,
        ph: p * 1.7,
        pos: [d, y, i.zc],
      }));
  });
  const r = (a, p) => {
    for (const i of e) {
      const d =
        0.85 +
        0.1 * Math.sin(p * 0.7 + i.ph) +
        0.05 * Math.sin(p * 3.1 + i.ph * 2) * Math.sin(p * 5.3);
      Ge.pos[i.k].set(i.pos[0], i.pos[1], i.pos[2], i.base * d);
    }
  };
  return (r(0, 0), { spots: e, update: r });
}
function ha(s, o, t, u, e, r, a = 0, p = 0, i = null) {
  const d = [],
    y = [],
    w = [];
  for (let z = 0; z <= r; z++) {
    const x = z / r,
      v = o(x),
      n = i ? i(x) : t,
      l = i ? Math.PI * 2 - i(x) : u;
    for (let f = 0; f <= e; f++) {
      const h = n + ((l - n) * f) / e,
        c = s(h, x);
      (d.push(a + Math.sin(h) * c, v, p + Math.cos(h) * c),
        y.push((f / e) * 1.5, v));
    }
  }
  for (let z = 0; z < r; z++)
    for (let x = 0; x < e; x++) {
      const v = z * (e + 1) + x,
        n = v + 1,
        l = v + e + 1,
        f = l + 1;
      w.push(v, n, l, n, f, l);
    }
  const g = new Rt();
  return (
    g.setAttribute("position", new xt(d, 3)),
    g.setAttribute("uv", new xt(y, 2)),
    g.setIndex(w),
    g.computeVertexNormals(),
    g
  );
}
const Dr = (s, o, t) =>
    1 / Math.sqrt((Math.sin(s) / o) ** 2 + (Math.cos(s) / t) ** 2),
  Br = (s, o) => {
    for (let u = 1; u < s.length; u++)
      if (o <= s[u][0]) {
        const [e, r, a] = s[u - 1],
          [p, i, d] = s[u],
          y = (o - e) / (p - e);
        return [r + (i - r) * y, a + (d - a) * y];
      }
    const t = s[s.length - 1];
    return [t[1], t[2]];
  };
function $o(s, o, t, u, e, r) {
  const a = (n) => (n.applyMatrix4(o), n),
    p = [
      [0, 0.27, 0.23],
      [0.12, 0.24, 0.2],
      [0.35, 0.205, 0.17],
      [0.55, 0.17, 0.14],
      [0.7, 0.18, 0.14],
      [0.86, 0.205, 0.14],
      [0.95, 0.19, 0.12],
      [1, 0.065, 0.065],
    ],
    i = u * 0.84,
    d = r() * 6,
    y = (n, l, f = 1) => {
      const [h, c] = Br(p, l),
        M =
          (1 - l) ** 1.4 *
          0.14 *
          Math.cos(n * 7 + d) *
          (0.7 + 0.3 * Math.sin(l * 9 + d));
      return Dr(n, h, c) * f * (1 + M);
    },
    w = (n, l, f = 1) => y(Math.PI / 2 - n, l, f),
    g = (n) => t + n * i,
    z = (n) => {
      const l = (f) => Math.sin(Math.PI * Math.min(1, f * 1.02)) ** 0.75;
      s(
        n,
        a(
          A0(
            (f, h) => {
              const c = Math.cos(f - Math.PI / 2),
                M = Math.max(0, c) ** 6,
                m = Math.exp(-(((h - 0.62) / 0.05) ** 2)),
                k =
                  Math.exp(-(((h - 0.54) / 0.05) ** 2)) *
                  Math.max(0, Math.cos((f - Math.PI / 2) * 4)) ** 2,
                S =
                  Math.exp(-(((h - 0.44) / 0.09) ** 2)) * Math.max(0, c) ** 40,
                A = Math.exp(-(((h - 0.18) / 0.07) ** 2)) * M;
              return (
                0.085 *
                  l(h) *
                  (1 + 0.08 * M) *
                  (1 - 0.12 * Math.abs(Math.sin(f))) +
                0.01 * m * M -
                0.013 * k * M +
                0.024 * S +
                0.008 * A +
                (e.beard
                  ? 0.03 *
                    Math.exp(-(((h - 0.18) / 0.13) ** 2)) *
                    Math.max(0, c) ** 2
                  : 0)
              );
            },
            (f) => t + i - 0.03 + f * 0.22,
            28,
            16,
            0,
            0.015,
          ),
        ),
      );
    };
  if (e.covered) {
    s(
      e.covered,
      a(
        A0(
          (n, l) =>
            (l < 0.86
              ? w(n, (l / 0.86) * 0.96, 1.14)
              : 0.13 * Math.sqrt(Math.max(0, 1 - ((l - 0.86) / 0.14) ** 2)) +
                0.04) *
              (1 + 0.06 * Math.cos(n * 5 + l * 3)) +
            (l < 0.05 ? (0.05 - l) * 1.6 : 0),
          (n) => t + n * (i + 0.24),
          48,
          30,
        ),
      ),
      { cast: !0 },
    );
    return;
  }
  (s(e.robe, a(A0((n, l) => w(n, l), g, 44, 26))),
    e.mantle &&
      s(
        e.mantle,
        a(
          ha(
            (n, l) =>
              y(n, 0.2 + l * 0.76, 1.1) +
              0.015 +
              0.025 * (1 - l) * Math.cos(n * 5 + d),
            (n) => g(0.2 + n * 0.76),
            0,
            Math.PI * 2,
            34,
            18,
            0,
            0,
            (n) => 0.35 + (1 - n) * 0.55,
          ),
        ),
      ),
    z(e.skin),
    e.veil &&
      s(
        e.veil,
        a(
          ha(
            (n, l) =>
              (l < 0.5 ? 0.098 + l * 0.12 : 0.158 + (l - 0.5) * 0.36) *
              (1 + 0.05 * Math.cos(n * 6)),
            (n) => t + i + 0.205 - n * 0.44,
            0,
            Math.PI * 2,
            26,
            12,
            0,
            0,
            (n) => 0.62 + n * 0.15,
          ),
        ),
      ));
  const x = t + i * 0.8,
    v = 0.17;
  for (const n of [-1, 1])
    (s(
      e.robe,
      a(
        ge(
          [n * 0.175, t + i * 0.69, 0.04],
          [n * 0.035, x - 0.035, v - 0.035],
          0.052,
          10,
          0.04,
        ),
      ),
    ),
      s(
        e.robe,
        a(
          Wt(
            [
              [0, 0],
              [0.055, 0],
              [0.06, 0.03],
              [0, 0.03],
            ],
            n * 0.035,
            x - 0.06,
            v - 0.03,
            { segs: 10, rot: [1, 0, 0] },
          ),
        ),
      ));
  for (const n of [-1, 1])
    s(
      e.skin,
      a(
        Mt(
          n > 0 ? 0 : -0.024,
          0,
          -0.035,
          n > 0 ? 0.024 : 0,
          0.12,
          0.035,
          0.01,
          "y",
        )
          .rotateX(-0.25)
          .translate(0, x - 0.04, v),
      ),
    );
  if (e.halo) {
    const n = [];
    for (let l = 0; l <= 28; l++) {
      const f = (l / 28) * Math.PI * 2;
      n.push([Math.cos(f) * 0.17, t + i + 0.12 + Math.sin(f) * 0.17, -0.11]);
    }
    s(e.halo, a(Q0(n, 0.012, 28, 5, !0)));
  }
  if (e.crown) {
    for (let n = 0; n < 7; n++) {
      const l = (n / 7) * Math.PI * 2;
      s(
        e.crown,
        a(
          Wt(
            [
              [0, 0],
              [0.018, 0],
              [0.012, 0.05],
              [0, 0.06],
            ],
            Math.sin(l) * 0.085,
            t + i + 0.17,
            Math.cos(l) * 0.085,
            { segs: 6 },
          ),
        ),
      );
    }
    s(
      e.crown,
      a(
        Wt(
          [
            [0.088, 0],
            [0.095, 0],
            [0.095, 0.03],
            [0.088, 0.03],
          ],
          0,
          t + i + 0.16,
          0,
          { segs: 20 },
        ),
      ),
    );
  }
  if (e.hands === "lily") {
    s(
      "iron",
      a(ge([0.02, x - 0.1, v + 0.03], [0.08, x + 0.55, v + 0.06], 0.006, 5)),
    );
    for (let n = 0; n < 3; n++)
      s(
        "white",
        a(
          Wt(
            [
              [0, 0],
              [0.03, 0.03],
              [0.02, 0.06],
              [0, 0.05],
            ],
            0.06 + n * 0.01,
            x + 0.35 + n * 0.08,
            v + 0.06,
            { segs: 6 },
          ),
        ),
      );
  }
}
function Vr(s, o, t, u, e, r, a) {
  const p = [],
    i = (d, y, w, g = 0.3) => {
      t(
        "stone",
        Wt(
          [
            [0, 0],
            [g + 0.08, 0],
            [g + 0.08, 0.1],
            [g, 0.16],
            [g - 0.04, 0.2],
            [g - 0.04, w - 0.16],
            [g + 0.02, w - 0.1],
            [g + 0.06, w - 0.04],
            [g + 0.06, w],
            [0, w],
          ],
          d,
          0,
          y,
          { segs: 8, tile: 1 },
        ),
      );
    };
  {
    const y = pt.z1 - 0.42;
    (i(-4.95, y, 1.05, 0.3),
      $o(
        t,
        f0([-4.95, 0, y], [0, Math.PI, 0]),
        1.05,
        1.55,
        {
          robe: "white",
          mantle: "blue",
          veil: "white",
          skin: "skin",
          crown: "gilt",
          halo: "gilt",
        },
        r,
      ),
      p.push({
        x0: -4.95 - 0.42,
        x1: -4.95 + 0.42,
        z0: y - 0.42,
        z1: pt.z1,
        y0: 0,
        y1: 2.8,
      }));
  }
  {
    const d = pt.x1 - 0.2,
      y = 47.7,
      w = 1.62;
    (t(
      "stone",
      Wt(
        [
          [0, -0.35],
          [0.05, -0.35],
          [0.18, -0.12],
          [0.25, 0],
          [0.25, 0.06],
          [0, 0.06],
        ],
        d,
        w - 0.06,
        y,
        { segs: 8 },
      ),
    ),
      $o(
        t,
        f0([d, 0, y], [0, -Math.PI / 2, 0]),
        w,
        1.2,
        {
          robe: "white",
          mantle: "brownR",
          veil: null,
          skin: "skin",
          halo: "gilt",
          hands: "lily",
          beard: !0,
        },
        r,
      ));
  }
  {
    const d = pt.x0 + 0.45,
      y = 57.5;
    (i(d, y, 0.8, 0.27),
      $o(
        t,
        f0([d, 0, y], [0, Math.PI / 2, 0]),
        0.8,
        1.45,
        { covered: "purple" },
        r,
      ),
      p.push({
        x0: pt.x0,
        x1: d + 0.45,
        z0: y - 0.42,
        z1: y + 0.42,
        y0: 0,
        y1: 2.4,
      }));
  }
  {
    const d = S0 - 0.5,
      y = 54,
      w = 2.35;
    (t(
      "stone",
      Wt(
        [
          [0, -0.4],
          [0.05, -0.4],
          [0.16, -0.18],
          [0.24, -0.04],
          [0.24, 0.05],
          [0, 0.05],
        ],
        d,
        w - 0.05,
        y,
        { segs: 8 },
      ),
    ),
      $o(
        t,
        f0([d - 0.02, 0, y], [0, -Math.PI / 2, 0]),
        w,
        1.15,
        {
          robe: "white",
          mantle: "redM",
          veil: null,
          skin: "skin",
          halo: "gilt",
          hands: "pray",
        },
        r,
      ));
  }
  [
    [-1.75, 43.15, 0.12, 0],
    [4.85, 50.6, 0, 1],
    [4.75, 56.2, 0.05, 2],
    [-4.85, 55.9, -0.04, 3],
    [-1.2, 56.35, 0, 1],
  ].forEach(([d, y, w, g]) => {
    const z = new m0(0.9, 1.8);
    (z.rotateX(-Math.PI / 2), z.rotateY(w), z.translate(d, 0.004, y));
    const x = z.attributes.uv;
    for (let v = 0; v < x.count; v++) x.setX(v, (g + x.getX(v)) / 4);
    t("ledger", z, { cast: !1 });
  });
  {
    (t(
      "stone",
      Wt(
        [
          [0, 0],
          [0.36, 0],
          [0.36, 0.1],
          [0.26, 0.2],
          [0.2, 0.3],
          [0.19, 1.1],
          [0.24, 1.18],
          [0.4, 1.36],
          [0.52, 1.45],
          [0, 1.45],
        ],
        -2.85,
        0,
        55.55,
        { segs: 8, tile: 1, rot: [0, Math.PI / 8, 0] },
      ),
    ),
      t(
        "oak",
        Wt(
          [
            [0, 1.45],
            [0.56 - 0.03, 1.45],
            [0.56, 1.45 + 0.08],
            [0.56, 2.5 - 0.1],
            [0.56 + 0.05, 2.5 - 0.05],
            [0.56 + 0.05, 2.5],
            [0.56 - 0.07, 2.5],
            [0.56 - 0.07, 1.45 + 0.1],
            [0, 1.45 + 0.1],
          ],
          -2.85,
          0,
          55.55,
          { segs: 8, tile: 0.8, rot: [0, Math.PI / 8, 0] },
        ),
      ));
    for (let n = 0; n < 8; n++) {
      const l = (n / 8) * Math.PI * 2,
        f = -2.85 + Math.cos(l) * (0.56 * Math.cos(Math.PI / 8) + 0.005),
        h = 55.55 + Math.sin(l) * (0.56 * Math.cos(Math.PI / 8) + 0.005),
        c = -Math.sin(l),
        M = Math.cos(l),
        m = ue(0.13, 0.2),
        k = [
          [-0.13, 0],
          ...m.pts(8).map(([S, A]) => [S, 0.5 + A]),
          [0.13, 0],
        ].map(([S, A]) => [f + c * S, 1.45 + 0.2 + A, h + M * S]);
      t(
        "gilt",
        I0(
          [
            [-0.012, 0],
            [0.012, 0],
            [0.012, 0.015],
            [-0.012, 0.015],
          ],
          k,
          [Math.cos(l), 0, Math.sin(l)],
          { crease: 0.8 },
        ),
      );
    }
    for (let n = 0; n < 7; n++) {
      const l = 57.3 - n * 0.2,
        f = (n + 1) * 0.2;
      (t(
        "oak",
        Mt(
          -2.85 - 0.62,
          f - 0.05,
          l - 0.12,
          -2.85 - 0.12,
          f,
          l + 0.12,
          0.01,
          "x",
        ),
      ),
        t(
          "oak",
          Mt(-2.85 - 0.62, 0, l - 0.12, -2.85 - 0.58, f, l + 0.12, 0.005, "z"),
        ));
    }
    t(
      "oak",
      Q0(
        [
          [-2.85 - 0.6, 1.1, 55.55 + 1.8],
          [-2.85 - 0.6, 2.2, 55.55 + 0.5],
        ],
        0.02,
        6,
        6,
      ),
    );
    const x = 4.35,
      v = 55.55 - 0.45;
    (t(
      "oak",
      Wt(
        [
          [0, x],
          [0.82, x],
          [0.84, x + 0.06],
          [0.8, x + 0.12],
          [0, x + 0.12],
        ],
        -2.85,
        0,
        v,
        { segs: 8, rot: [0, Math.PI / 8, 0] },
      ),
    ),
      t(
        "gilt",
        Wt(
          [
            [0.84, x - 0.12],
            [0.86, x - 0.12],
            [0.86, x],
            [0.84, x],
          ],
          -2.85,
          0,
          v,
          { segs: 8, rot: [0, Math.PI / 8, 0] },
        ),
      ),
      t(
        "oak",
        A0(
          (n, l) =>
            0.62 *
            (1 - l) *
            (1 +
              0.28 *
                Math.max(0, Math.cos(n * 8)) *
                Math.sin(Math.PI * l * 5) *
                (1 - l)),
          (n) => x + 0.12 + n * 1.3,
          32,
          12,
          -2.85,
          v,
        ),
      ),
      t(
        "gilt",
        Wt(
          [
            [0, 0],
            [0.04, 0],
            [0.06, 0.06],
            [0.03, 0.12],
            [0.05, 0.16],
            [0, 0.26],
          ],
          -2.85,
          x + 1.4,
          v,
          { segs: 8 },
        ),
      ),
      t("iron", ge([-S0, 5, 54.1], [-2.85, x + 0.1, v], 0.018, 6)));
    for (let n = 0; n < 5; n++)
      N0(
        e,
        -2.85 - 0.4 + r() * 0.1,
        (n + 1) * 0.2 + 0.2,
        55.55 + 1.75 - n * 0.4,
        0.08 + r() * 0.1,
        0.018,
        a.pulpit,
      );
    for (let n = 0; n < 4; n++) {
      const l = r() * 6.28;
      N0(
        e,
        -2.85 + Math.cos(l) * 0.45,
        0,
        55.55 + Math.sin(l) * 0.45,
        0.06 + r() * 0.12,
        0.02,
        a.pulpit,
      );
    }
    p.push({
      x0: -2.85 - 0.66,
      x1: -2.85 + 0.6,
      z0: 55.55 - 0.6,
      z1: 55.55 + 1.67,
      y0: 0,
      y1: 2.6,
    });
  }
  {
    (t(
      "stone",
      Wt(
        [
          [0, 0],
          [0.72, 0],
          [0.72, 0.12],
          [0.58, 0.12],
          [0.58, 0.24],
          [0.26, 0.24],
          [0.2, 0.32],
          [0.19, 0.62],
          [0.24, 0.66],
          [0.44, 0.72],
          [0.5, 0.92],
          [0.53, 0.96],
          [0.53, 1.02],
          [0.44, 1.02],
          [0.42, 0.86],
          [0, 0.86],
        ],
        -1.85,
        0,
        43.3,
        { segs: 8, tile: 1, rot: [0, Math.PI / 8, 0] },
      ),
    ),
      t(
        "oak",
        A0(
          (w, g) =>
            (0.46 * (1 - g) ** 1.3 + 0.03) *
            (1 +
              0.22 *
                Math.max(0, Math.cos(w * 8)) *
                Math.sin(Math.PI * g * 6) *
                (1 - g)),
          (w) => 1.02 + w * 1.45,
          32,
          14,
          -1.85,
          43.3,
        ),
      ),
      t(
        "gilt",
        Wt(
          [
            [0, 0],
            [0.05, 0],
            [0.07, 0.07],
            [0.03, 0.14],
            [0.06, 0.2],
            [0, 0.32],
          ],
          -1.85,
          2.45,
          43.3,
          { segs: 8 },
        ),
      ),
      t(
        "iron",
        Q0(
          [
            [-1.85, 2.8, 43.3],
            [-1.85, 4.4, 43.3],
          ],
          0.008,
          4,
          4,
        ),
        { cast: !1 },
      ));
    for (let w = 0; w < 6; w++) {
      const g = (w / 6) * Math.PI * 2 + 0.3;
      N0(
        e,
        -1.85 + Math.cos(g) * 0.64,
        0.12,
        43.3 + Math.sin(g) * 0.64,
        0.07 + r() * 0.12,
        0.018,
        a.door,
        { lit: r() > 0.2 },
      );
    }
    p.push({
      x0: -1.85 - 0.72,
      x1: -1.85 + 0.72,
      z0: 43.3 - 0.72,
      z1: 43.3 + 0.72,
      y0: 0,
      y1: 2.5,
    });
  }
  {
    const d = [43, 45.3, 50.3, 52.6, 55.2, 57.8, 60.2];
    let y = 0;
    for (const w of [1, -1])
      for (const g of w > 0 ? d : [...d].reverse()) {
        if ((w > 0 && Math.abs(g - 47.7) < 1) || (w < 0 && g > 59.5)) continue;
        const z = w * (pt.x1 - 0.02),
          x = 2.3,
          v = 0.36,
          n = 0.46,
          l = -w,
          f = [
            Mt(
              -v / 2 - 0.04,
              -n / 2 - 0.04,
              -0.025,
              v / 2 + 0.04,
              n / 2 + 0.04,
              0.025,
              0.008,
              "x",
            ),
            Mt(
              -0.012,
              n / 2 + 0.04,
              -0.012,
              0.012,
              n / 2 + 0.2,
              0.012,
              0.003,
              "y",
            ),
            Mt(
              -0.06,
              n / 2 + 0.11,
              -0.012,
              0.06,
              n / 2 + 0.135,
              0.012,
              0.003,
              "x",
            ),
          ];
        for (const m of f)
          (m.applyMatrix4(
            f0([z, x, g], [0, l > 0 ? Math.PI / 2 : -Math.PI / 2, 0]),
          ),
            t("oak", m));
        const h = new m0(v, n),
          c = h.attributes.uv,
          M = y % 5;
        for (let m = 0; m < c.count; m++)
          c.setXY(
            m,
            (M + 0.12 + c.getX(m) * 0.76) / 5,
            0.12 + c.getY(m) * 0.62,
          );
        (h.applyMatrix4(
          f0([z + l * 0.03, x, g], [0, l > 0 ? Math.PI / 2 : -Math.PI / 2, 0]),
        ),
          t("panel", h, { cast: !1 }),
          y++);
      }
  }
  for (const [d, y, w] of [
    [pt.x1 - 0.02, 42.4, 3.1],
    [pt.x0 + 0.02, 43.3, 3],
    [pt.x1 - 0.02, 58.9, 3.2],
    [pt.x0 + 0.02, 50.1, 3.25],
  ]) {
    const g = d > 0 ? -1 : 1,
      z = [0, g > 0 ? Math.PI / 2 : -Math.PI / 2, 0],
      x = Mt(-0.34, -0.46, -0.02, 0.34, 0.46, 0.02, 0.01, "x"),
      v = Mt(-0.27, -0.36, -0.015, 0.27, 0.34, 0.035, 0.012, "x"),
      n = A0(
        (l, f) => 0.12 * Math.sin(Math.PI * (0.5 + f * 0.5)) + 0.001,
        (l) => 0.46 + l * 0.14,
        12,
        4,
        0,
        0,
      );
    for (const [l, f] of [
      [x, "slate"],
      [v, "marble"],
      [n, "marble"],
    ])
      (l.applyMatrix4(f0([d + g * 0.03, w, y], z)), t(f, l));
  }
  for (const d of [-1, 1]) {
    const y = d * (S0 - 0.48),
      w = 44,
      g = 5.4,
      z = 0.62,
      x = 1.35,
      v = d < 0 ? 0 : 1,
      n = new m0(z, x, 8, 16),
      l = n.attributes.position,
      f = n.attributes.uv;
    for (let h = 0; h < l.count; h++) {
      const c = f.getX(h),
        M = f.getY(h);
      (l.setZ(
        h,
        Math.sin(c * Math.PI * 3 + v) * 0.025 * (1 - M * 0.6) + (1 - M) * 0.06,
      ),
        f.setX(h, (v + c) / 2));
    }
    (n.computeVertexNormals(),
      n.translate(0, -x / 2, 0),
      n.applyMatrix4(f0([y, g, w], [0, (-d * Math.PI) / 2 + d * 0.35, 0])),
      t("banner", n, { cast: !1 }),
      t(
        "iron",
        ge(
          [y - d * 0.02, g + 0.02, w - 0.34],
          [y - d * 0.02, g + 0.02, w + 0.34],
          0.012,
          6,
        ).applyMatrix4(new wt()),
        { cast: !1 },
      ),
      t("iron", ge([d * S0, g + 0.4, w], [y, g + 0.02, w], 0.01, 5), {
        cast: !1,
      }));
  }
  {
    const d = pt.x0 + 0.28,
      y = 42.1;
    for (const x of [-0.28, 0.28])
      t("iron", ge([d + 0.02, 0, y + x], [d - 0.2, 2.1, y + x], 0.017, 8));
    const w = new m0(0.52, 1.8, 1, 1);
    (w.rotateY(Math.PI / 2),
      w.rotateZ(-0.105),
      w.translate(d - 0.09, 1.1, y),
      t("canvas", w, { cast: !1 }));
    const g = -5.55,
      z = 42.78;
    (t(
      "olive",
      Mt(g - 0.33, 0, z - 0.22, g + 0.33, 0.36, z + 0.22, 0.012, "x"),
    ),
      t(
        "olive",
        Mt(g - 0.34, 0, z + 0.28, g + 0.34, 0.03, z + 0.72, 0.01, "x"),
      ),
      t(
        "paintW",
        Mt(g - 0.045, 0.1, z - 0.225, g + 0.045, 0.28, z - 0.215, 0.002, "x"),
        { cast: !1 },
      ),
      t(
        "paintW",
        Mt(g - 0.09, 0.145, z - 0.225, g + 0.09, 0.235, z - 0.215, 0.002, "x"),
        { cast: !1 },
      ),
      t(
        "iron",
        Wt(
          [
            [0, 0],
            [0.07, 0],
            [0.07, 0.03],
            [0.05, 0.05],
            [0.05, 0.2],
            [0.07, 0.22],
            [0.03, 0.26],
            [0, 0.26],
          ],
          g + 0.12,
          0.36,
          z,
          { segs: 10 },
        ),
      ),
      t(
        "linen",
        Mt(g - 0.28, 0.2, z - 0.18, g + 0.2, 0.34, z + 0.18, 0.02, "x"),
        { cast: !1 },
      ),
      t(
        "wool",
        A0(
          (x, v) =>
            (0.55 * (1 - v) + 0.05) *
            (1 + 0.25 * Math.sin(x * 3 + 1) + 0.12 * Math.sin(x * 7)),
          (x) =>
            0.005 +
            Math.sin((x * Math.PI) / 2) * (0.1 + 0.04 * Math.sin(x * 9)),
          40,
          8,
          -4.45,
          42.3,
        ),
        { cast: !1 },
      ),
      p.push({
        x0: g - 0.36,
        x1: g + 0.36,
        z0: z - 0.25,
        z1: z + 0.25,
        y0: 0,
        y1: 0.6,
      }));
  }
  {
    const w = new tn(1, 0),
      g = 110,
      z = new l0(w, u.web, g);
    ((z.name = "church_rubble"), (z.castShadow = !0), (z.receiveShadow = !0));
    for (let l = 0; l < g; l++) {
      const f = r() * 6.283,
        h = Math.sqrt(r()) * 2.1,
        c = -3.3 + Math.cos(f) * h * 1.2,
        M = 51.5 + Math.sin(f) * h,
        m = 0.05 + r() * r() * 0.28;
      z.setMatrixAt(
        l,
        f0(
          [c, m * 0.45, M],
          [r() * 3, r() * 3, r() * 3],
          [m * (0.8 + r() * 0.8), m * (0.5 + r() * 0.4), m * (0.8 + r() * 0.6)],
        ),
      );
    }
    (o.add(z),
      t(
        "ash",
        A0(
          (l, f) =>
            (1.9 * (1 - f) + 0.02) *
            (1 + 0.18 * Math.sin(l * 3 + 0.7) + 0.08 * Math.sin(l * 7)),
          (l) => 0.002 + Math.sin((l * Math.PI) / 2) * 0.13,
          48,
          6,
          -3.3 - 0.3,
          51.5 + 0.1,
        ),
        { cast: !1 },
      ));
    const x = [];
    for (let l = 0; l <= 14; l++) {
      const f = l / 14;
      x.push([
        -3.3 - 1.2 + f * 1.9,
        0.14 + Math.sin(f * Math.PI) * 0.05,
        51.5 + 0.6 - f * 0.9,
      ]);
    }
    (t(
      "rib",
      I0(
        [
          [-0.1, -0.06],
          [-0.1, 0.06],
          [-0.055, 0.13],
          [-0.02, 0.24],
          [0.02, 0.24],
          [0.055, 0.13],
          [0.1, 0.06],
          [0.1, -0.06],
        ],
        x,
        [0.2, 1, 0.1],
        { crease: 0.6 },
      ),
    ),
      t(
        "rib",
        A0(
          (l, f) =>
            (0.2 * Math.sin(Math.PI * (0.08 + 0.92 * f)) + 0.03) *
            (1 +
              0.18 *
                Math.pow(Math.max(0, Math.cos(l * 6)), 0.5) *
                Math.sin(Math.PI * f)),
          (l) => l * 0.4,
          36,
          8,
        ).applyMatrix4(f0([-3.3 + 0.9, 0.22, 51.5 - 0.8], [1.3, 0.4, 0.2])),
      ));
    for (const [l, f, h] of [
      [[-3.3 - 1.6, 0.05, 51.5 - 1.2], [-3.3 + 1.3, 0.55, 51.5 - 0.3], 0.22],
      [[-3.3 - 0.4, 0.08, 51.5 + 1.3], [-3.3 + 1.9, 0.12, 51.5 + 0.2], 0.18],
      [[-3.3 + 0.6, 0.05, 51.5 - 1.6], [-3.3 - 1.1, 0.35, 51.5 + 0.4], 0.14],
    ]) {
      const c = new dt(...l),
        M = new dt(...f),
        m = c.distanceTo(M),
        k = new qt(h, h * 0.8, m, 1, 1, 4),
        S = k.attributes.position;
      for (let A = 0; A < S.count; A++) {
        const b = S.getZ(A) / m + 0.5;
        S.setX(A, S.getX(A) * (1 - 0.3 * Math.max(0, b - 0.8) * 5));
      }
      (k.computeVertexNormals(),
        k.applyMatrix4(new wt().lookAt(M, c, new dt(0, 1, 0))),
        k.translate(
          (c.x + M.x) / 2,
          (c.y + M.y) / 2 + h * 0.4,
          (c.z + M.z) / 2,
        ),
        t("char", k));
    }
    const v = new qt(0.26, 0.008, 0.18),
      n = new l0(v, u.slate, 40);
    ((n.name = "church_slates"), (n.receiveShadow = !0));
    for (let l = 0; l < 40; l++) {
      const f = r() * 6.28,
        h = Math.sqrt(r()) * 2.4;
      n.setMatrixAt(
        l,
        f0(
          [
            -3.3 + Math.cos(f) * h * 1.2,
            0.01 + r() * 0.08,
            51.5 + Math.sin(f) * h,
          ],
          [(r() - 0.5) * 0.4, r() * 6.28, (r() - 0.5) * 0.4],
          [0.5 + r() * 0.8, 1, 0.5 + r() * 0.8],
        ),
      );
    }
    (o.add(n),
      p.push({
        x0: -3.3 - 1.9,
        x1: -3.3 + 1.5,
        z0: 51.5 - 1.3,
        z1: 51.5 + 1.3,
        y0: 0,
        y1: 0.6,
      }));
  }
  {
    const d = new Rt();
    (d.setAttribute(
      "position",
      new xt([0, 0, 0, 0.012, 0, 0.045, 0.05, 0, 0.012], 3),
    ),
      d.setAttribute("normal", new xt([0, 1, 0, 0, 1, 0, 0, 1, 0], 3)));
    const y = 90,
      w = new l0(d, u.shard, y);
    w.name = "church_shards";
    const g = [
      [0.55, 0.05, 0.05],
      [0.08, 0.14, 0.55],
      [0.75, 0.52, 0.12],
      [0.7, 0.72, 0.62],
      [0.12, 0.35, 0.12],
    ].map((z) => new Xt(...z));
    for (let z = 0; z < y; z++) {
      const x = pt.x0 + 0.25 + r() * r() * 1.8,
        v = 46.5 + (r() - 0.5) * 1.8;
      (w.setMatrixAt(
        z,
        f0(
          [x, 0.004, v],
          [(r() - 0.5) * 0.15, r() * 6.28, (r() - 0.5) * 0.15],
          0.6 + r() * 1.6,
        ),
      ),
        w.setColorAt(z, g[Math.floor(r() * g.length)]));
    }
    o.add(w);
  }
  for (const [d, y, w] of [
    [-5.45, 59.35, 7],
    [-4.45, 59.35, 6],
    [2.95, 58, 5],
    [-2.95, 58, 6],
  ]) {
    t(
      "brass",
      Wt(
        [
          [0, 0],
          [0.07, 0],
          [0.09, 0.05],
          [0.08, 0.14],
          [0.05, 0.2],
          [0.055, 0.25],
          [0.07, 0.28],
          [0, 0.26],
        ],
        d,
        0,
        y,
        { segs: 16 },
      ),
    );
    for (let g = 0; g < w; g++) {
      const z = (g / w) * 6.28 + r(),
        x = 0.08 + r() * 0.12,
        v = 0.35 + r() * 0.3,
        n = r(),
        l = [
          [d, 0.24, y],
          [
            d + Math.cos(z) * x * 0.5,
            0.24 + v * 0.6,
            y + Math.sin(z) * x * 0.5,
          ],
          [d + Math.cos(z) * x, 0.24 + v, y + Math.sin(z) * x],
          [
            d + Math.cos(z) * (x + 0.05 * n),
            0.24 + v - 0.08 * n,
            y + Math.sin(z) * (x + 0.05 * n),
          ],
        ];
      t("dry", Q0(l, 0.003, 8, 4), { cast: !1 });
      const f = l[3];
      t(
        "dry",
        Wt(
          [
            [0, 0],
            [0.02, 0.01],
            [0.025, 0.03],
            [0, 0.04],
          ],
          f[0],
          f[1] - 0.03,
          f[2],
          { segs: 6 },
        ),
        { cast: !1 },
      );
    }
  }
  return { colliders: p };
}
const ua = 0.16,
  Kr = 420,
  rs = 4,
  k0 = Kr + rs,
  Ur = 9.81;
function fa(s) {
  return () => {
    ((s |= 0), (s = (s + 1831565813) | 0));
    let o = Math.imul(s ^ (s >>> 15), 1 | s);
    return (
      (o = (o + Math.imul(o ^ (o >>> 7), 61 | o)) ^ o),
      ((o ^ (o >>> 14)) >>> 0) / 4294967296
    );
  };
}
function Er() {
  const s = [-0.03, 0, -0.012],
    o = [0.032, 0, -0.005],
    t = [0.006, 0, 0.027],
    u = [-0.009, 0, 0.013],
    e = [
      [s, t, o, 1],
      [s, u, t, 1],
      [s, o, t, -1],
      [s, t, u, -1],
    ],
    r = [],
    a = [];
  for (const [i, d, y, w] of e)
    for (const g of [i, d, y]) (r.push(g[0], g[1], g[2]), a.push(0, w, 0));
  const p = new Rt();
  return (
    p.setAttribute("position", new xt(r, 3)),
    p.setAttribute("normal", new xt(a, 3)),
    p
  );
}
function qr(s, o, t, u) {
  const e = co,
    r = Math.floor(u() * 1e9);
  let a = fa(r);
  const p = Math.PI / 2,
    i = [e.xg + 0.05, e.sill, e.zm],
    d = [pt.x0 + 1.4, e.zm + 0.24],
    y = [e.xg - 0.95, e.zm],
    w = e.sill + 2.6,
    g = {
      x0: e.xg - 0.06,
      x1: e.xg + 0.06,
      z0: e.z0,
      z1: e.z1,
      y0: e.sill,
      y1: e.spring,
      on: !0,
    },
    z = new l0(Er(), t.shard, k0);
  ((z.name = "church_window_shards"),
    (z.castShadow = !1),
    (z.receiveShadow = !0),
    (z.count = 0),
    (z.boundingSphere = new hs(new dt(pt.x0 + 1.6, 2.2, e.zm), 4.2)),
    z.instanceMatrix.setUsage(en));
  const x = [
      [0.55, 0.05, 0.05],
      [0.08, 0.14, 0.55],
      [0.75, 0.52, 0.12],
      [0.7, 0.72, 0.62],
      [0.12, 0.35, 0.12],
    ],
    v = [0.34, 0.28, 0.2, 0.1, 0.08],
    n = () => {
      let Y = u(),
        et = 0;
      for (; et < v.length - 1 && Y > v[et];) ((Y -= v[et]), et++);
      return et;
    },
    l = new Xt(),
    f = new wt().makeScale(0, 0, 0),
    h = new Float32Array(k0 * 3);
  for (let Y = 0; Y < k0; Y++) {
    if (Y < rs) l.setRGB(0.62, 0.62, 0.68);
    else {
      const et = x[n()],
        nt = 0.85 + u() * 0.3;
      l.setRGB(et[0] * nt, et[1] * nt, et[2] * nt);
    }
    (l.toArray(h, Y * 3), z.setColorAt(Y, l), z.setMatrixAt(Y, f));
  }
  o.add(z);
  const c = (Y, et) => {
      const nt = Y * 3;
      (l.setRGB(h[nt] * et, h[nt + 1] * et, h[nt + 2] * et),
        z.setColorAt(Y, l));
    },
    M = { uT: { value: 0 }, uOn: { value: 0 } },
    m = new bt(
      new m0(3.15, 5)
        .rotateY(Math.PI / 2)
        .translate(e.xg - 1.25, e.sill + 1.6, e.zm),
      new P0({
        uniforms: M,
        fog: !1,
        depthWrite: !0,
        vertexShader: `
varying vec3 vW;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
        fragmentShader: `
uniform float uT;
uniform float uOn;
varying vec3 vW;
float fh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(fh(i), fh(i + vec2(1.0, 0.0)), f.x), mix(fh(i + vec2(0.0, 1.0)), fh(i + vec2(1.0, 1.0)), f.x), f.y); }
void main() {
  if (uOn <= 0.0) discard;
  // the burning town below the window, the smoke over it: a warm glow low down going to a dark red sky, drifting
  vec3 c = mix(vec3(0.5, 0.14, 0.04), vec3(0.035, 0.009, 0.01), smoothstep(${(e.sill - 0.4).toFixed(2)}, ${(e.sill + 3.4).toFixed(2)}, vW.y));
  // smoke rolling up across it, thick and thin, and the glow of the fires breathing under it
  vec2 p = vW.zy * vec2(2.6, 1.7);
  float n = fn(p + vec2(uT * 0.12, -uT * 0.55)) * 0.55 + fn(p * 2.3 + vec2(-uT * 0.35, -uT * 1.1)) * 0.3 + fn(p * 5.1 + vec2(uT * 0.2, -uT * 1.9)) * 0.15;
  n = smoothstep(0.25, 0.85, n);
  c *= 0.18 + 1.35 * n;
  c *= 0.92 + 0.08 * sin(uT * 6.3) * sin(uT * 2.9 + 1.3);
  gl_FragColor = vec4(c * uOn, 1.0);
}`,
      }),
    );
  ((m.name = "church_window_fire"),
    (m.castShadow = !1),
    (m.receiveShadow = !1),
    o.add(m));
  const k = new Float32Array(k0 * 3),
    S = new Float32Array(k0 * 3),
    A = new Float32Array(k0 * 4),
    b = new Float32Array(k0 * 4),
    P = new Float32Array(k0 * 3),
    _ = new Float32Array(k0),
    I = new Uint8Array(k0),
    R = new Uint8Array(k0),
    V = new Float32Array(k0 * 4),
    L = new Float32Array(k0),
    K = new Float32Array(k0),
    j = new w0(),
    O = new w0(),
    J = new w0(),
    tt = new dt(),
    st = new dt(),
    G = new dt(),
    q = new wt(),
    U = new dt(),
    Z = new pe(),
    ot = [
      [e.sill + 2.5, e.zm - 0.17, 0.34, 0.22, 0.75, 0.7],
      [e.sill + 2.32, e.zm + 0.15, 0.28, 0.2, 0.55, -0.9],
    ],
    $ = new dt(),
    C = new dt(),
    T = new dt(),
    D = new dt(),
    N = new dt(),
    H = (Y, et, nt, it, lt, ht, yt) => {
      T.subVectors(nt, et);
      const Ft = T.length();
      (T.divideScalar(Ft),
        C.set(lt, ht, yt),
        C.addScaledVector(T, -T.dot(C)).normalize(),
        $.crossVectors(C, T),
        q.makeBasis($, C, T),
        q.scale(G.set(it / 0.05, 1, Ft / 0.042)),
        q.setPosition((et.x + nt.x) / 2, (et.y + nt.y) / 2, (et.z + nt.z) / 2),
        z.setMatrixAt(Y, q));
    },
    Q = (Y) => {
      for (let et = 0; et < 2; et++) {
        const [nt, it, lt, ht, yt, Ft] = ot[et],
          Ut = Math.min(1, Y / 0.09),
          Lt =
            yt * Ut + 0.45 * Math.exp(-Y / 0.7) * Math.sin(Y * 7.5 + et) * Ut;
        (D.set(e.xg + 0.01, nt, it),
          N.set(
            D.x + Math.sin(Lt) * lt,
            nt - Math.cos(Lt) * lt,
            it + Math.sin(Lt) * 0.06 * (et ? -1 : 1),
          ),
          H(et * 2, D, N, 0.024, 1, 0, 0));
        const h0 = Lt + Ft * Ut;
        (D.copy(N),
          N.set(
            D.x + Math.sin(h0) * ht,
            D.y - Math.cos(h0) * ht,
            D.z + Math.cos(h0) * 0.05 * (et ? 1 : -1),
          ),
          H(et * 2 + 1, D, N, 0.02, 1, 0.2, 0.3));
      }
    },
    W = { t: -1, state: 0, active: !1, ruins: !1, rained: !1 },
    B = () => {
      for (let Y = rs; Y < k0; Y++) {
        const et = a() < 0.4,
          nt = et ? 2 * e.zc - e.zm : e.zm,
          it = Y * 3,
          lt = a() * 2 - 1,
          ht = Math.pow(a(), 0.8),
          yt = e.sill + 0.12 + ht * (et ? 2.9 : 3.5),
          Ft = nt + lt * (e.half - 0.02),
          Ut = (yt - (e.sill + 1)) / 1.4,
          Lt = Math.min(1, Math.hypot(lt * 0.6, Ut));
        ((k[it] = e.xg + 0.02 + a() * 0.06),
          (k[it + 1] = yt),
          (k[it + 2] = Ft));
        const h0 =
          (0.9 + 2.2 * (1 - Lt) + a() * 1.1) *
          (0.8 + 0.25 * a()) *
          (et ? 0.8 : 1);
        ((S[it] = h0),
          (S[it + 1] = -0.6 + a() * 1.2 + (1 - Lt) * 0.4),
          (S[it + 2] = lt * 0.6 + (a() - 0.5) * 1.1),
          U.set(a() - 0.5, a() - 0.5, a() - 0.5).normalize(),
          (A[Y * 4] = U.x),
          (A[Y * 4 + 1] = U.y),
          (A[Y * 4 + 2] = U.z),
          (A[Y * 4 + 3] = 6 + a() * 22),
          j
            .setFromEuler(Z.set(a() * 0.3, 0, Math.PI / 2 + (a() - 0.5) * 0.4))
            .premultiply(O.setFromAxisAngle(tt.set(1, 0, 0), a() * 6.28))
            .toArray(b, Y * 4));
        const D0 = a(),
          ee =
            D0 < 0.6
              ? 0.7 + a() * 0.8
              : D0 < 0.92
                ? 1.5 + a() * 0.9
                : 2.4 + a() * 0.8;
        ((P[it] = ee * (0.7 + a() * 0.6)),
          (P[it + 1] = 1),
          (P[it + 2] = ee * (0.7 + a() * 0.6)),
          (_[Y] = ua * 0.75 * Lt + a() * 0.03),
          (I[Y] = 0),
          (R[Y] = 0),
          (K[Y] = a() < 0.3 ? 4.5 + a() * 2.5 : 1.6 + a() * 1.2),
          J.setFromEuler(
            Z.set((a() - 0.5) * 0.3, a() * 6.28, (a() - 0.5) * 0.3),
          ).toArray(V, Y * 4),
          (L[Y] = 0));
      }
    },
    F = (Y) => {
      if (W.t < 0) return;
      W.t += Math.min(Y, 0.05);
      const et = W.t;
      if (
        ((W.state = Math.min(1, et / ua)),
        (Vo.uSmash.value = W.state),
        (M.uOn.value = W.state),
        (M.uT.value = et),
        W.state >= 0.5 && g.on && (g.on = !1),
        !W.active)
      )
        return;
      const nt = Math.min(Y, 0.05);
      let it = et < 2.5;
      Q(et);
      for (let lt = rs; lt < k0; lt++) {
        const ht = lt * 3,
          yt = lt * 4;
        if (I[lt] !== 3) {
          if (I[lt] === 0) {
            if (et < _[lt]) {
              it = !0;
              continue;
            }
            I[lt] = 1;
          }
          if (((it = !0), j.fromArray(b, yt), I[lt] === 1)) {
            ((S[ht + 1] -= Ur * nt),
              (k[ht] += S[ht] * nt),
              (k[ht + 1] += S[ht + 1] * nt),
              (k[ht + 2] += S[ht + 2] * nt),
              O.setFromAxisAngle(
                U.set(A[yt], A[yt + 1], A[yt + 2]),
                A[yt + 3] * nt,
              ),
              j.premultiply(O));
            const Ft = 0.004 + 0.012 * Math.min(1, P[ht] / 3);
            k[ht + 1] < Ft &&
              ((k[ht + 1] = Ft),
              S[ht + 1] < -0.9 && R[lt] < 2
                ? ((S[ht + 1] = -S[ht + 1] * (0.22 + 0.16 * a())),
                  (S[ht] *= 0.5),
                  (S[ht + 2] *= 0.5),
                  (A[yt + 3] *= 0.55),
                  R[lt]++,
                  W.rained ||
                    ((W.rained = !0),
                    s.audio?.play?.("glass_shards_rain", {
                      pos: [k[ht], 0.2, k[ht + 2]],
                      vol: 1.5,
                      reverb: 0.5,
                      ref: 7,
                      rolloff: 0.7,
                    })))
                : ((I[lt] = 2), (S[ht + 1] = 0)));
          } else {
            const Ft = Math.exp(-7 * nt);
            ((S[ht] *= Ft),
              (S[ht + 2] *= Ft),
              (k[ht] += S[ht] * nt),
              (k[ht + 2] += S[ht + 2] * nt),
              (k[ht + 1] += (0.008 - k[ht + 1]) * Math.min(1, nt * 12)),
              (L[lt] = Math.min(1, L[lt] + nt * 7)),
              J.fromArray(V, yt),
              j.slerp(J, L[lt]),
              L[lt] >= 1 &&
                Math.hypot(S[ht], S[ht + 2]) < 0.03 &&
                ((I[lt] = 3), j.copy(J), (k[ht + 1] = 0.008)));
          }
          (j.toArray(b, yt),
            c(
              lt,
              I[lt] === 3
                ? 1
                : 1 +
                    (K[lt] - 1) *
                      (1 - L[lt]) *
                      Math.exp(-Math.max(0, et - _[lt]) / 0.7),
            ),
            q.compose(
              st.set(k[ht], k[ht + 1], k[ht + 2]),
              j,
              G.set(P[ht], P[ht + 1], P[ht + 2]),
            ),
            z.setMatrixAt(lt, q));
        }
      }
      ((z.instanceMatrix.needsUpdate = !0),
        (z.instanceColor.needsUpdate = !0),
        it || (W.active = !1));
    };
  return {
    api: {
      sill: i,
      land: d,
      out: y,
      face: p,
      top: w,
      z0: e.z0,
      z1: e.z1,
      zc: e.zc,
      collider: g,
      get state() {
        return W.state;
      },
      get since() {
        return W.t;
      },
      smash() {
        return W.t >= 0
          ? !1
          : ((W.t = 0),
            (W.state = 0),
            (W.active = !0),
            (W.rained = !1),
            (a = fa(r)),
            B(),
            (z.count = k0),
            Q(0),
            s.audio?.play?.("church_window_smash", {
              pos: [e.xg + 0.4, e.sill + 1.2, e.zm],
              vol: 2.3,
              reverb: 0.65,
              ref: 10,
              rolloff: 0.6,
            }),
            s.game?.fx?.dust?.(
              { x: e.xg + 0.6, y: e.sill + 0.4, z: e.zm },
              0.9,
              1.1,
            ),
            s.game?.fx?.dust?.(
              { x: e.xg + 0.5, y: e.sill + 0.3, z: 2 * e.zc - e.zm },
              0.6,
              0.9,
            ),
            !0);
      },
      reset() {
        ((W.t = -1),
          (W.state = 0),
          (W.active = !1),
          (Vo.uSmash.value = 0),
          (M.uOn.value = 0),
          (z.count = 0),
          (g.on = W.ruins));
      },
      setWorld(Y) {
        ((W.ruins = Y === "ruins"), (g.on = W.ruins && W.state < 0.5));
      },
    },
    update: F,
    mesh: z,
    collider: g,
  };
}
const da = [
  "altar",
  "stepsW",
  "stepsM",
  "stepsE",
  "bankW",
  "bankE",
  "lamp",
  "lady",
  "joseph",
  "candW",
  "candE",
  "pierW44",
  "pierE44",
  "pierW49",
  "pierE49",
  "pierW54",
  "pierE54",
  "door",
  "pewsA",
  "pewsB",
  "pewsC",
  "scW44",
  "scE44",
  "scW49",
  "scE49",
  "scW54",
  "scE54",
  "pulpit",
  "back",
];
function Gr(s, { church: o, rng: t }) {
  const { mats: u } = s,
    e = new Kt();
  e.name = "church_in";
  const r = [],
    a = [],
    p = r0.back,
    i = (T, D = {}, N = {}) => wo(u.get(T, D), N),
    d = {
      stone: i("church_dressed"),
      rib: i("church_dressed", { color: "#e8e2d6" }),
      web: i("church_web"),
      floor: i("church_floor"),
      marble: i("church_dressed", { color: "#f2eee6", rough: 0.35 }),
      gilt: i("church_gilt"),
      brass: i("brass_aged"),
      iron: i("iron_black"),
      oak: i("wood_walnut", {
        color: "#b89c86",
        extra: { clearcoat: 0.06, clearcoatRoughness: 0.6 },
      }),
      linen: i("linen_stained", { color: "#f4efe4" }),
      velvet: i("velvet_red"),
      leather: i("leather_brown"),
      paint: i("wood_ebony", { color: "#6a5e58" }),
      paint2: wo(u.paint("#1a2c6a", { rough: 0.6 })),
      panel: i("church_panels"),
      runner: i("rug_runner", { color: "#d8d0c8" }),
      door: i("door_wood", { color: "#9a8474" }),
      wax: Cr(i("wax_candle", { color: "#efe4cc", rough: 0.55 })),
    };
  (Object.assign(d, {
    white: i("plaster_bare", { color: "#f0ebe0", rough: 0.7 }),
    blue: i("plaster_bare", { color: "#5876b8", rough: 0.6, side: p0 }),
    skin: i("plaster_bare", { color: "#f2d2bc", rough: 0.6 }),
    brownR: i("plaster_bare", { color: "#a87a52", side: p0 }),
    greenM: i("plaster_bare", { color: "#5a7a58" }),
    redM: i("plaster_bare", { color: "#a84838", side: p0 }),
    purple: i("wool_grey", { color: "#9a62c8" }),
    plaster: i("plaster_bare"),
    slate: i("concrete_grey", { color: "#5a5c62" }),
    canvas: i("linen_stained", { color: "#9a9468", side: p0 }),
    olive: i("wood_painted_white", { color: "#5e6a3e" }),
    paintW: wo(u.paint("#d8d4c8", { rough: 0.8 })),
    wool: i("wool_grey"),
    ash: i("ruin_ash"),
    char: i("ruin_char"),
    dry: i("ruin_char", { color: "#8a7050" }),
    banner: i("church_banner", { side: p0 }),
    shard: wo(
      new n0({
        color: new Xt(0.3, 0.3, 0.3),
        roughness: 0.05,
        metalness: 0.15,
      }),
    ),
  }),
    (d.banner.alphaTest = 0.5),
    (d.ledger = i("church_ledger")),
    (d.ledger.polygonOffset = !0),
    (d.ledger.polygonOffsetFactor = -2),
    (d.ledger.polygonOffsetUnits = -2),
    (d.tracery = d.rib));
  const y = new yn("church_in"),
    w = (T, D, N) => y.add(D, d[T], N),
    g = [],
    z = Object.fromEntries(da.map((T, D) => [T, D])),
    x = pr(w, t);
  r.push(...x.colliders);
  const v = vr(s, e, w, u, t),
    n = gr(w, g, t, z);
  r.push(...n.colliders);
  const l = Sr(s, e, w, d, g, t, z);
  r.push(...l.colliders);
  for (let T = 0; T < 12; T++)
    g.push({
      x: -2.6 + t() * 1,
      y: 0,
      z: 41.15 + t() * 0.35,
      h: 0.05 + t() * 0.2,
      r: 0.018 + t() * 0.015,
      lit: t() > 0.15,
      cl: z.door,
    });
  for (let T = 0; T < 9; T++)
    g.push({
      x: 1.7 + t() * 0.9,
      y: 0,
      z: 41.15 + t() * 0.3,
      h: 0.05 + t() * 0.2,
      r: 0.018 + t() * 0.015,
      lit: t() > 0.15,
      cl: z.door,
    });
  const f = Vr(s, e, w, d, g, t, z);
  r.push(...f.colliders);
  const h = Fr(e, d, w, g, z, t);
  ((h.api.audio = s.audio), r.push(...h.colliders));
  const c = Nr(e, d, t);
  (r.push(...c.colliders), y.flush(e));
  for (const T of e.children)
    T.isMesh && !v.meshes.includes(T) && (T.receiveShadow = !0);
  const M = qr(s, e, d, s.rng(40115));
  r.push(M.collider);
  const m = Tr(s, e, g, d, t, { gustFrom: [0, 1, 40.3] }),
    k = new dt(-0.3, 0.94, -0.12).normalize(),
    S = 0.018,
    A = [0.06, 0.012, 0.005],
    b = _r(s, e, {
      keyDir: k,
      rng: t,
      glows: [
        { x: 0, y: 1.1, z: 58.3, r: 2.4, c: [S * 1.6, S * 0.72, S * 0.24] },
        { x: 0, y: 2.2, z: 60.2, r: 1.8, c: [S, S * 0.45, S * 0.15] },
        { x: -2.6, y: 0.6, z: 57.5, r: 1.2, c: [S, S * 0.45, S * 0.15] },
        { x: 2.6, y: 0.6, z: 57.5, r: 1.2, c: [S, S * 0.45, S * 0.15] },
        {
          x: -2.35,
          y: 1.85,
          z: 56.35,
          r: 0.9,
          c: [S * 0.8, S * 0.36, S * 0.12],
        },
        {
          x: 2.35,
          y: 1.85,
          z: 56.35,
          r: 0.9,
          c: [S * 0.8, S * 0.36, S * 0.12],
        },
        { x: -4.95, y: 1.05, z: 59.75, r: 1.3, c: A },
        { x: 5.8, y: 0.95, z: 47.7, r: 1, c: A },
        { x: -2.1, y: 0.45, z: 41.5, r: 0.9, c: [S * 0.6, S * 0.27, S * 0.09] },
        { x: 1.95, y: 3, z: 59.5, r: 0.45, c: [0.16, 0.012, 0.006] },
      ],
      wisps: g
        .filter((T) => T.lit && T.cl === z.altar && T.h > 0.3)
        .map((T, D) => ({
          x: T.x,
          y: T.y + T.h + 0.03,
          z: T.z,
          h: 1.4 + (D % 3) * 0.6,
        })),
    }),
    P = da.map((T, D) => {
      const N = g.filter((E) => E.cl === D && E.lit);
      let H = 0,
        Q = 0,
        W = 0,
        B = 0;
      for (const E of N) {
        const Y = E.votive ? 0.45 : 1;
        ((H += E.x * Y),
          (Q += (E.y + E.h + 0.03) * Y),
          (W += E.z * Y),
          (B += Y));
      }
      B && ((H /= B), (Q /= B), (W /= B));
      const F = N.length && N.filter((E) => E.votive).length / N.length > 0.5;
      return (
        T === "altar" && ((W -= 0.9), (Q += 0.5)),
        {
          name: T,
          i: D,
          mem: N,
          x: H,
          y: Q + 0.3,
          z: W,
          cd: B,
          col:
            T === "lamp"
              ? [1, 0.06, 0.03]
              : F
                ? [1, 0.28, 0.1]
                : [1, 0.47, 0.17],
          ph: t() * 10,
        }
      );
    });
  for (const T of P) /^(steps|bank)/.test(T.name) && (T.gain = 0.75);
  const _ = {};
  P.forEach((T, D) => {
    _[T.name] = D;
  });
  const I = 0.36,
    R = [];
  let V = P.length;
  for (const T of v.lancets)
    (R.push({
      i: V,
      x: T.east ? pt.x1 - 0.5 : pt.x0 + 0.5,
      y: 6.2,
      z: T.zc,
      col: T.east ? [1, 0.45, 0.35] : [0.9, 0.35, 0.3],
      cd: 5,
      smash: !!T.smash,
    }),
      V++);
  const L = R.findIndex((T) => T.smash);
  (R.push({ i: V++, x: 0, y: 8.3, z: pt.z0 + 0.6, col: [1, 0.5, 0.4], cd: 7 }),
    R.push({
      i: V++,
      x: 0,
      y: 8.2,
      z: pt.z1 - 0.6,
      col: [0.45, 0.55, 1],
      cd: 6,
    }));
  const K = V++;
  for (const T of R) ca(T.i, T.x, T.y, T.z, T.cd, T.col, 7);
  ca(K, 0.3, 0.35, 52.4, 3, [0.55, 0.68, 1], 5.5);
  const j = {},
    O = (T, D, N, H, Q, W) => {
      const B = new No(Q, 0, W, 2);
      return (
        B.position.set(D, N, H),
        (B.name = "church_" + T),
        (B.castShadow = !1),
        e.add(B),
        B
      );
    },
    J = (T) => P[z[T]];
  ((j.altar = O("altar", 0, 2, 59.6, 16747068, 10)),
    (j.steps = O("steps", 0, 0.75, 58.2, 16745016, 7)),
    (j.lady = O("lady", J("lady").x, 1.3, J("lady").z - 0.4, 16734768, 6)),
    (j.cand = O("cand", -2.3, 1.95, 56.4, 16747068, 8)),
    (j.back = O("back", 4.75, 1.45, 60.4, 16747068, 7)),
    (j.joseph = O(
      "joseph",
      J("joseph").x - 0.35,
      1.15,
      J("joseph").z,
      16730662,
      5,
    )));
  const tt = o.inside;
  (tt.position.set(J("door").x, 1.1, J("door").z + 0.8), (tt.distance = 7));
  const st = {
      altar: [j.altar, 0.55],
      stepsM: [j.steps, 0.9],
      lady: [j.lady, 0.7],
      candW: [j.cand, 1.25],
      door: [tt, 0.8],
      back: [j.back, 0.85],
      joseph: [j.joseph, 0.9],
    },
    G = Lr(s, e, v, [
      {
        east: !0,
        zc: 46.5,
        target: [-1, 0, 43.4],
        intensity: 1100,
        angle: 0.25,
      },
      {
        east: !0,
        zc: 56.5,
        target: [-1.9, 0, 55.6],
        intensity: 1e3,
        angle: 0.24,
      },
    ]),
    q = { gain: 1 },
    U = (T, D) =>
      1 +
      0.06 * Math.sin(D * 9.1 + T.ph) * Math.sin(D * 5.3 + T.ph * 2) +
      0.05 * Math.sin(D * 17.3 + T.ph * 3) +
      0.04 * Math.sin(D * 2.1 + T.ph),
    Z = (T, D) => {
      const N = m.U.uGust.value,
        H = M.api.since,
        Q =
          H >= 0 && H < 3
            ? 6.5 * Math.exp(-H / 0.55) * Math.min(1, H / 0.03)
            : 0;
      for (const W of P) {
        let B = 0;
        for (const et of W.mem) B += (et.level ?? 1) * (et.votive ? 0.45 : 1);
        const F =
            U(W, D) *
            (1 - 0.55 * N * (0.6 + 0.4 * Math.sin(D * 23 + W.ph))) *
            q.gain,
          E = B * I * F * (W.gain ?? 1);
        (_0.pos[_[W.name]].set(W.x, W.y, W.z, E),
          _0.col[_[W.name]].set(
            W.col[0],
            W.col[1],
            W.col[2],
            Math.min(9, 2.6 + Math.sqrt(Math.max(E, 0)) * 0.75),
          ));
        const Y = st[W.name];
        Y &&
          (Y[0].intensity =
            E * Y[1] +
            (Y[0] === tt ? o.spill * 6 : 0) +
            (Y[0] === j.cand ? Q * 9 : 0));
      }
      for (const W of R)
        _0.pos[W.i].w = W.cd * (0.85 + 0.15 * Math.sin(D * 1.3 + W.i));
      {
        const W = R[L],
          B = M.api.state;
        (B > 0
          ? (_0.pos[W.i].set(
              pt.x0 + 0.15,
              4.4,
              M.api.zc + 0.2,
              W.cd *
                (1 +
                  0.5 *
                    B *
                    (0.85 + 0.15 * Math.sin(D * 6.1) * Math.sin(D * 2.3)) +
                  Q),
            ),
            _0.col[W.i].set(1, 0.5, 0.2, 8 + 3 * Math.min(1, Q)))
          : W.flared &&
            (_0.pos[W.i].set(W.x, W.y, W.z, _0.pos[W.i].w),
            _0.col[W.i].set(W.col[0], W.col[1], W.col[2], 7)),
          (W.flared = B > 0));
      }
    };
  _0.used = so;
  const ot = o.group.parent?.getObjectByName("ash"),
    $ = new dt();
  (a.push((T, D) => {
    if (!o.group.parent?.visible) return;
    ((v.U.uT.value = D),
      M.update(T),
      m.update(T, D),
      Z(T, D),
      b.update(T, D),
      s.game.camera.getWorldPosition($));
    const N =
      $.x > pt.x0 - 0.3 &&
      $.x < pt.x1 + 0.3 &&
      $.z > pt.z0 - 0.4 &&
      $.z < pt.z1 + 0.3 &&
      $.y < 11;
    if (ot) {
      const H = N ? "church" : Ve($.x, $.z);
      ot.visible = !N && H !== "yard" && H !== "forest" && H !== "house";
    }
    G.update(T, D, N);
  }),
    Z(0, 0),
    (o.onReset = () => {
      (m.reset(),
        (h.api.openK = 0),
        h.api.open(0),
        c.api.reset(),
        M.api.reset());
    }));
  const C = {
    post: {
      exposure: 1.28,
      bloom: 0.3,
      bloomThreshold: 1.4,
      vignette: 0.32,
      sat: 1.05,
      contrast: 1.04,
    },
    key: [10270463, 1.4],
    keyDir: k.clone(),
    fill: [3820134, 0],
    fillDir: new dt(0.2, 1, 0.1),
    hemi: [1977408, 5913126, 3.3],
    env: 0.05,
    fog: [723468, 0.02],
  };
  for (const T of r) T.on = !1;
  return {
    group: e,
    colliders: r,
    anim: a,
    look: C,
    points: {
      akaneHold: [0, 41.45, Math.PI],
      priest: [0, 57.3, 0],
      approach: [0, 52.6],
      reveal: [0.15, 55.9],
      backIn: [(p.x0 + p.x1) / 2, pt.z1 - 1.4],
      backOut: [(p.x0 + p.x1) / 2, r0.z1 + 1.2],
      flood: [
        [0, 42.6],
        [-4.3, 42.4],
        [4.6, 42.6],
        [0, 44.2],
        [-4.8, 45.6],
        [4.8, 45.6],
      ],
    },
    backDoor: h.api,
    barricade: c.api,
    window: M.api,
    candles: {
      gust: (T = 1) => {
        (m.gust(T),
          s.audio?.play?.("candle_gust", {
            pos: [0, 1.6, 44],
            vol: 0.55 + 0.35 * T,
          }));
      },
      reset: () => m.reset(),
      count: g.length,
      lit: m.lit.length,
    },
    lights: { ...j, inside: tt },
    setWorld(T) {
      for (const D of r)
        D.on = T === "ruins" && (D !== h.api.collider || h.api.openK < 0.3);
      M.api.setWorld(T);
    },
    warmUp() {},
  };
}
const Zo = (s, o) => {
  let t = (Math.imul(s, 374761393) + Math.imul(o, 668265263)) | 0;
  return (
    (t = Math.imul(t ^ (t >>> 13), 1274126177)),
    ((t ^ (t >>> 16)) >>> 0) / 4294967296
  );
};
function It(s, o) {
  const t = Math.floor(s),
    u = Math.floor(o);
  let e = s - t,
    r = o - u;
  ((e = e * e * (3 - 2 * e)), (r = r * r * (3 - 2 * r)));
  const a = Zo(t, u),
    p = Zo(t + 1, u),
    i = Zo(t, u + 1),
    d = Zo(t + 1, u + 1);
  return (a + (p - a) * e + (i - a) * r + (a - p - i + d) * e * r) * 2 - 1;
}
const $t = (s, o, t) => {
    const u = Math.max(0, Math.min(1, (t - s) / (o - s)));
    return u * u * (3 - 2 * u);
  },
  Ps = (s, o, t) => {
    const u = Math.max(t - Math.abs(s - o), 0) / t;
    return Math.min(s, o) - u * u * t * 0.25;
  },
  fe = (s, o, t, u, e, r) => {
    const a = e - t,
      p = r - u,
      i = a * a + p * p,
      d = i > 0 ? Math.max(0, Math.min(1, ((s - t) * a + (o - u) * p) / i)) : 0;
    return Math.hypot(s - t - a * d, o - u - p * d);
  },
  Hr = (s) => () => {
    s = (s + 1831565813) | 0;
    let o = Math.imul(s ^ (s >>> 15), 1 | s);
    return (
      (o = (o + Math.imul(o ^ (o >>> 7), 61 | o)) ^ o),
      ((o ^ (o >>> 14)) >>> 0) / 4294967296
    );
  },
  c0 = (s) => +s.toFixed(2);
function Gs(s, o, t = 0, u = null) {
  const e = [];
  for (let v = 0; v < s.length - 1; v++) {
    const n = s[Math.max(0, v - 1)],
      l = s[v],
      f = s[v + 1],
      h = s[Math.min(s.length - 1, v + 2)],
      c = Math.max(4, Math.ceil(Math.hypot(f[0] - l[0], f[1] - l[1]) / 0.05));
    for (let M = 0; M < c; M++) {
      const m = M / c,
        k = m * m,
        S = k * m,
        A = (b, P, _, I) =>
          0.5 *
          (2 * P +
            (-b + _) * m +
            (2 * b - 5 * P + 4 * _ - I) * k +
            (-b + 3 * P - 3 * _ + I) * S);
      e.push([A(n[0], l[0], f[0], h[0]), A(n[1], l[1], f[1], h[1])]);
    }
  }
  e.push(s[s.length - 1]);
  const r = (v, n) => {
    const l = [0];
    for (let m = 1; m < v.length; m++)
      l.push(
        l[m - 1] + Math.hypot(v[m][0] - v[m - 1][0], v[m][1] - v[m - 1][1]),
      );
    const f = l[l.length - 1],
      h = Math.ceil(f / n) + 1,
      c = [];
    let M = 0;
    for (let m = 0; m < h; m++) {
      const k = Math.min(f, m * n);
      for (; M < l.length - 2 && l[M + 1] < k;) M++;
      const S = l[M + 1] > l[M] ? (k - l[M]) / (l[M + 1] - l[M]) : 0;
      c.push([
        v[M][0] + (v[M + 1][0] - v[M][0]) * S,
        v[M][1] + (v[M + 1][1] - v[M][1]) * S,
        k,
      ]);
    }
    return { out: c, len: f };
  };
  let a = r(e, 0.25).out;
  if (t) {
    const v = a.map((f) => (u ? u(f[0], f[1]) : 1)),
      n = a.map((f) => [f[0], f[1]]),
      l = n.map((f) => f.slice());
    for (let f = 0; f < t; f++) {
      for (let h = 1; h < n.length - 1; h++) {
        const c = 0.5 * v[h];
        ((l[h][0] = n[h][0] + c * ((n[h - 1][0] + n[h + 1][0]) / 2 - n[h][0])),
          (l[h][1] =
            n[h][1] + c * ((n[h - 1][1] + n[h + 1][1]) / 2 - n[h][1])));
      }
      for (let h = 1; h < n.length - 1; h++)
        ((n[h][0] = l[h][0]), (n[h][1] = l[h][1]));
    }
    a = n;
  }
  const { out: p, len: i } = r(a, o),
    d = p.length,
    y = new Float32Array(d),
    w = new Float32Array(d),
    g = new Float32Array(d),
    z = new Float32Array(d),
    x = new Float32Array(d);
  p.forEach((v, n) => {
    ((y[n] = v[0]), (w[n] = v[1]), (g[n] = v[2]));
  });
  for (let v = 0; v < d; v++) {
    const n = Math.max(0, v - 1),
      l = Math.min(d - 1, v + 1),
      f = y[l] - y[n],
      h = w[l] - w[n],
      c = Math.hypot(f, h) || 1;
    ((z[v] = f / c), (x[v] = h / c));
  }
  return { x: y, z: w, s: g, tx: z, tz: x, n: d, len: i };
}
const U0 = { x: 2, z: 77, x0: 0.85, x1: 3.15 },
  St = { z: 77, t: 0.55, h: 1.45, xW: -8.75, xE: 8.75 },
  ie = { x: -6.1, z: 69.4 },
  b0 = { x: -3.3, z: 73.3, yaw: 2.55 },
  le = [
    [4.25, 62.2],
    [4.15, 65.4],
    [3.55, 69.2],
    [2.7, 73.2],
    [2, 77.2],
  ],
  Y0 = { x: 2.15, z: 69.7, yaw: Math.atan2(U0.x - 2.15, U0.z + 0.5 - 69.7) };
function Or(s, o, t, u = 4) {
  let e = s[0],
    r = s[1],
    a = (o * Math.PI) / 180;
  const p = [{ x: e, z: r, k: -1 }];
  return (
    t.forEach((i, d) => {
      if (i[0] === "F" || i[0] === "Z") {
        const y = i[0] === "Z" ? (i[1] - r) / Math.cos(a) : i[1],
          w = Math.max(1, Math.round(y / u));
        for (let g = 1; g <= w; g++)
          p.push({
            x: e + (Math.sin(a) * y * g) / w,
            z: r + (Math.cos(a) * y * g) / w,
            k: d,
            t: g / w,
          });
        ((e += Math.sin(a) * y), (r += Math.cos(a) * y));
      } else {
        const y = i[1],
          w = (i[2] * Math.PI) / 180,
          g = Math.sign(w),
          z = e + Math.cos(a) * y * g,
          x = r - Math.sin(a) * y * g,
          v = Math.atan2(e - z, r - x),
          n = Math.max(2, Math.round((Math.abs(w) * y) / u));
        for (let l = 1; l <= n; l++) {
          const f = v + (w * l) / n;
          p.push({
            x: z + Math.sin(f) * y,
            z: x + Math.cos(f) * y,
            k: d,
            t: l / n,
          });
        }
        ((e = p[p.length - 1].x), (r = p[p.length - 1].z), (a += w));
      }
    }),
    p
  );
}
const q0 = { th: 45, r0: 12, r: 10.5, rb: 13, L1: 42, L3: 54, bow: 1.8 },
  jr = (() => {
    const s = (q0.th * Math.PI) / 180,
      o = Math.cos(s),
      t = Math.sin(s),
      u = q0.L1 + q0.L3 - (0.5 + 4 * q0.r * o - (q0.r0 + q0.rb) * (1 - o)) / t,
      e = Or([2, 74], 0, [
        ["F", 6.5],
        ["T", q0.r0, q0.th],
        ["F", q0.L1],
        ["T", q0.r, -180],
        ["F", u],
        ["T", q0.r, 180],
        ["F", q0.L3],
        ["T", q0.rb, -45],
        ["Z", 157],
      ]);
    for (const r of e)
      if (r.k === 2) {
        const a = q0.bow * Math.sin(Math.PI * r.t);
        ((r.x += o * a), (r.z -= t * a));
      }
    return [
      ...e.filter((r) => r.z < 156).map((r) => [r.x, r.z]),
      [2.5, 157],
      [2.5, 161],
      [2.5, 162.4],
      [2.5, 169.8],
      [2.5, 171.2],
      [2.5, 174.6],
      [1.6, 178.8],
      [-0.6, 183.2],
      [-1.6, 187.6],
      [-0.4, 191.8],
      [2.6, 195.6],
      [6, 198.7],
    ];
  })(),
  Tt = { x: 2.5, z0: 161.1, z1: 171.3 },
  Yr = [
    [-78, 172],
    [-58, 173],
    [-44, 170.8],
    [-31, 168.2],
    [-20, 169.6],
    [-9, 166.5],
    [2.5, 166.2],
    [13, 164.4],
    [24.5, 166.8],
    [36, 163.6],
    [48, 165.6],
    [62, 163.2],
    [80, 164.5],
  ],
  we = { bed: 1.3, rim: 4.35, depth: 2.35, water: -1.95 },
  R0 = { x: 6.2, z: 198.2, rx: 13.2, rz: 12.4 },
  Ee = (s, o) => {
    const t = Math.atan2(o - R0.z, s - R0.x),
      u = 1 + 0.07 * Math.sin(t * 3 + 0.6) + 0.05 * Math.sin(t * 5 + 2.1),
      e = (s - R0.x) / (R0.rx * u),
      r = (o - R0.z) / (R0.rz * u);
    return (Math.hypot(e, r) - 1) * Math.min(R0.rx, R0.rz);
  },
  Ns = (s, o) => {
    const t = Math.max(_t.x0 - s, s - _t.x1),
      u = Math.max(_t.z0 - o, o - _t.z1);
    return t > 0 && u > 0 ? Math.hypot(t, u) : Math.max(t, u);
  },
  Xr = (s, o) => {
    const t = Math.max(0, Math.min(1, (o - 79.6) / 5)),
      u =
        Math.abs(s - Tt.x) < 0.6 && o > 150 && o < 180
          ? Math.max(0, Math.min(1, Math.max(157.2 - o, o - 173.6) / 5))
          : 1;
    return Math.min(t, u);
  },
  L0 = Gs(jr, 0.25, 300, Xr),
  ps = Gs(Yr, 0.5),
  $r = (s, o) => {
    let t = 0,
      u = 1e9;
    for (let e = 0; e < L0.n; e++) {
      const r = (L0.x[e] - s) ** 2 + (L0.z[e] - o) ** 2;
      r < u && ((u = r), (t = e));
    }
    return t;
  },
  cs = (s, o) => L0.s[$r(s, o)],
  C0 = {
    gate: cs(U0.x, U0.z),
    bridgeN: cs(Tt.x, Tt.z0),
    bridgeS: cs(Tt.x, Tt.z1),
    end: L0.len,
  },
  O0 = (s) => {
    const o = Math.max(0, Math.min(L0.n - 1, Math.round(s / 0.25)));
    return { x: L0.x[o], z: L0.z[o], tx: L0.tx[o], tz: L0.tz[o], s: L0.s[o] };
  },
  Oe = (s) => 2.45 + 0.3 * It(s / 13 + 4.2, 1.7),
  Va = (s, o) => {
    const t = new Map();
    for (let u = 0; u < s.n; u += o) {
      const e = Math.floor(s.x[u] / 4) + "," + Math.floor(s.z[u] / 4);
      (t.has(e) || t.set(e, []), t.get(e).push(u));
    }
    return t;
  },
  Zr = Va(L0, 2),
  yo = (s, o, t = 1e9, u = -1e9, e = 16) => {
    let r = e * e;
    const a = Math.ceil(e / 4),
      p = Math.floor(s / 4),
      i = Math.floor(o / 4);
    for (let d = p - a; d <= p + a; d++)
      for (let y = i - a; y <= i + a; y++)
        for (const w of Zr.get(d + "," + y) || []) {
          const g = L0.s[w];
          if (g > t && g < u) continue;
          const z = (L0.x[w] - s) ** 2 + (L0.z[w] - o) ** 2;
          z < r && (r = z);
        }
    return Math.sqrt(r);
  },
  Jr = Va(ps, 1),
  Ls = (s, o, t = 12) => {
    let u = t * t;
    const e = Math.ceil(t / 4),
      r = Math.floor(s / 4),
      a = Math.floor(o / 4);
    for (let p = r - e; p <= r + e; p++)
      for (let i = a - e; i <= a + e; i++)
        for (const d of Jr.get(p + "," + i) || []) {
          const y = (ps.x[d] - s) ** 2 + (ps.z[d] - o) ** 2;
          y < u && (u = y);
        }
    return Math.sqrt(u);
  },
  pa = (s) => {
    const o = O0(s - 4),
      t = O0(s + 4),
      u = O0(s),
      e = (t.tx - o.tx) * u.tz - (t.tz - o.tz) * u.tx;
    return Math.abs(e) < 0.05 ? 0 : e > 0 ? 1 : -1;
  },
  Ko = (s, o) => [s.tz * o, -s.tx * o],
  Jo = [
    [40, 120],
    [120, 220],
  ].map(([s, o]) => {
    let t = s,
      u = 9;
    for (let e = s; e <= o; e += 0.5) {
      const r = O0(e),
        a = Math.hypot(r.tx + Math.SQRT1_2, r.tz - Math.SQRT1_2);
      a < u && ((u = a), (t = e));
    }
    return t;
  }),
  Nt = {
    tree: {
      s: 132,
      gap: 1,
      keep: [-24, 16],
      bay: { u0: -6.5, u1: 5.5, ramp: 4.5, room: 3.45 },
    },
    cart: {
      s: 199,
      gap: -1,
      keep: [-22, 14],
      bay: { u0: -4.5, u1: 4, ramp: 4.5, room: 3.45 },
    },
    log: { s: 228, keep: [-7, 7], ang: 76, r: 0.2, len: 9.2 },
  };
for (const s in Nt) {
  const o = Nt[s],
    t = O0(o.s);
  Object.assign(o, {
    name: s,
    x: t.x,
    z: t.z,
    ux: t.tx,
    uz: t.tz,
    vx: t.tz,
    vz: -t.tx,
    hw: Oe(o.s),
  });
}
Nt.tree.plate = { u: 1.6, v: -(Nt.tree.hw + 1.85), r: 1.95 };
Nt.tree.tip = { u: -0.5, v: 0.05 };
const He = (s, o, t) => [s.x + s.ux * o + s.vx * t, s.z + s.uz * o + s.vz * t],
  ze = (s, o, t) => {
    const u = o - s.x,
      e = t - s.z;
    return [u * s.ux + e * s.uz, u * s.vx + e * s.vz];
  },
  ms = (s, o = 0) => {
    for (const t in Nt) {
      const u = Nt[t];
      if (s > u.s + u.keep[0] - o && s < u.s + u.keep[1] + o) return !0;
    }
    return !1;
  },
  Ds = (s, o, t = 0) => {
    const u = Nt.tree,
      [e, r] = ze(u, s, o);
    if (
      Math.abs(e) < 14 &&
      Math.abs(r) < 12 &&
      (Math.hypot(e - u.plate.u, r - u.plate.v) < 2.4 + t ||
        Math.hypot(e - u.tip.u, r - u.tip.v) < 2.9 + t ||
        fe(e, r, u.plate.u, u.plate.v, u.tip.u, u.tip.v) < 1.1 + t)
    )
      return !0;
    const a = Nt.cart,
      [p, i] = ze(a, s, o),
      d = -a.gap;
    if (
      Math.abs(p) < 10 &&
      Math.abs(i) < 10 &&
      (Math.hypot(p, i - 1.9 * d) < 1.9 + t ||
        Math.hypot(p + 1.7, i - 1.6 * d) < 1.9 + t)
    )
      return !0;
    const y = Nt.log,
      [w, g] = ze(y, s, o),
      z = (y.ang * Math.PI) / 180;
    return (
      Math.abs(w) < 8 &&
      Math.abs(g) < 8 &&
      fe(
        w,
        g,
        -Math.cos(z) * 4.6,
        -Math.sin(z) * 4.6,
        Math.cos(z) * 5.4 + 1.4,
        Math.sin(z) * 5.4,
      ) <
        0.7 + t
    );
  },
  Qr = (s, o) => {
    let t = 9;
    for (const u of [Nt.tree, Nt.cart]) {
      const [e, r] = ze(u, s, o),
        a = u.bay;
      if (e < a.u0 - a.ramp - 1 || e > a.u1 + a.ramp + 1 || r * u.gap < 0)
        continue;
      const p = $t(a.u0 - a.ramp, a.u0, e) * $t(a.u1 + a.ramp, a.u1, e);
      t = Math.min(t, Math.abs(r) - (u.hw + (0.65 + a.room - u.hw) * p));
    }
    return t;
  },
  Ts = (s, o, t, u, e) => {
    const r = O0(o),
      a = Ko(r, t);
    return {
      name: s,
      x: c0(r.x + a[0] * u),
      z: c0(r.z + a[1] * u),
      r: e,
      s: o,
    };
  },
  de = [
    Ts("lookBack", 27, 1, 1.3, 3.1),
    Ts("e1", Jo[0], pa(Jo[0]), 1.5, 3.7),
    Ts("e2", Jo[1], pa(Jo[1]), 1.7, 4.1),
    { name: "bridgeN", x: 0.2, z: 159.3, r: 3.3, s: C0.bridgeN - 2 },
    { name: "bridgeS", x: 1, z: 173.5, r: 3, s: C0.bridgeS + 2 },
  ],
  Bs = (s, o) => {
    let t = 1e9;
    for (const u of de) t = Math.min(t, Math.hypot(s - u.x, o - u.z) - u.r);
    return t;
  },
  Ka = {
    e3a: [
      [-16.95, 162.37],
      [-8.6, 161.2],
      [-3.8, 160.4],
    ],
    e3b: [
      [14.6, 158.8],
      [9, 159.2],
      [4.6, 159.9],
    ],
    e3c: [
      [-11.39, 174.57],
      [-4.2, 173.9],
      [-1.2, 173.6],
    ],
    e3d: [
      [13.6, 172.6],
      [8.6, 173.2],
      [4.2, 173.6],
    ],
    e3e: [
      [16, 175.4],
      [13.6, 172.6],
    ],
    c1: [
      [-11.13, 195.02],
      [-7.95, 198.2],
      [-5.2, 198.2],
    ],
    c2: [
      [16.2, 185.1],
      [14.23, 187.04],
      [11.85, 188.41],
    ],
    c3: [
      [-10.95, 203.59],
      [-7.46, 206.42],
      [-4.72, 206.14],
    ],
    c4: [
      [23.94, 195.09],
      [20.78, 192.8],
      [16.98, 193.4],
    ],
    c5: [
      [23.64, 203.91],
      [22.56, 199.85],
      [19.7, 198.2],
    ],
    c6: [
      [18.62, 209.99],
      [19.33, 205.55],
      [17.71, 203.32],
    ],
  },
  tc = [
    [13.5, "R", 2.2, 0.95],
    [24, "L", 2.6, 0.9],
    [35, "R", 1.8, 1.05],
    [46, "L", 2.4, 0.95],
    [55.5, "R", 2.2, 0.9],
    [68, "R", 1.7, 1.1],
    [79, "R", 2, 0.95],
    [88, "R", 2.2, 0.9],
    [93, "L", 2.8, 1],
    [101, "R", 1.6, 1.12],
    [104, "L", 2.4, 0.95],
    [150, "R", 2.4, 1],
    [151, "L", 2.3, 0.95],
    [162, "L", 2, 1],
    [170, "L", 1.8, 0.9],
    [215, "R", 1.9, 1.05],
    [237, "R", 2.5, 0.95],
    [244, "L", 2, 1],
    [252, "R", 1.8, 1.1],
    [276, "L", 2.2, 0.9],
    [284, "R", 2, 1],
  ],
  ec = (s, o, t) => {
    const u = t * 0.9;
    return [
      {
        x0: s - 0.92 * u,
        x1: s + 0.92 * u,
        z0: o - 0.38 * u,
        z1: o + 0.38 * u,
      },
      {
        x0: s - 0.38 * u,
        x1: s + 0.38 * u,
        z0: o - 0.92 * u,
        z1: o + 0.92 * u,
      },
    ];
  },
  oc = (s, o, t) => {
    const u = [o[0] - s[0], o[1] - s[1], o[2] - s[2]],
      e = Math.hypot(...u),
      r = (e - 0.35) / e;
    for (const a of t) {
      let p = 0,
        i = r,
        d = !0;
      for (const [y, w, g] of [
        [a.x0, a.x1, 0],
        [0, 3, 1],
        [a.z0, a.z1, 2],
      ]) {
        if (Math.abs(u[g]) < 1e-9) {
          if (s[g] < y || s[g] > w) {
            d = !1;
            break;
          }
          continue;
        }
        let z = (y - s[g]) / u[g],
          x = (w - s[g]) / u[g];
        if (
          (z > x && ([z, x] = [x, z]),
          (p = Math.max(p, z)),
          (i = Math.min(i, x)),
          p > i)
        ) {
          d = !1;
          break;
        }
      }
      if (d) return !0;
    }
    return !1;
  },
  sc = (s, o, t, u) => {
    for (let e = 8; e <= 25; e += 1) {
      const r = O0(s - e);
      for (const a of [-1, 0, 1]) {
        const p = [r.x + r.tz * a, 1.62, r.z - r.tx * a];
        for (const i of [0.45, 1.15, 1.7]) if (!oc(p, [o, i, t], u)) return !1;
      }
    }
    return !0;
  },
  Hs = {},
  je = [];
for (const [s, o, t, u] of tc) {
  const e = o === "L" ? 1 : -1;
  let r = null;
  for (const h of [0, 1, -1, 2, -2, 3])
    for (const c of [0, 0.5, -0.3, 1]) {
      if (r) break;
      const M = s + h,
        m = O0(M),
        k = Ko(m, e),
        S = Oe(M) + t + c + u;
      if (ms(M) || ms(Math.min(C0.end - 6, M + 4.2))) continue;
      const A = m.x + k[0] * S,
        b = m.z + k[1] * S,
        P = ec(A, b, u);
      if (
        Bs(A, b) < u + 1.2 ||
        Ee(A, b) < u + 2 ||
        Ls(A, b) < we.rim + u + 0.8 ||
        Ds(A, b, u + 1.5)
      )
        continue;
      let _ = 0,
        I = 0;
      for (let V = 8; V <= 25; V += 1) {
        const L = O0(M - V),
          K = Math.hypot(A - L.x, b - L.z);
        ((_ += (A - L.x) / K), (I += (b - L.z) / K));
      }
      const R = Math.hypot(_, I);
      ((_ /= R), (I /= R));
      for (const V of [0, 0.15, -0.15, 0.3, -0.3])
        for (const L of [1.15, 1.3, 1, 1.5]) {
          const K = Math.cos(V),
            j = Math.sin(V),
            O = _ * K - I * j,
            J = _ * j + I * K,
            tt = A + O * (u * 1.12 + L * 0.85),
            st = b + J * (u * 1.12 + L * 0.85);
          if (
            !(
              yo(tt, st) < Oe(M) + 0.6 ||
              yo(tt, st, M - 30, M + 30) < 12 ||
              Ls(tt, st) < we.rim + 1.2
            ) &&
            !(Math.abs(tt) > 43.4 || Ee(tt, st) < 1.5 || Bs(tt, st) < 0.8) &&
            sc(M, tt, st, P)
          ) {
            r = { s: M, x: A, z: b, sx: tt, sz: st, boxes: P };
            break;
          }
        }
    }
  if (!r) continue;
  const { s: a, x: p, z: i, sx: d, sz: y } = r,
    w = "g" + String(Math.round(a)).padStart(3, "0") + o,
    g = Math.min(C0.end - 6, a + 4.2),
    z = O0(g),
    x = Ko(z, e),
    v = Oe(g),
    n = [z.x + x[0] * (v - 0.9), z.z + x[1] * (v - 0.9)],
    l = u * 1.12 + 0.75;
  let f = [d + (n[0] - d) * 0.3, y + (n[1] - y) * 0.3];
  {
    const h = Math.hypot(f[0] - p, f[1] - i);
    h < l && (f = [p + ((f[0] - p) / h) * l, i + ((f[1] - i) / h) * l]);
  }
  ((Hs[w] = [
    [c0(d), c0(y)],
    [c0(f[0]), c0(f[1])],
    [c0(n[0]), c0(n[1])],
  ]),
    je.push({ name: w, s: +a.toFixed(1), side: o, x: c0(p), z: c0(i), r: u }));
}
const ys = {};
{
  const s = Nt.tree,
    o = [s.plate.u, s.plate.v],
    t = [s.tip.u, s.tip.v],
    u = Math.hypot(t[0] - o[0], t[1] - o[1]),
    e = [(t[0] - o[0]) / u, (t[1] - o[1]) / u],
    r = [e[1], -e[0]],
    a = [o[0] + r[0] * s.plate.r, o[1] + r[1] * s.plate.r],
    p = [o[0] - e[0] * 1.3, o[1] - e[1] * 1.3],
    i = [a[0] + r[0] * 0.6 - e[0] * 1.6, a[1] + r[1] * 0.6 - e[1] * 1.6],
    d = [o[0] + 3.6, -(s.hw - 0.9)];
  ys.gRoot = [p, i, d].map(([y, w]) => He(s, y, w).map(c0));
}
const is = {};
{
  const s = Hr(20261001),
    o = [];
  for (const p of [
    ...Object.values(Ka),
    ...Object.values(Hs),
    ...Object.values(ys),
  ])
    for (let i = 0; i < p.length - 1; i++)
      o.push([p[i][0], p[i][1], p[i + 1][0], p[i + 1][1]]);
  const t = (p, i, d) => {
      for (const y of o) if (fe(p, i, y[0], y[1], y[2], y[3]) < d) return !0;
      return !1;
    },
    u = Object.values(Nt),
    e = (p, i) => {
      for (let d = 0; d < p.length - 1; d++) {
        const [y, w] = p[d],
          [g, z] = p[d + 1],
          x = Math.hypot(g - y, z - w),
          v = Math.ceil(x / 0.5);
        for (let n = 0; n <= v; n++) {
          const l = y + ((g - y) * n) / v,
            f = w + ((z - w) * n) / v,
            h =
              (d === 0 ? 0 : Math.hypot(p[1][0] - p[0][0], p[1][1] - p[0][1])) +
              (x * n) / v;
          if (
            Math.abs(l) > 43.6 ||
            f < St.z + 2.5 ||
            f > 211 ||
            Ls(l, f) < we.rim + 1.9 ||
            Ns(l, f) < 3 ||
            Ee(l, f) < 1.2 ||
            (h > 2.5 && yo(l, f) < Oe(i) + 1.3) ||
            yo(l, f, i - 24, i + 24) < 10 ||
            (h > 1.5 && (t(l, f, 3.2) || Bs(l, f) < 1.5))
          )
            return !1;
          for (const c of je)
            if (Math.hypot(l - c.x, f - c.z) < c.r * 1.12 + 1.7) return !1;
          for (const c of u) if (Math.hypot(l - c.x, f - c.z) < 9.5) return !1;
        }
      }
      return !0;
    },
    r = (p, i) => {
      for (let d = 0; d < 70; d++) {
        const y = p + (s() - 0.5) * 7,
          w = O0(y),
          g = Ko(w, i),
          z = Oe(y);
        if (
          y < C0.gate + 8 ||
          y > C0.end - 8 ||
          (y > C0.bridgeN - 9 && y < C0.bridgeS + 4) ||
          ms(y)
        )
          continue;
        const x = [w.x + g[0] * (z - 0.4), w.z + g[1] * (z - 0.4)],
          v = (s() - 0.5) * 1.5,
          n = Math.cos(v),
          l = Math.sin(v),
          f = [g[0] * n + w.tx * l, g[1] * n + w.tz * l],
          h = 4.5 + s() * 3,
          c = [x[0] + f[0] * h, x[1] + f[1] * h],
          M = (s() < 0.5 ? -1 : 1) * (1.1 + s() * 0.75),
          m = Math.cos(M),
          k = Math.sin(M),
          S = [f[0] * m - f[1] * k, f[0] * k + f[1] * m],
          A = 5 + s() * 4,
          b = [c[0] + S[0] * A, c[1] + S[1] * A];
        if (
          !(h + A < 10 || h + A > 16 || yo(b[0], b[1]) < 9) &&
          e([x, c, b], y)
        )
          return { pts: [b, c, x], s: y };
      }
      for (const d of [8.4, 7.6, 9])
        for (const y of [0, 0.22, -0.22])
          for (const w of [Math.PI / 2, -Math.PI / 2, 1.3, -1.3])
            for (const g of [6.5, 5.2]) {
              const z = O0(p),
                x = Ko(z, i),
                v = Oe(p),
                n = [z.x + x[0] * (v - 0.4), z.z + x[1] * (v - 0.4)];
              if (
                p < C0.gate + 8 ||
                p > C0.end - 8 ||
                (p > C0.bridgeN - 9 && p < C0.bridgeS + 4) ||
                ms(p)
              )
                return null;
              const l = Math.cos(y),
                f = Math.sin(y),
                h = [x[0] * l + z.tx * f, x[1] * l + z.tz * f],
                c = [n[0] + h[0] * d, n[1] + h[1] * d],
                M = Math.cos(w),
                m = Math.sin(w),
                k = [h[0] * M - h[1] * m, h[0] * m + h[1] * M],
                S = [c[0] + k[0] * g, c[1] + k[1] * g];
              if (
                !(d + g < 10 || d + g > 16 || yo(S[0], S[1]) < 9) &&
                e([n, c, S], p)
              )
                return { pts: [S, c, n], s: p };
            }
      return null;
    },
    a = [];
  for (const [p, i] of [
    [1, C0.gate + 13],
    [-1, C0.gate + 21.5],
  ])
    for (let d = i; d < C0.end - 8; d += 16.5 + s() * 3) a.push([d, p]);
  a.sort((p, i) => p[0] - i[0]);
  for (const [p, i] of a) {
    const d = r(p, i) || r(p + 6, i) || r(p - 6, i);
    if (!d) continue;
    const y = O0(d.s),
      w = d.pts[2],
      g = (w[0] - y.x) * y.tz - (w[1] - y.z) * y.tx > 0 ? "L" : "R";
    let z = "t" + String(Math.round(d.s)).padStart(3, "0") + g;
    (is[z] && (z += "b"), (is[z] = d.pts.map((v) => [c0(v[0]), c0(v[1])])));
    const x = is[z];
    for (let v = 0; v < x.length - 1; v++)
      o.push([x[v][0], x[v][1], x[v + 1][0], x[v + 1][1]]);
  }
}
const be = { ...Ka, ...is, ...Hs, ...ys },
  ac = Object.entries(be)
    .filter(([s, o]) => /^t\d/.test(s) && o.length === 3)
    .map(([s, [o, t, u]]) => {
      const e = [o[0] - t[0], o[1] - t[1]],
        r = [u[0] - t[0], u[1] - t[1]],
        a = Math.hypot(...e),
        p = Math.hypot(...r),
        i = [e[0] / a + r[0] / p, e[1] / a + r[1] / p],
        d = Math.hypot(...i) || 1;
      return {
        name: s,
        x: +(t[0] + (i[0] / d) * 2.3).toFixed(2),
        z: +(t[1] + (i[1] / d) * 2.3).toFixed(2),
      };
    });
function nc() {
  const s = L0,
    o = Gs(le, 0.25),
    t = ps,
    u = cs,
    e = { ...C0 },
    r = Oe,
    a = (W) =>
      0.92 +
      0.22 * It(W / 6.5 + 1.3, 8.1) +
      0.3 * $t(e.gate + 6, e.gate, W) +
      0.25 *
        Math.max(
          $t(e.bridgeN - 5, e.bridgeN, W) * $t(e.bridgeS + 5, e.bridgeS, W),
          0,
        ),
    p = (W) => 2.4 + 1.3 * (0.5 + 0.5 * It(W / 17 + 9.1, 3.3)),
    i = { x0: -52, z0: 56, cell: 0.25 };
  ((i.nx = Math.round(104 / i.cell) + 1),
    (i.nz = Math.round(162 / i.cell) + 1));
  const d = i.nx * i.nz,
    y = new Float32Array(d).fill(99),
    w = new Float32Array(d),
    g = new Float32Array(d).fill(99),
    z = new Float32Array(d).fill(99),
    x = (W, B, F, E) => {
      const Y = i.cell,
        et = Math.ceil(B / Y);
      for (let nt = 0; nt < W.n; nt++) {
        const it = W.x[nt],
          lt = W.z[nt],
          ht = Math.round((it - i.x0) / Y),
          yt = Math.round((lt - i.z0) / Y);
        for (
          let Ft = Math.max(0, yt - et);
          Ft <= Math.min(i.nz - 1, yt + et);
          Ft++
        ) {
          const Ut = i.z0 + Ft * Y,
            Lt = (Ut - lt) ** 2,
            h0 = Ft * i.nx;
          for (
            let D0 = Math.max(0, ht - et);
            D0 <= Math.min(i.nx - 1, ht + et);
            D0++
          ) {
            const ee = i.x0 + D0 * Y,
              Ye = (ee - it) ** 2 + Lt,
              Se = h0 + D0,
              Ae = Math.sqrt(Ye);
            Ae < F[Se] && ((F[Se] = Ae), E && (E[Se] = W.s[nt]));
          }
        }
      }
    };
  (x(s, 18, y, w), x(t, 11, g, null), x(o, 4, z, null));
  const v = (W, B) => {
      const F = Math.round((W - i.x0) / i.cell),
        E = Math.round((B - i.z0) / i.cell);
      return F < 0 || E < 0 || F >= i.nx || E >= i.nz ? -1 : E * i.nx + F;
    },
    n = (W, B, F, E) => {
      const Y = (B - i.x0) / i.cell,
        et = (F - i.z0) / i.cell,
        nt = Math.floor(Y),
        it = Math.floor(et);
      if (nt < 0 || it < 0 || nt >= i.nx - 1 || it >= i.nz - 1) return E;
      const lt = Y - nt,
        ht = et - it,
        yt = it * i.nx + nt;
      return (
        (W[yt] * (1 - lt) + W[yt + 1] * lt) * (1 - ht) +
        (W[yt + i.nx] * (1 - lt) + W[yt + i.nx + 1] * lt) * ht
      );
    },
    l = [];
  for (const W in be) {
    const B = be[W];
    for (let F = 0; F < B.length - 1; F++)
      l.push([B[F][0], B[F][1], B[F + 1][0], B[F + 1][1]]);
  }
  const f = 6,
    h = new Map();
  for (const W of l) {
    const B = Math.floor((Math.min(W[0], W[2]) - 2) / f),
      F = Math.floor((Math.max(W[0], W[2]) + 2) / f),
      E = Math.floor((Math.min(W[1], W[3]) - 2) / f),
      Y = Math.floor((Math.max(W[1], W[3]) + 2) / f);
    for (let et = B; et <= F; et++)
      for (let nt = E; nt <= Y; nt++) {
        const it = et + "," + nt;
        (h.has(it) || h.set(it, []), h.get(it).push(W));
      }
  }
  const c = (W, B) => {
      let F = 1e9;
      for (const E of h.get(Math.floor(W / f) + "," + Math.floor(B / f)) || [])
        F = Math.min(F, fe(W, B, E[0], E[1], E[2], E[3]));
      return F;
    },
    M = (W, B, F, E, Y) => {
      let et = Math.min(F - r(E), Qr(W, B));
      for (const lt of de)
        et = Ps(et, Math.hypot(W - lt.x, B - lt.z) - lt.r, 2.2);
      ((et = Ps(et, Ee(W, B), 3)),
        (et = Ps(et, c(W, B) - 0.95, 1.2)),
        (et = Math.max(et, we.rim + 0.1 - Y)));
      const nt = Math.abs(W - Tt.x) - 0.62,
        it = Math.max(Tt.z0 - B, B - Tt.z1);
      return (
        (et = Math.min(
          et,
          nt > 0 && it > 0 ? Math.hypot(nt, it) : Math.max(nt, it),
        )),
        (et = Math.max(et, St.z + 0.05 - B)),
        (et = Math.max(et, -Ns(W, B))),
        et
      );
    },
    m = new Float32Array(d);
  for (let W = 0; W < i.nz; W++)
    for (let B = 0; B < i.nx; B++) {
      const F = W * i.nx + B,
        E = i.x0 + B * i.cell,
        Y = i.z0 + W * i.cell;
      m[F] =
        y[F] > 17 && g[F] > 10.5 && Ee(E, Y) > 6 && c(E, Y) > 7
          ? 9
          : M(E, Y, y[F], w[F], g[F]);
    }
  const k = (W, B) => n(m, W, B, 9),
    S = (W, B) => n(y, W, B, 99),
    A = (W, B) => {
      const F = n(g, W, B, 99);
      return F > 10.9 ? 99 : F;
    },
    b = (W, B) => {
      const F = v(W, B);
      return F < 0 ? 0 : w[F];
    },
    P = (W, B) => {
      let F =
        2.5 * It(W / 24 + 3.1, B / 24 - 1.7) +
        1.25 * It(W / 10.5 - 5.3, B / 10.5 + 2.2) +
        0.32 * It(W / 3.7 + 1.1, B / 3.7 + 7.3);
      ((F += 0.05 * (W - 4) * $t(95, 150, B) * $t(160, 140, B)),
        (F *= $t(78.5, 97, B)));
      const E = Math.hypot(W - Tt.x, (B - 166.2) * 0.8);
      F *= $t(4, 13, E);
      const Y = Ee(W, B);
      return (
        (F = F * $t(1, 9, Y) - 0.11 * Math.max(0, Y) ** 1.35 * $t(172, 190, B)),
        Math.max(-5.5, Math.min(3.6, F))
      );
    },
    _ = new Float32Array(d),
    I = (W, B, F) => {
      const E = F >= 0 ? m[F] : k(W, B),
        Y = F >= 0 ? w[F] : b(W, B),
        et = F >= 0 ? g[F] : A(W, B);
      if (B < St.z + 0.3 && W > St.xW - 0.4 && W < St.xE + 0.4)
        return 0.015 * It(W * 1.3, B * 1.3);
      let nt = P(W, B);
      const it = p(Y),
        lt = $t(0.3, it + 0.25, E);
      if (
        ((nt *= lt),
        (nt +=
          0.16 *
          $t(0.3, 0.75, E) *
          $t(1.8, 0.75, E) *
          (0.6 + 0.4 * It(W * 0.9, B * 0.9))),
        et < we.rim + 0.3)
      ) {
        const ht = 1 - $t(we.bed, we.rim, et + 0.25 * It(W * 0.35, B * 0.35));
        nt =
          nt * (1 - ht) -
          we.depth * ht * (0.93 + 0.07 * It(W * 0.8 + 4, B * 0.8));
      }
      return (
        E < 0.3 &&
          !(Math.abs(W - Tt.x) < 0.9 && B > Tt.z0 - 0.3 && B < Tt.z1 + 0.3) &&
          (nt = 0),
        nt
      );
    };
  for (let W = 0; W < i.nz; W++)
    for (let B = 0; B < i.nx; B++) {
      const F = W * i.nx + B;
      _[F] = I(i.x0 + B * i.cell, i.z0 + W * i.cell, F);
    }
  const R = (W, B) => {
      const F = (W - i.x0) / i.cell,
        E = (B - i.z0) / i.cell;
      return F < 0 || E < 0 || F >= i.nx - 1 || E >= i.nz - 1
        ? P(W, B)
        : n(_, W, B, 0);
    },
    V = (W, B) =>
      W > St.xW + St.t / 2 + 0.05 &&
      W < St.xE - St.t / 2 - 0.05 &&
      B > r0.z1 + 0.05 &&
      B < St.z - 0.02;
  let L = [Nt.tree, Nt.cart].map((W) => ({
      o: W,
      kind: W.name,
      s0: W.s + W.bay.u0 - 6,
      s1: W.s + W.bay.u1 + 6,
      ease: 7,
      off: W.gap * 1.25,
    })),
    K = [{ o: Nt.log, s: Nt.log.s - Nt.log.r, h: Nt.log.r * 2 }];
  const j = (W) => (W <= 0 ? 0 : W >= 1 ? 1 : W * W * (3 - 2 * W)),
    O = (W, B) => W.off * j((B - W.s0) / W.ease) * j((W.s1 - B) / W.ease),
    J = (W, B) => {
      let F = 0;
      for (const E of L) {
        const [Y, et] = ze(E.o, W, B),
          nt = E.o.s + Y;
        if (nt < E.s0 - 1 || nt > E.s1 + 1 || Math.abs(et) > 4.5) continue;
        const it = O(E, nt);
        F = Math.max(
          F,
          (1 - $t(0.7, 1.3, Math.abs(et - it))) * $t(0.12, 0.45, Math.abs(it)),
        );
      }
      return F;
    },
    tt = (W, B) => Math.abs(W - Tt.x) < 0.8 && B > Tt.z0 && B < Tt.z1,
    st = (W, B) =>
      B < St.z + 0.2
        ? n(z, W, B, 99) < 0.72
          ? "stone"
          : "grass"
        : tt(W, B)
          ? "wood"
          : Ee(W, B) < -1.5 && S(W, B) > 1.3
            ? "grass"
            : S(W, B) < a(b(W, B)) + 0.15 || J(W, B) > 0.5
              ? "dirt"
              : "leaves",
    G = [
      [4.25, 64.4],
      [3.3, 71.3],
    ],
    q = [null, null];
  {
    const W = (lt) => {
        const ht = Math.min(s.n - 1, Math.round(lt / 0.25));
        return [+s.x[ht].toFixed(2), +s.z[ht].toFixed(2)];
      },
      B = Tt.z0 - 0.8,
      F = Tt.z1 + 1.1,
      E = u(Tt.x, B),
      Y = u(Tt.x, F),
      et = u(2.2, 78.9),
      nt = s.len - 0.1,
      it = (lt, ht) => {
        const yt = Math.max(1, Math.round((ht - lt) / 8.3));
        for (let Ft = 1; Ft <= yt; Ft++) {
          const Ut = lt + ((ht - lt) * Ft) / yt;
          (G.push(W(Ut)), q.push(Ut));
        }
      };
    (G.push(W(et)),
      q.push(et),
      it(et, E),
      (G[G.length - 1] = [Tt.x, +B.toFixed(2)]),
      G.push([Tt.x, +((B + F) / 2).toFixed(2)], [Tt.x, +F.toFixed(2)]),
      q.push((E + Y) / 2, Y),
      it(Y, nt),
      G.forEach((lt, ht) => {
        const yt = q[ht];
        if (yt != null)
          for (const Ft of L) {
            const Ut = O(Ft, yt);
            if (Math.abs(Ut) > 0.05) {
              const Lt = O0(yt);
              G[ht] = [c0(Lt.x + Lt.tz * Ut), c0(Lt.z - Lt.tx * Ut)];
            }
          }
      }));
  }
  const U = (W, B) => {
      let F = 0,
        E = 1e9;
      return (
        G.forEach((Y, et) => {
          const nt = Math.hypot(Y[0] - W, Y[1] - B);
          nt < E && ((E = nt), (F = et));
        }),
        F
      );
    },
    Z = (W) => {
      let B = 2,
        F = 1e9;
      return (
        q.forEach((E, Y) => {
          if (E == null) return;
          const et = Math.abs(E - W);
          et < F && ((F = et), (B = Y));
        }),
        B
      );
    },
    ot = (W) => {
      const B = be[W],
        F = B[0],
        E = B[1];
      return [F[0], F[1], +Math.atan2(E[0] - F[0], E[1] - F[1]).toFixed(3)];
    },
    $ = (W, B) => {
      let F = 1e9;
      for (let E = 0; E < s.n; E += 2)
        F = Math.min(F, (s.x[E] - W) ** 2 + (s.z[E] - B) ** 2);
      return Math.sqrt(F);
    },
    C = Object.entries(be)
      .map(([W, B]) => {
        const F = B[0],
          E = B[1],
          Y = B[B.length - 1],
          et = u(Y[0], Y[1]),
          nt = s,
          it = Math.min(nt.n - 1, Math.round(et / 0.25)),
          lt = (Y[0] - nt.x[it]) * nt.tz[it] - (Y[1] - nt.z[it]) * nt.tx[it];
        return {
          name: W,
          x: F[0],
          z: F[1],
          yaw: +Math.atan2(E[0] - F[0], E[1] - F[1]).toFixed(3),
          route: Z(et),
          side: lt > 0 ? "L" : "R",
          dist: +$(F[0], F[1]).toFixed(1),
          s: +et.toFixed(1),
          mouth: [Y[0], Y[1]],
          warn: [
            +(F[0] + (E[0] - F[0]) * 0.4).toFixed(2),
            +(F[1] + (E[1] - F[1]) * 0.4).toFixed(2),
          ],
        };
      })
      .sort((W, B) => W.s - B.s),
    T = (W, B, F) =>
      C.filter(
        (E) =>
          /^t/.test(E.name) && E.s >= W && E.s <= B && (!F || E.side === F),
      ),
    D = de[1],
    N = de[2],
    H = {
      e1L: T(D.s - 14, D.s + 22, "L")
        .sort((W, B) => Math.abs(W.s - D.s - 4) - Math.abs(B.s - D.s - 4))
        .slice(0, 3)
        .map((W) => ot(W.name)),
      e2Ahead: T(N.s + 4, N.s + 26)
        .slice(0, 2)
        .map((W) => ot(W.name)),
      e2Behind: T(N.s - 26, N.s - 4)
        .reverse()
        .slice(0, 2)
        .map((W) => ot(W.name)),
      e3W: [ot("e3a"), ot("e3c")],
      e3E: [ot("e3b"), ot("e3d")],
      e3Big: [ot("e3e")],
    },
    Q = {
      path: s,
      yardPath: o,
      stream: t,
      S: e,
      G: i,
      hw: r,
      pw: a,
      bankW: p,
      natural: P,
      sdAt: k,
      dPathAt: S,
      sPathAt: b,
      dStreamAt: A,
      heightAt: R,
      clearingSd: Ee,
      inYard: V,
      onBridge: tt,
      surfaceAt: st,
      houseSd: Ns,
      trodAt: J,
      route: G,
      routeS: q,
      routeIndexNear: U,
      routeIndexAtS: Z,
      spawns: H,
      sideSpawns: C,
      idxOf: v,
      grids: { dP: y, sP: w, dS: g, sdG: m, H: _, dY: z },
      at(W) {
        const B = Math.max(0, Math.min(s.n - 1, Math.round(W / 0.25)));
        return { x: s.x[B], z: s.z[B], tx: s.tx[B], tz: s.tz[B] };
      },
      obst: Nt,
      get dodges() {
        return L;
      },
      get jumps() {
        return K;
      },
      swerveAt(W) {
        let B = 0;
        for (const F of L) B += O(F, W);
        return B;
      },
      setDodges(W, B) {
        ((L = W), B && (K = B), (Q.ride = ma(Q)));
      },
    };
  return ((Q.ride = ma(Q)), Q);
}
function ma(s) {
  const { path: o, S: t } = s,
    u = s.S.gate - 1.6,
    e = s.at(u),
    r = [],
    a = Math.max(2, Math.ceil(Math.hypot(e.x - Y0.x, e.z - Y0.z) / 0.25));
  for (let f = 0; f < a; f++)
    r.push([Y0.x + ((e.x - Y0.x) * f) / a, Y0.z + ((e.z - Y0.z) * f) / a]);
  const p = t.end - 7;
  for (let f = u; f <= p + 1e-6; f += 0.25) {
    const h = s.at(f);
    r.push([h.x, h.z]);
  }
  const i = [0];
  for (let f = 1; f < r.length; f++)
    i.push(i[f - 1] + Math.hypot(r[f][0] - r[f - 1][0], r[f][1] - r[f - 1][1]));
  const d = i[i.length - 1],
    y = [];
  for (let f = 0, h = 0; ; f = Math.min(d, f + 1)) {
    for (; h < i.length - 2 && i[h + 1] < f;) h++;
    const c = i[h + 1] > i[h] ? (f - i[h]) / (i[h + 1] - i[h]) : 0;
    if (
      (y.push([
        c0(r[h][0] + (r[h + 1][0] - r[h][0]) * c),
        c0(r[h][1] + (r[h + 1][1] - r[h][1]) * c),
      ]),
      f >= d)
    )
      break;
  }
  const w = i[a],
    g = (f) => +(w + (f - u)).toFixed(1),
    z = s.at(p),
    x = [c0(z.x), c0(z.z), +Math.atan2(z.tx, z.tz).toFixed(3)],
    v = [
      [0, g(t.gate - 2.5), 2.5],
      [g(t.gate - 2.5), g(t.gate + 3), 3.5],
    ];
  {
    const h = Math.round(24),
      c = new Float32Array(o.n).fill(1e9);
    for (let m = h; m < o.n - h; m++) {
      const k = Math.atan2(o.z[m] - o.z[m - h], o.x[m] - o.x[m - h]);
      let A = Math.atan2(o.z[m + h] - o.z[m], o.x[m + h] - o.x[m]) - k;
      for (; A > Math.PI;) A -= 2 * Math.PI;
      for (; A < -Math.PI;) A += 2 * Math.PI;
      c[m] = Math.abs(A) > 1e-6 ? 6 / Math.abs(A) : 1e9;
    }
    let M = 0;
    for (; M < o.n;) {
      const m = o.s[M];
      if (
        c[M] < 14 &&
        m > t.gate + 3 &&
        m < p - 9 &&
        !(m > t.bridgeN - 4 && m < t.bridgeS + 3)
      ) {
        let k = M,
          S = c[M];
        for (; k < o.n && c[k] < 14;) ((S = Math.min(S, c[k])), k++);
        (v.push([
          g(m),
          g(o.s[Math.min(o.n - 1, k)]),
          +Math.sqrt(2.6 * S).toFixed(1),
        ]),
          (M = k));
      } else M++;
    }
  }
  v.push([g(t.bridgeN - 3), g(t.bridgeS + 2), 3]);
  {
    let f = p;
    for (let h = t.bridgeS + 2; h < p; h += 0.25) {
      const c = s.at(h);
      if (s.clearingSd(c.x, c.z) < 0) {
        f = h;
        break;
      }
    }
    v.push([g(f), g(p - 1), 2], [g(p - 1), g(p), 0]);
  }
  for (const f of s.dodges || [])
    v.push([+(g(f.s0) - 12).toFixed(1), g(f.s1), 5]);
  v.sort((f, h) => f[0] - h[0]);
  const n = (s.dodges || []).map((f) => ({
      kind: f.kind,
      s0: g(f.s0),
      s1: g(f.s1),
      ease: +f.ease.toFixed(1),
      off: +f.off.toFixed(2),
      at: (f.at || [f.o.x, f.o.z]).map(c0),
    })),
    l = (s.jumps || []).map((f) => ({
      s: g(f.s),
      h: +f.h.toFixed(2),
      at: (f.at || [f.o.x, f.o.z]).map(c0),
    }));
  return {
    line: y,
    bike: [Y0.x, Y0.z, +Y0.yaw.toFixed(3)],
    stop: x,
    slow: v,
    dodge: n,
    jump: l,
    length: +d.toFixed(1),
    pathAt: g(t.gate),
  };
}
const Bt = {
    cedar: 0,
    cedarHang: 1,
    broad: 2,
    fern: 3,
    yew: 4,
    bush: 5,
    grass: 6,
    ivy: 7,
    moss: 8,
    flowers: 9,
    fernDry: 10,
    twigs: 11,
  },
  ao = 4,
  Vs = 3,
  go = [(3 + 475 / 512) / 4, 1 - (2 + 475 / 512) / 3];
function Ao(s) {
  const o = s % ao,
    t = Math.floor(s / ao);
  return [o / ao, 1 - (t + 1) / Vs, (o + 1) / ao, 1 - t / Vs];
}
function rc() {
  const o = 512 * ao,
    t = 512 * Vs,
    u = document.createElement("canvas");
  ((u.width = o), (u.height = t));
  const e = u.getContext("2d");
  e.clearRect(0, 0, o, t);
  let r = 9127;
  const a = () => ((r = (r * 16807) % 2147483647), r / 2147483647),
    p = (x, v) => {
      (e.save(),
        e.translate((x % ao) * 512, Math.floor(x / ao) * 512),
        e.beginPath(),
        e.rect(2, 2, 508, 508),
        e.clip(),
        v(),
        e.restore());
    },
    i = (x, v = 1) =>
      `rgb(${Math.round(x[0] * v)},${Math.round(x[1] * v)},${Math.round(x[2] * v)})`,
    d = (x, v, n) => [
      x[0] + (v[0] - x[0]) * n,
      x[1] + (v[1] - x[1]) * n,
      x[2] + (v[2] - x[2]) * n,
    ],
    y = (x, v, n, l, f, h, c) => [
      (1 - c) * (1 - c) * x + 2 * (1 - c) * c * n + c * c * f,
      (1 - c) * (1 - c) * v + 2 * (1 - c) * c * l + c * c * h,
    ],
    w = (x) => {
      const v = [22, 40, 24],
        n = [34, 58, 30],
        l = [66, 92, 44];
      e.lineCap = "round";
      const f = [],
        h = 17 + Math.floor(a() * 5);
      for (let c = 0; c < h; c++) {
        const M = c / (h - 1),
          m = 18 + M * 300 + a() * 30,
          k = 512 / 2 + (a() - 0.5) * 30,
          S = a() < 0.5 ? -1 : 1,
          A = (1 - M * 0.55) * (150 + a() * 90),
          b = m + A * (x ? 0.45 : 0.85),
          P =
            k +
            S * A * (x ? 0.45 : 0.62) * (0.5 + a() * 0.6) +
            (x ? A * 0.55 : 0);
        f.push([
          m,
          k,
          (m + b) / 2 + (a() - 0.5) * 40,
          (k + P) / 2 - S * 20,
          b,
          P,
        ]);
      }
      for (const c of f)
        for (let M = 0; M < 7; M++) {
          const m = 0.1 + (M / 7) * 0.85,
            [k, S] = y(c[0], c[1], c[2], c[3], c[4], c[5], m),
            A = (30 - m * 16) * (0.8 + a() * 0.4);
          ((e.fillStyle = i([16, 30, 18], 0.9 + a() * 0.3)), e.beginPath());
          for (let b = 0; b < 9; b++) {
            const P = (b / 9) * Math.PI * 2,
              _ = A * (0.65 + a() * 0.5);
            e.lineTo(k + Math.cos(P) * _, S + Math.sin(P) * _);
          }
          (e.closePath(), e.fill());
        }
      ((e.strokeStyle = "rgb(46,32,22)"),
        (e.lineWidth = 5),
        e.beginPath(),
        e.moveTo(10, 512 / 2),
        e.quadraticCurveTo(
          512 * 0.45,
          512 / 2 + (x ? 30 : -8),
          512 * 0.8,
          512 / 2 + (x ? 70 : 6),
        ),
        e.stroke());
      for (const c of f) {
        ((e.strokeStyle = "rgb(40,34,22)"),
          (e.lineWidth = 2.5),
          e.beginPath(),
          e.moveTo(c[0], c[1]),
          e.quadraticCurveTo(c[2], c[3], c[4], c[5]),
          e.stroke());
        const M = 120 + Math.floor(a() * 50);
        for (let m = 0; m < M; m++) {
          const k = a(),
            [S, A] = y(c[0], c[1], c[2], c[3], c[4], c[5], k),
            [b, P] = y(
              c[0],
              c[1],
              c[2],
              c[3],
              c[4],
              c[5],
              Math.min(1, k + 0.02),
            ),
            _ =
              Math.atan2(P - A, b - S) +
              (a() < 0.5 ? -1 : 1) * (0.5 + a() * 0.6),
            I = (7 + a() * 9) * (1.1 - k * 0.35),
            R = d(
              d(v, n, Math.min(1, k * 1.4)),
              l,
              Math.max(0, k - 0.55) * 1.8 * a(),
            );
          ((e.strokeStyle = i(R, 0.85 + a() * 0.3)),
            (e.lineWidth = 3.6 + a() * 1.8),
            e.beginPath(),
            e.moveTo(S, A),
            e.lineTo(S + Math.cos(_) * I, A + Math.sin(_) * I),
            e.stroke());
        }
      }
    };
  (p(Bt.cedar, () => w(!1)),
    p(Bt.cedarHang, () => w(!0)),
    p(Bt.broad, () => {
      ((e.strokeStyle = "rgb(58,44,30)"),
        (e.lineWidth = 4),
        (e.lineCap = "round"));
      const x = [
        [12, 512 / 2, 512 * 0.55, 512 / 2 - 20, 512 * 0.95, 512 / 2 + 10],
        [512 * 0.3, 512 / 2, 512 * 0.45, 512 * 0.2, 512 * 0.62, 512 * 0.1],
        [512 * 0.35, 512 / 2, 512 * 0.52, 512 * 0.8, 512 * 0.7, 512 * 0.9],
      ];
      for (const v of x)
        (e.beginPath(),
          e.moveTo(v[0], v[1]),
          e.quadraticCurveTo(v[2], v[3], v[4], v[5]),
          e.stroke());
      for (const v of x)
        for (let n = 0; n < 11; n++) {
          const l = 0.12 + (n / 11) * 0.88,
            [f, h] = y(v[0], v[1], v[2], v[3], v[4], v[5], l),
            c = n % 2 ? 1 : -1,
            M = Math.atan2(v[5] - v[1], v[4] - v[0]) + c * (0.55 + a() * 0.45),
            m = 34 + a() * 22,
            k = [
              [34, 50, 30],
              [40, 58, 32],
              [28, 42, 26],
              [50, 66, 38],
            ][Math.floor(a() * 4)];
          (e.save(),
            e.translate(f + Math.cos(M) * m * 0.5, h + Math.sin(M) * m * 0.5),
            e.rotate(M + (a() - 0.5) * 0.3));
          const S = e.createLinearGradient(0, -m * 0.2, 0, m * 0.2);
          (S.addColorStop(0, i(k, 1.2)),
            S.addColorStop(0.5, i(k, 1)),
            S.addColorStop(1, i(k, 0.72)),
            (e.fillStyle = S),
            e.beginPath(),
            e.moveTo(-m * 0.5, 0),
            e.bezierCurveTo(
              -m * 0.4,
              -m * 0.24,
              m * 0.15,
              -m * 0.2,
              m * 0.55,
              0,
            ),
            e.bezierCurveTo(m * 0.15, m * 0.2, -m * 0.4, m * 0.24, -m * 0.5, 0),
            e.fill(),
            (e.strokeStyle = "rgba(120,140,90,0.3)"),
            (e.lineWidth = 1.2),
            e.beginPath(),
            e.moveTo(-m * 0.5, 0),
            e.lineTo(m * 0.5, 0),
            e.stroke());
          for (let A = 1; A < 4; A++) {
            const b = -m * 0.5 + A * m * 0.25;
            (e.beginPath(),
              e.moveTo(b, 0),
              e.lineTo(b + m * 0.1, -m * 0.1),
              e.moveTo(b, 0),
              e.lineTo(b + m * 0.1, m * 0.1),
              e.stroke());
          }
          e.restore();
        }
    }));
  const g = (x) => {
    const v = x ? [74, 58, 40] : [44, 78, 30],
      n = x ? [98, 80, 58] : [70, 108, 40];
    ((e.strokeStyle = x ? "rgb(80,52,28)" : "rgb(50,74,28)"),
      (e.lineWidth = 4),
      (e.lineCap = "round"),
      e.beginPath(),
      e.moveTo(8, 512 / 2 + 6),
      e.quadraticCurveTo(512 * 0.5, 512 / 2 - 14, 500, 512 / 2 + 4),
      e.stroke());
    const l = 28;
    for (let f = 1; f < l; f++) {
      const h = f / l,
        [c, M] = y(
          8,
          512 / 2 + 6,
          512 * 0.5,
          512 / 2 - 14,
          500,
          512 / 2 + 4,
          h,
        ),
        m = 512 * 0.44 * Math.sin(Math.PI * (0.12 + h * 0.88)) * (1 - h * 0.3);
      for (const k of [-1, 1]) {
        const S = k * (1.15 - h * 0.35) + (a() - 0.5) * 0.12;
        (e.save(), e.translate(c, M), e.rotate(S));
        const A = d(v, n, a() * 0.6 + h * 0.3);
        ((e.fillStyle = i(A)), e.beginPath(), e.moveTo(0, -3));
        const b = 7;
        for (let P = 0; P <= b; P++) {
          const _ = P / b,
            I = (1 - _ * 0.8) * 512 * 0.036;
          e.lineTo(_ * m, -I - (P % 2 ? 2.5 : 0));
        }
        for (let P = b; P >= 0; P--) {
          const _ = P / b,
            I = (1 - _ * 0.8) * 512 * 0.036;
          e.lineTo(_ * m, I + (P % 2 ? 2.5 : 0));
        }
        (e.closePath(), e.fill(), e.restore());
      }
    }
  };
  (p(Bt.fern, () => g(!1)),
    p(Bt.fernDry, () => g(!0)),
    p(Bt.yew, () => {
      e.lineCap = "round";
      for (let x = 0; x < 10; x++) {
        const v = 14 + a() * 180,
          n = 512 / 2 + (a() - 0.5) * 120,
          l = (a() - 0.5) * 1.2,
          f = 180 + a() * 150,
          h = v + Math.cos(l) * f,
          c = n + Math.sin(l) * f;
        ((e.strokeStyle = "rgb(52,40,26)"),
          (e.lineWidth = 2.2),
          e.beginPath(),
          e.moveTo(v, n),
          e.lineTo(h, c),
          e.stroke());
        const M = 60;
        for (let m = 0; m < M; m++) {
          const k = m / M,
            S = v + (h - v) * k,
            A = n + (c - n) * k;
          for (const b of [-1, 1]) {
            const P = l + b * (1.35 + (a() - 0.5) * 0.2),
              _ = 16 + a() * 8;
            ((e.strokeStyle = i(
              d([18, 32, 20], [40, 60, 32], a() * 0.7 + k * 0.2),
            )),
              (e.lineWidth = 3.4),
              e.beginPath(),
              e.moveTo(S, A),
              e.lineTo(S + Math.cos(P) * _, A + Math.sin(P) * _),
              e.stroke());
          }
        }
      }
    }),
    p(Bt.bush, () => {
      for (let x = 0; x < 22; x++) {
        const v = a() * Math.PI * 2,
          n = a() * 512 * 0.3,
          l = 512 / 2 + Math.cos(v) * n,
          f = 512 / 2 + Math.sin(v) * n,
          h = 60 + a() * 50,
          c = v + (a() - 0.5) * 1.2,
          M = [
            [30, 58, 26],
            [40, 70, 32],
            [26, 48, 22],
            [56, 84, 40],
          ][Math.floor(a() * 4)];
        (e.save(), e.translate(l, f), e.rotate(c));
        const m = e.createLinearGradient(-h / 2, 0, h / 2, 0);
        if (
          (m.addColorStop(0, i(M, 0.8)),
          m.addColorStop(1, i(M, 1.2)),
          (e.fillStyle = m),
          e.beginPath(),
          e.ellipse(0, 0, h / 2, h * 0.2, 0, 0, Math.PI * 2),
          e.fill(),
          (e.strokeStyle = "rgba(170,190,130,0.3)"),
          (e.lineWidth = 1.5),
          e.beginPath(),
          e.moveTo(-h / 2, 0),
          e.lineTo(h / 2, 0),
          e.stroke(),
          a() < 0.3)
        ) {
          e.fillStyle = "rgba(200,190,90,0.35)";
          for (let k = 0; k < 6; k++)
            (e.beginPath(),
              e.arc((a() - 0.5) * h * 0.8, (a() - 0.5) * h * 0.25, 2, 0, 7),
              e.fill());
        }
        e.restore();
      }
    }),
    p(Bt.grass, () => {
      for (let x = 0; x < 70; x++) {
        const v = 256 + (a() - 0.5) * 60,
          n = (a() - 0.5) * 1.3,
          l = 512 * (0.45 + a() * 0.5),
          f = v + Math.sin(n) * l,
          h = 508 - Math.cos(n) * l,
          c = v + Math.sin(n) * l * 0.3,
          M = 512 - l * 0.5,
          m = a() < 0.25 ? [120, 108, 60] : d([36, 62, 24], [80, 104, 44], a());
        ((e.fillStyle = i(m)),
          e.beginPath(),
          e.moveTo(v - 4, 510),
          e.quadraticCurveTo(c, M, f, h),
          e.quadraticCurveTo(c + 2, M, v + 4, 510),
          e.closePath(),
          e.fill());
      }
    }),
    p(Bt.ivy, () => {
      ((e.strokeStyle = "rgb(60,48,30)"),
        (e.lineWidth = 3),
        (e.lineCap = "round"),
        e.beginPath(),
        e.moveTo(10, 512 / 2),
        e.bezierCurveTo(
          512 * 0.3,
          512 * 0.3,
          512 * 0.6,
          512 * 0.7,
          502,
          512 / 2,
        ),
        e.stroke());
      for (let x = 0; x < 16; x++) {
        const v = x / 16,
          n = 10 + v * 492,
          l = 512 / 2 + Math.sin(v * Math.PI * 2) * 512 * 0.12,
          f = 34 + a() * 20,
          h = a() * 6.28,
          c = [
            [26, 48, 24],
            [34, 58, 28],
            [22, 40, 20],
          ][Math.floor(a() * 3)];
        (e.save(),
          e.translate(n + (a() - 0.5) * 40, l + (a() - 0.5) * 60),
          e.rotate(h),
          (e.fillStyle = i(c)),
          e.beginPath());
        for (let M = 0; M <= 10; M++) {
          const m = (M / 10) * Math.PI * 2,
            k = f * (M % 2 ? 0.45 : 1) * (M === 0 || M === 10 ? 1.1 : 1);
          e.lineTo(Math.cos(m) * k * 0.6, Math.sin(m) * k * 0.6);
        }
        (e.closePath(),
          e.fill(),
          (e.strokeStyle = "rgba(160,180,140,0.45)"),
          (e.lineWidth = 1.2));
        for (let M = 0; M < 5; M++) {
          const m = (M / 5) * Math.PI * 2;
          (e.beginPath(),
            e.moveTo(0, 0),
            e.lineTo(Math.cos(m) * f * 0.5, Math.sin(m) * f * 0.5),
            e.stroke());
        }
        e.restore();
      }
    }),
    p(Bt.moss, () => {
      e.lineCap = "round";
      for (let x = 0; x < 90; x++) {
        const v = 20 + a() * 472,
          n = 512 * (0.3 + a() * 0.65),
          l = (a() - 0.5) * 50,
          f = d([96, 110, 84], [150, 160, 128], a());
        ((e.strokeStyle = i(f, 0.9)),
          (e.lineWidth = 1.5 + a() * 2.2),
          e.beginPath(),
          e.moveTo(v, 4),
          e.quadraticCurveTo(v + l, n * 0.5, v + l * 0.4 + (a() - 0.5) * 20, n),
          e.stroke());
        for (let h = 0; h < 5; h++) {
          const c = a(),
            M = v + l * c * 0.8,
            m = n * c;
          (e.beginPath(),
            e.moveTo(M, m),
            e.lineTo(M + (a() - 0.5) * 24, m + 10 + a() * 30),
            e.stroke());
        }
      }
    }),
    p(Bt.flowers, () => {
      for (let x = 0; x < 26; x++) {
        const v = 256 + (a() - 0.5) * 120,
          n = 512 * (0.4 + a() * 0.5),
          l = (a() - 0.5) * 0.7,
          f = v + Math.sin(l) * n,
          h = 512 - Math.cos(l) * n;
        ((e.strokeStyle = "rgb(58,84,36)"),
          (e.lineWidth = 2.2),
          e.beginPath(),
          e.moveTo(v, 512),
          e.quadraticCurveTo(v + Math.sin(l) * n * 0.2, 512 - n * 0.5, f, h),
          e.stroke());
        const c = [
            [236, 232, 220],
            [200, 190, 236],
            [240, 226, 150],
            [226, 214, 240],
          ][Math.floor(a() * 4)],
          M = 9 + a() * 7;
        e.fillStyle = i(c);
        for (let m = 0; m < 5; m++) {
          const k = (m / 5) * Math.PI * 2;
          (e.beginPath(),
            e.ellipse(
              f + Math.cos(k) * M * 0.55,
              h + Math.sin(k) * M * 0.55,
              M * 0.5,
              M * 0.34,
              k,
              0,
              Math.PI * 2,
            ),
            e.fill());
        }
        ((e.fillStyle = "rgb(220,190,70)"),
          e.beginPath(),
          e.arc(f, h, M * 0.25, 0, Math.PI * 2),
          e.fill());
      }
    }),
    p(Bt.twigs, () => {
      e.lineCap = "round";
      const x = (v, n, l, f, h, c) => {
        const M = v + Math.cos(l) * f,
          m = n + Math.sin(l) * f;
        if (
          ((e.strokeStyle = "rgb(50,38,28)"),
          (e.lineWidth = h),
          e.beginPath(),
          e.moveTo(v, n),
          e.lineTo(M, m),
          e.stroke(),
          c > 0)
        )
          for (let k = 0; k < 2; k++)
            x(
              v + (M - v) * (0.4 + a() * 0.5),
              n + (m - n) * (0.4 + a() * 0.5),
              l + (a() - 0.5) * 1.6,
              f * 0.6,
              h * 0.65,
              c - 1,
            );
      };
      for (let v = 0; v < 4; v++)
        x(10, 512 / 2 + (a() - 0.5) * 80, (a() - 0.5) * 0.8, 512 * 0.55, 5, 4);
      ((e.fillStyle = "rgb(20,36,22)"), e.fillRect(442, 442, 66, 66));
    }));
  const z = new io(u);
  return (
    (z.colorSpace = lo),
    (z.anisotropy = 8),
    (z.generateMipmaps = !0),
    (z.minFilter = vs),
    z
  );
}
function cc() {
  const u = document.createElement("canvas");
  ((u.width = 256 * 4), (u.height = 1024));
  const e = u.getContext("2d");
  e.clearRect(0, 0, u.width, u.height);
  let r = 5519;
  const a = () => ((r = (r * 16807) % 2147483647), r / 2147483647);
  for (let i = 0; i < 4; i++) {
    (e.save(), e.translate(i * 256, 0));
    const d = 256 / 2 + (a() - 0.5) * 20,
      y = 14 + a() * 10,
      w = 1024 * (0.38 + a() * 0.15);
    ((e.fillStyle = "rgb(46,34,28)"),
      e.beginPath(),
      e.moveTo(d - y * 1.9, 1024),
      e.quadraticCurveTo(d - y * 0.6, 984, d - y * 0.5, 904),
      e.lineTo(d - y * 0.3, 60),
      e.lineTo(d + y * 0.3, 60),
      e.lineTo(d + y * 0.5, 904),
      e.quadraticCurveTo(d + y * 0.6, 984, d + y * 1.9, 1024),
      e.closePath(),
      e.fill());
    for (let g = 0; g < 70; g++) {
      const z = a() * 256,
        x = 1024 * (0.7 + a() * 0.14),
        v = 16 + a() * 30;
      ((e.fillStyle = ["rgb(14,22,16)", "rgb(18,28,20)", "rgb(11,18,13)"][
        Math.floor(a() * 3)
      ]),
        e.beginPath(),
        e.moveTo(z - v, 1024));
      for (let n = 0; n <= 8; n++) {
        const l = Math.PI + (n / 8) * Math.PI,
          f = v * (0.7 + a() * 0.5);
        e.lineTo(z + Math.cos(l) * f, x + Math.sin(l) * f * 1.6);
      }
      (e.lineTo(z + v, 1024), e.closePath(), e.fill());
    }
    ((e.fillStyle = "rgb(12,19,14)"),
      e.fillRect(0, 1024 * 0.84, 256, 1024 * 0.16),
      (e.strokeStyle = "rgb(40,30,24)"),
      (e.lineWidth = 3));
    for (let g = 0; g < 7; g++) {
      const z = w + a() * (839.68 - w),
        x = a() < 0.5 ? -1 : 1;
      (e.beginPath(),
        e.moveTo(d, z),
        e.lineTo(d + x * (16 + a() * 26), z + 12 + a() * 10),
        e.stroke());
    }
    for (let g = 0; g < 150; g++) {
      const z = 30 + Math.pow(a(), 0.8) * (w - 30),
        x = 256 * 0.42 * (0.12 + 0.88 * Math.pow((z - 30) / (w - 30), 0.75)),
        v = d + (a() - 0.5) * 2 * x * (0.3 + 0.7 * a()),
        n = 10 + a() * 22,
        l = [
          [18, 30, 20],
          [24, 38, 24],
          [14, 24, 16],
          [30, 44, 28],
        ][Math.floor(a() * 4)];
      ((e.fillStyle = `rgb(${l[0]},${l[1]},${l[2]})`), e.beginPath());
      for (let f = 0; f < 9; f++) {
        const h = (f / 9) * Math.PI * 2,
          c = n * (0.6 + a() * 0.5);
        e.lineTo(v + Math.cos(h) * c * 1.3, z + Math.sin(h) * c * 0.7);
      }
      (e.closePath(), e.fill());
    }
    e.restore();
  }
  const p = new io(u);
  return (
    (p.colorSpace = lo),
    (p.anisotropy = 4),
    (p.generateMipmaps = !0),
    (p.minFilter = vs),
    { tex: p, n: 4 }
  );
}
const F0 = Math.PI * 2,
  mo = (s, o, t) => {
    const u = Math.max(0, Math.min(1, (t - s) / (o - s)));
    return u * u * (3 - 2 * u);
  },
  ls = (s) => ((s = (s + Math.PI) % F0), s < 0 && (s += F0), s - Math.PI),
  xs = (s) => (s <= 0 ? 0 : s >= 1 ? 1 : s * s * (3 - 2 * s)),
  j0 = (s, o = 0, t = 0.25, u = 0) => [
    s,
    2 + Math.min(0.97, Math.max(0, o)),
    u > 0.004 ? 2 + Math.min(1, u) : t,
  ];
function xe(s, o) {
  const t = s.attributes.position,
    u = new Float32Array(t.count * 3);
  for (let e = 0; e < t.count; e++)
    u.set(o(t.getX(e), t.getY(e), t.getZ(e)), e * 3);
  return (s.setAttribute("aK", new vt(u, 3)), s);
}
function Cs(s, o, t, u = {}) {
  const {
      seg: e = 26,
      step: r = 0.14,
      uvs: a = 0.42,
      ridgeA: p = 0.09,
      endBreak: i = !0,
      startBreak: d = !1,
      moss: y = 0.3,
      teeth: w = 0.7,
      rot: g = 0.06,
      bare: z = 0,
      bareDir: x = null,
    } = u,
    v = (t() - 0.5) * 0.45,
    n = [0];
  for (let C = 1; C < s.length; C++)
    n.push(n[C - 1] + s[C].distanceTo(s[C - 1]));
  const l = n[n.length - 1],
    f = (C) => {
      let T = 0;
      for (; T < s.length - 2 && n[T + 1] < C;) T++;
      const D = (C - n[T]) / Math.max(1e-6, n[T + 1] - n[T]);
      return s[T].clone().lerp(s[T + 1], Math.min(1, Math.max(0, D)));
    },
    h = Math.max(3, Math.ceil(l / r)),
    c = [],
    M = [];
  for (let C = 0; C <= h; C++) c.push(f((l * C) / h));
  for (let C = 0; C <= h; C++)
    M.push(
      c[Math.min(h, C + 1)]
        .clone()
        .sub(c[Math.max(0, C - 1)])
        .normalize(),
    );
  const m = [],
    k = [];
  {
    const C = at(0, 1, 0);
    let T = C.clone().addScaledVector(M[0], -C.dot(M[0]));
    (T.lengthSq() < 1e-4 && T.set(1, 0, 0), T.normalize(), m.push(T));
  }
  for (let C = 1; C <= h; C++) {
    const T = m[C - 1]
      .clone()
      .addScaledVector(M[C], -m[C - 1].dot(M[C]))
      .normalize();
    m.push(T);
  }
  for (let C = 0; C <= h; C++) k.push(M[C].clone().cross(m[C]).normalize());
  const S = 8 + Math.floor(t() * 5),
    A = t() * F0,
    b = t() * 50,
    P = Array.from({ length: 2 + Math.floor(t() * 3) }, () => ({
      a: t() * F0,
      w: 0.06 + t() * 0.07,
      d: 0.1 + t() * 0.14,
      t0: t() * 0.45,
      t1: 0.55 + t() * 0.45,
    })),
    _ = Array.from({ length: 1 + Math.floor(t() * 3) }, () => ({
      a: t() * F0,
      t: 0.1 + t() * 0.8,
      s: 0.18 + t() * 0.25,
      h: 0.05 + t() * 0.08,
    })),
    I = (C, T) => {
      const D = T - v * C * l;
      let N =
          1 + p * (Math.pow(Math.abs(Math.sin(S * 0.5 * D + A)), 0.6) - 0.6),
        H = 0;
      for (const Q of P) {
        const W = ls(D - Q.a) / Q.w;
        if (Math.abs(W) < 1) {
          const B =
            (1 - W * W) ** 2 *
            mo(Q.t0, Q.t0 + 0.06, C) *
            (1 - mo(Q.t1 - 0.06, Q.t1, C));
          ((N -= Q.d * B), (H = Math.max(H, B * 0.7)));
        }
      }
      for (const Q of _) {
        const W = ls(T - Q.a) * 0.5,
          B = (C - Q.t) * l,
          F = (W * W + B * B) / (Q.s * Q.s);
        F < 4 && (N += Q.h * Math.exp(-F * 1.5));
      }
      return [
        N +
          0.04 * It(D * 2.1 + b, C * l * 1.3) +
          0.02 * It(D * 6.3, C * l * 4.1 + b),
        H,
      ];
    },
    R = (C) => {
      const T = [];
      for (let D = 0, N = 2 + Math.floor(t() * 2); D < N; D++)
        T.push({
          a: t() * F0,
          h: (D === 0 ? 0.32 + t() * 0.38 : 0.07 + t() * 0.2) * w,
          w: D === 0 ? 0.3 + t() * 0.22 : 0.26 + t() * 0.36,
        });
      return (D) => {
        let N = 0.03 + 0.06 * Math.abs(It(D * 2.3 + C, C * 0.7));
        for (const H of T)
          N = Math.max(
            N,
            H.h * Math.pow(Math.max(0, 1 - Math.abs(ls(D - H.a)) / H.w), 0.85),
          );
        return N;
      };
    },
    V = R(b + 3),
    L = R(b + 9),
    K = [],
    j = (C) => ({
      c: c[C],
      nf: m[C],
      bf: k[C],
      tdir: M[C],
      t: C / h,
      along: (l * C) / h,
    });
  if (d)
    for (const C of [0.42, 0.26, 0.12]) {
      const T = j(0);
      K.push({
        ...T,
        c: c[0].clone().addScaledVector(M[0], -C),
        along: -C,
        brk: { e: C, f: L, sg: -1 },
      });
    }
  for (let C = 0; C <= h; C++) K.push(j(C));
  if (i)
    for (const C of [0.12, 0.26, 0.42, 0.62]) {
      const T = j(h);
      K.push({
        ...T,
        c: c[h].clone().addScaledVector(M[h], C),
        along: l + C,
        brk: { e: C, f: V, sg: 1 },
      });
    }
  const O = K.length,
    J = new Float32Array((O + (i ? 1 : 0) + (d ? 1 : 0)) * (e + 1) * 3),
    tt = new Float32Array((J.length / 3) * 2),
    st = new Float32Array(J.length),
    G = Math.max(1, Math.round(F0 * o(0.5) * a)) / (F0 * a);
  let q = 0;
  const U = (C, T, D, N, H, Q) => {
    ((J[q * 3] = C),
      (J[q * 3 + 1] = T),
      (J[q * 3 + 2] = D),
      (tt[q * 2] = N),
      (tt[q * 2 + 1] = H),
      st.set(Q, q * 3),
      q++);
  };
  if (d) {
    const C = K[0];
    for (let T = 0; T <= e; T++) {
      const D = (T / e) * F0,
        N = o(0) * 0.06;
      U(
        c[0].x +
          (C.nf.x * Math.cos(D) + C.bf.x * Math.sin(D)) * N +
          M[0].x * 0.1,
        c[0].y +
          (C.nf.y * Math.cos(D) + C.bf.y * Math.sin(D)) * N +
          M[0].y * 0.1,
        c[0].z +
          (C.nf.z * Math.cos(D) + C.bf.z * Math.sin(D)) * N +
          M[0].z * 0.1,
        0.31,
        0.62,
        j0(0.02, 0.97),
      );
    }
  }
  for (const C of K)
    for (let T = 0; T <= e; T++) {
      const D = (T / e) * F0,
        N = Math.min(1, Math.max(0, C.t));
      let [H, Q] = I(N, D),
        W = o(N) * H,
        B = 0,
        F = !1;
      if (C.brk) {
        const yt = C.brk.f(D);
        C.brk.e <= yt
          ? ((W *= 1 - (0.18 * C.brk.e) / Math.max(0.05, yt)),
            (Q = Math.max(Q, 0.48 + (0.32 * C.brk.e) / Math.max(0.05, yt))))
          : ((W *= 0.55 + 0.1 * Math.sin(D * 5 + b)),
            (B = -C.brk.sg * (C.brk.e - yt)),
            (Q = 0.93),
            (F = !0));
      }
      const E = C.c.x + C.tdir.x * B,
        Y = C.c.y + C.tdir.y * B,
        et = C.c.z + C.tdir.z * B,
        nt = C.nf.x * Math.cos(D) + C.bf.x * Math.sin(D),
        it = C.nf.y * Math.cos(D) + C.bf.y * Math.sin(D),
        lt = C.nf.z * Math.cos(D) + C.bf.z * Math.sin(D);
      let ht = 0;
      if (z > 0 && !C.brk) {
        const yt = E + nt * W,
          Ft = Y + it * W,
          Ut = et + lt * W,
          Lt =
            0.5 +
            0.5 * It(yt * 1.5 + Ft * 1.1 + b, Ut * 1.5 - Ft * 0.8 + b * 0.5);
        ((ht =
          z *
          mo(0.4, 0.54, Lt) *
          (x ? mo(-0.3, 0.5, nt * x.x + it * x.y + lt * x.z) : 1) *
          mo(0, 0.06, C.t) *
          (1 - mo(0.94, 1, C.t))),
          (W *= 1 - 0.035 * ht));
      }
      U(
        E + nt * W,
        Y + it * W,
        et + lt * W,
        F ? 0.31 + 0.015 * Math.cos(D) : (D - v * C.along) * G * a,
        F ? 0.62 + 0.015 * Math.sin(D) : C.along * a,
        j0(
          y * (0.45 + 0.55 * Math.max(0, it)) * (1 - ht),
          Math.max(Q, g + 0.05 * It(D * 1.7 + b, C.along * 0.8)),
          0.25,
          ht,
        ),
      );
    }
  if (i) {
    const C = K[O - 1];
    for (let T = 0; T <= e; T++) {
      const D = (T / e) * F0,
        N = o(1) * 0.06;
      U(
        c[h].x +
          (C.nf.x * Math.cos(D) + C.bf.x * Math.sin(D)) * N -
          M[h].x * 0.1,
        c[h].y +
          (C.nf.y * Math.cos(D) + C.bf.y * Math.sin(D)) * N -
          M[h].y * 0.1,
        c[h].z +
          (C.nf.z * Math.cos(D) + C.bf.z * Math.sin(D)) * N -
          M[h].z * 0.1,
        0.31,
        0.62,
        j0(0.02, 0.97),
      );
    }
  }
  const Z = q / (e + 1),
    ot = [];
  for (let C = 0; C < Z - 1; C++)
    for (let T = 0; T < e; T++) {
      const D = C * (e + 1) + T,
        N = D + e + 1;
      ot.push(D, N, D + 1, D + 1, N, N + 1);
    }
  const $ = new Rt();
  ($.setAttribute("position", new vt(J.subarray(0, q * 3), 3)),
    $.setAttribute("uv", new vt(tt.subarray(0, q * 2), 2)),
    $.setAttribute("aK", new vt(st.subarray(0, q * 3), 3)),
    $.setIndex(ot),
    $.computeVertexNormals());
  {
    const C = $.attributes.position,
      T = $.attributes.normal;
    let D = 0;
    const N = Math.floor(Z / 2) * (e + 1);
    for (let H = 0; H < e; H++) {
      const Q = N + H,
        W = c[Math.min(h, Math.floor(h / 2))];
      D +=
        (C.getX(Q) - W.x) * T.getX(Q) +
        (C.getY(Q) - W.y) * T.getY(Q) +
        (C.getZ(Q) - W.z) * T.getZ(Q);
    }
    if (D < 0) {
      const H = $.index.array;
      for (let Q = 0; Q < H.length; Q += 3) {
        const W = H[Q + 1];
        ((H[Q + 1] = H[Q + 2]), (H[Q + 2] = W));
      }
      $.computeVertexNormals();
    }
  }
  return { geo: $, C: c, T: M, L: l, R: o, n: h };
}
function Le(
  s,
  o,
  t,
  u,
  e,
  r,
  a,
  {
    steps: p = 7,
    crook: i = 0.22,
    sag: d = 0,
    ground: y = null,
    cap: w = !0,
    seg: g = 7,
    snap: z = !0,
  } = {},
) {
  const x = [s.clone()],
    v = o.clone().normalize(),
    n = s.clone();
  for (let h = 1; h <= p; h++) {
    (v
      .addScaledVector(at(r() - 0.5, (r() - 0.5) * 0.6 - d, r() - 0.5), i)
      .normalize(),
      n.addScaledVector(v, t / p));
    const c = u + (e - u) * (h / p);
    if (y) {
      const M = y(n.x, n.z) + c * 0.85;
      n.y < M && ((n.y = M), v.y < 0 && ((v.y *= 0.2), v.normalize()));
    }
    if (a && !a(n, c)) break;
    x.push(n.clone());
  }
  if (x.length < 2) return null;
  const l = (h) =>
      (u + ((e - u) * h * (x.length - 1)) / p) *
      (1 + 0.08 * Math.sin(h * 9 + u * 50)),
    f = Vt(x, (h) => l(h) + 0.004, g, { cap: w });
  if (w && z) {
    const h = f.attributes.position,
      c = x.length,
      M = (c - 1) * (g + 1),
      m = x[c - 1]
        .clone()
        .sub(x[c - 2])
        .normalize(),
      k = l(1);
    for (let A = 0; A <= g; A++) {
      const b =
        (A === 0 || A === g ? 0.3 : Math.pow(r(), 1.6)) * k * 2.6 - k * 0.3;
      h.setXYZ(
        M + A,
        h.getX(M + A) + m.x * b,
        h.getY(M + A) + m.y * b,
        h.getZ(M + A) + m.z * b,
      );
    }
    const S = h.count - 1;
    h.setXYZ(
      S,
      h.getX(S) - m.x * k * 0.5,
      h.getY(S) - m.y * k * 0.5,
      h.getZ(S) - m.z * k * 0.5,
    );
  }
  return { pts: x, rad: l, geo: f };
}
function Ua(s, o, t, u = []) {
  const e = o.map(([y, w, g, z, x]) => {
      const [v, n] = ze(s, y, g);
      return [v, n, w, z, x];
    }),
    r = u.map((y) => {
      const [w, g] = ze(s, y.x, y.z);
      return [w, g, 0.5, y.r, !1];
    }),
    a = [...e, ...r],
    p = (y, w) => {
      const [, g, z, x, v] = y,
        n = Math.abs(g - w) - x;
      return v
        ? z > 1.85 || n >= (z > 1.25 ? 0.2 : 0.45)
        : z - x > 1.95 || n >= 0.55;
    },
    i = (y, w, g, z) => t * xs((y - (w - z)) / z) * xs((g + z - y) / z);
  let d = null;
  for (const y of [7, 6.5, 7.5, 6, 8]) {
    let w = 1e9,
      g = -1e9;
    for (const v of a)
      p(v, 0) || ((w = Math.min(w, v[0])), (g = Math.max(g, v[0])));
    w > g && ((w = -0.5), (g = 0.5));
    for (let v = 0; v < 80; v++) {
      let n = null;
      for (const l of a)
        if (!p(l, i(l[0], w, g, y))) {
          n = l;
          break;
        }
      if (!n) break;
      n[0] < (w + g) / 2 ? (w -= 0.25) : (g += 0.25);
    }
    let z = 9;
    for (const v of a) {
      const [, n, l, f, h] = v;
      h ||
        l - f > 1.95 ||
        (z = Math.min(z, Math.abs(n - i(v[0], w, g, y)) - f));
    }
    if (z < 0.55) continue;
    const x = g - w + 2 * y;
    (!d || x < d.span - 0.5) &&
      (d = { ua: w, ub: g, ease: y, span: x, clear: z });
  }
  return (
    d || (d = { ua: -6, ub: 6, ease: 7, clear: 0 }),
    {
      s0: +(s.s + d.ua - d.ease).toFixed(2),
      s1: +(s.s + d.ub + d.ease).toFixed(2),
      ease: d.ease,
      off: t,
      ua: d.ua,
      ub: d.ub,
      clear: +d.clear.toFixed(2),
    }
  );
}
function ic(s, o) {
  const t = [],
    u = [],
    e = [],
    r = [],
    a = [],
    p = ($, C) => s.heightAt($, C),
    i = Nt.tree,
    d = Nt.log,
    y = ($, C, T, D = 0) => {
      const [N, H] = He($, C, T);
      return at(N, D, H);
    },
    w = [],
    g = ($, C, T, D = !1, N = 0.12) => {
      for (let H = 0; H < $.length - 1; H++) {
        const Q = $[H],
          W = $[H + 1],
          B = Math.max(1, Math.ceil(Q.distanceTo(W) / N));
        for (let F = 0; F <= B; F++) {
          const E = (H + F / B) / ($.length - 1),
            Y = Q.clone().lerp(W, F / B);
          T.push([Y.x, Y.y, Y.z, C(E), D]);
        }
      }
    },
    z = ($) =>
      i.gap * 1.25 * xs(($ + 3.6 + 6.5) / 6.5) * xs((3 + 6.5 - $) / 6.5),
    x = ($, C, T = !1) => {
      const [D, N] = ze(i, $.x, $.z),
        H = z(D),
        Q = (N - H) * -i.gap - C;
      return T
        ? $.y > 1.9 || Q >= ($.y > 1.25 ? 0.24 : 0.5)
        : $.y - C > 2.3 || Q >= 0.62;
    },
    v = ($, C) => x($, C),
    n = ($, C) => x($, C, !0),
    l = at(i.ux, 0, i.uz),
    f = at(i.vx, 0, i.vz).multiplyScalar(i.gap),
    h = at(0, 1, 0),
    c = ($, C, T, D = 0.36, N = !1) =>
      u.push({
        pos: $,
        along: C,
        size: T,
        cell: Bt.twigs,
        out: at(o() - 0.5, 0.5, o() - 0.5).normalize(),
        shade: D,
        vertical: N,
      }),
    M = y(i, i.plate.u, i.plate.v),
    m = y(i, i.tip.u, i.tip.v),
    k = m.clone().sub(M).setY(0).normalize(),
    S = at(k.z, 0, -k.x),
    A = p(M.x, M.z),
    b = i.plate.r,
    P = 1.7,
    _ = at(M.x, A + P * 0.6, M.z),
    I = h.clone().applyAxisAngle(S, -0.2),
    R = k.clone().applyAxisAngle(S, -0.2);
  {
    const T = o() * 30,
      D = [],
      N = [],
      H = [],
      Q = [],
      W = Array.from({ length: 5 }, () => ({
        a: o() * F0,
        w: 0.4 + o() * 0.5,
        h: (o() - 0.35) * 0.35,
      })),
      B = (Y) => {
        let et = 1 + 0.1 * It(Math.cos(Y) * 1.7 + T, Math.sin(Y) * 1.7);
        for (const nt of W)
          et += nt.h * Math.max(0, 1 - Math.abs(ls(Y - nt.a)) / nt.w);
        return et - 0.12 * Math.pow(Math.max(0, -Math.sin(Y)), 3);
      },
      F = (Y, et, nt) => {
        const it = B(et),
          lt = Math.cos(et) * b * Y * it,
          ht = Math.sin(et) * P * Y * it,
          yt =
            0.09 * It(lt * 2.3 + T, ht * 2.3) +
            0.05 * It(lt * 6.1, ht * 6.1 + T) +
            0.03 * It(lt * 13, ht * 13 - T),
          Ft =
            nt > 0
              ? 0.2 * (1 - Y * Y) + yt + 0.05
              : -(0.3 * (1 - Y * Y) + yt * 1.8 + 0.12);
        return _.clone()
          .addScaledVector(S, lt)
          .addScaledVector(I, ht)
          .addScaledVector(R, Ft * (Y < 0.999 ? 1 : 0.35));
      };
    for (const Y of [1, -1]) {
      const et = D.length / 3;
      for (let nt = 0; nt <= 10; nt++)
        for (let it = 0; it <= 44; it++) {
          const lt = nt / 10,
            ht = (it / 44) * F0,
            yt = F(lt, ht, Y);
          (D.push(yt.x, yt.y, yt.z),
            N.push(
              Math.cos(ht) * b * lt * 1.3,
              Math.sin(ht) * P * lt * 1.3 + _.y,
            ),
            H.push(0.78, 0.15 + 0.35 * lt * lt, 0.4, 0));
        }
      for (let nt = 0; nt < 10; nt++)
        for (let it = 0; it < 44; it++) {
          const lt = et + nt * 45 + it,
            ht = lt + 44 + 1;
          Y > 0
            ? Q.push(lt, ht, lt + 1, lt + 1, ht, ht + 1)
            : Q.push(lt, lt + 1, ht, lt + 1, ht + 1, ht);
        }
    }
    for (let nt = 0; nt < 44; nt++) {
      const it = 450 + nt,
        lt = 945 + nt;
      Q.push(it, lt, it + 1, it + 1, lt, lt + 1);
    }
    const E = new Rt();
    (E.setAttribute("position", new xt(D, 3)),
      E.setAttribute("uv", new xt(N, 2)),
      E.setAttribute("aMask", new xt(H, 4)),
      E.setIndex(Q),
      E.computeVertexNormals(),
      e.push(E));
    for (let Y = -b * 0.85; Y <= b * 0.86; Y += 0.5) {
      const et = _.clone().addScaledVector(S, Y);
      (a.push({ x: et.x, z: et.z, r: 0.45, obst: "tree" }),
        r.push({
          x0: et.x - 0.3,
          x1: et.x + 0.3,
          z0: et.z - 0.3,
          z1: et.z + 0.3,
          y0: 0,
          y1: _.y + P * 0.75,
          obst: "tree",
        }));
    }
    for (let Y = 0; Y <= 10; Y++) {
      const et = (Y / 10) * F0,
        nt = F(1, et, 1);
      w.push([nt.x, nt.y, nt.z, 0.25, !1]);
    }
    w.push([_.x, _.y, _.z, b, !1]);
    for (let Y = 0, et = 15; Y < et; Y++) {
      const nt = (Y / et) * F0 + (o() - 0.5) * 0.35,
        it = Y % 3 === 0,
        lt = it ? 0.08 + o() * 0.07 : 0.03 + o() * 0.04,
        ht = it ? 0.15 + o() * 0.25 : 0.3 + o() * 0.5,
        yt = _.clone()
          .addScaledVector(S, Math.cos(nt) * b * ht)
          .addScaledVector(I, Math.sin(nt) * P * ht)
          .addScaledVector(R, it ? 0.28 : 0.2),
        Ft = S.clone()
          .multiplyScalar(Math.cos(nt))
          .addScaledVector(I, Math.sin(nt))
          .addScaledVector(R, 0.15 + o() * 0.35)
          .normalize(),
        Ut = Le(
          yt,
          Ft,
          b * (it ? 1.05 + o() * 0.5 : 0.7 + o() * 0.7),
          lt,
          lt * 0.3,
          o,
          null,
          { steps: 6, crook: 0.32, sag: 0.3, seg: it ? 7 : 5 },
        );
      Ut &&
        (t.push(xe(Ut.geo, () => j0(0.1, 0.55))), g(Ut.pts, Ut.rad, w, !it));
    }
    for (let Y = 0; Y < 34; Y++) {
      const et = o() * F0,
        nt = 0.95 + o() * 0.15,
        it = Y % 4 === 0,
        lt = _.clone()
          .addScaledVector(S, Math.cos(et) * b * (it ? nt * 0.6 : nt))
          .addScaledVector(I, Math.sin(et) * P * (it ? nt * 0.6 : nt))
          .addScaledVector(R, it ? 0.25 : 0),
        ht = S.clone()
          .multiplyScalar(Math.cos(et))
          .addScaledVector(I, Math.sin(et))
          .addScaledVector(R, (o() - 0.3) * 0.7)
          .normalize();
      c(
        lt,
        ht
          .clone()
          .add(at(0, -0.3, 0))
          .normalize(),
        0.5 + o() * 0.45,
        0.24 + o() * 0.1,
        !0,
      );
    }
  }
  const V = 0.6,
    L = 0.46,
    K = 0.32 + L,
    j = [];
  {
    const $ = _.clone().addScaledVector(R, 0.05),
      C = at(m.x, K, m.z);
    for (let T = 0; T <= 10; T++) {
      const D = T / 10,
        N = $.clone().lerp(C, D);
      ((N.y += Math.sin(Math.PI * D) * 0.12 - D * (1 - D) * 0.12),
        N.addScaledVector(S, Math.sin(Math.PI * D) * 0.16),
        j.push(N));
    }
  }
  const O = ($) =>
      (V + (L - V) * Math.pow($, 0.8)) *
      (1 + 0.42 * Math.exp((-$ * 6.2) / 0.6)),
    J = Cs(j, O, o, {
      seg: 32,
      step: 0.12,
      ridgeA: 0.12,
      endBreak: !0,
      moss: 0.6,
      teeth: 1,
      bare: 0.9,
      bareDir: l.clone().negate().addScaledVector(h, 0.6).normalize(),
    });
  t.push(J.geo);
  for (let $ = 0; $ <= J.n; $++) {
    const C = $ / J.n,
      T = J.C[$];
    w.push([T.x, T.y, T.z, O(C) * 1.13, !1]);
  }
  for (let $ = 0; $ <= J.n; $ += 3) {
    const C = $ / J.n,
      T = J.C[$];
    a.push({ x: T.x, z: T.z, r: O(C) + 0.05, obst: "tree" });
  }
  for (let $ = 0; $ < J.n; $ += 4) {
    const C = J.C[$],
      T = J.C[Math.min(J.n, $ + 4)],
      D = O($ / J.n) * 0.72;
    r.push({
      x0: Math.min(C.x, T.x) - D * 0.6,
      x1: Math.max(C.x, T.x) + D * 0.6,
      z0: Math.min(C.z, T.z) - D * 0.6,
      z1: Math.max(C.z, T.z) + D * 0.6,
      y0: Math.max(0, Math.min(C.y, T.y) - D),
      y1: Math.max(C.y, T.y) + D,
      obst: "tree",
    });
  }
  const tt = ($, C) => {
    const T = Math.min(J.n, Math.round($ * J.n));
    return J.C[T].clone().addScaledVector(C, O($) * 0.82);
  };
  for (let $ = 0; $ < 6; $++) {
    const C = 0.18 + $ * 0.1 + o() * 0.05,
      T = at(o() - 0.5, 0.55 + o() * 0.6, o() - 0.5).normalize(),
      D = Le(
        tt(C, T),
        T.clone()
          .add(at((o() - 0.5) * 0.4, 0.2, (o() - 0.5) * 0.4))
          .normalize(),
        0.3 + o() * 0.6,
        0.07 + o() * 0.05,
        0.05,
        o,
        v,
        { steps: 3, crook: 0.15, seg: 8 },
      );
    D && (t.push(xe(D.geo, () => j0(0.5, 0.06))), g(D.pts, D.rad, w));
  }
  {
    const $ = [],
      C = [
        { t: 0.86, d: [0.8, -0.55, -0.12], L: 4.4, r0: 0.21, sag: 0.35 },
        { t: 0.93, d: [-0.85, -0.45, -0.1], L: 3.8, r0: 0.19, sag: 0.35 },
        { t: 0.9, d: [0.2, -0.2, 0.95], L: 4.4, r0: 0.21, sag: -0.04 },
        { t: 0.97, d: [-0.5, -0.15, 0.8], L: 3.6, r0: 0.17, sag: -0.03 },
        { t: 0.88, d: [0.55, -0.35, 0.75], L: 3.8, r0: 0.15, sag: -0.02 },
        { t: 0.72, d: [-0.2, -0.55, 0.8], L: 3.4, r0: 0.14, sag: -0.02 },
        { t: 0.8, d: [0.4, -0.65, 0.55], L: 3.2, r0: 0.16, sag: 0.06 },
        { t: 0.83, d: [-0.45, -0.6, 0.55], L: 2.8, r0: 0.14, sag: 0.06 },
        { t: 0.99, d: [0.9, -0.1, 0.15], L: 3, r0: 0.13, sag: 0.12 },
        { t: 0.95, d: [0.1, -0.15, -1], L: 0.85, r0: 0.16, sag: 0, prop: !0 },
        {
          t: 0.76,
          d: [-0.1, -0.3, -0.95],
          L: 0.95,
          r0: 0.13,
          sag: 0,
          prop: !0,
        },
      ],
      T = ([N, H, Q]) =>
        l
          .clone()
          .multiplyScalar(N)
          .addScaledVector(f, H)
          .addScaledVector(h, Q)
          .normalize(),
      D = (N, H, Q, W, B, F, E, Y) =>
        Le(N, H, Q, W, B, o, v, {
          steps: E,
          crook: 0.17,
          sag: F,
          ground: p,
          seg: Y,
        });
    for (const N of C) {
      const H = T(N.d),
        Q = H.clone()
          .setY(N.prop ? -1 : Math.max(0, H.y) * 0.6)
          .normalize(),
        W = D(
          tt(N.t, Q),
          H,
          N.L,
          N.r0,
          N.r0 * 0.38,
          N.sag,
          N.prop ? 3 : 8,
          N.r0 > 0.15 ? 10 : 8,
        );
      if (W) {
        (t.push(xe(W.geo, (B, F) => j0(0.3 + 0.3 * Math.max(0, 1 - F), 0.06))),
          g(W.pts, W.rad, w));
        for (let B = 1; B < W.pts.length; B += 2) {
          const F = W.pts[B];
          F.y < 1.1 &&
            a.push({
              x: F.x,
              z: F.z,
              r: W.rad(B / (W.pts.length - 1)) + 0.18,
              obst: "tree",
            });
        }
        if (!N.prop) {
          for (let B = 0, F = 3 + Math.floor(o() * 2); B < F; B++) {
            const E = 1 + Math.floor(o() * (W.pts.length - 1)),
              Y = W.pts[Math.min(W.pts.length - 1, E)],
              et = H.clone()
                .add(
                  at(o() - 0.5, o() * 0.9 - 0.15, o() - 0.5).multiplyScalar(
                    1.3,
                  ),
                )
                .normalize(),
              nt = D(Y, et, 1 + o() * 1.1, 0.065, 0.025, 0.1, 5, 6);
            nt &&
              (t.push(xe(nt.geo, () => j0(0.25, 0.05))),
              g(nt.pts, nt.rad, w),
              $.push(
                nt.pts[nt.pts.length - 1].clone(),
                nt.pts[Math.max(0, nt.pts.length - 3)].clone(),
              ));
          }
          $.push(W.pts[W.pts.length - 1].clone());
        }
      }
    }
    {
      const H = [
          tt(0.975, h.clone().addScaledVector(f, 0.3).normalize()),
          y(i, i.tip.u + 0.4, (i.tip.v - 0.25) * i.gap, 3.9),
          y(i, i.tip.u + 1.6, (i.gap * i.tip.v + 3) * i.gap, 3),
        ],
        Q = [];
      for (let E = 0; E <= 12; E++) {
        const Y = E / 12,
          et = (1 - Y) * (1 - Y),
          nt = 2 * (1 - Y) * Y,
          it = Y * Y,
          lt = H[0]
            .clone()
            .multiplyScalar(et)
            .addScaledVector(H[1], nt)
            .addScaledVector(H[2], it);
        (E > 0 &&
          E < 12 &&
          lt.add(at((o() - 0.5) * 0.14, (o() - 0.5) * 0.1, (o() - 0.5) * 0.14)),
          Q.push(lt));
      }
      const W = (E) => (0.17 - 0.12 * E) * (1 + 0.07 * Math.sin(E * 13));
      let B = Q.length;
      for (let E = 1; E < Q.length; E++)
        if (!(
          Q[E].y - W(E / (Q.length - 1)) > 2.32 ||
          x(Q[E], W(E / (Q.length - 1)))
        )) {
          B = E;
          break;
        }
      const F = Q.slice(0, Math.max(2, B));
      if (F.length > 3) {
        const E = Vt(F, (Y) => W((Y * (F.length - 1)) / 12) + 0.004, 10, {
          cap: !0,
        });
        (t.push(xe(E, () => j0(0.4, 0.06))),
          g(F, (Y) => W((Y * (F.length - 1)) / 12), w));
        for (const Y of [
          Math.floor(F.length * 0.55),
          Math.floor(F.length * 0.75),
          F.length - 1,
        ])
          $.push(F[Y].clone());
        for (let Y = 0; Y < 2; Y++) {
          const et = F[3 + Y * 3],
            nt = Le(
              et,
              at(o() - 0.5, 0.8, o() - 0.5).normalize(),
              0.8 + o() * 0.8,
              0.05,
              0.02,
              o,
              v,
              { steps: 4, crook: 0.3, seg: 6 },
            );
          nt &&
            (t.push(xe(nt.geo, () => j0(0.3, 0.05))),
            g(nt.pts, nt.rad, w),
            $.push(nt.pts[nt.pts.length - 1].clone()));
        }
      }
    }
    for (const N of $) {
      for (let H = 0, Q = 2 + Math.floor(o() * 3); H < Q; H++) {
        const W = Le(
          N,
          at(o() - 0.5, o() * 0.8 - 0.15, o() - 0.5).normalize(),
          0.35 + o() * 0.55,
          0.018,
          0.005,
          o,
          n,
          { steps: 4, crook: 0.42, seg: 4, snap: !1 },
        );
        W && (t.push(xe(W.geo, () => j0(0.1, 0))), g(W.pts, W.rad, w, !0));
      }
      for (let H = 0; H < 5; H++) {
        const Q = N.clone().add(
          at((o() - 0.5) * 0.8, (o() - 0.35) * 0.6, (o() - 0.5) * 0.8),
        );
        !n(Q, 0.4) ||
          Q.y < p(Q.x, Q.z) + 0.2 ||
          c(
            Q,
            at(o() - 0.5, o() * 0.7 - 0.15, o() - 0.5).normalize(),
            0.65 + o() * 0.6,
            0.28 + o() * 0.14,
          );
      }
    }
    for (let N = 0; N < 6; N++) {
      const H = -1.9 + N * 0.85 + (o() - 0.5) * 0.4,
        Q = z(H) * i.gap,
        W = y(i, H, (Q - 1.32 - o() * 0.3) * i.gap, 1.22 + o() * 0.5),
        B = f
          .clone()
          .add(at((o() - 0.5) * 0.25, (o() - 0.35) * 0.3, 0))
          .addScaledVector(l, (o() - 0.5) * 0.45)
          .normalize(),
        F = Le(W, B, 0.9 + o() * 0.3, 0.016, 0.004, o, n, {
          steps: 5,
          crook: 0.22,
          seg: 4,
          snap: !1,
        });
      F &&
        (t.push(xe(F.geo, () => j0(0.08, 0))),
        g(F.pts, F.rad, w, !0),
        c(
          F.pts[Math.max(1, F.pts.length - 2)].clone(),
          B,
          0.55 + o() * 0.25,
          0.3,
        ));
      const E = Le(
        W,
        B.clone()
          .negate()
          .add(at(0, -0.4, 0))
          .normalize(),
        1.2,
        0.012,
        0.04,
        o,
        v,
        { steps: 4, crook: 0.2, ground: p, seg: 5, snap: !1 },
      );
      E && (t.push(xe(E.geo, () => j0(0.15, 0))), g(E.pts, E.rad, w));
    }
    for (let N = Math.floor(J.n * 0.7); N <= J.n; N += 2) {
      const H = J.C[N];
      a.push({ x: H.x, z: H.z, r: O(N / J.n) + 0.12, obst: "tree" });
    }
    for (const [N, H] of [
      [0.6, -1.4],
      [-1.4, -1.5],
      [1.6, -2],
      [-2.4, -2.1],
      [-0.2, -0.7],
    ]) {
      const Q = y(i, N, H * i.gap);
      a.push({ x: Q.x, z: Q.z, r: 0.42, obst: "tree" });
    }
  }
  const st = ys.gRoot,
    G = {
      name: "gRoot",
      x: st[0][0],
      z: st[0][1],
      yaw: +Math.atan2(st[1][0] - st[0][0], st[1][1] - st[0][1]).toFixed(3),
      s: i.s,
      route: s.routeIndexAtS(i.s),
      side: i.gap > 0 ? "R" : "L",
      tree: [+_.x.toFixed(2), +_.z.toFixed(2), b],
      out: st[st.length - 1].slice(),
      plate: !0,
    },
    q = {
      o: i,
      kind: "tree",
      ...Ua(
        i,
        w,
        i.gap * 1.25,
        a.filter(($) => $.obst === "tree"),
      ),
    };
  {
    let $ = 0,
      C = 0,
      T = 0;
    for (const [D, N, H, , Q] of w) {
      if (Q || N > 2) continue;
      const [W, B] = ze(i, D, H);
      Math.abs(B) > 3 || Math.abs(W) > 4 || (($ += D), (C += H), T++);
    }
    q.at = [$ / Math.max(1, T), C / Math.max(1, T)];
  }
  const U = [],
    Z = [];
  let ot = null;
  {
    const $ = (d.ang * Math.PI) / 180,
      C = Math.cos($),
      T = Math.sin($),
      D = 3.1,
      N = d.r,
      H = [];
    for (let F = 0; F <= 12; F++) {
      const E = F / 12,
        Y = -D + 2 * D * E,
        et = y(d, C * Y, T * Y);
      (et.addScaledVector(
        at(d.ux, 0, d.uz),
        0.16 * Math.sin(Math.PI * E) + 0.04 * Math.sin(E * 9.4),
      ),
        (et.y =
          N +
          Math.max(0, Math.min(0.12, p(et.x, et.z))) +
          0.015 * Math.sin(E * 7)),
        H.push(et));
    }
    const Q = Cs(
      H,
      (F) => N * (1.06 - 0.16 * F) * (1 + 0.06 * Math.sin(F * 11)),
      o,
      {
        seg: 22,
        step: 0.12,
        ridgeA: 0.08,
        endBreak: !0,
        startBreak: !0,
        moss: 0.7,
        teeth: 0.5,
        bare: 0.8,
        bareDir: at(-d.ux, 0.7, -d.uz).normalize(),
      },
    );
    for (const F of [-2.35, -1.7, 1.55, 2.45]) {
      const E = y(d, C * F, T * F),
        Y = at(d.ux * 0.55, 1, d.uz * 0.55).normalize();
      Z.push([
        E.x + Y.x * N * 0.9,
        N + Y.y * N * 0.92 - 0.02,
        E.z + Y.z * N * 0.9,
      ]);
    }
    t.push(Q.geo);
    for (const [F, E, Y] of [
      [2.15, 0.6, 0.32],
      [-2.5, -0.9, 0.42],
      [1.2, 2.6, 0.22],
    ]) {
      const et = y(d, C * F, T * F, N),
        nt = at(Math.cos(E) * 0.4, 0.9, Math.sin(E) * 0.4).normalize(),
        it = Le(
          et.clone().addScaledVector(nt, N * 0.7),
          nt,
          Y,
          0.045,
          0.03,
          o,
          null,
          { steps: 3, crook: 0.2, seg: 6 },
        );
      it && t.push(xe(it.geo, () => j0(0.4, 0.1)));
    }
    {
      const F = y(d, C * (D + 0.9) + 0.6, T * (D + 0.9), 0.16),
        E = y(d, C * (D + 2.3) + 1.4, T * (D + 2.1), 0.15);
      ((F.y = p(F.x, F.z) + 0.14), (E.y = p(E.x, E.z) + 0.13));
      const Y = Cs([F, E], () => 0.15, o, {
        seg: 14,
        step: 0.12,
        ridgeA: 0.06,
        endBreak: !0,
        startBreak: !0,
        moss: 0.6,
        teeth: 0.4,
      });
      t.push(Y.geo);
    }
    let W = 0;
    {
      const F = Q.geo.attributes.position;
      for (let E = 0; E < F.count; E++) {
        const [Y, et] = ze(d, F.getX(E), F.getZ(E));
        Math.abs(et) < 0.5 && (W = Math.max(W, F.getY(E)));
      }
    }
    const B = -N / Math.max(0.2, Math.sin($));
    ot = {
      o: d,
      s: +(d.s + B).toFixed(2),
      h: +W.toFixed(2),
      at: [+d.x.toFixed(2), +d.z.toFixed(2)],
    };
    for (let F = 0; F <= Q.n; F++) {
      const E = Q.C[F];
      U.push([E.x, E.y, E.z, N, !1]);
    }
  }
  return {
    bark: t,
    cards: u,
    earth: e,
    colliders: r,
    circles: a,
    solids: { tree: w, log: U },
    lurk: G,
    dodge: q,
    jump: ot,
    mush: Z,
    plate: { x: _.x, z: _.z, r: b },
  };
}
function lc() {
  const s = At("forest_floor"),
    o = At("forest_path"),
    t = At("garden_moss"),
    u = {
      tPath: { value: o.map },
      tPathN: { value: o.normalMap },
      tMoss: { value: t.map },
      tMossN: { value: t.normalMap },
    };
  return i0(s, "ground", (r) => {
    (Object.assign(r.uniforms, u),
      (r.vertexShader = r.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute vec4 aMask;
varying vec4 vMask;
varying vec2 vGUv;`,
        )
        .replace(
          "#include <uv_vertex>",
          `#include <uv_vertex>
vMask = aMask; vGUv = uv;`,
        )),
      (r.fragmentShader = r.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
uniform sampler2D tPath, tPathN, tMoss, tMossN;
varying vec4 vMask;
varying vec2 vGUv;
float gH(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float gN(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(gH(i), gH(i + vec2(1, 0)), f.x), mix(gH(i + vec2(0, 1)), gH(i + vec2(1, 1)), f.x), f.y); }
float pathK, mossK;`,
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
      {
        float n1 = gN(vGUv * 1.7) * 0.6 + gN(vGUv * 5.3) * 0.4;
        pathK = smoothstep(0.4, 0.62, vMask.x + (n1 - 0.5) * 0.45);
        mossK = smoothstep(0.35, 0.7, vMask.y + (gN(vGUv * 0.9 + 7.0) - 0.5) * 0.5) * (1.0 - pathK);
        vec3 pc = texture2D(tPath, vGUv * 0.5).rgb;
        vec3 mc = texture2D(tMoss, vGUv / 1.6).rgb;
        diffuseColor.rgb = mix(diffuseColor.rgb, mc, mossK * 0.9);
        // the grassy soil of the churchyard and the clearing (the blades stand on it)
        diffuseColor.rgb = mix(diffuseColor.rgb, mix(vec3(0.018, 0.024, 0.01), mc * 0.7, 0.4), vMask.w * (1.0 - pathK) * 0.75);
        diffuseColor.rgb = mix(diffuseColor.rgb, pc, pathK);
        // wet near the water: darker, glossier
        diffuseColor.rgb *= 1.0 - 0.45 * vMask.z;
      }`,
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor, 0.78, pathK) * (1.0 - 0.45 * vMask.z);`,
        )
        .replace(
          "#include <normal_fragment_maps>",
          `#include <normal_fragment_maps>
      {
        vec3 nF = texture2D(normalMap, vNormalMapUv).xyz * 2.0 - 1.0;
        vec3 nP = texture2D(tPathN, vGUv * 0.5).xyz * 2.0 - 1.0;
        vec3 nM = texture2D(tMossN, vGUv / 1.6).xyz * 2.0 - 1.0;
        vec3 nB = mix(mix(nF, nM, mossK), nP, pathK);
        nB.xy *= normalScale;
        normal = normalize(tbn * nB);
      }`,
        )));
  });
}
function hc(s, o) {
  const t = new Kt();
  t.name = "forest_ground";
  const u = lc(),
    e = [],
    r = 0.4,
    a = -52,
    p = 52,
    i = 62,
    d = 216.4,
    y = o.heightAt,
    w = (n, l, f) => {
      if (l < St.z + 0.25 && n > St.xW - 0.3 && n < St.xE + 0.3)
        return [0, 0.15 + 0.3 * (0.5 + 0.5 * It(n * 0.4, l * 0.4)), 0, 1];
      const h = o.dPathAt(n, l),
        c = o.sPathAt(n, l),
        M = o.pw(c);
      let m = 1 - $t(M - 0.3, M + 0.35, h);
      const k = Math.hypot((n - 6) / 5.2, (l - 197.6) / 2.6);
      ((m = Math.max(m, (1 - $t(0.6, 1.1, k)) * 0.8)),
        o.trodAt && (m = Math.max(m, o.trodAt(n, l) * 0.95)),
        n > _t.x0 - 0.2 &&
          n < _t.x1 + 0.2 &&
          l > _t.z0 - 0.2 &&
          l < _t.z1 + 0.2 &&
          (m = 0.5));
      const S = o.dStreamAt(n, l),
        A = S < 3.2 ? 1 - $t(1.2, 3.2, S) : 0,
        b =
          $t(0.25, 1.6, Math.abs(f)) * 0.6 +
          (S < 5 ? $t(4.6, 2.5, S) * 0.8 : 0),
        P = Math.min(
          1,
          b +
            0.45 * Math.max(0, It(n * 0.23 + 3, l * 0.23 - 1)) +
            0.25 * (0.5 + 0.5 * It(n * 0.9, l * 0.9)) * 0.5,
        ),
        _ = o.clearingSd(n, l),
        I = _ < 0 ? $t(0, -3, _) * (1 - m) : 0;
      return [m, P, A, I];
    },
    g = (n, l, f) => {
      const c = y(n - 0.2, l),
        M = y(n + 0.2, l),
        m = y(n, l - 0.2),
        k = y(n, l + 0.2);
      return (f.set(c - M, 2 * 0.2, m - k).normalize(), f);
    },
    z = new dt(),
    x = 26,
    v = 26.4;
  for (let n = i; n < d - 0.01; n += v)
    for (let l = a; l < p - 0.01; l += x) {
      const f = Math.round(x / r) + 1,
        h = Math.round(v / r) + 1,
        c = f * h,
        M = new Float32Array(c * 3),
        m = new Float32Array(c * 3),
        k = new Float32Array(c * 2),
        S = new Float32Array(c * 4);
      for (let _ = 0; _ < h; _++)
        for (let I = 0; I < f; I++) {
          const R = _ * f + I,
            V = l + I * r,
            L = n + _ * r,
            K = y(V, L);
          ((M[R * 3] = V),
            (M[R * 3 + 1] = K),
            (M[R * 3 + 2] = L),
            g(V, L, z),
            (m[R * 3] = z.x),
            (m[R * 3 + 1] = z.y),
            (m[R * 3 + 2] = z.z),
            (k[R * 2] = V),
            (k[R * 2 + 1] = -L),
            S.set(w(V, L, K), R * 4));
        }
      const A = [];
      for (let _ = 0; _ < h - 1; _++)
        for (let I = 0; I < f - 1; I++) {
          const R = l + (I + 0.5) * r,
            V = n + (_ + 0.5) * r;
          if (
            (V < 62.05 && Math.abs(R) < 7.2) ||
            (R > _t.x0 + 0.4 &&
              R < _t.x1 - 0.4 &&
              V > _t.z0 + 0.4 &&
              V < _t.z1 - 0.4)
          )
            continue;
          const L = _ * f + I,
            K = L + 1,
            j = L + f,
            O = j + 1;
          Math.abs(M[L * 3 + 1] - M[O * 3 + 1]) <
          Math.abs(M[K * 3 + 1] - M[j * 3 + 1])
            ? A.push(L, j, O, L, O, K)
            : A.push(L, j, K, K, j, O);
        }
      const b = new Rt();
      (b.setAttribute("position", new vt(M, 3)),
        b.setAttribute("normal", new vt(m, 3)),
        b.setAttribute("uv", new vt(k, 2)),
        b.setAttribute("aMask", new vt(S, 4)),
        b.setIndex(A),
        b.computeBoundingSphere(),
        b.computeBoundingBox());
      const P = new bt(b, u);
      ((P.name = "forest_ground_chunk"),
        (P.receiveShadow = !0),
        (P.castShadow = !0),
        t.add(P),
        e.push({
          mesh: P,
          cx: l + x / 2,
          cz: n + v / 2,
          r: Math.hypot(x, v) / 2,
        }));
    }
  {
    const M = Math.round(86.66666666666667) + 1,
      m = Math.round(268 / 3) + 1,
      k = new Float32Array(M * m * 3),
      S = new Float32Array(M * m * 3),
      A = new Float32Array(M * m * 2),
      b = new Float32Array(M * m * 4);
    for (let R = 0; R < m; R++)
      for (let V = 0; V < M; V++) {
        const L = R * M + V,
          K = -130 + V * 3,
          j = 62 + R * 3,
          J =
            K > a + 1 && K < p - 1 && j > i + 1 && j < d - 1
              ? y(K, j) - 0.25
              : o.natural(K, j) * $t(62, 80, j) -
                (K > a - 2 && K < p + 2 && j < d + 2 ? 0.08 : 0);
        ((k[L * 3] = K),
          (k[L * 3 + 1] = J),
          (k[L * 3 + 2] = j),
          (S[L * 3 + 1] = 1),
          (A[L * 2] = K),
          (A[L * 2 + 1] = -j),
          b.set([0, 0.4 + 0.3 * It(K * 0.1, j * 0.1), 0, 0], L * 4));
      }
    const P = [];
    for (let R = 0; R < m - 1; R++)
      for (let V = 0; V < M - 1; V++) {
        const L = -130 + (V + 0.5) * 3,
          K = 62 + (R + 0.5) * 3;
        if (
          (L > a + 3 && L < p - 3 && K > i + 3 && K < d - 3) ||
          (K < 77 && Math.abs(L) < 36)
        )
          continue;
        const j = R * M + V,
          O = j + 1,
          J = j + M,
          tt = J + 1;
        P.push(j, J, O, O, J, tt);
      }
    const _ = new Rt();
    (_.setAttribute("position", new vt(k, 3)),
      _.setAttribute("normal", new vt(S, 3)),
      _.setAttribute("uv", new vt(A, 2)),
      _.setAttribute("aMask", new vt(b, 4)),
      _.setIndex(P),
      _.computeVertexNormals(),
      _.computeBoundingSphere());
    const I = new bt(_, u);
    ((I.name = "forest_ground_far"), (I.receiveShadow = !0), t.add(I));
  }
  return { group: t, chunks: e, material: u };
}
const qe = Math.PI * 2,
  zo = 40,
  uc = [47, 92, 149, 182, 240],
  fc = 36.4,
  dc = 160,
  xa = (s, o) =>
    0.9 +
    0.055 * Math.sin(s * 7.3 + o * 1.7) +
    0.035 * Math.sin(s * 13.1 + o * 3.1) * Math.sin(s * 2.3 + o) +
    0.02 * Math.sin(s * 23 + o * 5.3),
  pc =
    "float lampFlicker(float t, float i) { return 0.9 + 0.055 * sin(t * 7.3 + i * 1.7) + 0.035 * sin(t * 13.1 + i * 3.1) * sin(t * 2.3 + i) + 0.02 * sin(t * 23.0 + i * 5.3); }";
function Ea(s) {
  const o = [];
  (o.push({ kind: "wall", x: 5.62, z: 62, face: 0, y: 2.02 }),
    o.push({ kind: "gate", x: U0.x1 + 0.3, z: St.z + 0.3, face: 0, y: 1.78 }));
  {
    const x = b0.x + Math.sin(b0.yaw) * 0.23,
      v = b0.z + Math.cos(b0.yaw) * 0.23;
    o.push({
      kind: "angel",
      x,
      z: v,
      face: b0.yaw,
      y: 2.06,
      hang: [x, 2.31, v],
    });
  }
  const t = s.S,
    u = (x) => de.find((v) => v.name === x),
    e = (x) => {
      const v = s.at(x.s);
      return (x.x - v.x) * v.tz - (x.z - v.z) * v.tx > 0 ? -1 : 1;
    },
    r = [
      { s: t.gate + 4.5, sd: 1 },
      { s: u("lookBack").s, sd: e(u("lookBack")) },
      { s: u("e2").s + 1.5, sd: e(u("e2")) },
      { s: t.bridgeN - 9, sd: 1 },
      { s: t.end - 8, sd: 1, clearing: !0 },
    ],
    a = (x, v) => {
      for (const n in be) {
        const l = be[n];
        for (let f = 0; f < l.length - 1; f++)
          if (fe(x, v, l[f][0], l[f][1], l[f + 1][0], l[f + 1][1]) < 1.5)
            return !1;
      }
      for (const n of je)
        if (Math.hypot(x - n.x, v - n.z) < n.r * 1.12 + 1.3) return !1;
      return !0;
    };
  let p = 1;
  const i = (x) =>
    (x > Nt.tree.s - 16 && x < Nt.tree.s + 13) ||
    (x > Nt.cart.s - 15 && x < Nt.cart.s + 12) ||
    Math.abs(x - Nt.log.s) < 5;
  for (let x = t.gate + 11; x < t.end - 8; x += 11.2) {
    if (
      (x > t.bridgeN - 6 && x < t.bridgeS + 5) ||
      i(x) ||
      r.some((k) => Math.abs(k.s - x) < 4)
    )
      continue;
    const v = s.at(x - 4),
      n = s.at(x + 4),
      l = v.tx * n.tz - v.tz * n.tx,
      f = Math.abs(l) > 0.12 ? (l > 0 ? -1 : 1) : p;
    let h = x;
    for (const k of [0, 1.2, -1.2, 2.4, -2.4, 3.4, -3.4]) {
      if (i(x + k)) continue;
      const S = s.at(x + k);
      if (a(S.x - S.tz * f * 1.85, S.z + S.tx * f * 1.85)) {
        h = x + k;
        break;
      }
    }
    const c = s.at(h),
      M = -c.tz * f,
      m = c.tx * f;
    (o.push({
      kind: "post",
      x: c.x + M * 1.85,
      z: c.z + m * 1.85,
      face: Math.atan2(-M, -m),
      y: 1.62,
      s: h,
    }),
      (p = -f));
  }
  for (const x of r) {
    const v = s.at(x.s),
      n = -v.tz * x.sd,
      l = v.tx * x.sd;
    o.push({
      kind: "stone",
      x: v.x + n * 2.05,
      z: v.z + l * 2.05,
      face: Math.atan2(-n, -l),
      y: 0.86,
      s: x.s,
      clearing: !!x.clearing,
    });
  }
  (o.push({
    kind: "bridge",
    x: Tt.x + 0.8,
    z: Tt.z0 + 0.3,
    face: -Math.PI / 2,
    y: 1.62,
    s: t.bridgeN,
  }),
    o.push({
      kind: "bridge",
      x: Tt.x - 0.8,
      z: Tt.z1 - 0.3,
      face: Math.PI / 2,
      y: 1.62,
      s: t.bridgeS,
      south: !0,
    }),
    o.sort(
      (x, v) =>
        (x.s == null ? x.z - 1e4 : x.s) - (v.s == null ? v.z - 1e4 : v.s),
    ));
  const d = o.filter((x) => x.kind === "post"),
    y = (x) =>
      d.reduce((v, n) => (Math.abs(n.s - x) < Math.abs(v.s - x) ? n : v), d[0]),
    w = new Set(uc.map(y)),
    g = y(fc),
    z = y(dc);
  for (const x of o)
    (x.kind === "wall" || x.kind === "gate" || x.kind === "angel"
      ? (x.fate = "lit")
      : x.kind === "bridge"
        ? (x.fate = x.south ? "dead" : "lit")
        : x.kind === "stone"
          ? (x.fate = x.clearing ? "lit" : "dead")
          : w.has(x)
            ? (x.fate = "lit")
            : x === g
              ? (x.fate = "smashed")
              : x === z
                ? (x.fate = "gone")
                : (x.fate = "dead"),
      (x.lit = x.fate === "lit"));
  return o.slice(0, zo);
}
function mc() {
  const s = [],
    o = [],
    t = [],
    u = [];
  for (let a = 0; a <= 10; a++) {
    const p = a / 10,
      i = -0.075 + p * 0.15,
      d = 0.032 + 0.034 * Math.sin(Math.PI * p) ** 0.8;
    u.push(new re(d, i));
  }
  (o.push(new ro(u, 16)),
    s.push(new Pt(0.052, 0.062, 0.05, 16).translate(0, -0.1, 0)),
    s.push(new Pt(0.036, 0.052, 0.02, 16).translate(0, -0.07, 0)),
    s.push(new Pt(0.02, 0.062, 0.045, 16).translate(0, 0.098, 0)),
    s.push(new Pt(0.018, 0.02, 0.03, 10).translate(0, 0.134, 0)));
  for (let a = 0; a < 4; a++) {
    const p = (a * qe) / 4 + 0.4,
      i = [];
    for (let d = 0; d <= 6; d++) {
      const y = d / 6,
        w = -0.078 + y * 0.158,
        g = 0.04 + 0.034 * Math.sin(Math.PI * y) ** 0.8 + 0.004;
      i.push(at(Math.cos(p) * g, w, Math.sin(p) * g));
    }
    s.push(Vt(i, () => 0.0028, 4));
  }
  for (const a of [-0.02, 0.03])
    s.push(
      new s0(0.069, 0.0028, 4, 20).rotateX(Math.PI / 2).translate(0, a, 0),
    );
  const e = [];
  for (let a = 0; a <= 10; a++) {
    const p = (Math.PI * a) / 10;
    e.push(at(Math.cos(p) * 0.066, 0.1 + Math.sin(p) * 0.1, 0));
  }
  s.push(Vt(e, () => 0.0025, 4));
  const r = [];
  for (let a = 0; a <= 8; a++) {
    const p = a / 8;
    r.push(
      new re(
        0.011 * Math.sin(Math.PI * Math.pow(p, 0.7)) + 5e-4,
        -0.03 + p * 0.055,
      ),
    );
  }
  return (
    t.push(new ro(r, 8)),
    {
      metal: s.map((a) => d0((a.index, a), ["position", "normal", "uv"])),
      glass: o,
      flame: t,
      prof: u,
    }
  );
}
function qa(s, o = 1) {
  const t = s.attributes.position,
    u = new Float32Array(t.count);
  for (let e = 0; e < t.count; e++)
    u[e] = -1 - 0.98 * Math.max(0, Math.min(1, (t.getY(e) + 0.075) / 0.15)) * o;
  return (s.setAttribute("aLamp", new vt(u, 1)), s);
}
function xc(s, o) {
  const t = [],
    u = [],
    e = new wt()
      .makeRotationZ(Math.PI / 2 - 0.12)
      .premultiply(new wt().makeTranslation(0, 0.058, 0));
  for (const a of s.metal.slice(0, 2)) t.push(a.clone().applyMatrix4(e));
  {
    const a = s.metal[2]
      .clone()
      .applyMatrix4(new wt().makeRotationZ(0.5))
      .applyMatrix4(new wt().makeTranslation(0.02, -0.01, 0.03));
    t.push(a.applyMatrix4(e));
  }
  t.push(
    s.metal[3]
      .clone()
      .applyMatrix4(new wt().makeTranslation(0.05, -0.12, 0.09))
      .applyMatrix4(e),
  );
  for (const a of s.metal.slice(4, 10)) t.push(a.clone().applyMatrix4(e));
  {
    const a = [];
    for (let p = 0; p <= 10; p++) {
      const i = ((Math.PI * p) / 10) * 0.8;
      a.push(
        at(
          Math.cos(i) * 0.07 + 0.02,
          0.06 + Math.sin(i) * 0.06,
          -0.05 + p * 0.012,
        ),
      );
    }
    t.push(Vt(a, () => 0.0025, 4).applyMatrix4(e));
  }
  const r = new ro(s.prof, 20);
  {
    const a = r.attributes.position,
      p = [];
    for (let i = 0; i <= 20; i++)
      p.push(-0.045 + o() * 0.07 * (i % 3 ? 1 : 0.4));
    for (let i = 0; i < a.count; i++) {
      const d = Math.atan2(a.getZ(i), a.getX(i)),
        y = Math.round((((d + qe) % qe) / qe) * 20) % 21,
        w = p[y];
      if (a.getY(i) > w) {
        const g = Math.hypot(a.getX(i), a.getZ(i));
        (a.setY(i, w),
          a.setX(i, Math.cos(d) * g * 0.99),
          a.setZ(i, Math.sin(d) * g * 0.99));
      }
    }
    r.computeVertexNormals();
  }
  u.push(qa(r, 0.6).applyMatrix4(e));
  for (let a = 0; a < 9; a++) {
    const p = o() * qe,
      i = 0.12 + o() * 0.45,
      d = 0.015 + o() * 0.03,
      y = new Rt(),
      w = [
        0,
        0,
        0,
        d * (0.7 + o()),
        0.004,
        d * (o() - 0.5),
        d * (o() - 0.5),
        0.006,
        d * (0.7 + o()),
      ];
    (y.setAttribute("position", new xt(w, 3)),
      y.setAttribute("normal", new xt([0, 1, 0, 0, 1, 0, 0, 1, 0], 3)),
      y.setAttribute("uv", new xt([0, 0, 1, 0, 0, 1], 2)),
      y.setAttribute("aLamp", new xt([-1.1, -1.1, -1.1], 1)),
      y.setIndex([0, 2, 1]),
      y
        .applyMatrix4(new wt().makeRotationY(o() * qe))
        .translate(Math.cos(p) * i, 0.012, Math.sin(p) * i),
      u.push(y));
  }
  return { metal: t.map((a) => d0(a, ["position", "normal", "uv"])), glass: u };
}
function vc() {
  const s = [];
  s.push(
    new s0(0.02, 0.004, 4, 10, Math.PI * 1.4)
      .rotateY(Math.PI / 2)
      .translate(0, -0.02, 0),
  );
  for (let o = 0; o < 6; o++)
    s.push(
      new s0(0.012, 0.003, 4, 8)
        .rotateY(o % 2 ? 0 : Math.PI / 2)
        .translate(0, -0.045 - o * 0.022, 0),
    );
  return (
    s.push(
      new s0(0.012, 0.003, 4, 8, Math.PI * 1.3)
        .rotateY(Math.PI / 2)
        .rotateX(0.5)
        .translate(0.004, -0.045 - 6 * 0.022, 0),
    ),
    s.map((o) => d0(o, ["position", "normal", "uv"]))
  );
}
function Mc(s) {
  const o = [],
    t = [],
    u = (s() - 0.5) * 0.04,
    e = new qt(0.085, 2.05, 0.085, 1, 4, 1).translate(0, 1, 0),
    r = e.attributes.position;
  for (let a = 0; a < r.count; a++) r.setX(a, r.getX(a) + r.getY(a) * u);
  (e.computeVertexNormals(),
    o.push(e),
    o.push(new qt(0.07, 0.07, 0.56).translate(u * 1.98, 1.98, 0.24)),
    o.push(
      new qt(0.05, 0.05, 0.36)
        .rotateX(Math.PI / 4)
        .translate(u * 1.8, 1.84, 0.12),
    ),
    t.push(
      new s0(0.02, 0.004, 4, 10, Math.PI * 1.4)
        .rotateY(Math.PI / 2)
        .translate(u * 1.98, 1.925, 0.46),
    ));
  for (let a = 0; a < 3; a++)
    t.push(
      new s0(0.012, 0.003, 4, 8)
        .rotateY(a % 2 ? 0 : Math.PI / 2)
        .translate(u * 1.98, 1.9 - a * 0.022, 0.46),
    );
  return { wood: o, iron: t, hang: [u * 1.98, 1.86, 0.46] };
}
function wc() {
  const s = [];
  s.push(new qt(0.05, 0.16, 0.012).translate(0, 0, 0.006));
  const o = [at(0, 0.05, 0.01), at(0, 0.08, 0.14), at(0, 0.08, 0.26)];
  s.push(Vt(o, () => 0.008, 5));
  const t = [];
  for (let u = 0; u <= 12; u++) {
    const e = (u / 12) * Math.PI * 1.5;
    t.push(
      at(
        0,
        -0.05 + 0.1 * (u / 12) + Math.sin(e) * 0.03,
        0.01 + (u / 12) * 0.13 + Math.cos(e) * 0.015,
      ),
    );
  }
  return (
    s.push(Vt(t, () => 0.005, 4)),
    s.push(
      new s0(0.018, 0.004, 4, 10, Math.PI * 1.4)
        .rotateY(Math.PI / 2)
        .translate(0, 0.06, 0.26),
    ),
    { iron: s, hang: [0, 0.04, 0.26] }
  );
}
function yc(s) {
  const o = [],
    t = [],
    u = (p, i, d, y) => new Pt(i, p, d, 6).translate(0, y + d / 2, 0);
  (o.push(u(0.3, 0.26, 0.12, 0)),
    o.push(new Pt(0.085, 0.1, 0.5, 10).translate(0, 0.37, 0)),
    o.push(u(0.2, 0.26, 0.1, 0.62)),
    o.push(u(0.2, 0.2, 0.03, 0.72)));
  for (let p = 0; p < 6; p++) {
    const i = (p * qe) / 6 + qe / 12;
    o.push(
      new qt(0.05, 0.22, 0.05).translate(
        Math.cos(i) * 0.165,
        0.86,
        Math.sin(i) * 0.165,
      ),
    );
  }
  o.push(u(0.21, 0.19, 0.03, 0.97));
  const e = new Pt(0.05, 0.36, 0.17, 6, 2).translate(0, 1.085, 0),
    r = e.attributes.position;
  for (let p = 0; p < r.count; p++) {
    const i = r.getX(p),
      d = r.getZ(p),
      y = Math.hypot(i, d),
      w = Math.atan2(d, i),
      g = Math.pow(Math.abs(Math.cos(3 * w)), 8);
    y > 0.3 && r.setY(p, r.getY(p) + g * 0.05);
  }
  (e.computeVertexNormals(),
    o.push(e),
    o.push(new t0(0.065, 10, 8).scale(1, 1.15, 1).translate(0, 1.23, 0)),
    o.push(new no(0.03, 0.07, 8).translate(0, 1.32, 0)));
  const a = new wt().makeRotationFromEuler(
    new pe((s() - 0.5) * 0.06, 0, (s() - 0.5) * 0.06),
  );
  for (const p of o) p.applyMatrix4(a);
  return (
    t.push(new Pt(0.12, 0.12, 0.17, 6).translate(0, 0.86, 0).applyMatrix4(a)),
    { stone: o.map((p) => d0(p, ["position", "normal", "uv"])), glow: t }
  );
}
function gc(s, o, t) {
  const u = Ea(o),
    e = { uGlow: { value: new Float32Array(zo).fill(1) } },
    r = new n0({
      color: 2759184,
      emissive: new Xt(1, 0.5, 0.17),
      emissiveIntensity: 3.2,
      roughness: 0.15,
      metalness: 0,
      transparent: !1,
    }),
    a = (G) => {
      ((G.uniforms.uGlow = e.uGlow),
        (G.vertexShader = G.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute float aLamp;
varying float vLamp;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vLamp = aLamp;`,
          )),
        (G.fragmentShader = G.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform float uGlow[${zo}];
varying float vLamp;
${pc}`,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
      if (vLamp < -0.5) {
        // a DEAD lantern's glass: cold, grimy, sooted black toward the top where the flame was; only the torch finds it (a
        // glint, a dull sheen)
        float sootK = smoothstep(0.25, 0.95, clamp(-vLamp - 1.0, 0.0, 1.0) / 0.98);
        diffuseColor.rgb = mix(vec3(0.034, 0.036, 0.036), vec3(0.006, 0.005, 0.004), sootK);
        roughnessFactor = mix(0.16, 0.62, sootK);
        totalEmissiveRadiance = vec3(0.0);
      } else {
        int li = int(vLamp + 0.5);
        float g = 0.0;
        for (int k = 0; k < ${zo}; k++) if (k == li) g = uGlow[k];
        totalEmissiveRadiance *= g * lampFlicker(uFT, vLamp);
      }`,
          )));
    },
    p = i0(r, "lampglass", a, { canopy: !1 }),
    i = i0(
      new n0({
        color: 0,
        emissive: new Xt(1, 0.62, 0.25),
        emissiveIntensity: 9,
        roughness: 1,
      }),
      "lampflame",
      a,
      { canopy: !1 },
    ),
    d = i0(
      new n0({
        color: 0,
        emissive: new Xt(1, 0.5, 0.16),
        emissiveIntensity: 2.4,
        roughness: 1,
      }),
      "stoneglow",
      a,
      { canopy: !1 },
    ),
    y = i0(At("iron_black"), "lampiron"),
    w = i0(At("boards_barricade"), "lamppost"),
    g = i0(At("forest_stone"), "lampstone", (G) => {
      const q = At("garden_moss");
      ((G.uniforms.tMoss = { value: q.map }),
        (G.vertexShader = G.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vSN;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vSN = normalize(mat3(modelMatrix) * normal);`,
          )),
        (G.fragmentShader = G.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform sampler2D tMoss;
varying vec3 vSN;`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      { float mk = smoothstep(0.35, 0.8, vSN.y + (texture2D(tMoss, vMapUv * 0.7).g - 0.15) * 1.5); diffuseColor.rgb = mix(diffuseColor.rgb, texture2D(tMoss, vMapUv * 1.4).rgb, mk * 0.9); }`,
          )));
    }),
    z = { metal: [], glass: [], flame: [], wood: [], stone: [], sglow: [] };
  new wt();
  const x = new w0(),
    v = at(1, 1, 1),
    n = mc(),
    l = (G, q, U, Z) => {
      for (const ot of q) {
        const $ = ot.clone().applyMatrix4(U);
        (Z != null && gn($, "aLamp", [Z]), G.push($));
      }
    },
    f = [];
  let h = null;
  u.forEach((G, q) => {
    const U = x.setFromAxisAngle(at(0, 1, 0), G.face);
    let Z = null;
    if (G.kind === "post") {
      const C = Mc(t),
        T = new wt().compose(at(G.x, 0, G.z), U, v);
      if ((l(z.wood, C.wood, T), G.fate === "gone")) {
        const D = at(C.hang[0], 1.945, C.hang[2]).applyMatrix4(T),
          N = a0(vc());
        N.computeBoundingSphere();
        const H = new bt(N, y);
        ((H.name = "lantern_hook_swing"),
          (H.castShadow = !1),
          (H.receiveShadow = !0),
          H.position.copy(D),
          (H.rotation.order = "YXZ"),
          (H.rotation.y = G.face),
          (h = { mesh: H, yaw: G.face, ph: t() * 6, creakT: 2 }));
        const Q = D.clone().add(at(0, -0.2, 0));
        f.push({ ...G, pos: Q, light: Q.clone(), power: 0 });
        return;
      }
      if (
        (l(z.metal, C.iron, T),
        (Z = at(...C.hang)
          .applyMatrix4(T)
          .add(at(0, -0.24, 0))),
        G.fate === "smashed")
      ) {
        const D = xc(n, t),
          N = at(C.hang[0] + 0.08, 0, C.hang[2] + 0.12).applyMatrix4(T),
          H = new wt().compose(
            at(N.x, Math.max(0, o.heightAt(N.x, N.z)) + 0.004, N.z),
            new w0().setFromAxisAngle(at(0, 1, 0), G.face + 0.9 + t() * 0.6),
            v,
          );
        (l(z.metal, D.metal, H),
          l(z.glass, D.glass, H),
          f.push({
            ...G,
            pos: at(N.x, 0.08, N.z),
            light: at(N.x, 0.3, N.z),
            power: 0,
          }));
        return;
      }
    } else if (G.kind === "stone") {
      const C = yc(t),
        T = new wt().compose(
          at(G.x, o.heightAt(G.x, G.z) - 0.04, G.z),
          U.setFromAxisAngle(at(0, 1, 0), G.face + (t() - 0.5) * 0.3),
          v,
        );
      (l(z.stone, C.stone, T), G.lit && l(z.sglow, C.glow, T, q));
      const D = at(0, 0.86, 0).applyMatrix4(T);
      f.push({
        ...G,
        pos: D,
        light: D.clone().add(
          at(Math.sin(G.face) * 0.3, 0.05, Math.cos(G.face) * 0.3),
        ),
        power: 0.45,
        stone: !0,
      });
      return;
    } else if (G.kind === "angel")
      Z = at(G.hang[0], G.hang[1] - 0.24, G.hang[2]);
    else {
      const C = wc(),
        T = new wt().compose(at(G.x, G.y + 0.26, G.z), U, v);
      (l(z.metal, C.iron, T),
        (Z = at(...C.hang)
          .applyMatrix4(T)
          .add(at(0, -0.24, 0))));
    }
    const ot = new wt().compose(
      Z,
      x.setFromAxisAngle(at(0, 1, 0), G.face + (t() - 0.5) * 0.5),
      v,
    );
    if ((l(z.metal, n.metal, ot), G.lit))
      (l(z.glass, n.glass, ot, q),
        l(
          z.flame,
          n.flame,
          new wt().copy(ot).multiply(new wt().makeTranslation(0, -0.03, 0)),
          q,
        ));
    else for (const C of n.glass) z.glass.push(qa(C.clone()).applyMatrix4(ot));
    const $ = G.kind === "angel" ? 0.55 : G.kind === "post" ? 0.1 : 0.3;
    f.push({
      ...G,
      pos: Z.clone(),
      light: Z.clone().add(at(Math.sin(G.face) * $, 0, Math.cos(G.face) * $)),
      power: G.kind === "angel" ? 0.45 : G.kind === "wall" ? 0.8 : 1,
    });
  });
  const c = new Kt();
  c.name = "forest_lanterns";
  const M = (G, q, U, Z = !0, ot = !1) => {
    if (!G.length) return null;
    const $ = a0(G.map((T) => (ot && Ct(T), T))),
      C = new bt($, q);
    return (
      (C.name = U),
      (C.castShadow = Z),
      (C.receiveShadow = !0),
      c.add(C),
      C
    );
  };
  (M(z.metal, y, "lantern_iron", !0),
    M(z.wood, w, "lantern_posts", !0, !0),
    M(z.stone, g, "stone_lanterns", !0, !0),
    M(z.glass, p, "lantern_glass", !1),
    M(z.flame, i, "lantern_flames", !1),
    M(z.sglow, d, "stone_lantern_glow", !1),
    h && c.add(h.mesh));
  const m = [],
    k = [];
  for (let G = 0; G < 4; G++) {
    const q = new No(16751178, 0, 5.8, 2);
    ((q.name = "forest_lamp_" + G),
      (q.castShadow = !1),
      m.push(q),
      k.push({ l: q, lamp: -1, next: -1, k: 0 }));
  }
  const S = f.map((G) => ({ k: G.lit ? 1 : 0, snuffT: -1 })),
    A = 21;
  let b = 0;
  const P = f.length,
    _ = new Float64Array(P),
    I = Array.from({ length: P }, (G, q) => q),
    R = [];
  let V = 0,
    L = 0;
  const K = (G, q) => _[G] - _[q],
    j = () => {
      for (let G = 0; G < P; G++)
        _[G] =
          (f[G].pos.x - V) ** 2 +
          (f[G].pos.z - L) ** 2 +
          (S[G].k > 0.05 ? 0 : 1e12);
      I.sort(K);
    },
    O = (G, q) => {
      for (let U = 0; U < G.length; U++) if (G[U] === q) return !0;
      return !1;
    },
    J = () => {
      R.length = 0;
      for (let G = 0; G < P && R.length < k.length; G++)
        _[I[G]] < 1e11 && R.push(I[G]);
      for (const G of k) {
        const q = G.next >= 0 ? G.next : G.lamp;
        if (!(q >= 0 && O(R, q)))
          for (const U of R) {
            let Z = !1;
            for (const ot of k)
              (ot.next >= 0 ? ot.next : ot.lamp) === U && (Z = !0);
            if (!Z) {
              G.next = U;
              break;
            }
          }
      }
    };
  function tt(G, q, U) {
    for (let ot = 0; ot < P; ot++) {
      const $ = S[ot];
      if ($.snuffT >= 0) {
        $.snuffT += G;
        const C = $.snuffT / 0.7;
        (($.k =
          C >= 1 ? 0 : (1 - C) * (1 - C) * (0.8 + 0.4 * Math.sin(C * 41))),
          C >= 1 && ($.snuffT = -1));
      }
      e.uGlow.value[ot] = $.k;
    }
    ((V = U.position.x),
      (L = U.position.z),
      j(),
      (b -= G),
      b <= 0 && ((b = 0.3), J()));
    for (const ot of k) {
      if (
        (ot.next >= 0 && ot.next !== ot.lamp
          ? ((ot.k = Math.max(0, ot.k - G * 3)),
            ot.k === 0 && ((ot.lamp = ot.next), (ot.next = -1)))
          : ((ot.next = -1), (ot.k = Math.min(1, ot.k + G * 2))),
        ot.lamp < 0)
      ) {
        ot.l.intensity = 0;
        continue;
      }
      const $ = f[ot.lamp];
      (ot.l.position.copy($.light),
        (ot.l.intensity = ot.k * S[ot.lamp].k * A * $.power * xa(q, ot.lamp)));
    }
    const Z = K0.uLamps.value;
    for (let ot = 0; ot < 8; ot++) {
      if (ot >= P) {
        Z[ot].w = 0;
        continue;
      }
      const $ = I[ot],
        C = f[$];
      Z[ot].set(
        C.pos.x,
        C.pos.y,
        C.pos.z,
        S[$].k * xa(q, $) * (C.stone ? 0.5 : 1),
      );
    }
    if (h) {
      const ot = q + h.ph;
      if (
        ((h.mesh.rotation.x =
          0.2 * Math.sin(ot * 1.55) * (0.75 + 0.25 * Math.sin(ot * 0.21))),
        (h.mesh.rotation.z = 0.06 * Math.sin(ot * 1.1 + 1.3)),
        (h.creakT -= G),
        h.creakT <= 0)
      ) {
        h.creakT = 4.5 + 3 * (0.5 + 0.5 * Math.sin(ot * 0.37));
        const $ = h.mesh.position;
        ($.x - U.position.x) ** 2 + ($.z - U.position.z) ** 2 < 196 &&
          s.audio?.play?.("hook_creak", { pos: [$.x, $.y, $.z], vol: 0.4 });
      }
    }
  }
  const st = {
    list: f.map((G) => ({
      pos: G.pos.toArray().map((q) => +q.toFixed(2)),
      kind: G.kind,
      lit: !!G.lit,
      fate: G.fate,
      s: G.s != null ? +G.s.toFixed(1) : null,
    })),
    snuff(G) {
      S[G] &&
        S[G].k > 0 &&
        S[G].snuffT < 0 &&
        ((S[G].snuffT = 0),
        s.audio?.play?.("lantern_snuff", {
          pos: f[G].pos.toArray(),
          vol: 0.7,
        }));
    },
    relight(G) {
      S[G] && f[G].lit && ((S[G].k = 1), (S[G].snuffT = -1));
    },
    reset() {
      S.forEach((G, q) => {
        ((G.k = f[q].lit ? 1 : 0), (G.snuffT = -1));
      });
    },
  };
  return { group: c, lights: m, update: tt, api: st, spots: f, uGlow: e.uGlow };
}
const ke = Math.PI * 2;
class Ks {
  constructor() {
    ((this.P = []),
      (this.N = []),
      (this.UV = []),
      (this.C = []),
      (this.F = []),
      (this.I = []));
  }
  get n() {
    return this.P.length / 3;
  }
  v(o, t, u, e, r, a, p, i, d, y, w, g) {
    return (
      this.P.push(o, t, u),
      this.N.push(e, r, a),
      this.UV.push(p, i),
      this.C.push(d, y, w),
      this.F.push(g),
      this.n - 1
    );
  }
  geometry() {
    if (!this.P.length) return null;
    const o = new Rt();
    return (
      o.setAttribute("position", new xt(this.P, 3)),
      o.setAttribute("normal", new xt(this.N, 3)),
      o.setAttribute("uv", new xt(this.UV, 2)),
      o.setAttribute("color", new xt(this.C, 3)),
      o.setAttribute("aFlex", new xt(this.F, 1)),
      o.setIndex(this.I),
      o
    );
  }
}
function bc(s, o, t, u, e, r, a = 0) {
  const p = 7 + Math.floor(o() * 6),
    i = o() * ke,
    d = 0.75 + o() * 0.35;
  for (let y = 0; y < p; y++) {
    const w = i + (y / p) * ke + (o() - 0.5) * 0.5,
      g = r * (0.7 + o() * 0.5),
      z = o() < a,
      x = z ? Bt.fernDry : Bt.fern,
      [v, n, l, f] = Ao(x),
      h = Math.cos(w),
      c = Math.sin(w),
      M = -c,
      m = h,
      k = 0.55 + o() * 0.35,
      S = 0.35 + o() * 0.3,
      A = g * 0.62,
      b = 4,
      P = s.n;
    for (let _ = 0; _ < b; _++) {
      const I = _ / (b - 1),
        R = g * (0.12 + 0.85 * I),
        V =
          g *
          (k * Math.sin(Math.PI * I * 0.85) * (1 - S * I) +
            (I > 0.7 ? -S * (I - 0.7) : 0)),
        L = t + h * R,
        K = u + V + 0.02,
        j = e + c * R,
        O = h * (0.2 + I * 0.5),
        J = 1,
        tt = c * (0.2 + I * 0.5),
        st = Math.hypot(O, J, tt),
        G = (0.45 + 0.55 * I) * d * (z ? 1.1 : 1),
        q = A * (0.55 + 0.45 * Math.sin(Math.PI * Math.min(1, I * 0.9 + 0.1)));
      for (const U of [-1, 1])
        s.v(
          L + (M * U * q) / 2,
          K + U * 0.04 * I,
          j + (m * U * q) / 2,
          O / st,
          J / st,
          tt / st,
          v + (l - v) * I,
          U < 0 ? n : f,
          G,
          G,
          G,
          I,
        );
    }
    for (let _ = 0; _ < b - 1; _++) {
      const I = P + _ * 2;
      s.I.push(I, I + 1, I + 2, I + 1, I + 3, I + 2);
    }
  }
}
function zc(s, o, t, u, e, r) {
  const a = r * (0.55 + o() * 0.3),
    p = r * 0.55,
    i = 8,
    d = 3,
    y = s.n;
  for (let n = 0; n <= d; n++) {
    const l = n / d,
      f = l * Math.PI * 0.5,
      h = Math.cos(f) * a * 0.72,
      c = u + Math.sin(f) * p * 1.4 + 0.05;
    for (let M = 0; M < i; M++) {
      const m = (M / i) * ke,
        k = Math.cos(m) * Math.cos(f),
        S = Math.sin(f) + 0.3,
        A = Math.sin(m) * Math.cos(f),
        b = Math.hypot(k, S, A);
      s.v(
        t + Math.cos(m) * h * (0.85 + o() * 0.3),
        c,
        e + Math.sin(m) * h * (0.85 + o() * 0.3),
        k / b,
        S / b,
        A / b,
        go[0],
        go[1],
        0.35,
        0.4,
        0.34,
        -1,
      );
    }
  }
  for (let n = 0; n < d; n++)
    for (let l = 0; l < i; l++) {
      const f = y + n * i + l,
        h = y + n * i + ((l + 1) % i);
      s.I.push(f, f + i, h, h, f + i, h + i);
    }
  const [w, g, z, x] = Ao(Bt.bush),
    v = Math.round(14 + r * 18);
  for (let n = 0; n < v; n++) {
    const l = o() * ke,
      f = Math.acos(Math.pow(o(), 0.7)) * 0.95,
      h = t + Math.cos(l) * Math.sin(f) * a,
      c = u + Math.cos(f) * p * 1.35 + 0.1,
      M = e + Math.sin(l) * Math.sin(f) * a,
      m = Math.cos(l) * Math.sin(f),
      k = Math.cos(f) + 0.25,
      S = Math.sin(l) * Math.sin(f),
      A = Math.hypot(m, k, S),
      b = m / A,
      P = k / A,
      _ = S / A,
      I = Math.hypot(b, _) || 1,
      R = -_ / I,
      V = b / I,
      L = P * V,
      K = _ * R - b * V,
      j = -P * R,
      O = 0.42 + o() * 0.3,
      J = o() * ke,
      tt = Math.cos(J),
      st = Math.sin(J),
      G = tt * R + st * L,
      q = st * K,
      U = tt * V + st * j,
      Z = P * U - _ * q,
      ot = _ * G - b * U,
      $ = b * q - P * G,
      C = 0.6 + o() * 0.4,
      T = s.n;
    for (const [D, N, H, Q] of [
      [-1, -1, w, g],
      [1, -1, z, g],
      [1, 1, z, x],
      [-1, 1, w, x],
    ])
      s.v(
        h + ((G * D + Z * N) * O) / 2,
        c + ((q * D + ot * N) * O) / 2,
        M + ((U * D + $ * N) * O) / 2,
        m / A,
        k / A,
        S / A,
        H,
        Q,
        C * 0.9,
        C,
        C * 0.9,
        0.3,
      );
    s.I.push(T, T + 1, T + 2, T, T + 2, T + 3);
  }
}
function va(s, o, t, u, e, r, a = Bt.grass) {
  const [p, i, d, y] = Ao(a),
    w = o() * Math.PI,
    g = 0.7 + o() * 0.4;
  for (let z = 0; z < 2; z++) {
    const x = w + (z * Math.PI) / 2,
      v = Math.cos(x) * r * 0.5,
      n = Math.sin(x) * r * 0.5,
      l = s.n,
      f = (o() - 0.5) * 0.2;
    (s.v(t - v, u - 0.02, e - n, 0, 1, 0, p, i, g * 0.5, g * 0.5, g * 0.5, 0),
      s.v(t + v, u - 0.02, e + n, 0, 1, 0, d, i, g * 0.5, g * 0.5, g * 0.5, 0),
      s.v(t + v + f, u + r, e + n, 0, 1, 0, d, y, g, g, g, 1),
      s.v(t - v + f, u + r, e - n, 0, 1, 0, p, y, g, g, g, 1),
      s.I.push(l, l + 1, l + 2, l, l + 2, l + 3));
  }
}
function kc(s, o, t, u) {
  const e = new Map(),
    r = [],
    a = [],
    p = (d, y) => {
      const w = t(d, y);
      return (e.has(w) || e.set(w, new Ks()), e.get(w));
    },
    i = 0.9;
  for (let d = St.z + 0.6; d < 214; d += i)
    for (let y = -51; y < 51; y += i) {
      const w = y + (o() - 0.5) * i,
        g = d + (o() - 0.5) * i,
        z = s.dPathAt(w, g);
      if (z > 26 && s.clearingSd(w, g) > 14) continue;
      const x = s.sdAt(w, g),
        v = s.dStreamAt(w, g),
        n = s.clearingSd(w, g);
      if (w > _t.x0 - 3 && w < _t.x1 + 3 && g > _t.z0 - 3 && g < _t.z1 + 3)
        continue;
      const l = s.sPathAt(w, g),
        f = s.pw(l);
      if ((z < f + 0.45 && n > -1) || v < 1.7 || u(w, g)) continue;
      const h = s.heightAt(w, g),
        c = 0.5 + 0.5 * It(w * 0.21 + 3.3, g * 0.21 - 1.1),
        M = 0.5 + 0.5 * It(w * 0.9, g * 0.9);
      let m =
        x < -1.2 ? 0.05 : x < 0 ? 0.35 : x < 5 ? 0.75 : x < 14 ? 0.45 : 0.22;
      ((m *= 0.45 + 0.9 * c),
        n < -1.5 && (m *= 0.12),
        v < 5 && (m = Math.max(m, 0.6)),
        g < 84 && (m *= 0.55));
      const k = o();
      if (k < m * 0.55) {
        const A = (x < 0 ? 0.42 : 0.55) + M * 0.45 + (v < 5 ? 0.15 : 0);
        bc(p(w, g), o, w, h, g, A, g < 95 ? 0.35 : 0.12);
        continue;
      }
      if (x > 1.1 && x < 16 && n > 2 && k < m * 0.55 + 0.028 * (0.3 + c)) {
        const A = 0.8 + o() * 0.9;
        (zc(p(w, g), o, w, h, g, A),
          x < 4 && r.push({ x: w, z: g, r: A * 0.45, bush: !0 }));
        continue;
      }
      const S =
        (n < 3 ? 1 : 0) +
        (v < 6.5 ? 0.6 : 0) +
        (g < 92 ? 0.5 : 0) +
        (x < 1.5 && x > -1.2 ? 0.25 : 0);
      if (k < m * 0.55 + 0.03 + S * 0.25) {
        const A = p(w, g);
        for (let b = 0; b < 2; b++)
          va(
            A,
            o,
            w + (o() - 0.5) * 0.5,
            h,
            g + (o() - 0.5) * 0.5,
            0.25 + o() * 0.35 + (n < 0 ? 0.2 : 0),
            n < -2 && o() < 0.12 ? Bt.flowers : Bt.grass,
          );
      }
      x > 0.3 && x < 4 && o() < 0.012 && a.push([w, h, g]);
    }
  for (let d = 0; d < 5200; d++) {
    const y = o() * ke,
      w = Math.sqrt(o()) * 1.08,
      g = R0.x + Math.cos(y) * w * R0.rx,
      z = R0.z + Math.sin(y) * w * R0.rz,
      x = s.clearingSd(g, z);
    if (
      x > 0.5 ||
      (g > _t.x0 - 2.6 && g < _t.x1 + 2.6 && z > _t.z0 - 2.4 && z < _t.z1 + 2.6)
    )
      continue;
    const v = s.dPathAt(g, z);
    if (v < 0.8 || (v < 1.6 && o() < 0.6) || u(g, z)) continue;
    const n = s.heightAt(g, z),
      l = 0.35 + o() * 0.45 + (x > -2 ? 0.15 : 0);
    va(p(g, z), o, g, n, z, l, o() < 0.1 ? Bt.flowers : Bt.grass);
  }
  return { out: e, circles: r, mush: a };
}
function Sc(s, o, t) {
  const u = [],
    e = [],
    r = [];
  for (const [a, p, i] of t) {
    const d = s.heightAt(a, p),
      y = 0.35 + o() * 0.4,
      w = 12,
      g = (o() - 0.5) * 0.12,
      z = [],
      x = [],
      v = [],
      n = [],
      l = [];
    for (let m = 0; m <= 3; m++) {
      const k = m / 3,
        S = d - 0.15 + k * (y + 0.15),
        A = i * (1 + (1 - k) * 0.35 * (m === 0 ? 1.4 : 1));
      for (let b = 0; b <= w; b++) {
        const P = (b / w) * ke;
        (z.push(
          a + Math.cos(P) * A,
          S + (k === 1 ? Math.cos(P) * g * i : 0),
          p + Math.sin(P) * A,
        ),
          x.push(Math.cos(P), 0.2, Math.sin(P)),
          v.push(P * i, S),
          n.push(0.5, 0.3, 1));
      }
    }
    for (let m = 0; m < 3; m++)
      for (let k = 0; k < w; k++) {
        const S = m * (w + 1) + k,
          A = S + w + 1;
        l.push(S, A, S + 1, S + 1, A, A + 1);
      }
    const f = new Rt();
    (f.setAttribute("position", new xt(z, 3)),
      f.setAttribute("normal", new xt(x, 3)),
      f.setAttribute("uv", new xt(v, 2)),
      f.setAttribute("aK", new xt(n, 3)),
      f.setIndex(l),
      u.push(f));
    const h = new Ms(i, w).rotateX(-Math.PI / 2),
      c = h.attributes.position,
      M = h.attributes.uv;
    for (let m = 0; m < c.count; m++)
      (M.setXY(m, 0.5 + c.getX(m) / (2 * i), 0.5 + c.getZ(m) / (2 * i)),
        c.setY(
          m,
          Math.cos(Math.atan2(c.getZ(m), c.getX(m))) *
            g *
            i *
            (Math.hypot(c.getX(m), c.getZ(m)) / i),
        ));
    (h.translate(a, d + y + 0.002, p),
      e.push(h),
      r.push({ x: a, z: p, r: i + 0.05, stump: !0 }));
  }
  return { bark: u, tops: e, circles: r };
}
function Ac() {
  const s = document.createElement("canvas");
  s.width = s.height = 256;
  const o = s.getContext("2d"),
    t = o.createRadialGradient(128, 128, 4, 128, 128, 128);
  (t.addColorStop(0, "#9a7e5a"),
    t.addColorStop(0.85, "#8a6c48"),
    t.addColorStop(0.93, "#5a4430"),
    t.addColorStop(1, "#3a2a1c"),
    (o.fillStyle = t),
    o.fillRect(0, 0, 256, 256),
    (o.strokeStyle = "rgba(70,50,30,0.45)"),
    (o.lineWidth = 1.4));
  for (let e = 6; e < 118; e += 4 + Math.sin(e) * 1.5)
    (o.beginPath(),
      o.ellipse(128 + Math.sin(e * 0.3) * 2, 128, e, e * 0.97, 0, 0, ke),
      o.stroke());
  ((o.strokeStyle = "rgba(30,20,12,0.8)"),
    (o.lineWidth = 2.5),
    o.beginPath(),
    o.moveTo(128, 128),
    o.lineTo(200, 60),
    o.stroke(),
    o.beginPath(),
    o.moveTo(128, 128),
    o.lineTo(70, 210),
    o.stroke(),
    (o.fillStyle = "rgba(120,120,110,0.25)"),
    o.fillRect(0, 0, 256, 256));
  const u = new io(s);
  return ((u.colorSpace = lo), new n0({ map: u, roughness: 0.9 }));
}
function Pc(s, o, t) {
  const u = new t0(1, 10, 6, 0, ke, 0, Math.PI * 0.5)
      .scale(1, 0.55, 1)
      .translate(0, 1, 0),
    e = new Pt(0.22, 0.3, 1, 6).translate(0, 0.5, 0),
    r = Tc(u, e),
    a = [];
  for (const [x, v, n] of s) {
    const l = 2 + Math.floor(o() * 5);
    for (let f = 0; f < l; f++)
      a.push([
        x + (o() - 0.5) * 0.35,
        v,
        n + (o() - 0.5) * 0.35,
        0.025 + o() * 0.03,
      ]);
  }
  const p = new l0(r, t, a.length);
  ((p.name = "forest_mushrooms"), (p.receiveShadow = !0));
  const i = new wt(),
    d = new w0(),
    y = new pe(),
    w = new dt(),
    g = new dt(),
    z = new Xt();
  return (
    a.forEach(([x, v, n, l], f) => {
      (d.setFromEuler(y.set((o() - 0.5) * 0.3, o() * ke, (o() - 0.5) * 0.3)),
        p.setMatrixAt(
          f,
          i.compose(
            g.set(x, v - 0.01, n),
            d,
            w.set(l * 1.6, l * (1.4 + o()), l * 1.6),
          ),
        ),
        p.setColorAt(
          f,
          z.setRGB(0.85 + o() * 0.15, 0.78 + o() * 0.12, 0.62 + o() * 0.1),
        ));
    }),
    p
  );
}
function Tc(s, o) {
  const t = new Rt();
  for (const a of ["position", "normal", "uv"]) {
    const p = s.attributes[a].itemSize,
      i = new Float32Array((s.attributes[a].count + o.attributes[a].count) * p);
    (i.set(s.attributes[a].array, 0),
      i.set(o.attributes[a].array, s.attributes[a].count * p),
      t.setAttribute(a, new vt(i, p)));
  }
  const u = s.attributes.position.count,
    e = Array.from(s.index.array),
    r = Array.from(o.index.array).map((a) => a + u);
  return (t.setIndex([...e, ...r]), t);
}
const vo = Math.PI * 2,
  Gt = (s, o, t, u, e, r) => new qt(s, o, t).translate(u, e, r);
function Cc() {
  const s = [],
    o = [];
  for (let r = 0; r <= 14; r++) {
    const a = r / 14,
      p = 1.18 - a * 1.18,
      i = 0.14 + 0.2 * Math.pow(a, 1.4) + 0.012 * Math.sin(a * 9);
    o.push(new re(i, p));
  }
  const t = new ro(o.reverse(), 28);
  {
    const r = t.attributes.position;
    for (let a = 0; a < r.count; a++) {
      const p = r.getX(a),
        i = r.getZ(a),
        d = r.getY(a),
        y = Math.atan2(i, p),
        w = Math.hypot(p, i),
        g =
          1 +
          0.07 * Math.sin(y * 9) * (1 - d / 1.2) +
          (i < 0 ? -0.08 * (1 - d / 1.3) : 0);
      r.setXYZ(a, Math.cos(y) * w * g, d, Math.sin(y) * w * g * 0.82);
    }
    t.computeVertexNormals();
  }
  (s.push(t),
    s.push(new t0(0.16, 16, 12).scale(1.15, 1.25, 0.8).translate(0, 1.2, 0)),
    s.push(new Pt(0.045, 0.055, 0.12, 10).translate(0, 1.37, 0.01)));
  const u = new t0(0.095, 16, 12).scale(0.92, 1.12, 1);
  (u.rotateX(0.45), u.translate(0, 1.49, 0.045), s.push(u));
  const e = new t0(0.105, 14, 10, 0, vo, 0, Math.PI * 0.62).scale(
    0.96,
    1.1,
    1.05,
  );
  (e.rotateX(-0.2),
    e.translate(0, 1.5, 0.02),
    s.push(e),
    s.push(new t0(0.06, 10, 8).translate(0, 1.47, -0.08)));
  for (const r of [-1, 1]) {
    const a = [
      at(r * 0.17, 1.28, 0),
      at(r * 0.19, 1.1, 0.04),
      at(r * 0.12, 0.98, 0.14),
      at(r * 0.035, 1.12, 0.2),
    ];
    (s.push(Vt(a, (p) => 0.052 - p * 0.02, 8)),
      s.push(
        new t0(0.036, 8, 6)
          .scale(0.6, 1.3, 0.9)
          .translate(r * 0.022, 1.17, 0.205),
      ),
      s.push(
        new no(0.09, 0.3, 10, 1, !0)
          .rotateX(Math.PI)
          .translate(r * 0.14, 0.95, 0.12),
      ));
  }
  for (const r of [-1, 1]) {
    const a = new he();
    (a.moveTo(0, 0), a.bezierCurveTo(0.18, 0.12, 0.32, 0.3, 0.3, 0.62));
    const p = 0.1,
      i = -0.72;
    for (let w = 1; w <= 7; w++) {
      const g = w / 7,
        z = 0.3 + (p - 0.3) * g + Math.sin(g * Math.PI) * 0.12,
        x = 0.62 + (i - 0.62) * g;
      a.quadraticCurveTo(z + 0.06, x + 0.07, z, x);
    }
    a.bezierCurveTo(0.04, -0.4, -0.02, -0.1, 0, 0);
    const d = new te(a, {
        depth: 0.05,
        bevelEnabled: !0,
        bevelThickness: 0.015,
        bevelSize: 0.012,
        bevelSegments: 1,
        curveSegments: 6,
      }),
      y = d.attributes.position;
    for (let w = 0; w < y.count; w++) {
      const g = y.getX(w),
        z = y.getY(w),
        x = y.getZ(w);
      y.setXYZ(w, g, z, x - g * g * 0.9);
    }
    (d.computeVertexNormals(),
      d.rotateY(r > 0 ? -0.35 : Math.PI + 0.35),
      d.translate(r * 0.06, 1.2, -0.12),
      s.push(d));
  }
  return a0(s.map((r) => d0((r.index || r.toNonIndexed, r))));
}
function Ic(s, o, t, u) {
  const e = new he(),
    r = o / 2;
  (e.moveTo(-r, 0),
    e.lineTo(r, 0),
    s === "round"
      ? (e.lineTo(r, t - r * 0.7),
        e.absellipse(0, t - r * 0.7, r, r * 0.7, 0, Math.PI, !1))
      : s === "gothic"
        ? (e.lineTo(r, t * 0.72),
          e.quadraticCurveTo(r * 0.9, t * 0.94, 0, t),
          e.quadraticCurveTo(-r * 0.9, t * 0.94, -r, t * 0.72))
        : s === "shoulder"
          ? (e.lineTo(r, t * 0.78),
            e.lineTo(r * 0.7, t * 0.8),
            e.quadraticCurveTo(r * 0.6, t, 0, t),
            e.quadraticCurveTo(-r * 0.6, t, -r * 0.7, t * 0.8),
            e.lineTo(-r, t * 0.78))
          : e.lineTo(r * 0.28, 0),
    e.lineTo(-r, 0));
  const a = new te(e, {
    depth: u,
    bevelEnabled: !0,
    bevelThickness: 0.012,
    bevelSize: 0.012,
    bevelSegments: 2,
    curveSegments: 10,
  });
  return (a.translate(0, 0, -u / 2), a);
}
function _c(s, o) {
  const t = [
    Gt(0.16, s, 0.12, 0, s / 2, 0),
    Gt((0.62 * s) / 1.4, 0.15, 0.12, 0, s * 0.72, 0),
  ];
  return (
    t.push(new s0((0.2 * s) / 1.4, 0.035, 6, 20).translate(0, s * 0.72, 0)),
    t.push(Gt(0.36, 0.14, 0.26, 0, 0.07, 0)),
    a0(t.map((u) => d0(u)))
  );
}
function Fc(s, o, t, u) {
  const e = new Kt();
  e.name = "forest_yard";
  const r = [],
    a = [],
    p = {
      wall: [],
      coping: [],
      stone: [],
      iron: [],
      wood: [],
      earth: [],
      flag: [],
      angel: [],
    },
    i = (b, P, _, I, R) => r.push({ x0: b, x1: P, z0: _, z1: I, y0: 0, y1: R }),
    d = (b, P, _, I) => {
      const R = Math.abs(_ - b) > Math.abs(I - P),
        V = Math.abs(R ? _ - b : I - P),
        L = St.t,
        K = St.h,
        j = R
          ? Gt(V, K, L, (b + _) / 2, K / 2, P)
          : Gt(L, K, V, b, K / 2, (P + I) / 2);
      p.wall.push(Ct(j));
      const O = R
        ? Gt(V + 0.04, 0.1, L + 0.1, (b + _) / 2, K + 0.05, P)
        : Gt(L + 0.1, 0.1, V + 0.04, b, K + 0.05, (P + I) / 2);
      p.coping.push(Ct(O));
      const J = R
        ? new Pt(L * 0.42, L * 0.42, V, 8, 1)
            .rotateZ(Math.PI / 2)
            .scale(1, 0.45, 1)
            .translate((b + _) / 2, K + 0.1, P)
        : new Pt(L * 0.42, L * 0.42, V, 8, 1)
            .rotateX(Math.PI / 2)
            .scale(1, 0.45, 1)
            .translate(b, K + 0.1, (P + I) / 2);
      (p.coping.push(Ct(J)),
        R
          ? i(Math.min(b, _), Math.max(b, _), P - L / 2, P + L / 2, K + 0.15)
          : i(b - L / 2, b + L / 2, Math.min(P, I), Math.max(P, I), K + 0.15));
    },
    y = 0.62,
    w = U0.x0 - y / 2,
    g = U0.x1 + y / 2;
  (d(St.xW, St.z, w - y / 2, St.z),
    d(g + y / 2, St.z, St.xE, St.z),
    d(St.xW, r0.z1 - 0.3, St.xW, St.z),
    d(St.xE, r0.z1 - 0.3, St.xE, St.z),
    d(St.xW, r0.z1, r0.x0 + 0.05, r0.z1),
    d(r0.x1 - 0.05, r0.z1, St.xE, r0.z1));
  for (const b of [w, g])
    (p.wall.push(Ct(Gt(y, 1.95, y, b, 0.975, St.z))),
      p.coping.push(Ct(Gt(y + 0.12, 0.1, y + 0.12, b, 2, St.z))),
      p.coping.push(
        Ct(new no(0.42, 0.22, 4).rotateY(Math.PI / 4).translate(b, 2.16, St.z)),
      ),
      p.coping.push(Ct(new t0(0.13, 12, 8).translate(b, 2.36, St.z))),
      i(b - y / 2, b + y / 2, St.z - y / 2, St.z + y / 2, 2.4));
  {
    const b = (U0.x1 - U0.x0) / 2,
      P = 1.55,
      _ = (I, R, V) => {
        const L = [];
        for (let st = 0; st < 7; st++) {
          const G = 0.06 + (st / 6) * (b - 0.12);
          (L.push(new Pt(0.011, 0.011, P, 6).translate(G, P / 2 + 0.06, 0)),
            L.push(new no(0.025, 0.09, 6).translate(G, P + 0.1, 0)));
        }
        for (const st of [0.18, 0.95, P - 0.05])
          L.push(new qt(b, 0.035, 0.03).translate(b / 2, st, 0));
        L.push(new qt(0.045, P + 0.05, 0.045).translate(0.02, P / 2 + 0.05, 0));
        const j = [];
        for (let st = 0; st <= 24; st++) {
          const G = st / 24;
          j.push(at(b * G, 1.1 + Math.abs(Math.sin(G * Math.PI * 3)) * 0.2, 0));
        }
        L.push(Vt(j, () => 0.009, 4));
        const O = a0(L.map((st) => d0(st)));
        (O.rotateY(R > 0 ? -V : Math.PI + V),
          O.translate(I, 0, St.z + 0.02),
          p.iron.push(O));
        const J = I + Math.cos(R > 0 ? -V : Math.PI + V) * b,
          tt = St.z + Math.sin(V) * b;
        i(
          Math.min(I, J) - 0.03,
          Math.max(I, J) + 0.03,
          St.z + 0.02,
          Math.max(St.z + 0.1, tt) + 0.03,
          P,
        );
      };
    (_(U0.x0 + 0.02, 1, 2.72), _(U0.x1 - 0.02, -1, 2.5));
  }
  const z = [];
  for (let b = 0; b < o.yardPath.n; b += 3) {
    const P = o.yardPath.x[b],
      _ = o.yardPath.z[b];
    for (const I of [-0.42, 0.42])
      z.push([
        P - o.yardPath.tz[b] * I + (t() - 0.5) * 0.12,
        _ + o.yardPath.tx[b] * I + (t() - 0.5) * 0.12,
      ]);
  }
  const x = [];
  for (const [b, P] of z)
    x.some((_) => Math.hypot(_[0] - b, _[1] - P) < 0.62) || x.push([b, P]);
  for (const [b, P] of x) {
    if (P > St.z - 0.35 || P < r0.z1 + 0.25) continue;
    const _ = new he(),
      I = 5 + Math.floor(t() * 3),
      R = 0.3 + t() * 0.08;
    for (let L = 0; L < I; L++) {
      const K = (L / I) * vo + t() * 0.4,
        j = R * (0.8 + t() * 0.3);
      L
        ? _.lineTo(Math.cos(K) * j, Math.sin(K) * j)
        : _.moveTo(Math.cos(K) * j, Math.sin(K) * j);
    }
    const V = new te(_, {
      depth: 0.07,
      bevelEnabled: !0,
      bevelThickness: 0.012,
      bevelSize: 0.015,
      bevelSegments: 1,
    });
    (V.rotateX(-Math.PI / 2),
      V.rotateY(t() * vo),
      V.translate(b, -0.045 + t() * 0.025, P),
      p.flag.push(Ct(V)));
  }
  const v = [],
    n = (b, P, _) => {
      if (
        b < St.xW + 0.9 + _ ||
        b > St.xE - 0.9 - _ ||
        P < r0.z1 + 1.8 + _ ||
        P > St.z - 0.9 - _
      )
        return !1;
      let I = 1e9;
      for (let R = 0; R < le.length - 1; R++)
        I = Math.min(
          I,
          fe(b, P, le[R][0], le[R][1], le[R + 1][0], le[R + 1][1]),
        );
      if (
        I < 1.35 + _ ||
        Math.hypot(b - U0.x, P - St.z) < 2.6 ||
        Math.hypot(b - r0.back.x0 - 0.65, P - r0.z1) < 2.6 ||
        fe(
          b,
          P,
          Y0.x - Math.sin(Y0.yaw) * 1.3,
          Y0.z - Math.cos(Y0.yaw) * 1.3,
          U0.x,
          St.z,
        ) <
          1.25 + _ + 0.4
      )
        return !1;
      for (const R of v)
        if (Math.hypot(R.x - b, R.z - P) < R.r + _ + 0.55) return !1;
      return !0;
    },
    l = (b, P, _, I, R = {}) => v.push({ kind: b, x: P, z: _, yaw: I, ...R });
  (v.push({ kind: "yew", x: ie.x, z: ie.z, r: 1.6 }),
    v.push({ kind: "angel", x: b0.x, z: b0.z, r: 0.75 }),
    [
      [6.3, 66.2],
      [6.3, 68.6],
      [6.3, 71],
      [6.3, 73.4],
    ].forEach(([b, P], _) =>
      v.push({ kind: "fresh", x: b, z: P, r: 1, yaw: Math.PI / 2, i: _ }),
    ));
  const h = [
    "round",
    "round",
    "gothic",
    "shoulder",
    "round",
    "celtic",
    "iron",
    "table",
    "shoulder",
    "gothic",
    "kerb",
    "round",
    "obelisk",
  ];
  let c = 0;
  for (let b = 0; b < 900 && c < 30; b++) {
    const P = Math.floor(t() * 10),
      _ = -7.2 + P * 1.55 + (t() - 0.5) * 0.4,
      I = r0.z1 + 2.2 + t() * 12.2;
    let R = h[Math.floor(t() * h.length)];
    (R === "obelisk" && v.some((L) => L.kind === "obelisk") && (R = "round"),
      R === "table" &&
        v.filter((L) => L.kind === "table").length >= 2 &&
        (R = "gothic"));
    const V =
      R === "table" ? 1.1 : R === "kerb" ? 1 : R === "obelisk" ? 0.6 : 0.5;
    n(_, I, V) &&
      (l(R, _, I, Math.PI / 2 + (t() - 0.5) * 0.25, {
        r: V,
        lean: (t() - 0.5) * 0.22,
        tip: (t() - 0.5) * 0.12,
        sink: t() * 0.08,
        s: 0.85 + t() * 0.35,
      }),
      c++);
  }
  for (const b of v) {
    const P = new wt().compose(
        at(b.x, 0, b.z),
        new w0().setFromEuler(
          new pe(b.tip || 0, b.yaw || 0, b.lean || 0, "YXZ"),
        ),
        at(1, 1, 1),
      ),
      _ = (R, V) => {
        V.push(Ct(R.applyMatrix4(P)));
      },
      I = b.s || 1;
    if (["round", "gothic", "shoulder"].includes(b.kind)) {
      const R = (0.48 + t() * 0.3) * I,
        V = (0.62 + t() * 0.45) * I,
        L = 0.1 + t() * 0.05,
        K = Ic(b.kind, R, V, L);
      (K.translate(0, -0.12 - (b.sink || 0), 0),
        t() < 0.07 &&
          (K.rotateX(-Math.PI / 2 + 0.05), K.translate(0, 0.03, V * 0.5)),
        _(K, p.stone),
        i(b.x - 0.32 * I, b.x + 0.32 * I, b.z - 0.32 * I, b.z + 0.32 * I, V));
    } else if (b.kind === "celtic") {
      const R = 1.25 + t() * 0.35;
      (_(_c(R), p.stone), i(b.x - 0.3, b.x + 0.3, b.z - 0.3, b.z + 0.3, R));
    } else if (b.kind === "iron") {
      const R = 0.95 + t() * 0.2,
        V = [
          Gt(0.035, R, 0.035, 0, R / 2, 0),
          Gt(0.46, 0.035, 0.035, 0, R * 0.72, 0),
          new s0(0.08, 0.008, 4, 14).translate(0, R * 0.72, 0),
        ],
        L = a0(V.map((K) => d0(K)));
      (L.applyMatrix4(P), p.iron.push(L), a.push({ x: b.x, z: b.z, r: 0.12 }));
    } else if (b.kind === "table") {
      const K = [
        Gt(0.85, 0.75, 1.9, 0, 0.375, 0),
        Gt(0.99, 0.1, 2.04, 0, 0.8, 0),
        Gt(0.9099999999999999, 0.08, 1.96, 0, 0.04, 0),
      ];
      _(a0(K.map((J) => d0(J))), p.stone);
      const j =
          (Math.abs(Math.cos(b.yaw)) * 1.9) / 2 +
          (Math.abs(Math.sin(b.yaw)) * 0.85) / 2 +
          0.08,
        O =
          (Math.abs(Math.sin(b.yaw)) * 1.9) / 2 +
          (Math.abs(Math.cos(b.yaw)) * 0.85) / 2 +
          0.08;
      i(b.x - j, b.x + j, b.z - O, b.z + O, 0.75 + 0.1);
    } else if (b.kind === "kerb") {
      const L = [
        Gt(0.1, 0.16, 1.9, -0.4, 0.06, 0),
        Gt(0.1, 0.16, 1.9, 0.4, 0.06, 0),
        Gt(0.9, 0.16, 0.1, 0, 0.06, -0.95),
        Gt(0.9, 0.16, 0.1, 0, 0.06, 0.95),
        Gt(0.5, 0.6, 0.1, 0, 0.28, -0.97),
      ];
      (_(a0(L.map((K) => d0(K))), p.stone),
        i(b.x - 0.35, b.x + 0.35, b.z - 0.35, b.z + 0.35, 0.6));
    } else if (b.kind === "obelisk") {
      const R = [
        Gt(0.7, 0.4, 0.7, 0, 0.2, 0),
        Gt(0.52, 0.5, 0.52, 0, 0.65, 0),
        new Pt(0.14, 0.2, 1.7, 4).rotateY(Math.PI / 4).translate(0, 1.75, 0),
        new no(0.14, 0.22, 4).rotateY(Math.PI / 4).translate(0, 2.71, 0),
      ];
      (_(a0(R.map((V) => d0(V))), p.stone),
        i(b.x - 0.38, b.x + 0.38, b.z - 0.38, b.z + 0.38, 2.8));
    } else if (b.kind === "fresh") {
      const R = new t0(1, 14, 8, 0, vo, 0, Math.PI / 2).scale(0.55, 0.28, 1.05);
      {
        const O = R.attributes.position;
        for (let J = 0; J < O.count; J++)
          O.setY(J, O.getY(J) + It(O.getX(J) * 7 + b.i, O.getZ(J) * 7) * 0.03);
        R.computeVertexNormals();
      }
      (R.translate(b.x, -0.02, b.z), p.earth.push(Ct(R)));
      const V = b.x,
        L = b.z - 1.2,
        K = (t() - 0.5) * 0.12,
        j = a0(
          [
            Gt(0.07, 0.95, 0.05, 0, 0.47, 0),
            Gt(0.45, 0.06, 0.05, 0, 0.72, 0),
          ].map((O) => d0(O)),
        );
      if (
        (j.rotateZ(K), j.translate(V, -0.05, L), p.wood.push(Ct(j)), b.i === 3)
      ) {
        const O = a0(
          [
            Gt(0.035, 0.85, 0.035, 0, 0.62, 0),
            Gt(0.16, 0.035, 0.03, 0, 1.03, 0),
            Gt(0.18, 0.26, 0.012, 0, 0.1, 0),
          ].map((J) => d0(J)),
        );
        (O.rotateZ(0.22),
          O.rotateY(0.6),
          O.translate(b.x + 0.25, 0.02, b.z + 0.55),
          p.iron.push(O));
      }
      i(b.x - 0.5, b.x + 0.5, b.z - 1.3, b.z + 1, 0.95);
    }
  }
  {
    const b = a0(
        [
          Gt(0.95, 0.18, 0.95, 0, 0.09, 0),
          Gt(0.78, 0.8, 0.78, 0, 0.58, 0),
          Gt(0.9, 0.12, 0.9, 0, 1.04, 0),
        ].map((I) => d0(I)),
      ),
      P = new wt().compose(
        at(b0.x, 0, b0.z),
        new w0().setFromAxisAngle(at(0, 1, 0), b0.yaw),
        at(1, 1, 1),
      );
    p.stone.push(Ct(b.applyMatrix4(P)));
    const _ = Cc();
    (_.applyMatrix4(
      new wt().compose(
        at(b0.x, 1.1, b0.z),
        new w0().setFromAxisAngle(at(0, 1, 0), b0.yaw),
        at(1.02, 1.02, 1.02),
      ),
    ),
      p.angel.push(Ct(_)),
      i(b0.x - 0.52, b0.x + 0.52, b0.z - 0.52, b0.z + 0.52, 2.8));
  }
  const M = [],
    m = new Ks();
  {
    for (let V = 0; V < 4; V++) {
      const L = (V / 4) * vo + t() * 0.5,
        K = [];
      for (let J = 0; J <= 6; J++) {
        const tt = J / 6;
        K.push(
          at(
            ie.x + Math.cos(L) * (0.35 + tt * 1.6 * (0.7 + t() * 0.3)),
            -0.2 + tt * 6.2,
            ie.z + Math.sin(L) * (0.35 + tt * 1.6),
          ),
        );
      }
      const j = Vt(K, (J) => 0.42 - J * 0.3, 10),
        O = new Float32Array(j.attributes.position.count * 3).fill(0.4);
      (j.setAttribute("aK", new vt(O, 3)), M.push(j));
    }
    const [P, _, I, R] = Ao(Bt.yew);
    for (let V = 0; V < 900; V++) {
      const L = t() * vo,
        K = Math.acos(Math.pow(t(), 0.6)),
        j = 4.2 * (0.85 + 0.15 * It(L * 2, K * 3)),
        O = j * (0.8 + 0.25 * t()),
        J = Math.cos(L) * Math.sin(K),
        tt = Math.cos(K),
        st = Math.sin(L) * Math.sin(K),
        G = ie.x + J * O,
        q = 3.2 + tt * O * 1.25,
        U = ie.z + st * O * 0.95;
      if (q < 1.4) continue;
      const Z = 1 + t() * 0.7,
        ot = Math.hypot(J, st) || 1,
        $ = -st / ot,
        C = J / ot,
        T = (t() - 0.5) * 1.2,
        D = tt * C * 1,
        N = st * $ - J * C,
        H = -tt * $,
        Q = Math.cos(T),
        W = Math.sin(T),
        B = $ * Q + D * W,
        F = N * W,
        E = C * Q + H * W,
        Y = -$ * W + D * Q,
        et = N * Q,
        nt = -C * W + H * Q,
        it = 0.4 + t() * 0.25,
        lt = m.n,
        ht = Math.hypot(J, tt + 0.3, st);
      for (const [yt, Ft, Ut, Lt] of [
        [-1, -1, P, _],
        [1, -1, I, _],
        [1, 1, I, R],
        [-1, 1, P, R],
      ])
        m.v(
          G + ((B * yt + Y * Ft) * Z) / 2,
          q + ((F * yt + et * Ft) * Z) / 2,
          U + ((E * yt + nt * Ft) * Z) / 2,
          J / ht,
          (tt + 0.3) / ht,
          st / ht,
          Ut,
          Lt,
          it,
          it,
          it,
          0.1,
        );
      m.I.push(lt, lt + 1, lt + 2, lt, lt + 2, lt + 3);
    }
    a.push({ x: ie.x, z: ie.z, r: 1.15, tree: !0 });
  }
  const k = new Ks();
  {
    const [b, P, _, I] = Ao(Bt.grass);
    for (let R = 0; R < 3400; R++) {
      const V = St.xW + 0.35 + t() * (St.xE - St.xW - 0.7),
        L = r0.z1 + 0.35 + t() * (St.z - r0.z1 - 0.7);
      let K = 1e9;
      for (let tt = 0; tt < le.length - 1; tt++)
        K = Math.min(
          K,
          fe(V, L, le[tt][0], le[tt][1], le[tt + 1][0], le[tt + 1][1]),
        );
      if ((K < 0.78 && t() < 0.9) || Math.hypot(V - ie.x, L - ie.z) < 1.2)
        continue;
      const j =
          (K < 0.8 ? 0.15 : 0.3) +
          t() * 0.38 +
          (Math.abs(V) > 7.4 || L > 75.6 ? 0.2 : 0),
        O = t() * Math.PI,
        J = 0.55 + t() * 0.45;
      for (let tt = 0; tt < 2; tt++) {
        const st = O + (tt * Math.PI) / 2,
          G = Math.cos(st) * j * 0.55,
          q = Math.sin(st) * j * 0.55,
          U = k.n,
          Z = (t() - 0.5) * 0.15;
        (k.v(V - G, -0.03, L - q, 0, 1, 0, b, P, J * 0.45, J * 0.5, J * 0.4, 0),
          k.v(
            V + G,
            -0.03,
            L + q,
            0,
            1,
            0,
            _,
            P,
            J * 0.45,
            J * 0.5,
            J * 0.4,
            0,
          ),
          k.v(V + G + Z, j, L + q, 0, 1, 0, _, I, J, J, J * 0.9, 1),
          k.v(V - G + Z, j, L - q, 0, 1, 0, b, I, J, J, J * 0.9, 1),
          k.I.push(U, U + 1, U + 2, U, U + 2, U + 3));
      }
    }
  }
  const S = (b, P) =>
      i0(P, b, (_) => {
        const I = At("garden_moss");
        ((_.uniforms.tMoss = { value: I.map }),
          (_.vertexShader = _.vertexShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vSN;`,
            )
            .replace(
              "#include <uv_vertex>",
              `#include <uv_vertex>
vSN = normalize(mat3(modelMatrix) * normal);`,
            )),
          (_.fragmentShader = _.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
uniform sampler2D tMoss;
varying vec3 vSN;`,
            )
            .replace(
              "#include <map_fragment>",
              `#include <map_fragment>
      {
        float mk = smoothstep(0.45, 0.85, vSN.y + (texture2D(tMoss, vMapUv * 0.6).g - 0.15) * 1.6) + smoothstep(0.35, 0.0, vFW.y) * 0.5;
        diffuseColor.rgb = mix(diffuseColor.rgb, texture2D(tMoss, vMapUv * 1.3).rgb, clamp(mk, 0.0, 1.0) * 0.85);
      }`,
            )));
      }),
    A = {
      wall: S("ywall", At("forest_wall")),
      coping: S("ycoping", At("forest_stone")),
      stone: S("ystone", At("forest_stone")),
      angel: S("yangel", At("forest_stone")),
      iron: i0(At("rust_metal"), "yiron"),
      wood: i0(At("boards_barricade"), "ywood"),
      earth: i0(At("forest_path"), "yearth"),
      flag: S("yflag", At("forest_stone")),
    };
  for (const b of Object.keys(p)) {
    if (!p[b].length) continue;
    const P = new bt(
      a0(p[b].map((_) => d0(_, ["position", "normal", "uv"]))),
      A[b],
    );
    ((P.name = "yard_" + b),
      (P.castShadow = b !== "flag" && b !== "earth"),
      (P.receiveShadow = !0),
      e.add(P));
  }
  return {
    group: e,
    colliders: r,
    circles: a,
    yewParts: M,
    yewLeaves: m,
    grass: k,
    angel: b0,
    yew: ie,
    graves: v,
  };
}
function Wc(s, o, t) {
  const u = new Kt();
  u.name = "forest_stream";
  const e = [];
  {
    const l = o.stream,
      f = 5.6,
      h = [],
      c = [],
      M = [],
      m = [];
    let k = 0;
    for (let _ = 0; _ < l.n; _++) {
      const I = l.x[_],
        R = l.z[_];
      if (I < -51 || I > 51) continue;
      const V = -l.tz[_],
        L = l.tx[_];
      for (const K of [-1, -0.5, 0, 0.5, 1])
        (h.push(I + (V * K * f) / 2, we.water, R + (L * K * f) / 2),
          c.push(l.s[_], (K * f) / 2),
          M.push(0, 1, 0));
      k++;
    }
    for (let _ = 0; _ < k - 1; _++)
      for (let I = 0; I < 4; I++) {
        const R = _ * 5 + I,
          V = R + 5;
        m.push(R, R + 1, V, R + 1, V + 1, V);
      }
    const S = new Rt();
    (S.setAttribute("position", new xt(h, 3)),
      S.setAttribute("normal", new xt(M, 3)),
      S.setAttribute("uv", new xt(c, 2)),
      S.setIndex(m));
    const A = new n0({
        color: 395531,
        roughness: 0.06,
        metalness: 0,
        envMapIntensity: 1.6,
      }),
      b = i0(
        A,
        "water",
        (_) => {
          ((_.vertexShader = _.vertexShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec2 vWUv;`,
            )
            .replace(
              "#include <uv_vertex>",
              `#include <uv_vertex>
vWUv = uv;`,
            )),
            (_.fragmentShader = _.fragmentShader
              .replace(
                "#include <common>",
                `#include <common>
varying vec2 vWUv;`,
              )
              .replace(
                "#include <normal_fragment_maps>",
                `#include <normal_fragment_maps>
        {
          // ripples carried downstream: a few wave trains, their slopes summed (u along the flow, v across)
          float t = uFT;
          vec2 p = vWUv;
          vec2 g = vec2(0.0);
          g += vec2(cos(p.x * 3.1 - t * 2.4 + sin(p.y * 1.7) * 1.3), 0.0) * 0.07;
          g += vec2(cos(p.x * 5.3 + p.y * 2.1 - t * 3.3) * 0.05, cos(p.x * 5.3 + p.y * 2.1 - t * 3.3) * 0.02);
          g += vec2(0.0, cos(p.y * 4.7 + p.x * 1.3 - t * 1.9) * 0.05);
          float n1 = fnoise(p * vec2(1.6, 2.4) - vec2(t * 0.9, 0.0)), n2 = fnoise(p * vec2(4.2, 5.1) - vec2(t * 1.6, 0.3 * t));
          g += (vec2(n1, n2) - 0.5) * 0.16;
          // the ripple's slope is in the ribbon's frame (u downstream); the ribbon lies flat, so tip the view normal round x and z
          vec3 wn = normalize(vec3(-g.x, 1.0, -g.y));
          normal = normalize((viewMatrix * vec4(wn, 0.0)).xyz);
        }`,
              )
              .replace(
                "#include <emissivemap_fragment>",
                `#include <emissivemap_fragment>
        {
          // a little foam where it runs fast (in the middle, in streaks) and where it laps the banks
          float fo = smoothstep(0.72, 0.95, fnoise(vWUv * vec2(0.7, 3.0) - vec2(uFT * 0.8, 0.0))) * (1.0 - smoothstep(0.4, 1.6, abs(vWUv.y)));
          totalEmissiveRadiance += vec3(0.012, 0.016, 0.02) * fo;
          diffuseColor.rgb += vec3(0.05, 0.06, 0.07) * fo;
          // the night sky in it: a faint sheen moving with the ripples, brighter toward grazing
          vec3 Vv = normalize(vViewPosition);
          float fr = pow(1.0 - clamp(dot(normal, Vv), 0.0, 1.0), 4.0);
          float rip = 0.5 + 0.5 * sin(vWUv.x * 6.0 - uFT * 3.0 + fnoise(vWUv * 2.0) * 6.0);
          totalEmissiveRadiance += vec3(0.005, 0.009, 0.014) * (0.3 + 0.7 * rip) + vec3(0.03, 0.045, 0.07) * fr;
        }`,
              )));
        },
        { canopy: !1 },
      ),
      P = new bt(S, b);
    ((P.name = "forest_water"), (P.receiveShadow = !0), u.add(P));
  }
  const r = [],
    a = [],
    p = Tt.x,
    i = Tt.z0 - 0.35,
    d = Tt.z1 + 0.35,
    y = d - i;
  for (const l of [-0.52, 0.52]) {
    const f = [];
    for (let c = 0; c <= 8; c++) {
      const M = c / 8;
      f.push(
        at(
          p + l + (t() - 0.5) * 0.03,
          -0.2 - Math.sin(Math.PI * M) * 0.05,
          i - 0.4 + M * (y + 0.8),
        ),
      );
    }
    const h = Vt(f, () => 0.14 + t() * 0.01, 10);
    r.push(h);
  }
  for (let l = i + 0.04; l < d - 0.1;) {
    const f = 0.18 + t() * 0.07,
      h = 1.52 + (t() - 0.5) * 0.1,
      c = t() < 0.12 ? (t() - 0.5) * 0.06 : 0,
      M = new qt(h, 0.05, f - 0.015, 3, 1, 1),
      m = M.attributes.position;
    for (let k = 0; k < m.count; k++)
      m.setY(k, m.getY(k) + c * (m.getX(k) / h) ** 2 * 4);
    (M.computeVertexNormals(),
      M.rotateY((t() - 0.5) * 0.04),
      M.translate(
        p + (t() - 0.5) * 0.06,
        0.005 - Math.sin((Math.PI * (l - i)) / y) * 0.05 + (t() - 0.5) * 0.008,
        l + f / 2,
      ),
      r.push(Ct(M)),
      (l += f));
  }
  for (const l of [-0.74, 0.74]) {
    const f = Math.round(y / 1.9);
    for (let h = 0; h <= f; h++) {
      const c = i + 0.12 + (h / f) * (y - 0.24),
        M = h === 0 || h === f,
        m = M ? 2.02 : 1.08,
        k = new qt(0.1, m + 0.25, 0.1).translate(p + l, m / 2 - 0.12 - 0.05, c);
      r.push(Ct(k));
    }
    for (const h of [0.98, 0.55]) {
      const c = [];
      for (let M = 0; M <= 10; M++) {
        const m = M / 10;
        c.push(
          at(
            p + l + Math.sin(m * 9 + l) * 0.01,
            h - Math.sin(Math.PI * m) * 0.05,
            i + 0.12 + m * (y - 0.24),
          ),
        );
      }
      r.push(Vt(c, () => (h > 0.9 ? 0.042 : 0.032), 7));
    }
    e.push({
      x0: p + l - 0.07,
      x1: p + l + 0.07,
      z0: Tt.z0 - 0.3,
      z1: Tt.z1 + 0.3,
      y0: 0,
      y1: 1.1,
    });
  }
  for (const l of [i - 0.3, d + 0.3])
    for (let f = 0; f < 3; f++) {
      const h = new qt(0.55 + t() * 0.3, 0.45, 0.5 + t() * 0.2, 2, 2, 2),
        c = h.attributes.position;
      for (let M = 0; M < c.count; M++)
        c.setXYZ(
          M,
          c.getX(M) * (0.9 + t() * 0.2),
          c.getY(M) * (0.9 + t() * 0.2),
          c.getZ(M) * (0.9 + t() * 0.2),
        );
      (h.computeVertexNormals(),
        h.translate(
          p - 0.6 + f * 0.6,
          -0.45 + t() * 0.1,
          l + (t() - 0.5) * 0.2,
        ),
        a.push(Ct(h)));
    }
  const w = i0(At("forest_bark"), "bridgelog"),
    g = i0(At("boards_barricade"), "bridgewood", (l) => {
      const f = At("garden_moss");
      ((l.uniforms.tMoss = { value: f.map }),
        (l.vertexShader = l.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vSN;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vSN = normalize(mat3(modelMatrix) * normal);`,
          )),
        (l.fragmentShader = l.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform sampler2D tMoss;
varying vec3 vSN;`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      { float mk = smoothstep(0.55, 0.9, (texture2D(tMoss, vMapUv * 0.5).g - 0.1) * 2.2) * (0.35 + 0.65 * clamp(vSN.y, 0.0, 1.0)); diffuseColor.rgb = mix(diffuseColor.rgb * vec3(0.85, 0.82, 0.78), texture2D(tMoss, vMapUv * 1.3).rgb, mk * 0.7); }`,
          )));
    }),
    z = i0(At("garden_rock"), "bridgestone"),
    x = r.slice(0, 2),
    v = r.slice(2),
    n = (l, f, h) => {
      const c = new bt(a0(l.map((M) => d0(M))), f);
      ((c.name = h), (c.castShadow = !0), (c.receiveShadow = !0), u.add(c));
    };
  return (
    n(x, w, "bridge_stringers"),
    n(v, g, "bridge_deck"),
    n(a, z, "bridge_footings"),
    { group: u, colliders: e, center: [p, we.water + 0.3, (Tt.z0 + Tt.z1) / 2] }
  );
}
function Rc(s, o, t, u = {}) {
  const e = [],
    r = (f, h, c, M = 1) => {
      const m = [f, h, c, t(), t(), t(), t(), M];
      (f > 1 && f < 11 && c > 197.8 && c < 209.2) || e.push(m);
    },
    a = (f, h, c = 2.2) => o.heightAt(f, h) + 0.3 + Math.pow(t(), 1.5) * c;
  for (let f = 0; f < 140 && e.length < 56; f++) {
    const h = Math.floor(t() * o.stream.n),
      c = o.stream.x[h],
      M = o.stream.z[h];
    if (
      c < -26 ||
      c > 28 ||
      Math.abs(c - 2.5) < 2.5 ||
      (Math.abs(c - 2.5) > 14 && t() < 0.5)
    )
      continue;
    const m = (t() - 0.5) * 4.5;
    r(c - o.stream.tz[h] * m, -1.75 + t() * 1.9, M + o.stream.tx[h] * m, 1.1);
  }
  if (u.warn) {
    const [f, h, c] = u.warn;
    for (let M = 0, m = 0; M < 18 && m < 200; m++) {
      const k = t() * Math.PI * 2,
        S = Math.sqrt(t()) * c,
        A = f + Math.cos(k) * S,
        b = h + Math.sin(k) * S;
      o.sdAt(A, b) < 0.6 || (r(A, a(A, b, 1.8), b, 0.85), M++);
    }
  }
  for (let f = 0, h = 0; f < 200 && h < 22; f++) {
    const c = t() * Math.PI * 2,
      M = Math.sqrt(t()),
      m = R0.x + Math.cos(c) * M * R0.rx,
      k = R0.z + Math.sin(c) * M * R0.rz;
    o.clearingSd(m, k) > 0 ||
      o.dPathAt(m, k) < 4 ||
      (m > 1 && m < 11 && k > 198 && k < 209) ||
      (r(m, 0.3 + Math.pow(t(), 1.3) * 1.8, k, 0.8), h++);
  }
  const p = e.length,
    i = new Float32Array(p * 3),
    d = new Float32Array(p * 4),
    y = new Float32Array(p);
  e.forEach((f, h) => {
    (i.set([f[0], f[1], f[2]], h * 3),
      d.set([f[3], f[4], f[5], f[6]], h * 4),
      (y[h] = f[7]));
  });
  const w = new Rt();
  (w.setAttribute("position", new vt(i, 3)),
    w.setAttribute("aSeed", new vt(d, 4)),
    w.setAttribute("aK", new vt(y, 1)),
    (w.boundingSphere = new hs(new dt(0, 0, 140), 120)));
  const g = {
      uScale: { value: 600 },
      uScare: { value: Array.from({ length: 4 }, () => new H0(0, 0, 0, -99)) },
      uScareD: { value: new H0(0, 0, 0, 0) },
      uCol: { value: new Xt(0.75, 1, 0.3) },
    },
    z = new P0({
      uniforms: { ...ko.merge([So.fog]), ...g },
      vertexShader: `
attribute vec4 aSeed;
attribute float aK;
uniform float uFT, uScale;
uniform vec4 uScare[4];
uniform vec4 uScareD;
varying float vGlow;
varying float vFogDepth;
varying vec3 vFW;
void main() {
  float t = uFT;
  vec4 s = aSeed;
  // the wander: slow loops, each its own
  vec3 p = position;
  p.x += sin(t * (0.21 + s.x * 0.2) + s.y * 40.0) * (0.5 + s.z * 0.7) + sin(t * (0.53 + s.w * 0.3) + s.x * 17.0) * 0.18;
  p.z += cos(t * (0.17 + s.y * 0.22) + s.z * 33.0) * (0.5 + s.x * 0.7) + cos(t * (0.61 + s.z * 0.3) + s.w * 11.0) * 0.18;
  p.y += sin(t * (0.3 + s.w * 0.25) + s.x * 23.0) * (0.25 + s.y * 0.3);
  // the flash: most blink (a quick swell, a slow fade, a dark pause), some glow steadily and dim
  float period = 2.2 + s.y * 4.5, ph = fract(t / period + s.z);
  float flash = smoothstep(0.0, 0.08, ph) * (1.0 - smoothstep(0.08, 0.42, ph));
  float glow = s.w < 0.22 ? 0.35 + 0.15 * sin(t * 1.3 + s.x * 30.0) : flash;
  // the scares: dark at once, flung up and away, back when it is over
  float dark = 1.0;
  for (int i = 0; i < 4; i++) {
    vec4 sc = uScare[i];
    float dur = i == 0 ? uScareD.x : i == 1 ? uScareD.y : i == 2 ? uScareD.z : uScareD.w;
    float age = t - sc.w;
    if (age < 0.0 || age > dur + 2.5 || sc.z <= 0.0) continue;
    vec2 d = position.xz - sc.xy; float dl = length(d);
    if (dl > sc.z) continue;
    float edge = 1.0 - smoothstep(sc.z * 0.7, sc.z, dl);
    float off = smoothstep(0.0, 0.25, age) * (1.0 - smoothstep(dur, dur + 2.5, age));
    dark = min(dark, 1.0 - off * edge);
    float fling = (1.0 - exp(-age * 1.8)) * (1.0 - smoothstep(dur, dur + 2.5, age)) * edge;
    p.xz += (dl > 1e-3 ? d / dl : vec2(0.0)) * fling * (2.0 + s.x * 2.0);
    p.y += fling * (1.5 + s.y * 2.0);
  }
  vGlow = glow * dark * aK;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(0.2 * uScale / -mv.z, 2.5, 44.0) * (0.55 + 0.45 * glow);
  vFogDepth = -mv.z; vFW = p;
  if (vGlow < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);          // (a dark one is not drawn)
}`,
      fragmentShader: `
uniform vec3 uCol;
varying float vGlow;
#include <fog_pars_fragment>
void main() {
  vec2 c = gl_PointCoord - 0.5; float d = length(c);
  if (d > 0.5) discard;
  float core = smoothstep(0.13, 0.02, d), halo = smoothstep(0.5, 0.0, d);
  vec3 col = uCol * (core * 4.0 + halo * halo * halo * 0.9) * vGlow;
  #ifdef USE_FOG
    float fogK = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth * 0.6);
    col *= 1.0 - fogK;
  #endif
  gl_FragColor = vec4(col, 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
      fog: !0,
    });
  ((z.uniforms.uFT = K0.uFT), Object.assign(z.uniforms, K0));
  const x = new Do(w, z);
  ((x.name = "forest_fireflies"), (x.frustumCulled = !1), (x.renderOrder = 33));
  let v = 0;
  return {
    points: x,
    api: {
      scare(f, h, c = 6, M = 6) {
        const m = v++ % 4;
        (g.uScare.value[m].set(f, h, c, K0.uFT.value),
          g.uScareD.value.setComponent(m, M));
      },
      reset() {
        for (const f of g.uScare.value) f.set(0, 0, 0, -99);
      },
      get count() {
        return p;
      },
    },
    update: (f) => {
      g.uScale.value =
        s.game.post.size.y / (2 * Math.tan((f.fov * Math.PI) / 360));
    },
  };
}
function Nc(s, o, t, u) {
  const e = [],
    r = (g, z) => {
      const x = Math.floor((g - u.box.x0) / 0.5),
        v = Math.floor((z - u.box.z0) / 0.5);
      return x < 0 || v < 0 || x >= u.nx || v >= u.nz
        ? 1
        : u.data[v * u.nx + x] / 255;
    };
  for (let g = 0; g < 8e3 && e.length < 9; g++) {
    const z = -42 + o() * 84,
      x = 80 + o() * 128,
      v = s.sdAt(z, x);
    if (
      v < -2.5 ||
      v > 7 ||
      r(z, x) > 0.35 ||
      (z > _t.x0 - 7 && z < _t.x1 + 7 && x > _t.z0 - 7 && x < _t.z1 + 7)
    )
      continue;
    let l = 0;
    for (let f = 0; f < 6; f++)
      l += r(z + Math.cos(f) * 4, x + Math.sin(f) * 4);
    l / 6 < 0.35 ||
      e.some((f) => Math.hypot(f[0] - z, f[1] - x) < 16) ||
      e.push([z, x, 0.9 + o() * 0.9, o()]);
  }
  const a = new Po(),
    p = new m0(1, 1).translate(0, 0.5, 0);
  ((a.index = p.index),
    a.setAttribute("position", p.attributes.position),
    a.setAttribute("uv", p.attributes.uv));
  const i = new Float32Array(e.length * 4),
    d = new Float32Array(e.length * 2);
  (e.forEach(([g, z, x, v], n) => {
    (i.set([g, s.heightAt(g, z) - 0.3, z, x], n * 4),
      d.set([v, 16 + v * 10], n * 2));
  }),
    a.setAttribute("aB", new M0(i, 4)),
    a.setAttribute("aS", new M0(d, 2)),
    (a.instanceCount = e.length));
  const y = new P0({
      uniforms: {
        uFT: K0.uFT,
        uMoon: { value: t.clone() },
        uCol: { value: new Xt(0.32, 0.42, 0.6) },
        uK: { value: 0.006 },
      },
      vertexShader: `
attribute vec4 aB;     // base (on the ground), width
attribute vec2 aS;     // seed, length
uniform vec3 uMoon;
varying vec2 vUv;
varying float vFade;
varying float vSeed;
void main() {
  vec3 base = aB.xyz, ax = normalize(uMoon);
  vec3 toCam = normalize(cameraPosition - base);
  vec3 right = normalize(cross(ax, toCam));
  vec3 wp = base + right * position.x * aB.w + ax * position.y * aS.y;
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mv;
  vUv = uv; vSeed = aS.x;
  // (gone when the eye is in it or close; faint far off)
  float dc = length(cameraPosition - (base + ax * clamp(dot(cameraPosition - base, ax), 0.0, aS.y)));
  vFade = smoothstep(2.5, 9.0, dc) * (1.0 - smoothstep(30.0, 60.0, -mv.z));
}`,
      fragmentShader: `
uniform float uFT, uK;
uniform vec3 uCol;
varying vec2 vUv;
varying float vFade;
varying float vSeed;
float h1(float x) { return fract(sin(x * 91.7) * 43758.5453); }
float n1(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(h1(i), h1(i + 1.0), f); }
void main() {
  // (a soft gaussian across: a thread of lit mist, never a hard line, even edge-on far off)
  float xa = (vUv.x - 0.5) * 2.0;
  float across = exp(-xa * xa * 3.0) * (1.0 - smoothstep(0.7, 1.0, abs(xa)));
  float streak = 0.55 + 0.45 * n1(vUv.x * 9.0 + vSeed * 30.0 + uFT * 0.05) * n1(vUv.x * 23.0 - uFT * 0.03 + vSeed * 11.0);
  float along = smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
  float a = across * streak * along * vFade * (0.7 + 0.3 * sin(uFT * 0.3 + vSeed * 20.0));
  gl_FragColor = vec4(uCol * a * uK, 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
      side: p0,
    }),
    w = new bt(a, y);
  return (
    (w.name = "forest_moonbeams"),
    (w.frustumCulled = !1),
    (w.renderOrder = 34),
    { mesh: w, count: e.length }
  );
}
function Lc(s, o) {
  const t = s.length,
    u = new Float32Array(t * 3),
    e = new Float32Array(t),
    r = new Float32Array(t);
  s.forEach((d, y) => {
    (u.set([d.pos.x, d.pos.y, d.pos.z], y * 3),
      (e[y] = y),
      (r[y] = d.stone ? 0.55 : 1));
  });
  const a = new Rt();
  (a.setAttribute("position", new vt(u, 3)),
    a.setAttribute("aLamp", new vt(e, 1)),
    a.setAttribute("aK", new vt(r, 1)));
  const p = new P0({
      uniforms: {
        uFT: K0.uFT,
        uGlow: o,
        uScale: { value: 600 },
        uCol: { value: new Xt(1, 0.5, 0.17) },
      },
      vertexShader: `
attribute float aLamp;
attribute float aK;
uniform float uFT, uScale;
uniform float uGlow[${zo}];
varying float vK;
float lampFlicker(float t, float i) { return 0.9 + 0.055 * sin(t * 7.3 + i * 1.7) + 0.035 * sin(t * 13.1 + i * 3.1) * sin(t * 2.3 + i) + 0.02 * sin(t * 23.0 + i * 5.3); }
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float d = -mv.z;
  int li = int(aLamp + 0.5); float g = 0.0;
  for (int k = 0; k < ${zo}; k++) if (k == li) g = uGlow[k];
  // (a halo about a metre and a half across; kept a few pixels wide far off; near ones fade, the air glow has them)
  gl_PointSize = clamp(1.5 * uScale / d, 10.0, 180.0);
  vK = g * lampFlicker(uFT, aLamp) * aK * smoothstep(1.2, 4.0, d) * (1.0 - smoothstep(70.0, 110.0, d)) * (0.6 + 0.4 * smoothstep(6.0, 30.0, d));
  if (vK < 0.002) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}`,
      fragmentShader: `
uniform vec3 uCol;
varying float vK;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  if (d > 1.0) discard;
  float h = exp(-d * d * 7.0) * 0.55 + exp(-d * d * 30.0) * 0.6;
  gl_FragColor = vec4(uCol * h * vK * 0.55, 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
    }),
    i = new Do(a, p);
  return (
    (i.name = "forest_lantern_halos"),
    (i.frustumCulled = !1),
    (i.renderOrder = 35),
    { pts: i, mat: p }
  );
}
const Us = Math.PI * 2;
function Dc() {
  const s = At("garden_rock"),
    o = At("garden_moss"),
    t = { tRock: { value: s.map }, tMoss: { value: o.map } },
    u = i0(s, "rock", (e) => {
      (Object.assign(e.uniforms, t),
        (e.vertexShader = e.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vRN;
attribute float aMossy;
varying float vMossy;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vRN = normalize(mat3(modelMatrix) * normal); vMossy = aMossy;`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform sampler2D tRock, tMoss;
varying vec3 vRN;
varying float vMossy;`,
          )
          .replace(
            "#include <map_fragment>",
            `
      {
        // three ways by world position (no seams on a round stone)
        vec3 w = abs(vRN); w = pow(w, vec3(4.0)); w /= (w.x + w.y + w.z);
        vec3 rc = texture2D(tRock, vFW.zy / 1.2).rgb * w.x + texture2D(tRock, vFW.xz / 1.2).rgb * w.y + texture2D(tRock, vFW.xy / 1.2).rgb * w.z;
        vec3 mc = texture2D(tMoss, vFW.xz / 1.6).rgb;
        float mk = smoothstep(0.1, 0.55, vRN.y * 0.8 + vMossy * 0.5 + (texture2D(tMoss, vFW.xz * 0.37).g - 0.12) * 2.0);
        diffuseColor.rgb *= mix(rc, mc, mk * 0.95);
      }`,
          )));
    });
  return (
    (u.map = null),
    (u.normalMap = null),
    (u.aoMap = null),
    (u.roughnessMap = null),
    (u.metalnessMap = null),
    (u.roughness = 0.9),
    (u.metalness = 0),
    u
  );
}
function Bc(s, o = 2) {
  const t = new Sa(1, o),
    u = t.attributes.position,
    e = [s() * 10, s() * 10, s() * 10],
    r = 0.55 + s() * 0.35;
  for (let a = 0; a < u.count; a++) {
    const p = u.getX(a),
      i = u.getY(a),
      d = u.getZ(a),
      y =
        1 +
        0.22 * It(p * 1.6 + e[0], d * 1.6 + i * 0.8 + e[1]) +
        0.1 * It(p * 4 + e[2], i * 4 - d * 3),
      w = Math.max(0.72, y);
    u.setXYZ(a, p * w, i * w * r, d * w);
  }
  return (t.computeVertexNormals(), t.deleteAttribute("uv"), t);
}
function Vc(s, o, t, u) {
  const e = new Map(),
    r = [],
    a = Array.from({ length: 6 }, () => Bc(o)),
    p = (i, d, y, w = 0.35, g = 0.3) => {
      const z = s.heightAt(i, d),
        x = a[Math.floor(o() * a.length)].clone(),
        v = new wt().compose(
          at(i, z - y * w, d),
          new w0().setFromEuler(
            new pe((o() - 0.5) * 0.5, o() * Us, (o() - 0.5) * 0.5),
          ),
          at(y * (0.8 + o() * 0.5), y, y * (0.8 + o() * 0.5)),
        );
      x.applyMatrix4(v);
      const n = new Float32Array(x.attributes.position.count).fill(g);
      x.setAttribute("aMossy", new vt(n, 1));
      const l = t(i, d);
      return (e.has(l) || e.set(l, []), e.get(l).push(x), z);
    };
  for (let i = 0; i < 7600 && r.length < 780; i++) {
    const d = -50 + o() * 100,
      y = St.z + 1 + o() * 136,
      w = s.sdAt(d, y);
    if (
      s.dPathAt(d, y) > 22 ||
      w < 0.25 ||
      s.dStreamAt(d, y) < 4.6 ||
      (d > _t.x0 - 3 && d < _t.x1 + 3 && y > _t.z0 - 3 && y < _t.z1 + 3) ||
      u(d, y)
    )
      continue;
    const z = w < 3 ? 0.5 : w < 8 ? 0.3 : 0.12;
    if (o() > z * (0.4 + 0.6 * (0.5 + 0.5 * It(d * 0.15, y * 0.15)))) continue;
    const x = o() < 0.12,
      v = x ? 0.7 + o() * 0.8 : 0.18 + o() * 0.38;
    (p(d, y, v, x ? 0.45 : 0.35, x ? 0.5 : 0.3),
      w < v + 1.2 && r.push({ x: d, z: y, r: v * 0.85, rock: !0 }));
    const n = Math.floor(o() * 3);
    for (let l = 0; l < n; l++) {
      const f = o() * Us,
        h = v + 0.2 + o() * 0.5,
        c = d + Math.cos(f) * h,
        M = y + Math.sin(f) * h;
      s.sdAt(c, M) > 0.2 && p(c, M, 0.08 + o() * 0.12, 0.3, 0.1);
    }
  }
  for (let i = 0; i < s.stream.n; i += 2) {
    if (o() > 0.55) continue;
    const d = s.stream.x[i],
      y = s.stream.z[i];
    if (d < -46 || d > 46 || Math.abs(d - 2.5) < 2.2) continue;
    const w = (o() - 0.5) * 3.2,
      g = d - s.stream.tz[i] * w,
      z = y + s.stream.tx[i] * w;
    p(g, z, o() < 0.15 ? 0.5 + o() * 0.4 : 0.12 + o() * 0.25, 0.4, 0.15);
  }
  return { byChunk: e, circles: r };
}
function Kc(s, o, t, u, e) {
  const r =
    t.kind === "oak" ? 5 + Math.floor(o() * 3) : 3 + Math.floor(o() * 3);
  for (let a = 0; a < r; a++) {
    let p = (a / r) * Us + o() * 0.8;
    const i = (t.kind === "oak" ? 3 : 2) + o() * 2.6,
      d = t.r * (0.22 + o() * 0.16),
      y = [];
    let w = t.x + Math.cos(p) * t.r * 0.7,
      g = t.z + Math.sin(p) * t.r * 0.7;
    const z = Math.ceil(i / 0.35);
    for (let n = 0; n <= z; n++) {
      const l = n / z,
        f = d * (1 - l * 0.8);
      if (n > 1 && s.dPathAt(w, g) < 1.15 + f) break;
      (y.push(
        at(
          w,
          Math.max(s.heightAt(w, g), u - 0.3) +
            f * (0.35 - 0.25 * l) +
            (n === 0 ? 0.1 : 0),
          g,
        ),
      ),
        (p += (o() - 0.5) * 0.5),
        (w += Math.cos(p) * 0.35),
        (g += Math.sin(p) * 0.35));
    }
    if (y.length < 3) continue;
    const x = Vt(y, (n) => d * (1 - n * 0.85), 5),
      v = new Float32Array(x.attributes.position.count * 3);
    for (let n = 0; n < x.attributes.position.count; n++)
      ((v[n * 3] = 0.6), (v[n * 3 + 1] = 0.3), (v[n * 3 + 2] = 0.9));
    (x.setAttribute("aK", new vt(v, 3)), e.push(x));
  }
}
function Uc(s, o, t, u, e) {
  const r = [],
    a = [];
  let p = 0;
  for (let i = 0; i < 1400 && p < 24; i++) {
    const d = -48 + o() * 96,
      y = St.z + 6 + o() * 128,
      w = s.sdAt(d, y);
    if (
      w < 1.2 ||
      w > 9 ||
      s.dPathAt(d, y) > 14 ||
      s.dStreamAt(d, y) < 5.5 ||
      e(d, y)
    )
      continue;
    const g = o() * Math.PI,
      z = 4 + o() * 5,
      x = 0.2 + o() * 0.22,
      v = Math.cos(g),
      n = Math.sin(g);
    let l = !0,
      f = -9,
      h = 9;
    for (let A = -0.5; A <= 0.5; A += 0.1) {
      const b = d + v * z * A,
        P = y + n * z * A;
      if (s.sdAt(b, P) < x + 0.4) {
        l = !1;
        break;
      }
      const _ = s.heightAt(b, P);
      ((f = Math.max(f, _)), (h = Math.min(h, _)));
    }
    if (!l || f - h > 0.7) continue;
    const c = [];
    for (let A = -0.5; A <= 0.501; A += 0.125) {
      const b = d + v * z * A,
        P = y + n * z * A;
      c.push(at(b, Math.max(s.heightAt(b, P), f - 0.35) + x * 0.7, P));
    }
    const M = Vt(
        c,
        (A) => x * (1 - A * 0.25) * (0.94 + 0.06 * Math.sin(A * 17)),
        9,
        { cap: !0 },
      ),
      m = M.attributes.position;
    for (let A = m.count - 11; A < m.count; A++)
      m.setXYZ(
        A,
        m.getX(A) + (o() - 0.5) * 0.12,
        m.getY(A) + (o() - 0.5) * 0.1,
        m.getZ(A) + (o() - 0.5) * 0.12,
      );
    const k = new Float32Array(m.count * 3);
    for (let A = 0; A < m.count; A++)
      ((k[A * 3] = 0.25), (k[A * 3 + 1] = o() * 0.2), (k[A * 3 + 2] = 1));
    M.setAttribute("aK", new vt(k, 3));
    const S = t(d, y);
    (u.has(S) || u.set(S, []), u.get(S).push(M));
    for (let A = -0.5; A <= 0.5; A += 0.12) {
      const b = d + v * z * A,
        P = y + n * z * A;
      s.sdAt(b, P) < 2.5 && r.push({ x: b, z: P, r: x + 0.05, log: !0 });
    }
    (a.push([d + v * z * 0.2, c[3].y + x * 0.6, y + n * z * 0.2]), p++);
  }
  return { circles: r, mush: a };
}
const De = Math.PI * 2,
  to = { a: [de[0].x, de[0].z], b: [-9.15, 42.25] };
function Ec(s, o) {
  const t = [],
    e = new Map(),
    r = (n, l) => `${Math.floor(n / 4)},${Math.floor(l / 4)}`,
    a = (n, l, f) => {
      const h = Math.floor((n - 9) / 4),
        c = Math.floor((n + 9) / 4),
        M = Math.floor((l - 9) / 4),
        m = Math.floor((l + 9) / 4);
      for (let k = h; k <= c; k++)
        for (let S = M; S <= m; S++)
          for (const A of e.get(`${k},${S}`) || [])
            if (Math.hypot(A.x - n, A.z - l) < f + A.space) return !0;
      return !1;
    },
    p = (n) => {
      t.push(n);
      const l = r(n.x, n.z);
      (e.has(l) || e.set(l, []), e.get(l).push(n));
    },
    i = (n, l) => fe(n, l, to.a[0], to.a[1], to.b[0], to.b[1]),
    d = s.path,
    y = (n, l) => {
      if (n > -51.6 && n < 51.6 && l > 56.6 && l < 217.4)
        return s.dPathAt(n, l);
      let f = 1e9;
      for (let h = 0; h < d.n; h += 4)
        f = Math.min(f, (d.x[h] - n) ** 2 + (d.z[h] - l) ** 2);
      return ((f = Math.sqrt(f)), f < 18 ? f : 99);
    },
    w = (n, l, f) =>
      !(
        l < St.z + 1.5 ||
        (n > _t.x0 - 4 && n < _t.x1 + 4 && l > _t.z0 - 4 && l < _t.z1 + 5) ||
        s.sdAt(n, l) < f * 1.8 + 0.7 ||
        s.dStreamAt(n, l) < 2.6 ||
        Ds(n, l, f + 0.6)
      ),
    g = [
      [-5.2, 83.5],
      { s: 26, sd: -1, d: 7.5 },
      { s: 74, sd: 0, d: 7.4 },
      { s: 117, sd: -1, d: 7.2 },
      { s: 169, sd: 0, d: 7.6 },
      { s: 218, sd: -1, d: 7 },
      [-8.4, 164],
      [-7.4, 190.5],
      [18.4, 188.5],
    ],
    z = (n, l, f) => {
      for (const h in be) {
        const c = be[h];
        for (let M = 0; M < c.length - 1; M++)
          if (fe(n, l, c[M][0], c[M][1], c[M + 1][0], c[M + 1][1]) < f)
            return !0;
      }
      return !1;
    };
  for (const n of g) {
    let l, f;
    if (Array.isArray(n)) [l, f] = n;
    else {
      const h = s.at(n.s),
        c = de.find((m) => Math.abs(m.s - n.s) < 2),
        M =
          n.sd || (c ? Math.sign((c.x - h.x) * h.tz - (c.z - h.z) * h.tx) : 1);
      ((l = h.x + h.tz * M * n.d), (f = h.z - h.tx * M * n.d));
      for (
        let m = 0;
        m < 8 &&
        (z(l, f, 2.6) ||
          je.some((k) => Math.hypot(k.x - l, k.z - f) < k.r + 4.5) ||
          i(l, f) < 7 ||
          Ds(l, f, 1.5));
        m++
      ) {
        const k = s.at(n.s + (m % 2 ? -1 : 1) * (1 + (m >> 1)) * 2.5);
        ((l = k.x + k.tz * M * n.d), (f = k.z - k.tx * M * n.d));
      }
    }
    p({
      kind: "oak",
      x: l,
      z: f,
      r: 0.55 + o() * 0.2,
      H: 15 + o() * 4,
      space: 5.5,
      seed: o(),
    });
  }
  for (const [n, l, f] of [
    [-29.5, 80.6, "oak"],
    [-41, 82.6, "oak"],
    [-24.5, 82.3, "cedar"],
    [-35.2, 80.9, "cedar"],
    [-19.5, 80.4, "cedar"],
  ])
    p(
      f === "oak"
        ? {
            kind: f,
            x: n,
            z: l,
            r: 0.62 + o() * 0.15,
            H: 17 + o() * 3,
            space: 5.5,
            seed: o(),
          }
        : {
            kind: f,
            x: n,
            z: l,
            r: 0.58 + o() * 0.1,
            H: 30 + o() * 4,
            space: 3.6,
            seed: o(),
          },
    );
  for (const n of je)
    p({
      kind: "giant",
      x: n.x,
      z: n.z,
      r: n.r,
      H: 12,
      space: 3.2 + n.r,
      giant: n.name,
    });
  for (const n of ac) {
    const l = 0.4 + o() * 0.12,
      f = 24 + o() * 8,
      h = o();
    je.some((c) => Math.hypot(c.x - n.x, c.z - n.z) < c.r + 3) ||
      (i(n.x, n.z) < 5.5 && n.z < to.a[1] + 3) ||
      p({ kind: "cedar", x: n.x, z: n.z, r: l, H: f, space: 3.4, seed: h });
  }
  for (let n = 0; n < 34e3 && t.length < 560; n++) {
    const l = -57 + o() * 114,
      f = 78 + o() * 138,
      h = y(l, f),
      c = s.clearingSd(l, f);
    if (Math.min(h, c + 6) > 34) continue;
    const M = h < 9 ? 0.75 + o() * 0.35 : 0.45 + o() * 0.45,
      m = 0.26 + M * 0.42;
    if (!w(l, f, m)) continue;
    const k = $t(92, 80, f) * $t(28, 16, Math.abs(l - 2));
    if (
      (k > 0 && (o() < k * 0.85 || h < 9 * k)) ||
      (i(l, f) < 5.5 && f < to.a[1] + 3)
    )
      continue;
    const S = 4 + m * 2.4;
    a(l, f, S) ||
      p({
        kind: "cedar",
        x: l,
        z: f,
        r: m,
        H: 21 + M * 13 + o() * 3,
        space: S,
        seed: o(),
      });
  }
  for (
    let n = 0;
    n < 1e4 && t.filter((l) => l.kind === "young").length < 190;
    n++
  ) {
    const l = -55 + o() * 110,
      f = 78 + o() * 136,
      h = y(l, f),
      c = s.clearingSd(l, f);
    if (Math.min(h, c + 4) > 22) continue;
    const M = 0.08 + o() * 0.09;
    if (!w(l, f, M + 0.2)) continue;
    const m = $t(96, 80, f);
    o() > 0.35 + m * 0.65 ||
      (i(l, f) < 4.5 && f < to.a[1] + 1) ||
      a(l, f, 2.2) ||
      p({
        kind: "young",
        x: l,
        z: f,
        r: M,
        H: 6 + o() * 5 + (1 - m) * 2,
        space: 1.6,
        seed: o(),
      });
  }
  const x = [];
  for (let n = 0; n < 9e4 && x.length < 3600; n++) {
    const l = -125 + o() * 250,
      f = 70 + o() * 255;
    if (f < 79 && Math.abs(l) < 40) continue;
    const h = y(l, f),
      c = s.clearingSd(l, f),
      M = Math.min(h, c + 6);
    M < 29 ||
      (M > 58 && o() < 0.55) ||
      s.dStreamAt(l, f) < 3 ||
      (l > _t.x0 - 6 && l < _t.x1 + 6 && f > _t.z0 - 6 && f < _t.z1 + 8) ||
      x.push({
        x: l,
        z: f,
        H: 20 + o() * 14,
        w: 5 + o() * 3,
        v: Math.floor(o() * 4),
        y: s.heightAt(l, f),
      });
  }
  for (let n = 0; n < 6e4 && x.length < 6400; n++) {
    const l = -110 + o() * 220,
      f = 72 + o() * 230;
    if (f < 79 && Math.abs(l) < 40) continue;
    const h = Math.min(y(l, f), s.clearingSd(l, f) + 6);
    h < 40 ||
      h > 80 ||
      s.dStreamAt(l, f) < 3 ||
      x.push({
        x: l,
        z: f,
        H: 20 + o() * 14,
        w: 5.5 + o() * 3.5,
        v: Math.floor(o() * 4),
        y: s.heightAt(l, f),
      });
  }
  const v = (n, l, f) => {
    const h = Math.sin(n * 12.9898 + l * 78.233 + f * 37.719) * 43758.5453;
    return h - Math.floor(h);
  };
  for (const [n, l, f] of [
    [-32.4, 79.2, "young"],
    [-38.1, 79.4, "young"],
    [-44.4, 79.3, "young"],
    [-41.3, 79, "young"],
    [-47.4, 83.3, "young"],
    [-26.6, 78.7, "young"],
    [-51.6, 83.1, "young"],
    [-55, 80.5, "young"],
  ]) {
    const h = f === "young",
      c = h ? 0.1 + 0.07 * v(n, l, 1) : 0.5 + 0.1 * v(n, l, 1);
    w(n, l, h ? c + 0.2 : c) &&
      (t.some(
        (M) =>
          Math.hypot(M.x - n, M.z - l) <
          (h ? 2.4 : 4.4) + (M.kind === "young" ? 0 : M.r),
      ) ||
        p({
          kind: f,
          x: n,
          z: l,
          r: c,
          H: h ? 7 + 3 * v(n, l, 2) : 26 + 6 * v(n, l, 2),
          space: h ? 1.6 : 3.6 + c * 2.4,
          seed: v(n, l, 3),
          own: !0,
        }));
  }
  return { trees: t, far: x };
}
function qc() {
  const s = At("forest_bark"),
    t = { tMoss: { value: At("garden_moss").map } };
  return i0(s, "bark", (u) => {
    (Object.assign(u.uniforms, t),
      (u.vertexShader = u.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute vec3 aK;
varying vec3 vK;
varying vec3 vWN;`,
        )
        .replace(
          "#include <uv_vertex>",
          `#include <uv_vertex>
vK = aK; vWN = normalize(mat3(modelMatrix) * normal);`,
        )),
      (u.fragmentShader = u.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
uniform sampler2D tMoss;
varying vec3 vK;
varying vec3 vWN;`,
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
      {
        // moss: thick at the foot, up the north side, on whatever faces the sky; each tree its own tint
        float giK = step(1.5, vK.y), cav = clamp(vK.y - 2.0, 0.0, 1.0) * giK;
        // (round 5: aK.z >= 2 on dead wood - the fallen tree's and the log's bark come away in patches, the bare wood under it
        // weathered grey: aK.z - 2 how bare; the north side's moss then as 0.25)
        float bareK = clamp(vK.z - 2.0, 0.0, 1.0) * step(1.5, vK.z) * giK, northK = mix(vK.z, 0.25, step(1.5, vK.z));
        vec3 mc = texture2D(tMoss, vMapUv * 1.3).rgb;
        float up = clamp(vWN.y, 0.0, 1.0), north = clamp(-vWN.z * 0.7 + 0.2, 0.0, 1.0);
        float mk = clamp(vK.x * 1.1 + up * 0.8 + north * 0.35 * northK, 0.0, 1.0);
        mk *= smoothstep(0.25, 0.6, mk + (texture2D(tMoss, vMapUv * 0.37).g - 0.12) * 1.6);
        diffuseColor.rgb *= mix(vec3(1.0), vec3(1.08, 0.96, 0.9), vK.y * (1.0 - giK));
        // THE GIANTS (giants.js: aK.y >= 2): dead wood - the bark's rust drained to a wet black-grey, a pale scurf of lichen
        // on the ridges, the moss gone thin and grey; the hollows and the broken heart black
        if (giK > 0.5) {
          float l = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 dead = vec3(l) * vec3(0.9, 0.94, 1.0) * 0.6;
          float lic = smoothstep(0.5, 0.8, texture2D(tMoss, vMapUv * 0.21 + 0.37).g * 1.5 - 0.2) * smoothstep(0.06, 0.2, l);
          diffuseColor.rgb = mix(dead, vec3(0.12, 0.125, 0.11), lic * 0.45);
          // (round 5b: a touch darker - in the headlight at 2-4 m the log's top burned out white)
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.36, 0.35, 0.315) * (0.38 + 1.25 * l), bareK);
          mk *= 0.4 * (1.0 - 0.85 * bareK); mc = vec3(dot(mc, vec3(0.3, 0.6, 0.1))) * vec3(0.75, 0.85, 0.7);
        }
        diffuseColor.rgb = mix(diffuseColor.rgb, mc * 0.95, mk * 0.85);
        diffuseColor.rgb *= 1.0 - cav * 0.97;
      }`,
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
      // (the giants are wet: the torch glints on their ridges; but nothing glints in a hollow)
      roughnessFactor = mix(roughnessFactor * mix(1.0, 0.52, step(1.5, vK.y)), 1.0, clamp(vK.y - 2.0, 0.0, 1.0));
      // (the bare wood where the bark has come away: dry-grey and dull, its grain fine - no glitter in the headlight)
      roughnessFactor = mix(roughnessFactor, 0.92, clamp(vK.z - 2.0, 0.0, 1.0) * step(1.5, vK.z) * step(1.5, vK.y));`,
        )
        .replace(
          "#include <normal_fragment_maps>",
          Pa.normal_fragment_maps.replace(
            "mapN.xy *= normalScale;",
            "mapN.xy *= normalScale * (vK.y > 1.5 ? 1.55 * (1.0 - 0.65 * clamp(vK.z - 2.0, 0.0, 1.0) * step(1.5, vK.z)) : 1.0);",
          ),
        )
        .replace(
          "#include <aomap_fragment>",
          `
      {
        vec3 Vw = normalize(cameraPosition - vFW), Nw = normalize(vWN);
        float ndv = clamp(1.0 - abs(dot(Nw, Vw)), 0.0, 1.0);
        float side = smoothstep(-0.3, 0.55, dot(Nw, uMoonDir)) * (0.5 + 0.5 * max(0.0, dot(-Vw, uMoonDir)));
        float brk = smoothstep(0.32, 0.78, fnoise(vec2(vFW.y * 0.42 + vFW.x * 0.9, vFW.z * 0.9 - vFW.y * 0.17)));
        totalEmissiveRadiance += uRim * (ndv * ndv * ndv) * side * (0.2 + 0.8 * brk) * mix(0.35, 1.0, canK.x);
      }
      #include <aomap_fragment>`,
        )));
  });
}
function Gc(s, o = "cards") {
  const t = new n0({
    map: s,
    alphaTest: 0.5,
    side: p0,
    roughness: 0.82,
    metalness: 0,
    vertexColors: !0,
  });
  return i0(t, o, (u) => {
    ((u.uniforms.uSway = { value: 0 }),
      (u.vertexShader = u.vertexShader
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
      {
        // the high canopy sways slowly; a fern's frond bends from its root (aFlex 0 .. 1 along it); the cores stay put
        vec3 wq = (modelMatrix * vec4(transformed, 1.0)).xyz;
        float k = aFlex > 0.001 ? aFlex * aFlex * 0.07 : (aFlex < -0.5 ? 0.0 : clamp((wq.y - 4.0) / 24.0, 0.0, 1.0) * 0.06);
        transformed.x += sin(uFT * 0.8 + wq.x * 0.37 + wq.z * 0.23) * k;
        transformed.z += sin(uFT * 0.63 + wq.z * 0.31 - wq.x * 0.1) * k * 0.8;
      }`,
        )
        .replace(
          "#include <common>",
          `#include <common>
uniform float uFT;
attribute float aFlex;`,
        )));
  });
}
function Hc(s, o, t, u) {
  const { x: e, z: r, r: a, H: p } = s,
    i = 0.5 + t() * 0.45,
    d = 4 + Math.floor(t() * 3),
    y = t() * De,
    w = 0.4 + t() * 0.35,
    g = [(t() - 0.5) * 0.02, (t() - 0.5) * 0.02],
    z = t() * De,
    x = t() * 0.35,
    v = (U) => a * Math.max(0.05, 1 - 0.8 * Math.pow(Math.max(0, U) / p, 1.05)),
    n = (U, Z) => {
      const ot = v(U) + a * i * Math.exp(-Math.max(0, U) / 0.85),
        $ =
          Math.pow(
            Math.max(0, Math.cos(d * (Z - y) + 0.4 * Math.sin(Z * 3))),
            3,
          ) *
          w *
          Math.exp(-Math.max(0, U) / 0.75);
      return ot * (1 + $) * (1 + 0.025 * Math.sin(Z * 7 + U * 1.3));
    },
    l = (U) => [
      e + g[0] * U + Math.cos(z) * x * Math.sin((Math.PI * U) / p),
      o + U,
      r + g[1] * U + Math.sin(z) * x * Math.sin((Math.PI * U) / p),
    ],
    f = [
      -0.45, 0, 0.12, 0.3, 0.55, 0.9, 1.4, 2.1, 3.2, 4.8, 7, 9.5, 12.5, 16, 20,
      24.5, 29, 34, 40,
    ].filter((U) => U < p - 0.5);
  f.push(p);
  const h = u ? 14 : 9,
    c = f.length,
    M = new Float32Array(c * (h + 1) * 3),
    m = new Float32Array(c * (h + 1) * 2),
    k = new Float32Array(c * (h + 1) * 3),
    S = n(1.3, 0) * 0.9,
    A = t();
  for (let U = 0; U < c; U++) {
    const Z = f[U],
      ot = l(Z);
    for (let $ = 0; $ <= h; $++) {
      const C = ($ / h) * De,
        T = U === c - 1 ? 0.02 : n(Z, C),
        D = U * (h + 1) + $;
      ((M[D * 3] = ot[0] + Math.cos(C) * T),
        (M[D * 3 + 1] = ot[1]),
        (M[D * 3 + 2] = ot[2] + Math.sin(C) * T),
        (m[D * 2] = C * S),
        (m[D * 2 + 1] = Z),
        (k[D * 3] = Math.exp(-Math.max(0, Z) / 1.3)),
        (k[D * 3 + 1] = A),
        (k[D * 3 + 2] = Math.exp(-Math.max(0, Z) / 9)));
    }
  }
  const b = new Float32Array(M.length),
    P = new dt(),
    _ = new dt(),
    I = new dt(),
    R = (U, Z) => {
      const ot = U * (h + 1) + ((Z + h) % h);
      return [M[ot * 3], M[ot * 3 + 1], M[ot * 3 + 2]];
    };
  for (let U = 0; U < c; U++)
    for (let Z = 0; Z <= h; Z++) {
      const ot = R(U, Z + 1),
        $ = R(U, Z - 1),
        C = R(Math.min(c - 1, U + 1), Z),
        T = R(Math.max(0, U - 1), Z);
      (P.set(ot[0] - $[0], ot[1] - $[1], ot[2] - $[2]),
        _.set(C[0] - T[0], C[1] - T[1], C[2] - T[2]),
        I.crossVectors(_, P).normalize());
      const D = U * (h + 1) + Z,
        N = l(f[U]);
      ((M[D * 3] - N[0]) * I.x + (M[D * 3 + 2] - N[2]) * I.z < 0 && I.negate(),
        (b[D * 3] = I.x),
        (b[D * 3 + 1] = I.y),
        (b[D * 3 + 2] = I.z));
    }
  const V = [];
  for (let U = 0; U < c - 1; U++)
    for (let Z = 0; Z < h; Z++) {
      const ot = U * (h + 1) + Z,
        $ = ot + h + 1;
      V.push(ot, $, ot + 1, ot + 1, $, $ + 1);
    }
  const L = new Rt();
  (L.setAttribute("position", new vt(M, 3)),
    L.setAttribute("normal", new vt(b, 3)),
    L.setAttribute("uv", new vt(m, 2)),
    L.setAttribute("aK", new vt(k, 3)),
    L.setIndex(V));
  const K = [L],
    j = p * (0.42 + t() * 0.14);
  if (u)
    for (let U = 2.6 + t(); U < j; U += 0.9 + t() * 1.3) {
      const Z = t() * De,
        ot = l(U),
        $ = v(U),
        C = 0.25 + t() * 1.1,
        T = -0.25 - t() * 0.4,
        D = at(Math.cos(Z), T, Math.sin(Z)).normalize(),
        N = at(
          ot[0] + Math.cos(Z) * $ * 0.8,
          ot[1],
          ot[2] + Math.sin(Z) * $ * 0.8,
        ),
        H = Vt(
          [
            N,
            N.clone().addScaledVector(D, C * 0.5),
            N.clone().addScaledVector(D, C),
          ],
          [0.035 + t() * 0.03, 0.025, 0.008],
          4,
        );
      (H.setAttribute(
        "aK",
        new vt(new Float32Array(H.attributes.position.count * 3).fill(0.1), 3),
      ),
        K.push(H));
    }
  const O = [],
    J = 1.7 + a * 2.4 + t() * 0.6;
  ((s.cb = j), (s.Rc = J));
  let tt = t() * De;
  const st = u ? 0.78 : 1.15;
  for (let U = j; U < p - 0.7; U += st * (0.8 + t() * 0.4)) {
    const Z = (p - U) / (p - j),
      ot = J * Math.pow(Z, 0.8) * (1 - 0.25 * Math.pow(Z, 5)) + 0.4,
      $ = u ? 4 + Math.floor(t() * 3) : 3 + Math.floor(t() * 2),
      C = l(U);
    for (let T = 0; T < $; T++) {
      tt += 2.39996 + (t() - 0.5) * 0.6;
      const D = ot * (0.75 + t() * 0.4),
        N = 0.18 + t() * 0.25 - Z * 0.2,
        H = at(
          Math.cos(tt) * Math.cos(N),
          Math.sin(N),
          Math.sin(tt) * Math.cos(N),
        ),
        Q = at(C[0], C[1], C[2]).addScaledVector(
          at(Math.cos(tt), 0, Math.sin(tt)),
          v(U) * 0.9,
        ),
        W = Q.clone()
          .addScaledVector(H, D)
          .add(at(0, -D * 0.3, 0));
      if (u && D > 1.4 && t() < 0.3) {
        const F = Q.clone()
            .addScaledVector(H, D * 0.5)
            .add(at(0, -D * 0.05, 0)),
          E = Vt(
            [Q, F, Q.clone().lerp(W, 0.8)],
            [0.045 + a * 0.03, 0.026, 0.01],
            3,
          );
        (E.setAttribute(
          "aK",
          new vt(
            new Float32Array(E.attributes.position.count * 3).fill(0.15),
            3,
          ),
        ),
          K.push(E));
      }
      const B = Math.max(2, Math.min(5, Math.round(D / 0.55)));
      for (let F = 0; F < B; F++) {
        const E = 0.28 + (F / Math.max(1, B - 1)) * 0.72,
          Y = Q.clone()
            .lerp(W, E)
            .add(
              at(
                (t() - 0.5) * 0.3,
                -Math.sin(E * Math.PI) * 0.15 + (t() - 0.5) * 0.25,
                (t() - 0.5) * 0.3,
              ),
            ),
          et = W.clone()
            .sub(Q)
            .normalize()
            .add(
              at((t() - 0.5) * 0.7, -0.2 - t() * 0.45 * E, (t() - 0.5) * 0.7),
            )
            .normalize(),
          nt = (1.35 + t() * 0.95) * (0.8 + E * 0.45) * (u ? 1 : 1.3);
        O.push({
          pos: Y,
          along: et,
          size: nt,
          cell: E > 0.7 && (Z > 0.55 || t() < 0.35) ? Bt.cedarHang : Bt.cedar,
          out: Y.clone()
            .sub(at(C[0], Y.y + 0.5, C[2]))
            .normalize(),
          shade: 0.5 + Z * 0.12 + t() * 0.08,
        });
      }
    }
    if (u || t() < 0.5)
      for (let T = 0; T < 2; T++) {
        const D = t() * De,
          N = at(
            C[0] + Math.cos(D) * 0.45,
            C[1] + 0.2,
            C[2] + Math.sin(D) * 0.45,
          );
        O.push({
          pos: N,
          along: at(Math.cos(D) * 0.5, -0.8, Math.sin(D) * 0.5).normalize(),
          size: 1.3 + t() * 0.6,
          cell: Bt.cedarHang,
          out: at(Math.cos(D), 0.2, Math.sin(D)).normalize(),
          shade: 0.4,
          vertical: !0,
        });
      }
  }
  const G = [];
  {
    const U = u ? 10 : 7,
      Z = 7,
      ot = j + 0.4;
    for (let $ = 0; $ <= Z; $++) {
      const C = ot + (p - 0.6 - ot) * ($ / Z),
        T = (p - C) / (p - j),
        D = l(C),
        N = (J * Math.pow(T, 0.8) * (1 - 0.25 * Math.pow(T, 5)) + 0.4) * 0.62,
        H = [];
      for (let Q = 0; Q < U; Q++) {
        const W = (Q / U) * De,
          B = N * (0.75 + t() * 0.5) * ($ === Z ? 0.2 : 1);
        H.push([
          D[0] + Math.cos(W) * B,
          D[1] + (t() - 0.5) * 0.4 - ($ === 0 ? 0.3 : 0),
          D[2] + Math.sin(W) * B,
          Math.cos(W),
          Math.sin(W),
        ]);
      }
      G.push(H);
    }
  }
  if (u && t() < 0.3) {
    const U = 2.5 + t() * 5,
      Z = t() * De;
    for (let ot = 0.2; ot < U; ot += 0.22 + t() * 0.18) {
      const $ = Z + ot * 0.35 + (t() - 0.5) * 1.6,
        C = l(ot),
        T = n(ot, $) + 0.03,
        D = at(Math.cos($), 0.15, Math.sin($)).normalize();
      O.push({
        pos: at(C[0] + Math.cos($) * T, C[1], C[2] + Math.sin($) * T),
        along: at(-Math.sin($) * 0.4, 1, Math.cos($) * 0.4).normalize(),
        size: 0.45 + t() * 0.3,
        cell: Bt.ivy,
        out: D,
        shade: 0.7,
        ivy: D,
      });
    }
  }
  const q = l(p);
  for (let U = 0; U < 4; U++)
    O.push({
      pos: at(
        q[0] + (t() - 0.5) * 0.3,
        q[1] - 0.5 - U * 0.6,
        q[2] + (t() - 0.5) * 0.3,
      ),
      along: at((t() - 0.5) * 0.6, 1, (t() - 0.5) * 0.6).normalize(),
      size: 1 + t() * 0.4,
      cell: Bt.cedar,
      out: at(0, 1, 0),
      shade: 0.65,
      vertical: !0,
    });
  return { parts: K, cards: O, cb: j, core: G };
}
function Oc(s, o, t, { young: u = !1 } = {}) {
  const e = [],
    r = [];
  let a = 0;
  const p = at(0, 1, 0),
    i = at(0, 0, 0),
    d = () => at(t() - 0.5, t() - 0.5, t() - 0.5),
    y = u ? 2 : 3,
    w = u ? [3, 3] : [4, 3, 3],
    g = t(),
    z = (f, h, c, M, m) => {
      const k = Vt(f, (b) => h + (c - h) * Math.pow(b, 0.8), M),
        S = k.attributes.position.count,
        A = new Float32Array(S * 3);
      for (let b = 0; b < S; b++)
        ((A[b * 3] = m), (A[b * 3 + 1] = g), (A[b * 3 + 2] = 0.8));
      (k.setAttribute("aK", new vt(A, 3)), e.push(k));
    },
    x = (f, h, c, M, m) => {
      const k = [f.clone()],
        S = h.clone(),
        A = f.clone(),
        b = m === 0 ? 7 : 5;
      for (let _ = 0; _ < b; _++)
        (S.addScaledVector(d(), u ? 0.3 : 0.42)
          .addScaledVector(p, m === 0 ? 0.12 : 0.02 - m * 0.06)
          .normalize(),
          A.addScaledVector(S, c / b),
          m >= 1 &&
            A.y < a + 2.6 &&
            ((A.y = a + 2.6 + (A.y - a - 2.6) * 0.15),
            S.y < 0.1 && (S.y = 0.1 + Math.abs(S.y) * 0.3),
            S.normalize()),
          k.push(A.clone()));
      const P = Math.max(0.012, M * 0.5);
      if (
        (m === 0 && !u && k.unshift(f.clone().add(at(0, -0.5, 0))),
        z(
          k,
          m === 0 && !u ? M * 1.5 : M,
          P,
          m === 0 ? (u ? 7 : 12) : m === 1 ? 7 : 5,
          m === 0 ? 0.6 : 0.3,
        ),
        m >= y)
      ) {
        for (let I = 0; I < 14; I++) {
          const R = k[Math.max(1, k.length - 1 - Math.floor(t() * 3))]
            .clone()
            .add(at((t() - 0.5) * 1.6, (t() - 0.3) * 0.9, (t() - 0.5) * 1.6));
          r.push({
            pos: R,
            along: S.clone().add(d().multiplyScalar(1.2)).normalize(),
            size: u ? 0.62 + t() * 0.3 : 1.1 + t() * 0.6,
            cell: Bt.broad,
            out: null,
            shade: 0.8,
          });
        }
        return;
      }
      if (!u && m >= 1 && t() < 0.55)
        for (let _ = 0; _ < 2; _++) {
          const I = k[1 + Math.floor(t() * (k.length - 2))];
          r.push({
            pos: I.clone().add(at(0, -0.45, 0)),
            along: at((t() - 0.5) * 0.15, -1, (t() - 0.5) * 0.15).normalize(),
            size: 0.7 + t() * 0.5,
            cell: Bt.moss,
            out: at(t() - 0.5, 0, t() - 0.5).normalize(),
            shade: 0.75,
            vertical: !0,
            hang: !0,
          });
        }
      for (let _ = 0; _ < w[m]; _++) {
        const I = 0.4 + 0.6 * ((_ + 0.3 + t() * 0.5) / w[m]),
          R = k[Math.min(k.length - 1, Math.round(I * (k.length - 1)))];
        i.crossVectors(S, d()).normalize();
        const V = S.clone().applyAxisAngle(
            i,
            (u ? 0.6 : 0.8) * (0.7 + t() * 0.6),
          ),
          L = at(V.x, 0, V.z);
        (L.lengthSq() > 1e-4 &&
          V.addScaledVector(L.normalize(), u ? 0.2 : 0.6).normalize(),
          x(
            R,
            V,
            c * (u ? 0.6 : 0.66) * (0.8 + t() * 0.4),
            Math.max(0.02, P * (0.8 + 0.4 * (1 - I)) * 1.3),
            m + 1,
          ));
      }
    },
    v = at(s.x, o - 0.1, s.z),
    n = at(
      (t() - 0.5) * (u ? 0.25 : 0.4),
      1,
      (t() - 0.5) * (u ? 0.25 : 0.4),
    ).normalize();
  ((a = Math.max(o, 0)),
    x(v, n, s.H * (u ? 0.55 : 0.4), s.r, 0),
    (s.cb = s.H * (u ? 0.4 : 0.3)),
    (s.Rc = s.H * (u ? 0.22 : 0.3)));
  const l = at(0, 0, 0);
  for (const f of r) l.add(f.pos);
  l.divideScalar(Math.max(1, r.length));
  for (const f of r) f.out = f.pos.clone().sub(l).normalize();
  return { parts: e, cards: r };
}
function Ma(s, o, t) {
  const u = s.length,
    e = new Float32Array(u * 12),
    r = new Float32Array(u * 12),
    a = new Float32Array(u * 8),
    p = new Float32Array(u * 12),
    i = new Uint32Array(u * 6),
    d = at(0, 0, 0),
    y = at(0, 0, 0),
    w = at(0, 0, 0),
    g = new Xt();
  for (let x = 0; x < u; x++) {
    const v = s[x],
      n = v.size;
    if (v.ivy) d.crossVectors(v.ivy, v.along).normalize();
    else if (v.hang) d.set(v.out.z, 0, -v.out.x).normalize();
    else {
      (d.set(-v.along.z, 0, v.along.x),
        d.lengthSq() < 1e-4 && d.set(1, 0, 0),
        d.normalize());
      const S = (o() - 0.5) * (v.vertical ? 2.5 : 0.9);
      d.applyAxisAngle(v.along, S);
    }
    (y.crossVectors(v.along, d).normalize(),
      y.y < 0 && !v.vertical && !v.ivy && (y.negate(), d.negate()),
      w
        .copy(y)
        .lerp(v.out || y, 0.62)
        .normalize());
    const [l, f, h, c] = Ao(v.cell),
      M = v.cell === Bt.twigs ? l + (h - l) * 0.84 : h,
      m = v.hang
        ? [
            [0, -0.5, l, c],
            [1, -0.5, l, f],
            [1, 0.5, M, f],
            [0, 0.5, M, c],
          ]
        : [
            [0, -0.5, l, f],
            [1, -0.5, M, f],
            [1, 0.5, M, c],
            [0, 0.5, l, c],
          ],
      k = v.pos.clone().addScaledVector(v.along, -n * 0.35);
    for (let S = 0; S < 4; S++) {
      const [A, b, P, _] = m[S],
        I = x * 4 + S;
      ((e[I * 3] = k.x + v.along.x * A * n + d.x * b * n),
        (e[I * 3 + 1] = k.y + v.along.y * A * n + d.y * b * n),
        (e[I * 3 + 2] = k.z + v.along.z * A * n + d.z * b * n),
        (r[I * 3] = w.x),
        (r[I * 3 + 1] = w.y),
        (r[I * 3 + 2] = w.z),
        (a[I * 2] = P),
        (a[I * 2 + 1] = _));
    }
    t(v, g);
    for (let S = 0; S < 4; S++) {
      const A = x * 4 + S;
      ((p[A * 3] = g.r), (p[A * 3 + 1] = g.g), (p[A * 3 + 2] = g.b));
    }
    i.set([x * 4, x * 4 + 1, x * 4 + 2, x * 4, x * 4 + 2, x * 4 + 3], x * 6);
  }
  const z = new Rt();
  return (
    z.setAttribute("position", new vt(e, 3)),
    z.setAttribute("normal", new vt(r, 3)),
    z.setAttribute("uv", new vt(a, 2)),
    z.setAttribute("color", new vt(p, 3)),
    z.setAttribute("aFlex", new vt(new Float32Array(u * 4), 1)),
    z.setIndex(new vt(i, 1)),
    z
  );
}
function jc(s, o, t) {
  const u = new m0(1, 1).translate(0, 0.5, 0),
    e = new P0({
      uniforms: ko.merge([
        So.fog,
        {
          tTree: { value: null },
          uNV: { value: t },
          uAmb: { value: new Xt(0.02, 0.028, 0.034) },
        },
      ]),
      vertexShader: `
attribute vec2 aFar;            // variant, shade
varying vec2 vUv;
varying float vShade;
varying float vFogDepth;
varying vec3 vFW;
void main() {
  vec3 base = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  float w = length(instanceMatrix[0].xyz), h = length(instanceMatrix[1].xyz);
  vec3 toCam = cameraPosition - base; toCam.y = 0.0; toCam = normalize(toCam + vec3(1e-4, 0.0, 0.0));
  vec3 right = vec3(toCam.z, 0.0, -toCam.x);
  vec3 wp = base + right * position.x * w + vec3(0.0, position.y * h, 0.0);
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mv;
  vUv = vec2((aFar.x + uv.x) / ${t}.0, uv.y); vShade = aFar.y;
  vFogDepth = -mv.z; vFW = wp;
}`,
      fragmentShader: `
uniform sampler2D tTree;
uniform vec3 uAmb;
varying vec2 vUv;
varying float vShade;
#include <fog_pars_fragment>
${bn}
void main() {
  vec4 t = texture2D(tTree, vUv);
  if (t.a < 0.5) discard;
  vec3 col = t.rgb * uAmb * 18.0 * vShade;
  gl_FragColor = vec4(col, 1.0);
  #ifdef USE_FOG
  gl_FragColor.rgb = forestAir(gl_FragColor.rgb, vFW, vFogDepth);
  #endif
}`,
      fog: !0,
    });
  ((e.uniforms.tTree.value = o), Object.assign(e.uniforms, K0));
  const r = new l0(u, e, s.length);
  r.name = "forest_far";
  const a = new Float32Array(s.length * 2),
    p = new wt(),
    i = new w0(),
    d = at(1, 1, 1),
    y = at(0, 0, 0);
  return (
    s.forEach((w, g) => {
      (p.compose(y.set(w.x, w.y - 0.6, w.z), i, d.set(w.w, w.H, 1)),
        r.setMatrixAt(g, p),
        (a[g * 2] = w.v),
        (a[g * 2 + 1] = 0.7 + 0.6 * ((g * 0.618) % 1)));
    }),
    u.setAttribute("aFar", new M0(a, 2)),
    (r.frustumCulled = !1),
    r
  );
}
function Yc(s, o, t, u = { x0: -64, z0: 56, w: 128, d: 192 }) {
  const r = Math.round(u.w / 0.5),
    a = Math.round(u.d / 0.5),
    p = new Float32Array(r * a),
    i = -t.x / t.y,
    d = -t.z / t.y,
    y = (x, v, n, l) => {
      const f = Math.max(0, Math.floor((x - n - u.x0) / 0.5)),
        h = Math.min(r - 1, Math.ceil((x + n - u.x0) / 0.5)),
        c = Math.max(0, Math.floor((v - n - u.z0) / 0.5)),
        M = Math.min(a - 1, Math.ceil((v + n - u.z0) / 0.5));
      for (let m = c; m <= M; m++)
        for (let k = f; k <= h; k++) {
          const S = u.x0 + (k + 0.5) * 0.5,
            A = u.z0 + (m + 0.5) * 0.5,
            b = Math.hypot(S - x, A - v) / n;
          b < 1 && (p[m * r + k] += l * (1 - b * b));
        }
    };
  for (const x of s) {
    if (x.cb == null) continue;
    const v = x.kind === "cedar" ? 1.5 : 2;
    for (let n = x.cb; n < x.H; n += v) {
      const l = (x.H - n) / Math.max(0.1, x.H - x.cb),
        f =
          x.kind === "cedar"
            ? x.Rc * Math.pow(l, 0.8) + 0.4
            : x.Rc * Math.sin(Math.PI * Math.min(1, 0.15 + l * 0.85));
      y(x.x + i * n, x.z + d * n, f * 1.05, x.kind === "young" ? 0.35 : 0.42);
    }
  }
  for (const x of o)
    if (!(
      x.x < u.x0 - 30 ||
      x.x > u.x0 + u.w + 30 ||
      x.z < u.z0 - 30 ||
      x.z > u.z0 + u.d + 30
    ))
      for (let v = x.H * 0.45; v < x.H; v += 3)
        y(
          x.x + i * v,
          x.z + d * v,
          3 * Math.pow((x.H - v) / (x.H * 0.55), 0.8) + 0.5,
          0.6,
        );
  const w = new Float32Array(p.length);
  for (let x = 0; x < 2; x++) {
    for (let v = 0; v < a; v++)
      for (let n = 0; n < r; n++) {
        let l = 0,
          f = 0;
        for (let h = -2; h <= 2; h++) {
          const c = n + h;
          c >= 0 && c < r && ((l += p[v * r + c]), f++);
        }
        w[v * r + n] = l / f;
      }
    for (let v = 0; v < a; v++)
      for (let n = 0; n < r; n++) {
        let l = 0,
          f = 0;
        for (let h = -2; h <= 2; h++) {
          const c = v + h;
          c >= 0 && c < a && ((l += w[c * r + n]), f++);
        }
        p[v * r + n] = l / f;
      }
  }
  const g = new Uint8Array(r * a);
  for (let x = 0; x < p.length; x++)
    g[x] = Math.round((1 - Math.exp(-p[x] * 1.6)) * 255);
  const z = new ga(g, r, a, on, sn);
  return (
    (z.magFilter = _s),
    (z.minFilter = _s),
    (z.wrapS = z.wrapT = an),
    (z.needsUpdate = !0),
    { tex: z, box: u, data: g, nx: r, nz: a }
  );
}
function wa(s, o) {
  const t = [],
    u = [],
    e = [],
    r = [],
    a = [];
  for (const i of s) {
    const d = i[0].length,
      y = t.length / 3,
      w = o();
    for (let l = 0; l < i.length; l++)
      for (let f = 0; f < d; f++) {
        const [h, c, M, m, k] = i[l][f],
          S = l === i.length - 1 ? 0.8 : 0.35,
          A = Math.hypot(m, S, k);
        (t.push(h, c, M), u.push(m / A, S / A, k / A), e.push(go[0], go[1]));
        const b = w * (0.8 + (0.4 * ((l * 7 + f * 3) % 5)) / 5);
        r.push(0.8 * b, 0.9 * b, 0.85 * b);
      }
    for (let l = 0; l < i.length - 1; l++)
      for (let f = 0; f < d; f++) {
        const h = y + l * d + f,
          c = y + l * d + ((f + 1) % d),
          M = h + d,
          m = c + d;
        a.push(h, M, c, c, M, m);
      }
    const g = t.length / 3,
      z = i[0];
    let x = 0,
      v = 0,
      n = 0;
    for (const l of z) ((x += l[0]), (v += l[1]), (n += l[2]));
    (t.push(x / d, v / d + 0.3, n / d),
      u.push(0, -1, 0),
      e.push(go[0], go[1]),
      r.push(0.3, 0.34, 0.32));
    for (let l = 0; l < d; l++) a.push(y + l, y + ((l + 1) % d), g);
  }
  const p = new Rt();
  return (
    p.setAttribute("position", new xt(t, 3)),
    p.setAttribute("normal", new xt(u, 3)),
    p.setAttribute("uv", new xt(e, 2)),
    p.setAttribute("color", new xt(r, 3)),
    p.setAttribute("aFlex", new xt(new Float32Array(t.length / 3).fill(-1), 1)),
    p.setIndex(a),
    p
  );
}
const Jt = Math.PI * 2,
  eo = (s) => ((s = (s + Math.PI) % Jt), s < 0 && (s += Jt), s - Math.PI),
  Qo = (s, o, t) => {
    const u = Math.max(0, Math.min(1, (t - s) / (o - s)));
    return u * u * (3 - 2 * u);
  },
  ts = 0.42,
  gs = (s, o) => [
    0.45 * Math.exp(-Math.max(0, s) / 1.1),
    2 + Math.min(0.97, Math.max(0, o)),
    0.45 * Math.exp(-Math.max(0, s) / 6),
  ];
function Os(s, o) {
  const t = s.attributes.position,
    u = new Float32Array(t.count * 3);
  for (let e = 0; e < t.count; e++)
    u.set(o(t.getX(e), t.getY(e), t.getZ(e), e), e * 3);
  return (s.setAttribute("aK", new vt(u, 3)), s);
}
function Xc(s, o, t, u) {
  const e = s.r,
    r = 8.5 + t() * 6.5,
    a = 0.32 + t() * 0.22,
    p = (0.2 + t() * 0.2) * (t() < 0.5 ? -1 : 1),
    i = 9 + Math.floor(t() * 6),
    d = 0.1 + t() * 0.07,
    y = 0.5 + t() * 0.4,
    w = t() * Jt,
    g = [0.07 + t() * 0.1, t() * Jt, 0.04 + t() * 0.06, t() * Jt],
    z = Math.atan2(s.toPath[1], s.toPath[0]) + (t() - 0.5) * 1,
    x = 0.04 + t() * 0.05,
    v = t() * Jt,
    n = 0.3 + t() * 0.5,
    l = t() * Jt,
    f = 0.15 + t() * 0.3,
    h = (T) => {
      const D = Math.min(1, Math.max(0, T) / r),
        N = Math.sin(Math.PI * D) * n,
        H = Math.sin(Jt * D) * f;
      return [
        Math.cos(z) * x * T + Math.cos(v) * N + Math.cos(l) * H,
        Math.sin(z) * x * T + Math.sin(v) * N + Math.sin(l) * H,
      ];
    },
    c = h(Math.max(0, Math.min(r, 1.5 - o))),
    M = (T) => {
      const D = h(T);
      return [s.x + D[0] - c[0], o + T, s.z + D[1] - c[1]];
    },
    m = 5 + Math.floor(t() * 3),
    k = [];
  for (let T = 0, D = t() * Jt; T < m; T++) {
    let N = D + (T / m) * Jt + (t() - 0.5) * 0.6;
    for (const H of u)
      Math.abs(eo(N - H)) < 0.55 && (N = H + Math.sign(eo(N - H) || 1) * 0.55);
    k.push({ a: N, A: 0.28 + t() * 0.45, L: 0.7 + t() * 0.8 });
  }
  const S = [];
  for (let T = 0, D = 3 + Math.floor(t() * 3); T < D; T++)
    S.push({
      a: t() * Jt,
      w: 0.05 + t() * 0.07,
      d: 0.18 + t() * 0.2,
      y0: -0.5 + t() * 2.5,
      y1: 3 + t() * (r + 2),
    });
  const A = [];
  for (let T = 0, D = 2 + Math.floor(t() * 4); T < D; T++)
    A.push({
      a: t() * Jt,
      y: 0.8 + t() * (r - 2),
      s: 0.25 + t() * 0.45,
      h: 0.08 + t() * 0.14,
    });
  const b =
    t() < 0.85
      ? {
          a: Math.atan2(s.toPath[1], s.toPath[0]) + (t() - 0.5) * 2,
          y: 0.5 + t() * 1.8,
          w: 0.2 + t() * 0.16,
          h: 0.35 + t() * 0.45,
          d: 0.5 + t() * 0.25,
        }
      : null;
  if (b) for (const T of u) Math.abs(eo(b.a - T)) < 0.7 && (b.a = T + Math.PI);
  const P = [];
  for (let T = 0, D = 4 + Math.floor(t() * 3), N = t() * Jt; T < D; T++)
    P.push({
      a: N + (T / D) * Jt + (t() - 0.5) * 0.7,
      h: T === 0 ? 1 + t() * 1.3 : 0.2 + t() * 0.85,
      w: T === 0 ? 0.5 + t() * 0.35 : 0.2 + t() * 0.35,
    });
  const _ = Array.from({ length: 13 }, () => (t() - 0.5) * 0.3),
    I = (T) => {
      let D = 0;
      for (const W of P)
        D = Math.max(
          D,
          W.h * Math.pow(Math.max(0, 1 - Math.abs(eo(T - W.a)) / W.w), 0.75),
        );
      const N = ((((T % Jt) + Jt) % Jt) / Jt) * 13,
        H = Math.floor(N),
        Q = N - H;
      return r + D + _[H % 13] * (1 - Q) + _[(H + 1) % 13] * Q;
    },
    R = (T) =>
      (e *
        (1.04 - 0.3 * Math.min(1, Math.max(0, T) / r)) *
        (1 + a * Math.exp(-Math.max(0, T) / 0.75))) /
      (1 + a * Math.exp(-1.5 / 0.75)),
    V = (T, D) => {
      const N = D - p * T;
      let H =
        1 +
        g[0] * Math.cos(2 * (N - g[1])) +
        g[2] * Math.cos(3 * (D - g[3]) + T * 0.2);
      H +=
        d *
        (Math.pow(
          Math.abs(Math.sin(i * 0.5 * N + w + 0.4 * Math.sin(N * 2 + T * 0.3))),
          y,
        ) -
          0.6) *
        (0.6 + 0.4 * Math.sin(T * 0.7 + N));
      for (const W of k)
        H +=
          W.A *
          Math.pow(Math.max(0, Math.cos(D - W.a)), 10) *
          Math.exp(-Math.max(0, T) / W.L) *
          1.6;
      for (const W of S) {
        const B = eo(N - W.a) / W.w;
        Math.abs(B) < 1 &&
          (H -=
            W.d *
            (1 - B * B) *
            (1 - B * B) *
            Qo(W.y0, W.y0 + 0.6, T) *
            (1 - Qo(W.y1 - 0.8, W.y1, T)));
      }
      for (const W of A) {
        const B = eo(D - W.a) * R(W.y),
          F = T - W.y,
          E = (B * B + F * F) / (W.s * W.s);
        E < 4 && (H += W.h * Math.exp(-E * 1.5));
      }
      H +=
        0.035 * It(N * 2.1 + s.seed * 7, T * 1.3) +
        0.02 * It(N * 6.3, T * 4.1 + s.seed);
      let Q = 0;
      if (b) {
        const W = eo(D - b.a) / b.w,
          B = (T - b.y) / b.h,
          F = W * W + B * B;
        if (F < 1) {
          const E = Math.pow(1 - F, 0.55);
          ((H -= b.d * E), (Q = Math.min(1, E * 1.6)));
        } else F < 1.9 && (H += 0.07 * Math.sin(((F - 1) / 0.9) * Math.PI));
      }
      return [R(T) * Math.max(0.12, H), Q];
    },
    L = [];
  for (let T = -0.6; T < 1.2; T += 0.13) L.push(T);
  for (let T = 1.2; T < 4; T += 0.26) L.push(T);
  for (let T = 4; T < r - 0.2; T += 0.5) L.push(T);
  for (const T of [0, 0.22, 0.5, 0.85, 1.3, 1.85, 2.5, 3.2]) L.push(r + T);
  L.push(r - 0.4);
  const K = 44,
    j = L.length,
    O = new Float32Array(j * (K + 1) * 3),
    J = new Float32Array(j * (K + 1) * 2),
    tt = new Float32Array(j * (K + 1) * 3),
    st = Math.max(1, Math.round(Jt * e * ts)) / (Jt * ts);
  for (let T = 0; T < j; T++) {
    const D = L[T],
      N = T === j - 1;
    for (let H = 0; H <= K; H++) {
      const Q = (H / K) * Jt,
        W = T * (K + 1) + H;
      let B,
        F,
        E = D;
      if (N)
        ((B = R(r) * 0.05), (F = 0.85), (E = r - 0.4 + _[(H % K) % 13] * 0.5));
      else if (D < r) [B, F] = V(D, Q);
      else {
        const et = I(Q),
          [nt, it] = V(r, Q);
        D <= et
          ? ((B = nt * (1 - 0.1 * (D - r)) * (1 - 0.25 * Qo(et - 0.6, et, D))),
            (F = it * 0.5 + 0.25 * Qo(et - 0.5, et, D)))
          : ((B = nt * (0.5 + 0.08 * Math.sin(Q * 7 + s.seed))),
            (E = et - 0.05),
            (F = 0.65));
      }
      const Y = M(E);
      ((O[W * 3] = Y[0] + Math.cos(Q) * B),
        (O[W * 3 + 1] = Y[1]),
        (O[W * 3 + 2] = Y[2] + Math.sin(Q) * B),
        (J[W * 2] = (Q - p * E) * st * ts),
        (J[W * 2 + 1] = E * ts),
        tt.set(gs(E, F), W * 3));
    }
  }
  const G = new Float32Array(O.length),
    q = new dt(),
    U = new dt(),
    Z = new dt(),
    ot = (T, D) => {
      const N = T * (K + 1) + ((D + K) % K);
      return [O[N * 3], O[N * 3 + 1], O[N * 3 + 2]];
    };
  for (let T = 0; T < j; T++)
    for (let D = 0; D <= K; D++) {
      const N = ot(T, D + 1),
        H = ot(T, D - 1),
        Q = ot(Math.min(j - 1, T + 1), D),
        W = ot(Math.max(0, T - 1), D);
      (q.set(N[0] - H[0], N[1] - H[1], N[2] - H[2]),
        U.set(Q[0] - W[0], Q[1] - W[1], Q[2] - W[2]),
        Z.crossVectors(U, q),
        Z.lengthSq() < 1e-12 && Z.set(0, 1, 0),
        Z.normalize());
      const B = T * (K + 1) + D,
        F = M(L[T]);
      (T < j - 1 &&
        L[T] < r &&
        (O[B * 3] - F[0]) * Z.x + (O[B * 3 + 2] - F[2]) * Z.z < 0 &&
        Z.negate(),
        (G[B * 3] = Z.x),
        (G[B * 3 + 1] = Z.y),
        (G[B * 3 + 2] = Z.z));
    }
  const $ = [];
  for (let T = 0; T < j - 1; T++)
    for (let D = 0; D < K; D++) {
      const N = T * (K + 1) + D,
        H = N + K + 1;
      $.push(N, H, N + 1, N + 1, H, H + 1);
    }
  const C = new Rt();
  return (
    C.setAttribute("position", new vt(O, 3)),
    C.setAttribute("normal", new vt(G, 3)),
    C.setAttribute("uv", new vt(J, 2)),
    C.setAttribute("aK", new vt(tt, 3)),
    C.setIndex($),
    { geo: C, axis: M, rad: V, H: r, B: k, r0: e }
  );
}
function $c(s, o, t, u, e, r, a, p) {
  const i = [],
    d = s.axis(o),
    y = s.rad(o, t)[0],
    w = at(d[0] + Math.cos(t) * y * 0.45, d[1], d[2] + Math.sin(t) * y * 0.45),
    g = at(-Math.sin(t), 0, Math.cos(t)),
    z = u * (0.36 + e() * 0.12),
    x = u - z,
    v = (e() - 0.5) * 0.7,
    n = at(Math.cos(t), 0.5 + e() * 0.5, Math.sin(t)).normalize(),
    l = at(Math.cos(t + v), -(0.18 + e() * 0.32), Math.sin(t + v)).normalize(),
    f = [w.clone()],
    h = w.clone(),
    c = n.clone(),
    M = 5,
    m = 7,
    k = (K, j, O) => {
      (c
        .copy(K)
        .addScaledVector(at(e() - 0.5, (e() - 0.5) * 0.6, e() - 0.5), O)
        .normalize(),
        h.addScaledVector(c, j),
        r.sdAt(h.x, h.z) < 1 && h.y < 2.9 && (h.y = 2.9),
        f.push(h.clone()));
    };
  for (let K = 1; K <= M; K++)
    k(n.clone().lerp(l, Math.pow(K / M, 3) * 0.3), z / M, 0.16);
  const S = f.length - 1;
  for (let K = 1; K <= m; K++)
    k(l.clone().add(at(0, (-0.12 * K) / m, 0)), x / m, 0.22);
  const A = f.length - 1,
    b = Math.min(0.5, y * (0.32 + e() * 0.12)),
    P = e() * 10;
  i.push(
    Vt(
      f,
      (K, j) =>
        (b * (1 - 0.72 * Math.pow(K, 0.9)) + 0.03) *
        (1 + 0.12 * Math.sin(j * 2.1 + P) + (j === S ? 0.14 : 0)),
      12,
    ),
  );
  const _ = f[A],
    I = f[A].clone()
      .sub(f[A - 1])
      .normalize(),
    R = 3 + Math.floor(e() * 2);
  for (let K = 0; K < R; K++) {
    const j = (K / (R - 1) - 0.5) * 2,
      O = I.clone()
        .addScaledVector(g, j * (0.55 + e() * 0.35))
        .add(at(0, 0.1 + (e() - 0.5) * 0.3, 0))
        .normalize(),
      J = 0.9 + e() * 1.6,
      tt = [_.clone().addScaledVector(I, -0.15)],
      st = tt[0].clone(),
      G = 0.05 + e() * 0.035;
    for (let Z = 1; Z <= 6; Z++)
      ((O.y -= 0.1 + 0.05 * Z),
        O.addScaledVector(at(e() - 0.5, e() - 0.5, e() - 0.5), 0.4).normalize(),
        st.addScaledVector(O, J / 6),
        r.sdAt(st.x, st.z) < 1 && st.y < 2.8 && (st.y = 2.8),
        tt.push(st.clone()));
    i.push(Vt(tt, (Z) => G * (1 - Z * 0.82) + 0.007, 6, { cap: !0 }));
    const q = tt[2 + Math.floor(e() * 3)],
      U = at(e() - 0.5, e() * 0.5 - 0.35, e() - 0.5).normalize();
    i.push(
      Vt(
        [
          q,
          q.clone().addScaledVector(U, 0.2 + e() * 0.25),
          q
            .clone()
            .addScaledVector(U, 0.35 + e() * 0.4)
            .add(at(0, -0.08, 0)),
        ],
        (Z) => 0.018 * (1 - Z) + 0.004,
        4,
      ),
    );
  }
  for (let K = 0; K < 3; K++) {
    const j = f[1 + Math.floor(e() * (A - 2))],
      O = at(e() - 0.5, 0.5 + e() * 0.6, e() - 0.5).normalize(),
      J = 0.25 + e() * 0.7,
      tt = b * (0.3 + e() * 0.2);
    i.push(
      Vt(
        [
          j,
          j.clone().addScaledVector(O, J * 0.5),
          j.clone().addScaledVector(O, J),
        ],
        [tt, tt * 0.85, tt * 0.7],
        7,
        { cap: !0 },
      ),
    );
  }
  const V = A;
  if (p)
    for (let K = 2; K <= V; K++)
      for (let j = 0; j < 2; j++) {
        if (e() < 0.35) continue;
        const O = f[K - 1].clone().lerp(f[K], e()),
          J = 0.7 + e() * 1,
          tt = O.y - 0.45 - J * 0.65;
        (r.sdAt(O.x, O.z) < 1.2 && tt < 2.35) ||
          a.push({
            pos: O.clone().add(at(0, -0.45, 0)),
            along: at((e() - 0.5) * 0.12, -1, (e() - 0.5) * 0.12).normalize(),
            size: J,
            cell: Bt.moss,
            out: at(e() - 0.5, 0, e() - 0.5).normalize(),
            shade: 0.3 + e() * 0.12,
            vertical: !0,
            hang: !0,
          });
      }
  const L = s.axis(0)[1];
  return i.map((K) => Os(K, (j, O) => gs(O - L, 0)));
}
function Zc(s, o) {
  const t = [],
    u = s.axis(0)[1];
  for (let e = 0, r = 2 + Math.floor(o() * 3); e < r; e++) {
    const a = s.H * (0.55 + o() * 0.38),
      p = o() * Jt,
      i = s.axis(a),
      d = s.rad(a, p)[0],
      y = at(i[0] + Math.cos(p) * d * 0.7, i[1], i[2] + Math.sin(p) * d * 0.7),
      w = at(Math.cos(p), 0.3 + o() * 0.8, Math.sin(p)).normalize(),
      g = 0.6 + o() * 1.6,
      z = [
        y,
        y
          .clone()
          .addScaledVector(w, g * 0.5)
          .add(at((o() - 0.5) * 0.2, 0, (o() - 0.5) * 0.2)),
        y.clone().addScaledVector(w, g),
      ],
      x = 0.08 + o() * 0.1;
    t.push(
      Os(Vt(z, [x, x * 0.75, x * 0.55], 7, { cap: !0 }), (v, n) =>
        gs(n - u, 0.15),
      ),
    );
  }
  return t;
}
function Jc(s, o, t, u, e) {
  const r = [],
    a = (d, y) => {
      for (const w of e) if (fe(d, y, w[0], w[1], w[2], w[3]) < 1.05) return !1;
      return !0;
    },
    p = s.B.map((d) => ({ a: d.a, A: d.A })).concat(
      Array.from({ length: 2 + Math.floor(u() * 2) }, () => ({
        a: u() * Jt,
        A: 0.15 + u() * 0.15,
      })),
    ),
    i = s.axis(0)[1];
  for (const d of p) {
    const y = s.axis(0);
    let w = d.a,
      g = y[0] + Math.cos(w) * s.r0 * 0.75,
      z = y[2] + Math.sin(w) * s.r0 * 0.75;
    const x = s.r0 * (0.2 + d.A * 0.42),
      v = 2.2 + u() * 3.6 + d.A * 3,
      n = Math.ceil(v / 0.3),
      l = [];
    for (let f = 0; f <= n; f++) {
      const h = f / n,
        c = x * (1 - h * 0.85),
        M = t.heightAt(g, z);
      if (f > 2 && (t.sdAt(g, z) < 0.12 || !a(g, z))) break;
      (l.push(
        at(
          g,
          Math.max(M - c * 0.45, i - 0.4) +
            c * (f === 0 ? 1.2 : f === 1 ? 0.7 : 0.25) +
            (f === 0 ? 0.35 : 0),
          z,
        ),
      ),
        (w += (u() - 0.5) * 0.45),
        (g += Math.cos(w) * 0.3),
        (z += Math.sin(w) * 0.3));
    }
    l.length < 3 ||
      r.push(
        Os(
          Vt(l, (f) => x * (1 - f * 0.88) + 0.01, 7),
          (f, h) => gs(Math.max(0, h - i) * 0.5, 0.05),
        ),
      );
  }
  return r;
}
function Qc(s, o, t) {
  const u = o() * Jt,
    e = 2.5 + o() * 4;
  for (let r = 0.3; r < e; r += 0.3 + o() * 0.25) {
    const a = u + r * 0.5 + (o() - 0.5) * 1.2,
      p = s.axis(r),
      i = s.rad(r, a)[0] + 0.04,
      d = at(Math.cos(a), 0.1, Math.sin(a)).normalize();
    t.push({
      pos: at(p[0] + Math.cos(a) * i, p[1], p[2] + Math.sin(a) * i),
      along: at(-Math.sin(a) * 0.5, 1, Math.cos(a) * 0.5).normalize(),
      size: 0.6 + o() * 0.5,
      cell: Bt.twigs,
      out: d,
      shade: 0.5,
      ivy: d,
    });
  }
}
function ti(s, o) {
  const t = [],
    u = [],
    e = [],
    r = [];
  for (const a of je) {
    const p = be[a.name],
      i = p[0],
      d = p[p.length - 1],
      y = s.at(a.s),
      w = [y.x - a.x, y.z - a.z],
      g = Math.hypot(...w),
      z = { ...a, toPath: [w[0] / g, w[1] / g], seed: o() * 10 };
    let x = 1e9;
    for (let k = 0; k < 8; k++)
      x = Math.min(
        x,
        s.heightAt(
          z.x + Math.cos((k * Jt) / 8) * z.r * 1.35,
          z.z + Math.sin((k * Jt) / 8) * z.r * 1.35,
        ),
      );
    const v = p.slice(0, 2).map((k) => Math.atan2(k[1] - z.z, k[0] - z.x)),
      n = Xc(z, x, o, v),
      l = [n.geo],
      f = [],
      h = o() < 0.45 ? 2 : 1,
      c = Math.atan2(z.toPath[1], z.toPath[0]);
    for (let k = 0; k < h; k++) {
      const S = Math.min(
          n.H - 1.2,
          Math.max(3.4 + o() * 3.2 + k * 1.6, 3.3 - x + k * 1.2),
        ),
        A = c + (k ? -1 : 1) * (0.25 + o() * 0.55) * (o() < 0.5 ? 1 : -1);
      l.push(...$c(n, S, A, 5.5 + o() * 3.2, o, s, f, o() < 0.6));
    }
    l.push(...Zc(n, o));
    const M = [];
    for (let k = 0; k < p.length - 1; k++)
      M.push([p[k][0], p[k][1], p[k + 1][0], p[k + 1][1]]);
    (l.push(...Jc(n, z, s, o, M)),
      o() < 0.4 && Qc(n, o, f),
      t.push({
        G: z,
        bark: l,
        cards: f.filter((k) => k.pos.y > 3.2 || s.sdAt(k.pos.x, k.pos.z) > 1.2),
        H: n.H,
      }));
    const m = z.r * 0.9;
    (u.push({
      x0: z.x - 0.92 * m,
      x1: z.x + 0.92 * m,
      z0: z.z - 0.38 * m,
      z1: z.z + 0.38 * m,
      y0: 0,
      y1: 3,
      giant: z.name,
    }),
      u.push({
        x0: z.x - 0.38 * m,
        x1: z.x + 0.38 * m,
        z0: z.z - 0.92 * m,
        z1: z.z + 0.92 * m,
        y0: 0,
        y1: 3,
        giant: z.name,
      }),
      e.push({ x: z.x, z: z.z, r: z.r * 1.12, tree: !0, giant: !0 }),
      r.push({
        name: z.name,
        x: i[0],
        z: i[1],
        yaw: +Math.atan2(p[1][0] - i[0], p[1][1] - i[1]).toFixed(3),
        s: z.s,
        route: s.routeIndexAtS
          ? s.routeIndexAtS(z.s)
          : s.routeIndexNear(i[0], i[1]),
        side: z.side,
        tree: [z.x, z.z, z.r],
        out: [d[0], d[1]],
      }));
  }
  return (
    r.sort((a, p) => a.s - p.s),
    { list: t, colliders: u, circles: e, lurks: r }
  );
}
const ne = Math.PI * 2,
  ae = {
    graves: [10.6, "R", 3.7],
    shoe: [19.5, "R", 1],
    suitcase: [33, "R", 1.95],
    coat: [70, "post"],
    strips: [
      [73, "R"],
      [76.5, "L"],
      [80, "R"],
      [83.5, "L"],
      [87, "R"],
      [90.5, "L"],
    ],
    graves2: [98, "R", 3.6],
    pram: [166, "L", 2.8],
    doll: [168.5, "L", 1.95],
    crate: [244.5, "L", 1.8],
  },
  es = new w0(),
  os = at(0, 1, 0),
  ss = at(1, 1, 1),
  B0 = (s) => new wt().makeRotationY(s),
  g0 = (s) => new wt().makeRotationX(s),
  ve = (s) => new wt().makeRotationZ(s),
  Ot = (s, o, t) => new wt().makeTranslation(s, o, t),
  Dt = (...s) => {
    const o = new wt();
    for (const t of s) o.premultiply(t);
    return o;
  };
function ei(s, o) {
  const t = s.attributes.position.count,
    u = new Float32Array(t * 3);
  for (let e = 0; e < t; e++) u.set(o, e * 3);
  return (s.setAttribute("color", new vt(u, 3)), s);
}
function oi(s, o = null, t = 0) {
  const u = s.attributes.position,
    e = new Float32Array(u.count * 2);
  for (let r = 0; r < u.count; r++)
    ((e[r * 2] = o ? o(u.getX(r), u.getY(r), u.getZ(r)) : 0),
      (e[r * 2 + 1] = t));
  return (s.setAttribute("aSway", new vt(e, 2)), s);
}
const si = (s) => ((s = (s + Math.PI) % ne), s < 0 && (s += ne), s - Math.PI);
function Be(s, o, t, u, e, r, a, p = (i, d) => 0) {
  const i = [],
    d = [],
    y = [],
    w = [];
  let g = (Math.floor(a * 1013) % 2147483646) + 1;
  const z = () => (g = (g * 16807) % 2147483647) / 2147483647,
    x = Array.from({ length: 4 }, () => ({
      a: z() * Math.PI,
      f: 7 + z() * 11,
      ph: z() * ne,
      A: r * (0.9 + z() * 1.4),
    }));
  for (let n = 0; n <= u; n++)
    for (let l = 0; l <= t; l++) {
      const f = n / u,
        h = l / t - 0.5,
        c = s * e(f) * (1 + 0.08 * It(f * 5 + a, h * 2)),
        M = h * c + 0.012 * It(f * 9, a),
        m = (f - 0.5) * o + 0.012 * It(h * 9 + a, 3);
      let k = 0.01 + Math.abs(It(M * 13 + a, m * 13 - a)) * r * 0.35 + p(h, f);
      for (const S of x)
        k +=
          S.A *
          Math.pow(
            0.5 +
              0.5 *
                Math.sin(S.f * (M * Math.cos(S.a) + m * Math.sin(S.a)) + S.ph),
            3,
          );
      (i.push(M, k, m), d.push(0, 1, 0), y.push(M * 2, m * 2));
    }
  for (let n = 0; n < u; n++)
    for (let l = 0; l < t; l++) {
      const f = n * (t + 1) + l,
        h = f + 1,
        c = f + t + 1,
        M = c + 1;
      w.push(f, c, h, h, c, M);
    }
  const v = new Rt();
  return (
    v.setAttribute("position", new xt(i, 3)),
    v.setAttribute("normal", new xt(d, 3)),
    v.setAttribute("uv", new xt(y, 2)),
    v.setIndex(w),
    v.computeVertexNormals(),
    v
  );
}
function ya(s, o, t, u, e = 0.05, r = 0.04) {
  const a = new s0(s, t, 6, 28),
    p = new Pt(e, e, r * 1.6, 10).rotateX(Math.PI / 2),
    i = [];
  for (let d = 0; d < o; d++) {
    const y = (d / o) * ne;
    i.push(
      new Pt(u, u * 1.2, s - e, 5).translate(0, e + (s - e) / 2, 0).rotateZ(y),
    );
  }
  return { rim: a, hub: p, spokes: i };
}
function ai(s, o, t, u) {
  const e = { bark: [], mounds: [] },
    r = {};
  let a = "graves";
  const p = {
      cloth: "fabric",
      wool: "fabric",
      leather: "hard",
      metal: "hard",
      wood: "wood",
    },
    i = [],
    d = [],
    y = (m, k, S, A = 0, b = 0) => {
      const P = o.at(m),
        _ = k === "L" ? 1 : -1,
        I = P.x + P.tz * _ * S,
        R = P.z - P.tx * _ * S,
        V = Math.atan2(_ * P.tz, -_ * P.tx) + A;
      return {
        x: I,
        z: R,
        y: Math.max(0, o.heightAt(I, R)) + b,
        m: new wt().compose(
          at(I, Math.max(0, o.heightAt(I, R)) + b, R),
          es.setFromAxisAngle(os, V),
          ss,
        ),
        phi: V,
        s: m,
      };
    },
    w = (m, k, S, A, b = null, P = 0) => {
      ((k = k.clone()),
        S && k.applyMatrix4(S),
        d0(k, ["position", "normal", "uv", "color", "aSway", "aHard"]),
        k.attributes.uv ||
          k.setAttribute(
            "uv",
            new vt(new Float32Array(k.attributes.position.count * 2), 2),
          ),
        (m === "wood" || m === "leather" || m === "metal") && Ct(k),
        ei(k, A));
      const _ = p[m];
      if (
        (_ === "fabric" && (k.attributes.aSway || oi(k, b, P)), _ === "hard")
      ) {
        const I = k.attributes.position.count,
          R = new Float32Array(I * 2);
        for (let V = 0; V < I; V++)
          R.set(m === "metal" ? [0.85, 0.42] : [0, 0], V * 2);
        k.setAttribute("aHard", new vt(R, 2));
      }
      return (
        r[a] || (r[a] = { fabric: [], hard: [], wood: [] }),
        r[a][_].push(k),
        k
      );
    },
    g = (m, k = 0.3) => {
      const S = m.attributes.position.count,
        A = new Float32Array(S * 3);
      for (let b = 0; b < S; b++) A.set([k, 0.55, 0.6], b * 3);
      return (m.setAttribute("aK", new vt(A, 3)), m);
    },
    z = (m, [k, S, A], b, P, _) => {
      a = m;
      const I = y(k, S, A),
        R = [0.9, 0.04, 0, 0],
        V = (L) => {
          const K = new t0(0.135, 18, 9, 0, ne, 0, Math.PI * 0.5).scale(
            1,
            0.85,
            1.12,
          );
          (w("metal", K, L, [0.11, 0.12, 0.075]),
            w(
              "metal",
              new s0(0.15, 0.012, 5, 24)
                .rotateX(Math.PI / 2)
                .scale(1, 1, 1.14)
                .translate(0, 0.004, 0),
              L,
              [0.1, 0.11, 0.07],
            ),
            w(
              "leather",
              Vt(
                [
                  at(-0.12, 0, 0.02),
                  at(-0.09, -0.12, 0.03),
                  at(0, -0.17, 0.035),
                  at(0.09, -0.12, 0.03),
                  at(0.12, 0, 0.02),
                ],
                () => 0.006,
                4,
              ),
              L,
              [0.12, 0.08, 0.05],
            ));
        };
      for (let L = 0; L < b; L++) {
        const K = (L - (b - 1) / 2) * 1.12 + (t() - 0.5) * 0.15,
          j = (t() - 0.5) * 0.25,
          O = 1.7 + t() * 0.25,
          J = 0.62 + t() * 0.12,
          tt = 0.2 + t() * 0.08,
          st = (t() - 0.5) * 0.12,
          G = new t0(1, 18, 7, 0, ne, 0, Math.PI / 2).scale(J / 2, tt, O / 2),
          q = G.attributes.position;
        for (let B = 0; B < q.count; B++) {
          const F = q.getX(B),
            E = q.getZ(B),
            Y = q.getY(B);
          (q.setY(
            B,
            Y * (1 + 0.25 * It(F * 7 + L * 3, E * 7)) +
              0.02 * It(F * 19, E * 19 + L),
          ),
            q.setX(B, F * (1 + 0.06 * It(E * 4, L))));
        }
        G.computeVertexNormals();
        const U = Dt(B0(st), Ot(K, -0.04, j), I.m);
        G.applyMatrix4(U);
        const Z = G.attributes.position,
          ot = new Float32Array(Z.count * 2),
          $ = new Float32Array(Z.count * 4);
        for (let B = 0; B < Z.count; B++)
          (Z.setY(B, Z.getY(B) + o.heightAt(Z.getX(B), Z.getZ(B)) - I.y),
            (ot[B * 2] = Z.getX(B)),
            (ot[B * 2 + 1] = -Z.getZ(B)),
            $.set(R, B * 4));
        (G.computeVertexNormals(),
          G.setAttribute("uv", new vt(ot, 2)),
          G.setAttribute("aMask", new vt($, 4)),
          e.mounds.push(d0(G, ["position", "normal", "uv", "aMask"])));
        const C = 1.15 + t() * 0.3,
          T = (t() - 0.5) * 0.16,
          D = Dt(
            ve(T),
            B0((t() - 0.5) * 0.3),
            Ot(K, -0.25, j + O / 2 + 0.05),
            I.m,
          );
        if (L === _) {
          const B = Dt(
            B0(0.6 + t() * 0.4),
            g0(0.08),
            ve(-0.12),
            Ot(K + 0.05, -0.12, j + O / 2 + 0.12),
            I.m,
          );
          (w(
            "metal",
            new Pt(0.0105, 0.012, 0.66, 8).translate(0, 0.33, 0),
            B,
            [0.06, 0.06, 0.06],
          ),
            w(
              "metal",
              new Pt(0.004, 0.004, 0.42, 5).translate(0.016, 0.26, 0.004),
              B,
              [0.06, 0.06, 0.06],
            ),
            w(
              "wood",
              new Zt(0.044, 0.42, 0.05, 1, 0.012).translate(0, 0.44, -0.006),
              B,
              [0.075, 0.045, 0.026],
            ),
            w(
              "metal",
              new Zt(0.04, 0.2, 0.055, 1, 0.008).translate(0, 0.74, -0.004),
              B,
              [0.07, 0.07, 0.068],
            ),
            w(
              "metal",
              new Pt(0.006, 0.006, 0.06, 6)
                .rotateZ(Math.PI / 2)
                .translate(0.035, 0.7, 0.01),
              B,
              [0.08, 0.08, 0.08],
            ),
            w(
              "metal",
              new Zt(0.03, 0.09, 0.05, 1, 0.006).translate(0, 0.72, -0.05),
              B,
              [0.06, 0.06, 0.06],
            ),
            w(
              "metal",
              new s0(0.022, 0.004, 4, 10, Math.PI)
                .rotateY(Math.PI / 2)
                .translate(0, 0.83, -0.03),
              B,
              [0.06, 0.06, 0.06],
            ));
          {
            const F = new qt(0.042, 0.42, 0.07, 1, 3, 1),
              E = F.attributes.position;
            for (let Y = 0; Y < E.count; Y++) {
              const et = (E.getY(Y) + 0.21) / 0.42;
              E.setZ(Y, E.getZ(Y) * (0.85 + et * 0.9) - et * 0.035);
            }
            (F.computeVertexNormals(),
              w("wood", F.translate(0, 1.05, -0.012), B, [0.07, 0.042, 0.024]));
          }
          V(Dt(g0(0.2), ve(-0.15), Ot(0, 1.27, -0.01), B));
          continue;
        }
        const N = [
            at(0, 0, 0),
            at(0.015, C * 0.4, 0.01),
            at(-0.01, C * 0.75, -0.01),
            at(0.01, C + 0.25, 0),
          ],
          H = [
            at(-0.36, 0, 0),
            at(-0.12, 0.012, 0.01),
            at(0.14, -0.01, 0),
            at(0.36, 0.015, -0.01),
          ].map((B) => B.add(at(0, C * 0.72 + 0.25, 0.042)));
        e.bark.push(
          g(
            Vt(N, (B) => 0.045 * (1 - B * 0.3), 7, { cap: !0 }).applyMatrix4(D),
          ),
          g(
            Vt(H, (B) => 0.034 * (1 - B * 0.2), 7, { cap: !0 }).applyMatrix4(D),
          ),
        );
        const Q = new s0(0.04, 0.012, 5, 10)
          .rotateY(Math.PI / 4)
          .translate(0, C * 0.72 + 0.25, 0.018);
        (w("cloth", Q, D, [0.42, 0.4, 0.34]),
          w(
            "cloth",
            new s0(0.038, 0.011, 5, 10)
              .rotateY(-Math.PI / 4)
              .translate(0, C * 0.72 + 0.25, 0.02),
            D,
            [0.4, 0.38, 0.33],
          ));
        const W = new m0(0.04, 0.22, 1, 4).translate(
          0.03,
          C * 0.72 + 0.25 - 0.12,
          0.05,
        );
        (w(
          "cloth",
          W,
          D,
          [0.4, 0.38, 0.32],
          (B, F) => (L === P ? Math.max(0, C * 0.72 + 0.25 - F) * 2.5 : 0),
          1.7 + L,
        ),
          L === P && V(Dt(g0(-0.35), ve(0.25), Ot(0, C + 0.12, 0.02), D)));
      }
      d.push({
        name: m,
        x: +I.x.toFixed(2),
        z: +I.z.toFixed(2),
        s: +k.toFixed(1),
      });
    };
  (z("graves", ae.graves, 3, 1, -1),
    z("graves2", ae.graves2, 2, -1, 1),
    (a = "shoe"));
  {
    const [m, k, S] = ae.shoe,
      A = y(m, k, S, 2.1),
      b = Dt(g0(1), Ot(0, 0.026, 0), A.m),
      P = (K) =>
        0.0185 +
        0.0095 * Math.min(1, Math.max(0, (K + 0.025) / 0.07)) -
        0.003 * Math.max(0, 1 - Math.abs(K + 0.005) / 0.025),
      _ = (K) => {
        const j = new he();
        for (let O = 0; O <= 32; O++) {
          const J = (O / 32) * ne,
            tt = 0.068 * Math.cos(J),
            st = P(tt) * Math.sin(J) * K;
          O ? j.lineTo(tt * K, st) : j.moveTo(tt * K, st);
        }
        return j;
      },
      I = new te(_(1), {
        depth: 0.011,
        bevelEnabled: !0,
        bevelThickness: 0.002,
        bevelSize: 0.002,
        bevelSegments: 1,
        curveSegments: 8,
      }).rotateX(-Math.PI / 2);
    w("leather", I, b, [0.035, 0.028, 0.022]);
    const R = _(1.04);
    R.holes.push(new Lo(_(0.9).getPoints(32)));
    const V = new te(R, {
      depth: 0.026,
      bevelEnabled: !0,
      bevelThickness: 0.002,
      bevelSize: 0.0015,
      bevelSegments: 1,
      curveSegments: 8,
    })
      .rotateX(-Math.PI / 2)
      .translate(0, 0.012, 0);
    (w("leather", V, b, [0.42, 0.035, 0.028]),
      w(
        "leather",
        new js(_(0.9), 8).rotateX(-Math.PI / 2).translate(0, 0.0145, 0),
        b,
        [0.06, 0.045, 0.035],
      ));
    const L = new t0(1, 16, 8, 0, ne, 0, Math.PI / 2)
      .scale(0.04, 0.03, 0.027)
      .translate(0.03, 0.012, 0);
    (w("leather", L, b, [0.45, 0.04, 0.03]),
      w(
        "leather",
        new s0(0.025, 0.0042, 5, 14, Math.PI)
          .rotateY(Math.PI / 2)
          .scale(1, 1.25, 1)
          .translate(-0.008, 0.026, 0),
        b,
        [0.28, 0.04, 0.03],
      ),
      w(
        "metal",
        new s0(0.0055, 0.0014, 4, 10).translate(-0.008, 0.026, 0.026),
        b,
        [0.55, 0.45, 0.25],
      ),
      d.push({ name: "shoe", x: +A.x.toFixed(2), z: +A.z.toFixed(2), s: m }));
  }
  a = "suitcase";
  {
    const [m, k, S] = ae.suitcase,
      A = y(m, k, S, -0.45),
      b = 0.64,
      P = 0.42,
      _ = 0.12,
      I = 0.012,
      R = (tt) => [
        new Zt(b, I, P, 1, 0.005).translate(0, I / 2, 0),
        new Zt(b, tt, I, 1, 0.005).translate(0, tt / 2, -P / 2 + I / 2),
        new Zt(b, tt, I, 1, 0.005).translate(0, tt / 2, P / 2 - I / 2),
        new Zt(I, tt, P, 1, 0.005).translate(-b / 2 + I / 2, tt / 2, 0),
        new Zt(I, tt, P, 1, 0.005).translate(b / 2 - I / 2, tt / 2, 0),
      ],
      V = Dt(Ot(0, 0.002, 0), A.m);
    for (const tt of R(_)) w("leather", tt, V, [0.1, 0.045, 0.03]);
    const L = Dt(g0(-2.1), ve(0.18), Ot(0.02, _, P / 2 - 0.01), V);
    for (const tt of R(0.05)) w("leather", tt, L, [0.1, 0.045, 0.03]);
    w(
      "cloth",
      new m0(b - 0.03, P - 0.03)
        .rotateX(-Math.PI / 2)
        .translate(0, I + 0.002, 0),
      V,
      [0.12, 0.03, 0.025],
    );
    for (const tt of [-0.18, 0.18])
      w(
        "metal",
        new qt(0.03, 0.022, 0.012).translate(tt, _ - 0.01, -P / 2 - 0.004),
        V,
        [0.35, 0.3, 0.18],
      );
    w(
      "leather",
      new s0(0.05, 0.007, 4, 10, Math.PI).translate(0, _ + 0.004, 0).rotateY(0),
      Dt(g0(-Math.PI / 2), Ot(0, 0.01, -P / 2 - 0.03), V),
      [0.07, 0.035, 0.025],
    );
    const K = Be(
      0.4,
      0.95,
      10,
      18,
      (tt) => 0.8 + 0.2 * Math.sin(tt * 3),
      0.025,
      3.1,
      (tt, st) =>
        st < 0.35 ? 0.09 + 0.05 * Math.sin((st / 0.35) * Math.PI) : 0,
    );
    w(
      "cloth",
      K,
      Dt(Ot(0, 0, 0.47 - 0.95 / 2 - 0.1), B0(Math.PI), V),
      [0.3, 0.28, 0.24],
    );
    const j = Be(0.62, 0.95, 14, 18, (tt) => 0.38 + 0.62 * tt, 0.03, 7.7);
    w("cloth", j, Dt(B0(0.5), Ot(-0.45, 0, -0.85), V), [0.075, 0.1, 0.15]);
    const O = Be(0.48, 0.55, 10, 10, (tt) => (tt > 0.75 ? 1.6 : 1), 0.045, 1.9);
    w("wool", O, Dt(B0(-0.9), Ot(0.55, 0, -0.55), V), [0.055, 0.05, 0.045]);
    const J = Be(0.07, 0.24, 2, 5, () => 1, 0.01, 5.5);
    (w("wool", J, Dt(B0(1.3), Ot(0.1, 0, -1.25), V), [0.17, 0.15, 0.12]),
      d.push({
        name: "suitcase",
        x: +A.x.toFixed(2),
        z: +A.z.toFixed(2),
        s: m,
      }),
      o.sdAt(A.x, A.z) < 0.4 && i.push({ x: A.x, z: A.z, r: 0.3, thing: !0 }));
  }
  a = "coat";
  {
    const m = (u.lamps || [])
        .filter(
          (S) =>
            S.kind === "post" &&
            S.fate === "dead" &&
            S.s != null &&
            Math.abs(S.s - ae.coat[0]) < 6,
        )
        .sort(
          (S, A) => Math.abs(S.s - ae.coat[0]) - Math.abs(A.s - ae.coat[0]),
        )[0],
      k = m ? m.s : ae.coat[0];
    if (m) {
      const S = o.at(Math.max(0, k - 10)),
        A = Math.atan2(S.x - m.x, S.z - m.z),
        b = new wt().compose(at(m.x, 0, m.z), es.setFromAxisAngle(os, A), ss),
        P = 1.92,
        _ = 1.28,
        I = 30,
        R = 20,
        V = 2.6,
        L = [],
        K = [],
        j = [];
      for (let G = 0; G <= R; G++) {
        const q = G / R,
          U = q * _,
          Z =
            q < 0.06
              ? 0.075 + (q / 0.06) * 0.16
              : 0.235 -
                0.02 * Math.min(1, (q - 0.06) / 0.3) +
                Math.max(0, q - 0.5) * 0.09,
          ot =
            q < 0.06
              ? 0.06 + (q / 0.06) * 0.045
              : 0.105 + Math.max(0, q - 0.5) * 0.06;
        for (let $ = 0; $ <= I; $++) {
          const C = Math.PI / 2 + 0.13 + ($ / I) * (ne - 0.26),
            T = Math.cos(C),
            D = Math.sin(C),
            N =
              1 +
              (0.05 * Math.sin(C * 6 + q * 3) +
                0.03 * Math.sin(C * 11 - q * 5)) *
                q +
              0.02 * It(C * 3, U * 4);
          let H = Math.sign(T) * Math.pow(Math.abs(T), 2 / V) * Z * N,
            Q = Math.sign(D) * Math.pow(Math.abs(D), 2 / V) * ot * N;
          const W = Math.max(0, 1 - Math.abs(si(C - Math.PI / 2)) / 0.9);
          (q < 0.4 &&
            ((H *= 1 + 0.25 * W * (1 - q / 0.4)),
            (Q += 0.02 * W * (1 - q / 0.4))),
            L.push(H, P - U - (q > 0.9 ? 0.02 * Math.sin(C * 3) : 0), Q),
            j.push(Math.pow(q, 1.7), 0.7));
        }
      }
      for (let G = 0; G < R; G++)
        for (let q = 0; q < I; q++) {
          const U = G * (I + 1) + q,
            Z = U + I + 1;
          K.push(U, Z, U + 1, U + 1, Z, Z + 1);
        }
      const O = new Rt();
      (O.setAttribute("position", new xt(L, 3)),
        O.setIndex(K),
        O.computeVertexNormals());
      {
        const G = O.attributes.position,
          q = new Float32Array(G.count * 2);
        for (let U = 0; U < G.count; U++)
          ((q[U * 2] = Math.atan2(G.getZ(U), G.getX(U)) * 0.3),
            (q[U * 2 + 1] = G.getY(U)));
        O.setAttribute("uv", new vt(q, 2));
      }
      (O.setAttribute("aSway", new xt(j, 2)),
        w("wool", O, b, [0.028, 0.025, 0.022]));
      for (const G of [-1, 1]) {
        const q = Vt(
          [
            at(G * 0.215, P - 0.06, 0),
            at(G * 0.245, P - 0.38, 0.02),
            at(G * 0.25, P - 0.62, 0.05),
            at(G * 0.24, P - 0.8, 0.06),
          ],
          (U) => 0.06 - U * 0.008,
          9,
          { cap: !0 },
        );
        w(
          "wool",
          q,
          b,
          [0.025, 0.022, 0.02],
          (U, Z) => Math.pow(Math.max(0, (P - Z) / _), 1.6),
          0.7,
        );
      }
      w(
        "wool",
        new Pt(0.075, 0.095, 0.085, 16, 1, !0, Math.PI * 0.15, Math.PI * 1.7)
          .rotateY(Math.PI / 2)
          .translate(0, P + 0.02, 0),
        b,
        [0.04, 0.036, 0.032],
      );
      const J = Dt(ve(0.1), g0(-0.06), Ot(0, 2.05, 0), b),
        tt = new ro(
          [
            [0.092, 0],
            [0.09, 0.02],
            [0.085, 0.1],
            [0.06, 0.125],
            [0, 0.13],
          ].map(([G, q]) => new re(G, q)),
          16,
        );
      w("wool", tt, J, [0.04, 0.035, 0.03]);
      const st = new nn(0.088, 0.175, 22, 1).rotateX(-Math.PI / 2);
      {
        const G = st.attributes.position;
        for (let q = 0; q < G.count; q++) {
          const U = Math.hypot(G.getX(q), G.getZ(q));
          G.setY(
            q,
            (U - 0.09) *
              0.28 *
              (0.6 + 0.4 * Math.cos(Math.atan2(G.getZ(q), G.getX(q)) * 2)),
          );
        }
        st.computeVertexNormals();
      }
      (w("wool", st, J, [0.04, 0.035, 0.03]),
        w(
          "cloth",
          new Pt(0.091, 0.093, 0.022, 16, 1, !0).translate(0, 0.03, 0),
          J,
          [0.015, 0.013, 0.012],
        ),
        d.push({ name: "coat", x: +m.x.toFixed(2), z: +m.z.toFixed(2), s: k }));
    }
  }
  a = "strips";
  {
    const m = [],
      k = new Set();
    for (const [S, A] of ae.strips) {
      const b = o.at(S),
        P = A === "L" ? 1 : -1;
      let _ = null,
        I = 1e9;
      for (const q of u.trees || []) {
        if (q.yard || k.has(q) || (q.kind === "young" && q.r < 0.1)) continue;
        const U = o.dPathAt(q.x, q.z) - o.hw(o.sPathAt(q.x, q.z)),
          Z = q.x - b.x,
          ot = q.z - b.z,
          $ = Z * b.tz - ot * b.tx;
        if (U < 0.7 + q.r || U > 3.2 + q.r || $ * P < 0) continue;
        const C = Math.abs(o.sPathAt(q.x, q.z) - S);
        C > 4.5 || (C + U * 0.5 < I && ((I = C + U * 0.5), (_ = q)));
      }
      if (!_) {
        const q = o.hw(S),
          U = b.x + b.tz * P * (q + 0.55),
          Z = b.z - b.tx * P * (q + 0.55),
          ot = o.heightAt(U, Z),
          $ = at((t() - 0.5) * 0.25, 0, (t() - 0.5) * 0.25),
          C = 1.95 + t() * 0.3,
          T = [
            at(U, ot - 0.15, Z),
            at(U + $.x * 0.4, ot + C * 0.45, Z + $.z * 0.4),
            at(U + $.x * 0.8 + 0.03, ot + C * 0.8, Z + $.z * 0.8),
            at(U + $.x, ot + C, Z + $.z),
          ];
        e.bark.push(
          g(
            Vt(T, (N) => 0.038 * (1 - N * 0.55) + 0.006, 6, { cap: !0 }),
            0.2,
          ),
        );
        const D = at(b.x - U, 0, b.z - Z).normalize();
        m.push({ knot: T[3].clone().add(at(0, -0.06, 0)), toP: D, s: S });
        continue;
      }
      k.add(_);
      const R = _,
        V = o.at(o.sPathAt(R.x, R.z)),
        L = at(V.x - R.x, 0, V.z - R.z).normalize(),
        K = 2.05 + t() * 0.35,
        j = (R.kind === "giant", R.r * 0.95),
        O = at(R.x + L.x * j * 0.8, K, R.z + L.z * j * 0.8),
        J = Math.min(
          1.5,
          Math.max(
            0.7,
            o.dPathAt(R.x, R.z) - o.hw(o.sPathAt(R.x, R.z)) - j + 0.2,
          ),
        ),
        tt = at(-L.z, 0, L.x).multiplyScalar((t() - 0.5) * 0.4),
        st = [
          O,
          O.clone()
            .addScaledVector(L, J * 0.4)
            .add(at(0, 0.05, 0))
            .add(tt),
          O.clone()
            .addScaledVector(L, J * 0.75)
            .add(at(0, 0.03, 0))
            .add(tt),
          O.clone()
            .addScaledVector(L, J)
            .add(at(0, -0.02, 0))
            .add(tt.clone().multiplyScalar(1.4)),
        ];
      e.bark.push(
        g(
          Vt(st, (q) => 0.04 * (1 - q * 0.6) + 0.006, 6, { cap: !0 }),
          0.15,
        ),
      );
      const G = st[2].clone().lerp(st[3], 0.35);
      m.push({ knot: G, toP: L, s: S });
    }
    (m.forEach((S, A) => {
      const b = new wt().compose(
        S.knot,
        es.setFromAxisAngle(
          os,
          Math.atan2(S.toP.x, S.toP.z) + (t() - 0.5) * 0.8,
        ),
        ss,
      );
      w("cloth", new t0(0.035, 8, 6).scale(1.4, 0.9, 1), b, [0.42, 0.4, 0.35]);
      const P = 0.5 + t() * 0.35,
        _ = 0.075 + t() * 0.04,
        I = 10,
        R = [],
        V = [],
        L = [],
        K = (t() - 0.5) * 0.12,
        j = (t() - 0.5) * 1.2;
      for (let J = 0; J <= I; J++) {
        const tt = J / I,
          st = -tt * P,
          G = j * tt,
          q = Math.sin(tt * 2.2) * K;
        for (const U of [-1, 1]) {
          const Z = J === I ? (U > 0 ? 0.05 : -0.03) * P * 0.3 : 0;
          (R.push(
            q + ((Math.cos(G) * U * _) / 2) * (1 - tt * 0.3),
            st + Z,
            (Math.sin(G) * U * _) / 2 + tt * tt * 0.025,
          ),
            L.push(U * 0.04, st));
        }
      }
      for (let J = 0; J < I; J++) {
        const tt = J * 2;
        V.push(tt, tt + 2, tt + 1, tt + 1, tt + 2, tt + 3);
      }
      const O = new Rt();
      (O.setAttribute("position", new xt(R, 3)),
        O.setAttribute("uv", new xt(L, 2)),
        O.setIndex(V),
        O.computeVertexNormals(),
        w(
          "cloth",
          O,
          b,
          [0.46, 0.44, 0.38],
          A === 1 ? (J, tt) => Math.min(1, Math.max(0, -tt) * 3) : null,
          2.3 + A,
        ));
    }),
      m.length &&
        d.push({
          name: "strips",
          x: +m[0].knot.x.toFixed(2),
          z: +m[0].knot.z.toFixed(2),
          s: m[0].s,
          n: m.length,
        }));
  }
  a = "crate";
  {
    const [m, k, S] = ae.crate,
      A = y(m, k, S, 0.2),
      b = 0.56,
      P = 0.3,
      _ = 0.32,
      I = 0.022,
      R = [
        new Zt(b, I, _, 1, 0.005).translate(0, I / 2, 0),
        new Zt(b, P, I, 1, 0.005).translate(0, P / 2, -_ / 2 + I / 2),
        new Zt(b, P, I, 1, 0.005).translate(0, P / 2, _ / 2 - I / 2),
        new Zt(I, P, _, 1, 0.005).translate(-b / 2 + I / 2, P / 2, 0),
        new Zt(I, P, _, 1, 0.005).translate(b / 2 - I / 2, P / 2, 0),
      ];
    for (const K of R) w("wood", K, A.m, [0.13, 0.15, 0.08]);
    for (const K of [-b / 2 - 0.015, b / 2 + 0.015])
      w(
        "cloth",
        new s0(0.045, 0.008, 4, 10, Math.PI)
          .rotateY(Math.PI / 2)
          .translate(K, P * 0.62, 0),
        A.m,
        [0.3, 0.26, 0.18],
      );
    w(
      "wood",
      new Zt(b + 0.02, I, _ + 0.02, 1, 0.005),
      Dt(ve(0.32), B0(-0.5), Ot(-0.45, 0.07, 0.25), A.m),
      [0.13, 0.15, 0.08],
    );
    for (const K of [-0.2, 0.2])
      w(
        "metal",
        new qt(0.04, 0.05, 0.01).translate(K, P - 0.03, -_ / 2 - 0.006),
        A.m,
        [0.08, 0.08, 0.07],
      );
    (d.push({ name: "crate", x: +A.x.toFixed(2), z: +A.z.toFixed(2), s: m }),
      o.sdAt(A.x, A.z) < 0.4 && i.push({ x: A.x, z: A.z, r: 0.32, thing: !0 }));
    const V = Dt(g0(Math.PI - 0.3), B0(0.9), Ot(0.55, 0.06, -0.45), A.m);
    (w(
      "wool",
      new Pt(0.105, 0.095, 0.075, 16).translate(0, 0.038, 0),
      V,
      [0.12, 0.12, 0.07],
    ),
      w(
        "wool",
        new Pt(0.115, 0.105, 0.025, 16)
          .translate(0, 0.085, 0)
          .scale(1, 1, 1.08),
        V,
        [0.12, 0.12, 0.07],
      ),
      w(
        "leather",
        new Ms(0.09, 12, 0, Math.PI)
          .rotateX(-Math.PI / 2 + 0.25)
          .translate(0, 0.005, 0.1),
        V,
        [0.03, 0.025, 0.02],
      ));
    const L = a0(
      [
        new Pt(0.0062, 0.0062, 0.045, 7).translate(0, 0.0225, 0),
        new Pt(0.0042, 0.006, 0.01, 7).translate(0, 0.05, 0),
      ].map((K) => d0(K)),
    );
    for (let K = 0; K < 18; K++) {
      const j = t() * ne,
        O = 0.25 + t() * 0.9,
        J = Math.cos(j) * O + 0.2,
        tt = Math.sin(j) * O - 0.5;
      w(
        "metal",
        L,
        Dt(g0(Math.PI / 2), B0(t() * ne), Ot(J, 0.008, tt), A.m),
        [0.42, 0.3, 0.11],
      );
    }
  }
  a = "cart";
  const x = [],
    v = [];
  {
    const m = Nt.cart,
      k = -m.gap,
      S = new wt()
        .makeBasis(at(m.ux, 0, m.uz), at(0, 1, 0), at(-m.vx * k, 0, -m.vz * k))
        .setPosition(m.x, Math.max(0, o.heightAt(m.x, m.z)), m.z),
      A = (C, T, D = 5) => {
        const N = C.attributes.position;
        for (let H = 0; H < N.count; H += D)
          x.push([N.getX(H), N.getY(H), N.getZ(H), T, !1]);
      },
      b = [],
      P = 2.2,
      _ = 1.15,
      I = 0.42,
      R = 0.66,
      V = 0.62,
      L = 0.62,
      K = P / 2 + 1.5,
      j = [0.062, 0.058, 0.052],
      O = [0.05, 0.046, 0.041],
      J = [0.04, 0.038, 0.035];
    for (let C = 0; C < 5; C++)
      b.push([
        "wood",
        new Zt(_ / 5 - 0.024, 0.035, P - 0.02, 1, 0.006).translate(
          -_ / 2 + _ / 10 + (C * _) / 5,
          R,
          0,
        ),
        C % 2 ? j : O,
      ]);
    for (const C of [-1, 1])
      for (let T = 0; T < 2; T++)
        b.push([
          "wood",
          new Zt(0.035, I / 2 - 0.01, P, 1, 0.006).translate(
            C * (_ / 2 - 0.018),
            R + 0.02 + I / 4 + (T * I) / 2,
            0,
          ),
          T ? O : j,
        ]);
    (b.push([
      "wood",
      new Zt(_, I, 0.03, 1, 0.006).translate(0, R + I / 2, P / 2 - 0.015),
      j,
    ]),
      b.push([
        "wood",
        new Zt(_ - 0.04, I - 0.03, 0.028, 1, 0.006)
          .translate(0, (I - 0.03) / 2, 0)
          .applyMatrix4(Dt(g0(-1.85), Ot(0, R, -P / 2 - 0.016))),
        O,
      ]));
    for (const C of [-1, 1])
      for (const T of [-1, 1])
        b.push([
          "wood",
          new Pt(0.028, 0.034, I + 0.2, 7).translate(
            C * (_ / 2 + 0.03),
            R + (I + 0.2) / 2 - 0.04,
            T * (P / 2 - 0.12),
          ),
          O,
        ]);
    b.push([
      "metal",
      new Pt(0.035, 0.035, _ + 0.36, 8).rotateZ(Math.PI / 2).translate(0, L, 0),
      J,
    ]);
    const tt = ya(V, 12, 0.035, 0.019, 0.085, 0.07);
    for (const C of [-1, 1]) {
      const T = new wt()
        .makeRotationY(Math.PI / 2)
        .premultiply(new wt().makeTranslation(C * (_ / 2 + 0.14), L, 0));
      b.push(
        ["wood", tt.rim.clone().applyMatrix4(T), j],
        ["wood", tt.hub.clone().applyMatrix4(T), O],
        ["metal", new s0(V + 0.03, 0.013, 4, 40).applyMatrix4(T), J],
      );
      for (const D of tt.spokes) b.push(["wood", D.clone().applyMatrix4(T), O]);
    }
    for (const C of [-1, 1])
      b.push([
        "wood",
        Vt(
          [
            at(C * 0.34, R - 0.08, -0.4),
            at(C * 0.34, R - 0.09, P / 2),
            at(C * 0.35, R - 0.07, P / 2 + 0.8),
            at(C * 0.33, R, K),
          ],
          () => 0.045,
          8,
          { cap: !0 },
        ),
        j,
      ]);
    b.push([
      "wood",
      new Pt(0.034, 0.034, 0.72, 7)
        .rotateZ(Math.PI / 2)
        .translate(0, R - 0.02, K - 0.12),
      O,
    ]);
    const st = Dt(ve(Math.PI / 2 - 0.46), B0(0.1));
    let G = 1e9;
    {
      const C = at(0, 0, 0);
      for (const [, T] of b) {
        const D = T.attributes.position;
        for (let N = 0; N < D.count; N++)
          (C.fromBufferAttribute(D, N).applyMatrix4(st),
            (G = Math.min(G, C.y)));
      }
    }
    const q = Dt(st, Ot(0.62, -G - 0.02, 0.58 - K), S);
    for (const [C, T, D] of b) {
      const N = w(C, T, q, D);
      A(N, C === "metal" ? 0.02 : 0.03);
    }
    const U = (C) => C * k,
      Z = (C, T, D = 0, N = 0) => {
        const [H, Q] = He(m, C, T);
        return new wt().compose(
          at(H, Math.max(0, o.heightAt(H, Q)) + D, Q),
          es.setFromAxisAngle(os, Math.atan2(m.ux, m.uz) + N),
          ss,
        );
      },
      ot = (C, T, D, N) => [
        new Zt(C, N, T, 1, 0.005).translate(0, N / 2, 0),
        new Zt(C, D, N, 1, 0.005).translate(0, D / 2, -T / 2 + N / 2),
        new Zt(C, D, N, 1, 0.005).translate(0, D / 2, T / 2 - N / 2),
        new Zt(N, D, T, 1, 0.005).translate(-C / 2 + N / 2, D / 2, 0),
        new Zt(N, D, T, 1, 0.005).translate(C / 2 - N / 2, D / 2, 0),
      ],
      $ = (C, T, D) => {
        const [N, H] = He(m, C, U(T));
        x.push([N, 0.15, H, D, !1]);
      };
    {
      const C = Z(-1.75, U(1.45), 0.002, 0.5);
      for (const T of ot(0.62, 0.4, 0.13, 0.012))
        w("leather", T, C, [0.09, 0.05, 0.035]);
      for (const T of ot(0.62, 0.4, 0.05, 0.012))
        w(
          "leather",
          T,
          Dt(g0(-2.2), Ot(0, 0.13, 0.19), C),
          [0.09, 0.05, 0.035],
        );
      (w(
        "cloth",
        new m0(0.58, 0.36).rotateX(-Math.PI / 2).translate(0, 0.015, 0),
        C,
        [0.13, 0.04, 0.03],
      ),
        w(
          "cloth",
          Be(
            0.5,
            0.9,
            10,
            16,
            (T) => 0.75 + 0.25 * Math.sin(T * 3),
            0.028,
            8.3,
          ),
          Dt(B0(1.9), Ot(-0.55, 0, -0.35), C),
          [0.16, 0.155, 0.14],
        ),
        w(
          "cloth",
          Be(0.58, 0.8, 12, 14, (T) => 0.4 + 0.6 * T, 0.03, 2.2),
          Dt(B0(-0.4), Ot(0.45, 0, -0.75), C),
          [0.09, 0.085, 0.12],
        ),
        $(-1.75, 1.45, 0.4),
        $(-2.2, 1.2, 0.3),
        $(-1.4, 0.75, 0.3));
    }
    {
      const C = Z(-0.95, U(0.42), 0, -0.25);
      for (const T of ot(0.42, 0.18, 0.6, 0.012))
        w("leather", T, Dt(g0(0.12), C), [0.06, 0.045, 0.035]);
      (w(
        "metal",
        new s0(0.05, 0.007, 4, 10, Math.PI).translate(0, 0.6, 0),
        Dt(g0(0.12), C),
        J,
      ),
        $(-0.95, 0.42, 0.28));
    }
    {
      const C = Z(-2.55, U(2.15), 0, 1.1),
        T = new t0(0.28, 18, 12).scale(1.15, 0.72, 0.9);
      {
        const D = T.attributes.position;
        for (let N = 0; N < D.count; N++) {
          const H = D.getX(N),
            Q = D.getY(N),
            W = D.getZ(N);
          D.setXYZ(
            N,
            H * (1 + 0.08 * It(Q * 9, W * 9)),
            Math.max(-0.02, Q) + 0.2,
            W * (1 + 0.08 * It(H * 9 + 3, Q * 9)),
          );
        }
        T.computeVertexNormals();
      }
      (w("wool", T, C, [0.085, 0.05, 0.04]),
        w(
          "wool",
          new t0(0.075, 10, 8).scale(1.3, 0.8, 1).translate(0.05, 0.42, 0.02),
          C,
          [0.075, 0.045, 0.035],
        ));
      for (const D of [0.9, -0.7])
        w(
          "wool",
          new no(0.05, 0.16, 6)
            .rotateZ(D)
            .translate(0.1 * Math.sign(D), 0.47, 0),
          C,
          [0.075, 0.045, 0.035],
        );
      $(-2.55, 2.15, 0.36);
    }
    {
      const C = Be(
        0.9,
        1.3,
        12,
        18,
        () => 1,
        0.04,
        5.1,
        (T, D) => (D > 0.62 ? (D - 0.62) * 0.75 : 0),
      );
      (w(
        "cloth",
        C,
        Z(-0.85, U(1.95), 0.01, Math.PI / 2 + 0.25),
        [0.15, 0.135, 0.11],
      ),
        $(-0.75, 1.85, 0.25));
    }
    {
      const C = new ro(
          [
            [0, 0],
            [0.12, 0],
            [0.14, 0.02],
            [0.15, 0.17],
            [0.165, 0.185],
            [0.15, 0.19],
          ].map(([N, H]) => new re(N, H)),
          18,
        ),
        T = Dt(
          g0(Math.PI / 2 - 0.15),
          Ot(0, 0.15, 0),
          Z(-1.35, U(0.05), 0, 1.2),
        );
      w("metal", C, T, [0.05, 0.048, 0.045]);
      for (const N of [-1, 1])
        w(
          "metal",
          new s0(0.035, 0.007, 4, 10, Math.PI)
            .rotateX(Math.PI / 2)
            .translate(N * 0.165, 0.16, 0),
          T,
          J,
        );
      $(-1.35, 0.05, 0.19);
      const D = a0(
        [
          new ro(
            [
              [0, 0],
              [0.1, 0],
              [0.12, 0.05],
              [0.11, 0.13],
              [0.06, 0.18],
              [0.02, 0.2],
              [0, 0.2],
            ].map(([N, H]) => new re(N, H)),
            14,
          ),
          new Pt(0.012, 0.02, 0.16, 6).rotateZ(-0.9).translate(0.14, 0.11, 0),
        ].map((N) => d0(N)),
      );
      (w(
        "metal",
        D,
        Dt(ve(1.45), Ot(0, 0.11, 0), Z(0.95, U(-0.18), 0, 0.4)),
        [0.07, 0.068, 0.062],
      ),
        $(0.95, -0.18, 0.16));
      for (const [N, H, Q] of [
        [-1.95, 0.25, 0.2],
        [-0.55, -0.22, 1.4],
        [-2.35, 0.8, 2.1],
      ])
        (w(
          "metal",
          new Pt(0.11, 0.09, 0.02, 16).translate(0, 0.012, 0),
          Dt(g0((Q - 1) * 0.1), Z(N, U(H), 0, Q)),
          [0.12, 0.115, 0.1],
        ),
          $(N, H, 0.12));
    }
    {
      const C = Dt(
        g0(-Math.PI / 2 + 0.12),
        Ot(0, 0.05, 0),
        Z(-2.25, U(2.75), 0, 0.3),
      );
      w("wood", new Zt(0.42, 0.035, 0.4, 1, 0.008).translate(0, 0.45, 0), C, j);
      for (const T of [-1, 1])
        for (const D of [-1, 1])
          w(
            "wood",
            new Pt(0.018, 0.02, 0.45, 6).translate(T * 0.18, 0.225, D * 0.17),
            C,
            O,
          );
      for (const T of [-1, 1])
        w(
          "wood",
          new Pt(0.018, 0.018, 0.5, 6).translate(T * 0.18, 0.7, -0.17),
          C,
          O,
        );
      for (const T of [0.62, 0.85])
        w(
          "wood",
          new Zt(0.38, 0.06, 0.02, 1, 0.006).translate(0, T, -0.17),
          C,
          j,
        );
      $(-2.25, 2.75, 0.45);
    }
    {
      const C = new t0(1, 16, 12).scale(0.32, 0.16, 0.22);
      {
        const T = C.attributes.position;
        for (let D = 0; D < T.count; D++) {
          const N = T.getX(D),
            H = T.getY(D);
          (T.setY(
            D,
            Math.max(-0.01, H) * (1 - 0.35 * Math.max(0, N / 0.32)) +
              0.025 * It(N * 11, T.getZ(D) * 11),
          ),
            T.setZ(D, T.getZ(D) * (1 - 0.45 * Math.max(0, N / 0.32) ** 2)));
        }
        C.computeVertexNormals();
      }
      (w("wool", C, Z(1.25, U(2.35), 0.02, 0.8), [0.11, 0.085, 0.055]),
        w(
          "wood",
          new Zt(1, 0.03, 0.17, 1, 0.006),
          Dt(ve(0.05), Z(-1.6, U(2.35), 0.02, 1.4)),
          O,
        ),
        $(1.25, 2.35, 0.3));
    }
    d.push({ name: "cart", x: +m.x.toFixed(2), z: +m.z.toFixed(2), s: m.s });
    for (const [C, T, D] of [
      [0, 2.75, 0.66],
      [0, 2.05, 0.68],
      [0, 1.35, 0.6],
      [-0.5, 0.78, 0.3],
      [-0.55, 0.28, 0.27],
      [-0.95, 0.42, 0.3],
      [-1.75, 1.45, 0.38],
      [-2.55, 2.15, 0.34],
      [-2.25, 2.75, 0.4],
    ]) {
      const [N, H] = He(m, C, U(T));
      i.push({ x: N, z: H, r: D, thing: !0, obst: "cart" });
    }
    for (const C of [2.7, 2.05, 1.4]) {
      const [T, D] = He(m, 0, U(C));
      v.push({
        x0: T - 0.45,
        x1: T + 0.45,
        z0: D - 0.45,
        z1: D + 0.45,
        y0: 0,
        y1: 1.3,
        obst: "cart",
      });
    }
  }
  a = "pram";
  {
    const [m, k, S] = ae.pram,
      A = y(m, k, S, -0.6),
      b = [],
      P = 0.82,
      _ = 0.4,
      I = 0.3,
      R = 0.42,
      V = (C) => {
        const T = P / 2,
          D = _ / 2,
          N = 0.12;
        return (
          C.moveTo(-T + N, -D),
          C.lineTo(T - N, -D),
          C.quadraticCurveTo(T, -D, T, -D + N),
          C.lineTo(T, D - N),
          C.quadraticCurveTo(T, D, T - N, D),
          C.lineTo(-T + N, D),
          C.quadraticCurveTo(-T, D, -T, D - N),
          C.lineTo(-T, -D + N),
          C.quadraticCurveTo(-T, -D, -T + N, -D),
          C
        );
      },
      L = V(new he()),
      K = V(new he()),
      j = new Lo();
    {
      const C = P / 2 - 0.018,
        T = _ / 2 - 0.018,
        D = 0.1;
      (j.moveTo(-C + D, -T),
        j.lineTo(C - D, -T),
        j.quadraticCurveTo(C, -T, C, -T + D),
        j.lineTo(C, T - D),
        j.quadraticCurveTo(C, T, C - D, T),
        j.lineTo(-C + D, T),
        j.quadraticCurveTo(-C, T, -C, T - D),
        j.lineTo(-C, -T + D),
        j.quadraticCurveTo(-C, -T, -C + D, -T));
    }
    L.holes.push(j);
    const O = new te(L, {
      depth: I,
      bevelEnabled: !0,
      bevelThickness: 0.008,
      bevelSize: 0.006,
      bevelSegments: 1,
      curveSegments: 4,
    })
      .rotateX(-Math.PI / 2)
      .translate(0, R, 0);
    {
      const C = O.attributes.position;
      for (let T = 0; T < C.count; T++) {
        const D = C.getY(T) - R;
        (C.setY(T, R + D),
          C.setX(T, C.getX(T) * (1 + (0.12 * D) / I)),
          C.setZ(T, C.getZ(T) * (1 + (0.1 * D) / I)));
      }
      O.computeVertexNormals();
    }
    (b.push(["leather", O, [0.025, 0.025, 0.028]]),
      b.push([
        "leather",
        new js(K, 4).rotateX(-Math.PI / 2).translate(0, R + 0.005, 0),
        [0.025, 0.025, 0.028],
      ]));
    const J = new t0(0.24, 16, 8, -Math.PI / 2, Math.PI, 0, Math.PI / 2)
      .scale(1.1, 1.05, 0.88)
      .rotateY(Math.PI)
      .translate(P / 2 - 0.2, R + I, 0);
    b.push(["leather", J, [0.02, 0.02, 0.022]]);
    for (const C of [0, -0.55, -1.1])
      b.push([
        "metal",
        new s0(0.25, 0.006, 4, 16, Math.PI)
          .rotateY(Math.PI / 2)
          .rotateZ(C)
          .translate(P / 2 - 0.2, R + I, 0),
        [0.1, 0.1, 0.1],
      ]);
    for (const C of [-0.28, 0.28]) {
      b.push([
        "metal",
        new Pt(0.009, 0.009, _ + 0.16, 6)
          .rotateX(Math.PI / 2)
          .translate(C, 0.17, 0),
        [0.1, 0.1, 0.1],
      ]);
      for (const T of [-0.15, 0.15])
        b.push([
          "metal",
          Vt(
            [at(C * 1.3, R, T), at(C * 1.05, 0.28, T), at(C, 0.17, T)],
            () => 0.008,
            5,
          ),
          [0.1, 0.1, 0.1],
        ]);
    }
    (b.push([
      "metal",
      Vt(
        [
          at(-P / 2, R + 0.1, -0.16),
          at(-P / 2 - 0.25, R + 0.45, -0.16),
          at(-P / 2 - 0.38, R + 0.62, -0.16),
        ],
        () => 0.011,
        6,
      ),
      [0.1, 0.1, 0.1],
    ]),
      b.push([
        "metal",
        Vt(
          [
            at(-P / 2, R + 0.1, 0.16),
            at(-P / 2 - 0.25, R + 0.45, 0.16),
            at(-P / 2 - 0.38, R + 0.62, 0.16),
          ],
          () => 0.011,
          6,
        ),
        [0.1, 0.1, 0.1],
      ]),
      b.push([
        "leather",
        new Pt(0.018, 0.018, 0.36, 8)
          .rotateX(Math.PI / 2)
          .translate(-P / 2 - 0.38, R + 0.62, 0),
        [0.03, 0.025, 0.02],
      ]));
    const tt = ya(0.17, 12, 0.012, 0.005, 0.025, 0.02);
    for (const C of [-0.28, 0.28])
      for (const T of [-_ / 2 - 0.06, _ / 2 + 0.06]) {
        const D = new wt().makeTranslation(C, 0.17, T);
        b.push(
          ["metal", tt.rim.clone().applyMatrix4(D), [0.05, 0.05, 0.05]],
          ["metal", tt.hub.clone().applyMatrix4(D), [0.1, 0.1, 0.1]],
        );
        for (const N of tt.spokes)
          b.push(["metal", N.clone().applyMatrix4(D), [0.12, 0.12, 0.12]]);
      }
    const st = Dt(g0(-1.5), Ot(0, _ / 2 + 0.08, 0.05), B0(0.15), A.m);
    for (const [C, T, D] of b) w(C, T, st, D);
    const G = Be(
      0.5,
      0.7,
      8,
      10,
      () => 1,
      0.03,
      4.4,
      (C, T) => (T > 0.7 ? (T - 0.7) * 0.9 : 0),
    );
    (w(
      "cloth",
      G,
      Dt(B0(Math.PI / 2 + 0.2), Ot(0.05, 0, -0.55), A.m),
      [0.5, 0.36, 0.33],
    ),
      d.push({ name: "pram", x: +A.x.toFixed(2), z: +A.z.toFixed(2), s: m }),
      o.sdAt(A.x, A.z) < 0.4 && i.push({ x: A.x, z: A.z, r: 0.45, thing: !0 }));
    const [q, U, Z] = ae.doll,
      ot = y(q, U, Z, 1.1),
      $ = Dt(g0(Math.PI / 2 - 0.08), Ot(0, 0.035, 0), ot.m);
    (w(
      "cloth",
      new Pt(0.05, 0.11, 0.2, 14, 1).translate(0, 0.1, 0).scale(1, 1, 0.55),
      $,
      [0.42, 0.3, 0.3],
    ),
      w(
        "leather",
        new t0(0.06, 14, 10).translate(0, 0.27, 0),
        $,
        [0.55, 0.47, 0.4],
      ),
      w(
        "leather",
        new t0(0.064, 14, 10, 0, ne, 0, Math.PI * 0.62)
          .rotateX(-0.5)
          .translate(0, 0.278, -0.006),
        $,
        [0.05, 0.03, 0.018],
      ));
    for (const C of [-1, 1])
      (w(
        "leather",
        new Ys(0.016, 0.11, 3, 8)
          .rotateZ(C * 0.5)
          .translate(C * 0.075, 0.15, 0),
        $,
        [0.55, 0.47, 0.4],
      ),
        w(
          "leather",
          new Ys(0.019, 0.12, 3, 8)
            .rotateZ(C * 0.12)
            .translate(C * 0.04, -0.06, 0),
          $,
          [0.55, 0.47, 0.4],
        ));
    d.push({ name: "doll", x: +ot.x.toFixed(2), z: +ot.z.toFixed(2), s: q });
  }
  const n = (m) => {
      m.vertexShader = m.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
uniform float uFT;
attribute vec2 aSway;`,
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
      if (aSway.x > 0.0) {
        // (cloth stirring in a breath of air that is not there: slow, uneven)
        float t = uFT, w = aSway.x;
        transformed.x += (sin(t * 0.83 + aSway.y) * 0.7 + sin(t * 1.91 + aSway.y * 2.3) * 0.3) * 0.035 * w;
        transformed.z += (sin(t * 0.67 + aSway.y * 1.7) * 0.7 + sin(t * 1.53 + aSway.y) * 0.3) * 0.03 * w;
      }`,
        );
    },
    l = (m) => {
      ((m.vertexShader = m.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute vec2 aHard;
varying vec2 vHard;`,
        )
        .replace(
          "#include <uv_vertex>",
          `#include <uv_vertex>
vHard = aHard;`,
        )),
        (m.fragmentShader = m.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec2 vHard;`,
          )
          .replace(
            "#include <metalnessmap_fragment>",
            `#include <metalnessmap_fragment>
metalnessFactor = vHard.x; if (vHard.y > 0.0) roughnessFactor = vHard.y;`,
          )));
    },
    f = (m, k, S = null, A = {}) => {
      const b = i0(At(m), k, S);
      return (
        (b.vertexColors = !0),
        A.side && (b.side = A.side),
        A.sheen != null &&
          b.sheen != null &&
          ((b.sheen = A.sheen),
          b.sheenColor && b.sheenColor.setRGB(0.09, 0.085, 0.08)),
        A.spec != null &&
          b.specularIntensity != null &&
          (b.specularIntensity = A.spec),
        b
      );
    },
    h = {
      fabric: f("linen_stained", "thing_fabric", n, {
        side: p0,
        sheen: 0.3,
        spec: 0.12,
      }),
      hard: f("leather_brown", "thing_hard", l),
      wood: f("house_plank", "thing_wood"),
    },
    c = { coat: ["fabric"], cart: ["wood"] },
    M = new Kt();
  M.name = "forest_things";
  for (const [m, k] of Object.entries(r))
    for (const S of ["fabric", "hard", "wood"]) {
      if (!k[S].length) continue;
      const A = a0(k[S]);
      (A.computeBoundingSphere(), A.computeBoundingBox());
      const b = new bt(A, h[S]);
      ((b.name = "things_" + m + "_" + S),
        (b.castShadow = !!c[m]?.includes(S)),
        (b.receiveShadow = !0),
        M.add(b));
    }
  return (
    d.sort((m, k) => m.s - k.s),
    {
      group: M,
      bark: e.bark,
      mounds: e.mounds,
      circles: i,
      things: d,
      cart: { solids: x, colliders: v },
    }
  );
}
const $0 = { x0: -52, z0: 62, sx: 26, sz: 26.4, nx: 4, nz: 6 },
  as = (s, o) =>
    Math.max(0, Math.min($0.nx - 1, Math.floor((s - $0.x0) / $0.sx))) +
    Math.max(0, Math.min($0.nz - 1, Math.floor((o - $0.z0) / $0.sz))) * $0.nx;
function ni(s, { rng: o, sky: t }) {
  const u = performance.now(),
    e = s.game,
    r = new Kt();
  ((r.name = "forest"), (r.visible = !1));
  const a = new Kt();
  ((a.name = "forest_meshes"), r.add(a));
  const p = [],
    i = [],
    d = [],
    y = nc();
  (t?.uniforms?.uMoonF && t.uniforms.uMoonF.value.copy(To),
    e.post && !e.post.clock && (e.post.clock = () => e.time));
  const w = [];
  for (let X = 0; X < $0.nz; X++)
    for (let rt = 0; rt < $0.nx; rt++) {
      const ct = new Kt();
      ((ct.name = "forest_chunk"),
        a.add(ct),
        w.push({
          g: ct,
          x: $0.x0 + (rt + 0.5) * $0.sx,
          z: $0.z0 + (X + 0.5) * $0.sz,
          parts: { bark: [], cards: [], cores: [] },
        }));
    }
  const g = (X, rt) => w[as(X, rt)],
    z = ic(y, s.rng(4061)),
    x = rc(),
    v = qc(),
    n = Gc(x, "crowns"),
    { trees: l, far: f } = Ec(y, o),
    h = Fc(s, y, s.rng(4052));
  (a.add(h.group), p.push(...h.colliders), i.push(...h.circles));
  {
    const X = g(h.yew.x, h.yew.z);
    (X.parts.bark.push(...h.yewParts),
      (X.parts.extra = [h.yewLeaves.geometry(), h.grass.geometry()]),
      l.push({
        kind: "oak",
        x: h.yew.x,
        z: h.yew.z,
        r: 0.6,
        H: 9.5,
        cb: 1.8,
        Rc: 4.2,
        space: 0,
        yard: !0,
      }));
  }
  const c = Ea(y),
    M = (X, rt) => {
      for (const ct of c)
        if (
          (X - ct.x) ** 2 + (rt - ct.z) ** 2 <
          (ct.kind === "stone" ? 1.1 : 0.7) ** 2
        )
          return !0;
      if (Math.abs(X - Tt.x) < 2.2 && rt > Tt.z0 - 1.5 && rt < Tt.z1 + 1.5)
        return !0;
      for (const ct of je)
        if ((X - ct.x) ** 2 + (rt - ct.z) ** 2 < (ct.r * 1.75) ** 2) return !0;
      for (const ct of m)
        if ((X - ct[0]) ** 2 + (rt - ct[1]) ** 2 < ct[2] * ct[2]) return !0;
      return y.trodAt(X, rt) > 0.15;
    },
    m = [],
    k = ai(s, y, s.rng(4041), { lamps: c, trees: l });
  (a.add(k.group), i.push(...k.circles), p.push(...k.cart.colliders));
  for (const X of k.bark)
    g(
      X.attributes.position.getX(0),
      X.attributes.position.getZ(0),
    ).parts.bark.push(X);
  for (const X of k.things)
    m.push([
      X.x,
      X.z,
      X.name === "graves"
        ? 2.6
        : X.name === "graves2"
          ? 2.1
          : X.name === "cart"
            ? 3.6
            : X.name === "pram"
              ? 1.7
              : X.name === "strips" || X.name === "shoe" || X.name === "doll"
                ? 0
                : 1,
    ]);
  {
    const X = Nt.cart,
      rt = {
        o: X,
        kind: "cart",
        ...Ua(
          X,
          k.cart.solids,
          X.gap * 1.25,
          k.circles.filter((gt) => gt.obst === "cart"),
        ),
      };
    let ct = 0,
      ut = 0,
      mt = 0;
    for (const [gt, kt, zt] of k.cart.solids)
      kt < 1.6 && ((ct += gt), (ut += zt), mt++);
    ((rt.at = [ct / Math.max(1, mt), ut / Math.max(1, mt)]),
      y.setDodges([z.dodge, rt], [z.jump]),
      Object.defineProperty(y, "solids", {
        value: { tree: z.solids.tree, cart: k.cart.solids, log: z.solids.log },
        enumerable: !1,
      }));
  }
  for (const X of z.bark)
    g(
      X.attributes.position.getX(0),
      X.attributes.position.getZ(0),
    ).parts.bark.push(X);
  (g(Nt.tree.x, Nt.tree.z).parts.cards.push(...z.cards),
    p.push(...z.colliders),
    i.push(...z.circles));
  for (const [X, rt, ct] of [
    [Nt.tree.plate.u, Nt.tree.plate.v, 2.6],
    [1, -2.2, 2.2],
    [-1.4, -0.2, 2.6],
  ]) {
    const [ut, mt] = He(Nt.tree, X, rt);
    m.push([ut, mt, ct]);
  }
  {
    const X = Nt.log,
      rt = (X.ang * Math.PI) / 180;
    for (let ct = -4.2; ct <= 4.21; ct += 0.7) {
      const [ut, mt] = He(X, Math.cos(rt) * ct, Math.sin(rt) * ct);
      m.push([ut, mt, 0.75]);
    }
  }
  const S = hc(s, y);
  for (const X of S.chunks) g(X.cx, X.cz).g.add(X.mesh);
  for (const X of S.group.children.filter((rt) => !rt.name.endsWith("_chunk")))
    a.add(X);
  const A = (X) => {
    const rt = X.attributes.position.getX(0),
      ct = X.attributes.position.getZ(0),
      ut = S.chunks.find(
        (mt) => Math.abs(rt - mt.cx) <= 13 && Math.abs(ct - mt.cz) <= 13.2,
      );
    ut &&
      ((ut.mesh.geometry = a0([ut.mesh.geometry, X])),
      ut.mesh.geometry.computeBoundingSphere(),
      ut.mesh.geometry.computeBoundingBox());
  };
  for (const X of k.mounds) A(X);
  for (const X of z.earth) A(X);
  const b = new Xt(),
    P = (X, rt) => {
      const ct = (X.pos.x * 12.9898 + X.pos.z * 78.233) % 1,
        ut = X.shade * (0.85 + 0.3 * Math.abs(ct));
      return (
        X.cell === 2
          ? rt.setRGB(0.55 * ut, 0.62 * ut, 0.5 * ut)
          : X.cell === 8
            ? rt.setRGB(0.6 * ut, 0.66 * ut, 0.6 * ut)
            : X.cell === 7
              ? rt.setRGB(0.7 * ut, 0.8 * ut, 0.7 * ut)
              : rt.setRGB(0.85 * ut, 0.95 * ut, 0.9 * ut),
        b
      );
    },
    _ = s.rng(4071);
  for (const X of l) {
    if (X.yard || X.kind === "giant") continue;
    let rt = 1e9;
    for (let zt = 0; zt < 6; zt++)
      rt = Math.min(
        rt,
        y.heightAt(
          X.x + Math.cos(zt) * X.r * 1.3,
          X.z + Math.sin(zt) * X.r * 1.3,
        ),
      );
    const ct = y.dPathAt(X.x, X.z) < 22 || y.clearingSd(X.x, X.z) < 10,
      ut = X.own ? _ : o,
      mt =
        X.kind === "cedar"
          ? Hc(X, rt, ut, ct)
          : Oc(X, rt, ut, { young: X.kind === "young" }),
      gt = g(X.x, X.z),
      kt = mt.cards.filter(
        (zt) => zt.pos.y > 3.2 || y.sdAt(zt.pos.x, zt.pos.z) > 1.2,
      );
    (gt.parts.bark.push(...mt.parts),
      X.own
        ? ((gt.parts.ownCards ||= []).push(...kt),
          mt.core && (gt.parts.ownCores ||= []).push(mt.core))
        : (gt.parts.cards.push(...kt), mt.core && gt.parts.cores.push(mt.core)),
      X.kind !== "young" &&
        y.dPathAt(X.x, X.z) < 8 &&
        Kc(y, ut, X, rt, gt.parts.bark),
      y.sdAt(X.x, X.z) < 6 &&
        i.push({
          x: X.x,
          z: X.z,
          r: X.r * (X.kind === "cedar" ? 1.25 : 1.1) + 0.05,
          tree: !0,
        }));
  }
  const I = ti(y, s.rng(4031));
  for (const X of I.list) {
    const rt = g(X.G.x, X.G.z);
    (rt.parts.bark.push(...X.bark), rt.parts.cards.push(...X.cards));
  }
  (p.push(...I.colliders), i.push(...I.circles));
  const R = [...I.lurks, z.lurk].sort((X, rt) => X.s - rt.s),
    V = new Map(),
    L = Uc(y, o, as, V, M);
  for (const [X, rt] of V) w[X].parts.bark.push(...rt);
  i.push(...L.circles);
  const K = Vc(
    y,
    o,
    as,
    (X, rt) =>
      M(X, rt) ||
      y.sideSpawns.some((ct) => (X - ct.x) ** 2 + (rt - ct.z) ** 2 < 6.8),
  );
  i.push(...K.circles);
  const j = Dc();
  for (const [X, rt] of K.byChunk) {
    const ct = new bt(a0(rt), j);
    ((ct.name = "forest_rocks"),
      (ct.castShadow = !0),
      (ct.receiveShadow = !0),
      w[X].g.add(ct));
  }
  const O = Sc(y, o, [
    [-4.6, 193.2, 0.34],
    [-2.9, 204.6, 0.42],
    [14.6, 191.4, 0.3],
    [16.2, 201.8, 0.38],
    [12.4, 211.2, 0.36],
    [-5.6, 188.2, 0.28],
  ]);
  for (const X of O.bark)
    g(
      X.attributes.position.getX(0),
      X.attributes.position.getZ(0),
    ).parts.bark.push(X);
  i.push(...O.circles);
  {
    const X = new bt(a0(O.tops), i0(Ac(), "stumptop"));
    ((X.name = "forest_stump_tops"), (X.receiveShadow = !0), a.add(X));
  }
  const J = kc(y, o, as, M);
  i.push(...J.circles);
  const tt = i0(new n0({ color: 16777215, roughness: 0.7 }), "mushroom");
  a.add(Pc([...J.mush, ...L.mush, ...z.mush], o, tt));
  for (const X of w) {
    if (
      (X.parts.ownCards &&
        (X.parts.extra ||= []).push(Ma(X.parts.ownCards, _, P)),
      X.parts.ownCores &&
        (X.parts.extra ||= []).push(
          wa(X.parts.ownCores, () => 0.45 + _() * 0.15),
        ),
      X.parts.bark.length)
    ) {
      const rt = new bt(a0(X.parts.bark), v);
      ((rt.name = "forest_trunks"),
        (rt.castShadow = !0),
        (rt.receiveShadow = !0),
        X.g.add(rt));
    }
    if (X.parts.cards.length || J.out.get(w.indexOf(X)) || X.parts.extra) {
      const rt = Ma(X.parts.cards, o, P),
        ct = X.parts.cores.length
          ? wa(X.parts.cores, () => 0.45 + o() * 0.15)
          : null,
        ut = J.out.get(w.indexOf(X))?.geometry(),
        mt = new bt(a0([rt, ct, ut, ...(X.parts.extra || [])]), n);
      ((mt.name = "forest_foliage"),
        (mt.castShadow = !0),
        (mt.receiveShadow = !0),
        X.g.add(mt));
    }
    X.parts = null;
  }
  const st = Yc(l, f, To);
  ((K0.tCanopy.value = st.tex),
    K0.uCanopy.value.set(st.box.x0, st.box.z0, st.box.w, st.box.d));
  const G = cc(),
    q = jc(f, G.tex, G.n);
  a.add(q);
  const U = Wc(s, y, o);
  (a.add(U.group), p.push(...U.colliders));
  const Z = gc(s, y, o);
  a.add(Z.group);
  for (const X of Z.lights) r.add(X);
  for (const X of Z.spots) {
    if (X.kind === "post") {
      const rt = X.x,
        ct = X.z;
      i.push({ x: rt, z: ct, r: 0.1, lamp: !0 });
    }
    if (X.kind === "stone") {
      const rt = X.pos;
      i.push({ x: rt.x, z: rt.z, r: 0.3, lamp: !0 });
    }
  }
  const ot = Nc(y, o, To, st);
  a.add(ot.mesh);
  const $ = Lc(Z.spots, Z.uGlow);
  a.add($.pts);
  const C = de[1],
    T = y.at(C.s - 2),
    D = [+(T.x + T.tz * 7.2).toFixed(2), +(T.z - T.tx * 7.2).toFixed(2)],
    N = Rc(s, y, o, { warn: [...D, 7.5] });
  a.add(N.points);
  const H = new Map(),
    Q = 2;
  for (const X of i) {
    const rt = `${Math.floor(X.x / Q)},${Math.floor(X.z / Q)}`;
    (H.has(rt) || H.set(rt, []), H.get(rt).push(X));
  }
  const W = (X, rt) => {
    const ct = Math.floor(X / Q),
      ut = Math.floor(rt / Q);
    for (let mt = ct - 1; mt <= ct + 1; mt++)
      for (let gt = ut - 1; gt <= ut + 1; gt++)
        for (const kt of H.get(`${mt},${gt}`) || [])
          if ((X - kt.x) ** 2 + (rt - kt.z) ** 2 < (kt.r + 0.2) ** 2) return !0;
    return !1;
  };
  ((Js.yard = (X, rt) => y.inYard(X, rt) && !W(X, rt)),
    (Js.forest = (X, rt) => rt >= St.z && y.sdAt(X, rt) < 0.3 && !W(X, rt)));
  const B = [];
  {
    const X = y.G,
      rt = [];
    for (let kt = 0; kt < X.nz; kt++)
      for (let zt = 0; zt < X.nx; zt++) {
        const Et = y.grids.sdG[kt * X.nx + zt];
        if (Et < 0.32 || Et > 0.8) continue;
        const o0 = X.x0 + zt * X.cell,
          E0 = X.z0 + kt * X.cell;
        E0 < St.z + 0.45 ||
          y.houseSd(o0, E0) < 1.2 ||
          (Math.abs(o0 - Tt.x) < 1.7 && E0 > Tt.z0 - 0.6 && E0 < Tt.z1 + 0.6) ||
          rt.push([o0, E0, o()]);
      }
    rt.sort((kt, zt) => kt[2] - zt[2]);
    const ct = new Map(),
      ut = (kt, zt) => `${Math.floor(kt / 1.5)},${Math.floor(zt / 1.5)}`,
      mt = (kt, zt, Et) => {
        const o0 = Math.floor(kt / 1.5),
          E0 = Math.floor(zt / 1.5);
        for (let oe = o0 - 1; oe <= o0 + 1; oe++)
          for (let Pe = E0 - 1; Pe <= E0 + 1; Pe++)
            for (const qo of ct.get(`${oe},${Pe}`) || [])
              if ((qo[0] - kt) ** 2 + (qo[1] - zt) ** 2 < Et * Et) return !0;
        return !1;
      },
      gt = (kt, zt) => {
        const Et = Math.floor(kt / Q),
          o0 = Math.floor(zt / Q);
        for (let E0 = Et - 1; E0 <= Et + 1; E0++)
          for (let oe = o0 - 1; oe <= o0 + 1; oe++)
            for (const Pe of H.get(`${E0},${oe}`) || [])
              if ((kt - Pe.x) ** 2 + (zt - Pe.z) ** 2 < (Pe.r + 0.05) ** 2)
                return !0;
        return !1;
      };
    for (const [kt, zt] of rt) {
      if (mt(kt, zt, 0.6) || gt(kt, zt)) continue;
      const Et = ut(kt, zt);
      (ct.has(Et) || ct.set(Et, []),
        ct.get(Et).push([kt, zt]),
        B.push({ x: kt, z: zt, r: 0.55, edge: !0 }));
    }
    i.push(...B);
  }
  const F = new dt(0.1, 0.35, -1).normalize(),
    E = {
      post: {
        exposure: 2.3,
        bloom: 0.3,
        bloomThreshold: 1,
        vignette: 0.62,
        sat: 1,
        contrast: 1.16,
      },
      key: [9086176, 0.06],
      keyDir: To.clone(),
      fill: [11553322, 0.003],
      fillDir: F,
      hemi: [2372686, 920328, 0.006],
      env: 0.012,
      envName: "forest",
      fog: [263946, 0.052],
      sky: { forest: 1 },
    },
    Y = {
      post: {
        exposure: 1.7,
        bloom: 0.3,
        bloomThreshold: 1.05,
        vignette: 0.56,
        sat: 1.02,
        contrast: 1.13,
      },
      key: [9611488, 0.48],
      keyDir: To.clone(),
      fill: [16737332, 0.3],
      fillDir: F,
      hemi: [3029590, 1379593, 0.075],
      env: 0.1,
      envName: "forest",
      fog: [789005, 0.034],
      sky: { forest: 1 },
    },
    et = {
      forest: { mist: new Xt(0.001, 0.0015, 0.0023), scatter: 0.042 },
      yard: { mist: new Xt(0.0062, 0.0082, 0.011), scatter: 0.06 },
    };
  let nt = 0,
    it = !0;
  const lt = new dt(),
    ht = 0.32,
    yt = 0.85,
    Ft = 35,
    Ut = [
      ...k.group.children,
      ...Z.group.children.filter((X) => X.name === "lantern_hook_swing"),
    ];
  for (const X of Ut) {
    X.geometry.computeBoundingSphere();
    const rt = X.geometry.boundingSphere.center.clone().add(X.position);
    ((X.userData.cx = rt.x), (X.userData.cz = rt.z));
  }
  const Lt = e.camera,
    h0 = s.scene.getObjectByName("sun");
  let D0 = 0,
    ee = 0;
  const Ye = new dt(1e9, 0, 0);
  d.push((X, rt) => {
    if (!r.visible) return;
    K0.uFT.value = rt;
    const ct = Lt.position,
      ut = e.roomAt ? e.roomAt(ct.x, ct.z) : null;
    if (e.weapons?.torch && e.post) {
      const mt =
        (ut === "forest" || ut === "yard"
          ? (t?.uniforms?.uForest?.value ?? 0) *
            yt *
            Math.min(1.2, (s.scene.fog?.density ?? 0) / 0.05)
          : 0) * (e.beamLight ? (e.beamFogK ?? 0.12) : 1);
      ((e.post.beamLight = e.beamLight || e.weapons.torch),
        (e.post.beamFog += (mt - e.post.beamFog) * Math.min(1, X * 2.5)),
        e.post.beamFog < 0.005 && (e.post.beamFog = 0));
    }
    {
      const mt = ut === "yard" || (ut !== "forest" && ct.z < St.z) ? 0 : 1;
      ((nt += (mt - nt) * Math.min(1, X * 1.6)),
        (it || lt.distanceToSquared(ct) > 25) && ((nt = mt), (it = !1)),
        lt.copy(ct),
        K0.uMistCol.value.copy(et.yard.mist).lerp(et.forest.mist, nt),
        (K0.uScatter.value =
          et.yard.scatter + (et.forest.scatter - et.yard.scatter) * nt));
    }
    if (
      (h0 &&
        (K0.uCanBox.value.set(
          h0.target.position.x,
          h0.target.position.z,
          24,
          1,
        ),
        K0.uRim.value.copy(h0.color).multiplyScalar(h0.intensity * ht),
        K0.uMoonDir.value
          .subVectors(h0.position, h0.target.position)
          .normalize()),
      Z.update(X, rt, Lt),
      N.update(Lt),
      ($.mat.uniforms.uScale.value =
        e.post.size.y / (2 * Math.tan((Lt.fov * Math.PI) / 360))),
      (ee -= X),
      ee <= 0)
    ) {
      ee = 0.4;
      const mt = e.player.pos;
      for (const gt of i)
        gt.on = (gt.x - mt.x) ** 2 + (gt.z - mt.z) ** 2 < 1764;
    }
    if (((D0 -= X), D0 <= 0 || Ye.distanceToSquared(Lt.position) > 16)) {
      ((D0 = 0.25), Ye.copy(Lt.position));
      const mt = Lt.position.x,
        gt = Lt.position.z;
      a.visible = gt > 44 || e.player.pos.z > 44;
      for (const kt of w) kt.g.visible = Math.hypot(kt.x - mt, kt.z - gt) < 88;
      for (const kt of Ut)
        kt.visible = Math.hypot(kt.userData.cx - mt, kt.userData.cz - gt) < Ft;
    }
  });
  const Se = (X) => {
    const rt = X === "ruins";
    ((r.visible = rt), !rt && e.post && (e.post.beamFog = 0));
    for (const ct of p) ct.on = rt;
    for (const ct of i) ct.on = rt;
    ((ee = 0), Z.api.reset(), N.api.reset(), (it = !0));
  };
  Se("dream");
  const Ae = Math.round(performance.now() - u);
  let Xe = y.S.end - 9;
  for (let X = y.S.bridgeS + 2; X < y.S.end; X += 0.25) {
    const rt = y.at(X);
    if (y.clearingSd(rt.x, rt.z) < -2.5) {
      Xe = X;
      break;
    }
  }
  const $e = y.at(Xe),
    y0 = de[0],
    Eo = {
      gate: [U0.x, U0.z],
      bridgeN: [Tt.x, Tt.z0 + 0.3],
      bridgeS: [Tt.x, Tt.z1 - 0.3],
      clearing: [+$e.x.toFixed(2), +$e.z.toFixed(2)],
      lookBack: [y0.x, y0.z, +Math.atan2(y0.x + 9.15, y0.z - 42.25).toFixed(2)],
      yardIn: [4.25, 63.4],
      angel: [h.angel.x, h.angel.z],
      stream: U.center,
      e1Scare: [...D, 9],
    },
    ho = (X) => y.routeIndexAtS(X),
    Ze = de[2],
    Fe = y.route.findIndex(
      (X) => X[0] === Tt.x && X[1] === +(Tt.z0 - 0.8).toFixed(2),
    ),
    bs = Z.api.list.reduce(
      (X, rt, ct) =>
        rt.lit &&
        rt.kind === "post" &&
        rt.s < Ze.s &&
        (X < 0 || rt.s > Z.api.list[X].s)
          ? ct
          : X,
      -1,
    ),
    ft = [
      {
        at: ho(C.s - 14),
        from: ["e1L"],
        scare: [...D, 9, 9],
        note:
          "the hairpin in the east (the first glade, ~" +
          Math.round(C.s - y.S.gate) +
          " m past the gate): the fireflies in the trees to the LEFT (outside the hairpin) go dark (fireflies.scare(...scare)); ~2.5 s later the dead come out of the ferns on the left (e1L) and, as she turns, one from behind the giants ahead",
      },
      {
        at: ho(Ze.s - 8),
        from: ["e2Ahead", "e2Behind"],
        note:
          "the hairpin in the west: one steps out onto the path AHEAD (e2Ahead[0]) and, as Sara turns, one comes up BEHIND (e2Behind[0]); a good moment to snuff the last lantern before that glade (one of the few still burning: the dark closes in): lanterns.snuff(" +
          bs +
          ")",
      },
      {
        at: Fe,
        from: ["e3W", "e3E"],
        note: "the bridge: as she steps onto the deck they come along the ravine from BOTH sides (e3W: the north rim behind them and the south rim ahead-west; e3E: the north rim east and the south rim east); they must cross",
      },
      {
        at: Fe + 1,
        from: ["e3Big"],
        note: "mid-bridge: the big one (a brute) comes round from the east beyond the south end (e3Big), into the path they have to take",
      },
    ];
  return {
    group: r,
    colliders: p,
    circles: i,
    anim: d,
    plan: y,
    buildMs: Ae,
    look: E,
    yardLook: Y,
    route: y.route,
    points: Eo,
    spawns: y.spawns,
    sideSpawns: y.sideSpawns,
    lurks: R,
    things: k.things,
    get ride() {
      return y.ride;
    },
    encounters: ft,
    fireflies: N.api,
    lanterns: Z.api,
    surfaceAt: y.surfaceAt,
    setWorld: Se,
    warmUp() {
      a.visible = !0;
      for (const X of w) X.g.visible = !0;
      for (const X of Ut) X.visible = !0;
    },
  };
}
async function pi(s) {
  const { scene: o, renderer: t, game: u } = s,
    e = s.rng(20260929),
    r = new Kt();
  ((r.name = "section2"), o.add(r), (o.background = new Xt(0)));
  const a = [],
    p = [],
    i = [],
    d = hn();
  (r.add(d.mesh), a.push((F) => d.update(F)));
  const y = new Xs(16766624, 3.2);
  ((y.name = "sun"), (y.castShadow = !0), y.shadow.mapSize.set(4096, 4096));
  {
    const F = y.shadow.camera;
    ((F.left = -30),
      (F.right = 30),
      (F.top = 34),
      (F.bottom = -34),
      (F.near = 1),
      (F.far = 220));
  }
  ((y.shadow.bias = -35e-5), (y.shadow.normalBias = 0.035));
  const w = new Xs(9414358, 0.35);
  w.name = "skyfill";
  const g = new rn(10466520, 4872746, 0.55);
  ((g.name = "hemi2"), r.add(y, y.target, w, w.target, g));
  const z = (F, E = [0, 0, 12]) => {
      (y.target.position.set(...E),
        y.position.set(E[0] + F.x * 90, E[1] + F.y * 90, E[2] + F.z * 90));
    },
    x = {};
  {
    const F = new ln(t),
      E = new cn(),
      Y = d.mesh.clone();
    ((Y.material = d.mesh.material.clone()), E.add(Y));
    for (const [et, nt, it] of [
      ["dream", 0, 0],
      ["ruins", 1, 0],
      ["forest", 1, 1],
    ])
      ((Y.material.uniforms.uMode.value = nt),
        Y.material.uniforms.uForest && (Y.material.uniforms.uForest.value = it),
        (x[et] = F.fromScene(E, 0.02).texture));
    F.dispose();
  }
  const v = mn();
  r.add(v.group);
  const n = kn(s, e);
  (r.add(n.group), p.push(...n.colliders));
  const l = [],
    f = Fn(s);
  (r.add(f.mesh), a.push((F) => f.update(F)), Ca(v.basin.material, f.causU));
  const h = Vn(s, f, e);
  (r.add(h.school, h.dead),
    a.push((F, E) => {
      const Y = u.player.pos,
        et = u.npc?.pos;
      (h.watch(
        J0(Y.x, Y.z) < 2.4
          ? [Y.x, Y.z]
          : et && J0(et.x, et.z) < 1.2
            ? [et.x, et.z]
            : null,
      ),
        h.update(F, E));
    }),
    l.push((F) => {
      (f.setWorld(F), h.setWorld(F));
    }));
  const c = qn(s, f, e);
  (r.add(c.group), i.push(...c.circles), a.push((F, E) => c.update(F, E)));
  const M = Hn(s, e);
  (r.add(M.group),
    i.push(...M.circles),
    l.push((F) => {
      (c.setWorld(F), M.setWorld(F));
    }));
  const m = cr(s, {
    circles: [...c.circles, ...M.circles, ...M.holes],
    trees: c.trees,
    U: c.U,
  });
  r.add(m.group);
  const k = [
    { x: 0, z: 0, r: 0.55, k: 0.8 },
    { x: 0, z: 0, r: 0.5, k: 0.8 },
  ];
  (a.push((F, E) => {
    const Y = u.player.pos,
      et = u.npc?.pos;
    ((k[0].x = Y.x),
      (k[0].z = Y.z),
      et && ((k[1].x = et.x), (k[1].z = et.z)),
      m.update(F, E, u.camera, et ? k : [k[0]]));
  }),
    l.push((F) => m.setWorld(F)));
  const S = Qn(s, e);
  (r.add(S.group),
    p.push(...S.colliders),
    a.push((F, E) => S.update(F, E)),
    l.push((F) => S.setWorld(F)));
  const A = {
    churchIn: Gr(s, { church: S.church, rng: s.rng(4011) }),
    forest: ni(s, { rng: s.rng(4012), sky: d }),
    house: un(s, { rng: s.rng(4013) }),
  };
  (S.church.group.add(A.churchIn.group), r.add(A.forest.group, A.house.group));
  for (const F of Object.values(A)) {
    (p.push(...(F.colliders || [])), i.push(...(F.circles || [])));
    for (const E of F.anim || []) a.push(E);
    F.setWorld && l.push((E) => F.setWorld(E));
  }
  for (let F = 0; F < 1; F += 1 / 220)
    for (const E of [
      [-5, -0.8],
      [0.7, 1],
      [-2.3, 0.1],
    ]) {
      const Y = F * Math.PI * 2,
        et = Math.cos(Y),
        nt = Math.sin(Y);
      let it = 0;
      for (; it < 8 && J0(E[0] + et * it, E[1] + nt * it) < 0;) it += 0.05;
      if (it < 0.1 || it >= 8) continue;
      const lt = E[0] + et * (it - 0.35),
        ht = E[1] + nt * (it - 0.35);
      J0(lt, ht) < -0.2 && i.push({ x: lt, z: ht, r: 0.34, pond: !0 });
    }
  const b = { world: "dream" },
    P = {
      dream: {
        post: {
          exposure: 0.95,
          bloom: 0.24,
          bloomThreshold: 1.35,
          vignette: 0.32,
          sat: 1.12,
          contrast: 1.08,
        },
        key: [16764820, 4.2],
        keyDir: new dt(-0.83, 0.27, 0.49).normalize(),
        fill: [9414358, 0.35],
        fillDir: new dt(0.6, 0.5, -0.6).normalize(),
        hemi: [10466520, 4872746, 0.42],
        env: 0.5,
        fog: [14725242, 0.009],
      },
      ruins: {
        post: {
          exposure: 0.95,
          bloom: 0.2,
          bloomThreshold: 1.5,
          vignette: 0.45,
          sat: 0.95,
          contrast: 1.06,
        },
        key: [16734756, 0.9],
        keyDir: new dt(0.35, 0.18, 0.92).normalize(),
        fill: [8361408, 0.2],
        fillDir: new dt(0.45, 0.42, -0.79).normalize(),
        hemi: [5913146, 1708044, 0.45],
        env: 0.22,
        fog: [1313287, 0.026],
      },
    },
    _ = ["exposure", "bloom", "bloomThreshold", "vignette", "sat", "contrast"],
    I = (F) => ({
      post: Object.fromEntries(_.map((E) => [E, F.post[E] ?? u.post[E]])),
      key: new Xt(F.key[0]),
      keyI: F.key[1],
      keyDir: F.keyDir.clone().normalize(),
      fill: new Xt(F.fill[0]),
      fillI: F.fill[1],
      fillDir: F.fillDir.clone().normalize(),
      hemiSky: new Xt(F.hemi[0]),
      hemiGround: new Xt(F.hemi[1]),
      hemiI: F.hemi[2],
      env: F.env,
      envName: F.envName || "ruins",
      fog: new Xt(F.fog[0]),
      fogD: F.fog[1],
      skyForest: F.sky?.forest ?? 0,
    }),
    R = (F) =>
      F
        ? I({ ...P.ruins, ...F, post: { ...P.ruins.post, ...(F.post || {}) } })
        : null,
    V = { ruins: I(P.ruins) },
    L = (F) => V[F] || V.ruins,
    K = I(P.ruins),
    j = new Set(["church", "yard", "forest", "house"]),
    O = new dt(0, 0, 12),
    J = (F, E = !0) => {
      if (
        (y.color.copy(F.key),
        (y.intensity = F.keyI),
        z(F.keyDir, O.toArray()),
        w.color.copy(F.fill),
        (w.intensity = F.fillI),
        w.position.copy(F.fillDir).multiplyScalar(80),
        w.target.position.set(0, 0, 0),
        g.color.copy(F.hemiSky),
        g.groundColor.copy(F.hemiGround),
        (g.intensity = F.hemiI),
        (o.environment = x[F.envName] || x.ruins),
        (o.environmentIntensity = F.env),
        o.fog && (o.fog.color.copy(F.fog), (o.fog.density = F.fogD)),
        d.uniforms.uForest && (d.uniforms.uForest.value = F.skyForest),
        E)
      ) {
        const Y = u.lookMul || {};
        for (const et of _) u.post[et] = F.post[et] * (Y[et] ?? 1);
      }
    },
    tt = (F, E) => {
      for (const Y of _) K.post[Y] += (F.post[Y] - K.post[Y]) * E;
      (K.key.lerp(F.key, E),
        (K.keyI += (F.keyI - K.keyI) * E),
        K.keyDir.lerp(F.keyDir, E).normalize(),
        K.fill.lerp(F.fill, E),
        (K.fillI += (F.fillI - K.fillI) * E),
        K.fillDir.lerp(F.fillDir, E).normalize(),
        K.hemiSky.lerp(F.hemiSky, E),
        K.hemiGround.lerp(F.hemiGround, E),
        (K.hemiI += (F.hemiI - K.hemiI) * E),
        (K.env += (F.env - K.env) * E),
        K.fog.lerp(F.fog, E),
        (K.fogD += (F.fogD - K.fogD) * E),
        (K.skyForest += (F.skyForest - K.skyForest) * E),
        (K.envName =
          K.skyForest > 0.5
            ? "forest"
            : F.envName === "forest"
              ? K.envName
              : F.envName));
    },
    st = (F) => {
      (tt(F, 1), (K.envName = F.envName));
    },
    G = () => {
      const F = u.player.pos,
        E = Ve(F.x, F.z),
        Y =
          b.world === "ruins" && j.has(E)
            ? [Math.round(F.x / 6) * 6, 0, Math.round(F.z / 6) * 6]
            : [0, 0, 12];
      return O.x !== Y[0] || O.z !== Y[2]
        ? (O.set(...Y), (y.shadow.needsUpdate = !0), !0)
        : !1;
    };
  function q() {
    if (b.world !== "ruins") return;
    const F = u.player.pos;
    (G(), st(L(Ve(F.x, F.z))), J(K));
  }
  a.push((F) => {
    if (b.world !== "ruins") return;
    const E = u.camera.position,
      Y = L(Ve(E.x, E.z));
    (G(), tt(Y, 1 - Math.exp(-F * 2.2)), J(K, !u.postOwned));
  });
  const U = () => {
    ((V.church = R(A.churchIn.look)),
      (V.yard = R(A.forest.yardLook || A.forest.look)),
      (V.forest = R(A.forest.look)),
      (V.house = R(A.house.look)));
    for (const F of Object.keys(V)) V[F] || delete V[F];
    V.ruins = I(P.ruins);
  };
  U();
  function Z(F) {
    const E = P[F];
    ((b.world = F),
      F === "ruins"
        ? (G(),
          st(L(Ve(u.player.pos.x, u.player.pos.z))),
          (!o.fog || !o.fog.isFogExp2) && (o.fog = new $s(E.fog[0], E.fog[1])),
          J(K))
        : (O.set(0, 0, 12),
          y.color.set(E.key[0]),
          (y.intensity = E.key[1]),
          z(E.keyDir),
          Object.assign(u.post, E.post),
          w.color.set(E.fill[0]),
          (w.intensity = E.fill[1]),
          w.position.copy(E.fillDir).multiplyScalar(80),
          w.target.position.set(0, 0, 0),
          g.color.set(E.hemi[0]),
          g.groundColor.set(E.hemi[1]),
          (g.intensity = E.hemi[2]),
          (o.environment = x[F]),
          (o.environmentIntensity = E.env),
          !o.fog || !o.fog.isFogExp2
            ? (o.fog = new $s(E.fog[0], E.fog[1]))
            : (o.fog.color.set(E.fog[0]), (o.fog.density = E.fog[1])),
          d.uniforms.uForest && (d.uniforms.uForest.value = 0)),
      (d.uniforms.uMode.value = F === "ruins" ? 1 : 0),
      v.setWorld(F),
      n.setWorld(F));
    for (const Y of l) Y(F);
    ((y.shadow.needsUpdate = !0),
      u.nav?.rebuild(),
      (y.shadow.autoUpdate = F !== "ruins"));
  }
  (a.push(() => {
    y.shadow.autoUpdate ||
      ((b.shT = (b.shT || 0) + 1),
      b.shT % 2 === 0 && (y.shadow.needsUpdate = !0));
  }),
    Z("dream"));
  const ot = 7,
    $ = (...F) => {
      const E = [];
      for (const Y of F)
        Y?.traverse((et) => {
          (et.isMesh || et.isPoints || et.isLine) && !et.isLight && E.push(et);
        });
      return E;
    },
    C = {
      behind: $(S.district?.group, f.mesh, h.school, h.dead, m.group, M.group),
      away: $(
        c.group,
        n.group,
        S.group.getObjectByName("checkpoint"),
        ...S.group.children.filter((F) => F.name === "outside_baked"),
      ),
      deep: $(A.churchIn.group),
    };
  {
    const F = new Set([...C.behind, ...C.away, ...C.deep]);
    C.sealed = $(A.forest.group, S.group).filter((E) => !F.has(E));
  }
  const T = { behind: !1, away: !1, deep: !1, sealed: !1 },
    D = (F, E) => {
      if (T[F] !== E) {
        T[F] = E;
        for (const Y of C[F])
          E
            ? ((Y.userData.cullMask = Y.layers.mask), Y.layers.set(ot))
            : Y.userData.cullMask != null &&
              ((Y.layers.mask = Y.userData.cullMask),
              (Y.userData.cullMask = null));
      }
    };
  a.push(() => {
    const F = u.camera.position,
      E = Ve(F.x, F.z),
      Y = b.world === "ruins";
    (D("behind", Y && j.has(E)),
      D("away", Y && E !== "church" && j.has(E)),
      D("deep", Y && (E === "forest" || E === "house")),
      D(
        "sealed",
        Y &&
          !!u.houseSealed &&
          F.x > _t.x0 + 0.1 &&
          F.x < _t.x1 - 0.1 &&
          F.z > _t.z0 + 0.15 &&
          F.z < _t.z1 - 0.15,
      ));
  });
  const N = { sun: y, fill: w, hemi: g },
    H = () => {
      const F = u.camera,
        E = [];
      o.traverse((et) => {
        (et.isMesh || et.isPoints || et.isLine) &&
          et.frustumCulled &&
          E.push(et);
      });
      const Y = () => {
        const et = u.lighting,
          nt = u.shadowBudget?.cands || { spot: [], point: [] },
          it = [
            ...new Set(
              [et?.sun, y, u.weapons?.torch, ...nt.spot, ...nt.point].filter(
                Boolean,
              ),
            ),
          ],
          lt = it.map((ht) => ht.castShadow);
        it.forEach((ht) => {
          ((ht.castShadow = !0), (ht.shadow.needsUpdate = !0));
        });
        for (const ht of E) ht.frustumCulled = !1;
        t.shadowMap.render(it, o, F);
        for (const ht of E) ht.frustumCulled = !0;
        it.forEach((ht, yt) => {
          ht.castShadow = lt[yt];
        });
      };
      for (const et of ["ruins", "dream"]) {
        (Z(et), t.setRenderTarget(u.post.rt.scene), t.compile(o, F), Y());
        for (const nt of E) nt.frustumCulled = !1;
        t.render(o, F);
        for (const nt of E) nt.frustumCulled = !0;
        (t.setRenderTarget(null), u.render());
      }
      for (const et of Object.values(A)) et.warmUp?.();
    },
    Q = {
      setWorld: Z,
      get world() {
        return b.world;
      },
      sky: d,
      terrain: v,
      walls: n,
      water: f,
      koi: h,
      flora: c,
      lawn: m,
      stones: M,
      outside: S,
      church: S.church,
      fires: S.fires,
      hooks: l,
      envs: x,
      warmUp: H,
      churchIn: A.churchIn,
      forest: A.forest,
      house: A.house,
      snapLook: q,
      refreshLooks: U,
      get look() {
        return K;
      },
    },
    W = (F, E) => {
      const Y = Yt.a[0],
        et = Yt.a[1],
        nt = Yt.b[0] - Y,
        it = Yt.b[1] - et,
        lt = Math.max(
          0,
          Math.min(1, ((F - Y) * nt + (E - et) * it) / (nt * nt + it * it)),
        );
      return Math.hypot(F - Y - nt * lt, E - et - it * lt) < Yt.w * 0.55;
    };
  return {
    group: r,
    colliders: p,
    circles: i,
    anim: a,
    points: Ie,
    props: Q,
    lighting: N,
    navPlan: xn,
    roomAt: Ve,
    surfaceAt: (F, E) => {
      const Y = Ve(F, E);
      return Y === "garden" || Y === "gapW" || Y === "gapE"
        ? W(F, E)
          ? b.world === "ruins"
            ? "ash"
            : "wood"
          : Bo(F, E) < 0.62
            ? "gravel"
            : b.world === "ruins"
              ? "ash"
              : "grass"
        : Y === "yard" || Y === "forest"
          ? A.forest.surfaceAt?.(F, E) || "grass"
          : Y === "house"
            ? A.house.surfaceAt?.(F, E) || "wood"
            : Y === "shop"
              ? "tile"
              : "stone";
    },
    start: Ie.start,
  };
}
export { pi as build };
