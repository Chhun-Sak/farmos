import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useProductStore } from "../../store/useProductStore";
import { colors } from "../../lib/theme";
import { useTranslation } from "react-i18next";

function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export default function AddProductModal() {
  const { t } = useTranslation();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { products, add, update } = useProductStore();
  const editing = products.find((p) => p.id === params.id);

  const [name, setName] = useState(editing?.name ?? "");
  const [price, setPrice] = useState(editing?.price?.toString() ?? "");
  const [unit, setUnit] = useState(editing?.unit ?? "per kg");
  const [imageUri, setImageUri] = useState(editing?.imageUri);
  const [description, setDescription] = useState(editing?.description ?? "");

  async function pickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") return;
    const res = await ImagePicker.launchImageLibraryAsync({ quality: 0.8, allowsEditing: true });
    if (!res.canceled) setImageUri(res.assets[0].uri);
  }

  function onSave() {
    const base = {
      id: editing?.id ?? makeId(),
      name: name.trim(),
      price: parseFloat(price) || 0,
      unit,
      imageUri,
      description
    };
    editing ? update(base) : add(base);
    router.back();
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>{editing ? t("editProduct") : t("addProduct")}</Text>

      <Pressable onPress={pickImage} style={{ height: 160, borderRadius: 12, backgroundColor: colors.greenMuted, alignItems: "center", justifyContent: "center" }}>
        {imageUri ? <Image source={{ uri: imageUri }} style={{ width: "100%", height: "100%", borderRadius: 12 }} /> : <Text>{t("chooseImage")}</Text>}
      </Pressable>

      <TextInput placeholder={t("name")} value={name} onChangeText={setName} style={{ borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 12 }} />
      <View style={{ flexDirection: "row", gap: 8 }}>
        <TextInput placeholder={t("price")} value={price} keyboardType="decimal-pad" onChangeText={setPrice} style={{ flex: 1, borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 12 }} />
        <TextInput placeholder={t("unit")} value={unit} onChangeText={setUnit} style={{ flex: 1, borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 12 }} />
      </View>
      <TextInput placeholder={t("description")} value={description} onChangeText={setDescription} multiline style={{ borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 12, minHeight: 80 }} />

      <View style={{ flexDirection: "row", gap: 12, marginTop: 4 }}>
        <Pressable onPress={() => router.back()} style={{ flex: 1, padding: 14, borderRadius: 12, backgroundColor: colors.greenMuted }}>
          <Text style={{ textAlign: "center" }}>{t("cancel")}</Text>
        </Pressable>
        <Pressable onPress={onSave} style={{ flex: 1, padding: 14, borderRadius: 12, backgroundColor: colors.green }}>
          <Text style={{ color: "white", textAlign: "center", fontWeight: "700" }}>{t("save")}</Text>
        </Pressable>
      </View>
    </View>
  );
}
