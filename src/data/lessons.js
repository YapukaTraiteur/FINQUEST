export const LESSONS = {
  'budget-101': {
    id: 'budget-101',
    moduleId: 'budget-epargne',
    title: 'Les bases du budget',
    emoji: '💰',
    xp: 20,
    intro:
      "Un budget, c'est simplement la comparaison entre ce que tu gagnes et ce que tu dépenses. " +
      "La règle 50/30/20 est un repère simple : 50% pour tes besoins essentiels, 30% pour tes envies, " +
      "et 20% pour l'épargne. Suivre son budget chaque mois évite les mauvaises surprises en fin de mois. " +
      "Ce n'est pas une contrainte, c'est un outil de liberté financière.",
    questions: [
      {
        id: 'q1',
        question: "Dans la règle 50/30/20, à quoi correspondent les 20% ?",
        options: [
          "Aux loisirs et sorties",
          "À l'épargne et au remboursement de dettes",
          "Au loyer et aux factures",
          "Aux impôts",
        ],
        correctIndex: 1,
        explanation:
          "Les 20% sont réservés à l'épargne (ou au remboursement de dettes) : c'est la part qui construit ton avenir financier.",
      },
      {
        id: 'q2',
        question: 'Quel est le principal avantage de suivre un budget mensuel ?',
        options: [
          "Cela garantit de devenir riche rapidement",
          "Cela permet d'anticiper ses dépenses et d'éviter les découverts",
          "Cela supprime tous les impôts",
          "Cela n'a aucun intérêt si on a un bon salaire",
        ],
        correctIndex: 1,
        explanation:
          'Un budget permet avant tout de visualiser ses flux financiers pour anticiper et éviter les imprévus, quel que soit le niveau de revenu.',
      },
      {
        id: 'q3',
        question: 'Que représentent les 50% dans la règle 50/30/20 ?',
        options: [
          'Les besoins essentiels (loyer, courses, factures)',
          "Les vacances de l'année",
          'Les investissements en bourse',
          'Les cadeaux et sorties',
        ],
        correctIndex: 0,
        explanation:
          "Les 50% couvrent les besoins essentiels : logement, alimentation, transport, factures — tout ce qui est indispensable.",
      },
    ],
  },
  'epargne-precaution': {
    id: 'epargne-precaution',
    moduleId: 'budget-epargne',
    title: "L'épargne de précaution",
    emoji: '🛟',
    xp: 25,
    intro:
      "L'épargne de précaution est une réserve d'argent disponible immédiatement pour faire face aux imprévus " +
      '(panne de voiture, perte de revenu, frais médicaux). Les experts recommandent d\'épargner entre 3 et 6 mois ' +
      "de dépenses courantes. Elle doit être placée sur un support sûr et disponible à tout moment, comme un livret A. " +
      "C'est la première brique à construire avant d'investir.",
    questions: [
      {
        id: 'q1',
        question: "Quel est le rôle principal de l'épargne de précaution ?",
        options: [
          'Faire fructifier son argent rapidement',
          'Payer moins d’impôts',
          'Faire face aux imprévus sans s’endetter',
          "Investir en actions à long terme",
        ],
        correctIndex: 2,
        explanation:
          "L'épargne de précaution sert de coussin de sécurité pour absorber les imprévus sans avoir à emprunter dans l'urgence.",
      },
      {
        id: 'q2',
        question: 'Combien de mois de dépenses est-il généralement recommandé de mettre de côté ?',
        options: ['1 semaine', '3 à 6 mois', '2 ans', '10 ans'],
        correctIndex: 1,
        explanation:
          "L'équivalent de 3 à 6 mois de dépenses courantes est le repère classique pour une épargne de précaution suffisante.",
      },
      {
        id: 'q3',
        question: 'Sur quel type de support l’épargne de précaution doit-elle idéalement être placée ?',
        options: [
          'Des actions volatiles',
          'De la cryptomonnaie',
          'Un support sûr et disponible immédiatement, comme un livret A',
          'Un bien immobilier',
        ],
        correctIndex: 2,
        explanation:
          "La disponibilité immédiate et la sécurité du capital priment ici sur la performance : le livret A est l'exemple type.",
      },
    ],
  },
}

export function getLessonById(lessonId) {
  return LESSONS[lessonId]
}
