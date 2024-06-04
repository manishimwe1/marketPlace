import AboutUs from "@/components/AboutUs";
import GridComponents from "@/components/GridComponents";
import Menubar from "@/components/Menubar";
import PopularCategory from "@/components/PopularCategory";
import SuperDeals from "@/components/SuperDeals";
import {
	getAllProduct,
	getAllProductCategory,
	getSuperDeals,
} from "@/lib/actions/product.actions";
import { removeBgFromPicsArt } from "@/lib/actions/removeBackgroundImage";
import {
	CategoryType,
	ICategory,
	ProductType,
} from "@/typing";

async function page() {
	const allProduct: ProductType[] = await getAllProduct();
	const allProductCategory: ICategory[] =
		await getAllProductCategory();
	const superDealProduct: ProductType[] =
		await getSuperDeals();

	return (
		<div className='w-full h-full  overflow-y-auto absolute inset-0'>
			{/* <ImageComponent removedImage={removedImage} /> */}
			<Menubar
				allProductCategory={allProductCategory}
			/>
			<main className='max-container'>
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
			</main>
			<div className='w-full h-full lg:hidden flex'>
				<AboutUs />
			</div>
		</div>
	);
}

export default page;
