import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-comic-black border-b-[4px] border-comic-gold">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        <Link href="/" aria-label="Godly Comics — home">
          <Image
            src="/logo.svg"
            alt="Godly Comics"
            width={52}
            height={52}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            <li>
              <Link
                href="#about"
                className="font-display action-text text-comic-gold hover:text-comic-gold-bright text-base transition-colors duration-150"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="mailto:alexisamaan@gmail.com"
                className="font-display action-text text-comic-black bg-comic-gold border-[2px] border-comic-black px-4 py-2 text-sm
                           shadow-[3px_3px_0px_#1a1a1a] hover:shadow-[1px_1px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]
                           transition-all duration-100"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
