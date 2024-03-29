"use client";

import { cn } from "@/lib/utils";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";
import Dropzone from "react-dropzone";

type Props = {
	setImage: Dispatch<SetStateAction<string | undefined>>;
};

const DropZone = ({ setImage }: Props) => {
	const onDrop = (acceptedFiles: File[]) => {
		acceptedFiles.forEach((file) => {
			const reader = new FileReader();
			reader.onabort = () =>
				console.log("file reader was aborted");
			reader.onerror = () =>
				console.log("file reader has failed");
			reader.onload = async () => {
				const Url = URL.createObjectURL(file);

				setImage(Url);
				console.log("===>on load", file);
			};
			reader.readAsArrayBuffer(file);
		});
	};
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
					<section className='w-full flex justify-center text-stone-700'>
						<div
							{...getRootProps()}
							className={cn(
								" h-28 w-full flex flex-col gap-4 justify-center items-center p-5 border border-dashed rounded-lg text-center",
								isDragActive
									? "bg-purple-500 text-white animate-pulse"
									: "bg-purple-100/50 dark:bg-purple-800/80 text-slate-400",
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
