import React from "react";
import { View } from "react-native";
import { ThemedScreen, Card, T } from "../../components/ThemedPrimitives";

function Post({ title, tag, body, meta }) {
  return (
    <Card style={{ marginBottom: 12 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <T style={{ fontWeight: "800", fontSize: 16 }}>{title}</T>
        <T muted>{tag}</T>
      </View>
      <T muted style={{ marginTop: 6 }}>{body}</T>
      <View style={{ flexDirection: "row", gap: 16, marginTop: 10 }}>
        <T>👍 {meta.likes}</T>
        <T>💬 {meta.comments}</T>
      </View>
    </Card>
  );
}

export default function Forum() {
  return (
    <ThemedScreen style={{ padding: 16 }}>
      <Card style={{ marginBottom: 12 }}>
        <T style={{ fontWeight: "700" }}>Community Forum</T>
      </Card>

      <Post
        title="Best practices for organic farming?"
        tag="General"
        body="I'm transitioning to organic farming. What are the essential practices I should follow?"
        meta={{ likes: 25, comments: 12 }}
      />
      <Post
        title="Tomato disease identification help"
        tag="Plant Health"
        body="My tomato plants are showing yellow spots. Can anyone help identify the disease?"
        meta={{ likes: 18, comments: 8 }}
      />
      <Post
        title="Market prices for wheat this season"
        tag="Market Talk"
        body="Discussion about current wheat market trends and pricing predictions."
        meta={{ likes: 9, comments: 4 }}
      />
    </ThemedScreen>
  );
}
