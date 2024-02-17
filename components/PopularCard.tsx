import Image from "next/image";
import React from "react";

const PopularCard = () => {
	return (
		<div className='rounded-lg h-[300px] relative bg-[#16151a] w-full '>
			<div className=' absolute flex flex-col gap-6 top-4 inset-x-4 rounded-lg shadow-sm shadow-black/20  h-40 '>
				<div className='relative w-full h-full'>
					<Image
						src={"/shoe4.svg"}
						alt='shoe'
						fill
						className='object-cover rounded-lg shadow-sm shadow-black/20'
					/>
				</div>
			</div>
			<div className=' absolute top-[140px] inset-x-4 flex flex-col gap-2'>
				<div className='flex flex-col gap-2 items-center '>
					<div className='relative rounded-full h-20 w-20 border border-gray-400'>
						<Image
							src={"/profile-placeholder.svg"}
							alt='userImage'
							fill
							className='p-1 shadow-sm shadow-black/20 rounded-full'
						/>
					</div>
					<p className='font-semibold text-xl text-left text-gray-300'>
						Category
					</p>
					<p className='text-sm text-muted-foreground font-semibold'>
						100 Product
					</p>
				</div>
			</div>
		</div>
	);
};

export default PopularCard;
