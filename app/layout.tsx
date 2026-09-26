import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Audiowide, Inter } from 'next/font/google'
import './globals.css'

// Display / brand font — matches STRIKE's "Audiowide" headings
const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

// Body font — closest free fallback to STRIKE's proprietary "Gilroy"
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Strike | DSA & Gen AI Courses by Rohit Negi',
  description:
    'Take control of your future with Strike. Master DSA, System Design & AI with interactive coding environments, live classes, and mentor support.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${audiowide.variable} ${inter.variable} antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
