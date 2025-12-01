'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl lg:text-3xl font-black tracking-tight"
        >
          <span className="gradient-text">Safety</span>
          <span className="text-white">Pro</span>
        </motion.a>

        <div className="hidden md:flex items-center space-x-10">
          {['About', 'Products', 'Services', 'Features', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 + 0.3 }}
              whileHover={{ y: -2, color: '#ffffff' }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] group-hover:w-full transition-all duration-300"
                initial={false}
              />
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full text-sm font-semibold text-white hover:from-[#764ba2] hover:to-[#667eea] transition-all duration-300 shadow-lg shadow-purple-500/20"
        >
          Request Quote
        </motion.button>
      </nav>
    </motion.header>
  )
}

