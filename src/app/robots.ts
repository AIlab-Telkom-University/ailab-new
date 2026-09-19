import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH
    ? `https://ailab-telkom-university.github.io${process.env.NEXT_PUBLIC_BASE_PATH}`
    : 'https://ailab-telkom-university.github.io/ailab-new'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
