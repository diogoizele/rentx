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
import { ThemeProvider } from "styled-components/native";

import { CarDetails, Home } from "./src/screens";
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

  //"https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/1ba3757e-5a2e-40c1-b701-147567924ef6/9f8cd72c-15c8-40e0-9e65-c762d7783263.png",
  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      <CarDetails />
    </ThemeProvider>
  );
}
