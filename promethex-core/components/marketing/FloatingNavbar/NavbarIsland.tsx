import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import type { NavbarIslandProps } from './navbar.types';
import { SectionIndicator } from './SectionIndicator';
import { CommandPalette } from './CommandPalette';

export function NavbarIsland({
  scrolled,
  isMenuOpen,
  isCommandOpen,
  activeSection,
  logo,
  onToggleMenu,
  onToggleCommand,
  searchQuery,
  onQueryChange,
  onSearchSubmit,
  onCommandClose,
  reducedMotion,
}: NavbarIslandProps) {
  const d = (base: number) => reducedMotion ? 0 : base;

  const commandPaletteVariants: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: d(0.2), ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      transition: { duration: d(0.15) },
    },
  };

  const navContentVariants: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: d(0.2), ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      transition: { duration: d(0.15) },
    },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        layout="position"
        className="pointer-events-auto max-w-7xl w-full mx-4 mt-6"
      >
        <div
          className="flex items-center justify-between px-6 py-3 rounded-3xl border border-[var(--navbar-border)] bg-[var(--navbar-bg)] backdrop-blur-2xl transition-shadow duration-500"
          style={{ boxShadow: scrolled ? 'var(--navbar-glow)' : 'var(--navbar-glow-idle)' }}
        >
          {/* Logo */}
          <div className="shrink-0">
            {logo}
          </div>

          {/* Content area — toggles between nav and command palette */}
          <AnimatePresence mode="wait">
            {isCommandOpen ? (
              <motion.div
                key="command-palette"
                variants={commandPaletteVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-1 ml-6"
              >
                <CommandPalette
                  searchQuery={searchQuery}
                  onQueryChange={onQueryChange}
                  onSearch={onSearchSubmit}
                  onClose={onCommandClose}
                />
              </motion.div>
            ) : (
              <motion.div
                key="nav-content"
                variants={navContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-1 items-center justify-between ml-6"
              >
                {/* Section indicator */}
                <SectionIndicator
                  activeSection={activeSection}
                  reducedMotion={reducedMotion}
                />

                {/* Icon buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={onToggleCommand}
                    aria-label="Abrir búsqueda"
                    className="text-[var(--navbar-text-muted)] hover:text-[var(--navbar-text)] transition-colors p-1.5"
                  >
                    <Sparkles size={18} />
                  </button>
                  <button
                    onClick={onToggleMenu}
                    aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    className="text-[var(--navbar-text-muted)] hover:text-[var(--navbar-text)] transition-colors p-1.5"
                  >
                    {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
