"use client";

import { ProductType } from "@/typing";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ProductType>[] = [
	{
		accessorKey: "_id",
		header: "Id",
	},
	{
		accessorKey: "title",
		header: "Title",
	},
	{
		accessorKey: "location",
		header: "Location",
	},
	{
		accessorKey: "category",
		header: "Category",
	},
	{
		accessorKey: "freeDelivery",
		header: "Free Delivery",
	},
	{
		accessorKey: "price",

		header: () => (
			<div className='text-right'>Price</div>
		),
		cell: ({ row }) => {
			const price = parseFloat(row.getValue("price"));
			const formatted = new Intl.NumberFormat(
				"en-US",
				{
					style: "currency",
					currency: "USD",
				},
			).format(price);

			return (
				<div className='text-right'>
					{formatted}
				</div>
			);
		},
	},
	{
		accessorKey: "provedByAdmin",
		header: "Proved",
	},
];
