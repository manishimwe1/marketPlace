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
import {
	useUserCreateAccount,
	useUserSignin,
} from "@/lib/react-query/queriesAndMutations";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
	appWriteConfig,
	avatars,
	databases,
} from "@/lib/appwrite/config";
import { ID } from "appwrite";
import { savingUser } from "@/lib/appwrite/actions";
import { INewUser } from "@/typing";
import { saveUserToDb } from "@/lib/appwrite/api";

export default function SignUpPage() {
	const router = useRouter();
	const {
		mutateAsync: createUserAccount,
		isPending: isLoading,
	} = useUserCreateAccount();
	const {
		mutateAsync: userSignin,
		isPending: isuserSignin,
	} = useUserSignin();

	const form = useForm<z.infer<typeof SignupValidation>>({
		resolver: zodResolver(SignupValidation),
		defaultValues: {
			username: "",
			name: "",
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(
		user: z.infer<typeof SignupValidation>,
	) {
		const Payload = {
			email: user.email,
			name: user.name,
			username: user.username,
			password: user.password,
		};
		// toast.loading("creating Account");
		const newUser = await fetch("api/account", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(Payload),
		});
		if (!newUser) {
			toast.remove();
			toast.error("Ooops something went worng");
			return;
		}
		const avatarUrls = avatars.getInitials(user.name);
		const newUserInDb: INewUser = {
			userId: ID.unique(),
			name: user.name,
			username: user.username,
			email: user.email,
			password: user.password,
			profile: avatarUrls,
		};
		// console.log(process.env.APPWRITE_API_KEY!);

		const savedUser = await fetch("api/database", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${`7be8c28b8d66eeb9c0268cd7f4df58997197c4d76230fed1182ad441829f50f96d32df97f744fd8669feff390fb0685b90c76eb565eff40a34a26c6d5d0a2096df25b67988bc1a082313f4b815dd3b504ce6afec30581dc2ebab0ef6b30e966f74466c76922b34187db2e16d1311c9a5aacba672c7c2d8173080646b2d6d7eaa`}`,
			},
			body: JSON.stringify(newUserInDb),
		});

		if (!savedUser) {
			toast.remove();
			toast.error("Ooops something went worng");
			return;
		}
		// const session = await userSignin({
		// 	email: user.email,
		// 	password: user.password,
		// });
		// if (!session) {
		// 	toast.remove();
		// 	toast.error(
		// 		"Ooops something went worng in signin user",
		// 	);
		// 	return;
		// }
		// return session;
		router.push("/sign-in");
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 flex pb-10 max-w-sm mx-auto flex-col'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Full name</FormLabel>
							<FormControl>
								<Input
									placeholder='Full name'
									{...field}
									className='bg-transparent text-gray-300 placeholder:text-gray-400 focus-within:bg-black'
								/>
							</FormControl>

							<FormMessage className='text-red-400' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>username</FormLabel>
							<FormControl>
								<Input
									placeholder='Username'
									{...field}
									className='bg-transparent text-gray-300 placeholder:text-gray-400'
								/>
							</FormControl>

							<FormMessage className='text-red-400' />
						</FormItem>
					)}
				/>
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
				<Button type='submit'>Sign up</Button>
				<p className='text-sm text-center text-muted-foreground'>
					You have an Account{" "}
					<Link
						href={"/sign-in"}
						className='text-transparent capitalize text-sm font-semibold hover:underline decoration-white  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-700'>
						Login
					</Link>
				</p>
			</form>
		</Form>
	);
}
