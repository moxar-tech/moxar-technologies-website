// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moxar Technologies - Software Development, Network Solutions & IT Services in Hoima City, Uganda',
  description: 'Expert software development, network technician services, graphic design, and comprehensive IT solutions in Hoima City, Uganda. Serving businesses in the Bunyoro region and beyond.',
  keywords: 'software development Hoima Uganda, network technician Hoima Uganda, graphic design Hoima Uganda, IT services Hoima Uganda, web development Hoima Uganda, network solutions Hoima Uganda, Moxar Technologies, Hoima City Uganda IT company, Bunyoro IT services', 
  authors: [{ name: 'Moxar Technologies' }],
  openGraph: {
    title: 'Moxar Technologies - Comprehensive IT Solutions in Uganda',
    description: 'Professional software development, networking, and design services tailored to your business in Uganda.',
    type: 'website',
    locale: 'en_UG',
    siteName: 'Moxar Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moxar Technologies - IT Solutions Provider in Uganda',
    description: 'Expert software development, networking, and design services in Hoima, Uganda.',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}