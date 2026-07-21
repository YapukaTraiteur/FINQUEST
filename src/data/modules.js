export const MODULES = [
  {
    id: 'budget-epargne',
    title: 'Budget & épargne',
    emoji: '💰',
    color: '#4CAF50',
    description: "Maîtrise ton budget et construis ton épargne de sécurité.",
    lessonIds: [
      'budget-101',
      'epargne-precaution',
      'suivi-quotidien',
      'livrets-reglementes',
      'objectifs-epargne',
      'depenses-invisibles',
      'se-payer-en-premier',
    ],
  },
  {
    id: 'investissement',
    title: 'Investissement',
    emoji: '📈',
    color: '#2196F3',
    description: 'PEA, ETF, livrets : fais fructifier ton argent.',
    lessonIds: ['invest-bases', 'pea', 'etf'],
  },
  {
    id: 'credit-emprunt',
    title: 'Crédit & emprunt',
    emoji: '🏦',
    color: '#FF9800',
    description: "Comprends les taux, la capacité d'emprunt et le crédit responsable.",
    lessonIds: ['taux-interet', 'capacite-emprunt', 'credit-responsable'],
  },
  {
    id: 'fiscalite',
    title: 'Fiscalité française',
    emoji: '🧾',
    color: '#E91E63',
    description: 'IR, TMI, PFU : décrypte tes impôts.',
    lessonIds: ['ir-bareme', 'tmi', 'pfu'],
  },
  {
    id: 'finance-entreprise',
    title: "Finance d'entreprise",
    emoji: '🏢',
    color: '#9C27B0',
    description: 'Bilan, BFR, statuts juridiques : les bases pour entreprendre.',
    lessonIds: ['bilan', 'bfr', 'statuts-juridiques'],
  },
  {
    id: 'economie-francaise',
    title: 'Économie française',
    emoji: '🇫🇷',
    color: '#00ACC1',
    description: 'Secteurs, monnaie, CAC 40 : comprends l’économie de ton pays.',
    lessonIds: ['secteurs-activite', 'monnaie-inflation', 'cac40'],
  },
]

export function getModuleById(moduleId) {
  return MODULES.find((m) => m.id === moduleId)
}
