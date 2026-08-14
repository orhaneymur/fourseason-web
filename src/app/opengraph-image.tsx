import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #ffffff 0%, #ecfeff 55%, #cffafe 100%)",
          padding: 76,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 68,
              height: 68,
              borderRadius: 18,
              background: "linear-gradient(135deg, #22d3ee, #0e7490)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 800, color: "#0f172a" }}>
              Four Seasons
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 4,
                color: "#0891b2",
              }}
            >
              POOL MANAGEMENT
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.03,
              letterSpacing: -3,
              color: "#0f172a",
              maxWidth: 940,
            }}
          >
            Crystal-clear pools, season after season.
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 28,
              lineHeight: 1.45,
              color: "#475569",
              maxWidth: 880,
            }}
          >
            Full-season commercial pool management — certified lifeguards, water
            chemistry, compliance and winterization.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#0e7490" }}>
            {site.phone.display}
          </div>
          <div style={{ fontSize: 24, color: "#94a3b8" }}>•</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#0e7490" }}>
            {site.email}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
