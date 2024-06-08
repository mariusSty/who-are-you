import PageLayout from "@/components/PageLayout";
import { Text, View } from "@/components/Themed";
import quizDatas from "@/constants/data.json";
import * as SecureStore from "expo-secure-store";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export default function Profile() {
  const [quizResults, setQuizResults] = useState<
    Array<{ slug: string; result: string | null }>
  >([]);

  const getResults = useCallback(async () => {
    const results: Array<{ slug: string; result: string | null }> = [];
    for (const quiz of quizDatas) {
      const quizResult = await SecureStore.getItemAsync(quiz.slug);
      results.push({ slug: quiz.slug, result: quizResult });
    }
    setQuizResults(results);
  }, []);

  useEffect(() => {
    getResults();
  }, [getResults]);

  return (
    <PageLayout title="Profil">
      {quizDatas.map((quizData) => (
        <View key={quizData.slug} style={styles.quizResultItem}>
          <Text style={styles.quizResultItemTitleText}>{quizData.title}</Text>
          <Text style={styles.quizResultItemResultText}>
            {quizResults.find((result) => result.slug === quizData.slug)
              ?.result || "Test non effectué"}
          </Text>
        </View>
      ))}
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  quizResultItem: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  quizResultItemTitleText: {
    fontSize: 14,
  },
  quizResultItemResultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
