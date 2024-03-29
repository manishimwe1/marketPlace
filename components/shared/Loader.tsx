import Image from "next/image";

const Loader = () => {
	return (
		<div className='flex justify-center items-center w-full'>
			<Image
				src='/loader.svg'
				alt='loader'
				width={40}
				height={40}
			/>
		</div>
	);
};

export default Loader;
