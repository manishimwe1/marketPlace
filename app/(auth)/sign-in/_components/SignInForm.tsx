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
import {
	EyeDropperIcon,
	EyeIcon,
	EyeSlashIcon,
} from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignInForm = () => {
	const [showPassword, setShowPassword] = useState(false);
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
				className=' space-y-6 text-black-2'>
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
								<div className='relative h-fit w-full'>
									<Input
										className='input_field transition-all duration-500 ease-in-out'
										type={
											showPassword
												? "text"
												: "password"
										}
										{...field}
									/>
									<div className='absolute h-full w-fit right-0 top-0 rounded-r-lg bg-black overflow-hidden flex items-center justify-center px-1'>
										{showPassword ? (
											<EyeIcon
												className='h-4 w-4  cursor-pointer text-pink-300'
												onClick={() => {
													setShowPassword(
														!showPassword,
													);
												}}
											/>
										) : (
											<EyeSlashIcon
												className='h-4 w-4  cursor-pointer text-pink-300'
												onClick={() => {
													setShowPassword(
														!showPassword,
													);
												}}
											/>
										)}
									</div>
								</div>
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
			</form>
		</Form>
	);
};

export default SignInForm;
