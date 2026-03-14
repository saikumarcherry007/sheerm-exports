import Image from "next/image"
import { Camera } from "lucide-react"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

const galleryImages = [
  { src: "/products/premium-pomegranates.jpeg", alt: "Premium Pomegranates" },
  { src: "/products/green-cardamom.jpeg", alt: "Green Cardamom" },
  { src: "/products/turmeric-powder-high-curcumin.jpeg", alt: "High Curcumin Turmeric Powder" },
  { src: "/products/premium-cashew-nuts-w180.jpeg", alt: "Premium Cashew Nuts" },
  { src: "/products/grains-millets.webp", alt: "Grains & Millets" },
  { src: "/products/textiles-fabrics.webp", alt: "Textiles & Fabrics" },
  { src: "/products/handicrafts-artisan-goods.webp", alt: "Handicraft Artisan Goods" },
  { src: "/products/packaging-products.jpeg", alt: "Packaging Products" },
]

export default function GalleryPage() {
  return (
    <>
      <PageBreadcrumb />
      <div className="pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Page header */}
          <div className="text-center mb-16 pt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6e0b14]/10 mb-6">
              <Camera className="h-8 w-8 text-[#6e0b14]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6e0b14]">Gallery</h1>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A visual journey through our products, processes, and partnerships.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 stagger-children">
            {galleryImages.map((img, i) => (
              <div key={i} className="mb-6 break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg card-lift">
                <div className="relative aspect-[4/3]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0508]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-semibold text-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
