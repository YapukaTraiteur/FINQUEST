export default function ProgressBar({ percent = 0, color = '#4CAF50', height = 10 }) {
  const clamped = Math.min(100, Math.max(0, percent))
  return (
    <div
      className="w-full rounded-full bg-white/10 overflow-hidden"
      style={{ height }}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${clamped}%`, backgroundColor: color }}
      />
    </div>
  )
}
