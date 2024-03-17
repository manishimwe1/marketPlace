import Image from "next/image";
import React from "react";

const PopularCategory = () => {
	const arr = [1, 2, 3, 4, 5];
	return (
		<section className='flex flex-col gap-6 mt-10'>
			<h3 className='text-2xl font-bold text-stone-950 hover:underline hover:underline-offset-2 hover:cursor-pointer duration-100 hover:delay-100  w-fit'>
				Explore Popular Categories
			</h3>
			<div className=' px-8 w-full grid grid-cols-5 gap-10 mt-4'>
				{arr.map((items) => (
					<div
						key={items}
						className=' w-full h-full group cursor-pointer  flex flex-col gap-2 items-center justify-center '>
						<div className='relative w-36 h-36 bg-slate-400/20 rounded-full'>
							<Image
								src={
									"/images/spearkers.png"
								}
								fill
								alt='speaker'
							/>
						</div>
						<h4 className='text-xl group-hover:underline group-hover:underline-offset-4 font-bold text-stone-950/80'>
							Speaker
						</h4>
					</div>
				))}
			</div>
		</section>
	);
};

export default PopularCategory;
