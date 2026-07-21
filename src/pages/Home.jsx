import { useNavigate } from 'react-router-dom'
import { MODULES } from '../data/modules.js'
import { useProgress, getLevelForXp } from '../hooks/useProgress.js'
import { useStreak } from '../hooks/useStreak.js'
import { useHearts } from '../hooks/useHearts.js'
import ProgressBar from '../components/ProgressBar.jsx'
import Badge from '../components/Badge.jsx'
import Hearts from '../components/Hearts.jsx'
import EagleMascot from '../components/EagleMascot.jsx'

export default function Home() {
  const navigate = useNavigate()
  const { xp, getModuleCompletion } = useProgress()
  const { streakCount, activeToday } = useStreak()
  const { hearts, maxHearts } = useHearts()
  const { current, next } = getLevelForXp(xp)

  const totalLessons = MODULES.reduce((sum, m) => sum + m.lessonIds.length, 0)
  const overallPercent =
    totalLessons === 0
      ? 0
      : Math.round(
          MODULES.reduce((sum, m) => sum + (getModuleCompletion(m.lessonIds) / 100) * m.lessonIds.length, 0) /
            totalLessons *
            100,
        )

  return (
    <div className="flex flex-col gap-6 px-5 pb-24 pt-6">
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <EagleMascot mood="happy" size={52} />
          <div>
            <p className="text-white/50 text-sm">Bienvenue sur</p>
            <h1 className="text-2xl font-black text-white">
              Fin<span className="text-primary">Quest</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <div
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 font-extrabold text-sm ${
              activeToday ? 'bg-gold/20 text-gold animate-pulse-glow' : 'bg-white/10 text-white/50'
            }`}
          >
            🔥 {streakCount}
          </div>
          <Hearts hearts={hearts} maxHearts={maxHearts} size="sm" />
        </div>
      </header>

      <section className="rounded-2xl bg-bg-card border border-white/10 p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Badge level={current.name} />
          <span className="text-gold font-extrabold">{xp} XP</span>
        </div>
        {next && (
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs text-white/50">
              <span>Prochain niveau : {next.name}</span>
              <span>
                {xp}/{next.min} XP
              </span>
            </div>
            <ProgressBar percent={(xp / next.min) * 100} color="#FFD700" />
          </div>
        )}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs text-white/50">
            <span>Progression globale</span>
            <span>{overallPercent}%</span>
          </div>
          <ProgressBar percent={overallPercent} color="#4CAF50" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-white/70 font-bold text-sm uppercase tracking-wide">Modules</h2>
        {MODULES.map((module) => {
          const percent = getModuleCompletion(module.lessonIds)
          const available = module.lessonIds.length > 0
          return (
            <button
              key={module.id}
              type="button"
              disabled={!available}
              onClick={() => navigate(`/module/${module.id}`)}
              className={`w-full rounded-2xl border p-4 text-left transition-all active:scale-[0.98] ${
                available
                  ? 'bg-bg-card border-white/10 hover:border-white/25'
                  : 'bg-bg-card/40 border-white/5 opacity-50 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl shrink-0"
                  style={{ backgroundColor: `${module.color}22` }}
                >
                  {module.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-extrabold text-white truncate">{module.title}</p>
                  <p className="text-xs text-white/50 truncate">{module.description}</p>
                </div>
                {!available && <span className="text-xs text-white/40 shrink-0">Bientôt</span>}
              </div>
              {available && <ProgressBar percent={percent} color={module.color} height={8} />}
            </button>
          )
        })}
      </section>
    </div>
  )
}
