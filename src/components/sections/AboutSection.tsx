export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-comic-charcoal py-32 px-4"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <h2
          id="about-heading"
          className="font-display action-text tracking-[0.2em] text-3xl md:text-4xl text-comic-gold"
        >
          Our Story
        </h2>

        <div className="w-12 h-px bg-comic-gold opacity-40" aria-hidden="true" />

        <p className="font-body text-sm tracking-[0.2em] uppercase text-comic-white/40">
          Coming Soon
        </p>
      </div>
    </section>
  );
}
