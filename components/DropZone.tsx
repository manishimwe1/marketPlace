"use client ";

import { cn, convertFileToUrl } from "@/lib/utils";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import {
	Dispatch,
	SetStateAction,
	useCallback,
} from "react";
import Dropzone, {
	FileWithPath,
	useDropzone,
} from "react-dropzone";
import { generateClientDropzoneAccept } from "uploadthing/client";

type Props = {
	setImage: Dispatch<SetStateAction<File[]>>;
	onFieldChange: (url: string) => void;
	setShowProductImage: Dispatch<SetStateAction<string>>;
};

const DropZone = ({
	setImage,
	onFieldChange,
	setShowProductImage,
}: Props) => {
	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			setImage(acceptedFiles);
			onFieldChange(
				convertFileToUrl(acceptedFiles[0]),
			);
			if (setShowProductImage) {
				setShowProductImage(
					convertFileToUrl(acceptedFiles[0]),
				);
			}
		},
		[setImage, onFieldChange, setShowProductImage],
	);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: "image/*"
			? generateClientDropzoneAccept(["image/*"])
			: undefined,
	});
	return (
		<Dropzone onDrop={onDrop}>
			{({
				getRootProps,
				getInputProps,
				isDragActive,
				isDragReject,
				fileRejections,
			}) => {
				return (
					<section className='w-full h-full flex justify-center text-stone-700'>
						<div
							{...getRootProps()}
							className={cn(
								" h-full w-full flex flex-col gap-4 justify-center items-center p-5 border border-dashed rounded-lg text-center",
								isDragActive
									? "bg-purple-500 text-white animate-pulse"
									: "bg-gradient text-slate-400",
							)}>
							<SquaresPlusIcon className='h-8 w-8' />

							<input
								{...getInputProps()}
								className='w-full'
							/>
							{isDragActive &&
								"click here or drag a file to upload!."}
							{isDragActive &&
								isDragReject &&
								"Drop to upload this file"}
							{isDragReject &&
								"File type not accepted, sorry!"}

							<p className='text-sm font-semibold text-stone-500'>
								click or drag and drop photo
								here!
							</p>
						</div>
					</section>
				);
			}}
		</Dropzone>
	);
};

export default DropZone;
