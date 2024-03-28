import AboutUs from "@/components/AboutUs";
import GridComponents from "@/components/GridComponents";
import Menubar from "@/components/Menubar";
import PopularCategory from "@/components/PopularCategory";
import SuperDeals from "@/components/SuperDeals";

function page() {
	return (
		<>
			<Menubar />
			<main className='max-container'>
				<AboutUs />
				<GridComponents />
				<PopularCategory />
				<SuperDeals />
			</main>
		</>
	);
}

export default page;
