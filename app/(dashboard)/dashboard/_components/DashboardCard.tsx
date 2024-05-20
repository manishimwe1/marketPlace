import Image from "next/image";
import React from "react";

const DashbaordCard = ({
	data,
}: {
	data: {
		title: string;
		total: number;
		imageUrl: string;
		desc: string;
	};
}) => {
	return (
		<div className='bg-[#F0F0F5] flex-grow p-2 rounded-sm shadow-sm shadow-purple-400 flex items-center justify-between  relative cursor-pointer'>
			<div className='flex justify-start items-start flex-col gap-1 w-full'>
				<p className='font-bold text-lg text-stone-600 capitalize text-nowrap'>
					{data.title}
				</p>
				<div className=' flex justify-between items-baseline w-full '>
					{data.title === "Toatal Revenue" ? (
						<p className='title overflow-hidden w-[220px] !text-stone-400'>
							${data.total}
						</p>
					) : (
						<p className='title flex-1 !text-stone-400'>
							{data.total}
						</p>
					)}

					<div className='text-[11px] relative bg-purple-200/30 py-1 px-2  rounded-full font-semibold  shadow-sm shadow-black/20 text-stone-400'>
						<p>{data.desc}</p>
						<Image
							src={data.imageUrl}
							alt={data.title}
							width={20}
							height={20}
							className='object-contain bg-purple-200/30 h-5 w-5  rounded-full  shadow-sm shadow-black/20 absolute -top-2 right-0'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashbaordCard;
