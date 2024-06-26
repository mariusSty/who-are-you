import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  useColorScheme,
  ViewStyle,
} from "react-native";

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
  const theme = useColorScheme() ?? "light";

  if (link) {
    return (
      <Link
        asChild
        href={link}
        style={[
          styles.button,
          style,
          {
            backgroundColor: color ?? Colors[theme].tint,
            borderColor: Colors[theme].text,
          },
        ]}
      >
        <Pressable>{children}</Pressable>
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
          backgroundColor: color ?? Colors[theme].tint,
          borderColor: Colors[theme].text,
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
