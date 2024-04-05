import React from "react";
import Carousel from "./Carousel";
import Image from "next/image";
import GridCard from "./shared/GridCard";
import PurpleCard from "./shared/PurpleCard";
import NewCollectionCard from "./NewCollectionCard";
import { getSuperDeals } from "@/lib/actions/product.actions";
import Link from "next/link";
import { ProductType } from "@/typing";

const GridComponents = async ({
	allProduct,
}: {
	allProduct: ProductType[];
}) => {
	const superDealProduct: ProductType[] =
		await getSuperDeals();
	return (
		<section className='flex gap-3 w-full h-full flex-col lg:flex-row items-center justify-between'>
			<div className='space-y-4 rounded-3xl w-full lg:w-1/5 h-fit'>
				<div className='border h-36 w-full row-span-2 rounded-3xl bg-slate-400/10'></div>
				<div className='  rounded-3xl bg-purple-800/20 py-5 pb-10 h-full '>
					<h2 className='text-primary opacity-90 text-2xl text-center font-bold'>
						Welcome Deal
					</h2>
					<p className='text-stone-600 text-center text-lg mt-1'>
						Your exclusive price
					</p>
					<div className='lg:max-h-[250px] h-48 lg:h-[250px] relative flex items-center justify-center mt-4 rounded-3xl p-2 lg: py-4'>
						<Carousel
							carouselItems={allProduct}
						/>
					</div>
				</div>
			</div>
			{superDealProduct && (
				<div className=' w-full lg:w-[35%] rounded-3xl bg-purple-800/20 py-2'>
					<h2 className='text-stone-950 text-center font-bold text-3xl opacity-80'>
						Super
						<span className='text-primary opacity-90'>
							Deals
						</span>
					</h2>
					<div className='rounded-3xl bg-slate-400/30 mx-4 mt-4 gap-3 py-4 flex flex-col'>
						<Link
							href={`/product/categrized/${superDealProduct[0].category}`}>
							<div className='px-9 gap-3 flex flex-col  cursor-pointer'>
								<div className=' h-52 w-full rounded-3xl relative  '>
									<Image
										src={
											superDealProduct[0]
												.image
										}
										fill
										alt={
											superDealProduct[0]
												.title
										}
										className='object-contain rounded-3xl'
									/>
								</div>
								<div className='w-full flex items-center justify-center gap-4'>
									<p className='text-lg text-primary font-bold'>
										{
											superDealProduct[0]
												.price
										}{" "}
										<span className='text-xs '>
											rwf
										</span>
									</p>
									<p className='bg-primary rounded-full text-base font-semibold px-3 py-0.5'>
										-
										{
											superDealProduct[0]
												.SuperDeals
										}
										% off
									</p>
								</div>
							</div>
						</Link>
						<div className='flex justify-around gap-2 mt-4 w-full px-2'>
							{superDealProduct
								.slice(1, 3)
								.map((deal) => (
									<Link
										href={`/product/categrized/${deal.category}`}
										className=' cursor-pointer'>
										<GridCard
											deal={deal}
											key={deal.title}
										/>
									</Link>
								))}
						</div>
					</div>
				</div>
			)}
			<div className=' col-span-2 space-y-2 rounded-3xl w-full lg:w-[50%]'>
				<NewCollectionCard
					allProduct={allProduct}
				/>
				<PurpleCard />
			</div>
		</section>
	);
};

export default GridComponents;
