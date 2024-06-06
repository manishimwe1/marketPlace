"use client";

import ShimmerButton from "@/components/ui/ShimmerBtn";
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
import { signInSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignInForm = () => {
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
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 text-purple-300'>
				<FormField
					control={form.control}
					name='Email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									className='input_field '
									placeholder='johndoe@gmail.com'
									{...field}
								/>
							</FormControl>

							<FormMessage />
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
									className='input_field'
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
					asChild
					className='w-full '>
					<ShimmerButton title='Sign in' />
				</Button>

				<div className="flex items-center justify-center  gap-4 ">
					<p className="text-purple-200 tebase font-normal  cursor-pointer group">You dont&apos; have an account already? <span className="text-purple-400 font-semibold group-hover:underline decoration-purple-600 decoration-2 underline-offset-4 ScaleAnimation"><Link href={"/sign-up"}>Sign up</Link></span></p>
				</div>
			</form>
		</Form>
	);
};

export default SignInForm;
