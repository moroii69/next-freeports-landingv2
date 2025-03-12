import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "next-freeports | Modern Port Management Tool",
  description:
    "A modern CLI tool to list and kill processes running on specific ports. No more port conflicts, just smooth development.",
  metadataBase: new URL("https://fp.ufraan.com"),
  openGraph: {
    type: "website",
    title: "next-freeports",
    url: "https://fp.ufraan.com/",
    images: [{ url: "https://i.imgur.com/f2d8SGX.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ufraaaan",
    title: "next-freeports",
    description: "A platform for free ports.",
    images: ["https://i.imgur.com/f2d8SGX.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="freeport" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'