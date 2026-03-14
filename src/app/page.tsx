import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Globe, ShieldCheck, Truck, Zap, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroBackground from "@/components/home/HeroBackground"
import { categories } from "@/data/products"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <HeroBackground />

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="animate-reveal-up text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white">
            Premium Indian Exports,{" "}
            <br className="hidden sm:block" />
            <span className="text-[#c5a059] italic">Delivered Worldwide</span>
          </h1>
          <p className="animate-reveal-up text-base sm:text-lg md:text-xl mb-10 text-slate-200 max-w-2xl mx-auto font-light" style={{ animationDelay: "0.15s" }}>
            Connecting global markets with the finest quality Indian products.
            From fresh produce to premium garments, we bridge the gap with excellence.
          </p>
          <div className="animate-reveal-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-[#6e0b14] hover:bg-[#8a1019] text-white min-w-[200px] py-7 text-lg border border-[#c5a059]/30">
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/5 backdrop-blur-md border-[#c5a059]/40 hover:bg-[#c5a059]/20 text-white min-w-[200px] py-7 text-lg">
              <Link href="/request-quote">Request Quote</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-0.5 h-14 rounded-full bg-gradient-to-b from-[#c5a059] to-transparent animate-bounce" />
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16 bg-gradient-to-b from-[#0c050a] to-[#1a0a0d] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#c5a059] text-sm font-semibold uppercase tracking-widest mb-2">Trusted &amp; Verified</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Certifications &amp; Affiliations</h2>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0c050a] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1a0a0d] to-transparent pointer-events-none z-10" />

          <div className="cert-track flex w-max gap-8 py-4">
            {[...Array(2)].map((_, setIdx) =>
              [
                { name: "DGFT", src: "/certifications/DGFT.png" },
                { name: "APEDA", src: "/certifications/APEDA.png" },
                { name: "MSME", src: "/certifications/MSME.png" },
                { name: "FIEO", src: "/certifications/FIEO.png" },
                { name: "FICCI", src: "/certifications/FICCI.png" },
                { name: "GCCI", src: "/certifications/GCCI.png" },
                { name: "UDYOG AADHAR", src: "/certifications/UDYOG AADHAR.png" },
                { name: "GST", src: "/certifications/GST.png" },
                { name: "FDA", src: "/certifications/FDA.png" },
                { name: "SPICE BOARD", src: "/certifications/SPICE BOARD.png" },
                { name: "HALAL", src: "/certifications/HALAL.png" },
                { name: "GMP", src: "/certifications/GMP.png" },
              ].map((cert, i) => (
                <div
                  key={`${setIdx}-${i}`}
                  className="group flex-shrink-0 w-48 flex items-center justify-center p-6"
                >
                  <div className="relative h-24 w-40 transition-transform duration-300 group-hover:scale-110">
                    <Image 
                      src={cert.src} 
                      alt={cert.name} 
                      fill 
                      className="object-contain" 
                      sizes="160px" 
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes cert-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .cert-track {
          animation: cert-scroll 30s linear infinite;
        }
        .cert-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-[#6e0b14]/10 text-[#6e0b14] text-sm font-semibold rounded-full">
                ESTABLISHED EXPORTERS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6e0b14] leading-tight">
                Quality &amp; Integrity in Every Shipment
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Shreem Exports Private Limited, based in Hyderabad, is a premier export-import company dedicated to delivering high-quality Indian goods to international markets. We specialize in sourcing the finest products directly from growers and manufacturers.
              </p>

              <div className="grid grid-cols-2 gap-8 py-4">
                <div className="space-y-1 border-l-4 border-[#c5a059] pl-4">
                  <div className="text-3xl font-bold text-[#6e0b14]">7+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Product Categories</div>
                </div>
                <div className="space-y-1 border-l-4 border-[#c5a059] pl-4">
                  <div className="text-3xl font-bold text-[#6e0b14]">Global</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Reach &amp; Network</div>
                </div>
              </div>

              <Button asChild variant="link" className="p-0 text-[#6e0b14] group h-auto">
                <Link href="/about" className="flex items-center text-lg font-bold">
                  Learn more about our journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero/road_ways.webp"
                alt="Our Products"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-2 border-[#c5a059]/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-[#fef9f0]">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#6e0b14]">Our Core Expertise</h2>
          <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a diverse range of high-quality products sourced from across India, meeting international standards.
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href={`/products/${cat.slug}`}
              className="card-lift group relative h-72 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a0508]/90 via-[#2a0508]/30 to-transparent transition-all duration-500 group-hover:from-[#6e0b14]/90" />
              
              {/* Icon */}
              <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-[#c5a059]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <cat.icon className="h-5 w-5 text-white" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:pb-8">
                <cat.icon className="h-8 w-8 text-[#c5a059] mb-3 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-lg font-bold text-white group-hover:text-[#c5a059] transition-colors duration-300">{cat.name}</h3>
                <p className="text-white/0 group-hover:text-white/70 text-sm transition-all duration-500 mt-1 max-h-0 group-hover:max-h-10 overflow-hidden">
                  Premium quality exports →
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="container mx-auto px-4 mt-12 text-center">
          <Button asChild size="lg" className="bg-[#6e0b14] hover:bg-[#8a1019] text-white px-8 border border-[#c5a059]/20">
            <Link href="/products">
              View All Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#6e0b14]">Why Global Buyers Trust Us</h2>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 stagger-children">
            {[
              { title: "Premium Quality", desc: "Rigorous quality checks at every stage, from sourcing to shipping.", icon: ShieldCheck },
              { title: "Global Reach", desc: "Robust logistics network ensuring timely delivery across continents.", icon: Globe },
              { title: "Efficient Sourcing", desc: "Direct partnerships with growers for competitive pricing & freshness.", icon: Zap },
              { title: "Timely Delivery", desc: "We prioritize your deadlines with optimized shipping routes.", icon: Truck },
              { title: "Customer Centric", desc: "Transparent communication and dedicated support for every client.", icon: Users },
              { title: "Certified Excellence", desc: "Adherence to international export standards and certifications.", icon: Award },
            ].map((feature, i) => (
              <div key={i} className="flex gap-5 group p-4 rounded-xl hover:bg-[#fef9f0] transition-colors duration-300">
                <div className="h-14 w-14 rounded-xl bg-[#6e0b14]/5 flex items-center justify-center shrink-0 group-hover:bg-[#6e0b14] transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-[#6e0b14] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#6e0b14]">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#6e0b14] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/shreem-logo.png"
            alt=""
            width={400}
            height={400}
            className="absolute right-[-100px] top-1/2 -translate-y-1/2 h-96 w-96 object-contain opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic text-white">Ready to Source from Bharat?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Connect with us today for a custom quote or to discuss your specific bulk sourcing requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-[#c5a059] text-white hover:bg-[#b59049] min-w-[200px] font-bold border-none">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059]/10 min-w-[200px]">
              <Link href="/request-quote">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
