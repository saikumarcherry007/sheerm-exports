"use client"

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

export default function ContactPage() {
  return (
    <>
      <PageBreadcrumb />
      <div className="pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Page header */}
          <div className="text-center mb-16 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6e0b14]">Contact Us</h1>
            <div className="w-20 h-1 bg-[#c5a059] mx-auto mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We&apos;d love to hear from you. Drop us a message or reach out through any of the channels below.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info cards */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: MapPin, label: "Address", value: "Hyderabad, Telangana, India" },
                { icon: Mail, label: "Email", value: "info@shreemexports.com" },
                { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
                { icon: Clock, label: "Working Hours", value: "Mon – Sat, 9 AM – 6 PM IST" },
              ].map((item, i) => (
                <Card key={i} className="p-5 flex items-start gap-4 border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#fef9f0]">
                  <div className="h-12 w-12 rounded-xl bg-[#6e0b14] flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{item.label}</p>
                    <p className="font-semibold text-slate-800">{item.value}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Contact form */}
            <Card className="lg:col-span-3 p-8 border-none shadow-xl">
              <h2 className="text-2xl font-bold text-[#6e0b14] mb-6">Send a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Full Name</label>
                    <Input placeholder="Your name" className="bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Email</label>
                    <Input type="email" placeholder="Your email" className="bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Subject</label>
                  <Input placeholder="What is this about?" className="bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Message</label>
                  <Textarea placeholder="Tell us more..." rows={5} className="bg-[#fef9f0] border-slate-200 focus:border-[#c5a059] focus:ring-[#c5a059]" />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#6e0b14] hover:bg-[#5a0911] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 w-full sm:w-auto justify-center"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            </Card>
          </div>

          {/* Map embed placeholder */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-lg h-[400px] bg-[#fef9f0] flex items-center justify-center">
            <div className="text-center text-slate-400">
              <MapPin className="h-12 w-12 mx-auto mb-3 text-[#c5a059]" />
              <p className="text-lg font-semibold text-slate-500">Google Maps Embed</p>
              <p className="text-sm">Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
