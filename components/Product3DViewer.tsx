'use client'

import { useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera, Html } from '@react-three/drei'
// Dynamic imports for 3D model loaders
const GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader.js').GLTFLoader
const OBJLoader = require('three/examples/jsm/loaders/OBJLoader.js').OBJLoader
import * as THREE from 'three'
import { motion } from 'framer-motion'

interface Product3DViewerProps {
  modelUrl?: string
  modelType?: 'glb' | 'obj'
  productName: string
  autoRotate?: boolean
  enableZoom?: boolean
  enablePan?: boolean
}

function Model({ url, type }: { url: string; type: 'glb' | 'obj' }) {
  const meshRef = useRef<THREE.Group>(null)
  
  let model: THREE.Group | null = null

  try {
    if (type === 'glb') {
      const gltf = useLoader(GLTFLoader, url)
      model = gltf.scene
    } else if (type === 'obj') {
      const obj = useLoader(OBJLoader, url)
      model = obj
    }
  } catch (error) {
    console.warn('Failed to load 3D model, using placeholder:', error)
  }

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  // If model failed to load, show placeholder
  if (!model) {
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#667eea"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    )
  }

  return (
    <primitive
      ref={meshRef}
      object={model}
      scale={1}
      position={[0, 0, 0]}
    />
  )
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
        <p className="text-white text-sm font-medium">Loading 3D Model...</p>
      </div>
    </Html>
  )
}

export default function Product3DViewer({
  modelUrl,
  modelType = 'glb',
  productName,
  autoRotate = true,
  enableZoom = true,
  enablePan = true,
}: Product3DViewerProps) {
  // Default placeholder - in production, use actual model URLs
  const defaultModel = modelUrl || '/models/placeholder.glb'

  return (
    <div className="w-full h-full relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#667eea" />
        <pointLight position={[0, 10, 0]} intensity={0.3} color="#f093fb" />
        
        {/* Environment */}
        <Environment preset="warehouse" />
        
        {/* 3D Model */}
        <Suspense fallback={<LoadingSpinner />}>
          {modelUrl ? (
            <Model url={defaultModel} type={modelType} />
          ) : (
            // Placeholder geometry when no model is provided
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial
                color="#667eea"
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          )}
        </Suspense>
        
        {/* Controls */}
        <OrbitControls
          enableZoom={enableZoom}
          enablePan={enablePan}
          autoRotate={autoRotate}
          autoRotateSpeed={1}
          minDistance={2}
          maxDistance={10}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
      
      {/* Controls Info */}
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
        <p className="text-xs text-gray-300">
          <span className="text-white font-semibold">Controls:</span> Drag to rotate • Scroll to zoom • Right-click to pan
        </p>
      </div>
    </div>
  )
}

