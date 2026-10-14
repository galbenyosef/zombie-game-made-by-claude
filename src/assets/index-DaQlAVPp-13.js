// assets/index-DaQlAVPp 13 — camera
// Lines 38988-39258 of readable/assets/index-DaQlAVPp.pretty.js (statement-aligned).
class wS {
  constructor(e, t = {}) {
    ((this.THREE = qc),
      (this.opts = t),
      (this.service = !!t.service),
      (this.canvas = e),
      (this.renderer = kM(e, { service: this.service })),
      (this.scene = new Vr()),
      (this.camera = new Ut(72, 16 / 9, 0.05, 1500)),
      (this.post = new JM(this.renderer, { samples: 4 })),
      (this.post.clock = () => this.time),
      (this.input = new $M()),
      this.input.attach(e),
      (this.world = { colliders: [], circles: [], time: 0 }),
      (this.player = new tS(this.camera, this.world)),
      (this.time = 0),
      (this.events = new SS()),
      (this.sched = new MS(this)),
      (this.camCtl = null),
      (this.paused = !1),
      (this.baseFov = 72),
      (this.frameMs = { step: 0, render: 0 }),
      (this.cameraOverride = !1),
      (this.pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        t.maxPixelRatio ?? 1.5,
      )),
      (this.flags = new Set()),
      (this.updaters = []),
      (this.prepares = []),
      (this.debug = TS(this)),
      this.resize(),
      window.addEventListener("resize", () => {
        this.service || this.requestResize();
      }),
      (this.ready = this.load(t.progress)));
  }
  async load(e = () => {}) {
    const t = performance.now();
    this.loadLog = [];
    const n = (h, d) => {
      (this.loadLog.push([
        +((performance.now() - t) / 1e3).toFixed(2),
        d || "",
      ]),
        e(h, d));
    };
    this.loadMark = (h) =>
      this.loadLog.push([+((performance.now() - t) / 1e3).toFixed(2), h]);
    const i = new URLSearchParams(location.search),
      s = i.get("solo");
    ((this.section = Vd[+i.get("section")] ? +i.get("section") : 1),
      n(0.05, "textures"),
      await Up(this.renderer, null, { lazy: !!s && this.section === 3 }),
      (this.mats = Od),
      (this.audio = new yS(this)),
      this.audio.loadManifest(),
      (this.interact = new bS(this)),
      this.updaters.push(() => this.interact.update()),
      (this.rooms = {}));
    const a = s === "lab" || s === "akane";
    (n(0.2, "building"),
      !a &&
        this.section === 1 &&
        ((this.lighting = xS(this)),
        (this.shell = mS(this)),
        this.world.colliders.push(...this.shell.colliders),
        this.updaters.push((h) => this.shell.update(h)),
        this.player.place(Zc.bedside[0], Zc.bedside[1], 0, 0)));
    const o = s ? s.split(",") : Vd[this.section],
      l = this.makeCtx();
    let c = 0;
    for (const h of o) {
      if ((n(0.3 + 0.6 * (c++ / o.length), h), !zd[h])) {
        console.warn("[game] unknown module", h);
        continue;
      }
      try {
        const u = await (await zd[h]()).build(l);
        ((this.rooms[h] = u || {}),
          u?.colliders?.length && this.world.colliders.push(...u.colliders),
          u?.circles?.length && this.world.circles.push(...u.circles),
          u?.navPlan && (this.navPlan = u.navPlan),
          u?.roomAt && (this.roomAt = u.roomAt),
          u?.surfaceAt && (this.surfaceAt = u.surfaceAt),
          u?.lighting && (this.lighting = u.lighting),
          u?.start &&
            ((this.startPoint = u.start),
            this.player.place(u.start[0], u.start[1], u.start[2] ?? 0, 0)));
        for (const f of u?.anim || []) this.updaters.push(f);
      } catch (d) {
        console.error("[game] module " + h + " failed:", d);
      }
    }
    return (
      s ||
        (await (
          await Gt(
            () => import("./gameplay-DnQwS-TC.js"),
            __vite__mapDeps([36, 26, 10, 13, 11, 2, 5]),
            import.meta.url,
          )
        ).installGameplay(this, n)),
      n(1, "ready"),
      this
    );
  }
  makeCtx() {
    return {
      game: this,
      THREE: qc,
      scene: this.scene,
      mats: Od,
      plan: pS,
      shell: this.shell,
      audio: this.audio,
      interact: this.interact,
      renderer: this.renderer,
      camera: this.camera,
      rng: (e = 1) => {
        let t = e | 0;
        return () => {
          ((t |= 0), (t = (t + 1831565813) | 0));
          let n = Math.imul(t ^ (t >>> 15), 1 | t);
          return (
            (n = (n + Math.imul(n ^ (n >>> 7), 61 | n)) ^ n),
            ((n ^ (n >>> 14)) >>> 0) / 4294967296
          );
        };
      },
      onFrame: (e) => this.updaters.push(e),
      beforeRender: (e) => this.prepares.push(e),
    };
  }
  resize(e = window.innerWidth, t = window.innerHeight, n = this.pixelRatio) {
    (this.renderer.setPixelRatio(n),
      this.renderer.setSize(e, t, !1),
      this.post.setSize(e * n, t * n),
      (this.camera.aspect = e / t),
      this.camera.updateProjectionMatrix(),
      (this.size = { w: e, h: t, pr: n }));
  }
  requestResize() {
    this._resizeWanted = !0;
  }
  step(e) {
    const t = performance.now();
    if (((e = e > 0 ? Math.min(e, 1 / 15) : 0), this.paused)) {
      (this.input.takeLook(), this.input.endFrame());
      return;
    }
    ((this.time += e),
      (this.world.time = this.time),
      this.sched.update(e),
      this.camCtl
        ? (this.input.takeLook(), this.camCtl(e))
        : this.cameraOverride ||
          this.player.update(e, this.input, this.input.locked || this.service));
    for (const n of this.updaters) n(e, this.time);
    if (this.audio) {
      const n = this._eul || (this._eul = new rn());
      (n.setFromQuaternion(this.camera.quaternion, "YXZ"),
        this.audio.setListener(this.camera.position, n.y),
        this.audio.update(e));
    }
    (this.input.endFrame(), (this.frameMs.step = performance.now() - t));
  }
  render() {
    const e = performance.now();
    if (
      ((this.frameNo = (this.frameNo || 0) + 1),
      this._resizeWanted && ((this._resizeWanted = !1), this.resize()),
      this.shell)
    ) {
      const t = this.flags.has("noceil");
      for (const n of this.shell.ceilings) n.visible = !t;
    }
    this.renderer.info.reset();
    for (const t of this.prepares) t(this.camera);
    (this.flags.has("nopost")
      ? (this.renderer.setRenderTarget(null),
        (this.renderer.toneMapping = Xo),
        this.renderer.render(this.scene, this.camera),
        (this.renderer.toneMapping = un))
      : ((this.post.enabled.ao = !this.flags.has("noao")),
        (this.post.enabled.bloom = !this.flags.has("nobloom")),
        this.post.render(this.scene, this.camera)),
      (this.frameMs.render = performance.now() - e));
  }
  perf() {
    const e = this.renderer.info;
    return {
      cpuStep: +this.frameMs.step.toFixed(2),
      cpuRender: +this.frameMs.render.toFixed(2),
      calls: e.render.calls,
      tris: e.render.triangles,
      geoms: e.memory.geometries,
      tex: e.memory.textures,
    };
  }
  frame(e) {
    (this.step(e), this.render());
  }
}
function TS(r) {
  const e = Math.PI / 180,
    t = {
      setCam({ x: n, y: i, z: s, yaw: a = 0, pitch: o = 0, fov: l }) {
        ((r.cameraOverride = !0),
          (r.player.frozen = !0),
          r.camera.position.set(n, i, s),
          (r.camera.rotation.order = "YXZ"),
          r.camera.rotation.set(o * e, a * e, 0),
          l && ((r.camera.fov = l), r.camera.updateProjectionMatrix()));
      },
      lookAtCam(n, i, s, a, o, l, c) {
        ((r.cameraOverride = !0),
          (r.player.frozen = !0),
          r.camera.position.set(n, i, s),
          r.camera.up.set(0, 1, 0),
          r.camera.lookAt(a, o, l),
          c && ((r.camera.fov = c), r.camera.updateProjectionMatrix()));
      },
      releaseCam() {
        ((r.cameraOverride = !1), (r.player.frozen = !1));
      },
      async gotoBeat(n) {
        r.beats?.goto && (await r.beats.goto(n));
      },
      async prepareShot(n, i, s) {
        (r.resize(i, s, 1),
          (r.flags = new Set((n.flags || "").split(",").filter(Boolean))),
          n.beat && (await t.gotoBeat(n.beat)));
        const a = +n.t || 0;
        for (let l = 0, c = Math.min(1800, Math.round(a * 30)); l < c; l++)
          (r.step(1 / 30),
            await Promise.resolve(),
            await Promise.resolve(),
            await Promise.resolve());
        const o = {};
        if (n.cam) {
          const [l, c, h, d = 0, u = 0] = n.cam.split(",").map(Number);
          (t.setCam({ x: l, y: c, z: h, yaw: d, pitch: u, fov: +n.fov || 72 }),
            (o.cam = [l, c, h, d, u]));
        } else if (n.look) {
          const [l, c, h] = n.look.split(",").map(Number),
            d = r.player.eyePos;
          t.lookAtCam(d.x, d.y, d.z, l, c, h, +n.fov || 72);
        } else
          n.fov && ((r.camera.fov = +n.fov), r.camera.updateProjectionMatrix());
        return (r.step(0), r.render(), o);
      },
      async advanceShot(n, i, s) {
        const a = Math.max(1, Math.min(600, Math.round(n * 30)));
        for (let o = 0; o < a; o++)
          (r.step(n / a),
            await Promise.resolve(),
            await Promise.resolve(),
            await Promise.resolve());
        if (r.cameraOverride && (i || s)) {
          const o = r.camera;
          if (((o.rotation.y += i * e), s)) {
            const l = o.rotation.y;
            ((o.position.x += -Math.sin(l) * s),
              (o.position.z += -Math.cos(l) * s));
          }
        }
      },
    };
  return t;
}
