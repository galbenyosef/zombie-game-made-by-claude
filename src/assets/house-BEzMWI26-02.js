// assets/house-BEzMWI26 02 — math
// Lines 287-545 of readable/assets/house-BEzMWI26.pretty.js (statement-aligned).
function buildHouseSurfaces(s) {
  const { mats: o } = s,
    e = (h) => o.has(h),
    n = ge,
    t = (h) => {
      const c = h.clone();
      return ((c.userData = { ...h.userData }), c);
    },
    u = (h) => {
      const c = t(h);
      return ((c.vertexColors = !0), c);
    },
    d = (h, c, m, g = {}) => o.get(h, { ...g, color: e(h) ? m : c }),
    a = {};
  return (
    (a.log = P(u(o.get("house_log", { uv: 1 })))),
    (a.chink = P(u(d("plaster_bare", "#b8ad98", "#e6dcc6")))),
    (a.floor = P(t(o.get("house_floor")))),
    (a.plank = P(u(o.get("house_plank")))),
    (a.plankD = P(u(o.get("house_plank", { side: n })))),
    (a.shingle = t(o.get("house_shingle"))),
    (a.stone = P(u(o.get("house_stone")))),
    (a.wood = P(t(o.get("wood_oak_pale")))),
    (a.woodV = P(u(o.get("wood_oak_pale")))),
    (a.walnut = P(t(o.get("wood_walnut")))),
    (a.iron = P(t(o.get("iron_black")))),
    (a.brass = P(t(o.get("brass_aged")))),
    (a.rust = P(t(o.get("rust_metal")))),
    (a.quilt = P(t(o.get("house_quilt", { side: n })))),
    (a.linen = P(
      t(
        e("bed_linen")
          ? o.get("bed_linen", { side: n })
          : o.get("linen_stained", { side: n }),
      ),
    )),
    (a.ticking = P(t(d("linen_stained", "#8d8470", "#c9bfa8")))),
    (a.wool = P(t(d("wool_grey", "#3e4a52", "#8aa0b0", { side: n })))),
    (a.woolRed = P(t(d("wool_grey", "#5a2420", "#c46050", { side: n })))),
    (a.woolBrown = P(t(d("wool_grey", "#4a3a2a", "#a88a66", { side: n })))),
    (a.leather = P(t(o.get("leather_brown")))),
    (a.ceramic = P(t(o.get("porcelain_cracked")))),
    (a.enamel = P(
      t(d("porcelain_cracked", "#c8cfd0", "#dfe8ea", { rough: 0.3 })),
    )),
    (a.labels = P(t(o.get("house_labels", { uv: 1 })))),
    (a.paper = P(t(o.get("paper_old")))),
    (a.rug = P(t(o.get("house_rug", { uv: 1 })))),
    (a.char = P(t(o.get("ruin_char")))),
    (a.wax = P(t(d("wax_candle", "#bfb294", "#d6c6a4")))),
    (a.misc = P(new X0({ vertexColors: !0, roughness: 0.62 }))),
    (a.food = a.misc),
    (a.paint = P(t(d("wood_painted_white", "#3e5a56", "#8fb0a6")))),
    (a.canvas = P(
      t(d("wool_grey", "#4a3e2c", "#a08a62", { side: n, rough: 0.8 })),
    )),
    (a.backing = P(t(d("linen_stained", "#bdb29a", "#e6dcc4", { side: n })))),
    (a.herb = P(new X0({ vertexColors: !0, roughness: 0.9, side: n }))),
    (a.cord = P(new X0({ color: 6969924, roughness: 0.9 }))),
    (a.dark = new X0({ color: 328707, roughness: 1 })),
    (a.glass = new D0({
      color: 13161676,
      roughness: 0.06,
      metalness: 0,
      transparent: !0,
      opacity: 0.2,
      depthWrite: !1,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      envMapIntensity: 1.6,
      side: n,
      normalMap: gt(),
      normalScale: new Ge(0.35, 0.35),
    })),
    (a.glass.emissive = new M0(1, 0.55, 0.25)),
    (a.glass.emissiveIntensity = 0),
    (a.jar = new D0({
      color: 12110008,
      roughness: 0.12,
      transparent: !0,
      opacity: 0.32,
      depthWrite: !1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      envMapIntensity: 1.8,
    })),
    P(a.jar, 0.6),
    (a.lampGlass = new D0({
      color: 14674140,
      roughness: 0.04,
      transparent: !0,
      opacity: 0.3,
      depthWrite: !1,
      clearcoat: 1,
      clearcoatRoughness: 0.04,
      envMapIntensity: 2.2,
    })),
    (a.kerosene = new D0({
      color: 12618298,
      roughness: 0.08,
      transparent: !0,
      opacity: 0.5,
      depthWrite: !1,
      envMapIntensity: 1.5,
    })),
    (a.chimney = new D0({
      color: 15525076,
      roughness: 0.03,
      transparent: !0,
      opacity: 0.12,
      depthWrite: !1,
      clearcoat: 1,
      clearcoatRoughness: 0.03,
      envMapIntensity: 2.5,
      side: n,
      emissive: new M0(1, 0.62, 0.3),
      emissiveIntensity: 0,
    })),
    (a.woolV = P(u(d("wool_grey", "#8a8680", "#ffffff", { side: n })))),
    (a.enamelV = P(
      u(d("porcelain_cracked", "#d8d2c6", "#ffffff", { rough: 0.32 })),
    )),
    (a.water = new D0({
      color: 724239,
      roughness: 0.04,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      envMapIntensity: 1.6,
    })),
    a
  );
}
let x0 = null;
function gt() {
  if (x0) return x0;
  const s = 128,
    o = new Uint8Array(s * s * 4),
    e = (n, t) =>
      Math.sin(
        (n / s) * Math.PI * 2 * 2 + Math.sin((t / s) * Math.PI * 2 * 3) * 0.9,
      ) *
        0.6 +
      Math.sin(
        (t / s) * Math.PI * 2 * 5 + Math.cos((n / s) * Math.PI * 2) * 1.3,
      ) *
        0.4;
  for (let n = 0; n < s; n++)
    for (let t = 0; t < s; t++) {
      const u = e(t + 1, n) - e(t - 1, n),
        d = e(t, n + 1) - e(t, n - 1);
      let a = -u * 2.5,
        h = -d * 2.5,
        c = 1;
      const m = Math.hypot(a, h, c);
      ((a /= m), (h /= m), (c /= m));
      const g = (n * s + t) * 4;
      ((o[g] = (a * 0.5 + 0.5) * 255),
        (o[g + 1] = (h * 0.5 + 0.5) * 255),
        (o[g + 2] = (c * 0.5 + 0.5) * 255),
        (o[g + 3] = 255));
    }
  return (
    (x0 = new we(o, s, s, xe)),
    (x0.wrapS = x0.wrapT = Qe),
    (x0.needsUpdate = !0),
    (x0.magFilter = ye),
    (x0.minFilter = et),
    (x0.generateMipmaps = !0),
    x0
  );
}
const Te = (s) => s * s * (3 - 2 * s),
  Pe = (105 * Math.PI) / 180;
