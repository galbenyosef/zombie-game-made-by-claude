// assets__index-BcIwWgby 55 — math
// Lines 16677-16912 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Dc() {
  const s = At("garden_rock"),
    o = At("garden_moss"),
    t = { tRock: { value: s.map }, tMoss: { value: o.map } },
    u = i0(s, "rock", (e) => {
      (Object.assign(e.uniforms, t),
        (e.vertexShader = e.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vRN;
attribute float aMossy;
varying float vMossy;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vRN = normalize(mat3(modelMatrix) * normal); vMossy = aMossy;`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform sampler2D tRock, tMoss;
varying vec3 vRN;
varying float vMossy;`,
          )
          .replace(
            "#include <map_fragment>",
            `
      {
        // three ways by world position (no seams on a round stone)
        vec3 w = abs(vRN); w = pow(w, vec3(4.0)); w /= (w.x + w.y + w.z);
        vec3 rc = texture2D(tRock, vFW.zy / 1.2).rgb * w.x + texture2D(tRock, vFW.xz / 1.2).rgb * w.y + texture2D(tRock, vFW.xy / 1.2).rgb * w.z;
        vec3 mc = texture2D(tMoss, vFW.xz / 1.6).rgb;
        float mk = smoothstep(0.1, 0.55, vRN.y * 0.8 + vMossy * 0.5 + (texture2D(tMoss, vFW.xz * 0.37).g - 0.12) * 2.0);
        diffuseColor.rgb *= mix(rc, mc, mk * 0.95);
      }`,
          )));
    });
  return (
    (u.map = null),
    (u.normalMap = null),
    (u.aoMap = null),
    (u.roughnessMap = null),
    (u.metalnessMap = null),
    (u.roughness = 0.9),
    (u.metalness = 0),
    u
  );
}
function Bc(s, o = 2) {
  const t = new Sa(1, o),
    u = t.attributes.position,
    e = [s() * 10, s() * 10, s() * 10],
    r = 0.55 + s() * 0.35;
  for (let a = 0; a < u.count; a++) {
    const p = u.getX(a),
      i = u.getY(a),
      d = u.getZ(a),
      y =
        1 +
        0.22 * It(p * 1.6 + e[0], d * 1.6 + i * 0.8 + e[1]) +
        0.1 * It(p * 4 + e[2], i * 4 - d * 3),
      w = Math.max(0.72, y);
    u.setXYZ(a, p * w, i * w * r, d * w);
  }
  return (t.computeVertexNormals(), t.deleteAttribute("uv"), t);
}
function Vc(s, o, t, u) {
  const e = new Map(),
    r = [],
    a = Array.from({ length: 6 }, () => Bc(o)),
    p = (i, d, y, w = 0.35, g = 0.3) => {
      const z = s.heightAt(i, d),
        x = a[Math.floor(o() * a.length)].clone(),
        v = new wt().compose(
          at(i, z - y * w, d),
          new w0().setFromEuler(
            new pe((o() - 0.5) * 0.5, o() * Us, (o() - 0.5) * 0.5),
          ),
          at(y * (0.8 + o() * 0.5), y, y * (0.8 + o() * 0.5)),
        );
      x.applyMatrix4(v);
      const n = new Float32Array(x.attributes.position.count).fill(g);
      x.setAttribute("aMossy", new vt(n, 1));
      const l = t(i, d);
      return (e.has(l) || e.set(l, []), e.get(l).push(x), z);
    };
  for (let i = 0; i < 7600 && r.length < 780; i++) {
    const d = -50 + o() * 100,
      y = St.z + 1 + o() * 136,
      w = s.sdAt(d, y);
    if (
      s.dPathAt(d, y) > 22 ||
      w < 0.25 ||
      s.dStreamAt(d, y) < 4.6 ||
      (d > _t.x0 - 3 && d < _t.x1 + 3 && y > _t.z0 - 3 && y < _t.z1 + 3) ||
      u(d, y)
    )
      continue;
    const z = w < 3 ? 0.5 : w < 8 ? 0.3 : 0.12;
    if (o() > z * (0.4 + 0.6 * (0.5 + 0.5 * It(d * 0.15, y * 0.15)))) continue;
    const x = o() < 0.12,
      v = x ? 0.7 + o() * 0.8 : 0.18 + o() * 0.38;
    (p(d, y, v, x ? 0.45 : 0.35, x ? 0.5 : 0.3),
      w < v + 1.2 && r.push({ x: d, z: y, r: v * 0.85, rock: !0 }));
    const n = Math.floor(o() * 3);
    for (let l = 0; l < n; l++) {
      const f = o() * Us,
        h = v + 0.2 + o() * 0.5,
        c = d + Math.cos(f) * h,
        M = y + Math.sin(f) * h;
      s.sdAt(c, M) > 0.2 && p(c, M, 0.08 + o() * 0.12, 0.3, 0.1);
    }
  }
  for (let i = 0; i < s.stream.n; i += 2) {
    if (o() > 0.55) continue;
    const d = s.stream.x[i],
      y = s.stream.z[i];
    if (d < -46 || d > 46 || Math.abs(d - 2.5) < 2.2) continue;
    const w = (o() - 0.5) * 3.2,
      g = d - s.stream.tz[i] * w,
      z = y + s.stream.tx[i] * w;
    p(g, z, o() < 0.15 ? 0.5 + o() * 0.4 : 0.12 + o() * 0.25, 0.4, 0.15);
  }
  return { byChunk: e, circles: r };
}
function Kc(s, o, t, u, e) {
  const r =
    t.kind === "oak" ? 5 + Math.floor(o() * 3) : 3 + Math.floor(o() * 3);
  for (let a = 0; a < r; a++) {
    let p = (a / r) * Us + o() * 0.8;
    const i = (t.kind === "oak" ? 3 : 2) + o() * 2.6,
      d = t.r * (0.22 + o() * 0.16),
      y = [];
    let w = t.x + Math.cos(p) * t.r * 0.7,
      g = t.z + Math.sin(p) * t.r * 0.7;
    const z = Math.ceil(i / 0.35);
    for (let n = 0; n <= z; n++) {
      const l = n / z,
        f = d * (1 - l * 0.8);
      if (n > 1 && s.dPathAt(w, g) < 1.15 + f) break;
      (y.push(
        at(
          w,
          Math.max(s.heightAt(w, g), u - 0.3) +
            f * (0.35 - 0.25 * l) +
            (n === 0 ? 0.1 : 0),
          g,
        ),
      ),
        (p += (o() - 0.5) * 0.5),
        (w += Math.cos(p) * 0.35),
        (g += Math.sin(p) * 0.35));
    }
    if (y.length < 3) continue;
    const x = Vt(y, (n) => d * (1 - n * 0.85), 5),
      v = new Float32Array(x.attributes.position.count * 3);
    for (let n = 0; n < x.attributes.position.count; n++)
      ((v[n * 3] = 0.6), (v[n * 3 + 1] = 0.3), (v[n * 3 + 2] = 0.9));
    (x.setAttribute("aK", new vt(v, 3)), e.push(x));
  }
}
function Uc(s, o, t, u, e) {
  const r = [],
    a = [];
  let p = 0;
  for (let i = 0; i < 1400 && p < 24; i++) {
    const d = -48 + o() * 96,
      y = St.z + 6 + o() * 128,
      w = s.sdAt(d, y);
    if (
      w < 1.2 ||
      w > 9 ||
      s.dPathAt(d, y) > 14 ||
      s.dStreamAt(d, y) < 5.5 ||
      e(d, y)
    )
      continue;
    const g = o() * Math.PI,
      z = 4 + o() * 5,
      x = 0.2 + o() * 0.22,
      v = Math.cos(g),
      n = Math.sin(g);
    let l = !0,
      f = -9,
      h = 9;
    for (let A = -0.5; A <= 0.5; A += 0.1) {
      const b = d + v * z * A,
        P = y + n * z * A;
      if (s.sdAt(b, P) < x + 0.4) {
        l = !1;
        break;
      }
      const _ = s.heightAt(b, P);
      ((f = Math.max(f, _)), (h = Math.min(h, _)));
    }
    if (!l || f - h > 0.7) continue;
    const c = [];
    for (let A = -0.5; A <= 0.501; A += 0.125) {
      const b = d + v * z * A,
        P = y + n * z * A;
      c.push(at(b, Math.max(s.heightAt(b, P), f - 0.35) + x * 0.7, P));
    }
    const M = Vt(
        c,
        (A) => x * (1 - A * 0.25) * (0.94 + 0.06 * Math.sin(A * 17)),
        9,
        { cap: !0 },
      ),
      m = M.attributes.position;
    for (let A = m.count - 11; A < m.count; A++)
      m.setXYZ(
        A,
        m.getX(A) + (o() - 0.5) * 0.12,
        m.getY(A) + (o() - 0.5) * 0.1,
        m.getZ(A) + (o() - 0.5) * 0.12,
      );
    const k = new Float32Array(m.count * 3);
    for (let A = 0; A < m.count; A++)
      ((k[A * 3] = 0.25), (k[A * 3 + 1] = o() * 0.2), (k[A * 3 + 2] = 1));
    M.setAttribute("aK", new vt(k, 3));
    const S = t(d, y);
    (u.has(S) || u.set(S, []), u.get(S).push(M));
    for (let A = -0.5; A <= 0.5; A += 0.12) {
      const b = d + v * z * A,
        P = y + n * z * A;
      s.sdAt(b, P) < 2.5 && r.push({ x: b, z: P, r: x + 0.05, log: !0 });
    }
    (a.push([d + v * z * 0.2, c[3].y + x * 0.6, y + n * z * 0.2]), p++);
  }
  return { circles: r, mush: a };
}
const De = Math.PI * 2,
  to = { a: [de[0].x, de[0].z], b: [-9.15, 42.25] };
