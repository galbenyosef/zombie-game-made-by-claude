// assets/park-CwBfNU5l 10 — fillrect
// Lines 2632-3063 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
function bakeEmergencySigns() {
  if (ce) return ce;
  const e = {};
  return (
    (ce = {
      tex: ye(2048, 2048, (t) => {
        let r = 4441;
        const o = () => (r = (r * 16807) % 2147483647) / 2147483647;
        ((t.fillStyle = "#7a7a76"), t.fillRect(0, 0, 2048, 2048));
        let n = 1e9;
        const i = (
            s,
            l,
            u,
            c,
            M,
            h = "Arial Black, Arial, sans-serif",
            v = "900",
            S = "center",
            d = n,
          ) => {
            ((t.font = `${v} ${c}px ${h}`),
              (t.fillStyle = M),
              (t.textAlign = S),
              (t.textBaseline = "middle"),
              t.fillText(s, l, u, d));
          },
          f = (s, l, u, c, M = 1) => {
            for (let v = 0; v < 40 * M; v++) {
              t.fillStyle = `rgba(30,26,20,${0.04 + o() * 0.08})`;
              const S = s + o() * u;
              t.fillRect(
                S,
                l + o() * c * 0.3,
                1 + o() * 3,
                c * (0.3 + o() * 0.7),
              );
            }
            const h = t.createLinearGradient(0, l + c * 0.6, 0, l + c);
            (h.addColorStop(0, "rgba(40,32,22,0)"),
              h.addColorStop(1, `rgba(40,32,22,${0.35 * M})`),
              (t.fillStyle = h),
              t.fillRect(s, l, u, c));
            for (let v = 0; v < 12 * M; v++)
              ((t.fillStyle = `rgba(20,16,12,${0.1 + o() * 0.2})`),
                t.beginPath(),
                t.arc(s + o() * u, l + o() * c, 2 + o() * 8, 0, 7),
                t.fill());
          },
          w = (s, l, u, c, M, h) => {
            (t.save(),
              t.beginPath(),
              t.rect(l, u, c, M),
              t.clip(),
              (n = c * 0.9),
              h(l, u, c, M),
              (n = 1e9),
              t.restore(),
              (e[s] = ae(l, u, c, M)));
          };
        (w("banner", 0, 0, 1024, 256, (s, l, u, c) => {
          ((t.fillStyle = "#a3201a"),
            t.fillRect(s, l, u, c),
            (t.fillStyle = "#f2efe6"),
            t.fillRect(s, l + 14, u, 10),
            t.fillRect(s, l + c - 24, u, 10),
            i("EVACUATION POINT", s + u / 2, l + c / 2 - 6, 104, "#f4f1e8"),
            i(
              "CITY EMERGENCY SERVICES  -  ARMY",
              s + u / 2,
              l + c - 52,
              28,
              "#f4f1e8",
              "Arial",
              "700",
            ));
          for (let M = 0; M < 6; M++)
            ((t.fillStyle = "#e8e2d2"),
              t.beginPath(),
              t.arc(s + 40 + M * 188, l + 40, 7, 0, 7),
              t.fill());
          f(s, l, u, c, 0.8);
        }),
          w("civilians", 1024, 0, 1024, 256, (s, l, u, c) => {
            ((t.fillStyle = "#e3b419"),
              t.fillRect(s, l, u, c),
              (t.strokeStyle = "#141414"),
              (t.lineWidth = 12),
              t.strokeRect(s + 12, l + 12, u - 24, c - 24),
              i(
                "CIVILIANS THIS WAY",
                s + 400,
                l + c / 2,
                82,
                "#141414",
                void 0,
                void 0,
                "center",
                700,
              ),
              (t.fillStyle = "#141414"),
              t.beginPath(),
              t.moveTo(s + 830, l + 80),
              t.lineTo(s + 930, l + 128),
              t.lineTo(s + 830, l + 176),
              t.lineTo(s + 830, l + 150),
              t.lineTo(s + 780, l + 150),
              t.lineTo(s + 780, l + 106),
              t.lineTo(s + 830, l + 106),
              t.fill(),
              f(s, l, u, c, 0.7));
          }),
          w("airRescue", 0, 256, 1024, 256, (s, l, u, c) => {
            ((t.fillStyle = "#ece8de"),
              t.fillRect(s, l, u, c),
              (t.fillStyle = "#b01e18"),
              t.fillRect(s, l, u, 30),
              t.fillRect(s, l + c - 30, u, 30),
              i(
                "AIR RESCUE ONLY",
                s + 610,
                l + c / 2,
                86,
                "#b01e18",
                void 0,
                void 0,
                "center",
                700,
              ),
              (t.fillStyle = "#1a1a1a"),
              t.fillRect(s + 60, l + 118, 120, 34),
              t.beginPath(),
              t.ellipse(s + 150, l + 135, 70, 34, 0, 0, 7),
              t.fill(),
              t.fillRect(s + 40, l + 94, 220, 6),
              t.fillRect(s + 150, l + 100, 6, 18),
              t.fillRect(s + 70, l + 172, 120, 5),
              f(s, l, u, c, 0.6));
          }),
          w("noEntry", 1024, 256, 512, 256, (s, l, u, c) => {
            ((t.fillStyle = "#efece4"),
              t.fillRect(s, l, u, c),
              (t.strokeStyle = "#b01e18"),
              (t.lineWidth = 16),
              t.strokeRect(s + 10, l + 10, u - 20, c - 20),
              i("MILITARY ZONE", s + u / 2, l + 98, 58, "#b01e18"),
              i("NO ENTRY", s + u / 2, l + 170, 66, "#1a1a1a"),
              f(s, l, u, c, 0.6));
          }),
          w("arrowUp", 1536, 256, 512, 256, (s, l, u, c) => {
            ((t.fillStyle = "#e9e5da"),
              t.fillRect(s, l, u, c),
              (t.fillStyle = "#c0261c"),
              t.fillRect(s, l, u, 22),
              t.fillRect(s, l + c - 22, u, 22),
              i(
                "EVACUATION",
                s + 190,
                l + 92,
                52,
                "#1c1c1c",
                void 0,
                void 0,
                "center",
                330,
              ),
              i(
                "POINT",
                s + 190,
                l + 158,
                60,
                "#1c1c1c",
                void 0,
                void 0,
                "center",
                330,
              ),
              (t.fillStyle = "#c0261c"),
              t.beginPath(),
              t.moveTo(s + 430, l + 44),
              t.lineTo(s + 490, l + 120),
              t.lineTo(s + 452, l + 120),
              t.lineTo(s + 452, l + 214),
              t.lineTo(s + 408, l + 214),
              t.lineTo(s + 408, l + 120),
              t.lineTo(s + 370, l + 120),
              t.fill(),
              f(s, l, u, c, 0.9));
          }),
          w("cross", 0, 512, 512, 512, (s, l, u, c) => {
            ((t.fillStyle = "#ece9e0"),
              t.fillRect(s, l, u, c),
              (t.fillStyle = "#c21d1d"),
              t.fillRect(s + 196, l + 76, 120, 360),
              t.fillRect(s + 76, l + 196, 360, 120),
              f(s, l, u, c, 0.5));
          }),
          w("map", 512, 512, 512, 512, (s, l, u, c) => {
            ((t.fillStyle = "#21352a"),
              t.fillRect(s, l, u, c),
              (t.fillStyle = "#d8d2bc"),
              t.fillRect(s + 24, l + 70, u - 48, c - 100),
              i(
                "PARKGATE PARK",
                s + u / 2,
                l + 38,
                40,
                "#e8e2cc",
                "Georgia, serif",
                "700",
              ),
              (t.fillStyle = "#9cb07a"),
              t.fillRect(s + 34, l + 80, u - 68, c - 120),
              (t.strokeStyle = "#efe8d2"),
              (t.lineWidth = 9),
              (t.lineCap = "round"),
              t.beginPath(),
              t.moveTo(s + 256, l + 380),
              t.lineTo(s + 262, l + 250),
              t.lineTo(s + 300, l + 150),
              t.stroke(),
              t.beginPath(),
              t.moveTo(s + 40, l + 250),
              t.lineTo(s + 470, l + 245),
              t.stroke(),
              t.beginPath(),
              t.moveTo(s + 230, l + 230),
              t.lineTo(s + 120, l + 110),
              t.stroke(),
              (t.fillStyle = "#7d9cb4"),
              t.beginPath(),
              t.arc(s + 260, l + 248, 22, 0, 7),
              t.fill(),
              (t.fillStyle = "#c0261c"),
              t.beginPath(),
              t.arc(s + 256, l + 384, 10, 0, 7),
              t.fill(),
              i(
                "YOU ARE HERE",
                s + 340,
                l + 384,
                18,
                "#2a2a2a",
                "Arial",
                "700",
              ),
              (t.fillStyle = "#e9e3cc"),
              t.fillRect(s + 300, l + 100, 120, 70),
              i("H", s + 360, l + 135, 40, "#c0261c"),
              i("EVACUATION", s + 360, l + 186, 16, "#2a2a2a", "Arial", "700"),
              i("BANDSTAND", s + 120, l + 290, 16, "#2a2a2a", "Arial", "700"),
              i("PLAYGROUND", s + 120, l + 360, 16, "#2a2a2a", "Arial", "700"),
              i("ROSE GARDEN", s + 400, l + 330, 16, "#2a2a2a", "Arial", "700"),
              (t.strokeStyle = "rgba(200,30,20,0.85)"),
              (t.lineWidth = 5),
              t.beginPath(),
              t.moveTo(s + 256, l + 372),
              t.quadraticCurveTo(s + 290, l + 250, s + 340, l + 175),
              t.stroke(),
              f(s, l, u, c, 0.9));
          }),
          w("ambulance", 1024, 512, 1024, 256, (s, l, u, c) => {
            ((t.fillStyle = "#f0eee8"), t.fillRect(s, l, u, c));
            for (let M = 0; M < 16; M++)
              ((t.fillStyle = M % 2 ? "#1f4fa8" : "#e8d020"),
                t.fillRect(s + M * 64, l + 150, 64, 50));
            ((t.fillStyle = "#c0201a"),
              t.fillRect(s, l + 206, u, 16),
              i("AMBULANCE", s + u / 2, l + 76, 112, "#1f4fa8"));
          }),
          w("ambFront", 1024, 768, 512, 128, (s, l, u, c) => {
            ((t.fillStyle = "#f0eee8"),
              t.fillRect(s, l, u, c),
              t.save(),
              t.translate(s + u / 2, l + c / 2),
              t.scale(-1, 1),
              i("AMBULANCE", 0, 0, 70, "#1f4fa8"),
              t.restore());
          }),
          w("triage", 1536, 768, 512, 128, (s, l, u, c) => {
            ((t.fillStyle = "#ece9e0"),
              t.fillRect(s, l, u, c),
              (t.fillStyle = "#c21d1d"),
              t.fillRect(s + 20, l + 30, 70, 20),
              t.fillRect(s + 45, l + 5, 20, 70),
              i("TRIAGE", s + 300, l + c / 2, 70, "#1a1a1a"),
              f(s, l, u, c, 0.6));
          }),
          w("plaque", 1024, 896, 1024, 128, (s, l, u, c) => {
            ((t.fillStyle = "#3e3424"),
              t.fillRect(s, l, u, c),
              (t.strokeStyle = "#7a6440"),
              (t.lineWidth = 6),
              t.strokeRect(s + 8, l + 8, u - 16, c - 16),
              i(
                "PEACE",
                s + u / 2,
                l + 44,
                46,
                "#a08a5c",
                "Georgia, serif",
                "700",
              ),
              i(
                "RAISED BY THE PEOPLE OF PARKGATE  1921",
                s + u / 2,
                l + 92,
                26,
                "#8a7650",
                "Georgia, serif",
                "700",
              ));
          }));
        for (let s = 0; s < 8; s++) {
          const l = (s % 4) * 256,
            u = 1024 + Math.floor(s / 4) * 256;
          w("paper" + s, l, u, 256, 256, (c, M, h, v) => {
            ((t.fillStyle = ["#e8e4d8", "#ddd8c8", "#ece6d0", "#d6d4cc"][
              s % 4
            ]),
              t.fillRect(c, M, h, v),
              s === 3 &&
                ((t.fillStyle = "#c0261c"),
                t.fillRect(c, M, h, 50),
                i("EVACUATE", c + h / 2, M + 26, 30, "#fff")),
              (t.fillStyle = "rgba(30,30,30,0.75)"));
            for (let S = 0; S < 14; S++) {
              const d = 60 + o() * 150;
              (t.fillRect(c + 18, M + (s === 3 ? 64 : 22) + S * 15, d, 5),
                s % 2 === 0 &&
                  S % 3 === 0 &&
                  t.fillRect(c + 190, M + 22 + S * 15, 40, 5));
            }
            if (s === 5) {
              ((t.strokeStyle = "rgba(30,30,30,0.7)"), (t.lineWidth = 2));
              for (let S = 0; S < 10; S++)
                t.strokeRect(c + 14, M + 20 + S * 22, h - 28, 22);
            }
            f(c, M, h, v, 0.5);
          });
        }
        (w("genPanel", 1024, 1024, 512, 256, (s, l, u, c) => {
          ((t.fillStyle = "#2a2c24"),
            t.fillRect(s, l, u, c),
            i(
              "DANGER  415 V",
              s + u / 2,
              l + 40,
              34,
              "#e8c020",
              "Arial",
              "900",
            ));
          for (let M = 0; M < 4; M++)
            ((t.fillStyle = "#111"),
              t.beginPath(),
              t.arc(s + 80 + M * 110, l + 140, 34, 0, 7),
              t.fill(),
              (t.strokeStyle = "#888"),
              (t.lineWidth = 3),
              t.stroke());
          ((t.fillStyle = "#6a6a60"), t.fillRect(s + 40, l + 200, u - 80, 26));
        }),
          w("crate", 1536, 1024, 512, 256, (s, l, u, c) => {
            ((t.fillStyle = "#4a5030"),
              t.fillRect(s, l, u, c),
              i(
                "RATIONS  24 x 1",
                s + u / 2,
                l + 90,
                46,
                "#d8cc90",
                "Consolas, monospace",
                "700",
              ),
              i(
                "LOT 0417  -  ARMY",
                s + u / 2,
                l + 160,
                34,
                "#d8cc90",
                "Consolas, monospace",
                "700",
              ),
              f(s, l, u, c, 0.8));
          }),
          w("keepOff", 1024, 1280, 512, 128, (s, l, u, c) => {
            ((t.fillStyle = "#1e3a2a"),
              t.fillRect(s, l, u, c),
              (t.strokeStyle = "#d8d0b0"),
              (t.lineWidth = 6),
              t.strokeRect(s + 8, l + 8, u - 16, c - 16),
              i(
                "PLEASE KEEP OFF THE GRASS",
                s + u / 2,
                l + c / 2,
                34,
                "#e0d8b8",
                "Georgia, serif",
                "700",
              ),
              f(s, l, u, c, 0.6));
          }),
          w("playSign", 1536, 1280, 512, 128, (s, l, u, c) => {
            ((t.fillStyle = "#1e3a2a"),
              t.fillRect(s, l, u, c),
              i(
                "CHILDREN’S PLAYGROUND",
                s + u / 2,
                l + 44,
                36,
                "#e0d8b8",
                "Georgia, serif",
                "700",
              ),
              i(
                "NO DOGS",
                s + u / 2,
                l + 92,
                28,
                "#e0d8b8",
                "Georgia, serif",
                "700",
              ),
              f(s, l, u, c, 0.6));
          }));
      }),
      rect: e,
    }),
    ce
  );
}
