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
      {
        id: 'q4',
        question: "Quel est le but principal d'un budget mensuel ?",
        options: [
          'Comparer ce que l’on gagne et ce que l’on dépense',
          'Payer plus d’impôts',
          'Emprunter davantage',
          'Éviter de travailler',
        ],
        correctIndex: 0,
        explanation:
          'Un budget sert avant tout à comparer revenus et dépenses pour garder le contrôle de ses finances.',
      },
      {
        id: 'q5',
        question: 'Que représentent les 30% dans la règle 50/30/20 ?',
        options: [
          'Les envies et loisirs',
          'Les besoins essentiels',
          'L’épargne',
          'Les impôts',
        ],
        correctIndex: 0,
        explanation:
          'Les 30% sont dédiés aux dépenses de plaisir et de loisir, une fois les besoins essentiels couverts.',
      },
      {
        id: 'q6',
        question: 'Pourquoi dit-on que le budget est un outil de liberté plutôt qu’une contrainte ?',
        options: [
          'Parce qu’il permet de faire des choix éclairés sur son argent',
          'Parce qu’il supprime toutes les dépenses',
          'Parce qu’il est imposé par la loi',
          'Parce qu’il garantit de devenir riche',
        ],
        correctIndex: 0,
        explanation:
          'En donnant de la visibilité sur ses finances, le budget permet de faire des choix éclairés plutôt que de subir ses dépenses.',
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
      {
        id: 'q4',
        question: "Que peut financer l'épargne de précaution ?",
        options: [
          'Une panne de voiture ou des frais médicaux imprévus',
          'Un investissement en actions risqué',
          'Le paiement d’impôts supplémentaires',
          "L'achat d'une résidence secondaire",
        ],
        correctIndex: 0,
        explanation:
          'Elle est destinée à couvrir les imprévus du quotidien, pas des projets ou investissements planifiés.',
      },
      {
        id: 'q5',
        question: "Que risque-t-on si l'on n'a pas d'épargne de précaution ?",
        options: [
          "Devoir s'endetter en urgence face à un imprévu",
          'Payer moins d’impôts',
          'Recevoir plus d’aides de l’État',
          'Rien de particulier',
        ],
        correctIndex: 0,
        explanation:
          "Sans épargne de précaution, un imprévu financier oblige souvent à emprunter dans l'urgence, parfois à des conditions défavorables.",
      },
      {
        id: 'q6',
        question: "Avant d'investir en bourse, que doit-on généralement avoir constitué ?",
        options: [
          'Une épargne de précaution suffisante',
          'Un crédit immobilier',
          'Un compte professionnel',
          'Une carte de crédit illimitée',
        ],
        correctIndex: 0,
        explanation:
          "L'épargne de précaution est la première brique à construire avant de prendre des risques sur les marchés financiers.",
      },
    ],
  },
  'suivi-quotidien': {
    id: 'suivi-quotidien',
    moduleId: 'budget-epargne',
    title: 'Suivre son budget au quotidien',
    emoji: '📱',
    xp: 20,
    intro:
      "Suivre son budget au quotidien permet de repérer immédiatement les écarts entre ce qui était prévu " +
      'et ce qui est réellement dépensé. Noter ses dépenses dans une application, un tableur ou un simple ' +
      'carnet aide à prendre conscience de ses habitudes de consommation. Classer ses dépenses par catégories ' +
      '(logement, alimentation, loisirs) permet d’identifier facilement les postes à ajuster. Un suivi ' +
      'régulier, même de quelques minutes par semaine, vaut mieux qu’un bilan une fois par an.',
    questions: [
      {
        id: 'q1',
        question: 'Quel est l’intérêt principal de suivre son budget au quotidien ?',
        options: [
          'Repérer immédiatement les écarts entre prévisions et dépenses réelles',
          'Éviter totalement de dépenser de l’argent',
          'Supprimer le besoin de gagner un revenu',
          'Payer moins d’impôts automatiquement',
        ],
        correctIndex: 0,
        explanation:
          'Un suivi régulier permet de détecter rapidement un écart avec ce qui était prévu, avant qu’il ne s’aggrave.',
      },
      {
        id: 'q2',
        question: 'Pourquoi classer ses dépenses par catégories ?',
        options: [
          'Pour identifier facilement les postes à ajuster',
          'Cela n’a aucune utilité pratique',
          'Uniquement pour faire plaisir à sa banque',
          'Pour augmenter automatiquement ses revenus',
        ],
        correctIndex: 0,
        explanation:
          'Classer ses dépenses (logement, alimentation, loisirs...) rend visible les postes sur lesquels il est possible d’agir.',
      },
      {
        id: 'q3',
        question: 'À quelle fréquence est-il conseillé de suivre son budget ?',
        options: [
          'Une fois tous les 5 ans',
          'Jamais, ce n’est pas utile',
          'Régulièrement, même quelques minutes par semaine',
          'Uniquement le jour de la retraite',
        ],
        correctIndex: 2,
        explanation:
          'Un suivi court mais régulier est plus efficace qu’un bilan isolé une fois par an, car il permet d’ajuster ses habitudes en continu.',
      },
      {
        id: 'q4',
        question: 'Quel outil peut-on utiliser pour suivre ses dépenses ?',
        options: [
          'Une application, un tableur ou un simple carnet',
          'Uniquement un conseiller bancaire',
          "Un logiciel de comptabilité d'entreprise",
          "Aucun outil n'est utile",
        ],
        correctIndex: 0,
        explanation:
          'Le suivi peut se faire avec des outils simples et accessibles à tous, adaptés à ses préférences.',
      },
      {
        id: 'q5',
        question: 'Que permet de visualiser un suivi budgétaire régulier ?',
        options: [
          'Ses habitudes de consommation réelles',
          'Le taux d’intérêt de sa banque',
          'Le montant de ses impôts futurs',
          'Le cours de la bourse',
        ],
        correctIndex: 0,
        explanation: 'Le suivi régulier révèle des habitudes de consommation parfois invisibles au quotidien.',
      },
      {
        id: 'q6',
        question: "Que se passe-t-il si l'on ne suit jamais son budget ?",
        options: [
          'On risque de perdre le contrôle de ses dépenses sans s’en rendre compte',
          'On économise automatiquement plus d’argent',
          'Cela n’a aucune conséquence',
          'Ses revenus augmentent automatiquement',
        ],
        correctIndex: 0,
        explanation:
          'Sans suivi, les écarts entre prévisions et dépenses réelles passent inaperçus jusqu’à ce qu’ils deviennent problématiques.',
      },
    ],
  },
  'livrets-reglementes': {
    id: 'livrets-reglementes',
    moduleId: 'budget-epargne',
    title: "Les livrets d'épargne réglementés",
    emoji: '📗',
    xp: 25,
    intro:
      "En France, plusieurs livrets d'épargne réglementés par l'État permettent d'épargner en toute sécurité " +
      'avec des intérêts exonérés d’impôt. Le Livret A est le plus connu : accessible à tous, plafonné à ' +
      '22 950 €, avec un taux fixé par les pouvoirs publics. Le LDDS (Livret de Développement Durable et ' +
      'Solidaire) fonctionne de manière similaire avec un plafond de 12 000 €. Le LEP (Livret d’Épargne ' +
      'Populaire) offre un taux plus avantageux mais est réservé aux foyers aux revenus modestes.',
    questions: [
      {
        id: 'q1',
        question: 'Quel est le plafond du Livret A ?',
        options: ['12 000 €', '22 950 €', '150 000 €', "Il n'y a pas de plafond"],
        correctIndex: 1,
        explanation: 'Le Livret A est plafonné à 22 950 € pour les particuliers.',
      },
      {
        id: 'q2',
        question: 'Quel est le principal avantage fiscal des livrets réglementés comme le Livret A ?',
        options: [
          'Les intérêts sont exonérés d’impôt',
          'Ils rapportent un taux garanti de 10%',
          'Ils permettent de déduire ses impôts sur le revenu',
          'Ils sont réservés aux entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Les intérêts des livrets réglementés comme le Livret A ou le LDDS ne sont soumis ni à l’impôt sur le revenu ni aux prélèvements sociaux.',
      },
      {
        id: 'q3',
        question: 'À qui le LEP est-il réservé ?',
        options: [
          'À tout le monde sans condition',
          'Uniquement aux entreprises',
          'Aux foyers aux revenus modestes',
          'Aux personnes de plus de 70 ans uniquement',
        ],
        correctIndex: 2,
        explanation:
          'Le LEP est soumis à une condition de ressources : il est réservé aux foyers dont les revenus ne dépassent pas un certain plafond.',
      },
      {
        id: 'q4',
        question: 'Quel est le plafond du LDDS ?',
        options: ['12 000 €', '22 950 €', '150 000 €', 'Aucun plafond'],
        correctIndex: 0,
        explanation: 'Le LDDS est plafonné à 12 000 € de versements.',
      },
      {
        id: 'q5',
        question: 'Les livrets réglementés comme le Livret A garantissent-ils la disponibilité de l’argent ?',
        options: [
          'Oui, les fonds sont disponibles à tout moment',
          'Non, l’argent est bloqué 5 ans',
          'Non, il faut un préavis de 6 mois',
          'Cela dépend de la banque',
        ],
        correctIndex: 0,
        explanation:
          'Les livrets réglementés offrent une disponibilité immédiate des fonds, contrairement à d’autres placements bloqués.',
      },
      {
        id: 'q6',
        question: 'Pourquoi le taux du Livret A est-il fixé par les pouvoirs publics ?',
        options: [
          'Pour garantir un cadre homogène et protecteur pour tous les épargnants',
          'Pour que chaque banque fixe un taux différent',
          'Parce que c’est un placement à risque',
          'Pour limiter les dépôts des ménages',
        ],
        correctIndex: 0,
        explanation:
          'Le taux réglementé assure les mêmes conditions à tous les épargnants, quelle que soit leur banque.',
      },
    ],
  },
  'objectifs-epargne': {
    id: 'objectifs-epargne',
    moduleId: 'budget-epargne',
    title: "Fixer des objectifs d'épargne",
    emoji: '🎯',
    xp: 25,
    intro:
      'Épargner sans objectif précis rend l’effort difficile à maintenir dans la durée. Un bon objectif ' +
      'd’épargne doit être concret, chiffré et daté : par exemple, 2 000 € pour un voyage dans 12 mois plutôt ' +
      'que « épargner plus ». Diviser un objectif en versements mensuels réguliers rend la démarche plus ' +
      'simple et plus motivante. Séparer ses objectifs (épargne de précaution, projets, retraite) sur des ' +
      'supports différents aide aussi à ne pas tout mélanger.',
    questions: [
      {
        id: 'q1',
        question: 'Pourquoi un objectif d’épargne doit-il être chiffré et daté ?',
        options: [
          'Cela rend l’objectif plus concret et plus facile à atteindre',
          'La loi l’exige pour tous les livrets',
          'Cela n’a aucune influence sur la motivation',
          'Pour payer plus de frais bancaires',
        ],
        correctIndex: 0,
        explanation:
          'Un objectif chiffré et daté (« 2 000 € en 12 mois ») est bien plus motivant et actionnable qu’une intention vague comme « épargner plus ».',
      },
      {
        id: 'q2',
        question: 'Que permet de diviser un objectif d’épargne en versements mensuels ?',
        options: [
          'Rendre la démarche plus simple et régulière',
          'Multiplier automatiquement le montant final',
          'Supprimer le besoin d’épargner',
          'Augmenter les impôts sur l’épargne',
        ],
        correctIndex: 0,
        explanation:
          'Découper un objectif en petits versements mensuels réguliers rend l’effort d’épargne plus facile à tenir dans la durée.',
      },
      {
        id: 'q3',
        question: 'Pourquoi séparer ses objectifs d’épargne sur des supports différents ?',
        options: [
          'Pour ne pas tout mélanger et mieux suivre chaque projet',
          'C’est interdit de les regrouper par la loi',
          'Cela n’apporte aucun bénéfice',
          'Pour payer plus d’impôts',
        ],
        correctIndex: 0,
        explanation:
          'Séparer épargne de précaution, projets et retraite sur des supports différents permet de suivre clairement l’avancement de chaque objectif.',
      },
      {
        id: 'q4',
        question: 'Que risque un objectif d’épargne vague comme "épargner plus" ?',
        options: [
          'D’être difficile à tenir dans la durée faute de repère concret',
          'De rapporter automatiquement plus d’intérêts',
          'D’être interdit par la loi',
          'De réduire ses impôts',
        ],
        correctIndex: 0,
        explanation:
          'Sans montant ni échéance précis, il est difficile de mesurer sa progression et de rester motivé.',
      },
      {
        id: 'q5',
        question: 'Quel est l’intérêt de revoir régulièrement ses objectifs d’épargne ?',
        options: [
          'S’assurer qu’ils restent adaptés à sa situation',
          'Payer plus de frais bancaires',
          'Perdre le bénéfice de son épargne',
          'Aucun intérêt particulier',
        ],
        correctIndex: 0,
        explanation:
          'La situation personnelle évolue, il est donc utile d’ajuster régulièrement ses objectifs d’épargne.',
      },
      {
        id: 'q6',
        question: 'Pourquoi automatiser les versements vers un objectif d’épargne est-il utile ?',
        options: [
          'Cela évite de devoir y penser chaque mois et rend l’épargne régulière',
          'Cela supprime totalement le besoin d’épargner',
          'Cela augmente les impôts',
          'Cela bloque définitivement l’argent',
        ],
        correctIndex: 0,
        explanation:
          'L’automatisation rend l’effort d’épargne plus simple à maintenir dans la durée, sans dépendre de la volonté.',
      },
    ],
  },
  'depenses-invisibles': {
    id: 'depenses-invisibles',
    moduleId: 'budget-epargne',
    title: 'Repérer les dépenses invisibles',
    emoji: '🕵️',
    xp: 25,
    intro:
      'Les dépenses invisibles sont de petites sommes régulières qui passent souvent inaperçues mais qui ' +
      'pèsent lourd sur l’année : abonnements oubliés, frais bancaires, achats impulsifs en ligne. Beaucoup ' +
      'de personnes payent chaque mois pour des services qu’elles n’utilisent plus, comme un streaming ou ' +
      'une salle de sport. Relire régulièrement ses relevés bancaires permet d’identifier ces prélèvements ' +
      'récurrents et de les résilier si besoin. Cette chasse aux petites fuites peut libérer un budget non ' +
      'négligeable, sans réduire son niveau de vie.',
    questions: [
      {
        id: 'q1',
        question: 'Que sont les "dépenses invisibles" ?',
        options: [
          'De petites sommes régulières qui passent souvent inaperçues',
          'Uniquement les gros achats exceptionnels',
          'Des dépenses qui n’existent pas réellement',
          'Les impôts prélevés à la source',
        ],
        correctIndex: 0,
        explanation:
          'Ce sont des petits montants récurrents (abonnements, frais bancaires...) qui passent souvent inaperçus mais s’accumulent sur l’année.',
      },
      {
        id: 'q2',
        question: 'Que faut-il faire régulièrement pour repérer ces dépenses ?',
        options: [
          'Relire ses relevés bancaires',
          'Ignorer complètement ses comptes',
          'Changer de banque chaque mois',
          'Arrêter de consulter ses comptes',
        ],
        correctIndex: 0,
        explanation:
          'Relire régulièrement ses relevés bancaires permet de repérer les prélèvements récurrents oubliés et de les résilier si besoin.',
      },
      {
        id: 'q3',
        question: 'Quel est l’intérêt de traquer les abonnements inutilisés ?',
        options: [
          'Libérer du budget sans réduire son niveau de vie',
          'Payer plus de frais bancaires',
          'Augmenter ses impôts',
          'Cela n’a aucun intérêt financier',
        ],
        correctIndex: 0,
        explanation:
          'Résilier des abonnements qu’on n’utilise plus permet de dégager du budget supplémentaire sans rien sacrifier à son quotidien.',
      },
      {
        id: 'q4',
        question: 'Quel exemple illustre une dépense invisible typique ?',
        options: [
          'Un abonnement de streaming oublié',
          'L’achat d’une voiture neuve',
          'Le paiement du loyer',
          'Un investissement en bourse',
        ],
        correctIndex: 0,
        explanation:
          'Les abonnements oubliés sont l’exemple classique de dépense invisible qui s’accumule sans qu’on y prête attention.',
      },
      {
        id: 'q5',
        question: 'Pourquoi ces petites dépenses sont-elles qualifiées d’"invisibles" ?',
        options: [
          'Parce qu’elles sont individuellement faibles mais passent inaperçues',
          'Parce qu’elles n’apparaissent jamais sur les relevés bancaires',
          'Parce qu’elles sont illégales',
          'Parce qu’elles concernent uniquement les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Prises isolément, ces dépenses semblent négligeables, mais leur récurrence les rend invisibles tout en pesant sur le budget annuel.',
      },
      {
        id: 'q6',
        question: 'Que peut-on faire après avoir identifié un abonnement inutile ?',
        options: [
          'Le résilier pour libérer du budget',
          'L’ignorer, cela n’a pas d’importance',
          'Payer plus cher pour le garder',
          'Contracter un nouveau crédit',
        ],
        correctIndex: 0,
        explanation:
          'Résilier les abonnements inutilisés est la façon la plus directe de reprendre le contrôle de ces dépenses invisibles.',
      },
    ],
  },
  'se-payer-en-premier': {
    id: 'se-payer-en-premier',
    moduleId: 'budget-epargne',
    title: 'Se payer en premier',
    emoji: '💵',
    xp: 20,
    intro:
      'Le principe « se payer en premier » consiste à mettre de côté une partie de ses revenus dès leur ' +
      'réception, avant de couvrir ses autres dépenses. Concrètement, cela passe souvent par un virement ' +
      'automatique programmé vers un compte épargne le jour du versement du salaire. Cette méthode inverse ' +
      'la logique classique qui consiste à épargner ce qu’il reste en fin de mois, souvent proche de zéro. ' +
      'Automatiser l’épargne réduit l’effort de volonté nécessaire et rend l’habitude beaucoup plus durable.',
    questions: [
      {
        id: 'q1',
        question: 'En quoi consiste le principe "se payer en premier" ?',
        options: [
          'Mettre de côté une partie de ses revenus dès leur réception',
          'Dépenser tout son salaire avant d’épargner',
          'Attendre la fin du mois pour épargner ce qu’il reste',
          'Emprunter pour épargner davantage',
        ],
        correctIndex: 0,
        explanation:
          'Le principe inverse la logique habituelle : on épargne d’abord, dès la réception du revenu, avant de dépenser le reste.',
      },
      {
        id: 'q2',
        question: 'Comment automatiser concrètement cette méthode ?',
        options: [
          'Avec un virement automatique programmé le jour du salaire',
          'En demandant à sa banque de tout bloquer',
          'En attendant d’y penser chaque mois',
          'Ce n’est pas automatisable',
        ],
        correctIndex: 0,
        explanation:
          'Programmer un virement automatique vers un compte épargne dès la réception du salaire est la façon la plus simple d’appliquer ce principe.',
      },
      {
        id: 'q3',
        question: 'Quel est l’avantage principal d’automatiser son épargne ?',
        options: [
          'Réduire l’effort de volonté et rendre l’habitude durable',
          'Augmenter ses impôts automatiquement',
          'Supprimer le besoin de suivre son budget',
          'Cela n’apporte aucun bénéfice réel',
        ],
        correctIndex: 0,
        explanation:
          'En automatisant l’épargne, on ne dépend plus de sa volonté chaque mois : l’habitude devient durable sans effort supplémentaire.',
      },
      {
        id: 'q4',
        question: 'Quelle est la logique classique que ce principe cherche à inverser ?',
        options: [
          'Épargner seulement ce qu’il reste en fin de mois',
          'Épargner avant de recevoir son salaire',
          'Ne jamais épargner',
          'Épargner uniquement une fois par an',
        ],
        correctIndex: 0,
        explanation:
          'La méthode classique consiste à épargner ce qu’il reste après les dépenses, souvent un montant faible ou nul.',
      },
      {
        id: 'q5',
        question: 'Quel type de compte est généralement utilisé pour recevoir ce virement automatique ?',
        options: [
          'Un compte épargne séparé du compte courant',
          'Un compte professionnel uniquement',
          'Un compte à l’étranger obligatoirement',
          'Aucun compte n’est nécessaire',
        ],
        correctIndex: 0,
        explanation:
          'Un compte épargne dédié évite de mélanger l’argent mis de côté avec celui destiné aux dépenses courantes.',
      },
      {
        id: 'q6',
        question: 'Ce principe est-il compatible avec un petit budget ?',
        options: [
          'Oui, même de petits montants réguliers permettent de construire une épargne',
          'Non, il faut un revenu élevé pour l’appliquer',
          'Non, il est réservé aux entreprises',
          'Oui, mais uniquement une fois par an',
        ],
        correctIndex: 0,
        explanation:
          'Même de faibles montants épargnés régulièrement finissent par constituer une épargne significative dans la durée.',
      },
    ],
  },
  'invest-bases': {
    id: 'invest-bases',
    moduleId: 'investissement',
    title: "Les bases de l'investissement",
    emoji: '📊',
    xp: 20,
    intro:
      "Investir consiste à placer son argent dans un actif (actions, obligations, immobilier) dans l'espoir " +
      "d'obtenir un rendement supérieur à celui de l'épargne classique. Plus le rendement espéré est élevé, plus " +
      "le risque de perte est généralement important : c'est le couple rendement/risque. L'horizon de placement " +
      "est essentiel : plus il est long, plus on peut se permettre de prendre des risques, car on a le temps " +
      "d'encaisser les baisses temporaires. Avant d'investir, il faut donc définir ses objectifs et le temps dont on dispose.",
    questions: [
      {
        id: 'q1',
        question: 'Quel principe résume la relation entre rendement et risque ?',
        options: [
          "Plus le rendement espéré est élevé, plus le risque est généralement important",
          'Le rendement est toujours garanti quel que soit le placement',
          "Le risque n'a aucun lien avec le rendement",
          'Un placement sans risque offre toujours le meilleur rendement',
        ],
        correctIndex: 0,
        explanation:
          "C'est le couple rendement/risque : viser un rendement plus élevé implique généralement d'accepter un risque de perte plus important.",
      },
      {
        id: 'q2',
        question: "Pourquoi l'horizon de placement est-il important avant d'investir ?",
        options: [
          "Il n'a aucune importance",
          'Un horizon long permet d’encaisser les baisses temporaires du marché',
          'Il détermine uniquement le montant des frais bancaires',
          'Il empêche de jamais perdre de l’argent',
        ],
        correctIndex: 1,
        explanation:
          "Un horizon de placement long laisse le temps aux marchés de traverser les baisses temporaires et de se redresser.",
      },
      {
        id: 'q3',
        question: "Que faut-il définir avant de commencer à investir ?",
        options: [
          'Rien, il suffit de choisir le placement le plus rentable',
          'Ses objectifs et son horizon de placement',
          'Uniquement le nom de sa banque',
          'Le cours de bourse du jour',
        ],
        correctIndex: 1,
        explanation:
          "Définir ses objectifs et son horizon de placement permet de choisir des supports d'investissement adaptés à sa situation.",
      },
      {
        id: 'q4',
        question: 'Que signifie diversifier ses investissements ?',
        options: [
          'Répartir son argent sur plusieurs actifs pour réduire le risque',
          'Investir tout son argent dans une seule action',
          'Ne jamais investir',
          'Emprunter pour investir davantage',
        ],
        correctIndex: 0,
        explanation:
          'La diversification permet de ne pas dépendre de la performance d’un seul actif, ce qui réduit le risque global.',
      },
      {
        id: 'q5',
        question: 'Pourquoi ne faut-il pas investir de l’argent dont on pourrait avoir besoin à court terme ?',
        options: [
          'Car les marchés peuvent baisser temporairement et forcer une vente à perte',
          'Car cela est interdit par la loi',
          'Car cela augmente automatiquement les impôts',
          'Cela n’a aucune importance',
        ],
        correctIndex: 0,
        explanation:
          'Investir de l’argent nécessaire à court terme expose au risque de devoir vendre au mauvais moment, en cas de baisse des marchés.',
      },
      {
        id: 'q6',
        question: 'Quel est le rôle de l’épargne de précaution avant de commencer à investir ?',
        options: [
          'Couvrir les imprévus sans avoir à retirer ses investissements',
          'Remplacer totalement les investissements',
          'Payer les frais de courtage',
          'Aucun rôle particulier',
        ],
        correctIndex: 0,
        explanation:
          'Une épargne de précaution évite de devoir revendre ses investissements en catastrophe en cas de coup dur.',
      },
    ],
  },
  pea: {
    id: 'pea',
    moduleId: 'investissement',
    title: "Le PEA (Plan d'Épargne en Actions)",
    emoji: '📜',
    xp: 25,
    intro:
      "Le Plan d'Épargne en Actions (PEA) est une enveloppe fiscale qui permet d'investir dans des actions " +
      'européennes tout en bénéficiant d’une fiscalité avantageuse. Après 5 ans de détention, les gains ' +
      "(plus-values et dividendes) sont exonérés d'impôt sur le revenu, seuls les prélèvements sociaux restent " +
      'dus. Le plafond de versement est de 150 000 € pour un PEA classique. C’est un outil privilégié pour ' +
      'investir à long terme en actions tout en optimisant sa fiscalité.',
    questions: [
      {
        id: 'q1',
        question: 'Quel est le principal avantage fiscal du PEA après 5 ans ?',
        options: [
          "Les gains sont exonérés d'impôt sur le revenu (hors prélèvements sociaux)",
          "Il n'y a plus aucune taxe, y compris sociale",
          'Les versements sont déductibles du revenu imposable',
          'Il permet d’éviter la TVA',
        ],
        correctIndex: 0,
        explanation:
          "Après 5 ans, seuls les prélèvements sociaux (17,2%) restent dus sur les gains : l'impôt sur le revenu est supprimé.",
      },
      {
        id: 'q2',
        question: "Quel type d'actifs peut-on loger dans un PEA ?",
        options: [
          "Uniquement des obligations d'État américaines",
          'Des actions et ETF européens principalement',
          'De l’immobilier locatif',
          'Des cryptomonnaies',
        ],
        correctIndex: 1,
        explanation:
          'Le PEA est réservé aux actions et fonds (dont ETF) investis dans des entreprises européennes.',
      },
      {
        id: 'q3',
        question: "Quel est le plafond de versement d'un PEA classique ?",
        options: ['10 000 €', '150 000 €', '1 000 000 €', "Il n'y a pas de plafond"],
        correctIndex: 1,
        explanation: 'Le plafond de versement du PEA classique est fixé à 150 000 €.',
      },
      {
        id: 'q4',
        question: 'Peut-on retirer de l’argent d’un PEA avant 5 ans sans le clôturer ?',
        options: [
          'Non, tout retrait avant 5 ans entraîne généralement la clôture du plan',
          'Oui, sans aucune conséquence',
          'Oui, mais seulement après 1 an',
          'Cela dépend uniquement de la banque',
        ],
        correctIndex: 0,
        explanation:
          'Un retrait avant 5 ans entraîne en principe la clôture du PEA et la perte de l’avantage fiscal attaché à l’ancienneté.',
      },
      {
        id: 'q5',
        question: 'Le PEA permet-il d’investir dans des entreprises non-européennes ?',
        options: [
          'Non, il est réservé aux actions et fonds européens',
          'Oui, sans aucune restriction géographique',
          'Oui, mais uniquement les entreprises américaines',
          'Cela dépend du courtier',
        ],
        correctIndex: 0,
        explanation:
          'Le PEA est structurellement limité aux actions d’entreprises ayant leur siège dans l’Union européenne (ou l’Espace économique européen).',
      },
      {
        id: 'q6',
        question: 'Qui peut ouvrir un PEA ?',
        options: [
          'Toute personne majeure fiscalement domiciliée en France',
          'Uniquement les entreprises',
          'Uniquement les personnes de plus de 50 ans',
          'Uniquement les non-résidents',
        ],
        correctIndex: 0,
        explanation:
          'Le PEA est accessible à toute personne physique majeure domiciliée fiscalement en France (un seul PEA par personne).',
      },
    ],
  },
  etf: {
    id: 'etf',
    moduleId: 'investissement',
    title: 'Les ETF, trackers indiciels',
    emoji: '🧺',
    xp: 25,
    intro:
      "Un ETF (Exchange Traded Fund), ou tracker, est un fonds qui réplique la performance d'un indice " +
      "boursier, comme le CAC 40 ou le S&P 500. Il permet d'investir dans des dizaines voire des milliers " +
      "d'entreprises en un seul achat, ce qui diversifie automatiquement le risque. Les ETF ont généralement " +
      'des frais de gestion très faibles comparés aux fonds gérés activement. C’est un outil apprécié des ' +
      'investisseurs débutants pour sa simplicité et son coût réduit.',
    questions: [
      {
        id: 'q1',
        question: 'Que réplique un ETF ?',
        options: [
          'La performance d’une seule action',
          'La performance d’un indice boursier',
          'Le taux du livret A',
          'Le taux d’intérêt de la banque centrale',
        ],
        correctIndex: 1,
        explanation: "Un ETF suit fidèlement l'évolution d'un indice boursier, comme le CAC 40 ou le S&P 500.",
      },
      {
        id: 'q2',
        question: "Quel est l'un des principaux avantages des ETF pour un débutant ?",
        options: [
          'Des frais de gestion très élevés',
          'Une diversification automatique à moindre coût',
          'Un risque de perte nul',
          'Une garantie de l’État',
        ],
        correctIndex: 1,
        explanation:
          'Les ETF permettent de diversifier son investissement sur de nombreuses entreprises avec des frais de gestion réduits.',
      },
      {
        id: 'q3',
        question: 'Combien d’entreprises peut-on posséder indirectement en achetant un seul ETF ?',
        options: [
          'Une seule',
          'Deux ou trois maximum',
          'Potentiellement des dizaines voire des milliers',
          'Cela dépend uniquement du nom de la banque',
        ],
        correctIndex: 2,
        explanation:
          "Un ETF répliquant un indice large peut donner une exposition à des dizaines, voire des milliers d'entreprises en une seule fois.",
      },
      {
        id: 'q4',
        question: 'Un ETF est-il géré activement par un gérant qui choisit les actions ?',
        options: [
          'Non, il réplique passivement un indice existant',
          'Oui, un gérant choisit chaque action quotidiennement',
          'Cela dépend du jour de la semaine',
          'Un ETF ne contient aucune action',
        ],
        correctIndex: 0,
        explanation:
          'La gestion passive d’un ETF consiste à suivre un indice existant, sans sélection active des titres par un gérant.',
      },
      {
        id: 'q5',
        question: 'Où les ETF peuvent-ils être logés, en plus d’un compte-titres classique ?',
        options: [
          'Dans un PEA, s’ils répliquent des indices européens',
          'Uniquement dans un compte professionnel',
          'Nulle part ailleurs',
          'Uniquement à l’étranger',
        ],
        correctIndex: 0,
        explanation:
          'Certains ETF éligibles au PEA permettent de bénéficier à la fois de la diversification et de la fiscalité avantageuse du PEA.',
      },
      {
        id: 'q6',
        question: 'Pourquoi les frais de gestion des ETF sont-ils généralement plus bas que ceux des fonds actifs ?',
        options: [
          'Parce qu’ils ne nécessitent pas de sélection active des titres par un gérant',
          'Parce qu’ils sont subventionnés par l’État',
          'Parce qu’ils ne contiennent qu’une seule action',
          'Parce qu’ils sont interdits aux particuliers',
        ],
        correctIndex: 0,
        explanation:
          'L’absence de gestion active réduit fortement les coûts de fonctionnement, ce qui se répercute sur des frais plus faibles.',
      },
    ],
  },
  'taux-interet': {
    id: 'taux-interet',
    moduleId: 'credit-emprunt',
    title: "Comprendre le taux d'intérêt",
    emoji: '💳',
    xp: 20,
    intro:
      "Le taux d'intérêt représente le coût de l'argent emprunté, exprimé en pourcentage annuel. Le TAEG " +
      '(Taux Annuel Effectif Global) est l’indicateur le plus complet : il inclut le taux nominal, les frais ' +
      'de dossier et l’assurance emprunteur. Un taux fixe reste identique pendant toute la durée du prêt, ' +
      'tandis qu’un taux variable peut évoluer selon les marchés. Comparer le TAEG entre plusieurs offres est ' +
      'le meilleur moyen de choisir le crédit le moins cher.',
    questions: [
      {
        id: 'q1',
        question: 'Que représente le TAEG ?',
        options: [
          'Uniquement le taux nominal du prêt',
          'Le coût total du crédit incluant frais et assurance',
          'Le montant total emprunté',
          'La durée du prêt en années',
        ],
        correctIndex: 1,
        explanation:
          'Le TAEG regroupe le taux nominal, les frais de dossier et l’assurance : il reflète le coût réel total du crédit.',
      },
      {
        id: 'q2',
        question: 'Quelle est la différence entre un taux fixe et un taux variable ?',
        options: [
          'Le taux fixe change chaque mois, le variable jamais',
          'Le taux fixe reste identique toute la durée du prêt, le variable peut évoluer',
          'Il n’y a aucune différence',
          'Le taux variable est toujours plus avantageux',
        ],
        correctIndex: 1,
        explanation:
          'Le taux fixe garantit des mensualités stables, alors que le taux variable évolue en fonction des marchés financiers.',
      },
      {
        id: 'q3',
        question: 'Pourquoi comparer le TAEG entre plusieurs offres de crédit ?',
        options: [
          'Pour choisir le crédit le moins cher au global',
          'Le TAEG n’a aucune utilité pratique',
          'Pour connaître uniquement la durée du prêt',
          'Car la loi interdit de comparer les taux nominaux',
        ],
        correctIndex: 0,
        explanation:
          "Comme le TAEG inclut tous les coûts, c'est l'indicateur le plus fiable pour comparer objectivement plusieurs offres.",
      },
      {
        id: 'q4',
        question: 'Le TAEG peut-il être inférieur au taux nominal du prêt ?',
        options: [
          'Non, il est toujours égal ou supérieur au taux nominal',
          'Oui, systématiquement',
          'Cela dépend uniquement de la durée du prêt',
          'Le TAEG n’a aucun lien avec le taux nominal',
        ],
        correctIndex: 0,
        explanation:
          'Comme le TAEG inclut des frais supplémentaires au taux nominal, il est toujours égal ou supérieur à celui-ci.',
      },
      {
        id: 'q5',
        question: 'Quel risque comporte un taux variable pour l’emprunteur ?',
        options: [
          'Voir ses mensualités augmenter si les taux de marché montent',
          'Payer systématiquement moins cher qu’un taux fixe',
          'Aucun risque particulier',
          'Perdre automatiquement son bien',
        ],
        correctIndex: 0,
        explanation:
          'Un taux variable évolue avec les marchés, ce qui peut faire augmenter le coût du crédit en cours de remboursement.',
      },
      {
        id: 'q6',
        question: 'Que doit-on vérifier en plus du taux avant de signer un crédit ?',
        options: [
          'Les frais de dossier et le coût de l’assurance emprunteur',
          'Uniquement la couleur du contrat',
          'Le nombre d’agences de la banque',
          'Rien d’autre n’est nécessaire',
        ],
        correctIndex: 0,
        explanation:
          'Frais de dossier et assurance emprunteur font partie du coût réel du crédit, déjà inclus dans le TAEG.',
      },
    ],
  },
  'capacite-emprunt': {
    id: 'capacite-emprunt',
    moduleId: 'credit-emprunt',
    title: "La capacité d'emprunt",
    emoji: '🧮',
    xp: 20,
    intro:
      "La capacité d'emprunt est le montant maximum qu'une banque accepte de te prêter, en fonction de tes " +
      'revenus et charges. La règle la plus connue est le taux d’endettement maximal de 35% des revenus nets, ' +
      'assurance incluse. Le reste à vivre, c’est-à-dire l’argent qui reste après le paiement des mensualités, ' +
      'est aussi examiné par les banques. Bien estimer sa capacité d’emprunt évite de s’engager dans un crédit ' +
      'trop lourd à porter.',
    questions: [
      {
        id: 'q1',
        question: 'Quel est le taux d’endettement maximal généralement recommandé ?',
        options: [
          '10% des revenus nets',
          '35% des revenus nets, assurance incluse',
          '70% des revenus nets',
          "Il n'existe aucune limite recommandée",
        ],
        correctIndex: 1,
        explanation:
          'La règle communément admise en France plafonne le taux d’endettement à 35% des revenus nets, assurance comprise.',
      },
      {
        id: 'q2',
        question: 'Qu’est-ce que le "reste à vivre" ?',
        options: [
          'Le montant total emprunté',
          'L’argent qui reste après le paiement des mensualités',
          'Le taux d’intérêt du prêt',
          'La durée restante du crédit',
        ],
        correctIndex: 1,
        explanation:
          'Le reste à vivre correspond à ce qui reste au foyer pour ses dépenses courantes une fois les mensualités payées.',
      },
      {
        id: 'q3',
        question: 'Pourquoi bien estimer sa capacité d’emprunt ?',
        options: [
          'Pour éviter de s’engager dans un crédit trop lourd à porter',
          'Cela n’a aucune importance pour la banque',
          'Pour payer plus d’impôts',
          'Pour obtenir automatiquement le taux le plus bas',
        ],
        correctIndex: 0,
        explanation:
          'Une capacité d’emprunt bien estimée protège contre un endettement excessif par rapport à ses revenus réels.',
      },
      {
        id: 'q4',
        question: 'Quels éléments une banque prend-elle en compte pour calculer la capacité d’emprunt ?',
        options: [
          'Les revenus et les charges de l’emprunteur',
          'Uniquement l’âge de l’emprunteur',
          'Uniquement le montant du bien à acheter',
          'La couleur de la carte bancaire',
        ],
        correctIndex: 0,
        explanation:
          'La capacité d’emprunt dépend directement du rapport entre revenus, charges existantes et nouvelle mensualité.',
      },
      {
        id: 'q5',
        question: 'Un apport personnel plus important peut-il améliorer les conditions d’un crédit ?',
        options: [
          'Oui, il peut réduire le montant emprunté et rassurer la banque',
          'Non, l’apport n’a aucune influence',
          'Non, il augmente systématiquement le taux',
          'Cela dépend uniquement de la météo économique',
        ],
        correctIndex: 0,
        explanation:
          'Un apport plus élevé réduit le montant à emprunter et peut permettre de négocier de meilleures conditions.',
      },
      {
        id: 'q6',
        question:
          'Pourquoi les banques examinent-elles aussi la stabilité des revenus (type de contrat de travail) ?',
        options: [
          'Pour évaluer la capacité à rembourser sur toute la durée du prêt',
          'Pour fixer uniquement la couleur du contrat',
          'Cela n’entre jamais en compte',
          'Uniquement pour les crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'Un revenu stable dans la durée rassure la banque sur la capacité de l’emprunteur à honorer ses mensualités sur le long terme.',
      },
    ],
  },
  'credit-responsable': {
    id: 'credit-responsable',
    moduleId: 'credit-emprunt',
    title: 'Le crédit responsable',
    emoji: '⚠️',
    xp: 25,
    intro:
      "Un crédit bien utilisé permet de financer un projet important (logement, études, véhicule) sans " +
      'attendre d’avoir économisé la totalité de la somme. Mais accumuler plusieurs crédits à la consommation ' +
      'augmente rapidement le risque de surendettement. Avant de signer, il est essentiel de comparer plusieurs ' +
      'offres et de vérifier qu’on peut assumer les mensualités même en cas d’imprévu. En cas de difficulté à ' +
      'rembourser, il existe des dispositifs comme la commission de surendettement pour se faire accompagner.',
    questions: [
      {
        id: 'q1',
        question: 'Quel est le principal risque d’accumuler plusieurs crédits à la consommation ?',
        options: [
          'Le surendettement',
          'Payer moins d’impôts',
          'Améliorer automatiquement son épargne',
          'Aucun risque particulier',
        ],
        correctIndex: 0,
        explanation:
          'Multiplier les crédits à la consommation augmente fortement le risque de ne plus pouvoir faire face à ses remboursements.',
      },
      {
        id: 'q2',
        question: 'Que faut-il vérifier avant de signer un crédit ?',
        options: [
          'Uniquement la couleur du contrat',
          'Qu’on peut assumer les mensualités même en cas d’imprévu',
          'Le nombre d’agences de la banque',
          'Rien, la banque vérifie tout à notre place',
        ],
        correctIndex: 1,
        explanation:
          'Un crédit responsable suppose de vérifier que les mensualités restent supportables même face à un imprévu financier.',
      },
      {
        id: 'q3',
        question: 'Que peut-on faire en cas de grande difficulté à rembourser ses crédits ?',
        options: [
          'Ignorer le problème',
          'Contacter la commission de surendettement',
          'Emprunter davantage sans réfléchir',
          'Arrêter tout paiement sans prévenir personne',
        ],
        correctIndex: 1,
        explanation:
          'La commission de surendettement de la Banque de France peut accompagner les personnes en difficulté pour trouver une solution.',
      },
      {
        id: 'q4',
        question: 'Qu’est-ce que le rachat de crédits ?',
        options: [
          'Le regroupement de plusieurs crédits en un seul, avec une mensualité unique',
          'L’annulation pure et simple de toutes ses dettes',
          'Un crédit supplémentaire sans lien avec les autres',
          'Un livret d’épargne spécifique',
        ],
        correctIndex: 0,
        explanation:
          'Le rachat de crédits regroupe plusieurs prêts en un seul, ce qui peut simplifier et parfois alléger les remboursements mensuels.',
      },
      {
        id: 'q5',
        question: 'Pourquoi comparer plusieurs offres de crédit avant de s’engager ?',
        options: [
          'Pour trouver les conditions les plus avantageuses et éviter le surendettement',
          'Cela n’a aucun intérêt, toutes les offres sont identiques',
          'Pour payer plus cher volontairement',
          'C’est interdit par la loi',
        ],
        correctIndex: 0,
        explanation:
          'Les offres de crédit varient significativement d’un établissement à l’autre ; comparer permet d’emprunter dans de meilleures conditions.',
      },
      {
        id: 'q6',
        question: 'Quel est un signe précurseur de difficulté financière lié au crédit ?',
        options: [
          'Utiliser un nouveau crédit pour rembourser un crédit existant',
          'Rembourser ses mensualités à l’avance',
          'Avoir un seul crédit en cours',
          'Épargner régulièrement',
        ],
        correctIndex: 0,
        explanation:
          'Emprunter pour rembourser un crédit existant est un signal d’alerte classique de spirale de surendettement.',
      },
    ],
  },
  'ir-bareme': {
    id: 'ir-bareme',
    moduleId: 'fiscalite',
    title: "L'impôt sur le revenu (IR)",
    emoji: '🧾',
    xp: 20,
    intro:
      "En France, l'impôt sur le revenu est calculé selon un barème progressif par tranches : plus le revenu " +
      'est élevé, plus le taux appliqué sur la tranche supérieure augmente. Chaque tranche a son propre taux, ' +
      'appliqué uniquement à la partie du revenu qui s’y trouve, pas à la totalité des revenus. Le quotient ' +
      'familial, basé sur le nombre de parts du foyer, permet d’ajuster l’impôt selon la situation familiale. ' +
      'La déclaration de revenus est obligatoire chaque année pour tous les foyers fiscaux.',
    questions: [
      {
        id: 'q1',
        question: "Comment fonctionne le barème de l'impôt sur le revenu en France ?",
        options: [
          'Un taux unique s’applique à la totalité des revenus',
          'Un barème progressif par tranches, chaque tranche ayant son propre taux',
          'L’impôt est calculé uniquement sur le patrimoine',
          'Le taux diminue quand le revenu augmente',
        ],
        correctIndex: 1,
        explanation:
          'Chaque tranche de revenu est imposée à son propre taux : ce n’est jamais l’ensemble du revenu qui est taxé au taux le plus élevé.',
      },
      {
        id: 'q2',
        question: 'Qu’est-ce que le quotient familial ?',
        options: [
          'Un système basé sur le nombre de parts du foyer pour ajuster l’impôt',
          'Une taxe supplémentaire pour les familles nombreuses',
          'Le montant total des impôts locaux',
          'Un crédit d’impôt réservé aux entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Le quotient familial divise le revenu imposable par le nombre de parts du foyer, ce qui adapte l’impôt à la situation familiale.',
      },
      {
        id: 'q3',
        question: 'La déclaration de revenus est-elle obligatoire ?',
        options: [
          'Non, elle est facultative',
          'Oui, chaque année pour tous les foyers fiscaux',
          'Seulement pour les revenus supérieurs à 1 million d’euros',
          'Uniquement pour les entreprises',
        ],
        correctIndex: 1,
        explanation: 'Tous les foyers fiscaux doivent déclarer leurs revenus chaque année, quel que soit leur montant.',
      },
      {
        id: 'q4',
        question: 'Qui doit remplir une déclaration de revenus en France ?',
        options: [
          'Tous les foyers fiscaux, quel que soit leur niveau de revenu',
          'Uniquement les personnes sans emploi',
          'Uniquement les entreprises',
          'Uniquement les retraités',
        ],
        correctIndex: 0,
        explanation:
          'La déclaration de revenus est une obligation annuelle pour l’ensemble des foyers fiscaux, y compris ceux non imposables.',
      },
      {
        id: 'q5',
        question: 'Le prélèvement à la source remplace-t-il l’obligation de déclarer ses revenus ?',
        options: [
          'Non, la déclaration annuelle reste obligatoire même avec le prélèvement à la source',
          'Oui, il supprime totalement la déclaration',
          'Oui, mais uniquement pour les salariés',
          'Cela dépend du revenu',
        ],
        correctIndex: 0,
        explanation:
          'Le prélèvement à la source ajuste les paiements mensuels, mais la déclaration annuelle reste nécessaire pour ajuster le calcul définitif de l’impôt.',
      },
      {
        id: 'q6',
        question: 'Une personne non imposable doit-elle quand même déclarer ses revenus ?',
        options: [
          'Oui, la déclaration reste obligatoire même sans impôt à payer',
          'Non, seules les personnes imposables déclarent',
          'Cela dépend de son âge uniquement',
          'Non, jamais',
        ],
        correctIndex: 0,
        explanation:
          'Même sans impôt à payer, la déclaration reste obligatoire et sert notamment à calculer certaines aides sociales.',
      },
    ],
  },
  tmi: {
    id: 'tmi',
    moduleId: 'fiscalite',
    title: "La Tranche Marginale d'Imposition (TMI)",
    emoji: '📐',
    xp: 25,
    intro:
      'La Tranche Marginale d’Imposition (TMI) correspond au taux appliqué à la dernière tranche de revenu, ' +
      'c’est-à-dire la plus haute atteinte par le contribuable. Elle ne s’applique pas à l’ensemble des revenus, ' +
      'contrairement à une idée reçue très répandue. Le taux moyen d’imposition, lui, correspond au rapport ' +
      'entre l’impôt total payé et le revenu total : il est toujours inférieur à la TMI. Connaître sa TMI est ' +
      'utile pour évaluer l’intérêt fiscal d’un investissement ou d’une déduction.',
    questions: [
      {
        id: 'q1',
        question: 'À quoi correspond la TMI ?',
        options: [
          'Au taux moyen appliqué à tous les revenus',
          'Au taux appliqué à la dernière tranche de revenu atteinte',
          'Au montant total de l’impôt payé',
          'Au taux de TVA applicable',
        ],
        correctIndex: 1,
        explanation:
          'La TMI est le taux marginal, appliqué uniquement à la portion de revenu située dans la tranche la plus haute atteinte.',
      },
      {
        id: 'q2',
        question: 'Pourquoi la TMI est-elle souvent mal comprise ?',
        options: [
          'Parce qu’on croit à tort qu’elle s’applique à l’ensemble des revenus',
          'Parce qu’elle n’existe pas réellement',
          'Parce qu’elle est identique pour tous les contribuables',
          'Parce qu’elle concerne uniquement les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Beaucoup pensent à tort que toucher une tranche supérieure fait taxer tous ses revenus à ce taux, ce qui est faux.',
      },
      {
        id: 'q3',
        question: 'Comment se situe le taux moyen d’imposition par rapport à la TMI ?',
        options: [
          'Il est toujours supérieur à la TMI',
          'Il est toujours inférieur à la TMI',
          'Il est toujours égal à la TMI',
          'Les deux notions sont identiques',
        ],
        correctIndex: 1,
        explanation:
          'Comme seules les tranches hautes du revenu sont taxées à la TMI, le taux moyen réel payé reste toujours plus bas.',
      },
      {
        id: 'q4',
        question: 'Si la TMI d’un contribuable est de 30%, cela signifie-t-il que tous ses revenus sont taxés à 30% ?',
        options: [
          'Non, seule la portion de revenu dans cette tranche est taxée à 30%',
          'Oui, la totalité du revenu est taxée à ce taux',
          'Non, aucun revenu n’est taxé à ce taux',
          'Cela dépend du nombre d’enfants',
        ],
        correctIndex: 0,
        explanation:
          'Le mécanisme des tranches signifie que seule la part de revenu dans la tranche à 30% y est soumise, le reste étant taxé aux taux inférieurs.',
      },
      {
        id: 'q5',
        question: 'À quoi sert de connaître sa TMI pour un investissement comme le PER ?',
        options: [
          'Évaluer l’économie d’impôt réalisée grâce à la déduction des versements',
          'Fixer le montant de la TVA',
          'Déterminer le taux du Livret A',
          'Cela n’a aucune utilité',
        ],
        correctIndex: 0,
        explanation:
          'Les versements déductibles (comme sur un PER) génèrent une économie d’impôt proportionnelle à la TMI du contribuable.',
      },
      {
        id: 'q6',
        question: 'La TMI peut-elle être égale à 0% ?',
        options: [
          'Oui, pour les revenus situés dans la première tranche non imposable',
          'Non, elle est toujours d’au moins 11%',
          'Non, le minimum légal est 30%',
          'Cela n’existe pas en France',
        ],
        correctIndex: 0,
        explanation:
          'La première tranche du barème est à 0%, ce qui signifie qu’une partie des revenus n’est jamais imposée.',
      },
    ],
  },
  pfu: {
    id: 'pfu',
    moduleId: 'fiscalite',
    title: 'Le PFU (flat tax)',
    emoji: '💹',
    xp: 25,
    intro:
      'Le Prélèvement Forfaitaire Unique (PFU), aussi appelé flat tax, est un taux d’imposition unique de 30% ' +
      'appliqué par défaut aux revenus du capital (dividendes, intérêts, plus-values mobilières). Ce taux de ' +
      '30% se décompose en 12,8% d’impôt sur le revenu et 17,2% de prélèvements sociaux. Le contribuable peut ' +
      'choisir d’opter pour le barème progressif de l’IR si cela s’avère plus avantageux selon sa situation. Ce ' +
      'choix se fait chaque année lors de la déclaration de revenus.',
    questions: [
      {
        id: 'q1',
        question: 'À combien s’élève le taux du PFU ?',
        options: ['15%', '30%', '45%', '60%'],
        correctIndex: 1,
        explanation: 'Le PFU applique un taux forfaitaire de 30%, décomposé en 12,8% d’IR et 17,2% de prélèvements sociaux.',
      },
      {
        id: 'q2',
        question: 'Quels revenus sont concernés par le PFU ?',
        options: [
          'Les salaires uniquement',
          'Les revenus du capital : dividendes, intérêts, plus-values mobilières',
          'Les allocations familiales',
          'Les pensions de retraite',
        ],
        correctIndex: 1,
        explanation:
          'Le PFU s’applique par défaut aux revenus du capital comme les dividendes, les intérêts et les plus-values mobilières.',
      },
      {
        id: 'q3',
        question: 'Quelle alternative existe au PFU si elle est plus avantageuse ?',
        options: [
          'Aucune alternative n’existe',
          'Opter pour le barème progressif de l’impôt sur le revenu',
          'Ne payer aucun impôt',
          'Payer uniquement la TVA',
        ],
        correctIndex: 1,
        explanation:
          'Le contribuable peut renoncer au PFU et choisir le barème progressif de l’IR si celui-ci lui est plus favorable.',
      },
      {
        id: 'q4',
        question: 'Le PFU s’applique-t-il automatiquement, ou faut-il en faire la demande ?',
        options: [
          'Il s’applique par défaut, sauf option contraire du contribuable',
          'Il faut en faire la demande chaque année',
          'Il ne s’applique jamais par défaut',
          'Il est réservé aux entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Le PFU est le régime par défaut appliqué aux revenus du capital, sauf si le contribuable opte explicitement pour le barème progressif.',
      },
      {
        id: 'q5',
        question: 'Dans quel cas le barème progressif peut-il être plus avantageux que le PFU ?',
        options: [
          'Quand la TMI du contribuable est faible (0% ou 11%)',
          'Quand la TMI est de 45%',
          'Toujours, quel que soit le revenu',
          'Jamais, le PFU est toujours plus avantageux',
        ],
        correctIndex: 0,
        explanation:
          'Pour les contribuables faiblement imposés, le barème progressif peut aboutir à une imposition plus légère que le taux forfaitaire de 30%.',
      },
      {
        id: 'q6',
        question:
          'Le choix entre PFU et barème progressif est-il valable pour un seul type de revenu ou pour l’ensemble ?',
        options: [
          'L’option pour le barème progressif s’applique à l’ensemble des revenus du capital de l’année',
          'Elle peut être choisie séparément pour chaque dividende perçu',
          'Elle ne concerne que les intérêts',
          'Elle n’existe pas',
        ],
        correctIndex: 0,
        explanation:
          'L’option pour le barème progressif est globale et s’applique à tous les revenus du capital de l’année, pas ligne par ligne.',
      },
    ],
  },
  bilan: {
    id: 'bilan',
    moduleId: 'finance-entreprise',
    title: 'Lire un bilan comptable',
    emoji: '📊',
    xp: 20,
    intro:
      "Le bilan comptable est une photographie du patrimoine de l'entreprise à un instant donné. Il se compose " +
      'de deux parties toujours égales : l’actif (ce que l’entreprise possède : trésorerie, matériel, stocks) ' +
      'et le passif (ce qu’elle doit : capitaux propres, dettes). L’équilibre entre actif et passif reflète le ' +
      'principe fondamental de la comptabilité en partie double. Savoir lire un bilan permet d’évaluer ' +
      'rapidement la solidité financière d’une entreprise.',
    questions: [
      {
        id: 'q1',
        question: 'Que représente le bilan comptable ?',
        options: [
          'Le chiffre d’affaires annuel de l’entreprise',
          'Une photographie du patrimoine de l’entreprise à un instant donné',
          'Le nombre d’employés de l’entreprise',
          'Le prix de vente des produits',
        ],
        correctIndex: 1,
        explanation:
          'Le bilan capture l’état du patrimoine de l’entreprise (actif et passif) à une date précise, contrairement au compte de résultat qui couvre une période.',
      },
      {
        id: 'q2',
        question: 'Que trouve-t-on à l’actif du bilan ?',
        options: [
          'Les dettes de l’entreprise',
          'Ce que l’entreprise possède (trésorerie, matériel, stocks)',
          'Les capitaux propres uniquement',
          'Le salaire des dirigeants',
        ],
        correctIndex: 1,
        explanation: 'L’actif regroupe tout ce que l’entreprise possède : trésorerie, matériel, stocks, créances, etc.',
      },
      {
        id: 'q3',
        question: 'Quelle relation existe toujours entre l’actif et le passif ?',
        options: [
          'L’actif est toujours supérieur au passif',
          'Ils sont toujours égaux',
          'Le passif est toujours nul',
          'Ils n’ont aucun rapport entre eux',
        ],
        correctIndex: 1,
        explanation:
          'Par principe comptable, l’actif total est toujours égal au passif total : c’est la base de la partie double.',
      },
      {
        id: 'q4',
        question: 'À quelle fréquence une entreprise établit-elle généralement son bilan ?',
        options: [
          'Au moins une fois par an, à la clôture de l’exercice',
          'Une seule fois à la création de l’entreprise',
          'Chaque semaine',
          'Jamais, ce n’est pas obligatoire',
        ],
        correctIndex: 0,
        explanation: 'Le bilan est établi au minimum une fois par an, à la clôture de l’exercice comptable.',
      },
      {
        id: 'q5',
        question: 'Que trouve-t-on parmi les capitaux propres au passif du bilan ?',
        options: [
          'Le capital social et les bénéfices non distribués',
          'Les stocks de marchandises',
          'Le matériel de production',
          'La trésorerie disponible',
        ],
        correctIndex: 0,
        explanation:
          'Les capitaux propres regroupent notamment le capital apporté par les associés et les bénéfices accumulés non redistribués.',
      },
      {
        id: 'q6',
        question: 'Pourquoi un investisseur ou une banque s’intéresse-t-il au bilan d’une entreprise ?',
        options: [
          'Pour évaluer sa solidité financière avant de s’engager',
          'Pour connaître uniquement le nom du dirigeant',
          'Le bilan n’intéresse jamais les investisseurs',
          'Pour fixer le prix des matières premières',
        ],
        correctIndex: 0,
        explanation:
          'Le bilan donne une vision claire de la solidité financière de l’entreprise, essentielle avant d’investir ou de prêter.',
      },
    ],
  },
  bfr: {
    id: 'bfr',
    moduleId: 'finance-entreprise',
    title: 'Le BFR (Besoin en Fonds de Roulement)',
    emoji: '🔄',
    xp: 25,
    intro:
      'Le Besoin en Fonds de Roulement (BFR) représente l’argent qu’une entreprise doit avancer pour financer ' +
      'son cycle d’exploitation, entre le moment où elle paie ses fournisseurs et celui où elle encaisse ses ' +
      'clients. Un BFR positif signifie que l’entreprise doit trouver des financements pour combler ce ' +
      'décalage de trésorerie. À l’inverse, certaines entreprises (comme la grande distribution) ont un BFR ' +
      'négatif car elles encaissent leurs clients avant de payer leurs fournisseurs. Bien gérer son BFR est ' +
      'essentiel pour éviter les problèmes de trésorerie, même quand l’entreprise est rentable.',
    questions: [
      {
        id: 'q1',
        question: 'Que représente le BFR ?',
        options: [
          'Le bénéfice net de l’entreprise',
          'L’argent à avancer pour financer le décalage entre paiements fournisseurs et encaissements clients',
          'Le montant des impôts de l’entreprise',
          'Le capital social de départ',
        ],
        correctIndex: 1,
        explanation:
          'Le BFR mesure le besoin de trésorerie lié au décalage entre les décaissements (fournisseurs, stocks) et les encaissements (clients).',
      },
      {
        id: 'q2',
        question: 'Que signifie un BFR positif ?',
        options: [
          'L’entreprise doit trouver des financements pour combler un décalage de trésorerie',
          'L’entreprise n’a besoin d’aucun financement',
          'L’entreprise est en faillite',
          'L’entreprise ne vend rien',
        ],
        correctIndex: 0,
        explanation:
          'Un BFR positif signifie que l’entreprise décaisse avant d’encaisser : elle doit donc financer ce décalage.',
      },
      {
        id: 'q3',
        question: 'Pourquoi une entreprise rentable peut-elle quand même avoir des problèmes de trésorerie ?',
        options: [
          'Ce n’est jamais possible si l’entreprise est rentable',
          'À cause d’un BFR mal maîtrisé qui crée un décalage de trésorerie',
          'Uniquement à cause d’une mauvaise gestion des salariés',
          'Parce que la rentabilité annule automatiquement tout besoin de trésorerie',
        ],
        correctIndex: 1,
        explanation:
          'Rentabilité et trésorerie sont deux notions différentes : un BFR mal maîtrisé peut créer des tensions de trésorerie même en étant rentable.',
      },
      {
        id: 'q4',
        question: 'Quel élément du cycle d’exploitation augmente généralement le BFR ?',
        options: [
          'Un stock important non encore vendu',
          'Un paiement immédiat par les clients',
          'L’absence totale de stock',
          'Le remboursement d’un emprunt',
        ],
        correctIndex: 0,
        explanation:
          'Un stock élevé immobilise de la trésorerie sans encaissement immédiat, ce qui augmente le BFR.',
      },
      {
        id: 'q5',
        question: 'Comment une entreprise peut-elle réduire son BFR ?',
        options: [
          'En négociant des délais de paiement plus longs avec ses fournisseurs',
          'En augmentant systématiquement ses stocks',
          'En payant ses fournisseurs plus vite que nécessaire',
          'En attendant plus longtemps pour encaisser ses clients',
        ],
        correctIndex: 0,
        explanation:
          'Obtenir des délais de paiement plus longs auprès des fournisseurs retarde les décaissements et réduit le besoin de financement.',
      },
      {
        id: 'q6',
        question: 'Le BFR concerne-t-il uniquement les grandes entreprises ?',
        options: [
          'Non, toutes les entreprises ayant un cycle d’exploitation y sont soumises',
          'Oui, uniquement les entreprises du CAC 40',
          'Non, seulement les associations',
          'Le BFR ne concerne aucune entreprise en pratique',
        ],
        correctIndex: 0,
        explanation:
          'Toute entreprise qui achète, stocke ou vend avec un décalage de trésorerie doit gérer son BFR, quelle que soit sa taille.',
      },
    ],
  },
  'statuts-juridiques': {
    id: 'statuts-juridiques',
    moduleId: 'finance-entreprise',
    title: 'Choisir son statut juridique',
    emoji: '🏛️',
    xp: 25,
    intro:
      'Le statut juridique détermine les règles fiscales, sociales et de responsabilité d’une entreprise. La ' +
      'micro-entreprise (auto-entrepreneur) est simple à créer mais limitée par des plafonds de chiffre ' +
      'd’affaires. Les sociétés comme l’EURL ou la SASU permettent de séparer le patrimoine personnel du ' +
      'patrimoine professionnel, limitant ainsi la responsabilité du dirigeant. Le choix du statut dépend du ' +
      'projet, du niveau de risque et des perspectives de développement de l’activité.',
    questions: [
      {
        id: 'q1',
        question: 'Quel est l’avantage principal de la micro-entreprise ?',
        options: [
          'Un chiffre d’affaires illimité',
          'Sa simplicité de création et de gestion',
          'Une responsabilité totalement illimitée du dirigeant',
          'L’absence totale d’impôts',
        ],
        correctIndex: 1,
        explanation:
          'La micro-entreprise séduit surtout par sa simplicité administrative, en contrepartie de plafonds de chiffre d’affaires.',
      },
      {
        id: 'q2',
        question: 'Quel est l’intérêt de créer une société comme une EURL ou une SASU ?',
        options: [
          'Séparer le patrimoine personnel du patrimoine professionnel',
          'Supprimer toute déclaration fiscale',
          'Éviter d’avoir des clients',
          'Ne jamais payer de charges sociales',
        ],
        correctIndex: 0,
        explanation:
          'Créer une société permet de limiter la responsabilité du dirigeant en séparant son patrimoine personnel de celui de l’entreprise.',
      },
      {
        id: 'q3',
        question: 'De quoi dépend le choix du statut juridique ?',
        options: [
          'Uniquement de la couleur préférée de l’entrepreneur',
          'Du projet, du niveau de risque et des perspectives de développement',
          'De la météo au moment de la création',
          'D’un tirage au sort administratif',
        ],
        correctIndex: 1,
        explanation:
          'Le bon statut juridique se choisit en fonction du projet, du risque encouru et des ambitions de développement de l’activité.',
      },
      {
        id: 'q4',
        question: 'Quel plafond limite l’activité d’une micro-entreprise ?',
        options: [
          'Un plafond annuel de chiffre d’affaires',
          'Un plafond de nombre de clients',
          'Un plafond d’âge du dirigeant',
          'Aucun plafond n’existe',
        ],
        correctIndex: 0,
        explanation:
          'La micro-entreprise est soumise à des plafonds de chiffre d’affaires annuels, différents selon l’activité exercée.',
      },
      {
        id: 'q5',
        question:
          'Que se passe-t-il en cas de dettes dans une entreprise individuelle classique (hors option de séparation) ?',
        options: [
          'Le patrimoine personnel du dirigeant peut être engagé',
          'Seul le patrimoine professionnel est jamais concerné',
          'L’État rembourse automatiquement les dettes',
          'Aucune conséquence pour le dirigeant',
        ],
        correctIndex: 0,
        explanation:
          'Sans séparation des patrimoines, les créanciers professionnels peuvent parfois se retourner contre le patrimoine personnel du dirigeant.',
      },
      {
        id: 'q6',
        question: 'La SASU est-elle adaptée à un projet porté par une seule personne ?',
        options: [
          'Oui, elle permet de créer une société avec un seul associé',
          'Non, il faut au moins deux associés',
          'Non, la SASU n’existe pas en France',
          'Elle est réservée aux grandes entreprises',
        ],
        correctIndex: 0,
        explanation:
          'La SASU (Société par Actions Simplifiée Unipersonnelle) permet à une seule personne de créer une société avec responsabilité limitée.',
      },
    ],
  },
  'secteurs-activite': {
    id: 'secteurs-activite',
    moduleId: 'economie-francaise',
    title: "Les secteurs de l'économie",
    emoji: '🏭',
    xp: 20,
    intro:
      "L'économie française se divise traditionnellement en trois grands secteurs d'activité. Le secteur " +
      'primaire regroupe l’agriculture, la pêche et l’extraction de matières premières. Le secteur secondaire ' +
      'correspond à l’industrie et à la transformation de ces matières premières en produits finis. Le secteur ' +
      'tertiaire, aujourd’hui largement dominant en France, rassemble tous les services : commerce, santé, ' +
      'éducation, finance ou tourisme.',
    questions: [
      {
        id: 'q1',
        question: 'Que regroupe le secteur primaire ?',
        options: [
          "L'agriculture, la pêche et l'extraction de matières premières",
          'Les banques et les assurances',
          "L'industrie automobile uniquement",
          'Le commerce en ligne',
        ],
        correctIndex: 0,
        explanation:
          'Le secteur primaire concerne l’exploitation des ressources naturelles : agriculture, pêche, extraction de matières premières.',
      },
      {
        id: 'q2',
        question: 'Quel secteur correspond à la transformation des matières premières en produits finis ?',
        options: ['Le secteur primaire', 'Le secteur secondaire', 'Le secteur tertiaire', 'Aucun des trois'],
        correctIndex: 1,
        explanation:
          'Le secteur secondaire regroupe les activités industrielles qui transforment les matières premières en produits finis.',
      },
      {
        id: 'q3',
        question: 'Quel secteur est aujourd’hui largement dominant dans l’économie française ?',
        options: [
          'Le secteur primaire',
          'Le secteur secondaire',
          'Le secteur tertiaire (les services)',
          "Aucun secteur n'est dominant",
        ],
        correctIndex: 2,
        explanation:
          'Le secteur tertiaire (commerce, santé, éducation, finance, tourisme...) représente aujourd’hui la majorité de l’activité économique française.',
      },
      {
        id: 'q4',
        question: 'Un boulanger qui transforme de la farine en pain relève de quel secteur ?',
        options: ['Le secteur secondaire', 'Le secteur primaire', 'Le secteur tertiaire', 'Aucun secteur'],
        correctIndex: 0,
        explanation:
          'La transformation de matières premières (la farine) en produit fini (le pain) relève du secteur secondaire.',
      },
      {
        id: 'q5',
        question: 'Un agriculteur qui cultive du blé relève de quel secteur ?',
        options: ['Le secteur primaire', 'Le secteur secondaire', 'Le secteur tertiaire', 'Aucun secteur'],
        correctIndex: 0,
        explanation: 'La production agricole brute, sans transformation, appartient au secteur primaire.',
      },
      {
        id: 'q6',
        question: 'Un consultant en informatique relève de quel secteur ?',
        options: ['Le secteur tertiaire', 'Le secteur primaire', 'Le secteur secondaire', 'Aucun secteur'],
        correctIndex: 0,
        explanation: 'Les services, y compris le conseil et l’informatique, appartiennent au secteur tertiaire.',
      },
    ],
  },
  'monnaie-inflation': {
    id: 'monnaie-inflation',
    moduleId: 'economie-francaise',
    title: "La monnaie et l'inflation",
    emoji: '💶',
    xp: 25,
    intro:
      "L'euro est la monnaie utilisée par la France depuis 2002, gérée au niveau européen par la Banque " +
      'Centrale Européenne (BCE). La BCE a pour mission principale de maintenir la stabilité des prix, avec un ' +
      'objectif d’inflation proche de 2% par an. L’inflation correspond à la hausse générale et durable des ' +
      'prix, qui réduit le pouvoir d’achat si les revenus n’augmentent pas au même rythme. À l’inverse, une ' +
      'inflation trop faible ou négative (déflation) peut aussi freiner l’activité économique.',
    questions: [
      {
        id: 'q1',
        question: 'Quelle institution gère la monnaie unique européenne ?',
        options: [
          'La Banque de France uniquement',
          'La Banque Centrale Européenne (BCE)',
          'Le gouvernement français',
          'Aucune institution ne la gère',
        ],
        correctIndex: 1,
        explanation:
          'La BCE fixe la politique monétaire de la zone euro et a pour objectif principal la stabilité des prix.',
      },
      {
        id: 'q2',
        question: "Que signifie l'inflation ?",
        options: [
          'Une baisse générale et durable des prix',
          'La hausse générale et durable des prix',
          'La stabilité totale des prix',
          'Le taux de change entre deux monnaies',
        ],
        correctIndex: 1,
        explanation: 'L’inflation désigne une hausse générale et durable du niveau des prix dans l’économie.',
      },
      {
        id: 'q3',
        question: "Quel est l'effet d'une forte inflation si les revenus n'augmentent pas autant ?",
        options: [
          'Le pouvoir d’achat diminue',
          'Le pouvoir d’achat augmente automatiquement',
          'Cela n’a aucun effet sur le pouvoir d’achat',
          'Les prix baissent immédiatement',
        ],
        correctIndex: 0,
        explanation:
          'Si les prix augmentent plus vite que les revenus, on peut acheter moins avec la même somme : le pouvoir d’achat diminue.',
      },
      {
        id: 'q4',
        question: 'Que peut faire la BCE pour lutter contre une inflation trop forte ?',
        options: [
          'Augmenter ses taux d’intérêt directeurs',
          'Baisser ses taux d’intérêt directeurs',
          'Interdire toute vente en Europe',
          'Supprimer l’euro',
        ],
        correctIndex: 0,
        explanation:
          'Augmenter les taux directeurs renchérit le crédit et freine la consommation et l’investissement, ce qui tend à ralentir l’inflation.',
      },
      {
        id: 'q5',
        question: 'Quel est l’objectif d’inflation visé par la BCE à moyen terme ?',
        options: ['Environ 2% par an', '0% strictement', '10% par an', 'Il n’y a aucun objectif chiffré'],
        correctIndex: 0,
        explanation:
          'La BCE vise une inflation proche de 2% à moyen terme, jugée compatible avec une croissance économique stable.',
      },
      {
        id: 'q6',
        question: 'Qu’est-ce que la déflation ?',
        options: [
          'Une baisse générale et durable des prix',
          'Une hausse rapide des prix',
          'La stabilité totale des prix',
          'Une dévaluation de l’euro face au dollar',
        ],
        correctIndex: 0,
        explanation:
          'La déflation est l’opposé de l’inflation : une baisse générale et durable des prix, qui peut freiner l’activité économique.',
      },
    ],
  },
  cac40: {
    id: 'cac40',
    moduleId: 'economie-francaise',
    title: 'Le CAC 40',
    emoji: '📈',
    xp: 25,
    intro:
      "Le CAC 40 est l'indice boursier de référence de la Bourse de Paris. Il regroupe les 40 plus grandes " +
      'entreprises françaises cotées, sélectionnées notamment selon leur capitalisation boursière et leur ' +
      'volume d’échanges. Sa valeur évolue en temps réel selon les cours de bourse de ces entreprises, et sert ' +
      'd’indicateur de la santé économique perçue des grandes entreprises françaises. Investir directement sur ' +
      'l’indice, par exemple via un ETF, permet de miser sur l’ensemble de ces 40 entreprises en une seule fois.',
    questions: [
      {
        id: 'q1',
        question: 'Que représente le CAC 40 ?',
        options: [
          'L’indice boursier des 40 plus grandes entreprises françaises cotées',
          'Le taux d’intérêt de la Banque de France',
          'Le nombre de banques en France',
          'Un impôt sur les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Le CAC 40 est l’indice phare de la Bourse de Paris, composé des 40 plus grandes capitalisations françaises cotées.',
      },
      {
        id: 'q2',
        question: 'Sur quel critère les entreprises sont-elles notamment sélectionnées dans le CAC 40 ?',
        options: [
          'Leur capitalisation boursière et leur volume d’échanges',
          'Leur ancienneté uniquement',
          'Le nombre d’employés en CDI',
          'Leur localisation géographique en France',
        ],
        correctIndex: 0,
        explanation:
          'La sélection des entreprises du CAC 40 repose notamment sur leur capitalisation boursière et la liquidité de leur titre (volume d’échanges).',
      },
      {
        id: 'q3',
        question: 'Comment peut-on investir sur l’ensemble du CAC 40 en une seule fois ?',
        options: [
          'En achetant une seule action au hasard',
          'Via un ETF répliquant l’indice',
          "Ce n'est pas possible",
          'En ouvrant un livret A',
        ],
        correctIndex: 1,
        explanation:
          'Un ETF qui réplique le CAC 40 permet d’investir en une seule opération dans les 40 entreprises qui composent l’indice.',
      },
      {
        id: 'q4',
        question: 'La composition du CAC 40 est-elle fixe dans le temps ?',
        options: [
          'Non, elle est révisée périodiquement selon les critères de sélection',
          'Oui, elle ne change jamais',
          'Elle change uniquement tous les 50 ans',
          'Elle est fixée une fois pour toutes à sa création',
        ],
        correctIndex: 0,
        explanation:
          'La composition du CAC 40 est révisée régulièrement pour refléter l’évolution des grandes entreprises cotées à Paris.',
      },
      {
        id: 'q5',
        question: 'Sur quelle place boursière le CAC 40 est-il coté ?',
        options: [
          'La Bourse de Paris (Euronext Paris)',
          'La Bourse de New York',
          'La Bourse de Londres',
          'La Bourse de Tokyo',
        ],
        correctIndex: 0,
        explanation: 'Le CAC 40 est l’indice de référence d’Euronext Paris, la place boursière française.',
      },
      {
        id: 'q6',
        question: 'Investir uniquement sur le CAC 40 permet-il de diversifier à l’international ?',
        options: [
          'Partiellement, car plusieurs entreprises du CAC 40 réalisent une grande part de leur activité à l’étranger',
          'Non, ces entreprises n’opèrent qu’en France',
          'Oui, totalement, car l’indice est mondial',
          'Cela n’a aucun lien avec l’international',
        ],
        correctIndex: 0,
        explanation:
          'Beaucoup d’entreprises du CAC 40 sont des multinationales qui réalisent une part importante de leur chiffre d’affaires hors de France.',
      },
    ],
  },
}

export function getLessonById(lessonId) {
  return LESSONS[lessonId]
}
