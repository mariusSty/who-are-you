import { type Quiz } from "@/constants/data";
import { downloadQuiz } from "@/lib/api";
import { useImportedQuizzesStore } from "@/stores/useImportedQuizzesStore";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Button, Input, useThemeColor } from "heroui-native";
import { type RefObject, useState } from "react";
import { Alert, Text, View } from "react-native";

type ImportQuizSheetProps = {
  ref: RefObject<BottomSheet | null>;
};

export default function ImportQuizSheet({ ref }: ImportQuizSheetProps) {
  const [code, setCode] = useState("");
  const [isImporting, setIsImporting] = useState(false);
  const { addQuiz } = useImportedQuizzesStore.getState();
  const [bgColor, handleColor] = useThemeColor(["background", "accent"]);

  const handleImport = async () => {
    const sanitized = code.toUpperCase().trim();
    if (sanitized.length !== 6) {
      Alert.alert("Erreur", "Le code doit contenir exactement 6 caractères");
      return;
    }

    setIsImporting(true);
    try {
      const data = await downloadQuiz(sanitized);
      const quiz = data as unknown as Quiz;
      addQuiz(sanitized, { ...quiz, slug: sanitized, category: "Custom" });
      setCode("");
      ref.current?.close();
      Alert.alert("Succès", `Le quiz "${quiz.title}" a été importé !`);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erreur inconnue";
      Alert.alert("Erreur", message);
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      enablePanDownToClose
      enableDynamicSizing
      backgroundStyle={{ backgroundColor: bgColor }}
      handleIndicatorStyle={{ backgroundColor: handleColor }}
    >
      <BottomSheetView>
        <View className="p-6 gap-4 pb-10 items-center">
          <Text className="text-foreground text-xl font-bold text-center">
            Importer un quiz
          </Text>
          <Text className="text-foreground-500 text-center">
            Entrez le code à 6 caractères du quiz
          </Text>
          <Input
            placeholder="Ex: A3F9K2"
            value={code}
            onChangeText={(v) => setCode(v.toUpperCase().slice(0, 6))}
            autoCapitalize="characters"
            maxLength={6}
            className="text-center text-2xl tracking-[8px]"
          />
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            isDisabled={code.length !== 6 || isImporting}
            onPress={handleImport}
          >
            <Ionicons name="download-outline" size={20} color="white" />
            <Button.Label>Télécharger</Button.Label>
          </Button>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
