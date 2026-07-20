import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'finquest_progress'

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { xp: 0, completedLessons: {} }
    const parsed = JSON.parse(raw)
    return {
      xp: parsed.xp ?? 0,
      completedLessons: parsed.completedLessons ?? {},
    }
  } catch {
    return { xp: 0, completedLessons: {} }
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const completeLesson = useCallback((lessonId, xpEarned) => {
    setProgress((prev) => {
      const alreadyDone = Boolean(prev.completedLessons[lessonId])
      return {
        xp: alreadyDone ? prev.xp : prev.xp + xpEarned,
        completedLessons: {
          ...prev.completedLessons,
          [lessonId]: true,
        },
      }
    })
  }, [])

  const isLessonCompleted = useCallback(
    (lessonId) => Boolean(progress.completedLessons[lessonId]),
    [progress.completedLessons],
  )

  const getModuleCompletion = useCallback(
    (lessonIds) => {
      if (!lessonIds || lessonIds.length === 0) return 0
      const done = lessonIds.filter((id) => progress.completedLessons[id]).length
      return Math.round((done / lessonIds.length) * 100)
    },
    [progress.completedLessons],
  )

  return {
    xp: progress.xp,
    completeLesson,
    isLessonCompleted,
    getModuleCompletion,
  }
}

export const LEVELS = [
  { name: 'Novice', min: 0 },
  { name: 'Épargnant', min: 50 },
  { name: 'Investisseur', min: 150 },
  { name: 'Expert', min: 300 },
]

export function getLevelForXp(xp) {
  let current = LEVELS[0]
  for (const level of LEVELS) {
    if (xp >= level.min) current = level
  }
  const currentIndex = LEVELS.findIndex((l) => l.name === current.name)
  const next = LEVELS[currentIndex + 1] ?? null
  return { current, next }
}
