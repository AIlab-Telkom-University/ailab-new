import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH
    ? `https://ailab-telkom-university.github.io${process.env.NEXT_PUBLIC_BASE_PATH}`
    : 'https://ailab-telkom-university.github.io/ailab-new'

  const routes = ['', '/about', '/research', '/publications', '/team', '/activities', '/contact']

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}
