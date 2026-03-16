import { useState } from 'react'
import { HeroMaster } from '@promethex/core'

export default function HeroMasterDemo() {
  const [lastAction, setLastAction] = useState<string | null>(null)

  return (
    <div className="relative">
      <HeroMaster
        onPrimary={() => setLastAction('primary')}
        onSecondary={() => setLastAction('secondary')}
      />

      {lastAction && (
        <div
          className="fixed bottom-6 right-6 z-50 rounded-lg px-4 py-2 text-sm font-montserrat border border-white/10"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
        >
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>CTA pulsado: </span>
          <span className="font-semibold" style={{ color: '#E2B0B3' }}>
            {lastAction === 'primary' ? 'Iniciar Proyecto' : 'Ver Servicios'}
          </span>
        </div>
      )}
    </div>
  )
}
