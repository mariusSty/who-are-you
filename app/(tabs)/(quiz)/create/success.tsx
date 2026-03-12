import PageLayout from "@/components/PageLayout";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { Link, useLocalSearchParams } from "expo-router";
import { Button, Card, useThemeColor } from "heroui-native";
import { useState } from "react";
import { Text, View } from "react-native";

export default function CreateSuccess() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [copied, setCopied] = useState(false);
  const [themeColorSuccess, themeColorAccent] = useThemeColor([
    "success",
    "accent",
  ]);

  const handleCopy = async () => {
    if (!id) return;
    await Clipboard.setStringAsync(id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageLayout title="Quiz créé !">
      <Card>
        <Card.Body className="items-center gap-4 py-8">
          <View className="bg-primary/10 rounded-full p-4">
            <Ionicons
              name="checkmark-circle"
              size={48}
              color={themeColorSuccess}
            />
          </View>
          <Text className="text-foreground text-lg text-center">
            Partagez ce code pour que d'autres puissent jouer à votre quiz :
          </Text>
          <Text className="text-foreground text-4xl font-bold tracking-[8px] text-center">
            {id}
          </Text>
        </Card.Body>
      </Card>

      <Button variant="secondary" size="lg" onPress={handleCopy}>
        <Ionicons
          name={copied ? "checkmark" : "copy-outline"}
          size={20}
          color={themeColorAccent}
        />
        <Button.Label>{copied ? "Copié !" : "Copier le code"}</Button.Label>
      </Button>

      <Link asChild href="/">
        <Button variant="primary" size="lg">
          <Ionicons name="home-outline" size={20} color="white" />
          <Button.Label>Retour à l'accueil</Button.Label>
        </Button>
      </Link>
    </PageLayout>
  );
}
