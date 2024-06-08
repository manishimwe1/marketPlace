import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ShimmerButton({
	title,
	image,
	className,
	showImage,
}: {
	title: string;
	image?: string;
	className?: string;
	showImage?: boolean;
}) {
	return (
		<button
			className={cn(
				"inline-flex h-fit py-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ",
				className,
			)}>
			<div className='flex items-center gap-4'>
				{showImage ? (
					<Image
						src={image ?? ""}
						alt='loader'
						width={20}
						height={20}
					/>
				) : null}
				<p className='text-sm lg:text-base text-purple-200'>
					{title}
				</p>
			</div>
		</button>
	);
}

// tailwind.config.js code
