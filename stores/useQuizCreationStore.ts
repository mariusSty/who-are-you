import { uploadQuiz } from "@/lib/api";
import {
  type FormQuestion,
  type FormResult,
  makeEmptyAnswer,
  makeEmptyQuestion,
  toKebabCase,
} from "@/lib/quiz-form";
import { quizSchema } from "@/validations/quiz";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type QuizCreationState = {
  title: string;
  description: string;
  results: FormResult[];
  questions: FormQuestion[];
  errors: string[];
};

type QuizCreationActions = {
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;

  addResult: () => void;
  removeResult: (index: number) => void;
  updateResult: (index: number, field: keyof FormResult, value: string) => void;

  addQuestion: () => void;
  removeQuestion: (index: number) => void;
  updateQuestionLabel: (qIndex: number, value: string) => void;

  addAnswer: (qIndex: number) => void;
  removeAnswer: (qIndex: number, aIndex: number) => void;
  updateAnswerLabel: (qIndex: number, aIndex: number, value: string) => void;
  updateAnswerScore: (
    qIndex: number,
    aIndex: number,
    rIndex: number,
    value: number,
  ) => void;

  isFormValid: () => boolean;
  submit: () => Promise<string | false>;
  reset: () => void;
};

const initialState: QuizCreationState = {
  title: "",
  description: "",
  results: [
    { label: "", description: "" },
    { label: "", description: "" },
  ],
  questions: [makeEmptyQuestion(1, 2)],
  errors: [],
};

function addScoreSlot(questions: FormQuestion[]): FormQuestion[] {
  return questions.map((q) => ({
    ...q,
    answers: q.answers.map((a) => ({
      ...a,
      score: [...a.score, 0],
    })),
  }));
}

function removeScoreSlot(
  questions: FormQuestion[],
  index: number,
): FormQuestion[] {
  return questions.map((q) => ({
    ...q,
    answers: q.answers.map((a) => ({
      ...a,
      score: a.score.filter((_, i) => i !== index),
    })),
  }));
}

export const useQuizCreationStore = create<
  QuizCreationState & QuizCreationActions
>()(
  persist(
    (set, get) => ({
      ...initialState,

      setTitle: (value) => set({ title: value }),
      setDescription: (value) => set({ description: value }),

      addResult: () =>
        set((s) => ({
          results: [...s.results, { label: "", description: "" }],
          questions: addScoreSlot(s.questions),
        })),

      removeResult: (index) =>
        set((s) => {
          if (s.results.length <= 2) return s;
          return {
            results: s.results.filter((_, i) => i !== index),
            questions: removeScoreSlot(s.questions, index),
          };
        }),

      updateResult: (index, field, value) =>
        set((s) => ({
          results: s.results.map((r, i) =>
            i === index ? { ...r, [field]: value } : r,
          ),
        })),

      addQuestion: () =>
        set((s) => ({
          questions: [
            ...s.questions,
            makeEmptyQuestion(s.questions.length + 1, s.results.length),
          ],
        })),

      removeQuestion: (index) =>
        set((s) => {
          if (s.questions.length <= 1) return s;
          return {
            questions: s.questions
              .filter((_, i) => i !== index)
              .map((q, i) => ({ ...q, id: i + 1 })),
          };
        }),

      updateQuestionLabel: (qIndex, value) =>
        set((s) => ({
          questions: s.questions.map((q, i) =>
            i === qIndex ? { ...q, label: value } : q,
          ),
        })),

      addAnswer: (qIndex) =>
        set((s) => ({
          questions: s.questions.map((q, qi) =>
            qi === qIndex
              ? {
                  ...q,
                  answers: [...q.answers, makeEmptyAnswer(s.results.length)],
                }
              : q,
          ),
        })),

      removeAnswer: (qIndex, aIndex) =>
        set((s) => ({
          questions: s.questions.map((q, qi) =>
            qi === qIndex && q.answers.length > 2
              ? {
                  ...q,
                  answers: q.answers.filter((_, ai) => ai !== aIndex),
                }
              : q,
          ),
        })),

      updateAnswerLabel: (qIndex, aIndex, value) =>
        set((s) => ({
          questions: s.questions.map((q, qi) =>
            qi === qIndex
              ? {
                  ...q,
                  answers: q.answers.map((a, ai) =>
                    ai === aIndex ? { ...a, label: value } : a,
                  ),
                }
              : q,
          ),
        })),

      updateAnswerScore: (qIndex, aIndex, rIndex, value) =>
        set((s) => ({
          questions: s.questions.map((q, qi) =>
            qi === qIndex
              ? {
                  ...q,
                  answers: q.answers.map((a, ai) =>
                    ai === aIndex
                      ? {
                          ...a,
                          score: a.score.map((sc, si) =>
                            si === rIndex ? value : sc,
                          ),
                        }
                      : a,
                  ),
                }
              : q,
          ),
        })),

      isFormValid: () => {
        const s = get();
        const quiz = {
          title: s.title,
          slug: toKebabCase(s.title),
          category: "Custom" as const,
          description: s.description,
          results: s.results,
          questions: s.questions,
        };
        return quizSchema.safeParse(quiz).success;
      },

      submit: async () => {
        const s = get();
        const quiz = {
          title: s.title,
          slug: toKebabCase(s.title),
          category: "Custom" as const,
          description: s.description,
          results: s.results,
          questions: s.questions,
        };
        const parsed = quizSchema.safeParse(quiz);

        if (!parsed.success) {
          const messages = parsed.error.issues.map((i) => i.message);
          set({ errors: messages });
          Alert.alert("Erreurs de validation", messages.join("\n"));
          return false;
        }

        set({ errors: [] });

        try {
          const { id } = await uploadQuiz(parsed.data);
          get().reset();
          return id;
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "Erreur inconnue";
          Alert.alert("Erreur", message);
          return false;
        }
      },

      reset: () => set(initialState),
    }),
    {
      name: "quiz-creation-draft",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: ({ errors, ...rest }) => rest,
    },
  ),
);

// Actions are stable (never trigger re-renders) — safe to extract at module level
export const quizCreationActions = useQuizCreationStore.getState();
