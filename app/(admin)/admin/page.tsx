import MoreToLoveCard from "@/components/shared/MoreToLoveCard";
import { ProductType } from "@/typing";
import React from "react";
import { getProductNotProven } from "../_actions/getProductNotProven";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import EmptyStatePage from "@/app/(dashboard)/dashboard/_components/shared/emptyState";
import {
	Button,
	buttonVariants,
} from "@/components/ui/button";
import { ArrowDownLeftFromCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

type Props = {};

async function AdminPage({}: Props) {
	const session = await auth();

	if (!session) redirect("/");

	const allProduct = await getProductNotProven();

	if (!allProduct)
		return (
			<div className='mt-10 flex flex-col gap-4 items-center justify-center'>
				<EmptyStatePage title='unthorized You are not allowed to be here' />
				<Link
					href='/'
					className={cn(
						buttonVariants(),
						"w-fit px-10",
					)}>
					<ArrowUturnLeftIcon className='h4 w-4 mr-4' />
					Go back
				</Link>
			</div>
		);
	console.log(allProduct);

	return (
		<main className='px-2 lg:px-4'>
			<div className='grid grid-cols-1  mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full h-full gap-2 lg:gap-4'>
				{allProduct.length > 0
					? allProduct.map(
							(product: ProductType) => (
								<Link
									href={`/admin/${product._id}`}
									key={product._id}>
									<MoreToLoveCard
										admin={true}
										product={product}
									/>
								</Link>
							),
					  )
					: !allProduct && <p>no data to show</p>}
			</div>
		</main>
	);
}

export default AdminPage;
