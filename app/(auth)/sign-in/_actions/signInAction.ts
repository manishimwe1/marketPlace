"use server";

import { signIn } from "@/auth";

export const signInActions = async () => {
	await signIn("google");
};
