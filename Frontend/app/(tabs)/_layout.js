import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../components/ThemeProvider";

export default function TabsLayout() {
  const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.subtext,
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border }
      }}>
      <Tabs.Screen name="index" options={{ title: "Home",
        tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} /> }} />
      <Tabs.Screen name="marketplace" options={{ title: "Marketplace",
        tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "storefront" : "storefront-outline"} color={color} size={size} /> }} />
      <Tabs.Screen name="forum" options={{ title: "Forum",
        tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "people" : "people-outline"} color={color} size={size} /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile",
        tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "person-circle" : "person-circle-outline"} color={color} size={size} /> }} />
      <Tabs.Screen name="resources" options={{ title: "Resources",
        tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "library" : "library-outline"} color={color} size={size} /> }} />
    </Tabs>
  );
}
