# FinQuest 🎯

Application web éducative façon Duolingo, dédiée à la finance personnelle pour le grand public français.

## Stack

- React + Vite
- TailwindCSS
- React Router (HashRouter)
- Persistance locale via `localStorage` (progression XP, streak quotidien)

## Démarrer

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
npm run preview
```

## Modules

- 💰 Budget & épargne (2 leçons de démo incluses)
- 📈 Investissement (PEA, ETF, livrets) — à venir
- 🏦 Crédit & emprunt — à venir
- 🧾 Fiscalité française (IR, TMI, PFU) — à venir
- 🏢 Finance d'entreprise (bilan, BFR, statuts) — à venir

## Structure

```
src/
  components/   LessonCard, QuizQuestion, ProgressBar, Badge, Confetti
  pages/        Home, ModuleDetail, Lesson, Results
  data/         lessons.js, modules.js
  hooks/        useProgress.js, useStreak.js
  App.jsx
  main.jsx
```

## Gamification

- XP gagnés par leçon complétée
- Streak quotidien sauvegardé en `localStorage`
- Barre de progression par module
- Badges de niveau : Novice → Épargnant → Investisseur → Expert
