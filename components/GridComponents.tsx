import { ProductType } from "@/typing";
import GridOptions from "./shared/GridOptions";

const GridComponents = ({
	allProduct,
	superDealProduct,
}: {
	allProduct: ProductType[];
	superDealProduct: ProductType[];
}) => {
	return (
		<section className='w-full grid gap-y-6  md:gap-6 h-full md:p-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 grid-flow-dense '>
			<GridOptions
				className='col-span-1 row-span-1 hidden md:flex'
				title='Unknown'
				allProduct={allProduct}
			/>
			<GridOptions
				className='col-span-2 row-span-2'
				title='Super Deals'
				allProduct={allProduct}
			/>
			<GridOptions
				className='lg:col-span-2 col-span-2 row-span-2 md:col-span-3'
				title='New'
				allProduct={allProduct}
			/>
			<GridOptions
				className='row-span-1'
				title='Welcome Deal'
				subTitle='Your exclusive price'
				allProduct={allProduct}
			/>
		</section>
	);
};

export default GridComponents;
