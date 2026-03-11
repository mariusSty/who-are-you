import PageLayout from "@/components/PageLayout";
import quizDatas, { type Category } from "@/constants/data";
import { CATEGORY_ICONS, groupByCategory, QUIZ_ICONS } from "@/lib/quiz-utils";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { Card, Chip, Separator, Spinner, useThemeColor } from "heroui-native";
import { useState } from "react";
import { Text, View } from "react-native";

const grouped = groupByCategory(quizDatas);
const categories = Object.keys(grouped) as Category[];

export default function Profile() {
  const [quizResults, setQuizResults] = useState<
    Array<{ slug: string; result: string | null }>
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [themeColorAccent, themeColorMuted] = useThemeColor([
    "accent",
    "muted",
  ]);

  useFocusEffect(() => {
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
  });

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
      {categories.map((category) => {
        const quizzesInCategory = grouped[category];
        const passed = quizzesInCategory.filter(
          (q) => quizResults.find((r) => r.slug === q.slug)?.result !== null,
        ).length;

        return (
          <Card key={category}>
            <Card.Body className="gap-3">
              <View className="flex-row items-center gap-3">
                <Ionicons
                  name={CATEGORY_ICONS[category]}
                  size={18}
                  color={themeColorAccent}
                />
                <Card.Title className="flex-1">{category}</Card.Title>
                <Chip size="sm" variant="primary">
                  {passed}/{quizzesInCategory.length}
                </Chip>
              </View>
              <Separator />
              <View className="gap-2">
                {quizzesInCategory.map((quizData) => {
                  const result = quizResults.find(
                    (r) => r.slug === quizData.slug,
                  )?.result;

                  return (
                    <View
                      key={quizData.slug}
                      className="flex-row items-center gap-3"
                    >
                      <Ionicons
                        name={QUIZ_ICONS[quizData.slug] ?? "book"}
                        size={15}
                        color={result ? themeColorAccent : themeColorMuted}
                      />
                      <Text className="text-foreground text-sm flex-1">
                        {quizData.title}
                      </Text>
                      <Text
                        className={
                          result
                            ? "text-accent text-sm font-semibold"
                            : "text-muted text-sm"
                        }
                      >
                        {result ?? "—"}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </Card.Body>
          </Card>
        );
      })}
    </PageLayout>
  );
}
