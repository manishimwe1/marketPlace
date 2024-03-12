import AboutUs from "@/components/AboutUs";
import GridComponents from "@/components/GridComponents";
import Menubar from "@/components/Menubar";
import PopularCategory from "@/components/PopularCategory";
import SuperDeals from "@/components/SuperDeals";

function page() {
	return (
		<>
			<Menubar />
			<main className='max-w-7xl overflow-x-hidden mx-auto py-10 px-5 flex flex-col gap-10 select-none'>
				<AboutUs />
				<GridComponents />
				<PopularCategory />
				<SuperDeals />
			</main>
		</>
	);
}

export default page;
