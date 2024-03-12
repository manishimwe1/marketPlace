import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const SuperDeals = () => {
	return (
		<section className='mt-5 '>
			<h1 className='text-3xl font-bold text-primary'>
				The latest.{" "}
				<span className='text-muted-foreground '>
					Take a look at what's new right now
				</span>
			</h1>
			<div className=''>
				<Carousel className='w-full'>
					<CarouselContent className='-ml-1  w-full gap-3'>
						{Array.from({ length: 10 }).map(
							(_, index) => (
								<CarouselItem
									key={index}
									className='pl-1 md:basis-1/2 lg:basis-1/3'>
									<div className='p-1 w-full'>
										<Card className='border border-red-500 w-full h-full rounded-3xl '>
											<CardContent className='flex aspect-square items-center justify-center p-6 relative'>
												<Image
													src={
														"/images/jewly.webp"
													}
													fill
													alt='isaha'
													className='object-cover rounded-3xl'
												/>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							),
						)}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
};

export default SuperDeals;
