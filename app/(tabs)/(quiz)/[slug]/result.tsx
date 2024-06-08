import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { Text, View } from "@/components/Themed";
import quizData from "@/constants/data";
import { Redirect, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

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
        <Text>{result.description}</Text>
      </View>
      <Button link="/">
        <Text>Faire un autre test</Text>
      </Button>
      <Button link="/profile">
        <Text>Voir votre profil</Text>
      </Button>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
