import { useState } from 'react'
import { FloatingNavbar } from '@promethex/core'

const LINKS = [
  { label: 'Inicio',    path: '/inicio' },
  { label: 'Nosotros',  path: '/nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Blog',      path: '/blog' },
]

const CTA_LINK = { label: 'Contacto', path: '/contacto' }

const SECTIONS = [
  { id: 'inicio',    label: 'Inicio',    gradient: 'from-[#0a0a20] to-[#0d0d2b]' },
  { id: 'nosotros',  label: 'Nosotros',  gradient: 'from-[#0d0d2b] to-[#0a1020]' },
  { id: 'servicios', label: 'Servicios', gradient: 'from-[#0a1020] to-[#0d1530]' },
  { id: 'blog',      label: 'Blog',      gradient: 'from-[#0d1530] to-[#0a0a20]' },
  { id: 'contacto',  label: 'Contacto',  gradient: 'from-[#0a0a20] to-[#050510]' },
]

export default function FloatingNavbarDemo() {
  const [lastNav, setLastNav] = useState<string | null>(null)

  function handleNavigate(path: string) {
    console.log('[Preview] onNavigate:', path)
    setLastNav(path)
  }

  function handleSearch(query: string) {
    console.log('[Preview] onSearch:', query)
  }

  const logo = (
    <div className="inline-flex items-center gap-1.5 font-montserrat font-bold select-none">
      <span className="text-base" style={{ color: 'var(--navbar-text-muted)' }}>Promethex</span>
      <div
        className="inline-flex items-center justify-center border font-bold"
        style={{
          borderColor: 'var(--navbar-text-muted)',
          color: 'var(--navbar-text-muted)',
          width: '22px',
          height: '22px',
          fontSize: '13px',
          lineHeight: 1,
        }}
      >
        /
      </div>
    </div>
  )

  return (
    <div className="relative">
      <FloatingNavbar
        links={LINKS}
        logo={logo}
        ctaLink={CTA_LINK}
        onNavigate={handleNavigate}
        onSearch={handleSearch}
        sectionIds={SECTIONS.map(s => s.id)}
      />

      {lastNav && (
        <div
          className="fixed bottom-6 right-6 z-50 rounded-lg px-4 py-2 text-sm font-montserrat border border-white/10"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
        >
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>Navegando a: </span>
          <span className="font-semibold" style={{ color: '#E2B0B3' }}>
            {lastNav}
          </span>
        </div>
      )}

      {SECTIONS.map(section => (
        <section
          key={section.id}
          id={section.id}
          className={`flex flex-col items-center justify-center h-screen bg-gradient-to-b ${section.gradient}`}
        >
          <h2
            className="font-montserrat font-bold text-6xl select-none"
            style={{ color: 'rgba(255,255,255,0.12)' }}
          >
            {section.label}
          </h2>
          <p
            className="mt-4 text-sm font-montserrat"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            Scroll para probar el navbar
          </p>
        </section>
      ))}
    </div>
  )
}
