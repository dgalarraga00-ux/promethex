'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { RippleButton } from '../../../promethex-core/components/ui/ripple-button';

export default function TerminosPage() {
  const router = useRouter();

  return (
    <>
      <style>{`body > header { display: none !important; }`}</style>
      <main className="min-h-screen bg-[#121212] text-gray-300">
        <div className="max-w-3xl mx-auto px-6 py-24">

          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-sm font-montserrat mb-16 text-gray-500">
            Última actualización: {new Date().toLocaleDateString('es-EC', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="flex flex-col gap-10 text-sm leading-relaxed">

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">1. Aceptación de los Términos</h2>
              <p>{'Al contratar los servicios de Promethex ("la Agencia", "nosotros"), usted ("el Cliente") acepta quedar vinculado por los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestros servicios.'}</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">2. Descripción de los Servicios</h2>
              <p>Promethex ofrece servicios de desarrollo web, diseño UX/UI, optimización SEO, integración de Inteligencia Artificial y creación de ecosistemas digitales. Los alcances específicos de cada proyecto se detallarán en una propuesta o contrato individual previo al inicio del trabajo.</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">3. Proceso de Pago</h2>
              <p>Los servicios se facturan según los planes publicados o según cotización personalizada. El pago se realiza en su totalidad antes del inicio del proyecto, salvo acuerdo escrito en contrario. Los precios están expresados en dólares estadounidenses (USD) e incluyen los entregables descritos en cada plan.</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">4. Propiedad Intelectual</h2>
              <p>Una vez realizado el pago completo, el Cliente recibe los derechos de uso sobre el producto final entregado. Promethex retiene el derecho a mostrar el trabajo realizado en su portafolio, salvo solicitud expresa de confidencialidad por parte del Cliente.</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">5. Plazos de Entrega</h2>
              <p>Los plazos indicados en cada plan son estimados y comienzan a contar desde la recepción del pago y de todos los materiales necesarios por parte del Cliente (textos, imágenes, accesos, etc.). Retrasos en la entrega de materiales por parte del Cliente pueden extender los plazos sin responsabilidad de Promethex.</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">6. Revisiones y Cambios</h2>
              <p>Cada plan incluye un número limitado de rondas de revisión según se especifique en la propuesta. Los cambios que excedan el alcance original del proyecto serán cotizados de forma adicional.</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">7. Limitación de Responsabilidad</h2>
              <p>Promethex no será responsable por daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso de los productos entregados. Nuestra responsabilidad total no excederá el monto pagado por el servicio en cuestión.</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">8. Modificaciones</h2>
              <p>Promethex se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor al ser publicadas en este sitio. El uso continuado de nuestros servicios constituye la aceptación de los nuevos términos.</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">9. Contacto</h2>
              <p>Para consultas relacionadas con estos términos, escríbenos a{' '}
                <a href="mailto:info@promethex.net" className="underline underline-offset-2 text-[var(--promethex-accent)] hover:text-white transition-colors">info@promethex.net</a>{' '}
                o a través de WhatsApp al{' '}
                <a href="https://wa.me/593989232393" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-[var(--promethex-accent)] hover:text-white transition-colors">+593 98 923 2393</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">10. Aceptación de Entregables</h2>
              <p>Una vez notificada la entrega final del proyecto, el Cliente dispone de un plazo de 7 días hábiles para comunicar por escrito cualquier defecto o discrepancia con el alcance acordado. Transcurrido este plazo sin comunicación, el proyecto se considerará aceptado y cualquier modificación posterior será cotizada como un nuevo requerimiento.</p>
            </section>

          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <RippleButton
              rippleColor="rgba(255,255,255,0.2)"
              onClick={() => router.push('/elite-demo')}
              className="px-8 py-3 rounded-xl font-montserrat font-semibold text-sm"
              style={{
                background: 'var(--promethex-cta)',
                color: '#1a0a0b',
                boxShadow: '0 4px 16px rgba(226,176,179,0.25)',
              }}
            >
              ← Volver al Inicio
            </RippleButton>
          </div>

        </div>
      </main>
    </>
  );
}
