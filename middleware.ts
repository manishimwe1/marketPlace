import CryptoJS from "crypto-js";
import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const middleware = async (request: NextRequest) => {
	console.log("Hits...no1", request.nextUrl.pathname);
	if (
		request.nextUrl.pathname.startsWith(
			"/saler/product/create-product",
		)
	) {
		// Check if the user is authenticated
		const token = request.cookies.get("jwt")?.value;
		// if (!token) {
		// 	// If the user is not logged in, redirect to the login page
		// 	return NextResponse.redirect(
		// 		`http://localhost:3000/sign-in`,
		// 	);
		// }
	}
};

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
	matcher: [
		"/saler/product/:path",
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};

export default middleware;
