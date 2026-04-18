export default function robots() {
  const isProd = process.env.VERCEL_ENV === 'production' || process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

  if (!isProd) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://ldndecks.com/sitemap.xml',
  }
}