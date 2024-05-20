import SearchBox from "@/components/shared/SearchBox";
import { DashbaordData } from "@/constants";
import { MessageSquareIcon } from "lucide-react";
import Image from "next/image";
import DashboardCard from "./_components/DashboardCard";

const DashboardPage = () => {
	return (
		<section className='flex-1 w-full h-full py-6 flex space-x-3'>
			<div className='flex-1 w-full '>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-6 lg:gap-3 px-4 lg:px-0'>
					{DashbaordData.map((data) => (
						<DashboardCard data={data} />
					))}
				</div>
			</div>
			<div className='lg:flex hidden w-[30%] h-fit bg-[#17171F] py-2 rounded-sm'>
				<div className='flex gap-3 items-center justify-between w-full'>
					<div className='flex flex-col items-center justify-center p-3'>
						<Image
							src='/person-1.png'
							alt='hand'
							// placeholder="blur"
							width={80}
							height={80}
							className='rounded-full bg-purple-300 '
						/>
						<div className='text-purple-300  flex cursor-pointer'>
							<p className='font-semibold text-base mr-2'>
								10 Product
							</p>
						</div>
						<p className='text-purple-300  flex cursor-pointer'>
							Location
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DashboardPage;
