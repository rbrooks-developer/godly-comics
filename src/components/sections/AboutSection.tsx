import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-comic-charcoal py-24 px-4"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="sr-only">Services</h2>
      <div className="max-w-2xl mx-auto flex justify-center">
        <Image
          src="/cgc-flyer.png"
          alt="Godly Comics — Officially Your CGC Authorized Facilitator. Now accepting submissions for signatures."
          width={894}
          height={1334}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
