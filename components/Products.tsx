'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Product3DViewer from './Product3DViewer'

interface Product {
  id: string
  name: string
  category: string
  description: string
  features: string[]
  modelUrl?: string
  modelType?: 'glb' | 'obj'
  image?: string
  price?: string
}

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const products: Product[] = [
    {
      id: '1',
      name: 'Industrial Safety Fence',
      category: 'Fencing',
      description: 'Heavy-duty safety fence system with modular design for maximum protection and flexibility.',
      features: [
        'Galvanized steel construction',
        'Modular panel system',
        'Weather resistant',
        'Easy installation',
        'Customizable heights',
      ],
      modelType: 'glb',
      price: 'From $299/panel',
    },
    {
      id: '2',
      name: 'Motion Detection Sensor',
      category: 'Sensors',
      description: 'Advanced motion detection sensor with AI-powered recognition and wireless connectivity.',
      features: [
        '360° detection range',
        'Wireless connectivity',
        'Weatherproof IP65',
        'Battery powered',
        'Mobile app integration',
      ],
      modelType: 'glb',
      price: 'From $199',
    },
    {
      id: '3',
      name: 'Electronic Safety Lock',
      category: 'Locks',
      description: 'Smart electronic lock with biometric and keycard access for enhanced security.',
      features: [
        'Biometric fingerprint',
        'RFID keycard support',
        'Tamper-proof design',
        'Battery backup',
        'Access log tracking',
      ],
      modelType: 'glb',
      price: 'From $449',
    },
    {
      id: '4',
      name: 'Safety Barrier Gate',
      category: 'Barriers',
      description: 'Automated safety barrier gate with vehicle detection and emergency stop functionality.',
      features: [
        'Automated operation',
        'Vehicle detection',
        'Emergency stop',
        'LED warning lights',
        'Remote control',
      ],
      modelType: 'glb',
      price: 'From $1,299',
    },
    {
      id: '5',
      name: 'Perimeter Security Camera',
      category: 'Surveillance',
      description: 'High-resolution perimeter security camera with night vision and motion tracking.',
      features: [
        '4K resolution',
        'Night vision',
        'Motion tracking',
        'Weatherproof IP67',
        'Cloud storage',
      ],
      modelType: 'glb',
      price: 'From $599',
    },
    {
      id: '6',
      name: 'Safety Warning Light',
      category: 'Warning Systems',
      description: 'High-visibility warning light system with multiple flash patterns and sound alerts.',
      features: [
        'Multiple flash patterns',
        'Sound alerts',
        'Solar powered option',
        'Wireless sync',
        'Long-range visibility',
      ],
      modelType: 'glb',
      price: 'From $149',
    },
  ]

  return (
    <section
      id="products"
      ref={ref}
      className="bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e] py-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
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
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm"
          >
            Our Products
          </motion.span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text leading-tight">
            Industrial Safety Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Explore our comprehensive range of safety products with interactive 3D models
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/10 hover:border-white/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* 3D Viewer Container */}
              <div className="h-64 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                <Product3DViewer
                  modelUrl={product.modelUrl}
                  modelType={product.modelType}
                  productName={product.name}
                  autoRotate={true}
                  enableZoom={false}
                  enablePan={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold text-white">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2 text-white">{product.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2 mb-4">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {product.price && (
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-lg font-bold text-white">{product.price}</p>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-6xl w-full bg-gray-900 rounded-3xl border-2 border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 3D Viewer */}
              <div className="h-96 lg:h-[600px] bg-black">
                <Product3DViewer
                  modelUrl={selectedProduct.modelUrl}
                  modelType={selectedProduct.modelType}
                  productName={selectedProduct.name}
                  autoRotate={true}
                  enableZoom={true}
                  enablePan={true}
                />
              </div>

              {/* Product Details */}
              <div className="p-8 lg:p-12 overflow-y-auto max-h-[600px]">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="mb-4 text-gray-400 hover:text-white transition-colors"
                >
                  ✕ Close
                </button>
                <h2 className="text-4xl font-black mb-4 text-white">{selectedProduct.name}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProduct.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Features</h3>
                  <ul className="space-y-3">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProduct.price && (
                  <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-2xl font-black text-white">{selectedProduct.price}</p>
                  </div>
                )}

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-bold hover:shadow-lg transition-all"
                  >
                    Request Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-4 border-2 border-white/20 rounded-xl text-white font-semibold hover:border-white/40 transition-all"
                  >
                    Download Specs
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

