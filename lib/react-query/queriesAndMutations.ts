import { UserProps } from "@/typing";
import { useMutation } from "@tanstack/react-query";
import {
	createUserAccount,
	signInUserAccount,
} from "../appwrite/api";

export const useUserCreateAccount = () => {
	return useMutation({
		mutationFn: (user: UserProps) => {
			return createUserAccount(user);
		},
	});
};

export const useUserSignin = () => {
	return useMutation({
		mutationFn: (user: {
			email: string;
			password: string;
		}) => {
			return signInUserAccount(user);
		},
	});
};

//C:\Users\kyle\AppData\Roaming\npm\node_modules\appwrite
