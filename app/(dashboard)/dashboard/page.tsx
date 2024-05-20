import SearchBox from "@/components/shared/SearchBox";
import { DashbaordData } from "@/constants";
import { MessageSquareIcon } from "lucide-react";
import Image from "next/image";
import DashboardCard from "./_components/DashboardCard";
import RightSideCard from "./_components/RightSideCard";
import { getStore } from "./_actions/getData";
import { IStore } from "@/lib/database/models/store.model";

const DashboardPage = async () => {
	const StoreData: IStore[] = await getStore();

	return (
		<section className='flex-1 w-full h-full py-6 flex space-x-3'>
			<div className='flex-1 w-full '>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-6 lg:gap-3 px-4 lg:px-0'>
					<DashboardCard data={StoreData} />
				</div>
			</div>
			<div className='lg:flex hidden w-[30%] h-fit bg-[#17171F] py-2 rounded-sm'>
				<div className='flex gap-3 items-center justify-between w-full'>
					<RightSideCard />
				</div>
			</div>
		</section>
	);
};

export default DashboardPage;
