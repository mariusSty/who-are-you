import { Link, Stack } from "expo-router";
import { Button } from "heroui-native";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-5 bg-background">
        <Text className="text-xl font-bold text-foreground">
          This screen doesn't exist.
        </Text>
        <Link asChild href="/">
          <Button variant="ghost" className="mt-4">
            Go to home screen!
          </Button>
        </Link>
      </View>
    </>
  );
}
