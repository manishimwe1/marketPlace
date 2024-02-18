import { LucideIcon, WalletIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
	work: {
		title: string;
		icon: string;
		desc: string;
	};
};
const HowItworkCard = ({
	work: { title, icon, desc },
}: Props) => {
	// console.log(icon);
	return (
		<div className='flex flex-col gap-3 mt-10 w-full px-4'>
			<Image
				src={icon}
				alt={title}
				width={50}
				height={50}
			/>
			<h1 className='font-bold text-xl '>{title}</h1>
			<p className='text-sm text-gray-400 leading-relaxed text-left justify-evenly'>
				{desc}
			</p>
		</div>
	);
};

export default HowItworkCard;
