import type { Quiz } from "@/constants/data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ImportedQuizzesState = {
  quizzes: Record<string, Quiz>;
};

type ImportedQuizzesActions = {
  addQuiz: (id: string, quiz: Quiz) => void;
  removeQuiz: (id: string) => void;
  getQuiz: (id: string) => Quiz | undefined;
  getAll: () => Quiz[];
};

export const useImportedQuizzesStore = create<
  ImportedQuizzesState & ImportedQuizzesActions
>()(
  persist(
    (set, get) => ({
      quizzes: {},

      addQuiz: (id, quiz) =>
        set((s) => ({
          quizzes: { ...s.quizzes, [id]: quiz },
        })),

      removeQuiz: (id) =>
        set((s) => {
          const { [id]: _, ...rest } = s.quizzes;
          return { quizzes: rest };
        }),

      getQuiz: (id) => get().quizzes[id],

      getAll: () => Object.values(get().quizzes),
    }),
    {
      name: "imported-quizzes",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
