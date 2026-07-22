import { useEffect, useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getLessonById } from '../data/lessons.js'
import { getModuleById } from '../data/modules.js'
import { useProgress } from '../hooks/useProgress.js'
import { useStreak } from '../hooks/useStreak.js'
import { useLeague } from '../hooks/useLeague.js'
import Confetti from '../components/Confetti.jsx'
import EagleMascot from '../components/EagleMascot.jsx'

export default function Results() {
  const { lessonId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const lesson = getLessonById(lessonId)
  const { completeLesson } = useProgress()
  const { markActiveToday } = useStreak()
  const { addWeeklyXp } = useLeague()
  const hasRecorded = useRef(false)

  const correctCount = location.state?.correctCount ?? 0
  const total = location.state?.total ?? lesson?.questions.length ?? 0
  const allCorrect = total > 0 && correctCount === total

  useEffect(() => {
    if (!lesson || hasRecorded.current) return
    hasRecorded.current = true
    completeLesson(lesson.id, lesson.xp)
    markActiveToday()
    addWeeklyXp(lesson.xp)
  }, [lesson, completeLesson, markActiveToday, addWeeklyXp])

  if (!lesson) {
    return (
      <div className="px-5 pt-10 text-center text-white/60">
        <p>Résultats introuvables.</p>
        <button className="mt-4 text-primary font-bold" onClick={() => navigate('/')}>
          Retour à l'accueil
        </button>
      </div>
    )
  }

  const module = getModuleById(lesson.moduleId)

  return (
    <div className="relative flex flex-col items-center gap-6 px-5 pb-24 pt-16 min-h-screen text-center overflow-hidden">
      {allCorrect && <Confetti />}

      <div className="animate-pop-in">
        <EagleMascot mood={allCorrect ? 'excited' : 'happy'} size={130} />
      </div>

      <div className="animate-pop-in">
        <h1 className="text-2xl font-black text-white mb-1">
          {allCorrect ? 'Sans faute !' : 'Leçon terminée !'}
        </h1>
        <p className="text-white/60">{lesson.title}</p>
      </div>

      <div className="w-full rounded-2xl bg-bg-card border border-white/10 p-6 flex flex-col gap-4 animate-pop-in">
        <div className="flex items-center justify-center gap-2 text-gold">
          <span className="text-3xl font-black">+{lesson.xp}</span>
          <span className="font-bold">XP</span>
        </div>
        <div className="text-white/60 text-sm">
          {correctCount}/{total} bonnes réponses
        </div>
      </div>

      <div className="w-full flex flex-col gap-3 mt-auto">
        <button
          type="button"
          onClick={() => navigate(module ? `/module/${module.id}` : '/')}
          className="w-full rounded-2xl bg-primary py-4 font-extrabold text-white active:scale-[0.98] transition-transform"
        >
          Retour au module
        </button>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="w-full rounded-2xl bg-white/5 py-4 font-bold text-white/70 active:scale-[0.98] transition-transform"
        >
          Accueil
        </button>
      </div>
    </div>
  )
}
