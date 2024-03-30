import React from "react";
import Carousel from "./Carousel";
import Image from "next/image";
import GridCard from "./shared/GridCard";
import PurpleCard from "./shared/PurpleCard";
import NewCollectionCard from "./NewCollectionCard";
import { IProduct } from "@/lib/actions/product.actions";

const GridComponents = ({
	allProduct,
}: {
	allProduct: IProduct[];
}) => {
	const carouselItems = [
		{
			Src: "/images/hero1.jpg",
			Title: "hero1",
		},
		{
			Src: "/images/hero4.jpg",
			Title: "hero2",
		},
		{
			Src: "/images/hero1.jpg",
			Title: "hero3",
		},
	];
	return (
		<section className='flex gap-3 w-full h-full flex-col lg:flex-row items-center justify-between'>
			<div className='space-y-4 rounded-3xl w-full lg:w-1/5 h-full'>
				<div className='border h-36 w-full row-span-2 rounded-3xl bg-slate-400/10'></div>
				<div className='  rounded-3xl bg-purple-800/20 py-5 h-full'>
					<h2 className='text-primary opacity-90 text-2xl text-center font-bold'>
						Welcome Deal
					</h2>
					<p className='text-stone-600 text-center text-lg mt-1'>
						Your exclusive price
					</p>
					<div className='mt-4 rounded-3xl p-2'>
						<Carousel
							carouselItems={carouselItems}
						/>
					</div>
				</div>
			</div>
			<div className='border w-full lg:w-[35%] rounded-3xl bg-purple-800/20 py-2'>
				<h2 className='text-stone-950 text-center font-bold text-3xl opacity-80'>
					Super
					<span className='text-primary opacity-90'>
						Deals
					</span>
				</h2>
				<div className='rounded-3xl bg-slate-400/30 mx-4 mt-4 gap-3 py-4 flex flex-col'>
					<div className='px-9 gap-3 flex flex-col'>
						<div className=' h-52 w-full rounded-3xl relative'>
							<Image
								src={"/images/isaha.webp"}
								fill
								alt='isaha'
								className='object-cover rounded-3xl'
							/>
						</div>
						<div className='w-full flex items-center justify-center gap-4'>
							<p className='text-lg text-primary font-bold'>
								10,000{" "}
								<span className='text-xs '>
									rwf
								</span>
							</p>
							<p className='bg-primary rounded-full text-base font-semibold px-3 py-0.5'>
								-20% off
							</p>
						</div>
					</div>
					<div className='flex justify-around gap-2 mt-4 w-full '>
						<GridCard
							imageSrc={"/images/camera.webp"}
						/>
						<GridCard
							imageSrc={"/images/jewly.webp"}
						/>
					</div>
				</div>
			</div>
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
