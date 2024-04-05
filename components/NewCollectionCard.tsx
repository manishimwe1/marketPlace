import Image from "next/image";
import React from "react";
import Loader from "./shared/Loader";
import { ProductType } from "@/typing";

const NewCollectionCard = ({
	allProduct,
}: {
	allProduct: ProductType[];
}) => {
	return (
		<div className='border  w-full row-span-2 rounded-3xl bg-slate-400/10 px-4 py-2'>
			<h2 className='text-stone-950 text-left font-bold text-3xl opacity-80 mt-2'>
				New
			</h2>
			<p className='text-stone-600 text-left text-lg '>
				Launched in the last 7 days
			</p>
			{allProduct ? (
				<div className='grid grid-cols-3 w-full gap-3 lg:mt-2 py-4'>
					{allProduct
						.splice(0, 3)
						.map((product) => (
							<div
								key={product.title}
								className='flex gap-4 items-center justify-center py-10  rounded-2xl shadow-md shadow-purple-500/20 p-3'>
								<div className='flex flex-col gap-3 w-full'>
									<div className=' h-20 w-full rounded-lg relative'>
										<Image
											src={
												product.image
											}
											fill
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
