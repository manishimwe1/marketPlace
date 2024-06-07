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
import CustomField from "../../../_components/shared/CustomField";
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
		if (image.length <= 0) {
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
				storeId: id,
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

							<CustomField
								control={form.control}
								render={({ field }) => (
									<Input
										className='bg-gradient border-white/10 text-purple-200'
										placeholder='eg: Ai max pro'
										{...field}
									/>
								)}
								name={"title"}
								formLabel={"Title"}
								className={
									"bg-gradient border-white/10 text-purple-200"
								}
							/>
							<CustomField
								control={form.control}
								render={({ field }) => (
									<Textarea
										className='bg-gradient border-white/10 text-purple-200'
										rows={5}
										placeholder='eg: Description'
										{...field}
									/>
								)}
								name={"description"}
								formLabel={
									"Describe Your Product"
								}
								className={
									"bg-gradient border-white/10 text-purple-200"
								}
							/>

							<div className='flex justify-between w-full h-full items-center flex-col md:flex-row gap-4'>
								<div className='w-full h-full flex flex-col items-center justify-between gap-2 md:flex-row'>
									<CustomField
										control={
											form.control
										}
										render={({
											field,
										}) => (
											<Input
												className='bg-gradient border-white/10 text-purple-200'
												placeholder='eg: 1000'
												{...field}
											/>
										)}
										name={"price"}
										formLabel={
											"Price (rwf)"
										}
										className={
											"bg-gradient border-white/10 text-purple-200"
										}
									/>
									<CustomField
										control={
											form.control
										}
										render={({
											field,
										}) => (
											<Input
												className='bg-gradient border-white/10 text-purple-200'
												placeholder='eg: 100'
												{...field}
											/>
										)}
										name={"stock"}
										formLabel={"Stock"}
										className={
											"bg-gradient border-white/10 text-purple-200"
										}
									/>
								</div>
								<div className='w-full h-full  items-center flex justify-between gap-3 flex-col  md:flex-row '>
									<FormField
										control={
											form.control
										}
										name='freeDelivery'
										render={({
											field,
										}) => (
											<FormItem className='flex flex-col'>
												<FormLabel></FormLabel>
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
										control={
											form.control
										}
										render={({
											field,
										}) => (
											<>
												<Input
													className='bg-gradient border-white/10 text-purple-200'
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
														is
														Free
														delivery
													</p>
												)}
											</>
										)}
										name={"price"}
										formLabel={
											"Delivery Fee"
										}
										className={
											"bg-gradient border-white/10 text-purple-200"
										}
									/>
								</div>
							</div>
							<div className='w-full h-full  items-center flex justify-between gap-3 flex-col  md:flex-row '>
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

								<CustomField
									control={form.control}
									render={({ field }) => (
										<Input
											placeholder='eg: Rwanda eastern province'
											className='bg-gradient border-white/10 text-purple-200 w-full'
											{...field}
										/>
									)}
									name={"location"}
									formLabel={"Location"}
									className={
										"bg-gradient border-white/10 text-purple-200 w-full"
									}
								/>
							</div>

							<div className='w-full items-center flex justify-center mx-auto'>
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
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default CreateProductPage;
