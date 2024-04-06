import Loader from "@/components/shared/Loader";
import CountdownTimer from "@/components/shared/counterDown";
import { Badge } from "@/components/ui/badge";
import {
	Button,
	buttonVariants,
} from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	ProductType,
	getAllProductById,
} from "@/lib/actions/product.actions";
import { cn, truncateString } from "@/lib/utils";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	params: { id: string };
};
const page = async ({ params: { id } }: Props) => {
	// console.log(id);

	const product: ProductType = await getAllProductById(
		id,
	);

	return (
		<div className='max-container w-full p-20'>
			{product ? (
				<div className='w-full relative h-full flex text-stone-900 border rounded-3xl bg-purple-500/30 py-4'>
					<Link
						href={`/saler/product/edit-product/${id}`}
						className={cn(
							"absolute top-4 right-4 ring-2 ring-purple-500/30 hover:!bg-purple-500/30 !px-2",
							buttonVariants({
								variant: "ghost",
							}),
						)}>
						<Pencil className='text-stone-500' />
					</Link>

					<div className=' bg-purple-500/10 flex-1 relative rounded-3xl flex  p-5 bg-purple-50 shadow-sm shadow-purple-500/30 '>
						<div className='w-[100px] h-full flex flex-col px-3 gap-4 bg-purple-50'>
							<div className='h-40 w-full relative'>
								<Image
									src={product.image}
									alt={product.title}
									fill
									className='object-contain'
								/>
							</div>
							<div className='h-40 w-full relative'>
								<Image
									src={product.image}
									alt={product.title}
									fill
									className='object-contain'
								/>
							</div>
							<div className='h-40 w-full relative'>
								<Image
									src={product.image}
									alt={product.title}
									fill
									className='object-contain'
								/>
							</div>
						</div>
						<div className='h-[100%] w-full relative  bg-purple-50 rounded-r-3xl'>
							<Image
								src={product.image}
								alt={product.title}
								fill
								className='object-contain rounded-3xl '
							/>
						</div>
					</div>
					<div className=' flex flex-col gap-1 w-[40%] p-4 '>
						<div className='flex flex-col py-5 justify-center items-center gap-3'>
							<Link
								className={cn(
									buttonVariants({
										variant: "link",
									}),
									"self-start !px-0",
								)}
								href={`/category/${product.category}`}>
								<Badge className='text-base text-muted-foreground font-semibold  cursor-pointer hover:underline hover:!bg-purple-500/50 transition-all delay-150 duration-150 ease-in-out bg-purple-500/30'>
									{product.category}
								</Badge>
							</Link>
							<h2 className='text-3xl font-bold text-stone-700 '>
								{truncateString(
									product.title,
									50,
								)}
							</h2>

							<div className='flex px-3 py-1 bg-purple-900/10 w-fit rounded-full gap-2 mt-4'>
								<p className='text-3xl font-bold text-slate-950'>
									{product.price}
								</p>{" "}
								Rwf
							</div>
							<div>
								<p className='text-muted-foreground'>
									{`${product.description.substring(
										0,
										150,
									)}...`}
								</p>
							</div>
						</div>
						<Separator className='h-1 w-full mt-5 mb-4 rounded-r-lg bg-purple-500/10' />
						<div className='w-full flex justify-between bg-purple-500/10 rounded-r-3xl px-3 items-center '>
							<p className=' font-medium text-slate-700 text-wrap text-sm '>
								Aproval time
								<br /> for publishing your
								product
							</p>
							<div className='boder h-10 flex gap-2 items-center p-2'>
								<CountdownTimer days={5} />
								<p className='text-muted-foreground text-sm '>
									(In min)
								</p>
							</div>
						</div>
						<div className='flex flex-col justify-center mt-10'>
							<Loader />
							<Button variant={"link"}>
								Check how is it going
							</Button>
						</div>
					</div>
				</div>
			) : (
				<div className=' w-full flex flex-col justify-center items-center '>
					<Loader />
					<div className='relative w-full h-96'>
						<Image
							src={"/images/no_result.gif"}
							alt='no product'
							fill
							className='object-contain'
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default page;
