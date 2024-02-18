import { INewUser } from "@/typing";
import { Client, Databases, ID } from "appwrite";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const client = new Client()
			.setEndpoint(`${process.env.APPWRITE_BASE_URL}`) // Your API Endpoint
			.setProject(
				`${process.env.APPWRITE_PROJECT_ID}`,
			);

		const databases = new Databases(client);
		const token = request.headers.get("Authorization");

		if (!token) {
			return NextResponse.json({
				status: 401,
				message: "Unauthorized",
				error: "JWT token is missing",
			});
		}

		const body: INewUser = await request.json();
		const { email, name, profile, username, userId } =
			body;
		const savedUser = await databases.createDocument(
			"65d0f87d649d71ad3953",
			"65d0f92678ce86982d9b",
			ID.unique(),
			{ name, profile, email, username, userId },
		);

		if (!savedUser) throw Error;

		return NextResponse.json({
			status: 201,
			message: "ok",
			savedUser,
		});
	} catch (error: any) {
		return NextResponse.json({
			status: error.code || 500,
			message: "An error occurred",
			error: error.response,
		});
	}
}
