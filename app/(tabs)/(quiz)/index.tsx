import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { pastelColors } from "@/constants/Colors";
import quizDatas from "@/constants/data";
import { StyleSheet, Text, View } from "react-native";

export default function Quiz() {
  return (
    <PageLayout title="Quiz">
      {quizDatas.map((quizData) => (
        <Button
          key={quizData.slug}
          link={`/${quizData.slug}`}
          color={pastelColors[0]}
        >
          <View style={styles.button}>
            <Text style={styles.quizButtonText}>{quizData.title}</Text>
          </View>
        </Button>
      ))}
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  quizButtonText: {
    fontSize: 18,
    flexWrap: "wrap",
    flex: 1,
  },
  button: {
    backgroundColor: "transparent",
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
