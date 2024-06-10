"use client";

import { useItemstore } from "@/store";
import { ProductType } from "@/typing";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

type Props = {
	product: ProductType;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};

const HeartComponent = ({
	product,
	open,
	setOpen,
}: Props) => {
	const increaseItems = useItemstore(
		(state) => state.increaseItems,
	);
	const itemsInStore = useItemstore(
		(state) => state.items,
	);
	// console.log(items);

	return (
		<div className='absolute h-8 w-8 rounded-full bg-[#ffffff] top-4 left-2 p-1 flex justify-center items-center cursor-pointer'>
			<HeartIcon
				className='w-10 h-10 text-stone-400'
				onClick={() => {
					setOpen(!open);
				}}
			/>
		</div>
	);
};

export default HeartComponent;
