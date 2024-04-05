"use client";

import DropZone from "@/components/DropZone";
import SelectField from "@/components/shared/SelectField";
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { createProduct } from "@/lib/actions/product.actions";
import { ProductType } from "@/lib/database/models/product.model";
import { useUploadThing } from "@/lib/uploadthing/uploadThing";
import { formSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreteProductPage = () => {
	const [CategoryId, setCategoryId] = useState("");
	const [user, setUser] = useState({});
	const [image, setImage] = useState<File[]>([]);
	const [product, setProduct] =
		useState<ProductType | null>(null);
	const [switcherState, setSwitcherState] =
		useState(false);
	const [isSubmiting, setIsSubmiting] = useState(false);
	const router = useRouter();
	const { startUpload } = useUploadThing("imageUploader");

	const [showProductImage, setShowProductImage] =
		useState<string>("");
	// const savedProduct = useProductStore(
	// 	(state) => state.product,
	// );
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			description: "",
			price: "",
			image: "",
			category: "",
			stock: "",
			location: "",
			freeDelivery: false,
			deliveryFee: "",
			SuperDeals: "",
		},
	});

	const handleSwitch = (e: boolean) => {
		form.setValue("freeDelivery", e);
		setSwitcherState(
			form.control._formValues.freeDelivery,
		);
	};

	async function onSubmit(
		values: z.infer<typeof formSchema>,
	) {
		setIsSubmiting(true);

		let uploadedImageUrl = values.image;

		try {
			if (image.length > 0) {
				const uploadedImages = await startUpload(
					image,
				);
				if (!uploadedImages) return;
				uploadedImageUrl = uploadedImages[0].url;
			}
			const data = {
				...values,

				image: uploadedImageUrl,
			};

			const results = createProduct(data);
			results.then((Item: ProductType) => {
				// return Item;
				setProduct(Item);

				return router.push(`/saler/${Item._id}`);
			});
			setSwitcherState(!switcherState);
			setIsSubmiting(false);
			form.reset();
		} catch (error) {
			console.log(error);
		} finally {
			setIsSubmiting(false);
		}
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
									name='SuperDeals'
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Deals(-20%OFF)
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
							<div className='flex justify-between items-center gap-3'>
								<FormField
									control={form.control}
									name='category'
									render={({ field }) => (
										<FormItem className='flex flex-col w-full'>
											<FormLabel>
												Category
											</FormLabel>
											<SelectField
												onFieldChange={
													field.onChange
												}
												{...field}
												setCategoryId={
													setCategoryId
												}
											/>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='location'
									render={({ field }) => (
										<FormItem className='flex flex-col w-full'>
											<FormLabel>
												Location
											</FormLabel>
											<FormControl>
												<Input
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className=' flex items-center justify-between'>
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
														handleSwitch
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
													disabled={
														switcherState ===
														true
													}
													placeholder='Delivery Fee'
													{...field}
												/>
											</FormControl>
											{switcherState && (
												<p className='text-xs text-red-900 text-muted-foreground font-semibold'>
													This
													product
													is Free
													delivery
												</p>
											)}

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name='image'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Images
										</FormLabel>
										<FormControl>
											<div className='w-full cursor-pointer'>
												<DropZone
													setImage={
														setImage
													}
													onFieldChange={
														field.onChange
													}
													{...field}
													setShowProductImage={
														setShowProductImage
													}
												/>
											</div>
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

				{showProductImage ? (
					<div className='relative border w-1/2 bg-purple-500/20 rounded-r-3xl hidden lg:flex  items-center justify-center'>
						<div className='relative h-80 w-full '>
							<Image
								src={showProductImage}
								alt='product'
								fill
								className='object-contain'
							/>
						</div>
					</div>
				) : (
					<div className='relative border w-1/2 bg-purple-500/20 rounded-r-3xl hidden lg:flex'>
						<h3 className='text-lg font-bold text-stone-950 absolute top-10 inset-x-0'>
							Create beatifuly selling product
						</h3>
						<Image
							src={"/speaker.png"}
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

export default CreteProductPage;
