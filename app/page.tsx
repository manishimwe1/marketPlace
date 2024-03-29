import AboutUs from "@/components/AboutUs";
import GridComponents from "@/components/GridComponents";
import Menubar from "@/components/Menubar";
import PopularCategory from "@/components/PopularCategory";
import SuperDeals from "@/components/SuperDeals";
import {
	IProduct,
	getAllProduct,
} from "@/lib/actions/product.actions";

async function page() {
	const allProduct: IProduct[] = await getAllProduct();
	console.log(allProduct, "this is all product");

	allProduct;

	return (
		<>
			<Menubar />
			<main className='max-container'>
				<AboutUs />
				<GridComponents />
				<PopularCategory allProduct={allProduct} />
				<SuperDeals />
			</main>
		</>
	);
}

export default page;
