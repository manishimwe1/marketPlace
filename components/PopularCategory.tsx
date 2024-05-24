import { ProductType } from "@/typing";

const PopularCategory = ({
	allProduct,
}: {
	allProduct: ProductType[];
}) => {
	// console.log(allProduct, "this is product");

	return (
		// <section className='flex flex-col gap-6 mt-10'>
		// 	<h3 className='text-2xl font-bold text-stone-950 hover:underline hover:underline-offset-2 hover:cursor-pointer duration-100 hover:delay-100  w-fit'>
		// 		Explore Popular Categories
		// 	</h3>
		// 	{allCategoryProduct ? (
		// 		<div className=' px-8 w-full grid grid-cols-2 md:grid-cols-5 gap-10 mt-4'>
		// 			{allCategoryProduct
		// 				.slice(0, 5)
		// 				.map(
		// 					(
		// 						product: ICategory,
		// 						i: number,
		// 					) => (
		// 						<Link
		// 							key={product._id}
		// 							href={`/product/categrized/${product._id}`}>
		// 							<div
		// 								key={`product.title${i}`}
		// 								className=' w-full h-full group cursor-pointer  flex flex-col gap-2 items-center justify-center p-2'>
		// 								<div className='relative shadow-sm shadow-purple-500/20 p-2 bg-slate-200/20 w-36 h-36  rounded-full overflow-hidden'>
		// 									{/* <Image
		// 										src={
		// 											product.categoryName
		// 										}
		// 										fill
		// 										alt='speaker'
		// 										className='object-contain  p-2'
		// 									/> */}
		// 								</div>
		// 								<h4 className='text-sm group-hover:underline group-hover:underline-offset-4 font-bold text-stone-950/80'>
		// 									{
		// 										product
		// 											.category
		// 											.categoryName
		// 									}
		// 								</h4>
		// 							</div>
		// 						</Link>
		// 					),
		// 				)}
		// 		</div>
		// 	) : (
		// 		<div className='border w-full h-full'>
		// 			<Loader />
		// 		</div>
		// 	)}
		// </section>
		null
	);
};

export default PopularCategory;
