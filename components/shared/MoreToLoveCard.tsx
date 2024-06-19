"use client";

import { truncateString } from "@/lib/utils";
import { ProductType } from "@/typing";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import { ShoppingModal } from "./ShopingCartModal";

const MoreToLoveCard = ({
	product,
	admin,
}: {
	product: ProductType;
	admin?: boolean;
}) => {
	const [open, setOpen] = useState(false);
	return (
		<div className='w-full h-full p-2 py-4 hover:shadow-md rounded-3xl cursor-pointer hover:shadow-black/20 flex flex-col gap-2'>
			<div className='h-44 w-full relative rounded-md'>
				<Image
					src={product.image}
					alt={product.title}
					fill
					className='object-contain'
				/>
				<div
					className='absolute bottom-4 right-2 bg-purple-100 flex items-center justify-center rounded-full p-1'
					onClick={() => {
						setOpen(!open);
					}}>
					<ShoppingCartIcon className='h-7 w-7  text-primary' />
				</div>
			</div>
			<p className=' py-2 leading-6 text-stone-950 capitalize px-2'>
				{truncateString(product.title, 50)}
			</p>
			<p className='text-lg font-normal fon'></p>
			<div className='flex gap-1 items-center '>
				{Array.from({
					length: 5,
				}).map((items, i) => {
					return (
						<Image
							key={i}
							src={"/star.svg"}
							width={14}
							height={14}
							alt='star'
						/>
					);
				})}
				<p className='font-thin text-xs text-muted-foreground'>
					146 sold{" "}
					<span className='bg-purple-400/20 text-black text-[10px] rounded-md px-2 text-nowrap'>
						Top selling 7days
					</span>
				</p>
			</div>
			<p className='text-lg text-primary font-bold whitespace-nowrap'>
				<span className='text-xs '>rwf</span>
				{product.price}
			</p>
			<p className=' py-2 leading-6 text-stone-950 capitalize text-sm'>
				{product.freeDelivery && "Free derively"}
			</p>
			{open && (
				<ShoppingModal
					product={product}
					open={open}
					setOpen={setOpen}
				/>
			)}
		</div>
	);
};

export default MoreToLoveCard;
