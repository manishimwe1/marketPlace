"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { ProductType } from "@/typing";

type Props = {
	carouselItems: ProductType[];
};
const CarouselPage = ({ carouselItems }: Props) => {
	return (
		<Carousel
			autoPlay
			infiniteLoop
			showIndicators={false}
			showThumbs={false}
			showStatus={false}
			showArrows={false}
			className=' w-full h-full gap-2  items-center flex justify-center '>
			{carouselItems &&
				carouselItems.map((items, i) => (
					<section
						key={`${items.title}+${i}`}
						className='w-full h-full'>
						<div className='flex relative justify-center items-center p-2  h-48 lg:h-[150px]  w-full'>
							<Image
								key={items.title}
								src={items.image}
								alt={items.title}
								fill
								className='object-contain rounded-xl '
							/>
						</div>
						<div className='w-full flex items-center justify-center gap-4 '>
							<p className='text-lg text-primary font-bold'>
								{items.price}{" "}
								<span className='text-xs '>
									rwf
								</span>
							</p>
							{/* {items.SuperDeals && (
								<p className='bg-primary rounded-full text-base font-semibold px-3 py-0.5'>
									-{items.SuperDeals}% off
								</p>
							)} */}
						</div>
					</section>
				))}
		</Carousel>
	);
};

export default CarouselPage;
