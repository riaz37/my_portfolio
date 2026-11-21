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
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#574f45", fontFamily: "monospace" }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#b23a1e" }} />
          <span>{profile.availability}</span>
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
