// assets/index-DQDjAbEY 25 — push
// Lines 7721-7779 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
function On(e, l) {
  const a = l
    ? [
        ["army", [-4.4, 1.86, -3, 2.08], 0],
        ["armynum", [-7.05, 2.55, -6.45, 2.8], -1],
        ["star", [0.35, 1.25, 0.8, 1.7], 0],
        ["star", [-1.75, 1.32, -1.3, 1.77], 0],
        ["danger", [-6.1, 1.88, -5.62, 2.02], 0],
      ]
    : [
        ["airrescue", [-4.55, 1.86, -2.62, 2.07], 0],
        ["callsign", [-7.04, 2.5, -6.52, 2.66], 0],
        ["reg", [-2.02, 2.3, -1.12, 2.43], 0],
        ["crest", [1.42, 0.86, 1.68, 1.12], 0],
        ["emergency", [-0.48, 1.17, 0.78, 1.255], 0],
        ["danger", [-6.12, 1.88, -5.64, 2], 0],
        ["cut", [-1.98, 1.96, -1.84, 2.1], 0],
        ["nostep", [-1.6, 2.44, -1.25, 2.52], 0],
        ["rescueArrow", [-1.85, 1.16, -1.05, 1.24], 0],
      ];
  for (let o = 0; o < Ce; o++) {
    const t = a[o];
    if (!t) {
      e.uDecS.value[o].set(0, 0, 0, 0);
      continue;
    }
    const s = Fe[t[0]] || [0, 0, 0, 0];
    (e.uDecP.value[o].set(t[1][0], t[1][1], t[1][2], t[1][3]),
      e.uDecU.value[o].set(s[0], s[1], s[2], s[3]),
      e.uDecS.value[o].set(t[2], 1, 0, 0));
  }
}
function In(e) {
  const l = [],
    a = [],
    o = [],
    t = [];
  let s = 0;
  for (const c of e) {
    const i = c.attributes.position,
      d = c.attributes.uv,
      f = c.attributes.aScr;
    for (let p = 0; p < i.count; p++)
      (l.push(i.getX(p), i.getY(p), i.getZ(p)),
        a.push(d.getX(p), d.getY(p)),
        o.push(f.getX(p)));
    for (const p of c.index.array) t.push(p + s);
    ((s += i.count), c.dispose());
  }
  const n = new K0();
  return (
    n.setAttribute("position", new L0(l, 3)),
    n.setAttribute("uv", new L0(a, 2)),
    n.setAttribute("aScr", new L0(o, 1)),
    n.setIndex(t),
    n.computeBoundingSphere(),
    n
  );
}
