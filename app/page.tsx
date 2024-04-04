import AboutUs from "@/components/AboutUs";
import GridComponents from "@/components/GridComponents";
import Menubar from "@/components/Menubar";
import PopularCategory from "@/components/PopularCategory";
import SuperDeals from "@/components/SuperDeals";
import {
	IProduct,
	getAllProduct,
	getSuperDeals,
} from "@/lib/actions/product.actions";

async function page() {
	const allProduct: IProduct[] = await getAllProduct();

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
