import Image from "next/image";

const ImageComponent = ({ removedImage }: any) => {
	// useEffect(() => {
	// 	const url =
	// 		"https://utfs.io/f/913dee97-7e6f-4049-9786-8a4f40a1c498-ell9xm.jpg";

	// 	const removedImage = () => {
	// 		removeBackgroundImage(url).then((image) => {
	// 			return console.log(
	// 				image?.base64img.toString(),
	// 			);
	// 		});
	// 	};
	// 	console.log(
	// 		removedImage(),
	// 		"this is removed image",
	// 	);
	// }, []);
	console.log(removedImage.base64img);

	return (
		<div className='bg-black/10 w-full h-40'>
			{removedImage.base64img && (
				<Image
					decoding='async'
					src={`data:image/png;base64${removedImage.base64img}`}
					alt='image'
					width={removedImage.resultWidth}
					height={removedImage.resultHeight}
				/>
			)}
		</div>
	);
};

export default ImageComponent;
