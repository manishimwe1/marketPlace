import Image from "next/image";
import React from "react";

const PurpleCard = () => {
	return (
		<div className=' w-full row-span-2 rounded-3xl  cursor-pointer shadow-md shadow-purple-300 bg-purple-900/50 saturate-150 px-5 py-5 '>
			<div className=' h-40 w-full relative ml-32 rounded-3xl '>
				<Image
					src={"/speaker.png"}
					fill
					alt='isaha'
					className='object-contain rounded-lg '
				/>
				<h3 className='text-2xl  rounded-t-3xl font-bold text-stone-950 absolute  top-8 -left-32 backdrop-blur-sm /20 px-4 py-2 '>
					Immersive Audio Excellence
				</h3>
				<p className='text-left text-xs absolute backdrop-blur-sm /20  rounded-b-3xl px-4 py-2 bottom-4 font-semibold text-stone-700 -left-32 -z-10'>
					Elevate your listening
					<br />
					experience with our unparalleled
					<br />
					selection of high-fidelity audio
					products
				</p>
			</div>
		</div>
	);
};

export default PurpleCard;
