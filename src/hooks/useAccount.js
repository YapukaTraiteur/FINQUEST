import { useEffect, useState } from 'react'

const STORAGE_KEY = 'finquest_account'
const PROGRESS_KEYS = ['finquest_progress', 'finquest_streak', 'finquest_hearts', 'finquest_league']

export const AVATARS = ['🦅', '🦉', '🦁', '🐯', '🐻', '🦊', '🐼', '🐨', '🐧', '🦈', '🐺', '🦄']

function loadAccount() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed.pseudo) return null
    return {
      pseudo: parsed.pseudo,
      email: parsed.email ?? '',
      avatar: parsed.avatar ?? AVATARS[0],
      createdAt: parsed.createdAt ?? new Date().toISOString(),
    }
  } catch {
    return null
  }
}

export function useAccount() {
  const [account, setAccount] = useState(loadAccount)

  useEffect(() => {
    if (account) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(account))
    }
  }, [account])

  function createAccount({ pseudo, email, avatar }) {
    const newAccount = {
      pseudo: pseudo.trim(),
      email: (email ?? '').trim(),
      avatar: avatar ?? AVATARS[0],
      createdAt: new Date().toISOString(),
    }
    setAccount(newAccount)
    return newAccount
  }

  function updateAccount(partial) {
    setAccount((prev) => {
      if (!prev) return prev
      const next = { ...prev, ...partial }
      if (typeof next.pseudo === 'string') next.pseudo = next.pseudo.trim()
      if (typeof next.email === 'string') next.email = next.email.trim()
      return next
    })
  }

  function resetProgress() {
    for (const key of PROGRESS_KEYS) localStorage.removeItem(key)
  }

  function deleteAccount() {
    for (const key of PROGRESS_KEYS) localStorage.removeItem(key)
    localStorage.removeItem(STORAGE_KEY)
    setAccount(null)
  }

  return {
    account,
    hasAccount: Boolean(account),
    createAccount,
    updateAccount,
    resetProgress,
    deleteAccount,
  }
}
