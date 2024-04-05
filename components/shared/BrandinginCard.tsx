import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const BrandinginCard = () => {
	return (
		<div className='border w-full flex flex-col gap-3 rounded-3xl py-4 mt-4'>
			<div className='relative h-36 w-full'>
				<Image
					src='/speaker.png'
					alt='speaker'
					fill
					className='object-contain'
				/>
			</div>
			<p className='text-sm text-stone-500 text-center'>
				Know yourSelf and challenge YourSelf{" "}
			</p>
			<Button
				variant={"link"}
				className='text-primary'
				size={"sm"}>
				Shop on Zuru
			</Button>
		</div>
	);
};

export default BrandinginCard;
