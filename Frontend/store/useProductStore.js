import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

export const useProductStore = create(
  persist(
    (set) => ({
      products: [
        { id: "1", name: "Organic Tomatoes", price: 25, unit: "per kg", rating: 4.8, seller: "Green Farm Co.", negotiable: true },
        { id: "2", name: "Premium Rice", price: 45, unit: "per 25kg bag", rating: 4.9, seller: "Rice Valley Farm" },
        { id: "3", name: "Fresh Milk", price: 15, unit: "per liter", rating: 4.7, seller: "Dairy Hills" }
      ],
      add: (p) => set((s) => ({ products: [p, ...s.products] })),
      update: (p) => set((s) => ({ products: s.products.map((x) => (x.id === p.id ? p : x)) })),
      remove: (id) => set((s) => ({ products: s.products.filter((x) => x.id !== id) }))
    }),
    { name: "products", storage: createJSONStorage(() => AsyncStorage) }
  )
);
