import { IStore } from "@/lib/database/models/store.model";
import Link from "next/link";
import { getStore } from "./_actions/getData";
import DashboardCard from "./_components/DashboardCard";
import RightSideCard from "./_components/RightSideCard";
import { ChartBar } from "./_components/shared/chartComponent";
const DashboardPage = async () => {
	const StoreData: IStore[] = await getStore();
	const store: any[] = [];
	StoreData.map((data, i) =>
		store.push({ name: data.name, index: i }),
	);

	if (!StoreData)
		return (
			<div>
				<p>no data to show</p>
			</div>
		);
	return (
		<section className='w-full h-full flex-1 py-3 lg:py-6  flex space-x-3  lg:p-4'>
			<div className='flex-1 w-full flex flex-col gap-2'>
				<h1 className='title !text-purple-200'>
					Dashboard
				</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-6 lg:gap-3 lg:px-0 mt-4'>
					<Link href={"/dashboard/shop"}>
						<DashboardCard data={store} />
					</Link>
				</div>

				<div className=' h-full w-full mt-10'>
					<ChartBar data={StoreData} />
				</div>
			</div>
			{/* <div className='lg:flex hidden w-[30%] h-fit bg-[#17171F] py-2 rounded-sm'>
				<div className='flex gap-3 items-center justify-between w-full'>
					<RightSideCard />
				</div>
			</div> */}
		</section>
	);
};

export default DashboardPage;
