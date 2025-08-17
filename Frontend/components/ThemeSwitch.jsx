import React from "react";
import { View, Pressable, Text } from "react-native";
import { useTheme } from "./ThemeProvider";

export default function ThemeSwitch() {
  const { mode, setMode, colors } = useTheme();
  const Item = ({label,val}) => (
    <Pressable
      onPress={() => setMode(val)}
      style={{
        paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20,
        backgroundColor: mode === val ? colors.green : colors.greenMuted, marginRight: 8
      }}>
      <Text style={{ color: mode === val ? "white" : colors.text }}>{label}</Text>
    </Pressable>
  );
  return (
    <View style={{ flexDirection:"row", marginTop: 8 }}>
      <Item label="System" val="system" />
      <Item label="Light"  val="light" />
      <Item label="Dark"   val="dark" />
    </View>
  );
}
