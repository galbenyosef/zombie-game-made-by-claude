// assets/park-CwBfNU5l 19 — math
// Lines 7411-8228 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
async function Io(e, { rng: a } = {}) {
  a = a || e.rng(5305);
  const t = {};
  let o = performance.now();
  const n = (k) => {
    const O = performance.now();
    ((t[k] = Math.round(O - o)), (o = O));
  };
  (await e.mats.ensure(bo), n("textures"));
  const i = new P0();
  i.name = "park";
  const f = [],
    w = [],
    s = [],
    l = new Ea(),
    u = fo(320);
  i.add(u.mesh);
  const c = Na(a),
    M = Oa(e, c, a);
  (i.add(M.group), w.push(...M.circles), n("trees"));
  const h = { root: [468.4, 140.6], dir: [0.34, 0.94], H: 23, r: 0.62 };
  {
    const k = { kind: "plane", x: 0, z: 0, r: h.r, H: h.H },
      O = buildYoungTrees(k, a, { free: !0, ivy: 0.6 }),
      ht = Math.atan2(h.dir[0], h.dir[1]),
      U = new gt()
        .makeTranslation(h.root[0], h.r * 0.8, h.root[1])
        .multiply(new gt().makeRotationY(ht))
        .multiply(new gt().makeRotationX(Math.PI / 2 - 0.05)),
      vt = v0(O.bark.map((St) => St.applyMatrix4(U)));
    {
      const St = vt.attributes.position;
      for (let Qt = 0; Qt < St.count; Qt++)
        St.getY(Qt) < 0.05 && St.setY(Qt, 0.05 + Math.abs(St.getY(Qt)) * 0.02);
      vt.computeVertexNormals();
    }
    const ct = new jt(vt, Te(e, "park3_bark", "bark_plane"));
    ((ct.name = "fallen_tree"),
      (ct.castShadow = !0),
      (ct.receiveShadow = !0),
      i.add(ct));
    const pt = new za().getNormalMatrix(U);
    for (const St of O.cards)
      (St.pos.applyMatrix4(U),
        St.along.applyMatrix3(pt).normalize(),
        St.out.applyMatrix3(pt).normalize(),
        St.ivy && St.ivy.applyMatrix3(pt).normalize(),
        St.pos.y < 0.15 && (St.pos.y = 0.15));
    const bt = We(),
      Ot = new jt(
        Ee(O.cards, a, (St, Qt) =>
          Qt.setRGB(0.55 * St.shade, 0.52 * St.shade, 0.5 * St.shade),
        ),
        bt.m,
      );
    ((Ot.name = "fallen_tree_cards"),
      (Ot.customDepthMaterial = bt.d),
      (Ot.castShadow = !0),
      i.add(Ot));
    const Rt = buildParkStructures(e),
      Kt = vo(e, "forest_path"),
      r0 = new ga(
        new ka(
          Array.from({ length: 18 }, (St, Qt) => {
            const w0 = (Qt / 18) * Math.PI * 2,
              S0 = 2.1 * (0.75 + 0.4 * Math.abs(Math.sin(Qt * 2.3)));
            return new _0(Math.cos(w0) * S0, Math.sin(w0) * S0 * 0.8 + 0.4);
          }),
        ),
        {
          depth: 0.55,
          bevelEnabled: !0,
          bevelSize: 0.25,
          bevelThickness: 0.25,
          bevelSegments: 2,
          curveSegments: 4,
        },
      );
    (r0.applyMatrix4(
      new gt()
        .makeTranslation(h.root[0], 1.2, h.root[1])
        .multiply(new gt().makeRotationY(ht))
        .multiply(new gt().makeTranslation(0, 0, -0.9)),
    ),
      l.add(Kt, r0, i0(h.root[0], h.root[1])));
    for (let St = 0; St < 10; St++) {
      const Qt = a() * Math.PI * 2,
        w0 = 0.6 + a() * 1.6,
        S0 = I(
          h.root[0] - h.dir[0] * 0.9 + Math.cos(Qt) * w0 * 0.4,
          1.2 + Math.sin(Qt) * w0 * 0.8,
          h.root[1] - h.dir[1] * 0.9 + Math.cos(Qt) * w0 * 0.3,
        ),
        J0 = S0.clone().add(
          I((a() - 0.5) * 1.6, -0.3 - a() * 0.6, -0.94 * (0.4 + a())),
        );
      l.add(
        Rt.boards,
        yo(
          [
            S0,
            S0.clone()
              .lerp(J0, 0.5)
              .add(I(0, 0.2, 0)),
            J0,
          ],
          0.06,
        ),
        i0(h.root[0], h.root[1]),
      );
    }
    for (let St = -0.5; St < 12; St += 0.9)
      w.push({
        x: h.root[0] + h.dir[0] * St,
        z: h.root[1] + h.dir[1] * St,
        r: h.r * (1.25 - St * 0.03) + 0.1,
        fallen: !0,
      });
    w.push({
      x: h.root[0] - h.dir[0] * 0.8,
      z: h.root[1] - h.dir[1] * 0.8,
      r: 1.8,
      fallen: !0,
    });
  }
  n("fallen");
  const v = buildHedges(e, a);
  (i.add(v.group), f.push(...v.colliders), w.push(...v.circles), n("hedges"));
  const S = buildParkFurniture(e, a, l, u);
  (i.add(S.group),
    f.push(...S.colliders),
    w.push(...S.circles),
    n("furniture"));
  const d = buildEvacCamp(e, a, l, u);
  (i.add(d.group), f.push(...d.colliders), w.push(...d.circles), n("camp"));
  const y = buildArmyTruck(e, a, l);
  (f.push(...y.colliders), n("cover"));
  const m = buildParkStructures(e),
    F = Re("sedan", { burnt: !0, seed: 17, bonnet: 0.5 });
  (F.group.position.set(Nt.x, 0, Nt.z),
    F.group.rotation.set(0, Nt.yaw, 0.02),
    F.group.updateMatrixWorld(!0),
    l.addGroup(F.group, i0(Nt.x, Nt.z)));
  {
    const k = Math.cos(Nt.yaw),
      O = Math.sin(Nt.yaw);
    for (let ht = 0; ht < 3; ht++) {
      const U = -1.55 + ht * 1.55,
        vt = Nt.x + O * U,
        ct = Nt.z + k * U;
      f.push({
        x0: vt - 0.95,
        x1: vt + 0.95,
        z0: ct - 0.95,
        z1: ct + 0.95,
        y0: 0,
        y1: 1.4,
        car: !0,
      });
    }
  }
  const C = F.fire
    ? new a0(...F.fire).applyMatrix4(F.group.matrixWorld)
    : I(Nt.x - Math.sin(Nt.yaw) * -1.6, 0.8, Nt.z);
  {
    const k = (ct, pt, bt, Ot) => l.add(ct, pt, i0(bt, Ot)),
      O = (ct, pt, bt, Ot, Rt = 0, Kt = 0) =>
        new gt().compose(
          I(ct, pt, bt),
          new C0().setFromEuler(new q0(Rt, Ot, Kt, "YXZ")),
          I(1, 1, 1),
        ),
      ht = (ct, pt, bt) => {
        const Ot = a() * Math.PI * 2,
          Rt = O(ct, 0, pt, Ot),
          Kt =
            bt === 0
              ? Xt(0.66, 0.26, 0.44, 0.05).translate(0, 0.13, 0)
              : bt === 1
                ? Xt(0.48, 0.3, 0.3, 0.1, 2).translate(0, 0.15, 0)
                : Xt(0.45, 0.24, 0.66, 0.04).translate(0, 0.12, 0);
        k([m.cloth, m.cloth2, m.blue][bt % 3], Kt.applyMatrix4(Rt), ct, pt);
      };
    for (const [ct, pt, bt] of [
      [428.2, 184.4, 0],
      [433.6, 187.2, 1],
      [427.4, 161.8, 2],
      [439.8, 160.6, 0],
      [444.6, 146, 1],
      [428, 147.6, 2],
      [436, 139, 0],
      [446.8, 130.4, 1],
      [422, 192.4, 2],
      [418.6, 150, 0],
      [462, 149.6, 1],
      [404, 152.6, 2],
    ])
      G0(ct, pt) > 1.3 && ht(ct, pt, bt);
    {
      const bt = O(427.9, 0.36, 175.8, 0.6, 0, Math.PI / 2 - 0.12),
        Ot = m.pram || (m.pram = qt("pram", 1712694, { rough: 0.6 })),
        Rt = new Ie(
          [
            [0.001, 0],
            [0.16, 0],
            [0.2, 0.05],
            [0.21, 0.3],
            [0.205, 0.34],
            [0.19, 0.34],
          ].map(([Kt, r0]) => new _0(Kt, r0)),
          16,
        );
      (Rt.scale(2, 1, 1.05).translate(0, 0.42, 0),
        k(Ot, Rt.applyMatrix4(bt), 427.9, 175.8));
      {
        const Kt = new z0(0.21, 14, 6, Math.PI / 2, Math.PI, 0, Math.PI * 0.55);
        (Kt.scale(1, 1.05, 1).translate(-0.24, 0.74, 0),
          Kt.index &&
            Kt.setIndex([...Kt.index.array, ...[...Kt.index.array].reverse()]),
          k(Ot, Kt.applyMatrix4(bt), 427.9, 175.8));
      }
      for (const [Kt, r0, St] of [
        [-0.3, -0.25, 0.17],
        [0.3, -0.25, 0.13],
        [-0.3, 0.25, 0.17],
        [0.3, 0.25, 0.13],
      ]) {
        k(
          m.rubber,
          new pe(St, 0.02, 6, 18).translate(Kt, St, r0).applyMatrix4(bt),
          427.9,
          175.8,
        );
        for (let Qt = 0; Qt < 6; Qt++)
          k(
            m.steel,
            new It(0.004, 0.004, St * 2, 4)
              .rotateZ((Qt * Math.PI) / 6)
              .translate(Kt, St, r0)
              .applyMatrix4(bt),
            427.9,
            175.8,
          );
      }
      for (const [Kt, r0] of [
        [
          [-0.3, 0.17, -0.25],
          [0.3, 0.13, -0.25],
        ],
        [
          [-0.3, 0.17, 0.25],
          [0.3, 0.13, 0.25],
        ],
        [
          [-0.15, 0.17, -0.25],
          [-0.1, 0.42, -0.2],
        ],
        [
          [0.15, 0.15, 0.25],
          [0.1, 0.42, 0.2],
        ],
        [
          [0.36, 0.5, -0.2],
          [0.62, 0.98, -0.2],
        ],
        [
          [0.36, 0.5, 0.2],
          [0.62, 0.98, 0.2],
        ],
        [
          [0.62, 0.98, -0.21],
          [0.62, 0.98, 0.21],
        ],
      ])
        k(m.steel, zo(I(...Kt), I(...r0)).applyMatrix4(bt), 427.9, 175.8);
      f.push({
        x0: 427.9 - 0.55,
        x1: 427.9 + 0.55,
        z0: 175.8 - 0.55,
        z1: 175.8 + 0.55,
        y0: 0,
        y1: 0.7,
      });
    }
    {
      const ct = (pt, bt, Ot, Rt) => {
        (pt.position.set(bt, pt.position.y, Ot),
          (pt.rotation.y = Rt),
          l.addGroup(pt, i0(bt, Ot)));
      };
      (ct(Ue({ fallen: !0, color: 3807770 }).group, 422.4, 189.4, 0.6),
        ct(Ue({ fallen: !0, color: 1718826 }).group, 425.2, 156.6, 2.2),
        ct(Xe({ open: !0 }).group, 437, 170.2, 0.9),
        ct(Xe().group, 445, 141, 1.9),
        ct(Ve().group, 428.6, 186, 1.2),
        ct(Ve().group, 444.2, 158.6, -0.6));
      for (const [pt, bt] of [
        [432.9, 181.6],
        [436.8, 160.6],
        [441.9, 139.6],
      ])
        G0(pt, bt) > 0.9 && ct(Sa().group, pt, bt, a() * 6.3);
    }
    const U = (ct, pt, bt, Ot) => {
        const Rt = ra(a, { bloodAt: 0.2 + a() * 0.25 }),
          Kt = O(ct, 0, pt, bt);
        (k(Ot, Rt.cloth.applyMatrix4(Kt), ct, pt),
          Rt.blood && k(m.blood, Rt.blood.applyMatrix4(Kt), ct, pt),
          k(
            m.rubber,
            Xt(0.26, 0.1, 0.1, 0.03)
              .rotateY(0.3)
              .translate(1.02, 0.05, 0.12)
              .applyMatrix4(Kt),
            ct,
            pt,
          ),
          vt(ct - Math.cos(bt) * 0.5, pt + Math.sin(bt) * 0.5, 1.2, 0.8, bt));
      },
      vt = (ct, pt, bt, Ot, Rt) => {
        const Kt = new j0(0.5, 14),
          r0 = Kt.attributes.position;
        for (let St = 1; St < r0.count; St++) {
          const Qt = 0.6 + a() * 0.6;
          r0.setXY(St, r0.getX(St) * Qt, r0.getY(St) * Qt);
        }
        (Kt.rotateX(-Math.PI / 2)
          .scale(bt, 1, Ot)
          .rotateY(Rt)
          .translate(ct, 0.03, pt),
          k(m.blood, Kt, ct, pt));
      };
    (U(424.6, 166.4, 0.4, m.sheet),
      U(447.6, 156, 2, m.wool),
      U(409, 168.4, -1.2, m.woolOlive),
      U(452.6, 140.6, 0.9, m.sheet));
    for (const [ct, pt, bt, Ot] of [
      [431.4, 183.8, 1.2, 0.5],
      [435.6, 158.4, 1.8, 0.6],
      [442.4, 147, 0.9, 0.7],
      [438.8, 132, 2.4, 0.4],
      [444, 125.6, 1, 0.8],
      [429, 190.2, 0.8, 0.6],
    ])
      vt(ct, pt, bt, Ot, a() * Math.PI);
  }
  const L = [
      {
        a: Nt.breach,
        b: [Nt.x - Math.sin(Nt.yaw) * 1.2, Nt.z - Math.cos(Nt.yaw) * 1.2],
      },
    ],
    z = [
      [447, 124, 7, 0.9],
      [436, 120, 5, 0.5],
      [470, 118, 5, 0.5],
      [446, 79, 6, 0.6],
      [430, 96, 5, 0.6],
      ...d.mud,
    ],
    W = [[h0.x, h0.z, h0.half * 1.42]];
  n("litter");
  const D = buildParkPaths(e, {
    trees: c,
    hedges: v.hedges,
    wear: [...S.wear, ...d.wear],
    ruts: L,
    mud: z,
    paved: W,
  });
  (i.add(D.group), n("ground"));
  const V = [
      { x: C.x, y: Math.max(0.6, C.y), z: C.z, s: 1.05, kind: "car" },
      {
        x: Nt.x - Math.sin(Nt.yaw) * 0.3,
        y: 0.85,
        z: Nt.z - Math.cos(Nt.yaw) * 0.3,
        s: 0.75,
        wide: 1.4,
        smoke: 1.3,
        kind: "car",
      },
      ...d.fires,
    ],
    A = xo(V, a);
  i.add(A.group);
  const K = V.map((k, O) => ({
      pos: I(k.x, k.y + 0.6 + k.s * 0.4, k.z),
      color: new Vt(1, 0.48, 0.16),
      cd:
        (k.kind === "car" ? 38 : k.kind === "brazier" ? 26 : 14) *
        (O === 1 ? 0.6 : 1),
      range: k.kind === "car" ? 14 : 10,
      k: (ht) => A.k[O] * go(ht, O),
      air: 1.9,
      airK: k.kind === "car" ? 1.3 : 0.9,
      kind: "fire",
    })),
    J = d.floods.map((k) => {
      const O = ho(k.pos, k.aim, k.angle * 0.78, new Vt(0.05, 0.055, 0.064), {
        length: k.pos.distanceTo(k.aim) * 1.12,
      });
      return (i.add(O), O);
    }),
    q = new P0();
  ((q.name = "park_lights"), i.add(q));
  const st = [...S.sources, ...d.sources, ...K],
    j = Mo(e, q, { sources: st, floods: d.floods, ambulance: d.ambulance });
  (l.build(i, "park"), n("bake"));
  const Y = [
      { id: "p3_generator", pos: [d.gen[0], 0.9, d.gen[1]], vol: 0.55 },
      { id: "p3_radio", pos: d.spots.radio || [467, 0.9, 75], vol: 0.45 },
      {
        id: "p3_flood_hum",
        pos: [d.floods[0].pos.x, d.floods[0].pos.y, d.floods[0].pos.z],
        vol: 0.3,
      },
      { id: "p3_fire_car", pos: [C.x, 1, C.z], vol: 0.6 },
      { id: "p3_brazier", pos: [d.brazier[0], 0.8, d.brazier[1]], vol: 0.4 },
      ...S.lamps
        .filter((k) => k.dying)
        .map((k) => ({ id: "p3_lamp_buzz", pos: [k.x, 3.8, k.z], vol: 0.3 })),
    ],
    x = {
      auto: !0,
      on: !1,
      loops: [],
      start() {
        const k = e.audio;
        !k?.ctx ||
          this.on ||
          ((this.on = !0),
          (this.loops = Y.map((O) =>
            k.loop(O.id, { pos: O.pos, vol: O.vol, bus: "sfx", fade: 2 }),
          )));
      },
      stop(k = 1.5) {
        for (const O of this.loops) O?.stop?.(k);
        ((this.loops = []), (this.on = !1));
      },
    };
  let p = 4;
  const g = e.game.camera;
  s.push((k, O) => {
    ((x0.uPT.value = O),
      D.update(g),
      S.update(k, O, g),
      d.update(k, O),
      y.update(k, O),
      j.update(k, O, g));
    for (let U = 0; U < J.length; U++) J[U].userData.U.uK.value = j.spots[U].k;
    let ht = 0;
    for (let U = 0; U < j.spots.length; U++)
      ((d.lensK[U] = j.spots[U].k),
        (u.K[60 + U] = j.spots[U].k),
        (ht += j.spots[U].k / j.spots.length));
    ((u.K[63] = ht),
      (p -= k),
      p <= 0 &&
        ((p = 5 + 4 * (0.5 + 0.5 * Math.sin(O * 0.7))),
        T &&
          (g.position.x - d.ambulance.pos.x) ** 2 +
            (g.position.z - d.ambulance.pos.z) ** 2 <
            4900 &&
          e.audio?.play?.("p3_siren_chirp", {
            pos: d.ambulance.pos.toArray(),
            vol: 0.5,
          })),
      x.auto &&
        !x.on &&
        e.audio?.ctx &&
        g.position.y > -2 &&
        V0(g.position.x, g.position.z, -10) &&
        x.start());
  });
  let T = !0;
  const G = (k, O, ht = 0) =>
      ht > -1 && V0(k, O) ? (ve(k, O) ? "camp" : "park") : null,
    Z = (k, O, ht = 0) => (ht > -3 && V0(k, O) ? 0 : null),
    tt = (k, O, ht = 0) => {
      if (!(ht > -1 && V0(k, O))) return null;
      if (Fa(k, O)) return "metal";
      if (Math.abs(k - 447.5) < 0.62 && O > ne.z0 - 0.4 && O < ne.z1 + 1.8)
        return "wood";
      const U = Le(k, O);
      return U.kind === "asphalt" || U.kind === "setts"
        ? "stone"
        : U.kind === "gravel"
          ? "gravel"
          : "grass";
    },
    it = (k, O) =>
      k > Jt.x0 + ke && k < Jt.x1 - ke && O > Jt.z0 + ke && O < Jt.z1 - 0.2,
    et = new Map(),
    at = 4;
  for (const k of w) {
    const O = Math.floor((k.x - k.r - 0.4) / at),
      ht = Math.floor((k.x + k.r + 0.4) / at),
      U = Math.floor((k.z - k.r - 0.4) / at),
      vt = Math.floor((k.z + k.r + 0.4) / at);
    for (let ct = O; ct <= ht; ct++)
      for (let pt = U; pt <= vt; pt++) {
        const bt = ct * 4096 + pt;
        (et.has(bt) || et.set(bt, []), et.get(bt).push(k));
      }
  }
  const nt = (k, O) => {
      const ht = et.get(Math.floor(k / at) * 4096 + Math.floor(O / at));
      if (!ht) return !1;
      for (const U of ht)
        if ((k - U.x) ** 2 + (O - U.z) ** 2 < (U.r + 0.3) ** 2) return !0;
      return !1;
    },
    mt = {
      park: {
        x0: Jt.x0,
        x1: Jt.x1,
        z0: Jt.z0,
        z1: Jt.z1,
        cell: 0.2,
        inArea: it,
        blocked: nt,
      },
    },
    Mt = (k, O, ht = 0.45) => {
      if (nt(k, O)) return !0;
      for (const U of f)
        if (
          U.on !== !1 &&
          (U.y1 === void 0 || U.y1 > 0.3) &&
          k > U.x0 - ht &&
          k < U.x1 + ht &&
          O > U.z0 - ht &&
          O < U.z1 + ht
        )
          return !0;
      return !1;
    },
    Ft = (k, O) => {
      let ht = null,
        U = 1e9;
      for (const vt of T0) {
        const ct = (vt[0] - k) ** 2 + (vt[1] - O) ** 2;
        ct < U && ((U = ct), (ht = vt));
      }
      return Math.atan2(ht[0] - k, ht[1] - O);
    },
    Et = [
      [414.4, 176.6],
      [452.2, 180.4],
      [408.2, 151.2],
      [456, 161.4],
      [419.6, 141],
      [468.8, 149.8],
      [457.4, 137.2],
      [424.4, 119.6],
      [470.6, 133.6],
      [404.2, 172.8],
      [468.4, 170.4],
      [409.2, 131.4],
      [402.6, 187.2],
      [436.6, 99.8],
      [459.4, 101.8],
      [459.4, 115.8],
      [437.8, 121.2],
    ]
      .filter(([k, O]) => !Mt(k, O))
      .map(([k, O], ht) => [
        k,
        O,
        +(Ft(k, O) + ((ht % 3) - 1) * 0.6).toFixed(2),
      ]);
  n("misc");
  const P = ko(a, {
    solid: Mt,
    hedges: v.hedges,
    yews: v.yews,
    trees: c,
    tents: d.tents,
  });
  n("sides");
  const $ = [];
  for (const k of d.tents)
    !k.burnt &&
      k.collapse < 0.5 &&
      !Mt(k.inside[0], k.inside[1], 0.32) &&
      $.push([+k.inside[0].toFixed(2), +k.inside[1].toFixed(2)]);
  for (const [k, O] of [
    [426.4, 92.6],
    [479.4, 99.6],
    [488, 110.6],
    [436.2, 86.8],
    [460.4, 66.8],
    [427, 99.4],
  ])
    $.length < 8 && !Mt(k, O, 0.35) && $.push([k, O]);
  $.length = Math.min($.length, 8);
  const lt = Z0,
    ft = (k, O) => {
      const ht = d.tents.find((U) => Math.hypot(U.x - k, U.z - O) < 0.6);
      return ht && !ht.burnt && ht.collapse < 0.5 ? ht.inside : null;
    },
    Pt = [
      ft(472.6, 119.6),
      ft(430.6, 104.8),
      ft(471, 108.4),
      ft(422.8, 110.6),
      ft(430.6, 116.2),
    ]
      .filter((k) => k && !Mt(k[0], k[1], 0.32))
      .map(([k, O]) => [+k.toFixed(2), +O.toFixed(2)]),
    Wt = [
      [430, 90.8],
      [470.6, 95.4],
      [430.2, 94],
      [470.2, 98.8],
      [426.8, 92.4],
      [466.8, 99.6],
    ].filter(([k, O]) => !Mt(k, O, 0.35)),
    Dt = [
      ...y.ambush,
      {
        id: "hedges",
        at: 146.5,
        spots: [
          [lt.x1 - 1.1, lt.z0 + 1.5],
          [lt.x1 - 1.1, lt.z1 - 1.1],
          [(lt.x0 + lt.x1) / 2, lt.z0 + 2.4],
          [(lt.x0 + lt.x1) / 2, lt.z1 - 2.2],
          [lt.x0 + 2, (lt.z0 + lt.z1) / 2],
        ].filter(([k, O]) => !Mt(k, O, 0.35)),
        leap: null,
        call: "a3_c_left3",
        n: 3,
      },
      {
        id: "tents",
        at: 128.5,
        spots: $.slice(),
        leap: null,
        call: "a3_more",
        n: 4,
      },
      { id: "queue", at: 119, spots: Pt, leap: null, call: "a3_c_more2", n: 3 },
      { id: "pad", at: 108, spots: Wt, leap: null, call: "a3_c_ahead2", n: 2 },
    ],
    e0 = {
      route: T0,
      chopperDoor: aa,
      exitOut: ea,
      dead: Et,
      sides: P,
      camp: $,
      ambush: Dt,
      radio: d.spots.radio,
      generator: d.gen,
      ambulance: d.ambulance.pos.toArray(),
      brazier: d.brazier,
    },
    n0 = {
      floods: {
        count: j.spots.length,
        set(k, O) {
          (j.setFlood(k, O),
            O ||
              e.audio?.play?.("p3_flood_off", {
                pos: j.spots[k]?.f.pos.toArray(),
                vol: 0.6,
              }));
        },
      },
      ambulance: {
        pos: d.ambulance.pos.toArray(),
        set(k) {
          ((T = !!k), d.setAmbulance(k));
        },
        chirp() {
          e.audio?.play?.("p3_siren_chirp", {
            pos: d.ambulance.pos.toArray(),
            vol: 0.7,
          });
        },
      },
      swing: {
        pos: S.swing?.pos,
        set(k) {
          S.swing && ((S.swing.manual = !0), (S.swing.target = k));
        },
        auto() {
          S.swing && (S.swing.manual = !1);
        },
        get k() {
          return S.swing ? S.swing.amp : 0;
        },
      },
      mist(k) {
        ((x0.uPMist.value.w = k), (n0.mistK = k));
      },
      lamps: {
        list: S.lamps
          .filter((k) => k.chan != null)
          .map((k) => ({
            x: +k.x.toFixed(1),
            z: +k.z.toFixed(1),
            dying: k.dying,
          })),
        set(k, O) {
          const ht = S.lamps.filter((U) => U.chan != null)[k];
          ht && (ht.on = !!O);
        },
      },
      fires: {
        list: V.map((k) => ({
          x: +k.x.toFixed(1),
          z: +k.z.toFixed(1),
          kind: k.kind,
        })),
        set(k, O) {
          A.set(k, O);
        },
      },
      medical: {
        set(k) {
          d.setMedical(k);
        },
      },
      sounds: x,
      crates: d.crates,
      trees: c,
      mask: D.mask,
      air: x0,
      mistK: 1,
      lights: j,
      glows: u,
      timing: t,
    };
  return {
    group: i,
    colliders: f,
    circles: w,
    anim: s,
    points: e0,
    props: n0,
    zoneAt: G,
    groundAt: Z,
    surfaceAt: tt,
    navPlans: mt,
    check: () => {
      const k = {
        routeLen: +Ia(T0).toFixed(1),
        routePts: T0.length,
        minClear: 1e9,
        at: null,
        deadOk: 0,
        sidesOk: 0,
        campOk: 0,
        chopper: [],
      };
      for (let U = 1; U < N0.length; U += 1) {
        const [vt, ct] = N0[U];
        for (const pt of f) {
          if (pt.on === !1 || (pt.y1 !== void 0 && pt.y1 < 0.3)) continue;
          const bt = Math.max(pt.x0 - vt, 0, vt - pt.x1),
            Ot = Math.max(pt.z0 - ct, 0, ct - pt.z1),
            Rt = Math.hypot(bt, Ot);
          Rt < k.minClear &&
            ((k.minClear = +Rt.toFixed(2)),
            (k.at = [
              +vt.toFixed(1),
              +ct.toFixed(1),
              "box",
              pt.x0.toFixed(1),
              pt.z0.toFixed(1),
            ]));
        }
        for (const pt of w) {
          const bt = Math.hypot(vt - pt.x, ct - pt.z) - pt.r;
          bt < k.minClear &&
            ((k.minClear = +bt.toFixed(2)),
            (k.at = [
              +vt.toFixed(1),
              +ct.toFixed(1),
              "circle",
              pt.x.toFixed(1),
              pt.z.toFixed(1),
            ]));
        }
      }
      const [O, , ht] = W0.pos;
      for (const U of f) {
        const vt = Math.max(U.x0 - O, 0, O - U.x1),
          ct = Math.max(U.z0 - ht, 0, ht - U.z1);
        Math.hypot(vt, ct) < W0.clear &&
          k.chopper.push(["box", U.x0, U.z0, U.x1, U.z1]);
      }
      for (const U of w)
        Math.hypot(U.x - O, U.z - ht) - U.r < W0.clear &&
          k.chopper.push(["circle", U.x, U.z, U.r]);
      return (
        (k.deadOk = Et.filter(([U, vt]) => !Mt(U, vt, 0.3)).length),
        (k.sidesOk = P.filter(([U, vt]) => !Mt(U, vt, 0.3)).length),
        (k.campOk = $.filter(([U, vt]) => !Mt(U, vt, 0.3)).length),
        (k.counts = {
          dead: Et.length,
          sides: P.length,
          camp: $.length,
          colliders: f.length,
          circles: w.length,
          lights: j.lights.length,
          glows: u.count,
        }),
        k
      );
    },
    looks: { park: Ce, camp: wo },
    warmUp() {},
  };
}
