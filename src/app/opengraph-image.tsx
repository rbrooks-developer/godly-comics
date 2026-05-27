import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/metadata";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
          gap: "0px",
        }}
      >
        {/* Halftone dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(212,175,55,0.18) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Radial gold glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Gold border frame */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "6px solid #D4AF37",
          }}
        />

        {/* G lettermark */}
        <div
          style={{
            fontSize: "160px",
            fontWeight: "bold",
            background: "linear-gradient(180deg, #FFE566 0%, #D4AF37 50%, #B8860B 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            filter: "drop-shadow(0 0 40px rgba(212,175,55,0.4))",
          }}
        >
          G
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            letterSpacing: "18px",
            textTransform: "uppercase",
            background: "linear-gradient(180deg, #FFE566 0%, #D4AF37 50%, #B8860B 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            marginTop: "16px",
          }}
        >
          GODLY COMICS
        </div>

        {/* Thin gold rule */}
        <div
          style={{
            width: "120px",
            height: "1px",
            background: "#D4AF37",
            opacity: 0.6,
            marginTop: "28px",
          }}
        />

        {/* URL */}
        <div
          style={{
            fontSize: "22px",
            letterSpacing: "4px",
            color: "#B8860B",
            marginTop: "24px",
            textTransform: "lowercase",
          }}
        >
          godlycomics.com
        </div>
      </div>
    ),
    { ...size }
  );
}
