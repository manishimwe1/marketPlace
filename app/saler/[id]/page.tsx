import Loader from "@/components/shared/Loader";
import CountdownTimer from "@/components/shared/counterDown";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	IProduct,
	getAllProductById,
} from "@/lib/actions/product.actions";
import { Loader2 } from "lucide-react";
import Image from "next/image";

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
				<div className='w-full h-full p-4 flex gap-3 text-stone-900 border rounded-3xl bg-purple-500/30'>
					<div className=' bg-purple-500/10 w-1/2 rounded-3xl'>
						<div className='h-96 w-full relative'>
							<Image
								src={product.image}
								alt={product.title}
								fill
								className='object-contain'
							/>
						</div>
					</div>
					<div className=' flex flex-col gap-1 w-1/2'>
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
						<Separator className='h-1 w-full mt-5 mb-4' />
						<div className='w-full flex justify-between'>
							<p className='text-lg text-slate-700'>
								Aproval time for product
							</p>
							<div className='boder h-10 flex gap-2'>
								<CountdownTimer days={5} />
								<p className='text-muted-foreground text-sm '>
									In minimum
								</p>
							</div>
						</div>
						<div className='flex flex-col justify-center'>
							<Loader />
							<Button variant={"link"}>
								Check how is it going
							</Button>
						</div>
					</div>
				</div>
			) : (
				<div className='h-screen w-full flex justify-center items-center '>
					<Loader />
				</div>
			)}
		</div>
	);
};

export default page;
