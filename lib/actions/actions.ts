"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "../auth";

export const handleSignIn = async () => {
	try {
		await signIn();
	} catch (error) {
		if (error instanceof AuthError) {
			console.log(error);
		}
		throw error;
	}
};
export const handleSignout = async () => {
	try {
		await signOut();
	} catch (error) {
		if (error instanceof AuthError) {
			console.log(error);
		}
		throw error;
	}
};
