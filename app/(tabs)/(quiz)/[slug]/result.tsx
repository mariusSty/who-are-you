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
    <View style={styles.container}>
      <Text style={styles.title}>Résultat :</Text>
      <Text style={styles.text}>{resultLabel}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{result.description}</Text>
      </View>
      <Pressable>
        <Link href="/" asChild>
          <Text style={styles.text}>Faire un autre test</Text>
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  descriptionContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
  },
});
