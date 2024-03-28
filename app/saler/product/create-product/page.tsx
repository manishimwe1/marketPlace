"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { formSchema } from "@/lib/validation";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import DropZone from "@/components/DropZone";

const page = () => {
	const [image, setImage] = useState<string>();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			description: "",
			price: 0,
			image: "",
			category: "",
			stock: 0,
			location: "",
			freeDelivery: false,
			deliveryFee: 0,
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(image, "image");

		console.log(values);
	}
	return (
		<div className='max-container '>
			<div className='flex gap-3 lg:flex-row flex-col w-full min-h-screen text-stone-600'>
				<div className='w-1/2  px-4 '>
					<h2 className='text-3xl font-bold text-slate-900 mb-6'>
						Create Product
					</h2>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(
								onSubmit,
							)}
							className='space-y-8'>
							<FormField
								control={form.control}
								name='title'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Title
										</FormLabel>
										<FormControl>
											<Input
												placeholder='shadcn'
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='description'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Description
										</FormLabel>
										<FormControl>
											<Textarea
												rows={5}
												placeholder='Description'
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='flex justify-between w-full'>
								<FormField
									control={form.control}
									name='price'
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Price (rwf)
											</FormLabel>
											<FormControl>
												<Input
													type='number'
													placeholder='price'
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='stock'
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Stock
											</FormLabel>
											<FormControl>
												<Input
													type='number'
													placeholder='shadcn'
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='location'
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Location
											</FormLabel>
											<FormControl>
												<Input
													placeholder='Location'
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className='flex justify-between'>
								<FormField
									control={form.control}
									name='freeDelivery'
									render={({ field }) => (
										<FormItem className='flex flex-col'>
											<FormLabel>
												Free
												Delivery
											</FormLabel>
											<FormControl>
												<Switch
													checked={
														field.value
													}
													onCheckedChange={
														field.onChange
													}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='deliveryFee'
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Delivery Fee
											</FormLabel>
											<FormControl>
												<Input
													type='number'
													placeholder='Location'
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className='w-full cursor-pointer'>
								<DropZone
									setImage={setImage}
								/>
							</div>

							<Button
								type='submit'
								className='w-full'>
								Submit
							</Button>
						</form>
					</Form>
				</div>
				{!image ? (
					<div className='relative border w-1/2 bg-purple-500/20 rounded-r-3xl hidden lg:flex'>
						<Image
							src={"/speaker.png"}
							alt='speaker'
							fill
							className='object-contain'
						/>
					</div>
				) : (
					<div className='relative border w-1/2 bg-purple-500/20 rounded-r-3xl hidden lg:flex'>
						<Image
							src={image}
							alt='speaker'
							fill
							className='object-contain'
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default page;
