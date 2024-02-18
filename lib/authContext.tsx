"use client";

import { ISavedUser, IUser, UserProps } from "@/typing";
import { useRouter } from "next/navigation";
import {
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { getCurrentUser } from "./appwrite/actions";

export const INITIAL_USER = {
	id: "",
	name: "",
	username: "",
	email: "",
	profile: "",
	userId: "",
};

const INITIAL_STATE = {
	user: INITIAL_USER,
	isLoading: false,
	isAuthenticated: false,
	setUser: () => {},
	setIsAuthenticated: () => {},
	checkAuthUser: async () => false as boolean,
};

type IContextType = {
	user: ISavedUser;
	isLoading: boolean;
	setUser: React.Dispatch<
		React.SetStateAction<ISavedUser>
	>;
	isAuthenticated: boolean;
	setIsAuthenticated: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	checkAuthUser: () => Promise<boolean>;
};

const AuthContext =
	createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const route = useRouter();
	const [user, setUser] =
		useState<ISavedUser>(INITIAL_USER);
	const [isAuthenticated, setIsAuthenticated] =
		useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const checkAuthUser = async () => {
		setIsLoading(true);
		try {
			const currentAccount = await fetch(
				"api/account/user-session",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${`7be8c28b8d66eeb9c0268cd7f4df58997197c4d76230fed1182ad441829f50f96d32df97f744fd8669feff390fb0685b90c76eb565eff40a34a26c6d5d0a2096df25b67988bc1a082313f4b815dd3b504ce6afec30581dc2ebab0ef6b30e966f74466c76922b34187db2e16d1311c9a5aacba672c7c2d8173080646b2d6d7eaa`}`,
					},
				},
			);
			if (!currentAccount) {
				return console.log("something went worng");
			}
			if (currentAccount) {
				setUser({
					id: "",
					name: "",
					username: "",
					email: "",
					profile: "",
					userId: "",
				});
				setIsAuthenticated(true);

				return true;
			}

			return false;
		} catch (error) {
			console.error(error);
			return false;
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		const cookieFallback = localStorage.getItem(
			"cookieFallback",
		);
		if (
			cookieFallback === "[]" ||
			cookieFallback === null
			// cookieFallback === undefined
		) {
			route.push("/sign-in");
		}

		checkAuthUser();
	}, []);

	const value = {
		user,
		setUser,
		isLoading,
		isAuthenticated,
		setIsAuthenticated,
		checkAuthUser,
	};

	return (
		//@ts-ignore
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}

export const useUserContext = () => useContext(AuthContext);
