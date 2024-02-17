import { Edit, RocketIcon } from "lucide-react";
import React from "react";

const Hero = () => {
	return (
		<div className=' max-w-6xl mx-auto px-6 mt-10 py-4 '>
			<div className='flex gap-2 items-center'>
				<p className='text-transparent capitalize text-lg font-bold  bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-700'>
					gain your Profit
				</p>
				<span className='w-10  h-1 bg-gradient-to-r from-blue-800 to-fuchsia-700' />
			</div>
			<div className='w-full'>
				<h1 className='text-7xl font-bold leading-tight'>
					Discover, collect,
					<br /> and sell extraordinary <br />
					Tech product
				</h1>
				<p className='text-lg mt-4 text-muted-foreground text-left'>
					Explore on the world's best & largest
					Tech marketplace
				</p>
			</div>
			<div className='flex gap-6 mt-10'>
				<button className='bg-slate-900 flex items-center gap-2 px-8 rounded-full text-lg font-semibold hover:text-slate-300 shadow-sm shadow-slate-700 py-2'>
					<RocketIcon className='w-5 h-5' />
					Explore
				</button>
				<button className='bg-slate-900 flex items-center gap-2 px-8 rounded-full text-lg font-semibold hover:text-slate-300 shadow-sm shadow-slate-700 py-2'>
					<Edit className='w-5 h-5' />
					Create
				</button>
			</div>
		</div>
	);
};

export default Hero;
