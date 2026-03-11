import PageLayout from "@/components/PageLayout";
import Colors, { pastelColors } from "@/constants/Colors";
import quizDatas from "@/constants/data";
import { useFocusEffect } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useCallback, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const [quizResults, setQuizResults] = useState<
    Array<{ slug: string; result: string | null }>
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const getResults = async () => {
        const results: Array<{ slug: string; result: string | null }> = [];
        for (const quiz of quizDatas) {
          const quizResult = await SecureStore.getItemAsync(quiz.slug);
          results.push({ slug: quiz.slug, result: quizResult });
        }
        setQuizResults(results);
        setIsLoading(false);
      };

      getResults();
    }, []),
  );

  if (isLoading)
    return (
      <PageLayout title="Profil">
        <ActivityIndicator />
      </PageLayout>
    );

  return (
    <PageLayout title="Profil">
      {quizDatas.map((quizData) => (
        <View
          key={quizData.slug}
          style={[styles.quizResultItem, { borderColor: Colors.text }]}
        >
          <View
            style={[
              styles.quizResultItemCategory,
              { borderColor: Colors.text },
            ]}
          >
            <Text style={styles.quizResultItemTitleText}>{quizData.title}</Text>
          </View>
          <View style={styles.quizResultItemTextContainer}>
            <Text style={styles.quizResultItemResultText}>
              {quizResults.find((result) => result.slug === quizData.slug)
                ?.result || "???"}
            </Text>
          </View>
        </View>
      ))}
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  quizResultItem: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    height: 120,
  },
  quizResultItemCategory: {
    backgroundColor: pastelColors[3],
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    borderRightWidth: 1,
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
    gap: 6,
  },
  quizResultItemTextContainer: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  quizResultItemTitleText: {
    fontSize: 12,
  },
  quizResultItemResultText: {
    fontSize: 18,
    fontWeight: "900",
  },
});
