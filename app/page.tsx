'use client';

import React from 'react';
import {
  FloatingNavbar,
  HeroMaster,
  BentoServices,
  PricingMaster,
  ContactMaster,
  FooterMaster,
  CookieBanner,
} from '@promethex/core';

const NAV_LINKS = [
  { label: 'Inicio', path: '#hero' },
  { label: 'Servicios', path: '#servicios' },
  { label: 'Precios', path: '#precios' },
  { label: 'Contacto', path: '#contacto' },
];

const SECTION_IDS = ['hero', 'servicios', 'precios', 'contacto'];

export default function HomePage() {
  const handleNavigate = (path: string) => {
    const id = path.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`body > header { display: none !important; }`}</style>
      <main className="bg-[#05050f] text-white font-montserrat min-h-screen">
        <FloatingNavbar
          links={NAV_LINKS}
          onNavigate={handleNavigate}
          sectionIds={SECTION_IDS}
          ctaLink={{ label: 'Iniciar Proyecto', path: '#contacto' }}
        />

        <section id="hero">
          <HeroMaster
            onPrimary={() => handleNavigate('#contacto')}
            onSecondary={() => handleNavigate('#servicios')}
          />
        </section>

        <section id="servicios">
          <BentoServices />
        </section>

        <section id="precios">
          <PricingMaster
            onSelectStarter={() => handleNavigate('#contacto')}
            onSelectBusiness={() => handleNavigate('#contacto')}
            onSelectElite={() => handleNavigate('#contacto')}
          />
        </section>

        <section id="contacto">
          <ContactMaster
            onSubmit={(data) => console.log('Form submitted:', data)}
          />
        </section>

        <FooterMaster onNavigate={handleNavigate} />
      </main>
      <CookieBanner />
    </>
  );
}
