import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { Text, View } from "@/components/Themed";
import { pastelColors } from "@/constants/Colors";
import { getQuizResultBySlug } from "@/lib/quiz";
import { Image } from "expo-image";
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
        {quizResult.src && (
          <Image
            alt={quizResult.label}
            source={quizResult.src}
            style={styles.descriptionImage}
          />
        )}
        <Text style={styles.descriptionText}>{quizResult.description}</Text>
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
    gap: 24,
  },
  descriptionImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  descriptionText: {
    fontSize: 16,
  },
});
