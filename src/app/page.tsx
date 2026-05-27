import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = buildMetadata({
  title: "Godly Comics - Faith. Purpose. Story.",
  description:
    "Epic comic book adventures featuring divine heroes and legendary characters. Discover Godly Comics — comics that transcend the ordinary.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}
