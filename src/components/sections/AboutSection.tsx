import Image from "next/image";
import ComicButton from "@/components/ui/ComicButton";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-comic-charcoal py-24 px-4"
      aria-labelledby="about-heading"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-10">

        {/* Section heading */}
        <div className="flex flex-col items-center gap-4">
          <h2
            id="about-heading"
            className="font-display action-text tracking-[0.2em] text-3xl md:text-4xl text-comic-gold"
          >
            Services
          </h2>
          <div className="w-12 h-px bg-comic-gold opacity-40" aria-hidden="true" />
        </div>

        {/* Flyer image */}
        <Image
          src="/cgc-flyer.png"
          alt="Godly Comics — Officially Your CGC Authorized Facilitator. Now accepting submissions for signatures."
          width={894}
          height={1334}
          className="w-full h-auto"
          priority
        />

        {/* Contact CTA */}
        <ComicButton href="mailto:alexisamaan@gmail.com" variant="primary" size="md">
          Contact Us
        </ComicButton>

      </div>
    </section>
  );
}
