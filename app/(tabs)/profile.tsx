import PageLayout from "@/components/PageLayout";
import quizDatas from "@/constants/data";
import { useFocusEffect } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Card, Chip, Spinner } from "heroui-native";
import { useCallback, useState } from "react";
import { View } from "react-native";

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
        <View className="items-center py-8">
          <Spinner size="lg" />
        </View>
      </PageLayout>
    );

  return (
    <PageLayout title="Profil">
      {quizDatas.map((quizData) => {
        const resultText =
          quizResults.find((r) => r.slug === quizData.slug)?.result || "???";

        return (
          <Card key={quizData.slug}>
            <Card.Body className="gap-3">
              <View className="flex-row items-center justify-between">
                <Card.Title>{quizData.title}</Card.Title>
                <Chip size="sm" variant="secondary" color="default">
                  {quizData.category}
                </Chip>
              </View>
              <Card.Description className="text-lg font-bold text-foreground">
                {resultText}
              </Card.Description>
            </Card.Body>
          </Card>
        );
      })}
    </PageLayout>
  );
}
