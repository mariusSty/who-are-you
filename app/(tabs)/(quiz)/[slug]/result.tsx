import PageLayout from "@/components/PageLayout";
import { getQuizResultBySlug } from "@/lib/quiz";
import { Link, Redirect, useLocalSearchParams } from "expo-router";
import { Button, Card } from "heroui-native";

export default function Result() {
  const { slug, result } = useLocalSearchParams();
  const quizResult = getQuizResultBySlug(
    slug?.toString() || "",
    result?.toString() || "",
  );

  if (!result || !quizResult) {
    return <Redirect href="/" />;
  }

  return (
    <PageLayout title={quizResult.label}>
      <Card>
        <Card.Body>
          <Card.Description className="text-base">
            {quizResult.description}
          </Card.Description>
        </Card.Body>
      </Card>
      <Link asChild href="/">
        <Button variant="primary">Faire un autre test</Button>
      </Link>
      <Link asChild href="/profile">
        <Button variant="secondary">Voir votre profil</Button>
      </Link>
    </PageLayout>
  );
}
