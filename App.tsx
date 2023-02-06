import { View } from "react-native";
import AppLoadingProps from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { Home } from "./src/screens/Home/Home.screen";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";

export default function App() {
  // https://docs.expo.dev/versions/v45.0.0/sdk/app-loading/
  // https://docs.expo.dev/guides/using-custom-fonts/
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoadingProps />;
  }

  return (
    <ThemeProvider theme={theme}>
    <View style={{ flex: 1 }}>
      <Home />
      <StatusBar style="auto" />
    </View>
    </ThemeProvider>
  );
}
