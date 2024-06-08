import PageLayout from "@/components/PageLayout";
import { Text, View } from "@/components/Themed";
import quizDatas from "@/constants/data.json";
import { Redirect, router, useGlobalSearchParams } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Pressable, StyleSheet } from "react-native";

export default function Question() {
  const { slug, id } = useGlobalSearchParams();
  const questions =
    quizDatas.find((quiz) => quiz.slug === slug)?.questions || [];
  const question = id
    ? questions.find((question) => question.id === +id)
    : null;

  if (!question || !id) {
    return <Redirect href="/" />;
  }

  const handleClickAnswer = async () => {
    const nextRoute =
      questions.length === +id
        ? `/${slug}/result`
        : `/${slug}/question/${+id + 1}`;

    const results = quizDatas.find((quiz) => quiz.slug === slug)?.results || [];
    const result = results[Math.floor(Math.random() * results.length)];

    if (slug) await SecureStore.setItemAsync(slug.toString(), result.label);
    router.push({ pathname: nextRoute, params: { result: result.label } });
  };

  return (
    <PageLayout title={question.label}>
      <View style={styles.answersContainer}>
        {question.answers.map((answer, index) => (
          <Pressable
            key={index}
            style={styles.answerButton}
            onPress={handleClickAnswer}
          >
            <Text style={styles.answerButtonText}>{answer}</Text>
          </Pressable>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  answersContainer: {
    gap: 15,
    alignItems: "stretch",
    justifyContent: "center",
  },
  answerButton: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  answerButtonText: {
    fontSize: 18,
  },
});
