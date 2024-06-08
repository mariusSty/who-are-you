import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Pressable, StyleSheet, useColorScheme } from "react-native";

type ButtonProps = {
  children: React.ReactNode;
  link?: string;
  onPress?: () => void;
};

export default function Button({ children, link, onPress }: ButtonProps) {
  const theme = useColorScheme() ?? "light";

  if (link) {
    return (
      <Link
        asChild
        href={link}
        style={[styles.button, { backgroundColor: Colors[theme].tint }]}
      >
        <Pressable>{children}</Pressable>
      </Link>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: Colors[theme].tint }]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    padding: 20,
  },
});
