"use client";

import { truncateString } from "@/lib/utils";
import { ProductType } from "@/typing";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ProductType>[] = [
	{
		accessorKey: "_id",
		header: "Id",
		cell: ({ row }) => {
			const id = row.getValue("_id") as string;

			return (
				<div className='text-right'>
					{truncateString(id, 8)}
				</div>
			);
		},
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
