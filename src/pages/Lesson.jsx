import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getLessonById } from '../data/lessons.js'
import { getModuleById } from '../data/modules.js'
import QuizQuestion from '../components/QuizQuestion.jsx'
import ProgressBar from '../components/ProgressBar.jsx'

const STEP_INTRO = 'intro'

export default function Lesson() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const lesson = getLessonById(lessonId)
  const [step, setStep] = useState(STEP_INTRO)
  const [correctCount, setCorrectCount] = useState(0)
  const [hasAnswered, setHasAnswered] = useState(false)

  if (!lesson) {
    return (
      <div className="px-5 pt-10 text-center text-white/60">
        <p>Leçon introuvable.</p>
        <button className="mt-4 text-primary font-bold" onClick={() => navigate('/')}>
          Retour à l'accueil
        </button>
      </div>
    )
  }

  const module = getModuleById(lesson.moduleId)
  const totalQuestions = lesson.questions.length
  const isIntro = step === STEP_INTRO
  const questionIndex = isIntro ? 0 : step
  const currentQuestion = isIntro ? null : lesson.questions[questionIndex]

  function handleAnswered(isCorrect) {
    if (isCorrect) setCorrectCount((c) => c + 1)
    setHasAnswered(true)
  }

  function goNext() {
    if (isIntro) {
      setStep(0)
      return
    }
    setHasAnswered(false)
    if (step + 1 < totalQuestions) {
      setStep(step + 1)
    } else {
      navigate(`/results/${lesson.id}`, { state: { correctCount, total: totalQuestions } })
    }
  }

  const progressPercent = isIntro ? 0 : ((step + 1) / totalQuestions) * 100

  return (
    <div className="flex flex-col gap-6 px-5 pb-24 pt-6 min-h-screen">
      <header className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-card border border-white/10 text-white/70"
          aria-label="Quitter la leçon"
        >
          ✕
        </button>
        <div className="flex-1">
          <ProgressBar percent={progressPercent} color={module?.color ?? '#4CAF50'} />
        </div>
      </header>

      <div className="flex-1 flex flex-col gap-6">
        {isIntro ? (
          <div className="flex flex-col gap-4 animate-pop-in">
            <div className="text-5xl text-center">{lesson.emoji}</div>
            <h1 className="text-2xl font-black text-white text-center">{lesson.title}</h1>
            <div className="rounded-2xl bg-bg-card border border-white/10 p-5">
              <p className="text-white/80 leading-relaxed">{lesson.intro}</p>
            </div>
          </div>
        ) : (
          <div key={currentQuestion.id} className="animate-pop-in">
            <p className="text-xs font-bold text-white/40 mb-2 uppercase tracking-wide">
              Question {questionIndex + 1}/{totalQuestions}
            </p>
            <QuizQuestion question={currentQuestion} onAnswered={handleAnswered} />
          </div>
        )}
      </div>

      {(isIntro || hasAnswered) && (
        <button
          type="button"
          onClick={goNext}
          className="w-full rounded-2xl bg-primary py-4 font-extrabold text-white active:scale-[0.98] transition-transform animate-pop-in"
        >
          {isIntro ? 'Commencer 🚀' : step + 1 < totalQuestions ? 'Continuer →' : 'Voir mes résultats 🏆'}
        </button>
      )}
    </div>
  )
}
