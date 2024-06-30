"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { ICategory } from "@/lib/database/models/category.model";
import { unstable_noStore } from "next/cache";
import {
	Dispatch,
	MouseEvent,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { Input } from "../ui/input";
import Loader from "./Loader";
import CategoryModal from "@/app/(dashboard)/dashboard/_components/shared/CategoryModal";
import {
	getAllCategories,
	saveCategory,
} from "@/app/(root)/_actions/category.actions";
import { CategoryData } from "@/constants";
import { useToast } from "../ui/use-toast";

function SelectField({
	onFieldChange,
	setCategoryId,
}: {
	onFieldChange: () => void;
	setCategoryId: Dispatch<SetStateAction<string>>;
}) {
	const [newCategory, setNewCategory] = useState("");
	const [categoryBrand, setCategoryBrand] = useState("");
	const [Category, setCategory] = useState<ICategory[]>();
	const [isOpen, setIsOpen] = useState(false);
	const [isSubmiting, setIsSubmiting] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [selectedCategory, setselectedCategory] =
		useState<string | undefined>();

	const { toast } = useToast();

	useEffect(() => {
		const getCategories = async () => {
			unstable_noStore();
			const category = await getAllCategories();
			if (category) {
				setCategory(category);
				onFieldChange();
			}
		};
		getCategories();
	}, [newCategory, onFieldChange]);
	const handlechange = (
		e: MouseEvent<HTMLButtonElement>,
	) => {
		e.preventDefault();

		if (categoryBrand === "") {
			toast({
				title: "You have to choose brand",
				variant: "destructive",
			});
			return;
		}
		setIsSubmiting(true);

		saveCategory(newCategory, categoryBrand).then(
			(category: ICategory) => {
				setIsSubmiting(false);
				setNewCategory("");
				setIsOpen(!isOpen);
				setCategoryId(category._id);

				//TODO:emplement this modal of coplex category
				// setShowModal(true);
			},
		);
	};
	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Select onValueChange={onFieldChange}>
			<SelectTrigger className='w-full bg-black/20 text-black border-white/10'>
				<SelectValue
					placeholder='Category'
					className='bg-black/20 text-black'
				/>
			</SelectTrigger>
			<SelectContent className='!input_field border-white/20 text-purple-200'>
				{Category?.length ? (
					Category.map((items) => (
						<SelectItem
							key={items._id}
							value={items.categoryName}
							className='capitalize cursor-pointer hover:!bg-black/20 font-semibold text-dark-2 '>
							{items.categoryName}
						</SelectItem>
					))
				) : (
					<div className='py-2'>
						<p className='text-sm text-stone-500'>
							No Category found
						</p>
					</div>
				)}

				<AlertDialog open={isOpen}>
					<AlertDialogTrigger
						onClick={handleOpen}
						className='font-semibold capitalize hover:bg-black/40 rounded-lg py-2 hover:text-dark-2 w-full text-dark-2'>
						Add New Category
					</AlertDialogTrigger>
					<AlertDialogContent className=' text-stone-950'>
						<AlertDialogHeader>
							<AlertDialogTitle>
								New Category
							</AlertDialogTitle>
							<AlertDialogDescription>
								<Input
									className='input_field mt-3'
									placeholder='Category name'
									value={newCategory}
									autoFocus
									onChange={(e) =>
										setNewCategory(
											e.target.value,
										)
									}
								/>
							</AlertDialogDescription>
							<Select
								onValueChange={(e) => {
									setCategoryBrand(e);
								}}>
								<SelectTrigger className='w-full input_field'>
									<SelectValue placeholder='Choose a brand' />
								</SelectTrigger>
								<SelectContent>
									{CategoryData.map(
										(category) => (
											<SelectItem
												key={
													category.title
												}
												className='cursor-pointer hover:bg-black/20'
												value={
													category.title
												}>
												{
													category.title
												}
											</SelectItem>
										),
									)}
								</SelectContent>
							</Select>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel
								onClick={handleOpen}>
								Cancel
							</AlertDialogCancel>
							<AlertDialogAction
								className='bg-stone-500 hover:!bg-black/80'
								onClick={handlechange}
								disabled={isSubmiting}>
								{isSubmiting
									? "Adding ..."
									: "Add"}
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>

				{showModal && (
					<CategoryModal
						showModal={showModal}
						categoryId={newCategory}
						setselectedCategory={
							setselectedCategory
						}
						selectedCategory={selectedCategory}
					/>
				)}
			</SelectContent>
		</Select>
	);
}

export default SelectField;
