'use client';

import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'promethex_cookies_accepted';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[500] px-4 py-4 md:px-8"
      role="banner"
      aria-label="Aviso de cookies"
    >
      <div
        className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl px-6 py-4 backdrop-blur-xl"
        style={{
          background: 'rgba(26, 26, 26, 0.95)',
          border: '1px solid rgba(226, 232, 240, 0.15)',
          boxShadow: '0 -4px 32px rgba(0,0,0,0.4)',
        }}
      >
        <p
          className="text-sm font-montserrat leading-relaxed flex-1"
          style={{ color: 'rgba(240,240,248,0.65)' }}
        >
          Usamos cookies para mejorar tu experiencia. Al continuar navegando aceptas nuestra{' '}
          <a
            href="/legal/privacidad"
            className="underline underline-offset-2 transition-colors duration-200 hover:text-white"
            style={{ color: 'var(--promethex-accent)' }}
          >
            Política de Privacidad
          </a>
          .
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/legal/privacidad"
            className="text-xs font-montserrat transition-colors duration-200"
            style={{ color: 'rgba(240,240,248,0.35)' }}
          >
            Más info
          </a>
          <button
            onClick={handleAccept}
            className="px-5 py-2 rounded-xl text-sm font-montserrat font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'var(--promethex-cta)',
              color: '#1a0a0b',
              boxShadow: '0 4px 16px rgba(226,176,179,0.3)',
            }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
