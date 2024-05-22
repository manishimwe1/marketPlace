"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { createStoreSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createStore } from "../_actions/createStoreActions";

const CreateStorePage = () => {
	const [image, setImage] = useState<File[]>([]);
	const [ShowProductImage, setShowProductImage] =
		useState("");

	const [isSubmiting, setIsSubmiting] = useState(false);
	const router = useRouter();

	// const savedProduct = useProductStore(
	// 	(state) => state.product,
	// );
	const form = useForm<z.infer<typeof createStoreSchema>>(
		{
			resolver: zodResolver(createStoreSchema),
			defaultValues: {
				name: "",
				description: "",
				image: "",
				location: "",
			},
		},
	);

	async function onSubmit(
		values: z.infer<typeof createStoreSchema>,
	) {
		setIsSubmiting(true);

		try {
			const data = {
				...values,
			};
			await createStore(data);

			router.push("/dashboard/shop");
		} catch (error) {
			console.log(error);
		} finally {
			setIsSubmiting(false);
		}
	}
	return (
		<div className='max-w-7xl mx-auto mt-6'>
			<div className='flex gap-3 lg:flex-row flex-col w-full min-h-screen text-stone-600'>
				<div className='w-full  px-4 '>
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
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Store Name
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
												placeholder='shadcn'
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type='submit'
								className='w-full'
								disabled={isSubmiting}>
								{isSubmiting ? (
									<div className='flex items-center gap-4'>
										<Image
											src='/loader-white.svg'
											alt='loader'
											width={20}
											height={20}
										/>
										<p>
											Creating product
										</p>
									</div>
								) : (
									<p>Create</p>
								)}
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default CreateStorePage;
