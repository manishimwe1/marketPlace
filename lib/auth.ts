import NextAuth from "next-auth";
import authConfing from "./authConfing";

export const { handlers, auth, signIn, signOut } =
	NextAuth(authConfing);
