import { motion, AnimatePresence, type Variants } from 'framer-motion';
import type { SectionIndicatorProps } from './navbar.types';

export function SectionIndicator({ activeSection, reducedMotion }: SectionIndicatorProps) {
  const d = (base: number) => reducedMotion ? 0 : base;

  const variants: Variants = {
    enter: { x: 12, opacity: 0 },
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: d(0.25), ease: 'easeOut' },
    },
    exit: {
      x: -12,
      opacity: 0,
      transition: { duration: d(0.15) },
    },
  };

  return (
    <div className="flex items-center gap-1 font-montserrat text-sm">
      <span className="font-montserrat font-semibold text-white text-sm">Promethex</span>
      <span style={{ color: 'rgba(240,240,248,0.35)' }} className="mx-1.5 text-sm">/</span>
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.span
            key={activeSection}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="font-montserrat text-sm"
            style={{ color: 'rgba(240,240,248,0.55)' }}
          >
            {activeSection}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
