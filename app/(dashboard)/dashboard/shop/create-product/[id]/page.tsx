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
import { useToast } from "@/components/ui/use-toast";
import CustomField from "../../../_components/shared/CustomField";
import ViewCard from "@/components/shared/ViewCard";
type Props = {
	params: { id: string };
};

const CreateProductPage = ({ params: { id } }: Props) => {
	const [CategoryId, setCategoryId] = useState("");
	const [user, setUser] = useState({});
	const [image, setImage] = useState<string>();
	const [product, setProduct] =
		useState<ProductType | null>(null);
	const [isSubmiting, setIsSubmiting] = useState(false);
	const router = useRouter();

	//smallCardImageView
	const [frontView, setFrontView] = useState<
		File | undefined
	>();

	const [backView, setBackView] = useState<
		File | undefined
	>();
	const [sideView, setSideView] = useState<
		File | undefined
	>();

	const [topView, setTopView] = useState<
		File | undefined
	>();
	const [bottomView, setBottomView] = useState<
		File | undefined
	>();

	const { startUpload } = useUploadThing("imageUploader");
	const { toast } = useToast();
	const [switcherState, setSwitcherState] =
		useState(false);

	const handleSwitch = (e: boolean) => {
		form.setValue("freeDelivery", e);
		setSwitcherState(
			form.control._formValues.freeDelivery,
		);
		form.setValue("deliveryFee", 0);
	};

	const form = useForm<
		z.infer<typeof createProductSchemma>
	>({
		resolver: zodResolver(createProductSchemma),
		defaultValues: {
			title: "",
			image: "",
			// frontViewImage: "",
			// backViewImage: "",
			// topViewImage: "",
			// bottomViewImage: "",
			// sideViewImage: "",

			description: "",
			price: undefined,

			category: "",
			stock: undefined,
			location: "",
			freeDelivery: false,
			deliveryFee: switcherState ? 0 : undefined,
		},
	});

	async function onSubmit(
		values: z.infer<typeof createProductSchemma>,
	) {
		if (!image) {
			return toast({
				title: "Image is required",
				description:
					"Please add an image and continue",
				variant: "destructive",
			});
		}
		setIsSubmiting(true);
		toast({
			title: "Creating product...",
		});
		let uploadedImageUrl = values.image;
		if (values.freeDelivery === true) {
			values.deliveryFee = 0;
		}
		try {
			const data = {
				...values,
				storeId: id,
				image,
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
				title: "product Created successfully.",
				description:
					"Your product has been created!",
				variant: "success",
			});
			router.push(`/dashboard/shop/${id}`);
		} catch (error) {
			console.log(error);
		} finally {
			setIsSubmiting(false);
		}
	}
	return (
		<section className='max-w-4xl mx-auto h-full px-3 lg:py-10 overflow-y-auto'>
			<div className='w-full h-full py-10 mt-14 lg:pt-0 lg:mt-5'>
				<h2 className='text-3xl w-full  font-bold text-dark-2 text-center lg:text-left  text-balance capitalize mb-6'>
					complete creating product
				</h2>
				<div className='flex flex-col w-full gap-2 mb-6'>
					<h4 className='text-base lg:text-lg font-semibold text-stone-600 text-balance capitalize'>
						PHOTOS & VIDEO
					</h4>
					<p className=' text-xs lg:text-base text-muted-foreground'>
						Add at least 5 photos. You can add
						up to 24 photos. Buyers want to see
						all details and angles.{" "}
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
							<div className='lg:w-[50%] h-48 lg:h-[250px] w-full '>
								<FormField
									control={form.control}
									name='image'
									render={({ field }) => (
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
							{/* <div className='p-2 h-full flex flex-col items-center justify-center gap-20 w-full '>
									<div className='grid grid-cols-4 lg:grid-cols-5 gap-2 w-full h-full  items-start'>
										<ViewCard
											setView={
												setFrontView
											}
											view={"front"}
											control={
												form.control
											}
										/>
										<ViewCard
											setView={
												setFrontView
											}
											view={"back"}
											control={
												form.control
											}
										/>
										<ViewCard
											setView={
												setFrontView
											}
											view={"top"}
											control={
												form.control
											}
										/>
										<ViewCard
											setView={
												setFrontView
											}
											view={"bottom"}
											control={
												form.control
											}
										/>
										<ViewCard
											setView={
												setFrontView
											}
											view={"side"}
											control={
												form.control
											}
										/>
									</div>
									<div className='w-full items-center flex justify-center mx-auto'>
										<ShimmerButton
											type='button'
											title={
												isSubmiting
													? "Creating..."
													: "Create"
											}
											image='/loader-white.svg'
											className='w-full'
											showImage={
												isSubmiting
											}
										/>
									</div>
								</div> */}
						</div>

						<CustomField
							control={form.control}
							render={({ field }) => (
								<Input
									className='input_field'
									placeholder='eg: Ai max pro'
									{...field}
								/>
							)}
							name={"title"}
							formLabel={"Title"}
						/>
						<CustomField
							control={form.control}
							render={({ field }) => (
								<Textarea
									className='bg-black/20 text-black'
									rows={5}
									placeholder='eg: Description'
									{...field}
								/>
							)}
							name={"description"}
							formLabel={
								"Describe Your Product"
							}
							className={""}
						/>

						<div className='flex justify-between w-full h-full items-center flex-col md:flex-row gap-4'>
							<div className='w-full h-full flex flex-col items-center justify-between gap-2 md:flex-row'>
								<CustomField
									control={form.control}
									render={({ field }) => (
										<Input
											className='input_field'
											placeholder='eg: 1000'
											{...field}
										/>
									)}
									name={"price"}
									formLabel={
										"Price (rwf)"
									}
									className={"w-full"}
								/>
								<CustomField
									control={form.control}
									render={({ field }) => (
										<Input
											className='input_field'
											placeholder='eg: 100'
											{...field}
										/>
									)}
									name={"stock"}
									formLabel={"Stock"}
									className={"w-full"}
								/>
							</div>
							<div className='w-full h-full  items-center flex justify-between gap-3   md:flex-row '>
								<FormField
									control={form.control}
									name='freeDelivery'
									render={({ field }) => (
										<FormItem className='flex flex-col'>
											<FormLabel>
												Free
												delivery
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
								<CustomField
									control={form.control}
									render={({ field }) => (
										<>
											<Input
												className='input_field'
												disabled={
													switcherState ===
													true
												}
												placeholder='Delivery Fee'
												{...field}
											/>
											{switcherState && (
												<p className='text-xs text-red-900 text-muted-foreground font-semibold'>
													This
													product
													is Free
													delivery
												</p>
											)}
										</>
									)}
									name={"deliveryFee"}
									formLabel={
										"Delivery Fee"
									}
								/>
							</div>
						</div>
						<div className='w-full h-full  items-center flex justify-between gap-3 flex-col  md:flex-row '>
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

							<CustomField
								control={form.control}
								render={({ field }) => (
									<Input
										placeholder='eg: Rwanda eastern province'
										className='input_field w-full'
										{...field}
									/>
								)}
								name={"location"}
								formLabel={"Location"}
								className='w-full'
							/>
						</div>

						<div className='w-full items-center flex justify-center mx-auto'>
							<ShimmerButton
								type='submit'
								title={
									isSubmiting
										? "Creating..."
										: "Create"
								}
								image='/loader-white.svg'
								className='w-full'
								showImage={isSubmiting}
							/>
						</div>
					</form>
				</Form>
			</div>
		</section>
	);
};

export default CreateProductPage;
