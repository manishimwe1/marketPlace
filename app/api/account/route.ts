import {
	appWriteConfig,
	avatars,
	databases,
} from "@/lib/appwrite/config";
import { Account, Client, ID } from "appwrite";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type Payload = {
	email: string;
	name: string;
	username: string;
	password: string;
};

export async function GET(request: NextRequest) {
	return NextResponse.json({ messsage: "Hello World" });
}

export async function POST(request: NextRequest) {
	const body: Payload = await request.json();
	const { email, name, password } = body;

	try {
		const client = new Client()
			.setEndpoint(`${process.env.APPWRITE_BASE_URL}`) // Your API Endpoint
			.setProject(
				`${process.env.APPWRITE_PROJECT_ID}`,
			);

		const account = new Account(client);
		// console.log("account", JSON.stringify(account));
		const newUserAccount = await account.create(
			ID.unique(),
			email,
			password,
			name,
		);

		const path =
			request.nextUrl.searchParams.get("path") || "/";
		revalidatePath(path);

		if (!newUserAccount) {
			return NextResponse.json({
				status: 404,
				message: "An error occurred",
			});
		}

		return NextResponse.json({
			status: 201,
			message: "Account Created",
			data: JSON.stringify(newUserAccount),
			error: null,
		});
	} catch (error: any) {
		console.error("Error:", error);
		if (error.code === 409) {
			return NextResponse.json({
				status: 409,
				message:
					"A user with the same id, email, or phone already exists.",
				error: error.response,
			});
		}

		return NextResponse.json({
			status: error.code || 500,
			message: "An error occurred",
			error: error.response,
		});
	}
}
