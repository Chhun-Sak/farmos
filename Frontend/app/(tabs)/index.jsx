import React from "react";
import { View, Text, ScrollView } from "react-native";
import LanguageSwitch from "../../components/LanguageSwitch";
import { useTranslation } from "react-i18next";
import ThemeSwitch from "../../components/ThemeSwitch";
import { useTheme } from "../../components/ThemeProvider";

function Card({ title, value, delta, colors }) {
  return (
    <View style={{ backgroundColor: colors.card, borderRadius: 18, padding: 16, flex: 1, borderWidth: 1, borderColor: colors.border }}>
      <Text style={{ color: colors.subtext, marginBottom: 8 }}>{title}</Text>
      <Text style={{ fontWeight: "800", fontSize: 22, color: colors.text }}>{value}</Text>
      <Text style={{ color: colors.green, marginTop: 8 }}>{delta}</Text>
    </View>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg }} contentContainerStyle={{ padding: 16, gap: 16 }}>
      <View style={{ backgroundColor: colors.green, borderRadius: 24, padding: 20 }}>
        <Text style={{ color: "white", opacity: 0.85 }}>{t("goodAfternoon")}</Text>
        <Text style={{ color: "white", fontSize: 28, fontWeight: "800" }}>Farm User</Text>
        <LanguageSwitch />
        <ThemeSwitch />
      </View>

      <View style={{ backgroundColor: colors.card, borderRadius: 18, padding: 16, borderWidth: 1, borderColor: colors.border }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
          <Text style={{ fontWeight: "700", color: colors.text }}>{t("farmAnalytics")}</Text>
          <Text style={{ color: colors.subtext }}>{t("thisMonth")}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Card title={t("revenue")} value="$12,500" delta="+23.5%" colors={colors} />
          <Card title={t("sales")} value="156"    delta="+18.2%" colors={colors} />
        </View>
        <View style={{ height: 12 }} />
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Card title={t("customers")} value="89"  delta="+12.1%" colors={colors} />
          <Card title={t("rating")}    value="4.8" delta="+0.3"   colors={colors} />
        </View>
      </View>
    </ScrollView>
  );
}
