import { SITE_URL } from '@/lib/seo';

export default function robots() {
  // Only block if we KNOW it's a non-production Vercel env (preview/development)
  // If env vars are undefined (custom hosting, missing config), assume production — never accidentally block
  const vercelEnv = process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV;
  const isExplicitlyNonProd = vercelEnv && vercelEnv !== 'production';

  if (isExplicitlyNonProd) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/*?*utm_', '/*?*gclid=', '/*?*fbclid=', '/*?*msclkid='],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: '/private/',
        crawlDelay: 1,
      },
      // AI crawlers — explicitly allowed for AI citation visibility
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/news-sitemap.xml`, `${SITE_URL}/image-sitemap.xml`],
    host: SITE_URL,
  }
}
