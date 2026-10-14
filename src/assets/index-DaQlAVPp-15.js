// assets/index-DaQlAVPp 15 — game
// Lines 39474-39647 of readable/assets/index-DaQlAVPp.pretty.js (statement-aligned).
game.ready
  .then(() => {
    if (serviceMode) {
      (veilEl.classList.add("gone"), connectServiceBridge(game));
      return;
    }
    veilSubEl.textContent = "click to begin";
    let r = performance.now(),
      e = !1,
      t = !1;
    const n = game.pixelRatio,
      i = Math.max(0.6, n * 0.6),
      s = game.renderer.getContext(),
      a = s.getExtension("EXT_disjoint_timer_query_webgl2"),
      o = [],
      l = [];
    let c = 0;
    const h = () => {
        if (!a) return;
        const R = s.getParameter(a.GPU_DISJOINT_EXT);
        for (
          ;
          o.length && s.getQueryParameter(o[0], s.QUERY_RESULT_AVAILABLE);
        ) {
          const L = o.shift(),
            V = s.getQueryParameter(L, s.QUERY_RESULT);
          (s.deleteQuery(L), R || ((c = V / 1e9), l.push(c)));
        }
        for (; o.length > 8;) s.deleteQuery(o.shift());
        l.length > 600 && l.splice(0, l.length - 600);
      },
      d = [];
    let u = 1 / 60,
      f = 0,
      p = 0,
      x = 0,
      m = 8,
      g = 1e9,
      y = 0,
      w = 0;
    const _ = document.createElement("div");
    ((_.style.cssText =
      "position:fixed;left:10px;top:8px;z-index:30;font:12px/1.4 monospace;color:#9fe3a0;background:rgba(0,0,0,0.55);padding:5px 8px;border-radius:4px;display:none;white-space:pre;pointer-events:none"),
      document.body.appendChild(_));
    let b = 0,
      S = 0,
      E = 0;
    window.addEventListener("keydown", (R) => {
      R.code === "F3" &&
        (R.preventDefault(),
        (_.style.display = _.style.display === "none" ? "block" : "none"));
    });
    const v = "lullaby.brightness";
    try {
      const R = +localStorage.getItem(v);
      R >= 0.5 && R <= 1.8 && (game.post.exposureMul = R);
    } catch {}
    window.addEventListener("keydown", (R) => {
      if (R.code !== "BracketLeft" && R.code !== "BracketRight") return;
      const L = Math.min(
        1.8,
        Math.max(
          0.5,
          Math.round(
            game.post.exposureMul *
              (R.code === "BracketRight" ? 1.1 : 1 / 1.1) *
              100,
          ) / 100,
        ),
      );
      game.post.exposureMul = L;
      try {
        localStorage.setItem(v, String(L));
      } catch {}
      game.hud?.hint(`Brightness ${Math.round(L * 100)}%   ( [  ] )`, 1.6);
    });
    const T = (R) => {
      const L = Math.max(0, (R - r) / 1e3),
        V = Math.min(L, 1 / 15);
      ((r = Math.max(r, R)), h(), game.step(V));
      let N = null;
      if (
        (a &&
          o.length < 8 &&
          ((N = s.createQuery()), s.beginQuery(a.TIME_ELAPSED_EXT, N)),
        game.render(),
        N && (s.endQuery(a.TIME_ELAPSED_EXT), o.push(N)),
        (b += L),
        S++,
        (E = Math.max(E, L)),
        b > 0.5)
      ) {
        if (_.style.display !== "none") {
          const D = game.perf();
          _.textContent = `${(S / b).toFixed(0)} fps  ${((b / S) * 1e3).toFixed(1)} ms  worst ${(E * 1e3).toFixed(0)} ms
step ${D.cpuStep} ms  render ${D.cpuRender} ms (cpu)  card ${(c * 1e3).toFixed(1)} ms
calls ${D.calls}  tris ${(D.tris / 1e6).toFixed(2)}M
scale ${game.pixelRatio.toFixed(2)}  hp ${game.combat ? game.combat.hp | 0 : "-"}`;
        }
        ((b = 0), (S = 0), (E = 0));
      }
      if (
        e &&
        !game.paused &&
        L < 0.2 &&
        (w += L) > 5 &&
        (d.push(L), (f += L), (x -= L), (g += L), f > 3)
      ) {
        const D = d.slice().sort((oe, Ie) => oe - Ie),
          O = D[D.length >> 1],
          B = D[Math.floor(D.length * 0.9)];
        ((u = Math.min(u, Math.max(1 / 250, O))),
          O > u * 1.6 && (u = Math.min(O, 1 / 55)));
        const Y = Math.max(u, 1 / 120),
          Q = B > Y * 1.4 + 0.002,
          se = l.slice().sort((oe, Ie) => oe - Ie),
          ee = se.length >= 20 ? se[Math.floor(se.length * 0.9)] : null;
        l.length = 0;
        const re = ee == null || ee > Math.max(Y * 0.8, B * 0.7),
          Ee = ee != null && ee < Y * 0.55;
        ((y = Q && re ? y + 1 : 0),
          Q && re && (y >= 2 || B > Y * 2.2) && game.pixelRatio > i + 0.01
            ? ((game.pixelRatio = Math.max(i, game.pixelRatio - 0.1)),
              game.requestResize(),
              g < 7 && (m = Math.min(120, m * 2)),
              (x = m),
              (p = 0),
              (y = 0))
            : !Q || Ee
              ? ((p += f),
                p > 15 &&
                  x <= 0 &&
                  game.pixelRatio < n - 0.01 &&
                  ((game.pixelRatio = Math.min(n, game.pixelRatio + 0.1)),
                  game.requestResize(),
                  (p = 0),
                  (g = 0)))
              : (p = 0),
          (d.length = 0),
          (f = 0));
      }
      requestAnimationFrame(T);
    };
    requestAnimationFrame(T);
    const C = async () => {
      if (!e) {
        ((e = !0), (veilSubEl.textContent = "sound"), game.input.requestLock());
        try {
          (game.audio.unlock(),
            await game.audio.loadManifest(),
            await game.audio.preload(Object.keys(game.audio.manifest)));
        } catch (R) {
          console.warn("audio", R);
        }
        ((t = !0), veilEl.classList.add("gone"), game.script && game.script.start());
      }
    };
    (veilEl.addEventListener("click", () => {
      e ? game.input.requestLock() : C();
    }),
      canvasEl.addEventListener("click", () => {
        e && game.input.requestLock();
      }),
      (game.input.onLockChange = (R) => {
        t &&
          ((game.paused = !R),
          (veilSubEl.textContent = "click to continue"),
          veilEl.classList.toggle("gone", R),
          (veilEl.querySelector("h1").style.opacity = R ? 1 : 0.55));
      }));
  })
  .catch((r) => {
    ((veilSubEl.textContent = "error: " + r.message), console.error(r));
  });
