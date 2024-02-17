import {
	ShoppingBag,
	ShoppingBagIcon,
	ShoppingBasket,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const ExploreCard = () => {
	return (
		<div className='rounded-lg h-[400px] relative bg-[#16151a] w-full '>
			<div className=' absolute flex flex-col gap-6 top-4 inset-x-4 rounded-lg shadow-sm shadow-black/20  h-52 '>
				<div className='relative w-full h-full'>
					<Image
						src={"/shoe4.svg"}
						alt='shoe'
						fill
						className='object-cover rounded-lg shadow-sm shadow-black/20'
					/>
				</div>
			</div>
			<div className=' absolute bottom-4 inset-x-4 flex flex-col gap-2'>
				<p className='font-semibold text-xl text-left '>
					Air Nike
				</p>

				<p className='text-muted-foreground font-semibold text-lg'>
					owned By{" "}
					<span className='text-muted'>Emmy</span>
				</p>
				<div className='flex items-center justify-between'>
					<p className='font-semibold text-slate-300 text-base'>
						Product
					</p>
					<div className='flex justify-end'>
						<p className='font-semibold text-muted-foreground text-sm  '>
							1 of <span className=''>1</span>
						</p>
					</div>
				</div>
				<div className='flex items-center hover:transition duration-200 delay-200 ease-in py-1 gap-2 w-fit hover:bg-gradient-to-r hover:from-blue-800 hover:to-fuchsia-700 hover:border-none hover:py-1.5 px-6 rounded-full border-b-2 hover:shadow-md hover:shadow-black/30 justify-center border mt-2'>
					<ShoppingBasket className='h-4 w-4' />
					<button className='text-lg font-bold border-none capitalize hover:bg-gradient-to-r hover:from-blue-800 hover:to-fuchsia-700 hover:transition duration-200 delay-200 ease-in'>
						place a bid
					</button>
				</div>
			</div>
		</div>
	);
};

export default ExploreCard;
