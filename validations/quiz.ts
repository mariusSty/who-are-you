import { z } from "zod";

export const quizSchema = z
  .object({
    title: z.string().min(1, "Le titre est requis"),
    slug: z.string().min(1),
    category: z.enum([
      "Jeux Vidéo",
      "Cinéma",
      "Nature",
      "Insolite",
      "Géographie",
      "Custom",
    ]),
    description: z.string().min(1, "La description est requise"),
    results: z
      .array(
        z.object({
          label: z.string().min(1, "Le label du résultat est requis"),
          description: z
            .string()
            .min(1, "La description du résultat est requise"),
        }),
      )
      .min(2, "Il faut au moins 2 résultats"),
    questions: z
      .array(
        z.object({
          id: z.number(),
          label: z.string().min(1, "L'intitulé de la question est requis"),
          answers: z
            .array(
              z.object({
                label: z.string().min(1, "Le texte de la réponse est requis"),
                score: z.array(z.number()),
              }),
            )
            .min(2, "Chaque question doit avoir au moins 2 réponses"),
        }),
      )
      .min(1, "Il faut au moins 1 question"),
  })
  .refine(
    (data) =>
      data.questions.every((q) =>
        q.answers.every((a) => a.score.length === data.results.length),
      ),
    { message: "Chaque score doit correspondre au nombre de résultats" },
  );

export type QuizFormData = z.infer<typeof quizSchema>;
