import React from 'react';
import { cn } from '../../utils/cn';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getHref(label: string): string {
  const map: Record<string, string> = {
    'Desarrollo SaaS': '#servicios',
    'Ecosistemas Interactivos': '#servicios',
    'Optimización SEO': '#servicios',
    'UX/UI': '#servicios',
    'Sobre Nosotros': '#hero',
    'Casos de Éxito': '#hero',
    'Precios': '#precios',
    'Términos y Condiciones': '/legal/terminos',
    'Política de Privacidad': '/legal/privacidad',
  };
  return map[label] ?? '#';
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface FooterMasterProps {
  onNavigate?: (path: string) => void;
  className?: string;
}

interface NavColumn {
  title: string;
  links: string[];
}

interface SocialLink {
  label: string;
  href: string;
  svg: React.ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_COLUMNS: NavColumn[] = [
  {
    title: 'Servicios',
    links: ['Desarrollo SaaS', 'Ecosistemas Interactivos', 'Optimización SEO', 'UX/UI'],
  },
  {
    title: 'Empresa',
    links: ['Sobre Nosotros', 'Casos de Éxito', 'Precios'],
  },
  {
    title: 'Legal',
    links: ['Términos y Condiciones', 'Política de Privacidad'],
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'X / Twitter',
    href: 'https://www.instagram.com/promethex.tech/',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.instagram.com/promethex.tech/',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/promethex.tech/',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function FooterMaster({ onNavigate, className }: FooterMasterProps) {
  return (
    <footer className={cn('bg-[#0a0a0a] relative overflow-hidden', className)}>

      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[10vw] font-black font-montserrat text-white/[0.03] select-none leading-none pb-8">
          PROMETHEX
        </span>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-montserrat font-black text-xl text-white">
              PROMETHE<span style={{ color: 'var(--promethex-cta)' }}>X</span>
            </span>
            <p className="text-sm text-white/40 font-montserrat leading-relaxed">
              Código. Velocidad. Resultados.
            </p>
          </div>

          {/* Cols 2-4 — Navigation */}
          {NAV_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4
                className="text-xs font-montserrat font-bold uppercase tracking-widest mb-5"
                style={{ color: 'var(--promethex-accent)' }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={getHref(link)}
                      className="text-sm font-montserrat text-white/40 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright — dynamic year */}
          <p
            className="text-sm font-montserrat"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            © {new Date().getFullYear()} Promethex. Todos los derechos reservados.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/30 hover:text-[var(--promethex-accent)] transition-colors duration-200"
              >
                {social.svg}
              </a>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}
