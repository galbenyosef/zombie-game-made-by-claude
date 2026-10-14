// assets/index-DaQlAVPp 03 — math
// Lines 35846-36260 of readable/assets/index-DaQlAVPp.pretty.js (statement-aligned).
class PostFX {
  constructor(e, t = {}) {
    ((this.renderer = e),
      (this.samples = t.samples ?? 4),
      (this.enabled = { ao: !0, bloom: !0, grade: !0 }),
      (this.exposure = 0.85),
      (this.exposureMul = 1),
      (this.bloom = 0.2),
      (this.ao = 1),
      (this.vignette = 0.42),
      (this.grain = 0.03),
      (this.ca = 0.0016),
      (this.sharpen = 0.35),
      (this.sat = 1),
      (this.contrast = 1.06),
      (this.lift = new P(0.002, 0.004, 0.008)),
      (this.gain = new P(1.03, 1, 0.95)),
      (this.fade = 0),
      (this.fadeColor = new ye(0, 0, 0)),
      (this.hurt = 0),
      (this.lid = 1),
      (this.blur = 0),
      (this.focus = 0),
      (this.aperture = 0.9),
      (this.aoRadius = 0.55),
      (this.aoIntensity = 1.35),
      (this.bloomThreshold = 1.5),
      (this.bloomKnee = 0.3),
      (this.bloomSpread = 0.62),
      (this.frame = 0),
      (this.trail = 0),
      (this.ghost = 0),
      (this.tunnel = 0),
      (this.warp = 0),
      (this.bleed = 0),
      (this._p = 0),
      (this.pulseDecay = 0.35),
      (this.clock = null),
      (this._lastNow = null),
      (this._ft = 0),
      (this._trailLive = !1),
      (this._trailFlip = !1),
      (this.trailThreshold = [0.16, 0.95]),
      (this.beamFog = 0),
      (this.beamLight = null),
      (this._vp = new Ve()),
      (this._prevVP = new Ve()),
      (this._pv = new ut()),
      (this.tri = new rt(new Je())));
    const n = this.tri.geometry;
    (n.setAttribute(
      "position",
      new ot(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3),
    ),
      n.setAttribute("uv", new ot(new Float32Array([0, 0, 2, 0, 0, 2]), 2)),
      (this.tri.frustumCulled = !1),
      (this.cam = new Yr()),
      (this.scene = new Vr()),
      this.scene.add(this.tri),
      (this.mats = {
        ao: gi(VM, {
          tDepth: { value: null },
          uInvProj: { value: new Ve() },
          uProj: { value: new Ve() },
          uTexel: { value: new j() },
          uRadius: { value: 0.55 },
          uBias: { value: 0.3 },
          uIntensity: { value: 1.3 },
          uFrame: { value: 0 },
        }),
        blur: gi(GM, {
          tSrc: { value: null },
          tDepth: { value: null },
          uDir: { value: new j() },
          uInvProj: { value: new Ve() },
        }),
        pre: gi(HM, {
          tSrc: { value: null },
          uTexel: { value: new j() },
          uThreshold: { value: 1 },
          uKnee: { value: 0.5 },
        }),
        down: gi(WM, { tSrc: { value: null }, uTexel: { value: new j() } }),
        up: gi(
          XM,
          {
            tSrc: { value: null },
            uTexel: { value: new j() },
            uWeight: { value: 1 },
          },
          { blending: $c, blendEquation: Kn, blendSrc: Za, blendDst: Za },
        ),
        grade: gi(ZM, {
          tScene: { value: null },
          tBloom: { value: null },
          tAO: { value: null },
          tDepth: { value: null },
          uRes: { value: new j(1, 1) },
          uInvProj: { value: new Ve() },
          uTime: { value: 0 },
          uExposure: { value: 1 },
          uBloom: { value: 0.5 },
          uAO: { value: 1 },
          uVignette: { value: 0.4 },
          uGrain: { value: 0.03 },
          uCA: { value: 0.0015 },
          uSharpen: { value: 0.3 },
          uSat: { value: 1 },
          uContrast: { value: 1 },
          uLift: { value: new P() },
          uGain: { value: new P(1, 1, 1) },
          uFade: { value: 0 },
          uFadeColor: { value: new ye() },
          uHurt: { value: 0 },
          uLid: { value: 1 },
          uBlur: { value: 0 },
          uFocus: { value: 0 },
          uAperture: { value: 1 },
          uDirt: { value: 0 },
          tTrail: { value: null },
          tSoft: { value: null },
          uTrail: { value: 0 },
          uGhost: { value: 0 },
          uGhostXf: { value: new P(0, 0, 1) },
          uPulse: { value: 0 },
          uTunnel: { value: 0 },
          uWarp: { value: 0 },
          uBreath: { value: new P(0, 0.5, 0.5) },
          uBleed: { value: 0 },
          uFxT: { value: 0 },
          uBeamK: { value: 0 },
          uBeamPos: { value: new P() },
          uBeamDir: { value: new P(0, 0, -1) },
          uBeamCos: { value: new j(0.9, 0.98) },
          uBeamCol: { value: new ye() },
          uViewY: { value: new ut(0, 1, 0, 0) },
        }),
        trail: gi(qM, {
          tScene: { value: null },
          tHist: { value: null },
          tDepth: { value: null },
          uHTexel: { value: new j() },
          uMotion: { value: new j() },
          uDecay: { value: new P(1, 1, 1) },
          uExposure: { value: 1 },
          uThresh: { value: new j(0.16, 0.95) },
          uFresh: { value: 1 },
        }),
        soft: gi(YM, { tSrc: { value: null }, uTexel: { value: new j() } }),
      }),
      (this.rt = {}),
      (this.mips = []),
      (this.size = new j(0, 0)),
      this.setSize(t.width ?? 1280, t.height ?? 720));
    try {
      (this._pass(this.mats.trail, this.rt.trailA),
        this._pass(this.mats.soft, this.rt.soft),
        this.renderer.setRenderTarget(null));
    } catch {}
  }
  get pulse() {
    return this._p;
  }
  set pulse(e) {
    this._p = Math.max(0, Math.min(1, +e || 0));
  }
  _mk(e, t, n = {}) {
    return new sn(e, t, {
      type: dn,
      format: Nt,
      minFilter: mt,
      magFilter: mt,
      depthBuffer: !1,
      ...n,
    });
  }
  setSize(e, t) {
    if (
      ((e = Math.max(2, Math.floor(e))),
      (t = Math.max(2, Math.floor(t))),
      this.size.x === e && this.size.y === t && this.rt.scene)
    )
      return;
    this.size.set(e, t);
    for (const l of Object.keys(this.rt)) this.rt[l]?.dispose();
    for (const l of this.mips) l.dispose();
    const n = new Ei(e, t, Qi);
    ((n.format = ti),
      (n.minFilter = bt),
      (n.magFilter = bt),
      (this.rt.scene = this._mk(e, t, {
        depthBuffer: !0,
        stencilBuffer: !0,
        depthTexture: n,
        samples: this.samples,
        resolveStencilBuffer: !1,
      })));
    const i = Math.max(2, e >> 1),
      s = Math.max(2, t >> 1);
    ((this.rt.ao = this._mk(i, s, { type: dn })),
      (this.rt.ao2 = this._mk(i, s, { type: dn })),
      (this.mips = []));
    let a = i,
      o = s;
    for (let l = 0; l < 6; l++)
      (this.mips.push(this._mk(Math.max(2, a), Math.max(2, o))),
        (a >>= 1),
        (o >>= 1));
    ((this.rt.bloomOut = this.mips[0]),
      (this.rt.trailA = this._mk(i, s)),
      (this.rt.trailB = this._mk(i, s)),
      (this.rt.soft = this._mk(Math.max(2, e >> 2), Math.max(2, t >> 2))),
      (this._trailLive = !1));
  }
  get sceneTarget() {
    return this.rt.scene;
  }
  _pass(e, t, n) {
    const i = this.renderer;
    ((this.tri.material = e),
      i.setRenderTarget(t),
      i.render(this.scene, this.cam));
  }
  render(e, t, n = 1 / 60) {
    const i = this.renderer;
    this.frame++;
    const s = this.mats,
      a = this.rt.scene,
      o = i.autoClear;
    if (
      (i.setRenderTarget(a),
      i.clear(),
      i.render(e, t),
      (i.autoClear = !1),
      s.ao.uniforms.uInvProj.value.copy(t.projectionMatrixInverse),
      this.enabled.ao &&
        this.ao > 0 &&
        ((s.ao.uniforms.tDepth.value = a.depthTexture),
        s.ao.uniforms.uProj.value.copy(t.projectionMatrix),
        s.ao.uniforms.uTexel.value.set(1 / a.width, 1 / a.height),
        (s.ao.uniforms.uRadius.value = this.aoRadius),
        (s.ao.uniforms.uIntensity.value = this.aoIntensity),
        (s.ao.uniforms.uFrame.value = 0),
        this._pass(s.ao, this.rt.ao),
        (s.blur.uniforms.tDepth.value = a.depthTexture),
        s.blur.uniforms.uInvProj.value.copy(t.projectionMatrixInverse),
        (s.blur.uniforms.tSrc.value = this.rt.ao.texture),
        s.blur.uniforms.uDir.value.set(1 / this.rt.ao.width, 0),
        this._pass(s.blur, this.rt.ao2),
        (s.blur.uniforms.tSrc.value = this.rt.ao2.texture),
        s.blur.uniforms.uDir.value.set(0, 1 / this.rt.ao.height),
        this._pass(s.blur, this.rt.ao)),
      this.enabled.bloom && this.bloom > 0)
    ) {
      ((s.pre.uniforms.tSrc.value = a.texture),
        s.pre.uniforms.uTexel.value.set(1 / a.width, 1 / a.height),
        (s.pre.uniforms.uThreshold.value = this.bloomThreshold),
        (s.pre.uniforms.uKnee.value = this.bloomKnee),
        this._pass(s.pre, this.mips[0]));
      for (let x = 1; x < this.mips.length; x++)
        ((s.down.uniforms.tSrc.value = this.mips[x - 1].texture),
          s.down.uniforms.uTexel.value.set(
            1 / this.mips[x - 1].width,
            1 / this.mips[x - 1].height,
          ),
          this._pass(s.down, this.mips[x]));
      for (let x = this.mips.length - 2; x >= 0; x--)
        ((s.up.uniforms.tSrc.value = this.mips[x + 1].texture),
          s.up.uniforms.uTexel.value.set(
            1 / this.mips[x + 1].width,
            1 / this.mips[x + 1].height,
          ),
          (s.up.uniforms.uWeight.value = this.bloomSpread),
          this._pass(s.up, this.mips[x]));
    }
    const l = s.grade.uniforms,
      c = this.exposure * this.exposureMul,
      h = this.clock ? this.clock() : performance.now() / 1e3;
    let d = this._lastNow == null ? 0 : h - this._lastNow;
    ((this._lastNow = h),
      (!(d >= 0) || d > 0.25) && (d = 0),
      (this._ft += d),
      this._p > 0 &&
        (this._p = Math.max(0, this._p - d / Math.max(0.05, this.pulseDecay))));
    const u = Math.pow(this._p, 1.3),
      f = Math.min(1, Math.max(0, this.trail));
    if (f > 0.001) {
      const x = s.trail.uniforms,
        m = 0.06 + 0.24 * f,
        g = this._trailFlip ? this.rt.trailB : this.rt.trailA,
        y = this._trailFlip ? this.rt.trailA : this.rt.trailB;
      ((x.tScene.value = a.texture),
        (x.tHist.value = g.texture),
        (x.tDepth.value = a.depthTexture));
      const w = Math.min(1, 0.85 * Math.sqrt(d * 60));
      (x.uHTexel.value.set(w / g.width, w / g.height),
        x.uDecay.value.set(
          Math.exp(-d / (m * 1.2)),
          Math.exp(-d / m),
          Math.exp(-d / (m * 0.78)),
        ),
        (x.uExposure.value = c),
        x.uThresh.value.set(this.trailThreshold[0], this.trailThreshold[1]));
      const _ = this._vp.multiplyMatrices(
        t.projectionMatrix,
        t.matrixWorldInverse,
      );
      let b = !this._trailLive;
      if (this._trailLive) {
        const S = t.matrixWorld.elements,
          E = this._pv
            .set(S[12] - S[8] * 50, S[13] - S[9] * 50, S[14] - S[10] * 50, 1)
            .applyMatrix4(this._prevVP);
        if (E.w > 0.01) {
          const v = 0.5 - ((E.x / E.w) * 0.5 + 0.5),
            T = 0.5 - ((E.y / E.w) * 0.5 + 0.5);
          Math.abs(v) > 0.2 || Math.abs(T) > 0.2
            ? (b = !0)
            : x.uMotion.value.set(v, T);
        } else b = !0;
      }
      (b && x.uMotion.value.set(0, 0),
        this._prevVP.copy(_),
        (x.uFresh.value = b ? 1 : 0),
        this._pass(s.trail, y),
        (this._trailFlip = !this._trailFlip),
        (this._trailLive = !0),
        (l.tTrail.value = y.texture),
        (l.uTrail.value = 0.18 + 0.32 * f));
    } else ((this._trailLive = !1), (l.uTrail.value = 0));
    if (
      ((u > 0.002 || this.tunnel > 0.001) &&
        ((s.soft.uniforms.tSrc.value = a.texture),
        s.soft.uniforms.uTexel.value.set(1 / a.width, 1 / a.height),
        this._pass(s.soft, this.rt.soft),
        (l.tSoft.value = this.rt.soft.texture)),
      (l.uPulse.value = u > 0.002 ? u : 0),
      (l.uTunnel.value = Math.max(0, Math.min(1, this.tunnel))),
      (l.uWarp.value = Math.max(0, Math.min(1, this.warp))),
      (l.uBleed.value = Math.max(0, Math.min(1, this.bleed))),
      (l.uFxT.value = this._ft % 4e3),
      (l.uGhost.value = Math.max(0, Math.min(1, this.ghost))),
      l.uGhost.value > 0)
    ) {
      const x = this._ft,
        m = 0.5 + 0.5 * Math.sin(x * 0.53) * Math.cos(x * 0.21 + 0.8),
        g = m * m * (3 - 2 * m),
        y = l.uGhost.value * (0.15 + 0.85 * g) * 0.026,
        w = 0.38 * Math.sin(x * 0.17 + 2);
      l.uGhostXf.value.set(
        Math.cos(w) * y,
        (Math.sin(w) * y * a.width) / a.height,
        1 + 0.008 * l.uGhost.value * Math.sin(x * 0.29),
      );
    }
    if (l.uWarp.value > 0) {
      const x = this._ft;
      l.uBreath.value.set(
        0.78 * Math.sin(x * 0.85) + 0.22 * Math.sin(x * 0.37 + 1.1),
        0.5 + 0.09 * Math.sin(x * 0.13),
        0.5 + 0.07 * Math.sin(x * 0.11 + 1.7),
      );
    }
    const p = this.beamLight;
    if (this.beamFog > 0 && p && p.intensity > 0.3) {
      const x = t.matrixWorldInverse,
        m = t.matrixWorld.elements;
      (l.uBeamPos.value.copy(p.position).applyMatrix4(x),
        l.uBeamDir.value
          .copy(p.target.position)
          .sub(p.position)
          .normalize()
          .transformDirection(x),
        l.uBeamCos.value.set(
          Math.cos(p.angle),
          Math.cos(p.angle * (1 - p.penumbra)),
        ),
        l.uBeamCol.value.copy(p.color).multiplyScalar(p.intensity * 1e-4),
        l.uViewY.value.set(m[1], m[5], m[9], m[13]),
        (l.uBeamK.value = this.beamFog));
    } else l.uBeamK.value = 0;
    ((l.tScene.value = a.texture),
      (l.tBloom.value = this.mips[0].texture),
      (l.tAO.value = this.rt.ao.texture),
      (l.tDepth.value = a.depthTexture),
      l.uRes.value.set(a.width, a.height),
      l.uInvProj.value.copy(t.projectionMatrixInverse),
      (l.uTime.value = (this.frame % 1e3) * 0.0173),
      (l.uExposure.value = c),
      (l.uBloom.value = this.enabled.bloom ? this.bloom : 0),
      (l.uAO.value = this.enabled.ao ? this.ao : 0),
      (l.uVignette.value = this.vignette),
      (l.uGrain.value = this.grain),
      (l.uCA.value = this.ca),
      (l.uSharpen.value = this.sharpen),
      (l.uSat.value = this.sat),
      (l.uContrast.value = this.contrast),
      l.uLift.value.copy(this.lift),
      l.uGain.value.copy(this.gain),
      (l.uFade.value = this.fade),
      l.uFadeColor.value.copy(this.fadeColor),
      (l.uHurt.value = this.hurt),
      (l.uLid.value = this.lid),
      (l.uBlur.value = this.blur),
      (l.uFocus.value = this.focus),
      (l.uAperture.value = this.aperture),
      this._pass(s.grade, null),
      (i.autoClear = o));
  }
  dispose() {
    for (const e of Object.keys(this.rt)) this.rt[e]?.dispose();
    for (const e of this.mips) e.dispose();
    for (const e of Object.values(this.mats)) e.dispose();
  }
}
