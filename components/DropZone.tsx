"use client ";

import {
	UploadButton,
	cn,
	convertFileToUrl,
} from "@/lib/utils";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import {
	Dispatch,
	SetStateAction,
	useCallback,
	useState,
} from "react";
import Dropzone, {
	FileWithPath,
	useDropzone,
} from "react-dropzone";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { useToast } from "./ui/use-toast";

type Props = {
	setImage: Dispatch<SetStateAction<string | undefined>>;
	onFieldChange: (url: string) => void;
};

const DropZone = ({ setImage, onFieldChange }: Props) => {
	const { toast } = useToast();
	// const [showProductImage, setShowProductImage] =
	// 	useState<string>("");
	// const onDrop = useCallback(
	// 	(acceptedFiles: FileWithPath[]) => {
	// 		setImage(acceptedFiles);
	// 		onFieldChange(
	// 			convertFileToUrl(acceptedFiles[0]),
	// 		);
	// 		if (setShowProductImage) {
	// 			setShowProductImage(
	// 				convertFileToUrl(acceptedFiles[0]),
	// 			);
	// 		}
	// 	},
	// 	[setImage, onFieldChange, setShowProductImage],
	// );

	// const { getRootProps, getInputProps } = useDropzone({
	// 	onDrop,
	// 	accept: "image/*"
	// 		? generateClientDropzoneAccept(["image/*"])
	// 		: undefined,
	// });
	return (
		// <Dropzone onDrop={onDrop}>
		// 	{({
		// 		getRootProps,
		// 		getInputProps,
		// 		isDragActive,
		// 		isDragReject,
		// 		fileRejections,
		// 	}) => {
		// 		return (

		// 		);
		// 	}}
		// </Dropzone>
		<section className='w-full h-full flex justify-center text-stone-700 relative'>
			<div
				className={cn(
					" h-full w-full flex flex-col gap-4 justify-center items-center p-5 border border-dashed rounded-lg text-center text-white animate-pulse",
				)}>
				{/* <input
					{...getInputProps()}
					className='w-full'
				/>
				{isDragActive &&
					"click here or drag a file to upload!."}
				{isDragActive &&
					isDragReject &&
					"Drop to upload this file"}
				{isDragReject &&
					"File type not accepted, sorry!"} */}

				<p className='text-sm font-semibold capitalize text-stone-500'>
					click or drag and drop photo here!
				</p>
				<UploadButton
					endpoint='imageUploader'
					onClientUploadComplete={(res) => {
						toast({
							title: "Upload Complete",
							variant: "success",
						});

						setImage(res[0].url);
					}}
					onUploadError={(error: Error) => {
						// Do something with the error.
						alert(`ERROR! ${error.message}`);
						toast({
							title: "ERROR",
							description: error.message,
							variant: "destructive",
						});
					}}
				/>
			</div>
		</section>
	);
};

export default DropZone;
