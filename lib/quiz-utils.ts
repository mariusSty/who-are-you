import quizDatas, { type Category } from "@/constants/data";
import type { Ionicons } from "@expo/vector-icons";

export type QuizData = (typeof quizDatas)[number];

export type GroupedQuizzes = Record<Category, QuizData[]>;

export function groupByCategory(quizzes: QuizData[]): GroupedQuizzes {
  return quizzes.reduce<GroupedQuizzes>((acc, quiz) => {
    if (!acc[quiz.category]) acc[quiz.category] = [];
    acc[quiz.category].push(quiz);
    return acc;
  }, {} as GroupedQuizzes);
}

export const CATEGORY_ICONS: Record<
  Category,
  React.ComponentProps<typeof Ionicons>["name"]
> = {
  "Jeux Vidéo": "game-controller",
  Cinéma: "film",
  Nature: "leaf",
  Insolite: "sparkles",
  Géographie: "earth",
  Custom: "create-outline",
};

export const QUIZ_ICONS: Record<
  string,
  React.ComponentProps<typeof Ionicons>["name"]
> = {
  pokemon: "flash",
  "harry-potter": "glasses",
  "star-wars": "planet",
  "animal-totem": "paw",
  "panneau-signalisation": "warning",
  insecte: "bug",
  dinosaure: "footsteps",
  plante: "flower",
  "ville-france": "flag",
  "boisson-chaude": "cafe",
};
