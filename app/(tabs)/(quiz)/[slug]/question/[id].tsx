import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { Text, View } from "@/components/Themed";
import { pastelColors } from "@/constants/Colors";
import {
  calculateQuizResult,
  getQuestionById,
  getQuestionsBySlug,
  getScore,
} from "@/lib/quiz";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { StyleSheet } from "react-native";

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
        result.toString().concat(`,${index}`)
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
      <View style={styles.answersContainer}>
        <Text style={styles.question}>{question.label}</Text>
        {question.answers.map((answer, index) => (
          <Button
            key={index}
            onPress={() => handleClickAnswer(index)}
            color={pastelColors[index]}
          >
            <Text>{answer.label}</Text>
          </Button>
        ))}
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  question: {
    fontSize: 24,
  },
  answersContainer: {
    gap: 15,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
