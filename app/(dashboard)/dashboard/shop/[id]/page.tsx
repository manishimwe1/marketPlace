import { PinContainer } from "@/components/ui/3d-pin";
import ShimmerButton from "@/components/ui/ShimmerBtn";
import { ProductType } from "@/typing";
import Image from "next/image";
import Link from "next/link";
import { getAllProductInStore } from "../../_actions/getData";
import { DataTable } from "../../_components/data-table";
import {
	Payment,
	columns,
} from "../../_components/columns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type Props = {
	params: { id: string };
};
async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		{
			id: "1",
			amount: 100,
			status: "pending",
			email: "m@example.com",
			name: "Manishimwe",
		},
		// ...
	];
}
const storePage = async ({ params: { id } }: Props) => {
	const product: ProductType[] =
		await getAllProductInStore(id);
	// const store: StoreType[] = await getStoreById(id);

	const data = await getData();

	return (
		<section className='w-full h-full !mt-0 !py-10 flex items-start justify-center flex-col gap-4'>
			<div className=' w-full  flex justify-between items-center'>
				<h2 className='title !text-purple-300'>
					My product lists
				</h2>
				<div className='justify-end lg:mr-20 hidden lg:inline-block'>
					<Link
						href={`/dashboard/shop/create-product/${id}`}
						className={cn(buttonVariants())}>
						Create Product Listing
					</Link>
				</div>
			</div>
			<DataTable columns={columns} data={data} />
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
