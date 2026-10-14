// assets__anim-B86X8yU9 05 — hips
// Lines 1792-2097 of readable/assets__anim-B86X8yU9.pretty.js (statement-aligned).
function gt(r, t, s) {
  let h = 0;
  for (; h < r.length - 1 && r[h + 1].t <= t;) h++;
  const e = r[h],
    o = r[Math.min(h + 1, r.length - 1)],
    i = o.t > e.t ? x((t - e.t) / (o.t - e.t)) : 1,
    n = i * i * (3 - 2 * i);
  for (const a of bt) s[a] = e[a] + (o[a] - e[a]) * n;
  return s;
}
const Y = { climb: 0.62, land: 0.82, hard: 1.65, jamb: 0.3 };
function H(r) {
  if (r._win) return r._win;
  const t = () => new m();
  return (r._win = { a: t(), b: t(), k: {}, po: {} });
}
const it = {
    hx: 0,
    hy: 1,
    hz: 0,
    hp: 0,
    hw: 0,
    hr: 0,
    sp: 0,
    cp: 0,
    dp: 0,
    dw: 0,
    jaw: 0.2,
    lx: 0.12,
    ly: 0,
    lz: 0.05,
    lp: 0,
    rx: -0.12,
    ry: 0,
    rz: -0.05,
    rp: 0,
    ax: 0.3,
    ay: 0.9,
    az: 0.3,
    bx: -0.3,
    by: 0.9,
    bz: 0.3,
  },
  zt = Object.keys(it);
function tt(r) {
  const t = [];
  let s = { ...it };
  for (const [h, e, o] of r) ((s = { ...s, ...o, t: h, e }), t.push(s));
  return t;
}
function ot(r, t, s) {
  let h = 0;
  for (; h < r.length - 1 && r[h + 1].t <= t;) h++;
  const e = r[h],
    o = r[Math.min(h + 1, r.length - 1)],
    i = o.t > e.t ? x((t - e.t) / (o.t - e.t)) : 1,
    n =
      o.e === "in"
        ? i * i
        : o.e === "out"
          ? 1 - (1 - i) * (1 - i)
          : i * i * (3 - 2 * i);
  for (const a of zt) s[a] = e[a] + (o[a] - e[a]) * n;
  return s;
}
function at(r, t, s, h, e) {
  const o = r.J,
    i = o.hips[1] / 1.03;
  (t.hp.set(h.hx * i, o.hips[1] * h.hy, o.hips[2] + h.hz * i),
    r.qe(t.q[d.hips], h.hp, h.hw, h.hr));
  const n = H(r).po;
  ((n.sp = h.sp),
    (n.cp = h.cp),
    (n.hp = h.dp),
    (n.hy = h.dw),
    (n.jaw = h.jaw),
    (n.comp = e.comp ?? 0.9),
    (n.loll = e.loll ?? 0.3),
    (n.twitch = e.twitch ?? 0),
    (n.lookK = e.lookK ?? 0),
    (n.breath = 0.5),
    (n.shrug = e.shrug ?? 6),
    r.posture(t, s, n));
  for (const f of [1, -1]) {
    const p = f > 0,
      u = (p ? h.lp : h.rp) * k;
    r.leg(
      t,
      f,
      (p ? h.lx : h.rx) * i,
      r.ankleFor(f, u) + (p ? h.ly : h.ry) * i,
      (p ? h.lz : h.rz) * i,
      u,
      f * (e.toe ?? 0.22),
      0,
    );
  }
  const a = e.hands === "abs" ? 1 : i,
    y = e.poleA || [1, -0.3, -0.5],
    l = e.poleB || [-1, -0.3, -0.5];
  (r.armIK(t, 1, h.ax * a, h.ay * a, h.az * a, y[0], y[1], y[2]),
    r.armIK(t, -1, h.bx * a, h.by * a, h.bz * a, l[0], l[1], l[2]));
  const c = e.hand || [-15, 0, 0];
  (r.hand(t, 1, c[0], c[1], c[2]), r.hand(t, -1, c[0], c[1], c[2]));
}
function nt(r, t, s, h) {
  if (s > 0)
    for (const [e, o] of h) t >= e && t - s < e && r.events.push(["land", o]);
}
const qt = tt([
    [
      0,
      "io",
      {
        hy: -0.78,
        hz: -0.64,
        hp: 6,
        sp: 0,
        cp: 4,
        dp: -24,
        jaw: 0.35,
        lx: 0.12,
        ly: -1.6,
        lz: -0.6,
        lp: 10,
        rx: -0.12,
        ry: -1.68,
        rz: -0.62,
        rp: 0,
        ax: 0.2,
        ay: 0.05,
        az: -0.25,
        bx: -0.2,
        by: 0.05,
        bz: -0.25,
      },
    ],
    [
      0.13,
      "out",
      {
        hy: -0.4,
        hz: -0.62,
        hp: 14,
        cp: 6,
        dp: -18,
        ly: -1.2,
        lz: -0.6,
        ry: -1.38,
        rz: -0.62,
        ay: 0.05,
        az: -0.24,
        by: 0.05,
        bz: -0.24,
      },
    ],
    [
      0.26,
      "io",
      {
        hy: -0.12,
        hz: -0.55,
        hp: 36,
        sp: 8,
        cp: 8,
        dp: 0,
        jaw: 0.45,
        ly: -0.9,
        lz: -0.58,
        ry: -1,
        rz: -0.6,
        ax: 0.22,
        ay: 0.05,
        az: -0.16,
        bx: -0.22,
        by: 0.05,
        bz: -0.17,
      },
    ],
    [
      0.39,
      "io",
      {
        hy: 0.17,
        hz: -0.38,
        hp: 30,
        sp: 8,
        cp: 8,
        dp: 10,
        lx: 0.12,
        ly: 0.04,
        lz: -0.3,
        lp: -40,
        ry: -0.55,
        rz: -0.55,
        ax: 0.25,
        ay: 0.08,
        az: -0.04,
        bx: -0.25,
        by: 0.08,
        bz: -0.06,
      },
    ],
    [
      0.51,
      "io",
      {
        hy: 0.35,
        hz: -0.2,
        hp: 32,
        sp: 10,
        cp: 8,
        dp: 18,
        lx: 0.11,
        ly: 0,
        lz: -0.04,
        lp: 0,
        rx: -0.11,
        ry: 0.07,
        rz: -0.16,
        rp: -20,
        ax: 0.27,
        ay: 0.55,
        az: 0.06,
        bx: -0.27,
        by: 0.55,
        bz: 0.04,
      },
    ],
    [
      0.62,
      "io",
      {
        hy: 0.45,
        hz: -0.12,
        hp: 34,
        sp: 10,
        cp: 8,
        dp: 22,
        jaw: 0.3,
        lx: 0.11,
        ly: 0,
        lz: 0.06,
        lp: 0,
        rx: -0.11,
        ry: 0,
        rz: 0.06,
        rp: 0,
        ax: 0.3,
        ay: 0.8,
        az: 0.1,
        bx: -0.3,
        by: 0.8,
        bz: 0.1,
      },
    ],
  ]),
  kt = {
    hands: "abs",
    poleA: [0.6, 0.3, -0.8],
    poleB: [-0.6, 0.3, -0.8],
    comp: 0.6,
    loll: 0.2,
    toe: 0.12,
    hand: [-35, 0, 0],
  },
  xt = [[1e-4, "grip"]];
