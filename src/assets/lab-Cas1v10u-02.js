// assets/lab-Cas1v10u 02 — math
// Lines 63-652 of readable/assets/lab-Cas1v10u.pretty.js (statement-aligned).
async function buildLabScene(R) {
  const { game: p, scene: j, mats: v } = R;
  await v.ensure?.(["garden_moss", "concrete_grey", "street_asphalt"]);
  const g = {},
    P = Ae(R, {
      name: "heli",
      look: pe,
      torch: !1,
      views: g,
      onView: (o, t) => we(o, t),
    }),
    h = P.group,
    [s, , r] = O.pos,
    E = new ge({
      side: ye,
      depthWrite: !1,
      fog: !1,
      vertexShader:
        "varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",
      fragmentShader: `varying vec3 vD;
      float h3(vec3 p){ p = fract(p * 0.1031); p += dot(p, p.yzx + 33.33); return fract((p.x + p.y) * p.z); }
      void main(){
        float h = vD.y;
        vec3 top = vec3(0.010, 0.022, 0.058), mid = vec3(0.035, 0.052, 0.095), hor = vec3(0.09, 0.095, 0.12);
        vec3 c = mix(hor, mid, smoothstep(0.0, 0.18, h)); c = mix(c, top, smoothstep(0.18, 0.7, h));
        float east = max(0.0, dot(normalize(vec3(vD.x, 0.0, vD.z)), normalize(vec3(1.0, 0.0, -0.35))));
        c += vec3(0.07, 0.085, 0.11) * pow(east, 3.0) * smoothstep(0.35, 0.0, h);
        float fires = 0.5 + 0.5 * sin(atan(vD.x, vD.z) * 3.0 + 1.0) * sin(atan(vD.x, vD.z) * 7.0);
        c += vec3(0.32, 0.09, 0.02) * fires * smoothstep(0.16, 0.0, h) * smoothstep(-0.05, 0.02, h) * 0.55;
        vec3 cell = floor(vD * 260.0); float hs = h3(cell); vec3 fp = fract(vD * 260.0) - 0.5;
        float st = step(0.996, hs) * smoothstep(0.42, 0.1, length(fp)) * smoothstep(0.3, 0.7, h) * (0.15 + 0.35 * h3(cell + 7.0));
        c += vec3(st);
        if (h < 0.0) c = mix(hor * 0.5, vec3(0.008, 0.009, 0.011), smoothstep(0.0, -0.08, h));
        gl_FragColor = vec4(c, 1.0);
      }`,
    }),
    z = new T(new oe(900, 48, 24), E);
  ((z.name = "lab_sky"),
    (z.frustumCulled = !1),
    (z.renderOrder = -10),
    h.add(z));
  {
    const o = new ke(),
      t = new T(new oe(100, 32, 16), E);
    (o.add(t), P.rig.makeEnv("sky", o, 0.02), P.setLook(pe));
  }
  const C = v.get("garden_moss", { color: 6122058, uv: 2.2 }),
    k = new T(new se(700, 700, 1, 1).rotateX(-Math.PI / 2), C);
  (k.position.set(s, 0, r), (k.receiveShadow = !0), (k.name = "lab_lawn"));
  {
    const o = k.geometry.attributes.uv;
    for (let t = 0; t < o.count; t++)
      o.setXY(t, o.getX(t) * 700, o.getY(t) * 700);
  }
  h.add(k);
  {
    const o = document.createElement("canvas");
    o.width = o.height = 1024;
    const t = o.getContext("2d");
    ((t.fillStyle = "#5a5850"), t.fillRect(0, 0, 1024, 1024));
    for (let l = 0; l < 16; l++)
      for (let c = 0; c < 16; c++)
        ((t.fillStyle = `rgb(${84 + ((l * 7 + c * 13) % 9)}, ${82 + ((l * 5 + c * 3) % 8)}, ${74 + ((l + c) % 6)})`),
          t.fillRect(l * 64 + 1, c * 64 + 1, 62, 62));
    ((t.strokeStyle = "#d8d2c0"),
      (t.lineWidth = 26),
      t.beginPath(),
      t.arc(512, 512, 400, 0, Math.PI * 2),
      t.stroke(),
      (t.fillStyle = "#d8d2c0"),
      t.fillRect(340, 300, 70, 424),
      t.fillRect(614, 300, 70, 424),
      t.fillRect(340, 477, 344, 70),
      (t.globalAlpha = 0.25));
    for (let l = 0; l < 400; l++)
      ((t.fillStyle = l % 2 ? "#2a2620" : "#7a7468"),
        t.beginPath(),
        t.arc((l * 397) % 1024, (l * 211) % 1024, 2 + (l % 13), 0, 7),
        t.fill());
    const n = new q(o);
    ((n.colorSpace = $), (n.anisotropy = 8));
    const i = new T(
      new se(16, 16).rotateX(-Math.PI / 2),
      new B({ map: n, roughness: 0.85 }),
    );
    (i.position.set(s, 0.01, r),
      (i.rotation.y = O.yaw),
      (i.receiveShadow = !0),
      (i.name = "lab_pad"),
      h.add(i));
  }
  const G = [],
    Y = new B({ color: 3816510, roughness: 0.6, metalness: 0.6 }),
    _ = new B({
      color: 546,
      roughness: 0.5,
      emissive: new re(5, 5.2, 5.6),
      emissiveIntensity: 1,
      toneMapped: !1,
    });
  for (const [o, t, n] of [
    [-12, 14, !0],
    [14, 11, !1],
    [3, -16, !1],
  ]) {
    const i = new S(s + o, 0, r + t);
    for (let f = 0; f < 3; f++) {
      const u = f * 2.1,
        d = new T(new Me(0.03, 0.04, 5.4, 6), Y);
      (d.position.set(i.x + Math.cos(u) * 0.6, 2.6, i.z + Math.sin(u) * 0.6),
        d.lookAt(i.x, 5.4, i.z),
        d.rotateX(Math.PI / 2),
        h.add(d));
    }
    const l = new T(new ne(0.7, 0.45, 0.2), _);
    (l.position.set(i.x, 5.4, i.z), l.lookAt(s, 1, r), h.add(l));
    const c = new be(14871551, 420, 40, 0.62, 0.55, 2);
    (c.position.set(i.x, 5.4, i.z),
      c.target.position.set(s + o * 0.2, 0, r + t * 0.2),
      (c.castShadow = n),
      n &&
        (c.shadow.mapSize.set(2048, 2048),
        (c.shadow.bias = -4e-4),
        (c.shadow.normalBias = 0.03),
        (c.shadow.camera.near = 1),
        (c.shadow.camera.far = 40)),
      (c.name = "lab_flood"),
      h.add(c, c.target),
      G.push(c));
  }
  const M = Oe(),
    I = new B({
      color: 8223348,
      roughness: 0.82,
      map: M.map,
      emissiveMap: M.emissive,
      emissive: new re(1, 1, 1),
      emissiveIntensity: 1.6,
    }),
    b = new xe();
  ((b.name = "lab_towers"), h.add(b));
  let X = 11;
  const w = () => ((X = (X * 16807) % 2147483647), X / 2147483647),
    H = (o, t, n, i, l) => {
      const c = new ne(n, l, i);
      c.translate(0, l / 2, 0);
      const f = c.attributes.uv,
        u = c.attributes.position,
        d = c.attributes.normal;
      for (let D = 0; D < f.count; D++) {
        const ve = Math.abs(d.getX(D)) > 0.5;
        f.setXY(D, (ve ? u.getZ(D) : u.getX(D)) / 12, u.getY(D) / 12);
      }
      const W = new T(c, I);
      (W.position.set(o, 0, t),
        (W.castShadow = !0),
        (W.receiveShadow = !0),
        b.add(W));
    };
  for (let o = 0; o < 46; o++) {
    const t = w() * Math.PI * 2,
      n = 260 + w() * 340;
    H(
      s + Math.cos(t) * n,
      r + Math.sin(t) * n,
      18 + w() * 30,
      18 + w() * 30,
      40 + w() * 130,
    );
  }
  for (let o = 0; o < 7; o++)
    for (const t of [-1, 1]) {
      const n = r - 90 - o * 46,
        i = s + t * (26 + w() * 6),
        l = 50 + w() * 50;
      H(i + t * 11, n, 22, 30 + w() * 8, l);
    }
  const Z = [new ie(16738848, 900, 160, 2), new ie(16734744, 700, 140, 2)];
  (Z[0].position.set(s - 140, 30, r - 220),
    Z[1].position.set(s + 180, 25, r + 120));
  for (const o of Z)
    ((o.name = "lab_fire"), (o.userData.noActor = !0), h.add(o));
  const a = le(R, { rng: R.rng(5304), parent: h }),
    A = le(R, {
      rng: R.rng(5307),
      livery: "army",
      parent: h,
      name: "heli_army",
    }),
    Q = () => {
      (a.root.position.set(s, 0, r),
        a.root.quaternion.setFromAxisAngle(new S(0, 1, 0), O.yaw));
    },
    J = () => {
      (A.root.position.set(s + 30, 0, r + 26), A.root.rotation.set(0, 2.4, 0));
    };
  (Q(), J());
  const e = {
      beamFog: 0.012,
      mode: "parked",
      t: 0,
      ride: null,
      inp: {
        rpm: 0,
        collective: 0,
        cyclic: [0, 0],
        pedal: 0,
        speed: 0,
        damage: 0,
      },
      track: null,
      akane: null,
      tail: null,
    },
    me = [
      [s, 0, r],
      [s, 6, r - 4],
      [s - 2, 18, r - 30],
      [s + 2, 24, r - 80],
      [s - 4, 26, r - 140],
      [s + 3, 28, r - 200],
      [s - 2, 30, r - 260],
      [s + 6, 32, r - 320],
      [s + 30, 40, r - 380],
    ].map((o) => new S(...o)),
    N = new Se(me, !1, "centripetal"),
    U = N.getLength(),
    K = new Re(),
    F = new Pe(0, 0, 0, "YXZ"),
    y = new S(),
    L = new S(),
    ee = new S(0, 1, 0);
  let te = O.yaw;
  const fe = (o) => {
      const t = e.t,
        n = 4.5,
        i = t < n ? 0 : Math.min(26, (t - n) * 7);
      e.s = Math.min(U - 1, (e.s || 0) + i * o + (t < n ? o * 1.2 : 0));
      const l = e.s / U;
      (N.getPointAt(l, y), N.getPointAt(Math.min(1, l + 0.01), L));
      const c = L.sub(y).normalize(),
        f = Math.atan2(c.x, c.z);
      let u = f - te;
      for (; u > Math.PI;) u -= Math.PI * 2;
      for (; u < -Math.PI;) u += Math.PI * 2;
      const d = o > 0 ? u / o : 0;
      te = f;
      const W = Math.max(-0.5, Math.min(0.5, (-d * i) / 9.8));
      ((e.bank = (e.bank ?? 0) + (W - (e.bank ?? 0)) * Math.min(1, o * 2)),
        F.set(
          i * 0.004 + Math.sin(t * 0.7) * 0.02,
          f,
          e.bank + Math.sin(t * 1.1) * 0.03,
          "YXZ",
        ),
        K.setFromEuler(F),
        a.placeMast(y.add(new S(0, 3.22, 0)), K),
        e.sweep &&
          a.aim([
            s - 30 - 2 * Math.sin(t * 0.7),
            y.y - 6 + 4 * Math.sin(t * 0.9),
            y.z - 26 - 8 * Math.sin(t * 0.5),
          ]),
        (e.inp.speed = i),
        (e.inp.rpm = 1),
        (e.inp.collective = t < n ? 0.3 + 0.5 * (t / n) : 0.62),
        (e.inp.cyclic = [e.bank * -0.6, 0.15 + i * 0.006]));
    },
    de = (o) => {
      const t = e.t;
      (F.set(
        0.03 + Math.sin(t * 0.6) * 0.02,
        O.yaw + Math.sin(t * 0.23) * 0.2,
        Math.sin(t * 0.8) * 0.03,
        "YXZ",
      ),
        K.setFromEuler(F),
        a.placeMast(
          y.set(
            s + Math.sin(t * 0.3) * 1.5,
            24 + Math.sin(t * 0.5) * 0.6,
            r + Math.cos(t * 0.27) * 1.2,
          ),
          K,
        ),
        (e.inp.rpm = 1),
        (e.inp.speed = 2),
        (e.inp.collective = 0.55));
    },
    he = (o) => {
      if (((e.t += o), e.mode === "flight")) fe(o);
      else if (e.mode === "hover") de();
      else if (e.mode === "startup")
        ((e.inp.rpm = null), (e.inp.collective = 0.08));
      else if (e.mode === "spin") {
        const t = e.t;
        ((e.inp.rpm = 1),
          (e.inp.speed = 18),
          (e.inp.damage = 0.8),
          t > 0.4 &&
            !a.broken &&
            ((e.tail = a.breakTail()),
            (e.tailV = new S(-6, 3, 8)),
            (e.tailW = new S(3, 9, 2))),
          F.set(
            0.1,
            O.yaw + Math.max(0, t - 0.4) * Math.max(0, t - 0.4) * 2.2,
            0.15 * Math.sin(t * 3),
            "YXZ",
          ),
          K.setFromEuler(F),
          a.placeMast(y.set(s + 40, 22 - t * t * 0.5, r + 40), K),
          e.tail &&
            ((e.tailV.y -= 9.8 * o),
            e.tail.position.addScaledVector(e.tailV, o),
            (e.tail.rotation.x += e.tailW.x * o),
            (e.tail.rotation.y += e.tailW.y * o),
            (e.tail.rotation.z += e.tailW.z * o)));
      }
      (e.crackGrow && a.crack(Math.min(1, e.t / 6)),
        a.update(o, e.inp),
        A.update(o, { rpm: 0, speed: 0 }),
        e.ride
          ? a.carryCamera(p.camera, e.ride[0] * V, e.ride[1] * V)
          : e.chase
            ? (a.root.updateMatrixWorld(!0),
              L.set(...e.chase).applyMatrix4(a.root.matrixWorld),
              p.camera.position.lerp(L, e.t < 0.05 ? 1 : 1 - Math.exp(-o * 4)),
              a.body.getWorldPosition(y),
              (y.y += 1.6),
              p.camera.lookAt(y))
            : e.track &&
              (a.body.getWorldPosition(L), (L.y += 1.4), p.camera.lookAt(L)),
        e.akane &&
          e.akane.setPose(
            {
              guitar: 0,
              arms: "down",
              sit: 1,
              seat: a.rider.seat,
              blush: 0.1,
              breathe: e.t * 0.25,
              lean: 5,
            },
            e.t,
          ));
    },
    ae = (o, t, n) =>
      y
        .set(o, t, n)
        .applyAxisAngle(ee, O.yaw)
        .add(new S(s, 0, r))
        .clone(),
    x = (o, t, n, i, l, c) => {
      const f = ae(o, t, n),
        d = ae(i, l, c).clone().sub(f);
      return [
        f.x,
        f.y,
        f.z,
        Math.atan2(-d.x, -d.z) / V,
        Math.atan2(d.y, Math.hypot(d.x, d.z)) / V,
      ];
    },
    ue = () => {
      ((e.t = 0),
        (e.s = 0),
        (e.ride = null),
        (e.track = null),
        (e.chase = null),
        (e.crackGrow = !1),
        (e.mode = "parked"),
        (e.bank = 0),
        (e.sweep = !1),
        (e.inp = {
          rpm: 0,
          collective: 0,
          cyclic: [0, 0],
          pedal: 0,
          speed: 0,
          damage: 0,
        }),
        Q(),
        J(),
        a.stop(!0),
        a.power(!0, { instant: !0 }),
        a.beacon(!0),
        (a.searchK = 0),
        (a.landingK = 0),
        a.aim(null),
        a.crack(0),
        a.smoke(0),
        a.fire(0),
        a.warn([]),
        a.shake(0));
      for (const o of Object.values(a.doors)) o.open(0, 0.01);
    },
    m = (o, t, n = {}) => ({ ride: [o, t], fov: 75, ...n });
  Object.assign(g, {
    ext34: { cam: x(5.2, 1.7, 7.2, 0, 1.4, 0.4), fov: 55 },
    side: { cam: x(7.5, 1.5, -1.2, 0, 1.5, -1.2), fov: 60 },
    atDoor: { cam: x(2.1, 1.62, 1, 0.6, 1.25, 2.2), fov: 70 },
    approach: { cam: x(30, 1.62, 2, 0, 1.6, -1), fov: 70 },
    doorOpen: {
      cam: x(3.2, 1.6, 2.6, 0.2, 1.3, 1.2),
      fov: 60,
      setup: () => {
        (a.doors.left.open(1, 0.01), a.doors.rearL.open(1, 0.01));
      },
      t: 1.2,
    },
    below: {
      pos: [s + 9, 1.4, r + 12],
      fov: 70,
      setup: () => {
        ((e.mode = "hover"),
          (a.searchK = 1),
          (a.landingK = 1),
          a.aim([s + 9, 0, r + 12]));
      },
      t: 2,
    },
    tailbreak: {
      pos: [s + 26, 20, r + 54],
      fov: 50,
      setup: () => {
        ((e.mode = "spin"), (a.searchK = 1));
      },
      t: 0.6,
    },
    tailclose: {
      pos: [s + 37, 23.5, r + 46.5],
      fov: 50,
      setup: () => {
        ((e.mode = "spin"), (a.searchK = 1));
      },
      t: 0.75,
    },
    smokeOut: {
      fov: 60,
      setup: () => {
        ((e.mode = "flight"),
          a.smoke(0.9),
          a.fire(0.7),
          (a.searchK = 1),
          (e.sweep = !0),
          (e.chase = [9, 4, -16]));
      },
      t: 9,
    },
    army: {
      cam: x(5.2, 1.7, 7.2, 0, 1.4, 0.4),
      fov: 55,
      setup: () => {
        (a.root.position.set(s + 60, 0, r + 60),
          A.root.position.set(s, 0, r),
          A.root.quaternion.copy(a.root.quaternion.setFromAxisAngle(ee, O.yaw)),
          A.power(!0, { instant: !0 }),
          A.beacon(!0));
      },
    },
    rear34: { cam: x(-6.5, 2.2, -9.5, 0, 1.6, -2.5), fov: 55 },
    cabin: { cam: x(0.25, 1.62, 0.55, -0.15, 1.1, -2), fov: 78 },
    cabinFwd: { cam: x(-0.1, 1.7, -1.6, 0.05, 1.35, 2.4), fov: 78 },
    startup: {
      cam: x(7.5, 7.2, 9.5, 0, 2.2, -0.8),
      fov: 62,
      setup: () => {
        ((e.mode = "startup"), a.start(1), a.start(2), a.throttle(1));
      },
    },
    fwd: m(0, -6),
    chin: m(-12, -58),
    up: m(-8, 62),
    upSpin: m(-8, 62, {
      setup: () => {
        ((e.mode = "startup"), a.start(1), a.start(2), a.throttle(1));
      },
      t: 5.5,
    }),
    upFull: m(-8, 62, {
      setup: () => {
        ((e.inp.rpm = 1), (e.inp.collective = 0.4));
      },
      t: 1.5,
    }),
    right: m(-62, -14, { akane: !0 }),
    panel: m(-28, -26),
    left: m(72, -8),
    back: m(168, -22),
    flight: m(-4, -8, {
      setup: () => {
        ((e.mode = "flight"), (a.searchK = 1), (e.sweep = !0));
      },
      t: 9,
    }),
    flightLeft: m(40, -12, {
      setup: () => {
        ((e.mode = "flight"), (a.searchK = 1), (e.sweep = !0));
      },
      t: 11,
    }),
    cracks: m(-6, -4, {
      setup: () => {
        ((e.mode = "flight"),
          (a.searchK = 1),
          (e.sweep = !0),
          a.crack(0.85),
          a.warn(["ENG 1 FIRE", "TAIL ROTOR", "LOW ROTOR RPM", "XMSN OIL"]),
          a.smoke(0.8),
          a.fire(0.6),
          (e.inp.damage = 0.7));
      },
      t: 9,
    }),
    boot: m(-24, -24, {
      fov: 60,
      setup: () => {
        (a.power(!1, { instant: !0 }), a.power(!0));
      },
      t: 1.1,
    }),
    crackGrow: m(-4, -2, {
      fov: 60,
      setup: () => {
        ((e.mode = "hover"), (e.crackGrow = !0), (a.searchK = 1));
      },
    }),
    warnPanel: m(-22, -30, {
      setup: () => {
        ((e.inp.rpm = 0.9),
          a.warn(["ENG 1 FIRE", "TAIL ROTOR", "LOW ROTOR RPM", "XMSN OIL"]));
      },
      fov: 50,
      t: 1.2,
    }),
  });
  for (const o of Object.values(g)) ((o.secs = o.t || 0), (o.t = 0));
  async function we(o, t) {
    if (
      (ue(),
      (p.cameraOverride = !0),
      (p.player.frozen = !0),
      t.setup && t.setup(),
      p.post &&
        ((p.post.beamLight = a.searchK > 0 ? a.searchlight : null),
        (p.post.beamFog = a.searchK > 0 ? e.beamFog : 0)),
      (e.ride = t.ride || null),
      t.akane && !e.akane)
    )
      try {
        const { createAkane: n } = await ze(
          async () => {
            const { createAkane: i } = await import("./akane-CN21eJhw.js").then(
              (l) => l.d,
            );
            return { createAkane: i };
          },
          __vite__mapDeps([0, 1, 2, 3, 4]),
          import.meta.url,
        );
        ((e.akane = n(p, {})),
          a.rider.root.add(e.akane.root),
          R.beforeRender((i) => e.akane?.prepare(i)));
      } catch (n) {
        console.warn("[heli lab] no Akane:", n);
      }
    (e.akane && (e.akane.root.visible = !!t.akane),
      t.pos &&
        (p.camera.position.set(...t.pos),
        (p.camera.fov = t.fov || 60),
        p.camera.updateProjectionMatrix(),
        (e.track = !t.at),
        t.at && p.camera.lookAt(...t.at)),
      e.chase &&
        ((p.camera.fov = t.fov || 60), p.camera.updateProjectionMatrix()));
    for (let n = 0; n < Math.round(t.secs * 30); n++) p.step(1 / 30);
    t.ride &&
      ((p.camera.fov = t.fov || 75),
      p.camera.updateProjectionMatrix(),
      a.carryCamera(p.camera, t.ride[0] * V, t.ride[1] * V));
  }
  return {
    group: h,
    colliders: [...a.colliders(!0)],
    anim: [...P.anim, he],
    props: { heli: a, army: A, lab: P, L: e, floods: G },
    start: [s + 4, r + 9],
  };
}
