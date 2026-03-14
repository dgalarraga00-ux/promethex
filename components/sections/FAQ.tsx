import { faqItems } from '@/lib/content'
import AccordionItem from '@/components/ui/AccordionItem'

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-primary px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3 text-center">
          PREGUNTAS FRECUENTES
        </p>
        <h2 className="text-4xl font-bold text-center text-text-main mb-4">
          Todo lo que necesitas saber
        </h2>
        <p className="text-text-main/50 text-center mb-16">
          Resolvemos tus dudas antes de que las tengas.
        </p>
        <div className="flex flex-col gap-3">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
