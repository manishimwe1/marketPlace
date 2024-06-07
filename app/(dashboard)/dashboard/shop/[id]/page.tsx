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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

type Props = {
	params: { id: string };
};

const storePage = async ({ params: { id } }: Props) => {
	const product: ProductType[] =
		await getAllProductInStore(id);

	return (
		<section className='w-full h-full max-wrapper relative px-3 lg:px0 flex items-start justify-center flex-col gap-8 lg:gap-20 overflow-x-auto'>
			<DashboardHeaderBox
				title='My product lists'
				buttonText='Create Product Listing'
				href={`/dashboard/shop/create-product/${id}`}
			/>
			<div className='h-full w-full flex flex-col gap-3 items-center justify-center'>
				<div className='w-full h-10 gap-2 lg:gap-20  py-2 flex items-center justify-center lg:justify-between  rounded-t-lg '>
					<DataTableTopAction position={"left"} />
					<form className='w-fit lg:w-full lg:py-1 bg-black/50 rounded-lg'>
						<Select>
							<SelectTrigger className='w-full border-none bg-transparent text-purple-200 focus-visible:ring-0 focus-visible:border-none'>
								<Input
									className='w-full h-full bg-transparent focus-visible:ring-0 border-none placeholder:text-purple-100/30'
									placeholder='200 total product found..'
								/>
							</SelectTrigger>
							<SelectContent className='bg-gradient text-purple-200 border-white/10'>
								<SelectItem
									value='light'
									className='hover:!bg-black/50 hover:!text-purple-100 cursor-pointer'>
									Light
								</SelectItem>
								<SelectItem
									value='dark'
									className='hover:!bg-black/50 hover:!text-purple-100 cursor-pointer'>
									Dark
								</SelectItem>
								<SelectItem
									value='system'
									className='hover:!bg-black/50 hover:!text-purple-100 cursor-pointer'>
									System
								</SelectItem>
							</SelectContent>
						</Select>
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
