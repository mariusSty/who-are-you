import { Separator } from "heroui-native";
import { ScrollView, Text, View } from "react-native";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <View className="flex-1 bg-background items-center pt-8 gap-8">
      <View className="items-center justify-center w-4/5">
        <Text className="text-3xl font-bold text-foreground text-center">
          {title}
        </Text>
      </View>
      <Separator className="w-4/5" />
      <ScrollView
        className="flex-1 w-full"
        contentContainerClassName="px-12 gap-5 pb-8"
      >
        {children}
      </ScrollView>
    </View>
  );
}
