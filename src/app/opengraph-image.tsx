import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { siteConfig } from "@/lib/metadata";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Read logo from public folder and encode as base64
  const logoPath = join(process.cwd(), "public", "logo.png");
  const logoData = readFileSync(logoPath);
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  // Load Cinzel Bold WOFF from @fontsource package (Satori supports TTF, OTF, WOFF)
  const cinzelFont = readFileSync(
    join(process.cwd(), "node_modules/@fontsource/cinzel/files/cinzel-latin-700-normal.woff")
  );

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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Halftone dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(212,175,55,0.18) 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
            display: "flex",
          }}
        />

        {/* Radial gold glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.09) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <img
          src={logoSrc}
          width={160}
          height={160}
          style={{ objectFit: "contain", marginBottom: "8px" }}
        />

        {/* Brand name */}
        <div
          style={{
            fontFamily: "Cinzel",
            fontSize: "96px",
            fontWeight: 700,
            letterSpacing: "16px",
            textTransform: "uppercase",
            background: "linear-gradient(180deg, #FFE566 0%, #D4AF37 50%, #B8860B 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            marginTop: "16px",
            display: "flex",
          }}
        >
          Godly Comics
        </div>

        {/* Thin gold rule */}
        <div
          style={{
            width: "96px",
            height: "1px",
            background: "#D4AF37",
            opacity: 0.6,
            marginTop: "28px",
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontFamily: "Cinzel",
            fontSize: "24px",
            letterSpacing: "8px",
            textTransform: "uppercase",
            color: "rgba(255,254,240,0.5)",
            marginTop: "20px",
            display: "flex",
          }}
        >
          Faith. Purpose. Story.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cinzel",
          data: cinzelFont,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
