"use client"

import React from "react"
import { ArrowRight } from "lucide-react"

export default function ScrollToSectionButton({
  targetId,
  className,
  children,
}: {
  targetId: string
  className?: string
  children: React.ReactNode
}) {
  const handleClick = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        className ||
        "mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
      }
    >
      {children}
      <ArrowRight className="h-4 w-4 rotate-90" />
    </button>
  )
}
