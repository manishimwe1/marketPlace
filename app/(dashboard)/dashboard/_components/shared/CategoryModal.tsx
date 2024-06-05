"use client";
import Loader from "@/components/shared/Loader";
import ShimmerButton from "@/components/ui/ShimmerBtn";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	getAllCategories,
	getCategoryByID,
} from "@/lib/actions/category.actions";
import { ICategory } from "@/typing";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { Search } from "lucide-react";
import { unstable_noStore } from "next/cache";
import {
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";

const CategoryModal = ({
	showModal,
	categoryId,
	setselectedCategory,
	selectedCategory,
}: {
	showModal: boolean;
	categoryId: string;
	setselectedCategory: Dispatch<
		SetStateAction<string | undefined>
	>;
	selectedCategory: string | undefined;
}) => {
	const [category, setCategory] = useState<ICategory>();
	const [editcategory, setEditcategory] = useState(false);
	const [allCategory, setAllCategory] =
		useState<ICategory[]>();
	useEffect(() => {
		const getCategories = async () => {
			unstable_noStore();
			const category = await getCategoryByID(
				categoryId,
			);
			if (category) {
				setCategory(category);
			}
		};
		const getAllCategory = async () => {
			unstable_noStore();
			const allcategory = await getAllCategories();
			if (allcategory) {
				console.log(allCategory, "allPRODUct");
				setAllCategory(allCategory);
			}
		};
		Promise.all([getAllCategory(), getCategories()]);
	}, [allCategory, categoryId]);
	const data = [
		{
			categoryName: "For men",
		},
		{
			categoryName: "For Women",
		},
		{
			categoryName: "For Kid",
		},
		{
			categoryName: "For Other",
		},
	];

	return (
		<Dialog open={showModal}>
			{editcategory ? (
				<DialogContent className='bg-black !border-white/10 !text-purple-300'>
					<div className='flex gap-2 px-2 items-center bg-black/20'>
						<Search className='h-5 w-5 ' />
						<Input
							placeholder='Enter a value'
							className='bg-transparent focus-visible:ring-0 focus-visible:outline-none border-none '
						/>
					</div>
					<DialogDescription className='flex items-start justify-between flex-col'>
						<p className='title !text-purple-200 text-base'>
							selected category
						</p>
						{category ? (
							<div
								onClick={() =>
									setEditcategory(
										!editcategory,
									)
								}
								className='flex items-center justify-between w-full'>
								<div className='flex flex-col gap-1 w-full'>
									<p
										className='mt-2 py-2 text-purple-400 text-sm  w-full cursor-pointer hover:bg-black/30 rounded-lg hover:px-2 transition-all ease-in-out duration-500 capitalize'
										onClick={() =>
											setselectedCategory(
												`${data[0].categoryName}`,
											)
										}>
										{
											category.categoryName
										}{" "}
										&gt;
										<span className='hover:underline'>
											{`${data[0].categoryName}`}
										</span>
									</p>
									<p className='font-semibold text-base py-2 text-purple-200'>
										Suggestion category
									</p>
									{data.map((item) => (
										<p
											key={
												item.categoryName
											}
											className='mt-2 py-2 text-purple-400 text-sm  w-full cursor-pointer hover:bg-black/30 rounded-lg hover:px-2 transition-all ease-in-out duration-500 capitalize'
											onClick={() =>
												setselectedCategory(
													`${item.categoryName}`,
												)
											}>
											{
												category.categoryName
											}{" "}
											&gt;
											<span>
												{`${item.categoryName}`}
											</span>
										</p>
									))}

									<p className='font-semibold text-base py-2 text-purple-200'>
										All category
									</p>

									{allCategory ? (
										allCategory.map(
											(item) => (
												<p
													key={
														item._id
													}
													className=' text-purple-400 text-sm  w-full cursor-pointer hover:bg-black/30 rounded-lg hover:px-2 transition-all ease-in-out duration-500 capitalize'>
													{
														item.categoryName
													}
												</p>
											),
										)
									) : (
										<Loader
											h={20}
											w={20}
										/>
									)}
								</div>
							</div>
						) : (
							<Loader h={20} w={20} />
						)}
					</DialogDescription>
				</DialogContent>
			) : (
				<DialogContent className='bg-black !border-white/10 '>
					<DialogHeader>
						<DialogTitle className='title !text-purple-200 flex w-full items-center justify-between'>
							Item category{" "}
							<Button className='!bg-gradient hover:text-purple-200 bg-black'>
								Done
							</Button>
						</DialogTitle>
						<DialogDescription className='flex items-start justify-between flex-col'>
							<div>
								<p>First category</p>
								{category ? (
									<div
										onClick={() =>
											setEditcategory(
												!editcategory,
											)
										}
										className='flex items-center justify-between w-full cursor-pointer hover:bg-black/20 rounded-lg hover:px-2 transition-all ease-in-out duration-500'>
										<div className='flex flex-col gap-1'>
											<p className='mt-2 text-purple-400 text-lg capitalize'>
												{
													category.categoryName
												}{" "}
												&gt;{" "}
												{selectedCategory && (
													<span>
														{
															selectedCategory
														}
													</span>
												)}
											</p>
										</div>
										<ChevronDoubleRightIcon className='h-4 w-4 text-purple-500' />
									</div>
								) : (
									<Loader h={5} w={5} />
								)}
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			)}
		</Dialog>
	);
};

export default CategoryModal;
