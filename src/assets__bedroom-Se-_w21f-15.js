// assets__bedroom-Se-_w21f 15 — getx
// Lines 3676-3706 of readable/assets__bedroom-Se-_w21f.pretty.js (statement-aligned).
function Le(N) {
  const t = [],
    w = [],
    e = [],
    o = [];
  let M = 0;
  for (const h of N) {
    const i = h.attributes.position,
      z = h.attributes.normal,
      D = h.attributes.color;
    for (let C = 0; C < i.count; C++)
      (t.push(i.getX(C), i.getY(C), i.getZ(C)),
        w.push(z.getX(C), z.getY(C), z.getZ(C)),
        e.push(D.getX(C), D.getY(C), D.getZ(C)));
    for (let C = 0; C < h.index.count; C++) o.push(h.index.getX(C) + M);
    M += i.count;
  }
  const s = new ot();
  return (
    s.setAttribute("position", new T0(t, 3)),
    s.setAttribute("normal", new T0(w, 3)),
    s.setAttribute("color", new T0(e, 3)),
    s.setIndex(o),
    s
  );
}
const L0 = 4.12,
  O0 = 5.12,
  kt = 0.03,
  ht = 0.5,
  c0 = 0.845;
