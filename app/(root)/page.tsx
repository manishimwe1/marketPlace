import AboutUs from "@/components/AboutUs";
import ChooseByBrand from "@/components/ChooseByBrand";
import GridComponents from "@/components/GridComponents";
import Menubar from "@/components/Menubar";
import MoreToLove from "@/components/MoreToLove";
import NewCollectionCard from "@/components/NewCollectionCard";
import PopularCategory from "@/components/PopularCategory";
import SuperDeals from "@/components/SuperDeals";
import ShoppingOptionsCard from "@/components/shared/ShoppingOptionsCard";
import { Separator } from "@/components/ui/separator";
import {
	getAllProduct,
	getAllProductCategory,
	getSuperDeals,
} from "@/lib/actions/product.actions";
import { ICategory, ProductType } from "@/typing";

async function page() {
	const allProduct: ProductType[] = await getAllProduct();
	const allProductCategory: ICategory[] =
		await getAllProductCategory();
	const superDealProduct: ProductType[] =
		await getSuperDeals();

	return (
		<div className='w-full h-full  overflow-y-auto absolute inset-x-0 pb-20'>
			{/* <ImageComponent removedImage={removedImage} /> */}
			<Menubar
				allProductCategory={allProductCategory}
			/>
			<main className='max-container pb-10'>
				<div className='w-full h-full hidden lg:flex'>
					<AboutUs />
				</div>
				<GridComponents
					allProduct={allProduct}
					superDealProduct={superDealProduct}
				/>
				<PopularCategory
					allProductCategory={allProductCategory}
				/>
				<SuperDeals />
				<ChooseByBrand />
				<section className='w-full h-full '>
					<h3 className='text-2xl font-bold text-stone-950 hover:underline hover:underline-offset-2 hover:cursor-pointer duration-100 hover:delay-100  w-fit'>
						Trending Product For You!
					</h3>
					<div className='w-full flex h-full items-center justify-between flex-col md:flex-row gap-6 lg:gap-12 mt-4 md:mt-10'>
						<div className='w-full md:w-[50%] flex flex-col sm:flex-row gap-2 items-center justify-center h-full  rounded-3xl'>
							<ShoppingOptionsCard />
							<ShoppingOptionsCard />
						</div>
						<div className='w-full md:w-[50%] flex gap-2 items-center justify-center h-full'>
							<NewCollectionCard
								title={"Plus"}
								subTitle={
									"Featured brands with savings"
								}
								allProduct={allProduct}
							/>
						</div>
					</div>
				</section>
				<div className='w-full h-fit flex items-center justify-center py-10'>
					<Separator className='max-w-5xl mx-auto border border-purple-800/50 rounded-full' />
				</div>
				<MoreToLove />
			</main>
			<div className='w-full h-full lg:hidden flex'>
				<AboutUs />
			</div>
		</div>
	);
}

export default page;
