import { IProduct } from "@/lib/actions/product.actions";
import Image from "next/image";
import React from "react";
import Loader from "./shared/Loader";

const PopularCategory = ({
	allProduct,
}: {
	allProduct: IProduct[];
}) => {
	const arr = [1, 2, 3, 4, 5];
	return (
		<section className='flex flex-col gap-6 mt-10'>
			<h3 className='text-2xl font-bold text-stone-950 hover:underline hover:underline-offset-2 hover:cursor-pointer duration-100 hover:delay-100  w-fit'>
				Explore Popular Categories
			</h3>
			{allProduct ? (
				<div className=' px-8 w-full grid grid-cols-1 md:grid-cols-5 gap-10 mt-4'>
					{allProduct.map((product, i) => (
						<div
							key={`product.title${i}`}
							className=' w-full h-full group cursor-pointer  flex flex-col gap-2 items-center justify-center '>
							<div className='relative w-36 h-36 bg-slate-400/20 rounded-full'>
								<Image
									src={product.image}
									fill
									alt='speaker'
								/>
							</div>
							<h4 className='text-xl group-hover:underline group-hover:underline-offset-4 font-bold text-stone-950/80'>
								{product.category}
							</h4>
						</div>
					))}
				</div>
			) : (
				<Loader />
			)}
		</section>
	);
};

export default PopularCategory;
