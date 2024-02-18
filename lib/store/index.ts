import { IUser, UserProps } from "@/typing";
import { create } from "zustand";

export const INITIAL_USER = {
	id: "",
	name: "",
	username: "",
	email: "",
	imageUrl: "",
	bio: "",
};

const useUserAuth = create((set) => ({
	INITIAL_USER,
	useUserAccount: () =>
		set((state: UserProps) => ({
			INITIAL_USER: state.email,
		})),
	removeAllBears: () => set({ bears: 0 }),
}));
