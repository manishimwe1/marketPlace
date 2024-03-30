import {
	IProduct,
	getAllProduct,
	getAllProductById,
} from "@/lib/actions/product.actions";
import { create } from "zustand";

interface ItemStoreState {
	items: number;
	increaseItems: () => void;
}
interface ProductType {
	product: IProduct;
	allProducts: () => void;
	ProductById: (id: string) => void;
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

export const useProductStore = create<ProductType>(
	(set) => ({
		product: {
			image: "",
			title: "",
			description: "",
			price: "",
			category: "",
			location: "",
			freeDelivery: false,
			deliveryFee: "",
			stock: "",
			sellerId: "",
		},
		// allProducts: () =>
		// 	set((state) => ({ product: state.product })),
		allProducts: async () => {
			const response: IProduct =
				await getAllProduct();
			set({ product: response });
		},
		ProductById: async (id: string) => {
			const response: IProduct =
				await getAllProductById(id);
			set({ product: response });
		},
	}),
);
