// assets/gameplay-DnQwS-TC 02 — math
// Lines 217-745 of readable/assets/gameplay-DnQwS-TC.pretty.js (statement-aligned).
function $s(o) {
  const t = o.scene,
    i = new de();
  ((i.name = "fx"), t.add(i));
  const e = he(
      64,
      64,
      (u, m, d) => {
        const x = u.createRadialGradient(m / 2, d / 2, 0, m / 2, d / 2, m / 2);
        (x.addColorStop(0, "rgba(255,255,255,1)"),
          x.addColorStop(0.4, "rgba(255,255,255,0.5)"),
          x.addColorStop(1, "rgba(255,255,255,0)"),
          (u.fillStyle = x),
          u.fillRect(0, 0, m, d));
      },
      !1,
    ),
    s = he(
      128,
      128,
      (u, m, d) => {
        let x = 7;
        const A = () => ((x = (x * 16807) % 2147483647), x / 2147483647);
        for (let Z = 0; Z < 22; Z++) {
          const $ = A() * 6.283,
            lt = Math.sqrt(A()) * m * 0.26,
            zt = m / 2 + Math.cos($) * lt,
            ot = d / 2 + Math.sin($) * lt,
            Ft = m * (0.1 + A() * 0.16),
            p = u.createRadialGradient(zt, ot, 0, zt, ot, Ft);
          (p.addColorStop(0, "rgba(255,255,255,0.30)"),
            p.addColorStop(0.55, "rgba(255,255,255,0.12)"),
            p.addColorStop(1, "rgba(255,255,255,0)"),
            (u.fillStyle = p),
            u.fillRect(0, 0, m, d));
        }
        u.globalCompositeOperation = "destination-in";
        const q = u.createRadialGradient(m / 2, d / 2, 0, m / 2, d / 2, m / 2);
        (q.addColorStop(0, "rgba(0,0,0,1)"),
          q.addColorStop(0.6, "rgba(0,0,0,0.7)"),
          q.addColorStop(1, "rgba(0,0,0,0)"),
          (u.fillStyle = q),
          u.fillRect(0, 0, m, d));
      },
      !1,
    ),
    l = he(
      32,
      32,
      (u, m, d) => {
        ((u.fillStyle = "rgba(255,255,255,1)"),
          u.beginPath(),
          u.arc(m / 2, d / 2, m * 0.36, 0, 7),
          u.fill(),
          (u.filter = "blur(2px)"),
          u.fill());
      },
      !1,
    ),
    n = new He(700, !1, s),
    r = new He(300, !0, e),
    h = new He(500, !1, l);
  i.add(n.points, r.points, h.points);
  const a = he(
      128,
      128,
      (u, m, d) => {
        u.translate(m / 2, d / 2);
        const x = u.createRadialGradient(0, 0, 0, 0, 0, m / 2);
        (x.addColorStop(0, "rgba(255,255,255,1)"),
          x.addColorStop(0.25, "rgba(255,200,120,0.85)"),
          x.addColorStop(1, "rgba(255,120,30,0)"),
          (u.fillStyle = x),
          u.fillRect(-m / 2, -d / 2, m, d),
          (u.globalCompositeOperation = "lighter"));
        for (let A = 0; A < 7; A++) {
          (u.save(), u.rotate((A / 7) * Math.PI * 2 + 0.3));
          const q = m * (0.25 + (0.2 * ((A * 37) % 5)) / 5),
            Z = u.createLinearGradient(0, 0, q, 0);
          (Z.addColorStop(0, "rgba(255,230,180,0.9)"),
            Z.addColorStop(1, "rgba(255,140,40,0)"),
            (u.fillStyle = Z),
            u.beginPath(),
            u.moveTo(0, -3),
            u.lineTo(q, 0),
            u.lineTo(0, 3),
            u.fill(),
            u.restore());
        }
      },
      !1,
    ),
    y = new ws({
      map: a,
      color: new Me().setRGB(4, 2.6, 1.4),
      blending: ke,
      depthWrite: !1,
      transparent: !0,
      toneMapped: !1,
      fog: !1,
    }),
    g = [];
  for (let u = 0; u < 3; u++) {
    const m = new ms(y.clone());
    ((m.visible = !1), m.scale.setScalar(0.3), (m.renderOrder = 40), i.add(m));
    const d = new zs(16756832, 0, 9, 2);
    ((d.userData.noActor = !0),
      i.add(d),
      g.push({ sp: m, li: d, t: 9, dur: 0.07, k: 1 }));
  }
  let w = 0;
  const _ = new qt({ color: 11569722, metalness: 1, roughness: 0.32 }),
    c = new Ke(0.0046, 0.0046, 0.019, 8);
  c.rotateZ(Math.PI / 2);
  const k = [];
  for (let u = 0; u < 14; u++) {
    const m = new Vt(c, _);
    ((m.visible = !1),
      (m.castShadow = !0),
      i.add(m),
      k.push({
        m,
        v: new Yt(),
        w: new Yt(),
        life: 0,
        bounced: 0,
        deck: null,
        lp: new Yt(),
        floor: 0,
      }));
  }
  let K = 0;
  const Y = new ze(),
    F = new Yt(),
    X = he(128, 128, (u, m, d) => {
      u.clearRect(0, 0, m, d);
      const x = u.createRadialGradient(m / 2, d / 2, 2, m / 2, d / 2, m * 0.46);
      (x.addColorStop(0, "rgba(6,5,5,1)"),
        x.addColorStop(0.3, "rgba(10,8,7,0.95)"),
        x.addColorStop(0.55, "rgba(30,24,20,0.5)"),
        x.addColorStop(1, "rgba(30,24,20,0)"),
        (u.fillStyle = x),
        u.beginPath(),
        u.arc(m / 2, d / 2, m * 0.46, 0, 7),
        u.fill(),
        (u.strokeStyle = "rgba(20,16,14,0.5)"),
        (u.lineWidth = 1));
      for (let A = 0; A < 9; A++) {
        const q = A * 0.7 + 0.2,
          Z = 18 + ((A * 53) % 26);
        (u.beginPath(),
          u.moveTo(m / 2, d / 2),
          u.lineTo(m / 2 + Math.cos(q) * Z, d / 2 + Math.sin(q) * Z),
          u.stroke());
      }
    }),
    J = new qt({
      map: X,
      transparent: !0,
      depthWrite: !1,
      roughness: 1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    }),
    U = (u) =>
      he(256, 256, (m, d, x) => {
        m.clearRect(0, 0, d, x);
        let A = u * 9301 + 49297;
        const q = () => ((A = (A * 9301 + 49297) % 233280), A / 233280);
        for (let Z = 0; Z < 46; Z++) {
          const $ = q() * 6.283,
            lt = Math.pow(q(), 0.6) * 100,
            zt = 3 + q() * (Z < 8 ? 34 : 10) * (1 - lt / 140);
          ((m.fillStyle = `rgba(${(44 + q() * 26) | 0},${(4 + q() * 4) | 0},${(6 + q() * 6) | 0},${0.65 + q() * 0.3})`),
            m.beginPath(),
            m.arc(d / 2 + Math.cos($) * lt, x / 2 + Math.sin($) * lt, zt, 0, 7),
            m.fill());
        }
      }),
    N = [U(1), U(2), U(3)].map(
      (u) =>
        new qt({
          map: u,
          transparent: !0,
          depthWrite: !1,
          roughness: 0.28,
          metalness: 0,
          polygonOffset: !0,
          polygonOffsetFactor: -3,
          polygonOffsetUnits: -3,
          envMapIntensity: 0.8,
        }),
    ),
    T = new _s(1, 1),
    f = [];
  for (let u = 0; u < 60; u++) {
    const m = new Vt(T, J);
    ((m.visible = !1), (m.receiveShadow = !1), i.add(m), f.push(m));
  }
  let b = 0;
  const L = new ys(),
    v = new Yt(0, 0, 1);
  function R(u, m, d, x) {
    const A = f[b++ % f.length];
    return (
      (A.material = x),
      (A.visible = !0),
      A.position.copy(u).addScaledVector(m, 0.004),
      L.position.copy(A.position),
      L.quaternion.setFromUnitVectors(v, m),
      L.rotateZ(D(0, 6.28)),
      A.quaternion.copy(L.quaternion),
      A.scale.setScalar(d),
      A
    );
  }
  const W = [];
  for (let u = 0; u < 8; u++) {
    const m = new Je().setFromPoints([new Yt(), new Yt(0, 0, 1)]),
      d = new Ss(
        m,
        new Ts({
          color: new Me().setRGB(3, 2.3, 1.2),
          transparent: !0,
          opacity: 0.7,
          blending: ke,
          depthWrite: !1,
          toneMapped: !1,
          fog: !1,
        }),
      );
    ((d.visible = !1),
      (d.frustumCulled = !1),
      i.add(d),
      W.push({ ln: d, t: 9 }));
  }
  let C = 0;
  const j = {
    root: i,
    tracer(u, m) {
      const d = W[C++ % W.length],
        x = d.ln.geometry.attributes.position,
        A = new Yt().subVectors(m, u),
        q = Math.min(A.length(), 60),
        Z = u.clone().addScaledVector(A.normalize(), Math.min(0.3, q));
      (x.setXYZ(0, Z.x, Z.y, Z.z),
        x.setXYZ(
          1,
          Z.x + A.x * Math.min(q, 14),
          Z.y + A.y * Math.min(q, 14),
          Z.z + A.z * Math.min(q, 14),
        ),
        (x.needsUpdate = !0),
        (d.ln.visible = !0),
        (d.t = 0));
    },
    muzzleFlash(u, m, d = 1) {
      const x = g[w++ % g.length];
      (x.sp.position.copy(u).addScaledVector(m, 0.03),
        x.sp.scale.setScalar(D(0.22, 0.34) * d),
        (x.sp.material.rotation = D(0, 6.28)),
        (x.sp.visible = !0),
        x.li.position.copy(u).addScaledVector(m, 0.12),
        (x.li.intensity = 120 * d * (this.flashK ?? 1)),
        (x.t = 0),
        (x.dur = 0.075));
      for (let A = 0; A < 6; A++)
        r.spawn(
          [u.x + m.x * 0.05, u.y + m.y * 0.05, u.z + m.z * 0.05],
          [
            m.x * D(2, 6) + D(-1.5, 1.5),
            m.y * D(2, 6) + D(-1, 2),
            m.z * D(2, 6) + D(-1.5, 1.5),
          ],
          {
            life: D(0.08, 0.18),
            size0: 0.05,
            size1: 0.01,
            c0: [3, 1.8, 0.6, 1],
            c1: [1.6, 0.5, 0.1, 0],
            grav: 4,
          },
        );
      for (let A = 0; A < 4; A++)
        n.spawn(
          [u.x + m.x * 0.08, u.y + m.y * 0.08, u.z + m.z * 0.08],
          [
            m.x * D(0.3, 1.4) + D(-0.25, 0.25),
            m.y * D(0.3, 1.4) + D(0.15, 0.6),
            m.z * D(0.3, 1.4) + D(-0.25, 0.25),
          ],
          {
            life: D(0.9, 1.7),
            size0: 0.05,
            size1: 0.22,
            c0: [0.2, 0.2, 0.21, 0.3],
            c1: [0.14, 0.14, 0.15, 0],
            drag: 1.6,
          },
        );
    },
    casing(u, m, d = new Yt(0, 1, 0)) {
      const x = k[K++ % k.length];
      ((x.m.visible = !0),
        x.m.position.copy(u),
        x.v
          .copy(m)
          .multiplyScalar(D(1.4, 2.1))
          .addScaledVector(d, D(1.4, 2.4))
          .addScaledVector(new Yt(m.z, 0, -m.x), D(-0.4, 0.4)),
        x.w.set(D(-20, 20), D(-20, 20), D(-20, 20)),
        (x.life = 3.5),
        (x.bounced = 0),
        x.m.rotation.set(D(0, 6), D(0, 6), D(0, 6)));
      const A = o.player?.deck,
        q = o.player?.pos,
        Z = o.world?.groundAt,
        $ = Z ? Z(u.x, u.z, u.y - 1.2) : null;
      ((x.deck = null),
        (x.floor =
          ($ != null && $ < u.y
            ? $
            : q && Math.abs(q.y - u.y) < 2.5
              ? q.y
              : 0) + 0.005),
        A &&
          (F.copy(u),
          A.frame.worldToLocal(F),
          Math.abs(F.x) < 10 &&
            Math.abs(F.z) < 1.7 &&
            F.y > A.floorY - 0.5 &&
            F.y < A.floorY + 3 &&
            ((x.deck = A.frame),
            x.lp.copy(F),
            (x.floor = A.floorY + 0.005),
            x.v.applyQuaternion(
              Y.setFromRotationMatrix(A.frame.matrixWorld).invert(),
            ))));
    },
    impactWorld(u, m, d = [0.5, 0.45, 0.4]) {
      R(u, m, D(0.07, 0.1), J);
      for (let x = 0; x < 9; x++)
        n.spawn(
          [u.x, u.y, u.z],
          [
            m.x * D(0.3, 1.6) + D(-0.6, 0.6),
            m.y * D(0.3, 1.6) + D(-0.2, 0.9),
            m.z * D(0.3, 1.6) + D(-0.6, 0.6),
          ],
          {
            life: D(0.5, 1.1),
            size0: 0.03,
            size1: 0.13,
            c0: [d[0] * 0.4, d[1] * 0.4, d[2] * 0.4, 0.42],
            c1: [d[0] * 0.3, d[1] * 0.3, d[2] * 0.3, 0],
            drag: 2.2,
          },
        );
      for (let x = 0; x < 5; x++)
        r.spawn(
          [u.x, u.y, u.z],
          [
            m.x * D(1, 4) + D(-2, 2),
            m.y * D(1, 4) + D(-1, 2),
            m.z * D(1, 4) + D(-2, 2),
          ],
          {
            life: D(0.12, 0.3),
            size0: 0.022,
            size1: 0.005,
            c0: [3.2, 2.2, 1, 1],
            c1: [1.5, 0.5, 0.1, 0],
            grav: 9,
          },
        );
    },
    sparks(u, m = null, d = 8, x = 1.6) {
      for (let A = 0; A < d; A++)
        r.spawn(
          [u.x, u.y, u.z],
          [
            (m?.x || 0) + D(-x, x),
            (m?.y || 0) + D(0.2, 2.2),
            (m?.z || 0) + D(-x, x),
          ],
          {
            life: D(0.12, 0.42),
            size0: D(0.014, 0.026),
            size1: 0.004,
            c0: [3.6, 2.3, 0.9, 1],
            c1: [1.7, 0.45, 0.08, 0],
            grav: 9.8,
            drag: 0.6,
          },
        );
    },
    impactBody(u, m, d = 1) {
      const x = Math.round(22 * d);
      for (let A = 0; A < x; A++)
        h.spawn(
          [u.x, u.y, u.z],
          [
            m.x * D(0.8, 3.2) + D(-1.1, 1.1),
            m.y * D(0.3, 2.2) + D(0, 1.6),
            m.z * D(0.8, 3.2) + D(-1.1, 1.1),
          ],
          {
            life: D(0.5, 1.1),
            size0: D(0.03, 0.06),
            size1: 0.03,
            c0: [0.27, 0.02, 0.03, 0.95],
            c1: [0.16, 0.01, 0.02, 0.8],
            grav: 9.8,
            drag: 0.4,
          },
        );
      for (let A = 0; A < 4; A++)
        n.spawn(
          [u.x, u.y, u.z],
          [
            m.x * D(0.2, 0.9) + D(-0.3, 0.3),
            D(0.1, 0.5),
            m.z * D(0.2, 0.9) + D(-0.3, 0.3),
          ],
          {
            life: D(0.5, 0.9),
            size0: 0.05,
            size1: 0.2,
            c0: [0.28, 0.03, 0.04, 0.35],
            c1: [0.2, 0.02, 0.03, 0],
            drag: 2,
          },
        );
    },
    bloodPool(u, m = 0.6) {
      const d = f[b++ % f.length];
      ((d.material = N[Math.floor(Math.random() * N.length)]),
        (d.visible = !0),
        d.position.set(u.x, (u.y || 0) + 0.006, u.z),
        d.rotation.set(-Math.PI / 2, 0, D(0, 6.28)),
        d.scale.setScalar(m));
    },
    floorSplat(u, m = 0.4) {
      j.bloodPool(
        { x: u.x + D(-0.25, 0.25), z: u.z + D(-0.25, 0.25) },
        m * D(0.6, 1.2),
      );
    },
    dust(u, m = 0.5, d = 1) {
      const x = Math.round(16 * d);
      for (let A = 0; A < x; A++) {
        const q = D(0, 6.283),
          Z = Math.sqrt(Math.random()) * m,
          $ = D(0.25, 0.9);
        n.spawn(
          [u.x + Math.cos(q) * Z, u.y + D(0, 0.12), u.z + Math.sin(q) * Z],
          [Math.cos(q) * $, D(0.04, 0.4), Math.sin(q) * $],
          {
            life: D(1, 2),
            size0: D(0.1, 0.18),
            size1: D(0.4, 0.7),
            c0: [0.075, 0.07, 0.065, 0.3],
            c1: [0.06, 0.058, 0.055, 0],
            drag: 2.6,
          },
        );
      }
    },
    update(u) {
      for (const d of W)
        d.ln.visible &&
          ((d.t += u),
          (d.ln.material.opacity = Math.max(0, 0.7 - d.t * 14)),
          d.t > 0.05 && (d.ln.visible = !1));
      for (const d of g)
        if (d.t < d.dur) {
          d.t += u;
          const x = 1 - d.t / d.dur;
          ((d.li.intensity = Math.max(0, 120 * x * x)),
            (d.sp.material.opacity = Math.max(0, x)),
            d.t >= d.dur && ((d.sp.visible = !1), (d.li.intensity = 0)));
        }
      for (const d of k) {
        if (!d.m.visible) continue;
        if (((d.life -= u), d.life <= 0)) {
          d.m.visible = !1;
          continue;
        }
        const x = d.deck ? d.lp : d.m.position;
        ((d.v.y -= 9.8 * u),
          x.addScaledVector(d.v, u),
          (d.m.rotation.x += d.w.x * u),
          (d.m.rotation.y += d.w.y * u),
          (d.m.rotation.z += d.w.z * u),
          x.y < d.floor &&
            ((x.y = d.floor),
            d.bounced < 3 && Math.abs(d.v.y) > 0.5
              ? ((d.v.y *= -0.32),
                (d.v.x *= 0.5),
                (d.v.z *= 0.5),
                d.w.multiplyScalar(0.5),
                d.bounced === 0 &&
                  o.audio &&
                  (d.deck &&
                    d.m.position.copy(x).applyMatrix4(d.deck.matrixWorld),
                  o.audio.play("shell_drop", {
                    pos: [
                      d.m.position.x,
                      d.m.position.y + 0.015,
                      d.m.position.z,
                    ],
                    vol: 0.35,
                    rate: D(0.9, 1.15),
                  })),
                d.bounced++)
              : (d.v.set(0, 0, 0), d.w.set(0, 0, 0))),
          d.deck && d.m.position.copy(x).applyMatrix4(d.deck.matrixWorld));
      }
      (n.update(u), r.update(u), h.update(u));
      const m = o.post.size.y / (2 * Math.tan((o.camera.fov * Math.PI) / 360));
      n.mat.uniforms.uScale.value =
        r.mat.uniforms.uScale.value =
        h.mat.uniforms.uScale.value =
          m;
    },
  };
  return j;
}
