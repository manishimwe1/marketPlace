import { getCategoryName } from "@/lib/actions/product.actions";
import Image from "next/image";

const PurpleCard = async () => {
	await getCategoryName("Speaker");
	return (
		<div className=' w-full rounded-3xl  cursor-pointer shadow-md shadow-purple-300 bg-purple-900/50 saturate-150 px-5 py-5 overflow-hidden'>
			<div className=' h-40  w-full relative   lg:ml-32 rounded-3xl '>
				<Image
					src={"/speaker.png"}
					width={200}
					height={200}
					alt='isaha'
					className='object-contain rounded-lg sm:h-[250px] sm:w-[250px] absolute right-0 top-4 md:right-0 md:-top-10 lg:right-40'
				/>
				<h3 className='text-2xl  rounded-t-3xl text-nowrap font-bold text-stone-950 absolute top-2 lg:top-8 left-0  lg:-left-32 backdrop-blur-sm /20 px-4 py-2 '>
					Immersive Audio{" "}
					<span className='text-purple-400'>
						Excellence
					</span>
				</h3>
				<p className='text-left text-xs absolute backdrop-blur-sm /20  rounded-b-3xl px-4 py-2 bottom-10 lg:bottom-4 font-semibold text-stone-700 left-0 lg:-left-32 -z-10 '>
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
