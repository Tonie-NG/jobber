import * as Font from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import DMBold from "../assets/fonts/DMSans-Bold.ttf";
import DMMedium from "../assets/fonts/DMSans-Medium.ttf";
import DMRegular from "../assets/fonts/DMSans-Regular.ttf";

SplashScreen.preventAutoHideAsync();

function Layout() {
  const [fontLoaded, setFontLoaded] = useState<Boolean>(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        DMRegular: DMRegular,
        DMBold: DMBold,
        DMMedium: DMMedium,
      });

      setFontLoaded(true);
    }

    loadFont();

    return () => {
      setFontLoaded(false);
    };
  }, []);

  if (!fontLoaded) {
    return null;
  }
  return <Stack />;
}

export default Layout;
