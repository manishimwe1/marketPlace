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

const DashboardShopPage = async () => {
	const StoreData: IStore[] = await getStore();

	if (!StoreData) return;
	return (
		<section className='flex-1 w-full h-screen  lg:px-4 flex flex-col items-start py-10 bg-black/20 '>
			<div className=' w-full  flex justify-between items-center '>
				<h2 className='title !text-purple-300'>
					My Store
				</h2>
				<Link href={"/dashboard/create-store"}>
					<ShimmerButton title='Create Store' />
				</Link>
			</div>

			{StoreData.length === 0 && (
				<div className='flex h-full w-full flex-col gap-4'>
					<EmptyStatePage title='No store to found' />
					<div className='w-full flex justify-center'>
						<Link
							href={"/dashboard/create-store"}
							className={cn(
								buttonVariants(),
								"w-fit",
							)}>
							Create Store
						</Link>
					</div>
				</div>
			)}

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-6 lg:gap-4 lg:px-0 mt-4 px-8'>
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
