import {
	Card,
	CardContent,
	CardDescription,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { DEALers } from "@/constants";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const SuperDeals = () => {
	return (
		<section className='mt-10 '>
			<h3 className='text-2xl font-semibold text-stone-950 hover:underline hover:underline-offset-2 hover:cursor-pointer duration-100 hover:delay-100  w-fit select-none'>
				Today's Deals – All With Free Shipping
			</h3>
			<div className='mt-4 p-6  rounded-3xl mx-2 select-none'>
				<Carousel className='w-full px-2 '>
					<CarouselContent className=' p2  w-full gap-3'>
						{DEALers.map((items, index) => (
							<div className='flex flex-col gap-4 justify-center items-center h-full p-3'>
								<CarouselItem
									key={index}
									className=' md:basis-1/2 lg:basis-1/5'>
									<Card className=' w-[220px] h-full relative rounded-3xl !border-none bg-slate-200/20'>
										<CardContent className='flex aspect-square items-center justify-center p-6 relative'>
											<Image
												src={
													items.image
												}
												fill
												alt='isaha'
												className='object-contain p-6 rounded-3xl'
											/>
										</CardContent>
										<div className='absolute h-8 w-8 rounded-full bg-[#ffffff] top-4 left-2 p-1 flex justify-center items-center cursor-pointer'>
											<HeartIcon className='w-10 h-10 text-stone-400' />
										</div>
									</Card>
								</CarouselItem>
								<div className='flex flex-col gap-2  overflow-hidden line-clamp-2'>
									<p className='line-clamp-2 py-2 leading-6 text-stone-950 capitalize px-2'>
										{items.desc}
									</p>
								</div>
							</div>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
};

export default SuperDeals;
