import { useState } from 'react'
import FloatingNavbarDemo from './demos/marketing/FloatingNavbarDemo'
import HeroMasterDemo from './demos/marketing/HeroMasterDemo'
import BentoServicesDemo from './demos/marketing/BentoServicesDemo'
import PricingMasterDemo from './demos/marketing/PricingMasterDemo'
import { ContactMasterDemo } from './demos/marketing/ContactMasterDemo'
import { FooterMasterDemo } from './demos/marketing/FooterMasterDemo'

type DemoId = 'floating-navbar' | 'hero-master' | 'bento-services' | 'pricing-master' | 'contact-master' | 'footer-master'

const DEMO_REGISTRY = [
  {
    id: 'floating-navbar' as DemoId,
    category: 'Marketing',
    label: 'Floating Navbar',
    component: FloatingNavbarDemo,
  },
  {
    id: 'hero-master' as DemoId,
    category: 'Marketing',
    label: 'Hero Master',
    component: HeroMasterDemo,
  },
  {
    id: 'bento-services' as DemoId,
    category: 'Marketing',
    label: 'Bento Services',
    component: BentoServicesDemo,
  },
  {
    id: 'pricing-master' as DemoId,
    category: 'Marketing',
    label: 'Pricing Master',
    component: PricingMasterDemo,
  },
  {
    id: 'contact-master' as DemoId,
    category: 'Marketing',
    label: 'Contact Master',
    component: ContactMasterDemo,
  },
  {
    id: 'footer-master' as DemoId,
    category: 'Marketing',
    label: 'Footer Master',
    component: FooterMasterDemo,
  },
]

export default function App() {
  const [activeDemo, setActiveDemo] = useState<DemoId>('floating-navbar')

  const ActiveDemo = DEMO_REGISTRY.find(d => d.id === activeDemo)?.component
  const categories = Array.from(new Set(DEMO_REGISTRY.map(d => d.category)))

  return (
    <div className="dark flex min-h-screen">
      {/* Sidebar */}
      <aside
        className="fixed left-0 top-0 h-screen w-60 flex flex-col border-r z-50"
        style={{ background: '#080812', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="px-6 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <span className="font-montserrat font-bold text-base" style={{ color: '#f0f0f8' }}>
            Promethex Core
          </span>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(240,240,248,0.35)' }}>
            Preview
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {categories.map(cat => (
            <div key={cat}>
              <p
                className="px-6 py-2 text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'rgba(240,240,248,0.3)' }}
              >
                {cat}
              </p>
              {DEMO_REGISTRY.filter(d => d.category === cat).map(demo => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className="w-full text-left px-6 py-2 text-sm font-medium transition-colors"
                  style={{
                    color: activeDemo === demo.id ? '#f0f0f8' : 'rgba(240,240,248,0.5)',
                    background:
                      activeDemo === demo.id ? 'rgba(255,255,255,0.07)' : 'transparent',
                  }}
                >
                  {demo.label}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="px-6 py-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <p className="text-xs" style={{ color: 'rgba(240,240,248,0.2)' }}>
            v0.0.1 · Biblioteca de Élite
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-60 flex-1">
        {ActiveDemo ? (
          <ActiveDemo />
        ) : (
          <div
            className="flex items-center justify-center h-screen"
            style={{ color: 'rgba(240,240,248,0.3)' }}
          >
            <p className="font-montserrat text-sm">Selecciona un componente</p>
          </div>
        )}
      </main>
    </div>
  )
}
