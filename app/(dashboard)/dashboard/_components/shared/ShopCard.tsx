import { Store } from "lucide-react";
import React from "react";
import { IStore } from "@/typing";

import ActionButtonPage from "./actionButton";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ShopCard = ({
	data,
	total,
}: {
	total: number;
	data: IStore;
}) => {
	console.log(data);
	return (
		<section className='bg-slate-400/10  flex-grow p-2 rounded-lg shadow-sm shadow-[#e2dede] flex flex-col w-full h-full py-4 gap-3 border border-white/50'>
			<div className=' flex flex-col items-center justify-between gap-2 lg:gap-4  relative cursor-pointer w-full '>
				<Link
					href={`/dashboard/shop/${data.storeId}`}
					className='w-full h-full flex justify-between items-center'>
					<div className='flex justify-start items-start flex-col gap-3 w-full '>
						<p className='font-bold text-lg text-dark-2 capitalize text-nowrap '>
							{data.name.split(" ")[0]}
						</p>
						<p className='line-clamp-1 ml-4 font-medium text-xs text-muted-foreground capitalize text-nowrap'>
							{data.description}
						</p>
					</div>

					<div className=' flex flex-col '>
						<div className='flex gap-2 items-center w-full  justify-between'>
							<p className=' font-semibold text-right text-sm text-stone-400'>
								Location
							</p>
							<ActionButtonPage
								storeId={data.storeId ?? ""}
							/>
						</div>
						<p className=' font-semibold text-right text-xs text-muted-foreground text-nowrap'>
							{data.location}
						</p>
					</div>
				</Link>
				<div className=' flex justify-between items-baseline w-full '>
					<p className='title flex-1 !text-purple-500 text-[11px]'>
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
			<Link
				href={`/dashboard/shop/create-product/${data.storeId}`}>
				<div className=' w-full h-[120px] cursor-pointer py-4 relative bg-purple-100 rounded-b-md shadow-md shadow-black/20'>
					<Image
						src='/images/map.jpg'
						alt='map'
						fill
						className='object-cover'
					/>
					<MapPinIcon className='absolute bottom-6 left-[71px] h-4 w-5 animate-ping transition-all delay-150 ease-in-out ' />
				</div>
			</Link>
		</section>
	);
};

export default ShopCard;
