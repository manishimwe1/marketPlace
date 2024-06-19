"use client";

import ShimmerButton from "@/components/ui/ShimmerBtn";
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
import { useToast } from "@/components/ui/use-toast";
import { createStoreSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createStore } from "../../_actions/createStoreActions";

const CreateStorePage = () => {
	const { toast } = useToast();
	const [image, setImage] = useState<File[]>([]);
	const [ShowProductImage, setShowProductImage] =
		useState("");

	const [isSubmiting, setIsSubmiting] = useState(false);
	const router = useRouter();

	const form = useForm<z.infer<typeof createStoreSchema>>(
		{
			resolver: zodResolver(createStoreSchema),
			defaultValues: {
				name: "",
				description: "",
				image: "",
				location: "",
				phoneOfOwner: undefined,
			},
		},
	);

	async function onSubmit(
		values: z.infer<typeof createStoreSchema>,
	) {
		setIsSubmiting(true);
		toast({
			title: "Creating store...",
		});
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
			toast({
				title: "Successfully.",
				description: "Your store has been created!",
				variant: "success",
			});
		}
	}
	return (
		<div className=' w-full lg:w-[50%] mx-auto mt-6 h-full pb-20'>
			<div className='flex gap-3 lg:flex-row flex-col w-full h-full text-stone-600'>
				<div className='w-full px-2 lg:px-0'>
					<h2 className='text-3xl font-bold text-dark-2 mb-6'>
						Create Store
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
												className='input_field'
												placeholder='Store Name'
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
												className='input_field'
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
												className='input_field'
												placeholder='eg:Rwanda Kigali'
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='phoneOfOwner'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Phone of Owner
										</FormLabel>
										<FormControl>
											<Input
												className='input_field'
												placeholder='eg:+250799399930'
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<ShimmerButton
								title={
									isSubmiting
										? "Creating..."
										: "Create"
								}
								image='/loader-white.svg'
								className='w-full'
								showImage={isSubmiting}
							/>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default CreateStorePage;
