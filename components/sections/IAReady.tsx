import { Brain, ShoppingCart, GitBranch } from 'lucide-react'
import { iaReadyItems } from '@/lib/content'

const iconMap: Record<string, React.ReactNode> = {
  'catalog': <Brain size={48} strokeWidth={1.5} className="text-[#E2B0B3] block mx-auto group-hover:scale-110 group-hover:text-white transition-all duration-300" />,
  'ecommerce': <ShoppingCart size={48} strokeWidth={1.5} className="text-[#E2B0B3] block mx-auto group-hover:scale-110 group-hover:text-white transition-all duration-300" />,
  'flows': <GitBranch size={48} strokeWidth={1.5} className="text-[#E2B0B3] block mx-auto group-hover:scale-110 group-hover:text-white transition-all duration-300" />,
}

export function IAReady() {
  return (
    <section className="py-24 bg-[#0e0e0e] px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3 text-center">
          IA-READY
        </p>
        <h2 className="text-4xl font-bold text-center text-text-main mb-4">
          Desarrollo compatible con Inteligencia Artificial
        </h2>
        <p className="text-accent/70 text-center mb-16">
          Todos nuestros proyectos están diseñados para integrar IA desde su arquitectura base.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {iaReadyItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#1a1a1a] border border-brand/20 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(111,63,72,0.3)] hover:border-accent"
            >
              <div className="flex justify-center mb-4" aria-hidden="true">
                {iconMap[item.id]}
              </div>
              <h3 className="text-xl font-semibold text-text-main mb-3">{item.title}</h3>
              <p className="text-text-main/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IAReady
