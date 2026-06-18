import ComicButton from "@/components/ui/ComicButton";

const features = [
  {
    labels: ["Trusted", "Service"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    labels: ["Premium", "Quality"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    labels: ["Authentic", "Signatures"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    labels: ["Careful", "Handling"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-comic-charcoal py-24 px-4"
      aria-labelledby="about-heading"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10 text-center">

        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <div className="h-px w-10 bg-comic-gold opacity-50" aria-hidden="true" />
          <p className="font-body text-xs tracking-[0.35em] uppercase text-comic-gold/60">
            Officially Your
          </p>
          <div className="h-px w-10 bg-comic-gold opacity-50" aria-hidden="true" />
        </div>

        {/* Main heading */}
        <h2
          id="about-heading"
          className="font-display action-text tracking-[0.12em] text-4xl md:text-5xl text-gold-gradient leading-tight"
        >
          CGC Authorized Facilitator
        </h2>

        {/* Now Accepting panel */}
        <div className="w-full border border-comic-gold/30 bg-comic-black/50 py-10 px-8 flex flex-col items-center gap-3">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-comic-white/50">
            Now Accepting
          </p>
          <p className="font-display action-text text-5xl md:text-6xl text-gold-gradient tracking-[0.08em] leading-none">
            Submissions
          </p>
          <div className="flex items-center gap-4 mt-1">
            <div className="h-px w-8 bg-comic-gold opacity-40" aria-hidden="true" />
            <p className="font-body text-xs tracking-[0.4em] uppercase text-comic-gold/60">
              For Signatures
            </p>
            <div className="h-px w-8 bg-comic-gold opacity-40" aria-hidden="true" />
          </div>
        </div>

        {/* CGC badge */}
        <div className="border border-comic-gold/40 px-8 py-3">
          <p className="font-display action-text text-sm tracking-[0.25em] text-comic-gold">
            CGC Signature Series &mdash; Authorized Facilitator
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mt-2">
          {features.map(({ labels, icon }) => (
            <div key={labels[0]} className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 text-comic-gold">
                {icon}
              </div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-comic-white/60 leading-relaxed">
                {labels[0]}
                <br />
                {labels[1]}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-comic-gold opacity-30" aria-hidden="true" />

        {/* CTA */}
        <ComicButton href="mailto:alexisamaan@gmail.com" variant="primary" size="sm">
          Submit Your Comics
        </ComicButton>

      </div>
    </section>
  );
}
