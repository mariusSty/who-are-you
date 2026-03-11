import PageLayout from "@/components/PageLayout";
import quizDatas, { type Category } from "@/constants/data";
import { CATEGORY_ICONS, groupByCategory, QUIZ_ICONS } from "@/lib/quiz-utils";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Accordion, Button, Chip, useThemeColor } from "heroui-native";
import { Text, View } from "react-native";

const grouped = groupByCategory(quizDatas);
const categories = Object.keys(grouped) as Category[];

export default function Quiz() {
  const [themeColorAccent] = useThemeColor(["accent"]);

  return (
    <PageLayout title="Quiz">
      <Link asChild href="/create">
        <Button variant="primary">
          <Ionicons name="add-circle-outline" size={20} color="white" />
          <Button.Label>Créer un quiz</Button.Label>
        </Button>
      </Link>
      <Accordion selectionMode="multiple" variant="surface">
        {categories.map((category) => (
          <Accordion.Item key={category} value={category}>
            <Accordion.Trigger>
              <View className="flex-row items-center flex-1 gap-3">
                <Ionicons
                  name={CATEGORY_ICONS[category]}
                  size={18}
                  color={themeColorAccent}
                />
                <Text className="text-foreground text-base font-semibold flex-1">
                  {category}
                </Text>
                <Chip size="sm" variant="primary">
                  {grouped[category].length}
                </Chip>
              </View>
              <Accordion.Indicator />
            </Accordion.Trigger>
            <Accordion.Content>
              <View className="gap-2 pb-2">
                {grouped[category].map((quizData) => (
                  <Link key={quizData.slug} asChild href={`/${quizData.slug}`}>
                    <Button variant="secondary" className="justify-start">
                      <Ionicons
                        name={QUIZ_ICONS[quizData.slug] ?? "book-outline"}
                        size={18}
                        color={themeColorAccent}
                      />
                      <Button.Label className="flex-1 text-left">
                        {quizData.title}
                      </Button.Label>
                      <Ionicons name="chevron-forward" size={14} />
                    </Button>
                  </Link>
                ))}
              </View>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </PageLayout>
  );
}
