import Image from "next/image"
import { Camera } from "lucide-react"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop", alt: "Fresh fruits ready for export" },
  { src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop", alt: "Premium Indian spices" },
  { src: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop", alt: "Dry fruits and nuts selection" },
  { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop", alt: "Indian textiles and fabrics" },
  { src: "https://images.unsplash.com/photo-1604076913837-52ab5f3e1bdc?q=80&w=800&auto=format&fit=crop", alt: "Handcrafted artisan goods" },
  { src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop", alt: "Grains and millets" },
  { src: "https://images.unsplash.com/photo-1605187813954-e88c3ad2d06f?q=80&w=800&auto=format&fit=crop", alt: "Packaging solutions" },
  { src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop", alt: "Quality inspection process" },
  { src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?q=80&w=800&auto=format&fit=crop", alt: "Warehouse operations" },
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
