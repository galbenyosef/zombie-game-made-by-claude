// assets/metro-xgLUk92P 03 — math
// Lines 586-906 of readable/assets/metro-xgLUk92P.pretty.js (statement-aligned).
function buildMetroLights(c, a) {
  const o = [];
  let s = 0;
  const f = [],
    h = [];
  for (let k = 0; k < 8; k++) {
    const R = new Do(16777215, 0, 10, 2);
    ((R.name = "metro_pt" + k),
      (R.castShadow = !1),
      R.position.set(0, -200, 0),
      a.add(R),
      f.push({ l: R, src: null, next: null, k: 0 }));
  }
  for (let k = 0; k < 3; k++) {
    const R = new Eo(16777215, 0, 10, 0.9, 0.6, 2);
    ((R.name = "metro_spot" + k),
      R.position.set(0, -200, 0),
      (R.castShadow = !0),
      R.shadow.mapSize.set(1024, 1024),
      (R.shadow.bias = -6e-4),
      (R.shadow.normalBias = 0.02),
      (R.shadow.camera.near = 0.15),
      (R.shadow.camera.far = 14),
      R.target.position.set(0, -201, 0),
      a.add(R, R.target),
      h.push({ l: R, src: null, next: null, k: 0 }));
  }
  const d = Array.from({ length: H0 }, () => ({ src: null, next: null, k: 0 })),
    l = {
      srcs: o,
      pts: f,
      spots: h,
      slots: d,
      zoneK: Se,
      surgeT: -1,
      power: 1,
      cam: new ot(),
      lensZone: null,
      fixId() {
        return s++;
      },
      add(k) {
        return (
          (k.b ||= k.a),
          (k.state ||= "on"),
          (k.fix ??= -1),
          (k.r ??= 0.03),
          (k.lvl = k.state === "off" ? 0 : 1),
          (k.ph = k.ph ?? ((o.length * 0.6180339) % 1) * 100),
          (k.mid = [
            (k.a[0] + k.b[0]) / 2,
            (k.a[1] + k.b[1]) / 2,
            (k.a[2] + k.b[2]) / 2,
          ]),
          (k.d2 = 1e9),
          (k.i = o.length),
          o.push(k),
          k
        );
      },
      flicker(k, R) {
        Se[k] = Math.max(0, Math.min(1, R));
      },
      surge() {
        l.surgeT = 0;
      },
      update: C,
      levelOf: e,
      torch: null,
      prepare(k) {
        k.updateMatrixWorld();
        for (let W = 0; W < f.length; W++) {
          const Y = f[W].l;
          Y.intensity > 0
            ? (v.copy(Y.position).applyMatrix4(k.matrixWorldInverse),
              de[W].set(v.x, v.y, v.z, 1))
            : (de[W].w = 0);
        }
        const R = l.torch?.();
        R
          ? (R.updateMatrixWorld(),
            v
              .setFromMatrixPosition(R.matrixWorld)
              .applyMatrix4(k.matrixWorldInverse),
            Pe.set(v.x, v.y, v.z, 1))
          : (Pe.w = 0);
      },
    },
    i = (k) => k - Math.floor(k),
    t = (k) => i(Math.sin(k * 127.1 + 311.7) * 43758.5453);
  function e(k, R) {
    let W = 0;
    const Y = k.state;
    if (Y === "off") W = 0;
    else if (Y === "on") W = 1 + 0.012 * Math.sin(R * 6.3 + k.ph);
    else if (Y === "flicker") {
      const Z = Math.floor(R * 1.3 + k.ph),
        H = i(R * 1.3 + k.ph),
        V = t(Z + k.i * 13.1);
      V < 0.35
        ? (W = 0)
        : V < 0.75
          ? (W = t(Math.floor(R * 23 + k.ph * 7) + k.i) > 0.45 ? 0.95 : 0.06)
          : (W = H < 0.15 ? (t(Math.floor(R * 30) + k.i) > 0.5 ? 1 : 0.1) : 1);
    } else if (Y === "dying") {
      const Z = Math.floor(R * 0.45 + k.ph),
        H = i(R * 0.45 + k.ph);
      ((W =
        t(Z * 3.7 + k.i) < 0.22 && H > 0.3 && H < 0.62
          ? t(Math.floor(R * 18) + k.i * 3) > 0.6
            ? 0.8
            : 0.05
          : 1),
        (W *= 0.85 + 0.03 * Math.sin(R * 40 + k.ph)));
    }
    const $ = Se[k.zone] || 0;
    if ($ > 0 && W > 0) {
      const Z = t(Math.floor(R * (8 + 14 * $) + k.ph * 3) + k.i * 1.7);
      (Z < $ * 0.75 && (W *= Z < $ * 0.3 ? 0.03 : 0.35),
        (W *= 1 - 0.25 * $ * (0.5 + 0.5 * Math.sin(R * 50 + k.i))));
    }
    if (l.surgeT >= 0 && W > 0) {
      const Z = l.surgeT;
      W *=
        Z < 0.12
          ? 1 + 8.5 * Z
          : Z < 0.9
            ? 2 + 0.18 * Math.sin(Z * 140 + k.i)
            : Z < 1.3
              ? 2 - (1.75 * (Z - 0.9)) / 0.4
              : 0.25 + 0.75 * Math.min(1, (Z - 1.3) / 0.9);
    }
    return Math.max(0, W) * l.power;
  }
  const n = (k, R) => {
      const W = k.a[0],
        Y = k.a[1],
        $ = k.a[2],
        Z = k.b[0] - W,
        H = k.b[1] - Y,
        V = k.b[2] - $,
        I = Z * Z + H * H + V * V;
      let E =
        I > 1e-6 ? ((R.x - W) * Z + (R.y - Y) * H + (R.z - $) * V) / I : 0;
      E = E < 0 ? 0 : E > 1 ? 1 : E;
      const N = W + Z * E - R.x,
        Q = Y + H * E - R.y,
        K = $ + V * E - R.z;
      return N * N + Q * Q + K * K;
    },
    r = (k, R) => k.d2 - R.d2,
    u = [],
    b = [],
    M = [],
    x = [];
  let w = 0,
    p = 1e9,
    S = 1e9,
    y = 1e9;
  function L(k, R) {
    for (const W of k) {
      const Y = W.next || W.src;
      if (!(Y && R.includes(Y)))
        for (const $ of R) {
          let Z = !1;
          for (const H of k)
            if ((H.next || H.src) === $) {
              Z = !0;
              break;
            }
          if (!Z) {
            W.next = $;
            break;
          }
        }
    }
  }
  const v = new ot();
  function C(k, R, W) {
    const Y = W.position;
    (l.cam.copy(Y),
      l.surgeT >= 0 && ((l.surgeT += k), l.surgeT > 2.2 && (l.surgeT = -1)));
    for (const I of o)
      ((I.lvl = e(I, R)),
        I.fix >= 0 &&
          Mo[I.fix >> 2].setComponent(I.fix & 3, I.lvl * (I.glowGain ?? 1)));
    w -= k;
    const $ = (Y.x - p) ** 2 + (Y.z - S) ** 2 + (Y.y - y) ** 2,
      Z = $ > 1.5,
      H = $ > 25;
    if (((y = Y.y), w <= 0 || Z)) {
      ((w = 0.2), (p = Y.x), (S = Y.z), (u.length = 0));
      for (const E of o)
        E.state !== "off" &&
          ((E.d2 = n(E, Y) / (E.weight || 1)),
          E.d2 < (E.reach + 60) ** 2 && u.push(E));
      (u.sort(r), (b.length = 0), (M.length = 0), (x.length = 0));
      const I = Ye[(l.lensZone && l.lensZone(Y)) || "out"] || Ye.out;
      for (const E of u)
        if ((b.length < H0 && b.push(E), !!I.includes(E.zone))) {
          if (E.spot && x.length < h.length && E.d2 < 900) {
            x.push(E);
            continue;
          }
          E.point && M.length < f.length && E.d2 < 1600 && M.push(E);
        }
      if ((L(d, b), L(f, M), L(h, x), H))
        for (const E of [d, f, h])
          for (const N of E)
            (N.next && ((N.src = N.next), (N.next = null)),
              (N.k = N.src ? 1 : 0));
    }
    const V = (I, E, N) => {
      I.next && I.next !== I.src
        ? ((I.k = Math.max(0, I.k - k * E)),
          I.k === 0 && ((I.src = I.next), (I.next = null)))
        : (I.next === I.src && (I.next = null),
          I.src && (I.k = Math.min(1, I.k + k * N)));
    };
    for (const I of f) V(I, 5, 3);
    for (const I of h) V(I, 5, 3);
    for (const I of o) ((I.realP = 0), (I.realS = 0));
    for (let I = 0; I < f.length; I++) {
      const E = f[I],
        N = E.src,
        Q = E.l;
      if (!N) {
        ((Q.intensity = 0), (de[I].w = 0));
        continue;
      }
      const K = N.point;
      (K.at
        ? Q.position.set(K.at[0], K.at[1], K.at[2])
        : Q.position.set(N.mid[0], N.mid[1] - (K.below ?? 0.12), N.mid[2]),
        Q.color.setRGB(N.col[0], N.col[1], N.col[2]),
        (Q.distance = K.dist ?? N.reach),
        (Q.intensity = (K.cd ?? N.cd) * N.lvl * E.k),
        (N.realP = E.k * ((K.cd ?? N.cd) / N.cd)));
    }
    for (const I of h) {
      const E = I.src,
        N = I.l;
      if (!E) {
        N.intensity = 0;
        continue;
      }
      const Q = E.spot;
      (N.position.set(
        Q.at ? Q.at[0] : E.mid[0],
        Q.at ? Q.at[1] : E.mid[1],
        Q.at ? Q.at[2] : E.mid[2],
      ),
        N.target.position.set(
          N.position.x + Q.dir[0],
          N.position.y + Q.dir[1],
          N.position.z + Q.dir[2],
        ),
        N.color.setRGB(E.col[0], E.col[1], E.col[2]),
        (N.angle = Q.angle ?? 1),
        (N.penumbra = Q.pen ?? 0.7),
        (N.distance = Q.dist ?? E.reach),
        (N.intensity = Q.cd * E.lvl * I.k),
        (E.realS = I.k));
    }
    for (const I of d) V(I, 6, 4);
    for (let I = 0; I < H0; I++) {
      const E = d[I],
        N = E.src;
      if (!N || E.k <= 0 || N.lvl <= 0.001) {
        we[I].w = 0;
        continue;
      }
      const Q = E.k * (1 - N.realS);
      (we[I].set(N.a[0], N.a[1], N.a[2], N.cd * N.lvl * Q),
        zo[I].set(N.b[0], N.b[1], N.b[2], N.reach),
        yo[I].set(N.col[0], N.col[1], N.col[2], 1),
        go[I].set(N.box[0], N.box[1], N.box[2], N.r),
        N.dir
          ? ie[I].set(
              N.dir[0],
              N.dir[1],
              N.dir[2],
              (N.lobe ?? 0) + Math.min(0.98, N.dirK ?? 0.92),
            )
          : N.down
            ? ie[I].set(0, -1, 0, (N.lobe ?? 1) + 0.9)
            : (ie[I].w = 0),
        bo[I].set(N.box[3], N.box[4], N.box[5], N.spec ?? 1));
    }
  }
  return l;
}
const Qo = [
  "metro_tile_cream",
  "metro_tile_teal",
  "metro_concrete",
  "metro_paint",
  "metro_floor",
  "metro_steel",
  "metro_enamel",
  "metro_stone",
  "metro_stainless",
  "metro_lining",
  "tactile_paving",
  "concrete_grey",
  "rust_metal",
  "wood_oak_pale",
  "wood_walnut",
  "leather_brown",
  "wool_grey",
  "linen_stained",
  "iron_black",
  "steel_gun",
  "paper_old",
  "blood_dark",
  "street_asphalt",
  "sidewalk_tiles",
  "upholstery_green",
  "car_burnt",
  "boards_barricade",
];
