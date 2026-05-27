import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer gold ring */}
        <div
          style={{
            position: "absolute",
            width: 160,
            height: 160,
            borderRadius: "50%",
            border: "4px solid #D4AF37",
            display: "flex",
          }}
        />
        {/* Inner ring */}
        <div
          style={{
            position: "absolute",
            width: 145,
            height: 145,
            borderRadius: "50%",
            border: "1.5px solid #B8860B",
            opacity: 0.5,
            display: "flex",
          }}
        />
        {/* G lettermark */}
        <div
          style={{
            fontSize: 110,
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
            background: "linear-gradient(180deg, #FFE566 0%, #D4AF37 50%, #B8860B 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            marginTop: 6,
          }}
        >
          G
        </div>
      </div>
    ),
    { ...size }
  );
}
