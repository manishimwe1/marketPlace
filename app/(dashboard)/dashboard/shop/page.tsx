import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { IStore } from "@/lib/database/models/store.model";
import { getStore } from "../_actions/getData";
import { Store } from "lucide-react";

const DashboardShopPage = async () => {
	const StoreData: IStore[] = await getStore();

	console.log(StoreData, "DATA");

	return (
		<div className='flex-1 w-full h-full border flex items-start justify-center relative'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-6 lg:gap-4 lg:px-0 mt-12 px-8'>
				{StoreData.map((data) => (
					<Link
						key={data._id}
						href={`/dashboard/shop/${data._id}`}>
						<div className='bg-[#F0F0F5] flex-grow p-2 rounded-sm shadow-sm shadow-purple-400 flex items-center justify-between  relative cursor-pointer'>
							<div className='flex justify-start items-start flex-col gap-1 w-full'>
								<p className='font-bold text-lg text-stone-600 capitalize text-nowrap'>
									{data.name}
								</p>
								<p className='line-clamp-1 ml-4 font-medium text-xs text-muted-foreground capitalize text-nowrap'>
									{data.description}
								</p>
								<div className=' flex justify-between items-baseline w-full '>
									<p className='title flex-1 !text-stone-400'>
										{StoreData.length}
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
								<p className=' font-semibold text-right text-sm '>
									Location
								</p>
								<p className=' font-semibold text-right text-xs text-muted-foreground '>
									{data.location}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
			<div className='justify-end hidden lg:inline-block'>
				<Link
					href={"/dashboard/create-store"}
					className={cn(buttonVariants())}>
					Create Store
				</Link>
			</div>
		</div>
	);
};

export default DashboardShopPage;
