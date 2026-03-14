import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, MapPin, Package, ArrowLeft, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { categories, getCategoryBySlug, getAllSlugs } from "@/data/products"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: "Not Found" }
  return {
    title: `${category.name} — Shreem Exports`,
    description: category.description,
  }
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  return (
    <>
      <PageBreadcrumb />
      <div className="pb-20 bg-white min-h-screen">
        {/* Hero banner */}
        <div className="relative h-[340px] md:h-[400px] overflow-hidden">
          <Image
            src={category.heroImage}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a0508]/90 via-[#2a0508]/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 animate-reveal-up">
              {category.name}
            </h1>
            <p className="text-white/80 max-w-xl text-base md:text-lg animate-reveal-up" style={{ animationDelay: "0.1s" }}>
              {category.description}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12">
          {/* Back link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#6e0b14] hover:text-[#c5a059] transition-colors mb-10 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" /> All Categories
          </Link>

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {category.products.map((product, i) => (
              <Card
                key={i}
                className="overflow-hidden border-none shadow-lg card-lift group"
              >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {"giTag" in product && product.giTag && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#c5a059] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg border border-white/20">
                          <Award className="h-3 w-3" />
                          GI Tagged
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold text-[#6e0b14]">{product.name}</h3>
                      {"giTag" in product && product.giTag && (
                        <Award className="h-5 w-5 text-[#c5a059] flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    {(product.origin || product.packaging || ("giTag" in product && product.giTag)) && (
                      <div className="flex flex-wrap gap-3 pt-1">
                        {product.origin && (
                          <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-[#fef9f0] px-3 py-1 rounded-full border border-[#c5a059]/10">
                            <MapPin className="h-3 w-3 text-[#c5a059]" />
                            {product.origin}
                          </span>
                        )}
                        {"giTag" in product && product.giTag && (
                          <span className="inline-flex items-center gap-1 text-xs text-[#6e0b14] bg-[#6e0b14]/5 px-3 py-1 rounded-full border border-[#6e0b14]/10 font-medium">
                            <Award className="h-3 w-3 text-[#c5a059]" />
                            {product.giTag}
                          </span>
                        )}
                        {product.packaging && (
                          <span className="inline-flex items-center gap-1 text-xs text-slate-600 bg-[#fef9f0] px-3 py-1 rounded-full">
                            <Package className="h-3 w-3 text-[#c5a059]" />
                            {product.packaging}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-gradient-to-r from-[#6e0b14] to-[#4a0810] rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in {category.name}?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Get custom pricing, MOQ details, and sample availability for your bulk order requirements.
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
