let audioCtx = null

function getContext() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (!AudioContextClass) return null
    if (!audioCtx) audioCtx = new AudioContextClass()
    if (audioCtx.state === 'suspended') audioCtx.resume()
    return audioCtx
  } catch {
    return null
  }
}

function playTone(ctx, { frequency, startTime, duration, type = 'sine', peakGain = 0.2 }) {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(frequency, startTime)
  gain.gain.setValueAtTime(0, startTime)
  gain.gain.linearRampToValueAtTime(peakGain, startTime + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(startTime)
  osc.stop(startTime + duration + 0.02)
}

export function useSoundEffects() {
  function playCorrect() {
    const ctx = getContext()
    if (!ctx) return
    try {
      const now = ctx.currentTime
      playTone(ctx, { frequency: 880, startTime: now, duration: 0.12, type: 'sine', peakGain: 0.25 })
      playTone(ctx, { frequency: 1175, startTime: now + 0.1, duration: 0.18, type: 'sine', peakGain: 0.25 })
    } catch {
      // Audio non disponible : on ignore silencieusement.
    }
  }

  function playIncorrect() {
    const ctx = getContext()
    if (!ctx) return
    try {
      const now = ctx.currentTime
      playTone(ctx, { frequency: 220, startTime: now, duration: 0.16, type: 'square', peakGain: 0.12 })
      playTone(ctx, { frequency: 165, startTime: now + 0.13, duration: 0.22, type: 'square', peakGain: 0.12 })
    } catch {
      // Audio non disponible : on ignore silencieusement.
    }
  }

  return { playCorrect, playIncorrect }
}
