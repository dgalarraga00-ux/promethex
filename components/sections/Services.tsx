import { services } from '@/lib/content';
import { ServiceCard } from '@/components/ui/ServiceCard';

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-radial-brand">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-text-main mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-accent text-center mb-16">
          Soluciones tecnológicas diseñadas para escalar
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
