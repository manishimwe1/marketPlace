import Image from "next/image";
import React from "react";

const LiveAuctionsCard = () => {
	return (
		<div className='rounded-lg h-96 relative bg-[#16151a] w-full '>
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
				<p className='font-semibold text-2xl text-left '>
					Emmy
				</p>
				<div className='flex gap-2 items-center'>
					<div className='relative rounded-full h-8 w-8'>
						<Image
							src={"/profile-placeholder.svg"}
							alt='userImage'
							fill
						/>
					</div>
					<p className='text-sm text-muted-foreground cursor-pointer hover:text-muted hover:underline hover:transition duration-200 ease-out delay-150 font-semibold'>
						@username
					</p>
				</div>
				<div className='flex items-center justify-between'>
					<p className='font-semibold text-slate-300 text-lg '>
						Product
					</p>
					<div className='flex justify-end'>
						<p className='font-semibold text-muted-foreground text-base  '>
							1 of{" "}
							<span className='text-lg text-slate-400'>
								1
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LiveAuctionsCard;
