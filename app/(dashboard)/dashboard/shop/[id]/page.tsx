import { PinContainer } from "@/components/ui/3d-pin";
import {
	StoreType,
	getStoreById,
} from "../../_actions/getData";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ShimmerButton from "@/components/ui/ShimmerBtn";

type Props = {
	params: { id: string };
};
const storePage = async ({ params: { id } }: Props) => {
	const store: StoreType[] = await getStoreById(id);
	console.log(store);

	return (
		<section className='h-full py-20 items-center justify-center'>
			{store ? (
				<div className='flex justify-between items-center w-full'>
					<div></div>
					<div className='justify-end hidden lg:inline-block'>
						<Link
							href={`/dashboard/shop/create-product/${id}`}>
							<ShimmerButton title='Create Store' />
						</Link>
					</div>
				</div>
			) : (
				<div className='flex items-center justify-center flex-col'>
					<Image
						src={"/images/3db.png"}
						alt='no product found'
						width={300}
						height={300}
						className='object-contain'
					/>
					<p className='text-lg font-semibold tracking-wide'>
						It look like you haven't create any
						product
					</p>
					<Link
						href={
							"/saler/product/create-product"
						}>
						<ShimmerButton title='Create product' />

						{/* <ArrowRight className='h-5 w-10 text-white' /> */}
					</Link>
				</div>
			)}
			{/* <PinContainer>
				
			</PinContainer> */}
		</section>
	);
};

export default storePage;
