interface Question {
  id: number;
  label: string;
  answers: string[];
}

interface Result {
  label: string;
  description: string;
}

interface Quiz {
  title: string;
  slug: string;
  src: string;
  label: string;
  description: string;
  questions: Question[];
  results: Result[];
}

// Quiz data in TypeScript format
const quizzes: Quiz[] = [
  {
    title: "Pokemon",
    slug: "pokemon",
    src: require(`../assets/images/quiz-icon/pokemon.png`),
    label: "Quel Pokémon es-tu ?",
    description:
      "Découvre quel Pokémon correspond le mieux à ta personnalité en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel environnement te plaît le plus ?",
        answers: ["Océan", "Montagne", "Forêt", "Ville"],
      },
      {
        id: 2,
        label: "Quelle est ta principale qualité ?",
        answers: ["Calme", "Passionné", "Protecteur", "Indépendant"],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps favori ?",
        answers: ["Nager", "Explorer", "Jardiner", "Jouer à des jeux"],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande peur ?",
        answers: ["Perdre mes amis", "L'échec", "La solitude", "L'ennui"],
      },
    ],
    results: [
      {
        label: "Bulbizarre",
        description:
          "Tu es Bulbizarre, un Pokémon de type plante. Tu es calme et posé, très attaché à la nature. Tu aimes te reposer dans les forêts et tu apprécies la tranquillité. Ta loyauté envers tes amis et ta capacité à rester serein en font un compagnon de valeur.",
      },
      {
        label: "Salamèche",
        description:
          "Tu es Salamèche, un Pokémon de type feu. Dynamique et aventureux, tu n'as pas peur de te lancer dans de nouvelles aventures. Ton courage et ta détermination sont tes plus grandes forces, et tu es toujours prêt à te battre pour ce en quoi tu crois.",
      },
      {
        label: "Carapuce",
        description:
          "Tu es Carapuce, un Pokémon de type eau. Calme et détendu, tu aimes te relaxer près de l'eau. Ta nature protectrice et ta loyauté envers tes amis font de toi un allié précieux. Tu es toujours prêt à aider et à soutenir ceux qui comptent pour toi.",
      },
      {
        label: "Pikachu",
        description:
          "Tu es Pikachu, un Pokémon de type électrique. Malin et joueur, tu aimes te divertir et faire des blagues. Tu chéris ta liberté et n'aimes pas recevoir des ordres. Ton esprit vif et ton indépendance te rendent unique et attachant.",
      },
    ],
  },
  {
    title: "Harry Potter",
    slug: "harry-potter",
    src: require(`../assets/images/quiz-icon/harry-potter.png`),
    label: "Quel personnage d'Harry Potter es-tu ?",
    description:
      "Découvre quel personnage d'Harry Potter reflète le mieux ta personnalité en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton trait de caractère dominant ?",
        answers: ["Courageux", "Intelligent", "Loyal", "Ambitieux"],
      },
      {
        id: 2,
        label: "Quelle matière préfères-tu à Poudlard ?",
        answers: [
          "Défense contre les forces du Mal",
          "Sortilèges",
          "Potions",
          "Soins aux créatures magiques",
        ],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps préféré ?",
        answers: [
          "Lire",
          "Jouer au Quidditch",
          "Explorer",
          "Travailler sur des projets personnels",
        ],
      },
      {
        id: 4,
        label: "Quel type d'amis préfères-tu avoir ?",
        answers: [
          "Des amis courageux",
          "Des amis brillants",
          "Des amis fidèles",
          "Des amis ambitieux",
        ],
      },
    ],
    results: [
      {
        label: "Harry Potter",
        description:
          "Tu es Harry Potter, un sorcier au courage inébranlable. Tu es prêt à tout pour protéger tes amis et affronter les défis. Ton sens de l'aventure et ton désir de justice te définissent.",
      },
      {
        label: "Hermione Granger",
        description:
          "Tu es Hermione Granger, une sorcière dotée d'une intelligence exceptionnelle. Curieuse et déterminée, tu es toujours à la recherche de nouvelles connaissances. Ton courage et ta loyauté envers tes amis te rendent indispensable.",
      },
      {
        label: "Ron Weasley",
        description:
          "Tu es Ron Weasley, un ami loyal et courageux. Toujours prêt à soutenir tes proches, tu es un pilier de confiance. Ta capacité à faire face aux défis avec détermination fait de toi un véritable héros.",
      },
      {
        label: "Draco Malfoy",
        description:
          "Tu es Draco Malfoy, un sorcier ambitieux et déterminé. Prêt à tout pour atteindre tes objectifs, tu fais preuve de courage et de ruse. Ton ambition te pousse à toujours viser plus haut.",
      },
    ],
  },
  {
    title: "Star Wars",
    slug: "star-wars",
    src: require(`../assets/images/quiz-icon/star-wars.png`),
    label: "Quel personnage de Star Wars es-tu ?",
    description:
      "Découvre quel personnage de Star Wars correspond le mieux à ta personnalité en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton trait de caractère principal ?",
        answers: ["Courageux", "Ambitieux", "Loyal", "Rêveur"],
      },
      {
        id: 2,
        label: "Quelle est ta qualité préférée chez un ami ?",
        answers: ["Bravoure", "Ambition", "Fidélité", "Indépendance"],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps préféré ?",
        answers: [
          "Explorer de nouveaux mondes",
          "Développer des stratégies",
          "Aider les autres",
          "Chercher la connaissance",
        ],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande peur ?",
        answers: [
          "Perdre des proches",
          "Échouer dans mes ambitions",
          "Être trahi",
          "Ne pas trouver ma place",
        ],
      },
    ],
    results: [
      {
        label: "Luke Skywalker",
        description:
          "Tu es Luke Skywalker, un Jedi au courage remarquable. Tu es prêt à affronter tous les défis pour protéger ceux que tu aimes. Ta bravoure et ton dévouement font de toi un véritable leader.",
      },
      {
        label: "Dark Vador",
        description:
          "Tu es Dark Vador, un Sith puissant et déterminé. Prêt à tout pour atteindre tes objectifs, tu fais preuve de force et de ruse. Ta volonté inébranlable et ton ambition te définissent.",
      },
      {
        label: "Leia Organa",
        description:
          "Tu es Leia Organa, une leader courageuse et déterminée. Toujours prête à défendre ce en quoi tu crois, tu es un modèle de bravoure et de fidélité. Ton dévouement à tes amis et à ta cause est sans égal.",
      },
      {
        label: "Kylo Ren",
        description:
          "Tu es Kylo Ren, un personnage complexe et ambitieux. Prêt à tout pour atteindre tes fins, tu es à la fois puissant et déterminé. Ton parcours est marqué par une quête incessante de pouvoir et de reconnaissance.",
      },
    ],
  },
  {
    title: "Animal totem",
    slug: "animal",
    src: require(`../assets/images/quiz-icon/animal.png`),
    label: "Quel animal totem es-tu ?",
    description:
      "Découvre quel animal totem reflète le mieux ta personnalité en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quelle est ta qualité principale ?",
        answers: ["Courage", "Sagesse", "Force", "Agilité"],
      },
      {
        id: 2,
        label: "Quel environnement préfères-tu ?",
        answers: ["Forêt", "Montagne", "Océan", "Désert"],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps favori ?",
        answers: ["Explorer", "Méditer", "Chasser", "Jouer"],
      },
      {
        id: 4,
        label: "Quel est ton plus grand rêve ?",
        answers: [
          "Aider les autres",
          "Atteindre la paix intérieure",
          "Devenir plus fort",
          "Être libre",
        ],
      },
    ],
    results: [
      {
        label: "Loup",
        description:
          "Tu es le Loup, symbole de courage et de fidélité. Tu es protecteur envers ceux que tu aimes et tu es prêt à affronter les défis avec bravoure. Ton esprit d'équipe et ta loyauté sont inégalés.",
      },
      {
        label: "Aigle",
        description:
          "Tu es l'Aigle, symbole de sagesse et de vision. Tu as une perspective claire de la vie et tu cherches constamment à atteindre de nouveaux sommets. Ta sagesse et ta capacité à voir au-delà des apparences font de toi un guide naturel.",
      },
      {
        label: "Ours",
        description:
          "Tu es l'Ours, symbole de force et de protection. Tu es une figure d'autorité et de respect. Ta force intérieure et ta capacité à protéger ceux qui te sont chers font de toi un leader naturel.",
      },
      {
        label: "Dauphin",
        description:
          "Tu es le Dauphin, symbole d'agilité et de joie. Tu es joueur et sociable, aimant partager des moments de bonheur avec les autres. Ton agilité mentale et physique te permet de t'adapter rapidement à toutes les situations.",
      },
    ],
  },
  {
    title: "Panneau de signalisation",
    slug: "road-sign",
    src: require(`../assets/images/quiz-icon/road-sign.png`),
    label: "Quel panneau de signalisation es-tu ?",
    description:
      "Découvre quel panneau de signalisation correspond le mieux à ta personnalité en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Comment réagis-tu face à un problème ?",
        answers: [
          "De manière directe",
          "Avec prudence",
          "En avertissant les autres",
          "En posant des règles claires",
        ],
      },
      {
        id: 2,
        label: "Quel environnement préfères-tu ?",
        answers: ["Ville", "Campagne", "Montagne", "Autoroute"],
      },
      {
        id: 3,
        label: "Quelle est ta principale qualité ?",
        answers: ["Clarté", "Patience", "Attention", "Organisation"],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande peur ?",
        answers: [
          "Être ignoré",
          "La précipitation",
          "Le danger",
          "Le désordre",
        ],
      },
    ],
    results: [
      {
        label: "Stop",
        description:
          "Tu es le panneau Stop, direct et autoritaire. Tu sais prendre des décisions claires et tu fais en sorte que les autres respectent les règles. Ta fermeté et ton sens de la sécurité sont essentiels.",
      },
      {
        label: "Cédez le passage",
        description:
          "Tu es le panneau Cédez le passage, prudent et réfléchi. Tu préfères observer avant d'agir et tu valorises la courtoisie. Ton approche mesurée aide à éviter les conflits.",
      },
      {
        label: "Attention travaux",
        description:
          "Tu es le panneau Attention travaux, attentif et prévoyant. Tu mets en garde les autres contre les dangers potentiels et tu es toujours prêt à aider. Ta vigilance est appréciée de tous.",
      },
      {
        label: "Sens interdit",
        description:
          "Tu es le panneau Sens interdit, strict et encadrant. Tu imposes des limites claires et tu fais en sorte que tout soit en ordre. Ta capacité à maintenir la discipline est inestimable.",
      },
    ],
  },
  {
    title: "Insecte",
    slug: "insect",
    src: require(`../assets/images/quiz-icon/insect.png`),
    label: "Quel insecte es-tu ?",
    description:
      "Découvre quel insecte reflète le mieux ta personnalité en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton trait de caractère dominant ?",
        answers: ["Travailleur", "Indépendant", "Social", "Créatif"],
      },
      {
        id: 2,
        label: "Quelle est ta qualité préférée chez un ami ?",
        answers: ["Loyauté", "Liberté", "Esprit d'équipe", "Ingéniosité"],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps favori ?",
        answers: [
          "Travailler sur des projets",
          "Explorer",
          "Passer du temps avec des amis",
          "Créer des choses",
        ],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande peur ?",
        answers: [
          "L'échec",
          "La solitude",
          "Les conflits",
          "Le manque de créativité",
        ],
      },
    ],
    results: [
      {
        label: "Abeille",
        description:
          "Tu es une Abeille, symbole de travail acharné et de communauté. Tu es dévoué à tes tâches et tu travailles bien en équipe. Ton engagement et ta discipline te rendent essentiel.",
      },
      {
        label: "Papillon",
        description:
          "Tu es un Papillon, représentant la liberté et la transformation. Tu apprécies l'exploration et les nouvelles expériences. Ton esprit libre et ta beauté intérieure inspirent les autres.",
      },
      {
        label: "Fourmi",
        description:
          "Tu es une Fourmi, symbole de travail collectif et de persévérance. Tu es organisé et déterminé, toujours prêt à contribuer au succès de ton groupe. Ta discipline et ton dévouement sont admirables.",
      },
      {
        label: "Coccinelle",
        description:
          "Tu es une Coccinelle, porte-bonheur et créativité. Tu es ingénieux et tu apportes de la joie autour de toi. Ta capacité à trouver des solutions créatives aux problèmes est précieuse.",
      },
    ],
  },
  {
    title: "Dinosaure",
    slug: "dinosaur",
    src: require(`../assets/images/quiz-icon/dinosaur.png`),
    label: "Quel dinosaure es-tu ?",
    description:
      "Découvre quel dinosaure correspond le mieux à ta personnalité en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton trait de caractère principal ?",
        answers: ["Puissant", "Rapide", "Intelligent", "Protecteur"],
      },
      {
        id: 2,
        label: "Quel est ton passe-temps favori ?",
        answers: [
          "Explorer",
          "Courir",
          "Résoudre des énigmes",
          "Protéger les autres",
        ],
      },
      {
        id: 3,
        label: "Quelle est ta principale qualité ?",
        answers: ["Force", "Vitesse", "Intelligence", "Loyauté"],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande peur ?",
        answers: ["La faiblesse", "La lenteur", "L'ignorance", "La trahison"],
      },
    ],
    results: [
      {
        label: "Tyrannosaurus Rex",
        description:
          "Tu es le Tyrannosaurus Rex, puissant et dominant. Ta force et ta présence imposante te placent naturellement en position de leader. Ton courage et ta détermination te rendent redoutable.",
      },
      {
        label: "Velociraptor",
        description:
          "Tu es le Velociraptor, rapide et agile. Ton intelligence et ta vitesse te permettent de résoudre des problèmes rapidement et d'agir avec précision. Ta ruse et ton esprit vif te rendent unique.",
      },
      {
        label: "Triceratops",
        description:
          "Tu es le Triceratops, protecteur et loyal. Ta nature défensive et ton attachement à tes proches font de toi un gardien dévoué. Ta loyauté et ta force intérieure sont admirables.",
      },
      {
        label: "Brachiosaurus",
        description:
          "Tu es le Brachiosaurus, majestueux et pacifique. Ta taille imposante et ta nature paisible en font un être respecté. Ta sagesse et ta bienveillance sont appréciées de tous.",
      },
    ],
  },
  {
    title: "Plante",
    slug: "plant",
    src: require(`../assets/images/quiz-icon/plant.png`),
    label: "Quelle plante es-tu ?",
    description:
      "Découvre quelle plante correspond le mieux à ta personnalité en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel environnement préfères-tu ?",
        answers: ["Forêt", "Désert", "Jardin", "Prairie"],
      },
      {
        id: 2,
        label: "Quelle est ta principale qualité ?",
        answers: ["Résilience", "Beauté", "Pragmatisme", "Simplicité"],
      },
      {
        id: 3,
        label: "Comment fais-tu face aux défis ?",
        answers: [
          "Avec détermination",
          "Avec grâce",
          "Avec ingéniosité",
          "Avec calme",
        ],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande aspiration ?",
        answers: [
          "Prospérer",
          "Embellir le monde",
          "Innover",
          "Apporter la paix",
        ],
      },
    ],
    results: [
      {
        label: "Cactus",
        description:
          "Tu es un Cactus, symbole de résilience et de survie. Tu es capable de prospérer dans des conditions difficiles et tu es indépendant. Ta capacité à te protéger et à t'adapter est remarquable.",
      },
      {
        label: "Rose",
        description:
          "Tu es une Rose, symbole de beauté et de passion. Tu apportes de la beauté et de la joie autour de toi, tout en étant capable de te défendre. Ta grâce et ton allure élégante sont admirées.",
      },
      {
        label: "Bambou",
        description:
          "Tu es un Bambou, symbole de pragmatisme et de flexibilité. Tu es adaptable et tu sais te plier sans te briser. Ton approche pratique et ta capacité à croître rapidement te distinguent.",
      },
      {
        label: "Marguerite",
        description:
          "Tu es une Marguerite, symbole de simplicité et de paix. Tu apportes de la joie et de la tranquillité partout où tu vas. Ta nature simple et ta beauté discrète sont apaisantes.",
      },
    ],
  },
  {
    title: "Ville de France",
    slug: "french-city",
    src: require(`../assets/images/quiz-icon/city.png`),
    label: "Quelle ville de France es-tu ?",
    description:
      "Découvre quelle ville de France correspond le mieux à ta personnalité en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel type de paysage préfères-tu ?",
        answers: ["Mer", "Montagne", "Ville", "Campagne"],
      },
      {
        id: 2,
        label: "Quel est ton style de vie idéal ?",
        answers: ["Actif", "Tranquille", "Culturel", "Gastronomique"],
      },
      {
        id: 3,
        label: "Quelle est ta principale qualité ?",
        answers: ["Dynamisme", "Sérénité", "Érudition", "Gourmandise"],
      },
      {
        id: 4,
        label: "Quel est ton loisir préféré ?",
        answers: [
          "Faire du shopping",
          "Randonnée",
          "Visiter des musées",
          "Déguster de la cuisine",
        ],
      },
    ],
    results: [
      {
        label: "Paris",
        description:
          "Tu es Paris, la ville dynamique et cosmopolite. Tu aimes l'effervescence, les activités culturelles et la diversité. Ton énergie et ton amour pour la culture te rendent unique.",
      },
      {
        label: "Annecy",
        description:
          "Tu es Annecy, la ville paisible et pittoresque. Tu apprécies la nature et la tranquillité, et tu te sens chez toi près des montagnes et des lacs. Ta sérénité et ta beauté naturelle sont inspirantes.",
      },
      {
        label: "Lyon",
        description:
          "Tu es Lyon, la ville culturelle et gourmande. Tu combines un riche héritage historique avec une passion pour la gastronomie. Ton savoir-faire et ton goût pour les bonnes choses sont remarquables.",
      },
      {
        label: "Bordeaux",
        description:
          "Tu es Bordeaux, la ville élégante et sophistiquée. Tu apprécies le bon vin, l'architecture élégante et un mode de vie raffiné. Ta classe et ton goût pour les plaisirs de la vie sont exemplaires.",
      },
    ],
  },
  {
    title: "Boisson chaude",
    slug: "hot-drink",
    src: require(`../assets/images/quiz-icon/hot-drink.png`),
    label: "Quelle boisson chaude es-tu ?",
    description:
      "Découvre quelle boisson chaude correspond le mieux à ta personnalité en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton moment préféré de la journée ?",
        answers: ["Matin", "Après-midi", "Soir", "Nuit"],
      },
      {
        id: 2,
        label: "Quelle est ta principale qualité ?",
        answers: ["Énergie", "Calme", "Confort", "Originalité"],
      },
      {
        id: 3,
        label: "Quel est ton lieu idéal pour te détendre ?",
        answers: ["Café", "Salon", "Terrasse", "Parc"],
      },
      {
        id: 4,
        label: "Quel est ton passe-temps favori ?",
        answers: [
          "Lire",
          "Méditer",
          "Discuter avec des amis",
          "Créer quelque chose",
        ],
      },
    ],
    results: [
      {
        label: "Café",
        description:
          "Tu es le Café, énergique et stimulant. Tu aimes commencer ta journée avec dynamisme et tu es toujours prêt à te lancer dans de nouvelles aventures. Ton énergie et ta vivacité sont contagieuses.",
      },
      {
        label: "Thé",
        description:
          "Tu es le Thé, calme et apaisant. Tu apprécies les moments de tranquillité et tu sais prendre le temps de te détendre. Ta capacité à apporter du calme et de la sérénité est précieuse.",
      },
      {
        label: "Chocolat chaud",
        description:
          "Tu es le Chocolat chaud, réconfortant et doux. Tu aimes apporter du confort et du bien-être à ceux qui t'entourent. Ta chaleur et ta douceur font de toi une personne très aimée.",
      },
      {
        label: "Tisane",
        description:
          "Tu es la Tisane, originale et bienveillante. Tu apprécies les moments de détente et tu aimes prendre soin de toi et des autres. Ton côté naturel et attentionné est très apprécié.",
      },
    ],
  },
];

export default quizzes;
