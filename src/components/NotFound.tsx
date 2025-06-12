import { motion } from 'framer-motion'
import { Home, Terminal, AlertTriangle, WifiOff, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import GeometricShapes from './GeometricShapes'

const GlitchCube = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      // Glitchy, erratic movement
      const time = state.clock.elapsedTime
      meshRef.current.rotation.y = Math.sin(time * 3) * 0.5
      meshRef.current.rotation.x = Math.cos(time * 2.5) * 0.3
      meshRef.current.position.y = Math.sin(time * 4) * 0.3
      meshRef.current.scale.x = 1 + Math.sin(time * 8) * 0.1
      meshRef.current.scale.y = 1 + Math.cos(time * 7) * 0.1
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#a259ff" 
        emissive="#a259ff"
        emissiveIntensity={0.3}
        transparent
        opacity={0.9}
        wireframe
      />
    </mesh>
  )
}

const ErrorParticles = () => {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particles = new Float32Array(100 * 3)
  for (let i = 0; i < 100; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 12
    particles[i * 3 + 1] = (Math.random() - 0.5) * 12
    particles[i * 3 + 2] = (Math.random() - 0.5) * 12
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.2
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.08}
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  )
}

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const glitchVariants = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [-2, 2, -2, 2, 0],
      y: [-1, 1, -1, 1, 0],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-neo-black text-neo-white flex items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Geometric shapes */}
      <GeometricShapes />

      <div className="container mx-auto px-4 text-center max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Terminal/3D Scene */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="bg-neo-black border-8 border-neo-purple p-8 h-96 relative">
              {/* Terminal header */}
              <div className="absolute top-2 left-2 right-2 bg-neo-white border-2 border-neo-black p-2 flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 border border-neo-black"></div>
                <div className="w-3 h-3 bg-yellow-500 border border-neo-black"></div>
                <div className="w-3 h-3 bg-green-500 border border-neo-black"></div>
                <span className="font-mono text-xs text-neo-black font-bold ml-2">SYSTEM_ERROR.exe</span>
              </div>
              
              {/* 3D Scene */}
              <div className="mt-12 h-full">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                  <ambientLight intensity={0.4} />
                  <pointLight position={[10, 10, 10]} color="#a259ff" intensity={1} />
                  <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={0.5} />
                  
                  <GlitchCube />
                  <ErrorParticles />
                </Canvas>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neo-white border-2 border-neo-black"></div>
            </div>
          </motion.div>

          {/* Right side - Error Content */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 text-left space-y-8">
            {/* Terminal-style error header */}
            <motion.div className="bg-neo-white text-neo-black p-4 border-4 border-neo-black font-mono">
              <div className="flex items-center gap-3 mb-2">
                <WifiOff className="w-6 h-6 text-red-500 stroke-[3]" />
                <span className="font-bold uppercase tracking-wider">CONNECTION_LOST</span>
              </div>
              <div className="text-sm">ERROR_CODE: 404_NOT_FOUND</div>
            </motion.div>

            {/* Glitch 404 */}
            <motion.div
              variants={glitchVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              <h1 className="text-8xl md:text-9xl font-black font-mono text-neo-purple leading-none">
                404
              </h1>
              {/* Glitch overlay */}
              <div className="absolute inset-0 text-8xl md:text-9xl font-black font-mono text-neo-white leading-none opacity-20 animate-glitch">
                404
              </div>
            </motion.div>

            {/* Command line style message */}
            <motion.div 
              variants={itemVariants}
              className="bg-neo-black text-neo-white p-6 border-4 border-neo-purple font-mono"
            >
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-6 h-6 text-neo-purple stroke-[3]" />
                <span className="text-neo-purple font-bold">SYSTEM@AI_PORTFOLIO:~$</span>
              </div>
                             <div className="space-y-2 text-sm">
                 <div>&gt; PAGE_NOT_FOUND</div>
                 <div>&gt; NEURAL_NETWORK_CONFUSED</div>
                 <div>&gt; REDIRECTING_TO_SAFE_ZONE...</div>
                 <div className="text-red-400">&gt; ERROR: PATH_INVALID</div>
               </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/" className="flex-1">
                  <motion.button
                    className="w-full bg-neo-purple text-neo-white font-bold text-lg px-6 py-4 border-4 border-neo-black hover:bg-neo-white hover:text-neo-black transition-colors duration-200 font-mono uppercase tracking-wider flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Home className="w-6 h-6 stroke-[3]" />
                    RETURN_HOME
                  </motion.button>
                </Link>

                <motion.button
                  onClick={() => window.location.reload()}
                  className="flex-1 bg-neo-white text-neo-black font-bold text-lg px-6 py-4 border-4 border-neo-black hover:bg-neo-purple hover:text-neo-white transition-colors duration-200 font-mono uppercase tracking-wider flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowRight className="w-6 h-6 stroke-[3]" />
                  RETRY_CONNECTION
                </motion.button>
              </div>
            </motion.div>

            {/* System status */}
            <motion.div 
              variants={itemVariants}
              className="bg-neo-gray text-neo-black p-6 border-4 border-neo-black"
            >
              <h3 className="font-mono font-bold uppercase text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-neo-purple stroke-[3]" />
                SYSTEM_STATUS
              </h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span>AI_PROJECTS:</span>
                  <span className="text-green-600 font-bold">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span>PORTFOLIO_DATA:</span>
                  <span className="text-green-600 font-bold">ACCESSIBLE</span>
                </div>
                <div className="flex justify-between">
                  <span>CURRENT_PAGE:</span>
                  <span className="text-red-600 font-bold">NOT_FOUND</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Background glitch text */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-black font-mono text-neo-purple/5 pointer-events-none select-none"
          animate={{
            opacity: [0.02, 0.08, 0.02],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ERROR_404
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound 