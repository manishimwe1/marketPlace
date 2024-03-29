import NextAuth from "next-auth";
import authConfing from "./authConfig";

export const { handlers, auth, signIn, signOut } =
	NextAuth(authConfing);
