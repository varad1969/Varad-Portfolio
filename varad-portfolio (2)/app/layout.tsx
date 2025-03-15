import type React from "react"
import "@/app/globals.css"
import { Inter, Roboto, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToSection from "@/components/scroll-to-section"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})
const montserrat = Montserrat({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Portfolio - Varad Naik",
  description: "Personal portfolio of Varad Naik - Aspiring Web Developer & Java Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto.variable} ${montserrat.variable} font-roboto`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToSection />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'