import React from "react";
import Animated from "react-native-reanimated";
import { Text as RNText, View as RNView } from "react-native";
import { useTheme } from "./ThemeProvider"; // To access dynamic theme

export function ThemedScreen({ style, ...props }) {
  const { colors } = useTheme();
  const s = useAnimatedStyle(() => ({
    backgroundColor: colors.bg.value
  }));
  return <Animated.View {...props} style={[{ flex: 1 }, s, style]} />;
}

export function Card({ style, ...props }) {
  const { colors } = useTheme();
  const s = useAnimatedStyle(() => ({
    backgroundColor: colors.card.value,
    borderColor: colors.border.value
  }));
  return <Animated.View {...props} style={[{ borderRadius: 18, borderWidth: 1, padding: 16 }, s, style]} />;
}

export function T({ style, muted, ...props }) {
  const { colors } = useTheme();
  const s = useAnimatedStyle(() => ({ color: muted ? colors.subtext.value : colors.text.value }));
  return <Animated.createAnimatedComponent(RNText) {...props} style={[s, style]} />;
}

export function View({ style, ...props }) {
  const { colors } = useTheme();
  const s = useAnimatedStyle(() => ({ backgroundColor: colors.card.value }));
  return <Animated.createAnimatedComponent(RNView) {...props} style={[s, style]} />;
}
