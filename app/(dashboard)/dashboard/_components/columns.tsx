"use client";

import { ProductType } from "@/typing";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ProductType>[] = [
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
		header: "Price",
	},
	{
		accessorKey: "provedByAdmin",
		header: "Proved",
	},
];
