import Image from "next/image";
import React from "react";

const EmptyStatePage = ({ title }: { title: string }) => {
	return (
		<div className='flex flex-col w-full h-full items-center justify-center flex-1 gap-8'>
			<Image
				src={"/images/empty.svg"}
				alt='empty'
				width={200}
				height={200}
				className='object-contain '
			/>
			<p className='text-lg text-primary font-bold '>
				{title}
			</p>
		</div>
	);
};

export default EmptyStatePage;
