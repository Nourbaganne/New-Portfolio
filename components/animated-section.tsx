"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fadeInUp", delay = 0 }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (animation) {
      case "fadeInUp":
        return "animate-fade-in-up"
      case "fadeInLeft":
        return "animate-fade-in-left"
      case "fadeInRight":
        return "animate-fade-in-right"
      case "scaleIn":
        return "animate-scale-in"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div ref={ref} className={`transition-all duration-1000 ${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
