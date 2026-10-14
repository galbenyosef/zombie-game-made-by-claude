// assets__index-TPd_HXBJ 04 — replace
// Lines 1042-1332 of readable/assets__index-TPd_HXBJ.pretty.js (statement-aligned).
let vt = null;
function it() {
  return (
    vt ||
    ((vt = {
      uTime: { value: 0 },
      uLamps: { value: new Kt(0, 0, 1, 0) },
      uPower: { value: 1 },
      uWheel: { value: 0 },
    }),
    (vt.uWheelF = vt.uWheel),
    vt)
  );
}
function fe(t = 0) {
  return {
    uDoor: { value: new Kt(0, 0, 0, 0) },
    uZone: { value: new D0(1, 1, 1) },
    uLight: { value: 1 },
    uHead: { value: 0 },
    uTail: { value: 0 },
    uCar: { value: new Kt(0.8, 0, t, 0) },
    uBtn: { value: new c0(0, 0) },
    uToCar: { value: new lo() },
    uCarPos: { value: new D0() },
    uCab: { value: 0 },
    uKnock: { value: 0 },
    uKnockF: { value: 0 },
    uGang: { value: new c0(0, 0) },
    uStripK: { value: 1.75 },
    uEnvK: { value: 1 },
    uReflK: { value: 1 },
    uEnvD: { value: 0.36 },
    uEnvBoost: { value: new c0(4, 2) },
  };
}
function st(t, e, o, n = {}) {
  const a = t === "glassIn" || t === "glassOut",
    l = t === "decal",
    r = t === "int" || t === "glassIn" || l,
    p = new Ko({
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      envMapIntensity: 1,
      transparent: a || l,
      depthWrite: !(a || l),
      side: Wo,
    });
  ((p.name = "train_" + t),
    a &&
      ((p.opacity = 1),
      (p.blending = Ho),
      (p.blendSrc = _e),
      (p.blendDst = Oe),
      (p.blendSrcAlpha = _e),
      (p.blendDstAlpha = Oe)),
    l &&
      ((p.polygonOffset = !0),
      (p.polygonOffsetFactor = -2),
      (p.polygonOffsetUnits = -2)));
  const c = {
    ...it(),
    ...e,
    tDecal: { value: o.atlas },
    ...(a ? { uReflK: { value: t === "glassIn" ? 3.2 : 1 } } : {}),
    uDirRough: { value: t === "int" || t === "decal" ? 0.5 : a ? 0.32 : 0.36 },
    uBoxMin: { value: o.box?.min || new D0() },
    uBoxMax: { value: o.box?.max || new D0() },
    uBoxEye: { value: o.box?.eye || new D0() },
  };
  return (
    r &&
      Object.assign(c, {
        tMoq: { value: o.moq },
        tMoqN: { value: o.moqN },
        tFloor: { value: o.floor },
        tFloorN: { value: o.floorN },
        tFloorO: { value: o.floorO },
      }),
    (p.userData.U = c),
    (p.defines = { USE_UV: "" }),
    r && (p.defines.TR_INT = ""),
    n.wheels && (p.defines.TR_WHEELS = ""),
    (p.onBeforeCompile = (d) => {
      (Object.assign(d.uniforms, c),
        (d.vertexShader = d.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
` + yn,
          )
          .replace(
            "#include <beginnormal_vertex>",
            `#include <beginnormal_vertex>
` + vn,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` + wn,
          )));
      let i = d.fragmentShader.replace(
        "#include <common>",
        `#include <common>
` +
          kn +
          (a
            ? `uniform float uReflK;
`
            : ""),
      );
      (r
        ? ((i = i.replace("#include <envmap_physical_pars_fragment>", Sn)),
          a ||
            (i = i.replace(
              "#include <lights_fragment_maps>",
              `#include <lights_fragment_maps>
` + Ln,
            )),
          (i = i.replace(
            "#include <lights_pars_begin>",
            jo.lights_pars_begin
              .replace(
                "light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );",
                "light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay ) * trOcc( pointLight.position );",
              )
              .replace(
                "light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );",
                "light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay ) * trOcc( spotLight.position );",
              ),
          )))
        : (i = i.replace(
            "#include <lights_fragment_maps>",
            `#include <lights_fragment_maps>
radiance *= uEnvBoost.x; iblIrradiance *= uEnvBoost.y;`,
          )),
        (i = i
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
` + (a ? Pn : l ? zn : Mn),
          )
          .replace(
            "#include <roughnessmap_fragment>",
            `#include <roughnessmap_fragment>
roughnessFactor = trRough;`,
          )
          .replace(
            "#include <metalnessmap_fragment>",
            `#include <metalnessmap_fragment>
metalnessFactor = trMetal;`,
          )
          .replace(
            "#include <normal_fragment_maps>",
            `#include <normal_fragment_maps>
` + An,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
` + Tn,
          )
          .replace(
            "#include <lights_fragment_begin>",
            `float trRK = material.roughness; material.roughness = max(material.roughness, uDirRough);
#include <lights_fragment_begin>
material.roughness = trRK;`,
          )),
        a && (i = i.replace("#include <opaque_fragment>", In)),
        (d.fragmentShader = i));
    }),
    (p.customProgramCacheKey = () =>
      "train3_" + t + (n.wheels ? "_w" : "") + "_v3"),
    p
  );
}
function En(t) {
  const e = it(),
    o = (n) => {
      const a = new n();
      return (
        (a.onBeforeCompile = (l) => {
          (Object.assign(l.uniforms, { uDoor: t.uDoor, uWheel: e.uWheel }),
            (l.vertexShader = l.vertexShader
              .replace(
                "#include <common>",
                `#include <common>
attribute float aAnim;
uniform vec4 uDoor;
uniform float uWheel;
`,
              )
              .replace(
                "#include <begin_vertex>",
                `#include <begin_vertex>
if (aAnim > 0.5 && aAnim < 4.5) { float trOpen = aAnim < 2.5 ? uDoor.x : uDoor.y; float trDir = (aAnim < 1.5 || (aAnim > 2.5 && aAnim < 3.5)) ? -1.0 : 1.0; transformed.x += trDir * trOpen; }
`,
              )));
        }),
        (a.customProgramCacheKey = () => "train3_depth_" + n.name),
        a
      );
    };
  return { depth: o(Jo), distance: o(Qo) };
}
const ft = 2048,
  V = (t, e, o, n) => [t / ft, 1 - (e + n) / ft, (t + o) / ft, 1 - e / ft],
  R = {
    route: V(0, 0, 1024, 128),
    dest: V(1024, 0, 1024, 128),
    scroll: V(0, 128, 2048, 64),
    car4012: V(0, 192, 256, 64),
    car4013: V(256, 192, 256, 64),
    car4014: V(512, 192, 256, 64),
    roundel: V(768, 192, 64, 64),
    nosmoke: V(832, 192, 192, 64),
    priority: V(1024, 192, 256, 64),
    gap: V(1280, 192, 256, 64),
    lean: V(1536, 192, 256, 64),
    alarm: V(1792, 192, 256, 64),
    ad0: V(0, 256, 512, 192),
    ad1: V(512, 256, 512, 192),
    ad2: V(1024, 256, 512, 192),
    ad3: V(1536, 256, 512, 192),
    ad4: V(0, 448, 512, 192),
    ad5: V(512, 448, 512, 192),
    ad6: V(1024, 448, 512, 192),
    ad7: V(1536, 448, 512, 192),
    paper: V(0, 640, 512, 384),
    phone: V(512, 640, 192, 384),
    hand: V(704, 640, 320, 384),
    pool: V(1024, 640, 512, 384),
    drag: V(1536, 640, 512, 384),
    console: V(0, 1024, 1024, 256),
    extLabel: V(1024, 1024, 128, 256),
    intercom: V(1152, 1024, 256, 256),
    btnOpen: V(1408, 1024, 128, 128),
    btnBlank: V(1408, 1152, 128, 128),
    bag: V(1536, 1024, 256, 256),
    can: V(1792, 1024, 256, 128),
    box: V(1792, 1152, 256, 128),
    scratch: V(0, 1280, 512, 256),
    logo: V(512, 1280, 256, 128),
    sideDest: V(768, 1280, 512, 64),
    exitSign: V(768, 1344, 256, 64),
    notice: V(1280, 1280, 384, 256),
    extTag: V(1664, 1280, 384, 128),
    cabScreen: V(1664, 1408, 384, 128),
    staff: V(768, 1408, 256, 76),
    spatter: V(0, 1536, 512, 512),
    grime: V(512, 1536, 512, 512),
    palm: V(1024, 1536, 256, 256),
    smear2: V(1280, 1536, 768, 256),
  },
  We = {
    names: ["MILLBANK", "ST. AGNES", "ASHWOOD", "PARKGATE"],
    lampU: [0.16, 0.39, 0.62, 0.85],
  };
let de = null;
function Nn() {
  if (de) return de;
  const t = document.createElement("canvas");
  t.width = t.height = ft;
  const e = t.getContext("2d");
  Fn(e);
  const o = new Yo(t);
  return (
    (o.colorSpace = io),
    (o.anisotropy = 8),
    (o.premultiplyAlpha = !1),
    (o.generateMipmaps = !0),
    (o.minFilter = Xo),
    (de = o),
    o
  );
}
function Cn(t) {
  let e = t >>> 0;
  return () => {
    e = (e + 1831565813) >>> 0;
    let o = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (o = (o + Math.imul(o ^ (o >>> 7), 61 | o)) ^ o),
      ((o ^ (o >>> 14)) >>> 0) / 4294967296
    );
  };
}
const x = '"Helvetica Neue", Helvetica, Arial, sans-serif',
  Wt = '"Arial Narrow", "Roboto Condensed", Arial, sans-serif',
  N0 = 'Georgia, "Times New Roman", serif';
