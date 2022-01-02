import "react-native-gesture-handler";
import { LogBox, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Routes } from "./src/routes";

import { Background } from "./src/components";

import { AuthProvider } from "./src/contexts/AuthContext";

import { theme } from "./src/shared/styles";

LogBox.ignoreLogs([
  "You are not currently signed in to Expo on your development machine.",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Background>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </Background>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
