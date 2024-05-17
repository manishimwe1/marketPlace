import AboutUs from "@/components/AboutUs";
import GridComponents from "@/components/GridComponents";
import Menubar from "@/components/Menubar";
import PopularCategory from "@/components/PopularCategory";
import SuperDeals from "@/components/SuperDeals";
import {
	getAllProduct,
	getSuperDeals,
} from "@/lib/actions/product.actions";
import { removeBgFromPicsArt } from "@/lib/actions/removeBackgroundImage";
import { ProductType } from "@/typing";

async function page() {
	const allProduct: ProductType[] = await getAllProduct();
	const superDealProduct: ProductType[] =
		await getSuperDeals();

	removeBgFromPicsArt(
		"https://utfs.io/f/913dee97-7e6f-4049-9786-8a4f40a1c498-ell9xm.jpg",
	).then((image) => {
		console.log("HERE++>", image);
	});

	return (
		<>
			{/* <ImageComponent removedImage={removedImage} /> */}
			<Menubar />
			<main className='max-container'>
				<AboutUs />
				<GridComponents
					allProduct={allProduct}
					superDealProduct={superDealProduct[0]}
				/>
				<PopularCategory allProduct={allProduct} />
				<SuperDeals />
			</main>
			<AboutUs />
		</>
	);
}

export default page;
