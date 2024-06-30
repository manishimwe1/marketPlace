import EmptyStatePage from "@/app/(dashboard)/dashboard/_components/shared/emptyState";
import Loader from "@/components/shared/Loader";
import CountdownTimer from "@/components/shared/counterDown";
import { Badge } from "@/components/ui/badge";
import {
	Button,
	buttonVariants,
} from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn, truncateString } from "@/lib/utils";
import { ProductType } from "@/typing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { adminUser } from "@/lib/adminUser";
import SubmitActions from "../../_components/SubmitActions";
import { getProductById } from "@/app/(root)/_actions/product.actions";

type Props = {
	params: { id: string };
};
const page = async ({ params: { id } }: Props) => {
	const session = await auth();
	if (!session?.user) {
		throw new Error("Unthorize");
	}
	if (!adminUser) return;

	if (
		adminUser.id !== session.user.id ||
		adminUser.email !== session.user.email ||
		adminUser.name !== session.user.name
	)
		return redirect("/");
	const product: ProductType = await getProductById(id);

	return (
		<div className=' w-full p-2 lg:p-20'>
			{product ? (
				<div className='w-full relative h-full flex md:flex-row flex-col  text-stone-900  rounded-3xl bg-light-2 py-4'>
					<Link
						href={`/saler/product/edit-product/${id}`}
						className={cn(
							"absolute top-4 right-4 ring-2 ring-purple-500/30 hover:!bg-purple-500/30 !px-2 z-20 bg-white/20 ",
							buttonVariants({
								variant: "ghost",
							}),
						)}>
						<Pencil className='text-stone-500' />
					</Link>

					<div className=' bg-purple-500/10   flex-1 relative rounded-3xl flex flex-col md:flex-row  p-5 bg-purple-50 shadow-sm shadow-purple-500/30 '>
						<div className='w-[100px] h-full hidden lg:flex flex-col px-3 gap-4 bg-purple-50'>
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
						<div className='lg:h-[100%] h-80 w-full relative  bg-purple-50 rounded-r-3xl'>
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
									{product.description}
								</p>
							</div>
						</div>
						<Separator className='h-1 w-full mt-5 mb-4 rounded-r-lg bg-purple-500/10' />

						<SubmitActions product={product} />
					</div>
				</div>
			) : (
				<div className=' w-full flex flex-col justify-center items-center '>
					<EmptyStatePage title='There is no Product found for this Id' />
				</div>
			)}
		</div>
	);
};

export default page;
