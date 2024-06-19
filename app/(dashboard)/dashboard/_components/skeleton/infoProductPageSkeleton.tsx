import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const InfoProductPageSkeleton = () => {
	return (
		<>
			<Skeleton className='w-full p-4 h-40 hidden lg:flex flex-col px-3 gap-4 bg-purple-50/40' />

			<div className=' flex flex-col gap-1 w-full px-4 text-black-2 mt-7'>
				<Skeleton className=' w-20 h-5' />

				<Skeleton className=' w-20 h-5' />

				<div className='w-full px-2 flex justify-end'>
					<Skeleton className=' w-20 h-5' />
				</div>
				<Separator className='h-1 w-full mt-5 mb-4 rounded-r-lg bg-purple-500/10' />
				<div className='w-full flex flex-col justify-between  rounded-r-3xl px-3 items-start  overflow-hidden'>
					<Skeleton className=' w-full rounded-lg h-5 ' />

					<div className='boder h-10 flex gap-2 items-center p-2 justify-end w-full'>
						<Skeleton className=' w-20 h-5' />

						<Skeleton className=' w-20 h-5' />
					</div>
				</div>
				<div className='flex flex-col justify-center'>
					<Skeleton className=' w-full rounded-lg h-5 ' />
				</div>
			</div>
		</>
	);
};

export default InfoProductPageSkeleton;
