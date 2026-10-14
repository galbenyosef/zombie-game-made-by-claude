// assets/metro-xgLUk92P 02 — replace
// Lines 301-585 of readable/assets/metro-xgLUk92P.pretty.js (statement-aligned).
function installMetroMaterialShader(c, a = {}) {
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
