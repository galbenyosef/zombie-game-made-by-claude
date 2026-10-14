// assets/index-TPd_HXBJ 18 — push
// Lines 6168-6209 of readable/assets/index-TPd_HXBJ.pretty.js (statement-aligned).
function Na() {
  const t = [],
    e = [],
    o = [],
    n = [],
    a = [],
    l = [],
    r = [],
    p = [
      [0.84, 0, [1, 0.88, 0.7], 0.9],
      [-0.84, 0, [1, 0.88, 0.7], 0.9],
      [1.17, 1, [1, 0.05, 0.03], 0.45],
      [-1.17, 1, [1, 0.05, 0.03], 0.45],
    ];
  for (const [c, d, i, s] of p) {
    const m = t.length / 3;
    for (const [v, y, w, M] of [
      [-1, -1, 0, 0],
      [1, -1, 1, 0],
      [1, 1, 1, 1],
      [-1, 1, 0, 1],
    ])
      (t.push(v, y, 0),
        e.push(w, M),
        o.push(...i),
        n.push(s),
        a.push(d),
        l.push(h.HL + 0.05, 1.61, c));
    r.push(m, m + 1, m + 2, m, m + 2, m + 3);
  }
  const f = new q0();
  return (
    f.setAttribute("position", new e0(t, 3)),
    f.setAttribute("uv", new e0(e, 2)),
    f.setAttribute("aCol", new e0(o, 3)),
    f.setAttribute("aSize", new e0(n, 1)),
    f.setAttribute("aKind", new e0(a, 1)),
    f.setAttribute("aCenter", new e0(l, 3)),
    f.setIndex(r),
    f
  );
}
