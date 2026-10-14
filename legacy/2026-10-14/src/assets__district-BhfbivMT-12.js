// assets__district-BhfbivMT 12 — add
// Lines 3381-3403 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
function $e(n) {
  ((n.tuck ??= 0.05),
    (n.sh ??= 0.03),
    (n.bow ??= 0.01),
    (n.crown ??= 0.04),
    (n.fg ??= [0, 0.07, 0.5, 0.93, 1]),
    (n.step ??= 0.2),
    (n.sillMat ??= "paint"),
    (n.beltMat ??= "trim"),
    (n.frameMat ??= "trim"),
    (n.pillars ??= []),
    (n.win ??= []),
    (n.doors ??= []));
  const t = new Set(n.keys || []);
  for (const e of n.doors) for (const r of [...e.lo, ...e.up]) t.add(r);
  for (const e of n.win) for (const r of e.z) t.add(r);
  for (const e of n.pillars) for (const r of e.z) t.add(r);
  for (const e of [n.ws, n.rw])
    if (e) for (const r of [...e.z, ...e.frit]) t.add(r);
  for (const e of [n.cowl, n.bonnet, n.boot, n.cabin])
    if (e) for (const r of e) t.add(r);
  return ((n.keys = [...t]), n);
}
