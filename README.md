# FinQuest 🎯

Application web éducative façon Duolingo, dédiée à la finance personnelle pour le grand public français.

## Stack

- React + Vite
- TailwindCSS
- React Router (HashRouter)
- Persistance locale via `localStorage` (progression XP, streak quotidien, cœurs)

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

Chaque cours existe en 3 niveaux de difficulté (Niveau 1 → 2 → 3, XP croissant).

- 💰 Budget & épargne (7 cours × 3 niveaux = 21 leçons)
- 📈 Investissement (PEA, ETF, livrets) (3 cours × 3 niveaux = 9 leçons)
- 🏦 Crédit & emprunt (3 cours × 3 niveaux = 9 leçons)
- 🧾 Fiscalité française (IR, TMI, PFU) (3 cours × 3 niveaux = 9 leçons)
- 🏢 Finance d'entreprise (bilan, BFR, statuts) (3 cours × 3 niveaux = 9 leçons)
- 🇫🇷 Économie française (secteurs, monnaie, CAC 40) (3 cours × 3 niveaux = 9 leçons)

Soit 66 leçons complètes au total (6 questions chacune).

## Structure

```
src/
  components/   LessonPath, QuizQuestion, ProgressBar, Badge, Confetti, Hearts, EagleMascot
  pages/        Home, ModuleDetail, Lesson, Results, Division
  data/         lessons.js, modules.js, divisions.js
  hooks/        useProgress.js, useStreak.js, useHearts.js, useLeague.js, useSoundEffects.js
  App.jsx
  main.jsx
```

## Gamification

- XP gagnés par leçon complétée
- Streak quotidien sauvegardé en `localStorage`
- Barre de progression par module
- Badges de niveau : Novice → Épargnant → Investisseur → Expert
- Mascotte aigle (façon Duo) qui réagit aux bonnes/mauvaises réponses
- Bruitages (Web Audio API) sur bonne/mauvaise réponse
- Points de vie (cœurs) : 5 cœurs max, -1 par mauvaise réponse, régénération
  automatique (1 cœur toutes les 4h). Plus de cœurs = leçon bloquée jusqu'à
  régénération.
- Ligues façon Duolingo : classement hebdomadaire (10 participants, dont 9
  concurrents simulés localement) basé sur l'XP gagné dans la semaine.
  Top 3 = promotion à la division supérieure, 3 derniers = relégation.
  5 divisions : Bronze → Argent → Or → Saphir → Diamant.
- Chemin de leçons façon Duolingo (`LessonPath`) : parcours sinueux avec
  nœuds reliés par un tracé, progression séquentielle verrouillée (chaque
  leçon débloque la suivante une fois complétée), avec garde-fou côté page
  Lesson pour empêcher l'accès direct à une leçon verrouillée par URL.
