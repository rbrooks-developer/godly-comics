import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/metadata";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
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
        }}
      >
        {/* Gold border frame */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            border: "8px solid #D4AF37",
            pointerEvents: "none",
          }}
        />

        {/* Inner accent line */}
        <div
          style={{
            position: "absolute",
            inset: "18px",
            border: "2px solid #B8860B",
            opacity: 0.6,
            pointerEvents: "none",
          }}
        />

        {/* Top horizontal rule */}
        <div
          style={{
            position: "absolute",
            top: "180px",
            left: "80px",
            right: "80px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #D4AF37 20%, #D4AF37 80%, transparent)",
          }}
        />

        {/* Bottom horizontal rule */}
        <div
          style={{
            position: "absolute",
            bottom: "180px",
            left: "80px",
            right: "80px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #D4AF37 20%, #D4AF37 80%, transparent)",
          }}
        />

        {/* "G" lettermark, left side */}
        <div
          style={{
            position: "absolute",
            left: "80px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "260px",
            fontWeight: "bold",
            background: "linear-gradient(180deg, #FFE566 0%, #D4AF37 40%, #B8860B 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            opacity: 0.9,
          }}
        >
          G
        </div>

        {/* Main content — right of G */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "220px",
            gap: "16px",
          }}
        >
          {/* Site name */}
          <div
            style={{
              fontSize: "88px",
              fontWeight: "bold",
              letterSpacing: "10px",
              textTransform: "uppercase",
              background: "linear-gradient(180deg, #FFE566 0%, #D4AF37 50%, #B8860B 100%)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1,
            }}
          >
            GODLY
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              letterSpacing: "12px",
              textTransform: "uppercase",
              color: "#FFFEF0",
              lineHeight: 1,
              marginTop: "-8px",
            }}
          >
            COMICS
          </div>

          {/* Divider */}
          <div
            style={{
              width: "480px",
              height: "3px",
              background: "#D4AF37",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: "32px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#FFE566",
              textAlign: "center",
            }}
          >
            {siteConfig.tagline}
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: "24px",
              letterSpacing: "2px",
              color: "#B8860B",
              marginTop: "8px",
            }}
          >
            godlycomics.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
