"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "../auth";
import { redirect } from "next/navigation";
import { connectToDB } from "../database/db.config";
import { userProps } from "@/typing";
import User from "../database/models/user.model";

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

export const createUser = async (data: userProps) => {
	try {
		await connectToDB();

		const newUser = await User.create(data);
		if (!newUser) {
			console.log("error in creating user");
			return;
		}
		return JSON.parse(JSON.stringify(newUser));
	} catch (error) {
		console.log(error);
	}
};
export const getUserById = async (email: string) => {
	try {
		await connectToDB();

		const user = await User.findOne({
			email,
		});
		if (!user) {
			console.log("error in creating user");
			return;
		}
		return JSON.parse(JSON.stringify(user));
	} catch (error) {
		console.log(error);
	}
};