function Mt(r, t, s, h) {
  const e = this,
    o = ot(qt, t, H(e).k);
  (at(e, r, s, o, kt), nt(e, t, h, xt));
}
function At(r, t, s, h) {
  const e = this,
    o = e.J,
    i = o.hips[1] / 1.03,
    n = e.seed,
    a = Math.sin(s * 2.1 + n),
    y = I(s * 0.7, n),
    l = Math.sin(s * 1.3 + n * 2);
  (r.hp.set(
    0.025 * y * i,
    o.hips[1] * 0.45 + 0.008 * a,
    o.hips[2] - 0.12 * i + 0.02 * l,
  ),
    e.qe(r.q[d.hips], 34 + 3 * l, 4 * y, -3 * y),
    e.posture(r, s, {
      sp: 10,
      cp: 8 + 2 * a,
      comp: 1.1,
      loll: 0.5,
      hp: 22,
      hy: 32 * I(s * 0.35, n + 5),
      jaw: 0.14,
      shrug: 10,
      lookK: 1,
      breath: 0.6,
    }));
  for (const c of [1, -1])
    e.leg(r, c, c * 0.11 * i, e.ankleFor(c, 0), 0.06 * i, 0, c * 0.12, 0);
  for (const c of [1, -1]) {
    const f = Math.sin(s * 1.7 + c * 1.3 + n) * 0.015;
    (e.armIK(r, c, c * Y.jamb, (0.8 + f) * i, 0.1, c * 0.3, -1, -0.4),
      e.hand(r, c, -35, 0, 0));
  }
}
