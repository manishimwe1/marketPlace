import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import clientPromise from "./database/db.config";
import {
	createUser,
	getUserById,
} from "./actions/user.actions";

declare module "next-auth" {
	interface Session {
		user: {
			address?: string; // Make address optional
		} & User;
	}

	interface User {
		name?: string | null; // Add name field to User interface
		foo?: string;
	}
}

const nextAuthConfig: NextAuthConfig = {
	debug: process.env.NODE_ENV === "development", // Enable debug mode only in development environment
	providers: [
		Google({
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			clientId: process.env.GOOGLE_CLIENT_ID,
		}),
	],
	// adapter: MongoDBAdapter(clientPromise, {
	// 	databaseName: "User",
	// }),

	callbacks: {
		async jwt({ token, trigger, session }) {
			try {
				const userExist = await getUserById(
					token.email || "",
				);

				if (trigger === "signIn" && !userExist) {
					const data = {
						userId: token.sub || "",
						email: token.email || "",
						name: token.name || "",
						image: token.picture || "",
					};
					await createUser(data);
					if (!userExist) {
						console.log(
							"error in checking if user is Exist",
						);
					}
				}
				if (
					trigger === "update" &&
					session?.user?.name
				) {
					// Check if session.user.name exists before assigning
					token.name = session.user.name;
				}
				return Promise.resolve(token);
			} catch (error) {
				console.error("JWT Callback Error:", error);
				throw new Error(
					"Failed to handle JWT callback",
				);
			}
		},
		async session({ session, token }) {
			try {
				return Promise.resolve({
					...session,
					user: {
						...session.user,
						...token,
					},
				});
			} catch (error) {
				console.error(
					"Session Callback Error:",
					error,
				);
				throw new Error(
					"Failed to handle session callback",
				);
			}
		},
	},
	basePath: "/auth",
	// pages: { signIn: "/sign-in", newUser: "/" },
};

export default nextAuthConfig;
