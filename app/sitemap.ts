import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://moxar.net'

  // ----- STATIC PAGES (if any) -----
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    // Add any other static pages you have
  ]

  // ----- DYNAMIC PAGES (fetch from your CMS / API) -----
  // Example 1: Fetching blog posts from an API
  // const blogPosts = await fetch('https://moxar.net/api/posts').then(res => res.json())
  // const blogPages = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'weekly',
  //   priority: 0.6,
  // }))

  // Example 2: Fetching services or projects from a CMS
  // const services = await getServicesFromDatabase() // your custom function
  // const servicePages = services.map((service) => ({
  //   url: `${baseUrl}/services/${service.slug}`,
  //   lastModified: service.updatedAt,
  //   changeFrequency: 'monthly',
  //   priority: 0.7,
  // }))

  // For now, we'll include some placeholder dynamic pages – replace with your actual data
  const dynamicPages = [
    {
      url: `${baseUrl}/services/software-development`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/network-solutions`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/welcome-to-moxar`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // Combine all pages
  return [...staticPages, ...dynamicPages]
}