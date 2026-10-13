// assets__house-BEzMWI26 05 — math
// Lines 1261-1743 of readable/assets__house-BEzMWI26.pretty.js (statement-aligned).
function _t(s, o, e, { near: n = () => !0, S: t } = {}) {
  const u = nt(909),
    d = new l0();
  d.name = "house_lamp";
  const a = t,
    { x: h, z: c, y: m } = W0;
  a.add(
    p0(
      [
        [0, 0],
        [0.058, 0],
        [0.061, 0.004],
        [0.058, 0.011],
        [0.045, 0.016],
        [0.03, 0.024],
        [0.022, 0.034],
        [0.02, 0.046],
        [0.026, 0.052],
        [0.02, 0.058],
        [0, 0.058],
      ],
      h,
      m,
      c,
      { segs: 32, tile: 0.4 },
    ),
    o.brass,
    { cast: !1 },
  );
  const w = p0(
    [
      [0, 0.056],
      [0.03, 0.058],
      [0.052, 0.07],
      [0.064, 0.09],
      [0.066, 0.108],
      [0.06, 0.128],
      [0.045, 0.145],
      [0.03, 0.156],
      [0.024, 0.162],
      [0, 0.162],
    ],
    h,
    m,
    c,
    { segs: 36 },
  );
  {
    const i = w.attributes.position;
    for (let f = 0; f < i.count; f++) {
      const _ = i.getX(f) - h,
        F = i.getZ(f) - c;
      if (Math.hypot(_, F) < 1e-4) continue;
      const V = Math.atan2(F, _),
        l = 1 + 0.035 * Math.abs(Math.cos(V * 6));
      (i.setX(f, h + _ * l), i.setZ(f, c + F * l));
    }
    w.computeVertexNormals();
  }
  const M = new y0(w, o.lampGlass);
  ((M.name = "lamp:font"),
    (M.renderOrder = 3),
    (M.receiveShadow = !0),
    d.add(M));
  const p = p0(
      [
        [0, 0.06],
        [0.028, 0.061],
        [0.049, 0.072],
        [0.06, 0.09],
        [0.061, 0.1],
        [0, 0.1],
      ],
      h,
      m,
      c,
      { segs: 28 },
    ),
    C = new y0(p, o.kerosene);
  ((C.name = "lamp:oil"),
    (C.renderOrder = 2),
    (C.receiveShadow = !0),
    d.add(C),
    a.add(
      p0(
        [
          [0, 0.158],
          [0.027, 0.158],
          [0.029, 0.166],
          [0.026, 0.176],
          [0.03, 0.184],
          [0.03, 0.19],
          [0.022, 0.194],
          [0.02, 0.2],
          [0.034, 0.203],
          [0.036, 0.212],
          [0.033, 0.214],
          [0.03, 0.205],
          [0, 0.205],
        ],
        h,
        m,
        c,
        { segs: 28, tile: 0.3 },
      ),
      o.brass,
      { cast: !0 },
    ));
  for (let i = 0; i < 8; i++) {
    const f = (i / 8) * Math.PI * 2;
    a.add(
      G(
        h + Math.cos(f) * 0.031 - 0.002,
        m + 0.203,
        c + Math.sin(f) * 0.031 - 0.002,
        h + Math.cos(f) * 0.031 + 0.002,
        m + 0.222,
        c + Math.sin(f) * 0.031 + 0.002,
        0.001,
      ),
      o.brass,
      { cast: !1 },
    );
  }
  (a.add(
    L0([h, m + 0.19, c], [h + 0.052, m + 0.19, c + 0.004], 0.0022, 6),
    o.brass,
    { cast: !1 },
  ),
    a.add(
      p0(
        [
          [0, -0.004],
          [0.011, -0.004],
          [0.012, 0],
          [0.011, 0.004],
          [0, 0.004],
        ],
        h + 0.054,
        m + 0.19,
        c + 0.004,
        { segs: 16, rot: [0, 0, Math.PI / 2] },
      ),
      o.brass,
      { cast: !1 },
    ),
    a.add(
      G(h - 0.011, m + 0.2, c - 0.0015, h + 0.011, m + 0.216, c + 0.0015, 8e-4),
      o.char,
      { cast: !1 },
    ));
  const A = p0(
      [
        [0.029, 0.206],
        [0.031, 0.214],
        [0.043, 0.235],
        [0.05, 0.262],
        [0.047, 0.29],
        [0.034, 0.315],
        [0.026, 0.335],
        [0.025, 0.4],
        [0.027, 0.425],
        [0.029, 0.428],
      ],
      h,
      m,
      c,
      { segs: 36 },
    ),
    L = new y0(A, o.chimney);
  ((L.name = "lamp:chimney"),
    (L.renderOrder = 4),
    (L.receiveShadow = !0),
    d.add(L));
  const U = p0(
    [
      [0, 0],
      [0.004, 0.002],
      [0.0075, 0.007],
      [0.0088, 0.014],
      [0.008, 0.022],
      [0.0058, 0.032],
      [0.0028, 0.041],
      [0, 0.047],
    ],
    0,
    0,
    0,
    { segs: 16 },
  );
  U.scale(1.55, 1, 0.42);
  const R = new Float32Array(U.attributes.position.count * 3);
  for (let i = 0; i < U.attributes.position.count; i++) {
    const f = U.attributes.position.getY(i) / 0.047;
    let _;
    if (f < 0.1) _ = [0.3, 0.42, 1.2];
    else if (f < 0.45) {
      const F = (f - 0.1) / 0.35;
      _ = [0.3 + F * 5.2, 0.42 + F * 2.9, 1.2 - F * 0.62];
    } else {
      const F = (f - 0.45) / 0.55;
      _ = [5.5 - F * 2.4, 3.3 - F * 2.1, 0.58 - F * 0.45];
    }
    ((R[i * 3] = _[0]), (R[i * 3 + 1] = _[1]), (R[i * 3 + 2] = _[2]));
  }
  U.setAttribute("color", new Z0(R, 3));
  const I = new me({
      vertexColors: !0,
      toneMapped: !1,
      transparent: !0,
      opacity: 0.96,
      depthWrite: !1,
      fog: !1,
    }),
    W = new y0(U, I);
  ((W.name = "lamp:flame"),
    (W.renderOrder = 5),
    (W.frustumCulled = !1),
    W.position.set(h, m + 0.214, c),
    (W.rotation.y = 0.35),
    d.add(W));
  const o0 = new Fe(
    new Ae({
      map: Ee(),
      color: new M0(0.85, 0.42, 0.14),
      transparent: !0,
      depthWrite: !1,
      blending: Q0,
      toneMapped: !1,
      fog: !1,
      opacity: 0,
    }),
  );
  ((o0.name = "lamp:halo"),
    o0.scale.set(0.34, 0.34, 1),
    o0.position.set(h, m + 0.245, c),
    (o0.renderOrder = 6),
    d.add(o0));
  const D = new Ce(16756848, 0, 11, 2);
  ((D.name = "house_lamp"),
    D.position.set(h, q0, c),
    (D.castShadow = !0),
    D.shadow.mapSize.set(1024, 1024),
    (D.shadow.bias = -0.0015),
    (D.shadow.normalBias = 0.025),
    (D.shadow.radius = 3),
    (D.shadow.camera.near = 0.01),
    (D.shadow.camera.far = 11),
    (D.shadow.autoUpdate = !1),
    e.add(D));
  const Y = t,
    e0 = (v0.box.back + v0.front) / 2 + 0.02,
    T = (v0.box.z0 + v0.box.z1) / 2,
    S = s.rng(733);
  {
    const i = p0(
      [
        [0, 0.07],
        [0.28, 0.07],
        [0.33, 0.075],
        [0.3, 0.09],
        [0.18, 0.105],
        [0, 0.11],
      ],
      e0,
      0,
      T,
      { segs: 20, scale: [0.95, 1, 1.2] },
    );
    (r0(i, [0.35, 0.33, 0.31]), Y.add(i, o.stone, { cast: !1 }));
  }
  for (let i = 0; i < 3; i++) {
    const f = 0.5 + i * 0.9 + S() * 0.3,
      _ = 0.3 + S() * 0.12,
      F = [
        e0 - (Math.cos(f) * _) / 2,
        0.12 + i * 0.02,
        T - (Math.sin(f) * _) / 2,
      ],
      E = [
        e0 + (Math.cos(f) * _) / 2,
        0.11 + S() * 0.03,
        T + (Math.sin(f) * _) / 2,
      ];
    Y.add(L0(F, E, 0.035 - i * 0.004, 8), o.char, { cast: !1 });
  }
  const H = [];
  for (let i = 0; i < 16; i++) {
    const f = new tt(0.018 + S() * 0.018, 0),
      _ = f.attributes.position;
    for (let E = 0; E < _.count; E++) _.setY(E, _.getY(E) * 0.6);
    f.translate(
      e0 + (S() - 0.5) * 0.36,
      0.1 + S() * 0.03,
      T + (S() - 0.5) * 0.46,
    );
    const F = 0.4 + S() * 0.6;
    (r0(f, [2.2 * F, 0.5 * F, 0.08 * F]), H.push(f));
  }
  const K = new me({ vertexColors: !0, toneMapped: !1, fog: !1 }),
    x = new y0(St(H), K);
  ((x.name = "house:coals"), d.add(x));
  const v = new Ce(16734754, 0, 3.2, 2);
  ((v.name = "house_embers"),
    v.position.set(e0 + 0.05, 0.2, T),
    (v.castShadow = !1),
    e.add(v));
  const z = new Fe(
    new Ae({
      map: Ee(),
      color: new M0(1.6, 0.42, 0.08),
      transparent: !0,
      depthWrite: !1,
      blending: Q0,
      toneMapped: !1,
      fog: !1,
      opacity: 0,
    }),
  );
  ((z.name = "lamp:wick"),
    z.scale.set(0.022, 0.016, 1),
    z.position.set(h, m + 0.214, c),
    (z.renderOrder = 6),
    (z.visible = !1),
    d.add(z));
  const r = {
      on: !1,
      level: 0,
      goal: 0,
      ignite: -1,
      ember: 0.75,
      dying: -1,
      dyFrom: 1,
      wick: 0,
      shakeT: -1,
      shakeK: 0,
    },
    B = { lamp: 17, embers: 0.45 },
    y = new j(h, m + 0.214, c),
    a0 = (i, f, _ = 1) => {
      ((D.intensity = B.lamp * i * f), k0.uHB.value.set(h, q0, c, i * f));
      const F = i > 0.001 ? 0.55 + 0.45 * Math.min(1, i * 1.2) : 0;
      (W.scale.set(F * (0.94 + 0.08 * (1 - f)), F * (0.9 + 0.2 * f) * _, F),
        (W.visible = F > 0),
        (o0.material.opacity = Math.min(1, i) * (0.75 + 0.25 * f)),
        (o.chimney.emissiveIntensity = 0.5 * i * f),
        (o.glass.emissiveIntensity = 0.04 * i));
    };
  return (
    a0(0, 1),
    {
      group: d,
      anim: (i, f) => {
        if (r.ignite >= 0) {
          r.ignite += i;
          const l = r.ignite;
          ((r.goal =
            l < 0.15
              ? 0.25 + l * 3
              : l < 0.4
                ? 0.55 - (l - 0.15) * 0.6
                : Math.min(1, 0.4 + (l - 0.4) * 0.5)),
            l > 1.6 && ((r.ignite = -1), (r.goal = 1)));
        }
        let _ =
            1 +
            0.035 * Math.sin(f * 7.3) * Math.sin(f * 1.9 + 0.4) +
            0.03 * u.n2(f * 4.7, 1.1) +
            0.018 * Math.sin(f * 17.3 + u.n2(f, 3) * 2),
          F = 1,
          E = 0.05 * u.n2(f * 1.3, 7);
        if (r.dying >= 0) {
          r.dying += i;
          const l = Math.min(1, r.dying / 0.55);
          ((r.level =
            r.dyFrom *
            Math.pow(1 - l, 1.6) *
            (0.8 + 0.2 * Math.sin(r.dying * 57) * Math.sin(r.dying * 23 + 1))),
            (F = Math.max(0.15, 1 - l * 1.1)),
            (E +=
              0.45 *
              Math.sin(Math.min(1, l * 2.5) * Math.PI * 0.5) *
              (1 - l * 0.4)),
            (_ *= 0.85 + 0.15 * Math.sin(r.dying * 41)),
            l >= 1 &&
              ((r.dying = -1), (r.level = 0), (r.goal = 0), (r.wick = 1)));
        } else
          ((r.level +=
            (r.goal - r.level) * Math.min(1, i * (r.goal > r.level ? 7 : 5))),
            r.level < 0.002 && r.goal === 0 && (r.level = 0));
        if (r.shakeT >= 0) {
          r.shakeT += i;
          const l = r.shakeK * Math.exp(-r.shakeT * 5.5);
          ((E += 0.3 * l * Math.sin(r.shakeT * 37)),
            (_ *= 1 - 0.3 * l * Math.abs(Math.sin(r.shakeT * 29 + 0.5))),
            W.position.set(
              y.x + 0.003 * l * Math.sin(r.shakeT * 53),
              y.y,
              y.z + 0.003 * l * Math.cos(r.shakeT * 47),
            ),
            r.shakeT > 1.2 && ((r.shakeT = -1), W.position.copy(y)));
        }
        (a0(r.level, _, F),
          (W.rotation.z = E),
          r.wick > 0 &&
            ((r.wick = Math.max(0, r.wick - i / 3.2)),
            (z.material.opacity =
              Math.pow(r.wick, 1.5) * (0.85 + 0.15 * u.n2(f * 6, 2))),
            (z.visible = r.wick > 0)));
        const V =
          r.ember * (0.82 + 0.12 * Math.sin(f * 0.9) + 0.08 * u.n2(f * 0.7, 5));
        ((v.intensity = B.embers * V),
          K.color.setRGB(V, V, V),
          k0.uEM.value.set(v.position.x, v.position.y, v.position.z, V * 0.22),
          (r.frame = (r.frame || 0) + 1),
          n() && r.level > 0.01 && r.frame & 1 && (D.shadow.needsUpdate = !0));
      },
      lamp: {
        light: D,
        flame: W,
        group: d,
        get on() {
          return r.on;
        },
        get level() {
          return r.level;
        },
        light(i = !0) {
          ((i = !!i),
            i !== r.on &&
              ((r.on = i),
              i
                ? ((r.dying = -1),
                  (r.wick = 0),
                  (z.visible = !1),
                  (r.ignite = 0),
                  s.audio?.play?.("house_lamp_light", {
                    pos: [h, m + 0.2, c],
                    vol: 0.8,
                  }))
                : ((r.ignite = -1),
                  (r.goal = 0),
                  (r.dyFrom = Math.max(0.05, r.level)),
                  (r.dying = r.level > 0.02 ? 0 : -1),
                  s.audio?.play?.("house_lamp_out", {
                    pos: [h, m + 0.2, c],
                    vol: 0.6,
                  }))));
        },
        set(i) {
          ((r.on = !!i),
            (r.ignite = -1),
            (r.dying = -1),
            (r.wick = 0),
            (z.visible = !1),
            (r.goal = r.level = i ? 1 : 0));
        },
        shake(i = 1) {
          const f = r.shakeT >= 0 ? r.shakeK * Math.exp(-r.shakeT * 5.5) : 0;
          ((r.shakeT = 0),
            (r.shakeK = Math.min(1, Math.max(f, i))),
            r.level > 0.05 &&
              i > 0.3 &&
              s.audio?.play?.("house_lamp_rattle", {
                pos: [h, m + 0.25, c],
                vol: 0.35 * i,
              }));
        },
        pos: [h, q0, c],
      },
      embers: {
        light: v,
        set(i) {
          r.ember = i;
        },
        get level() {
          return r.ember;
        },
      },
      lights: { lamp: D, embers: v },
    }
  );
}
