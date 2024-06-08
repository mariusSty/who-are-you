import { Text, View } from "@/components/Themed";
import quizDatas from "@/constants/data.json";
import { Link, Redirect, useGlobalSearchParams } from "expo-router";
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

  const nextRoute =
    questions.length === +id
      ? `/${slug}/result`
      : `/${slug}/question/${+id + 1}`;

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.label}</Text>
      <View style={styles.answersContainer}>
        {question.answers.map((answer, index) => (
          <Pressable key={index} style={styles.answerButton}>
            <Link href={nextRoute} asChild>
              <Text style={styles.answerButtonText}>{answer}</Text>
            </Link>
          </Pressable>
        ))}
      </View>
    </View>
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
    width: "80%",
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
