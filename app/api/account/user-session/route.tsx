import {
	Account,
	Client,
	Databases,
	Query,
} from "appwrite";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	// const body = await request.json();
	// const { email, name, password } = body;

	try {
		const client = new Client()
			.setEndpoint(`${process.env.APPWRITE_BASE_URL}`) // Your API Endpoint
			.setProject(
				`${process.env.APPWRITE_PROJECT_ID}`,
			);
		const account = new Account(client);
		const databases = new Databases(client);
		const currentAccount = await account.get();

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

		if (currentUser) {
			return NextResponse.json({
				message: "error geting user",
				status: 401,
			});
		}
		return NextResponse.json({
			message: "OK",
			status: 200,
		});
	} catch (error) {
		return NextResponse.json({
			message: "error occur",
			error,
			status: 401,
		});
	}
}
