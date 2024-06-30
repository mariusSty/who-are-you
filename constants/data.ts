interface Answer {
  label: string;
  score: number[];
}
export interface Question {
  id: number;
  label: string;
  answers: Answer[];
}

export interface Result {
  label: string;
  description: string;
  src?: string;
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
        answers: [
          { label: "Océan", score: [5, 0, 4, 9] },
          { label: "Montagne", score: [0, 7, 3, 2] },
          { label: "Forêt", score: [4, 3, 6, 1] },
          { label: "Ville", score: [9, 2, 1, 8] },
        ],
      },
      {
        id: 2,
        label: "Quelle est ta principale qualité ?",
        answers: [
          { label: "Force", score: [3, 2, 9, 7] },
          { label: "Vitesse", score: [3, 1, 2, 7] },
          { label: "Intelligence", score: [9, 8, 6, 5] },
          { label: "Agilité", score: [9, 8, 6, 5] },
        ],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps favori ?",
        answers: [
          { label: "Combattre", score: [9, 0, 3, 6] },
          { label: "Courir", score: [0, 7, 5, 2] },
          { label: "Apprendre", score: [4, 3, 6, 1] },
          { label: "Jouer", score: [9, 2, 1, 8] },
        ],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande peur ?",
        answers: [
          { label: "L'échec", score: [3, 2, 9, 7] },
          { label: "La solitude", score: [3, 1, 2, 7] },
          { label: "Les conflits", score: [9, 8, 6, 5] },
          { label: "Le manque de créativité", score: [9, 8, 6, 5] },
        ],
      },
      {
        id: 5,
        label: "Quel type de nourriture préfères-tu ?",
        answers: [
          { label: "Fruits et légumes", score: [4, 2, 5, 1] },
          { label: "Viande", score: [7, 9, 3, 2] },
          { label: "Poisson", score: [3, 5, 9, 4] },
          { label: "Sucreries", score: [8, 1, 2, 7] },
        ],
      },
      {
        id: 6,
        label: "Quel est ton style de combat préféré ?",
        answers: [
          { label: "Stratégie", score: [6, 7, 8, 3] },
          { label: "Force brute", score: [9, 5, 2, 4] },
          { label: "Vitesse et agilité", score: [3, 9, 5, 7] },
          { label: "Endurance", score: [4, 3, 6, 2] },
        ],
      },
      {
        id: 7,
        label: "Quelle activité te relaxe le plus ?",
        answers: [
          { label: "Méditer", score: [4, 6, 3, 2] },
          { label: "Nager", score: [3, 1, 9, 5] },
          { label: "Marcher en forêt", score: [5, 4, 7, 1] },
          { label: "Regarder un film", score: [6, 2, 1, 8] },
        ],
      },
      {
        id: 8,
        label: "Comment réagis-tu face à un défi ?",
        answers: [
          { label: "Je fonce sans hésiter", score: [9, 5, 2, 7] },
          { label: "Je planifie chaque étape", score: [3, 9, 6, 2] },
          { label: "Je cherche de l'aide", score: [2, 3, 7, 5] },
          { label: "Je prends du recul pour réfléchir", score: [4, 6, 5, 1] },
        ],
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
        src: require(`../assets/images/quiz-icon/carapuce.webp`),
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
    label: "Quel personnage de Harry Potter es-tu ?",
    description:
      "Découvre quel personnage de l'univers de Harry Potter te correspond le mieux en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton lieu préféré à Poudlard ?",
        answers: [
          { label: "La Grande Salle", score: [8, 3, 5, 2] },
          { label: "La Bibliothèque", score: [1, 9, 4, 6] },
          { label: "Le Terrain de Quidditch", score: [5, 2, 7, 8] },
          { label: "La Forêt Interdite", score: [2, 6, 8, 3] },
        ],
      },
      {
        id: 2,
        label: "Quelle est ta qualité la plus marquée ?",
        answers: [
          { label: "Courage", score: [9, 2, 4, 7] },
          { label: "Intelligence", score: [2, 9, 6, 5] },
          { label: "Loyauté", score: [7, 3, 9, 1] },
          { label: "Ambition", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps favori ?",
        answers: [
          { label: "Lire des livres", score: [1, 9, 3, 6] },
          { label: "Jouer au Quidditch", score: [6, 2, 8, 4] },
          { label: "Explorer des lieux", score: [8, 4, 7, 2] },
          { label: "Passer du temps avec des amis", score: [7, 3, 5, 9] },
        ],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande peur ?",
        answers: [
          { label: "La trahison", score: [4, 7, 9, 2] },
          { label: "L'échec", score: [5, 2, 6, 8] },
          { label: "La solitude", score: [7, 3, 2, 9] },
          { label: "Le manque de pouvoir", score: [3, 6, 1, 8] },
        ],
      },
      {
        id: 5,
        label: "Quelle matière préfères-tu à Poudlard ?",
        answers: [
          { label: "Sortilèges", score: [9, 2, 4, 5] },
          { label: "Potions", score: [2, 6, 5, 9] },
          { label: "Défense contre les forces du Mal", score: [8, 3, 7, 4] },
          { label: "Histoire de la Magie", score: [1, 9, 6, 2] },
        ],
      },
      {
        id: 6,
        label: "Quel est ton animal fantastique préféré ?",
        answers: [
          { label: "Hippogriffe", score: [8, 4, 7, 3] },
          { label: "Sombral", score: [3, 6, 8, 9] },
          { label: "Phoenix", score: [9, 2, 5, 4] },
          { label: "Niffleur", score: [2, 5, 4, 6] },
        ],
      },
      {
        id: 7,
        label: "Comment décrirais-tu ton groupe d'amis ?",
        answers: [
          { label: "Soudé et loyal", score: [7, 3, 9, 2] },
          { label: "Intelligent et studieux", score: [2, 9, 5, 4] },
          { label: "Aventurier et audacieux", score: [8, 4, 6, 3] },
          { label: "Ambitieux et déterminé", score: [3, 6, 2, 9] },
        ],
      },
      {
        id: 8,
        label: "Quel est ton sortilège préféré ?",
        answers: [
          { label: "Expecto Patronum", score: [9, 2, 5, 6] },
          { label: "Expelliarmus", score: [8, 3, 7, 4] },
          { label: "Alohomora", score: [2, 5, 4, 9] },
          { label: "Wingardium Leviosa", score: [3, 6, 9, 2] },
        ],
      },
    ],
    results: [
      {
        label: "Harry Potter",
        description:
          "Tu es Harry Potter, le célèbre sorcier à la cicatrice en forme d'éclair. Courageux et déterminé, tu es toujours prêt à te battre pour ceux que tu aimes et pour ce qui est juste. Ton esprit de leader et ta bravoure font de toi un véritable héros.",
      },
      {
        label: "Hermione Granger",
        description:
          "Tu es Hermione Granger, la sorcière la plus intelligente de ta génération. Ta soif de connaissance et ton amour pour les livres sont sans égal. Toujours prête à aider tes amis avec des solutions ingénieuses, tu es un pilier de sagesse et de fiabilité.",
      },
      {
        label: "Ron Weasley",
        description:
          "Tu es Ron Weasley, le fidèle ami de Harry et Hermione. Loyal et courageux, tu es toujours prêt à soutenir tes amis, même dans les moments les plus difficiles. Ton sens de l'humour et ta capacité à détendre l'atmosphère font de toi un compagnon précieux.",
      },
      {
        label: "Drago Malefoy",
        description:
          "Tu es Drago Malefoy, le sorcier ambitieux de Serpentard. Connu pour ton ambition et ta détermination à atteindre tes objectifs, tu n'hésites pas à user de ruse pour arriver à tes fins. Ta volonté de réussir et ta fierté sont tes principales caractéristiques.",
      },
    ],
  },
  {
    title: "Star Wars",
    slug: "star-wars",
    src: require(`../assets/images/quiz-icon/star-wars.png`),
    label: "Quel personnage de Star Wars es-tu ?",
    description:
      "Découvre quel personnage de l'univers de Star Wars te correspond le mieux en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton lieu préféré dans l'univers de Star Wars ?",
        answers: [
          { label: "Tatooine", score: [5, 1, 8, 3] },
          { label: "Coruscant", score: [2, 9, 6, 5] },
          { label: "Endor", score: [7, 3, 5, 2] },
          { label: "Hoth", score: [3, 5, 1, 8] },
        ],
      },
      {
        id: 2,
        label: "Quelle est ta plus grande qualité ?",
        answers: [
          { label: "Courage", score: [9, 2, 4, 7] },
          { label: "Sagesse", score: [2, 9, 6, 5] },
          { label: "Loyauté", score: [7, 3, 9, 1] },
          { label: "Ambition", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps favori ?",
        answers: [
          { label: "Piloter un vaisseau", score: [7, 2, 9, 4] },
          { label: "Apprendre les arts Jedi", score: [1, 9, 3, 6] },
          { label: "Explorer la galaxie", score: [8, 4, 7, 2] },
          { label: "Passer du temps avec des amis", score: [6, 3, 5, 8] },
        ],
      },
      {
        id: 4,
        label: "Quel type de sabre laser préfères-tu ?",
        answers: [
          { label: "Bleu", score: [9, 3, 5, 2] },
          { label: "Vert", score: [3, 9, 2, 6] },
          { label: "Rouge", score: [5, 1, 8, 4] },
          { label: "Violet", score: [2, 6, 4, 9] },
        ],
      },
      {
        id: 5,
        label: "Quel rôle joues-tu dans un groupe ?",
        answers: [
          { label: "Leader", score: [9, 2, 4, 7] },
          { label: "Stratège", score: [2, 9, 6, 5] },
          { label: "Guerrier", score: [7, 3, 8, 1] },
          { label: "Médiateur", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 6,
        label: "Quel est ton vaisseau préféré ?",
        answers: [
          { label: "X-Wing", score: [8, 3, 5, 2] },
          { label: "Millennium Falcon", score: [3, 9, 2, 6] },
          { label: "TIE Fighter", score: [5, 1, 8, 4] },
          { label: "Star Destroyer", score: [2, 6, 4, 9] },
        ],
      },
      {
        id: 7,
        label: "Quelle est ta plus grande ambition ?",
        answers: [
          { label: "Ramener l'équilibre dans la Force", score: [9, 3, 2, 7] },
          { label: "Acquérir du pouvoir", score: [3, 9, 6, 5] },
          { label: "Protéger les innocents", score: [7, 4, 8, 2] },
          { label: "Explorer de nouveaux mondes", score: [2, 5, 3, 9] },
        ],
      },
      {
        id: 8,
        label: "Quelle est ta philosophie de vie ?",
        answers: [
          { label: "Toujours se battre pour le bien", score: [9, 2, 5, 7] },
          { label: "La connaissance est le pouvoir", score: [3, 9, 6, 4] },
          { label: "La loyauté avant tout", score: [2, 5, 9, 6] },
          { label: "Vivre pleinement chaque jour", score: [4, 7, 3, 8] },
        ],
      },
    ],
    results: [
      {
        label: "Luke Skywalker",
        description:
          "Tu es Luke Skywalker, le légendaire Jedi. Courageux et déterminé, tu as un fort sens de la justice et es prêt à tout pour protéger ceux que tu aimes. Ta quête de vérité et ton esprit de leader font de toi un véritable héros de la galaxie.",
      },
      {
        label: "Leia Organa",
        description:
          "Tu es Leia Organa, la princesse rebelle. Intelligente et courageuse, tu es une leader née. Ta détermination à lutter pour la liberté et ta capacité à inspirer les autres font de toi une figure emblématique de la Rébellion.",
      },
      {
        label: "Han Solo",
        description:
          "Tu es Han Solo, le contrebandier au grand cœur. Malin et indépendant, tu as un esprit aventureux et une attitude décontractée. Ta loyauté envers tes amis et ton courage en font un allié précieux dans n'importe quelle situation.",
      },
      {
        label: "Darth Vader",
        description:
          "Tu es Darth Vader, le seigneur Sith. Puissant et déterminé, tu es prêt à tout pour atteindre tes objectifs. Ta maîtrise du côté obscur de la Force et ta présence imposante te rendent aussi redoutable qu'influent.",
      },
    ],
  },
  {
    title: "Animal Totem",
    slug: "animal-totem",
    src: require(`../assets/images/quiz-icon/animal.png`),
    label: "Quel est ton animal totem ?",
    description:
      "Découvre quel animal totem te correspond le mieux en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton environnement préféré ?",
        answers: [
          { label: "Forêt", score: [8, 2, 5, 3] },
          { label: "Montagne", score: [3, 8, 2, 6] },
          { label: "Océan", score: [5, 1, 9, 4] },
          { label: "Désert", score: [2, 6, 4, 8] },
        ],
      },
      {
        id: 2,
        label: "Quelle qualité te décrit le mieux ?",
        answers: [
          { label: "Courage", score: [9, 3, 2, 7] },
          { label: "Sagesse", score: [3, 9, 6, 5] },
          { label: "Loyauté", score: [7, 4, 8, 2] },
          { label: "Agilité", score: [2, 5, 3, 9] },
        ],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps favori ?",
        answers: [
          { label: "Explorer la nature", score: [7, 3, 9, 2] },
          { label: "Méditer", score: [1, 9, 4, 5] },
          { label: "Nager", score: [6, 2, 8, 3] },
          { label: "Courir", score: [8, 4, 2, 7] },
        ],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande peur ?",
        answers: [
          { label: "L'échec", score: [4, 7, 9, 2] },
          { label: "La trahison", score: [5, 2, 6, 8] },
          { label: "La solitude", score: [7, 3, 2, 9] },
          { label: "Le manque de liberté", score: [3, 6, 1, 8] },
        ],
      },
      {
        id: 5,
        label: "Quel est ton type de relation préféré ?",
        answers: [
          { label: "Famille proche", score: [9, 3, 2, 7] },
          { label: "Petit groupe d'amis", score: [3, 9, 6, 5] },
          { label: "Communauté large", score: [7, 4, 8, 2] },
          { label: "Relations professionnelles", score: [2, 5, 3, 9] },
        ],
      },
      {
        id: 6,
        label: "Comment préfères-tu passer tes vacances ?",
        answers: [
          { label: "En randonnée", score: [7, 3, 9, 2] },
          { label: "Sur une plage", score: [1, 9, 4, 5] },
          { label: "À explorer des villes", score: [6, 2, 8, 3] },
          { label: "À la maison", score: [8, 4, 2, 7] },
        ],
      },
      {
        id: 7,
        label: "Quelle est ta source d'inspiration ?",
        answers: [
          { label: "La nature", score: [9, 3, 2, 7] },
          { label: "Les livres", score: [3, 9, 6, 5] },
          { label: "Les arts", score: [7, 4, 8, 2] },
          { label: "Les personnes autour de moi", score: [2, 5, 3, 9] },
        ],
      },
      {
        id: 8,
        label: "Comment gères-tu le stress ?",
        answers: [
          { label: "Exercice physique", score: [9, 2, 5, 7] },
          { label: "Méditation", score: [4, 9, 3, 5] },
          { label: "Discussions avec des amis", score: [2, 3, 8, 6] },
          { label: "Écouter de la musique", score: [5, 6, 2, 9] },
        ],
      },
    ],
    results: [
      {
        label: "Loup",
        description:
          "Tu es un Loup, un animal totem symbolisant la loyauté et le courage. Tu es un leader naturel et tu valorises fortement la famille et la meute. Ton esprit aventureux et ton instinct de protection font de toi un compagnon loyal et dévoué.",
      },
      {
        label: "Aigle",
        description:
          "Tu es un Aigle, un animal totem représentant la sagesse et la vision claire. Tu es capable de voir au-delà des apparences et de comprendre les vérités cachées. Ta perspicacité et ton esprit libre te permettent de naviguer avec sagesse à travers la vie.",
      },
      {
        label: "Dauphin",
        description:
          "Tu es un Dauphin, un animal totem symbolisant la joie et la communication. Sociable et intelligent, tu es connu pour ton esprit vif et ta capacité à établir des connexions profondes avec les autres. Ton énergie positive et ton amour pour la vie sont contagieux.",
      },
      {
        label: "Tigre",
        description:
          "Tu es un Tigre, un animal totem incarnant la puissance et la volonté. Fort et déterminé, tu es prêt à affronter n'importe quel défi avec courage. Ton indépendance et ta confiance en toi te rendent aussi majestueux qu'intimidant.",
      },
    ],
  },
  {
    title: "Panneau de Signalisation",
    slug: "panneau-signalisation",
    src: require(`../assets/images/quiz-icon/road-sign.png`),
    label: "Quel panneau de signalisation es-tu ?",
    description:
      "Découvre quel panneau de signalisation te correspond le mieux en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quelle qualité te décrit le mieux ?",
        answers: [
          { label: "Prudence", score: [9, 3, 2, 6] },
          { label: "Clarté", score: [2, 9, 6, 5] },
          { label: "Directivité", score: [7, 4, 8, 1] },
          { label: "Informativité", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 2,
        label: "Quelle est ta plus grande peur ?",
        answers: [
          { label: "L'inconnu", score: [4, 7, 9, 2] },
          { label: "L'ambiguïté", score: [5, 2, 6, 8] },
          { label: "Le chaos", score: [7, 3, 2, 9] },
          { label: "Le danger", score: [3, 6, 1, 8] },
        ],
      },
      {
        id: 3,
        label: "Comment réagis-tu face aux imprévus ?",
        answers: [
          { label: "Je m'adapte rapidement", score: [7, 3, 8, 2] },
          { label: "Je prends le temps de réfléchir", score: [5, 8, 2, 6] },
          { label: "Je demande de l'aide", score: [4, 1, 9, 3] },
          { label: "Je préfère éviter les imprévus", score: [2, 6, 4, 8] },
        ],
      },
      {
        id: 4,
        label: "Quel type de voyageur es-tu ?",
        answers: [
          { label: "Aventurier", score: [8, 3, 2, 7] },
          { label: "Planificateur", score: [3, 9, 5, 2] },
          { label: "Explorateur", score: [2, 5, 9, 4] },
          { label: "Relaxé", score: [6, 2, 4, 8] },
        ],
      },
      {
        id: 5,
        label: "Comment préfères-tu communiquer ?",
        answers: [
          { label: "Avec des mots clairs et précis", score: [9, 3, 2, 6] },
          { label: "Avec des images", score: [2, 9, 6, 5] },
          { label: "Avec des gestes", score: [7, 4, 8, 1] },
          { label: "Avec des exemples", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 6,
        label: "Quelle est ta priorité sur la route ?",
        answers: [
          { label: "La sécurité", score: [9, 2, 3, 6] },
          { label: "L'efficacité", score: [3, 9, 6, 5] },
          { label: "Le confort", score: [7, 4, 8, 1] },
          { label: "La rapidité", score: [2, 5, 3, 9] },
        ],
      },
      {
        id: 7,
        label: "Quel est ton rythme de vie ?",
        answers: [
          { label: "Rapide et dynamique", score: [8, 3, 5, 2] },
          { label: "Calme et posé", score: [3, 9, 2, 6] },
          { label: "Modéré et constant", score: [5, 1, 9, 4] },
          { label: "Variable selon les situations", score: [2, 6, 4, 8] },
        ],
      },
      {
        id: 8,
        label: "Quelle est ta devise ?",
        answers: [
          { label: "La sécurité avant tout", score: [9, 3, 2, 6] },
          { label: "Toujours en mouvement", score: [2, 9, 6, 5] },
          { label: "Clarté et précision", score: [7, 4, 8, 1] },
          { label: "Informé, c'est prêt", score: [3, 5, 2, 9] },
        ],
      },
    ],
    results: [
      {
        label: "Stop",
        description:
          "Tu es le panneau Stop, symbole de prudence et de clarté. Tu es quelqu'un qui aime s'assurer que tout se passe en toute sécurité et selon les règles. Ta capacité à faire preuve de détermination et à établir des limites claires fait de toi un guide fiable pour les autres.",
      },
      {
        label: "Cédez le passage",
        description:
          "Tu es le panneau Cédez le passage, symbole de respect et de diplomatie. Tu sais quand il est temps de laisser la priorité aux autres et de faire preuve de patience. Ton attitude accommodante et ta sagesse en matière de relations font de toi un médiateur précieux.",
      },
      {
        label: "Limite de vitesse",
        description:
          "Tu es le panneau Limite de vitesse, symbole de régulation et de modération. Tu sais trouver le juste milieu et établir des rythmes adaptés aux situations. Ta capacité à maintenir l'équilibre et à prévenir les excès est un atout majeur pour ceux qui t'entourent.",
      },
      {
        label: "Sens interdit",
        description:
          "Tu es le panneau Sens interdit, symbole d'autorité et de direction. Tu n'hésites pas à indiquer clairement ce qui est permis et ce qui ne l'est pas. Ta fermeté et ta clarté d'esprit permettent d'éviter les erreurs et de maintenir l'ordre.",
      },
    ],
  },
  {
    title: "Insecte",
    slug: "insecte",
    src: require(`../assets/images/quiz-icon/insect.png`),
    label: "Quel insecte es-tu ?",
    description:
      "Découvre quel insecte te correspond le mieux en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton habitat préféré ?",
        answers: [
          { label: "Forêt", score: [8, 2, 5, 3] },
          { label: "Jardin", score: [3, 8, 2, 6] },
          { label: "Prairie", score: [5, 1, 9, 4] },
          { label: "Désert", score: [2, 6, 4, 8] },
        ],
      },
      {
        id: 2,
        label: "Quelle qualité te décrit le mieux ?",
        answers: [
          { label: "Travailleur", score: [9, 2, 3, 6] },
          { label: "Adaptable", score: [3, 9, 6, 5] },
          { label: "Social", score: [7, 4, 8, 1] },
          { label: "Discret", score: [2, 5, 3, 9] },
        ],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps favori ?",
        answers: [
          { label: "Explorer la nature", score: [7, 3, 9, 2] },
          { label: "Travailler sur des projets", score: [1, 9, 4, 5] },
          { label: "Socialiser", score: [6, 2, 8, 3] },
          { label: "Se reposer", score: [8, 4, 2, 7] },
        ],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande peur ?",
        answers: [
          { label: "L'inconnu", score: [4, 7, 9, 2] },
          { label: "La trahison", score: [5, 2, 6, 8] },
          { label: "La solitude", score: [7, 3, 2, 9] },
          { label: "Le danger", score: [3, 6, 1, 8] },
        ],
      },
      {
        id: 5,
        label: "Quel est ton plat préféré ?",
        answers: [
          { label: "Feuilles", score: [8, 3, 5, 2] },
          { label: "Nectar", score: [3, 9, 2, 6] },
          { label: "Fruit", score: [5, 1, 9, 4] },
          { label: "Débris organiques", score: [2, 6, 4, 8] },
        ],
      },
      {
        id: 6,
        label: "Quelle est ta stratégie de défense ?",
        answers: [
          { label: "Morsure", score: [9, 2, 5, 6] },
          { label: "Camouflage", score: [2, 9, 4, 5] },
          { label: "Fuite rapide", score: [7, 4, 8, 1] },
          { label: "Carapace solide", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 7,
        label: "Quelle est ta méthode de communication ?",
        answers: [
          { label: "Phéromones", score: [8, 3, 2, 7] },
          { label: "Chants", score: [3, 9, 5, 2] },
          { label: "Danses", score: [2, 5, 9, 4] },
          { label: "Signaux lumineux", score: [6, 2, 4, 8] },
        ],
      },
      {
        id: 8,
        label: "Quel est ton type de climat préféré ?",
        answers: [
          { label: "Chaud et humide", score: [7, 3, 2, 9] },
          { label: "Tempéré", score: [3, 9, 5, 2] },
          { label: "Sec", score: [2, 5, 9, 4] },
          { label: "Froid", score: [6, 2, 4, 8] },
        ],
      },
    ],
    results: [
      {
        label: "Fourmi",
        description:
          "Tu es une Fourmi, symbole de travail acharné et de coopération. Tu es connu pour ton esprit d'équipe et ta détermination à accomplir des tâches difficiles. Ton sens de l'organisation et ta capacité à travailler en groupe font de toi un élément précieux.",
      },
      {
        label: "Papillon",
        description:
          "Tu es un Papillon, symbole de transformation et de beauté. Tu apportes de la couleur et de la joie partout où tu vas. Ta capacité à évoluer et à t'adapter aux changements est remarquable.",
      },
      {
        label: "Abeille",
        description:
          "Tu es une Abeille, symbole de productivité et de socialisation. Tu es toujours occupé à faire quelque chose d'utile. Ta nature sociable et ton dévouement à ta communauté font de toi un insecte indispensable.",
      },
      {
        label: "Scarabée",
        description:
          "Tu es un Scarabée, symbole de discrétion et de résilience. Tu sais te faire discret tout en étant capable de surmonter des obstacles importants. Ta persévérance et ta capacité à te fondre dans ton environnement sont tes plus grandes forces.",
      },
    ],
  },
  {
    title: "Dinosaure",
    slug: "dinosaure",
    src: require(`../assets/images/quiz-icon/dinosaur.png`),
    label: "Quel dinosaure es-tu ?",
    description:
      "Découvre quel dinosaure te correspond le mieux en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton habitat préféré ?",
        answers: [
          { label: "Forêt dense", score: [7, 3, 8, 2] },
          { label: "Plaines ouvertes", score: [5, 8, 2, 6] },
          { label: "Marécages", score: [4, 1, 9, 3] },
          { label: "Montagnes", score: [2, 6, 4, 8] },
        ],
      },
      {
        id: 2,
        label: "Quelle qualité te décrit le mieux ?",
        answers: [
          { label: "Force", score: [9, 2, 4, 7] },
          { label: "Intelligence", score: [3, 9, 6, 5] },
          { label: "Vitesse", score: [7, 4, 8, 1] },
          { label: "Résilience", score: [2, 5, 3, 9] },
        ],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps favori ?",
        answers: [
          { label: "Explorer", score: [7, 3, 9, 2] },
          { label: "Chasser", score: [1, 9, 4, 5] },
          { label: "Courir", score: [6, 2, 8, 3] },
          { label: "Se reposer", score: [8, 4, 2, 7] },
        ],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande peur ?",
        answers: [
          { label: "L'extinction", score: [4, 7, 9, 2] },
          { label: "La trahison", score: [5, 2, 6, 8] },
          { label: "La solitude", score: [7, 3, 2, 9] },
          { label: "Le danger", score: [3, 6, 1, 8] },
        ],
      },
      {
        id: 5,
        label: "Quel est ton plat préféré ?",
        answers: [
          { label: "Viande", score: [9, 2, 5, 7] },
          { label: "Poisson", score: [4, 9, 3, 5] },
          { label: "Plantes", score: [2, 3, 8, 6] },
          { label: "Fruits", score: [5, 6, 2, 9] },
        ],
      },
      {
        id: 6,
        label: "Quelle est ta stratégie de survie ?",
        answers: [
          { label: "Combat", score: [9, 2, 4, 7] },
          { label: "Fuite", score: [3, 8, 5, 2] },
          { label: "Camouflage", score: [4, 6, 9, 3] },
          { label: "Travail en groupe", score: [2, 7, 6, 8] },
        ],
      },
      {
        id: 7,
        label: "Quel est ton style de combat ?",
        answers: [
          { label: "Corps à corps", score: [9, 3, 4, 6] },
          { label: "Attaque rapide", score: [3, 8, 5, 2] },
          { label: "Défense", score: [4, 6, 9, 3] },
          { label: "Stratégie", score: [2, 7, 6, 8] },
        ],
      },
      {
        id: 8,
        label: "Quelle est ta méthode de communication ?",
        answers: [
          { label: "Rugissements", score: [9, 2, 5, 7] },
          { label: "Signaux visuels", score: [4, 9, 3, 5] },
          { label: "Odeurs", score: [2, 3, 8, 6] },
          { label: "Mouvements", score: [5, 6, 2, 9] },
        ],
      },
    ],
    results: [
      {
        label: "Tyrannosaure Rex",
        description:
          "Tu es le Tyrannosaure Rex, le roi des dinosaures. Puissant et redoutable, tu es un prédateur au sommet de la chaîne alimentaire. Ta force et ta détermination te rendent quasiment invincible.",
      },
      {
        label: "Vélociraptor",
        description:
          "Tu es un Vélociraptor, symbole d'intelligence et de vitesse. Agile et astucieux, tu es un chasseur redoutable. Ta capacité à travailler en équipe et ton esprit vif font de toi un dinosaure extrêmement efficace.",
      },
      {
        label: "Tricératops",
        description:
          "Tu es un Tricératops, symbole de résilience et de défense. Ton caractère pacifique est accompagné d'une capacité impressionnante à te défendre contre les prédateurs. Ta nature protectrice fait de toi un gardien fiable.",
      },
      {
        label: "Brachiosaure",
        description:
          "Tu es un Brachiosaure, symbole de grandeur et de calme. Ta grande taille et ta nature herbivore te permettent de dominer les paysages avec tranquillité. Ta patience et ta nature paisible font de toi un dinosaure majestueux.",
      },
    ],
  },
  {
    title: "Plante",
    slug: "plante",
    src: require(`../assets/images/quiz-icon/plant.png`),
    label: "Quelle plante es-tu ?",
    description:
      "Découvre quelle plante te correspond le mieux en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton environnement préféré ?",
        answers: [
          { label: "Forêt", score: [8, 2, 5, 3] },
          { label: "Jardin", score: [3, 8, 2, 6] },
          { label: "Prairie", score: [5, 1, 9, 4] },
          { label: "Désert", score: [2, 6, 4, 8] },
        ],
      },
      {
        id: 2,
        label: "Quelle qualité te décrit le mieux ?",
        answers: [
          { label: "Résilience", score: [9, 3, 2, 6] },
          { label: "Beauté", score: [2, 9, 6, 5] },
          { label: "Adaptabilité", score: [7, 4, 8, 1] },
          { label: "Simplicité", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps favori ?",
        answers: [
          { label: "Jardiner", score: [7, 3, 9, 2] },
          { label: "Méditer", score: [1, 9, 4, 5] },
          { label: "Observer la nature", score: [6, 2, 8, 3] },
          { label: "Lire des livres", score: [8, 4, 2, 7] },
        ],
      },
      {
        id: 4,
        label: "Quelle est ta plus grande peur ?",
        answers: [
          { label: "Le manque de lumière", score: [4, 7, 9, 2] },
          { label: "La sécheresse", score: [5, 2, 6, 8] },
          { label: "Les parasites", score: [7, 3, 2, 9] },
          { label: "L'abandon", score: [3, 6, 1, 8] },
        ],
      },
      {
        id: 5,
        label: "Quel type de lumière préfères-tu ?",
        answers: [
          { label: "Lumière directe", score: [8, 3, 2, 7] },
          { label: "Lumière indirecte", score: [3, 8, 5, 2] },
          { label: "Ombre partielle", score: [5, 1, 9, 4] },
          { label: "Ombre totale", score: [2, 6, 4, 8] },
        ],
      },
      {
        id: 6,
        label: "Quelle est ta saison préférée ?",
        answers: [
          { label: "Printemps", score: [9, 3, 5, 2] },
          { label: "Été", score: [2, 9, 6, 5] },
          { label: "Automne", score: [4, 7, 8, 3] },
          { label: "Hiver", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 7,
        label: "Comment te décrivent tes amis ?",
        answers: [
          { label: "Fidèle", score: [8, 3, 5, 2] },
          { label: "Inébranlable", score: [2, 9, 6, 4] },
          { label: "Rayonnant", score: [5, 2, 8, 7] },
          { label: "Mystérieux", score: [3, 6, 4, 9] },
        ],
      },
      {
        id: 8,
        label: "Quel est ton type de sol préféré ?",
        answers: [
          { label: "Sol argileux", score: [8, 3, 2, 7] },
          { label: "Sol sableux", score: [3, 8, 5, 2] },
          { label: "Sol limoneux", score: [5, 1, 9, 4] },
          { label: "Sol rocailleux", score: [2, 6, 4, 8] },
        ],
      },
    ],
    results: [
      {
        label: "Rose",
        description:
          "Tu es une Rose, symbole de beauté et de passion. Tu as une personnalité charmante et magnétique, attirant naturellement les autres vers toi. Ta capacité à fleurir même dans les conditions difficiles montre ta résilience et ta force intérieure.",
      },
      {
        label: "Chêne",
        description:
          "Tu es un Chêne, symbole de force et de sagesse. Tu es quelqu'un de solide et fiable, sur qui les autres peuvent toujours compter. Ta présence majestueuse et ta longévité font de toi un pilier dans ta communauté.",
      },
      {
        label: "Tournesol",
        description:
          "Tu es un Tournesol, symbole de positivité et de chaleur. Ton énergie rayonnante et ta joie de vivre illuminent la journée de ceux qui t'entourent. Tu es quelqu'un qui cherche toujours la lumière et apporte du bonheur aux autres.",
      },
      {
        label: "Cactus",
        description:
          "Tu es un Cactus, symbole de résilience et d'adaptabilité. Tu es capable de prospérer dans des environnements difficiles et de surmonter les défis avec facilité. Ta capacité à conserver de l'énergie et à te protéger des dangers montre ta sagesse et ton instinct de survie.",
      },
    ],
  },
  {
    title: "Ville de France",
    slug: "ville-france",
    src: require(`../assets/images/quiz-icon/city.png`),
    label: "Quelle ville de France es-tu ?",
    description:
      "Découvre quelle ville de France te correspond le mieux en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel type d'environnement préfères-tu ?",
        answers: [
          { label: "Plage", score: [5, 2, 8, 3] },
          { label: "Montagne", score: [2, 8, 3, 6] },
          { label: "Campagne", score: [7, 4, 5, 2] },
          { label: "Ville", score: [8, 3, 2, 9] },
        ],
      },
      {
        id: 2,
        label: "Quelle est ta principale qualité ?",
        answers: [
          { label: "Élégance", score: [9, 2, 5, 6] },
          { label: "Chaleur", score: [2, 9, 4, 5] },
          { label: "Sérénité", score: [7, 4, 8, 2] },
          { label: "Dynamisme", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 3,
        label: "Quelle activité préfères-tu ?",
        answers: [
          { label: "Visiter des musées", score: [9, 3, 5, 2] },
          { label: "Faire des randonnées", score: [2, 9, 4, 6] },
          { label: "Aller à la plage", score: [7, 4, 8, 3] },
          { label: "Faire du shopping", score: [8, 3, 2, 9] },
        ],
      },
      {
        id: 4,
        label: "Quel est ton plat préféré ?",
        answers: [
          { label: "Croissant", score: [4, 9, 7, 2] },
          { label: "Bouillabaisse", score: [5, 2, 6, 8] },
          { label: "Fondue", score: [7, 4, 2, 9] },
          { label: "Salade niçoise", score: [3, 6, 1, 8] },
        ],
      },
      {
        id: 5,
        label: "Quel type de climat préfères-tu ?",
        answers: [
          { label: "Ensoleillé", score: [5, 9, 2, 8] },
          { label: "Tempéré", score: [2, 7, 9, 3] },
          { label: "Montagneux", score: [3, 8, 6, 4] },
          { label: "Méditerranéen", score: [8, 3, 4, 5] },
        ],
      },
      {
        id: 6,
        label: "Quelle est ta boisson préférée ?",
        answers: [
          { label: "Vin", score: [9, 4, 7, 2] },
          { label: "Pastis", score: [3, 8, 5, 9] },
          { label: "Limonade", score: [5, 3, 9, 6] },
          { label: "Café", score: [4, 2, 6, 8] },
        ],
      },
      {
        id: 7,
        label: "Quel type de paysage préfères-tu ?",
        answers: [
          { label: "Côte rocheuse", score: [3, 7, 2, 9] },
          { label: "Collines verdoyantes", score: [2, 9, 4, 5] },
          { label: "Rivières et vallées", score: [5, 2, 8, 4] },
          { label: "Grandes plaines", score: [9, 3, 7, 6] },
        ],
      },
      {
        id: 8,
        label: "Quelle est ton activité du week-end préférée ?",
        answers: [
          { label: "Aller au marché", score: [5, 2, 9, 8] },
          { label: "Visiter des monuments historiques", score: [9, 3, 4, 5] },
          { label: "Faire du vélo", score: [4, 9, 2, 7] },
          { label: "Profiter de la plage", score: [3, 6, 5, 2] },
        ],
      },
    ],
    results: [
      {
        label: "Paris",
        description:
          "Tu es Paris, la ville lumière. Élégant et sophistiqué, tu apprécies la culture, l'art et l'histoire. Ton charme cosmopolite et ton amour pour les belles choses font de toi une personne raffinée et inspirante.",
      },
      {
        label: "Marseille",
        description:
          "Tu es Marseille, la cité phocéenne. Chaleureux et dynamique, tu aimes la mer et le soleil. Ta personnalité vibrante et ton esprit convivial font de toi un ami fidèle et accueillant.",
      },
      {
        label: "Lyon",
        description:
          "Tu es Lyon, la ville des Lumières. Sérénité et tradition te caractérisent. Tu apprécies la bonne cuisine et les moments de détente en famille. Ton équilibre entre modernité et tradition fait de toi une personne stable et fiable.",
      },
      {
        label: "Nice",
        description:
          "Tu es Nice, la perle de la Côte d'Azur. Dynamique et ensoleillé, tu aimes profiter de la vie en bord de mer. Ton énergie positive et ton goût pour les plaisirs simples te rendent unique et attachant.",
      },
    ],
  },
  {
    title: "Boisson Chaude",
    slug: "boisson-chaude",
    src: require(`../assets/images/quiz-icon/hot-drink.png`),
    label: "Quelle boisson chaude es-tu ?",
    description:
      "Découvre quelle boisson chaude te correspond le mieux en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Quel est ton moment préféré pour une boisson chaude ?",
        answers: [
          { label: "Matin", score: [9, 3, 2, 6] },
          { label: "Après-midi", score: [2, 9, 4, 5] },
          { label: "Soir", score: [7, 4, 8, 2] },
          { label: "Toute la journée", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 2,
        label: "Quelle est ta principale qualité ?",
        answers: [
          { label: "Énergie", score: [9, 2, 5, 6] },
          { label: "Sérénité", score: [2, 9, 4, 5] },
          { label: "Chaleur", score: [7, 4, 8, 2] },
          { label: "Confort", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 3,
        label: "Quel est ton passe-temps favori ?",
        answers: [
          { label: "Lire un livre", score: [5, 1, 8, 3] },
          { label: "Faire du sport", score: [2, 8, 4, 6] },
          { label: "Socialiser avec des amis", score: [7, 4, 5, 2] },
          { label: "Regarder des films", score: [8, 3, 2, 9] },
        ],
      },
      {
        id: 4,
        label: "Quelle saveur préfères-tu ?",
        answers: [
          { label: "Amer", score: [9, 2, 6, 3] },
          { label: "Doux", score: [4, 9, 5, 2] },
          { label: "Épicé", score: [6, 3, 8, 4] },
          { label: "Fruité", score: [2, 5, 3, 9] },
        ],
      },
      {
        id: 5,
        label: "Quelle est ton activité matinale préférée ?",
        answers: [
          { label: "Faire du jogging", score: [9, 2, 5, 6] },
          { label: "Lire les nouvelles", score: [2, 9, 4, 5] },
          { label: "Méditer", score: [7, 4, 8, 2] },
          { label: "Préparer un bon petit-déjeuner", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 6,
        label: "Quelle est ta destination de vacances idéale ?",
        answers: [
          { label: "Une ville animée", score: [9, 3, 2, 6] },
          { label: "Une retraite paisible", score: [2, 9, 4, 5] },
          { label: "Une plage ensoleillée", score: [7, 4, 8, 2] },
          { label: "Une cabane à la montagne", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 7,
        label: "Quel est ton type de film préféré ?",
        answers: [
          { label: "Action", score: [9, 3, 2, 6] },
          { label: "Comédie", score: [2, 9, 4, 5] },
          { label: "Drame", score: [7, 4, 8, 2] },
          { label: "Documentaire", score: [3, 5, 2, 9] },
        ],
      },
      {
        id: 8,
        label: "Quel accompagnement préfères-tu avec ta boisson chaude ?",
        answers: [
          { label: "Biscuit", score: [9, 3, 2, 6] },
          { label: "Tarte", score: [2, 9, 4, 5] },
          { label: "Pain grillé", score: [7, 4, 8, 2] },
          { label: "Fruits secs", score: [3, 5, 2, 9] },
        ],
      },
    ],
    results: [
      {
        label: "Café",
        description:
          "Tu es le Café, symbole d'énergie et de dynamisme. Tu es toujours prêt à commencer la journée avec une dose de motivation et d'enthousiasme. Ton caractère fort et stimulant fait de toi une personne active et déterminée.",
      },
      {
        label: "Thé",
        description:
          "Tu es le Thé, symbole de sérénité et de réflexion. Tu apprécies les moments de calme et de méditation. Ta capacité à apporter du réconfort et de chaleur fait de toi une personne apaisante et réfléchie.",
      },
      {
        label: "Chocolat Chaud",
        description:
          "Tu es le Chocolat Chaud, symbole de confort et de douceur. Tu aimes les moments cosy et les instants partagés avec les êtres chers. Ta nature chaleureuse et réconfortante te rend particulièrement attachant.",
      },
      {
        label: "Infusion",
        description:
          "Tu es l'Infusion, symbole de naturel et de bien-être. Tu privilégies les choix sains et équilibrés. Ta capacité à te détendre et à apaiser les autres montre ta sagesse et ton esprit bienveillant.",
      },
    ],
  },
];

export default quizzes;
