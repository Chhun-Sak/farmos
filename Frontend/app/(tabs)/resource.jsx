import React from "react";
import { View } from "react-native";
import { ThemedScreen, Card, T } from "../../components/ThemedPrimitives";

function Tile({ title, subtitle }) {
  return (
    <Card style={{ flex: 1 }}>
      <T style={{ fontWeight: "700" }}>{title}</T>
      <T muted style={{ marginTop: 6 }}>{subtitle}</T>
    </Card>
  );
}

export default function Resources() {
  return (
    <ThemedScreen style={{ padding: 16 }}>
      <Card style={{ marginBottom: 12 }}>
        <T style={{ fontWeight: "800", fontSize: 18 }}>Knowledge Center</T>
      </Card>

      <View style={{ flexDirection: "row", gap: 12 }}>
        <Tile title="Farming Guides" subtitle="120+ Articles" />
        <Tile title="Video Tutorials" subtitle="50+ Videos" />
      </View>

      <View style={{ height: 12 }} />

      <View style={{ flexDirection: "row", gap: 12 }}>
        <Tile title="Weather Data" subtitle="Real-time" />
        <Tile title="Market Analysis" subtitle="Daily Updates" />
      </View>
    </ThemedScreen>
  );
}
