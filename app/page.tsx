import AboutUs from "@/components/AboutUs";
import GridComponents from "@/components/GridComponents";
import Menubar from "@/components/Menubar";
import PopularCategory from "@/components/PopularCategory";
import SuperDeals from "@/components/SuperDeals";
import { getAllProduct } from "@/lib/actions/product.actions";
import { RemoveBgInImage } from "@/lib/actions/removeBgImage";
import { ProductType } from "@/typing";

async function page() {
	const allProduct: ProductType[] = await getAllProduct();
	const removedImage = await RemoveBgInImage(
		"https://utfs.io/f/bb2a8819-c4dd-40a5-b678-ca56c4339959-i4ezo1._AC_SX679_.jpg",
	);
	console.log(removedImage, "this is removed image");

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
