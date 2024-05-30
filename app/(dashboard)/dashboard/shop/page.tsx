import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { getStore } from "../_actions/getData";
import { Store } from "lucide-react";
import { IStore } from "@/typing";
import EmptyStatePage from "../_components/shared/emptyState";
import ShopCard from "../_components/shared/ShopCard";

const DashboardShopPage = async () => {
	const StoreData: IStore[] = await getStore();

	return (
		<section className='flex-1 w-full h-full  lg:px-4 flex flex-col items-start py-4 bg-black/20'>
			<div className=' w-full  flex justify-between items-center'>
				<h2 className='title !text-purple-300'>
					My Store
				</h2>
				<div className='justify-end lg:mr-20 hidden lg:inline-block'>
					<Link
						href={"/dashboard/create-store"}
						className={cn(buttonVariants())}>
						Create Store
					</Link>
				</div>
			</div>

			{StoreData.length <= 0 && (
				<EmptyStatePage title='No store to found' />
			)}

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-6 lg:gap-4 lg:px-0 mt-12 px-8'>
				{StoreData.map((data) => (
					<Link
						key={data._id}
						href={`/dashboard/shop/${data.storeId}`}>
						<ShopCard
							data={data}
							total={StoreData.length}
						/>
					</Link>
				))}
			</div>
		</section>
	);
};

export default DashboardShopPage;
