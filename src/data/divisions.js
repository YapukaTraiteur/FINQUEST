export const DIVISIONS = [
  { id: 'bronze', name: 'Bronze', emoji: '🥉', color: '#CD7F32' },
  { id: 'argent', name: 'Argent', emoji: '🥈', color: '#B0BEC5' },
  { id: 'or', name: 'Or', emoji: '🥇', color: '#FFD700' },
  { id: 'saphir', name: 'Saphir', emoji: '💎', color: '#2196F3' },
  { id: 'diamant', name: 'Diamant', emoji: '👑', color: '#9C27B0' },
]

export const BOT_NAMES = [
  'Léa', 'Hugo', 'Emma', 'Louis', 'Chloé', 'Nathan', 'Manon', 'Enzo', 'Camille',
  'Lucas', 'Sarah', 'Adam', 'Inès', 'Rayan', 'Jade', 'Maxime', 'Zoé', 'Noah',
  'Alice', 'Gabriel',
]

export function getDivisionById(id) {
  return DIVISIONS.find((d) => d.id === id) ?? DIVISIONS[0]
}

export function getDivisionIndex(id) {
  const index = DIVISIONS.findIndex((d) => d.id === id)
  return index === -1 ? 0 : index
}
