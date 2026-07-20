export const MODULES = [
  {
    id: 'budget-epargne',
    title: 'Budget & épargne',
    emoji: '💰',
    color: '#4CAF50',
    description: "Maîtrise ton budget et construis ton épargne de sécurité.",
    lessonIds: ['budget-101', 'epargne-precaution'],
  },
  {
    id: 'investissement',
    title: 'Investissement',
    emoji: '📈',
    color: '#2196F3',
    description: 'PEA, ETF, livrets : fais fructifier ton argent.',
    lessonIds: [],
  },
  {
    id: 'credit-emprunt',
    title: 'Crédit & emprunt',
    emoji: '🏦',
    color: '#FF9800',
    description: "Comprends les taux, la capacité d'emprunt et le crédit responsable.",
    lessonIds: [],
  },
  {
    id: 'fiscalite',
    title: 'Fiscalité française',
    emoji: '🧾',
    color: '#E91E63',
    description: 'IR, TMI, PFU : décrypte tes impôts.',
    lessonIds: [],
  },
  {
    id: 'finance-entreprise',
    title: "Finance d'entreprise",
    emoji: '🏢',
    color: '#9C27B0',
    description: 'Bilan, BFR, statuts juridiques : les bases pour entreprendre.',
    lessonIds: [],
  },
]

export function getModuleById(moduleId) {
  return MODULES.find((m) => m.id === moduleId)
}
