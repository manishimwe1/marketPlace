import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

const notFoundPage = () => {
	return (
		<div className='flex flex-col gap-4'>
			<div className='relative w-full h-96'>
				<Image
					src={"/images/no_result.gif"}
					alt='no product'
					fill
					className='object-contain'
				/>
			</div>
			<div className='w-full flex justify-center text-stone-400'>
				<Link
					href={"/saler/product/create-product"}
					className={cn(
						buttonVariants({
							variant: "ghost",
						}),
					)}>
					Create product
				</Link>
			</div>
		</div>
	);
};

export default notFoundPage;
