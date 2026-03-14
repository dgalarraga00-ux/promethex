import { portfolioContent, siteConfig } from '@/lib/content'
import { Button } from '@/components/ui/Button'

export function Portfolio() {
  return (
    <section id="portafolio" className="py-24 bg-radial-brand-subtle px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3 text-center">
          CASOS DE ÉXITO
        </p>
        <h2 className="text-4xl font-bold text-center text-text-main mb-4 max-w-3xl mx-auto">
          {portfolioContent.title}
        </h2>
        <p className="text-accent text-center mb-8 text-lg">
          {portfolioContent.subtitle}
        </p>
        <p className="text-text-main/60 text-center max-w-4xl mx-auto leading-relaxed text-base mb-16">
          {portfolioContent.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Cuéntanos tu proyecto →
          </Button>
          <span className="text-accent/60 text-sm">
            Proyectos para toda Latinoamérica
          </span>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
