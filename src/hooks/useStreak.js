import { useEffect, useState } from 'react'

const STORAGE_KEY = 'finquest_streak'

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function daysBetween(a, b) {
  const msPerDay = 1000 * 60 * 60 * 24
  return Math.round((new Date(b) - new Date(a)) / msPerDay)
}

function loadStreak() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { count: 0, lastActiveDate: null, activeToday: false }
    const parsed = JSON.parse(raw)
    const today = todayStr()
    if (parsed.lastActiveDate === today) {
      return { count: parsed.count ?? 0, lastActiveDate: parsed.lastActiveDate, activeToday: true }
    }
    if (parsed.lastActiveDate) {
      const gap = daysBetween(parsed.lastActiveDate, today)
      if (gap > 1) {
        return { count: 0, lastActiveDate: null, activeToday: false }
      }
    }
    return { count: parsed.count ?? 0, lastActiveDate: parsed.lastActiveDate, activeToday: false }
  } catch {
    return { count: 0, lastActiveDate: null, activeToday: false }
  }
}

export function useStreak() {
  const [streak, setStreak] = useState(loadStreak)

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ count: streak.count, lastActiveDate: streak.lastActiveDate }),
    )
  }, [streak.count, streak.lastActiveDate])

  const markActiveToday = () => {
    setStreak((prev) => {
      const today = todayStr()
      if (prev.lastActiveDate === today) return prev
      const gap = prev.lastActiveDate ? daysBetween(prev.lastActiveDate, today) : null
      const newCount = gap === 1 || gap === null ? prev.count + 1 : 1
      return { count: newCount, lastActiveDate: today, activeToday: true }
    })
  }

  return { streakCount: streak.count, activeToday: streak.activeToday, markActiveToday }
}
