import Image from "next/image";
import ComicButton from "@/components/ui/ComicButton";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-center bg-comic-black overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle radial glow behind the logo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content — stacked vertically, centered */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Godly Comics"
          width={140}
          height={140}
          priority
          className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_24px_rgba(212,175,55,0.35)]"
        />

        {/* Brand name */}
        <h1
          id="hero-heading"
          className="font-display action-text tracking-[0.2em] text-5xl md:text-7xl lg:text-8xl text-gold-gradient leading-none"
        >
          Godly Comics
        </h1>

        {/* Thin gold rule */}
        <div className="w-24 h-px bg-comic-gold opacity-60" aria-hidden="true" />

        {/* CTA */}
        <div className="mt-4">
          <ComicButton href="#about" variant="ghost" size="sm">
            Our Story
          </ComicButton>
        </div>
      </div>

      {/* Bottom fade — blends into the next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent, #1a1a1a)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
