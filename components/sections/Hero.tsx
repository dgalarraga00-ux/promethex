'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/content'
import { Button } from '@/components/ui/Button'
import BrandMark from '@/components/ui/BrandMark'

const videos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
]

export function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  function handleEnded() {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <video
        key={currentVideoIndex}
        autoPlay
        muted
        playsInline
        loop={false}
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 items-center justify-center min-h-screen text-center px-4">
        <BrandMark size="xl" showSlogan={true} />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-main/80 mb-4 leading-tight mt-2">
          {siteConfig.tagline}
        </h1>
        <p className="text-lg text-text-main/80 mb-10 max-w-2xl mx-auto">
          Construimos el software que impulsa tu negocio al siguiente nivel.
        </p>
        <Button
          variant="primary"
          href={siteConfig.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablemos por WhatsApp
        </Button>
      </div>
    </section>
  )
}

export default Hero
