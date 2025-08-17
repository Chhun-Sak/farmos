import React, { useMemo, useState } from "react";
import { Alert, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { ThemedScreen, Card, T } from "../../components/ThemedPrimitives";
import { useTheme } from "../../components/ThemeProvider";
import { useProductStore } from "../../store/useProductStore";
import ProductCard from "../../components/ProductCard";
import FAB from "../../components/FAB";

export default function Marketplace() {
  const { t } = useTranslation();
  const { colors, flat } = useTheme();
  const router = useRouter();
  const { products, remove } = useProductStore();
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () => products.filter(p => p.name.toLowerCase().includes(q.toLowerCase())),
    [products, q]
  );

  const searchWrap = useAnimatedStyle(() => ({
    backgroundColor: colors.card.value,
    borderColor: colors.border.value
  }));

  return (
    <ThemedScreen style={{ padding: 16 }}>
      <Animated.View style={[{ borderRadius: 28, borderWidth: 1, paddingHorizontal: 16, paddingVertical: 10, marginBottom: 12 }, searchWrap]}>
        <TextInput
          placeholder={t("searchProducts")}
          placeholderTextColor={flat.subtext}
          value={q}
          onChangeText={setQ}
          style={{ color: flat.text, fontSize: 16 }}
        />
      </Animated.View>

      <Card>
        <T style={{ fontWeight: "700", marginBottom: 8 }}>{t("marketplace")}</T>
        <View style={{ gap: 12 }}>
          {filtered.map((p, idx) => (
            <Animated.View
              key={p.id}
              entering={{ initialValues: { opacity: 0, transform: [{ translateY: 6 }] }, animations: { opacity: withTiming(1, { duration: 220 }), transform: withTiming([{ translateY: 0 }], { duration: 220 }) } }}
            >
              <ProductCard
                item={p}
                onEdit={() => router.push({ pathname: "/modals/AddProductModal", params: { id: p.id } })}
                onDelete={() =>
                  Alert.alert("Delete", `Remove ${p.name}?`, [
                    { text: "Cancel", style: "cancel" },
                    { text: "OK", onPress: () => remove(p.id) }
                  ])
                }
              />
            </Animated.View>
          ))}
        </View>
      </Card>

      <FAB onPress={() => router.push("/modals/AddProductModal")} />
    </ThemedScreen>
  );
}
