import { useState } from 'react'
import EagleMascot from './EagleMascot.jsx'
import { useSoundEffects } from '../hooks/useSoundEffects.js'

export default function QuizQuestion({ question, onAnswered }) {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [answered, setAnswered] = useState(false)
  const { playCorrect, playIncorrect } = useSoundEffects()

  const isCorrect = selectedIndex === question.correctIndex

  function handleSelect(index) {
    if (answered) return
    setSelectedIndex(index)
    setAnswered(true)
    const correct = index === question.correctIndex
    if (correct) {
      playCorrect()
    } else {
      playIncorrect()
    }
    onAnswered?.(correct)
  }

  function optionClasses(index) {
    const base =
      'w-full text-left rounded-xl border-2 px-4 py-3 font-semibold transition-all active:scale-[0.98]'
    if (!answered) {
      return `${base} border-white/10 bg-bg-card hover:border-primary/60 text-white`
    }
    if (index === question.correctIndex) {
      return `${base} border-primary bg-primary/20 text-primary animate-pop-in`
    }
    if (index === selectedIndex) {
      return `${base} border-red-500 bg-red-500/20 text-red-400 animate-shake`
    }
    return `${base} border-white/5 bg-bg-card text-white/30`
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-extrabold text-white leading-snug">{question.question}</h2>

      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <button
            key={option}
            type="button"
            onClick={() => handleSelect(index)}
            className={optionClasses(index)}
          >
            {option}
          </button>
        ))}
      </div>

      {answered && (
        <div
          className={`flex items-start gap-3 rounded-xl p-4 animate-pop-in border-2 ${
            isCorrect ? 'border-primary bg-primary/10' : 'border-gold bg-gold/10'
          }`}
        >
          <EagleMascot mood={isCorrect ? 'happy' : 'sad'} size={56} className="shrink-0" />
          <div>
            <p className={`font-extrabold mb-1 ${isCorrect ? 'text-primary' : 'text-gold'}`}>
              {isCorrect ? '✅ Bonne réponse !' : '❌ Pas tout à fait...'}
            </p>
            <p className="text-sm text-white/80">{question.explanation}</p>
          </div>
        </div>
      )}
    </div>
  )
}
