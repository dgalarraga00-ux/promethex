import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { RippleButton } from '../ui/ripple-button';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ContactMasterProps {
  onSubmit?: (data: { name: string; company: string; email: string; message: string }) => void;
  onEmailClick?: () => void;
  onWhatsAppClick?: () => void;
  emailValue?: string;
  whatsappValue?: string;
  className?: string;
}

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onClick?: () => void;
  reducedMotion: boolean | null;
}

// ─── ContactCard ──────────────────────────────────────────────────────────────

function ContactCard({ icon, label, value, onClick, reducedMotion }: ContactCardProps) {
  return (
    <motion.div
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      className="rounded-2xl px-5 py-4 flex items-center gap-4 cursor-pointer"
      onClick={onClick}
      whileHover={
        reducedMotion
          ? undefined
          : { borderColor: 'var(--promethex-accent)', background: 'rgba(255,255,255,0.08)' }
      }
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      >
        <span style={{ color: 'var(--promethex-accent)' }}>{icon}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-montserrat text-white/40 uppercase tracking-widest">
          {label}
        </span>
        <span className="text-sm font-montserrat text-white/80 mt-0.5">{value}</span>
      </div>
    </motion.div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ContactMaster({
  onSubmit,
  onEmailClick,
  onWhatsAppClick,
  emailValue = 'info@promethex.net',
  whatsappValue = '+593 98 923 2393',
  className,
}: ContactMasterProps) {
  const reducedMotion = useReducedMotion();

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ name, company, email, message });
  };

  const fieldLabelStyle: React.CSSProperties = { color: 'rgba(240,240,248,0.4)' };
  const inputClassName =
    'w-full bg-transparent border-b border-white/20 focus:border-[var(--promethex-accent)] outline-none transition-colors duration-200 pb-2 text-white placeholder:text-white/25 font-montserrat text-sm';

  return (
    <section
      className={cn('bg-[var(--promethex-bg)]', className)}
      aria-label="Contacto"
    >
      <div className="max-w-7xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* ── Left column ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-montserrat font-bold text-white text-4xl md:text-5xl leading-tight">
                Iniciemos tu<br />transformación.
              </h2>
              <p
                className="mt-4 text-lg font-montserrat"
                style={{ color: 'rgba(240,240,248,0.55)' }}
              >
                Cuéntanos tu proyecto y construimos juntos el ecosistema digital que tu empresa
                necesita para escalar.
              </p>
            </div>

            <ContactCard
              icon={<Mail size={18} />}
              label="Email"
              value={emailValue}
              onClick={onEmailClick}
              reducedMotion={reducedMotion}
            />

            <ContactCard
              icon={<MessageCircle size={18} />}
              label="WhatsApp"
              value={whatsappValue}
              onClick={onWhatsAppClick}
              reducedMotion={reducedMotion}
            />
          </div>

          {/* ── Right column — Form ──────────────────────────────────────── */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Nombre */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-montserrat uppercase tracking-widest"
                style={fieldLabelStyle}
              >
                Nombre
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className={inputClassName}
              />
            </div>

            {/* Empresa */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-montserrat uppercase tracking-widest"
                style={fieldLabelStyle}
              >
                Empresa
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Tu empresa"
                className={inputClassName}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-montserrat uppercase tracking-widest"
                style={fieldLabelStyle}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className={inputClassName}
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-2">
              <label
                className="text-xs font-montserrat uppercase tracking-widest"
                style={fieldLabelStyle}
              >
                Mensaje
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntanos tu proyecto..."
                className={cn(inputClassName, 'resize-none')}
              />
            </div>

            {/* Submit */}
            <RippleButton
              type="submit"
              rippleColor="rgba(255,255,255,0.3)"
              className="mt-2 w-full py-3.5 rounded-xl font-montserrat font-semibold text-base"
              style={{
                background: 'var(--promethex-cta)',
                color: '#1a0a0b',
                boxShadow: '0 4px 20px rgba(226,176,179,0.25)',
              }}
            >
              Enviar Propuesta →
            </RippleButton>
          </form>

        </div>
      </div>
    </section>
  );
}
