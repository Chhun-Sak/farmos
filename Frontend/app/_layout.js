import React from "react";
import { Stack } from "expo-router";
import "../i18n";
import { ThemeProvider, useTheme } from "../components/ThemeProvider";
import { StatusBar } from "expo-status-bar";

function WithTheme() {
  const { real, colors } = useTheme();
  return (
    <>
      <StatusBar style={real === "dark" ? "light" : "dark"} backgroundColor={colors.bg} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <WithTheme />
    </ThemeProvider>
  );
}
