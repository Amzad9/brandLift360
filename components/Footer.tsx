'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-[#000000] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-3xl font-black mb-6 tracking-tight">
                <span className="gradient-text">Safety</span>
                <span className="text-white">Pro</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Leading provider of industrial safety products and solutions. Protecting facilities worldwide.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:border-white/30 hover:bg-white/10 transition-all"
                  >
                    <span className="text-sm">{social[0]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
              <ul className="space-y-4">
                {['About', 'Products', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-white transition-colors font-medium relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
              <ul className="space-y-4">
                {['Blog', 'Case Studies', 'Documentation', 'Support'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors font-medium relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Stay updated with our latest projects and insights.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500/50 focus:outline-none text-white placeholder-gray-500 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl text-sm font-semibold text-white"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SafetyPro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

