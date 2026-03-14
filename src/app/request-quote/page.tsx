"use client"

import { Send, PackageCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

const productCategories = [
  "Fresh Fruits & Vegetables",
  "Spices & Seasonings",
  "Dry Fruits & Nuts",
  "Textiles & Fabrics",
  "Handicrafts & Artisan Goods",
  "Grains & Millets",
  "Packaging Products",
]

export default function RequestQuotePage() {
  return (
    <>
      <PageBreadcrumb />
      <div className="pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Page header */}
          <div className="text-center mb-12 pt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6e0b14]/10 mb-6">
              <PackageCheck className="h-8 w-8 text-[#6e0b14]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6e0b14]">Request a Quote</h1>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-6" />
            <p className="text-slate-600 max-w-xl mx-auto text-lg">Fill in the details below and our team will get back to you with custom pricing and availability.</p>
          </div>

          <Card className="p-8 md:p-10 border-none shadow-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Full Name *</label>
                  <Input placeholder="Your name" className="bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Company Name</label>
                  <Input placeholder="Your company" className="bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Email *</label>
                  <Input type="email" placeholder="you@company.com" className="bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Phone</label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" className="bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1 block">Product Category *</label>
                <Select>
                  <SelectTrigger className="w-full bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent position="popper" align="start">
                    {productCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Quantity / Volume</label>
                  <Input placeholder="e.g. 500 kg, 10 tons" className="bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Destination Country</label>
                  <Input placeholder="e.g. USA, UAE, Germany" className="bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1 block">Additional Details</label>
                <Textarea placeholder="Specific products, packaging preferences, delivery timeline..." rows={5} className="bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]" />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#6e0b14] hover:bg-[#5a0911] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 w-full justify-center text-lg"
              >
                Submit Quote Request <Send className="h-5 w-5" />
              </button>
            </form>
          </Card>
        </div>
      </div>
    </>
  )
}
