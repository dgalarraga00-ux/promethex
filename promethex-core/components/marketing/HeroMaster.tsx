import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RippleButton } from '../ui/ripple-button';
import { PromethexLogo } from '../ui/PromethexLogo';
import { cn } from '../../utils/cn';

export interface HeroMasterProps {
  onPrimary?: () => void;
  onSecondary?: () => void;
  className?: string;
}

export function HeroMaster({ onPrimary, onSecondary, className }: HeroMasterProps) {
  const reducedMotion = useReducedMotion();
  const d = (val: number) => (reducedMotion ? 0 : val);

  return (
    <div className={cn('relative overflow-hidden bg-[var(--promethex-bg)] min-h-screen', className)}>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Radial fade — centro visible, bordes oscuros */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, var(--promethex-bg) 100%)',
        }}
      />

      {/* Ambient glow — orbe rosa top-center */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(226,176,179,0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        {/* Badge — primero */}
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-montserrat font-semibold uppercase tracking-widest"
          style={{
            borderColor: 'rgba(226,176,179,0.4)',
            background: 'rgba(226,176,179,0.08)',
            color: '#E2B0B3',
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.5) }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: '#E2B0B3', boxShadow: '0 0 6px #E2B0B3' }}
          />
          Código · Velocidad · Resultados
        </motion.div>

        {/* Logo gigante — segundo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.7), delay: d(0.1) }}
          className="mb-8"
        >
          <PromethexLogo size="xl" />
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          className="font-montserrat text-white/55 text-lg md:text-xl mt-2 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.6), delay: d(0.2) }}
        >
          Construimos ecosistemas digitales de élite impulsados por{' '}
          <span className="text-white/80 font-medium">Inteligencia Artificial.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-4 mt-10 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d(0.5), delay: d(0.4) }}
        >
          {/* Primary — Rosa con glow */}
          <a
            href="https://wa.me/593989232393?text=Hola,%20me%20gustar%C3%ADa%20iniciar%20un%20proyecto%20de%20%C3%A9lite%20con%20Promethex."
            target="_blank"
            rel="noopener noreferrer"
          >
            <RippleButton
              rippleColor="rgba(255,255,255,0.35)"
              className="relative font-semibold px-9 py-4 rounded-2xl text-base font-montserrat transition-transform duration-200 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #E2B0B3 0%, #c97f84 100%)',
                color: '#1a0808',
                boxShadow: '0 0 24px rgba(226,176,179,0.45), 0 4px 20px rgba(226,176,179,0.25), inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
            >
              Iniciar Proyecto →
            </RippleButton>
          </a>

          {/* Secondary — Blanco perla con glow suave */}
          <RippleButton
            rippleColor="rgba(0,0,0,0.1)"
            className="relative font-semibold px-9 py-4 rounded-2xl text-base font-montserrat transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e8e8f0 100%)',
              color: '#0a0a14',
              boxShadow: '0 0 24px rgba(255,255,255,0.2), 0 4px 20px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.9)',
            }}
            onClick={onSecondary}
          >
            Ver Ecosistema →
          </RippleButton>
        </motion.div>

        {/* Social proof */}
        <motion.p
          className="mt-8 text-xs font-montserrat text-white/30 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: d(0.5), delay: d(0.8) }}
        >
          Arquitectura de élite · Entrega acelerada · Resultados medibles
        </motion.p>
      </div>
    </div>
  );
}
