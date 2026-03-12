"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2800)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className="loading-screen fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center gap-6">
        {/* Spinning ring */}
        <div className="loading-ring absolute w-32 h-32 rounded-full border-2 border-transparent border-t-[#c5a059] border-r-[#c5a059]" />
        
        {/* Logo */}
        <div className="loading-logo">
          <Image
            src="/shreem-logo.png"
            alt="Shreem Exports"
            width={96}
            height={96}
            className="h-24 w-24 object-contain"
            priority
          />
        </div>

        {/* Company name */}
        <p className="text-[#6e0b14] font-serif font-bold text-lg tracking-wider mt-4">
          SHREEM EXPORTS
        </p>
        <div className="flex gap-1.5 mt-2">
          <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-bounce" style={{ animationDelay: "0s" }} />
          <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-bounce" style={{ animationDelay: "0.15s" }} />
          <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-bounce" style={{ animationDelay: "0.3s" }} />
        </div>
      </div>
    </div>
  )
}
