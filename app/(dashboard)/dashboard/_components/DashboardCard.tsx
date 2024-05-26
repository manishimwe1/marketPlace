import { IStore } from "@/lib/database/models/store.model";
import {
	BuildingStorefrontIcon,
	TruckIcon,
} from "@heroicons/react/24/solid";
import { Store } from "lucide-react";
import Image from "next/image";
import React from "react";

const DashbaordCard = ({ data }: { data: any[] }) => {
	return (
		<div className='bg-gradient-to-tl from-[#632c9e] via-[#532c5c] to-[#4a2852] flex-grow p-4 rounded-sm shadow-sm shadow-purple-400 flex items-center justify-between  relative cursor-pointer'>
			<div className='flex justify-start items-start flex-col gap-1 w-full '>
				<div className='flex gap-2 items-center'>
					<p className='font-bold text-lg text-blue-100 capitalize text-nowrap'>
						Total shop
					</p>
					<BuildingStorefrontIcon className='object-contain h-7 w-7  stroke-blue-500 fill-purple-300' />
				</div>
				<div className=' flex justify-between items-baseline w-full '>
					<p className='title flex-1 !text-purple-100'>
						{data.length}
					</p>
					<div className='text-[13px] relative bg-purple-200/30 py-1 px-2  rounded-full font-semibold  shadow-sm shadow-black/20 text-stone-400'>
						<p>Open</p>
						<TruckIcon className='object-contain h-5 w-5 absolute -top-3 right-0  stroke-blue-900 fill-blue-900' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashbaordCard;
