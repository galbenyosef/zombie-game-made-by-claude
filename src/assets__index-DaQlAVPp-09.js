// assets__index-DaQlAVPp 09 — position
// Lines 37574-38070 of readable/assets__index-DaQlAVPp.pretty.js (statement-aligned).
function mS(r) {
  const e = new ni();
  e.name = "shell";
  const t = [],
    n = {},
    i = {},
    s = (_, b) => Np(_, b),
    a = [],
    o = () => s("trim_ivory"),
    l = new Map(),
    c = (_, b) => {
      (l.has(b) || l.set(b, []), l.get(b).push(_));
    },
    h = (_, b, S, E, v, T, C) => {
      const R = Bd(_, b, S, E, v, T).toNonIndexed();
      if (!Array.isArray(C)) {
        c(R, C);
        return;
      }
      for (let L = 0; L < 6; L++) {
        const V = R.groups[L];
        if (!V || !C[L]) continue;
        const N = new Je();
        for (const D of ["position", "normal", "uv"]) {
          const O = R.attributes[D],
            B = O.itemSize;
          N.setAttribute(
            D,
            new ot(O.array.slice(V.start * B, (V.start + V.count) * B), B),
          );
        }
        c(N, C[L]);
      }
    },
    d = (_, b, S, E, v, T) =>
      t.push({ x0: _, x1: E, z0: S, z1: T, y0: b, y1: v });
  for (const [_, b] of Object.entries(Go)) {
    const S = Tn[b.skin] || Tn.hall;
    (h(b.x0, -0.3, b.z0, b.x1, 0, b.z1, [
      null,
      null,
      s(S.floor),
      s("dark_room"),
      null,
      null,
    ]),
      a.push({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, y: b.h }));
  }
  for (const _ of Ya)
    for (const b of _.openings) {
      if (b.type === "window") continue;
      const [S, E] = f(_, b),
        v = _.z1 - _.z0 < _.x1 - _.x0,
        T = Tn[b.skinB || _.b] || Tn.hall;
      v
        ? h(S, -0.3, _.z0, E, 0, _.z1, [
            null,
            null,
            s(T.floor),
            null,
            null,
            null,
          ])
        : h(_.x0, -0.3, S, _.x1, 0, E, [
            null,
            null,
            s(T.floor),
            null,
            null,
            null,
          ]);
    }
  function u(_, b, S) {
    const E = (_.x0 + _.x1) / 2,
      v = (_.z0 + _.z1) / 2,
      T = b === "a" ? -0.25 : 0.25,
      C = S ? E : E + T + (b === "a" ? -0.1 : 0.1),
      R = S ? v + T + (b === "a" ? -0.1 : 0.1) : v;
    for (const L of Object.values(Go))
      if (
        C >= L.x0 - 0.01 &&
        C <= L.x1 + 0.01 &&
        R >= L.z0 - 0.01 &&
        R <= L.z1 + 0.01
      )
        return L.h;
    return Qn;
  }
  function f(_, b) {
    const E = (_.z1 - _.z0 < _.x1 - _.x0 ? _.x0 : _.z0) + b.at;
    return [E, E + b.w];
  }
  for (const _ of Ya) {
    const b = _.z1 - _.z0 < _.x1 - _.x0,
      S = b ? _.x0 : _.z0,
      E = b ? _.x1 : _.z1,
      v = Qn + 0.3,
      T = -0.3;
    (Tn[_.a] || Tn.hall, Tn[_.b] || Tn.hall);
    const C = (N, D) => {
        const O = Tn[D] || Tn.hall;
        return s(O.wall);
      },
      R = (N, D, O, B, Y, Q) => {
        const se = C("a", Y || _.a),
          ee = C("b", Q || _.b),
          re = s("plaster_bare");
        (b
          ? h(N, O, _.z0, D, B, _.z1, [re, re, re, re, ee, se])
          : h(_.x0, O, N, _.x1, B, D, [ee, se, re, re, re, re]),
          B > 0.3 &&
            O < 1.7 &&
            (b
              ? d(N, Math.max(O, 0), _.z0, D, B, _.z1)
              : d(_.x0, Math.max(O, 0), N, _.x1, B, D)));
      },
      L = [..._.openings].sort((N, D) => N.at - D.at);
    let V = S;
    for (const N of L) {
      const [D, O] = f(_, N);
      (D > V + 1e-4 && R(V, D, T, v),
        N.sill > 0.001 && R(D, O, T, N.sill, N.skinA, N.skinB),
        N.head < v && R(D, O, N.head, v, N.skinA, N.skinB),
        (V = O));
    }
    V < E - 1e-4 && R(V, E, T, v);
    for (const N of ["a", "b"]) {
      const D = N === "a" ? _.a : _.b,
        O = Tn[D];
      if (!O || D === "ext") continue;
      const B = u(_, N, b),
        Y = N === "a" ? -1 : 1,
        Q = b ? (N === "a" ? _.z0 : _.z1) : N === "a" ? _.x0 : _.x1,
        se = (oe, Ie, X, Z, K, ue) => {
          if (Ie - oe < 0.01) return;
          const Le = Q + (Y > 0 ? 0 : -K),
            de = Q + (Y > 0 ? K : 0);
          b ? h(oe, X, Le, Ie, Z, de, ue) : h(Le, X, oe, de, Z, Ie, ue);
        };
      let ee = S;
      const re = L.filter((oe) => oe.type === "door" || oe.type === "arch").map(
          (oe) => f(_, oe),
        ),
        Ee = [];
      for (const [oe, Ie] of re) (oe > ee && Ee.push([ee, oe]), (ee = Ie));
      (ee < E && Ee.push([ee, E]),
        se(S, E, B - 0.16, B, 0.05, o()),
        se(S, E, B - 0.09, B - 0.03, 0.075, o()));
      for (const [oe, Ie] of Ee) {
        const X = oe > S + 1e-6 ? oe - 0.002 : oe,
          Z = Ie < E - 1e-6 ? Ie + 0.002 : Ie;
        if (
          (se(X, Z, 0, Ha, 0.022, o()),
          se(X, Z, Ha, Ha + 0.02, 0.03, o()),
          O.dado)
        ) {
          const K = L.filter((de) => de.type === "window").map((de) =>
            f(_, de),
          );
          let ue = X;
          const Le = [];
          for (const [de, We] of K)
            We > ue &&
              de < Z &&
              (de > ue && Le.push([ue, de]), (ue = Math.max(ue, We)));
          ue < Z && Le.push([ue, Z]);
          for (const [de, We] of Le)
            (se(de, We, Ha, Ec, 0.03, s(O.wainscot)),
              se(de, We, Ec, Ec + 0.05, 0.05, o()));
        }
      }
    }
  }
  const p = [],
    x = (_, b) => (_ + b) / 2,
    m = (_) => (_.index ? _.toNonIndexed() : _);
  for (const _ of Ya) {
    const b = _.z1 - _.z0 < _.x1 - _.x0;
    for (const S of _.openings) {
      const [E, v] = f(_, S),
        T = (E + v) / 2;
      (b || (_.x0 + _.x1) / 2, b && (_.z0 + _.z1) / 2);
      const C = (D, O) => {
          const Y = D + (O > 0 ? 0 : -0.028),
            Q = D + (O > 0 ? 0.028 : 0),
            se = (ee, re, Ee, oe) =>
              b ? h(ee, Ee, Y, re, oe, Q, o()) : h(Y, Ee, ee, Q, oe, re, o());
          (se(
            E - 0.085,
            E - 0.002,
            S.sill > 0.001 ? S.sill - 0.085 : 0,
            S.head + 0.085,
          ),
            se(
              v + 0.002,
              v + 0.085,
              S.sill > 0.001 ? S.sill - 0.085 : 0,
              S.head + 0.085,
            ),
            se(E - 0.085, v + 0.085, S.head, S.head + 0.085),
            S.sill > 0.001 && se(E - 0.085, v + 0.085, S.sill - 0.085, S.sill));
        },
        R = b ? _.z0 : _.x0,
        L = b ? _.z1 : _.x1,
        V = _.a === "ext",
        N = _.b === "ext";
      (V || C(R, -1),
        N || C(L, 1),
        S.type === "door" && g(_, S, E, v, b),
        S.type === "window" && y(_, S, E, v, b));
    }
  }
  function g(_, b, S, E, v) {
    const T = b.w - 0.04,
      C = b.head - 0.02,
      R = 0.045,
      L = new ni();
    L.name = "door_" + b.id;
    const V = S + 0.02,
      N = v ? (_.z0 + _.z1) / 2 : (_.x0 + _.x1) / 2;
    v ? L.position.set(V, 0, N) : L.position.set(N, 0, V);
    const D = !!b.front,
      O = s("door_wood"),
      B = new Zt(v ? T : R, C, v ? R : T);
    v
      ? B.translate(T / 2, C / 2 + 0.01, 0)
      : B.translate(0, C / 2 + 0.01, T / 2);
    const Y = [B],
      Q = (Z, K, ue, Le, de) => {
        const We = new Zt(v ? K - Z : 0.012, Le - ue, v ? 0.012 : K - Z),
          Ge = (Z + K) / 2,
          ie = (ue + Le) / 2;
        (v
          ? We.translate(Ge, ie, de * (R / 2 + 0.005))
          : We.translate(de * (R / 2 + 0.005), ie, Ge),
          Y.push(We));
      };
    for (const Z of [-1, 1])
      (Q(0.13, T - 0.13, 0.16, 0.95, Z),
        Q(0.13, T - 0.13, 1.05, 1.5, Z),
        Q(0.13, T - 0.13, 1.6, C - 0.18, Z));
    const se = kd(Y.map((Z) => m(Z)));
    {
      const Z = se.attributes.position,
        K = se.attributes.normal,
        ue = se.attributes.uv,
        Le = C + 0.02;
      for (let de = 0; de < Z.count; de++) {
        const We = v ? Z.getX(de) : Z.getZ(de),
          Ge = v ? K.getZ(de) : K.getX(de);
        let ie = We / T;
        (Ge < -0.5 && (ie = 1 - ie), ue.setXY(de, ie, Z.getY(de) / Le));
      }
      ue.needsUpdate = !0;
    }
    const ee = new rt(se, O);
    ((ee.castShadow = ee.receiveShadow = !0), (ee.name = "leaf"), L.add(ee));
    const re = s("brass_aged"),
      Ee = T - 0.09;
    for (const Z of [-1, 1]) {
      const K = new rt(new qs(0.03, 16, 12), re),
        ue = new rt(new Zt(v ? 0.05 : 0.006, 0.16, v ? 0.006 : 0.05), re);
      (v
        ? (K.position.set(Ee, 1, Z * (R / 2 + 0.05)),
          ue.position.set(Ee, 1, Z * (R / 2 + 0.012)))
        : (K.position.set(Z * (R / 2 + 0.05), 1, Ee),
          ue.position.set(Z * (R / 2 + 0.012), 1, Ee)),
        (K.castShadow = !0),
        ee.add(K, ue));
    }
    e.add(L);
    const oe = {
        id: b.id,
        group: L,
        leaf: ee,
        wall: _,
        opening: b,
        alongX: v,
        locked: !!b.shut || b.id === "D1",
        shut: !!b.shut,
        front: D,
        angle: 0,
        target: 0,
        speed: 3,
        center: v ? [x(S, E), 1, N] : [N, 1, x(S, E)],
        lockPos: v ? [S + b.w - 0.09, 1, N] : [N, 1, S + b.w - 0.09],
        collider: null,
        openness: 0,
        onOpen: null,
      },
      Ie = v
        ? {
            x0: S,
            x1: E,
            z0: N - 0.03,
            z1: N + 0.03,
            y0: 0,
            y1: b.head,
            on: !0,
          }
        : {
            x0: N - 0.03,
            x1: N + 0.03,
            z0: S,
            z1: E,
            y0: 0,
            y1: b.head,
            on: !0,
          };
    (t.push(Ie),
      (oe.collider = Ie),
      (oe.open = (Z = 1, K = !1) => {
        ((oe.target = Z), K && ((oe.angle = Z * oe.maxAngle), X()));
      }),
      (oe.maxAngle = 1.75),
      (oe.dir =
        b.swing ??
        { D1: -1, D2: -1, D3: -1, D4: 1, D5: 1, D6: -1 }[b.id] ??
        1));
    function X() {
      ((L.rotation.y = (v ? -1 : 1) * oe.dir * oe.angle),
        (oe.collider.on = oe.angle < 0.55));
    }
    ((oe.update = (Z) => {
      const K = oe.target * oe.maxAngle;
      if (Math.abs(K - oe.angle) > 0.001) {
        const ue = Math.sign(K - oe.angle),
          Le = Math.abs(K - oe.angle);
        ((oe.angle +=
          ue * Math.min(Le, oe.speed * Z * (0.35 + 0.65 * Math.min(1, Le)))),
          X());
      }
    }),
      (oe.apply = X),
      (oe.shakeT = 0),
      (oe.shakeA = 0),
      (oe.rattle = (Z = 0.05) => {
        ((oe.shakeA = Z), (oe.shakeT = 0));
      }),
      p.push((Z) => {
        oe.shakeA > 5e-4 &&
          ((oe.shakeT += Z),
          (oe.shakeA *= Math.exp(-Z * 7)),
          (L.rotation.y =
            (v ? -1 : 1) *
            oe.dir *
            (oe.angle + Math.sin(oe.shakeT * 46) * oe.shakeA)),
          oe.shakeA <= 5e-4 && X());
      }),
      p.push(oe.update),
      (n[b.id] = oe));
  }
  function y(_, b, S, E, v) {
    const T = new ni();
    ((T.name = "window_" + b.id), e.add(T));
    const C = v ? (_.z0 + _.z1) / 2 : (_.x0 + _.x1) / 2;
    _.x1 - _.x0 < _.z1 - _.z0 ? _.x1 - _.x0 : _.z1 - _.z0;
    const R = b.w,
      L = b.head - b.sill,
      V = s("trim_ivory"),
      N = (S + E) / 2,
      D = (b.sill + b.head) / 2,
      O = 0.055,
      B = 0.05,
      Y = (re, Ee, oe, Ie) => {
        const X = new Zt(v ? re : B, Ee, v ? B : re),
          Z = new rt(X, V);
        ((Z.castShadow = Z.receiveShadow = !0),
          v
            ? Z.position.set(N + oe, D + Ie, C)
            : Z.position.set(C, D + Ie, N + oe),
          T.add(Z));
      };
    (Y(O, L, -R / 2 + O / 2, 0),
      Y(O, L, R / 2 - O / 2, 0),
      Y(R, O, 0, L / 2 - O / 2),
      Y(R, O, 0, -L / 2 + O / 2));
    const Q = Math.max(2, Math.round(R / 0.8));
    for (let re = 1; re < Q; re++) Y(0.035, L, -R / 2 + (R / Q) * re, 0);
    (Y(R, 0.035, 0, L * 0.18), Y(R, 0.035, 0, -L * 0.2));
    {
      const re = new Zt(v ? R + 0.2 : 0.16, 0.04, v ? 0.16 : R + 0.2),
        Ee = new rt(re, V);
      Ee.castShadow = Ee.receiveShadow = !0;
      const oe = _.a === "ext",
        Ie = v ? (oe ? _.z1 : _.z0) : oe ? _.x1 : _.x0,
        X = oe ? 1 : -1;
      (v
        ? Ee.position.set(N, b.sill + 0, Ie + X * 0.06)
        : Ee.position.set(Ie + X * 0.06, b.sill, N),
        T.add(Ee));
    }
    const se = new Sl({
        color: 10466488,
        roughness: 0.12,
        metalness: 0,
        transmission: 0,
        transparent: !0,
        opacity: 0.18,
        side: En,
        depthWrite: !1,
      }),
      ee = new rt(new rs(R, L), se);
    if (
      (v || (ee.rotation.y = Math.PI / 2),
      v ? ee.position.set(N, D, C) : ee.position.set(C, D, N),
      (ee.name = "glass_" + b.id),
      (ee.userData.window = b.id),
      b.boarded || T.add(ee),
      v
        ? d(S, 0, C - 0.04, E, b.head, C + 0.04)
        : d(C - 0.04, 0, S, C + 0.04, b.head, E),
      b.boarded)
    ) {
      const re = _.a === "ext",
        Ee = v ? (re ? _.z1 : _.z0) : re ? _.x1 : _.x0,
        oe = re ? 1 : -1,
        Ie = 6,
        X = gS(b.id.charCodeAt(1) * 977);
      for (let Z = 0; Z < Ie; Z++) {
        const K =
            b.sill - 0.1 + ((L + 0.2) * (Z + 0.5)) / Ie + (X() - 0.5) * 0.03,
          ue = R + 0.5 + X() * 0.3,
          Le = 0.035,
          de = new Zt(v ? ue : Le, 0.2, v ? Le : ue),
          We = new rt(de, s("boards_barricade"));
        We.castShadow = We.receiveShadow = !0;
        const Ge = (X() - 0.5) * 0.06;
        (v
          ? (We.position.set(
              N + (X() - 0.5) * 0.2,
              K,
              Ee + oe * (0.03 + (Z % 2) * 0.035),
            ),
            (We.rotation.z = Ge))
          : (We.position.set(
              Ee + oe * (0.03 + (Z % 2) * 0.035),
              K,
              N + (X() - 0.5) * 0.2,
            ),
            (We.rotation.x = Ge)),
          We.updateMatrix(),
          Op(de, We.matrix, Z * 1.7),
          T.add(We));
      }
    }
    i[b.id] = {
      id: b.id,
      group: T,
      glass: ee,
      center: v ? [N, D, C] : [C, D, N],
      alongX: v,
      opening: b,
      wall: _,
      interiorNormal: v
        ? [0, 0, _.a === "ext" ? 1 : -1]
        : [_.a === "ext" ? 1 : -1, 0, 0],
    };
  }
  const w = [];
  for (const _ of a) {
    const b = Bd(_.x0, _.y, _.z0, _.x1, _.y + 0.3, _.z1),
      S = new rt(
        b,
        [null, null, s("dark_room"), s("ceiling_plaster"), null, null].map(
          (E) => E || s("dark_room"),
        ),
      );
    ((S.castShadow = !0),
      (S.receiveShadow = !0),
      (S.name = "ceiling"),
      (S.userData.ceiling = !0),
      e.add(S),
      w.push(S));
  }
  for (const [_, b] of l) {
    const S = kd(b),
      E = new rt(S, _);
    ((E.castShadow = !0),
      (E.receiveShadow = !0),
      (E.name = "shell:" + (_.userData.catalog || "mat")),
      e.add(E));
  }
  return (
    r.scene.add(e),
    {
      group: e,
      colliders: t,
      doors: n,
      windows: i,
      ceilings: w,
      update(_) {
        for (const b of p) b(_);
      },
    }
  );
}
