import { getFirstWord } from "@/lib/utils";
import { IStore } from "@/typing";
import Link from "next/link";
import {
	getAllProductInStore,
	getStore,
} from "./_actions/getData";
import DashboardCard from "./_components/DashboardCard";
import { ChartBar } from "./_components/shared/chartComponent";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
	const session = await auth();
	const StoreData: IStore[] = await getStore();
	const store: any[] = [];
	const product = await getAllProductInStore(
		"66506276c5c5d98bf253ae04",
	);
	// console.log(StoreData, "STORE DATA");

	if (!session?.user) {
		redirect("/sign-in");
	}

	if (!StoreData)
		return (
			<div>
				<p>no data to show</p>
			</div>
		);

	StoreData.map((data, i) =>
		store.push({
			name: getFirstWord(data.name),
			idx: data._id,
		}),
	);

	const item = {
		title: "Total Revenue",
		amount: "1000",
		imageUrl: "/dollar.svg",
		desc: "Earned ",
	};

	return (
		<section className='w-full h-full flex-1  mt-10'>
			<div className='w-full h-full flex-1 gap-4  flex space-x-3 flex-col px-2 lg:px-4'>
				<h1 className='title text-dark-2'>
					Dashboard
				</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-6 px-2 lg:gap-3 lg:px-0 mt-4'>
					<Link href={"/dashboard/shop"}>
						<DashboardCard
							subTitle='Open'
							imageSrc={"/shop.svg"}
							amount={store.length}
							title='Total shop'
						/>
					</Link>
					<Link href={"/dashboard/shop"}>
						<DashboardCard
							subTitle='Income'
							imageSrc='/dollarSolid.svg'
							amount={1000}
							title={item.title}
						/>
					</Link>
					<Link href={"/dashboard/shop"}>
						<DashboardCard
							subTitle='You make'
							imageSrc='/shoppingBag.svg'
							amount={100}
							title='Total Order'
						/>
					</Link>
					<Link href={"/dashboard/shop"}>
						<DashboardCard
							subTitle='Pending...'
							imageSrc='/solidTruck.svg'
							amount={5}
							title='Pending Delively'
						/>
					</Link>
				</div>

				<div className=' h-full lg:h-[300px] w-full mt-10 flex justify-between items-center flex-col md:flex-row gap-4'>
					<ChartBar
						data={store}
						title='Product'
					/>
					<ChartBar
						data={store}
						title='Revenue income'
					/>
				</div>

				{/* <div className='lg:flex hidden w-[30%] h-fit bg-[#17171F] py-2 rounded-sm'>
				<div className='flex gap-3 items-center justify-between w-full'>
				<RightSideCard />
				</div>
			</div> */}
			</div>
		</section>
	);
};

export default DashboardPage;
