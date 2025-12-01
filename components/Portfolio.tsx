'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'Manufacturing Company',
      category: 'ERP Implementation',
      description: 'Streamlined production, inventory, and supply chain for 500+ employee manufacturing firm',
      gradient: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-500/50',
    },
    {
      title: 'Retail Chain',
      category: 'Multi-location ERP',
      description: 'Unified system managing 50+ retail locations with real-time inventory and sales tracking',
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/50',
    },
    {
      title: 'Healthcare Provider',
      category: 'Healthcare ERP',
      description: 'Comprehensive solution for patient management, billing, and resource planning',
      gradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/50',
    },
    {
      title: 'Financial Services',
      category: 'Finance & Accounting',
      description: 'Advanced financial management with compliance and regulatory reporting capabilities',
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/50',
    },
  ]

  return (
    <section
      id="portfolio"
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
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-pink-300 bg-pink-500/10 border border-pink-500/20 rounded-full backdrop-blur-sm"
          >
            Case Studies
          </motion.span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text leading-tight">
            Success Stories
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Real businesses achieving real results with Weblibron ERP Solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, y: -15, rotateX: 5 }}
              className={`relative h-96 lg:h-[500px] rounded-3xl bg-gradient-to-br ${project.gradient} border-2 ${project.borderColor} overflow-hidden group cursor-pointer backdrop-blur-xl shadow-2xl`}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute inset-0 flex flex-col justify-center p-10 z-10">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white mb-4">
                    {project.category}
                  </span>
                </div>
                <motion.h3
                  className="text-4xl lg:text-5xl font-black mb-6 text-white leading-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-200 leading-relaxed text-lg max-w-md">{project.description}</p>
                <motion.div
                  className="mt-8 flex items-center gap-2 text-white font-semibold"
                  whileHover={{ x: 5 }}
                >
                  <span>View Case Study</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
              <motion.div
                className="absolute top-8 right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.6,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

