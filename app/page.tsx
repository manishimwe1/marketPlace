import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import LiveAuctions from "@/components/LiveAuctions";
import MostPopular from "@/components/MostPopular";
import TopSellers from "@/components/TopSellers";

export default function Home() {
	return (
		<main className='h-screen w-full '>
			<Hero />
			<section className=' py-4 max-w-6xl mx-auto px-6 mt-10'>
				<LiveAuctions />
			</section>
			<section className=' py-4 max-w-6xl mx-auto px-6 mt-10'>
				<TopSellers />
			</section>
			<section className=' py-4 max-w-6xl mx-auto px-6 mt-10'>
				<MostPopular />
			</section>
			<section className=' py-4 max-w-6xl mx-auto px-6 mt-10'>
				<Explore />
			</section>
			<section className=' py-4 max-w-6xl mx-auto px-6 mt-10'>
				<HowItWork />
			</section>
		</main>
	);
}
