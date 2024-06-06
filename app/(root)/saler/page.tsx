import {
	Button,
	buttonVariants,
} from "@/components/ui/button";
import { auth, signIn } from "@/auth";
import { StarIcon } from "@heroicons/react/24/solid";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const page = async () => {
	const session = await auth();
	return (
		<section className='flex flex-col w-full max-container'>
			<div className='h-14 py-2 shadow-sm shadow-purple-950/10 w-full bg-slate-400/20 flex justify-between items-center px-3'>
				<p className='font-semibold text-stone-600'>
					Sell with Gura gurisha
				</p>
				<div className='flex gap-1 items-center'>
					<StarIcon className='text-green-500 h-6 w-6' />
					<p className='font-semibold text-stone-600'>
						Get 100% free for hosting your store
						in branded sales.
						<span className=' pl-2 text-primary font-bold hover:underline underline-offset-2 cursor-pointer'>
							Learn more
						</span>
					</p>
				</div>
				{session?.user ? (
					<Link
						href={"/dashboard/shop"}
						className={cn(buttonVariants())}>
						Create product
					</Link>
				) : (
					<div>
						<form
							action={async () => {
								"use server";
								await signIn("google");
							}}
							className=' !p-0'>
							<Button className='rounded-full text-slate-100'>
								Sign in
							</Button>
						</form>
					</div>
				)}
			</div>
			<div className='bg-slate-100 bg-Image bg-left bg-no-repeat bg-blend-screen bg-opacity-20 bg-cover w-full rounded-b-3xl h-full flex items-center gap-4'>
				<div className='w-1/2  flex justify-center items-center text-center flex-col gap-4'>
					<h1 className='text-purple-800 text-7xl font-bold tracking-wider leading-snug'>
						Start selling with Gura Gurisha
					</h1>
					<p className='font-semibold text-muted-foreground'>
						Put your products in front of the
						millions eyez of customers
					</p>
					<div className='w-full flex justify-center text-stone-400'>
						<Link
							href={"/dashboard/shop"}
							className={cn(
								"!text-white !text-lg",
								buttonVariants({
									variant: "link",
									size: "lg",
								}),
							)}>
							Create product{" "}
							<ArrowRight className='h-5 w-10 text-white' />
						</Link>
					</div>
				</div>
				<div className='w-1/2  relative h-[450px] py-10 rounded-3xl'>
					<Image
						src={"/png/kit.gif"}
						alt='kit'
						fill
						className='object-contain rounded-br-3xl '
					/>
				</div>
			</div>
		</section>
	);
};

export default page;
