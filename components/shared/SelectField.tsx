"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
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
	FormEvent,
	MouseEvent,
	useState,
	useEffect,
} from "react";
import { Input } from "../ui/input";
import { saveCategory } from "@/lib/actions/category.actions";
import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";
import Loader from "./Loader";
import { unstable_noStore } from "next/cache";

function SelectField({
	onFieldChange,
}: {
	onFieldChange: () => void;
}) {
	const [newCategory, setNewCategory] = useState("");
	const [Category, setCategory] = useState<ICategory[]>();
	const [isOpen, setIsOpen] = useState(false);
	const [isSubmiting, setIsSubmiting] = useState(false);

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
	}, [newCategory]);

	console.log(Category);
	const handlechange = (
		e: MouseEvent<HTMLButtonElement>,
	) => {
		setIsSubmiting(true);
		e.preventDefault();

		saveCategory(newCategory).then((category) => {
			setIsSubmiting(false);
			setNewCategory(category);
			setIsOpen(!isOpen);
		});
	};
	const handleOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Select onValueChange={onFieldChange}>
			<SelectTrigger className='w-full'>
				<SelectValue placeholder='Category' />
			</SelectTrigger>
			<SelectContent>
				{Category?.length ? (
					Category.map((items) => (
						<SelectItem
							key={items._id}
							value={items.categoryName}
							className='capitalize cursor-pointer hover:!bg-purple-500 font-semibold '>
							{items.categoryName}
						</SelectItem>
					))
				) : (
					<div className='py-2'>
						<Loader w={20} h={20} />
					</div>
				)}

				<AlertDialog open={isOpen}>
					<AlertDialogTrigger
						onClick={handleOpen}
						className='font-semibold capitalize hover:bg-purple-500  rounded-lg py-2 hover:text-white w-full'>
						Add New Category
					</AlertDialogTrigger>
					<AlertDialogContent className='bg-white text-stone-950'>
						<AlertDialogHeader>
							<AlertDialogTitle>
								New Category
							</AlertDialogTitle>
							<AlertDialogDescription>
								<Input
									className='input-field mt-3'
									placeholder='Category name'
									type='text'
									onChange={(e) =>
										setNewCategory(
											e.target.value,
										)
									}
								/>
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel
								onClick={handleOpen}>
								Cancel
							</AlertDialogCancel>
							<AlertDialogAction
								onClick={handlechange}
								disabled={isSubmiting}>
								{isSubmiting
									? "Adding ..."
									: "Add"}
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</SelectContent>
		</Select>
	);
}

export default SelectField;
