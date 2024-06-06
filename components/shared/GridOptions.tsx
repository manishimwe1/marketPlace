import { cn } from "@/lib/utils";
import Carousel from "../Carousel";
import { ProductType } from "@/typing";
import Link from "next/link";
import Image from "next/image";
import GridCard from "./GridCard";
import NewCollectionCard from "../NewCollectionCard";
import PurpleCard from "./PurpleCard";

type Props = {
	className: string;
	title: string;
	allProduct: ProductType[];
	subTitle?: string;
};

const GridOptions = ({
	className,
	title,
	allProduct,
	subTitle,
}: Props) => {
	return (
		<section className={cn("h-full w-full", className)}>
			{title === "Unknown" && (
				<div className=' w-full h-full p-3 rounded-3xl bg-slate-400/10'>
					<h2 className='text-primary opacity-90 text-2xl text-center font-bold'>
						{title}
					</h2>
				</div>
			)}
			{title === "Welcome Deal" && (
				<div className='w-full flex flex-col items-center justify-start  rounded-3xl bg-purple-800/20 py-5 h-full '>
					<h2 className='text-primary opacity-90 text-2xl text-center font-bold'>
						{title}
					</h2>
					<p className='text-stone-600 text-center text-lg mt-1'>
						{subTitle}
					</p>
					<div className='h-fit w-full relative flex items-center justify-center mt-4 rounded-3xl '>
						<Carousel
							carouselItems={allProduct}
						/>
					</div>
				</div>
			)}

			{title === "Super Deals" && (
				<div className=' w-full rounded-3xl bg-purple-800/20 py-2 h-full'>
					<h2 className='text-stone-950 text-center font-bold text-3xl opacity-80'>
						Super
						<span className='text-primary opacity-90'>
							Deals
						</span>
					</h2>
					<div className='rounded-3xl bg-slate-400/30 mx-4 mt-4 gap-3 py-4 flex flex-col'>
						<Link
							href={`/product/categrized/${allProduct[0]?.category}`}>
							<div className='px-9 gap-3 flex flex-col  cursor-pointer'>
								<div className=' h-52 w-full rounded-3xl relative  '>
									<Image
										src={
											allProduct[0]
												.image
										}
										fill
										alt={
											allProduct[0]
												.title
										}
										className='object-contain rounded-3xl'
									/>
								</div>
								<div className='w-full flex items-center justify-center gap-4'>
									<p className='text-lg text-primary font-bold'>
										{
											allProduct[0]
												.price
										}{" "}
										<span className='text-xs '>
											rwf
										</span>
									</p>
									<p className='bg-primary rounded-full text-base font-semibold px-3 py-0.5'>
										-
										{
											allProduct[0]
												.SuperDeals
										}
										% off
									</p>
								</div>
							</div>
						</Link>
						<div className='flex justify-around gap-4 mt-4 w-full px-4 '>
							{allProduct
								.slice(1, 3)
								.map((deal) => (
									<Link
										key={deal.title}
										href={`/product/categrized/${deal.category}`}
										className=' cursor-pointer w-full'>
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
			{title === "New" && (
				<div className='w-full h-full flex items-center justify-center flex-col gap-4 rounded-3xl bg-slate-400/10 px-4'>
					<NewCollectionCard
						allProduct={allProduct}
					/>
					<PurpleCard />
				</div>
			)}
		</section>
	);
};

export default GridOptions;
