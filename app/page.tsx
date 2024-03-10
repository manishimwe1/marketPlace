import AboutUs from "@/components/AboutUs";
import GridComponents from "@/components/GridComponents";
import Menubar from "@/components/Menubar";
import TheLatest from "@/components/TheLatest";

function page() {
	return (
		<>
			<Menubar />
			<main className='max-w-7xl mx-auto pb-20 flex flex-col gap-10'>
				<AboutUs />
				<GridComponents />
				<TheLatest />
			</main>
		</>
	);
}

export default page;
