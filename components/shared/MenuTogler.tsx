"use client";

import {
	ChevronDownIcon,
	ChevronUpIcon,
} from "lucide-react";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { CategoryType } from "@/typing";
import { PriceData } from "@/constants";
import CategoryDetailsHeader from "./CategoryDetailsHeader";

const MenuTogler = ({
	allCategory,
}: {
	allCategory: CategoryType[];
}) => {
	const [open, setOpen] = useState(false);
	const [priceOpen, setPriceOpen] = useState(true);
	const [discountOpen, setDiscountOpen] = useState(true);
	const [technologyOpen, setTechntechnologyOpen] =
		useState(true);

	const handleTogler = () => {
		setOpen(!open);
		setPriceOpen(!priceOpen);
	};
	const handlePrice = () => {
		setPriceOpen(!priceOpen);
	};
	const handleDiscount = () => {
		setDiscountOpen(!discountOpen);
	};
	const handleTechnology = () => {
		setTechntechnologyOpen(!technologyOpen);
	};

	return (
		<div className='flex flex-col gap-3'>
			<CategoryDetailsHeader
				title='All product'
				handle={handleTogler}
				Open={open}
			/>
			<div className='flex gap-3 items-center pl-2 transition-all duration-200 delay-100 ease-in-out'>
				<Checkbox />
				<p className='text-base font-medium text-muted-foreground'>
					FriendLy price
				</p>
			</div>
			{open && allCategory && (
				<>
					{allCategory.map((category) => (
						<p
							className='text-base font-medium text-muted-foreground px-2 py-1 hover:text-purple-900 cursor-pointer hover:bg-purple-400/30'
							key={category._id}>
							{category.categoryName}
						</p>
					))}
				</>
			)}
			<CategoryDetailsHeader
				title='Price'
				handle={handlePrice}
				Open={priceOpen}
			/>

			{priceOpen && (
				<div className='px-4 flex flex-col gap-2'>
					{PriceData.map((price) => (
						<p
							className='text-sm hover:text-primary font-semibold text-muted-foreground cursor-pointer'
							key={price.label}>
							{price.label}
						</p>
					))}
				</div>
			)}
			<CategoryDetailsHeader
				title='Deals & Discount'
				handle={handleDiscount}
				Open={discountOpen}
			/>
			{discountOpen && (
				<div className='px-4 flex flex-col gap-2'>
					<p className='text-sm hover:text-primary font-semibold text-muted-foreground cursor-pointer'>
						All discount
					</p>
				</div>
			)}
			<CategoryDetailsHeader
				title='Technology'
				handle={handleTechnology}
				Open={technologyOpen}
			/>
			{technologyOpen && (
				<>
					<div className='flex gap-3 items-center pl-2 transition-all duration-200 delay-100 ease-in-out'>
						<Checkbox />
						<p className='text-base font-medium text-muted-foreground'>
							Speakers
						</p>
					</div>
					<div className='flex gap-3 items-center pl-2 transition-all duration-200 delay-100 ease-in-out'>
						<Checkbox />
						<p className='text-base font-medium text-muted-foreground'>
							Phones
						</p>
					</div>
					<div className='flex gap-3 items-center pl-2 transition-all duration-200 delay-100 ease-in-out'>
						<Checkbox />
						<p className='text-base font-medium text-muted-foreground'>
							Wi-fi
						</p>
					</div>
				</>
			)}
		</div>
	);
};

export default MenuTogler;
