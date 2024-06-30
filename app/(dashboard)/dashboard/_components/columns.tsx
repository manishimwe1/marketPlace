"use client";

import { truncateString } from "@/lib/utils";
import { ProductType } from "@/typing";
import { ColumnDef } from "@tanstack/react-table";
import { Check, X } from "lucide-react";

export const columns: ColumnDef<ProductType>[] = [
	{
		accessorKey: "_id",
		header: "Id",
		cell: ({ row }) => {
			const id = row.getValue("_id") as string;

			return (
				<div className='text-left'>
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
		cell: ({ row }) => {
			const proved = row.getValue("provedByAdmin");

			if (proved === false) {
				return (
					<div className='text-right flex gap-1 items-center justify-between'>
						<p className='font-semibold text-red-500 '>
							False
						</p>
						<X className='h-4 w-4 rounded-full text-red-500 border border-red-500' />
					</div>
				);
			} else {
				return (
					<div className='text-right flex gap-1 items-center justify-between'>
						<p className='font-semibold text-green-500 '>
							True
						</p>
						<Check className='h-4 w-4 rounded-full text-green-500 border border-green-500' />
					</div>
				);
			}
		},
	},
];
