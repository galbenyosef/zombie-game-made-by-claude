// assets/script2-Chjgntzz 02 — fillstyle
// Lines 299-510 of readable/assets/script2-Chjgntzz.pretty.js (statement-aligned).
function Bo() {
  if (B0) return B0;
  const p = 512,
    e = document.createElement("canvas");
  e.width = e.height = p;
  const o = e.getContext("2d");
  ((o.fillStyle = "#000"), o.fillRect(0, 0, p, p));
  {
    ((o.fillStyle = "#d9d4c3"),
      o.fillRect(8, 8, 240, 120),
      (o.strokeStyle = "#2f5a35"),
      (o.lineWidth = 3),
      o.strokeRect(13, 13, 230, 110),
      (o.fillStyle = "#2c5733"),
      (o.font = 'bold 26px "Yu Gothic", "Meiryo", "MS Gothic", sans-serif'),
      (o.textAlign = "center"),
      (o.textBaseline = "middle"),
      o.fillText("山添町 せ", 8 + 240 / 2, 38),
      (o.font = 'bold 54px "Arial Narrow", Arial, sans-serif'),
      o.fillText("27-18", 8 + 240 / 2, 88));
    const b = o.createLinearGradient(0, 8, 0, 128);
    (b.addColorStop(0, "rgba(70,52,30,0)"),
      b.addColorStop(1, "rgba(70,52,30,0.55)"),
      (o.fillStyle = b),
      o.fillRect(8, 8, 240, 120));
    for (const g of [30, 226]) {
      const n = o.createLinearGradient(0, 18, 0, 68);
      (n.addColorStop(0, "rgba(110,50,15,0.8)"),
        n.addColorStop(1, "rgba(110,50,15,0)"),
        (o.fillStyle = n),
        o.fillRect(g - 3, 20, 6, 50),
        (o.fillStyle = "#3a3630"),
        o.beginPath(),
        o.arc(g, 22, 5, 0, 7),
        o.fill());
    }
  }
  {
    ((o.fillStyle = "#0b0b0c"),
      o.beginPath(),
      o.arc(384, 128, 116, 0, 7),
      o.fill(),
      (o.strokeStyle = "#d8d4c8"),
      (o.fillStyle = "#d8d4c8"),
      (o.textAlign = "center"),
      (o.textBaseline = "middle"));
    const x = Math.PI * 0.75,
      b = Math.PI * 2.25;
    for (let g = 0; g <= 140; g += 5) {
      const n = x + (b - x) * (g / 140),
        B = g % 20 === 0,
        O = B ? 116 * 0.76 : 116 * 0.84;
      ((o.lineWidth = B ? 4 : 2),
        o.beginPath(),
        o.moveTo(384 + Math.cos(n) * O, 128 + Math.sin(n) * O),
        o.lineTo(
          384 + Math.cos(n) * 116 * 0.93,
          128 + Math.sin(n) * 116 * 0.93,
        ),
        o.stroke(),
        B &&
          ((o.font = "bold 20px Arial, sans-serif"),
          o.fillText(
            String(g),
            384 + Math.cos(n) * 116 * 0.58,
            128 + Math.sin(n) * 116 * 0.58,
          )));
    }
    ((o.strokeStyle = "#b3261e"),
      (o.lineWidth = 5),
      o.beginPath(),
      o.arc(384, 128, 116 * 0.88, x + (b - x) * (110 / 140), b),
      o.stroke(),
      (o.font = "16px Arial, sans-serif"),
      o.fillText("km/h", 384, 174),
      (o.fillStyle = "#1a1a1a"),
      o.fillRect(350, 192, 68, 20),
      (o.fillStyle = "#c9c4b5"),
      (o.font = 'bold 16px "Courier New", monospace'),
      o.fillText("04718", 384, 203));
  }
  ((o.fillStyle = "#5b1015"),
    o.fillRect(8, 280, 240, 90),
    (o.strokeStyle = "#c9c2b0"),
    (o.lineWidth = 6),
    o.strokeRect(12, 284, 232, 82),
    (o.fillStyle = "#e4dcc6"),
    (o.font = 'italic bold 36px Georgia, "Times New Roman", serif'),
    (o.textAlign = "center"),
    (o.textBaseline = "middle"),
    o.fillText("Kogarashi", 8 + 240 / 2, 280 + 90 / 2 + 2),
    (o.fillStyle = "#b9ae93"),
    o.fillRect(262, 262, 244, 244),
    (o.fillStyle = "#cbbf98"),
    o.beginPath(),
    o.ellipse(384, 384, 110, 90, 0, 0, 7),
    o.fill(),
    (o.strokeStyle = "rgba(40,30,20,0.35)"),
    (o.lineWidth = 3),
    o.stroke(),
    (o.fillStyle = "#121110"),
    (o.font = 'bold 110px "Arial Black", Arial, sans-serif'),
    (o.textAlign = "center"),
    (o.textBaseline = "middle"),
    o.fillText("27", 384, 390));
  const r = o.getImageData(0, 0, p, p),
    s = r.data;
  for (let k = 0; k < p; k++)
    for (let S = 0; S < p; S++) {
      const u = (k * p + S) * 4;
      s[u + 3] =
        (S > 256 && k < 256) || (S < 256 && k > 256 && k < 380) ? 255 : 140;
    }
  o.putImageData(r, 0, 0);
  const T = new ho(e);
  return (
    (T.colorSpace = fo),
    (T.anisotropy = 8),
    (T.premultiplyAlpha = !1),
    (B0 = T),
    T
  );
}
const T0 = {
  plate: [8 / 512, 1 - 128 / 512, 248 / 512, 1 - 8 / 512],
  dial: [268 / 512, 1 - 244 / 512, 500 / 512, 1 - 12 / 512],
  badge: [8 / 512, 1 - 370 / 512, 248 / 512, 1 - 280 / 512],
  number: [274 / 512, 1 - 474 / 512, 494 / 512, 1 - 294 / 512],
};
function Co() {
  const p = new po({
      vertexColors: !0,
      roughness: 1,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.35,
      envMapIntensity: 1,
    }),
    e = {
      uHead: { value: 0 },
      uTail: { value: 0 },
      uDirt: { value: 0.75 },
      tDecal: { value: Bo() },
      uShock: { value: new uo(0, -0.1, -0.3, 0) },
      uBounce: { value: new C0(0, 0, 0) },
      uBouncePos: { value: new O0() },
    };
  return (
    (p.userData.U = e),
    (p.onBeforeCompile = (o) => {
      (Object.assign(o.uniforms, e),
        (o.vertexShader = o.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
` + Ao,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` + Io,
          )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
` + Fo,
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
` + Lo,
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
` + Do,
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
material.clearcoatRoughness = clamp(0.28 + (1.0 - wkCoat) * 0.5, 0.0, 1.0);`,
          )
          .replace(
            "#include <lights_fragment_end>",
            `#include <lights_fragment_end>
` + Wo,
          )));
    }),
    (p.customProgramCacheKey = () => "bike_v2"),
    p
  );
}
function Vo(p) {
  return ((p.defines = { ...(p.defines || {}), USE_UV: "" }), p);
}
