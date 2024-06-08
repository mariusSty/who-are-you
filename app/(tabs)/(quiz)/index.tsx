import PageLayout from "@/components/PageLayout";
import { Text, View } from "@/components/Themed";
import quizDatas from "@/constants/data.json";
import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export default function Quiz() {
  return (
    <PageLayout title="Quiz">
      {quizDatas.map((quizData) => (
        <View key={quizData.slug} style={styles.quizButton}>
          <Link href={`/${quizData.slug}`} asChild>
            <Pressable>
              <Text style={styles.quizButtonText}>{quizData.title}</Text>
            </Pressable>
          </Link>
        </View>
      ))}
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  quizButton: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  quizButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
