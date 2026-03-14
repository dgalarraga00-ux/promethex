import { Facebook, Instagram, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/content'
import BrandMark from '@/components/ui/BrandMark'

// TikTok SVG icon (lucide doesn't include TikTok)
function TikTokIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="px-4 py-16"
      style={{
        backgroundColor: '#121212',
        borderTop: '1px solid rgba(111, 63, 72, 0.3)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <BrandMark size="sm" showSlogan={false} />
            <p className="text-text-main/50 text-sm leading-relaxed max-w-xs">
              Agencia de ingeniería de software desde Ecuador. Construimos arquitecturas digitales diseñadas para crecer.
            </p>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-main font-semibold text-sm uppercase tracking-widest text-accent">
              Contacto
            </h3>
            <a
              href="mailto:info@promethex.net"
              className="flex items-center gap-2 text-text-main/60 hover:text-accent transition-colors text-sm"
            >
              <Mail size={16} strokeWidth={1.5} className="text-[#E2B0B3]" />
              info@promethex.net
            </a>
            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-main/60 hover:text-accent transition-colors text-sm"
            >
              <MapPin size={16} strokeWidth={1.5} className="text-[#E2B0B3]" />
              Quito, Ecuador · Latinoamérica
            </a>
          </div>

          {/* Social column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-main font-semibold text-sm uppercase tracking-widest text-accent">
              Síguenos
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/promethex.tech/"
                aria-label="Facebook de Promethex"
                className="text-text-main/50 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/promethex.tech/"
                aria-label="Instagram de Promethex"
                className="text-text-main/50 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/promethex.tech/"
                aria-label="TikTok de Promethex"
                className="text-text-main/50 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-text-main/30 text-xs"
          style={{ borderTop: '1px solid rgba(111, 63, 72, 0.15)' }}
        >
          <p>© {year} Promethex. Todos los derechos reservados.</p>
          <p>Ingeniería de software · Ecuador · Latinoamérica</p>
        </div>
      </div>
    </footer>
  )
}
