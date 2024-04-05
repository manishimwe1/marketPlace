"use client";

import {
	ChevronDownIcon,
	ChevronUpIcon,
} from "lucide-react";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { CategoryType } from "@/typing";

const MenuTogler = ({
	allCategory,
}: {
	allCategory: CategoryType[];
}) => {
	const [open, setOpen] = useState(false);
	const handleTogler = () => {
		setOpen(!open);
	};
	return (
		<div className='flex flex-col gap-3'>
			<div
				className='w-full flex pl-3 p-2 justify-between items-center cursor-pointer  bg-slate-200/20 shadow-sm shadow-purple-500/20'
				onClick={handleTogler}>
				<h4 className='text-lg font-medium text-purple-500  '>
					All product
				</h4>

				{open ? (
					<ChevronUpIcon className='text-purple-500 w-5 h-5' />
				) : (
					<ChevronDownIcon className='text-purple-500 w-5 h-5' />
				)}
			</div>
			<div className='flex gap-3 items-center pl-2 transition-all duration-200 delay-100 ease-in-out'>
				<Checkbox />
				<p className='text-base font-medium text-muted-foreground'>
					FriendLy price
				</p>
			</div>
			{open && allCategory && (
				<>
					{allCategory.map((category) => (
						<p className='text-base font-medium text-muted-foreground px-2 py-1 hover:text-purple-900 cursor-pointer hover:bg-purple-400/30'>
							{category.categoryName}
						</p>
					))}
				</>
			)}
			<div
				className='w-full flex pl-3 p-2 justify-between items-center cursor-pointer  bg-slate-200/20 shadow-sm shadow-purple-500/20'
				onClick={handleTogler}>
				<h4 className='text-lg font-medium text-purple-500  '>
					Price
				</h4>

				{open ? (
					<ChevronUpIcon className='text-purple-500 w-5 h-5' />
				) : (
					<ChevronDownIcon className='text-purple-500 w-5 h-5' />
				)}
			</div>
		</div>
	);
};

export default MenuTogler;
