'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'info@weblibron.com',
      link: 'mailto:info@weblibron.com',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: '📍',
      title: 'Address',
      content: '123 Business Street, Suite 100, City, State 12345',
      link: '#',
    },
    {
      icon: '💬',
      title: 'Live Chat',
      content: 'Available 24/7',
      link: '#',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0a]"
    >
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-green-300 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm"
          >
            Contact Us
          </motion.span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text leading-tight">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Ready to transform your business operations? Request a demo or speak with our ERP experts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="relative p-10 lg:p-12 bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6 text-white">Contact Information</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  We're here to help you find the perfect ERP solution for your business. Reach out to us through any of these channels.
                </p>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all group"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">{info.title}</h4>
                        <p className="text-gray-300">{info.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border-2 border-white/10 text-center"
              >
                <div className="text-3xl font-black text-white mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 }}
                className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border-2 border-white/10 text-center"
              >
                <div className="text-3xl font-black text-white mb-2">&lt;24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative p-10 lg:p-12 bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/10 space-y-6 shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -mr-40 -mt-40" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6 text-white">Send us a Message</h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                      <motion.input
                        whileFocus={{ scale: 1.02, borderColor: 'rgba(102, 126, 234, 0.5)' }}
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl focus:border-purple-500/50 focus:outline-none transition-all text-white placeholder-gray-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                      <motion.input
                        whileFocus={{ scale: 1.02, borderColor: 'rgba(102, 126, 234, 0.5)' }}
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl focus:border-purple-500/50 focus:outline-none transition-all text-white placeholder-gray-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Company Name</label>
                      <motion.input
                        whileFocus={{ scale: 1.02, borderColor: 'rgba(102, 126, 234, 0.5)' }}
                        type="text"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl focus:border-purple-500/50 focus:outline-none transition-all text-white placeholder-gray-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number</label>
                      <motion.input
                        whileFocus={{ scale: 1.02, borderColor: 'rgba(102, 126, 234, 0.5)' }}
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl focus:border-purple-500/50 focus:outline-none transition-all text-white placeholder-gray-500 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Message *</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01, borderColor: 'rgba(102, 126, 234, 0.5)' }}
                      placeholder="Tell us about your business requirements and how we can help..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      required
                      className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-2xl focus:border-purple-500/50 focus:outline-none transition-all resize-none text-white placeholder-gray-500 font-medium"
                    />
                  </div>

                  <motion.button
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)',
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-10 py-5 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] rounded-2xl text-lg font-bold text-white hover:shadow-2xl transition-all relative z-10 glow"
                  >
                    Send Message
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

