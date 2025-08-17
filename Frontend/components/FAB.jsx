import React, { useEffect } from "react";
import Animated, { useSharedValue, withSpring, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "./ThemeProvider";

const APressable = Animated.createAnimatedComponent(Pressable);

export default function FAB({ onPress }) {
  const { flat } = useTheme();
  const scale = useSharedValue(0.6);
  const press = useSharedValue(1);

  useEffect(() => { scale.value = withSpring(1, { damping: 12 }); }, []);

  const s = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value * press.value }],
    backgroundColor: flat.green
  }));

  return (
    <APressable
      onPressIn={() => (press.value = withTiming(0.96, { duration: 80 }))}
      onPressOut={() => (press.value = withTiming(1, { duration: 80 }))}
      onPress={onPress}
      style={[{
        position: "absolute", right: 20, bottom: 28, width: 56, height: 56,
        borderRadius: 28, alignItems: "center", justifyContent: "center",
      }, s]}
      accessibilityRole="button"
      accessibilityLabel="Add item"
    >
      <Ionicons name="add" size={28} color="white" />
    </APressable>
  );
}
