import Image from "next/image";
import React from "react";

const StarWigets = () => {
	return (
		<div className='flex h-full items-center'>
			{Array.from({
				length: 5,
			}).map((items, i) => {
				return (
					<Image
						key={i}
						src={"/star.svg"}
						width={20}
						height={20}
						alt='star'
					/>
				);
			})}
			<p className='text-stone-700 text-xs ml-4'>
				200+ solid
			</p>
		</div>
	);
};

export default StarWigets;
