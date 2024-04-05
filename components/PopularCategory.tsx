import { IProduct } from "@/lib/actions/product.actions";
import Image from "next/image";
import React from "react";
import Loader from "./shared/Loader";
import { getCategoryByID } from "@/lib/actions/category.actions";
import Link from "next/link";
import { removeDuplicates } from "@/lib/utils";
import { ProductType } from "@/typing";

const PopularCategory = ({
	allProduct,
}: {
	allProduct: ProductType[];
}) => {
	// console.log(
	// 	removeDuplicates(
	// 		allProduct,
	// 		allProduct[0].category.categoryName,
	// 	),
	// 	"this is removed ",
	// );

	return (
		<section className='flex flex-col gap-6 mt-10'>
			<h3 className='text-2xl font-bold text-stone-950 hover:underline hover:underline-offset-2 hover:cursor-pointer duration-100 hover:delay-100  w-fit'>
				Explore Popular Categories
			</h3>
			{allProduct ? (
				<div className=' px-8 w-full grid grid-cols-1 md:grid-cols-5 gap-10 mt-4'>
					{removeDuplicates(allProduct)
						.slice(0, 5)
						.map(
							(
								product: ProductType,
								i: number,
							) => (
								<Link
									key={product.title}
									href={`/product/categrized/${product.category._id}`}>
									<div
										key={`product.title${i}`}
										className=' w-full h-full group cursor-pointer  flex flex-col gap-2 items-center justify-center p-2'>
										<div className='relative shadow-sm shadow-purple-500/20 p-2 bg-slate-200/20 w-36 h-36  rounded-full overflow-hidden'>
											<Image
												src={
													product.image
												}
												fill
												alt='speaker'
												className='object-contain  p-2'
											/>
										</div>
										<h4 className='text-sm group-hover:underline group-hover:underline-offset-4 font-bold text-stone-950/80'>
											{product.category &&
												product
													.category
													.categoryName}
										</h4>
									</div>
								</Link>
							),
						)}
				</div>
			) : (
				<div className='border w-full h-full'>
					<Loader />
				</div>
			)}
		</section>
	);
};

export default PopularCategory;
