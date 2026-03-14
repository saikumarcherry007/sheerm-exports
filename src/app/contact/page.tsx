"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Lato } from "next/font/google"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import PageBreadcrumb from "@/components/shared/PageBreadcrumb"

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("sent")

    window.setTimeout(() => {
      setStatus("idle")
    }, 4200)
  }

  const contactItems = [
    { icon: MapPin, label: "Address", value: "6-10-62, Vinayak Nagar, HAL, Hyderabad, Telangana - 500042" },
    { icon: Mail, label: "Email", value: "info@shreemexports.com" },
    { icon: Phone, label: "Phone", value: "+91 90107 10914 | +91 94946 62503" },
    { icon: Clock, label: "Working Hours", value: "Mon – Sat, 9 AM – 6 PM IST" },
  ]

  return (
    <>
      <PageBreadcrumb />

      <div className="min-h-screen bg-gradient-to-br from-[#2a0508] via-[#4a1018] to-black text-white">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute -top-32 -left-56 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#c5a059] via-[#6e0b14] to-transparent opacity-40 animate-blob" />
          <div className="pointer-events-none absolute -bottom-40 -right-52 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#c5a059] via-[#6e0b14] to-transparent opacity-30 animate-blob animation-delay-2000" />

          <div className="container mx-auto px-4 pt-16 pb-24">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">Get in Touch</h1>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#c5a059]" />
              <p className="mt-6 text-slate-200/90 text-lg md:text-xl leading-relaxed">
                Need a quote, have a question, or want to explore a partnership? Send us a message and we&apos;ll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <section className="h-full">
              <Card className="relative h-full overflow-hidden border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
                <div className="pointer-events-none absolute -top-14 -right-20 h-72 w-72 rounded-full bg-[#c5a059]/20 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-[#6e0b14]/20 blur-2xl" />

                <div className="relative p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Send us a message</h2>
                  <p className="mt-2 text-slate-200/80">We&apos;ll get back to you promptly with the information you need.</p>

                  <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <label className="space-y-2">
                        <span className="text-sm font-medium text-slate-200/90">Full Name</span>
                        <Input
                          placeholder="Your name"
                          className="bg-white/10 border-white/20 focus:border-[#c5a059] focus:ring-[#c5a059] text-white placeholder:text-slate-200/60"
                        />
                      </label>
                      <label className="space-y-2">
                        <span className="text-sm font-medium text-slate-200/90">Email</span>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          className="bg-white/10 border-white/20 focus:border-[#c5a059] focus:ring-[#c5a059] text-white placeholder:text-slate-200/60"
                        />
                      </label>
                    </div>

                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-200/90">Subject</span>
                      <Input
                        placeholder="How can we help?"
                        className="bg-white/10 border-white/20 focus:border-[#c5a059] focus:ring-[#c5a059] text-white placeholder:text-slate-200/60"
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-200/90">Message</span>
                      <Textarea
                        placeholder="Tell us what you need..."
                        rows={5}
                        className="bg-white/10 border-white/20 focus:border-[#c5a059] focus:ring-[#c5a059] text-white placeholder:text-slate-200/60"
                      />
                    </label>

                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#6e0b14] px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#7f0d1b] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/60 md:w-auto mt-6"
                    >
                      {status === "sent" ? "Message Sent" : "Send Message"}
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    {status === "sent" && (
                      <p className="mt-3 text-sm text-slate-200/80">Thanks! We&apos;ve received your message and will respond as soon as possible.</p>
                    )}
                  </form>
                </div>
              </Card>
            </section>

            <aside className="h-full">
              <Card className="relative h-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
                <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#c5a059]/10 blur-2xl" />
                <div className="p-6 space-y-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-200/80">Contact info</p>
                    <div className="mt-4 space-y-4">
                      {contactItems.map((item, index) => (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="mt-1 h-10 w-10 rounded-2xl bg-[#6e0b14] flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-200/70">{item.label}</p>
                            <p
                            className={`mt-1 text-base font-semibold text-white ${
                              (item.label === "Address" || item.label === "Phone") && lato.className
                            }`}
                          >
                            {item.value}
                          </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-200/80">Location</p>
                    <div className="mt-4 h-44 w-full overflow-hidden rounded-2xl border border-white/10">
                      <iframe
                      className="h-full w-full"
                      title="Shreem Exports Location"
                      loading="lazy"
                      src="https://maps.google.com/maps?q=6-10-62%2C%20Vinayak%20Nagar%2C%20HAL%2C%20Hyderabad%2C%20Telangana%20500042&z=17&output=embed"
                    />
                    </div>
                    <p className="mt-3 text-sm text-slate-200/80">Visit our office during business hours or reach out via email / phone.</p>
                  </div>
                </div>
              </Card>
            </aside>
          </div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(20px, -10px) scale(1.08); }
            66% { transform: translate(-10px, 15px) scale(0.98); }
          }

          .animate-blob {
            animation: blob 12s ease-in-out infinite;
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-up {
            opacity: 0;
            animation: fadeUp 0.9s ease-out forwards;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </div>
    </>
  )
}
