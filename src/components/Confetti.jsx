const PIECES = Array.from({ length: 18 }, (_, i) => i)
const COLORS = ['#4CAF50', '#FFD700', '#2196F3', '#E91E63']

export default function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PIECES.map((i) => (
        <span
          key={i}
          className="absolute top-0 block h-2 w-2 rounded-sm animate-confetti-fall"
          style={{
            left: `${(i * 37) % 100}%`,
            backgroundColor: COLORS[i % COLORS.length],
            animationDelay: `${(i % 6) * 0.1}s`,
          }}
        />
      ))}
    </div>
  )
}
