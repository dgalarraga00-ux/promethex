import { siteConfig } from '@/lib/content';
import { Button } from '@/components/ui/Button';

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-text-main mb-4">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>
        <p className="text-accent/80 text-xl mb-12">
          Agenda una consulta gratuita y cuéntanos tu proyecto.
        </p>
        <Button
          variant="primary"
          href={siteConfig.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          Contactar por WhatsApp
        </Button>
        <p className="text-text-main/40 text-sm mt-4">
          Respuesta en menos de 24 horas
        </p>
      </div>
    </section>
  );
}

export default Contact;
