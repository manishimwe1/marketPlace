"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { IProduct } from "@/lib/actions/product.actions";
type Props = {
	carouselItems: IProduct[];
};
const CarouselPage = ({ carouselItems }: Props) => {
	console.log(carouselItems, "this is superdeals");

	return (
		<Carousel
			autoPlay
			infiniteLoop
			showIndicators={false}
			showThumbs={false}
			showStatus={false}
			className=' max-h-[250px] relative items-center flex justify-center'>
			{carouselItems.map((items) => (
				<div
					className='flex justify-center items-center h-full p-2'
					key={items.title}>
					<Image
						key={items.title}
						src={items.image}
						alt={items.title}
						width={200}
						height={150}
						className='object-contain rounded-xl '
					/>
					<div className='w-full flex items-center justify-center gap-4 absolute -bottom-0 inset-x-0'>
						<p className='text-lg text-primary font-bold'>
							{items.price}{" "}
							<span className='text-xs '>
								rwf
							</span>
						</p>
						{items.SuperDeals && (
							<p className='bg-primary rounded-full text-base font-semibold px-3 py-0.5'>
								-{items.SuperDeals}% off
							</p>
						)}
					</div>
				</div>
			))}
		</Carousel>
	);
};

export default CarouselPage;
