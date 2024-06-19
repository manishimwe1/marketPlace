import { TruckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const DashbaordCard = ({
	amount,
	title,
	imageSrc,
	subTitle,
}: {
	amount: number;
	title?: string;
	imageSrc?: string;
	subTitle?: string;
}) => {
	return (
		<section className='bg-gradient-to-tr from-[#ffffff] to-[#F4F5F7] flex-grow p-4 rounded-sm shadow-sm shadow-[#c4c2c2] flex items-center justify-between  relative cursor-pointer'>
			<div className='flex justify-start items-start flex-col gap-1 w-full '>
				<div className='flex gap-2 items-center'>
					<p className='font-bold text-lg text-dark-2 capitalize text-nowrap'>
						{title}
					</p>
					<Image
						src={imageSrc ?? ""}
						width={30}
						height={30}
						alt='shop'
						className='object-contain h-7 w-7  stroke-blue-500 fill-purple-300'
					/>
				</div>
				<div className=' flex justify-between items-baseline w-full '>
					{subTitle === "Income" ? (
						<p className='title flex-1 text-dark-2'>
							${amount}
						</p>
					) : (
						<p className='title flex-1 text-dark-2'>
							{amount}
						</p>
					)}
					<div className='text-[13px] relative bg-purple-200/30 py-1 px-2  rounded-full font-semibold  shadow-sm shadow-black/20 text-stone-400'>
						<p>{subTitle}</p>
						{subTitle === "Open" && (
							<TruckIcon className='object-contain h-5 w-5 absolute -top-3 right-0  text-dark-2' />
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default DashbaordCard;
