"use client";

import {
	ChevronDownIcon,
	ChevronUpIcon,
} from "lucide-react";

type Props = {
	title: string;
	handle: () => void;
	Open: boolean;
};

const CategoryDetailsHeader = ({
	title,
	handle,
	Open,
}: Props) => {
	return (
		<div
			className='w-full flex pl-3 p-2 justify-between items-center cursor-pointer  bg-slate-200/20 shadow-sm shadow-purple-500/20'
			onClick={handle}>
			<h4 className='text-lg font-medium text-purple-500  '>
				{title}
			</h4>

			{Open ? (
				<ChevronUpIcon className='text-purple-500 w-5 h-5' />
			) : (
				<ChevronDownIcon className='text-purple-500 w-5 h-5' />
			)}
		</div>
	);
};

export default CategoryDetailsHeader;
