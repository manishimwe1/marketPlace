import { WalletIcon } from "lucide-react";
import React from "react";
import HowItworkCard from "./HowItworkCard";
import { hwoItWork } from "@/constants";

const HowItWork = () => {
	return (
		<div className='flex flex-col'>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-2'>
					<div className='flex gap-2 items-center px-2'>
						<p className='text-transparent capitalize text-lg font-bold  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-700'>
							HOW IT WORKS
						</p>
						<span className='w-10  h-1 bg-gradient-to-r from-blue-800 to-fuchsia-700' />
					</div>
					<h3 className='font-bold text-2xl px-2 tracking-wider '>
						Create and sell your product
					</h3>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-4 py-4'>
				{hwoItWork.map((work) => (
					<HowItworkCard
						work={work}
						key={work.title}
					/>
				))}
			</div>
		</div>
	);
};

export default HowItWork;

//
