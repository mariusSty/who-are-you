import quizDatas, { Question, Result } from "@/constants/data";

export function getQuestionsBySlug(slug?: string): Question[] {
  return quizDatas.find((quiz) => quiz.slug === slug)?.questions || [];
}

export function getQuestionById(
  questions: Question[],
  id: number
): Question | null {
  return questions.find((question) => question.id === id) || null;
}

export function calculateQuizResult(slug: string, scores?: number[][]) {
  if (!scores) return;
  const total = Array(scores[0].length).fill(0);

  for (const score of scores) {
    for (let i = 0; i < score.length; i++) {
      total[i] += score[i];
    }
  }

  const max = Math.max(...total);
  const index = total.indexOf(max);
  return quizDatas.find((q) => q.slug === slug)?.results[index];
}

export function getScore(slug: string, result: string) {
  const quiz = quizDatas.find((q) => q.slug === slug);
  if (!quiz) return;

  let parsedResult = result.split(",").map((r) => parseInt(r));
  const scores = [];
  for (let i = 0; i < quiz.questions.length; i++) {
    const question = quiz.questions[i];
    const answer = question.answers[parsedResult[i]];

    scores.push(answer.score);
  }
  return scores;
}

export function getQuizResultBySlug(
  slug: string,
  label: string
): Result | undefined {
  return quizDatas
    .find((q) => q.slug === slug)
    ?.results.find((r) => r.label === label);
}
