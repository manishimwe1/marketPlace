import { ID, Query } from "appwrite";
import { account, databases } from "./config";
import { INewUser, UserProps } from "@/typing";

export const savingUser = async (newUser: INewUser) => {
	try {
		const savedUser = await databases.createDocument(
			"65d0f87d649d71ad3953",
			"65d0f92678ce86982d9b",
			ID.unique(),
			newUser,
		);

		if (!savingUser) throw Error;

		return savedUser;
	} catch (error) {
		console.log(error, "in saving data");
	}
};

export async function getAccount() {
	try {
		const currentAccount = await account.get();

		return currentAccount;
	} catch (error) {
		console.log(error);
	}
}

// ============================== GET USER
export async function getCurrentUser() {
	try {
		const currentAccount = await getAccount();

		if (!currentAccount) throw Error;

		if (!process.env.APPWRITE_DATABASES_ID!) {
			return console.log("Missing datatabesId");
		}
		if (!process.env.APPWRITE_USER_COLLECTIONS_ID!!) {
			return console.log("Missing user collection");
		}
		const currentUser = await databases.listDocuments(
			process.env.APPWRITE_DATABASES_ID!,
			process.env.APPWRITE_USER_COLLECTIONS_ID!,
			[Query.equal("userId", currentAccount.$id)],
		);

		if (!currentUser) throw Error;

		return currentUser.documents[0];
	} catch (error) {
		console.log(error);
		return null;
	}
}
