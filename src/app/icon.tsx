import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
        }}
      >
        {/* Outer gold ring */}
        <div
          style={{
            position: "absolute",
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: "1.5px solid #D4AF37",
            display: "flex",
          }}
        />
        {/* G lettermark */}
        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
            background: "linear-gradient(180deg, #FFE566 0%, #D4AF37 50%, #B8860B 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            marginTop: 1,
          }}
        >
          G
        </div>
      </div>
    ),
    { ...size }
  );
}
