import { Monitor, TrendingUp, Mail, Wrench } from 'lucide-react'
import { servicesGridContent, serviceGridItems } from '@/lib/content'

const iconMap: Record<string, React.ReactNode> = {
  'web-design': <Monitor size={48} strokeWidth={1.5} className="text-[#E2B0B3] block mx-auto group-hover:scale-110 group-hover:text-white transition-all duration-300" />,
  'seo': <TrendingUp size={48} strokeWidth={1.5} className="text-[#E2B0B3] block mx-auto group-hover:scale-110 group-hover:text-white transition-all duration-300" />,
  'email': <Mail size={48} strokeWidth={1.5} className="text-[#E2B0B3] block mx-auto group-hover:scale-110 group-hover:text-white transition-all duration-300" />,
  'maintenance': <Wrench size={48} strokeWidth={1.5} className="text-[#E2B0B3] block mx-auto group-hover:scale-110 group-hover:text-white transition-all duration-300" />,
}

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#0e0e0e] px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3 text-center">
          SERVICIOS
        </p>
        <h2 className="text-4xl font-bold text-center text-text-main mb-6 max-w-3xl mx-auto leading-tight">
          {servicesGridContent.title}
        </h2>
        <p className="text-text-main/60 text-center max-w-3xl mx-auto leading-relaxed mb-16">
          {servicesGridContent.intro}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceGridItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#1a1a1a] border border-brand/30 rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(111,63,72,0.3)]"
            >
              {iconMap[item.id]}
              <h3 className="text-lg font-semibold text-text-main group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-text-main/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
