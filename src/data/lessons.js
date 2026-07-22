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
  'budget-101-niv2': {
    id: 'budget-101-niv2',
    moduleId: 'budget-epargne',
    title: 'Les bases du budget — Niveau 2',
    emoji: '💰',
    xp: 30,
    intro:
      'Tu maîtrises la règle 50/30/20. Passons à des notions plus précises : revenus variables, ' +
      'dépenses annuelles lissées, et distinction entre dépenses fixes et variables.',
    questions: [
      {
        id: 'q1',
        question: 'Un indépendant a des revenus qui varient chaque mois. Sur quelle base doit-il construire son budget ?',
        options: [
          'Une moyenne lissée de ses revenus sur plusieurs mois',
          'Le revenu du meilleur mois de l’année',
          'Un montant fixe arbitraire',
          'Le revenu minimum légal',
        ],
        correctIndex: 0,
        explanation:
          'Lisser les revenus sur plusieurs mois évite de bâtir un budget sur un mois exceptionnel non représentatif.',
      },
      {
        id: 'q2',
        question: 'Une dépense comme l’assurance auto payée une fois par an doit être budgétée comment ?',
        options: [
          'En la divisant par 12 pour l’intégrer au budget mensuel',
          'En l’ignorant tant qu’elle n’est pas due',
          'En la payant avec un crédit à la consommation',
          'En la considérant comme un loisir',
        ],
        correctIndex: 0,
        explanation:
          'Provisionner mensuellement les dépenses annuelles évite la mauvaise surprise du prélèvement unique.',
      },
      {
        id: 'q3',
        question: 'Quelle est la différence entre une dépense fixe et une dépense variable ?',
        options: [
          'La fixe est identique chaque mois, la variable fluctue selon la consommation',
          'La fixe change chaque mois',
          'Il n’existe pas de différence',
          'La variable est toujours plus faible que la fixe',
        ],
        correctIndex: 0,
        explanation:
          'Le loyer est une dépense fixe ; les courses ou l’énergie sont des dépenses variables qui évoluent selon l’usage.',
      },
      {
        id: 'q4',
        question: 'Que représente le "reste à vivre" dans un budget personnel détaillé ?',
        options: [
          'Ce qu’il reste après les dépenses contraintes (logement, factures, crédits)',
          'Le salaire brut avant impôts',
          'Le montant total épargné',
          'Le montant des impôts payés',
        ],
        correctIndex: 0,
        explanation:
          'Le reste à vivre indique la marge de manœuvre réelle une fois les charges contraintes retirées du revenu.',
      },
      {
        id: 'q5',
        question: 'Pourquoi provisionner une "enveloppe imprévus" distincte dans son budget mensuel ?',
        options: [
          'Pour absorber les petites dépenses inattendues sans déséquilibrer les autres postes',
          'Pour payer plus d’impôts',
          'Cela n’a aucune utilité si on a un CDI',
          'Pour remplacer l’épargne de précaution',
        ],
        correctIndex: 0,
        explanation:
          'Une enveloppe imprévus dans le budget mensuel absorbe les petits aléas sans puiser dans l’épargne de précaution à chaque fois.',
      },
      {
        id: 'q6',
        question: 'Un budget prévisionnel réaliste doit-il intégrer une marge d’erreur sur les postes variables ?',
        options: [
          'Oui, une marge de sécurité évite les dépassements systématiques',
          'Non, les prévisions doivent être exactes au centime',
          'Non, cela fausse le budget',
          'Uniquement pour les revenus, jamais les dépenses',
        ],
        correctIndex: 0,
        explanation:
          'Anticiper une marge sur les postes variables (courses, énergie) rend le budget plus robuste face aux imprévus habituels.',
      },
    ],
  },
  'budget-101-niv3': {
    id: 'budget-101-niv3',
    moduleId: 'budget-epargne',
    title: 'Les bases du budget — Niveau 3',
    emoji: '💰',
    xp: 40,
    intro:
      'Niveau expert : budget base zéro, arbitrages entre postes, et lecture d’un budget sur plusieurs ' +
      'mois pour repérer les dérives structurelles.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce que le "budget base zéro" (zero-based budgeting) ?',
        options: [
          'Une méthode où chaque euro de revenu est affecté à un poste avant le mois, jusqu’à solde nul',
          'Un budget où toutes les dépenses sont interdites',
          'Un crédit à taux zéro',
          'Un livret d’épargne sans intérêt',
        ],
        correctIndex: 0,
        explanation:
          'Le budget base zéro alloue 100% du revenu à des postes précis (dépenses, épargne, projets) avant le début du mois, sans reliquat non affecté.',
      },
      {
        id: 'q2',
        question: 'Si un poste de dépense dépasse systématiquement sa prévision depuis 6 mois, que doit-on en conclure ?',
        options: [
          'Le budget prévisionnel de ce poste est probablement mal calibré et doit être révisé',
          'C’est un hasard sans signification',
          'Il faut arrêter de suivre son budget',
          'Il faut augmenter ses revenus immédiatement',
        ],
        correctIndex: 0,
        explanation:
          'Une dérive récurrente sur plusieurs mois indique un problème structurel de calibrage, pas un simple accident ponctuel.',
      },
      {
        id: 'q3',
        question: 'Comment arbitrer entre deux postes variables en cas de budget serré un mois donné ?',
        options: [
          'Réduire en priorité les postes non essentiels et les moins engagés contractuellement',
          'Ne jamais toucher aux loisirs quoi qu’il arrive',
          'Emprunter systématiquement pour combler l’écart',
          'Retirer l’intégralité de l’épargne de précaution',
        ],
        correctIndex: 0,
        explanation:
          'Il est plus sain de réduire d’abord les dépenses discrétionnaires que de puiser dans l’épargne de précaution ou de s’endetter.',
      },
      {
        id: 'q4',
        question: 'Pourquoi analyser son budget sur une moyenne glissante de 3 à 6 mois plutôt que mois par mois ?',
        options: [
          'Cela lisse les variations ponctuelles et révèle les tendances de fond',
          'Cela n’apporte aucune information supplémentaire',
          'Cela complique inutilement le suivi',
          'Cela sert uniquement pour les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Une vision glissante sur plusieurs mois distingue un accident isolé d’une tendance durable qui nécessite un ajustement structurel.',
      },
      {
        id: 'q5',
        question:
          'Un ménage augmente ses revenus de 10% mais ses dépenses augmentent de 15% la même année. Que traduit ce phénomène ?',
        options: [
          'Une inflation du niveau de vie (lifestyle inflation) qui dégrade la capacité d’épargne',
          'Une amélioration automatique du taux d’épargne',
          'Une erreur de calcul obligatoire',
          'Un effet neutre sur le budget',
        ],
        correctIndex: 0,
        explanation:
          'Quand les dépenses croissent plus vite que les revenus, le taux d’épargne se dégrade malgré la hausse de revenus, un piège classique.',
      },
      {
        id: 'q6',
        question:
          'Quel est l’intérêt de catégoriser ses dépenses en "besoins", "envies" et "épargne/objectifs" plutôt qu’en simples lignes bancaires ?',
        options: [
          'Cela permet d’arbitrer consciemment entre ces trois masses selon ses priorités',
          'Cela n’a aucun intérêt pratique',
          'C’est uniquement utile pour les entreprises',
          'Cela remplace le besoin de suivre ses comptes',
        ],
        correctIndex: 0,
        explanation:
          'Regrouper les dépenses par fonction (besoin/envie/épargne) aide à arbitrer consciemment plutôt que de subir des lignes bancaires désorganisées.',
      },
    ],
  },
  'epargne-precaution-niv2': {
    id: 'epargne-precaution-niv2',
    moduleId: 'budget-epargne',
    title: "L'épargne de précaution — Niveau 2",
    emoji: '🛟',
    xp: 35,
    intro:
      'Tu sais pourquoi épargner un matelas de sécurité. Approfondissons : comment dimensionner ' +
      'précisément ce montant selon sa situation, et où le placer sans sacrifier sa disponibilité.',
    questions: [
      {
        id: 'q1',
        question: 'Un salarié en CDI stable et un freelance aux revenus irréguliers doivent-ils viser la même épargne de précaution ?',
        options: [
          'Non, le freelance a généralement intérêt à viser une épargne plus importante (proche de 6-12 mois)',
          'Oui, exactement le même montant dans tous les cas',
          'Non, le CDI doit épargner plus',
          'Le statut professionnel n’a aucune influence',
        ],
        correctIndex: 0,
        explanation:
          'Un revenu irrégulier ou moins sécurisé justifie une épargne de précaution plus large pour absorber une période creuse plus longue.',
      },
      {
        id: 'q2',
        question: 'Faut-il inclure le loyer et les charges fixes dans le calcul du montant cible de l’épargne de précaution ?',
        options: [
          'Oui, ce sont les dépenses prioritaires à couvrir en cas de perte de revenu',
          'Non, seules les dépenses de loisirs comptent',
          'Non, ce calcul ne sert à rien',
          'Oui, mais uniquement l’électricité',
        ],
        correctIndex: 0,
        explanation:
          'L’épargne de précaution doit avant tout couvrir les charges incompressibles (logement, énergie, alimentation) en cas de coup dur.',
      },
      {
        id: 'q3',
        question: 'Peut-on répartir son épargne de précaution entre plusieurs livrets réglementés ?',
        options: [
          'Oui, par exemple Livret A et LDDS pour dépasser le plafond d’un seul livret',
          'Non, un seul livret est autorisé par personne au total',
          'Non, c’est interdit par la loi',
          'Cela n’a aucun intérêt',
        ],
        correctIndex: 0,
        explanation:
          'Combiner Livret A et LDDS permet de loger une épargne de précaution plus importante tout en gardant sécurité et disponibilité.',
      },
      {
        id: 'q4',
        question: 'Une épargne de précaution logée sur un compte courant non rémunéré est-elle une bonne pratique ?',
        options: [
          'Non, un livret réglementé rémunéré offre la même disponibilité avec un rendement en plus',
          'Oui, c’est la meilleure option possible',
          'Oui, car cela évite tout risque',
          'Cela dépend uniquement de la couleur de la carte bancaire',
        ],
        correctIndex: 0,
        explanation:
          'Un livret réglementé offre la même liquidité qu’un compte courant tout en générant des intérêts, sans risque supplémentaire.',
      },
      {
        id: 'q5',
        question: 'Que faire si une dépense imprévue dépasse le montant de l’épargne de précaution disponible ?',
        options: [
          'Étudier d’abord des solutions de financement adaptées avant de puiser dans des investissements long terme',
          'Vendre immédiatement toutes ses actions sans réflexion',
          'Ignorer la dépense',
          'Emprunter systématiquement au taux le plus élevé disponible',
        ],
        correctIndex: 0,
        explanation:
          'Mieux vaut comparer les options de financement disponibles que de liquider en urgence des investissements de long terme, souvent à perte.',
      },
      {
        id: 'q6',
        question: 'L’épargne de précaution doit-elle évoluer avec la situation familiale (ex : naissance d’un enfant) ?',
        options: [
          'Oui, les charges augmentant, le montant cible doit être réévalué',
          'Non, le montant initial reste valable à vie',
          'Non, la situation familiale n’a aucun impact',
          'Elle doit au contraire diminuer',
        ],
        correctIndex: 0,
        explanation:
          'L’augmentation des charges liées à un changement de situation familiale justifie de revoir à la hausse le montant cible de l’épargne de précaution.',
      },
    ],
  },
  'epargne-precaution-niv3': {
    id: 'epargne-precaution-niv3',
    moduleId: 'budget-epargne',
    title: "L'épargne de précaution — Niveau 3",
    emoji: '🛟',
    xp: 45,
    intro:
      'Niveau expert : arbitrages fins entre épargne de précaution et opportunités d’investissement, ' +
      'cas particuliers et erreurs fréquentes à éviter.',
    questions: [
      {
        id: 'q1',
        question: 'Un épargnant avec une épargne de précaution jugée suffisante doit-il continuer à l’alimenter avant d’investir davantage ?',
        options: [
          'Non, l’excédent peut être orienté vers des placements à plus long terme',
          'Oui, il faut toujours en accumuler davantage indéfiniment',
          'Cela dépend uniquement de son âge',
          'Non, il faut la retirer entièrement',
        ],
        correctIndex: 0,
        explanation:
          'Une fois le montant cible atteint, sur-épargner en épargne de précaution non rémunérée a un coût d’opportunité face à des placements mieux rémunérés à long terme.',
      },
      {
        id: 'q2',
        question: 'En période de forte inflation, l’épargne de précaution perd-elle en pouvoir d’achat si son taux est inférieur à l’inflation ?',
        options: [
          'Oui, mais ce n’est pas un problème car sa fonction est la sécurité, pas la performance',
          'Non, jamais',
          'Oui, il faut donc la placer en actions risquées',
          'Cela n’existe pas en pratique',
        ],
        correctIndex: 0,
        explanation:
          'L’épargne de précaution peut perdre en valeur réelle sous forte inflation, mais son rôle premier reste la disponibilité immédiate en cas de coup dur.',
      },
      {
        id: 'q3',
        question: 'Faut-il piocher dans son épargne de précaution pour rembourser un crédit à la consommation à taux élevé ?',
        options: [
          'Cela peut se justifier si le taux du crédit dépasse largement le rendement de l’épargne',
          'Jamais, sous aucun prétexte',
          'Toujours, systématiquement, sans réfléchir',
          'Cela n’a aucun rapport',
        ],
        correctIndex: 0,
        explanation:
          'Si le taux d’intérêt du crédit dépasse largement le rendement de l’épargne de précaution, rembourser par anticipation peut être rationnel, en gardant un minimum de sécurité.',
      },
      {
        id: 'q4',
        question: 'Quelle erreur classique commettent certains épargnants en sur-dimensionnant excessivement leur épargne de précaution ?',
        options: [
          'Ils immobilisent un capital important à faible rendement, au détriment de projets d’investissement',
          'Ils prennent trop de risques',
          'Ils paient plus d’impôts automatiquement',
          'Ils perdent leur épargne',
        ],
        correctIndex: 0,
        explanation:
          'Une épargne de précaution disproportionnée immobilise inutilement un capital qui pourrait être investi à plus long terme avec un meilleur rendement.',
      },
      {
        id: 'q5',
        question:
          'Un couple avec deux revenus stables et sans enfants a-t-il nécessairement besoin de la même épargne de précaution qu’une personne seule avec un revenu unique ?',
        options: [
          'Non, deux revenus indépendants réduisent le risque global du foyer, le montant cible peut être ajusté à la baisse',
          'Oui, strictement identique dans tous les cas',
          'Non, il en faut davantage',
          'Le nombre de revenus n’a aucune influence',
        ],
        correctIndex: 0,
        explanation:
          'La probabilité de perte simultanée des deux revenus est plus faible que pour un revenu unique, ce qui peut justifier un montant cible légèrement inférieur.',
      },
      {
        id: 'q6',
        question: 'L’épargne de précaution doit-elle être révisée après un remboursement anticipé de crédit immobilier ?',
        options: [
          'Oui, car les mensualités et les charges fixes du foyer changent',
          'Non, jamais',
          'Cela n’a aucun rapport avec l’épargne de précaution',
          'Elle doit être supprimée',
        ],
        correctIndex: 0,
        explanation:
          'Un changement de charges fixes mensuelles modifie le montant de dépenses à couvrir, donc le montant cible de l’épargne de précaution doit être réévalué.',
      },
    ],
  },
  'suivi-quotidien-niv2': {
    id: 'suivi-quotidien-niv2',
    moduleId: 'budget-epargne',
    title: 'Suivre son budget au quotidien — Niveau 2',
    emoji: '📱',
    xp: 30,
    intro:
      'Analysons plus finement ton suivi : écarts budgétaires, sous-catégorisation, et automatisation ' +
      'du suivi via des outils bancaires.',
    questions: [
      {
        id: 'q1',
        question: 'Que signifie analyser un "écart budgétaire" sur un poste de dépense ?',
        options: [
          'Comparer le montant prévu et le montant réellement dépensé pour ce poste',
          'Additionner tous les postes ensemble',
          'Supprimer purement et simplement ce poste',
          'Multiplier le revenu par 12',
        ],
        correctIndex: 0,
        explanation:
          'L’écart budgétaire mesure la différence entre prévu et réalisé sur un poste donné, révélant les postes à ajuster.',
      },
      {
        id: 'q2',
        question:
          'Pourquoi catégoriser ses dépenses en sous-catégories (ex : "courses" vs "restaurants") apporte-t-il plus de précision qu’une catégorie unique ?',
        options: [
          'Cela permet d’identifier précisément quelle partie du poste dérive',
          'Cela complique inutilement le suivi sans bénéfice',
          'Cela n’a aucun intérêt',
          'Cela réduit automatiquement les dépenses',
        ],
        correctIndex: 0,
        explanation:
          'Des sous-catégories précises permettent de cibler exactement la source d’un dépassement plutôt qu’un diagnostic global.',
      },
      {
        id: 'q3',
        question: 'Quel est l’avantage principal d’un suivi automatisé via une application bancaire par rapport à un carnet manuel ?',
        options: [
          'Il réduit le risque d’oubli et de saisie manuelle erronée',
          'Il est toujours gratuit',
          'Il remplace le besoin de tout suivi',
          'Il garantit d’épargner plus',
        ],
        correctIndex: 0,
        explanation:
          'L’agrégation automatique des transactions bancaires limite les oublis et erreurs de saisie propres au suivi manuel.',
      },
      {
        id: 'q4',
        question: 'Que révèle un poste de dépense qui varie fortement d’un mois à l’autre sans explication apparente ?',
        options: [
          'Il mérite un suivi plus fin pour identifier la cause de cette variabilité',
          'Rien de particulier, c’est normal et sans intérêt',
          'Il faut immédiatement le supprimer du budget',
          'Cela signifie que le revenu a changé',
        ],
        correctIndex: 0,
        explanation:
          'Une forte variabilité inexpliquée signale souvent des dépenses ponctuelles mal identifiées qui méritent d’être creusées.',
      },
      {
        id: 'q5',
        question: 'Quel est l’intérêt de comparer son suivi budgétaire mois par mois sur une année complète ?',
        options: [
          'Repérer les variations saisonnières (chauffage en hiver, cadeaux en décembre...)',
          'Cela n’apporte rien de plus qu’un seul mois',
          'Uniquement utile pour les entreprises',
          'Cela sert à calculer ses impôts',
        ],
        correctIndex: 0,
        explanation:
          'Une vue annuelle révèle les variations saisonnières récurrentes, utiles pour mieux anticiper le budget des mois à venir.',
      },
      {
        id: 'q6',
        question: 'Pourquoi éviter de suivre son budget uniquement le jour de la réception du salaire ?',
        options: [
          'Les dépenses s’étalent sur tout le mois, un suivi ponctuel ne reflète pas la réalité',
          'C’est au contraire le seul moment utile',
          'Cela n’a aucune importance',
          'Cela évite les erreurs de calcul',
        ],
        correctIndex: 0,
        explanation:
          'Un suivi unique en début de mois ignore la dynamique réelle des dépenses qui s’étale sur les semaines suivantes.',
      },
    ],
  },
  'suivi-quotidien-niv3': {
    id: 'suivi-quotidien-niv3',
    moduleId: 'budget-epargne',
    title: 'Suivre son budget au quotidien — Niveau 3',
    emoji: '📱',
    xp: 40,
    intro:
      'Niveau expert : prévisions glissantes, biais comportementaux du suivi budgétaire, et indicateurs ' +
      'de santé financière à long terme.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce que le "budget prévisionnel glissant" (rolling forecast) ?',
        options: [
          'Un budget mis à jour en continu chaque mois plutôt que figé une fois par an',
          'Un budget calculé une seule fois pour 10 ans',
          'Un crédit renouvelable',
          'Un livret d’épargne',
        ],
        correctIndex: 0,
        explanation:
          'Le budget glissant s’actualise chaque mois avec les données réelles, offrant une prévision toujours à jour plutôt qu’une prévision figée.',
      },
      {
        id: 'q2',
        question: 'Quel biais comportemental pousse à sous-estimer systématiquement ses dépenses futures malgré un suivi régulier ?',
        options: [
          'Le biais d’optimisme ou de planification (planning fallacy)',
          'Le biais de confirmation uniquement',
          'L’effet de levier financier',
          'Le taux d’inflation',
        ],
        correctIndex: 0,
        explanation:
          'Le biais de planification pousse à sous-estimer systématiquement le temps et l’argent nécessaires, même avec de l’expérience passée contraire.',
      },
      {
        id: 'q3',
        question: 'Comment interpréter un ratio "dépenses variables / revenu" qui augmente d’année en année malgré un suivi rigoureux ?',
        options: [
          'Le suivi seul ne suffit pas ; des ajustements structurels de comportement sont nécessaires',
          'Le suivi est inutile dans ce cas et doit être arrêté',
          'C’est nécessairement une erreur de calcul',
          'Il faut changer de banque',
        ],
        correctIndex: 0,
        explanation:
          'Suivre son budget renseigne mais ne change pas automatiquement les comportements ; une dérive persistante appelle des décisions actives.',
      },
      {
        id: 'q4',
        question: 'Pourquoi un suivi budgétaire trop complexe (30 catégories détaillées) peut-il devenir contre-productif ?',
        options: [
          'La charge de saisie et d’analyse peut décourager la régularité du suivi',
          'Plus de catégories signifie toujours plus de précision utile',
          'Cela n’a aucun inconvénient',
          'Cela réduit automatiquement les dépenses',
        ],
        correctIndex: 0,
        explanation:
          'Un système trop lourd à maintenir risque d’être abandonné ; la régularité prime souvent sur l’exhaustivité du détail.',
      },
      {
        id: 'q5',
        question: 'Quel indicateur, en plus du solde mensuel, est pertinent pour juger de la santé budgétaire à long terme ?',
        options: [
          'Le taux d’épargne (part du revenu épargnée) sur plusieurs mois',
          'Le solde du compte au 1er du mois uniquement',
          'Le nombre de cartes bancaires possédées',
          'Le montant total des dépenses de loisirs uniquement',
        ],
        correctIndex: 0,
        explanation:
          'Le taux d’épargne sur la durée est un meilleur indicateur de trajectoire financière qu’un solde ponctuel à un instant donné.',
      },
      {
        id: 'q6',
        question: 'En quoi un suivi budgétaire rétrospectif diffère-t-il d’un suivi prédictif utile à la prise de décision ?',
        options: [
          'Le suivi prédictif permet d’ajuster ses décisions avant de dépenser, pas seulement de constater après',
          'Il n’y a aucune différence entre les deux approches',
          'Le suivi rétrospectif est toujours suffisant',
          'Le suivi prédictif est interdit aux particuliers',
        ],
        correctIndex: 0,
        explanation:
          'Un suivi purement rétrospectif ne fait que constater ; un suivi prédictif permet d’ajuster ses choix de dépense en amont.',
      },
    ],
  },
  'livrets-reglementes-niv2': {
    id: 'livrets-reglementes-niv2',
    moduleId: 'budget-epargne',
    title: "Les livrets d'épargne réglementés — Niveau 2",
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
  'livrets-reglementes-niv3': {
    id: 'livrets-reglementes-niv3',
    moduleId: 'budget-epargne',
    title: "Les livrets d'épargne réglementés — Niveau 3",
    emoji: '📗',
    xp: 45,
    intro:
      'Niveau expert : rendement réel face à l’inflation, optimisation à l’échelle d’un foyer, et ' +
      'arbitrage avec des placements plus risqués.',
    questions: [
      {
        id: 'q1',
        question: 'En période où l’inflation dépasse le taux du Livret A, quel est l’impact réel sur le pouvoir d’achat de l’épargne logée ?',
        options: [
          'L’épargne perd du pouvoir d’achat en termes réels malgré des intérêts nominaux positifs',
          'Aucun impact, l’épargne est toujours protégée',
          'L’épargne double automatiquement',
          'Le taux s’ajuste instantanément à l’inflation',
        ],
        correctIndex: 0,
        explanation:
          'Si le taux nominal est inférieur à l’inflation, le rendement réel est négatif : l’épargne perd en pouvoir d’achat malgré une hausse nominale.',
      },
      {
        id: 'q2',
        question:
          'Une fois les plafonds des livrets réglementés atteints, quelle option reste disponible pour continuer à épargner en sécurité ?',
        options: [
          'Un livret bancaire non réglementé ou un fonds euros, moins avantageux fiscalement mais sans plafond',
          'Il est impossible d’épargner davantage en toute sécurité',
          'Un investissement en actions uniquement',
          'Un crédit à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'Au-delà des plafonds réglementés, des livrets bancaires classiques ou fonds euros permettent de continuer à épargner en sécurité.',
      },
      {
        id: 'q3',
        question: 'Pourquoi la fixation du taux du Livret A par l’État peut-elle créer un décalage temporaire avec les taux de marché ?',
        options: [
          'La formule de révision n’est pas instantanée et lisse les variations pour limiter la volatilité',
          'Le taux est toujours identique aux taux de marché',
          'Il n’existe aucune formule, le taux est arbitraire',
          'Le taux suit en temps réel la bourse',
        ],
        correctIndex: 0,
        explanation:
          'La formule de calcul du Livret A intègre des mécanismes de lissage qui peuvent temporairement décaler le taux réglementé du marché.',
      },
      {
        id: 'q4',
        question: 'Un couple marié avec des enfants peut-il optimiser sa capacité totale d’épargne réglementée sécurisée ?',
        options: [
          'Oui, en ouvrant un Livret A et un LDDS pour chaque adulte, et un Livret A pour chaque enfant',
          'Non, un seul livret est autorisé pour tout le foyer',
          'Non, les enfants ne peuvent pas avoir de livret',
          'Cela ne change rien au total',
        ],
        correctIndex: 0,
        explanation:
          'Chaque membre du foyer peut détenir son propre Livret A, et chaque adulte peut ajouter un LDDS, démultipliant la capacité totale du foyer.',
      },
      {
        id: 'q5',
        question: 'Le LEP est-il compatible avec une détention simultanée d’un Livret A et d’un LDDS ?',
        options: [
          'Oui, ces trois livrets réglementés sont cumulables pour les personnes éligibles',
          'Non, le LEP remplace obligatoirement les deux autres',
          'Non, un seul livret réglementé est autorisé par personne',
          'Le LEP est réservé aux entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Une personne éligible au LEP peut cumuler ce livret avec un Livret A et un LDDS, en respectant les plafonds propres à chacun.',
      },
      {
        id: 'q6',
        question:
          'Quel arbitrage envisager entre maximiser les plafonds réglementés et investir en bourse, pour un profil à horizon long avec épargne de précaution déjà constituée ?',
        options: [
          'Au-delà de l’épargne de précaution, privilégier des investissements diversifiés à horizon long peut offrir un meilleur rendement',
          'Toujours privilégier les livrets réglementés indéfiniment quel que soit l’horizon',
          'Ne jamais investir en bourse',
          'Retirer toute son épargne réglementée pour tout miser en bourse',
        ],
        correctIndex: 0,
        explanation:
          'Une fois la sécurité assurée, un horizon long permet d’envisager des investissements diversifiés potentiellement plus rémunérateurs.',
      },
    ],
  },
  'objectifs-epargne-niv2': {
    id: 'objectifs-epargne-niv2',
    moduleId: 'budget-epargne',
    title: "Fixer des objectifs d'épargne — Niveau 2",
    emoji: '🎯',
    xp: 35,
    intro:
      'Passons au calcul des versements, à la gestion des imprévus qui décalent un objectif, et à la ' +
      'priorisation entre plusieurs objectifs simultanés.',
    questions: [
      {
        id: 'q1',
        question: 'Pour atteindre 3 000 € en 15 mois, quel versement mensuel constant faut-il programmer ?',
        options: ['200 €', '100 €', '300 €', '50 €'],
        correctIndex: 0,
        explanation: '3 000 € divisés par 15 mois donnent un versement mensuel de 200 €.',
      },
      {
        id: 'q2',
        question: 'Que faire si un imprévu retarde la réalisation d’un objectif d’épargne ?',
        options: [
          'Ajuster l’échéance ou le montant mensuel plutôt qu’abandonner l’objectif',
          'Abandonner définitivement l’objectif',
          'Emprunter pour compenser le retard',
          'Ignorer le décalage, cela n’a pas d’importance',
        ],
        correctIndex: 0,
        explanation:
          'Un objectif reste atteignable en recalculant simplement l’échéance ou le montant des versements restants.',
      },
      {
        id: 'q3',
        question: 'Pourquoi prioriser un objectif à court terme comme l’épargne de précaution avant un objectif de voyage ?',
        options: [
          'La sécurité financière prime sur les projets discrétionnaires',
          'Les voyages sont toujours plus importants',
          'Il n’y a aucune raison de prioriser',
          'La loi impose cet ordre',
        ],
        correctIndex: 0,
        explanation:
          'Sécuriser d’abord ses arrières (épargne de précaution) limite le risque de devoir interrompre ou annuler un projet ultérieur.',
      },
      {
        id: 'q4',
        question: 'Un objectif "épargner pour la retraite" doit-il être formulé avec un montant et une date comme les autres ?',
        options: [
          'Oui, avec un horizon très long adapté à ce projet',
          'Non, la retraite ne se planifie pas de cette façon',
          'Non, c’est un objectif automatique',
          'Cela n’a aucun sens pour la retraite',
        ],
        correctIndex: 0,
        explanation:
          'Même sur un horizon de plusieurs décennies, formuler un montant cible et une échéance rend l’objectif retraite concret et actionnable.',
      },
      {
        id: 'q5',
        question: 'Que signifie un objectif d’épargne "SMART" ?',
        options: [
          'Spécifique, Mesurable, Atteignable, Réaliste, Temporel',
          'Simple, Massif, Automatique, Rapide, Total',
          'Un acronyme sans rapport avec l’épargne',
          'Un label bancaire réglementé',
        ],
        correctIndex: 0,
        explanation:
          'Un objectif SMART est Spécifique, Mesurable, Atteignable, Réaliste et Temporel, ce qui le rend concret et suivable.',
      },
      {
        id: 'q6',
        question: 'Pourquoi visualiser sa progression (barre, jauge) aide-t-il à tenir un objectif d’épargne ?',
        options: [
          'Cela renforce la motivation par un retour visuel concret sur l’avancement',
          'Cela n’a aucun effet psychologique',
          'Cela remplace le besoin d’épargner réellement',
          'Cela sert uniquement à des fins comptables',
        ],
        correctIndex: 0,
        explanation:
          'Un indicateur visuel de progression entretient la motivation en rendant tangible l’avancement vers l’objectif.',
      },
    ],
  },
  'objectifs-epargne-niv3': {
    id: 'objectifs-epargne-niv3',
    moduleId: 'budget-epargne',
    title: "Fixer des objectifs d'épargne — Niveau 3",
    emoji: '🎯',
    xp: 45,
    intro:
      'Niveau expert : arbitrages entre objectifs concurrents, biais comportementaux, et effet des ' +
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
  'depenses-invisibles-niv2': {
    id: 'depenses-invisibles-niv2',
    moduleId: 'budget-epargne',
    title: 'Repérer les dépenses invisibles — Niveau 2',
    emoji: '🕵️',
    xp: 30,
    intro:
      'Affinons la traque : hausses de prix silencieuses, essais gratuits oubliés, et audits réguliers ' +
      'des abonnements redondants.',
    questions: [
      {
        id: 'q1',
        question: 'Comment repérer un abonnement dont le prix a augmenté silencieusement ?',
        options: [
          'Comparer le montant prélevé sur plusieurs mois consécutifs',
          'Attendre que le service prévienne spontanément',
          'C’est impossible à détecter',
          'Changer immédiatement de banque',
        ],
        correctIndex: 0,
        explanation:
          'Comparer les montants prélevés dans le temps permet de repérer une hausse de prix passée inaperçue.',
      },
      {
        id: 'q2',
        question: 'Un essai gratuit non résilié à temps devient-il une dépense invisible ?',
        options: [
          'Oui, c’est un cas typique de dépense invisible qui démarre sans qu’on s’en rende compte',
          'Non, les essais gratuits ne sont jamais facturés',
          'Non, cela n’arrive jamais en pratique',
          'Uniquement pour les services physiques',
        ],
        correctIndex: 0,
        explanation:
          'L’essai gratuit non résilié se transforme en abonnement payant automatique, souvent oublié dès le premier mois.',
      },
      {
        id: 'q3',
        question: 'Pourquoi les frais bancaires mensuels de tenue de compte sont-ils souvent qualifiés d’invisibles ?',
        options: [
          'Ils sont prélevés automatiquement sans action de l’utilisateur',
          'Ils n’existent pas réellement',
          'Ils sont toujours affichés en gros sur le relevé',
          'Ils concernent uniquement les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Ces frais récurrents et automatiques passent facilement inaperçus faute d’action ou de décision explicite du client.',
      },
      {
        id: 'q4',
        question: 'Que faire face à plusieurs abonnements de streaming redondants ?',
        options: [
          'En garder un seul selon l’usage réel et résilier les autres',
          'Tous les garder par précaution',
          'En souscrire un quatrième',
          'Rien, cela n’a pas d’impact budgétaire',
        ],
        correctIndex: 0,
        explanation:
          'Garder uniquement l’abonnement réellement utilisé élimine une dépense invisible redondante sans perte d’usage réel.',
      },
      {
        id: 'q5',
        question: 'Un audit trimestriel des abonnements est-il une bonne pratique ?',
        options: [
          'Oui, cela permet de détecter régulièrement les dérives et abonnements oubliés',
          'Non, un audit unique à vie suffit',
          'Non, c’est une perte de temps totale',
          'Uniquement utile pour les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Un audit régulier (trimestriel par exemple) permet de rattraper rapidement les nouveaux abonnements oubliés ou devenus inutiles.',
      },
      {
        id: 'q6',
        question: 'Pourquoi les micro-achats répétés (in-app, petits frais) sont-ils dangereux pour le budget ?',
        options: [
          'Leur faible montant unitaire masque un total cumulé important sur l’année',
          'Ils sont toujours remboursés automatiquement',
          'Ils n’ont aucun impact réel sur le budget',
          'Ils sont interdits par la loi',
        ],
        correctIndex: 0,
        explanation:
          'Des micro-achats de quelques euros, répétés fréquemment, s’additionnent en un montant annuel souvent sous-estimé.',
      },
    ],
  },
  'depenses-invisibles-niv3': {
    id: 'depenses-invisibles-niv3',
    moduleId: 'budget-epargne',
    title: 'Repérer les dépenses invisibles — Niveau 3',
    emoji: '🕵️',
    xp: 40,
    intro:
      'Niveau expert : quantifier le coût cumulé dans le temps, comprendre les biais commerciaux ' +
      'exploités, et mesurer l’effet composé d’une résiliation.',
    questions: [
      {
        id: 'q1',
        question: 'Quel est le coût cumulé sur 5 ans d’une dépense invisible de 15 € par mois ?',
        options: ['900 €', '180 €', '1 800 €', '450 €'],
        correctIndex: 0,
        explanation: '15 € x 12 mois x 5 ans = 900 € cumulés sur la période.',
      },
      {
        id: 'q2',
        question: 'Le renouvellement automatique des abonnements est-il conçu pour favoriser l’inertie du consommateur ?',
        options: [
          'Oui, c’est un biais comportemental largement exploité commercialement',
          'Non, c’est purement accidentel',
          'Non, cela n’a aucun effet mesuré',
          'Cela ne concerne que les crédits bancaires',
        ],
        correctIndex: 0,
        explanation:
          'Le renouvellement automatique par défaut exploite l’inertie naturelle des consommateurs, qui résilient rarement de façon proactive.',
      },
      {
        id: 'q3',
        question:
          'Pourquoi la multiplication de petits abonnements peut-elle coûter plus cher qu’un seul abonnement premium groupé ?',
        options: [
          'La somme des coûts unitaires dépasse souvent une offre groupée équivalente',
          'Les petits abonnements sont toujours moins chers au total',
          'Cela n’a aucun rapport avec le prix final',
          'Les offres groupées sont toujours plus chères',
        ],
        correctIndex: 0,
        explanation:
          'Additionner plusieurs petits abonnements dépasse fréquemment le prix d’une offre groupée équivalente, moins visible à comparer.',
      },
      {
        id: 'q4',
        question: 'Quel indicateur permet de mesurer l’impact réel des dépenses invisibles sur le taux d’épargne annuel ?',
        options: [
          'Le ratio dépenses récurrentes non essentielles / revenu annuel',
          'Le nombre de cartes bancaires détenues',
          'Le solde du compte au 1er janvier uniquement',
          'Le montant total des impôts payés',
        ],
        correctIndex: 0,
        explanation:
          'Rapporter les dépenses récurrentes non essentielles au revenu annuel objective leur poids réel sur la capacité d’épargne.',
      },
      {
        id: 'q5',
        question: 'Un audit des dépenses invisibles doit-il inclure les frais de change sur des achats effectués à l’étranger ?',
        options: [
          'Oui, souvent négligés mais bien réels sur le cumul annuel',
          'Non, ces frais n’existent pas',
          'Non, ils sont toujours nuls en Europe',
          'Uniquement pour les professionnels du voyage',
        ],
        correctIndex: 0,
        explanation:
          'Les frais de change ou de transaction à l’étranger, souvent minimes à l’unité, s’accumulent significativement sur l’année.',
      },
      {
        id: 'q6',
        question:
          'Pourquoi résilier un abonnement inutilisé a-t-il un effet composé positif sur l’épargne si le montant libéré est investi ?',
        options: [
          'Les intérêts composés amplifient le gain sur la durée en plus du montant économisé chaque mois',
          'Cela n’a aucun effet à long terme',
          'L’effet est identique que l’argent soit investi ou non',
          'Cela ne fonctionne que pour de très grosses sommes',
        ],
        correctIndex: 0,
        explanation:
          'En plus de l’économie mensuelle directe, investir la somme libérée génère des intérêts composés qui amplifient le bénéfice dans le temps.',
      },
    ],
  },
  'se-payer-en-premier-niv2': {
    id: 'se-payer-en-premier-niv2',
    moduleId: 'budget-epargne',
    title: 'Se payer en premier — Niveau 2',
    emoji: '💵',
    xp: 30,
    intro:
      'Calibrons la méthode : quel pourcentage viser, comment l’articuler avec des dettes existantes, ' +
      'et comment l’ajuster dans le temps.',
    questions: [
      {
        id: 'q1',
        question: 'Quel pourcentage de revenu est souvent recommandé comme point de départ pour "se payer en premier" ?',
        options: ['10 à 20%', '1 à 2%', '50 à 60%', '90 à 100%'],
        correctIndex: 0,
        explanation:
          'Un point de départ courant se situe entre 10 et 20% du revenu, ajustable selon la situation de chacun.',
      },
      {
        id: 'q2',
        question: 'Faut-il ajuster le montant automatisé si les revenus baissent ponctuellement un mois ?',
        options: [
          'Oui, ponctuellement, pour éviter le découvert sur les dépenses courantes',
          'Non, jamais, quel que soit le contexte',
          'Non, il faut emprunter pour maintenir le virement',
          'Cela n’a aucune importance',
        ],
        correctIndex: 0,
        explanation:
          'Un ajustement ponctuel évite de mettre le compte courant en découvert quand les revenus fluctuent temporairement.',
      },
      {
        id: 'q3',
        question: 'Ce principe est-il compatible avec le remboursement prioritaire de dettes à taux élevé ?',
        options: [
          'Oui, en articulant les deux objectifs selon les taux et montants en jeu',
          'Non, il faut choisir l’un ou l’autre exclusivement',
          'Non, les deux sont incompatibles par nature',
          'Cela dépend uniquement de l’âge',
        ],
        correctIndex: 0,
        explanation:
          'Le principe peut coexister avec un remboursement prioritaire de dettes coûteuses, en équilibrant les deux selon leur urgence respective.',
      },
      {
        id: 'q4',
        question: 'Pourquoi augmenter le virement automatique à chaque hausse de salaire est-il souvent recommandé ?',
        options: [
          'Cela évite l’inflation du niveau de vie qui absorberait toute la hausse de revenu',
          'Cela n’a aucun intérêt particulier',
          'Cela augmente automatiquement les impôts',
          'Cela réduit le pouvoir d’achat immédiatement',
        ],
        correctIndex: 0,
        explanation:
          'Sans ajustement, une hausse de salaire est souvent absorbée par une hausse des dépenses ; augmenter l’épargne automatique préserve le gain.',
      },
      {
        id: 'q5',
        question: 'Le principe "se payer en premier" s’applique-t-il uniquement à l’épargne, ou aussi aux investissements automatisés ?',
        options: [
          'Aux deux, via des virements programmés vers l’épargne ou l’investissement',
          'Uniquement à l’épargne sur livret',
          'Uniquement à l’investissement en bourse',
          'Il ne s’applique à aucun des deux',
        ],
        correctIndex: 0,
        explanation:
          'Le principe s’applique aussi bien à un virement vers un livret qu’à un versement programmé vers un plan d’investissement.',
      },
      {
        id: 'q6',
        question: 'Quelle est la limite de ce principe si le montant automatisé est mal calibré dès le départ ?',
        options: [
          'Un montant trop élevé peut provoquer des découverts sur les dépenses courantes',
          'Il n’existe aucune limite possible',
          'Un montant trop élevé augmente toujours le rendement',
          'Cela ne concerne que les hauts revenus',
        ],
        correctIndex: 0,
        explanation:
          'Un virement automatique surdimensionné par rapport au budget réel peut créer des tensions de trésorerie sur les dépenses courantes.',
      },
    ],
  },
  'se-payer-en-premier-niv3': {
    id: 'se-payer-en-premier-niv3',
    moduleId: 'budget-epargne',
    title: 'Se payer en premier — Niveau 3',
    emoji: '💵',
    xp: 40,
    intro:
      'Niveau expert : biais comportementaux exploités par l’automatisation, articulation avec ' +
      'l’investissement programmé, et limites d’un dispositif figé.',
    questions: [
      {
        id: 'q1',
        question: 'Comment ce principe s’articule-t-il avec le biais du statu quo en économie comportementale ?',
        options: [
          'Il exploite ce biais positivement en rendant l’épargne la valeur par défaut plutôt qu’une décision active',
          'Il combat activement ce biais sans jamais l’utiliser',
          'Il n’a aucun lien avec ce biais',
          'Il aggrave systématiquement ce biais négatif',
        ],
        correctIndex: 0,
        explanation:
          'En rendant l’épargne automatique, le biais du statu quo (tendance à ne rien changer) joue en faveur de l’épargnant plutôt que contre lui.',
      },
      {
        id: 'q2',
        question: 'Pourquoi l’automatisation réduit-elle la charge de "fatigue décisionnelle" liée à l’épargne ?',
        options: [
          'Elle supprime la nécessité de décider consciemment chaque mois d’épargner ou non',
          'Elle augmente le nombre de décisions à prendre chaque mois',
          'Elle n’a aucun effet sur la charge mentale',
          'Elle concerne uniquement les décisions professionnelles',
        ],
        correctIndex: 0,
        explanation:
          'Automatiser une décision financière récurrente retire une décision du quotidien, réduisant la fatigue décisionnelle cumulée.',
      },
      {
        id: 'q3',
        question:
          'Un virement automatique programmé juste après la paie plutôt qu’en fin de mois change-t-il le taux d’épargne effectif à long terme ?',
        options: [
          'Oui, cela réduit la tentation de dépenser l’argent avant de l’épargner',
          'Non, le moment du virement n’a strictement aucun effet',
          'Non, seul le montant compte, jamais le moment',
          'Cela dépend uniquement du jour de la semaine',
        ],
        correctIndex: 0,
        explanation:
          'Épargner dès la réception du revenu élimine la fenêtre de tentation de dépense qui existerait en fin de mois.',
      },
      {
        id: 'q4',
        question: 'Comment ce principe se combine-t-il avec une stratégie d’investissement programmé (DCA) ?',
        options: [
          'Le virement automatique peut alimenter directement un plan d’investissement régulier',
          'Les deux approches sont incompatibles par construction',
          'Le DCA remplace obligatoirement ce principe',
          'Cela n’a aucun lien entre les deux concepts',
        ],
        correctIndex: 0,
        explanation:
          'Le virement automatique programmé est le mécanisme même qui permet d’alimenter un investissement récurrent de type DCA.',
      },
      {
        id: 'q5',
        question: 'Quel risque comporte une automatisation rigide non réévaluée après plusieurs années ?',
        options: [
          'Elle peut devenir sous-dimensionnée par rapport à l’évolution des revenus et objectifs',
          'Elle devient automatiquement plus efficace avec le temps sans ajustement',
          'Elle n’a aucun risque, une fois programmée elle reste toujours optimale',
          'Elle génère systématiquement des frais bancaires supplémentaires',
        ],
        correctIndex: 0,
        explanation:
          'Sans révision périodique, un montant automatisé fixé il y a plusieurs années peut devenir insuffisant par rapport aux nouveaux revenus ou objectifs.',
      },
      {
        id: 'q6',
        question: 'Pourquoi ce principe est-il considéré plus efficace comportementalement qu’une simple résolution de volonté ?',
        options: [
          'Il retire l’épargne du champ de la décision consciente répétée, la rendant automatique',
          'Il repose entièrement sur la motivation quotidienne de l’épargnant',
          'Il nécessite une discipline supérieure à une simple résolution',
          'Il n’a aucune différence avec une résolution de volonté',
        ],
        correctIndex: 0,
        explanation:
          'Contrairement à une résolution qui dépend de la volonté répétée, l’automatisation rend l’épargne effective indépendamment de la motivation du moment.',
      },
    ],
  },
  'invest-bases-niv2': {
    id: 'invest-bases-niv2',
    moduleId: 'investissement',
    title: "Les bases de l'investissement — Niveau 2",
    emoji: '📊',
    xp: 30,
    intro:
      'Approfondissons : volatilité, corrélation entre actifs, et impact des frais sur la performance ' +
      'à long terme.',
    questions: [
      {
        id: 'q1',
        question: 'Que mesure la volatilité d’un actif financier ?',
        options: [
          'L’amplitude des variations de son prix dans le temps',
          'Le montant total investi par tous les épargnants',
          'Le taux d’imposition applicable',
          'Le nombre d’actionnaires de l’entreprise',
        ],
        correctIndex: 0,
        explanation:
          'La volatilité traduit l’ampleur des fluctuations de prix : plus elle est élevée, plus le cours peut varier fortement à la hausse comme à la baisse.',
      },
      {
        id: 'q2',
        question: 'Pourquoi combiner des actifs peu corrélés entre eux réduit-il le risque global d’un portefeuille ?',
        options: [
          'Leurs mouvements de prix ne se produisent pas simultanément dans le même sens',
          'Cela garantit un rendement positif à coup sûr',
          'Cela supprime totalement tout risque de perte',
          'Cela n’a aucun effet sur le risque global',
        ],
        correctIndex: 0,
        explanation:
          'Des actifs peu corrélés ne baissent pas nécessairement en même temps, ce qui lisse les variations globales du portefeuille.',
      },
      {
        id: 'q3',
        question: 'Sur 20 ans, quel est l’effet cumulé de frais de gestion annuels de 2% par rapport à 0,5% ?',
        options: [
          'Un écart de performance très significatif en raison de la capitalisation composée',
          'Un écart négligeable, quasiment nul',
          'Aucun effet, les frais ne s’accumulent jamais',
          'Un effet uniquement la première année',
        ],
        correctIndex: 0,
        explanation:
          'Des frais plus élevés amputent chaque année le capital qui aurait pu continuer à générer des intérêts composés, avec un écart qui s’amplifie fortement sur 20 ans.',
      },
      {
        id: 'q4',
        question: 'Qu’appelle-t-on le "risque de change" pour un investisseur français achetant des actions américaines ?',
        options: [
          'Le risque lié à la fluctuation du taux de change entre l’euro et le dollar',
          'Le risque que l’entreprise change de nom',
          'Le risque de payer plus d’impôts',
          'Le risque que la bourse ferme définitivement',
        ],
        correctIndex: 0,
        explanation:
          'La valeur en euros d’un actif coté en dollars varie aussi selon le taux de change, en plus de la performance propre de l’actif.',
      },
      {
        id: 'q5',
        question: 'Pourquoi le rééquilibrage périodique d’un portefeuille (rebalancing) est-il recommandé ?',
        options: [
          'Pour revenir à la répartition cible entre classes d’actifs après des variations de marché',
          'Pour vendre systématiquement tous ses actifs chaque année',
          'Cela n’a aucune utilité pratique',
          'Pour payer plus de frais de courtage volontairement',
        ],
        correctIndex: 0,
        explanation:
          'Sans rééquilibrage, la performance différente des actifs dérive la répartition initiale, modifiant le profil de risque du portefeuille.',
      },
      {
        id: 'q6',
        question: 'Un investisseur qui vend paniqué après une forte baisse de marché, puis rachète après une remontée, subit quel effet ?',
        options: [
          'Il matérialise sa perte et rate souvent le rebond, dégradant sa performance réelle',
          'Il optimise systématiquement son rendement',
          'Cela n’a aucun impact sur sa performance',
          'Il paie automatiquement moins d’impôts',
        ],
        correctIndex: 0,
        explanation:
          'Vendre dans la panique puis racheter plus cher après le rebond est une des principales causes de sous-performance des investisseurs particuliers.',
      },
    ],
  },
  'invest-bases-niv3': {
    id: 'invest-bases-niv3',
    moduleId: 'investissement',
    title: "Les bases de l'investissement — Niveau 3",
    emoji: '📊',
    xp: 40,
    intro:
      'Niveau expert : allocation d’actifs selon le profil de risque, biais comportementaux des ' +
      'investisseurs, et lecture critique de la performance passée.',
    questions: [
      {
        id: 'q1',
        question: 'Pourquoi la performance passée d’un placement ne garantit-elle jamais la performance future ?',
        options: [
          'Les conditions de marché évoluent et rien n’assure la répétition des résultats passés',
          'Elle garantit au contraire toujours la performance future',
          'Cela ne concerne que les livrets réglementés',
          'La performance passée est toujours strictement identique à la future',
        ],
        correctIndex: 0,
        explanation:
          'C’est un principe fondamental de la finance : les performances historiques n’engagent en rien les performances à venir.',
      },
      {
        id: 'q2',
        question: 'Qu’est-ce que l’allocation d’actifs (asset allocation) dans la construction d’un portefeuille ?',
        options: [
          'La répartition du capital entre grandes classes d’actifs (actions, obligations, immobilier...)',
          'Le choix d’une seule action à acheter',
          'Le nom donné à un compte-titres',
          'Un type de crédit bancaire',
        ],
        correctIndex: 0,
        explanation:
          'L’allocation d’actifs détermine la part du capital investie dans chaque grande classe (actions, obligations, immobilier), déterminant largement le profil de risque global.',
      },
      {
        id: 'q3',
        question: 'Quel biais pousse un investisseur à ne conserver que les actions de son propre pays, au détriment de la diversification internationale ?',
        options: [
          'Le biais domestique (home bias)',
          'Le biais de confirmation uniquement',
          'L’aversion à la perte',
          'L’effet de levier',
        ],
        correctIndex: 0,
        explanation:
          'Le "home bias" pousse à surpondérer les actifs domestiques par familiarité, au détriment d’une diversification internationale pourtant bénéfique.',
      },
      {
        id: 'q4',
        question: 'Pourquoi un profil d’investisseur proche de la retraite réduit-il généralement la part d’actions au profit d’actifs plus stables ?',
        options: [
          'Un horizon de placement plus court laisse moins de temps pour absorber une baisse de marché',
          'Les actions deviennent interdites après 60 ans',
          'Cela n’a aucun rapport avec l’horizon de placement',
          'Il faut au contraire augmenter le risque avec l’âge',
        ],
        correctIndex: 0,
        explanation:
          'Plus l’horizon se raccourcit, moins il y a de temps pour encaisser une baisse temporaire, ce qui justifie de réduire progressivement le risque.',
      },
      {
        id: 'q5',
        question: 'Qu’est-ce que le "risque de séquence des rendements" à l’approche de la retraite ?',
        options: [
          'Le risque qu’une baisse de marché survienne juste avant ou au début des retraits, amplifiant la perte',
          'Le risque que les rendements soient toujours positifs',
          'Un risque qui ne concerne que les jeunes investisseurs',
          'Le risque lié uniquement à l’inflation',
        ],
        correctIndex: 0,
        explanation:
          'Une baisse de marché survenant juste avant le début des retraits réduit durablement le capital disponible, un risque spécifique à la période de décaissement.',
      },
      {
        id: 'q6',
        question: 'Pourquoi comparer un placement à son indice de référence (benchmark) est-il essentiel pour juger sa performance ?',
        options: [
          'Cela permet de savoir si la performance est due à une réelle valeur ajoutée ou simplement au marché global',
          'Cela n’apporte aucune information utile',
          'Le benchmark sert uniquement à fixer les impôts',
          'Un placement est toujours meilleur que son indice de référence',
        ],
        correctIndex: 0,
        explanation:
          'Sans comparaison à un indice de référence pertinent, il est impossible de savoir si un gestionnaire ou un placement a réellement surperformé le marché.',
      },
    ],
  },
  'pea-niv2': {
    id: 'pea-niv2',
    moduleId: 'investissement',
    title: "Le PEA (Plan d'Épargne en Actions) — Niveau 2",
    emoji: '📜',
    xp: 35,
    intro:
      'Approfondissons le fonctionnement du PEA : retraits partiels, PEA-PME, et traitement fiscal des ' +
      'moins-values.',
    questions: [
      {
        id: 'q1',
        question: 'Depuis la loi PACTE, un retrait partiel avant 5 ans entraîne-t-il toujours la clôture du PEA ?',
        options: [
          'Non, après 5 ans un retrait partiel n’entraîne plus la clôture du plan',
          'Oui, systématiquement quel que soit le moment',
          'Non, jamais, même dans les premières années',
          'Cela dépend uniquement du montant retiré',
        ],
        correctIndex: 0,
        explanation:
          'Après 5 ans de détention, un retrait partiel est possible sans clôturer le PEA, contrairement à un retrait avant cette échéance.',
      },
      {
        id: 'q2',
        question: 'Qu’est-ce que le PEA-PME ?',
        options: [
          'Une variante du PEA dédiée aux titres de petites et moyennes entreprises européennes',
          'Un compte réservé aux salariés d’une PME',
          'Un crédit professionnel pour les PME',
          'Un livret d’épargne pour les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Le PEA-PME cible spécifiquement les actions de PME et ETI européennes, avec un plafond de versement distinct du PEA classique.',
      },
      {
        id: 'q3',
        question: 'Une moins-value réalisée sur un PEA avant sa clôture peut-elle être imputée sur d’autres gains ?',
        options: [
          'En principe non tant que le plan n’est pas clôturé, sauf cas particuliers prévus par la loi',
          'Oui, systématiquement et immédiatement sur tout type de revenu',
          'Oui, mais uniquement sur les salaires',
          'Cela n’existe pas pour les PEA',
        ],
        correctIndex: 0,
        explanation:
          'Le traitement fiscal des moins-values sur PEA est spécifique et encadré ; il diffère du compte-titres ordinaire où l’imputation est plus simple.',
      },
      {
        id: 'q4',
        question: 'Peut-on transformer les versements d’un PEA en rente viagère à la sortie ?',
        options: [
          'Oui, c’est une option possible en plus du retrait en capital',
          'Non, seul le retrait en capital est autorisé',
          'Non, le PEA ne permet aucune sortie',
          'Oui, mais uniquement sous forme de crédit',
        ],
        correctIndex: 0,
        explanation:
          'Le PEA offre le choix entre un retrait en capital ou une conversion en rente viagère, cette dernière bénéficiant d’une exonération d’impôt sur le revenu.',
      },
      {
        id: 'q5',
        question: 'Un jeune actif peut-il ouvrir un PEA Jeune avant sa majorité fiscale complète ?',
        options: [
          'Oui, un PEA "Jeune" existe pour les 18-25 ans rattachés au foyer fiscal de leurs parents',
          'Non, le PEA est réservé aux plus de 30 ans',
          'Non, aucune variante n’existe pour les jeunes',
          'Oui, dès la naissance',
        ],
        correctIndex: 0,
        explanation:
          'Le PEA Jeune, avec un plafond réduit, permet aux 18-25 ans encore rattachés au foyer fiscal parental de commencer à investir dans ce cadre.',
      },
      {
        id: 'q6',
        question: 'Que devient l’avantage fiscal du PEA en cas de clôture avant 2 ans de détention ?',
        options: [
          'La fiscalité est moins favorable qu’après 5 ans, se rapprochant de celle d’un compte-titres ordinaire',
          'L’avantage fiscal est identique quelle que soit la durée de détention',
          'Aucune taxation n’est jamais due avant 5 ans',
          'Le PEA ne peut jamais être clôturé avant 5 ans',
        ],
        correctIndex: 0,
        explanation:
          'Plus la clôture intervient tôt, moins l’avantage fiscal du PEA est favorable, avec un régime qui se rapproche de celui d’un compte-titres ordinaire.',
      },
    ],
  },
  'pea-niv3': {
    id: 'pea-niv3',
    moduleId: 'investissement',
    title: "Le PEA (Plan d'Épargne en Actions) — Niveau 3",
    emoji: '📜',
    xp: 45,
    intro:
      'Niveau expert : arbitrages PEA vs assurance-vie, gestion des titres non éligibles, et stratégies ' +
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
  'etf-niv2': {
    id: 'etf-niv2',
    moduleId: 'investissement',
    title: 'Les ETF, trackers indiciels — Niveau 2',
    emoji: '🧺',
    xp: 30,
    intro:
      'Approfondissons les ETF : réplication physique vs synthétique, tracking error, et liquidité des ' +
      'parts sur les marchés.',
    questions: [
      {
        id: 'q1',
        question: 'Quelle est la différence entre un ETF à réplication physique et un ETF à réplication synthétique ?',
        options: [
          'Le premier détient réellement les titres de l’indice, le second utilise des instruments dérivés (swaps)',
          'Il n’existe aucune différence entre les deux',
          'Le synthétique détient toujours plus de titres que le physique',
          'Le physique est toujours interdit en Europe',
        ],
        correctIndex: 0,
        explanation:
          'La réplication physique achète réellement les actifs de l’indice, tandis que la réplication synthétique passe par des contrats d’échange (swaps) avec une contrepartie.',
      },
      {
        id: 'q2',
        question: 'Qu’est-ce que le "tracking error" d’un ETF ?',
        options: [
          'L’écart de performance entre l’ETF et l’indice qu’il est censé répliquer',
          'Le montant des frais de courtage à l’achat',
          'Le nombre d’erreurs de saisie dans un ordre de bourse',
          'Le taux de change appliqué à l’ETF',
        ],
        correctIndex: 0,
        explanation:
          'Le tracking error mesure la fidélité de réplication : plus il est faible, plus l’ETF suit fidèlement la performance de son indice de référence.',
      },
      {
        id: 'q3',
        question: 'La liquidité d’un ETF dépend-elle uniquement du volume d’échange de ses propres parts en bourse ?',
        options: [
          'Non, elle dépend aussi de la liquidité des actifs sous-jacents qui composent l’indice',
          'Oui, exclusivement du volume d’échange des parts ETF',
          'Non, la liquidité d’un ETF est toujours illimitée',
          'La liquidité ne concerne que les actions individuelles'
        ],
        correctIndex: 0,
        explanation:
          'Même un ETF peu échangé en apparence peut rester liquide si les actifs sous-jacents de l’indice le sont, via le mécanisme de création/rachat de parts.',
      },
      {
        id: 'q4',
        question: 'Un ETF capitalisant et un ETF distribuant se différencient sur quel point ?',
        options: [
          'Le capitalisant réinvestit automatiquement les dividendes, le distribuant les verse à l’investisseur',
          'Le distribuant est toujours réservé aux professionnels',
          'Le capitalisant ne contient jamais d’actions',
          'Il n’existe aucune différence réelle entre les deux',
        ],
        correctIndex: 0,
        explanation:
          'Un ETF capitalisant réinvestit les dividendes perçus dans le fonds, tandis qu’un ETF distribuant les verse périodiquement sur le compte de l’investisseur.',
      },
      {
        id: 'q5',
        question: 'Pourquoi un ETF sectoriel très concentré (ex : un seul secteur industriel) est-il plus risqué qu’un ETF large marché ?',
        options: [
          'Il est moins diversifié et donc plus sensible aux aléas propres à ce secteur',
          'Il est toujours moins cher qu’un ETF large marché',
          'Il garantit un rendement supérieur systématiquement',
          'Cela n’a aucun impact sur le niveau de risque',
        ],
        correctIndex: 0,
        explanation:
          'Un ETF concentré sur un secteur perd le bénéfice de la diversification large, amplifiant l’impact des difficultés spécifiques à ce secteur.',
      },
      {
        id: 'q6',
        question: 'Le TER (Total Expense Ratio) d’un ETF inclut-il l’ensemble des frais de fonctionnement annuels du fonds ?',
        options: [
          'Oui, il synthétise les frais de gestion et frais annexes récurrents du fonds',
          'Non, il ne concerne que les frais de courtage à l’achat',
          'Non, le TER n’existe pas pour les ETF',
          'Il concerne uniquement les impôts sur les plus-values',
        ],
        correctIndex: 0,
        explanation:
          'Le TER regroupe l’ensemble des coûts récurrents de gestion du fonds sur une année, exprimés en pourcentage de l’actif, hors frais de courtage à l’achat/vente.',
      },
    ],
  },
  'etf-niv3': {
    id: 'etf-niv3',
    moduleId: 'investissement',
    title: 'Les ETF, trackers indiciels — Niveau 3',
    emoji: '🧺',
    xp: 40,
    intro:
      'Niveau expert : risques spécifiques des ETF à effet de levier, risque de contrepartie, et ' +
      'construction d’un portefeuille d’ETF diversifié.',
    questions: [
      {
        id: 'q1',
        question: 'Pourquoi un ETF à effet de levier (x2, x3) n’est-il pas adapté à une détention de long terme ?',
        options: [
          'Le levier est recalculé quotidiennement, ce qui provoque une érosion de performance en cas de marché volatil sans tendance claire',
          'Il est interdit d’en détenir plus d’un an',
          'Il rapporte toujours plus qu’un ETF classique sur le long terme',
          'Il n’existe aucune différence avec un ETF classique',
        ],
        correctIndex: 0,
        explanation:
          'Le rebalancement quotidien du levier crée un effet de "beta slippage" qui érode la performance sur la durée en marché volatil sans tendance nette.',
      },
      {
        id: 'q2',
        question: 'Qu’est-ce que le "risque de contrepartie" propre aux ETF à réplication synthétique ?',
        options: [
          'Le risque que la banque contrepartie du swap ne puisse pas honorer ses engagements',
          'Le risque que l’indice de référence disparaisse',
          'Le risque de change entre deux devises',
          'Le risque que l’ETF soit coté sur plusieurs bourses',
        ],
        correctIndex: 0,
        explanation:
          'La réplication synthétique dépend d’un contrat avec une contrepartie bancaire, dont la défaillance éventuelle constitue un risque spécifique, encadré mais non nul.',
      },
      {
        id: 'q3',
        question: 'Pourquoi superposer plusieurs ETF larges (ex : un ETF Monde et un ETF S&P 500) peut-il créer une redondance involontaire ?',
        options: [
          'Les grandes capitalisations américaines sont déjà largement représentées dans un ETF Monde',
          'Cela n’a jamais aucun recoupement entre les deux',
          'Un ETF Monde exclut systématiquement les actions américaines',
          'Cela double toujours la diversification sans inconvénient',
        ],
        correctIndex: 0,
        explanation:
          'Un ETF Monde inclut déjà une forte pondération d’actions américaines ; y ajouter un ETF S&P 500 surexpose le portefeuille à ce même marché sans réelle diversification supplémentaire.',
      },
      {
        id: 'q4',
        question: 'Comment le mécanisme de création/rachat de parts (creation/redemption) contribue-t-il à maintenir le prix d’un ETF proche de sa valeur liquidative ?',
        options: [
          'Des intervenants agréés arbitrent les écarts en créant ou rachetant des parts contre les actifs sous-jacents',
          'Ce mécanisme n’a aucun rapport avec le prix de l’ETF',
          'Le prix de l’ETF est fixé arbitrairement chaque matin',
          'Seul l’émetteur peut modifier le prix de l’ETF',
        ],
        correctIndex: 0,
        explanation:
          'Des participants agréés arbitrent tout écart entre le prix de marché et la valeur liquidative en créant ou rachetant des parts, ce qui maintient les deux valeurs alignées.',
      },
      {
        id: 'q5',
        question: 'Un portefeuille composé à 100% d’ETF actions est-il exempt de tout risque de marché ?',
        options: [
          'Non, la diversification via ETF réduit le risque spécifique mais pas le risque de marché global',
          'Oui, les ETF suppriment tout risque par construction',
          'Oui, car les ETF garantissent le capital investi',
          'Le risque de marché ne concerne que les actions individuelles',
        ],
        correctIndex: 0,
        explanation:
          'Les ETF diversifient le risque spécifique à une entreprise, mais restent exposés au risque de marché global (baisse généralisée des indices).',
      },
      {
        id: 'q6',
        question: 'Pourquoi vérifier la domiciliation juridique d’un ETF (ex : Irlande vs Luxembourg) peut-il avoir un impact fiscal pour un investisseur français ?',
        options: [
          'Le traitement fiscal des dividendes sous-jacents et l’éligibilité au PEA peuvent varier selon la domiciliation',
          'La domiciliation n’a jamais aucun impact fiscal',
          'Seuls les ETF domiciliés en France existent légalement',
          'Cela ne concerne que les ETF obligataires',
        ],
        correctIndex: 0,
        explanation:
          'La domiciliation d’un ETF influe sur le traitement des retenues à la source sur dividendes et sur son éligibilité à certaines enveloppes comme le PEA.',
      },
    ],
  },
  'taux-interet-niv2': {
    id: 'taux-interet-niv2',
    moduleId: 'credit-emprunt',
    title: "Comprendre le taux d'intérêt — Niveau 2",
    emoji: '💳',
    xp: 30,
    intro:
      'Approfondissons : calcul d’intérêts simples vs composés, impact de la durée sur le coût total, ' +
      'et négociation du taux.',
    questions: [
      {
        id: 'q1',
        question: 'Sur un prêt, allonger la durée de remboursement réduit la mensualité mais a quel effet sur le coût total du crédit ?',
        options: [
          'Le coût total des intérêts augmente, car ils courent sur une période plus longue',
          'Le coût total diminue toujours',
          'Le coût total reste strictement identique',
          'Cela n’a aucun effet sur le coût total',
        ],
        correctIndex: 0,
        explanation:
          'Une durée plus longue réduit la mensualité mais augmente mécaniquement le montant total d’intérêts payés sur la durée du prêt.',
      },
      {
        id: 'q2',
        question: 'Le taux d’intérêt d’un prêt immobilier est-il négociable auprès de la banque ?',
        options: [
          'Oui, il peut être négocié, notamment via la mise en concurrence de plusieurs établissements',
          'Non, il est fixé uniformément par la loi pour tous',
          'Non, jamais, quel que soit le profil emprunteur',
          'Uniquement pour les crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'Le taux proposé dépend du profil de l’emprunteur et peut être négocié, notamment en mettant plusieurs banques en concurrence.',
      },
      {
        id: 'q3',
        question: 'Dans un tableau d’amortissement, la part des intérêts dans la mensualité est-elle constante sur toute la durée du prêt ?',
        options: [
          'Non, elle diminue progressivement au profit du capital remboursé',
          'Oui, elle reste strictement identique chaque mois',
          'Non, elle augmente progressivement jusqu’à la fin du prêt',
          'Cela dépend uniquement du taux variable',
        ],
        correctIndex: 0,
        explanation:
          'En début de prêt, les intérêts représentent une part plus importante de la mensualité, qui diminue progressivement au profit du capital remboursé.',
      },
      {
        id: 'q4',
        question: 'Un taux "capé" sur un prêt à taux variable signifie quoi concrètement ?',
        options: [
          'Le taux ne peut varier qu’à l’intérieur d’une limite maximale définie au contrat',
          'Le taux est fixe et ne peut jamais varier',
          'Le taux double automatiquement chaque année',
          'Le taux est indexé uniquement sur l’inflation',
        ],
        correctIndex: 0,
        explanation:
          'Un taux capé limite l’ampleur des variations possibles (à la hausse comme parfois à la baisse), offrant une protection partielle contre l’envolée des taux.',
      },
      {
        id: 'q5',
        question: 'Pourquoi les intérêts intercalaires existent-ils lors d’un prêt immobilier avec déblocage progressif des fonds (construction) ?',
        options: [
          'Ils rémunèrent la banque sur les sommes déjà débloquées avant le début du remboursement du capital',
          'Ils remplacent totalement l’assurance emprunteur',
          'Ils sont interdits en France',
          'Ils ne concernent que les crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'Pendant la phase de construction, seuls les intérêts sur les sommes déjà versées sont dus, avant que le remboursement classique du capital ne commence.',
      },
      {
        id: 'q6',
        question: 'Un rachat de crédit à un taux plus bas est-il toujours financièrement avantageux, indépendamment des frais associés ?',
        options: [
          'Non, il faut comparer le gain d’intérêts aux frais de dossier et indemnités de remboursement anticipé',
          'Oui, systématiquement dans tous les cas',
          'Non, un rachat de crédit est toujours interdit',
          'Cela ne dépend que de la durée restante du prêt initial',
        ],
        correctIndex: 0,
        explanation:
          'Le bénéfice réel d’un rachat de crédit dépend du solde entre l’économie d’intérêts et les frais engagés (dossier, indemnités de remboursement anticipé).',
      },
    ],
  },
  'taux-interet-niv3': {
    id: 'taux-interet-niv3',
    moduleId: 'credit-emprunt',
    title: "Comprendre le taux d'intérêt — Niveau 3",
    emoji: '💳',
    xp: 40,
    intro:
      'Niveau expert : lien entre taux directeurs et taux de crédit, actualisation, et arbitrage ' +
      'emprunt/placement.',
    questions: [
      {
        id: 'q1',
        question: 'Comment les taux directeurs de la BCE influencent-ils indirectement les taux des crédits immobiliers proposés par les banques ?',
        options: [
          'Les banques se refinancent en partie à ces taux, qui se répercutent sur le coût du crédit proposé aux clients',
          'Il n’existe aucun lien entre les deux',
          'Les taux directeurs fixent directement et uniformément tous les taux de crédit',
          'Les taux directeurs ne concernent que les crédits aux entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Le coût de refinancement des banques, influencé par les taux directeurs, se répercute progressivement sur les taux proposés aux emprunteurs.',
      },
      {
        id: 'q2',
        question: 'Qu’est-ce que le taux d’usure et à quoi sert-il ?',
        options: [
          'Un taux maximal légal au-delà duquel un crédit ne peut pas être proposé, pour protéger l’emprunteur',
          'Le taux appliqué automatiquement après 20 ans de remboursement',
          'Un taux réservé aux crédits professionnels uniquement',
          'Le taux moyen constaté sur le marché boursier',
        ],
        correctIndex: 0,
        explanation:
          'Le taux d’usure est un plafond légal (TAEG maximal) que les établissements ne peuvent pas dépasser, afin de protéger les emprunteurs contre des taux abusifs.',
      },
      {
        id: 'q3',
        question: 'Si le rendement espéré d’un placement dépasse le taux d’un crédit immobilier en cours, quel arbitrage rationnel peut-on envisager ?',
        options: [
          'Privilégier l’investissement plutôt que le remboursement anticipé du crédit, à risque égal',
          'Toujours rembourser le crédit par anticipation quoi qu’il arrive',
          'Ne jamais investir tant qu’un crédit est en cours',
          'Cet arbitrage n’existe pas en pratique',
        ],
        correctIndex: 0,
        explanation:
          'Si le rendement net attendu d’un placement dépasse durablement le coût du crédit, il peut être rationnel de privilégier l’investissement, en tenant compte du risque pris.',
      },
      {
        id: 'q4',
        question: 'Pourquoi actualiser les flux futurs d’un crédit (valeur actuelle) permet-il de mieux comparer deux offres de durées différentes ?',
        options: [
          'Cela ramène des paiements futurs à une valeur comparable aujourd’hui, neutralisant l’effet du temps',
          'Cela n’apporte aucune information supplémentaire',
          'Cela ne s’applique qu’aux crédits professionnels',
          'Cela sert uniquement à calculer les impôts',
        ],
        correctIndex: 0,
        explanation:
          'L’actualisation permet de comparer des flux de paiement étalés différemment dans le temps sur une base commune, plus rigoureuse que la simple somme des mensualités.',
      },
      {
        id: 'q5',
        question: 'Un crédit in fine (remboursement du capital en une fois à l’échéance) présente quel profil de risque particulier ?',
        options: [
          'Un risque de ne pas disposer du capital nécessaire au remboursement final si l’épargne ou l’investissement associé sous-performe',
          'Aucun risque, le capital est remboursé progressivement comme un crédit classique',
          'Un risque uniquement lié au taux de change',
          'Un risque qui ne concerne que les entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Le crédit in fine repose sur la capacité à reconstituer le capital via une épargne ou un investissement parallèle, dont la sous-performance expose à un risque de non-remboursement à l’échéance.',
      },
      {
        id: 'q6',
        question: 'Pourquoi deux crédits au même TAEG mais de durées différentes n’ont-ils pas le même coût total en euros ?',
        options: [
          'Le TAEG est un taux annualisé ; un prêt plus long cumule les intérêts sur davantage d’années',
          'Le TAEG garantit toujours un coût total identique quelle que soit la durée',
          'Cela n’est théoriquement jamais possible',
          'Le TAEG ne s’applique qu’aux crédits à taux variable',
        ],
        correctIndex: 0,
        explanation:
          'Le TAEG exprime un taux annuel, mais le coût total en euros dépend aussi du nombre d’années sur lesquelles ce taux s’applique.',
      },
    ],
  },
  'capacite-emprunt-niv2': {
    id: 'capacite-emprunt-niv2',
    moduleId: 'credit-emprunt',
    title: "La capacité d'emprunt — Niveau 2",
    emoji: '🧮',
    xp: 30,
    intro:
      'Calculons plus précisément : effet de l’apport, prise en compte des revenus locatifs, et durée ' +
      'maximale de prêt selon l’âge.',
    questions: [
      {
        id: 'q1',
        question: 'Pour des revenus nets de 3 000 €/mois, quelle mensualité maximale respecte un taux d’endettement de 35% ?',
        options: ['1 050 €', '1 500 €', '700 €', '2 100 €'],
        correctIndex: 0,
        explanation: '35% de 3 000 € donne une mensualité maximale théorique de 1 050 €.',
      },
      {
        id: 'q2',
        question: 'Les revenus locatifs perçus sont-ils intégralement comptabilisés dans le calcul du taux d’endettement ?',
        options: [
          'Généralement pris en compte avec une décote (souvent 70%) pour couvrir vacance locative et charges',
          'Oui, à 100% systématiquement sans aucun ajustement',
          'Non, ils ne sont jamais pris en compte',
          'Uniquement s’ils dépassent 5 000 € par mois',
        ],
        correctIndex: 0,
        explanation:
          'Les banques appliquent en général une décote sur les revenus locatifs pour anticiper vacance locative, charges et impayés éventuels.',
      },
      {
        id: 'q3',
        question: 'Un apport personnel plus élevé réduit-il uniquement le montant emprunté, ou peut-il aussi influencer le taux obtenu ?',
        options: [
          'Il peut aussi influencer favorablement le taux, car il réduit le risque perçu par la banque',
          'Il n’a aucune influence sur le taux, seulement sur le montant',
          'Il augmente systématiquement le taux proposé',
          'Il ne concerne que les crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'Un apport plus important réduit le risque perçu par la banque, ce qui peut permettre de négocier un taux plus favorable en plus de réduire le capital emprunté.',
      },
      {
        id: 'q4',
        question: 'La durée maximale d’un prêt immobilier est-elle généralement limitée par l’âge de l’emprunteur à l’échéance ?',
        options: [
          'Oui, les banques fixent souvent un âge limite de fin de remboursement (par exemple 75-85 ans)',
          'Non, la durée est illimitée quel que soit l’âge',
          'Non, l’âge n’a jamais aucune influence',
          'Oui, mais uniquement pour les crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'Les banques encadrent généralement l’âge de fin de remboursement, ce qui peut limiter la durée maximale accordée aux emprunteurs plus âgés.',
      },
      {
        id: 'q5',
        question: 'Le "saut de charge" (différence entre loyer actuel et future mensualité de crédit) est-il un critère observé par les banques ?',
        options: [
          'Oui, un saut de charge trop important peut inquiéter la banque sur la capacité d’adaptation de l’emprunteur',
          'Non, ce critère n’existe pas',
          'Non, seul le taux d’endettement compte',
          'Il ne concerne que les investisseurs locatifs',
        ],
        correctIndex: 0,
        explanation:
          'Un écart trop important entre le loyer payé actuellement et la future mensualité peut être perçu comme un facteur de risque supplémentaire par la banque.',
      },
      {
        id: 'q6',
        question: 'Le "reste à vivre" minimal exigé par les banques est-il un montant fixe identique pour tous les foyers ?',
        options: [
          'Non, il est généralement ajusté selon la composition du foyer (nombre de personnes à charge)',
          'Oui, un montant unique s’applique à tous sans exception',
          'Non, il ne dépend que du taux d’intérêt du prêt',
          'Il n’existe aucun reste à vivre minimal exigé',
        ],
        correctIndex: 0,
        explanation:
          'Le reste à vivre minimal est généralement modulé selon la taille du foyer, un ménage nombreux nécessitant un reste à vivre plus élevé qu’une personne seule.',
      },
    ],
  },
  'capacite-emprunt-niv3': {
    id: 'capacite-emprunt-niv3',
    moduleId: 'credit-emprunt',
    title: "La capacité d'emprunt — Niveau 3",
    emoji: '🧮',
    xp: 40,
    intro:
      'Niveau expert : taux d’endettement différencié selon les hauts revenus, effet de l’assurance ' +
      'emprunteur, et stratégies pour optimiser sa capacité.',
    questions: [
      {
        id: 'q1',
        question: 'Le taux d’endettement maximal de 35% est-il appliqué de façon rigide pour tous les profils de revenus par le Haut Conseil de Stabilité Financière ?',
        options: [
          'Non, une flexibilité est prévue notamment pour certains profils à hauts revenus ou reste à vivre confortable',
          'Oui, sans aucune exception possible pour aucun établissement',
          'Non, cette règle ne s’applique qu’aux crédits à la consommation',
          'Le taux maximal est en réalité de 50% pour tous',
        ],
        correctIndex: 0,
        explanation:
          'Les recommandations prévoient une marge de flexibilité pour une partie des dossiers, notamment lorsque le reste à vivre reste confortable malgré un taux d’endettement légèrement supérieur.',
      },
      {
        id: 'q2',
        question: 'Comment le coût de l’assurance emprunteur influence-t-il la capacité d’emprunt réelle, au-delà du taux nominal du crédit ?',
        options: [
          'L’assurance est intégrée dans le TAEG et alourdit la mensualité totale prise en compte dans le calcul du taux d’endettement',
          'L’assurance n’a aucun impact sur la mensualité globale',
          'L’assurance réduit toujours la mensualité totale',
          'L’assurance n’est jamais obligatoire pour un crédit immobilier',
        ],
        correctIndex: 0,
        explanation:
          'Le coût de l’assurance emprunteur s’ajoute à la mensualité prise en compte dans le calcul du taux d’endettement, réduisant d’autant la capacité d’emprunt disponible pour le capital.',
      },
      {
        id: 'q3',
        question: 'Le rachat de crédits à la consommation avant une demande de prêt immobilier peut-il améliorer la capacité d’emprunt ?',
        options: [
          'Oui, en réduisant le taux d’endettement global avant la nouvelle demande',
          'Non, cela n’a jamais aucun effet',
          'Non, cela dégrade systématiquement le dossier',
          'Cela ne concerne que les crédits immobiliers existants',
        ],
        correctIndex: 0,
        explanation:
          'Regrouper ou solder des crédits à la consommation avant une demande de prêt immobilier peut réduire le taux d’endettement global et améliorer la capacité d’emprunt.',
      },
      {
        id: 'q4',
        question: 'Un co-emprunteur avec un revenu stable mais un taux d’endettement personnel déjà élevé améliore-t-il systématiquement le dossier commun ?',
        options: [
          'Pas nécessairement, car ses charges existantes s’ajoutent aussi au calcul global du foyer emprunteur',
          'Oui, systématiquement et sans aucune limite',
          'Non, un co-emprunteur ne peut jamais être pris en compte',
          'Cela ne concerne que les emprunts professionnels',
        ],
        correctIndex: 0,
        explanation:
          'Les revenus et les charges du co-emprunteur sont tous deux intégrés dans le calcul global, ce qui peut limiter l’amélioration attendue si ses charges sont déjà importantes.',
      },
      {
        id: 'q5',
        question: 'Pourquoi certains établissements bancaires acceptent-ils un taux d’endettement supérieur à 35% pour des très hauts revenus ?',
        options: [
          'Parce que le reste à vivre en valeur absolue reste très confortable malgré un taux d’endettement plus élevé en pourcentage',
          'Parce que la règle des 35% ne s’applique jamais aux salariés',
          'Parce que les hauts revenus ne paient jamais d’impôts',
          'Parce que cette règle est purement indicative et sans aucun cadre légal',
        ],
        correctIndex: 0,
        explanation:
          'Pour des très hauts revenus, un taux d’endettement supérieur à 35% peut laisser un reste à vivre confortable en valeur absolue, justifiant une flexibilité encadrée.',
      },
      {
        id: 'q6',
        question: 'Le lissage de prêts (ajuster les mensualités de plusieurs crédits existants pour un nouveau prêt) est-il une stratégie reconnue pour optimiser sa capacité d’emprunt ?',
        options: [
          'Oui, cela permet d’équilibrer les mensualités de plusieurs crédits pour respecter le taux d’endettement global',
          'Non, cette pratique est interdite en France',
          'Non, cela n’a aucun effet sur la capacité d’emprunt',
          'Cela ne concerne que les crédits professionnels',
        ],
        correctIndex: 0,
        explanation:
          'Le lissage de prêts réajuste les échéances de crédits existants et nouveaux pour respecter la limite globale d’endettement, une pratique reconnue en ingénierie de crédit.',
      },
    ],
  },
  'credit-responsable-niv2': {
    id: 'credit-responsable-niv2',
    moduleId: 'credit-emprunt',
    title: 'Le crédit responsable — Niveau 2',
    emoji: '⚠️',
    xp: 30,
    intro:
      'Approfondissons : fichage FICP, délai de rétractation, et différence entre crédit renouvelable et ' +
      'crédit amortissable.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce que le FICP (Fichier des Incidents de remboursement des Crédits aux Particuliers) ?',
        options: [
          'Un fichier national recensant les incidents de paiement liés aux crédits, consulté par les banques',
          'Un livret d’épargne réglementé',
          'Un label attribué aux banques responsables',
          'Un impôt sur les crédits à la consommation',
        ],
        correctIndex: 0,
        explanation:
          'Le FICP recense les incidents de paiement sur les crédits et découverts ; les banques le consultent avant d’accorder un nouveau crédit.',
      },
      {
        id: 'q2',
        question: 'Quel est le délai légal de rétractation après la signature d’un crédit à la consommation en France ?',
        options: ['14 jours', '48 heures', '1 jour', '6 mois'],
        correctIndex: 0,
        explanation:
          'La loi accorde un délai de rétractation de 14 jours calendaires après la signature d’un contrat de crédit à la consommation.',
      },
      {
        id: 'q3',
        question: 'Quelle est la principale différence entre un crédit renouvelable et un crédit amortissable classique ?',
        options: [
          'Le renouvelable reconstitue une réserve d’argent disponible au fur et à mesure des remboursements, contrairement à l’amortissable',
          'Il n’existe aucune différence entre les deux',
          'Le renouvelable a toujours un taux plus bas que l’amortissable',
          'L’amortissable n’a pas de durée définie',
        ],
        correctIndex: 0,
        explanation:
          'Le crédit renouvelable met à disposition une réserve d’argent réutilisable, alors qu’un crédit amortissable classique rembourse progressivement un montant fixe emprunté une seule fois.',
      },
      {
        id: 'q4',
        question: 'Pourquoi le crédit renouvelable est-il souvent pointé du doigt comme facteur de surendettement ?',
        options: [
          'Ses taux sont généralement plus élevés et la réserve disponible incite à un usage répété',
          'Il est toujours gratuit et sans risque',
          'Il rembourse automatiquement le capital en une seule fois',
          'Il n’est proposé qu’aux entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Des taux plus élevés combinés à une réserve facilement réutilisable favorisent un recours répété qui peut mener à un endettement croissant difficile à maîtriser.',
      },
      {
        id: 'q5',
        question: 'La durée d’inscription au FICP pour un incident de remboursement caractérisé est-elle illimitée ?',
        options: [
          'Non, elle est limitée dans le temps (généralement 5 ans maximum), sauf régularisation plus rapide',
          'Oui, l’inscription est définitive et à vie',
          'Non, elle dure seulement 48 heures',
          'Cela dépend uniquement de la banque',
        ],
        correctIndex: 0,
        explanation:
          'L’inscription au FICP est plafonnée dans la durée (5 ans maximum pour un incident caractérisé), et peut être levée plus tôt en cas de régularisation.',
      },
      {
        id: 'q6',
        question: 'Un emprunteur peut-il consulter et vérifier lui-même son inscription au FICP ?',
        options: [
          'Oui, il peut demander à la Banque de France les informations le concernant',
          'Non, cette information reste totalement inaccessible aux particuliers',
          'Non, seules les banques peuvent y accéder',
          'Uniquement via une décision de justice',
        ],
        correctIndex: 0,
        explanation:
          'Toute personne peut demander à la Banque de France de vérifier si elle est inscrite au FICP et pour quel motif.',
      },
    ],
  },
  'credit-responsable-niv3': {
    id: 'credit-responsable-niv3',
    moduleId: 'credit-emprunt',
    title: 'Le crédit responsable — Niveau 3',
    emoji: '⚠️',
    xp: 40,
    intro:
      'Niveau expert : procédure de surendettement, effacement de dettes, et prévention comportementale ' +
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
  'ir-bareme-niv2': {
    id: 'ir-bareme-niv2',
    moduleId: 'fiscalite',
    title: "L'impôt sur le revenu (IR) — Niveau 2",
    emoji: '🧾',
    xp: 30,
    intro:
      'Approfondissons : décote pour les revenus modestes, plafonnement du quotient familial, et ' +
      'principaux crédits et réductions d’impôt.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce que la décote de l’impôt sur le revenu ?',
        options: [
          'Un mécanisme qui réduit ou annule l’impôt dû pour les foyers aux revenus modestes proches du seuil d’imposition',
          'Une majoration d’impôt pour les hauts revenus',
          'Un crédit d’impôt réservé aux entreprises',
          'Une pénalité de retard de déclaration',
        ],
        correctIndex: 0,
        explanation:
          'La décote atténue l’impôt calculé par tranches pour les foyers dont l’impôt brut reste proche du seuil d’imposition, évitant un effet de seuil brutal.',
      },
      {
        id: 'q2',
        question: 'Le gain lié au quotient familial est-il illimité pour les foyers avec plusieurs enfants ?',
        options: [
          'Non, l’avantage fiscal du quotient familial est plafonné par demi-part ou part supplémentaire',
          'Oui, il est totalement illimité',
          'Non, il n’existe aucun avantage lié aux enfants',
          'Il ne concerne que les familles monoparentales',
        ],
        correctIndex: 0,
        explanation:
          'L’avantage procuré par chaque part ou demi-part supplémentaire est plafonné, afin de limiter l’effet du quotient familial pour les hauts revenus.',
      },
      {
        id: 'q3',
        question: 'Un crédit d’impôt et une réduction d’impôt ont-ils le même effet si leur montant dépasse l’impôt dû ?',
        options: [
          'Non, un crédit d’impôt peut donner lieu à un remboursement, contrairement à une réduction d’impôt',
          'Oui, ils sont strictement équivalents dans tous les cas',
          'Non, une réduction d’impôt est toujours remboursée',
          'Aucun des deux ne peut dépasser l’impôt dû',
        ],
        correctIndex: 0,
        explanation:
          'Si son montant dépasse l’impôt dû, un crédit d’impôt donne lieu à un remboursement de l’excédent, contrairement à une réduction d’impôt qui s’arrête à annuler l’impôt.',
      },
      {
        id: 'q4',
        question: 'Le prélèvement à la source modifie-t-il le montant final de l’impôt dû sur l’année ?',
        options: [
          'Non, il ne fait qu’étaler le paiement dans le temps, le montant final étant régularisé l’année suivante',
          'Oui, il réduit systématiquement l’impôt final',
          'Oui, il augmente systématiquement l’impôt final',
          'Il remplace totalement le calcul de l’impôt',
        ],
        correctIndex: 0,
        explanation:
          'Le prélèvement à la source est une modalité de paiement anticipé ; le montant définitif de l’impôt reste déterminé par la déclaration annuelle, avec régularisation ensuite.',
      },
      {
        id: 'q5',
        question: 'Un célibataire et un couple marié avec le même revenu total paient-ils nécessairement le même montant d’impôt ?',
        options: [
          'Non, le nombre de parts fiscales diffère et influence directement le calcul par tranches',
          'Oui, toujours strictement le même montant',
          'Non, le statut marital n’a jamais d’impact fiscal',
          'Cela ne dépend que du nombre d’enfants, jamais du statut marital',
        ],
        correctIndex: 0,
        explanation:
          'Le mariage ou le pacs donne droit à 2 parts fiscales contre 1 pour un célibataire, ce qui modifie le revenu par part et donc le calcul de l’impôt.',
      },
      {
        id: 'q6',
        question: 'Une erreur ou un oubli dans sa déclaration de revenus peut-il être corrigé après l’envoi initial ?',
        options: [
          'Oui, via une déclaration rectificative, dans les délais prévus par l’administration fiscale',
          'Non, la déclaration est définitive dès l’envoi',
          'Non, il faut attendre l’année suivante uniquement',
          'Oui, mais uniquement en cas de contrôle fiscal',
        ],
        correctIndex: 0,
        explanation:
          'Une déclaration rectificative permet de corriger une erreur ou un oubli après l’envoi initial, dans les délais fixés par l’administration.',
      },
    ],
  },
  'ir-bareme-niv3': {
    id: 'ir-bareme-niv3',
    moduleId: 'fiscalite',
    title: "L'impôt sur le revenu (IR) — Niveau 3",
    emoji: '🧾',
    xp: 40,
    intro:
      'Niveau expert : optimisation légale via les niches fiscales, rattachement des enfants majeurs, et ' +
      'articulation avec les prélèvements sociaux.',
    questions: [
      {
        id: 'q1',
        question: 'Le plafonnement global des niches fiscales limite-t-il le cumul de tous les avantages fiscaux d’un même foyer ?',
        options: [
          'Oui, un plafond annuel encadre le cumul de la plupart des réductions et crédits d’impôt',
          'Non, chaque avantage fiscal est cumulable sans aucune limite',
          'Non, ce plafonnement ne concerne que les entreprises',
          'Il ne s’applique qu’aux foyers non imposables',
        ],
        correctIndex: 0,
        explanation:
          'Le plafonnement global des niches fiscales limite le montant total d’avantages fiscaux dont un foyer peut bénéficier sur une même année.',
      },
      {
        id: 'q2',
        question: 'Un enfant majeur peut-il choisir chaque année entre rattachement au foyer fiscal des parents ou déclaration autonome ?',
        options: [
          'Oui, sous conditions d’âge, ce choix peut être réévalué chaque année selon ce qui est le plus avantageux',
          'Non, le rattachement est définitif dès la majorité',
          'Non, un enfant majeur ne peut jamais être rattaché',
          'Cela dépend uniquement du lieu de résidence',
        ],
        correctIndex: 0,
        explanation:
          'Sous conditions d’âge et de situation, le rattachement d’un enfant majeur au foyer fiscal parental peut être réévalué chaque année selon l’option la plus avantageuse.',
      },
      {
        id: 'q3',
        question: 'Les prélèvements sociaux (CSG, CRDS) sur les revenus du capital suivent-ils le même barème progressif que l’impôt sur le revenu ?',
        options: [
          'Non, ils s’appliquent à un taux global forfaitaire, indépendamment des tranches de l’IR',
          'Oui, exactement le même barème progressif',
          'Non, ils ne s’appliquent qu’aux salaires',
          'Ils remplacent totalement l’impôt sur le revenu',
        ],
        correctIndex: 0,
        explanation:
          'Les prélèvements sociaux s’appliquent à un taux global (17,2%) indépendant des tranches progressives de l’impôt sur le revenu.',
      },
      {
        id: 'q4',
        question: 'Un déficit foncier généré par des travaux sur un bien locatif peut-il réduire le revenu imposable global d’un contribuable ?',
        options: [
          'Oui, dans une certaine limite annuelle, le déficit foncier peut s’imputer sur le revenu global',
          'Non, il ne peut jamais s’imputer que sur les revenus fonciers futurs',
          'Non, les travaux ne sont jamais déductibles',
          'Il s’applique uniquement aux résidences principales',
        ],
        correctIndex: 0,
        explanation:
          'Le déficit foncier lié aux travaux déductibles peut s’imputer sur le revenu global dans une limite annuelle, le surplus s’imputant ensuite sur les revenus fonciers des années suivantes.',
      },
      {
        id: 'q5',
        question: 'Pourquoi un couple avec des revenus très différents peut-il payer moins d’impôt ensemble que séparément ?',
        options: [
          'Le quotient conjugal permet de lisser le revenu par part, atténuant la progressivité du barème sur le revenu le plus élevé',
          'Cela n’a jamais aucun effet sur l’impôt total',
          'Un couple paie toujours plus d’impôt qu’en étant séparé',
          'Cela ne concerne que les couples sans enfants',
        ],
        correctIndex: 0,
        explanation:
          'En additionnant les revenus puis en les divisant par le nombre de parts, un écart de revenu important entre conjoints peut réduire le taux moyen d’imposition du foyer.',
      },
      {
        id: 'q6',
        question: 'Un contribuable en situation de double résidence fiscale doit-il craindre une double imposition systématique de ses revenus ?',
        options: [
          'Pas nécessairement, des conventions fiscales bilatérales visent à éviter la double imposition entre pays',
          'Oui, systématiquement, sans aucun recours possible',
          'Non, la double résidence fiscale n’existe jamais en pratique',
          'Cela ne concerne que les revenus fonciers',
        ],
        correctIndex: 0,
        explanation:
          'Les conventions fiscales bilatérales entre États déterminent des règles pour éviter ou atténuer la double imposition d’un même contribuable.',
      },
    ],
  },
  'tmi-niv2': {
    id: 'tmi-niv2',
    moduleId: 'fiscalite',
    title: "La Tranche Marginale d'Imposition (TMI) — Niveau 2",
    emoji: '📐',
    xp: 35,
    intro:
      'Approfondissons : effet de la TMI sur un versement PER, arbitrage épargne salariale, et impact ' +
      'd’un bonus exceptionnel.',
    questions: [
      {
        id: 'q1',
        question: 'Un contribuable à TMI 30% qui verse 1 000 € sur un PER déductible réalise quelle économie d’impôt immédiate ?',
        options: ['300 €', '1 000 €', '30 €', '0 €'],
        correctIndex: 0,
        explanation: '1 000 € x 30% de TMI donne une économie d’impôt immédiate de 300 €, avant fiscalité à la sortie.',
      },
      {
        id: 'q2',
        question: 'Un bonus exceptionnel qui fait franchir une tranche supérieure au contribuable entraîne-t-il la taxation de tout son revenu à ce nouveau taux ?',
        options: [
          'Non, seule la part de revenu dans la nouvelle tranche est taxée au taux supérieur',
          'Oui, la totalité du revenu de l’année bascule au nouveau taux',
          'Non, aucun impôt supplémentaire n’est dû',
          'Cela dépend uniquement du mois de versement du bonus',
        ],
        correctIndex: 0,
        explanation:
          'Le mécanisme des tranches s’applique toujours par tranche : seule la portion de revenu dépassant le seuil est taxée au taux supérieur.',
      },
      {
        id: 'q3',
        question: 'La déduction d’un versement PER a-t-elle le même intérêt pour un contribuable à TMI 11% que pour un contribuable à TMI 41% ?',
        options: [
          'Non, l’économie d’impôt immédiate est proportionnellement plus importante pour une TMI élevée',
          'Oui, l’intérêt est strictement identique quelle que soit la TMI',
          'Non, la déduction n’est possible qu’à partir de la TMI 41%',
          'La TMI n’a aucune influence sur l’intérêt du PER',
        ],
        correctIndex: 0,
        explanation:
          'L’économie d’impôt générée par la déduction dépend directement du taux marginal : plus il est élevé, plus l’avantage immédiat est important en valeur.',
      },
      {
        id: 'q4',
        question: 'Un contribuable peut-il connaître à l’avance sa TMI avant de faire une simulation de versement déductible ?',
        options: [
          'Oui, elle est indiquée sur son dernier avis d’imposition',
          'Non, elle n’est jamais communiquée par l’administration',
          'Non, elle n’existe qu’après le versement effectué',
          'Elle est identique pour tous les contribuables français',
        ],
        correctIndex: 0,
        explanation:
          'L’avis d’imposition mentionne explicitement la tranche marginale d’imposition appliquée, permettant d’anticiper l’intérêt d’un futur versement déductible.',
      },
      {
        id: 'q5',
        question: 'Pourquoi un contribuable proche du seuil supérieur d’une tranche a-t-il souvent intérêt à optimiser un versement déductible en fin d’année ?',
        options: [
          'Pour faire redescendre une partie de son revenu dans la tranche inférieure et limiter l’impôt marginal payé',
          'Cela n’a aucun effet quel que soit le montant versé',
          'Pour payer plus d’impôt volontairement',
          'Pour changer automatiquement de tranche l’année suivante',
        ],
        correctIndex: 0,
        explanation:
          'Réduire le revenu imposable via un versement déductible juste avant de franchir un seuil de tranche permet d’optimiser l’impact fiscal marginal.',
      },
      {
        id: 'q6',
        question: 'L’intéressement et la participation versés sur un PEE (plan d’épargne entreprise) bénéficient-ils d’un lien avec la TMI du salarié ?',
        options: [
          'Oui, les sommes bloquées sur un PEE échappent à l’impôt sur le revenu, un avantage d’autant plus fort que la TMI est élevée',
          'Non, ces sommes sont toujours imposées au barème normal',
          'Non, la TMI ne concerne jamais l’épargne salariale',
          'Cela ne concerne que les indépendants',
        ],
        correctIndex: 0,
        explanation:
          'Bloquées sur un plan d’épargne entreprise, ces sommes échappent à l’impôt sur le revenu, un avantage proportionnellement plus important pour une TMI élevée.',
      },
    ],
  },
  'tmi-niv3': {
    id: 'tmi-niv3',
    moduleId: 'fiscalite',
    title: "La Tranche Marginale d'Imposition (TMI) — Niveau 3",
    emoji: '📐',
    xp: 45,
    intro:
      'Niveau expert : arbitrage PFU vs barème selon la TMI, effet de seuil sur les aides sociales, et ' +
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
  'pfu-niv2': {
    id: 'pfu-niv2',
    moduleId: 'fiscalite',
    title: 'Le PFU (flat tax) — Niveau 2',
    emoji: '💹',
    xp: 30,
    intro:
      'Approfondissons : cas des contrats d’assurance-vie, abattements spécifiques, et calcul pratique ' +
      'de l’économie ou du surcoût du PFU.',
    questions: [
      {
        id: 'q1',
        question: 'Sur 1 000 € de plus-value soumise au PFU, quel montant net revient à l’investisseur après le prélèvement de 30% ?',
        options: ['700 €', '970 €', '300 €', '1 000 €'],
        correctIndex: 0,
        explanation: '1 000 € - 30% (300 €) de PFU laisse un net de 700 € pour l’investisseur.',
      },
      {
        id: 'q2',
        question: 'Les gains sur une assurance-vie de plus de 8 ans bénéficient-ils toujours du PFU à 30% sans aucun abattement ?',
        options: [
          'Non, un abattement annuel sur les gains (4 600 € ou 9 200 € selon situation) s’applique avant toute imposition après 8 ans',
          'Oui, aucune règle spécifique ne s’applique après 8 ans',
          'Non, l’assurance-vie n’est jamais soumise au PFU',
          'L’abattement ne s’applique qu’avant 4 ans de détention',
        ],
        correctIndex: 0,
        explanation:
          'Après 8 ans, un abattement annuel s’applique sur les gains rachetés avant toute imposition, réduisant d’autant l’assiette taxable au PFU ou au barème.',
      },
      {
        id: 'q3',
        question: 'Le PFU s’applique-t-il de la même façon aux plus-values sur cession de titres qu’aux dividendes perçus ?',
        options: [
          'Oui, le taux forfaitaire de 30% s’applique de la même manière à ces deux types de revenus du capital',
          'Non, les plus-values ne sont jamais concernées par le PFU',
          'Non, seuls les dividendes sont concernés par le PFU',
          'Le taux diffère selon le montant de la plus-value',
        ],
        correctIndex: 0,
        explanation:
          'Le PFU s’applique de manière homogène aux principaux revenus du capital, qu’il s’agisse de plus-values mobilières ou de dividendes.',
      },
      {
        id: 'q4',
        question: 'Un abattement de 40% sur les dividendes existe-t-il si le contribuable opte pour le barème progressif plutôt que le PFU ?',
        options: [
          'Oui, un abattement de 40% s’applique sur les dividendes uniquement en cas d’option pour le barème progressif',
          'Non, cet abattement n’existe pas du tout',
          'Oui, mais uniquement en cas d’option pour le PFU',
          'Il s’applique uniquement aux plus-values, jamais aux dividendes',
        ],
        correctIndex: 0,
        explanation:
          'L’abattement de 40% sur les dividendes n’est applicable qu’en cas d’option pour le barème progressif de l’IR, pas dans le cadre du PFU.',
      },
      {
        id: 'q5',
        question: 'Pour un contribuable non imposable (TMI 0%), le PFU est-il presque toujours désavantageux par rapport au barème ?',
        options: [
          'Oui, car le barème appliquerait un taux d’IR proche de 0% sur ces revenus, bien inférieur au 12,8% du PFU',
          'Non, le PFU est toujours plus avantageux quelle que soit la situation',
          'Non, un contribuable non imposable ne peut jamais choisir le barème',
          'Cela ne dépend que du montant total des revenus du capital',
        ],
        correctIndex: 0,
        explanation:
          'Avec une TMI à 0%, le barème progressif n’appliquerait quasiment aucun impôt sur le revenu, rendant le PFU (12,8% d’IR + prélèvements sociaux) largement désavantageux.',
      },
      {
        id: 'q6',
        question: 'Le choix entre PFU et barème progressif peut-il être fait séparément pour les dividendes et pour les plus-values de la même année ?',
        options: [
          'Non, l’option pour le barème progressif est globale et s’applique à l’ensemble des revenus du capital de l’année',
          'Oui, un choix distinct est possible pour chaque type de revenu',
          'Non, seul le PFU peut s’appliquer aux plus-values',
          'Le choix se fait uniquement par ligne de titre',
        ],
        correctIndex: 0,
        explanation:
          'L’option pour le barème progressif, quand elle est exercée, s’applique globalement à tous les revenus du capital de l’année, pas revenu par revenu.',
      },
    ],
  },
  'pfu-niv3': {
    id: 'pfu-niv3',
    moduleId: 'fiscalite',
    title: 'Le PFU (flat tax) — Niveau 3',
    emoji: '💹',
    xp: 40,
    intro:
      'Niveau expert : arbitrage PFU/barème selon la composition du foyer, simulation multi-scénarios, ' +
      'et interaction avec les prélèvements sociaux déductibles.',
    questions: [
      {
        id: 'q1',
        question: 'La part de CSG déductible en cas d’option pour le barème progressif influence-t-elle l’arbitrage avec le PFU ?',
        options: [
          'Oui, une fraction de la CSG devient déductible du revenu imposable l’année suivante en cas d’option pour le barème, ce qui améliore son intérêt relatif',
          'Non, la CSG n’est jamais déductible quel que soit le régime choisi',
          'Non, cela ne concerne que les indépendants',
          'La CSG déductible ne s’applique qu’en cas de PFU',
        ],
        correctIndex: 0,
        explanation:
          'En optant pour le barème progressif, une fraction de la CSG payée devient déductible du revenu imposable de l’année suivante, un avantage additionnel à intégrer dans l’arbitrage.',
      },
      {
        id: 'q2',
        question: 'Pour un couple dont un seul conjoint perçoit des revenus du capital, l’arbitrage PFU/barème dépend-il de la TMI individuelle ou de la TMI du foyer ?',
        options: [
          'De la TMI du foyer fiscal dans son ensemble, puisque l’imposition est calculée au niveau du foyer',
          'Uniquement de la TMI individuelle du conjoint percevant les revenus',
          'Cela ne dépend d’aucune TMI',
          'De la TMI la plus basse des deux conjoints uniquement',
        ],
        correctIndex: 0,
        explanation:
          'L’impôt sur le revenu étant calculé au niveau du foyer fiscal, c’est la TMI globale du foyer qui détermine la pertinence de l’option pour le barème progressif.',
      },
      {
        id: 'q3',
        question: 'Un investisseur avec des moins-values reportables a-t-il intérêt à opter pour le barème plutôt que le PFU la même année qu’une plus-value ?',
        options: [
          'L’imputation des moins-values fonctionne de la même façon dans les deux régimes, donc ce critère seul n’oriente pas le choix PFU/barème',
          'Oui, systématiquement, les moins-values ne sont imputables qu’au barème',
          'Non, les moins-values ne sont jamais imputables',
          'Les moins-values ne concernent que les revenus fonciers',
        ],
        correctIndex: 0,
        explanation:
          'L’imputation des moins-values sur les plus-values de même nature s’applique indépendamment du régime d’imposition choisi ; l’arbitrage PFU/barème repose sur d’autres critères comme la TMI.',
      },
      {
        id: 'q4',
        question: 'Simuler les deux options (PFU et barème) chaque année est-il pertinent même pour un contribuable dont la situation semble stable ?',
        options: [
          'Oui, car un changement de composition du foyer, de revenus ou de plafonds peut modifier le résultat de l’arbitrage d’une année sur l’autre',
          'Non, une seule simulation suffit pour toute la vie',
          'Non, l’arbitrage est toujours figé une fois choisi',
          'Cela ne concerne que la première année de perception de revenus du capital',
        ],
        correctIndex: 0,
        explanation:
          'La TMI et la composition du foyer pouvant évoluer chaque année, refaire la simulation régulièrement permet de s’assurer que l’option choisie reste la plus avantageuse.',
      },
      {
        id: 'q5',
        question: 'L’option pour le barème progressif peut-elle être reconsidérée après l’envoi de la déclaration de revenus ?',
        options: [
          'Dans certains délais et conditions fixés par l’administration, une correction reste possible via une déclaration rectificative',
          'Non, l’option est irrévocable dès la première déclaration',
          'Oui, à tout moment sans aucune limite de délai',
          'Cela ne concerne que les revenus fonciers',
        ],
        correctIndex: 0,
        explanation:
          'Comme pour d’autres éléments de la déclaration, une correction de l’option retenue reste possible dans les délais et conditions prévus par l’administration fiscale.',
      },
      {
        id: 'q6',
        question: 'Pourquoi un conseiller en gestion de patrimoine recommande-t-il souvent de simuler l’arbitrage PFU/barème plutôt que d’appliquer une règle générale ?',
        options: [
          'Parce que le résultat dépend de multiples paramètres propres à chaque foyer (TMI, CSG déductible, abattements, composition du foyer)',
          'Parce que la règle est universelle et ne varie jamais d’un foyer à l’autre',
          'Parce que le PFU est toujours interdit pour les hauts revenus',
          'Parce que le barème progressif n’existe que pour les indépendants',
        ],
        correctIndex: 0,
        explanation:
          'De multiples paramètres interagissent (TMI, CSG déductible, abattements, situation familiale), rendant une simulation personnalisée plus fiable qu’une règle générale.',
      },
    ],
  },
  'bilan-niv2': {
    id: 'bilan-niv2',
    moduleId: 'finance-entreprise',
    title: 'Lire un bilan comptable — Niveau 2',
    emoji: '📊',
    xp: 30,
    intro:
      'Approfondissons : amortissements, provisions, et principaux ratios de solvabilité issus du bilan.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce qu’un amortissement comptable d’un actif immobilisé ?',
        options: [
          'La constatation comptable de la perte de valeur d’un actif sur sa durée d’utilisation',
          'Le remboursement d’un emprunt bancaire',
          'Une taxe sur le matériel professionnel',
          'Le prix d’achat initial de l’actif',
        ],
        correctIndex: 0,
        explanation:
          'L’amortissement répartit dans le temps la perte de valeur d’un actif immobilisé (matériel, véhicule...) sur sa durée d’utilisation estimée.',
      },
      {
        id: 'q2',
        question: 'Qu’est-ce qu’une provision inscrite au passif du bilan ?',
        options: [
          'Une somme mise de côté pour couvrir un risque ou une charge probable mais incertaine',
          'Un bénéfice déjà distribué aux actionnaires',
          'Le capital social de l’entreprise',
          'Une dette fournisseur certaine et déjà facturée',
        ],
        correctIndex: 0,
        explanation:
          'Une provision anticipe comptablement un risque ou une charge probable (litige, garantie...) dont le montant ou l’échéance reste incertain.',
      },
      {
        id: 'q3',
        question: 'Que mesure le ratio d’autonomie financière (capitaux propres / total du bilan) ?',
        options: [
          'La part du financement de l’entreprise assurée par ses propres capitaux plutôt que par la dette',
          'Le montant total des stocks',
          'Le chiffre d’affaires annuel',
          'Le nombre d’employés de l’entreprise',
        ],
        correctIndex: 0,
        explanation:
          'Ce ratio indique dans quelle mesure l’entreprise se finance par ses fonds propres plutôt que par l’endettement, un indicateur clé de solidité financière.',
      },
      {
        id: 'q4',
        question: 'Un actif circulant se distingue d’un actif immobilisé principalement par quel critère ?',
        options: [
          'Sa vocation à être consommé, vendu ou transformé rapidement dans le cycle d’exploitation',
          'Son prix d’achat toujours plus élevé',
          'Son financement exclusivement par emprunt',
          'Son absence totale de valeur comptable',
        ],
        correctIndex: 0,
        explanation:
          'Un actif circulant (stocks, créances clients, trésorerie) a vocation à tourner rapidement, contrairement à un actif immobilisé destiné à durer dans l’entreprise.',
      },
      {
        id: 'q5',
        question: 'Deux entreprises avec le même chiffre d’affaires peuvent-elles avoir des bilans très différents ?',
        options: [
          'Oui, leur structure d’actif, de passif et leur niveau d’endettement peuvent varier fortement',
          'Non, le chiffre d’affaires détermine intégralement le bilan',
          'Non, deux entreprises similaires ont toujours un bilan identique',
          'Le bilan ne dépend jamais du secteur d’activité',
        ],
        correctIndex: 0,
        explanation:
          'Le chiffre d’affaires (compte de résultat) et la structure patrimoniale (bilan) sont deux dimensions distinctes ; deux entreprises comparables en CA peuvent avoir des bilans très différents.',
      },
      {
        id: 'q6',
        question: 'Pourquoi la trésorerie nette (trésorerie - dettes financières court terme) est-elle un indicateur plus fin que la seule trésorerie brute affichée à l’actif ?',
        options: [
          'Elle tient compte des dettes financières à court terme qui pèsent sur la disponibilité réelle de liquidités',
          'Elle ne prend en compte que les stocks',
          'Elle est toujours identique à la trésorerie brute',
          'Elle ignore systématiquement les dettes de l’entreprise',
        ],
        correctIndex: 0,
        explanation:
          'La trésorerie nette rapporte les liquidités disponibles aux dettes financières à court terme, donnant une image plus fidèle de la marge de manœuvre réelle de l’entreprise.',
      },
    ],
  },
  'bilan-niv3': {
    id: 'bilan-niv3',
    moduleId: 'finance-entreprise',
    title: 'Lire un bilan comptable — Niveau 3',
    emoji: '📊',
    xp: 40,
    intro:
      'Niveau expert : lecture croisée bilan/compte de résultat, effet de levier financier, et signaux ' +
      'd’alerte de fragilité financière.',
    questions: [
      {
        id: 'q1',
        question: 'Pourquoi analyser le bilan seul, sans le compte de résultat, donne-t-il une vision incomplète de la santé d’une entreprise ?',
        options: [
          'Le bilan montre un état patrimonial à un instant donné, alors que le compte de résultat révèle la performance sur une période',
          'Le bilan contient déjà toutes les informations du compte de résultat',
          'Le compte de résultat n’apporte aucune information supplémentaire',
          'Seul le bilan est utile pour juger une entreprise',
        ],
        correctIndex: 0,
        explanation:
          'Le bilan (photographie patrimoniale) et le compte de résultat (performance sur une période) sont complémentaires ; l’un sans l’autre masque une partie de la réalité économique.',
      },
      {
        id: 'q2',
        question: 'Qu’est-ce que l’effet de levier financier, observable en croisant bilan et rentabilité ?',
        options: [
          'L’utilisation de la dette pour augmenter la rentabilité des capitaux propres, à condition que le coût de la dette soit inférieur à la rentabilité économique',
          'Le remboursement intégral de toutes les dettes de l’entreprise',
          'Un impôt spécifique sur les emprunts',
          'La suppression totale du risque financier',
        ],
        correctIndex: 0,
        explanation:
          'L’effet de levier amplifie la rentabilité des capitaux propres via l’endettement, tant que le coût de la dette reste inférieur à la rentabilité économique dégagée par l’entreprise.',
      },
      {
        id: 'q3',
        question: 'Un bilan affichant des capitaux propres négatifs est-il un signal d’alerte sérieux ?',
        options: [
          'Oui, cela signifie que les pertes cumulées ont dépassé le capital apporté, un signe de fragilité financière majeure',
          'Non, c’est une situation parfaitement normale',
          'Non, cela ne concerne que les grandes entreprises',
          'Cela signifie au contraire que l’entreprise est très rentable',
        ],
        correctIndex: 0,
        explanation:
          'Des capitaux propres négatifs traduisent des pertes cumulées supérieures aux apports des associés, une situation de fragilité financière qui peut déclencher des obligations légales spécifiques.',
      },
      {
        id: 'q4',
        question: 'Le ratio dettes financières / capacité d’autofinancement (CAF) mesure-t-il quelque chose de pertinent pour un prêteur ?',
        options: [
          'Oui, il estime le nombre d’années théoriquement nécessaires pour rembourser la dette avec les flux dégagés par l’activité',
          'Non, ce ratio n’a aucune utilité pratique',
          'Il mesure uniquement la taille de l’entreprise',
          'Il ne concerne que les entreprises cotées en bourse',
        ],
        correctIndex: 0,
        explanation:
          'Ce ratio donne une estimation du nombre d’années nécessaires pour rembourser la dette financière grâce aux flux de trésorerie générés par l’exploitation, un indicateur clé pour un prêteur.',
      },
      {
        id: 'q5',
        question: 'Une forte croissance du chiffre d’affaires accompagnée d’une trésorerie qui se dégrade doit-elle alerter un analyste ?',
        options: [
          'Oui, cela peut signaler un BFR mal maîtrisé qui consomme plus de trésorerie que la croissance n’en génère',
          'Non, la croissance du chiffre d’affaires garantit toujours une trésorerie saine',
          'Non, ces deux éléments ne sont jamais liés',
          'Cela signifie automatiquement une fraude comptable',
        ],
        correctIndex: 0,
        explanation:
          'Une croissance rapide peut aggraver le besoin en fonds de roulement plus vite que les encaissements ne progressent, dégradant la trésorerie malgré une activité en hausse.',
      },
      {
        id: 'q6',
        question: 'Pourquoi comparer le bilan d’une entreprise à celui de ses concurrents du même secteur est-il plus pertinent qu’une lecture isolée ?',
        options: [
          'Les normes de structure financière (endettement, BFR) varient fortement d’un secteur à l’autre, rendant la comparaison sectorielle plus significative',
          'Tous les secteurs ont exactement la même structure de bilan',
          'Cela n’apporte aucune information supplémentaire',
          'Seule la taille de l’entreprise compte, jamais le secteur',
        ],
        correctIndex: 0,
        explanation:
          'Les niveaux normaux d’endettement, de BFR ou de marge diffèrent fortement selon les secteurs, ce qui rend une comparaison intra-sectorielle bien plus informative qu’une lecture isolée.',
      },
    ],
  },
  'bfr-niv2': {
    id: 'bfr-niv2',
    moduleId: 'finance-entreprise',
    title: 'Le BFR (Besoin en Fonds de Roulement) — Niveau 2',
    emoji: '🔄',
    xp: 30,
    intro:
      'Approfondissons : délais de rotation des stocks, délais clients/fournisseurs, et calcul concret ' +
      'du BFR en jours de chiffre d’affaires.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’exprime le "délai de rotation des stocks" en nombre de jours ?',
        options: [
          'Le temps moyen que les stocks passent dans l’entreprise avant d’être vendus',
          'Le délai de paiement accordé aux fournisseurs',
          'Le délai de paiement accordé par les clients',
          'La durée de vie légale d’un produit',
        ],
        correctIndex: 0,
        explanation:
          'Ce délai mesure la vitesse à laquelle les stocks sont écoulés ; plus il est court, moins de trésorerie reste immobilisée en stock.',
      },
      {
        id: 'q2',
        question: 'Si une entreprise paie ses fournisseurs à 30 jours mais encaisse ses clients à 60 jours, quel est l’effet sur son BFR ?',
        options: [
          'Le BFR augmente, car l’entreprise décaisse avant d’encaisser',
          'Le BFR diminue automatiquement',
          'Le BFR devient nul',
          'Cela n’a aucun effet sur le BFR',
        ],
        correctIndex: 0,
        explanation:
          'Payer les fournisseurs plus vite que l’on encaisse les clients crée un décalage de trésorerie qui augmente le besoin de financement (BFR).',
      },
      {
        id: 'q3',
        question: 'Pourquoi le BFR est-il souvent exprimé "en jours de chiffre d’affaires" plutôt qu’en valeur absolue ?',
        options: [
          'Cela permet de comparer des entreprises de tailles différentes indépendamment de leur volume d’activité',
          'C’est une obligation légale sans autre justification',
          'La valeur absolue est toujours plus précise',
          'Cela ne concerne que les grandes entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Exprimer le BFR en jours de chiffre d’affaires neutralise l’effet de taille et permet de comparer des entreprises de dimensions différentes.',
      },
      {
        id: 'q4',
        question: 'Une entreprise de grande distribution qui encaisse ses clients au comptant mais paie ses fournisseurs à 60 jours a généralement quel type de BFR ?',
        options: [
          'Un BFR négatif, qui finance en partie son activité grâce à ce décalage favorable',
          'Un BFR toujours positif et élevé',
          'Un BFR nul par construction',
          'Un BFR qui ne dépend jamais des délais de paiement',
        ],
        correctIndex: 0,
        explanation:
          'Encaisser avant de payer ses fournisseurs génère un BFR négatif, une ressource de trésorerie plutôt qu’un besoin, typique de la grande distribution.',
      },
      {
        id: 'q5',
        question: 'La négociation de délais fournisseurs plus longs a-t-elle une limite pratique à ne pas franchir ?',
        options: [
          'Oui, des délais excessifs peuvent fragiliser la relation commerciale et la fiabilité des fournisseurs',
          'Non, il faut toujours négocier le délai le plus long possible sans limite',
          'Non, cela n’a aucun effet sur la relation fournisseur',
          'Cela ne concerne que les très grandes entreprises',
        ],
        correctIndex: 0,
        explanation:
          'Des délais de paiement trop longs peuvent détériorer la relation avec les fournisseurs, voire menacer leur propre trésorerie, un équilibre à respecter.',
      },
      {
        id: 'q6',
        question: 'Un BFR qui augmente proportionnellement moins vite que le chiffre d’affaires traduit-il une amélioration de l’efficacité opérationnelle ?',
        options: [
          'Oui, cela signifie que l’entreprise gère mieux son cycle d’exploitation à mesure qu’elle grandit',
          'Non, cela signifie toujours une dégradation de l’activité',
          'Non, le BFR n’a aucun lien avec l’efficacité opérationnelle',
          'Cela signifie que l’entreprise n’a plus de stocks du tout',
        ],
        correctIndex: 0,
        explanation:
          'Un BFR qui croît moins vite que le chiffre d’affaires indique une meilleure maîtrise du cycle d’exploitation (stocks, délais clients/fournisseurs) avec la croissance.',
      },
    ],
  },
  'bfr-niv3': {
    id: 'bfr-niv3',
    moduleId: 'finance-entreprise',
    title: 'Le BFR (Besoin en Fonds de Roulement) — Niveau 3',
    emoji: '🔄',
    xp: 40,
    intro:
      'Niveau expert : lien entre BFR, fonds de roulement et trésorerie nette, effet ciseau lors d’une ' +
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
  'statuts-juridiques-niv2': {
    id: 'statuts-juridiques-niv2',
    moduleId: 'finance-entreprise',
    title: 'Choisir son statut juridique — Niveau 2',
    emoji: '🏛️',
    xp: 30,
    intro:
      'Approfondissons : régime social du dirigeant (assimilé salarié vs TNS), et fiscalité IS vs IR ' +
      'selon le statut choisi.',
    questions: [
      {
        id: 'q1',
        question: 'Un président de SASU est-il affilié au régime général de la Sécurité sociale ou au régime des travailleurs indépendants ?',
        options: [
          'Au régime général en tant qu’assimilé salarié, sans cotiser à l’assurance chômage',
          'Au régime des travailleurs non-salariés (TNS)',
          'À aucun régime de protection sociale',
          'Uniquement à un régime privé facultatif',
        ],
        correctIndex: 0,
        explanation:
          'Le président de SASU est affilié au régime général en tant qu’assimilé salarié, bénéficiant d’une couverture sociale proche d’un salarié, hors assurance chômage.',
      },
      {
        id: 'q2',
        question: 'Un gérant majoritaire d’EURL relève-t-il du même régime social qu’un président de SASU ?',
        options: [
          'Non, il relève du régime des travailleurs non-salariés (TNS), avec des cotisations différentes',
          'Oui, exactement le même régime',
          'Non, il n’a droit à aucune protection sociale',
          'Cela dépend uniquement du chiffre d’affaires réalisé',
        ],
        correctIndex: 0,
        explanation:
          'Le gérant majoritaire d’EURL relève du régime des travailleurs non-salariés (TNS), avec des cotisations sociales généralement moins élevées mais une protection différente.',
      },
      {
        id: 'q3',
        question: 'Une société peut-elle choisir d’être imposée à l’impôt sur le revenu (IR) plutôt qu’à l’impôt sur les sociétés (IS) ?',
        options: [
          'Oui, sous certaines conditions et pour une durée limitée dans certains cas (option IR)',
          'Non, toutes les sociétés sont obligatoirement à l’IS',
          'Non, seules les entreprises individuelles existent en France',
          'Cela dépend uniquement du nombre de salariés',
        ],
        correctIndex: 0,
        explanation:
          'Certaines formes de sociétés peuvent opter, sous conditions et pour une durée limitée, pour une imposition à l’IR plutôt qu’à l’IS, notamment en phase de démarrage déficitaire.',
      },
      {
        id: 'q4',
        question: 'Les charges sociales d’un statut TNS sont-elles généralement plus élevées ou plus faibles que celles d’un assimilé salarié, à revenu net équivalent ?',
        options: [
          'Généralement plus faibles, en contrepartie d’une protection sociale un peu moins étendue',
          'Toujours strictement identiques',
          'Toujours plus élevées sans exception',
          'Les charges sociales n’existent pas pour les TNS',
        ],
        correctIndex: 0,
        explanation:
          'Le statut TNS implique en général des cotisations sociales plus faibles qu’un régime assimilé salarié, en contrepartie d’une couverture sociale un peu moins complète (retraite, prévoyance).',
      },
      {
        id: 'q5',
        question: 'Le régime de la micro-entreprise permet-il de facturer la TVA à ses clients par défaut ?',
        options: [
          'Non, la micro-entreprise bénéficie d’une franchise en base de TVA en dessous de certains seuils',
          'Oui, systématiquement dès le premier euro de chiffre d’affaires',
          'Non, la TVA est interdite pour toutes les micro-entreprises sans exception',
          'Cela dépend uniquement du statut marital de l’entrepreneur',
        ],
        correctIndex: 0,
        explanation:
          'En dessous de certains seuils de chiffre d’affaires, la micro-entreprise bénéficie d’une franchise en base de TVA, ne facturant donc pas la TVA à ses clients.',
      },
      {
        id: 'q6',
        question: 'Changer de statut juridique en cours de vie de l’entreprise (ex : micro-entreprise vers SASU) est-il possible ?',
        options: [
          'Oui, une transformation ou une nouvelle création est possible pour adapter le statut à l’évolution de l’activité',
          'Non, le statut choisi à la création est définitif à vie',
          'Non, cela nécessite obligatoirement de fermer l’entreprise sans retour possible',
          'Cela ne concerne que les grandes entreprises cotées',
        ],
        correctIndex: 0,
        explanation:
          'Il est possible de faire évoluer son statut juridique en cours d’activité, souvent lorsque l’activité dépasse les seuils ou nécessite une structure différente.',
      },
    ],
  },
  'statuts-juridiques-niv3': {
    id: 'statuts-juridiques-niv3',
    moduleId: 'finance-entreprise',
    title: 'Choisir son statut juridique — Niveau 3',
    emoji: '🏛️',
    xp: 40,
    intro:
      'Niveau expert : arbitrage rémunération/dividendes selon le statut, transmission d’entreprise, et ' +
      'responsabilité du dirigeant en cas de faute de gestion.',
    questions: [
      {
        id: 'q1',
        question: 'Pourquoi un dirigeant de SASU peut-il avoir intérêt à arbitrer entre rémunération et dividendes selon sa situation ?',
        options: [
          'La rémunération est soumise aux cotisations sociales tandis que les dividendes suivent un régime fiscal et social distinct, souvent plus léger en charges sociales',
          'Rémunération et dividendes sont toujours taxés de façon strictement identique',
          'Les dividendes sont automatiquement interdits en SASU',
          'Cet arbitrage n’existe que pour les entreprises individuelles',
        ],
        correctIndex: 0,
        explanation:
          'La rémunération du dirigeant supporte des cotisations sociales, alors que les dividendes suivent un régime différent (PFU ou barème), ce qui ouvre un arbitrage selon les objectifs du dirigeant.',
      },
      {
        id: 'q2',
        question: 'La responsabilité personnelle d’un dirigeant de société peut-elle être engagée malgré la responsabilité limitée de la structure ?',
        options: [
          'Oui, en cas de faute de gestion caractérisée, la responsabilité personnelle du dirigeant peut être recherchée',
          'Non, jamais, quelle que soit la gravité de la faute',
          'Non, la responsabilité limitée protège absolument tout comportement du dirigeant',
          'Cela ne concerne que les entreprises individuelles',
        ],
        correctIndex: 0,
        explanation:
          'La responsabilité limitée protège en principe le patrimoine personnel, mais une faute de gestion caractérisée peut entraîner la mise en cause personnelle du dirigeant.',
      },
      {
        id: 'q3',
        question: 'Pourquoi la SASU est-elle souvent privilégiée pour un projet visant à faire entrer des investisseurs par la suite ?',
        options: [
          'Sa structure par actions facilite l’entrée de nouveaux associés et l’émission de titres',
          'Elle interdit par nature toute augmentation de capital',
          'Elle empêche définitivement toute levée de fonds',
          'Elle est réservée aux entreprises sans salariés',
        ],
        correctIndex: 0,
        explanation:
          'La structure par actions de la SASU (évolutive en SAS) facilite l’entrée de nouveaux investisseurs via l’émission ou la cession d’actions, un avantage pour la levée de fonds.',
      },
      {
        id: 'q4',
        question: 'La transmission d’une entreprise individuelle à un enfant repreneur pose-t-elle des enjeux différents de la cession de titres d’une société ?',
        options: [
          'Oui, la transmission d’un fonds ou d’une entreprise individuelle suit des règles distinctes de la cession de parts ou actions d’une société',
          'Non, la transmission est strictement identique dans tous les cas',
          'Non, seules les sociétés cotées peuvent être transmises',
          'Cela ne dépend que du montant du chiffre d’affaires',
        ],
        correctIndex: 0,
        explanation:
          'La transmission d’une entreprise individuelle (fonds de commerce) et la cession de titres d’une société suivent des régimes juridiques et fiscaux distincts, à anticiper dès le choix du statut.',
      },
      {
        id: 'q5',
        question: 'Un statut avec option IS permet-il de lisser la fiscalité en conservant des bénéfices dans la société plutôt qu’en les distribuant immédiatement ?',
        options: [
          'Oui, les bénéfices non distribués restent taxés à l’IS au niveau de la société sans imposition immédiate au niveau personnel',
          'Non, tous les bénéfices sont automatiquement taxés au niveau personnel chaque année',
          'Non, l’IS ne permet aucune rétention de bénéfices',
          'Cela ne concerne que les entreprises individuelles',
        ],
        correctIndex: 0,
        explanation:
          'À l’IS, les bénéfices conservés dans la société ne sont taxés qu’au niveau de l’IS, sans imposition personnelle tant qu’ils ne sont pas distribués sous forme de dividendes.',
      },
      {
        id: 'q6',
        question: 'Pourquoi le choix du statut juridique initial peut-il avoir un impact significatif des années plus tard, au moment de la cession de l’entreprise ?',
        options: [
          'Le régime fiscal applicable à la plus-value de cession diffère selon qu’il s’agit d’un fonds de commerce ou de titres de société',
          'Le statut juridique n’a jamais d’impact sur la fiscalité de cession',
          'Seul le montant de la cession compte, jamais la structure juridique',
          'Cela ne concerne que les entreprises cotées en bourse',
        ],
        correctIndex: 0,
        explanation:
          'Le traitement fiscal de la plus-value réalisée lors d’une cession diffère selon la nature de ce qui est cédé (fonds de commerce ou titres), un enjeu à anticiper dès le choix initial du statut.',
      },
    ],
  },
  'secteurs-activite-niv2': {
    id: 'secteurs-activite-niv2',
    moduleId: 'economie-francaise',
    title: "Les secteurs de l'économie — Niveau 2",
    emoji: '🏭',
    xp: 30,
    intro:
      'Approfondissons : tertiarisation de l’économie française, notion de "secteur quaternaire", et ' +
      'répartition de l’emploi par secteur.',
    questions: [
      {
        id: 'q1',
        question: 'Le mouvement de "tertiarisation" observé en France depuis plusieurs décennies désigne quoi ?',
        options: [
          'La part croissante des services dans l’emploi et la richesse produite, au détriment relatif de l’industrie',
          'Le développement exclusif de l’agriculture',
          'La disparition totale du secteur industriel',
          'Une politique de subvention agricole',
        ],
        correctIndex: 0,
        explanation:
          'La tertiarisation désigne le poids croissant des services dans l’économie française, en emploi comme en valeur ajoutée, au détriment relatif de l’industrie et de l’agriculture.',
      },
      {
        id: 'q2',
        question: 'Certains économistes distinguent un "secteur quaternaire" : que recouvre-t-il généralement ?',
        options: [
          'Les activités à forte intensité de savoir et d’information (recherche, numérique, conseil)',
          'L’extraction de matières premières uniquement',
          'L’agriculture biologique exclusivement',
          'Le secteur bancaire uniquement',
        ],
        correctIndex: 0,
        explanation:
          'Le secteur quaternaire regroupe les activités intensives en information et en connaissance (recherche, numérique, conseil), parfois distinguées du tertiaire classique.',
      },
      {
        id: 'q3',
        question: 'La part de l’emploi agricole dans l’emploi total français a-t-elle fortement diminué depuis le milieu du XXe siècle ?',
        options: [
          'Oui, elle est passée d’une part importante à une part très minoritaire aujourd’hui',
          'Non, elle est restée strictement stable',
          'Non, elle a fortement augmenté sur la période',
          'L’agriculture a totalement disparu de l’économie française',
        ],
        correctIndex: 0,
        explanation:
          'La mécanisation et les gains de productivité ont fortement réduit la part de l’emploi agricole en France depuis les années 1950, au profit de l’industrie puis des services.',
      },
      {
        id: 'q4',
        question: 'Une entreprise de logiciels qui vend des services numériques à des usines industrielles se situe à la frontière de quels secteurs ?',
        options: [
          'Le tertiaire (services numériques) au service du secteur secondaire (industrie)',
          'Uniquement le secteur primaire',
          'Uniquement le secteur agricole',
          'Aucun secteur ne peut être identifié dans ce cas',
        ],
        correctIndex: 0,
        explanation:
          'Ce type d’activité illustre les interactions croissantes entre secteurs : un service tertiaire qui vient soutenir la production industrielle du secteur secondaire.',
      },
      {
        id: 'q5',
        question: 'Pourquoi la classification stricte en trois secteurs est-elle parfois jugée limitée pour décrire l’économie contemporaine ?',
        options: [
          'De nombreuses activités hybrides (numérique, économie de la connaissance) ne rentrent pas clairement dans un seul secteur traditionnel',
          'Parce que le secteur primaire a totalement disparu',
          'Parce que cette classification n’a jamais existé',
          'Parce que seul le secteur secondaire compte aujourd’hui',
        ],
        correctIndex: 0,
        explanation:
          'Les activités modernes (numérique, économie de la connaissance) brouillent souvent les frontières entre les trois secteurs traditionnels, d’où l’émergence de classifications complémentaires.',
      },
      {
        id: 'q6',
        question: 'La désindustrialisation partielle observée en France s’accompagne-t-elle nécessairement d’une baisse de la production industrielle en valeur ?',
        options: [
          'Pas nécessairement, la part de l’emploi industriel peut baisser alors que la production reste stable ou augmente grâce aux gains de productivité',
          'Oui, systématiquement et proportionnellement',
          'Non, la production industrielle a toujours augmenté au même rythme que l’emploi industriel',
          'Cela ne concerne que le secteur agricole',
        ],
        correctIndex: 0,
        explanation:
          'La baisse de la part de l’emploi industriel peut coexister avec une production stable ou croissante, grâce à l’automatisation et aux gains de productivité du secteur.',
      },
    ],
  },
  'secteurs-activite-niv3': {
    id: 'secteurs-activite-niv3',
    moduleId: 'economie-francaise',
    title: "Les secteurs de l'économie — Niveau 3",
    emoji: '🏭',
    xp: 40,
    intro:
      'Niveau expert : valeur ajoutée par secteur, dépendance économique aux services financiers, et ' +
      'enjeux de réindustrialisation.',
    questions: [
      {
        id: 'q1',
        question: 'Que mesure la "valeur ajoutée" produite par un secteur, plus précisément que le simple chiffre d’affaires ?',
        options: [
          'La richesse réellement créée par le secteur, une fois déduites les consommations intermédiaires (matières premières, services achetés)',
          'Le montant total des ventes sans aucune déduction',
          'Le nombre d’emplois créés uniquement',
          'Le montant des impôts payés par le secteur',
        ],
        correctIndex: 0,
        explanation:
          'La valeur ajoutée retire du chiffre d’affaires les consommations intermédiaires, isolant la richesse réellement créée par l’activité elle-même.',
      },
      {
        id: 'q2',
        question: 'Pourquoi une économie très dépendante des services financiers peut-elle être plus sensible aux crises financières internationales ?',
        options: [
          'Une part importante de la valeur ajoutée nationale dépend alors directement de la santé des marchés financiers mondiaux',
          'Les services financiers sont totalement isolés des marchés internationaux',
          'Cela n’a jamais aucun impact sur l’économie réelle',
          'Seul le secteur agricole est concerné par les crises financières',
        ],
        correctIndex: 0,
        explanation:
          'Une forte dépendance aux services financiers expose une économie de façon plus directe aux chocs des marchés financiers internationaux.',
      },
      {
        id: 'q3',
        question: 'Les politiques de "réindustrialisation" en France cherchent principalement à répondre à quel enjeu économique ?',
        options: [
          'Réduire la dépendance aux importations sur des secteurs jugés stratégiques et retrouver de la valeur ajoutée industrielle',
          'Supprimer totalement le secteur tertiaire',
          'Développer exclusivement l’agriculture',
          'Augmenter uniquement l’emploi public',
        ],
        correctIndex: 0,
        explanation:
          'La réindustrialisation vise notamment à réduire la dépendance stratégique aux importations et à relocaliser de la valeur ajoutée industrielle sur le territoire national.',
      },
      {
        id: 'q4',
        question: 'La production de logiciels comme service (SaaS) génère-t-elle une valeur ajoutée comptabilisée dans le secteur tertiaire même si elle équipe des usines ?',
        options: [
          'Oui, la nature du service fourni (numérique) détermine son secteur, indépendamment du client final',
          'Non, elle est toujours comptabilisée dans le secteur secondaire',
          'Non, ce type d’activité n’est comptabilisé dans aucun secteur',
          'Cela dépend uniquement de la taille de l’entreprise cliente',
        ],
        correctIndex: 0,
        explanation:
          'La classification sectorielle dépend de la nature de l’activité produite (ici, un service numérique), pas du secteur du client final qui l’utilise.',
      },
      {
        id: 'q5',
        question: 'Une hausse du poids du secteur tertiaire dans le PIB signifie-t-elle nécessairement une hausse du niveau de vie moyen ?',
        options: [
          'Pas nécessairement, cela dépend aussi de la productivité et de la qualité des emplois créés dans ce secteur',
          'Oui, systématiquement et automatiquement',
          'Non, la tertiarisation entraîne toujours une baisse du niveau de vie',
          'Cela ne dépend que du secteur agricole',
        ],
        correctIndex: 0,
        explanation:
          'Le poids croissant du tertiaire dans le PIB ne garantit pas en soi une hausse du niveau de vie ; la productivité et la qualité des emplois créés jouent un rôle déterminant.',
      },
      {
        id: 'q6',
        question: 'Pourquoi les comparaisons internationales de structure sectorielle doivent-elles être interprétées avec prudence ?',
        options: [
          'Les frontières statistiques entre secteurs et les méthodes de classification peuvent varier d’un pays à l’autre',
          'Tous les pays utilisent exactement la même méthode de classification sans aucune différence',
          'Ces comparaisons sont toujours parfaitement fiables sans nuance',
          'Seule la France publie des statistiques sectorielles',
        ],
        correctIndex: 0,
        explanation:
          'Les nomenclatures statistiques et les méthodes de classification sectorielle peuvent différer selon les pays, ce qui appelle à la prudence dans les comparaisons internationales directes.',
      },
    ],
  },
  'monnaie-inflation-niv2': {
    id: 'monnaie-inflation-niv2',
    moduleId: 'economie-francaise',
    title: "La monnaie et l'inflation — Niveau 2",
    emoji: '💶',
    xp: 30,
    intro:
      'Approfondissons : mécanismes de transmission de la politique monétaire, indice des prix (IPC), ' +
      'et inflation importée.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce que l’indice des prix à la consommation (IPC) utilisé pour mesurer l’inflation ?',
        options: [
          'Un indicateur qui suit l’évolution du prix d’un panier de biens et services représentatif de la consommation des ménages',
          'Le taux d’intérêt directeur de la BCE',
          'Le montant total des impôts collectés',
          'Le cours de change de l’euro face au dollar',
        ],
        correctIndex: 0,
        explanation:
          'L’IPC mesure l’évolution des prix d’un panier de biens et services représentatif, servant de référence officielle pour calculer le taux d’inflation.',
      },
      {
        id: 'q2',
        question: 'Qu’appelle-t-on "inflation importée" ?',
        options: [
          'Une hausse des prix domestiques causée par le renchérissement de biens ou matières premières achetés à l’étranger',
          'Une inflation calculée uniquement sur les produits importés au sens statistique strict',
          'Une inflation qui ne concerne que les pays voisins',
          'Une taxe douanière supplémentaire',
        ],
        correctIndex: 0,
        explanation:
          'L’inflation importée résulte de la hausse du prix de biens ou matières premières achetés à l’étranger (énergie, matières premières), qui se répercute sur les prix domestiques.',
      },
      {
        id: 'q3',
        question: 'Comment une hausse des taux directeurs de la BCE se transmet-elle concrètement à l’économie réelle ?',
        options: [
          'Elle renchérit le coût du crédit, ce qui freine la consommation et l’investissement, réduisant la pression sur les prix',
          'Elle n’a strictement aucun effet sur l’économie réelle',
          'Elle augmente directement les salaires de tous les travailleurs',
          'Elle réduit instantanément les prix de tous les produits',
        ],
        correctIndex: 0,
        explanation:
          'Une hausse des taux directeurs renchérit le crédit pour les banques puis pour les emprunteurs, freinant consommation et investissement, ce qui tend à modérer l’inflation.',
      },
      {
        id: 'q4',
        question: 'L’inflation touche-t-elle de la même manière tous les ménages, quel que soit leur niveau de revenu ?',
        options: [
          'Non, son impact varie selon la structure de consommation de chaque ménage (poids de l’énergie, alimentation...)',
          'Oui, l’inflation affecte toujours tous les ménages de façon strictement identique',
          'Non, seuls les ménages aisés sont concernés par l’inflation',
          'L’inflation ne concerne jamais les produits alimentaires',
        ],
        correctIndex: 0,
        explanation:
          'Selon la part de leur budget consacrée à l’énergie ou à l’alimentation, des postes souvent plus touchés par l’inflation, les ménages ne subissent pas tous le même impact.',
      },
      {
        id: 'q5',
        question: 'La désindexation partielle de certains salaires sur l’inflation a quel effet en période de forte inflation ?',
        options: [
          'Elle peut entraîner une perte de pouvoir d’achat si les salaires progressent moins vite que les prix',
          'Elle garantit toujours une progression des salaires supérieure à l’inflation',
          'Elle n’a aucun effet sur le pouvoir d’achat',
          'Elle concerne uniquement les indépendants',
        ],
        correctIndex: 0,
        explanation:
          'Si les salaires ne sont pas pleinement indexés sur l’inflation, leur progression peut être inférieure à la hausse des prix, entraînant une perte de pouvoir d’achat réel.',
      },
      {
        id: 'q6',
        question: 'Pourquoi la BCE surveille-t-elle aussi "l’inflation sous-jacente" (hors énergie et alimentation), en plus de l’inflation globale ?',
        options: [
          'Car elle reflète mieux les tendances durables de prix, en excluant les composantes les plus volatiles',
          'Car l’énergie et l’alimentation ne font jamais partie de l’inflation officielle',
          'Car l’inflation sous-jacente est toujours plus élevée que l’inflation globale',
          'Cet indicateur n’est jamais utilisé en pratique',
        ],
        correctIndex: 0,
        explanation:
          'En excluant les prix très volatils de l’énergie et de l’alimentation, l’inflation sous-jacente donne une image plus stable des tendances de fond des prix.',
      },
    ],
  },
  'monnaie-inflation-niv3': {
    id: 'monnaie-inflation-niv3',
    moduleId: 'economie-francaise',
    title: "La monnaie et l'inflation — Niveau 3",
    emoji: '💶',
    xp: 40,
    intro:
      'Niveau expert : spirale prix-salaires, effets redistributifs de l’inflation, et limites des ' +
      'politiques monétaires face à des chocs d’offre.',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce que la "spirale prix-salaires" parfois redoutée en période de forte inflation ?',
        options: [
          'Un mécanisme où la hausse des salaires pour compenser l’inflation alimente elle-même de nouvelles hausses de prix, entretenant l’inflation',
          'Une baisse simultanée des prix et des salaires',
          'Un phénomène qui ne concerne que les taux de change',
          'Une politique fiscale de baisse d’impôts',
        ],
        correctIndex: 0,
        explanation:
          'La spirale prix-salaires décrit un cercle où hausses de salaires et hausses de prix s’alimentent mutuellement, rendant l’inflation plus difficile à maîtriser une fois enclenchée.',
      },
      {
        id: 'q2',
        question: 'L’inflation profite-t-elle historiquement plutôt aux emprunteurs ou aux épargnants détenteurs de créances à taux fixe ?',
        options: [
          'Aux emprunteurs, car ils remboursent une dette dont la valeur réelle diminue avec l’inflation',
          'Toujours aux épargnants, sans exception',
          'Elle est neutre pour les deux catégories',
          'Elle ne concerne que les investisseurs en actions',
        ],
        correctIndex: 0,
        explanation:
          'Un emprunteur avec une dette à taux fixe rembourse, en termes réels, une somme dont la valeur diminue avec l’inflation, un effet redistributif classique en faveur des débiteurs.',
      },
      {
        id: 'q3',
        question: 'Une politique monétaire restrictive (hausse des taux) est-elle pleinement efficace face à une inflation causée par un choc d’offre (ex : pénurie énergétique) ?',
        options: [
          'Son efficacité est limitée, car elle agit surtout sur la demande, pas directement sur la cause du choc d’offre',
          'Oui, elle résout instantanément tout choc d’offre',
          'Non, elle n’a jamais aucun effet quelle que soit la cause de l’inflation',
          'Elle ne concerne que l’inflation liée à la demande intérieure uniquement',
        ],
        correctIndex: 0,
        explanation:
          'Face à un choc d’offre (pénurie, prix de l’énergie), la politique monétaire agit indirectement en freinant la demande, mais ne résout pas directement la cause structurelle du choc.',
      },
      {
        id: 'q4',
        question: 'Pourquoi une inflation modérée et stable est-elle généralement préférée par les banques centrales à une inflation nulle ou une déflation ?',
        options: [
          'Une inflation modérée laisse une marge de manœuvre à la politique monétaire et évite les effets négatifs de la déflation sur la consommation et l’investissement',
          'Une inflation nulle est toujours l’objectif prioritaire des banques centrales',
          'La déflation est toujours plus favorable à la croissance économique',
          'Cela n’a aucune importance pour les banques centrales',
        ],
        correctIndex: 0,
        explanation:
          'Une cible d’inflation modérée (autour de 2%) offre une marge de manœuvre à la politique monétaire et évite les effets pervers de la déflation (report des achats, spirale déflationniste).',
      },
      {
        id: 'q5',
        question: 'Le concept d’"anticipations d’inflation" des agents économiques influence-t-il réellement l’inflation future ?',
        options: [
          'Oui, si les acteurs économiques anticipent une inflation durable, ils ajustent prix et salaires en conséquence, ce qui peut auto-réaliser cette anticipation',
          'Non, les anticipations n’ont jamais aucun effet réel sur l’inflation',
          'Non, seule la politique monétaire détermine l’inflation, indépendamment des anticipations',
          'Cela ne concerne que les marchés financiers, jamais l’économie réelle',
        ],
        correctIndex: 0,
        explanation:
          'Les anticipations d’inflation influencent les comportements de fixation des prix et des salaires, pouvant contribuer à ancrer ou à alimenter l’inflation future de façon auto-réalisatrice.',
      },
      {
        id: 'q6',
        question: 'Pourquoi la crédibilité d’une banque centrale est-elle considérée comme un outil de lutte contre l’inflation à part entière ?',
        options: [
          'Une banque centrale crédible ancre mieux les anticipations d’inflation des agents économiques, facilitant la maîtrise des prix sans mesures aussi drastiques',
          'La crédibilité n’a aucun lien avec la maîtrise de l’inflation',
          'Seul le niveau des taux directeurs compte, la crédibilité est sans effet',
          'Cela ne concerne que les pays hors zone euro',
        ],
        correctIndex: 0,
        explanation:
          'Une banque centrale jugée crédible ancre plus facilement les anticipations d’inflation des acteurs économiques, ce qui facilite la maîtrise des prix avec des mesures moins drastiques.',
      },
    ],
  },
  'cac40-niv2': {
    id: 'cac40-niv2',
    moduleId: 'economie-francaise',
    title: 'Le CAC 40 — Niveau 2',
    emoji: '📈',
    xp: 30,
    intro:
      'Approfondissons : pondération par flottant, méthode de calcul de l’indice, et différence avec le ' +
      'CAC 40 GR (dividendes réinvestis).',
    questions: [
      {
        id: 'q1',
        question: 'Qu’est-ce que la pondération par flottant utilisée pour calculer le poids de chaque entreprise dans le CAC 40 ?',
        options: [
          'Seule la part du capital réellement disponible en bourse (hors participations stables) est prise en compte',
          'Chaque entreprise pèse exactement le même poids dans l’indice',
          'Le poids est fixé arbitrairement chaque année par un vote',
          'Seul le chiffre d’affaires détermine la pondération',
        ],
        correctIndex: 0,
        explanation:
          'La pondération par flottant ne retient que la part du capital effectivement échangeable en bourse, excluant les participations stables (État, famille fondatrice...) non disponibles à l’échange.',
      },
      {
        id: 'q2',
        question: 'Quelle est la différence entre le CAC 40 "classique" et le CAC 40 GR (Gross Return) ?',
        options: [
          'Le CAC 40 GR intègre le réinvestissement fictif des dividendes versés, contrairement à l’indice classique',
          'Le CAC 40 GR exclut certaines entreprises du calcul',
          'Il n’existe aucune différence réelle entre les deux',
          'Le CAC 40 GR ne concerne que les obligations',
        ],
        correctIndex: 0,
        explanation:
          'Le CAC 40 GR suppose le réinvestissement des dividendes versés par les entreprises, offrant une image plus complète de la performance totale pour un investisseur.',
      },
      {
        id: 'q3',
        question: 'La performance affichée du CAC 40 "prix" (hors dividendes) sous-estime-t-elle la performance réelle pour un investisseur qui perçoit les dividendes ?',
        options: [
          'Oui, car les dividendes perçus et éventuellement réinvestis ajoutent un rendement non reflété dans l’indice prix',
          'Non, l’indice prix inclut déjà tous les dividendes',
          'Non, les dividendes n’ont aucun impact sur la performance totale',
          'Cela ne concerne que les obligations d’État',
        ],
        correctIndex: 0,
        explanation:
          'L’indice CAC 40 "prix" ne reflète que l’évolution des cours, sans les dividendes versés, qui constituent pourtant une part significative du rendement total pour un actionnaire.',
      },
      {
        id: 'q4',
        question: 'Un comité d’experts révise-t-il périodiquement la composition du CAC 40 selon des critères objectifs ?',
        options: [
          'Oui, un conseil scientifique des indices révise régulièrement la composition selon la capitalisation flottante et la liquidité',
          'Non, la composition est figée depuis la création de l’indice',
          'Non, la composition est décidée par un vote des actionnaires de chaque entreprise',
          'La composition change tous les jours de façon aléatoire',
        ],
        correctIndex: 0,
        explanation:
          'Un comité d’experts (conseil scientifique des indices) évalue périodiquement les entreprises éligibles selon des critères objectifs de capitalisation flottante et de liquidité.',
      },
      {
        id: 'q5',
        question: 'Le poids d’une entreprise dans le CAC 40 peut-il évoluer entre deux révisions, sans changement de composition ?',
        options: [
          'Oui, car son poids dépend de sa capitalisation flottante qui varie avec le cours de bourse au quotidien',
          'Non, le poids de chaque entreprise reste fixe entre deux révisions',
          'Non, seul le nombre d’entreprises peut varier, jamais leur poids',
          'Le poids ne dépend que du secteur d’activité',
        ],
        correctIndex: 0,
        explanation:
          'Le poids de chaque entreprise fluctue quotidiennement avec l’évolution de son cours de bourse et donc de sa capitalisation flottante, sans attendre une révision de composition.',
      },
      {
        id: 'q6',
        question: 'Un ETF répliquant le CAC 40 "prix" verse-t-il généralement les dividendes perçus à l’investisseur, ou les réinvestit-il ?',
        options: [
          'Cela dépend du type d’ETF choisi : certains distribuent les dividendes, d’autres les capitalisent automatiquement',
          'Un ETF ne perçoit jamais de dividendes',
          'Tous les ETF CAC 40 versent obligatoirement les dividendes',
          'Tous les ETF CAC 40 réinvestissent obligatoirement les dividendes',
        ],
        correctIndex: 0,
        explanation:
          'Selon sa nature (capitalisant ou distribuant), un ETF répliquant le CAC 40 peut soit reverser les dividendes à l’investisseur, soit les réinvestir automatiquement dans le fonds.',
      },
    ],
  },
  'cac40-niv3': {
    id: 'cac40-niv3',
    moduleId: 'economie-francaise',
    title: 'Le CAC 40 — Niveau 3',
    emoji: '📈',
    xp: 40,
    intro:
      'Niveau expert : limites du CAC 40 comme baromètre économique, concentration sectorielle, et ' +
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
}

export function getLessonById(lessonId) {
  return LESSONS[lessonId]
}
