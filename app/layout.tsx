import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jonathan Buchan Portfolio',
  description: 'Showcasing my journey, projects, and adventures in software development',
  icons: {
    icon: "/favicon-32x32.png",
    apple: [
      { sizes: "57x57", url: "/apple-icon-57x57.png" },
      { sizes: "60x60", url: "/apple-icon-60x60.png" },
      { sizes: "72x72", url: "/apple-icon-72x72.png" },
      { sizes: "76x76", url: "/apple-icon-76x76.png" },
      { sizes: "114x114", url: "/apple-icon-114x114.png" },
      { sizes: "120x120", url: "/apple-icon-120x120.png" },
      { sizes: "144x144", url: "/apple-icon-144x144.png" },
      { sizes: "152x152", url: "/apple-icon-152x152.png" },
      { sizes: "180x180", url: "/apple-icon-180x180.png" },
    ],
    other: [
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/android-icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", url: "/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      { rel: "manifest", url: "/manifest.json" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className="h-full">
      <head>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
      <Navbar/>
      <div className="container mx-auto px-4 py-4 flex-grow">
        <Breadcrumb/>
        <main>
          {children}
        </main>
      </div>
      <Footer/>
      </body>
      </html>
  )
}
