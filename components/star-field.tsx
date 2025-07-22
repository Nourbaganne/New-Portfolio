"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      const starCount = 150

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
        })
      }
      setStars(newStars)
    }

    generateStars()
    window.addEventListener("resize", generateStars)

    return () => window.removeEventListener("resize", generateStars)
  }, [])

  useEffect(() => {
    const animateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          x: star.x - star.speed,
          y: star.y + star.speed * 0.5,
          x: star.x < -10 ? window.innerWidth + 10 : star.x - star.speed,
          y: star.y > window.innerHeight + 10 ? -10 : star.y + star.speed * 0.5,
        })),
      )
    }

    const interval = setInterval(animateStars, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity * 0.5})`,
          }}
        />
      ))}

      {/* Additional twinkling effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/20" />

      {/* CSS-based moving stars for better performance */}
      <div className="stars-layer-1"></div>
      <div className="stars-layer-2"></div>
      <div className="stars-layer-3"></div>
    </div>
  )
}
