import PageLayout from "@/components/PageLayout";
import { Text, View } from "@/components/Themed";
import quizDatas from "@/constants/data";
import { Image } from "expo-image";
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
          <Image style={{ width: 40, height: 40 }} source={quizData.src} />
          <Text style={styles.quizResultItemTitleText}>{quizData.title}</Text>
          <Text style={styles.quizResultItemResultText}>
            {quizResults.find((result) => result.slug === quizData.slug)
              ?.result || "???"}
          </Text>
        </View>
      ))}
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  quizResultItem: {
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#E493B3",
  },
  quizResultItemTitleText: {
    fontSize: 14,
  },
  quizResultItemResultText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
