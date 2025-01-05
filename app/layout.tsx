import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JDTBuchan Portfolio',
  description: 'Showcasing my journey, projects, and adventures in software development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <div className="container mx-auto px-4 py-8 flex-grow">
          <Breadcrumb />
          <main>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
