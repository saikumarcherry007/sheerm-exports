"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "/air_ways.webp",
  "/road ways.webp",
  "/water ways.webp",
]

export default function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Global Shipping"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-[#2a0508]/70" />
    </div>
  )
}
