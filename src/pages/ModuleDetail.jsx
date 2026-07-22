import { useNavigate, useParams } from 'react-router-dom'
import { getModuleById } from '../data/modules.js'
import { getLessonById } from '../data/lessons.js'
import { useProgress } from '../hooks/useProgress.js'
import LessonPath from '../components/LessonPath.jsx'
import ProgressBar from '../components/ProgressBar.jsx'

export default function ModuleDetail() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const module = getModuleById(moduleId)
  const { isLessonCompleted, getModuleCompletion } = useProgress()

  if (!module) {
    return (
      <div className="px-5 pt-10 text-center text-white/60">
        <p>Module introuvable.</p>
        <button className="mt-4 text-primary font-bold" onClick={() => navigate('/')}>
          Retour à l'accueil
        </button>
      </div>
    )
  }

  const percent = getModuleCompletion(module.lessonIds)

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
        <div className="flex-1">
          <h1 className="text-xl font-black text-white flex items-center gap-2">
            <span>{module.emoji}</span> {module.title}
          </h1>
        </div>
      </header>

      <section className="rounded-2xl bg-bg-card border border-white/10 p-5 flex flex-col gap-3">
        <p className="text-sm text-white/60">{module.description}</p>
        <ProgressBar percent={percent} color={module.color} />
        <p className="text-xs text-white/40">{percent}% complété</p>
      </section>

      <section>
        {module.lessonIds.length === 0 ? (
          <p className="text-center text-white/40 text-sm py-8">
            Les leçons de ce module arrivent bientôt. 🚧
          </p>
        ) : (
          <LessonPath
            lessons={module.lessonIds.map((lessonId) => getLessonById(lessonId)).filter(Boolean)}
            color={module.color}
            isLessonCompleted={isLessonCompleted}
          />
        )}
      </section>
    </div>
  )
}
