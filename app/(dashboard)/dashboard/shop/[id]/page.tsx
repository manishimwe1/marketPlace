import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductType } from "@/typing";
import Link from "next/link";
import { getAllProductInStore } from "../../_actions/getData";
import { columns } from "../../_components/columns";
import { DataTable } from "../../_components/data-table";
import DashboardHeaderBox from "../../_components/shared/DashboardHeaderBox";

type Props = {
	params: { id: string };
};

const storePage = async ({ params: { id } }: Props) => {
	const product: ProductType[] =
		await getAllProductInStore(id);
	// const store: StoreType[] = await getStoreById(id);

	console.log(product, "this is product>>>>");

	return (
		<section className='w-full min-h-screen max-wrapper  flex items-start justify-center flex-col gap-8 lg:gap-20'>
			<DashboardHeaderBox
				title='My product lists'
				buttonText='Create Product Listing'
				href={`/dashboard/shop/create-product/${id}`}
			/>
			<div className='h-full w-full '>
				{product && (
					<DataTable
						columns={columns}
						data={product}
					/>
				)}
			</div>
		</section>
		// <section className='h-full py-4 items-start justify-center'>
		// 	{product ? (
		// 		<div className='flex justify-between items-center w-full'>
		// 			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
		// 				{product.map((product) => (
		// 					<div
		// 						key={product._id}
		// 						className=' '>
		// 						<PinContainer
		// 							title={product.title}>
		// 							<div className='h-[200px] w-[300px]'>
		// 								<Image
		// 									src={
		// 										product.image
		// 									}
		// 									alt={
		// 										product.title
		// 									}
		// 									fill
		// 									className='object-contain'
		// 								/>
		// 							</div>
		// 						</PinContainer>
		// 					</div>
		// 				))}
		// 			</div>
		// 			<div className='justify-end hidden lg:inline-block'>
		// 				<Link
		// 					href={`/dashboard/shop/create-product/${id}`}>
		// 					<ShimmerButton title='Create Store' />
		// 				</Link>
		// 			</div>
		// 		</div>
		// 	) : (
		// 		<div className='flex items-center justify-center flex-col'>
		// 			<Image
		// 				src={"/images/3db.png"}
		// 				alt='no product found'
		// 				width={300}
		// 				height={300}
		// 				className='object-contain'
		// 			/>
		// 			<p className='text-lg font-semibold tracking-wide'>
		// 				It look like you haven t create any
		// 				product
		// 			</p>
		// 			<Link
		// 				href={`/dashboard/shop/create-product/${id}`}>
		// 				<ShimmerButton title='Create Store' />
		// 			</Link>
		// 		</div>
		// 	)}
		// </section>
	);
};

export default storePage;
