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
  'livrets-reglementes-ii': {
    id: 'livrets-reglementes-ii',
    moduleId: 'budget-epargne',
    title: "Les livrets d'épargne réglementés (II)",
    emoji: '📗',
    xp: 35,
    intro:
      'Passons aux calculs concrets : plafonds cumulés, capitalisation des intérêts, et cumul entre ' +
      'plusieurs livrets réglementés.',
    questions: [
      {
        id: 'q1',
        question: 'Un épargnant a déjà versé 20 000 € sur son Livret A. Combien peut-il encore y verser ?',
        options: ['2 950 €', '12 000 €', '0 €, le plafond est déjà atteint', '22 950 €'],
        correctIndex: 0,
        explanation:
          'Le plafond du Livret A étant de 22 950 €, il reste 2 950 € de marge de versement, hors intérêts capitalisés.',
      },
      {
        id: 'q2',
        question: 'Les intérêts capitalisés sur un Livret A comptent-ils dans le plafond de versement de 22 950 € ?',
        options: [
          'Non, seuls les versements comptent dans le plafond, pas les intérêts accumulés',
          'Oui, absolument tout est compris dans le plafond',
          'Cela dépend de la banque',
          'Le plafond ne s’applique qu’aux retraits',
        ],
        correctIndex: 0,
        explanation:
          'Le plafond de versement concerne uniquement les dépôts effectués ; les intérêts crédités peuvent porter le solde total au-delà.',
      },
      {
        id: 'q3',
        question: 'Peut-on cumuler un Livret A et un LDDS pour un même épargnant majeur ?',
        options: [
          'Oui, les deux sont cumulables, portant la capacité totale à 34 950 €',
          'Non, il faut choisir l’un ou l’autre',
          'Non, c’est le même produit sous deux noms',
          'Oui, mais uniquement pour les mineurs',
        ],
        correctIndex: 0,
        explanation:
          'Livret A (22 950 €) et LDDS (12 000 €) sont cumulables, offrant une capacité d’épargne réglementée combinée de 34 950 €.',
      },
      {
        id: 'q4',
        question: 'Le taux du Livret A est-il garanti de rester identique pendant plusieurs années consécutives ?',
        options: [
          'Non, il est révisé périodiquement selon une formule liée à l’inflation et aux taux interbancaires',
          'Oui, il est fixe à vie',
          'Non, il change tous les jours',
          'Il est fixé par chaque banque individuellement',
        ],
        correctIndex: 0,
        explanation:
          'Le taux du Livret A est révisé selon une formule officielle prenant en compte l’inflation et les taux du marché interbancaire.',
      },
      {
        id: 'q5',
        question: 'Un même foyer fiscal peut-il ouvrir plusieurs Livrets A au nom de chaque membre du foyer ?',
        options: [
          'Oui, chaque personne physique (y compris les enfants) peut avoir son propre Livret A',
          'Non, un seul Livret A par foyer fiscal',
          'Non, réservé à une seule personne par famille',
          'Oui, mais limité à deux par foyer',
        ],
        correctIndex: 0,
        explanation:
          'Le Livret A est individuel : chaque personne physique, y compris les enfants mineurs, peut en détenir un, dans la limite d’un seul par personne.',
      },
      {
        id: 'q6',
        question: 'Pourquoi le LEP offre-t-il généralement un taux supérieur au Livret A ?',
        options: [
          'Il vise à mieux protéger le pouvoir d’achat des foyers modestes, sa cible étant plus restreinte',
          'Parce qu’il est plus risqué',
          'Parce qu’il est bloqué 10 ans',
          'Parce qu’il n’est pas garanti par l’État',
        ],
        correctIndex: 0,
        explanation:
          'Le LEP, réservé aux revenus modestes, offre un taux bonifié pour compenser une cible de bénéficiaires plus restreinte.',
      },
    ],
  },
  'objectifs-epargne-ii': {
    id: 'objectifs-epargne-ii',
    moduleId: 'budget-epargne',
    title: "Fixer des objectifs d'épargne (II)",
    emoji: '🎯',
    xp: 45,
    intro:
      'Allons plus loin : arbitrages entre objectifs concurrents, biais comportementaux, et effet des ' +
      'intérêts composés sur les objectifs de long terme.',
    questions: [
      {
        id: 'q1',
        question: 'Comment arbitrer entre plusieurs objectifs d’épargne concurrents avec un revenu limité ?',
        options: [
          'Prioriser selon l’urgence et les conséquences d’un retard sur chaque objectif',
          'Répartir toujours à parts strictement égales',
          'Abandonner tous les objectifs sauf un au hasard',
          'Emprunter pour financer tous les objectifs à la fois',
        ],
        correctIndex: 0,
        explanation:
          'Hiérarchiser selon l’urgence et l’impact d’un retard permet d’allouer intelligemment un revenu limité entre plusieurs objectifs.',
      },
      {
        id: 'q2',
        question: 'Le biais d’actualisation (préférence pour le présent) menace-t-il la tenue d’objectifs d’épargne à long terme ?',
        options: [
          'Oui, il pousse à privilégier la consommation immédiate au détriment du futur',
          'Non, ce biais n’existe pas en économie comportementale',
          'Non, il favorise au contraire l’épargne longue',
          'Il ne concerne que les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Le biais d’actualisation pousse à surévaluer la satisfaction immédiate par rapport aux bénéfices futurs, fragilisant les objectifs longs.',
      },
      {
        id: 'q3',
        question: 'Un objectif d’épargne jamais atteint après plusieurs tentatives doit-il être abandonné ou reformulé ?',
        options: [
          'Reformulé pour rester réaliste et motivant',
          'Abandonné définitivement sans reformulation',
          'Doublé en ambition pour se forcer',
          'Cela n’a aucune importance',
        ],
        correctIndex: 0,
        explanation:
          'Un objectif systématiquement manqué est souvent mal calibré ; le reformuler de façon plus réaliste relance la dynamique.',
      },
      {
        id: 'q4',
        question: 'Pourquoi automatiser plusieurs objectifs distincts sur des sous-comptes séparés améliore-t-il la discipline ?',
        options: [
          'Cela évite la fongibilité mentale de l’argent en donnant un compte dédié à chaque projet',
          'Cela complique inutilement la gestion sans bénéfice',
          'Cela n’a aucun effet psychologique démontré',
          'Cela augmente automatiquement les taux d’intérêt',
        ],
        correctIndex: 0,
        explanation:
          'Séparer l’argent par objectif (comptabilité mentale) réduit la tentation de puiser dans l’épargne d’un projet pour un autre usage.',
      },
      {
        id: 'q5',
        question: 'Quel est le risque principal d’un objectif d’épargne trop ambitieux dès le départ ?',
        options: [
          'Le découragement et l’abandon prématuré faute de résultats visibles rapidement',
          'Un enrichissement trop rapide',
          'Une taxation supplémentaire automatique',
          'Aucun risque particulier',
        ],
        correctIndex: 0,
        explanation:
          'Un objectif hors de portée décourage souvent avant même d’avoir progressé, alors qu’un objectif réaliste entretient la motivation.',
      },
      {
        id: 'q6',
        question: 'Comment un objectif d’épargne pour la retraite doit-il intégrer l’effet des intérêts composés ?',
        options: [
          'Commencer tôt réduit l’effort mensuel nécessaire grâce aux intérêts composés qui s’accumulent dans la durée',
          'Les intérêts composés n’ont aucun effet sur un horizon aussi long',
          'Il vaut mieux commencer le plus tard possible',
          'Les intérêts composés ne s’appliquent qu’aux crédits',
        ],
        correctIndex: 0,
        explanation:
          'Plus l’horizon est long, plus les intérêts composés démultiplient l’effet des versements, réduisant l’effort mensuel nécessaire pour un même objectif final.',
      },
    ],
  },
  'pea-ii': {
    id: 'pea-ii',
    moduleId: 'investissement',
    title: "Le PEA (Plan d'Épargne en Actions) (II)",
    emoji: '📜',
    xp: 45,
    intro:
      'Allons plus loin : arbitrages PEA vs assurance-vie, gestion des titres non éligibles, et stratégies ' +
      'de sortie optimisées.',
    questions: [
      {
        id: 'q1',
        question: 'Pour un objectif de très long terme avec forte exposition actions, le PEA est-il généralement plus avantageux fiscalement qu’un compte-titres ordinaire ?',
        options: [
          'Oui, grâce à l’exonération d’impôt sur le revenu des gains après 5 ans',
          'Non, la fiscalité est strictement identique dans les deux cas',
          'Non, le compte-titres est toujours plus avantageux',
          'Cela dépend uniquement du courtier utilisé',
        ],
        correctIndex: 0,
        explanation:
          'L’exonération d’impôt sur le revenu après 5 ans rend le PEA structurellement plus avantageux qu’un compte-titres ordinaire pour un investissement actions de long terme.',
      },
      {
        id: 'q2',
        question: 'Que se passe-t-il si une action initialement éligible au PEA change de nationalité de siège social et devient non-éligible ?',
        options: [
          'Elle doit en principe être sortie du PEA, sous peine de remise en cause de l’avantage fiscal du plan',
          'Rien du tout, elle peut rester indéfiniment dans le PEA',
          'Le PEA est automatiquement transformé en compte-titres',
          'L’action est automatiquement vendue par la banque sans préavis',
        ],
        correctIndex: 0,
        explanation:
          'Un titre qui perd son éligibilité doit être sorti du PEA pour ne pas remettre en cause le cadre fiscal avantageux du plan.',
      },
      {
        id: 'q3',
        question: 'Entre PEA et assurance-vie, lequel est généralement plus adapté à une diversification incluant des obligations et fonds euros ?',
        options: [
          'L’assurance-vie, qui offre un accès plus large aux fonds euros et obligataires',
          'Le PEA, structurellement conçu pour cela',
          'Les deux sont strictement identiques sur ce point',
          'Aucun des deux ne permet ce type de diversification',
        ],
        correctIndex: 0,
        explanation:
          'Le PEA est cantonné aux actions et fonds actions européens, alors que l’assurance-vie permet d’accéder plus largement aux fonds euros et obligataires.',
      },
      {
        id: 'q4',
        question: 'Quelle stratégie de sortie permet de lisser l’imposition des prélèvements sociaux sur un PEA ancien de grande valeur ?',
        options: [
          'Échelonner les retraits partiels dans le temps plutôt qu’un retrait unique en capital',
          'Retirer obligatoirement 100% du capital en une seule fois',
          'Il n’existe aucune stratégie possible',
          'Convertir immédiatement en Livret A',
        ],
        correctIndex: 0,
        explanation:
          'Échelonner les retraits permet de mieux gérer le moment et le montant des prélèvements sociaux dus sur les gains, plutôt qu’un choc fiscal unique.',
      },
      {
        id: 'q5',
        question: 'Un investisseur souhaitant transmettre un capital à ses enfants doit-il considérer le PEA comme l’outil le plus adapté à la transmission ?',
        options: [
          'Non, l’assurance-vie offre généralement un cadre de transmission plus avantageux',
          'Oui, le PEA est spécifiquement conçu pour la transmission',
          'Les deux sont rigoureusement équivalents en transmission',
          'Le PEA est le seul outil permettant de transmettre un capital',
        ],
        correctIndex: 0,
        explanation:
          'L’assurance-vie bénéficie d’un cadre successoral spécifique généralement plus favorable que le PEA pour la transmission de patrimoine.',
      },
      {
        id: 'q6',
        question: 'Pourquoi un investisseur proche de la retraite pourrait-il choisir la conversion de son PEA en rente viagère plutôt qu’un retrait en capital ?',
        options: [
          'Pour sécuriser un revenu régulier à vie, avec une fiscalité avantageuse sur cette rente',
          'Parce que le retrait en capital est interdit après 60 ans',
          'Parce que la rente viagère rapporte toujours plus que le capital total investi',
          'Il n’existe aucune différence entre ces deux options',
        ],
        correctIndex: 0,
        explanation:
          'La rente viagère issue d’un PEA bénéficie d’une exonération d’impôt sur le revenu et sécurise un revenu régulier, un arbitrage pertinent selon les besoins de l’épargnant.',
      },
    ],
  },
  'credit-responsable-ii': {
    id: 'credit-responsable-ii',
    moduleId: 'credit-emprunt',
    title: 'Le crédit responsable (II)',
    emoji: '⚠️',
    xp: 40,
    intro:
      'Allons plus loin : procédure de surendettement, effacement de dettes, et prévention comportementale ' +
      'du risque de surendettement.',
    questions: [
      {
        id: 'q1',
        question: 'Que peut décider la commission de surendettement après examen d’un dossier recevable ?',
        options: [
          'Un plan de remboursement échelonné, un moratoire, voire un effacement partiel ou total de dettes selon les cas',
          'Uniquement la saisie immédiate de tous les biens',
          'Rien, elle n’a aucun pouvoir de décision',
          'L’incarcération systématique du débiteur',
        ],
        correctIndex: 0,
        explanation:
          'Selon la gravité de la situation, la commission peut proposer un rééchelonnement, un moratoire ou recommander un effacement partiel ou total des dettes.',
      },
      {
        id: 'q2',
        question: 'Une procédure de rétablissement personnel (effacement de dettes) a-t-elle des conséquences sur la capacité future à emprunter ?',
        options: [
          'Oui, elle entraîne une inscription au FICP pour une durée déterminée qui limite l’accès au crédit',
          'Non, aucune conséquence n’en découle',
          'Non, elle améliore au contraire l’accès au crédit',
          'Elle ne concerne que les crédits professionnels',
        ],
        correctIndex: 0,
        explanation:
          'Une procédure de rétablissement personnel s’accompagne d’une inscription au FICP, limitant l’accès à de nouveaux crédits pendant la durée d’inscription.',
      },
      {
        id: 'q3',
        question: 'Pourquoi le cumul de plusieurs crédits renouvelables auprès d’organismes différents est-il particulièrement dangereux ?',
        options: [
          'Le taux d’endettement réel devient difficile à percevoir globalement, chaque organisme n’ayant pas de vision complète de la situation',
          'Cela réduit toujours le risque global',
          'Les organismes de crédit partagent automatiquement toutes les informations entre eux',
          'Cela n’a aucun impact particulier',
        ],
        correctIndex: 0,
        explanation:
          'Sans centralisation immédiate de l’information entre organismes prêteurs, un emprunteur peut accumuler des crédits dont le poids global échappe à une vision d’ensemble, augmentant le risque.',
      },
      {
        id: 'q4',
        question: 'Quel indicateur comportemental précède souvent, des mois à l’avance, un basculement vers le surendettement ?',
        options: [
          'Le recours régulier au découvert bancaire pour boucler les fins de mois',
          'Une épargne mensuelle régulière et croissante',
          'Un taux d’endettement stable et faible',
          'Un remboursement anticipé des crédits en cours',
        ],
        correctIndex: 0,
        explanation:
          'Un recours répété au découvert pour finir le mois est un signal d’alerte précoce souvent observé avant une bascule vers des difficultés plus sérieuses.',
      },
      {
        id: 'q5',
        question: 'Le "reste à vivre" retenu par la commission de surendettement est-il calculé de la même façon que celui utilisé par une banque pour un nouveau crédit ?',
        options: [
          'Non, la commission applique un barème réglementaire spécifique de reste à vivre minimal protégé',
          'Oui, exactement de la même façon dans tous les cas',
          'Non, la commission ne calcule aucun reste à vivre',
          'Cela dépend uniquement du nombre de crédits en cours',
        ],
        correctIndex: 0,
        explanation:
          'La commission applique un barème réglementaire garantissant un reste à vivre minimal protégé au débiteur, distinct des critères commerciaux d’une banque.',
      },
      {
        id: 'q6',
        question: 'Pourquoi anticiper et solliciter un rendez-vous bancaire dès les premières difficultés est-il plus efficace qu’attendre l’accumulation d’impayés ?',
        options: [
          'Des solutions amiables (rééchelonnement, renégociation) sont plus facilement trouvées avant l’aggravation de la situation',
          'Cela n’a aucune influence sur l’issue de la situation',
          'Les banques refusent toujours toute discussion avant un impayé',
          'Cela aggrave systématiquement le dossier',
        ],
        correctIndex: 0,
        explanation:
          'Agir tôt laisse plus de marge de manœuvre pour des solutions amiables, alors qu’une situation déjà dégradée réduit les options disponibles.',
      },
    ],
  },
  'tmi-ii': {
    id: 'tmi-ii',
    moduleId: 'fiscalite',
    title: "La Tranche Marginale d'Imposition (TMI) (II)",
    emoji: '📐',
    xp: 45,
    intro:
      'Allons plus loin : arbitrage PFU vs barème selon la TMI, effet de seuil sur les aides sociales, et ' +
      'stratégies de lissage de revenus exceptionnels.',
    questions: [
      {
        id: 'q1',
        question: 'Pour quelle TMI approximative le PFU (flat tax à 30%) devient-il moins avantageux que le barème progressif sur les revenus du capital ?',
        options: [
          'En dessous de la tranche à 11%, le barème progressif est souvent plus avantageux que le PFU',
          'Le PFU est toujours plus avantageux quelle que soit la TMI',
          'Le barème progressif n’est jamais plus avantageux',
          'Cela ne dépend jamais de la TMI mais uniquement du type de revenu',
        ],
        correctIndex: 0,
        explanation:
          'Pour une TMI faible (0% ou 11%), l’imposition au barème progressif des revenus du capital est souvent inférieure au taux forfaitaire de 30% du PFU.',
      },
      {
        id: 'q2',
        question: 'Un revenu exceptionnel ponctuel (prime, cession) peut-il être lissé fiscalement pour limiter l’effet de la progressivité ?',
        options: [
          'Oui, certains dispositifs de quotient permettent d’étaler l’imposition d’un revenu exceptionnel',
          'Non, aucun dispositif de lissage n’existe en France',
          'Non, un revenu exceptionnel est toujours exonéré d’impôt',
          'Cela ne concerne que les indépendants',
        ],
        correctIndex: 0,
        explanation:
          'Le système du quotient permet, sous conditions, d’atténuer la progressivité de l’impôt sur un revenu exceptionnel en le répartissant fictivement sur plusieurs années.',
      },
      {
        id: 'q3',
        question: 'Le franchissement d’un seuil de revenu peut-il faire perdre le bénéfice de certaines aides sociales, indépendamment de la TMI elle-même ?',
        options: [
          'Oui, certaines prestations sociales sont soumises à des plafonds de ressources qui créent des effets de seuil parfois plus impactants que l’impôt lui-même',
          'Non, les aides sociales ne dépendent jamais du revenu',
          'Non, seule la TMI détermine l’accès aux aides sociales',
          'Cela ne concerne que les indépendants',
        ],
        correctIndex: 0,
        explanation:
          'Le franchissement d’un plafond de ressources peut faire perdre certaines aides sociales, créant un effet de seuil qui peut parfois peser plus lourd que la seule hausse de TMI.',
      },
      {
        id: 'q4',
        question: 'Une hausse de TMI sur une année isolée (bonus exceptionnel) justifie-t-elle toujours de renoncer au PFU sur les revenus du capital cette même année ?',
        options: [
          'Pas nécessairement, il faut comparer précisément la TMI de cette année précise avec le taux du PFU sur ces revenus spécifiques',
          'Oui, systématiquement dans tous les cas',
          'Non, le PFU est toujours obligatoire cette année-là',
          'Cela ne dépend que du montant total des revenus du capital',
        ],
        correctIndex: 0,
        explanation:
          'L’arbitrage PFU/barème doit se faire chaque année selon la TMI réelle de cette année précise, car une hausse ponctuelle de TMI peut rendre le PFU de nouveau plus favorable.',
      },
      {
        id: 'q5',
        question: 'Le taux marginal d’imposition intègre-t-il les effets de la décote et des plafonnements, ou reflète-t-il uniquement le barème brut par tranches ?',
        options: [
          'La TMI affichée reflète le barème par tranches ; le taux marginal réel peut différer une fois décote et plafonnements pris en compte',
          'La TMI intègre toujours automatiquement tous les mécanismes correctifs',
          'La décote n’a aucun impact sur le taux réellement supporté',
          'Le plafonnement des niches n’a aucun lien avec la TMI',
        ],
        correctIndex: 0,
        explanation:
          'La TMI théorique correspond au barème par tranches, mais des mécanismes comme la décote ou le plafonnement des niches peuvent faire varier le taux marginal réel effectivement supporté.',
      },
      {
        id: 'q6',
        question: 'Un contribuable proche de la limite haute de sa tranche peut-il arbitrer le moment de perception d’un revenu variable (ex : dividendes d’une société qu’il contrôle) ?',
        options: [
          'Oui, décaler la perception d’un revenu sur une année différente peut permettre d’optimiser la tranche marginale applicable',
          'Non, la date de perception d’un revenu n’a jamais d’impact fiscal',
          'Non, ce type d’arbitrage est totalement interdit',
          'Cela ne concerne que les revenus salariaux',
        ],
        correctIndex: 0,
        explanation:
          'Pour un dirigeant maîtrisant le moment de distribution de revenus (dividendes par exemple), arbitrer l’année de perception peut permettre d’optimiser légalement la tranche marginale applicable.',
      },
    ],
  },
  'bfr-ii': {
    id: 'bfr-ii',
    moduleId: 'finance-entreprise',
    title: 'Le BFR (Besoin en Fonds de Roulement) (II)',
    emoji: '🔄',
    xp: 40,
    intro:
      'Allons plus loin : lien entre BFR, fonds de roulement et trésorerie nette, effet ciseau lors d’une ' +
      'forte croissance, et leviers avancés d’optimisation.',
    questions: [
      {
        id: 'q1',
        question: 'Comment s’articulent BFR, Fonds de Roulement (FR) et trésorerie nette dans l’équation fondamentale de la trésorerie ?',
        options: [
          'Trésorerie nette = Fonds de Roulement - BFR',
          'Trésorerie nette = BFR uniquement, sans lien avec le FR',
          'Fonds de Roulement = Trésorerie nette x BFR',
          'Ces trois notions sont totalement indépendantes',
        ],
        correctIndex: 0,
        explanation:
          'L’équation fondamentale de la trésorerie s’écrit Trésorerie nette = Fonds de Roulement - BFR : un FR insuffisant face au BFR dégrade la trésorerie.',
      },
      {
        id: 'q2',
        question: 'Qu’est-ce que "l’effet ciseau" que peut rencontrer une entreprise en très forte croissance ?',
        options: [
          'Le BFR augmente plus vite que les ressources de financement disponibles, créant une tension de trésorerie malgré une activité florissante',
          'Les bénéfices diminuent systématiquement en cas de croissance',
          'Le chiffre d’affaires baisse mécaniquement avec la croissance',
          'Cela ne concerne que les entreprises en difficulté',
        ],
        correctIndex: 0,
        explanation:
          'L’effet ciseau survient quand la croissance du BFR dépasse celle des ressources financières disponibles, pouvant mettre en péril une entreprise pourtant rentable et en forte croissance.',
      },
      {
        id: 'q3',
        question: 'Le recours à l’affacturage (cession de créances clients à un organisme financier) permet-il de réduire l’impact du BFR sur la trésorerie ?',
        options: [
          'Oui, il transforme des créances clients à encaisser en trésorerie immédiate, moyennant un coût',
          'Non, l’affacturage n’a aucun lien avec le BFR',
          'Non, cela augmente systématiquement le BFR',
          'Cela ne concerne que les stocks, jamais les créances',
        ],
        correctIndex: 0,
        explanation:
          'L’affacturage permet d’obtenir rapidement des liquidités sur des créances clients non encore encaissées, réduisant l’impact du décalage de trésorerie lié au BFR.',
      },
      {
        id: 'q4',
        question: 'Une entreprise qui réduit ses stocks via une gestion en flux tendus (juste-à-temps) vise quel effet sur son BFR ?',
        options: [
          'Réduire le BFR en limitant le capital immobilisé dans les stocks',
          'Augmenter systématiquement son BFR',
          'Cela n’a aucun effet sur le BFR',
          'Cela ne concerne que le fonds de roulement, jamais le BFR',
        ],
        correctIndex: 0,
        explanation:
          'La gestion en flux tendus limite le volume de stocks immobilisés, réduisant d’autant le besoin en fonds de roulement lié à cette composante.',
      },
      {
        id: 'q5',
        question: 'Pourquoi un investisseur analysant une entreprise avant rachat s’intéresse-t-il de près à la variation du BFR sur plusieurs exercices ?',
        options: [
          'Une dérive du BFR peut cacher des besoins de financement futurs non visibles dans le seul résultat net',
          'Le BFR n’a aucun intérêt dans une analyse de rachat d’entreprise',
          'Seul le chiffre d’affaires compte dans ce type d’analyse',
          'Le BFR est toujours stable d’une année sur l’autre',
        ],
        correctIndex: 0,
        explanation:
          'L’évolution du BFR révèle des besoins de financement futurs potentiels que le résultat net seul ne montre pas, un point clé dans l’analyse avant acquisition.',
      },
      {
        id: 'q6',
        question: 'Le financement du BFR par un découvert bancaire permanent est-il une solution structurellement saine à long terme ?',
        options: [
          'Non, un découvert permanent est coûteux et fragile ; des solutions structurelles (ligne de trésorerie dédiée, affacturage) sont généralement préférables',
          'Oui, c’est la solution recommandée dans tous les cas',
          'Non, un découvert bancaire est illégal pour financer un BFR',
          'Cela ne dépend jamais du montant du découvert utilisé',
        ],
        correctIndex: 0,
        explanation:
          'Un découvert bancaire permanent est coûteux et précaire ; des outils dédiés au financement du BFR (ligne de trésorerie, affacturage) offrent généralement une solution plus stable et moins onéreuse.',
      },
    ],
  },
  'cac40-ii': {
    id: 'cac40-ii',
    moduleId: 'economie-francaise',
    title: 'Le CAC 40 (II)',
    emoji: '📈',
    xp: 40,
    intro:
      'Allons plus loin : limites du CAC 40 comme baromètre économique, concentration sectorielle, et ' +
      'comparaison avec d’autres grands indices internationaux.',
    questions: [
      {
        id: 'q1',
        question: 'Le CAC 40 est-il un indicateur fidèle de la santé de l’ensemble du tissu économique français (PME comprises) ?',
        options: [
          'Non, il ne reflète que la performance de 40 grandes entreprises cotées, souvent très internationalisées',
          'Oui, il représente fidèlement toutes les entreprises françaises, y compris les PME',
          'Oui, car toutes les entreprises françaises y sont incluses',
          'Le CAC 40 ne concerne que les entreprises publiques',
        ],
        correctIndex: 0,
        explanation:
          'Le CAC 40 ne reflète que la performance de 40 grandes entreprises cotées et souvent très internationalisées, une image partielle du tissu économique français majoritairement composé de PME.',
      },
      {
        id: 'q2',
        question: 'Une forte concentration sectorielle du CAC 40 (ex : luxe, banque, énergie) peut-elle biaiser sa performance globale ?',
        options: [
          'Oui, les performances de quelques secteurs dominants peuvent tirer l’indice dans un sens qui ne reflète pas l’ensemble de l’économie',
          'Non, tous les secteurs pèsent toujours de façon strictement égale',
          'Non, la concentration sectorielle n’existe pas dans cet indice',
          'Cela ne concerne que les indices américains',
        ],
        correctIndex: 0,
        explanation:
          'Une poignée de secteurs fortement représentés (luxe, banque, énergie...) peut dominer la performance globale de l’indice, sans nécessairement refléter la tendance de l’ensemble de l’économie.',
      },
      {
        id: 'q3',
        question: 'Comparé au S&P 500 américain, le CAC 40 présente-t-il un niveau de diversification sectorielle et géographique comparable ?',
        options: [
          'Non, le CAC 40 comprend beaucoup moins d’entreprises et une diversification sectorielle plus restreinte que le S&P 500',
          'Oui, ils sont rigoureusement équivalents en diversification',
          'Non, le CAC 40 est en réalité plus diversifié que le S&P 500',
          'La comparaison entre les deux indices n’a aucun sens',
        ],
        correctIndex: 0,
        explanation:
          'Avec seulement 40 valeurs contre 500 pour le S&P 500, le CAC 40 offre une diversification sectorielle et géographique nettement plus restreinte.',
      },
      {
        id: 'q4',
        question: 'Le chiffre d’affaires des entreprises du CAC 40 réalisé hors de France influence-t-il la lecture de l’indice comme baromètre de l’économie française ?',
        options: [
          'Oui, une large part de l’activité de ces multinationales étant réalisée à l’étranger, l’indice reflète aussi la conjoncture internationale',
          'Non, ces entreprises réalisent l’intégralité de leur chiffre d’affaires en France',
          'Non, le chiffre d’affaires à l’étranger n’a aucun impact sur le cours de bourse',
          'Cela ne concerne qu’un nombre très limité d’entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Une part importante du chiffre d’affaires des grandes entreprises du CAC 40 est réalisée hors de France, ce qui fait de l’indice un reflet autant de la conjoncture mondiale que nationale.',
      },
      {
        id: 'q5',
        question: 'Pourquoi certains analystes recommandent-ils de compléter une exposition au CAC 40 par des indices internationaux plutôt que de s’y limiter ?',
        options: [
          'Pour réduire le risque de concentration géographique et sectorielle propre à un indice national restreint',
          'Parce que le CAC 40 est interdit aux investisseurs particuliers',
          'Parce que le CAC 40 garantit toujours une meilleure performance que les indices étrangers',
          'Cela n’a aucun intérêt en termes de diversification',
        ],
        correctIndex: 0,
        explanation:
          'Diversifier au-delà du seul CAC 40 permet de réduire l’exposition à la concentration géographique et sectorielle propre à cet indice restreint à 40 valeurs françaises.',
      },
      {
        id: 'q6',
        question: 'Une hausse du CAC 40 signifie-t-elle nécessairement une amélioration du niveau de vie moyen des ménages français ?',
        options: [
          'Pas nécessairement, la performance boursière des grandes entreprises cotées ne se traduit pas mécaniquement par une hausse du niveau de vie de l’ensemble des ménages',
          'Oui, systématiquement et proportionnellement',
          'Oui, car tous les ménages français détiennent des actions du CAC 40',
          'Cela ne dépend que du taux de chômage',
        ],
        correctIndex: 0,
        explanation:
          'La performance du CAC 40 concerne avant tout les actionnaires de ces grandes entreprises ; elle ne se traduit pas automatiquement par une amélioration du niveau de vie de l’ensemble des ménages.',
      },
    ],
  },
  'interets-composes': {
    id: 'interets-composes',
    moduleId: 'budget-epargne',
    title: 'Le pouvoir des intérêts composés',
    emoji: '📈',
    xp: 30,
    intro:
      "Les intérêts composés font fructifier ton épargne en générant des intérêts sur les intérêts déjà " +
      "accumulés, pas seulement sur le capital initial. Plus l'horizon est long, plus cet effet boule de " +
      'neige devient puissant, même avec de petits versements réguliers. Comprendre ce mécanisme aide à ' +
      "saisir pourquoi commencer tôt compte plus que le montant investi au départ.",
    questions: [
      {
        id: 'q1',
        question: 'Que signifie "intérêts composés" par opposition à "intérêts simples" ?',
        options: [
          'Les intérêts générés produisent eux-mêmes des intérêts les années suivantes',
          'Les intérêts sont calculés une seule fois sur le capital initial',
          'Les intérêts composés sont toujours interdits en France',
          'Il n’existe aucune différence entre les deux',
        ],
        correctIndex: 0,
        explanation:
          'Avec les intérêts composés, les gains d’une année s’ajoutent au capital et génèrent eux-mêmes des intérêts l’année suivante, contrairement aux intérêts simples calculés uniquement sur le capital de départ.',
      },
      {
        id: 'q2',
        question: 'Entre commencer à épargner à 25 ans ou à 35 ans avec le même montant mensuel, quel est l’effet des intérêts composés ?',
        options: [
          'Commencer 10 ans plus tôt génère un capital final nettement supérieur',
          'Le moment de départ n’a aucune importance',
          'Commencer plus tard rapporte toujours plus',
          'Cela dépend uniquement du taux d’intérêt, jamais de la durée',
        ],
        correctIndex: 0,
        explanation:
          'Plus la durée de capitalisation est longue, plus l’effet des intérêts composés s’amplifie, rendant les 10 années supplémentaires très précieuses.',
      },
      {
        id: 'q3',
        question: 'Qu’est-ce que la "règle des 72" utilisée pour estimer rapidement un temps de doublement de capital ?',
        options: [
          'Diviser 72 par le taux de rendement annuel pour estimer le nombre d’années nécessaires pour doubler son capital',
          'Multiplier le capital par 72%',
          'Une règle fiscale sur les successions',
          'Un plafond réglementaire d’épargne',
        ],
        correctIndex: 0,
        explanation:
          'La règle des 72 est une approximation rapide : diviser 72 par le taux annuel donne le nombre d’années approximatif pour doubler un capital placé.',
      },
      {
        id: 'q4',
        question: 'Les intérêts composés s’appliquent-ils uniquement à l’épargne, ou aussi aux dettes ?',
        options: [
          'Ils s’appliquent aussi aux dettes, ce qui peut faire grossir rapidement un solde impayé',
          'Ils ne concernent jamais les crédits',
          'Ils s’appliquent uniquement aux livrets réglementés',
          'Ils n’existent que pour les actions en bourse',
        ],
        correctIndex: 0,
        explanation:
          'Le même mécanisme joue en défaveur de l’emprunteur sur une dette non remboursée, dont les intérêts impayés peuvent eux-mêmes générer des intérêts.',
      },
      {
        id: 'q5',
        question: 'Pourquoi un versement mensuel modeste mais régulier peut-il produire un capital important sur 30 ans ?',
        options: [
          'Grâce à l’accumulation progressive des intérêts composés sur chaque versement au fil du temps',
          'Parce que les banques doublent automatiquement les petits montants',
          'Cela ne fonctionne qu’avec de gros versements ponctuels',
          'Les versements réguliers ne génèrent jamais d’intérêts',
        ],
        correctIndex: 0,
        explanation:
          'Chaque versement, même petit, bénéficie de la capitalisation sur une durée longue, ce qui peut produire un capital final bien supérieur à la somme des versements.',
      },
      {
        id: 'q6',
        question: 'La fréquence de capitalisation des intérêts (annuelle, mensuelle) a-t-elle un effet sur le rendement final ?',
        options: [
          'Oui, une capitalisation plus fréquente augmente légèrement le rendement final à taux nominal identique',
          'Non, la fréquence n’a jamais aucun effet',
          'Non, seule la durée totale compte',
          'La capitalisation mensuelle est toujours interdite',
        ],
        correctIndex: 0,
        explanation:
          'Plus les intérêts sont recalculés fréquemment, plus tôt ils commencent eux-mêmes à produire des intérêts, ce qui améliore légèrement le rendement effectif.',
      },
    ],
  },
  'budget-couple': {
    id: 'budget-couple',
    moduleId: 'budget-epargne',
    title: 'Gérer son budget à deux',
    emoji: '👫',
    xp: 30,
    intro:
      "Gérer un budget à deux implique de choisir une organisation : compte joint, comptes séparés, ou un " +
      "mix des deux selon les postes de dépenses. Une bonne pratique consiste à répartir les charges " +
      "communes proportionnellement aux revenus de chacun plutôt qu'à parts strictement égales. Communiquer " +
      'régulièrement sur les objectifs financiers communs évite les tensions liées à l’argent, un sujet ' +
      'sensible dans de nombreux couples.',
    questions: [
      {
        id: 'q1',
        question: 'Quelle organisation bancaire est souvent recommandée pour gérer les charges communes d’un couple ?',
        options: [
          'Un compte joint dédié aux charges communes, en complément de comptes personnels',
          'Un compte unique et obligatoire pour toutes les dépenses',
          'Il est interdit d’avoir des comptes séparés en couple',
          'Chacun doit payer l’intégralité des charges à tour de rôle',
        ],
        correctIndex: 0,
        explanation:
          'Un compte joint pour les charges communes, complété par des comptes personnels, permet de mutualiser l’essentiel tout en conservant une autonomie financière.',
      },
      {
        id: 'q2',
        question: 'Pourquoi répartir les charges communes proportionnellement aux revenus peut-il être plus équitable qu’un partage à parts égales ?',
        options: [
          'Cela laisse un reste à vivre proportionnellement comparable à chacun, quel que soit l’écart de revenus',
          'Cela favorise toujours celui qui gagne le plus',
          'Un partage à parts égales est toujours plus juste',
          'La proportionnalité n’a aucun intérêt pratique',
        ],
        correctIndex: 0,
        explanation:
          'Avec des revenus très différents, un partage proportionnel évite qu’un partenaire aux revenus plus faibles supporte un effort relatif disproportionné.',
      },
      {
        id: 'q3',
        question: 'Faut-il aborder ses objectifs d’épargne communs avant ou après avoir constitué un compte joint ?',
        options: [
          'Idéalement avant, pour aligner les attentes de chacun sur l’usage de cet argent commun',
          'Cela n’a aucune importance dans quel ordre',
          'Toujours après, jamais avant',
          'Les objectifs communs sont automatiques dès l’ouverture du compte',
        ],
        correctIndex: 0,
        explanation:
          'Clarifier les objectifs communs en amont évite les malentendus sur l’utilisation de l’argent placé sur le compte joint.',
      },
      {
        id: 'q4',
        question: 'Que faire en cas de désaccord récurrent sur les dépenses au sein du couple ?',
        options: [
          'Formaliser un budget commun avec des règles claires et des points réguliers pour en discuter',
          'Éviter à tout prix d’en parler',
          'Ouvrir systématiquement plus de comptes séparés',
          'Laisser toujours un seul partenaire décider seul',
        ],
        correctIndex: 0,
        explanation:
          'Un cadre budgétaire clair et des échanges réguliers réduisent les tensions liées à l’argent, sujet souvent sensible dans les relations de couple.',
      },
      {
        id: 'q5',
        question: 'Un couple non marié (concubinage) a-t-il les mêmes droits automatiques sur un compte joint qu’un couple marié ?',
        options: [
          'Les règles de fonctionnement du compte joint sont similaires, mais d’autres droits (succession, fiscalité) diffèrent selon le statut du couple',
          'Oui, absolument aucune différence n’existe jamais',
          'Non, le concubinage interdit tout compte joint',
          'Le mariage est obligatoire pour ouvrir un compte joint',
        ],
        correctIndex: 0,
        explanation:
          'Le compte joint fonctionne de façon similaire quel que soit le statut du couple, mais d’autres aspects (succession, fiscalité) varient selon qu’on est marié, pacsé ou en concubinage.',
      },
      {
        id: 'q6',
        question: 'Pourquoi garder un compte personnel en plus du compte joint est-il souvent recommandé ?',
        options: [
          'Pour préserver une autonomie financière et une marge de dépenses personnelles sans justification',
          'Parce que la loi l’exige systématiquement',
          'Cela n’apporte aucun bénéfice pratique',
          'Pour cacher des dépenses à son partenaire',
        ],
        correctIndex: 0,
        explanation:
          'Conserver un espace financier personnel, même modeste, préserve l’autonomie de chacun sans remettre en cause la gestion commune des charges partagées.',
      },
    ],
  },
  'epargner-projet': {
    id: 'epargner-projet',
    moduleId: 'budget-epargne',
    title: 'Épargner pour un projet de vie',
    emoji: '🏡',
    xp: 30,
    intro:
      "Épargner pour un projet précis (mariage, achat immobilier, voyage) demande d'estimer un budget " +
      'réaliste et une échéance, puis de choisir un support d’épargne adapté à la durée. Un projet à moins ' +
      "de 2 ans se prête mal à des placements risqués, qui ont besoin de temps pour absorber leurs " +
      'fluctuations. Anticiper les coûts annexes souvent oubliés (frais de notaire, extras de mariage) évite ' +
      'les mauvaises surprises de dernière minute.',
    questions: [
      {
        id: 'q1',
        question: 'Pour un projet à échéance de 18 mois, quel type de support est le plus adapté ?',
        options: [
          'Un support sûr et disponible comme un livret, plutôt qu’un placement risqué',
          'Des actions individuelles très volatiles',
          'De la cryptomonnaie',
          'Un placement bloqué 10 ans',
        ],
        correctIndex: 0,
        explanation:
          'Sur un horizon aussi court, la priorité est la sécurité et la disponibilité du capital, pas la recherche de performance.',
      },
      {
        id: 'q2',
        question: 'Pourquoi les frais de notaire sont-ils souvent sous-estimés dans le budget d’un achat immobilier ?',
        options: [
          'Parce qu’ils représentent plusieurs pourcents du prix et sont facilement oubliés dans une première estimation',
          'Parce qu’ils n’existent pas en France',
          'Parce qu’ils sont toujours inclus dans le prix affiché',
          'Parce qu’ils sont payés par le vendeur uniquement',
        ],
        correctIndex: 0,
        explanation:
          'Les frais de notaire (souvent 7-8% dans l’ancien) s’ajoutent au prix d’achat et doivent être anticipés dans le budget global du projet.',
      },
      {
        id: 'q3',
        question: 'Quel est l’intérêt d’estimer un budget projet incluant une marge pour imprévus (10-15%) ?',
        options: [
          'Cela absorbe les dépassements courants sans remettre en cause tout le plan de financement',
          'Cela n’a aucune utilité pratique',
          'Cela signifie que le budget initial était mal calculé',
          'Une marge n’est utile que pour les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Une marge de sécurité anticipe les coûts additionnels quasi systématiques (extras, imprévus) sans déséquilibrer le financement global du projet.',
      },
      {
        id: 'q4',
        question: 'Pour un projet à horizon 7-10 ans (comme un apport immobilier futur), une petite part d’investissement en actions est-elle envisageable ?',
        options: [
          'Oui, un horizon suffisamment long permet d’envisager une part de risque modérée pour améliorer le rendement',
          'Non, jamais pour un projet avec une échéance connue',
          'Oui, mais uniquement à 100% en actions',
          'Cela dépend uniquement du montant du projet',
        ],
        correctIndex: 0,
        explanation:
          'Un horizon de plusieurs années laisse le temps d’absorber des fluctuations de marché, ouvrant la possibilité d’une part modérée de risque pour dynamiser l’épargne projet.',
      },
      {
        id: 'q5',
        question: 'Pourquoi séparer l’épargne projet de l’épargne de précaution sur des supports distincts ?',
        options: [
          'Pour éviter de puiser dans l’argent destiné au projet en cas d’imprévu du quotidien',
          'Cela n’a aucun intérêt, mieux vaut tout regrouper',
          'C’est une obligation légale',
          'Pour payer moins d’impôts automatiquement',
        ],
        correctIndex: 0,
        explanation:
          'Séparer les enveloppes évite la tentation ou la nécessité de puiser dans l’épargne projet pour un imprévu qui devrait être couvert par l’épargne de précaution.',
      },
      {
        id: 'q6',
        question: 'Que faire si, à mi-parcours, on constate que l’objectif de versement mensuel n’est pas tenu ?',
        options: [
          'Réajuster soit le montant mensuel restant, soit l’échéance ou l’ambition du projet',
          'Abandonner immédiatement le projet',
          'Emprunter pour compenser sans réajuster le plan',
          'Ignorer l’écart, cela se corrigera automatiquement',
        ],
        correctIndex: 0,
        explanation:
          'Un ajustement du montant, de l’échéance ou du périmètre du projet permet de garder un objectif réaliste plutôt que de subir un échec de fin de parcours.',
      },
    ],
  },
  'gerer-baisse-revenu': {
    id: 'gerer-baisse-revenu',
    moduleId: 'budget-epargne',
    title: 'Faire face à une baisse de revenu',
    emoji: '🌧️',
    xp: 30,
    intro:
      "Une baisse de revenu (chômage, réduction d'activité) impose de revoir rapidement son budget pour " +
      'prioriser les dépenses essentielles. Recalculer un budget minimal de survie, distinguer ce qui est ' +
      'reportable de ce qui ne l’est pas, aide à traverser la période sans s’endetter davantage. Contacter ' +
      'tôt ses créanciers (banque, bailleur) pour négocier des délais est souvent plus efficace que ' +
      "d'attendre l'accumulation d'impayés.",
    questions: [
      {
        id: 'q1',
        question: 'Quelle est la première action recommandée face à une baisse de revenu prévisible ?',
        options: [
          'Recalculer immédiatement un budget minimal en priorisant les dépenses essentielles',
          'Continuer son budget habituel sans rien changer',
          'Emprunter immédiatement pour compenser',
          'Attendre plusieurs mois avant de réagir',
        ],
        correctIndex: 0,
        explanation:
          'Adapter rapidement son budget aux nouvelles ressources limite le risque de creuser un déficit qui s’aggrave chaque mois.',
      },
      {
        id: 'q2',
        question: 'Pourquoi contacter sa banque ou son bailleur tôt en cas de difficulté est-il souvent recommandé ?',
        options: [
          'Des solutions amiables (report, échelonnement) sont plus facilement trouvées avant l’accumulation d’impayés',
          'Cela n’apporte jamais aucune solution',
          'Les créanciers refusent toujours toute discussion',
          'Il vaut mieux attendre le premier impayé pour agir',
        ],
        correctIndex: 0,
        explanation:
          'Anticiper la difficulté laisse plus de marge de négociation qu’une situation déjà dégradée par plusieurs mois d’impayés.',
      },
      {
        id: 'q3',
        question: 'L’épargne de précaution doit-elle être utilisée en priorité pendant une période de baisse de revenu ?',
        options: [
          'Oui, c’est précisément sa fonction : absorber une perte de revenu temporaire',
          'Non, il faut la garder intacte coûte que coûte',
          'Non, il vaut mieux s’endetter d’abord',
          'Elle ne sert que pour les gros achats',
        ],
        correctIndex: 0,
        explanation:
          'L’épargne de précaution est justement constituée pour ce type de situation : elle doit être mobilisée avant d’envisager un endettement supplémentaire.',
      },
      {
        id: 'q4',
        question: 'Quelles dépenses prioriser dans un budget minimal de survie ?',
        options: [
          'Le logement, l’alimentation et les factures essentielles avant les dépenses discrétionnaires',
          'Les loisirs et abonnements en priorité',
          'Toutes les dépenses au même niveau de priorité',
          'Uniquement le remboursement des crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'Sécuriser le toit, la nourriture et les factures vitales est prioritaire avant toute dépense non essentielle en période de ressources réduites.',
      },
      {
        id: 'q5',
        question: 'Existe-t-il des aides spécifiques à solliciter en cas de perte d’emploi ou de baisse brutale de revenu ?',
        options: [
          'Oui, allocations chômage, aides locales ou associatives peuvent être mobilisées selon la situation',
          'Non, aucune aide n’existe en France',
          'Seules les entreprises peuvent en bénéficier',
          'Ces aides ne concernent que les propriétaires',
        ],
        correctIndex: 0,
        explanation:
          'Selon la situation, des dispositifs comme les allocations chômage, les aides locales (CCAS) ou associatives peuvent apporter un soutien temporaire.',
      },
      {
        id: 'q6',
        question: 'Pourquoi éviter de recourir à un crédit renouvelable pour compenser une baisse de revenu durable ?',
        options: [
          'Ses taux élevés et la facilité d’usage répété peuvent aggraver la situation financière à moyen terme',
          'C’est au contraire la meilleure solution recommandée',
          'Le crédit renouvelable n’a aucun coût',
          'Cela n’a aucun rapport avec la situation',
        ],
        correctIndex: 0,
        explanation:
          'Un crédit renouvelable, avec des taux souvent élevés, risque d’ajouter une charge de remboursement supplémentaire à une situation déjà tendue.',
      },
    ],
  },
  'aides-sociales': {
    id: 'aides-sociales',
    moduleId: 'budget-epargne',
    title: 'Les aides et allocations en France',
    emoji: '🏛️',
    xp: 30,
    intro:
      'En France, plusieurs aides et allocations existent pour soutenir le budget des ménages selon leur ' +
      'situation : prime d’activité, aides au logement (APL), ou allocations familiales. Ces aides sont ' +
      'généralement soumises à des conditions de ressources et doivent être demandées activement, elles ne ' +
      'sont pas toujours versées automatiquement. Bien connaître ces dispositifs permet de ne pas laisser ' +
      'des droits inutilisés qui pourraient soulager un budget serré.',
    questions: [
      {
        id: 'q1',
        question: 'La prime d’activité s’adresse à quel type de public ?',
        options: [
          'Les travailleurs aux revenus modestes, pour compléter leurs revenus d’activité',
          'Uniquement les personnes sans emploi',
          'Uniquement les retraités',
          'Uniquement les étudiants',
        ],
        correctIndex: 0,
        explanation:
          'La prime d’activité complète les revenus des travailleurs (salariés ou indépendants) aux ressources modestes, sous conditions.',
      },
      {
        id: 'q2',
        question: 'L’aide au logement (APL) est-elle automatiquement versée dès qu’on est locataire ?',
        options: [
          'Non, elle doit être demandée activement et dépend des ressources et du loyer',
          'Oui, automatiquement pour tous les locataires',
          'Non, elle est réservée aux propriétaires',
          'Elle est versée uniquement aux étudiants',
        ],
        correctIndex: 0,
        explanation:
          'L’APL est soumise à conditions de ressources et de logement, et nécessite une démarche active auprès de la CAF pour être perçue.',
      },
      {
        id: 'q3',
        question: 'Pourquoi certaines aides sociales ne sont-elles pas perçues par tous les ayants droit ?',
        options: [
          'Par méconnaissance du dispositif ou complexité perçue des démarches administratives',
          'Parce qu’elles n’existent pas réellement',
          'Parce que la loi l’interdit pour certains foyers',
          'Parce que ces aides sont réservées aux entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Le non-recours aux aides sociales s’explique souvent par un manque d’information ou la complexité ressentie des démarches, malgré l’éligibilité réelle du foyer.',
      },
      {
        id: 'q4',
        question: 'Un changement de situation (perte d’emploi, naissance) peut-il modifier le montant des aides perçues ?',
        options: [
          'Oui, la plupart des aides sont recalculées en fonction de l’évolution de la situation du foyer',
          'Non, les aides restent figées à vie une fois attribuées',
          'Non, seule la CAF décide sans lien avec la situation réelle',
          'Cela ne concerne que les allocations chômage',
        ],
        correctIndex: 0,
        explanation:
          'Les aides sociales sont généralement réévaluées périodiquement selon les ressources et la composition du foyer, qui peuvent évoluer.',
      },
      {
        id: 'q5',
        question: 'Les allocations familiales dépendent-elles du nombre d’enfants à charge ?',
        options: [
          'Oui, le montant varie selon le nombre d’enfants et parfois les ressources du foyer',
          'Non, le montant est identique quel que soit le nombre d’enfants',
          'Non, elles ne concernent que le premier enfant',
          'Elles sont réservées aux familles monoparentales uniquement',
        ],
        correctIndex: 0,
        explanation:
          'Le montant des allocations familiales évolue avec le nombre d’enfants à charge, et certaines aides sont aussi modulées selon les ressources du foyer.',
      },
      {
        id: 'q6',
        question: 'Où peut-on vérifier ses droits potentiels aux aides sociales avant de faire une demande ?',
        options: [
          'Sur des simulateurs officiels (comme celui de la CAF ou du service public) qui estiment l’éligibilité',
          'Il n’existe aucun moyen de le savoir à l’avance',
          'Uniquement en se rendant physiquement dans une préfecture',
          'Uniquement via un avocat spécialisé',
        ],
        correctIndex: 0,
        explanation:
          'Des simulateurs officiels permettent d’estimer ses droits potentiels avant d’engager une démarche de demande d’aide.',
      },
    ],
  },
  'outils-budget': {
    id: 'outils-budget',
    moduleId: 'budget-epargne',
    title: 'Les outils numériques de gestion budgétaire',
    emoji: '📲',
    xp: 30,
    intro:
      'Les applications de gestion budgétaire et les agrégateurs bancaires permettent de centraliser ' +
      'plusieurs comptes pour avoir une vue d’ensemble de ses finances. Certains outils catégorisent ' +
      'automatiquement les dépenses grâce à l’intelligence artificielle, simplifiant le suivi sans saisie ' +
      'manuelle. Choisir un outil adapté à ses besoins (simplicité, sécurité, fonctionnalités) rend le suivi ' +
      'budgétaire plus durable dans le temps.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce qu’un agrégateur bancaire ?',
        options: [
          'Un outil qui centralise les comptes de plusieurs banques différentes en une seule vue',
          'Une banque en ligne classique',
          'Un livret d’épargne réglementé',
          'Un service qui bloque tous les comptes bancaires',
        ],
        correctIndex: 0,
        explanation:
          'Un agrégateur bancaire relie plusieurs comptes (même dans des banques différentes) pour offrir une vision consolidée de sa situation financière.',
      },
      {
        id: 'q2',
        question: 'Sur quel cadre réglementaire européen s’appuient les agrégateurs bancaires pour accéder aux données de comptes ?',
        options: [
          'La directive européenne sur les services de paiement (DSP2)',
          'Le règlement général sur la protection des données uniquement',
          'Aucun cadre réglementaire ne les encadre',
          'Une simple autorisation orale du client suffit sans cadre légal',
        ],
        correctIndex: 0,
        explanation:
          'La directive DSP2 encadre l’accès sécurisé aux données bancaires par des tiers agréés, dont les agrégateurs financiers.',
      },
      {
        id: 'q3',
        question: 'La catégorisation automatique des dépenses par une application est-elle toujours fiable à 100% ?',
        options: [
          'Non, elle peut nécessiter des corrections manuelles ponctuelles pour rester précise',
          'Oui, elle est toujours parfaite sans aucune erreur',
          'Non, elle est totalement aléatoire et inutile',
          'Cela ne concerne que les dépenses professionnelles',
        ],
        correctIndex: 0,
        explanation:
          'Si l’automatisation facilite grandement le suivi, une vérification occasionnelle reste utile pour corriger les catégorisations mal identifiées.',
      },
      {
        id: 'q4',
        question: 'Pourquoi vérifier la sécurité et l’agrément d’une application avant de connecter ses comptes bancaires ?',
        options: [
          'Pour s’assurer qu’elle respecte les normes de sécurité et de protection des données financières',
          'La sécurité n’a aucune importance pour ce type d’outil',
          'Toutes les applications sont automatiquement sécurisées par la loi',
          'Seules les banques doivent être sécurisées, pas les applications tierces',
        ],
        correctIndex: 0,
        explanation:
          'Connecter ses comptes bancaires à une application suppose de vérifier son agrément et ses standards de sécurité pour protéger ses données financières.',
      },
      {
        id: 'q5',
        question: 'Un outil de budget avec alertes automatiques (dépassement de seuil) présente quel avantage principal ?',
        options: [
          'Il permet de réagir rapidement à un dépassement plutôt que de le découvrir en fin de mois',
          'Il remplace totalement le besoin de gérer son budget',
          'Il garantit automatiquement d’épargner plus',
          'Il n’a aucun intérêt pratique',
        ],
        correctIndex: 0,
        explanation:
          'Une alerte en temps réel permet d’ajuster son comportement de dépense immédiatement, plutôt que de constater un dépassement après coup.',
      },
      {
        id: 'q6',
        question: 'Pourquoi certains préfèrent encore un suivi manuel (tableur, carnet) à une application automatisée ?',
        options: [
          'Cela peut renforcer la prise de conscience des dépenses par l’effort actif de saisie',
          'Le suivi manuel est toujours plus précis techniquement',
          'Les applications sont toujours payantes et inaccessibles',
          'Il n’existe aucune raison valable de préférer le manuel',
        ],
        correctIndex: 0,
        explanation:
          'L’effort actif de saisie manuelle peut renforcer la conscience des habitudes de dépense, un bénéfice comportemental que l’automatisation totale peut parfois estomper.',
      },
    ],
  },
  'epargne-retraite': {
    id: 'epargne-retraite',
    moduleId: 'budget-epargne',
    title: 'Préparer sa retraite dès aujourd’hui',
    emoji: '🌅',
    xp: 40,
    intro:
      "Préparer sa retraite tôt permet de profiter pleinement de l'effet des intérêts composés sur " +
      "plusieurs décennies. Le PER (Plan d'Épargne Retraite) offre une déduction fiscale à l'entrée en " +
      "échange d'un blocage des fonds jusqu'à la retraite, sauf cas de déblocage anticipé prévus par la " +
      'loi. Diversifier ses sources de revenus futurs (retraite obligatoire, épargne personnelle, ' +
      'immobilier) réduit la dépendance à un seul dispositif.',
    questions: [
      {
        id: 'q1',
        question: 'Quel est l’avantage fiscal principal d’un versement volontaire sur un PER ?',
        options: [
          'Une déduction du revenu imposable l’année du versement, dans certaines limites',
          'Une exonération totale et définitive de tout impôt',
          'Aucun avantage fiscal n’existe pour le PER',
          'Une réduction automatique de la TVA',
        ],
        correctIndex: 0,
        explanation:
          'Les versements volontaires sur un PER sont déductibles du revenu imposable dans une certaine limite annuelle, avec une fiscalité différée à la sortie.',
      },
      {
        id: 'q2',
        question: 'Les fonds placés sur un PER sont-ils bloqués jusqu’à la retraite dans tous les cas ?',
        options: [
          'Non, des cas de déblocage anticipé existent (achat de résidence principale, invalidité, décès du conjoint...)',
          'Oui, sans aucune exception possible',
          'Non, on peut retirer l’argent à tout moment sans condition',
          'Le PER n’a aucune contrainte de blocage',
        ],
        correctIndex: 0,
        explanation:
          'Si le PER est en principe bloqué jusqu’à la retraite, la loi prévoit plusieurs cas de déblocage anticipé, dont l’achat de la résidence principale.',
      },
      {
        id: 'q3',
        question: 'Pourquoi commencer à épargner pour sa retraite dès le début de sa carrière est-il particulièrement avantageux ?',
        options: [
          'L’horizon très long démultiplie l’effet des intérêts composés sur les versements',
          'Cela n’a aucun intérêt avant 50 ans',
          'Les jeunes actifs ne peuvent pas ouvrir de PER',
          'Le rendement est toujours plus faible en commençant tôt',
        ],
        correctIndex: 0,
        explanation:
          'Un horizon de plusieurs décennies permet aux versements, même modestes, de bénéficier pleinement de la capitalisation des intérêts composés.',
      },
      {
        id: 'q4',
        question: 'Pourquoi diversifier ses sources de revenus pour la retraite (régime obligatoire, épargne, immobilier) est-il recommandé ?',
        options: [
          'Pour réduire la dépendance à un seul dispositif et sécuriser son niveau de vie futur',
          'Parce que le régime obligatoire suffit toujours largement',
          'Cela n’apporte aucun bénéfice',
          'Pour payer plus d’impôts volontairement',
        ],
        correctIndex: 0,
        explanation:
          'Combiner plusieurs sources de revenus futurs limite le risque de dépendre uniquement d’un système (retraite obligatoire) dont les paramètres peuvent évoluer.',
      },
      {
        id: 'q5',
        question: 'Un versement sur un PER a-t-il le même intérêt fiscal immédiat pour tous les niveaux de revenu ?',
        options: [
          'Non, l’économie d’impôt immédiate dépend de la tranche marginale d’imposition du contribuable',
          'Oui, l’avantage est strictement identique pour tous',
          'Non, seuls les plus hauts revenus peuvent ouvrir un PER',
          'Le PER n’a aucun lien avec l’impôt sur le revenu',
        ],
        correctIndex: 0,
        explanation:
          'Comme pour toute déduction fiscale, l’économie d’impôt immédiate est proportionnelle à la tranche marginale d’imposition du contribuable.',
      },
      {
        id: 'q6',
        question: 'À la sortie du PER, la fiscalité est-elle identique quel que soit le mode de sortie (capital ou rente) ?',
        options: [
          'Non, le traitement fiscal diffère selon que la sortie se fait en capital ou en rente viagère',
          'Oui, absolument identique dans tous les cas',
          'Non, la sortie en capital est toujours totalement exonérée',
          'La sortie en rente est toujours interdite',
        ],
        correctIndex: 0,
        explanation:
          'Le régime fiscal à la sortie du PER varie selon le mode choisi (capital ou rente) et selon que les versements étaient déductibles ou non à l’entrée.',
      },
    ],
  },
  'budget-independant': {
    id: 'budget-independant',
    moduleId: 'budget-epargne',
    title: 'Le budget du travailleur indépendant',
    emoji: '💼',
    xp: 40,
    intro:
      'Un travailleur indépendant doit gérer un budget avec des revenus souvent irréguliers, en séparant ' +
      'clairement trésorerie professionnelle et budget personnel. Provisionner ses charges sociales et sa ' +
      'TVA au fil de l’eau évite la mauvaise surprise d’un prélèvement URSSAF important en fin de période. ' +
      'Se verser une "rémunération" régulière, même modeste, plutôt que de piocher au coup par coup dans la ' +
      'trésorerie de l’activité, structure durablement le budget personnel.',
    questions: [
      {
        id: 'q1',
        question: 'Pourquoi séparer un compte professionnel dédié du compte personnel est-il recommandé pour un indépendant ?',
        options: [
          'Pour distinguer clairement la trésorerie de l’activité des dépenses personnelles et faciliter le suivi',
          'Cela n’a aucune utilité pratique',
          'C’est toujours interdit pour les micro-entrepreneurs',
          'Pour payer automatiquement moins de charges sociales',
        ],
        correctIndex: 0,
        explanation:
          'Séparer les flux professionnels et personnels clarifie la gestion et facilite le calcul des charges et impôts dus sur l’activité.',
      },
      {
        id: 'q2',
        question: 'Pourquoi provisionner régulièrement les charges sociales à venir est-il essentiel pour un indépendant ?',
        options: [
          'Pour éviter une trésorerie insuffisante au moment du prélèvement URSSAF',
          'Les charges sociales n’existent pas pour les indépendants',
          'Elles sont automatiquement prélevées sans besoin de provision',
          'Cela ne concerne que les salariés',
        ],
        correctIndex: 0,
        explanation:
          'Sans provision anticipée, un prélèvement de charges sociales peut mettre en difficulté la trésorerie si l’indépendant a dépensé l’intégralité de ses encaissements.',
      },
      {
        id: 'q3',
        question: 'Quel est l’intérêt de se verser une "rémunération" mensuelle fixe plutôt que de piocher irrégulièrement dans la trésorerie professionnelle ?',
        options: [
          'Cela structure un budget personnel prévisible malgré des revenus d’activité irréguliers',
          'Cela n’a aucun intérêt pour un indépendant',
          'C’est une obligation légale stricte pour tous les statuts',
          'Cela réduit automatiquement les impôts dus',
        ],
        correctIndex: 0,
        explanation:
          'Se fixer une rémunération régulière lisse l’irrégularité des encaissements professionnels et facilite la construction d’un budget personnel stable.',
      },
      {
        id: 'q4',
        question: 'Un indépendant en franchise en base de TVA doit-il tout de même en tenir compte dans son budget ?',
        options: [
          'Il doit surveiller ses seuils de chiffre d’affaires, au-delà desquels la franchise peut être perdue',
          'Non, la TVA ne le concernera jamais quel que soit son chiffre d’affaires',
          'Il doit facturer la TVA dès le premier euro malgré la franchise',
          'La franchise en base est permanente et illimitée pour tous',
        ],
        correctIndex: 0,
        explanation:
          'La franchise en base de TVA est conditionnée à des seuils de chiffre d’affaires ; les dépasser entraîne l’obligation de facturer la TVA, ce qui doit être anticipé.',
      },
      {
        id: 'q5',
        question: 'Pourquoi un fonds de roulement professionnel distinct de l’épargne de précaution personnelle est-il utile ?',
        options: [
          'Pour absorber les variations de trésorerie de l’activité sans puiser dans l’épargne personnelle de sécurité',
          'Ces deux notions sont strictement identiques',
          'Un indépendant n’a jamais besoin de fonds de roulement',
          'Cela concerne uniquement les grandes entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Un fonds de roulement professionnel dédié absorbe les creux de trésorerie liés à l’activité sans empiéter sur la sécurité financière personnelle.',
      },
      {
        id: 'q6',
        question: 'Quelle particularité budgétaire un indépendant doit-il anticiper concernant sa protection sociale, par rapport à un salarié ?',
        options: [
          'Une couverture souvent moins complète (retraite, prévoyance), à compenser éventuellement par une épargne ou assurance privée',
          'Une protection sociale strictement identique à celle d’un salarié',
          'L’absence totale de toute protection sociale',
          'Une protection sociale automatiquement supérieure à celle d’un salarié',
        ],
        correctIndex: 0,
        explanation:
          'Le régime social des indépendants offre souvent une couverture moins étendue que celle d’un salarié, ce qui peut justifier une épargne ou une assurance complémentaire dédiée.',
      },
    ],
  },
  'dettes-strategie': {
    id: 'dettes-strategie',
    moduleId: 'budget-epargne',
    title: 'Rembourser ses dettes intelligemment',
    emoji: '❄️',
    xp: 40,
    intro:
      'Face à plusieurs dettes simultanées, deux stratégies classiques s’opposent : la méthode boule de ' +
      'neige, qui rembourse d’abord la plus petite dette pour gagner en motivation, et la méthode avalanche, ' +
      'qui cible d’abord le taux le plus élevé pour minimiser le coût total. Le choix dépend autant des ' +
      'mathématiques que du comportement et de la motivation de chacun face à l’endettement.',
    questions: [
      {
        id: 'q1',
        question: 'Que privilégie la méthode "boule de neige" pour rembourser plusieurs dettes ?',
        options: [
          'Rembourser d’abord la dette au solde le plus faible, quel que soit son taux, pour gagner en motivation',
          'Rembourser d’abord la dette au taux le plus élevé',
          'Rembourser toutes les dettes à parts égales chaque mois',
          'Ne rembourser que la dette la plus récente',
        ],
        correctIndex: 0,
        explanation:
          'La méthode boule de neige cible d’abord le plus petit solde pour obtenir des victoires rapides et entretenir la motivation, même si ce n’est pas toujours optimal financièrement.',
      },
      {
        id: 'q2',
        question: 'Que privilégie la méthode "avalanche" pour rembourser plusieurs dettes ?',
        options: [
          'Rembourser en priorité la dette au taux d’intérêt le plus élevé, pour minimiser le coût total',
          'Rembourser la dette la plus ancienne en premier',
          'Rembourser à parts égales toutes les dettes',
          'Ignorer les taux d’intérêt dans l’ordre de priorité',
        ],
        correctIndex: 0,
        explanation:
          'La méthode avalanche est mathématiquement optimale : cibler le taux le plus élevé en premier réduit le montant total d’intérêts payés sur l’ensemble des dettes.',
      },
      {
        id: 'q3',
        question: 'Pourquoi la méthode boule de neige peut-elle être préférée malgré un coût total légèrement supérieur à l’avalanche ?',
        options: [
          'Elle procure des victoires rapides qui renforcent la motivation à poursuivre l’effort de remboursement',
          'Elle coûte toujours strictement moins cher',
          'Elle est obligatoire légalement',
          'Elle ne concerne que les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Le bénéfice comportemental de victoires rapides peut, pour certains profils, compenser le léger surcoût financier par rapport à la méthode avalanche.',
      },
      {
        id: 'q4',
        question: 'Dans les deux méthodes, que fait-on du montant minimum dû sur les dettes non prioritaires pendant qu’on rembourse la dette ciblée ?',
        options: [
          'On continue de payer le minimum requis sur toutes les autres dettes pour éviter les pénalités',
          'On arrête complètement de les payer',
          'On les rembourse en premier avant la dette ciblée',
          'Elles n’ont pas besoin d’être payées tant que la dette prioritaire n’est pas soldée',
        ],
        correctIndex: 0,
        explanation:
          'Dans les deux stratégies, il faut continuer à honorer au minimum les autres dettes pendant qu’on concentre l’effort supplémentaire sur la dette prioritaire choisie.',
      },
      {
        id: 'q5',
        question: 'Le rachat de crédits est-il une alternative aux méthodes boule de neige et avalanche ?',
        options: [
          'Oui, il regroupe plusieurs dettes en une seule, simplifiant la gestion, sous condition d’en vérifier le coût global',
          'Non, ce n’est jamais une option pertinente',
          'C’est strictement identique à la méthode avalanche',
          'Le rachat de crédits est interdit en France',
        ],
        correctIndex: 0,
        explanation:
          'Le rachat de crédits est une alternative qui simplifie la gestion en un seul remboursement, à condition d’en évaluer le coût total par rapport aux méthodes de remboursement ciblé.',
      },
      {
        id: 'q6',
        question: 'Pourquoi arrêter de contracter de nouvelles dettes est-il un prérequis à toute stratégie de désendettement ?',
        options: [
          'Sans cela, le rythme de remboursement ne peut jamais rattraper l’accumulation de nouvelles dettes',
          'Ce n’est pas nécessaire, on peut rembourser et emprunter simultanément sans limite',
          'Les nouvelles dettes n’ont aucun impact sur la stratégie choisie',
          'Cela ne concerne que les crédits immobiliers',
        ],
        correctIndex: 0,
        explanation:
          'Continuer à s’endetter pendant qu’on applique une stratégie de remboursement annule l’effort engagé et empêche toute sortie durable du surendettement.',
      },
    ],
  },
  'inflation-pouvoir-achat': {
    id: 'inflation-pouvoir-achat',
    moduleId: 'budget-epargne',
    title: 'Inflation et pouvoir d’achat au quotidien',
    emoji: '📉',
    xp: 40,
    intro:
      'L’inflation érode le pouvoir d’achat au quotidien si les revenus ne progressent pas au même rythme ' +
      'que les prix, touchant particulièrement les postes comme l’énergie ou l’alimentation. Adapter son ' +
      'budget en période de forte inflation passe par l’arbitrage entre postes de dépenses et la recherche ' +
      'de sources de rendement supérieures à l’inflation pour l’épargne de long terme. Comprendre ce ' +
      'phénomène aide à ne pas subir passivement l’érosion de son niveau de vie.',
    questions: [
      {
        id: 'q1',
        question: 'Pourquoi l’inflation touche-t-elle plus durement les ménages modestes, dont le budget est très consacré à l’énergie et l’alimentation ?',
        options: [
          'Ces postes de dépenses incompressibles sont souvent parmi les plus touchés par les hausses de prix',
          'L’inflation touche toujours les hauts revenus davantage',
          'Les ménages modestes ne consomment jamais d’énergie',
          'Ce phénomène ne concerne que les propriétaires',
        ],
        correctIndex: 0,
        explanation:
          'Les dépenses incompressibles (énergie, alimentation) pèsent proportionnellement plus dans le budget des ménages modestes, rendant l’inflation sur ces postes plus douloureuse.',
      },
      {
        id: 'q2',
        question: 'Quel est l’effet d’une inflation de 5% sur une épargne rémunérée à 2%, en termes de pouvoir d’achat réel ?',
        options: [
          'Le pouvoir d’achat de cette épargne diminue d’environ 3% en termes réels',
          'Le pouvoir d’achat augmente de 7%',
          'L’inflation n’a aucun effet sur l’épargne',
          'Le pouvoir d’achat reste parfaitement stable',
        ],
        correctIndex: 0,
        explanation:
          'Le rendement réel s’obtient en soustrayant l’inflation du taux nominal ; ici environ -3%, ce qui traduit une perte de pouvoir d’achat malgré un taux nominal positif.',
      },
      {
        id: 'q3',
        question: 'Pourquoi certains contrats (loyers, certaines pensions) sont-ils indexés sur un indice d’inflation ?',
        options: [
          'Pour ajuster automatiquement leur montant à l’évolution du coût de la vie et limiter la perte de pouvoir d’achat',
          'Pour toujours augmenter plus vite que l’inflation réelle',
          'Cette indexation est purement décorative sans effet réel',
          'Elle ne concerne que les emprunts bancaires',
        ],
        correctIndex: 0,
        explanation:
          'L’indexation vise à préserver la valeur réelle d’un revenu ou d’une charge en l’ajustant périodiquement selon un indice officiel de prix.',
      },
      {
        id: 'q4',
        question: 'En période de forte inflation, quel arbitrage budgétaire est souvent nécessaire pour un ménage à revenu fixe ?',
        options: [
          'Réduire certains postes discrétionnaires pour compenser la hausse des dépenses incompressibles',
          'Augmenter automatiquement tous les postes de dépenses',
          'Ignorer l’inflation, elle se résorbe toujours d’elle-même immédiatement',
          'Emprunter systématiquement pour maintenir le même niveau de vie',
        ],
        correctIndex: 0,
        explanation:
          'Sans hausse de revenu proportionnelle, il faut souvent réduire les dépenses non essentielles pour absorber la hausse des postes incompressibles.',
      },
      {
        id: 'q5',
        question: 'Pourquoi les actifs réels (immobilier, actions de certaines entreprises) sont-ils parfois considérés comme une protection partielle contre l’inflation ?',
        options: [
          'Leur valeur ou les revenus qu’ils génèrent peuvent s’ajuster à la hausse avec l’inflation, contrairement à un capital fixe non rémunéré',
          'Ils perdent toujours de la valeur en période d’inflation',
          'Ils sont totalement insensibles à toute variation économique',
          'Seul l’or protège de l’inflation, aucun autre actif',
        ],
        correctIndex: 0,
        explanation:
          'Certains actifs réels peuvent voir leur valeur ou leurs revenus s’ajuster à la hausse des prix, offrant une protection partielle par rapport à un capital purement monétaire non rémunéré.',
      },
      {
        id: 'q6',
        question: 'Pourquoi suivre régulièrement l’évolution de ses postes de dépenses est-il particulièrement utile en période de forte inflation ?',
        options: [
          'Pour identifier rapidement quels postes dérivent le plus et ajuster son budget en conséquence',
          'Le suivi budgétaire n’a aucune utilité en période d’inflation',
          'L’inflation rend tout suivi budgétaire obsolète',
          'Seules les entreprises doivent suivre l’inflation',
        ],
        correctIndex: 0,
        explanation:
          'Un suivi rapproché permet de repérer rapidement quels postes sont le plus touchés par l’inflation et d’ajuster ses arbitrages budgétaires en conséquence.',
      },
    ],
  },
  'succession-transmission': {
    id: 'succession-transmission',
    moduleId: 'budget-epargne',
    title: 'Transmettre et anticiper son patrimoine',
    emoji: '🕊️',
    xp: 40,
    intro:
      'Transmettre un patrimoine, même modeste, obéit à des règles de succession qui déterminent la ' +
      'répartition entre héritiers en l’absence de dispositions particulières. Des abattements fiscaux ' +
      'existent sur les donations et successions, renouvelables tous les 15 ans, permettant de transmettre ' +
      'progressivement en limitant les droits à payer. Anticiper sa transmission, même jeune, évite des ' +
      'situations complexes ou coûteuses pour les proches.',
    questions: [
      {
        id: 'q1',
        question: 'En l’absence de testament, qui hérite en priorité selon les règles légales françaises ?',
        options: [
          'Les héritiers selon un ordre légal (enfants, conjoint, parents...) défini par le code civil',
          'L’État récupère systématiquement tout le patrimoine',
          'Le premier créancier venu',
          'Aucune règle légale n’existe en l’absence de testament',
        ],
        correctIndex: 0,
        explanation:
          'En l’absence de dispositions particulières, la loi organise la succession selon un ordre d’héritiers légaux défini par le code civil.',
      },
      {
        id: 'q2',
        question: 'Les abattements fiscaux sur les donations se renouvellent-ils périodiquement ?',
        options: [
          'Oui, généralement tous les 15 ans, permettant de transmettre progressivement en franchise de droits',
          'Non, un abattement ne peut être utilisé qu’une seule fois dans la vie',
          'Non, les abattements n’existent pas pour les donations',
          'Ils se renouvellent chaque année civile',
        ],
        correctIndex: 0,
        explanation:
          'Les abattements sur les donations (par exemple entre parent et enfant) se reconstituent tous les 15 ans, permettant une stratégie de transmission échelonnée.',
      },
      {
        id: 'q3',
        question: 'Pourquoi l’assurance-vie est-elle souvent citée comme un outil avantageux de transmission ?',
        options: [
          'Elle bénéficie d’un cadre fiscal spécifique en matière de succession, hors des règles classiques de l’héritage civil',
          'Elle est totalement exclue de toute transmission en cas de décès',
          'Elle est systématiquement plus taxée que les autres actifs successoraux',
          'Elle ne concerne que les successions d’entreprises',
        ],
        correctIndex: 0,
        explanation:
          'L’assurance-vie bénéficie d’un régime spécifique de transmission au bénéficiaire désigné, souvent plus avantageux que les règles classiques de succession.',
      },
      {
        id: 'q4',
        question: 'Anticiper sa succession de son vivant (donation, testament) présente quel intérêt principal ?',
        options: [
          'Cela permet d’organiser la transmission selon ses souhaits et de limiter les tensions ou coûts pour les proches',
          'Cela n’a aucun intérêt tant qu’on est en bonne santé',
          'C’est réservé uniquement aux personnes très fortunées',
          'Cela augmente systématiquement les droits de succession',
        ],
        correctIndex: 0,
        explanation:
          'Anticiper permet d’organiser sa transmission selon ses volontés et de profiter des dispositifs d’optimisation, plutôt que de laisser les règles par défaut s’appliquer.',
      },
      {
        id: 'q5',
        question: 'La quotité disponible en droit successoral français désigne quoi ?',
        options: [
          'La part du patrimoine qu’on peut librement transmettre à qui l’on souhaite, en dehors de la réserve héréditaire',
          'La totalité du patrimoine sans aucune restriction',
          'Un impôt spécifique sur les successions',
          'Une aide sociale versée aux héritiers',
        ],
        correctIndex: 0,
        explanation:
          'La quotité disponible est la portion du patrimoine que le défunt peut attribuer librement, la réserve héréditaire étant protégée pour certains héritiers (souvent les enfants).',
      },
      {
        id: 'q6',
        question: 'Pourquoi un jeune actif sans patrimoine important pourrait-il quand même s’intéresser aux bases de la transmission ?',
        options: [
          'Car des dispositifs comme l’assurance-vie ou les clauses bénéficiaires se mettent en place dès les premiers contrats souscrits',
          'Cela ne concerne jamais les personnes de moins de 50 ans',
          'La transmission n’a de sens qu’après 70 ans',
          'Il est interdit de désigner un bénéficiaire avant un certain âge',
        ],
        correctIndex: 0,
        explanation:
          'Des choix simples (clause bénéficiaire d’une assurance-vie, par exemple) se prennent dès la souscription des premiers contrats, bien avant que le patrimoine ne devienne important.',
      },
    ],
  },
  'independance-financiere': {
    id: 'independance-financiere',
    moduleId: 'budget-epargne',
    title: 'Viser l’indépendance financière',
    emoji: '🔥',
    xp: 40,
    intro:
      'L’indépendance financière désigne le moment où le patrimoine généré par l’épargne et les ' +
      'investissements suffit à couvrir les dépenses courantes sans dépendre d’un revenu du travail. Le ' +
      'mouvement FIRE (Financial Independence, Retire Early) popularise un taux d’épargne élevé combiné à ' +
      'un investissement discipliné sur le long terme pour atteindre cet objectif plus tôt. Cette démarche ' +
      'repose sur des arbitrages personnels forts entre consommation présente et liberté future, à adapter ' +
      'selon les priorités de chacun.',
    questions: [
      {
        id: 'q1',
        question: 'Que signifie atteindre l’indépendance financière ?',
        options: [
          'Disposer d’un patrimoine suffisant pour couvrir ses dépenses sans dépendre d’un revenu du travail',
          'Ne plus avoir aucune dette, quel que soit le niveau de patrimoine',
          'Gagner un salaire très élevé',
          'Posséder uniquement des biens immobiliers',
        ],
        correctIndex: 0,
        explanation:
          'L’indépendance financière se définit par la capacité du patrimoine à générer des revenus suffisants pour couvrir le train de vie, indépendamment d’un emploi.',
      },
      {
        id: 'q2',
        question: 'Que promeut le mouvement FIRE (Financial Independence, Retire Early) ?',
        options: [
          'Un taux d’épargne élevé et un investissement discipliné pour atteindre l’indépendance financière plus tôt',
          'Dépenser l’intégralité de ses revenus sans épargner',
          'Emprunter massivement pour investir sans limite',
          'Travailler le plus longtemps possible sans jamais épargner',
        ],
        correctIndex: 0,
        explanation:
          'Le mouvement FIRE repose sur une épargne et un investissement très disciplinés, souvent avec un taux d’épargne bien supérieur à la moyenne, pour raccourcir le temps nécessaire à l’indépendance financière.',
      },
      {
        id: 'q3',
        question: 'Quelle règle empirique est souvent citée pour estimer le capital nécessaire à l’indépendance financière (règle des 4%) ?',
        options: [
          'Un capital permettant de retirer 4% par an suffirait à couvrir les dépenses sans épuiser le capital sur le long terme',
          'Il faut épargner exactement 4% de son revenu chaque année',
          '4% est le taux d’intérêt garanti de tout placement',
          'Cette règle concerne uniquement les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'La règle des 4% est une estimation empirique du taux de retrait annuel soutenable d’un capital investi, popularisée dans les études sur la retraite anticipée.',
      },
      {
        id: 'q4',
        question: 'L’indépendance financière implique-t-elle nécessairement d’arrêter complètement de travailler ?',
        options: [
          'Non, certains poursuivent une activité par choix tout en ayant la liberté de ne plus en dépendre financièrement',
          'Oui, systématiquement et obligatoirement',
          'Non, il est interdit de continuer à travailler une fois indépendant financièrement',
          'Cela concerne uniquement les retraités',
        ],
        correctIndex: 0,
        explanation:
          'Atteindre l’indépendance financière offre une liberté de choix : certains continuent à travailler par plaisir ou intérêt, sans y être contraints financièrement.',
      },
      {
        id: 'q5',
        question: 'Pourquoi un taux d’épargne élevé est-il central dans une démarche de type FIRE ?',
        options: [
          'Il accélère à la fois la constitution du capital et réduit le niveau de dépenses à couvrir une fois indépendant',
          'Le taux d’épargne n’a aucun rapport avec cet objectif',
          'Seul le rendement des placements compte, jamais le taux d’épargne',
          'Un taux d’épargne élevé retarde toujours l’indépendance financière',
        ],
        correctIndex: 0,
        explanation:
          'Un taux d’épargne élevé agit sur deux leviers à la fois : il augmente le capital accumulé plus vite et réduit le niveau de dépenses annuelles à couvrir par ce capital.',
      },
      {
        id: 'q6',
        question: 'Cette démarche doit-elle nécessairement suivre un modèle unique et rigide pour tous ?',
        options: [
          'Non, chacun peut adapter le niveau d’épargne et l’horizon selon ses propres priorités et sa qualité de vie souhaitée',
          'Oui, un seul modèle universel s’applique à tous sans exception',
          'Non, elle est réservée exclusivement aux très hauts revenus',
          'Elle nécessite obligatoirement de vivre de façon extrêmement frugale',
        ],
        correctIndex: 0,
        explanation:
          'L’indépendance financière est un objectif personnalisable : chacun peut arbitrer différemment entre épargne, consommation actuelle et horizon selon ses propres priorités de vie.',
      },
    ],
  },
  'scpi-immobilier-papier': {
    id: 'scpi-immobilier-papier',
    moduleId: 'investissement',
    title: "Les SCPI, l'immobilier papier",
    emoji: '🏘️',
    xp: 30,
    intro:
      "Une SCPI (Société Civile de Placement Immobilier) permet d'investir indirectement dans l'immobilier " +
      'locatif en achetant des parts, sans gérer soi-même de bien. La société de gestion collecte les ' +
      'loyers de plusieurs immeubles et redistribue des revenus réguliers aux détenteurs de parts, ' +
      "proportionnellement à leur investissement. C'est un moyen d'accéder à l'immobilier avec un capital " +
      'plus modeste qu’un achat en direct, mais avec des frais et un risque de liquidité à connaître.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce qu’une SCPI ?',
        options: [
          'Une société qui investit dans l’immobilier locatif et redistribue les loyers à ses porteurs de parts',
          'Un livret d’épargne réglementé',
          'Une action cotée en bourse',
          'Un crédit immobilier spécifique',
        ],
        correctIndex: 0,
        explanation:
          'Une SCPI mutualise l’investissement immobilier locatif de nombreux porteurs de parts, qui perçoivent des revenus proportionnels à leur investissement.',
      },
      {
        id: 'q2',
        question: 'Quel est l’un des principaux avantages des SCPI par rapport à un achat immobilier en direct ?',
        options: [
          'Un accès à l’immobilier locatif avec un capital de départ plus modeste et sans gestion directe',
          'Un rendement garanti par l’État',
          'L’absence totale de tout frais',
          'Un capital toujours immédiatement disponible sans délai',
        ],
        correctIndex: 0,
        explanation:
          'Les SCPI permettent d’investir dans l’immobilier locatif dès quelques centaines d’euros, sans les contraintes de gestion locative directe (recherche de locataires, travaux...).',
      },
      {
        id: 'q3',
        question: 'La liquidité d’une part de SCPI est-elle aussi immédiate que celle d’une action cotée en bourse ?',
        options: [
          'Non, la revente de parts peut prendre du temps et n’est pas toujours garantie',
          'Oui, exactement la même liquidité instantanée',
          'Non, les parts de SCPI ne peuvent jamais être revendues',
          'Les SCPI n’ont aucun lien avec la notion de liquidité',
        ],
        correctIndex: 0,
        explanation:
          'Contrairement à une action cotée en continu, la revente d’une part de SCPI dépend de la demande sur le marché secondaire et peut prendre plusieurs semaines ou mois.',
      },
      {
        id: 'q4',
        question: 'Les revenus perçus via une SCPI sont-ils garantis dans leur montant ?',
        options: [
          'Non, ils dépendent du taux d’occupation des immeubles et des loyers effectivement perçus',
          'Oui, ils sont garantis par contrat quel que soit le contexte',
          'Oui, l’État garantit un rendement minimum',
          'Les SCPI ne versent jamais aucun revenu',
        ],
        correctIndex: 0,
        explanation:
          'Comme pour tout investissement immobilier locatif, les revenus dépendent de la vacance locative et du niveau des loyers perçus, sans garantie de montant.',
      },
      {
        id: 'q5',
        question: 'Une SCPI peut-elle être logée dans une assurance-vie plutôt qu’achetée en direct ?',
        options: [
          'Oui, de nombreux contrats d’assurance-vie proposent des SCPI comme unité de compte',
          'Non, cela n’est jamais possible',
          'Les SCPI ne peuvent être détenues qu’en direct',
          'L’assurance-vie est réservée aux seules obligations',
        ],
        correctIndex: 0,
        explanation:
          'Certaines assurances-vie proposent des parts de SCPI en unités de compte, offrant un cadre fiscal différent de la détention en direct.',
      },
      {
        id: 'q6',
        question: 'Quel type de frais est généralement associé à l’achat de parts de SCPI ?',
        options: [
          'Des frais de souscription initiaux, souvent plusieurs pourcents du montant investi',
          'Aucun frais n’existe jamais pour les SCPI',
          'Uniquement des frais de gestion annuels, jamais de frais d’entrée',
          'Des frais identiques à ceux d’un livret réglementé',
        ],
        correctIndex: 0,
        explanation:
          'L’achat de parts de SCPI s’accompagne généralement de frais de souscription significatifs, à intégrer dans l’analyse de rentabilité sur la durée de détention.',
      },
    ],
  },
  obligations: {
    id: 'obligations',
    moduleId: 'investissement',
    title: "Les obligations d'État et d'entreprise",
    emoji: '📄',
    xp: 30,
    intro:
      "Une obligation est un titre de créance : en l'achetant, l'investisseur prête de l'argent à un État " +
      'ou une entreprise en échange d’intérêts réguliers (le coupon) et du remboursement du capital à ' +
      "l'échéance. Contrairement à une action, l'obligataire n'est pas propriétaire de l'entreprise mais " +
      'simple créancier, avec un risque généralement plus faible mais un potentiel de gain aussi plus ' +
      "limité. Le prix d'une obligation varie inversement aux taux d'intérêt du marché avant son échéance.",
    questions: [
      {
        id: 'q1',
        question: 'Que représente une obligation pour son détenteur ?',
        options: [
          'Une créance : il prête de l’argent en échange d’intérêts et du remboursement à l’échéance',
          'Une part de propriété dans l’entreprise',
          'Un droit de vote à l’assemblée générale',
          'Une garantie de l’État contre toute perte',
        ],
        correctIndex: 0,
        explanation:
          'Contrairement à une action, l’obligation ne confère pas de propriété mais un statut de créancier, avec un droit à des intérêts et au remboursement du capital.',
      },
      {
        id: 'q2',
        question: 'Qu’appelle-t-on le "coupon" d’une obligation ?',
        options: [
          'Le versement d’intérêt périodique versé au détenteur de l’obligation',
          'Le prix d’achat initial de l’obligation',
          'Un bon de réduction sur un produit financier',
          'Le nom donné à l’obligation elle-même',
        ],
        correctIndex: 0,
        explanation:
          'Le coupon désigne l’intérêt versé périodiquement (souvent annuellement) au porteur de l’obligation jusqu’à son échéance.',
      },
      {
        id: 'q3',
        question: 'Une obligation d’entreprise est-elle généralement plus ou moins risquée qu’une obligation d’État solide ?',
        options: [
          'Généralement plus risquée, avec souvent un taux d’intérêt plus élevé pour compenser ce risque',
          'Toujours moins risquée qu’une obligation d’État',
          'Exactement le même niveau de risque dans tous les cas',
          'Le risque ne dépend jamais de l’émetteur',
        ],
        correctIndex: 0,
        explanation:
          'Le risque de défaut d’une entreprise est généralement supérieur à celui d’un État solide, ce qui se traduit par un taux d’intérêt (rendement) plus élevé pour compenser ce risque.',
      },
      {
        id: 'q4',
        question: 'Comment évolue le prix d’une obligation existante quand les taux d’intérêt du marché montent ?',
        options: [
          'Son prix baisse, car son coupon fixe devient moins attractif face aux nouvelles obligations mieux rémunérées',
          'Son prix augmente automatiquement',
          'Le prix ne varie jamais avant l’échéance',
          'Cela dépend uniquement de la couleur du marché',
        ],
        correctIndex: 0,
        explanation:
          'Quand les taux montent, les nouvelles obligations offrent un rendement plus élevé, rendant les anciennes obligations à coupon fixe moins attractives, ce qui fait baisser leur prix sur le marché secondaire.',
      },
      {
        id: 'q5',
        question: 'Un fonds obligataire diversifié réduit-il le risque de défaut d’un seul émetteur par rapport à une obligation individuelle ?',
        options: [
          'Oui, en détenant de nombreuses obligations différentes, il dilue l’impact d’un défaut isolé',
          'Non, il concentre au contraire le risque sur un seul émetteur',
          'Non, les fonds obligataires n’existent pas',
          'Cela n’a aucun rapport avec la diversification',
        ],
        correctIndex: 0,
        explanation:
          'Un fonds obligataire diversifié répartit l’investissement sur de nombreux émetteurs, limitant l’impact d’un défaut isolé par rapport à la détention d’une seule obligation.',
      },
      {
        id: 'q6',
        question: 'Pourquoi les obligations sont-elles souvent utilisées pour équilibrer un portefeuille majoritairement en actions ?',
        options: [
          'Elles offrent généralement une volatilité plus faible et peuvent amortir les baisses du marché actions',
          'Elles garantissent toujours un rendement supérieur aux actions',
          'Elles sont interdites de combinaison avec des actions',
          'Elles n’ont aucun rôle dans la diversification d’un portefeuille',
        ],
        correctIndex: 0,
        explanation:
          'Les obligations, moins volatiles que les actions, jouent souvent un rôle stabilisateur dans un portefeuille diversifié, en amortissant les phases de baisse du marché actions.',
      },
    ],
  },
  dividendes: {
    id: 'dividendes',
    moduleId: 'investissement',
    title: 'Comprendre les dividendes',
    emoji: '🎁',
    xp: 30,
    intro:
      'Un dividende est une part des bénéfices qu’une entreprise cotée décide de reverser à ses ' +
      'actionnaires, généralement une ou plusieurs fois par an. Toutes les entreprises ne versent pas de ' +
      'dividendes : certaines préfèrent réinvestir l’intégralité de leurs bénéfices dans leur croissance. ' +
      'Le rendement du dividende (dividende annuel / cours de l’action) est un indicateur à interpréter ' +
      'avec prudence, un rendement très élevé pouvant parfois signaler une difficulté de l’entreprise ' +
      'plutôt qu’une opportunité.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce qu’un dividende ?',
        options: [
          'Une part des bénéfices qu’une entreprise reverse à ses actionnaires',
          'Un intérêt versé sur un livret d’épargne',
          'Une taxe prélevée sur les actions',
          'Le prix d’achat d’une action',
        ],
        correctIndex: 0,
        explanation:
          'Le dividende est la portion des bénéfices qu’une entreprise choisit de distribuer à ses actionnaires, plutôt que de la conserver pour ses investissements.',
      },
      {
        id: 'q2',
        question: 'Toutes les entreprises cotées versent-elles nécessairement des dividendes ?',
        options: [
          'Non, certaines réinvestissent l’intégralité de leurs bénéfices dans leur croissance sans verser de dividende',
          'Oui, c’est une obligation légale pour toute entreprise cotée',
          'Non, seules les entreprises en difficulté versent des dividendes',
          'Cela ne dépend que de la taille de l’entreprise',
        ],
        correctIndex: 0,
        explanation:
          'Le versement de dividendes est une décision de l’entreprise ; certaines, notamment en forte croissance, préfèrent réinvestir tous leurs bénéfices plutôt que de les distribuer.',
      },
      {
        id: 'q3',
        question: 'Un rendement de dividende très élevé (par exemple 12%) doit-il toujours être perçu comme une bonne opportunité ?',
        options: [
          'Non, il peut parfois signaler des difficultés de l’entreprise ou un cours de l’action en forte baisse',
          'Oui, systématiquement une excellente opportunité sans aucun risque',
          'Un rendement élevé est toujours garanti dans le futur',
          'Cela ne concerne que les obligations, jamais les actions',
        ],
        correctIndex: 0,
        explanation:
          'Un rendement de dividende anormalement élevé peut résulter d’une chute du cours de l’action liée à des difficultés, rendant ce rendement potentiellement non durable.',
      },
      {
        id: 'q4',
        question: 'Le versement d’un dividende a-t-il un effet mécanique sur le cours de l’action le jour du détachement ?',
        options: [
          'Oui, le cours baisse généralement du montant du dividende versé, toutes choses égales par ailleurs',
          'Non, le cours de l’action n’est jamais affecté par un dividende',
          'Le cours augmente toujours du montant du dividende',
          'Cela ne concerne que les obligations',
        ],
        correctIndex: 0,
        explanation:
          'Le jour du détachement du dividende, le cours de l’action ajuste généralement à la baisse du montant distribué, puisque cette somme sort de la valeur de l’entreprise.',
      },
      {
        id: 'q5',
        question: 'Un dividende perçu sur un compte-titres ordinaire est-il soumis à une fiscalité spécifique en France ?',
        options: [
          'Oui, il est en principe soumis au PFU (flat tax) ou, sur option, au barème progressif',
          'Non, les dividendes sont toujours totalement exonérés d’impôt',
          'Non, ils sont taxés uniquement à la TVA',
          'La fiscalité des dividendes ne dépend que du montant investi',
        ],
        correctIndex: 0,
        explanation:
          'Les dividendes perçus sur un compte-titres ordinaire sont soumis au régime des revenus du capital, avec le choix entre PFU et barème progressif selon la situation du contribuable.',
      },
      {
        id: 'q6',
        question: 'Réinvestir automatiquement ses dividendes (plutôt que les percevoir en cash) présente quel intérêt à long terme ?',
        options: [
          'Cela amplifie l’effet des intérêts composés en augmentant progressivement le nombre d’actions détenues',
          'Cela n’a strictement aucun effet sur le rendement final',
          'Cela est interdit par la réglementation boursière',
          'Cela ne concerne que les obligations',
        ],
        correctIndex: 0,
        explanation:
          'Réinvestir les dividendes perçus permet d’acheter davantage de titres, ce qui amplifie l’effet des intérêts composés sur la durée de détention.',
      },
    ],
  },
  'diversification-portefeuille': {
    id: 'diversification-portefeuille',
    moduleId: 'investissement',
    title: 'Construire un portefeuille diversifié',
    emoji: '🧩',
    xp: 40,
    intro:
      'Construire un portefeuille diversifié consiste à répartir son capital entre plusieurs classes ' +
      'd’actifs (actions, obligations, immobilier) et zones géographiques pour réduire le risque global ' +
      'sans sacrifier excessivement le rendement espéré. La diversification ne protège pas contre une ' +
      'baisse généralisée des marchés, mais elle limite l’impact d’un choc spécifique à un seul secteur ou ' +
      'pays. Le bon niveau de diversification dépend du profil de risque et de l’horizon de placement de ' +
      'chaque investisseur.',
    questions: [
      {
        id: 'q1',
        question: 'Que vise principalement la diversification d’un portefeuille ?',
        options: [
          'Réduire l’impact d’un choc spécifique à un seul actif, secteur ou pays',
          'Garantir un rendement positif chaque année',
          'Éliminer complètement tout risque de perte',
          'Se concentrer sur une seule action jugée très prometteuse',
        ],
        correctIndex: 0,
        explanation:
          'La diversification répartit le risque entre plusieurs actifs, réduisant l’impact d’une contre-performance isolée sans l’éliminer totalement.',
      },
      {
        id: 'q2',
        question: 'La diversification protège-t-elle contre une baisse généralisée de l’ensemble des marchés financiers ?',
        options: [
          'Non, un krach global affecte la plupart des actifs risqués, même diversifiés',
          'Oui, elle élimine tout risque de baisse quelle que soit la situation',
          'Oui, mais uniquement pour les portefeuilles obligataires',
          'La diversification n’a aucun rapport avec ce type de risque',
        ],
        correctIndex: 0,
        explanation:
          'La diversification réduit les risques spécifiques mais ne protège pas contre un risque de marché global qui affecte simultanément la plupart des classes d’actifs risquées.',
      },
      {
        id: 'q3',
        question: 'Pourquoi diversifier aussi géographiquement, pas seulement entre secteurs d’activité ?',
        options: [
          'Pour réduire l’exposition aux aléas économiques ou politiques propres à un seul pays',
          'La diversification géographique n’a aucun intérêt',
          'Un seul pays suffit toujours pour bien diversifier',
          'Cela concerne uniquement les obligations d’État',
        ],
        correctIndex: 0,
        explanation:
          'Un portefeuille concentré sur un seul pays reste exposé à ses aléas économiques ou politiques spécifiques ; la diversification géographique élargit la protection.',
      },
      {
        id: 'q4',
        question: 'Un portefeuille composé d’un seul ETF Monde actions est-il déjà relativement diversifié ?',
        options: [
          'Oui, il offre une exposition à des milliers d’entreprises dans de nombreux pays et secteurs',
          'Non, un seul ETF ne peut jamais être diversifié par nature',
          'Non, un ETF ne contient qu’une seule action',
          'Cela dépend uniquement du prix de l’ETF',
        ],
        correctIndex: 0,
        explanation:
          'Un ETF Monde réplique un indice large regroupant des milliers d’entreprises de nombreux pays et secteurs, offrant déjà un niveau de diversification important en un seul produit.',
      },
      {
        id: 'q5',
        question: 'Le niveau de diversification optimal est-il identique pour tous les investisseurs quel que soit leur profil ?',
        options: [
          'Non, il dépend du profil de risque, de l’horizon de placement et des objectifs propres à chacun',
          'Oui, une seule allocation convient à tout le monde',
          'Non, il dépend uniquement de l’âge légal de la retraite',
          'La diversification ne dépend jamais du profil de l’investisseur',
        ],
        correctIndex: 0,
        explanation:
          'Le juste niveau de diversification et de risque doit être adapté à la situation personnelle, à l’horizon de placement et à la tolérance au risque de chaque investisseur.',
      },
      {
        id: 'q6',
        question: 'Une sur-diversification excessive (trop de lignes différentes) peut-elle devenir contre-productive ?',
        options: [
          'Oui, elle peut complexifier inutilement le suivi sans apporter de bénéfice supplémentaire significatif de réduction de risque',
          'Non, plus on diversifie, toujours mieux c’est sans aucune limite',
          'La sur-diversification est impossible en pratique',
          'Cela ne concerne que les portefeuilles obligataires',
        ],
        correctIndex: 0,
        explanation:
          'Au-delà d’un certain nombre de lignes suffisamment diversifiées, ajouter encore plus de titres apporte un bénéfice marginal décroissant tout en complexifiant le suivi du portefeuille.',
      },
    ],
  },
  'crypto-actifs': {
    id: 'crypto-actifs',
    moduleId: 'investissement',
    title: 'Les cryptoactifs : comprendre les risques',
    emoji: '🪙',
    xp: 40,
    intro:
      'Les cryptoactifs comme le bitcoin reposent sur une technologie décentralisée (la blockchain) et se ' +
      'distinguent fondamentalement des actifs financiers traditionnels par l’absence de régulateur central ' +
      'et une volatilité généralement très élevée. Investir dans ce type d’actif comporte des risques ' +
      'spécifiques : forte volatilité, risques technologiques et de sécurité, et un cadre réglementaire ' +
      'encore en construction. Une approche prudente consiste à ne jamais investir plus que ce qu’on est ' +
      'prêt à perdre entièrement, et à limiter fortement sa part dans un portefeuille global.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce qui distingue fondamentalement un cryptoactif comme le bitcoin d’une action ou obligation classique ?',
        options: [
          'L’absence d’émetteur central et une infrastructure reposant sur une technologie décentralisée (blockchain)',
          'Il s’agit exactement du même type d’actif avec un autre nom',
          'Un cryptoactif est toujours garanti par une banque centrale',
          'Un cryptoactif verse toujours un dividende comme une action',
        ],
        correctIndex: 0,
        explanation:
          'Contrairement à une action (part d’entreprise) ou une obligation (créance sur un émetteur), un cryptoactif repose sur une infrastructure décentralisée sans émetteur central ni garantie institutionnelle.',
      },
      {
        id: 'q2',
        question: 'La volatilité des cryptoactifs est-elle généralement comparable à celle des actions de grandes entreprises ?',
        options: [
          'Non, elle est généralement bien plus élevée, avec des variations de prix parfois très importantes en peu de temps',
          'Oui, exactement le même niveau de volatilité',
          'Non, les cryptoactifs sont toujours plus stables que les actions',
          'La volatilité ne concerne pas les cryptoactifs',
        ],
        correctIndex: 0,
        explanation:
          'Les cryptoactifs affichent historiquement une volatilité nettement supérieure à celle des actions de grandes entreprises cotées, avec des variations de prix parfois extrêmes.',
      },
      {
        id: 'q3',
        question: 'Pourquoi la sécurité de la conservation (stockage) des cryptoactifs est-elle un enjeu spécifique à surveiller ?',
        options: [
          'La perte des clés d’accès ou un piratage peut entraîner une perte définitive et irréversible des fonds',
          'La conservation des cryptoactifs est toujours garantie par l’État',
          'Il n’existe aucun risque de perte pour ce type d’actif',
          'Ce risque ne concerne que les actions cotées',
        ],
        correctIndex: 0,
        explanation:
          'Contrairement à un compte bancaire classique, la perte des clés d’accès ou une faille de sécurité peut entraîner une perte irréversible des cryptoactifs, sans recours possible.',
      },
      {
        id: 'q4',
        question: 'Le cadre réglementaire des cryptoactifs est-il aussi mature et stable que celui des marchés financiers traditionnels ?',
        options: [
          'Non, il est encore en construction et évolue rapidement dans de nombreux pays',
          'Oui, il est identique et stable depuis des décennies',
          'Il n’existe aucune réglementation en cours d’élaboration',
          'Ce cadre est identique partout dans le monde sans variation',
        ],
        correctIndex: 0,
        explanation:
          'La réglementation des cryptoactifs évolue rapidement et diffère selon les pays, contrairement au cadre plus établi des marchés financiers traditionnels.',
      },
      {
        id: 'q5',
        question: 'Quelle approche prudente est souvent recommandée pour une première exposition aux cryptoactifs ?',
        options: [
          'Limiter fortement la part investie à un montant que l’on est prêt à perdre intégralement',
          'Investir l’intégralité de son épargne de précaution',
          'Emprunter pour maximiser l’exposition',
          'Ignorer toute notion de risque, ces actifs étant toujours gagnants',
        ],
        correctIndex: 0,
        explanation:
          'Compte tenu de la forte volatilité et des risques spécifiques, une approche prudente limite l’exposition à une part restreinte du patrimoine que l’on peut se permettre de perdre.',
      },
      {
        id: 'q6',
        question: 'Les gains réalisés sur la cession de cryptoactifs sont-ils soumis à une fiscalité en France ?',
        options: [
          'Oui, les plus-values de cession de cryptoactifs sont en principe imposables selon un régime spécifique',
          'Non, les cryptoactifs échappent à toute fiscalité',
          'Ils sont taxés uniquement à la TVA',
          'La fiscalité ne s’applique qu’aux professionnels du secteur',
        ],
        correctIndex: 0,
        explanation:
          'Les plus-values réalisées lors de la cession de cryptoactifs par des particuliers sont en principe soumises à une fiscalité spécifique en France, distincte de celle des autres revenus du capital.',
      },
    ],
  },
  'assurance-emprunteur': {
    id: 'assurance-emprunteur',
    moduleId: 'credit-emprunt',
    title: "L'assurance emprunteur",
    emoji: '🛡️',
    xp: 30,
    intro:
      "L'assurance emprunteur garantit le remboursement d'un crédit (souvent immobilier) en cas de décès, " +
      "invalidité ou incapacité de travail de l'emprunteur. Depuis la loi Lemoine, il est possible de " +
      "changer d'assurance emprunteur à tout moment, sans frais ni pénalité, pour trouver une offre plus " +
      'avantageuse. Le coût de cette assurance peut représenter une part significative du coût total du ' +
      'crédit, ce qui justifie de la comparer avec attention.',
    questions: [
      {
        id: 'q1',
        question: 'À quoi sert principalement l’assurance emprunteur ?',
        options: [
          'Garantir le remboursement du crédit en cas de décès, invalidité ou incapacité de l’emprunteur',
          'Garantir un taux d’intérêt plus bas automatiquement',
          'Remplacer l’apport personnel nécessaire',
          'Assurer le logement contre le vol',
        ],
        correctIndex: 0,
        explanation:
          'L’assurance emprunteur protège la banque et les héritiers ou co-emprunteurs en prenant le relais du remboursement en cas d’événement grave affectant l’emprunteur.',
      },
      {
        id: 'q2',
        question: 'Depuis la loi Lemoine, peut-on changer d’assurance emprunteur à tout moment ?',
        options: [
          'Oui, à tout moment, sans frais ni pénalité, sous réserve d’un niveau de garanties équivalent',
          'Non, le changement n’est possible qu’une seule fois dans la vie du prêt',
          'Non, l’assurance initiale est définitive',
          'Oui, mais uniquement après 10 ans de prêt',
        ],
        correctIndex: 0,
        explanation:
          'La loi Lemoine a ouvert la possibilité de résilier et changer d’assurance emprunteur à tout moment, à condition que le nouveau contrat offre des garanties équivalentes.',
      },
      {
        id: 'q3',
        question: 'Le coût de l’assurance emprunteur est-il inclus dans le calcul du TAEG ?',
        options: [
          'Oui, il fait partie des éléments intégrés dans le calcul du coût total du crédit',
          'Non, il est totalement indépendant du TAEG',
          'Non, l’assurance n’a aucun coût',
          'Le TAEG ne concerne que le taux nominal',
        ],
        correctIndex: 0,
        explanation:
          'Le TAEG intègre l’ensemble des coûts obligatoires du crédit, y compris l’assurance emprunteur exigée par la banque.',
      },
      {
        id: 'q4',
        question: 'La délégation d’assurance permet-elle de souscrire une assurance emprunteur ailleurs qu’auprès de la banque prêteuse ?',
        options: [
          'Oui, l’emprunteur peut choisir un assureur externe offrant des garanties équivalentes',
          'Non, seule l’assurance de la banque prêteuse est autorisée',
          'La délégation d’assurance n’existe pas en France',
          'Cela ne concerne que les crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'La délégation d’assurance permet de souscrire un contrat auprès d’un assureur externe, souvent moins cher, à condition que les garanties soient jugées équivalentes par la banque.',
      },
      {
        id: 'q5',
        question: 'Pourquoi le coût de l’assurance emprunteur peut-il représenter une part significative du coût total d’un crédit immobilier ?',
        options: [
          'Parce qu’elle est calculée sur une longue durée et peut représenter plusieurs milliers d’euros au total',
          'Parce qu’elle est toujours plus chère que les intérêts du prêt',
          'Parce qu’elle est facultative et rarement souscrite',
          'Elle ne représente jamais plus de quelques euros au total',
        ],
        correctIndex: 0,
        explanation:
          'Sur la durée d’un crédit immobilier (15-25 ans), le cumul des cotisations d’assurance peut représenter une part très significative du coût total du financement.',
      },
      {
        id: 'q6',
        question: 'Le questionnaire de santé est-il systématiquement requis pour souscrire une assurance emprunteur ?',
        options: [
          'Non, il est supprimé pour certains prêts sous un montant et un âge déterminés (droit à l’oubli renforcé)',
          'Oui, systématiquement pour tous les prêts sans exception',
          'Non, il n’a jamais existé pour aucun type de prêt',
          'Il ne concerne que les crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'La loi a supprimé le questionnaire de santé pour certains prêts immobiliers sous conditions de montant et d’âge, facilitant l’accès à l’assurance pour certains emprunteurs.',
      },
    ],
  },
  'credit-consommation': {
    id: 'credit-consommation',
    moduleId: 'credit-emprunt',
    title: 'Bien utiliser le crédit à la consommation',
    emoji: '🛍️',
    xp: 30,
    intro:
      'Le crédit à la consommation finance des achats de biens ou services (voiture, électroménager, ' +
      'travaux) sur une durée généralement plus courte qu’un prêt immobilier. Comparer le TAEG entre ' +
      'plusieurs offres, et non uniquement la mensualité affichée, reste le meilleur réflexe avant de ' +
      'signer. Un crédit affecté (lié à un achat précis) offre une protection supplémentaire par rapport à ' +
      'un prêt personnel non affecté en cas de litige avec le vendeur.',
    questions: [
      {
        id: 'q1',
        question: 'Quelle est la différence entre un crédit affecté et un crédit personnel non affecté ?',
        options: [
          'Le crédit affecté est lié à un achat précis, tandis que le prêt personnel peut être utilisé librement',
          'Il n’existe aucune différence entre les deux',
          'Le crédit affecté n’a jamais de taux d’intérêt',
          'Le prêt personnel est toujours affecté à un achat précis',
        ],
        correctIndex: 0,
        explanation:
          'Un crédit affecté finance un achat déterminé (voiture, travaux) et reste juridiquement lié à celui-ci, contrairement à un prêt personnel utilisable librement.',
      },
      {
        id: 'q2',
        question: 'Pourquoi un crédit affecté offre-t-il une protection supplémentaire en cas de litige avec le vendeur ?',
        options: [
          'L’annulation de la vente entraîne généralement l’annulation du crédit qui y est lié',
          'Il n’offre aucune protection particulière',
          'Il oblige à rembourser le crédit même si l’achat est annulé',
          'Cette protection ne concerne que les crédits immobiliers',
        ],
        correctIndex: 0,
        explanation:
          'Le lien juridique entre le crédit affecté et l’achat signifie qu’en cas d’annulation de la vente, le crédit est généralement annulé également, protégeant l’emprunteur.',
      },
      {
        id: 'q3',
        question: 'Pourquoi comparer le TAEG plutôt que la seule mensualité affichée entre plusieurs offres de crédit à la consommation ?',
        options: [
          'La mensualité seule ne reflète pas le coût total, qui dépend aussi de la durée et des frais annexes',
          'La mensualité est toujours l’indicateur le plus fiable',
          'Le TAEG n’a aucun intérêt pour ce type de crédit',
          'Seul le montant emprunté doit être comparé',
        ],
        correctIndex: 0,
        explanation:
          'Deux crédits avec la même mensualité peuvent avoir des durées et des coûts totaux très différents ; le TAEG permet une comparaison rigoureuse incluant tous les frais.',
      },
      {
        id: 'q4',
        question: 'Un crédit à la consommation à taux promotionnel de 0% comporte-t-il toujours un coût nul pour l’emprunteur ?',
        options: [
          'Pas nécessairement, des frais de dossier ou une assurance facultative peuvent s’ajouter malgré le taux nominal nul',
          'Oui, un taux à 0% signifie toujours un coût total nul',
          'Ce type d’offre n’existe jamais en pratique',
          'Le taux à 0% concerne uniquement les crédits immobiliers',
        ],
        correctIndex: 0,
        explanation:
          'Même à taux nominal nul, des frais annexes (dossier, assurance facultative) peuvent générer un coût réel non nul pour l’emprunteur, à vérifier via le TAEG.',
      },
      {
        id: 'q5',
        question: 'Peut-on rembourser un crédit à la consommation par anticipation sans frais ?',
        options: [
          'Généralement oui, avec parfois une indemnité plafonnée selon le montant restant dû et la réglementation',
          'Non, le remboursement anticipé est toujours interdit',
          'Le remboursement anticipé coûte toujours la totalité des intérêts restants',
          'Cela ne concerne que les crédits immobiliers',
        ],
        correctIndex: 0,
        explanation:
          'Le remboursement anticipé d’un crédit à la consommation est possible, avec une éventuelle indemnité encadrée et plafonnée par la réglementation selon le montant restant dû.',
      },
      {
        id: 'q6',
        question: 'Pourquoi éviter de cumuler plusieurs crédits à la consommation simultanément est-il un principe de prudence ?',
        options: [
          'Le cumul augmente le taux d’endettement global et le risque de ne plus pouvoir faire face aux remboursements',
          'Cumuler des crédits n’a jamais d’impact sur le budget',
          'Un cumul de crédits réduit automatiquement le taux d’endettement',
          'Cela ne concerne que les crédits immobiliers',
        ],
        correctIndex: 0,
        explanation:
          'Chaque crédit supplémentaire alourdit le taux d’endettement global du foyer, augmentant le risque de difficultés de remboursement en cas d’imprévu.',
      },
    ],
  },
  'courtier-credit': {
    id: 'courtier-credit',
    moduleId: 'credit-emprunt',
    title: "Le rôle d'un courtier en crédit",
    emoji: '🤝',
    xp: 30,
    intro:
      'Un courtier en crédit met en concurrence plusieurs banques pour trouver l’offre de financement la ' +
      'plus adaptée au profil de l’emprunteur, en échange d’une rémunération généralement versée par la ' +
      'banque ou l’emprunteur. Il peut faire gagner un temps précieux et parfois négocier de meilleures ' +
      'conditions grâce à son volume d’affaires avec les établissements bancaires. Il reste toutefois ' +
      'important de comparer aussi soi-même les offres pour s’assurer que le courtier propose bien la ' +
      'solution la plus avantageuse.',
    questions: [
      {
        id: 'q1',
        question: 'Quel est le rôle principal d’un courtier en crédit ?',
        options: [
          'Mettre en concurrence plusieurs banques pour trouver l’offre la plus adaptée à l’emprunteur',
          'Prêter lui-même l’argent à l’emprunteur',
          'Remplacer entièrement la banque dans le contrat de prêt',
          'Garantir un taux zéro pour tous ses clients',
        ],
        correctIndex: 0,
        explanation:
          'Le courtier agit comme intermédiaire entre l’emprunteur et plusieurs établissements bancaires, pour comparer et négocier les meilleures conditions possibles.',
      },
      {
        id: 'q2',
        question: 'Comment un courtier en crédit est-il généralement rémunéré ?',
        options: [
          'Par une commission versée par la banque et/ou des frais de courtage payés par l’emprunteur',
          'Il travaille toujours gratuitement sans aucune rémunération',
          'Il est rémunéré uniquement par l’État',
          'Sa rémunération est toujours interdite par la loi',
        ],
        correctIndex: 0,
        explanation:
          'La rémunération d’un courtier provient généralement d’une commission bancaire et/ou de frais de courtage facturés à l’emprunteur, à connaître avant de s’engager.',
      },
      {
        id: 'q3',
        question: 'Pourquoi un courtier peut-il parfois obtenir de meilleures conditions qu’un emprunteur seul auprès d’une banque ?',
        options: [
          'Grâce à son volume d’affaires régulier avec les banques, qui lui permet de négocier des conditions favorables',
          'Parce que la loi impose aux banques de toujours favoriser les courtiers',
          'Les courtiers ont toujours un pouvoir de décision supérieur à celui de la banque',
          'Cela n’a jamais aucun effet réel',
        ],
        correctIndex: 0,
        explanation:
          'Le volume d’affaires apporté par un courtier aux banques partenaires peut justifier des conditions commerciales plus avantageuses que celles offertes à un client isolé.',
      },
      {
        id: 'q4',
        question: 'Faire appel à un courtier dispense-t-il de comparer soi-même quelques offres pour vérifier la pertinence de sa proposition ?',
        options: [
          'Non, il reste utile de vérifier que la solution proposée est bien compétitive par rapport au marché',
          'Oui, il n’est jamais utile de vérifier le travail d’un courtier',
          'Le courtier propose toujours automatiquement la meilleure offre possible sans exception',
          'Comparer soi-même est interdit une fois qu’on a mandaté un courtier',
        ],
        correctIndex: 0,
        explanation:
          'Même en passant par un courtier, garder un regard critique et comparer quelques repères de marché permet de s’assurer de la pertinence de l’offre obtenue.',
      },
      {
        id: 'q5',
        question: 'Un courtier en crédit doit-il disposer d’un statut réglementé pour exercer en France ?',
        options: [
          'Oui, il doit être immatriculé et respecter un cadre réglementaire encadrant son activité d’intermédiaire',
          'Non, n’importe qui peut exercer sans aucune formalité',
          'Ce statut ne concerne que les courtiers en assurance',
          'Le statut de courtier n’existe pas légalement en France',
        ],
        correctIndex: 0,
        explanation:
          'L’activité de courtier en crédit est encadrée réglementairement, avec une obligation d’immatriculation et de respect de certaines règles protectrices pour l’emprunteur.',
      },
      {
        id: 'q6',
        question: 'Pourquoi un courtier peut-il être particulièrement utile pour un profil emprunteur atypique (revenus irréguliers, situation complexe) ?',
        options: [
          'Il connaît les critères spécifiques de chaque banque et peut orienter vers l’établissement le plus adapté à ce profil',
          'Les profils atypiques n’ont jamais accès au crédit quel que soit l’intermédiaire',
          'Un courtier ne peut aider que les profils standards',
          'Cela n’a aucun rapport avec le rôle d’un courtier',
        ],
        correctIndex: 0,
        explanation:
          'La connaissance fine des critères d’acceptation propres à chaque banque permet au courtier d’orienter efficacement les profils atypiques vers l’établissement le plus susceptible d’accepter leur dossier.',
      },
    ],
  },
  'renegociation-credit': {
    id: 'renegociation-credit',
    moduleId: 'credit-emprunt',
    title: 'Renégocier ou racheter son crédit',
    emoji: '🔁',
    xp: 40,
    intro:
      'Renégocier son crédit immobilier consiste à demander à sa propre banque un taux plus favorable, ' +
      'tandis que le rachat de crédit implique de faire reprendre le prêt par un autre établissement à de ' +
      'meilleures conditions. Ces démarches sont généralement pertinentes lorsque l’écart de taux avec le ' +
      'marché actuel dépasse un certain seuil et que la durée restante du prêt est encore suffisamment ' +
      'longue. Il faut systématiquement comparer le gain d’intérêts espéré aux frais engagés (dossier, ' +
      'garantie, indemnités de remboursement anticipé) pour juger de la pertinence de l’opération.',
    questions: [
      {
        id: 'q1',
        question: 'Quelle est la différence entre renégocier son crédit et le racheter auprès d’un autre établissement ?',
        options: [
          'La renégociation se fait avec sa banque actuelle, le rachat implique de changer d’établissement prêteur',
          'Il s’agit exactement de la même démarche sous deux noms différents',
          'Le rachat est toujours gratuit contrairement à la renégociation',
          'La renégociation est interdite en France',
        ],
        correctIndex: 0,
        explanation:
          'La renégociation reste au sein de la même banque, tandis que le rachat de crédit transfère le prêt vers un nouvel établissement offrant de meilleures conditions.',
      },
      {
        id: 'q2',
        question: 'À partir de quel écart de taux approximatif une renégociation ou un rachat de crédit devient-il généralement intéressant ?',
        options: [
          'Un écart significatif, souvent cité autour de 0,7 à 1 point de pourcentage ou plus, selon le capital restant dû et la durée',
          'Un écart de 0,01 point suffit toujours',
          'Aucun écart n’est jamais suffisant pour justifier l’opération',
          'L’écart de taux n’a aucune importance dans cette décision',
        ],
        correctIndex: 0,
        explanation:
          'Un écart significatif entre le taux initial et les taux actuels du marché est nécessaire pour que le gain d’intérêts dépasse les frais engagés par l’opération.',
      },
      {
        id: 'q3',
        question: 'Pourquoi la durée restante du prêt est-elle un critère important pour juger de la pertinence d’une renégociation ?',
        options: [
          'Plus il reste d’années à rembourser, plus le gain potentiel sur les intérêts futurs est important',
          'La durée restante n’a jamais aucune influence sur la décision',
          'Il faut au contraire attendre la toute fin du prêt pour renégocier',
          'Seuls les prêts sur moins de 5 ans peuvent être renégociés',
        ],
        correctIndex: 0,
        explanation:
          'Une durée restante importante laisse plus de temps pour que le gain d’intérêts lié à un taux plus bas dépasse les frais associés à l’opération.',
      },
      {
        id: 'q4',
        question: 'Quels frais faut-il intégrer dans le calcul de rentabilité d’un rachat de crédit auprès d’un autre établissement ?',
        options: [
          'Les indemnités de remboursement anticipé, les frais de dossier et de garantie du nouveau prêt',
          'Aucun frais n’est jamais associé à un rachat de crédit',
          'Seul le nouveau taux d’intérêt doit être pris en compte',
          'Les frais de notaire uniquement',
        ],
        correctIndex: 0,
        explanation:
          'Un rachat de crédit implique généralement des indemnités de remboursement anticipé sur l’ancien prêt et des frais de dossier/garantie sur le nouveau, à déduire du gain espéré.',
      },
      {
        id: 'q5',
        question: 'La banque actuelle est-elle obligée d’accepter une demande de renégociation de taux ?',
        options: [
          'Non, elle reste libre d’accepter ou de refuser, ce qui peut pousser l’emprunteur vers un rachat externe',
          'Oui, la loi oblige toute banque à accepter systématiquement',
          'La renégociation est un droit automatique sans possibilité de refus',
          'Cela ne concerne que les crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'La banque n’est pas tenue d’accepter une renégociation ; en cas de refus, l’emprunteur peut se tourner vers un rachat de crédit par un établissement concurrent.',
      },
      {
        id: 'q6',
        question: 'Pourquoi simuler précisément le gain net avant d’engager une démarche de renégociation ou de rachat est-il essentiel ?',
        options: [
          'Pour s’assurer que le gain d’intérêts dépasse réellement l’ensemble des frais engagés par l’opération',
          'Cette simulation n’a aucune utilité pratique',
          'Le gain est toujours positif quelle que soit la situation',
          'Seul le ressenti de l’emprunteur doit guider la décision',
        ],
        correctIndex: 0,
        explanation:
          'Une simulation chiffrée précise, intégrant tous les frais, permet de vérifier objectivement que l’opération est financièrement avantageuse avant de s’engager.',
      },
    ],
  },
  'garanties-caution': {
    id: 'garanties-caution',
    moduleId: 'credit-emprunt',
    title: 'Garanties, caution et hypothèque',
    emoji: '🔐',
    xp: 40,
    intro:
      'Pour se protéger en cas de défaut de paiement, une banque exige généralement une garantie sur un ' +
      'crédit immobilier : hypothèque, caution d’un organisme spécialisé, ou nantissement d’un actif ' +
      'financier. La caution, via un organisme de cautionnement mutuel, est souvent moins coûteuse et plus ' +
      'simple à mettre en place que l’hypothèque, mais elle nécessite d’être éligible aux critères de ' +
      'l’organisme. Comprendre ces mécanismes aide à anticiper les frais de garantie qui s’ajoutent au coût ' +
      'global d’un crédit immobilier.',
    questions: [
      {
        id: 'q1',
        question: 'Quel est le rôle d’une garantie (hypothèque, caution) associée à un crédit immobilier ?',
        options: [
          'Protéger la banque en lui donnant un recours en cas de défaut de paiement de l’emprunteur',
          'Garantir un taux d’intérêt plus bas automatiquement',
          'Remplacer l’assurance emprunteur',
          'Réduire systématiquement la durée du prêt',
        ],
        correctIndex: 0,
        explanation:
          'La garantie donne à la banque un recours (saisie du bien, appel à l’organisme de caution) en cas d’impossibilité de l’emprunteur à rembourser son crédit.',
      },
      {
        id: 'q2',
        question: 'Qu’est-ce qu’une hypothèque concrètement ?',
        options: [
          'Un droit réel qui permet à la banque de faire saisir et vendre le bien immobilier en cas de défaut de paiement',
          'Un simple document administratif sans aucune conséquence juridique',
          'Une assurance obligatoire contre le vol du logement',
          'Un crédit à taux zéro accordé par l’État',
        ],
        correctIndex: 0,
        explanation:
          'L’hypothèque est une sûreté réelle inscrite sur le bien, donnant à la banque le droit de le faire saisir et vendre si l’emprunteur ne rembourse pas son prêt.',
      },
      {
        id: 'q3',
        question: 'Pourquoi la caution via un organisme de cautionnement mutuel est-elle souvent préférée à l’hypothèque ?',
        options: [
          'Elle est généralement moins coûteuse et plus simple administrativement, avec parfois une restitution partielle des frais en fin de prêt',
          'Elle est toujours plus chère que l’hypothèque',
          'Elle n’offre absolument aucune protection à la banque',
          'Elle est interdite pour les crédits immobiliers en France',
        ],
        correctIndex: 0,
        explanation:
          'La caution évite les frais d’acte notarié liés à l’hypothèque et peut donner lieu, selon les organismes, à une restitution partielle des sommes versées à la fin du prêt.',
      },
      {
        id: 'q4',
        question: 'L’éligibilité à une caution par un organisme spécialisé est-elle automatique pour tout emprunteur ?',
        options: [
          'Non, elle dépend de critères propres à l’organisme, qui peut refuser certains profils',
          'Oui, tout le monde est systématiquement accepté sans aucune condition',
          'La caution ne dépend jamais du profil de l’emprunteur',
          'Seuls les fonctionnaires peuvent bénéficier d’une caution',
        ],
        correctIndex: 0,
        explanation:
          'Chaque organisme de cautionnement applique ses propres critères d’acceptation, ce qui peut conduire à un refus pour certains profils, nécessitant alors une hypothèque.',
      },
      {
        id: 'q5',
        question: 'Le nantissement d’un actif financier (assurance-vie, portefeuille de titres) peut-il servir de garantie à un crédit ?',
        options: [
          'Oui, l’actif financier est alors bloqué en garantie sans être vendu, tant que le crédit n’est pas remboursé',
          'Non, seuls les biens immobiliers peuvent servir de garantie',
          'Le nantissement oblige à vendre immédiatement l’actif financier',
          'Cela ne concerne que les crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'Le nantissement bloque un actif financier comme garantie sans le liquider, la banque pouvant se rembourser dessus uniquement en cas de défaut avéré de l’emprunteur.',
      },
      {
        id: 'q6',
        question: 'Les frais de garantie (hypothèque ou caution) sont-ils intégrés dans le TAEG du crédit immobilier ?',
        options: [
          'Oui, ils font partie des coûts obligatoires pris en compte dans le calcul du TAEG',
          'Non, ils sont totalement indépendants du coût du crédit',
          'Non, ces frais n’existent jamais en pratique',
          'Ils ne concernent que les crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'Les frais de garantie, étant une condition d’octroi du crédit immobilier, sont intégrés dans le calcul du TAEG qui reflète le coût total du financement.',
      },
    ],
  },
  'fiscalite-immobiliere': {
    id: 'fiscalite-immobiliere',
    moduleId: 'fiscalite',
    title: "La fiscalité de l'immobilier locatif",
    emoji: '🏠',
    xp: 30,
    intro:
      "Les revenus locatifs sont imposés différemment selon le régime choisi : micro-foncier (abattement " +
      'forfaitaire de 30%) ou régime réel (déduction des charges réelles). Le régime réel devient souvent ' +
      'plus avantageux dès que les charges déductibles (travaux, intérêts d’emprunt) dépassent l’abattement ' +
      'forfaitaire du micro-foncier. Bien choisir son régime fiscal, et parfois anticiper un déficit foncier ' +
      'via des travaux, permet d’optimiser légalement l’imposition de ses revenus locatifs.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’offre le régime micro-foncier pour l’imposition des revenus locatifs ?',
        options: [
          'Un abattement forfaitaire de 30% sur les loyers perçus, sans besoin de justifier les charges réelles',
          'Une exonération totale de tout impôt sur les loyers',
          'Un crédit d’impôt automatique de 50%',
          'Un taux d’imposition fixe de 10%',
        ],
        correctIndex: 0,
        explanation:
          'Le micro-foncier applique un abattement forfaitaire de 30% censé représenter les charges, sans qu’il soit nécessaire de justifier leur montant réel.',
      },
      {
        id: 'q2',
        question: 'Quand le régime réel devient-il généralement plus avantageux que le micro-foncier ?',
        options: [
          'Lorsque les charges réelles déductibles (travaux, intérêts d’emprunt) dépassent 30% des loyers perçus',
          'Jamais, le micro-foncier est toujours plus avantageux',
          'Uniquement pour les biens loués meublés',
          'Le choix du régime n’a aucun impact sur l’impôt final',
        ],
        correctIndex: 0,
        explanation:
          'Si les charges réelles dépassent l’abattement forfaitaire de 30%, opter pour le régime réel permet de déduire le montant effectif de ces charges et de réduire davantage le revenu imposable.',
      },
      {
        id: 'q3',
        question: 'Les intérêts d’emprunt liés à l’achat d’un bien locatif sont-ils déductibles au régime réel ?',
        options: [
          'Oui, ils font partie des charges déductibles des revenus fonciers au régime réel',
          'Non, ils ne sont jamais déductibles',
          'Ils ne sont déductibles qu’au régime micro-foncier',
          'Seuls les intérêts des 5 premières années sont déductibles',
        ],
        correctIndex: 0,
        explanation:
          'Au régime réel, les intérêts d’emprunt liés à l’acquisition ou aux travaux d’un bien locatif sont déductibles des revenus fonciers bruts.',
      },
      {
        id: 'q4',
        question: 'Qu’est-ce qu’un déficit foncier, et quel est son intérêt fiscal ?',
        options: [
          'Un excédent de charges déductibles sur les loyers perçus, imputable sur le revenu global dans une certaine limite annuelle',
          'Un revenu locatif exceptionnellement élevé',
          'Une taxe spécifique sur les logements vacants',
          'Un crédit d’impôt réservé aux primo-accédants',
        ],
        correctIndex: 0,
        explanation:
          'Lorsque les charges déductibles (notamment des travaux) dépassent les loyers perçus, le déficit foncier généré peut s’imputer sur le revenu global du contribuable, dans une limite annuelle.',
      },
      {
        id: 'q5',
        question: 'La location meublée relève-t-elle du même régime fiscal que la location nue (non meublée) ?',
        options: [
          'Non, elle relève des bénéfices industriels et commerciaux (BIC), avec des règles et abattements différents',
          'Oui, exactement les mêmes règles s’appliquent',
          'La location meublée est totalement exonérée d’impôt',
          'Seule la location nue existe fiscalement en France',
        ],
        correctIndex: 0,
        explanation:
          'La location meublée est fiscalement classée en BIC plutôt qu’en revenus fonciers classiques, avec des règles d’abattement et de déduction spécifiques (notamment le régime LMNP).',
      },
      {
        id: 'q6',
        question: 'Une fois le choix du régime réel exercé pour les revenus fonciers, peut-on en changer librement chaque année ?',
        options: [
          'Non, l’option pour le régime réel est généralement engagée pour une durée minimale de plusieurs années',
          'Oui, sans aucune contrainte de durée',
          'Le changement de régime est impossible à vie une fois choisi',
          'Cela ne dépend que du montant des loyers perçus',
        ],
        correctIndex: 0,
        explanation:
          'L’option pour le régime réel engage généralement le contribuable sur plusieurs années consécutives, un point à anticiper avant de faire ce choix.',
      },
    ],
  },
  'credits-impot': {
    id: 'credits-impot',
    moduleId: 'fiscalite',
    title: "Les principaux crédits et réductions d'impôt",
    emoji: '🎟️',
    xp: 30,
    intro:
      'Les réductions et crédits d’impôt encouragent certains comportements (dons, emploi à domicile, ' +
      'investissement locatif) en diminuant l’impôt dû. Contrairement à une réduction d’impôt, un crédit ' +
      'd’impôt peut donner lieu à un remboursement si son montant dépasse l’impôt dû, ce qui le rend ' +
      'accessible même aux foyers peu ou pas imposables. Un plafonnement global limite toutefois le cumul ' +
      'de la plupart de ces avantages fiscaux sur une même année.',
    questions: [
      {
        id: 'q1',
        question: 'Quelle est la nature du crédit d’impôt pour l’emploi d’un salarié à domicile ?',
        options: [
          'Une aide fiscale calculée sur une partie des dépenses engagées, sous plafond, pouvant donner lieu à remboursement',
          'Une exonération totale et sans limite de toute charge sociale',
          'Un crédit bancaire à taux préférentiel',
          'Une aide réservée uniquement aux retraités',
        ],
        correctIndex: 0,
        explanation:
          'Ce crédit d’impôt couvre une partie des dépenses d’emploi à domicile dans la limite d’un plafond annuel, et peut être remboursé si son montant dépasse l’impôt dû.',
      },
      {
        id: 'q2',
        question: 'Une réduction d’impôt pour don à une association peut-elle donner lieu à un remboursement si son montant dépasse l’impôt dû ?',
        options: [
          'Non, une réduction d’impôt s’arrête à annuler l’impôt dû, sans remboursement de l’excédent',
          'Oui, systématiquement remboursée intégralement',
          'Cela dépend uniquement du montant du don',
          'Les dons ne donnent jamais droit à un avantage fiscal',
        ],
        correctIndex: 0,
        explanation:
          'Contrairement à un crédit d’impôt, une réduction d’impôt ne peut qu’annuler l’impôt dû au maximum, sans générer de remboursement si son montant est supérieur.',
      },
      {
        id: 'q3',
        question: 'Le plafonnement global des niches fiscales s’applique-t-il uniformément à tous les dispositifs de réduction ou crédit d’impôt ?',
        options: [
          'Non, certains dispositifs sont inclus dans ce plafond, d’autres en sont exclus selon la loi',
          'Oui, absolument tous sans aucune exception',
          'Ce plafonnement ne concerne que les entreprises',
          'Il n’existe aucun plafonnement en France',
        ],
        correctIndex: 0,
        explanation:
          'Le plafonnement global des niches fiscales inclut la plupart des avantages fiscaux, mais certains dispositifs spécifiques peuvent en être exclus selon les textes en vigueur.',
      },
      {
        id: 'q4',
        question: 'Un contribuable non imposable peut-il bénéficier d’un crédit d’impôt malgré l’absence d’impôt à payer ?',
        options: [
          'Oui, un crédit d’impôt peut donner lieu à un versement de l’administration fiscale même sans impôt dû',
          'Non, seuls les contribuables imposables peuvent en bénéficier',
          'Les crédits d’impôt n’existent que pour les entreprises',
          'Cela dépend uniquement du montant des revenus déclarés',
        ],
        correctIndex: 0,
        explanation:
          'L’avantage propre au crédit d’impôt (par rapport à la réduction) est justement de pouvoir être remboursé même à un foyer non imposable, sous forme de versement de l’administration.',
      },
      {
        id: 'q5',
        question: 'Les dépenses d’investissement locatif dans certains dispositifs à avantage fiscal ouvrent-elles droit à une réduction d’impôt étalée sur plusieurs années ?',
        options: [
          'Oui, ce type de dispositif étale généralement l’avantage fiscal sur plusieurs années d’engagement locatif',
          'Non, l’avantage est toujours perçu en une seule fois',
          'Ces dispositifs n’ont jamais existé en France',
          'Ils concernent uniquement les résidences secondaires',
        ],
        correctIndex: 0,
        explanation:
          'Les dispositifs d’investissement locatif à avantage fiscal étalent généralement la réduction d’impôt sur la durée d’engagement de location du bien.',
      },
      {
        id: 'q6',
        question: 'Pourquoi vérifier chaque année les plafonds et conditions d’éligibilité des crédits et réductions d’impôt est-il recommandé ?',
        options: [
          'Car les règles, plafonds et dispositifs évoluent régulièrement d’une année sur l’autre',
          'Les règles fiscales ne changent jamais une fois fixées',
          'Cela n’a aucune utilité, les avantages sont acquis à vie',
          'Seules les entreprises doivent vérifier ces règles chaque année',
        ],
        correctIndex: 0,
        explanation:
          'Les dispositifs de réduction et crédit d’impôt évoluent fréquemment (montants, plafonds, conditions), ce qui justifie une vérification annuelle avant de déclarer ses dépenses.',
      },
    ],
  },
  'impots-locaux': {
    id: 'impots-locaux',
    moduleId: 'fiscalite',
    title: 'La taxe foncière et les impôts locaux',
    emoji: '🗺️',
    xp: 30,
    intro:
      "La taxe foncière est due chaque année par le propriétaire d'un bien immobilier, qu'il l'occupe ou " +
      'le loue, et son montant dépend de la valeur locative cadastrale du bien et des taux votés par les ' +
      "collectivités locales. Contrairement à la taxe d'habitation sur la résidence principale (supprimée " +
      'pour la plupart des foyers), la taxe foncière reste due par tous les propriétaires. Ces impôts ' +
      'locaux financent les services proposés par les communes, départements et autres collectivités ' +
      'territoriales.',
    questions: [
      {
        id: 'q1',
        question: 'Qui est redevable de la taxe foncière sur un bien immobilier ?',
        options: [
          'Le propriétaire du bien, qu’il l’occupe lui-même ou qu’il le loue à un tiers',
          'Uniquement le locataire occupant le logement',
          'Uniquement l’État, jamais un particulier',
          'Personne, cette taxe a été totalement supprimée',
        ],
        correctIndex: 0,
        explanation:
          'La taxe foncière est due par le propriétaire du bien au 1er janvier de l’année d’imposition, indépendamment du fait qu’il occupe ou loue le logement.',
      },
      {
        id: 'q2',
        question: 'Sur quelle base est calculé le montant de la taxe foncière ?',
        options: [
          'La valeur locative cadastrale du bien, multipliée par les taux votés par les collectivités locales',
          'Un montant fixe identique partout en France',
          'Uniquement le revenu du propriétaire',
          'Le prix d’achat initial du bien',
        ],
        correctIndex: 0,
        explanation:
          'La taxe foncière se calcule à partir de la valeur locative cadastrale du bien, ajustée par les taux d’imposition votés localement par les collectivités concernées.',
      },
      {
        id: 'q3',
        question: 'La taxe d’habitation sur la résidence principale concerne-t-elle encore la majorité des ménages français ?',
        options: [
          'Non, elle a été supprimée pour la quasi-totalité des résidences principales',
          'Oui, elle concerne toujours tous les ménages sans exception',
          'Elle n’a jamais existé en France',
          'Elle concerne uniquement les locataires, jamais les propriétaires',
        ],
        correctIndex: 0,
        explanation:
          'La taxe d’habitation sur la résidence principale a été progressivement supprimée pour la grande majorité des foyers français ces dernières années.',
      },
      {
        id: 'q4',
        question: 'Les impôts locaux financent-ils les mêmes services que l’impôt sur le revenu national ?',
        options: [
          'Non, ils financent des services de proximité (écoles, voirie, collecte des déchets) gérés par les collectivités locales',
          'Oui, exactement les mêmes services nationaux',
          'Ils ne financent aucun service concret',
          'Ils sont uniquement redistribués aux entreprises locales',
        ],
        correctIndex: 0,
        explanation:
          'Contrairement à l’impôt national, les impôts locaux financent des services de proximité gérés directement par les communes, départements et autres collectivités territoriales.',
      },
      {
        id: 'q5',
        question: 'Le montant de la taxe foncière peut-il varier significativement d’une commune à l’autre pour un bien similaire ?',
        options: [
          'Oui, car chaque collectivité vote ses propres taux d’imposition locaux',
          'Non, le taux est strictement identique partout en France',
          'La taxe foncière est fixée uniquement par l’État de façon uniforme',
          'Elle ne dépend jamais de la localisation du bien',
        ],
        correctIndex: 0,
        explanation:
          'Les taux de taxe foncière étant votés localement, un bien de valeur locative similaire peut être taxé très différemment selon la commune où il se situe.',
      },
      {
        id: 'q6',
        question: 'Un logement vacant (non loué, non habité) peut-il être soumis à une taxe spécifique en plus de la taxe foncière ?',
        options: [
          'Oui, une taxe sur les logements vacants peut s’appliquer dans certaines zones tendues',
          'Non, un logement vacant est toujours totalement exonéré de toute taxe',
          'Cette taxe ne concerne que les résidences secondaires à la montagne',
          'Elle remplace systématiquement la taxe foncière',
        ],
        correctIndex: 0,
        explanation:
          'Dans certaines zones où la demande de logement est tendue, une taxe additionnelle peut s’appliquer aux logements laissés vacants sans justification, en plus de la taxe foncière classique.',
      },
    ],
  },
  'succession-donation-fiscalite': {
    id: 'succession-donation-fiscalite',
    moduleId: 'fiscalite',
    title: 'La fiscalité de la succession et des donations',
    emoji: '🖋️',
    xp: 40,
    intro:
      'Les droits de succession et de donation sont calculés selon un barème progressif qui dépend du ' +
      'lien de parenté entre le défunt (ou le donateur) et le bénéficiaire. Un abattement s’applique avant ' +
      'taxation, variable selon ce lien : plus il est éloigné, plus l’abattement est faible et le taux ' +
      'd’imposition élevé. Anticiper sa transmission via des donations échelonnées dans le temps permet de ' +
      'profiter plusieurs fois des abattements et de réduire la charge fiscale globale pour les héritiers.',
    questions: [
      {
        id: 'q1',
        question: 'Le taux des droits de succession dépend-il du lien de parenté entre défunt et héritier ?',
        options: [
          'Oui, le barème et les abattements varient fortement selon le degré de parenté',
          'Non, un taux unique s’applique à tous les héritiers',
          'Non, le lien de parenté n’a jamais aucune importance fiscale',
          'Cela ne dépend que du montant total de la succession',
        ],
        correctIndex: 0,
        explanation:
          'Les droits de succession suivent un barème progressif dont les taux et abattements dépendent directement du lien de parenté avec le défunt.',
      },
      {
        id: 'q2',
        question: 'Un abattement identique s’applique-t-il pour une transmission entre parents et enfants et pour une transmission entre frères et sœurs ?',
        options: [
          'Non, l’abattement est généralement plus élevé pour un enfant que pour un frère ou une sœur',
          'Oui, exactement le même abattement dans tous les cas',
          'L’abattement ne dépend jamais du lien de parenté',
          'Les frères et sœurs bénéficient toujours du plus gros abattement',
        ],
        correctIndex: 0,
        explanation:
          'Le barème fiscal prévoit des abattements différenciés selon le lien de parenté, généralement plus favorables en ligne directe (parent-enfant) qu’entre collatéraux.',
      },
      {
        id: 'q3',
        question: 'Pourquoi échelonner des donations dans le temps (tous les 15 ans) est-il une stratégie de transmission efficace ?',
        options: [
          'Chaque abattement se reconstitue après ce délai, permettant de transmettre plusieurs fois en franchise de droits',
          'Un abattement ne peut être utilisé qu’une seule fois dans toute une vie',
          'Échelonner les donations n’a aucun effet fiscal',
          'Cela ne concerne que les successions, jamais les donations',
        ],
        correctIndex: 0,
        explanation:
          'Le renouvellement périodique des abattements permet, via des donations espacées de 15 ans, de transmettre un capital plus important en limitant les droits payés au total.',
      },
      {
        id: 'q4',
        question: 'Les droits de succession sont-ils calculés sur la totalité du patrimoine transmis ou après application d’un abattement ?',
        options: [
          'Après application d’un abattement propre à chaque héritier selon son lien avec le défunt',
          'Sur la totalité du patrimoine sans aucun abattement',
          'Uniquement sur les biens immobiliers',
          'Les droits de succession n’existent pas en France',
        ],
        correctIndex: 0,
        explanation:
          'Un abattement est appliqué avant taxation, réduisant la base imposable transmise à chaque héritier selon son lien de parenté avec le défunt.',
      },
      {
        id: 'q5',
        question: 'Le conjoint survivant est-il soumis aux mêmes droits de succession que les autres héritiers ?',
        options: [
          'Non, le conjoint survivant (marié) bénéficie d’une exonération totale de droits de succession',
          'Oui, exactement le même barème que pour un héritier éloigné',
          'Le conjoint ne peut jamais hériter légalement',
          'Il paie systématiquement le taux le plus élevé du barème',
        ],
        correctIndex: 0,
        explanation:
          'Le conjoint survivant marié bénéficie d’une exonération totale des droits de succession, un régime bien plus favorable que celui des autres héritiers.',
      },
      {
        id: 'q6',
        question: 'Pourquoi consulter un notaire est-il particulièrement utile pour anticiper une transmission complexe (famille recomposée, entreprise à transmettre) ?',
        options: [
          'Pour bénéficier d’un conseil adapté aux règles spécifiques et aux dispositifs d’optimisation propres à chaque situation',
          'Un notaire n’a aucune utilité dans ce type de démarche',
          'Cela concerne uniquement les successions internationales',
          'La consultation d’un notaire est interdite avant le décès',
        ],
        correctIndex: 0,
        explanation:
          'Les situations complexes de transmission (famille recomposée, entreprise) bénéficient de règles et dispositifs spécifiques que seul un professionnel peut aider à optimiser légalement.',
      },
    ],
  },
  'expatriation-fiscale': {
    id: 'expatriation-fiscale',
    moduleId: 'fiscalite',
    title: 'Fiscalité et expatriation : les bases',
    emoji: '✈️',
    xp: 40,
    intro:
      "S'expatrier modifie profondément sa situation fiscale : la résidence fiscale, déterminée par des " +
      'critères précis (lieu de vie principal, centre des intérêts économiques), détermine dans quel pays ' +
      'on est en principe imposé sur l’ensemble de ses revenus mondiaux. Des conventions fiscales ' +
      'bilatérales entre la France et de nombreux pays visent à éviter qu’un même revenu soit taxé deux ' +
      'fois. Certains revenus de source française (immobilier locatif, par exemple) peuvent rester ' +
      'imposables en France même après un départ à l’étranger.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce qui détermine la résidence fiscale d’une personne selon les critères français ?',
        options: [
          'Notamment le lieu du foyer, le lieu d’activité professionnelle principale ou le centre des intérêts économiques',
          'Uniquement la nationalité de la personne',
          'Le pays où elle a fait ses études',
          'Le pays où elle possède un compte bancaire',
        ],
        correctIndex: 0,
        explanation:
          'La résidence fiscale française repose sur plusieurs critères cumulatifs ou alternatifs : foyer, activité professionnelle principale, ou centre des intérêts économiques.',
      },
      {
        id: 'q2',
        question: 'Une personne résidente fiscale d’un pays est-elle en principe imposée sur l’ensemble de ses revenus mondiaux dans ce pays ?',
        options: [
          'Oui, c’est le principe général, sous réserve des conventions fiscales applicables',
          'Non, seuls les revenus de source locale sont jamais imposés',
          'La résidence fiscale n’a aucun lien avec l’imposition des revenus',
          'Cela ne concerne que les revenus immobiliers',
        ],
        correctIndex: 0,
        explanation:
          'Le principe de la résidence fiscale implique une imposition sur l’ensemble des revenus mondiaux du contribuable dans son pays de résidence, sous réserve des règles conventionnelles.',
      },
      {
        id: 'q3',
        question: 'À quoi servent les conventions fiscales bilatérales entre la France et d’autres pays ?',
        options: [
          'À éviter qu’un même revenu soit taxé deux fois dans les deux pays concernés',
          'À doubler systématiquement l’impôt dû sur un même revenu',
          'Elles n’ont aucune utilité pratique',
          'Elles concernent uniquement les entreprises multinationales',
        ],
        correctIndex: 0,
        explanation:
          'Les conventions fiscales bilatérales répartissent le droit d’imposer entre les deux pays signataires afin d’éviter la double imposition d’un même revenu.',
      },
      {
        id: 'q4',
        question: 'Un bien immobilier locatif situé en France reste-t-il imposable en France même après un départ à l’étranger ?',
        options: [
          'Oui, les revenus fonciers de source française restent en principe imposables en France, quelle que soit la résidence fiscale du propriétaire',
          'Non, un départ à l’étranger exonère automatiquement tout bien situé en France',
          'Cela ne concerne que les biens loués meublés',
          'Les revenus fonciers ne sont jamais imposables une fois expatrié',
        ],
        correctIndex: 0,
        explanation:
          'Certains revenus de source française, comme les loyers d’un bien immobilier situé en France, restent en principe imposables en France même après un changement de résidence fiscale.',
      },
      {
        id: 'q5',
        question: 'Le simple fait de vivre quelques semaines par an à l’étranger suffit-il à changer sa résidence fiscale ?',
        options: [
          'Non, un changement de résidence fiscale nécessite de remplir des critères précis et durables, pas seulement un séjour ponctuel',
          'Oui, quelques jours suffisent toujours à tout changer',
          'La résidence fiscale ne peut jamais changer une fois fixée',
          'Cela dépend uniquement du nombre de valises emportées',
        ],
        correctIndex: 0,
        explanation:
          'Le changement de résidence fiscale répond à des critères précis et durables (foyer, activité principale, centre des intérêts économiques), pas à un simple séjour temporaire à l’étranger.',
      },
      {
        id: 'q6',
        question: 'Pourquoi anticiper les conséquences fiscales avant une expatriation est-il particulièrement important ?',
        options: [
          'Pour éviter les mauvaises surprises liées à une double imposition potentielle ou à des obligations déclaratives mal anticipées',
          'La fiscalité n’a jamais aucun lien avec une expatriation',
          'Il n’existe aucune règle fiscale à connaître avant de partir',
          'Cela ne concerne que les très hauts revenus',
        ],
        correctIndex: 0,
        explanation:
          'Une expatriation mal anticipée fiscalement peut entraîner des situations de double imposition ou des obligations déclaratives complexes à gérer, d’où l’intérêt de s’informer en amont.',
      },
    ],
  },
  'compte-resultat': {
    id: 'compte-resultat',
    moduleId: 'finance-entreprise',
    title: 'Lire un compte de résultat',
    emoji: '📊',
    xp: 30,
    intro:
      "Le compte de résultat retrace l'activité d'une entreprise sur une période donnée (souvent un an) : ce qu'elle a gagné, ce qu'elle a dépensé, et ce qu'il en reste. Contrairement au bilan qui est une photo à un instant T, le compte de résultat est un film sur toute la période. Savoir le lire permet de comprendre si une entreprise gagne vraiment de l'argent avec son activité.",
    questions: [
      {
        id: 'q1',
        question: 'Que retrace un compte de résultat ?',
        options: [
          "L'activité de l'entreprise sur une période donnée (produits et charges)",
          "Le patrimoine de l'entreprise à un instant précis",
          'Uniquement la trésorerie disponible en banque',
          "La liste des actionnaires de l'entreprise",
        ],
        correctIndex: 0,
        explanation:
          "Le compte de résultat récapitule les produits (ventes, revenus) et les charges (coûts) sur une période donnée, pour déterminer le résultat de l'entreprise.",
      },
      {
        id: 'q2',
        question: 'Comment obtient-on le résultat net ?',
        options: [
          'Produits − charges (avant impôt, puis après impôt sur les sociétés)',
          'Actif − passif',
          'Chiffre d\'affaires × nombre de salariés',
          'Trésorerie de début d\'année + trésorerie de fin d\'année',
        ],
        correctIndex: 0,
        explanation:
          "Le résultat se calcule en soustrayant l'ensemble des charges (achats, salaires, impôts, etc.) de l'ensemble des produits générés sur la période.",
      },
      {
        id: 'q3',
        question: 'Que représente le chiffre d\'affaires ?',
        options: [
          'Le total des ventes de biens ou services réalisées par l\'entreprise',
          'Le bénéfice net après impôt',
          'La valeur des locaux de l\'entreprise',
          'Le montant des dettes bancaires',
        ],
        correctIndex: 0,
        explanation:
          "Le chiffre d'affaires correspond au montant total des ventes réalisées, hors charges : ce n'est pas encore un indicateur de rentabilité.",
      },
      {
        id: 'q4',
        question: 'Pourquoi une entreprise peut-elle avoir un chiffre d\'affaires élevé mais un résultat négatif ?',
        options: [
          'Parce que ses charges (achats, salaires, loyers...) dépassent ses produits',
          'C\'est impossible, un chiffre d\'affaires élevé garantit toujours un bénéfice',
          'Parce que le chiffre d\'affaires est toujours égal au résultat',
          'Parce que les impôts remboursent automatiquement les pertes',
        ],
        correctIndex: 0,
        explanation:
          "Un chiffre d'affaires élevé ne garantit rien si les charges associées (matières premières, salaires, loyers, intérêts...) sont encore plus élevées : le résultat peut être négatif.",
      },
      {
        id: 'q5',
        question: 'À quoi sert principalement le compte de résultat pour un investisseur ou un banquier ?',
        options: [
          "À évaluer la rentabilité et la performance de l'activité de l'entreprise",
          'À connaître uniquement l\'adresse du siège social',
          'À calculer le nombre d\'actionnaires',
          'À fixer le prix des matières premières',
        ],
        correctIndex: 0,
        explanation:
          "Le compte de résultat est un outil clé pour juger si une entreprise est rentable et comment évolue sa performance économique dans le temps.",
      },
      {
        id: 'q6',
        question: 'Quelle différence majeure existe-t-il entre bilan et compte de résultat ?',
        options: [
          'Le bilan est une photo du patrimoine à un instant T, le compte de résultat retrace l\'activité sur une période',
          'Ce sont deux noms différents pour le même document',
          'Le compte de résultat ne concerne que les impôts',
          'Le bilan ne concerne que les grandes entreprises',
        ],
        correctIndex: 0,
        explanation:
          "Le bilan donne une vision patrimoniale à un instant donné (actif/passif), tandis que le compte de résultat retrace les flux (produits/charges) sur toute une période.",
      },
    ],
  },
  'seuil-rentabilite': {
    id: 'seuil-rentabilite',
    moduleId: 'finance-entreprise',
    title: 'Le seuil de rentabilité (point mort)',
    emoji: '⚖️',
    xp: 30,
    intro:
      "Le seuil de rentabilité, ou point mort, est le niveau de chiffre d'affaires à partir duquel une entreprise couvre toutes ses charges, sans faire ni bénéfice ni perte. En dessous, elle perd de l'argent ; au-dessus, elle commence à en gagner. C'est un repère essentiel pour tout entrepreneur avant de se lancer ou de fixer ses objectifs de vente.",
    questions: [
      {
        id: 'q1',
        question: 'Que signifie atteindre le seuil de rentabilité ?',
        options: [
          "Couvrir exactement toutes ses charges, sans bénéfice ni perte",
          "Rembourser l'intégralité de ses dettes bancaires",
          'Doubler son chiffre d\'affaires en un an',
          'Atteindre le nombre maximal de clients possible',
        ],
        correctIndex: 0,
        explanation:
          "Au seuil de rentabilité, le chiffre d'affaires couvre exactement l'ensemble des charges fixes et variables : le résultat est nul.",
      },
      {
        id: 'q2',
        question: 'Quelles sont les deux grandes catégories de charges utilisées dans ce calcul ?',
        options: [
          'Les charges fixes et les charges variables',
          'Les charges nationales et les charges internationales',
          'Les charges anciennes et les charges nouvelles',
          'Les charges publiques et les charges privées',
        ],
        correctIndex: 0,
        explanation:
          "Les charges fixes (loyer, assurances...) ne varient pas avec l'activité, tandis que les charges variables (matières premières...) évoluent avec les ventes.",
      },
      {
        id: 'q3',
        question: 'Que se passe-t-il si le chiffre d\'affaires reste en dessous du seuil de rentabilité ?',
        options: [
          "L'entreprise est en perte : ses charges ne sont pas entièrement couvertes",
          "L'entreprise réalise automatiquement un bénéfice",
          'Rien, le seuil de rentabilité n\'a aucun impact réel',
          'L\'entreprise double ses charges fixes',
        ],
        correctIndex: 0,
        explanation:
          "En dessous du seuil de rentabilité, les recettes ne suffisent pas à couvrir l'ensemble des charges : l'activité génère une perte.",
      },
      {
        id: 'q4',
        question: 'Pourquoi le seuil de rentabilité est-il particulièrement utile à un créateur d\'entreprise ?',
        options: [
          'Il permet de savoir quel niveau de ventes minimum il faut atteindre pour ne pas perdre d\'argent',
          'Il permet de fixer le salaire des employés',
          'Il détermine automatiquement le prix de vente final',
          'Il sert uniquement à remplir la déclaration de TVA',
        ],
        correctIndex: 0,
        explanation:
          "Connaître son seuil de rentabilité avant de se lancer permet de fixer des objectifs de vente réalistes et d'évaluer la viabilité du projet.",
      },
      {
        id: 'q5',
        question: 'Comment une baisse des charges fixes influence-t-elle le seuil de rentabilité ?',
        options: [
          'Elle abaisse le seuil de rentabilité, donc l\'entreprise devient rentable plus rapidement',
          'Elle n\'a aucun effet sur le seuil de rentabilité',
          'Elle augmente systématiquement le seuil de rentabilité',
          'Elle double le chiffre d\'affaires nécessaire',
        ],
        correctIndex: 0,
        explanation:
          "Moins de charges fixes à couvrir signifie qu'un chiffre d'affaires plus faible suffit à atteindre l'équilibre : le seuil de rentabilité baisse.",
      },
      {
        id: 'q6',
        question: 'Le seuil de rentabilité est-il figé dans le temps pour une entreprise ?',
        options: [
          'Non, il évolue si les charges fixes, les charges variables ou les prix de vente changent',
          'Oui, il reste identique toute la vie de l\'entreprise',
          'Il ne dépend que du nombre d\'associés fondateurs',
          'Il est fixé une fois pour toutes par l\'administration fiscale',
        ],
        correctIndex: 0,
        explanation:
          "Le seuil de rentabilité doit être recalculé régulièrement, car il dépend de paramètres qui évoluent : coûts, prix de vente, structure de charges.",
      },
    ],
  },
  'financement-entreprise': {
    id: 'financement-entreprise',
    moduleId: 'finance-entreprise',
    title: "Les modes de financement d'une entreprise",
    emoji: '🏗️',
    xp: 30,
    intro:
      "Une entreprise peut se financer de plusieurs façons : ses fonds propres (apports des associés, bénéfices réinvestis), l'emprunt bancaire, ou encore des financements alternatifs comme le crowdfunding ou les aides publiques. Chaque mode de financement a ses avantages et ses contraintes en matière de coût, de risque et de contrôle de l'entreprise.",
    questions: [
      {
        id: 'q1',
        question: 'Que sont les fonds propres d\'une entreprise ?',
        options: [
          "Les ressources apportées par les associés/actionnaires et les bénéfices non distribués réinvestis",
          'Uniquement l\'argent emprunté à la banque',
          'Les aides publiques reçues chaque année',
          'La valeur des locaux loués par l\'entreprise',
        ],
        correctIndex: 0,
        explanation:
          "Les fonds propres regroupent le capital apporté par les associés et les bénéfices réinvestis dans l'entreprise plutôt que distribués.",
      },
      {
        id: 'q2',
        question: 'Quel est le principal avantage du financement par emprunt bancaire par rapport aux fonds propres ?',
        options: [
          'Il ne dilue pas le capital ni le contrôle des associés existants',
          'Il ne nécessite jamais de remboursement',
          'Il est toujours gratuit',
          'Il élimine tout risque financier',
        ],
        correctIndex: 0,
        explanation:
          "Contrairement à une levée de fonds en capital, l'emprunt permet de financer l'entreprise sans faire entrer de nouveaux associés ni diluer le pouvoir des fondateurs.",
      },
      {
        id: 'q3',
        question: 'Qu\'est-ce que le crowdfunding (financement participatif) ?',
        options: [
          "Un mode de financement où un grand nombre de particuliers contribuent, souvent via une plateforme en ligne",
          "Un prêt accordé exclusivement par l'État",
          'Une subvention réservée aux grandes entreprises cotées',
          'Un type d\'impôt sur les sociétés',
        ],
        correctIndex: 0,
        explanation:
          "Le crowdfunding permet à une entreprise de lever des fonds auprès du public via des plateformes dédiées, sous forme de dons, prêts ou prises de participation.",
      },
      {
        id: 'q4',
        question: 'Pourquoi un emprunt bancaire implique-t-il un risque pour l\'entreprise ?',
        options: [
          'Parce qu\'il doit être remboursé avec des intérêts, quelle que soit la performance de l\'activité',
          'Parce qu\'il n\'a besoin d\'être remboursé qu\'en cas de faillite',
          'Parce qu\'il n\'existe aucune obligation de remboursement',
          'Parce qu\'il transforme automatiquement la banque en actionnaire',
        ],
        correctIndex: 0,
        explanation:
          "L'emprunt doit être remboursé selon un échéancier fixe avec intérêts, ce qui pèse sur la trésorerie même si l'activité traverse une période difficile.",
      },
      {
        id: 'q5',
        question: 'Quel est un inconvénient potentiel de faire entrer de nouveaux investisseurs en capital ?',
        options: [
          'Une dilution du pouvoir de décision des fondateurs',
          'Une obligation immédiate de rembourser un capital fixe chaque mois',
          'Un coût toujours plus élevé qu\'un prêt bancaire classique',
          'Une interdiction légale de vendre l\'entreprise plus tard',
        ],
        correctIndex: 0,
        explanation:
          "En échange de capitaux, de nouveaux actionnaires obtiennent des parts et un droit de regard, ce qui peut diluer le contrôle des fondateurs sur les décisions.",
      },
      {
        id: 'q6',
        question: 'Pourquoi est-il souvent recommandé de diversifier ses sources de financement ?',
        options: [
          'Pour réduire la dépendance à une seule source et mieux répartir les risques',
          'Parce que la loi française l\'impose à toutes les entreprises',
          'Parce qu\'un seul mode de financement est toujours interdit',
          'Pour éviter de payer des impôts sur les sociétés',
        ],
        correctIndex: 0,
        explanation:
          "Combiner fonds propres, emprunt et financements alternatifs permet de répartir les risques et de ne pas dépendre entièrement d'un seul type de ressource.",
      },
    ],
  },
  'valorisation-entreprise': {
    id: 'valorisation-entreprise',
    moduleId: 'finance-entreprise',
    title: 'Valoriser une entreprise',
    emoji: '🧮',
    xp: 40,
    intro:
      "Combien vaut une entreprise ? La question se pose lors d'une vente, d'une levée de fonds ou d'une succession. Plusieurs méthodes existent : la valeur patrimoniale (ce que possède l'entreprise), la valeur de rendement (basée sur ses bénéfices futurs), ou la comparaison avec des entreprises similaires. Allons plus loin dans la logique de valorisation, un exercice à la fois financier et souvent subjectif.",
    questions: [
      {
        id: 'q1',
        question: 'Que cherche à déterminer la valorisation d\'une entreprise ?',
        options: [
          "Sa valeur économique globale, utile lors d'une vente, d'une levée de fonds ou d'une transmission",
          'Uniquement le montant de ses impôts annuels',
          'Le nombre exact de salariés qu\'elle emploie',
          'La localisation géographique de son siège social',
        ],
        correctIndex: 0,
        explanation:
          "Valoriser une entreprise, c'est estimer ce qu'elle vaut économiquement, une information clé pour une cession, une levée de fonds ou une succession.",
      },
      {
        id: 'q2',
        question: 'Sur quoi repose l\'approche patrimoniale de valorisation ?',
        options: [
          "Sur la valeur des actifs de l'entreprise diminuée de ses dettes",
          'Uniquement sur le chiffre d\'affaires prévisionnel',
          'Sur le nombre d\'années d\'existence de l\'entreprise',
          'Sur la notoriété de la marque sur les réseaux sociaux',
        ],
        correctIndex: 0,
        explanation:
          "L'approche patrimoniale évalue l'entreprise à partir de son actif net (actifs moins dettes), une logique proche du bilan comptable.",
      },
      {
        id: 'q3',
        question: 'Que mesure l\'approche par le rendement (ou actualisation des flux futurs) ?',
        options: [
          "La capacité de l'entreprise à générer des bénéfices ou des flux de trésorerie dans le futur",
          'Uniquement la valeur des bâtiments détenus',
          'Le montant des impôts déjà payés dans le passé',
          'Le nombre d\'associés fondateurs',
        ],
        correctIndex: 0,
        explanation:
          "Cette méthode valorise l'entreprise en fonction des bénéfices ou flux de trésorerie qu'elle est susceptible de générer à l'avenir, actualisés à aujourd'hui.",
      },
      {
        id: 'q4',
        question: 'En quoi consiste la méthode des comparables ?',
        options: [
          "Comparer l'entreprise à des sociétés similaires récemment vendues ou cotées, pour en déduire un ordre de grandeur",
          'Comparer uniquement les statuts juridiques des entreprises',
          'Comparer le nombre de kilomètres entre deux sièges sociaux',
          'Comparer les couleurs des logos des entreprises du secteur',
        ],
        correctIndex: 0,
        explanation:
          "La méthode des comparables s'appuie sur les valorisations observées pour des entreprises similaires (même secteur, taille comparable) afin d'estimer une fourchette de valeur.",
      },
      {
        id: 'q5',
        question: 'Pourquoi la valorisation d\'une entreprise n\'est-elle jamais totalement objective ?',
        options: [
          'Parce qu\'elle dépend d\'hypothèses (croissance future, taux d\'actualisation...) qui peuvent varier selon l\'analyste',
          'Parce que la loi impose un prix unique pour chaque entreprise',
          'Parce que seules les entreprises cotées en bourse ont une valeur',
          'Parce que la valorisation ne concerne que les grandes entreprises',
        ],
        correctIndex: 0,
        explanation:
          "Toute valorisation repose sur des hypothèses (croissance, risques, taux d'actualisation) qui varient selon les méthodes et les analystes, d'où une part de subjectivité inévitable.",
      },
      {
        id: 'q6',
        question: 'Dans quel contexte la valorisation d\'entreprise est-elle particulièrement centrale ?',
        options: [
          'Lors d\'une levée de fonds, où elle détermine le pourcentage du capital cédé aux investisseurs',
          'Uniquement lors du recrutement d\'un nouveau salarié',
          'Uniquement pour fixer le prix des matières premières',
          'Jamais, la valorisation n\'a d\'utilité que pour les entreprises publiques',
        ],
        correctIndex: 0,
        explanation:
          "Lors d'une levée de fonds, la valorisation fixe directement la part du capital que les fondateurs cèdent en échange des capitaux apportés par les investisseurs.",
      },
    ],
  },
  'levee-de-fonds': {
    id: 'levee-de-fonds',
    moduleId: 'finance-entreprise',
    title: 'La levée de fonds et le capital-risque',
    emoji: '🚀',
    xp: 40,
    intro:
      "Une levée de fonds consiste à faire entrer des investisseurs (business angels, fonds de capital-risque) au capital d'une entreprise en échange de liquidités pour financer sa croissance. Allons plus loin sur ce mécanisme central des startups : comment il fonctionne, ce qu'il implique pour les fondateurs, et pourquoi il ne convient pas à tous les types d'entreprises.",
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce qu\'une levée de fonds ?',
        options: [
          "L'opération par laquelle une entreprise fait entrer des investisseurs à son capital en échange de liquidités",
          'Un emprunt bancaire classique remboursable avec intérêts',
          'Une subvention versée automatiquement par l\'État',
          'La vente totale de l\'entreprise à un unique repreneur',
        ],
        correctIndex: 0,
        explanation:
          "Lever des fonds signifie ouvrir le capital de l'entreprise à de nouveaux investisseurs qui apportent des liquidités en échange de parts sociales ou actions.",
      },
      {
        id: 'q2',
        question: 'Qui sont les "business angels" ?',
        options: [
          "Des particuliers fortunés qui investissent leur argent personnel dans de jeunes entreprises, souvent en apportant aussi conseils et réseau",
          'Des fonctionnaires chargés de valider les créations d\'entreprises',
          'Des banques spécialisées uniquement dans les prêts immobiliers',
          'Des organismes publics qui garantissent tous les emprunts',
        ],
        correctIndex: 0,
        explanation:
          "Les business angels sont des investisseurs individuels qui misent sur des entreprises early-stage, apportant souvent bien plus que de l'argent : expérience et réseau.",
      },
      {
        id: 'q3',
        question: 'Que reçoivent en échange les investisseurs qui participent à une levée de fonds ?',
        options: [
          'Des parts ou actions de l\'entreprise, proportionnelles à leur investissement',
          'Un remboursement fixe mensuel garanti',
          'Un poste salarié automatique dans l\'entreprise',
          'Rien, il s\'agit toujours d\'un don sans contrepartie',
        ],
        correctIndex: 0,
        explanation:
          "En échange de leur apport, les investisseurs reçoivent des titres de propriété (parts sociales ou actions) représentant une fraction du capital de l'entreprise.",
      },
      {
        id: 'q4',
        question: 'Quel est le principal risque d\'une levée de fonds pour les fondateurs ?',
        options: [
          'La dilution progressive de leur pourcentage de contrôle sur l\'entreprise',
          'L\'obligation de rembourser les investisseurs chaque mois avec intérêts',
          'La disparition immédiate de tous les employés',
          'L\'interdiction de vendre le moindre produit',
        ],
        correctIndex: 0,
        explanation:
          "Chaque nouvelle levée de fonds dilue la part du capital détenue par les fondateurs, qui peuvent perdre le contrôle majoritaire au fil des tours de financement successifs.",
      },
      {
        id: 'q5',
        question: 'Pourquoi une levée de fonds ne convient-elle pas à toutes les entreprises ?',
        options: [
          'Car elle suppose une perspective de forte croissance capable d\'intéresser des investisseurs cherchant un retour important',
          'Parce qu\'elle est interdite aux entreprises de moins de 10 ans',
          'Parce qu\'elle n\'est autorisée que dans le secteur agricole',
          'Parce qu\'elle nécessite obligatoirement d\'être cotée en bourse',
        ],
        correctIndex: 0,
        explanation:
          "Les investisseurs en capital-risque recherchent un fort potentiel de croissance et de retour sur investissement, ce qui ne correspond pas au modèle de toutes les entreprises (ex : commerces de proximité).",
      },
      {
        id: 'q6',
        question: 'Qu\'appelle-t-on un "tour de table" (ou "round") dans le jargon des levées de fonds ?',
        options: [
          'Une étape de financement où l\'entreprise lève une somme donnée auprès d\'un groupe d\'investisseurs',
          'Une réunion annuelle obligatoire de tous les salariés',
          'Le nom donné à l\'assemblée générale des actionnaires uniquement',
          'Un simple rendez-vous chez le banquier sans conséquence juridique',
        ],
        correctIndex: 0,
        explanation:
          "Un tour de table désigne une étape de levée de fonds (seed, série A, série B...) où l'entreprise obtient un financement défini auprès d'un ou plusieurs investisseurs.",
      },
    ],
  },
  'chomage-emploi': {
    id: 'chomage-emploi',
    moduleId: 'economie-francaise',
    title: 'Le marché du travail et le chômage',
    emoji: '👷',
    xp: 30,
    intro:
      "Le taux de chômage est l'un des indicateurs économiques les plus suivis en France. Il mesure la part de la population active qui n'a pas d'emploi mais qui en cherche un activement. Comprendre comment il se calcule et pourquoi il varie permet de mieux lire l'actualité économique et les débats sur les politiques de l'emploi.",
    questions: [
      {
        id: 'q1',
        question: 'Que mesure le taux de chômage ?',
        options: [
          "La part des personnes sans emploi, disponibles et recherchant activement un travail, parmi la population active",
          'Le nombre total d\'habitants en France',
          'Le montant moyen des salaires versés chaque mois',
          'Le nombre d\'entreprises créées chaque année',
        ],
        correctIndex: 0,
        explanation:
          "Le taux de chômage rapporte le nombre de chômeurs (sans emploi, disponibles, en recherche active) à la population active totale (actifs occupés + chômeurs).",
      },
      {
        id: 'q2',
        question: 'Qu\'appelle-t-on la "population active" ?',
        options: [
          'L\'ensemble des personnes en emploi et des personnes au chômage cherchant un emploi',
          'Uniquement les personnes retraitées',
          'Uniquement les étudiants inscrits à l\'université',
          'L\'ensemble de la population française, enfants compris',
        ],
        correctIndex: 0,
        explanation:
          "La population active regroupe les personnes en emploi (occupés) et celles qui n'en ont pas mais en cherchent un activement (chômeurs), selon la définition du BIT.",
      },
      {
        id: 'q3',
        question: 'Quel organisme mesure officiellement le taux de chômage en France ?',
        options: [
          'L\'Insee, notamment via des enquêtes trimestrielles',
          'Uniquement Pôle emploi / France Travail',
          'La Banque de France exclusivement',
          'Le ministère de la Culture',
        ],
        correctIndex: 0,
        explanation:
          "L'Insee publie le taux de chômage au sens du Bureau International du Travail (BIT), à partir d'enquêtes emploi réalisées régulièrement.",
      },
      {
        id: 'q4',
        question: 'Quel est un facteur qui peut faire baisser le taux de chômage ?',
        options: [
          'Une croissance économique soutenue qui stimule les créations d\'emplois',
          'Une hausse générale et durable des prix sans lien avec l\'emploi',
          'Une baisse du nombre d\'entreprises en activité',
          'Une réduction de la population active totale sans lien avec l\'emploi',
        ],
        correctIndex: 0,
        explanation:
          "Une croissance économique dynamique s'accompagne généralement de créations d'emplois, ce qui contribue à faire baisser le taux de chômage.",
      },
      {
        id: 'q5',
        question: 'Pourquoi parle-t-on parfois de "chômage structurel" ?',
        options: [
          'Pour désigner un chômage durable lié à des déséquilibres profonds du marché du travail (inadéquation des compétences, rigidités...)',
          'Pour désigner un chômage qui ne dure que quelques jours',
          'Parce que ce terme ne concerne que les fonctionnaires',
          'Parce qu\'il s\'agit d\'un chômage qui touche uniquement les jeunes diplômés',
        ],
        correctIndex: 0,
        explanation:
          "Le chômage structurel renvoie à des causes durables (inadéquation entre offres et compétences, rigidités du marché du travail), à distinguer du chômage conjoncturel lié aux cycles économiques.",
      },
      {
        id: 'q6',
        question: 'Quel est l\'impact d\'un taux de chômage élevé sur l\'économie dans son ensemble ?',
        options: [
          'Il pèse sur la consommation des ménages et les finances publiques (moins de cotisations, plus d\'allocations versées)',
          'Il n\'a strictement aucun effet sur l\'économie',
          'Il fait automatiquement baisser les prix de l\'immobilier partout en France',
          'Il augmente systématiquement les salaires de tous les actifs',
        ],
        correctIndex: 0,
        explanation:
          "Un chômage élevé réduit le pouvoir d'achat global, freine la consommation, et pèse sur les comptes publics via une baisse des cotisations et une hausse des dépenses sociales.",
      },
    ],
  },
  'dette-publique': {
    id: 'dette-publique',
    moduleId: 'economie-francaise',
    title: 'La dette publique française',
    emoji: '🏦',
    xp: 30,
    intro:
      "La dette publique correspond à l'ensemble des sommes empruntées par l'État, les collectivités locales et la Sécurité sociale pour financer leurs dépenses. En France, elle dépasse aujourd'hui largement le montant de la richesse produite en un an (le PIB). Comprendre son fonctionnement permet de mieux saisir les débats sur le déficit et les finances publiques.",
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce que la dette publique ?',
        options: [
          "L'ensemble des emprunts contractés par les administrations publiques (État, collectivités, Sécurité sociale)",
          'Uniquement les dettes des entreprises privées françaises',
          'Le montant total des impôts collectés chaque année',
          'La somme des crédits immobiliers des ménages français',
        ],
        correctIndex: 0,
        explanation:
          "La dette publique regroupe les emprunts cumulés de l'ensemble des administrations publiques françaises pour financer leurs dépenses.",
      },
      {
        id: 'q2',
        question: 'Comment exprime-t-on généralement le niveau de la dette publique ?',
        options: [
          'En pourcentage du PIB (produit intérieur brut)',
          'En nombre d\'entreprises cotées en bourse',
          'En nombre de fonctionnaires employés',
          'En nombre de communes en France',
        ],
        correctIndex: 0,
        explanation:
          "Exprimer la dette en pourcentage du PIB permet de la comparer à la richesse produite par le pays, et donc de juger de sa soutenabilité.",
      },
      {
        id: 'q3',
        question: 'D\'où provient principalement la dette publique d\'une année sur l\'autre ?',
        options: [
          'De l\'accumulation des déficits publics successifs (dépenses supérieures aux recettes)',
          'Uniquement des emprunts des ménages',
          'De la vente d\'actifs publics',
          'Des dividendes versés par les entreprises du CAC 40',
        ],
        correctIndex: 0,
        explanation:
          "Chaque déficit public annuel (quand les dépenses de l'État dépassent ses recettes) doit être financé par un nouvel emprunt, ce qui alimente la dette accumulée.",
      },
      {
        id: 'q4',
        question: 'Qui achète principalement la dette de l\'État français ?',
        options: [
          'Des investisseurs institutionnels (banques, assureurs, fonds) français et étrangers, via des obligations d\'État',
          'Uniquement les particuliers français',
          'Uniquement la Banque de France',
          'Uniquement des gouvernements étrangers',
        ],
        correctIndex: 0,
        explanation:
          "L'État emprunte en émettant des obligations (OAT) achetées par des investisseurs institutionnels du monde entier, qui perçoivent des intérêts en contrepartie.",
      },
      {
        id: 'q5',
        question: 'Pourquoi le niveau des taux d\'intérêt est-il important pour la dette publique ?',
        options: [
          'Parce qu\'il détermine le coût annuel du remboursement des intérêts de la dette pour l\'État',
          'Parce qu\'il fixe le montant exact des impôts sur le revenu',
          'Parce qu\'il n\'a aucun lien avec les finances publiques',
          'Parce qu\'il détermine uniquement le taux de chômage',
        ],
        correctIndex: 0,
        explanation:
          "Plus les taux d'intérêt sont élevés, plus la charge de la dette (intérêts à payer chaque année) pèse lourd dans le budget de l'État, au détriment d'autres dépenses.",
      },
      {
        id: 'q6',
        question: 'Pourquoi un niveau de dette publique très élevé peut-il inquiéter les marchés financiers ?',
        options: [
          'Car il peut faire douter de la capacité de l\'État à rembourser, entraînant une hausse des taux exigés par les prêteurs',
          'Parce qu\'il fait automatiquement disparaître la monnaie nationale',
          'Parce qu\'il est interdit par la loi française',
          'Parce qu\'il concerne uniquement les collectivités locales',
        ],
        correctIndex: 0,
        explanation:
          "Un endettement jugé trop élevé peut inquiéter les prêteurs sur la capacité de remboursement du pays, les poussant à exiger des taux d'intérêt plus élevés pour compenser le risque perçu.",
      },
    ],
  },
  'commerce-exterieur': {
    id: 'commerce-exterieur',
    moduleId: 'economie-francaise',
    title: 'Le commerce extérieur de la France',
    emoji: '🚢',
    xp: 30,
    intro:
      "Le commerce extérieur désigne l'ensemble des échanges de biens et de services entre la France et le reste du monde : ce qu'elle exporte (vend à l'étranger) et ce qu'elle importe (achète à l'étranger). La différence entre les deux constitue la balance commerciale, un indicateur souvent commenté dans l'actualité économique française.",
    questions: [
      {
        id: 'q1',
        question: 'Que désigne la balance commerciale d\'un pays ?',
        options: [
          'La différence entre la valeur des exportations et celle des importations de biens',
          'Le montant total des impôts collectés sur les importations',
          'Le nombre d\'entreprises exportatrices présentes dans le pays',
          'Le taux de change officiel de la monnaie nationale',
        ],
        correctIndex: 0,
        explanation:
          "La balance commerciale se calcule en soustrayant la valeur des importations de celle des exportations : positive, elle est excédentaire ; négative, elle est déficitaire.",
      },
      {
        id: 'q2',
        question: 'Que signifie un déficit commercial ?',
        options: [
          'Le pays importe plus de biens en valeur qu\'il n\'en exporte',
          'Le pays exporte plus qu\'il n\'importe',
          'Le pays n\'a aucun échange avec l\'étranger',
          'Le pays a remboursé toute sa dette publique',
        ],
        correctIndex: 0,
        explanation:
          "Un déficit commercial signifie que la valeur des biens achetés à l'étranger (importations) dépasse celle des biens vendus à l'étranger (exportations).",
      },
      {
        id: 'q3',
        question: 'Quels sont des exemples de secteurs traditionnellement forts pour les exportations françaises ?',
        options: [
          'L\'aéronautique, le luxe, l\'agroalimentaire et l\'énergie (nucléaire notamment)',
          'Uniquement le secteur du tourisme intérieur',
          'Uniquement le secteur bancaire domestique',
          'Uniquement les services publics locaux',
        ],
        correctIndex: 0,
        explanation:
          "La France dispose de champions à l'export dans l'aéronautique, le luxe, l'agroalimentaire, la pharmacie et l'énergie, secteurs qui contribuent fortement à ses exportations.",
      },
      {
        id: 'q4',
        question: 'Pourquoi la facture énergétique influence-t-elle fortement la balance commerciale française ?',
        options: [
          'Parce que la France importe une part importante de l\'énergie qu\'elle consomme (pétrole, gaz notamment)',
          'Parce que la France exporte 100% de son énergie',
          'Parce que l\'énergie n\'entre jamais dans le calcul du commerce extérieur',
          'Parce que la France ne consomme aucune énergie importée',
        ],
        correctIndex: 0,
        explanation:
          "La France dépend des importations pour une bonne partie de son énergie (pétrole, gaz), ce qui pèse sur sa balance commerciale, en particulier quand les prix de l'énergie augmentent.",
      },
      {
        id: 'q5',
        question: 'Quel est un effet possible d\'un déficit commercial persistant sur l\'économie d\'un pays ?',
        options: [
          'Une dépendance accrue vis-à-vis de l\'étranger et une pression sur la monnaie ou les finances extérieures',
          'Une hausse automatique et garantie des salaires',
          'La disparition immédiate du chômage',
          'Une baisse mécanique et automatique des impôts',
        ],
        correctIndex: 0,
        explanation:
          "Un déficit commercial durable peut accroître la dépendance économique vis-à-vis des partenaires étrangers et fragiliser certains équilibres macroéconomiques du pays.",
      },
      {
        id: 'q6',
        question: 'Le commerce extérieur concerne-t-il uniquement les biens matériels ?',
        options: [
          'Non, il inclut aussi les services (tourisme, ingénierie, assurance, conseil...)',
          'Oui, il ne concerne que les produits physiques transportés',
          'Non, il ne concerne que les matières premières agricoles',
          'Oui, il exclut totalement le secteur du luxe',
        ],
        correctIndex: 0,
        explanation:
          "Le commerce extérieur englobe aussi les échanges de services (tourisme, conseil, assurance...), un domaine où la France affiche traditionnellement un excédent notable, notamment grâce au tourisme.",
      },
    ],
  },
  'politique-budgetaire': {
    id: 'politique-budgetaire',
    moduleId: 'economie-francaise',
    title: 'Politique budgétaire et déficit public',
    emoji: '📜',
    xp: 40,
    intro:
      "La politique budgétaire regroupe les décisions de l'État concernant ses dépenses et ses recettes (impôts, taxes). Allons plus loin sur ce levier économique majeur : comment l'État peut chercher à relancer l'activité ou au contraire à assainir ses finances, et pourquoi ces choix font l'objet de débats permanents en France.",
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce que la politique budgétaire ?',
        options: [
          'L\'ensemble des décisions de l\'État concernant ses dépenses publiques et ses recettes (impôts, taxes)',
          'Uniquement la politique de la Banque centrale sur les taux d\'intérêt',
          'La politique commerciale entre entreprises privées',
          'Le budget personnel des ménages français',
        ],
        correctIndex: 0,
        explanation:
          "La politique budgétaire désigne les choix de l'État en matière de dépenses publiques et de prélèvements (impôts, taxes), un outil central de politique économique.",
      },
      {
        id: 'q2',
        question: 'Que désigne une politique budgétaire dite "de relance" ?',
        options: [
          'Une hausse des dépenses publiques et/ou une baisse des impôts pour stimuler l\'activité économique',
          'Une baisse des dépenses publiques pour réduire la dette',
          'Une hausse générale et durable des taux d\'intérêt',
          'Une interdiction totale des importations',
        ],
        correctIndex: 0,
        explanation:
          "Une politique de relance vise à stimuler la demande et l'activité en augmentant les dépenses publiques ou en réduisant les impôts, quitte à creuser temporairement le déficit.",
      },
      {
        id: 'q3',
        question: 'Que désigne une politique budgétaire dite "d\'austérité" ou de rigueur ?',
        options: [
          'Une réduction des dépenses publiques et/ou une hausse des impôts pour réduire le déficit',
          'Une hausse massive des dépenses publiques sans limite',
          'Une politique qui ne concerne que les entreprises privées',
          'Une suppression totale des impôts sur le revenu',
        ],
        correctIndex: 0,
        explanation:
          "Une politique d'austérité cherche à réduire le déficit public en diminuant les dépenses et/ou en augmentant les recettes fiscales, au prix parfois d'un ralentissement économique.",
      },
      {
        id: 'q4',
        question: 'Que représente le déficit public d\'une année donnée ?',
        options: [
          'La différence négative entre les recettes et les dépenses publiques sur cette année',
          'Le montant total de la dette publique accumulée depuis 50 ans',
          'Le montant des exportations françaises de l\'année',
          'Le taux de chômage de l\'année en question',
        ],
        correctIndex: 0,
        explanation:
          "Le déficit public correspond à l'écart, sur une année donnée, entre les recettes de l'État et ses dépenses : quand les dépenses dépassent les recettes, il y a déficit.",
      },
      {
        id: 'q5',
        question: 'Pourquoi les règles européennes encadrent-elles la politique budgétaire des pays de la zone euro ?',
        options: [
          'Pour limiter les déséquilibres budgétaires excessifs qui pourraient déstabiliser la zone euro dans son ensemble',
          'Parce que chaque pays doit avoir exactement le même taux de chômage',
          'Parce que la politique budgétaire est interdite en zone euro',
          'Parce que seule la France est soumise à ces règles',
        ],
        correctIndex: 0,
        explanation:
          "Des règles communes (comme les critères de déficit et de dette) existent pour éviter que des déséquilibres budgétaires excessifs d'un pays ne fragilisent la stabilité de toute la zone euro.",
      },
      {
        id: 'q6',
        question: 'Pourquoi la politique budgétaire fait-elle souvent l\'objet de débats politiques intenses ?',
        options: [
          'Parce qu\'elle implique des choix de société sur les priorités de dépenses et la répartition des efforts fiscaux',
          'Parce qu\'elle ne concerne en réalité que les fonctionnaires',
          'Parce qu\'elle est fixée uniquement par des experts sans lien avec le vote des citoyens',
          'Parce qu\'elle ne change jamais d\'une année sur l\'autre',
        ],
        correctIndex: 0,
        explanation:
          "Les choix budgétaires (quelles dépenses privilégier, qui doit payer plus ou moins d'impôts) reflètent des priorités politiques et sociales différentes, ce qui alimente naturellement le débat démocratique.",
      },
    ],
  },
  'mondialisation-economie': {
    id: 'mondialisation-economie',
    moduleId: 'economie-francaise',
    title: 'La France dans la mondialisation',
    emoji: '🌍',
    xp: 40,
    intro:
      "La mondialisation désigne l'intensification des échanges économiques, financiers et humains à l'échelle planétaire. Allons plus loin sur la place de la France dans ce mouvement : ses atouts, ses vulnérabilités, et les grands débats qu'elle soulève, entre ouverture commerciale et volonté de souveraineté économique.",
    questions: [
      {
        id: 'q1',
        question: 'Que désigne la mondialisation économique ?',
        options: [
          "L'intensification des échanges de biens, services, capitaux et personnes entre les pays du monde",
          'Un accord commercial signé uniquement entre la France et l\'Allemagne',
          'La disparition complète des frontières politiques',
          'Une politique fiscale spécifique à la France',
        ],
        correctIndex: 0,
        explanation:
          "La mondialisation désigne le développement des échanges économiques (commerce, capitaux, entreprises, personnes) à l'échelle mondiale, favorisé par la baisse des barrières commerciales et les progrès technologiques.",
      },
      {
        id: 'q2',
        question: 'Quel est un avantage souvent cité de la mondialisation pour une économie comme celle de la France ?',
        options: [
          'L\'accès à de nouveaux marchés pour ses entreprises exportatrices et des produits importés moins chers',
          'La disparition totale de la concurrence internationale',
          'La suppression complète des importations',
          'Une garantie de plein emploi automatique',
        ],
        correctIndex: 0,
        explanation:
          "La mondialisation permet aux entreprises françaises d'accéder à de nouveaux débouchés à l'export, et aux consommateurs de bénéficier de produits importés souvent moins coûteux.",
      },
      {
        id: 'q3',
        question: 'Quel est un risque souvent associé à la mondialisation pour l\'économie française ?',
        options: [
          'Une concurrence accrue pouvant fragiliser certains secteurs industriels nationaux et l\'emploi associé',
          'Une hausse garantie et automatique de tous les salaires',
          'La disparition immédiate de toute inflation',
          'Un excédent commercial automatique et permanent',
        ],
        correctIndex: 0,
        explanation:
          "L'ouverture aux échanges mondiaux expose certains secteurs à une concurrence internationale intense, pouvant entraîner des délocalisations ou des pertes d'emplois dans certaines industries.",
      },
      {
        id: 'q4',
        question: 'Qu\'appelle-t-on la "délocalisation" ?',
        options: [
          'Le transfert d\'une activité de production d\'un pays vers un autre, souvent pour réduire les coûts',
          'Le déménagement d\'un salarié dans une autre ville de France',
          'La fermeture définitive d\'une entreprise sans transfert d\'activité',
          'L\'ouverture d\'un nouveau magasin dans la même région',
        ],
        correctIndex: 0,
        explanation:
          "La délocalisation consiste à transférer une production vers un autre pays, souvent motivée par des coûts de main-d'œuvre ou de production plus faibles.",
      },
      {
        id: 'q5',
        question: 'Pourquoi parle-t-on de plus en plus de "souveraineté économique" en France ?',
        options: [
          'Pour réduire la dépendance excessive à certains fournisseurs ou secteurs stratégiques étrangers (énergie, santé, technologie)',
          'Parce que la France souhaite arrêter tout commerce avec l\'étranger',
          'Parce que ce terme ne concerne que la politique militaire',
          'Parce que la France a définitivement quitté l\'Union européenne',
        ],
        correctIndex: 0,
        explanation:
          "Certaines crises (pandémie, tensions géopolitiques) ont mis en évidence des dépendances stratégiques (médicaments, semi-conducteurs, énergie), relançant les débats sur la nécessité de relocaliser certaines productions.",
      },
      {
        id: 'q6',
        question: 'Quel rôle joue l\'Union européenne dans la place de la France au sein de la mondialisation ?',
        options: [
          'Elle négocie des accords commerciaux communs et constitue un marché unique qui renforce le poids économique de ses membres',
          'Elle interdit à la France de commercer avec le reste du monde',
          'Elle n\'a aucun rôle dans les échanges économiques internationaux',
          'Elle impose à la France de ne plus utiliser sa propre monnaie nationale historique dans les échanges',
        ],
        correctIndex: 0,
        explanation:
          "L'Union européenne négocie des accords commerciaux au nom de ses membres et forme un marché unique qui renforce le poids économique et la capacité de négociation de pays comme la France face au reste du monde.",
      },
    ],
  },
}

export function getLessonById(lessonId) {
  return LESSONS[lessonId]
}
