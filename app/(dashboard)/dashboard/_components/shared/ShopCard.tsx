import { MoreVerticalIcon, Store } from "lucide-react";
import React from "react";
import { IStore } from "@/typing";

import ActionsButtonPage from "./actionButton";
import ActionButtonPage from "./actionButton";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";

const ShopCard = ({
	data,
	total,
}: {
	total: number;
	data: IStore;
}) => {
	console.log(data);
	return (
		<section className='bg-gradient-to-tr from-[#0c040b] to-[#1a010f] flex-grow p-2 rounded-lg shadow-sm shadow-[#000000] flex flex-col w-full h-full py-4 gap-3 border border-white/10'>
			<div className=' flex items-center justify-between gap-2 relative cursor-pointer'>
				<div className='flex justify-start items-start flex-col gap-3 w-full '>
					<p className='font-bold text-lg text-purple-300 capitalize text-nowrap '>
						{data.name.split(" ")[0]}
					</p>
					<p className='line-clamp-1 ml-4 font-medium text-xs text-muted-foreground capitalize text-nowrap'>
						{data.description}
					</p>
					<div className=' flex justify-between items-baseline w-full '>
						<p className='title flex-1 !text-stone-400 text-[11px]'>
							{data.phoneOfOwner}
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
				<div className='absolute top-2 right-4 flex flex-col '>
					<div className='flex gap-2 items-center w-full  justify-between'>
						<p className=' font-semibold text-right text-sm text-stone-400'>
							Location
						</p>
						<ActionButtonPage
							storeId={data.storeId ?? ""}
						/>
					</div>
					<p className=' font-semibold text-right text-xs text-muted-foreground '>
						{data.location}
					</p>
				</div>
			</div>
			<div className='border w-full h-[200px] py-4 relative bg-purple-100 rounded-b-md shadow-md shadow-black/20'>
				<Image
					src='/images/map.jpg'
					alt='map'
					fill
					className='object-cover'
				/>
				<MapPinIcon className='absolute bottom-12 left-[110px] h-4 w-5 animate-ping transition-all delay-150 ease-in-out ' />
			</div>
		</section>
	);
};

export default ShopCard;
