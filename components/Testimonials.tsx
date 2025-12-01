'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Facility Manager, Industrial Plant',
      content: 'The 3D product viewer helped us choose the perfect safety fence system. Installation was seamless and the quality exceeded our expectations. Our facility is now fully secured.',
      avatar: '👷‍♀️',
    },
    {
      name: 'Michael Chen',
      role: 'Safety Director, Manufacturing Corp',
      content: 'The motion sensors and security cameras we purchased have significantly improved our perimeter security. The interactive 3D models made it easy to visualize the setup before installation.',
      avatar: '👨‍💼',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager, Warehouse',
      content: 'Outstanding products and service! The electronic locks and barrier gates have enhanced our security protocols. The 3D viewer feature is a game-changer for product selection.',
      avatar: '👩‍💼',
    },
  ]

  return (
    <section
      id="testimonials"
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
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-yellow-300 bg-yellow-500/10 border border-yellow-500/20 rounded-full backdrop-blur-sm"
          >
            Testimonials
          </motion.span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text leading-tight">
            Client Stories
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative p-10 lg:p-12 bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center text-3xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 font-medium text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-200 mb-0 italic text-lg leading-relaxed">"{testimonial.content}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

