import React, { createContext, useContext, useState, useMemo, useEffect } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { light, dark } from "../lib/theme";  // assuming you've defined colors in theme.js
import { useSharedValue, withTiming } from "react-native-reanimated";

const ThemeCtx = createContext(null);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("system");
  const [system, setSystem] = useState(Appearance.getColorScheme() || "light");
  const progress = useSharedValue(0); // 0=light, 1=dark

  useEffect(() => {
    AsyncStorage.getItem("themeMode").then((m) => m && setMode(m));
    const sub = Appearance.addChangeListener(({ colorScheme }) => setSystem(colorScheme || "light"));
    return () => sub.remove();
  }, []);

  useEffect(() => { progress.value = withTiming(mode === "dark" ? 1 : 0, { duration: 250 }); }, [mode]);

  const real = mode === "system" ? system : mode;
  const colors = real === "dark" ? dark : light;

  const value = useMemo(() => ({ mode, setMode, real, colors }), [mode, real, colors]);
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
