import { Text, View } from "@/components/Themed";
import quizDatas from "@/constants/data.json";
import { StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.quizResultContainer}>
        {quizDatas.map((quizData) => (
          <View key={quizData.slug} style={styles.quizResultItem}>
            <Text style={styles.quizResultItemTitleText}>{quizData.title}</Text>
            <Text style={styles.quizResultItemResultText}>Result</Text>
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
    height: 1,
    width: "80%",
  },
  quizResultContainer: {
    gap: 15,
    width: "80%",
    alignItems: "stretch",
    justifyContent: "center",
  },
  quizResultItem: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  quizResultItemTitleText: {
    fontSize: 14,
  },
  quizResultItemResultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
