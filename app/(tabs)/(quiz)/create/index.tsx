import PageLayout from "@/components/PageLayout";
import {
  quizCreationActions,
  useQuizCreationStore,
} from "@/stores/useQuizCreationStore";
import { Link } from "expo-router";
import { Button, Input, TextArea } from "heroui-native";
import { useShallow } from "zustand/react/shallow";

const { setTitle, setDescription } = quizCreationActions;

export default function CreateInfo() {
  const { title, description } = useQuizCreationStore(
    useShallow((s) => ({ title: s.title, description: s.description })),
  );

  return (
    <PageLayout title="Nouveau quiz">
      <Input
        placeholder="Titre du quiz"
        value={title}
        onChangeText={setTitle}
      />
      <TextArea
        placeholder="Description du quiz"
        value={description}
        onChangeText={setDescription}
      />
      <Link asChild href="/create/results">
        <Button variant="primary">
          <Button.Label>Suivant</Button.Label>
        </Button>
      </Link>
    </PageLayout>
  );
}
