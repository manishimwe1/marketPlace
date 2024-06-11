import { ProductType } from "@/typing";
import React from "react";
import MoreToLoveCard from "./shared/MoreToLoveCard";
import { getAllProduct } from "@/lib/actions/product.actions";
import { Separator } from "./ui/separator";

const MoreToLove = async () => {
	const allProduct: ProductType[] = await getAllProduct();

	if (!allProduct) return;
	console.log(allProduct, "product here!!!!!");
	return (
		<section className='w-full h-full flex-col flex'>
			<div className='w-full h-fit flex items-center justify-center py-10'>
				<Separator className='max-w-5xl mx-auto border border-purple-800/60 rounded-full' />
			</div>
			<h3 className='text-2xl font-bold text-stone-950 hover:underline hover:underline-offset-2 hover:cursor-pointer duration-100 hover:delay-100  w-fit'>
				More To Love
			</h3>
			<div className='grid grid-cols-1  mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full h-full gap-2 lg:gap-4'>
				{allProduct.length > 0
					? allProduct.map(
							(product: ProductType) => (
								<MoreToLoveCard
									product={product}
									key={product._id}
								/>
							),
					  )
					: !allProduct && <p>no data to show</p>}
			</div>
		</section>
	);
};

export default MoreToLove;
