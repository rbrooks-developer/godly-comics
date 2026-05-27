import { siteConfig } from "@/lib/metadata";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
      width: 300,
      height: 300,
    },
    description: siteConfig.description,
    sameAs: [
      // Update with your actual social profile URLs
      `https://twitter.com/${siteConfig.twitterHandle.replace("@", "")}`,
      "https://www.instagram.com/godlycomics",
      "https://www.tiktok.com/@godlycomics",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "alexisamaan@gmail.com",
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
