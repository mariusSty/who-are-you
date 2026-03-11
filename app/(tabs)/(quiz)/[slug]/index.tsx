import PageLayout from "@/components/PageLayout";
import quizDatas from "@/constants/data";
import { Link, Redirect, useLocalSearchParams } from "expo-router";
import { Button, Card } from "heroui-native";

export default function Slug() {
  const { slug } = useLocalSearchParams();
  const quiz = quizDatas.find((quiz) => quiz.slug === slug);

  if (!quiz) {
    return <Redirect href="/" />;
  }

  return (
    <PageLayout title={quiz.title}>
      <Card>
        <Card.Body>
          <Card.Description className="text-base text-center">
            {quiz.description}
          </Card.Description>
        </Card.Body>
      </Card>
      <Link asChild href={`/${slug}/question/1`}>
        <Button variant="primary" size="lg">
          Commencer le test
        </Button>
      </Link>
    </PageLayout>
  );
}
