import { V as C } from "./index-DaQlAVPp.js";
const n = C;
function _(i) {
  const e = i.player,
    k = i.weapons,
    I = [],
    o = {
      log: I,
      t: 0,
      enabled: !0,
      shotCd: 0,
      stuck: 0,
      lastPos: new n(),
      goal: null,
    },
    h = (a) => {
      const r = e.eyePos,
        f = a.x - r.x,
        p = a.y - r.y,
        u = a.z - r.z,
        y = Math.atan2(-f, -u),
        M = Math.atan2(p, Math.hypot(f, u));
      let w = y - e.yaw;
      for (; w > Math.PI;) w -= 2 * Math.PI;
      for (; w < -Math.PI;) w += 2 * Math.PI;
      ((e.yaw += w * 0.35), (e.pitch += (M - e.pitch) * 0.35));
    },
    m = (a) => {
      I.push(`${i.time.toFixed(1)}s [${i.script.beat}] ${a}`);
    };
  return (
    (o.tick = (a) => {
      if (
        !o.enabled ||
        i.combat.dead ||
        ((o.t += a), (o.shotCd -= a), e.frozen) ||
        e.speedMul === 0
      )
        return;
      const r = i.script,
        f = i.npc,
        p = r.beat;
      if (e.deck && o.deckWalk) {
        const s = i.zombies
          .alive()
          .filter((t) => t.pos.distanceTo(e.pos) < 1.6)
          .sort((t, l) => t.pos.distanceTo(e.pos) - l.pos.distanceTo(e.pos))[0];
        for (const t of ["KeyW", "KeyS", "KeyA", "KeyD"])
          i.input.held.delete(t);
        if (s) {
          const t = e.forward(new n());
          t.y = 0;
          const l = s.pos.clone().sub(e.pos);
          ((l.y = 0), t.dot(l) > 0 && i.input.held.add("KeyS"));
        }
      }
      if (e.mount || e.deck) {
        let s = null,
          t = 1e9;
        for (const l of i.zombies.alive()) {
          const c = l.pos.distanceTo(e.pos);
          if (c >= t || c > 26) continue;
          const T = e.eyePos,
            d = l.kit.headWorld(new n()),
            W = d.clone().sub(T),
            x = W.length();
          (W.divideScalar(x),
            i.combat.raycastWorld(T, W, x) || ((s = l), (t = c)));
        }
        if (s && k.has.pistol) {
          const l = o.human,
            c = l ? s.kit.chestWorld(new n()) : s.kit.headWorld(new n());
          (l &&
            ((o.noiseT = (o.noiseT || 0) - a),
            (o.noiseT <= 0 || !o.noise) &&
              ((o.noiseT = 0.35),
              (o.noise = new n(
                (Math.random() - 0.5) * 2,
                (Math.random() - 0.5) * 2,
                (Math.random() - 0.5) * 2,
              ).multiplyScalar(l.noise))),
            c.add(o.noise)),
            h(c),
            o.shotCd <= 0 &&
              k.canFire() &&
              (k.fire(),
              (o.shotCd = l ? l.gap * (0.7 + Math.random() * 0.6) : 0.42)),
            k.ammo === 0 && k.reload());
        }
        return;
      }
      if (p === "yard" && r.bikeRec) {
        const s = r.bikeRec.pos();
        (o.walk(new n(s[0], 0, s[2]), a, 0.6), h(new n(s[0], 1.2, s[2])));
        return;
      }
      if (o.run !== r.run) {
        o.run = r.run;
        for (const s of Object.keys(o)) s.startsWith("used_") && delete o[s];
      }
      for (const s of i.interact.items) {
        if (s.enabled && !s.enabled(i)) continue;
        const t = typeof s.pos == "function" ? s.pos() : s.pos;
        Math.hypot(e.pos.x - t[0], e.pos.z - t[2]) < 1.3 &&
          !o["used_" + s.id] &&
          ((o["used_" + s.id] = !0),
          m("use " + s.id),
          i.events.emit("use", s.id),
          s.onUse && s.onUse(i));
      }
      const u =
        p === "bedroom"
          ? "flashlight"
          : p === "study" || p === "guns"
            ? "pistol"
            : null;
      if (u && !o["used_" + u]) {
        o.wantT = (o.wantT || 0) + a;
        const s = i.interact.items.find((t) => t.id === u);
        if (s) {
          const t = typeof s.pos == "function" ? s.pos() : s.pos;
          (o.walk(new n(t[0], 0, t[2]), a, 0.9), h(new n(t[0], t[1], t[2])));
        }
        if (
          (o.wantT > 25 &&
            ((o["used_" + u] = !0),
            m("fallback use " + u),
            i.events.emit("use", u)),
          s)
        )
          return;
      }
      let y = !1;
      if (i.section === 3 && !e.frozen) {
        const s = i.interact.items.find(
          (t) => t.bot && (!t.enabled || t.enabled(i)),
        );
        if (s) {
          const t = typeof s.pos == "function" ? s.pos() : s.pos;
          if (
            (Math.hypot(e.pos.x - t[0], e.pos.z - t[2]) <
            Math.max(1.4, (s.radius ?? 1.6) - 0.3)
              ? o["used_" + s.id] ||
                ((o["used_" + s.id] = !0), m("use " + s.id), s.onUse?.(i))
              : (o.walk(new n(t[0], 0, t[2]), a, 0.5),
                h(new n(t[0], t[1], t[2])),
                (y = !0)),
            !i.zombies
              .alive()
              .some((c) => c.alerted && c.pos.distanceTo(e.pos) < 6))
          )
            return;
        }
        if (p === "ashwood" && r.flags?.doorsOpen && !r.flags?.boarded) {
          const t = i.rooms.part3?.props?.metro?.points?.ashwood || {},
            l = t.board || [20, 217.6];
          if (
            (o.walk(new n(l[0] - 0.6, 0, 219.3), a, 0.25),
            (y = !0),
            !i.zombies
              .alive()
              .some((c) => c.alerted && c.pos.distanceTo(e.pos) < 4))
          ) {
            h(new n(l[0], e.pos.y + 1.5, 216));
            return;
          }
        }
        (p === "park" ||
          p === "parkgate" ||
          p === "chopper" ||
          (p === "ashwood" && r.flags?.onPlatform && !r.flags?.doorsOpen)) &&
          f.pos.distanceTo(e.pos) > 2.4 &&
          (o.walk(f.pos, a, 2), (y = !0));
      }
      if (p === "church_in") {
        (o.walk(new n(0, 0, 44.5), a, 0.4), h(new n(0, 1.4, 48)));
        return;
      }
      const M = i.rooms.garden?.props?.churchIn?.points || {};
      if (p === "nave" && !e.frozen) {
        const s = M.approach || [0, 52.6],
          t = M.priest || [0, 57.3];
        (o.walk(new n(s[0], 0, s[1] + 0.6), a, 0.2), h(new n(t[0], 1, t[1])));
        return;
      }
      let w = !1;
      if (p === "burst" && !e.frozen) {
        const s = M.backIn || [4.25, 59.8],
          t = M.backOut || [4.25, 63.2];
        if (r.flags?.backOpen) {
          if (((o.openT ??= i.time), i.time - o.openT >= (o.linger || 0))) {
            if (e.pos.z < s[1] - 0.2 && Math.abs(e.pos.x - s[0]) > 0.35) {
              (o.walk(new n(s[0], 0, s[1]), a, 0.15),
                h(new n(s[0], 1.2, s[1] + 2)));
              return;
            }
            (o.walk(new n(t[0] - 0.5, 0, t[1] + 0.9), a, 0.15),
              h(new n(t[0] - 0.5, 1.3, t[1] + 3)));
            return;
          }
        } else o.openT = null;
        (o.walk(new n(1.7, 0, 56.1), a, 0.5), (w = !0));
      }
      if (p === "house") {
        const s = i.rooms.garden?.props?.house,
          t = s?.points || {},
          l = t.bedSide || [3.9, 204.6],
          c = t.inside || [6, 201.2];
        if (r.flags?.bedOk && !r.flags?.lying) {
          o.walk(new n(l[0], 0, l[1]), a, 0.15);
          return;
        }
        if (!(i.roomAt(e.pos.x, e.pos.z) === "house" && e.pos.z > 200.9))
          (o.walk(new n(c[0] - 0.3, 0, c[1] + 0.6), a, 0.3), (w = !0));
        else if (r.flags?.hBar) {
          if (
            (k.on &&
              !r.flags?.lying &&
              i.time - (o.lightT ?? 0) > 2 &&
              ((o.lightT = i.time),
              r.flags?.akaneDone &&
                !i.zombies
                  .alive()
                  .some(
                    (d) =>
                      i.roomAt(d.pos.x, d.pos.z) === "house" && d.pos.z > 200.3,
                  ) &&
                ((k.on = !1), m("light off"))),
            !i.zombies
              .alive()
              .some(
                (d) =>
                  i.roomAt(d.pos.x, d.pos.z) === "house" && d.pos.z > 200.3,
              ))
          ) {
            const d = t.hide || [c[0] - 0.6, c[1] + 1.2];
            (o.walk(new n(d[0], 0, d[1]), a, 0.3), h(new n(7.5, 1.2, 202.6)));
            return;
          }
        } else {
          const d = s?.frontDoor?.usePos || [6, 1.2, 200.6];
          (o.walk(new n(d[0] - 0.4, 0, d[2] + 0.9), a, 0.3), (w = !0));
        }
      }
      if (
        ((p === "forest" || p === "bridge") &&
          f.pos.distanceTo(e.pos) > 2.3 &&
          (o.walk(f.pos, a, 2), (w = !0)),
        p === "finale" && r.flags?.exitOpen)
      ) {
        (o.walk(new n(11.7, 0, 16.8), a, 0.15), h(new n(12.4, 1.4, 16.95)));
        return;
      }
      let b = null,
        z = 1e9;
      const v =
        o.fwdCone && y
          ? Math.atan2(f.pos.x - e.pos.x, f.pos.z - e.pos.z)
          : null;
      for (const s of i.zombies.alive()) {
        const t = s.pos.distanceTo(e.pos);
        if (t >= z || t > 14) continue;
        if (v != null && t > 2.2) {
          let x = Math.atan2(s.pos.x - e.pos.x, s.pos.z - e.pos.z) - v;
          if (
            ((x = Math.atan2(Math.sin(x), Math.cos(x))),
            Math.abs(x) > o.fwdCone)
          )
            continue;
        }
        const l = e.eyePos,
          c = s.kit.headWorld(new n()),
          T = c.clone().sub(l),
          d = T.length();
        (T.divideScalar(d),
          i.combat.raycastWorld(l, T, d) || ((b = s), (z = t)));
      }
      if (b && k.has.pistol && !e.frozen) {
        const s = o.human,
          t = s ? b.kit.chestWorld(new n()) : b.kit.headWorld(new n());
        (s &&
          ((o.noiseT = (o.noiseT || 0) - a),
          (o.noiseT <= 0 || !o.noise) &&
            ((o.noiseT = 0.35),
            (o.noise = new n(
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2,
            ).multiplyScalar(s.noise))),
          t.add(o.noise)),
          h(t),
          o.shotCd <= 0 &&
            k.canFire() &&
            (k.fire(),
            (o.shotCd = s ? s.gap * (0.7 + Math.random() * 0.6) : 0.42)),
          k.ammo === 0 && k.reload());
        return;
      }
      if (w || y) {
        p === "burst" && h(new n(0, 1.4, 46));
        return;
      }
      if (p === "lock" && f.kneelK > 0.5) {
        const s = i.shell.doors.D1.lockPos || [5.25, 1, 4.21],
          t = new n(3.4, 0, 3.2);
        (o.walk(t, a, 0.5), h(new n(s[0], s[1], s[2])));
        return;
      }
      if (p === "finale") {
        (o.walk(new n(8.6, 0, 16.4), a, 0.5), h(new n(4.2, 1.4, 13.6)));
        return;
      }
      if (p === "firstdead" || p === "fight") {
        (o.walk(new n(6.1, 0, p === "fight" ? 15 : 12), a, 0.4),
          h(new n(6.1, 1.4, 16.5)));
        return;
      }
      new n(
        f.pos.x - Math.sin(f.yaw) * 1.9,
        0,
        f.pos.z - Math.cos(f.yaw) * 1.9,
      );
      const P = i.rooms.study?.points?.deskFront || [8.75, 0, 6.5];
      (p === "study" || p === "guns"
        ? o.walk(new n(P[0], 0, P[2]), a, 0.5)
        : f.pos.distanceTo(e.pos) > 2.3 && o.walk(f.pos, a, 2),
        p === "study" || p === "guns"
          ? e.pos.x > 8.2 && h(new n(9.5, 0.85, 6.4))
          : h(new n(f.pos.x, 1.4, f.pos.z)));
    }),
    (o.walk = (a, r, f) => {
      if (Math.hypot(a.x - e.pos.x, a.z - e.pos.z) < f) return;
      (!o.path || o.pathT < i.time - 0.6 || o.pathGoal.distanceTo(a) > 0.5) &&
        ((o.path = i.nav.path(e.pos.x, e.pos.z, a.x, a.z) || [[a.x, a.z]]),
        (o.pathI = 0),
        (o.pathT = i.time),
        (o.pathGoal = a.clone()));
      let u = o.path[Math.min(o.pathI, o.path.length - 1)];
      for (
        ;
        o.pathI < o.path.length - 1 &&
        Math.hypot(u[0] - e.pos.x, u[1] - e.pos.z) < 0.35;
      )
        u = o.path[++o.pathI];
      const y = u[0] - e.pos.x,
        M = u[1] - e.pos.z,
        w = Math.hypot(y, M) || 1;
      let b = y / w,
        z = M / w;
      if (
        ((!o.stuckRef ||
          Math.hypot(e.pos.x - o.stuckRef[0], e.pos.z - o.stuckRef[1]) >
            0.25) &&
          ((o.stuckRef = [e.pos.x, e.pos.z]), (o.stuckT = 0)),
        (o.stuckT += r),
        o.stuckT > 1 &&
          ((o.side = 0.6), (o.stuckT = 0), (o.path = null), m("unstick")),
        o.side > 0)
      ) {
        o.side -= r;
        const v = -z,
          P = b;
        ((b = b * 0.3 + v), (z = z * 0.3 + P));
        const s = Math.hypot(b, z);
        ((b /= s), (z /= s));
      }
      ((e.pos.x += b * 2.4 * r),
        (e.pos.z += z * 2.4 * r),
        e.vel.set(b * 2.4, 0, z * 2.4),
        e.resolve());
    }),
    o
  );
}
export { _ as createBot };
