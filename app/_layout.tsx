import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreenExpo from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import Splash from '@/app/Splash';
import { useColorScheme } from '@/hooks/use-color-scheme';

SplashScreenExpo.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      // Προσομοίωση φόρτωσης assets/API
      await new Promise(resolve => setTimeout(resolve, 6000));
      setAppIsReady(true);
      await SplashScreenExpo.hideAsync();
    }
    prepareApp();
  }, []);

  if (!appIsReady) return <Splash />;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
