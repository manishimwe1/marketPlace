"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "../auth";
import { redirect } from "next/navigation";

export const handleSignIn = async () => {
	try {
		await signIn();
		redirect("/");
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
		redirect("/");
	} catch (error) {
		if (error instanceof AuthError) {
			console.log(error);
		}
		throw error;
	}
};
