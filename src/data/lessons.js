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
