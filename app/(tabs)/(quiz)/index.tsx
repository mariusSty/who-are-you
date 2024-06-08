import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { Text } from "@/components/Themed";
import quizDatas from "@/constants/data.json";
import { StyleSheet } from "react-native";

export default function Quiz() {
  return (
    <PageLayout title="Quiz">
      {quizDatas.map((quizData) => (
        <Button key={quizData.slug} link={`/${quizData.slug}`}>
          <Text style={styles.quizButtonText}>{quizData.title}</Text>
        </Button>
      ))}
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  quizButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    padding: 20,
  },
});
