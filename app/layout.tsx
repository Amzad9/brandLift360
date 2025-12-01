import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from './analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Industrial Safety Products - Fences, Sensors, Locks & More | 3D Product Viewer',
  description: 'Explore our comprehensive range of industrial safety products including fences, sensors, locks, barriers, and surveillance systems. Interactive 3D models available. Trusted by 1000+ facilities worldwide.',
  keywords: 'industrial safety, safety fences, motion sensors, safety locks, industrial barriers, perimeter security, safety products, 3D product viewer',
  openGraph: {
    title: 'Industrial Safety Products - 3D Interactive Showcase',
    description: 'Browse our industrial safety product catalog with interactive 3D models. Fences, sensors, locks, and more.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://yoursite.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}

