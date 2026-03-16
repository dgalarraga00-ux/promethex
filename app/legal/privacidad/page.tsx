'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { RippleButton } from '../../../promethex-core/components/ui/ripple-button';

export default function PrivacidadPage() {
  const router = useRouter();

  return (
    <>
      <style>{`body > header { display: none !important; }`}</style>
      <main className="min-h-screen bg-[#121212] text-gray-300">
        <div className="max-w-3xl mx-auto px-6 py-24">

          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4">
            Política de Privacidad
          </h1>
          <p className="text-sm font-montserrat mb-16 text-gray-500">
            Última actualización: {new Date().toLocaleDateString('es-EC', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="flex flex-col gap-10 text-sm leading-relaxed">

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">1. Responsable del Tratamiento</h2>
              <p>Promethex es responsable del tratamiento de los datos personales que usted nos proporciona a través de este sitio web, formularios de contacto y comunicaciones directas. Contacto:{' '}
                <a href="mailto:info@promethex.net" className="underline underline-offset-2 text-[var(--promethex-accent)] hover:text-white transition-colors">info@promethex.net</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">2. Datos que Recopilamos</h2>
              <p>Recopilamos los datos que usted nos proporciona voluntariamente, incluyendo: nombre completo, dirección de correo electrónico, número de teléfono/WhatsApp, nombre de empresa, y el contenido de su mensaje o consulta. También recopilamos datos de uso del sitio web mediante Google Analytics y Google Tag Manager (datos anonimizados).</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">3. Finalidad del Tratamiento</h2>
              <p>Utilizamos sus datos para: responder sus consultas y solicitudes de cotización, gestionar la relación comercial con clientes activos, enviar comunicaciones sobre nuestros servicios (solo si usted lo solicita), y mejorar la experiencia de usuario en nuestro sitio web mediante análisis estadístico anónimo.</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">4. Cookies</h2>
              <p>Este sitio utiliza cookies técnicas necesarias para su funcionamiento, cookies de análisis (Google Analytics) para entender el comportamiento de los usuarios de forma anónima, y cookies de preferencia para recordar sus elecciones (como la aceptación de esta política). Puede desactivar las cookies desde la configuración de su navegador.</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">5. Conservación de Datos</h2>
              <p>Conservamos sus datos personales durante el tiempo necesario para cumplir con la finalidad para la que fueron recopilados, y en todo caso mientras exista una relación comercial activa. Los datos de usuarios que no se conviertan en clientes serán eliminados en un plazo máximo de 12 meses desde el último contacto.</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">6. Sus Derechos</h2>
              <p>Usted tiene derecho a acceder, rectificar, suprimir, limitar el tratamiento y oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, envíe una solicitud a{' '}
                <a href="mailto:info@promethex.net" className="underline underline-offset-2 text-[var(--promethex-accent)] hover:text-white transition-colors">info@promethex.net</a>{' '}
                indicando claramente su solicitud.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">7. Seguridad</h2>
              <p>Adoptamos medidas técnicas y organizativas razonables para proteger sus datos contra acceso no autorizado, pérdida o divulgación. Sin embargo, ningún sistema de transmisión de datos por internet es completamente seguro. Notificaremos cualquier brecha de seguridad que pueda afectarle en los plazos establecidos por la normativa aplicable.</p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">8. Transferencia a Terceros</h2>
              <p>No vendemos ni cedemos sus datos personales a terceros. Podemos compartir datos con proveedores de servicios tecnológicos (como Google Analytics, servicios de hosting) bajo contratos que garantizan el mismo nivel de protección. Todos los proveedores cumplen con la normativa aplicable de protección de datos.</p>
              <p className="mt-3 p-4 rounded-xl border border-white/10 bg-white/5 text-gray-300">
                <strong className="text-white">Nota sobre Inteligencia Artificial:</strong> Las interacciones realizadas a través de nuestro Asistente de IA se procesan de forma cifrada mediante la API de OpenAI. Promethex garantiza que estos datos se utilizan únicamente para responder a su consulta actual y NO se utilizan para el entrenamiento de modelos públicos de inteligencia artificial de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-montserrat font-bold text-white mb-3">9. Cambios en esta Política</h2>
              <p>Nos reservamos el derecho de actualizar esta Política de Privacidad. Le notificaremos los cambios sustanciales a través del sitio web. La fecha de última actualización al inicio de este documento siempre reflejará la versión vigente.</p>
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
