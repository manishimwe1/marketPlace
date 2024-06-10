import React from "react";
import InfiniteScroll from "./InfiniteScroll";

const ChooseByBrand = () => {
	return (
		<section className='w-full  flex gap-3 flex-col'>
			<h3 className='text-2xl font-bold text-stone-950 hover:underline hover:underline-offset-2 hover:cursor-pointer duration-100 hover:delay-100  w-fit'>
				Choose by brand
			</h3>

			<InfiniteScroll />
		</section>
	);
};

export default ChooseByBrand;
