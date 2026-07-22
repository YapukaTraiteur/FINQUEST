import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AVATARS, useAccount } from '../hooks/useAccount.js'
import { useProgress, getLevelForXp } from '../hooks/useProgress.js'
import { useStreak } from '../hooks/useStreak.js'
import { useHearts } from '../hooks/useHearts.js'
import { useLeague } from '../hooks/useLeague.js'
import { getDivisionById } from '../data/divisions.js'
import { MODULES } from '../data/modules.js'
import EagleMascot from '../components/EagleMascot.jsx'
import Badge from '../components/Badge.jsx'
import Hearts from '../components/Hearts.jsx'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function AvatarPicker({ value, onChange }) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {AVATARS.map((avatar) => (
        <button
          key={avatar}
          type="button"
          onClick={() => onChange(avatar)}
          aria-label={`Choisir l'avatar ${avatar}`}
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-2xl transition-all active:scale-95 ${
            value === avatar
              ? 'bg-primary/25 border-2 border-primary'
              : 'bg-bg-soft border-2 border-transparent'
          }`}
        >
          {avatar}
        </button>
      ))}
    </div>
  )
}

function ProfileForm({ initial, submitLabel, onSubmit, onCancel }) {
  const [pseudo, setPseudo] = useState(initial.pseudo ?? '')
  const [email, setEmail] = useState(initial.email ?? '')
  const [avatar, setAvatar] = useState(initial.avatar ?? AVATARS[0])
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmedPseudo = pseudo.trim()
    if (trimmedPseudo.length < 2 || trimmedPseudo.length > 20) {
      setError('Le pseudo doit contenir entre 2 et 20 caractères.')
      return
    }
    if (email.trim() && !EMAIL_REGEX.test(email.trim())) {
      setError('Cet email ne semble pas valide.')
      return
    }
    setError('')
    onSubmit({ pseudo: trimmedPseudo, email: email.trim(), avatar })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-white/50 uppercase tracking-wide">Avatar</label>
        <AvatarPicker value={avatar} onChange={setAvatar} />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-white/50 uppercase tracking-wide" htmlFor="pseudo">
          Pseudo
        </label>
        <input
          id="pseudo"
          type="text"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          placeholder="Ex : InvestisseurMalin"
          maxLength={20}
          className="w-full rounded-xl bg-bg-soft border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-white/50 uppercase tracking-wide" htmlFor="email">
          Email <span className="normal-case text-white/30">(optionnel)</span>
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="toi@exemple.fr"
          className="w-full rounded-xl bg-bg-soft border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-primary"
        />
      </div>

      {error && <p className="text-sm text-red-400 font-semibold">{error}</p>}

      <div className="flex gap-3 mt-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-2xl bg-white/10 py-3.5 font-extrabold text-white/70 active:scale-[0.98] transition-transform"
          >
            Annuler
          </button>
        )}
        <button
          type="submit"
          className="flex-1 rounded-2xl bg-primary py-3.5 font-extrabold text-white active:scale-[0.98] transition-transform"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  )
}

function ConfirmRow({ label, description, actionLabel, tone = 'danger', onConfirm }) {
  const [confirming, setConfirming] = useState(false)

  return (
    <div className="rounded-2xl bg-bg-card border border-white/10 p-4 flex flex-col gap-3">
      <div>
        <p className="font-bold text-white">{label}</p>
        <p className="text-xs text-white/50 mt-0.5">{description}</p>
      </div>
      {confirming ? (
        <div className="flex flex-col gap-2 animate-pop-in">
          <p className={`text-sm font-bold ${tone === 'danger' ? 'text-red-400' : 'text-gold'}`}>
            Es-tu sûr ? Cette action est irréversible.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setConfirming(false)}
              className="flex-1 rounded-xl bg-white/10 py-2.5 font-bold text-white/70 text-sm active:scale-[0.98] transition-transform"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={() => {
                onConfirm()
                setConfirming(false)
              }}
              className={`flex-1 rounded-xl py-2.5 font-bold text-sm text-white active:scale-[0.98] transition-transform ${
                tone === 'danger' ? 'bg-red-500' : 'bg-gold text-bg'
              }`}
            >
              Confirmer
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setConfirming(true)}
          className={`self-start rounded-xl px-4 py-2 text-sm font-bold active:scale-[0.98] transition-transform ${
            tone === 'danger' ? 'bg-red-500/15 text-red-400' : 'bg-gold/15 text-gold'
          }`}
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export default function Account() {
  const navigate = useNavigate()
  const { account, hasAccount, createAccount, updateAccount, resetProgress, deleteAccount } = useAccount()
  const { xp, isLessonCompleted } = useProgress()
  const { streakCount } = useStreak()
  const { hearts, maxHearts } = useHearts()
  const { division, weeklyXp } = useLeague()
  const [isEditing, setIsEditing] = useState(false)
  const [savedFlash, setSavedFlash] = useState(false)

  const { current } = getLevelForXp(xp)
  const divisionInfo = getDivisionById(division)
  const totalLessons = MODULES.reduce((sum, m) => sum + m.lessonIds.length, 0)
  const completedLessons = MODULES.reduce(
    (sum, m) => sum + m.lessonIds.filter((id) => isLessonCompleted(id)).length,
    0,
  )

  const header = (
    <header className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-card border border-white/10 text-white/70"
        aria-label="Retour"
      >
        ‹
      </button>
      <h1 className="text-xl font-black text-white flex items-center gap-2">
        <span>👤</span> Mon compte
      </h1>
    </header>
  )

  if (!hasAccount) {
    return (
      <div className="flex flex-col gap-6 px-5 pb-24 pt-6">
        {header}
        <div className="flex flex-col items-center gap-3 text-center">
          <EagleMascot mood="excited" size={100} />
          <h2 className="text-xl font-black text-white">Crée ton compte FinQuest</h2>
          <p className="text-sm text-white/60">
            Choisis un avatar et un pseudo pour sauvegarder ton profil et suivre ta progression.
          </p>
        </div>
        <ProfileForm
          initial={{ pseudo: '', email: '', avatar: AVATARS[0] }}
          submitLabel="Créer mon compte 🚀"
          onSubmit={createAccount}
        />
      </div>
    )
  }

  if (isEditing) {
    return (
      <div className="flex flex-col gap-6 px-5 pb-24 pt-6">
        {header}
        <ProfileForm
          initial={account}
          submitLabel="Enregistrer"
          onCancel={() => setIsEditing(false)}
          onSubmit={(data) => {
            updateAccount(data)
            setIsEditing(false)
            setSavedFlash(true)
            setTimeout(() => setSavedFlash(false), 2500)
          }}
        />
      </div>
    )
  }

  const memberSince = new Date(account.createdAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="flex flex-col gap-6 px-5 pb-24 pt-6">
      {header}

      {savedFlash && (
        <div className="rounded-xl bg-primary/15 border border-primary/40 px-4 py-2.5 text-sm font-bold text-primary animate-pop-in">
          Profil mis à jour ✅
        </div>
      )}

      <section className="rounded-2xl bg-bg-card border border-white/10 p-5 flex flex-col items-center gap-3 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-bg-soft border-2 border-primary text-4xl">
          {account.avatar}
        </div>
        <div>
          <p className="text-xl font-black text-white">{account.pseudo}</p>
          {account.email && <p className="text-sm text-white/50">{account.email}</p>}
          <p className="text-xs text-white/40 mt-1">Membre depuis le {memberSince}</p>
        </div>
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="rounded-xl bg-white/10 px-5 py-2 text-sm font-bold text-white/80 active:scale-[0.98] transition-transform"
        >
          Modifier le profil
        </button>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-bg-card border border-white/10 p-4 flex flex-col gap-1.5">
          <span className="text-xs text-white/50 font-bold uppercase tracking-wide">Niveau</span>
          <Badge level={current.name} />
        </div>
        <div className="rounded-2xl bg-bg-card border border-white/10 p-4 flex flex-col gap-1.5">
          <span className="text-xs text-white/50 font-bold uppercase tracking-wide">XP total</span>
          <span className="text-xl font-black text-gold">{xp} XP</span>
        </div>
        <div className="rounded-2xl bg-bg-card border border-white/10 p-4 flex flex-col gap-1.5">
          <span className="text-xs text-white/50 font-bold uppercase tracking-wide">Streak</span>
          <span className="text-xl font-black text-white">🔥 {streakCount} j</span>
        </div>
        <div className="rounded-2xl bg-bg-card border border-white/10 p-4 flex flex-col gap-1.5">
          <span className="text-xs text-white/50 font-bold uppercase tracking-wide">Leçons</span>
          <span className="text-xl font-black text-white">
            {completedLessons}/{totalLessons}
          </span>
        </div>
        <div className="rounded-2xl bg-bg-card border border-white/10 p-4 flex flex-col gap-1.5">
          <span className="text-xs text-white/50 font-bold uppercase tracking-wide">Ligue</span>
          <span className="text-sm font-extrabold text-white">
            {divisionInfo.emoji} {divisionInfo.name}
          </span>
          <span className="text-xs text-white/40">{weeklyXp} XP cette semaine</span>
        </div>
        <div className="rounded-2xl bg-bg-card border border-white/10 p-4 flex flex-col gap-1.5">
          <span className="text-xs text-white/50 font-bold uppercase tracking-wide">Cœurs</span>
          <Hearts hearts={hearts} maxHearts={maxHearts} size="sm" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-white/70 font-bold text-sm uppercase tracking-wide">Zone sensible</h2>
        <ConfirmRow
          label="Réinitialiser ma progression"
          description="Remet à zéro ton XP, ton streak, tes cœurs et ta ligue. Ton compte reste actif."
          actionLabel="Réinitialiser"
          tone="warning"
          onConfirm={() => {
            resetProgress()
            navigate('/')
          }}
        />
        <ConfirmRow
          label="Supprimer mon compte"
          description="Supprime définitivement ton profil et toute ta progression sur cet appareil."
          actionLabel="Supprimer le compte"
          tone="danger"
          onConfirm={() => {
            deleteAccount()
            navigate('/')
          }}
        />
      </section>
    </div>
  )
}
