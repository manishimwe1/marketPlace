import {
	Button,
	buttonVariants,
} from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<section className='flex flex-col w-full max-container'>
			<div className='w-full flex justify-end'>
				<Link
					href={"/saler/product/create-product"}
					className={cn(buttonVariants())}>
					Create product
				</Link>
			</div>
			<p className='text-muted-foreground'>
				no product
			</p>
		</section>
	);
};

export default page;
