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
  title: 'Moxar Technologies - Software Development, Network Solutions & IT Services',
  description: 'Expert software development, network technician services, graphic design, and comprehensive IT solutions for your business needs.',
  keywords: 'software development, network technician, graphic design, IT services, web development, network solutions, Moxar Technologies',
  authors: [{ name: 'Moxar Technologies' }],
  openGraph: {
    title: 'Moxar Technologies - Comprehensive IT Solutions',
    description: 'Professional software development, networking, and design services tailored to your business.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Moxar Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moxar Technologies - IT Solutions Provider',
    description: 'Expert software development, networking, and design services.',
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