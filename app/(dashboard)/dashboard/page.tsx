import SearchBox from "@/components/shared/SearchBox";
import { DashbaordData } from "@/constants";
import { MessageSquareIcon } from "lucide-react";
import Image from "next/image";

const DashboardPage = () => {
	return (
		<section className='flex-1 w-full h-full py-6 flex space-x-3'>
			<div className='flex-1 w-full '>
				<div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-3'>
					{DashbaordData.map((data) => (
						<div className='bg-[#F0F0F5] p-2 rounded-sm shadow-sm shadow-purple-400 flex items-center justify-between  relative cursor-pointer'>
							<div className='flex justify-start items-start flex-col gap-1'>
								<p className='font-bold text-lg text-stone-600 capitalize text-nowrap'>
									{data.title}
								</p>
								<div className=' flex justify-between items-center w-full '>
									<p className='title !text-stone-400'>
										{data.total}
									</p>
									<p className='text-[11px] bg-purple-200/30 py-1 px-2  rounded-full font-semibold absolute bottom-3 right-2 shadow-sm shadow-black/20 text-stone-400'>
										Read to deliver
									</p>
								</div>
							</div>
							<div className='p-2 flex justify-end items-center w-[30px] h-[30px] relative bg-[#F0F0F5] rounded-full mt-[25px] '>
								<Image
									src={data.imageUrl}
									alt={data.title}
									fill
									className='object-contain'
								/>
							</div>
						</div>
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
