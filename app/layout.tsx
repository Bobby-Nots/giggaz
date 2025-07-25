import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Giggaz - Turn Your Free Time into Cash",
  description: "Make quick and easy money through micro-gigs and freelance tasks. Join thousands earning with video gigs, gig chains, and instant payments.",
  generator: 'v0.dev',
  keywords: ["gigs", "freelance", "earn money", "side hustle", "remote work", "quick pay"],
  authors: [{ name: "Giggaz Team" }],
  creator: "Giggaz",
  openGraph: {
    title: "Giggaz - Turn Your Free Time into Cash",
    description: "Join thousands earning money through video gigs and freelance tasks",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
