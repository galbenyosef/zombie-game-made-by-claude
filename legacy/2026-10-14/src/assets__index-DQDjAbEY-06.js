// assets__index-DQDjAbEY 06 — math
// Lines 1702-2043 of readable/assets__index-DQDjAbEY.pretty.js (statement-aligned).
function xa(e, l) {
  const a = (t, s, n, c) => {
      const i = l(t, s, n, 128, 128),
        d = s + 64,
        f = n + 64;
      return (
        e.save(),
        e.beginPath(),
        e.arc(d, f, 62, 0, Math.PI * 2),
        e.clip(),
        c(d, f),
        e.restore(),
        i
      );
    },
    o = (t, s, n, c, i, d, f, p = 2) => {
      ((e.strokeStyle = "#e8e6df"), (e.lineWidth = p));
      for (let m = 0; m <= n; m++) {
        const x = d + ((f - d) * m) / n;
        (e.beginPath(),
          e.moveTo(t + Math.cos(x) * c, s + Math.sin(x) * c),
          e.lineTo(t + Math.cos(x) * i, s + Math.sin(x) * i),
          e.stroke());
      }
    };
  (a("dialAtt", 340, 1110, (t, s) => {
    ((e.fillStyle = "#1c5aa8"),
      e.fillRect(t - 64, s - 64, 128, 64),
      (e.fillStyle = "#6a3c14"),
      e.fillRect(t - 64, s, 128, 64),
      (e.fillStyle = "#e8e6df"),
      e.fillRect(t - 64, s - 1, 128, 3));
    for (const n of [-20, -10, 10, 20])
      e.fillRect(
        t - (Math.abs(n) > 10 ? 18 : 10),
        s - n * 1.4,
        Math.abs(n) > 10 ? 36 : 20,
        2,
      );
    ((e.fillStyle = "#e0a020"),
      e.fillRect(t - 34, s - 2, 22, 5),
      e.fillRect(t + 12, s - 2, 22, 5),
      e.beginPath(),
      e.arc(t, s, 3, 0, 7),
      e.fill(),
      o(t, s, 6, 52, 60, -Math.PI * 0.83, -Math.PI * 0.17));
  }),
    a("dialAsi", 480, 1110, (t, s) => {
      ((e.fillStyle = "#0d0d0e"),
        e.fillRect(t - 64, s - 64, 128, 128),
        (e.strokeStyle = "#2a9a3a"),
        (e.lineWidth = 6),
        e.beginPath(),
        e.arc(t, s, 52, -Math.PI * 0.6, Math.PI * 0.55),
        e.stroke(),
        o(t, s, 16, 48, 58, -Math.PI * 1.25, Math.PI * 0.25),
        (e.fillStyle = "#e8e6df"),
        (e.font = "bold 15px Arial"),
        (e.textAlign = "center"),
        e.fillText("KNOTS", t, s + 30),
        e.fillText("40", t - 30, s + 8),
        e.fillText("80", t, s - 32),
        e.fillText("120", t + 32, s + 8));
    }),
    a("dialAlt", 620, 1110, (t, s) => {
      ((e.fillStyle = "#0d0d0e"),
        e.fillRect(t - 64, s - 64, 128, 128),
        o(t, s, 50, 54, 60, 0, Math.PI * 2, 1.5),
        o(t, s, 10, 48, 60, 0, Math.PI * 2, 3),
        (e.fillStyle = "#e8e6df"),
        (e.font = "bold 16px Arial"),
        (e.textAlign = "center"),
        (e.textBaseline = "middle"));
      for (let n = 0; n < 10; n++) {
        const c = -Math.PI / 2 + (n * Math.PI) / 5;
        e.fillText(String(n), t + Math.cos(c) * 38, s + Math.sin(c) * 38);
      }
      ((e.font = "11px Arial"),
        e.fillText("ALT", t, s + 18),
        (e.fillStyle = "#222"),
        e.fillRect(t + 10, s - 8, 30, 14),
        (e.fillStyle = "#ddd"),
        (e.font = "bold 11px monospace"),
        e.fillText("1013", t + 25, s));
    }),
    a("clock", 760, 1110, (t, s) => {
      ((e.fillStyle = "#0d0d0e"),
        e.fillRect(t - 64, s - 64, 128, 128),
        o(t, s, 60, 55, 60, 0, Math.PI * 2, 1),
        o(t, s, 12, 46, 60, 0, Math.PI * 2, 4),
        (e.fillStyle = "#e8e6df"),
        (e.font = "bold 12px Arial"),
        (e.textAlign = "center"),
        e.fillText("CLOCK", t, s + 26));
    }));
  {
    l("manifest", 900, 1110, 300, 310);
    const t = 900,
      s = 1110;
    ((e.fillStyle = "#d9d3c2"), e.fillRect(t, s, 300, 310));
    const n = e.createLinearGradient(t, s, t + 300, s + 310);
    (n.addColorStop(0, "rgba(120,100,70,0.0)"),
      n.addColorStop(1, "rgba(120,100,70,0.25)"),
      (e.fillStyle = n),
      e.fillRect(t, s, 300, 310),
      (e.fillStyle = "#222"),
      (e.font = "bold 15px Arial"),
      (e.textAlign = "left"),
      e.fillText("EVACUATION MANIFEST - PT. 4", t + 14, s + 26),
      (e.font = "10px Arial"),
      e.fillText("AIR RESCUE 07   /   ST. AGNES HOSPITAL", t + 14, s + 42),
      (e.strokeStyle = "#555"),
      (e.lineWidth = 1));
    for (let i = 0; i < 12; i++) {
      const d = s + 60 + i * 19;
      (e.beginPath(), e.moveTo(t + 12, d), e.lineTo(t + 288, d), e.stroke());
    }
    const c = [
      "K. Mori",
      "A. Fujii  (child)",
      "H. Wells",
      "T. Nakano",
      "R. Ortega",
      "S. Ito",
      "M. Becker",
      "Y. Sato",
      "J. Okafor",
      "E. Tanaka",
    ];
    ((e.font = 'italic 14px "Segoe Print", "Comic Sans MS", cursive'),
      (e.fillStyle = "#1d2a6a"),
      c.forEach((i, d) => {
        const f = s + 74 + d * 19;
        (e.fillText(i, t + 22, f),
          d % 3 !== 1 &&
            ((e.strokeStyle = "#1d2a6a"),
            (e.lineWidth = 1.6),
            e.beginPath(),
            e.moveTo(t + 18, f - 4),
            e.lineTo(t + 22 + e.measureText(i).width + 6, f - 6),
            e.stroke()));
      }),
      (e.fillStyle = "rgba(110,8,8,0.75)"),
      e.beginPath(),
      e.ellipse(t + 230, s + 250, 26, 18, 0.4, 0, 7),
      e.fill(),
      (e.fillStyle = "rgba(110,8,8,0.5)"));
    for (let i = 0; i < 9; i++)
      (e.beginPath(),
        e.arc(
          t + 205 + ((i * 37) % 60),
          s + 222 + ((i * 23) % 50),
          2 + (i % 3),
          0,
          7,
        ),
        e.fill());
  }
}
function ya({ livery: e = "rescue" } = {}) {
  const l = new jt({
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.3,
      envMapIntensity: 1,
    }),
    a = [];
  for (let i = 0; i < Xe; i++) a.push(new b0());
  const o = [];
  for (let i = 0; i < Rt; i++) o.push(new I0(0, 0, 0, 0));
  const t = [],
    s = [],
    n = [];
  for (let i = 0; i < Ce; i++)
    (t.push(new I0()), s.push(new I0()), n.push(new I0()));
  const c = {
    uPart: { value: a },
    uRotor: { value: new I0(0.3, 0, 5.5, 1) },
    uTRotorA: { value: 1 },
    uLivery: { value: e === "army" ? 1 : 0 },
    uDirt: { value: 0.8 },
    uBurn: { value: 0 },
    uLamp: { value: o },
    uDecP: { value: t },
    uDecU: { value: s },
    uDecS: { value: n },
    tAtlas: { value: ao() },
    uViewToRest: { value: new b0() },
    uDoorsOpen: { value: new I0() },
    uPanelLight: { value: 0 },
  };
  return (
    (l.userData.U = c),
    (l.onBeforeCompile = (i) => {
      (Object.assign(i.uniforms, c),
        (i.vertexShader = i.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
` + la,
          )
          .replace(
            "#include <beginnormal_vertex>",
            `#include <beginnormal_vertex>
` + ia,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` + ca,
          )),
        (i.fragmentShader = i.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
` + ua,
          )
          .replace(
            "#include <clipping_planes_fragment>",
            `#include <clipping_planes_fragment>
` + pa,
          )
          .replace(
            "#include <lights_fragment_begin>",
            Ro.lights_fragment_begin
              .replace(
                "getPointLightInfo( pointLight, geometryPosition, directLight );",
                "getPointLightInfo( pointLight, geometryPosition, directLight ); if (vAO < 0.999 && max(directLight.color.r, max(directLight.color.g, directLight.color.b)) > 1e-5) directLight.color *= hpLightVis( pointLight.position );",
              )
              .replace(
                "getSpotLightInfo( spotLight, geometryPosition, directLight );",
                "getSpotLightInfo( spotLight, geometryPosition, directLight ); if (vAO < 0.999 && max(directLight.color.r, max(directLight.color.g, directLight.color.b)) > 1e-5) directLight.color *= hpLightVis( spotLight.position );",
              ),
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
` + ma,
          )
          .replace(
            "#include <roughnessmap_fragment>",
            `#include <roughnessmap_fragment>
roughnessFactor = wkRough;`,
          )
          .replace(
            "#include <metalnessmap_fragment>",
            `#include <metalnessmap_fragment>
metalnessFactor = wkMetal;`,
          )
          .replace(
            "#include <normal_fragment_maps>",
            `#include <normal_fragment_maps>
` + va,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
totalEmissiveRadiance += wkGlowCol * wkGlow;`,
          )
          .replace(
            "#include <lights_physical_fragment>",
            `#include <lights_physical_fragment>
material.clearcoat = vSurf.z * wkCoat;
material.clearcoatRoughness = clamp(0.22 + (1.0 - wkCoat) * 0.5, 0.0, 1.0);`,
          )
          .replace(
            "#include <aomap_fragment>",
            `#include <aomap_fragment>
reflectedLight.indirectDiffuse *= vAO; reflectedLight.indirectSpecular *= vAO;`,
          )));
    }),
    (l.customProgramCacheKey = () => "heli_v1"),
    (l.defines = { ...(l.defines || {}), USE_UV: "" }),
    (l.userData.depth = Vt(c, !1)),
    (l.userData.distance = Vt(c, !0)),
    l
  );
}
const wa = `
attribute vec4 aSurf;
attribute vec3 aTag;
uniform mat4 uPart[${Xe}];
uniform vec4 uRotor;
uniform float uTRotorA;
varying vec3 vRest;
varying float vMode;
varying float vKind;
`,
  ba = `
int hpI = int(aTag.x + 0.5);
vRest = position - normal * aTag.z; vMode = aTag.y; vKind = aSurf.w;
if (hpI == 5) {
  float hr = length(position.xz);
  float hu = clamp((hr - 0.5) / (uRotor.z - 0.5), 0.0, 1.0);
  transformed.y += -uRotor.x * hu * hu + uRotor.y * hu;
  if (aSurf.w > 11.5 && aSurf.w < 12.5 && uRotor.w < 0.5) transformed = vec3(0.0);
}
if (hpI == 6 && aSurf.w > 11.5 && aSurf.w < 12.5 && uTRotorA < 0.5) transformed = vec3(0.0);
transformed = (uPart[hpI] * vec4(transformed, 1.0)).xyz;
`;
function Vt(e, l) {
  const a = l ? new ko() : new zo({ depthPacking: So });
  return (
    (a.onBeforeCompile = (o) => {
      (Object.assign(o.uniforms, {
        uPart: e.uPart,
        uRotor: e.uRotor,
        uTRotorA: e.uTRotorA,
      }),
        (o.vertexShader = o.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
` + wa,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` + ba,
          )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vRest;
varying float vMode;
varying float vKind;
` + Pt(),
          )
          .replace(
            "#include <clipping_planes_fragment>",
            `#include <clipping_planes_fragment>
if (hmKeep(vRest, vMode) < 0.0) discard;
if (vKind > 12.5 && vKind < 13.5) discard;`,
          )));
    }),
    (a.customProgramCacheKey = () => (l ? "heli_dist_v1" : "heli_depth_v1")),
    a
  );
}
