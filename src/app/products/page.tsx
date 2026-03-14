import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"
import { categories } from "@/data/products"

export default function ProductsPage() {
  return (
    <>
      <PageBreadcrumb />
      <div className="pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Page header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6e0b14]">Our Products</h1>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Explore our diverse range of premium Indian exports, sourced with care and delivered with excellence.
            </p>
          </div>

          {/* Product categories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {categories.map((cat, i) => (
              <Link
                key={i}
                href={`/products/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-lg card-lift block h-[380px]"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                {/* Gradient & tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0508] via-[#2a0508]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-[#c5a059]/20 backdrop-blur-sm flex items-center justify-center border border-[#c5a059]/30 group-hover:bg-[#c5a059]/40 transition-colors duration-300">
                      <cat.icon className="h-6 w-6 text-[#c5a059]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">{cat.description}</p>
                  <div className="flex items-center gap-2 text-[#c5a059] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    View Products <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Enquiry CTA */}
          <div className="mt-20 text-center bg-gradient-to-r from-[#6e0b14] to-[#4a0810] rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Order?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              We handle bulk orders tailored to your specifications. Reach out for pricing, samples, or any product inquiries.
            </p>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#b8934e] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
