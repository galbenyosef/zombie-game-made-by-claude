// assets/frames-D6Ub_iDK 03 — add
// Lines 682-921 of readable/assets/frames-D6Ub_iDK.pretty.js (statement-aligned).
function Ft(o, e, t, s, i) {
  const c = O[e.prof],
    f = e.w + 2 * e.mat,
    h = e.h + 2 * e.mat,
    u = c[c.length - 1][0];
  for (const r of zt(f, h, c)) o.add(r, t, { uv: r.userData.axis });
  if (e.mat > 0) {
    const r = f / 2 + 0.003,
      d = h / 2 + 0.003,
      w = e.w / 2,
      l = e.h / 2,
      a = Bt(
        [
          [-r, -d],
          [r, -d],
          [r, d],
          [-r, d],
        ],
        [
          [
            [-w, -l],
            [-w, l],
            [w, l],
            [w, -l],
          ],
        ],
      );
    (o.add(At(a, 0.0026, 8e-4, { seg: 1 }), i, { m: T([0, 0, 0.0072]) }),
      o.add($(e.w + 0.012, e.h + 0.012, e.rect), s, {
        m: T([0, 0, 0.0056]),
        uv: "keep",
      }));
  } else
    o.add($(f + 0.006, h + 0.006, e.rect), s, {
      m: T([0, 0, 0.0065]),
      uv: "keep",
    });
  return { w: f + 2 * u, h: h + 2 * u, T: Math.max(...c.map((r) => r[1])) };
}
function Ot(o, e) {
  const t = (l, a) => o.mats.get(l, a),
    s = o.rng(4711),
    i = t("hall_photos", {
      extra: { clearcoat: 0.85, clearcoatRoughness: 0.07 },
    }),
    c = t("paper_old"),
    f = t("iron_black"),
    h = t("brass_aged"),
    u = [],
    r = {},
    d = (l, a, m) => Ft(l, a, m, i, c);
  for (const l of It) {
    const a = { ...l, rect: tt(l.cell[0], l.cell[1], l.cell[2]) },
      m = St[a.wall],
      p = t(a.fm, a.fm === "brass_aged" ? { rough: 0.32 } : {}),
      n = new C();
    n.name = "photo_" + a.id;
    const b = new J("photo_" + a.id),
      y = 0.028 + s() * 0.02;
    let x;
    const g = a.h + 2 * a.mat + 2 * O[a.prof][O[a.prof].length - 1][0],
      _ = g / 2 + 0.055;
    b.at([0, -_ - g / 2, 0], [y, 0, 0], () => {
      b.at([0, g / 2, 0], 0, () => {
        x = d(b, a, p);
      });
    });
    const V = -_ + g / 2 - 0.012,
      A = Math.sin(y) * g + 0.004;
    for (const v of [-1, 1]) {
      const k = z(v * x.w * 0.22, V, A * 0.9),
        S = z(0, 0, 0.004),
        F = k.distanceTo(S),
        E = k.clone().add(S).multiplyScalar(0.5),
        G = new Y(7e-4, 7e-4, F, 5, 1),
        X = new et().setFromUnitVectors(
          z(0, 1, 0),
          S.clone().sub(k).normalize(),
        );
      b.add(G, h, {
        m: new Q().compose(E, X, z(1, 1, 1)),
        uv: "keep",
        shadow: !1,
      });
    }
    (b.add(new Y(0.0035, 0.0035, 0.004, 10), f, {
      m: T([0, 0.001, 0.006], [Math.PI / 2, 0, 0]),
      uv: "keep",
    }),
      b.add(new Y(0.0012, 0.0012, 0.012, 6), f, {
        m: T([0, 0, 0.002], [Math.PI / 2 - 0.3, 0, 0]),
        uv: "keep",
      }));
    const M = new C();
    ((M.name = "swing"),
      b.flush(M),
      n.add(M),
      n.position.set(m.x + (a.wall === "W" ? 0.001 : -0.001), a.y + _, a.z),
      (n.rotation.y = m.rot),
      (M.rotation.z = a.crooked || 0),
      e.add(n));
    const B = {
      id: a.id,
      group: n,
      swing: M,
      base: a.crooked || 0,
      spring: new Vt(22, 1.1),
      active: !1,
      size: x,
      center: [n.position.x, a.y, a.z],
    };
    (u.push(B), (r[a.id] = B));
  }
  {
    const l = { ...Tt, rect: tt(2, 0, "L") },
      a = new J("photo_fallen"),
      m = t("wood_walnut");
    let p;
    const n = Math.max(...O[l.prof].map((v) => v[1]));
    a.at(
      [6.8 - 0.19, n + 5e-4, l.z + 0.02],
      [Math.PI / 2, 0.21, 0, "YXZ"],
      () => {
        p = d(a, l, m);
        const v = l.w + 2 * l.mat,
          k = l.h + 2 * l.mat;
        a.box(
          t("paper_old", { color: "#9c7b58" }),
          v + 0.006,
          k + 0.006,
          0.003,
          [0, 0, -0.0012],
          { r: 8e-4, grain: null },
        );
        for (const [F, E] of [
          [0, k / 2 - 0.004],
          [0, -k / 2 + 0.004],
          [v / 2 - 0.004, 0],
          [-v / 2 + 0.004, 0],
        ])
          a.box(h, 0.012, 0.006, 0.002, [F, E, -0.003], {
            r: 8e-4,
            grain: null,
          });
        const S = [
          z(-v * 0.3, k * 0.18, -0.0035),
          z(-v * 0.1, k * 0.26, -0.0035),
          z(v * 0.12, k * 0.24, -0.0035),
          z(v * 0.3, k * 0.18, -0.0035),
        ];
        a.add(new wt(new bt(S), 16, 8e-4, 4, !1), h, {
          uv: "keep",
          shadow: !1,
        });
      },
    );
    const b = Pt(13161680, 0.35, { name: "hall_shards", side: st }),
      y = [];
    for (let v = 0; v < 9; v++) {
      const k = 6.68 - s() * 0.32,
        S = l.z - 0.25 + s() * 0.55,
        F = 0.012 + s() * 0.03,
        E = s() * 6.28,
        G = [0, 1, 2].map((X) =>
          z(
            k + Math.cos(E + X * 2.1 + s() * 0.6) * F,
            0.0012,
            S + Math.sin(E + X * 2.1 + s() * 0.6) * F * (0.5 + s()),
          ),
        );
      y.push(...G[0].toArray(), ...G[2].toArray(), ...G[1].toArray());
    }
    const x = new j();
    (x.setAttribute("position", new L(y, 3)),
      x.computeVertexNormals(),
      a.add(x, b, { uv: "world", shadow: !1 }));
    const g = p.w + 0.004,
      _ = p.h + 0.004,
      V = new U(g, _),
      A = t("wallpaper_hall", {
        color: "#f2d0cc",
        extra: {
          polygonOffset: !0,
          polygonOffsetFactor: -1,
          polygonOffsetUnits: -4,
        },
      });
    (a.add(V, A, {
      m: T([6.8 - 6e-4, l.y, l.z], [0, -Math.PI / 2, 0]),
      uv: "world",
      shadow: !1,
    }),
      a.add(
        new U(g, 0.004),
        t("plaster_bare", {
          color: "#6e6660",
          extra: {
            polygonOffset: !0,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -6,
          },
        }),
        {
          m: T([6.8 - 8e-4, l.y + _ / 2, l.z], [0, -Math.PI / 2, 0]),
          uv: "world",
          shadow: !1,
        },
      ),
      a.add(new Y(0.0035, 0.0035, 0.004, 10), f, {
        m: T([6.8 - 0.006, l.y + _ / 2 + 0.05, l.z], [0, 0, Math.PI / 2]),
        uv: "keep",
      }));
    const M = new C();
    ((M.name = "photo_fallen"), a.flush(M), e.add(M));
    const B = { id: "fallen", group: M, fallen: !0, center: [6.62, 0.02, l.z] };
    (u.push(B), (r.fallen = B));
  }
  const w = [];
  return {
    list: u,
    byId: r,
    swing(l, a = 1) {
      const m = r[l];
      !m ||
        !m.spring ||
        (m.spring.kick(a * (s() < 0.5 ? -1 : 1) * 0.9),
        w.includes(m) || w.push(m));
    },
    update(l) {
      for (let a = w.length - 1; a >= 0; a--) {
        const m = w[a],
          p = m.spring.update(l);
        ((m.swing.rotation.z = m.base + p),
          Math.abs(p) < 1e-4 &&
            Math.abs(m.spring.v) < 0.001 &&
            ((m.swing.rotation.z = m.base), w.splice(a, 1)));
      }
    },
  };
}
