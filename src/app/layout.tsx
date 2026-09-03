import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/layout'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'AILab Telkom University',
    template: '%s | AILab Telkom University',
  },
  description: 'Artificial Intelligence Laboratory at Telkom University - Advancing AI research and education through innovative projects, publications, and collaborative learning programs.',
  keywords: [
    'Artificial Intelligence',
    'AI Laboratory',
    'Telkom University',
    'Machine Learning',
    'Research',
    'Education',
    'Innovation',
    'Technology',
  ],
  authors: [{ name: 'AILab Telkom University' }],
  creator: 'AILab Telkom University',
  publisher: 'Telkom University',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ailab.telkomuniversity.ac.id',
    siteName: 'AILab Telkom University',
    title: 'AILab Telkom University',
    description: 'Artificial Intelligence Laboratory at Telkom University - Advancing AI research and education through innovative projects, publications, and collaborative learning programs.',
    images: [
      {
        url: '/images/logos/logo-lg.png',
        width: 1200,
        height: 630,
        alt: 'AILab Telkom University Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AILab Telkom University',
    description: 'Artificial Intelligence Laboratory at Telkom University - Advancing AI research and education.',
    images: ['/images/logos/logo-lg.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/logos/logo-xs.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logos/logo-md.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logos/logo-md.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  metadataBase: new URL('https://ailab.telkomuniversity.ac.id'),
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
