// components/About.tsx
'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: CheckCircle,
    title: 'Expert Team',
    description: 'Skilled professionals in software, networking, and design',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'High standards in every project we undertake',
  },
  {
    icon: Users,
    title: 'Client Focused',
    description: 'Your success is our top priority',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Projects delivered on time, every time',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#003049]/20 to-[#F97316]/20" />
              <div className="absolute inset-0 bg-grid-pattern opacity-50" />
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-[#003049]/10 rounded-full" />
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#F97316]/10 rounded-full" />
              
              {/* Placeholder for actual image - replace with your image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#003049] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-white font-bold">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#003049]">Moxar Technologies</h3>
                  <p className="text-gray-600">Innovation & Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
            >
              <p className="text-sm font-semibold text-[#003049]">5+ Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">
              About Moxar Technologies
            </h2>
            <div className="w-20 h-1 bg-[#F97316] mb-6" />

            <p className="text-lg text-gray-600 mb-6">
              We are a passionate team of software developers, network technicians, and creative designers dedicated to delivering exceptional IT solutions. With years of combined experience, we help businesses transform their ideas into reality.
            </p>

            <p className="text-gray-600 mb-8">
              Our approach combines technical expertise with creative thinking to provide comprehensive solutions that drive growth and efficiency. We believe in building long-term partnerships with our clients, understanding their unique needs, and delivering results that exceed expectations.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <feature.icon className="w-6 h-6 text-[#F97316] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#003049]">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '100%', label: 'Satisfaction' },
                { value: '24/7', label: 'Support' },
                { value: '100+', label: 'Projects' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-xl font-bold text-[#003049]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}