'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Starter',
      icon: '🚀',
      monthlyPrice: 99,
      annualPrice: 79,
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 10 users',
        'Core ERP modules',
        'Basic reporting & analytics',
        'Email support',
        'Cloud hosting included',
        'Mobile app access',
        'Data backup & recovery',
        'Standard integrations',
      ],
      popular: false,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-500/30',
      buttonGradient: 'from-blue-500 to-cyan-500',
      iconBg: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Professional',
      icon: '⭐',
      monthlyPrice: 299,
      annualPrice: 249,
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 users',
        'All ERP modules',
        'Advanced reporting & BI',
        'Priority support',
        'Cloud hosting included',
        'Mobile & desktop apps',
        'Automated backups',
        'API access & custom integrations',
        'Workflow automation',
        'Multi-currency support',
      ],
      popular: true,
      gradient: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-500/50',
      buttonGradient: 'from-purple-500 to-pink-500',
      iconBg: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Enterprise',
      icon: '🏢',
      monthlyPrice: null,
      annualPrice: null,
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'All modules + custom development',
        'Advanced analytics & AI insights',
        '24/7 dedicated support',
        'On-premise or cloud options',
        'White-label solution',
        'Custom integrations',
        'Advanced security & compliance',
        'Dedicated account manager',
        'Training & onboarding',
      ],
      popular: false,
      gradient: 'from-orange-500/20 to-red-500/20',
      border: 'border-orange-500/30',
      buttonGradient: 'from-orange-500 to-red-500',
      iconBg: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section
      id="pricing"
      ref={ref}
      className="section-full-height bg-gradient-to-b from-[#1a0a2e] to-[#0a0a0a]"
    >
      <div className="container mx-auto px-6 lg:px-12 py-20">
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
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm"
          >
            Pricing
          </motion.span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 gradient-text leading-tight">
            Choose Your Plan
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light mb-8">
            Flexible pricing plans designed to scale with your business
          </p>
          
          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={`text-lg font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-9 rounded-full transition-all duration-300 ${
                isAnnual ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-700'
              }`}
            >
              <motion.div
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg"
              />
            </button>
            <span className={`text-lg font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm font-semibold text-green-400"
              >
                Save up to 20%
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const price = plan.monthlyPrice 
              ? (isAnnual ? plan.annualPrice : plan.monthlyPrice)
              : 'Custom'
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -15, scale: plan.popular ? 1.05 : 1.02 }}
                className={`relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br ${plan.gradient} backdrop-blur-xl border-2 ${plan.border} overflow-hidden group shadow-2xl ${
                  plan.popular ? 'lg:scale-105 ring-2 ring-purple-500/50' : ''
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <span className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </motion.div>
                )}

                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -ml-20 -mb-20" />
                
                <div className="relative z-10">
                  {/* Icon and Plan Name */}
                  <div className="mb-8">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${plan.iconBg} flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-4xl font-black mb-3 text-white">{plan.name}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{plan.description}</p>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-10 pb-8 border-b-2 border-white/10">
                    <div className="flex items-baseline gap-2 mb-2">
                      {price === 'Custom' ? (
                        <span className="text-5xl font-black text-white">Custom</span>
                      ) : (
                        <>
                          <span className="text-6xl font-black text-white">${price}</span>
                          <span className="text-xl text-gray-400">{plan.period}</span>
                        </>
                      )}
                    </div>
                    {price !== 'Custom' && (
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-gray-400">
                          {isAnnual ? 'Billed annually' : 'Billed monthly'}
                        </p>
                        {isAnnual && plan.monthlyPrice && (
                          <span className="text-xs text-gray-500 line-through">
                            ${plan.monthlyPrice}/mo
                          </span>
                        )}
                      </div>
                    )}
                    {price !== 'Custom' && isAnnual && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-2 inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-semibold text-green-400"
                      >
                        Save ${(plan.monthlyPrice! - plan.annualPrice!) * 12}/year
                      </motion.div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2, 
                      boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full mb-10 px-8 py-5 bg-gradient-to-r ${plan.buttonGradient} rounded-2xl text-white font-bold text-lg hover:shadow-2xl transition-all glow`}
                  >
                    {price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </motion.button>

                  {/* Features */}
                  <div className="space-y-5">
                    <p className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>
                      What's Included
                      <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>
                    </p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + featureIndex * 0.05 }}
                          className="flex items-start gap-4 group/item"
                        >
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 shadow-lg group-hover/item:scale-110 transition-transform">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-200 leading-relaxed text-base">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            All plans include a 30-day free trial. No credit card required.
          </p>
          <a href="#contact" className="text-purple-400 hover:text-purple-300 font-semibold underline">
            Need a custom solution? Contact us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

