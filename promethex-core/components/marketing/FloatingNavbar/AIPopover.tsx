'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AIPopoverProps {
  isOpen: boolean;
  isLoading: boolean;
  answer: string | null;
  action: { label: string; href: string } | null;
  error: string | null;
  onClose: () => void;
  onActionClick: (href: string) => void;
}

export function AIPopover({
  isOpen,
  isLoading,
  answer,
  action,
  error,
  onClose,
  onActionClick,
}: AIPopoverProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.97 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute top-full left-0 right-0 mt-2 z-[300] mx-4"
        >
          <div
            className="rounded-2xl p-4 backdrop-blur-xl"
            style={{
              background: 'rgba(12, 12, 24, 0.92)',
              border: '1px solid rgba(226, 232, 240, 0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(226,232,240,0.08)',
            }}
          >
            {/* Loading state */}
            {isLoading && (
              <div className="flex items-center gap-3 py-1">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="inline-block w-2 h-2 rounded-full"
                      style={{
                        background: 'var(--promethex-cta)',
                        animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
                <span
                  className="text-xs font-montserrat"
                  style={{ color: 'rgba(240,240,248,0.45)' }}
                >
                  Consultando a la IA...
                </span>
              </div>
            )}

            {/* Error state */}
            {error && !isLoading && (
              <p className="text-xs font-montserrat" style={{ color: '#f87171' }}>
                {error}
              </p>
            )}

            {/* Answer */}
            {answer && !isLoading && (
              <div className="flex flex-col gap-3">
                <p
                  className="text-sm font-montserrat leading-relaxed line-clamp-3"
                  style={{ color: 'rgba(240,240,248,0.85)' }}
                >
                  {answer}
                </p>

                {action && (
                  <button
                    onClick={() => onActionClick(action.href)}
                    className="self-start px-3 py-1.5 rounded-lg text-xs font-montserrat font-semibold transition-all duration-200 hover:scale-105"
                    style={{
                      background: 'var(--promethex-cta)',
                      color: '#1a0a0b',
                    }}
                  >
                    {action.label}
                  </button>
                )}
              </div>
            )}

            {/* Close hint */}
            {!isLoading && (
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-white/20 hover:text-white/60 transition-colors text-xs font-montserrat"
                aria-label="Cerrar"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
