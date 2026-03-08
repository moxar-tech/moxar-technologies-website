// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Network, PenTool } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#003049]">Innovative</span>
              <br />
              <span className="text-[#F97316]">IT Solutions</span>
              <br />
              <span className="text-[#003049]">For Your Business</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Moxar Technologies delivers comprehensive IT services including software development, network solutions, and creative design to help your business thrive in the digital age.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="group bg-[#003049] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#002033] transition-colors flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="border-2 border-[#003049] text-[#003049] px-6 py-3 rounded-lg font-semibold hover:bg-[#003049] hover:text-white transition-colors"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { value: '50+', label: 'Projects' },
                { value: '30+', label: 'Clients' },
                { value: '5+', label: 'Years' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#003049]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[400px]">
              <div className="absolute inset-0 bg-grid-pattern rounded-2xl" />
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <Code size={40} className="text-[#003049]" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <Network size={40} className="text-[#F97316]" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <PenTool size={40} className="text-[#003049]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}