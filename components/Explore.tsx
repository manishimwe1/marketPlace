import React from "react";
import ExploreCard from "./ExploreCard";

const Explore = () => {
	const arr = [1, 2, 3, 4];
	return (
		<div className='flex flex-col'>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-2'>
					<div className='flex gap-2 items-center px-2'>
						<p className='text-transparent capitalize text-lg font-bold  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-700'>
							EXCLUSIVE ASSETS
						</p>
						<span className='w-10  h-1 bg-gradient-to-r from-blue-800 to-fuchsia-700' />
					</div>
					<h3 className='font-bold text-2xl px-2 tracking-wider '>
						Explore
					</h3>
				</div>
				<h3 className='font-bold text-xl px-2 hover:text-gray-400 cursor-pointer group flex flex-col tracking-wider justify-end gap-2 hover:transition duration-200 delay-200 ease-in'>
					View All &rarr;
					<span className='w-2 group-hover:w-20 h-0.5 border border-white group-hover:border-gray-400 group-hover:transition duration-200 delay-200 ease-in-out' />
				</h3>
			</div>
			<div className='grid mt-5 grid-cols-1 lg:grid-cols-4 w-full gap-6'>
				{arr.map((ar, i) => (
					<ExploreCard key={i} />
				))}
			</div>
			<div className='flex w-full items-center justify-center mt-10'>
				<button className='text-lg border font-bold  px-4 rounded-full py-2 capitalize hover:bg-gradient-to-r hover:from-blue-800 hover:to-fuchsia-700 hover:transition duration-200 delay-200 ease-in-out'>
					load More
				</button>
			</div>
		</div>
	);
};

export default Explore;
