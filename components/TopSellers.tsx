import React from "react";
import TopSellersCard from "./TopSellersCard";

const TopSellers = () => {
	const arr = [1, 2, 3, 5, 6, 7];
	return (
		<div className='flex flex-col'>
			<div className='flex gap-2 items-center px-2'>
				<p className='text-transparent capitalize text-lg font-bold  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-700'>
					Creative Artist
				</p>
				<span className='w-10  h-1 bg-gradient-to-r from-blue-800 to-fuchsia-700' />
			</div>
			<h3 className='font-bold text-2xl px-2 tracking-wider '>
				Top Sellers
			</h3>
			<div className='grid gap-6 mt-5 grid-cols-1 md:grid-cols-3'>
				{arr.map((ar, i) => (
					<TopSellersCard key={i} />
				))}
			</div>
		</div>
	);
};

export default TopSellers;
