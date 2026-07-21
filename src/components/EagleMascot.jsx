const WING_PATHS = {
  open: {
    left: 'M60,120 C20,110 5,140 15,185 C35,170 55,155 72,145 Z',
    right: 'M140,120 C180,110 195,140 185,185 C165,170 145,155 128,145 Z',
  },
  raised: {
    left: 'M65,115 C25,95 15,50 30,15 C50,50 65,85 78,110 Z',
    right: 'M135,115 C175,95 185,50 170,15 C150,50 135,85 122,110 Z',
  },
  resting: {
    left: 'M62,130 C35,140 25,170 38,195 C52,180 62,165 72,150 Z',
    right: 'M138,130 C165,140 175,170 162,195 C148,180 138,165 128,150 Z',
  },
}

const MOOD_WINGS = {
  happy: 'open',
  neutral: 'open',
  excited: 'raised',
  sad: 'resting',
}

export default function EagleMascot({ mood = 'happy', size = 96, className = '' }) {
  const wingKey = MOOD_WINGS[mood] ?? 'open'
  const wings = WING_PATHS[wingKey]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-label="Aigle mascotte de FinQuest"
    >
      <path d={wings.left} fill="#5D4037" />
      <path d={wings.right} fill="#5D4037" />

      <ellipse cx="100" cy="145" rx="52" ry="58" fill="#7A5230" />
      <ellipse cx="100" cy="162" rx="28" ry="34" fill="#EFE3D0" />

      <path
        d="M85,204 L80,217 M85,204 L90,215 M85,204 L92,207"
        stroke="#FFB300"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M115,204 L110,215 M115,204 L120,217 M115,204 L108,207"
        stroke="#FFB300"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path d="M68,32 Q100,8 132,32 Q100,22 68,32 Z" fill="#F5F5F5" />
      <circle cx="100" cy="70" r="46" fill="#FFFFFF" />

      {mood === 'excited' ? (
        <>
          <path d="M85,78 Q100,68 115,78 Q100,84 85,78 Z" fill="#FFB300" />
          <path d="M87,84 Q100,95 113,84 Q100,90 87,84 Z" fill="#FF8F00" />
        </>
      ) : (
        <path d="M82,76 Q100,66 118,76 Q104,96 100,96 Q96,96 82,76 Z" fill="#FFB300" />
      )}

      {mood === 'sad' ? (
        <>
          <path d="M68,62 Q78,72 88,62" stroke="#2b2b2b" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M112,62 Q122,72 132,62" stroke="#2b2b2b" strokeWidth="5" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="78" cy="60" r={mood === 'excited' ? 15 : 12} fill="#2b2b2b" />
          <circle cx="122" cy="60" r={mood === 'excited' ? 15 : 12} fill="#2b2b2b" />
          <circle cx="81" cy="56" r="4" fill="#fff" />
          <circle cx="125" cy="56" r="4" fill="#fff" />
        </>
      )}

      {mood === 'sad' && (
        <>
          <line x1="62" y1="42" x2="84" y2="50" stroke="#2b2b2b" strokeWidth="4" strokeLinecap="round" />
          <line x1="138" y1="42" x2="116" y2="50" stroke="#2b2b2b" strokeWidth="4" strokeLinecap="round" />
          <path d="M66,72 Q60,84 66,92 Q72,84 66,72 Z" fill="#4FC3F7" />
        </>
      )}
      {mood === 'excited' && (
        <>
          <line x1="62" y1="38" x2="86" y2="34" stroke="#2b2b2b" strokeWidth="4" strokeLinecap="round" />
          <line x1="138" y1="38" x2="114" y2="34" stroke="#2b2b2b" strokeWidth="4" strokeLinecap="round" />
          <text x="26" y="42" fontSize="20" fill="#FFD700">
            ✦
          </text>
          <text x="158" y="52" fontSize="16" fill="#FFD700">
            ✦
          </text>
        </>
      )}
      {(mood === 'happy' || mood === 'neutral') && (
        <>
          <path d="M64,44 Q75,38 86,44" stroke="#2b2b2b" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M114,44 Q125,38 136,44" stroke="#2b2b2b" strokeWidth="4" fill="none" strokeLinecap="round" />
        </>
      )}
      {mood === 'happy' && (
        <>
          <circle cx="62" cy="78" r="8" fill="#FFAB91" opacity="0.6" />
          <circle cx="138" cy="78" r="8" fill="#FFAB91" opacity="0.6" />
        </>
      )}
    </svg>
  )
}
