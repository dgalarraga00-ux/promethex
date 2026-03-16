import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';
import { RippleButton } from '../ui/ripple-button';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface PricingMasterProps {
  onSelectStarter?: () => void;
  onSelectBusiness?: () => void;
  onSelectElite?: () => void;
  className?: string;
}

interface PlanDef {
  id: 'starter' | 'business' | 'elite';
  name: string;
  price: string;
  period: string;
  featured: boolean;
  badge?: string;
  features: string[];
}

interface LogoDef {
  label: string;
  svg: React.ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const WA_LINKS = {
  starter: 'https://wa.me/593989232393?text=Hola,%20me%20interesa%20el%20plan%20Starter.',
  business: 'https://wa.me/593989232393?text=Hola,%20me%20interesa%20el%20plan%20Business%20Pro.',
  elite: 'https://wa.me/593989232393?text=Hola,%20me%20interesa%20el%20plan%20Elite%20Corporate.',
};

const LOGOS: LogoDef[] = [
  {
    label: 'Next.js',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155.03.033 1.324 1.986 2.874 4.341a377.036 377.036 0 0 1 4.52 6.897l1.636 2.501.083-.053a12.26 12.26 0 0 0 2.088-1.983 11.89 11.89 0 0 0 2.846-7.624c.008-.28.008-1.052 0-1.332a11.89 11.89 0 0 0-2.158-6.258 11.987 11.987 0 0 0-6.49-4.581 12.21 12.21 0 0 0-2.157-.373C12.046.003 11.8 0 11.572 0z" />
      </svg>
    ),
  },
  {
    label: 'React',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.74-2.852-1.708-2.852-2.476 0-.768 1.12-1.738 2.852-2.476.42-.18.88-.342 1.356-.492zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
  },
  {
    label: 'Tailwind CSS',
    svg: (
      <svg width="22" height="20" viewBox="0 0 54 33" fill="currentColor" aria-hidden="true">
        <path d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
      </svg>
    ),
  },
  {
    label: 'Node.js',
    svg: (
      <svg width="18" height="20" viewBox="0 0 24 27" fill="currentColor" aria-hidden="true">
        <path d="M11.998 0a1.4 1.4 0 0 0-.698.186L.698 6.4A1.394 1.394 0 0 0 0 7.604v12.792c0 .504.27.97.698 1.204l10.602 6.214c.432.253.964.253 1.396 0l10.602-6.214a1.394 1.394 0 0 0 .698-1.204V7.604a1.394 1.394 0 0 0-.698-1.204L12.698.186A1.4 1.4 0 0 0 11.998 0zm-.004 4.62c3.648 0 5.95 1.532 5.95 4.095 0 2.785-2.12 3.556-3.712 3.825l-.09.015c-1.424.267-1.624.532-1.624 1.156v.012c0 .574.32.912 1.716.912 1.512 0 2.42-.476 2.964-.85v2.666s-.98.68-3.028.68c-2.324 0-4.264-.974-4.264-3.286 0-2.506 1.732-3.134 3.492-3.46l.136-.026c1.344-.258 1.756-.5 1.756-1.1v-.012c0-.574-.496-.936-1.74-.936-1.636 0-2.584.576-3.096.936V6.8s.992-.58 3.54-.58v.4z" />
      </svg>
    ),
  },
  {
    label: 'Vercel',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    ),
  },
  {
    label: 'AWS',
    svg: (
      <svg width="32" height="20" viewBox="0 0 80 48" fill="currentColor" aria-hidden="true">
        <path d="M22.557 20.7c0 .84.09 1.52.248 2.02.175.5.408 1.04.725 1.62.113.18.158.362.158.521 0 .226-.136.453-.43.68l-1.429.952c-.204.136-.408.204-.59.204-.226 0-.452-.113-.68-.317-.317-.34-.59-.703-.815-1.066a17.552 17.552 0 0 1-.703-1.315c-1.768 2.086-3.99 3.128-6.665 3.128-1.904 0-3.423-.544-4.535-1.632-1.112-1.088-1.677-2.539-1.677-3.264 0-1.445.51-2.618 1.547-3.503 1.037-.884 2.414-1.326 4.166-1.326.578 0 1.173.051 1.8.136.629.085 1.275.221 1.955.374v-1.241c0-1.292-.272-2.193-.8-2.72-.544-.527-1.462-.782-2.771-.782-.595 0-1.207.068-1.836.221-.629.153-1.241.357-1.836.612-.272.119-.476.187-.595.221a1.09 1.09 0 0 1-.272.051c-.238 0-.357-.17-.357-.527v-.833c0-.272.034-.476.119-.595.085-.119.238-.238.476-.357a9.876 9.876 0 0 1 2.108-.765 10.13 10.13 0 0 1 2.567-.323c1.955 0 3.384.442 4.302 1.326.901.884 1.36 2.227 1.36 4.03v5.31l-.001-.001zm-6.902 2.584c.561 0 1.139-.102 1.751-.306.612-.204 1.156-.578 1.615-1.088.272-.323.476-.68.578-1.088.102-.408.17-.9.17-1.479v-.714a14.466 14.466 0 0 0-1.564-.289 12.81 12.81 0 0 0-1.598-.102c-1.139 0-1.972.221-2.533.68-.561.459-.833 1.105-.833 1.955 0 .799.204 1.394.629 1.802.408.391.986.629 1.785.629h.004zm18.199 2.449c-.408 0-.68-.068-.862-.226-.136-.102-.255-.34-.357-.663l-3.995-13.15c-.102-.34-.153-.561-.153-.68 0-.272.136-.425.408-.425h1.666c.323 0 .544.051.663.17.136.102.238.34.34.663l2.856 11.262 2.652-11.262c.085-.34.187-.561.323-.663.136-.102.374-.17.68-.17h1.36c.323 0 .544.051.68.17.136.102.255.34.323.663l2.686 11.398 2.941-11.398c.102-.34.221-.561.34-.663.136-.102.357-.17.663-.17h1.581c.272 0 .425.136.425.425 0 .085-.017.17-.034.272-.017.102-.051.238-.119.425l-4.115 13.15c-.102.34-.221.561-.357.663-.136.102-.357.17-.646.17h-1.462c-.323 0-.544-.051-.68-.17-.136-.119-.255-.34-.323-.68L26.9 8.302l-2.635 11.296c-.085.34-.187.561-.323.68-.136.119-.374.17-.68.17h-1.513v-.003zm21.93.459c-.884 0-1.768-.102-2.618-.306-.85-.204-1.513-.425-1.955-.68-.272-.153-.459-.323-.527-.476a1.194 1.194 0 0 1-.102-.476v-.867c0-.357.136-.527.391-.527.102 0 .204.017.306.051.102.034.255.102.425.17.578.255 1.207.459 1.87.595a10.14 10.14 0 0 0 2.04.204c1.088 0 1.938-.187 2.533-.561.595-.374.9-.918.9-1.615 0-.476-.153-.867-.459-1.19-.306-.323-.884-.612-1.717-.884l-2.465-.765c-1.241-.391-2.159-.969-2.737-1.734-.578-.748-.867-1.581-.867-2.465 0-.714.153-1.343.459-1.887.306-.544.714-1.02 1.224-1.394.51-.391 1.088-.68 1.751-.884a7.167 7.167 0 0 1 2.108-.306c.374 0 .765.017 1.139.068.391.051.748.119 1.105.204.34.085.663.187.969.306.306.119.544.238.714.357.238.153.408.306.51.476.102.153.153.357.153.612v.8c0 .357-.136.544-.391.544-.136 0-.357-.068-.646-.204-.884-.408-1.87-.612-2.975-.612-.986 0-1.768.17-2.312.527-.544.357-.816.884-.816 1.615 0 .476.17.884.51 1.207.34.323.952.629 1.836.918l2.414.765c1.224.391 2.108.935 2.652 1.649.544.714.816 1.53.816 2.431 0 .731-.153 1.394-.442 1.972a4.538 4.538 0 0 1-1.241 1.479c-.527.408-1.156.714-1.887.935-.765.238-1.564.357-2.414.357l.002-.003z" />
      </svg>
    ),
  },
];

