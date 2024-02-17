import Image from "next/image";
import React from "react";

const TopSellersCard = () => {
	return (
		<div className='rounded-lg p-6 relative bg-[#16151a] w-full '>
			<div className='flex gap-4 items-center'>
				<div className='relative rounded-full h-[55px] w-[55px]'>
					<Image
						src={"/profile-placeholder.svg"}
						alt='userImage'
						fill
						className='object-contain rounded-full'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<p className='text-lg text-muted cursor-pointer hover:text-muted hover:underline hover:transition duration-200 ease-out delay-150 font-semibold'>
						@username
					</p>
					<p className='text-sm text-left text-muted-foreground cursor-pointer hover:text-muted hover:underline hover:transition duration-200 ease-out delay-150 font-semibold'>
						100 Product
					</p>
				</div>
			</div>
		</div>
	);
};

export default TopSellersCard;
