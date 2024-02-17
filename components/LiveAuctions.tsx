import React from "react";
import LiveAuctionsCard from "./LiveAuctionsCard";

const LiveAuctions = () => {
	const arr = [1, 2, 3, 4];

	return (
		<div className='flex flex-col'>
			<div className='flex gap-2 items-center px-2'>
				<p className='text-transparent capitalize text-lg font-bold  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-700'>
					Auctions
				</p>
				<span className='w-10  h-1 bg-gradient-to-r from-blue-800 to-fuchsia-700' />
			</div>
			<h3 className='font-bold text-2xl px-2 tracking-wider '>
				Live Auctions
			</h3>
			<div className='grid mt-5 grid-cols-1 lg:grid-cols-4 w-full gap-6'>
				{arr.map((ar, i) => (
					<LiveAuctionsCard key={i} />
				))}
			</div>
		</div>
	);
};

export default LiveAuctions;
