import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: ['/private', '/admin'] // Uncomment if you have restricted areas
    },
    sitemap: 'https://moxar.net/sitemap.xml', // Replace with your actual sitemap URL
  }
}