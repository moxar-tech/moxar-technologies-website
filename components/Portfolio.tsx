// components/Portfolio.tsx
'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with React and Node.js',
    image: '🛍️',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: 'from-blue-500 to-[#003049]',
  },
  {
    title: 'Network Security System',
    category: 'Network Solutions',
    description: 'Enterprise-grade network monitoring and security system',
    image: '🔒',
    tags: ['Cisco', 'Firewall', 'VPN'],
    color: 'from-orange-500 to-[#F97316]',
  },
  {
    title: 'Brand Identity Package',
    category: 'Graphic Design',
    description: 'Complete branding solution for a tech startup',
    image: '🎨',
    tags: ['Logo Design', 'Branding', 'UI/UX'],
    color: 'from-purple-500 to-[#003049]',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure and intuitive mobile banking application',
    image: '📱',
    tags: ['React Native', 'Firebase', 'Redux'],
    color: 'from-green-500 to-[#F97316]',
  },
  {
    title: 'Cloud Infrastructure',
    category: 'IT Consulting',
    description: 'Scalable cloud infrastructure setup and migration',
    image: '☁️',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    color: 'from-red-500 to-[#003049]',
  },
  {
    title: 'CRM System',
    category: 'Software Development',
    description: 'Custom CRM system for sales management',
    image: '📊',
    tags: ['Python', 'Django', 'PostgreSQL'],
    color: 'from-yellow-500 to-[#F97316]',
  },
]

const categories = ['All', ...new Set(projects.map(p => p.category))]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-4">
            Our Portfolio
          </h2>
          <div className="w-20 h-1 bg-[#F97316] mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            Explore some of our recent projects and success stories
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[#003049] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl transform group-hover:scale-110 transition-transform">
                  {project.image}
                </span>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-2 bg-white rounded-full hover:bg-[#F97316] hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-[#F97316] hover:text-white transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#F97316]">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#003049] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}