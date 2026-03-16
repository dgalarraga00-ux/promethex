import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BrainCircuit,
  Globe,
  MousePointerClick,
  TrendingUp,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface CardDef {
  id: string;
  colSpan: string;
  icon: LucideIcon;
  accentColor: string;
  title: string;
  description: string;
  pattern: boolean;
}

const CARDS: CardDef[] = [
  {
    id: 'custom-dev',
    colSpan: 'md:col-span-2',
    icon: BrainCircuit,
    accentColor: 'var(--promethex-cta)',
    title: 'Desarrollo a Medida & IA',
    description:
      'Construimos soluciones complejas: SaaS, Apps de Delivery, Dashboards e Integraciones de Inteligencia Artificial.',
    pattern: true,
  },
  {
    id: 'ecosystems',
    colSpan: '',
    icon: Globe,
    accentColor: 'var(--promethex-accent)',
    title: 'Ecosistemas Interactivos',
    description:
      'Plataformas multipágina con lógica de negocio, módulos de reservas y cotizadores.',
    pattern: false,
  },
  {
    id: 'ux',
    colSpan: '',
    icon: MousePointerClick,
    accentColor: 'var(--promethex-cta)',
    title: 'UX de Alta Retención',
    description:
      'Mapas de calor, análisis de usuario y diseño 100% personalizado.',
    pattern: false,
  },
  {
    id: 'seo',
    colSpan: '',
    icon: TrendingUp,
    accentColor: 'var(--promethex-accent)',
    title: 'Optimización SEO 360°',
    description:
      'Posicionamiento orgánico y Google Analytics integrado.',
    pattern: false,
  },
  {
    id: 'presence',
    colSpan: '',
    icon: Zap,
    accentColor: 'var(--promethex-cta)',
    title: 'Arquitectura de Presencia',
    description:
      'Landing pages de alta conversión con carga ultrarrápida y certificados SSL.',
    pattern: false,
  },
];

export interface BentoServicesProps {
  className?: string;
}

export function BentoServices({ className }: BentoServicesProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className={cn('bg-[var(--promethex-bg)]', className)}>
      <div className="max-w-7xl mx-auto py-24 px-4">

        {/* Header */}
        <div className="text-center">
          <h2 className="font-montserrat font-bold text-white text-3xl md:text-4xl lg:text-5xl">
            Ecosistemas Digitales de Alto Rendimiento
          </h2>
          <p
            className="mt-4 text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(240, 240, 248, 0.55)' }}
          >
            Desde presencia web ultrarrápida hasta software a medida con IA.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 mt-12">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                className={cn(
                  'relative overflow-hidden rounded-3xl flex flex-col justify-end p-6 backdrop-blur-sm',
                  card.colSpan,
                )}
                style={{
                  background: 'var(--bento-card)',
                  border: '1px solid rgba(255, 255, 255, 0.10)',
                }}
                whileHover={
                  reducedMotion
                    ? undefined
                    : { scale: 1.02, borderColor: card.accentColor }
                }
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                {/* Pattern overlay — card 1 only */}
                {card.pattern && (
                  <>
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0,
                        backgroundImage:
                          'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1,
                        background:
                          'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4) 100%)',
                      }}
                    />
                  </>
                )}

                {/* Content */}
                <div
                  className="relative flex flex-col h-full"
                  style={{ zIndex: card.pattern ? 2 : undefined }}
                >
                  <Icon
                    size={28}
                    style={{ color: card.accentColor }}
                    className="mb-auto"
                  />
                  <h3 className="font-montserrat font-bold text-white text-lg">
                    {card.title}
                  </h3>
                  <p
                    className="text-sm mt-2 leading-relaxed"
                    style={{ color: 'rgba(240, 240, 248, 0.55)' }}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
