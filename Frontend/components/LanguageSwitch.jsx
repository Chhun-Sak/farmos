import React from "react";
import { View, Pressable, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { colors } from "../lib/theme";

export default function LanguageSwitch() {
  const { i18n, t } = useTranslation();
  const isKm = i18n.language === "km";
  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      <Pressable
        onPress={() => i18n.changeLanguage("en")}
        style={{
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 20,
          backgroundColor: !isKm ? colors.green : colors.greenMuted
        }}
      >
        <Text style={{ color: !isKm ? "white" : colors.text }}>{t("english")}</Text>
      </Pressable>
      <Pressable
        onPress={() => i18n.changeLanguage("km")}
        style={{
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 20,
          backgroundColor: isKm ? colors.green : colors.greenMuted
        }}
      >
        <Text style={{ color: isKm ? "white" : colors.text }}>{t("khmer")}</Text>
      </Pressable>
    </View>
  );
}
