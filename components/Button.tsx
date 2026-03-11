import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

type ButtonProps = {
  children: React.ReactNode;
  link?: string;
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export default function Button({
  children,
  link,
  color,
  style,
  onPress,
}: ButtonProps) {
  if (link) {
    const flatStyle = StyleSheet.flatten([
      styles.button,
      style,
      { backgroundColor: color ?? Colors.tint, borderColor: Colors.text },
    ]);

    return (
      <Link asChild href={link}>
        <Pressable style={flatStyle}>{children}</Pressable>
      </Link>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        style,
        {
          backgroundColor: color ?? Colors.tint,
          borderColor: Colors.text,
        },
      ]}
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
