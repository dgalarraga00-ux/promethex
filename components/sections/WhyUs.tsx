import { Layers, Zap, BarChart2 } from 'lucide-react'
import { whyUsItems } from '@/lib/content'

const iconMap: Record<string, React.ReactNode> = {
  'custom': <Layers size={48} strokeWidth={1.5} className="text-[#E2B0B3] block mx-auto group-hover:scale-110 group-hover:text-white transition-all duration-300" />,
  'tech': <Zap size={48} strokeWidth={1.5} className="text-[#E2B0B3] block mx-auto group-hover:scale-110 group-hover:text-white transition-all duration-300" />,
  'results': <BarChart2 size={48} strokeWidth={1.5} className="text-[#E2B0B3] block mx-auto group-hover:scale-110 group-hover:text-white transition-all duration-300" />,
}

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-primary px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3 text-center">
          ¿POR QUÉ ELEGIRNOS?
        </p>
        <h2 className="text-4xl font-bold text-center text-text-main mb-4">
          Arquitectura de élite, resultados reales
        </h2>
        <p className="text-text-main/50 text-center mb-16">
          No vendemos plantillas. Construimos sistemas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUsItems.map((item) => (
            <div
              key={item.id}
              className="group text-center bg-[#1a1a1a] rounded-xl p-8 border border-brand/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(111,63,72,0.3)] hover:border-brand"
            >
              <div className="flex justify-center mb-4" aria-hidden="true">
                {iconMap[item.id]}
              </div>
              <h3 className="text-xl font-semibold text-text-main mb-2">{item.title}</h3>
              <p className="text-text-main/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
