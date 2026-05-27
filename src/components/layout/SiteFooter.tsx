import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

const socialLinks = [
  { label: "Twitter / X", href: `https://twitter.com/godlycomics` },
  { label: "Instagram", href: "https://instagram.com/godlycomics" },
  { label: "TikTok", href: "https://www.tiktok.com/@godlycomics" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-comic-black border-t-[4px] border-comic-gold halftone-dark">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Divider */}
        <div className="panel-divider mb-10" aria-hidden="true" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" aria-label="Godly Comics — home">
            <Image
              src="/logo.svg"
              alt="Godly Comics"
              width={64}
              height={64}
              className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Social links */}
          <nav aria-label="Social media links">
            <ul className="flex flex-wrap gap-6 list-none m-0 p-0 justify-center">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display action-text text-sm text-comic-gold hover:text-comic-gold-bright transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="font-body text-sm text-comic-gold/60 text-center">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
