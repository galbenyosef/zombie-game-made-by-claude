// assets__district-BhfbivMT 03 — fillstyle
// Lines 667-989 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
function Wt(n, t = 1) {
  const e = n.clone();
  ((e.userData = { ...n.userData }),
    (e.onBeforeCompile = (o) => {
      ((o.vertexShader = o.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec3 vWW;`,
        )
        .replace(
          "#include <worldpos_vertex>",
          `#include <worldpos_vertex>
vWW = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
        )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vWW;
float wH(vec2 p) { return fract(sin(dot(p, vec2(41.7, 289.3))) * 43758.5453); }
float wN(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(wH(i), wH(i + vec2(1, 0)), f.x), mix(wH(i + vec2(0, 1)), wH(i + vec2(1, 1)), f.x), f.y); }`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      float pud = 0.0, damp = 0.0;
      {
        vec2 q = vWW.xz;
        float n = wN(q * 0.33) * 0.62 + wN(q * 1.07 + 7.3) * 0.28 + wN(q * 3.4 + 1.1) * 0.1;
        pud = smoothstep(0.585, 0.605, n) * ${t.toFixed(3)} * step(vWW.y, 0.05);
        damp = smoothstep(0.5, 0.585, n) * ${t.toFixed(3)} * step(vWW.y, 0.05);
        diffuseColor.rgb *= mix(1.0, 0.62, damp) * mix(1.0, 0.55, pud);
      }`,
          )
          .replace(
            "#include <roughnessmap_fragment>",
            `#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.55, damp); roughnessFactor = mix(roughnessFactor, 0.035, pud);`,
          )
          .replace(
            "#include <normal_fragment_maps>",
            `#include <normal_fragment_maps>
      normal = normalize(mix(normal, nonPerturbedNormal, pud));`,
          )));
    }));
  const r = n.customProgramCacheKey ? n.customProgramCacheKey() : "";
  return (
    (e.customProgramCacheKey = () =>
      r + "|wet" + t.toFixed(2) + "|" + (n.userData.catalog || "")),
    e
  );
}
function Zn(n, t, e, r, o, l, s = 0.35) {
  const c = new p0(
    t - n,
    o,
    r - e,
    Math.max(1, Math.round((t - n) / 1.3)),
    1,
    Math.max(1, Math.round((r - e) / 1.3)),
  );
  c.translate((n + t) / 2, o / 2, (e + r) / 2);
  const a = c.attributes.position;
  for (let h = 0; h < a.count; h++)
    if (a.getY(h) > o - 0.01) {
      const f = a.getX(h),
        y = a.getZ(h),
        m =
          Math.sin(f * 0.9 + y * 0.4) * 0.5 +
          Math.sin(f * 2.3 - y * 1.7) * 0.3 +
          (l() - 0.5) * 0.4;
      a.setY(h, o - Math.max(0, m + 0.3) * o * s);
    }
  return (c.computeVertexNormals(), I0(c));
}
function ln(n, t, e) {
  const r = document.createElement("canvas");
  ((r.width = n), (r.height = t), e(r.getContext("2d"), n, t));
  const o = new Dt(r);
  return ((o.colorSpace = Pt), (o.anisotropy = 4), o);
}
const w0 = (n, t, e, r = 0, o = 0, l = 0) => new p0(n, t, e).translate(r, o, l);
function Fe(n, t, e, r, o, l) {
  const s = new D0(n, t),
    c = s.attributes.uv;
  for (let a = 0; a < c.count; a++)
    c.setXY(
      a,
      e[0] + (e[2] - e[0]) * c.getX(a),
      e[1] + (e[3] - e[1]) * c.getY(a),
    );
  return s.translate(r, o, l);
}
let ct = null;
function re() {
  if (ct) return ct;
  const n = ln(1024, 1024, (e) => {
      let r = 11;
      const o = () => (r = (r * 16807) % 2147483647) / 2147483647;
      ((e.fillStyle = "#dfe8ee"), e.fillRect(0, 0, 512, 512));
      const l = [
        "#c8202a",
        "#1a4a9a",
        "#f0c030",
        "#2a8a3a",
        "#e8e8e8",
        "#6a3a1a",
        "#e06a1a",
        "#101010",
        "#8ac8e8",
        "#b01a6a",
      ];
      for (let s = 0; s < 4; s++) {
        const c = 18 + s * 124,
          a = s >= 2;
        ((e.fillStyle = "#b8c4cc"), e.fillRect(0, c + 96, 512, 26));
        for (let h = 0; h < 8; h++) {
          const f = 14 + h * 62,
            y = l[(s * 3 + h * 7) % l.length];
          ((e.fillStyle = y),
            a
              ? (e.fillRect(f + 8, c + 30, 40, 64),
                (e.fillStyle = "rgba(255,255,255,0.5)"),
                e.fillRect(f + 12, c + 34, 6, 56),
                (e.fillStyle = "#c0c0c0"),
                e.fillRect(f + 8, c + 26, 40, 6))
              : (e.fillRect(f + 12, c + 28, 32, 66),
                e.fillRect(f + 20, c + 6, 16, 24),
                (e.fillStyle = "#fafafa"),
                e.fillRect(f + 12, c + 50, 32, 18),
                (e.fillStyle = y),
                e.fillRect(f + 22, c + 2, 12, 6)),
            (e.fillStyle = "#101418"),
            (e.font = "bold 15px Arial"),
            (e.textAlign = "center"),
            e.fillText(
              String([100, 120, 130, 150, 160][(h + s) % 5]),
              f + 28,
              c + 116,
            ));
        }
      }
      ((e.fillStyle = "#20262a"), e.fillRect(512, 0, 512, 128));
      for (let s = 0; s < 8; s++)
        ((e.fillStyle = s % 3 === 0 ? "#ff4030" : "#40e070"),
          e.fillRect(528 + s * 62, 40, 36, 30));
      ((e.fillStyle = "#2c3034"),
        e.fillRect(512, 128, 512, 256),
        (e.fillStyle = "#0a0a0a"),
        e.fillRect(600, 170, 60, 14),
        e.fillRect(700, 160, 120, 30),
        e.fillRect(640, 280, 110, 70),
        (e.fillStyle = "#ff3a2a"),
        (e.font = "bold 34px monospace"),
        e.fillText("0000", 840, 240),
        (e.fillStyle = "#f2f2f0"),
        e.fillRect(512, 384, 512, 128),
        (e.fillStyle = "#1a5ab0"));
      for (let s = 0; s < 4; s++) {
        (e.beginPath(), e.moveTo(512, 440 + s * 12));
        for (let c = 0; c <= 512; c += 16)
          e.lineTo(512 + c, 440 + s * 12 + Math.sin(c * 0.02 + s) * 10);
        (e.lineTo(1024, 512), e.lineTo(512, 512), e.fill());
      }
      ((e.fillStyle = "#1a5ab0"),
        (e.font = "bold italic 44px Arial"),
        (e.textAlign = "left"),
        e.fillText("Aqua", 540, 432),
        (e.fillStyle = "#0a0c0e"),
        e.fillRect(0, 512, 512, 512));
      for (let s = 0; s < 14; s++)
        ((e.fillStyle = l[s % l.length]),
          (e.globalAlpha = 0.35),
          e.fillRect(20 + o() * 450, 540 + o() * 440, 30, 60));
      ((e.globalAlpha = 1),
        (e.strokeStyle = "rgba(200,210,220,0.55)"),
        (e.lineWidth = 2));
      for (let s = 0; s < 16; s++) {
        const c = o() * 6.28;
        (e.beginPath(),
          e.moveTo(256, 768),
          e.lineTo(256 + Math.cos(c) * 260, 768 + Math.sin(c) * 260),
          e.stroke());
      }
      for (let s = 0; s < 8; s++)
        ((e.fillStyle = s % 2 ? "#141414" : "#e0b820"),
          e.beginPath(),
          e.moveTo(512 + s * 40, 512),
          e.lineTo(512 + s * 40 + 40, 512),
          e.lineTo(512 + s * 40, 640),
          e.lineTo(512 + s * 40 - 40, 640),
          e.fill());
      ((e.fillStyle = "#c81e1e"),
        e.fillRect(768, 512, 256, 256),
        (e.fillStyle = "#fff"),
        (e.font = "bold 150px sans-serif"),
        (e.textAlign = "center"),
        e.fillText("〒", 896, 700),
        (e.fillStyle = "rgba(0,0,0,0)"),
        e.clearRect(512, 640, 256, 256),
        (e.fillStyle = "#c81e1e"),
        e.beginPath(),
        e.moveTo(518, 648),
        e.lineTo(762, 648),
        e.lineTo(640, 890),
        e.closePath(),
        e.fill(),
        (e.strokeStyle = "#f4f4f4"),
        (e.lineWidth = 8),
        e.stroke(),
        (e.fillStyle = "#fff"),
        (e.font = 'bold 50px "Yu Gothic", sans-serif'),
        e.fillText("止まれ", 640, 730),
        (e.fillStyle = "#1a3f8a"),
        e.fillRect(768, 768, 256, 256),
        (e.strokeStyle = "#fff"),
        (e.lineWidth = 5),
        e.strokeRect(778, 778, 236, 236),
        (e.fillStyle = "#fff"),
        (e.font = 'bold 30px "Yu Gothic", sans-serif'),
        e.fillText("駅 Station", 896, 840),
        e.fillText("教会 Church", 896, 920),
        e.beginPath(),
        e.moveTo(830, 860),
        e.lineTo(960, 860),
        e.lineTo(940, 850),
        e.stroke(),
        (e.fillStyle = "#e0b820"),
        e.fillRect(512, 896, 256, 128));
      for (let s = 0; s < 9; s++)
        ((e.fillStyle = "#141414"),
          e.beginPath(),
          e.moveTo(512 + s * 34, 896),
          e.lineTo(512 + s * 34 + 16, 896),
          e.lineTo(512 + s * 34 - 16, 1024),
          e.lineTo(512 + s * 34 - 32, 1024),
          e.fill());
      ((e.fillStyle = "#e0b820"),
        e.fillRect(540, 930, 200, 60),
        (e.fillStyle = "#141414"),
        (e.font = 'bold 40px "Yu Gothic", sans-serif'),
        e.fillText("立入禁止", 640, 976));
    }),
    t = (e, r, o, l) => [e / 1024, 1 - l / 1024, o / 1024, 1 - r / 1024];
  return (
    (ct = {
      atlas: n,
      U: t,
      rect: {
        display: t(0, 0, 512, 512),
        buttons: t(512, 0, 1024, 128),
        coins: t(512, 128, 1024, 384),
        brand: t(512, 384, 1024, 512),
        smashed: t(0, 512, 512, 1024),
        band: t(512, 512, 768, 640),
        post: t(768, 512, 1024, 768),
        stop: t(512, 640, 768, 896),
        dir: t(768, 768, 1024, 1024),
        keep: t(512, 896, 768, 1024),
      },
      glow: new e0({
        map: n,
        emissive: 16777215,
        emissiveMap: n,
        emissiveIntensity: 1.1,
        roughness: 0.25,
      }),
      decal: new e0({ map: n, roughness: 0.5, metalness: 0.1 }),
      band: new e0({ map: n, roughness: 0.5, metalness: 0.1, side: ht }),
      paintW: new e0({ color: 15000284, roughness: 0.35, metalness: 0.2 }),
      paintR: new e0({ color: 11541532, roughness: 0.35, metalness: 0.2 }),
      paintB: new e0({ color: 1851018, roughness: 0.35, metalness: 0.2 }),
      dark: new e0({ color: 789774, roughness: 0.6, metalness: 0.3 }),
      chrome: new e0({ color: 12106944, roughness: 0.18, metalness: 0.95 }),
      concrete: v0("concrete_grey"),
      iron: v0("iron_black"),
      rust: v0("rust_metal"),
      orange: new e0({ color: 14700570, roughness: 0.55 }),
      white: new e0({ color: 15263970, roughness: 0.4 }),
      rubber: new e0({ color: 723723, roughness: 0.85 }),
      porcelain: new e0({ color: 14474452, roughness: 0.2 }),
      cloth: new e0({ color: 3814464, roughness: 0.9 }),
      umbrella: new e0({
        color: 6054504,
        roughness: 0.25,
        metalness: 0,
        side: ht,
      }),
      card: new mn({
        map: ln(128, 128, (e, r, o) => {
          const l = e.createRadialGradient(
            r / 2,
            o / 2,
            2,
            r / 2,
            o / 2,
            r / 2,
          );
          (l.addColorStop(0, "rgba(255,255,255,1)"),
            l.addColorStop(0.4, "rgba(255,255,255,0.45)"),
            l.addColorStop(1, "rgba(255,255,255,0)"),
            (e.fillStyle = l),
            e.fillRect(0, 0, r, o));
        }),
        color: new Mt(0.22, 0.3, 0.36),
        transparent: !0,
        depthWrite: !1,
        blending: bn,
        polygonOffset: !0,
        polygonOffsetFactor: -6,
        polygonOffsetUnits: -6,
      }),
    }),
    (ct.card.map.colorSpace = Kt),
    ct
  );
}
const X = (n, t, e) => {
    const r = new l0(n, t);
    return ((r.castShadow = !0), (r.receiveShadow = !0), e.add(r), r);
  },
  Q = (n) => I0(n);
