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
			<div className='flex flex-col gap-4'>
				<div className='relative w-full h-96'>
					<Image
						src={"/images/no_result.gif"}
						alt='no product'
						fill
						className='object-contain'
					/>
				</div>
				<div className='w-full flex justify-center text-stone-400'>
					<Link
						href={
							"/saler/product/create-product"
						}
						className={cn(
							buttonVariants({
								variant: "ghost",
							}),
						)}>
						Create product
					</Link>
				</div>
			</div>
		</section>
	);
};

export default page;
