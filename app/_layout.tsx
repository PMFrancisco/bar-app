import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import {
  PaperProvider,
  DefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
} from "react-native-paper";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const theme = colorScheme === "dark" ? PaperDarkTheme : DefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "El Patio",
            headerStyle: { backgroundColor: theme.colors.primary },
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="admin"
          options={{
            title: "Admin",
            headerStyle: { backgroundColor: theme.colors.primary },
            headerShown: true,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}
