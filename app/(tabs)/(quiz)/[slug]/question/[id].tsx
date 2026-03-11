import PageLayout from "@/components/PageLayout";
import {
  calculateQuizResult,
  getQuestionById,
  getQuestionsBySlug,
  getScore,
} from "@/lib/quiz";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Button } from "heroui-native";
import { Text, View } from "react-native";

export default function Question() {
  const { slug, id, result } = useLocalSearchParams();

  const questions = getQuestionsBySlug(slug?.toString());
  const question = id ? getQuestionById(questions, +id) : null;

  if (!question || !id || !slug) {
    return <Redirect href="/" />;
  }

  const handleClickAnswer = async (index: number) => {
    if (questions.length === +id && result) {
      const scores = getScore(
        slug.toString(),
        result.toString().concat(`,${index}`),
      );
      const quizResults =
        calculateQuizResult(slug?.toString() || "", scores)?.label || "";
      SecureStore.setItem(slug.toString(), quizResults);
      router.push({
        pathname: `/${slug}/result`,
        params: { result: quizResults },
      });
    } else {
      router.push({
        pathname: `/${slug}/question/${+id + 1}`,
        params: { result: result ? result.concat(`,${index}`) : index },
      });
    }
  };

  return (
    <PageLayout title={`Question ${id}/${questions.length}`}>
      <View className="gap-4 items-stretch justify-center">
        <Text className="text-2xl text-foreground">{question.label}</Text>
        {question.answers.map((answer, index) => (
          <Button
            key={index}
            onPress={() => handleClickAnswer(index)}
            variant="secondary"
          >
            {answer.label}
          </Button>
        ))}
      </View>
    </PageLayout>
  );
}
