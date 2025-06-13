import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

const AvatarModel = () => {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/0.glb')

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = -0.7 + Math.sin(state.clock.elapsedTime) * 0.03
      // Slow rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.7, 0]} scale={0.45}>
      <primitive object={scene} />
    </group>
  )
}

const Avatar3D = () => {
  return (
    <div className="w-full h-96 md:h-[500px]">
      <Canvas
        camera={{ position: [0, -0.2, 2.5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <AvatarModel />
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI/2.5}
          maxPolarAngle={Math.PI/1.8}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

export default Avatar3D

// Preload the model
useGLTF.preload('/0.glb') 