import { useEffect, useState } from 'react'

const STORAGE_KEY = 'finquest_hearts'
export const MAX_HEARTS = 5
const REGEN_INTERVAL_MS = 4 * 60 * 60 * 1000

function loadHearts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const now = Date.now()
    if (!raw) return { hearts: MAX_HEARTS, nextRegenAt: null }

    const parsed = JSON.parse(raw)
    let hearts = parsed.hearts ?? MAX_HEARTS
    let nextRegenAt = parsed.nextRegenAt ?? null

    if (hearts < MAX_HEARTS && nextRegenAt && now >= nextRegenAt) {
      const elapsed = now - nextRegenAt
      const regenerated = 1 + Math.floor(elapsed / REGEN_INTERVAL_MS)
      hearts = Math.min(MAX_HEARTS, hearts + regenerated)
      nextRegenAt = hearts < MAX_HEARTS ? nextRegenAt + regenerated * REGEN_INTERVAL_MS : null
    }
    if (hearts >= MAX_HEARTS) nextRegenAt = null

    return { hearts, nextRegenAt }
  } catch {
    return { hearts: MAX_HEARTS, nextRegenAt: null }
  }
}

export function useHearts() {
  const [state, setState] = useState(loadHearts)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  useEffect(() => {
    if (state.hearts >= MAX_HEARTS) return undefined
    const id = setInterval(() => setState(loadHearts()), 60 * 1000)
    return () => clearInterval(id)
  }, [state.hearts])

  function loseHeart() {
    setState((prev) => {
      const hearts = Math.max(0, prev.hearts - 1)
      const nextRegenAt = prev.nextRegenAt ?? Date.now() + REGEN_INTERVAL_MS
      return { hearts, nextRegenAt }
    })
  }

  return {
    hearts: state.hearts,
    maxHearts: MAX_HEARTS,
    nextRegenAt: state.nextRegenAt,
    loseHeart,
  }
}
