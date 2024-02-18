import { ID } from "appwrite";
import {
	avatars,
	account,
	databases,
	storage,
	appWriteConfig,
} from "./config";
import { UserProps } from "@/typing";

export const saveUserToDb = async (user: {
	userId: string;
	username: string;
	name: string;
	imageUrl: URL;
}) => {
	try {
		const newUser = await databases.createDocument(
			appWriteConfig.databaseId,
			appWriteConfig.userCollectionId,
			ID.unique(),
			user,
		);
		return newUser;
	} catch (error) {
		console.error(
			"Error saving user to database:",
			error,
		);
		throw new Error("Failed to save user to database");
	}
};

export const createUserAccount = async (
	user: UserProps,
) => {
	try {
		const newAccount = await account.create(
			ID.unique(),
			user.email,
			user.password,
			user.name,
		);
		if (!newAccount) {
			throw new Error(
				"Failed to create user account",
			);
		}

		const avatar = avatars.getInitials(user.name);
		const newUser = await saveUserToDb({
			userId: newAccount.$id,
			username: newAccount.name,
			name: newAccount.name,
			imageUrl: avatar,
		});
		return newUser;
	} catch (error) {
		console.error(
			"Error creating user account:",
			error,
		);
		throw new Error("Failed to create user account");
	}
};

export const signInUserAccount = async (user: {
	email: string;
	password: string;
}) => {
	try {
		const session = await account.createEmailSession(
			user.email,
			user.password,
		);
		return session;
	} catch (error) {
		console.error(
			"Error signing in user account:",
			error,
		);
		throw new Error("Failed to sign in user account");
	}
};
