// assets/house-BEzMWI26 09 — add
// Lines 2454-2695 of readable/assets/house-BEzMWI26.pretty.js (statement-aligned).
function buildHouseYard(s, o, e, n) {
  const t = new l0();
  t.name = "house_yard";
  const u = n,
    d = [];
  {
    const h = X.x0 - 0.04,
      c = v0.base.z1 + 0.2,
      m = X.z1 - 0.1,
      g = 1.28,
      w = h - 1.62;
    let M = 1;
    for (let p = 0.02, C = 0; p < g; C++) {
      let A = c + 0.03 + (C % 2) * 0.05,
        L = 0;
      for (; A < m - 0.06;) {
        const U = 0.055 + e() * 0.035,
          R = Ie(w * (0.92 + e() * 0.12), U, e, M++);
        (R.applyMatrix4(
          U0(
            [(1.62 + h) / 2 + (e() - 0.5) * 0.06, p + U * 0.9, A + U],
            [e() * 6.28, 0, (e() - 0.5) * 0.08],
          ),
        ),
          r0(R, [0.8 + e() * 0.1, 0.74 + e() * 0.08, 0.66]),
          u.add(R, o.log),
          (A += U * 2 + 0.005),
          (L = Math.max(L, U)));
      }
      if (((p += L * 1.62), C > 12)) break;
    }
    for (const p of [c - 0.04, m + 0.02])
      u.add(
        Le([1.62 + 0.1, -0.1, p], [1.62 + 0.08, g + 0.1, p], 0.04, {
          radial: 8,
          tint: () => fe,
        }),
        o.log,
      );
    {
      const p = G(
        1.57,
        g + 0.1,
        c - 0.1,
        h + 0.02,
        g + 0.13,
        m + 0.08,
        0.005,
        "z",
      );
      (r0(p, [0.66, 0.64, 0.6]), u.add(p, o.plank));
    }
    d.push({
      x0: 1.62 - 0.05,
      x1: X.x0,
      z0: c - 0.1,
      z1: m + 0.08,
      y0: 0,
      y1: g,
    });
  }
  {
    u.add(
      ct({
        axis: "x",
        a: -0.22,
        b: 0.22,
        c: 0,
        y: 0,
        r: 0.27,
        seed: 77,
        taper: 0,
        radial: 22,
        segLen: 0.15,
        tint: () => fe,
      }).applyMatrix4(U0([1.05, 0.22, 201.35], [0, 0, Math.PI / 2])),
      o.log,
    );
    const c = new Re();
    (c.moveTo(0, -0.025),
      c.lineTo(0.13, -0.05),
      c.quadraticCurveTo(0.16, 0, 0.13, 0.05),
      c.lineTo(0, 0.025),
      c.lineTo(-0.035, 0.022),
      c.lineTo(-0.035, -0.022),
      c.lineTo(0, -0.025));
    const m = new Ne(c, {
      depth: 0.022,
      bevelEnabled: !0,
      bevelThickness: 0.004,
      bevelSize: 0.004,
      bevelSegments: 1,
    });
    m.translate(-0.05, 0, -0.011);
    const g = U0([1.05 + 0.02, 0.46, 201.35 - 0.02], [0.4, 0.6, -1.35]);
    (u.add(m.applyMatrix4(g), o.iron),
      u.add(
        Le(
          [1.05 + 0.02 - Math.cos(0.6) * 0.02, 0.47, 201.35 - 0.02],
          [
            1.05 + 0.02 + Math.cos(0.6 + 1.57) * 0.1 - 0.02,
            1.08,
            201.35 + 0.52,
          ],
          0.018,
          { radial: 8, tint: () => [1, 0.86, 0.66] },
        ),
        o.log,
      ));
    for (let w = 0; w < 26; w++) {
      const M = e() * 6.28,
        p = 0.32 + e() * 0.55,
        C = G(
          -0.03 - e() * 0.03,
          0,
          -0.012,
          0.03 + e() * 0.03,
          0.008,
          0.012,
          0.002,
          "x",
        );
      (C.applyMatrix4(
        U0(
          [1.05 + Math.cos(M) * p, 0.004, 201.35 + Math.sin(M) * p],
          [0, e() * 6.28, (e() - 0.5) * 0.2],
        ),
      ),
        r0(C, [0.95, 0.85, 0.7]),
        u.add(C, o.log, { cast: !1 }));
    }
    for (let w = 0; w < 3; w++) {
      const M = Ie(0.4, 0.07 + e() * 0.02, e, 40 + w);
      (M.applyMatrix4(
        U0(
          [1.05 + 0.5 + w * 0.12, 0.05, 201.35 + 0.35 - w * 0.2],
          [0.2 * w, e() * 3, 0],
        ),
      ),
        r0(M, [0.85, 0.78, 0.66]),
        u.add(M, o.log));
    }
    d.push({
      x0: 1.05 - 0.3,
      x1: 1.05 + 0.3,
      z0: 201.35 - 0.3,
      z1: 201.35 + 0.3,
      y0: 0,
      y1: 0.46,
    });
  }
  {
    const a = X.x1 + 0.42,
      h = X.z0 + 0.62,
      c = p0(
        [
          [0, 0],
          [0.25, 0],
          [0.265, 0.03],
          [0.3, 0.42],
          [0.265, 0.82],
          [0.255, 0.85],
          [0.235, 0.85],
          [0.245, 0.82],
          [0.28, 0.42],
          [0.245, 0.05],
          [0, 0.05],
        ],
        a,
        0,
        h,
        { segs: 28 },
      ),
      m = c.attributes.uv,
      g = c.attributes.position;
    for (let p = 0; p < m.count; p++) m.setXY(p, g.getY(p), m.getX(p) * 0.6);
    (r0(c, fe), u.add(c, o.plank));
    for (const [p, C] of [
      [0.1, 0.275],
      [0.42, 0.302],
      [0.74, 0.277],
    ]) {
      const A = new qe(C, 0.01, 6, 36);
      (A.rotateX(Math.PI / 2), A.translate(a, p, h), u.add(A, o.iron));
    }
    const w = p0(
        [
          [0, 0.72],
          [0.262, 0.72],
          [0, 0.72],
        ],
        a,
        0,
        h,
        { segs: 28 },
      ),
      M = new y0(w, o.water);
    ((M.name = "house:barrelWater"),
      t.add(M),
      d.push({
        x0: a - 0.32,
        x1: a + 0.32,
        z0: h - 0.32,
        z1: h + 0.32,
        y0: 0,
        y1: 0.86,
      }));
  }
  return { group: t, colliders: d };
}
function Ot(s, o, e) {
  const n = new me({ side: ge, colorWrite: !1, depthWrite: !1 });
  n.name = "house_shadow";
  const t = new y0(e, n);
  ((t.name = "house:shadowProxy"), (t.castShadow = !0), (t.receiveShadow = !1));
  const u = new l0();
  ((u.name = "house_shadowProxy"), (u.visible = !1), u.add(t), o.add(u));
  let d = !1;
  const a = s.shadowMap,
    h = a.render;
  return (
    (a.render = function (...c) {
      u.visible = d;
      try {
        return h.apply(this, c);
      } finally {
        u.visible = !1;
      }
    }),
    {
      holder: u,
      mesh: t,
      setActive(c) {
        d = !!c;
      },
      get active() {
        return d;
      },
      tris: e.index.count / 3,
    }
  );
}
