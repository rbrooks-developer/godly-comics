import Image from "next/image";
import ComicButton from "@/components/ui/ComicButton";
import ActionWord from "@/components/ui/ActionWord";
import HalftonePanel from "@/components/ui/HalftonePanel";

export default function HeroSection() {
  return (
    <HalftonePanel
      as="section"
      dotSize="sm"
      className="relative min-h-[92vh] bg-comic-black flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative action words */}
      <ActionWord
        word="DIVINE!"
        color="gold"
        className="absolute top-6 right-6 -rotate-12 text-5xl md:text-6xl opacity-60"
      />
      <ActionWord
        word="EPIC!"
        color="gold-bright"
        className="absolute bottom-16 left-4 rotate-6 text-3xl md:text-4xl opacity-50 hidden md:block"
      />
      <ActionWord
        word="POW!"
        color="gold"
        className="absolute top-1/3 right-[5%] rotate-3 text-2xl opacity-30 hidden lg:block"
      />

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-comic-gold" aria-hidden="true" />

      <div className="container mx-auto px-4 py-16 max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text column */}
          <div className="space-y-8 z-10">
            {/* Logo mark */}
            <div className="inline-block gold-border bg-comic-black p-3">
              <Image
                src="/logo.svg"
                alt="Godly Comics logo"
                width={96}
                height={96}
                priority
                className="w-24 h-24 object-contain"
              />
            </div>

            {/* Main heading */}
            <h1
              id="hero-heading"
              className="font-display action-text leading-none"
            >
              <span className="block text-6xl md:text-7xl lg:text-8xl text-gold-gradient">
                GODLY
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl text-comic-white mt-1">
                COMICS
              </span>
              <span
                className="block text-2xl md:text-3xl mt-3 text-comic-gold border-t-[3px] border-comic-gold pt-3"
              >
                Divine Stories for Every Hero
              </span>
            </h1>

            {/* Tagline */}
            <p className="font-body text-lg md:text-xl text-comic-white/80 gold-border bg-comic-charcoal p-4 max-w-md leading-relaxed">
              Epic adventures. Legendary characters.{" "}
              <strong className="text-comic-gold">
                Comics that transcend the ordinary.
              </strong>
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <ComicButton href="#about" variant="primary" size="lg">
                Read Our Story
              </ComicButton>
              <ComicButton
                href="mailto:hello@godlycomics.com"
                variant="secondary"
                size="lg"
              >
                Get In Touch
              </ComicButton>
            </div>
          </div>

          {/* Hero artwork column */}
          <div className="relative flex justify-center items-center z-10">
            <div
              className="relative w-full max-w-sm gold-border-lg bg-comic-charcoal
                          rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              {/* Replace this placeholder with your actual hero artwork */}
              <div className="aspect-[3/4] flex flex-col items-center justify-center p-8 gap-4">
                <Image
                  src="/logo.svg"
                  alt="Godly Comics hero artwork"
                  width={200}
                  height={200}
                  className="w-40 h-40 object-contain opacity-80"
                />
                <p className="font-display action-text text-comic-gold text-center text-sm">
                  Hero Artwork Coming Soon
                </p>
                <p className="font-body text-comic-white/50 text-xs text-center">
                  Drop your artwork at{" "}
                  <code className="text-comic-gold">/public/hero-art.png</code>
                  {" "}and update the{" "}
                  <code className="text-comic-gold">src</code> prop above
                </p>
              </div>

              {/* Comic-style corner fold */}
              <div
                className="absolute bottom-0 right-0 w-8 h-8"
                style={{
                  background:
                    "linear-gradient(225deg, #1a1a1a 50%, #d4af37 50%)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 panel-divider" aria-hidden="true" />
    </HalftonePanel>
  );
}
