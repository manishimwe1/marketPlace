import AboutUs from "@/components/AboutUs";
import GridComponents from "@/components/GridComponents";
import Menubar from "@/components/Menubar";
import PopularCategory from "@/components/PopularCategory";
import SuperDeals from "@/components/SuperDeals";
import { getAllProduct } from "@/lib/actions/product.actions";
import { ProductType } from "@/typing";

async function page() {
	const allProduct: ProductType[] = await getAllProduct();

	return (
		<>
			<Menubar />
			<main className='max-container'>
				<AboutUs />
				<GridComponents allProduct={allProduct} />
				<PopularCategory allProduct={allProduct} />
				<SuperDeals />
			</main>
		</>
	);
}

export default page;
