import Image from "next/image";

const Loader = ({
	w = 40,
	h = 40,
}: {
	w?: number;
	h?: number;
}) => {
	return (
		<div className='flex justify-center items-center w-full'>
			<Image
				src='/loader.svg'
				alt='loader'
				width={w}
				height={h}
			/>
		</div>
	);
};

export default Loader;
