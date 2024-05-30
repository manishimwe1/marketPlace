import { MoreVerticalIcon, Store } from "lucide-react";
import React from "react";
import { IStore } from "@/typing";

const ShopCard = ({
	data,
	total,
}: {
	total: number;
	data: IStore;
}) => {
	return (
		<div className='bg-[#F0F0F5] flex-grow p-2 rounded-sm shadow-sm shadow-purple-400 flex items-center justify-between  relative cursor-pointer'>
			<div className='flex justify-start items-start flex-col gap-1 w-full'>
				<p className='font-bold text-lg text-stone-600 capitalize text-nowrap'>
					{data.name.split(" ")[0]}
				</p>
				<p className='line-clamp-1 ml-4 font-medium text-xs text-muted-foreground capitalize text-nowrap'>
					{data.description}
				</p>
				<div className=' flex justify-between items-baseline w-full '>
					<p className='title flex-1 !text-stone-400'>
						{total}
					</p>
					<div className='text-[11px] mr-1 relative bg-purple-200/30 py-1 px-2  rounded-full font-semibold  shadow-sm shadow-black/20 text-stone-400'>
						<p>Open</p>

						<Store className='object-contain h-5 w-5   absolute -top-3 right-0 stroke-blue-500' />
					</div>
					<div className='flex gap-2  text-muted-foreground text-xs'>
						<p>7:00</p>
						<p>22:00</p>
					</div>
				</div>
			</div>
			<div className='absolute top-2 right-4 flex flex-col gap2'>
				<div className='flex gap-2 items-center '>
					<p className=' font-semibold text-right text-sm '>
						Location
					</p>
					<MoreVerticalIcon className='text-sm text-stone-500 h-4 ' />
				</div>
				<p className=' font-semibold text-right text-xs text-muted-foreground '>
					{data.location}
				</p>
			</div>
		</div>
	);
};

export default ShopCard;
