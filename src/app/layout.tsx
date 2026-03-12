import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import LoadingScreen from "@/components/shared/LoadingScreen"
import { TooltipProvider } from "@/components/ui/tooltip"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Shreem Exports | Premium Indian Exports Worldwide",
    template: "%s | Shreem Exports",
  },
  description:
    "Shreem Exports Private Limited - High-quality Indian exports including Fruits & Vegetables, Spices, Namkeen, Garments, and more. Exporting from Hyderabad, India.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.className} antialiased bg-white text-slate-900 overflow-x-hidden`}
      >
        <TooltipProvider>
          <LoadingScreen />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </TooltipProvider>
      </body>
    </html>
  )
}
