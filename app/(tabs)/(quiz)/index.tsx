import PageLayout from "@/components/PageLayout";
import quizDatas from "@/constants/data";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Card, Chip, useThemeColor } from "heroui-native";
import { Pressable } from "react-native";

export default function Quiz() {
  const themeColorAccentForeground = useThemeColor("accent-foreground");

  return (
    <PageLayout title="Quiz">
      {quizDatas.map((quizData) => (
        <Link key={quizData.slug} asChild href={`/${quizData.slug}`}>
          <Pressable>
            <Card>
              <Card.Body className="flex-row items-center gap-4 py-4">
                <Ionicons
                  name="book-outline"
                  size={22}
                  color={themeColorAccentForeground}
                />
                <Card.Title className="flex-1">{quizData.title}</Card.Title>
                <Chip size="sm" variant="secondary" color="default">
                  {quizData.category}
                </Chip>
              </Card.Body>
            </Card>
          </Pressable>
        </Link>
      ))}
    </PageLayout>
  );
}
