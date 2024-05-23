import { PinContainer } from "@/components/ui/3d-pin";
import ShimmerButton from "@/components/ui/ShimmerBtn";
import { ProductType } from "@/typing";
import Image from "next/image";
import Link from "next/link";
import { getAllProductInStore } from "../../_actions/getData";

type Props = {
	params: { id: string };
};
const storePage = async ({ params: { id } }: Props) => {
	const product: ProductType[] =
		await getAllProductInStore(id);
	// const store: StoreType[] = await getStoreById(id);

	console.log(product, "PRODUCT");

	return (
		<section className='h-full py-4 items-start justify-center'>
			{product ? (
				<div className='flex justify-between items-center w-full'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
						{product.map((product) => (
							<div
								key={product._id}
								className=' '>
								<PinContainer
									title={product.title}>
									<div className='h-[200px] w-[300px]'>
										<Image
											src={
												product.image
											}
											alt={
												product.title
											}
											fill
											className='object-contain'
										/>
									</div>
								</PinContainer>
							</div>
						))}
					</div>
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
						href={`/dashboard/shop/create-product/${id}`}>
						<ShimmerButton title='Create Store' />
					</Link>
				</div>
			)}
		</section>
	);
};

export default storePage;
