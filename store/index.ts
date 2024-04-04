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
export type TProduct = {
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

// export const useProductStore = create<ProductType>(
// 	(set) => ({
// 		product: {
// 			image: "",
// 			title: "",
// 			description: "",
// 			price: "",
// 			category: "",
// 			location: "",
// 			freeDelivery: false,
// 			deliveryFee: "",
// 			stock: "",
// 			sellerId: "",
// 		},
// 		// allProducts: () =>
// 		// 	set((state) => ({ product: state.product })),
// 		// allProducts: async () => {
// 		// 	const response: IProduct =
// 		// 		await getAllProduct();
// 		// 	set({ product: response });
// 		// },
// 		// ProductById: async (id: string) => {
// 		// 	const response: IProduct =
// 		// 		await getAllProductById(id);
// 		// 	set({ product: response });
// 		// },
// 	}),
// );
