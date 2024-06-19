import MoreToLoveCard from "@/components/shared/MoreToLoveCard";
import { ProductType } from "@/typing";
import React from "react";
import { getProductNotProven } from "../_actions/getProductNotProven";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

type Props = {};

async function AdminPage({}: Props) {
	const session = await auth();

	if (!session) redirect("/");

	const allProduct = await getProductNotProven();

	if (!allProduct) return <div>UNthorized</div>;
	console.log(allProduct);

	return (
		<main>
			<div className='grid grid-cols-1  mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full h-full gap-2 lg:gap-4'>
				{allProduct.length > 0
					? allProduct.map(
							(product: ProductType) => (
								<MoreToLoveCard
									admin={true}
									product={product}
									key={product._id}
								/>
							),
					  )
					: !allProduct && <p>no data to show</p>}
			</div>
		</main>
	);
}

export default AdminPage;
