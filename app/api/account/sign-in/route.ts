import { account } from "@/lib/appwrite/config";
import { Account, Client } from "appwrite";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
	request: NextRequest,
	respond: NextResponse,
) => {
	try {
		const client = new Client()
			.setEndpoint(`${process.env.APPWRITE_BASE_URL}`) // Your API Endpoint
			.setProject(
				`${process.env.APPWRITE_PROJECT_ID}`,
			);

		const account = new Account(client);
		const token = request.headers.get("Authorization");

		if (!token) {
			console.log(token);

			return NextResponse.json({
				status: 401,
				message: "Unauthorized",
				error: "JWT token is missing",
			});
		}
		const body = await request.json();
		const { password, email } = body;

		if (!email || !password) {
			return NextResponse.json({
				message: "missing email or password",
				status: 401,
			});
		}

		const session = await account.createEmailSession(
			email,
			password,
		);

		if (!session) {
			return NextResponse.json({
				message: "error in signing use",
				status: 401,
			});
		}
		console.log(session, "this is session");

		// const user = await account.get();

		return NextResponse.json({
			session,
			status: 201,
		});
	} catch (error) {
		console.log(error, "errorsz");

		return NextResponse.json({
			message: "error occur",
			status: 405,
			error,
		});
	}
};
