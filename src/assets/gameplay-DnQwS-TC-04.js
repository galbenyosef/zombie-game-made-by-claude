// assets/gameplay-DnQwS-TC 04 — math
// Lines 1031-1222 of readable/assets/gameplay-DnQwS-TC.pretty.js (statement-aligned).
function ti(o) {
  const t = {
      hp: 100,
      maxHp: 100,
      dead: !1,
      lastHurt: -99,
      invuln: 0,
      onPlayerDeath: null,
      onPlayerHurt: null,
      godmode: !1,
    },
    i = new Ht(),
    e = new Ht();
  ((t.raycastWorld = (n, r, h = 80) => {
    let a = h,
      y = null;
    for (const g of o.world.colliders) {
      if (g.on === !1) continue;
      const w = Xs(n, r, g, i);
      w < a && w > 1e-4 && ((a = w), (y = i.clone()));
    }
    if (r.y < -1e-5) {
      const g = o.world.floorAt;
      if (g) {
        const w = Js(n, r, a, g);
        w < a && ((a = w), (y = new Ht(0, 1, 0)));
      } else {
        const w = o.world.groundAt ? o.world.groundAt(n.x, n.z, n.y - 1.6) : 0,
          _ = (w - n.y) / r.y;
        _ > 0 && _ < a && ((a = _), (y = new Ht(0, 1, 0)));
      }
    }
    if (r.y > 1e-5 && o.shell) {
      const g = (3 - n.y) / r.y;
      g > 0 && g < a && ((a = g), (y = new Ht(0, -1, 0)));
    }
    return a < h ? { t: a, normal: y } : null;
  }),
    (t.shoot = (n) => {
      const { origin: r, muzzle: h, player: a } = n,
        y = e.copy(n.dir),
        g = n.spread ?? 0.008;
      ((y.x += ge(-g, g)),
        (y.y += ge(-g, g)),
        (y.z += ge(-g, g)),
        y.normalize());
      const w = y.clone(),
        _ = o.fx,
        c = o.audio,
        k = h || r;
      _.muzzleFlash(k, n.muzzleDir || w, a ? 0.9 : 1.15);
      const K = new Ht(1, 0, 0).applyQuaternion(
        a
          ? o.camera.quaternion
          : new ze().setFromAxisAngle(new Ht(0, 1, 0), Math.atan2(w.x, w.z)),
      );
      (_.casing(
        k
          .clone()
          .addScaledVector(w, -0.07)
          .add(new Ht(0, -0.01, 0)),
        K.clone().multiplyScalar(a ? 1 : -1),
      ),
        c.play(Math.random() < 0.5 ? "gun_pistol_1" : "gun_pistol_2", {
          pos: a ? void 0 : [k.x, k.y, k.z],
          vol: a ? 1 : 0.9,
          rate: ge(0.96, 1.04),
          reverb: 0.5,
        }),
        c.duck("amb", 0.35, 0.9));
      const Y = t.raycastWorld(r, w, 70);
      let F = null,
        X = Y ? Y.t : 70;
      for (const U of o.zombies.list) {
        if (U.dead) continue;
        const N = U.kit.hitTest(r, w, X + 0.5);
        N && N.distance < X && ((X = N.distance), (F = { a: U, h: N }));
      }
      o.zombies.alertAt(k, 18, a ? "player" : "akane");
      const J = r.clone().addScaledVector(w, X);
      if ((o.fx.tracer && o.fx.tracer(k, J), F)) {
        const { a: U, h: N } = F,
          T = N.point ? N.point.clone() : J,
          f =
            (N.zone === "head" ? 3.2 : N.zone === "legs" ? 0.6 : 1) *
            (n.damage ?? 1);
        return (
          _.impactBody(
            T,
            w
              .clone()
              .multiplyScalar(0.8)
              .add(new Ht(0, 0.15, 0)),
            N.zone === "head" ? 1.6 : 1,
          ),
          c.play("zombie_hit_wet", {
            pos: [T.x, T.y, T.z],
            vol: 0.8,
            rate: ge(0.92, 1.1),
          }),
          U.hit(f, N.zone, T, w, a ? "player" : "akane"),
          a && o.hud && o.hud.hitmarker?.(N.zone === "head"),
          { hit: "zombie", zone: N.zone, point: T }
        );
      }
      if (Y) {
        const U = r.clone().addScaledVector(w, Y.t);
        return (
          _.impactWorld(
            U,
            Y.normal,
            Y.normal.y > 0.5 ? [0.35, 0.28, 0.2] : [0.55, 0.5, 0.42],
          ),
          { hit: "world", point: U }
        );
      }
      return { hit: "none" };
    }),
    (t.wounds = ks()));
  const s = () => {
    t.hp = Math.round(t.maxHp * (1 - Math.min(t.wounds.n, Fe + 1) / (Fe + 1)));
  };
  let l = null;
  return (
    (t.hurt = (n, r = null) => {
      if (!(t.dead || t.godmode || t.invuln > 0) && t.wounds.hit(o.time)) {
        (s(),
          (t.lastHurt = o.time),
          (t.invuln = 0.7),
          (o.post.hurt = Math.min(1, o.post.hurt + 0.6)),
          (o.player.shake += 0.9 + 0.3 * t.wounds.n),
          (o.player.lean += (Math.random() - 0.5) * 0.12));
        {
          const h = ["s_hurt1", "s_hurt2", "s_hurt3"].filter(
            (a) => a !== t._lastCry,
          );
          ((t._lastCry = h[Math.floor(Math.random() * h.length)]),
            o.audio.play(t._lastCry, {
              vol: 0.8 + 0.08 * t.wounds.n,
              bus: "voice",
            }));
        }
        (t.onPlayerHurt && t.onPlayerHurt(n, r),
          t.wounds.dead &&
            ((t.hp = 0),
            (t.dead = !0),
            l?.stop?.(0.3),
            (l = null),
            t.onPlayerDeath && t.onPlayerDeath()));
      }
    }),
    (t.heal = () => {
      (t.wounds.reset(),
        s(),
        (t.dead = !1),
        (t.invuln = 2),
        (o.post.hurt = 0),
        l?.stop?.(0.3),
        (l = null));
    }),
    (t.update = (n) => {
      ((t.invuln = Math.max(0, t.invuln - n)),
        t.dead || (t.wounds.update(n, o.time), s()));
      const r = [0, 0.2, 0.42, 0.72, 1][Math.min(t.wounds.n, 4)];
      o.post.hurt = Math.max(o.post.hurt - n * 0.55, r);
      const h = !t.dead && t.wounds.n >= Fe;
      h && !l
        ? (l = o.audio.play("heartbeat", { vol: 0.5, loop: !0 }))
        : !h && l && (l.stop?.(0.6), (l = null));
    }),
    t
  );
}
const Ge = pt,
  ls = new pt(),
  hs = new pt(),
  St = (o = 0, t = 1) => o + Math.random() * (t - o),
  je = (o, t, i) => (o < t ? t : o > i ? i : o),
  De = (o, t) => {
    let i = t - o;
    for (; i > Math.PI;) i -= 2 * Math.PI;
    for (; i < -Math.PI;) i += 2 * Math.PI;
    return i;
  },
  be = (o, t, i, e) => o + (t - o) * (1 - Math.exp(-i * e)),
  cs = {
    lanky: { hp: 2.2, walk: 1.05, chase: 1.7, dmg: 16, reach: 1.2, turn: 4.2 },
    brute: { hp: 6, walk: 0.8, chase: 1.25, dmg: 26, reach: 1.3, turn: 3.2 },
    gown: { hp: 2, walk: 1.3, chase: 2.7, dmg: 13, reach: 1.15, turn: 6 },
    soldier: { hp: 3.2, walk: 1, chase: 3, dmg: 20, reach: 1.2, turn: 4.5 },
    nun: { hp: 2, walk: 1.15, chase: 2.8, dmg: 12, reach: 1.1, turn: 6.5 },
  };
