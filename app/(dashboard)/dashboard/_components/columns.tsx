"use client";

import { ProductType } from "@/typing";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ProductType>[] = [
	{
		accessorKey: "id",
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
		accessorKey: "price",
		header: "Amount",
	},
];
