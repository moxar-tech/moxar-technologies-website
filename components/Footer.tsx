// components/Footer.tsx
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#003049] rounded-lg flex items-center justify-center">
                <span className="text-[#F97316] font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl">
                <span className="text-[#003049]">MOXAR</span>
                <span className="text-[#F97316]">TECH</span>
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Innovative IT solutions for modern businesses. Software development, network solutions, and creative design.
            </p>
            <div className="flex space-x-3">
              {['in', 'tw', 'gh', 'db'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:bg-[#003049] hover:text-white transition-colors shadow-sm"
                >
                  <span className="text-xs font-medium">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#003049] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-[#F97316] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#003049] mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Software Development',
                'Network Solutions',
                'Graphic Design',
                'Web Development',
                'IT Consulting',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-gray-600 hover:text-[#F97316] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-[#003049] mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#F97316] flex-shrink-0 mt-1" />
                <a href="mailto:info@moxartech.com" className="text-gray-600 hover:text-[#003049]">
                  info@moxartech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#F97316] flex-shrink-0 mt-1" />
                <a href="tel:+15551234567" className="text-gray-600 hover:text-[#003049]">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#F97316] flex-shrink-0 mt-1" />
                <span className="text-gray-600">
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Moxar Technologies. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-[#003049]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#003049]">
              Terms of Service
            </Link>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-2 bg-[#003049] text-white rounded-lg hover:bg-[#002033] transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}