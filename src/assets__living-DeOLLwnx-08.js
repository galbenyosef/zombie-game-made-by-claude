// assets__living-DeOLLwnx 08 — math
// Lines 2385-2727 of readable/assets__living-DeOLLwnx.pretty.js (statement-aligned).
function ge(a, t, r, e, o, s) {
  const n = new y0();
  ((n.name = "phone"), t.add(n));
  const l = a0(a, "#15100e");
  r.frame(F(o[0], o[1], o[2], i0 * 0.62));
  {
    const S = _(0.19, 0.085, 0.21, { r: 0.028, m: 3 }),
      h = S.attributes.position;
    for (let y = 0; y < h.count; y++) {
      const C = h.getY(y),
        z = h.getZ(y);
      C > 0 && h.setY(y, C - Math.max(0, z + 0.02) * 0.35);
    }
    (S.computeVertexNormals(),
      S.translate(0, 0.0425, 0),
      r.part(S, l, { grain: "x" }));
  }
  for (const S of [-1, 1])
    r.part(
      _(0.03, 0.03, 0.05, { r: 0.008 }).translate(S * 0.07, 0.09, -0.05),
      l,
      { cast: !1 },
    );
  r.part(
    j(
      [
        [0, 0],
        [0.055, 0],
        [0.056, 0.004],
        [0, 0.004],
      ],
      28,
      !1,
    ),
    I0(a, "#bdb7aa"),
    { grain: "y", cast: !1, local: F(0, 0.07, 0.055, 0, -0.33) },
  );
  for (let S = 0; S < 10; S++) {
    const h = -0.6 + (S / 10) * i0 * 1.65;
    r.part(
      new Z0(0.0085, 0.0085, 0.003, 10).translate(
        Math.cos(h) * 0.038,
        0.0055,
        Math.sin(h) * 0.038,
      ),
      a0(a, "#0a0a0a"),
      { cast: !1, local: F(0, 0.07, 0.055, 0, -0.33) },
    );
  }
  const p = new y0();
  p.name = "receiver";
  const d = new st(a.mats, e);
  (d.frame(new b0()),
    d.part(
      T0(
        [
          [-0.09, 0, 0],
          [-0.06, 0.018, 0],
          [0.06, 0.018, 0],
          [0.09, 0, 0],
        ],
        0.012,
        16,
        8,
      ),
      l,
      { grain: "x" },
    ));
  for (const S of [-1, 1])
    d.part(
      j(
        [
          [0, 0],
          [0.028, 0],
          [0.03, 0.012],
          [0.02, 0.028],
          [0.013, 0.03],
        ],
        18,
      )
        .rotateX(i0)
        .translate(S * 0.09, 0.005, 0),
      l,
      { grain: "y" },
    );
  d.flush(p, "receiver");
  const c = new y0();
  (c.position.set(s[0] + 0.02, s[1] + 0.2, s[2]),
    p.position.set(0, -0.2, 0),
    p.rotation.set(0.1, 0.4, i0 / 2 - 0.15),
    c.add(p),
    n.add(c));
  {
    const S = new f0(o[0] - 0.01, o[1] + 0.025, o[2] - 0.07),
      h = new f0(s[0] + 0.01, s[1] + 0.1, s[2] + 0.004),
      y = s[2] + 0.035,
      C = new f0((S.x + h.x) / 2 + 0.04, o[1] + 0.012, (S.z + y) / 2),
      z = new f0(h.x + 0.01, o[1] + 0.01, y + 0.004),
      w = new f0(h.x + 0.012, o[1] - 0.04, y - 0.012),
      f = new it([S, C, z, w, h]),
      i = [],
      m = 420,
      M = 44,
      v = new f0(),
      T = new f0(),
      I = new f0(),
      A = new f0(0, 1, 0);
    for (let D = 0; D <= m; D++) {
      const q = D / m,
        G = f.getPointAt(q);
      (f.getTangentAt(q, v),
        T.crossVectors(v, A),
        T.lengthSq() < 1e-6 && T.set(1, 0, 0),
        T.normalize(),
        I.crossVectors(v, T).normalize());
      const J = q * M * i0 * 2;
      i.push(
        G.clone()
          .addScaledVector(T, Math.cos(J) * 0.007)
          .addScaledVector(I, Math.sin(J) * 0.007),
      );
    }
    r.frame(new b0()).part(new zt(new it(i), m * 2, 0.0022, 4), l, {
      uv: "keep",
      cast: !1,
    });
  }
  let u = 0.05;
  return {
    api: {
      group: n,
      receiver: p,
      pivot: c,
      sway(S = 0.12) {
        u = Math.max(u, S);
      },
    },
    anim: (S, h) => {
      ((u = Math.max(0.02, u * Math.exp(-S * 0.6))),
        (c.rotation.x = Math.sin(h * 2.4) * u * 0.5),
        (c.rotation.z = Math.sin(h * 2.4 + 1.2) * u * 0.25));
    },
  };
}
function be(a, t, r, e) {
  const o = new y0();
  ((o.name = "lamp"), t.add(o));
  const [s, , n] = e;
  r.frame(F(s, 0, n, 0));
  const l = a.mats.get("brass_aged", { color: "#5e4a2c", rough: 0.62 });
  (r.part(
    j(
      [
        [0.16, 0],
        [0.165, 0.012],
        [0.15, 0.03],
        [0.07, 0.05],
        [0.03, 0.08],
        [0.018, 0.1],
      ],
      32,
    ),
    l,
    { grain: "y" },
  ),
    r.part(
      j(
        [
          [0.012, 0.09],
          [0.012, 1.3],
          [0.02, 1.32],
          [0.02, 1.36],
          [0.01, 1.38],
        ],
        12,
      ),
      "brass_aged",
      { grain: "y" },
    ),
    r.part(
      j(
        [
          [0.03, 1.36],
          [0.034, 1.38],
          [0.02, 1.4],
        ],
        12,
      ),
      "brass_aged",
      { grain: "y", cast: !1 },
    ));
  for (let w = 0; w < 3; w++) {
    const f = (w / 3) * i0 * 2 + 0.3;
    r.part(
      T0(
        [
          [0, 1.46, 0],
          [Math.cos(f) * 0.15, 1.675, Math.sin(f) * 0.15],
        ],
        0.003,
        2,
        5,
      ),
      "brass_aged",
      { cast: !1 },
    );
  }
  r.part(
    j(
      [
        [0.016, 1.38],
        [0.018, 1.43],
        [0.014, 1.45],
      ],
      12,
    ),
    "brass_aged",
    { cast: !1 },
  );
  const p = new U0({ color: new H0().setRGB(6, 3.6, 1.6), toneMapped: !1 }),
    d = new u0(
      j(
        [
          [0.012, 1.445],
          [0.028, 1.47],
          [0.03, 1.49],
          [0.02, 1.515],
          [0, 1.525],
        ],
        16,
      ),
      p,
    );
  (d.position.set(s, 0, n), (d.name = "bulb"), o.add(d));
  const c = Y0(256, 128, (w, f, i) => {
      ((w.fillStyle = "#d8c8a0"), w.fillRect(0, 0, f, i));
      for (let m = 0; m < 36; m++) {
        const M = (m / 36) * f,
          v = w.createLinearGradient(M, 0, M + f / 36, 0);
        (v.addColorStop(0, "rgba(90,70,40,0.35)"),
          v.addColorStop(0.5, "rgba(255,245,220,0.15)"),
          v.addColorStop(1, "rgba(90,70,40,0.1)"),
          (w.fillStyle = v),
          w.fillRect(M, 0, f / 36, i));
      }
      ((w.fillStyle = "#6a4a2a"),
        w.fillRect(0, 0, f, 9),
        w.fillRect(0, i - 11, f, 11),
        (w.fillStyle = "rgba(160,110,50,0.35)"),
        w.beginPath(),
        w.ellipse(f * 0.7, i * 0.6, 26, 18, 0.3, 0, Math.PI * 2),
        w.fill(),
        (w.strokeStyle = "rgba(120,80,30,0.45)"),
        (w.lineWidth = 2),
        w.stroke());
    }),
    u = new C0({
      color: 16777215,
      map: c,
      emissiveMap: c,
      roughness: 0.9,
      side: N0,
      emissive: new H0(1, 1, 1),
    }),
    b = new Z0(0.15, 0.25, 0.32, 72, 6, !0);
  {
    const w = b.attributes.position;
    for (let f = 0; f < w.count; f++) {
      const i = w.getX(f),
        m = w.getZ(f),
        M = Math.atan2(m, i),
        v = Math.hypot(i, m),
        T = 1 + 0.035 * Math.abs(Math.sin(M * 18));
      (w.setX(f, Math.cos(M) * v * T), w.setZ(f, Math.sin(M) * v * T));
    }
    b.computeVertexNormals();
  }
  const k = new u0(b, u);
  (k.position.set(s, 1.52, n),
    (k.rotation.z = 0.035),
    (k.name = "shade"),
    (k.castShadow = !1),
    (k.receiveShadow = !1),
    o.add(k),
    r.part(
      T0(
        [
          [0.05, 1.42, 0],
          [0.052, 1.3, 0.004],
          [0.05, 1.22, 0],
        ],
        0.0015,
        6,
        4,
      ),
      "brass_aged",
      { cast: !1 },
    ));
  const S = new tt(16756848, 30, 9, 1.18, 0.75, 2);
  (S.position.set(s, 1.49, n),
    S.target.position.set(s, 0, n),
    (S.name = "lamp_light"));
  const h = new tt(16754784, 2, 4.5, 0.62, 1, 2);
  (h.position.set(s, 1.5, n),
    h.target.position.set(s, 3, n),
    (h.name = "lamp_up"),
    (h.userData.noActor = !0),
    o.add(S, S.target, h, h.target));
  const y = { on: 1, level: 30, flick: 0 },
    C = {
      group: o,
      light: S,
      bulb: d,
      shade: k,
      get level() {
        return y.level;
      },
      set level(w) {
        y.level = w;
      },
      setOn(w) {
        y.on = w ? 1 : 0;
      },
      flicker(w = 0.6) {
        y.flick = Math.max(y.flick, w);
      },
    },
    z = (w, f) => {
      y.flick = Math.max(0, y.flick - w * 0.7);
      let i = 1 + 0.03 * Math.sin(f * 0.7) + 0.015 * Math.sin(f * 5.3);
      if (y.flick > 0) {
        const m = Math.sin(f * 43) * Math.sin(f * 17.3);
        i *= 1 - y.flick * (m > 0.2 ? 0.85 : 0.1);
      }
      ((i *= y.on),
        (S.intensity = y.level * i),
        (h.intensity = y.level * 0.055 * i),
        p.color.setRGB(6 * i, 3.6 * i, 1.6 * i),
        u.emissive.setRGB(0.5 * i, 0.27 * i, 0.1 * i));
    };
  return (z(0, 0), { api: C, anim: z });
}
const A0 = Math.PI;
