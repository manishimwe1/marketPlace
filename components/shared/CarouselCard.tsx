"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import HeartComponent from "../HeartComponent";
import { ProductType } from "@/typing";
import { useState } from "react";
import { ShoppingModal } from "./ShopingCartModal";

const CarouselCard = ({
	product,
}: {
	product: ProductType;
}) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			{" "}
			<Card className=' w-[220px] h-full relative rounded-3xl !border-none bg-slate-200/20'>
				<CardContent className='flex aspect-square items-center justify-center p-6 relative'>
					<Image
						src={product.image}
						fill
						alt='isaha'
						className='object-contain p-6 rounded-3xl'
					/>
				</CardContent>
				<HeartComponent
					product={product}
					open={open}
					setOpen={setOpen}
				/>
			</Card>
			{open && (
				<ShoppingModal
					product={product}
					open={open}
					setOpen={setOpen}
				/>
			)}
		</>
	);
};

export default CarouselCard;
