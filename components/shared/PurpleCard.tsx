import { getCategoryName } from "@/app/(root)/_actions/product.actions";
import Image from "next/image";

const PurpleCard = async () => {
	await getCategoryName("Speaker");
	return (
		<div className=' w-full rounded-3xl h-full cursor-pointer   shadow-md shadow-purple-300 bg-purple-900/50 saturate-150 overflow-hidden relative'>
			<div className=' h-full backdrop-blur-sm  w-full relative  rounded-3xl '>
				<Image
					src={"/speaker.png"}
					width={200}
					height={200}
					alt='isaha'
					className='object-contain rounded-lg sm:h-[250px] sm:w-[250px] absolute right-0 bottom-4 md:right-0 md:-bottom-10 lg:right-0 z-20'
				/>
				<div className=' absolute left-0 top-2 lg:top-5 w-full h-full rounded-3xl  flex flex-col'>
					<h3 className='text-2xl   text-nowrap font-bold text-stone-950  rounded-t-3xl px-4 py-2 '>
						Immersive Audio{" "}
						<span className='text-purple-400 '>
							Excellence
						</span>
					</h3>
					<p className='text-left text-xs  rounded-b-3xl px-4 py-2  font-semibold text-stone-900 -z-10 '>
						Elevate your listening
						<br />
						experience with our unparalleled
						<br />
						selection of high-fidelity audio
						products
					</p>
				</div>
			</div>
		</div>
	);
};

export default PurpleCard;
