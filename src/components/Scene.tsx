import { Float } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

function Knot() {
  const meshRef = useRef<Mesh>(null)

  useFrame((_state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.2
  })

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <meshStandardMaterial color="#c084fc" roughness={0.25} metalness={0.6} />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1.4} />
      <pointLight position={[-3, -2, -2]} intensity={0.8} color="#c084fc" />
      <Knot />
    </Canvas>
  )
}
