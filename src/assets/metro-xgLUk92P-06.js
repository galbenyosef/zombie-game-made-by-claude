// assets/metro-xgLUk92P 06 — fillstyle
// Lines 1358-2373 of readable/assets/metro-xgLUk92P.pretty.js (statement-aligned).
function Ko() {
  const c = Ve(5310),
    a = new ne(2048, 3072, { bg: "#2a2a28" });
  (a.put("ash_name", 1024, 200, (t, e, n) => {
    (Tt(t, e, n, c, "#1d4644", "#e3d6b4"),
      J(t, "ASHWOOD", e / 2, n / 2 + 6, 128, { color: "#eadfc2", spacing: 18 }),
      P0(t, e, n, c, 0.8));
  }),
    a.put("ash_name_s", 512, 128, (t, e, n) => {
      (Tt(t, e, n, c, "#1d4644", "#e3d6b4"),
        J(t, "ASHWOOD", e / 2, n / 2 + 4, 74, { color: "#eadfc2", spacing: 8 }),
        P0(t, e, n, c, 0.9));
    }),
    a.put("ash_plat1", 512, 256, (t, e, n) => {
      (Tt(t, e, n, c, "#e6dcc2", "#1d4644"),
        vt(t, 92, 92, 52),
        J(t, "1", e - 92, 96, 120, { color: "#1d4644", font: nt }),
        J(t, "EASTBOUND", 300, 70, 46, { color: "#1d4644", spacing: 4 }),
        J(t, "to PARKGATE", e / 2, 190, 52, { color: "#2a2a28" }),
        P0(t, e, n, c, 1));
    }),
    a.put("ash_plat2", 512, 256, (t, e, n) => {
      (Tt(t, e, n, c, "#e6dcc2", "#1d4644"),
        vt(t, 92, 92, 52),
        J(t, "2", e - 92, 96, 120, { color: "#1d4644", font: nt }),
        J(t, "WESTBOUND", 300, 70, 46, { color: "#1d4644", spacing: 4 }),
        J(t, "NOT IN SERVICE", e / 2, 190, 44, { color: "#6b1d1a" }),
        P0(t, e, n, c, 1.1));
    }),
    a.put("ash_wayout", 640, 160, (t, e, n) => {
      (Tt(t, e, n, c, "#e8d24a", "#1a1a18"),
        J(t, "WAY OUT", 260, n / 2 + 4, 88, { color: "#151512", spacing: 6 }),
        se(t, e - 110, n / 2, 110, 0, "#151512"),
        P0(t, e, n, c, 1.1));
    }),
    a.put("staff_only", 384, 192, (t, e, n) => {
      (Tt(t, e, n, c, "#eae6da", "#7a1d1a"),
        J(t, "STAFF", e / 2, 70, 70, { color: "#7a1d1a", spacing: 6 }),
        J(t, "ONLY", e / 2, 140, 70, { color: "#7a1d1a", spacing: 6 }),
        P0(t, e, n, c, 1));
    }),
    a.put("no_entry", 384, 192, (t, e, n) => {
      (Tt(t, e, n, c, "#eae6da", "#7a1d1a"),
        J(t, "NO ENTRY", e / 2, 72, 56, { color: "#7a1d1a" }),
        J(t, "PASSENGERS MUST NOT", e / 2, 128, 25, {
          color: "#222",
          weight: "normal",
        }),
        J(t, "PASS THIS POINT", e / 2, 158, 25, {
          color: "#222",
          weight: "normal",
        }),
        P0(t, e, n, c, 1));
    }),
    a.put("danger_rail", 384, 256, (t, e, n) => {
      ((t.fillStyle = "#e8c832"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#151512"),
        t.beginPath(),
        t.moveTo(e / 2, 22),
        t.lineTo(e / 2 + 70, 140),
        t.lineTo(e / 2 - 70, 140),
        t.closePath(),
        t.fill(),
        (t.fillStyle = "#e8c832"),
        t.beginPath(),
        t.moveTo(e / 2, 46),
        t.lineTo(e / 2 + 50, 128),
        t.lineTo(e / 2 - 50, 128),
        t.closePath(),
        t.fill(),
        (t.fillStyle = "#151512"),
        t.beginPath(),
        t.moveTo(e / 2 + 8, 60),
        t.lineTo(e / 2 - 14, 98),
        t.lineTo(e / 2 + 2, 98),
        t.lineTo(e / 2 - 8, 124),
        t.lineTo(e / 2 + 16, 86),
        t.lineTo(e / 2, 86),
        t.closePath(),
        t.fill(),
        J(t, "DANGER", e / 2, 172, 40, { color: "#151512", font: R0 }),
        J(t, "LIVE RAIL", e / 2, 214, 34, { color: "#151512", font: R0 }),
        P0(t, e, n, c, 1.2));
    }),
    a.put("route", 1024, 256, (t, e, n) => {
      (Tt(t, e, n, c, "#ece4cf", "#1d4644", !1),
        vt(t, 70, 64, 40),
        J(t, "LINE 4", 210, 66, 50, { color: "#1d4644", spacing: 3 }));
      const r = ["ASHWOOD", "MILLBANK", "ST. AGNES", "PARKGATE"],
        u = 160;
      ((t.fillStyle = "#6b1d1a"),
        t.fillRect(110, u - 9, e - 220, 18),
        r.forEach((b, M) => {
          const x = 110 + (M * (e - 220)) / 3;
          ((t.fillStyle = "#ece4cf"),
            t.beginPath(),
            t.arc(x, u, 20, 0, Math.PI * 2),
            t.fill(),
            (t.strokeStyle = "#6b1d1a"),
            (t.lineWidth = 7),
            t.stroke(),
            J(t, b, x, u + 50, 30, {
              color: "#222",
              weight: M === 0 ? "bold" : "normal",
            }));
        }),
        J(t, "YOU ARE HERE", 110, u - 44, 20, { color: "#6b1d1a" }),
        P0(t, e, n, c, 1));
    }),
    a.put("poster_cola", 340, 512, (t, e, n) => {
      const r = t.createLinearGradient(0, 0, 0, n);
      (r.addColorStop(0, "#b4482c"),
        r.addColorStop(1, "#7a2a1c"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "rgba(255,230,200,0.85)"),
        t.beginPath(),
        t.moveTo(e / 2 - 34, 430),
        t.lineTo(e / 2 + 34, 430),
        t.lineTo(e / 2 + 34, 260),
        t.quadraticCurveTo(e / 2 + 34, 210, e / 2 + 14, 180),
        t.lineTo(e / 2 + 12, 120),
        t.lineTo(e / 2 - 12, 120),
        t.lineTo(e / 2 - 14, 180),
        t.quadraticCurveTo(e / 2 - 34, 210, e / 2 - 34, 260),
        t.closePath(),
        t.fill(),
        (t.fillStyle = "#b4482c"),
        t.fillRect(e / 2 - 34, 290, 68, 60),
        J(t, "H", e / 2, 322, 40, { color: "#f4e4cc", font: ft }),
        J(t, "HALDEN", e / 2, 52, 66, {
          color: "#f6e8d0",
          font: ft,
          spacing: 4,
        }),
        J(t, "COLA", e / 2, 100, 40, {
          color: "#f6e8d0",
          font: ft,
          spacing: 14,
        }),
        J(t, "Ice cold. Always.", e / 2, 470, 30, {
          color: "#f6e8d0",
          font: ft,
          weight: "italic",
        }),
        (t.fillStyle = "rgba(235,225,205,0.35)"),
        t.fillRect(0, 0, e, n),
        P0(t, e, n, c, 1.4),
        (t.fillStyle = "#2a2a28"),
        t.beginPath(),
        t.moveTo(e, n * 0.62),
        t.lineTo(e * 0.7, n),
        t.lineTo(e, n),
        t.fill());
    }),
    a.put("poster_coast", 340, 512, (t, e, n) => {
      const r = t.createLinearGradient(0, 0, 0, 300);
      (r.addColorStop(0, "#5aa0b8"),
        r.addColorStop(1, "#f0d9a0"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, 300),
        (t.fillStyle = "#e8a040"),
        t.beginPath(),
        t.arc(e * 0.68, 210, 46, 0, Math.PI * 2),
        t.fill(),
        (t.fillStyle = "#2f6f88"),
        t.fillRect(0, 290, e, 120),
        (t.fillStyle = "#e8d8a8"),
        t.beginPath(),
        t.moveTo(0, 380),
        t.quadraticCurveTo(e * 0.5, 340, e, 400),
        t.lineTo(e, n),
        t.lineTo(0, n),
        t.fill());
      for (let u = 0; u < 5; u++)
        ((t.strokeStyle = "rgba(255,255,255,0.6)"),
          (t.lineWidth = 3),
          t.beginPath(),
          t.moveTo(20 + u * 60, 320 + u * 8),
          t.lineTo(60 + u * 60, 318 + u * 8),
          t.stroke());
      (J(t, "VISIT THE", e / 2, 48, 34, {
        color: "#1d3a48",
        font: nt,
        spacing: 8,
      }),
        J(t, "COAST", e / 2, 100, 78, {
          color: "#1d3a48",
          font: nt,
          spacing: 6,
        }),
        J(t, "by Line 4 and Coastal Rail", e / 2, 470, 22, {
          color: "#3a3020",
          font: nt,
          weight: "normal",
        }),
        (t.fillStyle = "rgba(240,235,220,0.42)"),
        t.fillRect(0, 0, e, n),
        P0(t, e, n, c, 1.3));
    }),
    a.put("poster_film", 340, 512, (t, e, n) => {
      ((t.fillStyle = "#121418"), t.fillRect(0, 0, e, n));
      const r = t.createRadialGradient(e / 2, 200, 10, e / 2, 200, 200);
      (r.addColorStop(0, "rgba(200,60,50,0.9)"),
        r.addColorStop(1, "rgba(40,10,10,0)"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#050505"),
        t.beginPath(),
        t.ellipse(e / 2, 150, 34, 42, 0, 0, Math.PI * 2),
        t.fill(),
        t.beginPath(),
        t.moveTo(e / 2 - 70, 330),
        t.quadraticCurveTo(e / 2, 170, e / 2 + 70, 330),
        t.lineTo(e / 2 + 40, 400),
        t.lineTo(e / 2 - 40, 400),
        t.fill(),
        J(t, "THE LAST", e / 2, 420, 40, {
          color: "#e8d8c0",
          font: ft,
          spacing: 10,
        }),
        J(t, "DANCE", e / 2, 462, 52, {
          color: "#d84a3a",
          font: ft,
          spacing: 12,
        }),
        J(t, "NOW SHOWING  -  THE REGENT", e / 2, 496, 15, {
          color: "#a89880",
          font: nt,
          weight: "normal",
        }),
        (t.fillStyle = "rgba(220,215,200,0.22)"),
        t.fillRect(0, 0, e, n),
        P0(t, e, n, c, 1.2, "60,50,40"));
    }),
    a.put("poster_missing", 340, 480, (t, e, n) => {
      ((t.fillStyle = "#eeeae0"),
        t.fillRect(0, 0, e, n),
        J(t, "MISSING", e / 2, 52, 74, {
          color: "#b01a14",
          font: "Impact, Arial Black, sans-serif",
          weight: "normal",
          spacing: 4,
        }),
        (t.fillStyle = "#9a958a"),
        t.fillRect(70, 96, 200, 210));
      const r = t.createLinearGradient(0, 96, 0, 306);
      (r.addColorStop(0, "#c8c0b0"),
        r.addColorStop(1, "#6a645a"),
        (t.fillStyle = r),
        t.fillRect(76, 102, 188, 198),
        (t.fillStyle = "#4a4038"),
        t.beginPath(),
        t.ellipse(170, 180, 46, 56, 0, 0, Math.PI * 2),
        t.fill(),
        t.beginPath(),
        t.ellipse(170, 300, 80, 60, 0, Math.PI, 0),
        t.fill(),
        (t.fillStyle = "#d8c8b0"),
        t.beginPath(),
        t.ellipse(170, 190, 32, 40, 0, 0, Math.PI * 2),
        t.fill(),
        Wt(
          t,
          [
            "EMMA HOLT, aged 7",
            "Last seen at ASHWOOD station",
            "on Tuesday evening, wearing a",
            "red coat and yellow boots.",
          ],
          30,
          322,
          21,
          26,
          {
            color: "#1a1a1a",
            weight: "bold",
            font: "Arial, sans-serif",
            maxW: 290,
          },
        ),
        Wt(
          t,
          ["If you have seen her please", "call 0800 731 044. PLEASE."],
          30,
          430,
          19,
          23,
          { color: "#333", font: "Arial, sans-serif", maxW: 290 },
        ),
        (t.fillStyle = "rgba(210,200,170,0.6)"));
      for (const [u, b] of [
        [0, 0],
        [e - 60, 0],
        [0, n - 22],
        [e - 60, n - 22],
      ])
        t.fillRect(u, b, 60, 22);
      P0(t, e, n, c, 0.6);
    }),
    a.put("notice_evac", 420, 600, (t, e, n) => {
      ((t.fillStyle = "#f2efe4"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#1a1a1a"),
        t.fillRect(0, 0, e, 64),
        J(t, "EMERGENCY AUTHORITY", e / 2, 34, 30, {
          color: "#f2efe4",
          font: R0,
          spacing: 3,
        }),
        (t.fillStyle = "#c8241a"),
        t.fillRect(0, 64, e, 70),
        J(t, "EVACUATION ORDER", e / 2, 100, 40, {
          color: "#fff",
          font: R0,
          spacing: 2,
        }),
        Wt(
          t,
          [
            "By order of the Emergency Authority, ALL",
            "residents of the ASHWOOD, MILLBANK and",
            "ST. AGNES districts must leave their homes",
            "IMMEDIATELY.",
            "",
            "Proceed on foot to the designated",
            "EVACUATION POINT at PARKGATE PARK.",
            "Air evacuation operates from 05:00.",
            "",
            "Bring identification, water and essential",
            "medication only. Do not return home.",
            "Do NOT approach infected persons.",
            "Do NOT attempt to help the injured.",
          ],
          26,
          152,
          21,
          27,
          { color: "#1a1a1a", font: "Arial, sans-serif", maxW: 370 },
        ),
        (t.strokeStyle = "#c8241a"),
        (t.lineWidth = 4),
        t.strokeRect(250, 500, 140, 70),
        J(t, "LINE 4", 320, 520, 20, { color: "#c8241a", font: R0 }),
        J(t, "SUSPENDED", 320, 548, 22, { color: "#c8241a", font: R0 }),
        P0(t, e, n, c, 0.7));
    }),
    a.put("notice_service", 420, 300, (t, e, n) => {
      ((t.fillStyle = "#ece6d4"),
        t.fillRect(0, 0, e, n),
        vt(t, 50, 46, 30),
        J(t, "SERVICE NOTICE", 250, 46, 34, { color: "#1d4644", font: nt }),
        Wt(
          t,
          [
            "Owing to the emergency, services on",
            "Line 4 are suspended until further",
            "notice. Automatic trains may still run.",
            "Keep back from the platform edge.",
          ],
          26,
          100,
          21,
          30,
          { color: "#222", font: nt, maxW: 370 },
        ),
        P0(t, e, n, c, 1.2));
    }),
    a.put("clock", 256, 256, (t, e, n) => {
      ((t.fillStyle = "#e9e4d6"),
        t.beginPath(),
        t.arc(128, 128, 126, 0, Math.PI * 2),
        t.fill());
      for (let r = 0; r < 60; r++) {
        const u = (r / 60) * Math.PI * 2,
          b = r % 5 === 0;
        (t.save(),
          t.translate(128, 128),
          t.rotate(u),
          (t.fillStyle = "#1a1a1a"),
          t.fillRect(-(b ? 4 : 1.2), -118, b ? 8 : 2.4, b ? 26 : 9),
          t.restore());
      }
      (vt(t, 128, 186, 14),
        J(t, "ASHWOOD", 128, 80, 14, { color: "#333", font: nt, spacing: 3 }),
        P0(t, e, n, c, 0.6));
    }));
  const o = (t, e, n, r) => {
      ((t.fillStyle = r), t.fillRect(0, 0, e, n));
    },
    s = (t, e, n, r, u, b, M, x = "rgba(40,40,40,0.55)") => {
      const w = (r - e) / b;
      for (let p = 0; p < b; p++)
        for (let S = n; S < u; S += 7) {
          const y = w - 10 - (M() < 0.15 ? M() * w * 0.5 : 0);
          ((t.fillStyle = x), t.fillRect(e + p * w + 4, S, y, 3));
        }
    };
  (a.put("news1", 360, 500, (t, e, n) => {
    (o(t, e, n, "#d9d5c8"),
      J(t, "THE CITY HERALD", e / 2, 34, 34, {
        color: "#1a1a1a",
        font: ft,
        spacing: 2,
      }),
      (t.fillStyle = "#1a1a1a"),
      t.fillRect(14, 56, e - 28, 3),
      J(t, "CITY SEALED", e / 2, 96, 50, {
        color: "#111",
        font: "Impact, Arial Black, sans-serif",
        weight: "normal",
      }),
      J(t, "Army closes bridges as sickness spreads", e / 2, 132, 17, {
        color: "#222",
        font: ft,
        weight: "italic",
      }),
      (t.fillStyle = "#6e6c66"),
      t.fillRect(14, 150, e - 28, 150),
      (t.fillStyle = "#3a3936"),
      t.fillRect(40, 190, 120, 110),
      t.fillRect(200, 210, 90, 90),
      s(t, 14, 312, e - 14, n - 14, 3, c),
      P0(t, e, n, c, 0.5));
  }),
    a.put("news2", 360, 500, (t, e, n) => {
      (o(t, e, n, "#dcd6c4"),
        J(t, "DAILY POST", e / 2, 36, 40, {
          color: "#a01812",
          font: "Impact, Arial Black, sans-serif",
          weight: "normal",
          spacing: 3,
        }),
        J(t, "EVACUATE", e / 2, 98, 62, {
          color: "#111",
          font: "Impact, Arial Black, sans-serif",
          weight: "normal",
        }),
        J(t, "‘Do not go out after dark’", e / 2, 140, 20, {
          color: "#222",
          font: ft,
          weight: "bold",
        }),
        s(t, 14, 160, e - 14, n - 14, 4, c),
        (t.fillStyle = "#5e5c56"),
        t.fillRect(190, 200, 156, 120),
        P0(t, e, n, c, 0.6));
    }),
    a.put("leaflet", 240, 340, (t, e, n) => {
      (o(t, e, n, "#eeebe2"),
        (t.fillStyle = "#c8241a"),
        t.fillRect(0, 0, e, 56),
        J(t, "EMERGENCY", e / 2, 30, 30, { color: "#fff", font: R0 }),
        Wt(
          t,
          [
            "1. Stay indoors.",
            "2. Lock doors and windows.",
            "3. Do not approach the sick.",
            "4. Go to your nearest",
            "    EVACUATION POINT.",
          ],
          16,
          76,
          17,
          24,
          { color: "#222", font: "Arial, sans-serif", maxW: 208 },
        ),
        s(t, 12, 210, e - 12, n - 20, 2, c, "rgba(60,60,60,0.45)"),
        P0(t, e, n, c, 0.5));
    }),
    a.put("badge", 256, 256, (t, e, n) => {
      ((t.fillStyle = "#1a1e22"),
        t.fillRect(0, 0, e, n),
        vt(t, e / 2, n / 2, 110));
    }),
    a.put("kiosk", 640, 96, (t, e, n) => {
      ((t.fillStyle = "#2a3a30"),
        t.fillRect(0, 0, e, n),
        J(t, "NEWS  ·  TOBACCO  ·  SWEETS", e / 2, n / 2 + 2, 44, {
          color: "#e8d8a8",
          font: nt,
          spacing: 3,
        }),
        P0(t, e, n, c, 1.2));
    }),
    a.put("pg_name", 1280, 192, (t, e, n) => {
      ((t.fillStyle = "#20262c"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#8a2a24"),
        t.fillRect(0, n - 22, e, 10),
        vt(t, 96, n / 2 - 6, 62),
        J(t, "PARKGATE", e / 2 + 40, n / 2 - 4, 120, {
          color: "#f2f0ea",
          font: R0,
          weight: "600",
          spacing: 10,
        }),
        P0(t, e, n, c, 0.6, "10,10,10"));
    }),
    a.put("pg_wayout", 768, 160, (t, e, n) => {
      ((t.fillStyle = "#e9c43a"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#151512"),
        t.fillRect(0, 0, 150, n),
        se(t, 75, n / 2, 100, -Math.PI / 2, "#e9c43a"),
        J(t, "Way out", 200, 62, 62, {
          color: "#151512",
          font: R0,
          align: "left",
          weight: "600",
        }),
        J(t, "Parkgate Park  ·  Park Road", 200, 122, 34, {
          color: "#151512",
          font: R0,
          align: "left",
          weight: "normal",
        }),
        P0(t, e, n, c, 0.5));
    }),
    a.put("pg_terminate", 768, 128, (t, e, n) => {
      ((t.fillStyle = "#20262c"),
        t.fillRect(0, 0, e, n),
        J(t, "ALL TRAINS TERMINATE HERE", e / 2, n / 2, 48, {
          color: "#f2f0ea",
          font: R0,
          weight: "600",
          spacing: 2,
        }),
        P0(t, e, n, c, 0.5, "10,10,10"));
    }),
    a.put("pg_tickets", 512, 128, (t, e, n) => {
      ((t.fillStyle = "#20262c"),
        t.fillRect(0, 0, e, n),
        J(t, "Tickets & Information", e / 2, n / 2, 42, {
          color: "#f2f0ea",
          font: R0,
          weight: "600",
        }));
    }),
    a.put("pg_platform", 512, 160, (t, e, n) => {
      ((t.fillStyle = "#20262c"),
        t.fillRect(0, 0, e, n),
        vt(t, 70, n / 2, 46),
        J(t, "Platform 1", 300, n / 2, 58, {
          color: "#f2f0ea",
          font: R0,
          weight: "600",
        }),
        se(t, e - 40, n / 2, 50, Math.PI / 2, "#e9c43a"));
    }),
    a.put("police_tape", 1024, 64, (t, e, n) => {
      ((t.fillStyle = "#e8cc22"), t.fillRect(0, 0, e, n));
      for (let r = -n; r < e; r += 64)
        ((t.fillStyle = "#121212"),
          t.beginPath(),
          t.moveTo(r, n),
          t.lineTo(r + 24, n),
          t.lineTo(r + 24 + n, 0),
          t.lineTo(r + n, 0),
          t.fill());
      ((t.fillStyle = "#e8cc22"),
        t.fillRect(0, 14, e, 36),
        J(
          t,
          "POLICE LINE  DO NOT CROSS      POLICE LINE  DO NOT CROSS",
          e / 2,
          n / 2 + 1,
          28,
          { color: "#121212", font: R0, weight: "600" },
        ));
    }),
    a.put("pg_quarantine", 420, 300, (t, e, n) => {
      ((t.fillStyle = "#d8d2c0"),
        t.fillRect(0, 0, e, n),
        (t.strokeStyle = "#b01a14"),
        (t.lineWidth = 10),
        t.strokeRect(14, 14, e - 28, n - 28),
        J(t, "DO NOT GO", e / 2, 92, 60, {
          color: "#141414",
          font: "Impact, Arial Black, sans-serif",
          weight: "normal",
        }),
        J(t, "DOWN THERE", e / 2, 160, 60, {
          color: "#141414",
          font: "Impact, Arial Black, sans-serif",
          weight: "normal",
        }),
        J(t, "THEY ARE IN THE TUNNELS", e / 2, 232, 28, {
          color: "#b01a14",
          font: "Arial, sans-serif",
        }),
        P0(t, e, n, c, 1.1));
    }),
    a.put("pg_ad1", 600, 400, (t, e, n) => {
      const r = t.createLinearGradient(0, 0, e, n);
      (r.addColorStop(0, "#20384a"),
        r.addColorStop(1, "#0c1620"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#c8d8e0"),
        t.beginPath(),
        t.ellipse(e * 0.72, n * 0.5, 120, 120, 0, 0, Math.PI * 2),
        t.fill(),
        (t.fillStyle = "#20384a"),
        t.beginPath(),
        t.ellipse(e * 0.76, n * 0.46, 96, 100, 0, 0, Math.PI * 2),
        t.fill(),
        J(t, "MIRA", 160, 140, 88, {
          color: "#e8eef2",
          font: R0,
          weight: "600",
          spacing: 8,
        }),
        J(t, "Insurance for", 160, 220, 34, {
          color: "#a8c0cc",
          font: R0,
          weight: "normal",
        }),
        J(t, "whatever comes.", 160, 262, 34, {
          color: "#a8c0cc",
          font: R0,
          weight: "normal",
        }));
    }),
    a.put("pg_ad2", 600, 400, (t, e, n) => {
      ((t.fillStyle = "#e8e2d4"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#c84030"),
        t.fillRect(0, n - 120, e, 120));
      for (let r = 0; r < 6; r++)
        ((t.fillStyle = [
          "#2a6a58",
          "#e8a040",
          "#c84030",
          "#3a5a8a",
          "#e8c43a",
          "#6a3a7a",
        ][r]),
          t.beginPath(),
          t.arc(90 + r * 84, 150, 34, 0, Math.PI * 2),
          t.fill());
      (J(t, "CITY ZOO", e / 2, 60, 64, {
        color: "#1a1a1a",
        font: R0,
        weight: "600",
        spacing: 6,
      }),
        J(t, "Open every day 9 - 6", e / 2, n - 60, 40, {
          color: "#fff",
          font: R0,
          weight: "normal",
        }));
    }));
  const f = new ne(2048, 256, { bg: "#000" });
  f.put("frieze", 2048, 256, (t, e, n) => {
    const u = e / 8,
      b = n / 8,
      M = document.createElement("canvas");
    ((M.width = u), (M.height = b));
    const x = M.getContext("2d");
    ((x.fillStyle = "#000"),
      x.fillRect(0, 0, u, b),
      (x.fillStyle = "#fff"),
      (x.font = `bold 22px ${nt}`),
      (x.textAlign = "center"),
      (x.textBaseline = "middle"),
      "letterSpacing" in x && (x.letterSpacing = "5px"),
      x.fillText("ASHWOOD", u / 2, b / 2 + 1));
    const w = x.getImageData(0, 0, u, b).data;
    for (let p = 0; p < b; p++)
      for (let S = 0; S < u; S++) {
        const y = w[(p * u + S) * 4] > 110,
          L = p <= 1 || p >= b - 2,
          v = p === 3 || p === 4 || p === b - 4 || p === b - 5,
          C = 0.88 + c() * 0.2;
        let k = y
          ? [222, 208, 172]
          : L
            ? [222, 208, 172]
            : v
              ? [96, 30, 28]
              : [30, 76, 74];
        (c() < 0.012 && (k = [58, 54, 48]),
          (t.fillStyle = `rgb(${k.map((R) => Math.round(R * C)).join(",")})`),
          t.fillRect(S * 8 + 1, p * 8 + 1, 7, 7),
          (t.fillStyle = "rgba(255,255,255,0.07)"),
          t.fillRect(S * 8 + 1, p * 8 + 1, 5, 2));
      }
    P0(t, e, n, c, 0.9);
  });
  const h = new ne(1024, 1536, { alpha: !0 }),
    d = (t, e, n, r, u, b) => {
      (J(t, e, n, r, u, {
        font: "Arial Black, Impact, sans-serif",
        color: b,
        weight: "normal",
        spacing: u * 0.08,
      }),
        (t.globalCompositeOperation = "destination-out"),
        (t.fillStyle = "#000"),
        (t.font = `${u}px Arial Black`));
      const M = t.measureText(e).width;
      for (let x = 0; x < e.length; x++) {
        const w = n - M / 2 + ((x + 0.5) * M) / e.length;
        t.fillRect(w - 1.5, r - u * 0.06, 3, u * 0.12);
      }
      t.globalCompositeOperation = "source-over";
      for (let x = 0; x < 200; x++)
        ((t.fillStyle = b.replace("rgb", "rgba").replace(")", ",0.25)")),
          t.fillRect(
            n - M / 2 + c() * M,
            r - u * 0.6 + c() * u * 1.2,
            1.5,
            1.5,
          ));
    };
  h.put("st_exit", 512, 160, (t, e, n) => {
    (d(t, "EMERGENCY EXIT 4", e / 2, 56, 52, "rgb(214,190,72)"),
      d(t, "LINE 4", e / 2, 122, 46, "rgb(214,190,72)"));
  });
  for (const t of [2, 4, 6, 8])
    h.put("st_d" + t, 160, 80, (e, n, r) => {
      ((e.fillStyle = "rgba(220,214,200,0.9)"),
        e.fillRect(6, r / 2 - 3, 46, 6),
        d(e, "-" + t + " m", 104, r / 2, 34, "rgb(220,214,200)"));
    });
  h.put("st_up", 160, 160, (t, e, n) => {
    ((t.fillStyle = "rgba(214,190,72,0.9)"),
      t.beginPath(),
      t.moveTo(80, 18),
      t.lineTo(140, 90),
      t.lineTo(104, 90),
      t.lineTo(104, 146),
      t.lineTo(56, 146),
      t.lineTo(56, 90),
      t.lineTo(20, 90),
      t.closePath(),
      t.fill());
  });
  const l = (t, e, n, r) => {
    const u = Ve(r.length * 97 + e);
    if (r === "pool") {
      for (let b = 0; b < 22; b++) {
        const M = e / 2 + (u() - 0.5) * e * 0.45,
          x = n / 2 + (u() - 0.5) * n * 0.35,
          w = (0.08 + u() * 0.2) * e,
          p = t.createRadialGradient(M, x, 0, M, x, w);
        (p.addColorStop(0, "rgba(44,4,3,0.96)"),
          p.addColorStop(0.7, "rgba(38,3,2,0.92)"),
          p.addColorStop(1, "rgba(32,3,2,0)"),
          (t.fillStyle = p),
          t.beginPath(),
          t.ellipse(M, x, w, w * (0.6 + u() * 0.4), u() * 3, 0, Math.PI * 2),
          t.fill());
      }
      for (let b = 0; b < 40; b++)
        ((t.fillStyle = "rgba(40,3,3,0.85)"),
          t.beginPath(),
          t.arc(
            e / 2 + (u() - 0.5) * e * 0.9,
            n / 2 + (u() - 0.5) * n * 0.9,
            1 + u() * 5,
            0,
            Math.PI * 2,
          ),
          t.fill());
    } else if (r === "smear") {
      for (let b = 0; b < 4; b++) {
        const M = n * (0.2 + 0.15 * b + u() * 0.05);
        for (let x = 10; x < e - 10; x += 2) {
          const w = 0.75 * (1 - x / e) + 0.1;
          ((t.fillStyle = `rgba(${70 + u() * 20},5,5,${w * (0.6 + u() * 0.4)})`),
            t.fillRect(
              x,
              M + Math.sin(x * 0.02 + b) * 6 + (u() - 0.5) * 3,
              2,
              8 + u() * 8 * (1 - x / e),
            ));
        }
      }
      for (let b = 0; b < 12; b++) {
        const M = 20 + u() * e * 0.4,
          x = n * 0.6 + u() * n * 0.2;
        ((t.fillStyle = "rgba(60,4,4,0.8)"),
          t.fillRect(M, x, 3, 20 + u() * 60));
      }
    } else if (r === "hand") {
      ((t.fillStyle = "rgba(86,6,6,0.92)"),
        t.beginPath(),
        t.ellipse(e * 0.52, n * 0.64, e * 0.2, n * 0.15, 0.05, 0, Math.PI * 2),
        t.fill());
      for (const [b, M, x] of [
        [-0.14, 0.26, -0.16],
        [-0.05, 0.31, -0.05],
        [0.04, 0.3, 0.04],
        [0.13, 0.24, 0.13],
      ])
        (t.save(),
          t.translate(e * (0.53 + b), n * 0.53),
          t.rotate(x),
          t.beginPath(),
          t.ellipse(0, (-n * M) / 2, e * 0.045, (n * M) / 2, 0, 0, Math.PI * 2),
          t.fill(),
          t.restore());
      (t.save(),
        t.translate(e * 0.3, n * 0.66),
        t.rotate(-0.95),
        t.beginPath(),
        t.ellipse(0, -n * 0.09, e * 0.052, n * 0.11, 0, 0, Math.PI * 2),
        t.fill(),
        t.restore());
      for (let b = 0; b < 5; b++)
        t.fillRect(
          e * (0.38 + u() * 0.28),
          n * 0.74,
          2 + u() * 2,
          n * (0.06 + u() * 0.18),
        );
      t.globalCompositeOperation = "destination-out";
      for (let b = 0; b < 160; b++)
        ((t.fillStyle = "rgba(0,0,0,0.55)"),
          t.fillRect(u() * e, u() * n, 1.5, 1.5));
      t.globalCompositeOperation = "source-over";
    } else if (r === "drag")
      for (let b = 0; b < e; b += 2) {
        const M = 0.6 * Math.sin((Math.PI * b) / e);
        for (const x of [n * 0.35, n * 0.62])
          ((t.fillStyle = `rgba(${60 + u() * 20},5,5,${M * (0.5 + u() * 0.5)})`),
            t.fillRect(
              b,
              x + Math.sin(b * 0.015) * 10 + (u() - 0.5) * 6,
              2,
              10 + u() * 16,
            ));
      }
    else if (r === "spatter")
      for (let b = 0; b < 90; b++) {
        const M = u() ** 3 * 14 + 1,
          x = e / 2 + (u() - 0.5) * e * 0.9 * u(),
          w = n / 2 + (u() - 0.5) * n * 0.9 * u();
        ((t.fillStyle = `rgba(${70 + u() * 30},6,6,${0.6 + u() * 0.35})`),
          t.beginPath(),
          t.ellipse(x, w, M, M * (0.5 + u() * 0.5), u() * 3, 0, Math.PI * 2),
          t.fill());
      }
  };
  (h.put("b_pool", 256, 256, (t, e, n) => l(t, e, n, "pool")),
    h.put("b_smear", 384, 192, (t, e, n) => l(t, e, n, "smear")),
    h.put("b_hand", 128, 160, (t, e, n) => l(t, e, n, "hand")),
    h.put("b_drag", 512, 128, (t, e, n) => l(t, e, n, "drag")),
    h.put("b_spatter", 256, 256, (t, e, n) => l(t, e, n, "spatter")),
    h.put("graf1", 512, 160, (t, e, n) => {
      (t.save(),
        t.rotate(-0.04),
        J(t, "THE DEAD WALK", e / 2, n / 2 + 10, 64, {
          font: "Impact, sans-serif",
          weight: "normal",
          color: "rgba(150,20,16,0.9)",
        }),
        t.restore());
      for (let r = 0; r < 9; r++)
        ((t.fillStyle = "rgba(150,20,16,0.8)"),
          t.fillRect(60 + r * 46, n / 2 + 30, 3, 20 + ta(r) * 50));
    }),
    h.put("graf2", 384, 128, (t, e, n) => {
      J(t, "GOD HELP US", e / 2, n / 2, 46, {
        font: "Impact, sans-serif",
        weight: "normal",
        color: "rgba(230,230,225,0.85)",
      });
    }),
    h.put("damp", 256, 256, (t, e, n) => {
      for (let r = 0; r < 30; r++) {
        const u = e / 2 + (c() - 0.5) * e * 0.5,
          b = n * 0.3 + c() * n * 0.4,
          M = 20 + c() * 70,
          x = t.createRadialGradient(u, b, 0, u, b, M);
        (x.addColorStop(0, "rgba(20,24,18,0.18)"),
          x.addColorStop(1, "rgba(20,24,18,0)"),
          (t.fillStyle = x),
          t.fillRect(0, 0, e, n));
      }
    }),
    h.put("steps", 256, 256, (t, e, n) => {
      for (let r = 0; r < 7; r++)
        (t.save(),
          t.translate(40 + r * 30, 230 - r * 32),
          t.rotate(-0.6 + (r % 2) * 0.12),
          (t.fillStyle = "rgba(70,8,8,0.7)"),
          t.beginPath(),
          t.ellipse(0, 0, 9, 22, 0, 0, Math.PI * 2),
          t.fill(),
          t.beginPath(),
          t.ellipse(0, 26, 8, 9, 0, 0, Math.PI * 2),
          t.fill(),
          t.restore());
    }));
  const i = new ne(1024, 1024, { bg: "#000" });
  return (
    i.put("exit", 256, 128, (t, e, n) => {
      ((t.fillStyle = "#0a8a3a"),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#e8fff0"),
        t.fillRect(24, 22, 40, 84),
        (t.fillStyle = "#0a8a3a"),
        t.fillRect(30, 28, 28, 72),
        (t.fillStyle = "#e8fff0"),
        t.beginPath(),
        t.arc(98, 34, 10, 0, Math.PI * 2),
        t.fill(),
        (t.lineWidth = 10),
        (t.strokeStyle = "#e8fff0"),
        (t.lineCap = "round"),
        t.beginPath(),
        t.moveTo(94, 48),
        t.lineTo(86, 76),
        t.lineTo(70, 98),
        t.moveTo(86, 76),
        t.lineTo(104, 88),
        t.lineTo(108, 108),
        t.moveTo(92, 56),
        t.lineTo(76, 62),
        t.moveTo(92, 56),
        t.lineTo(110, 66),
        t.stroke(),
        J(t, "EXIT", 186, 66, 56, {
          color: "#e8fff0",
          font: R0,
          weight: "600",
        }));
    }),
    i.put("drinks", 256, 512, (t, e, n) => {
      const r = t.createLinearGradient(0, 0, 0, n);
      (r.addColorStop(0, "#c42a1c"),
        r.addColorStop(1, "#7a1410"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, n),
        (t.fillStyle = "#f4ecd8"),
        t.fillRect(16, 16, e - 32, 70),
        J(t, "HALDEN", e / 2, 52, 44, { color: "#b42a1c", font: ft }));
      for (let u = 0; u < 4; u++)
        for (let b = 0; b < 3; b++) {
          const M = 34 + b * 66,
            x = 120 + u * 92;
          ((t.fillStyle = "rgba(255,240,220,0.9)"),
            t.fillRect(M, x, 46, 70),
            (t.fillStyle = ["#c42a1c", "#2a6a3a", "#e8a020", "#3a4a9a"][
              (u + b) % 4
            ]),
            t.fillRect(M + 6, x + 18, 34, 36));
        }
      ((t.fillStyle = "rgba(255,255,255,0.15)"),
        t.fillRect(20, 100, 30, n - 120));
    }),
    i.put("adlit", 300, 200, (t, e, n) => {
      const r = t.createLinearGradient(0, 0, e, 0);
      (r.addColorStop(0, "#f0e8d8"),
        r.addColorStop(1, "#d8e4ec"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, n),
        J(t, "SEE YOU", e / 2, 70, 44, {
          color: "#1a2a3a",
          font: R0,
          weight: "600",
        }),
        J(t, "ON THE OTHER SIDE", e / 2, 120, 28, {
          color: "#c84030",
          font: R0,
          weight: "600",
        }),
        J(t, "Coastal Rail", e / 2, 168, 20, {
          color: "#4a5a6a",
          font: R0,
          weight: "normal",
        }));
    }),
    i.put("gate_ok", 64, 64, (t, e, n) => {
      ((t.fillStyle = "#041a08"),
        t.fillRect(0, 0, e, n),
        se(t, e / 2, n / 2, 44, -Math.PI / 2, "#3aff6a"));
    }),
    i.put("gate_no", 64, 64, (t, e, n) => {
      ((t.fillStyle = "#1a0404"),
        t.fillRect(0, 0, e, n),
        (t.strokeStyle = "#ff3a2a"),
        (t.lineWidth = 9),
        t.beginPath(),
        t.moveTo(16, 16),
        t.lineTo(48, 48),
        t.moveTo(48, 16),
        t.lineTo(16, 48),
        t.stroke());
    }),
    i.put("monitor", 192, 128, (t, e, n) => {
      ((t.fillStyle = "#0a1830"),
        t.fillRect(0, 0, e, n),
        J(t, "NO SIGNAL", e / 2, n / 2, 26, {
          color: "#8ab0ff",
          font: "Consolas, monospace",
          weight: "normal",
        }));
    }),
    i.put("white", 32, 32, (t, e, n) => {
      ((t.fillStyle = "#fff"), t.fillRect(0, 0, e, n));
    }),
    {
      signs: { tex: a.pack().texture(), rect: (t) => a.rects[t] },
      frieze: { tex: f.pack().texture(), rect: (t) => f.rects[t] },
      decals: { tex: h.pack().texture(), rect: (t) => h.rects[t] },
      glows: { tex: i.pack().texture(), rect: (t) => i.rects[t] },
    }
  );
}
