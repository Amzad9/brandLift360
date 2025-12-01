'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: 'Product Consultation',
      description: 'Expert consultation to help you choose the right safety products for your specific industrial needs',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Custom Installation',
      description: 'Professional installation services by certified technicians ensuring optimal performance and safety',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, repairs, and 24/7 technical support to keep your safety systems operational',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'System Integration',
      description: 'Seamless integration of multiple safety systems into a unified monitoring and control platform',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Training & Certification',
      description: 'Comprehensive training programs for your staff on proper use and maintenance of safety equipment',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Emergency Response',
      description: 'Rapid response service for emergency repairs and system restoration to minimize downtime',
      gradient: 'from-pink-500 to-rose-500',
    },
  ]

  return (
    <section
      id="services"
      ref={ref}
      className="section-full-height bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e]"
    >
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm"
          >
            Our Services
          </motion.span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text leading-tight">
            Complete Safety Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            From consultation to installation and ongoing support - we've got you covered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, y: -12, rotateY: 5 }}
              className={`relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl overflow-hidden group cursor-pointer border-2 border-white/10 hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">📦</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black mb-4 text-white leading-tight">{service.title}</h3>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">{service.description}</p>
              </div>
              <motion.div
                className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mb-24"
                whileHover={{ scale: 1.8, rotate: 180 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

