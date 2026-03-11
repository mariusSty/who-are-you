import PageLayout from "@/components/PageLayout";
import {
  quizCreationActions,
  useQuizCreationStore,
} from "@/stores/useQuizCreationStore";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Button, Card, Input, TextArea } from "heroui-native";
import { Text, View } from "react-native";

const { addResult, removeResult, updateResult } = quizCreationActions;

export default function CreateResults() {
  const results = useQuizCreationStore((s) => s.results);

  return (
    <PageLayout title="Résultats">
      {results.map((result, rIndex) => (
        <Card key={rIndex}>
          <Card.Header className="flex-row items-center justify-between">
            <Text className="text-foreground font-semibold">
              Résultat {rIndex + 1}
            </Text>
            {results.length > 2 && (
              <Button
                variant="ghost"
                size="sm"
                isIconOnly
                onPress={() => removeResult(rIndex)}
              >
                <Ionicons name="trash-outline" size={18} color="red" />
              </Button>
            )}
          </Card.Header>
          <Card.Body className="gap-3">
            <Input
              placeholder="Label du résultat"
              value={result.label}
              onChangeText={(v) => updateResult(rIndex, "label", v)}
            />
            <TextArea
              placeholder="Description du résultat"
              value={result.description}
              onChangeText={(v) => updateResult(rIndex, "description", v)}
            />
          </Card.Body>
        </Card>
      ))}

      <Button variant="secondary" onPress={addResult}>
        <Ionicons name="add-circle-outline" size={20} />
        <Button.Label>Ajouter un résultat</Button.Label>
      </Button>

      <View className="flex-row gap-3">
        <Link asChild href="/create">
          <Button variant="secondary" className="flex-1">
            <Button.Label>Précédent</Button.Label>
          </Button>
        </Link>
        <Link asChild href="/create/questions">
          <Button variant="primary" className="flex-1">
            <Button.Label>Suivant</Button.Label>
          </Button>
        </Link>
      </View>
    </PageLayout>
  );
}
