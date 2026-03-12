"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ChevronRight } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const nameMap: Record<string, string> = {
  about: "About Us",
  products: "Products",
  contact: "Contact Us",
  gallery: "Gallery",
  "request-quote": "Request Quote",
  "fruits-vegetables": "Fresh Fruits & Vegetables",
  spices: "Spices & Seasonings",
  "dry-fruits": "Dry Fruits & Nuts",
  textiles: "Textiles & Fabrics",
  handicrafts: "Handicrafts & Artisan Goods",
  grains: "Grains & Millets",
  packaging: "Packaging Products",
}

export default function PageBreadcrumb() {
  const pathname = usePathname()
  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)

  return (
    <div className="container mx-auto px-4 pt-40 pb-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="flex items-center gap-1 text-[#6e0b14] hover:text-[#c5a059] transition-colors">
                <Home className="h-4 w-4" />
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((seg, i) => {
            const href = "/" + segments.slice(0, i + 1).join("/")
            const isLast = i === segments.length - 1
            const label = nameMap[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

            return (
              <span key={seg} className="contents">
                <BreadcrumbSeparator>
                  <ChevronRight className="h-3.5 w-3.5 text-[#c5a059]" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-[#6e0b14] font-semibold">{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={href} className="text-[#6e0b14] hover:text-[#c5a059] transition-colors">
                        {label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </span>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
