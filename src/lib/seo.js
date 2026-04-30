export const SITE_URL = "https://ldndecks.com";

/**
 * Build consistent metadata for Next.js App Router
 */
export function buildMetadata({
    path,
    title,
    description,
    image = "/og-default.webp",
    noIndex = false,
}) {
    const url = `${SITE_URL}${path}`;

  return {
        title: title, // This will be used with the template defined in layout.js
        description,
        metadataBase: new URL(SITE_URL),
        alternates: {
                canonical: url,
        },
        robots: {
                index: !noIndex,
                follow: true,
        },
        openGraph: {
                url,
                title: title,
                description,
                siteName: "Loudoun Decks",
                locale: "en_US",
                type: "website",
                images: [
                  {
                               url: image,
                               width: 1200,
                               height: 630,
                               alt: title,
                  },
                        ],
        },
        twitter: {
                card: "summary_large_image",
                title: title,
                description,
                images: [image],
        },
  };
}
