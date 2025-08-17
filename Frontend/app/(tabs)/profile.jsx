import React from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { ThemedScreen, Card, T } from "../../components/ThemedPrimitives";
import { useTheme } from "../../components/ThemeProvider";

export default function Profile() {
  const { t } = useTranslation();
  const { flat } = useTheme();

  return (
    <ThemedScreen style={{ padding: 16 }}>
      <Card style={{ backgroundColor: flat.green, borderColor: flat.green, padding: 20 }}>
        <T style={{ color: "white", opacity: 0.9 }}>{t("goodAfternoon")}</T>
        <T style={{ color: "white", fontSize: 28, fontWeight: "800" }}>F</T>
        <T style={{ color: "white", fontWeight: "700" }}>Farm User</T>
        <T style={{ color: "white", opacity: 0.9 }}>123@gmail.com</T>
        <View style={{ marginTop: 10, backgroundColor: "rgba(255,255,255,.15)", alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16 }}>
          <T style={{ color: "white" }}>{t("verifiedSeller")}</T>
        </View>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <T style={{ fontWeight: "800", marginBottom: 8 }}>Seller Rating</T>
        <T muted>★ ★ ★ ★ ★ 4.8 (127 reviews)</T>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <T style={{ fontWeight: "800", marginBottom: 8 }}>{t("identityVerification")}</T>
        <T>✅ {t("governmentId")} — {t("verified")}</T>
      </Card>
    </ThemedScreen>
  );
}
