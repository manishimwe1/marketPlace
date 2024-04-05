import Menubar from "@/components/Menubar";
import StarWigets from "@/components/StarWigets";
import MenuNavigation from "@/components/shared/MenuNavigation";
import MenuTogler from "@/components/shared/MenuTogler";
import { getAllCategories } from "@/lib/actions/category.actions";
import { getProductByCategory } from "@/lib/actions/product.actions";
import { truncateString } from "@/lib/utils";
import { CategoryType, ProductType } from "@/typing";
import Image from "next/image";
type Props = {
	params: {
		category: string;
	};
};
const page = async ({ params: { category } }: Props) => {
	console.log(category);

	const product: ProductType[] =
		await getProductByCategory(category);

	const allCategory: CategoryType[] =
		await getAllCategories();
	console.log(allCategory, "this is all category");

	if (!product) {
		return console.log(
			"no pruct found ",
			typeof category,
		);
	}
	return (
		<>
			<Menubar />
			<section className='max-container text-stone-950'>
				<div className='h-10 py-2 shadow-sm shadow-purple-950/10 w-full bg-slate-400/20 flex justify-between items-center px-3'>
					<div>
						<p className='font-semibold '>
							1 page of {product.length}{" "}
							Results for{" "}
							<span className='text-primary font-bold underline underline-offset-2'>
								&#34;
								{
									product[0].category
										.categoryName
								}
								&#34;
							</span>
						</p>
					</div>
					<MenuNavigation title='Sort by' />
				</div>

				<div className='flex gap-3 w-full'>
					<div className='w-1/4 border border-t-0'>
						<MenuTogler
							allCategory={allCategory}
						/>
					</div>
					<div className=' w-full flex flex-col gap-6'>
						<div>
							<h3 className='text-2xl font-bold text-stone-950/80   w-fit'>
								Results
							</h3>
							<p className='text-muted-foreground text-sm font-medium mt-3'>
								Check each product page for
								other buying options. Price
								and other details may vary
								based on product size and
								color.
							</p>
						</div>
						{product.map((product) => (
							<div
								key={product._id}
								className='w-full flex justify-center  items-start gap-6 shadow-sm shadow-purple-400/20 rounded-lg  border'>
								<div className='w-1/2 h-60 relative bg-slate-400/20'>
									<Image
										src={product.image}
										alt={product.title}
										fill
										className='object-contain'
									/>
								</div>
								<div className='w-full flex items-start flex-col mt-5 gap-3'>
									<h3 className='text-2xl font-bold text-stone-950/80   w-fit'>
										{truncateString(
											product.title,
											80,
										)}
									</h3>
									<StarWigets />

									<p className='text-lg text-primary font-bold mt-4'>
										{product.price}{" "}
										<span className='text-xs '>
											rwf
										</span>
									</p>
								</div>
							</div>
						))}
					</div>
					<div className='w-1/4'></div>
				</div>
			</section>
		</>
	);
};

export default page;
