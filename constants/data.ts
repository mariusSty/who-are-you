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
    title: "Kazanomé",
    slug: "coloc-quiz",
    src: require(`../assets/images/quiz-icon/mango.png`),
    label: "Quel coloc es-tu ?",
    description:
      "Découvre quel coloc de la Kazanomé 🥭 correspond le mieux à ta personnalité en répondant à ces questions !",
    questions: [
      {
        id: 1,
        label: "Tu décides de partir en voyage, avec qui pars-tu ?",
        answers: [
          {
            label: "Un(e) de tes meilleur(e)s ami(e)s",
            score: [6, 4, 6, 8, 7, 9, 5],
          },
          { label: "Personne, solo trip only", score: [0, 8, 9, 2, 3, 1, 5] },
          { label: "Un énorme groupe de potes", score: [8, 0, 4, 2, 1, 9, 5] },
          { label: "Mon crush", score: [6, 8, 0, 8, 9, 1, 5] },
        ],
      },
      {
        id: 2,
        label: "Tu pars en soirée tu prends :",
        answers: [
          { label: "Ta plus belle tenue", score: [7, 0, 9, 9, 9, 7, 9] },
          { label: "Du beaufort", score: [0, 2, 4, 5, 9, 2, 9] },
          { label: "Un meug de C", score: [4, 9, 5, 3, 0, 9, 2] },
          { label: "Le Flip 7", score: [9, 9, 6, 3, 2, 2, 0] },
        ],
      },
      {
        id: 3,
        label: "Tu es plus susceptible de péter un plomb parce que :",
        answers: [
          {
            label: "Tu te fais insulter au taff",
            score: [0, 0, 0, 0, 10, 20, 0],
          },
          {
            label: "On ose mettre de la viande dans tes courses",
            score: [20, 0, 0, 20, 0, 0, 0],
          },
          {
            label: "Aucun recruteur ne te répond",
            score: [0, 20, 0, 0, 0, 0, 0],
          },
          {
            label: "On a osé croiser ton regard avant 10h du mat'",
            score: [0, 0, 20, 0, 10, 0, 20],
          },
        ],
      },
      {
        id: 4,
        label: "Si tu devais changer de vie :",
        answers: [
          {
            label: "Tu deviens joueur pro sur LOL",
            score: [0, 20, 0, 0, 0, 0, 20],
          },
          {
            label:
              "Tu profites de tes talents de couturière pour créer une marque",
            score: [20, 0, 0, 0, 0, 0, 0],
          },
          {
            label: "Tu vends des Caïpi sur la plage au Brésil",
            score: [0, 0, 20, 0, 20, 0, 0],
          },
          {
            label: "Tu pars faire un PVT en Australie",
            score: [0, 0, 0, 20, 0, 20, 0],
          },
        ],
      },
      {
        id: 5,
        label: "On t’annonce que tu vas avoir un gosse",
        answers: [
          {
            label: "Tu pars acheter des clopes (et tu ne reviens jamais)",
            score: [0, 10, 0, 0, 0, 0, 20],
          },
          {
            label: "Tu te jettes du haut de l’escalier sur le ventre",
            score: [15, 0, 5, 0, 0, 20, 0],
          },
          {
            label: "Tu écris une liste de prénom",
            score: [15, 10, 5, 20, 5, 0, 0],
          },
          {
            label: "Tu cherches qui est le père",
            score: [0, 0, 15, 0, 15, 0, 0],
          },
        ],
      },
      {
        id: 6,
        label: "Tu as la maxi-dalle ! Tu décides de manger quoi ?",
        answers: [
          {
            label: "Un croque monsieur fait avec mon super appareil",
            score: [9, 8, 5, 6, 7, 9, 5],
          },
          { label: "Une énorme salade", score: [9, 6, 7, 9, 7, 6, 0] },
          {
            label: "Des samossas au front de mer",
            score: [2, 6, 8, 5, 6, 5, 6],
          },
          {
            label: "De la paté Royal Canin Apetite Control",
            score: [0, 0, 0, 0, 0, 0, 9],
          },
        ],
      },
      {
        id: 7,
        label: "C’est le weekend, qu’as tu prévu ?",
        answers: [
          { label: "Soirée son", score: [6, 4, 5, 5, 4, 9, 3] },
          { label: "Randonnée + gîte à Mafate", score: [7, 9, 5, 4, 6, 9, 5] },
          { label: "Plage dans l'ouest", score: [7, 4, 5, 7, 7, 2, 3] },
          {
            label: "Tu restes tranquille chez toi te reposer",
            score: [0, 5, 5, 4, 2, 3, 9],
          },
        ],
      },
      {
        id: 8,
        label:
          "Tu es de repos après une nuit de garde éprouvante. Que fais-tu ?",
        answers: [
          {
            label: "Tu dors jusqu'à 16h minimum",
            score: [2, 5, 9, 2, 5, 3, 9],
          },
          {
            label: "Tu chill dans une villa à Mont Vert",
            score: [0, 5, 5, 9, 4, 2, 3],
          },
          {
            label: "Tu vas profiter de la plage à Saint-Pierre",
            score: [9, 5, 6, 7, 6, 6, 4],
          },
          { label: "Tu mates Netflix", score: [9, 5, 0, 2, 5, 9, 3] },
        ],
      },
      {
        id: 9,
        label:
          "Tu viens de recevoir ta paye. Chouette ! Qu’est-ce que tu en fais ?",
        answers: [
          {
            label: "Tu pars en ville acheter plein de conneries",
            score: [6, 1, 2, 4, 7, 9, 6],
          },
          {
            label: "Tu mets ça sur un autre compte pour économiser",
            score: [9, 9, 2, 3, 3, 1, 0],
          },
          {
            label:
              "Tu prends direct ton billet d'avion pour ton prochain voyage",
            score: [0, 3, 8, 7, 5, 5, 5],
          },
          {
            label:
              "Tu envoies direct un message à tes amis pour t'organiser un restau ce soir",
            score: [5, 7, 8, 6, 5, 5, 9],
          },
        ],
      },
      {
        id: 10,
        label:
          "Tu rentres chez toi après une grosse journée de taff. Que fais-tu pour te vider l'esprit ?",
        answers: [
          {
            label: "Tu enfiles des baskets et tu pars courir",
            score: [8, 9, 4, 4, 2, 7, 1],
          },
          {
            label: "Tu te poses dans ta chambre et tu te mets à scroller",
            score: [4, 4, 6, 4, 6, 5, 1],
          },
          {
            label: "Tu repars direct chez des amis",
            score: [0, 0, 6, 8, 5, 7, 9],
          },
          {
            label:
              "Tu vas marcher un peu en ville et voir le coucher de soleil",
            score: [8, 7, 4, 4, 7, 1, 9],
          },
        ],
      },
    ],
    results: [
      {
        label: "Fiona",
        description:
          "Tu es Fiona ! Créative et sportive, tu es la couturière talentueuse de la coloc. Tu adores organiser des activités, et cuisinier pour les autres. Toujours partante pour une activité, on peut compter sur toi pour mettre de la bonne humeur dans la maison !",
        src: require(`../assets/images/quiz-icon/fiona.jpg`),
      },
      {
        label: "Marius",
        description:
          "Tu es Marius ! Tu es le créateur de cette application mobile et tu galères à trouver une description pour toi...",
        src: require(`../assets/images/quiz-icon/marius.jpg`),
      },
      {
        label: "Maëlis",
        description:
          "Tu es Maëlis ! Baroudeuse dans l'âme, posée et réfléchie. Tu es la papa du groupe, celle sur qui on peut compter. Tu détiens également le record du monde de la plus longue sieste !",
        src: require(`../assets/images/quiz-icon/maelis.jpg`),
      },
      {
        label: "Mathilde",
        description:
          "Tu es Mathilde ! Toujours de bonne humeur et souriante, tu adores essayer pleins d'activités différentes. Tu mets de la joie partout où tu vas.",
        src: require(`../assets/images/quiz-icon/mathilde.jpg`),
      },
      {
        label: "Louise",
        description:
          "Tu es Louise ! Tu es sociable, et tu aimes échanger. Bien que tu parles fort, avec toi, il n'y a jamais de moment de silence ennuyeux !",
        src: require(`../assets/images/quiz-icon/louise.jpg`),
      },
      {
        label: "Léa",
        description:
          "Tu es Léa ! L'ado du groupe. Toujours partante pour une rando, une fête ou une nouvelle aventure. Tu es entourée de nombreux amis sur l'île. Et aussi une fan inconditionnelle de croque monsieur !",
        src: require(`../assets/images/quiz-icon/lea.jpg`),
      },
      {
        label: "Paco",
        description:
          "Tu es Paco ! Le chat de la coloc. Tu aimes les calîns et surtout la bouffe. Entre 2 siestes, tu pars chasser la faune réunionnaise et tu n'hésites pas à rapporter tes proies dans la maison.",
        src: require(`../assets/images/quiz-icon/paco.jpg`),
      },
    ],
  },
];

export default quizzes;
