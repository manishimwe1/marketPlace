"use client";

import { useToast } from "@/components/ui/use-toast";
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
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getStoreById } from "../../../_actions/getData";
import { Loader } from "lucide-react";
import { IStore } from "@/typing";

type Props = {
	params: {
		id: string;
	};
};
const CreateStorePage = ({ params: { id } }: Props) => {
	const { toast } = useToast();
	const [image, setImage] = useState<File[]>([]);
	const [product, setProduct] = useState<
		IStore | undefined
	>();

	const [isSubmiting, setIsSubmiting] = useState(false);
	const router = useRouter();

	useEffect(() => {
		getStoreById(id).then((data: IStore) => {
			if (data) {
				setProduct(data);
			}
		});
	}, []);
	const form = useForm<z.infer<typeof createStoreSchema>>(
		{
			resolver: zodResolver(createStoreSchema),
			defaultValues: {
				name: product ? product.name : "",
				description: product?.description,
				image: "",
				location: product?.location,
				phoneOfOwner: product?.phoneOfOwner,
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

			router.push("/dashboard/shop");
		} catch (error) {
			console.log(error);
		} finally {
			setIsSubmiting(false);
			toast({
				title: "Creating store successfully.",
				description: "Your store has been created!",
			});
		}
	}
	return (
		<div className=' w-full md:w-[70%] px-10 lg:px-0 mx-auto mt-6 h-full pb-20'>
			<div className='flex gap-3 lg:flex-row flex-col w-full h-full text-stone-600'>
				<div className='w-full  px-4 '>
					<h2 className='text-3xl font-bold text-purple-300 mb-6'>
						Edit Store
					</h2>
					{product ? (
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
												Phone of
												Owner
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
												Creating
												product
											</p>
										</div>
									) : (
										<p>Create</p>
									)}
								</Button>
							</form>
						</Form>
					) : (
						<div className='w-full h-full py-20 flex justify-center items-center'>
							<Loader className='text-purple-200 h-8 w-8 animate-spin' />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CreateStorePage;
