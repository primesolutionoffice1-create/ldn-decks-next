export const SITE_URL = "https://www.ldndecks.com";

/**
 * Build consistent metadata for Next.js App Router
 */
export function buildMetadata({
  path,
  title,
  description,
  image = "/images/img64.jpeg",
}) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("|") ? title : `${title} | Loudoun Decks`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      url,
      title: fullTitle,
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
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
