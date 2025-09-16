import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Unstoppable Hackathon",
  description: "48 hours of innovation, coding, and creativity, building decentralized unstoppable projects",
  keywords:
    "blockchains, cryptocurrencies, tokens, digital assets, decentralization, unstoppability, immutability, code is law, permissionlessness",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "The Unstoppable Hackathon",
    description: "48 hours of innovation, coding, and creativity, building decentralized unstoppable projects",
    url: "https://unstoppable-hackathon.vercel.app",
    siteName: "The Unstoppable Hackathon",
    images: [
      {
        url: "/og-trophy.jpg",
        width: 1200,
        height: 630,
        alt: "The Unstoppable Hackathon - Trophy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Unstoppable Hackathon",
    description: "48 hours of innovation, coding, and creativity, building decentralized unstoppable projects",
    images: ["/og-trophy.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
