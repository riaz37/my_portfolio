import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";
export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f4efe6",
          color: "#1f1b16",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              padding: "10px 20px",
              border: "3px solid #b23a1e",
              borderRadius: 4,
              color: "#b23a1e",
              fontSize: 24,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: "uppercase",
              transform: "rotate(-4deg)",
            }}
          >
            {profile.availability}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.05, letterSpacing: -2 }}>{profile.headline}</div>
          <div style={{ marginTop: 36, fontSize: 30, color: "#574f45", fontFamily: "monospace" }}>
            {`${profile.name} · ${profile.role}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
