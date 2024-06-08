import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { Text } from "@/components/Themed";
import quizDatas from "@/constants/data";
import { Link, Redirect, useGlobalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

export default function Slug() {
  const { slug } = useGlobalSearchParams();
  const quiz = quizDatas.find((quiz) => quiz.slug === slug);

  if (!quiz) {
    return <Redirect href="/" />;
  }

  return (
    <PageLayout title={quiz.title}>
      <Text style={styles.description}>{quiz.description}</Text>
      <Link href={`/${slug}/question/1`} asChild>
        <Button>
          <Text style={styles.startButtonText}>Commencer le test</Text>
        </Button>
      </Link>
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
