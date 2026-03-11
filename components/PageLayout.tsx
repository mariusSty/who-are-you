import Colors from "@/constants/Colors";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <View style={[styles.container, { backgroundColor: Colors.background }]}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={[styles.separator, { backgroundColor: Colors.text }]} />
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
    paddingTop: 30,
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
    paddingBottom: 30,
  },
});
