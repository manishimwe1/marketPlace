import NextAuth, { Session } from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/db";
import { DefaultSession, User } from "next-auth";

// next-auth.d.ts

declare module "next-auth" {
	// Adding the new field to the User interface
	interface user extends User {
		token: string;
	}

	// Here I add the user object to the session object so I can access it easily.
	interface Session extends DefaultSession {
		user: User;
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth(
	{
		providers: [Google({})],
		adapter: MongoDBAdapter(clientPromise),
	},
);
