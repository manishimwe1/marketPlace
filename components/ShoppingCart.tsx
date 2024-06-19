"use client";

import { useItemstore } from "@/store";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";

const ShoppingCart = () => {
	const items = useItemstore((state) => state.items);
	return (
		<div className='flex items-center hover:bg-purple-500 px-4 py-2 rounded-full cursor-pointer space-x-1 relative'>
			<ShoppingCartIcon className='w-6 lg:w-8 h-6 lg:h-8' />
			<div className='flex flex-col  '>
				<p className='absolute top-0 right-2 bg-purple-500 font-bold text-dark-2 p-0.5 w-5  h-5 flex items-center justify-center text-xs rounded-full'>
					{items}
				</p>
				<p className='text-sm font-semibold hidden lg:inline-block'>
					Cart
				</p>
			</div>
		</div>
	);
};

export default ShoppingCart;
