import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { truncateString } from "@/lib/utils";
import Image from "next/image";
import Loader from "./shared/Loader";
import { ProductType } from "@/typing";
import CarouselCard from "./shared/CarouselCard";
import { getAllProduct } from "@/app/(root)/_actions/product.actions";

const SuperDeals = async ({}: // allProduct,
{
	// allProduct: ProductType[];
}) => {
	const allProduct: ProductType[] = await getAllProduct();

	return (
		<section className='mt-10 w-full'>
			<h3 className='text-2xl font-bold text-stone-950 hover:underline hover:underline-offset-2 hover:cursor-pointer duration-100 hover:delay-100  w-fit'>
				Today &apos;s Deals – All With Free Shipping
			</h3>
			{allProduct ? (
				<div className='mt-4 p-6  rounded-3xl mx-2 select-none w-full '>
					<Carousel className='w-full px-2 '>
						<CarouselContent className=' p2  w-full gap-3'>
							{allProduct
								.slice(0, 10)
								.map(
									(
										product: ProductType,
										index,
									) => (
										<div
											key={`${product.title}${index}`}
											className='flex flex-col gap-4 justify-center items-center h-full p-3'>
											<CarouselItem
												key={index}
												className=' md:basis-1/2 lg:basis-1/5'>
												<CarouselCard
													product={
														product
													}
												/>
											</CarouselItem>
											<div className='flex flex-col gap-2  overflow-hidden line-clamp-2 h-full'>
												<p className=' py-2 leading-6 text-stone-950 capitalize px-2'>
													{truncateString(
														product.description,
														50,
													)}
												</p>
												<div className='flex  h-full items-center px-2'>
													{Array.from(
														{
															length: 5,
														},
													).map(
														(
															items,
															i,
														) => {
															return (
																<Image
																	key={
																		i
																	}
																	src={
																		"/star.svg"
																	}
																	width={
																		20
																	}
																	height={
																		20
																	}
																	alt='star'
																/>
															);
														},
													)}
													<p className='text-stone-700 text-xs ml-4'>
														200+
														solid
													</p>
												</div>
												<div className=' flex gap-1 py-2 px-3 font-bold text-left text-lg bg-secondary text-stone-500 w-fit rounded-full'>
													<p>
														{
															product.price
														}
													</p>
													Rwf
												</div>
											</div>
										</div>
									),
								)}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			) : (
				<div>
					<Loader />
				</div>
			)}
		</section>
	);
};

export default SuperDeals;
