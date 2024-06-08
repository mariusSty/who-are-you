import { Text, View } from "@/components/Themed";
import quizDatas from "@/constants/data.json";
import { Link, Redirect, useGlobalSearchParams } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export default function Slug() {
  const { slug } = useGlobalSearchParams();
  const quiz = quizDatas.find((quiz) => quiz.slug === slug);

  if (!quiz) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{quiz.title}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.description}>{quiz.description}</Text>
      <Pressable style={styles.startButton}>
        <Link href={`/${slug}/question/1`} asChild>
          <Text style={styles.startButtonText}>Commencer le test</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
  startButton: {
    alignItems: "center",
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
