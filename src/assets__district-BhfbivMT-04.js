// assets__district-BhfbivMT 04 — translate
// Lines 990-1319 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
function jn({ kind: n = "white", lit: t = !0, smashed: e = !1 } = {}) {
  const r = re(),
    o = new P0();
  o.name = "vending";
  const l = 1,
    s = 0.75,
    c = 1.83,
    a = n === "red" ? r.paintR : n === "blue" ? r.paintB : r.paintW;
  (X(Q(w0(l, c - 0.08, s - 0.04, 0, (c - 0.08) / 2 + 0.08, -0.02)), a, o),
    X(Q(w0(l + 0.03, 0.05, s + 0.02, 0, c - 0.02, 0)), a, o),
    X(Q(w0(l - 0.04, 0.08, s - 0.1, 0, 0.04, -0.03)), r.dark, o));
  const h = s / 2 + 0.001;
  if (
    (X(
      Fe(0.86, 0.9, e || !t ? r.rect.smashed : r.rect.display, -0.02, 1.25, h),
      e || !t ? r.decal : r.glow,
      o,
    ),
    X(
      Fe(0.86, 0.08, r.rect.buttons, -0.02, 0.76, h),
      t && !e ? r.glow : r.decal,
      o,
    ),
    X(Fe(0.3, 0.32, r.rect.coins, 0.3, 0.52, h + 0.002), r.decal, o),
    X(Fe(0.5, 0.14, r.rect.brand, -0.2, 0.62, h + 0.002), r.decal, o),
    X(Q(w0(0.56, 0.2, 0.04, -0.14, 0.24, s / 2 - 0.01)), r.dark, o),
    X(Q(w0(0.6, 0.03, 0.06, -0.14, 0.35, s / 2)), a, o),
    e)
  )
    for (let y = 0; y < 5; y++) {
      const m = new St().setFromPoints([
        new ke(0, 0, 0),
        new ke(0.12 + y * 0.02, 0.05, 0),
        new ke(0.02, 0.16 + (y % 2) * 0.1, 0),
      ]);
      (m.computeVertexNormals(),
        m.setAttribute("uv", new V0(new Float32Array(6), 2)),
        m.translate(-0.45 + y * 0.2, 0.82 + (y % 3) * 0.3, h + 0.01),
        X(m, r.chrome, o));
    }
  let f = null;
  return (
    t &&
      !e &&
      ((f = new l0(
        new D0(2.4, 1.8).rotateX(-Math.PI / 2).translate(0, 0.012, s / 2 + 0.8),
        r.card,
      )),
      (f.renderOrder = 3)),
    { group: o, card: f, size: [l, s] }
  );
}
function Jn({
  h: n = 10,
  transformer: t = !1,
  lamp: e = !1,
  lean: r = 0,
} = {}) {
  const o = re(),
    l = new P0();
  ((l.name = "pole"),
    X(Q(new b0(0.13, 0.17, n, 14).translate(0, n / 2, 0)), o.concrete, l));
  {
    const s = new b0(0.172, 0.176, 1.6, 16, 1, !0).translate(0, 1.1, 0),
      c = s.attributes.uv,
      a = o.rect.band;
    for (let h = 0; h < c.count; h++)
      c.setXY(
        h,
        a[0] + (a[2] - a[0]) * ((c.getX(h) * 4) % 1.0001),
        a[1] + (a[3] - a[1]) * c.getY(h),
      );
    X(s, o.band, l);
  }
  for (let s = 2.4; s < n - 1.5; s += 0.45)
    X(Q(w0(0.03, 0.03, 0.26, 0, s, 0).rotateY(s * 2.2)), o.iron, l);
  for (const [s, c] of [
    [n - 0.3, 1.9],
    [n - 1.1, 1.5],
  ]) {
    X(Q(w0(c, 0.08, 0.08, 0, s, 0)), o.iron, l);
    for (const a of [-c / 2 + 0.12, 0, c / 2 - 0.12])
      (a !== 0 || s < n - 0.5) &&
        X(
          Q(new b0(0.035, 0.045, 0.14, 8).translate(a, s + 0.11, 0)),
          o.porcelain,
          l,
        );
    X(Q(w0(0.05, 0.05, 0.7, 0.3, s - 0.25, 0).rotateZ(0.6)), o.iron, l);
  }
  if (t) {
    (X(Q(new b0(0.3, 0.3, 0.95, 16).translate(0.46, n - 2.9, 0)), o.paintW, l),
      X(Q(new b0(0.31, 0.31, 0.05, 16).translate(0.46, n - 2.4, 0)), o.iron, l),
      X(Q(w0(0.12, 0.5, 0.12, 0.18, n - 2.9, 0)), o.iron, l));
    for (const s of [0.36, 0.56])
      X(
        Q(new b0(0.03, 0.04, 0.16, 8).translate(s, n - 2.3, 0)),
        o.porcelain,
        l,
      );
  }
  return (
    e &&
      (X(Q(w0(0.06, 0.06, 1.4, 0, n - 3.6, 0.7).rotateX(-0.15)), o.iron, l),
      X(Q(w0(0.22, 0.1, 0.5, 0, n - 3.5, 1.4)), o.dark, l)),
    (l.rotation.z = r),
    { group: l, size: [0.36, 0.36] }
  );
}
function ot({ fallen: n = !1, color: t = 2771562 } = {}) {
  const e = re(),
    r = new P0();
  r.name = "bicycle";
  const o = new e0({ color: t, roughness: 0.4, metalness: 0.5 }),
    l = (ot.cache ||= new Map()).get(t) || (ot.cache.set(t, o), o),
    s = 0.33,
    c = 1.1;
  for (const v of [-c / 2, c / 2])
    (X(
      new Ve(s, 0.022, 8, 28).rotateY(Math.PI / 2).translate(0, s, v),
      e.rubber,
      r,
    ),
      X(
        new Ve(s - 0.03, 0.008, 6, 28).rotateY(Math.PI / 2).translate(0, s, v),
        e.chrome,
        r,
      ));
  const a = (v, p, d = 0.018, i = l) => {
      const u = new ke(...v),
        x = new ke(...p),
        w = x.clone().sub(u),
        _ = w.length(),
        M = new b0(d, d, _, 8).translate(0, _ / 2, 0);
      (M.applyQuaternion(
        new Nt().setFromUnitVectors(new ke(0, 1, 0), w.normalize()),
      ).translate(u.x, u.y, u.z),
        X(Q(M), i, r));
    },
    h = [0, s, -c / 2],
    f = [0, 0.3, -0.05],
    y = [0, 0.95, -0.3],
    m = [0, 0.95, 0.38],
    b = [0, 1.02, 0.4];
  (a(h, f),
    a(h, y),
    a(f, y, 0.02),
    a(f, [0, 0.42, 0.25], 0.022),
    a([0, 0.42, 0.25], m, 0.022),
    a([0, s, c / 2], b, 0.016),
    a(b, [0, 1.12, 0.3], 0.016),
    a([-0.28, 1.14, 0.22], [0.28, 1.14, 0.22], 0.012, e.chrome),
    a([0, 0.95, -0.3], [0, 1.02, -0.32], 0.012, e.chrome),
    X(Q(w0(0.16, 0.05, 0.26, 0, 1.05, -0.33)), e.rubber, r));
  {
    const i = c / 2 + 0.1,
      u = 0.96;
    for (let x = 0; x <= 6; x++) {
      const w = -0.17 + (x * 0.34) / 6;
      (a([w, u, i - 0.26 / 2], [w, u + 0.24, i - 0.26 / 2], 0.004, e.chrome),
        a([w, u, i + 0.26 / 2], [w, u + 0.24, i + 0.26 / 2], 0.004, e.chrome));
    }
    for (const x of [u, u + 0.24])
      (a(
        [-0.34 / 2, x, i - 0.26 / 2],
        [0.34 / 2, x, i - 0.26 / 2],
        0.005,
        e.chrome,
      ),
        a(
          [-0.34 / 2, x, i + 0.26 / 2],
          [0.34 / 2, x, i + 0.26 / 2],
          0.005,
          e.chrome,
        ),
        a(
          [-0.34 / 2, x, i - 0.26 / 2],
          [-0.34 / 2, x, i + 0.26 / 2],
          0.005,
          e.chrome,
        ),
        a(
          [0.34 / 2, x, i - 0.26 / 2],
          [0.34 / 2, x, i + 0.26 / 2],
          0.005,
          e.chrome,
        ));
    X(Q(w0(0.34, 0.004, 0.26, 0, u, i)), e.chrome, r);
  }
  for (const v of [-0.1, 0.1])
    a([v, 0.78, -0.62], [v, 0.78, -0.2], 0.008, e.chrome);
  a([0, 0.78, -0.62], [0, s, -c / 2], 0.008, e.chrome);
  for (const v of [-c / 2, c / 2])
    for (let p = 0; p < 8; p++) {
      const d = (p * Math.PI) / 8;
      a(
        [0, s + Math.sin(d) * (s - 0.03), v + Math.cos(d) * (s - 0.03)],
        [0, s - Math.sin(d) * (s - 0.03), v - Math.cos(d) * (s - 0.03)],
        0.003,
        e.chrome,
      );
    }
  return (
    n && ((r.rotation.z = Math.PI / 2 - 0.12), (r.position.y = 0.2)),
    { group: r, size: [0.6, 1.8] }
  );
}
function cn() {
  const n = re(),
    t = new P0();
  return (
    X(
      Q(new b0(0.025, 0.14, 0.62, 16, 1, !0).translate(0, 0.35, 0)),
      n.orange,
      t,
    ),
    X(
      Q(
        new b0(0.075, 0.1, 0.12, 16, 1, !0)
          .translate(0, 0.38, 0)
          .scale(1.01, 1, 1.01),
      ),
      n.white,
      t,
    ),
    X(Q(w0(0.36, 0.04, 0.36, 0, 0.02, 0)), n.orange, t),
    { group: t, size: [0.36, 0.36] }
  );
}
function Qn() {
  const n = re(),
    t = new P0();
  (X(Fe(1.2, 0.28, n.rect.keep, 0, 0.82, 0.02), n.decal, t),
    X(Fe(1.2, 0.28, n.rect.keep, 0, 0.82, 0.02).rotateY(Math.PI), n.decal, t));
  for (const e of [-0.55, 0.55])
    for (const r of [-1, 1]) {
      const o = w0(0.04, 1, 0.04, e, 0.5, r * 0.3);
      (o.applyMatrix4(new J0().makeShear(0, 0, 0, -r * 0.3, 0, 0)),
        X(Q(o), n.iron, t));
    }
  return { group: t, size: [1.3, 0.5] };
}
function Bn() {
  const n = re(),
    t = new P0();
  return (
    X(Q(new b0(0.24, 0.24, 1.1, 20).translate(0, 0.55, 0)), n.paintR, t),
    X(
      Q(
        new nt(0.245, 20, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(
          0,
          1.1,
          0,
        ),
      ),
      n.paintR,
      t,
    ),
    X(Q(w0(0.28, 0.035, 0.05, 0, 0.92, 0.23)), n.dark, t),
    X(Fe(0.2, 0.2, n.rect.post, 0, 0.62, 0.242), n.decal, t),
    X(Q(new b0(0.2, 0.22, 0.08, 20).translate(0, 0.04, 0)), n.dark, t),
    { group: t, size: [0.5, 0.5] }
  );
}
function eo() {
  const n = re(),
    t = new P0();
  return (
    X(Q(new b0(0.03, 0.03, 2.6, 8).translate(0, 1.3, 0)), n.paintW, t),
    X(Fe(0.8, 0.8, n.rect.stop, 0, 2.3, 0.04), n.decal, t),
    X(Fe(0.8, 0.8, n.rect.stop, 0, 2.3, 0.04).rotateY(Math.PI), n.decal, t),
    { group: t, size: [0.2, 0.2] }
  );
}
function to() {
  const n = re(),
    t = new P0();
  for (const e of [-0.55, 0.55])
    X(Q(new b0(0.04, 0.04, 3.4, 8).translate(e, 1.7, 0)), n.paintW, t);
  return (
    X(Fe(1.3, 1.3, n.rect.dir, 0, 2.7, 0.05), n.decal, t),
    X(Q(w0(1.32, 1.32, 0.04, 0, 2.7, 0.02)), n.paintB, t),
    { group: t, size: [1.3, 0.2] }
  );
}
function fn({ open: n = !1 } = {}) {
  const t = re(),
    e = new P0();
  if (n) {
    (X(Q(w0(0.45, 0.12, 0.66, 0, 0.06, 0)), t.cloth, e),
      X(
        Q(
          w0(0.45, 0.66, 0.1, 0, 0.33, 0)
            .rotateX(-0.35)
            .translate(0, 0.08, -0.4),
        ),
        t.cloth,
        e,
      ));
    for (let r = 0; r < 4; r++)
      X(
        Q(
          w0(
            0.3,
            0.05,
            0.25,
            ((r % 2) - 0.5) * 0.4 + 0.1,
            0.03,
            0.5 + r * 0.18,
          ).rotateY(r),
        ),
        [t.white, t.paintB, t.cloth, t.paintR][r],
        e,
      );
  } else {
    (X(Q(w0(0.45, 0.66, 0.24, 0, 0.33, 0)), t.cloth, e),
      X(Q(w0(0.2, 0.04, 0.03, 0, 0.68, 0)), t.dark, e));
    for (const r of [-0.18, 0.18])
      X(
        Q(
          new b0(0.03, 0.03, 0.03, 8)
            .rotateZ(Math.PI / 2)
            .translate(r, 0.03, -0.09),
        ),
        t.rubber,
        e,
      );
  }
  return { group: e, size: [0.5, 0.5] };
}
