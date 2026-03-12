import PageLayout from "@/components/PageLayout";
import {
  quizCreationActions,
  useQuizCreationStore,
} from "@/stores/useQuizCreationStore";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import {
  Accordion,
  Button,
  Card,
  Input,
  Separator,
  Slider,
} from "heroui-native";
import { useState } from "react";
import { Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

const {
  addQuestion,
  removeQuestion,
  updateQuestionLabel,
  addAnswer,
  removeAnswer,
  updateAnswerLabel,
  updateAnswerScore,
  isFormValid,
  submit,
} = quizCreationActions;

export default function CreateQuestions() {
  const router = useRouter();
  const { questions, results } = useQuizCreationStore(
    useShallow((s) => ({ questions: s.questions, results: s.results })),
  );

  const [openItems, setOpenItems] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const id = await submit();
      if (id) {
        router.replace(`/create/success?id=${id}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout title="Questions">
      <Accordion
        selectionMode="multiple"
        variant="surface"
        value={openItems}
        onValueChange={(v: string | string[] | undefined) =>
          setOpenItems(Array.isArray(v) ? v : v ? [v] : [])
        }
      >
        {questions.map((question, qIndex) => (
          <Accordion.Item key={qIndex} value={`q-${qIndex}`}>
            <Accordion.Trigger>
              <Text className="text-foreground font-semibold flex-1">
                {question.label || `Question ${qIndex + 1}`}
              </Text>
              <Accordion.Indicator />
            </Accordion.Trigger>
            <Accordion.Content>
              <View className="gap-4 pb-2">
                <View className="flex-row items-center gap-2">
                  <View className="flex-1">
                    <Input
                      placeholder="Intitulé de la question"
                      value={question.label}
                      onChangeText={(v) => updateQuestionLabel(qIndex, v)}
                    />
                  </View>
                  {questions.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      isIconOnly
                      onPress={() => removeQuestion(qIndex)}
                    >
                      <Ionicons name="trash-outline" size={18} color="red" />
                    </Button>
                  )}
                </View>

                <Separator />

                {question.answers.map((answer, aIndex) => (
                  <Card key={aIndex}>
                    <Card.Body className="gap-3">
                      <View className="flex-row items-center gap-2">
                        <View className="flex-1">
                          <Input
                            placeholder={`Réponse ${aIndex + 1}`}
                            value={answer.label}
                            onChangeText={(v) =>
                              updateAnswerLabel(qIndex, aIndex, v)
                            }
                          />
                        </View>
                        {question.answers.length > 2 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            isIconOnly
                            onPress={() => removeAnswer(qIndex, aIndex)}
                          >
                            <Ionicons
                              name="close-circle-outline"
                              size={18}
                              color="red"
                            />
                          </Button>
                        )}
                      </View>

                      {results.map((result, rIndex) => (
                        <View key={rIndex} className="gap-1">
                          <Text className="text-foreground-500 text-xs">
                            {result.label || `Résultat ${rIndex + 1}`} :{" "}
                            {answer.score[rIndex]}
                          </Text>
                          <Slider
                            minValue={0}
                            maxValue={10}
                            step={1}
                            value={answer.score[rIndex]}
                            onChange={(v) =>
                              updateAnswerScore(
                                qIndex,
                                aIndex,
                                rIndex,
                                v as number,
                              )
                            }
                          >
                            <Slider.Track>
                              <Slider.Fill />
                              <Slider.Thumb />
                            </Slider.Track>
                          </Slider>
                        </View>
                      ))}
                    </Card.Body>
                  </Card>
                ))}

                <Button
                  variant="secondary"
                  size="sm"
                  onPress={() => addAnswer(qIndex)}
                >
                  <Ionicons name="add-circle-outline" size={16} />
                  <Button.Label>Ajouter une réponse</Button.Label>
                </Button>
              </View>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>

      <Button variant="secondary" onPress={addQuestion}>
        <Ionicons name="add-circle-outline" size={20} />
        <Button.Label>Ajouter une question</Button.Label>
      </Button>

      <View className="flex-row gap-3">
        <Link asChild href="/create/results">
          <Button variant="secondary" className="flex-1">
            <Button.Label>Précédent</Button.Label>
          </Button>
        </Link>
        <Button
          variant="primary"
          className="flex-1"
          isDisabled={!isFormValid() || isLoading}
          onPress={handleSubmit}
        >
          <Button.Label>Créer le quiz</Button.Label>
        </Button>
      </View>
    </PageLayout>
  );
}
