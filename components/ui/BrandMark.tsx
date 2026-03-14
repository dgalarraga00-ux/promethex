interface BrandMarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showSlogan?: boolean
}

const sizeMap = {
  sm: {
    text: 'text-2xl',
    slogan: 'text-[9px]',
  },
  md: {
    text: 'text-3xl',
    slogan: 'text-[10px]',
  },
  lg: {
    text: 'text-5xl md:text-6xl',
    slogan: 'text-[10px] md:text-xs',
  },
  xl: {
    text: 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl',
    slogan: 'text-[9px] sm:text-xs md:text-sm',
  },
}

export default function BrandMark({ size = 'lg', showSlogan = true }: BrandMarkProps) {
  const s = sizeMap[size]
  const fontStyle = { fontFamily: 'var(--font-montserrat), sans-serif' }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 md:gap-3">
        {/* Name: same font size class drives both text and slash box via em units */}
        <span
          className={`${s.text} font-black tracking-wide sm:tracking-widest uppercase leading-none`}
          style={fontStyle}
        >
          <span className="text-white">PROMETHE</span>
          <span style={{ color: '#6F3F48' }}>X</span>
        </span>
        {/* Slash box: same text class → 1em = exact letter height */}
        <div
          className={`${s.text} font-bold shrink-0 flex items-center justify-center leading-none`}
          style={{
            width: '1em',
            height: '1em',
            border: '3px solid rgba(255,255,255,0.7)',
            color: '#FFFFFF',
            ...fontStyle,
          }}
        >
          /
        </div>
      </div>
      {showSlogan && (
        <p
          className={`${s.slogan} tracking-widest uppercase text-white/50 font-medium`}
          style={{ ...fontStyle, letterSpacing: '0.3em' }}
        >
          — CÓDIGO&nbsp;•&nbsp;VELOCIDAD&nbsp;•&nbsp;RESULTADOS —
        </p>
      )}
    </div>
  )
}
