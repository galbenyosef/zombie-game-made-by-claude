// assets/bedroom-Se-_w21f 20 — color
// Lines 4966-5235 of readable/assets/bedroom-Se-_w21f.pretty.js (statement-aligned).
async function loadBedroomMaterials(N) {
  const { mats: t } = N,
    w = (h) => t.has(h),
    e = (h, i, z, D = {}) => t.get(h, { ...D, color: w(h) ? z : i }),
    o = $t,
    M = async (h, i = !0) => {
      try {
        const z = await new ze().loadAsync(h);
        return ((z.colorSpace = i ? ke : Pe), (z.anisotropy = 8), z);
      } catch {
        return null;
      }
    },
    s = {};
  if (
    ((s.iron = t.get("iron_black")),
    (s.ironDark = e("iron_black", "#121110", "#6a6560")),
    (s.brass = t.get("brass_aged")),
    (s.chrome = t.get("steel_gun", {
      color: w("steel_gun") ? "#ffffff" : "#8d8f90",
      rough: 0.25,
    })),
    (s.linen = t.has("bed_linen")
      ? t.get("bed_linen", { side: o })
      : Ct(t.get("linen_stained", { side: o }), {
          normalScale: new ue(0.3, 0.3),
        })),
    (s.ticking = e("linen_stained", "#8d8470", "#c4b9a0")),
    (s.wool = e("wool_grey", "#4a2220", "#c07060", { side: o })),
    (s.walnut = t.get("wood_walnut")),
    (s.ebony = t.get("wood_ebony")),
    (s.oak = t.get("wood_oak_pale")),
    (s.velvet = t.get("velvet_red", { side: o })),
    (s.wax = e("wax_candle", "#bfb294", "#d6c6a4")),
    (s.waxGlow = Ct(s.wax, {
      emissive: new pt(1, 0.42, 0.1),
      emissiveIntensity: 0.3,
    })),
    (s.wick = new S0({ color: 854536, roughness: 0.9 })),
    (s.saucer = e("porcelain_cracked", "#c9c0ae", "#e8e0cf")),
    (s.porcelain = t.get("porcelain_cracked")),
    (s.paper = t.get("paper_old")),
    (s.rug = t.get("rug_persian", { uv: 1 })),
    (s.cord = new S0({ color: 2760988, roughness: 0.8 })),
    (s.fibre = new S0({ color: 1380624, roughness: 0.45 })),
    (s.shade = Ct(e("linen_stained", "#b89a70", "#e8c898", { side: o }), {
      emissive: new pt(1, 0.55, 0.22),
      emissiveIntensity: 0.8,
    })),
    (s.glass = new D0({
      color: 14674148,
      roughness: 0.04,
      metalness: 0,
      transparent: !0,
      opacity: 0.16,
      depthWrite: !1,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      envMapIntensity: 2.5,
      side: o,
    })),
    (s.water = new D0({
      color: 11122864,
      roughness: 0.02,
      metalness: 0,
      transparent: !0,
      opacity: 0.28,
      depthWrite: !1,
      envMapIntensity: 2,
    })),
    (s.lens = new D0({
      color: 13621468,
      roughness: 0.05,
      metalness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.03,
      envMapIntensity: 3,
    })),
    (s.handMat = new S0({ color: 1118224, roughness: 0.4, metalness: 0.4 })),
    (s.vase = e("porcelain_cracked", "#b9b3a4", "#dcd4c6")),
    (s.stem = e("paper_old", "#3b3524", "#6a5c3e")),
    (s.petal = e("paper_old", "#4a1f1a", "#8a3a2e")),
    (s.leaf = e("paper_old", "#3a3a24", "#6c6a44", { side: o })),
    (s.card = e("paper_old", "#4a3a2a", "#8a7058")),
    (s.bead = new D0({
      color: 1707274,
      roughness: 0.25,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    })),
    (s.amber = new D0({
      color: 8010252,
      roughness: 0.1,
      transparent: !0,
      opacity: 0.72,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
    })),
    (s.capMat = e("porcelain_cracked", "#d8d2c6", "#ffffff")),
    (s.pill = new S0({ color: 15262420, roughness: 0.6 })),
    (s.clockFace = t.has("bed_clock")
      ? t.get("bed_clock", { uv: 1 })
      : new S0({ color: 14208176, roughness: 0.6 })),
    (s.ivory = e("porcelain_cracked", "#d6cbb0", "#efe2c4")),
    (s.feltRed = e("velvet_red", "#3a0c10", "#9a5050")),
    (s.radiator = e("iron_black", "#2c2926", "#8a8278")),
    (s.trim = t.get("trim_ivory", { breakup: 0 })),
    (s.cloth = e("wool_grey", "#1b1a1c", "#48444a", { side: o })),
    (s.cardigan = e("wool_grey", "#5e5a46", "#b8b08a", { side: o })),
    (s.upholstery = t.get("upholstery_green")),
    (s.mirrorGlass = new S0({
      color: 1711647,
      roughness: 0.32,
      metalness: 0.9,
      envMapIntensity: 1.2,
    })),
    (s.bulbGlass = new D0({
      color: 14210248,
      roughness: 0.15,
      transparent: !0,
      opacity: 0.35,
      depthWrite: !1,
      clearcoat: 1,
      side: o,
    })),
    (s.bakelite = new S0({ color: 1970699, roughness: 0.35 })),
    (s.dollEye = new D0({
      vertexColors: !0,
      roughness: 0.15,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
    })),
    (s.hairBlonde = e("wool_grey", "#a08a5a", "#e8cc88")),
    (s.hairDark = e("wool_grey", "#2a1c14", "#5a3c2a")),
    (s.hairAuburn = e("wool_grey", "#6a3020", "#c86a44")),
    (s.dressIvory = e("linen_stained", "#bfb49a", "#f0e8d8", { side: o })),
    (s.dressRose = e("linen_stained", "#8a5a58", "#d8a0a0", { side: o })),
    (s.dressBlue = e("linen_stained", "#56666e", "#a8bcc8", { side: o })),
    (s.dressBlack = e("velvet_red", "#141012", "#402a30", { side: o })),
    (s.stocking = new S0({ color: 14275268, roughness: 0.8 })),
    (s.shoe = new D0({ color: 920330, roughness: 0.35, clearcoat: 0.6 })),
    (s.murk = new D0({
      color: 3812884,
      roughness: 0.1,
      transparent: !0,
      opacity: 0.55,
      depthWrite: !1,
    })),
    (s.chainMat = t.get("steel_gun", {
      color: w("steel_gun") ? "#c8c8c8" : "#3a3c3e",
      rough: 0.45,
    })),
    (s.keyhole = new S0({ color: 328708, roughness: 0.9 })),
    (s.bristle = new S0({ color: 2827296, roughness: 0.95 })),
    (s.greyHair = new S0({ color: 10131086, roughness: 0.6 })),
    (s.pearl = new D0({
      color: 14209216,
      roughness: 0.25,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      sheen: 0.5,
      sheenColor: new pt(12636384),
    })),
    (s.glassPink = new D0({
      color: 13148328,
      roughness: 0.05,
      transparent: !0,
      opacity: 0.35,
      depthWrite: !1,
      clearcoat: 1,
      envMapIntensity: 2.5,
      side: o,
    })),
    (s.gilt = t.get("brass_aged", {
      color: w("brass_aged") ? "#ffe8b0" : "#9a7a3a",
      rough: 0.38,
    })),
    (s.bulbDead = new S0({ color: 2762274, roughness: 0.5, metalness: 0.6 })),
    (s.fringe = e("linen_stained", "#a89c84", "#e0d6c0", { side: o })),
    (s.horn = new D0({ color: 2759184, roughness: 0.3, clearcoat: 0.8 })),
    (s.frosted = new D0({
      color: 14736588,
      roughness: 0.6,
      transparent: !0,
      opacity: 0.55,
      depthWrite: !1,
      side: o,
    })),
    (s.palePatch = new S0({
      color: new pt(0.0045, 0.011, 0.0095),
      roughness: 0.9,
      blending: le,
      transparent: !0,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    })),
    (s.grimeLine = new S0({
      color: 789e3,
      roughness: 1,
      transparent: !0,
      opacity: 0.3,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -3,
      polygonOffsetUnits: -3,
    })),
    (s.dollFace = t.has("bed_dollface")
      ? t.get("bed_dollface", { uv: 1 })
      : s.porcelain),
    (s.score = t.has("bed_score")
      ? t.get("bed_score", { uv: 1, side: o })
      : s.paper),
    (s.canvas = t.has("bed_painting")
      ? t.get("bed_painting", { uv: 1 })
      : null),
    !s.canvas)
  ) {
    const h = await M("./art/painting_crying_girl.png");
    s.canvas = new D0({
      map: h,
      roughness: 0.55,
      clearcoat: 0.3,
      clearcoatRoughness: 0.5,
    });
  }
  return (
    (s.stain = new Dt({
      color: 16777215,
      blending: Jt,
      premultipliedAlpha: !0,
      transparent: !0,
      depthWrite: !1,
      fog: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    })),
    t.has("bed_stain")
      ? (s.stain.map = t.get("bed_stain", { uv: 1 }).map)
      : s.stain.color.set(14207152),
    (s.tally = t.has("bed_tally") ? ce(t.get("bed_tally", { uv: 1 })) : null),
    (s.soot = t.has("bed_soot")
      ? new Dt({
          map: t.get("bed_soot", { uv: 1 }).map,
          blending: Jt,
          premultipliedAlpha: !0,
          transparent: !0,
          depthWrite: !1,
          fog: !1,
          side: $t,
        })
      : null),
    (s.cobweb = t.has("bed_cobweb")
      ? ce(t.get("bed_cobweb", { uv: 1, side: o }), { alphaTest: 0.02 })
      : null),
    s
  );
}
function ce(N, t = {}) {
  return Ct(N, {
    transparent: !0,
    depthWrite: !1,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
    ...t,
  });
}
