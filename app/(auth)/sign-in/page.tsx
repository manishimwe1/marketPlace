"use client";

import { SignupValidation } from "@/lib/validation/SignupValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { SigninValidation } from "@/lib/validation/SigninValidation";
import { IUser } from "@/typing";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUserContext } from "@/lib/authContext";

const pageSignIn = () => {
	const route = useRouter();
	const { user, setUser } = useUserContext();
	const [loggedInUser, setLoggedInUser] = useState({});
	const form = useForm<z.infer<typeof SigninValidation>>({
		resolver: zodResolver(SigninValidation),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	async function onSubmit(
		user: z.infer<typeof SigninValidation>,
	) {
		const Payload = {
			email: user.email,
			password: user.password,
		};
		// toast.loading("signing in");
		const session = fetch("/api/account/sign-in", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${`7be8c28b8d66eeb9c0268cd7f4df58997197c4d76230fed1182ad441829f50f96d32df97f744fd8669feff390fb0685b90c76eb565eff40a34a26c6d5d0a2096df25b67988bc1a082313f4b815dd3b504ce6afec30581dc2ebab0ef6b30e966f74466c76922b34187db2e16d1311c9a5aacba672c7c2d8173080646b2d6d7eaa`}`,
			},
			body: JSON.stringify(Payload),
		});

		if (!session) {
			toast.error("Ooops something went worng");
			return;
		}

		if ((await session).status === 405) {
			return null;
		}
		const cookieFallback = localStorage.getItem(
			"cookieFallback",
		);

		if (
			cookieFallback === "[]" ||
			cookieFallback === null ||
			cookieFallback === undefined
		) {
			const cookieFallback = localStorage.setItem(
				"cookieFallback",
				JSON.stringify((await session).body),
			);
		}
		setLoggedInUser(session);
		// toast.success("Login success");
		console.log((await session).ok);

		route.push("/");
		console.log((await session).status);

		return session;
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 flex pb-10 max-w-sm mx-auto flex-col'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder='Email'
									{...field}
									className='bg-transparent text-gray-300 placeholder:text-gray-400'
									type='email'
								/>
							</FormControl>

							<FormMessage className='text-red-400' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder='Password'
									{...field}
									className='bg-transparent text-gray-300 placeholder:text-gray-400'
									type='password'
								/>
							</FormControl>

							<FormMessage className='text-red-400' />
						</FormItem>
					)}
				/>
				<Button type='submit'>Log in</Button>
				<p className='text-sm text-center text-muted-foreground'>
					You Don't have an Account{" "}
					<Link
						href={"/sign-up"}
						className='text-transparent capitalize text-sm font-semibold hover:underline decoration-white  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-700'>
						Sign up
					</Link>
				</p>
			</form>
		</Form>
	);
};

export default pageSignIn;
