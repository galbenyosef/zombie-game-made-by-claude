// assets/index-BcIwWgby 63 — math
// Lines 20093-20096 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
const $0 = { x0: -52, z0: 62, sx: 26, sz: 26.4, nx: 4, nz: 6 },
  as = (s, o) =>
    Math.max(0, Math.min($0.nx - 1, Math.floor((s - $0.x0) / $0.sx))) +
    Math.max(0, Math.min($0.nz - 1, Math.floor((o - $0.z0) / $0.sz))) * $0.nx;
