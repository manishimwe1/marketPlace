import { create } from "zustand";

interface ItemStoreState {
	items: number;
	increaseItems: () => void;
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
