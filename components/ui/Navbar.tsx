'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/lib/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/90 backdrop-blur-md border-b border-brand/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo-nav-bar.svg"
            alt="Promethex"
            width={260}
            height={65}
            priority
            unoptimized
            className="w-24 md:w-32 h-auto object-contain transition-opacity hover:opacity-80"
            style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(226, 176, 179, 0.2))' }}
          />
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#portafolio"
            className="text-text-main/70 hover:text-accent transition-colors text-base font-semibold"
          >
            Portafolio
          </a>
          <a
            href="#planes"
            className="text-text-main/70 hover:text-accent transition-colors text-base font-semibold"
          >
            Planes
          </a>
          <a
            href="#faq"
            className="text-text-main/70 hover:text-accent transition-colors text-base font-semibold"
          >
            FAQ
          </a>
        </div>

        {/* CTA */}
        <a
          href={siteConfig.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-primary text-sm font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Contactar
        </a>

        {/* Mobile: just show CTA */}
        <a
          href={siteConfig.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-accent font-semibold text-sm"
        >
          Contactar
        </a>
      </nav>
    </header>
  )
}
