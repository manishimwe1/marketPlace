import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { getStore } from "../_actions/getData";
import { Store } from "lucide-react";
import { IStore } from "@/typing";
import EmptyStatePage from "../_components/shared/emptyState";
import ShopCard from "../_components/shared/ShopCard";
import ShimmerButton from "@/components/ui/ShimmerBtn";
import DashboardHeaderBox from "../_components/shared/DashboardHeaderBox";

const DashboardShopPage = async () => {
	const StoreData: IStore[] = await getStore();

	if (!StoreData) return;

	return (
		<section className='flex-1 w-full h-screen  lg:px-4 flex flex-col items-start max-wrapper'>
			<DashboardHeaderBox
				title='My Store'
				buttonText='Create Store'
				href='/dashboard/shop/create-store'
			/>

			{StoreData.length === 0 && (
				<div className='flex h-full w-full flex-col gap-4'>
					<EmptyStatePage title='No store to found' />
					<div className='w-full flex justify-center'>
						<Link
							href={
								"/dashboard/shop/create-store"
							}
							className={cn(
								buttonVariants(),
								"w-fit",
							)}>
							Create Store
						</Link>
					</div>
				</div>
			)}

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full gap-6 lg:gap-4 lg:px-0 mt-4 px-8'>
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
