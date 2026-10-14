// assets__anim-B86X8yU9 06 — hips
// Lines 2098-2228 of readable/assets__anim-B86X8yU9.pretty.js (statement-aligned).
function Rt(r, t, s, h) {
  const e = this,
    o = e.J,
    i = o.hips[1] / 1.03,
    n = e.seed,
    a = this.opts || {},
    y = e.legLen,
    l = Math.sin(s * 9 + n),
    c = Math.sin(s * 7.3 + n * 2);
  if (a.limp) {
    const f = z(0, 0.7, t),
      p = H(e);
    (r.hp.set(0, o.hips[1] * 0.55, o.hips[2]),
      e.qe(r.q[d.hips], 40 + 80 * f, 6 * f, 14 * f),
      e.posture(r, s, {
        sp: 10,
        cp: 8,
        hp: 12 - 34 * f,
        loll: 1.4,
        jaw: 0.5,
        twitch: 0,
        comp: 0,
      }));
    for (const u of [1, -1])
      (p.a
        .set(u * 0.13 * i, -y * (0.72 + 0.06 * u), -0.25 * y * f)
        .applyQuaternion(r.q[d.hips])
        .add(r.hp),
        e.leg(r, u, p.a.x, p.a.y, p.a.z, -0.4, u * 0.2, 0));
    for (const u of [1, -1])
      (e.armDir(
        r,
        u,
        u * 0.5,
        0.7,
        -0.45 + 0.15 * l,
        0,
        0.2,
        1,
        25 + 10 * l,
        0,
      ),
        e.hand(r, u, 20, 0, 0));
    return;
  } else if (a.crash) {
    const f = z(0, 0.9, t);
    (r.hp.set(0, o.hips[1] * 0.85, o.hips[2]),
      e.qe(r.q[d.hips], 72 - 30 * f + 3 * c, 4 * l, 6 * c),
      e.posture(r, s, {
        sp: 8,
        cp: 6,
        hp: -28 + 18 * f,
        loll: 0.4,
        jaw: 0.55,
        twitch: 0,
        comp: 0.4,
      }));
    for (const p of [1, -1]) {
      const u = (1 - f) * 0.5,
        w = p > 0 ? 0.06 : -0.04;
      e.leg(
        r,
        p,
        p * 0.13 * i,
        o.hips[1] * 0.85 - y * (0.62 + 0.18 * f + w),
        (-u * y + 0.08 * f) * i,
        -0.4 + 0.3 * f,
        p * 0.2,
        0,
      );
    }
    for (const p of [1, -1]) {
      const u = 0.35 - 0.8 * f,
        w = 0.85 - 0.2 * f;
      (e.armDir(
        r,
        p,
        p * (0.35 + 0.25 * f),
        u + 0.08 * l * p,
        w,
        0,
        1,
        0.3,
        20 + 15 * f + 8 * c,
        0,
      ),
        e.hand(r, p, -30, 0, 0));
    }
  } else {
    const f = z(0, 0.85, t);
    (r.hp.set(0, o.hips[1] * 0.86, o.hips[2] - 0.03 * i),
      e.qe(r.q[d.hips], 10 + 20 * f + 2 * c, 3 * l, 4 * c),
      e.posture(r, s, {
        sp: 4,
        cp: 2,
        hp: 8 + 8 * f,
        loll: 0.8,
        jaw: 0.45,
        twitch: 0,
        comp: 0.5,
      }));
    for (const p of [1, -1]) {
      const u = p > 0 ? 0.66 : 0.76;
      e.leg(
        r,
        p,
        p * 0.14 * i,
        o.hips[1] * 0.86 - y * (u + 0.04 * l * p),
        (p > 0 ? 0.06 : -0.1) * i,
        0.15,
        p * 0.25,
        0,
      );
    }
    for (const p of [1, -1])
      (e.armDir(
        r,
        p,
        p * (0.62 + 0.08 * l * p),
        0.72 + 0.1 * c,
        0.2 + 0.15 * f,
        0,
        0.3,
        1,
        35 + 20 * Math.sin(s * 11 + p * 2 + n),
        0,
      ),
        e.hand(r, p, -25, 0, 0));
  }
  (e.fk(r), (r.hp.y -= e.lowOf(r, null, !0, null)));
}
