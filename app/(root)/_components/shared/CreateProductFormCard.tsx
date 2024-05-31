import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const CreateProductFormCard = ({
	imgsrc,
	title,
}: {
	imgsrc?: string;
	title?: string;
}) => {
	return (
		<div className='bg-purple-400/20 h-[80px] py-3 flex flex-col items-center justify-center gap-1 w-full rounded-3xl cursor-pointer hover:brightness-200'>
			{imgsrc && (
				<Image
					src={imgsrc}
					alt={title ?? "ProductImage"}
					width={40}
					height={40}
					className='object-cover invert '
				/>
			)}
			<p className='font-semibold text-xs text-purple-500 '>
				{title}
			</p>
			<Input type='file' />
		</div>
	);
};

export default CreateProductFormCard;
