import type { Metadata } from "next";

// ── Update all values in siteConfig before launch ──
export const siteConfig = {
  name: "Godly Comics",
  tagline: "Divine Stories for Every Hero",
  url: "https://www.godlycomics.com",
  description:
    "Epic comic book adventures featuring divine heroes and legendary characters. Comics that transcend the ordinary.",
  ogImage: "/opengraph-image",
  twitterHandle: "@godlycomics",
  locale: "en_US",
  themeColor: "#D4AF37",
  author: "Godly Comics",
  keywords: [
    "comic books",
    "graphic novels",
    "superhero comics",
    "faith-based comics",
    "divine heroes",
    "Godly Comics",
    "independent comics",
  ],
} as const;

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title = `${siteConfig.name} — ${siteConfig.tagline}`,
  description = siteConfig.description,
  path = "/",
  ogImage = siteConfig.ogImage,
  noIndex = false,
}: BuildMetadataOptions = {}): Metadata {
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    applicationName: siteConfig.name,
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: siteConfig.name,
    },
  };
}
