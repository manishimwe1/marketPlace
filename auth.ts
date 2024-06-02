import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth(
	{
		providers: [
			Google({
				clientSecret:
					process.env.GOOGLE_CLIENT_SECRET,
				clientId: process.env.GOOGLE_CLIENT_ID,
			}),
		],
		adapter: MongoDBAdapter(clientPromise),
	},
);
