import { ShieldCheck, Truck, Zap, Globe, Users, Award } from "lucide-react"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"
import GlobalReachMap from "@/components/home/GlobalReachMap"

export default function AboutPage() {
  return (
    <>
      <PageBreadcrumb />
      <div className="pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Page header */}
          <div className="text-center mb-16 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6e0b14]">About Shreem Exports</h1>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">A legacy of quality, trust, and global excellence in Indian exports.</p>
          </div>

          {/* Company story */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-2xl">
              <GlobalReachMap />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-[#6e0b14] italic">&ldquo;The Best of Bharat to the World&rdquo;</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Based in Hyderabad, Shreem Exports Private Limited is a specialized Indian export house. We pride ourselves on sourcing top-tier goods across multiple categories to ensure our global partners receive only the finest quality.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div className="space-y-1 border-l-4 border-[#c5a059] pl-4">
                  <div className="text-3xl font-bold text-[#6e0b14]">7+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Categories</div>
                </div>
                <div className="space-y-1 border-l-4 border-[#c5a059] pl-4">
                  <div className="text-3xl font-bold text-[#6e0b14]">Global</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Logistics</div>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our mission is simple: bridging the gap between small-scale Indian producers and international markets while maintaining stringent quality control standards.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#6e0b14] mb-4">Why Work With Us</h2>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto" />
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
      </div>
    </>
  )
}
