// assets__akane-CN21eJhw 03 — userdata
// Lines 1069-1388 of readable/assets__akane-CN21eJhw.pretty.js (statement-aligned).
function po(e) {
  const t = (d) => (
      (d /= 255),
      d <= 0.04045 ? d / 12.92 : Math.pow((d + 0.055) / 1.055, 2.4)
    ),
    a = (d) => {
      if (Array.isArray(d)) return new e.Color(d[0], d[1], d[2]);
      const w = String(d).replace("#", ""),
        f = parseInt(
          w.length === 3
            ? w
                .split("")
                .map((C) => C + C)
                .join("")
            : w,
          16,
        );
      return new e.Color(t((f >> 16) & 255), t((f >> 8) & 255), t(f & 255));
    },
    o = {
      uKeyDir: { value: new e.Vector3(-0.5, 0.6, 0.6).normalize() },
      uKeyCol: { value: a("#fff4ea") },
      uRimDir: { value: new e.Vector3(1, 0.2, -0.3).normalize() },
      uRimCol: { value: a("#6f95e8") },
      uRimAmt: { value: 0.6 },
      uAmbCol: { value: a("#16338f") },
      uAmb: { value: 0.35 },
      uAmbGain: { value: new e.Color(1, 1, 1) },
      uShadowA: { value: null },
      uShadowB: { value: null },
      uShadowMat: { value: new e.Matrix4() },
      uShadowMatB: { value: new e.Matrix4() },
      uShadowOn: { value: 0 },
      uShadowTexel: { value: 0.000244140625 },
      uShadowSoft: { value: 0 },
      uPx: { value: 2.2 },
      uPxToView: { value: 0.001 },
      uExposure: { value: 1 },
      uJaw: { value: 0 },
      uTime: { value: 0 },
      uHairWind: { value: new e.Vector4(0, 0, 0, 0) },
      uCamH: { value: new e.Vector3(0, 0, 1) },
      uWarp: { value: 7 },
      uSkinTint: { value: 0.2 },
      uSkinWarm: { value: 0.22 },
    },
    r = [],
    i = () => e.UniformsUtils.clone(e.UniformsLib.fog),
    n = (d) => new e.ShaderMaterial({ fog: !0, clipping: !0, ...d });
  function s(d = {}) {
    const w = {};
    (d.detail && (w.DETAIL = ""),
      d.seam != null && (w.SEAM = ""),
      d.tartan && (w.TARTAN = ""),
      d.cloth && (w.CLOTH = ""),
      d.neck && (w.NECK = ""),
      d.beads && (w.BEADS = ""),
      d.rest && (w.REST = ""),
      d.skin && (w.SKIN = ""),
      d.litMax != null && (w.LITMAX = ""),
      d.coat && (w.COAT = ""));
    const f = {
        ...i(),
        ...o,
        uBase: { value: a(d.base ?? "#ffffff") },
        uShade: { value: a(d.shade ?? "#cdd3ec") },
        uDeep: { value: a(d.deep ?? d.shade ?? "#8890b0") },
        uRampT: { value: d.rampT ?? 0 },
        uRampSoft: { value: d.soft ?? 0.01 },
        uDeepT: { value: d.deepT ?? -0.55 },
        uDeepAmt: { value: d.deepAmt ?? 0 },
        uRim: { value: d.rim ?? 1 },
        uRimW: { value: d.rimW ?? 0.62 },
        uSpecCol: { value: a(d.specCol ?? "#ffffff") },
        uSpecAmt: { value: d.spec ?? 0 },
        uSpecT: { value: d.specT ?? 0.97 },
        uWet: { value: 0 },
        uWetSpec: { value: d.wetSpec ?? 0 },
        uWetMatte: { value: d.wetMatte ?? 0 },
        uShadowSel: { value: d.shadowSel ?? 0 },
        uDetail: { value: d.detail ?? null },
        uDetailRect: {
          value: new e.Vector4(...(d.detailRect ?? [0, 0, 1, 1])),
        },
        uInk: { value: a(d.ink ?? "#7d7f9c") },
        uPatch: { value: a(d.patch ?? "#f5e9e4") },
        uPatchShade: { value: a(d.patchShade ?? "#c9bfd9") },
        uTartan: { value: a(d.tartan ?? "#5a0a12") },
        uSeamY: { value: d.seam ?? 0 },
        uSeamCol: { value: a(d.seamCol ?? "#b9bfd8") },
        uSheen: { value: d.sheen ?? 0.6 },
        uFold: { value: d.fold ?? 0.35 },
        uJawY: { value: d.jawY ?? 1.36 },
        uJawCol: { value: a(d.jawCol ?? "#b98a9c") },
        uBeadScale: { value: d.beadScale ?? 6 },
        uLitMax: { value: d.litMax ?? 64 },
        uSkinBoost: { value: d.skinBoost ?? 0 },
        uCoat: { value: new e.Vector2(...(d.coat ?? [0.02, 0.3])) },
        uShadowBias: { value: d.shadowBias ?? 0 },
      },
      C = n({
        defines: w,
        uniforms: f,
        vertexShader: xe,
        fragmentShader: Xe + ro,
        side: d.side ?? e.FrontSide,
      });
    return ((C.userData.kind = "toon"), r.push(C), C);
  }
  function u(d) {
    const w = {
        ...i(),
        ...o,
        uBase: { value: a(d.base ?? Kt) },
        uShade: { value: a(d.shade ?? it) },
        uDeep: { value: a(d.shade ?? it) },
        uRampT: { value: 0 },
        uRampSoft: { value: d.soft ?? 0.012 },
        uDeepT: { value: -1 },
        uDeepAmt: { value: 0 },
        uRim: { value: d.rim ?? 1 },
        uSpecCol: { value: a("#ffffff") },
        uSpecAmt: { value: 0 },
        uSpecT: { value: 1 },
        uWet: { value: 0 },
        uWetSpec: { value: 1 },
        uWetMatte: { value: 0 },
        uShadowSel: { value: 1 },
        uFaceTex: { value: d.faceTex },
        uFaceData: { value: d.dataTex },
        uFaceRect: { value: new e.Vector4(...d.rect) },
        uHeadC: { value: new e.Vector3(...(d.headC ?? [0, 0, 0])) },
        uFaceT: { value: d.faceT ?? -0.12 },
        uKeyTint: { value: d.keyTint ?? 0.45 },
        uIrisR: { value: new e.Vector4(-28.5, -7, 11.5, 13.8) },
        uIrisL: { value: new e.Vector4(28.5, -7, 11.5, 13.8) },
        uPupil: { value: 0.45 },
        uIrisDetail: { value: 1 },
        uEyeReflect: { value: 0.5 },
        uEnvCube: { value: null },
        uEnvRect: { value: null },
        uEnvMode: { value: 0 },
        uEnvGain: { value: 1 },
        uHeadRot: { value: new e.Matrix3() },
        uTears: { value: 0 },
        uShadowBias: { value: d.shadowBias ?? 0 },
      },
      f = n({
        defines: { FACE: "", JAW: "" },
        uniforms: w,
        vertexShader: xe,
        fragmentShader: Xe + io,
      });
    return ((f.userData.kind = "face"), r.push(f), f);
  }
  function l(d = {}) {
    const w = {
        ...i(),
        ...o,
        uBase: { value: a(d.base ?? "#2a2433") },
        uShade: { value: a(d.shade ?? "#110e16") },
        uDeep: { value: a(d.deep ?? "#08060b") },
        uTip: { value: a(d.tip ?? "#c1121f") },
        uTipShade: { value: a(d.tipShade ?? "#6a0a13") },
        uTipHot: { value: a(d.tipHot ?? "#e5383b") },
        uCrim: { value: a(d.crim ?? "#c1121f") },
        uCrimShade: { value: a(d.crimShade ?? "#6a0a13") },
        uRingCol: { value: a(d.ring ?? "#4a4266") },
        uRingT: { value: d.ringT ?? 0.993 },
        uRingAmt: { value: d.ringAmt ?? 1 },
        uRampT: { value: d.rampT ?? 0.2 },
        uRampSoft: { value: 0.01 },
        uDeepT: { value: -0.45 },
        uDeepAmt: { value: 0.6 },
        uRim: { value: d.rim ?? 1.4 },
        uSpecCol: { value: a("#ffffff") },
        uSpecAmt: { value: 0 },
        uSpecT: { value: 1 },
        uWet: { value: 0 },
        uWetSpec: { value: 1 },
        uWetMatte: { value: 0 },
        uShadowSel: { value: 0 },
        uShadowBias: { value: d.shadowBias ?? 0.012 },
      },
      f = n({
        defines: { HAIR: "" },
        uniforms: w,
        vertexShader: xe,
        fragmentShader: Xe + lo,
        side: e.DoubleSide,
      });
    return ((f.userData.kind = "hair"), r.push(f), f);
  }
  const v = new Map();
  function g(d, w = {}) {
    const f =
      d +
      "|" +
      (w.w ?? 1) +
      "|" +
      (w.hair ? 1 : 0) +
      "|" +
      (w.zPush ?? 0) +
      "|" +
      (w.hullN ? 1 : 0) +
      "|" +
      (w.jaw ? 1 : 0);
    if (v.has(f)) return v.get(f);
    const C = {};
    (w.hair && (C.HAIR = ""), w.hullN && (C.OUTN = ""), w.jaw && (C.JAW = ""));
    const x = n({
      defines: C,
      uniforms: {
        ...i(),
        uPx: o.uPx,
        uPxToView: o.uPxToView,
        uKeyCol: o.uKeyCol,
        uAmbGain: o.uAmbGain,
        uExposure: o.uExposure,
        uJaw: o.uJaw,
        uHairWind: o.uHairWind,
        uTime: o.uTime,
        uW: { value: w.w ?? 1 },
        uZPush: { value: w.zPush ?? 0 },
        uLine: { value: a(d) },
      },
      vertexShader: co,
      fragmentShader: uo,
      side: e.BackSide,
    });
    return ((x.userData.kind = "outline"), v.set(f, x), r.push(x), x);
  }
  function m(d) {
    const w = n({
      defines: { PULL: "" },
      uniforms: {
        ...i(),
        uOverTex: { value: d.tex },
        uFaceRect: { value: new e.Vector4(...d.rect) },
        uOverA: { value: d.alpha ?? 0.6 },
        uPull: { value: d.pull ?? 0.03 },
        uExposure: o.uExposure,
        uKeyCol: o.uKeyCol,
        uAmbGain: o.uAmbGain,
        uCamH: o.uCamH,
        uWarp: o.uWarp,
      },
      vertexShader: xe,
      fragmentShader: ho,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
    });
    return (
      (w.stencilWrite = !0),
      (w.stencilRef = 1),
      (w.stencilFunc = e.EqualStencilFunc),
      (w.stencilFail = e.KeepStencilOp),
      (w.stencilZFail = e.KeepStencilOp),
      (w.stencilZPass = e.KeepStencilOp),
      r.push(w),
      w
    );
  }
  function y() {
    const d = n({
      uniforms: {
        ...i(),
        uKeyDir: o.uKeyDir,
        uKeyCol: o.uKeyCol,
        uRimCol: o.uRimCol,
        uRimAmt: o.uRimAmt,
        uAmbCol: o.uAmbCol,
        uAmbGain: o.uAmbGain,
        uExposure: o.uExposure,
      },
      vertexShader: fo,
      fragmentShader: mo,
      transparent: !0,
      depthWrite: !1,
    });
    return (r.push(d), d);
  }
  function k(d, w, f, C = {}) {
    const x = new e.Group(),
      p = new e.Mesh(d, w);
    if ((x.add(p), f)) {
      const M = new e.Mesh(
        d,
        g(f, {
          w: C.lineW ?? 1,
          hair: w.userData.kind === "hair",
          zPush: C.zPush,
          jaw: w.userData.kind === "face",
        }),
      );
      ((M.userData.hull = !0),
        (M.renderOrder = p.renderOrder),
        x.add(M),
        (p.userData.hullMesh = M));
    }
    return ((x.userData.mesh = p), x);
  }
  function G() {
    for (const d of r) d.dispose();
  }
  return {
    shared: o,
    toon: s,
    face: u,
    hair: l,
    outline: g,
    overlay: m,
    drops: y,
    withOutline: k,
    mats: r,
    dispose: G,
    C: a,
  };
}
