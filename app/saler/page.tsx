import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
	return (
		<section className='flex flex-col w-full max-container'>
			<div className='w-full flex justify-end'>
				<Link
					href={"/saler/product/create-product"}
					className={cn(buttonVariants())}>
					Create product
				</Link>
			</div>
			<div className='bg-slate-400/30 w-full rounded-3xl h-full flex items-center gap-4'>
				<div className='w-1/2 border flex justify-center items-center text-center'>
					<h1 className='text-stone-950 text-7xl font-bold tracking-wider'>
						Start selling with Gura & Gurisha
					</h1>
				</div>
				<div className='w-1/2 border relative h-96 py-10'>
					<Image
						src={"/png/kit.gif"}
						alt='kit'
						fill
						className='object-contain'
					/>
				</div>
			</div>
		</section>
	);
};

export default page;
