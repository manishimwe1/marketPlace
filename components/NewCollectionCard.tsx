import Image from "next/image";
import React from "react";
import Loader from "./shared/Loader";
import { ProductType } from "@/typing";
import Link from "next/link";

const NewCollectionCard = ({
	allProduct,
	title,
	subTitle,
}: {
	allProduct: ProductType[];
	title: string;
	subTitle: string;
}) => {
	return (
		<div className='w-full h-full '>
			<h2 className='text-stone-950 text-left font-bold text-3xl opacity-80 mt-2'>
				{title}
			</h2>
			<p className='text-stone-600 text-left text-lg '>
				{subTitle}
			</p>
			{allProduct ? (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-3 '>
					{allProduct
						.splice(0, 3)
						.map((product) => (
							<div
								key={product.title}
								className='flex gap-4 items-center justify-center lg:py-10 py-4 rounded-2xl shadow-md shadow-purple-500/20 p-3'>
								<Link
									href={`/product/categrized/${product.category}`}>
									<div className='flex flex-col gap-3 w-full'>
										<div className=' h-full w-full border rounded-lg relative'>
											<Image
												src={
													product.image
												}
												width={100}
												height={100}
												alt={
													product.title
												}
												className='object-contain rounded-lg '
											/>
										</div>
										<p className='text-sm text-primary font-bold whitespace-nowrap'>
											{product.price}{" "}
											<span className='text-xs '>
												rwf
											</span>
										</p>
									</div>
								</Link>
							</div>
						))}
				</div>
			) : (
				<div>
					<Loader />
				</div>
			)}
		</div>
	);
};

export default NewCollectionCard;
