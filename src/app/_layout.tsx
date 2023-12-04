import "../../global.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { vars } from "nativewind";
import { memo, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import {Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { AmaticSC_400Regular, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import SplashAnimation from "@/src/components/day4/splash-screen-component";
import Animated, {FadeIn} from "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default memo(function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);
  const [loaded, error] = useFonts({
    SpaceMono: require("@/src/assets/fonts/SpaceMono-Regular.ttf"),
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,

    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (loaded || error) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [loaded, error]);

 const showAnimatedSplashScreen = !appReady || !splashAnimationFinished;

  return <RootLayoutNav
    showAnimatedSplashScreen={showAnimatedSplashScreen}
    setSplashAnimationFinished={setSplashAnimationFinished}
  />;
});

const theme = vars({
  "--theme-fg": "black",
  "--theme-bg": "rgba(230,230,230,1)",
});

function RootLayoutNav({showAnimatedSplashScreen, setSplashAnimationFinished}: any) {

  if(showAnimatedSplashScreen) {
    return (
      <SplashAnimation
        onAnimationFinish={(isCanceled: any) => {
          if(!isCanceled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <Animated.View entering={FadeIn} style={[theme, StyleSheet.absoluteFill]}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </Animated.View>
    </GestureHandlerRootView>
  );
}
