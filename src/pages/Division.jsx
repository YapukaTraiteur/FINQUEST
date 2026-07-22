import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLeague, generateBotStandings, GROUP_SIZE } from '../hooks/useLeague.js'
import { getDivisionById } from '../data/divisions.js'
import EagleMascot from '../components/EagleMascot.jsx'

const PROMOTION_ZONE = 3
const DEMOTION_ZONE = 3

function formatWeekCountdown(weekEndsAt) {
  const ms = weekEndsAt.getTime() - Date.now()
  if (ms <= 0) return 'bientôt'
  const totalHours = Math.ceil(ms / (60 * 60 * 1000))
  const days = Math.floor(totalHours / 24)
  const hours = totalHours % 24
  return days > 0 ? `${days} j ${hours} h` : `${hours} h`
}

const RESULT_COPY = {
  promoted: (division) => `Tu es monté en division ${division.name} ${division.emoji}`,
  demoted: (division) => `Tu es redescendu en division ${division.name} ${division.emoji}`,
  stayed: (division) => `Tu restes en division ${division.name} ${division.emoji}`,
}

export default function Division() {
  const navigate = useNavigate()
  const { division, weeklyXp, weekStart, weekEndsAt, lastResult, clearLastResult } = useLeague()
  const divisionInfo = getDivisionById(division)

  const standings = useMemo(() => {
    const bots = generateBotStandings(division, weekStart)
    const all = [...bots, { name: 'Toi', xp: weeklyXp, isBot: false }]
    return all
      .sort((a, b) => b.xp - a.xp)
      .map((entry, index) => ({ ...entry, rank: index + 1 }))
  }, [division, weekStart, weeklyXp])

  return (
    <div className="flex flex-col gap-6 px-5 pb-24 pt-6">
      <header className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-card border border-white/10 text-white/70"
          aria-label="Retour"
        >
          ‹
        </button>
        <h1 className="text-xl font-black text-white flex items-center gap-2">
          <span>{divisionInfo.emoji}</span> Ligue {divisionInfo.name}
        </h1>
      </header>

      {lastResult && (
        <div className="flex flex-col items-center gap-2 rounded-2xl bg-bg-card border border-white/10 p-5 text-center animate-pop-in">
          <EagleMascot
            mood={lastResult.outcome === 'demoted' ? 'sad' : lastResult.outcome === 'promoted' ? 'excited' : 'happy'}
            size={80}
          />
          <p className="font-extrabold text-white">
            {RESULT_COPY[lastResult.outcome](getDivisionById(lastResult.newDivision))}
          </p>
          <p className="text-xs text-white/50">Semaine précédente : {lastResult.rank}e place</p>
          <button
            type="button"
            onClick={clearLastResult}
            className="mt-1 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white/70"
          >
            OK
          </button>
        </div>
      )}

      <div className="flex items-center justify-between rounded-2xl bg-bg-card border border-white/10 px-4 py-3">
        <span className="text-sm text-white/60">Fin de la semaine dans</span>
        <span className="font-extrabold text-gold">{formatWeekCountdown(weekEndsAt)}</span>
      </div>

      <div className="flex flex-col gap-2">
        {standings.map((entry) => {
          const inPromotionZone = entry.rank <= PROMOTION_ZONE
          const inDemotionZone = entry.rank > GROUP_SIZE - DEMOTION_ZONE
          const isPlayer = !entry.isBot

          return (
            <div
              key={`${entry.rank}-${entry.name}`}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
                isPlayer
                  ? 'bg-primary/15 border-primary/50'
                  : inPromotionZone
                    ? 'bg-bg-card border-primary/20'
                    : inDemotionZone
                      ? 'bg-bg-card border-red-500/20'
                      : 'bg-bg-card border-white/5'
              }`}
            >
              <span className="w-6 text-center font-extrabold text-white/60">{entry.rank}</span>
              <span className={`flex-1 font-bold ${isPlayer ? 'text-primary' : 'text-white'}`}>
                {entry.name}
              </span>
              {inPromotionZone && <span className="text-primary text-sm">▲</span>}
              {inDemotionZone && <span className="text-red-400 text-sm">▼</span>}
              <span className="font-extrabold text-gold">{entry.xp} XP</span>
            </div>
          )
        })}
      </div>

      <p className="text-center text-xs text-white/40">
        Top {PROMOTION_ZONE} : promotion — Derniers {DEMOTION_ZONE} : relégation
      </p>
    </div>
  )
}
