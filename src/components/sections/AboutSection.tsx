import Image from "next/image";
import SpeechBubble from "@/components/ui/SpeechBubble";
import HalftonePanel from "@/components/ui/HalftonePanel";
import ComicButton from "@/components/ui/ComicButton";

const stats = [
  { label: "Issues", value: "12+" },
  { label: "Characters", value: "50+" },
  { label: "Readers", value: "10K+" },
  { label: "Years", value: "3+" },
];

export default function AboutSection() {
  return (
    <HalftonePanel
      as="section"
      id="about"
      dotSize="dark"
      className="bg-comic-charcoal py-20 px-4"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-comic-black gold-border px-8 py-3 -rotate-1">
            <h2
              id="about-heading"
              className="font-display action-text text-4xl md:text-5xl text-comic-gold"
            >
              Our Origin Story
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* Story column */}
          <div className="space-y-10">
            <SpeechBubble className="mb-10">
              <p className="font-body font-bold text-lg text-comic-white leading-relaxed">
                {/* Update with your actual intro */}
                Every legend begins with a spark. Ours began with a vision to
                bring{" "}
                <strong className="text-comic-gold">divine storytelling</strong>{" "}
                to the world of sequential art.
              </p>
            </SpeechBubble>

            <div className="gold-border bg-comic-black p-6 space-y-4 mt-8">
              <p className="font-body text-comic-white/90 leading-relaxed">
                {/* Update with your founding story */}
                Founded with a passion for stories that elevate the human
                spirit, Godly Comics was born from a desire to create tales of
                courage, faith, and extraordinary power that resonate with
                readers of all backgrounds.
              </p>
              <p className="font-body text-comic-white/90 leading-relaxed">
                {/* Update with your team background */}
                Our creators bring together years of combined experience in
                illustration, storytelling, and meaningful narrative to craft
                comics unlike anything you&apos;ve seen before.
              </p>
            </div>

            <ComicButton
              href="mailto:hello@godlycomics.com"
              variant="primary"
              size="md"
            >
              Connect With Us
            </ComicButton>
          </div>

          {/* Visual column */}
          <div className="space-y-8">
            {/* Creator / team image placeholder */}
            <div
              className="gold-border bg-comic-black aspect-square flex flex-col
                          items-center justify-center p-8 gap-4 rotate-1
                          hover:rotate-0 transition-transform duration-300"
            >
              <Image
                src="/logo.svg"
                alt="Godly Comics team"
                width={160}
                height={160}
                className="w-40 h-40 object-contain opacity-70"
              />
              <p className="font-display action-text text-comic-gold text-center text-sm">
                Team Photo Coming Soon
              </p>
              <p className="font-body text-comic-white/40 text-xs text-center">
                Add your photo at{" "}
                <code className="text-comic-gold">/public/team.jpg</code>
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="gold-border bg-comic-black p-5 text-center
                             hover:bg-comic-charcoal transition-colors duration-150"
                >
                  <div className="font-display action-text text-3xl text-comic-gold">
                    {value}
                  </div>
                  <div className="font-body text-sm font-bold text-comic-white/70 mt-1 uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </HalftonePanel>
  );
}
