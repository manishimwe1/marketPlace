import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductType } from "@/typing";
import Link from "next/link";
import { getAllProductInStore } from "../../_actions/getData";
import { columns } from "../../_components/columns";
import { DataTable } from "../../_components/data-table";
import DashboardHeaderBox from "../../_components/shared/DashboardHeaderBox";
import SearchBox from "@/components/shared/SearchBox";
import { Input } from "@/components/ui/input";
import DataTableTopAction from "../../_components/shared/DataTableTopAction";

type Props = {
	params: { id: string };
};

const storePage = async ({ params: { id } }: Props) => {
	const product: ProductType[] =
		await getAllProductInStore(id);

	return (
		<section className='w-full h-full max-wrapper  flex items-start justify-center flex-col gap-8 lg:gap-20'>
			<DashboardHeaderBox
				title='My product lists'
				buttonText='Create Product Listing'
				href={`/dashboard/shop/create-product/${id}`}
			/>
			<div className='h-full w-full flex flex-col gap-3'>
				<div className='w-full h-10 gap-20  py-2 flex items-center justify-between  rounded-t-lg '>
					<DataTableTopAction position={"left"} />
					<form className='w-full  py-1 bg-black/50 rounded-lg'>
						<Input
							className='w-full h-full bg-transparent focus-visible:ring-0 border-none placeholder:text-purple-100/30'
							placeholder='200 total product found..'
						/>
					</form>
					<DataTableTopAction
						position={"right"}
					/>
				</div>
				{product && (
					<DataTable
						columns={columns}
						data={product}
					/>
				)}
			</div>
		</section>
	);
};

export default storePage;
