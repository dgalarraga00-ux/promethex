import { pricingPlans, customSoftware, siteConfig } from '@/lib/content'
import { PricingCard } from '@/components/ui/PricingCard'
import { Button } from '@/components/ui/Button'

export function Pricing() {
  return (
    <section id="planes" className="py-24 bg-radial-brand-subtle px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3 text-center">
          PLANES Y PRECIOS
        </p>
        <h2 className="text-4xl font-bold text-center text-text-main mb-4">
          Inversión que genera retorno
        </h2>
        <p className="text-text-main/50 text-center mb-16 max-w-2xl mx-auto">
          Elige el plan que se adapta al tamaño y ambición de tu negocio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Custom Software Card */}
        <div className="max-w-xl mx-auto mt-8 border border-dashed border-accent/40 rounded-2xl p-8 text-center bg-brand/5 hover:border-accent transition-colors">
          <h3 className="text-2xl font-bold text-text-main mb-3">{customSoftware.title}</h3>
          <p className="text-text-main/60 mb-6 leading-relaxed">{customSoftware.description}</p>
          <Button
            variant="secondary"
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {customSoftware.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
