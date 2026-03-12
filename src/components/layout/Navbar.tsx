"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, User } from "lucide-react"
import { cn } from "@/lib/utils"

// primary navigation order reflects desired placement: gallery & contact follow products
const leftNav = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PRODUCTS", href: "/products" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT", href: "/contact" },
]

// rightNav is no longer needed but kept for reference
// const rightNav = [
//   { name: "GALLERY", href: "/gallery" },
//   { name: "CONTACT", href: "/contact" },
//]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isHome = pathname === "/"

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  // On inner pages (white bg), always use dark text even when not scrolled
  const useDarkText = !isHome || isScrolled

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled 
            ? "py-3 bg-white/80 backdrop-blur-xl border-b border-[#6e0b14]/10 shadow-[0_2px_20px_-10px_rgba(110,11,20,0.15)]" 
            : isHome ? "py-6 bg-transparent" : "py-4 bg-[#fef9f0]/95 backdrop-blur-sm border-b border-[#e8e0d4]"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between relative">
            
            {/* Left: Glass Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              <div className={cn(
                "flex items-center p-1 rounded-full transition-all duration-500",
                useDarkText ? "bg-[#6e0b14]/5" : "bg-white/10 backdrop-blur-md border border-white/20"
              )}>
                {leftNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-6 py-2 text-[12px] font-bold tracking-[0.1em] rounded-full transition-all duration-300 group overflow-hidden",
                      isActive(item.href)
                        ? "text-white"
                        : useDarkText ? "text-slate-600 hover:text-[#6e0b14]" : "text-white/90 hover:text-white"
                    )}
                  >
                    {isActive(item.href) && (
                      <div className="absolute inset-0 bg-[#6e0b14] -z-10 animate-in fade-in zoom-in duration-500 rounded-full" />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden p-3 rounded-full transition-all",
                useDarkText ? "bg-[#6e0b14] text-white" : "bg-white/10 backdrop-blur-md text-white border border-white/20"
              )}
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Center: Hero Logo Section */}
            <Link
              href="/"
              className="flex items-center gap-3 group transition-all duration-500 px-4"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#c5a059] blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                <Image
                  src="/shreem-logo.png"
                  alt="Shreem Exports"
                  width={64}
                  height={64}
                  className={cn(
                    "object-contain transition-all duration-700 group-hover:rotate-[360deg]",
                    isScrolled ? "h-14 w-14" : "h-20 w-20"
                  )}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-serif font-black tracking-tighter text-xl md:text-2xl transition-all duration-500 uppercase",
                  useDarkText ? "text-[#6e0b14]" : "text-white"
                )}>
                  SHREEM
                </span>
                <span className={cn(
                  "text-[8px] tracking-[0.4em] font-bold uppercase transition-all duration-500",
                  useDarkText ? "text-[#c5a059]" : "text-[#c5a059]/80"
                )}>
                  EXPORTS
                </span>
              </div>
            </Link>

            {/* Right: Actions */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end">

              <Link
                href="/request-quote"
                className={cn(
                  "relative group px-8 py-3 rounded-full text-[12px] font-black tracking-[0.1em] transition-all duration-500 overflow-hidden",
                  useDarkText
                    ? "bg-[#6e0b14] text-white hover:bg-[#8a1019]"
                    : "bg-white text-[#6e0b14] hover:bg-[#f3f3f3]"
                )}
              >
                <span className="relative z-10">GET QUOTE</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-white transition-transform duration-500 ease-in-out lg:hidden flex flex-col",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e0d4]">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/shreem-logo.png"
              alt="Shreem Exports"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="font-serif font-bold text-[#6e0b14] tracking-wider text-lg">
              SHREEM EXPORTS
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-[#6e0b14] hover:bg-[#6e0b14]/5 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile links */}
        <nav className="flex-1 flex flex-col px-6 py-8 gap-1">
          {leftNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-lg font-semibold tracking-wide px-4 py-4 rounded-xl transition-all duration-200 border-b border-[#e8e0d4]/50",
                isActive(item.href)
                  ? "text-[#6e0b14] bg-[#6e0b14]/5"
                  : "text-slate-700 hover:text-[#6e0b14] hover:bg-[#fef9f0]"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="px-6 pb-8">
          <Link
            href="/request-quote"
            onClick={() => setMobileOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#6e0b14] hover:bg-[#8a1019] text-white font-bold px-8 py-4 rounded-full transition-colors duration-300 text-base tracking-wide"
          >
            GET QUOTE
          </Link>
        </div>
      </div>
    </>
  )
}
