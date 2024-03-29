import Loader from "@/components/shared/Loader";
import CountdownTimer from "@/components/shared/counterDown";
import {
	Button,
	buttonVariants,
} from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	IProduct,
	getAllProductById,
} from "@/lib/actions/product.actions";
import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
	params: { id: string };
};
const page = async ({ params: { id } }: Props) => {
	console.log(id);

	const product: IProduct = await getAllProductById(id);
	console.log(product, "this is product");

	return (
		<div className='max-container w-full p-20'>
			{product ? (
				<div className='w-full relative h-full flex text-stone-900 border rounded-3xl bg-purple-500/30 py-4'>
					<Link
						href={`/saler/product/${id}/edit-product`}
						className={cn(
							"absolute top-4 right-4 ring-2 ring-purple-500/30 hover:!bg-purple-500/30 !px-2",
							buttonVariants({
								variant: "ghost",
							}),
						)}>
						<Pencil className='text-stone-500' />
					</Link>
					<div className='w-[100px] h-full'>
						<div className='h-96 w-full relative'>
							<Image
								src={product.image}
								alt={product.title}
								fill
								className='object-contain'
							/>
						</div>
						L
					</div>
					<div className=' bg-purple-500/10 flex-1 rounded-3xl flex gap-3'>
						<div className='h-96 w-full relative'>
							<Image
								src={product.image}
								alt={product.title}
								fill
								className='object-contain'
							/>
						</div>
					</div>
					<div className=' flex flex-col gap-1 w-1/3 p-4 pl-0'>
						<div className='flex flex-col py-5 justify-center items-center gap-3'>
							<p className='text-xl text-muted-foreground font-semibold'>
								{product.category}
							</p>
							<h2 className='text-3xl font-bold text-stone-700 '>
								{product.title}
							</h2>

							<div className='flex px-3 py-1 bg-purple-900/10 w-fit rounded-full gap-2 mt-4'>
								<p className='text-3xl font-bold text-slate-950'>
									{product.price}
								</p>{" "}
								Rwf
							</div>
							<div>
								<p className='text-muted-foreground'>
									{product.description}
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
