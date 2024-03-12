"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
type Props = {
	carouselItems: {
		Src: string;
		Title: string;
	}[];
};
const CarouselPage = ({ carouselItems }: Props) => {
	return (
		<Carousel
			autoPlay
			infiniteLoop
			showIndicators={false}
			showThumbs={false}
			showStatus={false}>
			{carouselItems.map((items) => (
				<>
					<div className='rounded-xl flex flex-col gap-3'>
						<Image
							src={items.Src}
							alt={items.Title}
							width={200}
							height={200}
							className='object-contain rounded-xl'
						/>
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
				</>
			))}
		</Carousel>
	);
};

export default CarouselPage;
