import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import quizDatas from "@/constants/data";
import { Redirect, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function Slug() {
  const { slug } = useLocalSearchParams();
  const quiz = quizDatas.find((quiz) => quiz.slug === slug);

  if (!quiz) {
    return <Redirect href="/" />;
  }

  return (
    <PageLayout title={quiz.title}>
      <Text style={styles.description}>{quiz.description}</Text>
      <Button link={`/${slug}/question/1`}>
        <Text style={styles.startButtonText}>Commencer le test</Text>
      </Button>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    textAlign: "center",
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