const PLANS: PlanDef[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$279',
    period: 'USD · pago único',
    featured: false,
    features: [
      'Landing page 5 secciones',
      'Dominio por 1 año incluido',
      'Hosting optimizado',
      'Certificado SSL',
      'Diseño responsive',
      'Formulario de contacto',
      'Google Analytics integrado',
      'Entrega en 7 días',
    ],
  },
  {
    id: 'business',
    name: 'Business Pro',
    price: '$449',
    period: 'USD · pago único',
    featured: true,
    badge: 'Más Popular',
    features: [
      'Hasta 4 páginas completas',
      'SEO 360° integrado',
      'Diseño UX personalizado',
      'Módulo de WhatsApp Business',
      'Google Analytics + Search Console',
      'Certificado SSL + hosting premium',
      'Entrega en 14 días',
    ],
  },
  {
    id: 'elite',
    name: 'Elite Corporate',
    price: '$599',
    period: 'USD · pago único',
    featured: false,
    features: [
      'Hasta 8 páginas + blog',
      'Sistema de reservas online',
      'Mapa de calor + análisis UX',
      'Integraciones de IA personalizadas',
      'Soporte prioritario 30 días',
      'Entrega en 21 días',
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function PricingMaster({
  onSelectStarter,
  onSelectBusiness,
  onSelectElite,
  className,
}: PricingMasterProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className={cn('bg-[var(--promethex-bg)]', className)}
      aria-label="Planes y precios"
    >
      {/* ── Logo Ticker ───────────────────────────────────────────────────── */}
      <div
        className="overflow-hidden whitespace-nowrap border-y border-white/5 py-5"
        aria-hidden="true"
      >
        <div className="inline-flex animate-[marquee_30s_linear_infinite] gap-16 items-center">
          {LOGOS.map((logo) => (
            <div
              key={logo.label}
              className="flex items-center gap-2.5 shrink-0"
              style={{ color: 'rgba(240,240,248,0.35)' }}
            >
              {logo.svg}
              <span className="font-montserrat text-xs tracking-widest uppercase">
                {logo.label}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {LOGOS.map((logo) => (
            <div
              key={`${logo.label}-dup`}
              className="flex items-center gap-2.5 shrink-0"
              style={{ color: 'rgba(240,240,248,0.35)' }}
              aria-hidden="true"
            >
              {logo.svg}
              <span className="font-montserrat text-xs tracking-widest uppercase">
                {logo.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto py-24 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-white text-4xl md:text-5xl leading-tight">
            Inversión Transparente. Resultados Medibles.
          </h2>
          <p
            className="mt-4 text-lg font-montserrat"
            style={{ color: 'rgba(240,240,248,0.55)' }}
          >
            Elige el ecosistema que tu empresa necesita para escalar.
          </p>
        </div>

        {/* Cards grid — items-stretch for equal heights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => {
            const cardContent = (
              <>
                {/* Plan name */}
                <h3 className="font-montserrat font-semibold text-white text-xl">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-6 mb-8">
                  <span className="text-5xl font-bold text-white font-montserrat">
                    {plan.price}
                  </span>
                  <span
                    className="ml-2 text-sm"
                    style={{ color: 'rgba(240,240,248,0.45)' }}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <Check
                        size={16}
                        style={{
                          color: 'var(--promethex-accent)',
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      <span
                        className="text-sm"
                        style={{ color: 'rgba(240,240,248,0.75)' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA — mt-auto pushes to bottom */}
                <div className="mt-auto pt-8">
                  {plan.featured ? (
                    <a
                      href={WA_LINKS.business}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <RippleButton
                        rippleColor="rgba(255,255,255,0.3)"
                        className="w-full py-3 rounded-xl font-montserrat font-semibold text-base"
                        style={{
                          background: 'var(--promethex-cta)',
                          color: '#1a0a0b',
                          boxShadow: '0 4px 20px rgba(226,176,179,0.3)',
                        }}
                      >
                        Comenzar Ahora →
                      </RippleButton>
                    </a>
                  ) : (
                    <a
                      href={WA_LINKS[plan.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl font-montserrat font-semibold text-base border transition-colors hover:bg-white/5 flex items-center justify-center"
                      style={{
                        borderColor: 'var(--promethex-accent)',
                        color: 'var(--promethex-accent)',
                      }}
                    >
                      Elegir Plan →
                    </a>
                  )}
                </div>
              </>
            );

            return (
              <div key={plan.id} className="relative h-full flex flex-col">
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="px-4 py-1 rounded-full text-xs font-montserrat font-bold uppercase tracking-widest"
                      style={{
                        background: 'var(--promethex-cta)',
                        color: '#1a0a0b',
                      }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {plan.featured ? (
                  /* ── Border beam wrapper ── */
                  <div className="relative rounded-3xl p-[2px] overflow-hidden h-full flex flex-col">
                    {/* Rotating conic gradient */}
                    <div
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background:
                          'conic-gradient(from 0deg, transparent 0deg, transparent 180deg, rgba(226,176,179,0.15) 220deg, rgba(226,176,179,0.6) 255deg, var(--promethex-cta) 270deg, rgba(226,176,179,0.6) 285deg, rgba(226,176,179,0.15) 320deg, transparent 360deg)',
                        animation: reducedMotion
                          ? undefined
                          : 'spin-slow 6s linear infinite',
                      }}
                      aria-hidden="true"
                    />
                    {/* Soft inner glow — blurred copy of the beam */}
                    <div
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent 0deg, transparent 180deg, rgba(226,176,179,0.1) 220deg, rgba(226,176,179,0.4) 255deg, var(--promethex-cta) 270deg, rgba(226,176,179,0.4) 285deg, rgba(226,176,179,0.1) 320deg, transparent 360deg)',
                        animation: reducedMotion ? undefined : 'spin-slow 6s linear infinite',
                        filter: 'blur(6px)',
                        opacity: 0.6,
                      }}
                      aria-hidden="true"
                    />
                    <motion.div
                      className="relative rounded-3xl p-8 flex flex-col h-full"
                      style={{ background: '#0d0d1a' }}
                      whileHover={reducedMotion ? undefined : { scale: 1.02 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      {cardContent}
                    </motion.div>
                  </div>
                ) : (
                  /* ── Regular card ── */
                  <motion.div
                    className="rounded-3xl p-8 flex flex-col h-full backdrop-blur-sm"
                    style={{
                      background: 'var(--pricing-card)',
                      border: '1px solid rgba(255,255,255,0.10)',
                    }}
                    whileHover={reducedMotion ? undefined : {
                      scale: 1.02,
                      borderColor: '#E2E8F0',
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    {cardContent}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
