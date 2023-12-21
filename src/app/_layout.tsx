import "../../global.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { vars } from "nativewind";
import { memo, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import {Inter_900Black} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { AmaticSC_400Regular, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import SplashAnimation from "@/src/components/day4/splash-screen-component";
import Animated, {FadeIn} from "react-native-reanimated";
import { Amplify } from 'aws-amplify';
import { ThemeProvider, Theme } from '@aws-amplify/ui-react-native';
import { Authenticator } from '@aws-amplify/ui-react-native';
import BiometricProvider from "@/src/components/day10/biometrics-provider";
// import { vexo } from 'vexo-analytics';
//
// vexo(process.env.EXPO_PUBLIC_VEXO_ANALYTICS_KEY!);
import { Platform } from 'react-native';
import Purchases from "react-native-purchases";

const REVENUE_CAT_API_KEY = process.env.EXPO_PUBLIC_REVENUE_CAT_IOS_KEY!;

// Amplify.configure(awsExports);
SplashScreen.preventAutoHideAsync();

const themeDesign: Theme = {
  tokens: {
    colors: {
      brand: {
        primary: 'red',
      },

      background: {
        primary: '{colors.gray}',
      },
      font: {
        primary: 'black',
      },
    },
  },
};

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
    Inter: Inter_900Black,
    AmaticSC_400Regular: AmaticSC_400Regular,
    AmaticSC_700Bold: AmaticSC_700Bold,
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

  // useEffect(() => {
  //   if (Platform.OS === 'ios') {
  //   	Purchases.configure({ apiKey: REVENUE_CAT_API_KEY });
  //   }
  // }, []);

  if (showAnimatedSplashScreen) {
    return (
      <SplashAnimation
        onAnimationFinish={(isCancelled: any) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  return (
    <BiometricProvider>
      <GestureHandlerRootView style={{ flex: 1}}>
        {/* @ts-ignore */}
        <Animated.View entering={FadeIn} style={[theme, StyleSheet.absoluteFill]}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>
        </Animated.View>
      </GestureHandlerRootView>
    </BiometricProvider>
  );
}

// return (
//   <Authenticator.Provider>
//     <ThemeProvider theme={theme}>
//       <GestureHandlerRootView style={{ flex: 1 }}>
//         <Animated.View style={{ flex: 1 }} entering={FadeIn}>
//           <Stack screenOptions={{}}>
//             <Stack.Screen name="index" options={{ title: 'DEVember' }} />
//           </Stack>
//         </Animated.View>
//       </GestureHandlerRootView>
//     </ThemeProvider>
//   </Authenticator.Provider>
// );
// }
