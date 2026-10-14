import {
  M as so,
  ae as Ro,
  C as We,
  P as Do,
  n as Eo,
  V as ot,
  x as te,
  aC as No,
  m as Lo,
  f as lo,
  g as ro,
  N as Bo,
  aw as Oo,
  h as gt,
  c as bt,
  B as ue,
  ah as co,
  ak as io,
  b as D0,
  Q as fo,
  J as Ot,
  I as _t,
  K as Xo,
  E as Co,
  o as rt,
  aB as Zo,
  a9 as Wo,
  G as Jt,
  $ as U0,
  a0 as Ho,
  q as uo,
  d as ho,
  a5 as po,
  aa as xo,
  ag as mo,
  T as Fo,
} from "./index-DaQlAVPp.js";
import {
  A as ut,
  P as ve,
  R as V0,
  U as Go,
  E as lt,
  T as ct,
  a as he,
  b as Yo,
  c as Kt,
} from "./plan3-BlRgM2iV.js";
import { H as tt } from "./hatch-Vg74Rrkt.js";
import { R as Vo } from "./RoundedBoxGeometry-D0zz8qHa.js";
const u0 = Go,
  q = V0 - 0.3,
  Ut = tt.shaft,
  _0 = {
    x0: Ut.x0,
    x1: Ut.x1,
    z0: Ut.z0,
    z1: Ut.z1,
    cx: tt.x,
    cz: tt.z,
    wall: 0.25,
    top: -0.05,
    collarBot: -0.4,
    bottom: tt.bottom,
    open: 0.84,
    ladderZ: tt.ladderZ,
    railX: [tt.x - 0.22, tt.x + 0.22],
    rungTop: -0.25,
    rungBot: -8.85,
    railZ: tt.ladderZ + 0.015,
    postZ: tt.ladderZ + 0.025,
    postTop: 0.95,
    door: { x0: tt.x - 0.45, x1: tt.x + 0.45, y1: -6.95 },
  },
  dt = {
    x0: tt.x - 0.75,
    x1: tt.x + 0.75,
    z0: Ut.z1 + 0.25,
    z1: ut.north.z0 - 0.25,
    y0: u0,
    y1: u0 + 2.4,
  },
  y0 = {
    x0: ut.passageDoor[0] - 0.45,
    x1: ut.passageDoor[0] + 0.45,
    z: ut.north.z0,
    y1: u0 + 2.05,
  },
  m = {
    x0: ut.x0,
    x1: ut.x1,
    zN: ut.north.z0,
    zS: ut.south.z1,
    edgeN: ut.north.z1,
    edgeS: ut.south.z0,
    ceil: u0 + 4.2,
    colZ: (ct + he) / 2,
    cols: [-9, -3, 3, 9, 15, 21, 27, 33, 39, 45],
    girderBot: u0 + 3.5,
    beamBot: u0 + 3.75,
    stopX: ut.stopX,
  },
  d0 = { z0: ct - 2.5, z1: he + 2.5, roof: V0 + 4.9 },
  et = { x0: -262, x1: m.x0 },
  ht = { x0: m.x1, x1: 80, buffer2: 76.5 },
  c0 = {
    z0: m.zN,
    z1: m.zN + 3.6,
    x0: m.x1,
    rise: 0.17,
    tread: 0.3,
    landing: [m.x1 + 3.6, m.x1 + 3.6 + 1.6],
    topX: m.x1 + 3.6 + 1.6 + 3.6,
    topY: u0 + 26 * 0.17,
    hall: { x0: m.x1 + 8.8, x1: m.x1 + 17.5, z0: m.zN - 0.6, z1: m.zN + 4.6 },
    shutterX: m.x1 + 12.6,
  },
  Lt = { z0: m.zS - 3.6, z1: m.zS, x0: m.x1, gateX: m.x1 + 0.35 },
  W0 = { r: 2.5, cy: 1.8, x0: ht.x1, x1: 386 },
  qt = 234.5,
  P = {
    track: qt,
    edge: qt - Yo,
    bufferX: ve.bufferX,
    stopGap: ve.stopGap,
    hallZ0: 218.5,
    hallZ1: qt + 2.9,
    hallX0: 386,
    hallX1: 455,
    ceil: -1.2,
    platX0: 387.5,
    platX1: 453,
    mezz: { z0: 212.5, z1: 218.5, x0: 402, x1: 452, y: u0 + 4.5, ceil: -1.2 },
    gatesZ: 215.6,
    stair: {
      x0: 426.2,
      x1: 430.2,
      zTop: 218.5,
      zBot: 228.5,
      flights: 15,
      rise: 0.15,
      tread: 0.3,
      landing: 1.6,
    },
    esc: [
      { x0: 422.3, x1: 423.6 },
      { x0: 424.3, x1: 425.6 },
    ],
    exit: {
      x0: 428,
      x1: 432,
      zTop: lt[2],
      zBot: 212.5,
      flights: 15,
      rise: 0.15,
      tread: 0.3,
      landing: 1.1,
      openZ: 209,
    },
  },
  Me = m.x0 - 228,
  ke = 130,
  He = 290;
