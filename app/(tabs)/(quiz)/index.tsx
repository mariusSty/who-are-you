import { Text, View } from "@/components/Themed";
import quizDatas from "@/constants/data.json";
import { StyleSheet } from "react-native";

export default function Quiz() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.quizContainer}>
        {quizDatas.map((quizData) => (
          <View key={quizData.slug} style={styles.quizButton}>
            <Text style={styles.quizButtonText}>{quizData.title}</Text>
          </View>
        ))}
      </View>
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
  quizContainer: {
    gap: 15,
    width: "80%",
    alignItems: "stretch",
    justifyContent: "center",
  },
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
