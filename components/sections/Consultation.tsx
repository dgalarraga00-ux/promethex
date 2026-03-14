import Image from 'next/image'
import { consultationContent } from '@/lib/content'
import Button from '@/components/ui/Button'

export default function Consultation() {
  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: '#1A1617' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column — text */}
        <div className="flex flex-col gap-6">
          <p className="text-accent text-sm font-mono tracking-widest uppercase">
            {consultationContent.label}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-main leading-tight">
            {consultationContent.title}
          </h2>
          <p className="text-xl text-accent font-light">
            {consultationContent.subtitle}
          </p>
          <p className="text-text-main/65 leading-relaxed text-base">
            {consultationContent.body}
          </p>
          <div className="pt-2">
            <Button href={consultationContent.whatsappUrl} variant="primary" target="_blank" rel="noopener noreferrer">
              {consultationContent.cta}
            </Button>
          </div>
        </div>

        {/* Right column — image with blob mask */}
        <div className="relative flex items-center justify-center">
          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: '#6F3F48' }}
          />
          {/* Image container with blob mask */}
          <div className="relative blob-mask w-full max-w-md aspect-square overflow-hidden">
            <Image
              src="/consultoria.jpg"
              alt="Equipo de ingeniería Promethex"
              fill
              className="object-cover"
              style={{
                filter: 'saturate(0.8) sepia(0.15) hue-rotate(320deg) brightness(0.85)',
              }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
