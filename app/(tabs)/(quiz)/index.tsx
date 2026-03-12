import ImportQuizSheet from "@/components/ImportQuizSheet";
import quizDatas, { type Category } from "@/constants/data";
import { CATEGORY_ICONS, groupByCategory, QUIZ_ICONS } from "@/lib/quiz-utils";
import { useImportedQuizzesStore } from "@/stores/useImportedQuizzesStore";
import { Ionicons } from "@expo/vector-icons";
import type BottomSheet from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import {
  Accordion,
  Button,
  Chip,
  Separator,
  useThemeColor,
} from "heroui-native";
import { useRef } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

const grouped = groupByCategory(quizDatas);
const categories = Object.keys(grouped) as Category[];

export default function Quiz() {
  const [themeColorAccent] = useThemeColor(["accent"]);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const importedQuizzes = useImportedQuizzesStore(useShallow((s) => s.quizzes));
  const { removeQuiz } = useImportedQuizzesStore.getState();
  const importedEntries = Object.entries(importedQuizzes);

  const handleDelete = (id: string, title: string) => {
    Alert.alert("Supprimer", `Supprimer le quiz "${title}" ?`, [
      { text: "Annuler", style: "cancel" },
      {
        text: "Supprimer",
        style: "destructive",
        onPress: () => removeQuiz(id),
      },
    ]);
  };

  return (
    <View className="flex-1 bg-background items-center pt-8 gap-8">
      <View className="items-center justify-center w-4/5">
        <Text className="text-3xl font-bold text-foreground text-center">
          Quiz
        </Text>
      </View>
      <Separator className="w-4/5" />
      <ScrollView
        className="flex-1 w-full"
        contentContainerClassName="px-12 gap-5 pb-8"
      >
        <View className="flex-row gap-2">
          <Link asChild href="/create" className="flex-1">
            <Button variant="primary">
              <Ionicons name="add-circle-outline" size={20} color="white" />
              <Button.Label>Créer</Button.Label>
            </Button>
          </Link>
          <Button
            variant="secondary"
            className="flex-1"
            onPress={() => bottomSheetRef.current?.expand()}
          >
            <Ionicons
              name="download-outline"
              size={20}
              color={themeColorAccent}
            />
            <Button.Label>Importer</Button.Label>
          </Button>
        </View>

        <Accordion selectionMode="multiple" variant="surface">
          {importedEntries.length > 0 && (
            <Accordion.Item value="imported">
              <Accordion.Trigger>
                <View className="flex-row items-center flex-1 gap-3">
                  <Ionicons
                    name="cloud-download-outline"
                    size={18}
                    color={themeColorAccent}
                  />
                  <Text className="text-foreground text-base font-semibold flex-1">
                    Quiz importés
                  </Text>
                  <Chip size="sm" variant="primary">
                    {importedEntries.length}
                  </Chip>
                </View>
                <Accordion.Indicator />
              </Accordion.Trigger>
              <Accordion.Content>
                <View className="gap-2 pb-2">
                  {importedEntries.map(([id, quiz]) => (
                    <View key={id} className="flex-row items-center gap-1">
                      <Link asChild href={`/${id}`} className="flex-1">
                        <Button variant="secondary" className="justify-start">
                          <Ionicons
                            name="book-outline"
                            size={18}
                            color={themeColorAccent}
                          />
                          <Button.Label className="flex-1 text-left">
                            {quiz.title}
                          </Button.Label>
                          <Ionicons name="chevron-forward" size={14} />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        isIconOnly
                        onPress={() => handleDelete(id, quiz.title)}
                      >
                        <Ionicons name="trash-outline" size={16} color="red" />
                      </Button>
                    </View>
                  ))}
                </View>
              </Accordion.Content>
            </Accordion.Item>
          )}
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
                    <Link
                      key={quizData.slug}
                      asChild
                      href={`/${quizData.slug}`}
                    >
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
      </ScrollView>

      <ImportQuizSheet ref={bottomSheetRef} />
    </View>
  );
}
