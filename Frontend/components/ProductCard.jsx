import React, { useEffect } from "react";
import { Image, Pressable, View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "./ThemeProvider";
import { T } from "./ThemedPrimitives";

const AView = Animated.createAnimatedComponent(View);

export default function ProductCard({ item, onEdit, onDelete }) {
  const { flat, colors } = useTheme();
  const appear = useSharedValue(0);
  const press = useSharedValue(1);

  useEffect(() => {
    appear.value = withTiming(1, { duration: 220 });
  }, []);

  const cardStyle = useAnimatedStyle(() => ({
    opacity: appear.value,
    transform: [{ scale: withSpring(1) }],
    backgroundColor: colors.card.value,
    borderColor: colors.border.value
  }));

  const pressableStyle = useAnimatedStyle(() => ({
    transform: [{ scale: press.value }]
  }));

  return (
    <AView style={[{ borderRadius: 16, padding: 12, marginBottom: 12, borderWidth: 1, flexDirection: "row", gap: 12 }, cardStyle]}>
      <View style={{ width: 56, height: 56, borderRadius: 12, backgroundColor: flat.greenMuted, alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {item.imageUri ? (
          <Image source={{ uri: item.imageUri }} style={{ width: "100%", height: "100%" }} />
        ) : (
          <Ionicons name="leaf" size={28} color={flat.green} />
        )}
      </View>

      <View style={{ flex: 1 }}>
        <T style={{ fontWeight: "700", fontSize: 16 }}>{item.name}</T>
        <T muted style={{ marginTop: 2 }}>{item.seller ?? ""}</T>
        <T style={{ marginTop: 6, fontWeight: "600", color: flat.green }}>
          ${Number(item.price || 0).toFixed(1)} {item.unit}
        </T>
      </View>

      <View style={{ gap: 8, alignItems: "flex-end" }}>
        <Animated.View style={pressableStyle}>
          <Pressable
            onPressIn={() => (press.value = withTiming(0.96, { duration: 80 }))}
            onPressOut={() => (press.value = withTiming(1, { duration: 80 }))}
            onPress={onEdit}
          >
            <Ionicons name="create-outline" size={22} color={flat.green} />
          </Pressable>
        </Animated.View>

        <Pressable onPress={onDelete}>
          <Ionicons name="trash-outline" size={22} color={flat.danger} />
        </Pressable>
      </View>
    </AView>
  );
}
