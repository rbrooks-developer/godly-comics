import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";
import type { ReactNode } from "react";

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.13 8.13 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
    </svg>
  );
}

const socialLinks: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/godlycomics",
    icon: <InstagramIcon />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@godlycomics",
    icon: <TikTokIcon />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@godlycomics",
    icon: <YouTubeIcon />,
  },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-comic-black border-t-[4px] border-comic-gold halftone-dark">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" aria-label="Godly Comics — home">
            <Image
              src="/logo.png"
              alt="Godly Comics"
              width={64}
              height={64}
              className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Founder contact + social icons */}
          <div className="flex flex-col items-start gap-3 text-left">
            <p className="font-display action-text tracking-[0.15em] text-comic-gold text-base">
              Alexi Samaan
            </p>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-comic-gold/60">
              Founder &amp; Creator
            </p>
            <a
              href="tel:6197799143"
              className="font-body text-sm text-comic-gold/70 hover:text-comic-gold transition-colors duration-150 mt-3"
            >
              T: 619.779.9143
            </a>
            <a
              href="mailto:alexisamaan@gmail.com"
              className="font-body text-sm text-comic-gold/70 hover:text-comic-gold transition-colors duration-150"
            >
              E: alexisamaan@gmail.com
            </a>

            <div className="w-full h-px bg-comic-gold opacity-30" aria-hidden="true" />

            {/* Social icons */}
            <nav aria-label="Social media links" className="mt-1">
              <ul className="flex items-center gap-4 list-none m-0 p-0">
                {socialLinks.map(({ label, href, icon }, index) => (
                  <>
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-comic-gold hover:text-comic-gold-bright transition-colors duration-150"
                      >
                        {icon}
                      </a>
                    </li>
                    {index < socialLinks.length - 1 && (
                      <li key={`pipe-${index}`} aria-hidden="true" className="text-comic-gold/30 text-sm select-none">
                        |
                      </li>
                    )}
                  </>
                ))}
                <li aria-hidden="true" className="text-comic-gold/30 text-sm select-none">|</li>
                <li>
                  <span className="font-display action-text text-xs tracking-[0.15em] text-comic-gold/60">
                    @godlycomics
                  </span>
                </li>
              </ul>
            </nav>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-comic-gold/60 text-center">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