function pt(c) {
  if (c <= ke) return ct;
  if (c >= He) return qt;
  const a = (c - ke) / (He - ke);
  return ct + (qt - ct) * a * a * a * (a * (a * 6 - 15) + 10);
}
function Uo(c = 0.5) {
  const a = ve.bufferX,
    o = Math.ceil((a - Me) / 0.05),
    s = new Float64Array(o + 1),
    f = new Float64Array(o + 1);
  let h = 0;
  for (let u = 0; u <= o; u++) {
    const b = Me + (a - Me) * (u / o);
    if (((s[u] = b), u > 0)) {
      const M = b - s[u - 1],
        x = pt(b) - pt(s[u - 1]);
      h += Math.hypot(M, x);
    }
    f[u] = h;
  }
  const d = h,
    l = [],
    i = [],
    t = [];
  let e = 0;
  const n = Math.ceil(d / c);
  for (let u = 0; u <= n; u++) {
    const b = Math.min(d, u * (d / n));
    for (; e < o - 1 && f[e + 1] < b;) e++;
    const M = (b - f[e]) / Math.max(1e-9, f[e + 1] - f[e]),
      x = s[e] + (s[e + 1] - s[e]) * M;
    (l.push([+x.toFixed(4), V0, +pt(x).toFixed(4)]), i.push(b), t.push(x));
  }
  return {
    pts: l,
    s: i,
    xs: t,
    length: d,
    sAtX: (u) => {
      let b = 0,
        M = o;
      for (; M - b > 1;) {
        const w = (b + M) >> 1;
        s[w] < u ? (b = w) : (M = w);
      }
      const x = (u - s[b]) / (s[M] - s[b]);
      return f[b] + (f[M] - f[b]) * x;
    },
  };
}
function Fe(c, a = {}) {
  const o = pt(c),
    s = (pt(c + 0.05) - pt(c - 0.05)) / 0.1,
    f = Math.hypot(1, s);
  return (
    (a.x = c),
    (a.z = o),
    (a.tx = 1 / f),
    (a.tz = s / f),
    (a.nx = -s / f),
    (a.nz = 1 / f),
    a
  );
}
const H0 = 32,
  _e = 512,
  ee = () => new te(0, -200, 0, 0),
  we = Array.from({ length: H0 }, ee),
  zo = Array.from({ length: H0 }, ee),
  yo = Array.from({ length: H0 }, ee),
  go = Array.from({ length: H0 }, ee),
  bo = Array.from({ length: H0 }, ee),
  ie = Array.from({ length: H0 }, () => new te(0, -1, 0, 0)),
  de = Array.from({ length: 8 }, () => new te(0, 0, 0, 0)),
  Pe = new te(0, 0, 0, 0),
  Mo = Array.from({ length: _e / 4 }, () => new te(0, 0, 0, 0)),
  mt = {
    uVA: { value: we },
    uVB: { value: zo },
    uVC: { value: yo },
    uVZ0: { value: go },
    uVZ1: { value: bo },
    uVD: { value: ie },
    uMyPt: { value: de },
    uTorch: { value: Pe },
    uFX: { value: Mo },
    uMWet: { value: 1 },
  },
  It = No.lights_fragment_begin,
  qo = (() => {
    const c = It.indexOf(
        "#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )",
      ),
      a = It.indexOf("#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )"),
      o =
        "RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );";
    if (c < 0 || a < 0) return It;
    const s = It.slice(c, a);
    if (!s.includes(o)) return It;
    const f = "getSpotLightInfo( spotLight, geometryPosition, directLight );",
      h = It.slice(a).replace(
        f,
        f +
          " { vec3 dt = uTorch.xyz - spotLight.position; if ( uTorch.w > 0.5 && dot( dt, dt ) < 2.5e-3 ) { float te = dot( directLight.color, vec3( 0.2126, 0.7152, 0.0722 ) ); directLight.color *= 70.0 / ( te + 70.0 ); } }",
      );
    return (
      It.slice(0, c) +
      s.replace(
        o,
        "{ bool mine = false; for ( int q = 0; q < 8; q ++ ) { vec3 dq = uMyPt[ q ].xyz - pointLight.position; if ( uMyPt[ q ].w > 0.5 && dot( dq, dq ) < 2.5e-3 ) mine = true; } if ( ! mine ) reflectedLight.directDiffuse += saturate( dot( geometryNormal, directLight.direction ) ) * directLight.color * BRDF_Lambert( material.diffuseContribution ); }",
      ) +
      h
    );
  })(),
  $o = `
uniform vec4 uVA[${H0}];
uniform vec4 uVB[${H0}];
uniform vec4 uVC[${H0}];
uniform vec4 uVZ0[${H0}];
uniform vec4 uVZ1[${H0}];
uniform vec4 uVD[${H0}];
uniform vec4 uMyPt[8];
uniform vec4 uTorch;
uniform float uMWet;
varying vec3 vMW;
#ifdef METRO_AH
varying float vAH;
#endif
float mHash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float mNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = mHash(i), b = mHash(i + vec2(1.0, 0.0)), c = mHash(i + vec2(0.0, 1.0)), d = mHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
`;
function Ge(c, a = {}) {
  const o = c.clone();
  ((o.userData = {
    ...c.userData,
    metroLit: !0,
    metroAH: !!a.grime || !!a.soot,
  }),
    a.name && (o.name = a.name),
    a.vertexColors && (o.vertexColors = !0));
  const s = (i) => Object.prototype.hasOwnProperty.call(c, i),
    f = s("onBeforeCompile") ? c.onBeforeCompile : null,
    h = s("customProgramCacheKey") ? c.customProgramCacheKey : null,
    d = [];
  (a.wet &&
    d.push(
      "#define METRO_WET " + (+a.wet).toFixed(3),
      "#define METRO_WET_LO " + (a.wetLo ?? 0.62).toFixed(3),
    ),
    a.tiles &&
      d.push(
        `#define METRO_TILES vec2(${a.tiles[0].toFixed(1)}, ${a.tiles[1].toFixed(1)})`,
        "#define METRO_TILE_K " + (a.tileK ?? 1).toFixed(3),
      ),
    a.bond && d.push("#define METRO_BOND 1"),
    (a.grime || a.soot) &&
      d.push(
        "#define METRO_AH 1",
        "#define METRO_GRIME " + (+(a.grime || 0)).toFixed(3),
        "#define METRO_SOOT " + (+(a.soot || 0)).toFixed(3),
      ),
    a.streaks && d.push("#define METRO_STREAK " + (+a.streaks).toFixed(3)),
    a.roughAdd && d.push("#define METRO_RADD " + (+a.roughAdd).toFixed(3)));
  const l =
    "metroLit" +
    H0 +
    "|" +
    d.join(",") +
    (a.ptSpec ? "ps" : "") +
    (a.key || "");
  return (
    (o.onBeforeCompile = (i, t) => {
      (f && f.call(o, i, t),
        Object.assign(i.uniforms, {
          uVA: mt.uVA,
          uVB: mt.uVB,
          uVC: mt.uVC,
          uVZ0: mt.uVZ0,
          uVZ1: mt.uVZ1,
          uVD: mt.uVD,
          uMyPt: mt.uMyPt,
          uTorch: mt.uTorch,
          uMWet: mt.uMWet,
        }));
      const e =
        d.join(`
`) +
        `
`;
      i.vertexShader =
        e +
        i.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vMW;
#ifdef METRO_AH
attribute float aH;
varying float vAH;
#endif`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
      {
        vec4 mw = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          mw = instanceMatrix * mw;
        #endif
        vMW = (modelMatrix * mw).xyz;
        #ifdef METRO_AH
          vAH = aH;
        #endif
      }`,
          );
      let n =
        e +
        i.fragmentShader.replace(
          "#include <common>",
          `#include <common>
` + $o,
        );
      ((n = n.replace(
        "#include <map_fragment>",
        `float metroWet = 0.0; float metroRough = 0.0;
      #include <map_fragment>
      {
        vec3 mwn = normalize(cross(dFdx(vMW), dFdy(vMW)));
        if (dot(mwn, vMW - cameraPosition) > 0.0) mwn = -mwn;
        #if defined(METRO_TILES) && defined(USE_MAP)
        {
          vec2 tq = vMapUv * METRO_TILES;
          float trow = floor(tq.y);
          #ifdef METRO_BOND
          tq.x += mod(trow, 2.0) < 0.5 ? 0.5 : 0.0;
          #endif
          vec2 tid = vec2(floor(tq.x), trow);
          float th = mHash(tid + 0.37), th2 = mHash(tid * 1.7 + 4.1), th3 = mHash(tid * 0.61 + 9.3);
          diffuseColor.rgb *= mix(1.0, 0.86 + 0.24 * th, METRO_TILE_K);
          diffuseColor.rgb *= mix(vec3(1.0), vec3(1.03, 1.0, 0.95), th2 * METRO_TILE_K);
          diffuseColor.rgb *= mix(1.0, 0.72, step(0.965, th3) * METRO_TILE_K);
          metroRough += (th2 - 0.5) * 0.14 * METRO_TILE_K;
        }
        #endif
        #ifdef METRO_AH
        {
          float along = abs(mwn.x) > abs(mwn.z) ? vMW.z : vMW.x;
          float n1 = mNoise(vec2(along * 1.3, vMW.y * 0.9)), n2 = mNoise(vec2(along * 0.33 + 3.7, vMW.y * 0.25));
          float vert = 1.0 - smoothstep(0.55, 0.85, abs(mwn.y));
          float low = (1.0 - smoothstep(0.0, 0.16 + 0.34 * n1, vAH)) * vert;
          float damp = (1.0 - smoothstep(0.0, 0.4 + 1.2 * n2, vAH)) * vert;
          float sootH = smoothstep(2.4, 4.0, vAH) * vert;
          float blot = smoothstep(0.45, 0.95, mNoise(vec2(along * 0.21 + 11.0, vMW.y * 0.33)) * 0.7 + n1 * 0.3) * vert;
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.66, 0.58, 0.47), METRO_GRIME * low * 0.75);
          diffuseColor.rgb *= 1.0 - METRO_GRIME * (0.3 * damp + 0.32 * sootH + 0.24 * blot);
          metroWet = max(metroWet, METRO_GRIME * damp * 0.35);
          float soot = (1.0 - smoothstep(0.2, 2.6 + n1, vAH)) * METRO_SOOT;
          diffuseColor.rgb *= 1.0 - 0.55 * soot;
        }
        #endif
        #ifdef METRO_STREAK
        {
          float vert = 1.0 - smoothstep(0.5, 0.8, abs(mwn.y));
          float along = abs(mwn.x) > abs(mwn.z) ? vMW.z : vMW.x;
          float st = mNoise(vec2(along * 4.0, vMW.y * 0.22 + 1.7)) * 0.75 + mNoise(vec2(along * 13.0, vMW.y * 0.9)) * 0.25;
          float st2 = mNoise(vec2(along * 0.9 + 5.0, 0.5 + vMW.y * 0.05));
          float streak = smoothstep(0.66, 0.95, st) * smoothstep(0.55, 0.85, st2) * vert;
          diffuseColor.rgb *= 1.0 - METRO_STREAK * 0.3 * streak;
          metroWet = max(metroWet, streak * METRO_STREAK * 0.38);
        }
        #endif
        #ifdef METRO_WET
        {
          float up = smoothstep(0.75, 0.95, mwn.y);
          float pn = mNoise(vMW.xz * 0.45) * 0.6 + mNoise(vMW.xz * 1.7 + 7.3) * 0.3 + mNoise(vMW.xz * 6.0 + 2.1) * 0.1;
          float lo = METRO_WET_LO + (1.0 - uMWet) * 0.3;
          float pud = smoothstep(lo, lo + 0.05, pn) * up;
          float damp = smoothstep(lo - 0.12, lo, pn) * up;
          diffuseColor.rgb *= 1.0 - METRO_WET * (0.42 * pud + 0.12 * damp);
          metroWet = max(metroWet, METRO_WET * max(pud, damp * 0.45));
        }
        #endif
      }`,
      )),
        (n = n.replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
      #ifdef METRO_RADD
      metroRough += METRO_RADD;
      #endif
      roughnessFactor = clamp(roughnessFactor + metroRough, 0.03, 1.0);
      roughnessFactor = mix(roughnessFactor, 0.035, clamp(metroWet, 0.0, 1.0));`,
        )),
        (n = n.replace(
          "#include <normal_fragment_maps>",
          `#include <normal_fragment_maps>
      normal = normalize(mix(normal, nonPerturbedNormal, clamp(metroWet * 1.2, 0.0, 0.95)));`,
        )),
        a.ptSpec || (n = n.replace("#include <lights_fragment_begin>", qo)),
        (n = n.replace(
          "#include <lights_fragment_end>",
          `
      {
        vec3 mR = reflect(-geometryViewDir, geometryNormal);
        float mAl = pow2(material.roughness);
        for (int i = 0; i < ${H0}; i++) {
          vec4 A = uVA[i];
          if (A.w <= 0.0) continue;
          vec4 Z0 = uVZ0[i], Z1 = uVZ1[i];
          if (vMW.x < Z0.x || vMW.y < Z0.y || vMW.z < Z0.z || vMW.x > Z1.x || vMW.y > Z1.y || vMW.z > Z1.z) continue;
          vec4 B = uVB[i], C = uVC[i];
          vec3 L0 = (viewMatrix * vec4(A.xyz, 1.0)).xyz - geometryPosition;
          vec3 L1 = (viewMatrix * vec4(B.xyz, 1.0)).xyz - geometryPosition;
          vec3 Ld = L1 - L0;
          float ldl = dot(Ld, Ld);
          float tc = ldl > 1e-6 ? clamp(-dot(L0, Ld) / ldl, 0.0, 1.0) : 0.0;
          vec3 Lc = L0 + Ld * tc;
          float dc2 = dot(Lc, Lc), rch = B.w;
          if (dc2 > rch * rch) continue;
          float win = 1.0 - dc2 * dc2 / (rch * rch * rch * rch); win *= win;
          float l0 = length(L0), l1 = length(L1);
          // a fitting that throws its light one way (a batten under its body, a lit panel): a lobe round its axis
          vec4 Dv = uVD[i];
          if (Dv.w > 0.0) {
            float tight = floor(Dv.w), cl = dot(-Lc * inversesqrt(dc2 + 1e-4), normalize(mat3(viewMatrix) * Dv.xyz));
            float lobe = tight < 0.5 ? smoothstep(-0.25, 0.4, cl) : tight < 1.5 ? smoothstep(0.2, 0.85, cl) : smoothstep(0.6, 0.96, cl);
            win *= mix(1.0, lobe, fract(Dv.w));
          }
          vec3 E = C.rgb * (A.w * win);
          float ndl = saturate(0.5 * (dot(geometryNormal, L0) / l0 + dot(geometryNormal, L1) / l1));
          float gm = 2.0 / (l0 * l1 + dot(L0, L1) + 0.05);
          reflectedLight.directDiffuse += E * (ndl * gm * C.w) * BRDF_Lambert(material.diffuseContribution);
          float rl0 = dot(mR, L0), rld = dot(mR, Ld), l0ld = dot(L0, Ld);
          float ts = ldl > 1e-6 ? clamp((rl0 * rld - l0ld) / max(ldl - rld * rld, 1e-5), 0.0, 1.0) : 0.0;
          vec3 Ls = L0 + Ld * ts;
          float ds2 = max(dot(Ls, Ls), 1e-4), ds = sqrt(ds2);
          vec3 ls = Ls / ds;
          float nls = saturate(dot(geometryNormal, ls));
          if (nls <= 0.0 || Z1.w <= 0.0) continue;
          float aL = saturate(mAl + sqrt(ldl) / (2.0 * ds)), aS = saturate(mAl + Z0.w / (2.0 * ds));
          float nrm = (mAl / aL) * (mAl / aS) * (mAl / aS);
          reflectedLight.directSpecular += E * (nls * nrm * Z1.w / ds2) * BRDF_GGX(ls, geometryViewDir, geometryNormal, material);
        }
      }
      #include <lights_fragment_end>`,
        )),
        (i.fragmentShader = n));
    }),
    (o.customProgramCacheKey = () => l + (h ? h.call(c) : "")),
    (o.needsUpdate = !0),
    o
  );
}
function st(c, a = {}) {
  const o = new so({
    color: new We(a.base ?? 13620432),
    roughness: a.rough ?? 0.35,
    metalness: 0,
    emissive: new We(c[0], c[1], c[2]),
    emissiveIntensity: 1,
    map: a.map || null,
    emissiveMap: a.emissiveMap || null,
    side: a.side ?? Ro,
    transparent: !!a.transparent,
    opacity: a.opacity ?? 1,
    depthWrite: a.depthWrite ?? !0,
  });
  return (
    (o.toneMapped = !1),
    (o.name = a.name || "metro_glow"),
    a.polygonOffset &&
      ((o.polygonOffset = !0),
      (o.polygonOffsetFactor = -2),
      (o.polygonOffsetUnits = -2)),
    (o.onBeforeCompile = (s) => {
      ((s.uniforms.uFX = mt.uFX),
        (s.vertexShader = s.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute float aFix;
uniform vec4 uFX[${_e / 4}];
varying float vFixL;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
      { int fi = int(floor(aFix + 0.5)); vFixL = fi < 0 ? 1.0 : uFX[fi / 4][fi - (fi / 4) * 4]; }`,
          )),
        (s.fragmentShader = s.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying float vFixL;`,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
      totalEmissiveRadiance *= vFixL;`,
          )));
    }),
    (o.customProgramCacheKey = () => "metroGlow" + _e),
    o
  );
}
const Se = {},
  Ye = {
    shaft: ["shaft", "passage"],
    passage: ["passage", "shaft", "ashwood"],
    ashwood: ["ashwood", "passage", "tunnel"],
    tunnel: ["tunnel", "ashwood", "parkgate"],
    parkgate: ["parkgate", "concourse", "tunnel"],
    concourse: ["concourse", "parkgate", "stairs"],
    stairs: ["stairs", "concourse"],
    out: ["stairs"],
  };
function jo(c, a) {
  const o = [];
  let s = 0;
  const f = [],
    h = [];
  for (let k = 0; k < 8; k++) {
    const R = new Do(16777215, 0, 10, 2);
    ((R.name = "metro_pt" + k),
      (R.castShadow = !1),
      R.position.set(0, -200, 0),
      a.add(R),
      f.push({ l: R, src: null, next: null, k: 0 }));
  }
  for (let k = 0; k < 3; k++) {
    const R = new Eo(16777215, 0, 10, 0.9, 0.6, 2);
    ((R.name = "metro_spot" + k),
      R.position.set(0, -200, 0),
      (R.castShadow = !0),
      R.shadow.mapSize.set(1024, 1024),
      (R.shadow.bias = -6e-4),
      (R.shadow.normalBias = 0.02),
      (R.shadow.camera.near = 0.15),
      (R.shadow.camera.far = 14),
      R.target.position.set(0, -201, 0),
      a.add(R, R.target),
      h.push({ l: R, src: null, next: null, k: 0 }));
  }
  const d = Array.from({ length: H0 }, () => ({ src: null, next: null, k: 0 })),
    l = {
      srcs: o,
      pts: f,
      spots: h,
      slots: d,
      zoneK: Se,
      surgeT: -1,
      power: 1,
      cam: new ot(),
      lensZone: null,
      fixId() {
        return s++;
      },
      add(k) {
        return (
          (k.b ||= k.a),
          (k.state ||= "on"),
          (k.fix ??= -1),
          (k.r ??= 0.03),
          (k.lvl = k.state === "off" ? 0 : 1),
          (k.ph = k.ph ?? ((o.length * 0.6180339) % 1) * 100),
          (k.mid = [
            (k.a[0] + k.b[0]) / 2,
            (k.a[1] + k.b[1]) / 2,
            (k.a[2] + k.b[2]) / 2,
          ]),
          (k.d2 = 1e9),
          (k.i = o.length),
          o.push(k),
          k
        );
      },
      flicker(k, R) {
        Se[k] = Math.max(0, Math.min(1, R));
      },
      surge() {
        l.surgeT = 0;
      },
      update: C,
      levelOf: e,
      torch: null,
      prepare(k) {
        k.updateMatrixWorld();
        for (let W = 0; W < f.length; W++) {
          const Y = f[W].l;
          Y.intensity > 0
            ? (v.copy(Y.position).applyMatrix4(k.matrixWorldInverse),
              de[W].set(v.x, v.y, v.z, 1))
            : (de[W].w = 0);
        }
        const R = l.torch?.();
        R
          ? (R.updateMatrixWorld(),
            v
              .setFromMatrixPosition(R.matrixWorld)
              .applyMatrix4(k.matrixWorldInverse),
            Pe.set(v.x, v.y, v.z, 1))
          : (Pe.w = 0);
      },
    },
    i = (k) => k - Math.floor(k),
    t = (k) => i(Math.sin(k * 127.1 + 311.7) * 43758.5453);
  function e(k, R) {
    let W = 0;
    const Y = k.state;
    if (Y === "off") W = 0;
    else if (Y === "on") W = 1 + 0.012 * Math.sin(R * 6.3 + k.ph);
    else if (Y === "flicker") {
      const Z = Math.floor(R * 1.3 + k.ph),
        H = i(R * 1.3 + k.ph),
        V = t(Z + k.i * 13.1);
      V < 0.35
        ? (W = 0)
        : V < 0.75
          ? (W = t(Math.floor(R * 23 + k.ph * 7) + k.i) > 0.45 ? 0.95 : 0.06)
          : (W = H < 0.15 ? (t(Math.floor(R * 30) + k.i) > 0.5 ? 1 : 0.1) : 1);
    } else if (Y === "dying") {
      const Z = Math.floor(R * 0.45 + k.ph),
        H = i(R * 0.45 + k.ph);
      ((W =
        t(Z * 3.7 + k.i) < 0.22 && H > 0.3 && H < 0.62
          ? t(Math.floor(R * 18) + k.i * 3) > 0.6
            ? 0.8
            : 0.05
          : 1),
        (W *= 0.85 + 0.03 * Math.sin(R * 40 + k.ph)));
    }
    const $ = Se[k.zone] || 0;
    if ($ > 0 && W > 0) {
      const Z = t(Math.floor(R * (8 + 14 * $) + k.ph * 3) + k.i * 1.7);
      (Z < $ * 0.75 && (W *= Z < $ * 0.3 ? 0.03 : 0.35),
        (W *= 1 - 0.25 * $ * (0.5 + 0.5 * Math.sin(R * 50 + k.i))));
    }
    if (l.surgeT >= 0 && W > 0) {
      const Z = l.surgeT;
      W *=
        Z < 0.12
          ? 1 + 8.5 * Z
          : Z < 0.9
            ? 2 + 0.18 * Math.sin(Z * 140 + k.i)
            : Z < 1.3
              ? 2 - (1.75 * (Z - 0.9)) / 0.4
              : 0.25 + 0.75 * Math.min(1, (Z - 1.3) / 0.9);
    }
    return Math.max(0, W) * l.power;
  }
  const n = (k, R) => {
      const W = k.a[0],
        Y = k.a[1],
        $ = k.a[2],
        Z = k.b[0] - W,
        H = k.b[1] - Y,
        V = k.b[2] - $,
        I = Z * Z + H * H + V * V;
      let E =
        I > 1e-6 ? ((R.x - W) * Z + (R.y - Y) * H + (R.z - $) * V) / I : 0;
      E = E < 0 ? 0 : E > 1 ? 1 : E;
      const N = W + Z * E - R.x,
        Q = Y + H * E - R.y,
        K = $ + V * E - R.z;
      return N * N + Q * Q + K * K;
    },
    r = (k, R) => k.d2 - R.d2,
    u = [],
    b = [],
    M = [],
    x = [];
  let w = 0,
    p = 1e9,
    S = 1e9,
    y = 1e9;
  function L(k, R) {
    for (const W of k) {
      const Y = W.next || W.src;
      if (!(Y && R.includes(Y)))
        for (const $ of R) {
          let Z = !1;
          for (const H of k)
            if ((H.next || H.src) === $) {
              Z = !0;
              break;
            }
          if (!Z) {
            W.next = $;
            break;
          }
        }
    }
  }
  const v = new ot();
  function C(k, R, W) {
    const Y = W.position;
    (l.cam.copy(Y),
      l.surgeT >= 0 && ((l.surgeT += k), l.surgeT > 2.2 && (l.surgeT = -1)));
    for (const I of o)
      ((I.lvl = e(I, R)),
        I.fix >= 0 &&
          Mo[I.fix >> 2].setComponent(I.fix & 3, I.lvl * (I.glowGain ?? 1)));
    w -= k;
    const $ = (Y.x - p) ** 2 + (Y.z - S) ** 2 + (Y.y - y) ** 2,
      Z = $ > 1.5,
      H = $ > 25;
    if (((y = Y.y), w <= 0 || Z)) {
      ((w = 0.2), (p = Y.x), (S = Y.z), (u.length = 0));
      for (const E of o)
        E.state !== "off" &&
          ((E.d2 = n(E, Y) / (E.weight || 1)),
          E.d2 < (E.reach + 60) ** 2 && u.push(E));
      (u.sort(r), (b.length = 0), (M.length = 0), (x.length = 0));
      const I = Ye[(l.lensZone && l.lensZone(Y)) || "out"] || Ye.out;
      for (const E of u)
        if ((b.length < H0 && b.push(E), !!I.includes(E.zone))) {
          if (E.spot && x.length < h.length && E.d2 < 900) {
            x.push(E);
            continue;
          }
          E.point && M.length < f.length && E.d2 < 1600 && M.push(E);
        }
      if ((L(d, b), L(f, M), L(h, x), H))
        for (const E of [d, f, h])
          for (const N of E)
            (N.next && ((N.src = N.next), (N.next = null)),
              (N.k = N.src ? 1 : 0));
    }
    const V = (I, E, N) => {
      I.next && I.next !== I.src
        ? ((I.k = Math.max(0, I.k - k * E)),
          I.k === 0 && ((I.src = I.next), (I.next = null)))
        : (I.next === I.src && (I.next = null),
          I.src && (I.k = Math.min(1, I.k + k * N)));
    };
    for (const I of f) V(I, 5, 3);
    for (const I of h) V(I, 5, 3);
    for (const I of o) ((I.realP = 0), (I.realS = 0));
    for (let I = 0; I < f.length; I++) {
      const E = f[I],
        N = E.src,
        Q = E.l;
      if (!N) {
        ((Q.intensity = 0), (de[I].w = 0));
        continue;
      }
      const K = N.point;
      (K.at
        ? Q.position.set(K.at[0], K.at[1], K.at[2])
        : Q.position.set(N.mid[0], N.mid[1] - (K.below ?? 0.12), N.mid[2]),
        Q.color.setRGB(N.col[0], N.col[1], N.col[2]),
        (Q.distance = K.dist ?? N.reach),
        (Q.intensity = (K.cd ?? N.cd) * N.lvl * E.k),
        (N.realP = E.k * ((K.cd ?? N.cd) / N.cd)));
    }
    for (const I of h) {
      const E = I.src,
        N = I.l;
      if (!E) {
        N.intensity = 0;
        continue;
      }
      const Q = E.spot;
      (N.position.set(
        Q.at ? Q.at[0] : E.mid[0],
        Q.at ? Q.at[1] : E.mid[1],
        Q.at ? Q.at[2] : E.mid[2],
      ),
        N.target.position.set(
          N.position.x + Q.dir[0],
          N.position.y + Q.dir[1],
          N.position.z + Q.dir[2],
        ),
        N.color.setRGB(E.col[0], E.col[1], E.col[2]),
        (N.angle = Q.angle ?? 1),
        (N.penumbra = Q.pen ?? 0.7),
        (N.distance = Q.dist ?? E.reach),
        (N.intensity = Q.cd * E.lvl * I.k),
        (E.realS = I.k));
    }
    for (const I of d) V(I, 6, 4);
    for (let I = 0; I < H0; I++) {
      const E = d[I],
        N = E.src;
      if (!N || E.k <= 0 || N.lvl <= 0.001) {
        we[I].w = 0;
        continue;
      }
      const Q = E.k * (1 - N.realS);
      (we[I].set(N.a[0], N.a[1], N.a[2], N.cd * N.lvl * Q),
        zo[I].set(N.b[0], N.b[1], N.b[2], N.reach),
        yo[I].set(N.col[0], N.col[1], N.col[2], 1),
        go[I].set(N.box[0], N.box[1], N.box[2], N.r),
        N.dir
          ? ie[I].set(
              N.dir[0],
              N.dir[1],
              N.dir[2],
              (N.lobe ?? 0) + Math.min(0.98, N.dirK ?? 0.92),
            )
          : N.down
            ? ie[I].set(0, -1, 0, (N.lobe ?? 1) + 0.9)
            : (ie[I].w = 0),
        bo[I].set(N.box[3], N.box[4], N.box[5], N.spec ?? 1));
    }
  }
  return l;
}
const Qo = [
  "metro_tile_cream",
  "metro_tile_teal",
  "metro_concrete",
  "metro_paint",
  "metro_floor",
  "metro_steel",
  "metro_enamel",
  "metro_stone",
  "metro_stainless",
  "metro_lining",
  "tactile_paving",
  "concrete_grey",
  "rust_metal",
  "wood_oak_pale",
  "wood_walnut",
  "leather_brown",
  "wool_grey",
  "linen_stained",
  "iron_black",
  "steel_gun",
  "paper_old",
  "blood_dark",
  "street_asphalt",
  "sidewalk_tiles",
  "upholstery_green",
  "car_burnt",
  "boards_barricade",
];
function Jo(c, a) {
  const { mats: o } = c,
    s = (d, l = {}, i = {}) => {
      const t = Ge(o.get(d, l), i);
      return ((t.name = "m_" + d + (i.tag ? "_" + i.tag : "")), t);
    },
    f = (d, l = {}) => {
      const i = Ge(new so(d), l);
      return ((i.name = "m_" + (l.tag || "plain")), i);
    },
    h = {
      tileCream: s(
        "metro_tile_cream",
        {},
        { tiles: [8, 16], bond: !0, grime: 1, streaks: 0.55, tag: "wall" },
      ),
      tileTeal: s(
        "metro_tile_teal",
        {},
        { tiles: [8, 16], bond: !0, grime: 1, streaks: 0.4, tag: "wall" },
      ),
      floor: s(
        "metro_floor",
        {},
        { wet: 1, wetLo: 0.47, roughAdd: -0.12, tag: "plat" },
      ),
      steel: s("metro_steel", {}, { grime: 0.5, tag: "col" }),
      ceil: s(
        "plaster_bare",
        { color: "#6e6a62", rough: 0.95 },
        { streaks: 0.25, tag: "ceil" },
      ),
      concrete: s("metro_concrete", {}, { grime: 1, streaks: 1, tag: "wall" }),
      concShaft: s(
        "metro_concrete",
        { color: "#9c9a93" },
        { grime: 1, streaks: 0.9, tag: "shaft" },
      ),
      concDark: s(
        "metro_concrete",
        { color: "#8a857a" },
        { grime: 1, streaks: 0.8, soot: 0.6, tag: "tun" },
      ),
      concFloor: s(
        "metro_concrete",
        { color: "#a49d90" },
        { wet: 1, wetLo: 0.52, tag: "flr" },
      ),
      bed: s(
        "metro_concrete",
        { color: "#7a746a" },
        { wet: 1, wetLo: 0.5, tag: "bed" },
      ),
      coping: s(
        "metro_concrete",
        { color: "#c6bfae" },
        { wet: 0.7, wetLo: 0.62, tag: "cope" },
      ),
      tactile: s(
        "tactile_paving",
        { color: "#d8c890" },
        { wet: 0.5, wetLo: 0.66, tag: "tac" },
      ),
      paintLow: s(
        "metro_paint",
        { color: "#6f7e70" },
        { grime: 1, streaks: 0.5, tag: "lo" },
      ),
      paintHigh: s(
        "metro_paint",
        { color: "#c4bea9" },
        { grime: 0.6, streaks: 0.5, tag: "hi" },
      ),
      paintLine: f({ color: "#2a2a26", roughness: 0.6 }, { tag: "line" }),
      lining: s("metro_lining", {}, { soot: 1, streaks: 0.5, tag: "tube" }),
      sleeper: s("concrete_grey", { color: "#8c887e" }, { tag: "slp" }),
      rust: s("rust_metal", {}, { tag: "rust" }),
      railHead: f(
        { color: "#a9a8a2", roughness: 0.22, metalness: 1 },
        { tag: "rail", ptSpec: !0 },
      ),
      iron: s("iron_black", {}, { tag: "iron" }),
      galv: f(
        { color: "#7f8483", roughness: 0.6, metalness: 0.75 },
        { tag: "galv" },
      ),
      galvDark: f(
        { color: "#5d6261", roughness: 0.6, metalness: 0.7 },
        { tag: "galvd" },
      ),
      housing: f(
        { color: "#bdbab0", roughness: 0.55, metalness: 0.2 },
        { tag: "housing" },
      ),
      black: f({ color: "#0d0d0c", roughness: 0.8 }, { tag: "black" }),
      rubber: f({ color: "#151514", roughness: 0.7 }, { tag: "rubber" }),
      wood: s("wood_oak_pale", { color: "#9a7a58" }, { tag: "bench" }),
      woodDark: s("wood_walnut", {}, { tag: "wd" }),
      cable: f({ color: "#1c1c1b", roughness: 0.55 }, { tag: "cable" }),
      cableR: f({ color: "#4a1a14", roughness: 0.55 }, { tag: "cabler" }),
      pipeRed: f(
        { color: "#5a1814", roughness: 0.5, metalness: 0.3 },
        { tag: "piper" },
      ),
      machine: s("metro_steel", { color: "#c8a8a0" }, { tag: "machine" }),
      yellow: f({ color: "#b8962a", roughness: 0.55 }, { tag: "yel" }),
      cover: f({ color: "#6a5c36", roughness: 0.7 }, { tag: "cover" }),
      nosing: f({ color: "#8c7428", roughness: 0.72 }, { tag: "nosing" }),
      leather: s("leather_brown", { color: "#5a3a2a" }, { tag: "lea" }),
      fabric: s("wool_grey", { color: "#4a5a6a" }, { tag: "fab" }),
      fabricR: s("wool_grey", { color: "#7a2a24" }, { tag: "fabr" }),
      sheet: s("linen_stained", { color: "#c4c4bf" }, { tag: "sheet" }),
      foil: f(
        { color: "#c9ad62", roughness: 0.22, metalness: 1 },
        { tag: "foil" },
      ),
      paper: s("paper_old", { color: "#9a958a" }, { tag: "paper" }),
      plastic: f({ color: "#2a3036", roughness: 0.45 }, { tag: "plas" }),
      plasticW: f({ color: "#c8c6be", roughness: 0.4 }, { tag: "plasw" }),
      enamel: s(
        "metro_enamel",
        {},
        { tiles: [1, 2], tileK: 0.5, grime: 0.7, streaks: 0.3, tag: "en" },
      ),
      stone: s("metro_stone", {}, { wet: 0.7, wetLo: 0.64, tag: "st" }),
      stainless: s("metro_stainless", {}, { tag: "ss", ptSpec: !0 }),
      panelDark: f(
        { color: "#262b30", roughness: 0.45, metalness: 0.3 },
        { tag: "pdark" },
      ),
      ceilPanel: f(
        { color: "#9a9a96", roughness: 0.6, metalness: 0.4 },
        { tag: "cpanel" },
      ),
      glass: f(
        {
          color: "#9fb4b4",
          roughness: 0.06,
          metalness: 0.1,
          transparent: !0,
          opacity: 0.16,
          depthWrite: !1,
        },
        { tag: "glass", ptSpec: !0 },
      ),
      asphalt: s("street_asphalt", {}, { wet: 0.8, wetLo: 0.55, tag: "asph" }),
      pavers: s("sidewalk_tiles", {}, { wet: 0.7, wetLo: 0.6, tag: "pav" }),
    };
  return (
    (h.signs = f(
      { map: a.signs.tex, roughness: 0.38, metalness: 0 },
      { tag: "signs" },
    )),
    (h.print = f(
      { map: a.signs.tex, roughness: 0.85, metalness: 0, side: Lo },
      { tag: "print" },
    )),
    (h.frieze = f(
      { map: a.frieze.tex, roughness: 0.16, metalness: 0 },
      { tag: "frieze" },
    )),
    (h.decal = f(
      {
        map: a.decals.tex,
        roughness: 0.25,
        transparent: !0,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -4,
      },
      { tag: "decal" },
    )),
    (h.decalMatt = f(
      {
        map: a.decals.tex,
        roughness: 0.85,
        transparent: !0,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -4,
      },
      { tag: "decalm" },
    )),
    (h.glowSign = st([2.2, 2.2, 2.2], {
      base: 2236962,
      emissiveMap: a.glows.tex,
      map: a.glows.tex,
      name: "m_glowsign",
      rough: 0.3,
    })),
    (h.tube = st([3.4, 3.75, 3.6], {
      name: "m_tube",
      base: 13226188,
      rough: 0.3,
    })),
    (h.diffuser = st([1.25, 1.38, 1.32], {
      name: "m_diffuser",
      base: 8159099,
      rough: 0.5,
    })),
    (h.sodium = st([5, 2.4, 0.55], {
      name: "m_sodium",
      base: 6969920,
      rough: 0.3,
    })),
    (h.redLamp = st([4, 0.5, 0.25], {
      name: "m_red",
      base: 4854288,
      rough: 0.3,
    })),
    (h.greenLamp = st([0.3, 3.2, 0.9], {
      name: "m_green",
      base: 1060890,
      rough: 0.3,
    })),
    (h.amberLamp = st([3.6, 1.8, 0.3], {
      name: "m_amber",
      base: 4204556,
      rough: 0.3,
    })),
    (h.warmBulb = st([4.2, 2.6, 1.2], {
      name: "m_bulb",
      base: 8022608,
      rough: 0.3,
    })),
    (h.led = st([3, 3.1, 3.2], { name: "m_led", base: 9079948, rough: 0.4 })),
    (h.dawn = st([0.55, 0.75, 1.15], {
      name: "m_dawn",
      base: 1054752,
      rough: 1,
    })),
    h
  );
}
const nt = 'Corbel, "Gill Sans MT", "Segoe UI", Arial, sans-serif',
  R0 = 'Bahnschrift, "DIN Alternate", "Segoe UI", Arial, sans-serif',
  ft = 'Georgia, "Times New Roman", serif';
function Ve(c) {
  let a = c | 0;
  return () => {
    a = (a + 1831565813) | 0;
    let o = Math.imul(a ^ (a >>> 15), 1 | a);
    return (
      (o = (o + Math.imul(o ^ (o >>> 7), 61 | o)) ^ o),
      ((o ^ (o >>> 14)) >>> 0) / 4294967296
    );
  };
}
class ne {
  constructor(a, o, { alpha: s = !1, bg: f = "#000" } = {}) {
    ((this.W = a),
      (this.H = o),
      (this.cv = document.createElement("canvas")),
      (this.cv.width = a),
      (this.cv.height = o),
      (this.g = this.cv.getContext("2d")),
      (this.rects = {}),
      (this.items = []),
      s || ((this.g.fillStyle = f), this.g.fillRect(0, 0, a, o)));
  }
  put(a, o, s, f) {
    this.items.push({ name: a, w: o, h: s, draw: f });
  }
  pack() {
    const a = this.g;
    let o = 0,
      s = 0,
      f = 0;
    for (const h of [...this.items].sort((d, l) => l.h - d.h || l.w - d.w)) {
      if (
        (o + h.w > this.W && ((o = 0), (s += f + 4), (f = 0)), s + h.h > this.H)
      ) {
        console.warn("[metro signs] atlas full at " + h.name);
        continue;
      }
      (a.save(),
        a.translate(o, s),
        a.beginPath(),
        a.rect(0, 0, h.w, h.h),
        a.clip(),
        h.draw(a, h.w, h.h),
        a.restore(),
        (this.rects[h.name] = [
          (o + 0.5) / this.W,
          1 - (s + h.h - 0.5) / this.H,
          (o + h.w - 0.5) / this.W,
          1 - (s + 0.5) / this.H,
        ]),
        (o += h.w + 4),
        (f = Math.max(f, h.h)));
    }
    return ((this.items.length = 0), this);
  }
  texture(a = !0) {
    const o = new lo(this.cv);
    return (
      (o.colorSpace = a ? ro : Bo),
      (o.anisotropy = 8),
      (o.minFilter = Oo),
      (o.generateMipmaps = !0),
      o
    );
  }
}
function P0(c, a, o, s, f = 1, h = "40,32,24") {
  for (let l = 0; l < 18 * f; l++) {
    const i = s() * a,
      t = s() * o,
      e = (0.1 + s() * 0.35) * Math.max(a, o),
      n = c.createRadialGradient(i, t, 0, i, t, e);
    (n.addColorStop(0, `rgba(${h},${(0.05 + s() * 0.08) * f})`),
      n.addColorStop(1, `rgba(${h},0)`),
      (c.fillStyle = n),
      c.fillRect(0, 0, a, o));
  }
  const d = c.createLinearGradient(0, 0, 0, o);
  (d.addColorStop(0, `rgba(${h},${0.12 * f})`),
    d.addColorStop(0.15, `rgba(${h},0)`),
    d.addColorStop(0.85, `rgba(${h},0)`),
    d.addColorStop(1, `rgba(${h},${0.2 * f})`),
    (c.fillStyle = d),
    c.fillRect(0, 0, a, o));
  for (let l = 0; l < 260 * f; l++)
    ((c.fillStyle = `rgba(${h},${0.1 + s() * 0.25})`),
      c.fillRect(s() * a, s() * o, 1 + s() * 2, 1 + s() * 2));
  ((c.strokeStyle = `rgba(255,255,255,${0.05 * f})`), (c.lineWidth = 1));
  for (let l = 0; l < 14 * f; l++) {
    const i = s() * a,
      t = s() * o;
    (c.beginPath(),
      c.moveTo(i, t),
      c.lineTo(i + (s() - 0.5) * a * 0.3, t + (s() - 0.5) * o * 0.1),
      c.stroke());
  }
}
function Tt(c, a, o, s, f, h, d = !0) {
  ((c.fillStyle = f), c.fillRect(0, 0, a, o));
  const l = Math.min(a, o) * 0.07;
  if (
    ((c.strokeStyle = h),
    (c.lineWidth = Math.max(2, l * 0.28)),
    c.strokeRect(l, l, a - 2 * l, o - 2 * l),
    d)
  )
    for (const [i, t] of [
      [l * 0.5, o / 2],
      [a - l * 0.5, o / 2],
    ])
      ((c.fillStyle = "#1a1714"),
        c.beginPath(),
        c.arc(i, t, l * 0.55, 0, Math.PI * 2),
        c.fill(),
        (c.fillStyle = "#5a4f44"),
        c.beginPath(),
        c.arc(i, t, l * 0.22, 0, Math.PI * 2),
        c.fill());
  for (let i = 0; i < 9; i++) {
    const t = Math.floor(s() * 4),
      e = s(),
      n = 2 + s() * l * 0.5,
      r = t === 0 ? e * a : t === 1 ? a : t === 2 ? e * a : 0,
      u = t === 0 ? 0 : t === 1 ? e * o : t === 2 ? o : e * o;
    ((c.fillStyle = "#16130f"),
      c.beginPath(),
      c.ellipse(r, u, n * 1.6, n, s() * 3, 0, Math.PI * 2),
      c.fill(),
      (c.fillStyle = "rgba(110,60,30,0.6)"),
      c.beginPath(),
      c.ellipse(r, u, n * 2.2, n * 1.3, s() * 3, 0, Math.PI * 2),
      c.fill());
  }
}
function J(
  c,
  a,
  o,
  s,
  f,
  {
    font: h = nt,
    weight: d = "bold",
    color: l = "#fff",
    align: i = "center",
    base: t = "middle",
    spacing: e = 0,
    maxW: n = 0,
  } = {},
) {
  if (
    ((c.font = `${d} ${f}px ${h}`),
    (c.fillStyle = l),
    (c.textAlign = i),
    (c.textBaseline = t),
    "letterSpacing" in c && (c.letterSpacing = e + "px"),
    n)
  ) {
    const r = c.measureText(a).width;
    if (r > n) {
      (c.save(),
        c.translate(o, s),
        c.scale(n / r, 1),
        c.fillText(a, 0, 0),
        c.restore(),
        "letterSpacing" in c && (c.letterSpacing = "0px"));
      return;
    }
  }
  (c.fillText(a, o, s), "letterSpacing" in c && (c.letterSpacing = "0px"));
}
function Wt(c, a, o, s, f, h, d = {}) {
  a.forEach((l, i) =>
    J(c, l, o, s + i * h, f, {
      align: "left",
      base: "top",
      weight: d.weight || "normal",
      font: d.font || ft,
      color: d.color || "#222",
      maxW: d.maxW || 0,
    }),
  );
}
function se(c, a, o, s, f = 0, h = "#fff") {
  (c.save(),
    c.translate(a, o),
    c.rotate(f),
    (c.fillStyle = h),
    c.beginPath(),
    c.moveTo(s * 0.5, 0),
    c.lineTo(0, -s * 0.42),
    c.lineTo(0, -s * 0.16),
    c.lineTo(-s * 0.5, -s * 0.16),
    c.lineTo(-s * 0.5, s * 0.16),
    c.lineTo(0, s * 0.16),
    c.lineTo(0, s * 0.42),
    c.closePath(),
    c.fill(),
    c.restore());
}
function vt(c, a, o, s) {
  ((c.fillStyle = "#e8dcc0"),
    c.beginPath(),
    c.arc(a, o, s, 0, Math.PI * 2),
    c.fill(),
    (c.fillStyle = "#6b1d1a"),
    c.beginPath(),
    c.arc(a, o, s * 0.86, 0, Math.PI * 2),
    c.fill(),
    J(c, "4", a, o + s * 0.06, s * 1.25, { font: R0, color: "#efe4c8" }));
}
function Ko() {
  const c = Ve(5310),
    a = new ne(2048, 3072, { bg: "#2a2a28" });
  (a.put("ash_name", 1024, 200, (t, e, n) => {
    (Tt(t, e, n, c, "#1d4644", "#e3d6b4"),
      J(t, "ASHWOOD", e / 2, n / 2 + 6, 128, { color: "#eadfc2", spacing: 18 }),
      P0(t, e, n, c, 0.8));
  }),
    a.put("ash_name_s", 512, 128, (t, e, n) => {
      (Tt(t, e, n, c, "#1d4644", "#e3d6b4"),
        J(t, "ASHWOOD", e / 2, n / 2 + 4, 74, { color: "#eadfc2", spacing: 8 }),
        P0(t, e, n, c, 0.9));
    }),
    a.put("ash_plat1", 512, 256, (t, e, n) => {
      (Tt(t, e, n, c, "#e6dcc2", "#1d4644"),
        vt(t, 92, 92, 52),
        J(t, "1", e - 92, 96, 120, { color: "#1d4644", font: nt }),
        J(t, "EASTBOUND", 300, 70, 46, { color: "#1d4644", spacing: 4 }),
        J(t, "to PARKGATE", e / 2, 190, 52, { color: "#2a2a28" }),
        P0(t, e, n, c, 1));
    }),
    a.put("ash_plat2", 512, 256, (t, e, n) => {
      (Tt(t, e, n, c, "#e6dcc2", "#1d4644"),
        vt(t, 92, 92, 52),
        J(t, "2", e - 92, 96, 120, { color: "#1d4644", font: nt }),
        J(t, "WESTBOUND", 300, 70, 46, { color: "#1d4644", spacing: 4 }),
        J(t, "NOT IN SERVICE", e / 2, 190, 44, { color: "#6b1d1a" }),
        P0(t, e, n, c, 1.1));
    }),
    a.put("ash_wayout", 640, 160, (t, e, n) => {
      (Tt(t, e, n, c, "#e8d24a", "#1a1a18"),
        J(t, "WAY OUT", 260, n / 2 + 4, 88, { color: "#151512", spacing: 6 }),
        se(t, e - 110, n / 2, 110, 0, "#151512"),
        P0(t, e, n, c, 1.1));
    }),
    a.put("staff_only", 384, 192, (t, e, n) => {
      (Tt(t, e, n, c, "#eae6da", "#7a1d1a"),
        J(t, "STAFF", e / 2, 70, 70, { color: "#7a1d1a", spacing: 6 }),
        J(t, "ONLY", e / 2, 140, 70, { color: "#7a1d1a", spacing: 6 }),
        P0(t, e, n, c, 1));
    }),
    a.put("no_entry", 384, 192, (t, e, n) => {
      (Tt(t, e, n, c, "#eae6da", "#7a1d1a"),
        J(t, "NO ENTRY", e / 2, 72, 56, { color: "#7a1d1a" }),
        J(t, "PASSENGERS MUST NOT", e / 2, 128, 25, {
          color: "#222",
          weight: "normal",
        }),
        J(t, "PASS THIS POINT", e / 2, 158, 25, {
          color: "#222",
          weight: "normal",
        }),
        P0(t, e, n, c, 1));
    }),
    a.put("danger_rail", 384, 256, (t, e, n) => {
      ((t.fillStyle = "#e8c832"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#151512"),
        t.beginPath(),
        t.moveTo(e / 2, 22),
        t.lineTo(e / 2 + 70, 140),
        t.lineTo(e / 2 - 70, 140),
        t.closePath(),
        t.fill(),
        (t.fillStyle = "#e8c832"),
        t.beginPath(),
        t.moveTo(e / 2, 46),
        t.lineTo(e / 2 + 50, 128),
        t.lineTo(e / 2 - 50, 128),
        t.closePath(),
        t.fill(),
        (t.fillStyle = "#151512"),
        t.beginPath(),
        t.moveTo(e / 2 + 8, 60),
        t.lineTo(e / 2 - 14, 98),
        t.lineTo(e / 2 + 2, 98),
        t.lineTo(e / 2 - 8, 124),
        t.lineTo(e / 2 + 16, 86),
        t.lineTo(e / 2, 86),
        t.closePath(),
        t.fill(),
        J(t, "DANGER", e / 2, 172, 40, { color: "#151512", font: R0 }),
        J(t, "LIVE RAIL", e / 2, 214, 34, { color: "#151512", font: R0 }),
        P0(t, e, n, c, 1.2));
    }),
    a.put("route", 1024, 256, (t, e, n) => {
      (Tt(t, e, n, c, "#ece4cf", "#1d4644", !1),
        vt(t, 70, 64, 40),
        J(t, "LINE 4", 210, 66, 50, { color: "#1d4644", spacing: 3 }));
      const r = ["ASHWOOD", "MILLBANK", "ST. AGNES", "PARKGATE"],
        u = 160;
      ((t.fillStyle = "#6b1d1a"),
        t.fillRect(110, u - 9, e - 220, 18),
        r.forEach((b, M) => {
          const x = 110 + (M * (e - 220)) / 3;
          ((t.fillStyle = "#ece4cf"),
            t.beginPath(),
            t.arc(x, u, 20, 0, Math.PI * 2),
            t.fill(),
            (t.strokeStyle = "#6b1d1a"),
            (t.lineWidth = 7),
            t.stroke(),
            J(t, b, x, u + 50, 30, {
              color: "#222",
              weight: M === 0 ? "bold" : "normal",
            }));
        }),
        J(t, "YOU ARE HERE", 110, u - 44, 20, { color: "#6b1d1a" }),
        P0(t, e, n, c, 1));
    }),
    a.put("poster_cola", 340, 512, (t, e, n) => {
      const r = t.createLinearGradient(0, 0, 0, n);
      (r.addColorStop(0, "#b4482c"),
        r.addColorStop(1, "#7a2a1c"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "rgba(255,230,200,0.85)"),
        t.beginPath(),
        t.moveTo(e / 2 - 34, 430),
        t.lineTo(e / 2 + 34, 430),
        t.lineTo(e / 2 + 34, 260),
        t.quadraticCurveTo(e / 2 + 34, 210, e / 2 + 14, 180),
        t.lineTo(e / 2 + 12, 120),
        t.lineTo(e / 2 - 12, 120),
        t.lineTo(e / 2 - 14, 180),
        t.quadraticCurveTo(e / 2 - 34, 210, e / 2 - 34, 260),
        t.closePath(),
        t.fill(),
        (t.fillStyle = "#b4482c"),
        t.fillRect(e / 2 - 34, 290, 68, 60),
        J(t, "H", e / 2, 322, 40, { color: "#f4e4cc", font: ft }),
        J(t, "HALDEN", e / 2, 52, 66, {
          color: "#f6e8d0",
          font: ft,
          spacing: 4,
        }),
        J(t, "COLA", e / 2, 100, 40, {
          color: "#f6e8d0",
          font: ft,
          spacing: 14,
        }),
        J(t, "Ice cold. Always.", e / 2, 470, 30, {
          color: "#f6e8d0",
          font: ft,
          weight: "italic",
        }),
        (t.fillStyle = "rgba(235,225,205,0.35)"),
        t.fillRect(0, 0, e, n),
        P0(t, e, n, c, 1.4),
        (t.fillStyle = "#2a2a28"),
        t.beginPath(),
        t.moveTo(e, n * 0.62),
        t.lineTo(e * 0.7, n),
        t.lineTo(e, n),
        t.fill());
    }),
    a.put("poster_coast", 340, 512, (t, e, n) => {
      const r = t.createLinearGradient(0, 0, 0, 300);
      (r.addColorStop(0, "#5aa0b8"),
        r.addColorStop(1, "#f0d9a0"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, 300),
        (t.fillStyle = "#e8a040"),
        t.beginPath(),
        t.arc(e * 0.68, 210, 46, 0, Math.PI * 2),
        t.fill(),
        (t.fillStyle = "#2f6f88"),
        t.fillRect(0, 290, e, 120),
        (t.fillStyle = "#e8d8a8"),
        t.beginPath(),
        t.moveTo(0, 380),
        t.quadraticCurveTo(e * 0.5, 340, e, 400),
        t.lineTo(e, n),
        t.lineTo(0, n),
        t.fill());
      for (let u = 0; u < 5; u++)
        ((t.strokeStyle = "rgba(255,255,255,0.6)"),
          (t.lineWidth = 3),
          t.beginPath(),
          t.moveTo(20 + u * 60, 320 + u * 8),
          t.lineTo(60 + u * 60, 318 + u * 8),
          t.stroke());
      (J(t, "VISIT THE", e / 2, 48, 34, {
        color: "#1d3a48",
        font: nt,
        spacing: 8,
      }),
        J(t, "COAST", e / 2, 100, 78, {
          color: "#1d3a48",
          font: nt,
          spacing: 6,
        }),
        J(t, "by Line 4 and Coastal Rail", e / 2, 470, 22, {
          color: "#3a3020",
          font: nt,
          weight: "normal",
        }),
        (t.fillStyle = "rgba(240,235,220,0.42)"),
        t.fillRect(0, 0, e, n),
        P0(t, e, n, c, 1.3));
    }),
    a.put("poster_film", 340, 512, (t, e, n) => {
      ((t.fillStyle = "#121418"), t.fillRect(0, 0, e, n));
      const r = t.createRadialGradient(e / 2, 200, 10, e / 2, 200, 200);
      (r.addColorStop(0, "rgba(200,60,50,0.9)"),
        r.addColorStop(1, "rgba(40,10,10,0)"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#050505"),
        t.beginPath(),
        t.ellipse(e / 2, 150, 34, 42, 0, 0, Math.PI * 2),
        t.fill(),
        t.beginPath(),
        t.moveTo(e / 2 - 70, 330),
        t.quadraticCurveTo(e / 2, 170, e / 2 + 70, 330),
        t.lineTo(e / 2 + 40, 400),
        t.lineTo(e / 2 - 40, 400),
        t.fill(),
        J(t, "THE LAST", e / 2, 420, 40, {
          color: "#e8d8c0",
          font: ft,
          spacing: 10,
        }),
        J(t, "DANCE", e / 2, 462, 52, {
          color: "#d84a3a",
          font: ft,
          spacing: 12,
        }),
        J(t, "NOW SHOWING  -  THE REGENT", e / 2, 496, 15, {
          color: "#a89880",
          font: nt,
          weight: "normal",
        }),
        (t.fillStyle = "rgba(220,215,200,0.22)"),
        t.fillRect(0, 0, e, n),
        P0(t, e, n, c, 1.2, "60,50,40"));
    }),
    a.put("poster_missing", 340, 480, (t, e, n) => {
      ((t.fillStyle = "#eeeae0"),
        t.fillRect(0, 0, e, n),
        J(t, "MISSING", e / 2, 52, 74, {
          color: "#b01a14",
          font: "Impact, Arial Black, sans-serif",
          weight: "normal",
          spacing: 4,
        }),
        (t.fillStyle = "#9a958a"),
        t.fillRect(70, 96, 200, 210));
      const r = t.createLinearGradient(0, 96, 0, 306);
      (r.addColorStop(0, "#c8c0b0"),
        r.addColorStop(1, "#6a645a"),
        (t.fillStyle = r),
        t.fillRect(76, 102, 188, 198),
        (t.fillStyle = "#4a4038"),
        t.beginPath(),
        t.ellipse(170, 180, 46, 56, 0, 0, Math.PI * 2),
        t.fill(),
        t.beginPath(),
        t.ellipse(170, 300, 80, 60, 0, Math.PI, 0),
        t.fill(),
        (t.fillStyle = "#d8c8b0"),
        t.beginPath(),
        t.ellipse(170, 190, 32, 40, 0, 0, Math.PI * 2),
        t.fill(),
        Wt(
          t,
          [
            "EMMA HOLT, aged 7",
            "Last seen at ASHWOOD station",
            "on Tuesday evening, wearing a",
            "red coat and yellow boots.",
          ],
          30,
          322,
          21,
          26,
          {
            color: "#1a1a1a",
            weight: "bold",
            font: "Arial, sans-serif",
            maxW: 290,
          },
        ),
        Wt(
          t,
          ["If you have seen her please", "call 0800 731 044. PLEASE."],
          30,
          430,
          19,
          23,
          { color: "#333", font: "Arial, sans-serif", maxW: 290 },
        ),
        (t.fillStyle = "rgba(210,200,170,0.6)"));
      for (const [u, b] of [
        [0, 0],
        [e - 60, 0],
        [0, n - 22],
        [e - 60, n - 22],
      ])
        t.fillRect(u, b, 60, 22);
      P0(t, e, n, c, 0.6);
    }),
    a.put("notice_evac", 420, 600, (t, e, n) => {
      ((t.fillStyle = "#f2efe4"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#1a1a1a"),
        t.fillRect(0, 0, e, 64),
        J(t, "EMERGENCY AUTHORITY", e / 2, 34, 30, {
          color: "#f2efe4",
          font: R0,
          spacing: 3,
        }),
        (t.fillStyle = "#c8241a"),
        t.fillRect(0, 64, e, 70),
        J(t, "EVACUATION ORDER", e / 2, 100, 40, {
          color: "#fff",
          font: R0,
          spacing: 2,
        }),
        Wt(
          t,
          [
            "By order of the Emergency Authority, ALL",
            "residents of the ASHWOOD, MILLBANK and",
            "ST. AGNES districts must leave their homes",
            "IMMEDIATELY.",
            "",
            "Proceed on foot to the designated",
            "EVACUATION POINT at PARKGATE PARK.",
            "Air evacuation operates from 05:00.",
            "",
            "Bring identification, water and essential",
            "medication only. Do not return home.",
            "Do NOT approach infected persons.",
            "Do NOT attempt to help the injured.",
          ],
          26,
          152,
          21,
          27,
          { color: "#1a1a1a", font: "Arial, sans-serif", maxW: 370 },
        ),
        (t.strokeStyle = "#c8241a"),
        (t.lineWidth = 4),
        t.strokeRect(250, 500, 140, 70),
        J(t, "LINE 4", 320, 520, 20, { color: "#c8241a", font: R0 }),
        J(t, "SUSPENDED", 320, 548, 22, { color: "#c8241a", font: R0 }),
        P0(t, e, n, c, 0.7));
    }),
    a.put("notice_service", 420, 300, (t, e, n) => {
      ((t.fillStyle = "#ece6d4"),
        t.fillRect(0, 0, e, n),
        vt(t, 50, 46, 30),
        J(t, "SERVICE NOTICE", 250, 46, 34, { color: "#1d4644", font: nt }),
        Wt(
          t,
          [
            "Owing to the emergency, services on",
            "Line 4 are suspended until further",
            "notice. Automatic trains may still run.",
            "Keep back from the platform edge.",
          ],
          26,
          100,
          21,
          30,
          { color: "#222", font: nt, maxW: 370 },
        ),
        P0(t, e, n, c, 1.2));
    }),
    a.put("clock", 256, 256, (t, e, n) => {
      ((t.fillStyle = "#e9e4d6"),
        t.beginPath(),
        t.arc(128, 128, 126, 0, Math.PI * 2),
        t.fill());
      for (let r = 0; r < 60; r++) {
        const u = (r / 60) * Math.PI * 2,
          b = r % 5 === 0;
        (t.save(),
          t.translate(128, 128),
          t.rotate(u),
          (t.fillStyle = "#1a1a1a"),
          t.fillRect(-(b ? 4 : 1.2), -118, b ? 8 : 2.4, b ? 26 : 9),
          t.restore());
      }
      (vt(t, 128, 186, 14),
        J(t, "ASHWOOD", 128, 80, 14, { color: "#333", font: nt, spacing: 3 }),
        P0(t, e, n, c, 0.6));
    }));
  const o = (t, e, n, r) => {
      ((t.fillStyle = r), t.fillRect(0, 0, e, n));
    },
    s = (t, e, n, r, u, b, M, x = "rgba(40,40,40,0.55)") => {
      const w = (r - e) / b;
      for (let p = 0; p < b; p++)
        for (let S = n; S < u; S += 7) {
          const y = w - 10 - (M() < 0.15 ? M() * w * 0.5 : 0);
          ((t.fillStyle = x), t.fillRect(e + p * w + 4, S, y, 3));
        }
    };
  (a.put("news1", 360, 500, (t, e, n) => {
    (o(t, e, n, "#d9d5c8"),
      J(t, "THE CITY HERALD", e / 2, 34, 34, {
        color: "#1a1a1a",
        font: ft,
        spacing: 2,
      }),
      (t.fillStyle = "#1a1a1a"),
      t.fillRect(14, 56, e - 28, 3),
      J(t, "CITY SEALED", e / 2, 96, 50, {
        color: "#111",
        font: "Impact, Arial Black, sans-serif",
        weight: "normal",
      }),
      J(t, "Army closes bridges as sickness spreads", e / 2, 132, 17, {
        color: "#222",
        font: ft,
        weight: "italic",
      }),
      (t.fillStyle = "#6e6c66"),
      t.fillRect(14, 150, e - 28, 150),
      (t.fillStyle = "#3a3936"),
      t.fillRect(40, 190, 120, 110),
      t.fillRect(200, 210, 90, 90),
      s(t, 14, 312, e - 14, n - 14, 3, c),
      P0(t, e, n, c, 0.5));
  }),
    a.put("news2", 360, 500, (t, e, n) => {
      (o(t, e, n, "#dcd6c4"),
        J(t, "DAILY POST", e / 2, 36, 40, {
          color: "#a01812",
          font: "Impact, Arial Black, sans-serif",
          weight: "normal",
          spacing: 3,
        }),
        J(t, "EVACUATE", e / 2, 98, 62, {
          color: "#111",
          font: "Impact, Arial Black, sans-serif",
          weight: "normal",
        }),
        J(t, "‘Do not go out after dark’", e / 2, 140, 20, {
          color: "#222",
          font: ft,
          weight: "bold",
        }),
        s(t, 14, 160, e - 14, n - 14, 4, c),
        (t.fillStyle = "#5e5c56"),
        t.fillRect(190, 200, 156, 120),
        P0(t, e, n, c, 0.6));
    }),
    a.put("leaflet", 240, 340, (t, e, n) => {
      (o(t, e, n, "#eeebe2"),
        (t.fillStyle = "#c8241a"),
        t.fillRect(0, 0, e, 56),
        J(t, "EMERGENCY", e / 2, 30, 30, { color: "#fff", font: R0 }),
        Wt(
          t,
          [
            "1. Stay indoors.",
            "2. Lock doors and windows.",
            "3. Do not approach the sick.",
            "4. Go to your nearest",
            "    EVACUATION POINT.",
          ],
          16,
          76,
          17,
          24,
          { color: "#222", font: "Arial, sans-serif", maxW: 208 },
        ),
        s(t, 12, 210, e - 12, n - 20, 2, c, "rgba(60,60,60,0.45)"),
        P0(t, e, n, c, 0.5));
    }),
    a.put("badge", 256, 256, (t, e, n) => {
      ((t.fillStyle = "#1a1e22"),
        t.fillRect(0, 0, e, n),
        vt(t, e / 2, n / 2, 110));
    }),
    a.put("kiosk", 640, 96, (t, e, n) => {
      ((t.fillStyle = "#2a3a30"),
        t.fillRect(0, 0, e, n),
        J(t, "NEWS  ·  TOBACCO  ·  SWEETS", e / 2, n / 2 + 2, 44, {
          color: "#e8d8a8",
          font: nt,
          spacing: 3,
        }),
        P0(t, e, n, c, 1.2));
    }),
    a.put("pg_name", 1280, 192, (t, e, n) => {
      ((t.fillStyle = "#20262c"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#8a2a24"),
        t.fillRect(0, n - 22, e, 10),
        vt(t, 96, n / 2 - 6, 62),
        J(t, "PARKGATE", e / 2 + 40, n / 2 - 4, 120, {
          color: "#f2f0ea",
          font: R0,
          weight: "600",
          spacing: 10,
        }),
        P0(t, e, n, c, 0.6, "10,10,10"));
    }),
    a.put("pg_wayout", 768, 160, (t, e, n) => {
      ((t.fillStyle = "#e9c43a"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#151512"),
        t.fillRect(0, 0, 150, n),
        se(t, 75, n / 2, 100, -Math.PI / 2, "#e9c43a"),
        J(t, "Way out", 200, 62, 62, {
          color: "#151512",
          font: R0,
          align: "left",
          weight: "600",
        }),
        J(t, "Parkgate Park  ·  Park Road", 200, 122, 34, {
          color: "#151512",
          font: R0,
          align: "left",
          weight: "normal",
        }),
        P0(t, e, n, c, 0.5));
    }),
    a.put("pg_terminate", 768, 128, (t, e, n) => {
      ((t.fillStyle = "#20262c"),
        t.fillRect(0, 0, e, n),
        J(t, "ALL TRAINS TERMINATE HERE", e / 2, n / 2, 48, {
          color: "#f2f0ea",
          font: R0,
          weight: "600",
          spacing: 2,
        }),
        P0(t, e, n, c, 0.5, "10,10,10"));
    }),
    a.put("pg_tickets", 512, 128, (t, e, n) => {
      ((t.fillStyle = "#20262c"),
        t.fillRect(0, 0, e, n),
        J(t, "Tickets & Information", e / 2, n / 2, 42, {
          color: "#f2f0ea",
          font: R0,
          weight: "600",
        }));
    }),
    a.put("pg_platform", 512, 160, (t, e, n) => {
      ((t.fillStyle = "#20262c"),
        t.fillRect(0, 0, e, n),
        vt(t, 70, n / 2, 46),
        J(t, "Platform 1", 300, n / 2, 58, {
          color: "#f2f0ea",
          font: R0,
          weight: "600",
        }),
        se(t, e - 40, n / 2, 50, Math.PI / 2, "#e9c43a"));
    }),
    a.put("police_tape", 1024, 64, (t, e, n) => {
      ((t.fillStyle = "#e8cc22"), t.fillRect(0, 0, e, n));
      for (let r = -n; r < e; r += 64)
        ((t.fillStyle = "#121212"),
          t.beginPath(),
          t.moveTo(r, n),
          t.lineTo(r + 24, n),
          t.lineTo(r + 24 + n, 0),
          t.lineTo(r + n, 0),
          t.fill());
      ((t.fillStyle = "#e8cc22"),
        t.fillRect(0, 14, e, 36),
        J(
          t,
          "POLICE LINE  DO NOT CROSS      POLICE LINE  DO NOT CROSS",
          e / 2,
          n / 2 + 1,
          28,
          { color: "#121212", font: R0, weight: "600" },
        ));
    }),
    a.put("pg_quarantine", 420, 300, (t, e, n) => {
      ((t.fillStyle = "#d8d2c0"),
        t.fillRect(0, 0, e, n),
        (t.strokeStyle = "#b01a14"),
        (t.lineWidth = 10),
        t.strokeRect(14, 14, e - 28, n - 28),
        J(t, "DO NOT GO", e / 2, 92, 60, {
          color: "#141414",
          font: "Impact, Arial Black, sans-serif",
          weight: "normal",
        }),
        J(t, "DOWN THERE", e / 2, 160, 60, {
          color: "#141414",
          font: "Impact, Arial Black, sans-serif",
          weight: "normal",
        }),
        J(t, "THEY ARE IN THE TUNNELS", e / 2, 232, 28, {
          color: "#b01a14",
          font: "Arial, sans-serif",
        }),
        P0(t, e, n, c, 1.1));
    }),
    a.put("pg_ad1", 600, 400, (t, e, n) => {
      const r = t.createLinearGradient(0, 0, e, n);
      (r.addColorStop(0, "#20384a"),
        r.addColorStop(1, "#0c1620"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#c8d8e0"),
        t.beginPath(),
        t.ellipse(e * 0.72, n * 0.5, 120, 120, 0, 0, Math.PI * 2),
        t.fill(),
        (t.fillStyle = "#20384a"),
        t.beginPath(),
        t.ellipse(e * 0.76, n * 0.46, 96, 100, 0, 0, Math.PI * 2),
        t.fill(),
        J(t, "MIRA", 160, 140, 88, {
          color: "#e8eef2",
          font: R0,
          weight: "600",
          spacing: 8,
        }),
        J(t, "Insurance for", 160, 220, 34, {
          color: "#a8c0cc",
          font: R0,
          weight: "normal",
        }),
        J(t, "whatever comes.", 160, 262, 34, {
          color: "#a8c0cc",
          font: R0,
          weight: "normal",
        }));
    }),
    a.put("pg_ad2", 600, 400, (t, e, n) => {
      ((t.fillStyle = "#e8e2d4"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#c84030"),
        t.fillRect(0, n - 120, e, 120));
      for (let r = 0; r < 6; r++)
        ((t.fillStyle = [
          "#2a6a58",
          "#e8a040",
          "#c84030",
          "#3a5a8a",
          "#e8c43a",
          "#6a3a7a",
        ][r]),
          t.beginPath(),
          t.arc(90 + r * 84, 150, 34, 0, Math.PI * 2),
          t.fill());
      (J(t, "CITY ZOO", e / 2, 60, 64, {
        color: "#1a1a1a",
        font: R0,
        weight: "600",
        spacing: 6,
      }),
        J(t, "Open every day 9 - 6", e / 2, n - 60, 40, {
          color: "#fff",
          font: R0,
          weight: "normal",
        }));
    }));
  const f = new ne(2048, 256, { bg: "#000" });
  f.put("frieze", 2048, 256, (t, e, n) => {
    const u = e / 8,
      b = n / 8,
      M = document.createElement("canvas");
    ((M.width = u), (M.height = b));
    const x = M.getContext("2d");
    ((x.fillStyle = "#000"),
      x.fillRect(0, 0, u, b),
      (x.fillStyle = "#fff"),
      (x.font = `bold 22px ${nt}`),
      (x.textAlign = "center"),
      (x.textBaseline = "middle"),
      "letterSpacing" in x && (x.letterSpacing = "5px"),
      x.fillText("ASHWOOD", u / 2, b / 2 + 1));
    const w = x.getImageData(0, 0, u, b).data;
    for (let p = 0; p < b; p++)
      for (let S = 0; S < u; S++) {
        const y = w[(p * u + S) * 4] > 110,
          L = p <= 1 || p >= b - 2,
          v = p === 3 || p === 4 || p === b - 4 || p === b - 5,
          C = 0.88 + c() * 0.2;
        let k = y
          ? [222, 208, 172]
          : L
            ? [222, 208, 172]
            : v
              ? [96, 30, 28]
              : [30, 76, 74];
        (c() < 0.012 && (k = [58, 54, 48]),
          (t.fillStyle = `rgb(${k.map((R) => Math.round(R * C)).join(",")})`),
          t.fillRect(S * 8 + 1, p * 8 + 1, 7, 7),
          (t.fillStyle = "rgba(255,255,255,0.07)"),
          t.fillRect(S * 8 + 1, p * 8 + 1, 5, 2));
      }
    P0(t, e, n, c, 0.9);
  });
  const h = new ne(1024, 1536, { alpha: !0 }),
    d = (t, e, n, r, u, b) => {
      (J(t, e, n, r, u, {
        font: "Arial Black, Impact, sans-serif",
        color: b,
        weight: "normal",
        spacing: u * 0.08,
      }),
        (t.globalCompositeOperation = "destination-out"),
        (t.fillStyle = "#000"),
        (t.font = `${u}px Arial Black`));
      const M = t.measureText(e).width;
      for (let x = 0; x < e.length; x++) {
        const w = n - M / 2 + ((x + 0.5) * M) / e.length;
        t.fillRect(w - 1.5, r - u * 0.06, 3, u * 0.12);
      }
      t.globalCompositeOperation = "source-over";
      for (let x = 0; x < 200; x++)
        ((t.fillStyle = b.replace("rgb", "rgba").replace(")", ",0.25)")),
          t.fillRect(
            n - M / 2 + c() * M,
            r - u * 0.6 + c() * u * 1.2,
            1.5,
            1.5,
          ));
    };
  h.put("st_exit", 512, 160, (t, e, n) => {
    (d(t, "EMERGENCY EXIT 4", e / 2, 56, 52, "rgb(214,190,72)"),
      d(t, "LINE 4", e / 2, 122, 46, "rgb(214,190,72)"));
  });
  for (const t of [2, 4, 6, 8])
    h.put("st_d" + t, 160, 80, (e, n, r) => {
      ((e.fillStyle = "rgba(220,214,200,0.9)"),
        e.fillRect(6, r / 2 - 3, 46, 6),
        d(e, "-" + t + " m", 104, r / 2, 34, "rgb(220,214,200)"));
    });
  h.put("st_up", 160, 160, (t, e, n) => {
    ((t.fillStyle = "rgba(214,190,72,0.9)"),
      t.beginPath(),
      t.moveTo(80, 18),
      t.lineTo(140, 90),
      t.lineTo(104, 90),
      t.lineTo(104, 146),
      t.lineTo(56, 146),
      t.lineTo(56, 90),
      t.lineTo(20, 90),
      t.closePath(),
      t.fill());
  });
  const l = (t, e, n, r) => {
    const u = Ve(r.length * 97 + e);
    if (r === "pool") {
      for (let b = 0; b < 22; b++) {
        const M = e / 2 + (u() - 0.5) * e * 0.45,
          x = n / 2 + (u() - 0.5) * n * 0.35,
          w = (0.08 + u() * 0.2) * e,
          p = t.createRadialGradient(M, x, 0, M, x, w);
        (p.addColorStop(0, "rgba(44,4,3,0.96)"),
          p.addColorStop(0.7, "rgba(38,3,2,0.92)"),
          p.addColorStop(1, "rgba(32,3,2,0)"),
          (t.fillStyle = p),
          t.beginPath(),
          t.ellipse(M, x, w, w * (0.6 + u() * 0.4), u() * 3, 0, Math.PI * 2),
          t.fill());
      }
      for (let b = 0; b < 40; b++)
        ((t.fillStyle = "rgba(40,3,3,0.85)"),
          t.beginPath(),
          t.arc(
            e / 2 + (u() - 0.5) * e * 0.9,
            n / 2 + (u() - 0.5) * n * 0.9,
            1 + u() * 5,
            0,
            Math.PI * 2,
          ),
          t.fill());
    } else if (r === "smear") {
      for (let b = 0; b < 4; b++) {
        const M = n * (0.2 + 0.15 * b + u() * 0.05);
        for (let x = 10; x < e - 10; x += 2) {
          const w = 0.75 * (1 - x / e) + 0.1;
          ((t.fillStyle = `rgba(${70 + u() * 20},5,5,${w * (0.6 + u() * 0.4)})`),
            t.fillRect(
              x,
              M + Math.sin(x * 0.02 + b) * 6 + (u() - 0.5) * 3,
              2,
              8 + u() * 8 * (1 - x / e),
            ));
        }
      }
      for (let b = 0; b < 12; b++) {
        const M = 20 + u() * e * 0.4,
          x = n * 0.6 + u() * n * 0.2;
        ((t.fillStyle = "rgba(60,4,4,0.8)"),
          t.fillRect(M, x, 3, 20 + u() * 60));
      }
    } else if (r === "hand") {
      ((t.fillStyle = "rgba(86,6,6,0.92)"),
        t.beginPath(),
        t.ellipse(e * 0.52, n * 0.64, e * 0.2, n * 0.15, 0.05, 0, Math.PI * 2),
        t.fill());
      for (const [b, M, x] of [
        [-0.14, 0.26, -0.16],
        [-0.05, 0.31, -0.05],
        [0.04, 0.3, 0.04],
        [0.13, 0.24, 0.13],
      ])
        (t.save(),
          t.translate(e * (0.53 + b), n * 0.53),
          t.rotate(x),
          t.beginPath(),
          t.ellipse(0, (-n * M) / 2, e * 0.045, (n * M) / 2, 0, 0, Math.PI * 2),
          t.fill(),
          t.restore());
      (t.save(),
        t.translate(e * 0.3, n * 0.66),
        t.rotate(-0.95),
        t.beginPath(),
        t.ellipse(0, -n * 0.09, e * 0.052, n * 0.11, 0, 0, Math.PI * 2),
        t.fill(),
        t.restore());
      for (let b = 0; b < 5; b++)
        t.fillRect(
          e * (0.38 + u() * 0.28),
          n * 0.74,
          2 + u() * 2,
          n * (0.06 + u() * 0.18),
        );
      t.globalCompositeOperation = "destination-out";
      for (let b = 0; b < 160; b++)
        ((t.fillStyle = "rgba(0,0,0,0.55)"),
          t.fillRect(u() * e, u() * n, 1.5, 1.5));
      t.globalCompositeOperation = "source-over";
    } else if (r === "drag")
      for (let b = 0; b < e; b += 2) {
        const M = 0.6 * Math.sin((Math.PI * b) / e);
        for (const x of [n * 0.35, n * 0.62])
          ((t.fillStyle = `rgba(${60 + u() * 20},5,5,${M * (0.5 + u() * 0.5)})`),
            t.fillRect(
              b,
              x + Math.sin(b * 0.015) * 10 + (u() - 0.5) * 6,
              2,
              10 + u() * 16,
            ));
      }
    else if (r === "spatter")
      for (let b = 0; b < 90; b++) {
        const M = u() ** 3 * 14 + 1,
          x = e / 2 + (u() - 0.5) * e * 0.9 * u(),
          w = n / 2 + (u() - 0.5) * n * 0.9 * u();
        ((t.fillStyle = `rgba(${70 + u() * 30},6,6,${0.6 + u() * 0.35})`),
          t.beginPath(),
          t.ellipse(x, w, M, M * (0.5 + u() * 0.5), u() * 3, 0, Math.PI * 2),
          t.fill());
      }
  };
  (h.put("b_pool", 256, 256, (t, e, n) => l(t, e, n, "pool")),
    h.put("b_smear", 384, 192, (t, e, n) => l(t, e, n, "smear")),
    h.put("b_hand", 128, 160, (t, e, n) => l(t, e, n, "hand")),
    h.put("b_drag", 512, 128, (t, e, n) => l(t, e, n, "drag")),
    h.put("b_spatter", 256, 256, (t, e, n) => l(t, e, n, "spatter")),
    h.put("graf1", 512, 160, (t, e, n) => {
      (t.save(),
        t.rotate(-0.04),
        J(t, "THE DEAD WALK", e / 2, n / 2 + 10, 64, {
          font: "Impact, sans-serif",
          weight: "normal",
          color: "rgba(150,20,16,0.9)",
        }),
        t.restore());
      for (let r = 0; r < 9; r++)
        ((t.fillStyle = "rgba(150,20,16,0.8)"),
          t.fillRect(60 + r * 46, n / 2 + 30, 3, 20 + ta(r) * 50));
    }),
    h.put("graf2", 384, 128, (t, e, n) => {
      J(t, "GOD HELP US", e / 2, n / 2, 46, {
        font: "Impact, sans-serif",
        weight: "normal",
        color: "rgba(230,230,225,0.85)",
      });
    }),
    h.put("damp", 256, 256, (t, e, n) => {
      for (let r = 0; r < 30; r++) {
        const u = e / 2 + (c() - 0.5) * e * 0.5,
          b = n * 0.3 + c() * n * 0.4,
          M = 20 + c() * 70,
          x = t.createRadialGradient(u, b, 0, u, b, M);
        (x.addColorStop(0, "rgba(20,24,18,0.18)"),
          x.addColorStop(1, "rgba(20,24,18,0)"),
          (t.fillStyle = x),
          t.fillRect(0, 0, e, n));
      }
    }),
    h.put("steps", 256, 256, (t, e, n) => {
      for (let r = 0; r < 7; r++)
        (t.save(),
          t.translate(40 + r * 30, 230 - r * 32),
          t.rotate(-0.6 + (r % 2) * 0.12),
          (t.fillStyle = "rgba(70,8,8,0.7)"),
          t.beginPath(),
          t.ellipse(0, 0, 9, 22, 0, 0, Math.PI * 2),
          t.fill(),
          t.beginPath(),
          t.ellipse(0, 26, 8, 9, 0, 0, Math.PI * 2),
          t.fill(),
          t.restore());
    }));
  const i = new ne(1024, 1024, { bg: "#000" });
  return (
    i.put("exit", 256, 128, (t, e, n) => {
      ((t.fillStyle = "#0a8a3a"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#e8fff0"),
        t.fillRect(24, 22, 40, 84),
        (t.fillStyle = "#0a8a3a"),
        t.fillRect(30, 28, 28, 72),
        (t.fillStyle = "#e8fff0"),
        t.beginPath(),
        t.arc(98, 34, 10, 0, Math.PI * 2),
        t.fill(),
        (t.lineWidth = 10),
        (t.strokeStyle = "#e8fff0"),
        (t.lineCap = "round"),
        t.beginPath(),
        t.moveTo(94, 48),
        t.lineTo(86, 76),
        t.lineTo(70, 98),
        t.moveTo(86, 76),
        t.lineTo(104, 88),
        t.lineTo(108, 108),
        t.moveTo(92, 56),
        t.lineTo(76, 62),
        t.moveTo(92, 56),
        t.lineTo(110, 66),
        t.stroke(),
        J(t, "EXIT", 186, 66, 56, {
          color: "#e8fff0",
          font: R0,
          weight: "600",
        }));
    }),
    i.put("drinks", 256, 512, (t, e, n) => {
      const r = t.createLinearGradient(0, 0, 0, n);
      (r.addColorStop(0, "#c42a1c"),
        r.addColorStop(1, "#7a1410"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#f4ecd8"),
        t.fillRect(16, 16, e - 32, 70),
        J(t, "HALDEN", e / 2, 52, 44, { color: "#b42a1c", font: ft }));
      for (let u = 0; u < 4; u++)
        for (let b = 0; b < 3; b++) {
          const M = 34 + b * 66,
            x = 120 + u * 92;
          ((t.fillStyle = "rgba(255,240,220,0.9)"),
            t.fillRect(M, x, 46, 70),
            (t.fillStyle = ["#c42a1c", "#2a6a3a", "#e8a020", "#3a4a9a"][
              (u + b) % 4
            ]),
            t.fillRect(M + 6, x + 18, 34, 36));
        }
      ((t.fillStyle = "rgba(255,255,255,0.15)"),
        t.fillRect(20, 100, 30, n - 120));
    }),
    i.put("adlit", 300, 200, (t, e, n) => {
      const r = t.createLinearGradient(0, 0, e, 0);
      (r.addColorStop(0, "#f0e8d8"),
        r.addColorStop(1, "#d8e4ec"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, n),
        J(t, "SEE YOU", e / 2, 70, 44, {
          color: "#1a2a3a",
          font: R0,
          weight: "600",
        }),
        J(t, "ON THE OTHER SIDE", e / 2, 120, 28, {
          color: "#c84030",
          font: R0,
          weight: "600",
        }),
        J(t, "Coastal Rail", e / 2, 168, 20, {
          color: "#4a5a6a",
          font: R0,
          weight: "normal",
        }));
    }),
    i.put("gate_ok", 64, 64, (t, e, n) => {
      ((t.fillStyle = "#041a08"),
        t.fillRect(0, 0, e, n),
        se(t, e / 2, n / 2, 44, -Math.PI / 2, "#3aff6a"));
    }),
    i.put("gate_no", 64, 64, (t, e, n) => {
      ((t.fillStyle = "#1a0404"),
        t.fillRect(0, 0, e, n),
        (t.strokeStyle = "#ff3a2a"),
        (t.lineWidth = 9),
        t.beginPath(),
        t.moveTo(16, 16),
        t.lineTo(48, 48),
        t.moveTo(48, 16),
        t.lineTo(16, 48),
        t.stroke());
    }),
    i.put("monitor", 192, 128, (t, e, n) => {
      ((t.fillStyle = "#0a1830"),
        t.fillRect(0, 0, e, n),
        J(t, "NO SIGNAL", e / 2, n / 2, 26, {
          color: "#8ab0ff",
          font: "Consolas, monospace",
          weight: "normal",
        }));
    }),
    i.put("white", 32, 32, (t, e, n) => {
      ((t.fillStyle = "#fff"), t.fillRect(0, 0, e, n));
    }),
    {
      signs: { tex: a.pack().texture(), rect: (t) => a.rects[t] },
      frieze: { tex: f.pack().texture(), rect: (t) => f.rects[t] },
      decals: { tex: h.pack().texture(), rect: (t) => h.rects[t] },
      glows: { tex: i.pack().texture(), rect: (t) => i.rects[t] },
    }
  );
}
function ta(c) {
  return (((Math.sin(c * 91.7) * 43758.5453) % 1) + 1) % 1;
}
const Ue = {
  A: "01110100011000111111100011000110001",
  B: "11110100011000111110100011000111110",
  C: "01110100011000010000100001000101110",
  D: "11110100011000110001100011000111110",
  E: "11111100001000011110100001000011111",
  F: "11111100001000011110100001000010000",
  G: "01110100011000010111100011000101111",
  H: "10001100011000111111100011000110001",
  I: "01110001000010000100001000010001110",
  J: "00111000100001000010000101001001100",
  K: "10001100101010011000101001001010001",
  L: "10000100001000010000100001000011111",
  M: "10001110111010110101100011000110001",
  N: "10001100011100110101100111000110001",
  O: "01110100011000110001100011000101110",
  P: "11110100011000111110100001000010000",
  Q: "01110100011000110001101011001001101",
  R: "11110100011000111110101001001010001",
  S: "01111100001000001110000010000111110",
  T: "11111001000010000100001000010000100",
  U: "10001100011000110001100011000101110",
  V: "10001100011000110001100010101000100",
  W: "10001100011000110101101011010101010",
  X: "10001100010101000100010101000110001",
  Y: "10001100010101000100001000010000100",
  Z: "11111000010001000100010001000011111",
  0: "01110100011001110101110011000101110",
  1: "00100011000010000100001000010001110",
  2: "01110100010000100010001000100011111",
  3: "11111000100010000010000011000101110",
  4: "00010001100101010010111110001000010",
  5: "11111100001111000001000011000101110",
  6: "00110010001000011110100011000101110",
  7: "11111000010001000100010000100001000",
  8: "01110100011000101110100011000101110",
  9: "01110100011000101111000010001001100",
  "-": "00000000000000011111000000000000000",
  ".": "00000000000000000000000000110001100",
  ":": "00000011000110000000011000110000000",
  " ": "00000000000000000000000000000000000",
  "'": "00100001000100000000000000000000000",
  "/": "00001000010001000100010001000010000",
  "&": "01100100101010001000101011001001101",
};
function ea({ cols: c = 24, rows: a = 2 } = {}) {
  const h = c * 6 * 6 + 12,
    d = a * 9 * 6 + 12,
    l = document.createElement("canvas");
  ((l.width = h), (l.height = d));
  const i = l.getContext("2d"),
    t = new lo(l);
  ((t.colorSpace = ro), (t.anisotropy = 8));
  const e = ["", ""],
    n = [0, 0];
  let r = !0,
    u = 0;
  const b = () => {
    ((i.fillStyle = "#050302"), i.fillRect(0, 0, h, d));
    for (let M = 0; M < a; M++) {
      const x = (e[M] || "").toUpperCase(),
        p =
          x.length > c
            ? (x + "     " + x).slice(
                n[M] % (x.length + 5),
                (n[M] % (x.length + 5)) + c,
              )
            : (" ".repeat(Math.floor((c - x.length) / 2)) + x).padEnd(c);
      for (let S = 0; S < c; S++) {
        const y = Ue[p[S]] || Ue[" "];
        for (let L = 0; L < 7; L++)
          for (let v = 0; v < 5; v++) {
            const C = y[L * 5 + v] === "1",
              k = 6 + (S * 6 + v) * 6 + 6 / 2,
              R = 6 + (M * 9 + L + 1) * 6 + 6 / 2;
            ((i.fillStyle = C ? "#ffb02a" : "#1c1006"),
              i.beginPath(),
              i.arc(k, R, 6 * 0.38, 0, Math.PI * 2),
              i.fill());
          }
      }
    }
    ((t.needsUpdate = !0), (r = !1));
  };
  return {
    tex: t,
    aspect: h / d,
    set(M) {
      const x = String(M).split(`
`);
      ((e[0] = x[0] || ""), (e[1] = x[1] || ""), (n[0] = n[1] = 0), (r = !0));
    },
    get text() {
      return e.join(`
`);
    },
    tick(M) {
      if (((u += M), u > 0.18)) {
        u = 0;
        let x = !1;
        for (let w = 0; w < a; w++)
          (e[w] || "").length > c && (n[w]++, (x = !0));
        x && (r = !0);
      }
      r && b();
    },
  };
}
const J0 = (c, a, o) => new ot(c, a, o);
new rt();
const Ae = new fo(),
  qe = new Co(),
  Te = new ot(),
  oa = new ot();
function K0(c = [0, 0, 0], a = [0, 0, 0], o = 1) {
  return (
    qe.set(a[0] || 0, a[1] || 0, a[2] || 0, "YXZ"),
    Ae.setFromEuler(qe),
    typeof o == "number" ? Te.set(o, o, o) : Te.set(o[0], o[1], o[2]),
    new rt().compose(oa.set(c[0], c[1], c[2]), Ae, Te)
  );
}
const aa = (c, a, o, s) => c.applyMatrix4(K0(a, o, s));
function T(c, a, o, s, f, h, d = 0, l = 1) {
  const i = s - c,
    t = f - a,
    e = h - o,
    n =
      d > 0
        ? new Vo(
            i,
            t,
            e,
            l + 1,
            Math.min(d, i / 2 - 1e-4, t / 2 - 1e-4, e / 2 - 1e-4),
          )
        : new co(i, t, e);
  return (n.translate((c + s) / 2, (a + f) / 2, (o + h) / 2), io(n));
}
function it(c, a = 1) {
  const o = c.attributes.position,
    s = c.attributes.normal,
    f = new Float32Array(o.count * 2);
  for (let h = 0; h < o.count; h++) {
    const d = o.getX(h),
      l = o.getY(h),
      i = o.getZ(h),
      t = Math.abs(s.getX(h)),
      e = Math.abs(s.getY(h)),
      n = Math.abs(s.getZ(h));
    let r, u;
    (e >= t && e >= n
      ? ((r = d), (u = i))
      : t >= n
        ? ((r = i), (u = l))
        : ((r = d), (u = l)),
      (f[h * 2] = r * a),
      (f[h * 2 + 1] = u * a));
  }
  return (c.setAttribute("uv", new gt(f, 2)), c);
}
function k0(c, a, o, s, f = null) {
  const h = new ue();
  return (
    h.setAttribute("position", new _t([...c, ...a, ...o, ...s], 3)),
    h.setIndex([0, 1, 2, 0, 2, 3]),
    h.computeVertexNormals(),
    f ? h.setAttribute("uv", new _t(f.flat(), 2)) : io(h),
    h
  );
}
function r0(c, a, o, s, f, h) {
  return c === "+z"
    ? k0([o, f, a], [s, f, a], [s, h, a], [o, h, a])
    : c === "-z"
      ? k0([s, f, a], [o, f, a], [o, h, a], [s, h, a])
      : c === "+x"
        ? k0([a, f, s], [a, f, o], [a, h, o], [a, h, s])
        : k0([a, f, o], [a, f, s], [a, h, s], [a, h, o]);
}
function T0(c, a, o, s, f, h = !0) {
  return h
    ? k0([c, f, s], [o, f, s], [o, f, a], [c, f, a])
    : k0([c, f, a], [o, f, a], [o, f, s], [c, f, s]);
}
function j(c, a, o, s = 10, f = o, h = !0) {
  const d = J0(...c),
    l = J0(...a),
    i = d.distanceTo(l),
    t = new D0(f, o, i, s, 1, !h),
    e = t.attributes.uv,
    n = t.attributes.position;
  for (let r = 0; r < e.count; r++)
    e.setXY(r, e.getX(r) * 2 * Math.PI * o, n.getY(r) + i / 2);
  return (
    t.translate(0, i / 2, 0),
    t.applyQuaternion(
      Ae.setFromUnitVectors(J0(0, 1, 0), l.clone().sub(d).normalize()),
    ),
    t.translate(d.x, d.y, d.z),
    t
  );
}
function ko(c, a, o, s = "y", f = Math.PI * 2, h = 8, d = 24, l = 0) {
  const i = new Ot(a, o, h, d, f);
  return (
    l && i.rotateZ(l),
    s === "y" ? i.rotateX(Math.PI / 2) : s === "x" && i.rotateY(Math.PI / 2),
    i.translate(c[0], c[1], c[2]),
    i
  );
}
function $e(
  c,
  a,
  o,
  s,
  f = [0, 1, 0],
  { closed: h = !0, caps: d = !0, smooth: l = 0.5 } = {},
) {
  const i = J0(...a),
    t = J0(...o),
    e = J0(...s).normalize(),
    n = J0(...f).normalize(),
    r = i.distanceTo(t);
  return zt(
    c,
    [
      { p: i, s: e, u: n, t: 0 },
      { p: t, s: e, u: n, t: r },
    ],
    { closed: h, caps: d, smooth: l },
  );
}
function zt(
  c,
  a,
  { closed: o = !0, caps: s = !0, smooth: f = 0.5, vScale: h = 1 } = {},
) {
  const d = c.length,
    l = o ? d : d - 1,
    i = [];
  let t = 0;
  for (let S = 0; S < d; S++) {
    const [y, L] = c[S],
      [v, C] = c[(S + 1) % d];
    t += y * C - v * L;
  }
  const e = o && t < 0 ? -1 : 1;
  for (let S = 0; S < l; S++) {
    const [y, L] = c[S],
      [v, C] = c[(S + 1) % d],
      k = v - y,
      R = C - L,
      W = Math.hypot(k, R) || 1;
    i.push([(e * R) / W, (-e * k) / W, W]);
  }
  const n = [],
    r = [],
    u = [],
    b = [];
  let M = 0;
  for (let S = 0; S < l; S++) {
    const [y, L] = c[S],
      [v, C] = c[(S + 1) % d],
      k = i[S],
      R = (Z) => {
        if (k[0] * Z[0] + k[1] * Z[1] < f) return k;
        const V = k[0] + Z[0],
          I = k[1] + Z[1],
          E = Math.hypot(V, I) || 1;
        return [V / E, I / E];
      },
      W = o || S > 0 ? R(i[(S - 1 + l) % l]) : k,
      Y = o || S < l - 1 ? R(i[(S + 1) % l]) : k,
      $ = n.length / 3;
    for (const Z of a) {
      for (const [H, V, I] of [
        [y, L, W],
        [v, C, Y],
      ])
        (n.push(
          Z.p.x + Z.s.x * H + Z.u.x * V,
          Z.p.y + Z.s.y * H + Z.u.y * V,
          Z.p.z + Z.s.z * H + Z.u.z * V,
        ),
          r.push(
            Z.s.x * I[0] + Z.u.x * I[1],
            Z.s.y * I[0] + Z.u.y * I[1],
            Z.s.z * I[0] + Z.u.z * I[1],
          ));
      u.push(Z.t, M * h, Z.t, (M + k[2]) * h);
    }
    for (let Z = 0; Z < a.length - 1; Z++) {
      const H = $ + Z * 2,
        V = H + 2;
      b.push(H, V, H + 1, H + 1, V, V + 1);
    }
    M += k[2];
  }
  const x = new ue();
  if (
    (x.setAttribute("position", new _t(n, 3)),
    x.setAttribute("normal", new _t(r, 3)),
    x.setAttribute("uv", new _t(u, 2)),
    x.setIndex(b),
    pe(x),
    !(o && s))
  )
    return x;
  const w = [x],
    p = Zo.triangulateShape(
      c.map(([S, y]) => new Wo(S, y)),
      [],
    );
  for (const [S, y] of [
    [0, -1],
    [a.length - 1, 1],
  ]) {
    const L = a[S],
      v = J0().crossVectors(L.s, L.u).normalize();
    (a[a.length - 1].p.clone().sub(a[0].p).dot(v) < 0 && v.negate(),
      v.multiplyScalar(y));
    const C = [],
      k = [],
      R = [];
    for (const [Y, $] of c)
      (C.push(
        L.p.x + L.s.x * Y + L.u.x * $,
        L.p.y + L.s.y * Y + L.u.y * $,
        L.p.z + L.s.z * Y + L.u.z * $,
      ),
        k.push(v.x, v.y, v.z),
        R.push(Y, $));
    const W = new ue();
    (W.setAttribute("position", new _t(C, 3)),
      W.setAttribute("normal", new _t(k, 3)),
      W.setAttribute("uv", new _t(R, 2)),
      W.setIndex(p.flat()),
      pe(W),
      w.push(W));
  }
  return q0(w);
}
function pe(c) {
  const a = c.attributes.position,
    o = c.attributes.normal,
    s = c.index;
  if (!s) return c;
  const f = J0(),
    h = J0(),
    d = J0(),
    l = J0(),
    i = J0(),
    t = J0();
  for (let e = 0; e < s.count; e += 3) {
    const n = s.getX(e),
      r = s.getX(e + 1),
      u = s.getX(e + 2);
    (f.fromBufferAttribute(a, n),
      h.fromBufferAttribute(a, r),
      d.fromBufferAttribute(a, u),
      i.subVectors(h, f).cross(t.subVectors(d, f)),
      l
        .fromBufferAttribute(o, n)
        .add(t.fromBufferAttribute(o, r))
        .add(t.fromBufferAttribute(o, u)),
      i.dot(l) < 0 && (s.setX(e + 1, u), s.setX(e + 2, r)));
  }
  return ((s.needsUpdate = !0), c);
}
function je(c, a, o, s) {
  const f = c / 2,
    h = a / 2,
    d = s / 2;
  return [
    [-h, -f],
    [h, -f],
    [h, -f + o],
    [d, -f + o],
    [d, f - o],
    [h, f - o],
    [h, f],
    [-h, f],
    [-h, f - o],
    [-d, f - o],
    [-d, -f + o],
    [-h, -f + o],
  ];
}
const Ht = { color: [1, 1, 1], aFix: [-1], aH: [1] };
function q0(c) {
  let a = 0,
    o = 0;
  const s = Object.keys(Ht).filter((r) => c.some((u) => u.attributes[r]));
  for (const r of c)
    ((a += r.attributes.position.count),
      (o += r.index ? r.index.count : r.attributes.position.count));
  const f = new Float32Array(a * 3),
    h = new Float32Array(a * 3),
    d = new Float32Array(a * 2),
    l = Object.fromEntries(
      s.map((r) => [r, new Float32Array(a * Ht[r].length)]),
    ),
    i = a > 65535 ? new Uint32Array(o) : new Uint16Array(o);
  let t = 0,
    e = 0;
  for (const r of c) {
    r.attributes.normal || r.computeVertexNormals();
    const u = r.attributes.position.count;
    (f.set(r.attributes.position.array.subarray(0, u * 3), t * 3),
      h.set(r.attributes.normal.array.subarray(0, u * 3), t * 3),
      r.attributes.uv &&
        d.set(r.attributes.uv.array.subarray(0, u * 2), t * 2));
    for (const b of s) {
      const M = Ht[b].length,
        x = l[b],
        w = r.attributes[b];
      if (w)
        for (let p = 0; p < u; p++)
          for (let S = 0; S < M; S++)
            x[(t + p) * M + S] = w.array[p * w.itemSize + S];
      else
        for (let p = 0; p < u; p++)
          for (let S = 0; S < M; S++) x[(t + p) * M + S] = Ht[b][S];
    }
    if (r.index) {
      const b = r.index.array;
      for (let M = 0; M < r.index.count; M++) i[e + M] = b[M] + t;
      e += r.index.count;
    } else {
      for (let b = 0; b < u; b++) i[e + b] = t + b;
      e += u;
    }
    t += u;
  }
  const n = new ue();
  (n.setAttribute("position", new gt(f, 3)),
    n.setAttribute("normal", new gt(h, 3)),
    n.setAttribute("uv", new gt(d, 2)));
  for (const r of s) n.setAttribute(r, new gt(l[r], Ht[r].length));
  return (
    n.setIndex(new gt(i, 1)),
    n.computeBoundingBox(),
    n.computeBoundingSphere(),
    n
  );
}
function O0(c, a) {
  const o = c.attributes.position.count;
  return (c.setAttribute("aFix", new gt(new Float32Array(o).fill(a), 1)), c);
}
class na {
  constructor(a, o = {}) {
    ((this.name = a),
      (this.m = new Map()),
      (this.floorAt = o.floorAt || null),
      (this.meshes = []));
  }
  add(a, o, { cast: s = !0, receive: f = !0, chunk: h = "" } = {}) {
    if (!a) return a;
    a.attributes.normal || a.computeVertexNormals();
    const d = o.uuid + "|" + s + "|" + f + "|" + h;
    let l = this.m.get(d);
    return (
      l ||
        this.m.set(
          d,
          (l = { mat: o, cast: s, receive: f, chunk: h, geos: [] }),
        ),
      l.geos.push(a),
      a
    );
  }
  flush(a) {
    const o = [];
    for (const s of this.m.values()) {
      const f = q0(s.geos);
      for (const d of s.geos) d.dispose();
      if (s.mat.userData.metroAH && this.floorAt) {
        const d = f.attributes.position,
          l = new Float32Array(d.count);
        for (let i = 0; i < d.count; i++) {
          const t = d.getY(i),
            e = this.floorAt(d.getX(i), d.getZ(i), t);
          l[i] = e == null ? 1.5 : t - e;
        }
        f.setAttribute("aH", new gt(l, 1));
      }
      const h = new bt(f, s.mat);
      ((h.castShadow = s.cast),
        (h.receiveShadow = s.receive),
        (h.name =
          this.name +
          ":" +
          (s.mat.name || s.mat.userData.catalog || "mat") +
          (s.chunk ? ":" + s.chunk : "")),
        (h.matrixAutoUpdate = !1),
        h.updateMatrix(),
        a.add(h),
        o.push(h));
    }
    return (this.m.clear(), this.meshes.push(...o), o);
  }
}
function Bt(c, a, o, { cast: s = !1, receive: f = !0, name: h = "" } = {}) {
  const d = new Xo(c, a, o.length);
  return (
    o.forEach((l, i) => d.setMatrixAt(i, l)),
    (d.instanceMatrix.needsUpdate = !0),
    (d.castShadow = s),
    (d.receiveShadow = f),
    (d.name = h),
    d.computeBoundingSphere(),
    d.computeBoundingBox?.(),
    (d.matrixAutoUpdate = !1),
    d.updateMatrix(),
    d
  );
}
const sa = {
  "+z": { n: [0, 0, 1], r: [1, 0, 0], u: [0, 1, 0] },
  "-z": { n: [0, 0, -1], r: [-1, 0, 0], u: [0, 1, 0] },
  "+x": { n: [1, 0, 0], r: [0, 0, -1], u: [0, 1, 0] },
  "-x": { n: [-1, 0, 0], r: [0, 0, 1], u: [0, 1, 0] },
  "+y": { n: [0, 1, 0], r: [1, 0, 0], u: [0, 0, -1] },
  "-y": { n: [0, -1, 0], r: [1, 0, 0], u: [0, 0, 1] },
};
function So(c, a = 0) {
  const o = sa[c],
    s = Math.cos(a),
    f = Math.sin(a),
    h = [
      o.r[0] * s + o.u[0] * f,
      o.r[1] * s + o.u[1] * f,
      o.r[2] * s + o.u[2] * f,
    ],
    d = [
      o.u[0] * s - o.r[0] * f,
      o.u[1] * s - o.r[1] * f,
      o.u[2] * s - o.r[2] * f,
    ];
  return { n: o.n, r: h, u: d };
}
function Rt(c, a, o, s, f, h = 0, d = 0) {
  const { n: l, r: i, u: t } = So(f, h),
    e = (M, x) => [
      a[0] + i[0] * M + t[0] * x + l[0] * d,
      a[1] + i[1] * M + t[1] * x + l[1] * d,
      a[2] + i[2] * M + t[2] * x + l[2] * d,
    ],
    [n, r, u, b] = c;
  return k0(
    e(-o / 2, -s / 2),
    e(o / 2, -s / 2),
    e(o / 2, s / 2),
    e(-o / 2, s / 2),
    [
      [n, r],
      [u, r],
      [u, b],
      [n, b],
    ],
  );
}
function la(c) {
  const { B: a, M: o, A: s } = c;
  return {
    sign(
      f,
      h,
      d,
      l,
      i,
      {
        atlas: t = "signs",
        mat: e = null,
        depth: n = 0.012,
        plate: r = !0,
        chunk: u = "",
        rot: b = 0,
        cast: M = !1,
      } = {},
    ) {
      const x = s[t].rect(f);
      if (!x) {
        console.warn("[metro] no sign " + f);
        return;
      }
      const { n: w } = So(i, b);
      if (
        (a.add(
          Rt(x, h, d, l, i, b, n + (r ? 0.004 : 0.001)),
          e || (t === "frieze" ? o.frieze : o.signs),
          { chunk: u, cast: !1 },
        ),
        r)
      ) {
        const p = h[0] + (w[0] * n) / 2,
          S = h[1] + (w[1] * n) / 2,
          y = h[2] + (w[2] * n) / 2,
          L = Math.abs(w[0]) > 0.5 ? n / 2 : d / 2,
          v = Math.abs(w[2]) > 0.5 ? n / 2 : d / 2,
          C = Math.abs(w[1]) > 0.5 ? n / 2 : l / 2;
        b ||
          a.add(T(p - L, S - C, y - v, p + L, S + C, y + v, 0.003), o.iron, {
            chunk: u,
            cast: M,
          });
      }
    },
    decal(
      f,
      h,
      d,
      l,
      i,
      { rot: t = 0, matt: e = !1, chunk: n = "", off: r = 0.004 } = {},
    ) {
      const u = s.decals.rect(f);
      u &&
        a.add(Rt(u, h, d, l, i, t, r), e ? o.decalMatt : o.decal, {
          chunk: n,
          cast: !1,
          receive: !0,
        });
    },
    glow(
      f,
      h,
      d,
      l,
      i,
      { fx: t = -1, chunk: e = "", rot: n = 0, off: r = 0.002 } = {},
    ) {
      const u = s.glows.rect(f);
      u &&
        a.add(O0(Rt(u, h, d, l, i, n, r), t), o.glowSign, {
          chunk: e,
          cast: !1,
        });
    },
  };
}
function ra(c) {
  const { B: a, M: o, L: s, D: f, group: h, rng: d } = c,
    l = _0,
    i = "shaft",
    t = { chunk: i },
    e = [],
    n = l.collarBot,
    r = l.bottom,
    u = l.cx - l.open / 2,
    b = l.cx + l.open / 2,
    M = l.cz - l.open / 2,
    x = l.cz + l.open / 2,
    w = l.x0 - l.wall - 0.1,
    p = l.x1 + l.wall + 0.1,
    S = l.z0 - l.wall - 0.1,
    y = l.z1 + l.wall + 0.1;
  for (const [F, e0, g0, N0] of [
    [l.x0, l.z0, l.x1, M],
    [l.x0, x, l.x1, l.z1],
    [l.x0, M, u, x],
    [b, M, l.x1, x],
  ])
    a.add(T0(F, e0, g0, N0, n, !1), o.concShaft, t);
  (a.add(r0("+z", M, u, b, n, l.top), o.concShaft, t),
    a.add(r0("-z", x, u, b, n, l.top), o.concShaft, t),
    a.add(r0("+x", u, M, x, n, l.top), o.concShaft, t),
    a.add(r0("-x", b, M, x, n, l.top), o.concShaft, t));
  for (const [F, e0, g0, N0] of [
    [w, S, p, M],
    [w, x, p, y],
    [w, M, u, x],
    [b, M, p, x],
  ])
    a.add(T0(F, e0, g0, N0, l.top, !0), o.concShaft, { chunk: i, receive: !1 });
  const L = l.door.x0,
    v = l.door.x1,
    C = l.door.y1;
  (a.add(r0("+z", l.z0, l.x0, l.x1, r, n), o.concShaft, t),
    a.add(r0("-x", l.x1, l.z0, l.z1, r, n), o.concShaft, t),
    a.add(r0("+x", l.x0, l.z0, l.z1, r, n), o.concShaft, t),
    a.add(r0("-z", l.z1, l.x0, L, r, n), o.concShaft, t),
    a.add(r0("-z", l.z1, v, l.x1, r, n), o.concShaft, t),
    a.add(r0("-z", l.z1, L, v, C, n), o.concShaft, t),
    a.add(r0("+x", L, l.z1, l.z1 + l.wall, r, C), o.concShaft, t),
    a.add(r0("-x", v, l.z1, l.z1 + l.wall, r, C), o.concShaft, t),
    a.add(T0(L, l.z1, v, l.z1 + l.wall, C, !1), o.concShaft, t),
    a.add(T0(l.x0, l.z0, l.x1, l.z1, r, !0), o.concFloor, t),
    a.add(T0(L, l.z1, v, l.z1 + l.wall, r, !0), o.concFloor, t),
    a.add(
      T(l.x0 + 0.06, r, l.z1 - 0.32, l.x0 + 0.32, r + 0.008, l.z1 - 0.06),
      o.iron,
      t,
    ));
  for (let F = 0; F < 6; F++)
    a.add(
      T(
        l.x0 + 0.08 + F * 0.04,
        r + 0.008,
        l.z1 - 0.3,
        l.x0 + 0.095 + F * 0.04,
        r + 0.012,
        l.z1 - 0.08,
      ),
      o.iron,
      t,
    );
  const k = l.railZ,
    R = l.railX;
  for (const F of R)
    a.add(
      T(F - 0.006, r, k - 0.03, F + 0.006, -0.1, k + 0.03, 0.002),
      o.galv,
      t,
    );
  const W = 30,
    Y = (l.rungTop - l.rungBot) / (W - 1);
  for (let F = 0; F < W; F++) {
    const e0 = l.rungTop - F * Y;
    a.add(
      j(
        [R[0] - 0.012, e0, l.ladderZ],
        [R[1] + 0.012, e0, l.ladderZ],
        0.0125,
        10,
      ),
      o.galv,
      { chunk: i },
    );
  }
  for (let F = -1; F > r + 0.3; F -= 1.5)
    for (const e0 of R) {
      (a.add(
        T(e0 - 0.005, F - 0.03, l.z0, e0 + 0.005, F + 0.03, k - 0.028),
        o.galv,
        t,
      ),
        a.add(
          T(
            e0 - 0.05,
            F - 0.06,
            l.z0,
            e0 + 0.05,
            F + 0.06,
            l.z0 + 0.008,
            0.002,
          ),
          o.galv,
          t,
        ));
      for (const g0 of [-0.03, 0.03])
        a.add(
          j([e0 + g0, F, l.z0 + 0.008], [e0 + g0, F, l.z0 + 0.02], 0.009, 6),
          o.galvDark,
          t,
        );
    }
  for (const F of R)
    a.add(T(F - 0.04, r, k - 0.05, F + 0.04, r + 0.01, k + 0.05), o.galv, t);
  e.push({
    x0: R[0] - 0.04,
    x1: R[1] + 0.04,
    z0: l.z0,
    z1: k + 0.06,
    y0: r - 0.1,
    y1: -0.6,
    ladder: !0,
  });
  const $ = new Jt();
  (($.name = "metro_ladderTop"), h.add($));
  const Z = [];
  for (const F of R)
    (Z.push(j([F, -1.45, l.postZ], [F, l.postTop, l.postZ], 0.021, 12)),
      Z.push(
        ko([F, l.postTop, l.postZ + 0.085], 0.085, 0.019, "x", Math.PI, 8, 16),
      ),
      Z.push(
        j(
          [F, l.postTop - 0.12, l.postZ + 0.17],
          [F, l.postTop, l.postZ + 0.17],
          0.019,
          10,
        ),
      ));
  const H = new bt(q0(Z), o.galv);
  ((H.castShadow = !0), (H.receiveShadow = !0), $.add(H));
  for (const F of R)
    for (const e0 of [-0.35, -1.25])
      a.add(
        T(
          F - 0.03,
          e0 - 0.04,
          l.postZ - 0.03,
          F + 0.03,
          e0 + 0.04,
          l.postZ + 0.03,
          0.004,
        ),
        o.galvDark,
        t,
      );
  const V = {
    k: 1,
    goal: 1,
    rate: 0,
    set(F) {
      ((V.k = V.goal = F),
        ($.position.y = -(1 - F) * (l.postTop + 0.07 + 0.105)));
    },
    to(F, e0 = 0.5) {
      ((V.goal = F),
        (V.rate = Math.abs(F - V.k) / Math.max(0.05, e0)),
        c.audio?.play?.("metro_ladder_slide", {
          pos: [l.cx, -0.3, l.postZ],
          vol: 0.7,
        }));
    },
  };
  (V.set(1),
    c.anim.push((F) => {
      if (V.k === V.goal) return;
      const e0 = V.goal - V.k;
      ((V.k += Math.sign(e0) * Math.min(Math.abs(e0), V.rate * F)),
        ($.position.y = -(1 - V.k) * (l.postTop + 0.07 + 0.105)));
    }));
  const I = l.x1 - 0.05,
    E = l.z0 + 0.05;
  a.add(j([I, n, E], [I, -6.35, E], 0.013, 8), o.galvDark, t);
  for (let F = -0.8; F > -6.3; F -= 1)
    a.add(
      T(I - 0.022, F - 0.015, l.z0, I + 0.022, F + 0.015, E + 0.016, 0.002),
      o.galv,
      t,
    );
  (a.add(
    T(I - 0.06, -6.5, l.z0 + 0, I + 0.03, -6.32, E + 0.05, 0.006),
    o.galvDark,
    t,
  ),
    a.add(
      j([I - 0.02, -6.42, E + 0.03], [I - 0.02, -6.42, l.z1 - 0.05], 0.011, 8),
      o.galvDark,
      t,
    ),
    a.add(
      j(
        [I - 0.02, -6.42, l.z1 - 0.05],
        [l.cx + 0.12, -6.42, l.z1 - 0.05],
        0.011,
        8,
      ),
      o.galvDark,
      t,
    ));
  const N = l.cx,
    Q = -6.62,
    K = l.z1;
  a.add(
    T(N - 0.13, Q - 0.08, K - 0.075, N + 0.13, Q + 0.08, K, 0.025),
    o.iron,
    t,
  );
  const s0 = s.fixId();
  a.add(
    O0(
      aa(
        new U0(0.075, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2).scale(
          1.4,
          0.75,
          0.6,
        ),
        [N, Q, K - 0.075],
        [-Math.PI / 2, 0, 0],
      ),
      s0,
    ),
    o.redLamp,
    { chunk: i, cast: !1 },
  );
  for (let F = -2; F <= 2; F++)
    a.add(
      j(
        [N + F * 0.045, Q - 0.075, K - 0.075],
        [N + F * 0.045, Q + 0.075, K - 0.075],
        0.003,
        4,
      ),
      o.iron,
      t,
    );
  (s.add({
    a: [N - 0.05, Q, K - 0.1],
    b: [N + 0.05, Q, K - 0.1],
    col: [1, 0.16, 0.07],
    cd: 3.2,
    reach: 7.5,
    zone: "shaft",
    fix: s0,
    state: "on",
    box: [l.x0 - 0.05, r - 0.1, l.z0 - 0.05, l.x1 + 0.05, n, l.z1 + 0.9],
    weight: 1.5,
    spot: {
      cd: 9,
      dist: 9.5,
      angle: 1.2,
      pen: 0.85,
      dir: [0, -0.55, -1],
      at: [N, Q - 0.02, K - 0.14],
    },
  }),
    s.add({
      a: [l.cx - 0.3, -0.2, l.cz],
      b: [l.cx + 0.3, -0.2, l.cz],
      col: [1, 0.6, 0.3],
      cd: 1,
      reach: 5.5,
      zone: "shaft",
      state: "on",
      box: [l.x0 - 0.05, -6, l.z0 - 0.05, l.x1 + 0.05, -0.04, l.z1 + 0.05],
      spec: 0.3,
    }),
    f.decal("st_exit", [l.x0 + 0.004, -1.25, l.cz], 0.86, 0.27, "+x", {
      matt: !0,
      chunk: i,
    }));
  for (const F of [2, 4, 6, 8])
    f.decal("st_d" + F, [l.x1 - 0.14, -F, l.z0 + 0.004], 0.24, 0.12, "+z", {
      matt: !0,
      chunk: i,
    });
  (f.decal("st_up", [l.x0 + 0.004, -7.55, l.cz - 0.12], 0.26, 0.26, "+x", {
    matt: !0,
    chunk: i,
  }),
    f.decal("st_exit", [l.x0 + 0.004, -7.95, l.cz - 0.12], 0.5, 0.16, "+x", {
      matt: !0,
      chunk: i,
    }),
    f.decal("damp", [l.x1 - 0.004, -3.4, l.cz + 0.1], 0.9, 1.4, "-x", {
      matt: !0,
      chunk: i,
    }),
    f.decal("damp", [l.x0 + 0.004, -5.2, l.cz - 0.2], 0.8, 1.6, "+x", {
      matt: !0,
      chunk: i,
      rot: 0.3,
    }));
  const f0 = l.z1 + l.wall;
  (a.add(T(L - 0.06, r, f0 - 0.02, L, C + 0.06, f0 + 0.03), o.steel, t),
    a.add(T(v, r, f0 - 0.02, v + 0.06, C + 0.06, f0 + 0.03), o.steel, t),
    a.add(
      T(L - 0.06, C, f0 - 0.02, v + 0.06, C + 0.06, f0 + 0.03),
      o.steel,
      t,
    ));
  const p0 = new Jt();
  (p0.position.set(L, r, f0 + 0.03), (p0.rotation.y = -1.78));
  const o0 = v - L - 0.01,
    M0 = C - r - 0.01,
    S0 = [];
  (S0.push(T(0, 0.005, -0.025, o0, M0, 0.025, 0.008)),
    S0.push(T(0.04, 0.9, 0.025, 0.06, 1.15, 0.05, 0.005)),
    S0.push(T(o0 - 0.08, 0.95, 0.025, o0 - 0.03, 1.05, 0.045, 0.004)));
  const m0 = new bt(q0(S0), o.steel);
  ((m0.castShadow = !0), (m0.receiveShadow = !0), p0.add(m0), h.add(p0));
  const g = Math.cos(-1.78),
    A = Math.sin(-1.78),
    O = L + o0 * g,
    X = f0 + 0.03 - o0 * A;
  e.push({
    x0: Math.min(L, O) - 0.03,
    x1: Math.max(L, O) + 0.03,
    z0: f0,
    z1: Math.max(f0, X) + 0.03,
    y0: r - 0.1,
    y1: C,
    door: "shaft",
  });
  const G = 0.2,
    l0 = r - 0.2,
    h0 = -0.5;
  return (
    e.push(
      { x0: l.x0 - G, x1: l.x1 + G, z0: l.z0 - G, z1: l.z0, y0: l0, y1: h0 },
      { x0: l.x1, x1: l.x1 + G, z0: l.z0, z1: l.z1, y0: l0, y1: h0 },
      { x0: l.x0 - G, x1: l.x0, z0: l.z0, z1: l.z1, y0: l0, y1: h0 },
      { x0: l.x0 - G, x1: L, z0: l.z1, z1: l.z1 + l.wall, y0: l0, y1: h0 },
      { x0: v, x1: l.x1 + G, z0: l.z1, z1: l.z1 + l.wall, y0: l0, y1: h0 },
    ),
    c.sounds.drips.push(
      [l.cx - 0.3, r + 0.05, l.cz + 0.25],
      [l.x1 - 0.1, r + 0.05, l.z0 + 0.2],
    ),
    {
      colliders: e,
      props: { ladderTop: V },
      points: {
        shaftBottom: [l.cx, r, l.cz + 0.12],
        shaftTop: [l.cx, l.top, l.cz],
      },
    }
  );
}
function ca(c) {
  const { B: a, M: o, L: s, D: f, group: h } = c,
    d = dt,
    l = "pass",
    i = { chunk: l },
    t = [],
    e = d.y0,
    n = d.y1,
    r = e + 1.1,
    u = r + 0.035,
    b = y0.x0,
    M = y0.x1,
    x = y0.y1,
    w = _0.door.x0,
    p = _0.door.x1,
    S = _0.door.y1,
    y = (X, G, l0, h0, F, e0) => {
      Math.min(e0, r) > F + 1e-4 &&
        a.add(r0(X, G, l0, h0, F, Math.min(e0, r)), o.paintLow, i);
      const g0 = Math.max(F, r),
        N0 = Math.min(e0, u);
      N0 > g0 + 1e-4 && a.add(r0(X, G, l0, h0, g0, N0), o.paintLine, i);
      const F0 = Math.max(F, u);
      e0 > F0 + 1e-4 && a.add(r0(X, G, l0, h0, F0, e0), o.paintHigh, i);
    };
  (y("+x", d.x0, d.z0, d.z1, e, n),
    y("-x", d.x1, d.z0, d.z1, e, n),
    y("+z", d.z0, d.x0, w, e, n),
    y("+z", d.z0, p, d.x1, e, n),
    y("+z", d.z0, w, p, S, n),
    y("-z", d.z1, d.x0, b, e, n),
    y("-z", d.z1, M, d.x1, e, n),
    y("-z", d.z1, b, M, x, n),
    a.add(T0(d.x0, d.z0, d.x1, d.z1, n, !1), o.paintHigh, i),
    a.add(T0(d.x0, d.z0, d.x1, d.z1, e, !0), o.concFloor, i),
    a.add(r0("+x", b, d.z1, y0.z, e, x), o.paintHigh, i),
    a.add(r0("-x", M, d.z1, y0.z, e, x), o.paintHigh, i),
    a.add(T0(b, d.z1, M, y0.z, x, !1), o.paintHigh, i),
    a.add(T0(b, d.z1, M, y0.z, e, !0), o.concFloor, i));
  const L = d.z0 + 0.05,
    v = d.z1 - 0.05;
  (a.add(
    j([d.x0 + 0.2, n - 0.16, L], [d.x0 + 0.2, n - 0.16, v], 0.055, 14),
    o.pipeRed,
    i,
  ),
    a.add(
      j([d.x0 + 0.42, n - 0.12, L], [d.x0 + 0.42, n - 0.12, v], 0.032, 10),
      o.galvDark,
      i,
    ));
  for (let X = d.z0 + 0.6; X < d.z1; X += 1.5) {
    (a.add(
      j([d.x0 + 0.2, n, X], [d.x0 + 0.2, n - 0.1, X], 0.006, 5),
      o.galvDark,
      i,
    ),
      a.add(
        j([d.x0 + 0.42, n, X], [d.x0 + 0.42, n - 0.08, X], 0.006, 5),
        o.galvDark,
        i,
      ),
      a.add(
        new Ot(0.058, 0.006, 4, 16)
          .rotateY(Math.PI / 2)
          .translate(d.x0 + 0.2, n - 0.16, X),
        o.galvDark,
        i,
      ));
    for (const G of [0.5, 1])
      Math.abs(((X - d.z0) % 3) - G) < 0.01 &&
        a.add(
          j(
            [d.x0 + 0.2, n - 0.16, X - 0.03],
            [d.x0 + 0.2, n - 0.16, X + 0.03],
            0.07,
            14,
          ),
          o.pipeRed,
          i,
        );
  }
  const C = d.x1 - 0.32,
    k = n - 0.26;
  (a.add(T(C, k, d.z0 + 0.02, d.x1 - 0.02, k + 0.012, d.z1 - 0.02), o.galv, i),
    a.add(T(C, k, d.z0 + 0.02, C + 0.012, k + 0.06, d.z1 - 0.02), o.galv, i));
  for (let X = d.z0 + 0.4; X < d.z1; X += 1.2)
    a.add(T(C, k - 0.03, X - 0.02, d.x1, k, X + 0.02), o.galvDark, i);
  for (let X = 0; X < 5; X++) {
    const G = C + 0.04 + X * 0.05,
      l0 = 0.012 + (X % 2) * 0.006;
    a.add(
      j(
        [G, k + 0.012 + l0, d.z0 + 0.02],
        [G, k + 0.012 + l0, d.z1 - 0.02],
        l0,
        6,
      ),
      X === 2 ? o.cableR : o.cable,
      { chunk: l, cast: !1 },
    );
  }
  const R = d.z0 + 3.3,
    W = n - 0.45,
    Y = d.x0;
  a.add(
    new D0(0.13, 0.13, 0.07, 24)
      .rotateZ(Math.PI / 2)
      .translate(Y + 0.035, W, R),
    o.iron,
    i,
  );
  const $ = s.fixId();
  a.add(
    O0(
      new U0(0.095, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2)
        .rotateZ(-Math.PI / 2)
        .translate(Y + 0.07, W, R),
      $,
    ),
    o.warmBulb,
    { chunk: l, cast: !1 },
  );
  for (let X = 0; X < 4; X++) {
    const G = (X / 4) * Math.PI;
    a.add(
      new Ot(0.105, 0.004, 4, 20, Math.PI)
        .rotateX(G)
        .rotateY(Math.PI / 2)
        .rotateZ(-Math.PI / 2)
        .translate(Y + 0.07, W, R),
      o.iron,
      i,
    );
  }
  (s.add({
    a: [Y + 0.12, W, R],
    col: [1, 0.66, 0.36],
    cd: 5.5,
    reach: 7,
    zone: "passage",
    fix: $,
    state: "dying",
    box: [d.x0 - 0.05, e - 0.1, d.z0 - 0.05, d.x1 + 0.05, n + 0.05, d.z1 + 0.3],
    spot: {
      cd: 13,
      dist: 9,
      angle: 1.35,
      pen: 0.9,
      dir: [0.8, -0.55, 0.05],
      at: [Y + 0.16, W - 0.02, R],
    },
  }),
    a.add(
      T(d.x1 - 0.22, e + 1.05, d.z0 + 2.2, d.x1, e + 1.75, d.z0 + 2.75, 0.01),
      o.galvDark,
      i,
    ),
    a.add(
      T(
        d.x1 - 0.235,
        e + 1.36,
        d.z0 + 2.3,
        d.x1 - 0.22,
        e + 1.44,
        d.z0 + 2.33,
        0.003,
      ),
      o.black,
      i,
    ),
    a.add(
      j(
        [d.x0 + 0.1, e + 0.5, d.z1 - 1.6],
        [d.x0 + 0.1, e + 1.05, d.z1 - 1.6],
        0.075,
        14,
      ),
      o.pipeRed,
      i,
    ),
    a.add(
      j(
        [d.x0 + 0.1, e + 1.05, d.z1 - 1.6],
        [d.x0 + 0.1, e + 1.16, d.z1 - 1.6],
        0.025,
        8,
      ),
      o.black,
      i,
    ),
    a.add(
      T(d.x0, e + 0.75, d.z1 - 1.66, d.x0 + 0.03, e + 0.85, d.z1 - 1.54),
      o.black,
      i,
    ),
    f.decal("st_exit", [d.x0 + 0.004, e + 1.75, d.z0 + 1], 0.62, 0.19, "+x", {
      matt: !0,
      chunk: l,
    }),
    f.decal("st_up", [d.x0 + 0.004, e + 1.45, d.z0 + 1], 0.2, 0.2, "+x", {
      matt: !0,
      chunk: l,
      rot: Math.PI / 2,
    }),
    f.decal("damp", [d.x1 - 0.004, e + 0.5, d.z0 + 4.6], 1.4, 1, "-x", {
      matt: !0,
      chunk: l,
    }),
    f.decal("b_hand", [d.x1 - 0.004, e + 1.3, d.z1 - 0.8], 0.16, 0.2, "-x", {
      chunk: l,
      rot: 0.3,
    }));
  const Z = s.fixId();
  (a.add(
    T(y0.x0 + 0.27, x + 0.12, d.z1 - 0.07, y0.x1 - 0.27, x + 0.3, d.z1, 0.006),
    o.housing,
    i,
  ),
    f.glow(
      "exit",
      [(y0.x0 + y0.x1) / 2, x + 0.21, d.z1 - 0.07],
      0.34,
      0.17,
      "-z",
      { fx: Z, chunk: l },
    ),
    s.add({
      a: [y0.x0 + 0.3, x + 0.21, d.z1 - 0.12],
      b: [y0.x1 - 0.3, x + 0.21, d.z1 - 0.12],
      col: [0.22, 1, 0.45],
      cd: 0.8,
      reach: 3.6,
      zone: "passage",
      fix: Z,
      state: "on",
      box: [d.x0 - 0.05, e - 0.1, d.z0 + 3, d.x1 + 0.05, n + 0.05, d.z1 + 0.05],
      spec: 0.6,
    }));
  const H = y0.z;
  (a.add(T(b - 0.06, e, H - 0.03, b, x + 0.06, H + 0.012), o.steel, i),
    a.add(T(M, e, H - 0.03, M + 0.06, x + 0.06, H + 0.012), o.steel, i),
    a.add(T(b - 0.06, x, H - 0.03, M + 0.06, x + 0.06, H + 0.012), o.steel, i));
  const V = new Jt();
  ((V.name = "metro_staffDoor"), V.position.set(b + 0.005, e, H), h.add(V));
  const I = M - b - 0.012,
    E = x - e - 0.008,
    N = [],
    Q = [],
    K = [];
  (N.push(T(0, 0.006, -0.05, I, E, -0.004, 0.006)),
    N.push(T(0.04, 0.02, -0.052, I - 0.04, 0.26, -0.049)),
    Q.push(T(I * 0.5 - 0.11, E * 0.6, -0.04, I * 0.5 + 0.11, E * 0.86, -0.014)),
    K.push(
      T(0.06, 0.97, -0.11, 0.13, 1.07, -0.05, 0.01),
      T(I - 0.13, 0.97, -0.11, I - 0.06, 1.07, -0.05, 0.01),
    ),
    K.push(
      new D0(0.018, 0.018, I - 0.2, 12)
        .rotateZ(Math.PI / 2)
        .translate(I / 2, 1.02, -0.1),
    ),
    K.push(T(I - 0.1, 1, -0.004, I - 0.04, 1.04, 0.03, 0.004)));
  const s0 = new bt(q0(N), o.steel);
  ((s0.castShadow = !0), (s0.receiveShadow = !0));
  const f0 = new bt(q0(K), o.galv);
  f0.castShadow = !0;
  const p0 = new bt(q0(Q), o.black);
  V.add(s0, f0, p0);
  const o0 = new bt(
    c.faceQuadLocal("staff_only", [I / 2, 1.5, 0.002], 0.3, 0.15),
    o.signs,
  );
  V.add(o0);
  const M0 = {
      x0: b,
      x1: M,
      z0: d.z1,
      z1: H + 0.06,
      y0: e - 0.2,
      y1: x,
      door: "staff",
    },
    S0 = {
      x0: b - 0.04,
      x1: b + 0.1,
      z0: H,
      z1: H + I + 0.04,
      y0: e - 0.2,
      y1: x,
      door: "staff",
      on: !1,
    };
  t.push(M0, S0);
  const m0 = {
      k: 0,
      goal: 0,
      rate: 0,
      collider: M0,
      colliderOpen: S0,
      set(X) {
        ((m0.k = m0.goal = X), g());
      },
      open(X = 1, G = 1.2) {
        ((m0.goal = X),
          (m0.rate = Math.abs(X - m0.k) / Math.max(0.05, G)),
          X > m0.k
            ? c.audio?.play?.("metro_staff_door_open", {
                pos: [y0.x0 + 0.45, e + 1.1, H],
                vol: 0.9,
              })
            : c.audio?.play?.("metro_staff_door_shut", {
                pos: [y0.x0 + 0.45, e + 1.1, H],
                vol: 0.9,
              }));
      },
    },
    g = () => {
      const X = m0.k,
        G = X < 0.5 ? 2 * X * X : 1 - Math.pow(-2 * X + 2, 2) / 2;
      ((V.rotation.y = -G * 1.62), (M0.on = X < 0.35), (S0.on = X > 0.75));
    };
  (g(),
    c.anim.push((X) => {
      if (m0.k === m0.goal) return;
      const G = m0.goal - m0.k;
      ((m0.k += Math.sign(G) * Math.min(Math.abs(G), m0.rate * X)),
        g(),
        m0.k === m0.goal &&
          m0.k === 0 &&
          c.audio?.play?.("metro_staff_door_slam", {
            pos: [y0.x0 + 0.45, e + 1.1, H],
            vol: 0.9,
          }));
    }));
  const A = e - 0.2,
    O = n + 0.1;
  return (
    t.push(
      { x0: d.x0 - 0.2, x1: d.x0, z0: d.z0, z1: d.z1 + 0.25, y0: A, y1: O },
      { x0: d.x1, x1: d.x1 + 0.2, z0: d.z0, z1: d.z1 + 0.25, y0: A, y1: O },
    ),
    t.push(
      { x0: d.x0, x1: b, z0: d.z1, z1: y0.z, y0: A, y1: O },
      { x0: M, x1: d.x1, z0: d.z1, z1: y0.z, y0: A, y1: O },
    ),
    t.push({
      x0: d.x0,
      x1: d.x0 + 0.2,
      z0: d.z1 - 1.75,
      z1: d.z1 - 1.45,
      y0: A,
      y1: e + 1.2,
    }),
    c.sounds.drips.push([d.x0 + 0.5, e + 0.02, d.z0 + 4.4]),
    {
      colliders: t,
      props: { staffDoor: m0 },
      points: {
        passageEnd: [y0.x0 + 0.45, e, d.z1 - 0.45],
        staffDoor: [y0.x0 + 0.45 + 0.25, e, y0.z + 0.75],
      },
    }
  );
}
const Mt = (c, a, o, s = 0, f = 0, h = 0) => K0([c, a, o], [f, s, h]),
  v0 = (c, a, o, s, f) => (a.applyMatrix4(s), c.add(a, o, f), a);
function me(c, a, o, s, f, h, d, l, i) {
  const t = Math.cos(o),
    e = Math.sin(o),
    n = [],
    r = [];
  for (const [u, b] of [
    [s, h],
    [f, h],
    [f, d],
    [s, d],
  ])
    (n.push(c + u * t + b * e), r.push(a - u * e + b * t));
  return {
    x0: Math.min(...n),
    x1: Math.max(...n),
    z0: Math.min(...r),
    z1: Math.max(...r),
    y0: l,
    y1: i,
  };
}
function Qe(c, a, o, s, f = 0, { len: h = 1.8, chunk: d = "" } = {}) {
  const { B: l, M: i } = c,
    t = Mt(a, o, s, f),
    e = { chunk: d };
  for (const n of [-h / 2 + 0.12, h / 2 - 0.12])
    (v0(l, T(n - 0.025, 0, 0.05, n + 0.025, 0.42, 0.09, 0.006), i.steel, t, e),
      v0(
        l,
        T(n - 0.025, 0, -0.32, n + 0.025, 0.86, -0.28, 0.006),
        i.steel,
        t,
        e,
      ),
      v0(
        l,
        T(n - 0.02, 0.38, -0.32, n + 0.02, 0.42, 0.09, 0.005),
        i.steel,
        t,
        e,
      ),
      v0(
        l,
        T(n - 0.02, 0.02, -0.32, n + 0.02, 0.05, 0.09, 0.005),
        i.steel,
        t,
        e,
      ));
  for (let n = 0; n < 3; n++)
    v0(
      l,
      T(-h / 2, 0.42, -0.27 + n * 0.125, h / 2, 0.45, -0.17 + n * 0.125, 0.008),
      i.wood,
      t,
      e,
    );
  for (let n = 0; n < 2; n++)
    v0(
      l,
      T(-h / 2, 0.55 + n * 0.16, -0.32, h / 2, 0.66 + n * 0.16, -0.29, 0.008),
      i.wood,
      t,
      e,
    );
  return [me(a, s, f, -h / 2, h / 2, -0.33, 0.1, o, o + 0.9)];
}
function To(c, a, o, s, { chunk: f = "", spill: h = 1, rng: d } = {}) {
  const { B: l, M: i } = c,
    t = { chunk: f },
    e = new D0(0.19, 0.17, 0.72, 20, 1, !0);
  (e.translate(a, o + 0.36, s), it(e), l.add(e, i.galvDark, t));
  const n = new Ot(0.19, 0.012, 6, 24)
    .rotateX(Math.PI / 2)
    .translate(a, o + 0.72, s);
  l.add(n, i.galvDark, t);
  const r = new uo(0.17, 16).rotateX(-Math.PI / 2).translate(a, o + 0.02, s);
  l.add(r, i.black, t);
  const u = new D0(0.2, 0.18, 0.08, 16).translate(a, o + 0.72, s);
  l.add(u, i.plastic, t);
  const b = d || Math.random;
  for (let M = 0; M < 6 * h; M++)
    xe(c, a + (b() - 0.5) * 1.2, o, s + (b() - 0.5) * 1, b, f);
  return [
    { x0: a - 0.2, x1: a + 0.2, z0: s - 0.2, z1: s + 0.2, y0: o, y1: o + 0.75 },
  ];
}
function xe(c, a, o, s, f, h = "") {
  const d = 0.03 + f() * 0.04,
    l = new Ho(d, 0),
    i = l.attributes.position;
  for (let t = 0; t < i.count; t++)
    i.setXYZ(
      t,
      i.getX(t) * (0.8 + f() * 0.5),
      i.getY(t) * (0.6 + f() * 0.4),
      i.getZ(t) * (0.8 + f() * 0.5),
    );
  (l.computeVertexNormals(),
    l.translate(a, o + d * 0.6, s),
    it(l, 4),
    c.B.add(l, f() < 0.5 ? c.M.paper : c.M.plasticW, { chunk: h, cast: !1 }));
}
function $t(
  c,
  a,
  o,
  s,
  f,
  {
    w: h = 0.42,
    l: d = 0.58,
    lift: l = 0.02,
    chunk: i = "",
    kind: t = null,
  } = {},
) {
  const e = ["news1", "news2", "leaflet", "news1", "news2"],
    n =
      t ||
      e[
        Math.floor(
          Math.abs(Math.sin(a * 12.9898 + s * 78.233) * 43758.5453) % e.length,
        )
      ];
  n === "leaflet"
    ? ((h = Math.min(h, 0.21)), (d = h * 1.42))
    : ((h = Math.max(h, 0.3)), (d = h * 1.39));
  const r = new ho(h, d, 2, 2).rotateX(-Math.PI / 2),
    u = r.attributes.position;
  for (let x = 0; x < u.count; x++) {
    const w = u.getX(x);
    u.setY(x, Math.abs(w) < 0.01 ? l : l * 0.2);
  }
  r.computeVertexNormals();
  const b = c.A.signs.rect(n),
    M = r.attributes.uv;
  for (let x = 0; x < M.count; x++)
    M.setXY(
      x,
      b[0] + (b[2] - b[0]) * M.getX(x),
      b[1] + (b[3] - b[1]) * M.getY(x),
    );
  v0(c.B, r, c.M.print, Mt(a, o + 0.004, s, f), { chunk: i, cast: !1 });
}
function ia(c, a, o, s, f, { chunk: h = "", rng: d } = {}) {
  const { B: l, M: i } = c,
    t = Mt(a, o, s, f),
    e = { chunk: h },
    n = d || Math.random,
    r = 0.68,
    u = 0.44,
    b = 0.12;
  v0(l, T(-r / 2, 0, -u / 2, r / 2, 0.02, u / 2, 0.01), i.leather, t, e);
  for (const [x, w, p, S] of [
    [-r / 2, -u / 2, r / 2, -u / 2 + 0.02],
    [-r / 2, u / 2 - 0.02, r / 2, u / 2],
    [-r / 2, -u / 2, -r / 2 + 0.02, u / 2],
    [r / 2 - 0.02, -u / 2, r / 2, u / 2],
  ])
    v0(l, T(x, 0, w, p, b, S, 0.006), i.leather, t, e);
  const M = K0([0, 0, -u / 2], [-2.6, 0, 0]);
  (v0(
    l,
    T(-r / 2, -0.02, 0, r / 2, 0, u, 0.01).applyMatrix4(M),
    i.leather,
    t,
    e,
  ),
    v0(
      l,
      T(-0.1, b, u / 2 - 0.01, 0.1, b + 0.04, u / 2 + 0.03, 0.01),
      i.black,
      t,
      e,
    ));
  for (let x = 0; x < 5; x++) {
    const w = new U0(0.1 + n() * 0.08, 10, 6);
    (w.scale(1.4 + n(), 0.28, 1 + n() * 0.6),
      w.translate(
        (n() - 0.5) * (x < 3 ? 0.4 : 1.2),
        0.04 + (x < 3 ? 0.06 : 0),
        x < 3 ? 0 : 0.35 + n() * 0.4,
      ),
      it(w, 3),
      v0(l, w, [i.fabric, i.fabricR, i.sheet, i.fabric, i.sheet][x], t, {
        chunk: h,
        cast: !1,
      }));
  }
  return [me(a, s, f, -r / 2, r / 2, -u / 2 - 0.4, u / 2, o, o + 0.2)];
}
function da(c, a, o, s, f, { chunk: h = "", tipped: d = !1 } = {}) {
  const { B: l, M: i } = c,
    t = { chunk: h },
    e = Mt(a, o, s, f, 0, d ? 1.45 : 0).premultiply(
      new rt().makeTranslation(0, d ? 0.24 : 0, 0),
    ),
    n = [];
  for (const M of [-0.22, 0.22])
    n.push(
      j([M, 0.12, 0.3], [M, 0.62, -0.08], 0.011, 8),
      j([M, 0.12, -0.25], [M, 0.62, -0.08], 0.011, 8),
      j([M, 0.62, -0.08], [M, 1, -0.38], 0.012, 8),
    );
  n.push(j([-0.23, 1, -0.38], [0.23, 1, -0.38], 0.016, 10));
  for (const M of n) v0(l, M, i.galv, e, t);
  for (const [M, x] of [
    [-0.24, 0.3],
    [0.24, 0.3],
    [-0.24, -0.25],
    [0.24, -0.25],
  ])
    v0(
      l,
      new D0(0.1, 0.1, 0.04, 16).rotateZ(Math.PI / 2).translate(M, 0.1, x),
      i.rubber,
      e,
      t,
    );
  const r = new D0(0.24, 0.24, 0.42, 14, 1, !0, Math.PI * 0.55, Math.PI * 0.9)
    .rotateZ(Math.PI / 2)
    .scale(1, 0.9, 1.3)
    .translate(0, 0.62, 0);
  (it(r, 3), v0(l, r, i.fabricR, e, t));
  const u = new U0(0.26, 14, 8, 0, Math.PI, 0, Math.PI / 2)
    .rotateY(Math.PI / 2)
    .scale(0.9, 0.8, 1)
    .translate(0, 0.74, -0.15);
  (it(u, 3),
    v0(l, u, i.fabricR, e, t),
    v0(l, T(-0.18, 0.3, 0.2, 0.18, 0.33, 0.34, 0.01), i.plastic, e, t));
  const b = new U0(0.18, 10, 6)
    .scale(1.2, 0.3, 1.3)
    .translate(0.05, 0.62, 0.08);
  return (
    it(b, 3),
    v0(l, b, i.sheet, e, { chunk: h, cast: !1 }),
    [me(a, s, f, -0.3, 0.3, -0.45, 0.4, o, o + 1)]
  );
}
function fa(c, a, o, s, f, { chunk: h = "" } = {}) {
  const { B: d, M: l } = c,
    i = Mt(a, o + 0.045, s, f, 0, Math.PI / 2 - 0.15),
    t = new D0(0.045, 0.05, 0.16, 12).translate(0, 0.08, 0);
  it(t, 3);
  const e = new U0(0.05, 12, 8).scale(1, 0.7, 1.9).translate(0, 0.01, 0.05);
  (it(e, 3),
    v0(d, t, l.yellow, i, { chunk: h }),
    v0(d, e, l.yellow, i, { chunk: h }));
}
function ua(c, a, o, s, f, { chunk: h = "" } = {}) {
  const { B: d, M: l } = c,
    i = Mt(a, o + 0.03, s, f, Math.PI / 2, 0);
  (v0(d, new D0(0.03, 0.006, 0.78, 10).translate(0, 0.39, 0), l.black, i, {
    chunk: h,
  }),
    v0(
      d,
      ko([0, -0.06, 0.04], 0.04, 0.008, "x", Math.PI * 1.1, 6, 12),
      l.woodDark,
      i,
      { chunk: h },
    ));
}
function Ft(c, a, o, s, f, { chunk: h = "", down: d = 0 } = {}) {
  const { B: l, M: i } = c,
    t = Mt(a, o, s, f, d ? -1.48 * d : 0, 0).premultiply(
      new rt().makeTranslation(0, d ? 0.03 : 0, 0),
    ),
    e = [];
  (e.push(
    j([-1.1, 0.1, 0], [1.1, 0.1, 0], 0.016, 8),
    j([-1.1, 1.08, 0], [1.1, 1.08, 0], 0.016, 8),
  ),
    e.push(
      j([-1.1, 0.1, 0], [-1.1, 1.08, 0], 0.016, 8),
      j([1.1, 0.1, 0], [1.1, 1.08, 0], 0.016, 8),
    ));
  for (let n = 1; n < 14; n++)
    e.push(
      j(
        [-1.1 + (n * 2.2) / 14, 0.1, 0],
        [-1.1 + (n * 2.2) / 14, 1.08, 0],
        0.007,
        5,
      ),
    );
  for (const n of [-0.95, 0.95])
    e.push(
      j([n, 0, -0.3], [n, 0.1, 0], 0.012, 6),
      j([n, 0, 0.3], [n, 0.1, 0], 0.012, 6),
      j([n, 0, -0.3], [n, 0, 0.3], 0.012, 6),
    );
  for (const n of e) v0(l, n, i.galv, t, { chunk: h });
  return d ? [] : [me(a, s, f, -1.12, 1.12, -0.3, 0.3, o, o + 1.1)];
}
function Je(c, a, o, s, f, { chunk: h = "" } = {}) {
  const { B: d, M: l } = c,
    i = Mt(a, o + 0.03, s, f, -Math.PI / 2 + 0.06, 0),
    t = new D0(0.9, 0.9, 1, 16, 1, !0, -0.32, 0.64).translate(0, 0, -0.9);
  (it(t, 2),
    v0(d, t, l.glass, i, { chunk: h, cast: !1 }),
    v0(d, T(-0.05, -0.45, -0.03, 0.05, 0.45, -0, 0.01), l.black, i, {
      chunk: h,
    }));
}
function Gt(
  c,
  a,
  o,
  s,
  f,
  { chunk: h = "", bag: d = !1, foil: l = !1, rng: i } = {},
) {
  const { B: t, M: e } = c,
    n = Mt(a, o, s, f),
    r = i || Math.random,
    u = (r() - 0.5) * 0.2,
    b = 0.04 + r() * 0.08,
    M = r() * 6.28,
    x = [
      [0.02, -0.82, 0.12, 0.14, 0.17],
      [0, -0.48, 0.25, 0.17, 0.2],
      [u * 0.3, -0.12, 0.22, 0.24, 0.17],
      [u * 0.5, 0.2, 0.2, 0.16, 0.15],
      [-0.1 - b * 0.5, 0.55, 0.09, 0.26, 0.11],
      [0.1 + b * 0.5, 0.55, 0.09, 0.26, 0.11],
      [-0.11 - b, 0.92, 0.07, 0.08, 0.17],
      [0.11 + b, 0.92, 0.07, 0.08, 0.17],
    ];
  d || x.push([0.33, -0.3 + r() * 0.2, 0.07, 0.24, 0.07]);
  const w = d ? 0.62 : 0.95,
    p = d ? 2 : 2.15,
    S = 26,
    y = 54,
    L = (k, R) => {
      let W = 0;
      for (const [Y, $, Z, H, V] of x) {
        const I =
          ((k - Y) / (Z + (d ? 0.04 : 0.1))) ** 2 +
          ((R - $) / (H + (d ? 0.04 : 0.1))) ** 2;
        if (I < 1) {
          const E = 1 - I,
            N = V * Math.sqrt(E) * (0.65 + 0.35 * E);
          W = Math.max(W, N) + 0.25 * Math.min(W, N) * E;
        }
      }
      return W;
    },
    v = new ho(w, p, S, y).rotateX(-Math.PI / 2),
    C = v.attributes.position;
  for (let k = 0; k < C.count; k++) {
    const R = C.getX(k),
      W = C.getZ(k),
      Y = Math.min(w / 2 - Math.abs(R), p / 2 - Math.abs(W));
    let $ = L(R, W);
    (d ||
      ($ +=
        (l ? 0.006 : 0.01) *
          Math.sin(R * 17 + W * 6 + M) *
          Math.min(1, $ * 12) +
        0.005 * Math.sin(W * 23 - R * 5 + M * 2)),
      ($ = Math.max(0.006, $ * Math.min(1, Y / 0.06))),
      C.setY(k, $));
  }
  if (
    (v.computeVertexNormals(),
    it(v, 1.5),
    v0(t, v, d ? e.rubber : l ? e.foil : e.sheet, n, { chunk: h }),
    d)
  )
    v0(
      t,
      T(-0.008, 0, -0.9, 0.008, 0.012, 0.9).translate(0, 0.205, 0),
      e.galvDark,
      n,
      { chunk: h, cast: !1 },
    );
  else
    for (const k of [-1, 1]) {
      const R = new U0(1, 10, 6)
        .scale(0.05, 0.05, 0.12)
        .translate(k * (0.11 + b), 0.05, 1.12);
      v0(t, R, e.black, n, { chunk: h });
    }
  return [];
}
const ha = [
    [0, 0.15, "tileTeal"],
    [0.15, 1.2, "tileCream"],
    [1.2, 1.275, "tileTeal"],
    [1.275, 2.4, "tileCream"],
    [2.4, 3, "tileTeal"],
    [3, 3.075, "tileCream"],
    [3.075, 3.15, "tileTeal"],
    [3.15, 4.2, "tileCream"],
  ],
  vo = [];
for (let c = 0; c <= m.cols.length; c++)
  vo.push([
    c === 0 ? m.x0 : m.cols[c - 1],
    c === m.cols.length ? m.x1 : m.cols[c],
  ]);
function le(c, a, o, s, f, h, d, l = [], i = "ash") {
  const { B: t, M: e } = c;
  for (const [n, r, u] of ha) {
    const b = h + n,
      M = Math.min(h + r, d);
    if (M <= b) continue;
    const x = l
      .filter((S) => S[2] < M - 1e-4 && S[3] > b + 1e-4)
      .sort((S, y) => S[0] - y[0]);
    let w = s;
    const p = (S, y, L, v) => {
      y - S > 0.001 &&
        v - L > 0.001 &&
        t.add(r0(a, o, S, y, L, v), e[u], { chunk: i });
    };
    for (const S of x)
      (p(w, Math.max(w, S[0]), b, M),
        S[2] > b &&
          p(Math.max(w, S[0]), Math.min(f, S[1]), b, Math.min(M, S[2])),
        S[3] < M &&
          p(Math.max(w, S[0]), Math.min(f, S[1]), Math.max(b, S[3]), M),
        (w = Math.max(w, S[1])));
    p(w, f, b, M);
  }
}
function pa(c) {
  const { B: a, M: o, L: s, D: f, group: h, rng: d, A: l } = c,
    i = [],
    t = [],
    e = [],
    n = { chunk: "ash" },
    r = u0,
    u = m.ceil,
    b = [-6, 12, 24, 36],
    M = [0, 18, 30, 42],
    x = 4.8,
    w = 0.6,
    p = (g, A) => g.map((O) => [O - x / 2, O + x / 2, r + 2.4, r + 3]),
    S = [y0.x0, y0.x1, r, y0.y1];
  (le(c, "+z", m.zN, m.x0, m.x1, r, u, [S, ...p(b)]),
    le(c, "-z", m.zS, m.x0, m.x1, r, u, p(M)));
  for (const g of b)
    f.sign("frieze", [g, r + 2.7, m.zN], x, w, "+z", {
      atlas: "frieze",
      plate: !1,
      depth: 0,
    });
  for (const g of M)
    f.sign("frieze", [g, r + 2.7, m.zS], x, w, "-z", {
      atlas: "frieze",
      plate: !1,
      depth: 0,
    });
  const y = [d0.z0, d0.z1, q - 0.5, d0.roof];
  (le(c, "+x", m.x0, m.zN, m.zS, r, u, [y]),
    le(c, "-x", m.x1, m.zN, m.zS, r, u, [
      [c0.z0, c0.z1, r, u],
      y,
      [Lt.z0, Lt.z1, r, u],
    ]));
  for (const g of m.cols)
    (a.add(T(g - 0.22, r, m.zN, g + 0.22, u, m.zN + 0.1), o.tileTeal, n),
      a.add(T(g - 0.22, r, m.zS - 0.1, g + 0.22, u, m.zS), o.tileTeal, n));
  const L = 0.3,
    v = 0.4,
    C = (g, A) => {
      const O = A > 0 ? m.zN : m.zS,
        X = g - A * L,
        G = X - A * v,
        l0 = (e0, g0) => Math.min(e0, g0),
        h0 = (e0, g0) => Math.max(e0, g0);
      (a.add(T0(m.x0, l0(O, G), m.x1, h0(O, G), r, !0), o.floor, n),
        a.add(
          T(m.x0, r - 0.02, l0(G, X), m.x1, r + 0.004, h0(G, X)),
          o.tactile,
          n,
        ),
        a.add(
          T(m.x0, r - 0.2, l0(X, g), m.x1, r, h0(X, g), 0.012),
          o.coping,
          n,
        ));
      const F = X;
      a.add(r0(A > 0 ? "+z" : "-z", F, m.x0, m.x1, q, r - 0.2), o.concDark, n);
      for (let e0 = 0; e0 < 3; e0++)
        a.add(
          j(
            [m.x0, r - 0.42 - e0 * 0.09, F + A * 0.06],
            [m.x1, r - 0.42 - e0 * 0.09, F + A * 0.06],
            0.018,
            6,
          ),
          o.cable,
          { chunk: "ash", cast: !1 },
        );
      for (let e0 = m.x0 + 1; e0 < m.x1; e0 += 2.5)
        a.add(
          T(
            e0 - 0.01,
            r - 0.7,
            l0(F, F + A * 0.1),
            e0 + 0.01,
            r - 0.32,
            h0(F, F + A * 0.1),
          ),
          o.galvDark,
          n,
        );
      for (const [e0, g0] of [
        [m.x0, "-x"],
        [m.x1, "+x"],
      ])
        a.add(
          r0(
            g0,
            e0,
            l0(g, A > 0 ? d0.z0 : d0.z1),
            h0(g, A > 0 ? d0.z0 : d0.z1),
            q,
            r,
          ),
          o.concDark,
          n,
        );
    };
  (C(m.edgeN, 1),
    C(m.edgeS, -1),
    a.add(T0(m.x0, m.edgeN - L, m.x1, m.edgeS + L, q, !0), o.bed, n),
    a.add(T0(m.x0, m.zN, m.x1, m.zS, u, !1), o.ceil, n));
  const k = je(u - m.girderBot, 0.46, 0.03, 0.016),
    R = (u + m.girderBot) / 2;
  a.add($e(k, [m.x0, R, m.colZ], [m.x1, R, m.colZ], [0, 0, 1]), o.steel, n);
  const W = je(u - m.beamBot, 0.32, 0.024, 0.014),
    Y = (u + m.beamBot) / 2;
  for (const g of m.cols)
    a.add($e(W, [g, Y, m.zN + 0.1], [g, Y, m.zS - 0.1], [1, 0, 0]), o.steel, n);
  const $ = [];
  for (const [g, A] of [
    [m.zN + 0.1, 1],
    [m.zS - 0.1, -1],
  ]) {
    const O = m.beamBot - 0.16,
      X = g + A * 0.04,
      G = g + A * 0.36,
      l0 = Math.min(X, G),
      h0 = Math.max(X, G);
    (a.add(T(m.x0, O, l0, m.x1, O + 0.012, h0), o.galvDark, n),
      a.add(
        T(
          m.x0,
          O,
          A > 0 ? h0 - 0.012 : l0,
          m.x1,
          O + 0.07,
          A > 0 ? h0 : l0 + 0.012,
        ),
        o.galvDark,
        n,
      ));
    for (let F = 0; F < 5; F++)
      a.add(
        j(
          [m.x0, O + 0.03, g + A * (0.08 + F * 0.055)],
          [m.x1, O + 0.03, g + A * (0.08 + F * 0.055)],
          0.017 + (F % 2) * 0.006,
          6,
        ),
        F === 3 ? o.cableR : o.cable,
        { chunk: "ash", cast: !1 },
      );
    for (let F = m.x0 + 0.75; F < m.x1; F += 1.5)
      a.add(
        T(
          F - 0.015,
          O - 0.04,
          Math.min(g, g + A * 0.38),
          F + 0.015,
          O,
          Math.max(g, g + A * 0.38),
        ),
        o.galvDark,
        n,
      );
    a.add(
      j(
        [m.x0, O + 0.25, g + A * 0.05],
        [m.x1, O + 0.25, g + A * 0.05],
        0.022,
        8,
      ),
      o.galvDark,
      { chunk: "ash", cast: !1 },
    );
  }
  const Z = (g, A, O, X, G, l0) => {
    const h0 = new fo().setFromUnitVectors(new ot(0, 1, 0), new ot(X, G, l0));
    $.push(new rt().compose(new ot(g, A, O), h0, new ot(1, 1, 1)));
  };
  for (let g = m.x0 + 0.05; g < m.x1; g += 0.11)
    for (const A of [-0.17, 0.17])
      Z(g, m.girderBot - 0.001, m.colZ + A, 0, -1, 0);
  for (const g of m.cols)
    for (let A = m.zN + 0.2; A < m.zS - 0.1; A += 0.11)
      for (const O of [-0.11, 0.11]) Z(g + O, m.beamBot - 0.001, A, 0, -1, 0);
  const H = m.girderBot,
    V = q + 0.5;
  for (const g of m.cols) {
    const A = m.colZ;
    (a.add(T(g - 0.34, q, A - 0.34, g + 0.34, V, A + 0.34, 0.03), o.coping, n),
      a.add(
        T(g - 0.18, V, A - 0.18, g + 0.18, V + 0.025, A + 0.18, 0.004),
        o.steel,
        n,
      ));
    for (const O of [-1, 1])
      a.add(
        T(
          g - 0.18,
          V,
          A + O * 0.18 - (O > 0 ? 0.022 : 0),
          g + 0.18,
          H,
          A + O * 0.18 + (O < 0 ? 0.022 : 0),
          0.004,
        ),
        o.steel,
        n,
      );
    (a.add(T(g - 0.008, V, A - 0.16, g + 0.008, H, A + 0.16), o.steel, n),
      a.add(
        T(g - 0.24, H - 0.03, A - 0.24, g + 0.24, H, A + 0.24, 0.004),
        o.steel,
        n,
      ));
    for (const O of [-1, 1])
      a.add(
        k0(
          [g - 0.008 * O, H - 0.5, A],
          [g + 0.008, H - 0.5, A],
          [g + 0.008, H - 0.03, A + O * 0.22],
          [g - 0.008, H - 0.03, A + O * 0.22],
        ),
        o.steel,
        n,
      );
    for (let O = V + 0.12; O < H - 0.08; O += 0.1)
      for (const X of [-1, 1])
        for (const G of [-0.13, 0.13]) Z(g + G, O, A + X * 0.202, 0, 0, X);
    i.push({
      x0: g - 0.35,
      x1: g + 0.35,
      z0: A - 0.35,
      z1: A + 0.35,
      y0: q,
      y1: H,
    });
  }
  const I = new U0(0.012, 6, 2, 0, Math.PI * 2, 0, Math.PI / 2);
  (I.scale(1, 0.55, 1),
    h.add(Bt(I, o.steel, $, { name: "ash:rivets", cast: !1 })));
  const E = [
      ["off", "off"],
      ["on", "off"],
      ["dying", "off"],
      ["off", "on"],
      ["on", "off"],
      ["on", "flicker"],
      ["on", "off"],
      ["flicker", "on"],
      ["dying", "off"],
      ["on", "dying"],
      ["flicker", "off"],
    ],
    N = [m.zN + 2.9, m.zS - 2.9],
    Q = u - 0.26,
    K = [m.x0 - 0.05, q - 0.2, m.zN - 0.05, m.x1 + 0.05, u + 0.05, m.zS + 0.05];
  vo.forEach(([g, A], O) => {
    const X = (g + A) / 2;
    N.forEach((G, l0) => {
      const h0 = E[O][l0],
        F = s.fixId(),
        e0 = X - 0.76,
        g0 = X + 0.76,
        N0 = O === 6 && l0 === 1,
        F0 = N0
          ? new rt()
              .makeTranslation(g0, Q + 0.12, G)
              .multiply(new rt().makeRotationZ(0.62))
              .multiply(new rt().makeTranslation(-g0, 4.9399999999999995, -G))
          : null,
        $0 = (G0, L0, xt) => a.add(F0 ? G0.applyMatrix4(F0) : G0, L0, xt);
      ($0(
        T(e0, Q + 0.03, G - 0.09, g0, Q + 0.12, G + 0.09, 0.012),
        o.housing,
        n,
      ),
        $0(
          T(e0 - 0.02, Q - 0.02, G - 0.1, e0 + 0.02, Q + 0.12, G + 0.1, 0.006),
          o.housing,
          n,
        ),
        $0(
          T(g0 - 0.02, Q - 0.02, G - 0.1, g0 + 0.02, Q + 0.12, G + 0.1, 0.006),
          o.housing,
          n,
        ));
      for (const G0 of N0 ? [0.045] : [-0.045, 0.045])
        $0(
          O0(j([e0 + 0.02, Q, G + G0], [g0 - 0.02, Q, G + G0], 0.0135, 8), F),
          o.tube,
          { chunk: "ash", cast: !1 },
        );
      for (const G0 of N0 ? [0.5] : [-0.5, 0.5])
        a.add(j([X + G0, u, G], [X + G0, Q + 0.12, G], 0.005, 4), o.galvDark, {
          chunk: "ash",
          cast: !1,
        });
      (N0 &&
        (a.add(
          j([X - 0.5, u, G], [X - 0.5, u - 0.18, G], 0.005, 4),
          o.galvDark,
          { chunk: "ash", cast: !1 },
        ),
        xe(c, X - 0.9, r, G + 0.4, d, "ash"),
        a.add(
          O0(
            j(
              [X - 0.6, r + 0.015, G + 0.3],
              [X + 0.5, r + 0.015, G + 0.15],
              0.0135,
              8,
            ),
            s.fixId(),
          ),
          o.tube,
          { chunk: "ash", cast: !1 },
        )),
        s.add({
          a: [e0 + 0.05, Q - 0.03, G],
          b: [g0 - 0.05, Q - 0.03, G],
          col: [0.87, 0.94, 0.9],
          cd: 22,
          reach: 10,
          zone: "ashwood",
          fix: F,
          state: h0,
          r: 0.05,
          down: !0,
          box: K,
          point: { cd: 16, dist: 9, below: 0.75 },
          buzz: h0 === "flicker" || h0 === "dying",
        }));
    });
  });
  const s0 = xa(c),
    f0 = d;
  for (const g of [-6.2, 14.4, 29.6, 41.2])
    i.push(...Qe(c, g, r, m.zN + 0.45, 0, { chunk: "ash" }));
  for (const g of [3.2, 21, 38.4])
    i.push(...Qe(c, g, r, m.zS - 0.45, Math.PI, { chunk: "ash" }));
  for (const [g, A] of [
    [-1.2, m.zN + 0.35],
    [19.2, m.zN + 0.35],
    [40, m.zN + 0.35],
    [9.5, m.zS - 0.35],
    [27.5, m.zS - 0.35],
  ])
    i.push(...To(c, g, r, A, { chunk: "ash", rng: f0, spill: 1 }));
  (i.push(...ma(c, 10, m.zN + 0.02)), i.push(...za(c, 33, 36.4)));
  const p0 = (g, A, O, X, G, l0, h0 = r + 1.85) => {
    f.sign(g, [A, h0, O], G, l0, X, { depth: 0.018 });
    const F = X === "+z" ? 1 : -1;
    for (const [e0, g0, N0, F0] of [
      [A - G / 2 - 0.03, h0 - l0 / 2 - 0.03, A + G / 2 + 0.03, h0 - l0 / 2],
      [A - G / 2 - 0.03, h0 + l0 / 2, A + G / 2 + 0.03, h0 + l0 / 2 + 0.03],
      [A - G / 2 - 0.03, h0 - l0 / 2, A - G / 2, h0 + l0 / 2],
      [A + G / 2, h0 - l0 / 2, A + G / 2 + 0.03, h0 + l0 / 2],
    ])
      a.add(
        T(
          e0,
          g0,
          Math.min(O, O + F * 0.03),
          N0,
          F0,
          Math.max(O, O + F * 0.03),
          0.004,
        ),
        o.galvDark,
        n,
      );
  };
  (p0("poster_cola", 2, m.zN, "+z", 0.62, 0.93),
    p0("poster_coast", 4, m.zN, "+z", 0.62, 0.93),
    p0("notice_service", 11.2, m.zN, "+z", 0.7, 0.5, r + 1.65),
    p0("poster_film", 17, m.zN, "+z", 0.62, 0.93),
    p0("poster_missing", 22.4, m.zN, "+z", 0.5, 0.71, r + 1.6),
    p0("notice_evac", 25.2, m.zN, "+z", 0.56, 0.8),
    p0("route", 31.2, m.zN, "+z", 1.6, 0.4, r + 1.95),
    p0("poster_coast", 44.6, m.zN, "+z", 0.62, 0.93),
    p0("poster_missing", 26.15, m.zN, "+z", 0.36, 0.51, r + 1.2),
    p0("poster_cola", 6, m.zS, "-z", 1.6, 2.4, r + 1.55),
    p0("poster_film", 12, m.zS, "-z", 1.6, 2.4, r + 1.55),
    p0("poster_coast", 24, m.zS, "-z", 1.6, 2.4, r + 1.55),
    p0("notice_evac", 36, m.zS, "-z", 1, 1.43, r + 1.6),
    p0("poster_cola", 48, m.zS, "-z", 1.6, 2.4, r + 1.55));
  for (const g of [0, 18, 30, 42])
    f.sign("ash_name", [g + 0.02, r + 1.95, m.zN], 1.6, 0.31, "+z", {
      depth: 0.02,
    });
  for (const g of [6, 12, 24, 36])
    f.sign("ash_name", [g, r + 1.95, m.zS], 1.6, 0.31, "-z", { depth: 0.02 });
  (m.cols.forEach((g, A) => {
    A % 2 === 0 &&
      (f.sign("ash_name_s", [g, r + 2.15, m.colZ - 0.205], 0.9, 0.225, "-z", {
        depth: 0.012,
      }),
      f.sign("ash_name_s", [g, r + 2.15, m.colZ + 0.205], 0.9, 0.225, "+z", {
        depth: 0.012,
      }));
  }),
    m.cols.forEach((g, A) => {
      A % 2 === 1 &&
        (f.sign(
          A % 4 === 1 ? "ash_plat1" : "ash_name_s",
          [g, r + 2.15, m.colZ - 0.205],
          A % 4 === 1 ? 0.6 : 0.9,
          A % 4 === 1 ? 0.3 : 0.225,
          "-z",
          { depth: 0.012 },
        ),
        f.sign(
          A % 4 === 1 ? "ash_plat2" : "ash_name_s",
          [g, r + 2.15, m.colZ + 0.205],
          A % 4 === 1 ? 0.6 : 0.9,
          A % 4 === 1 ? 0.3 : 0.225,
          "+z",
          { depth: 0.012 },
        ));
    }));
  for (const [g, A] of [
    [m.x0 + 0.5, [d0.z0, m.edgeN - 0.02]],
    [m.x1 - 0.5, [d0.z0, m.edgeN - 0.02]],
    [m.x0 + 0.5, [m.edgeS + 0.02, d0.z1]],
    [m.x1 - 0.5, [m.edgeS + 0.02, d0.z1]],
  ]) {
    const O = A[0],
      X = A[1];
    for (const G of [r + 0.15, r + 1])
      a.add(j([g, G, O], [g, G, X], 0.02, 8), o.steel, n);
    for (const G of [O + 0.02, X - 0.02])
      a.add(j([g, r, G], [g, r + 1.05, G], 0.024, 8), o.steel, n);
    for (let G = O + 0.12; G < X - 0.05; G += 0.12)
      a.add(j([g, r + 0.15, G], [g, r + 1, G], 0.008, 5), o.steel, n);
    (f.sign(
      "danger_rail",
      [g + (g < 0 ? -0.03 : 0.03), r + 0.62, (O + X) / 2],
      0.3,
      0.2,
      g < 0 ? "-x" : "+x",
      { depth: 0.006, plate: !1 },
    ),
      f.sign(
        "no_entry",
        [g + (g < 0 ? 0.03 : -0.03), r + 0.62, (O + X) / 2],
        0.3,
        0.15,
        g < 0 ? "+x" : "-x",
        { depth: 0.006, plate: !1 },
      ),
      i.push({ x0: g - 0.05, x1: g + 0.05, z0: O, z1: X, y0: r, y1: r + 1.1 }));
  }
  (a.add(
    T(-3.6, r + 1.1, m.zN, -3.25, r + 1.6, m.zN + 0.12, 0.01),
    o.yellow,
    n,
  ),
    a.add(
      T(-3.55, r + 1.35, m.zN + 0.12, -3.3, r + 1.5, m.zN + 0.125),
      o.black,
      n,
    ),
    a.add(T(43, r + 0.9, m.zN, 43.7, r + 1.8, m.zN + 0.22, 0.01), o.pipeRed, n),
    a.add(
      j(
        [43.95, r + 0.25, m.zN + 0.12],
        [43.95, r + 0.8, m.zN + 0.12],
        0.075,
        12,
      ),
      o.pipeRed,
      n,
    ),
    i.push({
      x0: 42.95,
      x1: 44.1,
      z0: m.zN,
      z1: m.zN + 0.25,
      y0: r,
      y1: r + 1.8,
    }));
  const o0 = ya(c, 16.5, N[0] - 0.2);
  (ga(c, 27, N[0] - 0.2),
    f.sign(
      "ash_wayout",
      [m.x1 + 0.35, u - 0.45, (c0.z0 + c0.z1) / 2],
      0.96,
      0.24,
      "-x",
      { depth: 0.02 },
    ));
  for (const g of [-1, 1])
    a.add(
      j(
        [m.x1 + 0.35, u, (c0.z0 + c0.z1) / 2 + g * 0.4],
        [m.x1 + 0.35, u - 0.33, (c0.z0 + c0.z1) / 2 + g * 0.4],
        0.006,
        4,
      ),
      o.galvDark,
      n,
    );
  const M0 = s.fixId();
  (a.add(
    T(m.x1 - 0.08, u - 0.4, c0.z1 + 0.06, m.x1, u - 0.2, c0.z1 + 0.42, 0.006),
    o.housing,
    n,
  ),
    f.glow("exit", [m.x1 - 0.08, u - 0.3, c0.z1 + 0.24], 0.34, 0.17, "-x", {
      fx: M0,
      chunk: "ash",
    }),
    s.add({
      a: [m.x1 - 0.15, u - 0.3, c0.z1 + 0.1],
      b: [m.x1 - 0.15, u - 0.3, c0.z1 + 0.38],
      col: [0.22, 1, 0.45],
      cd: 1.2,
      reach: 4.5,
      zone: "ashwood",
      fix: M0,
      state: "on",
      box: K,
      spec: 0.5,
    }));
  for (const [g, A, O] of [
    [m.x0 + 0.09, m.zN + 1.6, "+x"],
    [m.x0 + 0.09, m.zS - 1.6, "+x"],
  ]) {
    const X = s.fixId();
    (a.add(
      T(g - 0.09, r + 2.95, A - 0.12, g, r + 3.15, A + 0.12, 0.02),
      o.iron,
      n,
    ),
      a.add(
        O0(
          new U0(0.07, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2)
            .rotateZ(-Math.PI / 2)
            .scale(0.7, 1, 1.3)
            .translate(g, r + 3.05, A),
          X,
        ),
        o.redLamp,
        { chunk: "ash", cast: !1 },
      ),
      s.add({
        a: [g + 0.1, r + 3.05, A],
        col: [1, 0.25, 0.08],
        cd: 5,
        reach: 7,
        zone: "ashwood",
        fix: X,
        state: "dying",
        box: K,
        point: { cd: 6, dist: 7 },
      }));
  }
  {
    const g = (y0.x0 + y0.x1) / 2,
      A = s.fixId();
    (a.add(
      new D0(0.1, 0.1, 0.06, 20)
        .rotateX(Math.PI / 2)
        .translate(g, y0.y1 + 0.45, m.zN + 0.03),
      o.iron,
      n,
    ),
      a.add(
        O0(
          new U0(0.075, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2)
            .rotateX(Math.PI / 2)
            .translate(g, y0.y1 + 0.45, m.zN + 0.06),
          A,
        ),
        o.warmBulb,
        { chunk: "ash", cast: !1 },
      ),
      s.add({
        a: [g, y0.y1 + 0.45, m.zN + 0.15],
        col: [1, 0.7, 0.42],
        cd: 3,
        reach: 6,
        zone: "ashwood",
        fix: A,
        state: "dying",
        box: K,
        dir: [0, -0.4, 1],
        dirK: 0.9,
        point: { cd: 3.5, dist: 6, at: [g, y0.y1 + 0.2, m.zN + 0.7] },
      }));
  }
  for (const [g, A, O] of [
    [8.6, m.zN + 0.3, 0.6],
    [47.8, m.zN + 0.3, -0.9],
  ])
    (a.add(j([g, u, A], [g, u - 0.3, A], 0.015, 6), o.galvDark, n),
      a.add(
        T(-0.06, -0.06, -0.15, 0.06, 0.06, 0.15, 0.01).applyMatrix4(
          K0([g, u - 0.36, A + 0.1], [0.35, O, 0]),
        ),
        o.plasticW,
        n,
      ));
  (i.push(...ia(c, 18.2, r, 215.2, 0.5, { chunk: "ash", rng: f0 })),
    i.push(...da(c, 24.8, r, 215, 2.4, { chunk: "ash" })),
    fa(c, 21.3, r, 217, 1.1, { chunk: "ash" }),
    ua(c, 12.6, r, 216.4, 0.4, { chunk: "ash" }));
  for (let g = 0; g < 16; g++)
    $t(c, -8 + f0() * 56, r, m.zN + 0.8 + f0() * 3.4, f0() * 6.28, {
      chunk: "ash",
      w: 0.3 + f0() * 0.15,
      l: 0.4 + f0() * 0.2,
    });
  for (let g = 0; g < 6; g++)
    $t(c, -8 + f0() * 56, r, m.zS - 0.8 - f0() * 3.4, f0() * 6.28, {
      chunk: "ash",
    });
  for (let g = 0; g < 14; g++)
    xe(c, -10 + f0() * 58, r, m.zN + 0.5 + f0() * 3.8, f0, "ash");
  for (let g = 0; g < 10; g++)
    $t(c, -10 + f0() * 60, q, m.edgeN + 0.6 + f0() * 5.6, f0() * 6.28, {
      chunk: "ash",
      w: 0.25,
      l: 0.35,
    });
  (f.decal("b_pool", [18.9, r, 216.2], 1.2, 1.1, "+y", {
    rot: 0.4,
    chunk: "ash",
  }),
    f.decal("b_drag", [45, r, 214.6], 3.4, 0.8, "+y", {
      rot: 0.12,
      chunk: "ash",
    }),
    f.decal("steps", [47.6, r, 215.6], 1, 1, "+y", { rot: -1.2, chunk: "ash" }),
    f.decal("b_smear", [44.6, r + 1.2, m.zN], 1.2, 0.6, "+z", { chunk: "ash" }),
    f.decal("b_hand", [45.4, r + 1.45, m.zN], 0.18, 0.22, "+z", {
      chunk: "ash",
      rot: -0.2,
    }),
    f.decal("b_spatter", [m.cols[3], r + 1.6, m.colZ - 0.205], 0.6, 0.6, "-z", {
      chunk: "ash",
      off: 0.014,
    }),
    f.decal("b_pool", [5.2, r, 228.6], 1.4, 1.2, "+y", {
      rot: 1,
      chunk: "ash",
    }),
    f.decal("b_hand", [8, r + 1.3, m.zN], 0.18, 0.22, "+z", {
      chunk: "ash",
      rot: 0.25,
    }),
    f.decal("graf1", [33, r + 3.4, m.zS], 2.4, 0.75, "-z", {
      chunk: "ash",
      matt: !0,
    }));
  for (const [g, A, O, X] of [
    [-1.5, 214.4, 2.6, 0.3],
    [11, 228.6, 3.2, 1.2],
    [23.5, 221, 3.6, 2.1],
    [37.8, 214.2, 2.4, 0.8],
    [44, 222.4, 3, 2.6],
    [5.5, 219.6, 2.2, 0.5],
  ])
    f.decal("damp", [g, u - 0.003, A], O, O * 0.8, "-y", {
      rot: X,
      chunk: "ash",
      matt: !0,
    });
  for (const [g, A, O] of [
    [16.2, m.zN, "+z"],
    [35.4, m.zS, "-z"],
    [-8.2, m.zS, "-z"],
  ])
    f.decal("damp", [g, r + 3.2, A], 1.6, 2.4, O, { chunk: "ash", matt: !0 });
  f.decal("b_spatter", [28.4, r, m.edgeN - 1], 0.9, 0.9, "+y", {
    rot: 2,
    chunk: "ash",
  });
  const S0 = q - 0.2,
    m0 = u;
  (i.push(
    { x0: m.x0, x1: y0.x0, z0: m.zN - 0.3, z1: m.zN, y0: S0, y1: m0 },
    { x0: y0.x1, x1: m.x1, z0: m.zN - 0.3, z1: m.zN, y0: S0, y1: m0 },
  ),
    i.push({ x0: m.x0, x1: m.x1, z0: m.zS, z1: m.zS + 0.3, y0: S0, y1: m0 }),
    i.push(
      { x0: m.x0 - 0.3, x1: m.x0, z0: m.zN, z1: d0.z0, y0: S0, y1: m0 },
      { x0: m.x0 - 0.3, x1: m.x0, z0: d0.z1, z1: m.zS, y0: S0, y1: m0 },
    ),
    i.push(
      { x0: m.x1, x1: m.x1 + 0.3, z0: c0.z1, z1: d0.z0, y0: S0, y1: m0 },
      { x0: m.x1, x1: m.x1 + 0.3, z0: d0.z1, z1: Lt.z0, y0: S0, y1: m0 },
    ));
  for (const g of m.cols)
    i.push(
      { x0: g - 0.22, x1: g + 0.22, z0: m.zN, z1: m.zN + 0.1, y0: S0, y1: m0 },
      { x0: g - 0.22, x1: g + 0.22, z0: m.zS - 0.1, z1: m.zS, y0: S0, y1: m0 },
    );
  for (let g = m.x0; g < m.x1 - 1e-6; g += 2)
    (t.push({
      x0: g,
      x1: Math.min(m.x1, g + 2),
      z0: m.edgeN - 0.05,
      z1: m.edgeN + 0.15,
      y0: r - 1.5,
      y1: r + 2.2,
      on: !0,
      edge: "ashwood_n",
      shot: !1,
    }),
      e.push({
        x0: g,
        x1: Math.min(m.x1, g + 2),
        z0: m.edgeS - 0.15,
        z1: m.edgeS + 0.05,
        y0: r - 1.5,
        y1: r + 2.2,
        on: !0,
        edge: "ashwood_s",
        shot: !1,
      }));
  return (
    i.push(...t, ...e, ...s0.colliders),
    c.sounds.hums.push({
      id: "metro_hum_ashwood",
      pos: [19, r + 3, 216.5],
      zone: "ashwood",
    }),
    c.sounds.drips.push(
      [2.5, r + 0.02, 214],
      [33.5, q + 0.02, 221],
      [-8, q + 0.02, 223],
      [52, r + 0.4, 214.5],
    ),
    {
      colliders: i,
      edges: [...t, ...e],
      edgesN: t,
      edgesS: e,
      board: o0,
      shutter: s0.shutter,
      gate: s0.gate,
      hall: K,
      points: s0.points,
    }
  );
}
function xa(c, a) {
  const { B: o, M: s, L: f, D: h, group: d } = c,
    l = [],
    i = { chunk: "astair" },
    t = c0,
    e = u0,
    n = t.z0,
    r = t.z1,
    u = t.x0,
    b = (g) => {
      if (g < u) return e;
      const A = Math.min(13, Math.floor((g - u) / t.tread) + 1);
      if (g < t.landing[0]) return e + A * t.rise;
      if (g < t.landing[1]) return e + 13 * t.rise;
      const O = Math.min(13, Math.floor((g - t.landing[1]) / t.tread) + 1);
      return e + (13 + O) * t.rise;
    },
    M = (g, A, O) => {
      for (let X = 0; X < A; X++) {
        const G = g + X * t.tread,
          l0 = O + (X + 1) * t.rise;
        (o.add(T(G, O, n, G + t.tread + 0.001, l0, r), s.concFloor, i),
          o.add(
            T(G - 0.004, l0 - 0.025, n, G + 0.045, l0 + 0.006, r, 0.003),
            s.galvDark,
            i,
          ));
      }
    };
  (M(u, 12, e),
    o.add(
      T(u + 12 * t.tread, e, n, t.landing[1], e + 13 * t.rise, r),
      s.concFloor,
      i,
    ),
    o.add(
      T(
        u + 12 * t.tread - 0.004,
        e + 13 * t.rise - 0.025,
        n,
        u + 12 * t.tread + 0.045,
        e + 13 * t.rise + 0.003,
        r,
        0.003,
      ),
      s.galvDark,
      i,
    ),
    M(t.landing[1], 12, e + 13 * t.rise),
    o.add(
      T(t.landing[1] + 12 * t.tread, e + 13 * t.rise, n, t.hall.x1, t.topY, r),
      s.concFloor,
      i,
    ),
    o.add(
      T(
        t.landing[1] + 12 * t.tread - 0.004,
        t.topY - 0.025,
        n,
        t.landing[1] + 12 * t.tread + 0.045,
        t.topY + 0.003,
        r,
        0.003,
      ),
      s.galvDark,
      i,
    ));
  const x = m.ceil,
    w = t.topY + 2.45,
    p = (g) =>
      g < t.landing[1]
        ? x
        : Math.min(
            w,
            x + ((g - t.landing[1]) / (t.topX - t.landing[1])) * (w - x),
          ),
    S = [u, t.landing[0], t.landing[1], t.topX, t.hall.x0];
  for (const [g, A] of [
    ["+z", n],
    ["-z", r],
  ])
    for (let O = 0; O < S.length - 1; O++) {
      const X = S[O],
        G = S[O + 1],
        l0 = b(X + 0.001) - (O === 0 ? t.rise : 0),
        h0 = b(G - 0.001),
        F = p(X),
        e0 = p(G),
        g0 =
          g === "+z"
            ? k0(
                [X, Math.min(l0, e), A],
                [G, Math.min(l0, e), A],
                [G, e0, A],
                [X, F, A],
              )
            : k0(
                [G, Math.min(l0, e), A],
                [X, Math.min(l0, e), A],
                [X, F, A],
                [G, e0, A],
              );
      o.add(g0, s.tileCream, i);
      const N0 = O === 1 || O === 3 ? l0 : e + (O === 0 ? 0 : 13 * t.rise),
        F0 = O === 1 || O === 3 ? h0 : e + (O === 0 ? 13 : 26) * t.rise,
        $0 = O === 0 ? e : O === 2 ? e + 13 * t.rise : N0,
        G0 = O === 0 ? e + 13 * t.rise : O === 2 ? t.topY : F0,
        L0 = g === "+z" ? 0.003 : -0.003,
        xt =
          g === "+z"
            ? k0(
                [X, $0 - 0.02, A + L0],
                [G, G0 - 0.02, A + L0],
                [G, G0 + 0.16, A + L0],
                [X, $0 + 0.16, A + L0],
              )
            : k0(
                [G, G0 - 0.02, A + L0],
                [X, $0 - 0.02, A + L0],
                [X, $0 + 0.16, A + L0],
                [G, G0 + 0.16, A + L0],
              );
      o.add(xt, s.tileTeal, i);
    }
  (o.add(T0(u, n, t.landing[1], r, x, !1), s.ceil, i),
    o.add(
      k0(
        [t.landing[1], x, n],
        [t.topX, w, n],
        [t.topX, w, r],
        [t.landing[1], x, r],
      ),
      s.ceil,
      i,
    ));
  for (const g of [n + 0.07, r - 0.07]) {
    const A = [
      [u - 0.3, e + 0.9],
      [t.landing[0], e + 13 * t.rise + 0.9],
      [t.landing[1], e + 13 * t.rise + 0.9],
      [t.topX, t.topY + 0.9],
      [t.topX + 0.4, t.topY + 0.9],
    ];
    for (let O = 0; O < A.length - 1; O++)
      o.add(
        j([A[O][0], A[O][1], g], [A[O + 1][0], A[O + 1][1], g], 0.022, 10),
        s.steel,
        i,
      );
    for (let O = u; O < t.topX; O += 1.1) {
      const X = b(O) + 0.9 + 0.04;
      o.add(
        j(
          [O, X - 0.05, g],
          [O, X - 0.05, g + (g < 214 ? -0.07 : 0.07)],
          0.009,
          5,
        ),
        s.steel,
        i,
      );
    }
  }
  const y = t.hall,
    L = t.topY,
    v = L + 3.2,
    C = [
      ["+z", y.z0, t.topX, y.x1],
      ["-z", y.z1, t.topX, y.x1],
    ];
  for (const [g, A, O, X] of C) o.add(r0(g, A, O, X, L, v), s.paintHigh, i);
  (o.add(r0("-x", y.x1, y.z0, y.z1, L, v), s.paintHigh, i),
    o.add(T0(t.topX, y.z0, y.x1, y.z1, L, !0), s.concFloor, i),
    o.add(T0(t.topX, y.z0, y.x1, y.z1, v, !1), s.ceil, i),
    o.add(r0("-x", t.topX, y.z0, n, w, v), s.paintHigh, i),
    o.add(r0("-x", t.topX, r, y.z1, w, v), s.paintHigh, i),
    o.add(r0("-x", t.topX, y.z0, n, L, w), s.paintHigh, i),
    o.add(r0("-x", t.topX, r, y.z1, L, w), s.paintHigh, i),
    o.add(
      k0([t.topX, w, n], [t.topX, w, r], [t.topX, v, r], [t.topX, v, n]),
      s.paintHigh,
      i,
    ));
  const k = t.shutterX,
    R = new Jt();
  ((R.name = "ash_shutter"), d.add(R));
  const W = [];
  for (let g = 0; g < v - 0.35 - (L + 0.02); g += 0.075)
    W.push(
      T(k - 0.025, g, y.z0 + 0.05, k + 0.025, g + 0.07, y.z1 - 0.05, 0.02),
    );
  const Y = q0(W),
    $ = new bt(Y, s.galvDark);
  (($.castShadow = !0),
    ($.receiveShadow = !0),
    R.add($),
    o.add(T(k - 0.18, v - 0.42, y.z0, k + 0.18, v, y.z1), s.galvDark, i));
  for (const g of [y.z0, y.z1 - 0.08])
    o.add(T(k - 0.06, L, g, k + 0.06, v - 0.4, g + 0.08), s.galvDark, i);
  const Z = {
      k: 0.5,
      goal: 0.5,
      rate: 0,
      set(g) {
        ((Z.k = Z.goal = g), V());
      },
      to(g, A = 2) {
        ((Z.goal = g),
          (Z.rate = Math.abs(g - Z.k) / Math.max(0.05, A)),
          c.audio?.play?.("metro_shutter_" + (g > Z.k ? "up" : "down"), {
            pos: [k, L + 1.5, (y.z0 + y.z1) / 2],
            vol: 0.9,
          }));
      },
      rattle() {
        (c.audio?.play?.("metro_shutter_rattle", {
          pos: [k, L + 1.2, (y.z0 + y.z1) / 2],
          vol: 1,
        }),
          (Z.shake = 0.6));
      },
      shake: 0,
    },
    H = v - 0.35 - (L + 0.02),
    V = () => {
      R.position.set(0, L + 0.02 + Z.k * H, 0);
    };
  (Z.set(0.5),
    c.anim.push((g, A) => {
      if (Z.k !== Z.goal) {
        const O = Z.goal - Z.k;
        ((Z.k += Math.sign(O) * Math.min(Math.abs(O), Z.rate * g)), V());
      }
      Z.shake > 0 &&
        ((Z.shake = Math.max(0, Z.shake - g)),
        (R.position.x = Math.sin(A * 70) * 0.012 * Z.shake));
    }));
  const I = [u - 0.5, e - 0.5, y.z0 - 0.1, y.x1 + 0.1, v + 0.1, y.z1 + 0.1],
    E = f.fixId(),
    N = (t.landing[0] + t.landing[1]) / 2;
  (o.add(
    new D0(0.11, 0.11, 0.06, 20).translate(N, x - 0.03, (n + r) / 2),
    s.iron,
    i,
  ),
    o.add(
      O0(
        new U0(
          0.085,
          14,
          8,
          0,
          Math.PI * 2,
          Math.PI / 2,
          Math.PI / 2,
        ).translate(N, x - 0.06, (n + r) / 2),
        E,
      ),
      s.warmBulb,
      { chunk: "astair", cast: !1 },
    ),
    f.add({
      a: [N, x - 0.14, (n + r) / 2],
      col: [1, 0.72, 0.45],
      cd: 9,
      reach: 7,
      zone: "ashwood",
      fix: E,
      state: "flicker",
      box: I,
      point: { cd: 9, dist: 7 },
    }));
  const Q = f.fixId(),
    K = k - 0.7,
    s0 = v,
    f0 = (y.z0 + y.z1) / 2 - 0.4;
  (o.add(new D0(0.12, 0.12, 0.07, 20).translate(K, s0 - 0.035, f0), s.iron, i),
    o.add(
      O0(
        new U0(0.09, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2).translate(
          K,
          s0 - 0.07,
          f0,
        ),
        Q,
      ),
      s.warmBulb,
      { chunk: "astair", cast: !1 },
    ));
  for (let g = 0; g < 4; g++)
    o.add(
      new Ot(0.1, 0.004, 4, 20, Math.PI)
        .rotateY((g / 4) * Math.PI)
        .rotateX(Math.PI)
        .translate(K, s0 - 0.07, f0),
      s.iron,
      i,
    );
  f.add({
    a: [K, s0 - 0.2, f0],
    col: [1, 0.75, 0.5],
    cd: 9,
    reach: 9,
    zone: "ashwood",
    fix: Q,
    state: "on",
    box: I,
    weight: 1.2,
    down: !0,
    lobe: 0,
    spot: {
      cd: 24,
      dist: 14,
      angle: 1.15,
      pen: 0.85,
      dir: [-1, -1.05, 0.05],
      at: [K, s0 - 0.16, f0],
    },
  });
  const p0 = f.fixId();
  (o.add(
    O0(
      new U0(0.06, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2)
        .rotateZ(Math.PI / 2)
        .translate(y.x1 - 0.01, L + 2.5, (y.z0 + y.z1) / 2 + 1.2),
      p0,
    ),
    s.redLamp,
    { chunk: "astair", cast: !1 },
  ),
    f.add({
      a: [y.x1 - 0.12, L + 2.5, (y.z0 + y.z1) / 2 + 1.2],
      col: [1, 0.2, 0.08],
      cd: 3,
      reach: 6,
      zone: "ashwood",
      fix: p0,
      state: "dying",
      box: [k, L - 0.2, y.z0, y.x1, v, y.z1],
    }),
    h.decal("b_smear", [t.topX + 0.4, L + 1, y.z0 + 0.004], 1.4, 0.7, "+z", {
      chunk: "astair",
    }),
    h.decal("graf2", [k + 0.03, L + 2, (y.z0 + y.z1) / 2], 1.6, 0.53, "-x", {
      chunk: "astair",
      matt: !0,
    }),
    h.decal(
      "b_hand",
      [t.landing[0] + 0.6, e + 13 * t.rise + 1.1, r - 0.004],
      0.18,
      0.22,
      "-z",
      { chunk: "astair", rot: 0.4 },
    ));
  const o0 = Lt;
  for (let g = 0; g < 12; g++) {
    const A = o0.x0 + g * 0.3,
      O = e + (g + 1) * 0.17;
    o.add(T(A, e, o0.z0, A + 0.301, O, o0.z1), s.concFloor, {
      chunk: "astair",
    });
  }
  o.add(
    T(o0.x0 + 3.6, e, o0.z0, o0.x0 + 5, e + 13 * 0.17, o0.z1),
    s.concFloor,
    { chunk: "astair" },
  );
  for (const [g, A] of [
    ["+z", o0.z0],
    ["-z", o0.z1],
  ])
    o.add(r0(g, A, o0.x0, o0.x0 + 5, e, m.ceil), s.tileCream, {
      chunk: "astair",
    });
  (o.add(
    r0("-x", o0.x0 + 5, o0.z0, o0.z1, e + 13 * 0.17, m.ceil),
    s.paintHigh,
    { chunk: "astair" },
  ),
    o.add(T0(o0.x0, o0.z0, o0.x0 + 5, o0.z1, m.ceil, !1), s.ceil, {
      chunk: "astair",
    }));
  const M0 = o0.gateX,
    S0 = [];
  for (let g = o0.z0 + 0.05; g < o0.z1 - 0.02; g += 0.18)
    S0.push(j([M0, e + 0.02, g], [M0, e + 2.3, g], 0.009, 5));
  for (let g = o0.z0 + 0.05; g < o0.z1 - 0.2; g += 0.18)
    (S0.push(j([M0, e + 0.1, g], [M0, e + 2.2, g + 0.18], 0.006, 4)),
      S0.push(j([M0, e + 0.1, g + 0.18], [M0, e + 2.2, g], 0.006, 4)));
  (S0.push(j([M0, e + 2.32, o0.z0], [M0, e + 2.32, o0.z1], 0.03, 6)),
    o.add(q0(S0), s.steel, { chunk: "astair" }),
    o.add(
      T(
        M0 - 0.04,
        e + 1,
        (o0.z0 + o0.z1) / 2 - 0.04,
        M0 + 0.04,
        e + 1.1,
        (o0.z0 + o0.z1) / 2 + 0.04,
        0.01,
      ),
      s.galv,
      { chunk: "astair" },
    ),
    h.sign(
      "no_entry",
      [M0 - 0.03, e + 1.45, (o0.z0 + o0.z1) / 2 + 0.6],
      0.42,
      0.21,
      "-x",
      { depth: 0.01 },
    ),
    l.push({
      x0: M0 - 0.1,
      x1: M0 + 0.1,
      z0: o0.z0,
      z1: o0.z1,
      y0: e,
      y1: e + 2.4,
    }),
    l.push(
      { x0: u, x1: t.topX, z0: n - 0.3, z1: n, y0: e - 0.5, y1: t.topY + 3 },
      { x0: u, x1: t.topX, z0: r, z1: r + 0.3, y0: e - 0.5, y1: t.topY + 3 },
    ),
    l.push(
      { x0: t.topX, x1: y.x1, z0: y.z0 - 0.3, z1: y.z0, y0: e - 0.5, y1: v },
      { x0: t.topX, x1: y.x1, z0: y.z1, z1: y.z1 + 0.3, y0: e - 0.5, y1: v },
      { x0: y.x1, x1: y.x1 + 0.3, z0: y.z0, z1: y.z1, y0: e - 0.5, y1: v },
    ),
    l.push(
      { x0: t.topX - 0.3, x1: t.topX, z0: y.z0, z1: n, y0: e - 0.5, y1: v },
      { x0: t.topX - 0.3, x1: t.topX, z0: r, z1: y.z1, y0: e - 0.5, y1: v },
    ));
  const m0 = {
    stairs: [
      [y.x1 - 0.8, y.z0 + 0.9],
      [y.x1 - 1.2, y.z1 - 0.9],
      [y.x1 - 2.4, (y.z0 + y.z1) / 2],
      [k + 1, y.z0 + 1],
      [k + 1, y.z1 - 1],
      [t.topX + 1.2, (n + r) / 2 - 0.8],
      [t.landing[1] + 2.6, (n + r) / 2 + 0.7],
      [t.landing[1] + 1.4, (n + r) / 2 - 0.6],
      [u + 0.4, (n + r) / 2],
    ],
  };
  return {
    colliders: l,
    shutter: Z,
    gate: null,
    points: m0,
    stepAt: b,
    ceilAt: p,
  };
}
function ma(c, a, o) {
  const { B: s, M: f, L: h, D: d } = c,
    l = { chunk: "ash" },
    i = u0,
    t = 0.92,
    e = 0.78,
    n = 1.86;
  (s.add(T(a - t / 2, i, o, a + t / 2, i + n, o + e, 0.02), f.machine, l),
    s.add(
      T(
        a - t / 2 + 0.04,
        i + 0.08,
        o + e,
        a + t / 2 - 0.04,
        i + 0.32,
        o + e + 0.01,
      ),
      f.black,
      l,
    ),
    s.add(
      T(
        a + t / 2 - 0.2,
        i + 0.45,
        o + e,
        a + t / 2 - 0.04,
        i + 1.75,
        o + e + 0.03,
        0.006,
      ),
      f.plastic,
      l,
    ));
  for (let u = 0; u < 4; u++)
    s.add(
      T(
        a + t / 2 - 0.16,
        i + 1.2 - u * 0.12,
        o + e + 0.03,
        a + t / 2 - 0.08,
        i + 1.26 - u * 0.12,
        o + e + 0.04,
        0.004,
      ),
      f.galv,
      l,
    );
  const r = h.fixId();
  return (
    d.glow("drinks", [a - 0.09, i + 1.08, o + e], 0.62, 1.24, "+z", {
      fx: r,
      chunk: "ash",
    }),
    h.add({
      a: [a - 0.09, i + 0.55, o + e + 0.15],
      b: [a - 0.09, i + 1.6, o + e + 0.15],
      col: [1, 0.62, 0.55],
      cd: 7,
      reach: 4.2,
      zone: "ashwood",
      fix: r,
      state: "on",
      dir: [0, -0.25, 1],
      dirK: 0.95,
      box: [a - 4, i - 0.2, m.zN - 0.05, a + 4, i + 4, o + 5],
      weight: 1.3,
      point: { cd: 5, dist: 4.5, below: 0 },
    }),
    c.sounds.hums.push({
      id: "metro_drinks_hum",
      pos: [a, i + 0.6, o + e],
      zone: "ashwood",
    }),
    [
      {
        x0: a - t / 2,
        x1: a + t / 2,
        z0: o,
        z1: o + e + 0.04,
        y0: i,
        y1: i + n,
      },
    ]
  );
}
function za(c, a, o) {
  const { B: s, M: f, D: h, group: d } = c,
    l = { chunk: "ash" },
    i = u0,
    t = m.zN,
    e = m.zN + 1.9,
    n = i + 2.7;
  (s.add(T(a, i, t, a + 0.08, n, e, 0.01), f.woodDark, l),
    s.add(T(o - 0.08, i, t, o, n, e, 0.01), f.woodDark, l),
    s.add(T(a, i, e - 0.08, o, i + 1, e, 0.01), f.woodDark, l),
    s.add(
      T(a - 0.04, i + 1, e - 0.12, o + 0.04, i + 1.05, e + 0.18, 0.01),
      f.woodDark,
      l,
    ),
    s.add(T(a, n - 0.42, e - 0.08, o, n, e + 0.04, 0.01), f.woodDark, l),
    s.add(T(a, n, t, o, n + 0.06, e + 0.04, 0.01), f.woodDark, l),
    h.sign("kiosk", [(a + o) / 2, n - 0.21, e + 0.04], 2.6, 0.39, "+z", {
      depth: 0.004,
      plate: !1,
    }));
  for (let x = 0; x < 3; x++) {
    const w = i + 1.1 + x * 0.36;
    s.add(T(a + 0.1, w, t + 0.05, o - 0.1, w + 0.02, t + 0.35), f.woodDark, l);
    for (let p = 0; p < 9; p++)
      s.add(
        T(
          a + 0.15 + p * 0.34,
          w + 0.02,
          t + 0.12,
          a + 0.38 + p * 0.34,
          w + 0.3,
          t + 0.14,
        ),
        [f.fabricR, f.paper, f.fabric, f.plastic, f.print][(p * 3 + x) % 5],
        l,
      );
  }
  const r = [],
    u = (o - a) / 2 - 0.08;
  for (let x = 0; x < 0.62; x += 0.05)
    r.push(T(-u, -x - 0.045, -0.012, u, -x, 0.012, 0.01));
  const b = q0(r),
    M = new bt(b, f.galvDark);
  return (
    (M.castShadow = !0),
    (M.receiveShadow = !0),
    M.position.set((a + o) / 2, n - 0.42, e + 0.02),
    (M.rotation.z = 0.02),
    d.add(M),
    s.add(
      T(a + 0.04, n - 0.5, e - 0.02, o - 0.04, n - 0.42, e + 0.08, 0.02),
      f.galvDark,
      l,
    ),
    [{ x0: a, x1: o, z0: t, z1: e + 0.2, y0: i, y1: n }]
  );
}
function ya(c, a, o) {
  const { B: s, M: f, L: h, A: d, group: l } = c,
    i = { chunk: "ash" },
    t = m.ceil,
    e = 1.8,
    n = e / d.board.aspect + 0.06,
    r = t - 0.95;
  s.add(
    T(
      a - 0.06,
      r - n / 2 - 0.04,
      o - e / 2 - 0.04,
      a + 0.06,
      r + n / 2 + 0.04,
      o + e / 2 + 0.04,
      0.012,
    ),
    f.black,
    i,
  );
  for (const M of [-1, 1])
    s.add(
      j([a, t, o + M * 0.7], [a, r + n / 2 + 0.04, o + M * 0.7], 0.008, 5),
      f.galvDark,
      i,
    );
  const u = h.fixId(),
    b = c.boardMaterial;
  for (const [M, x] of [
    ["+x", 0.061],
    ["-x", -0.061],
  ]) {
    const w = Rt([0, 0, 1, 1], [a + x, r, o], e - 0.04, n - 0.08, M, 0, 0.001),
      p = w.attributes.position.count;
    (w.setAttribute("aFix", new gt(new Float32Array(p).fill(u), 1)),
      s.add(w, b, { chunk: "ash", cast: !1 }));
  }
  return (
    h.add({
      a: [a, r, o - 0.8],
      b: [a, r, o + 0.8],
      col: [1, 0.6, 0.15],
      cd: 2.5,
      reach: 4,
      zone: "ashwood",
      fix: u,
      state: "on",
      box: [a - 5, u0 - 0.2, m.zN - 0.05, a + 5, t, m.edgeN + 2],
      spec: 0.8,
    }),
    d.board
  );
}
function ga(c, a, o, s, f) {
  const { B: h, M: d, D: l } = c,
    i = { chunk: "ash" },
    t = m.ceil,
    e = t - 0.9,
    n = 0.26;
  (h.add(
    new D0(n + 0.03, n + 0.03, 0.14, 32)
      .rotateZ(Math.PI / 2)
      .translate(a, e, o),
    d.black,
    i,
  ),
    h.add(j([a, t, o], [a, e + n + 0.02, o], 0.012, 6), d.galvDark, i));
  for (const [r, u] of [
    ["+x", 0.071],
    ["-x", -0.071],
  ]) {
    l.sign("clock", [a + u, e, o], n * 2, n * 2, r, { depth: 0, plate: !1 });
    const b = r === "+x" ? 1 : -1,
      M = -0.3986111111111111 * Math.PI * 2,
      x = -0.7833333333333333 * Math.PI * 2;
    for (const [w, p, S] of [
      [M, n * 0.55, 0.018],
      [x, n * 0.85, 0.012],
    ]) {
      const y = T(-S / 2, -0.03, -0.002, S / 2, p, 0.002);
      (y.applyMatrix4(
        K0(
          [a + u + b * 0.004, e, o],
          [0, b > 0 ? Math.PI / 2 : -Math.PI / 2, 0],
        ).multiply(new rt().makeRotationZ(w)),
      ),
        h.add(y, d.black, i));
    }
  }
}
const ba = [
    [-0.075, -0.172],
    [0.075, -0.172],
    [0.075, -0.162],
    [0.012, -0.145],
    [0.008, -0.05],
    [0.036, -0.042],
    [0.036, -0.008],
    [0.03, 0],
    [-0.03, 0],
    [-0.036, -0.008],
    [-0.036, -0.042],
    [-0.008, -0.05],
    [-0.012, -0.145],
    [-0.075, -0.162],
  ],
  Ma = [
    [0.029, 6e-4],
    [-0.029, 6e-4],
  ],
  Dt = 0.7535;
function jt(
  c,
  {
    step: a = 2,
    off: o = 0,
    up: s = 0,
    chunkLen: f = 60,
    from: h = 0,
    to: d = 1 / 0,
    tag: l = "t",
  } = {},
) {
  const i = [];
  let t = 0,
    e = null,
    n = -1e9,
    r = 0;
  const u = new ot(),
    b = new ot(0, 1, 0),
    M = new ot();
  for (let x = 0; x < c.length; x++) {
    if (
      (x > 0 && (t += Math.hypot(c[x][0] - c[x - 1][0], c[x][2] - c[x - 1][2])),
      t < h - a || t > d + a)
    )
      continue;
    const w = x === c.length - 1 || t >= d;
    if (t - n < a && !w) continue;
    const p = c[Math.max(0, x - 1)],
      S = c[Math.min(c.length - 1, x + 1)],
      y = S[0] - p[0],
      L = S[2] - p[2],
      v = Math.hypot(y, L) || 1;
    if (
      (u.set(-L / v, 0, y / v),
      M.set(c[x][0] + u.x * o, c[x][1] + s, c[x][2] + u.z * o),
      (!e || t - e.t0 > f) &&
        (e && e.frames.push({ p: M.clone(), s: u.clone(), u: b.clone(), t }),
        (e = { chunk: l + r++, t0: t, frames: [] }),
        i.push(e)),
      e.frames.push({ p: M.clone(), s: u.clone(), u: b.clone(), t }),
      (n = t),
      w)
    )
      break;
  }
  return i.filter((x) => x.frames.length > 1);
}
function ka(c, a) {
  const { B: o, M: s, L: f, group: h } = c,
    d = [],
    l = [];
  for (let x = et.x0; x <= ht.buffer2 + 0.01; x += 1) l.push([x, V0, he]);
  const i = [
      { pts: a.pts, tag: "trk", third: 1.18 },
      { pts: l, tag: "tr2", third: -1.18 },
    ],
    t = [],
    e = [],
    n = [];
  for (const x of i) {
    for (const y of [-1, 1])
      for (const L of jt(x.pts, { off: y * Dt, step: 2, tag: x.tag + "r" }))
        (o.add(
          zt(ba, L.frames, { closed: !0, caps: !1, smooth: 0.7 }),
          s.rust,
          { chunk: L.chunk, cast: !1 },
        ),
          o.add(zt(Ma, L.frames, { closed: !1, caps: !1 }), s.railHead, {
            chunk: L.chunk,
            cast: !1,
          }));
    for (const y of jt(x.pts, { off: x.third, step: 2, tag: x.tag + "c" }))
      (o.add(
        zt(
          [
            [-0.04, -0.07],
            [0.04, -0.07],
            [0.04, 0],
            [-0.04, 0],
          ],
          y.frames,
          { closed: !0, caps: !1, smooth: 0.9 },
        ),
        s.steel,
        { chunk: y.chunk, cast: !1 },
      ),
        o.add(
          zt(
            [
              [-0.17, 0.11],
              [0.17, 0.11],
              [0.17, 0.13],
              [-0.17, 0.13],
            ],
            y.frames,
            { closed: !0, caps: !1, smooth: 0.9 },
          ),
          s.cover,
          { chunk: y.chunk, cast: !1 },
        ));
    let w = 0,
      p = 0.3,
      S = 1;
    for (let y = 1; y < x.pts.length; y++) {
      const L = x.pts[y - 1],
        v = x.pts[y],
        C = Math.hypot(v[0] - L[0], v[2] - L[2]);
      for (; p <= w + C;) {
        const k = (p - w) / C,
          R = L[0] + (v[0] - L[0]) * k,
          W = L[2] + (v[2] - L[2]) * k,
          Y = Math.atan2(-(v[2] - L[2]), v[0] - L[0]);
        if (
          (t.push(K0([R, V0 - 0.172 - 0.095, W], [0, Y, 0])),
          (R > -13 && R < 51) || R > 385)
        )
          for (const $ of [-1, 1])
            e.push(
              K0([R, V0 - 0.172, W], [0, Y, 0]).multiply(
                new rt().makeTranslation(0, 0, $ * Dt),
              ),
            );
        p += 0.65;
      }
      for (; S <= w + C;) {
        const k = (S - w) / C,
          R = L[0] + (v[0] - L[0]) * k,
          W = L[2] + (v[2] - L[2]) * k,
          Y = Math.atan2(-(v[2] - L[2]), v[0] - L[0]);
        (n.push(
          K0([R, V0 - 0.07, W], [0, Y, 0]).multiply(
            new rt().makeTranslation(0, 0, x.third),
          ),
        ),
          (S += 2.5));
      }
      w += C;
    }
  }
  const r = new co(0.26, 0.19, 2.5);
  r.translate(0, 0, 0);
  {
    const x = r.attributes.uv,
      w = r.attributes.position;
    for (let p = 0; p < x.count; p++)
      x.setXY(p, w.getZ(p) + w.getX(p), w.getY(p));
  }
  h.add(Bt(r, s.sleeper, t, { name: "track:sleepers", receive: !0 }));
  const u = q0([
    T(-0.08, -0.012, -0.17, 0.08, 0, 0.17),
    T(-0.03, 0, -0.11, 0.03, 0.03, -0.075),
    T(-0.03, 0, 0.075, 0.03, 0.03, 0.11),
  ]);
  h.add(Bt(u, s.galvDark, e, { name: "track:fastenings" }));
  const b = q0([
    new D0(0.045, 0.06, 0.14, 10).translate(0, -0.11, 0),
    T(-0.06, -0.19, -0.08, 0.06, -0.17, 0.08),
  ]);
  h.add(Bt(b, s.plasticW, n, { name: "track:insulators" }));
  const M = (x, w, p, S, y) => {
    const L = { chunk: "buf" + Math.round(x) },
      v = V0,
      C = [];
    for (const R of [-1, 1])
      (C.push(
        T(
          x - 0.15,
          v - 0.17,
          w + R * Dt - 0.08,
          x + 0.15,
          v + 0.95,
          w + R * Dt + 0.08,
          0.01,
        ),
      ),
        C.push(
          j(
            [x, v + 0.85, w + R * Dt],
            [x + p * 1.7, v - 0.1, w + R * Dt],
            0.05,
            8,
          ),
        ));
    (C.push(
      T(x - 0.18, v + 0.55, w - 1.05, x + 0.18, v + 1.05, w + 1.05, 0.02),
    ),
      o.add(q0(C), s.steel, L));
    const k = new D0(0.2, 0.2, 0.32, 20)
      .rotateZ(Math.PI / 2)
      .translate(x - p * 0.34, v + 0.8, w);
    (o.add(k, s.iron, L),
      o.add(
        T(
          x - p * 0.52 - 0.02,
          v + 0.62,
          w - 0.22,
          x - p * 0.5 + 0.02,
          v + 0.98,
          w + 0.22,
          0.01,
        ),
        s.rubber,
        L,
      ));
    for (const R of [-0.6, 0.6]) {
      const W = f.fixId();
      (o.add(
        new D0(0.08, 0.08, 0.1, 16)
          .rotateZ(Math.PI / 2)
          .translate(x - p * 0.2, v + 1.17, w + R),
        s.iron,
        L,
      ),
        o.add(
          O0(
            new U0(0.06, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2)
              .rotateZ(Math.PI / 2)
              .translate(x - p * 0.26, v + 1.17, w + R),
            W,
          ),
          s.redLamp,
          { chunk: L.chunk, cast: !1 },
        ),
        f.add({
          a: [x - p * 0.4, v + 1.17, w + R],
          col: [1, 0.12, 0.05],
          cd: 2.2,
          reach: 6,
          zone: S,
          fix: W,
          state: "on",
          box: y,
          spec: 0.7,
          point: R > 0 ? { cd: 3, dist: 6 } : void 0,
        }));
    }
  };
  return (
    M(P.bufferX, P.track, 1, "parkgate", [
      P.hallX0,
      q - 0.5,
      P.hallZ0,
      P.hallX1,
      P.ceil,
      P.hallZ1 + 0.1,
    ]),
    M(ht.buffer2, he, 1, "tunnel", [ht.x0, q - 0.5, 217, ht.x1 + 0.1, -5, 226]),
    d.push({
      x0: P.bufferX - 0.3,
      x1: P.bufferX + 1.8,
      z0: P.track - 1.1,
      z1: P.track + 1.1,
      y0: q,
      y1: V0 + 1.1,
    }),
    { colliders: d }
  );
}
const Sa = [1, 0.52, 0.12];
function re(c, a, o, s, f, h = "red", d = "tunnel", l = null) {
  const { B: i, M: t, L: e } = c,
    n = { chunk: "sig" + Math.round(a) },
    r = -1;
  (i.add(
    T(a - 0.09, o - 0.42, s - 0.17, a + 0.09, o + 0.42, s + 0.17, 0.02),
    t.black,
    n,
  ),
    i.add(j([a, o - 0.42, s], [a, o - 1.1, s], 0.04, 8), t.galvDark, n));
  const u = {};
  return (
    [
      ["red", [1, 0.1, 0.05], t.redLamp, 0.26],
      ["yellow", [1, 0.6, 0.1], t.amberLamp, 0],
      ["green", [0.15, 1, 0.4], t.greenLamp, -0.26],
    ].forEach(([b, M, x, w]) => {
      const p = e.fixId();
      (i.add(
        O0(
          new uo(0.07, 18)
            .rotateY(-Math.PI / 2)
            .translate(a + r * 0.092, o + w, s),
          p,
        ),
        x,
        { chunk: n.chunk, cast: !1 },
      ),
        i.add(
          new D0(0.095, 0.095, 0.12, 16, 1, !0, 0, Math.PI)
            .rotateZ(Math.PI / 2)
            .rotateX(Math.PI)
            .translate(a + r * 0.15, o + w + 0.02, s),
          t.black,
          n,
        ),
        (u[b] = e.add({
          a: [a + r * 0.2, o + w, s],
          col: M,
          cd: 1.6,
          reach: 5,
          zone: d,
          fix: p,
          state: b === h ? "on" : "off",
          box: l || [a - 6, q - 0.3, s - 5, a + 6, o + 3, s + 5],
          spec: 0.8,
        })));
    }),
    {
      set(b) {
        for (const [M, x] of Object.entries(u))
          x.state = M === b ? "on" : "off";
        c.audio?.play?.("metro_signal_click", { pos: [a, o, s], vol: 0.5 });
      },
      lamps: u,
    }
  );
}
function Ke(c, a, o, s, f, h) {
  const { B: d, M: l, L: i } = c,
    t = { chunk: h },
    e = i.fixId(),
    n = Math.atan2(o[0], o[2]),
    r = K0(a, [0, n, 0]);
  (d.add(
    T(-0.12, -0.09, 0, 0.12, 0.09, 0.08, 0.012).applyMatrix4(r),
    l.galvDark,
    t,
  ),
    d.add(
      O0(
        new U0(0.075, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2)
          .rotateX(Math.PI / 2)
          .scale(1.25, 0.85, 1)
          .translate(0, 0, 0.08)
          .applyMatrix4(r),
        e,
      ),
      l.sodium,
      { chunk: h, cast: !1 },
    ));
  for (let b = 0; b < 3; b++)
    d.add(
      T(
        -0.1,
        -0.004 + (b - 1) * 0.045,
        0.08,
        0.1,
        0.004 + (b - 1) * 0.045,
        0.16,
      ).applyMatrix4(r),
      l.galvDark,
      { chunk: h, cast: !1 },
    );
  const u = [a[0] + o[0] * 0.25, a[1] - 0.05, a[2] + o[2] * 0.25];
  return i.add({
    a: u,
    col: Sa,
    cd: 18,
    reach: 10,
    zone: "tunnel",
    fix: e,
    state: s,
    box: f,
    point: { cd: 26, dist: 11, below: 0 },
    weight: 0.9,
  });
}
function Ta(c, a) {
  const { B: o, M: s, rng: f } = c,
    h = [],
    d = {},
    l = d0.roof,
    i = (v, C, k, R, W = []) => {
      for (let Y = v; Y < C - 1e-6; Y += 50) {
        const $ = Math.min(C, Y + 50),
          Z = k + Math.round(Y),
          H = { chunk: Z };
        (o.add(T0(Y, d0.z0, $, d0.z1, q, !0), s.bed, H),
          o.add(T0(Y, d0.z0, $, d0.z1, l, !1), s.concDark, H));
        for (const [V, I, E] of [
          ["+z", d0.z0, -1],
          ["-z", d0.z1, 1],
        ]) {
          const N = W.filter(
            ([K, s0]) => s0 === E && K - 0.6 >= Y && K + 0.6 <= $,
          )
            .map(([K]) => K)
            .sort((K, s0) => K - s0);
          let Q = Y;
          for (const K of N) {
            (o.add(r0(V, I, Q, K - 0.6, q, l), s.concDark, H),
              o.add(r0(V, I, K - 0.6, K + 0.6, q + 2, l), s.concDark, H));
            const s0 = I + E * 0.6;
            (o.add(r0(V, s0, K - 0.6, K + 0.6, q, q + 2), s.paintHigh, H),
              o.add(
                r0("+x", K - 0.6, Math.min(I, s0), Math.max(I, s0), q, q + 2),
                s.paintHigh,
                H,
              ),
              o.add(
                r0("-x", K + 0.6, Math.min(I, s0), Math.max(I, s0), q, q + 2),
                s.paintHigh,
                H,
              ),
              o.add(
                T0(
                  K - 0.6,
                  Math.min(I, s0),
                  K + 0.6,
                  Math.max(I, s0),
                  q + 2,
                  !1,
                ),
                s.paintHigh,
                H,
              ),
              o.add(
                T0(K - 0.6, Math.min(I, s0), K + 0.6, Math.max(I, s0), q, !0),
                s.bed,
                H,
              ),
              (Q = K + 0.6));
          }
          o.add(r0(V, I, Q, $, q, l), s.concDark, H);
        }
        for (const [V, I] of [
          [d0.z0, 1],
          [d0.z1, -1],
        ]) {
          for (const E of [q + 2.75, q + 3.25]) {
            (o.add(
              T(
                Y,
                E,
                Math.min(V, V + I * 0.32),
                $,
                E + 0.012,
                Math.max(V, V + I * 0.32),
              ),
              s.galvDark,
              H,
            ),
              o.add(
                T(
                  Y,
                  E,
                  Math.min(V + I * 0.31, V + I * 0.32),
                  $,
                  E + 0.06,
                  Math.max(V + I * 0.31, V + I * 0.32),
                ),
                s.galvDark,
                H,
              ));
            for (let N = 0; N < 4; N++)
              o.add(
                j(
                  [Y, E + 0.03, V + I * (0.05 + N * 0.065)],
                  [$, E + 0.03, V + I * (0.05 + N * 0.065)],
                  0.016 + (N % 2) * 0.006,
                  6,
                ),
                N === 1 ? s.cableR : s.cable,
                { chunk: Z, cast: !1 },
              );
          }
          for (let E = Y + 0.75; E < $; E += 1.5) {
            o.add(
              T(
                E - 0.02,
                q + 2.6,
                Math.min(V, V + I * 0.04),
                E + 0.02,
                q + 3.4,
                Math.max(V, V + I * 0.04),
              ),
              s.galvDark,
              H,
            );
            for (const N of [q + 2.75, q + 3.25])
              o.add(
                T(
                  E - 0.015,
                  N - 0.035,
                  Math.min(V, V + I * 0.33),
                  E + 0.015,
                  N,
                  Math.max(V, V + I * 0.33),
                ),
                s.galvDark,
                H,
              );
          }
        }
      }
      for (const [Y, $, Z] of R) {
        const H = $ < 0 ? d0.z0 : d0.z1;
        Ke(
          c,
          [Y, q + 2.35, H],
          [0, 0, -$],
          Z,
          [Y - 13, q - 0.3, d0.z0 - 0.05, Y + 13, l + 0.05, d0.z1 + 0.05],
          k + Math.round(Math.floor((Y - v) / 50) * 50 + v),
        );
      }
    },
    t = [];
  for (let v = 0; ; v++) {
    const C = m.x0 - 12 - v * 25;
    if (C < et.x0 + 8) break;
    t.push([
      C,
      v % 2 ? 1 : -1,
      [3, 6].includes(v) ? "off" : v === 4 ? "dying" : "on",
    ]);
  }
  const e = [];
  for (let v = 0; ; v++) {
    const C = m.x0 - 37 - v * 50;
    if (C < et.x0 + 6) break;
    e.push([C, v % 2 ? 1 : -1]);
  }
  (i(et.x0, et.x1, "wbox", t, e),
    o.add(r0("+x", et.x0, d0.z0, d0.z1, q, l), s.concDark, {
      chunk: "wbox" + et.x0,
    }),
    i(ht.x0, ht.x1, "ebox", [[ht.x0 + 13, -1, "on"]]));
  {
    const v = V0 + W0.cy,
      C = new po();
    (C.moveTo(d0.z0, q),
      C.lineTo(d0.z1, q),
      C.lineTo(d0.z1, l),
      C.lineTo(d0.z0, l),
      C.lineTo(d0.z0, q));
    const k = new xo(),
      R = Math.asin((q - v) / W0.r);
    k.moveTo(ct + W0.r * Math.cos(R), q);
    for (let H = 0; H <= 40; H++) {
      const V = R + (Math.PI - 2 * R) * (H / 40);
      k.lineTo(ct + W0.r * Math.cos(V), v + W0.r * Math.sin(V));
    }
    (k.lineTo(ct + W0.r * Math.cos(R), q), C.holes.push(k));
    const W = new mo(C, 8),
      Y = W.attributes.position;
    for (let H = 0; H < Y.count; H++) {
      const V = Y.getX(H),
        I = Y.getY(H);
      Y.setXYZ(H, ht.x1, I, V);
    }
    W.computeVertexNormals();
    const $ = W.attributes.normal;
    for (let H = 0; H < $.count; H++) $.setXYZ(H, -1, 0, 0);
    const Z = W.attributes.uv;
    for (let H = 0; H < Z.count; H++) Z.setXY(H, Y.getZ(H), Y.getY(H));
    (pe(W), o.add(W, s.concDark, { chunk: "ebox" + ht.x0 }));
  }
  ((d.east = re(c, m.x1 + 0.4, q + 3.1, d0.z0 + 0.22, "-x", "red", "ashwood")),
    (d.west = re(c, m.x0 - 0.6, q + 3.1, d0.z0 + 0.22, "-x", "red", "ashwood")),
    (d.tube = re(c, ht.x1 - 0.5, q + 3.1, d0.z0 + 0.22, "-x", "green")));
  const n = W0.cy,
    r = W0.r,
    u = Math.asin((-0.3 - n) / r),
    b = [];
  for (let v = 0; v <= 40; v++) {
    const C = Math.PI - u - (Math.PI - 2 * u) * (v / 40);
    b.push([r * Math.cos(C), n + r * Math.sin(C)]);
  }
  const M = r * Math.cos(u),
    x = a.sAtX(W0.x0),
    w = a.sAtX(W0.x1);
  for (const v of jt(a.pts, {
    step: 1.5,
    from: x,
    to: w,
    chunkLen: 50,
    tag: "tube",
  }))
    (o.add(zt(b, v.frames, { closed: !1, caps: !1, smooth: 0.9 }), s.lining, {
      chunk: v.chunk,
    }),
      o.add(
        zt(
          [
            [M, -0.3],
            [-M, -0.3],
          ],
          v.frames,
          { closed: !1, caps: !1 },
        ),
        s.bed,
        { chunk: v.chunk },
      ));
  const p = (v, C, k) => {
    const R = [];
    for (let W = 0; W < 6; W++) {
      const Y = (W / 6) * Math.PI * 2;
      R.push([v + k * Math.cos(Y), C + k * Math.sin(Y)]);
    }
    return R;
  };
  for (let v = 0; v < 4; v++) {
    const C = 1.25 + v * 0.16,
      k = -Math.sqrt(r * r - (C - n) ** 2) + 0.09;
    for (const R of jt(a.pts, {
      step: 3,
      from: x,
      to: w,
      chunkLen: 50,
      tag: "tube",
    }))
      o.add(
        zt(p(k, C, 0.022 + (v % 2) * 0.008), R.frames, {
          closed: !0,
          caps: !1,
          smooth: 0.5,
        }),
        v === 2 ? s.cableR : s.cable,
        { chunk: R.chunk, cast: !1 },
      );
  }
  const S = [];
  for (let v = x + 0.5; v < w; v += 1.5) {
    const C = ce(a, v),
      k = Fe(C),
      R = Math.atan2(-k.tz, k.tx);
    for (let W = 0; W < 4; W++) {
      const Y = 1.25 + W * 0.16,
        $ = -Math.sqrt(r * r - (Y - n) ** 2);
      S.push(
        K0(
          [C + k.nx * ($ + 0.05), V0 + Y - 0.03, k.z + k.nz * ($ + 0.05)],
          [0, R, 0],
        ),
      );
    }
  }
  const y = T(-0.01, -0.012, -0.05, 0.01, 0.012, 0.06);
  c.group.add(Bt(y, s.galvDark, S, { name: "tube:hooks" }));
  let L = 0;
  for (let v = x + 8; v < w - 6; v += 25, L++) {
    const C = ce(a, v),
      k = Fe(C),
      R = 2.25,
      W = -Math.sqrt(r * r - (R - n) ** 2) + 0.02,
      Y = [C + k.nx * W, V0 + R, k.z + k.nz * W],
      $ = [2, 7].includes(L)
        ? "off"
        : L === 5
          ? "flicker"
          : L === 9
            ? "dying"
            : "on",
      Z = [C - 14, q - 0.4, k.z - 4, C + 14, V0 + n + r + 0.1, k.z + 4];
    Ke(c, Y, [k.nx, 0, k.nz], $, Z, "tube" + Math.floor((v - x) / 50));
  }
  {
    const C = Math.sqrt(r * r - (0.65 - n) ** 2);
    for (const k of jt(a.pts, {
      step: 2,
      from: x,
      to: w,
      chunkLen: 50,
      tag: "tube",
    }))
      (o.add(
        zt(
          [
            [C, 0.65],
            [1.5, 0.65],
            [1.5, -0.3],
          ],
          k.frames,
          { closed: !1, caps: !1, smooth: 0.2 },
        ),
        s.concDark,
        { chunk: k.chunk },
      ),
        o.add(
          zt(
            [
              [1.62, 0.65 + 0.003],
              [1.5, 0.65 + 0.003],
            ],
            k.frames,
            { closed: !1, caps: !1 },
          ),
          s.cover,
          { chunk: k.chunk, cast: !1 },
        ));
  }
  return (
    (d.pg = re(
      c,
      ce(a, w - 14),
      V0 + 2.5,
      pt(ce(a, w - 14)) - (r - 0.45),
      "-x",
      "yellow",
    )),
    h.push(
      { x0: et.x0, x1: et.x1, z0: d0.z0 - 0.3, z1: d0.z0, y0: q, y1: l },
      { x0: et.x0, x1: et.x1, z0: d0.z1, z1: d0.z1 + 0.3, y0: q, y1: l },
    ),
    c.sounds.drips.push(
      [-40, q + 0.02, 220],
      [-110, q + 0.02, 224],
      [64, q + 0.02, 222],
      [160, q + 0.02, pt(160)],
      [250, q + 0.02, pt(250)],
    ),
    { colliders: h, signals: d }
  );
}
function ce(c, a) {
  const o = c.pts.length - 1,
    s = Math.max(0, Math.min(o, (a / c.length) * o)),
    f = Math.floor(s),
    h = s - f,
    d = c.pts[f],
    l = c.pts[Math.min(o, f + 1)];
  return d[0] + (l[0] - d[0]) * h;
}
function va(c, a) {
  const { B: o, M: s, L: f, D: h, group: d, rng: l } = c,
    i = [],
    t = [],
    e = u0,
    n = P.ceil,
    r = "pg",
    u = { chunk: r },
    b = P.hallX0,
    M = P.hallX1,
    x = P.hallZ0,
    w = P.hallZ1,
    p = P.mezz,
    S = P.stair,
    y = P.exit,
    L = [b - 0.05, q - 0.5, x - 0.3, M + 0.05, n + 0.05, w + 0.05],
    v = [
      p.x0 - 0.05,
      p.y - 0.6,
      p.z0 - 0.05,
      p.x1 + 0.05,
      p.ceil + 0.05,
      p.z1 + 0.6,
    ],
    C = { x0: P.esc[0].x0 - 0.15, x1: S.x1 + 0.3 },
    k = 0.3,
    R = 0.4,
    W = P.edge - k,
    Y = W - R;
  (o.add(T0(P.platX0, x, P.platX1, Y, e, !0), s.stone, u),
    o.add(T(P.platX0, e - 0.02, Y, P.platX1, e + 0.004, W), s.tactile, u),
    o.add(T(P.platX0, e - 0.2, W, P.platX1, e, P.edge, 0.012), s.coping, u),
    o.add(r0("+z", W, P.platX0, P.platX1, q, e - 0.2), s.concDark, u));
  for (let z = 0; z < 3; z++)
    o.add(
      j(
        [P.platX0, e - 0.42 - z * 0.09, W + 0.06],
        [P.platX1, e - 0.42 - z * 0.09, W + 0.06],
        0.018,
        6,
      ),
      s.cable,
      { chunk: r, cast: !1 },
    );
  (o.add(T0(b, W, M, w, q, !0), s.bed, u),
    o.add(r0("-x", P.platX0, x, P.edge, q, e), s.concDark, u),
    o.add(T0(b, x, P.platX0, W, q, !0), s.bed, u),
    o.add(T0(P.platX1, x, M, W, e, !0), s.stone, u),
    o.add(r0("+z", x, b, C.x0, e, p.y - 0.5), s.enamel, u),
    o.add(r0("+z", x, C.x1, M, e, p.y - 0.5), s.enamel, u),
    o.add(r0("+z", x, b, p.x0, p.y - 0.5, n), s.enamel, u),
    o.add(r0("+z", x, p.x1, M, p.y - 0.5, n), s.enamel, u),
    o.add(T(p.x0, p.y - 0.5, x - 0.02, C.x0, p.y, x + 0.04), s.stainless, u),
    o.add(T(C.x1, p.y - 0.5, x - 0.02, p.x1, p.y, x + 0.04), s.stainless, u),
    o.add(r0("-z", w, b, M, q, n), s.enamel, u),
    o.add(r0("-x", M, x, w, q, n), s.enamel, u));
  {
    const z = V0 + W0.cy,
      _ = new po();
    (_.moveTo(x, q),
      _.lineTo(w, q),
      _.lineTo(w, n),
      _.lineTo(x, n),
      _.lineTo(x, q));
    const D = new xo(),
      B = Math.asin((q - z) / W0.r);
    D.moveTo(P.track + W0.r * Math.cos(B), q);
    for (let a0 = 0; a0 <= 40; a0++) {
      const z0 = B + (Math.PI - 2 * B) * (a0 / 40);
      D.lineTo(P.track + W0.r * Math.cos(z0), z + W0.r * Math.sin(z0));
    }
    (D.lineTo(P.track + W0.r * Math.cos(B), q), _.holes.push(D));
    const U = new mo(_, 8),
      n0 = U.attributes.position,
      t0 = U.attributes.uv;
    for (let a0 = 0; a0 < n0.count; a0++) {
      const z0 = n0.getX(a0),
        w0 = n0.getY(a0);
      (n0.setXYZ(a0, b, w0, z0), t0.setXY(a0, z0, w0));
    }
    const i0 = U.attributes.normal;
    for (let a0 = 0; a0 < i0.count; a0++) i0.setXYZ(a0, 1, 0, 0);
    (pe(U), o.add(U, s.enamel, u));
  }
  o.add(T0(b, x, M, w, n, !1), s.ceilPanel, u);
  for (const [z, _, D] of [
    [409.5, 226.6, 0.5],
    [447, 231.3, -0.62],
  ])
    o.add(
      T(-0.6, -0.01, -0.3, 0.6, 0.01, 0.3).applyMatrix4(
        K0([z, n - 0.25, _], [D, 0.3, 0.2]),
      ),
      s.ceilPanel,
      u,
    );
  const $ = [395, 404, 413, 440, 449],
    Z = 229.6;
  for (const z of $) {
    const _ = new D0(0.26, 0.26, 2.4, 28);
    (_.translate(z, e + 1.2, Z), it(_), o.add(_, s.stainless, u));
    const D = new D0(0.25, 0.25, n - e - 2.4, 28, 1, !0);
    (D.translate(z, e + 2.4 + (n - e - 2.4) / 2, Z),
      it(D),
      o.add(D, s.enamel, u));
    const B = new D0(0.5, 0.25, 0.5, 28, 1, !0);
    (B.translate(z, n - 0.25, Z),
      o.add(B, s.stainless, u),
      i.push({
        x0: z - 0.27,
        x1: z + 0.27,
        z0: Z - 0.27,
        z1: Z + 0.27,
        y0: q,
        y1: n,
      }));
  }
  for (const [z, _] of [
    [404, "on"],
    [440, "dying"],
  ]) {
    const D = f.fixId();
    (o.add(
      O0(new D0(0.34, 0.3, 0.06, 28, 1, !0).translate(z, n - 0.62, Z), D),
      s.diffuser,
      { chunk: r, cast: !1 },
    ),
      f.add({
        a: [z, n - 0.7, Z],
        col: [1, 0.92, 0.8],
        cd: 30,
        reach: 9,
        zone: "parkgate",
        fix: D,
        state: _,
        dir: [0, 1, 0],
        dirK: 0.9,
        lobe: 0,
        box: L,
        spec: 0.4,
      }));
  }
  const H = (z, _, D, B, U, n0, t0 = "side") => {
      const i0 = Math.max(1, Math.ceil((B - D) / 0.8));
      for (let a0 = 0; a0 < i0; a0++) {
        const z0 = D + ((B - D) * a0) / i0,
          w0 = D + ((B - D) * (a0 + 1)) / i0,
          I0 = U(z0 + 0.001),
          E0 = U(w0 - 0.001),
          x0 = {
            x0: z,
            x1: _,
            z0,
            z1: w0,
            y0: n0 ?? Math.min(I0, E0) - 0.5,
            y1: Math.max(I0, E0) + 1.1,
          };
        (t0 === "rail" ? (x0.shot = !1) : (x0.shotY1 = Math.min(I0, E0) - 0.05),
          i.push(x0));
      }
    },
    V = (z, _, D, B, U, n0, t0 = !0) => {
      for (let i0 = 0; i0 < D; i0++) {
        const a0 = z - i0 * S.tread,
          z0 = _ + (i0 + 1) * S.rise;
        (o.add(
          T(B, _ + i0 * S.rise - 0.001, a0 - S.tread - 0.001, U, z0, a0),
          s.stone,
          { chunk: n0 },
        ),
          t0 &&
            (o.add(
              T(B, z0 - 0.02, a0 - 0.06, U, z0 + 0.006, a0 + 0.003, 0.002),
              s.stainless,
              { chunk: n0, cast: !1 },
            ),
            o.add(
              T(
                B + 0.05,
                z0 + 0.006,
                a0 - 0.05,
                U - 0.05,
                z0 + 0.011,
                a0 - 0.012,
              ),
              s.nosing,
              { chunk: n0, cast: !1 },
            )));
      }
    },
    I = S.flights,
    E = (I - 1) * S.tread;
  V(S.zBot, e, I - 1, S.x0, S.x1, r);
  const N = e + I * S.rise,
    Q = S.zBot - E,
    K = Q - S.landing;
  (o.add(T(S.x0, e, K, S.x1, N, Q - 0.001), s.stone, u),
    o.add(
      T(S.x0, N - 0.02, Q - 0.06, S.x1, N + 0.006, Q + 0.003),
      s.stainless,
      { chunk: r, cast: !1 },
    ),
    V(K, N, I - 1, S.x0, S.x1, r),
    o.add(T(S.x0, e, S.zTop, S.x1, p.y, S.zTop + S.tread + 0.001), s.stone, u));
  const s0 = (z) =>
      u0 +
      (S.zBot - z <= 0
        ? 0
        : S.zBot - z < E
          ? ((S.zBot - z) / E) * I * S.rise
          : S.zBot - z < E + S.landing
            ? I * S.rise
            : Math.min(
                2 * I * S.rise,
                I * S.rise + ((S.zBot - z - E - S.landing) / E) * I * S.rise,
              )),
    f0 = [S.zBot, Q, K, S.zTop];
  for (const [z, _] of [
    [S.x0 - 0.012, "-x"],
    [S.x1 + 0.012, "+x"],
  ]) {
    for (let D = 0; D < 3; D++) {
      const B = f0[D],
        U = f0[D + 1],
        n0 = s0(B + 0.001),
        t0 = s0(U + 0.001),
        i0 =
          _ === "+x"
            ? k0([z, e, B], [z, e, U], [z, t0, U], [z, n0, B])
            : k0([z, e, U], [z, e, B], [z, n0, B], [z, t0, U]);
      o.add(i0, s.enamel, u);
      const a0 =
        _ === "+x"
          ? k0([z, n0, B], [z, t0, U], [z, t0 + 1, U], [z, n0 + 1, B])
          : k0([z, t0, U], [z, n0, B], [z, n0 + 1, B], [z, t0 + 1, U]);
      (o.add(a0, s.glass, { chunk: r, cast: !1 }),
        o.add(
          j([z, n0 + 1.02, B], [z, t0 + 1.02, U], 0.025, 10),
          s.stainless,
          u,
        ),
        o.add(
          j([z, n0 + 0.04, B], [z, t0 + 0.04, U], 0.018, 8),
          s.stainless,
          u,
        ));
    }
    for (let D = S.zBot - 0.2; D > S.zTop; D -= 1.4) {
      const B = s0(D);
      o.add(j([z, B, D], [z, B + 1.02, D], 0.02, 8), s.stainless, u);
    }
  }
  {
    const z = (S.x0 + S.x1) / 2;
    for (let _ = 0; _ < 3; _++) {
      const D = f0[_],
        B = f0[_ + 1];
      o.add(
        j(
          [z, s0(D + 0.001) + 0.95, D],
          [z, s0(B + 0.001) + 0.95, B],
          0.024,
          10,
        ),
        s.stainless,
        u,
      );
    }
    for (let _ = S.zBot - 0.3; _ > S.zTop; _ -= 2) {
      const D = s0(_);
      o.add(j([z, D, _], [z, D + 0.95, _], 0.022, 8), s.stainless, u);
    }
  }
  (H(S.x0 - 0.3, S.x0 + 0.02, S.zTop, S.zBot, s0, e - 0.5),
    H(S.x1 - 0.02, S.x1 + 0.3, S.zTop, S.zBot, s0, e - 0.5),
    H(
      (S.x0 + S.x1) / 2 - 0.04,
      (S.x0 + S.x1) / 2 + 0.04,
      S.zTop + 0.3,
      S.zBot - 0.3,
      s0,
      e - 0.5,
      "rail",
    ));
  const p0 = 1.1,
    o0 = S.zBot,
    M0 = S.zTop,
    S0 = o0 - M0 - 2 * p0,
    m0 = (z) => e + Math.max(0, Math.min(1, (o0 - p0 - z) / S0)) * (p.y - e);
  for (const z of P.esc) {
    const _ = z.x0,
      D = z.x1,
      B = _ - 0.15,
      U = D + 0.15,
      n0 = Math.round(S0 / 0.4);
    for (let t0 = 0; t0 < n0; t0++) {
      const i0 = o0 - p0 - t0 * (S0 / n0),
        a0 = m0(i0 + 0.001),
        z0 = m0(i0 - S0 / n0);
      o.add(T(_, a0 - 0.05, i0 - S0 / n0, D, z0, i0), s.stainless, {
        chunk: r,
      });
    }
    (o.add(T(_, e - 0.05, o0 - p0, D, e + 0.012, o0), s.stainless, u),
      o.add(T(_, p.y - 0.05, M0, D, p.y + 0.012, M0 + p0), s.stainless, u));
    for (const [t0, i0] of [
      [B, "-x"],
      [U, "+x"],
    ]) {
      const a0 = [
        [o0, e],
        [o0 - p0, e],
        [M0 + p0, p.y],
        [M0, p.y],
      ];
      for (let z0 = 0; z0 < 3; z0++) {
        const [w0, I0] = a0[z0],
          [E0, x0] = a0[z0 + 1],
          Q0 =
            i0 === "+x"
              ? k0(
                  [t0, (Math.min(I0, x0) === I0, e), w0],
                  [t0, e, E0],
                  [t0, x0 + 0.1, E0],
                  [t0, I0 + 0.1, w0],
                )
              : k0(
                  [t0, e, E0],
                  [t0, e, w0],
                  [t0, I0 + 0.1, w0],
                  [t0, x0 + 0.1, E0],
                );
        o.add(Q0, s.stainless, u);
        const ae =
          i0 === "+x"
            ? k0(
                [t0, I0 + 0.1, w0],
                [t0, x0 + 0.1, E0],
                [t0, x0 + 0.95, E0],
                [t0, I0 + 0.95, w0],
              )
            : k0(
                [t0, x0 + 0.1, E0],
                [t0, I0 + 0.1, w0],
                [t0, I0 + 0.95, w0],
                [t0, x0 + 0.95, E0],
              );
        (o.add(ae, s.glass, { chunk: r, cast: !1 }),
          o.add(j([t0, I0 + 1, w0], [t0, x0 + 1, E0], 0.04, 10), s.rubber, u));
      }
      o.add(
        new Ot(0.22, 0.04, 8, 16, Math.PI)
          .rotateY(Math.PI / 2)
          .rotateX((Math.PI / 2) * 0)
          .translate(t0, e + 0.78, o0 + 0),
        s.rubber,
        u,
      );
    }
    (H(B - 0.05, B + 0.05, M0, o0 - 0.2, m0, e - 0.5),
      H(U - 0.05, U + 0.05, M0, o0 - 0.2, m0, e - 0.5));
  }
  {
    const z = P.esc[0].x1 + 0.15,
      _ = P.esc[1].x0 - 0.15,
      D = [
        [o0, e],
        [o0 - p0, e],
        [M0 + p0, p.y],
        [M0, p.y],
      ];
    for (let B = 0; B < 3; B++) {
      const [U, n0] = D[B],
        [t0, i0] = D[B + 1];
      o.add(
        k0(
          [z, n0 + 0.12, U],
          [_, n0 + 0.12, U],
          [_, i0 + 0.12, t0],
          [z, i0 + 0.12, t0],
        ),
        s.stainless,
        u,
      );
    }
  }
  const g = { chunk: "pgm" };
  (o.add(T0(p.x0, p.z0, p.x1, p.z1, p.y, !0), s.stone, g),
    o.add(T0(p.x0, p.z0, p.x1, p.z1, p.ceil, !1), s.ceilPanel, g),
    o.add(r0("+z", p.z0, p.x0, y.x0, p.y, p.ceil), s.enamel, g),
    o.add(r0("+z", p.z0, y.x1, p.x1, p.y, p.ceil), s.enamel, g),
    o.add(r0("+x", p.x0, p.z0, p.z1, p.y, p.ceil), s.enamel, g),
    o.add(r0("-x", p.x1, p.z0, p.z1, p.y, p.ceil), s.enamel, g));
  for (const [z, _] of [
    [p.x0, C.x0],
    [C.x1, p.x1],
  ]) {
    (o.add(
      k0(
        [z, p.y + 0.12, x],
        [_, p.y + 0.12, x],
        [_, p.ceil, x],
        [z, p.ceil, x],
      ),
      s.glass,
      { chunk: "pgm", cast: !1 },
    ),
      o.add(T(z, p.y, x - 0.03, _, p.y + 0.12, x + 0.03), s.stainless, g));
    for (
      let D = z;
      D <= _ + 1e-6;
      D += (_ - z) / Math.max(1, Math.round((_ - z) / 1.5))
    )
      o.add(
        T(D - 0.03, p.y, x - 0.04, D + 0.03, p.ceil, x + 0.04),
        s.stainless,
        g,
      );
    (o.add(T(z, p.y + 1.05, x - 0.06, _, p.y + 1.1, x - 0.02), s.stainless, g),
      i.push({ x0: z, x1: _, z0: x - 0.15, z1: x + 0.15, y0: q, y1: p.ceil }));
  }
  i.push(
    { x0: b, x1: C.x0, z0: x - 0.3, z1: x, y0: q, y1: p.y },
    { x0: C.x1, x1: M, z0: x - 0.3, z1: x, y0: q, y1: p.y },
  );
  const A = P.gatesZ - 0.7,
    O = P.gatesZ + 0.7,
    X = 421.4,
    G = 11,
    l0 = 1;
  for (let z = 0; z < G; z++) {
    const _ = X + z * l0;
    (o.add(T(_ - 0.1, p.y, A, _ + 0.1, p.y + 1, O, 0.015), s.stainless, g),
      o.add(
        T(_ - 0.1, p.y + 1, A + 0.3, _ + 0.1, p.y + 1.03, O - 0.3, 0.01),
        s.panelDark,
        g,
      ),
      o.add(
        new D0(0.045, 0.045, 0.006, 16).translate(
          _,
          p.y + 1.035,
          P.gatesZ + 0.15,
        ),
        s.yellow,
        g,
      ));
    const D = f.fixId();
    for (const [B, U] of [
      [A, "-z"],
      [O, "+z"],
    ])
      c.D.glow(
        z % 4 === 3 ? "gate_no" : "gate_ok",
        [_, p.y + 0.82, B],
        0.12,
        0.12,
        U,
        { fx: D, chunk: "pgm" },
      );
    i.push({
      x0: _ - 0.11,
      x1: _ + 0.11,
      z0: A,
      z1: O,
      y0: u0 - 0.5,
      y1: p.y + 1.1,
    });
  }
  const h0 = X + (G - 1) * l0;
  for (const [z, _] of [
    [p.x0, X - 0.1],
    [h0 + 1.25, p.x1],
  ]) {
    (o.add(
      k0(
        [z, p.y + 0.08, P.gatesZ],
        [_, p.y + 0.08, P.gatesZ],
        [_, p.y + 1.1, P.gatesZ],
        [z, p.y + 1.1, P.gatesZ],
      ),
      s.glass,
      { chunk: "pgm", cast: !1 },
    ),
      o.add(
        T(z, p.y + 1.08, P.gatesZ - 0.03, _, p.y + 1.12, P.gatesZ + 0.03),
        s.stainless,
        g,
      ));
    for (
      let D = z;
      D <= _ + 1e-6;
      D += (_ - z) / Math.max(1, Math.round((_ - z) / 1.6))
    )
      o.add(
        T(
          D - 0.025,
          p.y,
          P.gatesZ - 0.025,
          D + 0.025,
          p.y + 1.12,
          P.gatesZ + 0.025,
        ),
        s.stainless,
        g,
      );
    i.push({
      x0: z,
      x1: _,
      z0: P.gatesZ - 0.08,
      z1: P.gatesZ + 0.08,
      y0: u0 - 0.5,
      y1: p.y + 1.15,
    });
  }
  for (const [z, _] of [
    [h0 + 0.1, -1.2],
    [h0 + 1.25, 1.2 + Math.PI],
  ])
    o.add(
      T(0, p.y + 0.1, -0.02, 0.5, p.y + 1, 0.02, 0.01).applyMatrix4(
        K0([z, 0, P.gatesZ], [0, _, 0]),
      ),
      s.glass,
      { chunk: "pgm", cast: !1 },
    );
  {
    const D = p.z0 + 2.1,
      B = p.y,
      U = p.y + 2.7;
    (o.add(T(404.6, B, D - 0.12, 414.6, B + 1, D, 0.01), s.panelDark, g),
      o.add(
        T(404.6 - 0.05, B + 1, D - 0.3, 414.6 + 0.05, B + 1.05, D + 0.12, 0.01),
        s.stainless,
        g,
      ),
      o.add(T(404.6, U - 0.45, D - 0.12, 414.6, U, D, 0.01), s.panelDark, g),
      o.add(T(414.6 - 0.12, B, p.z0, 414.6, U, D, 0.01), s.panelDark, g),
      o.add(T(404.6, U, p.z0, 414.6, U + 0.05, D, 0.01), s.panelDark, g),
      o.add(
        k0(
          [404.6, B + 1.05, D - 0.06],
          [414.6 - 0.12, B + 1.05, D - 0.06],
          [414.6 - 0.12, U - 0.45, D - 0.06],
          [404.6, U - 0.45, D - 0.06],
        ),
        s.glass,
        { chunk: "pgm", cast: !1 },
      ));
    for (let t0 = U - 0.5; t0 > B + 1.6; t0 -= 0.05)
      o.add(
        T(404.6 + 0.05, t0 - 0.02, D - 0.2, 414.6 - 0.2, t0, D - 0.18),
        s.plasticW,
        { chunk: "pgm", cast: !1 },
      );
    h.sign("pg_tickets", [(404.6 + 414.6) / 2, U - 0.22, D], 1.6, 0.4, "+z", {
      depth: 0.006,
      plate: !1,
    });
    const n0 = f.fixId();
    (o.add(
      T(404.6 + 2, B + 1.1, D - 0.7, 404.6 + 2.42, B + 1.4, D - 0.66),
      s.black,
      g,
    ),
      c.D.glow(
        "monitor",
        [404.6 + 2.21, B + 1.25, D - 0.655],
        0.38,
        0.25,
        "+z",
        { fx: n0, chunk: "pgm" },
      ),
      f.add({
        a: [404.6 + 2.21, B + 1.25, D - 0.5],
        col: [0.4, 0.55, 1],
        cd: 1.2,
        reach: 3.5,
        zone: "concourse",
        fix: n0,
        state: "flicker",
        box: v,
        spec: 0.5,
      }),
      i.push({
        x0: 404.6,
        x1: 414.6,
        z0: p.z0,
        z1: D + 0.15,
        y0: u0 - 0.5,
        y1: U,
      }));
  }
  ([435, 436.3].forEach((z, _) => {
    if (
      (o.add(
        T(z - 0.6, p.y, p.z0, z + 0.6, p.y + 1.85, p.z0 + 0.5, 0.02),
        s.panelDark,
        g,
      ),
      o.add(
        T(
          z - 0.6,
          p.y + 1.62,
          p.z0 + 0.5,
          z + 0.6,
          p.y + 1.85,
          p.z0 + 0.58,
          0.01,
        ),
        s.nosing,
        g,
      ),
      o.add(
        T(z - 0.5, p.y + 1, p.z0 + 0.5, z + 0.2, p.y + 1.5, p.z0 + 0.53),
        s.black,
        g,
      ),
      o.add(
        T(
          z + 0.28,
          p.y + 1.05,
          p.z0 + 0.5,
          z + 0.5,
          p.y + 1.35,
          p.z0 + 0.56,
          0.01,
        ),
        s.stainless,
        g,
      ),
      o.add(
        T(
          z - 0.4,
          p.y + 0.55,
          p.z0 + 0.5,
          z + 0.4,
          p.y + 0.7,
          p.z0 + 0.6,
          0.01,
        ),
        s.stainless,
        g,
      ),
      _ === 0)
    ) {
      const D = f.fixId();
      (c.D.glow(
        "monitor",
        [z - 0.15, p.y + 1.25, p.z0 + 0.535],
        0.62,
        0.42,
        "+z",
        { fx: D, chunk: "pgm" },
      ),
        f.add({
          a: [z - 0.15, p.y + 1.25, p.z0 + 0.8],
          col: [0.4, 0.55, 1],
          cd: 1,
          reach: 3,
          zone: "concourse",
          fix: D,
          state: "dying",
          dir: [0, 0, 1],
          dirK: 0.9,
          box: v,
          spec: 0.5,
        }));
    }
    i.push({
      x0: z - 0.62,
      x1: z + 0.62,
      z0: p.z0,
      z1: p.z0 + 0.62,
      y0: u0 - 0.5,
      y1: p.y + 1.9,
    });
  }),
    h.sign("route", [418, p.y + 1.7, p.z0], 1.8, 0.45, "+z", { depth: 0.015 }),
    h.sign(
      "pg_wayout",
      [(y.x0 + y.x1) / 2, p.ceil - 0.5, p.z0 + 0.02],
      1.92,
      0.4,
      "+z",
      { depth: 0.02 },
    ),
    h.sign("pg_quarantine", [445, p.y + 1.5, p.z0], 0.7, 0.5, "+z", {
      depth: 0.003,
      plate: !1,
    }),
    h.sign("notice_evac", [410.5, p.y + 1.55, x - 0.06], 0.56, 0.8, "-z", {
      depth: 0.003,
      plate: !1,
    }),
    i.push(
      {
        x0: p.x0,
        x1: y.x0 - 0.25,
        z0: p.z0 - 0.3,
        z1: p.z0,
        y0: u0 - 0.5,
        y1: p.ceil,
      },
      {
        x0: y.x1 + 0.25,
        x1: p.x1,
        z0: p.z0 - 0.3,
        z1: p.z0,
        y0: u0 - 0.5,
        y1: p.ceil,
      },
    ),
    i.push(
      {
        x0: p.x0 - 0.3,
        x1: p.x0,
        z0: p.z0,
        z1: p.z1,
        y0: u0 - 0.5,
        y1: p.ceil,
      },
      {
        x0: p.x1,
        x1: p.x1 + 0.3,
        z0: p.z0,
        z1: p.z1,
        y0: u0 - 0.5,
        y1: p.ceil,
      },
    ));
  const F = { chunk: "pgx" },
    e0 = y.flights,
    g0 = (e0 - 1) * y.tread,
    N0 = p.y + e0 * y.rise,
    F0 = y.zBot - g0,
    $0 = F0 - y.landing,
    G0 = (z, _) => {
      for (let D = 0; D < e0 - 1; D++) {
        const B = z - D * y.tread,
          U = _ + (D + 1) * y.rise;
        (o.add(T(y.x0, p.y - 0.3, B - y.tread - 0.001, y.x1, U, B), s.stone, F),
          o.add(
            T(y.x0, U - 0.02, B - 0.06, y.x1, U + 0.006, B + 0.003, 0.002),
            s.stainless,
            { chunk: "pgx", cast: !1 },
          ),
          o.add(
            T(
              y.x0 + 0.05,
              U + 0.006,
              B - 0.05,
              y.x1 - 0.05,
              U + 0.011,
              B - 0.012,
            ),
            s.nosing,
            { chunk: "pgx", cast: !1 },
          ));
      }
    };
  (G0(y.zBot, p.y),
    o.add(T(y.x0, p.y - 0.3, $0, y.x1, N0, F0 - 0.001), s.stone, F),
    o.add(
      T(y.x0, N0 - 0.02, F0 - 0.06, y.x1, N0 + 0.006, F0 + 0.003),
      s.stainless,
      { chunk: "pgx", cast: !1 },
    ),
    G0($0, N0));
  const L0 = (z) =>
      p.y +
      (y.zBot - z <= 0
        ? 0
        : y.zBot - z < g0
          ? ((y.zBot - z) / g0) * e0 * y.rise
          : y.zBot - z < g0 + y.landing
            ? e0 * y.rise
            : Math.min(
                2 * e0 * y.rise,
                e0 * y.rise +
                  ((y.zBot - z - g0 - y.landing) / g0) * e0 * y.rise,
              )),
    xt = [y.zBot, F0, $0, y.zTop],
    oe = -0.5,
    _o = (z) => (z > y.openZ ? oe : 0);
  for (const [z, _] of [
    [y.x0, "+x"],
    [y.x1, "-x"],
  ]) {
    for (let D = 0; D < 3; D++) {
      const B = xt[D],
        U = xt[D + 1],
        n0 = L0(B + 0.001) - 0.3,
        t0 = L0(U + 0.001) - 0.3,
        i0 = [B, ...(y.openZ < B && y.openZ > U ? [y.openZ] : []), U];
      for (let a0 = 0; a0 < i0.length - 1; a0++) {
        const z0 = i0[a0],
          w0 = i0[a0 + 1],
          I0 = _o(z0 - 0.001),
          E0 = n0 + ((t0 - n0) * (B - z0)) / (B - U),
          x0 = n0 + ((t0 - n0) * (B - w0)) / (B - U),
          Q0 =
            _ === "+x"
              ? k0([z, E0, z0], [z, x0, w0], [z, I0, w0], [z, I0, z0])
              : k0([z, x0, w0], [z, E0, z0], [z, I0, z0], [z, I0, w0]);
        o.add(Q0, s.enamel, F);
      }
    }
    for (let D = 0; D < 3; D++) {
      const B = xt[D],
        U = xt[D + 1],
        n0 = z + (_ === "+x" ? 0.07 : -0.07);
      o.add(
        j(
          [n0, L0(B + 0.001) + 0.9, B],
          [n0, L0(U + 0.001) + 0.9, U],
          0.022,
          10,
        ),
        s.stainless,
        F,
      );
    }
    for (let D = y.zBot - 0.3; D > y.zTop; D -= 1.3) {
      const B = L0(D) + 0.9;
      o.add(
        j([z, B, D], [z + (_ === "+x" ? 0.07 : -0.07), B, D], 0.01, 6),
        s.stainless,
        F,
      );
    }
  }
  {
    const z = (y.x0 + y.x1) / 2;
    for (let _ = 0; _ < 3; _++) {
      const D = xt[_],
        B = xt[_ + 1];
      o.add(
        j(
          [z, L0(D + 0.001) + 0.95, D],
          [z, L0(B + 0.001) + 0.95, B],
          0.024,
          10,
        ),
        s.stainless,
        F,
      );
    }
    for (let _ = y.zBot - 0.4; _ > y.zTop + 0.2; _ -= 1.9) {
      const D = L0(_);
      o.add(j([z, D, _], [z, D + 0.95, _], 0.022, 8), s.stainless, F);
    }
    H(z - 0.04, z + 0.04, y.zTop + 0.6, y.zBot - 0.3, L0, void 0, "rail");
  }
  (o.add(T0(y.x0, y.openZ, y.x1, y.zBot, oe, !1), s.ceilPanel, F),
    o.add(r0("-z", y.openZ, y.x0, y.x1, oe, 0), s.coping, F),
    o.add(r0("+z", y.zBot, y.x0, y.x1, p.ceil, oe), s.enamel, F),
    i.push(
      {
        x0: y.x0 - 0.3,
        x1: y.x0,
        z0: y.zTop,
        z1: y.zBot,
        y0: u0 - 0.5,
        y1: 1.2,
      },
      {
        x0: y.x1,
        x1: y.x1 + 0.3,
        z0: y.zTop,
        z1: y.zBot,
        y0: u0 - 0.5,
        y1: 1.2,
      },
    ));
  const Y0 = { chunk: "pgs" },
    kt = y.x0 - 0.3,
    St = y.x1 + 0.3,
    j0 = y.openZ + 0.3,
    yt = 0.4;
  (o.add(T(kt, -0.3, y.zTop, y.x0 + 0.02, yt, j0, 0.02), s.coping, Y0),
    o.add(T(y.x1 - 0.02, -0.3, y.zTop, St, yt, j0, 0.02), s.coping, Y0),
    o.add(
      T(y.x0 + 0.02, -0.3, y.openZ - 0.02, y.x1 - 0.02, yt, j0, 0.02),
      s.coping,
      Y0,
    ));
  const ze = [],
    ye = (z, _) => {
      const D = Math.hypot(_[0] - z[0], _[2] - z[2]),
        B = Math.max(1, Math.round(D / 0.12));
      ze.push(
        j([z[0], yt + 1, z[2]], [_[0], yt + 1, _[2]], 0.022, 8),
        j([z[0], yt + 0.08, z[2]], [_[0], yt + 0.08, _[2]], 0.014, 6),
      );
      for (let U = 0; U <= B; U++) {
        const n0 = U / B,
          t0 = z[0] + (_[0] - z[0]) * n0,
          i0 = z[2] + (_[2] - z[2]) * n0;
        ze.push(
          j(
            [t0, yt, i0],
            [t0, yt + 1, i0],
            U % 8 === 0 ? 0.02 : 0.008,
            U % 8 === 0 ? 8 : 5,
          ),
        );
      }
    };
  (ye([kt + 0.15, 0, y.zTop + 0.05], [kt + 0.15, 0, j0 - 0.15]),
    ye([St - 0.15, 0, y.zTop + 0.05], [St - 0.15, 0, j0 - 0.15]),
    ye([kt + 0.15, 0, j0 - 0.15], [St - 0.15, 0, j0 - 0.15]),
    o.add(q0(ze), s.iron, Y0),
    i.push(
      { x0: kt, x1: y.x0, z0: y.zTop, z1: j0, y0: u0, y1: 1.6 },
      { x0: y.x1, x1: St, z0: y.zTop, z1: j0, y0: u0, y1: 1.6 },
      { x0: kt, x1: St, z0: y.openZ, z1: j0, y0: -0.35, y1: 1.6 },
    ));
  const X0 = kt - 0.25,
    B0 = St + 0.25,
    A0 = y.zTop - 0.6,
    C0 = j0 + 0.3,
    at = 3.05,
    Z0 = 3.3;
  for (const [z, _] of [
    [X0 + 0.08, A0 + 0.08],
    [B0 - 0.08, A0 + 0.08],
    [X0 + 0.08, C0 - 0.08],
    [B0 - 0.08, C0 - 0.08],
  ])
    (o.add(j([z, 0, _], [z, at, _], 0.065, 14), s.panelDark, Y0),
      i.push({
        x0: z - 0.08,
        x1: z + 0.08,
        z0: _ - 0.08,
        z1: _ + 0.08,
        y0: u0,
        y1: at,
      }));
  (o.add(T(X0, at, A0, B0, Z0, A0 + 0.16), s.panelDark, Y0),
    o.add(T(X0, at, C0 - 0.16, B0, Z0, C0), s.panelDark, Y0),
    o.add(T(X0, at, A0, X0 + 0.16, Z0, C0), s.panelDark, Y0),
    o.add(T(B0 - 0.16, at, A0, B0, Z0, C0), s.panelDark, Y0));
  for (let z = A0 + 1.2; z < C0 - 0.5; z += 1.2)
    o.add(T(X0, Z0 - 0.12, z - 0.04, B0, Z0 - 0.02, z + 0.04), s.panelDark, Y0);
  (o.add(
    k0(
      [X0, Z0 - 0.02, C0],
      [B0, Z0 - 0.02, C0],
      [B0, Z0 - 0.02, A0],
      [X0, Z0 - 0.02, A0],
    ),
    s.glass,
    { chunk: "pgs", cast: !1 },
  ),
    o.add(
      T(X0, Z0, A0 - 0.02, B0, Z0 + 0.62, A0 + 0.14, 0.01),
      s.panelDark,
      Y0,
    ));
  const Re = f.fixId();
  o.add(
    O0(
      Rt(
        c.A.signs.rect("pg_name"),
        [(X0 + B0) / 2, Z0 + 0.31, A0 - 0.025],
        3.6,
        0.54,
        "-z",
        0,
        0,
      ),
      Re,
    ),
    s.glowSigns,
    { chunk: "pgs", cast: !1 },
  );
  for (const [z, _] of [
    [
      [X0 + 0.08, A0 + 0.1],
      [X0 + 0.08, C0 - 0.1],
    ],
    [
      [B0 - 0.08, A0 + 0.1],
      [B0 - 0.08, C0 - 0.1],
    ],
    [
      [X0 + 0.1, C0 - 0.08],
      [B0 - 0.1, C0 - 0.08],
    ],
  ]) {
    const D = k0(
      [z[0], 1.55, z[1]],
      [_[0], 1.55, _[1]],
      [_[0], at - 0.05, _[1]],
      [z[0], at - 0.05, z[1]],
    );
    (o.add(D, s.glass, { chunk: "pgs", cast: !1 }),
      o.add(
        j([z[0], 1.55, z[1]], [_[0], 1.55, _[1]], 0.03, 8),
        s.panelDark,
        Y0,
      ));
  }
  {
    const z = B0 + 1.6,
      _ = A0 + 0.9;
    o.add(T(z - 0.2, 0, _ - 0.13, z + 0.2, 3, _ + 0.13, 0.02), s.panelDark, Y0);
    const D = f.fixId();
    for (const [B, U] of [
      ["-z", -0.131],
      ["+z", 0.131],
    ])
      o.add(
        O0(
          Rt(c.A.signs.rect("badge"), [z, 2.65, _ + U], 0.36, 0.36, B, 0, 0),
          D,
        ),
        s.glowSigns,
        { chunk: "pgs", cast: !1 },
      );
    (f.add({
      a: [z, 2.65, _ - 0.3],
      col: [1, 0.8, 0.7],
      cd: 1.5,
      reach: 4,
      zone: "stairs",
      fix: D,
      state: "on",
      box: [z - 4, -0.2, _ - 5, z + 4, 4, _ + 5],
    }),
      i.push({
        x0: z - 0.22,
        x1: z + 0.22,
        z0: _ - 0.15,
        z1: _ + 0.15,
        y0: u0,
        y1: 3,
      }));
  }
  const De = f.fixId();
  (o.add(
    O0(
      j(
        [X0 + 1, at - 0.06, (A0 + C0) / 2 - 2],
        [B0 - 1, at - 0.06, (A0 + C0) / 2 - 2],
        0.02,
        8,
      ),
      De,
    ),
    s.tube,
    { chunk: "pgs", cast: !1 },
  ),
    f.add({
      a: [X0 + 1.1, at - 0.1, (A0 + C0) / 2 - 2],
      b: [B0 - 1.1, at - 0.1, (A0 + C0) / 2 - 2],
      col: [0.85, 0.93, 1],
      cd: 12,
      reach: 9,
      zone: "stairs",
      fix: De,
      state: "dying",
      down: !0,
      box: [X0 - 6, -6, A0 - 8, B0 + 6, Z0, C0 + 2],
      point: { cd: 16, dist: 10, below: 0.3 },
    }),
    f.add({
      a: [X0 + 0.5, Z0 + 0.31, A0 - 0.3],
      b: [B0 - 0.5, Z0 + 0.31, A0 - 0.3],
      col: [1, 0.95, 0.88],
      cd: 3,
      reach: 6,
      zone: "stairs",
      fix: Re,
      state: "on",
      box: [X0 - 6, -0.2, A0 - 8, B0 + 6, Z0 + 1, A0 + 0.1],
    }));
  const Ee = 0.02,
    wt = 424,
    Pt = 436,
    Xt = 196,
    Ct = 212;
  for (const [z, _, D, B] of [
    [wt, Xt, Pt, y.zTop],
    [wt, y.zTop, kt, j0],
    [St, y.zTop, Pt, j0],
    [wt, j0, Pt, Ct],
  ])
    o.add(T0(z, _, D, B, Ee, !0), s.pavers, Y0);
  for (const [z, _, D, B] of [
    [wt, Xt, Pt, Xt + 0.1],
    [wt, Ct - 0.1, Pt, Ct],
    [wt, Xt, wt + 0.1, Ct],
    [Pt - 0.1, Xt, Pt, Ct],
  ])
    o.add(T(z, -0.1, _, D, Ee + 0.03, B), s.coping, Y0);
  const Ne = [
      [230.8, [3, 6, 9, 10, 15, 19]],
      [224.6, [2, 12, 17]],
    ],
    wo = (z, _) =>
      Ne[z][1].includes(_)
        ? (z === 0 && _ === 10) || (z === 1 && _ === 12)
          ? "flicker"
          : z === 0 && _ === 6
            ? "dying"
            : "on"
        : "off",
    At = e + 3.9;
  Ne.forEach(([z, _], D) => {
    for (let B = 0; B < 21; B++) {
      const U = 389.6 + B * 3.1;
      if (D === 1 && U > C.x0 - 1.4 && U < C.x1 + 1.4) continue;
      const n0 = U - 1.2,
        t0 = U + 1.2,
        i0 = f.fixId(),
        a0 = wo(D, B);
      (o.add(T(n0, At, z - 0.05, t0, At + 0.07, z + 0.05, 0.01), s.housing, u),
        o.add(
          O0(T(n0 + 0.02, At - 0.012, z - 0.04, t0 - 0.02, At, z + 0.04), i0),
          s.led,
          { chunk: r, cast: !1 },
        ));
      for (const z0 of [-0.9, 0.9])
        o.add(j([U + z0, n, z], [U + z0, At + 0.07, z], 0.003, 3), s.galvDark, {
          chunk: r,
          cast: !1,
        });
      a0 !== "off" &&
        f.add({
          a: [n0 + 0.05, At - 0.03, z],
          b: [t0 - 0.05, At - 0.03, z],
          col: [0.92, 0.96, 1],
          cd: 34,
          reach: 11,
          zone: "parkgate",
          fix: i0,
          state: a0,
          down: !0,
          box: L,
          point: { cd: 24, dist: 10, below: 0.5 },
          buzz: a0 !== "on",
        });
    }
  });
  const Po = new Set([1, 6, 9, 14, 19]);
  for (let z = 0, _ = 0; z < 12; z++)
    for (const D of [p.z0 + 1.6, p.z1 - 1.4]) {
      const B = 404 + z * 4,
        U = f.fixId();
      (o.add(
        O0(T(B - 0.3, p.ceil - 0.012, D - 0.3, B + 0.3, p.ceil, D + 0.3), U),
        s.diffuser,
        { chunk: "pgm", cast: !1 },
      ),
        Po.has(_) &&
          f.add({
            a: [B, p.ceil - 0.05, D],
            col: [0.93, 0.96, 1],
            cd: 14,
            reach: 7,
            zone: "concourse",
            fix: U,
            state: _ === 9 ? "flicker" : "on",
            down: !0,
            box: v,
            point: { cd: 14, dist: 7, below: 0.4 },
          }),
        _++);
    }
  const Zt = (z, _, D, B, U, n0, t0) => {
    const i0 = f.fixId(),
      a0 =
        B === "+x"
          ? [1, 0, 0]
          : B === "-x"
            ? [-1, 0, 0]
            : B === "+z"
              ? [0, 0, 1]
              : [0, 0, -1],
      z0 = K0([z, _, D], [0, Math.atan2(a0[0], a0[2]), 0]);
    (o.add(
      T(-0.18, -0.07, 0, 0.18, 0.07, 0.06, 0.02).applyMatrix4(z0),
      s.plasticW,
      u,
    ),
      o.add(
        O0(
          T(-0.15, -0.045, 0.06, 0.15, 0.045, 0.07, 0.01).applyMatrix4(z0),
          i0,
        ),
        s.diffuser,
        { chunk: r, cast: !1 },
      ),
      f.add({
        a: [z + a0[0] * 0.25, _ - 0.05, D + a0[2] * 0.25],
        col: [1, 0.86, 0.66],
        cd: 5,
        reach: 6,
        zone: n0,
        fix: i0,
        state: U,
        box: t0,
        point: { cd: 6, dist: 6, below: 0.1 },
      }));
  };
  (Zt(b + 0.01, e + 2.6, 221.5, "+x", "on", "parkgate", L),
    Zt(M - 0.01, e + 2.6, 224, "-x", "dying", "parkgate", L),
    Zt(S.x1 + 1.6, e + 2.6, x + 0.01, "+z", "flicker", "parkgate", L),
    Zt(p.x1 - 0.01, p.y + 2.4, 215.5, "-x", "on", "concourse", v),
    Zt(y.x0 + 0.01, N0 + 2.2, (F0 + $0) / 2, "+x", "flicker", "stairs", [
      y.x0 - 0.1,
      p.y - 0.5,
      y.zTop - 1,
      y.x1 + 0.1,
      1.5,
      y.zBot + 1.5,
    ]));
  {
    const z = f.fixId(),
      _ = (y.x0 + y.x1) / 2;
    (o.add(
      T(_ - 0.2, p.ceil - 0.9, p.z0, _ + 0.2, p.ceil - 0.7, p.z0 + 0.07, 0.006),
      s.housing,
      g,
    ),
      c.D.glow("exit", [_, p.ceil - 0.8, p.z0 + 0.07], 0.36, 0.18, "+z", {
        fx: z,
        chunk: "pgm",
      }),
      f.add({
        a: [_ - 0.15, p.ceil - 0.8, p.z0 + 0.15],
        b: [_ + 0.15, p.ceil - 0.8, p.z0 + 0.15],
        col: [0.22, 1, 0.45],
        cd: 1.2,
        reach: 4.5,
        zone: "concourse",
        fix: z,
        state: "on",
        box: v,
        spec: 0.5,
      }));
  }
  for (const [z, _, D] of [
    [397.5, "lit", "on"],
    [409.5, "print", ""],
    [436.5, "lit", "flicker"],
    [446.5, "print2", ""],
  ]) {
    const B = e + 2.2,
      U = 2.4,
      n0 = 1.6,
      t0 = w;
    if (
      (o.add(
        T(
          z - U / 2 - 0.08,
          B - n0 / 2 - 0.08,
          t0 - 0.14,
          z + U / 2 + 0.08,
          B + n0 / 2 + 0.08,
          t0,
          0.02,
        ),
        s.stainless,
        u,
      ),
      _ === "lit")
    ) {
      const i0 = f.fixId();
      (c.D.glow("adlit", [z, B, t0 - 0.14], U, n0, "-z", { fx: i0, chunk: r }),
        f.add({
          a: [z - 0.9, B, t0 - 0.4],
          b: [z + 0.9, B, t0 - 0.4],
          col: [0.95, 0.95, 0.92],
          cd: 6,
          reach: 6,
          zone: "parkgate",
          fix: i0,
          state: D,
          box: L,
          spec: 0.6,
        }));
    } else
      h.sign(
        _ === "print" ? "pg_ad1" : "pg_ad2",
        [z, B, t0 - 0.14],
        U,
        n0,
        "-z",
        { depth: 0.003, plate: !1 },
      );
  }
  for (const z of [403.5, 422, 441])
    h.sign("pg_name", [z, e + 2.45, w], 3.6, 0.54, "-z", { depth: 0.02 });
  for (const z of [391.5, 429, 450.5])
    h.sign("pg_name", [z, e + 4.9, w], 4.4, 0.66, "-z", { depth: 0.02 });
  (h.sign("pg_terminate", [M, e + 4.2, 228], 3, 0.5, "-x", { depth: 0.02 }),
    h.sign("pg_platform", [416, e + 3.2, 225], 1.6, 0.5, "-z", {
      depth: 0.04,
    }));
  for (const z of [-0.6, 0.6])
    o.add(
      j([416 + z, n, 225], [416 + z, e + 3.45, 225], 0.006, 4),
      s.galvDark,
      { chunk: r, cast: !1 },
    );
  h.sign("pg_wayout", [S.x1 + 0.6, e + 3.6, S.zBot + 0.1], 1.92, 0.4, "-z", {
    depth: 0.04,
  });
  for (const z of [-0.85, 0.85])
    o.add(
      j(
        [S.x1 + 0.6 + z, n, S.zBot + 0.1],
        [S.x1 + 0.6 + z, e + 3.8, S.zBot + 0.1],
        0.006,
        4,
      ),
      s.galvDark,
      { chunk: r, cast: !1 },
    );
  (f.add({
    a: [y.x0 + 0.6, 2.6, y.zTop + 1.5],
    b: [y.x1 - 0.6, 2.6, y.zTop + 1.5],
    col: [0.58, 0.7, 0.95],
    cd: 26,
    reach: 14,
    zone: "stairs",
    state: "on",
    r: 1.2,
    box: [y.x0 - 0.3, p.y - 0.6, y.zTop - 3, y.x1 + 0.3, 5, y.zBot + 3.5],
    weight: 1.5,
    spec: 0.6,
    spot: {
      cd: 55,
      dist: 19,
      angle: 0.62,
      pen: 0.95,
      dir: [0, -0.48, 1],
      at: [(y.x0 + y.x1) / 2, 3.6, y.zTop - 0.6],
    },
  }),
    f.add({
      a: [y.x0 + 1, p.y + 2.4, y.zBot - 0.5],
      b: [y.x1 - 1, p.y + 2.4, y.zBot - 0.5],
      col: [0.5, 0.62, 0.88],
      cd: 6,
      reach: 9,
      zone: "concourse",
      state: "on",
      r: 0.8,
      box: v,
      spec: 0.3,
    }),
    i.push(...Ft(c, 419.4, e, 229.9, 0.06, { chunk: r })),
    i.push(...Ft(c, 436.8, e, 229.3, -0.18, { chunk: r })),
    i.push(...Ft(c, 440.4, e, 227.6, 1.2, { chunk: r })),
    Ft(c, 425.2, e, 230.6, 0.3, { chunk: r, down: 1 }),
    Ft(c, 431.6, e, 230.2, -0.5, { chunk: r, down: 1 }),
    Je(c, 427, e, 231.4, 0.7, { chunk: r }),
    Je(c, 433.6, e, 227.9, -1.9, { chunk: r }));
  const ge = (z, _, D = 0.12, B = 0.06) => {
    const n0 = [],
      t0 = [];
    for (let x0 = 0; x0 <= 12; x0++) {
      const Q0 = x0 / 12;
      n0.push([
        z[0] + (_[0] - z[0]) * Q0,
        z[1] + (_[1] - z[1]) * Q0 - D * 4 * Q0 * (1 - Q0),
        z[2] + (_[2] - z[2]) * Q0,
      ]);
    }
    const i0 = Math.hypot(_[0] - z[0], _[2] - z[2]),
      a0 = c.A.signs.rect("police_tape");
    for (let x0 = 0; x0 < 12; x0++) {
      const [Q0, ae, Be] = n0[x0],
        [Oe, Xe, Ce] = n0[x0 + 1],
        be = a0[0] + (a0[2] - a0[0]) * ((((x0 / 12) * i0) / 1.6) % 1),
        Ze = be + (a0[2] - a0[0]) * (i0 / 12 / 1.6);
      t0.push(
        k0(
          [Q0, ae - B / 2, Be],
          [Oe, Xe - B / 2, Ce],
          [Oe, Xe + B / 2, Ce],
          [Q0, ae + B / 2, Be],
          [
            [be, a0[1]],
            [Ze, a0[1]],
            [Ze, a0[3]],
            [be, a0[3]],
          ],
        ),
      );
    }
    const z0 = q0(t0);
    o.add(z0, s.signs, { chunk: r, cast: !1 });
    const w0 = z0.clone(),
      I0 = w0.attributes.normal;
    for (let x0 = 0; x0 < I0.count; x0++)
      I0.setXYZ(x0, -I0.getX(x0), -I0.getY(x0), -I0.getZ(x0));
    const E0 = w0.index.array;
    for (let x0 = 0; x0 < E0.length; x0 += 3) {
      const Q0 = E0[x0 + 1];
      ((E0[x0 + 1] = E0[x0 + 2]), (E0[x0 + 2] = Q0));
    }
    o.add(w0, s.signs, { chunk: r, cast: !1 });
  };
  (ge([413.27, e + 1.05, 229.6], [418.3, e + 1, 229.9], 0.18),
    ge([440, e + 1, 229.45], [444, e + 0.85, 228.2], 0.22),
    ge(
      [S.x1 + 0.02, e + 1, S.zBot - 0.2],
      [S.x1 + 0.9, e + 0.2, S.zBot + 0.5],
      0.1,
    ),
    Gt(c, 418.4, e, 226.8, 1.35, { chunk: r, rng: l }),
    Gt(c, 433.6, e, 231.4, -2.05, { chunk: r, rng: l, foil: !0 }),
    Gt(c, 444.4, e, 227, 0.45, { chunk: r, rng: l }),
    Gt(c, 407.9, e, 230, 1.57, { chunk: r, bag: !0, rng: l }),
    Gt(c, 441.6, p.y, 217, -0.9, { chunk: "pgm", rng: l, foil: !0 }),
    h.decal("b_pool", [418.9, e, 227.2], 1.6, 1.4, "+y", {
      rot: 0.3,
      chunk: r,
    }),
    h.decal("b_pool", [433.2, e, 231], 1.5, 1.3, "+y", { rot: 1.9, chunk: r }),
    h.decal("b_pool", [444, e, 227.5], 1.2, 1.1, "+y", { rot: 0.8, chunk: r }),
    h.decal("b_drag", [428.4, e, 229.4], 2.6, 0.7, "+y", {
      rot: 1.4,
      chunk: r,
    }),
    h.decal("steps", [429, e, 231.5], 1, 1, "+y", { rot: 2.6, chunk: r }),
    h.decal("b_spatter", [S.x1 + 0.02, e + 0.6, 226], 0.9, 0.9, "+x", {
      chunk: r,
      off: 0.01,
    }),
    h.decal("b_hand", [p.x0 + 9, p.y + 1.3, x - 0.045], 0.18, 0.22, "-z", {
      chunk: "pgm",
      rot: 0.2,
    }),
    h.decal("b_smear", [p.x0 + 9.6, p.y + 1.05, x - 0.045], 1.1, 0.55, "-z", {
      chunk: "pgm",
    }),
    h.decal("b_pool", [441.3, p.y, 217.4], 1.2, 1, "+y", {
      rot: 0.6,
      chunk: "pgm",
    }),
    h.decal("graf2", [M - 0.02, e + 2.6, 233], 1.8, 0.6, "-x", {
      chunk: r,
      matt: !0,
    }),
    h.decal("b_spatter", [$[3], e + 1.4, Z - 0.27], 0.6, 0.6, "-z", {
      chunk: r,
      off: 0.02,
    }));
  const Le = [];
  for (let z = 0; z < 40; z++)
    Le.push(
      K0(
        [424 + l() * 9, e + 0.006, 228.8 + l() * 3],
        [Math.PI / 2, l() * 6.28, 0],
      ),
    );
  d.add(
    Bt(new D0(0.0045, 0.0045, 0.019, 6), s.yellow, Le, { name: "pg:shells" }),
  );
  for (let z = 0; z < 18; z++)
    $t(c, 390 + l() * 62, e, x + 0.6 + l() * 13, l() * 6.28, {
      chunk: r,
      w: 0.21,
      l: 0.3,
    });
  for (let z = 0; z < 9; z++)
    $t(c, p.x0 + 1 + l() * 48, p.y, p.z0 + 0.5 + l() * 5, l() * 6.28, {
      chunk: "pgm",
      w: 0.21,
      l: 0.3,
    });
  for (let z = 0; z < 8; z++)
    xe(c, 390 + l() * 60, e, x + 0.8 + l() * 13, l, r);
  for (const z of [393, 409.6, 444.6]) i.push(..._a(c, z, x + 0.4, r));
  for (const [z, _] of [
    [400, x + 0.35],
    [434.4, x + 0.35],
  ])
    i.push(...To(c, z, e, _, { chunk: r, rng: l, spill: 0.6 }));
  (i.push(
    { x0: b - 0.3, x1: b, z0: x, z1: w, y0: q, y1: n },
    { x0: M, x1: M + 0.3, z0: x, z1: w, y0: q, y1: n },
    { x0: b, x1: M, z0: w, z1: w + 0.3, y0: q, y1: n },
  ),
    i.push({
      x0: P.platX0 - 0.1,
      x1: P.platX0,
      z0: x,
      z1: P.edge,
      y0: q,
      y1: e + 1.1,
    }));
  for (const z of [P.platX0 + 0.4]) {
    for (const _ of [e + 0.15, e + 1])
      o.add(j([z, _, x + 0.2], [z, _, P.edge - 0.05], 0.02, 8), s.stainless, u);
    h.sign(
      "no_entry",
      [z - 0.03, e + 0.62, (x + P.edge) / 2],
      0.36,
      0.18,
      "-x",
      { depth: 0.006, plate: !1 },
    );
  }
  for (let z = P.platX0; z < P.platX1 - 1e-6; z += 2)
    t.push({
      x0: z,
      x1: Math.min(P.platX1, z + 2),
      z0: P.edge - 0.05,
      z1: P.edge + 0.15,
      y0: e - 1.5,
      y1: e + 2.2,
      on: !0,
      edge: "parkgate",
      shot: !1,
    });
  (i.push(...t),
    c.sounds.hums.push(
      { id: "metro_hum_parkgate", pos: [425, e + 3, 226], zone: "parkgate" },
      {
        id: "metro_gate_alarm",
        pos: [426.4, p.y + 1, P.gatesZ],
        zone: "concourse",
      },
      { id: "metro_exit_wind", pos: [430, -1.5, 206], zone: "stairs" },
    ),
    c.sounds.drips.push(
      [396, e + 0.02, 222],
      [450, q + 0.02, 236],
      [430, p.y + 0.02, 213],
    ));
  const Ao = [
      [422.5, 232.4],
      [423.9, 230.1],
      [425.8, 229],
      [427.2, 228.4],
      [427.2, 225.5],
      [427.2, 222.6],
      [427.2, 219.7],
      [427.9, 217.4],
      [428.9, P.gatesZ],
      [429, 213.6],
      [429, 210.6],
      [429, 207.7],
      [429, 204.8],
      [lt[0], lt[2]],
    ],
    Io = {
      dead: [
        [395.5, 225.8, 1.4],
        [403.8, 231.2, -0.6],
        [411.2, 222.4, 2.6],
        [437.4, 225.5, -1.9],
        [443.6, 230.9, 0.5],
        [449.8, 223.6, -2.3],
        [433.8, 220.6, 3],
      ],
      route: Ao,
      stairsDead: [
        [446.5, 214.2],
        [449.2, 217.1],
        [406, 217],
        [418.6, 213.6],
        [431, 205.6],
        [429.3, 223.5],
      ],
      mezzanine: [430, p.y, 216.8],
    };
  return { colliders: i, edges: t, points: Io };
}
function _a(c, a, o, s) {
  const { B: f, M: h } = c,
    d = u0,
    l = { chunk: s };
  (f.add(
    T(a - 1, d + 0.42, o, a + 1, d + 0.45, o + 0.42, 0.01),
    h.stainless,
    l,
  ),
    f.add(
      T(
        a - 1,
        d + 0.45,
        o - 0.02,
        a + 1,
        d + 0.85,
        o + 0.01,
        0.01,
      ).applyMatrix4(new rt().makeTranslation(0, 0, 0)),
      h.stainless,
      l,
    ));
  for (const i of [-0.85, 0.85])
    f.add(
      T(a + i - 0.03, d, o + 0.05, a + i + 0.03, d + 0.42, o + 0.37, 0.01),
      h.panelDark,
      l,
    );
  return [
    { x0: a - 1, x1: a + 1, z0: o - 0.05, z1: o + 0.45, y0: d, y1: d + 0.9 },
  ];
}
const b0 = (c, a, o, s, f, h) => c >= o && c <= s && a >= f && a <= h,
  Yt = [m.stopX - Kt.cars * Kt.carLen, m.stopX],
  to = P.bufferX - P.stopGap,
  Vt = [to - Kt.cars * Kt.carLen, to],
  Et = Kt.width / 2;
function Ie(c, a, o, s, f) {
  const h = (o - 1) * f;
  return c <= 0
    ? 0
    : c < h
      ? (c / h) * o * a
      : c < h + s
        ? o * a
        : c < 2 * h + s
          ? o * a + ((c - h - s) / h) * o * a
          : 2 * o * a;
}
const eo = (c) =>
    u0 + Ie(c - c0.x0, c0.rise, 13, c0.landing[1] - c0.landing[0], c0.tread),
  oo = (c) =>
    u0 +
    Ie(
      P.stair.zBot - c,
      P.stair.rise,
      P.stair.flights,
      P.stair.landing,
      P.stair.tread,
    ),
  ao = (c) =>
    P.mezz.y +
    Ie(
      P.exit.zBot - c,
      P.exit.rise,
      P.exit.flights,
      P.exit.landing,
      P.exit.tread,
    ),
  fe = P.stair.zTop,
  Qt = P.stair.zBot,
  no = 1.1,
  wa = (c) => {
    const a = Qt - fe - 2 * no,
      o = Qt - no - c;
    return u0 + Math.max(0, Math.min(1, o / a)) * (P.mezz.y - u0);
  };
function Pa() {
  function c(l, i, t = 0) {
    if (t < -2.5) {
      if (b0(l, i, _0.x0 - _0.wall, _0.x1 + _0.wall, _0.z0 - _0.wall, _0.z1))
        return "shaft";
      if (b0(l, i, dt.x0 - 0.25, dt.x1 + 0.25, _0.z1, m.zN)) return "passage";
      if (
        b0(l, i, m.x0, c0.hall.x1 + 0.5, m.zN - 0.3, m.zS + 0.3) ||
        b0(l, i, m.x1, c0.hall.x1 + 0.5, c0.hall.z0 - 0.3, c0.hall.z1 + 0.3)
      )
        return l > m.x1 &&
          i > c0.z1 + 0.2 &&
          !(i > Lt.z0 - 0.2 && l < Lt.x0 + 5.2)
          ? "tunnel"
          : "ashwood";
    }
    if (
      b0(
        l,
        i,
        P.exit.x0 - 0.5,
        P.exit.x1 + 0.5,
        lt[2] - 0.5,
        P.exit.zBot + 0.1,
      ) &&
      t < 2 &&
      t > P.mezz.y - 1.5
    )
      return "stairs";
    if (t < -1) {
      if (
        b0(l, i, P.mezz.x0 - 0.3, P.mezz.x1 + 0.3, P.mezz.z0, P.mezz.z1) &&
        t > P.mezz.y - 2
      )
        return "concourse";
      if (b0(l, i, P.hallX0, P.hallX1, P.hallZ0, P.hallZ1 + 0.3))
        return "parkgate";
      if (
        t < -3 &&
        l > et.x0 - 5 &&
        l < P.hallX0 + 1 &&
        Math.abs(i - (l < W0.x0 ? ct + 2 : pt(l))) < 6
      )
        return "tunnel";
    }
    return null;
  }
  function a(l, i, t = 0) {
    if (t < -2.5) {
      if (
        b0(l, i, _0.x0, _0.x1, _0.z0, _0.z1 + _0.wall) ||
        b0(l, i, dt.x0, dt.x1, dt.z0, m.zN)
      )
        return u0;
      if (b0(l, i, c0.x0, c0.topX, c0.z0, c0.z1)) return eo(l);
      if (b0(l, i, c0.topX, c0.hall.x1, c0.hall.z0, c0.hall.z1)) return c0.topY;
      if (b0(l, i, m.x0, m.x1, m.zN, m.zS))
        return i <= m.edgeN ||
          i >= m.edgeS ||
          (i <= ct + Et && l >= Yt[0] && l <= Yt[1])
          ? u0
          : q;
      if (
        l > et.x0 &&
        l < P.hallX0 &&
        i > d0.z0 - 1 &&
        i < Math.max(d0.z1, pt(l) + 3)
      )
        return q;
    }
    if (t < 2 && b0(l, i, P.exit.x0, P.exit.x1, lt[2], P.exit.zBot))
      return ao(i);
    if (t < 1.5 && b0(l, i, P.exit.x0, P.exit.x1, lt[2] - 1.2, lt[2])) return 0;
    if (t < -1) {
      if (
        b0(l, i, P.mezz.x0, P.mezz.x1, P.mezz.z0, P.mezz.z1) &&
        t > P.mezz.y - 2.2
      )
        return P.mezz.y;
      if (b0(l, i, P.stair.x0, P.stair.x1, P.stair.zTop, P.stair.zBot))
        return oo(i);
      for (const e of P.esc) if (b0(l, i, e.x0, e.x1, fe, Qt)) return wa(i);
      if (b0(l, i, P.hallX0, P.hallX1, P.hallZ0, P.hallZ1))
        return i <= P.edge || (i <= P.track + Et && l >= Vt[0] && l <= Vt[1])
          ? u0
          : q;
    }
    return null;
  }
  function o(l, i, t = 0) {
    const e = c(l, i, t);
    if (!e) return null;
    if (e === "shaft") return t > u0 + 0.3 ? "metal" : "concrete";
    if (e === "passage" || e === "tunnel") return "concrete";
    if (e === "ashwood")
      return b0(l, i, c0.x0, c0.hall.x1, c0.hall.z0, c0.hall.z1)
        ? "concrete"
        : i > m.edgeN && i < m.edgeS
          ? i <= ct + Et
            ? "metal"
            : "concrete"
          : "tile";
    if (e === "parkgate") {
      for (const n of P.esc) if (b0(l, i, n.x0, n.x1, fe, Qt)) return "metal";
      return i > P.edge ? "metal" : "tile";
    }
    return "tile";
  }
  const s = (l, i) =>
      b0(l, i, _0.x0, _0.x1, _0.z0, _0.z1) ||
      b0(l, i, _0.door.x0, _0.door.x1, _0.z1, _0.z1 + _0.wall) ||
      b0(l, i, dt.x0, dt.x1, dt.z0, dt.z1) ||
      b0(l, i, y0.x0, y0.x1, dt.z1, m.zN) ||
      b0(l, i, m.x0, m.x1, m.zN, m.edgeN) ||
      b0(l, i, m.x0, m.x1, m.edgeS, m.zS) ||
      b0(l, i, Yt[0], Yt[1], m.edgeN, ct + Et) ||
      b0(l, i, c0.x0, c0.topX, c0.z0, c0.z1) ||
      b0(l, i, c0.topX, c0.hall.x1, c0.hall.z0, c0.hall.z1),
    f = (l, i) => P.esc.some((t) => b0(l, i, t.x0 - 0.35, t.x1 + 0.35, fe, Qt)),
    h = (l, i) =>
      (b0(l, i, P.platX0, P.platX1, P.hallZ0, P.edge) && !f(l, i)) ||
      b0(l, i, Vt[0], Vt[1], P.edge, P.track + Et) ||
      b0(l, i, P.mezz.x0, P.mezz.x1, P.mezz.z0, P.mezz.z1) ||
      b0(l, i, P.exit.x0, P.exit.x1, lt[2] - 1.2, P.exit.zBot),
    d = {
      ashwood: {
        x0: m.x0 - 0.5,
        x1: c0.hall.x1 + 0.5,
        z0: _0.z0 - 0.5,
        z1: m.zS + 0.5,
        cell: 0.15,
        inArea: s,
        floor: u0,
      },
      parkgate: {
        x0: P.platX0 - 0.5,
        x1: P.hallX1,
        z0: lt[2] - 1.5,
        z1: P.track + Et + 0.5,
        cell: 0.15,
        inArea: h,
        floor: u0,
      },
    };
  return {
    zoneAt: c,
    groundAt: a,
    surfaceAt: o,
    navPlans: d,
    ASH_SPAN: Yt,
    PG_SPAN: Vt,
    ashStairY: eo,
    pgStairY: oo,
    pgExitY: ao,
  };
}
const Nt = {
    envName: "under",
    key: [10335968, 0],
    fill: [5662346, 0],
    keyBox: 20,
  },
  Aa = {
    shaft: {
      ...Nt,
      post: {
        exposure: 1.08,
        bloom: 0.3,
        bloomThreshold: 1.1,
        vignette: 0.56,
        sat: 0.95,
        contrast: 1.08,
      },
      hemi: [2765366, 1183242, 0.16],
      env: 0.22,
      fog: [329223, 0.03],
    },
    passage: {
      ...Nt,
      post: {
        exposure: 1.05,
        bloom: 0.3,
        bloomThreshold: 1.1,
        vignette: 0.52,
        sat: 0.95,
        contrast: 1.08,
      },
      hemi: [3025444, 1183242, 0.18],
      env: 0.28,
      fog: [460810, 0.03],
    },
    ashwood: {
      ...Nt,
      post: {
        exposure: 0.98,
        bloom: 0.32,
        bloomThreshold: 1.05,
        vignette: 0.52,
        sat: 0.94,
        contrast: 1.12,
      },
      hemi: [3424830, 1315342, 0.22],
      env: 0.4,
      fog: [527115, 0.009],
    },
    tunnel: {
      ...Nt,
      post: {
        exposure: 1.05,
        bloom: 0.35,
        bloomThreshold: 1,
        vignette: 0.55,
        sat: 0.95,
        contrast: 1.1,
      },
      hemi: [2238506, 1051656, 0.12],
      env: 0.3,
      fog: [395015, 0.012],
    },
    parkgate: {
      ...Nt,
      post: {
        exposure: 1,
        bloom: 0.3,
        bloomThreshold: 1.05,
        vignette: 0.5,
        sat: 0.92,
        contrast: 1.1,
      },
      hemi: [3424332, 1446930, 0.28],
      env: 0.5,
      fog: [658705, 0.014],
    },
    concourse: {
      ...Nt,
      post: {
        exposure: 1,
        bloom: 0.3,
        bloomThreshold: 1.05,
        vignette: 0.48,
        sat: 0.92,
        contrast: 1.1,
      },
      hemi: [3687508, 1446936, 0.28],
      env: 0.45,
      fog: [790550, 0.015],
    },
    stairs: {
      envName: "sky",
      key: [10466004, 0.35],
      keyDir: [0.15, 0.85, -0.5],
      fill: [5925514, 0.06],
      fillDir: [-0.4, 0.5, 0.6],
      keyBox: 24,
      post: {
        exposure: 1,
        bloom: 0.28,
        bloomThreshold: 1.1,
        vignette: 0.45,
        sat: 0.92,
        contrast: 1.08,
      },
      hemi: [5267582, 1710102, 0.4],
      env: 0.45,
      fog: [1317928, 0.012],
    },
  };
async function La(c, { rng: a, hatch: o } = {}) {
  ((a ||= c.rng(5301)), await c.mats.ensure(Qo));
  const s = new Jt();
  s.name = "metro";
  const f = [],
    h = [],
    d = [],
    l = Ko();
  ((l.board = ea({ cols: 24, rows: 2 })),
    l.board.set(`LINE 4    PARKGATE
SERVICE SUSPENDED`));
  const i = Jo(c, l);
  ((i.board = st([2.6, 2.6, 2.6], {
    name: "m_board",
    base: 789e3,
    emissiveMap: l.board.tex,
    map: l.board.tex,
    rough: 0.4,
  })),
    (i.glowSigns = st([1.5, 1.5, 1.5], {
      name: "m_glowsigns",
      base: 1052688,
      emissiveMap: l.signs.tex,
      map: l.signs.tex,
      rough: 0.35,
    })));
  const t = jo(c, s),
    e = Pa(),
    n = (E, N, Q) => e.groundAt(E, N, Math.min(Q, -2.6)) ?? e.groundAt(E, N, Q),
    r = new na("metro", { floorAt: n }),
    u = Uo(0.5),
    M = {
      ctx: c,
      THREE: Fo,
      B: r,
      M: i,
      L: t,
      A: l,
      group: s,
      rng: a,
      anim: f,
      sounds: { drips: [], hums: [] },
      audio: c.audio,
      line: u,
      walk: e,
      boardMaterial: i.board,
      faceQuadLocal: (E, N, Q, K) => Rt(l.signs.rect(E), N, Q, K, "+z", 0, 0),
    };
  M.D = la(M);
  const x = ra(M),
    w = ca(M),
    p = pa(M),
    S = ka(M, u),
    y = Ta(M, u),
    L = va(M);
  for (const E of [x, w, p, S, y, L]) h.push(...(E.colliders || []));
  const v = r.flush(s),
    C = c.camera || c.game.camera;
  (f.push((E, N) => {
    (t.update(E, N, C), l.board.tick(E));
  }),
    (t.torch = () => c.game.weapons?.torch || null),
    (t.lensZone = (E) => e.zoneAt(E.x, E.z, E.y - 1.6)),
    c.beforeRender((E) => t.prepare(E)));
  const k = Ia(M, C);
  f.push(k.update);
  {
    const E = [];
    for (const K of v) {
      const s0 = K.geometry;
      (s0.boundingSphere || s0.computeBoundingSphere(),
        E.push({
          mesh: K,
          c: s0.boundingSphere.center,
          r: s0.boundingSphere.radius,
        }));
    }
    let N = 0;
    const Q = new ot(1e9, 0, 0);
    f.push((K) => {
      const s0 = C.position,
        f0 = 220;
      if (((N -= K), !(N > 0 && s0.distanceToSquared(Q) < 100))) {
        ((N = 0.2), Q.copy(s0));
        for (const p0 of E) {
          const o0 =
            Math.hypot(p0.c.x - s0.x, p0.c.y - s0.y, p0.c.z - s0.z) - p0.r;
          p0.mesh.visible = o0 < f0;
        }
      }
    });
  }
  const R = u.sAtX(m.stopX),
    W = u.sAtX(P.bufferX - P.stopGap),
    Y = {
      ashwood: { s: +R.toFixed(3), side: "left" },
      parkgate: { s: +W.toFixed(3), side: "left" },
      start: { s: +u.sAtX(m.x0 - 160).toFixed(3), side: "left" },
    },
    $ = m.stopX - 1.5 * 18 + 0,
    Z = {
      shaftBottom: x.points.shaftBottom,
      shaftTop: x.points.shaftTop,
      passageEnd: w.points.passageEnd,
      staffDoor: w.points.staffDoor,
      ashwood: {
        board: [$, 217.4],
        akaneBoard: [$ + 1.3, 217.15],
        dead: [
          [-5.2, 215.6, 1.2],
          [1.6, 216.9, 2.6],
          [12.4, 214.4, -0.4],
          [26.8, 216.4, -2.1],
          [32, 215.8, 0.3],
          [38.6, 216.5, -1.6],
          [44.6, 215.2, 2.2],
          [48.4, 214.1, -2.6],
          [5.4, 227.4, 0.2],
          [17.6, 226.4, 3],
          [30.8, 227.9, -0.6],
          [42.2, 226.2, 2.7],
        ],
        stairs: p.points.stairs,
        cover: [23.6, 216.5],
      },
      parkgate: L.points,
      exitTop: [lt[0], lt[1], lt[2]],
    },
    H = {
      staffDoor: w.props.staffDoor,
      ladderTop: x.props.ladderTop,
      shutter: p.shutter,
      signals: y.signals,
      edges: { ashwood: p.edgesN, ashwoodSouth: p.edgesS, parkgate: L.edges },
      board: {
        set: (E) => {
          (l.board.set(E),
            c.audio?.play?.("metro_board_tick", {
              pos: [16.5, -5.75, 215.9],
              vol: 0.5,
            }));
        },
        get text() {
          return l.board.text;
        },
      },
      lights: {
        flicker: (E, N) => t.flicker(E, N),
        surge: () => {
          t.surge();
          const E = C.position;
          c.audio?.play?.("metro_surge", {
            pos: [E.x, E.y + 2, E.z],
            vol: 0.9,
          });
        },
        power: (E) => {
          t.power = Math.max(0, Math.min(1.5, E));
        },
      },
      lightsApi: t,
      line: u,
    },
    V = Aa;
  return {
    group: s,
    colliders: h,
    circles: d,
    anim: f,
    warmUp: () => {
      const E = c.renderer;
      for (const N of [
        l.signs.tex,
        l.frieze.tex,
        l.decals.tex,
        l.glows.tex,
        l.board.tex,
      ])
        try {
          E.initTexture(N);
        } catch {}
      t.update(0, 0, C);
    },
    points: Z,
    line: u.pts,
    lineLength: u.length,
    stops: Y,
    zoneAt: e.zoneAt,
    groundAt: e.groundAt,
    surfaceAt: e.surfaceAt,
    navPlans: e.navPlans,
    looks: V,
    props: H,
    meshes: v,
  };
}
function Ia(c, a) {
  const { audio: o, L: s, sounds: f } = c,
    h = new Map();
  let d = 2,
    l = 0;
  const i = (e, n) =>
    (e[0] - a.position.x) ** 2 + (e[2] - a.position.z) ** 2 < n * n &&
    Math.abs(e[1] - a.position.y) < 8;
  return {
    update: (e, n) => {
      if (o?.loop) {
        for (const r of f.hums) {
          const u = Math.hypot(
              r.pos[0] - a.position.x,
              r.pos[2] - a.position.z,
            ),
            b = u < 30 && Math.abs(r.pos[1] - a.position.y) < 8;
          let M = h.get(r.id);
          (b &&
            !M &&
            ((M = o.loop(r.id, { pos: r.pos, vol: 0 })), h.set(r.id, M)),
            M && M.fadeTo?.(b ? Math.max(0, 0.5 - u / 60) : 0, 0.8));
        }
        if (((l -= e), l <= 0)) {
          l = 0.5;
          let r = null,
            u = 144;
          for (const M of s.srcs) {
            if (!M.buzz) continue;
            const x =
              (M.mid[0] - a.position.x) ** 2 + (M.mid[2] - a.position.z) ** 2;
            x < u &&
              Math.abs(M.mid[1] - a.position.y) < 6 &&
              ((u = x), (r = M));
          }
          let b = h.get("metro_tube_buzz");
          (r &&
            !b &&
            ((b = o.loop("metro_tube_buzz", { pos: r.mid, vol: 0 })),
            h.set("metro_tube_buzz", b)),
            b?.handle?.panner &&
              r &&
              ((b.handle.panner.positionX.value = r.mid[0]),
              (b.handle.panner.positionY.value = r.mid[1]),
              (b.handle.panner.positionZ.value = r.mid[2])),
            b && b.fadeTo?.(r ? 0.35 * r.lvl : 0, 0.2));
        }
        if (((d -= e), d <= 0)) {
          d =
            1.4 + ((((Math.sin(n * 12.9898) * 43758.5453) % 1) + 1) % 1) * 3.5;
          const r = f.drips.filter((u) => i(u, 14));
          if (r.length) {
            const u = r[Math.floor(((n * 7.13) % 1) * r.length)];
            o.play?.("metro_drip_" + (1 + (Math.floor(n * 3.1) % 3)), {
              pos: u,
              vol: 0.35,
            });
          }
        }
      }
    },
  };
}
export { Aa as M, La as b };
