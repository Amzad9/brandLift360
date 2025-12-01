'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Environment, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 128, 128]} scale={3}>
      <MeshDistortMaterial
        color="#667eea"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0}
        metalness={0.9}
        transparent
        opacity={0.9}
      />
    </Sphere>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 3000

  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 25
    positions[i + 1] = (Math.random() - 0.5) * 25
    positions[i + 2] = (Math.random() - 0.5) * 25
    
    const color = new THREE.Color()
    color.setHSL(Math.random() * 0.1 + 0.6, 0.8, 0.6)
    colors[i] = color.r
    colors[i + 1] = color.g
    colors[i + 2] = color.b
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.8} />
    </points>
  )
}

export default function Hero() {

  return (
    <section className="section-full-height relative overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#667eea" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#764ba2" />
          <pointLight position={[0, 10, 0]} intensity={0.8} color="#f093fb" />
          <AnimatedSphere />
          <FloatingParticles />
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.4}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
          <Environment preset="night" />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-xl shadow-lg"
            >
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              Industrial Safety Products & Solutions
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-7xl md:text-8xl lg:text-[140px] xl:text-[160px] font-black mb-6 leading-[0.9] tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="block gradient-text"
              >
                SafetyPro
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 mb-6 max-w-5xl mx-auto font-light leading-relaxed">
              Explore our comprehensive range of{' '}
              <span className="text-white font-semibold">industrial safety products</span> with interactive{' '}
              <span className="text-white font-semibold">3D models</span> - fences, sensors, locks, and more
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by 1000+ industrial facilities worldwide for safety and security solutions
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.08, 
                boxShadow: '0 25px 70px rgba(102, 126, 234, 0.5)',
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#f093fb] rounded-full text-lg font-bold text-white overflow-hidden glow transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#764ba2] via-[#f093fb] to-[#667eea] opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.08,
                borderColor: 'rgba(255, 255, 255, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 border-2 border-white/20 rounded-full text-lg font-bold text-white backdrop-blur-xl transition-all duration-300 shadow-lg"
            >
              Request Quote
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs text-gray-400 font-semibold tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center p-2 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

