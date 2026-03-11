import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useThemeColor } from "heroui-native";

export default function TabLayout() {
  const [
    themeColorAccent,
    themeColorBackground,
    themeColorSeparator,
    themeColorMuted,
  ] = useThemeColor(["accent", "background", "separator", "muted"]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: themeColorAccent,
        tabBarInactiveTintColor: themeColorMuted,
        tabBarStyle: {
          backgroundColor: themeColorBackground,
          borderTopColor: themeColorSeparator,
        },
      }}
    >
      <Tabs.Screen
        name="(quiz)"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="book-outline" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
