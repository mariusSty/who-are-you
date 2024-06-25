import { ScrollView, Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function PageLayout({ children, title }: PageLayoutProps) {
  const theme = useColorScheme() ?? "light";

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: Colors[theme].background }]}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View
        style={[styles.separator, { backgroundColor: Colors[theme].text }]}
      />
      <ScrollView style={styles.contentScrollView}>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 30,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    width: "80%",
  },
  contentScrollView: {
    flex: 1,
    width: "100%",
  },
  content: {
    paddingHorizontal: 50,
    gap: 20,
  },
});
