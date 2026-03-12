import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react"

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Products", href: "/products" },
      { name: "Photo Gallery", href: "/gallery" },
      { name: "Contact Us", href: "/contact" },
      { name: "Request Quote", href: "/request-quote" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Fruits & Vegetables", href: "/products" },
      { name: "Spices & Herbs", href: "/products" },
      { name: "Namkeen & Snacks", href: "/products" },
      { name: "Garments", href: "/products" },
      { name: "Leather Products", href: "/products" },
      { name: "Copper Products", href: "/products" },
      { name: "Packaging Products", href: "/products" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#2a0508] text-slate-200 pt-16 pb-8">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mb-12" />
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/shreem-logo.png"
              alt="Shreem Exports"
              width={44}
              height={44}
              className="h-11 w-11 object-contain brightness-0 invert"
            />
            <div className="flex flex-col">
              <span className="text-white font-serif font-bold text-lg tracking-wide">Shreem Exports</span>
              <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.2em]">Private Limited</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            A leading Indian export house delivering premium quality products worldwide. Trusted by global buyers for excellence and reliability.
          </p>
          <div className="flex items-center gap-1 text-[#c5a059]">
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">GST: 36ABRCS3049N1ZL</span>
          </div>
        </div>

        {/* Link sections */}
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-5">
            <h4 className="text-[#c5a059] font-serif font-semibold text-base uppercase tracking-wider">{section.title}</h4>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div className="space-y-5">
          <h4 className="text-[#c5a059] font-serif font-semibold text-base uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#c5a059] shrink-0 mt-0.5" />
              <span className="text-slate-400 text-sm">
                6-10-62, Vinayak Nagar, Hal, Hyderabad, Telangana - 500042
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#c5a059] shrink-0" />
              <span className="text-slate-400 text-sm">
                +91 90107 10914 | +91 94946 62503
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#c5a059] shrink-0" />
              <span className="text-slate-400 text-sm break-all">
                business@shreemexports.online
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Shreem Exports Private Limited. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6 text-xs text-slate-500">
          <Link href="/privacy" className="hover:text-[#c5a059] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#c5a059] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
