import { useNavigate } from 'react-router-dom'

export default function LessonCard({ lesson, completed, locked, color }) {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      disabled={locked}
      onClick={() => navigate(`/lesson/${lesson.id}`)}
      className={`w-full flex items-center gap-4 rounded-2xl p-4 bg-bg-card border transition-all text-left
        ${locked ? 'opacity-40 cursor-not-allowed border-white/5' : 'border-white/10 hover:border-white/25 active:scale-[0.98]'}`}
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
        style={{ backgroundColor: `${color}22` }}
      >
        {completed ? '✅' : lesson.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-white truncate">{lesson.title}</p>
        <p className="text-sm text-white/50">{lesson.xp} XP</p>
      </div>
      <div className="text-white/30 text-xl">{locked ? '🔒' : '›'}</div>
    </button>
  )
}
