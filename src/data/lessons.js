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
    ],
  },
}

export function getLessonById(lessonId) {
  return LESSONS[lessonId]
}
