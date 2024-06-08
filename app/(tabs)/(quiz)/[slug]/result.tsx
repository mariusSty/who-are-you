import PageLayout from "@/components/PageLayout";
import { Text, View } from "@/components/Themed";
import quizData from "@/constants/data.json";
import { Link, Redirect, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export default function Result() {
  const { slug, result: resultLabel } = useLocalSearchParams();
  const results = quizData.find((quiz) => quiz.slug === slug)?.results || [];
  const result = results.find((result) => result.label === resultLabel);

  if (!result) {
    return <Redirect href="/" />;
  }

  return (
    <PageLayout title={resultLabel?.toString() || ""}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{result.description}</Text>
      </View>
      <Pressable>
        <Link href="/" asChild>
          <Text style={styles.text}>Faire un autre test</Text>
        </Link>
      </Pressable>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
});
