import Image from "next/image";

type Props = {
	imageSrc: string;
};

const GridCard = ({ imageSrc }: Props) => {
	return (
		<div className='flex flex-col gap-2 p-2'>
			<div className=' h-32 w-full rounded-lg relative '>
				<Image
					src={imageSrc}
					fill
					alt='isaha'
					className='object-cover rounded-lg'
				/>
			</div>
			<div className=' flex items-center justify-center gap-4'>
				<p className='text-sm text-primary font-bold whitespace-nowrap'>
					10,000{" "}
					<span className='text-xs '>rwf</span>
				</p>
				<p className='bg-primary rounded-full text-sm font-semibold px-3 py-0.5 whitespace-nowrap'>
					-20% off
				</p>
			</div>
		</div>
	);
};

export default GridCard;
