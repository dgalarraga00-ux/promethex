import type { Metadata } from 'next'
import { Inter, Montserrat, Plus_Jakarta_Sans } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
})

// Garet Book substitute — Plus Jakarta Sans (clean, modern, similar feel)
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-garet',
  weight: ['400', '500', '600'],
  display: 'swap',
})

// TODO: set metadataBase to production URL for canonical and OG image resolution
export const metadata: Metadata = {
  title: 'Promethex | Desarrollo de Software de Élite',
  description:
    'Agencia de desarrollo de software especializada en soluciones IA, páginas web ultrarrápidas, apps a medida y automatizaciones inteligentes para empresas.',
  keywords: [
    'Desarrollo de Software de Élite',
    'Soluciones IA',
    'Agencia de software Ecuador',
    'Next.js',
    'Apps a medida',
    'Automatizaciones con IA',
    'Landing page profesional',
    'Promethex',
  ],
  authors: [{ name: 'Promethex' }],
  openGraph: {
    title: 'Promethex | Desarrollo de Software de Élite',
    description:
      'Construimos el software que impulsa tu negocio. Páginas web, apps a medida y automatizaciones con IA.',
    type: 'website',
    locale: 'es_EC',
    siteName: 'Promethex',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promethex | Desarrollo de Software de Élite',
    description:
      'Agencia de desarrollo de software especializada en soluciones IA y automatizaciones inteligentes.',
  },
  robots: {
    index: true,
    follow: true,
  },
  // Note: delete app/favicon.ico to let the PNG icon below take effect
  icons: {
    icon: '/logo-full-white.png',
    shortcut: '/logo-full-white.png',
    apple: '/logo-full-white.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} ${plusJakartaSans.variable} antialiased`}>
      <body>
        <GoogleTagManager gtmId="GTM-N8XCLT4D" />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
