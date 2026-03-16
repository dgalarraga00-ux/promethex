import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X } from 'lucide-react';
import type { OverlayMenuProps } from './navbar.types';

export function OverlayMenu({
  isOpen,
  links,
  ctaLink,
  onNavigate,
  onClose,
  reducedMotion,
}: OverlayMenuProps) {
  const d = (base: number) => reducedMotion ? 0 : base;

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: d(0.2), when: 'afterChildren', staggerChildren: reducedMotion ? 0 : 0.03, staggerDirection: -1 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: d(0.35),
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: reducedMotion ? 0 : 0.06,
        delayChildren: reducedMotion ? 0 : 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: d(0.2), ease: 'easeIn' },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: d(0.3), ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      x: -8,
      transition: { duration: d(0.15) },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay-menu"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[200] flex flex-col justify-center px-10 md:px-20"
          style={{ backgroundColor: '#0a0a14' }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Cerrar menú"
            className="absolute top-8 right-8 text-[var(--navbar-text-muted)] hover:text-[var(--navbar-text)] transition-colors"
          >
            <X size={28} />
          </button>

          {/* Navigation links */}
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <motion.div key={link.path} variants={itemVariants}>
                <button
                  onClick={() => { onNavigate(link.path); onClose(); }}
                  className="relative group font-montserrat font-semibold text-white/80 hover:text-white text-2xl md:text-3xl transition-colors duration-200 py-2 text-left"
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full"
                    style={{ background: 'var(--promethex-cta)' }}
                  />
                </button>
              </motion.div>
            ))}

            {/* CTA link */}
            {ctaLink && (
              <motion.div variants={itemVariants} className="mt-4">
                <button
                  onClick={() => { onNavigate(ctaLink.path); onClose(); }}
                  className="font-montserrat text-lg font-semibold
                             bg-[var(--navbar-contact-bg)] text-[var(--navbar-contact-text)]
                             rounded-xl px-8 py-3 transition-opacity hover:opacity-90"
                >
                  {ctaLink.label}
                </button>
              </motion.div>
            )}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
