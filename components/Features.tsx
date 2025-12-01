'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      title: 'Real-time Dashboard',
      description: 'Get instant insights with customizable dashboards showing KPIs, metrics, and real-time data',
      icon: '📊',
    },
    {
      title: 'Cloud & On-Premise',
      description: 'Deploy in the cloud for flexibility or on-premise for maximum control and security',
      icon: '☁️',
    },
    {
      title: 'Mobile Access',
      description: 'Access your ERP system anywhere with native mobile apps for iOS and Android',
      icon: '📱',
    },
    {
      title: 'API Integration',
      description: 'Seamlessly integrate with third-party tools, e-commerce platforms, and custom applications',
      icon: '🔌',
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security with role-based access, encryption, and compliance features',
      icon: '🔒',
    },
    {
      title: 'Multi-currency & Multi-language',
      description: 'Operate globally with support for multiple currencies, languages, and tax systems',
      icon: '🌍',
    },
    {
      title: 'Automated Workflows',
      description: 'Streamline processes with automated workflows, approvals, and notifications',
      icon: '⚙️',
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics, reporting, and AI-powered insights for data-driven decisions',
      icon: '🤖',
    },
    {
      title: 'Scalable Architecture',
      description: 'Grows with your business from startup to enterprise with flexible scaling options',
      icon: '📈',
    },
  ]

  return (
    <section
      id="features"
      ref={ref}
      className="section-full-height bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0a]"
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
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm"
          >
            ERP Features
          </motion.span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text leading-tight">
            Powerful Features
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Everything you need to manage and grow your business efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, scale: 1.03, rotateY: 2 }}
              className="group relative p-8 lg:p-10 bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-white leading-tight">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

