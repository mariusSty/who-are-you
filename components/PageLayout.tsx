import { ScrollView, Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView style={styles.contentScrollView}>
        <View style={styles.content}>{children}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 50,
    gap: 30,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    width: "100%",
  },
  contentScrollView: {
    flex: 1,
    width: "100%",
  },
  content: {
    gap: 20,
  },
});
