import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seven Dates',
  description: "We offer convenience, quality, and flexibility.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sevendates.com',
    siteName: 'Seven Dates',
  },
  icons: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      url: '/favicon.ico',
    },
    
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
