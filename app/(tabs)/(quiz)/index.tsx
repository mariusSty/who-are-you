import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { Text, View } from "@/components/Themed";
import quizDatas from "@/constants/data";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export default function Quiz() {
  return (
    <PageLayout title="Quiz">
      {quizDatas.map((quizData) => (
        <Button key={quizData.slug} link={`/${quizData.slug}`}>
          <View style={styles.button}>
            <Image style={{ width: 40, height: 40 }} source={quizData.src} />
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
    fontWeight: "bold",
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
