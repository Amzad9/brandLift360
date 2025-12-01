'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="section-full-height bg-gradient-to-b from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]"
    >
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm"
            >
              About Us
            </motion.span>
            <motion.h2
              whileInView={{ scale: 1.02 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text leading-tight"
            >
              Industrial Safety Experts
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Leading provider of industrial safety products and solutions. We offer comprehensive safety systems including fences, sensors, locks, and surveillance equipment to protect your facility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: 'Quality Products',
                description: 'Premium industrial safety products built to withstand harsh environments and meet international safety standards',
                icon: '🛡️',
                gradient: 'from-blue-500/20 to-cyan-500/20',
                border: 'border-blue-500/30',
              },
              {
                title: '3D Visualization',
                description: 'Interactive 3D models let you inspect every detail before purchase. Rotate, zoom, and explore products in real-time',
                icon: '👁️',
                gradient: 'from-purple-500/20 to-pink-500/20',
                border: 'border-purple-500/30',
              },
              {
                title: 'Expert Support',
                description: 'Our team of safety experts provides consultation, installation support, and ongoing maintenance services',
                icon: '👷',
                gradient: 'from-pink-500/20 to-orange-500/20',
                border: 'border-pink-500/30',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
              className={`relative p-10 lg:p-12 bg-gradient-to-br ${item.gradient} backdrop-blur-xl rounded-3xl border-2 ${item.border} hover:border-opacity-60 transition-all duration-500 overflow-hidden group shadow-xl hover:shadow-2xl`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-5xl">{item.icon}</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-6 text-white leading-tight">{item.title}</h3>
                <p className="text-gray-200 leading-relaxed text-lg">{item.description}</p>
              </div>
            </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

