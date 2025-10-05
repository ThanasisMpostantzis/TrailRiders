import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';


export default function RootLayout() {

  return (
    <Stack initialRouteName="loginRegister/loginRegisterScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="loginRegister/loginRegisterScreen" />
      <Stack.Screen name="loginRegister/login" />
      <Stack.Screen name="loginRegister/register" />
      <Stack.Screen name="(tabs)"/>
      <StatusBar style='auto'/>
    </Stack>
  );
}
    