function wt(s, o, e, n, t) {
  const a = (e - 0.02) / 5,
    h = [0.54, 0.26, 0.21],
    c = [0.98, 0.8, 0.6],
    m = (w, M, p) => (p > -0.045 * 0.5 ? c : h);
  for (let w = 0; w < 5; w++) {
    const M = -e + w * (a + 0.005),
      p = G(M, 0, -0.045, M + a, n - (w % 2) * 0.004, 0, 0.004, "y", 1);
    ($0(p, m), s.add(p, o.plank));
  }
  const g = 0.026;
  for (const w of [0.26, n - 0.3]) {
    const M = G(-e + 0.03, w - 0.065, 0, -0.03, w + 0.065, g, 0.006, "x", 1);
    (r0(M, c), s.add(M, o.plank));
  }
  {
    const w = new j(-0.1, 0.33, g / 2),
      M = new j(-e + 0.1, n - 0.3 - 0.07, g / 2),
      p = w.distanceTo(M),
      C = G(-p / 2, -0.055, -g / 2, p / 2, 0.055, g / 2, 0.006, "x", 1),
      A = Math.atan2(M.y - w.y, M.x - w.x);
    (C.applyMatrix4(new Ue().makeRotationZ(A)),
      C.translate((w.x + M.x) / 2, (w.y + M.y) / 2, w.z),
      r0(C, c),
      s.add(C, o.plank));
  }
  for (const w of [0.26, n - 0.3]) {
    const M = e * 0.62,
      p = new Re();
    (p.moveTo(0, -0.028),
      p.lineTo(-M, -0.012),
      p.quadraticCurveTo(-M - 0.03, 0, -M, 0.012),
      p.lineTo(0, 0.028),
      p.lineTo(0, -0.028));
    const C = new Ne(p, { depth: 0.005, bevelEnabled: !1 });
    (C.translate(0.005, w, g + 5e-4), s.add(C, o.iron, { cast: !1 }));
    for (let A = 0; A < 4; A++) {
      const L = -0.05 - (A * (M - 0.08)) / 3;
      s.add(
        p0(
          [
            [0, 0],
            [0.006, 0],
            [0.005, 0.003],
            [0, 0.004],
          ],
          L,
          w,
          g + 0.005,
          { segs: 8, rot: [Math.PI / 2, 0, 0] },
        ),
        o.iron,
        { cast: !1 },
      );
    }
    s.add(
      L0([0.012, w - 0.04, g * 0.5], [0.012, w + 0.04, g * 0.5], 0.012, 10),
      o.iron,
      { cast: !1 },
    );
  }
  {
    const w = new qe(0.045, 0.006, 8, 24);
    (w.translate(-e + 0.11, 1 - 0.045, -0.045 - 0.012),
      s.add(w, o.iron, { cast: !1 }),
      s.add(
        p0(
          [
            [0, 0],
            [0.018, 0],
            [0.012, 0.012],
            [0, 0.014],
          ],
          -e + 0.11,
          1,
          -0.045,
          { segs: 12, rot: [-Math.PI / 2, 0, 0] },
        ),
        o.iron,
        { cast: !1 },
      ));
    const M = G(-e + 0.07, 0.93, g, -e + 0.1, 1.13, g + 0.045, 0.01, "y", 1);
    (r0(M, c), s.add(M, o.plank));
  }
}
