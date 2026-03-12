import Link from "next/link"
import { Apple, Flame, Cookie, Shirt, Briefcase, CircleDot, Package, ArrowRight } from "lucide-react"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

const categories = [
  {
    name: "Fresh Fruits & Vegetables",
    slug: "fruits-vegetables",
    description: "Premium Indian produce — mangoes, pomegranates, bananas, okra, green chillies, and more — sourced directly from farms.",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Spices & Seasonings",
    slug: "spices",
    description: "Authentic Indian spices — turmeric, cumin, cardamom, black pepper, red chillies — with bold aroma and flavour.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Dry Fruits & Nuts",
    slug: "dry-fruits",
    description: "Hand-picked cashews, almonds, raisins, pistachios, and walnuts — carefully graded and packed for export.",
    icon: Cookie,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Textiles & Fabrics",
    slug: "textiles",
    description: "Handloom silks, cotton textiles, and premium fabrics that showcase India's rich weaving heritage.",
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Handicrafts & Artisan Goods",
    slug: "handicrafts",
    description: "Exquisite hand-crafted décor, pottery, metalwork, and art pieces celebrating Indian craftsmanship.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1604076913837-52ab5f3e1bdc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Grains & Millets",
    slug: "grains",
    description: "Premium basmati rice, millets, and pulses — the staple grains of India, now available worldwide.",
    icon: CircleDot,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Packaging Products",
    slug: "packaging",
    description: "Food-grade and industrial packaging solutions including pouches, cartons, and custom printed materials.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1605187813954-e88c3ad2d06f?q=80&w=2070&auto=format&fit=crop",
  },
]

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
