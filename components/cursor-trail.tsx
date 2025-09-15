"use client"

import { useEffect, useState } from "react"

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor glow */}
      <div
        className="absolute w-6 h-6 rounded-full bg-primary/30 blur-sm transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Energy rings - concentric circles */}
      <div
        className="absolute w-12 h-12 rounded-full border border-primary/20 animate-ping"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          animationDuration: "2s",
        }}
      />
      <div
        className="absolute w-8 h-8 rounded-full border border-secondary/30 animate-ping"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          animationDuration: "1.5s",
          animationDelay: "0.5s",
        }}
      />
    </div>
  )
}
