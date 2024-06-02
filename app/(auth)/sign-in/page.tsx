"use client";

import {
	Button,
	buttonVariants,
} from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { handleSignIn } from "@/lib/actions/user.actions";
import { signIn } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { signInSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SigninPage = () => {
	// useEffect(() => {
	// 	handleSignIn();
	// }, []);

	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			Email: "",
			password: "",
		},
	});

	function onSubmit(
		values: z.infer<typeof signInSchema>,
	) {
		console.log(values);
	}
	return (
		<section className='max-container'>
			<div className='flex gap-2 text-stone-950  saturate-100 brightness-75 shadow-md shadow-purple-950/20 rounded-3xl px-12 py-8'>
				<div className='flex flex-col gap-2  w-full h-full'>
					<Link href={"/"}>
						<div className='relative h-14 w-20 cursor-pointer'>
							<h2 className='font-bold  text-3xl text-nowrap text-stone-950'>
								Gura Gurisha
							</h2>
						</div>
					</Link>
					<div className='flex flex-col mt-10 flex-1  w-full gap-2 p-4'>
						<p className='text-purple-950 text-base z-10 mb-4 '>
							Please Enter your Account
							details
						</p>
						<div className='flex flex-col gap-4'>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(
										onSubmit,
									)}
									className='space-y-8'>
									<FormField
										control={
											form.control
										}
										name='Email'
										render={({
											field,
										}) => (
											<FormItem>
												<FormLabel>
													Email
												</FormLabel>
												<FormControl>
													<Input
														placeholder='johndoe@gmail.com'
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={
											form.control
										}
										name='password'
										render={({
											field,
										}) => (
											<FormItem>
												<FormLabel>
													Password
												</FormLabel>
												<FormControl>
													<Input
														type='password'
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>

									<Button
										type='submit'
										className='w-full'>
										Sign in
									</Button>
								</form>
							</Form>
							<form
								action={async () => {
									"use server";
									await signIn("google");
								}}>
								<Button
									type='submit'
									className='w-full flex gap-4 saturate-200 brightness-100'>
									<Image
										src={"/google.svg"}
										alt='google logo'
										width={20}
										height={20}
									/>
									Sign in with google
								</Button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-2  w-full h-full'>
					<p>hello</p>
				</div>
			</div>
		</section>
	);
};

export default SigninPage;
