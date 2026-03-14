import { PricingPlan } from '@/lib/content'
import { Button } from '@/components/ui/Button'

interface PricingCardProps {
  plan: PricingPlan
  className?: string
}

export function PricingCard({ plan, className = '' }: PricingCardProps) {
  const outerClasses = plan.highlighted
    ? 'border-accent bg-brand/15 shadow-xl shadow-brand/30 md:scale-105'
    : 'border-brand/20 bg-[#1a1a1a] hover:border-brand/50'

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 ${outerClasses} ${className}`.trim()}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold px-4 py-1 rounded-full">
          Recomendado
        </span>
      )}

      <p className="text-2xl font-bold text-text-main mb-1">{plan.name}</p>
      <p className="text-text-main/60 text-sm mb-6 leading-relaxed">{plan.focus}</p>

      <div className="mb-1">
        <span className="text-5xl font-black text-accent">{plan.price}</span>
        <span className="text-lg text-text-main/50"> USD</span>
      </div>
      <p className="text-text-main/50 text-sm mb-8">Entrega en {plan.deliveryDays} días</p>

      <ul className="flex flex-col gap-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="text-accent text-sm shrink-0">✓</span>
            <span className="text-text-main/75 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button
          variant={plan.highlighted ? 'primary' : 'secondary'}
          href={plan.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full justify-center"
        >
          Empezar ahora →
        </Button>
      </div>
    </div>
  )
}

export default PricingCard
