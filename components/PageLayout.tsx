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
      <View style={styles.separator} />
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
    gap: 30,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginTop: 50,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    width: "80%",
    backgroundColor: "#000",
  },
  contentScrollView: {
    flex: 1,
    width: "100%",
  },
  content: {
    paddingHorizontal: 50,
    paddingBottom: 30,
    gap: 20,
  },
});
