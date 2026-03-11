export function toKebabCase(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type FormResult = { label: string; description: string };
export type FormAnswer = { label: string; score: number[] };
export type FormQuestion = { id: number; label: string; answers: FormAnswer[] };

export function makeEmptyAnswer(resultCount: number): FormAnswer {
  return { label: "", score: Array(resultCount).fill(0) };
}

export function makeEmptyQuestion(
  id: number,
  resultCount: number,
): FormQuestion {
  return {
    id,
    label: "",
    answers: Array.from({ length: 2 }, () => makeEmptyAnswer(resultCount)),
  };
}
