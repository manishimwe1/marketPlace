import { ICategory, ProductType } from "@/typing";
import Link from "next/link";
import Loader from "./shared/Loader";
import { CategoryData } from "@/constants";

const PopularCategory = ({
	allProductCategory,
}: {
	allProductCategory: ICategory[];
}) => {
	console.log(allProductCategory);

	return (
		<section className='flex flex-col gap-6 mt-10'>
			<h3 className='text-2xl font-bold text-stone-950 hover:underline hover:underline-offset-2 hover:cursor-pointer duration-100 hover:delay-100  w-fit'>
				Explore Popular Categories
			</h3>
			{CategoryData ? (
				<div className=' px-8 w-full grid grid-cols-2 md:grid-cols-5 gap-10 mt-4'>
					{CategoryData.slice(0, 5).map(
						(product, i: number) => (
							<Link
								key={product.title}
								href={`/product/categrized/`}>
								<div
									key={`product.title${i}`}
									className=' w-full h-full group cursor-pointer  flex flex-col gap-2 items-center justify-center p-2 relative'>
									<div
										className='relative shadow-sm shadow-purple-500/20 p-2  bg-no-repeat bg-center bg-contain w-36 h-36  rounded-full flex justify-center items-center'
										style={{
											backgroundImage:
												"url(`${}`)",
										}}>
										<div className='absolute bg-black/30 backdrop-filter backdrop-blur-sm  h-full w-full rounded-full' />
										<h4 className='text-sm lg:text-base capitalize group-hover:underline group-hover:underline-offset-4 font-bold text-light-2 z-20'>
											{product.title}
										</h4>
									</div>
								</div>
							</Link>
						),
					)}
				</div>
			) : (
				<div className='border w-full h-full'>
					<Loader />
				</div>
			)}
		</section>
	);
};

export default PopularCategory;
