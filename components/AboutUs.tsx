import { ABOUTUS } from "@/constants";
import Image from "next/image";

const AboutUs = () => {
	return (
		<section className=' py-2 lg:flex flex-col lg:flex-row hidden'>
			<div className='flex flex-col w-full  lg:w-[250px] lg:items-start items-center justify-center select-none'>
				<h3 className='title'>Better prices,</h3>
				<h3 className='title'>Better choices</h3>
				<h3 className='title'>Fast delivery</h3>
			</div>
			<div className='grid lg:grid-cols-5 gap-1  w-full'>
				{ABOUTUS.map((items) => (
					<div
						key={items.title}
						className='flex flex-col  items-center p-3'>
						<Image
							src={items.image}
							width={40}
							height={40}
							className='object-contain opacity-50'
							alt={items.title}
						/>
						<h4 className='text-base text-slate-700 font-semibold whitespace-nowrap'>
							{items.title}
						</h4>
						<p className='text-xs text-muted-foreground text-center'>
							{items.text}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default AboutUs;
