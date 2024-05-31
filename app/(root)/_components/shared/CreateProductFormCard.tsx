"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, {
	Dispatch,
	SetStateAction,
	useRef,
	useState,
} from "react";
import { cn } from "@/lib/utils";

const CreateProductFormCard = ({
	imgsrc,
	title,
	setView,
}: {
	imgsrc?: string;
	title?: string;
	setView?: Dispatch<SetStateAction<string | undefined>>;
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [frontView, setFrontView] = useState<string>();

	const handleImage = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		if (!e.target?.files) return;
		if (e.target?.files[0]) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = (readerEvent) => {
				//@ts-ignore
				setFrontView(readerEvent.target.result);
				//@ts-ignore
				setView(readerEvent.target.result);
			};
		}
	};

	return (
		<div
			className='bg-purple-400/20 h-[80px] py-3 flex flex-col items-center justify-center gap-1 w-full rounded-3xl cursor-pointer hover:brightness-200'
			onClick={() => inputRef.current?.click()}>
			{frontView ? (
				<Image
					src={frontView}
					alt={title ?? "ProductImage"}
					width={40}
					height={40}
					className={cn(
						"object-cover invert ",
						frontView && "invert-0",
					)}
				/>
			) : (
				imgsrc && (
					<Image
						src={imgsrc ?? ""}
						alt={title ?? "ProductImage"}
						width={40}
						height={40}
						className='object-cover invert '
					/>
				)
			)}
			<p className='font-semibold text-xs text-purple-500 '>
				{title}
			</p>
			<Input
				type='file'
				className='hidden'
				ref={inputRef}
				accept='image/*'
				onChange={handleImage}
			/>
		</div>
	);
};

export default CreateProductFormCard;
