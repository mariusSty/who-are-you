import { pastelColors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { BookOpen, User } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="(quiz)"
        options={{
          tabBarIcon: ({ color }) => <BookOpen size={26} color={color} />,
          tabBarActiveTintColor: pastelColors[0],
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <User size={26} color={color} />,
          tabBarActiveTintColor: pastelColors[3],
        }}
      />
    </Tabs>
  );
}
