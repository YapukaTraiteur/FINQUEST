import { useEffect, useState } from 'react'
import { DIVISIONS, BOT_NAMES, getDivisionIndex } from '../data/divisions.js'

const STORAGE_KEY = 'finquest_league'
export const GROUP_SIZE = 10
const PROMOTION_ZONE = 3
const DEMOTION_ZONE = 3

function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return hash
}

function mulberry32(seed) {
  let a = seed
  return function random() {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function getWeekStart(date = new Date()) {
  const d = new Date(date)
  const day = d.getDay()
  const diff = (day === 0 ? -6 : 1) - day
  d.setDate(d.getDate() + diff)
  d.setHours(0, 0, 0, 0)
  return d.toISOString().slice(0, 10)
}

export function getWeekEnd(weekStart) {
  const d = new Date(weekStart)
  d.setDate(d.getDate() + 7)
  return d
}

export function generateBotStandings(divisionId, weekStart) {
  const seed = hashString(`${divisionId}-${weekStart}`)
  const rand = mulberry32(seed)
  const names = [...BOT_NAMES].sort(() => rand() - 0.5).slice(0, GROUP_SIZE - 1)

  const now = Date.now()
  const start = new Date(weekStart).getTime()
  const msPerDay = 24 * 60 * 60 * 1000
  const fraction = Math.min(1, Math.max(0.08, (now - start) / (7 * msPerDay)))

  return names.map((name) => {
    const targetWeeklyXp = 40 + Math.floor(rand() * 280)
    const jitter = 0.85 + rand() * 0.3
    const xp = Math.max(0, Math.round(targetWeeklyXp * fraction * jitter))
    return { name, xp, isBot: true }
  })
}

function settleWeek(division, weekStart, weeklyXp) {
  const bots = generateBotStandings(division, weekStart)
  const standings = [...bots, { name: 'Toi', xp: weeklyXp, isBot: false }].sort((a, b) => b.xp - a.xp)
  const rank = standings.findIndex((s) => !s.isBot)
  const divisionIndex = getDivisionIndex(division)

  let newDivisionIndex = divisionIndex
  let outcome = 'stayed'
  if (rank < PROMOTION_ZONE && divisionIndex < DIVISIONS.length - 1) {
    newDivisionIndex = divisionIndex + 1
    outcome = 'promoted'
  } else if (rank >= GROUP_SIZE - DEMOTION_ZONE && divisionIndex > 0) {
    newDivisionIndex = divisionIndex - 1
    outcome = 'demoted'
  }

  return {
    newDivision: DIVISIONS[newDivisionIndex].id,
    lastResult: {
      outcome,
      rank: rank + 1,
      previousDivision: DIVISIONS[divisionIndex].id,
      newDivision: DIVISIONS[newDivisionIndex].id,
    },
  }
}

function loadLeague() {
  const currentWeekStart = getWeekStart()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return { division: DIVISIONS[0].id, weekStart: currentWeekStart, weeklyXp: 0, lastResult: null }
    }
    const parsed = JSON.parse(raw)
    if (parsed.weekStart === currentWeekStart) {
      return {
        division: parsed.division ?? DIVISIONS[0].id,
        weekStart: currentWeekStart,
        weeklyXp: parsed.weeklyXp ?? 0,
        lastResult: parsed.lastResult ?? null,
      }
    }

    const { newDivision, lastResult } = settleWeek(
      parsed.division ?? DIVISIONS[0].id,
      parsed.weekStart,
      parsed.weeklyXp ?? 0,
    )
    return { division: newDivision, weekStart: currentWeekStart, weeklyXp: 0, lastResult }
  } catch {
    return { division: DIVISIONS[0].id, weekStart: currentWeekStart, weeklyXp: 0, lastResult: null }
  }
}

export function useLeague() {
  const [state, setState] = useState(loadLeague)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  useEffect(() => {
    const id = setInterval(() => {
      setState((prev) => {
        const currentWeekStart = getWeekStart()
        return currentWeekStart === prev.weekStart ? prev : loadLeague()
      })
    }, 5 * 60 * 1000)
    return () => clearInterval(id)
  }, [])

  function addWeeklyXp(amount) {
    setState((prev) => ({ ...prev, weeklyXp: prev.weeklyXp + amount }))
  }

  function clearLastResult() {
    setState((prev) => ({ ...prev, lastResult: null }))
  }

  return {
    division: state.division,
    weeklyXp: state.weeklyXp,
    weekStart: state.weekStart,
    weekEndsAt: getWeekEnd(state.weekStart),
    lastResult: state.lastResult,
    addWeeklyXp,
    clearLastResult,
  }
}
