import { create } from "zustand";

interface ItemStoreState {
	items: number;
	increaseItems: () => void;
}
type TProduct = {
	image: string;
	title: string;
	description: string;
	price: string;
	category: string;
	location: string;
	freeDelivery: boolean;
	deliveryFee: string;
	stock: string;
	sellerId: string;
};
export interface ProductType {
	product?: TProduct;
	allProducts: () => void;
	ProductById: (id: string) => Promise<void>;
}

export const useItemstore = create<ItemStoreState>(
	(set) => ({
		items: 0,
		increaseItems: () =>
			set((state) => ({ items: state.items + 1 })),
		removeItem: () =>
			set((state) => ({ items: state.items - 1 })),
		removeAllItems: () => set({ items: 0 }),
	}),
);
