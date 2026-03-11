import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import Colors from "@/constants/Colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <SafeAreaProvider>
      <ThemeProvider value={DefaultTheme}>
        <SafeAreaView
          edges={["top", "right", "left"]}
          style={{ flex: 1, backgroundColor: Colors.background }}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
