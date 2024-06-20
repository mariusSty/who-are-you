import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { Text, View } from "@/components/Themed";
import { pastelColors } from "@/constants/Colors";
import { getQuizResultBySlug } from "@/lib/quiz";
import { Redirect, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

export default function Result() {
  const { slug, result } = useLocalSearchParams();
  const quizResult = getQuizResultBySlug(
    slug?.toString() || "",
    result?.toString() || ""
  );

  if (!result || !quizResult) {
    return <Redirect href="/" />;
  }

  return (
    <PageLayout title={quizResult.label}>
      <View style={styles.descriptionContainer}>
        <Text>{quizResult.description}</Text>
      </View>
      <Button link="/" color={pastelColors[0]}>
        <Text>Faire un autre test</Text>
      </Button>
      <Button link="/profile" color={pastelColors[3]}>
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
