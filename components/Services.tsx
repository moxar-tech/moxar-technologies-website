// components/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { Code, Network, PenTool, Globe, Database, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs, from web applications to enterprise systems.',
    color: 'from-blue-500 to-[#003049]',
  },
  {
    icon: Network,
    title: 'Network Solutions',
    description: 'Professional network setup, configuration, and maintenance for optimal performance and security.',
    color: 'from-orange-500 to-[#F97316]',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Creative design services including branding, UI/UX, and marketing materials that stand out.',
    color: 'from-purple-500 to-[#003049]',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive, modern websites and web applications built with the latest technologies.',
    color: 'from-green-500 to-[#F97316]',
  },
  {
    icon: Database,
    title: 'IT Consulting',
    description: 'Expert advice on technology strategy, infrastructure, and digital transformation.',
    color: 'from-red-500 to-[#003049]',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    color: 'from-yellow-500 to-[#F97316]',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-[#F97316] mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            We offer comprehensive IT solutions to help your business succeed in the digital landscape
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#003049] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F97316] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}