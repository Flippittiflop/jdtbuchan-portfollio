import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://jdtbuchan.com'),
    title: {
        default: 'Jonathan Buchan - Solutions Architect & Integration Specialist',
        template: '%s | Jonathan Buchan'
    },
    description: 'Expert solutions architect and integration specialist offering enterprise integration, cloud solutions, and web development services. Transform your business with custom technical solutions.',
    keywords: ['solutions architect', 'integration specialist', 'cloud solutions', 'web development', 'enterprise integration', 'technical consultant', 'freelance developer'],
    authors: [{ name: 'Jonathan Buchan' }],
    creator: 'Jonathan Buchan',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://jdtbuchan.com',
        title: 'Jonathan Buchan - Solutions Architect & Integration Specialist',
        description: 'Expert solutions architect and integration specialist offering enterprise integration, cloud solutions, and web development services.',
        siteName: 'Jonathan Buchan Portfolio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Jonathan Buchan - Solutions Architect'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jonathan Buchan - Solutions Architect & Integration Specialist',
        description: 'Expert solutions architect and integration specialist offering enterprise integration, cloud solutions, and web development services.',
        images: ['/og-image.jpg']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code', // Add your Google verification code
    }
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
            <link rel="canonical" href="https://jdtbuchan.com"/>
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
