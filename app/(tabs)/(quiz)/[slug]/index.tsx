import PageLayout from "@/components/PageLayout";
import { Text } from "@/components/Themed";
import quizDatas from "@/constants/data.json";
import { Link, Redirect, useGlobalSearchParams } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export default function Slug() {
  const { slug } = useGlobalSearchParams();
  const quiz = quizDatas.find((quiz) => quiz.slug === slug);

  if (!quiz) {
    return <Redirect href="/" />;
  }

  return (
    <PageLayout title={quiz.title}>
      <Text style={styles.description}>{quiz.description}</Text>
      <Pressable style={styles.startButton}>
        <Link href={`/${slug}/question/1`} asChild>
          <Text style={styles.startButtonText}>Commencer le test</Text>
        </Link>
      </Pressable>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    textAlign: "center",
  },
  startButton: {
    alignItems: "center",
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
    width: "100%",
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
