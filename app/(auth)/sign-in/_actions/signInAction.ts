"use server";

import { signIn } from "@/auth";

export const signInActions = async () => {
	console.log("start");

	await signIn("google");
};
