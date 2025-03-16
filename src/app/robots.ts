import type { MetadataRoute } from 'next'

export const dynamic = 'force-static';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: 'https://websmith.fr/sitemap.xml',
  }
}