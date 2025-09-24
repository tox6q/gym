'use client'

import { MeshGradient } from '@paper-design/shaders-react'
import { useEffect, useState } from 'react'

export default function MeshBackground() {
  const [dimensions, setDimensions] = useState({ width: 1280, height: 720 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial dimensions
    updateDimensions()

    // Update on resize
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <MeshGradient
        width={dimensions.width}
        height={dimensions.height}
        colors={["#7bfea5", "#fbfaf4"]}
        distortion={0.62}
        swirl={0.75}
        grainMixer={0.4}
        grainOverlay={0.15}
        speed={1.62}
        scale={0.72}
        rotation={20}
        offsetX={0}
        offsetY={0}
      />
    </div>
  )
}
