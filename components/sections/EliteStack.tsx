import { stackItems } from '@/lib/content'

export function EliteStack() {
  return (
    <section className="py-16 bg-[#0e0e0e] px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3 text-center">
          NUESTRO STACK TECNOLÓGICO
        </p>
        <h2 className="text-3xl font-bold text-center text-text-main mb-2">
          Herramientas de clase mundial
        </h2>
        <p className="text-text-main/50 text-center mb-12 text-sm">
          El mismo stack que usan las empresas líderes del mundo
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {stackItems.map((item) => (
            <span
              key={item.name}
              title={item.description}
              className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-brand/30 rounded-full px-6 py-3 text-text-main font-medium text-sm hover:border-accent hover:text-accent transition-colors"
            >
              {item.badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EliteStack
