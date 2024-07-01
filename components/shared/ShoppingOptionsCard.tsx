import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { getTechnologiesProduct } from "@/app/(root)/_actions/product.actions";

const ShoppingOptionsCard = async () => {
	const product = await getTechnologiesProduct();

	// console.log(product, "this is tech product");

	return (
		<div className='w-full h-fit flex flex-col  shadow-purple-500/20 shadow-md rounded-3xl cursor-pointer'>
			<div className='w-full h-44 py-4 relative shadow-md shadow-purple-500/20 bg-purple-400/20 rounded-t-3xl '>
				<Image
					src='/images/computer.png'
					fill
					className='object-contain py-4'
					alt='image'
				/>
			</div>
			<div className='flex justify-between gap-3 items-center'>
				<div className='w-full flex flex-col gap-2 p-4'>
					<h4 className='font-bold text-lg text-stone-800 text-nowrap'>
						Technologies World
					</h4>
					<p className='text-muted-foreground'>
						Delivery with in 24hrs
					</p>
					<Button className='w-fit rounded-full  !px-4'>
						Shop now
					</Button>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default ShoppingOptionsCard;
