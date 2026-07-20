const LEVEL_STYLES = {
  Novice: { icon: '🌱', color: '#8BC34A' },
  Épargnant: { icon: '🐷', color: '#4CAF50' },
  Investisseur: { icon: '📈', color: '#2196F3' },
  Expert: { icon: '👑', color: '#FFD700' },
}

export default function Badge({ level, size = 'md' }) {
  const style = LEVEL_STYLES[level] ?? LEVEL_STYLES.Novice
  const sizeClasses = size === 'lg' ? 'text-3xl px-4 py-2' : 'text-xl px-3 py-1'

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full font-extrabold ${sizeClasses}`}
      style={{
        backgroundColor: `${style.color}22`,
        color: style.color,
        border: `1px solid ${style.color}55`,
      }}
    >
      <span>{style.icon}</span>
      <span className="text-sm md:text-base">{level}</span>
    </span>
  )
}
