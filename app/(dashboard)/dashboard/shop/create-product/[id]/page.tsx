"use client";

import DropZone from "@/components/DropZone";
import SelectField from "@/components/shared/SelectField";
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ProductType } from "@/lib/database/models/product.model";
import { useUploadThing } from "@/lib/uploadthing/uploadThing";
import { createProductSchemma } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createProduct } from "../../../_actions/createStoreProduct";
import CreateProductFormCard from "@/app/(dashboard)/dashboard/_components/shared/CreateProductFormCard";
import { useToast } from "@/components/ui/use-toast";
type Props = {
	params: { id: string };
};

const CreateProductPage = ({ params: { id } }: Props) => {
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

	//smallCardImageView
	const [frontView, setFrontView] = useState<
		string | undefined
	>();

	const [backView, setBackView] = useState<
		string | undefined
	>();
	const [sideView, setSideView] = useState<
		string | undefined
	>();

	const [topView, setTopView] = useState<
		string | undefined
	>();
	const [bottomView, setBottomView] = useState<
		string | undefined
	>();
	const { toast } = useToast();

	console.log("FRONTVIEW>>>>>", frontView);

	const form = useForm<
		z.infer<typeof createProductSchemma>
	>({
		resolver: zodResolver(createProductSchemma),
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
			SuperDeals: 0,
		},
	});

	const handleSwitch = (e: boolean) => {
		form.setValue("freeDelivery", e);
		setSwitcherState(
			form.control._formValues.freeDelivery,
		);
	};

	async function onSubmit(
		values: z.infer<typeof createProductSchemma>,
	) {
		setIsSubmiting(true);
		toast({
			title: "Creating product...",
		});

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
				_id: id,
				image: uploadedImageUrl,
			};

			const results = createProduct(data);
			results.then((Item: ProductType) => {
				// return Item;
				setProduct(Item);

				// return router.push(
				// 	`/dashboard/shop/${Item._id}`,
				// );
			});
			setSwitcherState(!switcherState);
			setIsSubmiting(false);
			form.reset();
			toast({
				title: "Creating product successfully.",
				description:
					"Your product has been created!",
			});
		} catch (error) {
			console.log(error);
		} finally {
			setIsSubmiting(false);
			router.push(`/dashboard/shop/${id}`);
		}
	}
	return (
		<div className='max-w-4xl mx-auto h-full px-3 py-8 overflow-y-auto mb-10'>
			<div className='flex gap-3 lg:flex-row flex-col w-full min-h-screen text-stone-600'>
				<div className=' w-full  px-4 lg:px-12 '>
					<h2 className='text-3xl w-full  font-bold text-purple-100 text-center lg:text-left  text-balance capitalize mb-6'>
						complete creating product
					</h2>
					<div className='flex flex-col w-full gap-2 mb-6'>
						<h4 className='text-base lg:text-lg font-semibold text-purple-400 text-balance capitalize'>
							PHOTOS & VIDEO
						</h4>
						<p className=' text-xs lg:text-base text-muted-foreground'>
							Add at least 5 photos. You can
							add up to 24 photos. Buyers want
							to see all details and angles.{" "}
							<span className='underline underline-offset-4 cursor-pointer hover:text-purple-400 decoration-purple-500'>
								Tips for taking pro photos
							</span>
						</p>
					</div>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(
								onSubmit,
							)}
							className='space-y-8'>
							<div className='flex w-full flex-col md:flex-row gap-4 items-center justify-between h-full '>
								<div className='lg:w-[500px] h-48 lg:h-[250px] w-full '>
									<FormField
										control={
											form.control
										}
										name='image'
										render={({
											field,
										}) => (
											<FormItem className='h-full'>
												<FormControl className='h-full'>
													<div className='w-full cursor-pointer h-full'>
														<DropZone
															setImage={
																setImage
															}
															onFieldChange={
																field.onChange
															}
															{...field}
														/>
													</div>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className='p-2 h-48 lg:h-[250px] w-full '>
									<div className='grid grid-cols-5 gap-2 w-full h-full  items-start'>
										<CreateProductFormCard
											imgsrc='/views/Front.png'
											title='Front'
											setView={
												setFrontView
											}
										/>
										<CreateProductFormCard
											imgsrc='/views/Back.png'
											title='Back'
											setView={
												setBackView
											}
										/>
										<CreateProductFormCard
											imgsrc='/views/Top.png'
											title='Top'
											setView={
												setTopView
											}
										/>
										<CreateProductFormCard
											imgsrc='/views/Bottom.png'
											title='Bottom'
											setView={
												setBottomView
											}
										/>
										<CreateProductFormCard
											imgsrc='/views/Sides.png'
											title='Sides'
											setView={
												setSideView
											}
										/>
										<CreateProductFormCard
											imgsrc=''
											title=''
										/>
										<CreateProductFormCard
											imgsrc=''
											title=''
										/>
										<CreateProductFormCard
											imgsrc=''
											title=''
										/>
									</div>
								</div>
							</div>
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
												className='bg-gradient border-white/10 text-purple-200'
												placeholder='eg: Ai max pro'
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
												className='bg-gradient border-white/10 text-purple-200'
												rows={5}
												placeholder='eg: Description'
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
													className='bg-gradient border-white/10 text-purple-200'
													placeholder='eg: 1000'
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
													className='bg-gradient border-white/10 text-purple-200'
													placeholder='eg: 100'
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
													className='bg-gradient border-white/10 text-purple-200'
													placeholder='eg: 20'
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
										<FormItem className='flex flex-col w-full bg-gradient'>
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
													className='bg-gradient border-white/10 text-purple-200'
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
													className='bg-gradient border-white/10 text-purple-200'
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

				{/* {showProductImage ? (
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
					<div className='relative border lg:w-1/2 w-full bg-purple-500/20 rounded-r-3xl hidden lg:flex'>
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
				)} */}
			</div>
		</div>
	);
};

export default CreateProductPage;
