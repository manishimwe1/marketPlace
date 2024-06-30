"use client ";

import { UploadButton, cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { useToast } from "./ui/use-toast";

type Props = {
	setImage: Dispatch<SetStateAction<string | undefined>>;
	onFieldChange: (url: string) => void;
};

const DropZone = ({ setImage, onFieldChange }: Props) => {
	const { toast } = useToast();

	return (
		<section className='w-full h-full flex justify-center text-stone-700 relative'>
			<div
				className={cn(
					" h-full w-full flex flex-col gap-4 justify-center items-center p-5 border border-dashed rounded-lg text-center text-dark-2 animate-pulse bg-black/20",
				)}>
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
